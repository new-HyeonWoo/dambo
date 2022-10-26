package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.Es01W03Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

/**
 * 토건 주거용
 */
@Service("RenewEs01W03Service")
@RequiredArgsConstructor
public class Es01W03ServiceImpl implements Es01Service {
	private final Es01W03Mapper es01W03Mapper;

	@Override
	public CollateralKindType type() {
		return CollateralKindType.LAND_CONSTRUCTION_RESIDENTIAL;
	}

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		System.out.println("findQuery : "+ name + "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		switch (name) {
			case "Q_40_응찰입력표_마스타":
				return es01W03Mapper.selectList1(params);
			case "Q_41_응찰입력표_경매기일내역":
				return es01W03Mapper.selectList2(params);
			case "Q_42_응찰입력표_전감정개요":
				return es01W03Mapper.selectList3(params);
			case "Q_43_응찰입력표_선순위권리내역":
				return es01W03Mapper.selectList4(params);
			case "Q_44_응찰입력표_선순위부담금액":
				return es01W03Mapper.selectList5(params);
			case "Q_49_DUAL_등록세":
				return es01W03Mapper.selectList6(params);
			case "Q_49_DUAL_종합부동산세":
				return es01W03Mapper.selectList7(params);
			case "Q_49_DUAL_처분비용":
				return es01W03Mapper.selectList8(params);
			case "Q_49_DUAL_취득세":
				return es01W03Mapper.selectList9(params);
			case "Q_99_평가구분":
				return es01W03Mapper.selectList10(params);
			case "Q_감정순번":
				return es01W03Mapper.selectList11(params);
			case "Q_감정순번_20100618":
				return es01W03Mapper.selectList12(params);
			case "Q_거래처목록":
				return es01W03Mapper.selectList13(params);
			case "Q_건물단가":
				return es01W03Mapper.selectList14(params);
			case "Q_건물의표시":
				return es01W03Mapper.selectList15(params);
			case "Q_건물평가액_집계표":
				return es01W03Mapper.selectList16(params);
			case "Q_경과일자":
				return es01W03Mapper.selectList17(params);
			case "Q_공통보고서_건물":
				return es01W03Mapper.selectList18(params);
			case "Q_공통보고서_건물JB":
				return es01W03Mapper.selectList19(params);
			case "Q_공통보고서_당사설정액":
				return es01W03Mapper.selectList20(params);
			case "Q_공통보고서_당사설정액JB":
				return es01W03Mapper.selectList21(params);
			case "Q_공통보고서_보정표":
				return es01W03Mapper.selectList22(params);
			case "Q_공통보고서_보정표JB":
				return es01W03Mapper.selectList23(params);
			case "Q_공통보고서_초과부족설정액":
				return es01W03Mapper.selectList24(params);
			case "Q_공통보고서_초과부족설정액_20081219":
				return es01W03Mapper.selectList25(params);
			case "Q_공통보고서_초과부족설정액JB":
				return es01W03Mapper.selectList26(params);
			case "Q_공통보고서_초과부족설정액JB_20081219":
				return es01W03Mapper.selectList27(params);
			case "Q_공통보고서_최고최저":
				return es01W03Mapper.selectList28(params);
			case "Q_공통보고서_최고최저JB":
				return es01W03Mapper.selectList29(params);
			case "Q_공통보고서_토지":
				return es01W03Mapper.selectList30(params);
			case "Q_공통보고서_토지JB":
				return es01W03Mapper.selectList31(params);
			case "Q_공통보고서_트리":
				return es01W03Mapper.selectList32(params);
			case "Q_관리부서확인":
				return es01W03Mapper.selectList33(params);
			case "Q_규제의표시":
				return es01W03Mapper.selectList34(params);
			case "Q_기준가격":
				return es01W03Mapper.selectList35(params);
			case "Q_기준가격집계표":
				return es01W03Mapper.selectList36(params);
			case "Q_기타요인":
				return es01W03Mapper.selectList37(params);
			case "Q_담당자메일조회":
				return es01W03Mapper.selectList38(params);
			case "Q_담보_건축":
				return es01W03Mapper.selectList39(params);
			case "Q_담보_건축_Group":
				return es01W03Mapper.selectList40(params);
			case "Q_담보마스타":
				return es01W03Mapper.selectList41(params);
			case "Q_담보제공비율":
				return es01W03Mapper.selectList42(params);
			case "Q_담보제공비율_건물":
				return es01W03Mapper.selectList43(params);
			case "Q_도로명주소_시군구":
				return es01W03Mapper.selectList44(params);
			case "Q_도로명주소_시도":
				return es01W03Mapper.selectList45(params);
			case "Q_도로명주소목록":
				return es01W03Mapper.selectList46(params);
			case "Q_링크사이트":
				return es01W03Mapper.selectList47(params);
			case "Q_문서관리_관련문서":
				return es01W03Mapper.selectList48(params);
			case "Q_문서관리_사진":
				return es01W03Mapper.selectList49(params);
			case "Q_배당표_배당금_계산D":
				return es01W03Mapper.selectList50(params);
			case "Q_배당표_배당금_계산D_Temp":
				return es01W03Mapper.selectList51(params);
			case "Q_배당표_배당금_계산M":
				return es01W03Mapper.selectList52(params);
			case "Q_배당표_배당금_배당건수":
				return es01W03Mapper.selectList53(params);
			case "Q_배당표_배당금건물_계산D":
				return es01W03Mapper.selectList54(params);
			case "Q_배당표_배당금건물_계산D_Temp":
				return es01W03Mapper.selectList55(params);
			case "Q_배당표_배당금건물_계산M":
				return es01W03Mapper.selectList56(params);
			case "Q_배당표_배당금건물_배당건수":
				return es01W03Mapper.selectList57(params);
			case "Q_배당표_상가임차보증금_계산":
				return es01W03Mapper.selectList58(params);
			case "Q_배당표_주택임차보증금_계산":
				return es01W03Mapper.selectList59(params);
			case "Q_배당표M":
				return es01W03Mapper.selectList60(params);
			case "Q_보정표":
				return es01W03Mapper.selectList61(params);
			case "Q_본건인근지역의가격수준":
				return es01W03Mapper.selectList62(params);
			case "Q_부서목록":
				return es01W03Mapper.selectList63(params);
			case "Q_비준가격":
				return es01W03Mapper.selectList64(params);
			case "Q_비준가격산정":
				return es01W03Mapper.selectList65(params);
			case "Q_비준가격집계표":
				return es01W03Mapper.selectList66(params);
			case "Q_사례번호갱신":
				return es01W03Mapper.selectList67WithCondition(params);
			case "Q_사업부문":
				return es01W03Mapper.selectList68(params);
			case "Q_영업감정요청자료":
				return es01W03Mapper.selectList69WithCondition(params);
			case "Q_일단지구분갱신":
				return es01W03Mapper.selectList70WithCondition(params);
			case "Q_입력표":
				return es01W03Mapper.selectList71(params);
			case "Q_입력표_건물":
				return es01W03Mapper.selectList72(params);
			case "Q_주소목록":
				return es01W03Mapper.selectList73(params);
			case "Q_코드_가임대보증금적용범위":
				return es01W03Mapper.selectList74(params);
			case "Q_코드_가임대보증금적용범위_상가":
				return es01W03Mapper.selectList75(params);
			case "Q_코드_각구의일련번호":
				return es01W03Mapper.selectList76(params);
			case "Q_코드_경과년도":
				return es01W03Mapper.selectList77(params);
			case "Q_코드_고저":
				return es01W03Mapper.selectList78(params);
			case "Q_코드_공유지분":
				return es01W03Mapper.selectList79(params);
			case "Q_코드_관공서접근성":
				return es01W03Mapper.selectList80(params);
			case "Q_코드_관리상태":
				return es01W03Mapper.selectList81(params);
			case "Q_코드_구조":
				return es01W03Mapper.selectList82(params);
			case "Q_코드_권리의내용":
				return es01W03Mapper.selectList83(params);
			case "Q_코드_기타접근성":
				return es01W03Mapper.selectList84(params);
			case "Q_코드_기타제한구역":
				return es01W03Mapper.selectList85(params);
			case "Q_코드_기타환경조건":
				return es01W03Mapper.selectList86(params);
			case "Q_코드_담보물의입지조건":
				return es01W03Mapper.selectList87(params);
			case "Q_코드_담보종류":
				return es01W03Mapper.selectList88(params);
			case "Q_코드_대지면적":
				return es01W03Mapper.selectList89(params);
			case "Q_코드_도로거리":
				return es01W03Mapper.selectList90(params);
			case "Q_코드_도로조건":
				return es01W03Mapper.selectList91(params);
			case "Q_코드_도시계획":
				return es01W03Mapper.selectList92(params);
			case "Q_코드_면적":
				return es01W03Mapper.selectList93(params);
			case "Q_코드_방위":
				return es01W03Mapper.selectList94(params);
			case "Q_코드_법정지상권":
				return es01W03Mapper.selectList95(params);
			case "Q_코드_법정지상권_존속기간":
				return es01W03Mapper.selectList96(params);
			case "Q_코드_사진구분":
				return es01W03Mapper.selectList97(params);
			case "Q_코드_상가_가임대보증금":
				return es01W03Mapper.selectList98(params);
			case "Q_코드_순위":
				return es01W03Mapper.selectList99(params);
			case "Q_코드_용도지구":
				return es01W03Mapper.selectList100(params);
			case "Q_코드_용도지역":
				return es01W03Mapper.selectList101(params);
			case "Q_코드_이용현황":
				return es01W03Mapper.selectList102(params);
			case "Q_코드_인근지역":
				return es01W03Mapper.selectList103(params);
			case "Q_코드_일단지구분":
				return es01W03Mapper.selectList104(params);
			case "Q_코드_저촉률":
				return es01W03Mapper.selectList105(params);
			case "Q_코드_점유자형태":
				return es01W03Mapper.selectList106(params);
			case "Q_코드_접한도로의폭":
				return es01W03Mapper.selectList107(params);
			case "Q_코드_주변상권":
				return es01W03Mapper.selectList108(params);
			case "Q_코드_주용도":
				return es01W03Mapper.selectList109(params);
			case "Q_코드_주택_가임대보증금":
				return es01W03Mapper.selectList110(params);
			case "Q_코드_중심지역접근성":
				return es01W03Mapper.selectList111(params);
			case "Q_코드_증개축횟수":
				return es01W03Mapper.selectList112(params);
			case "Q_코드_지목":
				return es01W03Mapper.selectList113(params);
			case "Q_코드_지붕":
				return es01W03Mapper.selectList114(params);
			case "Q_코드_철도":
				return es01W03Mapper.selectList115(params);
			case "Q_코드_최고채권액":
				return es01W03Mapper.selectList116(params);
			case "Q_코드_토지의면적":
				return es01W03Mapper.selectList117(params);
			case "Q_코드_토지의종류":
				return es01W03Mapper.selectList118(params);
			case "Q_코드_토지의형상":
				return es01W03Mapper.selectList119(params);
			case "Q_코드_폐기물":
				return es01W03Mapper.selectList120(params);
			case "Q_코드_표준단가_구조":
				return es01W03Mapper.selectList121(params);
			case "Q_코드_표준단가_급수":
				return es01W03Mapper.selectList122(params);
			case "Q_코드_표준단가_용도":
				return es01W03Mapper.selectList123(params);
			case "Q_코드_표준지구분":
				return es01W03Mapper.selectList124(params);
			case "Q_코드_형상":
				return es01W03Mapper.selectList125(params);
			case "Q_탁상감정":
				return es01W03Mapper.selectList126(params);
			case "Q_탁상감정EMail주소조회":
				return es01W03Mapper.selectList127(params);
			case "Q_탁상감정진행상황":
				return es01W03Mapper.selectList128(params);
			case "Q_탁상감정파일명":
				return es01W03Mapper.selectList129(params);
			case "Q_토지의표시":
				return es01W03Mapper.selectList130(params);
			case "Q_표준지갱신":
				return es01W03Mapper.selectList131WithCondition(params);
			case "Q_표준지공시지가선정":
				return es01W03Mapper.selectList132(params);
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
				es01W03Mapper.save1(params);
				break;
			case "저장_41_응찰_기일내역":
				es01W03Mapper.save2(params, saveRequest.getListMap());
				break;
			case "저장_42_전감정개요":
				es01W03Mapper.save3(params);
				break;
			case "저장_43_응찰_선순위권리내역":
				es01W03Mapper.save4(params, saveRequest.getListMap());
				break;
			case "저장_44_응찰_선순위부담금액":
				es01W03Mapper.save5(params, saveRequest.getListMap());
				break;
			case "저장_건물단가":
				es01W03Mapper.save6(params, saveRequest.getListMap());
				break;
			case "저장_건물의표시":
				es01W03Mapper.save7(params, saveRequest.getListMap());
				break;
			case "저장_결재자현황_영업":
				es01W03Mapper.save8(params);
				break;
			case "저장_결재자현황_영업_Clear":
				es01W03Mapper.save9(params);
				break;
			case "저장_규제의표시":
				es01W03Mapper.save10(params);
				break;
			case "저장_기준가격":
				es01W03Mapper.save11(params, saveRequest.getListMap());
				break;
			case "저장_기타요인":
				es01W03Mapper.save12(params, saveRequest.getListMap());
				break;
			case "저장_담보":
				es01W03Mapper.save13(params);
				break;
			case "저장_담보_건물":
				es01W03Mapper.save14(params);
				break;
			case "저장_담보마스타_담보여력등":
				es01W03Mapper.save15(params);
				break;
			case "저장_담보마스터":
				es01W03Mapper.save16(params);
				break;
			case "저장_담보제공비율":
				es01W03Mapper.save17(params);
				break;
			case "저장_담보제공비율_건물":
				es01W03Mapper.save18(params);
				break;
			case "저장_문서관리":
				es01W03Mapper.save19(params, saveRequest.getListMap());
				break;
			case "저장_문서관리_문서":
				es01W03Mapper.save20(params, saveRequest.getListMap());
				break;
			case "저장_배당금_권리자_CLEAR":
				es01W03Mapper.save21(params);
				break;
			case "저장_배당금_배당금":
				es01W03Mapper.save22(params, saveRequest);
				break;
			case "저장_배당금_배당금건물":
				es01W03Mapper.save23(params, saveRequest.getListMap());
				break;
			case "저장_배당금_배당표M":
				es01W03Mapper.save24(params);
				break;
			case "저장_배당금_주택임차보증금":
				es01W03Mapper.save25(params, saveRequest.getListMap());
				break;
			case "저장_보정표":
				es01W03Mapper.save26(params);
				break;
			case "저장_본건인근지역의가격수준":
				es01W03Mapper.save27(params);
				break;
			case "저장_본건토지":
				es01W03Mapper.save28(params);
				break;
			case "저장_비준가격":
				es01W03Mapper.save29(params, saveRequest.getListMap());
				break;
			case "저장_비준가격산정사례":
				es01W03Mapper.save30(params, saveRequest.getListMap());
				break;
			case "저장_상가임차보증금":
				es01W03Mapper.save31(params, saveRequest.getListMap());
				break;
			case "저장_입력표":
				es01W03Mapper.save32(params);
				break;
			case "저장_입력표_건물":
				es01W03Mapper.save33(params);
				break;
			case "저장_탁상감정":
				es01W03Mapper.save34(params);
				break;
			case "저장_탁상감정_담보감정M변경":
				es01W03Mapper.save35(params);
				break;
			case "저장_토지의표시":
				es01W03Mapper.save36(params, saveRequest.getListMap());
				break;
			case "저장_평가액":
				es01W03Mapper.save37(params);
				break;
			case "저장_표준지공시지가":
				es01W03Mapper.save38(params, saveRequest.getListMap());
				break;
			default:
				throw new IllegalArgumentException("없는 쿼리 입니다.");
		}
	}
}
