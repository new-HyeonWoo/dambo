package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.mapper.Es81Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs81Service")
@RequiredArgsConstructor
public class Es81ServiceImpl implements Es81Service {
	private final Es81Mapper es81Mapper;

	@Override
	public List<HashMap<String, Object>> query(HashMap<String, Object> params, String name, CollateralType type) {
		switch (name) {
			case "PRT_00_담보마스타":
				return es81Mapper.selectEs81Prt00(params, type);
			case "PRT_01_입력표":
				return es81Mapper.selectEs81Prt01(params);
			case "PRT_02_입력표_보정표":
				return es81Mapper.selectEs81Prt02(params, type);
			case "PRT_03_입력표_규제사항개관":
				return es81Mapper.selectEs81Prt03(params, type);
			case "PRT_11_감정가격_시가_최저최고":
				return es81Mapper.selectEs81Prt11(params, type);
			case "PRT_31_담보사항_담보여력및초과부족설정":
				return es81Mapper.selectEs81Prt31(params, type);
			case "PRT_31_담보사항_당사설정":
				return es81Mapper.selectEs81Prt3101(params, type);
			case "PRT_31_담보사항_선순위내역":
				return es81Mapper.selectEs81W04Prt3102(params, type);
			case "PRT_31_담보사항_선순위말소예정내역":
				return es81Mapper.selectEs81W04Prt3103(params, type);
			case "PRT_11_입력표_토지":
				return es81Mapper.selectEs81Prt1101(params, type);
			case "PRT_11_입력표_토지_D":
				return es81Mapper.selectEs81Prt1101D(params, type);
			case "PRT_12_입력표_건물":
				return es81Mapper.selectEs81W03Prt12(params);
			case "PRT_12_입력표_건물_D":
				return es81Mapper.selectEs81W03Prt12D(params);
			case "PRT_13_입력표_건물담보제공비율":
				return es81Mapper.selectEs81W03Prt13(params);
			case "PRT_21_건물평가가격등계산":
				return es81Mapper.selectEs81W03Prt21(params);
			case "PRT_22_토지평가가격등계산":
				return es81Mapper.selectEs81Prt22(params, type);
			case "PRT_31_담보사항_선순위내역_NEW":
				return es81Mapper.selectEs81W03Prt31With04(params);
			case "PRT_02_보정표":
				return es81Mapper.selectEs81W04Prt02(params);
			default:
				throw new IllegalArgumentException("존재하지 않은 타입입니다.");
		}
	}
}
