<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
<%@ include file="/WEB-INF/jsp/template/es01_w02.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<script type="text/javascript">
    componentsMap.set('page', PageType.집합_아파트);
    componentsMap.set('es', EsType.ES01);

    $(document).ready(function(){
        pageZoon.OnInitialize();

        pageEvent.init();
    });
</script>

<script src="/resources/js/ezgen/variable/es01_w02.js"></script>
<script src="/resources/js/ezgen/macro/es01_w02.js"></script>
<script src="/resources/js/ezgen/page/es01_w02.js"></script>
<script src="/resources/js/ezgen/zoon/es01_w02.js"></script>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>아파트</title>

</head>
<body>
<input type="hidden" class="hide" id="Edit_Doc_Key" disabled/>
<input type="hidden" class="hide" id="Edit_년도" disabled/>
<input type="hidden" class="hide" id="Edit_감정순번" disabled/>
<input type="hidden" class="hide" id="Edit_감정자사번" disabled/>

<div class="col-xxl-12 mb-1">
    <label for="debugName">테스트용</label><input type="text" id="debugName"/>
    <div class="text-center mb-5">
        <h3>지점감정현황</h3>
    </div>
    <div class="row">
        <div class="col-3">
            <div class="d-flex align-items-center justify-content-start gap-4 mb-2 text-nowrap">
                <a href="javascript:void(0)" id="Picture60" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>저장
                </a>
                <a href="javascript:void(0)" id="Picture61" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>배당처리
                </a>
                <a href="javascript:void(0)" id="Picture72" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>배당자료수정
                </a>
            </div>
        </div>
        <div class="col-9">
            <div class="d-flex align-items-center justify-content-end gap-4 mb-2 text-nowrap">
                <div class="fs-9 fw-bold text-danger">결재 진행 중 / 완료된 담보이거나 작성할 수 있는 권한이 없으므로 수정하실 수 없습니다. 전자결재를 이용하여 주십시오.</div>
                <a href="javascript:void(0)" id="Picture92" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>배당자료수정
                </a>
                <a href="javascript:void(0)" id="Picture_전감정사항비교표" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>전감정사항비교포
                </a>
                <a href="javascript:void(0)" id="Picture58" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>유입검토보고서
                </a>
                <a href="javascript:void(0)" id="Picture31" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>탁상감정
                </a>
                <a href="javascript:void(0)" id="Command_저장" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>저장
                </a>
                <a href="javascript:void(0)" id="Command_배당처리" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                    <i class="fas fa-file-alt"></i>배당처리
                </a>
                <a href="javascript:void(0)" id="Picture6" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder text-nowrap">
                    <i class="fas fa-file-alt"></i>
                    배당집계표
                </a>
                <a href="javascript:void(0)" id="Picture32" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder text-nowrap">
                    <i class="fas fa-print"></i>
                    프린트
                </a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body py-3">
            <div class="row">
                <div class="col-lg-2 col-md-4">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="text-muted fs-7 text-nowrap">부서</div>
                        </div>
                        <div class="col-lg-9 col-md-4">
                            <div id="Combo_집합건물종류"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="text-muted fs-7 text-nowrap">담보종류</div>
                        </div>
                        <div class="col-lg-9 col-md-4">
                            <div id="Combo_사업부문"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="row">
                        <div class="col-lg-2 col-md-4">
                            <div class="text-muted fs-7 text-nowrap">링크사이트</div>
                        </div>
                        <div class="col-lg-10 col-md-8">
                            <div id="Combo_링크사이트"></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="text-muted my-2"></hr>
            <div class="row">
                <div class="col-lg-2 col-md-4">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="text-muted fs-7 text-nowrap">감정일</div>
                        </div>
                        <div class="col-lg-9 col-md-4">
                            <input id="MkEdit_감정일" type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-center min-w-100" value="" disabled="disabled"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="text-muted fs-7 text-nowrap">감정자</div>
                        </div>
                        <div class="col-lg-9 col-md-4">
                            <input id="Edit_감정자" type="text" class="form-control form-control-transparent fs-7 py-0 px-2 min-w-100" value="" disabled="disabled"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="row">
                        <div class="col-lg-2 col-md-4">
                            <div class="text-muted fs-7 text-nowrap">담보건물명</div>
                        </div>
                        <div class="col-lg-10 col-md-8">
                            <div class="row">
                                <div class="col-lg-11 col-md-10">
                                    <input id="Edit_Doc_Name" type="text" class="form-control form-control-transparent fs-7 py-0 px-2 min-w-100" value="" disabled="disabled"/>
                                </div>
                                <div class="col-lg-1 col-md-2">
                                    <a href="javascript:void(0)" id="Picture38_감정요청자료_영업_조회">
                                        <span class="svg-icon svg-icon-primary svg-icon-2 mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"></path>
                                                <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xxl-12">
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6" id="TabControl1">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_1">입력표</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">감정가액산출</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3">낙찰가율보정표</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_4">응찰입력표</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">배당표</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6">문서관리</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_7">공통보고서</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                    <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        거래처 등의 표시
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover align-middle gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle">
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th>1. 제1차 거래처</th>
                                        <th class="bg-white" colspan="2">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3">
                                                    <input id="Edit_거래처코드" type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value="" disabled="disabled"/>
                                                </div>
                                                <div class="col-lg-9 col-md-9">
                                                    <div class="row">
                                                        <div class="col-lg-11 col-md-10">
                                                            <input type="text" id="Edit_거래처" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value="" disabled="disabled"/>
                                                        </div>
                                                        <div class="col-lg-1 col-md-2">
                                                            <a href="javascript:void(0)" id="Picture4_거래처조회">
                                                                <span class="svg-icon svg-icon-primary svg-icon-2 ">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"></path>
                                                                        <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="text-center">대표자</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_대표자" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value="" disabled="disabled">
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th>2. 업소명</th>
                                        <th class="bg-white" colspan="2">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3">
                                                    <div id="Combo_입력표_업소구분"></div>
                                                </div>
                                                <div class="col-lg-9 col-md-9">
                                                    <input id="Edit_업소명" type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value=""/>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="text-center col-2">대표자</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_업소대표자" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value="">
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th>3. 채무자</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_채무자" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value=""/>
                                        </th>
                                        <th colspan="2" class="col-lg-4">5. 채무자와 담보제공자의 관계</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_채무자와담보제공자의관계" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value=""/>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th>4. 담보제공자</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_담보제공자" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value=""/>
                                        </th>
                                        <th colspan="2">6. 이 담보물에 대한 재감정 여부</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_재감정여부" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value="" disabled="disabled"/>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        부동산의 표시
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="8">1. 감정 대상 부동산의 표시</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                    <th class="col-5" colspan="3">소재지</th>
                                    <th class="col-1">지번</th>
                                    <th class="col-2">집합건물의 명칭</th>
                                    <th class="col-1">동수</th>
                                    <th class="col-1">호수</th>
                                </tr>
                                <tr class="fw-normal fs-7 text-gray-800">
                                    <th class="bg-white" colspan="3">
                                        <div class="row">
                                            <div class="col-lg-11 col-md-10">
                                                <input type="text" id="Edit_소재지" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value="" disabled="disabled"/>
                                            </div>
                                            <div class="col-lg-1 col-md-2">
                                                <a href="javascript:void(0)" id="Picture21_입력표_부동산의표시_소재지_검색">
                                                    <span class="svg-icon svg-icon-primary svg-icon-2 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"></path>
                                                            <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="bg-white">
                                        <input type="text" id="Edit_지번" class="form-control form-control-transparent fs-7 py-0 px-2 text-start" value=""/>
                                    </th>
                                    <th class="bg-white">
                                        <input type="text" id="Edit_집합건물의명칭" class="form-control form-control-transparent fs-7 py-0 px-2 text-start" value=""/>
                                    </th>
                                    <th class="bg-white">
                                        <input type="text" id="Edit_동수" class="form-control form-control-transparent fs-7 py-0 px-2 text-start" value=""/>
                                    </th>
                                    <th class="bg-white">
                                        <input type="text" id="Edit_호수" class="form-control form-control-transparent fs-7 py-0 px-2 text-start" value=""/>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-nowrap">
                                    <th class="col-2">지목</th>
                                    <th>대지권목적인 일단의<br> 토지 전체의 면적</th>
                                    <th>대지권 소유권 /추정세대수</th>
                                    <th colspan="4">가임대보증금 적용지역</th>
                                </tr>
                                <tr class="fw-normal fs-7 text-gray-800 bg-white">
                                    <th rowspan="2">
                                        <div id="Combo_지목"></div>
                                    </th>
                                    <th rowspan="2">
                                        <input type="text" id="MkEdit_토지권의목적인" class="form-control form-control-transparent fs-7 py-0 px-2 text-end " value=""/>
                                    </th>
                                    <th>
                                        <div class="row">
                                            <div class="col-6">
                                                <input type="text" id="Edit_대지권소유권" class="form-control form-control-transparent fs-7 py-0 px-2 text-end" value=""/>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="Formula1" class="form-control form-control-transparent fs-7 py-0 px-2 text-end" value="" disabled="disabled"/>
                                            </div>
                                        </div>
                                    </th>
                                    <th rowspan="2" colspan="4">
                                        <div id="Combo_가임대보증금적용지역"></div>
                                    </th>
                                </tr>
                                <tr class="fw-normal fs-7 text-gray-800 bg-white">
                                    <td>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="row">
                                                    <div class="col-lg-10 col-md-8">
                                                        <input type="text" id="Edit_대지권소유권_평" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                    </div>
                                                    <div class="col-lg-2 col-md-4">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1 text-nowrap">평</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>        
                                    </td>
                                </tr>    
                            </table>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle">
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th colspan="11">2. 집합건물에 관한 사항</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center text-nowrap">
                                        <th class="col-1" rowspan="3">전체 규모 및<br>전용부분의 위치</th>
                                        <th class="col-2">구조</th>
                                        <th class="col-2">지붕</th>
                                        <th>지상</th>
                                        <th>지하</th>
                                        <th>해당층</th>
                                        <th>건축일자</th>
                                        <th>세대수</th>
                                        <th class="fw-bolder text-nowrap text-center bg-secondary col-1">전유면적</th>
                                        <th class="bg-white min-w-150px">
                                            <div class="row">
                                                <div class="col-lg-9 col-md-8">
                                                    <input type="text" id="MkEdit_전유면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-3 col-md-4">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1 text-nowrap">m<sup>2</sup></span>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="bg-white min-w-150px">
                                            <div class="row">
                                                <div class="col-lg-9 col-md-8">
                                                    <input type="text" id="MkEdit_전유면적_평" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                </div>
                                                <div class="col-lg-3 col-md-4">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1 text-nowrap">평</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-normal fs-7 text-gray-800 bg-white">
                                        <th rowspan="2">
                                            <div id="Combo_구조"></div>
                                        </th>
                                        <th rowspan="2">
                                            <div id="Combo_지붕"></div>
                                        </th>
                                        <th rowspan="2">
                                            <input type="text" id="Edit_지상" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                        </th>
                                        <th rowspan="2">
                                            <input type="text" id="Edit_지하" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                        </th>
                                        <th rowspan="2">
                                            <input type="text" id="Edit_해당층" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                        </th>
                                        <th>
                                            <input type="text" id="MkEdit_건축일자" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                        </th>
                                        <th rowspan="2">
                                            <input type="text" id="MkEdit_세대수" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                        </th>
                                        <th class="fw-bolder text-nowrap text-center bg-secondary">
                                            공유면적
                                        </th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-lg-9 col-md-8">
                                                    <input type="text" id="MkEdit_공유면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-3 col-md-4">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-lg-9 col-md-8">
                                                    <input type="text" id="MkEdit_공유면적_평" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                </div>
                                                <div class="col-lg-3 col-md-4">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">평</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-normal fs-7 text-gray-800 bg-white">
                                        <th>
                                            <div class="row">
                                                <div class="col-lg-8 col-md-7">
                                                    <input type="text" id="MkEdit_건축년도_경과" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                </div>
                                                <div class="col-lg-4 col-md-5">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">년 경과</span>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="fw-bolder text-nowrap text-center bg-secondary">
                                            면적합계
                                        </th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-lg-9 col-md-8">
                                                    <input type="text" id="MkEdit_면적합계" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                </div>
                                                <div class="col-lg-3 col-md-4">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-lg-9 col-md-8">
                                                    <input type="text" id="MkEdit_면적합계_평" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                </div>
                                                <div class="col-lg-3 col-md-4">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">평형</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle text-nowrap">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="3">2. 감정 대상 부동산에 대한 공적규제의 표시</th>
                                </tr>
                                <tr>
                                    <th class="col-md-1 fs-7 fw-bolder" rowspan="3">지역·지구 등 지정여부</th>
                                    <td class="col-md-3 fs-7 fw-bolder">국토의 계획 및 이용에 관한 법률에 따른 지역·지구들</td>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_국토의계획" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="col-md-3 fs-7 fw-bolder">다른 법률등에 따른 지역·지구들</td>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_다른법률등" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="col-md-3 fs-7 fw-bolder">시행령 부칙 제3조에 따른 추가기재확인 내용</td>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_시행령부칙" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                <tr class="fs-7 text-gray-800">
                                    <th class="text-start fw-bolder" colspan="2">"토지이용규제기본법시행령" 제9조 2항 각호에 해당되는 사항</th>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_토지이용규제" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        감정가격에 대한 사항
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive">
                            <table class="table table-row-bordered border gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle">
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th class="col-2">구분</th>
                                        <th class="col-2">총액</th>
                                        <th class="col-2">m<sup>2</sup>당 가격</th>
                                        <th class="col-2">평당 단가</th>
                                    </tr>
                                    <tr>
                                        <td class="fw-bolder fs-7 text-gray-800">1. 실거래가격 (등기부상 실거래가격)</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_등기부등본상의시세_총액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_등기부등본상의시세_단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원/m<sup>2</sup></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_등기부등본상의시세_평당단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원/평</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bolder fs-7 text-gray-800">2. 공동주택가격</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_기준시가_총액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_기준시가_단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원/m<sup>2</sup></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_기준시가_평당단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원/평</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        담보제공비율
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="align-middle bg-secondary">
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                                        <th class="col-2" rowspan="2">등기부상 전용면적</th>
                                        <th class="col-2" colspan="3">담보제공비율</th>
                                        <th class="col-2" rowspan="2">담보제공면적</th>
                                        <th class="col-2" rowspan="2">사유</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>분자</th>
                                        <th>분모</th>
                                        <th>비율 (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_등기부상전용면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" id="MkEdit_분자" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                        </td>
                                        <td>
                                            <input type="text" id="MkEdit_분모" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                        </td>
                                        <td>
                                            <input type="text" id="MkEdit_비율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled/>
                                        </td>
                                        <td>
                                            <div class="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_담보제공면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" id="Edit_사유" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                    <h5 class="mt-1">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        시세조사내역
                    </h5>
                    <div id="kt_content_container">
                        <div class="border rounded p-5 pb-1">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h6>본건사례</h6>
                                </div>
                                <div>
                                    <a href="javascript:void(0)" id="Command_본건_추가">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Command_본건_삭제">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                                    <thead class="bg-secondary">
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th class="text-center">건축년도</th>
                                        <th class="fw-normal bg-white">
                                            <div class="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_감정가액산출_건축일자" class="form-control form-control-transparent fs-7 py-0 px-2 text-center min-w-100" value="" disabled="disabled">
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">년</span>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="text-center">세대수</th>
                                        <th class="fw-normal bg-white">
                                            <div class="row">
                                                <div class="col-lg-11 col-md-10">
                                                    <input type="text" id="MkEdit_감정가액산출_세대수" class="form-control form-control-transparent fs-7 py-0 px-2 text-center min-w-100" value="" disabled="disabled">
                                                </div>
                                                <div class="col-lg-1 col-md-2">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">세대</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="table-responsive table-loading" id="DBGrid_본건"></div>
                        </div>
                        <div class="my-5"></div>
                        <div class="border rounded p-5 pb-1">
                            <div class="d-flex justify-content-start">
                                <div>
                                    <h6>가격사례</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-5 col-md-12 col-sm-12">
                                    <div class="d-flex justify-content-end mb-3">
                                        <div>
                                            <a href="javascript:void(0)" id="Command_가격사례_M_추가">
                                                <i class="fas fa-plus-circle"></i>
                                            </a>
                                            <a href="javascript:void(0)" id="Command_가격사례_M_삭제">
                                                <i class="fas fa-minus-circle"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="table-responsive table-loading" id="DBGrid_가격사례_M"></div>
                                </div>
                                <div class="col-lg-7 col-md-12 col-sm-12">
                                    <div class="d-flex justify-content-end mb-3">
                                        <div>
                                            <a href="javascript:void(0)" id="Command_가격사례_D_추가">
                                                <i class="fas fa-plus-circle"></i>
                                            </a>
                                            <a href="javascript:void(0)" id="Command_가격사례_D_삭제">
                                                <i class="fas fa-minus-circle"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="table-responsive table-loading" id="DBGrid_가격사례_D"></div>
                                </div>
                            </div>
                        </div>
                        <div class="my-5"></div>
                        <div class="border rounded p-5 pb-1">
                            <div class="d-flex justify-content-between mb-3">
                                <div>
                                    <h6>경매사례</h6>
                                </div>
                                <div>
                                    <a href="javascript:void(0)" id="Command_경매사례_추가">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Command_경매사례_삭제">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="table-responsive table-loading" id="DBGrid_경매사례"></div>
                        </div>
                        <div class="separator my-10"></div>
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            감정에 관한 사항
                        </h5>
                        <div class="border rounded p-5 pb-1">
                            <div class="table-responsive table-loading">
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th class="col-5" colspan="3">구분</th>
                                            <th>금액(원)</th>
                                            <th>최저/최고비율(%)</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-secondary align-middle  text-center text-nowrap">
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td class="col-2" rowspan="7">가격의 결정</td>
                                            <td rowspan="2">본건사례</td>
                                            <td class="col-3">최저가격</td>
                                            <td class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_본건_최저가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td rowspan="2" class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_본건_비율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>최고가격</td>
                                            <td class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_본건_최고가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td rowspan="2">인근 가격사례</td>
                                            <td>최저가격</td>
                                            <td class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_인근_최저가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td rowspan="2" class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_인근_비율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100"  value="" disabled="disabled">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>최고가격</td>
                                            <td class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_인근_최고가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td rowspan="2">경매사례</td>
                                            <td>최저가격</td>
                                            <td class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_경매_최저가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td rowspan="2" class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_경매_비율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>최고가격</td>
                                            <td class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_경매_최고가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td colspan="2">결정가격</td>
                                            <td class="fw-bolder bg-white" colspan="2">
                                                <input type="text" id="MkEdit_결정가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td rowspan="3" colspan="2">인테리어부</td>
                                            <td>보수평형</td>
                                            <td class="fw-normal bg-white">
                                                <div class="row">
                                                    <div class="col-lg-11 col-md-10">
                                                        <input type="text" id="MkEdit_보수평형_평" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                    </div>
                                                    <div class="col-lg-1 col-md-2">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">평</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="fw-normal bg-white">
                                                <div class="row">
                                                    <div class="col-lg-10 col-md-9">
                                                        <input type="text" id="MkEdit_보수평형" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                    </div>
                                                    <div class="col-lg-2 col-md-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>보수단가</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-8">
                                                        <div id="Combo_평가_인테리어단가"></div>
                                                    </div>
                                                    <div class="col-4">
                                                        <input type="text" id="MkEdit_보수단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="bg-secondary"></td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>금액(원)</td>
                                            <td class="fw-normal bg-white">
                                                <input type="text" id="MkEdit_보수금액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td class="bg-secondary"></td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td colspan="3">평가가격(원)</td>
                                            <td colspan="2" class="bg-white">
                                                <input type="text" id="MkEdit_평가가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="separator my-10"></div>
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            담보제공비율
                        </h5>
                        <div class="border rounded p-5 pb-1">
                            <div class="table-responsive table-loading">
                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                                            <th class="col-2" rowspan="2">등기부상 전용면적(평)</th>
                                            <th class="col-2" colspan="3">담보제공비율</th>
                                            <th class="col-2" rowspan="2">담보제공면적(평)</th>
                                            <th class="col-2" rowspan="2">평가가격(원)</th>
                                            <th class="col-2" rowspan="2">최종평가가격(원)</th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>분자</th>
                                            <th>분모</th>
                                            <th>비율(%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="text" id="MkEdit_감정가_등기부상전용면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td>
                                                <input type="text" id="MkEdit_감정가_분자" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td>
                                                <input type="text" id="MkEdit_감정가_분모" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td>
                                                <input type="text" id="MkEdit_감정가_비율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td>
                                                <input type="text" id="MkEdit_감정가_담보제공면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td>
                                                <input type="text" id="MkEdit_감정가_평가가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                            <td>
                                                <input type="text" id="MkEdit_감정가_최종평가가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
                    <div id="kt_content_container">
                        <div class="row">
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="table-responsive table-loading">
                                    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                                        <thead class="bg-secondary">
                                            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                                <th colspan="2">감정대상 부동산의 기준 낙찰가율</th>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap text-center fw-bolder">당해지역의 낙찰가율</td>
                                                <td class="bg-white">
                                                    <div class="row">
                                                        <div class="col-lg-10 col-md-10">
                                                            <input type="text" id="MkEdit_보정표_당해지역낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" />
                                                        </div>
                                                        <div class="col-lg-2 col-md-2">
                                                            <span class="input-group-text bg-transparent fs-7 text-danger fw-bolder border-0 p-0">%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap text-center fw-bolder">유사부동산 낙찰가율</td>
                                                <td class="bg-white">
                                                    <div class="row">
                                                        <div class="col-lg-10 col-md-10">
                                                            <input type="text" id="MkEdit_보정표_유사부동산낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" />
                                                        </div>
                                                        <div class="col-lg-2 col-md-2">
                                                            <span class="input-group-text bg-transparent fs-7 text-danger fw-bolder border-0 p-0">%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap text-center fw-bolder">기준 낙찰가율</td>
                                                <td class="bg-white">
                                                    <div class="row">
                                                        <div class="col-lg-10 col-md-10">
                                                            <input type="text" id="MkEdit_보정표_기준낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled">
                                                        </div>
                                                        <div class="col-lg-2 col-md-2">
                                                            <span class="input-group-text bg-transparent fs-7 text-danger fw-bolder border-0 p-0">%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap text-center fw-bolder">적용할 낙찰가율</td>
                                                <td class="bg-white">
                                                    <div class="row">
                                                        <div class="col-lg-10 col-md-10">
                                                            <input type="text" id="MkEdit_보정표_적용할낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled">
                                                        </div>
                                                        <div class="col-lg-2 col-md-2">
                                                            <span class="input-group-text bg-transparent fs-7 text-danger fw-bolder border-0 p-0">%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-12 col-sm-12">
                                <div class="table-responsive table-loading">
                                    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                                        <thead class="bg-secondary">
                                            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                                <th>단지전체규모</th>
                                                <th>전유부분의 면적</th>
                                                <th>총 층수중 전유부분의 위치</th>
                                                <th>건축물의 경과년도</th>
                                            </tr>
                                            <tr class="fw-bolder fs-7 text-gray-800 bg-white">
                                                <th>
                                                    <div class="row">
                                                        <div class="col-lg-10 col-md-10">
                                                            <input type="text" id="MkEdit_보정표_아파트단지규모" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                        </div>
                                                        <div class="col-lg-2 col-md-2">
                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">세대</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="row">
                                                        <div class="col-lg-10 col-md-10">
                                                            <input type="text" id="MkEdit_보정표_전유부분면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                        </div>
                                                        <div class="col-lg-2 col-md-2">
                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">m<sup>2</sup></span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <input type="text" id="Edit_보정표_전유부분위치" class="form-control form-control-transparent py-0 px-2 text-center min-w-100 fs-7" value="" disabled="disabled">
                                                </th>
                                                <th>
                                                    <div class="row">
                                                        <div class="col-lg-10 col-md-10">
                                                            <input type="text" id="MkEdit_보정표_건축물의경과년도" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                        </div>
                                                        <div class="col-lg-2 col-md-2">
                                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">년 경과</span>

                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div id="Combo_아파트단지규모"></div>
                                                </td>
                                                <td>
                                                    <div id="Combo_전유부분의면적"></div>
                                                </td>
                                                <td>
                                                    <div id="Combo_전유부분의위치"></div>
                                                </td>
                                                <td>
                                                    <div id="Combo_건축물경과년도"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="text" id="MkEdit_보정표_아파트단지규모_적용율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                </td>
                                                <td>
                                                    <input type="text" id="MkEdit_보정표_전유부분면적_적용율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                </td>
                                                <td>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <input type="text" id="Edit20" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="text" id="MkEdit_보정표_전유부분위치_적용율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="text" id="MkEdit_보정표_건축물의경과년도_적용율" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="separator my-10"></div>
                        <div class="row">
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="table-responsive table-loading">
                                    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                                        <thead class="bg-secondary">
                                            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                                <th>점유자의 권리 형태</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div id="Combo_점유자의권리형태"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="text" id="MkEdit_보정표_점유자의권리형태" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-12 col-sm-12">
                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                                            <th>평가 가격</th>
                                            <th>1차 예상 최저입찰가<br>(최종평가가격)</th>
                                            <th>예상 낙찰가</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="row">
                                                    <div class="col-lg-11 col-md-10">
                                                        <input type="text" id="MkEdit_보정표_평가가격" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                    </div>
                                                    <div class="col-lg-1 col-md-2">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row">
                                                    <div class="col-lg-11 col-md-10">
                                                        <input type="text" id="MkEdit_보정표_최저입찰가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                    </div>
                                                    <div class="col-lg-1 col-md-2">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row">
                                                    <div class="col-lg-11 col-md-10">
                                                        <input type="text" id="MkEdit_보정표_예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                                    </div>
                                                    <div class="col-lg-1 col-md-2">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="d-flex align-items-center gap-4 justify-content-end mb-2">
                                <input type="button" class="hide" id="Command_적용할낙찰가율">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_4" role="tabpanel">
                    <input type="hidden" class="hide" id="응찰_변수_숫자1"/>
                    <input type="hidden" class="hide" id="응찰_변수_숫자2"/>
                    <input type="hidden" class="hide" id="응찰_경매_Formula_기일내역_Row"/>
                    <input type="hidden" class="hide" id="응찰_경매_Formula_기일내역_TNUM"/>
                    <input type="button" class="hide" id="Command_응찰_11_내용" class="hide"/>
                    <input type="button" class="hide" id="Command_응찰_00_탭활성여부" class="hide"/>
                    <input type="hidden" class="hide" id="응찰_입력표활성여부"/>
                    <input type="hidden" class="hide" id="Command_전감정_지점_예상낙찰가계산"/>
                    <input type="hidden" class="hide" id="Command_전감정_본사_예상낙찰가계산"/>
                    <input type="hidden" class="hide" id="응찰_변수_숫자_부담비용합계"/>
                    <input type="button" class="hide" id="Command_응찰_12_부담비용합계"/>
                    <input type="button" class="hide" id="Command_응찰_13_추정예상매각대금"/>

                    <input type="button" class="hide" id="Command_응찰_14_취득비용"/>
                    <input type="button" class="hide" id="Command_응찰_15_보유수익"/>
                    <input type="button" class="hide" id="Command_응찰_16_보유비용"/>
                    <input type="button" class="hide" id="Command_응찰_17_처분비용"/>
                    <input type="button" class="hide" id="Command_응찰_18_항목별합계"/>

                    <input type="button" class="hide" id="Command_응찰_00_메인"/>
                    <input type="button" class="hide" id="Command_응찰_01_쿼리"/>
                    <input type="button" class="hide" id="Command_응찰_02_이벤트"/>
                    <input type="button" class="hide" id="Command_응찰_03_초기화"/>
                    <input type="button" class="hide" id="Command_응찰_91_저장"/>

                    <div id="kt_content_container">
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            Ⅰ. 경매에 관한 사항
                        </h5>
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
                                <thead class="align-middle bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>1. 사건번호</th>
                                    <th colspan="3" class="fw-normal bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2 text-end" id="응찰_사항_사건번호">
                                        </div>
                                    </th>
                                    <th>2. 관할법원</th>
                                    <th colspan="3" class="fw-normal bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2 text-end" id="응찰_사항_관할법원">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>3. 경매구분</th>
                                    <th colspan="3" class="fw-normal bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2 text-end" id="응찰_사항_경매구분">
                                        </div>
                                    </th>
                                    <th>4. 경매계</th>
                                    <th class="fw-normal bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2 text-end" id="응찰_사항_경매계">
                                        </div>
                                    </th>
                                    <th>전화번호</th>
                                    <th class="fw-normal bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2 text-end" id="응찰_사항_전화번호">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>5. 경매신청채권자</th>
                                    <th class="fw-normal bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2 text-end" id="응찰_사항_경매신청채권자">
                                        </div>
                                    </th>
                                    <th>청구금액</th>
                                    <th class="fw-normal bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_사항_청구금액">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 ">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th>6.경매개시등기일</th>
                                    <th colspan="3" class="fw-normal bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_사항_경매개시등기일">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>6.기일내역</th>
                                    <th colspan="7" class="bg-white">
                                        <div id="DBGrid_응찰_기일내역"></div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>유입시 특이사항</th>
                                    <th colspan="7" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_사항_유입시특이사항">
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="my-10"></div>
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            Ⅱ. 경매입찰 예정내용
                        </h5>
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
                                <thead class="align-middle bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                    <th>가격 구분</th>
                                    <th>부동산 구분</th>
                                    <th>가격총액</th>
                                    <th>m<sup>2</sup>당 가격</th>
                                    <th>평당 가격</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th class="text-center" rowspan="3">1. 법원감정가</th>
                                    <th class="text-center">토지</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_토지_금액" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_토지_단가" disabled="disabled"/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_토지_단가_평당" disabled="disabled"/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th class="text-center">건물</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_건물_금액" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_건물_단가" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_건물_단가_평당" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th class="text-center">합계</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_법원감정가합계" disabled="disabled"/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th colspan="2" class="bg-white"></th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>2. 입찰예정가</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_입찰예정가_금액" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_내용_입찰예정가_낙찰가율" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="bg-white"></th>
                                    <th class="bg-white"></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="my-10"></div>
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            Ⅲ. 배당집계표
                        </h5>
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
                                <thead class="align-middle bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>경매비용 계산</th>
                                    <th>채권자중 최고 채권액</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_집계표_최고채권액">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div id="응찰_집계표_최고채권액Combo"></div>
                                    </th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_집계표_최고채권액Combo_Value">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>1. 선순위자 채권최고액 합계</th>
                                    <th colspan="2" class="fw-normal fs-7 col-md-4 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_집계표_선순위자채권최고액">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th>2. 선순위자 배당금합계</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_집계표_선순위자배당금">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>3. 당사 채권최고액 합계</th>
                                    <th colspan="2" class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_집계표_당사채권최고액">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th>4. 당사 배당금합계</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_집계표_당사배당금">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>5. 당사의 미회수 채권액</th>
                                    <th colspan="2" class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" id="응찰_집계표_당사미회수채권액">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="bg-white"></th>
                                    <th class="bg-white"></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="my-10"></div>
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            Ⅳ. 전감정의 개요
                        </h5>
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 text-nowrap">
                                <thead class="align-middle bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                    <th rowspan="2">구분</th>
                                    <th colspan="9">전감정내역</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                    <th colspan="4">지점 감정서</th>
                                    <th colspan="5">본사 검증감정서</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>1. 감정일</th>
                                    <th colspan="4" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_감정일">
                                        </div>
                                    </th>
                                    <th colspan="5" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_감정일">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="2">2. 감정자</th>
                                    <th class="text-center">담당자</th>
                                    <th class="text-center">파트장</th>
                                    <th class="text-center">팀장</th>
                                    <th class="text-center">지점장</th>
                                    <th class="text-center">1차결재</th>
                                    <th class="text-center">2차결재</th>
                                    <th class="text-center">3차결제</th>
                                    <th class="text-center">관재파트장</th>
                                    <th class="text-center">팀장</th>
                                </tr>
                                <tr class="fw-normal fs-7 text-gray-800 bg-white">
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_담당자">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_파트장">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_팀장">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_지점장">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_1차결재">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_2차결재">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_3차결재">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_관재파트장">
                                        </div>
                                    </th>
                                    <th>
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_팀장">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>3. 제1차예상입찰가</th>
                                    <th colspan="4" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_제1차예상낙찰가">
                                        </div>
                                    </th>
                                    <th colspan="5" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_제1차예상낙찰가">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>4. 예상낙찰가(율)</th>
                                    <th colspan="2" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_개요_지점_예상낙찰가율">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th colspan="2" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_예상낙찰가">
                                        </div>
                                    </th>
                                    <th colspan="2" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_개요_본사_예상낙찰가율">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th colspan="3" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_예상낙찰가">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>5. 담보이력</th>
                                    <th colspan="4" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_담보여력">
                                        </div>
                                    </th>
                                    <th colspan="5" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_담보여력">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>6. 당사채권금액</th>
                                    <th colspan="4" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_당사채권금액">
                                        </div>
                                    </th>
                                    <th colspan="5" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_당사채권금액">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>7. 당사순위 및 등기권리</th>
                                    <th colspan="4" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_지점_당사순위및등기">
                                        </div>
                                    </th>
                                    <th colspan="5" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent py-0 px-2" id="응찰_개요_본사_당사순위및등기">
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="my-10"></div>
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            Ⅴ. 취득, 보유, 처분에 따른 수익 및 예상수자
                        </h5>
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 text-nowrap">
                                <thead class="align-middle bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="3" colspan="2">0. 경락후 말소되지 않는 선순위권리내역</th>
                                    <th colspan="2">낙찰인이 인수하여야 하는 선순위권리내역</th>
                                    <th colspan="5" class="bg-white">
                                        <div class="d-flex justify-content-end mb-3">
                                            <a href="javascript:void(0)" id="Picture52_응찰입력표_선순위권리내역_플러스">
                                                <i class="fas fa-plus-circle"></i>
                                            </a>
                                            <a href="javascript:void(0)" id="Picture53_응찰입력표_선순위권리내역_마이너스">
                                                <i class="fas fa-minus-circle"></i>
                                            </a>
                                        </div>
                                        <div id="DBGrid_응찰_권리내역"></div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">낙찰인이 인수하여야 하는 선순위부담금액</th>
                                    <th colspan="5" class="bg-white">
                                        <div class="d-flex justify-content-end mb-3">
                                            <a href="javascript:void(0)" id="Picture55_응찰입력표_선순위부담금액_플러스">
                                                <i class="fas fa-plus-circle"></i>
                                            </a>
                                            <a href="javascript:void(0)" id="Picture54_응찰입력표_선순위부담금액_마이너스">
                                                <i class="fas fa-minus-circle"></i>
                                            </a>
                                        </div>
                                        <div id="DBGrid_응찰_부담내역"></div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">부담비용 합계</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_부담비용합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th colspan="4" class="bg-white"></th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">1. 취득가</th>
                                    <th colspan="2">입찰예정가</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_입찰예정가">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th>실제취득가</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_실제취득가">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th colspan="2" class="text-danger">◀◀(입찰예정가_부담비용 합계)</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">2. 예정보유기간</th>
                                    <th colspan="2">낙찰후 매각가능 시점까지의 기간</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_예정_낙찰후매각가능">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">년</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="text-center">3년치 공시지가 상승률</th>
                                    <th class="text-center" colspan="3">매각확신금액을 적용한 사유</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="2" colspan="2">3. 예상 매각대금</th>
                                    <th colspan="2">추정 예상 매각금액</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_예상매각금액">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th rowspan="2" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_예상공시지가상승률">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th rowspan="2" colspan="3" class="bg-white">
                                        <div class="input-group-sm">
                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_예상매각확신사유">
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">매각환산금액(정확한 사유 기재)</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_예상매각확신금액">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="15">4. 유입비용 및 수익의분석</th>
                                    <th rowspan="5">취득비용</th>
                                    <th>취득세</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white col-md-2">
                                        <div id="응찰_수지_취득_취득세_Combo"></div>
                                    </th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_취득세">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="text-center" rowspan="2">취득비용합계</th>
                                    <th class="text-center" rowspan="2">취득원가합계</th>
                                    <th class="text-center" rowspan="2">총뒤득원가합계</th>
                                    <th rowspan="5"></th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>등록세</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div id="응찰_수지_취득_등록세_Combo"></div>
                                    </th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_등록세">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">강제집행 예상비용</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_강제집행">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="bg-white" rowspan="3">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="bg-white" rowspan="3">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_원가합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="bg-white" rowspan="3">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_총원가합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">채권매입에 따른 손실액</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_채권매입">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">기타 취득부대비용</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_취득_기타취득">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="2">보유수익</th>
                                    <th colspan="2">임대수익</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유수익_임대수익">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th>임대 보증금</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유수익_임대보증금">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th>월 임대수입</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유수익_월임대수입">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">기타의 수익</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유수익_기타수익">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th colspan="2">보유수익의합계</th>
                                    <th colspan="2" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유수익_합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="6">보유비용</th>
                                    <th colspan="2">기회비용(정기예금 이자율 5% 기준)</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유비용_기회비용">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th rowspan="6" colspan="2">보유비용의합계
                                        <input type="hidden" id="응찰_수지_보유비용_종부세적용면적">
                                        <input type="hidden" id="응찰_수지_보유비용_주택기준시가">
                                        <input type="hidden" id="응찰_수지_보유비용_종부세_적용값">
                                        <input type="hidden" id="응찰_수지_처분_비용_적용값">
                                    </th>
                                    <th rowspan="6" colspan="2" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유비용_합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">임대수익 등에 대한 부가세</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유비용_부가세">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">법인세</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유비용_법인세">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">재산세</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유비용_재산세">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>종합부동산세</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div id="응찰_수지_보유비용_종부세_Combo"></div>
                                    </th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유비용_종부세">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">기타의 유지보수비용</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_보유비용_기타유지보수비용">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="2">처분비용</th>
                                    <th>처분비용</th>
                                    <th class="fw-normal fs-7 text-gray-800 bg-white">
                                        <div id="응찰_수지_처분_비용_Combo"></div>
                                    </th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_처분_비용">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th rowspan="2" colspan="2">처분비용의합계</th>
                                    <th rowspan="2" colspan="2" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_처분_합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="2">기타처분비용</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_처분_기타비용">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="3">5. 각항목별 합계</th>
                                    <th>비용의 합계</th>
                                    <th colspan="3" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_항목별_비용합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th rowspan="3" colspan="3"></th>
                                    <th rowspan="3" colspan="3"></th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>수익의 합계</th>
                                    <th colspan="3" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_항목별_수익합계">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>예상 손익</th>
                                    <th colspan="3" class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_항목별_예상손익">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="4">6. 최종적인 전체 손익</th>
                                    <th class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" id="응찰_수지_전체손익">
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th colspan="3" class="text-danger">◀◀(예상손익-당사미회수채권액)</th>
                                    <th colspan="3"></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="my-10"></div>
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            Ⅵ. 응찰여부의 결정
                        </h5>
                        <div class="border border-primary rounded p-5">
                            <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                <input class="form-check-input" type="checkbox" value="Y" id="응찰_수지_응찰여부"/>
                                <span class="ms-3">응찰하고자 하는 경우에는 체크하세요</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
                    <div class="table-responsive">
                        <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                            <thead class="bg-secondary">
                            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                <th>경매비용의 槪算</th>
                                <th>채권자 중 최고 채권액</th>
                                <th class="fw-normal bg-white">
                                    <div class ="row">
                                        <div class="col-lg-11 col-md-10">
                                            <input type="text" id="Edit_배당표_최고채권액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled">
                                        </div>
                                        <div class="col-lg-1 col-md-2">
                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="fw-normal bg-white">
                                    <div id="Combo_배당표_최고채권액"></div>
                                </th>
                                <th class="fw-normal bg-white">
                                    <div class ="row">
                                        <div class="col-lg-11 col-md-10">
                                            <input type="text" id="Edit_배당표_경매비용" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="0" disabled="disabled">
                                        </div>
                                        <div class="col-lg-1 col-md-2">
                                            <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="separator my-10"></div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="mt-1">
                                    <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                            <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                주택임차보증금의 계산
                            </h5>
                        </div>
                        <div class="mt-2">
                            <a href="javascript:void(0)" id="Picture25_배당표_주택임차보증금의계산_추가">
                                <i class="fas fa-plus-circle"></i>
                            </a>
                            <a href="javascript:void(0)" id="Picture26_배당표_주택임차보증금의계산_삭제">
                                <i class="fas fa-minus-circle"></i>
                            </a>
                        </div>
                    </div>
                    <div id="kt_content_container">
                        <div class="border rounded p-5 pb-1">
                            <div class="table-responsive table-loading">
                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th class="col-md-10">0. 假임대 보증금의 최고한도액 산출을 위한 담보부동산 전부의 예상낙찰가</th>
                                        <th class="col-md-2 fw-normal bg-white">
                                            <div class="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_배당표_예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="">
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th class="col-md-10">1. 假임대 보증금의 최고한도액 : 담보 부동산 경락가액 (예상낙찰가-경매비용)의 1/2까지</th>
                                        <th class="col-md-2 fw-normal bg-white">
                                            <div class="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_배당표_경락가액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="">
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-nowrap">
                                        <th class="col-md-8">2-1. 가임대보증금 적용 범위</th>
                                        <th class="col-md-4">2-2. 적용할 주택가임대보증금액 (최우선변제 소액임대차보증금) 한도액</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 bg-white">
                                        <th class="col-md-8 fw-normal">
                                            <div id="Combo_배당표_가임대보증금적용범위"></div>
                                        </th>
                                        <th class="col-md-4 fw-normal">
                                            <div class="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_배당표_적용할주택가임대보증금액" class="form-control form-control-transparent fs-7 py-0 px-2 mx-2 text-end min-w-100" value="" disabled="disabled">
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colspan="2" class="bg-white">
                                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                                <tbody>
                                                <div id="DBGrid_배당표_주택임대차보증금_계산"></div>
                                                </tbody>
                                                <tfoot class="text-center bg-secondary">
                                                <tr>
                                                    <th class="w-290px">합계</th>
                                                    <th class="bg-white w-150px">
                                                        <input type="text" id="Edit_배당표_합계_총방의개수" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                    </th>
                                                    <th class="w-80px"></th>
                                                    <th class="bg-white w-150px">
                                                        <input type="text" id="Edit_배당표_합계_적용한방의개수" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                    </th>
                                                    <th class="bg-white w-150px">
                                                        <input type="text" id="Edit_배당표_합계_실제임대차보증금" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                    </th>
                                                    <th class="bg-white w-150px">
                                                        <input type="text" id="Edit_배당표_합계_최종적용가임대보증금" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                    </th>
                                                    <th class="bg-white w-150px">
                                                        <input type="text" id="Edit_배당표_합계_주택임대차보증금_확정" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                    </th>
                                                    <th class="bg-white w-150px">
                                                        <input type="text" id="Edit_배당표_합계_주택임대차보증금_확정없는" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                                    </th>
                                                </tr>
                                                </tfoot>
                                            </table>
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="separator my-10"></div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="mt-1">
                                    <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                            <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                배당금의 계산
                            </h5>
                        </div>
                        <div class="mt-2">
                            <a href="javascript:void(0)" id="Picture32_배당표_배당금의계산_플러스">
                                <i class="fas fa-plus-circle"></i>
                            </a>
                            <a href="javascript:void(0)" id="Picture33_배당표_배당금의계산_마이나스">
                                <i class="fas fa-minus-circle"></i>
                            </a>
                        </div>
                    </div>
                    <div id="kt_content_container">
                        <div class="table-responsive table-loading" id="DBGrid_배당금_계산"></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="mt-1">
                                    <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                            <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                사진 및 도면
                            </h5>
                        </div>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between">
                                <div class="mx-5">
                                    <span class="fs-9 text-danger">저장 또는 실행은 파일명을 <strong>[더블클릭]</strong> 하세요.</span>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="kt_content_container">
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                <thead class="bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>구분</th>
                                    <th>내용</th>
                                    <th>파일명</th>
                                    <th>찾기</th>
                                    <th>비고</th>
                                </tr>
                                </thead>
                                <!--<tbody>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tbody>-->
                            </table>
                            <div class="text-center">일치하는 자료가 없습니다</div>
                        </div>
                    </div>
                    <div class="separator my-10"></div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="mt-1">
                                    <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                            <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                관련문서
                            </h5>
                        </div>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between">
                                <div class="mx-5">
                                    <span class="fs-9 text-danger">저장 또는 실행은 파일명을 <strong>[더블클릭]</strong> 하세요.</span>
                                </div>
                                <div>
                                    <a href="javascript:void(0)" id="Command_문서_추가">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Command_문서_삭제">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="kt_content_container">
                        <div class="table-responsive" id="DBGrid_문서">
                            <%--                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">--%>
                            <%--                                    <thead class="bg-secondary">--%>
                            <%--                                        <tr class="fw-bolder fs-7 text-gray-800">--%>
                            <%--                                            <th>내용</th>--%>
                            <%--                                            <th>파일명</th>--%>
                            <%--                                            <th>찾기</th>--%>
                            <%--                                            <th>비고</th>--%>
                            <%--                                        </tr>--%>
                            <%--                                    </thead>--%>
                            <%--                                    <tbody>--%>
                            <%--                                        <tr>--%>
                            <%--                                            <td>공부자료 등</td>--%>
                            <%--                                            <td>--%>
                            <%--                                                <a href="javascript:void(0)">--%>
                            <%--                                                    동서울지점_(유)을지식품(자체)_집합(아파트)_20220701.pdf--%>
                            <%--                                                </a>--%>
                            <%--                                            </td>--%>
                            <%--                                            <td>--%>
                            <%--                                                <a href="javascript:void(0)">--%>
                            <%--                                                    <span class="svg-icon svg-icon-primary svg-icon-2">--%>
                            <%--                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">--%>
                            <%--                                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor"/>--%>
                            <%--                                                            <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor"/>--%>
                            <%--                                                            <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor"/>--%>
                            <%--                                                            <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor"/>--%>
                            <%--                                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"/>--%>
                            <%--                                                        </svg>--%>
                            <%--                                                    </span>--%>
                            <%--                                                </a>--%>
                            <%--                                            </td>--%>
                            <%--                                            <td></td>--%>
                            <%--                                        </tr>--%>
                            <%--                                        <tr>--%>
                            <%--                                            <td>현황자료 등</td>--%>
                            <%--                                            <td>--%>
                            <%--                                                <a href="javascript:void(0)">--%>
                            <%--                                                    동서울지점_(유)을지식품(자체)_집합(아파트)_20220701.xlsx--%>
                            <%--                                                </a>--%>
                            <%--                                            </td>--%>
                            <%--                                            <td>--%>
                            <%--                                                <span class="svg-icon svg-icon-primary svg-icon-2">--%>
                            <%--                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">--%>
                            <%--                                                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor"/>--%>
                            <%--                                                        <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor"/>--%>
                            <%--                                                        <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor"/>--%>
                            <%--                                                        <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor"/>--%>
                            <%--                                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"/>--%>
                            <%--                                                    </svg>--%>
                            <%--                                                </span>--%>
                            <%--                                            </td>--%>
                            <%--                                            <td></td>--%>
                            <%--                                        </tr>--%>
                            <%--                                    </tbody>--%>
                            <%--                                </table>--%>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_7" role="tabpanel">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="mt-1">
                                    <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                            <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                지점감정 및 본사 검증감정 결과
                            </h5>
                        </div>
                        <div class="mt-2">
                            <span class="fs-9 text-danger">현재 작업 중인 내용은 반영되지 않습니다.</span>
                        </div>
                    </div>
                    <div id="kt_content_container">
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                <thead class="bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                    <th colspan="2">구분</th>
                                    <th>지점감정에 관한 사항</th>
                                    <th>본사 검증감정에 관한 사항</th>
                                </tr>
                                </thead>
                                <tbody class="bg-secondary">
                                <tr>
                                    <td rowspan="2" class="fw-bolder">시가 (비준가격)</td>
                                    <td class="fw-bolder">최저가</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_지점_최저가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled"/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_본사_최저가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fw-bolder">최고가</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_지점_최고가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_본사_최고가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="fw-bolder">예상 제1차 입찰가(평가가격)</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_지점_평가가격" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_본사_평가가격" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="fw-bolder">예상 낙찰가율</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_지점_예상낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_본사_예상낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="fw-bolder">예상 낙찰가</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_지점_예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_본사_예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="fw-bolder">당사 설정액</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_지점_당사설정액" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_본사_당사설정액" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="fw-bolder">초과 또는 부족 설정액</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_지점_초과부족설정분" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_공통보고서_본사_초과부족설정분" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="0" disabled="disabled" />
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="separator my-10"></div>
                    <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        감정평가
                    </h5>
                    <div id="kt_content_container">
                        <div class="form-floating">
                            <div id="kt_content_container">
                                <div class="table-responsive table-loading">
                                    <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                        <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <th class="col-md-2 text-center">평가구분</th>
                                            <th class="col-md-5 bg-white">
                                                <div id="Combo_보고서_평가구분"></div>
                                            </th>
                                            <th class="col-md-5 bg-white"></th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="separator my-10"></div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="mt-1">
                                    <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                            <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                감정의견
                            </h5>
                        </div>
                        <div class="mb-2">
                            <a id="Picture37_공통보고서_감정의견_의견보기" href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">의견보기</a>
                        </div>
                    </div>
                    <div class="card bg-gray-200" id="TreeView1_공통보고서_감정의견"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>