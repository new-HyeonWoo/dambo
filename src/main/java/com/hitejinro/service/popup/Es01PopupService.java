package com.hitejinro.service.popup;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.dto.request.SaveRequest;

import java.util.HashMap;
import java.util.List;

public interface Es01PopupService {
	CollateralType type();
	List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name);

	void saveQuery(SaveRequest saveRequest, String name);
}
