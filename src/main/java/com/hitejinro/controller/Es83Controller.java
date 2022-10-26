package com.hitejinro.controller;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.dto.request.EzgenCommonRequest;
import com.hitejinro.service.Es83Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * ES83 유입검토보고서
 */
@RequestMapping("/ezgen/es83")
@RestController("RenewEs83Controller")
@RequiredArgsConstructor
public class Es83Controller {
	private final Es83Service es83Service;

	@GetMapping(value = "/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> queryList(@ModelAttribute EzgenCommonRequest request,
                                                              @RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es83Service.query(params, request.getName()
						, CollateralType.valueOf(request.getType())));
	}
}

@RequestMapping("/view/es83")
@Controller("RenewEs83ViewController")
class Es83ViewController {
	@RequestMapping(value = "/w02.do")
	public String w02() {
		return "es83/es83_w02";
	}
	
	@RequestMapping(value = "/w03.do")
	public String w03() {
		return "es83/es83_w03";
	}
	
	@RequestMapping(value = "/w04.do")
	public String w04() {
		return "es83/es83_w04";
	}
}