package com.zkty.engine.module.bluetooth;

import android.app.Application;

import com.zkty.modules.engine.XEngineContext;


public class TemplateApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        XEngineContext.init(this);
    }
}
