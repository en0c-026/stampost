/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={669:(e,t,n)=>{n(609)},448:(e,t,n)=>{"use strict";var r=n(867),a=n(26),o=n(372),s=n(327),i=n(97),u=n(109),l=n(985),c=n(61);e.exports=function(e){return new Promise((function(t,n){var d=e.data,f=e.headers;r.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(h+":"+m)}var v=i(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),s(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};a(t,n,o),p=null}},p.onabort=function(){p&&(n(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(c(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||l(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),d||(d=null),p.send(d)}))}},609:(e,t,n)=>{"use strict";var r=n(867),a=n(849),o=n(321),s=n(185);function i(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=i(n(655));u.Axios=o,u.create=function(e){return i(s(u.defaults,e))},u.Cancel=n(263),u.CancelToken=n(972),u.isCancel=n(502),u.all=function(e){return Promise.all(e)},u.spread=n(713),u.isAxiosError=n(268),e.exports=u,e.exports.default=u},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),a=n(327),o=n(782),s=n(572),i=n(185);function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=i(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=u},782:(e,t,n)=>{"use strict";var r=n(867);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},97:(e,t,n)=>{"use strict";var r=n(793),a=n(303);e.exports=function(e,t){return e&&!r(t)?a(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,a,o){var s=new Error(e);return r(s,t,n,a,o)}},572:(e,t,n)=>{"use strict";var r=n(867),a=n(527),o=n(502),s=n(655);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={},a=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function u(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function l(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=u(void 0,e[a])):n[a]=u(e[a],t[a])}r.forEach(a,(function(e){r.isUndefined(t[e])||(n[e]=u(void 0,t[e]))})),r.forEach(o,l),r.forEach(s,(function(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=u(void 0,e[a])):n[a]=u(void 0,t[a])})),r.forEach(i,(function(r){r in t?n[r]=u(e[r],t[r]):r in e&&(n[r]=u(void 0,e[r]))}));var c=a.concat(o).concat(s).concat(i),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return r.forEach(d,l),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),a=n(16),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,u={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(i=n(448)),i),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(o)})),e.exports=u},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(a(t)+"="+a(e))})))})),o=s.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(a)&&i.push("path="+a),r.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&a.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,n)=>{"use strict";var r=n(849),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function s(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===a.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:l,isStream:function(e){return i(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{"use strict";let e=!1;function t(t){e&&console.warn(t)}function r(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function a(e=""){return["false","null","undefined","0","-0","NaN","0n","-0n"].includes(e)}function o(e,t,n,r){let a;return e&&t?(a=new CustomEvent(t,{bubbles:!0,cancelable:!r,detail:n}),e.dispatchEvent(a)):_.err("You did not provide an element or event name.")}function s(e,t){function n(n){for(let r in e)e.hasOwnProperty(r)&&(n[r]=s(e[r],t))}let a=r(e);return"object"===a?function(){let e={};return n(e),e}():"array"===a?e.map((function(e){return s(e,t)})):"map"===a?function(){let n=new Map;for(let[r,a]of e)n.set(r,s(a,t));return n}():"set"===a?function(){let e=new Set;for(let n of set)e.add(s(n,t));return e}():"function"===a?function(){let t=e.bind(this);return n(t),t}():"string"!==a||t?e:e.replace(/javascript:/gi,"").replace(/[^\w-_. ]/gi,(function(e){return`&#${e.charCodeAt(0)};`}))}function i(e){e.debounce&&window.cancelAnimationFrame(e.debounce),e.debounce=window.requestAnimationFrame((function(){e.render()}))}function u(e){return{get:function(t,n){return["object","array"].indexOf(r(t[n]))>-1?new Proxy(t[n],u(e)):t[n]},set:function(t,n,r){return t[n]===r||(t[n]=r,i(e)),!0}}}let l=["checked","selected","value"],c=["checked","selected"],d=["input","option","textarea"],f=["reef-checked","reef-selected","reef-value"],p=["reef-default-checked","reef-default-selected","reef-default-value"];function h(e,t){t.forEach((function(t){if("class"===t.att)e.className=t.value;else if("style"===t.att)e.style.cssText=t.value;else{if(t.att in e)try{e[t.att]=t.value,e[t.att]||0===e[t.att]||(e[t.att]="value"!==t.att||t.value)}catch(e){}try{e.setAttribute(t.att,t.value)}catch(e){}}}))}function m(e,t){t.forEach((function(t){if("class"===t.att)e.className="";else if("style"===t.att)e.style.cssText="";else{if(t.att in e)try{e[t.att]=""}catch(e){}try{e.removeAttribute(t.att)}catch(e){}}}))}function v(e,t){return{att:e,value:t}}function g(e,t){return 1!==e.nodeType?[]:Array.from(e.attributes).map((function(n){if(!(t&&l.includes(n.name)&&d.includes(e.tagName.toLowerCase()))){if(!t&&l.includes(n.name))return v(n.name,e[n.name]);if(!p.includes(n.name)){if(t&&f.includes(n.name)){let e=n.name.replace("reef-","");return c.includes(e)?v(e,a(n.value)?null:e):v(e,n.value)}return v(n.name,n.value)}}})).filter((function(e){return!!e}))}function y(e){1===e.nodeType&&(Array.from(e.attributes).forEach((function(t){if(!f.includes(t.name)&&!p.includes(t.name))return;let n=t.name.replace("reef-default-","").replace("reef-",""),r=c.includes(n);m(e,[v(t.name,t.value)]),r&&a(t.value)||h(e,[v(n,r?n:t.value)])})),e.childNodes&&Array.from(e.childNodes).forEach((function(e){y(e)})))}function b(e){return 3===e.nodeType?"text":8===e.nodeType?"comment":e.tagName.toLowerCase()}function w(e){return e.childNodes&&e.childNodes.length>0?null:e.textContent}function x(e,t){return b(e)!==b(t)||e.id!==t.id||e.src!=e.src}function C(e,t,n=[]){let r=t.childNodes,a=e.childNodes;a.forEach((function(e,a){if(!r[a])return y(e),void t.append(e.cloneNode(!0));if(x(e,r[a])){let t=function(e,t,n){return Array.from(t).slice(n+1).find((function(t){return!x(e,t)}))}(e,r,a);if(!t)return y(e),void r[a].before(e.cloneNode(!0));r[a].before(t)}if(function(e,t){let n=g(e,!0),r=g(t),a=r.filter((function(e){let t=n.find((function(t){return e.att===t.att}));return void 0===t&&!l.includes(e.att)||t&&c.includes(t.att)&&null===t.value}));h(t,n.filter((function(e){if(c.includes(e.att)&&null===e.value)return!1;let t=r.find((function(t){return e.att===t.att}));return void 0===t||t.value!==e.value}))),m(t,a)}(e,r[a]),n.filter((function(t){return![3,8].includes(e.nodeType)&&e.matches(t)})).length>0)return;let o=w(e);if(o&&o!==w(r[a])&&(r[a].textContent=o),r[a].childNodes.length>0&&e.childNodes.length<1)r[a].innerHTML="";else{if(r[a].childNodes.length<1&&e.childNodes.length>0){let t=document.createDocumentFragment();return C(e,t,n),void r[a].appendChild(t)}e.childNodes.length>0&&C(e,r[a],n)}})),function(e,t){let n=e.length-t.length;if(!(n<1))for(;n>0;n--)e[e.length-n].remove(e[e.length-n])}(r,a)}function S(e,n){e&&e.forEach((function(e){if(e.attached.includes(n))return t(`"${n.elem}" has attached nodes that it is also attached to, creating an infinite loop.`);"render"in e&&e.render()}))}function E(e,n){if(!(e||n&&n.lagoon))return t("You did not provide an element to make into a component.");if(!n||!n.template&&!n.lagoon)return t("You did not provide a template for this component.");let a=this,l=function(e,t){return e.setters?e.store?null:e.data:e.data&&!e.store?new Proxy(e.data,u(t)):null}(n,a),c=n.attachTo?"array"===r(n.attachTo)?n.attachTo:[n.attachTo]:[],{store:d,router:f,setters:p,getters:h}=n;a.debounce=null,Object.defineProperties(a,{elem:{value:e},template:{value:n.template},allowHTML:{value:n.allowHTML},lagoon:{value:n.lagoon},store:{value:d},attached:{value:[]},data:{get:function(){return p?s(l,!0):l},set:function(e){return d||p||(l=new Proxy(e,u(a)),i(a)),!0},configurable:!0},do:{value:function(e){if(d||!p)return t("There are no setters for this component.");if(!p[e])return t("There is no setter with this name.");let n=Array.from(arguments);n[0]=l,p[e].apply(a,n),i(a)},configurable:!0},get:{value:function(e){if(d||!h)return t("There are no getters for this component.");if(!h[e])return t("There is no getter with this name.");let n=Array.from(arguments);return n[0]=l,h[e].apply(a,n)},configurable:!0}}),f&&"addComponent"in f&&f.addComponent(a),d&&"attach"in d&&d.attach(a),c.length&&c.forEach((function(e){"attach"in e&&e.attach(a)})),o(document,"reef:initialized",a)}E.prototype.render=function(){if(this.lagoon)return void S(this.attached,this);if(!this.template)return t("No template was provided.");let e="string"===r(this.elem)?document.querySelector(this.elem):this.elem;if(!e)return t("The DOM element to render your template into was not found.");let n=s((this.store?this.store.data:this.data)||{},this.allowHTML),a="function"===r(this.template)?this.template(n,this.router&&this.router.current?this.router.current:e,e):this.template;if(!["string","number"].includes(r(a)))return;if(!o(e,"reef:before-render",n))return;let i=this.attached.map((function(e){return e.elem}));return C(function(e){let t=(new DOMParser).parseFromString(e,"text/html");return t.head&&t.head.childNodes&&t.head.childNodes.length>0&&Array.from(t.head.childNodes).reverse().forEach((function(e){t.body.insertBefore(e,t.body.firstChild)})),t.body||document.createElement("body")}(a),e,i),o(e,"reef:render",n),o(e,"render",n),S(this.attached,this),e},E.prototype.attach=function(e){let t="array"===r(e)?e:[e];for(let e of t)this.attached.push(e);o(document,"reef:attached",{component:this,attached:t})},E.prototype.detach=function(e){let t="array"===r(e)?e:[e];for(let e of t){let t=this.attached.indexOf(e);if(t<0)return;this.attached.splice(t,1)}o(document,"reef:detached",{component:this,detached:t})},E.Store=function(e){return e.lagoon=!0,new E(null,e)},E.use=function(e){e.install&&"function"==typeof e.install&&(e.install(E,{diff:C}),o(document,"reef:plugin-added",e))},E.debug=function(t){e=!!t},E.clone=s,E.trueTypeOf=r,E.err=t,E.emit=o,o(document,"reef:ready");const N=E;let A=new N.Store({data:{styles:{buttonWallet:{display:"true",loading:"false"}},content:{user:{display:"",address:""}},files:[]},setters:{setStyle:function(e,t){let n=e.styles[t.element];""!=t.value?n[t.style]=t.value:n[t.style]=""},setContent:function(e,t){let n=e.content[t.element];""!=t.value?n[t.field]=t.value:n[t.field]=""}},getters:{}});const T=new N("#nav-bar",{store:A,template:function(e,t){let n=e.styles,r=e.content;var a="true"==n.buttonWallet.display?"":"is-hidden",o="false"==n.buttonWallet.loading?"":"is-loading",s=r.user.address,i="true"==r.user.display?"":"is-hidden";return`\n    <nav class="navbar is-align-items-center" role="navigation" aria-label="main navigation">\n      <div class="navbar-brand has-text-white-ter\t">\n        <a class="navbar-item" href="#">\n          <img src="${window.location.origin}/src/logo.png">\n        </a>\n\n        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">\n          <span aria-hidden="true"></span>\n          <span aria-hidden="true"></span>\n          <span aria-hidden="true"></span>\n        </a>\n      </div>\n\n      <div id="navbarBasicExample" class="navbar-menu has-text-success">\n        <div class="navbar-start">\n          <a class="navbar-item">\n            Home\n          </a>\n\n          <a class="navbar-item">\n            Documentation\n          </a>\n\n        </div>\n\n        <span class="icon is-align-self-auto">\n          <i class="fas fa-adjust has-text-dark" id="background-color"></i>\n        </span>\n\n        <div class="navbar-end">\n            <div class="navbar-item">\n\n              <span class="icon-text">\n\n                <div class="${i}">\n                  <span>\n                    <img class="image is-32x32" src="https://avatars.dicebear.com/api/avataaars/${Math.floor(1e5*Math.random())}.svg" id="avatar-user">\n                  </span>\n                    <span class="is-size-6 mx-4">${s}</span>\n              </span>\n            </div>\n\n            <div class="buttons" >\n\n              <button class="button is-info is-small mr-4 ${a} ${o}" id="connect-wallet">\n\n                <img class="image is-16x16" src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png">\n\n                <span class=" ml-2">\n                  CONNECT WALLET\n                </span>\n\n              </button>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </nav>`}});let O=new N.Store({data:{styles:{buttonStampFiles:{loading:"false",display:"true",disabled:"false"}},content:{tableFiles:{}}},setters:{setStyle:function(e,t){e.styles[t.element][t.style]=t.value},setContent:function(e,t){e.content[t.element]=t.value}},getters:{getStyles:function(e){return e.styles}}});const j=new N("#upload-files",{store:O,template:function(e){let t=e.styles,n=e.content;var r;return`<div>\n              <h1 class="title is-size-6 fullwidth">Uploader</h1>\n\n              <div class="file is-small is-outlined mt-2">\n                <label class="file-label">\n                  <input class="file-input" type="file" id="uploader" multiple>\n                  <span class="file-cta">\n                    <span class="file-icon">\n                      <i class="fas fa-upload"></i>\n                    </span>\n                    <span class="file-label">\n                      Select files..\n                    </span>\n                  </span>\n                </label>\n              </div>\n\n              <div>\n              <button class="button is-primary is-outlined is-small is-fullwidth mt-2 ${"false"==t.buttonStampFiles.loading?"":"is-loading"}" id="btn-stamp-files">\n              <span class="icon">\n              <i class="fas fa-stamp"></i>\n              </span>\n              <span class="">\n              Stamp\n              </span>\n              </div>\n\n              <table class="table has-text-black-bis is-hoverable is-fullwidth is-size-7 mt-4">\n                <thead>\n                  <tr>\n                    <th>ID</th>\n                    <th>Name</th>\n                    <th>Size</th>\n                    <th>Type</th>\n      \t\t\t\t\t\t\t<th>Prewiew</th>\n                  </tr>\n                </thead>\n                <tbody>\n                ${r=n.tableFiles,Object.keys(r).map((e=>`\n\t\t\t<tr>\n\t\t\t\t<td>${r[e].id}</td>\n\t\t\t\t<td>${r[e].name}</td>\n\t\t\t\t<td>${(r[e].size/1e3).toFixed(1)} kB</td>\n\t\t\t\t<td>${r[e].type}</td>\n\t\t\t\t<td><img src="${r[e].link}" class="image is-32x32"></td>\n\t\t\t</tr>`)).join("\r")}\n                </tbody>\n        \t\t\t</table>\n              <button class="button is-small" id="empty-list">Empty List</button>\n\n\n            </div>`}}),k=new N("#contract-generator",{template:function(e,t){return'<h1 class="title is-size-6 fullwidth">Contract Generator</h1>'}}),R=new N("#show-component",{template:function(){return'<div class="buttons">\n              <button class="button" id="change-component" value="uploader">Uploader</button>\n              <button class="button" id="change-component" value="contract-gen">Contract Generator</button>\n              <button class="button" id="change-component" value="scanner">Scanner</button>\n              <button class="button" id="change-component" value="make-offer">Make Offer</button>\n            </div>'}}),L=new N("#scanner",{template:function(e,t){return'<h1 class="title is-size-6 fullwidth">Scanner</h1>'}}),B=new N("#make-offer",{template:function(e,t){return'<h1 class="title is-size-6 fullwidth">Make Offer</h1>'}});function q(e,t,n){if("attach"===t){for(var r=0;r<n.length;r++)e.attach(n[r]);return e.render(),!0}if("detach"===t){for(r=0;r<n.length;r++)e.detach(n[r]);return e.render(),!0}}function U(e,t,n,r,a,o){let s=function(e,t){let n={isnot:[],is:[]};return Object.keys(e).forEach((r=>{let a=e[r]==t;a&&n.is.push(r),a||n.isnot.push(r)})),n}(t,r);0==s.is.length?(e.do("moduleSet",{ps:n.empty[0],id:r}),q(a,"attach",o)):(e.do("moduleSet",{ps:s.is[0],id:""}),q(a,"detach",o))}function P(e,t,n,r){e.length>0&&(q(n,"attach",r),t.do("setContent",{element:"user",field:"address",value:e[0]}),t.do("setContent",{element:"user",field:"display",value:"true"}),t.do("setStyle",{element:"buttonWallet",style:"loading",value:"false"}),t.do("setStyle",{element:"buttonWallet",style:"display",value:"false"})),0==e.length&&(t.do("setStyle",{element:"buttonWallet",style:"display",value:"true"}),t.do("setContent",{element:"user",field:"address",value:""}),t.do("setContent",{element:"user",field:"display",value:"false"}))}n(669);document.addEventListener("DOMContentLoaded",(e=>{(async function(){return void 0!==window.ethereum?{result:!0,chainId:await window.ethereum.request({method:"eth_chainId"}),provider:window.ethereum}:{result:!1,error:"MetaMask not installed"}})().then((e=>{if(e.result)if("0x1"==e.chainId){!function(e){let t,n,r=new N.Store({data:{user:{},modules:{m1:"",m2:"",m3:"",m4:"",m5:"",m6:""},styles:{},files:[]},setters:{moduleSet:function(e,t){let n=e.modules,r=t.ps,a=t.id;""==a&&(n[r]=""),""!=a&&(n[r]=a)},pushFiles:function(e,t){e.files.push(t)}},getters:{modulesGet:function(e){return e.modules},getFiles:function(e){return e.files}}}),a=new N("#app",{store:r,template:function(e){let t=e.modules;return`<div class='px-6 py-4 has-background-white'>\n                <div id="nav-bar">\n                </div>\n                  <div class="columns mt-4">\n                    <div class="column box m-2" id="show-component"></div>\n                  </div>\n                  <div class="columns mt-4">\n    \t\t\t\t\t\t\t\t<div class="column box m-2" id="${t.m1}"></div>\n    \t\t\t\t\t\t\t\t<div class="column box m-2" id="${t.m2}"></div>\n    \t\t\t\t\t\t\t\t<div class="column box m-2" id="${t.m3}"></div>\n    \t\t\t\t\t\t\t</div>\n                  <div class="columns mt-4">\n    \t\t\t\t\t\t\t\t<div class="column box m-2" id="${t.m4}"></div>\n    \t\t\t\t\t\t\t\t<div class="column box m-2" id="${t.m5}"></div>\n    \t\t\t\t\t\t\t\t<div class="column box m-2" id="${t.m6}"></div>\n    \t\t\t\t\t\t\t</div>\n              </div>`}});q(a,"attach",[T]),e.request({method:"eth_accounts"}).then((e=>{P(e,T.store,a,[R])})),e.on("accountsChanged",(e=>{P(e,T.store,a,[R])})),e.on("chainChanged",(e=>window.location.reload())),document.addEventListener("click",(o=>{document.getElementById("uploader"),"btn-stamp-files"!=o.target.id&&"btn-stamp-files"!=o.target.parentNode.id||(j.store.do("setStyle",{element:"buttonStampFiles",style:"loading",value:"true"}),async function(e){try{return[{name:"pxArt (5).png",type:"image/png",size:6393,link:"https://arweave.net/goxcjy2cWfT-Rl8ziCzqi3_bXmvRBXWCo-NqZCv-gnA"},{name:"pxArt (6).png",type:"image/png",size:4441,link:"https://arweave.net/goxcjy2cWfT-Rl8ziCzqi3_bXmvRBXWCo-NqZCv-gnA"},{name:"pxArt (7).png",type:"image/png",size:2124,link:"https://arweave.net/goxcjy2cWfT-Rl8ziCzqi3_bXmvRBXWCo-NqZCv-gnA"}]}catch(e){}}().then((e=>{for(var t of e){let e=r.get("getFiles");t.id=e.length+1,r.do("pushFiles",t)}let n=r.get("getFiles");j.store.do("setContent",{element:"tableFiles",value:n}),j.store.do("setStyle",{element:"buttonStampFiles",style:"loading",value:"false"})}))),"connect-wallet"!=o.target.id&&"connect-wallet"!=o.target.parentNode.id||(T.store.do("setStyle",{element:"buttonWallet",style:"loading",value:"true"}),e.request({method:"eth_requestAccounts"}).then().catch((e=>{4001!==e.code||T.store.do("setStyle",{element:"buttonWallet",style:"loading",value:"false"})}))),"change-component"==o.target.id&&(t=r.get("modulesGet"),n=function(e){let t={empty:[],filled:[]};return Object.keys(e).forEach((n=>{""==e[n]&&t.empty.push(n),""!=e[n]&&t.filled.push(n)})),t}(t),"uploader"===o.target.value&&U(r,t,n,"upload-files",a,[j]),"contract-gen"===o.target.value&&U(r,t,n,"contract-generator",a,[k]),"make-offer"===o.target.value&&U(r,t,n,"make-offer",a,[B]),"scanner"===o.target.value&&U(r,t,n,"scanner",a,[L]))}))}(e.provider)}else console.log("Select Main Net in Metamask");else console.log("Install Metamask")}))})),window.ethereum&&ethereum.on("chainChanged",(e=>window.location.reload()))})()})();