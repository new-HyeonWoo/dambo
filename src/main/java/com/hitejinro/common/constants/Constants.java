package com.hitejinro.common.constants;

import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

public final class Constants {
    private Constants() {
    }
    public static final ZoneId GLOBAL_ZONE_ID = ZoneId.of("Asia/Seoul");
    public static final DateTimeFormatter GLOBAL_DATE_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public static final String DATE_FORMAT_PATTERN_1 = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$";
    public static final String FLAG_KEY = "FLAG";
}