package com.hitejinro.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class User {
    private Integer noticeCount;
    private Integer qnaCount;
}
