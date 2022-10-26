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
import com.hitejinro.old.es02.model.Es02SearchEntity;

import java.util.List;

/**
 * @Class Name : KakaoService.java
 * @Description : KakaoService Class
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
public interface Es01Service {

	List<?> buseoList(Es01SearchEntity searchVO) throws Exception;

	List<?> damboList(Es01SearchEntity searchVO) throws Exception;

	List<?> procList(Es01SearchEntity searchVO) throws Exception;

	String selectstartDt(Es01SearchEntity searchVO) throws Exception;

	String selectendDt(Es01SearchEntity searchVO) throws Exception; 

	List<?> sampleList1(Es01SearchEntity searchVO) throws Exception;

	List<?> selectLiquorType(Es01BaseEntity es01vo) throws Exception;

	List<?> appraisalList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCrossList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectSuccessfulBidRateTableList(Es01BaseEntity es01vo)  throws Exception;

	List<?> selectPriceAuctionList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectPriceCaseDList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectPriceCaseMList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectPriceAptList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectRegulatoryAffairsOfficerList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCollateralBuildingList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCollateralMasterList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCorrectionTableJBList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCorrectionTableList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCGBJHighRowJBList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCGBJHighRowList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectOurSetAmontList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectOurSetJBAmontList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCGBJAmontList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectCGBJAmontJBList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectEvaluationClassificationList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectDividendTableMCalculationList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectculationHousingRentalDepositList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectDividendTableCalculationList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectAuctionCostList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectBuildingStructureList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectRoofTypeList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectLandUseZoneList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectInteriorCostsList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectFormOccpantAptList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectBuildTransitYearAptList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectJeonYuPartAreaAptList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectApartmentComplexSizeList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectJeonyuPartLocationList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectSerialNumberGuList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectContentRightList(Es01BaseEntity es01vo) throws Exception;
	

	List<?> selectRankingCodeList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectMaxBondAmountList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectRegDepsitAppAreaList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectPhotoClassificationList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectAppraiseMinMaxList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectSanghoList(Es01BaseEntity es01vo) throws Exception;

	List<?> selectOpinionList(Es01BaseEntity es01vo)  throws Exception;

	String selectEstiDateCheck(Es01BaseEntity es01vo) throws Exception;

	List<?> selectNewSeqNo(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_save(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2011_save(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2017_save(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2101_save(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2301_save(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2401_save(Es01BaseEntity es01vo) throws Exception;

	int selectEs2404DelCheck(Es01BaseEntity es01vo) throws Exception;

	void deleteEs2404Del(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2404_save(Es01BaseEntity es01vo)  throws Exception;

	int selectEs2181Check(Es01BaseEntity es01vo)  throws Exception;

	void es01_w02_es2181_update(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2181_insert(Es01BaseEntity es01vo) throws Exception;

	int selectEs2111DelCheck(Es01BaseEntity es01vo) throws Exception;

	void deleteEs2111Del(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2111_insert(Es01BaseEntity es01vo) throws Exception;

	int selectEs2141DelCheck(Es01BaseEntity es01vo) throws Exception;

	void deleteEs2141Del(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2141_insert(Es01BaseEntity es01vo) throws Exception;

	int selectEs2151DelCheck(Es01BaseEntity es01vo)  throws Exception;

	void deleteEs2151Del(Es01BaseEntity es01vo)  throws Exception;

	void es01_w02_es2151_insert(Es01BaseEntity es01vo)  throws Exception;

	int selectEs2402DelCheck(Es01BaseEntity es01vo) throws Exception;

	void deleteEs2402Del(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2402_insert(Es01BaseEntity es01vo)  throws Exception;

	void es01_w02_es10_V_ES10_01_update(Es01BaseEntity es01vo)   throws Exception;

	String Pro_Es01_w02_Dividend_save(Es01BaseEntity es01vo) throws Exception;

	String reassessmentData(Es01SearchEntity searchVO) throws Exception;

	List<?> selectAllNotDamboList(Es01SearchEntity searchVO) throws Exception;

}
