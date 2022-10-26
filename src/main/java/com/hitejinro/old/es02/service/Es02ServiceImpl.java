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
package com.hitejinro.old.es02.service;

import com.hitejinro.old.es01.model.Es01BaseEntity;
import com.hitejinro.old.es01.model.Es01SearchEntity;
import com.hitejinro.old.es01.repository.OldEs01Mapper;
import com.hitejinro.old.es02.model.Es02BaseEntity;
import com.hitejinro.old.es02.model.Es02SearchEntity;
import com.hitejinro.old.es02.repository.OldEs02Mapper;
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

@Service("Es02Service")
@RequiredArgsConstructor
public class Es02ServiceImpl implements Es02Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(Es02ServiceImpl.class);

    private final OldEs02Mapper Es02Mapper;

    @Override
	public List<?> damboList(Es02SearchEntity searchVO) throws Exception {
		return Es02Mapper.damboList(searchVO);
	}

	public List<?> selectAllNotDamboList(Es02SearchEntity searchVO) throws Exception {
		return Es02Mapper.selectAllNotDamboList(searchVO);
	}

	public List<?> trusteeList(Es02SearchEntity searchVO) throws Exception {
		return Es02Mapper.trusteeList(searchVO);
	}

	public List<?> es02w01List(Es02SearchEntity searchVO) throws Exception {
		return Es02Mapper.es02w01List(searchVO);
	}

    public List<?> buseoList(Es02SearchEntity searchVO)  throws Exception {
    	return Es02Mapper.buseoList(searchVO);
	}
	public List<?> procList(Es02SearchEntity searchVO)  throws Exception {
		return Es02Mapper.procList(searchVO);
	}
	public String selectstartDt(Es02SearchEntity searchVO) throws Exception {
		return Es02Mapper.selectstartDt(searchVO);
	}
	public String selectendDt(Es02SearchEntity searchVO) throws Exception {
		return Es02Mapper.selectendDt(searchVO);
	}
	public List<?> sampleList1(Es02SearchEntity searchVO)  throws Exception {
		return Es02Mapper.sampleList1(searchVO);
	}
	public List<?> selectLiquorType(Es02BaseEntity es01VO)  throws Exception {
		return Es02Mapper.selectLiquorType(es01VO);
	}
	public List<?> appraisalList(Es02BaseEntity es01VO)  throws Exception {
		return Es02Mapper.appraisalList(es01VO);
	}

	public String reassessmentData(Es02SearchEntity searchVO)  throws Exception {
		return Es02Mapper.reassessmentData(searchVO);
	}

	public int es02_w06_delete(Es02SearchEntity searchVO) throws Exception {
		return Es02Mapper.es02_w06_delete(searchVO);
	}

}
