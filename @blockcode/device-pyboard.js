import{Serial as U,sleep as E} from"@blockcode/core";var A=function($){return $.replaceAll("\r\n","\n")},w=function($){return $.slice(2,-3)},F="\x01",Z="\x02",H="\x03",I="\x04";var K=1024;class z{constructor(){this.serial=null,this._connected=!1,this._encoder=new TextEncoder,this._decoder=new TextDecoder}requestPort($=[]){return navigator.serial.requestPort({filters:$}).then((q)=>{if(q._serial){this.serial=q._serial,this.serial.on("connect",()=>this._connected=!0),this.serial.on("disconnect",()=>this._connected=!1);return}this.serial=new U(q),this.serial.on("connect",()=>this._connected=!0),this.serial.on("disconnect",()=>this._connected=!1)})}connect($={}){return new Promise((q,G)=>{if(this.serial)this.serial.open({baudRate:1500000,...$}).then(()=>q()).catch((J)=>{if(J.name==="InvalidStateError")this._connected=!0,q();G(J)});else G(new Error("No device specified"))})}get connected(){return this._connected}disconnect(){return this.serial.close()}get deviceInfo(){return this.serial.getInfo()}readUntil($,q){return new Promise((G)=>{let J="";const M=async(Q)=>{if(Q){if(J+=this._decoder.decode(Q),q)q(Q)}if(J.indexOf($)!==-1)this.serial.off("data",M),G(J)};this.serial.on("data",M)})}writeAndReadUntil($,q,G){return new Promise(async(J)=>{if(q)this.readUntil(q,G).then(J);for(let M=0;M<$.length;M+=K)await this.serial.write($.slice(M,M+K)),await E(10);if(!q)J()})}async getPrompt(){return await E(150),await this.stop(),await E(150),await this.writeAndReadUntil(`\r${H}${Z}`,"\r\n>>>")}async enterRawRepl(){return await this.writeAndReadUntil(F,"raw REPL; CTRL-B to exit")}async exitRawRepl(){return await this.writeAndReadUntil(Z,"\r\n>>>")}async execRaw($,q){return await this.writeAndReadUntil($),await this.writeAndReadUntil(I,`${I}>`,q)}async execFile($,q){if(q=q||function(){},$){await this.enterRawRepl();const G=await this.execRaw($,q);return await this.exitRawRepl(),G}return Promise.reject()}async run($,q){return q=q||function(){},new Promise(async(G,J)=>{if(this.rejectRun)this.rejectRun(new Error("re-run")),this.rejectRun=null;this.rejectRun=J;try{await this.enterRawRepl();const M=await this.execRaw($||"#",q);return await this.exitRawRepl(),G(M)}catch(M){J(M),this.rejectRun=null}})}async eval($){await this.serial.write($)}async stop(){if(this.rejectRun)this.rejectRun(new Error("pre stop")),this.rejectRun=null;await this.serial.write(H)}async reset(){if(this.rejectRun)this.rejectRun(new Error("pre reset")),this.rejectRun=null;await this.serial.write(H),await this.serial.write(I)}async hardwareReset(){if(this.rejectRun)this.rejectRun(new Error("pre reset")),this.rejectRun=null;await this.enterRawRepl(),this.execRaw("import machine\nmachine.reset()")}async exists($){$=$||"";let q="";q+="try:\n",q+=`  f = open('${$}', 'r')\n`,q+="  print(1)\n",q+="except OSError:\n",q+="  print(0)\n",await this.enterRawRepl();const G=await this.execRaw(q);return await this.exitRawRepl(),G[2]=="1"}async listdir($){$=$||"";let q="";q+="import os\n",q+="try:\n",q+=`  print(os.listdir('${$}'))\n`,q+="except OSError:\n",q+="  print([])\n",await this.enterRawRepl();let G=await this.execRaw(q);return await this.exitRawRepl(),G=w(G),G=G.replace(/'/g,'"'),JSON.parse(G)}async mkdir($){if($){await this.enterRawRepl();const q=await this.execRaw(`import os\nos.mkdir('${$}')`);return await this.exitRawRepl(),q}return Promise.reject(new Error("Path to file was not specified"))}async rmdir($){if($){let q="";q+="import os\n",q+="try:\n",q+=`  os.rmdir("${$}")\n`,q+="except OSError:\n",q+="  print(0)\n",await this.enterRawRepl();const G=await this.execRaw(q);return await this.exitRawRepl(),G}return Promise.reject(new Error("Path to file was not specified"))}async remove($){if($){let q="";q+="import os\n",q+="try:\n",q+=`  os.remove("${$}")\n`,q+="except OSError:\n",q+="  print(0)\n",await this.enterRawRepl();const G=await this.execRaw(q);return this.exitRawRepl(),G}return Promise.reject(new Error("Path to file was not specified"))}async rename($,q){if($&&q){await this.enterRawRepl();const G=await this.execRaw(`import os\nos.rename('${$}', '${q}')`);return this.exitRawRepl(),G}return Promise.reject(new Error("Path to file was not specified"))}async cat($){if($){await this.enterRawRepl();let q=await this.execRaw(`with open('${$}','r') as f:\n while 1:\n  b=f.read(256)\n  if not b:break\n  print(b,end='')`);return await this.exitRawRepl(),q=w(q),A(q)}return Promise.reject(new Error("Path to file was not specified"))}async checkHash($,q){if($){let G="";G+="import os\n",G+="import hashlib\n",G+="import binascii\n",G+="hash = hashlib.sha256()\n",G+=`with open('${$}', 'rb') as f:\n`,G+="  while True:\n",G+=`    c = f.read(${K})\n`,G+="    if not c: break\n",G+="    hash.update(c)\n",G+="print(binascii.hexlify(hash.digest()).decode())\n",await this.enterRawRepl();let J=await this.execRaw(G);return await this.exitRawRepl(),J=J.slice(2,J.indexOf("\n")-1),q===J}return Promise.reject(new Error("Path to file was not specified"))}async put($,q,G){if(!q){Promise.reject(new Error("Must specify content and destination path"));return}let J;if(typeof $==="string")J=this._encoder.encode(A($));else if($ instanceof ArrayBuffer)J=new Uint8Array($);else if($ instanceof Uint8Array)J=$;else Promise.reject(new Error(`${$} must string, Uint8Array or ArrayBuffer`));if(G=G||function(){},await this.exists(q)){const O=await crypto.subtle.digest("SHA-256",J),W=Array.from(new Uint8Array(O)).map((Y)=>Y.toString(16).padStart(2,"0")).join("");if(await this.checkHash(q,W)){G(100);return}}const M=Array.from(J).map((O)=>O.toString(16).padStart(2,"0"));let Q="";Q+=await this.enterRawRepl();let V=q.split("/");if(V.pop(),V.length>0){Q+=await this.execRaw("import os");const O=[];V.reduce((W,Y)=>{if(Y===""||W!==""&&W.at(-1)!=="/")W+="/";if(W+=Y,W!=="/")O.push(W);return W},"");for(let W of O)Q+=await this.execRaw(`os.mkdir('${W}')`)}Q+=await this.execRaw(`f=open('${q}','w')\nw=f.write`);const X=48;for(let O=0;O<M.length;O+=X){let B=`w(bytes([${M.slice(O,O+X).map((S)=>`0x${S}`).join(",")}]))`;Q+=await this.execRaw(B),G(parseInt(O/M.length*100))}return Q+=await this.execRaw("f.close()"),Q+=await this.exitRawRepl(),G(100),Q}}function N($,q){const G=`data:${$};base64,${q}`;return fetch(G).then((J)=>J.arrayBuffer())}var L=async($,q)=>{const G=new z;await G.requestPort($),await G.connect(),await G.stop(),q(G);const J=()=>setTimeout(async()=>{if(G.connected)J();else q(null)},1000);return J(),G},g=async($,q)=>{await $.disconnect(),q(null)},_=async($,q)=>{await $.stop(),await $.enterRawRepl(),await $.execRaw(`from ${q} import display`),await $.execRaw("import popui.download_screen as download_screen"),await $.execRaw("download_screen.render(display)"),await $.exitRawRepl()},x=async($,q)=>{await $.stop(),await $.enterRawRepl(),await $.execRaw("import device.config as config");for(let[G,J]of Object.entries(q))if(typeof J==="number"&&J%1===0)await $.execRaw(`config.set_int("${G}", ${J})`);else if(typeof J==="boolean")await $.execRaw(`config.set_bool("${G}", ${J?"True":"False"})`);else await $.execRaw(`config.set_str("${G}", "${J}")`);await $.execRaw("config.save()"),await $.exitRawRepl()},k=async($,q,G)=>{await $.stop();const J=q.length;let M=0;const Q=(V)=>{G(((M+1/J*(V/100))*100).toFixed(1))};for(let V of q){let{id:X,content:O}=V;if(V.type){if(V.type==="text/x-python"&&!X.endsWith(".py"))X+=".py";else if(V.type.startsWith("image/")&&!O)O=await N(V.type,V.data)}await $.put(O||"",X,Q),M+=1/J}G(100)};export{_ as showDownloadScreen,k as downloadDevice,g as disconnectDevice,L as connectDevice,x as configDevice,z as MicroPythonBoard};
