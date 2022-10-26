package com.hitejinro.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

@AllArgsConstructor
@Getter
public enum ApprovalConvertType {
    TYPE_10_12("10", "12", "11"),
    TYPE_10_22("10", "22", "21"),

    TYPE_15_11("15", "11", "12"),
    TYPE_15_21("15", "21", "22"),

    TYPE_20_12("20", "12", "12"),
    TYPE_20_22("20", "22", "22"),

    TYPE_30_12("30", "12", "12"),
    TYPE_30_22("30", "22", "22"),

    TYPE_40_12("40", "12", "11"),
    TYPE_40_22("40", "22", "21"),

    TYPE_50_12("50", "12", "21"),
    TYPE_50_22("50", "22", "29");

    private final String type;
    private final String fromType;
    private final String toType;

    public static ApprovalConvertType valueOf(String type, String fromType) {
        return Arrays.stream(values())
                .filter((item) -> item.getType().equals(type) && item.getFromType().equals(fromType))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Unsupported type %s, %s", type, fromType)));
    }
}
