!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n={default:this,call:function(e,t,n){var o="";"function"==typeof t&&(n=t,t={});var i={data:void 0===t?null:t};if("function"==typeof n){var r="dscb"+window.dscb++;window[r]=n,i._dscbstub=r}return i=JSON.stringify(i),window._dsbridge?o=_dsbridge.call(e,i):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(o=prompt("_dsbridge="+e,i)),JSON.parse(o||"{}").data},register:function(e,t,o){var i=o?window._dsaf:window._dsf;window._dsInit||(window._dsInit=!0,setTimeout((function(){n.call("_dsb.dsinit")}),0)),"object"==typeof t?i._obs[e]=t:i[e]=t},registerAsyn:function(e,t){this.register(e,t,!0)},hasNativeMethod:function(e,t){return this.call("_dsb.hasNativeMethod",{name:e,type:t||"all"})},disableJavascriptDialogBlock:function(e){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==e})}};!function(){if(!window._dsf){var e={_dsf:{_obs:{}},_dsaf:{_obs:{}},dscb:0,dsBridge:n,close:function(){n.call("_dsb.closePage")},_handleMessageFromNative:function(e){var t=JSON.parse(e.data),o={id:e.callbackId,complete:!0},i=this._dsf[e.method],r=this._dsaf[e.method],a=function(e,i){o.data=e.apply(i,t),n.call("_dsb.returnValue",o)},d=function(e,i){t.push((function(e,t){o.data=e,o.complete=!1!==t,n.call("_dsb.returnValue",o)})),e.apply(i,t)};if(i)a(i,this._dsf);else if(r)d(r,this._dsaf);else{var s=e.method.split(".");if(s.length<2)return;var l=s.pop(),u=s.join("."),c=this._dsf._obs,f=c[u]||{},_=f[l];if(_&&"function"==typeof _)return void a(_,f);if((_=(f=(c=this._dsaf._obs)[u]||{})[l])&&"function"==typeof _)return void d(_,f)}}};for(var t in e)window[t]=e[t];n.register("_hasJavascriptMethod",(function(e,t){var n=e.split(".");if(n.length<2)return!(!_dsf[n]&&!_dsaf[n]);e=n.pop();var o=n.join("."),i=_dsf._obs[o]||_dsaf._obs[o];return i&&!!i[e]}))}}(),e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o);const r=new Set([]),a={};let d={patch:a,platfrom:(s=navigator.userAgent,l=/(?:Windows Phone)/.test(s),u=/(?:SymbianOS)/.test(s)||l,c=/(?:Android)/.test(s),f=/(?:Firefox)/.test(s),/(?:Chrome|CriOS)/.test(s),_=/(?:iPad|PlayBook)/.test(s)||c&&!/(?:Mobile)/.test(s)||f&&/(?:Tablet)/.test(s),p=/(?:iPhone)/.test(s)&&!_,{isTablet:_,isPhone:p,isAndroid:c,isPc:!p&&!c&&!u}),hybrid:!0,bridge:i.a,use:function(e,t){if(r.has(e))throw e+',注册无效,模块已存在,xengine.use("'+e+'") 只允许调用一次;';r.add(e),console.log(e+",注册成功");let n=function(t,n){if(n.hasOwnProperty("__event__")){let i=n.__event__;if(!(o=i)||"[object Function]"!=={}.toString.call(o))throw"__event__ 必须为函数";n.__event__=e+t+"__event__",dsBridge.register(n.__event__,e=>{i(e)})}else if(n.hasOwnProperty("$xevent"))return void alert("系统不再支持$xevent,请改为__event__");var o;return new Promise((o,i)=>{dsBridge.call(e+"."+t,n,(function(e){o(e)}))})};return t.reduce((e,t,o)=>{if(null===(r=t)||"function"!=typeof r&&"object"!=typeof r){if(i=t,"[object String]"!==Object.prototype.toString.call(i))throw"仅支持 string 与 {name:xxx, default_args:{...}}";e[t]=e=>n(t,e)}else e[t.name]=e=>n(t.name,{...t.default_args,...e});var i,r;return e},{})}};var s,l,u,c,f,_,p;function g(e){if(judgeDeviceType.isIOS&&(e.addEventListener("focus",(function(){console.log("IOS 键盘弹起啦！")}),!1),e.addEventListener("blur",()=>{console.log("IOS 键盘收起啦！")})),judgeDeviceType.isAndroid){var t=document.documentElement.clientHeight||document.body.clientHeight;window.addEventListener("resize",(function(){var e=document.documentElement.clientHeight||document.body.clientHeight;t<e?console.log("Android 键盘收起啦！"):console.log("Android 键盘弹起啦！"),t=e}),!1)}}Object.defineProperty(d,"bridge",{get:()=>i.a,set:function(){throw"dsbridge不能被修改"}});for(var v=document.querySelectorAll(".input"),b=0;b<v.length;b++)g(v[b]);a.disableDoubleTapScroll=function(e){e=e||500,console.log("禁用双击滑动,两次点击冷却时间为"+e+" ms");var t=navigator.userAgent.toLowerCase(),n=null;(t.indexOf("iphone")>=0||t.indexOf("ipad")>=0)&&document.body.addEventListener("touchend",(function(t){var o=(new Date).getTime(),i=o-(n=n||o+1);if(i<e&&i>0)return t.preventDefault(),!1;n=o}),!1)};var h=d;t.default=h.use("com.zkty.module.lope",[{name:"initSdkAndConfigure",default_args:{pid:"03jfuto709chalfwo84nf921qujt5p"}},{name:"scanDevice",default_args:{interval:1,serviceUUIDs:["2560","FEE7"],immediately:!1}},{name:"openDoor",default_args:{locks:[{mac:"00:18:E4:0C:73:89",key:"12345678"},{mac:"00:18:E4:0C:6C:21",key:"12345678"}]}},{name:"lightLift",default_args:{mac:"B0:7E:11:F4:D9:94",ioIndex:4}}])}]);