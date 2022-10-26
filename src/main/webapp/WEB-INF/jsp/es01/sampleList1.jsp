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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/sample.css'/>"/>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javaScript" language="javascript" defer="defer">
    
    function sendPagePopup( dataForm, uri, target, sizeX, sizeY, scroll )

    {
     var intLeftPos = (screen.width  - eval(sizeX)) / 2;
     var intTopPos  = (screen.height - eval(sizeY)) / 2 - 20;
     var obj = window.open("", target, 'toolbar=no,location=no,status=yes,resizable=no,scrollbars='+scroll+',width='+sizeX+',height='+sizeY+',left='+intLeftPos+',top='+intTopPos);

     dataForm.action = uri;
	 dataForm.target = target;
     dataForm.submit();
     dataForm.target = '';

    }

        <!--
        /* 글 수정 화면 function */
        function fn_egov_select(id) {
        	document.listForm.selectedId.value = id;
           	document.listForm.action = "<c:url value='/updateSampleView.do'/>";
           	document.listForm.submit();
        }
        
        /* 글 등록 화면 function */
        function fn_egov_addView() {
           	document.listForm.action = "<c:url value='/addSample.do'/>";
           	document.listForm.submit();
        }
        
        /* 글 목록 화면 function */
        function fn_egov_selectList() {
        	document.listForm.action = "<c:url value='/egovSampleList.do'/>";
           	document.listForm.submit();
        }
        
        /* pagination 페이지 링크 function */
        function fn_egov_link_page(pageNo){
        	document.listForm.pageIndex.value = pageNo;
        	document.listForm.action = "<c:url value='/egovSampleList.do'/>";
           	document.listForm.submit();
        }
        
        //-->
        $('#button1').hide();
        
        function fn_Search_Button(){
        	document.listForm.action = "<c:url value='/es01/sampleList1.do'/>";
           	document.listForm.submit();
        }
        
        function fn_Search_New(){
        	var form=document.listForm;
        	var url;
        	var sizeX="500";
        	var sizeY="300";
        	var scroll="AUTO";
        	var target='appnew';
        	url ="<c:url value='/es01/es01_w01_new.do'/>";
    		sendPagePopup(form, url, target, sizeX, sizeY, scroll )
        }
        
        function fn_detail_page(yyyy,seq,secCode,docKey,procDiv){
        	var form=document.listForm;
        	var url;
        	var target=seq;
        	var sizeX="800";
        	var sizeY="1000";
        	var scroll="AUTO";

        	form.searchYyyy.value=yyyy;
        	form.searchSeq.value=seq;
        	form.docKey.value=docKey;
        	form.secCode.value=secCode;

        	if(secCode=='101'){
        	   url ="<c:url value='/es01/es01_w02_edit.do'/>";		
        		
        	}else if(secCode=='102'){
        		url ="<c:url value='/es01/es01_w02_p02_edit.do'/>";

        	}else if(secCode=='104'){
        			url ="<c:url value='/es01/es01_w02_p03_edit.do'/>";		
        			
        	}else if(secCode=='105'){
        		alert('105');
        	}else if(secCode=='401'){
        		url ="<c:url value='/es01/es01_w03_edit.do'/>";		
    			
        	}else if(secCode=='402'){
        		url ="<c:url value='/es01/es01_w03_p01_edit.do'/>";		
    			
        	}else if(secCode=='501'){
        		alert('501');
        	}
        	
        	sendPagePopup(form, url, target, sizeX, sizeY, scroll )
        	//document.listForm.action = "<c:url value='/sampleList1.do'/>";
           	//document.listForm.submit();
        }
        /*
        $(document).ready(function(){
        	$("#mouseOver").mouseover(function(){
        		alert('aaaaaa');
        	})
        })
        */
       
        
       /* $(document).ready(function(){
        	   $('table tr').mouseover(function(){
        	      $(this).css("backgroundColor","#ccc"); 
        	   });
        	   $('table tr').mouseout(function(){
        	      $(this).css("backgroundColor","#fff");
        	   });
        	});
        */
        // row click event
        $(document).ready(function(){
     	   $('table tr').click(function(){
     		  //선택된 row 색상변경 하고 고정 하기 
     		//  $(this).css("backgroundColor","#abc");
     		  $('#button1').hide();
     		// 선택 된 row의 값이 Y인지 체크
       	    var i = $(this).index();
       	    var tst=$('#buckupYn'+i).val();
	       	   if(tst=='Y'){
	       		  // alert('Y');
	       		  //지정감정내역보기 버튼 활성화 
	       		$('#button1').show();
	       	   }else{
	       		$('#button1').hide();
	       	   }
     	   }
     	   );
     	}
        );
    </script>
</head>

<body style="text-align:center; margin:0 auto; display:inline; padding-top:100px;">
    <form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
        <input type="hidden" name="selectedId" />
        <input type="hidden" name="searchYyyy" value="" />
        <input type="hidden" name="searchSeq" value="" />
        <input type="hidden" name="docKey" value="" />
        <input type="hidden" name="secCode" value="" />
        <div id="content_pop">
        	<!-- 타이틀 -->
        	<div id="title">
        		<ul>
        			<li><img src="<c:url value='/images/egovframework/example/title_dot.gif'/>" alt=""/>지점감정현황</li>
        		</ul>
        	</div>
        	<!-- // 타이틀 -->
        	<div id="search">
        		<ul>
        			<li>
        			    <label for="searchCondition" style="visibility:hidden;"></label>
        				부서명
        				<form:select path="jumCode" cssClass="use">
        					<c:forEach var="buseo" items="${buseoList}" varStatus="status">
        						<form:option value='${buseo.buseo}' label='${buseo.buseoName}'/>
        					</c:forEach>
        				</form:select>
        			</li>
        			<li>
        			    <label for="searchCondition" style="visibility:hidden;"></label>
        				담보종류
        				<form:select path="searchSecCode" cssClass="use">
        					<c:forEach var="dambo" items="${damboList}" varStatus="status">
        						<form:option value='${dambo.cdCode}' label='${dambo.cdDesc}'/>
        					</c:forEach>
        				</form:select>
        			</li>
        			<li></label>
                                                 담보감정일자:<form:input path="startDt" cssClass="txt" value='${startDt}'/>~<form:input path="endDt" cssClass="txt" value='${endDt}'/>
                    </li>
                   <li>
        			    <label for="searchCondition" style="visibility:hidden;"></label>
        				결재진행현황
        				<form:select path="procDiv" cssClass="use">
        					<c:forEach var="procList" items="${procList}" varStatus="status">
        						<form:option value='${procList.cdCode}' label='${procList.cdDesc}'/>
        					</c:forEach>
        				</form:select>
        			</li>
        			<li>
                                                 거래처명:<form:input path="sangho" cssClass="txt" value=''/>
                    </li>
                    <li>
                                                 업소명:<form:input path="marketName" cssClass="txt"  value=''/>
                    </li>
                    <li>
                                                 소재지:<form:input path="searchJuso" cssClass="txt"  value=''/>
                    </li>
                   
                </ul>
        	</div>
        	<div id="search">
        		<ul>
        			<li id='button1'>
        	            <span class="btn_blue_l">
        	                <a href="javascript:fn_Search_Button();">지점감정내역보기</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        			<li>
        	            <span class="btn_blue_l">
        	                <a href="javascript:fn_Search_Button();">조회</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                <a href="javascript:fn_Search_New();">신규</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                <a href="javascript:fn_egov_selectList();">재감정</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
                </ul>
        	</div>
        	<!-- List -->
        	<div id="table">
        		<table width="100%" border="0" cellpadding="0" cellspacing="0" summary="카테고리ID, 케테고리명, 사용여부, Description, 등록자 표시하는 테이블">
        			<caption style="visibility:hidden">카테고리ID, 케테고리명, 사용여부, Description, 등록자 표시하는 테이블</caption>
        			<colgroup>
        				<col width="4%"/>
        				<col width="4%"/>
        				<col width="4%"/>
        				<col width="6%"/>
        				<col width="5%"/>
        				<col width="4%"/>
        				<col width="4%"/>
        				<col width="4%"/>
        				<col width="8%"/>
        				<col width="5%"/>
        				<col width="100"/>
        				<col width="60"/>
        				<col width="40"/>
        				<col width="60"/>
        				<col width="60"/>
        				<col width="80"/>
        				<col width="100"/>
        				<col width="60"/>
        				<col width="40"/>
        				<col width="60"/>
        				<col width="60"/>
        				<col width="80"/>
        				<col width="60"/>
        				<col width="60"/>
        			</colgroup>
        			<tr>
        				<th align="center">No</th>
        				<th align="center">감정일자</th>
        				<th align="center">지점명</th>
        				<th align="center">감정진행현황</th>
        				<th align="center">담보종류</th>
        				<th align="center">사업부분</th>
        				<th align="center">거래처명</th>
        				<th align="center">업소명</th>
        				<th align="center">소재지</th>
        				<th align="center">토지(평)</th>
        				<th align="center">건물(평)</th>
        				<th align="center">평가가격</th>
        				<th align="center">최종평가가격</th>
        				<th align="center">낙찰가율(%)</th>
        				<th align="center">예상낙찰가</th>
        				<th align="center">선순위채권액</th>
        				<th align="center">담보여력</th>
        				<th align="center">초과부족금액</th>
        				<th align="center">초과부족</th>
        				<th align="center">감정구분</th>
        				<th align="center">평가구분</th>
        				<th align="center">응찰여부</th>
        				<th align="center">감정번호</th>
        			</tr>
        			<c:forEach var="result" items="${sampleList}" varStatus="status">
            			<tr onclick=fn_detail_page('${result.yyyy}','${result.seq}','${result.secCode}','${result.docKey}','${result.procDiv}','${result.secCode}') > 
            				<td  align="center" class="listtd"><c:out value="${status.count}"/></td>
            				<!-- 
            				<td align="center" class="listtd"><a href="javascript:fn_egov_select('<c:out value="${result.docKey}"/>')"><c:out value="${result.docKey}"/></a></td>
            				 -->
            				<td align="left" class="listtd">${result.estiDate}&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.smallname}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.procName}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.secName}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.liquorTypeNm}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.sangho}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.marketName}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.juso1}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.lSizePy}"/>&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.bSizePy}"/>&nbsp;</td>
            				<td align="center" class="listtd"><fmt:formatNumber value="${result.increaseAmt}" pattern="#,###" />&nbsp;</td>
            				<td align="center" class="listtd"><fmt:formatNumber value="${result.plminBidAmt}" pattern="#,###" />&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.applRate}"/>&nbsp;</td>
            				<td align="center" class="listtd"><fmt:formatNumber value="${result.plBidAmt}"  pattern="#,###" />&nbsp;</td>
            				<td align="center" class="listtd"><fmt:formatNumber value="${result.preBondAmt}"  pattern="#,###" />&nbsp;</td> 
            				<td align="center" class="listtd"><fmt:formatNumber value="${result.spareSecAmt}"  pattern="#,###" />&nbsp;</td>
            				<td align="center" class="listtd"><fmt:formatNumber value="${result.exceedAmt}"  pattern="#,###" />&nbsp;</td> 
            				<td align="center" class="listtd"><c:out value="${result.exceedYnDesc}"/>&nbsp;</td>
            				<td align="center" class="listtd">${result.esDiv}&nbsp;</td>
            				<td align="center" class="listtd"><c:out value="${result.appraiseGuName}"/>&nbsp;</td>
            				<td align="center" class="listtd">${result.bidUseYn}&nbsp;   </td>
            				<td align="center" class="listtd"><c:out value="${result.seq}"/>&nbsp;</td>
            				<input type=hidden name='buckupYn${status.count}' id='buckupYn${status.count}' value="${result.backupYn}" />
            				
            			</tr>
            			
        			</c:forEach>
        		</table>
        	</div>
        	<!-- /List -->
        	
        	
        </div>
    </form:form>
</body>
</html>
