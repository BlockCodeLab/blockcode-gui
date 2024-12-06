import{Text as t}from"@blockcode/ui";var i={en:{"extension.broadcast.name":"Broadcast","extension.broadcast.setGroup":"set broadcast group [ID]","extension.broadcast.send":"broadcast message [MESSAGE]","extension.broadcast.sendName":"broadcast named [NAME] message [MESSAGE]","extension.broadcast.whenReceived":"when I receive message","extension.broadcast.whenReceivedNamed":"when I receive named [NAME] message","extension.broadcast.message":"hello","extension.broadcast.messageName":"say","extension.broadcast.received":"received message","extension.broadcast.receivedNamed":"received named [NAME] message","extension.broadcast.receivedIndex":"received message [INDEX]","extension.broadcast.receivedNameIndex":"received named [NAME] message [INDEX]","extension.broadcast.receivedMac":"mac address","extension.broadcast.receivedTime":"timestamp","extension.broadcast.receivedSerial":"serial number"},"zh-Hans":{"extension.broadcast.name":"无线广播","extension.broadcast.setGroup":"将广播组设为 [ID]","extension.broadcast.send":"广播消息 [MESSAGE]","extension.broadcast.sendName":"广播命名为 [NAME] 的消息 [MESSAGE]","extension.broadcast.whenReceived":"当接收到消息","extension.broadcast.whenReceivedNamed":"当接收到命名为 [NAME] 的消息","extension.broadcast.message":"你好","extension.broadcast.messageName":"问候","extension.broadcast.received":"消息","extension.broadcast.receivedNamed":"命名为 [NAME] 的消息","extension.broadcast.receivedIndex":"消息的 [INDEX]","extension.broadcast.receivedNameIndex":"命名为 [NAME] 消息的 [INDEX]","extension.broadcast.receivedMac":"MAC 地址","extension.broadcast.receivedTime":"时间戳","extension.broadcast.receivedSerial":"序列号"}};var o="./assets/icon-em6p3nz5.png";var d="./assets/broadcast-0qfnzpfy.py";import{jsx as a}from"preact/jsx-runtime";var x={iconURI:o,name:a(t,{id:"extension.broadcast.name",defaultMessage:"Broadcast"}),files:[{name:"broadcast",type:"text/x-python",uri:d}],blocks:[{id:"whenReceived",text:a(t,{id:"extension.broadcast.whenReceived",defaultMessage:"when I receive message"}),hat:!0,python(){return this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast",`@broadcast.when_received("default", target)
${this.eventToCode("broadcast_received","False","target")}`}},{id:"send",text:a(t,{id:"extension.broadcast.send",defaultMessage:"broadcast message [MESSAGE]"}),inputs:{MESSAGE:{type:"text",default:a(t,{id:"extension.broadcast.message",defaultMessage:"hello"})}},python(e){this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast";let s="";if(this.STATEMENT_PREFIX)s+=this.injectId(this.STATEMENT_PREFIX,e);let n=this.valueToCode(e,"MESSAGE",this.ORDER_NONE)||'""';return s+=`broadcast.send(str(${n.replace(":","_")}))
`,s}},{id:"received",text:a(t,{id:"extension.broadcast.received",defaultMessage:"received message"}),output:"string",python(){return this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast",[`broadcast.get_message()
`,this.ORDER_FUNCTION_CALL]}},"---",{id:"whenReceivedNamed",text:a(t,{id:"extension.broadcast.whenReceivedNamed",defaultMessage:"when I receive named [NAME] message"}),hat:!0,inputs:{NAME:{type:"text",default:a(t,{id:"extension.broadcast.messageName",defaultMessage:"my"})}},python(e){this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast";let s=this.eventToCode("broadcast_received","False","target");return`@broadcast.when_received(str(${this.valueToCode(e,"NAME",this.ORDER_NONE)||'"default"'}), target)
${s}`}},{id:"sendName",text:a(t,{id:"extension.broadcast.sendName",defaultMessage:"broadcast named [NAME] message [MESSAGE]"}),inputs:{NAME:{type:"text",default:a(t,{id:"extension.broadcast.messageName",defaultMessage:"say"})},MESSAGE:{type:"text",default:a(t,{id:"extension.broadcast.message",defaultMessage:"hello"})}},python(e){this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast";let s="";if(this.STATEMENT_PREFIX)s+=this.injectId(this.STATEMENT_PREFIX,e);let n=this.valueToCode(e,"NAME",this.ORDER_NONE)||'"default"',r=this.valueToCode(e,"MESSAGE",this.ORDER_NONE)||'""';return s+=`broadcast.send(str(${r}), name=str(${n}))
`,s}},{id:"receivedNamed",text:a(t,{id:"extension.broadcast.receivedNamed",defaultMessage:"received named [NAME] message"}),output:"string",inputs:{NAME:{type:"text",default:a(t,{id:"extension.broadcast.messageName",defaultMessage:"say"})}},python(e){return this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast",[`broadcast.get_message(str(${this.valueToCode(e,"NAME",this.ORDER_NONE)||'"default"'}))
`,this.ORDER_FUNCTION_CALL]}},"---",{id:"receivedIndex",text:a(t,{id:"extension.broadcast.receivedIndex",defaultMessage:"received message [INDEX]"}),inputs:{INDEX:{menu:"receivedParam"}},output:"string",python(e){return this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast",[`broadcast.get_message_info(str(${this.quote_(e.getFieldValue("INDEX")||"timestamp")}))
`,this.ORDER_FUNCTION_CALL]}},{id:"receivedNamedIndex",text:a(t,{id:"extension.broadcast.receivedNameIndex",defaultMessage:"received named [NAME] message [INDEX]"}),inputs:{NAME:{type:"text",default:a(t,{id:"extension.broadcast.messageName",defaultMessage:"say"})},INDEX:{menu:"receivedParam"}},output:"string",python(e){this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast";let s=this.valueToCode(e,"NAME",this.ORDER_NONE)||'"default"';return[`broadcast.get_message_info(str(${this.quote_(e.getFieldValue("INDEX")||"timestamp")}), name=str(${s}))
`,this.ORDER_FUNCTION_CALL]}},"---",{id:"setGroup",text:a(t,{id:"extension.broadcast.setGroup",defaultMessage:"set broadcast group [ID]"}),inputs:{ID:{type:"string",default:"1"}},python(e){this.definitions_.import_extension_broadcast="from extensions.broadcast import broadcast";let s="";if(this.STATEMENT_PREFIX)s+=this.injectId(this.STATEMENT_PREFIX,e);let n=this.valueToCode(e,"ID",this.ORDER_NONE)||"1";return s+=`broadcast.set_group(str(${n}))
`,s}}],menus:{receivedParam:{type:"string",items:[[a(t,{id:"extension.broadcast.receivedTime",defaultMessage:"timestamp"}),"timestamp"],[a(t,{id:"extension.broadcast.receivedSerial",defaultMessage:"serial number"}),"serialnumber"],[a(t,{id:"extension.broadcast.receivedMac",defaultMessage:"mac"}),"mac"]]}},translations:i};export{x as default};
