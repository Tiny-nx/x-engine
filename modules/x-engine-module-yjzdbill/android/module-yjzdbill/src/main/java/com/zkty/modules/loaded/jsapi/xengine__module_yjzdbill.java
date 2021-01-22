
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

  
  class YJBillDTO {
    public String businessCstNo;

    public String platMerCstNo;

    public String tradeMerCstNo;

    public String billNo;

    @Optional
		public String appScheme;

    @Optional
		public boolean payType;
  }
  
  class YJBillRefundDTO {
    public String refundOrderNo;
  }
  
  class YJBillRetDTO {
    public String billRetStatus;

    public String billRetStatusMessage;

    @Optional
		public boolean isCancel;
  }
  
  class YJBillListDTO {
    public String businessCstNo;

    public String roomNo;

    public String userRoomNo;

    @Optional
		public String appScheme;

    public boolean payType;

    public String billStatus;

    public String billType;
  }
  
  class WalletDTO {
    public String platMerCstNo;

    public String businessCstName;

    public String businessCstNo;

    public String businessCstMobileNo;

    @Optional
		public String appScheme;
  }
  
  interface xengine__module_yjzdbill_i {
    public void _YJBillPayment(YJBillDTO dto, final CompletionHandler<YJBillRetDTO> handler);
public void _YJBillRefund(YJBillRefundDTO dto, final CompletionHandler<YJBillRetDTO> handler);
public void _YJBillList(YJBillListDTO dto, final CompletionHandler<Nullable> handler);
public void _callWallet(WalletDTO dto, final CompletionHandler<Nullable> handler);
  }
  
  
  public abstract class xengine__module_yjzdbill extends xengine__module_BaseModule implements xengine__module_yjzdbill_i {
    @Override
    public String moduleId() {
      return "com.zkty.module.yjzdbill";
    }
  
    @JavascriptInterface
    final public void YJBillPayment(JSONObject obj, final CompletionHandler<Object> handler) {
      YJBillDTO data= convert(obj,YJBillDTO.class);
      _YJBillPayment(data, new CompletionHandler<YJBillRetDTO>() {
        @Override
        public void complete(YJBillRetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(YJBillRetDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void YJBillRefund(JSONObject obj, final CompletionHandler<Object> handler) {
      YJBillRefundDTO data= convert(obj,YJBillRefundDTO.class);
      _YJBillRefund(data, new CompletionHandler<YJBillRetDTO>() {
        @Override
        public void complete(YJBillRetDTO retValue) { handler.complete(retValue); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(YJBillRetDTO value) { handler.setProgressData(value); }
      });

    }

    @JavascriptInterface
    final public void YJBillList(JSONObject obj, final CompletionHandler<Object> handler) {
      YJBillListDTO data= convert(obj,YJBillListDTO.class);
      _YJBillList(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }

    @JavascriptInterface
    final public void callWallet(JSONObject obj, final CompletionHandler<Object> handler) {
      WalletDTO data= convert(obj,WalletDTO.class);
      _callWallet(data, new CompletionHandler<Nullable>() {
        @Override
        public void complete(Nullable retValue) { handler.complete(null); }
        @Override
        public void complete() { handler.complete(); }
        @Override
        public void setProgressData(Nullable value) { handler.setProgressData(null); }
      });

    }
  }
  

  