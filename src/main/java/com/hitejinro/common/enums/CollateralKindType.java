package com.hitejinro.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

@AllArgsConstructor
@Getter
public enum CollateralKindType {
    COLLECTION_APT_TYPE(0, "집합_아파트", CollateralType.COLLECTION),
    COLLECTION_MULTI_GENERATION(1, "집합_연립,다세대", CollateralType.COLLECTION),
    COLLECTION_STORE(2, "집합_상업용", CollateralType.COLLECTION),
    COLLECTION_OFFICETEL(3, "집합_오피스텔", CollateralType.COLLECTION),
    LAND_CONSTRUCTION_RESIDENTIAL(4, "토건_주거,일반,복합", CollateralType.LAND_CONSTRUCTION),
    LAND_CONSTRUCTION_STORE(5, "토건_상업용", CollateralType.LAND_CONSTRUCTION),
    LAND(6, "토지", CollateralType.LAND),
    ETC(7, "기타", CollateralType.ETC);

    private final int type;
    private final String name;
    private final CollateralType kindType;

    public static CollateralKindType valueOf(int type) {
        return Arrays.stream(values())
                .filter((item) -> item.getType() == type)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Unsupported type %s.", type)));
    }
}
