import{Text as c,Spinner as w} from"@blockcode/ui";import{connectDevice as x,writeFiles as D,configDevice as h,showDownloadScreen as I} from"@blockcode/device-pyboard";var f={en:{"extension.nes.name":"NES emulator","extension.nes.download":"Download ROM to Arcade"},"zh-Hans":{"extension.nes.name":"NES \u6A21\u62DF\u5668","extension.nes.download":"\u4E0B\u8F7D ROM \u5230\u6E38\u620F\u673A"}};var M="./assets/icon-16f050497ba2f212.png";import{jsx as i} from"preact/jsx-runtime";var Z=[{usbVendorId:12346}],e=(a,l,s)=>{if(!e.id)e.id=`download.${Date.now()}`;if(s<100)a({id:e.id,icon:i(w,{level:"success"}),message:i(c,{id:"blocks.alert.downloading",defaultMessage:"Downloading...{progress}%",progress:s})});else a({id:e.id,icon:null,message:i(c,{id:"blocks.alert.downloadCompleted",defaultMessage:"Download completed."})}),setTimeout(()=>{l(e.id),delete e.id},1000)},R={iconURI:M,name:i(c,{id:"extension.nes.name",defaultMessage:"Broadcast"}),blocks:[{button:"DOWNLOAD_ROM",text:i(c,{id:"extension.nes.download",defaultMessage:"Download ROM to Arcade"}),async onClick({context:a,createAlert:l,removeAlert:s}){if(e.id)return;const{device:m,setDevice:u}=a;let n;try{n=m||await x(Z,u)}catch(d){console.log(d)}if(!n)return;const t=document.createElement("input");t.type="file",t.accept=".nes",t.multiple=!0,t.click(),t.addEventListener("change",async({target:d})=>{const r=[];let p="";for(let o of d.files)r.push({id:`nes/${o.name}`,content:await o.arrayBuffer()}),p=o.name;try{await I(n,"arcade"),await D(n,r,(o)=>e(l,s,o)),await h(n,{"latest-game":p}),n.hardReset()}catch(o){}})}}],translations:f};export{R as default};
