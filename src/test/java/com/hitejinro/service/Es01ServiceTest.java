//package com.hitejinro.service;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.hitejinro.common.enums.CollateralKindType;
//import com.hitejinro.dto.request.SaveRequest;
//import com.hitejinro.mapper.Es01Mapper;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mock;
//import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.*;
//
////@ExtendWith(MockitoExtension.class)
//@MybatisTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//class Es01ServiceTest {
//
//    @Autowired
//    Es01Mapper es01Mapper;
//
//    @Mock
//    CodeService codeService;
//
//    Es01ServiceImpl es01Service;
//
//
//    @BeforeEach
//    void before() {
//        es01Service = new Es01ServiceImpl(es01Mapper, codeService);
//    }
//
//    @Test
//    void 테스트_샘플() {
//        HashMap<String, Object> params = new HashMap<>();
//        params.put("년도", "2022");
//        params.put("감정순번", "980701");
//
//        List<HashMap<String, Object>> hashMaps = es01Mapper.selectConnoisseurPriceInstance(params);
//
//        System.out.println(hashMaps);
//    }
//
//    @Transactional
//    @Test
//    void 저장_담보마스터 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"SEC_CODE\":\"105\",\"ESTI_DATE\":\"20220826\",\"GEO_CODE\":\"114288\",\"SANGHO\":\" 김제요식업조합\",\"DAEPYO_NAME\":\"전상철\",\"MARKET_NAME\":\"자체\",\"MARKET_CEO\":\"전상철\",\"DEBTOR\":\"챠무자\",\"GUARANTOR\":\"담보제공자\",\"DEBTOR_RELATION\":\"채무자 본인\",\"JUM_CODE\":\"2079736\",\"REQ_JUM\":\"2079736\",\"PROC_DIV\":\"11\",\"MARKET_DIV\":\"0\",\"B_SIZE\":\"20\",\"B_SIZE_PY\":\"6.05\",\"CURR_AMT\":\"1000000\",\"PLMIN_BID_AMT\":\"0\",\"PL_BID_AMT\":\"0\",\"JUSO1\":\"서울 동작구 성대로6나길 13\",\"B_NAME\":\"지번 집합건물의명칭 1 1\",\"JUM_SABUN\":\"108231\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\",\"INCREASE_AMT\":\"0\",\"APPL_RATE\":\"100\",\"PRE_BOND_AMT\":0,\"SPARE_SEC_AMT\":0,\"EXCEED_YN\":\"\",\"EXCEED_AMT\":0,\"RES_PL_BID_AMT\":0,\"BID_USE_YN\":\"\",\"L_SIZE\":\"10\",\"L_SIZE_PY\":\"3.025\",\"APPRAISE_GU\":\"\",\"PRE_YYYY\":\"\",\"PRE_SEQ\":\"\",\"LIQUOR_TYPE\":\"10\",\"저장_RowCount\":6}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_담보마스터", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_결재자현황_영업_Clear () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_결재자현황_영업_Clear", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_결재자현황_영업 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_결재자현황_영업", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_01_규제의표시 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_01_규제의표시", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_02_입력표 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_02_입력표", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_20_낙찰가율보정표 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_20_낙찰가율보정표", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_10_감정가_본건_입지특성 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_10_감정가_본건_입지특성", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_10_감정가_본건 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_10_감정가_본건", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_11_감정가_가격사례 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_11_감정가_가격사례", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_12_감정가_경매사례 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_12_감정가_경매사례", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_13_감정가_비준가격 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_13_감정가_비준가격", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//
//    @Transactional
//    @Test
//    void 저장_19_감정가_평가액산정 () throws JsonProcessingException {
//        String jsonStr = "{\"YYYY\":\"2022\",\"SEQ\":\"999000\",\"DOC_KEY\":\"TEST-CGZ5BE.20220805113817\"}";
//
//        SaveRequest saveRequest = SaveRequest.builder()
//                .params(new ObjectMapper().readValue(jsonStr, HashMap.class))
//                .build();
//
//        es01Service.saveQuery(saveRequest, "저장_19_감정가_평가액산정", CollateralKindType.COLLECTION_OFFICETEL);
//    }
//    // gird
////    , , , , ,
//
//
//
//
//
//
//}