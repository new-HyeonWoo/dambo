package com.hitejinro.mapper;

import com.hitejinro.common.enums.CollateralType;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * 유입검토보고서
 */
@Mapper
public interface Es83Mapper {
    /** PRT_00_담보마스타_집합건물 */
    List<HashMap<String, Object>> selectEs83Prt00W02(HashMap<String, Object> params);
    /** PRT_00_담보마스타_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt00W03(HashMap<String, Object> params);
    /** PRT_00_담보마스타_토지 */
    List<HashMap<String, Object>> selectEs83Prt00W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt00WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs83Prt00W02(params);
            case LAND_CONSTRUCTION:
                return selectEs83Prt00W03(params);
            case LAND:
                return selectEs83Prt00W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_01_입력표_집합건물 */
    List<HashMap<String, Object>> selectEs83Prt01(HashMap<String, Object> params);

    /** PRT_02_입력표_보정표 */
    List<HashMap<String, Object>> selectEs83Prt02(HashMap<String, Object> params);

    /** PRT_03_입력표_규제사항개관_집합건물 */
    List<HashMap<String, Object>> selectEs83Prt03W02(HashMap<String, Object> params);
    /** PRT_03_입력표_규제사항개관_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt03W03(HashMap<String, Object> params);
    /** PRT_03_입력표_규제사항개관_토지 */
    List<HashMap<String, Object>> selectEs83Prt03W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt03WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs83Prt03W02(params);
            case LAND_CONSTRUCTION:
                return selectEs83Prt03W03(params);
            case LAND:
                return selectEs83Prt03W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_11_감정가격_시가_최저최고_집합건물 */
    List<HashMap<String, Object>> selectEs83Prt11W02(HashMap<String, Object> params);
    /** PRT_11_감정가격_시가_최저최고_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt11W03(HashMap<String, Object> params);
    /** PRT_11_감정가격_시가_최저최고_토지 */
    List<HashMap<String, Object>> selectEs83Prt11W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt11WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs83Prt11W02(params);
            case LAND_CONSTRUCTION:
                return selectEs83Prt11W03(params);
            case LAND:
                return selectEs83Prt11W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_40_응찰_마스타_집합건물 */
    List<HashMap<String, Object>> selectEs83Prt40W02(HashMap<String, Object> params);
    /** PRT_40_응찰_마스타_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt40W03(HashMap<String, Object> params);
    /** PRT_40_응찰_마스타_토지 */
    List<HashMap<String, Object>> selectEs83Prt40W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt40WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs83Prt40W02(params);
            case LAND_CONSTRUCTION:
                return selectEs83Prt40W03(params);
            case LAND:
                return selectEs83Prt40W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_41_응찰_기일내역_집합건물 */
    List<HashMap<String, Object>> selectEs83Prt41W02(HashMap<String, Object> params);
    /** PRT_41_응찰_기일내역_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt41W03(HashMap<String, Object> params);
    /** PRT_41_응찰_기일내역_토지 */
    List<HashMap<String, Object>> selectEs83Prt41W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt41WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs83Prt41W02(params);
            case LAND_CONSTRUCTION:
                return selectEs83Prt41W03(params);
            case LAND:
                return selectEs83Prt41W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_42_응찰_전감정의개요_집합건물 */
    List<HashMap<String, Object>> selectEs83Prt42W02(HashMap<String, Object> params);
    /** PRT_42_응찰_전감정의개요_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt42W03(HashMap<String, Object> params);
    /** PRT_42_응찰_전감정의개요_토지 */
    List<HashMap<String, Object>> selectEs83Prt42W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt42WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs83Prt42W02(params);
            case LAND_CONSTRUCTION:
                return selectEs83Prt42W03(params);
            case LAND:
                return selectEs83Prt42W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_02_보정표_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt02W03(HashMap<String, Object> params);
    /** PRT_02_보정표_토지 */
    List<HashMap<String, Object>> selectEs83Prt02W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt02WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case LAND_CONSTRUCTION:
                return selectEs83Prt02W03(params);
            case LAND:
                return selectEs83Prt02W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_11_입력표_토지_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt1101W03(HashMap<String, Object> params);
    /** PRT_11_입력표_토지_토지 */
    List<HashMap<String, Object>> selectEs83Prt1101W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt1101WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case LAND_CONSTRUCTION:
                return selectEs83Prt1101W03(params);
            case LAND:
                return selectEs83Prt1101W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_11_입력표_토지_D_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt1102W03(HashMap<String, Object> params);
    /** PRT_11_입력표_토지_D_토지 */
    List<HashMap<String, Object>> selectEs83Prt1102W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt1102WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case LAND_CONSTRUCTION:
                return selectEs83Prt1102W03(params);
            case LAND:
                return selectEs83Prt1102W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_12_입력표_건물 */
    List<HashMap<String, Object>> selectEs83Prt1201(HashMap<String, Object> params);

    /** PRT_12_입력표_건물_D */
    List<HashMap<String, Object>> selectEs83Prt1202(HashMap<String, Object> params);

    /** PRT_13_입력표_건물담보제공비율 */
    List<HashMap<String, Object>> selectEs83Prt1301(HashMap<String, Object> params);

    /** PRT_21_건물평가가격등계산 */
    List<HashMap<String, Object>> selectEs83Prt21(HashMap<String, Object> params);

    /** PRT_22_토지평가가격등계산_토지건물 */
    List<HashMap<String, Object>> selectEs83Prt22W03(HashMap<String, Object> params);
    /** PRT_22_토지평가가격등계산_토지 */
    List<HashMap<String, Object>> selectEs83Prt22W04(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs83Prt22WC(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case LAND_CONSTRUCTION:
                return selectEs83Prt22W03(params);
            case LAND:
                return selectEs83Prt22W04(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }
}
