<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

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
			document.listForm.action = "<c:url value='/es00/es00_w02.do'/>";
			document.listForm.submit();
		}
	</script>
</head>
<body>
<form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
	<form:input type="hidden" path="menu_id" id="menu_id" value="${menu_id}"/>
	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<div class="toolbar" id="kt_toolbar">
			<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
				<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
					<h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">권역별담당등록</h1>
					<span class="h-20px border-gray-300 border-start mx-4"></span>
					<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
						<li class="breadcrumb-item text-muted">기준정보</li>
						<li class="breadcrumb-item">
							<span class="bullet bg-gray-300 w-5px h-2px"></span>
						</li>
						<li class="breadcrumb-item text-dark">권역별담당등록</li>
					</ul>
				</div>
				<div class="d-flex align-items-center gap-2 gap-lg-3">
					<a href="javascript:fn_Search_Button();" class="btn btn-sm btn-flex btn-jinro btn-active-jinro fw-bolder">
						<i class="fas fa-list"></i>
						조회
					</a>
					<a href="javascript:fn_DataTable_Insert_Button();" class="btn btn-sm btn-flex btn-jinro btn-active-jinro fw-bolder">
						<i class="fas fa-search"></i>
						저장	
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
								<div class="d-flex flex-stack flex-wrap gap-4">
									<div class="d-flex align-items-center flex-wrap gap-3">
										<div class="d-flex align-items-center fw-bolder"></div>														
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- asdsad -->
					<div class="col-xxl-12">
						<div class="card">
							<div class="card-body">
								<table id="dataTable" class="table table-hover table-row-bordered gy-5 gs-7">
									<thead class="bg-secondary">
										<tr class="fw-bolder fs-6 text-gray-800  text-muted text-center">
											<th class="min-w-80px">부서코드</th>
											<th class="min-w-450px">부서명</th>
											<th class="min-w-80px">담당자</th>
										</tr>
									</thead>
									<tbody id="dataTable_tobody" class="fs-7">
										<c:forEach var="selectDsrtctList" items="${selectDsrtctList}" varStatus="status">
					            			<tr id="${selectDsrtctList.buseo}" onclick="fn_Row_DataInfo('${selectDsrtctList.buseo}')">
					            				<td align="center" class="listtd fs-7">
					            					<input type="hidden" id="buseo${selectDsrtctList.buseo}" value="${selectDsrtctList.buseo}"/>
					            					${selectDsrtctList.buseo}
					            				</td>
					            				<td align="center" class="listtd fs-7">
					            					<input type="hidden" id="fullname${selectDsrtctList.buseo}" value="${selectDsrtctList.fullname}"/>
					            					${selectDsrtctList.fullname}
					            				</td>
					            				<td align="right" class="listtd">
													<select class="form-select fs-7 lh-1 fw-bolder py-1" id="sabun${selectDsrtctList.buseo}">
														<c:if test="${!empty selectDsrtctList.sabun}">
															<option value='${selectDsrtctList.sabunNum}' label='${selectDsrtctList.sabun}'/>
														</c:if>
														<c:forEach var="selectManagerList" items="${selectManagerList}">
															<c:if test="${selectDsrtctList.sabun ne selectManagerList.name}">
																<option value='${selectManagerList.sabun}' label='${selectManagerList.name}'/>
															</c:if>
														</c:forEach>	
													</select>
												</td>
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
<script type="text/javascript" src="<c:url value='/resources/js/es00/es00_w02/button.js'/>"></script>
</body>
</html>