package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface ProcedureMapper {
    /** SPESU_MULTI_COMPUTE */
    void callProcedure1(HashMap<String, Object> params);
    /** SPESU_SINGLE_COMPUTE */
    void callProcedure2(HashMap<String, Object> params);
    /** SPESU_RIGHT_PERSON_CLEAR_00 */
    void callProcedure3(HashMap<String, Object> params);

    /** SPESU_CLOB_MERGE */
    void callProcedure4(HashMap<String, Object> params);
}
