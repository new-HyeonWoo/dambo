package com.hitejinro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * Es01 토지
 */
@Mapper
public interface Es01W04Mapper {
    /** Q_40_응찰입력표_마스타 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** Q_41_응찰입력표_경매기일내역 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);

    /** Q_42_응찰입력표_전감정의개요 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** Q_43_응찰입력표_선순위권리내역 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** Q_44_응찰입력표_선순위부담금액 */
    List<HashMap<String, Object>> selectList5(HashMap<String, Object> params);

    /** Q_49_DUAL_등록세 */
    List<HashMap<String, Object>> selectList6(HashMap<String, Object> params);

    /** Q_49_DUAL_종합부동산세 */
    List<HashMap<String, Object>> selectList7(HashMap<String, Object> params);

    /** Q_49_DUAL_처분비용 */
    List<HashMap<String, Object>> selectList8(HashMap<String, Object> params);

    /** Q_49_DUAL_취득세 */
    List<HashMap<String, Object>> selectList9(HashMap<String, Object> params);

    /** Q_99_평가구분 */
    List<HashMap<String, Object>> selectList10(HashMap<String, Object> params);

    /** Q_감정순번 */
    List<HashMap<String, Object>> selectList11(HashMap<String, Object> params);

    /** Q_감정순번_20100618 */
    List<HashMap<String, Object>> selectList12(HashMap<String, Object> params);

    /** Q_거래처목록 */
    List<HashMap<String, Object>> selectList13(HashMap<String, Object> params);

    /** Q_경과일자 */
    List<HashMap<String, Object>> selectList14(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액 */
    List<HashMap<String, Object>> selectList15(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액JB */
    List<HashMap<String, Object>> selectList16(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액JB_OLD */
    List<HashMap<String, Object>> selectList17(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액_OLD */
    List<HashMap<String, Object>> selectList18(HashMap<String, Object> params);

    /** Q_공통보고서_보정표 */
    List<HashMap<String, Object>> selectList19(HashMap<String, Object> params);

    /** Q_공통보고서_보정표JB */
    List<HashMap<String, Object>> selectList20(HashMap<String, Object> params);

    /** Q_공통보고서_예상1차입찰가 */
    List<HashMap<String, Object>> selectList21(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액 */
    List<HashMap<String, Object>> selectList22(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB */
    List<HashMap<String, Object>> selectList23(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB_20081219 */
    List<HashMap<String, Object>> selectList24(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액_20081219 */
    List<HashMap<String, Object>> selectList25(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저 */
    List<HashMap<String, Object>> selectList26(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저JB */
    List<HashMap<String, Object>> selectList27(HashMap<String, Object> params);

    /** Q_공통보고서_트리 */
    List<HashMap<String, Object>> selectList28(HashMap<String, Object> params);

    /** Q_관리부서확인 */
    List<HashMap<String, Object>> selectList29(HashMap<String, Object> params);

    /** Q_규제의표시 */
    List<HashMap<String, Object>> selectList30(HashMap<String, Object> params);

    /** Q_기준가격 */
    List<HashMap<String, Object>> selectList31(HashMap<String, Object> params);

    /** Q_기준가격집계표 */
    List<HashMap<String, Object>> selectList32(HashMap<String, Object> params);

    /** Q_기타요인 */
    List<HashMap<String, Object>> selectList33(HashMap<String, Object> params);

    /** Q_담당자메일조회 */
    List<HashMap<String, Object>> selectList34(HashMap<String, Object> params);

    /** Q_담보마스타 */
    List<HashMap<String, Object>> selectList35(HashMap<String, Object> params);

    /** Q_담보제공비율 */
    List<HashMap<String, Object>> selectList36(HashMap<String, Object> params);

    /** Q_도로명주소_시군구 */
    List<HashMap<String, Object>> selectList37(HashMap<String, Object> params);

    /** Q_도로명주소_시도 */
    List<HashMap<String, Object>> selectList38(HashMap<String, Object> params);

    /** Q_도로명주소목록 */
    List<HashMap<String, Object>> selectList39(HashMap<String, Object> params);

    /** Q_링크사이트 */
    List<HashMap<String, Object>> selectList40(HashMap<String, Object> params);

    /** Q_문서관리_관련문서 */
    List<HashMap<String, Object>> selectList41(HashMap<String, Object> params);

    /** Q_문서관리_사진 */
    List<HashMap<String, Object>> selectList42(HashMap<String, Object> params);

    /** Q_배당표M */
    List<HashMap<String, Object>> selectList43(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산D */
    List<HashMap<String, Object>> selectList44(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산D_Temp */
    List<HashMap<String, Object>> selectList45(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산M */
    List<HashMap<String, Object>> selectList46(HashMap<String, Object> params);

    /** Q_배당표_배당금_배당건수 */
    List<HashMap<String, Object>> selectList47(HashMap<String, Object> params);

    /** Q_배당표_배당금건물_계산M */
    List<HashMap<String, Object>> selectList48(HashMap<String, Object> params);

    /** Q_배당표_상가임차보증금_계산 */
    List<HashMap<String, Object>> selectList49(HashMap<String, Object> params);

    /** Q_배당표_주택임차보증금_계산 */
    List<HashMap<String, Object>> selectList50(HashMap<String, Object> params);

    /** Q_보정표 */
    List<HashMap<String, Object>> selectList51(HashMap<String, Object> params);

    /** Q_본건인근지역의가격수준 */
    List<HashMap<String, Object>> selectList52(HashMap<String, Object> params);

    /** Q_부서목록 */
    List<HashMap<String, Object>> selectList53(HashMap<String, Object> params);

    /** Q_비준가격 */
    List<HashMap<String, Object>> selectList54(HashMap<String, Object> params);

    /** Q_비준가격산정 */
    List<HashMap<String, Object>> selectList55(HashMap<String, Object> params);

    /** Q_비준가격집계표 */
    List<HashMap<String, Object>> selectList56(HashMap<String, Object> params);

    List<HashMap<String, Object>> selectList57WithCondition(HashMap<String, Object> params);
    /** Q_사례번호갱신 */
    default List<HashMap<String, Object>> selectList57(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_사례번호_Count"))));
        return selectList57WithCondition(params);
    }

    /** Q_사업부문 */
    List<HashMap<String, Object>> selectList58(HashMap<String, Object> params);

    /** Q_영업감정요청자료 */
    List<HashMap<String, Object>> selectList59WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList59(HashMap<String, Object> params) {
        params.put("condition1", String.valueOf(params.get("전체선택여부")));
        return selectList59WithCondition(params);
    }

    List<HashMap<String, Object>> selectList60WithCondition(HashMap<String, Object> params);
    /** Q_일단지구분갱신 */
    default List<HashMap<String, Object>> selectList60(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_일단지구분_Count"))));
        return selectList60WithCondition(params);
    }

    /** Q_입력표 */
    List<HashMap<String, Object>> selectList61(HashMap<String, Object> params);

    /** Q_주소목록 */
    List<HashMap<String, Object>> selectList62(HashMap<String, Object> params);

    /** Q_코드_가임대보증금적용범위 */
    List<HashMap<String, Object>> selectList63(HashMap<String, Object> params);

    /** Q_코드_가임대보증금적용범위_상가 */
    List<HashMap<String, Object>> selectList64(HashMap<String, Object> params);

    /** Q_코드_각구의일련번호 */
    List<HashMap<String, Object>> selectList65(HashMap<String, Object> params);

    /** Q_코드_개발가능성_경사도 */
    List<HashMap<String, Object>> selectList66(HashMap<String, Object> params);

    /** Q_코드_개발가능성_위치 */
    List<HashMap<String, Object>> selectList67(HashMap<String, Object> params);

    /** Q_코드_고저 */
    List<HashMap<String, Object>> selectList68(HashMap<String, Object> params);

    /** Q_코드_공유지분소유지현황 */
    List<HashMap<String, Object>> selectList69(HashMap<String, Object> params);

    /** Q_코드_관공서접근성 */
    List<HashMap<String, Object>> selectList70(HashMap<String, Object> params);

    /** Q_코드_권리의내용 */
    List<HashMap<String, Object>> selectList71(HashMap<String, Object> params);

    /** Q_코드_각구의일련번호 */
    List<HashMap<String, Object>> selectList711(HashMap<String, Object> params);

    /** Q_코드_저축률 */
    List<HashMap<String, Object>> selectList712(HashMap<String, Object> params);

    /** Q_토지의표시 */
    List<HashMap<String, Object>> selectList713(HashMap<String, Object> params);

    /** Q_코드_기타접근성 */
    List<HashMap<String, Object>> selectList72(HashMap<String, Object> params);

    /** Q_코드_기타제한구역 */
    List<HashMap<String, Object>> selectList73(HashMap<String, Object> params);

    /** Q_코드_기타환경조건 */
    List<HashMap<String, Object>> selectList74(HashMap<String, Object> params);

    /** Q_코드_농지의현황 */
    List<HashMap<String, Object>> selectList75(HashMap<String, Object> params);

    /** Q_코드_담보물의입지조건 */
    List<HashMap<String, Object>> selectList76(HashMap<String, Object> params);

    /** Q_코드_담보종류 */
    List<HashMap<String, Object>> selectList77(HashMap<String, Object> params);

    /** Q_코드_도로거리 */
    List<HashMap<String, Object>> selectList78(HashMap<String, Object> params);

    /** Q_코드_도로조건 */
    List<HashMap<String, Object>> selectList79(HashMap<String, Object> params);

    /** Q_코드_도시계획 */
    List<HashMap<String, Object>> selectList80(HashMap<String, Object> params);

    /** Q_코드_면적 */
    List<HashMap<String, Object>> selectList81(HashMap<String, Object> params);

    /** Q_코드_방위 */
    List<HashMap<String, Object>> selectList82(HashMap<String, Object> params);

    /** Q_코드_법정지상권 */
    List<HashMap<String, Object>> selectList83(HashMap<String, Object> params);

    /** Q_코드_사진구분 */
    List<HashMap<String, Object>> selectList84(HashMap<String, Object> params);

    /** Q_코드_상가_가임대보증금 */
    List<HashMap<String, Object>> selectList85(HashMap<String, Object> params);

    /** Q_코드_순위 */
    List<HashMap<String, Object>> selectList86(HashMap<String, Object> params);

    /** Q_코드_용도지구 */
    List<HashMap<String, Object>> selectList87(HashMap<String, Object> params);

    /** Q_코드_용도지역 */
    List<HashMap<String, Object>> selectList88(HashMap<String, Object> params);

    /** Q_코드_이용현황 */
    List<HashMap<String, Object>> selectList89(HashMap<String, Object> params);

    /** Q_코드_인근지역 */
    List<HashMap<String, Object>> selectList90(HashMap<String, Object> params);

    /** Q_코드_일단지구분 */
    List<HashMap<String, Object>> selectList91(HashMap<String, Object> params);

    /** Q_코드_임야의현황 */
    List<HashMap<String, Object>> selectList92(HashMap<String, Object> params);

    /** Q_코드_저촉률 */
    List<HashMap<String, Object>> selectList93(HashMap<String, Object> params);

    /** Q_코드_접한도로의폭 */
    List<HashMap<String, Object>> selectList94(HashMap<String, Object> params);

    /** Q_코드_주택_가임대보증금 */
    List<HashMap<String, Object>> selectList95(HashMap<String, Object> params);

    /** Q_코드_중심지역접근성 */
    List<HashMap<String, Object>> selectList96(HashMap<String, Object> params);

    /** Q_코드_지목 */
    List<HashMap<String, Object>> selectList97(HashMap<String, Object> params);

    /** Q_코드_철도 */
    List<HashMap<String, Object>> selectList98(HashMap<String, Object> params);

    /** Q_코드_최고채권액 */
    List<HashMap<String, Object>> selectList99(HashMap<String, Object> params);

    /** Q_코드_토지의고저 */
    List<HashMap<String, Object>> selectList100(HashMap<String, Object> params);

    /** Q_코드_토지의종류 */
    List<HashMap<String, Object>> selectList101(HashMap<String, Object> params);

    /** Q_코드_토지의형상 */
    List<HashMap<String, Object>> selectList102(HashMap<String, Object> params);

    /** Q_코드_폐기물 */
    List<HashMap<String, Object>> selectList103(HashMap<String, Object> params);

    /** Q_코드_표준지구분 */
    List<HashMap<String, Object>> selectList104(HashMap<String, Object> params);

    /** Q_코드_형상 */
    List<HashMap<String, Object>> selectList105(HashMap<String, Object> params);

    /** Q_크로스 */
    List<HashMap<String, Object>> selectList106(HashMap<String, Object> params);

    /** Q_탁상감정 */
    List<HashMap<String, Object>> selectList107(HashMap<String, Object> params);

    /** Q_탁상감정EMail주소조회 */
    List<HashMap<String, Object>> selectList108(HashMap<String, Object> params);

    /** Q_탁상감정진행상황 */
    List<HashMap<String, Object>> selectList109(HashMap<String, Object> params);

    /** Q_탁상감정파일명 */
    List<HashMap<String, Object>> selectList110(HashMap<String, Object> params);

    /** Q_토지의표시 */
    List<HashMap<String, Object>> selectList111(HashMap<String, Object> params);

    /** Q_표준지갱신 */
    List<HashMap<String, Object>> selectList112WithCondition(HashMap<String, Object> params);
    default List<HashMap<String, Object>> selectList112(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_표준지_Count"))));
        return selectList112WithCondition(params);
    }

    /** Q_표준지공시지가선정 */
    List<HashMap<String, Object>> selectList113(HashMap<String, Object> params);

    /** 저장_40_응찰마스타 */
    int save114(HashMap<String, Object> params);

    int delete115(HashMap<String, Object> params);
    int insert115(HashMap<String, Object> params);

    /** 저장_41_응찰_기일내역 */
    default void save115(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete115(sParam);
		for (HashMap<String, Object> param : params) {
            insert115(param);
        }
    }

    /** 저장_42_응찰_전감정개요 */
    int save116(HashMap<String, Object> params);

    int delete117(HashMap<String, Object> params);
    int insert117(HashMap<String, Object> params);

    /** 저장_43_응찰_선순위권리내역 */
    default void save117(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete117(sParam);
		for (HashMap<String, Object> param : params) {
            insert117(param);
        }
    }

    int delete118(HashMap<String, Object> params);
    int insert118(HashMap<String, Object> params);

    /** 저장_44_응찰_선순위부담금액 */
    default void save118(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete118(sParam);
		for (HashMap<String, Object> param : params) {
            insert118(param);
        }
    }

    /** 저장_결재자현황_영업 */
    int save119(HashMap<String, Object> params);

    /** 저장_결재자현황_영업_Clear */
    int save120(HashMap<String, Object> params);

    /** 저장_규제의표시 */
    int save121(HashMap<String, Object> params);

    int delete122(HashMap<String, Object> params);
    int insert122(HashMap<String, Object> params);

    /** 저장_기준가격 */
    default void save122(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete122(sParam);
		for (HashMap<String, Object> param : params) {
            insert122(param);
        }
    }

    int delete123(HashMap<String, Object> params);
    int insert123(HashMap<String, Object> params);

    /** 저장_기타요인 */
    default void save123(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete123(sParam);
		for (HashMap<String, Object> param : params) {
            insert123(param);
        }
    }

    int delete124(HashMap<String, Object> params);
    int insert124(HashMap<String, Object> params);

    /** 저장_담보 */
    default void save124(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete124(sParam);
		for (HashMap<String, Object> param : params) {
            insert124(param);
        }
    }

    /** 저장_담보마스타_담보여력등 */
    int save125(HashMap<String, Object> params);

    /** 저장_담보마스터 */
    int save126(HashMap<String, Object> params);

    int delete127(HashMap<String, Object> params);
    int insert127(HashMap<String, Object> params);

    /** 저장_담보제공비율 */
    default void save127(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete127(sParam);
		for (HashMap<String, Object> param : params) {
            insert127(param);
        }
    }

    int delete128(HashMap<String, Object> params);
    int insert128(HashMap<String, Object> params);

    /** 저장_문서관리 */
    default void save128(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete128(sParam);
		for (HashMap<String, Object> param : params) {
            insert128(param);
        }
    }

    int delete129(HashMap<String, Object> params);
    int insert129(HashMap<String, Object> params);

    /** 저장_문서관리_문서 */
    default void save129(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete129(sParam);
		for (HashMap<String, Object> param : params) {
            insert129(param);
        }
    }

    /** 저장_배당금_권리자_CLEAR */
    int save130(HashMap<String, Object> params);

    int delete131(HashMap<String, Object> params);
    int insert131(HashMap<String, Object> params);

    /** 저장_배당금_배당금 */
    default void save131(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete131(sParam);
		for (HashMap<String, Object> param : params) {
            insert131(param);
        }
    }

    /** 저장_배당금_배당표M */
    int save132(HashMap<String, Object> params);

    int delete133(HashMap<String, Object> params);
    int insert133(HashMap<String, Object> params);

    /** 저장_배당금_주택임차보증금 */
    default void save133(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete133(sParam);
		for (HashMap<String, Object> param : params) {
            insert133(param);
        }
    }

    /** 저장_보정표 */
    int save134(HashMap<String, Object> params);

    /** 저장_본건인근지역의가격수준 */
    int save135(HashMap<String, Object> params);

    int delete136(HashMap<String, Object> params);
    int insert136(HashMap<String, Object> params);

    /** 저장_본건토지 */
    default void
    save136(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete136(sParam);
		for (HashMap<String, Object> param : params) {
            insert136(param);
        }
    }

    int delete137(HashMap<String, Object> params);
    int insert137(HashMap<String, Object> params);

    /** 저장_비준가격 */
    default void save137(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete137(sParam);
		for (HashMap<String, Object> param : params) {
            insert137(param);
        }
    }

    int delete138(HashMap<String, Object> params);
    int insert138(HashMap<String, Object> params);

    /** 저장_비준가격산정사례 */
    default void save138(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete138(sParam);
		for (HashMap<String, Object> param : params) {
            insert138(param);
        }
    }

    int delete139(HashMap<String, Object> params);
    int insert139(HashMap<String, Object> params);

    /** 저장_상가임차보증금 */
    default void save139(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete139(sParam);
		for (HashMap<String, Object> param : params) {
            insert139(param);
        }
    }

    /** 저장_입력표 */
    int save140(HashMap<String, Object> params);

    /** 저장_탁상감정 */
    int save141(HashMap<String, Object> params);

    /** 저장_탁상감정_담보감정M변경 */
    int save142(HashMap<String, Object> params);

    int delete143(HashMap<String, Object> params);
    int insert143(HashMap<String, Object> params);

    /** 저장_토지의표시 */
    default void save143(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete143(sParam);
		for (HashMap<String, Object> param : params) {
            insert143(param);
        }
    }

    int delete144(HashMap<String, Object> params);
    int insert144(HashMap<String, Object> params);

    /** 저장_평가액 */
    default void save144(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
//        delete144(sParam);
		for (HashMap<String, Object> param : params) {
            insert144(param);
        }
    }

    int delete145(HashMap<String, Object> params);
    int insert145(HashMap<String, Object> params);

    /** 저장_표준지공시지가 */
    default void save145(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete145(sParam);
		for (HashMap<String, Object> param : params) {
            insert145(param);
        }
    }
}
