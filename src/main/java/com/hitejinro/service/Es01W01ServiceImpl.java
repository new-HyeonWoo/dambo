package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.Es01W01Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs01W01Service")
@RequiredArgsConstructor
public class Es01W01ServiceImpl implements Es01Service {
	private final Es01W01Mapper es01W01Mapper;

	@Override
	public CollateralKindType type() {
		return CollateralKindType.ETC;
	}

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {
			case "Q_관리부서확인":
				return es01W01Mapper.selectList1(params);
			case "조회_의견":
				return es01W01Mapper.selectList2AsConvert(params);
			case "조회_조세":
				return es01W01Mapper.selectList3(params);
			case "조회_조세_출력":
				return es01W01Mapper.selectList4(params);
			case "조회":
				return es01W01Mapper.selectList5AsConvert(params);
			case "Q_당사설정시담보여력":
				return es01W01Mapper.selectList6(params);
			case "Q_말소되지않는권리자의존재여부":
				return es01W01Mapper.selectList7(params);
			case "Q_크로스":
				return es01W01Mapper.selectList8(params);
			case "Q_배당금집계_근거내역":
				return es01W01Mapper.selectList9(params);
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}

	@Transactional
	@Override
	public void saveQuery(SaveRequest saveRequest, String name) {
		HashMap<String, Object> params = saveRequest.getParams();

		switch (name) {
			case "저장":
				es01W01Mapper.save1(params);
				break;
			case "저장_조세":
				es01W01Mapper.save2(params);
				break;
			case "00_수정_배당금_ES3402":
				es01W01Mapper.save3List(params, saveRequest.getListMap());
				break;
			case "00_수정_배당금_ES3405":
				es01W01Mapper.save4List(params, saveRequest.getListMap());
				break;
			case "저장_담보마스타_담보여력등":
				es01W01Mapper.save5(params);
				break;
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}

	}
}
