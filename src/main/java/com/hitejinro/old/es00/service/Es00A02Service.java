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

public interface Es00A02Service {
	
	List<?> selectGroupList() throws Exception;
	
	List<?> selectPartList() throws Exception;
	
	List<?> selectUserGroupList(Es00SearchEntity searchVO) throws Exception;
	
	int margeMenuGroup(List<?> margeList) throws Exception;
}