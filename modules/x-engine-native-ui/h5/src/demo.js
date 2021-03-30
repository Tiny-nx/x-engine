
import ui from './index.js'
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
    ui.triggerNativeBroadCast();
  };

  window.repeatReturn__event__ = () => {
    ui.repeatReturn__event__({
      __event__: function (res) {
        document.getElementById("debug_text").innerText =
          "支持多次返回" + JSON.stringify(res);
        return res;
      },
    });
  };

  window.repeatReturn__ret__ = () => {
    ui.repeatReturn__ret__({
      __ret__: function (res) {
        document.getElementById("debug_text").innerText =
          "支持多次返回" + JSON.stringify("__ret__:" + res);
        return res;
      },
    });
  };

  window.ReturnInPromiseThen = () => {
    ui.ReturnInPromiseThen().then((res) => {
      document.getElementById("debug_text").innerText =
        "then 只支持一次性返回" + JSON.stringify(res);
    });
  };

    