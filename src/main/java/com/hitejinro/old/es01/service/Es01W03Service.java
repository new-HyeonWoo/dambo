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

import com.hitejinro.old.es01.model.Es01SearchEntity;

import java.util.List;

/**
 *
 */
public interface Es01W03Service {

	
	List<?> selectStoreProcList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectRegDepsitStoreAreaList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2403List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV186List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV180List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV301List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV301_21List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV178List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV127List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV174List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV177List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV139List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV179List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV114List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV181List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV191List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV999List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV150List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV104List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV207List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV207FloorList(Es01SearchEntity es01vo) throws Exception;

	List<?> selectEs01_w03DIV182List(Es01SearchEntity es01vo) throws Exception;

	List<?> selectEs01_w03DIV154List(Es01SearchEntity es01vo) throws Exception;

	List<?> selectEs01_w03DIV100List(Es01SearchEntity es01vo) throws Exception;

	List<?> selectEs01_w03DIV177FloorList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es4110List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es4111List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es4112List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03ComprehensiveRealEstateTaxList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03RegistrationTaxList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es4114List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es4113List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DisposalCostList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectProfitCaseList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectRatificationCaseList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03AcquisitionTaxList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectYesNoList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2163List(Es01SearchEntity searchVO) throws Exception;


	List<?> selectEs01_w03Es2143List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2183List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2153List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectUseGubunList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2113List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2123List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2123AList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2011List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2404List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2164List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2164AList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es2103List(Es01SearchEntity searchVO) throws Exception;

	

	

	
	//String Pro_Es01_w02_Dividend_save(Es01BaseEntity es01vo) throws Exception;

}
