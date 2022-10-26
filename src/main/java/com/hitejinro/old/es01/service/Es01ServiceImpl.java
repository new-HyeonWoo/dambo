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
package com.hitejinro.old.es01.service;

import com.hitejinro.old.es01.model.Es01BaseEntity;
import com.hitejinro.old.es01.model.Es01SearchEntity;
import com.hitejinro.old.es01.repository.OldEs01Mapper;

import com.hitejinro.old.es02.model.Es02SearchEntity;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Class Name : KakaoServiceImpl.java
 * @Description : Kakao Business Implement Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.05.28  JWJ           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@Service("Es01Service")
@RequiredArgsConstructor
public class Es01ServiceImpl implements Es01Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(Es01ServiceImpl.class);

    private final OldEs01Mapper Es01Mapper;


//	@Override
//	public void insertSvgData(SvgEntity svgEntity) throws Exception {
//		Map<String, String> map = new HashMap<String, String>();
//		map.put("imgOrgNm", svgEntity.getImgOrgNm());
//		map.put("imgNm", svgEntity.getImgNm());
//		map.put("svgData", svgEntity.getSvgData());
//		map.put("imgPath", svgEntity.getImgPath());
//		es01Mapper.insertApprovalData(svgEntity);
//		System.out.println(svgEntity.getSeqno());
		
//	}
    @Override
	public List<?> damboList(Es01SearchEntity searchVO) throws Exception {
		return Es01Mapper.damboList(searchVO);
	}
	
    public List<?> buseoList(Es01SearchEntity searchVO)  throws Exception {
    	return Es01Mapper.buseoList(searchVO);
	}

	public List<?> procList(Es01SearchEntity searchVO)  throws Exception {
		return Es01Mapper.procList(searchVO);
	}

	public List<?> timeList(Es01SearchEntity searchVO) throws Exception {
		return Es01Mapper.timeList(searchVO);
	}

	public String selectstartDt(Es01SearchEntity searchVO) throws Exception {
		return Es01Mapper.selectstartDt(searchVO);
	}

	public String selectendDt(Es01SearchEntity searchVO) throws Exception {
		return Es01Mapper.selectendDt(searchVO);
	}
	public List<?> sampleList1(Es01SearchEntity searchVO)  throws Exception {
		return Es01Mapper.sampleList1(searchVO);
	}
	public List<?> selectLiquorType(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectLiquorType(es01VO);
	}
	public List<?> appraisalList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.appraisalList(es01VO);
	}
	public List<?> selectCrossList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCrossList(es01VO);
	}
	
	// start
	public List<?> selectPriceAuctionList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectPriceAuctionList(es01VO);
	}
	public List<?> selectPriceCaseDList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectPriceCaseDList(es01VO);
	}
	public List<?> selectPriceCaseMList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectPriceCaseMList(es01VO);
	}
	public List<?> selectPriceAptList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectPriceAptList(es01VO);
	}
	public List<?> selectRegulatoryAffairsOfficerList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectRegulatoryAffairsOfficerList(es01VO);
	}
	public List<?> selectCollateralBuildingList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCollateralBuildingList(es01VO);
	}
	public List<?> selectCollateralMasterList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCollateralMasterList(es01VO);
	}
	public List<?> selectCorrectionTableJBList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCorrectionTableJBList(es01VO);
	}
	
	public List<?> selectCorrectionTableList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCorrectionTableList(es01VO);
	}
	public List<?> selectCGBJHighRowJBList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCGBJHighRowJBList(es01VO);
	}
	public List<?> selectCGBJHighRowList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCGBJHighRowList(es01VO);
	}
	public List<?> selectOurSetAmontList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectOurSetAmontList(es01VO);
	}
	public List<?> selectOurSetJBAmontList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectOurSetJBAmontList(es01VO);
	}
	
	public List<?> selectCGBJAmontList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCGBJAmontList(es01VO);
	}
	public List<?> selectCGBJAmontJBList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectCGBJAmontJBList(es01VO);
	}
	public List<?> selectEvaluationClassificationList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectEvaluationClassificationList(es01VO);
	}
	public List<?> selectDividendTableMCalculationList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectDividendTableMCalculationList(es01VO);
	}
	public List<?> selectculationHousingRentalDepositList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectculationHousingRentalDepositList(es01VO);
	}
	
	public List<?> selectDividendTableCalculationList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectDividendTableCalculationList(es01VO);
	}
	public List<?> selectAuctionCostList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectAuctionCostList(es01VO);
	}
	public List<?> selectBuildingStructureList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectBuildingStructureList(es01VO);
	}
	public List<?> selectRoofTypeList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectRoofTypeList(es01VO);
	}
	public List<?> selectLandUseZoneList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectLandUseZoneList(es01VO);
	}
	public List<?> selectInteriorCostsList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectInteriorCostsList(es01VO);
	}
	public List<?> selectFormOccpantAptList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectFormOccpantAptList(es01VO);
	}
	public List<?> selectBuildTransitYearAptList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectBuildTransitYearAptList(es01VO);
	}
	public List<?> selectJeonYuPartAreaAptList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectJeonYuPartAreaAptList(es01VO);
	}
	public List<?> selectApartmentComplexSizeList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectApartmentComplexSizeList(es01VO);
	}
	public List<?> selectJeonyuPartLocationList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectJeonyuPartLocationList(es01VO);
	}
	public List<?> selectSerialNumberGuList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectSerialNumberGuList(es01VO);
	}
	public List<?> selectContentRightList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectContentRightList(es01VO);
	}
	public List<?> selectRankingCodeList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectRankingCodeList(es01VO);
	}
	public List<?> selectMaxBondAmountList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectMaxBondAmountList(es01VO);
	}
	public List<?> selectRegDepsitAppAreaList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectRegDepsitAppAreaList(es01VO);
	}
	public List<?> selectPhotoClassificationList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectPhotoClassificationList(es01VO);
	}
	public List<?> selectSuccessfulBidRateTableList(Es01BaseEntity es01VO)  throws Exception {
		return Es01Mapper.selectSuccessfulBidRateTableList(es01VO);
	}
	public List<?> selectAppraiseMinMaxList(Es01BaseEntity es01VO)  throws Exception { 
		return Es01Mapper.selectAppraiseMinMaxList(es01VO);
	}
	public List<?> selectSanghoList(Es01BaseEntity es01VO)  throws Exception { 
		return Es01Mapper.selectSanghoList(es01VO);
	}
	public List<?> selectOpinionList(Es01BaseEntity es01VO)  throws Exception { 
		return Es01Mapper.selectOpinionList(es01VO);
	}
	public String selectEstiDateCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectEstiDateCheck(es01VO);
	}
	public List<?> selectNewSeqNo(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectNewSeqNo(es01VO);
	}
	public void es01_w02_save(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_save(es01VO);
	}
	public void es01_w02_es2011_save(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2011_save(es01VO);
	}
	public void es01_w02_es2017_save(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2017_save(es01VO);
	}
	public void es01_w02_es2101_save(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2101_save(es01VO);
	}
	public void es01_w02_es2301_save(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2301_save(es01VO);
	}
	public void es01_w02_es2401_save(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2401_save(es01VO);
	}
	public int selectEs2404DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectEs2404DelCheck(es01VO);
	}
	public void deleteEs2404Del(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.deleteEs2404Del(es01VO);
	}
	public void es01_w02_es2404_save(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2404_save(es01VO);
	}
	public void es01_w02_es2181_insert(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2181_insert(es01VO);
	}
	public void es01_w02_es2181_update(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2181_update(es01VO);
	}
	public int selectEs2181Check(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectEs2181Check(es01VO);
	}
	public int selectEs2111DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectEs2111DelCheck(es01VO);
	}
	public void deleteEs2111Del(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.deleteEs2111Del(es01VO);
	}
	public void es01_w02_es2111_insert(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2111_insert(es01VO);
	}
	public int selectEs2141DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectEs2141DelCheck(es01VO);
	}
	public void deleteEs2141Del(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.deleteEs2141Del(es01VO);
	}
	public void es01_w02_es2141_insert(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2141_insert(es01VO);
	}
	public int selectEs2151DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectEs2151DelCheck(es01VO);
	}
	public void deleteEs2151Del(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.deleteEs2151Del(es01VO);
	}
	public void es01_w02_es2151_insert(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2151_insert(es01VO);
	}
	public int selectEs2402DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.selectEs2402DelCheck(es01VO);
	}
	public void deleteEs2402Del(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.deleteEs2402Del(es01VO);
	} 
	public void es01_w02_es2402_insert(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es2402_insert(es01VO);
	}
	public void es01_w02_es10_V_ES10_01_update(Es01BaseEntity es01VO) throws Exception {
		 Es01Mapper.es01_w02_es10_V_ES10_01_update(es01VO);
	}
	public String Pro_Es01_w02_Dividend_save(Es01BaseEntity es01VO) throws Exception {
		return Es01Mapper.Pro_Es01_w02_Dividend_save(es01VO);
	}

	public String reassessmentData(Es01SearchEntity searchVO)  throws Exception {
		return Es01Mapper.reassessmentData(searchVO);
	}

	public List<?> selectAllNotDamboList(Es01SearchEntity searchVO) throws Exception {
		return Es01Mapper.selectAllNotDamboList(searchVO);
	}
	
	
}
