package com.hitejinro.controller;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.dto.request.EzgenCommonRequest;
import com.hitejinro.service.Es81Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * ES81 감정서
 */
@RequestMapping("/ezgen/es81")
@RestController("RenewEs81Controller")
@RequiredArgsConstructor
public class Es81Controller {
	private final Es81Service es81Service;

	@GetMapping(value = "/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> queryList(@ModelAttribute EzgenCommonRequest request,
															  @RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es81Service.query(params, request.getName()
						, CollateralType.valueOf(request.getType())));
	}
}

@RequestMapping("/view/es81")
@Controller("RenewEs81ViewController")
class Es81ViewController {
	@RequestMapping(value = "/w02.do")
	public String w02() {
		return "es81/es81_w02";
	}

	@RequestMapping(value = "/w03.do")
	public String w03() {
		return "es81/es81_w03";
	}

	@RequestMapping(value = "/w04.do")
	public String w04() {
		return "es81/es81_w04";
	}
}