// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


import xengine from "@zkty-team/x-engine-module-engine";
import mock from "./mock";
function osCheck() {
  if (false) {
    return mock;
} 
  else {

    return  xengine.use("com.zkty.module.router", 
    [
  {
    "name": "openTargetRouter",
    "default_args": {
      "type": "h5",
      "uri": "http://192.168.10.51:8081/index.html",
      "path": "",
      "hideNavbar": false
    }
  },
  {
    "name": "_testh5",
    "default_args": {}
  },
  {
    "name": "_testnative",
    "default_args": {}
  },
  {
    "name": "_testmicroapp",
    "default_args": {}
  },
  {
    "name": "_testmicroapp_version1",
    "default_args": {}
  },
  {
    "name": "_testmicroapp_version_not_exist",
    "default_args": {}
  },
  {
    "name": "_testmicroapp_path",
    "default_args": {}
  },
  {
    "name": "_testmicroapp_path_version1",
    "default_args": {}
  },
  {
    "name": "_testmicroapp_path_query",
    "default_args": {}
  },
  {
    "name": "_testuni",
    "default_args": {}
  }
]
)}}

export default osCheck();
