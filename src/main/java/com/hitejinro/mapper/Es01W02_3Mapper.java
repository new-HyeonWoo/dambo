package com.hitejinro.mapper;

import com.hitejinro.dto.request.SaveRequest;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * Es01 집합 상업용
 */
@Mapper
public interface Es01W02_3Mapper {
    /** PRT_00_담보마스타 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);

    /** PRT_01_입력표_집합건물 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);

    /** PRT_03_입력표_규제사항개관 */
    List<HashMap<String, Object>> selectList3(HashMap<String, Object> params);

    /** Q_00_가격동향 */
    List<HashMap<String, Object>> selectList4(HashMap<String, Object> params);

    /** Q_00_가임대보증금적용지역 */
    List<HashMap<String, Object>> selectList5(HashMap<String, Object> params);

    /** Q_00_건축물의경과년도 */
    List<HashMap<String, Object>> selectList6(HashMap<String, Object> params);

    /** Q_00_건축물의경과년도_코드찾기 */
    List<HashMap<String, Object>> selectList7(HashMap<String, Object> params);

    /** Q_00_결재진행현황 */
    List<HashMap<String, Object>> selectList8(HashMap<String, Object> params);

    /** Q_00_공공시설접근성 */
    List<HashMap<String, Object>> selectList9(HashMap<String, Object> params);

    /** Q_00_구조 */
    List<HashMap<String, Object>> selectList10(HashMap<String, Object> params);

    /** Q_00_내용년수 */
    List<HashMap<String, Object>> selectList11(HashMap<String, Object> params);

    /** Q_00_담보종류 */
    List<HashMap<String, Object>> selectList12(HashMap<String, Object> params);

    /** Q_00_도로계통성 */
    List<HashMap<String, Object>> selectList13(HashMap<String, Object> params);

    /** Q_00_도로조건 */
    List<HashMap<String, Object>> selectList14(HashMap<String, Object> params);

    /** Q_00_사진구분 */
    List<HashMap<String, Object>> selectList15(HashMap<String, Object> params);

    /** Q_00_상가의접근성 */
    List<HashMap<String, Object>> selectList16(HashMap<String, Object> params);

    /** Q_00_상가의층별위치 */
    List<HashMap<String, Object>> selectList17(HashMap<String, Object> params);

    /** Q_00_상가의층별위치_코드찾기 */
    List<HashMap<String, Object>> selectList18(HashMap<String, Object> params);

    /** Q_00_상권의발달정도 */
    List<HashMap<String, Object>> selectList19(HashMap<String, Object> params);

    /** Q_00_상업시설접근성 */
    List<HashMap<String, Object>> selectList20(HashMap<String, Object> params);

    /** Q_00_용도지역 */
    List<HashMap<String, Object>> selectList21(HashMap<String, Object> params);

    /** Q_00_위치별 */
    List<HashMap<String, Object>> selectList22(HashMap<String, Object> params);

    /** Q_00_인테리어비용 */
    List<HashMap<String, Object>> selectList23(HashMap<String, Object> params);

    /** Q_00_일련번호 */
    List<HashMap<String, Object>> selectList24(HashMap<String, Object> params);

    /** Q_00_입지조건 */
    List<HashMap<String, Object>> selectList25(HashMap<String, Object> params);

    /** Q_00_전유부분의면적 */
    List<HashMap<String, Object>> selectList26(HashMap<String, Object> params);

    /** Q_00_전유부분의면적_코드찾기 */
    List<HashMap<String, Object>> selectList27(HashMap<String, Object> params);

    /** Q_00_전유부분의위치 */
    List<HashMap<String, Object>> selectList28(HashMap<String, Object> params);

    /** Q_00_전유부분의위치_총층수만 */
    List<HashMap<String, Object>> selectList29(HashMap<String, Object> params);

    /** Q_00_전유부분의위치_총층수중해당층 */
    List<HashMap<String, Object>> selectList30(HashMap<String, Object> params);

    /** Q_00_점유자의형태 */
    List<HashMap<String, Object>> selectList31(HashMap<String, Object> params);

    /** Q_00_접근조건 */
    List<HashMap<String, Object>> selectList32(HashMap<String, Object> params);

    /** Q_00_접한도로의폭 */
    List<HashMap<String, Object>> selectList33(HashMap<String, Object> params);

    /** Q_00_지목 */
    List<HashMap<String, Object>> selectList34(HashMap<String, Object> params);

    /** Q_00_지붕 */
    List<HashMap<String, Object>> selectList35(HashMap<String, Object> params);

    /** Q_00_집합건물종류 */
    List<HashMap<String, Object>> selectList36(HashMap<String, Object> params);

    /** Q_00_층별비교 */
    List<HashMap<String, Object>> selectList37(HashMap<String, Object> params);

    /** Q_01_부서목록 */
    List<HashMap<String, Object>> selectList38(HashMap<String, Object> params);

    /** Q_09_감정순번생성 */
    List<HashMap<String, Object>> selectList39(HashMap<String, Object> params);

    /** Q_09_감정순번생성_20100618 */
    List<HashMap<String, Object>> selectList40(HashMap<String, Object> params);

    /** Q_10_입력표_담보마스타 */
    List<HashMap<String, Object>> selectList41(HashMap<String, Object> params);

    /** Q_11_입력표_집합건물 */
    List<HashMap<String, Object>> selectList42(HashMap<String, Object> params);

    /** Q_12_입력표_규제의표시 */
    List<HashMap<String, Object>> selectList43(HashMap<String, Object> params);

    /** Q_20_입력표_낙찰가율보정표 */
    List<HashMap<String, Object>> selectList44(HashMap<String, Object> params);

    /** Q_40_응찰입력표_마스타 */
    List<HashMap<String, Object>> selectList45(HashMap<String, Object> params);

    /** Q_41_응찰입력표_경매기일내역 */
    List<HashMap<String, Object>> selectList46(HashMap<String, Object> params);

    /** Q_42_응찰입력표_전감정개요 */
    List<HashMap<String, Object>> selectList47(HashMap<String, Object> params);

    /** Q_43_응찰입력표_선순위권리내역 */
    List<HashMap<String, Object>> selectList48(HashMap<String, Object> params);

    /** Q_44_응찰입력표_선순위부담금액 */
    List<HashMap<String, Object>> selectList49(HashMap<String, Object> params);

    /** Q_49_DUAL_등록세 */
    List<HashMap<String, Object>> selectList50(HashMap<String, Object> params);

    /** Q_49_DUAL_종합부동산세 */
    List<HashMap<String, Object>> selectList51(HashMap<String, Object> params);

    /** Q_49_DUAL_처분비용 */
    List<HashMap<String, Object>> selectList52(HashMap<String, Object> params);

    /** Q_49_DUAL_취득세 */
    List<HashMap<String, Object>> selectList53(HashMap<String, Object> params);

    /** Q_99_평가구분 */
    List<HashMap<String, Object>> selectList54(HashMap<String, Object> params);

    /** Q_DUAL_경과일수구하기 */
    List<HashMap<String, Object>> selectList55(HashMap<String, Object> params);

    /** Q_DUAL_비준_사례구분 */
    List<HashMap<String, Object>> selectList56(HashMap<String, Object> params);

    /** Q_DUAL_수익_사례구분 */
    List<HashMap<String, Object>> selectList57(HashMap<String, Object> params);

    /** Q_DUAL_여부 */
    List<HashMap<String, Object>> selectList58(HashMap<String, Object> params);

    /** Q_DUAL_유무 */
    List<HashMap<String, Object>> selectList59(HashMap<String, Object> params);

    /** Q_DUAL_이용상황 */
    List<HashMap<String, Object>> selectList60(HashMap<String, Object> params);

    /** Q_POPUP_거래처목록 */
    List<HashMap<String, Object>> selectList61(HashMap<String, Object> params);

    /** Q_POPUP_주소목록 */
    List<HashMap<String, Object>> selectList62(HashMap<String, Object> params);

    /** Q_감정가_00_본건 */
    List<HashMap<String, Object>> selectList63(HashMap<String, Object> params);

    /** Q_감정가_00_본건_입지특성 */
    List<HashMap<String, Object>> selectList64(HashMap<String, Object> params);

    /** Q_감정가_01_가격사례 */
    List<HashMap<String, Object>> selectList65(HashMap<String, Object> params);

    /** Q_감정가_02_경매사례 */
    List<HashMap<String, Object>> selectList66(HashMap<String, Object> params);

    /** Q_감정가_02_임대사례 */
    List<HashMap<String, Object>> selectList67(HashMap<String, Object> params);

    /** Q_감정가_03_비준가격 */
    List<HashMap<String, Object>> selectList68(HashMap<String, Object> params);

    /** Q_감정가_03_비준가격_집계표 */
    List<HashMap<String, Object>> selectList69(HashMap<String, Object> params);

    /** Q_감정가_04_수익가격 */
    List<HashMap<String, Object>> selectList70(HashMap<String, Object> params);

    /** Q_감정가_04_수익가격_집계표 */
    List<HashMap<String, Object>> selectList71(HashMap<String, Object> params);

    /** Q_감정가_09_감정평가 */
    List<HashMap<String, Object>> selectList72(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액 */
    List<HashMap<String, Object>> selectList73(HashMap<String, Object> params);

    /** Q_공통보고서_당사설정액JB */
    List<HashMap<String, Object>> selectList74(HashMap<String, Object> params);

    /** Q_공통보고서_보정표 */
    List<HashMap<String, Object>> selectList75(HashMap<String, Object> params);

    /** Q_공통보고서_보정표JB */
    List<HashMap<String, Object>> selectList76(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액 */
    List<HashMap<String, Object>> selectList77(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB */
    List<HashMap<String, Object>> selectList78(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액JB_20081219 */
    List<HashMap<String, Object>> selectList79(HashMap<String, Object> params);

    /** Q_공통보고서_초과부족설정액_20081219 */
    List<HashMap<String, Object>> selectList80(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저 */
    List<HashMap<String, Object>> selectList81(HashMap<String, Object> params);

    /** Q_공통보고서_최고최저JB */
    List<HashMap<String, Object>> selectList82(HashMap<String, Object> params);

    /** Q_공통보고서_트리 */
    List<HashMap<String, Object>> selectList83(HashMap<String, Object> params);

    /** Q_관리부서확인 */
    List<HashMap<String, Object>> selectList84(HashMap<String, Object> params);

    /** Q_담당자메일조회 */
    List<HashMap<String, Object>> selectList85(HashMap<String, Object> params);

    /** Q_담보마스터 */
    List<HashMap<String, Object>> selectList86(HashMap<String, Object> params);

    /** Q_도로명주소_시군구 */
    List<HashMap<String, Object>> selectList87(HashMap<String, Object> params);

    /** Q_도로명주소_시도 */
    List<HashMap<String, Object>> selectList88(HashMap<String, Object> params);

    /** Q_도로명주소목록 */
    List<HashMap<String, Object>> selectList89(HashMap<String, Object> params);

    /** Q_링크사이트 */
    List<HashMap<String, Object>> selectList90(HashMap<String, Object> params);

    /** Q_문서관리_관련문서 */
    List<HashMap<String, Object>> selectList91(HashMap<String, Object> params);

    /** Q_문서관리_사진 */
    List<HashMap<String, Object>> selectList92(HashMap<String, Object> params);

    /** Q_배당표M */
    List<HashMap<String, Object>> selectList93(HashMap<String, Object> params);

    /** Q_배당표_배당금_계산 */
    List<HashMap<String, Object>> selectList94(HashMap<String, Object> params);

    /** Q_배당표_상가임차보증금_계산 */
    List<HashMap<String, Object>> selectList95(HashMap<String, Object> params);

    /** Q_배당표_주택임차보증금_계산 */
    List<HashMap<String, Object>> selectList96(HashMap<String, Object> params);

    /** Q_사업부문 */
    List<HashMap<String, Object>> selectList97(HashMap<String, Object> params);

    /** Q_영업감정요청자료 */
    default List<HashMap<String, Object>> selectList98WithCondition(HashMap<String, Object> params) {
        params.put("condition1", String.valueOf(params.get("전체선택여부")));
        return selectList98(params);
    }
    List<HashMap<String, Object>> selectList98(HashMap<String, Object> params);

    /** Q_코드_가임대보증금적용범위_상가 */
    List<HashMap<String, Object>> selectList99(HashMap<String, Object> params);

    /** Q_코드_가임대보증금적용지역 */
    List<HashMap<String, Object>> selectList100(HashMap<String, Object> params);

    /** Q_코드_각구의일련번호 */
    List<HashMap<String, Object>> selectList101(HashMap<String, Object> params);

    /** Q_코드_권리의내용 */
    List<HashMap<String, Object>> selectList102(HashMap<String, Object> params);

    /** Q_코드_순위 */
    List<HashMap<String, Object>> selectList103(HashMap<String, Object> params);

    /** Q_코드_최고채권액 */
    List<HashMap<String, Object>> selectList104(HashMap<String, Object> params);

    /** Q_탁상감정 */
    List<HashMap<String, Object>> selectList105(HashMap<String, Object> params);

    /** Q_탁상감정EMail주소조회 */
    List<HashMap<String, Object>> selectList106(HashMap<String, Object> params);

    /** Q_탁상감정진행상황 */
    List<HashMap<String, Object>> selectList107(HashMap<String, Object> params);

    /** Q_탁상감정파일명 */
    List<HashMap<String, Object>> selectList108(HashMap<String, Object> params);

    /** 저장_00_담보마스터 */
    int save109(HashMap<String, Object> params);

    /** 저장_01_규제의표시 */
    int save110(HashMap<String, Object> params);

    /** 저장_02_입력표 */
    int save111(HashMap<String, Object> params);

    int delete112(HashMap<String, Object> params);
    int insert112(HashMap<String, Object> params);

    /** 저장_10_감정가_본건 */
    default void save112(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete112(sParam);
		for (HashMap<String, Object> param : params) {
            insert112(param);
        }
    }

    /** 저장_10_감정가_본건_입지특성 */
    int save113(HashMap<String, Object> params);

    int delete114(HashMap<String, Object> params);
    int insert114(HashMap<String, Object> params);

    /** 저장_11_감정가_가격사례 */
    default void save114(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete114(sParam);
		for (HashMap<String, Object> param : params) {
            insert114(param);
        }
    }

    int delete115(HashMap<String, Object> params);
    int insert115(HashMap<String, Object> params);

    /** 저장_12_감정가_경매사례 */
    default void save115(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete115(sParam);
		for (HashMap<String, Object> param : params) {
            insert115(param);
        }
    }

    int delete116(HashMap<String, Object> params);
    int insert116(HashMap<String, Object> params);

    /** 저장_14_감정가_임대사례 */
    default void save116(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete116(sParam);
		for (HashMap<String, Object> param : params) {
            insert116(param);
        }
    }

    int delete117(HashMap<String, Object> params);
    int insert117(HashMap<String, Object> params);

    /** 저장_17_감정가_비준가격 */
    default void save117(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete117(sParam);
		for (HashMap<String, Object> param : params) {
            insert117(param);
        }
    }

    int delete118(HashMap<String, Object> params);
    int insert118(HashMap<String, Object> params);

    /** 저장_18_감정가_수익가격 */
    default void save118(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete118(sParam);
		for (HashMap<String, Object> param : params) {
            insert118(param);
        }
    }

    /** 저장_19_감정가_평가액산정 */
    int save119(HashMap<String, Object> params);

    /** 저장_20_낙찰가율보정표 */
    int save120(HashMap<String, Object> params);

    /** 저장_40_응찰마스타 */
    int save121(HashMap<String, Object> params);

    int delete122(HashMap<String, Object> params);
    int insert122(HashMap<String, Object> params);

    /** 저장_41_응찰_기일내역 */
    default void save122(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete122(sParam);
		for (HashMap<String, Object> param : params) {
            insert122(param);
        }
    }

    /** 저장_42_응찰_전감정개요 */
    int save123(HashMap<String, Object> params);

    int delete124(HashMap<String, Object> params);
    int insert124(HashMap<String, Object> params);

    /** 저장_43_응찰_선순위권리내역 */
    default void save124(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete124(sParam);
		for (HashMap<String, Object> param : params) {
            insert124(param);
        }
    }

    int delete125(HashMap<String, Object> params);
    int insert125(HashMap<String, Object> params);

    /** 저장_44_응찰_선순위부담내역 */
    default void save125(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete125(sParam);
		for (HashMap<String, Object> param : params) {
            insert125(param);
        }
    }

    /** 저장_결재자현황_영업 */
    int save126(HashMap<String, Object> params);

    /** 저장_결재자현황_영업_Clear */
    int save127(HashMap<String, Object> params);

    /** 저장_담보마스타_담보여력등 */
    int save128(HashMap<String, Object> params);

    int delete129(HashMap<String, Object> params);
    int insert129(HashMap<String, Object> params);

    /** 저장_문서관리 */
    default void save129(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete129(sParam);
		for (HashMap<String, Object> param : params) {
            insert129(param);
        }
    }

    int delete130(HashMap<String, Object> params);
    int insert130(HashMap<String, Object> params);

    /** 저장_문서관리_문서 */
    default void save130(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete130(sParam);
		for (HashMap<String, Object> param : params) {
            insert130(param);
        }
    }

    int delete131(HashMap<String, Object> params);
    int insert131(HashMap<String, Object> params);

    /** 저장_배당금_배당금 */
    default void save131(HashMap<String, Object> sParam, SaveRequest saveRequest){
        delete131(sParam);
        for (HashMap<String, Object> param : saveRequest.getListMap()) {
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

    int delete134(HashMap<String, Object> params);
    int insert134(HashMap<String, Object> params);

    /** 저장_상가임차보증금 */
    default void save134(HashMap<String, Object> sParam, List<HashMap<String, Object>> params){
        delete134(sParam);
		for (HashMap<String, Object> param : params) {
            insert134(param);
        }
    }

    /** 저장_탁상감정 */
    int save135(HashMap<String, Object> params);

    /** 저장_탁상감정_담보감정M변경 */
    int save136(HashMap<String, Object> params);
}
