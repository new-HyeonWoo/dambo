package com.hitejinro.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ApprovalHistoryType {
    NEW(0),
    UPDATE(1);

    private final int type;
}
