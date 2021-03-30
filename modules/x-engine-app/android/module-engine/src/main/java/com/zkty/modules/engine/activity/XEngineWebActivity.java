package com.zkty.modules.engine.activity;

import android.Manifest;
import android.app.Activity;
import android.app.Instrumentation;
import android.content.ClipData;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.PersistableBundle;
import android.os.StrictMode;
import android.text.TextUtils;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.alibaba.fastjson.JSON;
import com.gyf.barlibrary.ImmersionBar;
import com.lihang.ShadowLayout;
import com.tencent.smtt.sdk.ValueCallback;
import com.tencent.smtt.sdk.WebBackForwardList;
import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebView;
import com.zkty.modules.engine.dto.PermissionDto;
import com.zkty.modules.engine.imp.ImagePicker;
import com.zkty.modules.engine.manager.MicroAppPermissionManager;
import com.zkty.modules.engine.utils.ImageUtils;
import com.zkty.modules.engine.utils.KeyBoardUtils;
import com.zkty.modules.engine.utils.PermissionsUtils;
import com.zkty.modules.engine.utils.StatusBarUtil;
import com.zkty.modules.engine.utils.UrlUtils;
import com.zkty.modules.engine.utils.XEngineMessage;
import com.zkty.modules.engine.utils.XEngineWebActivityManager;
import com.zkty.modules.engine.view.CameraDialog;
import com.zkty.modules.engine.view.XEngineNavBar;
import com.zkty.modules.engine.webview.XEngineWebView;
import com.zkty.modules.engine.webview.XOneWebViewPool;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import module.engine.R;

public class XEngineWebActivity extends BaseXEngineActivity {
    private static final String TAG = XEngineWebActivity.class.getSimpleName();

    protected XEngineWebView mWebView;
    private RelativeLayout mRoot;
    protected XEngineNavBar xEngineNavBar;
    private ImageView ivScreen;
    private ShadowLayout navShadow;

    private ProgressBar mProgressBar;

    public static final String URL = "x_engine_url";
    public static final String MICRO_APP_ID = "micro_app_id";
    public static final String HIDE_NAV_BAR = "hideNavBar";
    public static final String MICRO_APP_VERSION = "micro_app_version";
    public static final String INDEX_URL = "index_url";
    public static final String ROUTER = "router_path";
    private String url;
    private String indexUrl;
    private String mMicroAppId;
    private String router;
    private String version;
    private boolean hideNavBar = false;//是否隐藏NavBar

    //    private ArrayList<LifecycleListener> lifecycleListeners;

    private boolean isFirst = true;
    private boolean isResume = false;
    private MyWebChromeClient mWebChromeClient;
    private android.webkit.ValueCallback<Uri> mUploadMessage;
    private android.webkit.ValueCallback<Uri[]> mUploadCallbackAboveL;
    private PermissionsUtils permissionsUtils = new PermissionsUtils();
    public static final int FILECHOOSER_RESULTCODE = 10;// 表单的结果回调




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        SwipeBackHelper.onCreate(this);


        hideNavBar = getIntent().getBooleanExtra(HIDE_NAV_BAR, false);
        if (hideNavBar) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                Window window = getWindow();
                window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS
                        | WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
                window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
                window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
                window.setStatusBarColor(Color.TRANSPARENT);
                window.setNavigationBarColor(Color.TRANSPARENT);
            } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                Window window = getWindow();
                window.setFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS,
                        WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            }
            StatusBarUtil.StatusBarLightMode(this);
        } else {
            ImmersionBar.with(this)
                    .fitsSystemWindows(true)
                    .statusBarColor(R.color.white)
                    .statusBarDarkFont(true).init();

        }

        setContentView(R.layout.activity_engine_webview);
        //关闭 关于文件uri暴露的检测（FileUriExposedException）
        StrictMode.VmPolicy.Builder builder = new StrictMode.VmPolicy.Builder();
        StrictMode.setVmPolicy(builder.build());
        builder.detectFileUriExposure();
        EventBus.getDefault().register(this);
        mWebChromeClient = new MyWebChromeClient();
        xEngineNavBar = findViewById(R.id.nav_bar);
        navShadow = findViewById(R.id.nav_shadow);
        mRoot = findViewById(R.id.content_root);
        ivScreen = findViewById(R.id.iv_screen);
        mProgressBar = findViewById(R.id.pb_web_activity);
        mMicroAppId = getIntent().getStringExtra(MICRO_APP_ID);
        indexUrl = getIntent().getStringExtra(INDEX_URL);
        version = getIntent().getStringExtra(MICRO_APP_VERSION);
        mWebView = XOneWebViewPool.sharedInstance().getUnusedWebViewFromPool(mMicroAppId);

        xEngineNavBar.setVisibility(hideNavBar ? View.GONE : View.VISIBLE);
        navShadow.setVisibility(hideNavBar ? View.GONE : View.VISIBLE);
        xEngineNavBar.setLeftListener(view -> {
            backUp();
        });
        if (TextUtils.isEmpty(mMicroAppId)) {
            xEngineNavBar.setLeft2Listener(view -> finish());
        } else {
            PermissionDto dto = MicroAppPermissionManager.sharedInstance().getPermission(mMicroAppId, version);
            mWebView.setPermission(dto);
        }

        ((RelativeLayout) findViewById(R.id.rl_root)).addView(mWebView, 0);
        XEngineWebActivityManager.sharedInstance().addActivity(this);
        lifecycleListeners = new LinkedHashSet<>();
        if (getIntent().hasExtra(URL)) {
            url = getIntent().getStringExtra(URL);
            mWebView.loadUrl(url);
        }

        if (getIntent().hasExtra(ROUTER)) {
            router = getIntent().getStringExtra(ROUTER);
        }

        url = TextUtils.isEmpty(mWebView.getOriginalUrl()) ? mWebView.getUrl() : mWebView.getOriginalUrl();
    }


    @Override
    public void onPostCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onPostCreate(savedInstanceState, persistentState);
//        SwipeBackHelper.onPostCreate(this);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == ImageUtils.RESULT_CODE_PHOTO) {
            if (null == mUploadMessage && null == mUploadCallbackAboveL) return;
            Uri result = data == null ? null : data.getData();
            if (mUploadCallbackAboveL != null) {
                onActivityResultAboveL(requestCode, resultCode, data);
            } else if (mUploadMessage != null) {
                result = ImageUtils.geturi(data, this);
                if (result == null) {
                    return;
                }
                mUploadMessage.onReceiveValue(result);
                mUploadMessage = null;
            }
        } else if (requestCode == ImageUtils.RESULT_CODE_CAMERA) {
            Uri uri = null;

            ImageUtils.afterOpenCamera(ImageUtils.PHOTO_PATH, this);
            uri = ImageUtils.PHOTO_URI;
            if (mUploadCallbackAboveL != null) {
                Uri[] uris = new Uri[1];
                uris[0] = uri;
                mUploadCallbackAboveL.onReceiveValue(uris);
            } else if (mUploadMessage != null) {
                mUploadMessage.onReceiveValue(uri);
                mUploadMessage = null;
            }
        } else if (requestCode == FILECHOOSER_RESULTCODE) {
            Uri result = data == null || resultCode != RESULT_OK ? null
                    : data.getData();
            if (null != mUploadMessage) {
                mUploadMessage.onReceiveValue(result);
                mUploadMessage = null;
            }
            if (null != mUploadCallbackAboveL) {
                Uri[] results = new Uri[1];
                results[0] = result;
                mUploadCallbackAboveL.onReceiveValue(results);
                mUploadCallbackAboveL = null;
            }
        }

        if (lifecycleListeners != null) {
            Iterator<LifecycleListener> iterator = lifecycleListeners.iterator();
            while (iterator.hasNext()) {
                iterator.next().onActivityResult(requestCode, resultCode, data);
            }
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        permissionsUtils.onRequestPermissionsResult(this, requestCode, permissions, grantResults);
        if (lifecycleListeners != null) {
            Iterator<LifecycleListener> iterator = lifecycleListeners.iterator();
            while (iterator.hasNext()) {
                iterator.next().onRequestPermissionsResult(requestCode, permissions, grantResults);
            }
        }
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(TAG, "onRestart()--" + (lifecycleListeners != null ? lifecycleListeners.size() : 0));
        if (lifecycleListeners != null && !lifecycleListeners.isEmpty()) {
            Iterator<LifecycleListener> iterator = lifecycleListeners.iterator();
            while (iterator.hasNext()) {
                iterator.next().onRestart();
            }
        }
    }

    @Override
    protected void onResume() {
        isResume = true;
        mWebView.setWebChromeClient(mWebChromeClient);
        if (isFirst) {
            isFirst = false;
        } else {
            new Handler().postDelayed(() ->
                            showScreenCapture(false)
                    , 400);
            if (XOneWebViewPool.IS_SINGLE) {
                if (mWebView.getParent() != null) {
                    ((ViewGroup) mWebView.getParent()).removeView(mWebView);
                }
                ((RelativeLayout) findViewById(R.id.rl_root)).addView(mWebView, 0);
            }
        }

        super.onResume();
        XEngineWebActivityManager.sharedInstance().setCurrent(this);
        if (lifecycleListeners != null && !lifecycleListeners.isEmpty()) {
            Iterator<LifecycleListener> iterator = lifecycleListeners.iterator();
            while (iterator.hasNext()) {
                iterator.next().onResume();
            }
        }

    }

    @Override
    protected void onPause() {
        super.onPause();
        isResume = false;
        Log.d(TAG, "onPause()--" + (lifecycleListeners != null ? lifecycleListeners.size() : 0));
        if (lifecycleListeners != null && !lifecycleListeners.isEmpty()) {
            Iterator<LifecycleListener> iterator = lifecycleListeners.iterator();
            while (iterator.hasNext()) {
                iterator.next().onPause();
            }
        }
    }


    @Override
    protected void onStop() {
        super.onStop();
        Log.d(TAG, "onStop()--" + (lifecycleListeners != null ? lifecycleListeners.size() : 0));
        if (lifecycleListeners != null && !lifecycleListeners.isEmpty()) {
            Iterator<LifecycleListener> iterator = lifecycleListeners.iterator();
            while (iterator.hasNext()) {
                iterator.next().onStop();
            }
        }
    }

    @Override
    protected void onDestroy() {
        if (lifecycleListeners != null && !lifecycleListeners.isEmpty()) {
            Iterator<LifecycleListener> iterator = lifecycleListeners.iterator();
            while (iterator.hasNext()) {
                iterator.next().onDestroy();
            }
        }

        if (lifecycleListeners != null) {
            lifecycleListeners.clear();
        }
        XEngineWebActivityManager.sharedInstance().clearActivity(this);
        if (TextUtils.isEmpty(mMicroAppId)) {
            XOneWebViewPool.sharedInstance().removeWebView(mWebView);
            mWebView.destroy();
        }
        EventBus.getDefault().post(new XEngineMessage(XEngineMessage.TYPE_SHOW_TABBAR));
        EventBus.getDefault().unregister(this);

        super.onDestroy();
//        SwipeBackHelper.onDestroy(this);

    }

    public String getWebUrl() {
        return this.url;
    }

    public String getIndexUrl() {
        return this.indexUrl;
    }

    public String getMicroAppId() {
        return this.mMicroAppId;
    }

    public XEngineNavBar getXEngineNavBar() {
        return this.xEngineNavBar;

    }

    public XEngineWebView getXEngineWebView() {
        return this.mWebView;

    }

    public void backUp() {

        Log.d(TAG, "backUp()");
        //模拟 KeyEvent.ACTION_DOWN事件,调用onKeyDown
        new Thread(new Runnable() {
            public void run() {
                // 开线程调用方法
                try {
                    Instrumentation inst = new Instrumentation();
                    inst.sendKeyDownUpSync(KeyEvent.KEYCODE_BACK);

                } catch (Exception e) {
                    // 异常catch
                }
            }
        }).start();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {

            if (TextUtils.isEmpty(mMicroAppId)) {
                if (mWebView.canGoBack()) {
                    mWebView.goBack();
                    return true;
                }
            } else {

                if (mWebView.canGoBack()) {

                    XEngineWebActivity lastActivity = XEngineWebActivityManager.sharedInstance().getLastActivity();
                    if (lastActivity != null) {

                        if (TextUtils.isEmpty(lastActivity.getRouter())) {
                            mWebView.goBackToIndexPage();
                        } else {
                            WebBackForwardList backForwardList = mWebView.copyBackForwardList();
                            if (backForwardList != null && backForwardList.getSize() != 0) {
                                int index = 0;
                                for (int i = backForwardList.getCurrentIndex(); i > -1; i--) {
                                    String url = backForwardList.getItemAtIndex(i).getOriginalUrl();
                                    if (lastActivity.getRouter().equals(UrlUtils.getRouterFormUrl(url))) {
                                        break;
                                    }
                                    index++;
                                }
                                mWebView.goBackOrForward(-index);
                            }
                        }

                    }

                } else {
                    mWebView.historyBack();
                }

                finish();
                return true;

            }
        }
        return super.onKeyDown(keyCode, event);
    }

    public void showScreenCapture(boolean isShow) {
        if (isShow) {
            Bitmap bitmap = captureView(mRoot);
            ivScreen.setImageBitmap(bitmap);
        }
        ivScreen.setVisibility(isShow ? View.VISIBLE : View.GONE);
        url = mWebView.getOriginalUrl();
    }

    private Bitmap captureView(View view) {
        // 根据View的宽高创建一个空的Bitmap
        Bitmap bitmap = Bitmap.createBitmap(
                view.getWidth(),
                view.getHeight(),
                Bitmap.Config.RGB_565);
        // 利用该Bitmap创建一个空的Canvas
        Canvas canvas = new Canvas(bitmap);
        // 绘制背景(可选)
        canvas.drawColor(Color.WHITE);
        // 将view的内容绘制到我们指定的Canvas上
        view.draw(canvas);
        return bitmap;
    }

    @Override
    public void finish() {
        super.finish();
        KeyBoardUtils.closeKeybord(xEngineNavBar, this);
        showScreenCapture(true);
    }


    public void finishWhitNoAnim() {
        super.finish();
        KeyBoardUtils.closeKeybord(xEngineNavBar, this);
        overridePendingTransition(0, 0);

    }

//    private boolean isFirstReceiveTitle = true;

    class MyWebChromeClient extends WebChromeClient {

        @Override
        public void onReceivedTitle(WebView webView, String title) {
            super.onReceivedTitle(webView, title);
            if (!TextUtils.isEmpty(webView.getUrl()) && webView.getUrl().startsWith("http") && !TextUtils.isEmpty(title) && xEngineNavBar != null) {
//                if (xEngineNavBar.getTitle() == null || !isFirstReceiveTitle)//初次加载切已被设置title
//                xEngineNavBar.setTitle(title, null, null);
                xEngineNavBar.setLeftTitle(title);
            }
//            isFirstReceiveTitle = false;
        }

        @Override
        public void onProgressChanged(WebView webView, int i) {

            mProgressBar.setVisibility(View.VISIBLE);
            mProgressBar.setProgress(i);
            if (i == 100) {
                mProgressBar.setVisibility(View.GONE);
            }
            super.onProgressChanged(webView, i);
        }

        @Override
        public void openFileChooser(ValueCallback<Uri> valueCallback, String s, String s1) {
            mUploadMessage = valueCallback;
            showSelectDialog();
        }

        @Override
        public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> valueCallback, FileChooserParams fileChooserParams) {
            mUploadCallbackAboveL = valueCallback;
            String[] acceptTypes = fileChooserParams.getAcceptTypes();
            if (acceptTypes.length > 0 && ImageUtils.isImage(acceptTypes[0])) {
                showSelectDialog();
            } else {
                choseFile();
            }
            return true;

        }

    }

    private void showSelectDialog() {
        permissionsUtils.checkPermissions(this, new String[]{Manifest.permission.CAMERA,
                Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE}, new PermissionsUtils.IPermissionsResult() {
            @Override
            public void passPermissions() {
                CameraDialog bottomDialog = new CameraDialog(XEngineWebActivity.this);
                String[] photoKey = new String[2];
                photoKey[0] = "拍照";
                photoKey[1] = "从手机相册选择";
                bottomDialog.initDialog(photoKey, (view, which, l) -> {
                    if (which == 1) {
                        // 从手机相册选择
                        ImageUtils.startAlbum2(XEngineWebActivity.this);
                    } else if (which == 0) {
                        // 拍照
                        ImageUtils.startCamera(XEngineWebActivity.this);
                    } else if (which == -2) {
                        mUploadCallbackAboveL.onReceiveValue(null);
                        mUploadCallbackAboveL = null;
                    }
                });
                bottomDialog.showDialog();


            }

            @Override
            public void forbidPermissions() {

            }
        });

    }

    private void choseFile() {
        permissionsUtils.checkPermissions(this, new String[]{
                Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE}, new PermissionsUtils.IPermissionsResult() {
            @Override
            public void passPermissions() {
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                startActivityForResult(Intent.createChooser(i, "File Chooser"), FILECHOOSER_RESULTCODE);
            }

            @Override
            public void forbidPermissions() {

            }
        });


    }

    private void onActivityResultAboveL(int requestCode, int resultCode, Intent data) {
        if ((requestCode == ImageUtils.RESULT_CODE_CAMERA || requestCode == ImageUtils.RESULT_CODE_PHOTO) && mUploadCallbackAboveL != null) {
            Uri[] results = null;
            if (resultCode == Activity.RESULT_OK) {
                if (data != null) {
                    if (requestCode == ImageUtils.RESULT_CODE_CAMERA) {
                        String dataString = data.getDataString();
                        ClipData clipData = data.getClipData();
                        if (clipData != null) {
                            results = new Uri[clipData.getItemCount()];
                            for (int i = 0; i < clipData.getItemCount(); i++) {
                                ClipData.Item item = clipData.getItemAt(i);
                                results[i] = item.getUri();
                            }
                        }
                        if (dataString != null)
                            results = new Uri[]{Uri.parse(dataString)};
                    } else if (requestCode == ImageUtils.RESULT_CODE_PHOTO) {

                        ArrayList<String> items = data.getStringArrayListExtra(ImagePicker.EXTRA_SELECT_IMAGES);
                        results = new Uri[items.size()];
                        for (int j = 0; j < items.size(); j++) {
                            results[j] = ImageUtils.getMediaUriFromPath(this, items.get(j));
                        }
                    }
                }
            }
            mUploadCallbackAboveL.onReceiveValue(results);
            mUploadCallbackAboveL = null;
        }

    }

    private void broadcast(List<String> msg) {
        Log.d(TAG, "发送全局广播：" + msg);
        mWebView.callHandler("com.zkty.module.engine.broadcast", msg == null ? new Object[]{} : msg.toArray(), retValue -> Log.d(TAG, "broadcast:" + msg));
    }

    private boolean broadcastAble = true;

    @Subscribe
    public void onMessageReceive(XEngineMessage xEngineMessage) {
        if (isResume && XEngineMessage.MSG_TYPE_ON.equals(xEngineMessage.getType())) {
            if (broadcastAble) {
                broadcast(xEngineMessage.getMsgList());
            }

        } else if (isResume && XEngineMessage.MSG_TYPE_OFF.equals(xEngineMessage.getType())) {
            broadcastAble = false;
            broadcast(xEngineMessage.getMsgList());
        } else if (isResume && XEngineMessage.MSG_TYPE_SCOPE.equals(xEngineMessage.getType())) {
            broadcastAble = true;
            broadcast(xEngineMessage.getMsgList());
        } else if (XEngineMessage.MSG_TYPE_PAGE_CLOSE.equals(xEngineMessage.getType())) {
            if (xEngineMessage.getMsg().equals(router)) {
                finishWhitNoAnim();
            }
        }
    }

    public String getRouter() {
        return router;
    }

}