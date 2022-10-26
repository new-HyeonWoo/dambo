package com.hitejinro.configuration.component;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.hitejinro.common.enums.ErrorMessageType;
import com.hitejinro.common.util.AssertUtil;
import com.hitejinro.configuration.properties.NsdiProperty;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpStatusCodeException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;

@Component
@RequiredArgsConstructor
public class NsdiComponent {
    private final static XmlMapper xmlMapper = new XmlMapper();
    private final NsdiProperty nsdiProperty;

    /**
     * 표준지공시지가 WMS조회
     * => 좌표정보를 통해 표준지공시지가에 대한 지리데이터에서 생성된 맵 이미지를 조회하는 개별공시지가 WMS조회 기능
     */
    public String getReferLandPriceWMS(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/ReferLandPriceService/wms/getReferLandPriceWMS" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&layers=" + URLEncoder.encode(parameters.get("layers"), "UTF-8") + /*질의 대상인 하나 이상의 피처 유형 이름의 리스트, 값은 쉼표로 구분*/
                    "&crs=" + URLEncoder.encode(parameters.get("crs"), "UTF-8") + /*좌표로 이루어진 사각형 안에 담겨 있는 (또는 부분적으로 걸쳐 있는) 피처를 검색. 좌표 순서는 사용되는 좌표 시스템을 따름. 일반적 표현은 하단좌표, 상단좌표, 좌표체계 순서입니다. (lc1,lc2,uc1,uc2,좌표체계)*/
                    "&bbox=" + URLEncoder.encode(parameters.get("bbox"), "UTF-8") + /*필지고유번호 19자리중 최소 8자리(시도[2]+시군구[3]+읍면동[3]) (입력시 bbox값은 무시)*/
                    "&width=" + URLEncoder.encode(parameters.get("width"), "UTF-8") + /*요청에 대한 응답으로 WFS가 반환해야하는 피처의 최대 값(최대 허용값 : 100)*/
                    "&height=" + URLEncoder.encode(parameters.get("height"), "UTF-8") + /*요청에 대하여 WFS가 어떻게 응답할 것인지 정의. results 값은 요청된 모든 피처를 포함하는 완전한 응답이 생성되어야 함을 나타내며, hits 값은 피처의 개수만이 반환되어야 함을 의미*/
                    "&format=" + URLEncoder.encode(parameters.get("format"), "UTF-8") + /*요청에 대하여 WFS가 어떻게 응답할 것인지 정의. results 값은 요청된 모든 피처를 포함하는 완전한 응답이 생성되어야 함을 나타내며, hits 값은 피처의 개수만이 반환되어야 함을 의미*/
                    "&transparent=" + URLEncoder.encode(parameters.get("transparent"), "UTF-8") + /*요청에 대하여 WFS가 어떻게 응답할 것인지 정의. results 값은 요청된 모든 피처를 포함하는 완전한 응답이 생성되어야 함을 나타내며, hits 값은 피처의 개수만이 반환되어야 함을 의미*/
                    "&bgcolor=" + URLEncoder.encode(parameters.get("bgcolor"), "UTF-8") + /*요청에 대하여 WFS가 어떻게 응답할 것인지 정의. results 값은 요청된 모든 피처를 포함하는 완전한 응답이 생성되어야 함을 나타내며, hits 값은 피처의 개수만이 반환되어야 함을 의미*/
                    "&exceptions=" + URLEncoder.encode(parameters.get("exceptions"), "UTF-8"); /*요청에 대하여 WFS가 어떻게 응답할 것인지 정의. results 값은 요청된 모든 피처를 포함하는 완전한 응답이 생성되어야 함을 나타내며, hits 값은 피처의 개수만이 반환되어야 함을 의미*/

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return sb.toString();
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 표준지공시지가 WFS 조회
     * => 좌표정보를 통해 표준지공시지가에 대한 지리데이터에서 도형 및 속성값을 포함한 피처 집합을 조회하는 개별공시지가 WFS조회 기능
     *
     */
    public HashMap getReferLandPriceWFS(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/ReferLandPriceService/wfs/getReferLandPriceWFS" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&typename=" + URLEncoder.encode(parameters.get("typename"), "UTF-8") + /*질의 대상인 하나 이상의 피처 유형 이름의 리스트, 값은 쉼표로 구분*/
                    "&bbox=" + URLEncoder.encode(parameters.get("bbox"), "UTF-8") + /*좌표로 이루어진 사각형 안에 담겨 있는 (또는 부분적으로 걸쳐 있는) 피처를 검색. 좌표 순서는 사용되는 좌표 시스템을 따름. 일반적 표현은 하단좌표, 상단좌표, 좌표체계 순서입니다. (lc1,lc2,uc1,uc2,좌표체계)*/
                    "&pnu=" + URLEncoder.encode(parameters.get("pnu"), "UTF-8") + /*필지고유번호 19자리중 최소 8자리(시도[2]+시군구[3]+읍면동[3]) (입력시 bbox값은 무시)*/
                    "&maxFeatures=" + URLEncoder.encode(parameters.get("maxFeatures"), "UTF-8") + /*요청에 대한 응답으로 WFS가 반환해야하는 피처의 최대 값(최대 허용값 : 100)*/
                    "&resultType=" + URLEncoder.encode(parameters.get("resultType"), "UTF-8") + /*요청에 대하여 WFS가 어떻게 응답할 것인지 정의. results 값은 요청된 모든 피처를 포함하는 완전한 응답이 생성되어야 함을 나타내며, hits 값은 피처의 개수만이 반환되어야 함을 의미*/
                    "&srsName=" + URLEncoder.encode(parameters.get("srsName"), "UTF-8"); /*반환되어야 할 피처의 기하에 사용되어야 할 WFS가 지원하는 좌표체계*/

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 표준지공시지가속성조회
     * => 좌표정보를 통해 표준지공시지가에 대한 지리데이터에서 도형 및 속성값을 포함한 피처 집합을 조회하는 개별공시지가 WFS조회 기능
     *
     */
    public HashMap getReferLandPriceAttr(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/ReferLandPriceService/attr/getReferLandPriceAttr" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&ldCode=" + URLEncoder.encode(parameters.get("ldCode"), "UTF-8") + /*법정동코드(2~10자리)*/
                    "&stdrYear=" + URLEncoder.encode(parameters.get("stdrYear"), "UTF-8") + /*기준년도(YYYY: 4자리)*/
                    "&format=" + URLEncoder.encode(parameters.get("format"), "UTF-8") + /*응답결과 형식(xml 또는 json)*/
                    "&numOfRows=" + URLEncoder.encode(parameters.get("numOfRows"), "UTF-8") + /*검색건수*/
                    "&pageNo=" + URLEncoder.encode(parameters.get("pageNo"), "UTF-8");  /*페이지 번호*/

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 토지이용계획속성조회
     * => 고유번호, 용도지역구명, 저촉여부를 통해 계획구역 내의 토지이용 계획에 대한 속성정보를 조회하는 토지이용계획속성조회 기능
     *
     */
    public HashMap getLandUseAttr(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/LandUseService/attr/getLandUseAttr" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&pnu=" + URLEncoder.encode(parameters.get("pnu"), "UTF-8") +
                    "&cnflcAt=" + URLEncoder.encode(parameters.get("cnflcAt"), "UTF-8") +
                    "&prposAreaDstrcCodeNm=" + URLEncoder.encode(parameters.get("prposAreaDstrcCodeNm"), "UTF-8") +
                    "&format=" + URLEncoder.encode(parameters.get("format"), "UTF-8") +
                    "&numOfRows=" + URLEncoder.encode(parameters.get("numOfRows"), "UTF-8") +
                    "&pageNo=" + URLEncoder.encode(parameters.get("pageNo"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 용도별건물속성조회
     * => 용도, 필지고유번호를 통해 건물의 주요용도, 세부용도, 건물용도분류 등을 조회하는 용도별건물속성조회 기능
     *
     */
    public HashMap getBuildingUse(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/BuildingUseService/attr/getBuildingUse" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&pnu=" + URLEncoder.encode(parameters.get("pnu"), "UTF-8") +
                    "&mainPrposCode=" + URLEncoder.encode(parameters.get("mainPrposCode"), "UTF-8") +
                    "&detailPrposCode=" + URLEncoder.encode(parameters.get("detailPrposCode"), "UTF-8") +
                    "&format=" + URLEncoder.encode(parameters.get("format"), "UTF-8") +
                    "&numOfRows=" + URLEncoder.encode(parameters.get("numOfRows"), "UTF-8") +
                    "&pageNo=" + URLEncoder.encode(parameters.get("pageNo"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 공동주택가격속성조회
     * => 고유번호, 기준일자를 통해 공동주택가격에 대한 속성정보를 조회하는 공동주택가격속성조회 기능
     *
     */
    public HashMap getApartHousingPriceAttr(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/ApartHousingPriceService/attr/getApartHousingPriceAttr" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&pnu=" + URLEncoder.encode(parameters.get("pnu"), "UTF-8") +
                    "&stdrYear=" + URLEncoder.encode(parameters.get("stdrYear"), "UTF-8") +
                    "&dongNm=" + URLEncoder.encode(parameters.get("dongNm"), "UTF-8") +
                    "&hoNm=" + URLEncoder.encode(parameters.get("hoNm"), "UTF-8") +
                    "&format=" + URLEncoder.encode(parameters.get("format"), "UTF-8") +
                    "&numOfRows=" + URLEncoder.encode(parameters.get("numOfRows"), "UTF-8") +
                    "&pageNo=" + URLEncoder.encode(parameters.get("pageNo"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물연령속성조회
     * => 건물연령, 필지고유번호를 통해 건물의 연령대 구분정보를 10단위/5단위로 조회하는 건축물연령속성조회 기능
     *
     */
    public HashMap getBuildingAge(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/BuildingAgeService/attr/getBuildingAge" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&pnu=" + URLEncoder.encode(parameters.get("pnu"), "UTF-8") +
                    "&buldAge=" + URLEncoder.encode(parameters.get("buldAge"), "UTF-8") +
                    "&buldAgeSe=" + URLEncoder.encode(parameters.get("buldAgeSe"), "UTF-8") +
                    "&format=" + URLEncoder.encode(parameters.get("format"), "UTF-8") +
                    "&numOfRows=" + URLEncoder.encode(parameters.get("numOfRows"), "UTF-8") +
                    "&pageNo=" + URLEncoder.encode(parameters.get("pageNo"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }


    /**
     * 개별공시지가속성조회
     * => 건물연령, 필지고유번호를 통해 건물의 연령대 구분정보를 10단위/5단위로 조회하는 건축물연령속성조회 기능
     *
     */
    public HashMap getIndvdLandPriceAttr(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1611000/nsdi/IndvdLandPriceService/attr/getIndvdLandPriceAttr" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&pnu=" + URLEncoder.encode(parameters.get("pnu"), "UTF-8") +
                    "&stdrYear=" + URLEncoder.encode(parameters.get("stdrYear"), "UTF-8") +
                    "&format=" + URLEncoder.encode(parameters.get("format"), "UTF-8") +
                    "&numOfRows=" + URLEncoder.encode(parameters.get("numOfRows"), "UTF-8") +
                    "&pageNo=" + URLEncoder.encode(parameters.get("pageNo"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 기본개요 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장의 대장종류, 대장구분, 지번주소 및 새주소, 지역/지구/구역 등의 기본정보를 제공한다.
     *
     */
    public HashMap getBrBasisOulnInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrBasisOulnInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 총괄표제부 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장 총괄표제부의 지번주소 및 새주소, 대지면적, 건축면적, 연면적, 건폐율, 용적율, 용도, 주차방식 및 주차대수, 부속건축물의 면적, 허가관리기관, 에너지관련 등급 등의 정보를 제공한다.
     *
     */
    public HashMap getBrRecapTitleInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrRecapTitleInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 표제부 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장 표제부의 지번주소 및 새주소, 주/부속구분, 대지면적, 건축면적, 건폐율, 용적율, 구조, 용도, 지붕구조, 주차대수 등의 정보를 제공한다.
     *
     */
    public HashMap getBrTitleInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrTitleInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 층별개요 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장의 층구분, 층번호, 층의 구조, 용도, 면적 등의 층별 정보를 제공한다.
     *
     */
    public HashMap getBrFlrOulnInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrFlrOulnInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 부속지번 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장과 관련된 부속지번의 지번주소 및 새주소, 부속대장구분 등의 정보를 제공한다.
     *
     */
    public HashMap getBrAtchJibunInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrAtchJibunInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 전유공용면적 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장과 관련된 전유/공용면적의 층구분, 층번호, 전유/공용구분, 구조, 용도 등의 정보를 제공한다.
     *
     */
    public HashMap getBrExposPubuseAreaInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrExposPubuseAreaInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 오수정화시설 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장과 관련된 오수정화시설의 오수정화형식, 용량, 용량단위 등의 정보를 제공한다.
     *
     */
    public HashMap getBrWclfInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrWclfInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 주택가격 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장 대상 주택의 가격정보를 제공한다.
     *
     */
    public HashMap getBrHsprcInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrHsprcInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 전유부 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장 전유부의 지번주소 및 새주소, 동/호명칭 등의 정보를 제공한다.
     *
     */
    public HashMap getBrExposInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrExposInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }

    /**
     * 건축물대장 지역지구구역 조회
     * => 전국 자치단체의 건축행정정보시스템(세움터)를 통해 생성된 건축물대장과 관련된 지역/지구/구역의 구분 및 명칭, 대표여부 등의 정보를 제공한다.
     *
     */
    public HashMap getBrJijiguInfo(HashMap<String, String> parameters) {
        try {
            String urlBuilder = nsdiProperty.getUrl() +
                    "/1613000/BldRgstService_v2/getBrJijiguInfo" +
                    "?serviceKey=" + URLEncoder.encode(nsdiProperty.getAccessKey(), "UTF-8") + /*Service Key*/
                    "&sigunguCd=" + URLEncoder.encode(parameters.get("sigunguCd"), "UTF-8") +
                    "&bjdongCd=" + URLEncoder.encode(parameters.get("bjdongCd"), "UTF-8") +
                    "&bun=" + URLEncoder.encode(parameters.get("bun"), "UTF-8") +
                    "&ji=" + URLEncoder.encode(parameters.get("ji"), "UTF-8");

            URL url = new URL(urlBuilder);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());

            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            rd.close();

            return xmlMapper.readValue(sb.toString(), HashMap.class);
        } catch(HttpStatusCodeException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        AssertUtil.force(ErrorMessageType.INTERNAL_SERVER_ERROR);

        return null;
    }
}
