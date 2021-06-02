package com.zkty.nativ.network.bean;

import java.io.Serializable;

public class BaseResp<T> implements Serializable {
    public static final int CODE_SUCCESS = 0;

    protected int code;
    protected int status;
    protected String message;
    protected T data;


    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}