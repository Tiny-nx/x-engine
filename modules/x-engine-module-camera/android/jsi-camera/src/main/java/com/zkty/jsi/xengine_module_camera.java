
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!

  package com.zkty.jsi;

  import java.util.List;
  import java.util.Map;
  import java.util.Set;
  import android.webkit.JavascriptInterface;
  import com.alibaba.fastjson.JSON;
  import com.alibaba.fastjson.JSONObject;
  import com.zkty.modules.nativ.jsi.bridge.CompletionHandler;
  import com.zkty.modules.nativ.jsi.JSIModule;
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

    public String width;

    public String height;
  }
  
  class SaveImageDTO {
    public String type;

    public String imageData;
  }
  
  interface xengine_module_camera_protocol {
    public void _openImagePicker(CameraDTO dto, final CompletionHandler<CameraRetDTO> handler);
public void _saveImageToAlbum(SaveImageDTO dto, final CompletionHandler<Nullable> handler);
  }
  
  
  public abstract class xengine_module_camera extends JSIModule implements xengine_module_camera_protocol {
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

    @JavascriptInterface
    final public void saveImageToAlbum(JSONObject obj, final CompletionHandler<Object> handler) {
      SaveImageDTO data= convert(obj,SaveImageDTO.class);
      _saveImageToAlbum(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }
  }
  

  