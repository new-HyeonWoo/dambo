<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/type/component.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>하이트 진로</title>

<script id="prt_00_title_template" type="text/html">
	<h4>{{#list}}{{담보종류명}}{{/list}}</h4>
</script>

<script id="prt_00_emotional_state_template" type="text/html">
	<h5 class="text-danger">{{#list}}{{감정상태}}{{/list}}</h5>
</script>

<script id="prt_00_sentiment_template" type="text/html">
	<table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
		<thead class="bg-lighten align-middle">
			<tr class="fs-7 text-gray-800">
				<th class="fw-bolder">감정일</th>
				{{#list}}
					<th class="fs-10">{{담보감정일자}}</th>
				{{/list}}
				<th class="fw-bolder">감정자</th>
				{{#list}}
					<th class="fs-10">{{지점명}}</th>
				{{/list}}
			</tr>
		</thead>
	</table>
</script>

<script id="prt_00_correspondent_template" type="text/html">
	<table class="table table-row-bordered border table-hover align-middle gs-5 gy-3 gx-5">
		<thead class="bg-lighten align-middle">
			<tr class="fs-7 text-gray-800">
				<th class="fw-bolder">1. 제1차 거래처</th>
				<th class="fw-normal fs-10">{{#list}} {{거래처명}} {{/list}}</th>
				<th class="fw-bolder">대표자</th>
				<th class="fw-normal fs-10">{{#list}} {{거래처대표자}} {{/list}}</th>
			</tr>
			<tr class="fs-7 text-gray-800">
				<th class="fw-bolder">2. 업소명</th>
				<th class="fw-normal fs-10">{{#list}} {{업소명}} {{/list}}</th>
				<th class="fw-bolder">대표자</th>
				<th class="fw-normal fs-10">{{#list}} {{업소대표자}} {{/list}}</th>
			</tr>
			<tr class="fs-7 text-gray-800">
				<th class="fw-bolder">3. 채무자</th>
				<th class="fw-normal fs-10">{{#list}} {{채무자}} {{/list}}</th>
				<th class="fw-bolder">5. 채무자와 담보제공자의 관계</th>
				<th class="fw-normal fs-10">{{#list}} {{채무자와담보제공자와의관계}} {{/list}}</th>
			</tr>
			<tr class="fs-7 text-gray-800">
				<th class="fw-bolder">4. 담보제공자</th>
				<th class="fw-normal fs-10">{{#list}} {{담보제공자}} {{/list}}</th>
				<th class="fw-bolder">6. 이 담보물에 대한 재감정 여부</th>
				<th class="fw-normal fs-10">{{#list}} {{임시_재감정여부}} {{/list}}</th>
			</tr>
		</thead>
	</table>
</script>

<script id="prt_31_rank_history_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th colspan="6">1. 선순위 내역</th>
		</tr>
		<tr>
			<th rowspan="2">순위</th>
			<th rowspan="2">권리 발생일자</th>
			<th rowspan="2">권리자</th>
			<th rowspan="2">권리의 내용</th>
			<th class="text-center" colspan="2">채권 최고액</th>
		</tr>
		<tr>
			<th class="text-end">단독담보</th>
			<th class="text-end">공동담보</th>
		</tr>
	</thead>
	<tbody>
		{{#list}}
			<tr class="fs-10 text-nowrap">
				<td>{{표시순위명}}</td>
				<td>{{권리발생일자}}</td>
				<td>{{권리자}}</td>
				<td>{{권리의내용코드명}}</td>
				<td class="text-end">{{#채권금액_단독담보}} {{채권금액_단독담보}} 원{{/채권금액_단독담보}}</td>
				<td class="text-end">{{#채권금액_공동담보}} {{채권금액_공동담보}} 원{{/채권금액_공동담보}}</td>
			</tr>
		{{/list}}
        {{^list}}
            <tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
            </tr>
       {{/list}}
	</tbody>
	<tfoot>
		<tr class="fs-10 text-nowrap text-gray-800">
			<td>합계</td>
			<td></td>
			<td></td>
			<td></td>
			<td class="text-end">{{#list_tot}} {{#PRT_31_담보사항_선순위내역_단독담보_tot}} {{PRT_31_담보사항_선순위내역_단독담보_tot}} 원{{/PRT_31_담보사항_선순위내역_단독담보_tot}} {{/list_tot}}</td>
			<td class="text-end">{{#list_tot}} {{#PRT_31_담보사항_선순위내역_공동담보_tot}} {{PRT_31_담보사항_선순위내역_공동담보_tot}} 원{{/PRT_31_담보사항_선순위내역_공동담보_tot}} {{/list_tot}}</td>
		</tr>
	</tfoot>
</table>
</script>

<script id="prt_31_rank_history_delete_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th colspan="6">1. 선순위 내역</th>
		</tr>
		<tr>
			<th rowspan="2">순위</th>
			<th rowspan="2">권리 발생일자</th>
			<th rowspan="2">권리자</th>
			<th rowspan="2">권리의 내용</th>
			<th class="text-center" colspan="2">채권 최고액</th>
		</tr>
		<tr class="text-end">
			<th>단독담보</th>
			<th>공동담보</th>
		</tr>
	</thead>
		{{#list}}
			<tr class="fs-10 text-nowrap">
				<td>{{표시순위명}}</td>
				<td>{{권리발생일자}}</td>
				<td>{{권리자}}</td>
				<td>{{권리의내용코드명}}</td>
				<td class="text-end">{{#채권금액_단독담보}} {{채권금액_단독담보}} 원{{/채권금액_단독담보}}</td>
				<td class="text-end">{{#채권금액_공동담보}} {{채권금액_공동담보}} 원{{/채권금액_공동담보}}</td>
			</tr>
		{{/list}}
        {{^list}}
            <tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
            </tr>
       {{/list}}
	<tfoot>
		<tr class="fs-10 text-nowrap text-gray-800">
			<td>합계</td>
			<td></td>
			<td></td>
			<td></td>
			<td class="text-end">{{#list_tot}} {{#PRT_31_담보사항_선순위말소예정내역_단독담보_tot}} {{PRT_31_담보사항_선순위말소예정내역_단독담보_tot}} 원{{/PRT_31_담보사항_선순위말소예정내역_단독담보_tot}} {{/list_tot}}</td>
			<td class="text-end">{{#list_tot}} {{#PRT_31_담보사항_선순위말소예정내역_공동담보_tot}} {{PRT_31_담보사항_선순위말소예정내역_공동담보_tot}} 원{{/PRT_31_담보사항_선순위말소예정내역_공동담보_tot}} {{/list_tot}} </td>
		</tr>
	</tfoot>
</table>
</script>

<script id="prt_31_our_settings_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr>
			<th class="fw-bolder fs-7 text-gray-800">3. 당사 설정예정 순위 및 금액</th>
			<th>설정순위</th>
			<th class="fs-10">{{#list}} {{#최종순위}} {{최종순위}} 순위{{/최종순위}} {{/list}}</th>
			<th>설정금액</th>
			<th class="fs-10">{{#list}} {{#채권금액}} {{채권금액}} 원{{/채권금액}}{{/list}}</th>
			<th>담보여력</th>
			<th class="fs-10">{{#prt31}} {{#담보여력}} {{담보여력}} 원{{/담보여력}} {{/prt31}}</th>
		</tr>
	</thead>
</table>
</script>

<script id="prt_31_lack_of_excess_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr>
			<th class="fw-bolder fs-7 text-gray-800">4. 초과 또는 부족 설정액</th>
			<th class="fs-10">{{#list}} {{초과_부족설정액}} {{/list}}</th>
		</tr>
	</thead>
</table>
</script>

<script id="prt_11_immovables_template" type="text/html">
<table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th>1. 토지의 표시</th>
			<th class="fw-normal">소재지</th>
			<th colspan="7" class="fw-normal">{{#prt11}} {{소재지_주소1}} {{/prt11}}</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th rowspan="2">일단지구분</th>
			<th rowspan="2">최소행정구역</th>
			<th rowspan="2">지번</th>
			<th rowspan="2">지목</th>
			<th colspan="2" class="text-center">감정대상 토지의 면적</th>
			<th colspan="2" class="text-center">개열공지시가</th>
			<th rowspan="2" class="text-end">공시지가총액</th>
		</tr>
		<tr class="fw-normal text-end fs-7 text-gray-800">
			<th>m<sup>2</sup></th>
			<th>평</th>
			<th>(원/m<sup>2</sup>)</th>
			<th>(원/평)</th>
		</tr>
	</thead>
	<tbody>
		{{#prt11_d}}
		<tr class="fs-10 text-nowrap">
			<td>{{일단지구분}}</td>
			<td>{{최소행정구역}}</td>
			<td>{{지번}}</td>
			<td>{{지목명}}</td>
			<td class="text-end">{{#토지_면적}} {{토지_면적}} m<sup>2</sup>{{/토지_면적}}</td>
			<td class="text-end">{{#토지_면적_평}} {{토지_면적_평}} 평{{/토지_면적_평}}</td>
			<td class="text-end">{{#토지_개별공시지가_단가}} {{토지_개별공시지가_단가}} 원/m<sup>2</sup>{{/토지_개별공시지가_단가}}</td>
			<td class="text-end">{{#토지_개별공시지가_단가_평}} {{토지_개별공시지가_단가_평}} 원/평{{/토지_개별공시지가_단가_평}}</td>
			<td class="text-end">{{#토지_개별공시지가}} {{토지_개별공시지가}} 원{{/토지_개별공시지가}}</td>
		</tr>
		{{/prt11_d}}
		{{^prt11_d}}
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		{{/prt11_d}}
	</tbody>
	<tfoot>
		{{#prt11_d_tot}}
		<tr class="fs-10 text-nowrap">
			<td>합계</td>
			<td></td>
			<td></td>
			<td></td>
			<td class="text-end">{{#토지_면적}} {{토지_면적}} m<sup>2</sup>{{/토지_면적}}</td>
			<td class="text-end">{{#토지_면적_평}} {{토지_면적_평}} 평{{/토지_면적_평}}</td>
			<td class="text-end">{{#토지_개별공시지가_단가}} {{토지_개별공시지가_단가}} 원/m<sup>2</sup>{{/토지_개별공시지가_단가}}</td>
			<td class="text-end">{{#토지_개별공시지가_단가_평}} {{토지_개별공시지가_단가_평}} 원/평{{/토지_개별공시지가_단가_평}}</td>
			<td class="text-end">{{#토지_개별공시지가}} {{토지_개별공시지가}} 원{{/토지_개별공시지가}} </td>
		</tr>
		{{/prt11_d_tot}}
		<tr>
			<td>법정지상권이 성립하는 이유</td>
			<td class="fs-10" colspan="8">{{#prt02}} {{법정지상권_성립사유}} {{/prt02}}</td>
		</tr>
		<tr>
			<td class="fs-10" colspan="8">{{#prt02}} {{임시_장래이용가능성}} {{/prt02}}</td>
		</tr>
	</tfoot>	
</table>
</script>

<script id="prt_03_immovables_template" type="text/html">
<table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th colspan="3">2. 토지에 대한 규제사항의 개관</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan="3">용도지역</td>
			<td>국토의 계획 및 이용에 관한 법률에 따른 지역·지구들</td>
			<td class="fs-10">{{#list}}{{국토계획}}{{/list}}</td>
		</tr>
		<tr>
			<td>다른 법률등에 따른 지역·지구들</td>
			<td class="fs-10">{{#list}}{{다른법률}}{{/list}}</td>
		</tr>
		<tr>
			<td>시행령 부칙 제3조에 따른 추가기재확인 내용</td>
			<td class="fs-10">{{#list}}{{시행령부칙}}{{/list}}</td>
		</tr>
		<tr>
			<td>"토지이용규제기본법시행령" 제9조 2항 각호에 해당되는 사항</td>
			<td class="fs-10" colspan="2">{{#list}}{{토지이용규제}}{{/list}}</td>
		</tr>
		<tr>
			<td>주변토지의 주된 이용현황</td>
			<td class="fs-10" colspan="2">{{#list}}{{주변부동산}}{{/list}}</td>
		</tr>
	</tbody>
</table>
</script>

<script id="prt_22_appraised_price_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th colspan="2">가격 구분</th>
			<th class="text-end">가격총액</th>
			<th class="text-end">m<sup>2</sup>당 가격</th>
			<th class="text-end">평당 가격</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan="2" class="fw-bolder fs-7 text-gray-800">1. 시가 (비준가격)</td>
			<td>최저가</td>
			<td class="text-end fs-10 text-nowrap">{{#list}} {{#MIN_AMT}} {{MIN_AMT}} 원{{/MIN_AMT}} {{/list}}</td>
			<td class="text-end fs-10 text-nowrap">{{#list}} {{#MIN_DAN}} {{MIN_DAN}} 원/m<sup>2</sup> {{/MIN_DAN}}{{/list}}</td>
			<td class="text-end fs-10 text-nowrap">{{#list}} {{#MIN_DAN_PY}} {{MIN_DAN_PY}} 원/평{{/MIN_DAN_PY}} {{/list}}</td>
		</tr>
		<tr>
			<td>최고가</td>
			<td class="text-end fs-10 text-nowrap">{{#list}} {{#MAX_AMT}} {{MAX_AMT}} 원{{/MAX_AMT}} {{/list}}</td>
			<td class="text-end fs-10 text-nowrap">{{#list}} {{#MAX_DAN}} {{MAX_DAN}} 원/m<sup>2</sup>{{/MAX_DAN}} {{/list}}</td>
			<td class="text-end fs-10 text-nowrap">{{#list}} {{#MAX_DAN_PY}} {{MAX_DAN_PY}}원/평 {{/MAX_DAN_PY}} {{/list}}</td>
		</tr>
		<tr>
			<td colspan="2" class="fw-bolder fs-7 text-gray-800">2. 실거래가격 (등기부상 실거래가격)</td>
			<td class="text-end fs-10 text-nowrapp">{{#prt11}} {{#실거래가_총액}} {{실거래가_총액}} 원{{/실거래가_총액}} {{/prt11}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt11}} {{#실거래가_단가}} {{실거래가_단가}} 원/m<sup>2</sup>{{/실거래가_단가}} {{/prt11}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt11}} {{#실거래가_단가_평}} {{실거래가_단가_평}} 원/평{{/실거래가_단가_평}} {{/prt11}}</td>
		</tr>
		<tr>
			<td colspan="2" class="fw-bolder fs-7 text-gray-800">3. 개별공지시가</td>
			<td class="text-end fs-10 text-nowrap">{{#prt11_d_tot}} {{#토지_개별공시지가}} {{토지_개별공시지가}} 원{{/토지_개별공시지가}} {{/prt11_d_tot}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt11_d_tot}} {{#토지_개별공시지가_단가_prt22}} {{토지_개별공시지가_단가_prt22}} 원/m<sup>2</sup>{{/토지_개별공시지가_단가_prt22}} {{/prt11_d_tot}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt11_d_tot}} {{#토지_개별공시지가_단가_평_prt22}} {{토지_개별공시지가_단가_평_prt22}} 원/평{{/토지_개별공시지가_단가_평_prt22}} {{/prt11_d_tot}}</td>
		</tr>
		<tr>
			<td colspan="2" class="fw-bolder fs-7 text-gray-800">4. 평가가격</td>
			<td class="text-end fs-10 text-nowrap">{{#prt22}} {{#평가가격}} {{평가가격}} 원{{/평가가격}} {{/prt22}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt22}} {{#평가가격_단가}} {{평가가격_단가}} 원/m<sup>2</sup>{{/평가가격_단가}} {{/prt22}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt22}} {{#평가가격_단가_평}} {{평가가격_단가_평}} 원/평{{/평가가격_단가_평}} {{/prt22}}</td>
		</tr>
	</tbody>
</table>
</script>

<script id="prt_11_collateral_template" type="text/html">
<table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
	<thead class="align-middle bg-lighten">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th colspan="8">1. 토지 담보제공 비율</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th rowspan="2">일단지구분</th>
			<th rowspan="2">지번</th>
			<th class="text-end" rowspan="2">전체면적</th>
			<th class="text-center" colspan="3">담보제공비율</th>
			<th class="text-end" rowspan="2">담보제공면적</th>
			<th class="text-end" rowspan="2">사유</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th class="text-end">분자</th>
			<th class="text-end">분모</th>
			<th class="text-end">비율</th>
		</tr>
	</thead>
	<tbody>
		{{#list}}
		<tr class="fs-10 text-nowrap">
			<td>{{일단지구분}}</td>
			<td>{{지번}}</td>
			<td class="text-end">{{담보제공비율_전체면적}}</td>
			<td class="text-end">{{담보제공비율_분자}}</td>
			<td class="text-end">{{담보제공비율_분모}}</td>
			<td class="text-end">{{담보제공비율_비율}}</td>
			<td class="text-end">{{담보제공비율_담보제공면적}}</td>
			<td>{{담보제공비율_사유}}</td>
		</tr>
		{{/list}}
		{{^list}}
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		{{/list}}
	</tbody>
	<tfoot>
		{{#prt11_d_tot}}
		<tr>
			<td>합계</td>
			<td></td>
			<td class="text-end fs-10 text-nowrap">{{담보제공비율_전체면적}}</td>
			<td class="text-end"></td>
			<td class="text-end"></td>
			<td class="text-end"></td>
			<td class="text-end fs-10 text-nowrap">{{담보제공비율_담보제공면적}}</td>
			<td></td>
		</tr>
		{{/prt11_d_tot}}
	</tfoot>
</table>
</script>

<script id="prt_22_lowest_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th>가격 구분</th>
			<th>가격총액</th>
			<th class="text-center">m<sup>2</sup>당 가격</th>
			<th class="text-end">평당 가격</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="fw-bolder fs-7 text-gray-800">1. 제 1차 예상 최저입찰가(최종 평가가격)</td>
			<td class="fs-10 text-nowrap">{{#prt22}} {{#최종평가_금액}} {{최종평가_금액}} 원{{/최종평가_금액}} {{/prt22}}</td>
			<td class="text-center fs-10 text-nowrap">{{#prt22}} {{#최종평가_단가}} {{최종평가_단가}} 원/m<sup>2</sup>{{/최종평가_단가}} {{/prt22}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt22}} {{#최종평가_단가_평}} {{최종평가_단가_평}} 원/평{{/최종평가_단가_평}} {{/prt22}}</td>
		</tr>
		<tr>
			<td class="fw-bolder fs-7 text-gray-800">2. 예상낙찰가</td>
			<td class="fs-10 text-nowrap">{{#prt22}} {{#예상낙찰가_금액}} {{예상낙찰가_금액}} 원{{/예상낙찰가_금액}} {{/prt22}}</td>
			<td class="text-center fs-10 text-nowrap">{{#prt22}} {{#예상낙찰가_단가}} {{예상낙찰가_단가}} 원/m<sup>2</sup>{{/예상낙찰가_단가}} {{/prt22}}</td>
			<td class="text-end fs-10 text-nowrap">{{#prt22}} {{#예상낙찰가_단가_평}} {{예상낙찰가_단가_평}} 원/평{{/예상낙찰가_단가_평}} {{/prt22}}</td>
		</tr>
	</tbody>
</table>
</script>

<script type="text/javascript">
	var yyyy = requestYYYY;
	var seq = requestSEQ;
	
	componentsMap.set('page', PageType.토지);
	componentsMap.set('es', EsType.ES81);
</script>
</head>
<body>
	<div class="col-xxl-12">
		<div class="card" id="print">
			<div id ="prt_00_title" class ="text-center mb-5 mt-5"></div>
			<div id ="prt_00_emotional_state" class ="text-end"></div>
			<div class="card-body">
				<div id="prt_00_sentiment" class="table-responsive"></div>
				<h5>Ⅰ. 거래처 등의 표시</h5>
				<div id="prt_00_correspondent" class="table-responsive"></div>
				<h5>Ⅱ. 부동산의 표시</h5>
				<div id="prt_11_immovables" class="table-responsive"></div>
				<div id="prt_03_immovables" class="table-responsive"></div>
				<h5 style="page-break-before:always">Ⅲ. 감정가격에 대한 표시</h5>
				<div id="prt_22_appraised_price" class="table-responsive"></div>
				<h5>Ⅳ. 담보제공비율</h5>
				<div id="prt_11_collateral" class="table-responsive"></div>
				<h5 style="page-break-before:always">Ⅴ. 예상 1차 최저입찰가 및 낙찰가 등의 추정</h5>
				<div id="prt_22_lowest"  class="table-responsive"></div>
				<h5>Ⅵ. 담보에 관한 사항</h5>
				<div id="prt_31_rank_history" class="table-responsive"></div>
				<div id="prt_31_rank_history_delete" class="table-responsive"></div>
				<div id="prt_31_rank_history_delete" class="table-responsive"></div>
				<div id="prt_31_our_settings" class="table-responsive"></div>
				<div id="prt_31_lack_of_excess" class="table-responsive"></div>
			</div>
		</div>
	</div>
<script type="text/javascript" src="<c:url value='/resources/js/util/util.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es81/es81_w04/prt_00.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es81/es81_w04/prt_02.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es81/es81_w04/prt_03.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es81/es81_w04/prt_11.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es81/es81_w04/prt_22.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es81/es81_w04/prt_31.js'/>"></script>
</body>
</html>