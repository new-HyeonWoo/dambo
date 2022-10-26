package com.hitejinro.dto.response;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EapResponse {
    private Header header;
    private Parameter parameter;

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Header {
        private String resDt;
        private String resFlag;
        private String resDetailCode;
        private String resDetialMsg;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Parameter {
        private String url;
    }
}
