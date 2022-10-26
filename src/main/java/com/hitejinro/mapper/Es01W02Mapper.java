package com.hitejinro.mapper;

import com.hitejinro.dto.request.SaveRequest;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * Es01 아파트
 */
@Mapper
public interface Es01W02Mapper {
    /** PRT_00_담보마스타 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** PRT_01_입력표_집합건물 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);

    /** PRT_03_입력표_규제사항개관 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** Q_00_인테리어비용 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** Q_40_응찰입력표_마스타 */
    List<HashMap<String, Object>> selectList5(HashMap<String, Object> params);

    /** Q_41_응찰입력표_경매기일내역 */
    List<HashMap<String, Object>> selectList6(HashMap<String, Object> params);

    /** Q_42_응찰입력표_전감정개요 */
    List<HashMap<String, Object>> selectList7(HashMap<String, Object> params);

    /** Q_43_응찰입력표_선순위권리내역 */
    List<HashMap<String, Object>> selectList8(HashMap<String, Object> params);

    /** Q_44_응찰입력표_선순위부담금액 */
    List<HashMap<String, Object>> selectList9(HashMap<String, Object> params);

    /** Q_49_DUAL_등록세 */
    List<HashMap<String, Object>> selectList10(HashMap<String, Object> params);

    /** Q_49_DUAL_종합부동산세 */
    List<HashMap<String, Object>> selectList11(HashMap<String, Object> params);

    /** Q_49_DUAL_처분비용 */
    List<HashMap<String, Object>> selectList12(HashMap<String, Object> params);

    /** Q_49_DUAL_취득세 */
    List<HashMap<String, Object>> selectList13(HashMap<String, Object> params);

    /** Q_99_평가구분 */
    List<HashMap<String, Object>> selectList14(HashMap<String, Object> params);

    /** Q_가격사례_D */
    List<HashMap<String, Object>> selectList15(HashMap<String, Object> params);

    /** Q_가격사례_M */
    List<HashMap<String, Object>> selectList16(HashMap<String, Object> params);

    /** Q_감정가_감정M */
    List<HashMap<String, Object>> selectList17(HashMap<String, Object> params);

    /** Q_감정가_경매사례 */
    List<HashMap<String, Object>> selectList18(HashMap<String, Object> params);

    /** Q_감정가_본건 */
    List<HashMap<String, Object>> selectList19(HashMap<String, Object> params);

    /** Q_감정순번 */
    List<HashMap<String, Object>> selectList20(HashMap<String, Object> params);

    /** Q_감정순번_20100618 */
    List<HashMap<String, Object>> selectList21(HashMap<String, Object> params);

    /** Q_거래처목록 */
    List<HashMap<String, Object>> selectList22(HashMap<String, Object> params);

    /** Q_건축물의경과년도 */
    List<HashMap<String, Object>> selectList23(HashMap<String, Object> params);

    /** Q_결재진행현황 */
    List<HashMap<String, Object>> selectList24(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액 */
    List<HashMap<String, Object>> selectList25(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액JB */
    List<HashMap<String, Object>> selectList26(HashMap<String, Object> params);

    /** Q_공통보고서_보정표 */
    List<HashMap<String, Object>> selectList27(HashMap<String, Object> params);

    /** Q_공통보고서_보정표JB */
    List<HashMap<String, Object>> selectList28(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액 */
    List<HashMap<String, Object>> selectList29(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB */
    List<HashMap<String, Object>> selectList30(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB_20081219 */
    List<HashMap<String, Object>> selectList31(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액_20081219 */
    List<HashMap<String, Object>> selectList32(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저 */
    List<HashMap<String, Object>> selectList33(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저JB */
    List<HashMap<String, Object>> selectList34(HashMap<String, Object> params);

    /** Q_공통보고서_트리 */
    List<HashMap<String, Object>> selectList35(HashMap<String, Object> params);

    /** Q_관리부서확인 */
    List<HashMap<String, Object>> selectList36(HashMap<String, Object> params);

    /** Q_구조 */
    List<HashMap<String, Object>> selectList37(HashMap<String, Object> params);

    /** Q_규제의표시 */
    List<HashMap<String, Object>> selectList38(HashMap<String, Object> params);

    /** Q_낙찰가율보정표 */
    List<HashMap<String, Object>> selectList39(HashMap<String, Object> params);

    /** Q_담당자메일조회 */
    List<HashMap<String, Object>> selectList40(HashMap<String, Object> params);

    /** Q_담보마스타 */
    List<HashMap<String, Object>> selectList41(HashMap<String, Object> params);

    /** Q_담보종류 */
    List<HashMap<String, Object>> selectList42(HashMap<String, Object> params);

    /** Q_도로명주소_시군구 */
    List<HashMap<String, Object>> selectList43(HashMap<String, Object> params);

    /** Q_도로명주소_시도 */
    List<HashMap<String, Object>> selectList44(HashMap<String, Object> params);

    /** Q_도로명주소목록 */
    List<HashMap<String, Object>> selectList45(HashMap<String, Object> params);

    /** Q_링크사이트 */
    List<HashMap<String, Object>> selectList46(HashMap<String, Object> params);

    /** Q_문서관리_관련문서 */
    List<HashMap<String, Object>> selectList47(HashMap<String, Object> params);

    /** Q_문서관리_사진 */
    List<HashMap<String, Object>> selectList48(HashMap<String, Object> params);

    /** Q_배당표M */
    List<HashMap<String, Object>> selectList49(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산 */
    List<HashMap<String, Object>> selectList50(HashMap<String, Object> params);

    /** Q_배당표_주택임차보증금_계산 */
    List<HashMap<String, Object>> selectList51(HashMap<String, Object> params);

    /** Q_부서목록 */
    List<HashMap<String, Object>> selectList52(HashMap<String, Object> params);

    /** Q_사업부문 */
    List<HashMap<String, Object>> selectList53(HashMap<String, Object> params);

    /** Q_사진구분 */
    List<HashMap<String, Object>> selectList54(HashMap<String, Object> params);

    /** Q_아파트단지규모 */
    List<HashMap<String, Object>> selectList55(HashMap<String, Object> params);

    /** Q_영업감정요청자료 */
    default List<HashMap<String, Object>> selectList56WithCondition(HashMap<String, Object> params) {
        params.put("condition1", String.valueOf(params.get("전체선택여부")));
        return selectList56(params);
    }
    List<HashMap<String, Object>> selectList56(HashMap<String, Object> params);

    /** Q_입력표 */
    List<HashMap<String, Object>> selectList57(HashMap<String, Object> params);

    /** Q_전유부분의면적 */
    List<HashMap<String, Object>> selectList58(HashMap<String, Object> params);

    /** Q_전유부분의위치 */
    List<HashMap<String, Object>> selectList59(HashMap<String, Object> params);

    /** Q_점유자의형태 */
    List<HashMap<String, Object>> selectList60(HashMap<String, Object> params);

    /** Q_주소목록 */
    List<HashMap<String, Object>> selectList61(HashMap<String, Object> params);

    /** Q_지목 */
    List<HashMap<String, Object>> selectList62(HashMap<String, Object> params);

    /** Q_지붕 */
    List<HashMap<String, Object>> selectList63(HashMap<String, Object> params);

    /** Q_집합건물종류 */
    List<HashMap<String, Object>> selectList64(HashMap<String, Object> params);

    /** Q_코드_가임대보증금적용지역 */
    List<HashMap<String, Object>> selectList65(HashMap<String, Object> params);

    /** Q_코드_각구의일련번호 */
    List<HashMap<String, Object>> selectList66(HashMap<String, Object> params);

    /** Q_코드_권리의내용 */
    List<HashMap<String, Object>> selectList67(HashMap<String, Object> params);

    /** Q_코드_순위 */
    List<HashMap<String, Object>> selectList68(HashMap<String, Object> params);

    /** Q_코드_최고채권액 */
    List<HashMap<String, Object>> selectList69(HashMap<String, Object> params);

    /** Q_크로스 */
    List<HashMap<String, Object>> selectList70(HashMap<String, Object> params);

    /** Q_탁상감정 */
    List<HashMap<String, Object>> selectList71(HashMap<String, Object> params);

    /** Q_탁상감정EMail주소조회 */
    List<HashMap<String, Object>> selectList72(HashMap<String, Object> params);

    /** Q_탁상감정진행상황 */
    List<HashMap<String, Object>> selectList73(HashMap<String, Object> params);

    /** Q_탁상감정파일명 */
    List<HashMap<String, Object>> selectList74(HashMap<String, Object> params);

    /** 저장_40_응찰마스타 */
    int save75(HashMap<String, Object> params);

    int delete76(HashMap<String, Object> params);
    int insert76(HashMap<String, Object> params);

    /** 저장_41_응찰_기일내역 */
    default void save76(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete76(sParam);
		for (HashMap<String, Object> param : params) {
            insert76(param);
        }
    }

    /** 저장_42_응찰_전감정개요 */
    int save77(HashMap<String, Object> params);

    int delete78(HashMap<String, Object> params);
    int insert78(HashMap<String, Object> params);

    /** 저장_43_응찰_선순위권리내역 */
    default void save78(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete78(sParam);
		for (HashMap<String, Object> param : params) {
            insert78(param);
        }
    }

    int delete79(HashMap<String, Object> params);
    int insert79(HashMap<String, Object> params);

    /** 저장_44_응찰_선순위부담금액 */
    default void save79(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete79(sParam);
		for (HashMap<String, Object> param : params) {
            insert79(param);
        }
    }

    int delete80(HashMap<String, Object> params);
    int insert80(HashMap<String, Object> params);

    /** 저장_감정가_가격사례D */
    default void save80(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete80(sParam);
		for (HashMap<String, Object> param : params) {
            insert80(param);
        }
    }

    int delete81(HashMap<String, Object> params);
    int insert81(HashMap<String, Object> params);

    /** 저장_감정가_가격사례M */
    default void save81(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete81(sParam);
		for (HashMap<String, Object> param : params) {
            insert81(param);
        }
    }

    /** 저장_감정가_감정_M */
    int save82(HashMap<String, Object> params);

    int delete83(HashMap<String, Object> params);
    int insert83(HashMap<String, Object> params);

    /** 저장_감정가_경매사례 */
    default void save83(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete83(sParam);
		for (HashMap<String, Object> param : params) {
            insert83(param);
        }
    }

    int delete84(HashMap<String, Object> params);
    int insert84(HashMap<String, Object> params);

    /** 저장_감정가_본건 */
    default void save84(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete84(sParam);
		for (HashMap<String, Object> param : params) {
            insert84(param);
        }
    }

    /** 저장_결재자현황_영업 */
    int save85(HashMap<String, Object> params);

    /** 저장_결재자현황_영업_Clear */
    int save86(HashMap<String, Object> params);

    /** 저장_규제의표시 */
    int save87(HashMap<String, Object> params);

    /** 저장_낙찰가율보정표 */
    int save88(HashMap<String, Object> params);

    /** 저장_담보마스타_담보여력등 */
    int save89(HashMap<String, Object> params);

    /** 저장_담보마스터 */
    int save90(HashMap<String, Object> params);

    int delete91(HashMap<String, Object> params);
    int insert91(HashMap<String, Object> params);

    /** 저장_문서관리 */
    default void save91(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete91(sParam);
		for (HashMap<String, Object> param : params) {
            insert91(param);
        }
    }

    int delete92(HashMap<String, Object> params);
    int insert92(HashMap<String, Object> params);

    /** 저장_문서관리_문서 */
    default void save92(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete92(sParam);
		for (HashMap<String, Object> param : params) {
            insert92(param);
        }
    }

    int delete93(HashMap<String, Object> params);
    int insert93(HashMap<String, Object> params);

    /** 저장_배당금_배당금 */
    default void save93(HashMap<String, Object> sParam, SaveRequest saveRequest){
        delete93(sParam);
        for (HashMap<String, Object> param : saveRequest.getListMap()) {
            insert93(param);
        }
    }

    /** 저장_배당금_배당표M */
    int save94(HashMap<String, Object> params);

    int delete95(HashMap<String, Object> params);
    int insert95(HashMap<String, Object> params);

    /** 저장_배당금_주택임차보증금 */
    default void save95(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete95(sParam);
		for (HashMap<String, Object> param : params) {
            insert95(param);
        }
    }

    /** 저장_입력표 */
    int save96(HashMap<String, Object> params);

    /** 저장_탁상감정 */
    int save97(HashMap<String, Object> params);

    /** 저장_탁상감정_담보감정M변경 */
    int save98(HashMap<String, Object> params);
}
