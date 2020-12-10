
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!

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

  
  class ShareReqDTO {
    public String channel;

    public String type;

    public String title;

    public String link;

    @Optional
		public String desc;

    @Optional
		public String imgUrl;

    @Optional
		public String dataUrl;

    @Optional
		public String __event__;
  }
  
  class ShareResDTO {
    public String code;

    public String errStr;

    public String type;
  }
  
  interface xengine__module_share_i {
    public void _share(ShareReqDTO dto, final CompletionHandler<ShareResDTO> handler);
  }
  
  
  public abstract class xengine__module_share extends xengine__module_BaseModule implements xengine__module_share_i {
    @Override
    public String moduleId() {
      return "com.zkty.module.share";
    }
  
    @JavascriptInterface
    final public void share(JSONObject obj, final CompletionHandler<Object> handler) {
      ShareReqDTO data= convert(obj,ShareReqDTO.class);
      _share(data, new CompletionHandler<ShareResDTO>() {
        @Override
        public void complete(ShareResDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(ShareResDTO value) { handler.setProgressData(value); }
      });

    }
  }
  

  