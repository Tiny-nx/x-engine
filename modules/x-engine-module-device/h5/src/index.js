// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


import xengine from "@zkty-team/x-engine-module-engine";
import mock from "./mock";
function osCheck() {
  if (!xengine.hybrid) {
    return mock;
} 
  else {

    return  xengine.use("com.zkty.module.device", 
    [
  {
    "name": "getPhoneType",
    "default_args": {}
  },
  {
    "name": "getSystemVersion",
    "default_args": {}
  },
  {
    "name": "getUDID",
    "default_args": {}
  },
  {
    "name": "getBatteryLevel",
    "default_args": {}
  },
  {
    "name": "getPreferredLanguage",
    "default_args": {}
  },
  {
    "name": "getScreenWidth",
    "default_args": {}
  },
  {
    "name": "getScreenHeight",
    "default_args": {}
  },
  {
    "name": "getSafeAreaTop",
    "default_args": {}
  },
  {
    "name": "getSafeAreaBottom",
    "default_args": {}
  },
  {
    "name": "getSafeAreaLeft",
    "default_args": {}
  },
  {
    "name": "getSafeAreaRight",
    "default_args": {}
  },
  {
    "name": "getStatusHeight",
    "default_args": {}
  },
  {
    "name": "getNavigationHeight",
    "default_args": {}
  },
  {
    "name": "getTabBarHeight",
    "default_args": {}
  },
  {
    "name": "devicePhoneCall",
    "default_args": {
      "phoneNumber": "10086"
    }
  },
  {
    "name": "deviceSendMessage",
    "default_args": {
      "phoneNumber": "10086",
      "messageContent": "1111111111"
    }
  }
]
)}}

export default osCheck();
