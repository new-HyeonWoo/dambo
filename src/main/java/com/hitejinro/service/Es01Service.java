package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.dto.request.SaveRequest;

import java.util.HashMap;
import java.util.List;

public interface Es01Service {
	CollateralKindType type();
	List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name);

	void saveQuery(SaveRequest saveRequest, String name);
}
