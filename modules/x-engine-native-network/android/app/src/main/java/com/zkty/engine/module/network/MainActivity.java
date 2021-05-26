package com.zkty.engine.module.network;

import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import com.zkty.engine.module.network.net.CommonEngine;
import com.zkty.engine.module.network.net.callback.ServiceCallback;
import com.zkty.nativ.core.XEngineApplication;
import com.zkty.nativ.core.utils.ToastUtils;
import com.zkty.nativ.network.net.exception.ApiException;
import com.zkty.nativ.network.net.myinterface.OnDownloadListener;
import com.zkty.nativ.network.net.myinterface.OnUploadListener;
import com.zkty.nativ.network.net.rx.RxService;
import com.zkty.nativ.network.utils.LogUtils;

import java.io.File;


public class MainActivity extends AppCompatActivity {

    private TextView viewById;

    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        viewById = findViewById(R.id.tv_version);
    }

    public void network(View view) {
        CommonEngine.getInstance().getScheduleListById(new ServiceCallback() {
            @Override
            public void onSuccess(Object jsonObj) {
                ToastUtils.showCenterToast("哈哈哈哈哈哈");
            }

            @Override
            public void onError(ApiException apiException) {

            }

            @Override
            public void onInvalid() {

            }
        });
        //创建文件夹
        File folder = new File(XEngineApplication.getCurrentActivity().getExternalCacheDir().getAbsoluteFile().getPath() + "/downloads");
        if (!folder.exists()) {
            folder.mkdirs();
        }

        //要保存文件
        File file = new File(folder.getPath() + "/" + "hahaah.pdf");
        //文件路径
        String filePath = file.getPath();
        RxService.downLoadFile("",filePath, new OnDownloadListener() {
            @Override
            public void onDownloadSuccess() {
                viewById.setText("下载完成");
            }

            @Override
            public void onDownloading(int progress) {
                viewById.setText(progress + "%");
                LogUtils.d(progress + "%");
            }

            @Override
            public void onDownloadFailed() {
                viewById.setText("下载失败");
            }
        });

        RxService.upLoadFile("", filePath, new OnUploadListener() {
            @Override
            public void onUploadSuccess() {

            }

            @Override
            public void onUploading(int progress) {

            }

            @Override
            public void onUploadFailed() {

            }
        });
    }
}