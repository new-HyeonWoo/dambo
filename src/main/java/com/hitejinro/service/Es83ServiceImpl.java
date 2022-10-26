package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.mapper.Es83Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs83Service")
@RequiredArgsConstructor
public class Es83ServiceImpl implements Es83Service {
	private final Es83Mapper es83Mapper;

	@Override
	public List<HashMap<String, Object>> query(HashMap<String, Object> params, String name, CollateralType type) {
		switch (name) {
			case "PRT_00_담보마스타":
				return es83Mapper.selectEs83Prt00WC(params, type);
			case "PRT_01_입력표_집합건물":
				return es83Mapper.selectEs83Prt01(params);
			case "PRT_02_입력표_보정표":
				return es83Mapper.selectEs83Prt02(params);
			case "PRT_03_입력표_규제사항개관":
				return es83Mapper.selectEs83Prt03WC(params, type);
			case "PRT_11_감정가격_시가_최저최고":
				return es83Mapper.selectEs83Prt11WC(params, type);
			case "PRT_40_응찰_마스타":
				return es83Mapper.selectEs83Prt40WC(params, type);
			case "PRT_41_응찰_기일내역":
				return es83Mapper.selectEs83Prt41WC(params, type);
			case "PRT_42_응찰_전감정의개요":
				return es83Mapper.selectEs83Prt42WC(params, type);
			case "PRT_02_보정표":
				return es83Mapper.selectEs83Prt02WC(params, type);
			case "PRT_11_입력표_토지":
				return es83Mapper.selectEs83Prt1101WC(params, type);
			case "PRT_11_입력표_토지_D":
				return es83Mapper.selectEs83Prt1102WC(params, type);
			case "PRT_12_입력표_건물":
				return es83Mapper.selectEs83Prt1201(params);
			case "PRT_12_입력표_건물_D":
				return es83Mapper.selectEs83Prt1202(params);
			case "PRT_13_입력표_건물담보제공비율":
				return es83Mapper.selectEs83Prt1301(params);
			case "PRT_21_건물평가가격등계산":
				return es83Mapper.selectEs83Prt21(params);
			case "PRT_22_토지평가가격등계산":
				return es83Mapper.selectEs83Prt22WC(params, type);
			default:
				throw new IllegalArgumentException("존재하지 않은 타입입니다.");
		}
	}
}
