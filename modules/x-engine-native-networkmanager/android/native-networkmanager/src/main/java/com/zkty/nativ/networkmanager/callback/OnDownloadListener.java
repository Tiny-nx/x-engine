package com.zkty.nativ.networkmanager.callback;

/**
 * @author : MaJi
 * @time : (5/26/21)
 * dexc :
 */
public interface OnDownloadListener {
    /**
     * 下载成功
     */
    void onDownloadSuccess();

    /**
     * @param progress
     * 下载进度
     */
    void onDownloading(int progress);

    /**
     * 下载失败
     */
    void onDownloadFailed(int code,String msg);
}
