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
import com.hitejinro.old.es00.service.Es00W02Service;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
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
public class Es00W02Controller {

	private final Es00W02Service es00w02Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es00W02Controller.class); 
    
    
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
	// 리스트 화면
    @RequestMapping(value = "/es00_w02.do")
	public String es00_w02(@ModelAttribute("searchVO") Es00SearchEntity searchVO, Model model) throws Exception {
    	try {
			// 대분류 데이터 
	    	List<?> selectDsrtctList = es00w02Service.selectDsrtctList();
	    	model.addAttribute("selectDsrtctList", selectDsrtctList);
	    	
	    	// 담당자 리스트
	    	List<?> selectManagerList = es00w02Service.selectManagerList();
	    	model.addAttribute("selectManagerList", selectManagerList);
	    	
	    	System.out.println("es00_w02==>"+selectDsrtctList);
	
	    	model.addAttribute("menu_id", searchVO.getMenu_id());
    	}catch (Exception e) {
			System.out.println(e);
		}

		return "es00/es00_w02";
	}
    
	// 공통코드 저장 및 수정
    @ResponseBody
    @RequestMapping(value = "/es00_w02_save.do")
	public ResponseEntity<Map<String, Object>> es00_w02_save(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
        	List<?> updataList = (List)jsonObject.get("updataData");
        	
        	if(updataList.size() != 0) {
    			int updateSuccess = es00w02Service.es00_w02_update_save(updataList);    			
    			System.out.println("updateSuccess==>" + updateSuccess);
        	}
    		
        	response = true;
    	}catch (Exception e) {
			System.out.println(e);
			response = false;
		}
    	
    	Map<String,Object> result = new HashMap<String, Object>();
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);

	}
}