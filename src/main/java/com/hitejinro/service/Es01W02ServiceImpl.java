package com.hitejinro.service;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.mapper.Es01W02Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service("RenewEs01W02Service")
@RequiredArgsConstructor
public class Es01W02ServiceImpl implements Es01Service {
	private final Es01W02Mapper es01W02Mapper;

	@Override
	public CollateralKindType type() {
		return CollateralKindType.COLLECTION_APT_TYPE;
	}

	@Transactional(readOnly = true)
	@Override
	public List<HashMap<String, Object>> findQuery(HashMap<String, Object> params, String name) {
		switch (name) {
			case "PRT_00_담보마스타":
				return es01W02Mapper.selectList1(params);
			case "PRT_01_입력표_집합건물":
				return es01W02Mapper.selectList2(params);
			case "PRT_03_입력표_규제사항개관":
				return es01W02Mapper.selectList3(params);
			case "Q_00_인테리어비용":
				return es01W02Mapper.selectList4(params);
			case "Q_40_응찰입력표_마스타":
				return es01W02Mapper.selectList5(params);
			case "Q_41_응찰입력표_경매기일내역":
				return es01W02Mapper.selectList6(params);
			case "Q_42_응찰입력표_전감정개요":
				return es01W02Mapper.selectList7(params);
			case "Q_43_응찰입력표_선순위권리내역":
				return es01W02Mapper.selectList8(params);
			case "Q_44_응찰입력표_선순위부담금액":
				return es01W02Mapper.selectList9(params);
			case "Q_49_DUAL_등록세":
				return es01W02Mapper.selectList10(params);
			case "Q_49_DUAL_종합부동산세":
				return es01W02Mapper.selectList11(params);
			case "Q_49_DUAL_처분비용":
				return es01W02Mapper.selectList12(params);
			case "Q_49_DUAL_취득세":
				return es01W02Mapper.selectList13(params);
			case "Q_99_평가구분":
				return es01W02Mapper.selectList14(params);
			case "Q_가격사례_D":
				return es01W02Mapper.selectList15(params);
			case "Q_가격사례_M":
				return es01W02Mapper.selectList16(params);
			case "Q_감정가_감정M":
				return es01W02Mapper.selectList17(params);
			case "Q_감정가_경매사례":
				return es01W02Mapper.selectList18(params);
			case "Q_감정가_본건":
				return es01W02Mapper.selectList19(params);
			case "Q_감정순번":
				return es01W02Mapper.selectList20(params);
			case "Q_감정순번_20100618":
				return es01W02Mapper.selectList21(params);
			case "Q_거래처목록":
				return es01W02Mapper.selectList22(params);
			case "Q_건축물의경과년도":
				return es01W02Mapper.selectList23(params);
			case "Q_결재진행현황":
				return es01W02Mapper.selectList24(params);
			case "Q_공통보고서_당사설정액":
				return es01W02Mapper.selectList25(params);
			case "Q_공통보고서_당사설정액JB":
				return es01W02Mapper.selectList26(params);
			case "Q_공통보고서_보정표":
				return es01W02Mapper.selectList27(params);
			case "Q_공통보고서_보정표JB":
				return es01W02Mapper.selectList28(params);
			case "Q_공통보고서_초과부족설정액":
				return es01W02Mapper.selectList29(params);
			case "Q_공통보고서_초과부족설정액JB":
				return es01W02Mapper.selectList30(params);
			case "Q_공통보고서_초과부족설정액JB_20081219":
				return es01W02Mapper.selectList31(params);
			case "Q_공통보고서_초과부족설정액_20081219":
				return es01W02Mapper.selectList32(params);
			case "Q_공통보고서_최고최저":
				return es01W02Mapper.selectList33(params);
			case "Q_공통보고서_최고최저JB":
				return es01W02Mapper.selectList34(params);
			case "Q_공통보고서_트리":
				return es01W02Mapper.selectList35(params);
			case "Q_관리부서확인":
				return es01W02Mapper.selectList36(params);
			case "Q_구조":
				return es01W02Mapper.selectList37(params);
			case "Q_규제의표시":
				return es01W02Mapper.selectList38(params);
			case "Q_낙찰가율보정표":
				return es01W02Mapper.selectList39(params);
			case "Q_담당자메일조회":
				return es01W02Mapper.selectList40(params);
			case "Q_담보마스타":
				return es01W02Mapper.selectList41(params);
			case "Q_담보종류":
				return es01W02Mapper.selectList42(params);
			case "Q_도로명주소_시군구":
				return es01W02Mapper.selectList43(params);
			case "Q_도로명주소_시도":
				return es01W02Mapper.selectList44(params);
			case "Q_도로명주소목록":
				return es01W02Mapper.selectList45(params);
			case "Q_링크사이트":
				return es01W02Mapper.selectList46(params);
			case "Q_문서관리_관련문서":
				return es01W02Mapper.selectList47(params);
			case "Q_문서관리_사진":
				return es01W02Mapper.selectList48(params);
			case "Q_배당표M":
				return es01W02Mapper.selectList49(params);
			case "Q_배당표_배당금_계산":
				return es01W02Mapper.selectList50(params);
			case "Q_배당표_주택임차보증금_계산":
				return es01W02Mapper.selectList51(params);
			case "Q_부서목록":
				return es01W02Mapper.selectList52(params);
			case "Q_사업부문":
				return es01W02Mapper.selectList53(params);
			case "Q_사진구분":
				return es01W02Mapper.selectList54(params);
			case "Q_아파트단지규모":
				return es01W02Mapper.selectList55(params);
			case "Q_영업감정요청자료":
				return es01W02Mapper.selectList56WithCondition(params);
			case "Q_입력표":
				return es01W02Mapper.selectList57(params);
			case "Q_전유부분의면적":
				return es01W02Mapper.selectList58(params);
			case "Q_전유부분의위치":
				return es01W02Mapper.selectList59(params);
			case "Q_점유자의형태":
				return es01W02Mapper.selectList60(params);
			case "Q_주소목록":
				return es01W02Mapper.selectList61(params);
			case "Q_지목":
				return es01W02Mapper.selectList62(params);
			case "Q_지붕":
				return es01W02Mapper.selectList63(params);
			case "Q_집합건물종류":
				return es01W02Mapper.selectList64(params);
			case "Q_코드_가임대보증금적용지역":
				return es01W02Mapper.selectList65(params);
			case "Q_코드_각구의일련번호":
				return es01W02Mapper.selectList66(params);
			case "Q_코드_권리의내용":
				return es01W02Mapper.selectList67(params);
			case "Q_코드_순위":
				return es01W02Mapper.selectList68(params);
			case "Q_코드_최고채권액":
				return es01W02Mapper.selectList69(params);
			case "Q_크로스":
				return es01W02Mapper.selectList70(params);
			case "Q_탁상감정":
				return es01W02Mapper.selectList71(params);
			case "Q_탁상감정EMail주소조회":
				return es01W02Mapper.selectList72(params);
			case "Q_탁상감정진행상황":
				return es01W02Mapper.selectList73(params);
			case "Q_탁상감정파일명":
				return es01W02Mapper.selectList74(params);
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
				es01W02Mapper.save75(params);
				break;
			case "저장_41_응찰_기일내역":
				es01W02Mapper.save76(params, saveRequest.getListMap());
				break;
			case "저장_42_응찰_전감정개요":
				es01W02Mapper.save77(params);
				break;
			case "저장_43_응찰_선순위권리내역":
				es01W02Mapper.save78(params, saveRequest.getListMap());
				break;
			case "저장_44_응찰_선순위부담금액":
				es01W02Mapper.save79(params, saveRequest.getListMap());
				break;
			case "저장_감정가_가격사례D":
				es01W02Mapper.save80(params, saveRequest.getListMap());
				break;
			case "저장_감정가_가격사례M":
				es01W02Mapper.save81(params, saveRequest.getListMap());
				break;
			case "저장_감정가_감정_M":
				es01W02Mapper.save82(params);
				break;
			case "저장_감정가_경매사례":
				es01W02Mapper.save83(params, saveRequest.getListMap());
				break;
			case "저장_감정가_본건":
				es01W02Mapper.save84(params, saveRequest.getListMap());
				break;
			case "저장_결재자현황_영업":
				es01W02Mapper.save85(params);
				break;
			case "저장_결재자현황_영업_Clear":
				es01W02Mapper.save86(params);
				break;
			case "저장_규제의표시":
				es01W02Mapper.save87(params);
				break;
			case "저장_낙찰가율보정표":
				es01W02Mapper.save88(params);
				break;
			case "저장_담보마스타_담보여력등":
				es01W02Mapper.save89(params);
				break;
			case "저장_담보마스터":
				es01W02Mapper.save90(params);
				break;
			case "저장_문서관리":
				es01W02Mapper.save91(params, saveRequest.getListMap());
				break;
			case "저장_문서관리_문서":
				es01W02Mapper.save92(params, saveRequest.getListMap());
				break;
			case "저장_배당금_배당금":
				es01W02Mapper.save93(params, saveRequest);
				break;
			case "저장_배당금_배당표M":
				es01W02Mapper.save94(params);
				break;
			case "저장_배당금_주택임차보증금":
				es01W02Mapper.save95(params, saveRequest.getListMap());
				break;
			case "저장_입력표":
				es01W02Mapper.save96(params);
				break;
			case "저장_탁상감정":
				es01W02Mapper.save97(params);
				break;
			case "저장_탁상감정_담보감정M변경":
				es01W02Mapper.save98(params);
				break;
			default:
				throw new IllegalArgumentException(String.format("존재하지 않은 타입입니다. (%s)", name));
		}
	}
}
