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
package com.hitejinro.old.es00.web;

import com.hitejinro.old.es00.model.Es00SearchEntity;
import com.hitejinro.old.es00.service.Es00A02Service;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * @Class Name : FileAttachController.java
 * @Description : File Attach Controller Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2021.07.28  JWJ           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@RequestMapping("/es00")
@Controller
@RequiredArgsConstructor
public class Es00A02Controller {

	private final Es00A02Service es00a02Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es00A02Controller.class); 
    
    
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
	// 리스트 화면
    @RequestMapping(value = "/es00_a02.do")
	public String es00_w02(@ModelAttribute("searchVO") Es00SearchEntity searchVO, ModelMap model) throws Exception {
    	
    	if(searchVO.getUser_r().isEmpty()) {
    		searchVO.setUser_r("");    		
    	}
    	
    	if(searchVO.getPart_id().isEmpty()) {
    		searchVO.setPart_id("");    		
    	}
    	
    	if(searchVO.getUser_id().isEmpty()) {
    		searchVO.setUser_id("");    		
    	}
    	
    	if(searchVO.getUser_name().isEmpty()) {
    		searchVO.setUser_name("");    		
    	}
    	
    	try {
        	// 그룹 선택
        	List<?> selectGroupList = es00a02Service.selectGroupList();
        	model.addAttribute("selectGroupList", selectGroupList);
        	
        	// 파트선택
        	List<?> selectPartList = es00a02Service.selectPartList();
        	model.addAttribute("selectPartList", selectPartList);
        	
        	// 리스트
        	List<?> selectUserGroupList = es00a02Service.selectUserGroupList(searchVO);
        	model.addAttribute("selectUserGroupList", selectUserGroupList);
        	
        	System.out.println("selectUserGroupList====>>>" +selectUserGroupList);
        	
        	model.addAttribute("menu_id", searchVO.getMenu_id());
    	}catch (Exception e) {
			System.out.println(e);
		}
    	
		return "es00/es00_a02";
	}
    

    @ResponseBody
    @RequestMapping(value = "/es00_a02_save.do")
	public ResponseEntity<Map<String, Object>> es00_w01_save(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
        	JSONObject jsonObject = new JSONObject(param);

        	List<?> margeList = (ArrayList<?>)jsonObject.get("margeData");
        	
        	if(margeList.size() != 0) {
        		int margeSuccess = es00a02Service.margeMenuGroup(margeList);    			
        		System.out.println("updataListSuccessCnt==>" + margeSuccess);
        	}
        	
    		response = true;
    	}catch (Exception e) {
			System.out.println("err ==>" + e);
			response = false;
		}
    	Map<String,Object> result = new HashMap<String, Object>();
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}

}