
import vuex from './index.js'
import xengine from "@zkty-team/x-engine-core";

window.test_set_abc_world = () => {

  xengine.api("com.zkty.jsi.vuex", "set",{
    key:'abc',
    val:'world'
  });
}
 document.getElementById("test_set_abc_world").click()
      window.test_get = () => {

  let val = xengine.api("com.zkty.jsi.vuex", "get",
    'abc',
  );
  document.getElementById("debug_text").innerText = val;
}
 document.getElementById("test_get").click()
      
    