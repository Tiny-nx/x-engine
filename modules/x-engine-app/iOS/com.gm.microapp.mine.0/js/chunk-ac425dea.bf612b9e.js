(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac425dea"],{2234:function(e,t,n){"use strict";n("f307")},"34be":function(e,t,n){"use strict";var i={default:void 0,call:function(e,t,n){if("function"==typeof t&&(n=t,t={}),t={data:void 0===t?null:t},"function"==typeof n){var i="dscb"+window.dscb++;window[i]=n,t._dscbstub=i}t=JSON.stringify(t);var a="";return window._dsbridge?a=_dsbridge.call(e,t):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(a=prompt("_dsbridge="+e,t)),JSON.parse(a||"{}").data},unregister:function(e){delete window._dsaf._obs[e],delete window._dsaf[e],delete window._dsf._obs[e],delete window._dsf[e]},register:function(e,t,n){n=n?window._dsaf:window._dsf,window._dsInit||(window._dsInit=!0,setTimeout((function(){i.call("_dsb.dsinit")}),0)),"object"==typeof t?n._obs[e]=t:n[e]=t},registerAsyn:function(e,t){this.register(e,t,!0)},hasNativeMethod:function(e,t){return this.call("_dsb.hasNativeMethod",{name:e,type:t||"all"})},disableJavascriptDialogBlock:function(e){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==e})}};(function(){window._dsf||(window["_dsf"]={_obs:{}},window["_dsaf"]={_obs:{}},window["dscb"]=0,window["dsBridge"]=i,window["close"]=function(){i.call("_dsb.closePage")},window["_handleMessageFromNative"]=function(e){var t=JSON.parse(e.data),n={id:e.callbackId,complete:!0},a=this._dsf[e.method],r=this._dsaf[e.method],o=function(e,a){n.data=e.apply(a,t),i.call("_dsb.returnValue",n)},s=function(e,a){t.push((function(e,t){n.data=e,n.complete=!1!==t,i.call("_dsb.returnValue",n)})),e.apply(a,t)};if(a)o(a,this._dsf);else if(r)s(r,this._dsaf);else if(a=e.method.split("."),!(2>a.length)){e=a.pop();a=a.join("."),r=this._dsf._obs,r=r[a]||{};var c=r[e];c&&"function"==typeof c?o(c,r):(r=this._dsaf._obs,r=r[a]||{},(c=r[e])&&"function"==typeof c&&s(c,r))}},i.register("_hasJavascriptMethod",(function(e,t){return t=e.split("."),2>t.length?!(!_dsf[t]&&!_dsaf[t]):(e=t.pop(),t=t.join("."),(t=_dsf._obs[t]||_dsaf._obs[t])&&!!t[e])})))})();var a=i;const r=new Set([]),o={};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function c(e){return null!==e&&("function"===typeof e||"object"===typeof e)}function l(e){return"[object String]"===Object.prototype.toString.call(e)}function d(){return window&&!0===window._dswk}let u={patch:o,platform:b(),hybrid:!0,isHybrid:d,bridge:a,use:v,api:g,broadcastOn:_,broadcastOff:h,assert:f};function f(e,t){document.getElementById(e).style.backgroundColor=t?"green":"red"}function g(e,t,n,i){if(n.hasOwnProperty("__event__")){p++;let e=n["__event__"];if(!s(e))throw"__event__ 必须为函数";n["__event__"]=ns+"."+t+".__event__"+p,u.bridge.register(n["__event__"],t=>e(t))}return a.call(e+"."+t,n,i)}function h(){u.bridge.unregister("com.zkty.module.engine.broadcast")}function _(e){u.bridge.register("com.zkty.module.engine.broadcast",t=>e(t))}let p=0;function v(e,t){if(r.has(e))throw e+',注册无效,模块已存在,xengine.use("'+e+'") 只允许调用一次;';r.add(e),console.log(e+",js 注册成功");let n=function(t,n){if(n.hasOwnProperty("__event__")){p++;let i=n["__event__"];if(!s(i))throw"__event__ 必须为函数";n["__event__"]=e+"."+t+".__event__"+p,u.bridge.register(n["__event__"],e=>i(e))}if(t.startsWith("sync"))return u.bridge.call(e+"."+t,n);{let i=new Promise((i,a)=>{const r="x-engine 0.1.0 将不再支持 promise,改用参数里的　__ret__做为异步返回值,以支持多次返回.或者直接调用函数同步返回";console.warn(r),u.bridge.call(e+"."+t,n,(function(e){if(i(e),n["__ret__"])return n["__ret__"](e)}))});return i}};return t.reduce((e,t,i)=>{if(c(t))e[t.name]=e=>n(t.name,{...t.default_args,...e});else{if(!l(t))throw"仅支持 string 与 {name:xxx, default_args:{...}}";e[t]=e=>n(t,e)}return e},{})}function b(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,i=/(?:Android)/.test(e),a=/(?:Firefox)/.test(e),r=(/(?:Chrome|CriOS)/.test(e),/(?:iPad|PlayBook)/.test(e)||i&&!/(?:Mobile)/.test(e)||a&&/(?:Tablet)/.test(e)),o=/(?:iPhone)/.test(e)&&!r,s=!o&&!i&&!n;return{isTablet:r,isPhone:o,isAndroid:i,isPc:s}}function m(e){if(judgeDeviceType.isIOS&&(e.addEventListener("focus",(function(){console.log("IOS 键盘弹起啦！")}),!1),e.addEventListener("blur",()=>{console.log("IOS 键盘收起啦！")})),judgeDeviceType.isAndroid){var t=document.documentElement.clientHeight||document.body.clientHeight;window.addEventListener("resize",(function(){var e=document.documentElement.clientHeight||document.body.clientHeight;t<e?console.log("Android 键盘收起啦！"):console.log("Android 键盘弹起啦！"),t=e}),!1)}}Object.defineProperty(u,"bridge",{get(){return a},set:function(){throw"dsbridge不能被修改"}});for(var w=document.querySelectorAll(".input"),y=0;y<w.length;y++)m(w[y]);o.disableDoubleTapScroll=function(e){e=e||500,console.log("禁用双击滑动,两次点击冷却时间为"+e+" ms");var t=navigator.userAgent.toLowerCase(),n=null;(t.indexOf("iphone")>=0||t.indexOf("ipad")>=0)&&document.body.addEventListener("touchend",(function(t){var i=(new Date).getTime();n=n||i+1;var a=i-n;if(a<e&&a>0)return t.preventDefault(),!1;n=i}),!1)};var x=u;function S(){return x.use("com.zkty.module.device",[{name:"getPhoneType",default_args:{}},{name:"getSystemVersion",default_args:{}},{name:"getUDID",default_args:{}},{name:"getBatteryLevel",default_args:{}},{name:"getPreferredLanguage",default_args:{}},{name:"getScreenWidth",default_args:{}},{name:"getScreenHeight",default_args:{}},{name:"getSafeAreaTop",default_args:{}},{name:"getSafeAreaBottom",default_args:{}},{name:"getSafeAreaLeft",default_args:{}},{name:"getSafeAreaRight",default_args:{}},{name:"getStatusHeight",default_args:{}},{name:"getNavigationHeight",default_args:{}},{name:"getTabBarHeight",default_args:{}},{name:"devicePhoneCall",default_args:{}},{name:"deviceSendMessage",default_args:{}}])}t["a"]=S()},"3dcf":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".skeleton-class{margin-top:20px}",""]),e.exports=t},"4d4f":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".navigator-class{width:100%;background-color:orange;position:fixed;top:0;z-index:9999}.navWrapper{background-color:orange;color:#fff;font-weight:600;position:relative}.title-wrapper{position:absolute;display:flex;flex-direction:row;justify-content:space-between;bottom:10px;left:25px;right:25px}.content-item-left{text-align:left}.content-item-center{text-align:center}.content-item-right{text-align:right}",""]),e.exports=t},5361:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("HEADER",{attrs:{reviceNavTitle:e.navTitle},on:{clickLeftButton:e.handlerHeaderBack,clickRightButton:e.handlerHeaderRightBtn}}),n("div",{style:{marginTop:e.navigatorHeight+"px"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.skeletonShow,expression:"skeletonShow"}],staticStyle:{"margin-top":"30px"}},[n("van-skeleton",{attrs:{title:"",avatar:"",round:"",animate:"",row:3}})],1)])],1)},a=[],r=n("981c"),o=n("34be"),s={components:{HEADER:r["a"]},data:function(){return{navTitle:"骨架屏",skeletonShow:!0,navigatorHeight:""}},mounted:function(){var e=this;o["a"].getNavigationHeight({}).then((function(t){e.navigatorHeight=t.content})),setTimeout((function(){e.skeletonShow=!1}),5e4)},methods:{handlerHeaderBack:function(){this.$router.go(-1)},handlerHeaderRightBtn:function(){alert("点击的了右上角按钮")},handlerNextpage:function(){this.$router.push({path:"/navHeader"})}}},c=s,l=(n("92f1"),n("2877")),d=Object(l["a"])(c,i,a,!1,null,null,null);t["default"]=d.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("1d80"),a=n("5899"),r="["+a+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,n){var i=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var r,o;return a&&"function"==typeof(r=t.constructor)&&r!==n&&i(o=r.prototype)&&o!==n.prototype&&a(e,o),e}},"92f1":function(e,t,n){"use strict";n("bc49")},"981c":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigator-class"},[n("div",{ref:"navWrapper",staticClass:"navWrapper",style:{height:e.lineheight+"px"}},[n("div",{staticClass:"title-wrapper"},[n("div",{ref:"leftButton",staticClass:"content-item-left",style:{lineheight:e.lineheight+"px"},on:{click:e.leftButton}},[e._v(e._s(e.reviceLeftTitle))]),n("div",{ref:"canterButton",staticClass:"content-item-center",style:{lineheight:e.lineheight+"px"}},[e._v(e._s(e.reviceNavTitle))]),n("div",{ref:"rightButton",staticClass:"content-item-right",style:{lineheight:e.lineheight+"px"},on:{click:e.rightButton}},[e._v(e._s(e.reviceRightTitle))])])])])},a=[],r=(n("a9e3"),n("34be")),o=n("f0bf"),s={data:function(){return{lineheight:"",statusHeigt:""}},props:{reviceLeftTitle:{type:String,default:"back",require:!0},reviceNavTitle:{type:String,default:"title",require:!0},reviceRightTitle:{type:String,default:"right",require:!0}},mounted:function(){var e=this;if(o["a"].isHybrid())o["a"].platform.isPhone?r["a"].getNavigationHeight({}).then((function(t){e.lineheight=t.content,e.$refs.navWrapper.style.cssText="height: ".concat(t.content,"px;")})):o["a"].platform.isAndroid&&r["a"].getStatusHeight({}).then((function(t){r["a"].getNavigationHeight({}).then((function(n){var i=Number(n.content)+Number(t.content);e.lineheight=i,e.$refs.navWrapper.style.cssText="height: ".concat(i,"px;")}))}));else if(o["a"].platform.isPc){var t=64;this.lineheight=t,this.$refs.navWrapper.style.cssText="height: ".concat(t,"px;")}},methods:{leftButton:function(){this.$emit("clickLeftButton")},rightButton:function(){this.$emit("clickRightButton")}}},c=s,l=(n("2234"),n("2877")),d=Object(l["a"])(c,i,a,!1,null,null,null);t["a"]=d.exports},a9e3:function(e,t,n){"use strict";var i=n("83ab"),a=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),l=n("7156"),d=n("c04e"),u=n("d039"),f=n("7c73"),g=n("241c").f,h=n("06cf").f,_=n("9bf2").f,p=n("58a8").trim,v="Number",b=a[v],m=b.prototype,w=c(f(m))==v,y=function(e){var t,n,i,a,r,o,s,c,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=p(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+l}for(r=l.slice(2),o=r.length,s=0;s<o;s++)if(c=r.charCodeAt(s),c<48||c>a)return NaN;return parseInt(r,i)}return+l};if(r(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var x,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(w?u((function(){m.valueOf.call(n)})):c(n)!=v)?l(new b(y(t)),n,S):y(t)},N=i?g(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;N.length>k;k++)s(b,x=N[k])&&!s(S,x)&&_(S,x,h(b,x));S.prototype=m,m.constructor=S,o(a,v,S)}},bc49:function(e,t,n){var i=n("3dcf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("499e").default;a("384d5db4",i,!0,{sourceMap:!1,shadowMode:!1})},f307:function(e,t,n){var i=n("4d4f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("499e").default;a("e92bb9ec",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-ac425dea.bf612b9e.js.map