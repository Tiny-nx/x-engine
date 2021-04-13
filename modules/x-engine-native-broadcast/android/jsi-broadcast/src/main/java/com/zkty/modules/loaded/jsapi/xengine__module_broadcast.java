
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

  
  class SheetDTO {
    public String title;

    @Optional
		public List<String> itemList;

    @Optional
		public String content;

    public String __event__;
  }
  
  class ContinousDTO {
    @Optional
		public String __event__;
  }
  
  class MsgPayloadDTO {
    public String type;

    @Optional
		public Map<String,String> args;

    @Optional
		public String sender;

    @Optional
		public List<String> receiver;

    public String __event__;

    public String __ret__;
  }
  
  class _0_com_zkty_module_broadcast_DTO {
    @Optional
		public Integer age;

    @Optional
		public String name;

    @Optional
		public List<String> books;

    @Optional
		public _1_com_zkty_module_broadcast_DTO complexArg;
  }
  
  class _1_com_zkty_module_broadcast_DTO {
    public Integer a;

    public String name;
  }
  
  class _2_com_zkty_module_broadcast_DTO {
    @Optional
		public Integer age;

    @Optional
		public String name;

    @Optional
		public List<String> books;

    @Optional
		public _3_com_zkty_module_broadcast_DTO complexArg;
  }
  
  class _3_com_zkty_module_broadcast_DTO {
    public Integer a;

    public String name;
  }
  
  interface xengine__module_broadcast_i {
    public void _broadcastOn(final CompletionHandler<Nullable> handler);
public void _broadcastOff(final CompletionHandler<Nullable> handler);
public void _triggerNativeBroadCast(final CompletionHandler<Nullable> handler);
public void _repeatReturn__event__(ContinousDTO dto, final CompletionHandler<String> handler);
public void _repeatReturn__ret__(ContinousDTO dto, final CompletionHandler<String> handler);
public void _ReturnInPromiseThen(ContinousDTO dto, final CompletionHandler<String> handler);
public void _noArgNoRet(final CompletionHandler<Nullable> handler);
public void _noArgRetPrimitive(final CompletionHandler<String> handler);
public void _noArgRetSheetDTO(final CompletionHandler<SheetDTO> handler);
public void _haveArgNoRet(SheetDTO dto, final CompletionHandler<Nullable> handler);
public void _haveArgRetPrimitive(SheetDTO dto, final CompletionHandler<String> handler);
public void _haveArgRetSheetDTO(SheetDTO dto, final CompletionHandler<SheetDTO> handler);
public void _anonymousType(_2_com_zkty_module_broadcast_DTO dto, final CompletionHandler<_0_com_zkty_module_broadcast_DTO> handler);
  }
  
  
  public abstract class xengine__module_broadcast extends xengine__module_BaseModule implements xengine__module_broadcast_i {
    @Override
    public String moduleId() {
      return "com.zkty.module.broadcast";
    }
  
    @JavascriptInterface
    final public void broadcastOn(JSONObject obj, final CompletionHandler<Object> handler) {
      _broadcastOn(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void broadcastOff(JSONObject obj, final CompletionHandler<Object> handler) {
      _broadcastOff(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void triggerNativeBroadCast(JSONObject obj, final CompletionHandler<Object> handler) {
      _triggerNativeBroadCast(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void repeatReturn__event__(JSONObject obj, final CompletionHandler<Object> handler) {
      ContinousDTO data= convert(obj,ContinousDTO.class);
      _repeatReturn__event__(data, new CompletionHandler<String>() {
        @Override
        public void complete(String retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(String value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void repeatReturn__ret__(JSONObject obj, final CompletionHandler<Object> handler) {
      ContinousDTO data= convert(obj,ContinousDTO.class);
      _repeatReturn__ret__(data, new CompletionHandler<String>() {
        @Override
        public void complete(String retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(String value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void ReturnInPromiseThen(JSONObject obj, final CompletionHandler<Object> handler) {
      ContinousDTO data= convert(obj,ContinousDTO.class);
      _ReturnInPromiseThen(data, new CompletionHandler<String>() {
        @Override
        public void complete(String retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(String value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void noArgNoRet(JSONObject obj, final CompletionHandler<Object> handler) {
      _noArgNoRet(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void noArgRetPrimitive(JSONObject obj, final CompletionHandler<Object> handler) {
      _noArgRetPrimitive(new CompletionHandler<String>() {
        @Override
        public void complete(String retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(String value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void noArgRetSheetDTO(JSONObject obj, final CompletionHandler<Object> handler) {
      _noArgRetSheetDTO(new CompletionHandler<SheetDTO>() {
        @Override
        public void complete(SheetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(SheetDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void haveArgNoRet(JSONObject obj, final CompletionHandler<Object> handler) {
      SheetDTO data= convert(obj,SheetDTO.class);
      _haveArgNoRet(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void haveArgRetPrimitive(JSONObject obj, final CompletionHandler<Object> handler) {
      SheetDTO data= convert(obj,SheetDTO.class);
      _haveArgRetPrimitive(data, new CompletionHandler<String>() {
        @Override
        public void complete(String retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(String value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void haveArgRetSheetDTO(JSONObject obj, final CompletionHandler<Object> handler) {
      SheetDTO data= convert(obj,SheetDTO.class);
      _haveArgRetSheetDTO(data, new CompletionHandler<SheetDTO>() {
        @Override
        public void complete(SheetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(SheetDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void anonymousType(JSONObject obj, final CompletionHandler<Object> handler) {
      _2_com_zkty_module_broadcast_DTO data= convert(obj,_2_com_zkty_module_broadcast_DTO.class);
      _anonymousType(data, new CompletionHandler<_0_com_zkty_module_broadcast_DTO>() {
        @Override
        public void complete(_0_com_zkty_module_broadcast_DTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(_0_com_zkty_module_broadcast_DTO value) { handler.setProgressData(value); }
      });

    }
  }
  

  