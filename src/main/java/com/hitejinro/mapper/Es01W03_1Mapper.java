package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * Es01 토건_상업용
 */
@Mapper
public interface Es01W03_1Mapper {
    /** Q_00_가격동향 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** Q_00_공공시설접근성 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);

    /** Q_00_도로계통성 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** Q_00_도로조건 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** Q_00_상업시설접근성 */
    List<HashMap<String, Object>> selectList5(HashMap<String, Object> params);

    /** Q_00_인테리어비용 */
    List<HashMap<String, Object>> selectList6(HashMap<String, Object> params);

    /** Q_40_응찰입력표_마스타 */
    List<HashMap<String, Object>> selectList7(HashMap<String, Object> params);

    /** Q_41_응찰입력표_경매기일내역 */
    List<HashMap<String, Object>> selectList8(HashMap<String, Object> params);

    /** Q_42_응찰입력표_전감정의개요 */
    List<HashMap<String, Object>> selectList9(HashMap<String, Object> params);

    /** Q_43_응찰입력표_선순위권리내역 */
    List<HashMap<String, Object>> selectList10(HashMap<String, Object> params);

    /** Q_44_응찰입력표_선순위부담금액 */
    List<HashMap<String, Object>> selectList11(HashMap<String, Object> params);

    /** Q_49_DUAL_등록세 */
    List<HashMap<String, Object>> selectList12(HashMap<String, Object> params);

    /** Q_49_DUAL_종합부동산세 */
    List<HashMap<String, Object>> selectList13(HashMap<String, Object> params);

    /** Q_49_DUAL_처분비용 */
    List<HashMap<String, Object>> selectList14(HashMap<String, Object> params);

    /** Q_49_DUAL_취득세 */
    List<HashMap<String, Object>> selectList15(HashMap<String, Object> params);

    /** Q_99_평가구분 */
    List<HashMap<String, Object>> selectList16(HashMap<String, Object> params);

    /** Q_감정순번 */
    List<HashMap<String, Object>> selectList17(HashMap<String, Object> params);

    /** Q_감정순번_20100618 */
    List<HashMap<String, Object>> selectList18(HashMap<String, Object> params);

    /** Q_거래처목록 */
    List<HashMap<String, Object>> selectList19(HashMap<String, Object> params);

    /** Q_건물단가 */
    List<HashMap<String, Object>> selectList20(HashMap<String, Object> params);

    /** Q_건물의표시 */
    List<HashMap<String, Object>> selectList21(HashMap<String, Object> params);

    /** Q_건물평가액_집계표 */
    List<HashMap<String, Object>> selectList22(HashMap<String, Object> params);

    /** Q_경과일자 */
    List<HashMap<String, Object>> selectList23(HashMap<String, Object> params);

    /** Q_공통보고서_건물 */
    List<HashMap<String, Object>> selectList24(HashMap<String, Object> params);

    /** Q_공통보고서_건물JB */
    List<HashMap<String, Object>> selectList25(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액 */
    List<HashMap<String, Object>> selectList26(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액JB */
    List<HashMap<String, Object>> selectList27(HashMap<String, Object> params);

    /** Q_공통보고서_보정표 */
    List<HashMap<String, Object>> selectList28(HashMap<String, Object> params);

    /** Q_공통보고서_보정표JB */
    List<HashMap<String, Object>> selectList29(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액 */
    List<HashMap<String, Object>> selectList30(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB */
    List<HashMap<String, Object>> selectList31(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB_20081219 */
    List<HashMap<String, Object>> selectList32(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액_20081219 */
    List<HashMap<String, Object>> selectList33(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저 */
    List<HashMap<String, Object>> selectList34(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저JB */
    List<HashMap<String, Object>> selectList35(HashMap<String, Object> params);

    /** Q_공통보고서_토지 */
    List<HashMap<String, Object>> selectList36(HashMap<String, Object> params);

    /** Q_공통보고서_토지JB */
    List<HashMap<String, Object>> selectList37(HashMap<String, Object> params);

    /** Q_공통보고서_트리 */
    List<HashMap<String, Object>> selectList38(HashMap<String, Object> params);

    /** Q_관리부서확인 */
    List<HashMap<String, Object>> selectList39(HashMap<String, Object> params);

    /** Q_규제의표시 */
    List<HashMap<String, Object>> selectList40(HashMap<String, Object> params);

    /** Q_기준가격 */
    List<HashMap<String, Object>> selectList41(HashMap<String, Object> params);

    /** Q_기준가격집계표 */
    List<HashMap<String, Object>> selectList42(HashMap<String, Object> params);

    /** Q_기타요인 */
    List<HashMap<String, Object>> selectList43(HashMap<String, Object> params);

    /** Q_담당자메일조회 */
    List<HashMap<String, Object>> selectList44(HashMap<String, Object> params);

    /** Q_담보_건축 */
    List<HashMap<String, Object>> selectList45(HashMap<String, Object> params);

    /** Q_담보_건축_Group */
    List<HashMap<String, Object>> selectList46(HashMap<String, Object> params);

    /** Q_담보마스타 */
    List<HashMap<String, Object>> selectList47(HashMap<String, Object> params);

    /** Q_담보제공비율 */
    List<HashMap<String, Object>> selectList48(HashMap<String, Object> params);

    /** Q_담보제공비율_건물 */
    List<HashMap<String, Object>> selectList49(HashMap<String, Object> params);

    /** Q_도로명주소_시군구 */
    List<HashMap<String, Object>> selectList50(HashMap<String, Object> params);

    /** Q_도로명주소_시도 */
    List<HashMap<String, Object>> selectList51(HashMap<String, Object> params);

    /** Q_도로명주소목록 */
    List<HashMap<String, Object>> selectList52(HashMap<String, Object> params);

    /** Q_링크사이트 */
    List<HashMap<String, Object>> selectList53(HashMap<String, Object> params);

    /** Q_문서관리_관련문서 */
    List<HashMap<String, Object>> selectList54(HashMap<String, Object> params);

    /** Q_문서관리_사진 */
    List<HashMap<String, Object>> selectList55(HashMap<String, Object> params);

    /** Q_배당표M */
    List<HashMap<String, Object>> selectList56(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산D */
    List<HashMap<String, Object>> selectList57(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산D_Temp */
    List<HashMap<String, Object>> selectList58(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산M */
    List<HashMap<String, Object>> selectList59(HashMap<String, Object> params);

    /** Q_배당표_배당금_배당건수 */
    List<HashMap<String, Object>> selectList60(HashMap<String, Object> params);

    /** Q_배당표_배당금건물_계산D */
    List<HashMap<String, Object>> selectList61(HashMap<String, Object> params);

    /** Q_배당표_배당금건물_계산D_Temp */
    List<HashMap<String, Object>> selectList62(HashMap<String, Object> params);

    /** Q_배당표_배당금건물_계산M */
    List<HashMap<String, Object>> selectList63(HashMap<String, Object> params);

    /** Q_배당표_배당금건물_배당건수 */
    List<HashMap<String, Object>> selectList64(HashMap<String, Object> params);

    /** Q_배당표_상가임차보증금_계산 */
    List<HashMap<String, Object>> selectList65(HashMap<String, Object> params);

    /** Q_배당표_주택임차보증금_계산 */
    List<HashMap<String, Object>> selectList66(HashMap<String, Object> params);

    /** Q_보정표 */
    List<HashMap<String, Object>> selectList67(HashMap<String, Object> params);

    /** Q_본건인근지역의가격수준 */
    List<HashMap<String, Object>> selectList68(HashMap<String, Object> params);

    /** Q_부서목록 */
    List<HashMap<String, Object>> selectList69(HashMap<String, Object> params);

    /** Q_비준가격 */
    List<HashMap<String, Object>> selectList70(HashMap<String, Object> params);

    /** Q_비준가격산정 */
    List<HashMap<String, Object>> selectList71(HashMap<String, Object> params);

    /** Q_비준가격집계표 */
    List<HashMap<String, Object>> selectList72(HashMap<String, Object> params);

    /** Q_사례번호갱신 */
    List<HashMap<String, Object>> selectList73WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList73(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_사례번호_Count"))));
        return selectList73WithCondition(params);
    }

    /** Q_사업부문 */
    List<HashMap<String, Object>> selectList74(HashMap<String, Object> params);

    /** Q_수익_수익가격 */
    List<HashMap<String, Object>> selectList75(HashMap<String, Object> params);

    /** Q_수익_입지특성 */
    List<HashMap<String, Object>> selectList76(HashMap<String, Object> params);

    /** Q_수익_평가액 */
    List<HashMap<String, Object>> selectList77(HashMap<String, Object> params);

    /** Q_영업감정요청자료 */
    List<HashMap<String, Object>> selectList78WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList78(HashMap<String, Object> params) {
        params.put("condition1", String.valueOf(params.get("전체선택여부")));
        return selectList78WithCondition(params);
    }

    /** Q_일단지구분갱신 */
    List<HashMap<String, Object>> selectList79WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList79(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_일단지구분_Count"))));
        return selectList79WithCondition(params);
    }

    /** Q_입력표 */
    List<HashMap<String, Object>> selectList80(HashMap<String, Object> params);

    /** Q_입력표_건물 */
    List<HashMap<String, Object>> selectList81(HashMap<String, Object> params);

    /** Q_주소목록 */
    List<HashMap<String, Object>> selectList82(HashMap<String, Object> params);

    /** Q_코드_가임대보증금적용범위 */
    List<HashMap<String, Object>> selectList83(HashMap<String, Object> params);

    /** Q_코드_가임대보증금적용범위_상가 */
    List<HashMap<String, Object>> selectList84(HashMap<String, Object> params);

    /** Q_코드_각구의일련번호 */
    List<HashMap<String, Object>> selectList85(HashMap<String, Object> params);

    /** Q_코드_경과년도 */
    List<HashMap<String, Object>> selectList86(HashMap<String, Object> params);

    /** Q_코드_고저 */
    List<HashMap<String, Object>> selectList87(HashMap<String, Object> params);

    /** Q_코드_공유지분 */
    List<HashMap<String, Object>> selectList88(HashMap<String, Object> params);

    /** Q_코드_관공서접근성 */
    List<HashMap<String, Object>> selectList89(HashMap<String, Object> params);

    /** Q_코드_관리상태 */
    List<HashMap<String, Object>> selectList90(HashMap<String, Object> params);

    /** Q_코드_구조 */
    List<HashMap<String, Object>> selectList91(HashMap<String, Object> params);

    /** Q_코드_권리의내용 */
    List<HashMap<String, Object>> selectList92(HashMap<String, Object> params);

    /** Q_코드_기타접근성 */
    List<HashMap<String, Object>> selectList93(HashMap<String, Object> params);

    /** Q_코드_기타제한구역 */
    List<HashMap<String, Object>> selectList94(HashMap<String, Object> params);

    /** Q_코드_기타환경조건 */
    List<HashMap<String, Object>> selectList95(HashMap<String, Object> params);

    /** Q_코드_담보물의입지조건 */
    List<HashMap<String, Object>> selectList96(HashMap<String, Object> params);

    /** Q_코드_담보종류 */
    List<HashMap<String, Object>> selectList97(HashMap<String, Object> params);

    /** Q_코드_대지면적 */
    List<HashMap<String, Object>> selectList98(HashMap<String, Object> params);

    /** Q_코드_도로거리 */
    List<HashMap<String, Object>> selectList99(HashMap<String, Object> params);

    /** Q_코드_도로조건 */
    List<HashMap<String, Object>> selectList100(HashMap<String, Object> params);

    /** Q_코드_도시계획 */
    List<HashMap<String, Object>> selectList101(HashMap<String, Object> params);

    /** Q_코드_면적 */
    List<HashMap<String, Object>> selectList102(HashMap<String, Object> params);

    /** Q_코드_방위 */
    List<HashMap<String, Object>> selectList103(HashMap<String, Object> params);

    /** Q_코드_법정지상권 */
    List<HashMap<String, Object>> selectList104(HashMap<String, Object> params);

    /** Q_코드_법정지상권_존속기간 */
    List<HashMap<String, Object>> selectList105(HashMap<String, Object> params);

    /** Q_코드_사진구분 */
    List<HashMap<String, Object>> selectList106(HashMap<String, Object> params);

    /** Q_코드_상가_가임대보증금 */
    List<HashMap<String, Object>> selectList107(HashMap<String, Object> params);

    /** Q_코드_순위 */
    List<HashMap<String, Object>> selectList108(HashMap<String, Object> params);

    /** Q_코드_용도지구 */
    List<HashMap<String, Object>> selectList109(HashMap<String, Object> params);

    /** Q_코드_용도지역 */
    List<HashMap<String, Object>> selectList110(HashMap<String, Object> params);

    /** Q_코드_이용현황 */
    List<HashMap<String, Object>> selectList111(HashMap<String, Object> params);

    /** Q_코드_인근지역 */
    List<HashMap<String, Object>> selectList112(HashMap<String, Object> params);

    /** Q_코드_일단지구분 */
    List<HashMap<String, Object>> selectList113(HashMap<String, Object> params);

    /** Q_코드_저촉률 */
    List<HashMap<String, Object>> selectList114(HashMap<String, Object> params);

    /** Q_코드_점유자형태 */
    List<HashMap<String, Object>> selectList115(HashMap<String, Object> params);

    /** Q_코드_접한도로의폭 */
    List<HashMap<String, Object>> selectList116(HashMap<String, Object> params);

    /** Q_코드_주변상권 */
    List<HashMap<String, Object>> selectList117(HashMap<String, Object> params);

    /** Q_코드_주용도 */
    List<HashMap<String, Object>> selectList118(HashMap<String, Object> params);

    /** Q_코드_주택_가임대보증금 */
    List<HashMap<String, Object>> selectList119(HashMap<String, Object> params);

    /** Q_코드_중심지역접근성 */
    List<HashMap<String, Object>> selectList120(HashMap<String, Object> params);

    /** Q_코드_증개축횟수 */
    List<HashMap<String, Object>> selectList121(HashMap<String, Object> params);

    /** Q_코드_지목 */
    List<HashMap<String, Object>> selectList122(HashMap<String, Object> params);

    /** Q_코드_지붕 */
    List<HashMap<String, Object>> selectList123(HashMap<String, Object> params);

    /** Q_코드_철도 */
    List<HashMap<String, Object>> selectList124(HashMap<String, Object> params);

    /** Q_코드_최고채권액 */
    List<HashMap<String, Object>> selectList125(HashMap<String, Object> params);

    /** Q_코드_토지의면적 */
    List<HashMap<String, Object>> selectList126(HashMap<String, Object> params);

    /** Q_코드_토지의종류 */
    List<HashMap<String, Object>> selectList127(HashMap<String, Object> params);

    /** Q_코드_토지의형상 */
    List<HashMap<String, Object>> selectList128(HashMap<String, Object> params);

    /** Q_코드_폐기물 */
    List<HashMap<String, Object>> selectList129(HashMap<String, Object> params);

    /** Q_코드_표준단가_구조 */
    List<HashMap<String, Object>> selectList130(HashMap<String, Object> params);

    /** Q_코드_표준단가_급수 */
    List<HashMap<String, Object>> selectList131(HashMap<String, Object> params);

    /** Q_코드_표준단가_용도 */
    List<HashMap<String, Object>> selectList132(HashMap<String, Object> params);

    /** Q_코드_표준지구분 */
    List<HashMap<String, Object>> selectList133(HashMap<String, Object> params);

    /** Q_코드_형상 */
    List<HashMap<String, Object>> selectList134(HashMap<String, Object> params);

    /** Q_탁상감정 */
    List<HashMap<String, Object>> selectList135(HashMap<String, Object> params);

    /** Q_탁상감정EMail주소조회 */
    List<HashMap<String, Object>> selectList136(HashMap<String, Object> params);

    /** Q_탁상감정진행상황 */
    List<HashMap<String, Object>> selectList137(HashMap<String, Object> params);

    /** Q_탁상감정파일명 */
    List<HashMap<String, Object>> selectList138(HashMap<String, Object> params);

    /** Q_토지의표시 */
    List<HashMap<String, Object>> selectList139(HashMap<String, Object> params);

    /** Q_표준지갱신 */
    List<HashMap<String, Object>> selectList140WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList140(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_표준지_Count"))));
        return selectList140WithCondition(params);
    }

    /** Q_표준지공시지가선정 */
    List<HashMap<String, Object>> selectList141(HashMap<String, Object> params);

    /** 저장_40_응찰마스타 */
    int save142(HashMap<String, Object> params);

    int delete143(HashMap<String, Object> params);
    int insert143(HashMap<String, Object> params);

    /** 저장_41_응찰_기일내역 */
    default void save143(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete143(sParam);
		for (HashMap<String, Object> param : params) {
            insert143(param);
        }
    }

    /** 저장_42_응찰_전감정개요 */
    int save144(HashMap<String, Object> params);

    int delete145(HashMap<String, Object> params);
    int insert145(HashMap<String, Object> params);

    /** 저장_43_응찰_선순위권리내역 */
    default void save145(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete145(sParam);
		for (HashMap<String, Object> param : params) {
            insert145(param);
        }
    }

    int delete146(HashMap<String, Object> params);
    int insert146(HashMap<String, Object> params);

    /** 저장_44_응찰_선순위부담금액 */
    default void save146(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete146(sParam);
		for (HashMap<String, Object> param : params) {
            insert146(param);
        }
    }

    int delete147(HashMap<String, Object> params);
    int insert147(HashMap<String, Object> params);

    /** 저장_건물단가 */
    default void save147(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete147(sParam);
		for (HashMap<String, Object> param : params) {
            insert147(param);
        }
    }

    int delete148(HashMap<String, Object> params);
    int insert148(HashMap<String, Object> params);

    /** 저장_건물의표시 */
    default void save148(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete148(sParam);
		for (HashMap<String, Object> param : params) {
            insert148(param);
        }
    }

    /** 저장_결재자현황_영업 */
    int save149(HashMap<String, Object> params);

    /** 저장_결재자현황_영업_Clear */
    int save150(HashMap<String, Object> params);

    /** 저장_규제의표시 */
    int save151(HashMap<String, Object> params);

    int delete152(HashMap<String, Object> params);
    int insert152(HashMap<String, Object> params);

    /** 저장_기준가격 */
    default void save152(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete152(sParam);
		for (HashMap<String, Object> param : params) {
            insert152(param);
        }
    }

    int delete153(HashMap<String, Object> params);
    int insert153(HashMap<String, Object> params);

    /** 저장_기타요인 */
    default void save153(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete153(sParam);
		for (HashMap<String, Object> param : params) {
            insert153(param);
        }
    }

    int delete154(HashMap<String, Object> params);
    int insert154(HashMap<String, Object> params);

    /** 저장_담보 */
    default void save154(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete154(sParam);
		for (HashMap<String, Object> param : params) {
            insert154(param);
        }
    }

    int delete155(HashMap<String, Object> params);
    int insert155(HashMap<String, Object> params);

    /** 저장_담보_건물 */
    default void save155(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete155(sParam);
		for (HashMap<String, Object> param : params) {
            insert155(param);
        }
    }

    /** 저장_담보마스타_담보여력등 */
    int save156(HashMap<String, Object> params);

    /** 저장_담보마스터 */
    int save157(HashMap<String, Object> params);

    int delete158(HashMap<String, Object> params);
    int insert158(HashMap<String, Object> params);

    /** 저장_담보제공비율 */
    default void save158(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete158(sParam);
		for (HashMap<String, Object> param : params) {
            insert158(param);
        }
    }

    int delete159(HashMap<String, Object> params);
    int insert159(HashMap<String, Object> params);

    /** 저장_담보제공비율_건물 */
    default void save159(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete159(sParam);
		for (HashMap<String, Object> param : params) {
            insert159(param);
        }
    }

    int delete160(HashMap<String, Object> params);
    int insert160(HashMap<String, Object> params);

    /** 저장_문서관리 */
    default void save160(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete160(sParam);
		for (HashMap<String, Object> param : params) {
            insert160(param);
        }
    }

    int delete161(HashMap<String, Object> params);
    int insert161(HashMap<String, Object> params);

    /** 저장_문서관리_문서 */
    default void save161(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete161(sParam);
		for (HashMap<String, Object> param : params) {
            insert161(param);
        }
    }

    /** 저장_배당금_권리자_CLEAR */
    int save162(HashMap<String, Object> params);

    int delete163(HashMap<String, Object> params);
    int insert163(HashMap<String, Object> params);

    /** 저장_배당금_배당금 */
    default void save163(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete163(sParam);
		for (HashMap<String, Object> param : params) {
            insert163(param);
        }
    }

    int delete164(HashMap<String, Object> params);
    int insert164(HashMap<String, Object> params);

    /** 저장_배당금_배당금건물 */
    default void save164(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete164(sParam);
		for (HashMap<String, Object> param : params) {
            insert164(param);
        }
    }

    /** 저장_배당금_배당표M */
    int save165(HashMap<String, Object> params);

    int delete166(HashMap<String, Object> params);
    int insert166(HashMap<String, Object> params);

    /** 저장_배당금_주택임차보증금 */
    default void save166(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete166(sParam);
		for (HashMap<String, Object> param : params) {
            insert166(param);
        }
    }

    /** 저장_보정표 */
    int save167(HashMap<String, Object> params);

    /** 저장_본건인근지역의가격수준 */
    int save168(HashMap<String, Object> params);

    int delete169(HashMap<String, Object> params);
    int insert169(HashMap<String, Object> params);

    /** 저장_본건토지 */
    default void save169(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete169(sParam);
		for (HashMap<String, Object> param : params) {
            insert169(param);
        }
    }

    int delete170(HashMap<String, Object> params);
    int insert170(HashMap<String, Object> params);

    /** 저장_비준가격 */
    default void save170(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete170(sParam);
		for (HashMap<String, Object> param : params) {
            insert170(param);
        }
    }

    int delete171(HashMap<String, Object> params);
    int insert171(HashMap<String, Object> params);

    /** 저장_비준가격산정사례 */
    default void save171(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete171(sParam);
		for (HashMap<String, Object> param : params) {
            insert171(param);
        }
    }

    int delete172(HashMap<String, Object> params);
    int insert172(HashMap<String, Object> params);

    /** 저장_상가임차보증금 */
    default void save172(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete172(sParam);
		for (HashMap<String, Object> param : params) {
            insert172(param);
        }
    }

    /** 저장_수익_수익가격 */
    int save173(HashMap<String, Object> params);

    /** 저장_수익_입지특성 */
    int save174(HashMap<String, Object> params);

    /** 저장_수익_평가액 */
    int save175(HashMap<String, Object> params);

    /** 저장_입력표 */
    int save176(HashMap<String, Object> params);

    /** 저장_입력표_건물 */
    int save177(HashMap<String, Object> params);

    /** 저장_탁상감정 */
    int save178(HashMap<String, Object> params);

    /**
     * 저장_탁상감정_담보감정M변경
     */
    void save179(HashMap<String, Object> params);

    int delete180(HashMap<String, Object> params);
    int insert180(HashMap<String, Object> params);

    /** 저장_토지의표시 */
    default void save180(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete180(sParam);
		for (HashMap<String, Object> param : params) {
            insert180(param);
        }
    }

    int delete181(HashMap<String, Object> params);
    int insert181(HashMap<String, Object> params);

    /** 저장_평가액 */
    default void save181(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete181(sParam);
		for (HashMap<String, Object> param : params) {
            insert181(param);
        }
    }

    int delete182(HashMap<String, Object> params);
    int insert182(HashMap<String, Object> params);

    /** 저장_표준지공시지가 */
    default void save182(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete182(sParam);
		for (HashMap<String, Object> param : params) {
            insert182(param);
        }
    }
}
