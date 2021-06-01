package com.zkty.nativ.networkmanager.callback;

/**
 * @author : MaJi
 * @time : (5/26/21)
 * dexc :
 */
public interface OnUploadListener {
    /**
     * 下载成功
     */
    void onUploadSuccess();

    /**
     * @param progress
     * 下载进度
     */
    void onUploading(int progress);

    /**
     * 下载失败
     */
    void onUploadFailed(int code,String msg);
}
