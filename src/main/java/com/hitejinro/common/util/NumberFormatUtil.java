package com.hitejinro.common.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;

public final class NumberFormatUtil {
    private NumberFormatUtil() {};

    public static String toString(Long number) {
        if (number == null) {
            return "0";
        }
        return new DecimalFormat("###,###").format(number);
    }

    public static String toString(BigDecimal amount) {
        if (amount == null) {
            return "0";
        }
        return new DecimalFormat("###,###").format(amount);
    }
}
