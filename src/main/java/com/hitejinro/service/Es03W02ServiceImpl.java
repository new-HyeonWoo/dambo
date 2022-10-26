package com.hitejinro.service;

import com.hitejinro.mapper.Es03W02Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs03W02Service")
@RequiredArgsConstructor
public class Es03W02ServiceImpl implements Es03W02Service {
	private final Es03W02Mapper es03W01Mapper;

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {
			case "Q_DUAL_해당월일자_까지":
				return es03W01Mapper.selectList1(params);
			case "Q_DUAL_해당월일자_부터":
				return es03W01Mapper.selectList2(params);
			case "Q_DUAL_해당일자_부터":
				return es03W01Mapper.selectList3(params);
			case "Q_거래처목록":
				return es03W01Mapper.selectList4(params);
			case "Q_담보목록":
				return es03W01Mapper.selectList5(params);
			case "Q_담보목록_그래프용":
				return es03W01Mapper.selectList6(params);
			case "Q_담보종류":
				return es03W01Mapper.selectList7(params);
			case "Q_부서목록":
				return es03W01Mapper.selectList8(params);
			case "Q_우편번호_구군":
				return es03W01Mapper.selectList9(params);
			case "Q_우편번호_동":
				return es03W01Mapper.selectList10(params);
			case "Q_우편번호_시도":
				return es03W01Mapper.selectList11(params);
			case "Q_지목":
				return es03W01Mapper.selectList12(params);
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}
}
