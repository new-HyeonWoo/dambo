package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * 전감정사항비교표
 */
@Mapper
public interface Es82Mapper {
    /** PRT_재감정비교표 */
    List<HashMap<String, Object>> select1(HashMap<String, Object> params);

    /** PRT_재감정시주요변동사항 */
    List<HashMap<String, Object>> select2(HashMap<String, Object> params);
}
