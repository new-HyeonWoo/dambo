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
    <title>아파트등록</title>
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
        
   
        function fn_add_DividendCalcul(){
        	
        	
        	var eraYnTpCnt= $("input[name=eraYnTp]:checkbox" ).length;
        	eraYnTpCnt=eraYnTpCnt+1;
        	console.log("eraYnTpCnt====>"+eraYnTpCnt);
        	
        	
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
			increaseAmt=$("#applAmt").val(); 
			//increaseAmt=isNaN(parseFloat(applAmt)) ? 0 : parseFloat(applAmt);	
			
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
        	 
        	 console.log("resiName====>"+resiName);
        	 console.log("repBeSecAmt====>"+repBeSecAmt);
        	 console.log("tempCredCombAmtOrg====>"+tempCredCombAmtOrg);
        	 console.log("tempPossARmCntTotal====>"+tempPossARmCntTotal);
        	 
        	 
        	 
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
             //fn_piceCaseDList_Cont(caseDLnSeq);
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
    	   trCnt=parseInt(trCnt)+parseInt(1);
            var addText ='<tr name="priceAuction" id="priceAuction">'+
			            '<td><input type="checkbox" name="checkPriceAuction" id="checkPriceAuction'+trCnt+'" onclick="fn_checkBoxchg('+trCnt+')"></input><input type="hidden" name="auCheckYn" id="auCheckYn'+trCnt+'" value="0"></input> </td>'+
			            // '<td><input type="checkbox" name="checkPriceAuction" id="checkPriceAuction'+trCnt+' onkeypress="fn_checkBoxchg('+trCnt+')"></input><input type="hidden" name="auCheckYn" id="auCheckYn'+trCnt+'" value="0"></input> </td>'+
			            '<td><input type="text" name="auNo" id="auNo" value=""></input></td>'+
			            '<td><input type="text" name="auBName" id="auBName" value=""></input></td> '+
			            '<td><input type="text" name="auJuso" id="auJuso" value=""></input></td>'+
			            '<td>선택버튼</td>'+
			            '<td><input type="text" name="auTotFloor" id="auTotFloor" value="0"></input></td>'+
			            '<td><input type="text" name="auFloor" id="auFloor" value="0"></input></td> '+
			            '<td><input type="text" name="auBSizePy" id="auBSizePy" value="0" onkeypress="fn_AuCurrPyDan()"></input></td> '+
			            '<td><input type="text" name="auLawAmt" id="auLawAmt" value="0" onkeypress="fn_AuCurrPyDan()"></input></td> '+
			            '<td><input type="text" name="auCurrPyDan" id="auCurrPyDan" value="0"></input></td> '+
			            '<td><input type="text" name="auBidAmt" id="auBidAmt" value="0"></input></td> '+
			            '<td><input type="text" name="auBidRate" id="auBidRate" value="0"></input><input type="button" name="delAuction" value="del"/> </td> '+
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
        	document.listForm.action = "<c:url value='/sampleList1.do'/>";
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
        	console.log("value1===>"+value1);
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
                		console.log("rightCode===>"+rightCode)
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
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#commonReport').hide(); 
        	}else if(check=='2'){
        		$('#inputSector').hide();
        		$('#appraisedValue').show();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#commonReport').hide(); 
        	}else if(check=='3'){
        		$('#inputSector').hide();
        		$('#appraisedValue').hide();
        		$('#successfulBidRate').show();
        		$('#dividendTable').hide();
        		$('#commonReport').hide(); 
        	}else if(check=='5'){
        		$('#inputSector').hide();
        		$('#appraisedValue').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').show();
        		$('#commonReport').hide(); 
        	}else if(check=='7'){
        		$('#inputSector').hide();
        		$('#appraisedValue').hide();
        		$('#successfulBidRate').hide();
        		$('#dividendTable').hide();
        		$('#commonReport').show(); 
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
        	cbExmSizePy= Math.floor(cbExmSizePy*100)/100;
        	cbPubSizePy= Math.floor(cbPubSizePy*100)/100;
        	console.log("cbTotSize1111===>"+cbTotSize)
        	cbTotSize=parseFloat(cbExmSize)+parseFloat(cbPubSize);
        	cbExmSize=isNaN(parseFloat(cbExmSize)) ? 0 : parseFloat(cbExmSize);	
        	cbTotSize=Math.floor(cbTotSize*100)/100;
        	console.log("cbTotSize===>"+cbTotSize)
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
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     
     // 임력표 집합건물에 관한 사항 전유면적
        $(document).ready(function(){
            $("input[name=auLawAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_AuCurrPyDan();
                }
            }); 
        });
     
        $(document).ready(function(){
            $("input[name=lgOwner]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_lgOwnerPy();
                }
            }); 
        });
     
        
        //  건축년도 결과수 
        $(document).ready(function(){
            $("input[name=cbYyyy]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
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
        
        
        $(document).ready(function(){
            $("input[name=auBSizePy]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_AuCurrPyDan();
                }
            }); 
        });
     
        function fn_lgOwnerPy(){
        	var lgSize=$("#lgSize").val();  
        	var lgOwner=$("#lgOwner").val();  
        	var seadesuPy=0;  
        	
        	//console.log("fn_lgOwnerPy===>"+fn_lgOwnerPy)
        	lgSize= isNaN(parseInt($('#lgSize').val())) ? 0 : parseFloat($('#lgSize').val());
        	lgOwner= isNaN(parseInt($('#lgOwner').val())) ? 0 : parseFloat($('#lgOwner').val());
        	
        	
        	var tmpSeadesu=parseInt(lgSize/lgOwner);
        		tmpSeadesu=(tmpSeadesu * 100)/100;
        		tmpSeadesu=isNaN(parseInt(tmpSeadesu)) ? 0 : parseInt(tmpSeadesu);
        		//추정세대수 
        		$("#seadesu").val(tmpSeadesu);
        	    //평 구하기  .toPrecision(5)
        		seadesuPy=lgOwner*0.3025 ; 
        		seadesuPy=seadesuPy.toFixed(2);
        	
        	    $("#lgSizePy").val(seadesuPy);
        	      
        }
        
        function fn_AuCurrPyDan(){
        	
        	var tmpauLawAmt=0;
        	var tmpauPy=0;
        	var tempDan="";
        	var tempauBidRate="";
        	var tempAuBidAmt="";
        	
        	for ( var i = 0; i < $("input[name=checkPriceAuction]:checkbox" ).length; i++) {
       		 tmpauLawAmt = $("input[name=auLawAmt]")[i].value;
       		 tmpauPy = $("input[name=auBSizePy]")[i].value;
       		 tempAuBidAmt = $("input[name=auBidAmt]")[i].value;  //낙찰가격
       		 
       		 tmpauLawAmt=isNaN(parseInt(tmpauLawAmt)) ? 0 : parseInt(tmpauLawAmt);
       		 tmpauPy=isNaN(parseInt(tmpauPy)) ? 0 : parseInt(tmpauPy);
       		 tempAuBidAmt=isNaN(parseInt(tempAuBidAmt)) ? 0 : parseInt(tempAuBidAmt);

       		 tempDan =parseInt(tmpauLawAmt)/parseInt(tmpauPy);
       		 tempDan= Math.round(tempDan/1000)*1000; //천원단위 반올림 
       		
       		 
	       	tempDan=isNaN(parseFloat(tempDan)) ? 0 : parseFloat(tempDan);

	       	if(tempAuBidAmt==0){
	       		tempauBidRate=0.00;
	       	 $("input[name=auBidRate]")[i].value =tempauBidRate; 
	       	 
	       	}else{

	       		tempauBidRate=tempAuBidAmt/tmpauLawAmt;

	       	    tempauBidRate =(Math.floor(tempauBidRate * 10000)/100);
	   
	       	 $("input[name=auBidRate]")[i].value =tempauBidRate; 
	       	 
	       	}
       		 
       		 $("input[name=auCurrPyDan]")[i].value =tempDan ;
       		
       	 	}
       			fn_priceAuctionCheck();	
       	}

        // 임력표 집합건물에 관한 사항 공유면적
        $(document).ready(function(){
            $("input[name=cbPubSize]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     
     // 임력표 감정에 관한 사항  실거래가격
        $(document).ready(function(){
            $("input[name=regiAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     // 임력표 감정에 관한 사항  실거래가격
        $(document).ready(function(){
            $("input[name=baseAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_changeBuilding();
                }
            }); 
        });
     // 임력표 등기부상 전용면적
        $(document).ready(function(){
            $("input[name=secRegiSize]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
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
        // 보정표 당해지역의 낙찰가율
        $(document).ready(function(){
            $("input[name=pBidRate]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	changeExpectedBidPrice();
                }
            }); 
        });
     // 보정표 유사부동산 낙찰가율
        $(document).ready(function(){
            $("input[name=kBidRate]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	changeExpectedBidPrice();
                }
            }); 
        });
        
     //감정가액산출 _ 결정가격
        $(document).ready(function(){
            $("input[name=applAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
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
        	
        	//console.log("applRate===>"+applRate);
        	
        	pBidRate=isNaN(parseFloat($('#pBidRate').val())) ? 100 : parseFloat($('#pBidRate').val());
        	kBidRate=isNaN(parseFloat($('#kBidRate').val())) ? 100 : parseFloat($('#kBidRate').val());
        	bBidRate=isNaN(parseFloat($('#bBidRate').val())) ? 100 : parseFloat($('#bBidRate').val());
        	applRate=isNaN(parseFloat($('#applRate').val())) ? 100 : parseFloat($('#applRate').val());
        	
        	/*
        	if(pBidRate==null ||pBidRate=='null') pBidRate=100 ;
        	if(kBidRate==null ||kBidRate=='null') kBidRate=100 ;
        	if(bBidRate==null ||bBidRate=='null') bBidRate=100 ;
        	if (applRate==null ||applRate=='null'||applRate=='NaN') {
        		applRate=100;
        		//console.log("applRate111111===>"+applRate);
        	}
        	*/
        	//if(applRate==null ||applRate=='null'||applRate=='NaN') applRate=100 ;
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

        	 if (applRate==null ||applRate=='null'||applRate=='NaN') {
         		applRate=100;
         		
         	}
        	 $("#applRate").val(applRate);
        	 
        	 //예상낙찰가
        	 plBidAmt= Math.floor(increaseAmt*(applRate/100));
        	 plBidAmt = Math.round(plBidAmt/1000)*1000; //천원단위 반올림 
        	//console.log("plBidAmt===>"+plBidAmt);
        	 $("#plBidAmt").val(plBidAmt);
        	 $("#hPlBidAmt").val(plBidAmt);
        	console.log("plBidAmt===>"+plBidAmt);
        	console.log("auctionAmt===>"+auctionAmt);
        	 
        	 var hPossAmt = ((plBidAmt-auctionAmt)/2);
        	 console.log("hPossAmt===>"+hPossAmt);
        	 
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
        
     
        
     // 감정가액산출_최저가격
        $(document).ready(function(){
            $("input[name=currMinAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
               // alert('111111111')
                	fn_priceAptCheck();
                }
            }); 
            
        });
     // 감정가액산출_최고가격
        $(document).ready(function(){
            $("input[name=currMaxAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_priceAptCheck();
                }
            }); 
            
        });
     // 감정가액산출_전세금
        $(document).ready(function(){
            $("input[name=leaseAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_priceAptCheck();
                }
            }); 
            
        });
     
        $(document).ready(function(){
            $("input[name=credCombAmtOrg]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
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
     
     // 시세조사 사례 평형
        $(document).ready(function(){
            $("input[name=caseDbSizePy]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
     // 시세조사 사례 최저가격
        $(document).ready(function(){
            $("input[name=caseDbSizePy]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
     // 시세조사 사례 최고가격
        $(document).ready(function(){
            $("input[name=caseDcurrMaxAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
        // 시세조사 사례 전세금
        $(document).ready(function(){
            $("input[name=caseDleaseAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
    
        $(document).ready(function(){
            $("input[name=caseDcurrMinAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
        $(document).ready(function(){
            $("input[name=caseDleaseAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
                	fn_piceCaseDCheck();
                }
            });  
        });
        $(document).ready(function(){
            $("input[name=caseDcurrMaxAmt]").keydown(function (key) {
                if(key.keyCode == 13){//키가 13이면 실행 (엔터는 13)
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
        	console.log("piceCaseDtmpMinCheck===>"+piceCaseDtmpMinCheck)
            console.log("piceCaseDtmpMaxCheck===>"+piceCaseDtmpMaxCheck)
            
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
        	document.listForm.action = "<c:url value='/es01/es01_w02_save.do'/>";
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
        	$('#appraisedValue').hide();
        	$('#successfulBidRate').hide();
        	$('#dividendTable').hide();      
        	$('#commonReport').hide();      
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

<body>
    <form:form modelAttribute="searchVO" id="listForm" name="listForm" method="post">
        <input type="hidden" name="selectedId" />
        <input type="hidden" name="searchSeq" value= "${searchVO.searchSeq}" />
        <input type="hidden" name="searchYyyy" value="${searchVO.searchYyyy}" />
        <input type="hidden" name="docKey" value= "${searchVO.docKey}" />
        <input type="hidden" name="temps" value= "" />
        <input type="hidden" name="secCode" value= "${searchVO.secCode}" />
        <input type="hidden" name="appraisal" value= "${searchVO.appraisal}" />
        <input type="hidden" name="liquorType" value= "${searchVO.liquorType}" />
        <input type="hidden" name="priceAucTr" id="priceAucTr" value= "1" />
        <input type="hidden" name="priceCaseMTr" id="priceCaseMTr" value= "1" />
        <input type="hidden" name="piceCaseDMTr" id="piceCaseDMTr" value= "" />
        <input type="hidden" name='dividendTableCalculationListCnt' id='dividendTableCalculationListCnt' value="${fn:length(selectDividendTableCalculationList)}"></input>
        <input type="hidden" name='successfulBidRateTableListCnt' id='successfulBidRateTableListCnt' value="${fn:length(selectSuccessfulBidRateTableList)}"></input>
        <input type="hidden" name="contentRightCnt" value="${fn:length(selectContentRightList)}" />
        <input type="hidden" name="culationHousingRentalDepositCnt" value="${fn:length(selectculationHousingRentalDepositList)}" />
        
        <div class="col-xxl-12 mb-1">
			<div class="text-center mb-5">
				<h3>지점감정현황</h3>
			</div>
			<div class="d-flex align-items-center gap-4 justify-content-end mb-2">
				<div class="fs-9 fw-bold text-danger">결재 진행 중 / 완료된 담보이거나 작성할 수 있는 권한이 없으므로 수정하실 수 없습니다. 전자결재를 이용하여 주십시오.</div>
				<a href="javascript:fn_save_Button();" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder">
					<i class="fas fa-print"></i>
					저장
				</a>
				<a href="#" onclick="fn_Press_Dividend();" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder">
					<i class="fas fa-print"></i>
					배당처리
				</a>
				<a href="javascript:fn_egov_selectList();" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder">
					<i class="fas fa-file-alt"></i>
					배당집계표
				</a>
				<a href="javascript:fn_egov_selectList();" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder">
					<i class="fas fa-print"></i>
					프린트
				</a>
			</div>
			<div class="card">
				<div class="card-body py-3">
					<c:if test="${!empty selectCollateralMasterList}">
						<c:forEach var="selectCollateralMasterList" items="${selectCollateralMasterList}" varStatus="status">
							<c:set var="appraiseGu" value="${selectCollateralMasterList.appraiseGu}"> </c:set>
							<div class="d-flex flex-stack flex-wrap gap-4">
								<div class="d-flex align-items-center flex-wrap gap-3">
									<div class="d-flex align-items-center fw-bolder">
										<div class="text-muted fs-7 text-nowrap">담보종류</div>
										<form:select path="searchSecCode" class="form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto" data-hide-search="true" data-dropdown-css-class="w-200px" data-placeholder="옵션을 선택하세요">
											<c:forEach var="dambo" items="${damboList}" varStatus="status">
				        						<option value="${dambo.cdCode}" <c:if test="${dambo.cdCode eq selectCollateralMasterList.secCode }">selected</c:if> >${dambo.cdDesc}</option>
				        					</c:forEach>
										</form:select>
									</div>
									<div class="d-flex align-items-center fw-bolder">
										<div class="text-muted fs-7 text-nowrap">주류타입</div>
										<select name="liquorType" id="liquorType" class="form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto" data-hide-search="true" data-dropdown-css-class="w-250px" data-placeholder="옵션을 선택하세요">
											<c:forEach var="liquorType" items="${liquorType}" varStatus="status">
				        						<option value="${liquorType.cdCode}" <c:if test="${liquorType.cdCode eq selectCollateralMasterList.liquorType }">selected</c:if> >${liquorType.cdDesc}</option>
				        					</c:forEach>
										</select>
									</div>
								</div>													
							</div>
							<hr class="text-muted my-2">
							<div class="d-flex flex-stack flex-wrap gap-4">
								<div class="d-flex align-items-center flex-wrap gap-3">
									<div class="d-flex align-items-center fw-bolder">
										<div class="text-muted fs-7 text-nowrap">감정일</div>
										<input class="form-control input-blok size-height-10" name="estiDate" id="estiDate" value="${selectCollateralMasterList.estiDate}" readonly/>
									</div>
									<div class="d-flex align-items-center fw-bolder">
										<div class="text-muted fs-7 text-nowrap">감정자</div>
										<input class="form-control input-blok size-height-10" value="${selectCollateralMasterList.buseolname}" readonly/>
									</div>
									<div class="d-flex align-items-center fw-bolder">
										<div class="text-muted fs-7 text-nowrap">담보건물명</div>
										<input class="form-control input-blok size-height-10" value="${selectCollateralMasterList.docName}" readonly/>
									</div>
								</div>
							</div>
						</c:forEach>
					</c:if>
					<c:if test="${empty selectCollateralMasterList}">
						<div class="d-flex flex-stack flex-wrap gap-4">
							<div class="d-flex align-items-center flex-wrap gap-3">
								<div class="d-flex align-items-center fw-bolder">
									<div class="text-muted fs-7 text-nowrap">담보종류</div>
									<form:select path="searchSecCode" class="form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto" data-hide-search="true" data-dropdown-css-class="w-200px" data-placeholder="옵션을 선택하세요">
										<c:forEach var="dambo" items="${damboList}" varStatus="status">
			        						<option value="${dambo.cdCode}"> ${dambo.cdDesc}</option>
			        					</c:forEach>
									</form:select>
								</div>
								<div class="d-flex align-items-center fw-bolder">
									<div class="text-muted fs-7 text-nowrap">주류타입</div>
									<select name="liquorType" id="liquorType" class="form-select form-select-transparent text-dark fs-7 lh-1 fw-bolder py-0 ps-3 w-auto" data-hide-search="true" data-dropdown-css-class="w-250px" data-placeholder="옵션을 선택하세요">
										<c:forEach var="liquorType" items="${liquorType}" varStatus="status">
			        						<option value="${liquorType.cdCode}">${liquorType.cdDesc}</option>
			        					</c:forEach>
									</select>
								</div>
							</div>													
						</div>
						<hr class="text-muted my-2">
						<div class="d-flex flex-stack flex-wrap gap-4">
							<div class="d-flex align-items-center flex-wrap gap-3">
								<div class="d-flex align-items-center fw-bolder">
									<div class="text-muted fs-7 text-nowrap">감정일</div>
									<input class="form-control input-blok size-height-10" name="estiDate" id="estiDate" value="" readonly />
								</div>
								<div class="d-flex align-items-center fw-bolder">
									<div class="text-muted fs-7 text-nowrap">감정자</div>
									<input class="form-control input-blok size-height-10" value="" readonly/>
								</div>
								<div class="d-flex align-items-center fw-bolder">
									<div class="text-muted fs-7 text-nowrap">담보건물명</div>
									<input class="form-control input-blok size-height-10" value="" readonly/>
								</div>
							</div>
						</div>
					</c:if>
				</div>
			</div>
        </div>
        
        <div class="col-xxl-12">
        	<div class="card">
        		<div class="card-body">
					<ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
						<li class="nav-item">
							<a class="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_1">입력표</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">감정가액산출</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3">낙찰가율보정표</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_4">응찰입력표</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">배당표</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6">문서관리</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_7">공통보고서</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_8">탁상감정</a>
						</li>
					</ul>
        			<div class="tab-content" id="myTabContent">
        				<div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
							<h5 class="mt-6">
								<span class="svg-icon svg-icon-primary svg-icon-2hx">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
										<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
									</svg>
								</span>
								거래처 등의 표시
							</h5>
							<c:if test="${!empty selectCollateralMasterList}">
								<c:forEach var="collateralMasterList" items="${selectCollateralMasterList}" varStatus="status">
									<div id="kt_content_container">
										<div class="row">
											<div class="col-lg-4 col-md-6 col-sm-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">1. 제1차 거래처</label>
																<div class="row">
																	<div class="col-lg-3 col-md-5 col-sm-3 col-4 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control"  name ="geoCode" id="geoCode" value="${collateralMasterList.geoCode}" />
																		</div>
																	</div>
																	<div class="col-lg-5 col-md-7 col-sm-5 col-8 mb-3">
																		<div class="row">
																			<div class="form-floating col-lg-8">
																				<input type="text" class="form-control" name ="sangho" id="sangho" value="${collateralMasterList.sangho}" />
																			</div>
																			<div class = "col-lg-4">
																				<a href="#" onclick="fn_find_geoCode();">
																					<span class="svg-icon svg-icon-primary svg-icon-2">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"/>
																							<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"/>
																						</svg>
																					</span>
																				</a>
																			</div>
																		</div>	
																	</div>
																	<div class="col-lg-4 col-md-12 col-sm-4 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name ="daepyoName" id="daepyoName" value="${collateralMasterList.daepyoName}" />
																			<label for="daepyoName" class="text-dark">대표자</label>
																		</div>
																	</div>
																</div>																					
															</div>
														</div>																			
													</div>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 col-sm-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">2. 업소명</label>
																<div class="row">
																	<div class="col-lg-3 col-md-5 col-sm-3 col-4 mb-3">
																		<div class="form-floating">
																			<select name="marketDiv" id="marketDiv" class="form-select" id="floatingSelect1" aria-label="" onchange="javascript:changeMarketDiv(this);">
																				<option value="0" <c:if test="${'0' eq collateralMasterList.marketDiv }">selected</c:if>>자체</option>
																				<option value="1" <c:if test="${'1' eq collateralMasterList.marketDiv }">selected</c:if>>업소</option>
																			</select>
																		</div>
																	</div>
																	<div class="col-lg-5 col-md-7 col-sm-5 col-8 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name ="marketName" id="marketName" value="${collateralMasterList.marketName}" />
																		</div>
																	</div>
																	<div class="col-lg-4 col-md-12 col-sm-4 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name ="marketCeo" id="marketCeo" value="${collateralMasterList.marketCeo}" />
																			<label for="floatingInput3" class="text-dark">대표자</label>
																		</div>
																	</div>
																</div>																					
															</div>
														</div>																			
													</div>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 col-sm-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">3. 채무자</label>
																<div class="row">
																	<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name ="debtor" id="debtor" value="${collateralMasterList.debtor}" />
																		</div>
																	</div>
																</div>																					
															</div>
														</div>																			
													</div>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 col-sm-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">4. 담보제공자</label>
																<div class="row">
																	<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name ="guarantor" id="guarantor" value="${collateralMasterList.guarantor}" />
																		</div>
																	</div>
																</div>																					
															</div>
														</div>																			
													</div>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 col-sm-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">5. 채무자와 담보제공자의 관계</label>
																<div class="row">
																	<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name ="debtorRelation" id="debtorRelation" value="${collateralMasterList.debtorRelation}" />
																		</div>
																	</div>
																</div>																					
															</div>
														</div>																			
													</div>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 col-sm-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">6. 이 담보물에 대한 재감정 여부</label>
																<div class="row">
																	<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name ="esDiv" id="esDiv" value="${result.esDiv}" />
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
	        					</c:forEach>
        					</c:if>
        					<c:if test="${empty selectCollateralMasterList}">
								<div id="kt_content_container">
									<div class="row">
										<div class="col-lg-4 col-md-6 col-sm-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<label for="floatingInput1" class="opacity-75 text-primary mb-1">1. 제1차 거래처</label>
															<div class="row">
																<div class="col-lg-3 col-md-5 col-sm-3 col-4 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="geoCode" id="geoCode" value="" />
																	</div>
																</div>
																<div class="col-lg-5 col-md-7 col-sm-5 col-8 mb-3">
																	<div class="row">
																		<div class="form-floating col-lg-8">
																			<input type="text" class="form-control" name ="sangho" id="sangho" value="" />
																		</div>
																		<div class = "col-lg-4">
																			<a href="#" onclick="fn_find_geoCode();">
																				<span class="svg-icon svg-icon-primary svg-icon-2">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"/>
																						<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"/>
																					</svg>
																				</span>
																			</a>
																		</div>
																	</div>	
																</div>
																<div class="col-lg-4 col-md-12 col-sm-4 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="daepyoName" id="daepyoName" value="" />
																		<label for="sangho" class="text-dark">대표자</label>
																	</div>
																</div>
															</div>																					
														</div>
													</div>																			
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-sm-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<label for="floatingInput1" class="opacity-75 text-primary mb-1">2. 업소명</label>
															<div class="row">
																<div class="col-lg-3 col-md-5 col-sm-3 col-4 mb-3">
																	<div class="form-floating">
																		<select name="marketDiv" id="marketDiv" class="form-select" id="floatingSelect1" aria-label="" onchange="javascript:changeMarketDiv();">
																		    <option value="1" >업소</option>
																		    <option value="0">자체</option>
																		</select>
																	</div>
																</div>
																<div class="col-lg-5 col-md-7 col-sm-5 col-8 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="marketName" id="marketName" value=""/>
																	</div>
																</div>
																<div class="col-lg-4 col-md-12 col-sm-4 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="marketCeo" id="marketCeo" value="" />
																		<label for="marketCeo" class="text-dark">대표자</label>
																	</div>
																</div>
															</div>																					
														</div>
													</div>																			
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-sm-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<label for="floatingInput1" class="opacity-75 text-primary mb-1">3. 채무자</label>
															<div class="row">
																<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="debtor" id="debtor" value="" />
																	</div>
																</div>
															</div>																					
														</div>
													</div>																			
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-sm-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<label for="floatingInput1" class="opacity-75 text-primary mb-1">4. 담보제공자</label>
															<div class="row">
																<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="guarantor" id="guarantor"  value=""/>
																	</div>
																</div>
															</div>																					
														</div>
													</div>																			
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-sm-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<label for="floatingInput1" class="opacity-75 text-primary mb-1">5. 채무자와 담보제공자의 관계</label>
															<div class="row">
																<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="debtorRelation" id="debtorRelation" value="" />
																	</div>
																</div>
															</div>																					
														</div>
													</div>																			
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-sm-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<label for="floatingInput1" class="opacity-75 text-primary mb-1">6. 이 담보물에 대한 재감정 여부</label>
															<div class="row">
																<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name ="esDiv" id="esDiv" value="" />
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
        					</c:if>
							<div class="separator my-10"></div>
							<h5 class="mt-6">
								<span class="svg-icon svg-icon-primary svg-icon-2hx">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
										<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
									</svg>
								</span>
								부동산의 표시
							</h5>
        					<c:if test="${!empty selectCollateralBuildingList}">
        						<c:forEach var="BuildingList" items="${selectCollateralBuildingList}" varStatus="status">
									<c:set var="elapYear" value="${BuildingList.elapYear}"></c:set>
									<c:set var="cbYyyy" value="${BuildingList.cbYyyy}"></c:set>
									<c:set var="numHousehold" value="${BuildingList.numHousehold}"></c:set>
									<div id="kt_content_container">
										<div class="row">
											<div class="col-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12 mb-12">
														<div class="form-floating">
															<label for="floatingInput1" class="opacity-75 text-primary">1. 감정 대상 부동산의 표시</label>
														</div>
													</div>
													<div class="col-lg-12 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row">
																	<div class="col-lg-4 col-md-10 col-sm-10 col-9 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="juso1" id="juso1" value="${BuildingList.juso1}" />
																			<label for="juso1">소재지</label>
																		</div>
																	</div>
																	<div class="col-lg-1 col-md-2 col-sm-2 col-3 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="lotNum" id="lotNum" value="${BuildingList.lotNum}" />
																			<label for="lotNum">지번</label>
																		</div>
																	</div>
																	<div class="col-lg-3 col-md-8 col-sm-6 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbName" id="cbName" value="${BuildingList.cbName}" />
																			<label for="cbName">집합건물의 명칭</label>
																		</div>
																	</div>
																	<div class="col-lg-2 col-md-2 col-sm-3 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="dong" id="dong" value="${BuildingList.dong}" />
																			<label for="dong">동수</label>
																		</div>
																	</div>
																	<div class="col-lg-2 col-md-2 col-sm-3 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="ho" id="ho" value="${BuildingList.ho}" />
																			<label for="ho">호수</label>
																		</div>
																	</div>
																</div>
																<div class="row">
																	<div class="col-lg-1 col-md-2 col-sm-4 mb-2">
																		<div class="form-floating">
																			<select name="lcategory" id="lcategory" class="form-select" aria-label="">
																				<c:forEach var="landUseZoneList" items="${selectLandUseZoneList}" varStatus="status" >
																					<option value="${landUseZoneList.cdCode}" <c:if test="${landUseZoneList.cdCode eq BuildingList.lcategory }">selected</c:if>>${landUseZoneList.cdDesc}</option>
																				</c:forEach>
																			</select>
																			<label for="lcategory">지목</label>
																		</div>
																	</div>
																	<div class="col-lg-3 col-md-4 col-sm-8 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="lgSize" id="lgSize" value="${BuildingList.lgSize}" />
																			<label for="lgSize">대지권의 목적인 일단의 토지 전체의 면적</label>
																		</div>
																	</div>
																	<div class="col-lg-2 col-md-2 col-sm-6 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="lgOwner" id="lgOwner" value="${BuildingList.lgOwner}" />
																			<label for="lgOwner">대지권 소유권</label>
																		</div>
																	</div>
																	<div class="col-lg-1 col-md-2 col-sm-3 mb-2">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="seadesu" id="seadesu" value="" readonly />
																			<label for="floatingInput1">추정세대수</label>
																		</div>
																	</div>
																	<div class="col-lg-1 col-md-2 col-sm-3 mb-2">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="lgSizePy" id="lgSizePy" value="" readonly />
																			<label for="floatingInput1">추정 평수<span class="text-danger fw-bolder">평</span></label>
																		</div>
																	</div>
																	<div class="col-lg-4 col-md-12 col-sm-12 mb-3">
																		<div class="form-floating">
																			<select class="form-select" name="possAAreaBid" id="possAAreaBid" aria-label="" onchange="javascript:changeBidTablePossAArea(this);"> 
																				<c:forEach var="regDepsitAppAreaList" items="${selectRegDepsitAppAreaList}" varStatus="status">
																					<option value="${regDepsitAppAreaList.cdCode}" value2="${regDepsitAppAreaList.attr02}" value3="${regDepsitAppAreaList.attr03}" <c:if test="${regDepsitAppAreaList.cdCode eq BuildingList.possAArea }">selected</c:if>>${regDepsitAppAreaList.cdDesc}</option>
																				</c:forEach>
																			</select>
																			<label for="possAAreaBid">가임대보증금 적용지역</label>
																		</div>
																	</div>
																</div>
															</div>
														</div>																			
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-12">
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-6 mb-12">
														<div class="form-floating">
															<label for="floatingInput1" class="opacity-75 text-primary">2. 집합건물에 관한 사항</label>
														</div>
													</div>
													<div class="col-lg-9 col-md-12 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row mb-3">
																	<h6>전체 규모 및 전용부분의 위치</h6>
																	<div class="col-lg-4 col-md-8 col-sm-8 mb-3">
																		<div class="form-floating">
																			<select name="cbStruc" id="cbStruc" class="form-select" aria-label="">
																				<c:forEach var="buildingStructureList" items="${selectBuildingStructureList}" varStatus="status">
																					<option value="${buildingStructureList.cdCode}" <c:if test="${buildingStructureList.cdCode eq BuildingList.cbStruc }">selected</c:if>>${buildingStructureList.cdDesc}</option>
																				</c:forEach>
																			</select>
																			<label for="cbStruc">구조</label>
																		</div>
																	</div>
																	<div class="col-lg-2 col-md-4 col-sm-4 mb-3">
																		<div class="form-floating">
																			<select class="form-select" name="cbRoof" id="cbRoof" aria-label="">
																				<c:forEach var="roofTypeList" items="${selectRoofTypeList}" varStatus="status">
																					<option value="${roofTypeList.cdCode}" <c:if test="${roofTypeList.cdCode eq BuildingList.cbRoof }">selected</c:if>>${roofTypeList.cdDesc}</option>
																				</c:forEach>
																			</select>
																			<label for="floatingInput3">지붕</label>
																		</div>
																	</div>
																	<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbUpfloor" id="cbUpfloor" value="${BuildingList.cbUpfloor}" />
																			<label for="cbUpfloor">지상</label>
																		</div>
																	</div>
																	<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbDnfloor" id="cbDnfloor" value="${BuildingList.cbDnfloor}" />
																			<label for="cbDnfloor">지하</label>
																		</div>
																	</div>
																	<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbFloor" id="cbFloor" value="${BuildingList.cbFloor}" />
																			<label for="cbFloor">해당층</label>
																		</div>
																	</div>
																	<div class="col-lg-2 col-md-4 col-sm-4 col-8 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbYyyy" id="cbYyyy" value="${BuildingList.cbYyyy}" />
																			<label for="cbYyyy">건축일자 <span class="text-danger fw-bolder"><input type="text" name="elapYear" id="elapYear" value="${BuildingList.elapYear}"/></span></label>
																		</div>
																	</div>
																	<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="numHousehold" id="numHousehold" value="${BuildingList.numHousehold}" />
																			<label for="numHousehold">세대수</label>
																		</div>
																	</div>
																</div>
															</div>
														</div>																			
													</div>
													<div class="col-lg-3 col-md-12 col-sm-12 mb-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row mb-3">
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbExmSize" id="cbExmSize" value="${BuildingList.cbExmSize}" />
																			<label for="cbExmSize">전유면적 <span class="text-danger fw-bolder">m<sup>2</sup></span></label>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbExmSizePy" id="cbExmSizePy" value="${BuildingList.cbExmSizePy }" />
																			<label for="cbExmSizePy">전유면적 <span class="text-danger fw-bolder">평</span></label>
																		</div>
																	</div>
																</div>
																<div class="row mb-3">
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbPubSize" id="cbPubSize" value="<fmt:formatNumber value="${BuildingList.cbPubSize }" pattern=".00" />" />
																			<label for="floatingInput3">공유면적 <span class="text-danger fw-bolder">m<sup>2</sup></span></label>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbPubSizePy" id="cbPubSizePy" value="<fmt:formatNumber value="${BuildingList.cbPubSizePy }" pattern=".00" />" />
																			<label for="floatingInput3">공유면적 <span class="text-danger fw-bolder">평</span></label>
																		</div>
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbTotSize" id="cbTotSize" value="<fmt:formatNumber value="${BuildingList.cbTotSize}" pattern=".00" />"  readonly="readonly"/>
																			<label for="floatingInput3">면적합계 <span class="text-danger fw-bolder">m<sup>2</sup></span></label>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="cbTotSizePy" id="cbTotSizePy" value="<fmt:formatNumber value="${BuildingList.cbTotSizePy}" pattern=".00" />" readonly="readonly" />
																			<label for="floatingInput3">면적합계 <span class="text-danger fw-bolder fs-10">평형</span></label>
																		</div>
																	</div>
																</div>
															</div>
														</div>																			
													</div>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-12">
												<div class="row">
													<div class="col-lg-12 col-md-12 col-sm-12 mb-12">
														<div class="form-floating">
															<label for="floatingInput1" class="opacity-75 text-primary">3. 감정 대상 부동산에의 규제의 표시</label>
														</div>
													</div>
													<c:if test="${empty selectRegulatoryAffairsOfficerList}">
														<div class="col-lg-6 col-md-12 col-sm-12">
															<div class="card bg-gray-100 mb-7">
																<div class="card-body">
																	<div class="row">
																		<h6>지역·지구등 지정 여부</h6>
																		<div class="col-12">
																			<div class="form-floating mb-3">
																				<input type="text" class="form-control" name="restPlUse" id="restPlUse" value="" />
																				<label for="restPlUse" class="text-dark">국토의 계획 및 이용에 관한 법률에 따른 지역·지구등</label>
																			</div>
																		</div>
																		<div class="col-12">
																			<div class="form-floating mb-3">
																				<input type="text" class="form-control" name="restOtLaw" id="restOtLaw" value="" />
																				<label for="restOtLaw" class="text-dark">다른 법률등에 따른 지역·지구등</label>
																			</div>
																		</div>
																		<div class="col-12">
																			<div class="form-floating">
																				<input type="text" class="form-control" name="restEnRule" id="restEnRule" value="" />
																				<label for="restEnRule" class="text-dark">시행령 부칙 제 3조에 따른 추가기재확인 내용</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>																			
														</div>
														<div class="col-lg-6 col-md-12 col-sm-12">
															<div class="card bg-gray-100 mb-7">
																<div class="card-body">
																	<div class="row">
																		<div class="col-12">
																			<div class="form-floating">
																				<input type="text" class="form-control" name="restFuLaw" id="restFuLaw" value="" />
																				<label for="restFuLaw" class="text-dark">"토지이용규제 기본법시행령" 제 9조 제 2항 각호에 해당되는 사항</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</c:if>
													<c:if test="${!empty selectRegulatoryAffairsOfficerList}">
														<c:forEach var="regulatoryAffairsOfficerList" items="${selectRegulatoryAffairsOfficerList}" varStatus="status">
															<div class="col-lg-6 col-md-12 col-sm-12">
																<div class="card bg-gray-100 mb-7">
																	<div class="card-body">
																		<div class="row">
																			<h6>지역·지구등 지정 여부</h6>
																			<div class="col-12">
																				<div class="form-floating mb-3">
																					<input type="text" class="form-control" name="restPlUse" id="restPlUse" value="${regulatoryAffairsOfficerList.restPlUse}" />
																					<label for="restPlUse" class="text-dark">국토의 계획 및 이용에 관한 법률에 따른 지역·지구등</label>
																				</div>
																			</div>
																			<div class="col-12">
																				<div class="form-floating mb-3">
																					<input type="text" class="form-control" name="restOtLaw" id="restOtLaw" value="${regulatoryAffairsOfficerList.restOtLaw}" />
																					<label for="restOtLaw" class="text-dark">다른 법률등에 따른 지역·지구등</label>
																				</div>
																			</div>
																			<div class="col-12">
																				<div class="form-floating">
																					<input type="text" class="form-control" name="restEnRule" id="restEnRule" value="${regulatoryAffairsOfficerList.restEnRule}" />
																					<label for="restEnRule" class="text-dark">시행령 부칙 제 3조에 따른 추가기재확인 내용</label>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>																			
															</div>
															<div class="col-lg-6 col-md-12 col-sm-12">
																<div class="card bg-gray-100 mb-7">
																	<div class="card-body">
																		<div class="row">
																			<div class="col-12">
																				<div class="form-floating">
																					<input type="text" class="form-control" name="restFuLaw" id="restFuLaw" value="${regulatoryAffairsOfficerList.restFuLaw}" />
																					<label for="restFuLaw" class="text-dark">"토지이용규제 기본법시행령" 제 9조 제 2항 각호에 해당되는 사항</label>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</c:forEach>
													</c:if>
												</div>
											</div>
										</div>
									</div>
        						</c:forEach>
        					</c:if>
        					<c:if test="${empty selectCollateralBuildingList}">
								<div id="kt_content_container">
									<div class="row">
										<div class="col-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12 mb-12">
													<div class="form-floating">
														<label for="floatingInput1" class="opacity-75 text-primary">1. 감정 대상 부동산의 표시</label>
													</div>
												</div>
												<div class="col-lg-12 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<div class="col-lg-4 col-md-10 col-sm-10 col-9 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="juso1" id="juso1" value="" />
																		<label for="juso1">소재지</label>
																	</div>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-3 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="lotNum" id="lotNum" value="" />
																		<label for="lotNum">지번</label>
																	</div>
																</div>
																<div class="col-lg-3 col-md-8 col-sm-6 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbName" id="cbName" value="" />
																		<label for="cbName">집합건물의 명칭</label>
																	</div>
																</div>
																<div class="col-lg-2 col-md-2 col-sm-3 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="dong" id="dong" value="" />
																		<label for="dong">동수</label>
																	</div>
																</div>
																<div class="col-lg-2 col-md-2 col-sm-3 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="ho" id="ho" value="" />
																		<label for="ho">호수</label>
																	</div>
																</div>
															</div>
															<div class="row">
																<div class="col-lg-1 col-md-2 col-sm-4 mb-2">
																	<div class="form-floating">
																		<select name="lcategory" id="lcategory" class="form-select" aria-label="">
																			<c:forEach var="landUseZoneList" items="${selectLandUseZoneList}" varStatus="status" >
																				<option value="${landUseZoneList.cdCode}">${landUseZoneList.cdDesc}</option>
																			</c:forEach>
																		</select>
																		<label for="lcategory">지목</label>
																	</div>
																</div>
																<div class="col-lg-3 col-md-4 col-sm-8 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="lgSize" id="lgSize" value="" />
																		<label for="lgSize">대지권의 목적인 일단의 토지 전체의 면적</label>
																	</div>
																</div>
																<div class="col-lg-2 col-md-2 col-sm-6 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="lgOwner" id="lgOwner" value="" />
																		<label for="lgOwner">대지권 소유권</label>
																	</div>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-3 mb-2">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="seadesu" id="seadesu" value="" readonly />
																		<label for="floatingInput1">추정세대수</label>
																	</div>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-3 mb-2">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="lgSizePy" id="lgSizePy" value="" readonly />
																		<label for="floatingInput1">추정 평수<span class="text-danger fw-bolder">평</span></label>
																	</div>
																</div>
																<div class="col-lg-4 col-md-12 col-sm-12 mb-3">
																	<div class="form-floating">
																		<select class="form-select" name="possAAreaBid" id="possAAreaBid" aria-label="" onchange="javascript:changeBidTablePossAArea(this);"> 
																			<c:forEach var="regDepsitAppAreaList" items="${selectRegDepsitAppAreaList}" varStatus="status">
																				<option value="${regDepsitAppAreaList.cdCode}" value2="${regDepsitAppAreaList.attr02}" value3="${regDepsitAppAreaList.attr03}">${regDepsitAppAreaList.cdDesc}</option>
																			</c:forEach>
																		</select>
																		<label for="possAAreaBid">가임대보증금 적용지역</label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-6 mb-12">
													<div class="form-floating">
														<label for="floatingInput1" class="opacity-75 text-primary">2. 집합건물에 관한 사항</label>
													</div>
												</div>
												<div class="col-lg-9 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row mb-3">
																<h6>전체 규모 및 전용부분의 위치</h6>
																<div class="col-lg-4 col-md-8 col-sm-8 mb-3">
																	<div class="form-floating">
																		<c:forEach var="buildingStructureList" items="${selectBuildingStructureList}" varStatus="status">
																			<option value="${buildingStructureList.cdCode}">${buildingStructureList.cdDesc}</option>
																		</c:forEach>
																		<label for="cbStruc">구조</label>
																	</div>
																</div>
																<div class="col-lg-2 col-md-4 col-sm-4 mb-3">
																	<div class="form-floating">
																		<select class="form-select" name="cbRoof" id="cbRoof" aria-label="">
																			<c:forEach var="roofTypeList" items="${selectRoofTypeList}" varStatus="status">
																				<option value="${roofTypeList.cdCode}">${roofTypeList.cdDesc}</option>
																			</c:forEach>
																		</select>
																		<label for="floatingInput3">지붕</label>
																	</div>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbUpfloor" id="cbUpfloor" value="" />
																		<label for="cbUpfloor">지상</label>
																	</div>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbDnfloor" id="cbDnfloor" value="" />
																		<label for="cbDnfloor">지하</label>
																	</div>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbFloor" id="cbFloor" value="" />
																		<label for="cbFloor">해당층</label>
																	</div>
																</div>
																<div class="col-lg-2 col-md-4 col-sm-4 col-8 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbYyyy" id="cbYyyy" value="" />
																		<label for="cbYyyy">건축일자 <span class="text-danger fw-bolder"><input type="text" class="form-control input-blok size-height-10 size-width-10 " name="elapYear" id="elapYear" value=""/></span></label>
																	</div>
																</div>
																<div class="col-lg-1 col-md-2 col-sm-2 col-4 mb-3">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="numHousehold" id="numHousehold" value="" />
																		<label for="numHousehold">세대수</label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
												<div class="col-lg-3 col-md-12 col-sm-12 mb-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row mb-3">
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbExmSize" id="cbExmSize" value="" />
																		<label for="cbExmSize">전유면적 <span class="text-danger fw-bolder">m<sup>2</sup></span></label>
																	</div>
																</div>
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbExmSizePy" id="cbExmSizePy" value="" />
																		<label for="cbExmSizePy">전유면적 <span class="text-danger fw-bolder">평</span></label>
																	</div>
																</div>
															</div>
															<div class="row mb-3">
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbPubSize" id="cbPubSize" value="" />
																		<label for="floatingInput3">공유면적 <span class="text-danger fw-bolder">m<sup>2</sup></span></label>
																	</div>
																</div>
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbPubSizePy" id="cbPubSizePy" value="" />
																		<label for="floatingInput3">공유면적 <span class="text-danger fw-bolder">평</span></label>
																	</div>
																</div>
															</div>
															<div class="row">
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbTotSize" id="cbTotSize" value=""  readonly="readonly"/>
																		<label for="floatingInput3">면적합계 <span class="text-danger fw-bolder">m<sup>2</sup></span></label>
																	</div>
																</div>
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="cbTotSizePy" id="cbTotSizePy" value="" readonly="readonly" />
																		<label for="floatingInput3">면적합계 <span class="text-danger fw-bolder fs-10">평형</span></label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											<div class="row">
												<div class="col-lg-12 col-md-12 col-sm-12 mb-12">
													<div class="form-floating">
														<label for="floatingInput1" class="opacity-75 text-primary">3. 감정 대상 부동산에의 규제의 표시</label>
													</div>
												</div>
												<div class="col-lg-6 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<h6>지역·지구등 지정 여부</h6>
																<div class="col-12">
																	<div class="form-floating mb-3">
																		<input type="text" class="form-control" name="restPlUse" id="restPlUse" value="" />
																		<label for="restPlUse" class="text-dark">국토의 계획 및 이용에 관한 법률에 따른 지역·지구등</label>
																	</div>
																</div>
																<div class="col-12">
																	<div class="form-floating mb-3">
																		<input type="text" class="form-control" name="restOtLaw" id="restOtLaw" value="" />
																		<label for="restOtLaw" class="text-dark">다른 법률등에 따른 지역·지구등</label>
																	</div>
																</div>
																<div class="col-12">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="restEnRule" id="restEnRule" value="" />
																		<label for="restEnRule" class="text-dark">시행령 부칙 제 3조에 따른 추가기재확인 내용</label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
												<div class="col-lg-6 col-md-12 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<div class="col-12">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="restFuLaw" id="restFuLaw" value="" />
																		<label for="restFuLaw" class="text-dark">"토지이용규제 기본법시행령" 제 9조 제 2항 각호에 해당되는 사항</label>
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
        					</c:if>
							<div class="separator my-10"></div>
							<h5 class="mt-6">
								<span class="svg-icon svg-icon-primary svg-icon-2hx">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
										<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
									</svg>
								</span>
								감정에 대한 사항
							</h5>
							<c:if test="${!empty selectCollateralBuildingList}">
								<c:forEach var="BuildingList" items="${selectCollateralBuildingList}" varStatus="status">
									<div id="kt_content_container">
										<div class="row">
											<div class="col-12">
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row">
																	<label for="floatingInput1" class="opacity-75 text-primary mb-1">1. 실거래가격 (등기부상 실거래가격)</label>
																	<div class="col-12">
																		<div class="form-floating mb-3">
																			<input type="text" class="form-control"  name="regiAmt" id="regiAmt" value="${BuildingList.regiAmt }" />
																			<label for="regiAmt" class="text-dark">총액</label>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="form-floating mb-3">
																			<input type="text" class="form-control" name="regiDan" id="regiDan"  value="${BuildingList.regiDan }" readonly="readonly" />
																			<label for="regiDan" class="text-dark">m<sup>2</sup>당 단가</label>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="regiDanPy" id="regiDanPy"  value="${BuildingList.regiDanPy }" readonly="readonly" />
																			<label for="regiDanPy" class="text-dark">평당 단가</label>
																		</div>
																	</div>
																</div>
															</div>
														</div>																			
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row">
																	<label for="floatingInput1" class="opacity-75 text-primary mb-1">2. 공동주택가격</label>
																	<div class="col-12">
																		<div class="form-floating mb-3">
																			<input type="text" class="form-control" name="baseAmt" id="baseAmt" value="${BuildingList.baseAmt }" />
																			<label for="baseAmt" class="text-dark">총액</label>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="form-floating mb-3">
																			<input type="text" class="form-control" name="baseDan" id="baseDan"  value="${BuildingList.baseDan }" readonly="readonly" />
																			<label for="baseDan" class="text-dark">m<sup>2</sup>당 단가</label>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="baseDanPy" id="baseDanPy"  value="${BuildingList.baseDanPy }" readonly="readonly" />
																			<label for="baseDanPy" class="text-dark">평당 단가</label>
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
									<div class="separator my-10"></div>
									<h5 class="mt-6">
										<span class="svg-icon svg-icon-primary svg-icon-2hx">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
												<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
											</svg>
										</span>
										담보제공비율
									</h5>
									<c:set var="secRegiSize" value="${BuildingList.secRegiSize}"> </c:set>
									<div id="kt_content_container">
										<div class="row">
											<div class="col-12">
												<div class="row">
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row">
																	<div class="col-12">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="secRegiSize" id="secRegiSize" value="<fmt:formatNumber value="${BuildingList.secRegiSize }" pattern=".00" />" />
																			<label for="secRegiSize" class="text-dark">등기부상 전용면적 <span class="text-danger fw-bolder">[m<sup>2</sup>]</span></label>
																		</div>
																	</div>
																</div>
															</div>
														</div>																			
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row">
																	<h6 class="mt-n7 fw-normal fs-10">담보제공비율</h6>
																	<div class="col-4">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="secNume" id="secNume" value="<fmt:formatNumber value="${BuildingList.secNume }" pattern=".00" />" />
																			<label for="secNume" class="text-dark">분자</label>
																		</div>
																	</div>
																	<div class="col-4">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="secDeno" id="secDeno" value="<fmt:formatNumber value="${BuildingList.secDeno }" pattern=".00" />" />
																			<label for="secDeno" class="text-dark">분모</label>
																		</div>
																	</div>
																	<div class="col-4">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="secRate" id="secRate" value="<fmt:formatNumber value="${BuildingList.secRate }" pattern=".00" />" readonly="readonly" />
																			<label for="secRate" class="text-dark">비율 <span class="text-danger fw-bolder">[%]</span></label>
																		</div>
																	</div>
																</div>
															</div>
														</div>																			
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row">
																	<div class="col-12">
																		<div class="form-floating">
																			<input type="text" class="form-control" value="<fmt:formatNumber value="${BuildingList.secOfferSize }" pattern=".00" />" readonly="readonly" />
																			<label for="secOfferSize" class="text-dark">담보제공면적 <span class="text-danger fw-bolder">[m<sup>2</sup>]</span></label>
																		</div>
																	</div>
																</div>
															</div>
														</div>																			
													</div>
													<div class="col-lg-6 col-md-6 col-sm-12">
														<div class="card bg-gray-100 mb-7">
															<div class="card-body">
																<div class="row">
																	<div class="col-12">
																		<div class="form-floating">
																			<input type="text" class="form-control" name="secDesc" id="secDesc" value="${BuildingList.secDesc }" />
																			<label for="secDesc" class="text-dark">사유</label>
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
								</c:forEach>
							</c:if>
							<c:if test="${empty selectCollateralBuildingList}">
								<div id="kt_content_container">
									<div class="row">
										<div class="col-12">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">1. 실거래가격 (등기부상 실거래가격)</label>
																<div class="col-12">
																	<div class="form-floating mb-3">
																		<input type="text" class="form-control"  name="regiAmt" id="regiAmt" value="" />
																		<label for="regiAmt" class="text-dark">총액</label>
																	</div>
																</div>
																<div class="col-6">
																	<div class="form-floating mb-3">
																		<input type="text" class="form-control" name="regiDan" id="regiDan"  value="" readonly="readonly" />
																		<label for="regiDan" class="text-dark">m<sup>2</sup>당 단가</label>
																	</div>
																</div>
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="regiDanPy" id="regiDanPy"  value="" readonly="readonly" />
																		<label for="regiDanPy" class="text-dark">평당 단가</label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<label for="floatingInput1" class="opacity-75 text-primary mb-1">2. 공동주택가격</label>
																<div class="col-12">
																	<div class="form-floating mb-3">
																		<input type="text" class="form-control" name="baseAmt" id="baseAmt" value="" />
																		<label for="baseAmt" class="text-dark">총액</label>
																	</div>
																</div>
																<div class="col-6">
																	<div class="form-floating mb-3">
																		<input type="text" class="form-control" name="baseDan" id="baseDan"  value="" readonly="readonly" />
																		<label for="baseDan" class="text-dark">m<sup>2</sup>당 단가</label>
																	</div>
																</div>
																<div class="col-6">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="baseDanPy" id="baseDanPy"  value="" readonly="readonly" />
																		<label for="baseDanPy" class="text-dark">평당 단가</label>
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
								<div class="separator my-10"></div>
								<h5 class="mt-6">
									<span class="svg-icon svg-icon-primary svg-icon-2hx">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
											<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
										</svg>
									</span>
									담보제공비율
								</h5>
								<div id="kt_content_container">
									<div class="row">
										<div class="col-12">
											<div class="row">
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<div class="col-12">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="secRegiSize" id="secRegiSize" value="" />
																		<label for="secRegiSize" class="text-dark">등기부상 전용면적 <span class="text-danger fw-bolder">[m<sup>2</sup>]</span></label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<h6 class="mt-n7 fw-normal fs-10">담보제공비율</h6>
																<div class="col-4">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="secNume" id="secNume" value="" />
																		<label for="secNume" class="text-dark">분자</label>
																	</div>
																</div>
																<div class="col-4">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="secDeno" id="secDeno" value="" />
																		<label for="secDeno" class="text-dark">분모</label>
																	</div>
																</div>
																<div class="col-4">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="secRate" id="secRate" value="" readonly="readonly" />
																		<label for="secRate" class="text-dark">비율 <span class="text-danger fw-bolder">[%]</span></label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<div class="col-12">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="secOfferSize" id="secOfferSize" value="" readonly="readonly"/>
																		<label for="secOfferSize" class="text-dark">담보제공면적 <span class="text-danger fw-bolder">[m<sup>2</sup>]</span></label>
																	</div>
																</div>
															</div>
														</div>
													</div>																			
												</div>
												<div class="col-lg-6 col-md-6 col-sm-12">
													<div class="card bg-gray-100 mb-7">
														<div class="card-body">
															<div class="row">
																<div class="col-12">
																	<div class="form-floating">
																		<input type="text" class="form-control" name="secDesc" id="secDesc" value="" />
																		<label for="secDesc" class="text-dark">사유</label>
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
							</c:if>
        					
        				</div>
        				<div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
							<h5 class="mt-1">
								<span class="svg-icon svg-icon-primary svg-icon-2hx">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
										<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
									</svg>
								</span>
								시세조사내역
							</h5>
							<div id="kt_content_container">
								<div class="border rounded p-5 pb-1">
									<div class="d-flex justify-content-between">
										<div>
											<h6>본건사례</h6>
										</div>
										<div>
											<a href="#">
												<i class="fas fa-plus-circle"></i>
											</a>
											<a href="#">
												<i class="fas fa-minus-circle"></i>
											</a>
										</div>
									</div>
									<div class="table-responsive">
										<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
											<thead class="bg-lighten">
												<tr class="fw-bolder fs-7 text-gray-800">
													<th>건축년도</th>
													<th class="fw-normal">
														${cbYyyy}
													</th>
													<th>세대수</th>
													<th class="fw-normal">
														${numHousehold}
													</th>
												</tr>
											</thead>
										</table>
									</div>
									<div class="table-responsive table-loading">
										<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
											<thead class="bg-lighten">
												<tr class="fw-bolder fs-7 text-gray-800">
													<th rowspan="2">선택</th>
													<th rowspan="2">평형</th>
													<th colspan="4">시세조사내용</th>
													<th colspan="2">평균 전세수준</th>
												</tr>
												<tr class="fw-bolder fs-7 text-gray-800">
													<th>최저가격</th>
													<th>최고가격</th>
													<th>평균가격</th>
													<th>평균단가</th>
													<th>전세금</th>
													<th>전세금/평균가격</th>
												</tr>																			
											</thead>
											<tbody>
												<c:if test="${!empty selectPriceAptList}">
													<c:forEach var="priceAptList" items="${selectPriceAptList}" varStatus="status">
														<c:set var="checkYn" value="${priceAptList.checkYn}"> </c:set>
														<c:set var="bSizePy" value="${priceAptList.bSizePy}"> </c:set>
														<c:set var="currMinAmt" value="${priceAptList.currMinAmt}"> </c:set>
														<c:set var="currMaxAmt" value="${priceAptList.currMaxAmt}"> </c:set>
														<c:set var="currAvgAmt" value="${priceAptList.currAvgAmt}"> </c:set>
														<c:set var="currPyDan" value="${priceAptList.currPyDan}"> </c:set>
														<c:set var="leaseAmt" value="${priceAptList.leaseAmt}"> </c:set>
														<c:set var="leaseRate" value="${priceAptList.leaseRate}"> </c:set>
													</c:forEach>
												</c:if>
												<c:if test="${empty selectPriceAptList}">
													<c:set var="checkYn" value="0"> </c:set>
													<c:set var="bSizePy" value="0"> </c:set>
													<c:set var="currMinAmt" value="0"> </c:set>
													<c:set var="currMaxAmt" value="0"> </c:set>
													<c:set var="currAvgAmt" value="0"> </c:set>
													<c:set var="currPyDan" value="0"> </c:set>
													<c:set var="leaseAmt" value="0"> </c:set>
													<c:set var="leaseRate" value="0"> </c:set>
												</c:if>
												<tr class="">
													<td>
														<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
															<input class="form-check-input" type="checkbox" name="priceApt" id="priceApt" <c:if test="${checkYn eq '1' }">checked</c:if> onclick="fn_priceAptCheck()" />
															<input type="hidden" name="checkApt" id="checkApt" value="${checkYn}" ></input>
														</div>
													</td>
													<td>
														<input type="text" class="form-control input-blok size-height-10" name="bSizePy" id="bSizePy" value="${bSizePy}"/>
													</td>
													<td>
														<input type="text" class="form-control input-blok size-height-10" name='currMinAmt' id='currMinAmt' value='${currMinAmt}'/>
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" class="form-control input-blok size-height-10" name='currMaxAmt' id='currMaxAmt' value='${currMaxAmt}' />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" class="form-control input-blok size-height-10" name='currAvgAmt' id='currAvgAmt' value='${currAvgAmt}' />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" class="form-control input-blok size-height-10" name='currPyDan' id='currPyDan' value='${currPyDan}' />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" class="form-control input-blok size-height-10" name='leaseAmt' id='leaseAmt' value='${leaseAmt}' />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" class="form-control input-blok size-height-10" name='leaseRate' id='leaseRate' value='${leaseRate}' />
														<span class="fs-10 text-danger fw-bolder">%</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="my-5"></div>
								<div class="border rounded p-5 pb-1">
									<div class="d-flex justify-content-start">
										<div>
											<h6>가격사례</h6>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-4 col-md-12 col-sm-12">
											<div class="d-flex justify-content-end mb-3">
												<div>
													<a href="javascript:fn_add_priceCaseM();">
														<i class="fas fa-plus-circle"></i>
													</a>
													<a href="#">
														<i class="fas fa-minus-circle"></i>
													</a>
												</div>
											</div>
											<div class="table-responsive table-loading">
												<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
													<thead class="bg-lighten">
														<tr class="fw-bolder fs-7 text-gray-800">
															<th>사례번호</th>
															<th>아파트명</th>
															<th>소재지</th>
															<th>선택</th>
															<th>건축년도</th>
															<th>세대수</th>
														</tr>
													</thead>
													<tbody>
														<c:if test="${!empty selectPriceCaseMList}">
															<c:forEach var="piceCaseMList" items="${selectPriceCaseMList}" varStatus="status">
																<c:set var="lnSeq" value="${piceCaseMList.lnSeq}"> </c:set>
																<tr name="priceCaseM" id="priceCaseM" >
																	<td>
																		<input type="text" name="caMLnSeq" id ="caMLnSeq" value="${lnSeq}" class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck(${lnSeq})" readonly="readonly" />
																	</td>
																	<td>
																		<input type="text" name="caMBName" id ="caMBName" value="${piceCaseMList.bName}" class="form-control input-block size-height-10"  onclick="fn_priceCaseMCheck(${piceCaseMList.lnSeq})" />
																	</td>
																	<td>
																		<input type="text" name="caMJuso" id ="caMJuso" value="${piceCaseMList.juso}" class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck(${piceCaseMList.lnSeq})" />
																	</td>
																	<td>
																		<a href="#">
																			<span class="svg-icon svg-icon-primary svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"/>
																					<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"/>
																				</svg>
																			</span>
																		</a>
																	</td>
																	<td>
																		<input type="text" name="caMBYear" id ="caMBYear" maxlength="4" value="${piceCaseMList.bYear}" class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck(${piceCaseMList.lnSeq})" />
																	</td>
																	<td>
																		<input type="text" name="caMHouseCnt" id ="caMHouseCnt" value="${piceCaseMList.houseCnt}" class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck(${piceCaseMList.lnSeq})" />
																		<input type="button" name="delPriceCaseM" value="del"/>
																	</td>
																</tr>
															</c:forEach>
														</c:if>
														<c:if test="${empty selectPriceCaseMList}">
															<tr name="priceCaseM" id="priceCaseM" >
																<td>
																	<input type="text" name="caMLnSeq" id ="caMLnSeq" value="1" class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck('1')" readonly="readonly" />
																</td>
																<td>
																	<input type="text" name="caMBName" id ="caMBName" value="" class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck('1')" />
																</td>
																<td>
																	<input type="text" name="caMJuso" id ="caMJuso" value="" class="form-control input-block size-height-10"  onclick="fn_priceCaseMCheck('1')" />
																</td>
																<td>
																	<a href="#">
																		<span class="svg-icon svg-icon-primary svg-icon-2">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"/>
																				<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"/>
																			</svg>
																		</span>
																	</a>
																</td>
																<td>
																	<input type="text" name="caMBYear" id ="caMBYear" maxlength="4" value=""  class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck('1')" />
																</td>
																<td>
																	<input type="text" name="caMHouseCnt" id ="caMHouseCnt" value="" class="form-control input-block size-height-10" onclick="fn_priceCaseMCheck('1')" />
																</td>
															</tr>
														</c:if>
													</tbody>
												</table>
											</div>
										</div>
										<div class="col-lg-8 col-md-12 col-sm-12">
											<div class="d-flex justify-content-end mb-3">
												<div>
													<a href="javascript:fn_add_priceCaseD();">
														<i class="fas fa-plus-circle"></i>
													</a>
													<a href="#">
														<i class="fas fa-minus-circle"></i>
													</a>
												</div>
											</div>
											<div class="table-responsive table-loading">
												<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
													<thead class="bg-lighten">
														<tr class="fw-bolder fs-7 text-gray-800">
															<th rowspan="2">선택</th>
															<th rowspan="2">사례번호</th>
															<th rowspan="2">평형</th>
															<th colspan="4">시세조사내용</th>
															<th colspan="2">평균 전세수준</th>
														</tr>
														<tr class="fw-bolder fs-7 text-gray-800">
															<th>최저가격</th>
															<th>최고가격</th>
															<th>평균가격</th>
															<th>평당단가</th>
															<th>전세금</th>
															<th>전세금/평균가격</th>
														</tr>
													</thead>
													<tbody>
														<c:if test="${!empty selectPriceCaseDList}">
															 <c:forEach var="piceCaseDList" items="${selectPriceCaseDList}" varStatus="status">
																<c:set var="piceCaseDCheckYn" value="${piceCaseDList.checkYn}"> </c:set>
																<tr name="priceCaseD" id="priceCaseD1">
																	<td>
																		<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
																			<input class="form-check-input" type="checkbox" name="piceCaseDCheck" id="piceCaseDCheck" <c:if test="${fn:trim(piceCaseDList.checkYn) eq '1' }">checked</c:if> onclick="fn_piceCaseDCheckBox()"/>
																		</div>
																	</td>
																	<td>
																		<input type="text" name="caseDbSizePy" class="form-control input-block size-height-10"  id="caseDbSizePy" value="${piceCaseDList.bSizePy}" />
																	</td>
																	<td>
																		<input type="text" name="caseDLnSeq" class="form-control input-block size-height-10"  id="caseDLnSeq" value="${piceCaseDList.lnSeq}" readonly="readonly"/>
																	</td>
																	<td>
																		<input type="text" name="caseDcurrMinAmt" id="caseDcurrMinAmt" class="form-control input-block size-height-10" value="${piceCaseDList.currMinAmt}" onkeypress="fn_piceCaseDCheck()" />
																		<span class="fs-10 text-danger fw-bolder">원</span>
																	</td>
																	<td>
																		<input type="text" name="caseDcurrMaxAmt" id="caseDcurrMaxAmt" class="form-control input-block size-height-10" value='${piceCaseDList.currMaxAmt}' onkeypress="fn_piceCaseDCheck()" />
																		<span class="fs-10 text-danger fw-bolder">원</span>
																	</td>
																	<td>
																		<input type="text" name="caseDcurrAvgAmt" id="caseDcurrAvgAmt" class="form-control input-block size-height-10" value='${piceCaseDList.currAvgAmt}' readonly="readonly"/>
																		<span class="fs-10 text-danger fw-bolder">원</span>
																	</td>
																	<td>
																		<input type="text" name="caseDcurrPyDan" id="caseDcurrPyDan" class="form-control input-block size-height-10" value='${piceCaseDList.currPyDan}' />
																		<span class="fs-10 text-danger fw-bolder">원</span>
																	</td>
																	<td>
																		<input type="text" name="caseDleaseAmt" id="caseDleaseAmt" class="form-control input-block size-height-10" value="${piceCaseDList.leaseAmt}" />
																		<span class="fs-10 text-danger fw-bolder">원</span>
																	</td>
																	<td>
																		<input type="text" name="caseDleaseRate" id="caseDleaseRate" class="form-control input-block size-height-10" value="${piceCaseDList.leaseRate}" />
																		<!-- <input type="button" name="delPriceCaseD" value="del"/> -->
																		<input type="hidden" name="caseDCheckYn" id="caseDCheckYn" value='${piceCaseDList.checkYn}' />
																		<span class="fs-10 text-danger fw-bolder">%</span>
																	</td>
																</tr>
															</c:forEach>
														</c:if>
														 <c:if test="${empty selectPriceCaseDList}">
														 	 <tr name="priceCaseD" id="priceCaseD1" >
																<td>
																	<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
																		<input class="form-check-input" type="checkbox" name="piceCaseDCheck" id="piceCaseDCheck" <c:if test="${fn:trim(piceCaseDList.checkYn) eq '1' }">checked</c:if> onclick="fn_piceCaseDCheckBox()"/>
																	</div>
																</td>
																<td>
																	<input type="text" name="caseDbSizePy" class="form-control input-block size-height-10"  id="caseDbSizePy" value="0" />
																</td>
																<td>
																	<input type="text" name="caseDLnSeq" class="form-control input-block size-height-10"  id="caseDLnSeq" value="1" readonly="readonly"/>
																</td>
																<td>
																	<input type="text" name="caseDcurrMinAmt" id="caseDcurrMinAmt" class="form-control input-block size-height-10" value="0"/>
																	<span class="fs-10 text-danger fw-bolder">원</span>
																</td>
																<td>
																	<input type="text" name="caseDcurrMaxAmt" id="caseDcurrMaxAmt" class="form-control input-block size-height-10" value="0" />
																	<span class="fs-10 text-danger fw-bolder">원</span>
																</td>
																<td>
																	<input type="text" name="caseDcurrAvgAmt" id="caseDcurrAvgAmt" class="form-control input-block size-height-10" value="0" readonly="readonly"/>
																	<span class="fs-10 text-danger fw-bolder">원</span>
																</td>
																<td>
																	<input type="text" name="caseDcurrPyDan" id="caseDcurrPyDan" class="form-control input-block size-height-10" value="0"/>
																	<span class="fs-10 text-danger fw-bolder">원</span>
																</td>
																<td>
																	<input type="text" name="caseDleaseAmt" id="caseDleaseAmt" class="form-control input-block size-height-10" value="0" />
																	<span class="fs-10 text-danger fw-bolder">원</span>
																</td>
																<td>
																	<input type="text" name="caseDleaseRate" id="caseDleaseRate" class="form-control input-block size-height-10" value="0" />
																	<input type="hidden" name="caseDrno" id="caseDrno" value="" />
																	<input type="hidden" name="caseDCheckYn" id="caseDCheckYn" value="0" />
																	<span class="fs-10 text-danger fw-bolder">%</span>
																</td>
															 </tr>
														 </c:if>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="my-5"></div>
							<div class="border rounded p-5 pb-1">
								<div class="d-flex justify-content-between mb-3">
									<div>
										<h6>경매사례</h6>
									</div>
									<div>
										<a href="javascript:fn_addAuction();">
											<i class="fas fa-plus-circle"></i>
										</a>
										<a href="#">
											<i class="fas fa-minus-circle"></i>
										</a>
									</div>
								</div>
								<div class="table-responsive table-loading">
									<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
										<thead class="bg-lighten">
											<tr class="fw-bolder fs-7 text-gray-800">
												<th>선택</th>
												<th>경매사건번호</th>
												<th>아파트명</th>
												<th>소재지</th>
												<th>선택</th>
												<th>총층수</th>
												<th>층수</th>
												<th>평형</th>
												<th>법원감정가</th>
												<th>평당단가</th>
												<th>낙찰가격</th>
												<th>낙찰가율</th>
											</tr>
										</thead>
										<tbody>
											<c:if test="${empty selectPriceAuctionList}">
												<tr name="priceAuction" id="priceAuction" >
													<td>
														<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
															<input class="form-check-input" name="checkPriceAuction" id="checkPriceAuction1" type="checkbox" onclick="fn_checkBoxchg('1')" />
															<input type="hidden" name="auCheckYn" id="auCheckYn1" value="0" />
														</div>
													</td>
													<td>
														<input type="text" name="auNo" id="auNo" class="form-control input-block w-auto" value="" />
													</td>
													<td>
														<input type="text" name="auBName" id="auBName" class="form-control input-block w-auto" value="" />
													</td>
													<td>
														<input type="text" name="auJuso" id="auJuso" class="form-control input-block w-auto" value="" />
													</td>
													<td>
														<a href="#">
															<span class="svg-icon svg-icon-primary svg-icon-2">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"/>
																	<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"/>
																</svg>
															</span>
														</a>
													</td>
													<td>
														<input type="text" name="auTotFloor" id="auTotFloor" class="form-control input-block w-auto" value="0" />
													</td>
													<td>
														<input type="text" name="auFloor" id="auFloor" class="form-control input-block w-auto" value="0" />
													</td>
													<td>
														<input type="text" name="auBSizePy" id="auBSizePy" class="form-control input-block w-auto" value="0" />
													</td>
													<td>
														<input type="text" name="auLawAmt" id="auLawAmt" class="form-control input-block w-auto" value="0" />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" name="auCurrPyDan" id="auCurrPyDan" class="form-control input-block w-auto" value="0" />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" name="auBidAmt" id="auBidAmt" class="form-control input-block w-auto" value="0" />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" name="auBidRate" id="auBidRate" class="form-control input-block w-auto" value="0" />
														<span class="fs-10 text-danger fw-bolder">%</span>
													</td>
												</tr>
											</c:if>
											<c:if test="${!empty selectPriceAuctionList}">
												<tr name="priceAuction" id="priceAuction" >
													<td>
														<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
															<input class="form-check-input" name="checkPriceAuction" id="checkPriceAuction1" <c:if test="${priceAuctionList.checkYn eq '1' }">checked</c:if> type="checkbox" onclick="fn_priceAuctionCheck()" />
															<input type="hidden" name="auCheckYn" id="auCheckYn" value="${priceAuctionList.checkYn}" />
														</div>
													</td>
													<td>
														<input type="text" name="auNo" id="auNo" class="form-control input-block w-auto" value="${priceAuctionList.auNo}" />
													</td>
													<td>
														<input type="text" name="auBName" id="auBName" class="form-control input-block w-auto" value="${priceAuctionList.bName}" />
													</td>
													<td>
														<input type="text" name="auJuso" id="auJuso" class="form-control input-block w-auto" value="${priceAuctionList.juso}" />
													</td>
													<td>
														<a href="#">
															<span class="svg-icon svg-icon-primary svg-icon-2">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"/>
																	<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"/>
																</svg>
															</span>
														</a>
													</td>
													<td>
														<input type="text" name="auTotFloor" id="auTotFloor" class="form-control input-block w-auto" value="${priceAuctionList.totFloor}" />
													</td>
													<td>
														<input type="text" name="auFloor" id="auFloor" class="form-control input-block w-auto" value="${priceAuctionList.floor}" />
													</td>
													<td>
														<input type="text" name="auBSizePy" id="auBSizePy" class="form-control input-block w-auto" value="${priceAuctionList.bSizePy}" />
													</td>
													<td>
														<input type="text" name="auLawAmt" id="auLawAmt" class="form-control input-block w-auto" value="${priceAuctionList.lawAmt}" />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" name="auCurrPyDan" id="auCurrPyDan" class="form-control input-block w-auto" value="${priceAuctionList.currPyDan}" />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" name="auBidAmt" id="auBidAmt" class="form-control input-block w-auto" value="${priceAuctionList.bidAmt}" onkeypress="fn_AuCurrPyDan()" />
														<span class="fs-10 text-danger fw-bolder">원</span>
													</td>
													<td>
														<input type="text" name="auBidRate" id="auBidRate" class="form-control input-block w-auto" value="${priceAuctionList.bidRate}" />
														<!--  <input type="button" name="delAuction" value="del"/> -->
														<span class="fs-10 text-danger fw-bolder">%</span>
													</td>
												</tr>
											</c:if>
										</tbody>
									</table>
								</div>
							</div>
							<div class="separator my-10"></div>
							<h5 class="mt-1">
								<span class="svg-icon svg-icon-primary svg-icon-2hx">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
										<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
									</svg>
								</span>
								감정에 관한 사항
							</h5>
							<div class="table-responsive table-loading">
								<c:forEach var="appraiseMinMax" items="${selectAppraiseMinMaxList}" varStatus="status">
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
								</c:forEach>
								<table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
									<thead class="bg-lighten">
										<tr class="fw-bolder fs-7 text-gray-800">
											<th colspan="3">구분</th>
											<th>금액</th>
											<th>최저/최고비율</th>
										</tr>
									</thead>
									<tbody>
										<!-- 선택된 row가 있다면 table-active로 제어 -->
										<tr class="fw-bolder fs-7 text-gray-800">
											<td rowspan="7">가격의 결정</td>
											<td rowspan="2">본건사례</td>
											<td>최저가격</td>
											<td class="fw-normal">
												<input type="text" name="maMinAmt" id="maMinAmt" class="form-control input-block w-auto" value="${maMinAmt}" readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
											<td rowspan="2" class="fw-normal">
												<input type="text" name="maRate" id="maRate" class="form-control input-block w-auto" value='${maRate}' readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">%</span>
											</td>																			
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td>최고가격</td>
											<td class="fw-normal">
												<input type="text" name="maMaxAmt" id="maMaxAmt" class="form-control input-block w-auto" value='${maMaxAmt}' readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td rowspan="2">인근 가격사례</td>
											<td>최저가격</td>
											<td class="fw-normal">
												<input type="text" name="prMinAmt" id="prMinAmt" class="form-control input-block w-auto" value='${prMinAmt}' readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
											<td rowspan="2" class="fw-normal">
												<input type="text" name="prRate" id="prRate" class="form-control input-block w-auto" value='${prRate}' readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">%</span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td>최고가격</td>
											<td class="fw-normal">
												<input type="text" name="prMaxAmt" id="prMaxAmt" class="form-control input-block w-auto" value='${prMaxAmt}' readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td rowspan="2">경매사례</td>
											<td>최저가격</td>
											<td class="fw-normal">
												<input type="text" name="auMinAmt" id="auMinAmt" class="form-control input-block w-auto" value='${auMinAmt}' readonly />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
											<td rowspan="2" class="fw-normal">
												<input type="text" name="auRate" id="auRate" value='${auRate}' class="form-control input-block w-auto" readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">%</span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td>최고가격</td>
											<td class="fw-normal">
												<input type="text" name="auMaxAmt" id="auMaxAmt" class="form-control input-block w-auto" value='${auMaxAmt}' readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td colspan="3">결정가격</td>
											<td class="fw-bolder">
												<input type="text" name="applAmt" id="applAmt" class="form-control input-block w-auto" value="${applAmt}" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td rowspan="3" colspan="2">인테리어부</td>
											<td>보수평형</td>
											<td class="fw-normal">
												<input type="text" name="intRepSize" class="form-control input-block w-auto" id="intRepSize" value="${intRepSize}" />
												<span class="fs-10 text-danger fw-bolder">평</span>
											</td>
											<td class="fw-normal">
												<input type="text" name="intRepSizePy"  id="intRepSizePy" value="${intRepSizePy}" /> 
												<span class="fs-10 text-danger fw-bolder">m<sup>2</sup></span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td>보수단가</td>
											<td>
												<div class="d-flex justify-content-between">
													<div>
														<select class="form-select form-select-sm form-select-transparent py-0" name="interiorCosts" id="interiorCosts" aria-label="Select"  onchange="javascript:fn_interiorCosts();">
															<c:forEach var="interiorCosts" items="${selectInteriorCostsList}" varStatus="status">
								        						<option value="${interiorCosts.cdCode}" value2="${interiorCosts.rate}" value3="${interiorCosts.amt}" <c:if test="${interiorCosts.cdCode eq intRepDanCode }">selected</c:if>>${interiorCosts.cdDesc}</option>
								        					</c:forEach>
														</select>
														<input type="text" name="intRepDan" id="intRepDan" class="form-control input-block w-auto" value="${intRepDan}"></input>
													</div>
													<div>
														
													</div>
												</div>																				
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td>금액</td>
											<td class="fw-normal">
												<input type="text" name="intRepAmt" id="intRepAmt" class="form-control input-block w-auto" value="${intRepAmt}" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<td colspan="4">평가가격</td>
											<td colspan="2" class="fw-bolder">
												<input type="text" name="increaseAmt" id="increaseAmt" value="${increaseAmt}" class="form-control input-block w-auto" readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="separator my-10"></div>
							<h5 class="mt-1">
								<span class="svg-icon svg-icon-primary svg-icon-2hx">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
										<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
									</svg>
								</span>
								담보제공비율
							</h5>
							<div class="table-responsive table-loading">
							
								<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
									<thead class="bg-lighten">
										<tr class="fw-bolder fs-7 text-gray-800">
											<th rowspan="2">등기부상 전용면적</th>
											<th colspan="3">담보제공비율</th>
											<th rowspan="2">담보제공면적</th>
											<th rowspan="2">평가가격</th>
											<th rowspan="2">최종평가가격</th>
										</tr>
										<tr class="fw-bolder fs-7 text-gray-800">
											<th>분자</th>
											<th>분모</th>
											<th>비율</th>
										</tr>
									</thead>
									<tbody>
										<c:forEach var="BuildingList" items="${selectCollateralBuildingList}" varStatus="status">
											<tr class="">
												<td><input type="text" name="secRegiSizeTmp" id="secRegiSizeTmp" value="<fmt:formatNumber value="${BuildingList.secRegiSize }" pattern=".00" />" readonly="readonly" /></td>
												<td><input type="text" name="secNumeTmp" id="secNumeTmp" value="<fmt:formatNumber value="${BuildingList.secNume }" pattern=".00" />" readonly="readonly" /></td>
												<td><input type="text" name="secDenoTmp" id="secDenoTmp" value="<fmt:formatNumber value="${BuildingList.secDeno }" pattern=".00" />" readonly="readonly" /> </td>
												<td>
													<input type="text" name="secRateTmp" id="secRateTmp" value="<fmt:formatNumber value="${BuildingList.secRate }" pattern=".00" />" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">%</span>
												</td>
												<td>
													<input type="text" name="secOfferSizeTmp" id="secOfferSizeTmp" value="<fmt:formatNumber value="${BuildingList.secOfferSize }" pattern=".00" />" readonly="readonly" /> 
													<span class="fs-10 text-danger fw-bolder">평</span>
												</td>
												<td>
													<input type="text" name="buildIncreaseAmt" id="buildIncreaseAmt" value="${increaseAmt}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<td>
													<input type="text" name="buildlastIncreaseAmt" id="buildlastIncreaseAmt" value="${lastIncreaseAmt}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<!--<td>${BuildingList.secDesc}</td>  -->
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</div>
        				</div>
						<div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
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
					        </c:if>
							<div id="kt_content_container">
								<div class="row">
									<div class="col-lg-3 col-md-12 col-sm-12">
										<div class="table-responsive">
											<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
												<thead class="bg-lighten">
													<tr class="fw-bolder fs-7 text-gray-800 text-center">
														<th colspan="2">감정대상 부동산의 기준 낙찰가율</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>당해지역의 낙찰가율</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" name="pBidRate" id="pBidRate" value='${pBidRate}' />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">%</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>유사부동산 낙찰가율</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" name="kBidRate" id="kBidRate" value="${kBidRate}" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">%</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>기준 낙찰가율</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" name="bBidRate" id="bBidRate" value="${bBidRate}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">%</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>적용할 낙찰가율</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" name="applRate" id="applRate" value="${applRate}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">%</span>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class="col-lg-9 col-md-12 col-sm-12">
										<div class="table-responsive">
											<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
												<thead class="bg-lighten">
													<tr class="fw-bolder fs-7 text-gray-800">
														<th>단지전체규모</th>
														<th>전유부분의 면적</th>
														<th colspan="2">총 층수 중 전유부분의 위치</th>
														<th>건축물의 경과년도</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" value="${numHousehold}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">세대</span>
															</div>
														</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" value="${secRegiSize}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">m<sup>2</sup></span>
															</div>
														</td>
														<td colspan="2" class="py-1">
															<select name="jeonyuPartNm" id="jeonyuPartNm" class="form-select form-select-sm form-select-transparent py-0" aria-label="Select" disabled>
									        					<!-- 단지전체규모 -->
									        					<c:forEach var="jeonyuPartLocationList" items="${selectJeonyuPartLocationList}" varStatus="status">
									        						<option value="${jeonyuPartLocationList.cdCode}"  <c:if test="${jeonyuPartLocationList.cdCode eq aptFloorCode }">selected</c:if>>${jeonyuPartLocationList.cdDesc}</option>
									        					</c:forEach>
									        				</select> 
														</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" value="${elapYear}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">년 경과</span>
															</div>
														</td>
													</tr>
													<tr>
														<td class="py-2">
															<select name="apartmentComplexSizeList" id="apartmentComplexSizeList" class="form-select form-select-sm form-select-transparent py-1" aria-label="Select" onchange="javascript:changeApartmentComplexSizeList(this);">
									        					<!-- 단지전체규모 -->
									        					<c:forEach var="apartmentComplexSizeList" items="${selectApartmentComplexSizeList}" varStatus="status">
									        						<option value="${apartmentComplexSizeList.cdCode}" value2="${apartmentComplexSizeList.attr08}" <c:if test="${apartmentComplexSizeList.cdCode eq aptScale }">selected</c:if>>${apartmentComplexSizeList.cdDesc}</option>
									        					</c:forEach>
								        					</select> 
														</td>
														<td class="py-2">
															<select name="jonYuPartAreaAptList" id="jonYuPartAreaAptList" class="form-select form-select-sm form-select-transparent py-1" aria-label="Select" onchange="javascript:changeJonYuPartAreaAptList(this);">
									        					<!-- 전유부분의면적 -->
									        					<c:forEach var="jonYuPartAreaAptList" items="${selectJeonYuPartAreaAptList}" varStatus="status">
									        						<option value="${jonYuPartAreaAptList.cdCode}" value2="${jonYuPartAreaAptList.attr08}" <c:if test="${jonYuPartAreaAptList.cdCode eq aptExmSize }">selected</c:if>>${jonYuPartAreaAptList.cdDesc}</option>
									        					</c:forEach>
									        				</select> 
														</td>
														<td colspan="2" class="py-2">
															<select name="jeonyuPartLocation" id="jeonyuPartLocation" class="form-select form-select-sm form-select-transparent py-1" aria-label="Select" onchange="javascript:changeJeonyuPartLocationList(this);">
									        					<!-- 총 층수 전유부분의 위치 -->
									        					<c:forEach var="jeonyuPartLocation" items="${selectJeonyuPartLocationList}" varStatus="status">
									        						<option value="${jeonyuPartLocation.cdCode}" value2="${jeonyuPartLocation.attr08}" <c:if test="${jeonyuPartLocation.cdCode eq aptFloorCode }">selected</c:if>>${jeonyuPartLocation.cdDesc}</option>
									        					</c:forEach>
										        			</select> 
														</td>
														<td class="py-2">
															<select name="buildTransitYearAptList" id="buildTransitYearAptList" class="form-select form-select-sm form-select-transparent py-1" aria-label="Select" onchange="javascript:changeBuildTransitYearAptList(this);">
									        					<!-- 건축물의 경과년도 -->
									        					<c:forEach var="buildTransitYearAptList" items="${selectBuildTransitYearAptList}" varStatus="status">
									        						<option value="${buildTransitYearAptList.cdCode}" value2="${buildTransitYearAptList.attr08}"  <c:if test="${buildTransitYearAptList.cdCode eq aptElapCode }">selected</c:if>>${buildTransitYearAptList.cdDesc}</option>
									        					</c:forEach>
									        				</select> 
														</td>
													</tr>
													<tr>
														<td class="py-1">
															<input type="text" class="form-control form-control-sm form-control-transparent text-end" name="aptScaleRate" id="aptScaleRate" value="${aptScaleRate}" readonly="readonly" />
														</td>
														<td class="py-1">
															<input type="text" class="form-control form-control-sm form-control-transparent text-end" name="aptExmRate" id="aptExmRate" value="${aptExmRate}" readonly="readonly" />
														</td>
														<td class="py-1">
															<input type="text" class="form-control form-control-sm form-control-transparent text-end" name="aptFloorRate" id="aptFloorRate" value="${aptFloorRate}" readonly="readonly" />
														</td>
														<td class="py-1">
															<input type="text" class="form-control form-control-sm form-control-transparent text-end" name="aptElapRate" id="aptElapRate" value="${aptElapRate}" readonly="readonly" />
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div class="separator my-10"></div>
								<div class="row">
									<div class="col-lg-3 col-md-12 col-sm-12">
										<div class="table-responsive">
											<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
												<thead class="bg-lighten">
													<tr class="fw-bolder fs-7 text-gray-800 text-center">
														<th>점유자의 권리 형태</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td class="py-2">
															<select name="formOccpantAptList" id="formOccpantAptList" class="form-select form-select-sm form-select-transparent py-1" aria-label="Select" onchange="javascript:changeFormOccpantAptListList(this);">
									        					<!-- 단지전체규모 -->
									        					<c:forEach var="formOccpantAptList" items="${selectFormOccpantAptList}" varStatus="status">
									        						<option value="${formOccpantAptList.cdCode}" value2="${formOccpantAptList.attr08}" <c:if test="${formOccpantAptList.cdCode eq rightsCode }">selected</c:if>>${formOccpantAptList.cdDesc}</option>
									        					</c:forEach>
									        				</select> 
														</td>
													</tr>
													<tr>
														<td class="py-1">
															<input type="text" class="form-control form-control-sm form-control-transparent text-end" name="rightsRate" id="rightsRate" value="${rightsRate}" readonly="readonly" />
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class="col-lg-9 col-md-12 col-sm-12">
										<div class="table-responsive">
											<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
												<thead class="bg-lighten">
													<tr class="fw-bolder fs-7 text-gray-800">
														<th>평가가격</th>
														<th>1차예상최저입찰가(최종평가가격)</th>
														<th>예상낙찰가</th>
													</tr>
												</thead>
												<tbody>																				
													<tr>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" name="increaseAmt1" id="increaseAmt1" value="${increaseAmt}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">원</span>
															</div>
														</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" name="plMinBidAmt" id="plMinBidAmt" value="${plMinBidAmt}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">원</span>
															</div>
														</td>
														<td class="py-2">
															<div class="input-group input-group-sm">
																<input type="text" class="form-control form-control-transparent p-0 text-end" name="plBidAmt" id="plBidAmt" value="${plBidAmt}" readonly="readonly" />
																<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0">원</span>
															</div>
														</td>
													</tr>																				
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
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
							<div class="table-responsive">
								<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
									<thead class="bg-lighten">
										<tr class="fw-bolder fs-7 text-gray-800">
											<th>경매비용의 (한자)</th>
											<th>채권자 중 최고 채권액</th>
											<th class="fw-normal">
												<input type="text" class="form-control form-control-transparent p-0 text-end"  name="credMaxAmt" id="credMaxAmt" value="${credMaxAmt}" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</th>
											<th class="fw-normal">
												<select name="auctionCode" id="auctionCode" class="form-select form-select-sm form-select-transparent py-0" aria-label="Select" onchange="javascript:changeAuctionCostList(this);">
						        					<c:forEach var="auctionCostList" items="${selectAuctionCostList}" varStatus="status">
						        						<option value="${auctionCostList.cdCode}"  value2="${auctionCostList.attr02}" <c:if test="${auctionCostList.cdCode eq auctionCode }">selected</c:if>>${auctionCostList.cdDesc}</option>
						        					</c:forEach>
												</select>
											</th>
											<th class="fw-normal">
												<input type="text" name="auctionAmt" class="form-control form-control-transparent p-0 text-end" id="auctionAmt" value="${auctionAmt}" readonly="readonly" />
												<span class="fs-10 text-danger fw-bolder">원</span>
											</th>
										</tr>
									</thead>
								</table>
							</div>
							<div class="separator my-10"></div>
							<div class="d-flex justify-content-between">
								<div>
									<h5 class="mt-1">
										<span class="svg-icon svg-icon-primary svg-icon-2hx">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
												<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
											</svg>
										</span>
										주택임차보증금의 계산
									</h5>
								</div>
								<div class="mt-2">
									<a href="javascript:fn_add_houseRental();">
										<i class="fas fa-plus-circle"></i>
									</a>
									<a href="#">
										<i class="fas fa-minus-circle"></i>
									</a>
								</div>
							</div>
							<div id="kt_content_container">
								<div class="table-responsive table-loading">
									<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
										<thead class="bg-lighten">
											<tr class="fw-bolder fs-7 text-gray-800">
												<th colspan="8">0. 假임대 보증금의 최고한도액 산출을 위한 담보부동산 전부의 예상낙찰가</th>
												<th class="fw-normal">
													<input type="text" name="hPlBidAmt" id="hPlBidAmt" value="${hPlBidAmt}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</th>
											</tr>
											<tr class="fw-bolder fs-7 text-gray-800">
												<th colspan="8">1. 假임대 보증금의 최고한도액 : 담보 부동산 경락가액 (예상낙찰가-경매비용)의 1/2까지</th>
												<th class="fw-normal">
													<input type="text" name="hPossAmt" id="hPossAmt" value="${hPossAmt}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</th>
											</tr>
											<tr class="fw-bolder fs-7 text-gray-800">
												<th colspan="9">2-1. 가임대보증금 적용 범위</th>
											</tr>
											<tr class="fw-bolder fs-7 text-gray-800">
												<th colspan="9" class="fw-normal">
													<select id="hPossAArea" name="hPossAArea" class="form-select form-select-sm form-select-transparent py-0" aria-label="Select" disabled>
														<c:forEach var="regDepsitAppAreaList" items="${selectRegDepsitAppAreaList}" varStatus="status">
														   <option value="${regDepsitAppAreaList.cdCode}" value2="${regDepsitAppAreaList.attr02}" value3="${regDepsitAppAreaList.attr03}" <c:if test="${regDepsitAppAreaList.cdCode eq hPossAArea }">selected</c:if>>${regDepsitAppAreaList.cdDesc}</option>
														</c:forEach>
													</select>
												</th>
											</tr>
											<tr class="fw-bolder fs-7 text-gray-800">
												<th colspan="8">2-2. 적용할 주택가임대보증금액 (최우선변제 소액임대차보증금) 한도액</th>
												<th class="fw-normal">
													<input type="text"  name="hPossAAmt" id="hPossAAmt" value='${hPossAAmt}' readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</th>
											</tr>
											<tr class="fw-bolder fs-7 text-gray-800">
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="각구의 일련번호">일련번호</th>
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="1동의 건물 내에서의 주거용 부분인 각구의 위치">위치</th>
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="1구의 건물내에 있는 주거용방의 층수">주거용 방 층수</th>
												<th >확정일자 보유여부</th>
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="가임대보증금을 적용한 방의 층수">보증금 적용 층수</th>
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="1구의 건물의 실제 임대차보증금">실 임대차 보증금</th>
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="최종 적용 가임대 보증금 (최우선변제 소액보증금)">가임대 보증금</th>
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="확정일자부 주택임대차 보증금">주택임대차 보증금</th>
												<th data-bs-toggle="tooltip" data-bs-placement="top" title="확정일자 없는 주택임대차 보증금">주택임대차 보증금</th>
											</tr>
										</thead>
										<tbody>
											<c:if test="${!empty selectculationHousingRentalDepositList}">
												<c:forEach var="culationHousingRentalDepositList" items="${selectculationHousingRentalDepositList}" varStatus="houseRental">
													<tr name="houseRental" id="houseRental">
														<td>
															<select name="numberGu" id="numberGu" class="form-select form-select-sm form-select-transparent py-0">
																<c:forEach var="serialNumberGuList" items="${selectSerialNumberGuList}" varStatus="status">
																	<option value="${serialNumberGuList.cdCode}" <c:if test="${serialNumberGuList.cdCode eq culationHousingRentalDepositList.rno }">selected</c:if>>${serialNumberGuList.cdDesc}</option>
																</c:forEach>
															</select>
														</td>
														<td>
															<input type="text" name="resiName" id="resiName"  value="${culationHousingRentalDepositList.resiName}" />
														</td>
														<td>
															<input type="text" name="resiRmCnt" id="resiRmCnt"  value="${culationHousingRentalDepositList.resiRmCnt}" />
														</td>
														<td>
															<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
																<input class="form-check-input" type="checkbox" name="fxdateYnChk" id="fxdateYnChk" onclick="fn_fxdateYnChk()" <c:if test="${culationHousingRentalDepositList.fxdateYn eq 'Y' }">checked</c:if> />
																<input type="hidden" name="fxdateYn" id="fxdateYn"  value="${culationHousingRentalDepositList.fxdateYn}" />
															</div>
														</td>
														<td>
															<input type="text" name="possARmCnt" id="possARmCnt"   onkeypress="fn_add_houseRental2()" value="${culationHousingRentalDepositList.possARmCnt}" />
														</td>
														<td>
															<input type="text" name="hleaseAmt" id="hleaseAmt"  value="${culationHousingRentalDepositList.leaseAmt}" />
														</td>
														<td>
															<input type="text" name="repBeSecAmt" id="repBeSecAmt" value='${culationHousingRentalDepositList.repBeSecAmt}' />
														</td>
														<td>
															<input type="text" name="fxleaAmt" id="fxleaAmt"  value="${culationHousingRentalDepositList.fxleaAmt}" />
														</td>
														<td>
															<input type="text" name="fxleaNoAmt" id="fxleaNoAmt" value="${culationHousingRentalDepositList.fxleaNoAmt}" />
														</td>
<%-- 														<c:if test="${houseRental.count ne '1' }">
														<input type="button" name="delHouseRental" value="del"/>
														</c:if> --%>
													</tr>
												</c:forEach>
											</c:if>
											 <c:if test="${empty selectculationHousingRentalDepositList}">
												<tr name="houseRental" id="houseRental">
													<td>
														<select name="numberGu" id="numberGu" class="form-select form-select-sm form-select-transparent py-0">
															<c:forEach var="serialNumberGuList" items="${selectSerialNumberGuList}" varStatus="status">
																<option value="${serialNumberGuList.cdCode}">${serialNumberGuList.cdDesc}</option>
															</c:forEach>
														</select>
													</td>
													<td>
														<input type="text" name="resiName" id="resiName"  value="" />
													</td>
													<td>
														<input type="text" name="resiRmCnt" id="resiRmCnt"  value="" />
													</td>
													<td>
														<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
															<input class="form-check-input" type="checkbox" name="fxdateYnChk" id="fxdateYnChk" onclick="fn_fxdateYnChk()" />
															<input type="hidden" name="fxdateYn" id="fxdateYn"  value="N" />
														</div>
													</td>
													<td>
														<input type="text" name="possARmCnt" id="possARmCnt"   onkeypress="fn_add_houseRental2()" value="" />
													</td>
													<td>
														<input type="text" name="hleaseAmt" id="hleaseAmt"  value="" />
													</td>
													<td>
														<input type="text" name="repBeSecAmt" id="repBeSecAmt" value='' />
													</td>
													<td>
														<input type="text" name="fxleaAmt" id="fxleaAmt"  value="" />
													</td>
													<td>
														<input type="text" name="fxleaNoAmt" id="fxleaNoAmt" value="" />
													</td>
	<%-- 												<c:if test="${houseRental.count ne '1' }">
													<input type="button" name="delHouseRental" value="del"/>
													</c:if> --%>
												</tr>
											 </c:if>
										</tbody>
									</table>
								</div>
							</div>
							<div class="separator my-10"></div>
							<div class="d-flex justify-content-between">
								<div>
									<h5 class="mt-1">
										<span class="svg-icon svg-icon-primary svg-icon-2hx">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
												<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
											</svg>
										</span>
										배당금의 계산
									</h5>
								</div>
								<div class="mt-2">
									<a href="javascript:fn_add_DividendCalcul();">
										<i class="fas fa-plus-circle"></i>
									</a>
									<a href="#">
										<i class="fas fa-minus-circle"></i>
									</a>
								</div>
							</div>
							<div id="kt_content_container">
								<div class="table-responsive table-loading">
									<table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
										<thead class="bg-lighten">
											<tr class="fw-bolder fs-7 text-gray-800">
												<th rowspan="2">순위</th>
												<th rowspan="2">권리발생일자</th>
												<th rowspan="2">당사설정</th>
												<th rowspan="2">권리자</th>
												<th rowspan="2">권리의내용</th>
												<th colspan="3">채권최고액</th>
											</tr>
											<tr class="fw-bolder fs-7 text-gray-800">
												<th>말소여부</th>
												<th>단독담보</th>
												<th>공동담보</th>
											</tr>
										</thead>
										<tbody>
											<!-- 선택된 row가 있다면 table-active로 제어 -->
											<c:forEach var="dividendTableCalculationList" items="${selectDividendTableCalculationList}" varStatus="calcul">
											<tr class="">
												<td>
													<select name="dispRank" id="dispRank" class="form-select form-select-sm form-select-transparent py-0" >
														<c:forEach var="rankingCodeList" items="${selectRankingCodeList}" varStatus="status">
															<option value="${rankingCodeList.cdCode}" <c:if test="${rankingCodeList.cdCode eq dividendTableCalculationList.dispRank }">selected</c:if>>${rankingCodeList.cdDesc}</option>
														</c:forEach>
													</select>
												</td>
												<td>
													<input type="text" name="rightDate" id='rightDate${calcul.count}' value="${dividendTableCalculationList.rightDate} " />
												</td>
												<td>
													<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
														<input class="form-check-input" type="checkbox" name="hiteYnTp" id="hiteYnTp" onclick="fn_hiteYnCheck()"  <c:if test="${dividendTableCalculationList.hiteYn eq 'Y'}">checked </c:if> />
														<input type="hidden" name="hiteYn" id="hiteYn${calcul.count}" <c:if test="${dividendTableCalculationList.hiteYn eq 'Y'}"> value='${dividendTableCalculationList.hiteYn}'</c:if><c:if test="${dividendTableCalculationList.hiteYn ne 'Y'}"> value='N'</c:if>></input>
													</div>
												</td>
												<td>
													<input type="text" name="rightPerson" id='rightPerson${calcul.count}' value="${dividendTableCalculationList.rightPerson}" />
												</td>
												<td>
													<select name="rightCode" id="rightCode${calcul.count}" class="form-select form-select-sm form-select-transparent py-0" >
														<c:forEach var="contentRightList" items="${selectContentRightList}" varStatus="status">
															<option value='${contentRightList.cdCode}' value2='${contentRightList.rightCode}' <c:if test="${contentRightList.cdCode eq dividendTableCalculationList.rightCode }">selected</c:if>>${contentRightList.cdDesc}</option>
														</c:forEach>
													</select>
												</td>
												<td>
													<div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
														<input class="form-check-input" type="checkbox" name="eraYnTp" id="eraYnTp" onclick="fn_eraYnCheck()"  <c:if test="${dividendTableCalculationList.eraYn eq 'Y' }">checked</c:if> />
														<input type="hidden" name="eraYn" id="eraYn${calcul.count}" <c:if test="${dividendTableCalculationList.eraYn eq 'Y'}"> value='${dividendTableCalculationList.eraYn}'</c:if><c:if test="${dividendTableCalculationList.eraYn ne 'Y'}"> value='N'</c:if>></input>
													</div>
												</td>
												<td>
													<input type="text" name="credSelfAmtOrg" id="credSelfAmtOrg" value="${dividendTableCalculationList.credSelfAmtOrg}" />
												</td>
												<td>
													<input type="text" name="credCombAmtOrg" id="credCombAmtOrg${calcul.count}" value="${dividendTableCalculationList.credCombAmtOrg}" />
													<input type="hidden" name='proRateCode' id='proRateCode${calcul.count}' value="${dividendTableCalculationList.proRateCode}"></input>
													   <!-- <input type="button" name="delDividendCalcul" value="del"/> -->
												</td>
											</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						
						<div class="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
							<div class="d-flex justify-content-between">
								<div>
									<h5 class="mt-1">
										<span class="svg-icon svg-icon-primary svg-icon-2hx">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
												<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
											</svg>
										</span>
										사진 및 도면
									</h5>
								</div>
								<div class="mt-2">
									<div class="d-flex justify-content-between">
										<div class="mx-5">
											<span class="fs-9 text-danger">저장 또는 실행은 파일명을 <strong>[더블클릭]</strong> 하세요.</span>
										</div>
										<div>
											<a href="#">
												<i class="fas fa-plus-circle"></i>
											</a>
											<a href="#">
												<i class="fas fa-minus-circle"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div id="kt_content_container">
								<div class="table-responsive table-loading">
									<table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
										<thead class="bg-lighten">
											<tr class="fw-bolder fs-7 text-gray-800">
												<th>구분</th>
												<th>내용</th>
												<th>파일명</th>
												<th>찾기</th>
												<th>비고</th>
											</tr>
										</thead>
										<!--<tbody>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
										</tbody>-->
									</table>
									<div class="text-center">일치하는 자료가 없습니다</div>
								</div>
							</div>
							<div class="separator my-10"></div>
							<div class="d-flex justify-content-between">
								<div>
									<h5 class="mt-1">
										<span class="svg-icon svg-icon-primary svg-icon-2hx">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
												<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
											</svg>
										</span>
										관련문서
									</h5>
								</div>
								<div class="mt-2">
									<div class="d-flex justify-content-between">
										<div class="mx-5">
											<span class="fs-9 text-danger">저장 또는 실행은 파일명을 <strong>[더블클릭]</strong> 하세요.</span>
										</div>
										<div>
											<a href="#">
												<i class="fas fa-plus-circle"></i>
											</a>
											<a href="#">
												<i class="fas fa-minus-circle"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div id="kt_content_container">
								<div class="table-responsive">
									<div class="table-loading-message">
										불러오는 중...
									</div>
									
									<table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
										<thead class="bg-lighten">
											<tr class="fw-bolder fs-7 text-gray-800">
												<th>내용</th>
												<th>파일명</th>
												<th>찾기</th>
												<th>비고</th>
											</tr>
										</thead>
										<tbody>
<!-- 											<tr>
												<td>공부자료 등</td>
												<td>
													<a href="#">
														동서울지점_(유)을지식품(자체)_집합(아파트)_20220701.pdf
													</a>
												</td>
												<td>
													<a href="#">
														<span class="svg-icon svg-icon-primary svg-icon-2">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor"/>
																<rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor"/>
																<rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor"/>
																<rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor"/>
																<path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"/>
															</svg>
														</span>
													</a>
												</td>
												<td></td>
											</tr> -->
										</tbody>
									</table>
									<div class="text-center">일치하는 자료가 없습니다</div>
								</div>
							</div>
						</div>
        			</div>
						<div class="tab-pane fade" id="kt_tab_pane_7" role="tabpanel">
							<div class="d-flex justify-content-between">
								<div>
									<h5 class="mt-1">
										<span class="svg-icon svg-icon-primary svg-icon-2hx">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
												<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
											</svg>
										</span>
										지점감정 및 본사 검증감정 결과
									</h5>
								</div>
								<div class="mt-2">
									<span class="fs-9 text-danger">현재 작업 중인 내용은 반영되지 않습니다.</span>
								</div>
							</div>
							<div id="kt_content_container">
								<div class="table-responsive table-loading">
									<table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
										<thead class="bg-lighten">
											<tr class="fw-bolder fs-7 text-gray-800">
												<th colspan="2">구분</th>
												<th>지점감정에 관한 사항</th>
												<th>본사 검증감정에 관한 사항</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="2" class="fw-bolder">시가 (비준가격)</td>
												<td>최저가</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${minAmtJB}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="<fmt:formatNumber value="${minAmt}" pattern="#,###"></fmt:formatNumber>" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
											</tr>
											<tr>
												<td>최고가</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${maxAmtJB}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="<fmt:formatNumber value="${maxAmt}" pattern="#,###"></fmt:formatNumber>" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
											</tr>
											<tr>
												<td colspan="2" class="fw-bolder">예상 제1차 입찰가(평가가격)</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${increaseAmtJB}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="<fmt:formatNumber value="${increaseAmt}" pattern="#,###"></fmt:formatNumber>" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
											</tr>
											<tr>
												<td colspan="2" class="fw-bolder">예상 낙찰가율</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${applRateJB}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">%</span>
												</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${applRateH}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">%</span>
												</td>
											</tr>
											<tr>
												<td colspan="2" class="fw-bolder">예상 낙찰가</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${plBidAmtJB}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="<fmt:formatNumber value="${plBidAmt}" pattern="#,###"></fmt:formatNumber>" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
											</tr>
											<tr>
												<td colspan="2" class="fw-bolder">당사 설정액</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${ourSetJBAmont}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="<fmt:formatNumber value="${ourSetAmont}" pattern="#,###"></fmt:formatNumber>" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
											</tr>
											<tr>
												<td colspan="2" class="fw-bolder">초과 또는 부족 설정액</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${cgbjAmtKoJB}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
												<td>
													<input type="text" class="form-control form-control-transparent p-0 text-end" value="${cgbjAmtKo}" readonly="readonly" />
													<span class="fs-10 text-danger fw-bolder">원</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="separator my-10"></div>
							<h5 class="mt-6">
								<span class="svg-icon svg-icon-primary svg-icon-2hx">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
										<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
									</svg>
								</span>
								감정평가
							</h5>
							<div id="kt_content_container">
								<div class="form-floating">
									<form:select class="form-select" path="searchSecCode" aria-label="">
										<c:forEach var="evaluationClassificationList" items="${selectEvaluationClassificationList}" varStatus="status">
											<option value="${evaluationClassificationList.cdCode}" <c:if test="${evaluationClassificationList.cdCode eq appraiseGu }">selected</c:if> readonly>${evaluationClassificationList.cdDesc}</option>
										</c:forEach>
									</form:select>
									<label for="floatingInput1">평가구분</label>
								</div>
							</div>
							<div class="separator my-10"></div>
							<div class="d-flex justify-content-between">
								<div>
									<h5 class="mt-1">
										<span class="svg-icon svg-icon-primary svg-icon-2hx">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
												<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
											</svg>
										</span>
										감정의견
									</h5>
								</div>
								<div class="mb-2">
									<a href="#" onclick="fn_Press_Opinion('1');" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">의견보기</a>
								</div>
							</div>
							<div class="card bg-gray-100">
								<div class="card-body">
									<div id="kt_docs_jstree_customicons">
										<ul>
											<li>
												감정의견
												<ul>
													<li data-jstree='{ "selected" : true, "opened" : true }'>
														<a href="javascript:;">
															본사 검증감정 의견</a>
														<ul>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	① 시가에 관한 의견
																</a>
															</li>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	② 토지, 건물가액 산출에 관한 의견
																</a>
															</li>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	③ 낙찰가율 보정표 및 낙찰가 선정에 관한 의견
																</a>
															</li>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	④ 배당표에 관한 의견
																</a>
															</li>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	⑤ 기타
																</a>
															</li>
														</ul>
													</li>
													<li data-jstree='{ "opened" : flase }'>
														담보취득 및 담보물에 관한 사항, 설정시 조건 및 재감정 필요시점, 공부상의 차이 등
														<ul>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	링크 1
																</a>
															</li>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	링크 2
																</a>
															</li>
														</ul>
													</li>
													<li data-jstree='{ "opened" : true }'>
														감정에 관한 세부사항
														<ul>
															<li data-jstree='{ "type" : "file" }'>
																<a href="#" target="_blank">
																	재감정시 주요 변동사항 또는 변동원인
																</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
        		</div>
        	</div>
        </div>
    </form:form>
</body>
</html>
