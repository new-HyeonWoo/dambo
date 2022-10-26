///**
// * @Class Name : CommonUtil.java
// * @Description : 공통 함수들을 정의한 클래스
// * @Modification Information
// * @
// * @  수정일      수정자              수정내용
// * @ ---------   ---------   -------------------------------
// * @ 2021. 05.01           최초생성
// *
// * @author 프로모션 구축팀
// * @since 2021. 05.14
// * @version 1.0
// * @see
// *
// *  Copyright (C) by MOPAS All right reserved.
// */
//package com.hitejinro.old.common;
//
//import net.minidev.json.JSONObject;
//import org.apache.commons.net.ftp.FTP;
//import org.apache.commons.net.ftp.FTPClient;
//import org.apache.http.HttpResponse;
//import org.apache.http.client.ClientProtocolException;
//import org.apache.http.client.HttpClient;
//import org.apache.http.client.methods.HttpGet;
//import org.apache.http.client.methods.HttpPost;
//import org.apache.http.client.methods.HttpPut;
//import org.apache.http.entity.StringEntity;
//import org.apache.http.entity.mime.MultipartEntity;
//import org.apache.http.impl.client.CloseableHttpClient;
//import org.apache.http.impl.client.HttpClientBuilder;
//import org.apache.http.impl.client.HttpClients;
//import org.apache.http.util.EntityUtils;
//import org.apache.poi.ss.usermodel.Cell;
//import org.apache.poi.ss.usermodel.Row;
//import org.apache.poi.ss.usermodel.Sheet;
//import org.apache.poi.ss.usermodel.Workbook;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import sun.misc.BASE64Encoder;
//
//import javax.crypto.Cipher;
//import javax.crypto.spec.IvParameterSpec;
//import javax.crypto.spec.SecretKeySpec;
//import javax.servlet.http.HttpServletRequest;
//import javax.xml.parsers.ParserConfigurationException;
//import java.io.*;
//import java.math.BigDecimal;
//import java.net.URLDecoder;
//import java.sql.Timestamp;
//import java.text.SimpleDateFormat;
//import java.util.*;
//
//public class CommonUtil {
//
//	private static final Logger LOGGER = LoggerFactory.getLogger(CommonUtil.class);
//
//	private static final String keyValue = "2q34609ujagwrlmk;n";
//
//	/**
//	 * AES 암호화 한 문자열을 반환한다.
//	 * @param text String AES 암호화 할 문자열 (예:AES_1234)
//	 * @return String encryptString (예:M5504b%2Fs5oYXv%2Bjwa6zV6w%3D%3D)
//	 * @exception Exception
//	 * @see
//	 */
//    public static String aes_encode(String text) throws Exception {
//        String encryptString = "";
//        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
//        byte[] keyBytes = new byte[16];
//        byte[] b = keyValue.getBytes("UTF-8");
//        int len = b.length;
//
//        if(len > keyBytes.length) {
//            len = keyBytes.length;
//        }
//
//        System.arraycopy(b, 0, keyBytes, 0, len);
//        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
//        IvParameterSpec ivSpec = new IvParameterSpec(keyBytes);
//        cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivSpec);
//
//        byte[] results = cipher.doFinal(text.getBytes("UTF-8"));
//        BASE64Encoder encoder = new BASE64Encoder();
//        //encryptString = URLEncoder.encode(org.apache.commons.codec.binary.Base64.encodeBase64String(results));
//        encryptString = encoder.encode(results);
//
//        return encryptString;
//
//    }
//
//	/**
//	* Date 형식 String 날짜를 UnixTime 형식으로 변환하여 반환한다.
//	* 시분초 는 00:00:00 으로 설정
//	* @param strDate String 날짜 (형식:20200513)
//	* @return String UnixTime (형식:1620887544)
//	* @exception
//	* @see
//	*/
//	public static String getUnixTimesForDate(String strDate){
//		Calendar cal = Calendar.getInstance();
//		cal.set(Integer.parseInt(strDate.substring(0, 4)),
//				Integer.parseInt(strDate.substring(4, 6))-1,
//				Integer.parseInt(strDate.substring(6)));
//		cal.set(Calendar.HOUR_OF_DAY , 00);
//	    cal.set(Calendar.MINUTE , 00);
//	    cal.set(Calendar.SECOND , 00);
//
//
//		Date currentDate = cal.getTime();
//		long unixTime = currentDate.getTime() / 1000L;
//		String strUnixTime = Long.toString(unixTime);
//		return strUnixTime;
//	}
//
//	public static String getUnixTimesForEndDate(String strDate){
//        Calendar cal = Calendar.getInstance();
//        cal.set(Integer.parseInt(strDate.substring(0, 4)),
//                Integer.parseInt(strDate.substring(4, 6))-1,
//                Integer.parseInt(strDate.substring(6)));
//        cal.set(Calendar.HOUR_OF_DAY , 23);
//        cal.set(Calendar.MINUTE , 59);
//        cal.set(Calendar.SECOND , 59);
//
//
//        Date currentDate = cal.getTime();
//        long unixTime = currentDate.getTime() / 1000L;
//        String strUnixTime = Long.toString(unixTime);
//        return strUnixTime;
//    }
//
//	/**
//	* UnixTime 형식 String 날짜를  Date 형식으로 변환하여 반환한다.
//	* @param strDate String UnixTime (형식:1620887544)
//	* @return String Date (형식:2020-05-13 00:00:00)
//	* @exception
//	* @see
//	*/
//	public static String getDateForUnixTime(String strUnixTime){
//		long timestamp = Long.parseLong(strUnixTime);
//		Date date = new Date(timestamp*1000L);
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		sdf.setTimeZone(java.util.TimeZone.getTimeZone("GMT+9"));
//		String formattedDate = sdf.format(date);
//		return formattedDate;
//	}
//
//	/**
//	 * UnixTime 형식 String 날짜를  Date 형식으로 변환하여 반환한다.
//	 * @param strDate String UnixTime (형식:1620887544)
//	 * @return String Date (형식:2020-05-13 00:00:00)
//	 * @exception
//	 * @see
//	 */
//	public static String getLongDateForUnixTime(Long lUnixTime, String dateFormat){
//		long timestamp = lUnixTime/1000L;
//		Date date = new Date(timestamp*1000L);
//		SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
//		sdf.setTimeZone(java.util.TimeZone.getTimeZone("GMT+9"));
//		String formattedDate = sdf.format(date);
//		return formattedDate;
//	}
//
//
//	public static String makeSnUrl(String strUrl, String scrinSn) {
//		StringBuffer sbUrl = new StringBuffer();
//
//		if(strUrl.indexOf("?") > -1) {
//			sbUrl.append(strUrl).append("&scrinSn=").append(scrinSn);
//		} else {
//			sbUrl.append(strUrl).append("?scrinSn=").append(scrinSn);
//		}
//
//		return sbUrl.toString();
//	}
//
//	/**
//	* 메뉴 HTML 을 생성하는 메소드
//	* @param List<ScreenListManageVO> list
//	* @return String 메뉴 HTML 문자열
//	* @exception ParserConfigurationException, FactoryConfigurationError, TransformerConfigurationException, TransformerException, XPathExpressionException
//	* @see org.w3c.dom.Element JRE rt.jar 라이브러리 사용
//	*/
////	public static String makeMenu(List<ScreenListManageVO> list, List<ScreenGroupManageVO> groupList, ScreenListManageVO slmVO) throws Exception {
////		String xmlStr = "";
////		// XML Document 객체 생성
////        try {
////            HashMap<String, String> authMap = new HashMap<String, String>();
////            for (ScreenGroupManageVO vo : groupList) {
////              authMap.put(vo.getScrinSn(), vo.getRdRoleYn());
////            }
////
////            String currentScrinSn = slmVO.getScrinSn();
////
////        	DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
////            DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
////            // xpath 생성
////            XPath xpath = XPathFactory.newInstance().newXPath();
////
////            ScreenListManageVO screenVo = list.get(0);
////
////            // book 엘리먼트
////            Document doc = docBuilder.newDocument();
////            Element root = doc.createElement("ul");
////            root.setAttribute("class", "nav nav-main");
////            root.setAttribute("sn", "0");
////
////            Element liTag = doc.createElement("li");
////            Element aTag = doc.createElement("a");
////            Element iTag = doc.createElement("i");
////            Element ulTag = null;
////            Element spanTag = doc.createElement("span");
////
////            liTag.setAttribute("sn", screenVo.getScrinSn());
////
////            aTag.setAttribute("href", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////            aTag.setAttribute("class", "nav-link");
////            iTag.setAttribute("aria-hidden", "true");
////            iTag.setAttribute("class", screenVo.getLogoStyleCtns());
////            iTag.setTextContent(" ");
////            spanTag.setTextContent(screenVo.getScrinNm());
////
////            // Dashboard css 작업
////            if(slmVO.getScrinNm().equals(screenVo.getScrinNm())) {
////                liTag.setAttribute("class", "nav-expanded nav-active");
////            }
////
////            aTag.appendChild(iTag);
////            aTag.appendChild(spanTag);
////            liTag.appendChild(aTag);
////            root.appendChild(liTag);
////            doc.appendChild(root);
////
////            for(int i=1; i < list.size(); i++) {
////            	screenVo = list.get(i);
////            	if (authMap.get(screenVo.getScrinSn()) == null) {
////            	  throw new BusinessException("페이지 권한이 등록되지 않았습니다.", ErrorCode.PAGE_AUTH_NOT_REGISTERED);
////            	}
////            	if (authMap.get(screenVo.getScrinSn()).equals("Y")) {
////            	  StringBuffer sb = new StringBuffer();
////            	  String upperScrinSn = screenVo.getUpperScrinSn();
////
////                  String pathMath = sb.append("//*[@sn='").append(upperScrinSn).append("']").toString();
////                  XPathExpression expr = xpath.compile(pathMath);
////                  NodeList parentNodes = (NodeList)expr.evaluate(doc, XPathConstants.NODESET);
////
////                  if(parentNodes.getLength() > 0 && !upperScrinSn.equals("0")) {
////                      Element parentElement = (Element)parentNodes.item(0);
////
////                      //A 태그 체크
////                      NodeList aChildNode = parentElement.getElementsByTagName("a");
////                      if(aChildNode.getLength() == 0) {
////                          aTag = doc.createElement("a");
////                          iTag = doc.createElement("i");
////                          spanTag = doc.createElement("span");
////
////                          aTag.setAttribute("href", "#");
////                          aTag.setAttribute("class", "nav-link");
////                          iTag.setAttribute("aria-hidden", "true");
////                          iTag.setAttribute("class", screenVo.getLogoStyleCtns());
////                          iTag.setTextContent(" ");
////                          spanTag.setTextContent(screenVo.getScrinNm());
////                          parentElement.appendChild(aTag);
////                      }
////
////                      //하위노드
////                      NodeList ulChildNode = parentElement.getElementsByTagName("ul");
////                      if(ulChildNode.getLength() == 0) {
////                          liTag = doc.createElement("li");
////                          liTag.setAttribute("sn", screenVo.getScrinSn());
////                          String cls = (screenVo.getScrinSn().equals(currentScrinSn)) ? "nav-parent nav-active" : "nav-parent";
////
////                          aTag = doc.createElement("a");
////                          if(screenVo.getChildCnt() == 0) {
////                              aTag.setAttribute("data-url", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////                              aTag.setAttribute("class", "nav-link");
////                              if(screenVo.getPopupYn().equals("Y")) {
////                                  aTag.setAttribute("class", "nav-link popup-y");
////                              } else {
////                                  aTag.setAttribute("href", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////                              }
////                          } else {
////                              liTag.setAttribute("data-url", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////                              liTag.setAttribute("class", cls);
////                          }
////                          aTag.setTextContent(screenVo.getScrinNm());
////
////                          ulTag = doc.createElement("ul");
////                          ulTag.setAttribute("class", "nav nav-children");
////                          liTag.appendChild(aTag);
////                          ulTag.appendChild(liTag);
////                          parentElement.appendChild(ulTag);
////                      } else {
////                          liTag = doc.createElement("li");
////                          liTag.setAttribute("sn", screenVo.getScrinSn());
////                          String cls = (screenVo.getScrinSn().equals(currentScrinSn)) ? "nav-parent nav-active" : "nav-parent";
////                          aTag = doc.createElement("a");
////                          if(screenVo.getChildCnt() == 0) {
////                              aTag.setAttribute("data-url", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////                              aTag.setAttribute("class", "nav-link");
////                              if(screenVo.getPopupYn().equals("Y")) {
////                                  aTag.setAttribute("class", "nav-link popup-y");
////                              } else {
////                                  aTag.setAttribute("href", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////                              }
////                          } else {
////                              liTag.setAttribute("data-url", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////                              liTag.setAttribute("class", cls);
////                          }
////                          aTag.setTextContent(screenVo.getScrinNm());
////
////                          liTag.appendChild(aTag);
////                          Element ulElement = (Element)ulChildNode.item(0);
////                          ulElement.appendChild(liTag);
////                      }
////                  } else {
////                      liTag = doc.createElement("li");
////                      aTag = doc.createElement("a");
////                      iTag = doc.createElement("i");
////                      iTag.setTextContent(" ");
////                      spanTag = doc.createElement("span");
////
////                      liTag.setAttribute("sn", screenVo.getScrinSn());
////                      String cls = (screenVo.getScrinSn().equals(currentScrinSn)) ? "nav-parent nav-active" : "nav-parent";
////                      if(screenVo.getChildCnt() > 0) {
//////                          liTag.setAttribute("data-url", makeSnUrl(screenVo.getScrinUrl(), screenVo.getScrinSn()));
////                          liTag.setAttribute("sn", screenVo.getScrinSn());
////                          aTag.setAttribute("href", "#");
////                      } else {
////                          cls = (screenVo.getScrinSn().equals(currentScrinSn)) ? "nav-active" : "";
////                          if(screenVo.getScrinSn().equals("6")) {
////                              aTag.setAttribute("id", "eloqua_menu");
////                          }
////                      }
////                      liTag.setAttribute("class", cls);
////
////                      aTag.setAttribute("class", "nav-link");
////                      iTag.setAttribute("aria-hidden", "true");
////                      iTag.setAttribute("class", screenVo.getLogoStyleCtns());
////                      spanTag.setTextContent(screenVo.getScrinNm());
////
////                      aTag.appendChild(iTag);
////                      aTag.appendChild(spanTag);
////                      liTag.appendChild(aTag);
////                      root.appendChild(liTag);
////                  }
////            	}
////
////            	// 대메뉴 하위메뉴 css 작업
////            	if(slmVO.getScrinPath().contains(screenVo.getScrinNm()) && !(slmVO.getScrinPath().contains("상세") || slmVO.getScrinPath().contains("수정"))) {
////            	    if(screenVo.getUpperScrinSn().equals("0") || screenVo.getScrinSn().equals("15")) {
////            	        liTag.setAttribute("class", "nav-parent nav-expanded nav-active");
////            	    }else if(!slmVO.getScrinPath().contains("상세") || !slmVO.getScrinPath().contains("수정")){
////            	        liTag.setAttribute("class", "nav-active");
////            	    }
////            	}
////
////            	// 리스트 상세보기 대메뉴 하위메뉴  css 작업
////                if((slmVO.getScrinPath().contains("상세") || slmVO.getScrinPath().contains("수정")) && !screenVo.getScrinNm().isEmpty()) {
////                    String eqNm[] = slmVO.getScrinPath().split("_");
////                    String eqNmArray= eqNm[2]+" 조회";
////                    if(eqNmArray.equals(screenVo.getScrinNm())) {
////                        liTag.setAttribute("class", "nav-active");
////                    }else if(eqNm[2].equals(screenVo.getScrinNm())) {
////                        liTag.setAttribute("class", "nav-parent nav-expanded nav-active");
////                    }
////                }
////            }
////
////            TransformerFactory xml_factory = TransformerFactory.newInstance();
////            StringWriter sw = new StringWriter();
////            Properties output = new Properties();
////            output.setProperty(OutputKeys.INDENT, "yes");
////            output.setProperty(OutputKeys.ENCODING, "EUC-KR");
////            Transformer transformer = xml_factory.newTransformer();
////            transformer.setOutputProperties(output);
////            transformer.transform(new DOMSource(doc), new StreamResult(sw));
////            xmlStr = sw.getBuffer ().toString ();
////            xmlStr = xmlStr.substring(xmlStr.indexOf("?>", 0)+2, xmlStr.length());
////
////            //LOGGER.debug("**" + xmlStr + "**");
////		} catch (ParserConfigurationException e) {
////			// TODO Auto-generated catch block
//////			e.printStackTrace();
////		  throw new ModelAndViewDefiningException(null);
////		} catch (FactoryConfigurationError e) {
////			// TODO Auto-generated catch block
//////			e.printStackTrace();
////		  throw new ModelAndViewDefiningException(null);
////		} catch (TransformerConfigurationException e) {
////			// TODO Auto-generated catch block
//////			e.printStackTrace();
////		  throw new ModelAndViewDefiningException(null);
////		} catch (TransformerException e) {
////			// TODO Auto-generated catch block
//////			e.printStackTrace();
////		  throw new ModelAndViewDefiningException(null);
////		} catch (XPathExpressionException e) {
////			// TODO Auto-generated catch block
//////			e.printStackTrace();
////			throw new ModelAndViewDefiningException(null);
////		} catch (BusinessException e) {
////		  LOGGER.error("페이지 권한 에러 발생" + e.getLocalizedMessage());
////		  throw new BusinessException("페이지 권한이 등록되지 않았습니다.", ErrorCode.PAGE_AUTH_NOT_REGISTERED);
////		} catch (Exception e) {
////		  throw new ModelAndViewDefiningException(new ModelAndView("redirect:/code500.jsp"));
////		}
////		return xmlStr;
////	}
//
//
//	/**
//	 * 캠페인 조회 HTML 을 생성하는 메소드
//	 * @param List<ScreenListManageVO> list
//	 * @return String 메뉴 HTML 문자열
//	 * @exception ParserConfigurationException, FactoryConfigurationError, TransformerConfigurationException, TransformerException, XPathExpressionException
//	 * @see org.w3c.dom.Element JRE rt.jar 라이브러리 사용
//	 */
////	public static String makCampaignGrid(List<CampaignEntity> list, String campaignRetrieveUrl, String authStr, String contentType) throws Exception {
////		String xmlStr = "";
////		// XML Document 객체 생성
////		try {
////
////			DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
////			DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
////			// xpath 생성
////
////			// book 엘리먼트
////			Document doc = docBuilder.newDocument();
////			Element root = doc.createElement("div");
////			root.setAttribute("class", "bg-light p-3 rounded mb-3");
//////			root.setAttribute("sn", "0");
////
////			Element cardTag = null;
////			Element cardBody = null;
////			Element flexTag = null;
////
////			Element pTag = null;
////			Element spanTag = null;
////			Element h6Tag = null;
////
////			Element p1Tag = null;
////			Element p2Tag = null;
////			Element smallTag = null;
////			Element scriptTag = null;
////			CampaignEntity campaignVo = null;
////			SimpleDateFormat format = new SimpleDateFormat("yyyy/mm/dd");
////			for(int i=0; i < list.size(); i++) {
////				campaignVo = list.get(i);
////
//////				String strScript = "\n var loginWindow" + campaignVo.getCampaignNo() + ";\n" +
//////						"	$('#card').click(function(event) {\n" +
//////						"		loginWindow" + campaignVo.getCampaignNo() + " = window.open('/campaign/campaignLogin.do', '_blank', 'left=99999,top=99999,height=2,width=2,toolbar=no' );\n" +
//////						"		setTimeout(closeLoginWin" + campaignVo.getCampaignNo() + ", 10000);\n" +
//////						"	});\n" +
//////						"	\n" +
//////						"	function closeLoginWin" + campaignVo.getCampaignNo() + "(){\n" +
//////						"		loginWindow" + campaignVo.getCampaignNo() + ".close();\n" +
//////						"		$(location).attr('href', 'https://secure.p03.eloqua.com/Main.aspx#campaigns?id=" + campaignVo.getCampaignNo() + "');\n" +
//////						"	}\n";
////
////				String strScript = "	$('#card').click(function(event) {\n" +
////						"		$(location).attr('href', '/campaign/baseInfo/campaignDetail.do?campaignNo=" + campaignVo.getCampaignNo() + "');\n" +
////						"	});\n";
////
////				cardTag = doc.createElement("div");
////				cardBody = doc.createElement("div");
////
////				flexTag = doc.createElement("div");
////
////				pTag = doc.createElement("p");
////				spanTag = doc.createElement("span");
////				h6Tag = doc.createElement("h6");
////
////				p1Tag = doc.createElement("p");
////				p2Tag = doc.createElement("p");
////				smallTag = doc.createElement("small");
////				scriptTag = doc.createElement("script");
////
////				scriptTag.setAttribute("type", "text/javaScript");
////				scriptTag.setAttribute("language", "javascript");
////				scriptTag.setAttribute("defer", "defer");
////				scriptTag.setTextContent(strScript);
////
////				cardTag.setAttribute("class", "card");
////				cardTag.setAttribute("style", "width: 18rem;");
////
////				cardBody.setAttribute("class", "card-body");
////				flexTag.setAttribute("class", "d-flex justify-content-between mb-3");
////
////				pTag.setAttribute("style", "font-size: 0.7rem;");
////				pTag.setAttribute("class", "m-0");
////				pTag.setTextContent(campaignVo.getPrmtNo());
////
////				spanTag.setAttribute("class", "badge badge-pill badge-primary");
////
////				//엘로코아 조회
////				String strResponse = CommonUtil.httpGetRequest(new StringBuffer(campaignRetrieveUrl).append(campaignVo.getCampaignNo()).toString(), "", authStr, contentType);
////				@SuppressWarnings("deprecation")
////				JsonParser parser = new JsonParser();
////				@SuppressWarnings("deprecation")
////				JsonElement element = parser.parse(strResponse);
////				String currentStatus = element.getAsJsonObject().get("currentStatus").getAsString();
////
////				if(currentStatus.indexOf("Draft") > -1) {
////					spanTag.setTextContent("초안");
////				} else if(currentStatus.indexOf("Activate") > -1) {
////					spanTag.setTextContent("활성");
////				} else if(currentStatus.indexOf("Complete") > -1) {
////					spanTag.setTextContent("완료됨");
////				}
////
////				h6Tag.setTextContent(campaignVo.getCampaignNm());
////				smallTag.setTextContent(new StringBuffer(format.format(campaignVo.getCampaignBgnde())).append(" ~ ").append(format.format(campaignVo.getCampaignEnddd())).toString());
////				smallTag.setTextContent(new StringBuffer(format.format(campaignVo.getCampaignBgnde())).append(" ~ ").append(format.format(campaignVo.getCampaignEnddd())).toString());
////
////				p2Tag.setAttribute("class", "text-right mb-0");
////				p2Tag.setAttribute("style", "font-size: 0.7rem;");
////				p2Tag.setTextContent(new StringBuffer("created:").append(campaignVo.getRegDtime().format(DateTimeFormatter.ofPattern("yyyy/mm/dd"))).toString());
////				flexTag.appendChild(pTag);
////				flexTag.appendChild(spanTag);
////				p1Tag.appendChild(smallTag);
////
////				cardBody.appendChild(flexTag);
////				cardBody.appendChild(h6Tag);
////				cardBody.appendChild(p1Tag);
////				cardBody.appendChild(p2Tag);
////
////				cardTag.appendChild(scriptTag);
////				cardTag.appendChild(cardBody);
////				root.appendChild(cardTag);
////			}
////			doc.appendChild(root);
////
////
////			TransformerFactory xml_factory = TransformerFactory.newInstance();
////			StringWriter sw = new StringWriter();
////			Properties output = new Properties();
////			output.setProperty(OutputKeys.INDENT, "yes");
////			output.setProperty(OutputKeys.ENCODING, "EUC-KR");
////			Transformer transformer = xml_factory.newTransformer();
////			transformer.setOutputProperties(output);
////			transformer.transform(new DOMSource(doc), new StreamResult(sw));
////			xmlStr = sw.getBuffer ().toString ();
////			xmlStr = xmlStr.substring(xmlStr.indexOf("?>", 0)+4, xmlStr.length());
////
////			//LOGGER.debug("**" + xmlStr + "**");
////		} catch (ParserConfigurationException e) {
////			// TODO Auto-generated catch block
////		    throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
////		} catch (FactoryConfigurationError e) {
////			// TODO Auto-generated catch block
////		    throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
////		} catch (TransformerConfigurationException e) {
////			// TODO Auto-generated catch block
////		    throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
////		} catch (TransformerException e) {
////			// TODO Auto-generated catch block
////		    throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
////		}
////		return xmlStr;
////	}
////
//	/**
//	 * Http Post 통신을 수행하는 메소드
//	 * @param portUrl API URL
//	 * @param inputParams API 전송 파라메터
//	 * @param authStr API 인증정보
//	 * @param contentType 예 : "application/json"
//	 * @return String Rest API 수행결과 문자열
//	 * @exception ClientProtocolException, UnsupportedEncodingException, IOException, Exception
//	 * @see
//	 */
//	public static String httpPostRequest(String postUrl, String inputParams, String authStr, String contentType) throws Exception {
//		int status = 0;
//		String responseBody = "";
//		HttpResponse eloquaResponse = null;
//		try {
//			HttpClient httpclient = HttpClientBuilder.create().build();
//			HttpPost httpPost = new HttpPost(postUrl);
//
//			httpPost.setEntity(new StringEntity(inputParams, "UTF-8"));
//
//			byte[] authBytes;
//			authBytes = authStr.getBytes("UTF-8");
//			String auth = Base64.getEncoder().encodeToString(authBytes);
//
//			httpPost.setHeader("Authorization", "Basic " + auth);
//			httpPost.setHeader("Content-type", contentType);
//			httpPost.setHeader("X-Stream", "true");
//
//			LOGGER.info("POST : " + httpPost.getURI());
//
//			eloquaResponse = httpclient.execute(httpPost);
//			LOGGER.info("RESPONSE : " + eloquaResponse.getStatusLine());
//			status = eloquaResponse.getStatusLine().getStatusCode();
//
//			if(status != 204)
//				responseBody = EntityUtils.toString(eloquaResponse.getEntity(), "UTF-8");
//		} catch (ClientProtocolException cpe) {
//			LOGGER.error("API 접속중 Eloqua 내부 에러 발생 : " + cpe.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch (UnsupportedEncodingException uee) {
//			LOGGER.error("API 접속중 인증정보 에러 발생 : " + uee.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch(IOException ioe) {
//			LOGGER.error("API 접속중 네트워크 에러 발생 : " + ioe.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch(Exception ex) {
//			LOGGER.error("API 접속중 에러 발생 : " + ex.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		}
//		return responseBody;
//
//	}
//
//	/**
//	 * Http Post 통신을 수행하는 메소드
//	 * @param portUrl API URL
//	 * @param inputParams API 전송 파라메터
//	 * @param authStr API 인증정보
//	 * @param contentType 예 : "application/json"
//	 * @return String Rest API 수행결과 문자열
//	 * @exception ClientProtocolException, UnsupportedEncodingException, IOException, Exception
//	 * @see
//	 */
//	public static String httpPostNoAuthRequest(String postUrl, String inputParams, String contentType) throws Exception {
//		int status = 0;
//		String responseBody = "";
//		HttpResponse eloquaResponse = null;
//		try {
//			HttpClient httpclient = HttpClientBuilder.create().build();
//			HttpPost httpPost = new HttpPost(postUrl);
//
//			httpPost.setEntity(new StringEntity(inputParams, "UTF-8"));
//
//			byte[] authBytes;
////			authBytes = authStr.getBytes("UTF-8");
////			String auth = Base64.getEncoder().encodeToString(authBytes);
//
////			httpPost.setHeader("Authorization", "Basic " + auth);
//			httpPost.setHeader("Content-type", contentType);
////			httpPost.setHeader("X-Stream", "true");
//
//			LOGGER.info("POST : " + httpPost.getURI());
//
//			eloquaResponse = httpclient.execute(httpPost);
//			LOGGER.info("RESPONSE : " + eloquaResponse.getStatusLine());
//			status = eloquaResponse.getStatusLine().getStatusCode();
//
//			if(status != 204)
//				responseBody = EntityUtils.toString(eloquaResponse.getEntity(), "UTF-8");
//		} catch (ClientProtocolException cpe) {
//			LOGGER.error("API 접속중 Eloqua 내부 에러 발생 : " + cpe.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch (UnsupportedEncodingException uee) {
//			LOGGER.error("API 접속중 인증정보 에러 발생 : " + uee.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch(IOException ioe) {
//			LOGGER.error("API 접속중 네트워크 에러 발생 : " + ioe.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch(Exception ex) {
//			LOGGER.error("API 접속중 에러 발생 : " + ex.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		}
//		return responseBody;
//
//	}
//
//	/**
//	 * Http Post 통신을 수행하는 메소드
//	 * @param portUrl API URL
//	 * @param MultipartFile API 전송 파라메터
//	 * @param authStr API 인증정보
//	 * @return String Rest API 수행결과 문자열
//	 * @exception ClientProtocolException, UnsupportedEncodingException, IOException, Exception
//	 * @see
//	 */
//	public static String httpPostMultipartRequest(String postUrl, MultipartEntity entry, String authStr, String contentType) throws Exception {
//		int status = 0;
//		String responseBody = "";
//		HttpResponse response = null;
//		try {
//			HttpClient httpclient = HttpClientBuilder.create().build();
//			HttpPost httpPost = new HttpPost(postUrl);
//
//			httpPost.setEntity(entry);
//
//			byte[] authBytes;
//			authBytes = authStr.getBytes("UTF-8");
//			String auth = Base64.getEncoder().encodeToString(authBytes);
//
//			httpPost.setHeader("Authorization", "Basic " + auth);
//			//httpPost.setHeader("Content-type", contentType);
//			httpPost.setHeader("Accept-Charset", "UTF-8");
//			//httpPost.setHeader("X-Stream", "true");
//
//			LOGGER.info("Executing request " + httpPost.getRequestLine());
//
//			LOGGER.info("POST : " + httpPost.getURI());
//
//			response = httpclient.execute(httpPost);
//			LOGGER.info("RESPONSE : " + response.getStatusLine());
//			status = response.getStatusLine().getStatusCode();
//
//			if(status != 204)
//				responseBody = EntityUtils.toString(response.getEntity(), "UTF-8");
//		} catch (ClientProtocolException cpe) {
//			LOGGER.error("API 접속중 Eloqua 내부 에러 발생 : " + cpe.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch (UnsupportedEncodingException uee) {
//			LOGGER.error("API 접속중 인증정보 에러 발생 : " + uee.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch(IOException ioe) {
//			LOGGER.error("API 접속중 네트워크 에러 발생 : " + ioe.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		} catch(Exception ex) {
//			LOGGER.error("API 접속중 에러 발생 : " + ex.getLocalizedMessage());
////			throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//		}
//		return responseBody;
//
//	}
//
//	/**
//	 * Http Post 통신을 수행하는 메소드
//	 * @param postUrl API URL
//	 * @param inputParams API 전송 파라메터
//	 * @param Bearer 인증 방식
//	 * @param contentType 예 : "application/json"
//	 * @return String Rest API 수행결과 문자열
//	 * @exception ClientProtocolException, UnsupportedEncodingException, IOException, Exception
//	 * @see
//	 */
//	public static Map httpPostSendLineRequest(String postUrl, String inputParams, String authToken, String contentType) {
//
//	    Map result = new HashMap();
//		int status = 0;
//		String responseBody = "";
//		HttpResponse eloquaResponse = null;
//		try {
//			HttpClient httpclient = HttpClientBuilder.create().build();
//			HttpPost httpPost = new HttpPost(postUrl);
//
//			httpPost.setEntity(new StringEntity(inputParams, "UTF-8"));
//
//			httpPost.setHeader("Authorization", "Bearer " + authToken);
//			httpPost.setHeader("Content-type", contentType);
//
//			LOGGER.info("POST : " + httpPost.getURI());
//
//			eloquaResponse = httpclient.execute(httpPost);
//			LOGGER.info("RESPONSE : " + eloquaResponse.getStatusLine());
//			status = eloquaResponse.getStatusLine().getStatusCode();
//
//			if(status != 204)
//				responseBody = EntityUtils.toString(eloquaResponse.getEntity(), "UTF-8");
//			    result.put("responseBody", responseBody);
//			    result.put("status", status);
//		} catch (ClientProtocolException cpe) {
//			LOGGER.error("API 접속중 Eloqua 내부 에러 발생 : " + cpe.getLocalizedMessage());
//		} catch (UnsupportedEncodingException uee) {
//			LOGGER.error("API 접속중 인증정보 에러 발생 : " + uee.getLocalizedMessage());
//		} catch(IOException ioe) {
//			LOGGER.error("API 접속중 네트워크 에러 발생 : " + ioe.getLocalizedMessage());
//		} catch(Exception ex) {
//			LOGGER.error("API 접속중 에러 발생 : " + ex.getLocalizedMessage());
//		}
//		return result;
//
//	}
//
//	public static Map<String, Object> httpPostRequestReturnMap(String postUrl, String inputParams, String authStr, String contentType) throws Exception {
//	    Map<String, Object> resultMap = new HashMap<>();
//        int status = 0;
//        String responseBody = "";
//        HttpResponse eloquaResponse = null;
//        try {
//            HttpClient httpclient = HttpClientBuilder.create().build();
//            HttpPost httpPost = new HttpPost(postUrl);
//
//            httpPost.setEntity(new StringEntity(inputParams, "UTF-8"));
//
//            byte[] authBytes;
//            authBytes = authStr.getBytes("UTF-8");
//            String auth = Base64.getEncoder().encodeToString(authBytes);
//
//            httpPost.setHeader("Authorization", "Basic " + auth);
//            httpPost.setHeader("Content-type", contentType);
//            httpPost.setHeader("X-Stream", "true");
//
//            LOGGER.info("POST : " + httpPost.getURI());
//
//            eloquaResponse = httpclient.execute(httpPost);
//            LOGGER.info("RESPONSE : " + eloquaResponse.getStatusLine());
//            status = eloquaResponse.getStatusLine().getStatusCode();
//            responseBody = EntityUtils.toString(eloquaResponse.getEntity(), "UTF-8");
//
//            resultMap.put("responseBody", responseBody);
//            resultMap.put("status", status);
//
//        } catch (ClientProtocolException cpe) {
//            LOGGER.error("API 접속중 Eloqua 내부 에러 발생 : " + cpe.getLocalizedMessage());
////            throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//        } catch (UnsupportedEncodingException uee) {
//            LOGGER.error("API 접속중 인증정보 에러 발생 : " + uee.getLocalizedMessage());
////            throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//        } catch(IOException ioe) {
//            LOGGER.error("API 접속중 네트워크 에러 발생 : " + ioe.getLocalizedMessage());
////            throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//        } catch(Exception ex) {
//            LOGGER.error("API 접속중 에러 발생 : " + ex.getLocalizedMessage());
////            throw new BusinessException("서버 오류가 발생 했습니다.", ErrorCode.INTERNAL_SERVER_ERROR);
//        }
//        return resultMap;
//
//    }
//
//	/**
//	 * Http Get 통신을 수행하는 메소드
//	 * @param getUrl API URL
//	 * @param inputParams API 전송 파라메터
//	 * @param authStr API 인증정보
//	 * @param contentType 예 : "application/json"
//	 * @return String Rest API 수행결과 문자열
//	 * @exception ClientProtocolException, UnsupportedEncodingException, IOException, Exception
//	 * @see
//	 */
//	public static String httpGetRequest(String getUrl, String inputParams, String authStr, String contentType) {
//		int status = 0;
//		String responseBody = "";
//		HttpResponse eloquaResponse = null;
//		try {
//			HttpGet httpGet = new HttpGet(getUrl);
//			byte[] authBytes = authStr.getBytes("UTF-8");
//			String auth = Base64.getEncoder().encodeToString(authBytes);
//
//			httpGet.setHeader("Authorization", "Basic " + auth);
//			httpGet.setHeader("Content-type", contentType);
//			httpGet.setHeader("X-Stream", "true");
//
//			LOGGER.info("GET : " + httpGet.getURI());
//
//			HttpClient httpclient = HttpClientBuilder.create().build();
//			eloquaResponse = httpclient.execute(httpGet);
//			responseBody = EntityUtils.toString(eloquaResponse.getEntity(), "UTF-8");
//		} catch (ClientProtocolException cpe) {
//			LOGGER.error("API 접속중 Eloqua 내부 에러 발생 : " + cpe.getLocalizedMessage());
//		} catch (UnsupportedEncodingException uee) {
//			LOGGER.error("API 접속중 인증정보 에러 발생 : " + uee.getLocalizedMessage());
//		} catch(IOException ioe) {
//			LOGGER.error("API 접속중 네트워크 에러 발생 : " + ioe.getLocalizedMessage());
//		} catch(Exception ex) {
//			LOGGER.error("API 접속중 에러 발생 : " + ex.getLocalizedMessage());
//		}
//		return responseBody;
//
//	}
//
//	/**
//	 * Http Put 통신을 수행하는 메소드
//	 * @param putUrl API URL
//	 * @param inputParams API 전송 파라메터
//	 * @param authStr API 인증정보
//	 * @param contentType 예 : "application/json"
//	 * @return String Rest API 수행결과 문자열
//	 * @exception ClientProtocolException, UnsupportedEncodingException, IOException, Exception
//	 * @see
//	 */
//	public static String httpPutRequest(String putUrl, String inputParams, String authStr, String contentType) {
//		int status = 0;
//		StringBuffer responseBody = new StringBuffer();
//		HttpResponse eloquaResponse = null;
//		try {
//			CloseableHttpClient httpclient = HttpClients.createDefault();
//
//	        HttpPut httpPut = new HttpPut(putUrl);
//
//			byte[] authBytes = authStr.getBytes("UTF-8");
//			String auth = Base64.getEncoder().encodeToString(authBytes);
//
//			httpPut.setHeader("Authorization", "Basic " + auth);
//			httpPut.setHeader("Content-type", contentType);
//			httpPut.setHeader("X-Stream", "true");
//
//	        httpPut.setHeader("Accept", "application/json");
//	        httpPut.setHeader("Content-type", "application/json");
//
//	        StringEntity stringEntity = new StringEntity(inputParams.toString(), "UTF-8");
//	        httpPut.setEntity(stringEntity);
//	        LOGGER.info("Executing request " + httpPut.getRequestLine());
//
//	        eloquaResponse = httpclient.execute(httpPut);
//	        eloquaResponse.getStatusLine();
//	        BufferedReader br = new BufferedReader(new InputStreamReader((eloquaResponse.getEntity().getContent())));
//
//	        //Create the StringBuffer object and store the response into it.
//
//	        String line = "";
//	        while ((line = br.readLine()) != null) {
//	        	responseBody.append(line);
//	        }
//		} catch (ClientProtocolException cpe) {
//			LOGGER.error("API 접속중 Eloqua 내부 에러 발생 : " + cpe.getLocalizedMessage());
//		} catch (UnsupportedEncodingException uee) {
//			LOGGER.error("API 접속중 인증정보 에러 발생 : " + uee.getLocalizedMessage());
//		} catch(IOException ioe) {
//			LOGGER.error("API 접속중 네트워크 에러 발생 : " + ioe.getLocalizedMessage());
//		} catch(Exception ex) {
//			LOGGER.error("API 접속중 에러 발생 : " + ex.getLocalizedMessage());
//		}
//		LOGGER.info("HTTP PUT Request Body : " + inputParams);
//        LOGGER.info("HTTP PUT Response Body :" + responseBody.toString());
//		return responseBody.toString();
//
//	}
//
//	public static String httpRequestToString(HttpServletRequest request) throws Exception, IOException {
//		request.setCharacterEncoding("utf-8");
//
//        StringBuilder stringBuilder = new StringBuilder();
//        BufferedReader bufferedReader = null;
//
//        InputStream inputStream = request.getInputStream();
//        if (inputStream != null) {
//            bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
//            char[] charBuffer = new char[128];
//            int bytesRead = -1;
//            while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
//                stringBuilder.append(charBuffer, 0, bytesRead);
//            }
//        }
//        String requestBody = stringBuilder.toString();
//
//		return requestBody;
//	}
//
//
//	/**
//     * navigator.jsp용 화면이름/화면경로 조회
//     *
//     * @param ScreenListManageVO (요청된 url로 screenNm, screenSn을 검색한 결과물 (selectScreenPathByUrl)
//     * @param navigator.jsp 위에서 실행됨
//     * @return List<String>, size==2, list(0): scrinNm, list(1): scrinPath
//     * @throws Exception
//     */
////    public static List<String> selectScreenPath(final ScreenListManageVO vo) throws Exception {
////      List<String> ret = new ArrayList<String>();
////
////      if (vo != null) {
////        ret.add(vo.getScrinNm());
////        ret.add(vo.parseScrinPath());
////        return ret;
////      }
////
////      // vo가 null일경우 (DB에 없는 url이 들어왔을 경우) 화면명/경로 둘 다 Paradise로 설정
////      ret.add("Paradise");
////      ret.add("Paradise");
////
////      return ret;
////    }
//
//    public static boolean ftpFileTransfer(File file, String uuidFileName, String ftpHost, int ftpPort, String ftpId, String ftpPwd) throws Exception {
//    	FTPClient ftpClient = new FTPClient();
//    	boolean isSuccess = false;
//
//    	try {
//
//    		ftpClient.connect(ftpHost, ftpPort);
//    		ftpClient.login(ftpId, ftpPwd);
//    		int reply;
//    		reply = ftpClient.getReplyCode();
//    		LOGGER.error("FTP Connect reply Code :::" + reply);
//
//    		boolean directoryExisted = ftpClient.changeWorkingDirectory("\\promotion");
//
//    		if (!directoryExisted) {
//    			ftpClient.makeDirectory("\\promotion");
//    			ftpClient.changeWorkingDirectory("\\promotion");
//    		}
//
//    		LOGGER.error("FTP Working Directory :::" + ftpClient.printWorkingDirectory());
//
//    		ftpClient.enterLocalPassiveMode();
//    		ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
//    		ftpClient.setFileTransferMode(FTP.BINARY_FILE_TYPE);
//    		ftpClient.setControlEncoding("UTF-8");
//    		FileInputStream fis = null;
//    		fis = new FileInputStream(file);
//    		isSuccess = ftpClient.storeFile(uuidFileName, fis);
//
//    		if (isSuccess) {
//    			LOGGER.error("FTP 파일 업로드 성공");
//    		} else {
//    			LOGGER.error("FTP 파일 업로드 실패");
//    		}
//
//    		ftpClient.disconnect();
//
//    	} catch(Exception ex) {
//    		LOGGER.error("FTP 파일 전송 중 에러 발생 : " + ex.getLocalizedMessage());
//    	}
//
//    	return isSuccess;
//    }
//
//    /**
//     * navigator.jsp용 화면이름/화면경로 조회
//     *
//     * @param ScreenListManageVO (요청된 url로 screenNm, screenSn을 검색한 결과물 (selectScreenPathByUrl)
//     * @param navigator.jsp 위에서 실행됨
//     * @return List<String>, size==2, list(0): scrinNm, list(1): scrinPath
//     * @throws Exception
//     */
//    public static void setProperty(JSONObject eloquaCustParam, String key, Object value) {
//    	if(value.getClass() == BigDecimal.class) {
//			eloquaCustParam.appendField(key, String.valueOf(value));
//		} else if(value.getClass() == String.class) {
//			eloquaCustParam.appendField(key, (String) value);
//		} else if(value.getClass() == Timestamp.class) {
//			eloquaCustParam.appendField(key, ((Timestamp) value).getTime()/1000);
//		}
//    }
//
//    /**
//     * navigator.jsp용 화면이름/화면경로 조회
//     *
//     * @param ScreenListManageVO (요청된 url로 screenNm, screenSn을 검색한 결과물 (selectScreenPathByUrl)
//     * @param navigator.jsp 위에서 실행됨
//     * @return List<String>, size==2, list(0): scrinNm, list(1): scrinPath
//     * @throws Exception
//     */
//    public static void setFieldProperty(JSONObject eloquaCustParam, String key, Object value) {
//    	if(value == null) return;
//    	eloquaCustParam.appendField("id", key);
//    	if(value.getClass() == BigDecimal.class) {
//    		eloquaCustParam.appendField("value", String.valueOf(value));
//    	} else if(value.getClass() == String.class) {
//    		eloquaCustParam.appendField("value", (String) value);
//    	} else if(value.getClass() == Timestamp.class) {
//    		eloquaCustParam.appendField("value", ((Timestamp) value).getTime()/1000);
//    	}
//    }
//
//
//    /**
//     * navigator.jsp용 화면이름/화면경로 조회
//     *
//     * @param ScreenListManageVO (요청된 url로 screenNm, screenSn을 검색한 결과물 (selectScreenPathByUrl)
//     * @param navigator.jsp 위에서 실행됨
//     * @return List<String>, size==2, list(0): scrinNm, list(1): scrinPath
//     * @throws Exception
//     */
////    public static String makeComboJson(List<?> codeList) {
////        String id, title, upperCmid, currUpperId = "";
////        JSONArray arrParent = new JSONArray();
////        JSONObject parentObj = new JSONObject();
////
////        SimpleTargetCodeVO commentInfo = (SimpleTargetCodeVO) codeList.get(0);
////        id = (String) commentInfo.getUpperCmmnCd();
////        title = (String) commentInfo.getUpperCmmnNm();
////        upperCmid = "";
////        currUpperId = commentInfo.getUpperCmmnCd();
////        CommonUtil.setProperty(parentObj, "id", id);
////        CommonUtil.setProperty(parentObj, "title", title);
////        CommonUtil.setProperty(parentObj, "upperCmid", upperCmid);
////        arrParent.add(parentObj);
////
////        for(int i=0; i < codeList.size(); i++) {
////            commentInfo = (SimpleTargetCodeVO) codeList.get(i);
////
////            JSONObject innerObj = new JSONObject();
////            if(!currUpperId.equals(commentInfo.getUpperCmmnCd())) {
////                parentObj = new JSONObject();
////                currUpperId = commentInfo.getUpperCmmnCd();
////                id = (String) commentInfo.getUpperCmmnCd();
////                title = (String) commentInfo.getUpperCmmnNm();
////                upperCmid = "";
////                CommonUtil.setProperty(parentObj, "id", id);
////                CommonUtil.setProperty(parentObj, "title", title);
////                CommonUtil.setProperty(parentObj, "upperCmid", upperCmid);
////                arrParent.add(parentObj);
////            }
////
////            id = (String) commentInfo.getCmmnCd();
////            title = (String) commentInfo.getCmmnNm();
////            upperCmid = (String) commentInfo.getUpperCmmnCd();
////            CommonUtil.setProperty(innerObj, "id", id);
////            CommonUtil.setProperty(innerObj, "title", title);
////            CommonUtil.setProperty(innerObj, "upperCmid", upperCmid);
////            DocumentContext jsonContext = null;
////            String jsonPath = "";
////
////            JSONArray arrChild = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')]").toString());
////            if(arrChild.size() > 0) {
////                JSONArray arrSubs = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')].subs.[*]").toString());
////                if(arrSubs.size() > 0) {
////                    arrSubs.add(innerObj);
////                    jsonContext = JsonPath.parse(arrParent.toString());
////                    jsonPath = new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')]").toString();
////                    jsonContext = jsonContext.put(jsonPath, "subs", arrSubs);
////                    arrParent = jsonContext.json();
////                } else {
////                    JSONArray subs = new JSONArray();
////                    subs.add(innerObj);
////                    parentObj.appendField("subs", subs);
////                }
////            }
////
////        }
////
////        return arrParent.toString();
////    }
//
//    /**
//     * navigator.jsp용 화면이름/화면경로 조회
//     *
//     * @param ScreenListManageVO (요청된 url로 screenNm, screenSn을 검색한 결과물 (selectScreenPathByUrl)
//     * @param navigator.jsp 위에서 실행됨
//     * @return List<String>, size==2, list(0): scrinNm, list(1): scrinPath
//     * @throws Exception
//     */
////    public static String makeComboJson3Level(List<?> codeList) {
////        String id, title, upperCmid, currUpperId, topCmid, currTopId = "";
////        JSONArray arrParent = new JSONArray();
////        JSONObject parentObj = new JSONObject();
////        JSONObject level2Obj = new JSONObject();
////        JSONObject inner2ndObj, innerObj;
////        DocumentContext jsonContext = null;
////        String jsonPath = "";
////
////        SimpleTargetCodeVO commentInfo = (SimpleTargetCodeVO) codeList.get(0);
////        id = (String) commentInfo.getTopUpperCmmnCd();
////        title = (String) commentInfo.getTopUpperCmmnNm();
////        upperCmid = "";
////        currTopId = commentInfo.getTopUpperCmmnCd();
////        CommonUtil.setProperty(parentObj, "upperCmid", upperCmid);
////        CommonUtil.setProperty(parentObj, "title", title);
////        CommonUtil.setProperty(parentObj, "id", id);
////        arrParent.add(parentObj);
////
////        id = (String) commentInfo.getUpperCmmnCd();
////        title = (String) commentInfo.getUpperCmmnNm();
////        upperCmid = commentInfo.getTopUpperCmmnCd();
////        currUpperId = commentInfo.getUpperCmmnCd();
////        CommonUtil.setProperty(level2Obj, "upperCmid", upperCmid);
////        CommonUtil.setProperty(level2Obj, "title", title);
////        CommonUtil.setProperty(level2Obj, "id", id);
////        JSONArray firstSubs = new JSONArray();
////        firstSubs.add(level2Obj);
////        parentObj.appendField("subs", firstSubs);
////
////        for(int i=0; i < codeList.size(); i++) {
////            commentInfo = (SimpleTargetCodeVO) codeList.get(i);
////
////            if(!currTopId.equals(commentInfo.getTopUpperCmmnCd())) {
////                inner2ndObj = new JSONObject();
////                currTopId = commentInfo.getTopUpperCmmnCd();
////                id = (String) commentInfo.getTopUpperCmmnCd();
////                title = (String) commentInfo.getTopUpperCmmnNm();
////                topCmid = "";
////                CommonUtil.setProperty(inner2ndObj, "upperCmid", topCmid);
////                CommonUtil.setProperty(inner2ndObj, "title", title);
////                CommonUtil.setProperty(inner2ndObj, "id", id);
////                JSONArray arrChild = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$.[?(@.id == '").append(id).append("')]").toString());
////                if(arrChild.size() > 0) {
////                    JSONArray arrSubs = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$.[?(@.id == '").append(id).append("')].['subs']").toString());
////                    if(arrSubs.size() > 0) {
////                        arrSubs.add(inner2ndObj);
////                        jsonContext = JsonPath.parse(arrParent.toString());
////                        jsonPath = new StringBuffer().append("$.[?(@.id == '").append(id).append("')]").toString();
////                        jsonContext = jsonContext.put(jsonPath, "subs", arrSubs);
////                        arrParent = jsonContext.json();
////                    } else {
////                        parentObj.appendField("subs", inner2ndObj);
////                    }
////                } else {
////                    arrParent.add(inner2ndObj);
////                }
////            }
////
////            if(!currUpperId.equals(commentInfo.getUpperCmmnCd())) {
////                innerObj = new JSONObject();
////                currUpperId = commentInfo.getUpperCmmnCd();
////                id = (String) commentInfo.getUpperCmmnCd();
////                title = (String) commentInfo.getUpperCmmnNm();
////                upperCmid = commentInfo.getTopUpperCmmnCd();
////                CommonUtil.setProperty(innerObj, "upperCmid", upperCmid);
////                CommonUtil.setProperty(innerObj, "title", title);
////                CommonUtil.setProperty(innerObj, "id", id);
////                JSONArray arrChild = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$.[?(@.id == '").append(upperCmid).append("')]").toString());
////                if(arrChild.size() > 0) {
////                    JSONArray arrSubs = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$.[?(@.id == '").append(upperCmid).append("')].['subs'][0]").toString());
////                    if(arrSubs.size() > 0) {
////                        arrSubs.add(innerObj);
////                        jsonContext = JsonPath.parse(arrParent.toString());
////                        jsonPath = new StringBuffer().append("$.[?(@.id == '").append(upperCmid).append("')]").toString();
////                        jsonContext = jsonContext.put(jsonPath, "subs", arrSubs);
////                        arrParent = jsonContext.json();
////                    } else {
////                        JSONArray subs = new JSONArray();
////                        subs.add(innerObj);
////                        jsonContext = JsonPath.parse(arrParent.toString());
////                        jsonPath = new StringBuffer().append("$.[?(@.id == '").append(upperCmid).append("')]").toString();
////                        jsonContext = jsonContext.put(jsonPath, "subs", subs);
////                        arrParent = jsonContext.json();
////                    }
////                }
////            }
//
////            id = (String) commentInfo.getUpperCmmnCd();
////            title = (String) commentInfo.getUpperCmmnNm();
////            upperCmid = (String) commentInfo.getTopUpperCmmnCd();
////            CommonUtil.setProperty(innerObj, "upperCmid", upperCmid);
////            CommonUtil.setProperty(innerObj, "title", title);
////            CommonUtil.setProperty(innerObj, "id", id);
////
////            JSONArray arrChild = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$..[?(@.id == '").append(id).append("')]").toString());
////            if(arrChild.size() > 0) {
////                JSONArray arrSubs = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$..[?(@.id == '").append(id).append("')].subs.[*]").toString());
////                if(arrSubs.size() > 0) {
////                    arrSubs.add(innerObj);
////                    jsonContext = JsonPath.parse(arrParent.toString());
////                    jsonPath = new StringBuffer().append("$..[?(@.id == '").append(id).append("')]").toString();
////                    jsonContext = jsonContext.put(jsonPath, "subs", arrSubs);
////                    arrParent = jsonContext.json();
////                } else {
////                    JSONArray subs = new JSONArray();
////                    subs.add(innerObj);
////                    parentObj.appendField("subs", subs);
////                }
////            }
////            JSONObject inner3rddObj = new JSONObject();
////            id = (String) commentInfo.getCmmnCd();
////            title = (String) commentInfo.getCmmnNm();
////            upperCmid = (String) commentInfo.getUpperCmmnCd();
////            CommonUtil.setProperty(inner3rddObj, "upperCmid", upperCmid);
////            CommonUtil.setProperty(inner3rddObj, "title", title);
////            CommonUtil.setProperty(inner3rddObj, "id", id);
////
////            JSONArray arr2ndChild = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')]").toString());
////            if(arr2ndChild.size() > 0) {
////                JSONArray arr2ndSubs = JsonPath.parse(arrParent.toString()).read(new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')].subs.[*]").toString());
////                if(arr2ndSubs.size() > 0) {
////                    arr2ndSubs.add(inner3rddObj);
////                    jsonContext = JsonPath.parse(arrParent.toString());
////                    jsonPath = new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')]").toString();
////                    jsonContext = jsonContext.put(jsonPath, "subs", arr2ndSubs);
////                    arrParent = jsonContext.json();
////                } else {
////                    JSONArray subs = new JSONArray();
////                    subs.add(inner3rddObj);
////                    jsonContext = JsonPath.parse(arrParent.toString());
////                    jsonPath = new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')]").toString();
////                    jsonContext = jsonContext.put(jsonPath, "subs", subs);
////                    arrParent = jsonContext.json();
////                }
////            } else {
////                JSONArray subs = new JSONArray();
////                subs.add(inner3rddObj);
////                jsonContext = JsonPath.parse(arrParent.toString());
////                jsonPath = new StringBuffer().append("$..[?(@.id == '").append(upperCmid).append("')]").toString();
////                jsonContext = jsonContext.put(jsonPath, "subs", subs);
////                arrParent = jsonContext.json();
////            }
////
////        }
////
////        return arrParent.toString();
////    }
//
//    public static String getStringParameterEncode(HttpServletRequest request, String paramName, String defaultValue) throws UnsupportedEncodingException {
//        String s = request.getParameter(paramName);
//
//        return isNullString(s) == true ? defaultValue : URLDecoder.decode(s, "UTF-8");
//    }
//
//    public static boolean isNullString(Object o) {
//        if (o == null) {
//            return true;
//        }
//
//        String s = String.valueOf(o);
//        if ("null".equals(s) || s.trim().length() < 1) {
//            return true;
//        }
//
//        return false;
//    }
//
//    public static void autoSizeColumns(Workbook workbook) {
//        int numberOfSheets = workbook.getNumberOfSheets();
//        for (int i = 0; i < numberOfSheets; i++) {
//            Sheet sheet = workbook.getSheetAt(i);
//            if (sheet.getPhysicalNumberOfRows() > 0) {
//                Row row = sheet.getRow(sheet.getFirstRowNum());
//                Iterator<Cell> cellIterator = row.cellIterator();
//                while (cellIterator.hasNext()) {
//                    Cell cell = cellIterator.next();
//                    int columnIndex = cell.getColumnIndex();
//                    sheet.autoSizeColumn(columnIndex);
//                }
//            }
//        }
//    }
//}
