package com.hitejinro.service;

import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.Es03W01Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs03W01Service")
@RequiredArgsConstructor
public class Es03W01ServiceImpl implements Es03W01Service {
	private final Es03W01Mapper es03W01Mapper;

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
				params.put("condition1", params.get("07_최종평가가격_최저"));
				params.put("condition2", params.get("08_최종평가가격_최고"));
				params.put("condition3", params.get("03_예상낙찰가_최저"));
				params.put("condition4", params.get("04_예상낙찰가_최고"));
				params.put("condition5", params.get("09_면적_토지_최저"));
				params.put("condition6", params.get("10_면적_토지_최고"));
				params.put("condition7", params.get("11_면적_건물_최저"));
				params.put("condition8", params.get("12_면적_건물_최고"));
				params.put("condition9", params.get("05_담보종류"));
				params.put("condition10", params.get("14_1차거래처"));
				params.put("condition11", params.get("15_자체및업소"));
				params.put("condition12", params.get("13_지목"));
				params.put("condition13", params.get("06_지점"));

				return es03W01Mapper.selectList5(params);
			case "Q_담보종류":
				return es03W01Mapper.selectList6(params);
			case "Q_부서목록":
				return es03W01Mapper.selectList7(params);
			case "Q_우편번호_구군":
				return es03W01Mapper.selectList8(params);
			case "Q_우편번호_동":
				return es03W01Mapper.selectList9(params);
			case "Q_우편번호_시도":
				return es03W01Mapper.selectList10(params);
			case "Q_지목":
				return es03W01Mapper.selectList11(params);
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}
}
