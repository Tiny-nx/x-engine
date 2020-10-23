统一所有的跳转, router 与 nav 在路由功能有一些重叠的地方. 但 nav 更加关注于微应用内的路由. 而 router 更关注应用间的路由.



##### 规则

- 跳 h5
  - https://..
  - http://..
- 跳微应用
  - appid + 路径 + 参数
- 跳 uniapp
  - appid + 路径 + 参数
- 跳 [微信小程序](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Launching_a_Mini_Program/iOS_Development_example.html)
  - userName + 路径 + 参数
- 跳原生界面
  - iOS
    - 类名 + 参数
  - android
    - 类名 + 参数

![image-20201010170737644](assets/image-20201010170737644.png)

参数:

````
{
  type: string (native | h5 | microapp | uni | wx ),  // 类型
  uri:  string (url | appid | wx_username | 'XViewController,XActivity'), // 资源名
  path: string, // 路径 /abc  /abc?a=1
  args: string  // 暂时未使用, 简单参数通过 path 传递
}
````

> 注： 如果 uni app 需要支持统一路由，则需要将 uni 请求代理到统一路由模块。



|          | h5   | microApp | wx   | native | uni  |
| -------- | ---- | -------- | ---- | ------ | ---- |
| h5       | -    | -        | -    | -      | -    |
| microApp | 支持 | 支持     | 支持 | 支持   | 支持 |
| wx       | -    | -        | -    | -      | -    |
| native   | 支持 | 支持     | 支持 | 支持   | 支持 |
| uni      | -    | -        | -    | -      | -    |



[跳微信小程序需知](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Launching_a_Mini_Program/Launching_a_Mini_Program.html)

**跳转规则**

1. 对于已通过认证的开放平台账号，其移动应用可以跳转至任何合法的小程序，且不限制跳转的小程序数量。
2. 对于未通过认证的开放平台账号，其移动应用仅可以跳转至同一开放平台账号下小程序。

>  注意：若移动应用未上架，则最多只能跳转小程序100次/天，用于满足调试需求。



外部需求:

参看: [opensdk 接入指南](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)

