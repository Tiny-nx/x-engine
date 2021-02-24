
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

  
  class XETipDTO {
    public String tipContent;
  }
  
  class XEToastDTO {
    public String tipContent;

    public Integer duration;

    public String icon;
  }
  
  class XEModalDTO {
    @Optional
		public String tipTitle;

    public String tipContent;

    public boolean showCancel;
  }
  
  class XEPickerDTO {
    public String leftText;

    public Integer leftTextSize;

    public String leftTextColor;

    public String rightText;

    public Integer rightTextSize;

    public String rightTextColor;

    public String backgroundColor;

    public String backgroundColorAlpha;

    public String pickerBackgroundColor;

    public String pickerHeight;

    public String rowHeight;

    public List<List<String>> data;

    public String toolBarBackgroundColor;

    public String __event__;
  }
  
  class XESheetDTO {
    public String title;

    @Optional
		public List<String> itemList;

    @Optional
		public String content;

    public String __event__;
  }
  
  class XERetDTO {
    public String content;
  }
  
  interface xengine__module_ui_i {
    public void _showToast(XEToastDTO dto, final CompletionHandler<Nullable> handler);
public void _hideToast(final CompletionHandler<Nullable> handler);
public void _hiddenHudToast(final CompletionHandler<Nullable> handler);
public void _showLoading(XETipDTO dto, final CompletionHandler<Nullable> handler);
public void _hideLoading(final CompletionHandler<Nullable> handler);
public void _showModal(XEModalDTO dto, final CompletionHandler<XERetDTO> handler);
public void _showActionSheet(XESheetDTO dto, final CompletionHandler<XERetDTO> handler);
public void _showPickerView(XEPickerDTO dto, final CompletionHandler<XERetDTO> handler);
public void _hideTabbar(final CompletionHandler<Nullable> handler);
public void _showTabbar(final CompletionHandler<Nullable> handler);
  }
  
  
  public abstract class xengine__module_ui extends xengine__module_BaseModule implements xengine__module_ui_i {
    @Override
    public String moduleId() {
      return "com.zkty.module.ui";
    }
  
    @JavascriptInterface
    final public void showToast(JSONObject obj, final CompletionHandler<Object> handler) {
      XEToastDTO data= convert(obj,XEToastDTO.class);
      _showToast(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void hideToast(JSONObject obj, final CompletionHandler<Object> handler) {
      _hideToast(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void hiddenHudToast(JSONObject obj, final CompletionHandler<Object> handler) {
      _hiddenHudToast(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void showLoading(JSONObject obj, final CompletionHandler<Object> handler) {
      XETipDTO data= convert(obj,XETipDTO.class);
      _showLoading(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void hideLoading(JSONObject obj, final CompletionHandler<Object> handler) {
      _hideLoading(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void showModal(JSONObject obj, final CompletionHandler<Object> handler) {
      XEModalDTO data= convert(obj,XEModalDTO.class);
      _showModal(data, new CompletionHandler<XERetDTO>() {
        @Override
        public void complete(XERetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(XERetDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void showActionSheet(JSONObject obj, final CompletionHandler<Object> handler) {
      XESheetDTO data= convert(obj,XESheetDTO.class);
      _showActionSheet(data, new CompletionHandler<XERetDTO>() {
        @Override
        public void complete(XERetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(XERetDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void showPickerView(JSONObject obj, final CompletionHandler<Object> handler) {
      XEPickerDTO data= convert(obj,XEPickerDTO.class);
      _showPickerView(data, new CompletionHandler<XERetDTO>() {
        @Override
        public void complete(XERetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(XERetDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void hideTabbar(JSONObject obj, final CompletionHandler<Object> handler) {
      _hideTabbar(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void showTabbar(JSONObject obj, final CompletionHandler<Object> handler) {
      _showTabbar(new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }
  }
  

  