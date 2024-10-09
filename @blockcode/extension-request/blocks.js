import{Text as i}from"@blockcode/ui";var r={en:{"extension.request.name":"Request","extension.request.request":"send [MOTHOD] request to [URL]","extension.request.getText":"text content","extension.request.getContent":"item [PATH] of content","extension.request.clearCache":"clear request cache","extension.request.whenResponds":"when a site responds","extension.request.whenFails":"when a request fails","extension.request.statusCode":"status code","extension.request.isResponds":"site responds?","extension.request.setHeader":"set headers [HEADER] to [VALUE]","extension.request.setContentType":"set content type to [CONTENTTYPE]","extension.request.setParam":"set param [KEY] to [VALUE]","extension.request.setBody":"set body [KEY] to [VALUE]"},"zh-Hans":{"extension.request.name":"\u6570\u636E\u8BF7\u6C42","extension.request.request":"\u7528 [MOTHOD] \u65B9\u6CD5\u4ECE [URL] \u8BF7\u6C42\u6570\u636E","extension.request.getText":"\u6570\u636E\u6587\u672C\u5185\u5BB9","extension.request.getContent":"\u6570\u636E\u4E2D [PATH] \u8DEF\u5F84\u7684\u9879\u76EE","extension.request.clearCache":"\u6E05\u9664\u6570\u636E\u8BF7\u6C42\u7F13\u5B58","extension.request.whenResponds":"\u5F53\u7F51\u7AD9\u5E94\u7B54","extension.request.whenFails":"\u5F53\u8BF7\u6C42\u5931\u8D25","extension.request.statusCode":"\u5E94\u7B54\u72B6\u6001\u7801","extension.request.isResponds":"\u7F51\u7AD9\u6709\u5E94\u7B54\uFF1F","extension.request.setHeader":"\u5C06\u6807\u5934\u4FE1\u606F [HEADER] \u8BBE\u4E3A [VALUE]","extension.request.setContentType":"\u5C06\u5185\u5BB9\u7C7B\u578B\u8BBE\u4E3A [CONTENTTYPE]","extension.request.setParam":"\u5C06\u8BF7\u6C42\u53C2\u6570 [KEY] \u8BBE\u4E3A [VALUE]","extension.request.setBody":"\u5C06\u8BF7\u6C42\u6570\u636E [KEY] \u8BBE\u4E3A [VALUE]"}};var u="./assets/icon-hvra75p0.svg";var a="./assets/request-q7xk578b.py";function _(){return this.definitions_.request_response="runtime.data['request_response'] = null;",this.provideFunction_("request_get_content",[`const ${this.FUNCTION_NAME_PLACEHOLDER_} = async (path) => {`,"  let res = runtime.data['request_response']","  if (!res) return '';","  if (res instanceof Response) {","    res = { json: await res.json(), text: '' };","    try {","      res.text = JSON.stringify(res.json);","    } catch (_) {}","    runtime.data['request_response'] = res;","  }","  let result = res.json;","  if (!result) return '';","  const indexPath = path.split('.');","  for (const index of indexPath) {","    result = Array.isArray(result) ? result.at(+index - 1) : result[index];","    if (result !== 0 && !result) return '';","  }","  return result;","};"])}function E(){return this.definitions_.request_response="runtime.data['request_response'] = null;",this.provideFunction_("request_get_text",[`const ${this.FUNCTION_NAME_PLACEHOLDER_} = async (path) => {`,"  const res = runtime.data['request_response']","  if (!res) return '';","  if (res instanceof Response) {","    res = { text: await res.text(), json: {} };","    try {","      res.json = JSON.parse(res.text);","    } catch (_) {}","    runtime.data['request_response'] = res;","  }","  return res.text;","};"])}function l(){return this.definitions_.request_option="runtime.data['request_option'] = { body:{}, params:{}, headers:{} };",this.provideFunction_("request_fetch",[`const ${this.FUNCTION_NAME_PLACEHOLDER_} = (method, url) => {`,"  const { body, params, headers } = runtime.data['request_option'];","  const option = { headers, method };","  if (params) {","    url += `?${Object.entries(params).map(([k,v])=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')}`;","  }","  if ((method !== 'GET' && method !== 'HEAD') && body) {","    option.body = JSON.stringify(body);","  }","  return fetch(url, option).then((res) => {","    runtime.data['request_response'] = res;","    runtime.fire('request_success');","  }).catch((e) => {","    runtime.fire('request_fails');","  }).finally(() => {","    runtime.data['request_option'] = { body:{}, params:{}, headers:{} }","  });","};"])}import{jsx as o}from"preact/jsx-runtime";var R={iconURI:u,name:o(i,{id:"extension.request.name",defaultMessage:"Request"}),files:[{name:"request",type:"text/x-python",uri:a}],blocks:[{id:"request",text:o(i,{id:"extension.request.request",defaultMessage:"request content [MOTHOD] to [URL]"}),inputs:{MOTHOD:{type:"string",default:"GET",menu:[["GET","GET"],["POST","POST"],["PUT","PUT"],["PATCH","PATCH"],["DELETE","DELETE"],["HEAD","HEAD"],["OPTIONS","OPTIONS"]]},URL:{type:"string",default:"https://make.blockcode.fun/hello.txt"}},python(e){this.definitions_.import_extension_request="from extensions.request import request";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.quote_(e.getFieldValue("MOTHOD")||"GET"),n=this.valueToCode(e,"URL",this.ORDER_NONE)||'""';return t+=`await request.afetch(str(${s}), str(${n}))\n`,t},vm(e){let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=l.call(this),n=this.quote_(e.getFieldValue("MOTHOD")||"GET"),d=this.valueToCode(e,"URL",this.ORDER_NONE)||'""';return t+=`await ${s}(String(${n}), String(${d}));\n`,t}},{id:"clear_cache",text:o(i,{id:"extension.request.clearCache",defaultMessage:"clear request cache"}),python(){this.definitions_.import_extension_request="from extensions.request import request";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,block);return e+="request.clear_cache()\n",e},vm(){this.definitions_.request_option="runtime.data['request_option'] = { body:{}, params:{}, headers:{} };",this.definitions_.request_response="runtime.data['request_response'] = null;";let e="";if(this.STATEMENT_PREFIX)e+=this.injectId(this.STATEMENT_PREFIX,block);return e+="runtime.data['request_option'] = { body:{}, params:{}, headers:{} };\n",e+="runtime.data['request_response'] = null;\n",e}},{id:"get_content",text:o(i,{id:"extension.request.getContent",defaultMessage:"item [PATH] of content"}),inputs:{PATH:{type:"string",default:"path.2.item"}},output:"string",python(e){return this.definitions_.import_extension_request="from extensions.request import request",[`request.get_content(${this.valueToCode(e,"PATH",this.ORDER_NONE)||'""'})`,this.ORDER_FUNCTION_CALL]},vm(e){this.definitions_.request_response="runtime.data['request_response'] = null;";const t=_.call(this),s=this.valueToCode(e,"PATH",this.ORDER_NONE)||'""';return[`(await ${t}(${s}))`,this.ORDER_FUNCTION_CALL]}},{id:"get_text",text:o(i,{id:"extension.request.getText",defaultMessage:"text content"}),output:"string",python(){return this.definitions_.import_extension_request="from extensions.request import request",["request.get_content()",this.ORDER_FUNCTION_CALL]},vm(){return this.definitions_.request_response="runtime.data['request_response'] = null;",[`(await ${E.call(this)}())`,this.ORDER_FUNCTION_CALL]}},"---",{id:"when_responds",text:o(i,{id:"extension.request.whenResponds",defaultMessage:"when a site responds"}),hat:!0,python(){return this.definitions_.import_extension_request="from extensions.request import request",`@when(request.REQUEST_SUCCESS, target)\n${this.eventToCode("request_success","target")}`},vm(){return`runtime.when('request_success', ${`async (target, done) => {\ndo {\n${this.HAT_CODE}} while (false);\ndone();\n}`}, target);\n`}},{id:"when_fails",text:o(i,{id:"extension.request.whenFails",defaultMessage:"when a request fails"}),hat:!0,python(){return this.definitions_.import_extension_request="from extensions.request import request",`@when(request.REQUEST_FAILS)\n${this.eventToCode("request_fails")}`},vm(){return`runtime.when('request_fails', ${`async (done) => {\ndo {\n${this.HAT_CODE}} while (false);\ndone();\n}`});\n`}},{id:"is_responds",text:o(i,{id:"extension.request.isResponds",defaultMessage:"site responds?"}),output:"boolean",python(){return this.definitions_.import_extension_request="from extensions.request import request",["bool(request.response)",this.ORDER_FUNCTION_CALL]},vm(){return this.definitions_.request_response="runtime.data['request_response'] = null;",["Boolean(runtime.data['request_response'])",this.ORDER_FUNCTION_CALL]}},{id:"status_code",text:o(i,{id:"extension.request.statusCode",defaultMessage:"status code"}),output:"number",python(){return this.definitions_.import_extension_request="from extensions.request import request",["(request.response.status if request.response else 0)",this.ORDER_FUNCTION_CALL]},vm(){return this.definitions_.request_response="runtime.data['request_response'] = null;",["(runtime.data['request_response'] ? runtime.data['request_response'].status : 0)",this.ORDER_FUNCTION_CALL]}},"---",{id:"set_content_type",text:o(i,{id:"extension.request.setContentType",defaultMessage:"set content type to [CONTENTTYPE]"}),inputs:{CONTENTTYPE:{type:"string",default:"text/plain",menu:[["application/json","application/json"],["text/plain","text/plain"]]}},python(e){this.definitions_.import_extension_request="from extensions.request import request";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.quote_(e.getFieldValue("CONTENTTYPE")||"text/plain");return t+=`request.set_header('Content-Type', str(${s}))\n`,t},vm(e){this.definitions_.request_option="runtime.data['request_option'] = { body:{}, params:{}, headers:{} };";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.quote_(e.getFieldValue("CONTENTTYPE")||"text/plain");return t+=`runtime.data['request_option']['headers']['Content-Type'] = ${s};\n`,t}},{id:"set_header",text:o(i,{id:"extension.request.setHeader",defaultMessage:"set headers [HEADER] to [VALUE]"}),inputs:{HEADER:{type:"string",default:"Content-Type"},VALUE:{type:"string",default:"text/plain"}},python(e){this.definitions_.import_extension_request="from extensions.request import request";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.valueToCode(e,"HEADER",this.ORDER_NONE)||'""',n=this.valueToCode(e,"VALUE",this.ORDER_NONE)||'""';return t+=`request.set_header(str(${s}), str(${n}))\n`,t},vm(e){this.definitions_.request_option="runtime.data['request_option'] = { body:{}, params:{}, headers:{} };";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.valueToCode(e,"HEADER",this.ORDER_NONE)||'""',n=this.valueToCode(e,"VALUE",this.ORDER_NONE)||'""';return t+=`runtime.data['request_option']['headers'][${s}] = ${n};\n`,t}},{id:"set_param",text:o(i,{id:"extension.request.setParam",defaultMessage:"set param [KEY] to [VALUE]"}),inputs:{KEY:{type:"string",default:"key"},VALUE:{type:"string",default:"value"}},python(e){this.definitions_.import_extension_request="from extensions.request import request";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.valueToCode(e,"KEY",this.ORDER_NONE)||'""',n=this.valueToCode(e,"VALUE",this.ORDER_NONE)||'""';return t+=`request.set_param(str(${s}), str(${n}))\n`,t},vm(e){this.definitions_.request_option="runtime.data['request_option'] = { body:{}, params:{}, headers:{} };";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.valueToCode(e,"KEY",this.ORDER_NONE)||'""',n=this.valueToCode(e,"VALUE",this.ORDER_NONE)||'""';return t+=`runtime.data['request_option']['params'][${s}] = ${n};\n`,t}},{id:"set_body",text:o(i,{id:"extension.request.setBody",defaultMessage:"set body [KEY] to [VALUE]"}),inputs:{KEY:{type:"string",default:"key"},VALUE:{type:"string",default:"value"}},python(e){this.definitions_.import_extension_request="from extensions.request import request";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.valueToCode(e,"KEY",this.ORDER_NONE)||'""',n=this.valueToCode(e,"VALUE",this.ORDER_NONE)||'""';return t+=`request.set_body(str(${s}), str(${n}))\n`,t},vm(e){this.definitions_.request_option="runtime.data['request_option'] = { body:{}, params:{}, headers:{} };";let t="";if(this.STATEMENT_PREFIX)t+=this.injectId(this.STATEMENT_PREFIX,e);const s=this.valueToCode(e,"KEY",this.ORDER_NONE)||'""',n=this.valueToCode(e,"VALUE",this.ORDER_NONE)||'""';return t+=`runtime.data['request_option']['body'][${s}] = ${n};\n`,t}}],translations:r};export{R as default};
