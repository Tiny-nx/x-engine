package com.zkty.nativ.camera.cameraImpl.activity;

import android.Manifest;
import android.animation.ObjectAnimator;
import android.app.ProgressDialog;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.os.Handler;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.view.View;
import android.view.WindowManager;
import android.widget.PopupWindow;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.FileProvider;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;


import com.zkty.nativ.camera.cameraImpl.ImagePicker;
import com.zkty.nativ.camera.cameraImpl.adapter.ImageFoldersAdapter;
import com.zkty.nativ.camera.cameraImpl.adapter.ImagePickerAdapter;
import com.zkty.nativ.camera.cameraImpl.data.MediaFile;
import com.zkty.nativ.camera.cameraImpl.data.MediaFolder;
import com.zkty.nativ.camera.cameraImpl.executors.CommonExecutor;
import com.zkty.nativ.camera.cameraImpl.listener.MediaLoadCallback;
import com.zkty.nativ.camera.cameraImpl.manager.ConfigManager;
import com.zkty.nativ.camera.cameraImpl.manager.SelectionManager;
import com.zkty.nativ.camera.cameraImpl.task.ImageLoadTask;
import com.zkty.nativ.camera.cameraImpl.task.MediaLoadTask;
import com.zkty.nativ.camera.cameraImpl.task.VideoLoadTask;
import com.zkty.nativ.camera.cameraImpl.utils.DataUtil;
import com.zkty.nativ.camera.cameraImpl.utils.MediaFileUtil;
import com.zkty.nativ.camera.cameraImpl.utils.PermissionUtil;
import com.zkty.nativ.camera.cameraImpl.utils.Utils;
import com.zkty.nativ.camera.cameraImpl.view.ImageFolderPopupWindow;
import com.zkty.nativ.core.utils.XEngineProvider;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import nativ.camera.R;


public class ImagePickerActivity extends BCameraActivity implements ImagePickerAdapter.OnItemClickListener, ImageFoldersAdapter.OnImageFolderChangeListener {
    /**
     * ????????????
     */
    private String mTitle;
    private boolean isShowCamera;
    private boolean isShowImage;
    private boolean isShowVideo;
    private boolean isSingleType;
    private int mMaxCount;
    private List<String> mImagePaths;

    /**
     * ??????UI
     */
    private TextView mTvTitle;
    private TextView mTvCommit;
    private TextView mTvImageTime;
    private RecyclerView mRecyclerView;
    private TextView mTvImageFolders;
    private ImageFolderPopupWindow mImageFolderPopupWindow;
    private ProgressDialog mProgressDialog;
    private RelativeLayout mRlBottom;

    private GridLayoutManager mGridLayoutManager;
    private ImagePickerAdapter mImagePickerAdapter;

    //???????????????
    private List<MediaFile> mMediaFileList;
    //??????????????????
    private List<MediaFolder> mMediaFolderList;

    //??????????????????
    private boolean isShowTime;

    //??????????????????
    private static final int LIGHT_OFF = 0;
    private static final int LIGHT_ON = 1;

    private Handler mMyHandler = new Handler();
    private Runnable mHideRunnable = new Runnable() {
        @Override
        public void run() {
            hideImageTime();
        }
    };


    /**
     * ?????????????????????
     */
    private static final int REQUEST_SELECT_IMAGES_CODE = 0x01;//???????????????????????????????????????????????????


    /**
     * ????????????
     */
    private String mFilePath;
    private static final int REQUEST_CODE_CAPTURE = 0x02;//??????????????????

    /**
     * ????????????
     */
    private static final int REQUEST_PERMISSION_CAMERA_CODE = 0x03;


    @Override
    protected int bindLayout() {
        return R.layout.activity_imagepicker;
    }


    /**
     * ???????????????
     */
    @Override
    protected void initConfig() {
        mTitle = ConfigManager.getInstance().getTitle();
        isShowCamera = ConfigManager.getInstance().isShowCamera();
        isShowImage = ConfigManager.getInstance().isShowImage();
        isShowVideo = ConfigManager.getInstance().isShowVideo();
        isSingleType = ConfigManager.getInstance().isSingleType();
        mMaxCount = ConfigManager.getInstance().getMaxCount();
        SelectionManager.getInstance().setMaxCount(mMaxCount);

        //????????????????????????
        mImagePaths = ConfigManager.getInstance().getImagePaths();
        if (mImagePaths != null && !mImagePaths.isEmpty()) {
            SelectionManager.getInstance().addImagePathsToSelectList(mImagePaths);
        }
    }


    /**
     * ?????????????????????
     */
    @Override
    protected void initView() {
        mProgressDialog = ProgressDialog.show(this, null, getString(R.string.scanner_image));

        //???????????????
        mTvTitle = findViewById(R.id.tv_actionBar_title);
        if (TextUtils.isEmpty(mTitle)) {
            mTvTitle.setText(getString(R.string.image_picker));
        } else {
            mTvTitle.setText(mTitle);
        }
        mTvCommit = findViewById(R.id.tv_actionBar_commit);

        //????????????????????????
        mTvImageTime = findViewById(R.id.tv_image_time);

        //???????????????
        mRlBottom = findViewById(R.id.rl_main_bottom);
        mTvImageFolders = findViewById(R.id.tv_main_imageFolders);

        //????????????
        mRecyclerView = findViewById(R.id.rv_main_images);
        mGridLayoutManager = new GridLayoutManager(this, 4);
        mRecyclerView.setLayoutManager(mGridLayoutManager);
        //??????????????????Adapter???Item?????????????????????RecyclerView?????????????????????????????????true???RecyclerView???????????????????????????
        mRecyclerView.setHasFixedSize(true);
        mRecyclerView.setItemViewCacheSize(60);

        mMediaFileList = new ArrayList<>();
        mImagePickerAdapter = new ImagePickerAdapter(this, mMediaFileList);
        mImagePickerAdapter.setOnItemClickListener(this);
        mRecyclerView.setAdapter(mImagePickerAdapter);


    }

    /**
     * ???????????????????????????
     */
    @Override
    protected void initListener() {

        findViewById(R.id.iv_actionBar_back).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setResult(RESULT_CANCELED);
                finish();
            }
        });

        mTvCommit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                commitSelection();
            }
        });

        mTvImageFolders.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (mImageFolderPopupWindow != null) {
                    setLightMode(LIGHT_OFF);
                    mImageFolderPopupWindow.showAsDropDown(mRlBottom, 0, 0);
                }
            }
        });

        mRecyclerView.addOnScrollListener(new RecyclerView.OnScrollListener() {
            @Override
            public void onScrollStateChanged(RecyclerView recyclerView, int newState) {
                super.onScrollStateChanged(recyclerView, newState);
                updateImageTime();
            }

            @Override
            public void onScrolled(RecyclerView recyclerView, int dx, int dy) {
                super.onScrolled(recyclerView, dx, dy);
                updateImageTime();
            }
        });

    }

    /**
     * ???????????????
     */
    @Override
    protected void getData() {
        //?????????????????????
        boolean hasPermission = PermissionUtil.checkPermission(this);
        if (!hasPermission) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA, Manifest.permission.WRITE_EXTERNAL_STORAGE}, REQUEST_PERMISSION_CAMERA_CODE);
        } else {
            startScannerTask();
        }
    }

    /**
     * ??????????????????
     *
     * @param requestCode
     * @param permissions
     * @param grantResults
     */
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == REQUEST_PERMISSION_CAMERA_CODE) {
            if (grantResults.length >= 1) {
                int cameraResult = grantResults[0];//????????????
                int sdResult = grantResults[1];//sd?????????
                boolean cameraGranted = cameraResult == PackageManager.PERMISSION_GRANTED;//????????????
                boolean sdGranted = sdResult == PackageManager.PERMISSION_GRANTED;//????????????
                if (cameraGranted && sdGranted) {
                    //?????????????????????sd??????????????????????????????
                    startScannerTask();
                } else {
                    //????????????
                    Toast.makeText(this, getString(R.string.permission_tip), Toast.LENGTH_SHORT).show();
                    finish();
                }
            }
        }
    }


    /**
     * ??????????????????
     */
    private void startScannerTask() {
        Runnable mediaLoadTask = null;

        //???????????????????????????
        if (isShowImage && isShowVideo) {
            mediaLoadTask = new MediaLoadTask(this, new MediaLoader());
        }

        //???????????????
        if (!isShowImage && isShowVideo) {
            mediaLoadTask = new VideoLoadTask(this, new MediaLoader());
        }

        //???????????????
        if (isShowImage && !isShowVideo) {
            mediaLoadTask = new ImageLoadTask(this, new MediaLoader());
        }

        //?????????????????????????????????????????????????????????
        if (mediaLoadTask == null) {
            mediaLoadTask = new MediaLoadTask(this, new MediaLoader());
        }

        CommonExecutor.getInstance().execute(mediaLoadTask);
    }


    /**
     * ????????????????????????????????????UI??????
     */
    class MediaLoader implements MediaLoadCallback {

        @Override
        public void loadMediaSuccess(final List<MediaFolder> mediaFolderList) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (!mediaFolderList.isEmpty()) {
                        //????????????????????????
                        mMediaFileList.addAll(mediaFolderList.get(0).getMediaFileList());
                        mImagePickerAdapter.notifyDataSetChanged();

                        //?????????????????????
                        mMediaFolderList = new ArrayList<>(mediaFolderList);
                        mImageFolderPopupWindow = new ImageFolderPopupWindow(ImagePickerActivity.this, mMediaFolderList);
                        mImageFolderPopupWindow.setAnimationStyle(R.style.imageFolderAnimator);
                        mImageFolderPopupWindow.getAdapter().setOnImageFolderChangeListener(ImagePickerActivity.this);
                        mImageFolderPopupWindow.setOnDismissListener(new PopupWindow.OnDismissListener() {
                            @Override
                            public void onDismiss() {
                                setLightMode(LIGHT_ON);
                            }
                        });
                        updateCommitButton();
                    }
                    mProgressDialog.cancel();
                }
            });
        }
    }


    /**
     * ????????????
     */
    private void hideImageTime() {
        if (isShowTime) {
            isShowTime = false;
            ObjectAnimator.ofFloat(mTvImageTime, "alpha", 1, 0).setDuration(300).start();
        }
    }

    /**
     * ????????????
     */
    private void showImageTime() {
        if (!isShowTime) {
            isShowTime = true;
            ObjectAnimator.ofFloat(mTvImageTime, "alpha", 0, 1).setDuration(300).start();
        }
    }

    /**
     * ????????????
     */
    private void updateImageTime() {
        int position = mGridLayoutManager.findFirstVisibleItemPosition();
        if (position != RecyclerView.NO_POSITION) {
            MediaFile mediaFile = mImagePickerAdapter.getMediaFile(position);
            if (mediaFile != null) {
                if (mTvImageTime.getVisibility() != View.VISIBLE) {
                    mTvImageTime.setVisibility(View.VISIBLE);
                }
                String time = Utils.getImageTime(mediaFile.getDateToken());
                mTvImageTime.setText(time);
                showImageTime();
                mMyHandler.removeCallbacks(mHideRunnable);
                mMyHandler.postDelayed(mHideRunnable, 1500);
            }
        }
    }

    /**
     * ???????????????????????????
     *
     * @param lightMode
     */
    private void setLightMode(int lightMode) {
        WindowManager.LayoutParams layoutParams = getWindow().getAttributes();
        switch (lightMode) {
            case LIGHT_OFF:
                layoutParams.alpha = 0.7f;
                break;
            case LIGHT_ON:
                layoutParams.alpha = 1.0f;
                break;
        }
        getWindow().setAttributes(layoutParams);
    }

    /**
     * ????????????
     *
     * @param view
     * @param position
     */
    @Override
    public void onMediaClick(View view, int position) {
        if (isShowCamera) {
            if (position == 0) {
                if (!SelectionManager.getInstance().isCanChoose()) {
                    Toast.makeText(this, String.format(getString(R.string.select_image_max), mMaxCount), Toast.LENGTH_SHORT).show();
                    return;
                }
                showCamera();
                return;
            }
        }

        if (mMediaFileList != null) {
            DataUtil.getInstance().setMediaData(mMediaFileList);
            Intent intent = new Intent(this, ImagePreActivity.class);
            if (isShowCamera) {
                intent.putExtra(ImagePreActivity.IMAGE_POSITION, position - 1);
            } else {
                intent.putExtra(ImagePreActivity.IMAGE_POSITION, position);
            }
            startActivityForResult(intent, REQUEST_SELECT_IMAGES_CODE);
        }
    }

    /**
     * ??????/??????????????????
     *
     * @param view
     * @param position
     */
    @Override
    public void onMediaCheck(View view, int position) {
        if (isShowCamera) {
            if (position == 0) {
                if (!SelectionManager.getInstance().isCanChoose()) {
                    Toast.makeText(this, String.format(getString(R.string.select_image_max), mMaxCount), Toast.LENGTH_SHORT).show();
                    return;
                }
                showCamera();
                return;
            }
        }

        //????????????/????????????
        MediaFile mediaFile = mImagePickerAdapter.getMediaFile(position);
        if (mediaFile != null) {
            String imagePath = mediaFile.getPath();
            if (isSingleType) {
                //???????????????????????????????????????????????????????????????????????????????????????
                ArrayList<String> selectPathList = SelectionManager.getInstance().getSelectPaths();
                if (!selectPathList.isEmpty()) {
                    //?????????????????????????????????????????????
                    if (!SelectionManager.isCanAddSelectionPaths(imagePath, selectPathList.get(0))) {
                        //????????????
                        Toast.makeText(this, getString(R.string.single_type_choose), Toast.LENGTH_SHORT).show();
                        return;
                    }
                }
            }
            boolean addSuccess = SelectionManager.getInstance().addImageToSelectList(imagePath);
            if (addSuccess) {
                mImagePickerAdapter.notifyItemChanged(position);
            } else {
                Toast.makeText(this, String.format(getString(R.string.select_image_max), mMaxCount), Toast.LENGTH_SHORT).show();
            }
        }
        updateCommitButton();
    }

    /**
     * ????????????????????????
     */
    private void updateCommitButton() {
        //??????????????????UI
        int selectCount = SelectionManager.getInstance().getSelectPaths().size();
        if (selectCount == 0) {
            mTvCommit.setEnabled(false);
            mTvCommit.setText(getString(R.string.confirm));
            return;
        }
        if (selectCount < mMaxCount) {
            mTvCommit.setEnabled(true);
            mTvCommit.setText(String.format(getString(R.string.confirm_msg), selectCount, mMaxCount));
            return;
        }
        if (selectCount == mMaxCount) {
            mTvCommit.setEnabled(true);
            mTvCommit.setText(String.format(getString(R.string.confirm_msg), selectCount, mMaxCount));
            return;
        }
    }

    /**
     * ??????????????????
     */
    private void showCamera() {

        if (isSingleType) {
            //???????????????????????????????????????????????????????????????????????????????????????
            ArrayList<String> selectPathList = SelectionManager.getInstance().getSelectPaths();
            if (!selectPathList.isEmpty()) {
                if (MediaFileUtil.isVideoFileType(selectPathList.get(0))) {
                    //???????????????????????????????????????
                    Toast.makeText(this, getString(R.string.single_type_choose), Toast.LENGTH_SHORT).show();
                    return;
                }
            }
        }

        //??????????????????
        File fileDir = new File(Environment.getExternalStorageDirectory(), "Pictures");
        if (!fileDir.exists()) {
            fileDir.mkdir();
        }
        mFilePath = fileDir.getAbsolutePath() + "/IMG_" + System.currentTimeMillis() + ".jpg";

        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        Uri uri;
        if (Build.VERSION.SDK_INT >= 24) {
            uri = FileProvider.getUriForFile(this, XEngineProvider.getProvider(), new File(mFilePath));
        } else {
            uri = Uri.fromFile(new File(mFilePath));
        }
        intent.putExtra(MediaStore.EXTRA_OUTPUT, uri);
        startActivityForResult(intent, REQUEST_CODE_CAPTURE);
    }

    /**
     * ?????????????????????????????????????????????????????????
     *
     * @param view
     * @param position
     */
    @Override
    public void onImageFolderChange(View view, int position) {
        MediaFolder mediaFolder = mMediaFolderList.get(position);
        //????????????????????????
        String folderName = mediaFolder.getFolderName();
        if (!TextUtils.isEmpty(folderName)) {
            mTvImageFolders.setText(folderName);
        }
        //???????????????????????????
        mMediaFileList.clear();
        mMediaFileList.addAll(mediaFolder.getMediaFileList());
        mImagePickerAdapter.notifyDataSetChanged();

        mImageFolderPopupWindow.dismiss();
    }

    /**
     * ????????????
     *
     * @param requestCode
     * @param resultCode
     * @param data
     */
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK) {
            if (requestCode == REQUEST_CODE_CAPTURE) {
                //?????????????????????
                sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.parse("file://" + mFilePath)));
                //?????????????????????
                SelectionManager.getInstance().addImageToSelectList(mFilePath);

                ArrayList<String> list = new ArrayList<>(SelectionManager.getInstance().getSelectPaths());
                Intent intent = new Intent();
                intent.putStringArrayListExtra(ImagePicker.EXTRA_SELECT_IMAGES, list);
                setResult(RESULT_OK, intent);
                SelectionManager.getInstance().removeAll();//??????????????????
                finish();
            }

            if (requestCode == REQUEST_SELECT_IMAGES_CODE) {
                commitSelection();
            }
        }
    }

    /**
     * ???????????????????????????
     */
    private void commitSelection() {
        ArrayList<String> list = new ArrayList<>(SelectionManager.getInstance().getSelectPaths());
        Intent intent = new Intent();
        intent.putStringArrayListExtra(ImagePicker.EXTRA_SELECT_IMAGES, list);
        setResult(RESULT_OK, intent);
        SelectionManager.getInstance().removeAll();//??????????????????
        finish();
    }


    @Override
    protected void onResume() {
        super.onResume();
        mImagePickerAdapter.notifyDataSetChanged();
        updateCommitButton();
    }

    @Override
    public void onBackPressed() {
        setResult(RESULT_CANCELED);
        super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        try {
            ConfigManager.getInstance().getImageLoader().clearMemoryCache();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
