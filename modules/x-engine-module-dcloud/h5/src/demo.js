
import dcloud from './index.js'

  window.openUniMP = ( ) => {
    dcloud.openUniMP({ "appId": "__UNI__86C4327" }).then((res) => {
      document.getElementById("debug_text").innerText = "ret:"+res;
    });
 };

  window.preloadUniMP = () => {
    dcloud.preloadUniMP().then((res) => {
      document.getElementById("debug_text").innerText = "ret:"+res;
    });
 };

  window.openUniMPWithArg = () => {
    dcloud.openUniMPWithArg().then((res) => {
      document.getElementById("debug_text").innerText = "ret:"+res;
    });
 };

    
