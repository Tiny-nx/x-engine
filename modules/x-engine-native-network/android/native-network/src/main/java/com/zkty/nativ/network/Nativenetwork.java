package com.zkty.nativ.network;

import com.zkty.nativ.core.NativeModule;
import com.zkty.nativ.network.api.RetrofitHttpService;
import com.zkty.nativ.network.bean.BaseResp;
import com.zkty.nativ.network.net.ProgressRequestBody;
import com.zkty.nativ.network.net.exception.ApiException;
import com.zkty.nativ.network.net.myinterface.Inetwork;
import com.zkty.nativ.network.net.myinterface.OnDownloadListener;
import com.zkty.nativ.network.net.myinterface.OnUploadListener;
import com.zkty.nativ.network.net.myinterface.ServiceCallback;
import com.zkty.nativ.network.net.rx.RxService;
import com.zkty.nativ.network.net.rx.RxUtil;
import com.zkty.nativ.network.utils.GsonUtil;
import com.zkty.nativ.network.utils.LogUtils;
import com.zkty.nativ.network.utils.WriteFileUtil;

import java.io.File;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import okhttp3.MultipartBody;
import okhttp3.ResponseBody;
import rx.Observable;
import rx.Observer;
import rx.android.schedulers.AndroidSchedulers;
import rx.functions.Action1;
import rx.functions.Func1;
import rx.schedulers.Schedulers;

public class Nativenetwork extends NativeModule implements Inetwork {

    @Override
    public String moduleId() {
        return "com.zkty.native.network";
    }

    public void handlerThrowable(Throwable throwable, ServiceCallback callback) {
        if (throwable instanceof ApiException) {
            callback.onError((ApiException) throwable);
        } else {
            LogUtils.e(throwable.getMessage(), throwable);
        }
    }

    @Override
    public void post(String requestType, String baseUrl, String url, Map<String, Object> params, Map<String, String> heads,boolean isIntercepToken, ServiceCallback callback) {
        params = params == null ? new HashMap<>() : params;
        heads = heads == null ? new HashMap<>() : heads;

        RetrofitHttpService retrofitHttpService = RxService.createBasicApi(RetrofitHttpService.class, baseUrl, isIntercepToken);
        //默认body请求
        Observable<String> observable = retrofitHttpService.ObpostBody(url, params, heads);
        if(requestType.equals(NetworkConfig.REQUEST_TYPE_BODY)){
            observable = retrofitHttpService.ObpostBody(url, params, heads);
        }else if(requestType.equals(NetworkConfig.REQUEST_TYPE_QUERY_MAP)){
            observable = retrofitHttpService.ObpostQueryMap(url, params, heads);
        }else if(requestType.equals(NetworkConfig.REQUEST_TYPE_FILE_MAP)){
            observable = retrofitHttpService.ObpostFileMap(url, params, heads);
        }
        observable.compose(RxUtil.<String>handleRestfullResult())
                .subscribe(new Observer<String>() {
                    @Override
                    public void onCompleted() {
                    }

                    @Override
                    public void onError(Throwable e) {
                        handlerThrowable(e,callback);
                    }

                    @Override
                    public void onNext(String s) {
                        BaseResp baseResp = GsonUtil.fromJson(s,BaseResp.class);

                        if(null == callback) return;
                        callback.onSuccess(baseResp);
                    }
                });
    }

    @Override
    public void get(String requestType, String baseUrl, String url, Map<String, Object> params, Map<String, String> heads, boolean isIntercepToken, ServiceCallback callback) {
        params = params == null ? new HashMap<>() : params;
        heads = heads == null ? new HashMap<>() : heads;
        RetrofitHttpService retrofitHttpService = RxService.createBasicApi(RetrofitHttpService.class, baseUrl, isIntercepToken);
        //默认body请求
        retrofitHttpService.Obget(url, params, heads).compose(RxUtil.<String>handleRestfullResult())
                .subscribe(new Observer<String>() {
                    @Override
                    public void onCompleted() {
                    }

                    @Override
                    public void onError(Throwable e) {
                        handlerThrowable(e,callback);
                    }

                    @Override
                    public void onNext(String s) {
                        BaseResp baseResp = GsonUtil.fromJson(s,BaseResp.class);

                        if(null == callback) return;
                        callback.onSuccess(baseResp);
                    }
                });
    }

    @Override
    public void download(String url, String filePath, OnDownloadListener callback) {
        HashMap<String, String> headers = new HashMap<>();

        RxService.createBasicApi(RetrofitHttpService.class,NetworkMaster.getInstance().getHostUrl(),false)
                .Obdownload(headers,url)
                /*http请求线程*/
                .subscribeOn(Schedulers.newThread())
                .map(new Func1<ResponseBody, ResponseBody>() {
                    @Override
                    public ResponseBody call(ResponseBody responseBody) {
                        return responseBody;
                    }
                })
                /*回调线程*/
                .observeOn(Schedulers.newThread())
                .doOnNext(new Action1<ResponseBody>() {
                    @Override
                    public void call(ResponseBody responseBody) {
                        WriteFileUtil.writeFile(responseBody,filePath,callback);
                    }
                });
//                .subscribe(new Observer<ResponseBody>() {
//                    @Override
//                    public void onCompleted() {
//
//                    }
//
//                    @Override
//                    public void onError(Throwable e) {
//                        callback.onDownloadFailed();
//                    }
//
//                    @Override
//                    public void onNext(ResponseBody responseBody) {
//                        WriteFileUtil.writeFile(responseBody,filePath,callback);
//                    }
//                });
    }

    @Override
    public void upload(String url, String filePath, OnUploadListener callback) {
        File file = new File(filePath);
        //封装请求体
        ProgressRequestBody uploadFileRequestBody = new ProgressRequestBody(file, callback);
        //封装文件
        MultipartBody.Part part = MultipartBody.Part.createFormData("file", file.getName(), uploadFileRequestBody);
        //创建请求
        RxService.createBasicApi(RetrofitHttpService.class,NetworkMaster.getInstance().getHostUrl(),false)
                .uploadMultipleTypeFile(url,part)
                /*http请求线程*/
                .subscribeOn(Schedulers.newThread())
                /*回调线程*/
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Observer<ResponseBody>() {
                    @Override
                    public void onCompleted() {
                    }
                    @Override
                    public void onError(Throwable e) {
                        callback.onUploadFailed();
                    }

                    @Override
                    public void onNext(ResponseBody responseBody) {
                    }
                });
    }
}