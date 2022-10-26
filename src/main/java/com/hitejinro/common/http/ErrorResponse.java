package com.hitejinro.common.http;

import com.hitejinro.common.enums.common.ErrorMessageEnumType;

import java.time.LocalDateTime;

import static com.hitejinro.common.constants.Constants.GLOBAL_DATE_FORMAT;
import static com.hitejinro.common.constants.Constants.GLOBAL_ZONE_ID;

public class ErrorResponse {
    /** 에러 메세지 */
    private final String message;
    /** 에러 날짜 */
    private final String responseDate;

    public ErrorResponse(String message) {
        this.message = message;
        this.responseDate = LocalDateTime.now(GLOBAL_ZONE_ID).format(GLOBAL_DATE_FORMAT);
    }

    public ErrorResponse(ErrorMessageEnumType errorMessageEnumType) {
        this.message = errorMessageEnumType.getMessage();
        this.responseDate = LocalDateTime.now(GLOBAL_ZONE_ID).format(GLOBAL_DATE_FORMAT);
    }

    public static ErrorResponse from(ErrorMessageEnumType errorMessageEnumType) {
        return new ErrorResponse(errorMessageEnumType);
    }

    public String getMessage() {
        return this.message;
    }

    public String getResponseDate() {
        return this.responseDate;
    }
}

