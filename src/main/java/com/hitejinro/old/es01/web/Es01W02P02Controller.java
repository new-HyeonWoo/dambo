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
import com.hitejinro.old.es01.service.Es01W02P02Service;
import com.hitejinro.old.es01.service.Es01W03P01Service;
import com.hitejinro.old.es01.service.Es01W03Service;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.util.List;

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
public class Es01W02P02Controller {

	private final Es01Service es01Service;
	private final Es01W03Service es01W03Service;
	private final Es01W03P01Service es01W03P01Service;
	private final Es01W02P02Service es01W02P02Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es01W02P02Controller.class); 
	
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
    @RequestMapping(value = "/es01_w02_p02_edit.do")
    public String es01_w02_p02_edit(@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO, ModelMap model) throws Exception {
		
    	//es01VO
    	if(searchVO.getYyyy()=="" || searchVO.getYyyy()==null ||searchVO.getYyyy()=="null") {
    		searchVO.setYyyy(es01VO.getSearchYyyy());
    		searchVO.setSeq(es01VO.getSearchSeq());
    	}
     	
    	//00_가입대보증금적용지역
		List<?> selectRegDepsitAppAreaList = es01Service.selectRegDepsitAppAreaList(es01VO);
		model.addAttribute("selectRegDepsitAppAreaList", selectRegDepsitAppAreaList);
		
		//00_건축물의경과년도 - 
		List<?> selectBuildTransitYearAptList = es01Service.selectBuildTransitYearAptList(es01VO);
		model.addAttribute("selectBuildTransitYearAptList", selectBuildTransitYearAptList);
		
		//건축물의경과년도_코드찾기
		
		// 결재진행사항  가지고 오기 
		List<?> procList = es01W03Service.selectStoreProcList(searchVO);
		model.addAttribute("procList", procList);
			
		//00_공공시설 접근성
		List<?> selectEs01_w03DIV180List = es01W03Service.selectEs01_w03DIV180List(searchVO);
		model.addAttribute("selectEs01_w03DIV180List", selectEs01_w03DIV180List);
		
		//00_구조
		List<?> selectEs01_w02_p02DIV301List = es01W02P02Service.selectEs01_w02_p02DIV301List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV301List", selectEs01_w02_p02DIV301List);
		
		//00_내용연수
		List<?> selectEs01_w03DIV301_21List = es01W03Service.selectEs01_w03DIV301_21List(searchVO);
		model.addAttribute("selectEs01_w03DIV301_21List", selectEs01_w03DIV301_21List);
		
		//00_담보콤보 가지고 오기 
		List<?> damboList = es01Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);
		
		//00_도로계통성
		List<?> selectEs01_w03DIV178List = es01W03Service.selectEs01_w03DIV178List(searchVO);
		model.addAttribute("selectEs01_w03DIV178List", selectEs01_w03DIV178List);
		
		//00_도로조건
		List<?> selectEs01_w03DIV127List = es01W03Service.selectEs01_w03DIV127List(searchVO);
		model.addAttribute("selectEs01_w03DIV127List", selectEs01_w03DIV127List);
		
		//00_본건과의거리
		List<?> selectEs01_w02_p02DIV185List = es01W02P02Service.selectEs01_w02_p02DIV185List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV185List", selectEs01_w02_p02DIV185List);
				
		//00_사진구분
		List<?> selectPhotoClassificationList = es01Service.selectPhotoClassificationList(es01VO);
		model.addAttribute("selectPhotoClassificationList", selectPhotoClassificationList);
		
		//00_상가의접근성
		List<?> selectEs01_w03DIV174List = es01W03Service.selectEs01_w03DIV174List(searchVO);
		model.addAttribute("selectEs01_w03DIV174List", selectEs01_w03DIV174List);
		
		//00_상가의층별위치
		List<?> selectEs01_w03DIV173List = es01W02P02Service.selectEs01_w03DIV173List(searchVO);
		model.addAttribute("selectEs01_w03DIV173List", selectEs01_w03DIV173List);
			
		//상가의층별위치_코드찾기 DIV173 데이터 없음
		
		//00_상가의발달정도
		List<?> selectEs01_w03DIV139List = es01W03Service.selectEs01_w03DIV139List(searchVO);
		model.addAttribute("selectEs01_w03DIV139List", selectEs01_w03DIV139List);
		
		//00_상가시설접근성
		List<?> selectEs01_w03DIV179List = es01W03Service.selectEs01_w03DIV179List(searchVO);
		model.addAttribute("selectEs01_w03DIV179List", selectEs01_w03DIV179List);
		
		//00_연립다세대_전유부분의위치
		List<?> selectEs01_w02_p02DIV111List = es01W02P02Service.selectEs01_w02_p02DIV111List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV111List", selectEs01_w02_p02DIV111List);
		
		//00_용도지역
		List<?> selectEs01_w03DIV114List = es01W03Service.selectEs01_w03DIV114List(searchVO);
		model.addAttribute("selectEs01_w03DIV114List", selectEs01_w03DIV114List);
		
		//00_위치별
		List<?> selectEs01_w03DIV181List = es01W03Service.selectEs01_w03DIV181List(searchVO);
		model.addAttribute("selectEs01_w03DIV181List", selectEs01_w03DIV181List);
					
		//00_인테리어비용
		List<?> selectInteriorCostsList = es01Service.selectInteriorCostsList(es01VO);
		model.addAttribute("selectInteriorCostsList", selectInteriorCostsList);
		
		//00_입지조건
		List<?> selectEs01_w03DIV150List = es01W03Service.selectEs01_w03DIV150List(searchVO);
		model.addAttribute("selectEs01_w03DIV150List", selectEs01_w03DIV150List);
		
		//00_전유부분의면적
		List<?> selectEs01_w03DIV104List = es01W03Service.selectEs01_w03DIV104List(searchVO);
		model.addAttribute("selectEs01_w03DIV104List", selectEs01_w03DIV104List);
		
		//전유부분의면적_코드찾기 TO_DO
		
		
		//00_전유부분의위치_총층수만
		List<?> selectEs01_w02_p02DIV107List = es01W02P02Service.selectEs01_w02_p02DIV107List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV107List", selectEs01_w02_p02DIV107List);
		
		//00_전유부분의위치_총층수만 TO_DO sql수정필요
		List<?> selectEs01_w02_p02DIV107FloorList = es01W02P02Service.selectEs01_w02_p02DIV107FloorList(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV107FloorList", selectEs01_w02_p02DIV107FloorList);
		
		//00_점유자의 형태 - 기존 전유부분의면적 sql이 상이 하여 추가  
		List<?> selectFormOccpantAptList = es01Service.selectFormOccpantAptList(es01VO);
		model.addAttribute("selectFormOccpantAptList", selectFormOccpantAptList);
		
		//00_접근조건
		List<?> selectEs01_w03DIV182List = es01W03Service.selectEs01_w03DIV182List(searchVO);
		model.addAttribute("selectEs01_w03DIV182List", selectEs01_w03DIV182List);
			
		//00_접합도로의폭
		List<?> selectEs01_w02_p02DIV154List = es01W02P02Service.selectEs01_w02_p02DIV154List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV154List", selectEs01_w02_p02DIV154List);
		
		//00_지목
		List<?> selectLandUseZoneList = es01Service.selectLandUseZoneList(es01VO);
		model.addAttribute("selectLandUseZoneList", selectLandUseZoneList);
			
		//00_지붕
		List<?> selectEs01_w02_p02157List = es01W02P02Service.selectEs01_w02_p02157List(searchVO);
		model.addAttribute("selectEs01_w02_p02157List", selectEs01_w02_p02157List);
			
		//00_집합건물종류
		List<?> selectEs01_w03DIV100List = es01W03Service.selectEs01_w03DIV100List(searchVO);
		model.addAttribute("selectEs01_w03DIV100List", selectEs01_w03DIV100List);
		
		//00_층별비교
		List<?> selectEs01_w02_p02DIV177List = es01W02P02Service.selectEs01_w02_p02DIV177List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV177List", selectEs01_w02_p02DIV177List);
		
		//부서목록
		List<?> selectEs01_w02_p02Via03List = es01W02P02Service.selectEs01_w02_p02Via03List(searchVO);
		model.addAttribute("selectEs01_w02_p02Via03List", selectEs01_w02_p02Via03List);
			
		//담보마스터  
		List<?> selectCollateralMasterList = es01Service.selectCollateralMasterList(es01VO);
		model.addAttribute("selectCollateralMasterList", selectCollateralMasterList);
		
		//입력표_집합건물
		List<?> selectEs01_w02_p02Es2011ist = es01W02P02Service.selectEs01_w02_p02Es2011ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2011ist", selectEs01_w02_p02Es2011ist);
		
		//규제의표시
		List<?> selectEs01_w03_p01ES2017List = es01W03P01Service.selectEs01_w03_p01ES2017List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2017List", selectEs01_w03_p01ES2017List);
		
		//입력표_낙찰가율보정표
		List<?> selectEs01_w02_p02Es2301ist = es01W02P02Service.selectEs01_w02_p02Es2301ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2301ist", selectEs01_w02_p02Es2301ist);
			
		//응찰입력표_마스터
		List<?> selectEs01_w03Es4110List = es01W03Service.selectEs01_w03Es4110List(searchVO);
		model.addAttribute("selectEs01_w03Es4110List", selectEs01_w03Es4110List);
					
		//응찰입력표_경매기일내역
		List<?> selectEs01_w03Es4111List = es01W03Service.selectEs01_w03Es4111List(searchVO);
		model.addAttribute("selectEs01_w03Es4111List", selectEs01_w03Es4111List);
				
		//응찰입력표_전감정개용
		List<?> selectEs01_w03Es4112List = es01W03Service.selectEs01_w03Es4112List(searchVO);
		model.addAttribute("selectEs01_w03Es4112List", selectEs01_w03Es4112List);
				
		//응찰입력표_선순위권리내역
		List<?> selectEs01_w03Es4113List = es01W03Service.selectEs01_w03Es4113List(searchVO);
		model.addAttribute("selectEs01_w03Es4113List", selectEs01_w03Es4113List);
			
		//응찰입력표_선순위부담금액
		List<?> selectEs01_w03Es4114List = es01W03Service.selectEs01_w03Es4114List(searchVO);
		model.addAttribute("selectEs01_w03Es4114List", selectEs01_w03Es4114List);
		
		//등록세
		List<?> selectEs01_w03RegistrationTaxList = es01W03Service.selectEs01_w03RegistrationTaxList(searchVO);
		model.addAttribute("selectEs01_w03RegistrationTaxList", selectEs01_w03RegistrationTaxList);
		
		//종합부동산세
		List<?> selectEs01_w03ComprehensiveRealEstateTaxList = es01W03Service.selectEs01_w03ComprehensiveRealEstateTaxList(searchVO);
		model.addAttribute("selectEs01_w03ComprehensiveRealEstateTaxList", selectEs01_w03ComprehensiveRealEstateTaxList);
		
		//처분비용
		List<?> selectEs01_w03DisposalCostList = es01W03Service.selectEs01_w03DisposalCostList(searchVO);
		model.addAttribute("selectEs01_w03DisposalCostList", selectEs01_w03DisposalCostList);
		
		//취득세
		List<?> selectEs01_w03AcquisitionTaxList = es01W03Service.selectEs01_w03AcquisitionTaxList(searchVO);
		model.addAttribute("selectEs01_w03AcquisitionTaxList", selectEs01_w03AcquisitionTaxList);
		
		//99_평가구분
		List<?> selectEvaluationClassificationList = es01Service.selectEvaluationClassificationList(es01VO);
		model.addAttribute("selectEvaluationClassificationList", selectEvaluationClassificationList);
		
		//감정가_00_본건사례
		List<?> selectEs01_w02_p02Es2182ist = es01W02P02Service.selectEs01_w02_p02Es2182ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2182ist", selectEs01_w02_p02Es2182ist);
		
		//감정가_00_본건사례
		List<?> selectEs01_w02_p02Es2112ist = es01W02P02Service.selectEs01_w02_p02Es2112ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2112ist", selectEs01_w02_p02Es2112ist);
		
		//감정가_00_비준가격
		List<?> selectEs01_w02_p02Es2122ist = es01W02P02Service.selectEs01_w02_p02Es2122ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2122ist", selectEs01_w02_p02Es2122ist);
		System.out.println("selectEs01_w02_p02Es2122ist===>"+selectEs01_w02_p02Es2122ist);
		
		//감정가_00_비준가격_집계표
		List<?> selectEs01_w02_p02Es2122Totalist = es01W02P02Service.selectEs01_w02_p02Es2122Totalist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2122Totalist", selectEs01_w02_p02Es2122Totalist);
			
		//감정가_09_감정평가
		List<?> selectEs01_w02_p02Es2102List = es01W02P02Service.selectEs01_w02_p02Es2102List(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2102List", selectEs01_w02_p02Es2102List);
		
		//감정가_01_사례번호
		List<?> selectEs01_w02_p02Es2142List = es01W02P02Service.selectEs01_w02_p02Es2142List(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2142List", selectEs01_w02_p02Es2142List);
		
		//공통보고서_당사설정액
		List<?> selectOurSetAmontList = es01Service.selectOurSetAmontList(es01VO);
		model.addAttribute("selectOurSetAmontList", selectOurSetAmontList);
		
		//공통보고서_당사설정액JB
		List<?> selectOurSetJBAmontList = es01Service.selectOurSetJBAmontList(es01VO);
		model.addAttribute("selectOurSetJBAmontList", selectOurSetJBAmontList);
		
		//공통보고서_보정표
		List<?> selectCorrectionTableList = es01Service.selectCorrectionTableList(es01VO);
		model.addAttribute("selectCorrectionTableList", selectCorrectionTableList);
		
		//공통보고서_보정표 JB
		List<?> selectCorrectionTableJBList = es01Service.selectCorrectionTableJBList(es01VO);
		model.addAttribute("selectCorrectionTableJBList", selectCorrectionTableJBList);
		
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
		
		//배당표_배당금_계산
		List<?> selectDividendTableCalculationList = es01Service.selectDividendTableCalculationList(es01VO);
		model.addAttribute("selectDividendTableCalculationList", selectDividendTableCalculationList);
		
		//배당표_주택임차보증금의계산
		List<?> selectculationHousingRentalDepositList = es01Service.selectculationHousingRentalDepositList(es01VO);
		model.addAttribute("selectculationHousingRentalDepositList", selectculationHousingRentalDepositList);
		
		//배당표_주택임차보증금계산_total
		List<?> selectDividendTableMCalculationList = es01Service.selectDividendTableMCalculationList(es01VO);
		model.addAttribute("selectDividendTableMCalculationList", selectDividendTableMCalculationList);
		
		//00_주류타입_사업부분
		List<?> liquorType = es01Service.selectLiquorType(es01VO);
		model.addAttribute("liquorType", liquorType);
		
		//영업감정요청자료
		
		//00_코드_각구의일련번호
		List<?> selectSerialNumberGuList = es01Service.selectSerialNumberGuList(es01VO);
		model.addAttribute("selectSerialNumberGuList", selectSerialNumberGuList);
		
		//00_코드_권리의내용
		List<?> selectContentRightList = es01Service.selectContentRightList(es01VO);
		model.addAttribute("selectContentRightList", selectContentRightList);
		
		//00_코드_순위
		List<?> selectRankingCodeList = es01Service.selectRankingCodeList(es01VO);
		model.addAttribute("selectRankingCodeList", selectRankingCodeList);
		
		//00_코드_최고채권액
		List<?> selectMaxBondAmountList = es01Service.selectMaxBondAmountList(es01VO);
		model.addAttribute("selectMaxBondAmountList", selectMaxBondAmountList);
		
		List<?> selectEs01_w03_p01Div193List = es01W03P01Service.selectEs01_w03_p01Div193List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div193List", selectEs01_w03_p01Div193List);
		
		//낙찰가율보정표 
		List<?> selectSuccessfulBidRateTableList = es01Service.selectSuccessfulBidRateTableList(es01VO);
		model.addAttribute("selectSuccessfulBidRateTableList", selectSuccessfulBidRateTableList);
		
		
		return "es01/es01_w02_P02_edit";
	}
    
    @RequestMapping(value = "/es01_w02_p02.do")
    public String es01_w02_p02(@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO, ModelMap model) throws Exception {
		
    	//es01VO
    	if(searchVO.getYyyy()=="" || searchVO.getYyyy()==null ||searchVO.getYyyy()=="null") {
    		searchVO.setYyyy(es01VO.getSearchYyyy());
    		searchVO.setSeq(es01VO.getSearchSeq());
    	}
     	
    	//00_가입대보증금적용지역
		List<?> selectRegDepsitAppAreaList = es01Service.selectRegDepsitAppAreaList(es01VO);
		model.addAttribute("selectRegDepsitAppAreaList", selectRegDepsitAppAreaList);
		
		//00_건축물의경과년도 - 
		List<?> selectBuildTransitYearAptList = es01Service.selectBuildTransitYearAptList(es01VO);
		model.addAttribute("selectBuildTransitYearAptList", selectBuildTransitYearAptList);
		
		//건축물의경과년도_코드찾기
		
		// 결재진행사항  가지고 오기 
		List<?> procList = es01W03Service.selectStoreProcList(searchVO);
		model.addAttribute("procList", procList);
			
		//00_공공시설 접근성
		List<?> selectEs01_w03DIV180List = es01W03Service.selectEs01_w03DIV180List(searchVO);
		model.addAttribute("selectEs01_w03DIV180List", selectEs01_w03DIV180List);
		
		//00_구조
		List<?> selectEs01_w02_p02DIV301List = es01W02P02Service.selectEs01_w02_p02DIV301List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV301List", selectEs01_w02_p02DIV301List);
		
		//00_내용연수
		List<?> selectEs01_w03DIV301_21List = es01W03Service.selectEs01_w03DIV301_21List(searchVO);
		model.addAttribute("selectEs01_w03DIV301_21List", selectEs01_w03DIV301_21List);
		
		//00_담보콤보 가지고 오기 
		List<?> damboList = es01Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);
		
		//00_도로계통성
		List<?> selectEs01_w03DIV178List = es01W03Service.selectEs01_w03DIV178List(searchVO);
		model.addAttribute("selectEs01_w03DIV178List", selectEs01_w03DIV178List);
		
		//00_도로조건
		List<?> selectEs01_w03DIV127List = es01W03Service.selectEs01_w03DIV127List(searchVO);
		model.addAttribute("selectEs01_w03DIV127List", selectEs01_w03DIV127List);
		
		//00_본건과의거리
		List<?> selectEs01_w02_p02DIV185List = es01W02P02Service.selectEs01_w02_p02DIV185List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV185List", selectEs01_w02_p02DIV185List);
				
		//00_사진구분
		List<?> selectPhotoClassificationList = es01Service.selectPhotoClassificationList(es01VO);
		model.addAttribute("selectPhotoClassificationList", selectPhotoClassificationList);
		
		//00_상가의접근성
		List<?> selectEs01_w03DIV174List = es01W03Service.selectEs01_w03DIV174List(searchVO);
		model.addAttribute("selectEs01_w03DIV174List", selectEs01_w03DIV174List);
		
		//00_상가의층별위치
		List<?> selectEs01_w03DIV173List = es01W02P02Service.selectEs01_w03DIV173List(searchVO);
		model.addAttribute("selectEs01_w03DIV173List", selectEs01_w03DIV173List);
			
		//상가의층별위치_코드찾기 DIV173 데이터 없음
		
		//00_상가의발달정도
		List<?> selectEs01_w03DIV139List = es01W03Service.selectEs01_w03DIV139List(searchVO);
		model.addAttribute("selectEs01_w03DIV139List", selectEs01_w03DIV139List);
		
		//00_상가시설접근성
		List<?> selectEs01_w03DIV179List = es01W03Service.selectEs01_w03DIV179List(searchVO);
		model.addAttribute("selectEs01_w03DIV179List", selectEs01_w03DIV179List);
		
		//00_연립다세대_전유부분의위치
		List<?> selectEs01_w02_p02DIV111List = es01W02P02Service.selectEs01_w02_p02DIV111List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV111List", selectEs01_w02_p02DIV111List);
		
		//00_용도지역
		List<?> selectEs01_w03DIV114List = es01W03Service.selectEs01_w03DIV114List(searchVO);
		model.addAttribute("selectEs01_w03DIV114List", selectEs01_w03DIV114List);
		
		//00_위치별
		List<?> selectEs01_w03DIV181List = es01W03Service.selectEs01_w03DIV181List(searchVO);
		model.addAttribute("selectEs01_w03DIV181List", selectEs01_w03DIV181List);
					
		//00_인테리어비용
		List<?> selectInteriorCostsList = es01Service.selectInteriorCostsList(es01VO);
		model.addAttribute("selectInteriorCostsList", selectInteriorCostsList);
		
		//00_입지조건
		List<?> selectEs01_w03DIV150List = es01W03Service.selectEs01_w03DIV150List(searchVO);
		model.addAttribute("selectEs01_w03DIV150List", selectEs01_w03DIV150List);
		
		//00_전유부분의면적
		List<?> selectEs01_w03DIV104List = es01W03Service.selectEs01_w03DIV104List(searchVO);
		model.addAttribute("selectEs01_w03DIV104List", selectEs01_w03DIV104List);
		
		//전유부분의면적_코드찾기 TO_DO
		
		
		//00_전유부분의위치_총층수만
		List<?> selectEs01_w02_p02DIV107List = es01W02P02Service.selectEs01_w02_p02DIV107List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV107List", selectEs01_w02_p02DIV107List);
		
		//00_전유부분의위치_총층수만 TO_DO sql수정필요
		List<?> selectEs01_w02_p02DIV107FloorList = es01W02P02Service.selectEs01_w02_p02DIV107FloorList(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV107FloorList", selectEs01_w02_p02DIV107FloorList);
		
		//00_점유자의 형태 - 기존 전유부분의면적 sql이 상이 하여 추가  
		List<?> selectFormOccpantAptList = es01Service.selectFormOccpantAptList(es01VO);
		model.addAttribute("selectFormOccpantAptList", selectFormOccpantAptList);
		
		//00_접근조건
		List<?> selectEs01_w03DIV182List = es01W03Service.selectEs01_w03DIV182List(searchVO);
		model.addAttribute("selectEs01_w03DIV182List", selectEs01_w03DIV182List);
			
		//00_접합도로의폭
		List<?> selectEs01_w02_p02DIV154List = es01W02P02Service.selectEs01_w02_p02DIV154List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV154List", selectEs01_w02_p02DIV154List);
		
		//00_지목
		List<?> selectLandUseZoneList = es01Service.selectLandUseZoneList(es01VO);
		model.addAttribute("selectLandUseZoneList", selectLandUseZoneList);
			
		//00_지붕
		List<?> selectEs01_w02_p02157List = es01W02P02Service.selectEs01_w02_p02157List(searchVO);
		model.addAttribute("selectEs01_w02_p02157List", selectEs01_w02_p02157List);
			
		//00_집합건물종류
		List<?> selectEs01_w03DIV100List = es01W03Service.selectEs01_w03DIV100List(searchVO);
		model.addAttribute("selectEs01_w03DIV100List", selectEs01_w03DIV100List);
		
		//00_층별비교
		List<?> selectEs01_w02_p02DIV177List = es01W02P02Service.selectEs01_w02_p02DIV177List(searchVO);
		model.addAttribute("selectEs01_w02_p02DIV177List", selectEs01_w02_p02DIV177List);
		
		//부서목록
		List<?> selectEs01_w02_p02Via03List = es01W02P02Service.selectEs01_w02_p02Via03List(searchVO);
		model.addAttribute("selectEs01_w02_p02Via03List", selectEs01_w02_p02Via03List);
			
		//담보마스터  
		List<?> selectCollateralMasterList = es01Service.selectCollateralMasterList(es01VO);
		model.addAttribute("selectCollateralMasterList", selectCollateralMasterList);
		
		//입력표_집합건물
		List<?> selectEs01_w02_p02Es2011ist = es01W02P02Service.selectEs01_w02_p02Es2011ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2011ist", selectEs01_w02_p02Es2011ist);
		
		//규제의표시
		List<?> selectEs01_w03_p01ES2017List = es01W03P01Service.selectEs01_w03_p01ES2017List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2017List", selectEs01_w03_p01ES2017List);
		
		//입력표_낙찰가율보정표
		List<?> selectEs01_w02_p02Es2301ist = es01W02P02Service.selectEs01_w02_p02Es2301ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2301ist", selectEs01_w02_p02Es2301ist);
			
		//응찰입력표_마스터
		List<?> selectEs01_w03Es4110List = es01W03Service.selectEs01_w03Es4110List(searchVO);
		model.addAttribute("selectEs01_w03Es4110List", selectEs01_w03Es4110List);
					
		//응찰입력표_경매기일내역
		List<?> selectEs01_w03Es4111List = es01W03Service.selectEs01_w03Es4111List(searchVO);
		model.addAttribute("selectEs01_w03Es4111List", selectEs01_w03Es4111List);
				
		//응찰입력표_전감정개용
		List<?> selectEs01_w03Es4112List = es01W03Service.selectEs01_w03Es4112List(searchVO);
		model.addAttribute("selectEs01_w03Es4112List", selectEs01_w03Es4112List);
				
		//응찰입력표_선순위권리내역
		List<?> selectEs01_w03Es4113List = es01W03Service.selectEs01_w03Es4113List(searchVO);
		model.addAttribute("selectEs01_w03Es4113List", selectEs01_w03Es4113List);
			
		//응찰입력표_선순위부담금액
		List<?> selectEs01_w03Es4114List = es01W03Service.selectEs01_w03Es4114List(searchVO);
		model.addAttribute("selectEs01_w03Es4114List", selectEs01_w03Es4114List);
		
		//등록세
		List<?> selectEs01_w03RegistrationTaxList = es01W03Service.selectEs01_w03RegistrationTaxList(searchVO);
		model.addAttribute("selectEs01_w03RegistrationTaxList", selectEs01_w03RegistrationTaxList);
		
		//종합부동산세
		List<?> selectEs01_w03ComprehensiveRealEstateTaxList = es01W03Service.selectEs01_w03ComprehensiveRealEstateTaxList(searchVO);
		model.addAttribute("selectEs01_w03ComprehensiveRealEstateTaxList", selectEs01_w03ComprehensiveRealEstateTaxList);
		
		//처분비용
		List<?> selectEs01_w03DisposalCostList = es01W03Service.selectEs01_w03DisposalCostList(searchVO);
		model.addAttribute("selectEs01_w03DisposalCostList", selectEs01_w03DisposalCostList);
		
		//취득세
		List<?> selectEs01_w03AcquisitionTaxList = es01W03Service.selectEs01_w03AcquisitionTaxList(searchVO);
		model.addAttribute("selectEs01_w03AcquisitionTaxList", selectEs01_w03AcquisitionTaxList);
		
		//99_평가구분
		List<?> selectEvaluationClassificationList = es01Service.selectEvaluationClassificationList(es01VO);
		model.addAttribute("selectEvaluationClassificationList", selectEvaluationClassificationList);
		
		//감정가_00_본건사례
		List<?> selectEs01_w02_p02Es2182ist = es01W02P02Service.selectEs01_w02_p02Es2182ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2182ist", selectEs01_w02_p02Es2182ist);
		
		//감정가_00_본건사례
		List<?> selectEs01_w02_p02Es2112ist = es01W02P02Service.selectEs01_w02_p02Es2112ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2112ist", selectEs01_w02_p02Es2112ist);
		
		//감정가_00_비준가격
		List<?> selectEs01_w02_p02Es2122ist = es01W02P02Service.selectEs01_w02_p02Es2122ist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2122ist", selectEs01_w02_p02Es2122ist);
		
		//감정가_00_비준가격_집계표
		List<?> selectEs01_w02_p02Es2122Totalist = es01W02P02Service.selectEs01_w02_p02Es2122Totalist(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2122Totalist", selectEs01_w02_p02Es2122Totalist);
			
		//감정가_09_감정평가
		List<?> selectEs01_w02_p02Es2102List = es01W02P02Service.selectEs01_w02_p02Es2102List(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2102List", selectEs01_w02_p02Es2102List);
		
		//감정가_01_사례번호
		List<?> selectEs01_w02_p02Es2142List = es01W02P02Service.selectEs01_w02_p02Es2142List(searchVO);
		model.addAttribute("selectEs01_w02_p02Es2142List", selectEs01_w02_p02Es2142List);
		
		//공통보고서_당사설정액
		List<?> selectOurSetAmontList = es01Service.selectOurSetAmontList(es01VO);
		model.addAttribute("selectOurSetAmontList", selectOurSetAmontList);
		
		//공통보고서_당사설정액JB
		List<?> selectOurSetJBAmontList = es01Service.selectOurSetJBAmontList(es01VO);
		model.addAttribute("selectOurSetJBAmontList", selectOurSetJBAmontList);
		
		//공통보고서_보정표
		List<?> selectCorrectionTableList = es01Service.selectCorrectionTableList(es01VO);
		model.addAttribute("selectCorrectionTableList", selectCorrectionTableList);
		
		//공통보고서_보정표 JB
		List<?> selectCorrectionTableJBList = es01Service.selectCorrectionTableJBList(es01VO);
		model.addAttribute("selectCorrectionTableJBList", selectCorrectionTableJBList);
		
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
		
		//배당표_배당금_계산
		List<?> selectDividendTableCalculationList = es01Service.selectDividendTableCalculationList(es01VO);
		model.addAttribute("selectDividendTableCalculationList", selectDividendTableCalculationList);
		
		//배당표_주택임차보증금의계산
		List<?> selectculationHousingRentalDepositList = es01Service.selectculationHousingRentalDepositList(es01VO);
		model.addAttribute("selectculationHousingRentalDepositList", selectculationHousingRentalDepositList);
		
		//배당표_주택임차보증금계산_total
		List<?> selectDividendTableMCalculationList = es01Service.selectDividendTableMCalculationList(es01VO);
		model.addAttribute("selectDividendTableMCalculationList", selectDividendTableMCalculationList);
		
		//00_주류타입_사업부분
		List<?> liquorType = es01Service.selectLiquorType(es01VO);
		model.addAttribute("liquorType", liquorType);
		
		//영업감정요청자료
		
		//00_코드_각구의일련번호
		List<?> selectSerialNumberGuList = es01Service.selectSerialNumberGuList(es01VO);
		model.addAttribute("selectSerialNumberGuList", selectSerialNumberGuList);
		
		//00_코드_권리의내용
		List<?> selectContentRightList = es01Service.selectContentRightList(es01VO);
		model.addAttribute("selectContentRightList", selectContentRightList);
		
		//00_코드_순위
		List<?> selectRankingCodeList = es01Service.selectRankingCodeList(es01VO);
		model.addAttribute("selectRankingCodeList", selectRankingCodeList);
		
		//00_코드_최고채권액
		List<?> selectMaxBondAmountList = es01Service.selectMaxBondAmountList(es01VO);
		model.addAttribute("selectMaxBondAmountList", selectMaxBondAmountList);
		
		List<?> selectEs01_w03_p01Div193List = es01W03P01Service.selectEs01_w03_p01Div193List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div193List", selectEs01_w03_p01Div193List);
		
		//낙찰가율보정표 
		List<?> selectSuccessfulBidRateTableList = es01Service.selectSuccessfulBidRateTableList(es01VO);
		model.addAttribute("selectSuccessfulBidRateTableList", selectSuccessfulBidRateTableList);
		
		
		return "es01/es01_w02_P02";
	}
    
    @RequestMapping(value = "/es01_w02_p02save.do")
    public String es01_w02_p02save(@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO, ModelMap model) throws Exception {
    	
    	String estiDateCheck="";
    	String yyyy="";
		String seq="";
		String rightDate="";
		
	
		String dispRankTP=(String) es01VO.getDispRank();
		String rightDateTP=(String) es01VO.getRightDate();
		String rightCodeTP=(String) es01VO.getRightCode();
		String hiteYnTP=(String) es01VO.getHiteYn();
		String eraYnTP=(String) es01VO.getEraYn();
		String credSelfAmtOrgTP=(String) es01VO.getCredSelfAmtOrg();
		String credCombAmtOrgTP=(String) es01VO.getCredCombAmtOrg();
		String rightPersonTP=(String) es01VO.getRightPerson();
		String proRateCodeTP=(String) es01VO.getProRateCode();
		
		String	auLnSeqNmTP=(String) es01VO.getAuLnSeqNm();
		String	auNoTP=(String) es01VO.getAuNo();
		String	auJusoTP=(String) es01VO.getAuJuso();
		String	auFloorCodeTP=(String) es01VO.getAuFloorCode();
		String	auFloorRateTP=(String) es01VO.getAuFloorRate();
		String	auOnlySizeTP=(String) es01VO.getAuOnlySize();
		String	auBYearTP=(String) es01VO.getAuBYear();
		String	auElapYearTP=(String) es01VO.getAuElapYear();
		String	auCbStrucTP=(String) es01VO.getAuCbStruc();
		String	auNumYearTP=(String) es01VO.getAuNumYear();
		String	auLawAmtTP=(String) es01VO.getAuLawAmt();
		String	auCurrSizeDanTP=(String) es01VO.getAuCurrSizeDan();
		String	auBidAmtTP=(String) es01VO.getAuBidAmt();
		String	auBidRateTP=(String) es01VO.getAuBidRate();
		
		String[] auLnSeqNmStr=auLnSeqNmTP.split(",",-1);
		String[] auNoStr=auNoTP.split(",",-1);
		String[] auJusoStr=auJusoTP.split(",",-1);
		String[] auFloorCodeStr=auFloorCodeTP.split(",",-1);
		String[] auFloorRateStr=auFloorRateTP.split(",",-1);
		String[] auOnlySizeStr=auOnlySizeTP.split(",",-1);
		String[] auBYearStr=auBYearTP.split(",",-1);
		String[] auElapYearStr=auElapYearTP.split(",",-1);
		String[] auCbStrucStr=auCbStrucTP.split(",",-1);
		String[] auNumYearStr=auNumYearTP.split(",",-1);
		String[] auLawAmtStr=auLawAmtTP.split(",",-1);
		String[] auCurrSizeDanStr=auCurrSizeDanTP.split(",",-1);
		String[] auBidAmtStr=auBidAmtTP.split(",",-1);
		String[] auBidRateStr=auBidRateTP.split(",",-1);
		
		String[] dispRankTPStr = dispRankTP.split(",");
		String[] rightDateTPStr = rightDateTP.split(",",-1);
		String[] rightCodeTPStr = rightCodeTP.split(",",-1);
		String[] hiteYnTPStr = hiteYnTP.split(",",-1);
		String[] eraYnTPStr = eraYnTP.split(",",-1);
		String[] credSelfAmtOrgTPStr = credSelfAmtOrgTP.split(",",-1);
		String[] credCombAmtOrgTPStr = credCombAmtOrgTP.split(",",-1);
		String[] rightPersonTPStr = rightPersonTP.split(",",-1);
		String[] proRateCodeTPStr = proRateCodeTP.split(",",-1);
		
		String	priceLnSeqTP =(String) es01VO.getPriceLnSeq();
		String	priceJusoTP=(String) es01VO.getPriceJuso();
		String	priceLotNumTP=(String) es01VO.getPriceLotNum();
		String	priceDistanceTP=(String) es01VO.getPriceDistance();
		String	priceHouseCntTP=(String) es01VO.getPriceHouseCnt();
		String	priceBYearTP=(String) es01VO.getPriceBYear();
		String	priceElapYearTP=(String) es01VO.getPriceElapYear();
		String	priceCbStrucTP=(String) es01VO.getPriceCbStruc();
		String	priceNumYearTP=(String) es01VO.getPriceNumYear();
		String	priceCheckYn1TP=(String) es01VO.getPriceCheckYn1();
		String	priceOnlySize1TP=(String) es01VO.getPriceOnlySize1();
		String	priceCurrMinAmt1TP=(String) es01VO.getPriceCurrMinAmt1();
		String	priceCurrMaxAmt1TP=(String) es01VO.getPriceCurrMaxAmt1();
		String	priceCurrAvgAmt1TP=(String) es01VO.getPriceCurrAvgAmt1();
		String	priceCurrSizeDan1TP=(String) es01VO.getPriceCurrSizeDan1();
		String	priceLeaseAmt1TP=(String) es01VO.getPriceLeaseAmt1();
		String	priceLeaseRate1TP=(String) es01VO.getPriceLeaseRate1();
		String	priceCheckYn2TP=(String) es01VO.getPriceCheckYn2();
		String	priceOnlySize2TP=(String) es01VO.getPriceOnlySize2();
		String	priceCurrMinAmt2TP=(String) es01VO.getPriceCurrMinAmt2();
		String	priceCurrMaxAmt2TP=(String) es01VO.getPriceCurrMaxAmt2();
		String	priceCurrAvgAmt2TP=(String) es01VO.getPriceCurrAvgAmt2();
		String	priceCurrSizeDan2TP=(String) es01VO.getPriceCurrSizeDan2();
		String	priceLeaseAmt2TP=(String) es01VO.getPriceLeaseAmt2();
		String	priceLeaseRate2TP=(String) es01VO.getPriceLeaseRate2();
		String	priceCheckYn3TP=(String) es01VO.getPriceCheckYn3();
		String	priceOnlySize3TP=(String) es01VO.getPriceOnlySize3();
		String	priceCurrMinAmt3TP=(String) es01VO.getPriceCurrMinAmt3();
		String	priceCurrMaxAmt3TP=(String) es01VO.getPriceCurrMaxAmt3();
		String	priceCurrAvgAmt3TP=(String) es01VO.getPriceCurrAvgAmt3();
		String	priceCurrSizeDan3TP=(String) es01VO.getPriceCurrSizeDan3();
		String	priceLeaseAmt3TP=(String) es01VO.getPriceLeaseAmt3();
		String	priceLeaseRate3TP=(String) es01VO.getPriceLeaseRate3();
		
		String[] priceLnSeqStr= priceLnSeqTP.split(",",-1);
		String[] priceJusoStr= priceJusoTP.split(",",-1);
		String[] priceLotNumStr=priceLotNumTP.split(",",-1);
		String[] priceDistanceStr =priceDistanceTP.split(",",-1);
		String[] priceHouseCntStr=priceHouseCntTP.split(",",-1);
		String[] priceBYearStr=priceBYearTP.split(",",-1);
		String[] priceElapYearStr=priceElapYearTP.split(",",-1);
		String[] priceCbStrucStr=priceCbStrucTP.split(",",-1);
		String[] priceNumYearStr=priceNumYearTP.split(",",-1);
		String[] priceCheckYn1Str=priceCheckYn1TP.split(",",-1);
		String[] priceOnlySize1Str=priceOnlySize1TP.split(",",-1);
		String[] priceCurrMinAmt1Str=priceCurrMinAmt1TP.split(",",-1);
		String[] priceCurrMaxAmt1Str=priceCurrMaxAmt1TP.split(",",-1);
		String[] priceCurrAvgAmt1Str=priceCurrAvgAmt1TP.split(",",-1);
		String[] priceCurrSizeDan1Str=priceCurrSizeDan1TP.split(",",-1);
		String[] priceLeaseAmt1Str=priceLeaseAmt1TP.split(",",-1);
		String[] priceLeaseRate1Str=priceLeaseRate1TP.split(",",-1);
		String[] priceCheckYn2Str=priceCheckYn2TP.split(",",-1);
		String[] priceOnlySize2Str=priceOnlySize2TP.split(",",-1);
		String[] priceCurrMinAmt2Str=priceCurrMinAmt2TP.split(",",-1);
		String[] priceCurrMaxAmt2Str=priceCurrMaxAmt2TP.split(",",-1);
		String[] priceCurrAvgAmt2Str=priceCurrAvgAmt2TP.split(",",-1);
		String[] priceCurrSizeDan2Str=priceCurrSizeDan2TP.split(",",-1);
		String[] priceLeaseAmt2Str=priceLeaseAmt2TP.split(",",-1);
		String[] priceLeaseRate2Str=priceLeaseRate2TP.split(",",-1);
		String[] priceCheckYn3Str=priceCheckYn3TP.split(",",-1);
		String[] priceOnlySize3Str=priceOnlySize3TP.split(",",-1);
		String[] priceCurrMinAmt3Str=priceCurrMinAmt3TP.split(",",-1);
		String[] priceCurrMaxAmt3Str=priceCurrMaxAmt3TP.split(",",-1);
		String[] priceCurrAvgAmt3Str=priceCurrAvgAmt3TP.split(",",-1);
		String[] priceCurrSizeDan3Str=priceCurrSizeDan3TP.split(",",-1);
		String[] priceLeaseAmt3Str=priceLeaseAmt3TP.split(",",-1);
		String[] priceLeaseRate3Str=priceLeaseRate3TP.split(",",-1);
		
		 String	price2ExampleGuNmTP=(String)es01VO.getPrice2ExampleGuNm();
		 String	price2ExampleGuCdTP=(String)es01VO.getPrice2ExampleGuCd();
		 String	price2FactorTotTP=(String)es01VO.getPrice2FactorTot();
		 String	price2PriceDateSTP=(String)es01VO.getPrice2PriceDateS();
		 String	price2ApplDanTP=(String)es01VO.getPrice2ApplDan();
		 String	price2ExampleGuTP=(String)es01VO.getPrice2ExampleGu();
		 String	price2LnSeqTP=(String)es01VO.getPrice2LnSeq();
		 String	price2JusoTP=(String)es01VO.getPrice2Juso();
		 String	price2JusoCTP=(String)es01VO.getPrice2JusoC();
		 String	price2CurrSizeDanTP=(String)es01VO.getPrice2CurrSizeDan();
		 String	price2PriceRateCTP=(String)es01VO.getPrice2PriceRateC();
		 String	price2FloorMCodeTP=(String)es01VO.getPrice2FloorMCode();
		 String	price2FloorMRateTP=(String)es01VO.getPrice2FloorMRate();
		 String	price2FloorSCodeTP=(String)es01VO.getPrice2FloorSCode();
		 String	price2FloorSRateTP=(String)es01VO.getPrice2FloorSRate();
		 String	price2FloorCTP=(String)es01VO.getPrice2FloorC();
		 String	price2OfJangaRateMTP=(String)es01VO.getPrice2OfJangaRateM();
		 String	price2OfJangaRateSTP=(String)es01VO.getPrice2OfJangaRateS();
		 String	price2OfJangaRateCTP=(String)es01VO.getPrice2OfJangaRateC();
		 String	price2ApasDanTP=(String)es01VO.getPrice2ApasDan();
		 String	price2OnlySizeTP=(String)es01VO.getPrice2OnlySize();
		 String	price2PriceDateMTP=(String)es01VO.getPrice2PriceDateM();
		 String	price2PriceRateMTP=(String)es01VO.getPrice2PriceRateM();
		 String	price2PriceRateSTP=(String)es01VO.getPrice2PriceRateS();
		 String	price2MinAmtTP=(String)es01VO.getPrice2MinAmt();
		 String	price2ManAmtTP=(String)es01VO.getPrice2ManAmt();
		 String	price2HwansanAmtTP=(String)es01VO.getPrice2HwansanAmt();
		 
		 String[] price2ExampleGuNmStr=price2ExampleGuNmTP.split(",",-1); 
		 String[] price2ExampleGuCdStr=price2ExampleGuCdTP.split(",",-1); 
		 String[] price2FactorTotStr=price2FactorTotTP.split(",",-1); 	
		 String[] price2PriceDateSStr=price2PriceDateSTP.split(",",-1); 
		 String[] price2ApplDanStr=price2ApplDanTP.split(",",-1); 	
		 String[] price2ExampleGuStr=price2ExampleGuTP.split(",",-1); 	
		 String[] price2LnSeqStr=price2LnSeqTP.split(",",-1); 		
		 String[] price2JusoStr=price2JusoTP.split(",",-1); 		
		 String[] price2JusoCStr=price2JusoCTP.split(",",-1); 		
		 String[] price2CurrSizeDanStr=price2CurrSizeDanTP.split(",",-1); 
		 String[] price2PriceRateCStr=price2PriceRateCTP.split(",",-1); 
		 String[] price2FloorMCodeStr=price2FloorMCodeTP.split(",",-1); 
		 String[] price2FloorMRateStr=price2FloorMRateTP.split(",",-1); 
		 String[] price2FloorSCodeStr=price2FloorSCodeTP.split(",",-1); 
		 String[] price2FloorSRateStr=price2FloorSRateTP.split(",",-1); 
		 String[] price2FloorCStr=price2FloorCTP.split(",",-1); 	
		 String[] price2OfJangaRateMStr=price2OfJangaRateMTP.split(",",-1);
		 String[] price2OfJangaRateSStr=price2OfJangaRateSTP.split(",",-1);
		 String[] price2OfJangaRateCStr=price2OfJangaRateCTP.split(",",-1);
		 String[] price2ApasDanStr=price2ApasDanTP.split(",",-1);	
		 
		 String[] price2OnlySizeStr=price2OnlySizeTP.split(",",-1);	
		 String[] price2PriceDateMStr=price2PriceDateMTP.split(",",-1);	
		 String[] price2PriceRateMStr=price2PriceRateMTP.split(",",-1);	
		 String[] price2PriceRateSStr=price2PriceRateSTP.split(",",-1);	
		 String[] price2MinAmtStr=price2MinAmtTP.split(",",-1);	
		 String[] price2ManAmtStr=price2ManAmtTP.split(",",-1);	
		 String[] price2HwansanAmtStr=price2HwansanAmtTP.split(",",-1);	
		

		int checkCnt=0;
    	
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
			 es01Service.es01_w02_es2017_save(es01VO);
			 es01Service.es01_w02_es2011_save(es01VO);
			 es01Service.es01_w02_es2301_save(es01VO);
			 es01W02P02Service.es01_w02_es2182_save(es01VO);
			 es01W02P02Service.es01_w02_es2102_save(es01VO);
			 es01Service.es01_w02_es2401_save(es01VO);

			  //insert ES2142
			    checkCnt=es01W02P02Service.selectEs2142DelCheck(es01VO);
			    if(checkCnt > 0) {
			    	es01W02P02Service.deleteEs2142Del(es01VO);
			    }
			    for(int i=0; i<priceLnSeqStr.length; i++){
			    	 
			    	 es01VO.setPriceLnSeq(priceLnSeqStr[i]);
			    	 es01VO.setPriceJuso(priceJusoStr[i]);
			    	 es01VO.setPriceLotNum(priceLotNumStr[i]);
			    	 es01VO.setPriceDistance(priceDistanceStr[i]);
			    	 es01VO.setPriceHouseCnt(priceHouseCntStr[i]);
			    	 es01VO.setPriceBYear(priceBYearStr[i]);
			    	 es01VO.setPriceElapYear(priceElapYearStr[i]);
			    	 es01VO.setPriceCbStruc(priceCbStrucStr[i]);
			    	 es01VO.setPriceNumYear(priceNumYearStr[i]);
			    	 es01VO.setPriceCheckYn1(priceCheckYn1Str[i]);
			    	 es01VO.setPriceOnlySize1(priceOnlySize1Str[i]);
			    	 es01VO.setPriceCurrMinAmt1(priceCurrMinAmt1Str[i]);
			    	 es01VO.setPriceCurrMaxAmt1(priceCurrMaxAmt1Str[i]);
			    	 es01VO.setPriceCurrAvgAmt1(priceCurrAvgAmt1Str[i]);
			    	 es01VO.setPriceCurrSizeDan1(priceCurrSizeDan1Str[i]);
			    	 es01VO.setPriceLeaseAmt1(priceLeaseAmt1Str[i]);
			    	 es01VO.setPriceLeaseRate1(priceLeaseRate1Str[i]);
			    	 es01VO.setPriceCheckYn2(priceCheckYn2Str[i]);
			    	 es01VO.setPriceOnlySize2(priceOnlySize2Str[i]);
			    	 es01VO.setPriceCurrMinAmt2(priceCurrMinAmt2Str[i]);
			    	 es01VO.setPriceCurrMaxAmt2(priceCurrMaxAmt2Str[i]);
			    	 es01VO.setPriceCurrAvgAmt2(priceCurrAvgAmt2Str[i]);
			    	 es01VO.setPriceCurrSizeDan2(priceCurrSizeDan2Str[i]);
			    	 es01VO.setPriceLeaseAmt2(priceLeaseAmt2Str[i]);
			    	 es01VO.setPriceLeaseRate2(priceLeaseRate2Str[i]);
			    	 es01VO.setPriceCheckYn3(priceCheckYn3Str[i]);
			    	 es01VO.setPriceOnlySize3(priceOnlySize3Str[i]);
			    	 es01VO.setPriceCurrMinAmt3(priceCurrMinAmt3Str[i]);
			    	 es01VO.setPriceCurrMaxAmt3(priceCurrMaxAmt3Str[i]);
			    	 es01VO.setPriceCurrAvgAmt3(priceCurrAvgAmt3Str[i]);
			    	 es01VO.setPriceCurrSizeDan3(priceCurrSizeDan3Str[i]);
			    	 es01VO.setPriceLeaseAmt3(priceLeaseAmt3Str[i]);
			    	 es01VO.setPriceLeaseRate3(priceLeaseRate3Str[i]);
			    	
			    	es01W02P02Service.es01_w02_2142_insert(es01VO);
			    }
			    
			  //insert 2112
			    checkCnt=es01W02P02Service.selectEs2112DelCheck(es01VO);
			    if(checkCnt > 0) {
			    	es01W02P02Service.deleteEs2112Del(es01VO);
			    }
			    for(int i=0; i<auLnSeqNmStr.length; i++){
			    	
			    	es01VO.setAuLnSeqNm(auLnSeqNmStr[i]);			
			    	es01VO.setAuNo(auNoStr[i]);                	
			    	es01VO.setAuJuso(auJusoStr[i]);              	
			    	es01VO.setAuFloorCode(auFloorCodeStr[i]);         	
			    	es01VO.setAuFloorRate(auFloorRateStr[i]);         	
			    	es01VO.setAuOnlySize(auOnlySizeStr[i]);          	
			    	es01VO.setAuBYear(auBYearStr[i]);             	
			    	es01VO.setAuElapYear(auElapYearStr[i]);         	
			    	es01VO.setAuCbStruc(auCbStrucStr[i]);          	
			    	es01VO.setAuNumYear(auNumYearStr[i]);           	
			    	es01VO.setAuLawAmt(auLawAmtStr[i]);          	
			    	es01VO.setAuCurrSizeDan(auCurrSizeDanStr[i]);     	
			    	es01VO.setAuBidAmt(auBidAmtStr[i]);          	
			    	es01VO.setAuBidRate(auBidRateStr[i]);          	
			    	
			    	es01W02P02Service.es01_w02_es2112_save(es01VO);
			    }
			    
			  //insert 2404
			     checkCnt=es01Service.selectEs2404DelCheck(es01VO);
			    if(checkCnt > 0) {
			    	//delete
			    	es01Service.deleteEs2404Del(es01VO);
			    }
			    for(int i=0; i<dispRankTPStr.length; i++){
		    	 	
		    	 	rightDate=rightDateTPStr[i].trim();
		    	 	rightDate=rightDate.replaceAll("-", "");
		    	 	
		    	 	es01VO.setDispRankData(dispRankTPStr[i]);
		    	 	es01VO.setRightCodeData(rightDateTPStr[i].trim());
		    	 	es01VO.setRightDateData(rightCodeTPStr[i]);
		    	 	es01VO.setHiteYnData(hiteYnTPStr[i]);
		    	 	es01VO.setEraYnData(eraYnTPStr[i]);
		    	 	es01VO.setCredSelfAmtOrgData(credSelfAmtOrgTPStr[i]);
		    	 	es01VO.setCredCombAmtOrgData(credCombAmtOrgTPStr[i]);
		    	 	es01VO.setRightPersonData(rightPersonTPStr[i]);
		    	 	es01VO.setProRateCodeData(proRateCodeTPStr[i]);
		    	 	es01Service.es01_w02_es2404_save(es01VO);
		    	}
			    
			    //insert ES2122 
			    checkCnt=es01W02P02Service.selectEs2122DelCheck(es01VO);
			    if(checkCnt > 0) {
			    	//delete
			    	es01W02P02Service.deleteEs2122Del(es01VO);
			    }
			    for(int i=0; i<price2ExampleGuNmStr.length; i++){

					 es01VO.setPrice2ExampleGuNm(price2ExampleGuNmStr[i]);
					 es01VO.setPrice2ExampleGuCd(price2ExampleGuCdStr[i]);
					 es01VO.setPrice2FactorTot(price2FactorTotStr[i]);
					 es01VO.setPrice2PriceDateS(price2PriceDateSStr[i]);
					 es01VO.setPrice2ApplDan(price2ApplDanStr[i]);
					 es01VO.setPrice2ExampleGu(price2ExampleGuStr[i]);
					 es01VO.setPrice2LnSeq(price2LnSeqStr[i]);
					 es01VO.setPrice2Juso(price2JusoStr[i]);
					 es01VO.setPrice2JusoC(price2JusoCStr[i]);
					 es01VO.setPrice2CurrSizeDan(price2CurrSizeDanStr[i]);
					 es01VO.setPrice2PriceRateC( price2PriceRateCStr[i]);
					 es01VO.setPrice2FloorMCode(price2FloorMCodeStr[i]);
					 es01VO.setPrice2FloorMRate(price2FloorMRateStr[i]);
					 es01VO.setPrice2FloorSCode(price2FloorSCodeStr[i]);
					 es01VO.setPrice2FloorSRate(price2FloorSRateStr[i]);
					 es01VO.setPrice2FloorC(price2FloorCStr[i]);
					 es01VO.setPrice2OfJangaRateM(price2OfJangaRateMStr[i]);
					 es01VO.setPrice2OfJangaRateS(price2OfJangaRateSStr[i]);
					 es01VO.setPrice2OfJangaRateC(price2OfJangaRateCStr[i]);
					 es01VO.setPrice2ApasDan(price2ApasDanStr[i]);
					 es01VO.setPrice2OnlySize(price2OnlySizeStr[i]);
					 es01VO.setPrice2PriceDateM(price2PriceDateMStr[i]);
					 es01VO.setPrice2PriceRateM(price2PriceRateMStr[i]);
					 es01VO.setPrice2PriceRateS(price2PriceRateSStr[i]);
					 es01VO.setPrice2MinAmt(price2MinAmtStr[i]);   
					 es01VO.setPrice2ManAmt(price2ManAmtStr[i]);   
					 es01VO.setPrice2HwansanAmt(price2HwansanAmtStr[i]);
					 
					 es01W02P02Service.es01_w02_es2122_insert(es01VO);
			    }
			    
			    
    	  String param1="";
		  String param2="";
		  param1=es01VO.getSearchSeq();
		  param2=es01VO.getSearchYyyy();
		  
    	return "forward:/es01/es01_w02_P02_edit.do?targetSeq="+param1+"&&targetYyyy="+param2;
	
    }
    
    
}
