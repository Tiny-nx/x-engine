package com.zkty.nativ.geo;

public interface IGeoManager {

    void locate(CallBack callBack);

    void navigate(CallBack callBack);

    interface CallBack {
        void onLocation(String location);
    }

}
