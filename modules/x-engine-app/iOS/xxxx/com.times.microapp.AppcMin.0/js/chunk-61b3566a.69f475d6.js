(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b3566a"],{"34be":function(e,t,n){"use strict";var i=n("91ec");function a(){return i["a"].use("com.zkty.module.device",[{name:"getPhoneType",default_args:{}},{name:"getSystemVersion",default_args:{}},{name:"getUDID",default_args:{}},{name:"getBatteryLevel",default_args:{}},{name:"getPreferredLanguage",default_args:{}},{name:"getScreenWidth",default_args:{}},{name:"getScreenHeight",default_args:{}},{name:"getSafeAreaTop",default_args:{}},{name:"getSafeAreaBottom",default_args:{}},{name:"getSafeAreaLeft",default_args:{}},{name:"getSafeAreaRight",default_args:{}},{name:"getStatusHeight",default_args:{}},{name:"getNavigationHeight",default_args:{}},{name:"getTabBarHeight",default_args:{}},{name:"devicePhoneCall",default_args:{}},{name:"deviceSendMessage",default_args:{}}])}t["a"]=a()},"82f3":function(e,t,n){"use strict";var i=n("9d4a"),a=n.n(i);a.a},"91ec":function(e,t,n){"use strict";var i={default:void 0,call:function(e,t,n){if("function"==typeof t&&(n=t,t={}),t={data:void 0===t?null:t},"function"==typeof n){var i="dscb"+window.dscb++;window[i]=n,t._dscbstub=i}t=JSON.stringify(t);var a="";return window._dsbridge?a=_dsbridge.call(e,t):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(a=prompt("_dsbridge="+e,t)),JSON.parse(a||"{}").data},unregister:function(e){delete window._dsaf._obs[e],delete window._dsaf[e],delete window._dsf._obs[e],delete window._dsf[e]},register:function(e,t,n){n=n?window._dsaf:window._dsf,window._dsInit||(window._dsInit=!0,setTimeout((function(){i.call("_dsb.dsinit")}),0)),"object"==typeof t?n._obs[e]=t:n[e]=t},registerAsyn:function(e,t){this.register(e,t,!0)},hasNativeMethod:function(e,t){return this.call("_dsb.hasNativeMethod",{name:e,type:t||"all"})},disableJavascriptDialogBlock:function(e){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==e})}};(function(){window._dsf||(window["_dsf"]={_obs:{}},window["_dsaf"]={_obs:{}},window["dscb"]=0,window["dsBridge"]=i,window["close"]=function(){i.call("_dsb.closePage")},window["_handleMessageFromNative"]=function(e){var t=JSON.parse(e.data),n={id:e.callbackId,complete:!0},a=this._dsf[e.method],o=this._dsaf[e.method],s=function(e,a){n.data=e.apply(a,t),i.call("_dsb.returnValue",n)},r=function(e,a){t.push((function(e,t){n.data=e,n.complete=!1!==t,i.call("_dsb.returnValue",n)})),e.apply(a,t)};if(a)s(a,this._dsf);else if(o)r(o,this._dsaf);else if(a=e.method.split("."),!(2>a.length)){e=a.pop();a=a.join("."),o=this._dsf._obs,o=o[a]||{};var d=o[e];d&&"function"==typeof d?s(d,o):(o=this._dsaf._obs,o=o[a]||{},(d=o[e])&&"function"==typeof d&&r(d,o))}},i.register("_hasJavascriptMethod",(function(e,t){return t=e.split("."),2>t.length?!(!_dsf[t]&&!_dsaf[t]):(e=t.pop(),t=t.join("."),(t=_dsf._obs[t]||_dsaf._obs[t])&&!!t[e])})))})();var a=i;const o=new Set([]),s={};function r(e){return e&&"[object Function]"==={}.toString.call(e)}function d(e){return null!==e&&("function"===typeof e||"object"===typeof e)}function l(e){return"[object String]"===Object.prototype.toString.call(e)}function c(){return window&&!0===window._dswk}let u={patch:s,platfrom:m(),hybrid:!0,isHybrid:c,bridge:a,use:h,broadcastOn:g,broadcastOff:f};function f(){u.bridge.unregister("com.zkty.module.engine.broadcast")}function g(e){u.bridge.register("com.zkty.module.engine.broadcast",t=>e(t))}let _=0;function h(e,t){if(o.has(e))throw e+',注册无效,模块已存在,xengine.use("'+e+'") 只允许调用一次;';o.add(e),console.log(e+",js 注册成功");let n=function(t,n){if(n.hasOwnProperty("__event__")){_++;let i=n["__event__"];if(!r(i))throw"__event__ 必须为函数";n["__event__"]=e+"."+t+".__event__"+_,u.bridge.register(n["__event__"],e=>i(e))}if(t.startsWith("sync"))return u.bridge.call(e+"."+t,n);{let i=new Promise((i,a)=>{const o="x-engine 0.1.0 将不再支持 promise,改用参数里的　__ret__做为异步返回值,以支持多次返回.或者直接调用函数同步返回";console.warn(o),u.bridge.call(e+"."+t,n,(function(e){if(i(e),n["__ret__"])return n["__ret__"](e)}))});return i}};return t.reduce((e,t,i)=>{if(d(t))e[t.name]=e=>n(t.name,{...t.default_args,...e});else{if(!l(t))throw"仅支持 string 与 {name:xxx, default_args:{...}}";e[t]=e=>n(t,e)}return e},{})}function m(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,i=/(?:Android)/.test(e),a=/(?:Firefox)/.test(e),o=(/(?:Chrome|CriOS)/.test(e),/(?:iPad|PlayBook)/.test(e)||i&&!/(?:Mobile)/.test(e)||a&&/(?:Tablet)/.test(e)),s=/(?:iPhone)/.test(e)&&!o,r=!s&&!i&&!n;return{isTablet:o,isPhone:s,isAndroid:i,isPc:r}}function v(e){if(judgeDeviceType.isIOS&&(e.addEventListener("focus",(function(){console.log("IOS 键盘弹起啦！")}),!1),e.addEventListener("blur",()=>{console.log("IOS 键盘收起啦！")})),judgeDeviceType.isAndroid){var t=document.documentElement.clientHeight||document.body.clientHeight;window.addEventListener("resize",(function(){var e=document.documentElement.clientHeight||document.body.clientHeight;t<e?console.log("Android 键盘收起啦！"):console.log("Android 键盘弹起啦！"),t=e}),!1)}}Object.defineProperty(u,"bridge",{get(){return a},set:function(){throw"dsbridge不能被修改"}});for(var b=document.querySelectorAll(".input"),p=0;p<b.length;p++)v(b[p]);s.disableDoubleTapScroll=function(e){e=e||500,console.log("禁用双击滑动,两次点击冷却时间为"+e+" ms");var t=navigator.userAgent.toLowerCase(),n=null;(t.indexOf("iphone")>=0||t.indexOf("ipad")>=0)&&document.body.addEventListener("touchend",(function(t){var i=(new Date).getTime();n=n||i+1;var a=i-n;if(a<e&&a>0)return t.preventDefault(),!1;n=i}),!1)};t["a"]=u},"9d4a":function(e,t,n){},a946:function(e,t,n){"use strict";var i=n("91ec");function a(){return i["a"].use("com.zkty.module.nav",[{name:"setNavTitle",default_args:{title:"title",titleColor:"#000000",titleSize:16}},{name:"setNavLeftBtn",default_args:{title:"",titleColor:"#000000",titleSize:16,icon:"",iconSize:["20","20"]}},{name:"setNavRightBtn",default_args:{title:"right",titleColor:"#000000",titleSize:16,icon:"",iconSize:["20","20"]}},{name:"setNavRightMenuBtn",default_args:{title:"menu",titleColor:"#000000",titleSize:16,icon:"",iconSize:["20","20"],popWidth:"200",showMenuImg:"false",popList:[{icon:"",iconSize:"20",title:"1"},{icon:"",iconSize:"20",title:"2"},{icon:"",iconSize:"20",title:"3"}]}},{name:"setNavRightMoreBtn",default_args:{btns:[{title:"right1",titleColor:"#000000",titleSize:16,iconSize:["20","20"]},{title:"",icon:"/assets/search.png",titleColor:"#000000",titleSize:16,iconSize:["20","20"]}]}},{name:"navigatorPush",default_args:{url:"",hideNavbar:!1}},{name:"navigatorBack",default_args:{url:"",hideNavbar:!1}},{name:"setNavSearchBar",default_args:{cornerRadius:5,backgroundColor:"#FF0000",iconSearch:"",iconSearchSize:[20,20],iconClear:"",iconClearSize:[20,20],textColor:"#000000",fontSize:16,placeHolder:"默认文字",placeHolderFontSize:16,isInput:!0,becomeFirstResponder:!1}},{name:"setSearchBarHidden",default_args:{}},{name:"setNavBarHidden",default_args:{}},{name:"removeHistoryPage",default_args:{}}])}t["a"]=a()},f50f:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"property_notice_detail"},[n("div",{staticClass:"title"},[n("div",{ref:"titleone"}),n("van-nav-bar",{staticClass:"nav",attrs:{"left-text":"列表","left-arrow":""},on:{"click-left":e.onClickLeft}})],1),n("div",{ref:"titletwo"}),n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(e){return n("van-cell",{key:e,attrs:{title:e}})})),1)],1)},a=[],o=n("a946"),s=n("34be"),r={name:"paymentRecords",data:function(){return{list:[],loading:!1,finished:!1,padding:{height:""}}},created:function(){var e=this;s["a"].getStatusHeight({__event__:function(e){console.log("----",e),console.log(e.content)}}).then((function(t){console.log("5555",t),console.log(t.content),e.$refs.titleone.style.height=t.content+"px",e.$refs.titletwo.style.height=t.content+"px"}))},activated:function(){o["a"].setSearchBarHidden({isHidden:!0,isAnimation:!0})},mounted:function(){},methods:{onClickLeft:function(){o["a"].navigatorPush({url:"/",hideNavbar:!0})},onLoad:function(){var e=this;setTimeout((function(){for(var t=0;t<10;t++)e.list.push(e.list.length+1);e.loading=!1,e.list.length>=40&&(e.finished=!0)}),1e3)}}},d=r,l=(n("82f3"),n("2877")),c=Object(l["a"])(d,i,a,!1,null,"723a0929",null);t["default"]=c.exports}}]);