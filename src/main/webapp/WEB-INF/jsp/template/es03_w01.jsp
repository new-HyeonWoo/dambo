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
        <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5" id="testTable">
            <thead class="bg-secondary align-middle fw-bolder text-nowrap">
                <tr class="fs-7 text-gray-800 text-center align-middle">
                    <th class="min-w-100px">지점명</th>
                    <th class="min-w-120px">감정일자</th>
                    <th class="min-w-250px">주소</th>
                    <th class="min-w-200px">담보종류</th>
                    <th class="min-w-150px">사업부분</th>
                    <th class="min-w-150px">거래처명</th>
                    <th class="min-w-150px">업소명</th>
                    <th class="min-w-100px">감정<br>구분</th>
                    <th class="min-w-150px">감정진행현황</th>
                    <th class="min-w-150px">토지(평)</th>
                    <th class="min-w-150px">건물(평)</th>
                    <th class="min-w-150px">평가가격</th>
                    <th class="min-w-150px">예상1차<br>최저입찰가</th>
                    <th class="min-w-150px">예상낙찰가</th>
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
                    <th colspan="8"></th>
                    <th>
                        <input id="Edit_합계_토지" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_건물" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_평가가격" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_예상1차최저입찰가" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                    <th>
                        <input id="Edit_합계_예상낙찰가" class="form-control form-control-transparent fs-7 text-end py-0 ps-0 min-w-100" value="" disabled="disabled">
                    </th>
                </tr>
            </tfoot>                    
        </table>
    </script>
    
    <script id="DBGrid1_템플릿_ROW" type="text/x-handlebars-template">
        <tr>
            <td class="text-center min-w-100 fs-7">{{ notField name="SMALLNAME" value=SMALLNAME index=index options='{"textType": "text-center"}' }}</td>
            <td class="text-center min-w-100 fs-7">{{ notField name="ESTI_DATE" value=ESTI_DATE index=index options='{"mask": "yyyy-mm-dd", "maskType": "날짜", "textType": "text-center"}' }}</td>
            <td class="text-start min-w-100 fs-7">{{ notField name="JUSO1" value=JUSO1 index=index  options='{"textType": "text-start"}' }}</td>
            <td class="text-start min-w-100 fs-7">{{ notField name="SEC_NAME" value=SEC_NAME index=index options='{"textType": "text-start"}' }}</td>
            <td class="text-start min-w-100 fs-7">{{ notField name="LIQUOR_TYPE_NM" value=LIQUOR_TYPE_NM index=index  options='{"textType": "text-start"}' }}</td>
            <td class="text-start min-w-100 fs-7">{{ notField name="SANGHO" value=SANGHO index=index  options='{"textType": "text-start"}' }}</td>
            <td class="text-start min-w-100 fs-7">{{ notField name="MARKET_NAME" value=MARKET_NAME index=index  options='{"textType": "text-start"}' }}</td>
            <td class="text-start min-w-100 fs-7">{{ notField name="LIQUOR_TYPE" value=LIQUOR_TYPE index=index options='{"textType": "text-start"}' }}</td>
            <td class="text-start min-w-100 fs-7">{{ notField name="PROC_NAME" value=PROC_NAME index=index  options='{"textType": "text-center"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="L_SIZE_PY" value=L_SIZE_PY index=index  options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="B_SIZE_PY" value=B_SIZE_PY index=index  options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="INCREASE_AMT" value=INCREASE_AMT index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="PLMIN_BID_AMT" value=PLMIN_BID_AMT index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="text-end min-w-100 fs-7">{{ notField name="PL_BID_AMT" value=PL_BID_AMT index=index  options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
            <td class="d-none">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
            <td class="d-none">{{ noneField name="PROC_DIV" value=PROC_DIV index=index options='{}' }}</td>
            <td class="d-none">{{ noneField name="FILE_NAME" value=FILE_NAME index=index options='{}' }}</td>
            <td class="d-none">{{ noneField name="SEC_CODE" value=SEC_CODE index=index options='{}' }}</td>
            <td class="d-none">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
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