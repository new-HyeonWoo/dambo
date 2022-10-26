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
import com.hitejinro.old.es01.repository.OldEs01W03P01Mapper;

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

@Service("Es01W03P01Service")
@RequiredArgsConstructor
public class Es01W03P01ServiceImpl implements Es01W03P01Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(Es01W03P01ServiceImpl.class);

    private final OldEs01W03P01Mapper Es01W03P01Mapper;
    
    
    @Override
   	public List<?> selectEs01_w03_p01Es2186List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Es2186List(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03_p01Es2015List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Es2015List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_Es2186List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_Es2186List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Es2302List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Es2302List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Es2302_AmtList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Es2302_AmtList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES10_01List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES10_01List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01HighMinList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01HighMinList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2013List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2013List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2017List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2017List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2172List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2172List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES2172List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2172List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES2127List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2127List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2015List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2015List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2171List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2171List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2015GroupList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2015GroupList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2013DamboList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2013DamboList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2013BuildingList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2013BuildingList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2404DList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2404DList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2404DTempList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2404DTempList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2404MList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2404MList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2404CntList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2404CntList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2165List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2165List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2125List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2125List(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03_p01V_ES2126List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2126List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES00600List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES00600List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES2126RevenueList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2126RevenueList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES2176List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2176List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES2106List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2106List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES2012List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2012List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01V_ES2014List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01V_ES2014List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div153List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div153List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div123List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div123List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div141List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div141List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div187List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div187List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div184List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div184List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div156List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div156List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div189List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div189List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div118List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div118List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div190List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div190List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div150List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div150List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div128List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div128List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div105List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div105List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div127List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div127List(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03_p01Div117List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div117List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div113List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div113List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div125List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div125List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div132List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div132List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div143List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div143List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div105StoreList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div105StoreList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div116List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div116List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div114List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div114List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div126List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div126List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div183List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div183List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div192List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div192List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div115List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div115List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div101List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div101List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div176List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div176List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div139List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div139List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div142List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div142List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div106List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div106List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div188List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div188List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div137List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div137List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES00112List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES00112List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div157List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div157List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div130List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div130List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div175List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div175List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES00100List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES00100List(searchVO);
   	}
    
    @Override
   	public List<?> selectEs01_w03_p01Div159List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div159List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES00Div130List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES00Div130List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div193List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div193List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01Div159Attr01List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01Div159Attr01List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2013MarkList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2013MarkList(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03_p01ES2126List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W03P01Mapper.selectEs01_w03_p01ES2126List(searchVO);
   	}
   
    
    
	
}
