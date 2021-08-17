package com.zkty.engine.jsi.camera;

import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.zkty.nativ.camera.ICamera;
import com.zkty.nativ.camera.NativeCamera;
import com.zkty.nativ.camera.PreImageCallBack;
import com.zkty.nativ.camera.cameraImpl.data.MediaFile;
import com.zkty.nativ.core.NativeContext;
import com.zkty.nativ.core.NativeModule;
import com.zkty.nativ.core.utils.ToastUtils;
import com.zkty.nativ.jsi.view.XEngineWebActivityManager;

import java.util.ArrayList;
import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    private NativeCamera iCamera;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        NativeModule module = NativeContext.sharedInstance().getModuleByProtocol(ICamera.class);
        if (module instanceof NativeCamera)
            iCamera = (NativeCamera) module;

    }

    public void camera(View view) {
        ArrayList<String> images = new ArrayList<>();
        images.add("https://upload-images.jianshu.io/upload_images/5809200-a99419bb94924e6d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        images.add("https://upload-images.jianshu.io/upload_images/5809200-736bc3917fe92142.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        images.add("https://upload-images.jianshu.io/upload_images/5809200-7fe8c323e533f656.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        ArrayList<MediaFile> mediaFileList = new ArrayList<>();//图片集合
        for (String image : images) {
            MediaFile mediaFile = new MediaFile();
            mediaFile.setPath(image);
            mediaFileList.add(mediaFile);
        }


        iCamera.preImage(mediaFileList, 1, new PreImageCallBack() {
            @Override
            public void closeCallBack() {
                ToastUtils.showCenterToast("关闭");
            }
        });
//        XEngineWebActivityManager.sharedInstance().startXEngineActivity(this, "omp","10.2.128.89:9111","","/",new HashMap<>(),true);
    }
}
