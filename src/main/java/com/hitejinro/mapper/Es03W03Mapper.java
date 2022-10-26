package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * Es031 통계 통계DB
 */
@Mapper
public interface Es03W03Mapper {
    /** Q_01_감정현황_건수 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** Q_01_감정현황_건수_차트 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);

    /** Q_01_감정현황_평가금액 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** Q_01_감정현황_평가금액_차트 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** Q_담보목록 */
    List<HashMap<String, Object>> selectList5(HashMap<String, Object> params);

    /** Q_담보종류 */
    List<HashMap<String, Object>> selectList6(HashMap<String, Object> params);
}
