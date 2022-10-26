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
public interface OldEs01W03P01Mapper {

	List<?> selectEs01_w03_p01Es2186List(Es01SearchEntity searchVO) throws Exception ;

	List<?> selectEs01_w03_p01Es2015List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_Es2186List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Es2302List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Es2302_AmtList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES10_01List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01HighMinList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2013List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2017List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2172List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2172List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2127List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2015List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2171List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2015GroupList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2013DamboList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2013BuildingList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2404DList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2404DTempList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2404MList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2404CntList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2165List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2126List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2125List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2126List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES00600List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2126RevenueList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2176List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2106List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2012List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01V_ES2014List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div153List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div123List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div141List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div187List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div184List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div156List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div189List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div118List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div190List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div150List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div128List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div105List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div127List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div117List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div113List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div125List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div132List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div143List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div105StoreList(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div116List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div114List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div126List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div183List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div192List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div115List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div101List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div176List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div139List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div142List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div106List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div188List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div137List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES00112List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div157List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div130List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div175List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES00100List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div159List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES00Div130List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div193List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01Div159Attr01List(Es01SearchEntity searchVO) throws Exception;

	List<?> selectEs01_w03_p01ES2013MarkList(Es01SearchEntity searchVO) throws Exception;

	
	
	

}
