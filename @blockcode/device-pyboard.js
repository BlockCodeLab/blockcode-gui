import{Serial as S,sleep as E} from"@blockcode/core";var A=function(q){return q.replaceAll("\r\n","\n")},w=function(q){return q.slice(2,-3)},U="\x01",Z="\x02",H="\x03",I="\x04";var K=128;class z{constructor(){this.serial=null,this._connected=!1,this._encoder=new TextEncoder,this._decoder=new TextDecoder}requestPort(q=[]){return navigator.serial.requestPort({filters:q}).then(($)=>{if($._serial){this.serial=$._serial,this.serial.on("connect",()=>this._connected=!0),this.serial.on("disconnect",()=>this._connected=!1);return}this.serial=new S($),this.serial.on("connect",()=>this._connected=!0),this.serial.on("disconnect",()=>this._connected=!1)})}connect(q={}){return new Promise(($,G)=>{if(this.serial)this.serial.open({baudRate:115200,...q}).then(()=>$()).catch((J)=>{if(J.name==="InvalidStateError")this._connected=!0,$();G(J)});else G(new Error("No device specified"))})}get connected(){return this._connected}disconnect(){return this.serial.close()}get deviceInfo(){return this.serial.getInfo()}readUntil(q,$){return new Promise((G)=>{let J="";const M=async(Q)=>{if(Q){if(J+=this._decoder.decode(Q),$)$(Q)}if(J.indexOf(q)!==-1)this.serial.off("data",M),G(J)};this.serial.on("data",M)})}writeAndReadUntil(q,$,G){return new Promise(async(J)=>{if($)this.readUntil($,G).then(J);for(let M=0;M<q.length;M+=K)await this.serial.write(q.slice(M,M+K)),await E(10);if(!$)J()})}async getPrompt(){return await E(150),await this.stop(),await E(150),await this.writeAndReadUntil(`\r${H}${Z}`,"\r\n>>>")}async enterRawRepl(){return await this.writeAndReadUntil(U,"raw REPL; CTRL-B to exit")}async exitRawRepl(){return await this.writeAndReadUntil(Z,"\r\n>>>")}async execRaw(q,$){return await this.writeAndReadUntil(q),await this.writeAndReadUntil(I,`${I}>`,$)}async execFile(q,$){if($=$||function(){},q){await this.enterRawRepl();const G=await this.execRaw(q,$);return await this.exitRawRepl(),G}return Promise.reject()}async run(q,$){return $=$||function(){},new Promise(async(G,J)=>{if(this.rejectRun)this.rejectRun(new Error("re-run")),this.rejectRun=null;this.rejectRun=J;try{await this.enterRawRepl();const M=await this.execRaw(q||"#",$);return await this.exitRawRepl(),G(M)}catch(M){J(M),this.rejectRun=null}})}async eval(q){await this.serial.write(q)}async stop(){if(this.rejectRun)this.rejectRun(new Error("pre stop")),this.rejectRun=null;await this.serial.write(H)}async reset(){if(this.rejectRun)this.rejectRun(new Error("pre reset")),this.rejectRun=null;await this.serial.write(H),await this.serial.write(I)}async hardwareReset(){if(this.rejectRun)this.rejectRun(new Error("pre reset")),this.rejectRun=null;await this.enterRawRepl(),await this.execRaw("import machine\nmachine.reset()"),await this.exitRawRepl()}async exists(q){q=q||"";let $="";$+="try:\n",$+=`  f = open('${q}', 'r')\n`,$+="  print(1)\n",$+="except OSError:\n",$+="  print(0)\n",await this.enterRawRepl();const G=await this.execRaw($);return await this.exitRawRepl(),G[2]=="1"}async listdir(q){q=q||"";let $="";$+="import os\n",$+="try:\n",$+=`  print(os.listdir('${q}'))\n`,$+="except OSError:\n",$+="  print([])\n",await this.enterRawRepl();let G=await this.execRaw($);return await this.exitRawRepl(),G=w(G),G=G.replace(/'/g,'"'),JSON.parse(G)}async mkdir(q){if(q){await this.enterRawRepl();const $=await this.execRaw(`import os\nos.mkdir('${q}')`);return await this.exitRawRepl(),$}return Promise.reject(new Error("Path to file was not specified"))}async rmdir(q){if(q){let $="";$+="import os\n",$+="try:\n",$+=`  os.rmdir("${q}")\n`,$+="except OSError:\n",$+="  print(0)\n",await this.enterRawRepl();const G=await this.execRaw($);return await this.exitRawRepl(),G}return Promise.reject(new Error("Path to file was not specified"))}async remove(q){if(q){let $="";$+="import os\n",$+="try:\n",$+=`  os.remove("${q}")\n`,$+="except OSError:\n",$+="  print(0)\n",await this.enterRawRepl();const G=await this.execRaw($);return this.exitRawRepl(),G}return Promise.reject(new Error("Path to file was not specified"))}async rename(q,$){if(q&&$){await this.enterRawRepl();const G=await this.execRaw(`import os\nos.rename('${q}', '${$}')`);return this.exitRawRepl(),G}return Promise.reject(new Error("Path to file was not specified"))}async cat(q){if(q){await this.enterRawRepl();let $=await this.execRaw(`with open('${q}','r') as f:\n while 1:\n  b=f.read(256)\n  if not b:break\n  print(b,end='')`);return await this.exitRawRepl(),$=w($),A($)}return Promise.reject(new Error("Path to file was not specified"))}async checkHash(q,$){if(q){let G="";G+="import os\n",G+="import hashlib\n",G+="import binascii\n",G+="hash = hashlib.sha256()\n",G+=`with open('${q}', 'rb') as f:\n`,G+="  while True:\n",G+=`    c = f.read(${K})\n`,G+="    if not c: break\n",G+="    hash.update(c)\n",G+="print(binascii.hexlify(hash.digest()).decode())\n",await this.enterRawRepl();let J=await this.execRaw(G);return await this.exitRawRepl(),J=J.slice(2,J.indexOf("\n")-1),$===J}return Promise.reject(new Error("Path to file was not specified"))}async put(q,$,G){if(!$){Promise.reject(new Error("Must specify content and destination path"));return}let J;if(typeof q==="string")J=this._encoder.encode(A(q));else if(q instanceof ArrayBuffer)J=new Uint8Array(q);else if(q instanceof Uint8Array)J=q;else Promise.reject(new Error(`${q} must string, Uint8Array or ArrayBuffer`));if(G=G||function(){},await this.exists($)){const O=await crypto.subtle.digest("SHA-256",J),W=Array.from(new Uint8Array(O)).map((Y)=>Y.toString(16).padStart(2,"0")).join("");if(await this.checkHash($,W)){G(100);return}}const M=Array.from(J).map((O)=>O.toString(16).padStart(2,"0"));let Q="";Q+=await this.enterRawRepl();let V=$.split("/");if(V.pop(),V.length>0){Q+=await this.execRaw("import os");const O=[];V.reduce((W,Y)=>{if(Y===""||W!==""&&W.at(-1)!=="/")W+="/";if(W+=Y,W!=="/")O.push(W);return W},"");for(let W of O)Q+=await this.execRaw(`os.mkdir('${W}')`)}Q+=await this.execRaw(`f=open('${$}','w')\nw=f.write`);const X=48;for(let O=0;O<M.length;O+=X){let B=`w(bytes([${M.slice(O,O+X).map((y)=>`0x${y}`).join(",")}]))`;Q+=await this.execRaw(B),G(parseInt(O/M.length*100))}return Q+=await this.execRaw("f.close()"),Q+=await this.exitRawRepl(),G(100),Q}}function N(q,$){const G=`data:${q};base64,${$}`;return fetch(G).then((J)=>J.arrayBuffer())}var D=async(q,$)=>{const G=new z;await G.requestPort(q),await G.connect(),await G.stop(),$(G);const J=()=>setTimeout(async()=>{if(G.connected)J();else $(null)},1000);return J(),G},L=async(q,$)=>{await q.disconnect(),$(null)},k=async(q,$)=>{await q.stop(),await q.enterRawRepl(),await q.execRaw(`from ${$} import display`),await q.execRaw("import device.ui.download_screen as download_screen"),await q.execRaw("download_screen.render(display)"),await q.exitRawRepl()},_=async(q,$,G)=>{await q.stop();const J=$.length;let M=0;const Q=(V)=>{G(((M+1/J*(V/100))*100).toFixed(1))};for(let V of $){let{id:X,content:O}=V;if(V.type){if(V.type==="text/x-python"&&!X.endsWith(".py"))X+=".py";else if(V.type.startsWith("image/")&&!O)O=await N(V.type,V.data)}await q.put(O||"",X,Q),M+=1/J}G(100),await q.hardwareReset()};export{k as showDownloadScreen,_ as downloadDevice,L as disconnectDevice,D as connectDevice,z as MicroPythonBoard};
