import{Text as i}from"@blockcode/ui";var r={en:{"extension.pen.name":"Pen","extension.pen.erase":"erase all","extension.pen.stamp":"stamp","extension.pen.down":"pen down","extension.pen.up":"pen up","extension.pen.penColor":"set pen color to [COLOR]","extension.pen.color":"color","extension.pen.saturation":"saturation","extension.pen.brightness":"brightness","extension.pen.changePen":"change pen [OPTION] by [VALUE]","extension.pen.setPen":"set pen [OPTION] to [VALUE]","extension.pen.changeSize":"change pen size by [SIZE]","extension.pen.setSize":"set pen size to [SIZE]"},"zh-Hans":{"extension.pen.name":"\u753B\u7B14","extension.pen.erase":"\u5168\u90E8\u64E6\u9664","extension.pen.stamp":"\u56FE\u7AE0","extension.pen.down":"\u843D\u7B14","extension.pen.up":"\u62AC\u7B14","extension.pen.penColor":"\u5C06\u7B14\u7684\u989C\u8272\u8BBE\u4E3A [COLOR]","extension.pen.color":"\u989C\u8272","extension.pen.saturation":"\u9971\u548C\u5EA6","extension.pen.brightness":"\u4EAE\u5EA6","extension.pen.changePen":"\u5C06\u7B14\u7684 [OPTION] \u589E\u52A0 [VALUE]","extension.pen.setPen":"\u5C06\u7B14\u7684 [OPTION] \u8BBE\u4E3A [VALUE]","extension.pen.changeSize":"\u5C06\u7B14\u7684\u7C97\u7EC6\u589E\u52A0 [SIZE]","extension.pen.setSize":"\u5C06\u7B14\u7684\u7C97\u7EC6\u8BBE\u4E3A [SIZE]"}};var a="./assets/icon-wkgstzvn.svg";var d="./assets/pen-r64ajsxd.py";function p(){return this.provideFunction_("pen_renderer",[`const ${this.FUNCTION_NAME_PLACEHOLDER_} = (item) => {`,"  let renderer = stage.layer.children['pen_renderer'];","  if (!renderer) {","    renderer = new runtime.core.Group();","    renderer.name = 'pen_renderer';","    stage.layer.addChild(renderer)","  }","  if (!item) return;","  item.visible = true;","  renderer.addChild(item);","};"])}function h(){return this.provideFunction_("pen_draw",[`const ${this.FUNCTION_NAME_PLACEHOLDER_} = (target) => {`,"  if (target.data.pen_update) return;","  const item = new runtime.core.Group();","  item.data = {","    x: target.position.x,","    y: target.position.y,","  };","  target.data.pen_update = () => {","    const { x, y } = target.position;","    if (item.data.x !== x || item.data.y !== y) {","      item.addChild(new runtime.core.Path.Line({","        from: [item.data.x, item.data.y],","        to: [x, y],","        strokeColor: target.data.pen_color || '#000000',","        strokeWidth: target.data.pen_size || 1,","        strokeCap: 'round',","        strokeJoin: 'round',","      }));","      item.data = { x, y };","    }","  };","  target.util.on('update', target.data.pen_update)","  runtime.once('stop', () => {","    if (target.data.pen_update) {","      target.util.off('update', target.data.pen_update);","      target.data.pen_update = null;","    }","  });","  return item;","};"])}import{jsx as s}from"preact/jsx-runtime";var f={iconURI:a,name:s(i,{id:"extension.pen.name",defaultMessage:"Pen"}),files:[{name:"pen",type:"text/x-python",uri:d}],blocks:[{id:"erase",text:s(i,{id:"extension.pen.erase",defaultMessage:"erase all"}),python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);return e+="pen.clear()\n",e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);return e+="stage.layer.children['pen_renderer']?",e+=".children.forEach((group) => group.removeChildren());\n",e}},{id:"stamp",text:s(i,{id:"extension.pen.stamp",defaultMessage:"stamp"}),useStage:!1,python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);return e+="pen.stamp(target)\n",e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=p.call(this);return e+=`${n}(target.clone());\n`,e}},{id:"down",text:s(i,{id:"extension.pen.down",defaultMessage:"pen down"}),useStage:!1,python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);return e+="pen.down(target)\n",e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=p.call(this),o=h.call(this);return e+=`${n}(${o}(target));\n`,e}},{id:"up",text:s(i,{id:"extension.pen.up",defaultMessage:"pen up"}),useStage:!1,python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);return e+="pen.up(target)\n",e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);return e+="if (target.data.pen_update) {\n",e+="  target.util.off('update', target.data.pen_update);\n",e+="  target.data.pen_update = null;\n",e+="}\n",e}},{id:"penColor",text:s(i,{id:"extension.pen.penColor",defaultMessage:"set pen color to [COLOR]"}),useStage:!1,inputs:{COLOR:{type:"color"}},python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"COLOR",this.ORDER_NONE)||"(0, 0, 0)";return e+=`pen.set_color(target, ${n})\n`,e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"COLOR",this.ORDER_NONE)||'"#000000"';return e+=`target.data.pen_color = ${n};\n`,e}},{id:"changePen",text:s(i,{id:"extension.pen.changePen",defaultMessage:"change pen [OPTION] by [VALUE]"}),useStage:!1,inputs:{OPTION:{menu:"colorParam"},VALUE:{type:"number",default:10}},python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"OPTION",this.ORDER_NONE)||"hue",o=this.valueToCode(t,"VALUE",this.ORDER_NONE)||0;return e+=`pen.change_color(target, ${n} = num(${o}))\n`,e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"OPTION",this.ORDER_NONE)||"hue",o=this.valueToCode(t,"VALUE",this.ORDER_NONE)||0;if(e+="target.data.pen_color = new runtime.core.Color(target.data.pen_color).convert('hsb');\n",n==="hue")e+=`target.data.pen_color.${n} = (target.data.pen_color.${n} + runtime.number(${o}) * 3.6) % 360;\n`;else e+=`target.data.pen_color.${n} = runtime.clamp(target.data.pen_color.${n} + runtime.number(${o}) / 100, 0, 1);\n`;return e+="target.data.pen_color = target.data.pen_color.toCSS(true);\n",e}},{id:"setPen",text:s(i,{id:"extension.pen.setPen",defaultMessage:"set pen [OPTION] to [VALUE]"}),useStage:!1,inputs:{OPTION:{menu:"colorParam"},VALUE:{type:"number",default:50}},python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"OPTION",this.ORDER_NONE)||"hue",o=this.valueToCode(t,"VALUE",this.ORDER_NONE)||0;return e+=`pen.set_color(${n} = num(${o}))\n`,e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"OPTION",this.ORDER_NONE)||"hue",o=this.valueToCode(t,"VALUE",this.ORDER_NONE)||0;if(e+="target.data.pen_color = new runtime.core.Color(target.data.pen_color);\n",n==="hue")e+=`target.data.pen_color.${n} = runtime.number(${o}) * 3.6 % 360;\n`;else e+=`target.data.pen_color.${n} = runtime.clamp(runtime.number(${o}) / 100, 0, 1);\n`;return e+="target.data.pen_color = target.data.pen_color.toCSS(true);\n",e}},{id:"changeSize",text:s(i,{id:"extension.pen.changeSize",defaultMessage:"change pen size by [SIZE]"}),useStage:!1,inputs:{SIZE:{type:"number",default:1}},python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"SIZE",this.ORDER_NONE)||1;return e+=`pen.change_size(target, num(${n}))\n`,e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"SIZE",this.ORDER_NONE)||1;return e+=`target.data.pen_size = runtime.number(target.data.pen_size, 1) + runtime.number(${n}, 1);\n`,e}},{id:"setSize",text:s(i,{id:"extension.pen.setSize",defaultMessage:"set pen size to [SIZE]"}),useStage:!1,inputs:{SIZE:{type:"number",default:1}},python(t){this.definitions_.import_extension_pen="from extensions.pen import pen";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"SIZE",this.ORDER_NONE)||1;return e+=`pen.set_size(target, num(${n}))\n`,e},vm(t){let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,t);const n=this.valueToCode(t,"SIZE",this.ORDER_NONE)||1;return e+=`target.data.pen_size = runtime.number(${n}, 1);\n`,e}}],menus:{colorParam:{inputMode:!0,type:"string",default:"hue",items:[[s(i,{id:"extension.pen.color",defaultMessage:"color"}),"hue"],[s(i,{id:"extension.pen.saturation",defaultMessage:"saturation"}),"saturation"],[s(i,{id:"extension.pen.brightness",defaultMessage:"brightness"}),"brightness"]]}},translations:r};export{f as default};
