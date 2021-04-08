package com.zkty.modules.nativ.microapp;

import android.nfc.tech.MifareClassic;

import com.zkty.engine.nativ.protocol.IDirect;
import com.zkty.modules.nativ.core.NativeContext;
import com.zkty.modules.nativ.core.NativeModule;

import java.util.List;
import java.util.Map;

public class NativeDirecMicroapp extends NativeModule implements IDirect {
    private IDirect microappDirect;

    @Override
    public String moduleId() {
        return "com.zkty.native.direct_microapp";
    }

    @Override
    public int order() {
        return 0;
    }

    @Override
    public void afterAllNativeModuleInited() {
        List<NativeModule> modules = NativeContext.sharedInstance().getModulesByProtocol(this);

        for (NativeModule iDirect : modules) {
            if (iDirect instanceof IDirect) {
                if ("omp".equals(((IDirect) iDirect).scheme())) {
                    this.microappDirect = (IDirect) iDirect;
                }
            }
        }
    }


    @Override
    public String scheme() {
        return "microapp";
    }

    @Override
    public String protocol() {
        return "file:";
    }

    @Override
    public void push(String protocol, String host, String pathname, String fragment, Map<String, Object> query, Map<String, Object> params) {
        if (microappDirect != null) {
            long version = 0l;
            if (params != null && params.containsKey("version")) {
                version = Long.parseLong(String.valueOf(params.get("version")));
            }
            String localhoset = MicroAppLoader.sharedInstance().getMicroAppHost(host, version);

            microappDirect.push(protocol(), localhoset, pathname, fragment, query, params);
        }
    }

    @Override
    public void back(String host, String fragment) {
        if (microappDirect != null)
            microappDirect.back(host, fragment);
    }


}
