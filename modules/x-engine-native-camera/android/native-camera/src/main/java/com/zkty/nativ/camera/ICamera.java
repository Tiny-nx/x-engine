package com.zkty.nativ.camera;

import com.zkty.nativ.camera.cameraImpl.data.MediaFile;

import java.util.List;

public interface ICamera {
    void openImagePicker(CameraDTO dto, OpenImageCallBack callBack);
    void saveImageToAlbum(String imageData, String type, SaveCallBack callBack);
    void preImage(List<MediaFile> imageDataList, int index, PreImageCallBack callBack);
}

