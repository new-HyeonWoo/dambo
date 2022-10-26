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

<script id="prt_42_appraisal_summary_template" type="text/html">
<table class="table table-row-bordered border table-hover align-middle gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th rowspan="2">구분</th>
			<th colspan="8" class="fw-normal text-center">전감정 내역</th>
		</tr>
		<tr class="fw-bolder fs-7 text-gray-800">
			<th colspan="4" class="fw-normal text-center">지점감정서</th>
			<th colspan="4" class="fw-normal text-center">본사 검증감정서</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="fw-bolder fs-7 text-gray-800">1. 감정일</td>
			<td class="fs-10 text-gray-800" colspan="4">{{#list}}{{지점_감정일}}{{/list}}</td>
			<td class="fs-10 text-gray-800" colspan="4">{{#list}}{{본사_감정일}}{{/list}}</td>
		</tr>
		<tr>
			<td rowspan="2" class="fw-bolder fs-7 text-gray-800">2. 감정자</td>
			<td class="fs-7 text-gray-800">담당자</td>
			<td class="fs-7 text-gray-800">파트장</td>
			<td class="fs-7 text-gray-800">팀장</td>
			<td class="fs-7 text-gray-800">지점장</td>
			<td class="fs-7 text-gray-800">1차결제</td>
			<td class="fs-7 text-gray-800">2차결제</td>
			<td class="fs-7 text-gray-800">3차결제</td>
			<td class="fs-7 text-gray-800">관제파트장</td>
		</tr>
		<tr class="fs-10 text-gray-800 text-nowrap">
			<td>{{#list}} {{지점_감정자_담당자}} {{/list}}</td>
			<td>{{#list}} {{지점_감정자_파트장}} {{/list}}</td>
			<td>{{#list}} {{지점_감정자_팀장}} {{/list}}</td>
			<td>{{#list}} {{지점_감정자_지점장}} {{/list}}</td>
			<td>{{#list}} {{본사_감정자_1차결재}} {{/list}}</td>
			<td>{{#list}} {{본사_감정자_2차결재}} {{/list}}</td>
			<td>{{#list}} {{본사_감정자_3차결재}} {{/list}}</td>
			<td>{{#list}} {{본사_감정자_관재파트장}} {{/list}}</td>
		</tr>
		<tr class="text-gray-800">
			<td class="fw-bolder fs-7">3. 제1차예상입찰가</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#지점_제1차예상입찰가}} {{지점_제1차예상입찰가}} 원{{/지점_제1차예상입찰가}}{{/list}}</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#본사_제1차예상입찰가}} {{본사_제1차예상입찰가}} 원{{/본사_제1차예상입찰가}}{{/list}}</td>
		</tr>
		<tr class="text-gray-800">
			<td class="fw-bolder fs-7">4. 예상낙찰가율</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#지점_예상낙찰가율}} {{지점_예상낙찰가율}} %{{/지점_예상낙찰가율}}{{/list}}</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#본사_예상낙찰가율}} {{본사_예상낙찰가율}} %{{/본사_예상낙찰가율}}{{/list}}</td>
		</tr>
		<tr class="text-gray-800">
			<td class="fw-bolder fs-7">5. 예상낙찰가</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#지점_예상낙찰가}} {{지점_예상낙찰가}} 원{{/지점_예상낙찰가}}{{/list}}</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#본사_예상낙찰가}} {{본사_예상낙찰가}} 원{{/본사_예상낙찰가}}{{/list}}</td>
		</tr>
		<tr class="text-gray-800">
			<td class="fw-bolder fs-7">6. 담보여력</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#지점_담보여력}} {{지점_담보여력}} 원{{/지점_담보여력}}{{/list}}</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#본사_담보여력}} {{본사_담보여력}} 원{{/본사_담보여력}}{{/list}}</td>
		</tr>
		<tr class="text-gray-800">
			<td class="fw-bolder fs-7">7. 당사채권금액</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#지점_당사채권금액}} {{지점_당사채권금액}} 원{{/지점_당사채권금액}}{{/list}}</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{#본사_당사채권금액}} {{본사_당사채권금액}} 원{{/본사_당사채권금액}} {{/list}}</td>
		</tr>
		<tr class="text-gray-800">
			<td class="fw-bolder fs-7">8. 당사순익 및 등기권리</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{지점_당사순위및등기권리}} {{/list}}</td>
			<td class="text-end fs-10" colspan="4">{{#list}} {{본사_당사순위및등기권리}} {{/list}}</td>
		</tr>
	</tbody>
</table>
</script>

<script id="prt_40_auction_template" type="text/html">
<table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-normal fs-7 text-gray-800">
			<th>사건번호</th>
			<th class="fs-10" colspan="3">{{#list}} {{사항_사건번호}} {{/list}}</th>
			<th>관할법원</th>
			<th class="fs-10" colspan="3">{{#list}} {{사항_관할법원}} {{/list}}</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th>경매구분</th>
			<th class="fs-10" colspan="3">{{#list}} {{사항_경매구분}} {{/list}}</th>
			<th>경매계</th>
			<th class="fs-10" colspan="3">{{#list}} {{사항_경매계}} {{/list}}</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th>경매신청채권자</th>
			<th class="fs-10">{{#list}} {{사항_경매신청채권자}} {{/list}}</th>
			<th>청구금액</th>
			<th class="fs-10">{{#list}} {{#사항_청구금액}} {{사항_청구금액}} 원{{/사항_청구금액}}{{/list}}</th>
			<th>경매개시등기일</th>
			<th class="fs-10">{{#list}} {{사항_경매개시등기일}} {{/list}}</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th colspan="6" class="text-center">기일내역</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th>회차</th>
			<th>일자</th>
			<th class="text-center" colspan="2">금액</th>
			<th>유찰여부</th>
			<th></th>
		</tr>
		{{#prt41}}
			<tr class="fw-normal fs-10 text-gray-800 text-nowrap">
				<th>{{회차}}</th>
				<th>{{일자}}</th>
				<th class="text-end" colspan="2">{{#금액}} {{금액}} 원{{/금액}}</th>
				<th>{{유찰여부}}</th>
				<th></th>
			</tr>
		{{/prt41}}
		{{^prt41}}
			<tr>
				<th></th>
				<th></th>
				<th colspan="2"></th>
				<th></th>
				<th></th>
			</tr>
		{{/prt41}}
		<tr class="fw-normal fs-7 text-gray-800">
			<th>유입시특이사항</th>
			<th class="fs-10" colspan="5">{{#list}}{{사항_유입시특이사항}}{{/list}}</th>
		</tr>
	</thead>
</table>
</script>

<script id="prt_40_auction_scheduled_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="bg-lighten align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th>가격 구분</th>
			<th>부동산구분</th>
			<th>가격총액</th>
			<th>m<sup>2</sup>당 가격</th>
			<th>평당 가격</th>
		</tr>
	</thead>
	<tbody>
		<tr class="fs-7 text-gray-800">
			<td rowspan="3" class="fw-bolder">1. 법원감정가</td>
			<td>토지</td>
			<th class="fs-10">{{#list}} {{#내용_법원감정가_토지_가격총액}} {{내용_법원감정가_토지_가격총액}} 원{{/내용_법원감정가_토지_가격총액}}{{/list}}</th>
			<th class="fs-10">{{#list}} {{#내용_법원감정가_토지_단가 }} {{내용_법원감정가_토지_단가 }} 원/m<sup>2</sup>{{/내용_법원감정가_토지_단가 }}{{/list}}</th>
			<th class="fs-10">{{#list}} {{#내용_법원감정가_토지_평당가격}} {{내용_법원감정가_토지_평당가격}} 원/평{{/내용_법원감정가_토지_평당가격}}{{/list}}</th>
		</tr>
		<tr class="text-gray-800 fs-7">
			<td>건물</td>
			<td class="fs-10">{{#list}} {{#내용_법원감정가_건물_가격총액}} {{내용_법원감정가_건물_가격총액}} 원{{/내용_법원감정가_건물_가격총액}} {{/list}}</td>
			<td class="fs-10">{{#list}} {{#내용_법원감정가_건물_단가}} {{내용_법원감정가_건물_단가}} 원/m<sup>2</sup>{{/내용_법원감정가_건물_단가}} {{/list}} </td>
			<td class="fs-10">{{#list}} {{#내용_법원감정가_건물_평당가격}} {{내용_법원감정가_건물_평당가격}} 원/평{{/내용_법원감정가_건물_평당가격}} {{/list}}</td>
		</tr>
		<tr class="text-gray-800 fs-7">
			<td>합계</td>
			<td class="fs-10">{{#list}} {{#내용_법원감정가_합계_가격총액}} {{내용_법원감정가_합계_가격총액}} 원{{/내용_법원감정가_합계_가격총액}} {{/list}}</td>
			<td></td>
			<td></td>
		</tr>
		<tr class="text-gray-800 fs-7">
			<td colspan="2" class="fw-bolder">2. 입찰예정가</td>
			<td class="fs-10">{{#list}} {{#내용_입찰예정가_금액}} {{내용_입찰예정가_금액}} 원{{/내용_입찰예정가_금액}} {{/list}}</td>
			<td>예상낙찰가율</td>
			<td class="fs-10">{{#list}} {{#내용_낙찰가율}} {{내용_낙찰가율}} %{{/내용_낙찰가율}} {{/list}}</td>
		</tr>
	</tbody>
</table>
</script>

<script id="prt_40_expected_dividend_template" type="text/html">
<table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
	<thead class="align-middle">
		<tr class="fw-normal fs-7 text-gray-800">
			<th>경매비용</th>
			<th class="fs-10">{{#list}} {{#집계표_경매비용개산_적용금액}} {{집계표_경매비용개산_적용금액}}  원{{/집계표_경매비용개산_적용금액}} {{/list}}</th>
			<th>선순위 배당금 합계</th>
			<th colspan="3" class="fs-10">{{#list}} {{#집계표_선순위자배당금합계}} {{집계표_선순위자배당금합계}} 원{{/집계표_선순위자배당금합계}} {{/list}}</th>
		</tr>
		<tr class="fw-normal fs-7 text-gray-800">
			<th>당사의 채권최고액 합계</th>
			<th class="fs-10">{{#list}} {{#집계표_당사채권최고액합계}} {{집계표_당사채권최고액합계}} 원{{/집계표_당사채권최고액합계}} {{/list}}</th>
			<th>당사의 배당금 합계</th>
			<th class="fs-10">{{#list}} {{#집계표_당사배당금합계}} {{집계표_당사배당금합계}} 원{{/집계표_당사배당금합계}} {{/list}}</th>
			<th>당사의 미회수 채권액</th>
			<th class="fs-10">{{#list}} {{#집계표_당사의미회수채권액}} {{집계표_당사의미회수채권액}} 원{{/집계표_당사의미회수채권액}} {{/list}}</th>
		</tr>
	</thead>
</table>
</script>

<script id="prt_40_expected_balance_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="align-middle">
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" rowspan="10">1. 유입비용 및 수익의 분석</th>
			<th class="fw-bolder" rowspan="2">경락후 말소되지 않는 선순위 권리 내역</th>
			<th>낙찰인이 인수하는 선수위 권리내역 존재여부</th>
			<th class="fs-10 text-nowrap">{{#list}} {{수지9_권리내역_존재여부}} {{/list}}</th>
			<th>내역합계</th>
			<th class="fs-10 text-nowrap">{{#list}} {{수지9_권리내역_건수}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th>낙찰인이 인수하는 선순위 금액</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지1_경락후_부담비용합계}} {{수지1_경락후_부담비용합계}} 원{{/수지1_경락후_부담비용합계}} {{/list}}</th>
			<th rowspan="4">총취득원가 합계</th>
			<th class="fs-10 text-nowrap" rowspan="4">{{#list}} {{#수지4_총취득원가합계}} {{수지4_총취득원가합계}} 원{{/수지4_총취득원가합계}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" rowspan="3">취득</th>
			<th>입찰예정가</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#내용_입찰예정가_금액}} {{내용_입찰예정가_금액}} 원{{/내용_입찰예정가_금액}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th>제세금</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지4_제세금}} {{수지4_제세금}} 원{{/수지4_제세금}}{{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th>기타비율</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지4_기타비용}} {{수지4_기타비용}} 원{{/수지4_기타비용}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" rowspan="2">보유</th>
			<th>수익</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지5_보유수익합계}} {{수지5_보유수익합계}} 원{{/수지5_보유수익합계}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th>비용</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지6_보유비용합계}} {{수지6_보유비용합계}}  원{{/수지6_보유비용합계}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" rowspan="2">예상매각금액</th>
			<th>추정 예상 매각금액</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지3_추정예상매각금액}} {{수지3_추정예상매각금액}} 원{{/수지3_추정예상매각금액}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th>매각확신금액</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지3_매각확신금액}} {{수지3_매각확신금액}} 원{{/수지3_매각확신금액}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder">처분</th>
			<th>비용</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지7_처분비용합계}} {{수지7_처분비용합계}} 원{{/수지7_처분비용합계}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" rowspan="3">2. 항목별 집계</th>
			<th class="fw-bolder" colspan="2">비용의 합계</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지8_각항목별합계_비용합계}} {{수지8_각항목별합계_비용합계}} 원{{/수지8_각항목별합계_비용합계}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" colspan="2">수익의 합계</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지8_각항목별합계_수익합계}} {{수지8_각항목별합계_수익합계}} 원{{/수지8_각항목별합계_수익합계}} {{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" colspan="2">예상손익</th>
			<th class="fs-10 text-nowrap">{{#list}} {{#수지8_각항목별합계_예상손익}} {{수지8_각항목별합계_예상손익}} 원{{/수지8_각항목별합계_예상손익}}{{/list}}</th>
		</tr>
		<tr class="fs-7 text-gray-800">
			<th class="fw-bolder" colspan="3">3. 최종적인 전체손익</th>
			<th class="fs-10 text-nowrap" >{{#list}} {{#수지8_최종적인전체손익}} {{수지8_최종적인전체손익}} 원{{/수지8_최종적인전체손익}} {{/list}}</th>
		</tr>
	</thead>
</table>
</script>

<script id="prt_40_final_inflow_template" type="text/html">
<table class="table table-row-bordered border gs-5 gy-3 gx-5">
	<thead class="align-middle">
		<tr class="fw-bolder fs-7 text-gray-800">
			<th class="fs-3">응찰여부의 결정</th>
			<th>{{#list}}{{수지8_응찰여부결정}}{{/list}}</th>
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
			<td class="text-end fs-10 text-nowrap">{{#prt11}} {{#실거래가_총액}} {{실거래가_총액}} 원{{/실거래가_총액}} {{/prt11}}</td>
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


<script type="text/javascript">
	var yyyy = requestYYYY;
	var seq = requestSEQ;
	
	componentsMap.set('page', PageType.토지);
	componentsMap.set('es', EsType.ES83);
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
				<h5>Ⅳ. 전감정서 개요(담보설정시점의 감정내용 요약)</h5>
				<div id="prt_42_appraisal_summary" class="table-responsive"></div>
				<h5>Ⅴ. 경매에 관한 사항</h5>
				<div id="prt_40_auction" class="table-responsive"></div>
				<h5 style="page-break-before:always">Ⅵ. 경매입찰 예정내용</h5>
				<div id="prt_40_auction_scheduled" class="table-responsive"></div>
				<h5>Ⅶ. 예상배당집계표</h5>
				<div id="prt_40_expected_dividend"class="table-responsive"></div>
				<h5 style="page-break-before:always">Ⅷ. 취득, 보유, 처분에 따른 비용과 수익 및 예상수지</h5>
				<div id="prt_40_expected_balance" class="table-responsive"></div>
				<h5>Ⅸ. 최종유입 판단여부</h5>
				<div id="prt_40_final_inflow" class="table-responsive"></div>
			</div>
		</div>
	</div>
<script type="text/javascript" src="<c:url value='/resources/js/util/util.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_00.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_02.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_03.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_11.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_22.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_40.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_41.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/es83/es83_w04/prt_42.js'/>"></script>

</body>
</html>