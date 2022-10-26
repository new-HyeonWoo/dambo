package com.hitejinro.service;

import com.hitejinro.mapper.CustomerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service("CustomerService")
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerMapper customerMapper;

	@Override
	public List<HashMap<String, Object>> findCustomers(HashMap<String, Object> params) {
		return customerMapper.selectCustomers(params);
	}
}
