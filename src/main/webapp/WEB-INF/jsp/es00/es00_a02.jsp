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
		function fn_Search_Button(flag){
			document.listForm.action = "<c:url value='/es00/es00_a02.do'/>";
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
					<h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">메뉴관리</h1>
					<span class="h-20px border-gray-300 border-start mx-4"></span>.
					<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
						<li class="breadcrumb-item text-muted">기준정보</li>
						<li class="breadcrumb-item">
							<span class="bullet bg-gray-300 w-5px h-2px"></span>
						</li>
						<li class="breadcrumb-item text-dark">메뉴관리</li>
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
										<div class="d-flex align-items-center fw-bolder size-min-width-150">
											<div class="text-primary fs-7 text-nowrap">그룹선택</div>
											<!-- <form:select path="user_r" class="form-select form-select-transparent fs-7 lh-1 text-white fw-bolder py-0 ps-3 w-auto" data-hide-search="true" data-control="select2" data-dropdown-css-class="w-100px" data-placeholder="옵션을 선택하세요">
												<c:forEach var="selectGroupList" items="${selectGroupList}" varStatus="status">
													<form:option value='${selectGroupList.userRId}' label='${selectGroupList.userR}'/>
												</c:forEach>
											</form:select> -->
											<form:select path="user_r" class="form-select form-select-transparent fs-7 py-0 ps-3 mx-2 text-white fw-bolder">
												<c:forEach var="selectGroupList"  items="${selectGroupList}" varStatus="status">
													<form:option value='${selectGroupList.userRId}' label='${selectGroupList.userR}'/>
												</c:forEach>
											</form:select>
										</div>
										<div class="d-flex align-items-center fw-bolder size-min-width-190">
											<div class="text-primary fs-7 text-nowrap">파트선택</div>
											<!-- <form:select path="part_id" class="form-select form-select-transparent fs-7 lh-1 text-white fw-bolder py-0 ps-3 w-auto" data-hide-search="true" data-control="select2" data-dropdown-css-class="w-150px" data-placeholder="옵션을 선택하세요">
												<c:forEach var="selectPartList" items="${selectPartList}" varStatus="status">
													<form:option value='${selectPartList.partId}' label='${selectPartList.partNm}'/>
												</c:forEach>
											</form:select> -->
											<form:select path="part_id" class="form-select form-select-transparent fs-7 py-0 ps-3 mx-2 text-white fw-bolder">
												<c:forEach var="selectPartList"  items="${selectPartList}" varStatus="status">
													<form:option value='${selectPartList.partId}' label='${selectPartList.partNm}'/>
												</c:forEach>
											</form:select>
										</div>
										<div class="d-flex align-items-center fw-bolder">
											<div class="text-primary fs-7 text-nowrap">사용자ID</div>
											<form:input class="form-control form-control-transparent fs-7 lh-1 text-white fw-bolder py-0 ps-3 w-auto mx-2" placeholder="사용자ID를 입력해주세요" path="user_id" id="user_id"/>
										</div>	
										<div class="d-flex align-items-center fw-bolder">
											<div class="text-primary fs-7 text-nowrap">사용자명</div>
											<form:input class="form-control form-control-transparent fs-7 lh-1 text-white fw-bolder py-0 ps-3 w-auto mx-2" placeholder="사용자명을 입력해주세요" path="user_name" id="user_name"/>
										</div>									
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xxl-12">
						<div class="card">
							<div class="card-body">
								<div class="table-responsive table-scroll">
									<table class="table table-row-bordered table-rounded table-hover gs-5 gy-5 gx-5 mt-3 table-scroll-section">
										<thead class="bg-secondary table-scroll-section th">
											<tr class="fw-bolder fs-6 text-gray-800 text-center">
												<th class="min-w-50px">번호</th>
												<th class="min-w-50px">파트ID</th>
												<th class="min-w-100px">파트명</th>
												<th class="min-w-100px">사용자ID</th>
												<th class="min-w-100px">사용자명</th>
												<th class="min-w-80px">그룹코드</th>
												<th class="min-w-80px">사용여부</th>
											</tr>
										</thead>
										<tbody id = "dataTable_body">
											<c:if test = "${!empty selectUserGroupList}">
												<c:forEach var="selectUserGroupList" items="${selectUserGroupList}" varStatus="status">
													<tr id="dataInfo${selectUserGroupList.rowCnt}" onclick="fn_Row_DataInfo('dataInfo${selectUserGroupList.rowCnt}')" <c:if test="${selectUserGroupList.userNm eq '미등록'}">class="table-disabled"</c:if> > 
							            				<td align="center" class="listtd fs-7">
							            					${status.count}
							            				</td>
							            				<td align="center" class="listtd fs-7">
							            					${selectUserGroupList.partId}
							            				</td>
							            				<td align="center" class="listtd fs-7">
							            					${selectUserGroupList.partNm}
							            				</td>
							            				<td align="center" class="listtd fs-7">
							            					<input type="hidden" id="dataInfo${selectUserGroupList.rowCnt}userId"  value ="${selectUserGroupList.userId}"/>
							            					${selectUserGroupList.userId}
							            				</td>
							            				<td align="center" class="listtd fs-7">
							            					${selectUserGroupList.userNm}
							            				</td>
							            				<td align="center" class="listtd fs-7">
							            					<select class="form-select fs-7 lh-1 fw-bolder py-1" id="dataInfo${selectUserGroupList.rowCnt}userR">
																<c:forEach var="selectGroupList" items="${selectGroupList}" varStatus="status">
																	<option value="${selectGroupList.userRId}" <c:if test="${selectGroupList.userRId eq selectUserGroupList.userR}">selected</c:if> label="${selectGroupList.userRId}"/>
																</c:forEach>
							            					</select>
							            				</td>
							            				<td align="center" class="listtd">
							            					<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm input-checkbox-center">
																<input class="form-check-input" type="checkbox" id="dataInfo${selectUserGroupList.rowCnt}useYn" <c:if test="${selectUserGroupList.useYn eq 'Y'}">checked = true</c:if>></input>
															</div>
							            				</td>
													</tr>
												</c:forEach>
											</c:if>
											<c:if test = "${empty selectUserGroupList}">
												<tr id="notDataUserGroupList">
													<td colspan="6" class="text-center">해당 데이터가 없습니다.</td>
												</tr>
											</c:if>
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
<script type="text/javascript" src="<c:url value='/resources/js/util/util.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es00/es00_a02/button.js'/>"></script>
</body>
</html>
