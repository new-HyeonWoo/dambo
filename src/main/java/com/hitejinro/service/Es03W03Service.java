package com.hitejinro.service;

import java.util.HashMap;
import java.util.List;

public interface Es03W03Service {
	List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name);
}
