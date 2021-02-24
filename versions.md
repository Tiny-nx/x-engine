

# 当前版本冲突

## 账单 SDK

| 账单 SDK              | app 内库版本            | 平台 | 问题                | 方案         |
| --------------------- | ----------------------- | ---- | ------------------- | ------------ |
| WechatOpenSDK (1.8.5) | WechatOpenSDK (1.8.7.1) | iOS  | api 不兼容          | 待解决       |
| AFNetworking (3.0)    | AFNetworking (4.0.1)    | iOS  | api 不兼容,请求崩溃 | 供应商已解决 |





# iOS
## 最低支持系统版本

iOS 10.0

## 支持 CPU 架构

arm64,armv7

## 依赖库与版本

- AFNetworking (4.0.1)
- AlipaySDK-iOS (15.7.9)
- BANativeContainer (0.0.1)
- BARouter (0.0.1)
- Base64 (1.1.2)
- Bugly (2.5.71)
- DeviceManage (0.0.1)
- dsBridge (3.0.6)
- DZNEmptyDataSet (1.8.1)
- FFRouter (1.1.1)
- FMDB/SQLCipher (2.7.5)
- GCDWebServer (3.5.4)
- IQKeyboardManager (6.5.6)
- JCore (2.3.6)
- JJException (0.2.9)
- JPush (3.3.6)
- JSONModel (1.8.0)
- Masonry (1.3.0)
- MBProgressHUD (1.2.0)
- MJExtension (3.2.2)
- MJRefresh (3.5.0)
- Reachability (3.2)
- ReactiveObjC (3.1.1)
- SDWebImage (5.9.1)
- SensorsAnalyticsSDK/core (2.1.8)
- SQLCipher (4.4.1)
- SSZipArchive (2.2.3)
- SVProgressHUD (2.2.5)
- UniBoost (0.1.0)
- WechatOpenSDK (1.8.7.1) 
- GCDWebServer (3.0)
- XLAPPDependencies (0.0.1)
- XLHH5Container (0.0.1)
- XLHolder (1.0.1)
- XLinkRestUtil (1.0.1)
- XLKit (0.0.1)
- XLLog (0.0.1)
- XLPlugins (0.0.1)
- XLScan (0.0.1)
- XLTheme (0.0.1)
- YYModel (1.0.4)
- YYText (1.0.7)
- YZAppSDK (7.0.2)
- ZBarSDK (1.5.2)



# android

## 最低支持系统版本
``` gradle
compileSdkVersion 30
buildToolsVersion "29.0.3"

defaultConfig {
  minSdkVersion 19
  targetSdkVersion 30
}
```

## 依赖库与版本

- implementation 'androidx.appcompat:appcompat:1.2.0'
- implementation 'androidx.annotation:annotation:1.1.0'
- implementation 'com.github.bumptech.glide:glide:4.9.0'
- implementation 'com.github.yalantis:ucrop:2.2.6'
- implementation 'com.squareup.retrofit2:retrofit:2.3.0'
- implementation 'com.squareup.retrofit2:converter-gson:2.3.0'
- implementation 'com.squareup.retrofit2:adapter-rxjava:2.3.0'
- implementation 'com.squareup.okhttp3:logging-interceptor:3.8.1'
- implementation 'com.squareup.okhttp3:okhttp:3.8.1'
- implementation 'io.reactivex:rxjava:1.3.0'
- implementation 'io.reactivex:rxandroid:1.2.1'
- implementation 'com.alibaba:fastjson:1.2.73'
- implementation 'com.facebook.fresco:fresco:1.13.0'
- implementation 'com.facebook.fresco:animated-gif:1.13.0'
- implementation 'org.jetbrains:annotations:15.0'
- implementation 'com.tencent:mmkv-static:1.2.4'
- implementation 'androidx.constraintlayout:constraintlayout:1.1.3'
- implementation 'com.github.yalantis:ucrop:2.2.6'
- implementation 'com.tencent.mm.opensdk:wechat-sdk-android-without-mta:+'
- implementation 'cn.bingoogolapple:bga-qrcode-zxing:1.3.7'
- testImplementation 'junit:junit:4.12'
- androidTestImplementation 'androidx.test.ext:junit:1.1.1'
- androidTestImplementation 'androidx.test.espresso:espresso-core:3.2.0'
- api 'com.gyf.barlibrary:barlibrary:2.3.0'
- api 'androidx.recyclerview:recyclerview:1.1.0'
- api 'com.jude:swipebackhelper:3.1.2'
- api 'com.github.anthonynsimon:jurl:v0.4.2'
- api 'com.github.lihangleo2:ShadowLayout:3.1.4'
- api 'org.greenrobot:eventbus:3.1.1'
- api 'com.android.support:appcompat-v7:28.0.0'
- api 'com.android.support:multidex:1.0.3'
- api 'com.tencent.mm.opensdk:wechat-sdk-android-without-mta:+'
- api 'androidx.recyclerview:recyclerview:1.1.0'
