
import xxxx from './index.js'
import xengine from "@zkty-team/x-engine-core";

window.syncMethod = () => {
}
 document.getElementById("syncMethod").click()
    window.syncStringMethod = () => {
}
 document.getElementById("syncStringMethod").click()
    window.syncMethod1 = () => {
}
 document.getElementById("syncMethod1").click()
    window.asyncMethod = () => {
}
 document.getElementById("asyncMethod").click()
    window.test_syncStringMethod = () => {

  let val = xengine.api("com.zkty.jsi.xxxx", "syncStringMethod", "1111111");
  document.getElementById("debug_text").innerText = typeof val + ":" + val;
}
 document.getElementById("test_syncStringMethod").click()
    window.test_syncMethod = () => {

  let val = xengine.api("com.zkty.jsi.xxxx", "syncMethod", {
    title: "title",
    titleSize: 12,
  });
  document.getElementById("debug_text").innerText = typeof val + ":" + val;
}
 document.getElementById("test_syncMethod").click()
    window.test_syncMethod1 = () => {

  let val = xengine.api("com.zkty.jsi.xxxx", "syncMethod1");
}
 document.getElementById("test_syncMethod1").click()
    window.test_asyncMethod = () => {

  xengine.api("com.zkty.jsi.xxxx", "asyncMethod", {}, (val) => {
    document.getElementById("debug_text").innerText = typeof val + ":" + val;
  });
}
 document.getElementById("test_asyncMethod").click()
    
    