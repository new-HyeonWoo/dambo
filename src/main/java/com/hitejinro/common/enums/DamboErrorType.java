package com.hitejinro.common.enums;

import com.hitejinro.common.enums.common.ErrorMessageEnumType;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum DamboErrorType implements ErrorMessageEnumType {

    NO_USER_DATA("인증정보가 올바르지 않습니다.", 400),
    NO_TOKEN_DATA("토큰정보가 올바르지 않습니다.", 400);

    private final String message;
    private final int status;

}
