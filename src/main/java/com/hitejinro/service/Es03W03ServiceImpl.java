package com.hitejinro.service;

import com.hitejinro.mapper.Es03W03Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs03W03Service")
@RequiredArgsConstructor
public class Es03W03ServiceImpl implements Es03W03Service {
	private final Es03W03Mapper es03W01Mapper;

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {
			case "Q_01_감정현황_건수":
				return es03W01Mapper.selectList1(params);
			case "Q_01_감정현황_건수_차트":
				return es03W01Mapper.selectList2(params);
			case "Q_01_감정현황_평가금액":
				return es03W01Mapper.selectList3(params);
			case "Q_01_감정현황_평가금액_차트":
				return es03W01Mapper.selectList4(params);
			case "Q_담보목록":
				return es03W01Mapper.selectList5(params);
			case "Q_담보종류":
				return es03W01Mapper.selectList6(params);
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}
}
