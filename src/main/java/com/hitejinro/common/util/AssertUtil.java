package com.hitejinro.common.util;

import com.hitejinro.common.enums.common.ErrorMessageEnumType;
import com.hitejinro.common.exception.HiteJinroException;

import java.util.Collection;
import java.util.Objects;

public final class AssertUtil {
    private AssertUtil() {
    }

    public static void isZero(int number, ErrorMessageEnumType errorMessageEnumType) {
        if (number != 0) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void nonZero(int number, ErrorMessageEnumType errorMessageEnumType) {
        if (number == 0) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void isTrue(boolean expression, ErrorMessageEnumType errorMessageEnumType) {
        if (!expression) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void isFalse(boolean expression, ErrorMessageEnumType errorMessageEnumType) {
        if (expression) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void isNull(Object object, ErrorMessageEnumType errorMessageEnumType) {
        if (Objects.nonNull(object)) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void notNull(Object object, ErrorMessageEnumType errorMessageEnumType) {
        if (Objects.isNull(object)) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void notEmpty(Collection<?> collection, ErrorMessageEnumType errorMessageEnumType) {
        if (Objects.isNull(collection) || collection.isEmpty()) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void status(boolean expression, ErrorMessageEnumType errorMessageEnumType) {
        if (!expression) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void isMatch(boolean expression, ErrorMessageEnumType errorMessageEnumType) {
        if (!expression) {
            throw new HiteJinroException(errorMessageEnumType);
        }
    }

    public static void force(ErrorMessageEnumType errorMessageEnumType) {
        throw new HiteJinroException(errorMessageEnumType);
    }
}
