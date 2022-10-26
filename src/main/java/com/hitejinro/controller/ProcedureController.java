package com.hitejinro.controller;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.dto.request.EzgenCommonRequest;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.service.ProcedureService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * 공통 프로시저 호출 컨트롤러
 */
@RequestMapping("/ezgen/procedure")
@RestController("ProcedureController")
@RequiredArgsConstructor
public class ProcedureController {
	private final ProcedureService procedureService;

	@PostMapping(value = "/call", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<HashMap<String, Object>> callProcedure(@ModelAttribute EzgenCommonRequest request,
																 @RequestBody SaveRequest saveRequest) {
		procedureService.call(saveRequest.getParams(), request.getName(), CollateralKindType.valueOf(request.getType()));
		return ResultResponse.ok(saveRequest.getParams());
	}
}
