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
package com.hitejinro.old.es01.repository;

import com.hitejinro.old.es01.model.Es01SearchEntity;
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
public interface OldEs01W03Mapper {

	/** Q_00_가임대보증금적용지역 */ List<?> selectRegDepsitStoreAreaList(Es01SearchEntity searchVO)  throws Exception;
	List<?> selectStoreProcList(Es01SearchEntity searchVO)  throws Exception;
	/** Q_00_가격동향 */ List<?> selectEs01_w03DIV186List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV180List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV301List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV301_21List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV178List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV127List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV174List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV177List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectPhotoClassificationList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV139List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV179List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV114List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV181List(Es01SearchEntity searchVO)  throws Exception;

	List<?> selectEs01_w03DIV191List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV999List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV150List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV104List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV207List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV207FloorList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV182List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV154List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV100List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03DIV177FloorList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es4110List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03Es4111List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03ComprehensiveRealEstateTaxList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03RegistrationTaxList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es4114List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es4113List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es4112List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03DisposalCostList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03AcquisitionTaxList(Es01SearchEntity searchVO);

	List<?> selectRatificationCaseList(Es01SearchEntity searchVO);

	List<?> selectProfitCaseList(Es01SearchEntity searchVO);

	List<?> selectYesNoList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2123List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2163List(Es01SearchEntity searchVO);

	List<?> selectPriceAuctionList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2143List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2183List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2153List(Es01SearchEntity searchVO);

	List<?> selectUseGubunList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2113List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2123AList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2011List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2404List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2164List(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2164AList(Es01SearchEntity searchVO);

	List<?> selectEs01_w03Es2103List(Es01SearchEntity searchVO);
	
	
	

}
