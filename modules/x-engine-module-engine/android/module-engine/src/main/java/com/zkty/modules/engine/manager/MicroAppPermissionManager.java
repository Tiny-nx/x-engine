package com.zkty.modules.engine.manager;

import android.text.TextUtils;

import com.alibaba.fastjson.JSON;
import com.zkty.modules.engine.dto.PermissionDto;
import com.zkty.modules.engine.utils.FileUtils;
import com.zkty.modules.engine.webview.XOneWebViewPool;

import java.io.File;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class MicroAppPermissionManager {
    private static volatile MicroAppPermissionManager instance = null;
    private Map<String, PermissionDto> permissions;

    private MicroAppPermissionManager() {
        permissions = new HashMap<>();
    }
    public static MicroAppPermissionManager sharedInstance() {
        if (instance == null) {
            synchronized (MicroAppPermissionManager.class) {
                if (instance == null) {
                    instance = new MicroAppPermissionManager();
                }
            }
        }
        return instance;
    }

    public PermissionDto getPermission(String microAppId, String version) {
        if (TextUtils.isEmpty(microAppId)) return null;
        if (TextUtils.isEmpty(version)) version = "0";
        if (permissions.containsKey(microAppId + version)) {
            return permissions.get(microAppId + version);
        }
        PermissionDto permissionBean = null;
        try {

            if (microAppId.startsWith("http")) {
            } else {

                String rootPath = MicroAppsManager.getInstance().getMicroAppPath(microAppId, version);
                String jsonFilePath = String.format(Locale.ENGLISH, "%s/microapp.json", rootPath);
                File file = new File(jsonFilePath);
                if (file.exists()) {
                    String json = FileUtils.readFile(file);
                    permissionBean = JSON.parseObject(json, PermissionDto.class);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        if (permissionBean != null) {
            permissions.put(microAppId + version, permissionBean);
        }
        return permissionBean;
    }


}
