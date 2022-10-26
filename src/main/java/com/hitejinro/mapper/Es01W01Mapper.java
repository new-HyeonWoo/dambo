package com.hitejinro.mapper;

import com.hitejinro.common.util.ConvertUtil;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * Es01 리스트
 */
@Mapper
public interface Es01W01Mapper {
    /** Q_관리부서확인 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** 조회_의견 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList2AsConvert(HashMap<String, Object> params) {
        return convertRtfText(this.selectList2(params));
    }

    /** 조회_조세 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** 조회_조세_출력 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** 조회 */
    List<HashMap<String, Object>> selectList5(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList5AsConvert(HashMap<String, Object> params) {
        return convertRtfText(this.selectList5(params));
    }

    /** 저장 */
    int save1(HashMap<String, Object> params);

    /** 저장_조세 */
    int save2(HashMap<String, Object> params);

    default List<HashMap<String, Object>> convertRtfText(List<HashMap<String, Object>> list) {
        try {
            for (int i=0; i< list.size(); i++) {
                HashMap<String, Object> map = list.get(i);
                if (map.containsKey("MENT_ITEM") && isRtfText(map.get("MENT_ITEM").toString())) {
                    map.put("MENT_ITEM", ConvertUtil.rtfTextToString(map.get("MENT_ITEM").toString()));
                }
                if (map.containsKey("MENT_ITEMS") && isRtfText(map.get("MENT_ITEMS").toString())) {
                    map.put("MENT_ITEMS", ConvertUtil.rtfTextToString(map.get("MENT_ITEMS").toString()));
                }
            }
        } catch (Exception e) {
            throw new IllegalArgumentException("rtfTextToString convert error");
        }
        return list;
    }

    /** Q_당사설정시담보여력 */
    List<HashMap<String, Object>> selectList6(HashMap<String, Object> params);

    /** Q_말소되지않는권리자의존재여부 */
    List<HashMap<String, Object>> selectList7(HashMap<String, Object> params);

    /** Q_크로스 */
    List<HashMap<String, Object>> selectList8(HashMap<String, Object> params);
    /** Q_배당금집계_근거내역 */
    List<HashMap<String, Object>> selectList9(HashMap<String, Object> params);

    /** 00_수정_배당금_ES3402 */
    int save3(HashMap<String, Object> params);
    default void save3List(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        for (HashMap<String, Object> param : params) {
            save3(param);
        }
    }

    /** 00_수정_배당금_ES3405 */
    int save4(HashMap<String, Object> params);
    default void save4List(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        for (HashMap<String, Object> param : params) {
            save4(param);
        }
    }

    /** 저장_담보마스타_담보여력등 */
    int save5(HashMap<String, Object> params);

    default boolean isRtfText(String text) {
        return text.startsWith("{\\rtf");
    }
}
