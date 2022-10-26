package com.hitejinro.common.enums.common;

import com.fasterxml.jackson.annotation.JsonValue;

public interface StringEnumType {
    @JsonValue
    String getType();
    String getName();
}
