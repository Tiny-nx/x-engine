(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c11eb94"],{"1ec6":function(t,i){var n={default:this,call:function(t,i,n){if("function"==typeof i&&(n=i,i={}),i={data:void 0===i?null:i},"function"==typeof n){var o="dscb"+window.dscb++;window[o]=n,i._dscbstub=o}i=JSON.stringify(i);var s="";return window._dsbridge?s=_dsbridge.call(t,i):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(s=prompt("_dsbridge="+t,i)),JSON.parse(s||"{}").data},register:function(t,i,o){o=o?window._dsaf:window._dsf,window._dsInit||(window._dsInit=!0,setTimeout((function(){n.call("_dsb.dsinit")}),0)),"object"==typeof i?o._obs[t]=i:o[t]=i},registerAsyn:function(t,i){this.register(t,i,!0)},hasNativeMethod:function(t,i){return this.call("_dsb.hasNativeMethod",{name:t,type:i||"all"})},disableJavascriptDialogBlock:function(t){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==t})}};(function(){window._dsf||(window["_dsf"]={_obs:{}},window["_dsaf"]={_obs:{}},window["dscb"]=0,window["dsBridge"]=n,window["close"]=function(){n.call("_dsb.closePage")},window["_handleMessageFromNative"]=function(t){var i=JSON.parse(t.data),o={id:t.callbackId,complete:!0},s=this._dsf[t.method],a=this._dsaf[t.method],e=function(t,s){o.data=t.apply(s,i),n.call("_dsb.returnValue",o)},d=function(t,s){i.push((function(t,i){o.data=t,o.complete=!1!==i,n.call("_dsb.returnValue",o)})),t.apply(s,i)};if(s)e(s,this._dsf);else if(a)d(a,this._dsaf);else if(s=t.method.split("."),!(2>s.length)){t=s.pop();s=s.join("."),a=this._dsf._obs,a=a[s]||{};var c=a[t];c&&"function"==typeof c?e(c,a):(a=this._dsaf._obs,a=a[s]||{},(c=a[t])&&"function"==typeof c&&d(c,a))}},n.register("_hasJavascriptMethod",(function(t,i){return i=t.split("."),2>i.length?!(!_dsf[i]&&!_dsaf[i]):(t=i.pop(),i=i.join("."),(i=_dsf._obs[i]||_dsaf._obs[i])&&!!i[t])})))})()},2048:function(t,i){window.xengine=window.xengine||{};const n={toastConfig:{title:"",duration:2e3},showToast:function(t){const i={...this.toastConfig,...t};dsBridge.call("_ui.showToast",JSON.stringify(i),t=>{})},showSuccessToast:function(t){const i={...this.toastConfig,...t};dsBridge.call("_ui.showSuccessToast",JSON.stringify(i),t=>{})},showFailToast:function(t){const i={...this.toastConfig,...t};dsBridge.call("_ui.showFailToast",JSON.stringify(i),t=>{})},hiddenToast:function(t){dsBridge.call("_ui.hiddenToast","",t=>{})},showLoading(){dsBridge.call("_ui.showLoading",null,t=>{})},hideLoading(){dsBridge.call("_ui.hiddenLoading",null,t=>{})},modalConfig:{title:""},showModal:function(t){const i={...this.modalConfig,...t};dsBridge.call("_ui.showModal",JSON.stringify(i),t=>{})},alertConfig:{itemList:["测试1","测试2","测试3","测试4","测试5"]},showActionSheet:function(t){const i={...this.alertConfig,...t};dsBridge.call("_ui.showActionSheet",JSON.stringify(i),t=>{})}};t.exports=n},4739:function(t,i,n){n("1ec6");const o=n("dcaa"),s=n("2048"),a=n("5823"),e={};e.network=o,e.nav=a,e.ui=s,t.exports=e},5823:function(t,i){window.xengine=window.xengine||{};const n={navigatorPush(t){const i={...t};dsBridge.call("com.zkty.module.nav.navigatorPush",i,t=>{alert(t)})},navigatorBack(t){const i={...t};dsBridge.call("com.zkty.module.nav.navigatorBack",i,t=>{alert(t)})}};t.exports=n},"69e5":function(t,i,n){const o=n("4739");t.exports=o},"77d6":function(t,i,n){"use strict";n.r(i);var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[t._m(0),t._m(1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{type:"primary",round:"",block:""},on:{click:t.back}},[t._v("上一页")])],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{type:"primary",round:"",block:""},on:{click:t.backToB}},[t._v("返回testB页面")])],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{type:"primary",round:"",block:""},on:{click:t.backRoot}},[t._v("返回原生页面")])],1),n("div",{staticStyle:{margin:"16px"}},[t._v("原生跳转携带参数为: "+t._s(this.params))]),t._m(2),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{type:"primary",round:"",block:""},on:{click:t.h5back}},[t._v("上一页")])],1),n("div",{staticStyle:{margin:"16px"}},[t._v("携带参数为: "+t._s(this.params))])])},s=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticStyle:{margin:"16px"}},[n("div",[t._v("current page: testE")])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticStyle:{margin:"16px"}},[n("div",[t._v("原生跳转")])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticStyle:{margin:"16px"}},[n("div",[t._v("h5内部跳转")])])}],a=n("69e5"),e=n.n(a),d={name:"testE",data:function(){return{params:""}},mounted:function(){this.params=this.$route.query.qid},methods:{back:function(){e.a.nav.navigatorBack()},backToB:function(){e.a.nav.navigatorBack({path:"/testB"})},backRoot:function(){e.a.nav.navigatorBack({path:"0"})},h5back:function(){this.$router.go(-1)}}},c=d,r=n("2877"),l=Object(r["a"])(c,o,s,!1,null,null,null);i["default"]=l.exports},dcaa:function(t,i){window.xengine=window.xengine||{};const n={dsBridge:window.dsBridge,requestConfig:{url:"http://127.0.0.1:8000/data0.json",method:"GET"},request:function(t){return new Promise((i,n)=>{try{const n={...this.requestConfig,...t};dsBridge.call("_network.requestNetwork",JSON.stringify(n),(function(t){i(t)}))}catch(o){n(o)}})}};t.exports=n}}]);
//# sourceMappingURL=chunk-8c11eb94.a4340a60.js.map