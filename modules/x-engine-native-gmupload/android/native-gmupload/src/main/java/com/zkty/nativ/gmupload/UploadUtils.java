package com.zkty.nativ.gmupload;

import com.alibaba.fastjson.JSON;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

/**
 * @author : MaJi
 * @time : (8/20/21)
 * dexc :
 */
public class UploadUtils {

    /**
     * 上传文件
     * @param url
     * @param filePath
     * @param fileUploadObserver
     */
    public static void doUploadFile(String url,String filePath, OnUploadListener fileUploadObserver) {
        try {
            // 构造上传请求，模拟表单提交文件
            File file = new File(filePath);
            FileProgressRequestBody filePart = new FileProgressRequestBody(file,fileUploadObserver);


            //封装参数
            MultipartBody requestBody = new MultipartBody.Builder()
                    .setType(MultipartBody.FORM)
                    .addFormDataPart("file",file.getName(),filePart)
                    .build();

            // 创建Request对象
            Request request = new Request.Builder()
                    .url(url)
                    .post(requestBody)
                    .build();

            OkHttpClient httpClient = new OkHttpClient.Builder()
                    //time out
                    .connectTimeout(100, TimeUnit.SECONDS)
                    .readTimeout(100, TimeUnit.SECONDS)
                    .writeTimeout(100, TimeUnit.SECONDS)
                    //失败重连
                    .retryOnConnectionFailure(true)
                    .build();
            httpClient.newCall(request).enqueue(new Callback() {
                @Override
                public void onFailure(okhttp3.Call call, IOException e) {
                    // 下载失败
                    fileUploadObserver.onUploadFailed();
                }

                @Override
                public void onResponse(okhttp3.Call call, Response response) throws IOException {
                    ResponseBody body = response.body();
                    byte[] bytes = body.bytes();
                    //解密字符串
                    String dataStr = new String(bytes, "UTF-8");
                    fileUploadObserver.onUploadSuccess(dataStr);
                }
            });
        } catch (Exception ioe) {
        }
    }


    /**
     * 上传banse64文件
     * @param url
     * @param fileName
     * @param base64
     * @param fileUploadObserver
     */
    public static void doUploadBase64(String url,String fileName,String base64, OnUploadListener fileUploadObserver) {
        try {
            // 构造上传请求，模拟表单提交文件

            Map<String,Object> jsonBody = new HashMap<>();
            jsonBody.put("fileName",fileName);
            jsonBody.put("base64Str",base64);
            String s = JSON.toJSONString(jsonBody);
            RequestBody requestBody = RequestBody.create(MediaType.parse("application/json"), JSON.toJSONString(jsonBody));
            // 创建Request对象
            Request request = new Request.Builder()
                    .url(url)
                    .post(requestBody)
                    .build();
            OkHttpClient httpClient = new OkHttpClient.Builder()
                    //time out
                    .connectTimeout(100, TimeUnit.SECONDS)
                    .readTimeout(100, TimeUnit.SECONDS)
                    .writeTimeout(100, TimeUnit.SECONDS)
                    //失败重连
                    .retryOnConnectionFailure(true)
                    .build();
            httpClient.newCall(request).enqueue(new Callback() {
                @Override
                public void onFailure(okhttp3.Call call, IOException e) {
                    // 下载失败
                    fileUploadObserver.onUploadFailed();
                }

                @Override
                public void onResponse(okhttp3.Call call, Response response) throws IOException {
                    ResponseBody body = response.body();
                    byte[] bytes = body.bytes();
                    //解密字符串
                    String dataStr = new String(bytes, "UTF-8");
                    fileUploadObserver.onUploadSuccess(dataStr);
                }
            });
        } catch (Exception ioe) {
        }
    }
}