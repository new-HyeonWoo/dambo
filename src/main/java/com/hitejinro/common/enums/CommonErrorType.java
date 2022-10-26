package com.hitejinro.common.enums;

import com.hitejinro.common.enums.common.ErrorMessageEnumType;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum CommonErrorType implements ErrorMessageEnumType {
    INVALID_TOKEN_CLAIM("토큰 Claim 정보가 올바르지 않습니다.", 401),
    INVALID_TOKEN("토큰정보가 올바르지 않습니다.", 401),
    UNAUTHORIZED_TOKEN("권한이 올바르지 않습니다.", 403);

    private final String message;
    private final int status;
}
