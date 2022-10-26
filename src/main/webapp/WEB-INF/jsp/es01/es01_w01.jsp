<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
  /**
  * @Class Name : egovSampleList.jsp
  * @Description : Sample List 화면
  * @Modification Information
  *
  *   수정일         수정자                   수정내용
  *  -------    --------    ---------------------------
  *  2009.02.01            최초 생성
  *
  * author 실행환경 개발팀
  * since 2009.02.01
  *
  * Copyright (C) 2009 by MOPAS  All right reserved.
  */
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
	<script type="text/javascript">
		$(document).ready(function(){
			if (!sessionStorage.hasOwnProperty('userEmpNo')
					|| sessionStorage.getItem('userEmpNo') != '<%=(String)session.getAttribute("userEmpNo")%>') {
				sessionStorage.setItem("userEmpNo", '<%=(String)session.getAttribute("userEmpNo")%>');
				sessionStorage.setItem("userName", '<%=(String)session.getAttribute("userName")%>');
				sessionStorage.setItem("userDeptCd", '<%=(String)session.getAttribute("userDeptCd")%>');
				sessionStorage.setItem("userDept", '<%=(String)session.getAttribute("userDept")%>');
				sessionStorage.setItem("userJikWi", '<%=(String)session.getAttribute("userJikWi")%>');
				sessionStorage.setItem("userJikName", '<%=(String)session.getAttribute("userJikName")%>');
			}
		});
	</script>

    <script type="text/javaScript" language="javascript" defer="defer">
		function getUrlParameter(sParam) {
			let sPageURL = window.location.search.substring(1),
					sURLVariables = sPageURL.split('&'),
					sParameterName,
					i;

			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
				}
			}
			return false;
		}


		function sendPagePopup( dataForm, uri, target, sizeX, sizeY, scroll ){
			var intLeftPos = (screen.width  - eval(sizeX)) / 2;
		    var intTopPos  = (screen.height - eval(sizeY)) / 2 - 20;
		    var obj = window.open("", target, 'toolbar=no,location=no,status=yes,resizable=no,scrollbars='+scroll+',width='+sizeX+',height='+sizeY+',left='+intLeftPos+',top='+intTopPos);
		
		    dataForm.action = uri;
			dataForm.target = target;
		    dataForm.submit();
		    dataForm.target = '';
		}

        $('#button1').hide();
        
        function fn_Search_Button(){
			document.listForm.action = "<c:url value='/es01/es01_w01.do'/>";
           	document.listForm.submit();
        }
        
        function fn_Search_New(){
        	var form=document.listForm;
        	var url;
        	var sizeX="500";
        	var sizeY="400";
        	var scroll="AUTO";
        	var target='appnew';
        	url ="<c:url value='/es01/es01_w01_new.do'/>";
    		sendPagePopup(form, url, target, sizeX, sizeY, scroll )
        }

		function makeDetailUrl(_년도, _담보순번, _담보종류, _사업부문, _결재진행현황, _권한, _응찰입력표사용여부, _이전년도, _이전담보순번, _부서명, _부서코드, _사원명, _사원번호, _직위, _직급) {
			if (_응찰입력표사용여부 == '') {
				_응찰입력표사용여부 = 'N'
			}

			if (_담보종류 === '105') {
				return '/view/es01/w02/4'
						+ "?yyyy="+ _년도
						+ "&seq="+ _담보순번
						+ "&sec_code="+ _담보종류
						+ "&liquor_type="+ _사업부문
						+ "&proc_div="+ _결재진행현황
						+ "&auth="+ _권한
						+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
						+ "&pre_yyyy="+ _이전년도
						+ "&pre_seq="+ _이전담보순번
						+ "&uDept="+ _부서명
						+ "&uDeptCd="+ _부서코드
						+ "&uName="+ _사원명
						+ "&uEmpNo="+ _사원번호
						+ "&uJikWi="+ _직위
						+ "&uJikName="+ _직급
			} else if (_담보종류 === '104') {
				return '/view/es01/w02/3'
						+ "?yyyy="+ _년도
						+ "&seq="+ _담보순번
						+ "&sec_code="+ _담보종류
						+ "&liquor_type="+ _사업부문
						+ "&proc_div="+ _결재진행현황
						+ "&auth="+ _권한
						+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
						+ "&pre_yyyy="+ _이전년도
						+ "&pre_seq="+ _이전담보순번
						+ "&uDept="+ _부서명
						+ "&uDeptCd="+ _부서코드
						+ "&uName="+ _사원명
						+ "&uEmpNo="+ _사원번호
						+ "&uJikWi="+ _직위
						+ "&uJikName="+ _직급
			} else if (_담보종류 === '102') {
				return '/view/es01/w02/2'
						+ "?yyyy="+ _년도
						+ "&seq="+ _담보순번
						+ "&sec_code="+ _담보종류
						+ "&liquor_type="+ _사업부문
						+ "&proc_div="+ _결재진행현황
						+ "&auth="+ _권한
						+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
						+ "&pre_yyyy="+ _이전년도
						+ "&pre_seq="+ _이전담보순번
						+ "&uDept="+ _부서명
						+ "&uDeptCd="+ _부서코드
						+ "&uName="+ _사원명
						+ "&uEmpNo="+ _사원번호
						+ "&uJikWi="+ _직위
						+ "&uJikName="+ _직급
			} else if (_담보종류 === '101') {
				return '/view/es01/w02'
						+ "?yyyy="+ _년도
						+ "&seq="+ _담보순번
						+ "&sec_code="+ _담보종류
						+ "&liquor_type="+ _사업부문
						+ "&proc_div="+ _결재진행현황
						+ "&auth="+ _권한
						+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
						+ "&pre_yyyy="+ _이전년도
						+ "&pre_seq="+ _이전담보순번
						+ "&uDept="+ _부서명
						+ "&uDeptCd="+ _부서코드
						+ "&uName="+ _사원명
						+ "&uEmpNo="+ _사원번호
						+ "&uJikWi="+ _직위
						+ "&uJikName="+ _직급
			} else if (_담보종류 === '401') {
				return '/view/es01/w03'
						+ "?yyyy="+ _년도
						+ "&seq="+ _담보순번
						+ "&sec_code="+ _담보종류
						+ "&liquor_type="+ _사업부문
						+ "&proc_div="+ _결재진행현황
						+ "&auth="+ _권한
						+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
						+ "&pre_yyyy="+ _이전년도
						+ "&pre_seq="+ _이전담보순번
						+ "&uDept="+ _부서명
						+ "&uDeptCd="+ _부서코드
						+ "&uName="+ _사원명
						+ "&uEmpNo="+ _사원번호
						+ "&uJikWi="+ _직위
						+ "&uJikName="+ _직급
			}  else if (_담보종류 === '402') {
				return '/view/es01/w03/1'
						+ "?yyyy="+ _년도
						+ "&seq="+ _담보순번
						+ "&sec_code="+ _담보종류
						+ "&liquor_type="+ _사업부문
						+ "&proc_div="+ _결재진행현황
						+ "&auth="+ _권한
						+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
						+ "&pre_yyyy="+ _이전년도
						+ "&pre_seq="+ _이전담보순번
						+ "&uDept="+ _부서명
						+ "&uDeptCd="+ _부서코드
						+ "&uName="+ _사원명
						+ "&uEmpNo="+ _사원번호
						+ "&uJikWi="+ _직위
						+ "&uJikName="+ _직급
			}  else if (_담보종류 === '501') {
				return '/view/es01/w04'
						+ "?yyyy="+ _년도
						+ "&seq="+ _담보순번
						+ "&sec_code="+ _담보종류
						+ "&liquor_type="+ _사업부문
						+ "&proc_div="+ _결재진행현황
						+ "&auth="+ _권한
						+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
						+ "&pre_yyyy="+ _이전년도
						+ "&pre_seq="+ _이전담보순번
						+ "&uDept="+ _부서명
						+ "&uDeptCd="+ _부서코드
						+ "&uName="+ _사원명
						+ "&uEmpNo="+ _사원번호
						+ "&uJikWi="+ _직위
						+ "&uJikName="+ _직급
			} else {
				return "";
			}
		}

        function fn_detail_page(yyyy,seq,secCode,docKey,procDiv,liquorType, preYyyy, preSeq, bidUseYN){
        	let form=document.listForm;
        	let url;
        	let target=seq;
        	let sizeX="800";
        	let sizeY="1000";
        	let scroll="AUTO";

        	form.searchYyyy.value=yyyy;
        	form.searchSeq.value=seq;
        	form.docKey.value=docKey;
        	form.secCode.value=secCode;

			let _부서명 = sessionStorage.getItem("userDept");
			let _부서 = sessionStorage.getItem("userDeptCd");
			let _관리부서 = sessionStorage.getItem("userDeptCd");
			let _사원명 = sessionStorage.getItem("userName");
			let _사원번호 = sessionStorage.getItem("userEmpNo");
			let _직위 = sessionStorage.getItem("userJikName");
			let _직급 = sessionStorage.getItem("userJikWi");

			let auth = 'R';
			if (procDiv === "11" || procDiv === "21") {
				auth = 'W';
			}

			window.open(makeDetailUrl(yyyy, seq, secCode, liquorType, procDiv, auth, bidUseYN, preYyyy, preSeq, _부서명, _부서, _사원명, _사원번호, _직위, _직급));
        }

		function fn_tr_activate(id){
			var classListBoolen = document.getElementById(id).classList.value.indexOf('table-active') == -1 ? true : false;

			for(let i =0; i < document.getElementById('dataTable_tobody').children.length; i++){
				document.getElementById('dataTable_tobody').children[i].classList.remove('table-active');
			}

			if(classListBoolen){
				document.getElementById(id).classList.add('table-active');
			}
		};

		function fn_reassessment_Button(){
			let reassessment_id = '';
			let reassessment_boolean = false;
			for(let i =0; i < document.getElementById('dataTable_tobody').children.length; i++){
				if(document.getElementById('dataTable_tobody').children[i].classList.contains('table-active') == true){
					reassessment_id = document.getElementById('dataTable_tobody').children[i].id;
					reassessment_boolean = true;
					break;
				}
			}

			if(reassessment_boolean == false){
				alert('재감정할 자료를 선택하세요');
				return;
			}

			const reassessment_secCode = document.getElementById(reassessment_id+'_secCode').value;
			const reassessment_yyyy = document.getElementById(reassessment_id+'_yyyy').value;
			const reassessment_seq = document.getElementById(reassessment_id+'_seq').value;
			const reassessment_procDiv = document.getElementById(reassessment_id+'_procDiv').value;
			const reassessment_bidUseYn = document.getElementById(reassessment_id+'_bidUseYn').value;
			const reassessment_docKey = document.getElementById(reassessment_id+'_docKey').value;
			const reassessment_liquorType = document.getElementById(reassessment_id+'_liquorType').value;
			const reassessment_preYyyy = document.getElementById(reassessment_id+'_preYyyy').value;
			const reassessment_preSeq = document.getElementById(reassessment_id+'_preSeq').value;

			if(reassessment_procDiv == '29'){
				alert('[검증완료]된 자료만 재감정이 가능합니다');
				return;
			}	

			let newSeq = '';

			let param ={
				"seq": reassessment_seq,
				"yyyy": reassessment_yyyy,
			};
			$.ajax({
				type: "POST",
				contentType:'application/json',
				data: JSON.stringify(param),
				url: "/es01/es01_w01_reassessment_number.do",
				success: function(json) {
					if(json.response == true){
						newSeq = json.reassessmentNumber;
						return fn_detail_page(reassessment_yyyy, newSeq, reassessment_secCode, reassessment_docKey, reassessment_procDiv, reassessment_liquorType, reassessment_preYyyy, reassessment_preSeq, reassessment_bidUseYn);
					}else{
						return alert('재감정순번을 생성하지 못했습니다.');
					}
				}
			});

		}

        // row click event
        $(document).ready(function(){
			var startDt = (document.getElementById('startDt').value).toString();
			var endDt = (document.getElementById('endDt').value).toString();
			document.getElementById('start_datePicekr').value = startDt.substr(0,4) +'-'+ startDt.substr(4,2) +'-'+ startDt.substr(6);
			document.getElementById('end_datePicekr').value = endDt.substr(0,4) +'-'+ endDt.substr(4,2) +'-'+ endDt.substr(6);

	     	}
       );
    </script>
</head>

<body>
<form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
	<input type="hidden" name="selectedId" />
    <input type="hidden" name="searchYyyy" value="" />
    <input type="hidden" name="searchSeq" value="" />
    <input type="hidden" name="docKey" value="" />
    <input type="hidden" name="secCode" value="" />
    <form:input type="hidden" path="menu_id" id="menu_id" value="${menu_id}"/>
	<form:input type="hidden" path="startDt" id="startDt" value="${startDt}"/>
	<form:input type="hidden" path="endDt" id="endDt" value="${endDt}"/>
    
	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<div class="toolbar" id="kt_toolbar">
			<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
				<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
					<h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">지점감정현황</h1>
					<span class="h-20px border-gray-300 border-start mx-4"></span>
					<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
						<li class="breadcrumb-item text-muted">지점담보</li>
						<li class="breadcrumb-item">
							<span class="bullet bg-gray-300 w-5px h-2px"></span>
						</li>
						<li class="breadcrumb-item text-dark">지점감정현황</li>
					</ul>
				</div>
				<div class="d-flex align-items-center gap-2 gap-lg-3">
					<a href="javascript:fn_Search_Button();" class="btn btn-sm btn-flex btn-jinro btn-active-jinro fw-bolder">
						<i class="fas fa-search"></i>
						조회
					</a>
					<a href="javascript:fn_Search_New();" class="btn btn-sm btn-flex btn-jinro btn-active-jinro fw-bolder">
						<i class="fas fa-file-alt"></i>
						신규
					</a>
					<a href="javascript:fn_reassessment_Button();" class="btn btn-sm btn-flex btn-jinro btn-active-jinro fw-bolder">
						<i class="fas fa-sync-alt"></i>
						재감정
					</a>
				</div>
			</div>
		</div>
		<div class="d-flex flex-column-fluid">
			<div id="kt_content_container" class="container-fluid">
				<div class="row gy-5">
					<div class="col-xxl-12 mb-1">
						<div class="card card-jinro card-rounded-custom">
							<div class="card-body py-3">
								<div class="row">
									<div class="col-3">
										<div class="row">
											<div class="col-3">
												<div class="text-primary fs-7 text-nowrap">부서</div>
											</div>
											<div class="col-9">
												<form:select path="jumCode" class="form-select form-select-transparent fs-7 py-0 text-white min-w-100">
													<c:forEach var="buseo" items="${buseoList}" varStatus="status">
														<form:option value='${buseo.buseo}' label='${buseo.buseoName}'/>
													</c:forEach>
												</form:select>
											</div>
										</div>
									</div>
									<div class="col-3">
										<div class="row">
											<div class="col-3">
												<div class="text-primary fs-7 text-nowrap">담보종류</div>
											</div>
											<div class="col-9">
												<form:select path="searchSecCode" class="form-select form-select-transparent fs-7 py-0 text-white min-w-100">
													<c:forEach var="dambo" items="${damboList}" varStatus="status">
														<form:option value='${dambo.cdCode}' label='${dambo.cdDesc}'/>
													</c:forEach>
												</form:select>
											</div>
										</div>
									</div>
									<div class="col-3">
										<div class="row">
											<div class="col-3">
												<div class="text-primary fs-7 text-nowrap">담보감정일자</div>
											</div>
											<div class="col-9">
												<div class="row">
													<div class="col-5">
														<input type="text" class="form-control form-control-transparent py-0 px-2 text-center text-white fs-7 min-w-100" placeholder="기간을 선택하세요" id="start_datePicekr" />
													</div>
													<div class="col-2">
														<div class="text-center">
															<span class="text-white">~</span>
														</div>
													</div>
													<div class="col-5">
														<input type="text" class="form-control form-control-transparent py-0 px-2 text-center text-white fs-7 min-w-100"  placeholder="기간을 선택하세요" id="end_datePicekr"  />	
													</div>	
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="mt-3"></div>
								<div class="row">
									<div class="col-3">
										<div class="row">
											<div class="col-3">
												<div class="text-primary fs-7 text-nowrap">결재진행현황</div>
											</div>
											<div class="col-9">
												<form:select path="procDiv" class="form-select form-select-transparent fs-7 py-0 text-white min-w-100">
													<c:forEach var="procList" items="${procList}" varStatus="status">
														<form:option value='${procList.cdCode}' label='${procList.cdDesc}'/>
													</c:forEach>
												</form:select>
											</div>
										</div>
									</div>
									<div class="col-3">
										<div class="row">
											<div class="col-3">
												<div class="text-primary fs-7 text-nowrap">거래처명</div>
											</div>
											<div class="col-9">
												<form:input path="sangho" value="" class="form-control form-control-transparent fs-7 lh-1 text-white fw-bolder py-0 min-w-100" placeholder="검색어를 입력하세요"/>
											</div>
										</div>
									</div>
									<div class="col-3">
										<div class="row">
											<div class="col-3">
												<div class="text-primary fs-7 text-nowrap">업소명</div>
											</div>
											<div class="col-9">
												<form:input path="marketName" value="" class="form-control form-control-transparent fs-7 lh-1 text-white fw-bolder py-0 min-w-100" placeholder="검색어를 입력하세요"/>
											</div>
										</div>
									</div>
									<div class="col-3">
										<div class="row">
											<div class="col-3">
												<div class="text-primary fs-7 text-nowrap">소재지</div>
											</div>
											<div class="col-9">
												<form:input path="searchJuso" value="" class="form-control form-control-transparent fs-7 text-white fw-bolder py-0 min-w-100" placeholder="검색어를 입력하세요"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- table -->
					<div class="col-xxl-12">
						<div class="card">
							<div class="card-body">
								<table id="dataTable" class="table table-hover table-row-bordered gy-5 gs-7 text-center">
									<thead class="bg-secondary">
										<tr class="fw-bolder fs-6 text-gray-800  text-muted">
											<th class="min-w-70px">No</th>
											<th class="min-w-100px">감정일자</th>
											<th class="min-w-100px">지점명</th>
											<th class="min-w-100px">감정진행현황</th>
											<th class="min-w-150px">담보종류</th>
											<th class="min-w-100px">사업부분</th>
											<th class="min-w-100px">거래처명</th>
											<th class="min-w-150px">업소명</th>
											<th class="min-w-100px">소재지</th>
											<th class="min-w-100px">토지(평)</th>
											<th class="min-w-100px">건물(평)</th>
											<th class="min-w-100px">평가가격</th>
											<th class="min-w-100px">최종평가가격</th>
											<th class="min-w-100px">낙찰가율(%)</th>
											<th class="min-w-100px">예상낙찰가</th>
											<th class="min-w-100px">선순위채권액</th>
											<th class="min-w-100px">담보여력</th>
											<th class="min-w-100px">초과부족금액</th>
											<th class="min-w-100px">초과부족</th>
											<th class="min-w-100px">감정구분</th>
											<th class="min-w-100px">평가구분</th>
											<th class="min-w-100px">응찰여부</th>
											<th class="min-w-100px">감정번호</th>
										</tr>
									</thead>
									<tbody class="fs-7" id="dataTable_tobody" class="text-center text-nowrap">
						        		<c:forEach var="result" items="${sampleList}" varStatus="status">
					            			<tr id='${result.seq}' onclick="fn_tr_activate(`${result.seq}`)" ondblclick="fn_detail_page('${result.yyyy}','${result.seq}','${result.secCode}','${result.docKey}','${result.procDiv}','${result.liquorType}','${result.preYyyy}','${result.preSeq}', '${result.bidUseYn}')" >
					            				<input id="${result.seq}_secCode" type="hidden" value="${result.secCode}">
												<input id="${result.seq}_yyyy" type="hidden" value="${result.yyyy}">
												<input id="${result.seq}_seq" type="hidden" value="${result.seq}">
												<input id="${result.seq}_procDiv" type="hidden" value="${result.procDiv}">
												<input id="${result.seq}_bidUseYn" type="hidden" value="${result.bidUseYn}">
					            				<input id="${result.seq}_docKey" type="hidden" value="${result.docKey}">
												<input id="${result.seq}_liquorType" type="hidden" value="${result.liquorType}">
												<input id="${result.seq}_preYyyy" type="hidden" value="${result.preYyyy}">
												<input id="${result.seq}_preSeq" type="hidden" value="${result.preSeq}">

												<td class="text-center text-nowrap"><c:out value="${status.count}"/></td>
					            				<td class="text-center text-nowrap">${fn:substring(result.estiDate,0,4)}-${fn:substring(result.estiDate,4,6)}-${fn:substring(result.estiDate,6,8)}</td>
					            				<td class="text-center text-nowrap"><c:out value="${result.smallname}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.procName}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.secName}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.liquorTypeNm}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.sangho}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.marketName}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.juso1}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.lSizePy}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.bSizePy}"/></td>
					            				<td class="text-center text-nowrap"><fmt:formatNumber value="${result.increaseAmt}" pattern="#,###" /></td>
					            				<td class="text-center text-nowrap"><fmt:formatNumber value="${result.plminBidAmt}" pattern="#,###" /></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.applRate}"/></td>
					            				<td class="text-center text-nowrap"><fmt:formatNumber value="${result.plBidAmt}"  pattern="#,###" /></td>
					            				<td class="text-center text-nowrap"><fmt:formatNumber value="${result.preBondAmt}"  pattern="#,###" /></td> 
					            				<td class="text-center text-nowrap"><fmt:formatNumber value="${result.spareSecAmt}"  pattern="#,###" /></td>
					            				<td class="text-center text-nowrap"><fmt:formatNumber value="${result.exceedAmt}"  pattern="#,###" /></td> 
					            				<td class="text-center text-nowrap"><c:out value="${result.exceedYnDesc}"/></td>
					            				<td class="text-center text-nowrap">${result.esDiv}</td>
					            				<td class="text-center text-nowrap"><c:out value="${result.appraiseGuName}"/></td>
					            				<td class="text-center text-nowrap">${result.bidUseYn}</td>
					            				<td class="text-center text-nowrap"><c:out value="${result.seq}"/></td>
					            				<input type=hidden name='buckupYn${status.count}' id='buckupYn${status.count}' value="${result.backupYn}" />
					            			</tr>
					        			</c:forEach>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</form:form>

<script type="text/javascript" src="<c:url value='/resources/js/util/datePicker.js'/>"></script>
</body>
</html>
