(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d94e820"],{1148:function(t,a,i){"use strict";var e=i("a691"),s=i("1d80");t.exports=function(t){var a=String(s(this)),i="",n=e(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(a+=a))1&n&&(i+=a);return i}},"267b":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"packageOrder"},[i("div",{staticClass:"packageOrder-top",on:{click:function(a){return t.$router.go(-1)}}},[i("van-icon",{staticClass:"packageOrder-top-icon",attrs:{name:"arrow-left"}}),i("span",{staticClass:"packageOrder-top-text"},[t._v("确认订单")])],1),i("div",{staticClass:"packageOrder-main"},[i("p",{staticClass:"packageOrder-main-name"},[i("i",{staticClass:"packageOrder-main-name-icon"}),t._v(t._s(t.mallName))]),i("div",{staticClass:"packageOrder-main-cont"},[i("div",{staticClass:"packageOrder-main-cont-top"},[i("div",{staticClass:"packageOrder-main-cont-top-name"},[i("i",{staticClass:"packageOrder-main-cont-top-name-icon"}),t._v(t._s(t.shopName))]),i("div",{staticClass:"packageOrder-main-cont-top-body"},[i("div",{staticClass:"packageOrder-main-cont-top-body-img"},[i("img",{attrs:{src:t.goodsUrl,alt:""}})]),i("div",{staticClass:"packageOrder-main-cont-top-body-info"},[i("p",{staticClass:"packageOrder-main-cont-top-body-info-title"},[t._v(t._s(t.goodsName))]),i("p",{staticClass:"packageOrder-main-cont-top-body-info-money"},[i("span",[t._v("￥"+t._s(t.price.toFixed(2)))]),i("span",[t._v("x"+t._s(t.number))])])])]),i("div",{staticClass:"packageOrder-main-cont-top-footer"},[i("p",[i("span",[t._v("共"+t._s(t.number)+"件")]),i("span",[t._v("合计：")]),i("span",[t._v("￥"+t._s(t.amount))])])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"packageOrder-main-opt"},[[i("integral",{attrs:{minUseAmount:t.digitalList.minUseAmount,payDigital:t.payDigital,payAmount:t.price,allNum:t.digitalList.userBalanceDigital,deductionState:t.digitalList.deductionState,step:t.digitalList.unitDeductionStep}},[i("div",{staticClass:"rights-content"},[i("span",{staticClass:"title-left"},[t._v("共"+t._s(t.digitalList.userBalanceDigital)+"可用")]),i("van-stepper",{attrs:{"input-width":"10px","button-size":"20px",step:t.digitalList.unitDeductionStep,"disable-input":"",option:t.option,min:0,max:t.digitalList.userCanUseDigital},on:{change:t.changestep},model:{value:t.payDigital,callback:function(a){t.payDigital=a},expression:"payDigital"}})],1)])]],2)]),i("div",{staticClass:"packageOrder-footer"},[i("div",{staticClass:"packageOrder-footer-left"},[i("p",[t._v("￥"+t._s(t.amount))]),i("span",[t._v("共"+t._s(t.number)+"件")])]),i("div",{staticClass:"packageOrder-footer-right",on:{click:t.submitOrder}},[t._v("提交订单")])])])},s=[],n=(i("b680"),i("365c")),o=i("94ee"),r={name:"CouponPackageOrder",components:{integral:o["a"]},data:function(){return{shopName:"",mallName:"",goodsName:"",price:0,number:0,amount:0,goodsUrl:"",digitalList:null,payDigital:0}},mounted:function(){document.body.style.backgroundColor="#f9f9f9",this.orderData(),this.toast()},methods:{toast:function(){this.$toast.loading({duration:0,type:"loading",message:"加载中...",forbidClick:!0})},orderData:function(){var t=this,a={payDigital:[{acctType:"Points",payDigital:this.payDigital}],carts:JSON.parse(this.$route.query.carts),deliveryType:"NONE",isCartOrder:0,mallCode:this.$mallCode,cityCode:this.$cityCode};n["a"].getorderData(a).then((function(a){a.data.ouOccur&&a.data.ouOccur.length&&(t.shopName=t.$shopAliasName(a.data.ouOccur[0].store[0]),t.mallName=a.data.ouOccur[0].mallName,t.goodsName=a.data.ouOccur[0].store[0].noActivityCart[0].skuName,t.price=a.data.ouOccur[0].store[0].noActivityCart[0].price,t.number=a.data.ouOccur[0].store[0].noActivityCart[0].number,t.amount=a.data.ouOccur[0].payAmount.toFixed(2),t.goodsUrl=a.data.ouOccur[0].store[0].noActivityCart[0].mainPicUrl,t.digitalList=a.data.ouOccur[0].digitalList[0]),t.$toast.clear()}))},submitOrder:function(){var t=this;this.toast();var a={carts:JSON.parse(this.$route.query.carts),deliveryType:"NONE",isCartOrder:0,mallCode:this.$mallCode,cityCode:this.$cityCode};n["a"].submitOrderCard(a).then((function(a){t.$toast.clear(),t.$utils.pay.gmPay(a.data,"VIRTUAL",!0)}))},changestep:function(){this.orderData()}}},c=r,l=(i("5ef4"),i("2877")),u=Object(l["a"])(c,e,s,!1,null,"10ddb730",null);a["default"]=u.exports},"408a":function(t,a,i){var e=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},5962:function(t,a,i){"use strict";i("95d9")},"5ef4":function(t,a,i){"use strict";i("7371")},7371:function(t,a,i){},"94ee":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"integral"},[i("div",{staticClass:"cartinfo-jf"},[i("div",{staticClass:"cartinfojf-content"},[i("span",{staticClass:"integral-name",on:{click:function(a){t.show=!0}}},[t._v(" 积分 "),i("van-icon",{staticClass:"integral-name-icon",attrs:{name:"question-o",size:"15px"}})],1),i("div",{staticClass:"rights-content"},[100===t.deductionState?t._t("default"):3===t.deductionState?i("div",[t._v("共"+t._s(t.allNum)+"积分，满"+t._s(t.step)+"积分可用")]):t.payAmount<t.minUseAmount?i("div",[t._v("共"+t._s(t.allNum)+"积分可用，本单小于￥"+t._s(t.minUseAmount)+"元不可用")]):4===t.deductionState?i("div",[t._v(" 共"+t._s(t.allNum)+"积分，积分不可用; ")]):t.allNum<t.step?i("div",[t._v(" 共"+t._s(t.allNum)+"积分，满"+t._s(t.step)+"积分可用。 ")]):i("div",[t._v(" 无可用积分 ")])],2)])]),i("van-popup",{attrs:{round:""},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[i("div",{staticClass:"body"},[i("div",{staticClass:"body-text"},[i("p",{staticClass:"title"},[t._v(" 积分规则 ")]),i("p",{staticClass:"text"},[t._v(" (1) 订单金额大于"+t._s(t.minUseAmount)+"元（包含） ")]),i("p",{staticClass:"text"},[t._v(" (2) 积分数量大于1000个（包含） ")]),i("p",{staticClass:"text"},[t._v(" (3) 积分支付比例不得超过每笔订单应付金额的50% ")]),i("p",{staticClass:"text"},[t._v(" (4) 使用积分数量为1000的整数倍 = 满10元使用 ")]),i("div",{staticClass:"integral-popup-footer",on:{click:function(a){t.show=!1}}},[i("p",{staticClass:"botton"},[t._v(" 关闭 ")])])])])])],1)},s=[],n=(i("a9e3"),{props:{allNum:{type:Number,default:0},payAmount:{type:Number,default:0},payDigital:{type:Number,default:0},isAjax:{type:Boolean,default:!1},deductionState:{type:Number,default:0},step:{type:Number,default:0},minUseAmount:{type:Number,default:20}},data:function(){return{isCheck:!0,show:!1}},methods:{check:function(t){return this.isCheck?(t||(this.isCheck=t),t):this.isCheck}}}),o=n,r=(i("5962"),i("2877")),c=Object(r["a"])(o,e,s,!1,null,null,null);a["a"]=c.exports},"95d9":function(t,a,i){},b680:function(t,a,i){"use strict";var e=i("23e7"),s=i("a691"),n=i("408a"),o=i("1148"),r=i("d039"),c=1..toFixed,l=Math.floor,u=function(t,a,i){return 0===a?i:a%2===1?u(t,a-1,i*t):u(t*t,a/2,i)},d=function(t){var a=0,i=t;while(i>=4096)a+=12,i/=4096;while(i>=2)a+=1,i/=2;return a},p=function(t,a,i){var e=-1,s=i;while(++e<6)s+=a*t[e],t[e]=s%1e7,s=l(s/1e7)},m=function(t,a){var i=6,e=0;while(--i>=0)e+=t[i],t[i]=l(e/a),e=e%a*1e7},v=function(t){var a=6,i="";while(--a>=0)if(""!==i||0===a||0!==t[a]){var e=String(t[a]);i=""===i?e:i+o.call("0",7-e.length)+e}return i},g=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));e({target:"Number",proto:!0,forced:g},{toFixed:function(t){var a,i,e,r,c=n(this),l=s(t),g=[0,0,0,0,0,0],f="",h="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(a=d(c*u(2,69,1))-69,i=a<0?c*u(2,-a,1):c/u(2,a,1),i*=4503599627370496,a=52-a,a>0){p(g,0,i),e=l;while(e>=7)p(g,1e7,0),e-=7;p(g,u(10,e,1),0),e=a-1;while(e>=23)m(g,1<<23),e-=23;m(g,1<<e),p(g,1,1),m(g,2),h=v(g)}else p(g,0,i),p(g,1<<-a,0),h=v(g)+o.call("0",l);return l>0?(r=h.length,h=f+(r<=l?"0."+o.call("0",l-r)+h:h.slice(0,r-l)+"."+h.slice(r-l))):h=f+h,h}})}}]);