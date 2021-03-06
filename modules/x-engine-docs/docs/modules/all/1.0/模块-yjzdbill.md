

**基座扫描测试**
<div id='modulename' style='display:none'>yjzdbill</div> <img id='qrimg' src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://192.168.44.52:3000/docs/modules/all/dist/ui/index.html'></img>
<a id='qrlink' href="about:none">link of QR</a>



# JS


version: 0.1.20
``` bash
npm install @zkty-team/x-engine-module-yjzdbill
```



## queryBillDetail

帮广州添加的账单api

**demo**
``` js
 {
  window.queryBillDetail = () => {
    yjzdbill
      .queryBillDetail({
    businessCstNo:"13631095145",
    platMerCstNo: "1253152026819723265",
    tradeMerCstNo: "1253159474293014528",
    billNo:"022020121511175711404131412404",
    appScheme:'x-engine-m',
    payType:true,
        __ret__:(res)=>{
                  console.log(JSON.stringify(res));
        document.getElementById("debug_text").innerText = JSON.stringify(res);
        }
      })
  };
}
``` 

	
**参数说明**

| name                        | type      | optional | default   | comment  |
| --------------------------- | --------- | -------- | --------- |--------- |
| billId | string | 必填 |  | 业务系统订单id |
| payType | string | 必填 |  | 支付业务， 是否是 B端调用，  true为B， false为C |
| isRefund | string | 必填 |  | 账单类型取值为：0-全部 1-物业收费账单,2-月保续费账单,3-停车费账单,4-临时收费账单,5-零售,6-预缴费,7-旅游,8-家政,9-拎包，10-押金 |
| businessCstNo | string | 必填 |  | 会员标识 |


参数 object  定义
``` js


//帮广州添加的账单dto
interface NewBillDTO {

  //业务系统订单id
  billId: string;
  //支付业务， 是否是 B端调用，  true为B， false为C
  payType: string;
  //账单类型取值为：0-全部 1-物业收费账单,
2-月保续费账单,
3-停车费账单,
4-临时收费账单,
5-零售,
6-预缴费,
7-旅游,
8-家政,
9-拎包，10-押金
  isRefund: string;
  //会员标识
  businessCstNo: string;

}
``` 


---------------------
**返回值**
``` js


//返回状态dto
interface YJBillRetDTO {

  //返回状态
  billRetStatus: string;
  //状态信息
  billRetStatusMessage:string
  //用户是否主动取消支付
  isCancel?:boolean

}
``` 




## YJQRCodePayment

美居支付台

**demo**
``` js
 {
  window.YJQRCodePayment = () => {
    yjzdbill
      .YJQRCodePayment({
    businessCstNo:"13631095145",
    platMerCstNo: "1253152026819723265",
    tradeMerCstNo: "1253159474293014528",
    billNo:"022020121511175711404131412404",
    appScheme:'x-engine-m',
    payType:true,
        __ret__:(res)=>{
                  console.log(JSON.stringify(res));
        document.getElementById("debug_text").innerText = JSON.stringify(res);
        }
      })
  };
}
``` 

	
**参数说明**

| name                        | type      | optional | default   | comment  |
| --------------------------- | --------- | -------- | --------- |--------- |
| businessCstNo | string | 必填 |  | 会员标识 |
| platMerCstNo | string | 必填 |  | 预下单平台商户号 |
| tradeMerCstNo | string | 必填 |  | 预下单交易商户号 |
| billNo | string | 必填 |  | 业务系统订单号 |
| appScheme | string | optional | x-engine | 当前app注册的appScheme |
| payType | bool | optional |  | 支付业务， 是否是 B端调用，  true为B， false为C |


参数 object  定义
``` js


// 支付dto
interface YJBillDTO {

  //会员标识
  businessCstNo: string;
  //预下单平台商户号
  platMerCstNo: string;
  //预下单交易商户号
  tradeMerCstNo: string;
  //业务系统订单号
  billNo:string;
  //当前app注册的appScheme
  appScheme?:string;
  //支付业务， 是否是 B端调用，  true为B， false为C
  payType?:boolean;

}
``` 


---------------------
**返回值**
``` js


//返回状态dto
interface YJBillRetDTO {

  //返回状态
  billRetStatus: string;
  //状态信息
  billRetStatusMessage:string
  //用户是否主动取消支付
  isCancel?:boolean

}
``` 




## YJBillPayment

支付

**demo**
``` js
 {
  window.YJBillPayment = () => {
    yjzdbill
      .YJBillPayment({
    businessCstNo:"13631095145",
    platMerCstNo: "1253152026819723265",
    tradeMerCstNo: "1253159474293014528",
    billNo:"022020121511175711404131412404",
    appScheme:'x-engine-c',
    payType:false,
        __ret__:(res)=>{
                  console.log(JSON.stringify(res));
        document.getElementById("debug_text").innerText = JSON.stringify(res);
        }
      })
  };
}
``` 

	
**参数说明**

| name                        | type      | optional | default   | comment  |
| --------------------------- | --------- | -------- | --------- |--------- |
| businessCstNo | string | 必填 |  | 会员标识 |
| platMerCstNo | string | 必填 |  | 预下单平台商户号 |
| tradeMerCstNo | string | 必填 |  | 预下单交易商户号 |
| billNo | string | 必填 |  | 业务系统订单号 |
| appScheme | string | optional | x-engine | 当前app注册的appScheme |
| payType | bool | optional |  | 支付业务， 是否是 B端调用，  true为B， false为C |


参数 object  定义
``` js


// 支付dto
interface YJBillDTO {

  //会员标识
  businessCstNo: string;
  //预下单平台商户号
  platMerCstNo: string;
  //预下单交易商户号
  tradeMerCstNo: string;
  //业务系统订单号
  billNo:string;
  //当前app注册的appScheme
  appScheme?:string;
  //支付业务， 是否是 B端调用，  true为B， false为C
  payType?:boolean;

}
``` 


---------------------
**返回值**
``` js


//返回状态dto
interface YJBillRetDTO {

  //返回状态
  billRetStatus: string;
  //状态信息
  billRetStatusMessage:string
  //用户是否主动取消支付
  isCancel?:boolean

}
``` 




## YJBillRefund

退款

**demo**
``` js
 {
  window.YJBillRefund = () => {
    yjzdbill
      .YJBillRefund({
        refundOrderNo:'RFO16070658578',
        __event__: (res) => {
          document.getElementById("debug_text").innerText = JSON.stringify(res);
        },
      })
      .then((res) => {
        document.getElementById("debug_text").innerText = JSON.stringify(res);
      });
  };
}
``` 

	
**参数说明**

| name                        | type      | optional | default   | comment  |
| --------------------------- | --------- | -------- | --------- |--------- |
| refundOrderNo | string | 必填 |  | 退款订单编号 |


参数 object  定义
``` js

// 退款dto
interface YJBillRefundDTO {

  //退款订单编号
  refundOrderNo:string;

}
``` 


---------------------
**返回值**
``` js


//返回状态dto
interface YJBillRetDTO {

  //返回状态
  billRetStatus: string;
  //状态信息
  billRetStatusMessage:string
  //用户是否主动取消支付
  isCancel?:boolean

}
``` 




## YJBillList

账单中心

**demo**
``` js
{
  window.YJBillList = () => {
    yjzdbill
      .YJBillList({
    businessCstNo:"000001",
    roomNo:'001',
    userRoomNo:'001'
      })
      .then((res) => {
        document.getElementById("debug_text").innerText = JSON.stringify(res);
      });
  };
}
``` 

	
**参数说明**

| name                        | type      | optional | default   | comment  |
| --------------------------- | --------- | -------- | --------- |--------- |
| businessCstNo | string | 必填 |  | 会员标识 |
| roomNo | string | 必填 |  | 房屋编号 |
| userRoomNo | string | 必填 |  | 人防编号 |
| appScheme | string | optional | x-engine | 当前app注册的appScheme appc:x-engine-c appb:x-engine-b |
| payType | bool | 必填 |  | 支付业务， 是否是 B端调用，  true为B， false为C |
| billStatus | string | 必填 | 0 |  账单状态（取值为：0-全部  10-待支付  90-已完成） |
| billType | string | 必填 | 0 | 账单类型取值为：0-全部 1-物业收费账单,2-月保续费账单,3-停车费账单,4-临时收费账单,5-零售,6-预缴费,7-旅游,8-家政,9-拎包，10-押金 |


参数 object  定义
``` js


//账单中心dto
interface YJBillListDTO {

  //会员标识
  businessCstNo: string;
  //房屋编号
  roomNo:string;
  //人防编号
  userRoomNo:string;
  //当前app注册的appScheme appc:x-engine-c appb:x-engine-b
  appScheme?:string;
  //支付业务， 是否是 B端调用，  true为B， false为C
  payType:boolean;
  // 账单状态（取值为：0-全部  10-待支付  90-已完成）
  billStatus:string;
  //账单类型取值为：0-全部 1-物业收费账单,
2-月保续费账单,
3-停车费账单,
4-临时收费账单,
5-零售,
6-预缴费,
7-旅游,
8-家政,
9-拎包，10-押金
  billType:string;

}
``` 


---------------------
**无返回值**




## callWallet

调用钱包

**demo**
``` js
{
  window.callWallet = () => {
    yjzdbill
      .callWallet({
        platMerCstNo:"000001",
        businessCstName:'001',
        businessCstNo:'001',
        businessCstMobileNo:"00011",
        appScheme:"x-engine-c"
      })
      .then((res) => {
        document.getElementById("debug_text").innerText = JSON.stringify(res);
      });
  };
}
``` 

	
**参数说明**

| name                        | type      | optional | default   | comment  |
| --------------------------- | --------- | -------- | --------- |--------- |
| platMerCstNo | string | 必填 |  | 平台商户号 |
| businessCstName | string | 必填 |  | 个人用户姓名 |
| businessCstNo | string | 必填 |  | 个人用户业务系统客户号 |
| businessCstMobileNo | string | 必填 |  | 个人用户手机号 |
| appScheme | string | optional | x-engine-c | 当前app注册的appScheme |


参数 object  定义
``` js


//调用钱包dto
interface WalletDTO {

  //平台商户号
  platMerCstNo: string;
  //个人用户姓名
  businessCstName: string;
  //个人用户业务系统客户号
  businessCstNo: string;
  //个人用户手机号
  businessCstMobileNo:string;
  //当前app注册的appScheme
  appScheme?:string;

}
``` 


---------------------
**无返回值**



    

# iOS


# android


