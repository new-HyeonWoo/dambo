package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * 거래처 DAO 클래스
 */
@Mapper
public interface CustomerMapper {
	List<HashMap<String, Object>> selectCustomers(HashMap<String, Object> params);
}
