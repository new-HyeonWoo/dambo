package com.hitejinro.old.es00.service;

import com.hitejinro.old.es00.model.Es00SearchEntity;

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

public interface Es00A01Service {
	
	List<?> selectTopMenuList() throws Exception;
	
	List<?> selectMenuList() throws Exception;
	
	List<?> selectGroupHeaderList(Es00SearchEntity searchVO) throws Exception;
	
	List<?> selectGroupList(Es00SearchEntity searchVO) throws Exception;
	
	int insertTopMenu(List<?> insertList) throws Exception;
	
	int updateTopMenu(List<?> updateList) throws Exception;
	
	int deleteTopMenu(List<?> deleteList) throws Exception;
	
	int margeMenu(List<?> margeList) throws Exception;
	
	int deleteMenu(List<?> deleteList) throws Exception;
	
	int margeGroup(List<?> margeList) throws Exception;
	
}