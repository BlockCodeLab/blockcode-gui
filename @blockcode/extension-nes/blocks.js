import{Text as s} from"@blockcode/ui";var M={en:{"extension.nes.name":"NES emulator","extension.nes.download":"Download ROM"},"zh-Hans":{"extension.nes.name":"NES \u6A21\u62DF\u5668","extension.nes.download":"\u4E0B\u8F7D ROM"}};var $="./assets/icon-16f050497ba2f212.png";import{downloadDevice as L} from"@blockcode/device-pyboard";import{jsx as B} from"preact/jsx-runtime";var O={iconURI:$,name:B(s,{id:"extension.nes.name",defaultMessage:"Broadcast"}),blocks:[{button:"DOWNLOAD_ROM",text:B(s,{id:"extension.nes.download",defaultMessage:"Download ROM"}),onClick(D){console.log(this,D)}}],translations:M};export{O as default};
