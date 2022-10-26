package com.hitejinro.mapper;

import org.apache.commons.lang3.math.NumberUtils;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * Es031 통계 조건별검색
 */
@Mapper
public interface Es03W01Mapper {
    /** Q_DUAL_해당월일자_까지 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** Q_DUAL_해당월일자_부터 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);

    /** Q_DUAL_해당일자_부터 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** Q_거래처목록 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** Q_담보목록 */
    List<HashMap<String, Object>> selectList5ByCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList5(HashMap<String, Object> params) {
        params.put("condition1", params.get("07_최종평가가격_최저"));
        params.put("condition2", params.get("08_최종평가가격_최고"));
        params.put("condition3", params.get("03_예상낙찰가_최저"));
        params.put("condition4", params.get("04_예상낙찰가_최고"));
        params.put("condition5", params.get("09_면적_토지_최저"));
        params.put("condition6", params.get("10_면적_토지_최고"));
        params.put("condition7", params.get("11_면적_건물_최저"));
        params.put("condition8", params.get("12_면적_건물_최고"));
        params.put("condition9", params.get("05_담보종류"));
        params.put("condition10", params.get("14_1차거래처"));
        params.put("condition11", params.get("15_자체및업소"));

        return selectList5ByCondition(params);
    }

    /** Q_담보목록_그래프용 */
    List<HashMap<String, Object>> selectList6(HashMap<String, Object> params);

    /** Q_담보종류 */
    List<HashMap<String, Object>> selectList7(HashMap<String, Object> params);

    /** Q_부서목록 */
    List<HashMap<String, Object>> selectList8(HashMap<String, Object> params);

    /** Q_우편번호_구군 */
    List<HashMap<String, Object>> selectList9(HashMap<String, Object> params);

    /** Q_우편번호_동 */
    List<HashMap<String, Object>> selectList10(HashMap<String, Object> params);

    /** Q_우편번호_시도 */
    List<HashMap<String, Object>> selectList11(HashMap<String, Object> params);
}
