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
import com.hitejinro.old.es00.service.Es00W01Service;
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
public class Es00W01Controller {

	private final Es00W01Service es00W01Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es00W01Controller.class); 
    
    
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
	// 리스트 화면
    @RequestMapping(value = "/es00_w01.do")
	public String es00_w01(@ModelAttribute("searchVO") Es00SearchEntity searchVO, ModelMap model) throws Exception {
    	
    	try {
    		// 대분류 데이터 
        	List<?> selectLclasList = es00W01Service.selectLclasList();
        	
        	model.addAttribute("lclasList", selectLclasList);
        	
        	if(searchVO.getAttr00().isEmpty()) {
        		searchVO.setAttr00("DIV000");
        	}
        	searchVO.setAttr09(searchVO.getAttr00().toString());
        	
        	// 헤더 리스트
        	List<?> selectHeaderList = es00W01Service.selectHeaderList(searchVO);
        	model.addAttribute("selectHeaderList", selectHeaderList);
        	
        	List<?> selectCodeAllList = es00W01Service.selectAllcodeList(searchVO);
        	model.addAttribute("selectCodeAllList", selectCodeAllList);
        	
        	model.addAttribute("attr00", searchVO.getAttr00());

        	System.out.println("es00_w01==>"+selectCodeAllList);
        	
        	model.addAttribute("menu_id", searchVO.getMenu_id());
    	}catch (Exception e) {
			System.out.println(e);
		}

		return "es00/es00_w01";
	}
    
	// 공통코드 저장 및 수정
    @ResponseBody
    @RequestMapping(value = "/es00_w01_save.do")
	public ResponseEntity<Map<String, Object>> es00_w01_save(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
        	JSONObject jsonObject = new JSONObject(param);

        	List<?> insertList = (ArrayList<?>)jsonObject.get("insertData");
    		
        	if(insertList.size() != 0) {
        		int insertSuccess = es00W01Service.es00_w01_insert_save(insertList);
        		System.out.println("insertListSuccessCnt==>" + insertSuccess);
        	}
        	
        	List<?> updataList = (ArrayList<?>)jsonObject.get("updataData");
        	
        	if(updataList.size() != 0) {
        		int updateSuccess = es00W01Service.es00_w01_update_save(updataList);    			
        		System.out.println("updataListSuccessCnt==>" + updateSuccess);
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