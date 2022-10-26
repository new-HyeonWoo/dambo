package com.hitejinro.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

@AllArgsConstructor
@Getter
public enum CollateralType {
    COLLECTION(0, "집합건물"),
    LAND_CONSTRUCTION(1, "토지건물"),
    LAND(2, "토지"),
    ETC(3, "기타"),

    COMMON(999, "공통");

    private final int type;
    private final String name;

    public static CollateralType valueOf(int type) {
        return Arrays.stream(values())
                .filter((item) -> item.getType() == type)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Unsupported type %s.", type)));
    }
}
