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
 <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/sample.css'/>"/>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javaScript" language="javascript" defer="defer">
    function fn_Search_Button(){
    	document.listForm.action = "<c:url value='/es01/es01_w02_p04.do'/>";
       	document.listForm.submit();
    }

    $(document).ready(function(){
        $("input[name=searchSangho]").keydown(function (key) {
            if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
            	//changeExpectedBidPrice();
            	fn_Search_Button();
            }
        }); 
    });
    // 상호클릭시 값을 뿌려줌
    function fn_Search_Sangho (sangho,saupNo,daepyoName,uptae,jongmok,geoCode){
    	
    	var result = confirm(sangho+'을 선택 하시겠습니까?');

        if(result) {
           //yes
        	 $("#geoCode", opener.document).val(geoCode);
        	 $("#sangho", opener.document).val(sangho);
        	 $("#daepyoName", opener.document).val(daepyoName);
        	 window.close();
        } else {
            //no
        }

    }
    
    </script>
    
<title>거래처 검색</title>
</head>

<body style="text-align:center; margin:0 auto; display:inline; padding-top:100px;">
    <form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
    <div id="sysbtn">
    		<ul>
    			
            </ul>
    	</div>
    	<div id="table">

					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
					    <th >거래처 조회</th>
					    <td><input type="text" name="searchSangho" id="searchSangho" value='${searchVO.searchSangho}' />
               		 </td>
               		 <td>
		                    <span class="btn_blue_l">
		                        <a href="javascript:fn_Search_Button();">조회</a>
		                        <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
		                    </span>
               		 </td>
					  </tr>
					</thead>
					<tbody>
					  <tr>
					    <th>상호(약호)</th><th>사업자번호</th><th>대표자명</th><th>업태</th><th>종목</th>
					  </tr>
					  <c:forEach var="sanghoList" items="${selectSanghoList}" varStatus="status">
					  <tr onclick=fn_Search_Sangho('${fn:trim(sanghoList.sangho)}','${sanghoList.saupNo}','${sanghoList.daepyoName}','${sanghoList.uptae}','${sanghoList.jongmok}','${sanghoList.geoCode}') > 
					    <td>${sanghoList.sangho}</td><td>${sanghoList.saupNo}</td><td>${sanghoList.daepyoName}</td><td>${sanghoList.uptae}</td><td>${sanghoList.jongmok}</td> 
					  </tr>
					 
					  
					  
					  
					  
					 </c:forEach>

					</tbody>
					</table>
					
				</div>
		</form:form>		
</body>
</html>