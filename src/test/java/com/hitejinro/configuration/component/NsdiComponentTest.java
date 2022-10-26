package com.hitejinro.configuration.component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;

@SpringBootTest
class NsdiComponentTest {
    private static final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);

    @Autowired
    private NsdiComponent nsdiComponent;

    @Test
    void getReferLandPriceWMS() {
        HashMap parameters = new HashMap();
        parameters.put("layers","166"); /*화면에 표출할 레이어명의 나열, 값은 쉼표로 구분*/
        parameters.put("crs","EPSG:5174"); /*좌표 체계(산출물을 위한 SRS)*/
        parameters.put("bbox","217365,447511,217636,447701"); /*크기(extent)를 정의하는 범위(bounding box)*/
        parameters.put("width","915"); /*반환 이미지의 너비(픽셀)*/
        parameters.put("height","700"); /*반환 이미지의 높이(픽셀)*/
        parameters.put("format","image/png"); /*반환 이미지 형식(image/png 또는 image/jpeg 또는 image/gif)*/
        parameters.put("transparent","false"); /*반환 이미지 배경의 투명 여부(true 또는 false[기본값])*/
        parameters.put("bgcolor","0xFFFFFF"); /*반환 이미지의 배경색(0xRRGGBB)*/
        parameters.put("exceptions","blank"); /*예외 발생 시 처리 방법(blank 또는 xml 또는 inimage)*/

        String referLandPriceWMS = nsdiComponent.getReferLandPriceWMS(parameters);
        System.out.println(referLandPriceWMS);
    }

    @Test
    void getReferLandPriceWFS() throws JsonProcessingException {
        HashMap parameters = new HashMap();
        parameters.put("typename","F166"); /*질의 대상인 하나 이상의 피처 유형 이름의 리스트, 값은 쉼표로 구분*/
        parameters.put("bbox","197977.042,451073.098,198432.41,451515.861,EPSG:5174"); /*좌표로 이루어진 사각형 안에 담겨 있는 (또는 부분적으로 걸쳐 있는) 피처를 검색. 좌표 순서는 사용되는 좌표 시스템을 따름. 일반적 표현은 하단좌표, 상단좌표, 좌표체계 순서입니다. (lc1,lc2,uc1,uc2,좌표체계)*/
        parameters.put("pnu","1114011400100690005"); /*필지고유번호 19자리중 최소 8자리(시도[2]+시군구[3]+읍면동[3]) (입력시 bbox값은 무시)*/
        parameters.put("maxFeatures","10"); /*요청에 대한 응답으로 WFS가 반환해야하는 피처의 최대 값(최대 허용값 : 100)*/
        parameters.put("resultType","results"); /*요청에 대하여 WFS가 어떻게 응답할 것인지 정의. results 값은 요청된 모든 피처를 포함하는 완전한 응답이 생성되어야 함을 나타내며, hits 값은 피처의 개수만이 반환되어야 함을 의미*/
        parameters.put("srsName","EPSG:5174"); /*반환되어야 할 피처의 기하에 사용되어야 할 WFS가 지원하는 좌표체계*/

        HashMap referLandPriceWFS = nsdiComponent.getReferLandPriceWFS(parameters);
        System.out.println(objectMapper.writeValueAsString(referLandPriceWFS));
    }

    @Test
    void getReferLandPriceAttr() {
        HashMap parameters = new HashMap();
        parameters.put("ldCode","1111017400"); /*법정동코드(2~10자리)*/
        parameters.put("stdrYear","2015"); /*기준년도(YYYY: 4자리)*/
        parameters.put("format","xml"); /*응답결과 형식(xml 또는 json)*/
        parameters.put("numOfRows","10"); /*검색건수*/
        parameters.put("pageNo","1"); /*페이지 번호*/

        HashMap referLandPriceAttr = nsdiComponent.getReferLandPriceAttr(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getLandUseAttr() {
        HashMap parameters = new HashMap();
        parameters.put("pnu","111101010010008");
        parameters.put("cnflcAt","1");
        parameters.put("prposAreaDstrcCodeNm","상대보호구역");
        parameters.put("format","xml");
        parameters.put("numOfRows","10");
        parameters.put("pageNo","1");

        HashMap referLandPriceAttr = nsdiComponent.getLandUseAttr(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBuildingUse() {
        HashMap parameters = new HashMap();
        parameters.put("pnu","1111017400");
        parameters.put("mainPrposCode","02000");
        parameters.put("detailPrposCode","02001");
        parameters.put("format","xml");
        parameters.put("numOfRows","10");
        parameters.put("pageNo","1");

        HashMap referLandPriceAttr = nsdiComponent.getBuildingUse(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getApartHousingPriceAttr() {
        HashMap parameters = new HashMap();
        parameters.put("pnu","1144012700116340000");
        parameters.put("stdrYear","2012");
        parameters.put("dongNm","101");
        parameters.put("hoNm","201");
        parameters.put("format","xml");
        parameters.put("numOfRows","10");
        parameters.put("pageNo","1");

        HashMap referLandPriceAttr = nsdiComponent.getApartHousingPriceAttr(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBuildingAge() {
        HashMap parameters = new HashMap();
        parameters.put("pnu","1111012500100190000");
        parameters.put("buldAge","6");
        parameters.put("buldAgeSe","1");
        parameters.put("format","xml");
        parameters.put("numOfRows","10");
        parameters.put("pageNo","1");

        HashMap referLandPriceAttr = nsdiComponent.getBuildingAge(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getIndvdLandPriceAttr() {
        HashMap parameters = new HashMap();
        parameters.put("pnu","1111012500100190000");
        parameters.put("buldAge","6");
        parameters.put("buldAgeSe","1");
        parameters.put("format","xml");
        parameters.put("numOfRows","10");
        parameters.put("pageNo","1");

        HashMap referLandPriceAttr = nsdiComponent.getBuildingAge(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrBasisOulnInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrBasisOulnInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrRecapTitleInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrRecapTitleInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrTitleInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrTitleInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrFlrOulnInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrFlrOulnInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrAtchJibunInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrAtchJibunInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrExposPubuseAreaInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrExposPubuseAreaInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrWclfInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrWclfInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrHsprcInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrHsprcInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrExposInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrExposInfo(parameters);
        System.out.println(referLandPriceAttr);
    }

    @Test
    void getBrJijiguInfo() {
        HashMap parameters = new HashMap();
        parameters.put("sigunguCd","11680");
        parameters.put("bjdongCd","10300");
        parameters.put("bun","0012");
        parameters.put("ji","0000");

        HashMap referLandPriceAttr = nsdiComponent.getBrJijiguInfo(parameters);
        System.out.println(referLandPriceAttr);
    }
}