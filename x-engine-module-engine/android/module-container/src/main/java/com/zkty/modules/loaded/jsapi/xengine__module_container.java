
// DO NOT MODIFY!.
// generated by api_generator.js, it will be overwrite eventually!

  package com.zkty.modules.loaded.jsapi;

  import java.util.List;
  import java.util.Map;
  import java.util.Set;
  import android.webkit.JavascriptInterface;
  import com.alibaba.fastjson.JSONObject;
  import com.zkty.modules.dsbridge.CompletionHandler;
  import com.zkty.modules.engine.annotation.Optional;
  import com.zkty.modules.engine.core.xengine__module_BaseModule;
  import androidx.annotation.Nullable;

  
  class XEContainerDTO {
    public String microAppId;

    public String routePath;

    public Integer direction;
  }
  
  interface xengine__module_container_i {
    public void _push(XEContainerDTO dto, final CompletionHandler<Nullable> handler);
  }
  
  
  public abstract class xengine__module_container extends xengine__module_BaseModule implements xengine__module_container_i {
    @Override
    public String moduleId() {
      return "com.zkty.module.container";
    }
  
    @JavascriptInterface
    final public void push(JSONObject obj, final CompletionHandler<Object> handler) {
      XEContainerDTO data= convert(obj,XEContainerDTO.class);
      _push(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }
  }
  

  