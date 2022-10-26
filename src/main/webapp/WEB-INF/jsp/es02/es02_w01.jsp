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
        function fn_Search_Button(){
			document.listForm.action = "<c:url value='/es02/es02_w01.do'/>";
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
	<input type="hidden" name="selectedId" />
    <input type="hidden" name="searchYyyy" value="" />
    <input type="hidden" name="searchSeq" value="" />
    <input type="hidden" name="docKey" value="" />
    <input type="hidden" name="secCode" value="" />
    <form:input type="hidden" path="menu_id" id="menu_id" value="${menu_id}"/>
	<form:input type="hidden" path="startDt" id="startDt" value="${startDt}"/>
	<form:input type="hidden" path="endDt" id="endDt" value="${endDt}"/>
    
    <div class="modal-content py-3">
        <div class="card card-flush shadow-sm">
            <div class="card-header">
                <h3 class="card-title">담당자별감정현황</h3>
                <div class="card-toolbar align-items-center gap-2 gap-lg-3">
					<a href="javascript:fn_Search_Button();" class="btn btn-sm btn-flex btn-jinro btn-active-jinro fw-bolder">
						<i class="fas fa-search"></i>
						조회
					</a>
                </div>
            </div>
            <div class="card-body pt-0">
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
                                    <div class="col-3">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="text-primary fs-7 text-nowrap">담당자</div>
                                            </div>
                                            <div class="col-9">
                                                <form:select path="manaReceSabun" class="form-select form-select-transparent fs-7 py-0 text-white min-w-100">
                                                    <c:forEach var="trustee" items="${trusteeList}" varStatus="status">
                                                        <form:option value='${trustee.sabun}' label='${trustee.name}'/>
                                                    </c:forEach>
                                                </form:select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-12">
						<div class="card">
							<div class="card-body">
								<table id="dataTable" class="table table-hover table-row-bordered gy-5 gs-7 text-center">
									<thead class="bg-secondary">
										<tr class="fw-bolder fs-6 text-gray-800  text-muted">
											<th class="min-w-70px">No</th>
											<th class="min-w-100px">지점</th>
											<th class="min-w-100px">감정요청일자</th>
											<th class="min-w-150px">담보종류</th>
											<th class="min-w-100px">거래처명</th>
											<th class="min-w-150px">업소명</th>
											<th class="min-w-100px">감정구분</th>
											<th class="min-w-100px">감정진행현황</th>
											<th class="min-w-100px">건물면적(평)</th>
											<th class="min-w-100px">토지면적(평)</th>
											<th class="min-w-100px">설정한도액</th>
											<th class="min-w-100px">설정예정액</th>
											<th class="min-w-100px">담당자</th>
										</tr>
									</thead>
									<tbody class="fs-7" id="dataTable_tobody" class="text-center text-nowrap">
						        		<c:forEach var="result" items="${es02w01List}" varStatus="status">
					            			<tr>
												<td class="text-center text-nowrap"><c:out value="${status.count}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.smallname}"/></td>
					            				<td class="text-center text-nowrap">${fn:substring(result.jumTranDate,0,4)}-${fn:substring(result.jumTranDate,4,6)}-${fn:substring(result.jumTranDate,6,8)}</td>
					            				<td class="text-center text-nowrap"><c:out value="${result.secName}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.sangho}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.marketName}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.esDiv}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.procName}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.bSizePy}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.lSizePy}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.clnTotAmt}"/></td>
					            				<td class="text-center text-nowrap"><c:out value="${result.plTotAmt}"/></td>
                                                <td class="text-center text-nowrap"><c:out value="${result.name}"/></td>
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
