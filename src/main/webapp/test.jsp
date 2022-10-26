<%@ page import="java.nio.charset.StandardCharsets" %>
<%@ page import="java.nio.charset.Charset" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%--<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>--%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>HJRVS</title>
</head>
<body>
<%
    String str = request.getParameter("test");

//    String str = "기분 좋은 날씨인데, 집에만 틀어박혀있어야 한다니.. 뷁";

    byte defaultBytes[] = str.getBytes();
    byte eucBytes[] = str.getBytes("euc-kr");
    byte ksc5601Bytes[] = str.getBytes("ksc5601");
    byte ms949Bytes[] = str.getBytes("ms949");
    byte unicodeBytes[] = str.getBytes("unicode");
    byte utf8Bytes[] = str.getBytes("utf-8");
    byte utf16Bytes[] = str.getBytes("utf-16");

    out.println("기본 인코딩 : "+ new String(defaultBytes));
    out.println("EUC-KR 인코딩 : "+ new String(eucBytes,"euc-kr"));
    out.println("KSC5601 인코딩 : "+ new String(ksc5601Bytes,"ksc5601"));
    out.println("MS949 인코딩 : "+ new String(ms949Bytes,"ms949"));
    out.println("Unicode 인코딩 : "+ new String(unicodeBytes,"unicode"));
    out.println("UTF-8 인코딩 : "+ new String(utf8Bytes,"utf-8"));
    out.println("UTF-16 인코딩 : "+ new String(utf16Bytes,"utf-16"));

    String url = "http://es.hite.com:8080/jsp/es01/es01_w02.jsp?sec_code=101&liquor_type=10&proc_div=11&auth=I&sec_yn=N&bid_use=N&uDept=1" +
            "&uDeptCd=2079736" +
            "&uName=한글_테스트&uEmpNo=108231&uJikWi=1&uJikName=2";
    out.println("<br/><a href=" + String.format(url, new String(defaultBytes)) + ">test</a>");
    out.println("<br/><a href=" + String.format(url, new String(eucBytes,"euc-kr")) + ">test</a>");
    out.println("<br/><a href=" + String.format(url, new String(ksc5601Bytes,"ksc5601")) + ">test</a>");
    out.println("<br/><a href=" + String.format(url, new String(ms949Bytes,"ms949")) + ">test</a>");
    out.println("<br/><a href=" + String.format(url, new String(unicodeBytes,"unicode"))+ ">test</a>");
    out.println("<br/><a href=" + String.format(url, new String(utf8Bytes,"utf-8")) + ">test</a>");
    out.println("<br/><a href=" + String.format(url, new String(utf16Bytes,"utf-16")) + ">test</a>");
//    response.sendRedirect("http://es.hite.com:8080/jsp/es01/es01_w02.jsp?sec_code=101&liquor_type=10&proc_div=11&auth=I&sec_yn=N&bid_use=N&uDept=1" +
//            "&uDeptCd=2079736" +
//            "&uName=" + decodedHelloString + "&uEmpNo=108231&uJikWi=%EF%BF%BD%EF%BF%BD%EF%BF%BD&uJikName=%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD");

%>
</body>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
    test = new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        }
    });
</script>
<form name="comment_form" action="<%=url%>" method="get">
    <button type="submit">Test</button>
</form>
</html>