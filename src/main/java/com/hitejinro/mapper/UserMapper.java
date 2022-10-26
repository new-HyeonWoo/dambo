package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface UserMapper {
    List<HashMap<String, Object>> sample();
    HashMap<String, String> selectUser(String empNo);

    String selectUserDeptCdByEmpNo(String empNo);
}
