import{Text as e}from"@blockcode/ui";var i={en:{"extension.colorSensor.name":"Color Sensor","extension.colorSensor.setPort":"set port to [PORT]","extension.colorSensor.calibration":"[COLOR] color calibration","extension.colorSensor.calibration.white":"white","extension.colorSensor.calibration.black":"black","extension.colorSensor.isCalibrated":"white color calibrated?","extension.colorSensor.color":"recognized [MODE]","extension.colorSensor.color.rgb":"color","extension.colorSensor.color.red":"red","extension.colorSensor.color.green":"green","extension.colorSensor.color.blue":"blue","extension.colorSensor.on":"on LEDs","extension.colorSensor.off":"off LEDs"},"zh-Hans":{"extension.colorSensor.name":"\u989C\u8272\u8BC6\u522B","extension.colorSensor.setPort":"\u5C06\u7AEF\u53E3\u8BBE\u4E3A [PORT]","extension.colorSensor.calibration":"[COLOR] \u8272\u6821\u51C6","extension.colorSensor.calibration.white":"\u767D","extension.colorSensor.calibration.black":"\u9ED1","extension.colorSensor.isCalibrated":"\u767D\u8272\u5DF2\u6821\u51C6\uFF1F","extension.colorSensor.color":"\u8BC6\u522B\u5230\u7684 [MODE]","extension.colorSensor.color.rgb":"\u989C\u8272","extension.colorSensor.color.red":"\u7EA2\u8272\u503C","extension.colorSensor.color.green":"\u7EFF\u8272\u503C","extension.colorSensor.color.blue":"\u84DD\u8272\u503C","extension.colorSensor.on":"\u5F00\u542F","extension.colorSensor.off":"\u5173\u95ED"}};var l="./assets/icon-3gt2tw34.svg";var c="./assets/color-haktz5kq.py";import{jsx as r}from"preact/jsx-runtime";function f(t){return{iconURI:l,name:r(e,{id:"extension.colorSensor.name",defaultMessage:"Color Sensor"}),files:[{name:"color",type:"text/x-python",uri:c}],blocks:(t!=="arcade"?[{id:"setPort",text:r(e,{id:"extension.colorSensor.setPort",defaultMessage:"set port to [PORT]"}),inputs:{PORT:{type:"text",default:"A",menu:[["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"]]}},python(n){this.definitions_.import_extension_color_sensor="from extensions.color_sensor import color";let o="";if(this.STATEMENT_PREFIX)o+=this.injectId(this.STATEMENT_PREFIX,n);const s=this.quote_(n.getFieldValue("PORT")||"A");return o+=`color.set_sensor(${s})\n`,o}}]:[]).concat([{id:"calibrate",text:r(e,{id:"extension.colorSensor.calibration",defaultMessage:"[COLOR] color calibration"}),inputs:{COLOR:{type:"text",default:"white",menu:[[r(e,{id:"extension.colorSensor.calibration.white",defaultMessage:"white"}),"white"],[r(e,{id:"extension.colorSensor.calibration.black",defaultMessage:"black"}),"black"]]}},python(n){if(this.definitions_.import_extension_color_sensor="from extensions.color_sensor import color",t==="arcade")this.definitions_.color_set_sensor='color.set_sensor("C")';let o="";if(this.STATEMENT_PREFIX)o+=this.injectId(this.STATEMENT_PREFIX,n);const s=this.quote_(n.getFieldValue("COLOR")||"white");return o+=`color.calibrate(str(${s}))\n`,o}},{id:"is_calibrated",text:r(e,{id:"extension.colorSensor.isCalibrated",defaultMessage:"white color calibrated?"}),output:"boolean",python(){if(this.definitions_.import_extension_color_sensor="from extensions.color_sensor import color",t==="arcade")this.definitions_.color_set_sensor='color.set_sensor("C")';return["color.is_calibrated()",this.ORDER_FUNCTION_CALL]}},{id:"color",text:r(e,{id:"extension.colorSensor.color",defaultMessage:"recognized [MODE]"}),output:"string",inputs:{MODE:{type:"number",default:-1,menu:[[r(e,{id:"extension.colorSensor.color.rgb",defaultMessage:"color"}),"-1"],[r(e,{id:"extension.colorSensor.color.red",defaultMessage:"red"}),"0"],[r(e,{id:"extension.colorSensor.color.green",defaultMessage:"green"}),"1"],[r(e,{id:"extension.colorSensor.color.blue",defaultMessage:"blue"}),"2"]]}},python(n){if(this.definitions_.import_extension_color_sensor="from extensions.color_sensor import color",t==="arcade")this.definitions_.color_set_sensor='color.set_sensor("C")';return[`color.get_color(num(${n.getFieldValue("MODE")||"-1"}))`,this.ORDER_FUNCTION_CALL]}},{id:"on",text:r(e,{id:"extension.colorSensor.on",defaultMessage:"on LEDs"}),python(n){if(this.definitions_.import_extension_color_sensor="from extensions.color_sensor import color",t==="arcade")this.definitions_.color_set_sensor='color.set_sensor("C")';let o="";if(this.STATEMENT_PREFIX)o+=this.injectId(this.STATEMENT_PREFIX,n);return o+="color.on()\n",o}},{id:"off",text:r(e,{id:"extension.colorSensor.off",defaultMessage:"off LEDs"}),python(n){if(this.definitions_.import_extension_color_sensor="from extensions.color_sensor import color",t==="arcade")this.definitions_.color_set_sensor='color.set_sensor("C")';let o="";if(this.STATEMENT_PREFIX)o+=this.injectId(this.STATEMENT_PREFIX,n);return o+="color.off()\n",o}}]),translations:i}}export{f as default};
