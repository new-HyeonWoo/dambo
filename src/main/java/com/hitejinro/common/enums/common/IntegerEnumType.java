package com.hitejinro.common.enums.common;

import com.fasterxml.jackson.annotation.JsonValue;

public interface IntegerEnumType {
    @JsonValue
    int getType();
    String getName();
}
