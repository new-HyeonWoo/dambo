<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <style>
        .hide { display:none; }
    </style>

    <meta charset="UTF-8">
    <script defer src="../../../resources/js/custom/grid/template.js"></script>
</head>
<body>
    <script id="DBGrid1_템플릿" type="text/x-handlebars-template">
        <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
            <thead class="bg-secondary align-middle fw-bolder text-nowrap">
                <tr class="fs-7 text-gray-800 text-center">
                    <th class="min-w-100px" rowspan="2">기간</th>
                    <th class="min-w-100px" rowspan="2">지점</th>
                    <th class="min-w-100px" rowspan="2">담보<br>종류</th>
                    <th class="min-w-100px" rowspan="2">업소<br>구분</th>
                    <th class="min-w-1000px" colspan="5">합계</th>
                    <th class="min-w-1000px" colspan="5">평균</th>
                </tr>	
                <tr class="fs-7 text-gray-800 text-center">
                    <th>평가가격</th>
                    <th>최종평가가격</th>
                    <th>예상낙찰가</th>
                    <th>산순위채권액</th>
                    <th>건수</th>
                    <th>평가가격</th>
                    <th>최종평가가격</th>
                    <th>낙찰가율</th>
                    <th>예상낙찰가</th>
                    <th>선순위채권액</th>
                </tr>
            </thead> 
            <tbody>
                {{#each .}}
                    {{>DBGrid1_템플릿_ROW index=@index}}
                {{/each}}
            </tbody>     
            <tfoot class="bg-secondary" style="display: none;">
                <tr class="fs-7 text-gray-800 text-center align-middle">
                    <th>
                        <input class="form-control form-control-transparent fs-7 text-center py-0 ps-0 min-w-100" value="합계" disabled="disabled">
                    </th>
                    <th colspan="3"></th>
                    <th>
                        <input id="Edit_합계_평가가격" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_최종평가가격" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_예상낙찰가" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_선순위채권액" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_건수" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_평균_평가가격" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_평균_최종평가가격" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_평균_낙찰가율" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_평균_예상낙찰가" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_평균_선순위채권액" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                </tr>
            </tfoot>               
        </table>
    </script>
    
    <script id="DBGrid1_템플릿_ROW" type="text/x-handlebars-template">
        <tr>
            <td class="text-center min-w-100 fs-7">{{ notField name="감정일자" value=감정일자 index=index options='{"textType": "text-center"}' }}</td>
            <td class="text-center min-w-100 fs-7">{{ notField name="지점명" value=지점명 index=index options='{"textType": "text-start"}' }}</td>
            <td class="text-center min-w-100 fs-7">{{ notField name="담보종류명" value=담보종류명 index=index options='{"textType": "text-start"}' }}</td>
            <td class="text-center min-w-100 fs-7">{{ notField name="업소구분명" value=업소구분명 index=index options='{"textType": "text-center"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="평가가격" value=평가가격 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="최종평가가격" value=최종평가가격 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="예상낙찰가" value=예상낙찰가 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="선순위채권액" value=선순위채권액 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="건수" value=건수 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="평균_평가가격" value=평균_평가가격 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="평균_최종평가가격" value=평균_최종평가가격 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="평균_낙찰가율" value=평균_낙찰가율 index=index  options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="평균_예상낙찰가" value=평균_예상낙찰가 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="평균_선순위채권액" value=평균_선순위채권액 index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        </tr>
    </script>


    <!-- 팝업 grid -->
    <script id="DBGrid_거래처_템플릿" type="text/x-handlebars-template">
        <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
            <thead class="align-top bg-lighten text-center text-nowrap">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">GEO_CODE</th>
                <th>상호(약호)</th>
                <th>사업자번호</th>
                <th>대표자명</th>
                <th>업태</th>
                <th>종목</th>
            </tr>
            <tbody>
            {{#each .}}
                {{>DBGrid_거래처_템플릿_ROW index=@index}}
            {{/each}}
            </tbody>
        </table>
    </script>

    <script id="DBGrid_거래처_템플릿_ROW" type="text/x-handlebars-template">
        <tr>
            <td class="hide"><input type="text" value="{{ GEO_CODE }}" fieldName="GEO_CODE" readonly="readonly" disabled/></td>
            <td class="fs-7"><input type="hidden" value="{{ SANGHO }}" fieldName="SANGHO" readonly="readonly" disabled/>{{ SANGHO }}</td>
            <td class="fs-7 text-center"><input type="hidden" value="{{ SAUP_NO }}" fieldName="SAUP_NO" readonly="readonly" disabled/>{{ SAUP_NO }}</td>
            <td class="fs-7"><input type="hidden" value="{{ DAEPYO_NAME }}" fieldName="DAEPYO_NAME" readonly="readonly" disabled/>{{ DAEPYO_NAME }}</td>
            <td class="fs-7"><input type="hidden" value="{{ UPTAE }}" fieldName="UPTAE" readonly="readonly" disabled/>{{ UPTAE }}</td>
            <td class="fs-7"><input type="hidden" value="{{ JONGMOK }}" fieldName="JONGMOK" readonly="readonly" disabled/>{{ JONGMOK }}</td>
        </tr>
    </script>
</body>    