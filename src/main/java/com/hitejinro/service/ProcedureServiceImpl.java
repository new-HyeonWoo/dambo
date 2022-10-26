package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.mapper.ProcedureMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service("ProcedureService")
@RequiredArgsConstructor
public class ProcedureServiceImpl implements ProcedureService {
	private final ProcedureMapper procedureMapper;

	@Override
	public void call(HashMap<String, Object> params, String name, CollateralKindType type) {
		switch (name) {
			case "SPESU_MULTI_COMPUTE":
				procedureMapper.callProcedure1(params);
				break;
			case "SPESU_SINGLE_COMPUTE":
				procedureMapper.callProcedure2(params);
				break;
			case "SPESU_RIGHT_PERSON_CLEAR_00":
				procedureMapper.callProcedure3(params);
				break;
			case "SPESU_CLOB_MERGE":
				procedureMapper.callProcedure4(params);
				break;
			default:
				throw new IllegalArgumentException("존재하지 않은 타입입니다.");
		}
	}
}
