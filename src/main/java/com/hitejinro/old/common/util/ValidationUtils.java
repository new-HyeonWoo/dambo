//package com.hitejinro.old.common.util;
//
//import org.apache.commons.lang3.StringUtils;
//import org.apache.commons.validator.routines.EmailValidator;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.util.Assert;
//import org.springframework.validation.Errors;
//
//import java.math.BigInteger;
//import java.util.regex.Pattern;
//
///**
// * 유틸리티 클래스
// *
// */
//public abstract class ValidationUtils {
//
//    private static final Logger LOGGER = LoggerFactory.getLogger(ValidationUtils.class);
//
//    /* 숫자 */
//    public static final Pattern NUMERIC_PATTERN = Pattern.compile("^[-+]?\\d+(\\.\\d+)?$");
//
//    /* 전화번호 */
//    public static final Pattern TEL_PATTERN = Pattern.compile("^(02|0[3-9]{1}[0-9]{1})-(\\d{4}|\\d{3})-\\d{4}$");
//
//    /* 휴대폰번호 */
//    public static final Pattern MOBILE_PATTERN = Pattern.compile("^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$");
//
//    /**
//     * 비어있거나 Null 인 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     */
//    public static void required(Errors errors, Object target, String field, String label) {
//        required(errors, target, field, label, "errors.required");
//    }
//
//    /**
//     * 비어있거나 Null 인 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void required(Errors errors, Object target, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (target == null || StringUtils.isEmpty(String.valueOf(target)))
//            errors.rejectValue(field, code, new Object[] { label }, "{0}은(는) 필수 입력값입니다.");
//    }
//
//    /**
//     * 최대 길이가 넘는 경우
//     *
//     * @param errors
//     * @param target
//     * @param length
//     * @param field
//     * @param label
//     */
//    public static void maxLength(Errors errors, String target, int length, String field, String label) {
//        maxLength(errors, target, length, field, label, "errors.maxlength");
//    }
//
//    /**
//     * 최대 길이가 넘는 경우
//     *
//     * @param errors
//     * @param target
//     * @param length
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void maxLength(Errors errors, String target, int length, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (length < StringUtils.length(target))
//            errors.rejectValue(field, code, new Object[] { label, length }, "{0}은(는) {1}자 이상 입력할수 없습니다.");
//    }
//
//    /**
//     * 최소 길이보다 작은 경우
//     *
//     * @param errors
//     * @param target
//     * @param length
//     * @param field
//     * @param label
//     */
//    public static void minLength(Errors errors, String target, int length, String field, String label) {
//        minLength(errors, target, length, field, label, "errors.minlength");
//    }
//
//    /**
//     * 최소 길이보다 작은 경우
//     *
//     * @param errors
//     * @param target
//     * @param length
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void minLength(Errors errors, String target, int length, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (StringUtils.length(target) < length)
//            errors.rejectValue(field, code, new Object[] { label, length }, "{0}은(는) {1}자 이상 입력해야 합니다.");
//    }
//
//    /**
//     * 범위에 포함되지 않는 경우
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     */
//    public static void range(Errors errors, String target, int min, int max, String field, String label) {
//        range(errors, target, min, max, field, label, "errors.range");
//    }
//
//    /**
//     * 범위에 포함되지 않는경우 Reject
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void range(Errors errors, String target, int min, int max, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (max < min) {
//            throw new IllegalArgumentException("Min must be less than a Max");
//        }
//
////        int length = StringUtils.length(target);
//        int val = Integer.parseInt(target);
//        if (!(min < val && val< max)) {
//            errors.rejectValue(field, code, new Object[] {label, min, max}, "{0}은(는) {1}과 {2} 사이의 값이어야 합니다.");
//        }
//    }
//
//    /**
//     * 범위에 포함되지 않는 경우
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     */
//    public static void longrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label) {
//        longrange(errors, target, min, max, field, label, "errors.longrange");
//    }
//
//
//    /**
//     * 범위에 포함되지 않는경우 Reject (long)
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void longrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        // max < min
//        if (max.compareTo(min) < 0) {
//            throw new IllegalArgumentException("Min must be less than a Max");
//        }
//
//        BigInteger val = new BigInteger(target);
//        if (!(min.compareTo(val) <= 0 && val.compareTo(max) <= 0)) {
//            errors.rejectValue(field, code, new Object[] {label, min, max}, "{0}은(는) {1}과 {2} 사이의 값이어야 합니다.");
//        }
//    }
//
//    /**
//     * 범위에 포함되지 않는 경우
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     */
//    public static void qtyrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label) {
//        qtyrange(errors, target, min, max, field, label, "errors.qtyrange");
//    }
//
//
//    /**
//     * 범위에 포함되지 않는경우 Reject (long)
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void qtyrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        // max < min
//        if (max.compareTo(min) < 0) {
//            throw new IllegalArgumentException("Min must be less than a Max");
//        }
//
//        BigInteger val = new BigInteger(target);
//        if (!(min.compareTo(val) <= 0 && val.compareTo(max) <= 0)) {
//            errors.rejectValue(field, code, new Object[] {label, min, max}, "{0}은(는) {1}과 {2} 사이의 값이어야 합니다.");
//        }
//    }
//
//
//    /**
//     * 범위에 포함되지 않는 경우
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     */
//    public static void pcntrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label) {
//        pcntrange(errors, target, min, max, field, label, "errors.pcntrange");
//    }
//
//
//    /**
//     * 범위에 포함되지 않는경우 Reject (long)
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void pcntrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        // max < min
//        if (max.compareTo(min) < 0) {
//            throw new IllegalArgumentException("Min must be less than a Max");
//        }
//
//        BigInteger val = new BigInteger(target);
//        if (!(min.compareTo(val) <= 0 && val.compareTo(max) <= 0)) {
//            errors.rejectValue(field, code, new Object[] {label, min, max}, "{0}은(는) {1}과 {2} 사이의 값이어야 합니다.");
//        }
//    }
//
//    /**
//     * 범위에 포함되지 않는 경우
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     */
//    public static void moneyrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label) {
//        moneyrange(errors, target, min, max, field, label, "errors.moneyrange");
//    }
//
//
//    /**
//     * 범위에 포함되지 않는경우 Reject (long)
//     *
//     * @param errors
//     * @param target
//     * @param min
//     * @param max
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void moneyrange(Errors errors, String target, BigInteger min, BigInteger max, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        // max < min
//        if (max.compareTo(min) < 0) {
//            throw new IllegalArgumentException("Min must be less than a Max");
//        }
//
//        BigInteger val = new BigInteger(target);
//        if (!(min.compareTo(val) <= 0 && val.compareTo(max) <= 0)) {
//            errors.rejectValue(field, code, new Object[] {label, min, max}, "{0}은(는) {1}과 {2} 사이의 값이어야 합니다.");
//        }
//    }
//
//    /**
//     * 이메일형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     */
//    public static void email(Errors errors, String target, String field, String label) {
//        email(errors, target, field, label, "errors.email");
//    }
//
//    /**
//     * 이메일형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void email(Errors errors, String target, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (!EmailValidator.getInstance().isValid(target)) {
//            errors.rejectValue(field, code, new Object[]{label}, "{0}은(는) 유효하지 않은 이메일 주소입니다.");
//        }
//    }
//
//    /**
//     * 휴대폰번호 형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     */
//    public static void mobile(Errors errors, String target, String field, String label) {
//        mobile(errors, target, field, label, "errors.phoneNo");
//    }
//
//    /**
//     * 휴대폰번호 형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void mobile(Errors errors, String target, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (target == null || !MOBILE_PATTERN.matcher(target).find()) {
//            errors.rejectValue(field, code, new Object[] { label }, "{0}은(는) 유효하지 않은 휴대폰번호 입니다.");
//        }
//    }
//
//    /**
//     * 전화번호 형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     */
//    public static void tel(Errors errors, String target, String field, String label) {
//        tel(errors, target, field, label, "errors.telNo");
//    }
//
//    /**
//     * 전화번호 형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void tel(Errors errors, String target, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (target == null || !TEL_PATTERN.matcher(target).find()) {
//            errors.rejectValue(field, code, new Object[] { label }, "{0}은(는) 유효하지 않은 전화번호 입니다.");
//        }
//    }
//
//    /**
//     * 전화번호 & 휴대폰번호 형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     */
//    public static void telOrMobile(Errors errors, String target, String field, String label) {
//        telOrMobile(errors, target, field, label, "errors.telOrPhone");
//    }
//
//    /**
//     * 전화번호 & 휴대폰번호 형식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void telOrMobile(Errors errors, String target, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (target == null || !(TEL_PATTERN.matcher(target).find() || MOBILE_PATTERN.matcher(target).find()))
//            errors.rejectValue(field, code, new Object[] { label }, "{0}은(는) 유효하지 않은 전화번호/휴대폰번호 입니다.");
//    }
//
//    /**
//     * 숫자 양식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     */
//    public static void numeric(Errors errors, String target, String field, String label) {
//        numeric(errors, target, field, label, "errors.number");
//    }
//
//    /**
//     * 숫자 양식이 아닌 경우
//     *
//     * @param errors
//     * @param target
//     * @param field
//     * @param label
//     * @param code
//     */
//    public static void numeric(Errors errors, String target, String field, String label, String code) {
//        Assert.notNull(label, "Label must not be null");
//        Assert.notNull(errors, "Errors object must not be null");
//
//        if (target == null || !NUMERIC_PATTERN.matcher(target).find()) {
//            errors.rejectValue(field, code, new Object[] { label }, "{0}은(는) 숫자양식 이어야 합니다.");
//        }
//    }
//}
