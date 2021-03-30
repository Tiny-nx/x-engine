
import direct_http from './index.js'
import xengine from "@zkty-team/x-engine-module-engine";


  window.broadcastOn = (...args) => {
    xengine.broadcastOn(function (res) {
      document.getElementById("debug_text").innerText = JSON.stringify(res);
    });
  };

  window.broadcastOff = () => {
    xengine.broadcastOff();
  };

  window.triggerNativeBroadCast = () => {
    direct_http.triggerNativeBroadCast();
  };

  window.repeatReturn__event__ = () => {
    direct_http.repeatReturn__event__({
      __event__: function (res) {
        document.getElementById("debug_text").innerText =
          "支持多次返回" + JSON.stringify(res);
        return res;
      },
    });
  };

  window.repeatReturn__ret__ = () => {
    direct_http.repeatReturn__ret__({
      __ret__: function (res) {
        document.getElementById("debug_text").innerText =
          "支持多次返回" + JSON.stringify("__ret__:" + res);
        return res;
      },
    });
  };

  window.ReturnInPromiseThen = () => {
    direct_http.ReturnInPromiseThen().then((res) => {
      document.getElementById("debug_text").innerText =
        "then 只支持一次性返回" + JSON.stringify(res);
    });
  };

    