(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38d5d333"],{"0cb2":function(t,e,a){var r=a("7b0b"),s=Math.floor,i="".replace,n=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,c,l,u){var d=a+t.length,p=c.length,f=o;return void 0!==l&&(l=r(l),f=n),i.call(u,f,(function(r,i){var n;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(d);case"<":n=l[i.slice(1,-1)];break;default:var o=+i;if(0===o)return r;if(o>p){var u=s(o/10);return 0===u?r:u<=p?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):r}n=c[o-1]}return void 0===n?"":n}))}},"35a9":function(t,e,a){},"459a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GmHeaderBackImg",{attrs:{scrollCover:!0,backgroundColor:"#f9f9f9","scroll-gradients":!0,gradientsColor:"#f9f9f9"}},[a("div",{staticClass:"service-header",attrs:{slot:"header"},slot:"header"},[a("GmHeader",{attrs:{slotsShow:["center"],"background-color":"transparent"}},[a("div",{attrs:{slot:"dynamicsCenter"},slot:"dynamicsCenter"},[t._v(t._s(t.orederStatusName))])])],1),a("div",{attrs:{slot:"main"},slot:"main"},[0===t.orederStatus||11===t.orederStatus?a("p",{staticClass:"last-time"},[t._v(" 剩 "),a("van-count-down",{attrs:{time:t.expireTime,format:"mm 分 ss 秒"},on:{finish:t.finish}}),t._v(" 自动关闭 ")],1):t._e(),t._l(t.orderItemList,(function(e,r){return[0===r?a("div",{key:r,staticClass:"service-order"},[a("div",{staticClass:"receiving-address"},[t._l(t.subOrderTemplateList,(function(e,r){return["14"===e.templateComponentType&&"userAddress"===e.businessCode&&e.templateItemValue.indexOf("{")>=0?a("div",{key:r},[a("p",{staticClass:"address"},[t._v(t._s(JSON.parse(e.templateItemValue)?JSON.parse(e.templateItemValue).address:""))]),a("p",{staticClass:"receiving-people"},[a("span",[t._v(t._s(JSON.parse(e.templateItemValue)?JSON.parse(e.templateItemValue).userName:""))]),a("span",[t._v(t._s(JSON.parse(e.templateItemValue)?JSON.parse(e.templateItemValue).mobile:""))])]),a("div",{staticClass:"divider"})]):t._e()]})),t._l(t.subOrderTemplateList,(function(e,r){return["14"===e.templateComponentType&&"userAddress"===e.businessCode&&e.templateItemValue.indexOf("{")<0?a("div",{key:r},[a("p",{staticClass:"address"},[t._v(t._s(e.templateItemValueName))]),a("p",{staticClass:"receiving-people"},[a("span",[t._v(t._s(e.templateItemValue))])])]):t._e()]})),t._l(t.subOrderTemplateList,(function(e,r){return["1"===e.templateComponentType||"2"===e.templateComponentType||"5"===e.templateComponentType||"6"===e.templateComponentType||"7"===e.templateComponentType||"14"===e.templateComponentType&&"userAddress"!==e.businessCode?a("div",{key:r,staticClass:"appointment"},[a("span",{staticClass:"left-title"},[t._v(t._s(e.templateItemValueName))]),a("span",{staticClass:"right-time"},[a("span",{staticClass:"shop-address"},[t._v(t._s(e.templateItemValue))])])]):t._e()]})),!t.data.appointTemplate||"HOME"!==t.data.appointTemplate.deliverType&&"SHOP"!==t.data.appointTemplate.deliverType?t._e():a("div",{staticClass:"appointment start"},[a("span",{staticClass:"left-title"},[t._v("配送方式")]),a("span",{staticClass:"right-time"},[a("span",{staticClass:"shop-address"},[t._v(t._s("HOME"===t.data.appointTemplate.deliverType?"上门取送":"到店取送"))])])]),t.data.remark&&t.data.remark.indexOf("{")>=0&&JSON.parse(t.data.remark)[0].remark||t.data.remark&&t.data.remark.indexOf("{")<0&&t.data.remark?a("div",{staticClass:"appointment start"},[a("span",{staticClass:"left-title"},[t._v("留言")]),a("span",{staticClass:"right-time"},[a("span",{staticClass:"shop-address"},[t._v(t._s(t.data.remark&&t.data.remark.indexOf("{")>=0?JSON.parse(t.data.remark)[0].remark:t.data.remark))])])]):t._e()],2),a("p",{staticClass:"mall-title"},[a("span",{staticClass:"shopImg"}),a("span",{staticClass:"shopName"},[t._v(t._s(t.data.mallName))])]),a("div",{staticClass:"shop-content"},[a("p",{staticClass:"shop-title"},[t._v(t._s(t._f("shopAliasName")(t.data)))]),a("van-card",{staticClass:"card",attrs:{desc:t.descFormat(e),title:e.skuName,thumb:e.mainPicUrl,price:e.realPrice?e.realPrice.toFixed(2):"0.00",num:e.number},on:{click:function(a){return a.stopPropagation(),t.clickthumb(e)}}}),(2===t.orederStatus&&"DEPOSIT"!==t.payType||3===t.orederStatus||5===t.orederStatus||9===t.orederStatus&&"DEPOSIT"!==t.payType)&&0==e.finishAfterNumber&&0!==e.returnDays?a("div",{staticClass:"apply-service"},[a("van-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:function(a){return t.applyService(e)}}},[t._v("申请售后")])],1):t._e(),6===t.orederStatus?a("p",{staticClass:"applyStatus"},[t._v("退款完成")]):t._e(),e.finishAfterNumber>0?a("div",{staticClass:"apply-service"},[a("van-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:function(a){return t.applyServiceDetail(e)}}},[t._v("售后详情")])],1):t._e(),t.specDyncJson.length>0?a("div",{staticClass:"divider"}):t._e(),t.specDyncJson&&t.specDyncJson.length>0?a("ul",{staticClass:"card-list"},[t._l(t.specDyncJson,(function(r,s){return[r.number>0?a("li",{key:s},[a("span",{staticClass:"card-list-title"},[t._v(t._s(r.specName))]),a("span",{staticClass:"card-list-price"},[a("span",{staticClass:"price"},[t._v("¥"+t._s(r.salePrice?r.salePrice.toFixed(2):""))]),a("span",{staticClass:"num"},[t._v("x "+t._s(r.number*e.number))])])]):t._e()]}))],2):t._e(),t.orderItemList.length<=0?a("div",{staticClass:"appointment"},[a("span",{staticClass:"left-title"},[t._v("商品总额")]),a("span",{staticClass:"right-time"},[a("span",{staticClass:"shop-address"},[t._v("¥"+t._s(t.data.totalAmount?t.data.totalAmount.toFixed(2):""))])])]):t._e(),"DEPOSIT"===t.payType&&(3===t.orederStatus||5===t.orederStatus)||"DEPOSIT"!==t.payType?a("div",{staticClass:"appointment"},[a("span",{staticClass:"left-title"},[t._v("积分")]),a("span",{staticClass:"right-time"},[a("span",{staticClass:"shop-address"},[t._v("-¥"+t._s(t.data.pointsAmount?t.data.pointsAmount.toFixed(2):"0.00"))])])]):t._e(),"DEPOSIT"===t.payType&&(3===t.orederStatus||5===t.orederStatus)||"DEPOSIT"!==t.payType?a("div",{staticClass:"appointment"},[a("span",{staticClass:"left-title"},[t._v("店铺优惠")]),a("span",{staticClass:"right-time"},[a("span",{staticClass:"shop-address"},[t._v("-¥"+t._s(t.data.couponAmount2?t.data.couponAmount2.toFixed(2):"0.00"))])])]):t._e(),"DEPOSIT"===t.payType&&(3===t.orederStatus||5===t.orederStatus)||"DEPOSIT"!==t.payType?a("div",{staticClass:"appointment"},[a("span",{staticClass:"left-title"},[t._v("平台优惠")]),a("span",{staticClass:"right-time"},[a("span",{staticClass:"shop-address"},[t._v("-¥"+t._s(t.data.couponAmount1?t.data.couponAmount1.toFixed(2):"0.00"))])])]):t._e(),"DEPOSIT"!==t.payType?a("div",{staticClass:"line"}):t._e(),"DEPOSIT"!==t.payType&&0===t.orederStatus?a("div",{staticClass:"all-price-content"},[a("span"),a("span",[t._v("需付款：")]),a("span",[t._v("¥"+t._s(t.data.payAmount?t.data.payAmount.toFixed(2):"0.00"))])]):t._e(),"DEPOSIT"!==t.payType&&0!==t.orederStatus?a("div",{staticClass:"all-price-content"},[a("span"),a("span",[t._v("实付款：")]),a("span",[t._v("¥"+t._s(t.data.payAmount?t.data.payAmount.toFixed(2):"0.00"))])]):t._e(),t.orderItemList.length>1?a("p",{staticClass:"charge-title"},[t._v("收费清单")]):t._e(),t.orderItemList.length>1?a("ul",{staticClass:"charge-list"},[t._l(t.orderItemList,(function(e,r){return[r>0?a("li",{key:r},[a("div",{staticClass:"left-content"},[a("p",[t._v(t._s(e.skuName))]),a("p",[t._v(t._s(e.skuSpecValues))])]),a("div",{staticClass:"right-content"},[a("p",[t._v("¥"+t._s(e.salePrice?e.salePrice.toFixed(2):""))]),a("p",[t._v("x "+t._s(e.number))])])]):t._e(),(2===t.orederStatus&&"DEPOSIT"!==t.payType||3===t.orederStatus||5===t.orederStatus||9===t.orederStatus&&"DEPOSIT"!==t.payType)&&0==e.finishAfterNumber&&0!==e.returnDays&&r>0?a("div",{key:r,staticClass:"apply-service"},[a("van-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:function(a){return t.applyService(e)}}},[t._v("申请售后")])],1):t._e(),e.finishAfterNumber>0&&r>0?a("div",{key:r,staticClass:"apply-service"},[a("van-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:function(a){return t.applyServiceDetail(e)}}},[t._v("售后详情")])],1):t._e()]}))],2):t._e(),0!==t.orederStatus&&"DEPOSIT"===t.payType?a("div",{staticClass:"line"}):t._e(),0!==t.orederStatus&&"DEPOSIT"===t.payType?a("ul",{staticClass:"payment-details"},[a("li",[a("span",{staticClass:"left-details"},[a("span",[t._v("定金：")]),a("span",[t._v("¥"+t._s(t.data.depositAmount.toFixed(2)))])]),a("span",{staticClass:"rigth-details"},[t._v(t._s(11===t.orederStatus?"未支付":12===t.orederStatus||4===t.orederStatus||8===t.orederStatus?"已取消":"已支付"))])]),a("li",[a("span",{staticClass:"left-details"},[a("span",[t._v("尾款：")]),a("span",[t._v("¥"+t._s(t.data.realAmount.toFixed(2)))])]),a("span",{staticClass:"rigth-details"},[t._v(t._s(5===t.orederStatus||3===t.orederStatus?"已支付":4===t.orederStatus?"未支付，已取消":12===t.orederStatus?"已取消":"DEPOSIT"===t.payType&&9===t.orederStatus?"未支付，服务已完成":"未支付，等待服务完成"))])])]):t._e(),t.orderItemList.length>1||"DEPOSIT"===t.payType&&(3===t.orederStatus||5===t.orederStatus)?a("div",{staticClass:"line"}):t._e(),"DEPOSIT"!==t.payType||3!==t.orederStatus&&5!==t.orederStatus?t._e():a("div",{staticClass:"all-price-content"},[a("span"),a("span",[t._v("实付款：")]),a("span",[t._v("¥"+t._s(t.data.payAmount?t.data.payAmount.toFixed(2):"0.00"))])]),t.orderItemList.length>1?a("div",{staticClass:"all-price-content little"},[a("span"),a("span",[t._v("小计：")]),a("span",{staticClass:"little"},[t._v("¥"+t._s((t.data.depositAmount+t.data.realAmount).toFixed(2)))])]):t._e(),11===t.orederStatus?a("div",{staticClass:"all-price-content"},[a("span"),a("span",[t._v("需付定金：")]),a("span",[t._v("¥"+t._s(t.data.depositAmount.toFixed(2)))])]):t._e()],1),a("div",{staticClass:"order-details"},[a("p",{staticClass:"title"},[t._v("订单信息")]),a("ul",{staticClass:"message-list"},[a("li",[a("span",[t._v("订单编号："+t._s(t.data.orderNo))]),a("span",[a("span",{staticClass:"copy",attrs:{"data-clipboard-text":t.data.orderNo},on:{click:t.copy}},[t._v("复制")])])]),a("li",[a("span",[t._v("下单时间："+t._s(t.data.submitTime))])]),"DEPOSIT"!==t.payType&&t.data.paidTime?a("li",[a("span",[t._v("付款时间："+t._s(t.data.paidTime))])]):t._e(),"DEPOSIT"===t.payType&&t.data.paidTime?a("li",[a("span",[t._v("定金支付时间："+t._s(t.data.paidTime))])]):t._e(),"DEPOSIT"===t.payType&&t.data.completeTime?a("li",[a("span",[t._v("尾款支付时间："+t._s(t.data.completeTime))])]):t._e(),t.data.cancelTime?a("li",[a("span",[t._v("订单取消时间："+t._s(t.data.cancelTime))])]):t._e()])]),a("div",{staticClass:"bottom-btn",style:{height:t.bottomHeight}},[t.isMiniprogram?t._e():a("span",{staticClass:"btn-list",attrs:{type:"primary"},on:{click:function(e){return t.shopconnect(t.data)}}},[t._v("联系商家")]),0===t.orederStatus||11===t.orederStatus||1===t.orederStatus||10===t.orederStatus||7===t.orederStatus?a("span",{staticClass:"btn-list",attrs:{type:"primary"},on:{click:function(e){return t.cancelOrder(t.data)}}},[t._v(t._s("ON"===t.data.userCancelState?"取消订单审核中":"取消订单"))]):t._e(),1===t.orederStatus||2===t.orederStatus||5===t.orederStatus||7===t.orederStatus||9===t.orederStatus?a("span",{staticClass:"btn-list",attrs:{type:"primary"},on:{click:t.toServicePro}},[t._v("服务进度")]):t._e(),9===t.orederStatus&&"DEPOSIT"!==t.payType?a("span",{staticClass:"btn-list active",attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.express(t.data)}}},[t._v("确认完成")]):t._e(),"DEPOSIT"===t.payType&&9===t.orederStatus?a("span",{staticClass:"btn-list active",attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.submitDeConfim.apply(null,arguments)}}},[t._v("支付尾款")]):t._e(),3===t.orederStatus?a("span",{staticClass:"btn-list active",attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.complete.apply(null,arguments)}}},[t._v("评价")]):t._e(),0===t.orederStatus?a("span",{staticClass:"btn-list active",attrs:{type:"primary"},on:{click:t.submitConfim}},[t._v("付款")]):t._e(),11===t.orederStatus?a("span",{staticClass:"btn-list active",attrs:{type:"primary"},on:{click:t.submitConfim}},[t._v("支付定金")]):t._e()])]):t._e()]})),a("ShowDialog",{ref:"showDialog",attrs:{dataArr:t.userCancelOrderReasonList,dialogTitle:"请选择取消原因"},on:{cancelConfim:t.cancelConfim1,confirmBtn:t.confirmBtn,setshowDialog:t.setshowDialog}})],2)])},s=[],i=(a("4160"),a("159b"),a("a15b"),a("ac1f"),a("1276"),a("5319"),a("b311")),n=a.n(i),o=a("e381"),c=a("2ef0"),l=a.n(c),u=a("4ca2"),d={name:"ServiceDetail",components:{ShowDialog:o["a"]},data:function(){return{isMiniprogram:this.$utils.isMiniprogram(),expireTime:"",hasVirtualPay:"",isOncePay:"",deliverType:"",specDyncJson:{},subOrderTemplateList:[],userCancelOrderReasonList:[],refresh:!1,payType:"",orederStatus:0,orderPayType:"",value:"",data:"",orderItemList:"",orderTime:"",time:"",hasDel:!1,state:"",appointmentTime:""}},created:function(){window._od=this,this.toast(),this.getServiceDetail(),this.visibilityEve()},computed:{bottomHeight:function(){return this.$tabbarHeight+"px"},orederStatusName:function(){switch(this.orederStatus){case 0:return"等待买家付款";case 11:return"待支付定金";case 1:return"待服务";case 10:return"待接单";case 2:return"服务中";case 3:return"待评价";case 4:return"已取消";case 5:return"已完成";case 7:return"待服务";case 8:return"已取消";case 12:return"已取消";case 13:return"待取货";case 14:return"退款中";case 9:return"DEPOSIT"===this.payType?"待支付尾款":"服务完成"}}},methods:{toast:function(){this.$toast.loading({duration:0,type:"loading",message:"加载中...",forbidClick:!0})},visibilityEve:function(){var t=this,e=this;e.$utils.visibilityEve((function(){"/serviceDetail"===e.$route.path&&(t.toast(),t.getServiceDetail())}))},descFormat:function(t){var e=t.skuSpecValues;if(t.skuSpecJson)try{var a=JSON.parse(t.skuSpecJson),r=[];a.forEach((function(t){r.push(t.featureName+": "+t.featureValue)})),e=r.join("  ")}catch(s){console.error(s)}return e},finish:function(){this.refresh||this.getServiceDetail(),this.refresh=!0},clickthumb:function(t){this.$utils.isMiniprogram()?window.wx.miniProgram.navigateTo({url:"/pages/goodDetailWebview/goodDetailWebview?webviewUrl="+encodeURIComponent("/serviceGoodsDetail?shopCode="+t.shopCode+"&skuCode="+t.skuCode)+"&shopCode="+t.shopCode+"&skuCode="+t.skuCode+"&from=SETVICE"}):this.$router.push({path:"/serviceGoodsDetail",query:{skuCode:t.skuCode,shopCode:t.shopCode}})},express:function(t){var e=this;this.toast();var a={orderType:t.orderType,orderNo:t.orderNo};this.$api.userconfirmServe(a).then((function(t){0===t.code&&!0===t.data&&(e.$toast("确认完成"),e.getServiceDetail())}))},submitDeConfim:function(){if(1===this.hasVirtualPay||1===this.isOncePay){var t=this.data;t.orderType="SERVICE_MAIN",t.orderNo=this.data.orderNo,t.payStyle="wk",this.$utils.pay.gmPay(t,"service")}else this.$router.push({path:"/servicePayDetail",query:{tradeNo:this.data.tradeNo,orderNo:this.$route.query.orderNo,orderType:"SERVICE_MAIN"}})},submitConfim:function(){this.$utils.pay.gmPay(this.data,"service")},toServicePro:function(){this.$router.push({path:"/serviceProgress",query:{orderNo:this.$route.query.orderNo,appointmentTime:this.appointmentTime}})},complete:function(){this.$router.push({path:"/releaseEvaluation",query:{orderNo:this.$route.query.orderNo,orderType:this.$route.query.orderType,from:"service"}})},shopconnect:l.a.debounce((function(t){var e=this;this.toast(),this.$api.getStoreInfo({code:t.shopCode}).then((function(a){e.$engine.api("com.zkty.jsi.gmimchat","openOrderShopService",{shopId:a.data.shopInfo.id,openShopDto:{scheme:Object(u["c"])(),host:u["b"],pathname:"/",fragment:"/shop",query:{id:t.shopCode,shopType:2},params:{hideNavbar:!0}},orderId:t.orderNo,orderTitle:t.orderItemList[0].skuName,goodsPic:t.orderItemList[0].mainPicUrl,goodsNum:t.orderItemList[0].number,orderPrice:t.orderItemList[0].salePrice,orderCreateTime:t.orderItemList[0].createTime.replace(/(.*)\:/,"$1^").split("^")[0],openOrderDetailsDto:{scheme:Object(u["c"])(),host:u["b"],pathname:"/",fragment:"/serviceDetail",query:{orderNo:t.orderNo,orderType:t.orderType,tradeNo:t.tradeNo},params:{hideNavbar:!0}}},(function(t){0!==t.code&&t.result&&(e.$toast({forbidClick:!0,message:t.result,position:"bottom"}),setTimeout((function(){e.$toast.clear()}),1e3))}))}))}),300,{leading:!0,trailing:!1}),getServiceDetail:function(){var t={orderNo:this.$route.query.orderNo,orderType:this.$route.query.orderType},e=this;e.$api.serviceDetail(t).then((function(t){if(0===t.code){e.$toast.clear(),e.data=t.data,e.expireTime=new Date(t.data.expireTime.replace(/-/g,"/")).getTime()-t.timestamp,e.orderItemList=t.data.orderItemList,e.hasVirtualPay=t.data.hasVirtualPay,e.isOncePay=t.data.isOncePay,t.data.depositAmount>0&&(e.payType="DEPOSIT"),e.state=t.data.state,"NOT_PAYED"===t.data.state?e.orederStatus=0:"DEPOSIT_NOT_PAYED"===t.data.state?e.orederStatus=11:"PAID"===t.data.state||"DEPOSIT_PAID"===t.data.state?e.orederStatus=7:"DELIVERY_PENDING"===t.data.state?e.orederStatus=1:"RECEIVING"===t.data.state?e.orederStatus=2:"COMPLETE"===t.data.state&&1!==t.data.isEvaluate?e.orederStatus=3:"CANCEL"===t.data.state||"STOCKUP_CANCEL"===t.data.state?e.orederStatus=4:"COMPLETE"===t.data.state?e.orederStatus=5:"EXPIRE"===t.data.state?e.orederStatus=8:"CONFIRM_PENDING"===t.data.state?e.orederStatus=9:"STOCKUP_PENDING"===t.data.state?e.orederStatus=10:"STOCKUP"===t.data.state?e.orederStatus=13:"PAID_CANCEL"===t.data.state?e.orederStatus=12:"REFUNDING"===t.data.state?e.orederStatus=14:t.data.repairOrderId&&""!==t.data.repairOrderId&&(e.orederStatus=6),e.subOrderTemplateList=t.data.appointTemplate.subOrderTemplateList;for(var a=0;a<t.data.appointTemplate.subOrderTemplateList.length;a++)"appointmentTime"===t.data.appointTemplate.subOrderTemplateList[a].businessCode&&(e.appointmentTime=t.data.appointTemplate.subOrderTemplateList[a].templateItemValue);t.data.specDyncJson&&(e.specDyncJson=JSON.parse(t.data.specDyncJson))}})).catch((function(){}))},cancelOrder:function(t){var e=this;if("ON"!==t.userCancelState){var a={caCode:"005",type:"2"};this.$refs.showDialog.order=t,this.$api.user_Cancel_Order_Reason_List(a).then((function(t){e.userCancelOrderReasonList=t.data.infos,e.$refs.showDialog.showDialog=!0}))}},cancelConfim1:function(){this.$refs.showDialog.showDialog=!1},setshowDialog:function(t){this.$refs.showDialog.showDialog=t},confirmBtn:function(t,e){var a=this;this.toast(),this.$refs.showDialog.showDialog=!1;var r={orderNo:e.orderNo,orderType:e.orderType,cancelType:"USER_APPLY",cancelReason:t.id,cancelReasonStr:t.reasonName};this.$api.orderCancelService(r).then((function(t){0===t.code&&a.getServiceDetail()}))},copy:function(){var t=this,e=new n.a(".copy");e.on("success",(function(a){t.$toast("复制成功"),e.destroy()}))},applyService:function(t){this.$router.push({path:"/afterService",query:{from:"service",orderNo:this.data.orderNo,orderType:this.data.orderType,type:"add",orderItemNo:t.orderItemNo}})},applyServiceDetail:function(t){this.$router.push({path:"/serviceDetails",query:{from:"order",repairOrderNo:t.repairOrderNo,orderNo:t.orderNo,skuCode:t.skuCode}})},showAreaList:function(){}}},p=d,f=(a("dca5"),a("2877")),m=Object(f["a"])(p,r,s,!1,null,null,null);e["default"]=m.exports},"4ca2":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}));var r=function(){var t=window.location.protocol;return/^http/.test(t)?"omp":"microapp"},s="omp"===r()?Object({NODE_ENV:"production",VUE_APP_BASEURL:"https://api.lohashow.com/",BASE_URL:""}).VUE_APP_MALL_BASE_URL:"com.gm.microapp.mall",i="omp"===r()?Object({NODE_ENV:"production",VUE_APP_BASEURL:"https://api.lohashow.com/",BASE_URL:""}).VUE_APP_VUEMALL_BASE_URL:"com.gm.microapp.mall"},"502c":function(t,e,a){},"511b":function(t,e,a){"use strict";a("502c")},5319:function(t,e,a){"use strict";var r=a("d784"),s=a("825a"),i=a("50c4"),n=a("a691"),o=a("1d80"),c=a("8aa5"),l=a("0cb2"),u=a("14c3"),d=Math.max,p=Math.min,f=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,a,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=r.REPLACE_KEEPS_$0,y=m?"$":"$0";return[function(a,r){var s=o(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,s,r):e.call(String(s),a,r)},function(t,r){if(!m&&h||"string"===typeof r&&-1===r.indexOf(y)){var o=a(e,t,this,r);if(o.done)return o.value}var v=s(t),_=String(this),g="function"===typeof r;g||(r=String(r));var S=v.global;if(S){var b=v.unicode;v.lastIndex=0}var C=[];while(1){var T=u(v,_);if(null===T)break;if(C.push(T),!S)break;var E=String(T[0]);""===E&&(v.lastIndex=c(_,i(v.lastIndex),b))}for(var k="",O=0,D=0;D<C.length;D++){T=C[D];for(var P=String(T[0]),N=d(p(n(T.index),_.length),0),I=[],w=1;w<T.length;w++)I.push(f(T[w]));var A=T.groups;if(g){var x=[P].concat(I,N,_);void 0!==A&&x.push(A);var L=String(r.apply(void 0,x))}else L=l(P,_,N,I,A,r);N>=O&&(k+=_.slice(O,N)+L,O=N+P.length)}return k+_.slice(O)}]}))},b311:function(t,e,a){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,a){t.exports=a()})(0,(function(){return function(){var t={134:function(t,e,a){"use strict";a.d(e,{default:function(){return P}});var r=a(279),s=a.n(r),i=a(370),n=a.n(i),o=a(817),c=a.n(o);function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,a){return e&&d(t.prototype,e),a&&d(t,a),t}var f=function(){function t(e){u(this,t),this.resolveOptions(e),this.initSelection()}return p(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=c()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=c()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==l(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),m=f;function h(t){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e,a){return e&&v(t.prototype,e),a&&v(t,a),t}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}function S(t,e){return S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},S(t,e)}function b(t){var e=E();return function(){var a,r=k(t);if(e){var s=k(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return C(this,a)}}function C(t,e){return!e||"object"!==h(e)&&"function"!==typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function O(t,e){var a="data-clipboard-".concat(t);if(e.hasAttribute(a))return e.getAttribute(a)}var D=function(t){g(a,t);var e=b(a);function a(t,r){var s;return y(this,a),s=e.call(this),s.resolveOptions(r),s.listenClick(t),s}return _(a,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=n()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new m({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return O("action",t)}},{key:"defaultTarget",value:function(t){var e=O("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return O("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,a=!!document.queryCommandSupported;return e.forEach((function(t){a=a&&!!document.queryCommandSupported(t)})),a}}]),a}(s()),P=D},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}function r(t,a){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(a))return t;t=t.parentNode}}t.exports=r},438:function(t,e,a){var r=a(828);function s(t,e,a,r,s){var i=n.apply(this,arguments);return t.addEventListener(a,i,s),{destroy:function(){t.removeEventListener(a,i,s)}}}function i(t,e,a,r,i){return"function"===typeof t.addEventListener?s.apply(null,arguments):"function"===typeof a?s.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return s(t,e,a,r,i)})))}function n(t,e,a,s){return function(a){a.delegateTarget=r(a.target,e),a.delegateTarget&&s.call(t,a)}}t.exports=i},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var a=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===a||"[object HTMLCollection]"===a)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,a){var r=a(879),s=a(438);function i(t,e,a){if(!t&&!e&&!a)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(a))throw new TypeError("Third argument must be a Function");if(r.node(t))return n(t,e,a);if(r.nodeList(t))return o(t,e,a);if(r.string(t))return c(t,e,a);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function n(t,e,a){return t.addEventListener(e,a),{destroy:function(){t.removeEventListener(e,a)}}}function o(t,e,a){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,a)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,a)}))}}}function c(t,e,a){return s(document.body,t,e,a)}t.exports=i},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var a=t.hasAttribute("readonly");a||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),a||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),s=document.createRange();s.selectNodeContents(t),r.removeAllRanges(),r.addRange(s),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,a){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:a}),this},once:function(t,e,a){var r=this;function s(){r.off(t,s),e.apply(a,arguments)}return s._=e,this.on(t,s,a)},emit:function(t){var e=[].slice.call(arguments,1),a=((this.e||(this.e={}))[t]||[]).slice(),r=0,s=a.length;for(r;r<s;r++)a[r].fn.apply(a[r].ctx,e);return this},off:function(t,e){var a=this.e||(this.e={}),r=a[t],s=[];if(r&&e)for(var i=0,n=r.length;i<n;i++)r[i].fn!==e&&r[i].fn._!==e&&s.push(r[i]);return s.length?a[t]=s:delete a[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function a(r){if(e[r])return e[r].exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}return function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),a(134)}().default}))},dca5:function(t,e,a){"use strict";a("35a9")},e381:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-popup",{staticClass:"show-dialog",attrs:{position:"bottom"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[t._v(t._s(t.dialogTitle))]),a("div",{staticClass:"container"},[a("van-radio-group",{staticClass:"choose-style-radio",on:{change:t.chooseStyle},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.dataArr,(function(e,r){return a("van-cell",{key:r,attrs:{title:e.reasonName,clickable:""},on:{click:function(a){return t.chooseRadio(e)}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[a("van-radio",{attrs:{name:e.reasonName,"checked-color":"#FFA824","icon-size":"16px"}})]},proxy:!0}],null,!0)})})),1)],1)]),a("p",{staticClass:"dialog-btn",style:{height:t.bottomHeight}},[a("van-button",{staticClass:"cancel-btn",attrs:{type:"primary"},on:{click:t.cancelConfim}},[t._v("取消")]),a("van-button",{staticClass:"btn",attrs:{type:"primary",disabled:""===t.data},on:{click:t.confirmBtn}},[t._v("确定")])],1)])},s=[],i={name:"ShowDialog",props:{dialogTitle:{type:String,default:""},dialogValue:{type:String,default:""},dataArr:{type:Array,default:function(){return[]}}},components:{},data:function(){return{radio:"0",showDialog:!1,defaultValue:"",data:"",order:""}},watch:{showDialog:function(t){this.$emit("setshowDialog",t)}},computed:{bottomHeight:function(){return this.$tabbarHeight+"px"}},methods:{cancelConfim:function(){this.$emit("cancelConfim")},confirmBtn:function(){this.$emit("confirmBtn",this.data,this.order)},chooseStyle:function(t){this.radio=t},chooseRadio:function(t){this.data=t,this.radio=t.reasonName,this.defaultValue=t.userCancelReasonStr}}},n=i,o=(a("511b"),a("2877")),c=Object(o["a"])(n,r,s,!1,null,null,null);e["a"]=c.exports}}]);