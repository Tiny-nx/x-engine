
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!

  package com.zkty.jsi;

  import java.util.List;
  import java.util.Map;
  import java.util.Set;
  import android.webkit.JavascriptInterface;
  import com.alibaba.fastjson.JSON;
  import com.alibaba.fastjson.JSONObject;
  import com.zkty.nativ.jsi.bridge.CompletionHandler;
  import com.zkty.nativ.jsi.JSIModule;
  import androidx.annotation.Nullable;
  import com.zkty.nativ.core.annotation.Optional;

  
  class NavTitleDTO {
    public String title;

    public String titleColor;

    public Integer titleSize;
  }
  
  class NavHiddenBarDTO {
    public boolean isHidden;

    public boolean isAnimation;
  }
  
  interface xengine_jsi_ui_protocol {
    public void _setNavTitle(NavTitleDTO dto, final CompletionHandler<Nullable> handler);
public void _setNavBarHidden(NavHiddenBarDTO dto, final CompletionHandler<Nullable> handler);
  }
  
  
    public abstract class xengine_jsi_ui extends JSIModule implements xengine_jsi_ui_protocol {
    @Override
    public String moduleId() {
      return "com.zkty.jsi.ui";
    }
  
    @JavascriptInterface
    final public void setNavTitle(JSONObject jsonobj, final CompletionHandler<Object> handler) {
      String defaultStr = "{  \"titleSize\": 16}";
      jsonobj = mergeDefault(jsonobj, defaultStr);
      NavTitleDTO dto= convert(jsonobj,NavTitleDTO.class);
      _setNavTitle(dto, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void setNavBarHidden(JSONObject jsonobj, final CompletionHandler<Object> handler) {
      NavHiddenBarDTO dto= convert(jsonobj,NavHiddenBarDTO.class);
      _setNavBarHidden(dto, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }
  }
  

  