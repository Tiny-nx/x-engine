function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var n=window,o={default:void 0,call:function(e,t,o){if("function"==typeof t&&(o=t,t={}),t={data:void 0===t?null:t},"function"==typeof o){var r="dscb"+n.dscb++;n[r]=o,t._dscbstub=r}t=JSON.stringify(t);var i="";return n._dsbridge?i=_dsbridge.call(e,t):(n._dswk||-1!=n.navigator.userAgent.indexOf("_dsbridge"))&&n.prompt&&(i=n.prompt("_dsbridge="+e,t)),JSON.parse(i||"{}").data},unregister:function(e){delete n._dsaf._obs[e],delete n._dsaf[e],delete n._dsf._obs[e],delete n._dsf[e]},register:function(e,t,r){r=r?n._dsaf:n._dsf,n._dsInit||(n._dsInit=!0,setTimeout(function(){o.call("_dsb.dsinit")},0)),"object"==typeof t?r._obs[e]=t:r[e]=t},registerAsyn:function(e,t){this.register(e,t,!0)},hasNativeMethod:function(e,t){return this.call("_dsb.hasNativeMethod",{name:e,type:t||"all"})},disableJavascriptDialogBlock:function(e){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==e})}};n._dsf||(n._dsf={_obs:{}},n._dsaf={_obs:{}},n.dscb=0,n.dsBridge=o,n.close=function(){o.call("_dsb.closePage")},n._handleMessageFromNative=function(e){var t=JSON.parse(e.data),n={id:e.callbackId,complete:!0},r=this._dsaf[e.method],i=function(e,r){n.data=e.apply(r,t),o.call("_dsb.returnValue",n)},a=function(e,r){t.push(function(e,t){n.data=e,n.complete=!1!==t,o.call("_dsb.returnValue",n)}),e.apply(r,t)};if(s=this._dsf[e.method])i(s,this._dsf);else if(r)a(r,this._dsaf);else if(!(2>(s=e.method.split(".")).length)){e=s.pop();var s=s.join("."),d=(r=(r=this._dsf._obs)[s]||{})[e];d&&"function"==typeof d?i(d,r):(d=(r=(r=this._dsaf._obs)[s]||{})[e])&&"function"==typeof d&&a(d,r)}},o.register("_hasJavascriptMethod",function(e,t){return 2>(t=e.split(".")).length?!(!_dsf[t]&&!_dsaf[t]):(e=t.pop(),t=t.join("."),(t=_dsf._obs[t]||_dsaf._obs[t])&&!!t[e])}));var r=new Set([]),i={},a="undefined"==typeof window?global:window;function s(e){return e&&"[object Function]"==={}.toString.call(e)}var d,l,c,u,f,_={patch:i,platform:(l=null==a||null==(d=a.navigator)?void 0:d.userAgent,c=/(?:Android)/.test(l),u=/(?:iPhone)/.test(l),{isPhone:u,isAndroid:c,isPc:!u&&!c}),hybrid:!0,isHybrid:function(){return a&&!0===a._dswk},bridge:o,use:function(t,n){if(r.has(t))throw t+',注册无效,模块已存在,xengine.use("'+t+'") 只允许调用一次;';r.add(t),console.log(t+",js 注册成功");var o=function(e,n){if(n.hasOwnProperty("__event__")){b++;var o=n.__event__;if(!s(o))throw"__event__ 必须为函数";n.__event__=t+"."+e+".__event__"+b,_.bridge.register(n.__event__,function(e){return o(e)})}return e.startsWith("sync")?_.bridge.call(t+"."+e,n):new Promise(function(o,r){console.warn("x-engine 0.1.0 将不再支持 promise,改用参数里的　__ret__做为异步返回值,以支持多次返回.或者直接调用函数同步返回"),_.bridge.call(t+"."+e,n,function(e){if(o(e),n.__ret__)return n.__ret__(e)})})};return n.reduce(function(t,n,r){if(null===(i=n)||"function"!=typeof i&&"object"!=typeof i){if("[object String]"!==Object.prototype.toString.call(n))throw"仅支持 string 与 {name:xxx, default_args:{...}}";t[n]=function(e){return o(n,e)}}else t[n.name]=function(t){return o(n.name,e({},n.default_args,t))};var i;return t},{})},api:function(e,t,n,r){if(n&&n.hasOwnProperty("__event__")){b++;var i=n.__event__;if(!s(i))throw"__event__ 必须为函数";n.__event__=ns+"."+t+".__event__"+b,_.bridge.register(n.__event__,function(e){return i(e)})}return o.call(e+"."+t,n,r)},broadcastOn:function(e){g.push(e),_.bridge.register("com.zkty.module.engine.broadcast",function(e){for(var n,o=function(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(o)return(o=o.call(e)).next.bind(o);if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))){o&&(e=o);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(g);!(n=o()).done;)(0,n.value)(e.type,e.payload)})},broadcastOff:function(){_.bridge.unregister("com.zkty.module.engine.broadcast")},assert:function(e,t){"document"in a&&(document.getElementById(e).style.backgroundColor=t?"green":"red")},onLifecycle:function(e){f=e}};_.bridge.register("com.zkty.jsi.engine.lifecycle.notify",function(e){if(!f)throw"未注册 lifecycle";f(e.type,e.payload)});var g=[],b=0;function p(e){if(this.platform.isPhone&&(e.addEventListener("focus",function(){console.log("IOS 键盘弹起啦！")},!1),e.addEventListener("blur",function(){console.log("IOS 键盘收起啦！")})),this.platform.isAndroid){var t,n,o=(null==(t=document)?void 0:t.documentElement.clientHeight)||(null==(n=document)?void 0:n.body.clientHeight);a.addEventListener("resize",function(){var e,t,n=(null==(e=document)?void 0:e.documentElement.clientHeight)||(null==(t=document)?void 0:t.body.clientHeight);o<n?console.log("Android 键盘收起啦！"):console.log("Android 键盘弹起啦！"),o=n},!1)}}Object.defineProperty(_,"bridge",{get:function(){return o},set:function(){throw"dsbridge不能被修改"}});var v=[];"document"in a&&(v=document.querySelectorAll(".input"));for(var h=0;h<v.length;h++)p(v[h]);i.disableDoubleTapScroll=function(e){var t,n;e=e||500,console.log("禁用双击滑动,两次点击冷却时间为"+e+" ms");var o=null==a||null==(t=a.navigator)||null==(n=t.userAgent)?void 0:n.toLowerCase(),r=null;"document"in a&&(o.indexOf("iphone")>=0||o.indexOf("ipad")>=0)&&document.body.addEventListener("touchend",function(t){var n=(new Date).getTime(),o=n-(r=r||n+1);if(o<e&&o>0)return t.preventDefault(),!1;r=n},!1)};export default _;
//# sourceMappingURL=bridge.common.module.js.map
