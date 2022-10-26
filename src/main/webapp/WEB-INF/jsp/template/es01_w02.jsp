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

<script id="DBGrid_가격사례_M_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-nowrap text-center">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="min-w-50px">사례번호</th>
                <th class="min-w-150px">아파트명</th>
                <th class="min-w-200px">소재지</th>
                <th>선택</th>
                <th class="min-w-80px">건축년도</th>
                <th class="min-w-80px">세대수</th>
            </tr>
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_가격사례_M_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_가격사례_M_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td>{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{"textType": "text-center"}' }}</td>
        <td>{{ inputField name="B_NAME" value=B_NAME index=index options='{"textType": "text-start"}' }}</td>
        <td>{{ inputField name="JUSO" value=JUSO index=index query='{"id" : "Q_DUAL_여부", "text" : "CD_DESC", "value" : "CD_CODE", "textType": "text-start"}' options='{}' }}</td>
        <td>{{ buttonField name="BTN" value="BTN" index=index options='{ "iconType" : "search" }' }}</td>
        <td>{{ inputField name="B_YEAR" value=B_YEAR index=index  options='{"mask": "-;4;####", "maskType": "숫자", "textType": "text-center"}' }}</td>
        <td>{{ maskField name="HOUSE_CNT" value=HOUSE_CNT index=index  options='{"mask": "-;4;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>

<script id="DBGrid_가격사례_D_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-nowrap text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">사례번호</th>
                <th class="hide">생성번호</th>
                <th class="hide">면적(㎡)</th>
                <th rowspan="2">선택</th>
                <th class="col-1" rowspan="2">평형</th>
                <th colspan="4">시세조사내용</th>
                <th colspan="2">평균 전세수준</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-nowrap text-center">
                <th>최저가격(원)</th>
                <th>최고가격(원)</th>
                <th>평균가격(원)</th>
                <th>평당단가(원)</th>
                <th>전세금(원)</th>
                <th>전세금/평균가격(%)</th>
            </tr>   
        </thead>
        <tbody>
            {{#each .}}
                {{>DBGrid_가격사례_D_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_가격사례_D_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="RNO" value=RNO index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="B_SIZE" value=B_SIZE index=index options='{}' }}</td>
        <td>{{ checkField name="CHECK_YN" value=CHECK_YN index=index options='{ "on": "1", "off": "0", "isGroup" : true }' }}</td>
        <td>{{ maskField name="B_SIZE_PY" value=B_SIZE_PY index=index options='{"mask": "-;4;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="CURR_MIN_AMT" value=CURR_MIN_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="CURR_MAX_AMT" value=CURR_MAX_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="CURR_AVG_AMT" value=CURR_AVG_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="CURR_PY_DAN" value=CURR_PY_DAN index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="LEASE_AMT" value=LEASE_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="LEASE_RATE" value=LEASE_RATE index=index options='{"mask": "-;14;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td> 
    </tr>
</script>

<script id="DBGrid_경매사례_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-nowrap text-center">
                <th class="hide">LN_SEQ</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">면적(㎡)</th>
                <th>선택</th>
                <th class="min-w-110px">경매사건번호</th>
                <th class="min-w-150px">아파트명</th>
                <th class="min-w-250px">소재지</th>
                <th class="min-w-50px">선택</th>
                <th class="min-w-50px">총층수</th>
                <th class="min-w-50px">층수</th>
                <th class="min-w-50px">평형</th>
                <th class="min-w-200px">법원감정가(원)</th>
                <th class="min-w-200px">평당단가</th>
                <th class="min-w-200px">낙찰가격(원)</th>
                <th class="min-w-200px">낙찰가율(%)</th>
            </tr>
        </thead>
        <tbody>
        {{#each .}}
            {{>DBGrid_경매사례_템플릿_ROW index=@index}}
        {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_경매사례_템플릿_ROW" type="text/x-handlebars-template">
    <tr class="">
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="B_SIZE" value=B_SIZE index=index options='{}' }}</td>
        <td>{{ checkField name="CHECK_YN" value=CHECK_YN index=index options='{ "on": "1", "off": "0", "isGroup" : false }' }}</td>
        <td>{{ inputField name="AU_NO" value=AU_NO index=index options='{}' }}</td>
        <td>{{ inputField name="B_NAME" value=B_NAME index=index options='{}' }}</td>
        <td>{{ inputField name="JUSO" value=JUSO index=index options='{}' }}</td>
        <td>{{ buttonField name="주소팝업" value="주소팝업" index=index options='{ "iconType" : "search" }' }}</td>
        <td>{{ maskField name="TOT_FLOOR" value=TOT_FLOOR index=index options='{"mask": "-;3;###", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="FLOOR" value=FLOOR index=index options='{"mask": "-;3;###", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="B_SIZE_PY" value=B_SIZE_PY index=index options='{"mask": "-;4;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="LAW_AMT" value=LAW_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="CURR_PY_DAN" value=CURR_PY_DAN index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="BID_AMT" value=BID_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="BID_RATE" value=BID_RATE index=index options='{"mask": "-;14;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }}</td>
    </tr>
</script>


<script id="DBGrid_본건_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-middle bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-nowrap text-center">
                <th class="hide">CHECK_FLAG</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">면적(㎡)</th>
                <th rowspan="2">선택</th>
                <th class="col-1" rowspan="2">평형</th>
                <th colspan="4">시세조사내역</th>
                <th colspan="2">평균 전세수준</th>
            </tr>
            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                <th>최저가격(원)</th>
                <th>최고가격(원)</th>
                <th>평균가격(원)</th>
                <th>평당단가</th>
                <th>전세금(원)</th>
                <th>전세금/평균가격(%)</th>
            </tr>
        </thead>    
        <tbody>
        {{#each .}}
            {{>DBGrid_본건_템플릿_ROW index=@index}}
        {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_본건_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="CHECK_FLAG" value=CHECK_FLAG index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="B_SIZE" value=B_SIZE index=index options='{"mask": "-;8;#,###1", "maskType": "숫자"}' }}</td>
        <td>{{ checkField name="CHECK_YN" value=CHECK_YN index=index options='{ "on": "1", "off": "0", "isGroup" : true }' }}</td>
        <td>{{ maskField name="B_SIZE_PY" value=B_SIZE_PY index=index options='{"mask": "-;8;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="CURR_MIN_AMT" value=CURR_MIN_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="CURR_MAX_AMT" value=CURR_MAX_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="CURR_AVG_AMT" value=CURR_AVG_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="CURR_PY_DAN" value=CURR_PY_DAN index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ maskField name="LEASE_AMT" value=LEASE_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td>{{ noneField name="LEASE_RATE" value=LEASE_RATE index=index options='{"mask": "-;14;#,###1", "maskType": "숫자","textType": "text-end"}' }}</td>
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


<script id="DBGrid_배당표_주택임대차보증금_계산_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-nowrap text-center align-middle">
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">REP_AF_SEC_AMT</th>
                <th class="hide">FXDATE_YN_ORG</th>
                <th class="hide">POSS_A_RM_CNT_ORG</th>
                <th class="hide">LEASE_AMT_ORG</th>
                <th>각구의 일련번호</th>
                <th>1동의 건물 내에서의<br>주거용 부분인<br>각구의 위치</th>
                <th>1구의 건물내에 있는<br>주거용방의 총수</th>
                <th>확정일자<br>보유여부</th>
                <th>가임대보증금을<br>적용한 방의 총수</th>
                <th>1구의 건물의<br>실제 임대차보증금</th>
                <th>최종 적용<br>가임대 보증금<br>(최우선변제 소액보증금)</th>
                <th>확정일자부<br>주택임대차 보증금</th>
                <th>확정일자 없는<br>주택임대차 보증금</th>
            </tr>
        <tbody>
            {{#each .}}
                {{>DBGrid_배당표_주택임대차보증금_계산_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당표_주택임대차보증금_계산_템플릿_ROW" type="text/x-handlebars-template">
    <tr class="bg-white">
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="REP_AF_SEC_AMT" value=REP_AF_SEC_AMT index=index options='{}' }} </td>
        <td class="hide">{{ checkField name="FXDATE_YN_ORG" value=FXDATE_YN_ORG index=index options='{ "on" : "Y", "off" : "N"}' }} </td>
        <td class="hide">{{ noneField name="POSS_A_RM_CNT_ORG" value=POSS_A_RM_CNT_ORG index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="LEASE_AMT_ORG" value=LEASE_AMT_ORG index=index options='{}' }} </td>
        <td>{{ comboField name="RNO" value=RNO index=index query='{"id": "Q_코드_각구의일련번호", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }} </td>
        <td>{{ inputField name="RESI_NAME" value=RESI_NAME index=index options='{}' }} </td>
        <td>{{ maskField name="RESI_RM_CNT" value=RESI_RM_CNT index=index options='{"mask": "-;3;###", "maskType": "숫자","textType": "text-end"}' }}</td>
        <td>{{ checkField name="FXDATE_YN" value=FXDATE_YN index=index options='{ "on": "Y", "off": "N", "isGroup" : true }' }} </td>
        <td>{{ maskField name="POSS_A_RM_CNT" value=POSS_A_RM_CNT index=index options='{"mask": "-;3;###", "maskType": "숫자","textType": "text-end"}' }}</td>
        <td>{{ maskField name="LEASE_AMT" value=LEASE_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자","textType": "text-end"}' }} </td>
        <td>{{ noneField name="REP_BE_SEC_AMT" value=REP_BE_SEC_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자","textType": "text-end"}' }} </td>
        <td>{{ noneField name="FXLEA_AMT" value=FXLEA_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자","textType": "text-end"}' }} </td>
        <td>{{ noneField name="FXLEA_NO_AMT" value=FXLEA_NO_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자","textType": "text-end"}' }} </td>
    </tr>
</script>


<script id="DBGrid_배당금_계산_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800 text-nowrap text-center">
                <th class="hide">PRO_RATE_GU</th>
                <th class="hide">PRO_RATE_DIV</th>
                <th class="hide">PRO_RATE_STEP</th>
                <th class="hide">PRO_RATE_CYCLE</th>
                <th class="hide">FLAG</th>
                <th class="hide">CRED_SELF_AMT_ORG</th>
                <th class="hide">CRED_COMB_AMT_ORG</th>
                <th class="hide">YYYY</th>
                <th class="hide">SEQ</th>
                <th class="hide">SHA_GU</th>
                <th class="hide">LN_SEQ</th>
                <th class="hide">IS_ENABLE</th>
                <th class="hide">RANK</th>
                <th class="hide">PRO_RATE_CODE</th>
                <th>순위</th>
                <th>권리발생일자</th>
                <th>당사설정</th>
                <th>권리자</th>
                <th>권리의내용</th>
                <th>말소여부</th>
                <th>단독담보</th>
                <th>공동담보</th>
            </tr>
        </thead>    
        <tbody>
            {{#each .}}
                {{>DBGrid_배당금_계산_템플릿_ROW index=@index}}
            {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당금_계산_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="PRO_RATE_GU" value=PRO_RATE_GU index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PRO_RATE_DIV" value=PRO_RATE_DIV index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PRO_RATE_STEP" value=PRO_RATE_STEP index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PRO_RATE_CYCLE" value=PRO_RATE_CYCLE index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="FLAG" value=FLAG index=index options='{}' }} </td>
        <td class="hide">{{ maskField name="CRED_SELF_AMT_ORG" value=CRED_SELF_AMT_ORG index=index options='{}' }} </td>
        <td class="hide">{{ maskField name="CRED_COMB_AMT_ORG" value=CRED_COMB_AMT_ORG index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="YYYY" value=YYYY index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="SEQ" value=SEQ index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="SHA_GU" value=SHA_GU index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="LN_SEQ" value=LN_SEQ index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="IS_ENABLE" value=IS_ENABLE index=index options='{}' }} </td>
        <td class="hide">{{ comboField name="RANK" value=RANK index=index query='{"id": "Q_코드_순위", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }} </td>
        <td class="hide">{{ noneField name="PRO_RATE_CODE" value=PRO_RATE_CODE index=index options='{}' }} </td>
        <td>{{ comboField name="DISP_RANK" value=DISP_RANK index=index isDisableValue=IS_ENABLE query='{"id": "Q_코드_순위", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }} </td>
        <td>{{ maskField name="RIGHT_DATE" value=RIGHT_DATE index=index options='{"mask": "yyyy-mm-dd", "maskType": "날짜", "textType": "text-center"}' }} </td>
        <td>{{ checkField name="HITE_YN" value=HITE_YN index=index isEnable=IS_ENABLE options='{ "on": "Y", "off": "N"}' }} </td>
        <td>{{ inputField name="RIGHT_PERSON" value=RIGHT_PERSON index=index isDisableValue=IS_ENABLE options='{}' }} </td>
        <!-- combo 조건 확인필요 -->
        <td>{{ comboField name="RIGHT_CODE" value=RIGHT_CODE index=index isDisableValue=IS_ENABLE query='{"id": "Q_코드_권리의내용", "text": "CD_DESC", "value": "CD_CODE"}' options='{}' }} </td>
        <td>{{ checkField name="ERA_YN" value=ERA_YN index=index isEnable=IS_ENABLE options='{ "on": "Y", "off": "N"}' }} </td>
        <td>{{ noneField name="CRED_SELF_AMT" value=CRED_SELF_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td>{{ maskField name="CRED_COMB_AMT" value=CRED_COMB_AMT index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
    </tr>
</script>


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
        <th>{{ buttonField name="BTN" value="BTN" index=index options='{ "iconType" : "button" }' }} </th>
        <th>{{ inputField name="REMARK" value=REMARK index=index options='{}' }} </th>
    </tr>
</script>


<script id="DBGrid_문서_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-lighten">
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


<script id="DBGrid_수익가격_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary">
            <tr class="fw-bolder fs-7 text-gray-800">
                <th class="hide">년도</th>
                <th class="hide">일련번호</th>
                <th class="hide">단위당연간임대료</th>
                <th class="hide">전용면적</th>
                <th class="hide">소재지_비교치</th>
                <th class="hide">시점_본건_일자</th>
                <th class="hide">시점_본건_적용율</th>
                <th class="hide">시점_사례_적용율</th>
                <th class="hide">시점_비교치</th>
                <th class="hide">층별비교_본건</th>
                <th class="hide">층별비교_본건_적용율</th>
                <th class="hide">층별비교_사례</th>
                <th class="hide">층별비교_사례_적용율</th>
                <th class="hide">층별비교_비교치</th>
                <th class="hide">위치별비교_본건_적용율</th>
                <th class="hide">위치별비교_사례_적용율</th>
                <th class="hide">위치별비교_비교치</th>
                <th class="hide">잔가율비교_비교치</th>
                <th class="hide">도로조건_본건_적용율</th>
                <th class="hide">도로조건_사례_적용율</th>
                <th class="hide">도로조건_비교치</th>
                <th class="hide">접근조건_사례_적용율</th>
                <th class="hide">접근조건_비교치</th>
                <th class="hide">기타조건_본건_적용율</th>
                <th class="hide">기타조건_사례</th>
                <th class="hide">기타조건_사례_적용율</th>
                <th class="hide">기타조건_비교치</th>
                <th class="hide">환원이율</th>
                <th class="hide">환산금액</th>
                <th class="hide">적용단위당임료</th>
                <th class="hide">사례구분</th>
                <th class="hide">사례번호</th>
                <th>사례구분</th>
                <th>사례번호</th>
                <th>요인합계</th>
                <th>시점수정</th>
                <th>수익단가</th>
            </tr>
        </thead>
        <tbody>
        {{#each .}}
        {{>DBGrid_수익가격_템플릿_ROW index=@index}}
        {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_수익가격_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="년도" value=년도 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="일련번호" value=일련번호 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="단위당연간임대료" value=단위당연간임대료 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="전용면적" value=전용면적 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="소재지_비교치" value=소재지_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="시점_본건_일자" value=시점_본건_일자 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="시점_본건_적용율" value=시점_본건_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="시점_사례_적용율" value=시점_사례_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="시점_비교치" value=시점_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="층별비교_본건" value=층별비교_본건 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="층별비교_본건_적용율" value=층별비교_본건_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="층별비교_사례" value=층별비교_사례 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="층별비교_사례_적용율" value=층별비교_사례_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="층별비교_비교치" value=층별비교_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="위치별비교_본건_적용율" value=위치별비교_본건_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="위치별비교_사례_적용율" value=위치별비교_사례_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="위치별비교_비교치" value=위치별비교_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="잔가율비교_비교치" value=잔가율비교_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="도로조건_본건_적용율" value=도로조건_본건_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="도로조건_사례_적용율" value=도로조건_사례_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="도로조건_비교치" value=도로조건_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="접근조건_사례_적용율" value=접근조건_사례_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="접근조건_비교치" value=접근조건_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="기타조건_본건_적용율" value=기타조건_본건_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="기타조건_사례" value=기타조건_사례 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="기타조건_사례_적용율" value=기타조건_사례_적용율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="기타조건_비교치" value=기타조건_비교치 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="환원이율" value=환원이율 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="환산금액" value=환산금액 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="적용단위당임료" value=적용단위당임료 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="사례구분" value=사례구분 index=index options='{}' }}</td>
        <td class="hide">{{ noneField name="사례번호" value=사례번호 index=index options='{}' }}</td>
        <td>{{ noneField name="사례구분명" value=사례구분명 index=index options='{}' }} </td>
        <td>{{ noneField name="사례번호명" value=사례번호명 index=index options='{}' }} </td>
        <td>{{ noneField name="요인합계" value=요인합계 index=index options='{}' }}</td>
        <td>{{ noneField name="시점_사례_일자" value=시점_사례_일자 index=index options='{}' }} </td>
        <td>{{ noneField name="수익단가_평" value=수익단가_평 index=index options='{}' }} </td>
    </tr>
</script>

<!-- 팝업 grid -->
<script id="DBGrid_거래처_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary text-nowrap text-center">
        <tr class="fw-bolder fs-7 text-gray-800">
            <th class="d-none">GEO_CODE</th>
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
        <td class="d-none"><input type="text" value="{{ GEO_CODE }}" fieldName="GEO_CODE" readonly="readonly" disabled/></td>
        <td><input type="text" class="form-control form-control-transparent fs-7  py-0 ps-0 mx-2 min-w-100" value="{{ SANGHO }}" fieldName="SANGHO" readonly="readonly" disabled/></td>
        <td><input type="text" class="form-control form-control-transparent fs-7 text-center py-0 ps-0 mx-2 min-w-100" value="{{ SAUP_NO }}" fieldName="SAUP_NO" readonly="readonly" disabled/></td>
        <td><input type="text" class="form-control form-control-transparent fs-7  py-0 ps-0 mx-2 min-w-100" value="{{ DAEPYO_NAME }}" fieldName="DAEPYO_NAME" readonly="readonly" disabled/></td>
        <td><input type="text" class="form-control form-control-transparent fs-7  py-0 ps-0 mx-2 min-w-100" value="{{ UPTAE }}" fieldName="UPTAE" readonly="readonly" disabled/></td>
        <td><input type="text" class="form-control form-control-transparent fs-7  py-0 ps-0 mx-2 min-w-100" value="{{ JONGMOK }}" fieldName="JONGMOK" readonly="readonly" disabled/></td>
    </tr>
</script>


<script id="DBGrid_주소_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary text-nowrap">
        <tr class="fw-bolder fs-7 text-gray-800">
            <th class="hide">JUSO_FULL1</th>
            <th>우편번호</th>
            <th>주소</th>
        </tr>
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
        <thead class="align-top bg-secondary text-nowrap">
        <tr class="fw-bolder fs-7 text-gray-800">
            <th class="hide">@ADDR</th>
            <th>우편번호</th>
            <th>주소</th>
        </tr>
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
        <thead class="align-top bg-secondary text-nowrap">
        <tr class="fw-bolder fs-7 text-gray-800 text-center">
            <th class="d-none">DOC_KEY</th>
            <th class="d-none">APPR_DATETIME</th>
            <th class="d-none">JUM_CODE</th>
            <th class="d-none">APPR_SABUN</th>
            <th class="d-none">PROC_DIV</th>
            <th class="d-none">YYYY</th>
            <th class="d-none">SEQ</th>
            <th>결재일자</th>
            <th>문서명</th>
            <th>결재자성명</th>
        </tr>
        <tbody>
        {{#each .}}
            {{>DBGrid_감정요청자료_영업_템플릿_ROW index=@index}}
        {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_감정요청자료_영업_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="d-none"><input type="text" value="{{ DOC_KEY }}" fieldName="DOC_KEY" readonly="readonly" disabled /></td>
        <td class="d-none"><input type="text" value="{{ APPR_DATETIME }}" fieldName="APPR_DATETIME" readonly="readonly" disabled /></td>
        <td class="d-none"><input type="text" value="{{ JUM_CODE }}" fieldName="JUM_CODE" readonly="readonly" disabled /></td>
        <td class="d-none"><input type="text" value="{{ APPR_SABUN }}" fieldName="APPR_SABUN" readonly="readonly" disabled /></td>
        <td class="d-none"><input type="text" value="{{ PROC_DIV }}" fieldName="PROC_DIV" readonly="readonly" disabled /></td>
        <td class="d-none"><input type="text" value="{{ YYYY }}" fieldName="YYYY" readonly="readonly" disabled /></td>
        <td class="d-none"><input type="text" value="{{ SEQ }}" fieldName="SEQ" readonly="readonly" disabled /></td>
        <td><input type="text" class="form-control form-control-transparent fs-7 text-center py-0 ps-0 mx-2 min-w-100" value="{{ ESTI_DATE }}" fieldName="ESTI_DATE" readonly="readonly" disabled/></td>
        <td><input type="text" class="form-control form-control-transparent fs-7 py-0 ps-0 mx-2 min-w-100" value="{{ DOC_NAME }}" fieldName="DOC_NAME"  readonly="readonly" disabled/></td>
        <td><input type="text" class="form-control form-control-transparent fs-7 py-0 ps-0 mx-2 min-w-100" value="{{ NAME }}" fieldName="NAME" readonly="readonly" disabled/></td>
    </tr>
</script>
<!-- // 팝업 grid -->

</body>
</html>