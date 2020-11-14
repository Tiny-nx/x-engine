package com.zkty.modules.engine.utils;

import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import androidx.annotation.NonNull;

import com.zkty.modules.engine.activity.XEngineWebActivity;
import com.zkty.modules.engine.core.MicroAppLoader;
import com.zkty.modules.engine.webview.XOneWebViewPool;

import java.time.temporal.TemporalAccessor;
import java.util.ArrayList;
import java.util.List;

public class XEngineWebActivityManager {
    private static List<XEngineWebActivity> activityList;

    private XEngineWebActivity current;

    private XEngineWebActivityManager() {
        activityList = new ArrayList<>();
    }

    private static volatile XEngineWebActivityManager instance = null;

    public static XEngineWebActivityManager sharedInstance() {
        if (instance == null) {
            synchronized (XEngineWebActivityManager.class) {
                if (instance == null) {
                    instance = new XEngineWebActivityManager();
                }
            }
        }
        return instance;
    }

    /**
     * @param context
     * @param url     appid 或url
     */
    public void startH5EngineActivity(Context context, @NonNull String url) {
        XOneWebViewPool.IS_WEB = true;
//        XOneWebViewPool.sharedInstance().getUnusedWebViewFromPool().preLoad(url);
        Intent intent = new Intent(context, XEngineWebActivity.class);
        intent.putExtra(XEngineWebActivity.URL, url);
        context.startActivity(intent);

    }

    public void startMicroEngineActivity(Context context, @NonNull String microAppId, String path, String args, String version) {
        String indexUrl = null;
        if (TextUtils.isEmpty(version)) {
            indexUrl = MicroAppLoader.sharedInstance().getMicroAppByMicroAppId(microAppId);
        } else {
            indexUrl = MicroAppLoader.sharedInstance().getMicroAppByMicroAppIdAndVersion(microAppId, version);
        }
        Intent intent = new Intent(context, XEngineWebActivity.class);
        intent.putExtra(XEngineWebActivity.INDEX_URL, indexUrl);
        intent.putExtra(XEngineWebActivity.MICRO_APP_ID, microAppId);
        String url = TextUtils.isEmpty(path) || "null".equals(path) ? indexUrl : indexUrl + "#" + path;
        url = TextUtils.isEmpty(args) || "null".equals(args) ? url : url + "?" + args;

        intent.putExtra(XEngineWebActivity.URL, url);
        context.startActivity(intent);

    }

    //应用内路由
    public void navigatorPush(Context context, @NonNull String router, @NonNull String params) {

        XEngineWebActivity activity = XEngineWebActivityManager.sharedInstance().getCurrent();
        if (activity == null) {
            return;
        }
        activity.showScreenCapture(true);
        String url = MicroAppLoader.sharedInstance().getFullRouterUrl(router, params);
//        XOneWebViewPool.sharedInstance().getUnusedWebViewFromPool().preLoad(url);
        Intent intent = new Intent(context, XEngineWebActivity.class);
        intent.putExtra(XEngineWebActivity.URL, url);
        intent.putExtra(XEngineWebActivity.INDEX_URL, activity.getIndexUrl());
        intent.putExtra(XEngineWebActivity.MICRO_APP_ID, activity.getMicroAppId());
        context.startActivity(intent);

    }

    public void addActivity(XEngineWebActivity activity) {
        activityList.add(activity);
        current = activity;
    }

    public void setCurrent(XEngineWebActivity current) {
        this.current = current;
    }

    public XEngineWebActivity getCurrent() {
        return current;
    }

    public void clearActivity(XEngineWebActivity activity) {
        if (getLastActivity() != null) {
            if (activity.getMicroAppId() != null && !activity.getMicroAppId().equals(getLastActivity().getMicroAppId())) {
                activity.getXEngineWebView().cleanCache();
            }
        }
        activityList.remove(activity);
        if (activityList.isEmpty()) {
            XOneWebViewPool.sharedInstance().cleanWebView();
        }
    }

    public void exitAllXWebPage() {
        XEngineWebActivity current = XEngineWebActivityManager.sharedInstance().getCurrent();
        current.showScreenCapture(true);
        XOneWebViewPool.sharedInstance().cleanWebView();

        for (XEngineWebActivity activity : activityList) {
            activity.finish();
        }
    }

    public void backToIndexPage() {
        XEngineWebActivity activity = XEngineWebActivityManager.sharedInstance().getCurrent();
        activity.showScreenCapture(true);
        for (int i = 0; i < activityList.size(); i++) {
            if (i != 0) {
                activityList.get(i).finish();
            }
        }
        XEngineWebActivity current = XEngineWebActivityManager.sharedInstance().getCurrent();

        XOneWebViewPool.sharedInstance().getUnusedWebViewFromPool(current.getMicroAppId()).goBackToIndexPage();
    }

    public void backToHistoryPage(String url) {
        for (int i = activityList.size() - 1; i > 0; i--) {
            if (activityList.get(i).getWebUrl().contains(url)) {
                return;
            }
            activityList.get(i).finish();
        }
    }

    public XEngineWebActivity getLastActivity() {
        if (activityList.size() < 2) {
            return null;
        }
        return activityList.get(activityList.size() - 2);
    }

}