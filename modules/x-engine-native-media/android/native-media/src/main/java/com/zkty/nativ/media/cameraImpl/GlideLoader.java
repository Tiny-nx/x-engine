package com.zkty.nativ.media.cameraImpl;

import android.net.Uri;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.zkty.nativ.core.utils.ImageUtils;
import com.zkty.nativ.media.cameraImpl.utils.ImageLoader;


public class GlideLoader implements ImageLoader {

    @Override
    public void loadImage(ImageView imageView, String imagePath) {
        Uri uri = ImageUtils.getMediaUriFromPath(imageView.getContext(),imagePath);
        Glide.with(imageView.getContext()).load(uri).into(imageView);
    }


    @Override
    public void loadPreImage(ImageView imageView, String imagePath) {
        Uri uri = ImageUtils.getMediaUriFromPath(imageView.getContext(),imagePath);
        Glide.with(imageView.getContext()).load(uri).into(imageView);
    }

    @Override
    public void clearMemoryCache() {

    }
}