package com.zkty.nativ.viewer_original.activity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.tencent.smtt.sdk.QbSdk;
import com.tencent.smtt.sdk.TbsDownloader;
import com.tencent.smtt.sdk.TbsListener;
import com.tencent.smtt.sdk.TbsReaderView;
import com.tencent.smtt.sdk.ValueCallback;
import com.zkty.nativ.core.XEngineApplication;
import com.zkty.nativ.core.utils.ToastUtils;
import com.zkty.nativ.jsi.view.BaseXEngineActivity;
import com.zkty.nativ.jsi.view.XEngineNavBar;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import module.viewer_original.R;


/**
 * @author : MaJi
 * @time : (5/13/21)
 * dexc :
 */
public class PreViewActivity extends BaseXEngineActivity {

    public static final String FILE_PATH = "filePath";
    public static final String FILE_NAME = "fileName";
    public static final String FILE_TYPE = "fileType";
    public static final String TITLE = "title";
    private LinearLayout llContent;
    private XEngineNavBar mXEngineNavBar;
    private TbsReaderView tbsReaderView;
    private RelativeLayout relLoadX5;
    private TextView tvProgress;
    private String filePath,downLoadUrl;
    private String fileType;
    private String title;

    private int maxProgress = 100;
    private int cunProgress = 0;
    private boolean isFirst = true;

    public static void startAty(String filePath, String title, String fileType) {
        Intent intent = new Intent(XEngineApplication.getCurrentActivity(), PreViewActivity.class);
        intent.putExtra(PreViewActivity.FILE_PATH,filePath);
        intent.putExtra(PreViewActivity.FILE_TYPE,fileType);
        intent.putExtra(PreViewActivity.TITLE,title);
        XEngineApplication.getCurrentActivity().startActivity(intent);
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_preview_file);

        filePath = getIntent().getStringExtra(FILE_PATH);
        fileType = getIntent().getStringExtra(FILE_TYPE);
        title= getIntent().getStringExtra(TITLE);



        llContent = findViewById(R.id.llContent);
        mXEngineNavBar = findViewById(R.id.mXEngineNavBar);

        relLoadX5 = findViewById(R.id.relLoadX5);
        tvProgress = findViewById(R.id.tvProgress);

        List<Double> iconSize = new ArrayList<>();
        iconSize.add(20.0);
        iconSize.add(20.0);
        Map<String,String> map = new HashMap<>();
        map.put("title","??????");
        Map<String,String> map1 = new HashMap<>();
        map1.put("title","??????");
        List<Map<String,String> > itemlist = new ArrayList<>();
        itemlist.add(map);
        itemlist.add(map1);

//        mXEngineNavBar.setNavRightMenuBtn("??????", "#121212", null, null, iconSize, itemlist, false, "100", (parent, view, position, id) -> ToastUtils.showCenterToast(itemlist.get(position).get("title")));
        mXEngineNavBar.setLeftListener(v -> finish());

        //????????????
        mXEngineNavBar.setTitle(title,null,null);

        //????????????
        if(QbSdk.canLoadX5(XEngineApplication.getApplication())){//???????????? x5 ??????
            openFile(filePath, fileType);
        }else{
            if(fileType.contains("pdf")){
                PrePdfViewActivity.startAty(filePath,title,fileType);
                finish();
            }
//            relLoadX5.setVisibility(View.VISIBLE);
//            //x5????????????
//            QbSdk.setTbsListener(new TbsListener() {
//                @Override
//                public void onDownloadFinish(int i) {
//                    Log.d("initX5 prew", "onDownloadFinish -->??????X5???????????????" + i);
//                    if(i != 100 && !TbsDownloader.isDownloading() && !QbSdk.canLoadX5(getApplicationContext())){
//                        new Handler().postDelayed(new Runnable() {
//                            @Override
//                            public void run() {
//                                TbsDownloader.startDownload(getApplicationContext());
//                            }
//                        },10000);
//
//                    }else{
//                        runOnUiThread(new Runnable() {
//                            @Override
//                            public void run() {
//                                tvProgress.setText("??????????????????");
//                            }
//                        });
//                    }
//
//
//                }
//                @Override
//                public void onInstallFinish(int i) {
//                    //????????????
//                    if(QbSdk.canLoadX5(getApplicationContext())){
//                        runOnUiThread(new Runnable() {
//                            @Override
//                            public void run() {
//                                openFile(filePath, fileType);
//                            }
//                        });
//                    }
//
//                }
//                @Override
//                public void onDownloadProgress(int progress) {
//                    if(isFirst && progress > 20){
//                        maxProgress = 100 - progress;
//                        cunProgress = progress;
//                    }
//                    isFirst = false;
//                    float ratio = ((progress - cunProgress) / maxProgress);
//                    int pro = (int) (100 * ratio);
//                    runOnUiThread(new Runnable() {
//                        @Override
//                        public void run() {
//                            tvProgress.setText("?????????????????????" + pro + "%");
//                        }
//                    });
//                    Log.d("initX5  prew", "onDownloadProgress -->??????X5???????????????" + progress);
//                }
//            });
//            //????????????????????????
//            Log.d("initX5 prew",  "??????????????????X5?????? -->" +TbsDownloader.isDownloading() + "");
//            if(!TbsDownloader.isDownloading()){
//                Log.d("initX5 prew",  "??????X5?????? -->");
//                TbsDownloader.startDownload(getApplicationContext());
//            }
        }

    }


    /**
     * ????????????
     * @param path
     */
    private void openFile(String path,String fileType) {
        relLoadX5.setVisibility(View.GONE);
        tbsReaderView = new TbsReaderView(this, readerCallback);
        llContent.addView(tbsReaderView,new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        Bundle bundle = new Bundle();
        //????????????
        bundle.putString("filePath", path);
        //??????????????????????????????????????????????????????
        bundle.putString("tempPath", Environment.getExternalStorageDirectory().getAbsolutePath()+"????????????TBS");
        //??????
        boolean result = tbsReaderView.preOpen(fileType, false);
        if (result) {
            //????????????
            tbsReaderView.openFile(bundle);
        }
    }


    /**
     * ??????????????????????????????????????????????????????????????????
     */
    TbsReaderView.ReaderCallback readerCallback = new TbsReaderView.ReaderCallback() {
        @Override
        public void onCallBackAction(Integer integer, Object o, Object o1) {

        }
    };

    @Override
    protected void onDestroy() {
        super.onDestroy();
        //????????????????????????????????????????????????
        if(tbsReaderView != null){
            tbsReaderView.onStop();
        }
    }

}
