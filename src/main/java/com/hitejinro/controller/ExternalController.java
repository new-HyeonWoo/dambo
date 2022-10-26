package com.hitejinro.controller;

import com.hitejinro.common.constants.Constants;
import com.hitejinro.common.enums.ApprovalHistoryType;
import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.common.util.JsonUtil;
import com.hitejinro.configuration.component.EapComponent;
import com.hitejinro.configuration.component.NsdiComponent;
import com.hitejinro.dto.request.EzgenCommonRequest;
import com.hitejinro.dto.response.EapResponse;
import com.hitejinro.mapper.UserMapper;
import com.hitejinro.old.approval.model.ApprovalEntity;
import com.hitejinro.old.approval.service.ApprovalService;
import com.hitejinro.old.approval.web.ApprovalController;
import com.hitejinro.service.NsdiService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.SQLException;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

@RequestMapping("/external")
@RestController("ExternalController")
@RequiredArgsConstructor
public class ExternalController {
    private final EapComponent eapComponent;
    private final ApprovalService approvalService;

	private final NsdiService nsdiService;

	/**
	 * 히스토리 파악이 힘들어 전임 개발자가 작성해놓은 비즈니스 그대로사용
	 * {@link ApprovalController#sendApproval}
	 */
    @PostMapping(value = "/eap/popup", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResultResponse<EapResponse> popup(@RequestBody HashMap params) throws Exception {
		HashMap<String, String> header = (HashMap<String, String>) params.get("header");
		HashMap<String, String> parameter = (HashMap<String, String>) params.get("parameter");
		HashMap<String, String> preDatas = (HashMap<String, String>) params.get("preDatas");

		EapResponse eapResponse = eapComponent.getPopupUrl(params);

		ApprovalEntity appvalInfo = ApprovalEntity.builder()
			.apprslYear((String) params.get("apprslYear"))
			.apprslSn((String) params.get("apprslSn"))
			.hqBhfSeCd((String) params.get("hqBhfSeCd"))
			.sanctnSn((String) params.get("sanctnSn"))

			.trnscId(header.get("txID"))
			.intrfcId(header.get("reqID"))
			.requstSysId(header.get("userID"))
			.recptnSysId(header.get("systemID"))
			.requstDt(header.get("reqDt"))
			.sanctnFormatCd(header.get("formKey"))

			.docSj(parameter.get("subject"))
			.chargerEmpno(parameter.get("chgEmpNo"))
			.chargerDeptCd(parameter.get("chgDeptCode"))
			.drafterDeptCd(parameter.get("reqDeptCode"))
			.drafterEmpno(parameter.get("reqEmpNo"))

			.sanctnDocBdt(preDatas.get("html"))

			.succesAtcd(eapResponse.getHeader().getResDetailCode())
			.errorDetailDtls(eapResponse.getHeader().getResDetialMsg())
			.trnsmisSttus(eapResponse.getHeader().getResFlag())
			.rspnsDt(eapResponse.getHeader().getResDt())
			.sanctnDocUrl(eapResponse.getParameter().getUrl())
			.registEmplNo("108231")	//TODO: 세션처리 후 변경해야함.
			.registEmplIp(
					((ServletRequestAttributes)
							Objects.requireNonNull(
									RequestContextHolder.getRequestAttributes()))
							.getRequest().getRemoteAddr())
				.build();

		approvalService.insertHistory(appvalInfo, ApprovalHistoryType.NEW);
		approvalService.insertApprovalInfo(appvalInfo);

        return ResultResponse.ok(eapResponse);
    }

	/**
	 * 히스토리 파악이 힘들어 전임 개발자가 작성해놓은 비즈니스 그대로사용
	 * {@link ApprovalController#rcvApprovalStatus}
	 */
    @PostMapping(value = "/eap/approval", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public HashMap<String, Object> updateApproval(@RequestBody HashMap<String, HashMap> params) {
    	HashMap<String, Object> resultObject = new HashMap<>();

    	HashMap<String, String> headerObject = new HashMap<>();
        headerObject.put("resDt", LocalDateTime.now(Constants.GLOBAL_ZONE_ID).format(DateTimeFormatter.ofPattern("yyyyMMddHH24mm")));
    	try {
	    	HashMap<String, String> header = params.get("header");
			HashMap<String, String> parameter = params.get("parameter");
			HashMap preDatas = params.get("preDatas");

	    	String bhfLastSanctnerAt = parameter.get("docStatus").equals("50") ? "Y" : "N";
			ApprovalEntity approvalEntity = ApprovalEntity.builder()
					.trnscId(header.get("txID"))
					.intrfcId(header.get("reqID"))
					.requstSysId(header.get("userID"))
					.recptnSysId(header.get("systemID"))
					.requstDt(header.get("reqDt"))
					.bhfLastSanctnerAt(bhfLastSanctnerAt)
					.trnsmisSttus(parameter.get("docStatus"))
					.sanctnerEmpno(parameter.get("aprvEmpno"))
					.sanctnDt(parameter.get("aprvDt"))
					.sanctnDocUrl(parameter.get("url"))
					.sanctnSttus(parameter.get("docStatus"))
					.updtEmplNo(parameter.get("aprvEmpno"))
					.updtEmplIp(
							((ServletRequestAttributes)
									Objects.requireNonNull(
											RequestContextHolder.getRequestAttributes()))
									.getRequest().getRemoteAddr())
					.build();

			approvalService.insertHistory(approvalEntity, ApprovalHistoryType.UPDATE);
			int applyCnt = approvalService.updateApprovalInfo(approvalEntity);

	    	if(applyCnt > 0) {
	    		headerObject.put("resFlag", "S");
	    		headerObject.put("resDetailCode", "S00");
	    		headerObject.put("resDetialMsg", "");
	    	} else {
	    		headerObject.put("resFlag", "E");
	    		headerObject.put("resDetailCode", "E01");
	    		headerObject.put("resDetialMsg", "No Data Updated");
	    	}
    	} catch(SQLException e) {
    		headerObject.put("resFlag", "E");
    		headerObject.put("resDetailCode", "E01");
    		headerObject.put("resDetialMsg", e.getMessage());
    	} catch(IOException e) {
    		headerObject.put("resFlag", "E");
    		headerObject.put("resDetailCode", "E02");
    		headerObject.put("resDetialMsg", e.getMessage());
    	} catch(IllegalArgumentException e) {
    		headerObject.put("resFlag", "E");
    		headerObject.put("resDetailCode", "E04");
    		headerObject.put("resDetialMsg", e.getMessage());
    	} catch(ParseException e) {
    		headerObject.put("resFlag", "E");
    		headerObject.put("resDetailCode", "E05");
    		headerObject.put("resDetialMsg", e.getMessage());
    	} catch(Exception e) {
    		headerObject.put("resFlag", "E");
    		headerObject.put("resDetailCode", "E99");
    		headerObject.put("resDetialMsg", e.getMessage());
    	}

		resultObject.put("header", headerObject);

		System.out.println(JsonUtil.prettyPrint(resultObject));

		return resultObject;
    }

	@GetMapping(value = "/nsdi/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<HashMap> queryList(@ModelAttribute EzgenCommonRequest request,
																   @RequestParam HashMap<String, String> params) {
		return ResultResponse.ok(nsdiService.findQuery(params, request.getName()));
	}
}

@RequestMapping("/view/external")
@RequiredArgsConstructor
@Controller
class ExternalViewController {
	private final UserMapper userMapper;

	@RequestMapping("/eap")
	public String eap(@RequestParam HashMap<String, Object> params, RedirectAttributes redirectAttributes) throws UnsupportedEncodingException {
		String uEmpNo = String.valueOf(params.get("uEmpNo"));
		String wType = String.valueOf(params.get("wType"));

		HashMap<String, String> userMap = Objects.requireNonNull(userMapper.selectUser(uEmpNo), "존재하지 않은 사용자입니다.");

		redirectAttributes.addAttribute("uDept", URLEncoder.encode(String.valueOf(userMap.get("SMALLNAME")), "UTF-8"));
		redirectAttributes.addAttribute("uDeptCd", URLEncoder.encode(String.valueOf(userMap.get("BUSEO")), "UTF-8"));
		redirectAttributes.addAttribute("uName", URLEncoder.encode(String.valueOf(userMap.get("NAME")), "UTF-8"));
		redirectAttributes.addAttribute("uEmpNo", URLEncoder.encode(String.valueOf(userMap.get("SABUN")), "UTF-8"));
		redirectAttributes.addAttribute("uJikWi", URLEncoder.encode(String.valueOf(userMap.get("JIKWI")), "UTF-8"));
		redirectAttributes.addAttribute("uJikName", URLEncoder.encode(String.valueOf(userMap.get("JIKNAME")), "UTF-8"));
		redirectAttributes.addAllAttributes(params);

		String redirectUrl = StringUtils.join("/view/es81/", wType, ".do");
		return StringUtils.join("redirect:", redirectUrl);
	}
}