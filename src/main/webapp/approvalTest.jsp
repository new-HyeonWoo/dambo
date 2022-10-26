<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HJRVS</title>
</head>
<script src="/editor/jquery.min.js"></script>
<script type="text/javascript">


function sendData(){
			
	var queryString = $("sdfasfasfasdfasd").serialize();

    $.ajax({
    	url:'/ㄹㅇㅁㄴㄻㄴㄹ/ㄴㅁㅇㄻㅇㄴㄻㄴㄹㄴㅁㅇㄻㄴㅇㄹ.do', // 요청 할 주소
    	async:true,// false 일 경우 동기 요청으로 변경
    	type:'POST', // GET, PUT
//    contentType : 'application/json; charset=UTF-8',
//    dataType : 'json',
    	data: queryString,// 전송할 데이터
//    dataType:'text',// xml, json, script, html
    	beforeSend:function(jqXHR) {
    		console.log('ㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ');
    	},// 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
    	success:function(jqXHR) {
    		var obj = JSON.parse(jqXHR);
//     		alert("파일 시퀀스=" + obj.data);
    		$( "textarea[name=txtResult]" ).val(obj.sendResult);
    	},// 요청 완료 시
    	error:function(jqXHR) {
    		console.log('ㅇㄴㅁㄹㅇㅁㄴㄻㅇㄴㄻㄴㄹ' + jqXHR);
    	},// 요청 실패.
    	complete:function(jqXHR) {
    		console.log('ㄹㄴㅁㅇㄻㄴㅇㄹ');
    	}// 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}

</script>
<body>
<h1 style="text-align:center">fdsfasdfasdfasddfsafasdfsadf</h1>

<p>&nbsp;</p>

<form action="/approval/sendApproval.do" enctype="application/x-www-form-urlencoded" id="requestForm" method="post" name="requestForm" target="_self">
<input type="text" name="apprslYear" value="2022"><br>
<input type="text" name="apprslSn" value="993500"><br>
<input type="text" name="hqBhfSeCd" value="1"><br>
<input type="text" name="sanctnSn" value="4"><br>
<table align="center" border="1" cellpadding="1" cellspacing="1" id="requestTbl" style="width:500px" summary="요청변수">
	<caption>
	<p><span style="font-size:20px"><strong>서버유형</strong></span></p>

	<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
		<tbody>
			<tr>
				<td>서버</td>
				<td><select name="svrType" required="required"><option value="prd">운영</option><option value="dev">개발</option></select></td>
			</tr>
		</tbody>
	</table>

	<p><strong><span style="font-size:20px">요청변수</span></strong></p>
	</caption>
	<tbody>
		<tr>
			<td colspan="2" style="text-align:center"><strong>헤더</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">트렌젝션 아이디</td>
			<td style="text-align:center"><input name="txID" id="txID" required="required" type="text" value="test0001" /></td>
		</tr>
		<tr>
			<td style="text-align:center">인터페이스 아이디</td>
			<td style="text-align:center"><input name="reqID" id="reqID" required="required" type="text" value="req0001" /></td>
		</tr>
		<tr>
			<td style="text-align:center">요청시스템아이디</td>
			<td style="text-align:center"><input name="userID" id="userID" required="required" type="text" value="PROMO" /></td>
		</tr>
		<tr>
			<td style="text-align:center">수신시스템 아이디</td>
			<td style="text-align:center"><input name="systemID" id="systemID" required="required" type="text" value="HJ04-GW" /></td>
		</tr>
		<tr>
			<td style="text-align:center">결재서식코드</td>
			<td style="text-align:center"><input name="formKey" id="formKey" required="required" type="text" value="PROMO$App" /></td>
		</tr>
		<tr>
			<td style="text-align:center">요청일시</td>
			<td style="text-align:center"><input name="reqDt" id="reqDt" required="required" type="text" value="20180619103000" /></td>
		</tr>
		<tr>
			<td colspan="2" style="text-align:center"><strong>파라메터</strong></td>
		</tr>
		<tr>
			<td style="text-align:center">결재문서 제목</td>
			<td style="text-align:center"><input name="subject" id="subject" required="required" type="text" value="테스트 문서" /></td>
		</tr>
		<tr>
			<td style="text-align:center">기안자사번</td>
			<td style="text-align:center"><input name="reqEmpNo" id="reqEmpNo" required="required" type="text" value="108231" /></td>
		</tr>
		<tr>
			<td style="text-align:center">기안자부서코드</td>
			<td style="text-align:center"><input name="reqDeptCode" id="reqDeptCode" required="required" type="text" value="2079736" /></td>
		</tr>
		<tr>
			<td style="text-align:center">담당자사번</td>
			<td style="text-align:center"><input name="chgEmpNo" id="chgEmpNo" required="required" type="text" value="108231" /></td>
		</tr>
		<tr>
			<td style="text-align:center">담당부서코드</td>
			<td style="text-align:center"><input name="chgDeptCode" id="chgDeptCode" required="required" type="text" value="2079736" /></td>
		</tr>
		<tr>
			<td style="text-align:center">수신부서코드</td>
			<td style="text-align:center"><input name="receiveDeptCode" id="receiveDeptCode" required="required" type="text" value="2079736" /></td>
		</tr>
	</tbody>
</table>

<p style="text-align:center"><strong><span style="font-size:20px">결재본문 HTML</span></strong></p>

<p style="text-align:center"><strong><span style="font-size:20px"><textarea cols="100" name="htmlContents" rows="10">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
 &lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;Author&quot; content=&quot;&quot;&gt;
  &lt;meta name=&quot;Keywords&quot; content=&quot;&quot;&gt;
  &lt;meta name=&quot;Description&quot; content=&quot;&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
 &lt;/head&gt;
 &lt;body&gt;
  테스트 입니다.
 &lt;/body&gt;
&lt;/html&gt;</textarea></span></strong></p>

<p style="text-align:right"><span style="background-color:#2980b9"><input name="btnSendApproval" type="button" value="결재상신"  onclick="sendData()" /></span></p>

<p style="text-align:center"><span style="font-size:20px"><strong>응답결과</strong></span></p>

<p style="text-align:center"><textarea cols="100" name="txtResult" rows="10"></textarea></p>

<p style="text-align:center">&nbsp;</p>
</form>

<p>&nbsp;</p>

<p>&nbsp;</p>
</body>
</html>