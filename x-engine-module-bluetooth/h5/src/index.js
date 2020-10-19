// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


import xengine from "@zkty-team/x-engine-module-engine";
import mock from "./mock";
function osCheck() {
  if (!xengine.hybrid) {
    return mock;
} 
  else {

    return  xengine.use("com.zkty.module.bluetooth", 
    [
  {
    "name": "initBluetooth",
    "default_args": {
      "__event__": null
    }
  },
  {
    "name": "scanBluetoothDevice",
    "default_args": {
      "__event__": null
    }
  },
  {
    "name": "closeBluetoothDevice",
    "default_args": {}
  },
  {
    "name": "linkBluetoothDevice",
    "default_args": {
      "deviceID": "9E7A382F-1BBD-2431-D7B5-6415DDA4BEFB",
      "__event__": null
    }
  },
  {
    "name": "cancelLinkBluetoothDevice",
    "default_args": {
      "deviceID": "9E7A382F-1BBD-2431-D7B5-6415DDA4BEFB",
      "__event__": null
    }
  },
  {
    "name": "discoverServices",
    "default_args": {
      "deviceID": "9E7A382F-1BBD-2431-D7B5-6415DDA4BEFB",
      "__event__": null
    }
  },
  {
    "name": "discoverCharacteristics",
    "default_args": {
      "deviceID": "1A5D368E-68E3-069F-D963-E3781097CCD1",
      "serviceId": "FFF0",
      "__event__": null
    }
  },
  {
    "name": "writeValueForCharacteristic",
    "default_args": {
      "characteristicId": "FFF1",
      "__event__": null
    }
  },
  {
    "name": "readCharacteristic",
    "default_args": {
      "characteristicId": "FFF1",
      "__event__": null
    }
  }
]
)}}

export default osCheck();
