package com.zkty.nativ.viewer;

import com.anthonynsimon.url.URL;
import com.zkty.nativ.core.NativeModule;
import com.zkty.nativ.core.XEngineApplication;
import com.zkty.nativ.jsi.view.XEngineWebActivityManager;

import java.util.Map;

public class Nativeviewer extends NativeModule implements Iviewer {

    @Override
    public String moduleId() {
        return "com.zkty.native.viewer";
    }

    @Override
    public void afterAllNativeModuleInited() {

    }

    @Override
    public void openFileReader(String filePath, CallBack callBack) {
        try {
            push(filePath);
            callBack.success("打开成功");
        }catch (Exception e){
            callBack.success("打开失败");
        }

    }

    public static void push(String url) {
        try {
            URL url1 = URL.parse(url);
            String scheme = url1.getScheme();
            //URL解析的 fragment 包含query，eg：/mall2/orderlist?selectedIndex=0，故query传null
            push(scheme, url1.getHost(), url1.getPath(), url1.getFragment(), null, null);
        } catch (com.anthonynsimon.url.exceptions.MalformedURLException e) {
            e.printStackTrace();
        }


    }

    public static void push(String scheme, String host, String pathname, String fragment, Map<String, String> query, Map<String, String> params) {
        String protocol = "https:";
        if ("omp".equals(scheme)) protocol = "http:";
        if ("http".equals(scheme)) protocol = "http:";
        if ("https".equals(scheme)) protocol = "https:";
        if ("microapp".equals(scheme)) protocol = "file:";

        boolean hideNavbar = params != null && params.containsKey("hideNavbar") && Boolean.parseBoolean(String.valueOf(params.get("hideNavbar")));
        XEngineWebActivityManager.sharedInstance().startXEngineActivity(XEngineApplication.getCurrentActivity(), protocol, host, pathname, fragment, query, hideNavbar);

    }

}
