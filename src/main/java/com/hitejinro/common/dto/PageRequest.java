package com.hitejinro.common.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public abstract class PageRequest {
    /** 페이지 번호 */
    @Builder.Default
    protected Integer page = 1;
    /** 페이지당 목록 갯수 */
    @Builder.Default
    protected Integer limit = 30;
    @JsonIgnore
    public Integer getOffset() {
        return (this.page - 1) * this.limit;
    }
}
