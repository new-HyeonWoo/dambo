package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.mapper.Es81Mapper;
import com.hitejinro.mapper.Es82Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs82Service")
@RequiredArgsConstructor
public class Es82ServiceImpl implements Es82Service {
	private final Es82Mapper es82Mapper;

	@Override
	public List<HashMap<String, Object>> query(HashMap<String, Object> params, String name, CollateralType type) {
		switch (name) {
			case "PRT_재감정비교표":
				return es82Mapper.select1(params);
			case "PRT_재감정시주요변동사항":
				return es82Mapper.select2(params);
			default:
				throw new IllegalArgumentException("존재하지 않은 타입입니다.");
		}
	}
}
