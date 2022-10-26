package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralType;

import java.util.HashMap;
import java.util.List;

public interface Es83Service {
	List<HashMap<String, Object>> query(HashMap<String, Object> params, String name, CollateralType type);
}
