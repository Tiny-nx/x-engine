// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


import xengine from "@zkty-team/x-engine-module-engine";
import mock from "./mock";
function osCheck() {
  if (false) {
    return mock;
} 
  else {

    return  xengine.use("com.zkty.module.secrect", 
    [
  {
    "name": "broadcastOn",
    "default_args": {}
  },
  {
    "name": "broadcastOff",
    "default_args": {}
  },
  {
    "name": "triggerNativeBroadCast",
    "default_args": {}
  },
  {
    "name": "repeatReturn__event__",
    "default_args": null
  },
  {
    "name": "repeatReturn__ret__",
    "default_args": null
  },
  {
    "name": "ReturnInPromiseThen",
    "default_args": null
  },
  {
    "name": "noArgNoRet",
    "default_args": {}
  },
  {
    "name": "noArgRetPrimitive",
    "default_args": {}
  },
  {
    "name": "noArgRetSheetDTO",
    "default_args": {}
  },
  {
    "name": "haveArgNoRet",
    "default_args": {
      "title": "abc"
    }
  },
  {
    "name": "haveArgRetPrimitive",
    "default_args": {
      "title": "abc"
    }
  },
  {
    "name": "haveArgRetSheetDTO",
    "default_args": null
  },
  {
    "name": "anonymousType",
    "default_args": {
      "age": 12,
      "name": "zk",
      "books": [
        "1",
        "2",
        "3"
      ],
      "complexArg": {
        "a": 1,
        "name": "zk2"
      }
    }
  }
]
)}}

export default osCheck();
