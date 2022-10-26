package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.Es01W03_1Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

/**
 * 토건 상업용
 */
@Service("RenewEs01W03_1Service")
@RequiredArgsConstructor
public class Es01W03_1ServiceImpl implements Es01Service {
	private final Es01W03_1Mapper es01W03_1Mapper;

	@Override
	public CollateralKindType type() {
		return CollateralKindType.LAND_CONSTRUCTION_STORE;
	}

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {
			case "Q_00_가격동향":
				return es01W03_1Mapper.selectList1(params);
			case "Q_00_공공시설접근성":
				return es01W03_1Mapper.selectList2(params);
			case "Q_00_도로계통성":
				return es01W03_1Mapper.selectList3(params);
			case "Q_00_도로조건":
				return es01W03_1Mapper.selectList4(params);
			case "Q_00_상업시설접근성":
				return es01W03_1Mapper.selectList5(params);
			case "Q_00_인테리어비용":
				return es01W03_1Mapper.selectList6(params);
			case "Q_40_응찰입력표_마스타":
				return es01W03_1Mapper.selectList7(params);
			case "Q_41_응찰입력표_경매기일내역":
				return es01W03_1Mapper.selectList8(params);
			case "Q_42_응찰입력표_전감정의개요":
				return es01W03_1Mapper.selectList9(params);
			case "Q_43_응찰입력표_선순위권리내역":
				return es01W03_1Mapper.selectList10(params);
			case "Q_44_응찰입력표_선순위부담금액":
				return es01W03_1Mapper.selectList11(params);
			case "Q_49_DUAL_등록세":
				return es01W03_1Mapper.selectList12(params);
			case "Q_49_DUAL_종합부동산세":
				return es01W03_1Mapper.selectList13(params);
			case "Q_49_DUAL_처분비용":
				return es01W03_1Mapper.selectList14(params);
			case "Q_49_DUAL_취득세":
				return es01W03_1Mapper.selectList15(params);
			case "Q_99_평가구분":
				return es01W03_1Mapper.selectList16(params);
			case "Q_감정순번":
				return es01W03_1Mapper.selectList17(params);
			case "Q_감정순번_20100618":
				return es01W03_1Mapper.selectList18(params);
			case "Q_거래처목록":
				return es01W03_1Mapper.selectList19(params);
			case "Q_건물단가":
				return es01W03_1Mapper.selectList20(params);
			case "Q_건물의표시":
				return es01W03_1Mapper.selectList21(params);
			case "Q_건물평가액_집계표":
				return es01W03_1Mapper.selectList22(params);
			case "Q_경과일자":
				return es01W03_1Mapper.selectList23(params);
			case "Q_공통보고서_건물":
				return es01W03_1Mapper.selectList24(params);
			case "Q_공통보고서_건물JB":
				return es01W03_1Mapper.selectList25(params);
			case "Q_공통보고서_당사설정액":
				return es01W03_1Mapper.selectList26(params);
			case "Q_공통보고서_당사설정액JB":
				return es01W03_1Mapper.selectList27(params);
			case "Q_공통보고서_보정표":
				return es01W03_1Mapper.selectList28(params);
			case "Q_공통보고서_보정표JB":
				return es01W03_1Mapper.selectList29(params);
			case "Q_공통보고서_초과부족설정액":
				return es01W03_1Mapper.selectList30(params);
			case "Q_공통보고서_초과부족설정액JB":
				return es01W03_1Mapper.selectList31(params);
			case "Q_공통보고서_초과부족설정액JB_20081219":
				return es01W03_1Mapper.selectList32(params);
			case "Q_공통보고서_초과부족설정액_20081219":
				return es01W03_1Mapper.selectList33(params);
			case "Q_공통보고서_최고최저":
				return es01W03_1Mapper.selectList34(params);
			case "Q_공통보고서_최고최저JB":
				return es01W03_1Mapper.selectList35(params);
			case "Q_공통보고서_토지":
				return es01W03_1Mapper.selectList36(params);
			case "Q_공통보고서_토지JB":
				return es01W03_1Mapper.selectList37(params);
			case "Q_공통보고서_트리":
				return es01W03_1Mapper.selectList38(params);
			case "Q_관리부서확인":
				return es01W03_1Mapper.selectList39(params);
			case "Q_규제의표시":
				return es01W03_1Mapper.selectList40(params);
			case "Q_기준가격":
				return es01W03_1Mapper.selectList41(params);
			case "Q_기준가격집계표":
				return es01W03_1Mapper.selectList42(params);
			case "Q_기타요인":
				return es01W03_1Mapper.selectList43(params);
			case "Q_담당자메일조회":
				return es01W03_1Mapper.selectList44(params);
			case "Q_담보_건축":
				return es01W03_1Mapper.selectList45(params);
			case "Q_담보_건축_Group":
				return es01W03_1Mapper.selectList46(params);
			case "Q_담보마스타":
				return es01W03_1Mapper.selectList47(params);
			case "Q_담보제공비율":
				return es01W03_1Mapper.selectList48(params);
			case "Q_담보제공비율_건물":
				return es01W03_1Mapper.selectList49(params);
			case "Q_도로명주소_시군구":
				return es01W03_1Mapper.selectList50(params);
			case "Q_도로명주소_시도":
				return es01W03_1Mapper.selectList51(params);
			case "Q_도로명주소목록":
				return es01W03_1Mapper.selectList52(params);
			case "Q_링크사이트":
				return es01W03_1Mapper.selectList53(params);
			case "Q_문서관리_관련문서":
				return es01W03_1Mapper.selectList54(params);
			case "Q_문서관리_사진":
				return es01W03_1Mapper.selectList55(params);
			case "Q_배당표M":
				return es01W03_1Mapper.selectList56(params);
			case "Q_배당표_배당금_계산D":
				return es01W03_1Mapper.selectList57(params);
			case "Q_배당표_배당금_계산D_Temp":
				return es01W03_1Mapper.selectList58(params);
			case "Q_배당표_배당금_계산M":
				return es01W03_1Mapper.selectList59(params);
			case "Q_배당표_배당금_배당건수":
				return es01W03_1Mapper.selectList60(params);
			case "Q_배당표_배당금건물_계산D":
				return es01W03_1Mapper.selectList61(params);
			case "Q_배당표_배당금건물_계산D_Temp":
				return es01W03_1Mapper.selectList62(params);
			case "Q_배당표_배당금건물_계산M":
				return es01W03_1Mapper.selectList63(params);
			case "Q_배당표_배당금건물_배당건수":
				return es01W03_1Mapper.selectList64(params);
			case "Q_배당표_상가임차보증금_계산":
				return es01W03_1Mapper.selectList65(params);
			case "Q_배당표_주택임차보증금_계산":
				return es01W03_1Mapper.selectList66(params);
			case "Q_보정표":
				return es01W03_1Mapper.selectList67(params);
			case "Q_본건인근지역의가격수준":
				return es01W03_1Mapper.selectList68(params);
			case "Q_부서목록":
				return es01W03_1Mapper.selectList69(params);
			case "Q_비준가격":
				return es01W03_1Mapper.selectList70(params);
			case "Q_비준가격산정":
				return es01W03_1Mapper.selectList71(params);
			case "Q_비준가격집계표":
				return es01W03_1Mapper.selectList72(params);
			case "Q_사례번호갱신":
				return es01W03_1Mapper.selectList73(params);
			case "Q_사업부문":
				return es01W03_1Mapper.selectList74(params);
			case "Q_수익_수익가격":
				return es01W03_1Mapper.selectList75(params);
			case "Q_수익_입지특성":
				return es01W03_1Mapper.selectList76(params);
			case "Q_수익_평가액":
				return es01W03_1Mapper.selectList77(params);
			case "Q_영업감정요청자료":
				return es01W03_1Mapper.selectList78(params);
			case "Q_일단지구분갱신":
				return es01W03_1Mapper.selectList79(params);
			case "Q_입력표":
				return es01W03_1Mapper.selectList80(params);
			case "Q_입력표_건물":
				return es01W03_1Mapper.selectList81(params);
			case "Q_주소목록":
				return es01W03_1Mapper.selectList82(params);
			case "Q_코드_가임대보증금적용범위":
				return es01W03_1Mapper.selectList83(params);
			case "Q_코드_가임대보증금적용범위_상가":
				return es01W03_1Mapper.selectList84(params);
			case "Q_코드_각구의일련번호":
				return es01W03_1Mapper.selectList85(params);
			case "Q_코드_경과년도":
				return es01W03_1Mapper.selectList86(params);
			case "Q_코드_고저":
				return es01W03_1Mapper.selectList87(params);
			case "Q_코드_공유지분":
				return es01W03_1Mapper.selectList88(params);
			case "Q_코드_관공서접근성":
				return es01W03_1Mapper.selectList89(params);
			case "Q_코드_관리상태":
				return es01W03_1Mapper.selectList90(params);
			case "Q_코드_구조":
				return es01W03_1Mapper.selectList91(params);
			case "Q_코드_권리의내용":
				return es01W03_1Mapper.selectList92(params);
			case "Q_코드_기타접근성":
				return es01W03_1Mapper.selectList93(params);
			case "Q_코드_기타제한구역":
				return es01W03_1Mapper.selectList94(params);
			case "Q_코드_기타환경조건":
				return es01W03_1Mapper.selectList95(params);
			case "Q_코드_담보물의입지조건":
				return es01W03_1Mapper.selectList96(params);
			case "Q_코드_담보종류":
				return es01W03_1Mapper.selectList97(params);
			case "Q_코드_대지면적":
				return es01W03_1Mapper.selectList98(params);
			case "Q_코드_도로거리":
				return es01W03_1Mapper.selectList99(params);
			case "Q_코드_도로조건":
				return es01W03_1Mapper.selectList100(params);
			case "Q_코드_도시계획":
				return es01W03_1Mapper.selectList101(params);
			case "Q_코드_면적":
				return es01W03_1Mapper.selectList102(params);
			case "Q_코드_방위":
				return es01W03_1Mapper.selectList103(params);
			case "Q_코드_법정지상권":
				return es01W03_1Mapper.selectList104(params);
			case "Q_코드_법정지상권_존속기간":
				return es01W03_1Mapper.selectList105(params);
			case "Q_코드_사진구분":
				return es01W03_1Mapper.selectList106(params);
			case "Q_코드_상가_가임대보증금":
				return es01W03_1Mapper.selectList107(params);
			case "Q_코드_순위":
				return es01W03_1Mapper.selectList108(params);
			case "Q_코드_용도지구":
				return es01W03_1Mapper.selectList109(params);
			case "Q_코드_용도지역":
				return es01W03_1Mapper.selectList110(params);
			case "Q_코드_이용현황":
				return es01W03_1Mapper.selectList111(params);
			case "Q_코드_인근지역":
				return es01W03_1Mapper.selectList112(params);
			case "Q_코드_일단지구분":
				return es01W03_1Mapper.selectList113(params);
			case "Q_코드_저촉률":
				return es01W03_1Mapper.selectList114(params);
			case "Q_코드_점유자형태":
				return es01W03_1Mapper.selectList115(params);
			case "Q_코드_접한도로의폭":
				return es01W03_1Mapper.selectList116(params);
			case "Q_코드_주변상권":
				return es01W03_1Mapper.selectList117(params);
			case "Q_코드_주용도":
				return es01W03_1Mapper.selectList118(params);
			case "Q_코드_주택_가임대보증금":
				return es01W03_1Mapper.selectList119(params);
			case "Q_코드_중심지역접근성":
				return es01W03_1Mapper.selectList120(params);
			case "Q_코드_증개축횟수":
				return es01W03_1Mapper.selectList121(params);
			case "Q_코드_지목":
				return es01W03_1Mapper.selectList122(params);
			case "Q_코드_지붕":
				return es01W03_1Mapper.selectList123(params);
			case "Q_코드_철도":
				return es01W03_1Mapper.selectList124(params);
			case "Q_코드_최고채권액":
				return es01W03_1Mapper.selectList125(params);
			case "Q_코드_토지의면적":
				return es01W03_1Mapper.selectList126(params);
			case "Q_코드_토지의종류":
				return es01W03_1Mapper.selectList127(params);
			case "Q_코드_토지의형상":
				return es01W03_1Mapper.selectList128(params);
			case "Q_코드_폐기물":
				return es01W03_1Mapper.selectList129(params);
			case "Q_코드_표준단가_구조":
				return es01W03_1Mapper.selectList130(params);
			case "Q_코드_표준단가_급수":
				return es01W03_1Mapper.selectList131(params);
			case "Q_코드_표준단가_용도":
				return es01W03_1Mapper.selectList132(params);
			case "Q_코드_표준지구분":
				return es01W03_1Mapper.selectList133(params);
			case "Q_코드_형상":
				return es01W03_1Mapper.selectList134(params);
			case "Q_탁상감정":
				return es01W03_1Mapper.selectList135(params);
			case "Q_탁상감정EMail주소조회":
				return es01W03_1Mapper.selectList136(params);
			case "Q_탁상감정진행상황":
				return es01W03_1Mapper.selectList137(params);
			case "Q_탁상감정파일명":
				return es01W03_1Mapper.selectList138(params);
			case "Q_토지의표시":
				return es01W03_1Mapper.selectList139(params);
			case "Q_표준지갱신":
				return es01W03_1Mapper.selectList140(params);
			case "Q_표준지공시지가선정":
				return es01W03_1Mapper.selectList141(params);
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}

	@Transactional
	@Override
	public void saveQuery(SaveRequest saveRequest, String name) {
		HashMap<String, Object> params = saveRequest.getParams();

		switch (name) {
			case "저장_40_응찰마스타":
				es01W03_1Mapper.save142(params);
				break;
			case "저장_41_응찰_기일내역":
				es01W03_1Mapper.save143(params, saveRequest.getListMap());
				break;
			case "저장_42_응찰_전감정개요":
				es01W03_1Mapper.save144(params);
				break;
			case "저장_43_응찰_선순위권리내역":
				es01W03_1Mapper.save145(params, saveRequest.getListMap());
				break;
			case "저장_44_응찰_선순위부담금액":
				es01W03_1Mapper.save146(params, saveRequest.getListMap());
				break;
			case "저장_건물단가":
				es01W03_1Mapper.save147(params, saveRequest.getListMap());
				break;
			case "저장_건물의표시":
				es01W03_1Mapper.save148(params, saveRequest.getListMap());
				break;
			case "저장_결재자현황_영업":
				es01W03_1Mapper.save149(params);
				break;
			case "저장_결재자현황_영업_Clear":
				es01W03_1Mapper.save150(params);
				break;
			case "저장_규제의표시":
				es01W03_1Mapper.save151(params);
				break;
			case "저장_기준가격":
				es01W03_1Mapper.save152(params, saveRequest.getListMap());
				break;
			case "저장_기타요인":
				es01W03_1Mapper.save153(params, saveRequest.getListMap());
				break;
			case "저장_담보":
				es01W03_1Mapper.save154(params, saveRequest.getListMap());
				break;
			case "저장_담보_건물":
				es01W03_1Mapper.save155(params, saveRequest.getListMap());
				break;
			case "저장_담보마스타_담보여력등":
				es01W03_1Mapper.save156(params);
				break;
			case "저장_담보마스터":
				es01W03_1Mapper.save157(params);
				break;
			case "저장_담보제공비율":
				es01W03_1Mapper.save158(params, saveRequest.getListMap());
				break;
			case "저장_담보제공비율_건물":
				es01W03_1Mapper.save159(params, saveRequest.getListMap());
				break;
			case "저장_문서관리":
				es01W03_1Mapper.save160(params, saveRequest.getListMap());
				break;
			case "저장_문서관리_문서":
				es01W03_1Mapper.save161(params, saveRequest.getListMap());
				break;
			case "저장_배당금_권리자_CLEAR":
				es01W03_1Mapper.save162(params);
				break;
			case "저장_배당금_배당금":
				es01W03_1Mapper.save163(params, saveRequest.getListMap());
				break;
			case "저장_배당금_배당금건물":
				es01W03_1Mapper.save164(params, saveRequest.getListMap());
				break;
			case "저장_배당금_배당표M":
				es01W03_1Mapper.save165(params);
				break;
			case "저장_배당금_주택임차보증금":
				es01W03_1Mapper.save166(params, saveRequest.getListMap());
				break;
			case "저장_보정표":
				es01W03_1Mapper.save167(params);
				break;
			case "저장_본건인근지역의가격수준":
				es01W03_1Mapper.save168(params);
				break;
			case "저장_본건토지":
				es01W03_1Mapper.save169(params, saveRequest.getListMap());
				break;
			case "저장_비준가격":
				es01W03_1Mapper.save170(params, saveRequest.getListMap());
				break;
			case "저장_비준가격산정사례":
				es01W03_1Mapper.save171(params, saveRequest.getListMap());
				break;
			case "저장_상가임차보증금":
				es01W03_1Mapper.save172(params, saveRequest.getListMap());
				break;
			case "저장_수익_수익가격":
				es01W03_1Mapper.save173(params);
				break;
			case "저장_수익_입지특성":
				es01W03_1Mapper.save174(params);
				break;
			case "저장_수익_평가액":
				es01W03_1Mapper.save175(params);
				break;
			case "저장_입력표":
				es01W03_1Mapper.save176(params);
				break;
			case "저장_입력표_건물":
				es01W03_1Mapper.save177(params);
				break;
			case "저장_탁상감정":
				es01W03_1Mapper.save178(params);
				break;
			case "저장_탁상감정_담보감정M변경":
				es01W03_1Mapper.save179(params);
				break;
			case "저장_토지의표시":
				es01W03_1Mapper.save180(params, saveRequest.getListMap());
				break;
			case "저장_평가액":
				es01W03_1Mapper.save181(params, saveRequest.getListMap());
				break;
			case "저장_표준지공시지가":
				es01W03_1Mapper.save182(params, saveRequest.getListMap());
				break;
		}
	}
}
