package com.hitejinro.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SearchUserResponse {
    private Integer number;
    private String userTypeFormat;
    private String mdName;
    private String name;
    private String id;
}