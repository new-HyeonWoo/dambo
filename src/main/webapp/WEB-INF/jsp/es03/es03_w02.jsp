<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/jsp/template/es03_w02.jsp" %>

<script type="text/javascript">
    componentsMap.set('page', PageType.공통);
    componentsMap.set('es', EsType.ES03W02);

    $(document).ready(function(){
        pageZoon.OnInitialize();

        pageEvent.init();
    });
</script>
<script src="/resources/js/es03/variable/es03_w02.js"></script>
<script src="/resources/js/es03/macro/es03_w02.js"></script>
<script src="/resources/js/es03/page/es03_w02.js"></script>
<script src="/resources/js/es03/zoon/es03_w02.js"></script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>통계정보</title>

</head>
<body>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar" id="kt_toolbar">
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                    <h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">통계검색</h1>
                    <span class="h-20px border-gray-300 border-start mx-4"></span>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <li class="breadcrumb-item text-muted">통계정보</li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-300 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-dark">통계검색</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column-fluid">
            <div id="kt_content_container" class="container-fluid">
                <div class="row gy-5">
                    <div class="col-xxl-12 mb-1">
                        <div class="card card-jinro card-rounded-custom">
                            <div class="card-body py-3">
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-12">
                        <div class="card">
                            <div class="card-body">
                                <ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6" id="TabControl1">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_1">조회조건</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">조회내용</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3">그래프</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <input type="hidden" id="Label_소재지코드" />
                                    <input type="hidden" id="Label_담보종류코드" />
                                    <input type="hidden" id="Label_지목별코드" />
                                    <input type="hidden" id="Formula_소재지" />
                                    <input type="hidden" id="Formula_감정일자_부터">
                                    <input type="hidden" id="Formula_감정일자_까지">
                                    <input type="hidden" id="Edit_거래처코드" />

                                    <div class="tab-pane fade tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                                        <div class="d-flex justify-content-end">
                                            <div>
                                                <a href="javascript:void(0)" id="Command_조회" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">조회</a>
                                            </div>
                                        </div>
                                        <div class="table-responsive table-scroll">
                                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                                <thead class="bg-secondary align-middle">
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">담보감정일자</th>
                                                        <th class="bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-5">
                                                                    <div class="row">
                                                                        <div class="col-4">
                                                                            <div class="row">
                                                                                <div class="col-8">
                                                                                    <div id="Combo_부터_년도"></div>
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">년</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-4">
                                                                            <div class="row">
                                                                                <div class="col-8">
                                                                                    <div id="Combo_부터_월"></div>
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">월</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-4">
                                                                            <div class="row">
                                                                                <div class="col-8">
                                                                                    <div id="Combo_부터_일자"></div>
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">일 부터</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-5">
                                                                    <div class="row">
                                                                        <div class="col-4">
                                                                            <div class="row">
                                                                                <div class="col-8">
                                                                                    <div id="Combo_까지_년도"></div>
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">년</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-4">
                                                                            <div class="row">
                                                                                <div class="col-8">
                                                                                    <div id="Combo_까지_월"></div>
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">월</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-4">
                                                                            <div class="row">
                                                                                <div class="col-8">
                                                                                    <div id="Combo_까지_일자"></div>
                                                                                </div>
                                                                                <div class="col-4">
                                                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">일 까지</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder" rowspan="2">소재지</th>
                                                        <th class="fw-bolder">지역별</th>
                                                        <th class="fw-bolder bg-white">
                                                            <div class="row">
                                                                <div class="col-3">
                                                                    <div id="Combo_우편번호_시도"></div>
                                                                </div>
                                                                <div class="col-4">
                                                                    <div id="Combo_우편번호_구군"></div>
                                                                </div>
                                                                <div class="col-5">
                                                                    <div id="Combo_우편번호_동"></div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">지점별</th>
                                                        <th class="bg-white">
                                                            <div class="row">
                                                                <div class="col-1 align-self-center">
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm justify-content-center">
                                                                        <input class="form-check-input" type="checkbox" value="" id="Check_소재지">
                                                                        <label class="form-check-label" for="Check_소재지">전체</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div id="List_지점"></div>
                                                                </div>
                                                                <div class="col-8">
                                                                    <textarea class="form-control min-h-100px fs-7 h-auto" id="Label_소재지" readonly="readonly"></textarea>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">최종평가가격</th>
                                                        <th class="fw-bolder bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_최종평가가격_최저" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="0" disabled="disabled" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-1">
                                                                    ~
                                                                </div>
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_최종평가가격_최고" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="0" disabled="disabled" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">낙찰가율</th>
                                                        <th class="fw-bolder bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_낙찰가율_최저" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="0" disabled="disabled" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-1">
                                                                    ~
                                                                </div>
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_낙찰가율_최고" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="0" disabled="disabled" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">예상낙찰가</th>
                                                        <th class="fw-bolder bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-2">
                                                                    <div id="Combo_예상낙찰가_최저"></div>
                                                                </div>
                                                                <div class="col-1">
                                                                    ~
                                                                </div>
                                                                <div class="col-2">
                                                                    <div id="Combo_예상낙찰가_최고"></div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">담보종류</th>
                                                        <th class="bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-1 align-self-center">
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm justify-content-center">
                                                                        <input class="form-check-input" type="checkbox" value="" id="Check_담보종류">
                                                                        <label class="form-check-label" for="Check_담보종류">전체</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div id="List_담보종류"></div>
                                                                </div>
                                                                <div class="col-8">
                                                                    <textarea class="form-control min-h-100px fs-7 h-auto" id="Label_담보종류" readonly="readonly"></textarea>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">면적관련</th>
                                                        <th class="bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-1">
                                                                    토지 :
                                                                </div>
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_면적_토지_최저" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-1">
                                                                    ~
                                                                </div>
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_면적_토지_최고" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-1">
                                                                    건물 :
                                                                </div>
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_면적_건물_최저" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="0" disabled="disabled" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-1">
                                                                    ~
                                                                </div>
                                                                <div class="col-2">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_면적_건물_최고" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="0" disabled="disabled" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">지목별</th>
                                                        <th class="bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-1 align-self-center">
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm justify-content-center">
                                                                        <input class="form-check-input" type="checkbox" value="" id="Check_지목별">
                                                                        <label class="form-check-label" for="Check_지목별">전체</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div id="List_지목"></div>
                                                                </div>
                                                                <div class="col-8">
                                                                    <textarea class="form-control min-h-100px fs-7 h-auto" id="Label_지목별" readonly="readonly"></textarea>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">1차거래처</th>
                                                        <th class="bg-white" colspan="2">
                                                            <div class="row">
                                                                <div class="col-1">
                                                                    <a href="javascript:void(0);" id="Picture2" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default py-0 ps-4">초기화</a>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="row">
                                                                        <div class="col-9">
                                                                            <input type="text" id="Edit_거래처" class="form-control form-control-transparent py-0 ps-0 text-end fs-7 min-w-100" value="" />
                                                                        </div>
                                                                        <div class="col-3">
                                                                            <div class="text-start">
                                                                                <a href="javascript:void(0);" id="Picture4">
                                                                                    <span class="svg-icon svg-icon-primary svg-icon-2 mx-2">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                            <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"></path>
                                                                                            <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                            <input type="hidden" id="Edit_거래처코드" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">자체 및 업소</th>
                                                        <th class="bg-white text-start" colspan="2">
                                                            <div class="d-flex">
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                                                    <input class="form-check-input" type="radio" name="Group_자체및업소" id="Option_전체" value="%">
                                                                    <label class="form-check-label" for="Option_전체">전체</label>
                                                                </div>
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm mx-3">
                                                                    <input class="form-check-input" type="radio" name="Group_자체및업소" id="Option_자체" value="0">
                                                                    <label class="form-check-label" for="Option_자체">자체</label>
                                                                </div>
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                                                    <input class="form-check-input" type="radio" name="Group_자체및업소" id="Option_업소" value="1">
                                                                    <label class="form-check-label" for="Option_업소">업소</label>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder" rowspan="4">합산조건</th>
                                                        <th class="fw-bolder">기간</th>
                                                        <th class="bg-white text-start">
                                                            <div class="d-flex">
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_기간" id="Option_기간_전체" value="0">
                                                                    <label class="form-check-label" for="Option_기간_전체">무시</label>
                                                                </div>
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm mx-3">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_기간" id="Option_기간_년별" value="1">
                                                                    <label class="form-check-label" for="Option_기간_년별">년별</label>
                                                                </div>
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_기간" id="Option_기간_월별" value="2">
                                                                    <label class="form-check-label" for="Option_기간_월별">월별</label>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">지점</th>
                                                        <th class="bg-white text-start">
                                                            <div class="d-flex">
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_지점" id="Option_지점_전체" value="0">
                                                                    <label class="form-check-label" for="Option_지점_전체">무시</label>
                                                                </div>
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm mx-3">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_지점" id="Option_지점_지점별" value="1">
                                                                    <label class="form-check-label" for="Option_지점_지점별">지점별</label>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">담보종류</th>
                                                        <th class="bg-white text-start">
                                                            <div class="d-flex">
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_담보종류" id="Option_담보종류_전체" value="0">
                                                                    <label class="form-check-label" for="Option_담보종류_전체">무시</label>
                                                                </div>
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm mx-3">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_담보종류" id="Option_담보종류_지점별" value="1">
                                                                    <label class="form-check-label" for="Option_담보종류_지점별">담보종류별</label>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fs-7 text-gray-800 text-center">
                                                        <th class="fw-bolder">업소구분</th>
                                                        <th class="bg-white text-start">
                                                            <div class="d-flex">
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_업소구분" id="Option_업소구분_전체" value="0">
                                                                    <label class="form-check-label" for="Option_업소구분_전체">무시</label>
                                                                </div>
                                                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm mx-3">
                                                                    <input class="form-check-input" type="radio" name="Group_합산_업소구분" id="Option_업소구분_업소별" value="1">
                                                                    <label class="form-check-label" for="Option_업소구분_업소별">업소구분별</label>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>                              
                                            </table>
                                        </div>	
                                    </div>	
                                    <div class="tab-pane fade kt_tab_pane_2" id="kt_tab_pane_2" role="tabpanel">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <a href="javascript:void(0);" id="Picture7" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">엑셀저장</a>
                                            </div>
                                            <div class="d-flex">
                                                <div class="border rounded p-3 pb-0 bg-secondary">
                                                    <div>
                                                        <span class="input-group-text bg-transparent fs-8 fw-bolder border-0 p-0 py-1"> 조회건수</span>
                                                    </div>
                                                </div>
                                                <div class="border rounded p-3 pb-1">
                                                    <input id="Edit_조회건수" class="form-control form-control-transparent fs-7 py-0 ps-0 text-end min-w-100 transparent" value="" disabled="disabled"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2"></div>
                                        <div class="table-responsive table-scroll" id="DBGrid1"></div>	
                                    </div>	
                                    <div class="tab-pane fade kt_tab_pane_3" id="kt_tab_pane_3" role="tabpanel">
                                        <div class="table-responsive table-loading">
                                            <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                                <thead class="bg-secondary">
                                                    <tr class="fw-bolder fs-7 text-gray-800 align-middle">
                                                        <th class="col-1 text-center">그래프정보</th>
                                                        <th class="col-4 bg-white">
                                                            <div class="border rounded p-2 pb-1 mx-2">
                                                                <div class="d-flex justify-content-between">
                                                                    <span class="fs-7 fw-bolder">X축 : </span>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_X" id="Option3" value="지점명">
                                                                        <label class="form-check-label" for="Option3">지점</label>
                                                                    </div>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_X" id="Option1" value="담보종류명">
                                                                        <label class="form-check-label" for="Option1">담조종류</label>
                                                                    </div>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_X" id="Option2" value="감정일자">
                                                                        <label class="form-check-label" for="Option2">기간</label>
                                                                    </div>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_X" id="Option4" value="업소구분명">
                                                                        <label class="form-check-label" for="Option4">업소구분</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th class="col-5 bg-white">
                                                            <div class="border rounded p-2 pb-1 mx-2">
                                                                <div class="d-flex justify-content-between">
                                                                    <span class="fs-7 fw-bolder">Y축 : </span>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_Y" id="Option7" value="평가가격">
                                                                        <label class="form-check-label" for="Option7">평가가격</label>
                                                                    </div>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_Y" id="Option5" value="최종평가가격">
                                                                        <label class="form-check-label" for="Option5">최종평가가격</label>
                                                                    </div>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_Y" id="Option6" value="예상낙찰가">
                                                                        <label class="form-check-label" for="Option6">예상낙찰가</label>
                                                                    </div>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_Y" id="Option8" value="선순위채권액">
                                                                        <label class="form-check-label" for="Option8">선순위채권액</label>
                                                                    </div>
                                                                    <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm me-2">
                                                                        <input class="form-check-input" type="radio" name="Group_그래프_Y" id="Option9" value="건수">
                                                                        <label class="form-check-label" for="Option9">건수</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th class="col-1 bg-white">
                                                            <div class="text-end">
                                                                <a id="Picture6" href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default">조회</a>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div> 
                                        <div class="border rounded p-5 pb-1 min-h-600px h-auto">
                                            <div id="Chart1"></div>
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