package com.hitejinro.controller;

import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.dto.request.EzgenCommonRequest;
import com.hitejinro.service.Es03W01Service;
import com.hitejinro.service.Es03W02Service;
import com.hitejinro.service.Es03W03Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * ES03 통계정보
 */
@RequestMapping("/ezgen/es03")
@RestController("RenewEs03Controller")
@RequiredArgsConstructor
public class Es03Controller {
	private final Es03W01Service es03W01Service;
	private final Es03W02Service es03W02Service;
	private final Es03W03Service es03W03Service;

	@GetMapping(value = "/w01/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> w01QueryList(@ModelAttribute EzgenCommonRequest request,
																   @RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es03W01Service.findQuery(params, request.getName()));
	}

	@GetMapping(value = "/w02/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> w02QueryList(@ModelAttribute EzgenCommonRequest request,
																   @RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es03W02Service.findQuery(params, request.getName()));
	}

	@GetMapping(value = "/w03/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> w03QueryList(@ModelAttribute EzgenCommonRequest request,
																   @RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es03W03Service.findQuery(params, request.getName()));
	}
}

@RequestMapping("/es03")
@Controller("RenewEs03ViewController")
class Es03ViewController {

	@RequestMapping("/es03_w01.do")
	public String w01(Model model, @RequestParam HashMap<String, Object> params) {
		return "es03/es03_w01"; //TODO
	}

	@RequestMapping("/account.do")
	public String w01_account(Model model, @RequestParam HashMap<String, Object> params) {
		return "es03/es03_account"; //TODO
	}

	@RequestMapping("/es03_w02.do")
	public String w03(Model model, @RequestParam HashMap<String, Object> params) {
		return  "es03/es03_w02"; //TODO
	}

	@RequestMapping("/es03_w03.do")
	public String w02(Model model, @RequestParam HashMap<String, Object> params) {
		return  "es03/es03_w03"; //TODO
	}

}
