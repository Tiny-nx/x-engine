package com.zkty.nativ.viewer.activity;

import android.os.Bundle;
import android.os.Environment;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

import androidx.annotation.Nullable;

import com.tencent.smtt.sdk.TbsReaderView;
import com.zkty.nativ.jsi.view.BaseXEngineActivity;
import com.zkty.nativ.jsi.view.XEngineNavBar;

import java.io.File;

import module.viewer.R;

/**
 * @author : MaJi
 * @time : (5/13/21)
 * dexc :
 */
public class PreViewActivity extends BaseXEngineActivity {

    private LinearLayout llContent;
    private XEngineNavBar mXEngineNavBar;
    private TbsReaderView tbsReaderView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_preview_file);
        llContent = findViewById(R.id.llContent);
        mXEngineNavBar = findViewById(R.id.mXEngineNavBar);
        mXEngineNavBar.setLeftListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        tbsReaderView = new TbsReaderView(this, readerCallback);
        llContent.addView(tbsReaderView,new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
//        下面的回调必须要实现，暂时没找到此回调的用处

        String filePath = getIntent().getStringExtra("filePath");
        File file = new File(filePath);
        mXEngineNavBar.setLeftTitle( file.getName());
        openFile(filePath);
    }

    /**
     * 打开文件
     * @param path
     */
    private void openFile(String path) {
        Bundle bundle = new Bundle();
        //文件路径
        bundle.putString("filePath", path);
        //临时文件的路径，必须设置，否则会报错
        bundle.putString("tempPath", Environment.getExternalStorageDirectory().getAbsolutePath()+"腾讯文件TBS");
        //准备
        boolean result = tbsReaderView.preOpen(getFileType(path), false);
        if (result) {
            //预览文件
            tbsReaderView.openFile(bundle);
        }
    }

    /**
     * 获取文件类型
     * @param path
     * @return
     */
    private String getFileType(String path) {
        String type = "";
        if(path.endsWith(".pdf")){
            type = "pdf";
        }else if(path.endsWith(".ppt")){
            type = "ppt";
        }else if(path.endsWith(".pptx")){
            type = "pptx";
        }else if(path.endsWith(".doc")){
            type = "doc";
        }else if(path.endsWith(".docx")){
            type = "docx";
        }else if(path.endsWith(".xls")){
            type = "xls";
        }else if(path.endsWith(".xlsx")){
            type = "xlsx";
        }else if(path.endsWith(".txt")){
            type = "txt";
        }else if(path.endsWith(".epub")){
            type = "epub";
        }
        return type;
    }

    /**
     * 读取文件监听 目前没什么用
     */
    TbsReaderView.ReaderCallback readerCallback = new TbsReaderView.ReaderCallback() {
        @Override
        public void onCallBackAction(Integer integer, Object o, Object o1) {

        }
    };

    @Override
    protected void onDestroy() {
        super.onDestroy();
        //需要将预览服务停止，一定不要忘了
        if(tbsReaderView != null){
            tbsReaderView.onStop();
        }
    }

}