!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){var t={default:this,call:function(e,n,t){var o="";"function"==typeof n&&(t=n,n={});var i={data:void 0===n?null:n};if("function"==typeof t){var r="dscb"+window.dscb++;window[r]=t,i._dscbstub=r}return i=JSON.stringify(i),window._dsbridge?o=_dsbridge.call(e,i):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(o=prompt("_dsbridge="+e,i)),JSON.parse(o||"{}").data},register:function(e,n,o){var i=o?window._dsaf:window._dsf;window._dsInit||(window._dsInit=!0,setTimeout((function(){t.call("_dsb.dsinit")}),0)),"object"==typeof n?i._obs[e]=n:i[e]=n},registerAsyn:function(e,n){this.register(e,n,!0)},hasNativeMethod:function(e,n){return this.call("_dsb.hasNativeMethod",{name:e,type:n||"all"})},disableJavascriptDialogBlock:function(e){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==e})}};!function(){if(!window._dsf){var e={_dsf:{_obs:{}},_dsaf:{_obs:{}},dscb:0,dsBridge:t,close:function(){t.call("_dsb.closePage")},_handleMessageFromNative:function(e){var n=JSON.parse(e.data),o={id:e.callbackId,complete:!0},i=this._dsf[e.method],r=this._dsaf[e.method],a=function(e,i){o.data=e.apply(i,n),t.call("_dsb.returnValue",o)},d=function(e,i){n.push((function(e,n){o.data=e,o.complete=!1!==n,t.call("_dsb.returnValue",o)})),e.apply(i,n)};if(i)a(i,this._dsf);else if(r)d(r,this._dsaf);else{var s=e.method.split(".");if(s.length<2)return;var l=s.pop(),u=s.join("."),c=this._dsf._obs,f=c[u]||{},_=f[l];if(_&&"function"==typeof _)return void a(_,f);if((_=(f=(c=this._dsaf._obs)[u]||{})[l])&&"function"==typeof _)return void d(_,f)}}};for(var n in e)window[n]=e[n];t.register("_hasJavascriptMethod",(function(e,n){var t=e.split(".");if(t.length<2)return!(!_dsf[t]&&!_dsaf[t]);e=t.pop();var o=t.join("."),i=_dsf._obs[o]||_dsaf._obs[o];return i&&!!i[e]}))}}(),e.exports=t},function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o);const r=new Set([]),a={};let d={patch:a,platfrom:(s=navigator.userAgent,l=/(?:Windows Phone)/.test(s),u=/(?:SymbianOS)/.test(s)||l,c=/(?:Android)/.test(s),f=/(?:Firefox)/.test(s),/(?:Chrome|CriOS)/.test(s),_=/(?:iPad|PlayBook)/.test(s)||c&&!/(?:Mobile)/.test(s)||f&&/(?:Tablet)/.test(s),p=/(?:iPhone)/.test(s)&&!_,{isTablet:_,isPhone:p,isAndroid:c,isPc:!p&&!c&&!u}),hybrid:!0,bridge:i.a,use:function(e,n){if(r.has(e))throw e+',注册无效,模块已存在,xengine.use("'+e+'") 只允许调用一次;';r.add(e),console.log(e+",注册成功");let t=function(n,t){if(t.hasOwnProperty("__event__")){let i=t.__event__;if(!(o=i)||"[object Function]"!=={}.toString.call(o))throw"__event__ 必须为函数";t.__event__=e+n+"__event__",dsBridge.register(t.__event__,e=>{i(e)})}else if(t.hasOwnProperty("$xevent"))return void alert("系统不再支持$xevent,请改为__event__");var o;return new Promise((o,i)=>{dsBridge.call(e+"."+n,t,(function(e){o(e)}))})};return n.reduce((e,n,o)=>{if(null===(r=n)||"function"!=typeof r&&"object"!=typeof r){if(i=n,"[object String]"!==Object.prototype.toString.call(i))throw"仅支持 string 与 {name:xxx, default_args:{...}}";e[n]=e=>t(n,e)}else e[n.name]=e=>t(n.name,{...n.default_args,...e});var i,r;return e},{})}};var s,l,u,c,f,_,p;function g(e){if(judgeDeviceType.isIOS&&(e.addEventListener("focus",(function(){console.log("IOS 键盘弹起啦！")}),!1),e.addEventListener("blur",()=>{console.log("IOS 键盘收起啦！")})),judgeDeviceType.isAndroid){var n=document.documentElement.clientHeight||document.body.clientHeight;window.addEventListener("resize",(function(){var e=document.documentElement.clientHeight||document.body.clientHeight;n<e?console.log("Android 键盘收起啦！"):console.log("Android 键盘弹起啦！"),n=e}),!1)}}Object.defineProperty(d,"bridge",{get:()=>i.a,set:function(){throw"dsbridge不能被修改"}});for(var m=document.querySelectorAll(".input"),b=0;b<m.length;b++)g(m[b]);a.disableDoubleTapScroll=function(e){e=e||500,console.log("禁用双击滑动,两次点击冷却时间为"+e+" ms");var n=navigator.userAgent.toLowerCase(),t=null;(n.indexOf("iphone")>=0||n.indexOf("ipad")>=0)&&document.body.addEventListener("touchend",(function(n){var o=(new Date).getTime(),i=o-(t=t||o+1);if(i<e&&i>0)return n.preventDefault(),!1;t=o}),!1)};var h=d,v={openUniMP:(e={appId:"__UNI__5DE1E68"},n)=>n?n():new Promise((e,n)=>{alert("openUniMP no h5 implementation, you can implement this function in mock.js in  h5/src/mock.js"),e(null)}),preloadUniMP:(e={appId:"__UNI__11E9B73"},n)=>n?n():new Promise((e,n)=>{alert("preloadUniMP no h5 implementation, you can implement this function in mock.js in  h5/src/mock.js"),e(null)}),openUniMPWithArg:(e={appId:"__UNI__11E9B73",arguments:{arguments:"Hello uni microprogram"},redirectPath:"pages/component/view/view",enableBackground:!1},n)=>n?n():new Promise((e,n)=>{alert("openUniMPWithArg no h5 implementation, you can implement this function in mock.js in  h5/src/mock.js"),e(null)})};var w=h.hybrid?h.use("com.zkty.module.dcloud",[{name:"openUniMP",default_args:{appId:"__UNI__86C4327"}},{name:"preloadUniMP",default_args:{appId:"__UNI__11E9B73"}},{name:"openUniMPWithArg",default_args:{appId:"__UNI__11E9B73",arguments:{arguments:"Hello uni microprogram"},redirectPath:"pages/component/view/view",enableBackground:!1}}]):v;window.openUniMP=()=>{w.openUniMP().then(e=>{document.getElementById("debug_text").innerText="ret:"+e})},window.preloadUniMP=()=>{w.preloadUniMP().then(e=>{document.getElementById("debug_text").innerText="ret:"+e})},window.openUniMPWithArg=()=>{w.openUniMPWithArg().then(e=>{document.getElementById("debug_text").innerText="ret:"+e})}}]);