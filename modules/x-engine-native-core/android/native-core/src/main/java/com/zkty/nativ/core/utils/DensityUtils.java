package com.zkty.nativ.core.utils;


import android.app.Activity;
import android.content.Context;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.os.Build;
import android.provider.Settings;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.DisplayCutout;
import android.view.View;
import android.view.WindowManager;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import java.lang.reflect.Method;


public class DensityUtils {

    /**
     * dip to Pixels
     *
     * @param context
     * @param dip
     * @return
     */
    public static int dipToPixels(Context context, float dip) {
        final float SCALE = context.getResources().getDisplayMetrics().density;
        return (int) (dip * SCALE + 0.5f);

    }

    /**
     * dip to Pixels
     *
     * @param context
     * @param dip
     * @return
     */
    public static int dipToPixels(Context context, double dip) {
        final float SCALE = context.getResources().getDisplayMetrics().density;
        return (int) (dip * SCALE + 0.5f);

    }


    /**
     * px to dp
     *
     * @param context
     * @param Pixels
     * @return
     */
    public static float pixelsToDip(Context context, float pixels) {
        final float SCALE = context.getResources().getDisplayMetrics().density;
        return pixels / SCALE;
    }

    public static int getScreenWidth(Context context) {

        return context.getResources().getDisplayMetrics().widthPixels;
    }

    public static int getScreenHeight(Context context) {
        return context.getResources().getDisplayMetrics().heightPixels;
    }

    public static float getRealWidth(Context context) {
        WindowManager wm = (WindowManager) context.getSystemService(Context.WINDOW_SERVICE);
        Display display = wm.getDefaultDisplay();
        int screenWidth = 0;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            DisplayMetrics dm = new DisplayMetrics();
            display.getRealMetrics(dm);
            screenWidth = dm.widthPixels;

        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.ICE_CREAM_SANDWICH) {
            try {
                screenWidth = (Integer) Display.class.getMethod("getRawWidth").invoke(display);
            } catch (Exception e) {
                DisplayMetrics dm = new DisplayMetrics();
                display.getMetrics(dm);
                screenWidth = dm.widthPixels;
            }
        }
        return screenWidth;
    }

    public static float getRealHeight(Context context) {
        WindowManager wm = (WindowManager) context.getSystemService(Context.WINDOW_SERVICE);
        Display display = wm.getDefaultDisplay();
        int screenHeight = 0;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            DisplayMetrics dm = new DisplayMetrics();
            display.getRealMetrics(dm);
            screenHeight = dm.heightPixels;

            //?????????????????????getRealSize??????
//            Point size = new Point();
//            display.getRealSize(size);
//            screenHeight = size.y;
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.ICE_CREAM_SANDWICH) {
            try {
                screenHeight = (Integer) Display.class.getMethod("getRawHeight").invoke(display);
            } catch (Exception e) {
                DisplayMetrics dm = new DisplayMetrics();
                display.getMetrics(dm);
                screenHeight = dm.heightPixels;
            }
        }
        return screenHeight;
    }


    /**
     * ??????statusBar?????????
     *
     * @return ???????????????
     */

    public static float getStatusBarHeight(Context context) {
        int statusBarHeight = -1;
        //??????status_bar_height?????????ID
        int resourceId = context.getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            //????????????ID????????????????????????
            statusBarHeight = context.getResources().getDimensionPixelSize(resourceId);
        }
        return statusBarHeight;
    }

    /**
     * ??????ActionBar?????????
     *
     * @return ActionBar??????
     */

    public static float getActionBarHeight(Context context) {
        if (context instanceof AppCompatActivity) {
            ActionBar actionBar = ((AppCompatActivity) context).getSupportActionBar();
            if (actionBar != null && actionBar.isShowing()) {
                TypedArray actionbarSizeTypedArray = context.obtainStyledAttributes(new int[]{
                        android.R.attr.actionBarSize
                });

                return actionbarSizeTypedArray.getDimension(0, 0);
            } else return 0;
        } else if (context instanceof Activity) {
            android.app.ActionBar actionBar = ((Activity) context).getActionBar();
            if (actionBar != null && actionBar.isShowing()) {
                TypedArray actionbarSizeTypedArray = context.obtainStyledAttributes(new int[]{
                        android.R.attr.actionBarSize
                });

                return actionbarSizeTypedArray.getDimension(0, 0);
            } else return 0;
        } else return 0;

    }


    /**
     * ???????????????????????????
     * 1. ????????????
     * 1.1 ?????????????????????-??????0
     * 1.2 ?????????????????????-?????????????????????????????????
     * 2. ???????????????
     * 2.1 ???????????????-??????0
     * 2.1 ???????????????-??????0
     * 2.2 ???????????????????????????-???????????????????????????
     */
    public static float getNavigationBarHeightIfRoom(Context context) {
        if (navigationGestureEnabled(context)) {
            return 0;
        }
        return getCurrentNavigationBarHeight(((Activity) context));
    }

    /**
     * ??????????????????????????????????????? 0 ??????  1 ?????????
     *
     * @param context
     * @return
     */
    private static boolean navigationGestureEnabled(Context context) {
        int val = Settings.Global.getInt(context.getContentResolver(), getDeviceInfo(), 0);
        return val != 0;
    }

    /**
     * ??????????????????????????????????????????????????????????????????????????????????????????oppo????????????vivo????????????
     *
     * @return
     */
    private static String getDeviceInfo() {
        String brand = Build.BRAND;
        if (TextUtils.isEmpty(brand)) return "navigationbar_is_min";

        if (brand.equalsIgnoreCase("HUAWEI")) {
            return "navigationbar_is_min";
        } else if (brand.equalsIgnoreCase("XIAOMI")) {
            return "force_fsg_nav_bar";
        } else if (brand.equalsIgnoreCase("VIVO")) {
            return "navigation_gesture_on";
        } else if (brand.equalsIgnoreCase("OPPO")) {
            return "navigation_gesture_on";
        } else {
            return "navigationbar_is_min";
        }
    }

    /**
     * ??????????????? ?????????????????????(??????????????????0)
     *
     * @param activity
     * @return
     */
    private static int getCurrentNavigationBarHeight(Activity activity) {
        if (isNavigationBarShown(activity)) {
            return getNavigationBarHeight(activity);
        } else {
            return 0;
        }
    }

    /**
     * ??????????????? ????????????????????????
     *
     * @param activity
     * @return
     */
    private static boolean isNavigationBarShown(Activity activity) {
        //????????????view,???????????????????????????????????????
        View view = activity.findViewById(android.R.id.navigationBarBackground);
        if (view == null) {
            return false;
        }
        int visible = view.getVisibility();
        return !(visible == View.GONE || visible == View.INVISIBLE);

    }

    /**
     * ??????????????? ???????????????(??????????????????)
     *
     * @param context
     * @return
     */
    private static int getNavigationBarHeight(Context context) {

        int result = 0;
        int resourceId = context.getResources().getIdentifier("navigation_bar_height", "dimen", "android");
        if (resourceId > 0) {
            result = context.getResources().getDimensionPixelSize(resourceId);
        }
        return result;
    }

    /**
     * ?????????????????????
     *
     * @param context
     * @return
     */
    public static float getSafeAreaTop(Context context) {
        return getStatusBarHeight(context) + getActionBarHeight(context);
    }

    /**
     * ?????????????????????
     *
     * @param context
     * @return
     */
    public static float getSafeAreaBottom(Context context) {
        if (isScreenPortrait(context)) {
            return getRealHeight(context) - getNavigationBarHeightIfRoom(context);
        } else {
            return getRealHeight(context);
        }
    }

    /**
     * ?????????????????????
     *
     * @param context
     * @return
     */
    public static float getSafeAreaLeft(Activity context) {
        switch (getRotation(context)) {
            case 1://?????????
                if (hasNotchInScreen(context)) {//?????????
                    return getStatusBarHeight(context);
                } else {
                    return 0;
                }
            case 3://?????????
                return getNavigationBarHeightIfRoom(context);//?????????
            case 0:
            default:
                return 0;

        }
    }

    /**
     * ?????????????????????
     *
     * @param context
     * @return
     */
    public static float getSafeAreaRight(Activity context) {
        switch (getRotation(context)) {
            case 1://?????????
                return getRealWidth(context) - getNavigationBarHeightIfRoom(context);//?????????
            case 3://?????????
                if (hasNotchInScreen(context)) {
                    return getRealWidth(context) - getStatusBarHeight(context);//?????????
                } else {
                    return getRealWidth(context);
                }
            case 0:
            default:
                return getRealWidth(context);

        }

    }

    /**
     * ????????????
     *
     * @param context
     * @return
     */
    private static boolean isScreenPortrait(Context context) {

        return context.getResources().getConfiguration().orientation == Configuration.ORIENTATION_PORTRAIT;
    }

    /**
     * ??????????????????
     *
     * @param context
     * @return ????????? 0???????????? 1???????????? 3.
     */
    private static int getRotation(Context context) {
        return ((Activity) context).getWindowManager().getDefaultDisplay().getRotation();
    }

    /**
     * ??????????????????
     *
     * @return
     */
    public static boolean hasNotchInScreen(Activity activity) {

        // android  P ??????????????? API ???????????????????????????
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            DisplayCutout displayCutout = activity.getWindow().getDecorView().getRootWindowInsets().getDisplayCutout();
            if (displayCutout != null) {
                // ??????????????????
                return true;
            }
        } else {
            // ??????????????????????????????????????????  ??????????????????????????????????????? ?????????vivo????????????????????????oppo
            String manufacturer = Build.MANUFACTURER;

            if (TextUtils.isEmpty(manufacturer)) {
                return false;
            } else if (manufacturer.equalsIgnoreCase("HUAWEI")) {
                return hasNotchHw(activity);
            } else if (manufacturer.equalsIgnoreCase("xiaomi")) {
                return hasNotchXiaoMi();
            } else if (manufacturer.equalsIgnoreCase("oppo")) {
                return hasNotchOPPO(activity);
            } else if (manufacturer.equalsIgnoreCase("vivo")) {
                return hasNotchVIVO();
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * ??????vivo??????????????????
     * https://swsdl.vivo.com.cn/appstore/developer/uploadfile/20180328/20180328152252602.pdf
     *
     * @param activity
     * @return
     */
    private static boolean hasNotchVIVO() {
        try {
            Class<?> c = Class.forName("android.util.FtFeature");
            Method get = c.getMethod("isFeatureSupport", int.class);
            return (boolean) (get.invoke(c, 0x20));
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * ??????oppo??????????????????
     * https://open.oppomobile.com/wiki/doc#id=10159
     *
     * @param activity
     * @return
     */
    private static boolean hasNotchOPPO(Activity activity) {
        return activity.getPackageManager().hasSystemFeature("com.oppo.feature.screen.heteromorphism");
    }

    /**
     * ??????xiaomi??????????????????
     * https://dev.mi.com/console/doc/detail?pId=1293
     *
     * @param activity
     * @return
     */
    private static boolean hasNotchXiaoMi() {
        try {
            Class<?> c = Class.forName("android.os.SystemProperties");
            Method get = c.getMethod("getInt", String.class, int.class);
            return (int) (get.invoke(c, "ro.miui.notch", 0)) == 1;
        } catch (Exception e) {
            Log.e("hasNotchXiaoMi", e.getMessage());
            return false;
        }
    }

    /**
     * ??????????????????????????????
     * https://devcenter-test.huawei.com/consumer/cn/devservice/doc/50114
     *
     * @param activity
     * @return
     */
    private static boolean hasNotchHw(Activity activity) {

        try {
            ClassLoader cl = activity.getClassLoader();
            Class hwNotchSizeUtil = cl.loadClass("com.huawei.android.util.HwNotchSizeUtil");
            Method get = hwNotchSizeUtil.getMethod("hasNotchInScreen");
            return (boolean) get.invoke(hwNotchSizeUtil);
        } catch (Exception e) {
            return false;
        }
    }
}
