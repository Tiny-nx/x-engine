// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


import xengine from "@zkty-team/x-engine-module-engine";
import mock from "./mock";
function osCheck() {
  if (false) {
    return mock;
} 
  else {

    return  xengine.use("com.zkty.module.localstorage", 
    [
  {
    "name": "set",
    "default_args": {
      "key": "key",
      "value": "value",
      "isPublic": false
    }
  },
  {
    "name": "get",
    "default_args": {
      "key": "key",
      "isPublic": false
    }
  },
  {
    "name": "remove",
    "default_args": {
      "key": "key",
      "isPublic": false
    }
  },
  {
    "name": "removeAll",
    "default_args": {
      "isPublic": false
    }
  },
  {
    "name": "_testRemoveAllPublic",
    "default_args": {
      "isPublic": true
    }
  },
  {
    "name": "_testSetPublicStorage",
    "default_args": null
  },
  {
    "name": "_testGetPublicStorage",
    "default_args": null
  },
  {
    "name": "_testSetLocalStorage",
    "default_args": null
  },
  {
    "name": "_testGetLocalStorage",
    "default_args": null
  }
]
)}}

export default osCheck();