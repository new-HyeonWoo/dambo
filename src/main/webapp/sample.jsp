<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/type/component.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>샘플</title>

    <script id="dbGrid_Template" type="text/html">
        <table>
            <thead>
            <tr>
                <th>담보감정일자</th>
                <th>담보종류</th>
                <th>담보종류명</th>
                <th>담보종류명 포맷팅</th>
            </tr>
            </thead>
            <tbody>
            {{#list}}
                {{>dbGrid_Template_ROW}}
            {{/list}}
            </tbody>
        </table>
    </script>

    <script id="dbGrid_Template_ROW" type="text/html">
        <tr>
            <td><{{#input}} {value:{{code}}}  {{/input}}</td>
            <td><div id="도로명_입력"></div></td>
            <td><div id="도로명_버튼"></div></td>
        </tr>
    </script>

    <script id="dbGrid_Template_seletBox" type="text/html">
        <select name="combo">
            {{#data}}
            <option value="{{CD_CODE}}">{{CD_DESC}}</option>
            {{/data}}
        </select>
    </script>

    <script id="contents2_Template" type="text/html">
        <h1>담보</h1>
        <table>
            <thead>
            <tr>
                <th>담보감정일자</th>
                <th>담보종류</th>
                <th>담보종류명</th>
                <th>담보종류명 포맷팅</th>
            </tr>
            </thead>
            <tbody>
            {{#list}}
            <tr>
                <td>{{담보감정일자}}</td>
                <td>{{담보종류}}</td>
                <td>{{담보종류명}}</td>
                <td>{{#format}}{{/format}}</td>
            </tr>
            {{/list}}
            {{^list}}
            <tr>
                <td colspan="3">조회된 데이터가 없습니다.</td>
            </tr>
            {{/list}}
            </tbody>
        </table>
        <span>{{#format}}{{/format}}</span>
    </script>

    <script type="text/javascript">

        $(document).ready(function(){
            componentsMap.set('page', PageType.집합건물);
            componentsMap.set('es', EsType.ES81);
            var PRT_00_담보마스타 = new JsonZoonData('PRT_00_담보마스타', {});

            RunQuery('PRT_00_담보마스타', {
                'YYYY' : '2022',
                'SEQ': '996000'
            }, 'GET', false);

            console.log(PRT_00_담보마스타.getData());

            $('#container').html(
                Mustache.render($('#contents2_Template').html(), {'list': PRT_00_담보마스타.getData()})
            );
        });
    </script>


    $('#template_body').html(
        $('#template_body').html() + mustach.render())
    <script type="text/html" id="template">
    <table>
        <thead></thead>
        <tbody id="template_body">
            {{#list}}
                {{row}}
            {{/list}}
        </tbody>
    </table>
    </script>

    <script type="text/html" id="row">
        <tr>
            <td>
                <select>
                    {{#loop}}
                    {{/loop}}
                </select>
            </td>
        </tr>
    </script>
</head>

<body style="text-align:center; margin:0 auto; display:inline; padding-top:100px;">
    <div id = "container">
    </div>
</body>
</html>
