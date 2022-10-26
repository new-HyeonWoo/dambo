package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.Es01W02_3Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs01W02_3Service")
@RequiredArgsConstructor
public class Es01W02_3ServiceImpl implements Es01Service {
	private final Es01W02_3Mapper es01W02_3Mapper;

	@Override
	public CollateralKindType type() {
		return CollateralKindType.COLLECTION_STORE;
	}

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {
			case "PRT_00_담보마스타":
				return es01W02_3Mapper.selectList1(params);
			case "PRT_01_입력표_집합건물":
				return es01W02_3Mapper.selectList2(params);
			case "PRT_03_입력표_규제사항개관":
				return es01W02_3Mapper.selectList3(params);
			case "Q_00_가격동향":
				return es01W02_3Mapper.selectList4(params);
			case "Q_00_가임대보증금적용지역":
				return es01W02_3Mapper.selectList5(params);
			case "Q_00_건축물의경과년도":
				return es01W02_3Mapper.selectList6(params);
			case "Q_00_건축물의경과년도_코드찾기":
				return es01W02_3Mapper.selectList7(params);
			case "Q_00_결재진행현황":
				return es01W02_3Mapper.selectList8(params);
			case "Q_00_공공시설접근성":
				return es01W02_3Mapper.selectList9(params);
			case "Q_00_구조":
				return es01W02_3Mapper.selectList10(params);
			case "Q_00_내용년수":
				return es01W02_3Mapper.selectList11(params);
			case "Q_00_담보종류":
				return es01W02_3Mapper.selectList12(params);
			case "Q_00_도로계통성":
				return es01W02_3Mapper.selectList13(params);
			case "Q_00_도로조건":
				return es01W02_3Mapper.selectList14(params);
			case "Q_00_사진구분":
				return es01W02_3Mapper.selectList15(params);
			case "Q_00_상가의접근성":
				return es01W02_3Mapper.selectList16(params);
			case "Q_00_상가의층별위치":
				return es01W02_3Mapper.selectList17(params);
			case "Q_00_상가의층별위치_코드찾기":
				return es01W02_3Mapper.selectList18(params);
			case "Q_00_상권의발달정도":
				return es01W02_3Mapper.selectList19(params);
			case "Q_00_상업시설접근성":
				return es01W02_3Mapper.selectList20(params);
			case "Q_00_용도지역":
				return es01W02_3Mapper.selectList21(params);
			case "Q_00_위치별":
				return es01W02_3Mapper.selectList22(params);
			case "Q_00_인테리어비용":
				return es01W02_3Mapper.selectList23(params);
			case "Q_00_일련번호":
				return es01W02_3Mapper.selectList24(params);
			case "Q_00_입지조건":
				return es01W02_3Mapper.selectList25(params);
			case "Q_00_전유부분의면적":
				return es01W02_3Mapper.selectList26(params);
			case "Q_00_전유부분의면적_코드찾기":
				return es01W02_3Mapper.selectList27(params);
			case "Q_00_전유부분의위치":
				return es01W02_3Mapper.selectList28(params);
			case "Q_00_전유부분의위치_총층수만":
				return es01W02_3Mapper.selectList29(params);
			case "Q_00_전유부분의위치_총층수중해당층":
				return es01W02_3Mapper.selectList30(params);
			case "Q_00_점유자의형태":
				return es01W02_3Mapper.selectList31(params);
			case "Q_00_접근조건":
				return es01W02_3Mapper.selectList32(params);
			case "Q_00_접한도로의폭":
				return es01W02_3Mapper.selectList33(params);
			case "Q_00_지목":
				return es01W02_3Mapper.selectList34(params);
			case "Q_00_지붕":
				return es01W02_3Mapper.selectList35(params);
			case "Q_00_집합건물종류":
				return es01W02_3Mapper.selectList36(params);
			case "Q_00_층별비교":
				return es01W02_3Mapper.selectList37(params);
			case "Q_01_부서목록":
				return es01W02_3Mapper.selectList38(params);
			case "Q_09_감정순번생성":
				return es01W02_3Mapper.selectList39(params);
			case "Q_09_감정순번생성_20100618":
				return es01W02_3Mapper.selectList40(params);
			case "Q_10_입력표_담보마스타":
				return es01W02_3Mapper.selectList41(params);
			case "Q_11_입력표_집합건물":
				return es01W02_3Mapper.selectList42(params);
			case "Q_12_입력표_규제의표시":
				return es01W02_3Mapper.selectList43(params);
			case "Q_20_입력표_낙찰가율보정표":
				return es01W02_3Mapper.selectList44(params);
			case "Q_40_응찰입력표_마스타":
				return es01W02_3Mapper.selectList45(params);
			case "Q_41_응찰입력표_경매기일내역":
				return es01W02_3Mapper.selectList46(params);
			case "Q_42_응찰입력표_전감정개요":
				return es01W02_3Mapper.selectList47(params);
			case "Q_43_응찰입력표_선순위권리내역":
				return es01W02_3Mapper.selectList48(params);
			case "Q_44_응찰입력표_선순위부담금액":
				return es01W02_3Mapper.selectList49(params);
			case "Q_49_DUAL_등록세":
				return es01W02_3Mapper.selectList50(params);
			case "Q_49_DUAL_종합부동산세":
				return es01W02_3Mapper.selectList51(params);
			case "Q_49_DUAL_처분비용":
				return es01W02_3Mapper.selectList52(params);
			case "Q_49_DUAL_취득세":
				return es01W02_3Mapper.selectList53(params);
			case "Q_99_평가구분":
				return es01W02_3Mapper.selectList54(params);
			case "Q_DUAL_경과일수구하기":
				return es01W02_3Mapper.selectList55(params);
			case "Q_DUAL_비준_사례구분":
				return es01W02_3Mapper.selectList56(params);
			case "Q_DUAL_수익_사례구분":
				return es01W02_3Mapper.selectList57(params);
			case "Q_DUAL_여부":
				return es01W02_3Mapper.selectList58(params);
			case "Q_DUAL_유무":
				return es01W02_3Mapper.selectList59(params);
			case "Q_DUAL_이용상황":
				return es01W02_3Mapper.selectList60(params);
			case "Q_POPUP_거래처목록":
				return es01W02_3Mapper.selectList61(params);
			case "Q_POPUP_주소목록":
				return es01W02_3Mapper.selectList62(params);
			case "Q_감정가_00_본건":
				return es01W02_3Mapper.selectList63(params);
			case "Q_감정가_00_본건_입지특성":
				return es01W02_3Mapper.selectList64(params);
			case "Q_감정가_01_가격사례":
				return es01W02_3Mapper.selectList65(params);
			case "Q_감정가_02_경매사례":
				return es01W02_3Mapper.selectList66(params);
			case "Q_감정가_02_임대사례":
				return es01W02_3Mapper.selectList67(params);
			case "Q_감정가_03_비준가격":
				return es01W02_3Mapper.selectList68(params);
			case "Q_감정가_03_비준가격_집계표":
				return es01W02_3Mapper.selectList69(params);
			case "Q_감정가_04_수익가격":
				return es01W02_3Mapper.selectList70(params);
			case "Q_감정가_04_수익가격_집계표":
				return es01W02_3Mapper.selectList71(params);
			case "Q_감정가_09_감정평가":
				return es01W02_3Mapper.selectList72(params);
			case "Q_공통보고서_당사설정액":
				return es01W02_3Mapper.selectList73(params);
			case "Q_공통보고서_당사설정액JB":
				return es01W02_3Mapper.selectList74(params);
			case "Q_공통보고서_보정표":
				return es01W02_3Mapper.selectList75(params);
			case "Q_공통보고서_보정표JB":
				return es01W02_3Mapper.selectList76(params);
			case "Q_공통보고서_초과부족설정액":
				return es01W02_3Mapper.selectList77(params);
			case "Q_공통보고서_초과부족설정액JB":
				return es01W02_3Mapper.selectList78(params);
			case "Q_공통보고서_초과부족설정액JB_20081219":
				return es01W02_3Mapper.selectList79(params);
			case "Q_공통보고서_초과부족설정액_20081219":
				return es01W02_3Mapper.selectList80(params);
			case "Q_공통보고서_최고최저":
				return es01W02_3Mapper.selectList81(params);
			case "Q_공통보고서_최고최저JB":
				return es01W02_3Mapper.selectList82(params);
			case "Q_공통보고서_트리":
				return es01W02_3Mapper.selectList83(params);
			case "Q_관리부서확인":
				return es01W02_3Mapper.selectList84(params);
			case "Q_담당자메일조회":
				return es01W02_3Mapper.selectList85(params);
			case "Q_담보마스터":
				return es01W02_3Mapper.selectList86(params);
			case "Q_도로명주소_시군구":
				return es01W02_3Mapper.selectList87(params);
			case "Q_도로명주소_시도":
				return es01W02_3Mapper.selectList88(params);
			case "Q_도로명주소목록":
				return es01W02_3Mapper.selectList89(params);
			case "Q_링크사이트":
				return es01W02_3Mapper.selectList90(params);
			case "Q_문서관리_관련문서":
				return es01W02_3Mapper.selectList91(params);
			case "Q_문서관리_사진":
				return es01W02_3Mapper.selectList92(params);
			case "Q_배당표M":
				return es01W02_3Mapper.selectList93(params);
			case "Q_배당표_배당금_계산":
				return es01W02_3Mapper.selectList94(params);
			case "Q_배당표_상가임차보증금_계산":
				return es01W02_3Mapper.selectList95(params);
			case "Q_배당표_주택임차보증금_계산":
				return es01W02_3Mapper.selectList96(params);
			case "Q_사업부문":
				return es01W02_3Mapper.selectList97(params);
			case "Q_영업감정요청자료":
				return es01W02_3Mapper.selectList98WithCondition(params);
			case "Q_코드_가임대보증금적용범위_상가":
				return es01W02_3Mapper.selectList99(params);
			case "Q_코드_가임대보증금적용지역":
				return es01W02_3Mapper.selectList100(params);
			case "Q_코드_각구의일련번호":
				return es01W02_3Mapper.selectList101(params);
			case "Q_코드_권리의내용":
				return es01W02_3Mapper.selectList102(params);
			case "Q_코드_순위":
				return es01W02_3Mapper.selectList103(params);
			case "Q_코드_최고채권액":
				return es01W02_3Mapper.selectList104(params);
			case "Q_탁상감정":
				return es01W02_3Mapper.selectList105(params);
			case "Q_탁상감정EMail주소조회":
				return es01W02_3Mapper.selectList106(params);
			case "Q_탁상감정진행상황":
				return es01W02_3Mapper.selectList107(params);
			case "Q_탁상감정파일명":
				return es01W02_3Mapper.selectList108(params);
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}

	@Transactional
	@Override
	public void saveQuery(SaveRequest saveRequest, String name) {
		HashMap<String, Object> params = saveRequest.getParams();

		switch (name) {
			case "저장_00_담보마스터":
				es01W02_3Mapper.save109(params);
				break;
			case "저장_01_규제의표시":
				es01W02_3Mapper.save110(params);
				break;
			case "저장_02_입력표":
				es01W02_3Mapper.save111(params);
				break;
			case "저장_10_감정가_본건":
				es01W02_3Mapper.save112(params, saveRequest.getListMap());
				break;
			case "저장_10_감정가_본건_입지특성":
				es01W02_3Mapper.save113(params);
				break;
			case "저장_11_감정가_가격사례":
				es01W02_3Mapper.save114(params, saveRequest.getListMap());
				break;
			case "저장_12_감정가_경매사례":
				es01W02_3Mapper.save115(params, saveRequest.getListMap());
				break;
			case "저장_14_감정가_임대사례":
				es01W02_3Mapper.save116(params, saveRequest.getListMap());
				break;
			case "저장_17_감정가_비준가격":
				es01W02_3Mapper.save117(params, saveRequest.getListMap());
				break;
			case "저장_18_감정가_수익가격":
				es01W02_3Mapper.save118(params, saveRequest.getListMap());
				break;
			case "저장_19_감정가_평가액산정":
				es01W02_3Mapper.save119(params);
				break;
			case "저장_20_낙찰가율보정표":
				es01W02_3Mapper.save120(params);
				break;
			case "저장_40_응찰마스타":
				es01W02_3Mapper.save121(params);
				break;
			case "저장_41_응찰_기일내역":
				es01W02_3Mapper.save122(params, saveRequest.getListMap());
				break;
			case "저장_42_응찰_전감정개요":
				es01W02_3Mapper.save123(params);
				break;
			case "저장_43_응찰_선순위권리내역":
				es01W02_3Mapper.save124(params, saveRequest.getListMap());
				break;
			case "저장_44_응찰_선순위부담내역":
				es01W02_3Mapper.save125(params, saveRequest.getListMap());
				break;
			case "저장_결재자현황_영업":
				es01W02_3Mapper.save126(params);
				break;
			case "저장_결재자현황_영업_Clear":
				es01W02_3Mapper.save127(params);
				break;
			case "저장_담보마스타_담보여력등":
				es01W02_3Mapper.save128(params);
				break;
			case "저장_문서관리":
				es01W02_3Mapper.save129(params, saveRequest.getListMap());
				break;
			case "저장_문서관리_문서":
				es01W02_3Mapper.save130(params, saveRequest.getListMap());
				break;
			case "저장_배당금_배당금":
				es01W02_3Mapper.save131(params, saveRequest);
				break;
			case "저장_배당금_배당표M":
				es01W02_3Mapper.save132(params);
				break;
			case "저장_배당금_주택임차보증금":
				es01W02_3Mapper.save133(params, saveRequest.getListMap());
				break;
			case "저장_상가임차보증금":
				es01W02_3Mapper.save134(params, saveRequest.getListMap());
				break;
			case "저장_탁상감정":
				es01W02_3Mapper.save135(params);
				break;
			case "저장_탁상감정_담보감정M변경":
				es01W02_3Mapper.save136(params);
				break;
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 쿼리입니다. (%s)", name));
		}
	}
}
