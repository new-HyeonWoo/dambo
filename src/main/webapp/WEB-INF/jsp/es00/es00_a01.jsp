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
			document.getElementById('flagType').value = flag;
			
			document.listForm.action = "<c:url value='/es00/es00_a01.do'/>";
			document.listForm.submit();
		}
	</script>
</head>
<body>
<form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
	<input type="hidden" id="user_r" value="${user_r}"/>
	<form:input type="hidden" path="flagType" id="flagType" value="kt_tab_pane_2"/>
	<form:input type="hidden" path="menu_id" id="menu_id" value="${menu_id}"/>
	
	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<div class="toolbar" id="kt_toolbar">
			<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
				<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
					<h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">사용자권한관리</h1>
					<span class="h-20px border-gray-300 border-start mx-4"></span>.
					<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
						<li class="breadcrumb-item text-muted">기준정보</li>
						<li class="breadcrumb-item">
							<span class="bullet bg-gray-300 w-5px h-2px"></span>
						</li>
						<li class="breadcrumb-item text-dark">사용자권한관리</li>
					</ul>
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
										<div class="d-flex align-items-center fw-bolder">
										</div>														
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- asdsad -->
					<div class="col-xxl-12">
						<div class="card">											
							<div class="card-body">
								<ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
									<li class="nav-item">
										<a class="nav-link <c:if test ="${flag_type eq 'kt_tab_pane_1'}">active</c:if>" data-bs-toggle="tab" href="#kt_tab_pane_1">TOP메뉴관리</a>
									</li>
									<li class="nav-item">
										<a class="nav-link <c:if test ="${flag_type eq 'kt_tab_pane_2'}">active</c:if>" data-bs-toggle="tab" href="#kt_tab_pane_2">메뉴관리</a>
									</li>
									<li class="nav-item">
										<a class="nav-link <c:if test ="${flag_type eq 'kt_tab_pane_3'}">active</c:if>" data-bs-toggle="tab" href="#kt_tab_pane_3">그룹관리</a>
									</li>
								</ul>												
								<div class="tab-content" id="myTabContent">
									<div class="tab-pane fade <c:if test ="${flag_type eq 'kt_tab_pane_1'}">show active</c:if>" id="kt_tab_pane_1" role="tabpanel">
										<div id="kt_content_container">
											<div class="d-flex justify-content-end">
												<div>
													<a href="javascript:fn_topMenu_delete_Button();" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">삭제</a>
													<a href="javascript:fn_topMenu_dataTable_adit_button()" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">추가</a>
													<a href="javascript:fn_Search_Button('kt_tab_pane_1');" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">조회</a>
													<a href="javascript:fn_topMenu_Insert_Button();" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">저장</a>
												</div>
											</div>
											<div class="table-responsive table-scroll">
												<table class="table table-row-bordered table-rounded table-hover gs-5 gy-5 gx-5 mt-3 table-scroll-section">
													<thead class="bg-secondary table-scroll-section th">
														<tr class="fw-bolder fs-6 text-gray-800 text-center">
															<th class="min-w-50px">번호</th>
															<th class="min-w-70px">메뉴ID</th>
															<th class="min-w-90px">메뉴명</th>
															<th class="min-w-70px">사용여부</th>
														</tr>
													</thead>
													<tbody id="topMenu_dataTable_body">
														<c:if test ="${!empty selectTopMenuList}">
															<c:forEach var="selectTopMenuList" items="${selectTopMenuList}" varStatus="status">
										            			<tr id="topMenu${selectTopMenuList.menuId}" onclick="fn_topMenu_Row_DataInfo('topMenu${selectTopMenuList.menuId}')"> 
										            				<td align="center" class="listtd fs-7">
										            					${selectTopMenuList.rowCnt}
										            				</td>
										            				<td align="center" class="listtd fs-7">
										            					<input type="hidden" id="topMenu${selectTopMenuList.menuId}menuId" value="${selectTopMenuList.menuId}"/>
										            					${selectTopMenuList.menuId}
										            				</td>
										            				<td align="left" class="listtd">
										            					<input type="text" id="topMenu${selectTopMenuList.menuId}grpName" class="form-control input-block fs-7" style="height: 10px;" value="${selectTopMenuList.grpName}"/>	
																	</td>
										            				<td align="center" class="listtd">
										            					<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm justify-content-center">
																			<input class="form-check-input" id="topMenu${selectTopMenuList.menuId}useYn" type="checkbox" <c:if test="${selectTopMenuList.useYn eq 'Y'}">checked = true</c:if>></input>
																		</div>
																	</td>
										            			</tr>
										            		</c:forEach>	
									            		</c:if>
									            		<c:if test ="${empty selectTopMenuList}">
									            			<tr id="notDataSelectTopMenuList">
									            				<td colspan="4" class="text-cneter">해당 데이터가 없습니다.</td>
									            			</tr>
									            		</c:if>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div class="tab-pane fade <c:if test ="${flag_type eq 'kt_tab_pane_2'}">show active</c:if>" id="kt_tab_pane_2" role="tabpanel">
										<div id="kt_content_container">
											<div class="d-flex justify-content-end">
												<div>
													<a href="javascript:fn_menu_delete_Button();" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">삭제</a>
													<a href="javascript:fn_menu_dataTable_adit_button()" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">추가</a>
													<a href="javascript:fn_Search_Button('kt_tab_pane_2');" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">조회</a>
													<a href="javascript:fn_menu_Insert_Button();" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">저장</a>
												</div>
											</div>
										</div>
										<div class="table-responsive table-scroll">
											<table class="table table-row-bordered table-rounded table-hover gs-5 gy-5 gx-5 mt-3 table-scroll-section">
												<thead class="bg-secondary table-scroll-section th">
													<tr class="fw-bolder fs-6 text-gray-800 text-center">
														<th class="min-w-50px">번호</th>
														<th class="min-w-70px">상단메뉴ID</th>
														<th class="min-w-70px">메뉴ID</th>
														<th class="min-w-90px">메뉴명</th>
														<th class="min-w-100px">소스경로</th>
														<th class="min-w-70px">사용여부</th>
													</tr>
												</thead>
												<tbody id="menu_dataTable_body">
													<c:if test ="${!empty selectMenuList}">
														<c:forEach var="selectMenuList" items="${selectMenuList}" varStatus="status">
									            			<tr id="menu${selectMenuList.menuId}" onclick="fn_menu_Row_DataInfo('menu${selectMenuList.menuId}')">
									            				<td align="center" class="listtd fs-7" >
										            				<input type="hidden" id="menu${selectMenuList.menuId}grpId" value="${selectMenuList.grpId}"/>
									            					${selectMenuList.rowCnt}
									            				</td>
									            				<td align="center" class="listtd fs-7">
									            					<input type="hidden" id="menu${selectMenuList.menuId}grpName" value="${selectMenuList.grpName}"/>
									            					${selectMenuList.grpName}
									            				</td>
									            				<td align="center" class="listtd fs-7">
									            					<input type="hidden" id="menu${selectMenuList.menuId}menuId" value="${selectMenuList.menuId}"/>
									            					${selectMenuList.menuId}
																</td>
									            				<td align="left" class="listtd">
									            					<input type="text" class="form-control input-block fs-7" id="menu${selectMenuList.menuId}menuName" style="height: 10px;" value="${selectMenuList.menuName}"/>	
																</td>
									            				<td align="left" class="listtd">
									            					<input type="text" class="form-control input-block fs-7" id="menu${selectMenuList.menuId}srcPath" style="height: 10px;" value="${selectMenuList.srcPath}"/>	
																</td>
									            				<td align="center" class="listtd">
									            					<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm justify-content-center">
																		<input class="form-check-input" id="menu${selectMenuList.menuId}useYn" type="checkbox" <c:if test="${selectMenuList.useYn eq 'Y'}">checked = true</c:if>></input>
																	</div>
																</td>
									            			</tr>
									            		</c:forEach>
								            		</c:if>
								            		<c:if test ="${empty selectMenuList}">
								            			<tr id="notDataSelectTopMenuList">
								            				<td colspan="4" class="text-cneter">해당 데이터가 없습니다.</td>
								            			</tr>
								            		</c:if>	
												</tbody>
											</table>
										</div>	
									</div>
									<div class="tab-pane fade <c:if test ="${flag_type eq 'kt_tab_pane_3'}">show active</c:if>" id="kt_tab_pane_3" role="tabpanel">
										<div id="kt_content_container">
											<div class="d-flex justify-content-between">
												<div>
													<div class="input-group input-group-sm">
														<span class="input-group-text me-4 rounded-pill" id="basic-addon3">그룹선택</span>
														<form:select  path="user_r" id= "group_type_user_r" class="form-select" aria-label="Select example" onchange="javascript:fn_Search_Button('kt_tab_pane_3');">
															<c:forEach var="selectGroupHeaderList" items="${selectGroupHeaderList}" varStatus="status">
																<form:option value='${selectGroupHeaderList.groupId}' label='${selectGroupHeaderList.groupId}'/>
															</c:forEach>	
														</form:select>
													</div>
												</div>
												<div>
													<a href="#" data-bs-toggle="modal" data-bs-target="#newDambo" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">그룹추가</a>
													<a href="javascript:fn_Group_Insert_Button();" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">저장</a>
												</div>
											</div>
											<div class="table-responsive table-scroll">
												<table class="table table-row-bordered table-rounded table-hover gs-5 gy-5 gx-5 mt-3 table-scroll-section">
													<thead class="bg-lighten table-scroll-section th">
														<tr class="fw-bolder fs-6 text-gray-800 text-center">
															<th class="min-w-50px">순번</th>
															<th class="min-w-80px">Top 메뉴</th>
															<th class="min-w-400px">메뉴명</th>
															<th class="min-w-80px">사용여부</th>
															<th class="min-w-80px">초기화면</th>
														</tr>
													</thead>
													<tbody id = "group_dataTable_body">
														<c:forEach var="selectGroupList" items="${selectGroupList}" varStatus="status">
									            			<tr id="group${selectGroupList.menuId}" onclick="fn_menu_Row_DataInfo('group${selectGroupList.menuId}')"> 
									            				<input type="hidden" id="group${selectGroupList.menuId}user_r" value="${selectGroupList.userR}"/>
									            				<input type="hidden" id="group${selectGroupList.menuId}menuId" value="${selectGroupList.menuId}"/>
									            				<td align="center" class="listtd fs-7" >
									            					${selectGroupList.rowCnt}
									            				</td>
									            				<td align="center" class="listtd fs-7" >
																	${selectGroupList.topMenu}
									            				</td>
									            				<td align="left" class="listtd fs-7">
																	${selectGroupList.menuName}
									            				</td>	
									            				<td align="center" class="listtd fs-7">
									            					<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm d-flex justify-content-center">
																		<input class="form-check-input fs-7" id="group${selectGroupList.menuId}useYn" type="checkbox" <c:if test="${selectGroupList.useYn eq 'Y'}">checked = true</c:if>></input>
																	</div>
																</td>
									            				<td align="center" class="listtd">
									            					<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm d-flex justify-content-center">
																		<input class="form-check-input fs-7" id="group${selectGroupList.menuId}initYn" type="checkbox" <c:if test="${selectGroupList.initYn eq 'Y'}">checked = true</c:if>></input>
																	</div>
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
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="newDambo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="card card-flush shadow-sm text-center">
					<div class="card-header">
						<h3 class="card-title">그룹추가</h3>
					</div>
					<div class="card-body pt-0">
						<div class="bg-gray-100 rounded p-5">
							<div class="form-floating">
								<input type="text" id="group_type" class="form-control input-block" />
								<label for="floatingInput">추가할 그룹을 입력해 주시기 바랍니다.</label>
							</div>
						</div>
					</div>
					<div class="card-footer">
						<div class="card-toolbar">
							<button type="button" onclick="javascript:fn_Group_Type_Insert();" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default">
								완료
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</form:form>
<script type="text/javascript" src="<c:url value='/resources/js/util/util.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es00/es00_a01/topMenu_button.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es00/es00_a01/menu_button.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es00/es00_a01/group_button.js'/>"></script>
</body>
</html>
