package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.common.enums.CollateralType;

import java.util.HashMap;
import java.util.List;

public interface ProcedureService {
	void call(HashMap<String, Object> params, String name, CollateralKindType type);
}
