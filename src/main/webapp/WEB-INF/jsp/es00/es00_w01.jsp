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
			document.listForm.action = "<c:url value='/es00/es00_w01.do'/>";
			document.listForm.submit();
		}
	</script>
</head>
<body>
<form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
	<input type="hidden" id="attr00" value="${attr00}"/>	
	<form:input type="hidden" path="menu_id" id="menu_id" value="${menu_id}"/>

	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<div class="toolbar" id="kt_toolbar">
			<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
				<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
					<h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">단순코드등록</h1>
					<span class="h-20px border-gray-300 border-start mx-4"></span>
					<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
						<li class="breadcrumb-item text-muted">기준정보</li>
						<li class="breadcrumb-item">
							<span class="bullet bg-gray-300 w-5px h-2px"></span>
						</li>
						<li class="breadcrumb-item text-dark">단순코드등록</li>
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
										<div class="d-flex align-items-center fw-bolder">
											<div class="text-primary fs-7 text-nowrap">대분류</div>
											<form:select path="attr00" class="form-select form-select-transparent fs-7 py-0 ps-3 mx-2 text-white fw-bolder"  onchange="javascript:fn_Search_Button();">
												<c:forEach var="lclasList"  items="${lclasList}" varStatus="status">
													<form:option value='${lclasList.attr09}' label='${lclasList.cddesc}'/>
												</c:forEach>
											</form:select>
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
								<div class="d-flex justify-content-end">
									<a href="javascript:fn_DataTable_Adit_Button();" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">추가</a>
								</div>
								<table id="dataTable" class="table table-hover table-row-bordered gy-5 gs-7">
									<thead class="bg-secondary">
										<tr class="fw-bolder fs-6 text-gray-800  text-muted text-center">
											<th class="min-w-70px">코드</th>
											<th class="min-w-400px align-middle">코드명</th>
											<th class="min-w-80px p-0 align-middle">정렬</th>
											<th class="min-w-80px">사용</th>
											<c:forEach var="selectHeaderList" items="${selectHeaderList}" varStatus="status">
												<th class="min-w-150px">${selectHeaderList.attr01}</th>
												<th class="min-w-150px">${selectHeaderList.attr02}</th>
												<th class="min-w-150px">${selectHeaderList.attr03}</th>
												<th class="min-w-150px">${selectHeaderList.attr04}</th>
												<th class="min-w-150px">${selectHeaderList.attr05}</th>
												<th class="min-w-150px">${selectHeaderList.attr06}</th>
												<th class="min-w-150px">${selectHeaderList.attr07}</th>
												<th class="min-w-150px">${selectHeaderList.attr08}</th>
												<th class="min-w-150px">${selectHeaderList.attr09 == 'DIV000' ? '속성10' : selectHeaderList.attr10}</th>
											</c:forEach>
										</tr>
									</thead>
									<tbody id="dataTable_tobody" class="fs-7">
										<c:forEach var="selectCodeAllList" items="${selectCodeAllList}" varStatus="status">
					            			<tr id="${selectCodeAllList.cdcode}" onclick="fn_Row_DataInfo('${selectCodeAllList.cdcode}')"> 
					            				<td align="center" class="listtd" >
					            					<input type="hidden" id="cdcode${selectCodeAllList.cdcode}"  class="fs-7"  value="${selectCodeAllList.cdcode}"/>	
													${selectCodeAllList.cdcode}
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="cddesc${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.cddesc}"/>
					            				</td>
					            				<td align="right" class="listtd">
					            					<input type="text" id="orderseq${selectCodeAllList.cdcode}" onkeypress="return checkNumber(event)" class="form-control input-block fs-7 " style="height: 10px;" value="${selectCodeAllList.orderseq}"/>
												</td>
					            				<td align="center" class="listtd">
													<select class="form-select fs-7 lh-1 fw-bolder py-1" id="useyn${selectCodeAllList.cdcode}">
														<option value="Y" <c:if test ="${selectCodeAllList.useyn eq 'Y'}">selected="selected"</c:if>>Y</option>
														<option value="N" <c:if test ="${selectCodeAllList.useyn eq 'N'}">selected="selected"</c:if>>N</option>
													</select>
												</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr01${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr01}"/>	
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr02${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr02}"/>
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr03${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr03}"/>
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr04${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr04}"/>
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr05${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr05}"/>
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr06${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr06}"/>
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr07${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr07}"/>
					            				</td>
					            				<td align="left" class="listtd">
					            					<input type="text" id="attr08${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr08}"/>
					            				</td>
												<td align="left" class="listtd">
													<input type="text" id="attr10${selectCodeAllList.cdcode}" class="form-control input-block fs-7" style="height: 10px;" value="${selectCodeAllList.attr10}"/>
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
<script type="text/javascript" src="<c:url value='/resources/js/util/util.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es00/es00_w01/button.js'/>"></script>
</body>
</html>
