package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.Es01W04Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

/**
 * 토지
 */
@Service("RenewEs01W04Service")
@RequiredArgsConstructor
public class Es01W04ServiceImpl implements Es01Service {
	private final Es01W04Mapper es01W04Mapper;

	@Override
	public CollateralKindType type() {
		return CollateralKindType.LAND;
	}

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {

			case "Q_40_응찰입력표_마스타":
				return es01W04Mapper.selectList1(params);
			case "Q_41_응찰입력표_경매기일내역":
				return es01W04Mapper.selectList2(params);
			case "Q_42_응찰입력표_전감정의개요":
				return es01W04Mapper.selectList3(params);
			case "Q_43_응찰입력표_선순위권리내역":
				return es01W04Mapper.selectList4(params);
			case "Q_44_응찰입력표_선순위부담금액":
				return es01W04Mapper.selectList5(params);
			case "Q_49_DUAL_등록세":
				return es01W04Mapper.selectList6(params);
			case "Q_49_DUAL_종합부동산세":
				return es01W04Mapper.selectList7(params);
			case "Q_49_DUAL_처분비용":
				return es01W04Mapper.selectList8(params);
			case "Q_49_DUAL_취득세":
				return es01W04Mapper.selectList9(params);
			case "Q_99_평가구분":
				return es01W04Mapper.selectList10(params);
			case "Q_감정순번":
				return es01W04Mapper.selectList11(params);
			case "Q_감정순번_20100618":
				return es01W04Mapper.selectList12(params);
			case "Q_거래처목록":
				return es01W04Mapper.selectList13(params);
			case "Q_경과일자":
				return es01W04Mapper.selectList14(params);
			case "Q_공통보고서_당사설정액":
				return es01W04Mapper.selectList15(params);
			case "Q_공통보고서_당사설정액JB":
				return es01W04Mapper.selectList16(params);
			case "Q_공통보고서_당사설정액JB_OLD":
				return es01W04Mapper.selectList17(params);
			case "Q_공통보고서_당사설정액_OLD":
				return es01W04Mapper.selectList18(params);
			case "Q_공통보고서_보정표":
				return es01W04Mapper.selectList19(params);
			case "Q_공통보고서_보정표JB":
				return es01W04Mapper.selectList20(params);
			case "Q_공통보고서_예상1차입찰가":
				return es01W04Mapper.selectList21(params);
			case "Q_공통보고서_초과부족설정액":
				return es01W04Mapper.selectList22(params);
			case "Q_공통보고서_초과부족설정액JB":
				return es01W04Mapper.selectList23(params);
			case "Q_공통보고서_초과부족설정액JB_20081219":
				return es01W04Mapper.selectList24(params);
			case "Q_공통보고서_초과부족설정액_20081219":
				return es01W04Mapper.selectList25(params);
			case "Q_공통보고서_최고최저":
				return es01W04Mapper.selectList26(params);
			case "Q_공통보고서_최고최저JB":
				return es01W04Mapper.selectList27(params);
			case "Q_공통보고서_트리":
				return es01W04Mapper.selectList28(params);
			case "Q_관리부서확인":
				return es01W04Mapper.selectList29(params);
			case "Q_규제의표시":
				return es01W04Mapper.selectList30(params);
			case "Q_기준가격":
				return es01W04Mapper.selectList31(params);
			case "Q_기준가격집계표":
				return es01W04Mapper.selectList32(params);
			case "Q_기타요인":
				return es01W04Mapper.selectList33(params);
			case "Q_담당자메일조회":
				return es01W04Mapper.selectList34(params);
			case "Q_담보마스타":
				return es01W04Mapper.selectList35(params);
			case "Q_담보제공비율":
				return es01W04Mapper.selectList36(params);
			case "Q_도로명주소_시군구":
				return es01W04Mapper.selectList37(params);
			case "Q_도로명주소_시도":
				return es01W04Mapper.selectList38(params);
			case "Q_도로명주소목록":
				return es01W04Mapper.selectList39(params);
			case "Q_링크사이트":
				return es01W04Mapper.selectList40(params);
			case "Q_문서관리_관련문서":
				return es01W04Mapper.selectList41(params);
			case "Q_문서관리_사진":
				return es01W04Mapper.selectList42(params);
			case "Q_배당표M":
				return es01W04Mapper.selectList43(params);
			case "Q_배당표_배당금_계산D":
				return es01W04Mapper.selectList44(params);
			case "Q_배당표_배당금_계산D_Temp":
				return es01W04Mapper.selectList45(params);
			case "Q_배당표_배당금_계산M":
				return es01W04Mapper.selectList46(params);
			case "Q_배당표_배당금_배당건수":
				return es01W04Mapper.selectList47(params);
			case "Q_배당표_배당금건물_계산M":
				return es01W04Mapper.selectList48(params);
			case "Q_배당표_상가임차보증금_계산":
				return es01W04Mapper.selectList49(params);
			case "Q_배당표_주택임차보증금_계산":
				return es01W04Mapper.selectList50(params);
			case "Q_보정표":
				return es01W04Mapper.selectList51(params);
			case "Q_본건인근지역의가격수준":
				return es01W04Mapper.selectList52(params);
			case "Q_부서목록":
				return es01W04Mapper.selectList53(params);
			case "Q_비준가격":
				return es01W04Mapper.selectList54(params);
			case "Q_비준가격산정":
				return es01W04Mapper.selectList55(params);
			case "Q_비준가격집계표":
				return es01W04Mapper.selectList56(params);
			case "Q_사례번호갱신":
				return es01W04Mapper.selectList57(params);
			case "Q_사업부문":
				return es01W04Mapper.selectList58(params);
			case "Q_영업감정요청자료":
				return es01W04Mapper.selectList59(params);
			case "Q_일단지구분갱신":
				return es01W04Mapper.selectList60(params);
			case "Q_입력표":
				return es01W04Mapper.selectList61(params);
			case "Q_주소목록":
				return es01W04Mapper.selectList62(params);
			case "Q_코드_가임대보증금적용범위":
				return es01W04Mapper.selectList63(params);
			case "Q_코드_가임대보증금적용범위_상가":
				return es01W04Mapper.selectList64(params);
			case "Q_코드_각구의일련번호":
				return es01W04Mapper.selectList65(params);
			case "Q_코드_개발가능성_경사도":
				return es01W04Mapper.selectList66(params);
			case "Q_코드_개발가능성_위치":
				return es01W04Mapper.selectList67(params);
			case "Q_코드_고저":
				return es01W04Mapper.selectList68(params);
			case "Q_코드_공유지분소유지현황":
				return es01W04Mapper.selectList69(params);
			case "Q_코드_관공서접근성":
				return es01W04Mapper.selectList70(params);
			case "Q_코드_권리의내용":
				return es01W04Mapper.selectList71(params);
			case "Q_코드_기타접근성":
				return es01W04Mapper.selectList72(params);
			case "Q_코드_기타제한구역":
				return es01W04Mapper.selectList73(params);
			case "Q_코드_저축률":
				return es01W04Mapper.selectList712(params);
			case "Q_코드_기타환경조건":
				return es01W04Mapper.selectList74(params);
			case "Q_코드_농지의현황":
				return es01W04Mapper.selectList75(params);
			case "Q_코드_담보물의입지조건":
				return es01W04Mapper.selectList76(params);
			case "Q_코드_담보종류":
				return es01W04Mapper.selectList77(params);
			case "Q_코드_도로거리":
				return es01W04Mapper.selectList78(params);
			case "Q_코드_도로조건":
				return es01W04Mapper.selectList79(params);
			case "Q_코드_도시계획":
				return es01W04Mapper.selectList80(params);
			case "Q_코드_면적":
				return es01W04Mapper.selectList81(params);
			case "Q_코드_방위":
				return es01W04Mapper.selectList82(params);
			case "Q_코드_법정지상권":
				return es01W04Mapper.selectList83(params);
			case "Q_코드_사진구분":
				return es01W04Mapper.selectList84(params);
			case "Q_코드_상가_가임대보증금":
				return es01W04Mapper.selectList85(params);
			case "Q_코드_순위":
				return es01W04Mapper.selectList86(params);
			case "Q_코드_용도지구":
				return es01W04Mapper.selectList87(params);
			case "Q_코드_용도지역":
				return es01W04Mapper.selectList88(params);
			case "Q_코드_이용현황":
				return es01W04Mapper.selectList89(params);
			case "Q_코드_인근지역":
				return es01W04Mapper.selectList90(params);
			case "Q_코드_일단지구분":
				return es01W04Mapper.selectList91(params);
			case "Q_코드_임야의현황":
				return es01W04Mapper.selectList92(params);
			case "Q_코드_저촉률":
				return es01W04Mapper.selectList93(params);
			case "Q_코드_접한도로의폭":
				return es01W04Mapper.selectList94(params);
			case "Q_코드_주택_가임대보증금":
				return es01W04Mapper.selectList95(params);
			case "Q_코드_중심지역접근성":
				return es01W04Mapper.selectList96(params);
			case "Q_코드_지목":
				return es01W04Mapper.selectList97(params);
			case "Q_코드_철도":
				return es01W04Mapper.selectList98(params);
			case "Q_코드_최고채권액":
				return es01W04Mapper.selectList99(params);
			case "Q_코드_토지의고저":
				return es01W04Mapper.selectList100(params);
			case "Q_코드_토지의종류":
				return es01W04Mapper.selectList101(params);
			case "Q_코드_토지의형상":
				return es01W04Mapper.selectList102(params);
			case "Q_코드_폐기물":
				return es01W04Mapper.selectList103(params);
			case "Q_코드_표준지구분":
				return es01W04Mapper.selectList104(params);
			case "Q_코드_형상":
				return es01W04Mapper.selectList105(params);
			case "Q_크로스":
				return es01W04Mapper.selectList106(params);
			case "Q_탁상감정":
				return es01W04Mapper.selectList107(params);
			case "Q_탁상감정EMail주소조회":
				return es01W04Mapper.selectList108(params);
			case "Q_탁상감정진행상황":
				return es01W04Mapper.selectList109(params);
			case "Q_탁상감정파일명":
				return es01W04Mapper.selectList110(params);
			case "Q_토지의표시":
				return es01W04Mapper.selectList111(params);
			case "Q_표준지갱신":
				return es01W04Mapper.selectList112(params);
			case "Q_표준지공시지가선정":
				return es01W04Mapper.selectList113(params);
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
				es01W04Mapper.save114(params);
				break;
			case "저장_41_응찰_기일내역":
				es01W04Mapper.save115(params, saveRequest.getListMap());
				break;
			case "저장_42_응찰_전감정개요":
				es01W04Mapper.save116(params);
				break;
			case "저장_43_응찰_선순위권리내역":
				es01W04Mapper.save117(params, saveRequest.getListMap());
				break;
			case "저장_44_응찰_선순위부담금액":
				es01W04Mapper.save118(params, saveRequest.getListMap());
				break;
			case "저장_결재자현황_영업":
				es01W04Mapper.save119(params);
				break;
			case "저장_결재자현황_영업_Clear":
				es01W04Mapper.save120(params);
				break;
			case "저장_규제의표시":
				es01W04Mapper.save121(params);
				break;
			case "저장_기준가격":
				es01W04Mapper.save122(params, saveRequest.getListMap());
				break;
			case "저장_기타요인":
				es01W04Mapper.save123(params, saveRequest.getListMap());
				break;
			case "저장_담보":
				es01W04Mapper.save124(params, saveRequest.getListMap());
				break;
			case "저장_담보마스타_담보여력등":
				es01W04Mapper.save125(params);
				break;
			case "저장_담보마스터":
				es01W04Mapper.save126(params);
				break;
			case "저장_담보제공비율":
				es01W04Mapper.save127(params, saveRequest.getListMap());
				break;
			case "저장_문서관리":
				es01W04Mapper.save128(params, saveRequest.getListMap());
				break;
			case "저장_문서관리_문서":
				es01W04Mapper.save129(params, saveRequest.getListMap());
				break;
			case "저장_배당금_권리자_CLEAR":
				es01W04Mapper.save130(params);
				break;
			case "저장_배당금_배당금":
				es01W04Mapper.save131(params, saveRequest.getListMap());
				break;
			case "저장_배당금_배당표M":
				es01W04Mapper.save132(params);
				break;
			case "저장_배당금_주택임차보증금":
				es01W04Mapper.save133(params, saveRequest.getListMap());
				break;
			case "저장_보정표":
				es01W04Mapper.save134(params);
				break;
			case "저장_본건인근지역의가격수준":
				es01W04Mapper.save135(params);
				break;
			case "저장_본건토지":
				es01W04Mapper.save136(params, saveRequest.getListMap());
				break;
			case "저장_비준가격":
				es01W04Mapper.save137(params, saveRequest.getListMap());
				break;
			case "저장_비준가격산정사례":
				es01W04Mapper.save138(params, saveRequest.getListMap());
				break;
			case "저장_상가임차보증금":
				es01W04Mapper.save139(params, saveRequest.getListMap());
				break;
			case "저장_입력표":
				es01W04Mapper.save140(params);
				break;
			case "저장_탁상감정":
				es01W04Mapper.save141(params);
				break;
			case "저장_탁상감정_담보감정M변경":
				es01W04Mapper.save142(params);
				break;
			case "저장_토지의표시":
				es01W04Mapper.save143(params, saveRequest.getListMap());
				break;
			case "저장_평가액":
				es01W04Mapper.save144(params, saveRequest.getListMap());
				break;
			case "저장_표준지공시지가":
				es01W04Mapper.save145(params, saveRequest.getListMap());
				break;
			default:
				throw new IllegalArgumentException("없는 쿼리 입니다.");
		}
	}
}
