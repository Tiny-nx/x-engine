package com.zkty.nativ.share_wx;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Handler;
import android.os.Looper;
import android.renderscript.ScriptIntrinsicConvolve3x3;
import android.text.TextUtils;
import android.util.Base64;
import android.util.Log;

import com.bumptech.glide.Glide;
import com.bumptech.glide.util.Util;
import com.tencent.mm.opensdk.modelmsg.SendMessageToWX;
import com.tencent.mm.opensdk.modelmsg.WXImageObject;
import com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
import com.tencent.mm.opensdk.modelmsg.WXMiniProgramObject;
import com.tencent.mm.opensdk.modelmsg.WXMusicObject;
import com.tencent.mm.opensdk.modelmsg.WXTextObject;
import com.tencent.mm.opensdk.modelmsg.WXVideoObject;
import com.tencent.mm.opensdk.modelmsg.WXWebpageObject;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.tencent.mmkv.MMKV;
import com.zkty.nativ.core.NativeModule;
import com.zkty.nativ.core.XEngineApplication;
import com.zkty.nativ.core.utils.ImageUtils;
import com.zkty.nativ.core.utils.ToastUtils;
import com.zkty.nativ.share.Ishare;
import com.zkty.nativ.share.dto.ShareImg;
import com.zkty.nativ.share.dto.ShareLink;
import com.zkty.nativ.share.dto.ShareMiniProgram;
import com.zkty.nativ.share.dto.ShareText;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import module.share_wx.R;

public class Nativeshare_wx extends NativeModule implements Ishare {

    @Override
    public String moduleId() {
        return "com.zkty.native.share_wx";
    }

    @Override
    public void afterAllNativeModuleInited() {

    }

    @Override
    public List<String> channels() {
        List<String> channels = new ArrayList<>();
        channels.add("wx_zone");
        channels.add("wx_friend");
        return channels;
    }


    @Override
    public void share(String channel, ShareText info, CallBack callBack) {

        if (!isWxExited()) {
            callBack.onResult(-1);
            ToastUtils.showNormalShortToast("?????????????????????");
            return;
        }
        IWXAPI iwxapi = createWXAPI();
        if (iwxapi == null) return;

        //??????????????? WXTextObject ????????????????????????????????????
        WXTextObject textObj = new WXTextObject();
        textObj.text = info.text;

        //??? WXTextObject ????????????????????? WXMediaMessage ??????
        WXMediaMessage msg = new WXMediaMessage();
        msg.mediaObject = textObj;
        msg.description = info.text;

        SendMessageToWX.Req req = new SendMessageToWX.Req();
        req.message = msg;
        req.scene = "wx_friend".equals(channel) ? SendMessageToWX.Req.WXSceneSession : SendMessageToWX.Req.WXSceneTimeline;
        //??????api??????????????????????????????
        iwxapi.sendReq(req);
        callBack.onResult(0);

    }

    @Override
    public void share(String channel, ShareImg info, CallBack callBack) {
        if (!isWxExited()) {
            callBack.onResult(-1);
            ToastUtils.showNormalShortToast("?????????????????????");
            return;
        }

        IWXAPI iwxapi = createWXAPI();
        if (iwxapi == null) return;
        Handler handler = new Handler(Looper.getMainLooper());
        ImageUtils.getBitmap(info.imgData, new ImageUtils.BitmapCallback() {
            @Override
            public void onSuccess(Bitmap bitmap) {

                handler.post(() -> {
                    //????????? WXImageObject ??? WXMediaMessage ??????
                    WXImageObject imgObj = new WXImageObject(bitmap);
                    WXMediaMessage msg2 = new WXMediaMessage();
                    msg2.mediaObject = imgObj;

                    //???????????????
                    Bitmap thumbBmp = Bitmap.createScaledBitmap(bitmap, 50, 50, true);
                    msg2.thumbData = ImageUtils.bitmapToBytes(thumbBmp);

                    //????????????Req
                    SendMessageToWX.Req req2 = new SendMessageToWX.Req();
                    req2.message = msg2;
                    req2.scene = "wx_friend".equals(channel) ? SendMessageToWX.Req.WXSceneSession : SendMessageToWX.Req.WXSceneTimeline;
                    //??????api??????????????????????????????
                    iwxapi.sendReq(req2);
                    bitmap.recycle();
                    thumbBmp.recycle();
                });

            }

            @Override
            public void onFail() {
                handler.post(() -> {
                    ToastUtils.showNormalShortToast("??????????????????????????????");
                });
            }
        });

        callBack.onResult(0);
    }

    @Override
    public void share(String channel, ShareLink info, CallBack callBack) {
        if (!isWxExited()) {
            callBack.onResult(-1);
            ToastUtils.showNormalShortToast("?????????????????????");
            return;
        }

        IWXAPI iwxapi = createWXAPI();
        if (iwxapi == null) return;
        Handler handler = new Handler(Looper.getMainLooper());
        ImageUtils.getBitmap(info.imgUrl, new ImageUtils.BitmapCallback() {
            @Override
            public void onSuccess(Bitmap bitmap) {

                handler.post(() -> {
                    //???????????????WXWebpageObject?????????url
                    WXWebpageObject webpage = new WXWebpageObject();
                    webpage.webpageUrl = info.url;

                    //??? WXWebpageObject ????????????????????? WXMediaMessage ??????
                    WXMediaMessage msg3 = new WXMediaMessage(webpage);
                    msg3.title = info.title;
                    msg3.description = info.desc;

                    msg3.thumbData = ImageUtils.bitmapToBytes(bitmap);

                    //????????????Req
                    SendMessageToWX.Req req3 = new SendMessageToWX.Req();
//                req.transaction = buildTransaction("webpage");
                    req3.message = msg3;
                    req3.scene = "wx_friend".equals(channel) ? SendMessageToWX.Req.WXSceneSession : SendMessageToWX.Req.WXSceneTimeline;
                    //??????api??????????????????????????????
                    iwxapi.sendReq(req3);

                });


            }

            @Override
            public void onFail() {

                handler.post(() -> {
                    //???????????????WXWebpageObject?????????url
                    WXWebpageObject webpage = new WXWebpageObject();
                    webpage.webpageUrl = info.url;

                    //??? WXWebpageObject ????????????????????? WXMediaMessage ??????
                    WXMediaMessage msg3 = new WXMediaMessage(webpage);
                    msg3.title = info.title;
                    msg3.description = info.desc;

                    //????????????Req
                    SendMessageToWX.Req req3 = new SendMessageToWX.Req();
//                req.transaction = buildTransaction("webpage");
                    req3.message = msg3;
                    req3.scene = "wx_friend".equals(channel) ? SendMessageToWX.Req.WXSceneSession : SendMessageToWX.Req.WXSceneTimeline;
                    //??????api??????????????????????????????
                    iwxapi.sendReq(req3);
                });

            }
        });

        callBack.onResult(0);
    }

    @Override
    public void share(ShareMiniProgram info, CallBack callBack) {
        if (!isWxExited()) {
            callBack.onResult(-1);
            ToastUtils.showNormalShortToast("?????????????????????");
            return;
        }

        IWXAPI iwxapi = createWXAPI();
        if (iwxapi == null) return;
        Handler handler = new Handler(Looper.getMainLooper());
        ImageUtils.getBitmap(info.imgUrl, new ImageUtils.BitmapCallback() {
            @Override
            public void onSuccess(Bitmap bitmap) {
                handler.post(() -> {

                    WXMiniProgramObject miniProgramObj = new WXMiniProgramObject();
                    miniProgramObj.webpageUrl = info.link; // ??????????????????????????????
                    miniProgramObj.miniprogramType = info.miniProgramType == 0 ?
                            WXMiniProgramObject.MINIPTOGRAM_TYPE_RELEASE : info.miniProgramType == 1 ?
                            WXMiniProgramObject.MINIPROGRAM_TYPE_TEST : WXMiniProgramObject.MINIPROGRAM_TYPE_PREVIEW;// ?????????:0????????????:1????????????:2
                    miniProgramObj.userName = info.userName;     // ???????????????id
                    miniProgramObj.path = info.path;            //????????????????????????????????????????????????????????? query ????????????????????????????????????????????? "?foo=bar"
                    WXMediaMessage msg4 = new WXMediaMessage(miniProgramObj);
                    msg4.title = info.title;                    // ???????????????title
                    msg4.description = info.desc;               // ???????????????desc


                    msg4.thumbData = ImageUtils.bitmapToBytes(bitmap);                      // ????????????????????????????????????128k

                    SendMessageToWX.Req req4 = new SendMessageToWX.Req();
                    req4.message = msg4;
                    req4.scene = SendMessageToWX.Req.WXSceneSession;  // ?????????????????????
                    iwxapi.sendReq(req4);

                });


            }

            @Override
            public void onFail() {
                handler.post(() -> {
                    WXMiniProgramObject miniProgramObj = new WXMiniProgramObject();
                    miniProgramObj.webpageUrl = info.link; // ??????????????????????????????
                    miniProgramObj.miniprogramType = info.miniProgramType == 0 ?
                            WXMiniProgramObject.MINIPTOGRAM_TYPE_RELEASE : info.miniProgramType == 1 ?
                            WXMiniProgramObject.MINIPROGRAM_TYPE_TEST : WXMiniProgramObject.MINIPROGRAM_TYPE_PREVIEW;// ?????????:0????????????:1????????????:2
                    miniProgramObj.userName = info.userName;     // ???????????????id
                    miniProgramObj.path = info.path;            //????????????????????????????????????????????????????????? query ????????????????????????????????????????????? "?foo=bar"
                    WXMediaMessage msg4 = new WXMediaMessage(miniProgramObj);
                    msg4.title = info.title;                    // ???????????????title
                    msg4.description = info.desc;               // ???????????????desc

                    SendMessageToWX.Req req4 = new SendMessageToWX.Req();
                    req4.message = msg4;
                    req4.scene = SendMessageToWX.Req.WXSceneSession;  // ?????????????????????
                    iwxapi.sendReq(req4);
                });

            }
        });
        callBack.onResult(0);
    }

    private IWXAPI createWXAPI() {
        String appId = null;
        Context context = XEngineApplication.getCurrentActivity();
        try {
            ApplicationInfo appInfo = context.getPackageManager().getApplicationInfo(context.getPackageName(), PackageManager.GET_META_DATA);
            if (appInfo.metaData != null) {
                for (String key : appInfo.metaData.keySet()) {
                    if (!TextUtils.isEmpty(key) && ("wx_appid").equals(key)) {
                        appId = appInfo.metaData.getString(key);
                        break;
                    }
                }
            }

        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        if (TextUtils.isEmpty(appId)) return null;

        return WXAPIFactory.createWXAPI(context, appId);


    }

    private boolean isWxExited() {
        final PackageManager packageManager = XEngineApplication.getApplication().getPackageManager();// ??????packagemanager
        List<PackageInfo> pinfo = packageManager.getInstalledPackages(0);// ???????????????????????????????????????
        if (pinfo != null) {
            for (int i = 0; i < pinfo.size(); i++) {
                String pn = pinfo.get(i).packageName;
                if (pn.equals("com.tencent.mm")) {
                    return true;
                }
            }
        }
        return false;
    }

}
