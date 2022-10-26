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
package com.hitejinro.old.es01.web;

import com.hitejinro.old.es01.model.Es01BaseEntity;
import com.hitejinro.old.es01.model.Es01SearchEntity;
import com.hitejinro.old.es01.service.Es01Service;
import com.hitejinro.old.es02.model.Es02SearchEntity;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

@RequestMapping("/es01")
@Controller
@RequiredArgsConstructor
public class Es01Controller {

//    /** svgService */
//    @Resource(name = "svgService")
//    private SvgService svgService;
	private final Es01Service es01Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es01Controller.class);
	
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
    /*
    @RequestMapping(value = "/sendApproval.do")
    public ModelAndView sendApproval(ModelMap model,HttpServletRequest request, HttpServletResponse response) throws Exception {
    	ModelAndView mav = new ModelAndView("jsonView");
    	
    	JSONObject paramObj = new JSONObject();
    	JSONObject headerObj = new JSONObject();
    	JSONObject parameterObj = new JSONObject();
    	JSONObject preDatasObj = new JSONObject();

    	String svrType = request.getParameter("svrType");
    	String approvalUrl;
    	if(svrType.equals("prd")) {
    		approvalUrl = approval_prd_api_url;
    	} else {
    		approvalUrl = approval_dev_api_url;
    	}
    	
    	headerObj.put("txID", request.getParameter("txID"));
    	headerObj.put("reqID", request.getParameter("reqID"));
    	headerObj.put("userID", request.getParameter("userID"));
    	headerObj.put("systemID", request.getParameter("systemID"));
    	headerObj.put("formKey", request.getParameter("formKey"));
    	headerObj.put("reqDt", request.getParameter("reqDt"));
    	
    	parameterObj.put("subject", request.getParameter("subject"));
    	parameterObj.put("reqEmpNo", request.getParameter("reqEmpNo"));
    	parameterObj.put("reqDeptCode", request.getParameter("reqDeptCode"));
    	parameterObj.put("chgEmpNo", request.getParameter("chgEmpNo"));
    	parameterObj.put("chgDeptCode", request.getParameter("chgDeptCode"));
    	parameterObj.put("receiveDeptCode", request.getParameter("receiveDeptCode"));

    	preDatasObj.put("html", request.getParameter("htmlContents"));

    	paramObj.put("header", headerObj);
    	paramObj.put("parameter", parameterObj);
    	paramObj.put("preDatas", preDatasObj);
    	
    	String encodeResult = URLEncoder.encode(paramObj.toString(), "UTF-8");

    	String strResponse = CommonUtil.httpPostNoAuthRequest(approvalUrl, encodeResult, approval_contentType);
    	
    	return mav.addObject("sendResult", strResponse);
    }
    */
    @RequestMapping(value = "/sampleList1.do")
	public String sampleList1(@ModelAttribute("searchVO") Es01SearchEntity searchVO, ModelMap model) throws Exception {
		//콤보박스 데이터 가지고 오기 
		
		// 부서명 가지고 오기 
		List<?> buseoList = es01Service.buseoList(searchVO);
		model.addAttribute("buseoList", buseoList);
		System.out.println("buseoList==>"+buseoList);
		
		
		// 담보콤보 가지고 오기 
		List<?> damboList = es01Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);
		
		// 결재진행사항  가지고 오기 
		List<?> procList = es01Service.procList(searchVO);
		model.addAttribute("procList", procList);

		if(searchVO.getSearchSecCode().equals("%")) {
			searchVO.setSearchSecCode("");
		}
		if(searchVO.getJumCode().equals("%")) {
			searchVO.setJumCode("");
		}
		if(searchVO.getProcDiv().equals("%")) {
			searchVO.setProcDiv("");
		}

		String startDt=searchVO.getStartDt();
		String endDt=searchVO.getEndDt();
		
		if(searchVO.getStartDt().isEmpty()) {
			startDt = es01Service.selectstartDt(searchVO);
			searchVO.setStartDt(startDt);
			model.addAttribute("startDt", startDt);
			
			
			endDt = es01Service.selectendDt(searchVO);
			searchVO.setEndDt(endDt);
			model.addAttribute("endDt", endDt);
		}else {
			model.addAttribute("startDt", startDt);
			searchVO.setStartDt(startDt);
		}
		//목록 리스트 
		List<?> sampleList = es01Service.sampleList1(searchVO);
		model.addAttribute("sampleList", sampleList);
		System.out.println("sampleList==>"+sampleList);
		return "es01/sampleList1";
	}
    
    @RequestMapping(value = "/es01_w01.do")
	public String es01_w01(@ModelAttribute("searchVO") Es01SearchEntity searchVO, ModelMap model) throws Exception {
		//콤보박스 데이터 가지고 오기 
		
		// 부서명 가지고 오기 
		List<?> buseoList = es01Service.buseoList(searchVO);
		model.addAttribute("buseoList", buseoList);
		System.out.println("buseoList==>"+buseoList);
		
		
		// 담보콤보 가지고 오기 
		List<?> damboList = es01Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);
		
		// 결재진행사항  가지고 오기 
		List<?> procList = es01Service.procList(searchVO);
		model.addAttribute("procList", procList);

		if(searchVO.getSearchSecCode().equals("%")) {
			searchVO.setSearchSecCode("");
		}
		if(searchVO.getJumCode().equals("%")) {
			searchVO.setJumCode("");
		}
		if(searchVO.getProcDiv().equals("%")) {
			searchVO.setProcDiv("");
		}

		String startDt=searchVO.getStartDt();
		String endDt=searchVO.getEndDt();
		
		if(searchVO.getStartDt().isEmpty()) {
			startDt = es01Service.selectstartDt(searchVO);
			searchVO.setStartDt(startDt);
			model.addAttribute("startDt", startDt);
			
			
			endDt = es01Service.selectendDt(searchVO);
			searchVO.setEndDt(endDt);
			model.addAttribute("endDt", endDt);
		}else {
			model.addAttribute("startDt", startDt);
			searchVO.setStartDt(startDt);
		}
		model.addAttribute("menu_id", searchVO.getMenu_id());
		//목록 리스트 
		List<?> sampleList = es01Service.sampleList1(searchVO);
		model.addAttribute("sampleList", sampleList);

		return "es01/es01_w01";
	}
    
    // 신규 등록 팝업
    @RequestMapping(value = "/es01_w01_new.do")
   	public String es01_w01_new(
   			@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO,
   			ModelMap model) throws Exception {
   		
	    	//00_주류타입
			List<?> liquorType = es01Service.selectLiquorType(es01VO);
			model.addAttribute("liquorType", liquorType);
	
			//00_담보콤보 가지고 오기 
			List<?> damboList = es01Service.selectAllNotDamboList(searchVO);
			model.addAttribute("damboList", damboList);
			
			//00_감정구분
			List<?> appraisalList = es01Service.appraisalList(es01VO);
			model.addAttribute("appraisalList", appraisalList);
		
   		return "es01/es01_w01_new";
   	}
    // 아파트 신규 등록
    @RequestMapping(value = "/es01_w02_edit.do")
   	public String es01_w02_edit(
   			@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO,
   			ModelMap model) throws Exception {
   		
	    	String targetSeq=searchVO.getTargetSeq();
			String targetYyyy=searchVO.getTargetYyyy();
			String searchSeq="";
			String searchYyyy="";
			String tempSeqCode=searchVO.getSecCode();
		
			if(targetSeq==""||targetSeq=="null"||targetSeq==null) {
				
			}else {
			       es01VO.setSearchSeq(targetSeq);
			       es01VO.setSearchYyyy(targetYyyy);
			       searchVO.setSearchSeq(targetSeq);
			       searchVO.setSearchYyyy(targetYyyy);
			      
			}
			 es01VO.setSecCode(tempSeqCode);
			 
			// 결재진행사항  가지고 오기 
				List<?> procList = es01Service.procList(searchVO);
				model.addAttribute("procList", procList);
				
				//00_주류타입
				List<?> liquorType = es01Service.selectLiquorType(es01VO);
				model.addAttribute("liquorType", liquorType);
				
				//00_담보콤보 가지고 오기 
				List<?> damboList = es01Service.damboList(searchVO);
				model.addAttribute("damboList", damboList);
				
				//00_부서명
				List<?> buseoList = es01Service.buseoList(searchVO);
				model.addAttribute("buseoList", buseoList);
				
				//00_크로스
				List<?> selectCrossList = es01Service.selectCrossList(es01VO);
				model.addAttribute("selectCrossList", selectCrossList);
				
				//00_사진구분
				List<?> selectPhotoClassificationList = es01Service.selectPhotoClassificationList(es01VO);
				model.addAttribute("selectPhotoClassificationList", selectPhotoClassificationList);
				
				//00_가입대보증금적용지역
				List<?> selectRegDepsitAppAreaList = es01Service.selectRegDepsitAppAreaList(es01VO);
				model.addAttribute("selectRegDepsitAppAreaList", selectRegDepsitAppAreaList);
				
				//00_코드_최고채권액
				List<?> selectMaxBondAmountList = es01Service.selectMaxBondAmountList(es01VO);
				model.addAttribute("selectMaxBondAmountList", selectMaxBondAmountList);
				
				//00_코드_순위
				List<?> selectRankingCodeList = es01Service.selectRankingCodeList(es01VO);
				model.addAttribute("selectRankingCodeList", selectRankingCodeList);
				
				//00_코드_권리의내용
				List<?> selectContentRightList = es01Service.selectContentRightList(es01VO);
				model.addAttribute("selectContentRightList", selectContentRightList);
				
				//00_코드_각구의일련번호
				List<?> selectSerialNumberGuList = es01Service.selectSerialNumberGuList(es01VO);
				model.addAttribute("selectSerialNumberGuList", selectSerialNumberGuList);
				
				//00_코드_전유부분의위치
				List<?> selectJeonyuPartLocationList = es01Service.selectJeonyuPartLocationList(es01VO);
				model.addAttribute("selectJeonyuPartLocationList", selectJeonyuPartLocationList);
				
				//00_코드_아파트단지규모
				List<?> selectApartmentComplexSizeList = es01Service.selectApartmentComplexSizeList(es01VO);
				model.addAttribute("selectApartmentComplexSizeList", selectApartmentComplexSizeList);

				//00_코드_전유부분의면적  아파트 -- 기존 전유부분의면적 sql이 상이 하여 추가  
				List<?> selectJeonYuPartAreaAptList = es01Service.selectJeonYuPartAreaAptList(es01VO);
				model.addAttribute("selectJeonYuPartAreaAptList", selectJeonYuPartAreaAptList);
				
				//00_건축물의경과년도 - 기존 전유부분의면적 sql이 상이 하여 추가  
				List<?> selectBuildTransitYearAptList = es01Service.selectBuildTransitYearAptList(es01VO);
				model.addAttribute("selectBuildTransitYearAptList", selectBuildTransitYearAptList);
				
				//00_점유자의 형태 - 기존 전유부분의면적 sql이 상이 하여 추가  
				List<?> selectFormOccpantAptList = es01Service.selectFormOccpantAptList(es01VO);
				model.addAttribute("selectFormOccpantAptList", selectFormOccpantAptList);
				
				//00_인테리어비용
				List<?> selectInteriorCostsList = es01Service.selectInteriorCostsList(es01VO);
				model.addAttribute("selectInteriorCostsList", selectInteriorCostsList);
				
				//00_지목
				List<?> selectLandUseZoneList = es01Service.selectLandUseZoneList(es01VO);
				model.addAttribute("selectLandUseZoneList", selectLandUseZoneList);
				
				//00_지붕
				List<?> selectRoofTypeList = es01Service.selectRoofTypeList(es01VO);
				model.addAttribute("selectRoofTypeList", selectRoofTypeList);
				
				//00_구조
				List<?> selectBuildingStructureList = es01Service.selectBuildingStructureList(es01VO);
				model.addAttribute("selectBuildingStructureList", selectBuildingStructureList);
				
				//00_경매금액리스트
				List<?> selectAuctionCostList = es01Service.selectAuctionCostList(es01VO);
				model.addAttribute("selectAuctionCostList", selectAuctionCostList);
				
				//배당표_배당금_계산
				List<?> selectDividendTableCalculationList = es01Service.selectDividendTableCalculationList(es01VO);
				model.addAttribute("selectDividendTableCalculationList", selectDividendTableCalculationList);
				
				//배당표_주택임차보증금의계산
				List<?> selectculationHousingRentalDepositList = es01Service.selectculationHousingRentalDepositList(es01VO);
				model.addAttribute("selectculationHousingRentalDepositList", selectculationHousingRentalDepositList);
				
				//배당표_주택임차보증금계산_total
				List<?> selectDividendTableMCalculationList = es01Service.selectDividendTableMCalculationList(es01VO);
				model.addAttribute("selectDividendTableMCalculationList", selectDividendTableMCalculationList);
				
				//99_평가구분
				List<?> selectEvaluationClassificationList = es01Service.selectEvaluationClassificationList(es01VO);
				model.addAttribute("selectEvaluationClassificationList", selectEvaluationClassificationList);
				
				//select box 값 가지고 오기 end 
				
				/*Page 1.공통 보고서 조회 start*/

				//공통보고서_당사설정액
				List<?> selectOurSetAmontList = es01Service.selectOurSetAmontList(es01VO);
				model.addAttribute("selectOurSetAmontList", selectOurSetAmontList);
				
				//공통보고서_당사설정액JB
				List<?> selectOurSetJBAmontList = es01Service.selectOurSetJBAmontList(es01VO);
				model.addAttribute("selectOurSetJBAmontList", selectOurSetJBAmontList);
				
				//공통보고서_초과부족설정액
				List<?> selectCGBJAmontList = es01Service.selectCGBJAmontList(es01VO);
				model.addAttribute("selectCGBJAmontList", selectCGBJAmontList);
				
				//공통보고서_초과부족설정액JB
				List<?> selectCGBJAmontJBList = es01Service.selectCGBJAmontJBList(es01VO);
				model.addAttribute("selectCGBJAmontJBList", selectCGBJAmontJBList);

				//공통보고서_최고최저
				List<?> selectCGBJHighRowList = es01Service.selectCGBJHighRowList(es01VO);
				model.addAttribute("selectCGBJHighRowList", selectCGBJHighRowList);
				
				//공통보고서_최고최저JB
				List<?> selectCGBJHighRowJBList = es01Service.selectCGBJHighRowJBList(es01VO);
				model.addAttribute("selectCGBJHighRowJBList", selectCGBJHighRowJBList);
				
				//공통보고서_보정표
				List<?> selectCorrectionTableList = es01Service.selectCorrectionTableList(es01VO);
				model.addAttribute("selectCorrectionTableList", selectCorrectionTableList);
				
				//공통보고서_보정표 JB
				List<?> selectCorrectionTableJBList = es01Service.selectCorrectionTableJBList(es01VO);
				model.addAttribute("selectCorrectionTableJBList", selectCorrectionTableJBList);
				
				//공통보고서_보정표JB
				/*Page 1.공통 보고서 조회 end*/
				//담보마스터  보류
				List<?> selectCollateralMasterList = es01Service.selectCollateralMasterList(es01VO);
				model.addAttribute("selectCollateralMasterList", selectCollateralMasterList);
				
				//prt_01_입력표_집합건물
				List<?> selectCollateralBuildingList = es01Service.selectCollateralBuildingList(es01VO);
				model.addAttribute("selectCollateralBuildingList", selectCollateralBuildingList);
				
				//prt_01_입력표_규제사항개관
				List<?> selectRegulatoryAffairsOfficerList = es01Service.selectRegulatoryAffairsOfficerList(es01VO);
				model.addAttribute("selectRegulatoryAffairsOfficerList", selectRegulatoryAffairsOfficerList);
				
				//본건사례
				List<?> selectPriceAptList = es01Service.selectPriceAptList(es01VO);
				model.addAttribute("selectPriceAptList", selectPriceAptList);
						
				//가격사례_M
				List<?> selectPriceCaseMList = es01Service.selectPriceCaseMList(es01VO);
				model.addAttribute("selectPriceCaseMList", selectPriceCaseMList);
				
				//가격사례_D
				List<?> selectPriceCaseDList = es01Service.selectPriceCaseDList(es01VO);
				model.addAttribute("selectPriceCaseDList", selectPriceCaseDList);
				
				//감정가_경매사례 
				List<?> selectPriceAuctionList = es01Service.selectPriceAuctionList(es01VO);
				model.addAttribute("selectPriceAuctionList", selectPriceAuctionList);
				
				//감정가_감정에 관한 사항
				List<?> selectAppraiseMinMaxList = es01Service.selectAppraiseMinMaxList(es01VO);
				model.addAttribute("selectAppraiseMinMaxList", selectAppraiseMinMaxList);
				
				//낙찰가율보정표 
				List<?> selectSuccessfulBidRateTableList = es01Service.selectSuccessfulBidRateTableList(es01VO);
				model.addAttribute("selectSuccessfulBidRateTableList", selectSuccessfulBidRateTableList);
		
   		return "es01/es01_w02_edit";
   	}
   // 거래처찾기 팝업
    @RequestMapping(value = "/es01_w02_p04.do")
   	public String es01_w02_p04(
   			@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO,
   			ModelMap model) throws Exception {
   		
    	String searchSangho =es01VO.getSearchSangho();
		
		if(searchSangho!="") {
			List<?> selectSanghoList = es01Service.selectSanghoList(es01VO);
			model.addAttribute("selectSanghoList", selectSanghoList);
			
		}else {
			model.addAttribute("selectSanghoList", "");
		}
		
   		return "es01/es01_w02_p04";
   	}
 // 아파트 View
    @RequestMapping(value = "/es01_w02.do")
   	public String es01_w02(
   			@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO,
   			ModelMap model) throws Exception {
   		
    
		// 결재진행사항  가지고 오기 
		List<?> procList = es01Service.procList(searchVO);
		model.addAttribute("procList", procList);
		
		//00_주류타입
		List<?> liquorType = es01Service.selectLiquorType(es01VO);
		model.addAttribute("liquorType", liquorType);
		
		//00_담보콤보 가지고 오기 
		List<?> damboList = es01Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);
			
		//00_부서명
		List<?> buseoList = es01Service.buseoList(searchVO);
		model.addAttribute("buseoList", buseoList);
		
		//00_크로스
		List<?> selectCrossList = es01Service.selectCrossList(es01VO);
		model.addAttribute("selectCrossList", selectCrossList);
		
		//00_사진구분
		List<?> selectPhotoClassificationList = es01Service.selectPhotoClassificationList(es01VO);
		model.addAttribute("selectPhotoClassificationList", selectPhotoClassificationList);
		
		//00_가입대보증금적용지역
		List<?> selectRegDepsitAppAreaList = es01Service.selectRegDepsitAppAreaList(es01VO);
		model.addAttribute("selectRegDepsitAppAreaList", selectRegDepsitAppAreaList);
		
		//00_코드_최고채권액
		List<?> selectMaxBondAmountList = es01Service.selectMaxBondAmountList(es01VO);
		model.addAttribute("selectMaxBondAmountList", selectMaxBondAmountList);
		
		//00_코드_순위
		List<?> selectRankingCodeList = es01Service.selectRankingCodeList(es01VO);
		model.addAttribute("selectRankingCodeList", selectRankingCodeList);
	
		//00_코드_권리의내용
		List<?> selectContentRightList = es01Service.selectContentRightList(es01VO);
		model.addAttribute("selectContentRightList", selectContentRightList);
		
		//00_코드_각구의일련번호
		List<?> selectSerialNumberGuList = es01Service.selectSerialNumberGuList(es01VO);
		model.addAttribute("selectSerialNumberGuList", selectSerialNumberGuList);
		
		//00_코드_전유부분의위치
		List<?> selectJeonyuPartLocationList = es01Service.selectJeonyuPartLocationList(es01VO);
		model.addAttribute("selectJeonyuPartLocationList", selectJeonyuPartLocationList);
		
		//00_코드_아파트단지규모
		List<?> selectApartmentComplexSizeList = es01Service.selectApartmentComplexSizeList(es01VO);
		model.addAttribute("selectApartmentComplexSizeList", selectApartmentComplexSizeList);
		
		//00_코드_전유부분의면적  아파트 -- 기존 전유부분의면적 sql이 상이 하여 추가  
		List<?> selectJeonYuPartAreaAptList = es01Service.selectJeonYuPartAreaAptList(es01VO);
		model.addAttribute("selectJeonYuPartAreaAptList", selectJeonYuPartAreaAptList);
		
		//00_건축물의경과년도 - 기존 전유부분의면적 sql이 상이 하여 추가  
		List<?> selectBuildTransitYearAptList = es01Service.selectBuildTransitYearAptList(es01VO);
		model.addAttribute("selectBuildTransitYearAptList", selectBuildTransitYearAptList);
		
		//00_점유자의 형태 - 기존 전유부분의면적 sql이 상이 하여 추가  
		List<?> selectFormOccpantAptList = es01Service.selectFormOccpantAptList(es01VO);
		model.addAttribute("selectFormOccpantAptList", selectFormOccpantAptList);
		
		//00_인테리어비용
		List<?> selectInteriorCostsList = es01Service.selectInteriorCostsList(es01VO);
		model.addAttribute("selectInteriorCostsList", selectInteriorCostsList);
		
		//00_지목
		List<?> selectLandUseZoneList = es01Service.selectLandUseZoneList(es01VO);
		model.addAttribute("selectLandUseZoneList", selectLandUseZoneList);
		
		//00_지붕
		List<?> selectRoofTypeList = es01Service.selectRoofTypeList(es01VO);
		model.addAttribute("selectRoofTypeList", selectRoofTypeList);
		
		//00_구조
		List<?> selectBuildingStructureList = es01Service.selectBuildingStructureList(es01VO);
		model.addAttribute("selectBuildingStructureList", selectBuildingStructureList);
		
		//00_경매금액리스트
		List<?> selectAuctionCostList = es01Service.selectAuctionCostList(es01VO);
		model.addAttribute("selectAuctionCostList", selectAuctionCostList);
		
		//배당표_배당금_계산
		List<?> selectDividendTableCalculationList = es01Service.selectDividendTableCalculationList(es01VO);
		model.addAttribute("selectDividendTableCalculationList", selectDividendTableCalculationList);
		
		//배당표_주택임차보증금의계산
		List<?> selectculationHousingRentalDepositList = es01Service.selectculationHousingRentalDepositList(es01VO);
		model.addAttribute("selectculationHousingRentalDepositList", selectculationHousingRentalDepositList);
		
		//배당표_주택임차보증금계산_total
		List<?> selectDividendTableMCalculationList = es01Service.selectDividendTableMCalculationList(es01VO);
		model.addAttribute("selectDividendTableMCalculationList", selectDividendTableMCalculationList);
		
		//99_평가구분
		List<?> selectEvaluationClassificationList = es01Service.selectEvaluationClassificationList(es01VO);
		model.addAttribute("selectEvaluationClassificationList", selectEvaluationClassificationList);
		
		//select box 값 가지고 오기 end 
		
		/*Page 1.공통 보고서 조회 start*/

		//공통보고서_당사설정액
		List<?> selectOurSetAmontList = es01Service.selectOurSetAmontList(es01VO);
		model.addAttribute("selectOurSetAmontList", selectOurSetAmontList);
		
		//공통보고서_당사설정액JB
		List<?> selectOurSetJBAmontList = es01Service.selectOurSetJBAmontList(es01VO);
		model.addAttribute("selectOurSetJBAmontList", selectOurSetJBAmontList);
		
		//공통보고서_초과부족설정액
		List<?> selectCGBJAmontList = es01Service.selectCGBJAmontList(es01VO);
		model.addAttribute("selectCGBJAmontList", selectCGBJAmontList);
		
		//공통보고서_초과부족설정액JB
		List<?> selectCGBJAmontJBList = es01Service.selectCGBJAmontJBList(es01VO);
		model.addAttribute("selectCGBJAmontJBList", selectCGBJAmontJBList);
		
		//공통보고서_최고최저
		List<?> selectCGBJHighRowList = es01Service.selectCGBJHighRowList(es01VO);
		model.addAttribute("selectCGBJHighRowList", selectCGBJHighRowList);
		
		//공통보고서_최고최저JB
		List<?> selectCGBJHighRowJBList = es01Service.selectCGBJHighRowJBList(es01VO);
		model.addAttribute("selectCGBJHighRowJBList", selectCGBJHighRowJBList);
		
		//공통보고서_보정표
		List<?> selectCorrectionTableList = es01Service.selectCorrectionTableList(es01VO);
		model.addAttribute("selectCorrectionTableList", selectCorrectionTableList);
		
		//공통보고서_보정표 JB
		List<?> selectCorrectionTableJBList = es01Service.selectCorrectionTableJBList(es01VO);
		model.addAttribute("selectCorrectionTableJBList", selectCorrectionTableJBList);
		
		//공통보고서_보정표JB
		/*Page 1.공통 보고서 조회 end*/
		//담보마스터  보류
		List<?> selectCollateralMasterList = es01Service.selectCollateralMasterList(es01VO);
		model.addAttribute("selectCollateralMasterList", selectCollateralMasterList);
		
		//prt_01_입력표_집합건물
		List<?> selectCollateralBuildingList = es01Service.selectCollateralBuildingList(es01VO);
		model.addAttribute("selectCollateralBuildingList", selectCollateralBuildingList);
		
		//prt_01_입력표_규제사항개관
		List<?> selectRegulatoryAffairsOfficerList = es01Service.selectRegulatoryAffairsOfficerList(es01VO);
		model.addAttribute("selectRegulatoryAffairsOfficerList", selectRegulatoryAffairsOfficerList);
		
		//본건사례
		List<?> selectPriceAptList = es01Service.selectPriceAptList(es01VO);
		model.addAttribute("selectPriceAptList", selectPriceAptList);
				
		//가격사례_M
		List<?> selectPriceCaseMList = es01Service.selectPriceCaseMList(es01VO);
		model.addAttribute("selectPriceCaseMList", selectPriceCaseMList);
		
		//가격사례_D
		List<?> selectPriceCaseDList = es01Service.selectPriceCaseDList(es01VO);
		model.addAttribute("selectPriceCaseDList", selectPriceCaseDList);
		
		//감정가_경매사례 
		List<?> selectPriceAuctionList = es01Service.selectPriceAuctionList(es01VO);
		model.addAttribute("selectPriceAuctionList", selectPriceAuctionList);
		
		//감정가_감정에 관한 사항
		List<?> selectAppraiseMinMaxList = es01Service.selectAppraiseMinMaxList(es01VO);
		model.addAttribute("selectAppraiseMinMaxList", selectAppraiseMinMaxList);
		
		//낙찰가율보정표 
		List<?> selectSuccessfulBidRateTableList = es01Service.selectSuccessfulBidRateTableList(es01VO);
		model.addAttribute("selectSuccessfulBidRateTableList", selectSuccessfulBidRateTableList);
		
   		return "es01/es01_w02";
   	}
    
    // 의견팝업 팝업
    @RequestMapping(value = "/es01_w02_p03.do")
   	public String es01_w02_p03(
   			@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO,
   			ModelMap model) throws Exception {
   		
    	List<?> selectOpinionList = es01Service.selectOpinionList(es01VO);
		model.addAttribute("selectOpinionList", selectOpinionList);
		
   		return "es01/es01_w02_p03";
   	}
    // 배당처리
    @RequestMapping(value = "/es01_w02_Dividend_save.do")
   	public String es01_w02_Dividend_save(
   			@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO,
   			ModelMap model) throws Exception {
   		
	    	 es01VO.setYyyy(es01VO.getSearchYyyy());
			 es01VO.setSeq(es01VO.getSearchSeq());

		      es01Service.es01_w02_es10_V_ES10_01_update(es01VO);
		    
		      Map map = new HashMap<>();
		      map.put("yyyy", es01VO.getYyyy()); // TODO [인풋 값]
		      map.put("seq", es01VO.getSeq()); // TODO [인풋 값]
		      map.put("outParam03", es01VO.getSeq()); // TODO [인풋 값]

				 
			//String checkCnt=es01Service.Pro_Es01_w02_Dividend_save(map);
		      String checkCnt=es01Service.Pro_Es01_w02_Dividend_save(es01VO);
			 
			  String param1="";
			  String param2="";
			  param1=es01VO.getSearchSeq();
			  param2=es01VO.getSearchYyyy();


			  return "forward:/es01/es01_w02_edit.do?targetSeq="+param1+"&&targetYyyy="+param2;
   	}
    
 // 아파트저장
    @RequestMapping(value = "/es01_w02_save.do")
   	public String es01_w02_save(
   			@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO,
   			ModelMap model) throws Exception {
   		
    	String yyyy="";
		String seq="";
		String dispRank="";
		String rightCode="";
		String rightDate="";
		String hiteYn="";
		String eraYn="";
		String credSelfAmtOrg="";
		String credCombAmtOrg="";
		String rightPerson="";
		String proRateCode="";
			
		String auNo ="";
		String auCheckYn =""; 
		String auBName="";
		String auJuso ="";
		String auTotFloor ="";
		String auFloor ="";
		String auBSizePy ="";
		String auLawAmt ="";
		String auCurrPyDan ="";
		String auBidAmt ="";
		String auBidRate ="";
		
		String caMLnSeq="";
		String caMBName="";
		String caMJuso="";
		String caMBYear="";
		String caMHouseCnt="";
		
		String caseDbSizePy="";
		int caseDLnSeq=0;
		String caseDcurrMinAmt="";
		String caseDcurrMaxAmt="";
		String caseDcurrAvgAmt="";
		String caseDcurrPyDan="";
		String caseDleaseAmt="";
		String caseDleaseRate="";
		String caseDCheckYn="";
		
		String caMLnSeqTP=(String) es01VO.getCaMLnSeq();
		String caMBNameTP=(String) es01VO.getCaMBName();
		String caMJusoTP=(String) es01VO.getCaMJuso();
		String caMBYearTP=(String) es01VO.getCaMBYear();
		String caMHouseCntTP=(String) es01VO.getCaMHouseCnt();
		
		String caseDbSizePyTP=(String) es01VO.getCaseDbSizePy();
		String caseDLnSeqTP=(String) es01VO.getCaseDLnSeq();
		String caseDcurrMinAmtTP=(String) es01VO.getCaseDcurrMinAmt();
		String caseDcurrMaxAmtTP=(String) es01VO.getCaseDcurrMaxAmt();
		String caseDcurrAvgAmtTP=(String) es01VO.getCaseDcurrAvgAmt();
		String caseDcurrPyDanTP=(String) es01VO.getCaseDcurrPyDan();
		String caseDleaseAmtTP=(String) es01VO.getCaseDleaseAmt();
		String caseDleaseRateTP=(String) es01VO.getCaseDleaseRate();
		String caseDCheckYnTP=(String) es01VO.getCaseDCheckYn();


		String dispRankTP=(String) es01VO.getDispRank();
		String rightDateTP=(String) es01VO.getRightDate();
		String rightCodeTP=(String) es01VO.getRightCode();
		String hiteYnTP=(String) es01VO.getHiteYn();
		String eraYnTP=(String) es01VO.getEraYn();
		String credSelfAmtOrgTP=(String) es01VO.getCredSelfAmtOrg();
		String credCombAmtOrgTP=(String) es01VO.getCredCombAmtOrg();
		String rightPersonTP=(String) es01VO.getRightPerson();
		String proRateCodeTP=(String) es01VO.getProRateCode();
		
		String auNoTP=(String) es01VO.getAuNo();
		String auCheckYnTP=(String) es01VO.getAuCheckYn();
		String auBNameTP=(String) es01VO.getAuBName();
		String auJusoTP=(String) es01VO.getAuJuso();
		String auTotFloorTP=(String) es01VO.getAuTotFloor();
		String auFloorTP=(String) es01VO.getAuFloor();
		String auBSizePyTP=(String) es01VO.getAuBSizePy();
		String auLawAmtTP=(String) es01VO.getAuLawAmt();
		String auCurrPyDanTP=(String) es01VO.getAuCurrPyDan();
		String auBidAmtTP=(String) es01VO.getAuBidAmt();
		String auBidRateTP=(String) es01VO.getAuBidRate();
		
		String[] dispRankTPStr = dispRankTP.split(",");
		String[] rightDateTPStr = rightDateTP.split(",",-1);
		String[] rightCodeTPStr = rightCodeTP.split(",",-1);
		String[] hiteYnTPStr = hiteYnTP.split(",",-1);
		String[] eraYnTPStr = eraYnTP.split(",",-1);
		String[] credSelfAmtOrgTPStr = credSelfAmtOrgTP.split(",",-1);;
		String[] credCombAmtOrgTPStr = credCombAmtOrgTP.split(",",-1);
		String[] rightPersonTPStr = rightPersonTP.split(",",-1);
		String[] proRateCodeTPStr = proRateCodeTP.split(",",-1);
		
		String[] auNoTPStr = auNoTP.split(",",-1);
		String[] auCheckYnTPStr = auCheckYnTP.split(",",-1);
		String[] auBNameTPStr = auBNameTP.split(",",-1);
		String[] auJusoTPStr = auJusoTP.split(",",-1);
		String[] auTotFloorTPStr = auTotFloorTP.split(",",-1);
		String[] auFloorTPStr = auFloorTP.split(",",-1);
		String[] auBSizePyTPStr = auBSizePyTP.split(",",-1);
		String[] auLawAmtTPStr = auLawAmtTP.split(",",-1);
		String[] auCurrPyDanTPStr = auCurrPyDanTP.split(",",-1);
		String[] auBidAmtTPStr = auBidAmtTP.split(",",-1);
		String[] auBidRateTPStr = auBidRateTP.split(",",-1);
		
		 String[] caMLnSeqTPStr= caMLnSeqTP.split(",",-1);
		 String[] caMBNameTPStr= caMBNameTP.split(",",-1);
		 String[] caMJusoTPStr= caMJusoTP.split(",",-1);
		 String[] caMBYearTPStr= caMBYearTP.split(",",-1);
		 String[] caMHouseCntTPStr= caMHouseCntTP.split(",",-1);
		
		 String[] caseDbSizePyTPStr= caseDbSizePyTP.split(",",-1);
		 String[] caseDLnSeqTPStr= caseDLnSeqTP.split(",",-1);
		 String[] caseDcurrMinAmtTPStr=caseDcurrMinAmtTP.split(",",-1);
		 String[] caseDcurrMaxAmtTPStr=caseDcurrMaxAmtTP.split(",",-1);
		 String[] caseDcurrAvgAmtTPStr= caseDcurrAvgAmtTP.split(",",-1);
		 String[] caseDcurrPyDanTPStr=caseDcurrPyDanTP.split(",",-1);
		 String[] caseDleaseAmtTPStr= caseDleaseAmtTP.split(",",-1);
		 String[] caseDleaseRateTPStr=caseDleaseRateTP.split(",",-1);
		 String[] caseDCheckYnTPStr= caseDCheckYnTP.split(",",-1);
		 String estiDateCheck="";
		 
		 estiDateCheck =es01Service.selectEstiDateCheck(es01VO);
		 es01VO.setEstiDateCheck(estiDateCheck);
		
		 if(es01VO.getSearchYyyy().equals("")) {
				
			  LocalDate now = LocalDate.now();
				  int year = now.getYear();
				  yyyy=Integer.toString(year); 

				  List<?> selectNewSeq = es01Service.selectNewSeqNo(es01VO);

				  for(Object str : selectNewSeq) {
					  seq = (String) str;
					}
				  es01VO.setSeq(seq);
				  es01VO.setYyyy(yyyy);
				  es01VO.setSearchSeq(seq);
				  es01VO.setSearchYyyy(yyyy);
				  searchVO.setSearchSeq(seq);
				  searchVO.setSearchYyyy(yyyy);
				  
				  es01VO.setJumCode("2079736");
				  es01VO.setReqJum("2079736");
				  
				  
			}else {
				 es01VO.setYyyy(es01VO.getSearchYyyy());
				 es01VO.setSeq(es01VO.getSearchSeq());
			}
		 
			 //es10
			 es01Service.es01_w02_save(es01VO);
			    //es2011
			 es01Service.es01_w02_es2011_save(es01VO);
			    //es2017
			 es01Service.es01_w02_es2017_save(es01VO);
			    //es2101
			 es01Service.es01_w02_es2101_save(es01VO);
			    //es2301
			 es01Service.es01_w02_es2301_save(es01VO);
			    //es2401
			 es01Service.es01_w02_es2401_save(es01VO);
			 
			 //insert 2404
		    int checkCnt=es01Service.selectEs2404DelCheck(es01VO);
		    if(checkCnt > 0) {
		    	//delete
		    	es01Service.deleteEs2404Del(es01VO);
		    }
		    for(int i=0; i<dispRankTPStr.length; i++){
	    	 	dispRank =dispRankTPStr[i];
	    	 	rightDate=rightDateTPStr[i].trim();
	    	 	rightDate=rightDate.replaceAll("-", "");
	    	 	rightCode=rightCodeTPStr[i];
	    	 	hiteYn=hiteYnTPStr[i];
	    	 	eraYn=eraYnTPStr[i];
	    	 	credSelfAmtOrg=credSelfAmtOrgTPStr[i];
	    	 	credCombAmtOrg=credCombAmtOrgTPStr[i];
	    	 	rightPerson=rightPersonTPStr[i];
	    	 	proRateCode=proRateCodeTPStr[i];

	    	 	es01VO.setDispRankData(dispRank);
	    	 	es01VO.setRightCodeData(rightCode);
	    	 	es01VO.setRightDateData(rightDate);
	    	 	es01VO.setHiteYnData(hiteYn);
	    	 	es01VO.setEraYnData(eraYn);
	    	 	es01VO.setCredSelfAmtOrgData(credSelfAmtOrg);
	    	 	es01VO.setCredCombAmtOrgData(credCombAmtOrg);
	    	 	es01VO.setRightPersonData(rightPerson);
	    	 	es01VO.setProRateCodeData(proRateCode);
	    	 	//es01VO.setRank(i+1);
	    	 	es01Service.es01_w02_es2404_save(es01VO);
	    	}
		  //insert es2181
		     checkCnt=es01Service.selectEs2181Check(es01VO);
		    if(checkCnt > 0) {
		    	//update
		    	es01Service.es01_w02_es2181_update(es01VO);
		    }else {
		    	es01Service.es01_w02_es2181_insert(es01VO);
		    }
		  //insert ES2111
		     checkCnt=es01Service.selectEs2111DelCheck(es01VO);
		    if(checkCnt > 0) {
		    	//delete
		    	es01Service.deleteEs2111Del(es01VO);
		    }
		    for(int i=0; i<auNoTPStr.length; i++){
		    	 auNo =auNoTPStr[i];
		    	 auCheckYn = auCheckYnTPStr[i];
		    	 auBName=    auBNameTPStr[i];
		    	 auJuso =   auJusoTPStr[i];
		    	 auTotFloor =auTotFloorTPStr[i];
		    	 auFloor =  auFloorTPStr[i];
		    	 auBSizePy = auBSizePyTPStr[i];
		    	 auLawAmt =  auLawAmtTPStr[i];
		    	 auCurrPyDan =auCurrPyDanTPStr[i];
		    	 auBidAmt =  auBidAmtTPStr[i];
		    	 auBidRate = auBidRateTPStr[i];
		    	 
		    	 es01VO.setAuNoData(auNo);
		    	 es01VO.setAuCheckYnData(auCheckYn);
		    	 es01VO.setAuBNameData(auBName);
		    	 es01VO.setAuJusoData(auJuso);
		    	 es01VO.setAuTotFloorData(auTotFloor);
		    	 es01VO.setAuFloorData(auFloor);
		    	 es01VO.setAuBSizePyData(auBSizePy);
		    	 es01VO.setAuLawAmtData(auLawAmt);
		    	 es01VO.setAuCurrPyDanData(auCurrPyDan);
		    	 es01VO.setAuBidAmtData(auBidAmt);
		    	 es01VO.setAuBidRateData(auBidRate);
		    	 
		    	 es01Service.es01_w02_es2111_insert(es01VO);
		    }
		  //insert ES2141
		    checkCnt=es01Service.selectEs2141DelCheck(es01VO);
		    if(checkCnt > 0) {
		    	//delete
		    	es01Service.deleteEs2141Del(es01VO);
		    }
		    for(int i=0; i<caMLnSeqTPStr.length; i++){
		    	caMBName =caMBNameTPStr[i];
		    	caMJuso=caMJusoTPStr[i];
		    	caMBYear=caMBYearTPStr[i];
		    	caMHouseCnt=caMHouseCntTPStr[i];
		    	
		    	es01VO.setCaMBNameData(caMBName);
		    	es01VO.setCaMJusoData(caMJuso);
		    	es01VO.setCaMBYearData(caMBYear);
		    	es01VO.setCaMHouseCntData(caMHouseCnt);
		    	
		    	es01Service.es01_w02_es2141_insert(es01VO);
		    }
		  //insert ES2141 end
			  //insert es2151 
			    checkCnt=es01Service.selectEs2151DelCheck(es01VO);
			    if(checkCnt > 0) {
			    	//delete
			    	es01Service.deleteEs2151Del(es01VO);
			    }
			    String caseDLnSeqS="";
			    for(int i=0; i<caseDbSizePyTPStr.length; i++){
			    	
			    	 for(int ii=0; ii<caMLnSeqTPStr.length; ii++){
			    		
			    		 if(caMLnSeqTPStr[ii].equals(caseDLnSeqTPStr[i])) {
			    			 caseDLnSeq=ii+1;
			    			 System.out.println("caseDLnSeq===>"+caseDLnSeq);
			    			 
			    			  caseDbSizePy=caseDbSizePyTPStr[i];
			    			  caseDLnSeqS=Integer.toString(caseDLnSeq);
			    			  caseDcurrMinAmt=caseDcurrMinAmtTPStr[i];
			    			  caseDcurrMaxAmt=caseDcurrMaxAmtTPStr[i];
			    			  caseDcurrAvgAmt=caseDcurrAvgAmtTPStr[i];
			    			  caseDcurrPyDan=caseDcurrPyDanTPStr[i];
			    			  caseDleaseAmt=caseDleaseAmtTPStr[i];
			    			  caseDleaseRate=caseDleaseRateTPStr[i];
			    			  caseDCheckYn=caseDCheckYnTPStr[i];
			    			 
			    			  es01VO.setCaseDbSizePyData(caseDbSizePy);
			    			  es01VO.setCaseDcurrMinAmtData(caseDcurrMinAmt);
			    			  es01VO.setCaseDcurrMaxAmtData(caseDcurrMaxAmt);
			    			  es01VO.setCaseDcurrAvgAmtData(caseDcurrAvgAmt);
			    			  es01VO.setCaseDcurrPyDanData(caseDcurrPyDan);
			    			  es01VO.setCaseDleaseAmtData(caseDleaseAmt);
			    			  es01VO.setCaseDleaseRateData(caseDleaseRate);
			    			  es01VO.setCaseDCheckYnData(caseDCheckYn);
			    			  es01VO.setCaseDLnSeqData(caseDLnSeqS);
						     
			    			  es01Service.es01_w02_es2151_insert(es01VO);
			    		 } 
			    	 }
			    }
			    
			  //insert  Es2402
			    String numberGu="";
			    String resiName="";
			    String resiRmCnt="";
			    String fxdateYn="";
			    String possARmCnt="";
			    String hleaseAmt="";
			    String repBeSecAmt="";
			    String fxleaAmt="";
			    String fxleaNoAmt="";

			    String numberGuTP=(String) es01VO.getNumberGu();
			    String resiNameTP=(String) es01VO.getResiName();
			    String resiRmCntTP=(String) es01VO.getResiRmCnt();
			    String fxdateYnTP=(String) es01VO.getFxdateYn();
			    String possARmCntTP=(String) es01VO.getPossARmCnt();
			    String hleaseAmtTP=(String) es01VO.getHleaseAmt();
			    String repBeSecAmtTP=(String) es01VO.getRepBeSecAmt();
			    String fxleaAmtTP=(String) es01VO.getFxleaAmt();
			    String fxleaNoAmtTP=(String) es01VO.getFxleaNoAmt();

			    String[] numberGuTPStr= numberGuTP.split(",");
			    String[] resiNameTPStr= resiNameTP.split(",",-1);
			    String[] resiRmCntTPStr= resiRmCntTP.split(",",-1);
			    String[] fxdateYnTPStr= fxdateYnTP.split(",",-1);
			    String[] possARmCntTPStr= possARmCntTP.split(",",-1);
			    String[] hleaseAmtTPStr= hleaseAmtTP.split(",",-1);
			    String[] repBeSecAmtTPStr= repBeSecAmtTP.split(",",-1);
			    String[] fxleaAmtTPStr= fxleaAmtTP.split(",",-1);
			    String[] fxleaNoAmtTPStr= fxleaNoAmtTP.split(",",-1);

			    checkCnt=es01Service.selectEs2402DelCheck(es01VO);
			    if(checkCnt > 0) {
			    	es01Service.deleteEs2402Del(es01VO);
			    }
			    for(int i=0; i<resiNameTPStr.length; i++){
			    	numberGu=numberGuTPStr[i];
					resiName=resiNameTPStr[i];
					resiRmCnt=resiRmCntTPStr[i];
					fxdateYn=fxdateYnTPStr[i];
					possARmCnt=possARmCntTPStr[i];
					hleaseAmt=hleaseAmtTPStr[i];
					repBeSecAmt=repBeSecAmtTPStr[i];
					fxleaAmt=fxleaAmtTPStr[i];
					fxleaNoAmt=fxleaNoAmtTPStr[i];

					es01VO.setNumberGuData(numberGu);
					es01VO.setResiNameData(resiName);
					es01VO.setResiRmCntData(resiRmCnt);
					es01VO.setFxdateYnData(fxdateYn);
					es01VO.setPossARmCntData(possARmCnt);
					es01VO.setHleaseAmtData(hleaseAmt);
					es01VO.setRepBeSecAmtData(repBeSecAmt);
					es01VO.setFxleaAmtData(fxleaAmt);
					es01VO.setFxleaNoAmtData(fxleaNoAmt);
					
					es01Service.es01_w02_es2402_insert(es01VO);
			    }
			    
			  String param1="";
			  String param2="";
			  param1=es01VO.getSearchSeq();
			  param2=es01VO.getSearchYyyy();
			  
		 
		    return "forward:/es01/es01_w02_edit.do?targetSeq="+param1+"&&targetYyyy="+param2;
   	}

	//	재감정 버튼
	@ResponseBody
	@RequestMapping(value = "/es01_w01_reassessment_number.do")
	public ResponseEntity<Map<String, Object>> es02_w06_reassessment_number(@RequestBody Map<String, Object> param) throws Exception {
		Map<String,Object> result = new HashMap<String, Object>();
		Boolean response = false;
		try {
			JSONObject jsonObject = new JSONObject(param);

			Es01SearchEntity searchVO = new Es01SearchEntity();

			searchVO.setTargetSeq(jsonObject.get("seq").toString());
			searchVO.setTargetYyyy(jsonObject.get("yyyy").toString());

			String reassessmentNumber = es01Service.reassessmentData(searchVO);

			result.put("reassessmentNumber",reassessmentNumber);
			response = true;
		}catch (Exception e) {
			System.out.println(e);
			response = false;
		}
		result.put("response", response);
		return new ResponseEntity<Map<String,Object>>(result, HttpStatus.OK);
	}
    
}
