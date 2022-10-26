<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
<%@ include file="/WEB-INF/jsp/template/es01_w02_4.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <script type="text/javascript">
        componentsMap.set('page', PageType.집합_오피스텔);
        componentsMap.set('es', EsType.ES01);

        $(document).ready(function(){
            pageZoon.OnInitialize();

            pageEvent.OnBefore();
            pageEvent.OnInitialize();
        });
    </script>

</head>
<body>
    <div id="Combo_도로주소_시군구"></div>
    <br>
    <div id="DBGrid_가격사례"></div>
    <br>
    <div id="Combo_보고서_평가구분"></div>
    <br>
    <input type="checkbox" id="응찰_수지_응찰여부"/>
    <br>
    <input type="button" id="Command_가격사례_삭제" value="Command_가격사례_삭제"/>
    <br>
    <input type="text" value="10000" id="Edit_KEY_년도" readonly="readonly">
    <br>
</body>
</html>
