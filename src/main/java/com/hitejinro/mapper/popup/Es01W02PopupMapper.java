package com.hitejinro.mapper.popup;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface Es01W02PopupMapper {
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
}
