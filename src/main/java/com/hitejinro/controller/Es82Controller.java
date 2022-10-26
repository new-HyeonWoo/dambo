package com.hitejinro.controller;

import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.dto.request.EzgenCommonRequest;
import com.hitejinro.service.Es82Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * ES82 전감정사항 비교표
 */
@RequestMapping("/ezgen/es82")
@RestController("RenewEs82Controller")
@RequiredArgsConstructor
public class Es82Controller {
	private final Es82Service es82Service;

	@GetMapping(value = "/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> queryList(@ModelAttribute EzgenCommonRequest request,
															  @RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es82Service.query(params, request.getName()
						, CollateralType.valueOf(request.getType())));
	}
}

@RequestMapping("/view/es82")
@Controller("Es82ViewController")
class Es82ViewController {
	@RequestMapping(value = "/w01")
	public String w01(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("zoom", "Y");

		return "es82/es82_w01";
	}
}