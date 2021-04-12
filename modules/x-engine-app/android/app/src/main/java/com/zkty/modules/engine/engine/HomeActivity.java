package com.zkty.modules.engine.engine;

import android.os.Build;
import android.os.Bundle;
import android.view.View;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import com.zkty.modules.engine.R;
import com.zkty.nativ.jsi.view.MicroAppLoader;
import com.zkty.nativ.jsi.view.XEngineWebActivityManager;
import com.zkty.nativ.jsi.webview.XEngineWebView;

public class HomeActivity extends AppCompatActivity {
    private XEngineWebView mWebview;

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

    }

    public void nextPage(View view) {
        String protocol = "file:";
        String host = MicroAppLoader.sharedInstance().getMicroAppHost("com.gm.microapp.test", 0);
        String pathname = "";
        String fragment = "";


        XEngineWebActivityManager.sharedInstance().startXEngineActivity(this, protocol, host, pathname, fragment, true);

    }
}
