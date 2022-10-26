package com.hitejinro.dto.request;

import com.hitejinro.common.dto.PageRequest;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
public class SearchUserRequest extends PageRequest {
    private String id;
}
