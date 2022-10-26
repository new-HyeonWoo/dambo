<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>

<script type="text/javascript">
    componentsMap.set('page', PageType.공통);
    componentsMap.set('es', EsType.ES82);

    $(document).ready(function(){
        function convert(_type, _value) {
            if (_type == 'price') {
                return _value.toLocaleString('ko-KR');;
            } else if (_type == 'date') {
                return _value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
            } else if (_type == 'float') {
                return _value.toFixed(2);
            } else {
                return _value;
            }
        }

        function RunAndRender(id, params) {
            let _Query = RunAndReturnQuery(id, params, 'GET');

            for (let _name in _Query.at()) {
                let _target = $('#' + _name);
                let _value = convert(_target.data('type'), _Query.at()[_name]);
                _target.html(_value);
            }
        }

        RunAndRender('PRT_재감정비교표', {
            'YYYY': GetValue('년도'),
            'SEQ': GetValue('감정순번'),
            '_이전년도': GetValue('_이전년도'),
            '_이전담보순번': GetValue('_이전담보순번')
        });
        RunAndRender('PRT_재감정시주요변동사항', {
            'YYYY': GetValue('년도'),
            'SEQ': GetValue('감정순번')
        });

        var initBodyHtml;


        function beforePrint() {
            initBodyHtml = document.body.innerHTML;
            document.body.innerHTML = document.getElementById('print').innerHTML;
        }
        function afterPrint() {
            document.body.innerHTML = initBodyHtml;
        }

        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;
    });
</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">

<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed">
<div class="d-flex align-items-center justify-content-start gap-4 mb-2 text-nowrap">
    <a id="test" href="javascript:window.print()" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
        <i class="fas fa-file-alt"></i>인쇄
    </a>
</div>
<div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                <div class="d-flex flex-column-fluid">
                    <div id="print" class="container-fluid">
                        <div class="row gy-5">
                            <div class="col-xxl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5>
													<span class="svg-icon svg-icon-primary svg-icon-2hx">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
															<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
														</svg>
													</span>
                                            재감정시 전감정사항 비교표
                                        </h5>
                                        <div id="kt_content_container">
                                            <div class="table-responsive">
                                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3 align-middle">
                                                    <thead class="bg-lighten">
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th rowspan="2" colspan="4">구분</th>
                                                        <th colspan="2">전감정</th>
                                                        <th colspan="2">재감정</th>
                                                        <th colspan="2">차이</th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th>지점감정</th>
                                                        <th>본사검증감정</th>
                                                        <th>지점감정</th>
                                                        <th>본사검증감정</th>
                                                        <th>지점감정</th>
                                                        <th>본사검증감정</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td colspan="4">감정일</td>
                                                        <td data-type="date" id="ESTI_DATE_11"></td>
                                                        <td data-type="date" id="ESTI_DATE_12"></td>
                                                        <td data-type="date" id="ESTI_DATE_21"></td>
                                                        <td data-type="date" id="ESTI_DATE_22"></td>
                                                        <td data-type="date" id="MON_CNT_91"></td>
                                                        <td data-type="date" id="MON_CNT_92"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">감정자</td>
                                                        <td id="JUM_SABUN_11"></td>
                                                        <td id="JUM_SABUN_12"></td>
                                                        <td id="JUM_SABUN_21"></td>
                                                        <td id="JUM_SABUN_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">제1차 예상입찰가<br>최종평가가격</td>
                                                        <td data-type="price" id="PLMIN_BID_AMT_11"></td>
                                                        <td data-type="price" id="PLMIN_BID_AMT_12"></td>
                                                        <td data-type="price" id="PLMIN_BID_AMT_21"></td>
                                                        <td data-type="price" id="PLMIN_BID_AMT_22"></td>
                                                        <td data-type="price" id="PLMIN_BID_AMT_91"></td>
                                                        <td data-type="price" id="PLMIN_BID_AMT_92"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">예상낙찰가</td>
                                                        <td data-type="price" id="PL_BID_AMT_11"></td>
                                                        <td data-type="price" id="PL_BID_AMT_12"></td>
                                                        <td data-type="price" id="PL_BID_AMT_21"></td>
                                                        <td data-type="price" id="PL_BID_AMT_22"></td>
                                                        <td data-type="price" id="PL_BID_AMT_91"></td>
                                                        <td data-type="price" id="PL_BID_AMT_92"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">당사설정금액 담보여력</td>
                                                        <td data-type="price" id="SPARE_SEC_AMT_11"></td>
                                                        <td data-type="price" id="SPARE_SEC_AMT_12"></td>
                                                        <td data-type="price" id="SPARE_SEC_AMT_21"></td>
                                                        <td data-type="price" id="SPARE_SEC_AMT_22"></td>
                                                        <td data-type="price" id="SPARE_SEC_AMT_91"></td>
                                                        <td data-type="price" id="SPARE_SEC_AMT_92"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2" rowspan="2">담보제공면적</td>
                                                        <td colspan="2">토지</td>
                                                        <td data-type="float" id="L_SIZE_11"></td>
                                                        <td data-type="float" id="L_SIZE_12"></td>
                                                        <td data-type="float" id="L_SIZE_21"></td>
                                                        <td data-type="float" id="L_SIZE_22"></td>
                                                        <td data-type="float" id="L_SIZE_91"></td>
                                                        <td data-type="float" id="L_SIZE_92"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">면적</td>
                                                        <td id="B_SIZE_11"></td>
                                                        <td id="B_SIZE_12"></td>
                                                        <td id="B_SIZE_21"></td>
                                                        <td id="B_SIZE_22"></td>
                                                        <td id="B_SIZE_91"></td>
                                                        <td id="B_SIZE_92"></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">이용현황</td>
                                                        <td colspan="2">주용도</td>
                                                        <td id="USE_DESC_11"></td>
                                                        <td id="USE_DESC_12"></td>
                                                        <td id="USE_DESC_21"></td>
                                                        <td id="USE_DESC_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">지목</td>
                                                        <td id="LCATEGORY_11"></td>
                                                        <td id="LCATEGORY_12"></td>
                                                        <td id="LCATEGORY_21"></td>
                                                        <td id="LCATEGORY_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="5" class="text-vertical">토지에 대한 규제사항의개관</td>
                                                        <td rowspan="3">지역 지구 등 지정여부</td>
                                                        <td colspan="2">국토의 계획 및 이용에 관한 법률에 따른 지역, 지구 등</td>
                                                        <td id="REST_PL_USE_11"></td>
                                                        <td id="REST_PL_USE_12"></td>
                                                        <td id="REST_PL_USE_21"></td>
                                                        <td id="REST_PL_USE_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">다른 법률 등에 따른 지역, 지구 등</td>
                                                        <td id="REST_OT_LAW_11"></td>
                                                        <td id="REST_OT_LAW_12"></td>
                                                        <td id="REST_OT_LAW_21"></td>
                                                        <td id="REST_OT_LAW_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">시행령 부칙 제3조에 따른 추가 기재확인 내용</td>
                                                        <td id="REST_EN_RULE_11"></td>
                                                        <td id="REST_EN_RULE_12"></td>
                                                        <td id="REST_EN_RULE_21"></td>
                                                        <td id="REST_EN_RULE_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3 rotate">"토지이용규제기본법시행령" 제9조 제2항 각호에 해당되는 사항</td>
                                                        <td id="REST_FU_LAW_11"></td>
                                                        <td id="REST_FU_LAW_12"></td>
                                                        <td id="REST_FU_LAW_21"></td>
                                                        <td id="REST_FU_LAW_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3">주변 부동산의 주된 이용현황</td>
                                                        <td id="REST_MAIN_USE_11"></td>
                                                        <td id="REST_MAIN_USE_12"></td>
                                                        <td id="REST_MAIN_USE_21"></td>
                                                        <td id="REST_MAIN_USE_22"></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="10">
                                                            * 재감정시 주요 변동사항 또는 변동원인
                                                            <div id="MENT_ITEMS"></div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
