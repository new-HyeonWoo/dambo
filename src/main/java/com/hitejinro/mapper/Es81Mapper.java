package com.hitejinro.mapper;

import com.hitejinro.common.enums.CollateralType;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * 집합건물 감정서
 */
@Mapper
public interface Es81Mapper {
    /** PRT_00_담보마스타_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt00WithCollection(HashMap<String, Object> params);
    /** PRT_00_담보마스타_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt00WithLandConstruction(HashMap<String, Object> params);
    /** PRT_00_담보마스타_토지 */
    List<HashMap<String, Object>> selectEs81Prt00WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt00(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt00WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81Prt00WithLandConstruction(params);
            case LAND:
                return selectEs81Prt00WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_01_입력표 */
    List<HashMap<String, Object>> selectEs81Prt01(HashMap<String, Object> params);

    /** PRT_02_입력표_보정표_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt02WithCollection(HashMap<String, Object> params);
    /** PRT_02_입력표_보정표_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt02WithLandConstruction(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt02(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt02WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81Prt02WithLandConstruction(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_03_입력표_규제사항개관_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt03WithCollection(HashMap<String, Object> params);
    /** PRT_03_입력표_규제사항개관_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt03WithLandConstruction(HashMap<String, Object> params);
    /** PRT_03_입력표_규제사항개관_토지 */
    List<HashMap<String, Object>> selectEs81Prt03WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt03(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt03WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81Prt03WithLandConstruction(params);
            case LAND:
                return selectEs81Prt03WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_11_감정가격_시가_최저최고_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt11WithCollection(HashMap<String, Object> params);
    /** PRT_11_감정가격_시가_최저최고_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt11WithLandConstruction(HashMap<String, Object> params);
    /** PRT_11_감정가격_시가_최저최고_토지 */
    List<HashMap<String, Object>> selectEs81Prt11WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt11(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt11WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81Prt11WithLandConstruction(params);
            case LAND:
                return selectEs81Prt11WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_31_담보사항_담보여력및초과부족설정_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt31WithCollection(HashMap<String, Object> params);
    /** PRT_31_담보사항_담보여력및초과부족설정_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt31WithLandConstruction(HashMap<String, Object> params);
    /** PRT_31_담보사항_담보여력및초과부족설정_토지 */
    List<HashMap<String, Object>> selectEs81Prt31WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt31(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt31WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81Prt31WithLandConstruction(params);
            case LAND:
                return selectEs81Prt31WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_31_담보사항_당사설정_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt3101WithCollection(HashMap<String, Object> params);
    /** PRT_31_담보사항_당사설정_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt3101WithLandConstruction(HashMap<String, Object> params);
    /** PRT_31_담보사항_당사설정_토지 */
    List<HashMap<String, Object>> selectEs81Prt3101WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt3101(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt3101WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81Prt3101WithLandConstruction(params);
            case LAND:
                return selectEs81Prt3101WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_31_담보사항_선순위내역_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt3102WithCollection(HashMap<String, Object> params);
    /** PRT_31_담보사항_선순위내역_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt3102WithLandConstruction(HashMap<String, Object> params);
    /** PRT_31_담보사항_선순위내역_토지 */
    List<HashMap<String, Object>> selectEs81W04Prt3102WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81W04Prt3102(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt3102WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81Prt3102WithLandConstruction(params);
            case LAND:
                return selectEs81W04Prt3102WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_31_담보사항_선순위말소예정내역_집합건물 */
    List<HashMap<String, Object>> selectEs81Prt3103WithCollection(HashMap<String, Object> params);
    /** PRT_31_담보사항_선순위말소예정내역_토지건물 */
    List<HashMap<String, Object>> selectEs81W03Prt3103WithLandConstruction(HashMap<String, Object> params);
    /** PRT_31_담보사항_선순위말소예정내역_토지 */
    List<HashMap<String, Object>> selectEs81W04Prt3103WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81W04Prt3103(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case COLLECTION:
                return selectEs81Prt3103WithCollection(params);
            case LAND_CONSTRUCTION:
                return selectEs81W03Prt3103WithLandConstruction(params);
            case LAND:
                return selectEs81W04Prt3103WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }


    /** PRT_11_입력표_토지_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt1101WithLandConstruction(HashMap<String, Object> params);
    /** PRT_11_입력표_토지_토지 */
    List<HashMap<String, Object>> selectEs81Prt1101WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt1101(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case LAND_CONSTRUCTION:
                return selectEs81Prt1101WithLandConstruction(params);
            case LAND:
                return selectEs81Prt1101WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_11_입력표_토지_D_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt1101DWithLandConstruction(HashMap<String, Object> params);
    /** PRT_11_입력표_토지_D_토지 */
    List<HashMap<String, Object>> selectEs81Prt1101DWithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt1101D(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case LAND_CONSTRUCTION:
                return selectEs81Prt1101DWithLandConstruction(params);
            case LAND:
                return selectEs81Prt1101DWithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_12_입력표_건물 */
    List<HashMap<String, Object>> selectEs81W03Prt12(HashMap<String, Object> params);
    /** PRT_12_입력표_건물_D */
    List<HashMap<String, Object>> selectEs81W03Prt12D(HashMap<String, Object> params);
    /** PRT_13_입력표_건물담보제공비율 */
    List<HashMap<String, Object>> selectEs81W03Prt13(HashMap<String, Object> params);
    /** PRT_21_건물평가가격등계산 */
    List<HashMap<String, Object>> selectEs81W03Prt21(HashMap<String, Object> params);

    /** PRT_22_토지평가가격등계산_토지건물 */
    List<HashMap<String, Object>> selectEs81Prt22WithLandConstruction(HashMap<String, Object> params);
    /** PRT_22_토지평가가격등계산_토지 */
    List<HashMap<String, Object>> selectEs81Prt22WithLand(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectEs81Prt22(HashMap<String, Object> params, CollateralType type) {
        switch (type) {
            case LAND_CONSTRUCTION:
                return selectEs81Prt22WithLandConstruction(params);
            case LAND:
                return selectEs81Prt22WithLand(params);
            default:
                throw new IllegalArgumentException("올바르지 않은 담보유형입니다.");
        }
    }

    /** PRT_31_담보사항_선순위내역_NEW */
    List<HashMap<String, Object>> selectEs81W03Prt31With04(HashMap<String, Object> params);
    /** PRT_02_보정표 */
    List<HashMap<String, Object>> selectEs81W04Prt02(HashMap<String, Object> params);
}
