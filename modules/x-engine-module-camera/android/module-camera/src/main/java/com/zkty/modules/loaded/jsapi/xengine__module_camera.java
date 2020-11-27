
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

  
  class CameraDTO {
    @Optional
		public boolean allowsEditing;

    @Optional
		public boolean savePhotosAlbum;

    @Optional
		public Integer cameraFlashMode;

    @Optional
		public String cameraDevice;

    public boolean isbase64;

    public Map<String,String> args;

    @Optional
		public Integer photoCount;

    public String __event__;
  }
  
  class CameraRetDTO {
    public String retImage;

    public String fileName;

    public String contentType;
  }
  
  interface xengine__module_camera_i {
    public void _openImagePicker(CameraDTO dto, final CompletionHandler<CameraRetDTO> handler);
  }
  
  
  public abstract class xengine__module_camera extends xengine__module_BaseModule implements xengine__module_camera_i {
    @Override
    public String moduleId() {
      return "com.zkty.module.camera";
    }
  
    @JavascriptInterface
    final public void openImagePicker(JSONObject obj, final CompletionHandler<Object> handler) {
      CameraDTO data= convert(obj,CameraDTO.class);
      _openImagePicker(data, new CompletionHandler<CameraRetDTO>() {
        @Override
        public void complete(CameraRetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(CameraRetDTO value) { handler.setProgressData(value); }
      });

    }
  }
  

  