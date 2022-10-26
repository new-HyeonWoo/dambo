<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
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
    <title>(집합)연립_다세대등록</title>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/sample.css'/>"/>
    
    <script type="text/javascript" src="<c:url value='/resources/js/jquery/jquery-1.7.1.js'/>"></script>
   <script type="text/javascript" src="<c:url value='/resources/js/jquery/jquery-1.7.1.min.js'/>"></script>
    
    <script type="text/javaScript" language="javascript" defer="defer">
    $(document).ready(function(){
    	  window.resizeTo(1200, 800);
    	 });

    function sendPagePopup( dataForm, uri, target, sizeX, sizeY, scroll ) {

     var intLeftPos = (screen.width  - eval(sizeX)) / 2;
     var intTopPos  = (screen.height - eval(sizeY)) / 2 - 20;
     var obj = window.open("", target, 'toolbar=no,location=no,status=yes,resizable=no,scrollbars='+scroll+',width='+sizeX+',height='+sizeY+',left='+intLeftPos+',top='+intTopPos);

     dataForm.action = uri;
     dataForm.target = target;
     dataForm.submit();
     dataForm.target = '';

    }
    
        $('#button1').hide();
        var chkStyle = /\d/ ; 
        
        function fn_priceNoClk(priceLnSeq){
        	$('#tmpLnSeq').val($("#priceLnSeq"+priceLnSeq+"").val());
        	$('#tmpJuso').val($("#priceJuso"+priceLnSeq+"").val());
        	$('#tmpLotNum').val($("#priceLotNum"+priceLnSeq+"").val());
        	$('#tmpDistance').val($("#priceDistance"+priceLnSeq+"").val());
        	$('#tmpHouseCnt').val($("#priceHouseCnt"+priceLnSeq+"").val());
        	$('#tmpBYear').val($("#priceBYear"+priceLnSeq+"").val());
        	$('#tmpElapYear').val($("#priceElapYear"+priceLnSeq+"").val());
        	$('#tmpCbStruc').val($("#priceCbStruc"+priceLnSeq+"").val());
        	$('#tmpNumYear').val($("#priceNumYear"+priceLnSeq+"").val());
        	$('#tmpCheckYn1').val($("#priceCheckYn1"+priceLnSeq+"").val());
        	var priceCheckYn1=$("#priceCheckYn1"+priceLnSeq+"").val();
        	if(priceCheckYn1=='Y'){
        		$("input:checkbox[name='tmpCheckYn11']").prop("checked", true); 
        		$('#tmpCheckYn1').val('Y');
        	}else{
        		$("input:checkbox[name='tmpCheckYn11']").prop("checked", false); 
        		$('#tmpCheckYn1').val('N');
        	}
        	
        	$('#tmpOnlySize1').val($("#priceOnlySize1"+priceLnSeq+"").val());
        	$('#tmpCurrMinAmt1').val($("#priceCurrMinAmt1"+priceLnSeq+"").val());
        	$('#tmpCurrMaxAmt1').val($("#priceCurrMaxAmt1"+priceLnSeq+"").val());
        	$('#tmpCurrAvgAmt1').val($("#priceCurrAvgAmt1"+priceLnSeq+"").val());
        	$('#tmpCurrSizeDan1').val($("#priceCurrSizeDan1"+priceLnSeq+"").val());
        	$('#tmpLeaseAmt1').val($("#priceLeaseAmt1"+priceLnSeq+"").val());
        	$('#tmpLeaseRate1').val($("#priceLeaseRate1"+priceLnSeq+"").val());
        	
        	var priceCheckYn2=$("#priceCheckYn2"+priceLnSeq+"").val();
        	if(priceCheckYn2=='Y'){
        		$("input:checkbox[name='tmpCheckYn21']").prop("checked", true); 
        		$('#tmpCheckYn2').val('Y');
        	}else{
        		$("input:checkbox[name='tmpCheckYn21']").prop("checked", false); 
        		$('#tmpCheckYn2').val('N');
        	}
        	
        	$('#tmpOnlySize2').val($("#priceOnlySize2"+priceLnSeq+"").val());
        	$('#tmpCurrMinAmt2').val($("#priceCurrMinAmt2"+priceLnSeq+"").val());
        	$('#tmpCurrMaxAmt2').val($("#priceCurrMaxAmt2"+priceLnSeq+"").val());
        	$('#tmpCurrAvgAmt2').val($("#priceCurrAvgAmt2"+priceLnSeq+"").val());
        	$('#tmpCurrSizeDan2').val($("#priceCurrSizeDan2"+priceLnSeq+"").val());
        	$('#tmpLeaseAmt2').val($("#priceLeaseAmt2"+priceLnSeq+"").val());
        	$('#tmpLeaseRate2').val($("#priceLeaseRate2"+priceLnSeq+"").val());
        	
        	$('#tmpCheckYn3').val($("#priceCheckYn3"+priceLnSeq+"").val());
        	var priceCheckYn3=$("#priceCheckYn3"+priceLnSeq+"").val();
        	if(priceCheckYn3=='Y'){
        		$("input:checkbox[name='tmpCheckYn31']").prop("checked", true); 
        		$('#tmpCheckYn3').val('Y');
        	}else{
        		$("input:checkbox[name='tmpCheckYn31']").prop("checked", false); 
        		$('#tmpCheckYn3').val('N');
        	}
        	
        	$('#tmpOnlySize3').val($("#priceOnlySize3"+priceLnSeq+"").val());
        	$('#tmpCurrMinAmt3').val($("#priceCurrMinAmt3"+priceLnSeq+"").val());
        	$('#tmpCurrMaxAmt3').val($("#priceCurrMaxAmt3"+priceLnSeq+"").val());
        	$('#tmpCurrAvgAmt3').val($("#priceCurrAvgAmt3"+priceLnSeq+"").val());
        	$('#tmpCurrSizeDan3').val($("#priceCurrSizeDan3"+priceLnSeq+"").val());
        	$('#tmpLeaseAmt3').val($("#priceLeaseAmt3"+priceLnSeq+"").val());
        	$('#tmpLeaseRate3').val($("#priceLeaseRate3"+priceLnSeq+"").val());
        }
        // 감정가액산출2 click
        function fn_price2NoClk(cnt){
        	
        	$('#pRowInNo').val(cnt);
        	$('#pLeGuNm').val($("#price2ExampleGuNm"+cnt+"").val());
        	$('#pLeGuCd').val($("#price2ExampleGuCd"+cnt+"").val());
        	//본건 주소 넣기
        	$('#oriJuso').val($("#juso1").val());
        	$('#pJuso').val($("#price2Juso"+cnt+"").val());
        	$('#pJusoC').val($("#price2JusoC"+cnt+"").val());
        	$('#pCurrSizeDan').val($("#price2CurrSizeDan"+cnt+"").val());
        	$('#oriPriceDateS').val($("#estiDate").val());
        	//본건 시점수정 
        	//$('#oriPriceDateS').val($("#price2CurrSizeDan"+cnt+"").val());
        	
        	$('#pPriceDateS').val($("#price2PriceDateS"+cnt+"").val());
        	$('#pPriceRateC').val($("#price2PriceRateC"+cnt+"").val());
        	$('#pPriceRateCT').val($("#price2PriceRateC"+cnt+"").val());
        	//oriFloorMCode
        	//oriFloorMRate
        	$('#pFloorSCode').val($("#price2FloorSCode"+cnt+"").val());
        	$('#pFloorMRate').val($("#price2FloorMRate"+cnt+"").val());
        	$('#oriFloorMCode').val($("#price2FloorMCode"+cnt+"").val());
        	$('#oriFloorMRate').val($("#price2FloorMRate"+cnt+"").val());
        	$('#pFloorC').val($("#price2FloorC"+cnt+"").val());
        	
        	$('#pOfJangaRateM').val($("#ofJangaRate").val());
        	$('#pOfJangaRateS').val($("#price2OfJangaRateS"+cnt+"").val());
        	
        	var pOfJangaRateC=0;
        	var pOfJangaRateM=$("#ofJangaRate").val();
        	pOfJangaRateM = isNaN(parseFloat(pOfJangaRateM)) ? 0 : parseFloat(pOfJangaRateM);
        	var pOfJangaRateS=$("#price2OfJangaRateS"+cnt+"").val();
        	
        	$('#pOfJangaRateM').val($("#ofJangaRate").val());
        	$('#pOfJangaRateS').val($("#price2OfJangaRateS"+cnt+"").val());

        	pOfJangaRateC=(parseFloat(pOfJangaRateM)/parseFloat(pOfJangaRateS));
        	pOfJangaRateC=pOfJangaRateC.toFixed(2);
        	pOfJangaRateC = isNaN(parseFloat(pOfJangaRateC)) ? 0 : parseFloat(pOfJangaRateC);

        	$('#pOfJangaRateC').val(pOfJangaRateC);
        	
        	$('#pFactorTot').val($("#price2FactorTot"+cnt+"").val());
        	$('#pApasDan').val($("#price2ApasDan"+cnt+"").val());
        	$('#pApplDan').val($("#price2ApplDan"+cnt+"").val());
        	
        	var estiDate=$("#estiDate").val();
        	var pPriceDateS =$("#price2PriceDateS"+cnt+"").val();
        	
        	fn_cal_gap(pPriceDateS,estiDate);
        	
        }
        
        function fn_cal_gap(input1,input2){
        	var date1 = new Date(input1.substr(0,4),input1.substr(4,2)-1,input1.substr(6,2));
			var date2 = new Date(input2.substr(0,4),input2.substr(4,2)-1,input2.substr(6,2));
			var interval = date2 - date1;
			var day = 1000*60*60*24;
			var month = day*30;
			var year = month*12;
			
			var resultValue=parseInt(interval/month) + "개월 경과";
			$("#gapMonth").val(resultValue);

        }
        
        function fn_priceAddClk(){
        	//all clean;
        	$('#tmpLnSeq').val(0);
			$('#tmpJuso').val('');
			$('#tmpLotNum').val('');
			$('#tmpDistance').val('');
			$('#tmpHouseCnt').val(0);
			$('#tmpBYear').val(0);
			$('#tmpElapYear').val(0);
			$('#tmpCbStruc').val('');
			$('#tmpNumYear').val(0);
			$('#tmpCheckYn1').val('N');
			$('#tmpOnlySize1').val(0);
			$('#tmpCurrMinAmt1').val(0);
			$('#tmpCurrMaxAmt1').val(0);
			$('#tmpCurrAvgAmt1').val(0);
			$('#tmpCurrSizeDan1').val(0);
			$('#tmpLeaseAmt1').val(0);
			$('#tmpLeaseRate1').val('0');
			$('#tmpCheckYn2').val('N');
			$('#tmpOnlySize2').val(0);
			$('#tmpCurrMinAmt2').val(0);
			$('#tmpCurrMaxAmt2').val(0);
			$('#tmpCurrAvgAmt2').val(0);
			$('#tmpCurrSizeDan2').val(0);
			$('#tmpLeaseAmt2').val(0);
			$('#tmpLeaseRate2').val(0);
			$('#tmpCheckYn3').val('N');
			$('#tmpOnlySize3').val(0);
			$('#tmpCurrMinAmt3').val(0);
			$('#tmpCurrMaxAmt3').val(0);
			$('#tmpCurrAvgAmt3').val(0);
			$('#tmpCurrSizeDan3').val(0);
			$('#tmpLeaseAmt3').val(0);
			$('#tmpLeaseRate3').val(0);
			
			$("input:checkbox[id='tmpCheckYn31']").prop("checked", false);
			$("input:checkbox[id='tmpCheckYn11']").prop("checked", false);
			$("input:checkbox[id='tmpCheckYn21']").prop("checked", false);
        	
        	//lnSeq No 가지고 오기
        }
        function fn_pricePlusClk(){

	           var priceJuso=$('#tmpJuso').val();
	           var priceLotNum=$('#tmpLotNum').val();
	           var priceDistance=$('#tmpDistance').val();
	           var tmpHouseCnt=$('#tmpHouseCnt').val();
	           var priceBYear=$('#tmpBYear').val();
	           var priceElapYear=$('#tmpElapYear').val();
	           var priceCbStruc=$('#tmpCbStruc').val();
	           var priceNumYear=$('#tmpNumYear').val();
	           var priceOnlySize1=$('#tmpOnlySize1').val();
	           var priceCheckYn1=$("#tmpCheckYn1").val();
	           
	           var priceCurrMinAmt1=$("#tmpCurrMinAmt1").val();
	           var priceCurrMaxAmt1=$("#tmpCurrMaxAmt1").val();
	           var priceCurrAvgAmt1=$("#tmpCurrAvgAmt1").val();
	           var priceCurrSizeDan1=$("#tmpCurrSizeDan1").val();
	           var priceLeaseAmt1=$("#tmpLeaseAmt1").val();
	           var priceLeaseRate1=$("#tmpLeaseRate1").val();
	           
	           var priceCheckYn2=$("#tmpCheckYn2").val();
	           var priceOnlySize2=$("#tmpOnlySize2").val();
	           var priceCurrMinAmt2=$("#tmpCurrMinAmt2").val();
	           var priceCurrMaxAmt2=$("#tmpCurrMaxAmt2").val();
	           var priceCurrAvgAmt2=$("#tmpCurrAvgAmt2").val();
	           var priceCurrSizeDan2=$("#tmpCurrSizeDan2").val();
	           var priceLeaseAmt2=$("#tmpLeaseAmt2").val();
	           var priceLeaseRate2=$("#tmpLeaseRate2").val();
	           
	           var priceCheckYn3=$("#tmpCheckYn3").val();
	           var priceOnlySize3=$("#tmpOnlySize3").val();
	           var priceCurrMinAmt3=$("#tmpCurrMinAmt3").val();
	           var priceCurrMaxAmt3=$("#tmpCurrMaxAmt3").val();
	           var priceCurrAvgAmt3=$("#tmpCurrAvgAmt3").val();
	           var priceCurrSizeDan3=$("#tmpCurrSizeDan3").val();
	           var priceLeaseAmt3=$("#tmpLeaseAmt3").val();
	           var priceLeaseRate3=$("#tmpLeaseRate3").val();
	           var priceOfJanga=$("#tmpOfJanga").val();
	           var cntNo=0;
	           
	           
	          // console.log("priceOfJanga===>"+priceOfJanga);
	           
	           var tmpLnSeq=$("#tmpLnSeq").val();
	           if(tmpLnSeq=='0'){ // 신규로 들어오는 경우
	           
		           var es01_w02_p02Es2142Cnt=$("#es01_w02_p02Es2142Cnt").val();   // 리스트 cnt
	      	     	   es01_w02_p02Es2142Cnt=parseInt(es01_w02_p02Es2142Cnt)+parseInt(1);	
		           
	      	 	       cntNo=es01_w02_p02Es2142Cnt;
		              $("#es01_w02_p02Es2142Cnt").val(es01_w02_p02Es2142Cnt);
		              
		            var rowCnt=es01_w02_p02Es2142Cnt;
		  	        var addText =
		  	        	'<tr name="divPrice" id="divPrice" onclick="fn_priceNoClk('+cntNo+')" >'+
		  	        	'	<td><input type=text name=priceLnSeq id=priceLnSeq'+cntNo+' value="'+cntNo+'"></input></td>'+
		  	        	'	<td><input type=text name=priceJuso id=priceJuso'+cntNo+' value="'+priceJuso+'"></input></td>'+
		  	        	'	<td><input type=text name=priceLotNum id=priceLotNum'+cntNo+' value="'+priceLotNum+'"></input></td>'+
		  	        	'		<input type=hidden name=priceDistance id=priceDistance'+cntNo+' value="'+priceDistance+'"></input></td>'+
		  	        	'		<input type=hidden name=priceHouseCnt id=priceHouseCnt'+cntNo+' value="'+tmpHouseCnt+'"></input></td>'+
		  	        	'		<input type=hidden name=priceBYear id=priceBYear'+cntNo+' value="'+priceBYear+'" maxlength=4></input></td>'+
		  	        	'		<input type=hidden name=priceElapYear id=priceElapYear'+cntNo+' value="'+priceElapYear+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCbStruc id=priceCbStruc'+cntNo+' value="'+priceCbStruc+'"></input></td>'+
		  	        	'		<input type=hidden name=priceNumYear id=priceNumYear'+cntNo+' value="'+priceNumYear+'"></input></td>	'+	
		  	        	'		<input type=hidden name=priceCheckYn1 id=priceCheckYn1'+cntNo+' value="'+priceCheckYn1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceOnlySize1 id=priceOnlySize1'+cntNo+' value="'+priceOnlySize1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrMinAmt1 id=priceCurrMinAmt1'+cntNo+' value="'+priceCurrMinAmt1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrMaxAmt1 id=priceCurrMaxAmt1'+cntNo+' value="'+priceCurrMaxAmt1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrAvgAmt1 id=priceCurrAvgAmt1'+cntNo+' value="'+priceCurrAvgAmt1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrSizeDan1 id=priceCurrSizeDan1'+cntNo+' value="'+priceCurrSizeDan1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceLeaseAmt1 id=priceLeaseAmt1'+cntNo+' value="'+priceLeaseAmt1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceLeaseRate1 id=priceLeaseRate1'+cntNo+' value="'+priceLeaseRate1+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCheckYn2 id=priceCheckYn2'+cntNo+' value="'+priceCheckYn2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceOnlySize2 id=priceOnlySize2'+cntNo+' value="'+priceOnlySize2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrMinAmt2 id=priceCurrMinAmt2'+cntNo+' value="'+priceCurrMinAmt2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrMaxAmt2 id=priceCurrMaxAmt2'+cntNo+' value="'+priceCurrMaxAmt2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrAvgAmt2 id=priceCurrAvgAmt2'+cntNo+' value="'+priceCurrAvgAmt2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrSizeDan2 id=priceCurrSizeDan2'+cntNo+' value="'+priceCurrSizeDan2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceLeaseAmt2 id=priceLeaseAmt2'+cntNo+' value="'+priceLeaseAmt2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceLeaseRate2 id=priceLeaseRate2'+cntNo+' value="'+priceLeaseRate2+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCheckYn3 id=priceCheckYn3'+cntNo+' value="'+priceCheckYn3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceOnlySize3 id=priceOnlySize3'+cntNo+' value="'+priceOnlySize3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrMinAmt3 id=priceCurrMinAmt3'+cntNo+' value="'+priceCurrMinAmt3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrMaxAmt3 id=priceCurrMaxAmt3'+cntNo+' value="'+priceCurrMaxAmt3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrAvgAmt3 id=priceCurrAvgAmt3'+cntNo+' value="'+priceCurrAvgAmt3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceCurrSizeDan3 id=priceCurrSizeDan3'+cntNo+' value="'+priceCurrSizeDan3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceLeaseAmt3 id=priceLeaseAmt3'+cntNo+' value="'+priceLeaseAmt3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceLeaseRate3 id=priceLeaseRate3'+cntNo+' value="'+priceLeaseRate3+'"></input></td>'+
		  	        	'		<input type=hidden name=priceOfJanga id=priceOfJanga'+cntNo+' value="'+priceOfJanga+'"></input></td>'+
		  	        	'	</td>'+
		  	        	' </tr>';
		  	        	var trHtml = $( "tr[name=divPrice]:last" ); //last를 사용하여 trStaff라는 명을 가진 마지막 태그 호출
		  		        trHtml.after(addText); //마지막 trStaff명 뒤에 붙인다.
	  		        
	           }else{ // 수정 하면 해당 값을 update함
	        	   cntNo=tmpLnSeq;

	        	   $("#priceJuso"+cntNo+"").val(priceJuso);
	        	   $("#priceLotNum"+cntNo+"").val(priceLotNum);
	        	   $("#priceDistance"+cntNo+"").val(priceDistance);
	        	   $("#priceHouseCnt"+cntNo+"").val(tmpHouseCnt);
	        	   $("#priceBYear"+cntNo+"").val(priceBYear);
	        	   $("#priceElapYear"+cntNo+"").val(priceElapYear);
	        	   $("#priceCbStruc"+cntNo+"").val(priceCbStruc);
	        	   $("#priceNumYear"+cntNo+"").val(priceNumYear);
	        	   $("#priceOnlySize1"+cntNo+"").val(priceOnlySize1);
	        	   $("#priceCheckYn1"+cntNo+"").val(priceCheckYn1);
	        	   $('#priceCurrMinAmt1'+cntNo+'').val(priceCurrMinAmt1);
	        	   $('#priceCurrMaxAmt1'+cntNo+'').val(priceCurrMaxAmt1);
	        	   $('#priceCurrAvgAmt1'+cntNo+'').val(priceCurrAvgAmt1);
	        	   $('#priceCurrSizeDan1'+cntNo+'').val(priceCurrSizeDan1);
	        	   $('#priceLeaseAmt1'+cntNo+'').val(priceLeaseAmt1);
	        	   $('#priceLeaseRate1'+cntNo+'').val(priceLeaseRate1);
	        	   $("#priceCheckYn2"+cntNo+"").val(priceCheckYn2);
	        	   $("#priceOnlySize2"+cntNo+"").val(priceOnlySize2);
	        	   $("#priceCurrMinAmt2"+cntNo+"").val(priceCurrMinAmt2);
	        	   $("#priceCurrMaxAmt2"+cntNo+"").val(priceCurrMaxAmt2);
	        	   $("#priceCurrAvgAmt2"+cntNo+"").val(priceCurrAvgAmt2);
	        	   $("#priceCurrSizeDan2"+cntNo+"").val(priceCurrSizeDan2);
	        	   $("#priceLeaseAmt2"+cntNo+"").val(priceLeaseAmt2);
	        	   $("#priceLeaseRate2"+cntNo+"").val(priceLeaseRate2);
	        	   $("#priceCheckYn3"+cntNo+"").val(priceCheckYn3);
	        	   $('#priceOnlySize3'+cntNo+'').val(priceOnlySize3);
	        	   $('#priceCurrMinAmt3'+cntNo+'').val(priceCurrMinAmt3);
	        	   $('#priceCurrMaxAmt3'+cntNo+'').val(priceCurrMaxAmt3);
	        	   $('#priceCurrAvgAmt3'+cntNo+'').val(priceCurrAvgAmt3);
	        	   $('#priceCurrSizeDan3'+cntNo+'').val(priceCurrSizeDan3);
	        	   $('#priceLeaseAmt3'+cntNo+'').val(priceLeaseAmt3);
	        	   $('#priceLeaseRate3'+cntNo+'').val(priceLeaseRate3);
	        	   $('#priceOfJanga'+cntNo+'').val(priceOfJanga);

	           }
        }
   
        function fn_add_DividendCalcul(){

        	var eraYnTpCnt= $("input[name=eraYnTp]:checkbox" ).length;
        	eraYnTpCnt=eraYnTpCnt+1;

        	var addText =
        	'<tr name="dividendCalcul" id="dividendCalcul" >'+
        	'<td>'+
        	'<select name="dispRank" id="dispRank" cssClass="use">'+
        	'	<c:forEach var="rankingCodeList" items="${selectRankingCodeList}" varStatus="status">'+
        	'		<option value="${rankingCodeList.cdCode}">${rankingCodeList.cdDesc}</option>'+
        	'	</c:forEach>'+
        	'</select>'+
        	'</td>'+
        	'<td><input type="text" name="rightDate" id="rightDate'+eraYnTpCnt+'"  value=""></input> </td>'+
        	'<td><input type=checkbox name=hiteYnTp id="hiteYnTp" onclick=fn_hiteYnCheck()></input>'+
        	'<input type=hidden name="hiteYn" id="hiteYn'+eraYnTpCnt+'" value="N"></input>'+
        	'</td>'+
        	'<td><input type="text" name="rightPerson" id="rightPerson'+eraYnTpCnt+'" value=""></input></td>'+
        	'<td>'+
        	'<select name="rightCode" id="rightCode" cssClass="use">'+
        	'	<c:forEach var="contentRightList" items="${selectContentRightList}" varStatus="status">'+
        	'		<option value="${contentRightList.cdCode}" value2="${contentRightList.rightCode}" >${contentRightList.cdDesc}</option>'+
        	'	</c:forEach>'+
        	'</select>'+
        	'</td>'+
        	'<td><input type=checkbox name="eraYnTp" id="eraYnTp" onclick=fn_eraYnCheck() ></input>'+
        	'<input type=hidden name="eraYn" id="eraYn'+eraYnTpCnt+'" value="N"></input>'+
        	'</td>'+
        	'<td><input type=text name="credSelfAmtOrg" id="credSelfAmtOrg" value="0"></input></td>'+
        	'<td><input type=text name="credCombAmtOrg" id="credCombAmtOrg'+eraYnTpCnt+'" value="" onkeypress="credMaxAmtCheck()"></input>'+
        	'<input type=hidden name="proRateCode" id="proRateCode'+eraYnTpCnt+'" value=""></input>'+
        	'<input type="button" name="delDividendCalcul" value="del"/>'+
        	'</td>'+
        	'</tr>';
	        var trHtml = $( "tr[name=dividendCalcul]:last" ); //last를 사용하여 trStaff라는 명을 가진 마지막 태그 호출
	        trHtml.after(addText); //마지막 trStaff명 뒤에 붙인다.
	        
	        var dividendTableCnt=$("#dividendTableCalculationListCnt").val();   // 리스트 cnt
	            dividendTableCnt=parseInt(dividendTableCnt)+parseInt(1);	
	            $("#dividendTableCalculationListCnt").val(dividendTableCnt);
        }
        
        $(document).on("click","input[name=delDividendCalcul]",function(){
            var trHtml = $(this).parent().parent();
            trHtml.remove(); //tr 테그 삭제
            var dividendTableCnt=$("#dividendTableCalculationListCnt").val();   // 리스트 cnt
            dividendTableCnt=parseInt(dividendTableCnt)-parseInt(1);	
            $("#dividendTableCalculationListCnt").val(dividendTableCnt);
        });
        
        function fn_Structure(){
        	var janga=0;
        	var jangaValue= $("#cbStruc > option:selected").attr("value");
			var janga= $("#cbStruc > option:selected").attr("value2");
			var jangaRate=0;
			var elapYear =$("#elapYear").val(); 
			$('#num_year').val(janga);
			// 잔가율 구하기 
			jangaRate = (parseInt(janga)-parseInt(elapYear))/parseInt(janga);
			
			if(jangaRate < 0 ){
				jangaRate=0.2;
			}else{
				jangaRate=jangaRate.toFixed(2)
			}
			//console.log('jangaRate====>'+jangaRate)
			$('#ofJangaRate').val(jangaRate);
			
        }
        function fn_interiorCosts(){
			var intRepAmt=0; //금액 원 ==> 
			var increaseAmt=0; //공시가격 원 ==>
			var doCheck= $("#interiorCosts > option:selected").attr("value");
			var rate= $("#interiorCosts > option:selected").attr("value2");
			var intRepDan= $("#interiorCosts > option:selected").attr("value3");
			var cbTotSize=$("#cbTotSize").val();  //보수평형 ==> 
			     cbTotSize= isNaN(parseFloat(cbTotSize)) ? 0 : parseFloat(cbTotSize);	
	        var cbTotSizePy=$("#cbTotSizePy").val();
	    	     cbTotSizePy= isNaN(parseFloat(cbTotSizePy)) ? 0 : parseFloat(cbTotSizePy);
	    		     
			if(doCheck!='00'){
			//보수평형 	
			intRepSize=parseFloat(cbTotSizePy)*(parseInt(rate)/100);
			intRepSize=intRepSize.toFixed(2);
			
			intRepSizePy=parseFloat(cbTotSize)*(parseFloat(rate)/100);
			intRepSizePy=intRepSizePy.toFixed(2);
			
			intRepAmt=parseFloat(intRepSize)*parseFloat(intRepDan);
			intRepAmt=parseInt(intRepAmt)
			increaseAmt=$("#applAmt").val(); 
			increaseAmt=parseFloat(intRepAmt)+parseFloat(increaseAmt);
			
			$('#intRepSize').val(intRepSize);
			$('#intRepSizePy').val(intRepSizePy);
			$('#intRepDan').val(intRepDan);
			$('#intRepAmt').val(intRepAmt);
			$('#increaseAmt').val(increaseAmt);
			$('#increaseAmt1').val(increaseAmt);
			$('#plMinBidAmt').val(increaseAmt);
			$('#buildIncreaseAmt').val(increaseAmt);
			$('#buildlastIncreaseAmt').val(increaseAmt);
			//$('#applAmt').val(increaseAmt);
			$('#fnlIncAmt').val(increaseAmt);
			
			
			}else{
				applAmt=$("#applAmt").val(); 
				$('#intRepSize').val("0");
				$('#intRepSizePy').val("0");
				$('#intRepDan').val("0");
				$('#intRepAmt').val("0");
				$('#increaseAmt').val("0");
				$('#buildIncreaseAmt').val(applAmt);
				$('#buildlastIncreaseAmt').val(applAmt);
				$('#increaseAmt1').val(applAmt);
				$('#increaseAmt').val(applAmt);
				$('#plMinBidAmt').val(applAmt);
			}
			changeExpectedBidPrice();
	
        }
        
        function fn_add_houseRental(){
        	var addText ='<tr name="houseRental" id="houseRental" >'+
					'<td>'+
					'<select name="numberGu" id="numberGu" cssClass="use">'+
						'<c:forEach var="serialNumberGuList" items="${selectSerialNumberGuList}" varStatus="status">'+
						'	<option value="${serialNumberGuList.cdCode}">${serialNumberGuList.cdDesc}</option>'+
						'</c:forEach>'+
					'</select>'+
				'</td>'+
				'<td><input type="text" name="resiName" id="resiName"  value=""></input></td>'+
				'<td><input type="text" name="resiRmCnt" id="resiRmCnt"  value=""></input> </td>'+
				'<td><input type="checkbox"  name="fxdateYnChk" id="fxdateYnChk" onclick=fn_fxdateYnChk()></input>'+
				'<input type="hidden" name="fxdateYn" id="fxdateYn"  value="N" ></input>'+
				'</td>'+
				'<td><input type="text" name="possARmCnt" id="possARmCnt"  onkeypress="fn_add_houseRental2()" value=""></input></td>'+
				'<td><input type="text" name="hleaseAmt" id="hleaseAmt"  value=""></input></td>'+
				'<td><input type="text" name="repBeSecAmt" id="repBeSecAmt" value=""></input></td>'+
				'<td><input type="text" name="fxleaAmt" id="fxleaAmt" value=""></input></td>'+
				'<td><input type="text" name="fxleaNoAmt" id="fxleaNoAmt" value=""></input><input type="button" name="delHouseRental" value="del"/></td>'+
			  '</tr>';
			  
        	  var trHtml = $( "tr[name=houseRental]:last" ); //last를 사용하여 trStaff라는 명을 가진 마지막 태그 호출
              trHtml.after(addText); //마지막 trStaff명 뒤에 붙인다.
              
              fn_add_houseRental2();
        }
        
        function fn_fxdateYnChk(){
       	 for ( var i = 0; i < $("input[name=fxdateYnChk]:checkbox" ).length; i++) {
       		  if ($( "input[name=fxdateYnChk]:checkbox")[i].checked == true ) {
       			  $("input[name=fxdateYn]")[i].value = 'Y';
       			  $("input[name=fxleaAmt]")[i].value =  $("input[name=hleaseAmt]")[i].value;
       			 $("input[name=fxleaNoAmt]")[i].value = 0;
 
       		  }else{
       			  $("input[name=fxdateYn]")[i].value = 'N';
       			  $("input[name=fxleaNoAmt]")[i].value =  $("input[name=hleaseAmt]")[i].value;
       			$("input[name=fxleaAmt]")[i].value = 0;
       		  }
       	  }
       }
        
        $(document).ready(function(){
            $("input[name=hleaseAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_fxdateYnChk();
                }
            }); 
        });
        
        $(document).on("click","input[name=delHouseRental]",function(){
            var trHtml = $(this).parent().parent();
            trHtml.remove(); //tr 테그 삭제
            fn_add_houseRental2();
        });
        
        function fn_add_houseRental2(){
        
        	var houseRentalCnt=$("#houseRental tr").length;
        	var dong= $("#dong").val(); 
        	var ho= $("#ho").val(); 
        	var resiName =dong.concat('-',ho);
        	var repBeSecAmt= $("#repBeSecAmt").val(); 
        	var tempCredCombAmtOrg=0;
        	var tempPossARmCnt=0;
        	var tempPossARmCntTotal=0;
        	var possARmCnt=0;
        	
        	
        	var dividendTableCalculationListCnt=$("#dividendTableCalculationListCnt").val(); 
        	var rightCodeCnt=$('input:checkbox[name=rightCode]').length; 
        	
        	 for ( var i = 0; i < $("input[name=fxdateYnChk]:checkbox" ).length; i++) {
        		 
        		 possARmCnt=$("input[name=possARmCnt]")[i].value ;
        		 possARmCnt=isNaN(parseInt(possARmCnt)) ? 0 : parseInt(possARmCnt);
        		 
        		  $("input[name=resiName]")[i].value = resiName;
        		  $("input[name=repBeSecAmt]")[i].value = repBeSecAmt*possARmCnt;
        		  tempCredCombAmtOrg=parseInt(tempCredCombAmtOrg)+parseInt(repBeSecAmt);
        		  tempPossARmCntTotal=tempPossARmCnt+tempPossARmCntTotal;
        	}

        	 for ( var ii = 1; ii < dividendTableCalculationListCnt; ii++) {
         			rightCode= $("#rightCode"+ii+" > option:selected").attr("value");
         		//소액 보증금 내역 넣기
         		if(rightCode=='003'){
         			
         				$("#credCombAmtOrg"+ii+"").val(tempCredCombAmtOrg*tempPossARmCntTotal);
         		}
         		
         	}
        	 credMaxAmtCheck();
        }
        
        function credMaxAmtCheck(){
        	var dividendTableCalculationListCnt=$("#dividendTableCalculationListCnt").val(); 
        	var tmpCredMaxAmt=0;
        	var credMaxAmt=0;
        	var eraYnTpCnt= $("input[name=eraYnTp]:checkbox" ).length;
        		
        	for ( var i = 0; i < $("input[name=eraYnTp]:checkbox" ).length; i++) {
        		if ($( "input[name=eraYnTp]:checkbox")[i].checked == false ) {

	        		tmpCredMaxAmt=$("input[name=credCombAmtOrg]")[i].value ;
	        		tmpCredMaxAmt=parseInt(tmpCredMaxAmt);
	        		console.log("tmpCredMaxAmt==>"+tmpCredMaxAmt);
	        		
	        		 if(i==0){
	        			 tmpCredMaxAmt = tmpCredMaxAmt;
	        			 credMaxAmt = tmpCredMaxAmt;
	        		 }else{
	           		  if(credMaxAmt>tmpCredMaxAmt){
	           			credMaxAmt=credMaxAmt;
	           		  }
	           		  if(tmpCredMaxAmt>credMaxAmt){
	           			credMaxAmt=tmpCredMaxAmt;
	           		  }
	           	  } 
        		}
        	}
        	
        	$('#credMaxAmt').val(credMaxAmt);
        	
        }

      //추가 버튼
        function fn_add_priceCaseD(){
     	   var trCnt=$("#piceCaseMTr").val();
     	  	trCnt=parseInt(trCnt)+parseInt(1);
     	   var caseDLnSeq=$("#piceCaseDMTr").val();
     	   if(caseDLnSeq==""||caseDLnSeq=="null"||caseDLnSeq==null){
     		   alert('사례번호를 선택 해주세요.');
     		   return;
     	   }
 
             var addText ='<tr name="priceCaseD" id="priceCaseD'+caseDLnSeq+'">'+
				     		'<td><input type="checkbox" name="piceCaseDCheck" id="piceCaseDCheck"  onclick="fn_piceCaseDCheckBox()"> </input> </td>'+
				     		'<td><input type=text name="caseDbSizePy" id="caseDbSizePy" value="0"></input></td>'+
				     		'<td><input type=text name="caseDLnSeq" id="caseDLnSeq" value="'+caseDLnSeq+'" readonly></input></td>'+
				     		'<td><input type=text name="caseDcurrMinAmt" id="caseDcurrMinAmt" value="0" onkeypress="fn_piceCaseDCheck()"></input></td>'+
				     		'<td><input type=text name="caseDcurrMaxAmt" id="caseDcurrMaxAmt" value="0" onkeypress="fn_piceCaseDCheck()"></input></td>'+
				     		'<td><input type=text name="caseDcurrAvgAmt" id="caseDcurrAvgAmt" value="0" readonly></input></td>'+
				     		'<td><input type=text name="caseDcurrPyDan" id="caseDcurrPyDan" value="0"></input></td>'+
				     		'<td><input type=text name="caseDleaseAmt" id="caseDleaseAmt" value="0"></input></td>'+
				     		'<td><input type=text name="caseDleaseRate" id="caseDleaseRate" value="0"></input>'+
				     			'<input type=hidden name="caseDCheckYn" id="caseDCheckYn" value="0"></input>'+
				     			'<input type=hidden name="caseDrno" id="caseDrno" value="0"> </input>'+
				     			'<input type="button" name="delPriceCaseD" value="del"/> '+
				     		'</td>'+
				     	'</tr>';
				     
             var trHtml = $( "tr[name=priceCaseD]:last" ); //last를 사용하여 trStaff라는 명을 가진 마지막 태그 호출
             trHtml.after(addText); //마지막 trStaff명 뒤에 붙인다.
             
             $('#piceCaseMTr').val(trCnt);
         }
      
         $(document).on("click","input[name=delPriceCaseD]",function(){
             var trHtml = $(this).parent().parent();
             trHtml.remove(); //tr 테그 삭제
         });
         
         function fn_piceCaseDCheckBox(){
        	 for ( var i = 0; i < $("input[name=piceCaseDCheck]:checkbox" ).length; i++) {
        		  if ($( "input[name=piceCaseDCheck]:checkbox")[i].checked == true ) {
        			  $("input[name=caseDCheckYn]")[i].value = '1';
        		  }else{
        			  $("input[name=caseDCheckYn]")[i].value = '0';
        		  }
        	 }
        	 fn_piceCaseDCheck();
        }
        
         function fn_piceCaseDList_Cont(seq){
     		var priceCaseMCnt=$("#priceCaseM tr").length;
     		for(i=1;i<=priceCaseMCnt;i++){
     			if(i==seq){
     				//$("#priceCaseD"+seq).show();
     				$("#priceCaseD"+seq).css("display","block");  
     				
     			}else{
     				//$("#priceCaseD"+seq).hide();
     				$("#priceCaseD"+seq).css("display","none");
     			}
     		}
          }

      //추가 버튼
        function fn_add_priceCaseM(){
     	   var trCnt=$("#priceCaseM tr").length;
     	     trCnt=parseInt(trCnt)+parseInt(1);
             var addText ='<tr name="priceCaseM" id="priceCaseM">'+
				         	'<td><input type="text" name="caMLnSeq" id="caMLnSeq" value="'+trCnt+'" onclick=fn_piceCaseDCheck('+trCnt+') readonly></input></td>'+
				        	'<td><input type="text" name="caMBName" id="caMBName" value="" onclick=fn_priceCaseMCheck('+trCnt+')></input></td>'+
				        	'<td><input type="text" name="caMJuso" id="caMJuso" value="" onclick=fn_priceCaseMCheck('+trCnt+')></input></td>'+
				        	'<td>선택&nbsp;</td>'+
				        	'<td><input type="text" name="caMBYear" id="caMBYear" maxlength=4 value="" onclick=fn_priceCaseMCheck('+trCnt+')></input></td>'+
				        	'<td><input type="text" name="caMHouseCnt" id ="caMHouseCnt" value=""onclick=fn_priceCaseMCheck('+trCnt+')></input>'+
				        	'<input type="button" name="delPriceCaseM" value="del"/></td>'+
 			            '</tr>';
             var trHtml = $( "tr[name=priceCaseM]:last" ); //last를 사용하여 trStaff라는 명을 가진 마지막 태그 호출
             trHtml.after(addText); //마지막 trStaff명 뒤에 붙인다.
 
             $('#priceCaseMTr').val(trCnt);
         };

         $(document).on("click","input[name=delPriceCaseM]",function(){
             var trHtml = $(this).parent().parent();
             trHtml.remove(); //tr 테그 삭제
         });
        
      //추가 버튼
       function fn_addAuction(){
    	   var trCnt=$("#priceAucTr").val();
    	   var priceAucTrCnt=$("#priceAucTrCnt").val();
    	   var tempCnt=parseInt(priceAucTrCnt);
    	   var aucNoNm="";
    	   if(parseInt(priceAucTrCnt)>parseInt(trCnt)) trCnt=parseInt(priceAucTrCnt);
    	   
    	   trCnt=parseInt(trCnt)+parseInt(1);
    	   
    	   var forCnt;
    	   let arr = new Array();
    		   <c:forEach var="forCnt" items="${selectEs01_w03_p01Div193List}" varStatus="status">
    		      forCdCode =${forCnt.cdCode};
	    		   if(forCdCode == trCnt ){
	    			   aucNoNm='${forCnt.cdDesc}';   
	    		   }
    		   </c:forEach>
    		
            var addText ='<tr name="priceAuction" id="priceAuction">'+
				          '<input type=text name=auLnSeq id=auLnSeq value='+trCnt+'></input>'+
						  '<td><input type=text name=auLnSeqNm id=auLnSeqNm value='+aucNoNm+'></input></td>'+
						  '<td><input type="text" name="auNo" id="auNo" value=""></input>&nbsp;</td>'+
						  '<td><input type="text" name="auJuso" id="auJuso" value=""></input>&nbsp;</td>'+
						  '<td>'+
							'<select name="auFloorCode" id="auFloorCode" cssClass="use"  onchange="javascript:changePriceAuction('+trCnt+');">'+
							'<c:forEach var="auFloorCodeList" items="${selectEs01_w02_p02DIV111List}" varStatus="status">'+
							'<option value="${auFloorCodeList.cdCode}"  value2="${auFloorCodeList.idx}" <c:if test="${auFloorCodeList.cdCode eq priceAuctionList.floorCode }">selected</c:if>>${auFloorCodeList.cdDesc}</option>'+
							'</c:forEach>'+
							'</select>'+
							'</td>'+
							'<td><input type="text" name="auFloorRate" id=auFloorRate'+trCnt+' value="" readonly></input></td>'+
							'<td><input type="text" name="auOnlySize" id=auOnlySize'+tempCnt+' value=""></input>&nbsp;</td>'+
							'<td><input type="text" name="auBYear" id="auBYear'+tempCnt+'" maxlength=4 value="" onKeyPress="if (event.keyCode==13){fn_auBYear('+tempCnt+')}" > </input>&nbsp;</td>'+
							'<td><input type="text" name="auElapYear" id=auElapYear'+trCnt+' value="" readonly></input>&nbsp;</td>'+
							'<td>'+
							'	<select name="auCbStruc" id="auCbStruc" cssClass="use"  onchange="javascript:changeAuCbStruc('+trCnt+');">'+
							'		<c:forEach var="auCbStrucList" items="${selectEs01_w02_p02DIV301List}" varStatus="status">'+
							'			<option value="${auCbStrucList.cdCode}"  value2="${auCbStrucList.numYear}" <c:if test="${auCbStrucList.cdCode eq priceAuctionList.cbStruc }">selected</c:if>>${auCbStrucList.cdDesc}</option> '+
							'		</c:forEach>'+
							'	</select>'+
							'</td>'+
							'<td><input type="text" name="auNumYear" id=auNumYear'+trCnt+' value="" readonly></input>&nbsp;</td> '+
							'<td><input type="text" name="auLawAmt" id=auLawAmt'+tempCnt+' value="" onclick="fn_auBidAmtCnt('+tempCnt+')"></input>&nbsp;</td>'+
							'<td><input type="text" name="auCurrSizeDan" id=auCurrSizeDan'+tempCnt+' value="" onclick="fn_auBidAmtCnt('+tempCnt+' )"></input>&nbsp;'+
							'<td><input type="text" name="auBidAmt" id=auBidAmt'+tempCnt+' value="" onclick="fn_auBidAmtCnt('+tempCnt+' )"></input>&nbsp;</td>'+
							'<td><input type="hidden" name="auOfJanga" id=auOfJanga'+tempCnt+' value=""></input>&nbsp;'+
							'<td><input type="text" name="auBidRate" id="auBidRate'+tempCnt+' " value=""></input>&nbsp;<input type="button" name="delAuction" value="del"/></td>'+
			            '</tr>';
            var trHtml = $( "tr[name=priceAuction]:last" ); //last를 사용하여 trStaff라는 명을 가진 마지막 태그 호출
            trHtml.after(addText); //마지막 trStaff명 뒤에 붙인다.
            $('#priceAucTr').val(trCnt);
        };

        $(document).on("click","input[name=delAuction]",function(){
            var trHtml = $(this).parent().parent();
            trHtml.remove(); //tr 테그 삭제
            fn_priceAuctionCheck();
        });
        
        function fn_Search_Button(){
        	document.listForm.action = "<c:url value='/es01/sampleList1.do'/>";
           	document.listForm.submit();
        }
       
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
        
        function changeMarketDiv(){
        	var value1 = $("#marketDiv > option:selected").attr("value");

        	if(value1==0){
        		var daepyoName = $("#daepyoName").val();
        		$('#marketName').val("자체");
        		$('#daepyoName').val(daepyoName);
        	}else{
        		//업소 
        		$('#marketName').val("");
        		$('#daepyoName').val("");
        	}
        	
        }
       
      //입찰표_가임대보증금 적용지역 변경시 수정할거
        function changeBidTablePossAArea(obj){
        	var value1 = $("#possAAreaBid > option:selected").attr("value");
        	var value2 = $("#possAAreaBid > option:selected").attr("value2");
        	var dividendTableCalculationListCnt=$("#dividendTableCalculationListCnt").val();   // 리스트 cnt
        	var contentRightCnt=$("#contentRightCnt").val();  // 권리내용 cnt
        	var rightCode="";
        	var rightCodeCnt=parseInt(dividendTableCalculationListCnt)+parseInt(1);
        	var culationHousingRentalDepositCnt=$("#culationHousingRentalDepositCnt").val();  // 권리내용 cnt
        	    culationHousingRentalDepositCnt=parseInt(culationHousingRentalDepositCnt);
        	var culationHousingRentalDepositAmt;
        	    
        	$(document).ready(function() {
        		$("#selecthPossAAmt").val(value1).prop("selected", true);
        		$("#hPossAArea").val(value1).prop("selected", true);
        		
                $('#hPossAAmt').val(value2);
                $('#repBeSecAmt').val(value2);
              
             		for ( var i = 1; i < rightCodeCnt; i++) {
                		//rightCode= $("#rightCode["+i+"] > option:selected").attr("value");
                		rightCode= $("#rightCode"+i+" > option:selected").attr("value");
                		//console.log("rightCode===>"+rightCode)
                		//소액 보증금 내역 넣기
                		if(rightCode=='003'){
                			if(culationHousingRentalDepositCnt > 0){
                				culationHousingRentalDepositAmt =culationHousingRentalDepositCnt *value2;
                				$("#credCombAmtOrg"+i+"").val(culationHousingRentalDepositAmt);
                			}
                			fn_add_houseRental2();
                		}
                }
 
            });
        }
      //배당표_가임대보증금 적용 범위 변경시 
       function changeDiviDendtPossAArea(obj){
        	var value1 = $("#selecthPossAAmt > option:selected").attr("value");
        	var value2 = $("#selecthPossAAmt > option:selected").attr("value2");
        	$(document).ready(function() {
        		$("#possAAreaBid").val(value1).prop("selected", true);
                $('#hPossAAmt').val(value2);
                $('#repBeSecAmt').val(value2);
            });
        }
      
       function changePriceAuction(cnt){
    	   var value2 = $("#auFloorCode > option:selected").attr("value2");
    	   $("#auFloorRate"+cnt+"").val(value2);
       }
       
       function changeAuCbStruc(cnt){
    	   var value2 = $("#auCbStruc > option:selected").attr("value2");
    	   $("#auNumYear"+cnt+"").val(value2);
       }
       function changeTmpCbStruc(){
    	   var value2 = $("#tmpCbStruc > option:selected").attr("value2");
    	   $("#tmpNumYear").val(value2);
    	   
    	   var jangaRate=0;
		   var elapYear =$("#tmpElapYear").val(); 
		   jangaRate = (parseInt(janga)-parseInt(elapYear))/parseInt(janga);
			
			if(jangaRate < 0 ){
				jangaRate=0.2;
			}else{
				jangaRate=jangaRate.toFixed(2)
			}
			//console.log('jangaRate====>'+jangaRate)
			$('#tmpOfJanga').val(jangaRate);
    	   
    	
       }
       
     //배당표_채권자중 최고 채권액 
       function changeAuctionCostList(obj){
    	    var frm=document.listForm;
        	var value1 = $("#auctionCode > option:selected").attr("value");
        	var value2 = $("#auctionCode > option:selected").attr("value2");
        	var rightCode="";
        	var dividendTableCalculationListCnt=$("#dividendTableCalculationListCnt").val();   // 리스트 cnt
        	var rightCodeCnt=parseInt(dividendTableCalculationListCnt)+parseInt(1);	
        	
        	var maxPrice="";
        	var maxPriceTmp="";
        	
        	
        	$(document).ready(function() {
        		$("#auctionCode").val(value1).prop("selected", true);
                $('#auctionAmt').val(value2);
                for ( var i = 1; i < rightCodeCnt; i++) {
                	
                	rightCode= $("#rightCode"+i+" > option:selected").attr("value");
            		//경매비용 넣기
            		if(rightCode=='001'){
            			$("#credCombAmtOrg"+i+"").val(value2);
            		}
            	}// end for
                fn_add_houseRental2();
                changeExpectedBidPrice();
            });
        }

        function fn_Press_Button(check){
        	if(check=='1'){
        		$('#inputSector').show();
        		$('#appraisedValue').hide();
        		$('#appraisedValue2').hide();
        		$('#appraisedValue3').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#commonReport').hide(); 
        	}else if(check=='2'){
        		$('#inputSector').hide();
        		$('#appraisedValue').show();
        		$('#appraisedValue2').hide();
        		$('#appraisedValue3').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#commonReport').hide(); 
        	}else if(check=='3'){
        		$('#inputSector').hide();
        		$('#appraisedValue').hide();
        		$('#appraisedValue2').hide();
        		$('#appraisedValue3').hide();
        		$('#successfulBidRate').show();
        		$('#dividendTable').hide();
        		$('#commonReport').hide(); 
        	}else if(check=='5'){
        		$('#inputSector').hide();
        		$('#appraisedValue').hide();
        		$('#appraisedValue2').hide();
        		$('#appraisedValue3').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').show();
        		$('#commonReport').hide(); 
        	}else if(check=='7'){
        		$('#inputSector').hide();
        		$('#appraisedValue').hide();
        		$('#appraisedValue2').hide();
        		$('#appraisedValue3').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#commonReport').show(); 
        	}else if(check=='8'){
        		$('#inputSector').hide();
        		$('#appraisedValue').hide();
        		$('#appraisedValue2').show();
        		$('#appraisedValue3').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#commonReport').hide(); 
        	}else if(check=='9'){
        		$('#inputSector').hide();
        		$('#commonReport').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#appraisedValue').hide();
        		$('#appraisedValue2').hide();
        		$('#appraisedValue3').show(); 
        	}
        }
       
     //--> 집합건물에 관한 사항    
     function fn_changeBuilding(){
    		var cbSizePy=0.3025;
    		var cbExmSizePy=0;
    		var cbPubSizePy=0;
    		var cbTotSize=0;
    		var cbTotSizePy=0;
    		var cbExmSize= $("#cbExmSize").val(); //전유면적
    			cbExmSize=isNaN(parseFloat(cbExmSize)) ? 0 : parseFloat(cbExmSize);	
        	var cbPubSize= $("#cbPubSize").val(); 
        		cbPubSize=isNaN(parseFloat(cbPubSize)) ? 0 : parseFloat(cbPubSize);	

        	var regiAmt= $("#regiAmt").val();
        		regiAmt=regiAmt.replaceAll(",","");
        		regiAmt=isNaN(parseInt(regiAmt)) ? 0 : parseInt(regiAmt);	
        	var regiDan=0;
        	var regiDanPy=0;
        	
        	var baseAmt= $("#baseAmt").val();
        		baseAmt=baseAmt.replaceAll(",","");
        		baseAmt=isNaN(parseInt(baseAmt)) ? 0 : parseInt(baseAmt);	
    		var baseDan=0;
    		var baseDanPy=0;
    		var secRate=0;
        	
        	cbExmSizePy=parseFloat(cbExmSize)*parseFloat(cbSizePy);
        	cbPubSizePy=parseFloat(cbPubSize)*parseFloat(cbSizePy);
        	cbExmSizePy=Math.floor(cbExmSizePy*100)/100;
        	cbPubSizePy=Math.floor(cbPubSizePy*100)/100;
        	cbTotSize=parseFloat(cbExmSize)+parseFloat(cbPubSize);
        	cbExmSize=isNaN(parseFloat(cbExmSize)) ? 0 : parseFloat(cbExmSize);	
        	cbTotSize=Math.floor(cbTotSize*100)/100;
        	cbTotSizePy=parseFloat(cbExmSizePy)+parseFloat(cbPubSizePy);
        	cbTotSizePy=Math.floor(cbTotSizePy*100)/100;

        	$("#cbExmSizePy").val(cbExmSizePy);
        	$("#cbPubSizePy").val(cbPubSizePy);
        	$("#cbTotSize").val(cbTotSize);
        	$("#cbTotSizePy").val(cbTotSizePy);
        	
        	$("#secRegiSize").val(cbExmSize);
        	$("#secNume").val(cbExmSize);
        	$("#secDeno").val(cbExmSize);
        	$("#secOfferSize").val(cbExmSize);
        	
        	secRate=Math.floor(cbExmSize)/Math.floor(cbExmSize);
        	secRate=isNaN(parseFloat(secRate)) ? 0 : parseFloat(secRate);	
        	
        	secRate=Math.floor(secRate*100);
        	$("#secRate").val(secRate);
        	
        	$("#secRegiSizeTmp").val(cbExmSize);
        	$("#secNumeTmp").val(cbExmSize);
        	$("#secDenoTmp").val(cbExmSize);
        	$("#secOfferSizeTmp").val(cbExmSize);
        	$("#secRateTmp").val(secRate);
        	
        	// 감정에 관한 사항 
        	//실거래가격
        	regiDan= parseInt(regiAmt)/parseFloat(cbTotSize);
        	regiDan=isNaN(parseFloat(regiDan)) ? 0 : parseFloat(regiDan);	
        	regiDan= Math.round(regiDan/1000)*1000;
        	 $("#regiDan").val(regiDan);
        		 
        	regiDanPy=parseInt(regiAmt)/parseFloat(cbTotSizePy);
        	regiDanPy=isNaN(parseFloat(regiDanPy)) ? 0 : parseFloat(regiDanPy);	
        	regiDanPy= Math.round(regiDanPy/1000)*1000;
        	 $("#regiDanPy").val(regiDanPy);
        	 
        	 baseDan= parseInt(baseAmt)/parseFloat(cbTotSize);
        	 baseDan=isNaN(parseInt(baseDan)) ? 0 : parseInt(baseDan);	
        	 baseDan= Math.round(baseDan/1000)*1000;
         	 $("#baseDan").val(baseDan);
         		 
         	baseDanPy=parseInt(baseAmt)/parseFloat(cbTotSizePy);
         	 baseDan=isNaN(parseInt(baseDan)) ? 0 : parseInt(baseDan);	
         	baseDanPy= Math.round(baseDanPy/1000)*1000;
         	 $("#baseDanPy").val(baseDanPy);

     }
     // 임력표 집합건물에 관한 사항 전유면적
        $(document).ready(function(){
            $("input[name=cbExmSize]").keydown(function (key) {
                if(key.keyCode == 13 || key.keyCode == 9 ){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     
     // 임력표 집합건물에 관한 사항 전유면적
        $(document).ready(function(){
            $("input[name=auLawAmt]").keydown(function (key) {
                if(key.keyCode == 13 || key.keyCode == 9 ){//키가 13이면 실행 (엔터는 13)
                	fn_AuCurrPyDan();
                }
            }); 
        });
     
        $(document).ready(function(){
            $("input[name=lgOwner]").keydown(function (key) {
                if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_lgOwnerPy();
                }
            }); 
        });
     
        
        //  건축년도 결과수 
        $(document).ready(function(){
            $("input[name=cbYyyy]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	var cbYyyy=$('#cbYyyy').val().substr(0,4);
                	 cbYyyy= isNaN(parseInt(cbYyyy)) ? 0 : parseInt(cbYyyy);	
                	var now = new Date();	// 현재 날짜 및 시간
                	var year = now.getFullYear();	
                	var yyyyGap=0;
                	yyyyGap=parseInt(year)-parseInt(cbYyyy);
                	$("#elapYear").val(yyyyGap);

                }
            }); 
        });
        
    //  건축년도 결과수 
        $(document).ready(function(){
            $("input[name=tmpBYear]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	var cbYyyy=$('#tmpBYear').val().substr(0,4);
                	 cbYyyy= isNaN(parseInt(cbYyyy)) ? 0 : parseInt(cbYyyy);	
                	var now = new Date();	// 현재 날짜 및 시간
                	var year = now.getFullYear();	
                	var yyyyGap=0;
                	yyyyGap=parseInt(year)-parseInt(cbYyyy);
                	$("#tmpElapYear").val(yyyyGap);

                }
            }); 
        });
        
        $(document).ready(function(){
            $("input[name=auBSizePy]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_AuCurrPyDan();
                }
            }); 
        });
     
        function fn_lgOwnerPy(){
        	var lgSize=$("#lgSize").val();  
        	var lgOwner=$("#lgOwner").val();  
        	var seadesuPy=0;  
        	
        	lgSize= isNaN(parseInt($('#lgSize').val())) ? 0 : parseFloat($('#lgSize').val());
        	lgOwner= isNaN(parseInt($('#lgOwner').val())) ? 0 : parseFloat($('#lgOwner').val());
        	
        	var tmpSeadesu=parseInt(lgSize/lgOwner);
        		tmpSeadesu=(tmpSeadesu * 100)/100;
        		tmpSeadesu=isNaN(parseInt(tmpSeadesu)) ? 0 : parseInt(tmpSeadesu);
        		//추정세대수 
        		$("#seadesu").val(tmpSeadesu);
        		seadesuPy=lgOwner*0.3025 ; 
        		seadesuPy=seadesuPy.toFixed(2);
        	
        	    $("#lgSizePy").val(seadesuPy);
        	      
        }
        
        function fn_AuCurrPyDan(){
        	
        	var auBidCnt = $("#auBidCnt").val();
        	var auOnlySize=$("#auOnlySize"+auBidCnt+"").val();
        	var auLawAmt =$("#auLawAmt"+auBidCnt+"").val();
        	var tempAuLawAmt=0;
        	
        	tempAuLawAmt = parseFloat(auLawAmt/auOnlySize);
        	tempAuLawAmt=parseInt(tempAuLawAmt);
        	
        	$("#auCurrSizeDan"+auBidCnt+"").val(tempAuLawAmt);
        	
        	fn_auBidAmt();

       	}
        
        
        function fn_auBidAmtCnt(cnt){
        	 $("#auBidCnt").val(cnt);
        }
        
		function fn_auBidAmt(){
			var auBidCnt = $("#auBidCnt").val();
			var auBidAmt =$("#auBidAmt"+auBidCnt+"").val();
			var auLawAmt =$("#auLawAmt"+auBidCnt+"").val();
			var auBidRate;
			// 낙찰율
			auBidAmt = parseFloat(auBidAmt/auLawAmt);
			auBidAmt =(auBidAmt)*100;
			auBidAmt =(Math.floor(auBidAmt * 100)/100);
			
			$("#auBidRate"+auBidCnt+"").val(auBidAmt);
			
        }
        
     // 경매사례번호_낙찰가 
     
        $(document).ready(function(){
            $("input[name=auBidAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_auBidAmt();
                }
            }); 
        });
     
        // 임력표 집합건물에 관한 사항 공유면적
        $(document).ready(function(){
            $("input[name=cbPubSize]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
        
        // 임력표 집합건물에 관한 사항 공유면적
        $(document).ready(function(){
            $("input[name=cbPubSize]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     
     // 임력표 감정에 관한 사항  실거래가격
        $(document).ready(function(){
            $("input[name=regiAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     // 임력표 감정에 관한 사항  실거래가격
        $(document).ready(function(){
            $("input[name=baseAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     // 임력표 등기부상 전용면적
        $(document).ready(function(){
            $("input[name=secRegiSize]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	var secRegiSize= $("#secRegiSize").val();  //등기부상 전용면적
                	var secRate= 0;
                	var secDambo= 0;
                	var secNume= $("#secNume").val();  //등기부상 전용면적 분자
                	var secDeno= $("#secDeno").val();  //등기부상 전용면적 분모
                	
                	secRate =(secNume/secDeno)*100;
                	secRate =(Math.floor(secRate * 100)/100);

                	$("#secOfferSize").val(secRegiSize);
                	$("#secRegiSizeTmp").val(secRegiSize);
                	$("#secOfferSizeTmp").val(secRegiSize);
                	$("#secRate").val(secRate);
                	
                	secDambo =(secRegiSize*secRate)/100;
                	secDambo =(Math.floor(secDambo * 100)/100);
                	$("#secOfferSize").val(secDambo);
                	$("#secOfferSizeTmp").val(secDambo);

                }
            }); 
        });
     // 임력표 등기부상  분자 분모 비율 계산
        $(document).ready(function(){
            $("input[name=secNume]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	var secRegiSize= $("#secRegiSize").val();  //등기부상 전용면적
                	var secRate= 0;
                	var secDambo= 0;
                	var secNume= $("#secNume").val();  //등기부상 전용면적 분자
                	var secDeno= $("#secDeno").val();  //등기부상 전용면적 분모
                	secRate =(secNume/secDeno)*100;
                	secRate =(Math.floor(secRate * 100)/100);
                	
					$("#secRate").val(secRate);
					$("#secRateTmp").val(secRate);
                	secDambo =(secRegiSize*secRate)/100;
                	secDambo =(Math.floor(secDambo * 100)/100);
                	
                	$("#secOfferSize").val(secDambo);
                	$("#secOfferSizeTmp").val(secDambo);
                	$("#secNumeTmp").val(secNume);
                	$("#secDenoTmp").val(secDeno);
                	
                }
            }); 
        });
     // 임력표 등기부상  분자 분모 비율 계산
        $(document).ready(function(){
            $("input[name=secDeno]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	var secRegiSize= $("#secRegiSize").val();  //등기부상 전용면적
                	var secRate= 0;
                	var secDambo= 0;
                	var secNume= $("#secNume").val();  //등기부상 전용면적 분자
                	var secDeno= $("#secDeno").val();  //등기부상 전용면적 분모
                	secRate =(secNume/secDeno)*100;
                	secRate =(Math.floor(secRate * 100)/100);
                	
					$("#secRate").val(secRate);
					$("#secRateTmp").val(secRate);
					
                	secDambo =(secRegiSize*secRate)/100;
                	secDambo =(Math.floor(secDambo * 100)/100);
                	
                	$("#secOfferSize").val(secDambo);
                	$("#secOfferSizeTmp").val(secDambo);
                	$("#secNumeTmp").val(secNume);
                	$("#secDenoTmp").val(secDeno);
                }
            }); 
        });
        // 보정표 당해지역의 낙찰가율
        $(document).ready(function(){
            $("input[name=pBidRate]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	changeExpectedBidPrice();
                }
            }); 
        });
     // 보정표 유사부동산 낙찰가율
        $(document).ready(function(){
            $("input[name=kBidRate]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	changeExpectedBidPrice();
                }
            }); 
        });
        
     //감정가액산출 _ 결정가격
        $(document).ready(function(){
            $("input[name=applAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
               		var  applAmt= $("#applAmt").val(); 
                	 $("#buildIncreaseAmt").val(applAmt);
                	 $("#increaseAmt1").val(applAmt);
                	 $("#increaseAmt").val(applAmt);
                	 $("#buildlastIncreaseAmt").val(applAmt);
                	 $("#plMinBidAmt").val(applAmt);
                	 
                	changeExpectedBidPrice();
                	fn_interiorCosts();
                }
            }); 
        });
        
        function fn_appraisedValue(cnt){
        	var onlySize =$("#onlySize"+cnt).val();
        	var currMinAmt =$("#currMinAmt"+cnt).val();
        	var currMaxAmt =$("#currMaxAmt"+cnt).val();
        	var currAvgAmt=0;
        	var currSizeDan=0;
        	var leaseAmt=0;
        	var leaseRate=0;

        	onlySize=isNaN(parseFloat($('#onlySize'+cnt).val())) ? 0 : parseFloat($('#onlySize'+cnt).val());
        	
        	if(onlySize==0){
        		alert("전용면적은 필수 사항 입니다.");
        		return;
        	}
        	currMinAmt=isNaN(parseInt($('#currMinAmt'+cnt).val())) ? 0 : parseInt($('#currMinAmt'+cnt).val());
        	currMaxAmt=isNaN(parseInt($('#currMaxAmt'+cnt).val())) ? 0 : parseInt($('#currMaxAmt'+cnt).val());
        	leaseAmt=isNaN(parseInt($('#leaseAmt'+cnt).val())) ? 0 : parseInt($('#leaseAmt'+cnt).val());
        	leaseRate=isNaN(parseFloat($('#leaseRate'+cnt).val())) ? 0 : parseFloat($('#leaseRate'+cnt).val());
        	currSizeDan=0;
        	
        	currAvgAmt=(parseInt(currMinAmt)+parseInt(currMaxAmt))/2;
        	currSizeDan=(parseFloat(currAvgAmt)/parseFloat(onlySize));
        	currSizeDan = parseInt(Math.round(currSizeDan/1000)*1000);
        	leaseRate =(leaseAmt/currAvgAmt);
       	    leaseRate= parseInt(leaseRate *100) ;
       	    
       	    $("#currAvgAmt"+cnt).val(currAvgAmt);
        	$("#currSizeDan"+cnt).val(currSizeDan);
        	$("#leaseRate"+cnt).val(leaseRate);
        	
        }
        //사례번호 
        function fn_TmpAppraisedValue(cnt){
        	var onlySize =$("#tmpOnlySize"+cnt).val();
        	var currMinAmt =$("#tmpCurrMinAmt"+cnt).val();
        	var currMaxAmt =$("#tmpCurrMaxAmt"+cnt).val();
        	var currAvgAmt=0;
        	var currSizeDan=0;
        	var leaseAmt=0;
        	var leaseRate=0;

        	onlySize=isNaN(parseFloat($('#tmpOnlySize'+cnt).val())) ? 0 : parseFloat($('#tmpOnlySize'+cnt).val());
        	
        	if(onlySize==0){
        		alert("전용면적은 필수 사항 입니다.");
        		return;
        	}
        	currMinAmt=isNaN(parseInt($('#tmpCurrMinAmt'+cnt).val())) ? 0 : parseInt($('#tmpCurrMinAmt'+cnt).val());
        	currMaxAmt=isNaN(parseInt($('#tmpCurrMaxAmt'+cnt).val())) ? 0 : parseInt($('#tmpCurrMaxAmt'+cnt).val());
        	leaseAmt=isNaN(parseInt($('#tmpLeaseAmt'+cnt).val())) ? 0 : parseInt($('#tmpLeaseAmt'+cnt).val());
        	leaseRate=isNaN(parseFloat($('#tmpLeaseRate'+cnt).val())) ? 0 : parseFloat($('#tmpLeaseRate'+cnt).val());
        	currSizeDan=0;
        	
        	currAvgAmt=(parseInt(currMinAmt)+parseInt(currMaxAmt))/2;
        	currSizeDan=(parseFloat(currAvgAmt)/parseFloat(onlySize));
        	currSizeDan = parseInt(Math.round(currSizeDan/1000)*1000);
        	leaseRate =(leaseAmt/currAvgAmt);
       	    leaseRate= parseInt(leaseRate *100) ;
       	    
       	    $("#tmpCurrAvgAmt"+cnt).val(currAvgAmt);
        	$("#tmpCurrSizeDan"+cnt).val(currSizeDan);
        	$("#tmpLeaseRate"+cnt).val(leaseRate);
        	
        }
        
      //낙찰율보정표_예상낙찰가
        function changeExpectedBidPrice(){
    	  
        	var pBidRate =$("#pBidRate").val();   			// 당해지역의 낙찰가율
        	var kBidRate =$("#kBidRate").val();				// 유사부동산 낙찰가율 
        	var bBidRate =$("#bBidRate").val();				// 기준 낙찰율 
        	var applRate =$("#applRate").val();				// 적용할 낙찰율
        	var aptScaleRate =$("#aptScaleRate").val();		// 단지전체규모
        	var aptExmRate =$("#aptExmRate").val();			// 전유부분의면적 
        	var aptFloorRate =$("#aptFloorRate").val();		// 총 층수중 전유부분의 위치
        	var aptElapRate =$("#aptElapRate").val();		// 건출물의 경과년도
        	var rightsRate =$("#rightsRate").val();			// 점유자의 권리 형태
        	var increaseAmt =$("#increaseAmt1").val();			// 평가가격
        	var plMinBidAmt =$("#plMinBidAmt").val();			// 1차예상최저입찰가(최종평가가격)
        	var plBidAmt =$("#plBidAmt").val();			// 예상낙찰가
        	var auctionAmt =$("#auctionAmt").val();			// 경매금액
        	var tmpbBidRate=0;
        	
        	
        	pBidRate=isNaN(parseFloat($('#pBidRate').val())) ? 100 : parseFloat($('#pBidRate').val());
        	kBidRate=isNaN(parseFloat($('#kBidRate').val())) ? 100 : parseFloat($('#kBidRate').val());
        	bBidRate=isNaN(parseFloat($('#bBidRate').val())) ? 100 : parseFloat($('#bBidRate').val());
        	applRate=isNaN(parseFloat($('#applRate').val())) ? 100 : parseFloat($('#applRate').val());
        	
        	console.log("applRate====>"+applRate)

        	if(aptScaleRate==null ||aptScaleRate=='null'){
        		applRate=1 ;
        		$("#aptScaleRate").val(applRate);
        	}
        	if(aptExmRate==null ||aptExmRate=='null') {
        		aptExmRate=1 ;
        		$("#aptScaleRate").val(aptExmRate);
        	}
        	if(aptFloorRate==null ||aptFloorRate=='null') {
        		aptFloorRate=1 ;
        		$("#aptScaleRate").val(aptFloorRate);
        	}
        	if(aptElapRate==null ||aptElapRate=='null') {
        		aptElapRate=1 ;
        		$("#aptScaleRate").val(aptElapRate);
        	}
        	if(rightsRate==null ||rightsRate=='null') {
        		rightsRate=1 ;
        		$("#aptScaleRate").val(rightsRate);
        	}
        	if(increaseAmt==null ||increaseAmt=='null') {
        		increaseAmt=0 ;
        		$("#increaseAmt").val(increaseAmt);
        	}
        	if(plMinBidAmt==null ||plMinBidAmt=='null') {
        		plMinBidAmt=0 ;
        		$("#plMinBidAmt").val(plMinBidAmt);
        	}
        	if(plBidAmt==null ||plBidAmt=='null'){
        		plBidAmt=0 ;
        		$("#plBidAmt").val(plBidAmt);
        	}

        	
        	//기준 낙찰가율 구하기 (당해지역의낙찰가율 + 유사부동산 낙찰가율)/ 2
        	tmpbBidRate = (parseFloat(pBidRate)+parseFloat(kBidRate)) ;
        	tmpbBidRate=(parseFloat(tmpbBidRate)/2);

        	tmpbBidRate=Math.floor(tmpbBidRate*100)/100;

        	 $("#bBidRate").val(tmpbBidRate);
        	// 적용할 낙찰가율 (기준 낙찰가율 * 단지전체규모 * 전유부분의면적 * 총 층수준 전유부분의 위치 * 건축물의 경과년도 * 점유자의 권리 형태)

        	 applRate =parseFloat(tmpbBidRate)*parseFloat(aptScaleRate)*parseFloat(aptExmRate)*parseFloat(aptFloorRate)*parseFloat(aptElapRate)*parseFloat(rightsRate)
        	 applRate=Math.floor(applRate*100)/100;

        	 $("#applRate").val(applRate);
        	 
        	 //예상낙찰가
        	 plBidAmt= Math.floor(increaseAmt*(applRate/100));
        	 plBidAmt = Math.round(plBidAmt/1000)*1000; //천원단위 반올림 
        	//console.log("plBidAmt===>"+plBidAmt);
        	 $("#plBidAmt").val(plBidAmt);
        	 $("#hPlBidAmt").val(plBidAmt);
        	 
        	 var hPossAmt = ((plBidAmt-auctionAmt)/2);
        	 $("#hPossAmt").val(hPossAmt);

      }
        //낙찰율보정표_전유부분의면적
        function changeJonYuPartAreaAptList(obj){
        	var possAArea = $("#jonYuPartAreaAptList").val();
        	var value2 = $("#jonYuPartAreaAptList > option:selected").attr("value2");
        	$(document).ready(function() {
                $('#aptExmRate').val(value2);
            });
        	changeExpectedBidPrice();
        }
        
      //낙찰율보정표_단지전체규모
        function changeApartmentComplexSizeList(obj){
        	var apartmentComplexSizeList = $("#apartmentComplexSizeList").val();
        	var value2 = $("#apartmentComplexSizeList > option:selected").attr("value2");
        	$(document).ready(function() {
                $('#aptScaleRate').val(value2);
            });
        	changeExpectedBidPrice();
        }
      //낙찰율보정표_총층수중 전유부분의 위치
        function changeJeonyuPartLocationList(obj){
        	var jeonyuPartLocationList= $("#jeonyuPartLocation").val();
        	var value2 = $("#jeonyuPartLocation > option:selected").attr("value2");
        	$(document).ready(function() {
                $('#aptFloorRate').val(value2);
            });
        	changeExpectedBidPrice();
        }
      //낙찰율보정표_건축물의 경과년도 
        function changeBuildTransitYearAptList(obj){
        	var buildTransitYearAptList= $("#buildTransitYearAptList").val();
        	var value2 = $("#buildTransitYearAptList > option:selected").attr("value2");
        	$(document).ready(function() {
                $('#aptElapRate').val(value2);
            });
        	changeExpectedBidPrice();
        }
      //낙찰율보정표_점유자의 권리 형태
        function changeFormOccpantAptListList(obj){
        	var formOccpantAptList= $("#formOccpantAptList").val();
        	var value2 = $("#formOccpantAptList > option:selected").attr("value2");
        	$(document).ready(function() {
                $('#rightsRate').val(value2);
            });
        	changeExpectedBidPrice();
        }
        
        function fn_auBYear(cnt){
        	var auBYearValue=0;
        	var auBYear=0;

        	auBYear=$('#auBYear'+cnt).val();
        	var now = new Date();	// 현재 날짜 및 시간
        	var year = now.getFullYear();	
        	var yyyyGap=0;
        	yyyyGap=parseInt(year)-parseInt(auBYear);
        	console.log("yyyyGap==>"+yyyyGap);
        	
        	cnt= cnt+parseInt(1);
        	$("#auElapYear"+cnt).val(yyyyGap);
        	
        	//경매 잔가율 구하기
        	var jangaRate=0;
			var elapYear =yyyyGap;
				jangaRate = (parseInt(janga)-parseInt(elapYear))/parseInt(janga);
							
				if(jangaRate < 0 ){
					jangaRate=0.2;
				}else{
					jangaRate=jangaRate.toFixed(2)
				}
				
				$('#auOfJanga'+cnt).val(jangaRate);
        }
		function fn_auBYearValue(cnt){
			
			$('#auBYearValue').val(cnt);
			
			fn_auBYear(cnt);
		}
        
      //감정가액산출1_ 건축경과년도
       $(document).ready(function(){
            $("input[name=auBYear]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_auBYear();
                }
            }); 
      });

     // 감정가액산출_본건사례
        $(document).ready(function(){
            $("input[name=tmpCurrMinAmt1]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('1');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=tmpCurrMaxAmt1]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('1');
                }
            }); 
            
        });
        
        $(document).ready(function(){
            $("input[name=tmpCurrMaxAmt2]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('2');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=tmpCurrMinAmt2]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('2');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=tmpCurrMaxAmt3]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('3');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=tmpCurrMinAmt3]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('3');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=tmpLeaseAmt1]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('1');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=tmpLeaseAmt2]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('2');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=tmpLeaseAmt3]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_TmpAppraisedValue('3');
                }
            }); 
            
        });
     
     //
        $(document).ready(function(){
            $("input[name=currMinAmt1]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('1');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=currMaxAmt1]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('1');
                }
            }); 
            
        });
        
        $(document).ready(function(){
            $("input[name=leaseAmt1]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('1');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=leaseAmt2]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('2');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=leaseAmt3]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('3');
                }
            }); 
            
        });
        
        $(document).ready(function(){
            $("input[name=currMinAmt2]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('2');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=currMinAmt2]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('2');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=currMaxAmt2]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('2');
                }
            }); 
            
        });
        
        $(document).ready(function(){
            $("input[name=currMinAmt3]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('3');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=currMinAmt3]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('3');
                }
            }); 
            
        });
        $(document).ready(function(){
            $("input[name=currMaxAmt3]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_appraisedValue('3');
                }
            }); 
            
        });
     
        
     // 감정가액산출_최저가격
        $(document).ready(function(){
            $("input[name=currMinAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_priceAptCheck();
                }
            }); 
            
        });
     // 감정가액산출_최고가격
        $(document).ready(function(){
            $("input[name=currMaxAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_priceAptCheck();
                }
            }); 
            
        });
     // 감정가액산출_전세금
        $(document).ready(function(){
            $("input[name=leaseAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_priceAptCheck();
                }
            }); 
            
        });
     
        $(document).ready(function(){
            $("input[name=credCombAmtOrg]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_eraYnCheck();
                	fn_hiteYnCheck();
                	credMaxAmtCheck();
                }
            });  
        });

        function fn_hiteYnCheck(){
        	 for ( var i = 0; i < $("input[name=hiteYnTp]:checkbox" ).length; i++) {
        		  if ($( "input[name=hiteYnTp]:checkbox")[i].checked == true ) {
        			  $("input[name=hiteYn]")[i].value = 'Y';
        		  }else{
        			  $("input[name=hiteYn]")[i].value = 'N';
        		  }
        	 }
        }
        
        function fn_eraYnCheck(){
       	 for ( var i = 0; i < $("input[name=eraYnTp]:checkbox" ).length; i++) {
       		  if ($( "input[name=eraYnTp]:checkbox")[i].checked == true ) {
       			  $("input[name=eraYn]")[i].value = 'Y';
       		  }else{
       			$("input[name=eraYn]")[i].value = 'N';
       		  }
       	 }
       	 credMaxAmtCheck();
       }
        
        function fn_updatePrice(){
        	
        	var cnt=$('#pRowInNo').val();
        	if(cnt=='X'){
        		return;
        	}else{
        	
	        	var pJusoC=$('#pJusoC').val(); 
	        	var pPriceDateS=$('#pPriceDateS').val(); 
	        	var pPriceRateC=$('#pPriceRateC').val(); 
	        	var pOfJangaRateC=$('#pOfJangaRateC').val(); 
	        	var pFactorTot =$('#pFactorTot').val(); 
	        	var pApasDan =$('#pApasDan').val(); 
	        	var price2ApplDan =$('#price2ApplDan').val(); 
	   
	         	$("#price2JusoC"+cnt+"").val(pJusoC);
	        	$("#price2PriceDateS"+cnt+"").val(pPriceDateS);
	         	$("#price2PriceRateC"+cnt+"").val(pPriceRateC);
	         	$("#price2OfJangaRateC"+cnt+"").val(pOfJangaRateC);
	         	$("#price2FactorTot"+cnt+"").val(pFactorTot);
	         	$("#price2ApasDan"+cnt+"").val(pApasDan);
	         	$("#price2ApplDan"+cnt+"").val(price2ApplDan);
        	}
         }
        
        function fn_Case2_cal(){
        	
        	var pFactorTot = 0; //요인합계
        	var pApasDan =0; //산정단가
        	var pApplDan=0; //적용단가
        	
        	var pJusoC = $('#pJusoC').val(); //소재지 비율
        	var pPriceRateCT =$('#pPriceRateCT').val(); //시점 비율
        	var pFloorC =$('#pFloorC').val(); //층별 비율
        	var pOfJangaRateC=$('#pOfJangaRateC').val(); //잔가율 비율
        	
        	var cbExmSize=$('#cbExmSize').val(); //전유면적
        	
        	pFactorTot =parseFloat(pJusoC)*parseFloat(pPriceRateCT)*parseFloat(pFloorC)*parseFloat(pOfJangaRateC);
        	pFactorTot=pFactorTot.toFixed(2);
        	
        	$('#pFactorTot').val(pFactorTot);
        	//산정단가
        	pApasDan=parseFloat(pFactorTot)*parseFloat(pCurrSizeDan);
        	//적용단가
        	pApplDan = parseFloat(pApasDan)* parseFloat(cbExmSize);

        	
        }
        function fn_priceAptCheck(){
        	var priceAptChk = false;
        	var priceApt = document.getElementsByName("priceApt");
        	var currMinAmt = document.getElementsByName("currMinAmt");
        	var currMaxAmt = document.getElementsByName("currMaxAmt");
        	var minAmtCheck=0;
        	var maxAmtCheck=0;
        	var tmpMinAmtCheck=0;
        	var tmpMaxAmtCheck=0;
        	var maRate=0;
        	
        	var avgAptAmt=0;
        	var leaseAmt=0;
        	var bSizePy=0;
        	var currPyDan=0;
        	var leaseRate=0;

            var  cnt = 0;
            for ( var i = 0; i < $("input[name=priceApt]:checkbox" ).length; i++) {
              if ($( "input[name=priceApt]:checkbox")[i].checked == true ) {
            	 // cnt++;
            	 $('#checkApt').val("1");

            	  tmpMinAmtCheck = $("input[name=currMinAmt]")[i].value;
            	  tmpMaxAmtCheck = $("input[name=currMaxAmt]")[i].value;
            	  
            	  leaseAmt = $( "input[name=leaseAmt]")[i].value;
            	  bSizePy = $( "input[name=bSizePy]")[i].value;
            	  
            	  if(cnt==0){
            		  minAmtCheck=tmpMinAmtCheck;
            		  maxAmtCheck=tmpMaxAmtCheck;
            	  }else{
            		  if(minAmtCheck>=tmpMinAmtCheck){
            			  minAmtCheck=tmpMinAmtCheck;
            		  }
            		  if(maxAmtCheck<=tmpMaxAmtCheck){
            			  maxAmtCheck=tmpMaxAmtCheck;
            		  }
            	  } //end if
              }else{
            	  $('#checkApt').val("0");
              }
              cnt++;
            }
            
            // 평균가격 
            avgAptAmt =(parseInt(minAmtCheck)+parseInt(tmpMaxAmtCheck))/2;
            if(chkStyle.test(avgAptAmt)==false){
            	avgAptAmt=0;
            }
            $('#currAvgAmt').val(avgAptAmt);
            // 평단가격
            currPyDan=avgAptAmt/bSizePy;
            currPyDan = Math.round(currPyDan/1000)*1000; //천원단위 반올림 
            if(chkStyle.test(currPyDan)==false){
            	currPyDan=0;
            }
            $('#currPyDan').val(currPyDan);
            // 전세금/평균가
            leaseRate=leaseAmt/avgAptAmt;
            leaseRate= leaseRate *100 ;
            leaseRate= Math.floor(leaseRate*100)/100;
            if(chkStyle.test(leaseRate)==false){
            	leaseRate=0;
            }
            $('#leaseRate').val(parseInt(leaseRate));
             
            if(chkStyle.test(maxAmtCheck)==false){
            	maxAmtCheck=0;
            }
            if(chkStyle.test(maMinAmt)==false){
            	maMinAmt=0;
            }
            //최저/초고비율
            maRate=(minAmtCheck/maxAmtCheck);
            maRate= maRate *100 ;
            maRate= Math.floor(maRate*100)/100;
            
            if(chkStyle.test(maRate)==false){
            	maRate=0;
            }
            
            $('#maMinAmt').val(minAmtCheck);
            $('#maMaxAmt').val(maxAmtCheck);
            $('#maRate').val(maRate);

        }
        
        
        $(document).ready(function(){
            $("input[name=pPriceRateC]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		$('#pPriceRateCT').val($('#pPriceRateC').val());
            		fn_Case2_cal();
                }
            });  
        });
        
        $(document).ready(function(){
            $("input[name=pJusoC]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_Case2_cal();
                }
            });  
        });
        
        $(document).ready(function(){
            $("input[name=pPriceRateCT]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_Case2_cal();
                }
            });  
        });
        $(document).ready(function(){
            $("input[name=pOfJangaRateC]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
            		fn_Case2_cal();
                }
            });  
        });

     // 시세조사 사례 평형
        $(document).ready(function(){
            $("input[name=caseDbSizePy]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
     // 시세조사 사례 최저가격
        $(document).ready(function(){
            $("input[name=caseDbSizePy]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
     // 시세조사 사례 최고가격
        $(document).ready(function(){
            $("input[name=caseDcurrMaxAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
        // 시세조사 사례 전세금
        $(document).ready(function(){
            $("input[name=caseDleaseAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
    
        $(document).ready(function(){
            $("input[name=caseDcurrMinAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
        $(document).ready(function(){
            $("input[name=caseDleaseAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
        $(document).ready(function(){
            $("input[name=caseDcurrMaxAmt]").keydown(function (key) {
            	if(key.keyCode == 13 || key.keyCode == 9){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
        
        
     // 시세조사 사례 
        function fn_piceCaseDCheck(){
        	var minCheck=0;
        	var maxCheck=0;
        	var tmpMinCheck=0;
        	var tmpMaxCheck=0;
        	var cnt = 0;
        	var auRate=0;
        	var avgAmt=0;
        	var avgPyAmt=0;
        	var Py=0;
        	var caseDleaseAmt=0;
        	var caseDleaseRate=0;
        	var cnt = 0;
        	var piceCaseDtmpMinCheck=0;
        	var piceCaseDtmpMaxCheck=0;
        	var piceCaseDMinCheck=0;
        	var piceCaseDMaxCheck=0;
        	var piceCaseDCalTotal=0;
        	var piceCaseD=0;
        	var bSizePy=$("#bSizePy").val();
        	    bSizePy=isNaN(parseInt(bSizePy)) ? 0 : parseInt(bSizePy);	
        	
        	for ( var i = 0; i < $("input[name=piceCaseDCheck]:checkbox" ).length; i++) {
        		
        		tmpMinCheck = $( "input[name=caseDcurrMinAmt]")[i].value;
              	tmpMaxCheck = $( "input[name=caseDcurrMaxAmt]")[i].value;
              	
              	tmpMinCheck=isNaN(parseInt(tmpMinCheck)) ? 0 : parseInt(tmpMinCheck);	
              	tmpMaxCheck=isNaN(parseInt(tmpMaxCheck)) ? 0 : parseInt(tmpMaxCheck);	
              	
              	Py = $( "input[name=caseDbSizePy]")[i].value;  // 평
              	Py=isNaN(parseInt(Py)) ? 0 : parseInt(Py);	
              	
              	caseDleaseAmt = $( "input[name=caseDleaseAmt]")[i].value;  // 전세가격
              	caseDleaseAmt=isNaN(parseInt(caseDleaseAmt)) ? 0 : parseInt(caseDleaseAmt);	
              	caseDleaseAmt =parseInt(caseDleaseAmt);
              	
              	avgAmt = (parseInt(tmpMinCheck) + parseInt(tmpMaxCheck)) /parseInt(2); 
              	avgAmt=isNaN(parseInt(avgAmt)) ? 0 : parseInt(avgAmt);	
              	$( "input[name=caseDcurrAvgAmt]")[i].value=avgAmt;
              	
              	avgPyAmt=parseInt(avgAmt)/parseInt(Py);
              	avgPyAmt= Math.round(avgPyAmt/1000)*1000;
              	
              	avgPyAmt=isNaN(parseInt(avgPyAmt)) ? 0 : parseInt(avgPyAmt);	
              	$( "input[name=caseDcurrPyDan]")[i].value=avgPyAmt;
              	
            	caseDleaseRate=parseInt(caseDleaseAmt)/(parseInt(avgPyAmt)*parseInt(bSizePy)) ;
             
                console.log("caseDleaseRate===>"+caseDleaseRate)
             	caseDleaseRate= caseDleaseRate *100 ;
             	caseDleaseRate= Math.floor(caseDleaseRate*100)/100;
             	caseDleaseRate=Math.floor(caseDleaseRate);
             	caseDleaseRate=isNaN(parseFloat(caseDleaseRate)) ? 0 : parseFloat(caseDleaseRate);	
             	$( "input[name=caseDleaseRate]")[i].value=caseDleaseRate;

              // 가격의 결정 최고 / 최저가 구하기 
              // 시세조사내요요 평단단가 * 평수
             
        		 if ($( "input[name=piceCaseDCheck]:checkbox")[i].checked == true ) {
        			 piceCaseDCalTotal=parseInt(avgPyAmt)*parseInt(bSizePy);
                     piceCaseDCalTotal=Math.floor(piceCaseDCalTotal/1000000)*1000000;
                       
                  	if(cnt==0){
                  		piceCaseDtmpMinCheck=piceCaseDCalTotal;
                  		piceCaseDtmpMaxCheck=piceCaseDCalTotal;
                  	}else{
                  	
                  		if(piceCaseDtmpMinCheck ==0)piceCaseDtmpMinCheck=piceCaseDCalTotal;
	                  		if(parseInt(piceCaseDtmpMinCheck) < parseInt(piceCaseDCalTotal) ){
	                  			piceCaseDtmpMinCheck=piceCaseDtmpMinCheck;
	                  		}else{
	                  			piceCaseDtmpMinCheck=piceCaseDCalTotal;
	                  		}
                  		
                  		if(piceCaseDtmpMaxCheck < piceCaseDCalTotal ){
                  			piceCaseDtmpMaxCheck=piceCaseDCalTotal;
                  		}
                  	} //end if
        		 }
        		 cnt++;
        	   }
            
        		 $('#prMinAmt').val(piceCaseDtmpMinCheck);
        		 $('#prMaxAmt').val(piceCaseDtmpMaxCheck);

        		 // 초저 /최고비울 
        		 piceCaseD=parseInt(piceCaseDtmpMinCheck)/parseInt(piceCaseDtmpMaxCheck);
        		 piceCaseD= piceCaseD *100 ;
        		 piceCaseD= Math.floor(piceCaseD*100)/100;
        		 piceCaseD= isNaN(parseFloat(piceCaseD)) ? 0 : parseFloat(piceCaseD);	
        		 $('#prRate').val(piceCaseD);
        	
     	}
     
     
        function fn_save_Button(){
        	document.listForm.action = "<c:url value='/es01/es01_w02_p02save.do'/>";
           	document.listForm.submit();
        }
        
        function fn_checkBoxchg(trCnt){
        	var checkBoxchg;
        	var checkPriceAuction = document.getElementById("checkPriceAuction"+trCnt);
        	var checkBoxchg = $(checkPriceAuction).prop("checked");

        	if(checkBoxchg){
        		$('#auCheckYn'+trCnt).val('1');
        	}else{
        		 $('#auCheckYn'+trCnt).val('0');
        	}
        	fn_priceAuctionCheck();
        }
        // 경매사례 
        function fn_priceAuctionCheck(){
        	var minCheck=0;
        	var maxCheck=0;
        	var tmpMinCheck=0;
        	var tmpMaxCheck=0;
        	var cnt = 0;
        	var auRate=0;
        	var bSizePy=$("#bSizePy").val();
    	    bSizePy=isNaN(parseInt(bSizePy)) ? 0 : parseInt(bSizePy);
        
        	 for ( var i = 0; i < $("input[name=checkPriceAuction]:checkbox" ).length; i++) {
        		 
                 if ($( "input[name=checkPriceAuction]:checkbox")[i].checked == true ) {
                	 
                 	 $("input[name=auCheckYn]")[i].value ='1';
               	  tmpMinCheck = $("input[name=auCurrPyDan]")[i].value;
               	  tmpMaxCheck = $("input[name=auCurrPyDan]")[i].value;
               	  
               	  tmpMinCheck =tmpMinCheck * bSizePy;
               	  tmpMinCheck =Math.floor(tmpMinCheck/1000000)*1000000;
               	  
               	  tmpMaxCheck =tmpMinCheck;

               	  if(cnt==0){
               		minCheck=tmpMinCheck;
               		maxCheck=tmpMaxCheck;
               		 
               	  }else{
               		  if(minCheck==0){
               			  minCheck=tmpMinCheck;
	               		  if(minCheck>=tmpMinCheck){
	               			minCheck=tmpMinCheck;
	               		  }
               		  }else{
               			if(minCheck>=tmpMinCheck){
	               			minCheck=tmpMinCheck;
	               		  }
               		  }
               		  if(maxCheck<tmpMaxCheck){
               			maxCheck=tmpMaxCheck;
               		  }
               	  } //end if
               	 
                 }else{
                	 $("input[name=auCheckYn]")[i].value ='0';
                 }
                 cnt++;
               }
        	 $('#auMinAmt').val(minCheck);
             $('#auMaxAmt').val(maxCheck);
             
           //최저/초고비율
             auRate=(minCheck/maxCheck);
             auRate= auRate *100 ;
             auRate= Math.floor(auRate*100)/100;
             if(chkStyle.test(auRate)==false){
            	 auRate=0;
             }
             $('#auRate').val(auRate);
        }
        
        //공통보고서 _ 의견보기 클릭
        function fn_Press_Opinion(){
        	var form=document.listForm;
        	var url;
        	var seq=$("#searchSeq").val();
        	var target=seq+'pop';
        	var sizeX="800";
        	var sizeY="1000";
        	var scroll="AUTO";

        	url ="<c:url value='/es01/es01_w02_p03.do'/>";
        	sendPagePopup(form, url, target, sizeX, sizeY, scroll )
        }
        //거래처 찾기
        function fn_find_geoCode(){
        	var form=document.listForm;
        	var url;
        	var seq='find_geoCode';
        	var target=seq+'pop';
        	var sizeX="800";
        	var sizeY="1000";
        	var scroll="AUTO";

        	url ="<c:url value='/es01/es01_w02_p04.do'/>";
        	sendPagePopup(form, url, target, sizeX, sizeY, scroll )
        	
        }
        
        function oninit(){
        	
        	$('#successfulBidRate').hide();
        	$('#dividendTable').hide();      
        	$('#commonReport').hide();
        	$('#appraisedValue').hide();
        	$('#appraisedValue2').hide();
        	$('#appraisedValue3').hide();    
        	var successfulBidRateTableListCnt =$("#successfulBidRateTableListCnt").val();   // 리스트 cnt
        	
        	if(successfulBidRateTableListCnt==0){
        		
        		$('#applRate').val('100');
        		$('#apartmentComplexSizeList').val('00');
        		$('#jonYuPartAreaAptList').val('00');
        		$('#jeonyuPartLocation').val('00');
        		$('#buildTransitYearAptList').val('00');
        		$('#formOccpantAptList').val('00');
        		
        		changeExpectedBidPrice();	

        	}
        	changeBidTablePossAArea();
        	changeAuctionCostList();
        	fn_lgOwnerPy();
        	
        }
        
        function fn_priceCaseMCheck(piceCaseMLncnt){
        	
        	$('#piceCaseDMTr').val(piceCaseMLncnt);
        }
      
 		function fn_Press_Dividend(){
        	
 			document.listForm.action = "<c:url value='/es01/es01_w02_Dividend_save.do'/>";
           	document.listForm.submit();
        }
 
    </script>
</head>

<body style="text-align:center; margin:0 auto; display:inline; padding-top:100px;" onLoad='oninit();'>
    <form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
        <input type="hidden" name="selectedId" />
        <input type="hidden" name="searchSeq" value= "${searchVO.searchSeq}" />
        <input type="hidden" name="searchYyyy" value="${searchVO.searchYyyy}" />
        <input type="hidden" name="docKey" value= "${searchVO.docKey}" />
        <input type="hidden" name="auBidCnt" id="auBidCnt" value= "" />
        <input type="hidden" name="temps" value= "" />
        <input type="hidden" name="secCode" value= "${searchVO.secCode}" />
        <input type="hidden" name="appraisal" value= "${searchVO.appraisal}" />
        <input type="hidden" name="liquorType" value= "${searchVO.liquorType}" />
        <input type="hidden" name="priceAucTr" id="priceAucTr" value= "1" />
        <input type="hidden" name="auBYearValue" id="auBYearValue" value= "" />
        
        <input type="hidden" name="priceAucTrCnt" id="priceAucTrCnt" value="${fn:length(selectEs01_w02_p02Es2112ist)}"></input>
        <input type="hidden" name="priceCaseMTr" id="priceCaseMTr" value= "1" />
        <input type="hidden" name="piceCaseDMTr" id="piceCaseDMTr" value= "" />
        <input type="hidden" name='dividendTableCalculationListCnt' id='dividendTableCalculationListCnt' value="${fn:length(selectDividendTableCalculationList)}"></input>
        <input type="hidden" name='successfulBidRateTableListCnt' id='successfulBidRateTableListCnt' value="${fn:length(selectSuccessfulBidRateTableList)}"></input>
        <input type="hidden" name="contentRightCnt" value="${fn:length(selectContentRightList)}" />
        <input type="hidden" name="culationHousingRentalDepositCnt" value="${fn:length(selectculationHousingRentalDepositList)}" />
        <input type="hidden" name="es01_w02_p02Es2142Cnt" id="es01_w02_p02Es2142Cnt" value="${fn:length(selectEs01_w02_p02Es2142List)}"></input>
        
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
        	            <span class="btn_blue_l">
        	                <a href="javascript:fn_save_Button();">저장</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        			<li>
        	            <span class="btn_blue_l">
        	                <a href="#" onclick="fn_Press_Dividend();">배당처리</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                <a href="javascript:fn_egov_selectList();">배당집계표</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                <a href="javascript:fn_egov_selectList();">출력</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
                </ul>
        	</div>
        	<!-- 기본정보 마스터 start -->
        	<div id="table">
        	<c:if test="${!empty selectCollateralMasterList}">
        	<c:forEach var="selectCollateralMasterList" items="${selectCollateralMasterList}" varStatus="status">
        	<c:set var="appraiseGu" value="${selectCollateralMasterList.appraiseGu}"> </c:set>
        		<table width="100%" border="0" cellpadding="0" cellspacing="0" >
        			<colgroup>
        				<col width="20%"/>
        				<col width="20%"/>
        				<col width="20%"/>
        				<col width="20%"/>
        				<col width="10%"/>
        				<col width="10%"/>
        			</colgroup>
        			<tr>
        				<th align="center">
        					<form:select path="searchSecCode" cssClass="use">
        					<!-- 담보종류 -->
        					<c:forEach var="dambo" items="${damboList}" varStatus="status">
        						<option value="${dambo.cdCode}" <c:if test="${dambo.cdCode eq selectCollateralMasterList.secCode }">selected</c:if> >${dambo.cdDesc}</option>
        					</c:forEach>
        				</form:select>
						</th>
        				<th align="center">
        				<!-- 주류타입 -->
        				<select name="liquorType" id="liquorType" cssClass="use">
        					<c:forEach var="liquorType" items="${liquorType}" varStatus="status">
        						<option value="${liquorType.cdCode}" <c:if test="${liquorType.cdCode eq selectCollateralMasterList.liquorType }">selected</c:if> >${liquorType.cdDesc}</option>
        					</c:forEach>
        				</select>
						</th>
        				<td align="center" class="listtd"><input type=text value="" colspan=3></input></td>
        			</tr>
            		<tr> 
            			<th align="center">감정일</th>
            			<td align="center" class="listtd"><input type=text name="estiDate" id="estiDate" value="${selectCollateralMasterList.estiDate}" readonly></input></td>
            			<th align="center">감정자</th>
            			<td align="center" class="listtd">${selectCollateralMasterList.buseolname}&nbsp;</td>
            			<th align="center">담보물건명</th>
            			<td align="center" class="listtd">${selectCollateralMasterList.docName}&nbsp;</td>
            		</tr>
        		</table>
        		</c:forEach>
        		</c:if>

        	</div>
        	<!-- 기본정보 마스터 end -->
        	<!-- /List -->
        	<div id="search">
        		<ul>
        			<li >
        	            <span class="btn_blue_l">
        	                <a href="#" onclick="fn_Press_Button('1');">입력표</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        			<li>
        	            <span class="btn_blue_l">
        	                 <a href="#" onclick="fn_Press_Button('2');">감정가액산출Ⅰ</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                 <a href="#" onclick="fn_Press_Button('8');">감정가액산출Ⅱ</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                 <a href="#" onclick="fn_Press_Button('9');">감정가액산출Ⅲ</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                 <a href="#" onclick="fn_Press_Button('3');">낙찰율보정표</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	       
        	        <li>
        	            <span class="btn_blue_l">
        	                 <a href="#" onclick="fn_Press_Button('5');">배당표</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                 <a href="#" onclick="fn_Press_Button('6');">문서관리</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        <li>
        	            <span class="btn_blue_l">
        	                 <a href="#" onclick="fn_Press_Button('7');">공통보고서</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
        	        </li>
        	        
                </ul>
        	</div>
        	<!-- List -->
        	<!-- 입력표 start -->
        	<div id="inputSector">
	        	<div id="table">
	        	--> 거래처 등의 표시
	        	<c:if test="${!empty selectCollateralMasterList}">
	        	<c:forEach var="collateralMasterList" items="${selectCollateralMasterList}" varStatus="status">
	        		<table width="100%" border="0" cellpadding="0" cellspacing="0" >
	        			<colgroup>
	        				<col width="20%"/>
	        				<col width="20%"/>
	        				<col width="20%"/>
	        				<col width="20%"/>
	        				<col width="10%"/>
	        				<col width="10%"/>
	        			</colgroup>
	        			
	        			<tr>
	        				<th align="center">1. 제1차 거래처</th>
	        				<td align="center" class="listtd"><input type="text" name ="geoCode" id="geoCode" value="${collateralMasterList.geoCode}"></input></td>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="sangho" id="sangho" value="${collateralMasterList.sangho}"></input> &nbsp;
	        				<li><span class="btn_blue_l">
        	                 <a href="#" onclick="fn_find_geoCode();">거래처찾기</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	                </span>
        	                </li>
	        				</td>
	        				<th align="center">대표자</th>
	        				<td align="center" class="listtd"><input type="text" name ="daepyoName" id="daepyoName" value="${collateralMasterList.daepyoName}"/>&nbsp;</td>
	        			</tr>
	            		<tr>
	        				<th align="center">2. 업소명</th>
	        				<td align="center" class="listtd">
	        				
	        					<!-- 지목 select box -->
								<select name="marketDiv" id="marketDiv" cssClass="use" onchange="javascript:changeMarketDiv(this);">
								    <option value="0" <c:if test="${'0' eq collateralMasterList.marketDiv }">selected</c:if>>자체</option>
									<option value="1" <c:if test="${'1' eq collateralMasterList.marketDiv }">selected</c:if>>업소</option>
									
							</select>
	        				</td>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="marketName" id="marketName" value="${collateralMasterList.marketName}"></input>&nbsp;</td>
	        				<th align="center">대표자</th>
	        				<td align="center" class="listtd"><input type="text" name ="marketCeo" id="marketCeo" value="${collateralMasterList.marketCeo}"></input>&nbsp;</td>
	        			</tr>
	        			<tr>
	        				<th align="center">3. 채무자</th>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="debtor" id="debtor" value="${collateralMasterList.debtor}"></input>&nbsp;</td>
	        				<th align="center" colspan=2>5. 체무자와 담보제공자의 관계</th>
	        				<td align="center" class="listtd"><input type="text" name ="debtorRelation" id="debtorRelation" value="${collateralMasterList.debtorRelation}"></input>&nbsp;</td>
	        			</tr>
	        			<tr>
	        				<th align="center">4. 담보제공자</th>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="guarantor" id="guarantor" value="${collateralMasterList.guarantor}"></input>&nbsp;</td>
	        				<th align="center" colspan=2>6. 이 담보물에 대한 재감정 여부</th>
	        				<td align="center" class="listtd"><input type="text" name ="esDiv" id="esDiv" value="${result.esDiv}"></input>&nbsp;</td>
	        			</tr>
	        		</table>
	        		</c:forEach>
	        	</c:if>
	        		<c:if test="${empty selectCollateralMasterList}">
	        		<table width="100%" border="0" cellpadding="0" cellspacing="0" >
	        			<colgroup>
	        				<col width="20%"/>
	        				<col width="30%"/>
	        				<col width="20%"/>
	        				<col width="20%"/>
	        				<col width="10%"/>
	        				<col width="10%"/>
	        			</colgroup>
	        			
	        			<tr>
	        				<th align="center">1. 제1차 거래처</th>
	        				<td align="center" class="listtd"><input type="text" name ="geoCode" id="geoCode" value=""></input>&nbsp;
	        				 <li><span class="btn_blue_l">
        	                 <a href="#" onclick="fn_find_geoCode();">거래처찾기</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	                </span>
        	                </li>
        	            </span>
	        				</td>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="sangho" id="sangho" value=""></input>&nbsp;</td>
	        				<th align="center">대표자</th>
	        				<td align="center" class="listtd"><input type="text" name ="daepyoName" id="daepyoName" value=""></input>&nbsp;</td>
	        			</tr>
	            		<tr>
	        				<th align="center">2. 업소명</th>
	        				<td align="center" class="listtd">
	        					<!-- 지목 select box -->
								<!-- 지목 select box -->
								<select name="marketDiv" id="marketDiv" cssClass="use" onchange="javascript:changeMarketDiv();">
								    <option value="1" >업소</option>
								    <option value="0">자체</option>
							</select>
	        				</td>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="marketName" id="marketName" value=""></input> &nbsp;</td>
	        				<th align="center">대표자</th>
	        				<td align="center" class="listtd"><input type="text" name ="marketCeo" id="marketCeo" value=""></input>&nbsp;</td>
	        			</tr>
	        			<tr>
	        				<th align="center">3. 채무자</th>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="debtor" id="debtor" value=""></input>&nbsp;</td>
	        				<th align="center" colspan=2>5. 체무자와 담보제공자의 관계</th>
	        				<td align="center" class="listtd"><input type="text" name ="debtorRelation" id="debtorRelation" value="채무자 본인"></input>&nbsp;</td>
	        			</tr>
	        			<tr>
	        				<th align="center">4. 담보제공자</th>
	        				<td align="center" class="listtd" colspan=2><input type="text" name ="guarantor" id="guarantor" value=""></input>&nbsp; </td>
	        				<th align="center" colspan=2>6. 이 담보물에 대한 재감정 여부</th>
	        				<td align="center" class="listtd"><input type="text" name ="esDiv" id="esDiv" value="최초감정"></input>&nbsp;</td>
	        			</tr>
	        		</table>
	        		</c:if>
	        	</div>
	        	<!-- 부동산 표시 start -->
	        	<div id="table">
				--> 부동산의 표시
				<c:if test="${!empty selectEs01_w02_p02Es2011ist}">
				<c:forEach var="BuildingList" items="${selectEs01_w02_p02Es2011ist}" varStatus="status">
				<!-- 
				<c:set var="elapYear" value="${BuildingList.elapYear}"> </c:set>
				<c:set var="cbYyyy" value="${BuildingList.cbYyyy}"> </c:set>
				<c:set var="numHousehold" value="${BuildingList.numHousehold}"> </c:set>
				 -->
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
						<th align="left" colspan="11">1. 감정 대상 부동산의 표시</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<th align="center" colspan="3">소재지</th>
						<th align="center" colspan="3">지번</th>
						<th align="center" colspan="3">집합건물의 명칭</th>
						<th align="center">동수</th>
						<th align="center">호수</th>
					  </tr>
					  <tr>
						<td class="tg-0pky" colspan="3"><input type="text" name="juso1" id="juso1" value="${BuildingList.juso1}" size=100></input>
						</td>
						<td class="tg-0pky" colspan="3"><input type="text" name="lotNum" id="lotNum" value="${BuildingList.lotNum}"></input></td>
						<td class="tg-0pky" colspan="3"><input type="text" name="cbName" id="cbName" value="${BuildingList.cbName}"></input></td>
						<td class="tg-0pky"><input type="text" name="dong" id="dong" value="${BuildingList.dong}"></input></td>
						<td class="tg-0pky"><input type="text" name="ho" id="ho" value="${BuildingList.ho}"></input></td>
					  </tr>
					  <tr>
						<th class="tg-c3ow">지목</th>
						<th class="tg-c3ow">대지권의 목적인 일단의 <br>토지 전체의 면적&nbsp;</th>
						<th class="tg-c3ow">대지원 소유 / 추정세대수 </th>
						<th class="tg-c3ow" colspan="8">가임대보증금 적용지역</th>
					  </tr>
					  <tr>
						<td class="tg-0pky">
							<!-- 지목 select box -->
							<select name="lcategory" id="lcategory" cssClass="use" ">
								<c:forEach var="landUseZoneList" items="${selectLandUseZoneList}" varStatus="status" >
									<option value="${landUseZoneList.cdCode}" <c:if test="${landUseZoneList.cdCode eq BuildingList.lcategory }">selected</c:if>>${landUseZoneList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
						<td class="tg-0pky"><input type="text" name="lgSize" id="lgSize" value="${BuildingList.lgSize}" ></input>&nbsp; </td>
						<td class="tg-0pky"><input type="text" name="lgOwner" id="lgOwner" value="${BuildingList.lgOwner}"></input>&nbsp; / 
							<input type="text" name="seadesu" id="seadesu" value="" readonly ></input><input type="text" name="lgSizePy" id="lgSizePy" value="" readonly></input>평 
						</td>
						<td class="tg-0pky" colspan="8">
							<!-- 적용지역 select box -->
							<select name="possAAreaBid" id="possAAreaBid" cssClass="use" onchange="javascript:changeBidTablePossAArea(this);">
								<c:forEach var="regDepsitAppAreaList" items="${selectRegDepsitAppAreaList}" varStatus="status">
									<option value="${regDepsitAppAreaList.cdCode}" value2="${regDepsitAppAreaList.attr02}" value3="${regDepsitAppAreaList.attr03}" <c:if test="${regDepsitAppAreaList.cdCode eq BuildingList.possAArea }">selected</c:if>>${regDepsitAppAreaList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
					  </tr>
					  <tr>
						<th align="left" colspan="11">2. 집합건물에 관한 사항</th>
					  </tr>
					  <tr>
						<th align="center" rowspan="3">전체 규모 및 <br> 전용부분의 위치</th>
						<th align="center">구조</th>
						<th align="center">지붕</th>
						<th align="center">지상</th>
						<th align="center">지하</th>
						<th align="center">해당층</th>
						<th align="center">건축일자</th>
						<th align="center">내용연수</th>
						<th align="center">잔가율</th>
						<th align="center">전유면적</th>
						<td ><input type="text" name=cbExmSize id=cbExmSize value="${BuildingList.cbExmSize}" />㎡ </td>  
						<td ><input type="text" name=cbExmSizePy id=cbExmSizePy value="${BuildingList.cbExmSizePy }" /> 평</td>
					  </tr>
					  <tr>
						<td align="center" rowspan="2" colspan=2>
							<!-- 구조  select box -->
							<select name="cbStruc" id="cbStruc" cssClass="use" onchange="javascript:fn_Structure();">
								<c:forEach var="buildingStructureList" items="${selectEs01_w02_p02DIV301List}" varStatus="status">
									<option value="${buildingStructureList.cdCode}"  value2="${buildingStructureList.numYear}" <c:if test="${buildingStructureList.cdCode eq BuildingList.cbStruc }">selected</c:if>>${buildingStructureList.cdDesc}</option>
								</c:forEach>
							</select>
							<!-- 지붕  select box -->
							<select name="cbRoof" id="cbRoof" cssClass="use">
								<c:forEach var="roofTypeList" items="${selectEs01_w02_p02157List}" varStatus="status">
									<option value="${roofTypeList.cdCode}" <c:if test="${roofTypeList.cdCode eq BuildingList.cbRoof }">selected</c:if>>${roofTypeList.cdDesc}</option>
								</c:forEach>
							</select>
						
						<td align="center" rowspan="2"><input type="text" name="cbUpfloor" id="cbUpfloor" value="${BuildingList.cbUpfloor}"></input></td>
						<td align="center" rowspan="2"><input type="text" name="cbDnfloor" id="cbDnfloor" value="${BuildingList.cbDnfloor}"></input></td>
						<td align="center" rowspan="2"><input type="text" name="cbFloor" id="cbFloor" value="${BuildingList.cbFloor}"></input></td>
						<td class="tg-0pky"> <input type="text" name="cbYyyy" id="cbYyyy" value="${BuildingList.cbYyyy}" maxlength="10"></input></td>
						<td class="tg-0pky"><input type="text" name="num_year" id="num_year" value="${BuildingList.numYear}"></input> </td>
						<td class="tg-0pky"><input type="text" name="ofJangaRate" id="ofJangaRate" value="${BuildingList.ofJangaRate}"></input> </td>
						<th align="center">공유면적 </th>
						<td class="tg-0pky"><input type="text" name="cbPubSize" id="cbPubSize" value="<fmt:formatNumber value="${BuildingList.cbPubSize }" pattern=".00" />"/>㎡</td>
						<td class="tg-0pky"><input type="text" name="cbPubSizePy" id="cbPubSizePy" value="<fmt:formatNumber value="${BuildingList.cbPubSizePy }" pattern=".00" />"/>평</td>
					  </tr>
					  <tr>
						<td class="tg-0pky" colspan="2"><input type="text" name="elapYear" id="elapYear" value="${BuildingList.elapYear}"/>년 결과</td>
						<th align="center">면적합계</th>
						<td class="tg-0pky"><input type="text" name="cbTotSize" id="cbTotSize" value="<fmt:formatNumber value="${BuildingList.cbTotSize}" pattern=".00" />" readonly/>㎡</td>
						<td class="tg-0pky"><input type="text" name="cbTotSizePy" id="cbTotSizePy" value="<fmt:formatNumber value="${BuildingList.cbTotSizePy}" pattern=".00" />" readonly/>평</td>
						
					  </tr>
					  <c:if test="${empty selectEs01_w03_p01ES2017List}">
					  <tr>
						<th align="left" colspan="11">3. 감정 대상 부동산에의 규제의 표시</th>
					  </tr>
					  <tr>
						<th align="center" rowspan="3">지역/지구등 <br>지정여부</th>
						<th align="center" colspan="5">국토의 계획 및 이용에 관한 법률에 따른 지역/지구등</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restPlUse" id="restPlUse" value="" size=100></input> </td>
					  </tr>
					  <tr>
						<th align="center" colspan="5">다른 법률등에 따른 지역 /지구등</th>
						<td  colspan="5"><input type="text" name="restOtLaw" id="restOtLaw" value="" size=100></input> </td>
					  </tr>
					  <tr>
						<th align="center" colspan="5">시행령 부착 제3조에 따른 추가기재확인 내용</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restEnRule" id="restEnRule" value="" size=100> </input> </td>
					  </tr>
					  <tr>
						<th align="center" colspan="6">토지이용규제 기본법시행령 제 9조 제2항 각호에 해당디는 사항</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restFuLaw" id="restFuLaw" value="" size=100></input></td>
					  </tr>
					 
					  </c:if>
					   <c:if test="${!empty selectEs01_w03_p01ES2017List}">
					  <c:forEach var="regulatoryAffairsOfficerList" items="${selectEs01_w03_p01ES2017List}" varStatus="status">
					  <tr>
						<th align="left" colspan="11">3. 감정 대상 부동산에의 규제의 표시</th>
					  </tr>
					  <tr>
						<th align="center" rowspan="3">지역/지구등 <br>지정여부</th>
						<th align="center" colspan="5">국토의 계획 및 이용에 관한 법률에 따른 지역/지구등</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restPlUse" id="restPlUse" value="${regulatoryAffairsOfficerList.restPlUse}" size=100></input> </td>
					  </tr>
					  <tr>
						<th align="center" colspan="5">다른 법률등에 따른 지역 /지구등</th>
						<td  colspan="5"><input type="text" name="restOtLaw" id="restOtLaw" value="${regulatoryAffairsOfficerList.restOtLaw}" size=100></input> </td>
					  </tr>
					  <tr>
						<th align="center" colspan="5">시행령 부착 제3조에 따른 추가기재확인 내용</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restEnRule" id="restEnRule" value="${regulatoryAffairsOfficerList.restEnRule}" size=100></input> </td>
					  </tr>
					  <tr>
						<th align="center" colspan="6">토지이용규제 기본법시행령 제 9조 제2항 각호에 해당디는 사항</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restFuLaw" id="restFuLaw" value="${regulatoryAffairsOfficerList.restFuLaw}" size=100></input></td>
					  </tr>
					  </c:forEach>
					  </c:if>
					</tbody>
					</table>
					</c:forEach>
					</c:if>
					<!-- 신규입력 -->
					<c:if test="${empty selectEs01_w02_p02Es2011ist}">
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
						<th align="left" colspan="11">1. 감정 대상 부동산의 표시</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<th align="center" colspan="3">소재지</th>
						<th align="center" colspan="3">지번</th>
						<th align="center" colspan="3">집합건물의 명칭</th>
						<th align="center">동수</th>
						<th align="center">호수</th>
					  </tr>
					  <tr>
						<td class="tg-0pky" colspan="3"><input type="text" name="juso1" id="juso1" value="" size=100></input></td>
						<td class="tg-0pky" colspan="3"><input type="text" name="lotNum" id="lotNum" value=""></input></td>
						<td class="tg-0pky" colspan="3"><input type="text" name="cbName" id="cbName" value=""></input></td>
						<td class="tg-0pky"><input type="text" name="dong" id="dong" value=""></input></td>
						<td class="tg-0pky"><input type="text" name="ho" id="ho" value=""></input></td>
					  </tr>
					  <tr>
						<th class="tg-c3ow">지목</th>
						<th class="tg-c3ow">대지권의 목적인 일단의 <br>토지 전체의 면적&nbsp;</th>
						<th class="tg-c3ow">대지원 소유 / 추정세대수 </th>
						<th class="tg-c3ow" colspan="8">가임대보증금 적용지역</th>
					  </tr>
					  <tr>
						<td class="tg-0pky">
							<!-- 지목 select box -->
							<select name="lcategory" id="lcategory" cssClass="use" ">
								<c:forEach var="landUseZoneList" items="${selectLandUseZoneList}" varStatus="status" >
									<option value="${landUseZoneList.cdCode}" >${landUseZoneList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
						<td class="tg-0pky"><input type="text" name="lgSize" id="lgSize" value="" ></input>&nbsp; </td> 
						<td class="tg-0pky"><input type="text" name="lgOwner" id="lgOwner" value=""></input> &nbsp; / <input type="text" name="seadesu" id="seadesu" value="" readonly>&nbsp;<input type="text" name="lgSizePy" id="lgSizePy" value="" readonly></input>평 </td>
						<td class="tg-0pky" colspan="8">
							<!-- 적용지역 select box -->
							<select name="possAAreaBid" id="possAAreaBid" cssClass="use" onchange="javascript:changeBidTablePossAArea(this);">
								<c:forEach var="regDepsitAppAreaList" items="${selectRegDepsitAppAreaList}" varStatus="status">
									<option value="${regDepsitAppAreaList.cdCode}" value2="${regDepsitAppAreaList.attr02}" value3="${regDepsitAppAreaList.attr03}">${regDepsitAppAreaList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
					  </tr>
					  <tr>
						<th align="left" colspan="11">2. 집합건물에 관한 사항</th>
					  </tr>
					  <tr>
						<th align="center" rowspan="3">전체 규모 및 <br> 전용부분의 위치</th>
						<th align="center">구조</th>
						<th align="center">지붕</th>
						<th align="center">지상</th>
						<th align="center">지하</th>
						<th align="center">해당층</th>
						<th align="center">건축일자</th>
						<th align="center">내용연수</th>
						<th align="center">잔가울</th>
						<th align="center">전유면적</th>
						<td ><input type="text" name=cbExmSize id=cbExmSize value="" />㎡ </td>  
						<td ><input type="text" name=cbExmSizePy id=cbExmSizePy value=""/> 평</td>
					  </tr>
					  <tr>
						<td align="center" rowspan="2" colspan="2">1
							<!-- 구조  select box -->
							<select name="cbStruc" id="cbStruc" cssClass="use" onchange="javascript:fn_Structure();">
								<c:forEach var="buildingStructureList" items="${selectEs01_w02_p02DIV301List}" varStatus="status"  >
									<option value="${buildingStructureList.cdCode}" value2="${buildingStructureList.numYear}">${buildingStructureList.cdDesc}</option>
								</c:forEach>
							</select>
							2<select name="cbRoof" cssClass="use">
								<c:forEach var="roofTypeList" items="${selectEs01_w02_p02157List}" varStatus="status">
									<option value="${roofTypeList.cdCode}" >${roofTypeList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
						
						<td align="center" rowspan="2"><input type="text" name=cbUpfloor id=cbUpfloor value=""/></td>
						<td align="center" rowspan="2"><input type="text" name=cbDnfloor id=cbDnfloor value=""/></td>
						<td align="center" rowspan="2"><input type="text" name=cbFloor id=cbFloor value=""/></td>
						<td class="tg-0pky"><input type="text" name=cbYyyy id=cbYyyy value="" maxlength=10 /> </td>
						<td class="tg-0pky"><input type="text" name=num_year id=num_year value=""/> </td>
						<td class="tg-0pky"><input type="text" name=ofJangaRate id=ofJangaRate value=""/> </td>
						<th align="center">공유면적 </th>
						<td class="tg-0pky"><input type="text" name="cbPubSize" id="cbPubSize" value=""/>㎡</td>
						<td class="tg-0pky"><input type="text" name="cbPubSizePy" id="cbPubSizePy" value=""/>평</td>
					  </tr>
					  <tr>
						<td class="tg-0pky" colspan="2"><input type="text" name="elapYear" id="elapYear" value=""/> 년 결과</td>
						<th align="center">면적합계</th>
						<td class="tg-0pky"><input type="text" name="cbTotSize" id="cbTotSize" value="" />㎡</td>
						<td class="tg-0pky"><input type="text" name="cbTotSizePy" id="cbTotSizePy" value="" />평</td>
						
					  </tr>
					  <tr>
						<th align="left" colspan="11">3. 감정 대상 부동산에의 규제의 표시</th>
					  </tr>
					  <tr>
						<th align="center" rowspan="3">지역/지구등 <br>지정여부</th>
						<th align="center" colspan="5">국토의 계획 및 이용에 관한 법률에 따른 지역/지구등</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restPlUse" id="restPlUse" value="" size=200></input></td>
					  </tr>
					  <tr>
						<th align="center" colspan="5">다른 법률등에 따른 지역 /지구등</th>
						<td  colspan="5"><input type="text" name="restOtLaw" id="restOtLaw" value="" size=200></input></td>
					  </tr>
					  <tr>
						<th align="center" colspan="5">시행령 부착 제3조에 따른 추가기재확인 내용</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restEnRule" id="restEnRule" value=""  size=200></input></td>
					  </tr>
					  <tr>
						<th align="center" colspan="6">토지이용규제 기본법시행령 제 9조 제2항 각호에 해당디는 사항</th>
						<td class="tg-0pky" colspan="5"><input type="text" name="restFuLaw" id="restFuLaw" value="" size=200></input> </td>
					  </tr>
					 
					</tbody>
					</table>
					</c:if>

				</div>
	        	<!-- 부동산 표시 end --> 
	        	<!-- 감정에 관한 사항 start -->
	        	<c:if test="${!empty selectEs01_w02_p02Es2011ist}">
	        	<c:forEach var="BuildingList" items="${selectEs01_w02_p02Es2011ist}" varStatus="status">
				<div id="table">
				--> 감정에 관한 사항
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
						<th>구분</th>
						<th>총액</th>
						<th>㎡당 단가</th>
						<th>평단 단가</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<th class="tg-0lax">1. 실거래가격 (등기부상 실거래가격)</th>
						<td class="tg-0pky"><input type="text" name="regiAmt" id="regiAmt" value="${BuildingList.regiAmt }"></input></td>
						<td class="tg-0pky"><input type="text" name="regiDan" id="regiDan"  value="${BuildingList.regiDan }" readonly /> </td>
						<td class="tg-0pky"><input type="text" name="regiDanPy" id="regiDanPy"  value="${BuildingList.regiDanPy }" readonly /> </td>
						</tr>
					  <tr>
						<th class="tg-0lax">2. 공동주택가격</th>
						<td class="tg-0pky"><input type="text" name="baseAmt" id="baseAmt" value="${BuildingList.baseAmt }"></input></td>
						<td class="tg-0pky"><input type="text" name="baseDan" id="baseDan"  value="${BuildingList.baseDan }" readonly /> </td>
						<td class="tg-0pky"><input type="text" name="baseDanPy" id="baseDanPy"  value="${BuildingList.baseDanPy }" readonly /> </td>
						</tr>
					</tbody>
					</table>
				</div>
				<!-- 감정에 관한 사항 end -->
	        	<!-- 담보제공 비율  start -->
				<div id="table">
				<c:set var="secRegiSize" value="${BuildingList.secRegiSize}"> </c:set>
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
						<th rowspan="2">등기부상 전용면적</th>
						<th colspan="3">담보제공비율</th>
						<th rowspan="2">담보제공면적</th>
						<th rowspan="2">사유</th>
					  </tr>
					  <tr>
						<th>분자</th>
						<th>분모</th>
						<th>비율</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td><input type="text" name="secRegiSize" id="secRegiSize" value="<fmt:formatNumber value="${BuildingList.secRegiSize }" pattern=".00" />"  /> </td>
						<td><input type="text" name="secNume" id="secNume" value="<fmt:formatNumber value="${BuildingList.secNume }" pattern=".00" />"  /> </td>
						<td><input type="text" name="secDeno" id="secDeno" value="<fmt:formatNumber value="${BuildingList.secDeno }" pattern=".00" />"  /> </td>
						<td><input type="text" name="secRate" id="secRate" value="<fmt:formatNumber value="${BuildingList.secRate }" pattern=".00" />" readonly /> </td>
						<td><input type="text" name="secOfferSize" id="secOfferSize" value="<fmt:formatNumber value="${BuildingList.secOfferSize }" pattern=".00" />" readonly/> </td>
						<td><input type="text" name="secDesc" id="secDesc" value="${BuildingList.secDesc }"/> </td>
					
					  </tr>
					</tbody>
					</table>
				</div>
				</c:forEach>
				</c:if>
				<!-- 신규 -->
				<c:if test="${empty selectEs01_w02_p02Es2011ist}">
	        	
				<div id="table">
				--> 감정에 관한 사항
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
						<th>구분</th>
						<th>총액</th>
						<th>㎡당 단가</th>
						<th>평단 단가</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<th class="tg-0lax">1. 실거래가격 (등기부상 실거래가격)</th>
						<td class="tg-0pky"><input type="text" name="regiAmt" id="regiAmt" value="" /></td>
						<td class="tg-0pky"><input type="text" name="regiDan" id="regiDan" value="" readonly/></td>
						<td class="tg-0pky"><input type="text" name="regiDanPy" id="regiDanPy" value="" readonly /></td>
						</tr>
					  <tr>
						<th class="tg-0lax">2. 공동주택가격</th>
						<td class="tg-0lax"><input type="text" name="baseAmt" id="baseAmt" value="" > </input></td>
						<td class="tg-0lax"><input type="text" name="baseDan" id="baseDan" value=""></input> </td>
						<td class="tg-0lax"><input type="text" name="baseDanPy" id="baseDanPy" value="" readonly/> </td>
					  </tr>
					</tbody>
					</table>
				</div>
				<!-- 감정에 관한 사항 end -->
	        	<!-- 담보제공 비율  start -->
				<div id="table">
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
						<th rowspan="2">등기부상 전용면적</th>
						<th colspan="3">담보제공비율</th>
						<th rowspan="2">담보제공면적</th>
						<th rowspan="2">사유</th>
					  </tr>
					  <tr>
						<th>분자</th>
						<th>분모</th>
						<th>비율</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td><input type="text" name="secRegiSize" id="secRegiSize" value=""  /> </td>
						<td><input type="text" name="secNume" id="secNume" value=""  /> </td>
						<td><input type="text" name="secDeno" id="secDeno" value=""  /> </td>
						<td><input type="text" name="secRate" id="secRate" value="" readonly /> </td>
						<td><input type="text" name="secOfferSize" id="secOfferSize" value="" readonly/> </td>
						<td><input type="text" name="secDesc" id="secDesc" value=""/> </td>
					
					  </tr>
					</tbody>
					</table>
				</div>
				
				</c:if>
				<!-- 담보제공 비율 end -->
			<!-- 입력표 end -->
	        </div>
	        <!-- 입력표 end -->
	        <!-- 감정가액산출 start-->
	        <div id="appraisedValue">
	        	<div id="table">
				--> 시세조회내역<br/>
				--> 본건사례
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
						<thead>
						  <tr>
						    <th>건축년도</th>
						    <td>${cbYyyy}</td>
						    <th>세대수</th>
						    <td>${numHousehold}</td>
						  </tr>
						</thead>
						</table>
						<c:if test="${!empty selectEs01_w02_p02Es2182ist}">
							<c:forEach var="priceAptList" items="${selectEs01_w02_p02Es2182ist}" varStatus="status">
								<c:set var="checkYn1" value="${priceAptList.checkYn1}"> </c:set>
								<c:set var="onlySize1" value="${priceAptList.onlySize1}"> </c:set>
								<c:set var="currMinAmt1" value="${priceAptList.currMinAmt1}"> </c:set>
								<c:set var="currMaxAmt1" value="${priceAptList.currMaxAmt1}"> </c:set>
								<c:set var="currAvgAmt1" value="${priceAptList.currAvgAmt1}"> </c:set>
								<c:set var="currSizeDan1" value="${priceAptList.currSizeDan1}"> </c:set>
								<c:set var="leaseAmt1" value="${priceAptList.leaseAmt1}"> </c:set>
								<c:set var="leaseRate1" value="${priceAptList.leaseRate1}"> </c:set>
								<c:set var="checkYn2" value="${priceAptList.checkYn2}"> </c:set>
								<c:set var="onlySize2" value="${priceAptList.onlySize2}"> </c:set>
								<c:set var="currMinAmt2" value="${priceAptList.currMinAmt2}"> </c:set>
								<c:set var="currMaxAmt2" value="${priceAptList.currMaxAmt2}"> </c:set>
								<c:set var="currAvgAmt2" value="${priceAptList.currAvgAmt2}"> </c:set>
								<c:set var="currSizeDan2" value="${priceAptList.currSizeDan2}"> </c:set>
								<c:set var="leaseAmt2" value="${priceAptList.leaseAmt2}"> </c:set>
								<c:set var="leaseRate2" value="${priceAptList.leaseRate2}"> </c:set>
								<c:set var="checkYn3" value="${priceAptList.checkYn3}"> </c:set>
								<c:set var="onlySize3" value="${priceAptList.onlySize3}"> </c:set>
								<c:set var="currMinAmt3" value="${priceAptList.currMinAmt3}"> </c:set>
								<c:set var="currMaxAmt3" value="${priceAptList.currMaxAmt3}"> </c:set>
								<c:set var="currAvgAmt3" value="${priceAptList.currAvgAmt3}"> </c:set>
								<c:set var="currSizeDan3" value="${priceAptList.currSizeDan3}"> </c:set>
								<c:set var="leaseAmt3" value="${priceAptList.leaseAmt3}"> </c:set>
								<c:set var="leaseRate3" value="${priceAptList.leaseRate3}"> </c:set>
							</c:forEach>
						</c:if>
						<table width="100%" border="1" cellpadding="0" cellspacing="0" >
						<thead>
						 <tr>
						    <th rowspan="2">구분</th>
						    <th rowspan="2">층별</th>
						    <th colspan="5">시사조사내역</th>
						    <th colspan="2">평균 전세수준</th>
						  </tr>
						  <tr>
						    <th>전용면적</th>
						    <th>최저가격</th>
						    <th>최고가격</th>
						    <th>평균가격</th>
						    <th>전용면적단가</th>
						    <th>전세금</th>
						    <th>전세금/평균가격</th>
						  </tr>
						</thead>
						<tbody>
						 <tr>
						    <td><input type=checkbox name=checkYn1 id=checkYn1 <c:if test="${checkYn1 eq 'Y' }">checked</c:if> ></td>
						    <td>지하층</td>
						    <td><input type=text name=onlySize1 id=onlySize1 value='${onlySize1}'></td>
						    <td><input type=text name=currMinAmt1 id=currMinAmt1 value='${currMinAmt1}'></td>
						    <td><input type=text name=currMaxAmt1 id=currMaxAmt1 value='${currMaxAmt1}' ></td>
						    <td><input type=text name=currAvgAmt1 id=currAvgAmt1 value='${currAvgAmt1}' readonly></td>
						    <td><input type=text name=currSizeDan1 id=currSizeDan1 value='${currSizeDan1}' readonly></td>
						    <td><input type=text name=leaseAmt1 id=leaseAmt1 value='${leaseAmt1}'></td>
						    <td><input type=text name=leaseRate1 id=leaseRate1 value='${leaseRate1}' readonly></td>
						  </tr>
						  <tr>
						    <td><input type=checkbox name=checkYn2 id=checkYn2 <c:if test="${checkYn2 eq 'Y' }">checked</c:if>></td>
						    <td>기준층</td>
						     <td><input type=text name=onlySize2 id=onlySize2 value='${onlySize2}'></td>
						    <td><input type=text name=currMinAmt2 id=currMinAmt2 value='${currMinAmt2}'></td>
						     <td><input type=text name=currMaxAmt2 id=currMaxAmt2 value='${currMaxAmt2}'></td>
						    <td><input type=text name=currAvgAmt2 id=currAvgAmt2 value='${currAvgAmt2}' readonly></td>
						    <td><input type=text name=currSizeDan2 id=currSizeDan2 value='${currSizeDan2}' readonly></td>
						    <td><input type=text name=leaseAmt2 id=leaseAmt2 value='${leaseAmt2}'></td>
						    <td><input type=text name=leaseRate2 id=leaseRate2 value='${leaseRate2}' readonly></td>
						  </tr>
						  <tr>
						    <td><input type=checkbox name=checkYn3 id=checkYn3 <c:if test="${checkYn3 eq 'Y' }">checked</c:if> ></td>
						    <td>최고층</td>
						     <td><input type=text name=onlySize3 id=onlySize3 value='${onlySize3}'></td>
						      <td><input type=text name=currMinAmt3 id=currMinAmt3 value='${currMinAmt3}'></td>
						      <td><input type=text name=currMaxAmt3 id=currMaxAmt3 value='${currMaxAmt3}'></td>
						    <td><input type=text name=currAvgAmt3 id=currAvgAmt3 value='${currAvgAmt3}' readonly></td>
						    <td><input type=text name=currSizeDan3 id=currSizeDan3 value='${currSizeDan3}' readonly></td>
						    <td><input type=text name=leaseAmt3 id=leaseAmt3 value='${leaseAmt3}'></td>
						    <td><input type=text name=leaseRate3 id=leaseRate3 value='${leaseRate3}' readonly></td>
						  </tr>
						</tbody>
					</table>
				</div>
				<!-- 본건사례  end-->
				<!-- 가격사례  start-->
				<div id="table">
					<table border="1" cellpadding="1" cellspacing="1" >
					<tr>
						<td rowspan=3>
							<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
							<tbody>
								<tr>
									<td>사례번호</td>
									<td>소재지</td>
									<td>지번</td>
								</tr>
								<c:forEach var="selectEs2142List" items="${selectEs01_w02_p02Es2142List}" varStatus="status">
								<c:set var="priceLnSeq" value="${selectEs2142List.lnSeq}"> </c:set>
								<tr onclick="fn_priceNoClk(${priceLnSeq})"  name="divPrice" id="divPrice" >
									<td><input type=text name=priceLnSeq id=priceLnSeq${priceLnSeq} value='${selectEs2142List.lnSeq}'></input></td>
									<td><input type=text name=priceJuso id=priceJuso${priceLnSeq} value='${selectEs2142List.juso}'></input> </td>
									<td><input type=text name=priceLotNum id=priceLotNum${priceLnSeq} value='${selectEs2142List.lotNum}'></input> 
										<input type=hidden name=priceDistance id=priceDistance${priceLnSeq} value='${selectEs2142List.distance}'></input> 
										<input type=hidden name=priceHouseCnt id=priceHouseCnt${priceLnSeq} value='${selectEs2142List.houseCnt}'></input> 
										<input type=hidden name=priceBYear id=priceBYear${priceLnSeq} value='${selectEs2142List.bYear}'></input> 
										<input type=hidden name=priceElapYear id=priceElapYear${priceLnSeq} value='${selectEs2142List.elapYear}'></input> 
										<input type=hidden name=priceCbStruc id=priceCbStruc${priceLnSeq} value='${selectEs2142List.cbStruc}'></input> 
										<input type=hidden name=priceNumYear id=priceNumYear${priceLnSeq} value='${selectEs2142List.numYear}'></input> 
										
										<input type=hidden name=priceCheckYn1 id=priceCheckYn1${priceLnSeq} value='${selectEs2142List.checkYn1}'></input> 
										<input type=hidden name=priceOnlySize1 id=priceOnlySize1${priceLnSeq} value='${selectEs2142List.onlySize1}'></input> 
										<input type=hidden name=priceCurrMinAmt1 id=priceCurrMinAmt1${priceLnSeq} value='${selectEs2142List.currMinAmt1}'></input> 
										<input type=hidden name=priceCurrMaxAmt1 id=priceCurrMaxAmt1${priceLnSeq} value='${selectEs2142List.currMaxAmt1}'></input> 
										<input type=hidden name=priceCurrAvgAmt1 id=priceCurrAvgAmt1${priceLnSeq} value='${selectEs2142List.currAvgAmt1}'></input> 
										<input type=hidden name=priceCurrSizeDan1 id=priceCurrSizeDan1${priceLnSeq} value='${selectEs2142List.currSizeDan1}'></input>
										<input type=hidden name=priceLeaseAmt1 id=priceLeaseAmt1${priceLnSeq} value='${selectEs2142List.leaseAmt1}'></input>
										<input type=hidden name=priceLeaseRate1 id=priceLeaseRate1${priceLnSeq} value='${selectEs2142List.leaseRate1}'></input>  
										
										<input type=hidden name=priceCheckYn2 id=priceCheckYn2${priceLnSeq} value='${selectEs2142List.checkYn2}'></input> 
										<input type=hidden name=priceOnlySize2 id=priceOnlySize2${priceLnSeq} value='${selectEs2142List.onlySize2}'></input> 
										<input type=hidden name=priceCurrMinAmt2 id=priceCurrMinAmt2${priceLnSeq} value='${selectEs2142List.currMinAmt2}'></input> 
										<input type=hidden name=priceCurrMaxAmt2 id=priceCurrMaxAmt2${priceLnSeq} value='${selectEs2142List.currMaxAmt2}'></input> 
										<input type=hidden name=priceCurrAvgAmt2 id=priceCurrAvgAmt2${priceLnSeq} value='${selectEs2142List.currAvgAmt2}'></input> 
										<input type=hidden name=priceCurrSizeDan2 id=priceCurrSizeDan2${priceLnSeq} value='${selectEs2142List.currSizeDan2}'></input>
										<input type=hidden name=priceLeaseAmt2 id=priceLeaseAmt2${priceLnSeq} value='${selectEs2142List.leaseAmt2}'></input>
										<input type=hidden name=priceLeaseRate2 id=priceLeaseRate2${priceLnSeq} value='${selectEs2142List.leaseRate2}'></input>  
										
										<input type=hidden name=priceCheckYn3 id=priceCheckYn3${priceLnSeq} value='${selectEs2142List.checkYn3}'></input> 
										<input type=hidden name=priceOnlySize3 id=priceOnlySize3${priceLnSeq} value='${selectEs2142List.onlySize3}'></input> 
										<input type=hidden name=priceCurrMinAmt3 id=priceCurrMinAmt3${priceLnSeq} value='${selectEs2142List.currMinAmt3}'></input> 
										<input type=hidden name=priceCurrMaxAmt3 id=priceCurrMaxAmt3${priceLnSeq} value='${selectEs2142List.currMaxAmt3}'></input> 
										<input type=hidden name=priceCurrAvgAmt3 id=priceCurrAvgAmt3${priceLnSeq} value='${selectEs2142List.currAvgAmt3}'></input> 
										<input type=hidden name=priceCurrSizeDan3 id=priceCurrSizeDan3${priceLnSeq} value='${selectEs2142List.currSizeDan3}'></input>
										<input type=hidden name=priceLeaseAmt3 id=priceLeaseAmt3${priceLnSeq} value='${selectEs2142List.leaseAmt3}'></input>
										<input type=hidden name=priceLeaseRate3 id=priceLeaseRate3${priceLnSeq} value='${selectEs2142List.leaseRate3}'></input>  
									</td>
								</tr>
								</c:forEach>
							</tbody>
						</table>
						</td>
					</tr>
					<tr>
						<td>
							<table border="1" cellpadding="1" cellspacing="1" >
								<tbody>
								<tr>
										<td colspan=8><a href="javascript:fn_priceAddClk();">신규추가</a>&nbsp;&nbsp;&nbsp;<a href="javascript:fn_pricePlusClk();">저장</a></td>
									</tr>
									<tr>
										<td>사례번호</td>
										
										<td><input type="text" name="tmpLnSeq" id="tmpLnSeq" value="0" readonly></input></td>
										<td>소재지</td>
										<td colspan=3><input type="text" name="tmpJuso" id="tmpJuso" value="0" size="50"></input></td>
										<td>지번</td>
										<td><input type="text" name="tmpLotNum" id="tmpLotNum" value=""></input></td>
									</tr>
									<tr>
										<td>본건과거리</td>
										<td>
										<select name="tmpDistance" id="tmpDistance" cssClass="use">
											<c:forEach var="tmpDistance" items="${selectEs01_w02_p02DIV185List}" varStatus="status">
												<option value="${tmpDistance.cdCode}"  value2="${tmpDistance.idx}">${tmpDistance.cdDesc}</option>
											</c:forEach>
										</select>
										</td>
										<td>세대수</td>
										<td><input type=text name="tmpHouseCnt" id="tmpHouseCnt" value=""></td>
										<td>건축년도</td>
										<td><input type=text name="tmpBYear" id="tmpBYear" value="" maxlength=4></td>
										<td style="width:132px">경과년수</td>
										<td style="width:195px"><input type=text name="tmpElapYear" id="tmpElapYear" value=""></td>
									</tr>
									<tr>
										<td>구조</td>
										<td colspan="4" rowspan="1">
										<select name="tmpCbStruc" id="tmpCbStruc" cssClass="use"  onchange="javascript:changeTmpCbStruc();">
											<c:forEach var="tmpCbStruc" items="${selectEs01_w02_p02DIV301List}" varStatus="status">
												<option value="${tmpCbStruc.cdCode}"  value2="${tmpCbStruc.numYear}">${tmpCbStruc.cdDesc}</option>
											</c:forEach>
										</select>
										<input type=hidden name=tmpOfJanga id=tmpOfJanga value=""></input>
										</td>
										<td>내용년수</td>
										<td style="width:132px"><input type=text name="tmpNumYear" id="tmpNumYear" value=""></td>
										<td style="width:195px"></td>
									</tr>
								</tbody>
							</table>
					     </td>
					</tr>
					<tr>
						<td>
						<table width="100%" border="1" cellpadding="0" cellspacing="0" >
							<thead>
							 <tr>
							    <th rowspan="2">구분</th>
							    <th rowspan="2">층별</th>
							    <th colspan="5">시사조사내역</th>
							    <th colspan="2">평균 전세수준</th>
							  </tr>
							  <tr>
							    <th>전용면적</th>
							    <th>최저가격</th>
							    <th>최고가격</th>
							    <th>평균가격</th>
							    <th>전용면적단가</th>
							    <th>전세금</th>
							    <th>전세금/평균가격</th>
							  </tr>
							</thead>
							<tbody>
							<!--  가격사례 -->
							<tr>
							    <td><input type=checkbox name="tmpCheckYn11" id="tmpCheckYn11"></input><input type=hidden name="tmpCheckYn1" id="tmpCheckYn1" value="" ></input></td>
							    <td>지하층</td>
							    <td><input type=text name="tmpOnlySize1" id="tmpOnlySize1" value=""></input></td>
							    <td><input type=text name="tmpCurrMinAmt1" id="tmpCurrMinAmt1" value=""></input></td>
							    <td><input type=text name="tmpCurrMaxAmt1" id="tmpCurrMaxAmt1" value="" ></input></td>
							    <td><input type=text name="tmpCurrAvgAmt1" id="tmpCurrAvgAmt1" value="" readonly></input></td>
							    <td><input type=text name="tmpCurrSizeDan1" id="tmpCurrSizeDan1" value=""  readonly></input></td>
							    <td><input type=text name="tmpLeaseAmt1" id="tmpLeaseAmt1" value=""></input></td>
							    <td><input type=text name="tmpLeaseRate1" id="tmpLeaseRate1" value="" readonly></input></td>
							  </tr>
							  <tr>
							    <td><input type=checkbox name="tmpCheckYn21" id="tmpCheckYn21" ><input type=hidden name="tmpCheckYn2" id="tmpCheckYn2" value=""></input></td>
							    <td>기준층</td>
							     <td><input type=text name=tmpOnlySize2 id=tmpOnlySize2 value=""></input></td>
							    <td><input type=text name=tmpCurrMinAmt2 id=tmpCurrMinAmt2 value=""></input></td>
							     <td><input type=text name=tmpCurrMaxAmt2 id=tmpCurrMaxAmt2 value=""></input></td>
							    <td><input type=text name=tmpCurrAvgAmt2 id=tmpCurrAvgAmt2 value="" readonly></input></td>
							    <td><input type=text name=tmpCurrSizeDan2 id=tmpCurrSizeDan2 value="" readonly></input></td>
							    <td><input type=text name=tmpLeaseAmt2 id=tmpLeaseAmt2 value=""></input></td>
							    <td><input type=text name=tmpLeaseRate2 id=tmpLeaseRate2 value=""' readonly></input></td>
							  </tr>
							  <tr>
							    <td><input type=checkbox name=tmpCheckYn31 id=tmpCheckYn31 ><input type=hidden name=tmpCheckYn3 id=tmpCheckYn3 value=""></input></td>
							    <td>최고층</td>
							    <td><input type=text name=tmpOnlySize3 id=tmpOnlySize3 value=""></input></td>
							    <td><input type=text name=tmpCurrMinAmt3 id=tmpCurrMinAmt3 value=""></input></td>
							    <td><input type=text name=tmpCurrMaxAmt3 id=tmpCurrMaxAmt3 value=""></input></td>
							    <td><input type=text name=tmpCurrAvgAmt3 id=tmpCurrAvgAmt3 value="" readonly></input></td>
							    <td><input type=text name=tmpCurrSizeDan3 id=tmpCurrSizeDan3 value="" readonly></input></td>
							    <td><input type=text name=tmpLeaseAmt3 id=tmpLeaseAmt3 value=""></input></td>
							    <td><input type=text name=tmpLeaseRate3 id=tmpLeaseRate3 value="" readonly></input></td>
							  </tr>
							</tbody>
						</table>
						</td>
					</tr>
				</table>

				</div>
				<!-- 가격사례  end-->
				
				<!-- 경매사례  start-->
				<div id="table">
					<table style="width: 100%; border-collapse: collapse;" border="1">
					<thead>
					<tr>
						<td colspan=9>&nbsp;</td>
						<td colspan=3>
								<li>
			        	            <span class="btn_blue_l">
			        	                <a href="javascript:fn_addAuction();">add</a>
			        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
			        	            </span>
			        	        </li>   
						</td>
					  </tr>
					  <tr>
						<th>사례번호</th>
						<th>경매사건번호</th>
						<th>소재지</th>
						<th>해당층</th>
						<th>비준율</th>
						<th>전용면적</th>
						<th>건축년도</th>
						<th>경과년도</th>
						<th>구조</th>
						<th>내용연수</th>
						<th>법원감정가</th>
						<th>전용면적단가</th>
						<th>낙찰가</th>
						<th>낙찰율(%)</th>
					  </tr>
					</thead>
					<tbody >
					<c:if test="${empty selectEs01_w02_p02Es2112ist}">
					 <tr name="priceAuction" id="priceAuction">
					    <input type=hidden name=auLnSeq id=auLnSeq value="1"></input>
						<td><input type=text name=auLnSeqNm id=auLnSeqNm value="A"></input>  </td>
						<td><input type="text" name="auNo" id="auNo" value=""></input>&nbsp;</td>
						<td><input type="text" name="auJuso" id="auJuso" value=""></input>&nbsp;</td>
						<td>
							<select name="auFloorCode" id="auFloorCode" cssClass="use" onchange="javascript:changePriceAuction('1');">
								<c:forEach var="auFloorCodeList" items="${selectEs01_w02_p02DIV111List}" varStatus="status" >
									<option value="${auFloorCodeList.cdCode}"  value2="${auFloorCodeList.idx}" >${auFloorCodeList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
						<td><input type="text" name="auFloorRate" id="auFloorRate1" value="0" readonly></input></td> 
						<td><input type="text" name="auOnlySize" id="auOnlySize" value="" ></input>&nbsp;</td>
						<td><input type="text" name="auBYear" id="auBYear1" value="" onkeypress="javascript:fn_auBYearValue('1')"></input>&nbsp;</td>
						<td><input type="text" name="auElapYear" id="auElapYear1" value="" readonly></input>&nbsp;</td>
						<td>
							<select name="auCbStruc" id="auCbStruc" cssClass="use"  onchange="javascript:changeAuCbStruc('1');">
								<c:forEach var="auCbStrucList" items="${selectEs01_w02_p02DIV301List}" varStatus="status">
									<option value="${auCbStrucList.cdCode}"  value2="${auCbStrucList.numYear}">${auCbStrucList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
						<td><input type="text" name="auNumYear" id="auNumYear1" value="0"></input>&nbsp;</td>
						<td><input type="text" name="auLawAmt" id="auLawAmt0" value="0" onclick="fn_auBidAmtCnt('0')"></input>&nbsp;</td>
						<td><input type="text" name="auCurrSizeDan" id="auCurrSizeDan" value="0"  onclick="fn_auBidAmtCnt('0')"></input>&nbsp;
						<td><input type="text" name="auBidAmt" id="auBidAmt0" value="0"  onclick="fn_auBidAmtCnt('0')"></input>&nbsp;</td>
						<td><input type="text" name="auBidRate" id="auBidRate0" value="0"></input>&nbsp;</td>
						<input type="button" name="delAuction" value="del"/></td>
					  </tr>
					  </c:if>
					  <c:if test="${!empty selectEs01_w02_p02Es2112ist}">
					   <c:forEach var="priceAuctionList" items="${selectEs01_w02_p02Es2112ist}" varStatus="au" >
					   <tr name="priceAuction" id="priceAuction">
					    <input type=hidden name=auLnSeq id=auLnSeq value="${priceAuctionList.lnSeq}"></input>
						<td><input type=text name=auLnSeqNm id=auLnSeqNm value="${priceAuctionList.lnSeqNm}"></input>  </td>
						<td><input type="text" name="auNo" id="auNo" value="${priceAuctionList.auNo}"></input>&nbsp;</td>
						<td><input type="text" name="auJuso" id="auJuso" value="${priceAuctionList.juso}"></input>&nbsp;</td>
						<td>
							<select name="auFloorCode" id="auFloorCode" cssClass="use"  onchange="javascript:changePriceAuction(${au.count});">
								<c:forEach var="auFloorCodeList" items="${selectEs01_w02_p02DIV111List}" varStatus="status">
									<option value="${auFloorCodeList.cdCode}"  value2="${auFloorCodeList.idx}" <c:if test="${auFloorCodeList.cdCode eq priceAuctionList.floorCode }">selected</c:if>>${auFloorCodeList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
						<td><input type="text" name="auFloorRate" id=auFloorRate${au.count} value="${priceAuctionList.floorRate}" readonly></input></td>
						<td><input type="text" name="auOnlySize" id="auOnlySize${au.index}" value="${priceAuctionList.onlySize}"></input>&nbsp;</td>
						<td><input type="text" name="auBYear" id=auBYear${au.index} value="${priceAuctionList.bYear}" onkeypress="fn_auBYearValue(${au.index})"></input>&nbsp;</td>
						<td><input type="text" name="auElapYear" id=auElapYear${au.count} value="${priceAuctionList.elapYear}" readonly></input>&nbsp;</td>
						<td>
							<select name="auCbStruc" id="auCbStruc" cssClass="use"  onchange="javascript:changeAuCbStruc(${au.count});">
								<c:forEach var="auCbStrucList" items="${selectEs01_w02_p02DIV301List}" varStatus="status">
									<option value="${auCbStrucList.cdCode}"  value2="${auCbStrucList.numYear}" <c:if test="${auCbStrucList.cdCode eq priceAuctionList.cbStruc }">selected</c:if>>${auCbStrucList.cdDesc}</option>
								</c:forEach>
							</select>
						</td>
						<td><input type="text" name="auNumYear" id=auNumYear${au.count} value="${priceAuctionList.numYear}" readonly></input>&nbsp;</td>
						<td><input type="text" name="auLawAmt" id=auLawAmt${au.index} value="${priceAuctionList.lawAmt}" onclick="fn_auBidAmtCnt(${au.index})"></input>&nbsp;</td>
						<td><input type="text" name="auCurrSizeDan" id="auCurrSizeDan${au.index}" value="${priceAuctionList.currSizeDan}" onclick="fn_auBidAmtCnt(${au.index})"></input>&nbsp;
						<td><input type="text" name="auBidAmt" id=auBidAmt${au.index} value="${priceAuctionList.bidAmt}" onclick="fn_auBidAmtCnt(${au.index})"></input>&nbsp;</td>
						<td><input type="text" name="auBidRate" id="auBidRate${au.index}" value="${priceAuctionList.bidRate}"></input>&nbsp;<input type="button" name="delAuction" value="del"/></td>
						</td>
					  </tr>
					   </c:forEach>
					  </c:if>
					</tbody>
					</table>
				</div>
				<!-- 경매사례  end-->
				
				<!-- 담보제공 비율 end -->
	        </div>
	        <!-- 감정가액산출 end-->
	         <div id="appraisedValue2">
	         <div id="table">
					<table border="1" cellpadding="1" cellspacing="1" >
					<tr>
						<td rowspan=3>
							<table border="1" cellpadding="1" cellspacing="1">
							<tbody>
								<tr>
									<td>사례구분</td>
									<td>사례번호</td>
									<td>요인합계</td>
									<td>시점수정</td>
									<td>적용단가</td>
								</tr>
								<c:forEach var="price2" items="${selectEs01_w02_p02Es2122ist}" varStatus="priceB">
								<tr onclick="fn_price2NoClk(${priceB.index})">
									<td><input type=text name="price2ExampleGuNm" id=price2ExampleGuNm${priceB.index} value="${price2.exampleGuNm}" readonly ></input></td>
									<td><input type=text name="price2ExampleGuCd" id=price2ExampleGuCd${priceB.index} value="${price2.exampleGuCd}" readonly></input></td>
									<td><input type=text name="price2FactorTot" id=price2FactorTot${priceB.index} value="${price2.factorTot}" readonly></input></td>
									<td><input type=text name="price2PriceDateS" id=price2PriceDateS${priceB.index} value="${price2.priceDateS}" ></input></td>
									<td><input type=text name="price2ApplDan" id=price2ApplDan${priceB.index} value="${price2.applDan}" readonly></input>
									
									<input type=hidden name="price2ExampleGu" id=price2ExampleGu${priceB.index} value="${price2.exampleGu}"></input>
									<input type=hidden name="price2LnSeq" id=price2LnSeq${priceB.index} value="${price2.lnSeq}"></input>
									<input type=hidden name="price2Juso" id=price2Juso${priceB.index} value="${price2.juso}"></input>
									<input type=hidden name="price2JusoC" id=price2JusoC${priceB.index} value="${price2.jusoC}"></input><!--주소 비교치  -->
									<input type=hidden name="price2CurrSizeDan" id=price2CurrSizeDan${priceB.index} value="${price2.currSizeDan}"></input><!--전용면적단가 -->
									<!--
									<input type=hidden name="price2PriceDateS" id=price2PriceDateS${priceB.index} value="${price2.priceDateS}"></input>
									--><!--시점수정 날짜 -->
									<input type=hidden name="price2PriceRateC" id=price2PriceRateC${priceB.index} value="${price2.priceRateC}"></input><!--  시점수정 날짜 비교치-->
									<input type=hidden name="price2FloorMCode" id=price2FloorMCode${priceB.index} value="${price2.floorMCode}"></input> <!--층별비교 code left  -->
									<input type=hidden name="price2FloorMRate" id=price2FloorMRate${priceB.index} value="${price2.floorMRate}"></input> <!--층별비교 비율 left  -->
									<input type=hidden name="price2FloorSCode" id=price2FloorSCode${priceB.index} value="${price2.floorSCode}"></input> <!--층별비교 code right  -->
									<input type=hidden name="price2FloorSRate" id=price2FloorSRate${priceB.index} value="${price2.floorSRate}"></input> <!--층별비교 비율 right  -->
									<input type=hidden name="price2FloorC" id=price2FloorC${priceB.index} value="${price2.floorC}"></input> <!-- 층별 비교치  -->
									<input type=hidden name="price2OfJangaRateM" id=price2OfJangaRateM${priceB.index} value="${price2.ofJangaRateM}"></input> <!-- 잔가울 비교 left -->
									<input type=hidden name="price2OfJangaRateS" id=price2OfJangaRateS${priceB.index} value="${price2.ofJangaRateS}"></input> <!-- 잔가울 비교 righte -->
									<input type=hidden name="price2OfJangaRateC" id=price2OfJangaRateC${priceB.index} value="${price2.ofJangaRateC}"></input> <!-- 잔가울 total-->
									<!-- 
									<input type=hidden name="price2FactorTot" id=price2FactorTot${priceB.index} value="${price2.factorTot}"></input>
									--> <!-- 요인합계 -->
									<input type=hidden name="price2ApasDan" id=price2ApasDan${priceB.index} value="${price2.apasDan}"></input> <!-- 산정단가-->
									<!-- 
									<input type=hidden name="price2ApplDan" id=price2ApplDan${priceB.index} value="${price2.applDan}"></input> 
									 -->
									 <!-- 적용단가-->
									 <input type=hidden name="price2OnlySize" id=price2OnlySize${priceB.index} value="${price2.onlySize}"></input>
									 <input type=hidden name="price2PriceDateM" id=price2PriceDateM${priceB.index} value="${price2.priceDateM}"></input>
									 <input type=hidden name="price2PriceRateM" id=price2PriceRateM${priceB.index} value="${price2.priceRateM}"></input>
									 <input type=hidden name="price2PriceRateS" id=price2PriceRateS${priceB.index} value="${price2.priceRateS}"></input>
									 <input type=hidden name="price2MinAmt" id=price2MinAmt${priceB.index} value="${price2.minAmt}"></input>
									 <input type=hidden name="price2ManAmt" id=price2ManAmt${priceB.index} value="${price2.maxAmt}"></input>
									 <input type=hidden name="price2HwansanAmt" id=price2HwansanAmt${priceB.index} value="${price2.hwansanAmt}"></input>
									</td>
								</tr>
								</c:forEach>
							</tbody>
						</table>
						</td>
					</tr>
					<tr>
						<td>
							<table border="1" cellpadding="1" cellspacing="1">
							<tbody>
								<tr>
									<td>사례구분</td>
									<input type="hidden" name="pRowInNo" id="pRowInNo" value="X"></input>
									<td colspan="3"><input type=text name="pLeGuNm" id="pLeGuNm" value="" readOnly></input></td>
									<td colspan="3">사례번호</td>
									<td><input type=text name="pLeGuCd" id="pLeGuCd" value="" readOnly></input></td>
									<td>
									<li>
			        	            <span class="btn_blue_l">
			        	                <a href="javascript:fn_updatePrice();">저장</a>
			        	              
			        	            </span>
			        	        </li>   
									</td>
								</tr>
								<tr>
									<td>비교내용</td>
									<td colspan="3">본건요인</td>
									<td colspan="3">사례요인</td>
									<td colspan="2" >비교치</td>
								</tr>
								<tr>
									<td>
									<p>소재지</p>
									<p>(지역비교)</p>
									</td>
									<td colspan="3"><input type=text name="oriJuso" id="oriJuso" value="" readOnly></input></td>
									<td colspan="3"><input type=text name="pJuso" id="pJuso" value="" readOnly></input></td>
									<td colspan="2"><input type=text name="pJusoC" id="pJusoC" value=""></input></td>
								</tr>
								<tr>
									<td>전용면적 단가</td>
									<td colspan="3"></td>
									<td colspan="3"><input type=text name="pCurrSizeDan" id="pCurrSizeDan" value="" readOnly></input></td>
									<td colspan="2" ></td>
								</tr>
								<tr>
									<td rowspan="2"><p>시점수정</p><p>(물가지수)</p>
									</td>
									<td><input type=text name="oriPriceDateS" id="oriPriceDateS" value="" maxlength=8></input></td>
									<td>현재</td>
									<td><input type=text name="oriPriceRateC" id="oriPriceRateC" value="1"></input></td>
									<td><input type=text name="pPriceDateS" id="pPriceDateS" value="" maxlength=8></input></td>
									<td>부터 감정일까지</td>
									<td><input type=text name="pPriceRateC" id="pPriceRateC" value=""></input></td>
									<td colspan="2" rowspan="2"><input type=text name="pPriceRateCT" id="pPriceRateCT" value="" readonly></input></td>
								</tr>
								<tr>
									<td colspan="3"></td>
									<td colspan="3"><input type=text name="gapMonth" id="gapMonth" value="" readonly></input></td>
								</tr>
								<tr>
									<td>층별 비교</td>
									<td colspan="2">
									<select name="oriFloorMCode" id="oriFloorMCode"  cssClass="use">
												<option value="0" value2="0" ></option>
				        					<c:forEach var="oriFloorM" items="${selectEs01_w02_p02DIV177List}" varStatus="status">
				        						<option value="${oriFloorM.cdCode}" value2="${oriFloorM.idx}" >${oriFloorM.cdDesc}</option>
									    </c:forEach>
									</select> 
									</td>
									<td><input type=text name="oriFloorMRate" id="oriFloorMRate" value=""></input></td>
									<td colspan="2">
										<select name="pFloorSCode" id="pFloorSCode"  cssClass="use">
										         <option value="0" value2="0" ></option>
					        					<c:forEach var="pFloorSCode" items="${selectEs01_w02_p02DIV177List}" varStatus="status">
					        						<option value="${pFloorSCode.cdCode}" value2="${pFloorSCode.idx}" >${pFloorSCode.cdDesc}</option>
										    </c:forEach>
										</select> 
									</td>
									<td><input type=text name="pFloorMRate" id="pFloorMRate" value=""></input></td>
									<td colspan="2"><input type=text name="pFloorC" id="pFloorC" value="" readonly></input></td>
								</tr>
								<tr>
									<td>전가율 비교</td>
									<td colspan="3"><input type=text name="pOfJangaRateM" id="pOfJangaRateM" value="" readonly></input></td>
									<td colspan="3"><input type=text name="pOfJangaRateS" id="pOfJangaRateS" value="" readonly></input></td>
									<td colspan="2" ><input type=text name="pOfJangaRateC" id="pOfJangaRateC" value=""></input></td>
								</tr>
								<tr>
									<td colspan="7" >요인합계</td>
									<td colspan="2" ><input type=text name="pFactorTot" id="pFactorTot" value="" readonly></input></td>
								</tr>
								<tr>
									<td colspan="7" >산정단가(원/평)</td>
									<td colspan="2" ><input type=text name="pApasDan" id="pApasDan" value="" readonly></input></td>
								</tr>
								<tr>
									<td colspan="7" >적용단가(원/평)</td>
									<td colspan="2" ><input type=text name="pApplDan" id="pApplDan" value="" readonly></input></td>
								</tr>
							</tbody>
						</table>
					    </td>
					</tr>
					<tr>
						<td colspan=2>
							집계표
						</td>	
					</tr>
						<td colspan=2>
							<table border="1" cellpadding="1" cellspacing="1" >
								<tbody>
									<tr>
										<td rowspan="2">사례구분</td>
										<td rowspan="2">사례번호</td>
										<td rowspan="2">소재지</td>
										<td rowspan="2">전용면적단가</td>
										<td rowspan="2">시점수정</td>
										<td colspan="2">개별비교</td>
										<td rowspan="2">요인합계</td>
										<td rowspan="2">산정단가</td>
										<td rowspan="2">적용단가</td>
										<td rowspan="2">환삼금액</td>
									</tr>
									<tr>
										<td>층별비교</td>
										<td>잔가율비교</td>
									</tr>
									<c:forEach var="Es2122T" items="${selectEs01_w02_p02Es2122Totalist}" varStatus="status">
									<tr>
										<td>${Es2122T.exampleGuNm}</td>
										<td>${Es2122T.exampleGuCd}</td>
										<td>${Es2122T.juso}</td>
										<td>${Es2122T.currSizeDan}</td>
										<td>${Es2122T.priceRateC}</td>
										<td>${Es2122T.floorC}</td>
										<td>${Es2122T.ofJangaRateC}</td>
										<td>${Es2122T.factorTot}</td>
										<td>${Es2122T.apasDan}</td>
										<td>${Es2122T.applDan}</td>
										<td>${Es2122T.hwansanAmt}</td>
									</tr>
									</c:forEach>
								</tbody>
							</table>
						</td>
					</tr>
					
				</table>

				</div>
	         </div>
	         <!-- 감정가액산출3 start-->
	        <div id="appraisedValue3">
	        <!-- 감정에 관한 사항 start -->
				<div id="table">
				 <c:forEach var="appraiseMinMax" items="${selectEs01_w02_p02Es2102List}" varStatus="status">
				 <!-- 
				 	MA_MIN_AMT	본건사례_최저가격
					MA_MAX_AMT	본건사례_최고가격
					MA_RATE	본건사례_최저/최고비율
					PR_MIN_AMT	가격사례_최저가격
					PR_MAX_AMT	가격사례_최고가격
					PR_RATE	가격사례_최저/최고비율
					AU_MIN_AMT	경매사례_최저가격
					AU_MAX_AMT	경매사례_최고가격
					AU_RATE	경매사례_최저/최고비율
					APPL_AMT	결정가격 [수기입력]
					INT_REP_SIZE	인테리어_보수면적
					INT_REP_SIZE_PY	인테리어_보수면적_평
					INT_REP_DAN_CODE	인테리어_보수단가코드(CD_DIV: DIV191)
					INT_REP_DAN	인테리어_보수단가[평당단가 기재]
					INT_REP_AMT	인테리어_보수금액[보수단가*보수평형]
					INCREASE_AMT	평가가격[결정가격+인테리어금액합계]
					LAST_INCREASE_AMT	최종평가가격[(입력표_집합건물)담보제공비율_비율*평가가격]
									  -->
					<c:set var="maMinAmt" value="${appraiseMinMax.maMinAmt}"> </c:set>
					<c:set var="maMaxAmt" value="${appraiseMinMax.maMaxAmt}"> </c:set>
					<c:set var="maRate" value="${appraiseMinMax.maRate}"> </c:set>
					<c:set var="prMinAmt" value="${appraiseMinMax.prMinAmt}"> </c:set>
					<c:set var="prMaxAmt" value="${appraiseMinMax.prMaxAmt}"> </c:set>
					<c:set var="prRate" value="${appraiseMinMax.prRate}"> </c:set>
					<c:set var="auMinAmt" value="${appraiseMinMax.auMinAmt}"> </c:set>
					<c:set var="auMaxAmt" value="${appraiseMinMax.auMaxAmt}"> </c:set>
					<c:set var="auRate" value="${appraiseMinMax.auRate}"> </c:set>
					<c:set var="applAmt" value="${appraiseMinMax.applAmt}"> </c:set>
					<c:set var="intRepSize" value="${appraiseMinMax.intRepSize}"> </c:set>
					<c:set var="intRepSizePy" value="${appraiseMinMax.intRepSizePy}"> </c:set>
					<c:set var="intRepDanCode" value="${fn:trim(appraiseMinMax.intRepDanCode)}"> </c:set>
					<c:set var="intRepDan" value="${appraiseMinMax.intRepDan}"> </c:set>
					<c:set var="intRepAmt" value="${appraiseMinMax.intRepAmt}"> </c:set>
					<c:set var="increaseAmt" value="${appraiseMinMax.increaseAmt}"> </c:set>
					<c:set var="lastIncreaseAmt" value="${appraiseMinMax.lastIncreaseAmt}"> </c:set>
					<c:set var="fnlIncAmt" value="${appraiseMinMax.fnlIncAmt}"> </c:set>
					<c:set var="incSizeDan" value="${appraiseMinMax.incSizeDan}"> </c:set>
					<c:set var="incAmt" value="${appraiseMinMax.incAmt}"> </c:set>
					
					<c:set var="maMinSizeDan" value="${appraiseMinMax.maMinSizeDan}"> </c:set>
					<c:set var="maMaxSizeDan" value="${appraiseMinMax.maMaxSizeDan}"> </c:set>
					<c:set var="prMinSizeDan" value="${appraiseMinMax.prMinSizeDan}"> </c:set>
					<c:set var="prMaxSizeDan" value="${appraiseMinMax.prMaxSizeDan}"> </c:set>
					<c:set var="auMinSizeDan" value="${appraiseMinMax.auMinSizeDan}"> </c:set>
					<c:set var="applSizeDan" value="${appraiseMinMax.applSizeDan}"> </c:set>
				</c:forEach>
					<table style="width: 100%; border-collapse: collapse;" border="1">
					<thead>
					  <tr>
						<th colspan="3">구분</th>
						<th >금액(원)</th>
						<th >전용면적단가(㎡)</th>
						<th >초저/최고비율(%)</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td  rowspan="7">가격의 결정 </td>
						<td  rowspan="2">본건사례</td>
						<td >최저가격</td>
						<td><input type=text name="maMinAmt" id="maMinAmt" value="${maMinAmt}" readonly></input></td>
						<td><input type=text name="maMinSizeDan" id="maMinSizeDan" value="${maMinSizeDan}" readonly></input></td>
						<td rowspan="2"><input type="text" name="maRate" id="maRate" value='${maRate}' readonly></input></td>
					  </tr>
					  <tr>
						<td>최고가격</td>
						<td><input type=text name="maMaxAmt" id="maMaxAmt" value='${maMaxAmt}' readonly></input></td>
						<td><input type=text name="maMaxSizeDan" id="maMaxSizeDan" value="${maMaxSizeDan}" readonly></input></td>
					  </tr>
					  <tr>
						<td rowspan="2">인근 가격사례</td>
						<td>최저가격</td>
						<td><input type=text name="prMinAmt" id="prMinAmt" value='${prMinAmt}' readonly></input></td>
						<td><input type=text name="prMinSizeDan" id="prMinSizeDan" value='${prMinSizeDan}' readonly></input></td>
						<td rowspan="2"><input type=text name="prRate" id="prRate" value='${prRate}' readonly></input></td>
					  </tr>
					  <tr>
						<td>최고가격</td>
						<td><input type=text name="prMaxAmt" id="prMaxAmt" value='${prMaxAmt}' readonly></input></td>
						<td><input type=text name="prMaxSizeDan" id="prMaxSizeDan" value='${prMaxSizeDan}' readonly></input></td>
					  </tr>
					  <tr>
						<td rowspan="2">경매사례</td>
						<td>최저가격</td>
						<td><input type=text name="auMinAmt" id="auMinAmt" value='${auMinAmt}' readonly></input></td>
						<td><input type=text name="auMinSizeDan" id="auMinSizeDan" value='${auMinSizeDan}' readonly></input></td>
						<td rowspan="2"><input type=text name="auRate" id="auRate" value='${auRate}' readonly></input> </td>
					  </tr>
					  <tr>
						<td>최고가격</td>
						<td><input type=text name="auMaxAmt" id="auMaxAmt" value='${auMaxAmt}' readonly></input></td>
						<td><input type=text name="auMaxSizeDan" id="auMaxSizeDan" value='${auMaxSizeDan}' readonly></input></td>
					  </tr>
					  <tr>
						<td colspan="2">결정가격</td>
						<td colspan="2"><input type=text name="applAmt" id="applAmt" value="${applAmt}"></input></td>
						<td><input type=text name="applSizeDan" id="applSizeDan" value="${applSizeDan}"></input></td>
					  </tr>
					  <tr>
						<td  colspan="2" rowspan=3>인테리어 여부</td>
						<td>보수평형</td>
						<td><input type=text name="intRepSize" id="intRepSize" value="${intRepSize}"></input></td>
						<td><input type=text name="intRepSizePy" id="intRepSizePy" value="${intRepSizePy}"></input></td>
					  </tr>
					  <tr>
						<td>보수단가</td>
						<td>
						<select name="interiorCosts" id="interiorCosts"  cssClass="use"  onchange="javascript:fn_interiorCosts();">
        					<!-- 담보종류 -->
        					<c:forEach var="interiorCosts" items="${selectInteriorCostsList}" varStatus="status">
        						<option value="${interiorCosts.cdCode}" value2="${interiorCosts.rate}" value3="${interiorCosts.amt}" <c:if test="${interiorCosts.cdCode eq intRepDanCode }">selected</c:if>>${interiorCosts.cdDesc}</option>
        					</c:forEach>
        				</select> 
						<input type=text name="intRepDan" id="intRepDan" value="${intRepDan}"></input> </td>
						<td></td>
					  </tr>
					  <tr>
						<td>금액(원)</td>
						<td><input type=text name="intRepAmt" id="intRepAmt" value="${intRepAmt}"></input></td>
						<td></td>
					  </tr>
					  <tr>
						<td colspan="3" rowspan=2>평가가격(원)</td>
						<td> 총액(결정가격+인테리어금액)</td>
						<td> 전용면적 단가</td>
					  </tr>
					  <tr>
						<td><input type=text name=incAmt id="incAmt" value="${incAmt}" readonly></input> </td>
						<td><input type=text name="applSizeDan" id="applSizeDan" value="${applSizeDan}" readonly></input> </td>
					  </tr>
					</tbody>
					</table>
				</div>
				<!-- 감정에 관한 사항 end -->
				<!-- 담보제공 비율  start -->
				<div id="table">
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
					<thead>
					  <tr>
						<th rowspan="2">등기부상 전용면적</th>
						<th colspan="3">담보제공비율</th>
						<th rowspan="2">담보제공면적</th>
						<th rowspan="2">평가가격(원)</th>
						<th rowspan="2">최종평가가격(원)</th>
					  </tr>
					  <tr>
						<th>분자</th>
						<th>분모</th>
						<th>비율</th>
					  </tr>
					</thead>
					<tbody>
					<c:if test="${!empty selectEs01_w02_p02Es2011ist}">
					<c:forEach var="BuildingList" items="${selectEs01_w02_p02Es2011ist}" varStatus="status">
					  <tr>
						 <td><input type="text" name="secRegiSizeTmp" id="secRegiSizeTmp" value="<fmt:formatNumber value="${BuildingList.secRegiSize}" pattern=".00" />" readonly /> </td>
						<td><input type="text" name="secNumeTmp" id="secNumeTmp" value="<fmt:formatNumber value="${BuildingList.secNume}" pattern=".00" />" readonly /> </td>
						<td><input type="text" name="secDenoTmp" id="secDenoTmp" value="<fmt:formatNumber value="${BuildingList.secDeno}" pattern=".00" />" readonly /> </td>
						<td><input type="text" name="secRateTmp" id="secRateTmp" value="<fmt:formatNumber value="${BuildingList.secRate}" pattern=".00" />" readonly /> </td>
						<td><input type="text" name="secOfferSizeTmp" id="secOfferSizeTmp" value="<fmt:formatNumber value="${BuildingList.secOfferSize}" pattern=".00" />" readonly/> </td>
						<td>${BuildingList.secDesc}</td>
						<td><input type=text name="fnlIncAmt" id="fnlIncAmt" value="${fnlIncAmt}" readonly></td>
						<td><input type=text name="fnlIncAmt1" id="fnlIncAmt1" value="${fnlIncAmt}" readonly> </td>
					  </tr>
					  </c:forEach>
					  </c:if>
					  <c:if test="${empty selectEs01_w02_p02Es2011ist}">
						  <tr>
							 <td><input type="text" name="secRegiSizeTmp" id="secRegiSizeTmp" value="<fmt:formatNumber value="${BuildingList.secRegiSize}" pattern=".00" />" readonly /> </td>
							<td><input type="text" name="secNumeTmp" id="secNumeTmp" value="<fmt:formatNumber value="${BuildingList.secNume}" pattern=".00" />" readonly /> </td>
							<td><input type="text" name="secDenoTmp" id="secDenoTmp" value="<fmt:formatNumber value="${BuildingList.secDeno}" pattern=".00" />" readonly /> </td>
							<td><input type="text" name="secRateTmp" id="secRateTmp" value="<fmt:formatNumber value="${BuildingList.secRate}" pattern=".00" />" readonly /> </td>
							<td><input type="text" name="secOfferSizeTmp" id="secOfferSizeTmp" value="<fmt:formatNumber value="${BuildingList.secOfferSize}" pattern=".00" />" readonly/> </td>
							<td>${BuildingList.secDesc}</td>
							<td><input type=text name="fnlIncAmt" id="fnlIncAmt" value="${fnlIncAmt}" readonly></td>
							<td><input type=text name="fnlIncAmt1" id="fnlIncAmt1" value="${fnlIncAmt}" readonly> </td>
						  </tr>
					   </c:if>
					</tbody>
					</table>
				</div>
	        </div>
	        <!-- 낙찰가율보정보  start-->
	        <div id="successfulBidRate">
	        <c:if test="${!empty selectSuccessfulBidRateTableList}">
	        <c:forEach var="successfulBidRate" items="${selectSuccessfulBidRateTableList}" varStatus="status">
	        	<c:set var="pBidRate" value="${successfulBidRate.pBidRate}"> </c:set>
	        	<c:set var="kBidRate" value="${successfulBidRate.kBidRate}"> </c:set>
	        	<c:set var="bBidRateTmp" value="${pBidRate+kBidRate}"> </c:set>
	        	<c:set var="bBidRate" value="${bBidRateTmp/2}"> </c:set>
	        	<c:set var="applRate" value="${successfulBidRate.applRate}"> </c:set>
	        	<c:set var="aptScale" value="${successfulBidRate.aptScale}"> </c:set>
	        	<c:set var="aptScaleRate" value="${successfulBidRate.aptScaleRate}"> </c:set>
	        	<c:set var="aptExmSize" value="${successfulBidRate.aptExmSize}"> </c:set>
	        	<c:set var="aptExmRate" value="${successfulBidRate.aptExmRate}"> </c:set>
	        	<c:set var="aptFloorCode" value="${successfulBidRate.aptFloorCode}"> </c:set>
	        	<c:set var="aptFloorRate" value="${successfulBidRate.aptFloorRate}"> </c:set>
	        	<c:set var="aptElapCode" value="${successfulBidRate.aptElapCode}"> </c:set>
	        	<c:set var="aptElapRate" value="${successfulBidRate.aptElapRate}"> </c:set>
	        	<c:set var="rightsCode" value="${successfulBidRate.rightsCode}"> </c:set>
	        	<c:set var="rightsRate" value="${successfulBidRate.rightsRate}"> </c:set>
	        	<c:set var="increaseAmt" value="${successfulBidRate.increaseAmt}"> </c:set>
	        	<c:set var="plMinBidAmt" value="${successfulBidRate.plMinBidAmt}"> </c:set>
	        	<c:set var="plBidAmt" value="${successfulBidRate.plBidAmt}"> </c:set>
	        	
	        	<c:set var="mulAdjRoad" value="${successfulBidRate.mulAdjRoad}"> </c:set>
	        	<c:set var="mulAdjRate" value="${successfulBidRate.mulAdjRate}"> </c:set>
	        	<c:set var="mulExmSize" value="${successfulBidRate.mulExmSize}"> </c:set>
	        	<c:set var="mulExmRate" value="${successfulBidRate.mulExmRate}"> </c:set>
	        	<c:set var="mulFloorCode" value="${successfulBidRate.mulFloorCode}"> </c:set>
	        	<c:set var="mulFloorRate" value="${successfulBidRate.mulFloorRate}"> </c:set>
	        	<c:set var="mulElapCode" value="${successfulBidRate.mulElapCode}"> </c:set>
	        	<c:set var="mulElapRate" value="${successfulBidRate.mulElapRate}"> </c:set>
	        	
	        </c:forEach>
	        </c:if>
	        <c:if test="${empty selectSuccessfulBidRateTableList}">
	        	<c:set var="pBidRate" value="100"> </c:set>
	        	<c:set var="kBidRate" value="100"> </c:set>
	        	<c:set var="bBidRateTmp" value="${pBidRate+kBidRate}"> </c:set>
	        	<c:set var="bBidRate" value="${bBidRateTmp/2}"> </c:set>
	        	<c:set var="applRate" value="100"> </c:set>
	        	<c:set var="apartmentComplexSizeList" value="00"> </c:set>
	        	<c:set var="jonYuPartAreaAptList" value="00"> </c:set>
	        	<c:set var="jeonyuPartLocation" value="00"> </c:set>
	        	<c:set var="buildTransitYearAptList" value="00"> </c:set>
	        	<c:set var="formOccpantAptList" value="00"> </c:set>
	        	<c:set var="aptExmRate" value="1"> </c:set>
	        	<c:set var="aptFloorRate" value="1"> </c:set>
	        	<c:set var="aptElapRate" value="1"> </c:set>
	        	<c:set var="rightsRate" value="1"> </c:set>
	        	<c:set var="aptScaleRate" value="1"> </c:set>
	        	<c:set var="increaseAmt" value="0"> </c:set>
	        	<c:set var="plMinBidAmt" value="0"> </c:set>
	        	
	        	<c:set var="mulAdjRoad" value="00"> </c:set>
	        	<c:set var="mulAdjRate" value="1"> </c:set>
	        	<c:set var="mulExmSize" value="00"> </c:set>
	        	<c:set var="mulExmRate" value="1"> </c:set>
	        	<c:set var="mulFloorCode" value="00"> </c:set>
	        	<c:set var="mulFloorRate" value="1"> </c:set>
	        	<c:set var="mulElapCode" value="00"> </c:set>
	        	<c:set var="mulElapRate" value="1"> </c:set>
	        </c:if>
	        	<div id="table">
					<table style="width: 100%; border-collapse: collapse;" border="1">
						<tr>
							<td style="width: 50%;">
									<table style="border-collapse: collapse; width: 100%;" border="1">
										<tbody>
											<tr style="height: 36px;">
												<th colspan=2>감정대상 부동산의 기준 낙찰가율</th>
											</tr>
											<tr style="height: 18px;">
												<th style="width: 50%; height: 18px;">당해지역의 낙찰가율</th>
												<td style="width: 50%; height: 18px;"><input type=text name="pBidRate" id="pBidRate" value='${pBidRate}' ></input>% </td>
											</tr>
											<tr style="height: 18px;">
												<th style="width: 50%; height: 18px;">유사부동산 낙찰가율</th>
												<td style="width: 50%; height: 18px;"><input type=text name=kBidRate id=kBidRate value='${kBidRate}'></input>% </td>
											</tr>
											<tr style="height: 18px;">
												<th style="width: 50%; height: 18px;">기준 낙찰가율</th>
												<td style="width: 50%; height: 18px;"><input type=text name=bBidRate id=bBidRate value='${bBidRate}' readonly></input>% </td>
											</tr>
											<tr style="height: 18px;">
												<th style="width: 50%; height: 18px;">적용할 낙찰가율</th>
												<td style="width: 50%; height: 18px;"><input type=text name=applRate id=applRate value='${applRate}' readonly></input>% </td>
											</tr>
										</tbody>
									</table>
							</td>
							<td style="width: 50%;">
								<table style="border-collapse: collapse; width: 100%;" border="1">
								<tbody>
									<tr>
										<th style="width: 25%;" rowspan=2>접합도로의 폭</th>
										<th style="width: 25%;">전유부분의면적</th>
										<th style="width: 25%;">총 층수중 전유부분의 위치</th>
										<th style="width: 25%;">건출물의 경과년도</th>
									</tr>
									<tr>
										<td style="width: 25%;">${secRegiSize}  ㎡</td>
										<td style="width: 25%;" > 
											<select name="jeonyuPartNm" id="jeonyuPartNm" cssClass="use" disabled>
					        					<!-- 단지전체규모 -->
					        					<c:forEach var="jeonyuPartLocationList" items="${selectEs01_w02_p02DIV154List}" varStatus="status">
					        						<option value="${jeonyuPartLocationList.cdCode}"  <c:if test="${jeonyuPartLocationList.cdCode eq aptFloorCode }">selected</c:if>>${jeonyuPartLocationList.cdDesc}</option>
					        					</c:forEach>
					        				</select> 
										</td>
										<td style="width: 25%;">${elapYear} 년 경과&nbsp;</td>
									</tr>
									<tr>
										<td style="width: 25%;">
											<select name="apartmentComplexSizeList" id="apartmentComplexSizeList" cssClass="use" onchange="javascript:changeApartmentComplexSizeList(this);">
					        					<!-- 단지전체규모 -->
					        					<c:forEach var="apartmentComplexSizeList" items="${selectEs01_w02_p02DIV154List}" varStatus="status">
					        						<option value="${apartmentComplexSizeList.cdCode}" value2="${apartmentComplexSizeList.idx}" <c:if test="${apartmentComplexSizeList.cdCode eq mulAdjRoad }">selected</c:if>>${apartmentComplexSizeList.cdDesc}</option>
					        					</c:forEach>
				        					</select> 
										</td>
										<td style="width: 25%;">
											<select name="jonYuPartAreaAptList" id="jonYuPartAreaAptList" cssClass="use" onchange="javascript:changeJonYuPartAreaAptList(this);">
					        					<!-- 전유부분의면적 -->
					        					<c:forEach var="jonYuPartAreaAptList" items="${selectEs01_w03DIV104List}" varStatus="status">
					        						<option value="${jonYuPartAreaAptList.cdCode}" value2="${jonYuPartAreaAptList.idx}" <c:if test="${jonYuPartAreaAptList.cdCode eq mulExmSize }">selected</c:if>>${jonYuPartAreaAptList.cdDesc}</option>
					        					</c:forEach>
					        				</select> 
										</td>
										<td style="width: 25%;">
											<select name="jeonyuPartLocation" id="jeonyuPartLocation" cssClass="use" onchange="javascript:changeJeonyuPartLocationList(this);">
						        					<!-- 총 층수 전유부분의 위치 -->
						        					<c:forEach var="jeonyuPartLocation" items="${selectEs01_w02_p02DIV177List}" varStatus="status">
						        						<option value="${jeonyuPartLocation.cdCode}" value2="${jeonyuPartLocation.idx}" <c:if test="${jeonyuPartLocation.cdCode eq mulFloorCode }">selected</c:if>>${jeonyuPartLocation.cdDesc1}</option>
						        					</c:forEach>
						        			</select> 
										</td>
										<td style="width: 25%;">
											<select name="buildTransitYearAptList" id="buildTransitYearAptList" cssClass="use" onchange="javascript:changeBuildTransitYearAptList(this);">
					        					<!-- 건축물의 경과년도 -->
					        					<c:forEach var="buildTransitYearAptList" items="${selectBuildTransitYearAptList}" varStatus="status">
					        						<option value="${buildTransitYearAptList.cdCode}" value2="${buildTransitYearAptList.attr08}"  <c:if test="${buildTransitYearAptList.cdCode eq mulElapCode }">selected</c:if>>${buildTransitYearAptList.cdDesc}</option>
					        					</c:forEach>
					        				</select> 
										</td>
									</tr>
									<tr>
										<td style="width: 25%;"><input type=text name="aptScaleRate" id="aptScaleRate" value="${mulAdjRate}" readonly></input>  </td>
										<td style="width: 25%;"><input type=text name="aptExmRate" id="aptExmRate" value="${mulExmRate}" readonly></input></td>
										<td style="width: 25%;"><input type=text name="aptFloorRate" id="aptFloorRate" value="${mulFloorRate}" readonly></input></td>
										<td style="width: 25%;"><input type=text name="aptElapRate" id="aptElapRate" value="${mulElapRate}" readonly></input></td>
									</tr>
								</tbody>
								</table>
							</td>
							</tr>
					</table>
				</div>
				<div id="table">
					<table style="border-collapse: collapse; width: 100%;" border="1">
					<tbody>
						<tr>
							<td style="width: 50%;">
								<table style="border-collapse: collapse; width: 100%;" border="1">
								<tbody>
									<tr>
										<th style="width: 100%;">점유자의 권리 형태</th>
									</tr>
									<tr>
										<td style="width: 100%;">
											<select name="formOccpantAptList" id="formOccpantAptList" cssClass="use" onchange="javascript:changeFormOccpantAptListList(this);">
					        					<!-- 단지전체규모 -->
					        					<c:forEach var="formOccpantAptList" items="${selectFormOccpantAptList}" varStatus="status">
					        						<option value="${formOccpantAptList.cdCode}" value2="${formOccpantAptList.attr08}" <c:if test="${formOccpantAptList.cdCode eq rightsCode }">selected</c:if>>${formOccpantAptList.cdDesc}</option>
					        					</c:forEach>
					        				</select> 
										</td>
									</tr>
									<tr>
										<td style="width: 100%;"><input type=text name="rightsRate" id="rightsRate" value="${rightsRate}" readonly></input></td>
									</tr>
								</tbody>
								</table>
							</td>
							<td style="width: 50%;">
									<table style="border-collapse: collapse; width: 100%;" border="1">
									<tbody>
									<tr>
										<th style="width: 33.3333%;">평가가격</th>
										<th style="width: 33.3333%;">1차예상최저입찰가(최종평가가격)</th>
										<th style="width: 33.3333%;">예상낙찰가</th>
									</tr>
									<tr>
										<td style="width: 33.3333%;"><input type=text name="increaseAmt1" id="increaseAmt1" value="${increaseAmt}" readonly>원</input></td>
										<td style="width: 33.3333%;"><input type=text name="plMinBidAmt" id="plMinBidAmt" value="${plMinBidAmt}" readonly>원</input></td>
										<td style="width: 33.3333%;"><input type=text name="plBidAmt" id="plBidAmt" value="${plBidAmt}" readonly></input>원</td>
									</tr>
								</tbody>
								</table>
							</td>
						</tr>
					</tbody>
					</table>
				 <!-- 낙찰가율보정보  end-->
	        </div>
	        <!-- 감정가액산출 end-->
	    </div>
	     <!-- 배당표 start-->
	    <div id="dividendTable">
	        <c:forEach var="dividendTableMCalculation" items="${selectDividendTableMCalculationList}" varStatus="status">
	        	<c:set var="auctionCode" value="${dividendTableMCalculation.auctionCode}"> </c:set>
	        	<c:set var="auctionAmt" value="${dividendTableMCalculation.auctionAmt}"> </c:set>
	        	<c:set var="credMaxAmt" value="${dividendTableMCalculation.credMaxAmt}"> </c:set>
	        	<c:set var="hPlBidAmt" value="${dividendTableMCalculation.hPlBidAmt}"> </c:set>
	        	<c:set var="hPossAmt" value="${dividendTableMCalculation.hPossAmt}"> </c:set>
	        	<c:set var="hPossAArea" value="${dividendTableMCalculation.hPossAArea}"> </c:set>
	        	<c:set var="hPossAAmt" value="${dividendTableMCalculation.hPossAAmt}"> </c:set>
	        	<!-- 
	        	AUCTION_CODE	경매비용코드(CD_DIV: DIV110)
				AUCTION_AMT	경매비용금액
				CRED_MAX_AMT	채권자중최고채권액
				H_PL_BID_AMT	주택_예상낙찰가
				H_POSS_AMT	주택_가임대보증금의최고한도액
				H_POSS_A_AREA	주택_가임대보증금_적용범위(CD_DIV: DIV106 ATTR_01=00)
				H_POSS_A_CASE	주택_가임대보증금_적용대상(CD_DIV: DIV106 ATTR_01=00)
				H_POSS_A_AMT	주택_가임대보증금_한도액
	        	 -->
	        </c:forEach>
		        <div id="table">
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
						<thead>
						  <tr>
						    <th>경매비용의 槪算</th>
						    <th>채권자중 최고 채권액</th>
						    <td><input type="text" name="credMaxAmt" id="credMaxAmt" value="${credMaxAmt}"></input> 원</td>
						    <td>
						    	<select name="auctionCode" id="auctionCode" cssClass="use" onchange="javascript:changeAuctionCostList(this);">
		        					<!-- 경매비용규모-->
		        					<c:forEach var="auctionCostList" items="${selectMaxBondAmountList}" varStatus="status">
		        						<option value="${auctionCostList.cdCode}"  value2="${auctionCostList.attr02}" <c:if test="${auctionCostList.cdCode eq auctionCode }">selected</c:if>>${auctionCostList.cdDesc}</option>
		        					</c:forEach>
					        	</select> 
						    </td>
						    <td><input type=text name="auctionAmt" id="auctionAmt"  value="${auctionAmt}" 원 readonly></input></td>
						  </tr>
						</thead>
					</table>
				</div>
				<div id="table">
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
						<thead>
						<tr>
							<th colspan="8"></th>
							<td>
								<li>
								    <span class="btn_blue_l">
									<a href="javascript:fn_add_houseRental();">add</a>
									<img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
								    </span>
								</li>   
							</td>
						  </tr>
						  <tr>
							<th colspan="8">0. 假임대 보증금의 최고한도액 산출을 위한 담보부동산 전부의 예상낙찰가</th>
							<td><input type=text name="hPlBidAmt" id="hPlBidAmt" value="${hPlBidAmt}" readonly></input></td>
						  </tr>
						
						  <tr>
							<th  colspan="8">1. 假임대 보증금의 최고한도액 : 담보 부동산 경락가액(예상낙찰가-경매비용)의 1/2까지</th>
							<td ><input type=text name="hPossAmt" id="hPossAmt" value="${hPossAmt}" readonly></input></td>
						  </tr>
						  <tr>
							<th  colspan="6">2-1. 가임대보증금 적용 범위</th>
							<th  colspan="3">2-2. 적용할 주택가임대보증금액 (최우선변제 소액임대차보증금) 한도액</th>
						  </tr>
						  <tr>
							<td colspan="6">
								<select id="hPossAArea" name="hPossAArea" cssClass="use"  disabled>
									<c:forEach var="regDepsitAppAreaList" items="${selectRegDepsitAppAreaList}" varStatus="status">
									   <option value="${regDepsitAppAreaList.cdCode}" value2="${regDepsitAppAreaList.attr02}" value3="${regDepsitAppAreaList.attr03}" <c:if test="${regDepsitAppAreaList.cdCode eq hPossAArea }">selected</c:if>>${regDepsitAppAreaList.cdDesc}</option>
									</c:forEach>
								</select>
							</td>
							<td  colspan="3" ><input type=text  name="hPossAAmt" id="hPossAAmt" value='${hPossAAmt}' readonly></input>  </td>
						  </tr>
						  <tr>
							<th >각구의일련번호</th>
							<th >1동의 건물 내에서의 <br>주거용 부분의 각구의 위치</th>
							<th >1구의 건물내에 있는<br> 주거용방의 총수</th>
							<th >확정일자<br>보유여부</th>
							<th >가입대보증금을적용한 <br>방의 총수</th>
							<th >1구의 건물의 <br>실제 임대차보증금</th>
							<th >최종 적용 가임대보증금<br>(최우선변제 소액보증금)</th>
							<th >확정일자부주택임대차 <br>보증금</th>
							<th >확정일자 없는 주택임대차 보증금</th>
						  </tr>
						  <c:if test="${!empty selectculationHousingRentalDepositList}">
						  <c:forEach var="culationHousingRentalDepositList" items="${selectculationHousingRentalDepositList}" varStatus="houseRental">
						  <tr name="houseRental" id="houseRental" >
							<td>
								<select name="numberGu" id="numberGu" cssClass="use">
									<c:forEach var="serialNumberGuList" items="${selectSerialNumberGuList}" varStatus="status">
										<option value="${serialNumberGuList.cdCode}" <c:if test="${serialNumberGuList.cdCode eq culationHousingRentalDepositList.rno }">selected</c:if>>${serialNumberGuList.cdDesc}</option>
									</c:forEach>
								</select>
							</td>
							<td><input type="text" name="resiName" id="resiName"  value="${culationHousingRentalDepositList.resiName}"></input></td>
							<td><input type="text" name="resiRmCnt" id="resiRmCnt"  value="${culationHousingRentalDepositList.resiRmCnt}"></input></td>
							<td><input type=checkbox  name="fxdateYnChk" id="fxdateYnChk" onclick="fn_fxdateYnChk()" <c:if test="${culationHousingRentalDepositList.fxdateYn eq 'Y' }">checked</c:if>></input>
							<input type="hidden" name="fxdateYn" id="fxdateYn"  value="${culationHousingRentalDepositList.fxdateYn}"></input>
							</td>
							<td><input type="text" name="possARmCnt" id="possARmCnt"   onkeypress="fn_add_houseRental2()" value="${culationHousingRentalDepositList.possARmCnt}"></input></td>
							<td><input type="text" name="hleaseAmt" id="hleaseAmt"  value="${culationHousingRentalDepositList.leaseAmt}"></input></td>
							<td><input type=text name="repBeSecAmt" id="repBeSecAmt" value='${culationHousingRentalDepositList.repBeSecAmt}'></input></td>
							<td><input type="text" name="fxleaAmt" id="fxleaAmt"  value="${culationHousingRentalDepositList.fxleaAmt}"></input></td>
							<td><input type="text" name="fxleaNoAmt" id="fxleaNoAmt" value="${culationHousingRentalDepositList.fxleaNoAmt}"></input>
							<c:if test="${houseRental.count ne '1' }">
							<input type="button" name="delHouseRental" value="del"/>
							</c:if>
								
							</td>
						  </tr>
						  </c:forEach>
						  </c:if>
						  <c:if test="${empty selectculationHousingRentalDepositList}">
						  <tr name="houseRental" id="houseRental" >
							<td>
								<select name="numberGu" id="numberGu" cssClass="use">
									<c:forEach var="serialNumberGuList" items="${selectSerialNumberGuList}" varStatus="status">
										<option value="${serialNumberGuList.cdCode}">${serialNumberGuList.cdDesc}</option>
									</c:forEach>
								</select>
							</td>
							<td><input type="text" name="resiName" id="resiName"  value=""></input></td>
							<td><input type="text" name="resiRmCnt" id="resiRmCnt"  value=""></input> </td>
							<td><input type="checkbox"  name="fxdateYnChk" id="fxdateYnChk" onclick="fn_fxdateYnChk()"></input>
							<input type="hidden" name="fxdateYn" id="fxdateYn"  value="N"></input>
							</td>
							<td><input type="text" name="possARmCnt" id="possARmCnt"  onkeypress="fn_add_houseRental2()" value=""></input></td>
							<td><input type="text" name="hleaseAmt" id="hleaseAmt"  value=""></input></td>
							<td><input type="text" name="repBeSecAmt" id="repBeSecAmt" value=""></input></td>
							<td><input type="text" name="fxleaAmt" id="fxleaAmt" value=""></input></td>
							<td><input type="text" name="fxleaNoAmt" id="fxleaNoAmt" value=""></input></td>
						  </tr>
						  </c:if>
					</thead>
				</table>
			</div>
			<div id="table">
				<table width="100%" border="0" cellpadding="0" cellspacing="0" >
				<thead>
				<tr>
				    <th colspan="5"></th>
				    <td colspan="3">
				    <li>
					    <span class="btn_blue_l">
						<a href="javascript:fn_add_DividendCalcul();">add</a>
						<img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
					    </span>
					</li>  
				    </td>
				  </tr>
				  <tr>
				    <th  rowspan="2">순위</th>
				    <th  rowspan="2">권리발생일자</th>
				    <th  rowspan="2">당사설정</th>
				    <th  rowspan="2">권리자</th>
				    <th  rowspan="2">권리의내용</th>
				    <th  colspan="3">채권최고액</th>
				  </tr>
				  <tr>
				    <th>말소여부</th>
				    <th>단독담보</th>
				    <th>공동담보</th>
				  </tr>
				</thead>
				<tbody>
				<c:forEach var="dividendTableCalculationList" items="${selectDividendTableCalculationList}" varStatus="calcul">
				  <tr name="dividendCalcul" id="dividendCalcul" >
				    <td>
				    <select name="dispRank" id="dispRank" cssClass="use">
						<c:forEach var="rankingCodeList" items="${selectRankingCodeList}" varStatus="status">
							<option value="${rankingCodeList.cdCode}" <c:if test="${rankingCodeList.cdCode eq dividendTableCalculationList.dispRank }">selected</c:if>>${rankingCodeList.cdDesc}</option>
						</c:forEach>
					</select>
				    </td>
				    <td><input type="text" name="rightDate" id='rightDate${calcul.count}' value="${dividendTableCalculationList.rightDate} "></input> </td>
				    <td><input type=checkbox name=hiteYnTp id='hiteYnTp' onclick=fn_hiteYnCheck()  <c:if test="${dividendTableCalculationList.hiteYn eq 'Y'}">checked </c:if>  ></input>
				    <input type=hidden name="hiteYn" id="hiteYn${calcul.count}" <c:if test="${dividendTableCalculationList.hiteYn eq 'Y'}"> value='${dividendTableCalculationList.hiteYn}'</c:if><c:if test="${dividendTableCalculationList.hiteYn ne 'Y'}"> value='N'</c:if>></input>
				    </td>
				    <td><input type="text" name="rightPerson" id='rightPerson${calcul.count}' value="${dividendTableCalculationList.rightPerson}"></input>  </td>
				    <td>
				    	<select name="rightCode" id="rightCode${calcul.count}" cssClass="use">
						<c:forEach var="contentRightList" items="${selectContentRightList}" varStatus="status">
							<option value='${contentRightList.cdCode}' value2='${contentRightList.rightCode}' <c:if test="${contentRightList.cdCode eq dividendTableCalculationList.rightCode }">selected</c:if>>${contentRightList.cdDesc}</option>
						</c:forEach>
					</select>
				    </td>
				    <td><input type=checkbox name="eraYnTp" id="eraYnTp" onclick=fn_eraYnCheck()  <c:if test="${dividendTableCalculationList.eraYn eq 'Y' }">checked</c:if>></input>
				    <input type=hidden name="eraYn" id="eraYn${calcul.count}" <c:if test="${dividendTableCalculationList.eraYn eq 'Y'}"> value='${dividendTableCalculationList.eraYn}'</c:if><c:if test="${dividendTableCalculationList.eraYn ne 'Y'}"> value='N'</c:if>></input>
				    </td>
				    <td><input type=text name='credSelfAmtOrg' id='credSelfAmtOrg' value="${dividendTableCalculationList.credSelfAmtOrg}"></input></td>
				    <td><input type=text name='credCombAmtOrg' id='credCombAmtOrg${calcul.count}' value="${dividendTableCalculationList.credCombAmtOrg}"></input>
				    <input type=hidden name='proRateCode' id='proRateCode${calcul.count}' value="${dividendTableCalculationList.proRateCode}"></input><input type="button" name="delDividendCalcul" value="del"/>
				    </td>
				  </tr>
				  </c:forEach>
				  
				</tbody>
				</table>
			</div>
	        </div>
	         <!-- 배당표 end-->
	         <!-- 공통보고서 start-->
	          <div id="commonReport">
	        	--> 지점감정 및 본사 검증감정 결과
	        	<!-- 당사설정액 -->
	        	 <c:forEach var="ourSetAmontList" items="${selectOurSetAmontList}" varStatus="status">
	        		<c:set var="ourSetAmont" value="${ourSetAmontList.bondAmount}"> </c:set>
	        	</c:forEach>
	        	<!-- 당사설정액 지점 -->
	        	 <c:forEach var="ourSetAmontJBList" items="${selectOurSetJBAmontList}" varStatus="status">
	        		<c:set var="ourSetJBAmont" value="${ourSetAmontJBList.bondAmountJb}"> </c:set>
	        	</c:forEach>
	        	<!-- 초과보족설정액 본사  -->
	        	 <c:forEach var="cGBJAmontList" items="${selectCGBJAmontList}" varStatus="status">
	        		<c:set var="cgbjAmtKo" value="${cGBJAmontList.cgbjAmtKo}"> </c:set>
	        		<c:set var="plBidAmt" value="${cGBJAmontList.plBidAmt}"> </c:set>
	        	</c:forEach>
	        	<!-- 초과보족설정액 지점  -->
	        	 <c:forEach var="cGBJAmontJBList" items="${selectCGBJAmontJBList}" varStatus="status">
	        		<c:set var="cgbjAmtKoJB" value="${cGBJAmontJBList.cgbjAmtKo}"> </c:set>
	        		<c:set var="plBidAmtJB" value="${cGBJAmontJBList.plBidAmt}"> </c:set>
	        	</c:forEach>
	        	<!-- 공통보고서_최고최저  -->
	        	 <c:forEach var="cGBJHighRowList" items="${selectCGBJHighRowList}" varStatus="status">
	        		<c:set var="minAmt" value="${cGBJHighRowList.minAmt}"> </c:set>
	        		<c:set var="maxAmt" value="${cGBJHighRowList.maxAmt}"> </c:set>
	        	</c:forEach>
	        	<!-- 공통보고서_최고최저  JB -->
	        	 <c:forEach var="cGBJHighRowJBList" items="${selectCGBJHighRowJBList}" varStatus="status">
	        		<c:set var="minAmtJB" value="${cGBJHighRowJBList.minAmt}"> </c:set>
	        		<c:set var="maxAmtJB" value="${cGBJHighRowJBList.maxAmt}"> </c:set>
	        	</c:forEach>
	        	<!-- 공통보고서_보정표  -->
	        	 <c:forEach var="correctionTableList" items="${selectCorrectionTableList}" varStatus="status">
	        		<c:set var="increaseAmt" value="${correctionTableList.increaseAmt}"> </c:set>
	        		<c:set var="applRateH" value="${correctionTableList.applRate}"> </c:set>
	        	</c:forEach>
	        	<!-- 공통보고서_보정표  JB-->
	        	 <c:forEach var="correctionTableJBList" items="${selectCorrectionTableJBList}" varStatus="status">
	        		<c:set var="increaseAmtJB" value="${correctionTableJBList.increaseAmt}"> </c:set>
	        		<c:set var="applRateJB" value="${correctionTableJBList.applRate}"> </c:set>
	        	</c:forEach>
	        	
	        	<div id="table">
					<table width="100%" border="0" cellpadding="0" cellspacing="0" >
						<thead>
						  <tr>
							<th colspan="2">구분</th>
							<th >지점감정에 관한 사항</th>
							<th >본사 검증감정에 관한 사항</th>
						  </tr>
						</thead>
						<tbody>
						  <tr>
							<th  rowspan="2">시가<br>(비준가격)</th>
							<th >초저가</th>
							<td >${minAmtJB}</td>
							<td ><fmt:formatNumber value="${minAmt}" pattern="#,###"></fmt:formatNumber>원</td>
						  </tr>
						  <tr>
							<th >최고가</td>
							<td >${maxAmtJB}</td>
							<td ><fmt:formatNumber value="${maxAmt}" pattern="#,###"></fmt:formatNumber>원</td>
						  </tr>
						  <tr>
							<th  colspan="2">예상 제1차 입찰가(평가가격)</th>
							<td >${increaseAmtJB}</td>
							<td ><fmt:formatNumber value="${increaseAmt}" pattern="#,###"></fmt:formatNumber>원</td>
						  </tr>
						  <tr>
							<th  colspan="2">예상 낙찰가율</th>
							<td >${applRateJB}</td>
							<td >${applRateH}%</td>
						  </tr>
						  <tr>
							<th colspan="2">예상 낙찰가</th>
							<td >${plBidAmtJB}</td>
							<td ><fmt:formatNumber value="${plBidAmt}" pattern="#,###"></fmt:formatNumber>원</td>
						  </tr>
						  <tr>
							<th colspan="2">당사 설정액</th>
							<td >${ourSetJBAmont}</td>
							<td ><fmt:formatNumber value="${ourSetAmont}" pattern="#,###"></fmt:formatNumber>원</td>
						  </tr>
						  <tr>
							<th colspan="2">초과 또는 부족 설정액</th>
							<td >${cgbjAmtKoJB}</td>
							<td >${cgbjAmtKo}원</td>
						  </tr>
						 </tbody>
					</table>
				</div>
				<div id="table">
				<table width="100%" border="0" cellpadding="0" cellspacing="0" >
				<thead>
				  <tr>
					<th>평가구분</th>
					<td>
						<form:select path="searchSecCode" cssClass="use">
						<c:forEach var="evaluationClassificationList" items="${selectEvaluationClassificationList}" varStatus="status">
							<option value="${evaluationClassificationList.cdCode}" <c:if test="${evaluationClassificationList.cdCode eq appraiseGu }">selected</c:if> readonly>${evaluationClassificationList.cdDesc}</option>
						</c:forEach>
					</form:select>
					</td>
					<td colspan="2"></td>
				  </tr>
				</thead>
				</table>
			</div>
			<div id="table">
				<table width="100%" border="0" cellpadding="0" cellspacing="0" >
				<thead>
				  <tr>
					<th>의견보기</th>
					<td>
						<span class="btn_blue_l">
        	                <a href="#" onclick="fn_Press_Opinion('1');">의견보기</a>
        	                <img src="<c:url value='/images/egovframework/example/btn_bg_r.gif'/>" style="margin-left:6px;" alt=""/>
        	            </span>
					</td>
					<td colspan="2"></td>
				  </tr>
				</thead>
				</table>
			</div>
	    </div>
	          <!-- 공통보고서 end-->
	    <!-- input sector end -->
    </form:form>
</body>
</html>
