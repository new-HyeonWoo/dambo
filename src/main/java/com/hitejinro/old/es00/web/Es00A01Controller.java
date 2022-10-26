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
import com.hitejinro.old.es00.service.Es00A01Service;
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
public class Es00A01Controller {

	private final Es00A01Service es00a01Service;
	
    public static final int BUFF_SIZE = 2048;
    
    private static final Logger logger = LoggerFactory.getLogger(Es00A01Controller.class); 
    
    
    @Value("#{environment['approval_contentType']}")
    private String approval_contentType;
    
    @Value("#{environment['approval_dev_api_url']}")
    private String approval_dev_api_url;
    
    @Value("#{environment['approval_prd_api_url']}")
    private String approval_prd_api_url;
    
	// 리스트 화면
    @RequestMapping(value = "/es00_a01.do")
	public String es00_w02(@ModelAttribute("searchVO") Es00SearchEntity searchVO, ModelMap model) throws Exception {
    	
    	try {
        	List<?> selectTopMenuList = es00a01Service.selectTopMenuList();
        	model.addAttribute("selectTopMenuList", selectTopMenuList);
        	
        	// 메뉴 관리
        	List<?> selectMenuList = es00a01Service.selectMenuList();
        	model.addAttribute("selectMenuList", selectMenuList);
        	
        	// 수정 파트 ==> 필수 
        	if(searchVO.getUser_r().isEmpty()) {
        		searchVO.setUser_r("J");
        	}
        	
        	// 그룹관리 셀럭터 박스
        	List<?> selectGroupHeaderList = es00a01Service.selectGroupHeaderList(searchVO);
        	model.addAttribute("selectGroupHeaderList", selectGroupHeaderList);
        	

        	if(searchVO.getFlagType().isEmpty()) {
        		searchVO.setFlagType("kt_tab_pane_1");
        	}
        	
        	List<?> selectGroupList = es00a01Service.selectGroupList(searchVO);
        	model.addAttribute("selectGroupList", selectGroupList);
        	
        	model.addAttribute("user_r", searchVO.getUser_r());
        	model.addAttribute("flag_type", searchVO.getFlagType());
        	model.addAttribute("menu_id", searchVO.getMenu_id());
    	}catch (Exception e) {
			System.out.println(e);
		}
    	
		return "es00/es00_a01";
	}
    
	// 탑메뉴 리스트
    @ResponseBody
    @RequestMapping(value = "/es00_a01_topMenu_list.do")
	public ResponseEntity<Map<String, Object>> es00_a01_topMenu_list() throws Exception {
    	Map<String,Object> result = new HashMap<String, Object>();
    	Boolean response = false;
    	try {
    		List<?> selectTopMenuList = es00a01Service.selectTopMenuList();
    		result.put("selectTopMenuList", selectTopMenuList);
    		response = true;
    	}catch (Exception e) {
			System.out.println(e);
			response = false;
		}
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
    
	// 메뉴관리 리스트
    @ResponseBody
    @RequestMapping(value = "/es00_a01_menu_list.do")
	public ResponseEntity<Map<String, Object>> es00_a01_menu_list() throws Exception {
    	Map<String,Object> result = new HashMap<String, Object>();
    	Boolean response = false;
    	try {
        	List<?> selectMenuList = es00a01Service.selectMenuList();
        	result.put("selectMenuList", selectMenuList);
        	response = true;
    	}catch (Exception e) {
    		response = false;
			System.out.println(e);
		}
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
    
	// 탑메뉴 저장
    @ResponseBody
    @RequestMapping(value = "/es00_a01_toeMenu_save.do")
	public ResponseEntity<Map<String, Object>> es00_a01_toeMenu_save(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
    		
    		List<?> insertList = (ArrayList<?>)jsonObject.get("insertData");
    		
    		int insertCnt = es00a01Service.insertTopMenu(insertList);
    		
    		System.out.println("insertCnt ==>" + insertCnt);
    		
    		List<?> updateList = (ArrayList<?>)jsonObject.get("updateData");
    		
    		int updateCnt = es00a01Service.updateTopMenu(updateList);
    		
    		System.out.println("updateCnt ==>" + updateCnt);
    		
    		response = true;
    	}catch (Exception e) {
			System.out.println("err ==>" + e);
			response = false;
		}
    	Map<String,Object> result = new HashMap<String, Object>();
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
    
	// 탑메뉴 삭제
    @ResponseBody
    @RequestMapping(value = "/es00_a01_topMenu_delete.do")
	public ResponseEntity<Map<String, Object>> es00_a01_topMenu_delete(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
    		
    		List<?> deleteList = (ArrayList<?>)jsonObject.get("deleteData");  
    		
    		int deleteCnt = es00a01Service.deleteTopMenu(deleteList);
    		
    		System.out.println("deleteCnt ==>" + deleteCnt);
    		
    		response = true;
    	}catch (Exception e) {
			System.out.println("err ==>" + e);
			response = false;
		}
    	Map<String,Object> result = new HashMap<String, Object>();
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
    
	// 메뉴 저장 및 수정
    @ResponseBody
    @RequestMapping(value = "/es00_a01_menu_marge.do")
	public ResponseEntity<Map<String, Object>> es00_a01_menu_marge(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
    		
    		List<?> insertList = (ArrayList<?>)jsonObject.get("insertData");
    		
    		int insertCnt = es00a01Service.margeMenu(insertList);
    		
    		System.out.println("insertCnt ==>" + insertCnt);
    		
    		List<?> updateList = (ArrayList<?>)jsonObject.get("updateData");
    		
    		int updateCnt = es00a01Service.margeMenu(updateList);
    		
    		System.out.println("updateCnt ==>" + updateCnt);
    		
    		response = true;
    	}catch (Exception e) {
			System.out.println("err ==>" + e);
			response = false;
		}
    	Map<String,Object> result = new HashMap<String, Object>();
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
    
	// 메뉴 삭제
    @ResponseBody
    @RequestMapping(value = "/es00_a01_menu_delete.do")
	public ResponseEntity<Map<String, Object>> es00_a01_menu_delete(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
    		
    		List<?> deleteList = (ArrayList<?>)jsonObject.get("deleteData");  
    		
    		int deleteCnt = es00a01Service.deleteMenu(deleteList);
    		
    		System.out.println("deleteCnt ==>" + deleteCnt);
    		
    		response = true;
    	}catch (Exception e) {
			System.out.println("err ==>" + e);
			response = false;
		}
    	Map<String,Object> result = new HashMap<String, Object>();
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
    
	// 그룹관리 마지
    @ResponseBody
    @RequestMapping(value = "/es00_a01_group_marge.do")
	public ResponseEntity<Map<String, Object>> es00_a01_group_marge(@RequestBody Map<String, Object> param) throws Exception {
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
    		
    		List<?> margeList = (ArrayList<?>)jsonObject.get("margeData");  
    		
    		int margeCnt = es00a01Service.margeGroup(margeList);
    		
    		System.out.println("margeCnt ==>" + margeCnt);
    		
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