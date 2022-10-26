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
import com.hitejinro.old.es01.repository.OldEs01W03Mapper;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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

@Service("Es01W03Service")
@RequiredArgsConstructor
public class Es01W03ServiceImpl implements Es01W03Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(Es01W03ServiceImpl.class);

    private final OldEs01W03Mapper Es01W03Mapper;


    @Override
	/**
	 *
	 */
	public List<?> selectStoreProcList(Es01SearchEntity searchVO) throws Exception {
		return Es01W03Mapper.selectStoreProcList(searchVO);
	}
    @Override
   	public List<?> selectRegDepsitStoreAreaList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectRegDepsitStoreAreaList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2403List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectRegDepsitStoreAreaList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV186List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV186List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV180List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV180List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV301List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV301List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV301_21List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV301_21List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV178List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV178List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV127List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV127List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV174List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV174List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV177List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV177List(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03DIV139List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV139List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV179List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV179List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV114List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV114List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV181List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV181List(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03DIV191List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV191List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV999List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV999List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV150List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV150List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV104List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV104List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV207List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV207List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV207FloorList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV207FloorList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV182List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV182List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV154List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV154List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV100List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV100List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV177FloorList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DIV177FloorList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es4110List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es4110List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es4111List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es4111List(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03Es4112List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es4112List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es4113List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es4113List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es4114List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es4114List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03RegistrationTaxList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03RegistrationTaxList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03ComprehensiveRealEstateTaxList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03ComprehensiveRealEstateTaxList(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03DisposalCostList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03DisposalCostList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03AcquisitionTaxList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03AcquisitionTaxList(searchVO);
   	}
    @Override
   	public List<?> selectRatificationCaseList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectRatificationCaseList(searchVO);
   	}
    @Override
   	public List<?> selectProfitCaseList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectProfitCaseList(searchVO);
   	}
    
    @Override
   	public List<?> selectYesNoList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectYesNoList(searchVO);
   	}
    @Override
   	public List<?> selectUseGubunList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectUseGubunList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2153List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2153List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2183List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2183List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2143List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2143List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2163List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2163List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2123List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2123List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2123AList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2123AList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2011List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2011List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2404List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2404List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2164List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2164List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2164AList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2164AList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2103List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2103List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03Es2113List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03Mapper.selectEs01_w03Es2113List(searchVO);
   	}
   
    
   
    
    
	
}
