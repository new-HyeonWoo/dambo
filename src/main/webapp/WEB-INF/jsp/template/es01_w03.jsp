<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<style>
    .hide { display:none; }
</style>

<meta charset="UTF-8">
<script defer src="../../../resources/js/custom/grid/template.js"></script>

<%--입력표--%>
<script id="DBGrid_토지의표시_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary text-center align-middle text-nowrap">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">법정지상권성립여부</th>
                <th class="hide">USE_AREA</th>
                <th class="hide">L_USE_CODE</th>
                <th class="hide">OF_ROAD_CODE</th>
                <th class="hide">L_SHAPE_CODE</th>
                <th class="hide">L_UNDUR_CODE</th>
                <th class="hide">STD_APPL_DAN</th>
                <th class="hide">APPL_RATE</th>
                <th class="hide">APAS_AMT</th>
                <th class="hide">APAS_AMT</th>
                <th class="hide">SEC_REGI_SIZE</th>
                <th class="hide">SEC_NUME</th>
                <th class="hide">SEC_DENO</th>
                <th class="hide">SEC_RATE</th>
                <th class="hide">SEC_OFFER_SIZE</th>
                <th class="hide">SEC_DESC</th>
                <th class="hide">INC_AMT</th>
                <th class="hide">FNL_INC_AMT</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="w-100px" rowspan="2">일단지구분</th>
                <th class="w-300px" rowspan="2">최소행정구역</th>
                <th class="w-50px" rowspan="2">선택</th>
                <th class="w-150px" rowspan="2">지번</th>
                <th class="w-150px" rowspan="2">지목</th>
                <th colspan="2">면적</th>
                <th colspan="3">개별공시지가</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th class="w-150px">㎡</th>
                <th class="w-150px">평</th>
                <th class="w-150px">원/㎡</th>
                <th class="w-150px">원/평</th>
                <th class="w-150px">면적×개별공시지가</th>
            </tr>
        </thead>
        <tbody class="text-center">
            {{#each .}}
                {{>DBGrid_토지의표시_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_토지의표시_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide"> {{ noneField name="LCOM_CODE_YN" value=LCOM_CODE_YN index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="USE_AREA" value=USE_AREA index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="L_USE_CODE" value=L_USE_CODE index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="OF_ROAD_CODE" value=OF_ROAD_CODE index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="L_SHAPE_CODE" value=L_SHAPE_CODE index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="L_UNDUR_CODE" value=L_UNDUR_CODE index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="STD_APPL_DAN" value=STD_APPL_DAN index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="APPL_RATE" value=APPL_RATE index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="APAS_AMT" value=APAS_AMT index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="APPL_AMT" value=APPL_AMT index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide"> {{ noneField name="SEC_NUME" value=SEC_NUME index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEC_DENO" value=SEC_DENO index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide"> {{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide"> {{ noneField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="INC_AMT" value=INC_AMT index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="w-100px"> {{ comboField name="POT_GU" value=POT_GU index=index query='{"id": "Q_코드_일단지구분", "text": "CD_CODE", "value": "CD_CODE"}' options='{}' }}</td>
        <td class="w-200px"> {{ noneField name="MIN_BOUND" value=MIN_BOUND index=index options='{}' }}</td>
        <td class="w-50px"> {{ buttonField name="BTN" value="BTN" index=index options='{ "iconType" : "search" }' }}</td>
        <td class="w-150px"> {{ inputField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td class="w-150px"> {{ comboField name="LCATEGORY" value=LCATEGORY index=index query='{"id": "Q_코드_지목", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td class="w-150px"> {{ maskField name="L_SIZE" value=L_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td class="w-150px"> {{ noneField name="L_SIZE_PY" value=L_SIZE_PY index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td class="w-150px"> {{ maskField name="ANNO_DAN" value=ANNO_DAN index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td class="w-150px"> {{ noneField name="ANNO_DAN_PY" value=ANNO_DAN_PY index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td class="w-150px"> {{ noneField name="ANNO_AMT" value=ANNO_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType" :"text-end"}' }}</td>
    </tr>
</script>

<script id="DBGrid_건물의표시_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">SEC_REGI_SIZE</th>
                <th class="hide">SEC_NUME</th>
                <th class="hide">SEC_DENO</th>
                <th class="hide">SEC_RATE</th>
                <th class="hide">SEC_OFFER_SIZE</th>
                <th class="hide">SEC_DESC</th>
                <th class="w-100px" rowspan="2">등기구분</th>
                <th class="w-200px" rowspan="2">소재지번</th>
                <th class="w-200px" rowspan="2">건축년월일</th>
                <th class="w-200px" rowspan="2">구조</th>
                <th class="w-200px" rowspan="2">지붕</th>
                <th class="w-100px" rowspan="2">층별</th>
                <th class="w-100px" rowspan="2">주용도</th>
                <th colspan="2">건물의면적</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th class="w-100px">㎡</th>
                <th class="w-100px">평</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_건물의표시_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_건물의표시_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_NUME" value=SEC_NUME index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_DENO" value=SEC_DENO index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
        <td class="w-100px">{{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{"textType" :"text-center"}' }}</td>
        <td class="w-200px">{{ inputField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td class="w-200px">{{ maskField name="CB_DATE" value=CB_DATE index=index options='{"mask": "yyyy-mm-dd", "maskType": "날짜", "textType" :"text-center"}' }}</td>
        <td class="w-200px">{{ comboField name="CB_STRUC" value=CB_STRUC index=index query='{"id": "Q_코드_구조", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td class="w-200px">{{ comboField name="CB_ROOF" value=CB_ROOF index=index query='{"id": "Q_코드_지붕", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td class="w-100px">{{ maskField name="CB_FLOOR" value=CB_FLOOR index=index options='{"mask": "000", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td class="w-100px">{{ inputField name="CB_USE_MAIN" value=CB_USE_MAIN index=index options='{}' }}</td>
        <td class="w-100px">{{ maskField name="CB_SIZE" value=CB_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td class="w-100px">{{ noneField name="CB_SIZE_PY" value=CB_SIZE_PY index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
    </tr>
</script>

<script id="DBGrid_담보제공비율_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary text-nowrap">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">SEC_DESC_ENABLE</th>
                <th class="min-w-100px text-center" rowspan="2">일단지구분</th>
                <th class="min-w-100px text-center" rowspan="2">지번</th>
                <th class="min-w-100px text-center" rowspan="2">전체면적</th>
                <th class="min-w-100px text-center" colspan="3">담보제공비율</th>
                <th class="min-w-100px text-center" rowspan="2">담보제공면적</th>
                <th class="min-w-100px text-center" rowspan="2">사유</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th class="min-w-100px">분자</th>
                <th class="min-w-100px">분모</th>
                <th class="min-w-100px">비율</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_담보제공비율_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_담보제공비율_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide"> {{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEC_DESC_ENABLE" value=SEC_DESC_ENABLE index=index options='{}' }}</td>
        <td> {{ noneField name="POT_GU" value=POT_GU index=index options='{}' }}</td>
        <td> {{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td> {{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ maskField name="SEC_NUME" value=SEC_NUME index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ maskField name="SEC_DENO" value=SEC_DENO index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ inputField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
    </tr>
</script>

<script id="DBGrid_담보제공비율_건물_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">SEC_DESC_ENABLE</th>
                <th class="min-w-100px" rowspan="2">등기구분</th>
                <th class="min-w-100px" rowspan="2">지번</th>
                <th class="min-w-100px" rowspan="2">전체면적</th>
                <th class="min-w-100px" colspan="3">담보제공비율</th>
                <th class="min-w-100px" rowspan="2">담보제공면적</th>
                <th class="min-w-100px" rowspan="2">사유</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th>분자</th>
                <th>분모</th>
                <th>비율</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_담보제공비율_건물_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_담보제공비율_건물_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide"> {{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide"> {{ noneField name="SEC_DESC_ENABLE" value=SEC_DESC_ENABLE index=index options='{}' }}</td>
        <td> {{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td> {{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td> {{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ maskField name="SEC_NUME" value=SEC_NUME index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ maskField name="SEC_DENO" value=SEC_DENO index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td> {{ inputField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
    </tr>
</script>
<%--// 입력표--%>

<%--감정가액산출1--%>
<script id="DBGrid_본건토지_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">L_SIZE_PY</th>
                <th class="hide">ANNO_DAN</th>
                <th class="hide">ANNO_DAN_PY</th>
                <th class="hide">ANNO_AMT</th>
                <th class="hide">LCOM_CODE_YN</th>
                <th class="hide">STD_APPL_DAN</th>
                <th class="hide">APPL_RATE</th>
                <th class="hide">APAS_AMT</th>
                <th class="hide">APPL_AMT</th>
                <th class="hide">SEC_REGI_SIZE</th>
                <th class="hide">SEC_NUME</th>
                <th class="hide">SEC_DENO</th>
                <th class="hide">SEC_RATE</th>
                <th class="hide">SEC_OFFER_SIZE</th>
                <th class="hide">SEC_DESC</th>
                <th class="hide">INC_AMT</th>
                <th class="hide">FNL_INC_AMT</th>
                <th class="hide">BTN</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="min-w-50px">일단지구분</th>
                <th class="min-w-250px">소재지</th>
                <th class="min-w-100px">지번</th>
                <th class="min-w-150px">지목</th>
                <th class="min-w-150px">면적(㎡)</th>
                <th class="min-w-150px">용도지역</th>
                <th class="min-w-150px">이용현황</th>
                <th class="min-w-150px">도로조건</th>
                <th class="min-w-150px">형상</th>
                <th class="min-w-150px">고저</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_본건토지_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_본건토지_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="L_SIZE_PY" value=L_SIZE_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_DAN" value=ANNO_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_DAN_PY" value=ANNO_DAN_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_AMT" value=ANNO_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LCOM_CODE_YN" value=LCOM_CODE_YN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="STD_APPL_DAN" value=STD_APPL_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APPL_RATE" value=APPL_RATE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APAS_AMT" value=APAS_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APPL_AMT" value=APPL_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_NUME" value=SEC_NUME index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_DENO" value=SEC_DENO index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="INC_AMT" value=INC_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="BTN" value=BTN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td>{{ noneField name="POT_GU" value=POT_GU index=index options='{"textType" :"text-center"}' }}</td>
        <td>{{ noneField name="MIN_BOUND" value=MIN_BOUND index=index options='{}' }}</td>
        <td>{{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td>{{ comboField name="LCATEGORY" value=LCATEGORY index=index query='{"id": "Q_코드_지목", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="L_SIZE" value=L_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td>{{ comboField name="USE_AREA" value=USE_AREA index=index query='{"id": "Q_코드_용도지역", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_USE_CODE" value=L_USE_CODE index=index query='{"id": "Q_코드_이용현황", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="OF_ROAD_CODE" value=OF_ROAD_CODE index=index query='{"id": "Q_코드_도로조건", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_SHAPE_CODE" value=L_SHAPE_CODE index=index query='{"id": "Q_코드_형상", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_UNDUR_CODE" value=L_UNDUR_CODE index=index query='{"id": "Q_코드_고저", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
    </tr>
</script>

<script id="DBGrid_표준지공시지가_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">면적(평)</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">COMBO_STAT</th>
                <th class="min-w-100px">구분</th>
                <th class="min-w-250px">소재지</th>
                <th class="min-w-50px">선택</th>
                <th class="min-w-100px">지번</th>
                <th class="min-w-150px">지목</th>
                <th class="min-w-100px">면적(㎡)</th>
                <th class="min-w-150px">용도지역</th>
                <th class="min-w-150px">이용현황</th>
                <th class="min-w-150px">도로조건</th>
                <th class="min-w-150px">형상</th>
                <th class="min-w-100px">고저</th>
                <th class="min-w-100px">표준지공시지가(원/㎡)</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_표준지공시지가_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_표준지공시지가_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="L_SIZE_PY" value=L_SIZE_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="COMBO_STAT" value=COMBO_STAT index=index options='{}' }}</td>
        <td>{{ comboField name="S_GU" value=S_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="JUSO1" value=JUSO1 index=index options='{}' }}</td>
        <td>{{ buttonField name="BTN" value="BTN" index=index options='{ "iconType" : "search" }' }}</td>
        <td>{{ inputField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td>{{ comboField name="LCATEGORY" value=LCATEGORY index=index query='{"id": "Q_코드_지목", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ maskField name="L_SIZE" value=L_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td>{{ comboField name="USE_AREA" value=USE_AREA index=index query='{"id": "Q_코드_용도지역", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_USE_CODE" value=L_USE_CODE index=index query='{"id": "Q_코드_이용현황", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="OF_ROAD_CODE" value=OF_ROAD_CODE index=index query='{"id": "Q_코드_도로조건", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_SHAPE_CODE" value=L_SHAPE_CODE index=index query='{"id": "Q_코드_형상", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_UNDUR_CODE" value=L_UNDUR_CODE index=index query='{"id": "Q_코드_고저", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ maskField name="STD_ANNO_AMT" value=STD_ANNO_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType" :"text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_비준가격_산정사례_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">면적(평)</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="min-w-50px">사례번호</th>
                <th class="min-w-100px">사례구분</th>
                <th class="min-w-100px">경매사건번호</th>
                <th class="min-w-250px">소재지</th>
                <th class="min-w-50px">선택</th>
                <th class="min-w-150px">조사금액</th>
                <th class="min-w-150px">면적(㎡)</th>
                <th class="min-w-100px">용도지역</th>
                <th class="min-w-100px">지목</th>
                <th class="min-w-100px">이용현황</th>
                <th class="min-w-100px">도로조건</th>
                <th class="min-w-100px">형상</th>
                <th class="min-w-100px">고저</th>
                <th class="min-w-150px">사례가격(원/㎡)</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_비준가격_산정사례_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_비준가격_산정사례_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ maskField name="L_SIZE_PY" value=L_SIZE_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td>{{ noneField name="EX_NO" value=EX_NO index=index options='{"textType" :"text-center"}' }}</td>
        <td>{{ comboField name="EX_DIV" value=EX_DIV index=index query='{"id": "직접입력", "text": "CD_DESC", "value": "CD_CODE", "keys": "가격사례;경매사례", "values": "0;1"}' options='{}' }}</td>
        <td>{{ inputField name="AU_NO" value=AU_NO index=index options='{}' }}</td>
        <td>{{ inputField name="JUSO1" value=JUSO1 index=index options='{}' }}</td>
        <td>{{ buttonField name="BTN" value="BTN" index=index options='{ "iconType" : "search" }' }}</td>
        <td>{{ maskField name="SURVEY_AMT" value=SURVEY_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td>{{ maskField name="L_SIZE" value=L_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType" :"text-end"}' }}</td>
        <td>{{ comboField name="USE_AREA" value=USE_AREA index=index query='{"id": "Q_코드_용도지역", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="LCATEGORY" value=LCATEGORY index=index query='{"id": "Q_코드_지목", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_USE_CODE" value=L_USE_CODE index=index query='{"id": "Q_코드_이용현황", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="OF_ROAD_CODE" value=OF_ROAD_CODE index=index query='{"id": "Q_코드_도로조건", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_SHAPE_CODE" value=L_SHAPE_CODE index=index query='{"id": "Q_코드_형상", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="L_UNDUR_CODE" value=L_UNDUR_CODE index=index query='{"id": "Q_코드_고저", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="EXAMPLE_PRICE" value=EXAMPLE_PRICE index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>
<%--// 감정가액산출1--%>

<%--감정가액산출2--%>
<script id="DBGrid_기준가격_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">STD_ANNO_AMT</th>
                <th class="hide">EDIT_M</th>
                <th class="hide">EDIT_S</th>
                <th class="hide">EDIT_C</th>
                <th class="hide">JUSO_M</th>
                <th class="hide">JUSO_S</th>
                <th class="hide">JUSO_C</th>
                <th class="hide">ROAD_SIDE_M</th>
                <th class="hide">ROAD_SIDE_S</th>
                <th class="hide">ROAD_SIDE_C</th>
                <th class="hide">ROAD_DIST_M</th>
                <th class="hide">ROAD_DIST_S</th>
                <th class="hide">ROAD_DIST_C</th>
                <th class="hide">GOV_ACSS_M</th>
                <th class="hide">GOV_ACSS_S</th>
                <th class="hide">GOV_ACSS_C</th>
                <th class="hide">CNTR_ACSS_M</th>
                <th class="hide">CNTR_ACSS_S</th>
                <th class="hide">CNTR_ACSS_C</th>
                <th class="hide">ETC_ACSS_M</th>
                <th class="hide">ETC_ACSS_S</th>
                <th class="hide">ETC_ACSS_C</th>
                <th class="hide">RAIL_ACSS_M</th>
                <th class="hide">RAIL_ACSS_S</th>
                <th class="hide">RAIL_ACSS_C</th>
                <th class="hide">POLL_ACSS_M</th>
                <th class="hide">POLL_ACSS_S</th>
                <th class="hide">POLL_ACSS_C</th>
                <th class="hide">ETC_ENVI_M</th>
                <th class="hide">ETC_ENVI_S</th>
                <th class="hide">ETC_ENVI_C</th>
                <th class="hide">USE_AREA_M</th>
                <th class="hide">USE_AREA_S</th>
                <th class="hide">USE_AREA_C</th>
                <th class="hide">USE_DSCT_M</th>
                <th class="hide">USE_DSCT_S</th>
                <th class="hide">USE_DSCT_C</th>
                <th class="hide">CITY_INFR_M</th>
                <th class="hide">CITY_INFR_S</th>
                <th class="hide">CITY_INFR_C</th>
                <th class="hide">LIMIT_AREA_M</th>
                <th class="hide">LIMIT_AREA_S</th>
                <th class="hide">LIMIT_AREA_C</th>
                <th class="hide">L_UNDUR_CODE_M</th>
                <th class="hide">L_UNDUR_CODE_S</th>
                <th class="hide">L_UNDUR_CODE_C</th>
                <th class="hide">L_SHAPE_CODE_M</th>
                <th class="hide">L_SHAPE_CODE_S</th>
                <th class="hide">L_SHAPE_CODE_C</th>
                <th class="hide">L_AZIM_CODE_M</th>
                <th class="hide">L_AZIM_CODE_S</th>
                <th class="hide">L_AZIM_CODE_C</th>
                <th class="hide">L_SIZE_CODE_M</th>
                <th class="hide">L_SIZE_CODE_S</th>
                <th class="hide">L_SIZE_CODE_C</th>
                <th class="hide">L_OF_GU_M</th>
                <th class="hide">L_OF_GU_S</th>
                <th class="hide">L_OF_GU_C</th>
                <th class="hide">L_ETC_M</th>
                <th class="hide">L_ETC_S</th>
                <th class="hide">L_ETC_C</th>
                <th class="hide">E_TREND_M</th>
                <th class="hide">E_TREND_S</th>
                <th class="hide">E_TREND_C</th>
                <th class="hide">E_ETC_M</th>
                <th class="hide">E_ETC_S</th>
                <th class="hide">E_ETC_C</th>
                <th class="hide">DEPRE_RATE</th>
                <th class="hide">FACTOR_TOT</th>
                <th class="hide">APAS_DAN</th>
                <th class="hide">APPL_DAN</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">RNO</th>
                <th class="hide">APPL_FACTOR_TOT</th>
                <th class="hide">EDIT_M_DATE</th>
                <th class="hide">EDIT_S_DATE</th>
                <th>일단지구분</th>
                <th>표준지</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_기준가격_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_기준가격_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="STD_ANNO_AMT" value=STD_ANNO_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_M" value=EDIT_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_S" value=EDIT_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_C" value=EDIT_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_M" value=JUSO_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_S" value=JUSO_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_C" value=JUSO_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_SIDE_M" value=ROAD_SIDE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_SIDE_S" value=ROAD_SIDE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_SIDE_C" value=ROAD_SIDE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_DIST_M" value=ROAD_DIST_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_DIST_S" value=ROAD_DIST_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_DIST_C" value=ROAD_DIST_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="GOV_ACSS_M" value=GOV_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="GOV_ACSS_S" value=GOV_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="GOV_ACSS_C" value=GOV_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CNTR_ACSS_M" value=CNTR_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CNTR_ACSS_S" value=CNTR_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CNTR_ACSS_C" value=CNTR_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ACSS_M" value=ETC_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ACSS_S" value=ETC_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ACSS_C" value=ETC_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RAIL_ACSS_M" value=RAIL_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RAIL_ACSS_S" value=RAIL_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RAIL_ACSS_C" value=RAIL_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="POLL_ACSS_M" value=POLL_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="POLL_ACSS_S" value=POLL_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="POLL_ACSS_C" value=POLL_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ENVI_M" value=ETC_ENVI_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ENVI_S" value=ETC_ENVI_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ENVI_C" value=ETC_ENVI_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA_M" value=USE_AREA_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA_S" value=USE_AREA_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA_C" value=USE_AREA_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_DSCT_M" value=USE_DSCT_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_DSCT_S" value=USE_DSCT_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_DSCT_C" value=USE_DSCT_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CITY_INFR_M" value=CITY_INFR_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CITY_INFR_S" value=CITY_INFR_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CITY_INFR_C" value=CITY_INFR_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LIMIT_AREA_M" value=LIMIT_AREA_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LIMIT_AREA_S" value=LIMIT_AREA_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LIMIT_AREA_C" value=LIMIT_AREA_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE_M" value=L_UNDUR_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE_S" value=L_UNDUR_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE_C" value=L_UNDUR_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE_M" value=L_SHAPE_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE_S" value=L_SHAPE_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE_C" value=L_SHAPE_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_AZIM_CODE_M" value=L_AZIM_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_AZIM_CODE_S" value=L_AZIM_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_AZIM_CODE_C" value=L_AZIM_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_CODE_M" value=L_SIZE_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_CODE_S" value=L_SIZE_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_CODE_C" value=L_SIZE_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_OF_GU_M" value=L_OF_GU_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_OF_GU_S" value=L_OF_GU_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_OF_GU_C" value=L_OF_GU_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_ETC_M" value=L_ETC_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_ETC_S" value=L_ETC_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_ETC_C" value=L_ETC_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_TREND_M" value=E_TREND_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_TREND_S" value=E_TREND_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_TREND_C" value=E_TREND_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_ETC_M" value=E_ETC_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_ETC_S" value=E_ETC_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_ETC_C" value=E_ETC_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="DEPRE_RATE" value=DEPRE_RATE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="FACTOR_TOT" value=FACTOR_TOT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APAS_DAN" value=APAS_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APPL_DAN" value=APPL_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RNO" value=RNO index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APPL_FACTOR_TOT" value=APPL_FACTOR_TOT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_M_DATE" value=EDIT_M_DATE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_S_DATE" value=EDIT_S_DATE index=index options='{}' }}</td>
        <td>{{ comboField name="POT_GU" value=POT_GU index=index query='{"id": "Q_일단지구분갱신", "text": "CD_CODE", "value": "CD_CODE"}' options='{"textType": "text-center"}' }}</td>
        <td>{{ comboField name="STD_GU" value=STD_GU index=index query='{"id": "Q_표준지갱신", "text": "CD_DESC", "value": "CD_CODE"}' options='{"textType": "text-center"}' }}</td>
    </tr>
</script>


<script id="DBGrid_기준가격집계표_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">RNO</th>
                <th class="hide">DEPRE_RATE</th>
                <th class="hide">EDIT_M</th>
                <th class="hide">EDIT_S</th>
                <th class="hide">JUSO_S</th>
                <th class="hide">JUSO_C</th>
                <th class="min-w-100px" rowspan="2">일단지 구분</th>
                <th class="min-w-100px" rowspan="2">표준지</th>
                <th class="min-w-100px" rowspan="2">표준지 공시지가</th>
                <th class="min-w-100px" rowspan="2">시점수정</th>
                <th class="min-w-300px" rowspan="2">소재지</th>
                <th class="min-w-100px" colspan="6">개별요인</th>
                <th class="min-w-100px" rowspan="2">요인합계</th>
                <th class="min-w-100px" rowspan="2">산정단가(원/㎡)</th>
                <th class="min-w-100px" rowspan="2">적용단가(원/㎡)</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th>가로</th>
                <th>접근</th>
                <th>환경</th>
                <th>행정</th>
                <th>획지</th>
                <th>기타</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_기준가격집계표_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_기준가격집계표_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RNO" value=RNO index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="DEPRE_RATE" value=DEPRE_RATE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_M" value=EDIT_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_S" value=EDIT_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_S" value=JUSO_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_C" value=JUSO_C index=index options='{}' }}</td>
        <td>{{ noneField name="POT_GU" value=POT_GU index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ comboField name="STD_GU" value=STD_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="STD_ANNO_AMT" value=STD_ANNO_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="EDIT_C" value=EDIT_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="JUSO_M" value=JUSO_M index=index options='{}' }}</td>
        <td>{{ noneField name="ROAD_C" value=ROAD_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPRO_C" value=APPRO_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="ENVI_C" value=ENVI_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="OFFIC_C" value=OFFIC_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="LAND_C" value=LAND_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="ETC_C" value=ETC_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="FACTOR_TOT" value=FACTOR_TOT index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APAS_DAN" value=APAS_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPL_DAN" value=APPL_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>
<%--//감정가액산출2--%>

<script id="DBGrid_비준가격_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">STD_ANNO_AMT</th>
                <th class="hide">EDIT_M</th>
                <th class="hide">EDIT_S</th>
                <th class="hide">EDIT_C</th>
                <th class="hide">JUSO_M</th>
                <th class="hide">JUSO_S</th>
                <th class="hide">JUSO_C</th>
                <th class="hide">ROAD_SIDE_M</th>
                <th class="hide">ROAD_SIDE_S</th>
                <th class="hide">ROAD_SIDE_C</th>
                <th class="hide">ROAD_DIST_M</th>
                <th class="hide">ROAD_DIST_S</th>
                <th class="hide">ROAD_DIST_C</th>
                <th class="hide">GOV_ACSS_M</th>
                <th class="hide">GOV_ACSS_S</th>
                <th class="hide">GOV_ACSS_C</th>
                <th class="hide">CNTR_ACSS_M</th>
                <th class="hide">CNTR_ACSS_S</th>
                <th class="hide">CNTR_ACSS_C</th>
                <th class="hide">ETC_ACSS_M</th>
                <th class="hide">ETC_ACSS_S</th>
                <th class="hide">ETC_ACSS_C</th>
                <th class="hide">RAIL_ACSS_M</th>
                <th class="hide">RAIL_ACSS_S</th>
                <th class="hide">RAIL_ACSS_C</th>
                <th class="hide">POLL_ACSS_M</th>
                <th class="hide">POLL_ACSS_S</th>
                <th class="hide">POLL_ACSS_C</th>
                <th class="hide">ETC_ENVI_M</th>
                <th class="hide">ETC_ENVI_S</th>
                <th class="hide">ETC_ENVI_C</th>
                <th class="hide">USE_AREA_M</th>
                <th class="hide">USE_AREA_S</th>
                <th class="hide">USE_AREA_C</th>
                <th class="hide">USE_DSCT_M</th>
                <th class="hide">USE_DSCT_S</th>
                <th class="hide">USE_DSCT_C</th>
                <th class="hide">CITY_INFR_M</th>
                <th class="hide">CITY_INFR_S</th>
                <th class="hide">CITY_INFR_C</th>
                <th class="hide">LIMIT_AREA_M</th>
                <th class="hide">LIMIT_AREA_S</th>
                <th class="hide">LIMIT_AREA_C</th>
                <th class="hide">L_UNDUR_CODE_M</th>
                <th class="hide">L_UNDUR_CODE_S</th>
                <th class="hide">L_UNDUR_CODE_C</th>
                <th class="hide">L_SHAPE_CODE_M</th>
                <th class="hide">L_SHAPE_CODE_S</th>
                <th class="hide">L_SHAPE_CODE_C</th>
                <th class="hide">L_AZIM_CODE_M</th>
                <th class="hide">L_AZIM_CODE_S</th>
                <th class="hide">L_AZIM_CODE_C</th>
                <th class="hide">L_SIZE_CODE_M</th>
                <th class="hide">L_SIZE_CODE_S</th>
                <th class="hide">L_SIZE_CODE_C</th>
                <th class="hide">L_OF_GU_M</th>
                <th class="hide">L_OF_GU_S</th>
                <th class="hide">L_OF_GU_C</th>
                <th class="hide">L_ETC_M</th>
                <th class="hide">L_ETC_S</th>
                <th class="hide">L_ETC_C</th>
                <th class="hide">E_TREND_M</th>
                <th class="hide">E_TREND_S</th>
                <th class="hide">E_TREND_C</th>
                <th class="hide">E_ETC_M</th>
                <th class="hide">E_ETC_S</th>
                <th class="hide">E_ETC_C</th>
                <th class="hide">FACTOR_TOT</th>
                <th class="hide">APAS_DAN</th>
                <th class="hide">APPL_DAN</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">RNO</th>
                <th class="hide">조사시점</th>
                <th class="hide">EDIT_M_DATE</th>
                <th>일단지구분</th>
                <th>사례번호</th>
                <th>사례구분</th>
                <th>시점수정</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_비준가격_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_비준가격_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="STD_ANNO_AMT" value=STD_ANNO_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_M" value=EDIT_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_S" value=EDIT_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_C" value=EDIT_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_M" value=JUSO_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_S" value=JUSO_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_C" value=JUSO_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_SIDE_M" value=ROAD_SIDE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_SIDE_S" value=ROAD_SIDE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_SIDE_C" value=ROAD_SIDE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_DIST_M" value=ROAD_DIST_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_DIST_S" value=ROAD_DIST_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ROAD_DIST_C" value=ROAD_DIST_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="GOV_ACSS_M" value=GOV_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="GOV_ACSS_S" value=GOV_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="GOV_ACSS_C" value=GOV_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CNTR_ACSS_M" value=CNTR_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CNTR_ACSS_S" value=CNTR_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CNTR_ACSS_C" value=CNTR_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ACSS_M" value=ETC_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ACSS_S" value=ETC_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ACSS_C" value=ETC_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RAIL_ACSS_M" value=RAIL_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RAIL_ACSS_S" value=RAIL_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RAIL_ACSS_C" value=RAIL_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="POLL_ACSS_M" value=POLL_ACSS_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="POLL_ACSS_S" value=POLL_ACSS_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="POLL_ACSS_C" value=POLL_ACSS_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ENVI_M" value=ETC_ENVI_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ENVI_S" value=ETC_ENVI_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ETC_ENVI_C" value=ETC_ENVI_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA_M" value=USE_AREA_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA_S" value=USE_AREA_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA_C" value=USE_AREA_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_DSCT_M" value=USE_DSCT_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_DSCT_S" value=USE_DSCT_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_DSCT_C" value=USE_DSCT_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CITY_INFR_M" value=CITY_INFR_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CITY_INFR_S" value=CITY_INFR_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CITY_INFR_C" value=CITY_INFR_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LIMIT_AREA_M" value=LIMIT_AREA_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LIMIT_AREA_S" value=LIMIT_AREA_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LIMIT_AREA_C" value=LIMIT_AREA_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE_M" value=L_UNDUR_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE_S" value=L_UNDUR_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE_C" value=L_UNDUR_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE_M" value=L_SHAPE_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE_S" value=L_SHAPE_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE_C" value=L_SHAPE_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_AZIM_CODE_M" value=L_AZIM_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_AZIM_CODE_S" value=L_AZIM_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_AZIM_CODE_C" value=L_AZIM_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_CODE_M" value=L_SIZE_CODE_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_CODE_S" value=L_SIZE_CODE_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_CODE_C" value=L_SIZE_CODE_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_OF_GU_M" value=L_OF_GU_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_OF_GU_S" value=L_OF_GU_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_OF_GU_C" value=L_OF_GU_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_ETC_M" value=L_ETC_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_ETC_S" value=L_ETC_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_ETC_C" value=L_ETC_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_TREND_M" value=E_TREND_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_TREND_S" value=E_TREND_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_TREND_C" value=E_TREND_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_ETC_M" value=E_ETC_M index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_ETC_S" value=E_ETC_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="E_ETC_C" value=E_ETC_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="FACTOR_TOT" value=FACTOR_TOT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APAS_DAN" value=APAS_DAN index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="APPL_DAN" value=APPL_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RNO" value=RNO index=index options='{}' }}</td>
        <td class="hide">{{ maskField name="SURVEY_TIME" value=SURVEY_TIME index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_M_DATE" value=EDIT_M_DATE index=index options='{}' }}</td>
        <td>{{ comboField name="POT_GU" value=POT_GU index=index query='{"id": "Q_일단지구분갱신", "text": "CD_CODE", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="EX_NO" value=EX_NO index=index query='{"id": "Q_사례번호갱신", "text": "CD_CODE", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ comboField name="EX_DIV" value=EX_DIV index=index query='{"id": "직접입력", "text": "CD_DESC", "value": "CD_CODE", "keys": "가격사례;경매사례", "values": "0;1"}' options='{}' }}</td>
        <td>{{ noneField name="EDIT_S_DATE" value=EDIT_S_DATE index=index options='{"mask": "yyyy-mm-dd", "maskType": "날짜", "textType": "text-center"}' }}</td>
    </tr>
</script>


<script id="DBGrid_비준가격집계표_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">RNO</th>
                <th class="hide">SURVEY_TIME</th>
                <th class="hide">EDIT_S</th>
                <th class="hide">JUSO_S</th>
                <th class="hide">JUSO_C</th>
                <th class="hide">시점수정</th>
                <th class="min-w-100px" rowspan="2">일단지구분</th>
                <th class="min-w-100px" rowspan="2">사례번호</th>
                <th class="min-w-100px" rowspan="2">사례가격</th>
                <th class="min-w-100px" rowspan="2">시점수정</th>
                <th class="min-w-300px" rowspan="2">소재지</th>
                <th class="min-w-100px" colspan="6">개별요인</th>
                <th class="min-w-100px" rowspan="2">요인합계</th>
                <th class="min-w-100px" rowspan="2">산정단가(원/㎡)</th>
                <th class="min-w-100px" rowspan="2">적용단가(원/㎡)</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th>가로</th>
                <th>접근</th>
                <th>환경</th>
                <th>행정</th>
                <th>획지</th>
                <th>기타</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_비준가격집계표_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_비준가격집계표_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RNO" value=RNO index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SURVEY_TIME" value=SURVEY_TIME index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_S" value=EDIT_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_S" value=JUSO_S index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="JUSO_C" value=JUSO_C index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="EDIT_M" value=EDIT_M index=index options='{}' }}</td>
        <td>{{ noneField name="POT_GU" value=POT_GU index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ noneField name="EX_NO" value=EX_NO index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ noneField name="STD_ANNO_AMT" value=STD_ANNO_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="EDIT_C" value=EDIT_C index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="JUSO_M" value=JUSO_M index=index options='{}' }}</td>
        <td>{{ noneField name="ROAD_C" value=ROAD_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPRO_C" value=APPRO_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="ENVI_C" value=ENVI_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="OFFIC_C" value=OFFIC_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="LAND_C" value=LAND_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="ETC_C" value=ETC_C index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="FACTOR_TOT" value=FACTOR_TOT index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APAS_DAN" value=APAS_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPL_DAN" value=APPL_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_기타요인_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">ASSESS_DESC_ENABLE</th>
                <th class="min-w-100px" rowspan="2">일단지구분</th>
                <th class="min-w-100px" rowspan="2">표준지공시지가기준가격의 적용단가</th>
                <th class="min-w-100px" colspan="3">본건지역의 가격수준</th>
                <th class="min-w-100px" rowspan="2">비준가격</th>
                <th class="min-w-100px" rowspan="2">산정보정률</th>
                <th class="min-w-100px" rowspan="2">사정보정률</th>
                <th class="min-w-100px" rowspan="2">적용보정률</th>
                <th class="min-w-100px" rowspan="2">사유</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th>선택</th>
                <th>최저</th>
                <th>최고</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_기타요인_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_기타요인_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ASSESS_DESC_ENABLE" value=ASSESS_DESC_ENABLE index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ comboField name="POT_GU" value=POT_GU index=index query='{"id": "Q_일단지구분갱신", "text": "CD_CODE", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="STD_APPL_DAN" value=STD_APPL_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ comboField name="MA_NR_AREA_CODE" value=MA_NR_AREA_CODE index=index query='{"id": "Q_코드_인근지역", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="MA_NR_MIN_AMT" value=MA_NR_MIN_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="MA_NR_MAX_AMT" value=MA_NR_MAX_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="CO_AMT" value=CO_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APAS_RATE" value=APAS_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="ASSESS_RATE" value=ASSESS_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPL_RATE" value=APPL_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ inputField name="ASSESS_DESC" value=ASSESS_DESC index=index options='{"textType": "text-start"}' }}</td>
    </tr>
</script>


<script id="DBGrid_평가액_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">MIN_BOUND</th>
                <th class="hide">LCATEGORY</th>
                <th class="hide">L_SIZE</th>
                <th class="hide">L_SIZE_PY</th>
                <th class="hide">ANNO_DAN</th>
                <th class="hide">ANNO_DAN_PY</th>
                <th class="hide">LCOM_CODE_YN</th>
                <th class="hide">USE_AREA</th>
                <th class="hide">L_USE_CODE</th>
                <th class="hide">OF_ROAD_CODE</th>
                <th class="hide">L_SHAPE_CODE</th>
                <th class="hide">L_UNDUR_CODE</th>
                <th class="hide">SEC_REGI_SIZE</th>
                <th class="hide">SEC_NUME</th>
                <th class="hide">SEC_DENO</th>
                <th class="hide">SEC_RATE</th>
                <th class="hide">SEC_DESC</th>
                <th class="hide">FNL_INC_AMT</th>
                <th class="hide">BTN</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th>일단지구분</th>
                <th>지번</th>
                <th>개별공시지가</th>
                <th>표준지공시지가 기준가격의 적용단가</th>
                <th>적용보정률</th>
                <th>산정가격(원/㎡)</th>
                <th>적용가격(원/㎡)</th>
                <th>면적(㎡)</th>
                <th>평가가격(원)</th>
            </tr>                                  
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_평가액_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_평가액_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="MIN_BOUND" value=MIN_BOUND index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LCATEGORY" value=LCATEGORY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE" value=L_SIZE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_PY" value=L_SIZE_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_DAN" value=ANNO_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_DAN_PY" value=ANNO_DAN_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LCOM_CODE_YN" value=LCOM_CODE_YN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA" value=USE_AREA index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_USE_CODE" value=L_USE_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="OF_ROAD_CODE" value=OF_ROAD_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE" value=L_SHAPE_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE" value=L_UNDUR_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_NUME" value=SEC_NUME index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_DENO" value=SEC_DENO index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="BTN" value=BTN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td>{{ noneField name="POT_GU" value=POT_GU index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{"textType": "text-start"}' }}</td>
        <td>{{ noneField name="ANNO_AMT" value=ANNO_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="STD_APPL_DAN" value=STD_APPL_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPL_RATE" value=APPL_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APAS_AMT" value=APAS_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPL_AMT" value=APPL_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="INC_AMT" value=INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_담보_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">MIN_BOUND</th>
                <th class="hide">LCATEGORY</th>
                <th class="hide">L_SIZE</th>
                <th class="hide">L_SIZE_PY</th>
                <th class="hide">ANNO_DAN</th>
                <th class="hide">ANNO_DAN_PY</th>
                <th class="hide">개별공시지가</th>
                <th class="hide">LCOM_CODE_YN</th>
                <th class="hide">USE_AREA</th>
                <th class="hide">L_USE_CODE</th>
                <th class="hide">OF_ROAD_CODE</th>
                <th class="hide">L_SHAPE_CODE</th>
                <th class="hide">L_UNDUR_CODE</th>
                <th class="hide">STD_APPL_DAN</th>
                <th class="hide">APPL_RATE</th>
                <th class="hide">APAS_AMT</th>
                <th class="hide">APPL_AMT</th>
                <th class="hide">SEC_REGI_SIZE</th>
                <th class="hide">SEC_OFFER_SIZE</th>
                <th class="hide">SEC_DESC</th>
                <th class="hide">BTN</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="min-w-100px" rowspan="2">일단지구분</th>
                <th class="min-w-100px" rowspan="2">지번</th>
                <th class="min-w-100px" rowspan="2">평가가격(원)</th>
                <th class="min-w-100px" colspan="3">담보제공비율</th>
                <th class="min-w-100px" rowspan="2">최종평가가액(원)</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th>분자</th>
                <th>분모</th>
                <th>비율</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_담보_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_담보_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="MIN_BOUND" value=MIN_BOUND index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LCATEGORY" value=LCATEGORY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE" value=L_SIZE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SIZE_PY" value=L_SIZE_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_DAN" value=ANNO_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_DAN_PY" value=ANNO_DAN_PY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="ANNO_AMT" value=ANNO_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LCOM_CODE_YN" value=LCOM_CODE_YN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="USE_AREA" value=USE_AREA index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_USE_CODE" value=L_USE_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="OF_ROAD_CODE" value=OF_ROAD_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_SHAPE_CODE" value=L_SHAPE_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="L_UNDUR_CODE" value=L_UNDUR_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="STD_APPL_DAN" value=STD_APPL_DAN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APPL_RATE" value=APPL_RATE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APAS_AMT" value=APAS_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="APPL_AMT" value=APPL_AMT index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="BTN" value=BTN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td>{{ noneField name="POT_GU" value=POT_GU index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{"textType": "text-start"}' }}</td>
        <td>{{ noneField name="INC_AMT" value=INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_NUME" value=SEC_NUME index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_DENO" value=SEC_DENO index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_건물단가_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">CB_BUILD_CODE</th>
                <th class="hide">CB_BUILD_DAN</th>
                <th class="hide">DAN_REBUIL_YN</th>
                <th class="hide">DAN_REBUIL_DAN</th>
                <th class="hide">DAN_MANAGE_YN</th>
                <th class="hide">DAN_MANAGE_DAN</th>
                <th class="hide">DAN_REVISE_IDX</th>
                <th class="hide">SUB_AIRCON_YN</th>
                <th class="hide">SUB_AIRCON_DAN</th>
                <th class="hide">SUB_ELEVAT_YN</th>
                <th class="hide">SUB_ELEVAT_DAN</th>
                <th class="hide">SUB_SANITA_YN</th>
                <th class="hide">SUB_SANITA_DAN</th>
                <th class="hide">SUB_HYDRAN_YN</th>
                <th class="hide">SUB_HYDRAN_DAN</th>
                <th class="hide">SUB_ETC_YN</th>
                <th class="hide">SUB_ETC_DAN</th>
                <th class="hide">SUB_REVISE_DAN</th>
                <th class="hide">CB_YYYY</th>
                <th class="hide">ELAP_YEAR</th>
                <th class="hide">NUM_HOUSEHOLD</th>
                <th class="hide">NUM_YEAR</th>
                <th class="hide">OF_JANGA_RATE</th>
                <th class="hide">APAS_DAN</th>
                <th class="hide">APPL_DAN</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">DAN_APPLY_IDX</th>
                <th class="hide">DAN_APPLY_DESC</th>
                <th class="min-w-150px">등기구분</th>
                <th class="min-w-100px">층수</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_건물단가_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_건물단가_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <th class="hide">{{ noneField name="CB_BUILD_CODE" value=CB_BUILD_CODE index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="CB_BUILD_DAN" value=CB_BUILD_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="DAN_REBUIL_YN" value=DAN_REBUIL_YN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="DAN_REBUIL_DAN" value=DAN_REBUIL_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="DAN_MANAGE_YN" value=DAN_MANAGE_YN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="DAN_MANAGE_DAN" value=DAN_MANAGE_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="DAN_REVISE_IDX" value=DAN_REVISE_IDX index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_AIRCON_YN" value=SUB_AIRCON_YN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_AIRCON_DAN" value=SUB_AIRCON_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_ELEVAT_YN" value=SUB_ELEVAT_YN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_ELEVAT_DAN" value=SUB_ELEVAT_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_SANITA_YN" value=SUB_SANITA_YN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_SANITA_DAN" value=SUB_SANITA_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_HYDRAN_YN" value=SUB_HYDRAN_YN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_HYDRAN_DAN" value=SUB_HYDRAN_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_ETC_YN" value=SUB_ETC_YN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_ETC_DAN" value=SUB_ETC_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SUB_REVISE_DAN" value=SUB_REVISE_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="CB_YYYY" value=CB_YYYY index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="ELAP_YEAR" value=ELAP_YEAR index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="NUM_HOUSEHOLD" value=NUM_HOUSEHOLD index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="NUM_YEAR" value=NUM_YEAR index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="OF_JANGA_RATE" value=OF_JANGA_RATE index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="APAS_DAN" value=APAS_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="APPL_DAN" value=APPL_DAN index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="DAN_APPLY_IDX" value=DAN_APPLY_IDX index=index options='{}' }}</th>
        <th class="hide">{{ noneField name="DAN_APPLY_DESC" value=DAN_APPLY_DESC index=index options='{}' }}</th>
        <th>{{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{"textType": "text-center"}' }}</th>
        <th>{{ noneField name="CB_FLOOR" value=CB_FLOOR index=index options='{"textType": "text-end"}' }}</th>
    </tr>
</script>


<script id="DBGrid_건물평가액_집계표_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="min-w-100px">등기구분</th>
                <th class="min-w-100px">층수</th>
                <th class="min-w-100px">건물적용단가</th>
                <th class="min-w-100px">적용률</th>
                <th class="min-w-100px">산정단가</th>
                <th class="min-w-100px">적용단가</th>
                <th class="min-w-100px">면적</th>
                <th class="min-w-100px">평가가액</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_건물평가액_집계표_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_건물평가액_집계표_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td>{{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{"textType": "text-center"}' }}</td>
        <td>{{ noneField name="CB_FLOOR" value=CB_FLOOR index=index options='{"textType": "text-end"}' }}</td>
        <td>{{ noneField name="CB_BUILD_DAN" value=CB_BUILD_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="OF_JANGA_RATE" value=OF_JANGA_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APAS_DAN" value=APAS_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="APPL_DAN" value=APPL_DAN index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="INC_AMT" value=INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_담보_건물_Group_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="min-w-100px" rowspan="2">등기구분</th>
                <th class="min-w-100px" rowspan="2">평가가격</th>
                <th class="min-w-100px" colspan="3">담보제공비율</th>
                <th class="min-w-100px" rowspan="2">최종평가가액(원)</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th>분자</th>
                <th>분모</th>
                <th>비율</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_담보_건물_Group_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_담보_건물_Group_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td>{{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="INC_AMT" value=INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_NUME" value=SEC_NUME index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_DENO" value=SEC_DENO index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_담보_건물_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <tbody>
            {{#each .}}
                {{>DBGrid_담보_건물_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_담보_건물_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CB_DATE" value=CB_DATE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CB_STRUC" value=CB_STRUC index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CB_ROOF" value=CB_ROOF index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CB_FLOOR" value=CB_FLOOR index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CB_USE_MAIN" value=CB_USE_MAIN index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CB_SIZE" value=CB_SIZE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CB_SIZE_PY" value=CB_SIZE_PY index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_REGI_SIZE" value=SEC_REGI_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_OFFER_SIZE" value=SEC_OFFER_SIZE index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="hide">{{ noneField name="SEC_DESC" value=SEC_DESC index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td>{{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }}</td>
        <td>{{ noneField name="INC_AMT" value=INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_NUME" value=SEC_NUME index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_DENO" value=SEC_DENO index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="SEC_RATE" value=SEC_RATE index=index options='{"mask": "-;7;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_감정가액산출내역_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="w-50px">구분</th>
                <th class="w-100px">일단지구분</th>
                <th class="w-100px">지번</th>
                <th class="w-150px">평가액</th>
                <th class="w-150px">예상낙찰가</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_감정가액산출내역_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_감정가액산출내역_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="w-50px">{{ noneField name="NAME" value=NAME index=index options='{}' }}</td>
        <td class="w-100px">{{ noneField name="POT_GU" value=POT_GU index=index options='{"textType": "text-center"}' }}</td>
        <td class="w-100px">{{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{"textType": "text-start"}' }}</td>
        <td class="w-150px">{{ noneField name="FNL_INC_AMT_A" value=FNL_INC_AMT_A index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="w-150px">{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_감정가액산출내역_건물_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="w-50px">구분</th>
                <th class="w-100px">등기구분</th>
                <th class="w-150px">평가액</th>
                <th class="w-150px">예상낙찰가</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_감정가액산출내역_건물_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<%--응찰입력표--%>
<script id="DBGrid_감정가액산출내역_건물_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="w-50px">{{ noneField name="NAME" value=NAME index=index options='{}' }}</td>
        <td class="w-100px">{{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{"textType": "text-center"}' }}</td>
        <td class="w-150px">{{ noneField name="FNL_INC_AMT_A" value=FNL_INC_AMT_A index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="w-150px">{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_응찰_기일내역_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">년도</th>
                <th class="hide">일련번호</th>
                <th>회차</th>
                <th>일자</th>
                <th>금액</th>
                <th>유찰여부</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_응찰_기일내역_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_응찰_기일내역_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="년도" value=년도 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="일련번호" value=일련번호 index=index options='{}' }}</td>
        <td>{{ maskField name="회차" value=회차 index=index options='{}' }}</td>
        <td>{{ maskField name="일자" value=일자 index=index options='{}' }}</td>
        <td>{{ maskField name="금액" value=금액 index=index options='{}' }}</td>
        <td>{{ checkField name="유찰여부" value=유찰여부 index=index options='{ "on" : "Y", "off" : "N"}' }}</td>
    </tr>
</script>

<script id="DBGrid_응찰_권리내역_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">년도</th>
                <th class="hide">일련번호</th>
                <th class="hide">순번</th>
                <th>금액</th>
                <th>권리자</th>
                <th>권리내역</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_응찰_권리내역_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_응찰_권리내역_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="년도" value=년도 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="일련번호" value=일련번호 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="순번" value=순번 index=index options='{}' }} </td>
        <td>{{ maskField name="금액" value=금액 index=index options='{}' }} </td>
        <td>{{ inputField name="권리자" value=권리자 index=index options='{}' }} </td>
        <td>{{ inputField name="권리내역" value=권리내역 index=index options='{}' }} </td>
    </tr>
</script>

<script id="DBGrid_응찰_부담내역_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">년도</th>
                <th class="hide">일련번호</th>
                <th class="hide">순번</th>
                <th>금액</th>
                <th>권리자</th>
                <th>권리내역</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_응찰_부담내역_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_응찰_부담내역_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="년도" value=년도 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="일련번호" value=일련번호 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="순번" value=순번 index=index options='{}' }} </td>
        <td>{{ maskField name="금액" value=금액 index=index options='{}' }} </td>
        <td>{{ inputField name="권리자" value=권리자 index=index options='{}' }} </td>
        <td>{{ inputField name="권리내역" value=권리내역 index=index options='{}' }} </td>
    </tr>
</script>
<%--//응찰입력표--%>

<%--배당표1--%>
<script id="DBGrid_배당표_주택임대차보증금_계산_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">REP_AF_SEC_AMT</th>
                <th class="hide">FXDATE_YN_ORG</th>
                <th class="hide">POSS_A_RM_CNT_ORG</th>
                <th class="hide">LEASE_AMT_ORG</th>
                <th class="w-100px">각구의<br>일련번호</th>
                <th class="w-200px">1동의 건물 내에서의<br>주거용 부분인<br>각구의 위치</th>
                <th class="w-150px">1구의 건물내에 있는<br>주거용방의 총수</th>
                <th class="w-100px">확정일자<br>보유여부 </th>
                <th class="w-150px">가임대보증금을<br>적용한 방의 총수</th>
                <th class="w-150px">1구의 건물의<br>실제 임대차보증금</th>
                <th class="w-150px">최종 적용<br>가임대 보증금<br>(최우선변제 소액보증금)</th>
                <th class="w-150px">확정일자부<br>주택임대차 보증금</th>
                <th class="w-150px">확정일자 없는<br>주택임대차 보증금</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_배당표_주택임대차보증금_계산_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당표_주택임대차보증금_계산_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="REP_AF_SEC_AMT" value=REP_AF_SEC_AMT index=index options='{}' }} </td>
        <td class="hide">{{ checkField name="FXDATE_YN_ORG" value=FXDATE_YN_ORG index=index options='{ "on" : "Y", "off" : "N"}' }} </td>
        <td class="hide">{{ noneField name="POSS_A_RM_CNT_ORG" value=POSS_A_RM_CNT_ORG index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="LEASE_AMT_ORG" value=LEASE_AMT_ORG index=index options='{}' }} </td>
        <td class="w-100px">{{ comboField name="RNO" value=RNO index=index query='{"id": "Q_코드_각구의일련번호", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }} </td>
        <td class="w-200px">{{ inputField name="RESI_NAME" value=RESI_NAME index=index options='{}' }} </td>
        <td class="w-150px">{{ maskField name="RESI_RM_CNT" value=RESI_RM_CNT index=index options='{}' }} </td>
        <td class="w-100px">{{ checkField name="FXDATE_YN" value=FXDATE_YN index=index options='{ "on" : "Y", "off" : "N"}' }} </td>
        <td class="w-150px">{{ maskField name="POSS_A_RM_CNT" value=POSS_A_RM_CNT index=index options='{}' }} </td>
        <td class="w-150px">{{ maskField name="LEASE_AMT" value=LEASE_AMT index=index options='{}' }} </td>
        <td class="w-150px">{{ noneField name="REP_BE_SEC_AMT" value=REP_BE_SEC_AMT index=index options='{}' }} </td>
        <td class="w-150px">{{ noneField name="FXLEA_AMT" value=FXLEA_AMT index=index options='{}' }} </td>
        <td class="w-150px">{{ noneField name="FXLEA_NO_AMT" value=FXLEA_NO_AMT index=index options='{}' }} </td>
    </tr>
</script>

<script id="DBGrid_배당표_상가건물_임대차보증금_계산_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">REP_AF_SEC_AMT</th>
                <th class="w-100px">각구의<br>일련번호</th>
                <th class="w-150px">1동의 건물 내에서의<br>상업용 부분의 위치<br>및 면적</th>
                <th class="w-100px">가임대<br>적용여부</th>
                <th class="w-150px">임차인의 상호와 성명<br>(사업자등록 기준)</th>
                <th class="w-150px">상가임대차보증금</th>
                <th class="w-100px">확정일자<br>보유여부</th>
                <th class="w-150px">월세</th>
                <th class="w-150px">1구의 상가건물의<br>실제 임대차보증금<br>(보증금 + 환산보증금)</th>
                <th class="w-150px">최종적으로 적용되는<br>상가 가임대 보증금<br>(최우선변제 보증금)</th>
                <th class="w-150px">확정일자부<br>상가임대차 보증금</th>
                <th class="w-150px">확정일자부 없는<br>상가임대차 보증금</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_배당표_상가건물_임대차보증금_계산_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당표_상가건물_임대차보증금_계산_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="REP_AF_SEC_AMT" value=REP_AF_SEC_AMT index=index options='{}' }} </td>
        <td class="w-100px">{{ comboField name="RNO" value=RNO index=index query='{"id": "Q_코드_각구의일련번호", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }} </td>
        <td class="w-150px">{{ inputField name="C_DESC" value=C_DESC index=index options='{}' }} </td>
        <td class="w-100px">{{ checkField name="POSS_YN" value=POSS_YN index=index options='{ "on" : "Y", "off" : "N"}' }} </td>
        <td class="w-150px">{{ inputField name="HIR_NAME" value=HIR_NAME index=index options='{}' }} </td>
        <td class="w-150px">{{ maskField name="STO_LSEC_AMT" value=STO_LSEC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-100px">{{ checkField name="FXDATE_YN" value=FXDATE_YN index=index options='{ "on" : "Y", "off" : "N"}' }} </td>
        <td class="w-150px">{{ maskField name="MRENT_AMT" value=MRENT_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-150px">{{ noneField name="LEASE_AMT" value=LEASE_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-150px">{{ noneField name="REP_BE_SEC_AMT" value=REP_BE_SEC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-150px">{{ noneField name="FXLEA_AMT" value=FXLEA_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-150px">{{ noneField name="FXLEA_NO_AMT" value=FXLEA_NO_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
    </tr>
</script>
<%--//배당표1--%>

<%--배당표2--%>
<script id="DBGrid_배당금_계산M_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th>일단지구분</th>
                <th>지번</th>
                <th>예상낙찰가</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_배당금_계산M_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당금_계산M_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td>{{ noneField name="POT_GU" value=POT_GU index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ noneField name="LOT_NUM" value=LOT_NUM index=index options='{}' }}</td>
        <td>{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>

<script id="DBGrid_배당금_계산D_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
        <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
            <th class="hide">YYYY</th>
            <th class="hide">SEQ</th>
            <th class="hide">SHA_GU</th>
            <th class="hide">LN_SEQ</th>
            <th class="hide">RANK</th>
            <th class="hide">IS_ENABLE</th>
            <th class="hide">FLAG</th>
            <th class="hide">CRED_SELF_AMT_ORG</th>
            <th class="hide">CRED_COMB_AMT_ORG</th>
            <th class="hide">PRO_RATE_CODE</th>
            <th class="min-w-100px" rowspan="2">순위</th>
            <th class="min-w-100px" rowspan="2">권리발생일자</th>
            <th class="min-w-100px" rowspan="2">당사설정</th>
            <th class="min-w-100px" rowspan="2">권리자</th>
            <th class="min-w-350px" rowspan="2">권리의내용</th>
        </tr>
        <tr class="fw-bolder fs-7 text-gray-800 text-center">
            <th>말소여부</th>
            <th>단독담보</th>
            <th>공동담보</th>
        </tr>
        <tbody>
        {{#each .}}
            {{>DBGrid_배당금_계산D_템플릿_ROW index=@index}}
        {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당금_계산D_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="IS_ENABLE" value=IS_ENABLE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="FLAG" value=FLAG index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CRED_SELF_AMT_ORG" value=CRED_SELF_AMT_ORG index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CRED_COMB_AMT_ORG" value=CRED_COMB_AMT_ORG index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SHA_GU" value=SHA_GU index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RANK" value=RANK index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="PRO_RATE_CODE" value=PRO_RATE_CODE index=index options='{}' }}</td>
        <td>{{ comboField name="DISP_RANK" value=DISP_RANK index=index query='{"id": "Q_코드_순위", "text": "CD_DESC", "value": "CD_CODE", "조건": ""}' options='{}' }}</td>
        <td>{{ maskField name="RIGHT_DATE" value=RIGHT_DATE index=index options='{"mask": "yyyy-mm-dd", "maskType": "날짜", "textType": "text-center"}' }}</td>
        <td>{{ checkField name="HITE_YN" value=HITE_YN index=index isEnable=IS_ENABLE options='{ "on": "Y", "off": "N"}' }}</td>
        <td>{{ inputField name="RIGHT_PERSON" value=RIGHT_PERSON index=index options='{}' }}</td>
        <td>{{ comboField name="RIGHT_CODE" value=RIGHT_CODE index=index query='{"id": "Q_코드_권리의내용", "text": "CD_DESC", "value": "CD_CODE", "조건": ""}' options='{}' }}</td>
        <td>{{ checkField name="ERA_YN" value=ERA_YN index=index isEnable=IS_ENABLE options='{ "on": "Y", "off": "N"}' }}</td>
        <td>{{ maskField name="CRED_SELF_AMT" value=CRED_SELF_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="CRED_COMB_AMT" value=CRED_COMB_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>

<script id="DBGrid_배당금건물_계산M_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th>등기구분</th>
                <th>예상낙찰가</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_배당금건물_계산M_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당금건물_계산M_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td>{{ comboField name="REGI_GU" value=REGI_GU index=index query='{"id": "Q_코드_표준지구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{"textType": "text-center"}' }}</td>
        <td>{{ noneField name="FNL_INC_AMT" value=FNL_INC_AMT index=index options='{"mask": "-;7;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>

<script id="DBGrid_배당금건물_계산D_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                <th class="hide">CRED_SELF_AMT_ORG</th>
                <th class="hide">CRED_COMB_AMT_ORG</th>
                <th class="hide">PRO_RATE_CODE</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">SHA_GU</th>
                <th class="hide">RANK</th>
                <th class="hide">LN_SEQ</th>
                <th class="min-w-100px" rowspan="2">순위</th>
                <th class="min-w-100px" rowspan="2">권리발생일자</th>
                <th class="min-w-100px" rowspan="2">당사설정</th>
                <th class="min-w-100px" rowspan="2">권리자</th>
                <th class="min-w-100px" rowspan="2">권리의내용</th>
                <th class="min-w-100px" colspan="3">최권최고액</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th>말소여부</th>
                <th>단독담보</th>
                <th>공동담보</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_배당금건물_계산D_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당금건물_계산D_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="PRO_RATE_GU" value=PRO_RATE_GU index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="PRO_RATE_DIV" value=PRO_RATE_DIV index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="PRO_RATE_STEP" value=PRO_RATE_STEP index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="PRO_RATE_CYCLE" value=PRO_RATE_CYCLE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="FLAG" value=FLAG index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="IS_ENABLE" value=IS_ENABLE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CRED_SELF_AMT_ORG" value=CRED_SELF_AMT_ORG index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="CRED_COMB_AMT_ORG" value=CRED_COMB_AMT_ORG index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="PRO_RATE_CODE" value=PRO_RATE_CODE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SHA_GU" value=SHA_GU index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RANK" value=RANK index=index options='{}' }}</td>
        <td>{{ comboField name="DISP_RANK" value=DISP_RANK index=index query='{"id": "Q_코드_순위", "text": "CD_DESC", "value": "CD_CODE", "조건": ""}' options='{}' }}</td>
        <td>{{ maskField name="RIGHT_DATE" value=RIGHT_DATE index=index options='{"mask": "yyyy-mm-dd", "maskType": "날짜", "textType": "text-center"}' }}</td>
        <td>{{ checkField name="HITE_YN" value=HITE_YN index=index isEnable=IS_ENABLE options='{ "on": "Y", "off": "N"}' }}</td>
        <td>{{ inputField name="RIGHT_PERSON" value=RIGHT_PERSON index=index options='{}' }}</td>
        <td>{{ comboField name="RIGHT_CODE" value=RIGHT_CODE index=index query='{"id": "Q_코드_권리의내용", "text": "CD_DESC", "value": "CD_CODE", "조건": ""}' options='{}' }}</td>
        <td>{{ checkField name="ERA_YN" value=ERA_YN index=index isEnable=IS_ENABLE options='{ "on": "Y", "off": "N"}' }}</td>
        <td>{{ maskField name="CRED_SELF_AMT" value=CRED_SELF_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="CRED_COMB_AMT" value=CRED_COMB_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>
<%--//배당표2--%>

<%--문서관리--%>
<script id="DBGrid_사진관리_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">UPLOAD_FILE</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">FILE_NAME_TMP</th>
                <th>구분</th>
                <th>내용</th>
                <th>파일명</th>
                <th>찾기</th>
                <th>비고</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_사진관리_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_사진관리_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <th class="hide">{{ noneField name="UPLOAD_FILE" value=UPLOAD_FILE index=index options='{}' }} </th>
        <th class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }} </th>
        <th class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }} </th>
        <th class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }} </th>
        <th class="hide">{{ noneField name="FILE_NAME_TMP" value=FILE_NAME_TMP index=index options='{}' }} </th>
        <th>{{ comboField name="PHOTO_DIV" value=PHOTO_DIV index=index query='{"id": "Q_00_사진구분", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }} </th>
        <th>{{ inputField name="PHOTO_NAME" value=PHOTO_NAME index=index options='{}' }} </th>
        <th>{{ noneField name="FILE_NAME" value=FILE_NAME index=index options='{}' }} </th>
        <th>{{ buttonField name="찾기" value="찾기" index=index options='{ "iconType" : "button" }' }} </th>
        <th>{{ inputField name="REMARK" value=REMARK index=index options='{}' }} </th>
    </tr>
</script>


<script id="DBGrid_문서_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">UPLOAD_FILE</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">PHOTO_DIV</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">FILE_NAME_TMP</th>
                <th>내용</th>
                <th>파일명</th>
                <th>찾기</th>
                <th>비고</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_문서_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_문서_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="UPLOAD_FILE" value=UPLOAD_FILE index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="PHOTO_DIV" value=PHOTO_DIV index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="FILE_NAME_TMP" value=FILE_NAME_TMP index=index options='{}' }} </td>
        <td>{{ inputField name="PHOTO_NAME" value=PHOTO_NAME index=index options='{}' }} </td>
        <td>{{ noneField name="FILE_NAME" value=FILE_NAME index=index options='{}' }} </td>
        <td>{{ buttonField name="찾기" value="찾기" index=index options='{ "iconType" : "button" }' }}  </td>
        <td>{{ inputField name="REMARK" value=REMARK index=index options='{}' }} </td>
    </tr>
</script>
<%--//문서관리--%>

<!-- 팝업 grid -->
<script id="DBGrid_거래처_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">GEO_CODE</th>
                <th>상호(약호)</th>
                <th>사업자번호</th>
                <th>대표자명</th>
                <th>업태</th>
                <th>종목</th>
            </tr>
        </thead>
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
        <td><input type="text" value="{{ SANGHO }}" fieldName="SANGHO" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ SAUP_NO }}" fieldName="SAUP_NO" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ DAEPYO_NAME }}" fieldName="DAEPYO_NAME" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ UPTAE }}" fieldName="UPTAE" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ JONGMOK }}" fieldName="JONGMOK" readonly="readonly" disabled/></td>
    </tr>
</script>


<script id="DBGrid_주소_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">JUSO_FULL1</th>
                <th>우편번호</th>
                <th>주소</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_주소_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_주소_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide"><input type="text" value="{{ JUSO_FULL1 }}" fieldName="JUSO_FULL1" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ ZIP_CODE }}" fieldName="ZIP_CODE" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ JUSO_FULL }}" fieldName="JUSO_FULL" readonly="readonly" disabled/></td>
    </tr>
</script>


<script id="DBGrid_도로주소_목록_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">@ADDR</th>
                <th>우편번호</th>
                <th>주소</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_도로주소_목록_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_도로주소_목록_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide"><input type="text" value="{{ @ADDR }}" fieldName="@ADDR" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ ZIP_CD }}" fieldName="ZIP_CD" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ @TEXT }}" fieldName="@TEXT" readonly="readonly" disabled/></td>
    </tr>
</script>


<script id="DBGrid_감정요청자료_영업_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">DOC_KEY</th>
                <th class="hide">APPR_DATETIME</th>
                <th class="hide">JUM_CODE</th>
                <th class="hide">APPR_SABUN</th>
                <th class="hide">PROC_DIV</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th>결재일자</th>
                <th>문서명</th>
                <th>결재자성명</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_감정요청자료_영업_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_감정요청자료_영업_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide"><input type="text" value="{{ DOC_KEY }}" fieldName="DOC_KEY" readonly="readonly" disabled /></td>
        <td class="hide"><input type="text" value="{{ APPR_DATETIME }}" fieldName="APPR_DATETIME" readonly="readonly" disabled /></td>
        <td class="hide"><input type="text" value="{{ JUM_CODE }}" fieldName="JUM_CODE" readonly="readonly" disabled /></td>
        <td class="hide"><input type="text" value="{{ APPR_SABUN }}" fieldName="APPR_SABUN" readonly="readonly" disabled /></td>
        <td class="hide"><input type="text" value="{{ PROC_DIV }}" fieldName="PROC_DIV" readonly="readonly" disabled /></td>
        <td class="hide"><input type="text" value="{{ YYYY }}" fieldName="YYYY" readonly="readonly" disabled /></td>
        <td class="hide"><input type="text" value="{{ SEQ }}" fieldName="SEQ" readonly="readonly" disabled /></td>
        <td><input type="text" value="{{ ESTI_DATE }}" fieldName="ESTI_DATE" readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ DOC_NAME }}" fieldName="DOC_NAME"  readonly="readonly" disabled/></td>
        <td><input type="text" value="{{ NAME }}" fieldName="NAME" readonly="readonly" disabled/></td>
    </tr>
</script>
<!-- // 팝업 grid -->