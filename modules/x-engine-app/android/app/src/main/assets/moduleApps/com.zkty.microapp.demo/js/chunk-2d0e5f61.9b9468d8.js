(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5f61"],{"975b":function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",[i("div",[i("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.refreshing,callback:function(e){n.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:n.finished,"finished-text":"没有更多了"},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},n._l(n.list,(function(n){return i("van-cell",{key:n,attrs:{title:n}})})),1)],1)],1)])},s=[],o={data:function(){return{navTitle:"刷新数据",list:[],loading:!1,finished:!1,refreshing:!1,navigatorHeight:""}},methods:{onLoad:function(){var n=this;setTimeout((function(){n.refreshing&&(n.list=[],n.refreshing=!1);for(var e=0;e<10;e++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=40&&(n.finished=!0)}),1e3)},onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()},handlerHeaderBack:function(){this.$router.go(-1)}}},r=o,l=i("2877"),a=Object(l["a"])(r,t,s,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0e5f61.9b9468d8.js.map