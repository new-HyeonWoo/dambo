package com.hitejinro.common.enums.common;

import com.fasterxml.jackson.annotation.JsonValue;

public interface BooleanEnumType {
    @JsonValue
    int getType();
    boolean getName();
}
