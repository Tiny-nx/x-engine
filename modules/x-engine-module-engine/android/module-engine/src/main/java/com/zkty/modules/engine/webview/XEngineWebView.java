package com.zkty.modules.engine.webview;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.alibaba.fastjson.JSONObject;
import com.anthonynsimon.url.URL;
import com.tencent.smtt.export.external.interfaces.WebResourceResponse;
import com.tencent.smtt.sdk.WebBackForwardList;
import com.tencent.smtt.sdk.WebSettings;
import com.tencent.smtt.sdk.WebView;
import com.tencent.smtt.sdk.WebViewClient;
import com.zkty.modules.dsbridge.CompletionHandler;
import com.zkty.modules.dsbridge.DWebView;
import com.zkty.modules.engine.XEngineContext;
import com.zkty.modules.engine.activity.XEngineWebActivity;
import com.zkty.modules.engine.exception.NoModuleIdException;
import com.zkty.modules.engine.manager.SchemeManager;
import com.zkty.modules.engine.utils.ImageUtils;
import com.zkty.modules.engine.utils.ToastUtils;
import com.zkty.modules.engine.utils.UrlUtils;
import com.zkty.modules.engine.utils.Utils;
import com.zkty.modules.engine.utils.XEngineWebActivityManager;

import java.io.InputStream;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class XEngineWebView extends DWebView {
    private Context mContext;

    public XEngineWebView(Context context) {
        super(context);
        this.mContext = context;
        init();
    }

    public XEngineWebView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.mContext = context;
        init();
    }

    public void init() {
        getSettings().setJavaScriptEnabled(true);
        getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);  //设置 缓存模式(true);
        getSettings().setAppCacheEnabled(false);
        getSettings().setSupportZoom(false);
        getSettings().setUseWideViewPort(true);
        getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        getSettings().setAllowFileAccess(true);
        getSettings().setAllowContentAccess(true);
        getSettings().setDomStorageEnabled(true);
        ViewGroup.LayoutParams params = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT);
        setLayoutParams(params);
        addJavascript();

        loadLocalImg();
        // setErrorPage();

        saveImg();
    }


    private void loadLocalImg() {
        setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView webView, String s) {
//                InputStream inputStream = Utils.getLocalImage(s);
//                Log.d("Xenging-url", s);
//                if (inputStream != null) {
//                    WebResourceResponse resourceResponse = new WebResourceResponse();
//                    resourceResponse.setData(inputStream);
//                    return resourceResponse;
//                }

                return super.shouldInterceptRequest(webView, s);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView webView, String s) {
                Log.d("ServeBrowserActivity", "url= " + s);
                if (s.contains("tenpay")) {

                    Map<String, String> webviewHead = new HashMap<>();
                    webviewHead.put("referer", "http://linli580.com");
                    webView.loadUrl(s, webviewHead);
                    return true;
                }
                if (s.startsWith("weixin://")) {
                    Intent intent = new Intent();
                    intent.setAction(Intent.ACTION_VIEW);
                    intent.setData(Uri.parse(s));
                    mContext.startActivity(intent);
                    return true;
                }
                if (s.startsWith("alipay://") || s.startsWith("alipays://")){
                    if (Utils.checkAliPayInstalled(mContext)) {
                        Intent intent = new Intent();
                        intent.setAction(Intent.ACTION_VIEW);
                        intent.setData(Uri.parse(s));
                        mContext.startActivity(intent);
                    } else {
                        ToastUtils.showNormalShortToast("请下载支付宝客户端");
                    }
                    return true;
                }
                if (s.startsWith("x-engine-json://")) {

                    try {
//                        String sss = "x-engine://share/share?title=title1&desc=desc1&link=link1&imageUrl=imageUrl1&type=wx&dataUrl=dataUrl1";
                        URL base = URL.parse(s);

                        String moduleName = base.getHost();
                        String method = base.getPath().replace("/", "");


                        Map<String, Collection<String>> params = base.getQueryPairs();
                        String args = null;
                        String callback = null;
                        if (params != null && params.size() > 0) {

                            if (params.containsKey("args") && params.get("args") != null && params.get("args").size() > 0) {
                                args = (String) params.get("args").toArray()[0];
                            }

                            if (params.containsKey("callback") && params.get("callback") != null && params.get("callback").size() > 0) {
                                callback = (String) params.get("callback").toArray()[0];

                            }
                        }

                        if (callback != null) {
                            callback = URLDecoder.decode(callback);
                        }

                        final String callbackUrl = callback;


                        JSONObject jsonObject = JSONObject.parseObject(URLDecoder.decode(args));

                        CompletionHandler completionHandler = new CompletionHandler() {
                            @Override
                            public void complete(Object retValue) {
                                String callbackTemp = callbackUrl;
                                callbackTemp = callbackTemp.replaceAll("\\{ret\\}", URLEncoder.encode(JSONObject.toJSONString(retValue)));
                                if (!TextUtils.isEmpty(callbackTemp)) {
                                    loadUrl(callbackTemp);
                                }
                            }

                            @Override
                            public void complete() {
                            }

                            @Override
                            public void setProgressData(Object value) {
                            }
                        };

                        SchemeManager.sharedInstance().invoke(moduleName, method, jsonObject, completionHandler);

                    } catch (Exception e) {
                        e.printStackTrace();
                    }

                    return true;
                }


                if (Build.VERSION.SDK_INT < 26) {
                    webView.loadUrl(s);
                    return true;
                }
                return false;
            }

        });
    }


    private void addJavascript() {
        List<String> modules = XEngineContext.getModules();
        for (String module : modules) {
            try {
                Class<?> classModule = Class.forName(module);
                Constructor<?> constructor = classModule.getDeclaredConstructor();
                constructor.setAccessible(true);
                Object object = constructor.newInstance();
                Method methodModule = classModule.getMethod("moduleId");
                methodModule.setAccessible(true);
                String tag = (String) methodModule.invoke(object);
                try {
                    Method setXEngineWebView = classModule.getMethod("setXEngineWebView", XEngineWebView.class);
                    setXEngineWebView.setAccessible(true);
                    setXEngineWebView.invoke(object, this);
                } catch (Exception e) {
                    Log.d("ZKWebView", e.toString());
                }
                if (tag == null) {
                    throw new NoModuleIdException("module: " + module + " moduleId cannot be null");
                } else {
                    addJavascriptObject(object, tag);
                    Log.d("ZKWebView", "module_id = " + tag);
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }

        }

    }


    //清缓存
    public void cleanCache() {
        clearAnimation();
        stopLoading();
//        setWebChromeClient(null);
//      setWebViewClient(null);
        clearCache(true);
        clearHistory();
        loadUrl("about:blank");
        historyCount = 0;
        this.destroy();

    }

    //回微应用首页
    public void goBackToIndexPage() {
        XEngineWebActivity activity = XEngineWebActivityManager.sharedInstance().getCurrent();
        if (activity != null) {
            activity.showScreenCapture(true);
            ViewGroup parent = (ViewGroup) getParent();
            if (parent != null) {
                parent.removeAllViews();
            }
        }
        WebBackForwardList backForwardList = copyBackForwardList();
        if (backForwardList != null && backForwardList.getSize() != 0) {
            if ("about:blank".equals(backForwardList.getItemAtIndex(0).getOriginalUrl())) {
                goBackOrForward(-backForwardList.getCurrentIndex() + 1);
            } else {
                goBackOrForward(-backForwardList.getCurrentIndex());
            }
            historyCount = 1;
        }

    }

    //回指定页面
    public void backToPage(String url) {
        XEngineWebActivity activity = XEngineWebActivityManager.sharedInstance().getCurrent();
        activity.showScreenCapture(true);
        ViewGroup parent = (ViewGroup) getParent();
        if (parent != null) {
            parent.removeAllViews();
        }
        while (canGoBack()) {
            if (UrlUtils.equalsWithoutArgs(getOriginalUrl(), url)) {
                break;
            }
            goBack();
        }
    }


    /**
     * webview复用模式。
     * 此字段代表wevbiew 的历史url数量
     * 每加载一次+1;
     * 仅用于微应用跳转间的回退，>0时暂不清理缓存以免出现白屏
     */
    private int historyCount = 0;
    private String currentUrl = null;

    @Override
    public void loadUrl(String url) {
        if (url.startsWith("/data")) url = "file://" + url;
        if (getOriginalUrl() != null && getOriginalUrl().equals(url)) {
            url = url.replaceAll("\\'", "");
            if (url.contains("?")) {
                url = url + "&timestamp=" + System.currentTimeMillis();
            } else {
                url = url + "?timestamp=" + System.currentTimeMillis();
            }

        }

        Log.d("DWebView", "url=" + url);
        super.loadUrl(url);
        this.currentUrl = url;
        historyCount++;

    }

    public void goBack() {
        super.goBack();
        historyCount--;

    }

    /**
     *
     */
    public void historyBack() {
        historyCount--;
    }

    public int getHistoryCount() {
        return this.historyCount;
    }

    public String getCurrentUrl() {
        return this.currentUrl;
    }

    private void saveImg() {

        setOnLongClickListener(view -> {
            HitTestResult result = getHitTestResult();
            switch (result.getType()) {

//                    case WebView.HitTestResult.SRC_IMAGE_ANCHOR_TYPE: // 带有链接的图片类型
                case HitTestResult.IMAGE_TYPE: // 处理长按图片的菜单项 base64类型

                    new Thread(() -> ImageUtils.savePictureByBase64(mContext, result.getExtra())).start();
                    break;

            }
            return false;
        });
    }

}
