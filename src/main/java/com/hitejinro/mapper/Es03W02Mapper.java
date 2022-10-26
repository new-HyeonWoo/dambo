package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Es03 통계 통계검색
 */
@Mapper
public interface Es03W02Mapper {
    /** Q_DUAL_해당월일자_까지 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** Q_DUAL_해당월일자_부터 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);

    /** Q_DUAL_해당일자_부터 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** Q_거래처목록 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** Q_담보목록 */
    List<HashMap<String, Object>> selectList5WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList5(HashMap<String, Object> params) {
        params.put("condition1", params.get("06_지점"));
        params.put("condition2", params.get("05_담보종류"));
        params.put("condition3", params.get("13_지목"));

        return selectList5WithCondition(params);
    }

    /** Q_담보목록_그래프용 */
    List<HashMap<String, Object>> selectList6WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList6(HashMap<String, Object> params) {
        params.put("condition1", params.get("06_지점"));
        params.put("condition2", params.get("05_담보종류"));
        params.put("condition3", params.get("13_지목"));

        List<HashMap<String, Object>> selectList6WithData = new ArrayList<HashMap<String, Object>>();
        HashMap<String, Object> map = new HashMap<String,Object>();

        List<HashMap<String, Object>> selectList6WithCondition = selectList6WithCondition(params);
        System.out.println(params.get("09_그래프_X"));
        for(Map<String, Object> row : selectList6WithCondition) {
            map.put("X축",row.get(params.get("09_그래프_X")) == null ? "" : row.get(params.get("09_그래프_X")));
            map.put("Y축",row.get(params.get("09_그래프_Y")) == null ? "" : row.get(params.get("09_그래프_Y")));
            selectList6WithData.add(map);
        }

        return selectList6WithData;
    }
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

    /** Q_지목 */
    List<HashMap<String, Object>> selectList12(HashMap<String, Object> params);
}
