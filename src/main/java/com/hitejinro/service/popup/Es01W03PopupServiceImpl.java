package com.hitejinro.service.popup;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.popup.Es01W03PopupMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("PopupEs01W03Service")
@RequiredArgsConstructor
public class Es01W03PopupServiceImpl implements Es01PopupService {
	private final Es01W03PopupMapper es01W03PopupMapper;

	@Override
	public CollateralType type() {
		return CollateralType.LAND_CONSTRUCTION;
	}

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {
			case "Q_당사설정시담보여력":
				return es01W03PopupMapper.selectList6(params);
			case "Q_말소되지않는권리자의존재여부":
				return es01W03PopupMapper.selectList7(params);
			case "Q_크로스":
				return es01W03PopupMapper.selectList8(params);
			case "Q_배당금집계_근거내역":
				return es01W03PopupMapper.selectList9(params);
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}

	@Transactional
	@Override
	public void saveQuery(SaveRequest saveRequest, String name) {
		HashMap<String, Object> params = saveRequest.getParams();

		switch (name) {
			case "00_수정_배당금_ES3402":
				es01W03PopupMapper.save3List(params, saveRequest.getListMap());
				break;
			case "00_수정_배당금_ES3405":
				es01W03PopupMapper.save4List(params, saveRequest.getListMap());
				break;
			case "저장_담보마스타_담보여력등":
				es01W03PopupMapper.save5(params);
				break;
			default:
				throw new IllegalArgumentException("없는 쿼리 입니다.");
		}
	}
}
