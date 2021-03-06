package com.zkty.nativ.jsi.utils;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;

import com.zkty.nativ.core.XEngineApplication;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Enumeration;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

public class FileUtils {
    private static final String TAG = FileUtils.class.getSimpleName();


    public static boolean createDir(File root, String dir) {
        boolean success = false;
        File file = new File(root, dir);
        if (!file.exists()) {
            success = file.mkdirs();
        } else {
            success = true;
        }
        return success;
    }

    public static boolean createFile(File dir, String name) {
        boolean success = false;
        File file = new File(dir, name);
        if (file.exists()) {
            file.delete();
        }
        try {
            success = file.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return success;
    }

    public static boolean deleteFile(File file) {
        boolean success = false;
        if (file.exists()) {
            if (file.isDirectory()) {
                File[] children = file.listFiles();
                for (int i = 0; i < children.length; i++) {
                    deleteFile(children[i]);
                }
            }
            success = file.delete();
        } else {
            success = true;
        }
        return success;
    }


    /**
     * @param dir
     * @param name
     * @param out
     */
    public static boolean moveFile(File dir, String name, File out) {
        boolean success = false;
        if (dir.exists() && TextUtils.isEmpty(name)) {
            if (!out.exists()) {
                out.mkdirs();
            }

            File source = new File(dir, name);

            File file = new File(out, name);
            FileInputStream fileInputStream = null;
            FileOutputStream fileOutputStream = null;

            if (file.exists()) {
                file.delete();
            }

            try {
                if (file.createNewFile()) {
                    fileInputStream = new FileInputStream(source);
                    fileOutputStream = new FileOutputStream(file);
                    byte[] temp = new byte[1024];
                    int count = 0;

                    while (true) {
                        count = fileInputStream.read(temp);
                        if (count == -1) {
                            break;
                        } else {
                            fileOutputStream.write(temp, 0, count);
                        }
                    }
                    if (source.delete()) {             //???????????????
                        success = true;
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    if (fileInputStream != null) {
                        fileInputStream.close();
                    }
                    if (fileOutputStream != null) {
                        fileOutputStream.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        } else {
            Log.d(TAG, "dir or filename is invalid!");
        }
        return success;
    }

    /**
     * @param dir
     * @param name
     * @param out
     * @return
     */
    public static boolean copyFile(File dir, String name, File out) {
        return copyFile(dir, name, out, name);
    }


    /**
     * @param sourceDir
     * @param filename
     * @param destDir
     * @param rename    if null we use the filename
     * @return
     */
    public static boolean copyFile(File sourceDir, String filename, File destDir, String rename) {
        boolean success = false;
        if (sourceDir.exists() && !TextUtils.isEmpty(filename)) {
            if (!destDir.exists()) {
                destDir.mkdirs();
            }

            String name = filename;
            if (!TextUtils.isEmpty(rename)) {
                name = rename;
            }
            File dest = new File(destDir, name);

            if (dest.exists()) {
                dest.delete();
            }

            try {
                if (dest.createNewFile()) {
                    InputStream inputStream = null;
                    FileOutputStream outputStream = null;
                    try {
                        inputStream = new FileInputStream(new File(sourceDir, filename));
                        outputStream = new FileOutputStream(new File(destDir, name));
                        byte[] b = new byte[1024];
                        int a;
                        while (true) {
                            a = inputStream.read(b);
                            if (a == -1) {
                                success = true;
                                break;
                            } else {
                                outputStream.write(b, 0, a);
                            }
                        }
                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                    } finally {
                        try {
                            if (inputStream != null) {
                                inputStream.close();
                            }
                            if (outputStream != null) {
                                outputStream.close();
                            }
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        return success;
    }

    /**
     * @param file
     * @return
     */
    public static String readFile(File file) {
        String content = null;
        if (file.exists() && !file.isDirectory()) {
            InputStream inputStream = null;
            try {
                inputStream = new FileInputStream(file);

                StringBuilder sb = new StringBuilder();
                String line = "";

                BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
                while (true) {
                    try {
                        if (!((line = br.readLine()) != null))
                            break;
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    sb.append(line);
                }
                content = sb.toString();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } finally {
                if (inputStream != null) {
                    try {
                        inputStream.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        return content;
    }

    /**
     * @param inputStream
     * @return
     */
    public static String readInputSteam(InputStream inputStream) {
        String content = null;
        if (inputStream != null) {
            StringBuilder sb = new StringBuilder();
            String line = "";
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));
            while (true) {
                try {
                    if (!((line = br.readLine()) != null))
                        break;
                } catch (IOException e) {
                    e.printStackTrace();
                }
                sb.append(line);
            }
            content = sb.toString();
        }
        return content;
    }


    /**
     * ????????????
     *
     * @param inputStream
     * @param dir         ????????????
     * @param filename    ????????????
     * @return
     */
    public static String saveFile(InputStream inputStream, File dir, String filename) {
        String path = null;
        if (inputStream != null) {
            if (!dir.exists()) {
                dir.mkdirs();
            }
            File outFile = new File(dir, filename);
            if (outFile.exists()) {                 //???????????????
                outFile.delete();
            }
            FileOutputStream fileOutputStream = null;
            try {
                if (outFile.createNewFile()) {
                    fileOutputStream = new FileOutputStream(outFile);
                    byte[] b = new byte[1024];
                    int a;
                    while (true) {
                        a = inputStream.read(b);
                        if (a == -1) {      //????????????
                            path = outFile.getPath();
                            break;
                        } else {        //
                            fileOutputStream.write(b, 0, a);
                        }
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (fileOutputStream != null) {
                    try {
                        fileOutputStream.flush();
                        fileOutputStream.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
            try {
                inputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return path;
    }


    /**
     * ???????????????????????????????????????
     *
     * @param sdir
     * @param sfname ????????????
     * @param ddir
     * @return
     */
    public static String unZipFile(File sdir, String sfname, File ddir) {
        String path = null;
        if (!sdir.exists() || !sdir.isDirectory() || TextUtils.isEmpty(sfname) || !sfname.endsWith(".zip")) {
            Log.d(TAG, "zip dir or zip file error!");
            return path;
        }

        File dir = sdir;
        if (!sdir.getPath().equals(ddir.getPath())) {      //????????????????????????????????????????????????[??????????????????????????????????????????]
            Log.d(TAG, "need move zip!");
            if (copyFile(sdir, sfname, ddir, sfname)) {
                Log.d(TAG, "move zip file success!");
                dir = ddir;
            } else {
                Log.d(TAG, "move zip file failed!");
            }
        }

        Log.d(TAG, "start do unzip !");
        if (doUnzip(dir, sfname)) {
            Log.d(TAG, "unzip success!");
            path = ddir.getPath();
        } else {
            Log.d(TAG, "unzip failed!");
        }
        return path;
    }

    /**
     * ?????????dir?????????????????????
     *
     * @param dir
     * @param zipfileName
     * @return
     */
    public static boolean doUnzip(File dir, String zipfileName) {
        boolean success = false;

        if (!dir.exists() || TextUtils.isEmpty(zipfileName) || !zipfileName.endsWith(".zip")) {
            Log.d(TAG, "zip dir or zip file error!");
            return success;
        }

        ZipFile zip = null;
        try {
            zip = new ZipFile(new File(dir, zipfileName));
            String name = zip.getName().substring(zip.getName().lastIndexOf('\\') + 1, zip.getName().lastIndexOf('.'));

            name = new File(name).getParentFile().getPath();

            //name = name + zipfileName.substring(0, zipfileName.lastIndexOf("."));
            name = new File(name, zipfileName.substring(0, zipfileName.lastIndexOf("."))).getPath();

            Log.d(TAG, "name:" + name);

            for (Enumeration<? extends ZipEntry> entries = zip.entries(); entries.hasMoreElements(); ) {
                ZipEntry entry = (ZipEntry) entries.nextElement();
                String zipEntryName = entry.getName();
                InputStream in = zip.getInputStream(entry);

                Log.d(TAG, "entryName:" + zipEntryName);

                String outPath = "";

                File temp = new File(name);
                Log.d(TAG, "parent:" + temp.getParent() + "--sub:" + temp.getName());
                if (zipEntryName.startsWith(temp.getName())) {
                    outPath = (name.replace(temp.getName(), "") + "/" + zipEntryName).replaceAll("\\*", "/");
                } else {
                    outPath = (name + "/" + zipEntryName).replaceAll("\\*", "/");
                }

                // ????????????????????????,??????????????????????????????
                File file = new File(outPath.substring(0, outPath.lastIndexOf('/')));
                if (!file.exists()) {
                    file.mkdirs();
                }
                // ???????????????????????????????????????,???????????????????????????,???????????????
                if (new File(outPath).isDirectory()) {
                    continue;
                }
                FileOutputStream out = new FileOutputStream(outPath);
                byte[] buf1 = new byte[1024];
                int len;
                while ((len = in.read(buf1)) > 0) {
                    out.write(buf1, 0, len);
                }
                in.close();
                out.close();
            }
            success = true;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return success;
    }

    /**
     * ?????????
     * ?????????????????????sd?????????
     *
     * @param outPath  String ?????????????????? ??????data/user/0/com.test/files
     * @param fileName String ????????????????????? ??????abc.txt
     * @return <code>true</code> if and only if the file was copied; <code>false</code> otherwise
     */
    public static String copyAssetsSingleFile(Context context, String outPath, String fileName) {
        File file = new File(outPath);
        if (!file.exists()) {
            if (!file.mkdirs()) {
                Log.e("this", "copyAssetsSingleFile:??????????????????");
            }
        }
        try {
            InputStream inputStream = context.getResources().getAssets().open(fileName);  //?????????  ????????????????????????????????????Java?????????????????????????????????????????????
            File outFile = new File(file, fileName);
            FileOutputStream fileOutputStream = new FileOutputStream(outFile); //???????????????  ??????????????????
            //????????????inputStream?????????fileOutputStream
            byte[] buffer = new byte[1024];//???????????????????????????????????????1024
            int byteRead;
            while (-1 != (byteRead = inputStream.read(buffer))) {//?????????????????????????????????????????????
                fileOutputStream.write(buffer, 0, byteRead);//????????????????????????
            }
            Log.d(TAG, fileName + "??????????????????");

            inputStream.close();
            fileOutputStream.flush();
            fileOutputStream.close();
            return String.format("%s/%s", outPath, fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    /**
     * ??????????????????
     *
     * @param path
     * @return
     */
    public static String getFileType(String path) {
        //??????????????????
        if (path.startsWith("http") && path.contains("?")) {
            path = path.substring(0, path.indexOf("?"));
        }
        String type = "";
        if (path.endsWith(".pdf")) {
            type = "pdf";
        } else if (path.endsWith(".ppt")) {
            type = "ppt";
        } else if (path.endsWith(".pptx")) {
            type = "pptx";
        } else if (path.endsWith(".doc")) {
            type = "doc";
        } else if (path.endsWith(".docx")) {
            type = "docx";
        } else if (path.endsWith(".xls")) {
            type = "xls";
        } else if (path.endsWith(".xlsx")) {
            type = "xlsx";
        } else if (path.endsWith(".txt")) {
            type = "txt";
        } else if (path.endsWith(".epub")) {
            type = "epub";
        }
        return type;
    }

    /**
     * ??????????????????
     *
     * @param urlname
     * @return
     */
    public static String getFileName(String urlname) {
        if (urlname.startsWith("http")) {
            //????????????????????????????????????
            urlname = urlname.substring(0, urlname.indexOf("?"));
            int start = urlname.lastIndexOf("/");
            int end = urlname.length();
            if (start != -1 && end != -1) {
                return urlname.substring(start + 1, end);
            } else {
                return null;
            }
        } else {
            //????????????????????????????????????
            File file = new File(urlname);
            String fileName = file.getName();
            return fileName;
        }
    }

    /**
     * ??????uri?????????file??????
     * ????????????file??????
     *
     * @param uri
     * @return
     */
    public static File uri2File(Uri uri) {
        String img_path;
        String[] proj = {MediaStore.Images.Media.DATA};
        Cursor actualimagecursor = XEngineApplication.getCurrentActivity().managedQuery(uri, proj, null,
                null, null);
        if (actualimagecursor == null) {
            img_path = uri.getPath();
        } else {
            int actual_image_column_index = actualimagecursor
                    .getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
            actualimagecursor.moveToFirst();
            img_path = actualimagecursor
                    .getString(actual_image_column_index);
        }
        File file = new File(img_path);
        return file;
    }


}
