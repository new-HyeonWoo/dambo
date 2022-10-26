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

import com.hitejinro.old.es01.repository.OldEs01W02P02Mapper;
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

@Service("Es01W02P02Service")
@RequiredArgsConstructor
public class Es01W02P02ServiceImpl implements Es01W02P02Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(Es01W02P02ServiceImpl.class);

    private final OldEs01W02P02Mapper Es01W02P02Mapper;
    
    
    @Override
   	public List<?> selectEs01_w02_p02DIV301List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02DIV301List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02DIV185List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02DIV185List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w03DIV173List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w03DIV173List(searchVO); 
   	}
    @Override
   	public List<?> selectEs01_w02_p02DIV111List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02DIV111List(searchVO);  
   	}
    @Override
   	public List<?> selectEs01_w02_p02DIV107List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02DIV107List(searchVO);  
   	}
    @Override
   	public List<?> selectEs01_w02_p02DIV107FloorList(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02DIV107FloorList(searchVO);  
   	}
    @Override
   	public List<?> selectEs01_w02_p02DIV154List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02DIV154List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02157List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02157List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02DIV177List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02DIV177List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Via03List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Via03List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2011ist(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2011ist(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2301ist(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2301ist(searchVO); 
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2182ist(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2182ist(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2112ist(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2112ist(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2122ist(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2122ist(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2122Totalist(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2122Totalist(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2102List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2102List(searchVO);
   	}
    @Override
   	public List<?> selectEs01_w02_p02Es2142List(Es01SearchEntity searchVO) throws Exception {
   		return Es01W02P02Mapper.selectEs01_w02_p02Es2142List(searchVO);
   	}
    
    public void es01_w02_es2182_save(Es01BaseEntity es01VO) throws Exception {
    	Es01W02P02Mapper.es01_w02_es2182_save(es01VO);
	}
    public void es01_w02_es2102_save(Es01BaseEntity es01VO) throws Exception {
    	Es01W02P02Mapper.es01_w02_es2102_save(es01VO);
	}
    public int selectEs2142DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01W02P02Mapper.selectEs2142DelCheck(es01VO);
	}
    public void deleteEs2142Del(Es01BaseEntity es01VO) throws Exception {
		 Es01W02P02Mapper.deleteEs2142Del(es01VO);
	}
    public void es01_w02_2142_insert(Es01BaseEntity es01VO) throws Exception {
		 Es01W02P02Mapper.es01_w02_2142_insert(es01VO);
	}
    public int selectEs2112DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01W02P02Mapper.selectEs2112DelCheck(es01VO);
	}
    public void deleteEs2112Del(Es01BaseEntity es01VO) throws Exception {
		 Es01W02P02Mapper.deleteEs2112Del(es01VO);
	}
    public void es01_w02_es2112_save(Es01BaseEntity es01VO) throws Exception {
		 Es01W02P02Mapper.es01_w02_es2112_save(es01VO);
	}
    public int selectEs2122DelCheck(Es01BaseEntity es01VO) throws Exception {
		return Es01W02P02Mapper.selectEs2122DelCheck(es01VO);
	}
    public void deleteEs2122Del(Es01BaseEntity es01VO) throws Exception {
		 Es01W02P02Mapper.deleteEs2122Del(es01VO);
	}
    public void es01_w02_es2122_insert(Es01BaseEntity es01VO) throws Exception {
		 Es01W02P02Mapper.es01_w02_es2122_insert(es01VO);
	}
    
}
