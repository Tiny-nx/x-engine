
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

  
  class DeviceSheetDTO {
    public String __event__;
  }
  
  class DeviceMoreDTO {
    public String content;
  }
  
  class DevicePhoneNumDTO {
    public String phoneNumber;
  }
  
  class DeviceMessageDTO {
    public String phoneNumber;

    public String messageContent;
  }
  
  interface xengine_module_device_protocol {
    public void _getPhoneType(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getSystemVersion(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getUDID(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getBatteryLevel(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getPreferredLanguage(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getScreenWidth(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getScreenHeight(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getSafeAreaTop(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getSafeAreaBottom(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getSafeAreaLeft(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getSafeAreaRight(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getStatusHeight(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getNavigationHeight(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _getTabBarHeight(DeviceSheetDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
public void _devicePhoneCall(DevicePhoneNumDTO dto, final CompletionHandler<Nullable> handler);
public void _deviceSendMessage(DeviceMessageDTO dto, final CompletionHandler<DeviceMoreDTO> handler);
  }
  
  
  public abstract class xengine_module_device extends JSIModule implements xengine_module_device_protocol {
    @Override
    public String moduleId() {
      return "com.zkty.module.device";
    }
  
    @JavascriptInterface
    final public void getPhoneType(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getPhoneType(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getSystemVersion(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getSystemVersion(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getUDID(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getUDID(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getBatteryLevel(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getBatteryLevel(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getPreferredLanguage(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getPreferredLanguage(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getScreenWidth(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getScreenWidth(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getScreenHeight(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getScreenHeight(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getSafeAreaTop(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getSafeAreaTop(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getSafeAreaBottom(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getSafeAreaBottom(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getSafeAreaLeft(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getSafeAreaLeft(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getSafeAreaRight(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getSafeAreaRight(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getStatusHeight(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getStatusHeight(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getNavigationHeight(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getNavigationHeight(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void getTabBarHeight(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceSheetDTO data= convert(obj,DeviceSheetDTO.class);
      _getTabBarHeight(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void devicePhoneCall(JSONObject obj, final CompletionHandler<Object> handler) {
      DevicePhoneNumDTO data= convert(obj,DevicePhoneNumDTO.class);
      _devicePhoneCall(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void deviceSendMessage(JSONObject obj, final CompletionHandler<Object> handler) {
      DeviceMessageDTO data= convert(obj,DeviceMessageDTO.class);
      _deviceSendMessage(data, new CompletionHandler<DeviceMoreDTO>() {
        @Override
        public void complete(DeviceMoreDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(DeviceMoreDTO value) { handler.setProgressData(value); }
      });

    }
  }
  

  