(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a205f6"],{"557a":function(t,i,s){},7568:function(t,i,s){"use strict";s("557a")},fc66:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"activity_topics"},[e("GmHeader",{attrs:{slotsShow:["center","right"]}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.Code,expression:"Code"}],attrs:{slot:"dynamicsRight"},slot:"dynamicsRight"},[t.environment?e("van-uploader",{attrs:{"after-read":t.afterRead}},[e("div",{staticClass:"seng_msg_btn btn_success"},[t._v("发贴")])]):e("div",{staticClass:"seng_msg_btn btn_success",on:{click:t.showPhoto}},[t._v("发贴")])],1)]),e("div",{staticClass:"topics_header"},[e("div",{staticClass:"topics_con"},[e("div",{staticClass:"topics_title"},[e("div",[e("img",{staticClass:"head_img",attrs:{width:"100px",height:"100px",src:""+t.topicParams.pictureUrl}})]),e("div",{staticStyle:{"margin-left":"10px"}},[e("p",{staticClass:"title_right"},[e("img",{attrs:{src:s("f602")}}),e("strong",[t._v(t._s(t.topicParams.topicName))])]),e("div",[e("label",{staticClass:"topics_num"},[t._v(t._s(t.topicParams.postCommentNum)+"帖子")]),e("span",{staticClass:"topics_label"},[t._v(t._s(t.statusName?t.statusName:"未开始"))])])])]),e("p",[t._v("报名时间：")]),e("p",[t._v(t._s(t.paramsObj.applyStartTime)+" 至"+t._s(t.paramsObj.applyEndTime))]),e("p",[t._v("活动时间：")]),e("p",[t._v(t._s(t.paramsObj.activityStartTime)+" 至"+t._s(t.paramsObj.activityEndTime))]),e("div",{staticClass:"topics_desc"},[t._v(t._s(t.topicParams.mainBody))])]),t.lookBtn?e("div",{staticClass:"sign_up_btn sign_up_btn_success",on:{click:t.signUpDetailClickFun}},[t._v("查看报名")]):e("div",{staticClass:"sign_up_btn",class:[t.signUpBtnShow?"sign_up_btn_success":"sign_up_btn_gray"],on:{click:t.signUpClickFun}},[t._v(" "+t._s(t.btnMsg)+" ")])]),e("listPagination",{attrs:{"data-list":t.topicsList,formatAjaxData:t.getTopics,isRefresh:t.isRefresh,slotsShow:["finished","error"]},on:{"update:dataList":function(i){t.topicsList=i},"update:data-list":function(i){t.topicsList=i},"update:isRefresh":function(i){t.isRefresh=i},"update:is-refresh":function(i){t.isRefresh=i}},scopedSlots:t._u([{key:"finished",fn:function(){return[e("div",{staticClass:"reminder"},[t.topicsList.length?e("div",[t._v("没有更多了")]):e("div",{staticClass:"error-body"},[e("div",[e("img",{staticClass:"img-login",attrs:{src:s("e3bb"),alt:""}})]),e("div",{staticClass:"error-text"},[t._v("暂无帖子")])])])]},proxy:!0},{key:"error",fn:function(){return[e("div",[t._v("请求失败，点击重新加载")])]},proxy:!0}])},[e("div",[e("topics",{attrs:{topicsList:t.topicsList}})],1)])],1)},a=[],r=s("2909"),o=(s("c975"),s("ac1f"),s("1276"),s("d3b7"),s("d81d"),s("e5ea")),n={components:{topics:o["a"]},data:function(){return{btnMsg:"立即报名",lookBtn:!1,topicParams:{},paramsObj:{},isRefresh:!1,reviewsImg:[],environment:this.$utils.isMiniprogram(),signUpBtnShow:!1,topicsList:[],pageSize:10,routerParams:{},Code:!0}},computed:{statusName:function(){return this.getStatus(this.paramsObj.status)},slotsShow:function(){var t=["center","right"];return this.$utils.isMiniprogram()&&(t=["left","center","right"]),t}},created:function(){this.$utils.isMiniprogram()&&this.$route.query.userToken&&(this.$utils.storage.set("userToken",this.$route.query.userToken),this.$utils.storage.set("sessionToken",this.$route.query.sessionToken),this.$utils.storage.set("GMJUserInfo",this.$route.query.userInfo)),this.$utils.isMiniprogram()&&this.$route.query.mallCode&&(this.$utils.storage.set("mallCode",this.$route.query.mallCode),this.$utils.storage.set("homecityCode",this.$route.query.cityCode)),this.$utils.storage.set("fileArr",[]);var t=this.$route.query;this.routerParams=t,this.getActivity(),this.getInit(),this.visibilityEve()},methods:{visibilityEve:function(){var t=this;this.$utils.visibilityEve((function(){"/activeTopics"===t.$route.path&&(t.getInit(),t.getTopics({page:1}))}))},getActivityDetail:function(){var t=this;t.$api.getActivityDetail({activityId:t.routerParams.activityId,crtUserId:t.$utils.getUserId()}).then((function(i){if(0===i.code){if(i.data)return void(t.lookBtn=!0);if(t.paramsObj.alreadyApplyUserNum>=t.paramsObj.applyLimitUserNum)return t.signUpBtnShow=!1,void(t.btnMsg="活动报名人数已满")}}))},getInit:function(){var t=this,i=this;i.$api.getActivityView({id:i.routerParams.activityId}).then((function(s){i.paramsObj=s.data,"INAPPLY"===s.data.status&&t.getActivityDetail(),i.$nextTick((function(){i.changeTime()}))}))},getActivity:function(){var t=this,i=this;i.$api.getTopicDetail({id:i.routerParams.id}).then((function(s){s.data.pictureUrl&&-1!==s.data.pictureUrl.indexOf("https")&&(s.data.pictureUrl="http:"+s.data.pictureUrl.split(":")[1]),i.topicParams=s.data,t.topicParams.mallCode&&-1!==t.topicParams.mallCode.indexOf(t.$mallCode)?t.Code=!0:t.Code=!1}))},getStatus:function(t){var i={NOTSTART:"活动未开始",INAPPLY:"活动报名中",OVER:"活动已结束",CLOSED:"活动已关闭"};return i[t]},getTopics:function(t){var i=this;return new Promise((function(s,e){var a=i;1===t.page&&(i.topicsList=[]),a.$api.getTopicPage({pageNumber:t.page,pageSize:a.pageSize,communityId:a.routerParams.id}).then((function(t){var o=t.data;if(o){var n,c=0;c=~~(o.total/a.pageSize),o.total%a.pageSize>0&&++c;var u={pageCount:c,list:[]};o.records&&(u.list=JSON.parse(JSON.stringify(o.records)),u.list.map((function(t){return t.imgArr=t.pictureUrl?t.pictureUrl.split(","):[],t.likeColor=0===t.likeFlag,t.memberPhotoUrl&&-1!==t.memberPhotoUrl.indexOf("https")&&(t.memberPhotoUrl="http:"+t.memberPhotoUrl.split(":")[1]),t}))),(n=i.topicsList).push.apply(n,Object(r["a"])(u.list)),s(u)}else e()})).catch((function(t){console.error(t),e(t)}))}))},signUpClickFun:function(){var t=this;t.signUpBtnShow&&(this.$utils.isMiniprogram()?window.wx.miniProgram.navigateTo({url:"/pages/forum/enterName/enterName?webviewUrl="+encodeURIComponent("/signUp?activityId="+t.routerParams.activityId+"&id="+t.routerParams.id)}):this.$router.push({path:"/signUp",query:t.routerParams}))},signUpDetailClickFun:function(){this.$utils.isMiniprogram()?window.wx.miniProgram.navigateTo({url:"/pages/forum/enterNameDetail/enterNameDetail?webviewUrl="+encodeURIComponent("/signUpDetails?activityId="+this.routerParams.activityId+"&id="+this.routerParams.id)}):this.$router.push({path:"/signUpDetails",query:this.routerParams})},changeTime:function(){var t=this,i=new Date,s=new Date(t.paramsObj.applyStartTime);i.getTime()>s.getTime()&&"INAPPLY"===t.paramsObj.status&&(t.signUpBtnShow=!0)},afterRead:function(t){var i=[{fileName:t.file.name,retImage:t.content.split(",")[1]}];this.$utils.storage.set("fileArr",JSON.stringify(i)),this.jumpRouter()},showPhoto:function(){var t=this;this.reviewsImg.length<=9?this.$engine.api("com.zkty.jsi.camera","openImagePicker",{allowsEditing:!1,savePhotosAlbum:!1,cameraFlashMode:-1,cameraDevice:"back",photoCount:9,args:{bytes:"100"},isbase64:!0},(function(i){t.$utils.storage.set("fileArr",JSON.parse(i).data),t.jumpRouter()})):this.$toast("最多可上传9张")},jumpRouter:function(){if(this.$utils.isMiniprogram())window.wx.miniProgram.navigateTo({url:"/pages/forum/sendMsg/sendMsg?webviewUrl="+encodeURIComponent("/postMsg?activityId="+this.topicParams.activityId+"&id="+this.topicParams.id)});else{var t={activityId:this.topicParams.activityId,id:this.topicParams.id};this.$router.push({path:"/postMsg",query:t})}}}},c=n,u=(s("7568"),s("2877")),p=Object(u["a"])(c,e,a,!1,null,"1ab8bda9",null);i["default"]=p.exports}}]);