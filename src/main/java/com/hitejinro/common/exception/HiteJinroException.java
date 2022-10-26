package com.hitejinro.common.exception;

import com.hitejinro.common.enums.common.ErrorMessageEnumType;

public class HiteJinroException extends RuntimeException {

    private final ErrorMessageEnumType errorMessageEnumType;

    public HiteJinroException(ErrorMessageEnumType errorMessageEnumType) {
        super(String.format("서버 오류입니다. 에러코드 : [%d, %s]",
                errorMessageEnumType.getStatus(), errorMessageEnumType.getMessage()));
        this.errorMessageEnumType = errorMessageEnumType;
    }

    public HiteJinroException(String message, ErrorMessageEnumType errorMessageEnumType) {
        super(message);
        this.errorMessageEnumType = errorMessageEnumType;
    }

    public ErrorMessageEnumType getErrorMessageType() {
        return this.errorMessageEnumType;
    }

}
