(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b514bb5"],{"045f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATJJREFUWEftlDFLw0AYht8vR5xSwh2J/gC7OAk6dumiU3+BooN/rIjg4NxJF5eOiqOD/gBN+EIwk+FyclChCG0vidDlbguX93sfni+EsOVDW+6HB/AGvAFvwBtwMqCUegFw2PG3/crMB6uyTgBSymsiuuwIMGXmq14AAEKl1AzAaUuIe2aeAKj7AiBN00hr/Qjg2BHiSQgxzrKsWve+0wp+B0RRtBuG4ZyIhuuGGmPe6roeVVX1uQm2FYAdFsfxvhBiDmBvxfAPrfWoLMv3TeX2vjWADSVJctQ0jV3H4E/JVxAE4zzPn13KOwPYoFLqxBgzI6Id+2yM+SaiCTM/uJb3ArBhKeUZEd0sAC6KorhtU94bYAFxTkQ1M9+1Lf8XgC6ly5lOH2HfUg/gDXgD3sCygR89n1AhkyAPzwAAAABJRU5ErkJggg=="},2699:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAApVJREFUOE/tlEFokmEYx31UXN9gFREetEjGSHYYw3aozUMTNQMV3KUOzlE2mYjBSBCq5cFWwcBAElE0a3Me6jJBPshUtg7OOiwRD8MxhlF6kIhqsK+J+sQ3muimrkPH3tvD8///eN7/+/IA44iDiASDwTj3R/YJAKhOFmjXRMRLPp/vQSqVkm5ubnJoXV9fX3l4eDhhMBgeAsD7Vt6WwPX19dsmk+np8vIym8fjoUgk2vOm02lGsVgEiURScbvdd/r7+58dhB4CUhQ1KpfLE5lMBux2+0eTyfSYw+F8oI3lcvmi2+2+Z7PZLgwODmIsFpMSBLHSCD0EdLlcb8xms8Lj8SSnpqakALDbaEDELq/XmzAajWKXyxU1m81XOwKnp6d/LCwsHC+VStfZbPbrVjlVKpVrXC73lU6n++l0Ok90BBqNxt1oNMrZ2tqSA0C8FRARZb29vTGFQlH2eDxd/4HNKf3TDBGRo9frd5LJJCuXy40CwLs2j3JZKBSuiMXiaiAQ6AaA8r6u6R8WCoVbQ0NDPplMVgkGgzwA+NoGeFqn0xXj8Th7bW3NwOfznx8CImK31WrdcDgc/Egk8lKpVN7stARIknyhVqtvWCyWwtzc3HkA2KH19Qmz2ez9kZGRWbVaTYVCIVrwpRMQEc9otdqNSCRCrK6uzgwMDDyqAxHx1OTkZD4QCPQsLi7mWSzW26PWGt2vVqtXxsfHBXq9ftvv9wsA4NvehIh4dmxsLB8Oh5l/Azqo0Wg0taWlJRr4uX7lfD6vTSQSylqt1gQlCOJkI4CiqO+NNZPJrEmlUlIgEISaMmzzmuz5+fltkiSP0X2VSvVrYmKiBwAq7W7SdmPvG9Lp9F273T5L1zabbUYkEj3pFMtvj9ZIJG4FXigAAAAASUVORK5CYII="},"2f62":function(t,e,i){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function s(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:s});else{var i=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[s].concat(t.init):s,i.call(this,t)}}function s(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}i.d(e,"a",(function(){return N}));var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},o=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function n(t,e){Object.keys(t).forEach((function(i){return e(t[i],i)}))}function c(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function u(t,e){return function(){return t(e)}}var p=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=("function"===typeof i?i():i)||{}},h={namespaced:{configurable:!0}};h.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(t,e){this._children[t]=e},p.prototype.removeChild=function(t){delete this._children[t]},p.prototype.getChild=function(t){return this._children[t]},p.prototype.hasChild=function(t){return t in this._children},p.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},p.prototype.forEachChild=function(t){n(this._children,t)},p.prototype.forEachGetter=function(t){this._rawModule.getters&&n(this._rawModule.getters,t)},p.prototype.forEachAction=function(t){this._rawModule.actions&&n(this._rawModule.actions,t)},p.prototype.forEachMutation=function(t){this._rawModule.mutations&&n(this._rawModule.mutations,t)},Object.defineProperties(p.prototype,h);var f=function(t){this.register([],t,!1)};function d(t,e,i){if(e.update(i),i.modules)for(var s in i.modules){if(!e.getChild(s))return void 0;d(t.concat(s),e.getChild(s),i.modules[s])}}f.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,i){return e=e.getChild(i),t+(e.namespaced?i+"/":"")}),"")},f.prototype.update=function(t){d([],this.root,t)},f.prototype.register=function(t,e,i){var s=this;void 0===i&&(i=!0);var r=new p(e,i);if(0===t.length)this.root=r;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],r)}e.modules&&n(e.modules,(function(e,r){s.register(t.concat(r),e,i)}))},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1],s=e.getChild(i);s&&s.runtime&&e.removeChild(i)},f.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1];return!!e&&e.hasChild(i)};var m;var g=function(t){var e=this;void 0===t&&(t={}),!m&&"undefined"!==typeof window&&window.Vue&&E(window.Vue);var i=t.plugins;void 0===i&&(i=[]);var s=t.strict;void 0===s&&(s=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new m,this._makeLocalGettersCache=Object.create(null);var r=this,o=this,n=o.dispatch,c=o.commit;this.dispatch=function(t,e){return n.call(r,t,e)},this.commit=function(t,e,i){return c.call(r,t,e,i)},this.strict=s;var l=this._modules.root.state;C(this,l,[],this._modules.root),_(this,l),i.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:m.config.devtools;u&&a(this)},v={state:{configurable:!0}};function y(t,e,i){return e.indexOf(t)<0&&(i&&i.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function b(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var i=t.state;C(t,i,[],t._modules.root,!0),_(t,i,e)}function _(t,e,i){var s=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,o={};n(r,(function(e,i){o[i]=u(e,t),Object.defineProperty(t.getters,i,{get:function(){return t._vm[i]},enumerable:!0})}));var a=m.config.silent;m.config.silent=!0,t._vm=new m({data:{$$state:e},computed:o}),m.config.silent=a,t.strict&&O(t),s&&(i&&t._withCommit((function(){s._data.$$state=null})),m.nextTick((function(){return s.$destroy()})))}function C(t,e,i,s,r){var o=!i.length,a=t._modules.getNamespace(i);if(s.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=s),!o&&!r){var n=I(e,i.slice(0,-1)),c=i[i.length-1];t._withCommit((function(){m.set(n,c,s.state)}))}var l=s.context=A(t,a,i);s.forEachMutation((function(e,i){var s=a+i;S(t,s,e,l)})),s.forEachAction((function(e,i){var s=e.root?i:a+i,r=e.handler||e;k(t,s,r,l)})),s.forEachGetter((function(e,i){var s=a+i;x(t,s,e,l)})),s.forEachChild((function(s,o){C(t,e,i.concat(o),s,r)}))}function A(t,e,i){var s=""===e,r={dispatch:s?t.dispatch:function(i,s,r){var o=$(i,s,r),a=o.payload,n=o.options,c=o.type;return n&&n.root||(c=e+c),t.dispatch(c,a)},commit:s?t.commit:function(i,s,r){var o=$(i,s,r),a=o.payload,n=o.options,c=o.type;n&&n.root||(c=e+c),t.commit(c,a,n)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return I(t.state,i)}}}),r}function w(t,e){if(!t._makeLocalGettersCache[e]){var i={},s=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,s)===e){var o=r.slice(s);Object.defineProperty(i,o,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=i}return t._makeLocalGettersCache[e]}function S(t,e,i,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){i.call(t,s.state,e)}))}function k(t,e,i,s){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=i.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},e);return l(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function x(t,e,i,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return i(s.state,s.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function I(t,e){return e.reduce((function(t,e){return t[e]}),t)}function $(t,e,i){return c(t)&&t.type&&(i=e,e=t,t=t.type),{type:t,payload:e,options:i}}function E(t){m&&t===m||(m=t,s(m))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},g.prototype.commit=function(t,e,i){var s=this,r=$(t,e,i),o=r.type,a=r.payload,n=(r.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(n,s.state)})))},g.prototype.dispatch=function(t,e){var i=this,s=$(t,e),r=s.type,o=s.payload,a={type:r,payload:o},n=this._actions[r];if(n){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,i.state)}))}catch(l){0}var c=n.length>1?Promise.all(n.map((function(t){return t(o)}))):n[0](o);return new Promise((function(t,e){c.then((function(e){try{i._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,i.state)}))}catch(l){0}t(e)}),(function(t){try{i._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,i.state,t)}))}catch(l){0}e(t)}))}))}},g.prototype.subscribe=function(t,e){return y(t,this._subscribers,e)},g.prototype.subscribeAction=function(t,e){var i="function"===typeof t?{before:t}:t;return y(i,this._actionSubscribers,e)},g.prototype.watch=function(t,e,i){var s=this;return this._watcherVM.$watch((function(){return t(s.state,s.getters)}),e,i)},g.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},g.prototype.registerModule=function(t,e,i){void 0===i&&(i={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),i.preserveState),_(this,this.state)},g.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var i=I(e.state,t.slice(0,-1));m.delete(i,t[t.length-1])})),b(this)},g.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},g.prototype.hotUpdate=function(t){this._modules.update(t),b(this,!0)},g.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(g.prototype,v);var N=M((function(t,e){var i={};return z(e).forEach((function(e){var s=e.key,r=e.val;i[s]=function(){var e=this.$store.state,i=this.$store.getters;if(t){var s=T(this.$store,"mapState",t);if(!s)return;e=s.context.state,i=s.context.getters}return"function"===typeof r?r.call(this,e,i):e[r]},i[s].vuex=!0})),i}));M((function(t,e){var i={};return z(e).forEach((function(e){var s=e.key,r=e.val;i[s]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var s=this.$store.commit;if(t){var o=T(this.$store,"mapMutations",t);if(!o)return;s=o.context.commit}return"function"===typeof r?r.apply(this,[s].concat(e)):s.apply(this.$store,[r].concat(e))}})),i})),M((function(t,e){var i={};return z(e).forEach((function(e){var s=e.key,r=e.val;r=t+r,i[s]=function(){if(!t||T(this.$store,"mapGetters",t))return this.$store.getters[r]},i[s].vuex=!0})),i})),M((function(t,e){var i={};return z(e).forEach((function(e){var s=e.key,r=e.val;i[s]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var s=this.$store.dispatch;if(t){var o=T(this.$store,"mapActions",t);if(!o)return;s=o.context.dispatch}return"function"===typeof r?r.apply(this,[s].concat(e)):s.apply(this.$store,[r].concat(e))}})),i}));function z(t){return R(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function R(t){return Array.isArray(t)||c(t)}function M(t){return function(e,i){return"string"!==typeof e?(i=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,i)}}function T(t,e,i){var s=t._modulesNamespaceMap[i];return s}}).call(this,i("c8ba"))},"5ad5":function(t,e,i){"use strict";i("8bc3")},"5ba0":function(t,e,i){},"76a7":function(t,e,i){"use strict";i("7b40")},"7b40":function(t,e,i){},"8bc3":function(t,e,i){},b96c:function(t,e,i){"use strict";i("5ba0")},f14e:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("GmHeader",{attrs:{hideItem:["center"],slotsShow:["right"],leftText:"社区","background-color":"#fff"},scopedSlots:t._u([{key:"dynamicsRight",fn:function(){return[s("span",{staticClass:"header-right",staticStyle:{"pointer-events":"auto"}},[s("img",{staticClass:"bell",attrs:{src:i("2699"),alt:""},on:{click:t.message}}),t.num>0?s("van-badge",{staticClass:"number",attrs:{content:t.num+t.number,max:"99"}}):t._e()],1)]},proxy:!0}])}),s("span"),s("div",{staticClass:"content"},[s("div",{staticClass:"homepage"},[0!=t.list.length?s("ul",t._l(t.tabs,(function(e,i){return s("li",{key:i,attrs:{model:t.active},on:{click:function(e){return t.tab(i)}}},[s("span",{staticClass:"txt",class:{border:i==t.active}},[s("span",{staticClass:"txt_item"},[t._v(t._s(e.title))])])])})),0):s("ul",[s("li",{attrs:{model:t.active}},[s("span",{staticClass:"txt border"},[s("span",{staticClass:"txt_item"},[t._v(t._s(t.tabes))])])])]),0==t.active?s("Plaza"):t._e(),1==t.active?s("Neighbourhood"):t._e()],1)])],1)},r=[],o=i("1da1"),a=(i("96cf"),i("4de4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"content_center"},[s("van-nav-bar",{attrs:{"left-arrow":"",border:!1},scopedSlots:t._u([{key:"left",fn:function(){return[s("span",{staticStyle:{"font-size":"20px","font-weight":"bold","font-family":"MFJianHei-Regular, MFJianHei"}},[t._v(" 热门话题和活动 ")])]},proxy:!0},{key:"right",fn:function(){return[s("span",{staticClass:"contentTxt",staticStyle:{color:"#999999"},on:{click:t.lookAllFun}},[t._v("查看全部")]),s("van-icon",{attrs:{name:"arrow",size:"16",color:"#999999"}})]},proxy:!0}])}),s("van-grid",{attrs:{border:!1}},[s("div",{staticStyle:{"overflow-x":"scroll",display:"flex","flex-wrap":"nowrap"}},t._l(t.listData,(function(e,r){return s("van-grid-item",{key:r,on:{click:function(i){return t.topicFun(e,r)}}},[s("div",{staticClass:"image"},[s("img",{staticStyle:{width:"100%",height:"111px","border-top-left-radius":"4px","border-top-right-radius":"4px"},attrs:{src:e.pictureUrl}}),"CLOSED"!==e.activityStatus&&"OVER"!==e.activityStatus&&""!==e.activityStatus?s("div",{staticClass:"activity"},[t._v(" 活动 ")]):t._e()]),s("p",[s("img",{staticClass:"p_image",attrs:{src:i("f602"),alt:""}}),t._v(" "+t._s(t._f("ellipsis")(e.topicName))+" ")])])})),1),0===t.listData.length?s("div",{staticStyle:{"text-align":"center",width:"100%","font-size":"18px"}},[t._v("没有话题")]):t._e()]),s("div",{staticClass:"popular_content"},[s("p",[t._v("热门内容")]),s("listPagination",{attrs:{"data-list":t.topicsList,formatAjaxData:t.cart,isRefresh:t.isRefresh,slotsShow:["finished","error"]},on:{"update:dataList":function(e){t.topicsList=e},"update:data-list":function(e){t.topicsList=e},"update:isRefresh":function(e){t.isRefresh=e},"update:is-refresh":function(e){t.isRefresh=e}},scopedSlots:t._u([{key:"finished",fn:function(){return[s("div",{staticClass:"reminder"},[t.topicsList.length?s("div",[t._v("没有更多了")]):s("div",{staticClass:"error-body"},[s("div",[s("img",{staticClass:"img-login",attrs:{src:i("e3bb"),alt:""}})]),s("div",{staticClass:"error-text"},[t._v("暂无帖子")])])])]},proxy:!0},{key:"error",fn:function(){return[s("div",[t._v("请求失败，点击重新加载")])]},proxy:!0}])},t._l(t.topicsList,(function(e,r){return s("div",{key:r,staticClass:"popular_content_item",on:{click:function(i){return t.detail(e)}}},[s("ul",{staticStyle:{border:"0"}},[s("li",[s("van-image",{staticClass:"photo",attrs:{round:"",src:e.memberPhotoUrl}})],1),s("li",{staticStyle:{"line-height":"0px"}},[s("span",{staticClass:"username"},[t._v(t._s(e.userNickname))]),"1"===e.memberLevel?s("img",{staticClass:"member",staticStyle:{width:"60px",height:"20px"},attrs:{src:i("932a"),alt:""}}):"2"===e.memberLevel?s("img",{staticClass:"member",staticStyle:{width:"60px",height:"20px"},attrs:{src:i("17d6"),alt:""}}):"3"===e.memberLevel?s("img",{staticClass:"member",staticStyle:{width:"60px",height:"20px"},attrs:{src:i("9f66"),alt:""}}):t._e(),s("br"),s("span",{staticClass:"time"},[t._v(t._s(e.crtTime))])]),s("li")]),e.imgArr.length>1?s("div",{staticClass:"else_image"},[s("van-grid",{attrs:{"column-num":3,border:!1}},t._l(e.imgArr,(function(t,e){return s("van-grid-item",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),1)],1):s("van-image",{staticClass:"content_image",staticStyle:{height:"262px"},attrs:{src:e.pictureUrl}}),s("div",{staticClass:"center"},[s("p",{staticClass:"contenTxt"},[s("img",{staticClass:"p_image",attrs:{src:i("f602"),alt:""}}),t._v(" "+t._s(e.topicName)+" ")])]),s("div",{staticClass:"text_content"},[t._v(" "+t._s(e.mainBody)+" ")]),s("div",{staticClass:"content_bottom"},[s("ul",{staticClass:"bottom"},[s("li",[s("img",{staticClass:"location",staticStyle:{width:"16px",height:"18px"},attrs:{src:i("deb5")}}),s("span",{staticClass:"title",on:{click:function(i){return t.select(e)}}},[t._v(t._s(e.mallName))])]),s("li",[1===e.likeFlag?s("van-icon",{attrs:{name:"like-o",size:"18"},on:{click:function(i){return i.stopPropagation(),t.likeing(e,r)}}}):t._e(),0===e.likeFlag?s("van-icon",{attrs:{name:"like",size:"18",color:"red"},on:{click:function(i){return i.stopPropagation(),t.giveLike(e,r)}}}):t._e(),s("span",{staticClass:"title"},[t._v(t._s(e.likeNum))])],1),s("li",[s("van-icon",{attrs:{name:"chat-o",size:"20"},on:{click:function(i){return t.discuss(e)}}}),s("span",{staticClass:"title"},[t._v(t._s(e.commentNum))])],1)])])],1)})),0)],1)],1)])}),n=[],c=i("2909"),l=(i("fb6a"),i("d3b7"),i("d81d"),i("ac1f"),i("1276"),i("c975"),i("4e82"),i("99af"),{filters:{ellipsis:function(t){return t?t.length>6?t.slice(0,6)+"...":t:""}},data:function(){return{listData:[],pageNumber:1,pageSize:5,total:0,like:[],topicParams:{},paramsObj:{},isRefresh:!1,reviewsImg:[],environment:this.$utils.isMiniprogram(),signUpBtnShow:!1,topicsList:[],routerParams:{},forbidClick:!1,noList:[]}},created:function(){this.toast(),this.listIofo(),this.visibilityEve()},mounted:function(){},methods:{visibilityEve:function(){var t=this;this.$utils.visibilityEve((function(){"/community"===t.$route.path&&(t.cart({page:1}),t.listIofo())}))},toast:function(){this.$toast.loading({duration:0,type:"loading",message:"加载中...",forbidClick:!0})},cart:function(t){var e=this;return new Promise((function(i,s){var r=e;1===t.page&&(e.topicsList=[]),r.$api.getViewPost({mallCode:e.$engine.api("com.zkty.jsi.globalstorage","get","mallCode"),pageNumber:t.page,pageSize:r.pageSize}).then((function(t){var o=t.data;if(o){var a,n=0;n=~~(o.total/r.pageSize),o.total%r.pageSize>0&&++n;var l={pageCount:n,list:[]};o.records&&(l.list=JSON.parse(JSON.stringify(o.records)),l.list.map((function(t){return t.imgArr=t.pictureUrl?t.pictureUrl.split(","):[],t.likeColor=0===t.likeFlag,t.memberPhotoUrl&&-1!==t.memberPhotoUrl.indexOf("https")&&(t.memberPhotoUrl="http:"+t.memberPhotoUrl.split(":")[1]),t}))),(a=e.topicsList).push.apply(a,Object(c["a"])(l.list)),e.topicsList.sort((function(t,e){return e.weightCoefficient-t.weightCoefficient})),i(l)}else s()})).catch((function(t){console.error(t),s(t)}))}))},listIofo:function(){var t=this;this.toast();var e={pageNumber:this.pageNumber,pageSize:this.pageSize,mallCode:this.$engine.api("com.zkty.jsi.globalstorage","get","mallCode"),type:"COMMONTOPIC"};this.$api.getView(e).then((function(e){t.listData=e.data.records,t.$toast.clear()}));var i={pageNumber:this.pageNumber,pageSize:this.pageSize,type:"COMMONTOPIC"};this.toast(),this.$api.getView(i).then((function(e){t.noList=e.data.records.filter((function(t){return""===t.mallCode||void 0===t.mallCode})),t.$toast.clear()})),this.listData=this.listData.concat(this.noList)},giveLike:function(t,e){var i=this,s={postUserId:t.crtUserId,communityId:t.id,userId:this.$utils.getUserId(),type:"like",delFlag:1};this.$api.like(s).then((function(s){0===s.code&&s.data.success&&(t.likeFlag=1,t.likeNum--,i.topicsList[e]=t)}))},likeing:function(t,e){var i=this,s={postUserId:t.crtUserId,communityId:t.id,userId:this.$utils.getUserId(),type:"like",delFlag:0};this.$api.like(s).then((function(s){0===s.code&&s.data.success&&(t.likeFlag=0,t.likeNum++,i.topicsList[e]=t)}))},discuss:function(t){this.$router.push({path:"/ordinaryPost",query:{crtUserId:t.crtUserId,id:t.id}})},select:function(t){this.currentData=t},topicFun:function(t,e){if(t.activityId)return this.$utils.isMiniprogram()?void window.wx.miniProgram.navigateTo({url:"/pages/forum/signUp/signUp?webviewUrl="+encodeURIComponent("/activeTopics?activityId="+t.activityId+"&id="+t.id)}):void this.$router.push({path:"/activeTopics",query:{activityId:t.activityId,id:t.id}});this.$utils.isMiniprogram()?window.wx.miniProgram.navigateTo({url:"/pages/forum/normalTopic/normalTopic?webviewUrl="+encodeURIComponent("/topic?id="+t.id)}):this.$router.push({path:"/topic",query:{id:t.id}})},detail:function(t){this.$router.push({path:"/ordinaryPost",query:{crtUserId:t.crtUserId,id:t.id}})},lookAllFun:function(){this.$utils.isMiniprogram()?window.wx.miniProgram.navigateTo({url:"/pages/forum/allTopics/allTopics?webviewUrl="+encodeURIComponent("/alltopics")}):this.$router.push({path:"/alltopics",query:{type:"COMMONTOPIC"}})}}}),u=l,p=(i("5ad5"),i("2877")),h=Object(p["a"])(u,a,n,!1,null,"ec8a775c",null),f=h.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"content_center"},[s("van-nav-bar",{attrs:{"left-arrow":"",border:!1},scopedSlots:t._u([{key:"left",fn:function(){return[s("div",{staticClass:"arrows",on:{click:function(e){return t.$router.push({path:"/select"})}}},[s("span",{staticStyle:{"font-size":"18px","font-weight":"bold"}},[t._v(" "+t._s(t.title)+" ")]),s("img",{staticClass:"location",attrs:{src:i("045f"),alt:""}})])]},proxy:!0},{key:"right",fn:function(){return[s("span",{staticClass:"contentTxt",staticStyle:{color:"#999999"},on:{click:t.all}},[t._v("查看全部")]),s("van-icon",{attrs:{name:"arrow",size:"16",color:"#999999"}})]},proxy:!0}])}),s("van-grid",{staticStyle:{"overflow-x":"scroll",display:"flex","lex-direction":"column","justify-content":"space-between","flex-wrap":"nowrap"},attrs:{border:!1}},[t._l(t.topicIofo,(function(e,r){return s("van-grid-item",{key:r,on:{click:function(e){return t.topicFun(r)}}},[s("div",{staticClass:"image"},[s("img",{staticStyle:{"border-top-left-radius":"4px","border-top-right-radius":"4px"},attrs:{src:e.pictureUrl,alt:""}}),"CLOSED"!==e.activityStatus&&"OVER"!==e.activityStatus&&""!==e.activityStatus?s("div",{staticClass:"activity"},[t._v(" 活动 ")]):t._e()]),s("p",[s("img",{staticClass:"p_image",attrs:{src:i("f602"),alt:""}}),t._v(" "+t._s(t._f("ellipsis")(e.mainBody))+" ")])])})),0===t.topicIofo.length?s("div",{staticStyle:{"text-align":"center",width:"100%","font-size":"18px"}},[t._v("没有话题")]):t._e()],2),s("listPagination",{attrs:{"data-list":t.topicTypeIofo,formatAjaxData:t.topic,isRefresh:t.isRefresh,slotsShow:["finished","error"]},on:{"update:dataList":function(e){t.topicTypeIofo=e},"update:data-list":function(e){t.topicTypeIofo=e},"update:isRefresh":function(e){t.isRefresh=e},"update:is-refresh":function(e){t.isRefresh=e}},scopedSlots:t._u([{key:"finished",fn:function(){return[s("div",{staticClass:"reminder"},[t.topicTypeIofo.length?s("div",[t._v("没有更多了")]):s("div",{staticClass:"error-body"},[s("div",[s("img",{staticClass:"img-login",attrs:{src:i("e3bb"),alt:""}})]),s("div",{staticClass:"error-text"},[t._v("暂无帖子")])])])]},proxy:!0},{key:"error",fn:function(){return[s("div",[t._v("请求失败，点击重新加载")])]},proxy:!0}])},[s("div",{staticClass:"popular_content"},t._l(t.topicTypeIofo,(function(e,r){return s("div",{key:r,staticClass:"popular_content_item"},[s("ul",{staticStyle:{border:"0"}},[s("li",[s("img",{attrs:{src:e.memberPhotoUrl,alt:""}})]),s("li",{staticStyle:{"line-height":"0px"}},[s("span",[t._v(t._s(e.userNickname))]),s("br"),s("span",[t._v(t._s(e.crtTime))])]),s("li",[s("img",{attrs:{src:i("932a"),alt:""}})])]),s("img",{staticClass:"content_image",attrs:{src:e.pictureUrl,alt:""}}),s("p",{staticClass:"contenTxt"},[s("img",{staticClass:"p_image",attrs:{src:i("f602"),alt:""}}),t._v(" "+t._s(e.topicName)+" ")]),s("div",{staticClass:"text_content"},[t._v(" "+t._s(e.mainBody)+" ")]),s("div",{staticClass:"content_bottom"},[s("ul",{staticClass:"bottom"},[s("li",[s("van-icon",{attrs:{name:"location",size:"18"}}),t._v(" "+t._s(e.resName)+" ")],1),s("li",[s("van-icon",{staticStyle:{"margin-top":"15px"},attrs:{name:"like-o",size:"18"}}),t._v(" "+t._s(e.likeNum)+" ")],1),s("li",[s("van-icon",{staticStyle:{"margin-top":"15px"},attrs:{name:"chat-o",size:"20"}}),t._v(" "+t._s(e.commentNum)+" ")],1)])])])})),0)])],1)])},m=[],g=i("5530"),v=i("2f62"),y={filters:{ellipsis:function(t){return t?t.length>5?t.slice(0,5)+"...":t:""}},data:function(){return{title:null,topicTypeIofo:[],pageNumber:1,pageSize:5,mallCode:this.$engine.api("com.zkty.jsi.globalstorage","get","mallCode"),isRefresh:!1,topicIofo:[]}},created:function(){this.inserts(),this.visibilityEve(),this.title=JSON.parse(localStorage.getItem("select")),this.topTofo()},methods:{visibilityEve:function(){var t=this;this.$utils.visibilityEve((function(){"/community"===t.$route.path&&(t.title=JSON.parse(localStorage.getItem("select")),t.topic({page:1}),t.topTofo())}))},all:function(){this.$router.push({path:"/alltopics",query:{type:"NEIGHBORHOODTOPIC"}})},topTofo:function(){var t=this;this.title=JSON.parse(localStorage.getItem("select")),this.topic();var e={pageNumber:this.pageNumber,pageSize:this.pageSize,type:"NEIGHBORHOODTOPIC",mallCode:this.$engine.api("com.zkty.jsi.globalstorage","get","mallCode")};this.$api.getView(e).then((function(e){t.topicIofo=e.data.records}))},topic:function(t){var e=this;return new Promise((function(i,s){var r=e;void 0===t||1===t.page&&(e.topicTypeIofo=[]),r.$api.getViewPost({pageNumber:r.pageNumber,pageSize:r.pageSize,mallCode:r.$engine.api("com.zkty.jsi.globalstorage","get","mallCode")}).then((function(t){var o=t.data;if(o){var a,n=0;n=~~(o.total/r.pageSize),o.total%r.pageSize>0&&++n;var l={pageCount:n,list:[]};o.records&&l.list.map((function(t){return t.imgArr=t.pictureUrl?t.pictureUrl.split(","):[],t.likeColor=1!==t.likeFlag,t})),(a=e.topicTypeIofo).push.apply(a,Object(c["a"])(l.list)),i(l)}else s()})).catch((function(t){console.error(t),s(t)}))}))},topicFun:function(t){var e=this.topicIofo[t];e.activityId?this.$router.push({path:"/activeTopics",query:{activityId:e.activityId,id:e.id}}):this.$router.push({path:"/topic",query:{id:e.id}})},inserts:function(){var t={mallCode:this.$engine.api("com.zkty.jsi.globalstorage","get","mallCode"),type:"RESIDENTIAL",userId:"16626582048768"};this.$api.selectRes(t).then((function(t){t.data.isSelect}))}},computed:Object(g["a"])({},Object(v["a"])({a:function(t){return t.village.select}}))},b=y,_=(i("76a7"),Object(p["a"])(b,d,m,!1,null,"163abcd5",null)),C=_.exports,A={components:{Plaza:f,Neighbourhood:C},data:function(){return{active:0,tabs:[{title:"广场"},{title:"邻里互助"}],num:"",tabes:"广场",number:null,pageNumber:1,pageSize:10,mallCode:null,select:null,list:[],numList:null}},beforeCreate:function(){},created:function(){this.$utils.isMiniprogram()&&this.$route.query.userToken&&(this.$utils.storage.set("userToken",this.$route.query.userToken),this.$utils.storage.set("sessionToken",this.$route.query.sessionToken),this.$utils.storage.set("GMJUserInfo",this.$route.query.userInfo)),this.$utils.isMiniprogram()&&this.$route.query.mallCode&&(this.$utils.storage.set("mallCode",this.$route.query.mallCode),this.$utils.storage.set("homecityCode",this.$route.query.cityCode)),this.toast(),this.mallCode=this.$engine.api("com.zkty.jsi.globalstorage","get","mallCode"),this.select=JSON.parse(localStorage.getItem("select")),this.$toast.clear(),this.active=JSON.parse(localStorage.getItem("tabs")),this.visibilityEve(),this.cellular(),this.toastNum()},methods:{visibilityEve:function(){var t=this;this.$utils.visibilityEve((function(){"/community"===t.$route.path&&(t.toast(),t.cellular(),t.$nextTick((function(){t.select=JSON.parse(localStorage.getItem("select")),t.$toast.clear(),t.active=JSON.parse(localStorage.getItem("tabs"))})),t.toastNum())}))},toastNum:function(){var t=this,e={pageNumber:1,pageSize:1e7,postUserId:this.$utils.getUserId()};this.$api.comment(e).then((function(e){var i=e.data.records.filter((function(t){return 0===t.isRead}));t.num=i.length})),this.$api.villagelist(e).then((function(e){var i=e.data.records.filter((function(t){return 0===t.isRead}));t.number=i.length}))},message:function(){this.$EventBus.$emit("num",this.number),this.$router.push({path:"/dynamic"})},cellular:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={pageNumber:t.pageNumber,pageSize:t.pageSize,mallCode:t.$engine.api("com.zkty.jsi.globalstorage","get","mallCode")},e.next=3,t.$api.choose(i);case 3:s=e.sent,t.list=s.data.records;case 5:case"end":return e.stop()}}),e)})))()},toast:function(){this.$toast.loading({duration:0,type:"loading",message:"加载中...",forbidClick:!0})},tab:function(t){this.active=t,localStorage.setItem("tabs",JSON.stringify(t)),1===t&&null===this.select&&this.$router.push({path:"/select"})}}},w=A,S=(i("b96c"),Object(p["a"])(w,s,r,!1,null,"765411f8",null));e["default"]=S.exports},f602:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9UlEQVRYR8WXPWgVQRDH/xPie4WIVYSo4Ac2cfeCYhQsRO2CoIWSYKGQQiKKjSg2CprCws9O8KMwaKVBLaJYJpZiHg+TuZc0wSgSIWmEoIXkbuSO3HF3b+8jvhez3e3OzvzmY2f3CKs8aLn2Ozs7NzuOc4CIdotIGxFtALAAYBzA53K5PFKpVH4X1VsYwLKsfhHpA7C/gPLXIjJs2/ZgnmwugFKqj4guANiTpyy5LiKDjuMMTE1NzaTtzQRQSj0lIs/rRsY3ANeY+blJSSqAZVnvRaS7EcuJvQPMfCOpzwigtfYErzfRuK+KiHonJiaGonrrAFbKeMToUWZ+G3zHADo6OtpbW1vHRGRjhve/AHwCsBfA2iU501yaimFmPmYEKOj9PWa+rLW+C+DSkiLTXFYGwyjEIqCU+kJEW3Ny7xdTAtY0l6XmDTMf9+sikLIsq0dEXhYovGYAeGZ2MPN0CKC19oz3GAAWROQVEX0N1iIRCMWTcyKyhYhOAFiX4pTvSBSgCmCXQXiUmQ8XiEydiNZ6BMChlL0PmflcFOA7gE0mYRF5TEQ/lhmBdiLqzwD36yAK8AfAmgKeNqsG/MhGAX4CWL+aANMAttf1aqJZ13VvElEtkoJRrXUst8wcmxORnS0tLVczmlpdBD4C2GeIQIWZuwpExlSEYxnX+BAz90ZT8ADAeZMhIrJFZH5p7UPkyB1MmyOiNhFRaeDBxRQF8ELqHZu80XARisiMbdvbYp3Q+9BazwFoyyFoGABA+DaI3QVa69Q0BFBeT7Bt+6xS6lFwzk1zGaGfXVxc7JqcnPT7ShKgaBry0pS1HnsZ/W+AF8x8MkqXvI7PENGTRtzL2DvuOE53EPpALhmBdwCONBvAO8au6/bath02szoAy7JuiciVFTBedV33lMl4WIRKqYtEdL/Jxr3fszvlcvl21q8aaa1PA3jWROPDRDTiOM5orVbz3hiZwwNIezDk7Q3XRWSuVCrNV6vVoF0X3pv7b1hY0z8K/gWSX4MwlrsLLwAAAABJRU5ErkJggg=="}}]);