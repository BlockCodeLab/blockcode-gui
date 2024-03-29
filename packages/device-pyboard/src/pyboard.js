/* inspired by https://github.com/arduino/micropython.js/blob/main/micropython.js */

import { Serial, sleep } from '@blockcode/core';

const CTRL_A = '\x01'; // raw repl
const CTRL_B = '\x02'; // exit raw repl
const CTRL_C = '\x03'; // ctrl-c
const CTRL_D = '\x04'; // reset (ctrl-d)
const CTRL_E = '\x05'; // paste mode (ctrl-e)
const CTRL_F = '\x06'; // safe boot (ctrl-f)

const CHUNK_SIZE = 128;

function fixLineBreak(str) {
  // https://stackoverflow.com/questions/4025760/python-file-write-creating-extra-carriage-return
  return str.replaceAll('\r\n', '\n');
}

function extract(str) {
  /**
   * Message ($msg) will come out following this template:
   * "OK${msg}\x04${err}\x04>"
   */
  return str.slice(2, -3);
}

export default class MicroPythonBoard {
  constructor() {
    this.serial = null;
    this._connected = false;
    this._encoder = new TextEncoder();
    this._decoder = new TextDecoder();
  }

  requestPort(filters = []) {
    return navigator.serial.requestPort({ filters }).then((port) => {
      this.serial = new Serial(port);
      this.serial.on('connect', () => (this._connected = true));
      this.serial.on('disconnect', () => (this._connected = false));
    });
  }

  connect(options = {}) {
    return new Promise((resolve, reject) => {
      if (this.serial) {
        this.serial
          .open({
            baudRate: 115200,
            ...options,
          })
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error('No device specified'));
      }
    });
  }

  get connected() {
    return this._connected;
  }

  disconnect() {
    return this.serial.close();
  }

  get deviceInfo() {
    return this.serial.getInfo();
  }

  readUntil(ending, dataConsumer) {
    return new Promise((resolve) => {
      let buff = '';
      const fn = async (data) => {
        if (data) {
          buff += this._decoder.decode(data);
          if (dataConsumer) {
            dataConsumer(data);
          }
        }
        if (buff.indexOf(ending) !== -1) {
          this.serial.off('data', fn);
          resolve(buff);
        }
      };
      this.serial.on('data', fn);
    });
  }

  writeAndReadUntil(cmd, expect, dataConsumer) {
    return new Promise(async (resolve) => {
      if (expect) {
        this.readUntil(expect, dataConsumer).then(resolve);
      }
      for (let i = 0; i < cmd.length; i += CHUNK_SIZE) {
        await this.serial.write(cmd.slice(i, i + CHUNK_SIZE));
        await sleep(10);
      }
      if (!expect) {
        resolve();
      }
    });
  }

  async getPrompt() {
    await sleep(150);
    await this.stop();
    await sleep(150);
    const out = await this.writeAndReadUntil(`\r${CTRL_C}${CTRL_B}`, '\r\n>>>');
    return out;
  }

  async enterRawRepl() {
    const out = await this.writeAndReadUntil(CTRL_A, 'raw REPL; CTRL-B to exit');
    return out;
  }

  async exitRawRepl() {
    const out = await this.writeAndReadUntil(CTRL_B, '\r\n>>>');
    return out;
  }

  async execRaw(cmd, dataConsumer) {
    await this.writeAndReadUntil(cmd);
    const out = await this.writeAndReadUntil(CTRL_D, `${CTRL_D}>`, dataConsumer);
    return out;
  }

  async execFile(fileContent, dataConsumer) {
    dataConsumer = dataConsumer || function () {};
    if (fileContent) {
      await this.enterRawRepl();
      const out = await this.execRaw(fileContent, dataConsumer);
      await this.exitRawRepl();
      return out;
    }
    return Promise.reject();
  }

  async run(code, dataConsumer) {
    dataConsumer = dataConsumer || function () {};
    return new Promise(async (resolve, reject) => {
      if (this.rejectRun) {
        this.rejectRun(new Error('re-run'));
        this.rejectRun = null;
      }
      this.rejectRun = reject;
      try {
        await this.enterRawRepl();
        const output = await this.execRaw(code || '#', dataConsumer);
        await this.exitRawRepl();
        return resolve(output);
      } catch (e) {
        reject(e);
        this.rejectRun = null;
      }
    });
  }

  async eval(code) {
    await this.serial.write(code);
  }

  async stop() {
    if (this.rejectRun) {
      this.rejectRun(new Error('pre stop'));
      this.rejectRun = null;
    }
    // Dismiss any data with ctrl-C
    await this.serial.write(CTRL_C);
  }

  async reset() {
    if (this.rejectRun) {
      this.rejectRun(new Error('pre reset'));
      this.rejectRun = null;
    }
    // Dismiss any data with ctrl-C
    await this.serial.write(CTRL_C);
    // Soft reboot
    await this.serial.write(CTRL_D);
  }

  /**
   * fs functions
   */

  async exists(filePath) {
    filePath = filePath || '';
    let command = '';
    command += `try:\n`;
    command += `  f = open('${filePath}', 'r')\n`;
    command += `  print(1)\n`;
    command += `except OSError:\n`;
    command += `  print(0)\n`;
    await this.enterRawRepl();
    let output = await this.execRaw(command);
    await this.exitRawRepl();
    return output[2] == '1';
  }

  async listdir(folderPath) {
    folderPath = folderPath || '';
    let command = '';
    command += `import os\n`;
    command += `try:\n`;
    command += `  print(os.listdir('${folderPath}'))\n`;
    command += `except OSError:\n`;
    command += `  print([])\n`;
    await this.enterRawRepl();
    let output = await this.execRaw(command);
    await this.exitRawRepl();
    output = extract(output);
    // Convert text output to js array
    output = output.replace(/'/g, '"');
    return JSON.parse(output);
  }

  async mkdir(filePath) {
    if (filePath) {
      await this.enterRawRepl();
      const output = await this.execRaw(`import os\nos.mkdir('${filePath}')`);
      await this.exitRawRepl();
      return output;
    }
    return Promise.reject(new Error(`Path to file was not specified`));
  }

  async rmdir(filePath) {
    if (filePath) {
      let command = '';
      command += `import os\n`;
      command += `try:\n`;
      command += `  os.rmdir("${filePath}")\n`;
      command += `except OSError:\n`;
      command += `  print(0)\n`;
      await this.enterRawRepl();
      const output = await this.execRaw(command);
      await this.exitRawRepl();
      return output;
    }
    return Promise.reject(new Error(`Path to file was not specified`));
  }

  async remove(filePath) {
    if (filePath) {
      let command = '';
      command += `import os\n`;
      command += `try:\n`;
      command += `  os.remove("${filePath}")\n`;
      command += `except OSError:\n`;
      command += `  print(0)\n`;
      await this.enterRawRepl();
      const output = await this.execRaw(command);
      return this.exitRawRepl();
    }
    return Promise.reject(new Error(`Path to file was not specified`));
  }

  async rename(oldFilePath, newFilePath) {
    if (oldFilePath && newFilePath) {
      await this.enterRawRepl();
      const output = await this.execRaw(`import os\nos.rename('${oldFilePath}', '${newFilePath}')`);
      return this.exitRawRepl();
    }
    return Promise.reject(new Error(`Path to file was not specified`));
  }

  async cat(filePath) {
    if (filePath) {
      await this.enterRawRepl();
      let output = await this.execRaw(
        `with open('${filePath}','r') as f:\n while 1:\n  b=f.read(256)\n  if not b:break\n  print(b,end='')`
      );
      await this.exitRawRepl();
      output = extract(output);
      return fixLineBreak(output);
    }
    return Promise.reject(new Error(`Path to file was not specified`));
  }

  async put(content, dest, dataConsumer) {
    dataConsumer = dataConsumer || function () {};
    if (content && dest) {
      let contentUint8;
      if (typeof content === 'string') {
        contentUint8 = this._encoder.encode(fixLineBreak(content));
      } else if (content instanceof ArrayBuffer) {
        contentUint8 = new Uint8Array(content);
      } else if (content instanceof Uint8Array) {
        contentUint8 = content;
      } else {
        Promise.reject(new Error(`${content} must string, Uint8Array or ArrayBuffer`));
      }
      const hexArray = Array.from(contentUint8).map((c) => c.toString(16).padStart(2, '0'));
      let out = '';
      out += await this.enterRawRepl();
      out += await this.execRaw(`f=open('${dest}','w')\nw=f.write`);
      const chunkSize = 48;
      for (let i = 0; i < hexArray.length; i += chunkSize) {
        let slice = hexArray.slice(i, i + chunkSize);
        let bytes = slice.map((h) => `0x${h}`);
        let line = `w(bytes([${bytes.join(',')}]))`;
        out += await this.execRaw(line);
        dataConsumer(parseInt((i / hexArray.length) * 100));
      }
      out += await this.execRaw(`f.close()`);
      out += await this.exitRawRepl();
      dataConsumer(100);
      return out;
    }
    return Promise.reject(new Error(`Must specify content and destination path`));
  }
}
