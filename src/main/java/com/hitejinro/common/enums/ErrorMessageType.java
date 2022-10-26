package com.hitejinro.common.enums;

import com.hitejinro.common.enums.common.ErrorMessageEnumType;

import java.util.Arrays;

public enum ErrorMessageType implements ErrorMessageEnumType {
    BAD_REQUEST("요청데이터가 올바르지 않습니다.", 400),
    UNAUTHORIZED("권한이 없습니다.", 401),
    FORBIDDEN("접근할 수 없는 권한입니다.", 403),
    NOT_FOUND("페이지를 찾을 수 없습니다.", 404),
    METHOD_NOT_ALLOW("요청형식이 잘못되었습니다.", 405),
    CONFLICT("중복된 요청입니다.", 409),
    RECONFIRM("서버에 일시적인 문제가 발생하였습니다.", 500),
    INTERNAL_SERVER_ERROR("서버에서 지원하지 않는 요청입니다.", 501),
    BAD_GATEWAY("잘못된 응답을 수신했습니다.", 502),
    SERVICE_UNAVAILABLE("서버가 요청을 처리할 준비가 되지 않았습니다.", 503),
    GATEWAY_TIMEOUT("요청된 시간이 만료되었습니다.", 504),
    FILE_UPLOAD_EXISTS("중복된 파일이름입니다. 다른이름으로 변경해주세요.", 400),
    FILE_UPLOAD_NOTFOUND("파일을 찾을 수 없습니다.", 400)
    ;

    private final String message;
    private final int status;

    ErrorMessageType(String message, int status) {
        this.message = message;
        this.status = status;
    }

    public boolean matched(int status) {
        return this.status == status;
    }

    public static ErrorMessageType valueOf(int status) {
        return Arrays.stream(ErrorMessageType.values())
                .filter(errorMessageType -> errorMessageType.getStatus() == status)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Unsupported type %s.", status)));
    }

    @Override
    public String getMessage() {
        return this.message;
    }

    @Override
    public int getStatus() {
        return this.status;
    }
}
