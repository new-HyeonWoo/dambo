/*
 * Copyright 2011 MOPAS(Ministry of Public Administration and Security).
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
package com.hitejinro.old.es02.repository;


import com.hitejinro.old.es02.model.Es02BaseEntity;
import com.hitejinro.old.es02.model.Es02SearchEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Kakao에 관한 데이터처리 매퍼 클래스
 *
 * @author  JWJ
 * @since 2021.05.28
 * @version 1.0
 * @see <pre>
 *  == 개정이력(Modification Information) ==
 *
 *          수정일          수정자           수정내용
 *  ----------------    ------------    ---------------------------
 *   2021.05.28         JWJ             최초 생성
 *
 * </pre>
 */
@Mapper
public interface OldEs02Mapper {

	List<?> damboList(Es02SearchEntity searchVO) throws Exception;
	List<?> selectAllNotDamboList(Es02SearchEntity searchVO) throws Exception;
	List<?> es02w01List(Es02SearchEntity searchVO) throws Exception;
	List<?> trusteeList(Es02SearchEntity searchVO) throws Exception;
	List<?> buseoList(Es02SearchEntity searchVO) throws Exception;
	List<?> procList(Es02SearchEntity searchVO) throws Exception;
	String selectstartDt(Es02SearchEntity searchVO) throws Exception;
	String selectendDt(Es02SearchEntity searchVO) throws Exception;
	List<?> sampleList1(Es02SearchEntity searchVO) throws Exception;
	List<?> selectLiquorType(Es02BaseEntity searchVO) throws Exception;
	List<?> appraisalList(Es02BaseEntity es02vo) throws Exception;
	String reassessmentData(Es02SearchEntity searchVO) throws Exception;
	int es02_w06_delete(Es02SearchEntity searchVO) throws Exception;

}
