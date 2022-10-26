package com.hitejinro.mapper;

import com.hitejinro.dto.request.SaveRequest;
import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

/**
 * Es01 토건_주거용
 */
@Mapper
public interface Es01W03Mapper {
    /** Q_40_응찰입력표_마스타 */
    List<HashMap<String, Object>> selectList1(HashMap<String, Object> params);
    /** Q_41_응찰입력표_경매기일내역 */
    List<HashMap<String, Object>> selectList2(HashMap<String, Object> params);
    /** Q_42_응찰입력표_전감정개요 */
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
    /** Q_건물단가 */
    List<HashMap<String, Object>> selectList14(HashMap<String, Object> params);
    /** Q_건물의표시 */
    List<HashMap<String, Object>> selectList15(HashMap<String, Object> params);
    /** Q_건물평가액_집계표 */
    List<HashMap<String, Object>> selectList16(HashMap<String, Object> params);
    /** Q_경과일자 */
    List<HashMap<String, Object>> selectList17(HashMap<String, Object> params);
    /** Q_공통보고서_건물 */
    List<HashMap<String, Object>> selectList18(HashMap<String, Object> params);
    /** Q_공통보고서_건물JB */
    List<HashMap<String, Object>> selectList19(HashMap<String, Object> params);
    /** Q_공통보고서_당사설정액 */
    List<HashMap<String, Object>> selectList20(HashMap<String, Object> params);
    /** Q_공통보고서_당사설정액JB */
    List<HashMap<String, Object>> selectList21(HashMap<String, Object> params);
    /** Q_공통보고서_보정표 */
    List<HashMap<String, Object>> selectList22(HashMap<String, Object> params);
    /** Q_공통보고서_보정표JB */
    List<HashMap<String, Object>> selectList23(HashMap<String, Object> params);
    /** Q_공통보고서_초과부족설정액 */
    List<HashMap<String, Object>> selectList24(HashMap<String, Object> params);
    /** Q_공통보고서_초과부족설정액_20081219 */
    List<HashMap<String, Object>> selectList25(HashMap<String, Object> params);
    /** Q_공통보고서_초과부족설정액JB */
    List<HashMap<String, Object>> selectList26(HashMap<String, Object> params);
    /** Q_공통보고서_초과부족설정액JB_20081219 */
    List<HashMap<String, Object>> selectList27(HashMap<String, Object> params);
    /** Q_공통보고서_최고최저 */
    List<HashMap<String, Object>> selectList28(HashMap<String, Object> params);
    /** Q_공통보고서_최고최저JB */
    List<HashMap<String, Object>> selectList29(HashMap<String, Object> params);
    /** Q_공통보고서_토지 */
    List<HashMap<String, Object>> selectList30(HashMap<String, Object> params);
    /** Q_공통보고서_토지JB */
    List<HashMap<String, Object>> selectList31(HashMap<String, Object> params);
    /** Q_공통보고서_트리 */
    List<HashMap<String, Object>> selectList32(HashMap<String, Object> params);
    /** Q_관리부서확인 */
    List<HashMap<String, Object>> selectList33(HashMap<String, Object> params);
    /** Q_규제의표시 */
    List<HashMap<String, Object>> selectList34(HashMap<String, Object> params);
    /** Q_기준가격 */
    List<HashMap<String, Object>> selectList35(HashMap<String, Object> params);
    /** Q_기준가격집계표 */
    List<HashMap<String, Object>> selectList36(HashMap<String, Object> params);
    /** Q_기타요인 */
    List<HashMap<String, Object>> selectList37(HashMap<String, Object> params);
    /** Q_담당자메일조회 */
    List<HashMap<String, Object>> selectList38(HashMap<String, Object> params);
    /** Q_담보_건축 */
    List<HashMap<String, Object>> selectList39(HashMap<String, Object> params);
    /** Q_담보_건축_Group */
    List<HashMap<String, Object>> selectList40(HashMap<String, Object> params);
    /** Q_담보마스타 */
    List<HashMap<String, Object>> selectList41(HashMap<String, Object> params);
    /** Q_담보제공비율 */
    List<HashMap<String, Object>> selectList42(HashMap<String, Object> params);
    /** Q_담보제공비율_건물 */
    List<HashMap<String, Object>> selectList43(HashMap<String, Object> params);
    /** Q_도로명주소_시군구 */
    List<HashMap<String, Object>> selectList44(HashMap<String, Object> params);
    /** Q_도로명주소_시도 */
    List<HashMap<String, Object>> selectList45(HashMap<String, Object> params);
    /** Q_도로명주소목록 */
    List<HashMap<String, Object>> selectList46(HashMap<String, Object> params);
    /** Q_링크사이트 */
    List<HashMap<String, Object>> selectList47(HashMap<String, Object> params);
    /** Q_문서관리_관련문서 */
    List<HashMap<String, Object>> selectList48(HashMap<String, Object> params);
    /** Q_문서관리_사진 */
    List<HashMap<String, Object>> selectList49(HashMap<String, Object> params);
    /** Q_배당표_배당금_계산D */
    List<HashMap<String, Object>> selectList50(HashMap<String, Object> params);
    /** Q_배당표_배당금_계산D_Temp */
    List<HashMap<String, Object>> selectList51(HashMap<String, Object> params);
    /** Q_배당표_배당금_계산M */
    List<HashMap<String, Object>> selectList52(HashMap<String, Object> params);
    /** Q_배당표_배당금_배당건수 */
    List<HashMap<String, Object>> selectList53(HashMap<String, Object> params);
    /** Q_배당표_배당금건물_계산D */
    List<HashMap<String, Object>> selectList54(HashMap<String, Object> params);
    /** Q_배당표_배당금건물_계산D_Temp */
    List<HashMap<String, Object>> selectList55(HashMap<String, Object> params);
    /** Q_배당표_배당금건물_계산M */
    List<HashMap<String, Object>> selectList56(HashMap<String, Object> params);
    /** Q_배당표_배당금건물_배당건수 */
    List<HashMap<String, Object>> selectList57(HashMap<String, Object> params);
    /** Q_배당표_상가임차보증금_계산 */
    List<HashMap<String, Object>> selectList58(HashMap<String, Object> params);
    /** Q_배당표_주택임차보증금_계산 */
    List<HashMap<String, Object>> selectList59(HashMap<String, Object> params);
    /** Q_배당표M */
    List<HashMap<String, Object>> selectList60(HashMap<String, Object> params);
    /** Q_보정표 */
    List<HashMap<String, Object>> selectList61(HashMap<String, Object> params);
    /** Q_본건인근지역의가격수준 */
    List<HashMap<String, Object>> selectList62(HashMap<String, Object> params);
    /** Q_부서목록 */
    List<HashMap<String, Object>> selectList63(HashMap<String, Object> params);
    /** Q_비준가격 */
    List<HashMap<String, Object>> selectList64(HashMap<String, Object> params);
    /** Q_비준가격산정 */
    List<HashMap<String, Object>> selectList65(HashMap<String, Object> params);
    /** Q_비준가격집계표 */
    List<HashMap<String, Object>> selectList66(HashMap<String, Object> params);
    /** Q_사례번호갱신 */
    default List<HashMap<String, Object>> selectList67WithCondition(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_사례번호_Count"))));
        return selectList67(params);
    }
    List<HashMap<String, Object>> selectList67(HashMap<String, Object> params);
    /** Q_사업부문 */
    List<HashMap<String, Object>> selectList68(HashMap<String, Object> params);
    /** Q_영업감정요청자료 */
    default List<HashMap<String, Object>> selectList69WithCondition(HashMap<String, Object> params) {
        params.put("condition1", String.valueOf(params.get("전체선택여부")));
        return selectList69(params);
    }
    List<HashMap<String, Object>> selectList69(HashMap<String, Object> params);
    /** Q_일단지구분갱신 */
    default List<HashMap<String, Object>> selectList70WithCondition(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_일단지구분_Count"))));
        return selectList70(params);
    }
    List<HashMap<String, Object>> selectList70(HashMap<String, Object> params);
    /** Q_입력표 */
    List<HashMap<String, Object>> selectList71(HashMap<String, Object> params);
    /** Q_입력표_건물 */
    List<HashMap<String, Object>> selectList72(HashMap<String, Object> params);
    /** Q_주소목록 */
    List<HashMap<String, Object>> selectList73(HashMap<String, Object> params);
    /** Q_코드_가임대보증금적용범위 */
    List<HashMap<String, Object>> selectList74(HashMap<String, Object> params);
    /** Q_코드_가임대보증금적용범위_상가 */
    List<HashMap<String, Object>> selectList75(HashMap<String, Object> params);
    /** Q_코드_각구의일련번호 */
    List<HashMap<String, Object>> selectList76(HashMap<String, Object> params);
    /** Q_코드_경과년도 */
    List<HashMap<String, Object>> selectList77(HashMap<String, Object> params);
    /** Q_코드_고저 */
    List<HashMap<String, Object>> selectList78(HashMap<String, Object> params);
    /** Q_코드_공유지분 */
    List<HashMap<String, Object>> selectList79(HashMap<String, Object> params);
    /** Q_코드_관공서접근성 */
    List<HashMap<String, Object>> selectList80(HashMap<String, Object> params);
    /** Q_코드_관리상태 */
    List<HashMap<String, Object>> selectList81(HashMap<String, Object> params);
    /** Q_코드_구조 */
    List<HashMap<String, Object>> selectList82(HashMap<String, Object> params);
    /** Q_코드_권리의내용 */
    List<HashMap<String, Object>> selectList83(HashMap<String, Object> params);
    /** Q_코드_기타접근성 */
    List<HashMap<String, Object>> selectList84(HashMap<String, Object> params);
    /** Q_코드_기타제한구역 */
    List<HashMap<String, Object>> selectList85(HashMap<String, Object> params);
    /** Q_코드_기타환경조건 */
    List<HashMap<String, Object>> selectList86(HashMap<String, Object> params);
    /** Q_코드_담보물의입지조건 */
    List<HashMap<String, Object>> selectList87(HashMap<String, Object> params);
    /** Q_코드_담보종류 */
    List<HashMap<String, Object>> selectList88(HashMap<String, Object> params);
    /** Q_코드_대지면적 */
    List<HashMap<String, Object>> selectList89(HashMap<String, Object> params);
    /** Q_코드_도로거리 */
    List<HashMap<String, Object>> selectList90(HashMap<String, Object> params);
    /** Q_코드_도로조건 */
    List<HashMap<String, Object>> selectList91(HashMap<String, Object> params);
    /** Q_코드_도시계획 */
    List<HashMap<String, Object>> selectList92(HashMap<String, Object> params);
    /** Q_코드_면적 */
    List<HashMap<String, Object>> selectList93(HashMap<String, Object> params);
    /** Q_코드_방위 */
    List<HashMap<String, Object>> selectList94(HashMap<String, Object> params);
    /** Q_코드_법정지상권 */
    List<HashMap<String, Object>> selectList95(HashMap<String, Object> params);
    /** Q_코드_법정지상권_존속기간 */
    List<HashMap<String, Object>> selectList96(HashMap<String, Object> params);
    /** Q_코드_사진구분 */
    List<HashMap<String, Object>> selectList97(HashMap<String, Object> params);
    /** Q_코드_상가_가임대보증금 */
    List<HashMap<String, Object>> selectList98(HashMap<String, Object> params);
    /** Q_코드_순위 */
    List<HashMap<String, Object>> selectList99(HashMap<String, Object> params);
    /** Q_코드_용도지구 */
    List<HashMap<String, Object>> selectList100(HashMap<String, Object> params);
    /** Q_코드_용도지역 */
    List<HashMap<String, Object>> selectList101(HashMap<String, Object> params);
    /** Q_코드_이용현황 */
    List<HashMap<String, Object>> selectList102(HashMap<String, Object> params);
    /** Q_코드_인근지역 */
    List<HashMap<String, Object>> selectList103(HashMap<String, Object> params);
    /** Q_코드_일단지구분 */
    List<HashMap<String, Object>> selectList104(HashMap<String, Object> params);
    /** Q_코드_저촉률 */
    List<HashMap<String, Object>> selectList105(HashMap<String, Object> params);
    /** Q_코드_점유자형태 */
    List<HashMap<String, Object>> selectList106(HashMap<String, Object> params);
    /** Q_코드_접한도로의폭 */
    List<HashMap<String, Object>> selectList107(HashMap<String, Object> params);
    /** Q_코드_주변상권 */
    List<HashMap<String, Object>> selectList108(HashMap<String, Object> params);
    /** Q_코드_주용도 */
    List<HashMap<String, Object>> selectList109(HashMap<String, Object> params);
    /** Q_코드_주택_가임대보증금 */
    List<HashMap<String, Object>> selectList110(HashMap<String, Object> params);
    /** Q_코드_중심지역접근성 */
    List<HashMap<String, Object>> selectList111(HashMap<String, Object> params);
    /** Q_코드_증개축횟수 */
    List<HashMap<String, Object>> selectList112(HashMap<String, Object> params);
    /** Q_코드_지목 */
    List<HashMap<String, Object>> selectList113(HashMap<String, Object> params);
    /** Q_코드_지붕 */
    List<HashMap<String, Object>> selectList114(HashMap<String, Object> params);
    /** Q_코드_철도 */
    List<HashMap<String, Object>> selectList115(HashMap<String, Object> params);
    /** Q_코드_최고채권액 */
    List<HashMap<String, Object>> selectList116(HashMap<String, Object> params);
    /** Q_코드_토지의면적 */
    List<HashMap<String, Object>> selectList117(HashMap<String, Object> params);
    /** Q_코드_토지의종류 */
    List<HashMap<String, Object>> selectList118(HashMap<String, Object> params);
    /** Q_코드_토지의형상 */
    List<HashMap<String, Object>> selectList119(HashMap<String, Object> params);
    /** Q_코드_폐기물 */
    List<HashMap<String, Object>> selectList120(HashMap<String, Object> params);
    /** Q_코드_표준단가_구조 */
    List<HashMap<String, Object>> selectList121(HashMap<String, Object> params);
    /** Q_코드_표준단가_급수 */
    List<HashMap<String, Object>> selectList122(HashMap<String, Object> params);
    /** Q_코드_표준단가_용도 */
    List<HashMap<String, Object>> selectList123(HashMap<String, Object> params);
    /** Q_코드_표준지구분 */
    List<HashMap<String, Object>> selectList124(HashMap<String, Object> params);
    /** Q_코드_형상 */
    List<HashMap<String, Object>> selectList125(HashMap<String, Object> params);
    /** Q_탁상감정 */
    List<HashMap<String, Object>> selectList126(HashMap<String, Object> params);
    /** Q_탁상감정EMail주소조회 */
    List<HashMap<String, Object>> selectList127(HashMap<String, Object> params);
    /** Q_탁상감정진행상황 */
    List<HashMap<String, Object>> selectList128(HashMap<String, Object> params);
    /** Q_탁상감정파일명 */
    List<HashMap<String, Object>> selectList129(HashMap<String, Object> params);
    /** Q_토지의표시 */
    List<HashMap<String, Object>> selectList130(HashMap<String, Object> params);
    /** Q_표준지갱신 */
    default List<HashMap<String, Object>> selectList131WithCondition(HashMap<String, Object> params) {
        params.put("condition1", Integer.parseInt(String.valueOf(params.get("Combo_표준지_Count"))));
        return selectList131(params);
    }
    List<HashMap<String, Object>> selectList131(HashMap<String, Object> params);
    /** Q_표준지공시지가선정 */
    List<HashMap<String, Object>> selectList132(HashMap<String, Object> params);


    /** 저장_40_응찰마스타 */
    int save1(HashMap<String, Object> params);
    /** 저장_41_응찰_기일내역 */
    int delete2(HashMap<String, Object> params);
    int insert2(HashMap<String, Object> params);
    default void save2(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete2(param);
            insert2(param);
        }
    }
    /** 저장_42_전감정개요 */
    int save3(HashMap<String, Object> params);
    /** 저장_43_응찰_선순위권리내역 */
    int delete4(HashMap<String, Object> params);
    int insert4(HashMap<String, Object> params);
    default void save4(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete4(param);
            insert4(param);
        }
    }
    /** 저장_44_응찰_선순위부담금액 */
    int delete5(HashMap<String, Object> params);
    int insert5(HashMap<String, Object> params);
    default void save5(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete5(param);
            insert5(param);
        }
    }
    /** 저장_건물단가 */
    int delete6(HashMap<String, Object> params);
    int insert6(HashMap<String, Object> params);
    default void save6(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete6(param);
            insert6(param);
        }
    }
    /** 저장_건물의표시 */
    int delete7(HashMap<String, Object> params);
    int insert7(HashMap<String, Object> params);
    default void save7(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete7(param);
            insert7(param);
        }
    }
    /** 저장_결재자현황_영업 */
    int save8(HashMap<String, Object> params);
    /** 저장_결재자현황_영업_Clear */
    int save9(HashMap<String, Object> params);
    /** 저장_규제의표시 */
    int save10(HashMap<String, Object> params);
    /** 저장_기준가격 */
    int delete11(HashMap<String, Object> params);
    int insert11(HashMap<String, Object> params);
    default void save11(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete11(param);
            insert11(param);
        }
    }
    /** 저장_기타요인 */
    int delete12(HashMap<String, Object> params);
    int insert12(HashMap<String, Object> params);
    default void save12(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete12(param);
            insert12(param);
        }
    }
    /** 저장_담보 */
    int save13(HashMap<String, Object> params);
    /** 저장_담보_건물 */
    int save14(HashMap<String, Object> params);
    /** 저장_담보마스타_담보여력등 */
    int save15(HashMap<String, Object> params);
    /** 저장_담보마스터 */
    int save16(HashMap<String, Object> params);
    /** 저장_담보제공비율 */
    int save17(HashMap<String, Object> params);
    /** 저장_담보제공비율_건물 */
    int save18(HashMap<String, Object> params);
    /** 저장_문서관리 */
    int delete19(HashMap<String, Object> params);
    int insert19(HashMap<String, Object> params);
    default void save19(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete19(param);
            insert19(param);
        }
    }
    /** 저장_문서관리_문서 */
    int delete20(HashMap<String, Object> params);
    int insert20(HashMap<String, Object> params);
    default void save20(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        for (HashMap<String, Object> param : params) {
            delete20(param);
            insert20(param);
        }
    }
    /** 저장_배당금_권리자_CLEAR */
    int save21(HashMap<String, Object> params);
    /** 저장_배당금_배당금 */
    int delete22(HashMap<String, Object> params);
    int insert22(HashMap<String, Object> params);
    default void save22(HashMap<String, Object> sParam, SaveRequest saveRequest) {
        delete22(sParam);
        for (HashMap<String, Object> param : saveRequest.getListMap()) {
            insert22(param);
        }
    }
    /** 저장_배당금_배당금건물 */
    int delete23(HashMap<String, Object> params);
    int insert23(HashMap<String, Object> params);
    default void save23(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        delete23(sParam);
		for (HashMap<String, Object> param : params) {
            insert23(param);
        }
    }
    /** 저장_배당금_배당표M */
    int save24(HashMap<String, Object> params);
    /** 저장_배당금_주택임차보증금 */
    int delete25(HashMap<String, Object> params);
    int insert25(HashMap<String, Object> params);
    default void save25(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        delete25(sParam);
		for (HashMap<String, Object> param : params) {
            insert25(param);
        }
    }
    /** 저장_보정표 */
    int save26(HashMap<String, Object> params);
    /** 저장_본건인근지역의가격수준 */
    int save27(HashMap<String, Object> params);
    /** 저장_본건토지 */
    int save28(HashMap<String, Object> params);
    /** 저장_비준가격 */
    int delete29(HashMap<String, Object> params);
    int insert29(HashMap<String, Object> params);
    default void save29(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        delete29(sParam);
		for (HashMap<String, Object> param : params) {
            insert29(param);
        }
    }
    /** 저장_비준가격산정사례 */
    int delete30(HashMap<String, Object> params);
    int insert30(HashMap<String, Object> params);
    default void save30(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        delete30(sParam);
		for (HashMap<String, Object> param : params) {
            insert30(param);
        }
    }
    /** 저장_상가임차보증금 */
    int delete31(HashMap<String, Object> params);
    int insert31(HashMap<String, Object> params);
    default void save31(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        delete31(sParam);
		for (HashMap<String, Object> param : params) {
            insert31(param);
        }
    }
    /** 저장_입력표 */
    int save32(HashMap<String, Object> params);
    /** 저장_입력표_건물 */
    int save33(HashMap<String, Object> params);
    /** 저장_탁상감정 */
    int save34(HashMap<String, Object> params);
    /** 저장_탁상감정_담보감정M변경 */
    int save35(HashMap<String, Object> params);
    /** 저장_토지의표시 */
    int delete36(HashMap<String, Object> params);
    int insert36(HashMap<String, Object> params);
    default void save36(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        delete36(sParam);
		for (HashMap<String, Object> param : params) {
            insert36(param);
        }
    }
    /** 저장_평가액 */
    int save37(HashMap<String, Object> params);
    /** 저장_표준지공시지가 */
    int delete38(HashMap<String, Object> params);
    int insert38(HashMap<String, Object> params);
    default void save38(HashMap<String, Object> sParam, List<HashMap<String, Object>> params) {
        delete38(sParam);
		for (HashMap<String, Object> param : params) {
            insert38(param);
        }
    }
}
