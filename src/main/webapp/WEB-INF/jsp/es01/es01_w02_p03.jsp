<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>

<script src="/resources/js/ezgen/variable/es01_w02_p03.js"></script>
<script src="/resources/js/ezgen/macro/es01_w02_p03.js"></script>
<script src="/resources/js/ezgen/page/es01_w02_p03.js"></script>
<script src="/resources/js/ezgen/zoon/es01_w02_p03.js"></script>

<script type="text/javascript">
    componentsMap.set('page', PageType.기타);
    componentsMap.set('es', EsType.ES01);

    $(document).ready(function(){
        pageZoon.OnInitialize();
        pageEvent.init();
    });
</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>

    <style>
        .form-control[readonly]{background-color:#eff2f5 !important;}
        .form-control.form-control-transparent:enabled { background-color:#ffffff !important; border-color:#e4e6ef !important}
        .form-control.form-control-transparent:disabled { background-color:#eff2f5 !important; border-color:#e4e6ef !important}

        .form-select.form-select-transparent:enabled { background-color:#ffffff !important; border-color:#e4e6ef !important}
        .form-select.form-select-transparent:disabled { background-color:#eff2f5 !important; border-color:#e4e6ef !important}

        .hide { display:none; }
    </style>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>(집합) 오피스텔</title>
</head>

<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed">
<input type="hidden" id="Edit1">
<%--<textarea class="form-control" data-kt-autosize="true" id="RichEditor2" style="display: none"></textarea>--%>

<div class="d-flex flex-column flex-root">
    <div class="page d-flex flex-row flex-column-fluid">
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                <div class="d-flex flex-column-fluid">
                    <div id="kt_content_container" class="container-fluid">
                        <div class="row gy-5">
                            <div class="col-xxl-12">
                                <div class="card">
                                    <div class="card-header card-header-stretch">
                                        <div class="card-title d-flex align-items-center">
													<span class="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"></path>
															<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"></path>
														</svg>
													</span>
                                            <h3 class="fw-bolder m-0 text-gray-800">감정평가액 산출 자료 및 그 결정에 관한 의견</h3>
                                            <div class="ms-10 mt-2">
                                                <a href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" id="Picture7_출력">출력</a>
                                            </div>
                                        </div>
                                        <div class="card-toolbar m-0">
                                            <ul class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bolder" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a id="kt_activity_one_tab" class="nav-link justify-content-center text-active-gray-800 active" data-bs-toggle="tab" role="tab" href="#kt_activity_one" onclick="GotoPage('1')">1 Step</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a id="kt_activity_two_tab" class="nav-link justify-content-center text-active-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_two" onclick="GotoPage('4')">2 Step</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a id="kt_activity_three_tab" class="nav-link justify-content-center text-active-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_three" onclick="GotoPage('5')">3 Step</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a id="kt_activity_four_tab" class="nav-link justify-content-center text-active-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_four" onclick="GotoPage('2')">4 Step</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a id="kt_activity_five_tab" class="nav-link justify-content-center text-active-gray-800 text-hover-gray-800" data-bs-toggle="tab" role="tab" href="#kt_activity_five" onclick="GotoPage('3')">5 Step</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <div id="kt_activity_one" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="ㅅt_activity_one_tab">
                                                <h6>0. 본사 검증감정 의견</h6>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">①시가에 관한 의견</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_0_1"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">②토지, 건물가액 산출에 관한 의견</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_0_2"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">③낙찰가율 보정표 및 낙찰가 선정에 관한 의견</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_0_3"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">④배당표에 관한 의견</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_0_4"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">⑤기타</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_0_5"></textarea>
                                                </div>
                                            </div>
                                            <div id="kt_activity_two" class="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_two_tab">
                                                <h6>1. 담보취득 및 담보물에 관한 사항, 설정시 조건 및 재감정 필요시점, 공부상의 차이 등</h6>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">①담보취득에 관한 감정자의 의견(담보물의 위치, 담보취득의 목적 등)</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_1"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">②설정시 조건 (당사 설정 순위 및 예정액 등)</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_2"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">③공부상의 차이</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_3"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">④기타</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_4"></textarea>
                                                </div>
                                            </div>
                                            <div id="kt_activity_three" class="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_three_tab">
                                                <h6>2. 담보취득 및 담보물에 관한 사항, 설정시 조건 및 재감정 필요시점, 공부상의 차이 등</h6>
                                                <p class="mx-2 mb-1 fw-bolder">(1) 시가의 산출 근거</p>
                                                <p class="mx-5">1) 시가 (비준가격) 산출 자료 수집 내용</p>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">①대상지에 대한 일반적인 부동산 시가 조사내용</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_2_1_1_1"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">②대상자 인근 경매사례</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_2_1_1_2"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">③대상자 인근 매매사례</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_2_1_1_3"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">④실거래가</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_2_1_1_4"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">⑤인터넷 및 생활정보지 조사내용</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_2_1_1_5"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">⑥기타</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_2_1_1_6"></textarea>
                                                </div>
                                            </div>
                                            <div id="kt_activity_four" class="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_four_tab">
                                                <p class="mx-5 mb-0">2) 비교 표준지 선정 사유</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_1_2"></textarea>
                                                </div>
                                                <p class="mx-5 mb-0">3) 적정 시가 산출에 대한 감정자의 의견</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_1_3"></textarea>
                                                </div>
                                                <p class="mx-2 mb-1 fw-bolder">(2) 예상 제1차 최저입찰가 (평가가격) 산출근거</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true"></textarea>
                                                </div>
                                                <p class="mx-2 mb-1 fw-bolder">(3) 예상낙찰가 산출 근거</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <label for="" class="form-label">①당해지역 낙찰가율</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_3_1"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">②유사부동산 낙찰가율</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_3_2"></textarea>
                                                </div>
                                                <div class="d-flex flex-column p-5">
                                                    <label for="" class="form-label">③낙찰가율 임의 산출시 그 사유</label>
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_3_3"></textarea>
                                                </div>
                                                <p class="mx-2 mb-1 fw-bolder">(4) 감정대상 부동산 점검표</p>
                                                <p class="mx-5 mb-0">1) 임대차 현황 또는 거주자 현황-방의 수, 사용자, 보증금, 계약기간, 사용면적 또는 수</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_4_1"></textarea>
                                                </div>
                                            </div>
                                            <div id="kt_activity_five" class="card-body p-0 tab-pane fade show" role="tabpanel" aria-labelledby="kt_activity_five_tab">
                                                <p class="mx-5 mb-0">2) 토지의 상태 및 설비 현황, 기타의 법정지상권을 성립시키는 건출물 등 특이사항</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_4_2"></textarea>
                                                </div>
                                                <p class="mx-5 mb-0">3) 위치 및 주변환경</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_4_3"></textarea>
                                                </div>
                                                <p class="mx-5 mb-0">4) 인접 도로상태 및 교통상황</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_4_4"></textarea>
                                                </div>
                                                <p class="mx-5 mb-0">5) 부동산 거래 및 가격동향, 향후 가격변화 예상</p>
                                                <div class="d-flex flex-column p-5 pt-2">
                                                    <textarea class="form-control" data-kt-autosize="true" id="Edit_1_4_5"></textarea>
                                                </div>
                                                <p class="mx-2 mb-1 fw-bolder">(5) 감정 물건에 대한 조세 납부 확인</p>
                                                <div class="table-responsive">
                                                    <table class="table table-row-bordered table-rounded border text-center gs-5 gy-3 gx-5 mt-3 align-middle">
                                                        <thead class="bg-lighten">
                                                        <tr class="fw-bolder fs-7 text-gray-800">
                                                            <th>구분</th>
                                                            <th>부과일자</th>
                                                            <th>체납금액</th>
                                                            <th>가산금</th>
                                                            <th>부과원인</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td class="fw-bolder">국세</td>
                                                            <td><input type="text" id="Edit_국세_부과일자" class="form-control py-1 ps-2"></td>
                                                            <td><input type="text" id="Edit_국세_체납금액" class="form-control py-1 ps-2"></td>
                                                            <td><input type="text" id="Edit_국세_가산금" class="form-control py-1 ps-2"></td>
                                                            <td><input type="text" id="Edit_국세_부과원인" class="form-control py-1 ps-2"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="fw-bolder">지방세</td>
                                                            <td><input type="text" id="Edit_지방세_부과일자" class="form-control py-1 ps-2"></td>
                                                            <td><input type="text" id="Edit_지방세_체납금액" class="form-control py-1 ps-2"></td>
                                                            <td><input type="text" id="Edit_지방세_가산금" class="form-control py-1 ps-2"></td>
                                                            <td><input type="text" id="Edit_지방세_부과원인" class="form-control py-1 ps-2"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="fw-bolder">국세완납증명확인</td>
                                                            <td><input type="text" id="Edit_국세완납_부과일자" class="form-control py-1 ps-2"></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="fw-bolder">지방세완납증명확인</td>
                                                            <td><input type="text" id="Edit_지방세완납_부과일자" class="form-control py-1 ps-2"></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
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
</div>
</body>
</html>
