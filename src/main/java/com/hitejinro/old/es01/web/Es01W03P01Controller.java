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
import com.hitejinro.old.es01.service.Es01W03P01Service;
import com.hitejinro.old.es01.service.Es01W03Service;
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
 * @author 토건
 * @since 2009. 03.16
 * @version 1.0
 * @see 토건
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@RequestMapping("/es01")
@Controller
public class Es01W03P01Controller {

	private Es01Service es01Service;
	private Es01W03Service es01W03Service;
	private Es01W03P01Service es01W03P01Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es01W03P01Controller.class); 
	
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
    
    @RequestMapping(value = "/es01_w03_p01.do")
    public String es01_w03_p01(@ModelAttribute("searchVO") Es01SearchEntity searchVO,
   			@ModelAttribute("es01VO") Es01BaseEntity es01VO, ModelMap model) throws Exception {
		
		//00_가격동향
		List<?> selectes01_w03DIV186List = es01W03Service.selectEs01_w03DIV186List(searchVO);
		model.addAttribute("selectes01_w03DIV186List", selectes01_w03DIV186List);
		System.out.println("selectes01_w03DIV186List===>"+selectes01_w03DIV186List);
		
		//00_공공시설 접근성
		List<?> selectEs01_w03DIV180List = es01W03Service.selectEs01_w03DIV180List(searchVO);
		model.addAttribute("selectEs01_w03DIV180List", selectEs01_w03DIV180List);
		System.out.println("selectEs01_w03DIV180List===>"+selectEs01_w03DIV180List);
		
		//00_도로계통성
		List<?> selectEs01_w03DIV178List = es01W03Service.selectEs01_w03DIV178List(searchVO);
		model.addAttribute("selectEs01_w03DIV178List", selectEs01_w03DIV178List);
		System.out.println("selectEs01_w03DIV178List===>"+selectEs01_w03DIV178List);
		
		//00_도로조건
		List<?> selectEs01_w03DIV127List = es01W03Service.selectEs01_w03DIV127List(searchVO);
		model.addAttribute("selectEs01_w03DIV127List", selectEs01_w03DIV127List);
		System.out.println("selectEs01_w03DIV127List===>"+selectEs01_w03DIV127List);
		
		//00_상가시설접근성
		List<?> selectEs01_w03DIV179List = es01W03Service.selectEs01_w03DIV179List(searchVO);
		model.addAttribute("selectEs01_w03DIV179List", selectEs01_w03DIV179List);
		System.out.println("selectEs01_w03DIV179List===>"+selectEs01_w03DIV179List);
		
		//00_인테리어비용
		List<?> selectEs01_w03DIV191List = es01W03Service.selectEs01_w03DIV191List(searchVO);
		model.addAttribute("selectEs01_w03DIV191List", selectEs01_w03DIV191List);
		System.out.println("selectEs01_w03DIV191List===>"+selectEs01_w03DIV191List);
		
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
		
		//거래처목록
		/*
		List<?> selectSanghoList = es01Service.selectSanghoList(es01VO);
		model.addAttribute("selectSanghoList", selectSanghoList);
		System.out.println("selectSanghoList===>"+selectSanghoList);
		*/
		//건물단가
		List<?> selectEs01_w03_p01Es2186List = es01W03P01Service.selectEs01_w03_p01Es2186List(searchVO);
		model.addAttribute("selectEs01_w03_p01Es2186List", selectEs01_w03_p01Es2186List);
		System.out.println("selectEs01_w03_p01Es2186List===>"+selectEs01_w03_p01Es2186List);
		
		//건물의표시
		List<?> selectEs01_w03_p01Es2015List = es01W03P01Service.selectEs01_w03_p01Es2015List(searchVO);
		model.addAttribute("selectEs01_w03_p01Es2015List", selectEs01_w03_p01Es2015List);
		System.out.println("selectEs01_w03_p01Es2015List===>"+selectEs01_w03_p01Es2015List);
		
		//건물평가액_집계표
		List<?> selectEs01_w03_p01V_Es2186List = es01W03P01Service.selectEs01_w03_p01V_Es2186List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_Es2186List", selectEs01_w03_p01V_Es2186List);
		System.out.println("selectEs01_w03_p01V_Es2186List===>"+selectEs01_w03_p01V_Es2186List);
		
		//경과일자 
		
		//공통보고서_건물
		List<?> selectEs01_w03_p01Es2302List = es01W03P01Service.selectEs01_w03_p01Es2302List(searchVO);
		model.addAttribute("selectEs01_w03_p01Es2302List", selectEs01_w03_p01Es2302List);
		System.out.println("selectEs01_w03_p01Es2302List===>"+selectEs01_w03_p01Es2302List);
		
		//공통보고서_당사설정액
		List<?> selectOurSetAmontList = es01Service.selectOurSetAmontList(es01VO);
		model.addAttribute("selectOurSetAmontList", selectOurSetAmontList);
		System.out.println("selectOurSetAmontList===>"+selectOurSetAmontList);
		
		//공통보고서_보정표
		List<?> selectEs01_w03_p01Es2302_AmtList = es01W03P01Service.selectEs01_w03_p01Es2302_AmtList(searchVO);
		model.addAttribute("selectEs01_w03_p01Es2302_AmtList", selectEs01_w03_p01Es2302_AmtList);
		System.out.println("selectEs01_w03_p01Es2302_AmtList===>"+selectEs01_w03_p01Es2302_AmtList);
		
		//공통보고서_초과부족설정액
		List<?> selectCGBJAmontList = es01Service.selectCGBJAmontList(es01VO);
		model.addAttribute("selectCGBJAmontList", selectCGBJAmontList);
		System.out.println("selectCGBJAmontList===>"+selectCGBJAmontList);
		//List<?> selectEs01_w03_p01V_ES10_01List = es01W03P01Service.selectEs01_w03_p01V_ES10_01List(searchVO);
		//model.addAttribute("selectEs01_w03_p01V_ES10_01List", selectEs01_w03_p01V_ES10_01List);
		//System.out.println("selectEs01_w03_p01V_ES10_01List===>"+selectEs01_w03_p01V_ES10_01List);
		
		//공통보고서_최고최저
		List<?> selectEs01_w03_p01HighMinList = es01W03P01Service.selectEs01_w03_p01HighMinList(searchVO);
		model.addAttribute("selectEs01_w03_p01HighMinList", selectEs01_w03_p01HighMinList);
		System.out.println("selectEs01_w03_p01HighMinList===>"+selectEs01_w03_p01HighMinList);
		
		//공통보고서_토지
		List<?> selectEs01_w03_p01ES2013List = es01W03P01Service.selectEs01_w03_p01ES2013List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2013List", selectEs01_w03_p01ES2013List);
		System.out.println("selectEs01_w03_p01ES2013List===>"+selectEs01_w03_p01ES2013List);
		
		//규제의표시
		List<?> selectEs01_w03_p01ES2017List = es01W03P01Service.selectEs01_w03_p01ES2017List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2017List", selectEs01_w03_p01ES2017List);
		System.out.println("selectEs01_w03_p01ES2017List===>"+selectEs01_w03_p01ES2017List);
		
		//기준가격
		List<?> selectEs01_w03_p01ES2172List = es01W03P01Service.selectEs01_w03_p01ES2172List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2172List", selectEs01_w03_p01ES2172List);
		System.out.println("selectEs01_w03_p01ES2172List===>"+selectEs01_w03_p01ES2172List);
		
		//기준가격집계표
		List<?> selectEs01_w03_p01V_ES2172List = es01W03P01Service.selectEs01_w03_p01V_ES2172List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2172List", selectEs01_w03_p01V_ES2172List);
		System.out.println("selectEs01_w03_p01V_ES2172List===>"+selectEs01_w03_p01V_ES2172List);
		
		//기타요인
		List<?> selectEs01_w03_p01V_ES2127List = es01W03P01Service.selectEs01_w03_p01V_ES2127List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2127List", selectEs01_w03_p01V_ES2127List);
		System.out.println("selectEs01_w03_p01V_ES2127List===>"+selectEs01_w03_p01V_ES2127List);
		
		//담보_건축
		List<?> selectEs01_w03_p01ES2015List = es01W03P01Service.selectEs01_w03_p01ES2015List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2015List", selectEs01_w03_p01ES2015List);
		System.out.println("selectEs01_w03_p01ES2015List===>"+selectEs01_w03_p01ES2015List);
		
		//담보_건축_Group
		List<?> selectEs01_w03_p01ES2015GroupList = es01W03P01Service.selectEs01_w03_p01ES2015GroupList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2015GroupList", selectEs01_w03_p01ES2015GroupList);
		System.out.println("selectEs01_w03_p01ES2015GroupList===>"+selectEs01_w03_p01ES2015GroupList);
		
		// 입력표_담보마스터  
		List<?> selectCollateralMasterList = es01Service.selectCollateralMasterList(es01VO);
		model.addAttribute("selectCollateralMasterList", selectCollateralMasterList);
		System.out.println("selectCollateralMasterList===>"+selectCollateralMasterList);
		
		//담보제공비율
		List<?> selectEs01_w03_p01ES2013DamboList = es01W03P01Service.selectEs01_w03_p01ES2013DamboList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2013DamboList", selectEs01_w03_p01ES2013DamboList);
		System.out.println("selectEs01_w03_p01ES2013DamboList===>"+selectEs01_w03_p01ES2013DamboList);
		
		//담보제공비율
		List<?> selectEs01_w03_p01ES2013BuildingList = es01W03P01Service.selectEs01_w03_p01ES2013BuildingList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2013BuildingList", selectEs01_w03_p01ES2013BuildingList);
		System.out.println("selectEs01_w03_p01ES2013BuildingList===>"+selectEs01_w03_p01ES2013BuildingList);
		
		//배당표_배당금_계산D
		List<?> selectEs01_w03_p01ES2404DList = es01W03P01Service.selectEs01_w03_p01ES2404DList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2404DList", selectEs01_w03_p01ES2404DList);
		System.out.println("selectEs01_w03_p01ES2404DList===>"+selectEs01_w03_p01ES2404DList);
		//배당표_배당금_계산D_Temp
		List<?> selectEs01_w03_p01ES2404DTempList = es01W03P01Service.selectEs01_w03_p01ES2404DTempList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2404DTempList", selectEs01_w03_p01ES2404DTempList);
		System.out.println("selectEs01_w03_p01ES2404DTempList===>"+selectEs01_w03_p01ES2404DTempList);
		
		//배당표_배당금_계산M
		List<?> selectEs01_w03_p01ES2404MList = es01W03P01Service.selectEs01_w03_p01ES2404MList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2404MList", selectEs01_w03_p01ES2404MList);
		System.out.println("selectEs01_w03_p01ES2404MList===>"+selectEs01_w03_p01ES2404MList);
		
		//배당표_배당금_배당건수
		List<?> selectEs01_w03_p01ES2404CntList = es01W03P01Service.selectEs01_w03_p01ES2404CntList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2404CntList", selectEs01_w03_p01ES2404CntList);
		System.out.println("selectEs01_w03_p01ES2404CntList===>"+selectEs01_w03_p01ES2404CntList);
		
		//배당표_상가임차보증금_계산
		List<?> selectEs01_w03Es2403List = es01W03Service.selectEs01_w03Es2403List(searchVO);
		model.addAttribute("selectEs01_w03Es2403List", selectEs01_w03Es2403List);
		System.out.println("selectEs01_w03Es2403List===>"+selectEs01_w03Es2403List);
		
		//배당표_주택임차보증금의계산
		List<?> selectculationHousingRentalDepositList = es01Service.selectculationHousingRentalDepositList(es01VO);
		model.addAttribute("selectculationHousingRentalDepositList", selectculationHousingRentalDepositList);
		System.out.println("selectculationHousingRentalDepositList===>"+selectculationHousingRentalDepositList);
		
		//배당표_M
		List<?> selectDividendTableMCalculationList = es01Service.selectDividendTableMCalculationList(es01VO);
		model.addAttribute("selectDividendTableMCalculationList", selectDividendTableMCalculationList);
		System.out.println("selectDividendTableMCalculationList===>"+selectDividendTableMCalculationList);
		
		//본건인근지역의가격수준
		List<?> selectEs01_w03_p01ES2165List = es01W03P01Service.selectEs01_w03_p01ES2165List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2165List", selectEs01_w03_p01ES2165List);
		System.out.println("selectEs01_w03_p01ES2165List===>"+selectEs01_w03_p01ES2165List);
		
		//비준가격
		List<?> selectEs01_w03_p01ES2126List = es01W03P01Service.selectEs01_w03_p01ES2126List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2126List", selectEs01_w03_p01ES2126List);
		System.out.println("selectEs01_w03_p01ES2126List===>"+selectEs01_w03_p01ES2126List);
		
		//비준가격산정
		List<?> selectEs01_w03_p01ES2125List = es01W03P01Service.selectEs01_w03_p01ES2125List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2125List", selectEs01_w03_p01ES2125List);
		System.out.println("selectEs01_w03_p01ES2125List===>"+selectEs01_w03_p01ES2125List);
		
		//비준가격집계표
		List<?> selectEs01_w03_p01V_ES2126List = es01W03P01Service.selectEs01_w03_p01V_ES2126List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2126List", selectEs01_w03_p01V_ES2126List);
		System.out.println("selectEs01_w03_p01V_ES2126List===>"+selectEs01_w03_p01V_ES2126List);
		
		//사업부분
		List<?> selectEs01_w03_p01V_ES00600List = es01W03P01Service.selectEs01_w03_p01V_ES00600List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES00600List", selectEs01_w03_p01V_ES00600List);
		System.out.println("selectEs01_w03_p01V_ES00600List===>"+selectEs01_w03_p01V_ES00600List);
		
		//수익_수익가격
		List<?> selectEs01_w03_p01V_ES2126RevenueList = es01W03P01Service.selectEs01_w03_p01V_ES2126RevenueList(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2126RevenueList", selectEs01_w03_p01V_ES2126RevenueList);
		System.out.println("selectEs01_w03_p01V_ES2126RevenueList===>"+selectEs01_w03_p01V_ES2126RevenueList);
				
		//수익_수익가격
		List<?> selectEs01_w03_p01V_ES2176List = es01W03P01Service.selectEs01_w03_p01V_ES2176List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2176List", selectEs01_w03_p01V_ES2176List);
		System.out.println("selectEs01_w03_p01V_ES2176List===>"+selectEs01_w03_p01V_ES2176List);
		
		//수익_수익가격
		List<?> selectEs01_w03_p01V_ES2106List = es01W03P01Service.selectEs01_w03_p01V_ES2106List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2106List", selectEs01_w03_p01V_ES2106List);
		System.out.println("selectEs01_w03_p01V_ES2106List===>"+selectEs01_w03_p01V_ES2106List);
		
		//영업감정요청자료
		
		//일단지구분
		
		//입력표
		List<?> selectEs01_w03_p01V_ES2012List = es01W03P01Service.selectEs01_w03_p01V_ES2012List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2012List", selectEs01_w03_p01V_ES2012List);
		System.out.println("selectEs01_w03_p01V_ES2012List===>"+selectEs01_w03_p01V_ES2012List);
		
		//입력표_건물
		List<?> selectEs01_w03_p01V_ES2014List = es01W03P01Service.selectEs01_w03_p01V_ES2014List(searchVO);
		model.addAttribute("selectEs01_w03_p01V_ES2014List", selectEs01_w03_p01V_ES2014List);
		System.out.println("selectEs01_w03_p01V_ES2014List===>"+selectEs01_w03_p01V_ES2014List);
		
		//00_가입대보증금적용지역
		List<?> selectRegDepsitAppAreaList = es01Service.selectRegDepsitAppAreaList(es01VO);
		model.addAttribute("selectRegDepsitAppAreaList", selectRegDepsitAppAreaList);
		System.out.println("selectRegDepsitAppAreaList===>"+selectRegDepsitAppAreaList);
		
		//00_가입대보증금적용지역
		List<?> selectRegDepsitStoreAreaList = es01W03Service.selectRegDepsitStoreAreaList(searchVO);
		model.addAttribute("selectRegDepsitStoreAreaList", selectRegDepsitStoreAreaList);
		System.out.println("selectRegDepsitStoreAreaList===>"+selectRegDepsitStoreAreaList);
		
		//00_코드_각구의일련번호
		List<?> selectSerialNumberGuList = es01Service.selectSerialNumberGuList(es01VO);
		model.addAttribute("selectSerialNumberGuList", selectSerialNumberGuList);
		System.out.println("selectSerialNumberGuList===>"+selectSerialNumberGuList);
		
		//00_코드_경과년도
		List<?> selectEs01_w03_p01Div153List = es01W03P01Service.selectEs01_w03_p01Div153List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div153List", selectEs01_w03_p01Div153List);
		System.out.println("selectEs01_w03_p01Div153List===>"+selectEs01_w03_p01Div153List);
		
		//00_코드_고저
		List<?> selectEs01_w03_p01Div123List = es01W03P01Service.selectEs01_w03_p01Div123List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div123List", selectEs01_w03_p01Div123List);
		System.out.println("selectEs01_w03_p01Div123List===>"+selectEs01_w03_p01Div123List);
		
		//00_코드_공유지분
		List<?> selectEs01_w03_p01Div141List = es01W03P01Service.selectEs01_w03_p01Div141List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div141List", selectEs01_w03_p01Div141List);
		System.out.println("selectEs01_w03_p01Div141List===>"+selectEs01_w03_p01Div141List);
		
		//00_코드_관공서접근성
		List<?> selectEs01_w03_p01Div187List = es01W03P01Service.selectEs01_w03_p01Div187List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div187List", selectEs01_w03_p01Div187List);
		System.out.println("selectEs01_w03_p01Div187List===>"+selectEs01_w03_p01Div187List);
		
		//00_코드_관리상태
		List<?> selectEs01_w03_p01Div184List = es01W03P01Service.selectEs01_w03_p01Div184List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div184List", selectEs01_w03_p01Div184List);
		System.out.println("selectEs01_w03_p01Div184List===>"+selectEs01_w03_p01Div184List);
		
		//00_코드_구조
		List<?> selectEs01_w03_p01Div156List = es01W03P01Service.selectEs01_w03_p01Div156List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div156List", selectEs01_w03_p01Div156List);
		System.out.println("selectEs01_w03_p01Div156List===>"+selectEs01_w03_p01Div156List);
		
		//00_코드_권리의내용
		List<?> selectContentRightList = es01Service.selectContentRightList(es01VO);
		model.addAttribute("selectContentRightList", selectContentRightList);
		System.out.println("selectContentRightList===>"+selectContentRightList);		
		
		
		//00_코드_기타접근성
		List<?> selectEs01_w03_p01Div189List = es01W03P01Service.selectEs01_w03_p01Div189List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div189List", selectEs01_w03_p01Div189List);
		System.out.println("selectEs01_w03_p01Div189List===>"+selectEs01_w03_p01Div189List);
		
		//00_코드_기타제한구역
		List<?> selectEs01_w03_p01Div118List = es01W03P01Service.selectEs01_w03_p01Div118List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div118List", selectEs01_w03_p01Div118List);
		System.out.println("selectEs01_w03_p01Div118List===>"+selectEs01_w03_p01Div118List);
		
		//00_코드_기타환경조건
		List<?> selectEs01_w03_p01Div190List = es01W03P01Service.selectEs01_w03_p01Div190List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div190List", selectEs01_w03_p01Div190List);
		System.out.println("selectEs01_w03_p01Div190List===>"+selectEs01_w03_p01Div190List);
		
		//00_코드_담보물의입지조건
		List<?> selectEs01_w03_p01Div150List = es01W03P01Service.selectEs01_w03_p01Div150List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div150List", selectEs01_w03_p01Div150List);
		System.out.println("selectEs01_w03_p01Div150List===>"+selectEs01_w03_p01Div150List);
				
		//00_담보종류 
		List<?> damboList = es01Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);
		System.out.println("damboList===>"+damboList);
		
		//00_코드_담보물의입지조건
		List<?> selectEs01_w03_p01Div105List = es01W03P01Service.selectEs01_w03_p01Div105List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div105List", selectEs01_w03_p01Div105List);
		System.out.println("selectEs01_w03_p01Div105List===>"+selectEs01_w03_p01Div105List);
		
		//00_코드_도로거리
		List<?> selectEs01_w03_p01Div128List = es01W03P01Service.selectEs01_w03_p01Div128List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div128List", selectEs01_w03_p01Div128List);
		System.out.println("selectEs01_w03_p01Div128List===>"+selectEs01_w03_p01Div128List);
		
		//00_코드_도로조건
		List<?> selectEs01_w03_p01Div127List = es01W03P01Service.selectEs01_w03_p01Div127List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div127List", selectEs01_w03_p01Div127List);
		System.out.println("selectEs01_w03_p01Div127List===>"+selectEs01_w03_p01Div127List);
		//00_코드_도시계획
		List<?> selectEs01_w03_p01Div117List = es01W03P01Service.selectEs01_w03_p01Div117List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div117List", selectEs01_w03_p01Div117List);
		System.out.println("selectEs01_w03_p01Div117List===>"+selectEs01_w03_p01Div117List);
		
		//00_코드_면적
		List<?> selectEs01_w03_p01Div113List = es01W03P01Service.selectEs01_w03_p01Div113List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div113List", selectEs01_w03_p01Div113List);
		System.out.println("selectEs01_w03_p01Div113List===>"+selectEs01_w03_p01Div113List);
		
		//00_코드_방위
		List<?> selectEs01_w03_p01Div125List = es01W03P01Service.selectEs01_w03_p01Div125List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div125List", selectEs01_w03_p01Div125List);
		System.out.println("selectEs01_w03_p01Div125List===>"+selectEs01_w03_p01Div125List);
		
		//00_코드_법정지상권
		List<?> selectEs01_w03_p01Div132List = es01W03P01Service.selectEs01_w03_p01Div132List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div132List", selectEs01_w03_p01Div132List);
		System.out.println("selectEs01_w03_p01Div132List===>"+selectEs01_w03_p01Div132List);
		
		//00_코드_법정지상권_존속기간
		List<?> selectEs01_w03_p01Div143List = es01W03P01Service.selectEs01_w03_p01Div143List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div143List", selectEs01_w03_p01Div143List);
		System.out.println("selectEs01_w03_p01Div143List===>"+selectEs01_w03_p01Div143List);
		
		//00_코드_상가_가입대보증금
		List<?> selectEs01_w03_p01Div105StoreList = es01W03P01Service.selectEs01_w03_p01Div105StoreList(searchVO);
		model.addAttribute("selectEs01_w03_p01Div105StoreList", selectEs01_w03_p01Div105StoreList);
		System.out.println("selectEs01_w03_p01Div105StoreList===>"+selectEs01_w03_p01Div105StoreList);
		
		//00_코드_순위
		List<?> selectRankingCodeList = es01Service.selectRankingCodeList(es01VO);
		model.addAttribute("selectRankingCodeList", selectRankingCodeList);
		System.out.println("selectRankingCodeList===>"+selectRankingCodeList);
		
		//00_코드_용도구분
		List<?> selectEs01_w03_p01Div116List = es01W03P01Service.selectEs01_w03_p01Div116List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div116List", selectEs01_w03_p01Div116List);
		System.out.println("selectEs01_w03_p01Div116List===>"+selectEs01_w03_p01Div116List);
		
		//00_코드_용도지역
		List<?> selectEs01_w03_p01Div114List = es01W03P01Service.selectEs01_w03_p01Div114List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div114List", selectEs01_w03_p01Div114List);
		System.out.println("selectEs01_w03_p01Div114List===>"+selectEs01_w03_p01Div114List);
		
		//00_코드_이용현황
		List<?> selectEs01_w03_p01Div126List = es01W03P01Service.selectEs01_w03_p01Div126List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div126List", selectEs01_w03_p01Div126List);
		System.out.println("selectEs01_w03_p01Div126List===>"+selectEs01_w03_p01Div126List);
		
		//00_코드_인근지역
		List<?> selectEs01_w03_p01Div183List = es01W03P01Service.selectEs01_w03_p01Div183List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div183List", selectEs01_w03_p01Div183List);
		System.out.println("selectEs01_w03_p01Div183List===>"+selectEs01_w03_p01Div183List);
		
		//00_코드_일단지구분
		List<?> selectEs01_w03_p01Div192List = es01W03P01Service.selectEs01_w03_p01Div192List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div192List", selectEs01_w03_p01Div192List);
		System.out.println("selectEs01_w03_p01Div192List===>"+selectEs01_w03_p01Div192List);
		
		//00_코드_저축률
		List<?> selectEs01_w03_p01Div115List = es01W03P01Service.selectEs01_w03_p01Div115List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div115List", selectEs01_w03_p01Div115List);
		System.out.println("selectEs01_w03_p01Div115List===>"+selectEs01_w03_p01Div115List);
		
		//00_코드_점유자형태
		List<?> selectEs01_w03_p01Div101List = es01W03P01Service.selectEs01_w03_p01Div101List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div101List", selectEs01_w03_p01Div101List);
		System.out.println("selectEs01_w03_p01Div101List===>"+selectEs01_w03_p01Div101List);
		
		//00_코드_접한도로의폭
		List<?> selectEs01_w03_p01Div176List = es01W03P01Service.selectEs01_w03_p01Div176List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div176List", selectEs01_w03_p01Div176List);
		System.out.println("selectEs01_w03_p01Div176List===>"+selectEs01_w03_p01Div176List);
		
		//00_코드_주변상권
		List<?> selectEs01_w03_p01Div139List = es01W03P01Service.selectEs01_w03_p01Div139List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div139List", selectEs01_w03_p01Div139List);
		System.out.println("selectEs01_w03_p01Div139List===>"+selectEs01_w03_p01Div139List);
		
		//00_코드_주용도
		List<?> selectEs01_w03_p01Div142List = es01W03P01Service.selectEs01_w03_p01Div142List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div142List", selectEs01_w03_p01Div142List);
		System.out.println("selectEs01_w03_p01Div142List===>"+selectEs01_w03_p01Div142List);
		
		//00_코드_주택_가입대보증금
		List<?> selectEs01_w03_p01Div106List = es01W03P01Service.selectEs01_w03_p01Div106List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div106List", selectEs01_w03_p01Div106List);
		System.out.println("selectEs01_w03_p01Div106List===>"+selectEs01_w03_p01Div106List);
		
		//00_코드_중심지역접근성
		List<?> selectEs01_w03_p01Div188List = es01W03P01Service.selectEs01_w03_p01Div188List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div188List", selectEs01_w03_p01Div188List);
		System.out.println("selectEs01_w03_p01Div188List===>"+selectEs01_w03_p01Div188List);
		
		//00_코드_증개축횟수
		List<?> selectEs01_w03_p01Div137List = es01W03P01Service.selectEs01_w03_p01Div137List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div137List", selectEs01_w03_p01Div137List);
		System.out.println("selectEs01_w03_p01Div137List===>"+selectEs01_w03_p01Div137List);
		
		//00_코드_지목
		List<?> selectEs01_w03_p01ES00112List = es01W03P01Service.selectEs01_w03_p01ES00112List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES00112List", selectEs01_w03_p01ES00112List);
		System.out.println("selectEs01_w03_p01ES00112List===>"+selectEs01_w03_p01ES00112List);
		
		//00_코드_지붕
		List<?> selectEs01_w03_p01Div157List = es01W03P01Service.selectEs01_w03_p01Div157List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div157List", selectEs01_w03_p01Div157List);
		System.out.println("selectEs01_w03_p01Div157List===>"+selectEs01_w03_p01Div157List);
		
		//00_코드_철도
		List<?> selectEs01_w03_p01Div130List = es01W03P01Service.selectEs01_w03_p01Div130List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div130List", selectEs01_w03_p01Div130List);
		System.out.println("selectEs01_w03_p01Div130List===>"+selectEs01_w03_p01Div130List);
		
		//00_코드_최고채권액
		List<?> selectMaxBondAmountList = es01Service.selectMaxBondAmountList(es01VO);
		model.addAttribute("selectMaxBondAmountList", selectMaxBondAmountList);
		System.out.println("selectMaxBondAmountList===>"+selectMaxBondAmountList);
		
		//00_코드_토지의면적
		List<?> selectEs01_w03_p01Div175List = es01W03P01Service.selectEs01_w03_p01Div175List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div175List", selectEs01_w03_p01Div175List);
		System.out.println("selectEs01_w03_p01Div175List===>"+selectEs01_w03_p01Div175List);
		
		//00_코드_토지의종류
		List<?> selectEs01_w03_p01ES00100List = es01W03P01Service.selectEs01_w03_p01ES00100List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES00100List", selectEs01_w03_p01ES00100List);
		System.out.println("selectEs01_w03_p01ES00100List===>"+selectEs01_w03_p01ES00100List);
		
		//00_코드_토지의형상
		List<?> selectEs01_w03_p01Div159List = es01W03P01Service.selectEs01_w03_p01Div159List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div159List", selectEs01_w03_p01Div159List);
		System.out.println("selectEs01_w03_p01Div159List===>"+selectEs01_w03_p01Div159List);
		
		//00_코드_폐기물
		List<?> selectEs01_w03_p01ES00Div130List = es01W03P01Service.selectEs01_w03_p01ES00Div130List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES00Div130List", selectEs01_w03_p01ES00Div130List);
		System.out.println("selectEs01_w03_p01ES00Div130List===>"+selectEs01_w03_p01ES00Div130List);
		
		//코드_표준단가_구조
		
		//코드_표준단가_급수
		
		//코드_표준단가_용도
		
		//00_코드_표준지구분
		List<?> selectEs01_w03_p01Div193List = es01W03P01Service.selectEs01_w03_p01Div193List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div193List", selectEs01_w03_p01Div193List);
		System.out.println("selectEs01_w03_p01Div193List===>"+selectEs01_w03_p01Div193List);
		
		//00_코드_형상
		List<?> selectEs01_w03_p01Div159Attr01List = es01W03P01Service.selectEs01_w03_p01Div159Attr01List(searchVO);
		model.addAttribute("selectEs01_w03_p01Div159Attr01List", selectEs01_w03_p01Div159Attr01List);
		System.out.println("selectEs01_w03_p01Div159Attr01List===>"+selectEs01_w03_p01Div159Attr01List);
		
		//토지의표시
		List<?> selectEs01_w03_p01ES2013MarkList = es01W03P01Service.selectEs01_w03_p01ES2013MarkList(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2013MarkList", selectEs01_w03_p01ES2013MarkList);
		System.out.println("selectEs01_w03_p01ES2013MarkList===>"+selectEs01_w03_p01ES2013MarkList);
		
		//표준지공시지가선정
		List<?> selectEs01_w03_p01ES2171List = es01W03P01Service.selectEs01_w03_p01ES2171List(searchVO);
		model.addAttribute("selectEs01_w03_p01ES2171List", selectEs01_w03_p01ES2171List);
		System.out.println("selectEs01_w03_p01ES2171List===>"+selectEs01_w03_p01ES2171List);
		

		return "es03/es03";
	}
    
    
    
}
