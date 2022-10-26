package com.hitejinro.common.http;

import com.hitejinro.common.constants.Constants;

import java.time.LocalDateTime;

public class ResultResponse<R> {
    /** 결과 메세지 */
    private String message;
    /** 결과 */
    private R result;
    /** 결과 날짜 */
    private String date;

    public ResultResponse () {}

    private ResultResponse(String message) {
        this.message = message;
        this.date = LocalDateTime.now(Constants.GLOBAL_ZONE_ID).format(Constants.GLOBAL_DATE_FORMAT);
    }

    private ResultResponse(String message, R result) {
        this.message = message;
        this.result = result;
        this.date = LocalDateTime.now(Constants.GLOBAL_ZONE_ID).format(Constants.GLOBAL_DATE_FORMAT);
    }

    public static ResultResponse<Void> ok() {
        return new ResultResponse<>("성공하였습니다.");
    }

    public static ResultResponse<Void> ok(String message) {
        return new ResultResponse<>(message);
    }

    public static <R> ResultResponse<R> ok(R result) {
        return new ResultResponse<>("성공하였습니다.", result);
    }

    public static <R> ResultResponse<R> ok(String message, R result) {
        return new ResultResponse<>(message, result);
    }

    public String getMessage() {
        return message;
    }

    public R getResult() {
        return result;
    }

    public void setResult(R result) {
        this.result = result;
    }

    public String getDate() {
        return date;
    }
}
