<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javaScript" language="javascript" defer="defer">
	function makeDetailUrl(_담보종류, _사업부문, _결재진행현황, _응찰입력표사용여부, _부서명, _부서코드, _사원명, _사원번호, _직위, _직급) {
		if (_담보종류 === '105') {
			return '/view/es01/w02/4'
					+ "?sec_code="+ _담보종류
					+ "&liquor_type="+ _사업부문
					+ "&proc_div="+ _결재진행현황
					+ "&auth=I"
					+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
					+ "&uDept="+ _부서명
					+ "&uDeptCd="+ _부서코드
					+ "&uName="+ _사원명
					+ "&uEmpNo="+ _사원번호
					+ "&uJikWi="+ _직위
					+ "&uJikName="+ _직급
		} else if (_담보종류 === '104') {
			return '/view/es01/w02/3'
					+ "?sec_code="+ _담보종류
					+ "&liquor_type="+ _사업부문
					+ "&proc_div="+ _결재진행현황
					+ "&auth=I"
					+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
					+ "&uDept="+ _부서명
					+ "&uDeptCd="+ _부서코드
					+ "&uName="+ _사원명
					+ "&uEmpNo="+ _사원번호
					+ "&uJikWi="+ _직위
					+ "&uJikName="+ _직급
		} else if (_담보종류 === '102') {
			return '/view/es01/w02/2'
					+ "?sec_code="+ _담보종류
					+ "&liquor_type="+ _사업부문
					+ "&proc_div="+ _결재진행현황
					+ "&auth=I"
					+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
					+ "&uDept="+ _부서명
					+ "&uDeptCd="+ _부서코드
					+ "&uName="+ _사원명
					+ "&uEmpNo="+ _사원번호
					+ "&uJikWi="+ _직위
					+ "&uJikName="+ _직급
		} else if (_담보종류 === '101') {
			return '/view/es01/w02'
					+ "?sec_code="+ _담보종류
					+ "&liquor_type="+ _사업부문
					+ "&proc_div="+ _결재진행현황
					+ "&auth=I"
					+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
					+ "&uDept="+ _부서명
					+ "&uDeptCd="+ _부서코드
					+ "&uName="+ _사원명
					+ "&uEmpNo="+ _사원번호
					+ "&uJikWi="+ _직위
					+ "&uJikName="+ _직급
		} else if (_담보종류 === '401') {
			return '/view/es01/w03'
					+ "?sec_code="+ _담보종류
					+ "&liquor_type="+ _사업부문
					+ "&proc_div="+ _결재진행현황
					+ "&auth=I"
					+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
					+ "&uDept="+ _부서명
					+ "&uDeptCd="+ _부서코드
					+ "&uName="+ _사원명
					+ "&uEmpNo="+ _사원번호
					+ "&uJikWi="+ _직위
					+ "&uJikName="+ _직급
		}  else if (_담보종류 === '402') {
			return '/view/es01/w03/1'
					+ "?sec_code="+ _담보종류
					+ "&liquor_type="+ _사업부문
					+ "&proc_div="+ _결재진행현황
					+ "&auth=I"
					+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
					+ "&uDept="+ _부서명
					+ "&uDeptCd="+ _부서코드
					+ "&uName="+ _사원명
					+ "&uEmpNo="+ _사원번호
					+ "&uJikWi="+ _직위
					+ "&uJikName="+ _직급
		}  else if (_담보종류 === '501') {
			return '/view/es01/w04'
					+ "?sec_code="+ _담보종류
					+ "&liquor_type="+ _사업부문
					+ "&proc_div="+ _결재진행현황
					+ "&auth=I"
					+ "&sec_yn=N&bid_use="+ _응찰입력표사용여부
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

	function sendPagePopup( dataForm, uri, target, sizeX, sizeY, scroll ) {
		var intLeftPos = (screen.width  - eval(sizeX)) / 2;
        var intTopPos  = (screen.height - eval(sizeY)) / 2 - 20;
        var obj = window.open("", target, 'toolbar=no,location=no,status=yes,resizable=no,scrollbars='+scroll+',width='+sizeX+',height='+sizeY+',left='+intLeftPos+',top='+intTopPos);
        dataForm.action = uri;
        dataForm.target = target;
        dataForm.submit();
        dataForm.target = '';
	}

    function fn_Search_NewGo(){
    	let form=document.listForm;
    	let url;
    	let sizeX="800";
    	let sizeY="1000";
    	let scroll="AUTO";
    	let target='appnew';
    	
    	let secCode =$("#secCode > option:selected").attr("value");
    	let appraisal =$("#appraisal > option:selected").attr("value");
    	let liquorType =$("#liquorType > option:selected").attr("value");
    	
    	if(secCode=='%'){
    		alert('담보종류 선택 해주세요');
    		return;
    	}

		let _부서명 = sessionStorage.getItem("userDept");
		let _부서 = sessionStorage.getItem("userDeptCd");
		let _관리부서 = sessionStorage.getItem("userDeptCd");
		let _사원명 = sessionStorage.getItem("userName");
		let _사원번호 = sessionStorage.getItem("userEmpNo");
		let _직위 = sessionStorage.getItem("userJikName");
		let _직급 = sessionStorage.getItem("userJikWi");

		let result = getQuery('Q_관리부서확인', {
			'_부서코드': _부서
		});


		let _결재진행현황;
		if (result._관리부서 == 'Y') {
			_결재진행현황 = "21";
		} else {
			_결재진행현황 = "11";
		}
		window.open(makeDetailUrl(secCode, liquorType, _결재진행현황, appraisal, _부서명, _부서, _사원명, _사원번호, _직위, _직급));
    }

	function getQuery(id, data) {
		let result = {}
		$.ajax({
			type: 'GET',
			url : '/ezgen/es01/query' + GetQueryStringFrom($.extend(data, {'name': id, 'type': 7}), false),
			async: false,
			error : function(response) {

			},
			success : function(response) {
				result = response.result
			}
		});

		return result;
	}

	function GetQueryStringFrom(json, isContinue=false) {
		let queryString =  Object.entries(json)
				.map(([key,value]) => (key + '=' + value))
				.filter(v => v)
				.join('&');

		if (isContinue) {
			return queryString === '' ? '' : '&' + queryString;
		} else {
			return queryString === '' ? '' : '?' + queryString;
		}
	}

</script>
<title>신규등록</title>
</head>
<body>
    <form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
	    <div class="modal-content py-3">
	    	<div class="card card-flush shadow-sm">
				<div class="card-header">
					<h3 class="card-title">담보현황신규등록</h3>
					<div class="card-toolbar">
						<button type="button" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default" onclick="fn_Search_NewGo();">
							선택
						</button>
					</div>
				</div>
				<div class="card-body pt-0">
					<div class="bg-gray-100 rounded p-5">
						<div class="form-floating mb-3">
							 <select name="secCode" id="secCode" class="form-select" aria-label="Floating label select example">
			   					<c:forEach var="secCode" items="${damboList}" varStatus="status">
			   						<option value="${secCode.cdCode}">${secCode.cdDesc}</option>
			   					</c:forEach>
							</select>
							<label for="floatingSelect">담보종류</label>
						</div>
						<div class="form-floating mb-3">
							<select name="appraisal" id="appraisal" class="form-select" aria-label="Floating label select example">
			   					<c:forEach var="appraisalList" items="${appraisalList}" varStatus="status">
			   						<option value="${appraisalList.appraisalgubun}">${appraisalList.appraisalnm}</option>
			   					</c:forEach>
							</select>
							<label for="floatingSelect">감정구분</label>
						</div>
						<div class="form-floating">
							<select name="liquorType" id="liquorType" class="form-select" aria-label="Floating label select example">
								<c:forEach var="liquorType" items="${liquorType}" varStatus="status">
			        				<option value="${liquorType.cdCode}">${liquorType.cdDesc}</option>
			        			</c:forEach>
							</select>
							<label for="floatingSelect">사업부분</label>
						</div>
					</div>
				</div>
			</div>	
		</div>		
	</form:form>		
</body>
</html>