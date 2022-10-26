package com.hitejinro.controller;

import com.hitejinro.common.enums.CollateralKindType;
import com.hitejinro.common.enums.CollateralType;
import com.hitejinro.common.http.ResultResponse;
import com.hitejinro.dto.request.EzgenCommonRequest;
import com.hitejinro.dto.request.SaveRequest;
import com.hitejinro.service.Es01ServiceFactory;
import com.hitejinro.service.popup.Es01PopupServiceFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * ES01 담보유형별 등록, 조회
 */
@RequestMapping("/ezgen/es01")
@RestController("RenewEs01Controller")
@RequiredArgsConstructor
public class Es01Controller {
	private final Es01ServiceFactory es01ServiceFactory;
	private final Es01PopupServiceFactory es01PopupServiceFactory;

	@GetMapping(value = "/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> queryList(@ModelAttribute EzgenCommonRequest request,
																   @RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es01ServiceFactory.getService(CollateralKindType.valueOf(request.getType()))
						.findQuery(params, request.getName()));
	}

	@PostMapping(value = "/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<Void> saveQuery(@ModelAttribute EzgenCommonRequest request,
										  @RequestBody SaveRequest saveRequest) {
		es01ServiceFactory.getService(CollateralKindType.valueOf(request.getType()))
				.saveQuery(saveRequest, request.getName());
		return ResultResponse.ok();
	}

	@GetMapping(value = "/popup/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<List<HashMap<String, Object>>> popupQueryList(@ModelAttribute EzgenCommonRequest request,
																		@RequestParam HashMap<String, Object> params) {
		return ResultResponse.ok(
				es01PopupServiceFactory.getService(CollateralType.valueOf(request.getType()))
						.findQuery(params, request.getName()));
	}

	@PostMapping(value = "/popup/query", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResultResponse<Void> popupSaveQuery(@ModelAttribute EzgenCommonRequest request,
										  @RequestBody SaveRequest saveRequest) {
		es01PopupServiceFactory.getService(CollateralType.valueOf(request.getType()))
				.saveQuery(saveRequest, request.getName());
		return ResultResponse.ok();
	}
}

@RequestMapping("/view/es01")
@Controller("RenewEs01ViewController")
class Es01ViewController {
//	/**
//	 * 의견보기
//	 */
//	@RequestMapping("/w02/p03")
//	public String w02p03(Model model, @RequestParam HashMap<String, Object> params) {
//		model.addAttribute("년도", params.get("yyyy"));
//		model.addAttribute("감정순번", params.get("seq"));
//
//		return "es01/es01_w02_p03";
//	}
//
	/**
	 * 공통보고서 입력
	 */
	@RequestMapping("/w02/p00")
	public String w02p00(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("일련번호", params.get("seq"));
		model.addAttribute("보고서구분", params.get("repo_div"));
//		model.addAttribute("제목", params.get("repo_title"));

		return "es01/es01_w02_p00";
	}

	/**
	 * 배당집계표
	 */
	@RequestMapping("/w02/p01")
	public String w02p01(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("년도"));
		model.addAttribute("일련번호", params.get("일련번호"));

		return "es01/es01_w02_p01";
	}

	/**
	 * 배당집계표_수정
	 */
	@RequestMapping("/w02/p02")
	public String w02p02(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("년도"));
		model.addAttribute("일련번호", params.get("일련번호"));
		model.addAttribute("isReadOnly", params.get("isReadOnly"));

		return "es01/es01_w02_p02";
	}

	/**
	 * 배당집계표
	 */
	@RequestMapping("/w03/p01")
	public String w03p01(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("년도"));
		model.addAttribute("일련번호", params.get("일련번호"));

		return "es01/es01_w03_p01";
	}

	/**
	 * 배당집계표_수정
	 */
	@RequestMapping("/w03/p02")
	public String w03p02(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("년도"));
		model.addAttribute("일련번호", params.get("일련번호"));
		model.addAttribute("isReadOnly", params.get("isReadOnly"));

		return "es01/es01_w03_p02";
	}

	/**
	 * 배당집계표
	 */
	@RequestMapping("/w04/p01")
	public String w04p01(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("년도"));
		model.addAttribute("일련번호", params.get("일련번호"));

		return "es01/es01_w04_p01";
	}

	/**
	 * 배당집계표_수정
	 */
	@RequestMapping("/w04/p02")
	public String w04p02(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("년도"));
		model.addAttribute("일련번호", params.get("일련번호"));
		model.addAttribute("isReadOnly", params.get("isReadOnly"));

		return "es01/es01_w04_p02";
	}

	/**
	 * 집합 아파트
	 */
	@RequestMapping("/w02")
	public String w02(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("_사원번호", params.get("uEmpNo"));
		model.addAttribute("_사원명", params.get("uName"));
		model.addAttribute("_부서코드", params.get("uDeptCd"));
		model.addAttribute("_부서명", params.get("uDept"));
		model.addAttribute("_직위", params.get("uJikWi"));
		model.addAttribute("_권한", params.get("auth"));
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("담보종류", params.get("sec_code"));
		model.addAttribute("결재진행현황", params.get("proc_div"));
		model.addAttribute("_재감정여부", params.get("sec_yn"));
		model.addAttribute("응찰_입력표활성여부", params.get("bid_use"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("사업부문", params.get("liquor_type"));

		return "es01/es01_w02";
	}

	/**
	 * 집합 연립 다세대
	 */
	@RequestMapping(value = "/w02/2")
	public String w02_2(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("_사원번호", params.get("uEmpNo"));
		model.addAttribute("_사원명", params.get("uName"));
		model.addAttribute("_부서코드", params.get("uDeptCd"));
		model.addAttribute("_부서명", params.get("uDept"));
		model.addAttribute("_직위", params.get("uJikWi"));
		model.addAttribute("_권한", params.get("auth"));
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("담보종류", params.get("sec_code"));
		model.addAttribute("결재진행현황", params.get("proc_div"));
		model.addAttribute("_재감정여부", params.get("sec_yn"));
		model.addAttribute("응찰_입력표활성여부", params.get("bid_use"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("사업부문", params.get("liquor_type"));

		return "es01/es01_w02_2";
	}

	/**
	 * 집합 상업용
	 */
	@RequestMapping(value = "/w02/3")
	public String w02_3(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("_사원번호", params.get("uEmpNo"));
		model.addAttribute("_사원명", params.get("uName"));
		model.addAttribute("_부서코드", params.get("uDeptCd"));
		model.addAttribute("_부서명", params.get("uDept"));
		model.addAttribute("_직위", params.get("uJikWi"));
		model.addAttribute("_권한", params.get("auth"));
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("담보종류", params.get("sec_code"));
		model.addAttribute("결재진행현황", params.get("proc_div"));
		model.addAttribute("_재감정여부", params.get("sec_yn"));
		model.addAttribute("응찰_입력표활성여부", params.get("bid_use"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("사업부문", params.get("liquor_type"));

		return "es01/es01_w02_3";
	}

	/**
	 * 집합 오피스텔
	 */
	@RequestMapping("/w02/4")
	public String w02_4(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("_사원번호", params.get("uEmpNo"));
		model.addAttribute("_사원명", params.get("uName"));
		model.addAttribute("_부서코드", params.get("uDeptCd"));
		model.addAttribute("_부서명", params.get("uDept"));
		model.addAttribute("_직위", params.get("uJikWi"));
		model.addAttribute("_권한", params.get("auth"));
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("담보종류", params.get("sec_code"));
		model.addAttribute("결재진행현황", params.get("proc_div"));
		model.addAttribute("_재감정여부", params.get("sec_yn"));
		model.addAttribute("응찰_입력표활성여부", params.get("bid_use"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("사업부문", params.get("liquor_type"));

		return "es01/es01_w02_4";
	}


	/**
	 * 거래처 검색 (집합 아파트)
	 */
	@RequestMapping(value = "/w02/account")
	public String w02Account() {
		return "es01/es01_w02_account";
	}

	/**
	 * 감정요청자료_영업 검색 (집합 상업용)
	 */
	@RequestMapping(value = "/w02/appraisal")
	public String w02Appraisal() {
		return "es01/es01_w02_appraisal";
	}

	/**
	 * 거래처 검색 (집합 연립다세대)
	 */
	@RequestMapping(value = "/w02/2/account")
	public String w022Account() {
		return "es01/es01_w02_2_account";
	}

	/**
	 * 감정요청자료_영업 검색 (집합 연립다세대)
	 */
	@RequestMapping(value = "/w02/2/appraisal")
	public String w022Appraisal() {
		return "es01/es01_w02_2_appraisal";
	}

	/**
	 * 거래처 검색 (집합 상업용)
	 */
	@RequestMapping(value = "/w02/3/account")
	public String w023Account() {
		return "es01/es01_w02_3_account";
	}

	/**
	 * 감정요청자료_영업 검색 (집합 상업용)
	 */
	@RequestMapping(value = "/w02/3/appraisal")
	public String w023Appraisal() {
		return "es01/es01_w02_3_appraisal";
	}

	/**
	 * 거래처 검색 (집합 오피스텔)
	 */
	@RequestMapping(value = "/w02/4/account")
	public String w024Account() {
		return "es01/es01_w02_4_account";
	}

	/**
	 * 감정요청자료_영업 검색 (집합 오피스텔)
	 */
	@RequestMapping(value = "/w02/4/appraisal")
	public String w024Appraisal() {
		return "es01/es01_w02_4_appraisal";
	}

	/**
	 * 의견보기 > 공통보고서 입력
	 */
	@RequestMapping(value = "/w02/p03")
	public String p03(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("일련번호", params.get("seq"));

		return "es01/es01_w02_p03";
	}

	@RequestMapping(value = "/w02/p03/preview")
	public String p03Preview() {
		return "es01/es01_w02_p03_preview";
	}

	/**
	 * 토건 주거용
	 */
	@RequestMapping(value = "/w03")
	public String w03(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("_사원번호", params.get("uEmpNo"));
		model.addAttribute("_사원명", params.get("uName"));
		model.addAttribute("_부서코드", params.get("uDeptCd"));
		model.addAttribute("_부서명", params.get("uDept"));
		model.addAttribute("_직위", params.get("uJikWi"));
		model.addAttribute("_권한", params.get("auth"));
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("담보종류", params.get("sec_code"));
		model.addAttribute("결재진행현황", params.get("proc_div"));
		model.addAttribute("_재감정여부", params.get("sec_yn"));
		model.addAttribute("응찰_입력표활성여부", params.get("bid_use"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("사업부문", params.get("liquor_type"));

		return "es01/es01_w03";
	}

	/**
	 * 거래처 검색 (토건 주거)
	 */
	@RequestMapping(value = "/w03/account")
	public String w03Account() {
		return "es01/es01_w03_account";
	}

	/**
	 * 감정요청자료_영업 검색 (토건 주거)
	 */
	@RequestMapping(value = "/w03/appraisal")
	public String w03Appraisal() {
		return "es01/es01_w03_appraisal";
	}

	/**
	 * 토건 상업용
	 */
	@RequestMapping(value = "/w03/1")
	public String w03_1(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("_사원번호", params.get("uEmpNo"));
		model.addAttribute("_사원명", params.get("uName"));
		model.addAttribute("_부서코드", params.get("uDeptCd"));
		model.addAttribute("_부서명", params.get("uDept"));
		model.addAttribute("_직위", params.get("uJikWi"));
		model.addAttribute("_권한", params.get("auth"));
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("담보종류", params.get("sec_code"));
		model.addAttribute("결재진행현황", params.get("proc_div"));
		model.addAttribute("_재감정여부", params.get("sec_yn"));
		model.addAttribute("응찰_입력표활성여부", params.get("bid_use"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("사업부문", params.get("liquor_type"));

		return "es01/es01_w03_1";
	}

	/**
	 * 거래처 검색 (토건 상업)
	 */
	@RequestMapping(value = "/w03/1/account")
	public String w031Account() {
		return "es01/es01_w03_1_account";
	}

	/**
	 * 감정요청자료_영업 검색 (토건 상업)
	 */
	@RequestMapping(value = "/w03/1/appraisal")
	public String w031Appraisal() {
		return "es01/es01_w03_1_appraisal";
	}

	/**
	 * 토지
	 */
	@RequestMapping(value = "/w04")
	public String w04(Model model, @RequestParam HashMap<String, Object> params) {
		model.addAttribute("_사원번호", params.get("uEmpNo"));
		model.addAttribute("_사원명", params.get("uName"));
		model.addAttribute("_부서코드", params.get("uDeptCd"));
		model.addAttribute("_부서명", params.get("uDept"));
		model.addAttribute("_직위", params.get("uJikWi"));
		model.addAttribute("_권한", params.get("auth"));
		model.addAttribute("년도", params.get("yyyy"));
		model.addAttribute("감정순번", params.get("seq"));
		model.addAttribute("담보종류", params.get("sec_code"));
		model.addAttribute("결재진행현황", params.get("proc_div"));
		model.addAttribute("_재감정여부", params.get("sec_yn"));
		model.addAttribute("응찰_입력표활성여부", params.get("bid_use"));
		model.addAttribute("_이전년도", params.get("pre_yyyy"));
		model.addAttribute("_이전담보순번", params.get("pre_seq"));
		model.addAttribute("사업부문", params.get("liquor_type"));

		return "es01/es01_w04";
	}

	/**
	 * 거래처 검색 (토지)
	 */
	@RequestMapping(value = "/w04/account")
	public String w04Account() {
		return "es01/es01_w04_account";
	}

	/**
	 * 감정요청자료_영업 검색 (토지)
	 */
	@RequestMapping(value = "/w04/appraisal")
	public String w04Appraisal() {
		return "es01/es01_w04_appraisal";
	}
}
