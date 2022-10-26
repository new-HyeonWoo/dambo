package com.hitejinro.service;

import java.util.HashMap;
import java.util.List;

public interface CustomerService {
	List<HashMap<String, Object>> findCustomers(HashMap<String, Object> params);
}
