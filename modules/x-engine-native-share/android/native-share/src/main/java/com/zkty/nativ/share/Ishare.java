package com.zkty.nativ.share;

import java.util.List;

public interface Ishare {

    List<String> channels();


    void share(String channel, String type, String text, String title, String desc, String imgUrl, String imgData, String url
            , String userName, String path, String link, int miniProgramType);
}
