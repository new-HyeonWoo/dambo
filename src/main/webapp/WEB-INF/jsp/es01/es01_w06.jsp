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
    <script type="text/javaScript" language="javascript" defer="defer">
		function fn_Search_Button(){
			document.listForm.action = "<c:url value='/es01/es01_w06.do'/>";
			document.listForm.submit();
		}

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
	<form:input type="hidden" path="menu_id" id="menu_id" value="${menu_id}"/>
	<form:input type="hidden" path="startDt" id="startDt" value="${startDt}"/>
	<form:input type="hidden" path="endDt" id="endDt" value="${endDt}"/>

	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<div class="toolbar" id="kt_toolbar">
			<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
				<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
					<h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">감정진행조회</h1>
					<span class="h-20px border-gray-300 border-start mx-4"></span>
					<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
						<li class="breadcrumb-item text-muted"><c:if test = "${menu_id eq 912}">지점담보</c:if><c:if test = "${menu_id eq 922}">관재파트</c:if></li>
						<li class="breadcrumb-item">
							<span class="bullet bg-gray-300 w-5px h-2px"></span>
						</li>
						<li class="breadcrumb-item text-dark">감정진행조회</li>
					</ul>
				</div>
				<div class="d-flex align-items-center gap-2 gap-lg-3">
					<a href="javascript:fn_Search_Button();" class="btn btn-sm btn-flex btn-jinro btn-active-jinro fw-bolder">
						<i class="fas fa-search"></i>
						조회
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
														<input type="text" class="form-control form-control-transparent py-0 px-2 text-center text-white fs-7 min-w-100"  placeholder="기간을 선택하세요" id="end_datePicekr" />
													</div>	
												</div>
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
									<table id="dataTable" class="table table-hover table-row-bordered gy-5 gs-7 text-center table-hover">
										<thead class="bg-secondary">
											<tr class="fw-bolder fs-6 text-gray-800  text-muted">
												<th class="min-w-70px">No</th>
												<th class="min-w-100px">지점명</th>
												<th class="min-w-100px">감정일자</th>
												<th class="min-w-150px">담보종류</th>
												<th class="min-w-100px">사업부문</th>
												<th class="min-w-100px">거래처명</th>
												<th class="min-w-150px">업소명</th>
												<th class="min-w-100px">감정구분</th>
												<th class="min-w-100px">감정진행현황</th>
												<th class="min-w-100px">결재자 성명</th>
												<th class="min-w-100px">결재일자</th>
												<th class="min-w-100px">토지(평)</th>
												<th class="min-w-100px">건물(평)</th>
												<th class="min-w-100px">시가</th>
												<th class="min-w-150px">예상1차최초입찰가</th>
												<th class="min-w-100px">예상낙찰가</th>
											</tr>
										</thead>
										<tbody id="dataInfo_tobody" class="text-nowrap fs-7">
											<c:forEach var="selectCollateralList" items="${selectCollateralList}" varStatus="status">
												<tr id = "dataInfo${status.count}" <c:if test="${selectCollateralList.cnt ne 0}">class="background-color-gray"</c:if> onclick="javascript:fn_dataTable_drillDown('${selectCollateralList.yyyy}', '${selectCollateralList.seq}')">
													<td>
														<c:if test="${selectCollateralList.cnt ne 0}">
															<a href="javascript:fn_dataTable_detail('${status.count}','${selectCollateralList.yyyy}', '${selectCollateralList.seq}')">
																<i id="iconId${status.count}" class="bi bi-file-check fs-6x"></i>
															</a>
														</c:if>
														<c:if test="${selectCollateralList.cnt eq 0}">
															<i id="iconId${status.count}" class="bi bi-file-check fs-6x"></i>
														</c:if>
														${status.count}
													</td>
													<td>
														${selectCollateralList.smallname}
													</td>
													<td>
														${fn:substring(selectCollateralList.estiDate,0,4)}-${fn:substring(selectCollateralList.estiDate,4,6)}-${fn:substring(selectCollateralList.estiDate,6,8)}
													</td>
													<td>
														${selectCollateralList.secName}
													</td>
													<td>
														${selectCollateralList.liquorTypeNm}
													</td>
													<td>
														${selectCollateralList.sangho}
													</td>
													<td>
														${selectCollateralList.marketName}
													</td>
													<td>
														${selectCollateralList.esDiv}
													</td>
													<td>
														${selectCollateralList.procName}
													</td>
													<td></td>
													<td></td>
													<td>
														${selectCollateralList.lSizePy}
													</td>
													<td>
														${selectCollateralList.BSizePy}
													</td>
													<td>
														<fmt:formatNumber value="${selectCollateralList.currAmt}" pattern="#,###" />
													</td>
													<td>
														<fmt:formatNumber value="${selectCollateralList.plminBidAmt}" pattern="#,###" />
													</td>
													<td>
														<fmt:formatNumber value="${selectCollateralList.plBidAmt}" pattern="#,###" />
													</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								<div class="table-responsive">
									<table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 mt-3">
										<thead class="bg-lighten">
											<tr class="fw-bolder fs-7 text-gray-800 text-center">
												<th class="min-w-70px">영업의뢰 결재일자</th>
												<th class="min-w-70px">업무파트 접수마감</th>
												<th class="min-w-70px">업무파트 김장마감</th>
												<th class="min-w-70px">지점장 결재일자</th>
												<th class="min-w-70px">관재파트 접수마감</th>
												<th class="min-w-70px">관재파트 감정마감</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><input id="businessRequestPaymentDate" class ="form-control text-center font-size-small max-height-20" value="0000-00-00" disabled /></td>
												<td><input id="businessPartReceiptClosing" class ="form-control text-center font-size-small max-height-20" value="0000-00-00" disabled /></td>
												<td><input id="businessPartEmotionalClosing" class ="form-control text-center font-size-small max-height-20" value="0000-00-00" disabled /></td>
												<td><input id="managerPartPaymentDate" class ="form-control text-center font-size-small max-height-20" value="0000-00-00" disabled /></td>
												<td><input id="managingPartReceiptClosing" class ="form-control text-center font-size-small max-height-20" value="0000-00-00" disabled /></td>
												<td><input id="managingPartEmotionalClosing" class ="form-control text-center font-size-small max-height-20" value="0000-00-00" disabled /></td>
											</tr>	
										</tbody>	
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</form:form>

<script type="text/javascript" src="<c:url value='/resources/js/util/datePicker.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es01/es01_w06/button.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/util/datePicker.js'/>"></script>
</body>
</html>
