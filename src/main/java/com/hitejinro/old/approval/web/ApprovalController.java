/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.hitejinro.old.approval.web;

import com.hitejinro.old.approval.service.ApprovalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Class Name : FileAttachController.java
 * @Description : File Attach Controller Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.07.28  JWJ           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@RequestMapping("/approval")
@Controller
public class ApprovalController {

    /** approvalService */
    @Resource(name = "approvalService")
    private ApprovalService approvalService;

    public static final int BUFF_SIZE = 2048;

    private static final Logger logger = LoggerFactory.getLogger(ApprovalController.class);

//    @Value("#{environment['approval_contentType']}")
//    private String approval_contentType;
//
//    @Value("#{environment['approval_dev_api_url']}")
//    private String approval_dev_api_url;
//
//    @Value("#{environment['approval_prd_api_url']}")
//    private String approval_prd_api_url;

	/**
	 * 전자결제 상신 모듈
	 * @param model
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
    @RequestMapping(value = "/sendApproval.do")
    public ModelAndView sendApproval(ModelMap model,HttpServletRequest request, HttpServletResponse response) throws Exception {
    	ModelAndView mav = new ModelAndView("jsonView");
//
//    	JSONObject paramObj = new JSONObject();
//    	JSONObject headerObj = new JSONObject();
//    	JSONObject parameterObj = new JSONObject();
//    	JSONObject preDatasObj = new JSONObject();
//
//    	String svrType = request.getParameter("svrType");
//    	String approvalUrl;
//    	if(svrType.equals("prd")) {
//    		approvalUrl = approval_prd_api_url;
//    	} else {
//    		approvalUrl = approval_dev_api_url;
//    	}
//    	String apprslYear = request.getParameter("apprslYear");
//    	String apprslSn = request.getParameter("apprslSn");
//    	String hqBhfSeCd = request.getParameter("hqBhfSeCd");
//
//    	String sanctnSn = request.getParameter("sanctnSn");
//    	String txID = request.getParameter("txID");
//    	String reqID = request.getParameter("reqID");
//    	String userID = request.getParameter("userID");
//
//    	String systemID = request.getParameter("systemID");
//    	String formKey = request.getParameter("formKey");
//    	String reqDt = request.getParameter("reqDt");
//
//    	String subject = request.getParameter("subject");
//    	String reqEmpNo = request.getParameter("reqEmpNo");
//    	String reqDeptCode = request.getParameter("reqDeptCode");
//    	String chgEmpNo = request.getParameter("chgEmpNo");
//    	String chgDeptCode = request.getParameter("chgDeptCode");
//    	String receiveDeptCode = request.getParameter("receiveDeptCode");
//
//    	String htmlContents = request.getParameter("htmlContents");
//    	String htmlContentUrl = "https://rvsdev.hitejinro.com/approval/viewApprovalContent.do?" +
//    			"apprslYear=" + apprslYear +
//    			"&apprslSn=" + apprslSn +
//    			"&hqBhfSeCd=" + hqBhfSeCd +
//    			"&sanctnSn=" + sanctnSn;
//
//    	headerObj.put("apprslYear", apprslYear);
//    	headerObj.put("apprslSn", apprslSn);
//    	headerObj.put("hqBhfSeCd", hqBhfSeCd);
//
//    	headerObj.put("txID", txID);
//    	headerObj.put("reqID", reqID);
//    	headerObj.put("userID", userID);
//    	headerObj.put("systemID", systemID);
//    	headerObj.put("formKey", formKey);
//    	headerObj.put("reqDt", reqDt);
//
//    	parameterObj.put("subject", subject);
//    	parameterObj.put("reqEmpNo", reqEmpNo);
//    	parameterObj.put("reqDeptCode", reqDeptCode);
//    	parameterObj.put("chgEmpNo", chgEmpNo);
//    	parameterObj.put("chgDeptCode", chgDeptCode);
//    	parameterObj.put("receiveDeptCode", receiveDeptCode);
//
//    	preDatasObj.put("html", htmlContentUrl);
//    	System.out.println("htmlContentUrl=>" +htmlContentUrl);
//    	paramObj.put("header", headerObj);
//    	paramObj.put("parameter", parameterObj);
//    	paramObj.put("preDatas", preDatasObj);
//
//    	String encodeResult = URLEncoder.encode(paramObj.toString(), "UTF-8");
//
//    	String strResponse = CommonUtil.httpPostNoAuthRequest(approvalUrl, encodeResult, approval_contentType);
//
//    	JsonElement element = new Gson().fromJson(strResponse, JsonElement.class);
//    	JsonObject header = element.getAsJsonObject().getAsJsonObject("header");
//    	JsonObject parameter = element.getAsJsonObject().getAsJsonObject("parameter");
//
//    	ApprovalEntity appvalInfo = new ApprovalEntity();
//    	appvalInfo.setApprslYear(apprslYear);
//    	appvalInfo.setApprslSn(apprslSn);
//    	appvalInfo.setHqBhfSeCd(hqBhfSeCd);
//
//    	appvalInfo.setSanctnSn(sanctnSn);
//    	appvalInfo.setTrnscId(txID);
//
//    	appvalInfo.setSanctnFormatCd(formKey);
//    	appvalInfo.setDocSj(subject);
//
//    	appvalInfo.setIntrfcId(reqID);
//    	appvalInfo.setChargerDeptCd(chgDeptCode);
//    	appvalInfo.setRecptnSysId(systemID);
//    	//최종 결재자 여부는 나중에 추가 업데이트 항목
//    	appvalInfo.setSuccesAtcd(header.get("resDetailCode").getAsString());
//    	appvalInfo.setErrorDetailDtls(header.get("resDetialMsg").getAsString());
//    	appvalInfo.setTrnsmisSttus(header.get("resFlag").getAsString());
//
//    	appvalInfo.setDrafterDeptCd(reqDeptCode);
//    	appvalInfo.setDrafterEmpno(reqEmpNo);
//    	//결재자 사번   나중에 추가 업데이트 항목
//    	//결재일시  나중에 추가 업데이트 항목
//    	appvalInfo.setSanctnDocBdt(htmlContents);
//    	appvalInfo.setSanctnDocUrl(parameter.get("url").getAsString());
//    	// 결재_상태 나중에 추가 업데이트 항목
//    	appvalInfo.setChargerEmpno(chgEmpNo);
//
////    	appvalInfo.setRecptnDeptCd(recptnDeptCd);	수신부서코드
//    	appvalInfo.setRequstSysId(userID);
//    	appvalInfo.setRequstDt(reqDt);
//    	// 결재자_사원_번호 나중에 추가 업데이트 항목
//    	appvalInfo.setRspnsDt(header.get("resDt").getAsString());
//    	appvalInfo.setRegistEmplNo(reqEmpNo);
//    	// 등록일시 sysdate
//    	appvalInfo.setRegistEmplIp("0.0.0.0");
//
//    	// 수정_사원_번호 나중에 추가 업데이트 항목
//    	// 수정일시 sysdate 나중에 추가 업데이트 항목
//
//    	int retCnt = approvalService.insertApprovalInfo(appvalInfo);

    	return mav.addObject("sendResult", null);
    }

    /**
     * 전자결제 상태 수신 모듈
     * @param model
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/rcvApprovalStatus.do", method = RequestMethod.POST, produces="application/json;charset=UTF-8")
    public ModelAndView rcvApprovalStatus(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	ModelAndView mav = new ModelAndView("jsonView");
//    	StringBuilder sb = new StringBuilder();
////    	String updtEmplNo =(String) request.getSession().getAttribute("updtEmplNo");
//    	String updtEmplNo = "108231";
//
//    	try(BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream(),"utf-8"))){
//    	    String responseLine = null;
//    	    while((responseLine = br.readLine()) != null) {
//    			sb.append(responseLine.trim());
//    	    }
//    	}
//
//    	JSONObject resObject = new JSONObject();
//    	JSONObject headerObject = new JSONObject();
//    	SimpleDateFormat  formatter = new SimpleDateFormat("yyyyMMddHH24MMSS");
//        Date today = new Date();
//        String date =  formatter.format(today);
//
//        headerObject.put("resDt", date);
//
//    	try {
//	    	JsonElement element = new Gson().fromJson(sb.toString(), JsonElement.class);
//
//	    	ApprovalEntity appvalInfo = new ApprovalEntity();
//
//	    	JsonObject header = element.getAsJsonObject().getAsJsonObject("header");
////	    	System.out.println("header==>" + header.toString());
//
//	    	JsonObject parameter = element.getAsJsonObject().getAsJsonObject("parameter");
////	    	System.out.println("parameter==>" + parameter.toString());
//
//	    	JsonObject preDatas = element.getAsJsonObject().getAsJsonObject("preDatas");
////	    	System.out.println("preDatas==>" + preDatas.toString());
//
//	    	String docStatus = parameter.get("docStatus").getAsString().equals("50") ? "Y" : "N";
//
//	    	//조건
//	    	appvalInfo.setTrnscId(header.get("txID").getAsString());
//	    	appvalInfo.setIntrfcId(header.get("reqID").getAsString());
//	    	appvalInfo.setRequstSysId(header.get("userID").getAsString());
//	    	appvalInfo.setRecptnSysId(header.get("systemID").getAsString());
//	    	appvalInfo.setRequstDt(header.get("reqDt").getAsString());
//
//	    	appvalInfo.setBhfLastSanctnerAt(docStatus);
//	    	appvalInfo.setTrnsmisSttus(parameter.get("docStatus").getAsString());
//	    	appvalInfo.setSanctnerEmpno(parameter.get("aprvEmpno").getAsString());
//	    	appvalInfo.setSanctnDt(parameter.get("aprvDt").getAsString());
//	    	appvalInfo.setSanctnDocUrl(parameter.get("url").getAsString());
//	    	appvalInfo.setSanctnSttus(parameter.get("docStatus").getAsString());
//	    	appvalInfo.setUpdtEmplNo(updtEmplNo);
//
//	    	int applyCnt = approvalService.updateApprovalInfo(appvalInfo);
//
//	    	if(applyCnt > 0) {
//	    		headerObject.put("resFlag", "S");
//	    		headerObject.put("resDetailCode", "S00");
//	    		headerObject.put("resDetialMsg", "");
//	    	} else {
//	    		headerObject.put("resFlag", "E");
//	    		headerObject.put("resDetailCode", "E01");
//	    		headerObject.put("resDetialMsg", "No Data Updated");
//	    	}
//    	} catch(SQLException e) {
//    		headerObject.put("resFlag", "E");
//    		headerObject.put("resDetailCode", "E01");
//    		headerObject.put("resDetialMsg", e.getMessage());
//    	} catch(IOException e) {
//    		headerObject.put("resFlag", "E");
//    		headerObject.put("resDetailCode", "E02");
//    		headerObject.put("resDetialMsg", e.getMessage());
//    	} catch(CryptoException e) {
//    		headerObject.put("resFlag", "E");
//    		headerObject.put("resDetailCode", "E03");
//    		headerObject.put("resDetialMsg", e.getMessage());
//    	} catch(IllegalArgumentException e) {
//    		headerObject.put("resFlag", "E");
//    		headerObject.put("resDetailCode", "E04");
//    		headerObject.put("resDetialMsg", e.getMessage());
//    	} catch(ParseException e) {
//    		headerObject.put("resFlag", "E");
//    		headerObject.put("resDetailCode", "E05");
//    		headerObject.put("resDetialMsg", e.getMessage());
//    	} catch(Exception e) {
//    		headerObject.put("resFlag", "E");
//    		headerObject.put("resDetailCode", "E99");
//    		headerObject.put("resDetialMsg", e.getMessage());
//    	}
//
//    	resObject.put("header", headerObject);

    	return mav.addObject("data", null);
    }


    /**
     * 전자결제 본문 제공
     * @param model
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/viewApprovalContent.do", method = RequestMethod.GET)
    public String viewApprovalContent(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String apprslYear = request.getParameter("apprslYear");
    	String apprslSn = request.getParameter("apprslSn");
    	String hqBhfSeCd = request.getParameter("hqBhfSeCd");
    	String sanctnSn = request.getParameter("sanctnSn");


    	return "approval/viewApprovalContent";
    }

}
