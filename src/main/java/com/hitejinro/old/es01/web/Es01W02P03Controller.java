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
import com.hitejinro.old.es01.service.*;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
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
public class Es01W02P03Controller {

	private final Es01Service es01Service;
	private final Es01W03Service es01W03Service;
	private final Es01W03P01Service es01W03P01Service;
	private final Es01W02P02Service es01W02P02Service;
	private final Es01W02P03Service es01W02P03Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es01W02P03Controller.class); 
	
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
    @RequestMapping(value = "/es01_w02_p03_edit.do")
    public String es01_w02_p03_edit(@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO, ModelMap model) throws Exception {
    	
    	//00_가격동향
		List<?> selectes01_w03DIV186List = es01W03Service.selectEs01_w03DIV186List(searchVO);
		model.addAttribute("selectes01_w03DIV186List", selectes01_w03DIV186List);
		System.out.println("selectes01_w03DIV186List===>"+selectes01_w03DIV186List);

		//00_건축물의경과년도 - 기존 전유부분의면적 sql이 상이 하여 추가  
		List<?> selectBuildTransitYearAptList = es01Service.selectBuildTransitYearAptList(es01VO);
		model.addAttribute("selectBuildTransitYearAptList", selectBuildTransitYearAptList);
		System.out.println("selectBuildTransitYearAptList===>"+selectBuildTransitYearAptList);
		
		// 결재진행사항  가지고 오기 
		List<?> procList = es01Service.procList(searchVO);
		model.addAttribute("procList", procList);
		System.out.println("procList===>"+procList);
		
		//00_공공시설 접근성
		List<?> selectEs01_w03DIV180List = es01W03Service.selectEs01_w03DIV180List(searchVO);
		model.addAttribute("selectEs01_w03DIV180List", selectEs01_w03DIV180List);
		System.out.println("selectEs01_w03DIV180List===>"+selectEs01_w03DIV180List);
		
		//00_구조
		List<?> selectEs01_w03DIV301List = es01W03Service.selectEs01_w03DIV301List(searchVO);
		model.addAttribute("selectEs01_w03DIV301List", selectEs01_w03DIV301List);
		System.out.println("selectEs01_w03DIV301List===>"+selectEs01_w03DIV301List);
		
		//00_내용연수
		List<?> selectEs01_w03DIV301_21List = es01W03Service.selectEs01_w03DIV301_21List(searchVO);
		model.addAttribute("selectEs01_w03DIV301_21List", selectEs01_w03DIV301_21List);
		System.out.println("selectEs01_w03DIV301_21List===>"+selectEs01_w03DIV301_21List);
		
		// 담보콤보 가지고 오기 
		List<?> damboList = es01Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);
				
		//00_도로계통성
		List<?> selectEs01_w03DIV178List = es01W03Service.selectEs01_w03DIV178List(searchVO);
		model.addAttribute("selectEs01_w03DIV178List", selectEs01_w03DIV178List);
		System.out.println("selectEs01_w03DIV178List===>"+selectEs01_w03DIV178List);
		
		//00_도로조건
		List<?> selectEs01_w03DIV127List = es01W03Service.selectEs01_w03DIV127List(searchVO);
		model.addAttribute("selectEs01_w03DIV127List", selectEs01_w03DIV127List);
		System.out.println("selectEs01_w03DIV127List===>"+selectEs01_w03DIV127List);

		//00_사진구분
		List<?> selectPhotoClassificationList = es01Service.selectPhotoClassificationList(es01VO);
		model.addAttribute("selectPhotoClassificationList", selectPhotoClassificationList);
		System.out.println("selectPhotoClassificationList===>"+selectPhotoClassificationList);
		
		//00_상가의접근성
		List<?> selectEs01_w03DIV174List = es01W03Service.selectEs01_w03DIV174List(searchVO);
		model.addAttribute("selectEs01_w03DIV174List", selectEs01_w03DIV174List);
		System.out.println("selectEs01_w03DIV174List===>"+selectEs01_w03DIV174List);
		
		//00_상가의층별위치
		List<?> selectEs01_w03DIV177List = es01W03Service.selectEs01_w03DIV177List(searchVO);
		model.addAttribute("selectEs01_w03DIV177List", selectEs01_w03DIV177List);
		System.out.println("selectEs01_w03DIV177List===>"+selectEs01_w03DIV177List);
		
		//상가의층별위치_코드찾기 DIV173 데이터 없음
		
		//00_상가의발달정도
		List<?> selectEs01_w03DIV139List = es01W03Service.selectEs01_w03DIV139List(searchVO);
		model.addAttribute("selectEs01_w03DIV139List", selectEs01_w03DIV139List);
		System.out.println("selectEs01_w03DIV139List===>"+selectEs01_w03DIV139List);
				
		//00_상가시설접근성
		List<?> selectEs01_w03DIV179List = es01W03Service.selectEs01_w03DIV179List(searchVO);
		model.addAttribute("selectEs01_w03DIV179List", selectEs01_w03DIV179List);
		System.out.println("selectEs01_w03DIV179List===>"+selectEs01_w03DIV179List);
		
		//00_용도지역
		List<?> selectEs01_w03DIV114List = es01W03Service.selectEs01_w03DIV114List(searchVO);
		model.addAttribute("selectEs01_w03DIV114List", selectEs01_w03DIV114List);
		System.out.println("selectEs01_w03DIV114List===>"+selectEs01_w03DIV114List);

		//00_위치별
		List<?> selectEs01_w03DIV181List = es01W03Service.selectEs01_w03DIV181List(searchVO);
		model.addAttribute("selectEs01_w03DIV181List", selectEs01_w03DIV181List);
		System.out.println("selectEs01_w03DIV181List===>"+selectEs01_w03DIV181List);
		
		//00_인테리어비용
		List<?> selectEs01_w03DIV191List = es01W03Service.selectEs01_w03DIV191List(searchVO);
		model.addAttribute("selectEs01_w03DIV191List", selectEs01_w03DIV191List);
		System.out.println("selectEs01_w03DIV191List===>"+selectEs01_w03DIV191List);
		
		//00_입지조건
		List<?> selectEs01_w03DIV150List = es01W03Service.selectEs01_w03DIV150List(searchVO);
		model.addAttribute("selectEs01_w03DIV150List", selectEs01_w03DIV150List);
		System.out.println("selectEs01_w03DIV150List===>"+selectEs01_w03DIV150List);
		
		//00_전유부분의면적
		List<?> selectEs01_w03DIV104List = es01W03Service.selectEs01_w03DIV104List(searchVO);
		model.addAttribute("selectEs01_w03DIV104List", selectEs01_w03DIV104List);
		System.out.println("selectEs01_w03DIV104List===>"+selectEs01_w03DIV104List);
	
		//00_전유부분의위치
		List<?> selectEs01_w03DIV207List = es01W03Service.selectEs01_w03DIV207List(searchVO);
		model.addAttribute("selectEs01_w03DIV207List", selectEs01_w03DIV207List);
		System.out.println("selectEs01_w03DIV207List===>"+selectEs01_w03DIV207List);
		
		//00_전유부분의위치_층수만
		List<?> selectEs01_w03DIV207FloorList = es01W03Service.selectEs01_w03DIV207FloorList(searchVO);
		model.addAttribute("selectEs01_w03DIV207FloorList", selectEs01_w03DIV207FloorList);
		System.out.println("selectEs01_w03DIV207FloorList===>"+selectEs01_w03DIV207FloorList);
		
		//00_접근조건
		List<?> selectEs01_w03DIV182List = es01W03Service.selectEs01_w03DIV182List(searchVO);
		model.addAttribute("selectEs01_w03DIV182List", selectEs01_w03DIV182List);
		System.out.println("selectEs01_w03DIV182List===>"+selectEs01_w03DIV182List);
		
		//00_접한도로의폭
		List<?> selectEs01_w03DIV154List = es01W03Service.selectEs01_w03DIV154List(searchVO);
		model.addAttribute("selectEs01_w03DIV154List", selectEs01_w03DIV154List);
		System.out.println("selectEs01_w03DIV154List===>"+selectEs01_w03DIV154List);
		
		//00_집합건물종류
		List<?> selectEs01_w03DIV100List = es01W03Service.selectEs01_w03DIV100List(searchVO);
		model.addAttribute("selectEs01_w03DIV100List", selectEs01_w03DIV100List);
		System.out.println("selectEs01_w03DIV100List===>"+selectEs01_w03DIV100List);
		
		//00_층별비고
		List<?> selectEs01_w03DIV177FloorList = es01W03Service.selectEs01_w03DIV177FloorList(searchVO);
		model.addAttribute("selectEs01_w03DIV177FloorList", selectEs01_w03DIV177FloorList);
		System.out.println("selectEs01_w03DIV177FloorList===>"+selectEs01_w03DIV177FloorList);
		
		//담보 마스타
		// 입력표_담보마스터  보류
		List<?> selectCollateralMasterList = es01Service.selectCollateralMasterList(es01VO);
		model.addAttribute("selectCollateralMasterList", selectCollateralMasterList);
		System.out.println("selectCollateralMasterList===>"+selectCollateralMasterList);
		
		//prt_01_입력표_집합건물
		List<?> selectCollateralBuildingList = es01Service.selectCollateralBuildingList(es01VO);
		model.addAttribute("selectCollateralBuildingList", selectCollateralBuildingList);
		System.out.println("selectCollateralBuildingList===>"+selectCollateralBuildingList);
		
		//prt_01_입력표_규제사항개관
		List<?> selectRegulatoryAffairsOfficerList = es01Service.selectRegulatoryAffairsOfficerList(es01VO);
		model.addAttribute("selectRegulatoryAffairsOfficerList", selectRegulatoryAffairsOfficerList);
		System.out.println("selectRegulatoryAffairsOfficerList===>"+selectRegulatoryAffairsOfficerList);
		
		//낙찰가율보정표 
		List<?> selectSuccessfulBidRateTableList = es01Service.selectSuccessfulBidRateTableList(es01VO);
		model.addAttribute("selectSuccessfulBidRateTableList", selectSuccessfulBidRateTableList);
		System.out.println("selectSuccessfulBidRateTableList===>"+selectSuccessfulBidRateTableList);
		
		//응찰입력표_마스터
		List<?> selectEs01_w03Es4110List = es01W03Service.selectEs01_w03Es4110List(searchVO);
		model.addAttribute("selectEs01_w03Es4110List", selectEs01_w03Es4110List);
		System.out.println("selectEs01_w03Es4110List===>"+selectEs01_w03Es4110List);
		
		//응찰입력표_경매기일내역
		List<?> selectEs01_w03Es4111List = es01W03Service.selectEs01_w03Es4111List(searchVO);
		model.addAttribute("selectEs01_w03Es4111List", selectEs01_w03Es4111List);
		System.out.println("selectEs01_w03Es4111List===>"+selectEs01_w03Es4111List);
		
		//응찰입력표_전감정개용
		List<?> selectEs01_w03Es4112List = es01W03Service.selectEs01_w03Es4112List(searchVO);
		model.addAttribute("selectEs01_w03Es4112List", selectEs01_w03Es4112List);
		System.out.println("selectEs01_w03Es4112List===>"+selectEs01_w03Es4112List);
		
		//응찰입력표_선순위권리내역
		List<?> selectEs01_w03Es4113List = es01W03Service.selectEs01_w03Es4113List(searchVO);
		model.addAttribute("selectEs01_w03Es4113List", selectEs01_w03Es4113List);
		System.out.println("selectEs01_w03Es4113List===>"+selectEs01_w03Es4113List);
		
		//응찰입력표_선순위부담금액
		List<?> selectEs01_w03Es4114List = es01W03Service.selectEs01_w03Es4114List(searchVO);
		model.addAttribute("selectEs01_w03Es4114List", selectEs01_w03Es4114List);
		System.out.println("selectEs01_w03Es4114List===>"+selectEs01_w03Es4114List);
		
		//등록세
		List<?> selectEs01_w03RegistrationTaxList = es01W03Service.selectEs01_w03RegistrationTaxList(searchVO);
		model.addAttribute("selectEs01_w03RegistrationTaxList", selectEs01_w03RegistrationTaxList);
		System.out.println("selectEs01_w03RegistrationTaxList===>"+selectEs01_w03RegistrationTaxList);
		
		//종합부동산세
		List<?> selectEs01_w03ComprehensiveRealEstateTaxList = es01W03Service.selectEs01_w03ComprehensiveRealEstateTaxList(searchVO);
		model.addAttribute("selectEs01_w03ComprehensiveRealEstateTaxList", selectEs01_w03ComprehensiveRealEstateTaxList);
		System.out.println("selectEs01_w03ComprehensiveRealEstateTaxList===>"+selectEs01_w03ComprehensiveRealEstateTaxList);
		
		//처분비용
		List<?> selectEs01_w03DisposalCostList = es01W03Service.selectEs01_w03DisposalCostList(searchVO);
		model.addAttribute("selectEs01_w03DisposalCostList", selectEs01_w03DisposalCostList);
		System.out.println("selectEs01_w03DisposalCostList===>"+selectEs01_w03DisposalCostList);
		
		//취득세
		List<?> selectEs01_w03AcquisitionTaxList = es01W03Service.selectEs01_w03AcquisitionTaxList(searchVO);
		model.addAttribute("selectEs01_w03AcquisitionTaxList", selectEs01_w03AcquisitionTaxList);
		System.out.println("selectEs01_w03AcquisitionTaxList===>"+selectEs01_w03AcquisitionTaxList);
		
		//99_평가구분
		List<?> selectEvaluationClassificationList = es01Service.selectEvaluationClassificationList(es01VO);
		model.addAttribute("selectEvaluationClassificationList", selectEvaluationClassificationList);
		System.out.println("selectEvaluationClassificationList===>"+selectEvaluationClassificationList);
		
		//비준사례구분
		List<?> selectRatificationCaseList = es01W03Service.selectRatificationCaseList(searchVO);
		model.addAttribute("selectRatificationCaseList", selectRatificationCaseList);
		System.out.println("selectRatificationCaseList===>"+selectRatificationCaseList);
		
		//수익_사례구분
		List<?> selectProfitCaseList = es01W03Service.selectProfitCaseList(searchVO);
		model.addAttribute("selectProfitCaseList", selectProfitCaseList);
		System.out.println("selectProfitCaseList===>"+selectProfitCaseList);
		
		//여부
		List<?> selectYesNoList = es01W03Service.selectYesNoList(searchVO);
		model.addAttribute("selectYesNoList", selectYesNoList);
		System.out.println("selectYesNoList===>"+selectYesNoList);
		
		//이용구분
		List<?> selectUseGubunList = es01W03Service.selectUseGubunList(searchVO);
		model.addAttribute("selectUseGubunList", selectUseGubunList);
		System.out.println("selectUseGubunList===>"+selectUseGubunList);
		
		//감정가_본건
		List<?> selectEs01_w03Es2153List = es01W03Service.selectEs01_w03Es2153List(searchVO);
		model.addAttribute("selectEs01_w03Es2153List", selectEs01_w03Es2153List);
		System.out.println("selectEs01_w03Es2153List===>"+selectEs01_w03Es2153List);
		
		//감정가_본건_임지특성
		List<?> selectEs01_w03Es2183List = es01W03Service.selectEs01_w03Es2183List(searchVO);
		model.addAttribute("selectEs01_w03Es2183List", selectEs01_w03Es2183List);
		System.out.println("selectEs01_w03Es2183List===>"+selectEs01_w03Es2183List);
		
		//감정가_가격사례
		List<?> selectEs01_w03Es2143List = es01W03Service.selectEs01_w03Es2143List(searchVO);
		model.addAttribute("selectEs01_w03Es2143List", selectEs01_w03Es2143List);
		System.out.println("selectEs01_w03Es2143List===>"+selectEs01_w03Es2143List);
		
		//감정가_경매사례 
		List<?> selectEs01_w03Es2113List = es01W03Service.selectEs01_w03Es2113List(searchVO);
		model.addAttribute("selectEs01_w03Es2113List", selectEs01_w03Es2113List);
		System.out.println("selectEs01_w03Es2113List===>"+selectEs01_w03Es2113List);
		
		//감정가_임대사례 
		List<?> selectEs01_w03Es2163List = es01W03Service.selectEs01_w03Es2163List(searchVO);
		model.addAttribute("selectEs01_w03Es2163List", selectEs01_w03Es2163List);
		System.out.println("selectEs01_w03Es2163List===>"+selectEs01_w03Es2163List);
		
		//감정가_비준가격
		List<?> selectEs01_w03Es2123List = es01W03Service.selectEs01_w03Es2123List(searchVO);
		model.addAttribute("selectEs01_w03Es2123List", selectEs01_w03Es2123List);
		System.out.println("selectEs01_w03Es2123List===>"+selectEs01_w03Es2123List);
		
		//감정가_비준가격_집계표
		List<?> selectEs01_w03Es2123AList = es01W03Service.selectEs01_w03Es2123AList(searchVO);
		model.addAttribute("selectEs01_w03Es2123AList", selectEs01_w03Es2123AList);
		System.out.println("selectEs01_w03Es2123AList===>"+selectEs01_w03Es2123AList);
		
		//감정가_수익가격
		List<?> selectEs01_w03Es2164List = es01W03Service.selectEs01_w03Es2164List(searchVO);
		model.addAttribute("selectEs01_w03Es2164AList", selectEs01_w03Es2164List);
		System.out.println("selectEs01_w03Es2164AList===>"+selectEs01_w03Es2164List);
		
		//감정가_수익가격_깁계표
		List<?> selectEs01_w03Es2164AList = es01W03Service.selectEs01_w03Es2164AList(searchVO);
		model.addAttribute("selectEs01_w03Es2164AList", selectEs01_w03Es2164AList);
		System.out.println("selectEs01_w03Es2164AList===>"+selectEs01_w03Es2164AList);
		
		//감정가_감정평가
		List<?> selectEs01_w03Es2103List = es01W03Service.selectEs01_w03Es2103List(searchVO);
		model.addAttribute("selectEs01_w03Es2103List", selectEs01_w03Es2103List);
		System.out.println("selectEs01_w03Es2103List===>"+selectEs01_w03Es2103List);
		
		//공통보고서_당사설정액
		List<?> selectEs01_w03Es2404List = es01W03Service.selectEs01_w03Es2404List(searchVO);
		model.addAttribute("selectEs01_w03Es2404List", selectEs01_w03Es2404List);
		System.out.println("selectEs01_w03Es2404List===>"+selectEs01_w03Es2404List);
		
		//공통보고서_보정표
		List<?> selectEs01_w03Es2011List = es01W03Service.selectEs01_w03Es2011List(searchVO);
		model.addAttribute("selectEs01_w03Es2011List", selectEs01_w03Es2011List);
		System.out.println("selectEs01_w03Es2011List===>"+selectEs01_w03Es2011List);
		
		//공통보고서_초과부족설정액
		List<?> selectCGBJAmontList = es01Service.selectCGBJAmontList(es01VO);
		model.addAttribute("selectCGBJAmontList", selectCGBJAmontList);
		System.out.println("selectCGBJAmontList===>"+selectCGBJAmontList);
		
		//공통보고서_초과부족설정액JB
		List<?> selectCGBJAmontJBList = es01Service.selectCGBJAmontJBList(es01VO);
		model.addAttribute("selectCGBJAmontJBList", selectCGBJAmontJBList);
		System.out.println("selectCGBJAmontJBList===>"+selectCGBJAmontJBList);
		
		//공통보고서_최고최저
		List<?> selectCGBJHighRowList = es01Service.selectCGBJHighRowList(es01VO);
		model.addAttribute("selectCGBJHighRowList", selectCGBJHighRowList);
		System.out.println("selectCGBJHighRowList===>"+selectCGBJHighRowList);
		
		//공통보고서_최고최저JB
		List<?> selectCGBJHighRowJBList = es01Service.selectCGBJHighRowJBList(es01VO);
		model.addAttribute("selectCGBJHighRowJBList", selectCGBJHighRowJBList);
		System.out.println("selectCGBJHighRowJBList===>"+selectCGBJHighRowJBList);
		
		//관리부서확인
	//	List<?> selectEs01_w03V_IA03List = es01W03Service.selectEs01_w03V_IA03List(es01VO);
		//	model.addAttribute("selectEs01_w03V_IA03List", selectEs01_w03V_IA03List);
		//		System.out.println("selectEs01_w03V_IA03List===>"+selectEs01_w03V_IA03List);
		
		//배당표_배당금_계산
		List<?> selectDividendTableCalculationList = es01Service.selectDividendTableCalculationList(es01VO);
		model.addAttribute("selectDividendTableCalculationList", selectDividendTableCalculationList);
		System.out.println("selectDividendTableCalculationList===>"+selectDividendTableCalculationList);
		
		//배당표_상가임차보증검_계산
		//List<?> selectEs01_w03Es2403List = es01W03Service.selectEs01_w03Es2403List(es01VO);
		//model.addAttribute("selectEs01_w03Es2403List", selectEs01_w03Es2403List1);
		//System.out.println("selectEs01_w03Es2403List===>"+selectEs01_w03Es2403List1);
		
		//배당표_주택임차보증금의계산
		List<?> selectculationHousingRentalDepositList = es01Service.selectculationHousingRentalDepositList(es01VO);
		model.addAttribute("selectculationHousingRentalDepositList", selectculationHousingRentalDepositList);
		System.out.println("selectculationHousingRentalDepositList===>"+selectculationHousingRentalDepositList);
		
		//배당표_주택임차보증금계산_total
		List<?> selectDividendTableMCalculationList = es01Service.selectDividendTableMCalculationList(es01VO);
		model.addAttribute("selectDividendTableMCalculationList", selectDividendTableMCalculationList);
		System.out.println("selectDividendTableMCalculationList===>"+selectDividendTableMCalculationList);
		
		//00_코드_각구의일련번호
		List<?> selectSerialNumberGuList = es01Service.selectSerialNumberGuList(es01VO);
		model.addAttribute("selectSerialNumberGuList", selectSerialNumberGuList);
		System.out.println("selectSerialNumberGuList===>"+selectSerialNumberGuList);
		
		//00_가입대보증금적용지역
		List<?> selectRegDepsitStoreAreaList = es01W03Service.selectRegDepsitStoreAreaList(searchVO);
		model.addAttribute("selectRegDepsitStoreAreaList", selectRegDepsitStoreAreaList);
		System.out.println("selectRegDepsitStoreAreaList===>"+selectRegDepsitStoreAreaList);
		
		//00_가입대보증금적용지역
		List<?> selectRegDepsitAppAreaList = es01Service.selectRegDepsitAppAreaList(es01VO);
		model.addAttribute("selectRegDepsitAppAreaList", selectRegDepsitAppAreaList);
		System.out.println("selectRegDepsitAppAreaList===>"+selectRegDepsitAppAreaList);
		
		//00_코드_권리의내용
		List<?> selectContentRightList = es01Service.selectContentRightList(es01VO);
		model.addAttribute("selectContentRightList", selectContentRightList);
		System.out.println("selectContentRightList===>"+selectContentRightList);
		
		//00_코드_순위
		List<?> selectRankingCodeList = es01Service.selectRankingCodeList(es01VO);
		model.addAttribute("selectRankingCodeList", selectRankingCodeList);
		System.out.println("selectRankingCodeList===>"+selectRankingCodeList);
		
		//00_경매금액리스트
		List<?> selectAuctionCostList = es01Service.selectAuctionCostList(es01VO);
		model.addAttribute("selectAuctionCostList", selectAuctionCostList);
		System.out.println("selectAuctionCostList===>"+selectAuctionCostList);
		
		return "es01/es01_w02_P03_edit";
	}
    
    
    
}
