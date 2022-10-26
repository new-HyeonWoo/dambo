package com.hitejinro.old.es01.web;

import com.hitejinro.old.es01.model.Es01SearchEntity;
import com.hitejinro.old.es01.service.Es01Service;
import com.hitejinro.old.es01.service.Es01W06Service;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/es01")
@Controller
@RequiredArgsConstructor
public class Es01W06Controller {

	private final Es01Service es01Service;
	private final Es01W06Service es01w06Service;
	
	@RequestMapping(value = "/es01_w06.do")
	public String es01_w06(@ModelAttribute("searchVO") Es01SearchEntity searchVO, ModelMap model) throws Exception {
		 
		try {
			// 부서명 가지고 오기 
			List<?> buseoList = es01Service.buseoList(searchVO);
			model.addAttribute("buseoList", buseoList);
			System.out.println("buseoList==>"+buseoList);

			// 담보콤보 가지고 오기 
			List<?> damboList = es01Service.damboList(searchVO);
			model.addAttribute("damboList", damboList);

			String startDt = searchVO.getStartDt();
			String endDt = searchVO.getEndDt();
			 
			if(searchVO.getStartDt().isEmpty()) {
				startDt = es01Service.selectstartDt(searchVO);
				searchVO.setStartDt(startDt);
				model.addAttribute("startDt", startDt);
				
				endDt = es01Service.selectendDt(searchVO);
				searchVO.setEndDt(endDt);
				model.addAttribute("endDt", endDt);
			}else {
				model.addAttribute("startDt", startDt);
				searchVO.setStartDt(startDt);
			}
			
			if(searchVO.getJumCode().isEmpty()) {
				searchVO.setJumCode("%");
			}
			
			if(searchVO.getSearchJuso().isEmpty()) {
				searchVO.setSearchSecCode("%");
			}
			
			List<?> selectCollateralList = es01w06Service.selectCollateralList(searchVO);
			model.addAttribute("selectCollateralList", selectCollateralList);
			
			model.addAttribute("menu_id", searchVO.getMenu_id());
		}catch (Exception e) {
			System.out.println(e);
		}
		return "es01/es01_w06";
	}
	
	// 담보 목록 Detail
    @ResponseBody
    @RequestMapping(value = "/es01_w06_collateralListDetail.do")
	public ResponseEntity<Map<String, Object>> es01_w06_collateralListDetail(@RequestBody Map<String, Object> param) throws Exception {
    	Map<String,Object> result = new HashMap<String, Object>();
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
    		
    		Es01SearchEntity searchVO = new Es01SearchEntity();
    		
    		searchVO.setTargetSeq(jsonObject.get("seq").toString());
    		searchVO.setTargetYyyy(jsonObject.get("yyyy").toString());
    		
    		List<?> selectCollateralListDetail = es01w06Service.selectCollateralListDetail(searchVO);
    		result.put("selectCollateralListDetail", selectCollateralListDetail);
    		result.put("selectCollateralListDetailCnt", selectCollateralListDetail.size());
    		response = true;
    	}catch (Exception e) {
			System.out.println("err ==>" + e);
			response = false;
		}
    	
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
    
	// 담보 목록 Detail
    @ResponseBody
    @RequestMapping(value = "/es01_w06_collateralListDrillDown.do")
	public ResponseEntity<Map<String, Object>> es01_w06_collateralListDrillDown(@RequestBody Map<String, Object> param) throws Exception {
    	Map<String,Object> result = new HashMap<String, Object>();
    	Boolean response = false;
    	try {
    		JSONObject jsonObject = new JSONObject(param);
    		
    		Es01SearchEntity searchVO = new Es01SearchEntity();
    		
    		searchVO.setTargetSeq(jsonObject.get("seq").toString());
    		searchVO.setTargetYyyy(jsonObject.get("yyyy").toString());
    		
    		List<?> collateralListDrillDow = es01w06Service.selectCollateralListDrillDow(searchVO);
    		result.put("selectCollateralListDrillDow", collateralListDrillDow);
    		
    		response = true;
    	}catch (Exception e) {
			System.out.println("err ==>" + e);
			response = false;
		}
    	result.put("response", response);
    	return new ResponseEntity<Map<String,Object>>(result,HttpStatus.OK);
	}
	
}
