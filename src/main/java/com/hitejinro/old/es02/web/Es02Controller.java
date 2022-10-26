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
package com.hitejinro.old.es02.web;


import com.hitejinro.old.es02.model.Es02BaseEntity;
import com.hitejinro.old.es02.model.Es02SearchEntity;
import com.hitejinro.old.es02.service.Es02Service;
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

@RequestMapping("/es02")
@Controller
@RequiredArgsConstructor
public class Es02Controller {
	private final Es02Service es02Service;

	public static final int BUFF_SIZE = 2048;

	private static final Logger logger = LoggerFactory.getLogger(Es02Controller.class);

	@Value("#{environment['approval_contentType']}")
	private String approval_contentType;

	@Value("#{environment['approval_dev_api_url']}")
	private String approval_dev_api_url;

	@Value("#{environment['approval_prd_api_url']}")
	private String approval_prd_api_url;

	@RequestMapping(value = "/es02_w06.do")
	public String es02_w06(@ModelAttribute("searchVO") Es02SearchEntity searchVO, ModelMap model) throws Exception {

		// 부서명 가지고 오기 
		List<?> buseoList = es02Service.buseoList(searchVO);
		model.addAttribute("buseoList", buseoList);
		System.out.println("buseoList==>"+buseoList);

		// 담보콤보 가지고 오기 
		List<?> damboList = es02Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);

		// 결재진행사항  가지고 오기 
		List<?> procList = es02Service.procList(searchVO);
		model.addAttribute("procList", procList);

		if(searchVO.getSearchSecCode().equals("%")) {
			searchVO.setSearchSecCode("");
		}

		if(searchVO.getJumCode().equals("%")) {
			searchVO.setJumCode("");
		}

		if(searchVO.getProcDiv().equals("%")) {
			searchVO.setProcDiv("");
		}

		String startDt = searchVO.getStartDt();
		String endDt = searchVO.getEndDt();

		if(searchVO.getStartDt().isEmpty()) {
			startDt = es02Service.selectstartDt(searchVO);
			searchVO.setStartDt(startDt);
			model.addAttribute("startDt", startDt);

			endDt = es02Service.selectendDt(searchVO);
			searchVO.setEndDt(endDt);
			model.addAttribute("endDt", endDt);
		}else {
			model.addAttribute("startDt", startDt);
			searchVO.setStartDt(startDt);
		}
		model.addAttribute("menu_id", searchVO.getMenu_id());
		//목록 리스트 
		List<?> sampleList = es02Service.sampleList1(searchVO);
		model.addAttribute("sampleList", sampleList);

		return "es02/es02_w06";
	}

	// 신규 등록 팝업
	@RequestMapping(value = "/es02_w06_new.do")
	public String es02_w06_new(
			@ModelAttribute("searchVO") Es02SearchEntity searchVO,
			@ModelAttribute("es02VO") Es02BaseEntity es02VO,
			ModelMap model) throws Exception {

		//00_주류타입
		List<?> liquorType = es02Service.selectLiquorType(es02VO);
		model.addAttribute("liquorType", liquorType);

		//00_담보콤보 가지고 오기
		List<?> damboList = es02Service.selectAllNotDamboList(searchVO);
		model.addAttribute("damboList", damboList);

		//00_감정구분
		List<?> appraisalList = es02Service.appraisalList(es02VO);
		model.addAttribute("appraisalList", appraisalList);

		return "es02/es02_w06_new";
	}

	// 담당자별감정현황
	@RequestMapping(value = "/es02_w01.do")
	public String es02_w01(@ModelAttribute("searchVO") Es02SearchEntity searchVO, ModelMap model) throws Exception {

		// 부서명 가지고 오기
		List<?> buseoList = es02Service.buseoList(searchVO);
		model.addAttribute("buseoList", buseoList);

		// 담보콤보 가지고 오기
		List<?> damboList = es02Service.damboList(searchVO);
		model.addAttribute("damboList", damboList);

		// 담당자
		List<?> trusteeList = es02Service.trusteeList(searchVO);
		model.addAttribute("trusteeList", trusteeList);

		if(searchVO.getSearchSecCode().equals("%")) {
			searchVO.setSearchSecCode("");
		}

		if(searchVO.getJumCode().equals("%")) {
			searchVO.setJumCode("");
		}

		if(searchVO.getManaReceSabun().isEmpty() || searchVO.getManaReceSabun().equals("%")) {
			searchVO.setManaReceSabun("%");
		}

		String startDt = searchVO.getStartDt();
		String endDt = searchVO.getEndDt();

		if(searchVO.getStartDt().isEmpty()) {
			startDt = es02Service.selectstartDt(searchVO);
			searchVO.setStartDt(startDt);
			model.addAttribute("startDt", startDt);

			endDt = es02Service.selectendDt(searchVO);
			searchVO.setEndDt(endDt);
			model.addAttribute("endDt", endDt);
		}else {
			model.addAttribute("startDt", startDt);
			searchVO.setStartDt(startDt);
		}
		model.addAttribute("menu_id", searchVO.getMenu_id());
		//목록 리스트
		List<?> es02w01List = es02Service.es02w01List(searchVO);
		model.addAttribute("es02w01List", es02w01List);



		return "es02/es02_w01";
	}

//	 삭제
	@ResponseBody
	@RequestMapping(value = "/es02_w06_delete.do")
	public ResponseEntity<Map<String, Object>> es02_w06_delete(@RequestBody Map<String, Object> param) throws Exception {
		Map<String,Object> result = new HashMap<String, Object>();
		Boolean response = false;
		try {
			JSONObject jsonObject = new JSONObject(param);

			Es02SearchEntity searchVO = new Es02SearchEntity();

			searchVO.setTargetSeq(jsonObject.get("seq").toString());
			searchVO.setTargetYyyy(jsonObject.get("yyyy").toString());

			int deleteCnt = es02Service.es02_w06_delete(searchVO);

			response = true;
		}catch (Exception e) {
			System.out.println(e);
			response = false;
		}
		result.put("response", response);
		return new ResponseEntity<Map<String,Object>>(result, HttpStatus.OK);
	}

//	재감정 버튼
	@ResponseBody
	@RequestMapping(value = "/es02_w06_reassessment_number.do")
	public ResponseEntity<Map<String, Object>> es02_w06_reassessment_number(@RequestBody Map<String, Object> param) throws Exception {
		Map<String,Object> result = new HashMap<String, Object>();
		Boolean response = false;
		try {
			JSONObject jsonObject = new JSONObject(param);

			Es02SearchEntity searchVO = new Es02SearchEntity();

			searchVO.setTargetSeq(jsonObject.get("seq").toString());
			searchVO.setTargetYyyy(jsonObject.get("yyyy").toString());

			String reassessmentNumber = es02Service.reassessmentData(searchVO);

			result.put("reassessmentNumber",reassessmentNumber);
			response = true;
		}catch (Exception e) {
			System.out.println(e);
			response = false;
		}
		result.put("response", response);
		return new ResponseEntity<Map<String,Object>>(result, HttpStatus.OK);
	}

}
