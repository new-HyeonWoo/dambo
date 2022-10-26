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
public interface Es01W02P02Service {

	List<?> selectEs01_w02_p02DIV301List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02DIV185List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV173List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02DIV111List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02DIV107List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02DIV107FloorList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02DIV154List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02157List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02DIV177List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Via03List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2011ist(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2301ist(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2182ist(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2112ist(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2122ist(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2122Totalist(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2102List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w02_p02Es2142List(Es01SearchEntity searchVO) throws Exception;

	void es01_w02_es2182_save(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2102_save(Es01BaseEntity es01vo) throws Exception;

	int selectEs2142DelCheck(Es01BaseEntity es01vo) throws Exception;

	void deleteEs2142Del(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_2142_insert(Es01BaseEntity es01vo) throws Exception;

	int selectEs2112DelCheck(Es01BaseEntity es01vo) throws Exception;

	void deleteEs2112Del(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2112_save(Es01BaseEntity es01vo) throws Exception;

	int selectEs2122DelCheck(Es01BaseEntity es01vo) throws Exception;

	void deleteEs2122Del(Es01BaseEntity es01vo) throws Exception;

	void es01_w02_es2122_insert(Es01BaseEntity es01vo) throws Exception;

	

	

	



}
