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


import com.hitejinro.old.es01.repository.OldEs01W02P03Mapper;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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

@Service("Es01W02P03Service")
@RequiredArgsConstructor
public class Es01W02P03ServiceImpl implements Es01W02P03Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(Es01W02P03ServiceImpl.class);

    private final OldEs01W02P03Mapper Es01W02P03Mapper;
    
    
  //  @Override
  // 	public List<?> selectEs01_w02_p02DIV301List(Es01SearchEntity searchVO) throws Exception {
  // 		return Es01W02P02Mapper.selectEs01_w02_p02DIV301List(searchVO);
 //  	}
   
    
	
}
