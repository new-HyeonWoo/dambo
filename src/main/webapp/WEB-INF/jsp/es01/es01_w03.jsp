<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
<%@ include file="/WEB-INF/jsp/template/es01_w03.jsp" %>

<script src="/resources/js/ezgen/variable/es01_w03.js"></script>
<script src="/resources/js/ezgen/macro/es01_w03.js"></script>
<script src="/resources/js/ezgen/page/es01_w03.js"></script>
<script src="/resources/js/ezgen/zoon/es01_w03.js"></script>

<script type="text/javascript">
    componentsMap.set('page', PageType.토건_주거);
    componentsMap.set('es', EsType.ES01);

    $(document).ready(function(){
        pageZoon.OnInitialize();
        pageEvent.init();
    });
</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>(토건) 주거용</title>
</head>

<body class="bg-secondary">
<div class="col-xxl-12 mb-1">
    <label for="debugName">테스트용</label><input type="text" id="debugName"/>
    <div class="text-center mb-5">
        <h3>지점감정현황</h3>
    </div>
    <div class ="row">
        <div class="col-3">
            <div class="d-flex align-items-center justify-content-start gap-4 mb-2 text-nowrap">
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture90_IT">
                    <i class="fas fa-file-alt"></i>저장
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture91_IT">
                    <i class="fas fa-file-alt"></i>배당처리
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture93">
                    <i class="fas fa-file-alt"></i>배당자료수정
                </a>
            </div>
        </div>
        <div class="col-9">
            <div class="d-flex align-items-center justify-content-end gap-4 mb-2 text-nowrap">
                <div class="fs-9 fw-bold text-danger">결재 진행 중 / 완료된 담보이거나 작성할 수 있는 권한이 없으므로 수정하실 수 없습니다. 전자결재를 이용하여 주십시오.</div>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture92">
                    <i class="fas fa-file-alt"></i>배당자료수정
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture_전감정사항비교표">
                    <i class="fas fa-file-alt"></i>전감정사항비교포
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture88">
                    <i class="fas fa-file-alt"></i>유입검토보고서
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture84">
                    <i class="fas fa-file-alt"></i>탁상감정
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Command_저장">
                    <i class="fas fa-file-alt"></i>저장
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Command_배당처리">
                    <i class="fas fa-file-alt"></i>배당처리
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture60">
                    <i class="fas fa-file-alt"></i>배당집계표
                </a>
                <a href="javascript:void(0)" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder" id="Picture61">
                    <i class="fas fa-print"></i>프린트
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
                                    <a href="javascript:void(0)" id="Picture6">
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
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">감정가액산출[地]Ⅰ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3">감정가액산출[地]Ⅱ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_4">감정가액산출[地]Ⅲ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">감정가액산출[地]Ⅳ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_6">감정가액산출[建]Ⅰ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_7">낙찰가율보정표</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_8">응찰입력표</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_9">배당표Ⅰ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_10">배당표Ⅱ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_11">문서관리</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_12">공통보고서</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                    <input type="hidden" class="hide" id="버튼_전감정사항비교표" disabled/>
                    <input type="button" class="hide" id="Command_버튼_활성화여부" />
                    <input type="button" class="hide" id="Command_배당처리시_자료CLEAR" />
                    <input type="hidden" class="hide" id="Edit_Doc_Key" disabled/>
                    <input type="hidden" class="hide" id="Edit_년도" disabled/>
                    <input type="hidden" class="hide" id="Edit_감정순번" disabled/>
                    <input type="hidden" class="hide" id="Edit_감정자사번" disabled/>
                    <input type="hidden" class="hide" id="Edit_건물의표시_합계_면적" disabled/>
                    <input type="hidden" class="hide" id="Edit_건물의표시_합계_면적_평" disabled/>
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
                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_거래처코드"/>
                                                </div>
                                                <div class="col-lg-9 col-md-9">
                                                    <div class="row">
                                                        <div class="col-lg-11 col-md-10">
                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_거래처"/>
                                                        </div>
                                                        <div class="col-lg-1 col-md-2">
                                                            <a href="javascript:void(0)" id="Picture4">
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
                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_대표자">
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th>2. 업소명</th>
                                        <th class="bg-white" colspan="2">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div id="Combo_입력표_업소구분"></div>
                                                </div>
                                                <div class="col-9">
                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_업소명"/>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="text-center col-2">대표자</th>
                                        <th class="bg-white"><input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_업소대표자"></th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th>3. 채무자</th>
                                        <th class="bg-white">
                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_채무자"/>
                                        </th>
                                        <th colspan="2" class="col-4">5. 채무자와 담보제공자의 관계</th>
                                        <th class="bg-white">
                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_채무자와담보제공자의관계"/>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th>4. 담보제공자</th>
                                        <th class="bg-white">
                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_담보제공자"/>
                                        </th>
                                        <th colspan="2">6. 이 담보물에 대한 재감정 여부</th>
                                        <th class="bg-white">
                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" id="Edit_재감정여부"/>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div class="separator my-10"></div>
                    <div class="d-flex justify-content-between">
                        <h5 class="mt-1">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            부동산의 표시
                        </h5>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <a href="javascript:void(0)" id="Command_본건_추가">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Command_본건_삭제">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="8">1. 토지의 표시</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                    <th class="col-1">소재지</th>
                                    <th class="col-5 bg-white">
                                        <div class="d-flex flex-column-fluid">
                                            <input type="text" id="Edit_소재지" class="form-control form-control-transparent fs-7 py-0 px-2  text-start size-min-width-80 w-auto" value="" disabled="disabled"/>
                                            <a href="javascript:void(0)" id="Picture21">
                                                <span class="svg-icon svg-icon-primary svg-icon-2 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"></path>
                                                        <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </th>
                                    <th class="col-6 bg-white">
                                    </th>
                                </tr>
                                <tr class="bg-white">
                                    <td colspan="8">
                                        <table class="table table-row-bordered border gs-5 gy-3 gx-5">
                                            <tbody>
                                                <div id="DBGrid_토지의표시"></div>
                                            </tbody>
                                            <tfoot class="bg-secondary">
                                                <tr>
                                                    <td class="text-center w-750px">합계</td>
                                                    <td class="bg-white w-150px">
                                                        <input type="text" id="Edit_토지의표시_합계_면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                    </td>
                                                    <td class="bg-white w-150px">
                                                        <input type="text" id="Edit_토지의표시_합계_면적_평" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                    </td>
                                                    <td class="bg-white w-150px">
                                                        <input type="text" id="Edit_토지의표시_합계_개별공시지가_면적" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                    </td>
                                                    <td class="bg-white w-150px">
                                                        <input type="text" id="Edit_토지의표시_합계_개별공시지가_면적_평" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                    </td>
                                                    <td class="bg-white w-150px">
                                                        <input type="text" id="Edit_토지의표시_합계_개별공시지가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="" disabled="disabled"/>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle text-nowrap">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th colspan="3">2. 감정 대상 부동산에의 규제의 표시</th>
                                </tr>
                                <tr>
                                    <th class="col-md-1 fs-7 fw-bolder text-center" rowspan="3">지역·지구 등 <br>지정여부</th>
                                    <td class="col-md-3 fs-7 fw-bolder text-center">국토의 계획 및 이용에 관한 법률에 따른 지역·지구들</td>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_국토의계획" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="col-md-3 fs-7 fw-bolder text-center">다른 법률등에 따른 지역·지구들</td>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_다른법률등" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="col-md-3 fs-7 fw-bolder text-center">시행령 부칙 제3조에 따른 추가기재확인 내용</td>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_시행령부칙" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                <tr class="fs-7 text-gray-800">
                                    <th class="text-start fw-bolder text-center" colspan="2">"토지이용규제기본법시행령" 제9조 2항 각호에 해당되는 사항</th>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_토지이용규제" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                <tr class="fs-7 text-gray-800">
                                    <th class="text-start fw-bolder text-center" colspan="2">주변 토지의 주된 이용현황</th>
                                    <td class="bg-white">
                                        <input type="text" id="Edit_주변토지의주된" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100" value=""/>
                                    </td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="mt-2"></div>
                            <div class="mt-2">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <a href="javascript:void(0)" id="Picture43">
                                            <i class="fas fa-plus-circle"></i>
                                        </a>
                                        <a href="javascript:void(0)" id="Picture44">
                                            <i class="fas fa-minus-circle"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th class="col-md-7">3. 건물의 표시</th>
                                    <th class="col-md-2 text-center">건물의 주된 용도</th>
                                    <th class="col-md-3 bg-white">
                                        <input type="text" id="Edit_건물의주된용도" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                    </th>
                                </tr>
                                <tr class="bg-white">
                                    <th colspan="3" class="bg-white">
                                        <div id="DBGrid_건물의표시"></div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle text-nowrap">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th rowspan="3" class="col-md-3">4. 감정 대상 부동산에의 규제의 표시</th>
                                    <th class="text-center">주택/상가 가임대보증금 적용대상</th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 bg-white">
                                    <th>
                                        <div class="row">
                                            <div class="col-1">
                                                <div class="text-primary text-center">
                                                    1)주택
                                                </div>
                                            </div>
                                            <div class="col-11" id="Combo_가임대보증금_주택">
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 bg-white">
                                    <th>
                                        <div class="row">
                                            <div class="col-1">
                                                <div class="text-primary text-center">
                                                    2)상가
                                                </div>
                                            </div>
                                            <div class="col-11" id="Combo_가임대보증금_상가">
                                            </div>
                                        </div>
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
                        감정에 관한 사항
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive">
                            <table class="table table-row-bordered border gs-5 gy-3 gx-5">
                                <thead class="bg-secondary align-middle">
                                <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                    <th>구분</th>
                                    <th>부동산 구분</th>
                                    <th>총액</th>
                                    <th>m<sup>2</sup>당 가격</th>
                                    <th>평당 단가</th>
                                </tr>
                                <tr>
                                    <td class="fw-bolder fs-7 text-gray-800">1. 실거래가격</td>
                                    <td class="fw-bolder fs-7 text-gray-800 text-center">등기부등본상의 시세</td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_실거래가격_총액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_실거래가격_단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100"/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원/m<sup>2</sup></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_실거래가격_평당단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100"/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원/평</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fw-bolder fs-7 text-gray-800">2. 개별주택가격</td>
                                    <td></td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_개별주택가격_총액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value=""/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_개별주택가격_단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100"/>
                                            </div>
                                            <div class="col-3">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원/m<sup>2</sup></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="bg-white">
                                        <div class ="row">
                                            <div class="col-9">
                                                <input type="text" id="Edit_개별주택가격_평당단가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100"/>
                                            </div>
                                            <div class="col-3">
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
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>1. 토지 담보제공 비율</th>
                                </tr>
                                <tr class="bg-white">
                                    <th>
                                        <div id="DBGrid_담보제공비율"></div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="d-flex align-items-center justify-content-end gap-4 mb-2 text-nowrap">
                            <div class="fs-9 fw-bold text-danger">건물의 등기, 면적 또는 소재지변 변경시 [비율계산]을 하셔야 합니다.</div>
                            <div class="mb-2">
                                <a id="Command1" href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">비율계산</a>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                <thead class="align-middle bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>
                                        2. 건물 담보제공 비율
                                    </th>
                                </tr>
                                <tr class="bg-white">
                                    <th>
                                        <div id="DBGrid_담보제공비율_건물"></div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpane2">
                    <div id="kt_content_container">
                        <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            본건토지
                        </h5>
                        <div class="border rounded p-5 pb-1">
                            <div class="table-responsive table-loading">
                                <div id="DBGrid_본건토지"></div>
                            </div>
                        </div>
                        <div class="my-5"></div>
<%--                        <h5 class="mt-6">--%>
<%--                            <span class="svg-icon svg-icon-primary svg-icon-2hx">--%>
<%--                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">--%>
<%--                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>--%>
<%--                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>--%>
<%--                                </svg>--%>
<%--                            </span>--%>
<%--                            표준지 공시지가의 선정--%>
<%--                        </h5>--%>
                        <div class="d-flex justify-content-between">
                            <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                                표준지 공시지가의 선정
                            </h5>
                            <div class="mt-2">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <a href="javascript:void(0)" id="Picture23">
                                            <i class="fas fa-plus-circle"></i>
                                        </a>
                                        <a href="javascript:void(0)" id="Picture34">
                                            <i class="fas fa-minus-circle"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded p-5 pb-1">
                            <div class="table-responsive table-loading">
                                <div id="DBGrid_표준지공시지가"></div>
                            </div>
                        </div>
                        <div class="my-5"></div>
                        <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            본건 인근지역의 가격수준
                        </h5>
                        <div class="border rounded p-5 pb-1">
                            <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                <thead class="bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle text-center">
                                    <td rowspan="2">선택</td>
                                    <td rowspan="2" colspan="2">구분</td>
                                    <td colspan="2">가격수준</td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-center">
                                    <td>원/m<sup>2</sup></td>
                                    <td>원/평</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle text-center bg-secondary">
                                    <td rowspan="2">1</td>
                                    <td rowspan="2">상업용</td>
                                    <td>최저가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_상업용_최저가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_상업용_최저가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-center bg-secondary">
                                    <td>최고가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_상업용_최고가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_상업용_최고가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle text-center bg-secondary">
                                    <td rowspan="2">2</td>
                                    <td rowspan="2">주거용</td>
                                    <td>최저가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_주거용_최저가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_주거용_최저가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-center bg-secondary">
                                    <td>최고가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_주거용_최고가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_주거용_최고가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle text-center bg-secondary">
                                    <td rowspan="2">3</td>
                                    <td rowspan="2">일반용</td>
                                    <td>최저가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_일반용_최저가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_일반용_최저가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-center bg-secondary">
                                    <td>최고가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_일반용_최고가"  type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_일반용_최고가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle text-center bg-secondary">
                                    <td rowspan="2">4</td>
                                    <td rowspan="2">전</td>
                                    <td>최저가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_전_최저가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_전_최저가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-center bg-secondary">
                                    <td>최고가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_전_최고가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_전_최고가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle text-center bg-secondary">
                                    <td rowspan="2">5</td>
                                    <td rowspan="2">답</td>
                                    <td>최저가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_답_최저가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_답_최저가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-center bg-secondary">
                                    <td>최고가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_답_최고가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_답_최고가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle text-center bg-secondary">
                                    <td rowspan="2">6</td>
                                    <td rowspan="2">임야</td>
                                    <td>최저가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_임야_최저가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_임야_최저가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                <tr class="fw-bolder fs-7 text-gray-800 text-center text-center bg-secondary">
                                    <td>최고가</td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_임야_최고가" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                    <td class="bg-white">
                                        <input id="Edit_본건인근지역_임야_최고가_평" type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="my-5"></div>
<%--                        <h5 class="mt-6">--%>
<%--                            <span class="svg-icon svg-icon-primary svg-icon-2hx">--%>
<%--                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">--%>
<%--                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>--%>
<%--                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>--%>
<%--                                </svg>--%>
<%--                            </span>--%>
<%--                            비준가격 산정 사례--%>
<%--                        </h5>--%>
                        <div class="d-flex justify-content-between">
                            <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                                비준가격 산정 사례
                            </h5>
                            <div class="mt-2">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <a href="javascript:void(0)" id="Picture35">
                                            <i class="fas fa-plus-circle"></i>
                                        </a>
                                        <a href="javascript:void(0)" id="Picture36">
                                            <i class="fas fa-minus-circle"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded p-5 pb-1">
                            <div id="DBGrid_비준가격_산정사례"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_3" role="tabpane3">
                    <div class="d-flex justify-content-between">
                        <h5 class="mt-1">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            표준공시지가 기준가격
                        </h5>
                        <div class="mt-2">
                            <div>
                                <a href="javascript:void(0)" id="Picture37">
                                    <i class="fas fa-plus-circle"></i>
                                </a>
                                <a href="javascript:void(0)" id="Picture38">
                                    <i class="fas fa-minus-circle"></i>
                                </a>
                            </div>    
                        </div>
                    </div>
                    <div class="border rounded p-5 pb-1">
                        <div class="row d-flex">
                            <div class="col-lg-2 col-md-12 col-sm-12">
                                <div id="DBGrid_기준가격"></div>
                            </div>
                            <div class="col-lg-10 col-md-12 col-sm-12">
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle text-center">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th colspan="3">비교내용</th>
                                            <th>본건요인</th>
                                            <th>표준지요인</th>
                                            <th>비교치</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-secondary align-middle text-center">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th colspan="3">공시지가</th>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" />
                                                    </div>
                                                    <div class="col-4">
                                                        ~
                                                    </div>
                                                    <div class="col-4">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" />
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_표준지요인_공시지가">
                                            </td>
                                            <th class="bg-white"></th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="3" rowspan="2" class="align-middle">
                                                시점수정<br>(물가지수)
                                            </td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_본건요인_시점수정_날짜"/>
                                                    </div>
                                                    <div class="col-4">
                                                        <span class="fs-10 fw-normal">현재</span>
                                                    </div>
                                                    <div class="col-4">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_본건요인_시점수정"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_표준지요인_시점수정_날짜"/>
                                                    </div>
                                                    <div class="col-4">
                                                        <span class="fs-10 fw-normal">부터 감정일까지</span>
                                                    </div>
                                                    <div class="col-4">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_표준지요인_시점수정" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_기준가격_비교치_시점수정">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="기준_Label_시점_본건_경과일" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_표준지요인_시점수정_날짜_경과일" />
                                            </td>
                                            <td class="bg-white"></td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="3" class="align-middle">
                                                소재지(지역비교)
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_본건요인_소재지">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_표준지요인_소재지">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_소재지">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="20" class="align-middle">
                                                개<br>별<br>비<br>교
                                            </td>
                                            <td rowspan="2" class="align-middle">
                                                가로조건
                                            </td>
                                            <td>
                                                도로조건
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_도로조건"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_도로조건"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_도로조건">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                도로거리
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_도로거리"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_도로거리"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_도로거리">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="3" class="align-middle">
                                                접근조건
                                            </td>
                                            <td>
                                                관공서접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_관공서접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_관공서접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_관공서접근성">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                중심지역접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_중심지역접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_중심지역접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_중심지역접근성">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타접근성
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_본건요인_기타접근성">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_표준지요인_기타접근성">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_기타접근성">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="3" class="align-middle">
                                                환경조건
                                            </td>
                                            <td>
                                                철도/지상전철접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_철도접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_철도접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_철도접근성">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                폐기물/수질오염접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_폐기물접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_폐기물접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_폐기물접근성">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타환경조건
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_본건요인_기타환경조건">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_표준지요인_기타환경조건">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_기타환경조건">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="4" class="align-middle">
                                                행정조건
                                            </td>
                                            <td>
                                                용도지역
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_용도지역"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_용도지역"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_용도지역">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                용도지구
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_용도지구"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_용도지구"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_용도지구">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                도시계획등에 저축정도
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_도시계획"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_도시계획"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_도시계획">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                저축률
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_저촉률"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_저촉률"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_저촉률">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="6" class="align-middle">
                                                획지조건
                                            </td>
                                            <td>
                                                고저
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_고저"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_고저"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_고저">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                형상
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_형상"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_형상"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_형상">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                방위
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_방위"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_방위"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_방위">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                면적
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_면적"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_면적"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_면적" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                토지이용상황
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_본건요인_토지이용상황"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_기준가격_표준지요인_토지이용상황"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_토지이용상황" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Combo_기준가격_본건요인_기타" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Combo_기준가격_표준지요인_기타" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_기타" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="2" class="align-middle">
                                                기타조건
                                            </td>
                                            <td>
                                                장래의동향여부
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Combo_기준가격_본건요인_장래의동향">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Combo_기준가격_표준지요인_장래의동향">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_장래의동향">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_기준가격_본건요인_기타조건">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_기준가격_표준지요인_기타조건">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_기준가격_비교치_기타조건">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                요인합계
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_요인합계"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                감가율
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_감가율"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                적용요인합계
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_적용요인합계"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                산정단가(원/m<sup>2</sup>)
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_산정단가"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                적용단가(원/m<sup>2</sup>)
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_기준가격_비교치_적용단가"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <h5 class="mt-6">
                        <span class="svg-icon svg-icon-primary svg-icon-2hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                            </svg>
                        </span>
                        표준지 공시지가 기준가격 집계표
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive table-loading">
                            <div id="DBGrid_기준가격집계표"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_4" role="tabpane4">
                    <div class="d-flex justify-content-between">
                        <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            비준가격 산정
                        </h5>
                        <div class="mt-2">
                            <div>
                                <a href="javascript:void(0)" id="Picture39">
                                    <i class="fas fa-plus-circle"></i>
                                </a>
                                <a href="javascript:void(0)" id="Picture40">
                                    <i class="fas fa-minus-circle"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded p-5 pb-1">
                        <div class="row d-flex">
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div id="DBGrid_비준가격"></div>
                            </div>
                            <div class="col-lg-9 col-md-12 col-sm-12">
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle text-center">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th colspan="3">비교내용</th>
                                            <th>본건요인</th>
                                            <th>거래사례</th>
                                            <th>비교치</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-secondary align-middle text-center">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th colspan="3">공시지가</th>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-5">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" />
                                                    </div>
                                                    <div class="col-2">
                                                        -
                                                    </div>
                                                    <div class="col-5">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" />
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_비준가격_표준지요인_가격사례">
                                            </td>
                                            <th class="bg-white"></th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="3" rowspan="2" class="align-middle">
                                                시점수정<br>(물가지수)
                                            </td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-5">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_비준가격_본건요인_시점수정_날짜"/>
                                                    </div>
                                                    <div class="col-2">
                                                        현재
                                                    </div>
                                                    <div class="col-5">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_비준가격_본건요인_시점수정"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-5">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_비준가격_표준지요인_시점수정_날짜"/>
                                                    </div>
                                                    <div class="col-2">
                                                        부터 감정일까지
                                                    </div>
                                                    <div class="col-5">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_비준가격_표준지요인_시점수정"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_비준가격_비교치_시점수정">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="비준_Label_시점_본건_경과일" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 fs-7 min-w-100" value="" id="Edit_비준가격_표준지요인_시점수정_날짜_경과일" />
                                            </td>
                                            <td class="bg-white"></td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="3" class="align-middle">
                                                소재지(지역비교)
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 fs-7 min-w-100" value="" id="Edit_비준가격_본건요인_소재지">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 fs-7 min-w-100" value="" id="Edit_비준가격_표준지요인_소재지">
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_소재지">
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="20" class="align-middle">
                                                개<br>별<br>비<br>교
                                            </td>
                                            <td rowspan="2" class="align-middle">
                                                가로조건
                                            </td>
                                            <td>
                                                도로조건
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_도로조건"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_도로조건"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_도로조건" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                도로거리
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_도로거리"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_도로거리"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_도로거리"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="3" class="align-middle">
                                                접근조건
                                            </td>
                                            <td>
                                                관공서접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_관공서접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_관공서접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_관공서접근성"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                중심지역접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_중심지역접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_중심지역접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_중심지역접근성" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타접근성
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_본건요인_기타접근성" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_표준지요인_기타접근성" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_기타접근성" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="3" class="align-middle">
                                                환경조건
                                            </td>
                                            <td>
                                                철도/지상전철접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_철도접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_철도접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_철도접근성" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                폐기물/수질오염접근성
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_폐기물접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_폐기물접근성"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_폐기물접근성" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타환경조건
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_본건요인_기타환경조건" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_표준지요인_기타환경조건" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_기타환경조건" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="4" class="align-middle">
                                                행정조건
                                            </td>
                                            <td>
                                                용도지역
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_용도지역"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_용도지역"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_용도지역" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                용도지구
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_용도지구"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_용도지구"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_용도지구" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                도시계획등에 저축정도
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_도시계획"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_도시계획"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_도시계획" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                저축률
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_저촉률"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_저촉률"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_저촉률" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="6" class="align-middle">
                                                획지조건
                                            </td>
                                            <td>
                                                고저
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_고저"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_고저"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_고저" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                형상
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_형상"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_형상"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_형상" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                방위
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_방위"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_방위"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_방위" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                면적
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_면적"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_면적"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_면적" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                토지이용상황
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_본건요인_토지이용상황"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_비준가격_표준지요인_토지이용상황"></div>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_토지이용상황"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Combo_비준가격_본건요인_기타"/>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Combo_비준가격_표준지요인_기타"/>
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_기타"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td rowspan="2" class="align-middle">
                                                기타조건
                                            </td>
                                            <td>
                                                장래의동향여부
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Combo_비준가격_본건요인_장래의동향" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Combo_비준가격_표준지요인_장래의동향" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_장래의동향" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>
                                                기타
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_본건요인_기타조건" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_표준지요인_기타조건" />
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_기타조건" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                요인합계
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_요인합계"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                산정단가(원/m<sup>2</sup>)
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_산정단가"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="5">
                                                적용단가(원/m<sup>2</sup>)
                                            </td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" value="" id="Edit_비준가격_비교치_적용단가"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <h5 class="mt-6">
                        <span class="svg-icon svg-icon-primary svg-icon-2hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                            </svg>
                        </span>
                        비준가격의 산정 집계표
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive table-loading">
                            <div id="DBGrid_비준가격집계표"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_5" role="tabpane5">
                    <div class="d-flex justify-content-between">
                        <h5 class="mt-1">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                        <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            기타요인의 산정
                        </h5>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <a href="javascript:void(0)" id="Picture41">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Picture42">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive table-loading">
                            <div id="DBGrid_기타요인"></div>
                        </div>
                    </div>
                    <div class="my-5"></div>
                    <h5 class="mt-6">
                        <span class="svg-icon svg-icon-primary svg-icon-2hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                            </svg>
                        </span>
                        평가액의 산정
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive table-loading">
                            <div id="DBGrid_평가액"></div>
                        </div>
                    </div>
                    <div class="my-5"></div>
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
                        <div class="table-responsive table-loading">
                            <div id="DBGrid_담보"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_6" role="tabpane6">
                    <h5 class="mt-6">
                        <span class="svg-icon svg-icon-primary svg-icon-2hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                            </svg>
                        </span>
                        건물단가 산정
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="row d-flex">
                            <div class="col-lg-2 col-md-12 col-sm-12">
                                <div id="DBGrid_건물단가"></div>
                            </div>
                            <div class="col-lg-5 col-md-12 col-sm-12">
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle text-center">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th rowspan="4" class="w-150px">표준단가의 산정</th>
                                            <th class="w-150px">용도</th>
                                            <th class="bg-white">
                                                <div id="Combo_건물단가_표준단가_용도"></div>
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>구조</th>
                                            <th class="bg-white">
                                                <div id="Combo_건물단가_표준단가_구조"></div>
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>급수</th>
                                            <th class="bg-white">
                                                <div id="Combo_건물단가_표준단가_급수"></div>
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>적용단가</th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_건물단가_표준단가_적용단가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" id="Edit_건물단가_표준단가_적용단가">
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle text-center">
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th rowspan="6" class="w-150px">부대설비 보정</th>
                                        <th class="w-150px">냉난방</th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div id="Combo_건물단가_부대설비_냉난방"></div>
                                                </div>
                                                <div class="col-9">
                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" id="Edit_건물단가_부대설비_냉난방">
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>엘레베이터</th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div id="Combo_건물단가_부대설비_엘리베이터"></div>
                                                </div>
                                                <div class="col-9">
                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" id="Edit_건물단가_부대설비_엘리베이터">
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>위생설비</th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div id="Combo_건물단가_부대설비_위생설비"></div>
                                                </div>
                                                <div class="col-9">
                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" id="Edit_건물단가_부대설비_위생설비">
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>화재탐지/소화전</th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div id="Combo_건물단가_부대설비_화재탐지"></div>
                                                </div>
                                                <div class="col-9">
                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" id="Edit_건물단가_부대설비_화재탐지">
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>기타</th>
                                        <th class="bg-white">
                                            <div class="row">
                                                <div class="col-3">
                                                    <div id="Combo_건물단가_부대설비_기타"></div>
                                                </div>
                                                <div class="col-9">
                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" id="Edit_건물단가_부대설비_기타">
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>층보정단가</th>
                                        <th class="bg-white">
                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" id="Edit_건물단가_부대설비_총보정단가">
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="col-lg-5 col-md-12 col-sm-12">
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle text-center">
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th rowspan="7" class="w-100px">단기조정</th>
                                        <th rowspan="2" class="w-100px">충개축여부</th>
                                        <th class="w-100px">횟수</th>
                                        <th class="bg-white">
                                            <div id="Combo_건물단가_중개축여부_횟수"></div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>적용지수</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_건물단가_중개축여부_적용지수" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th rowspan="2">관리상태</th>
                                        <th>상/중/하</th>
                                        <th class="bg-white">
                                            <div id="Combo_건물단가_관리상태_상중하"></div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>적용지수</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_건물단가_관리상태_적용지수" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th rowspan="2">보정</th>
                                        <th>적용보정률</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_건물단가_적용보정률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" >
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>사유</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_건물단가_적용보정률_사유" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th colspan="2">층단가조정지수</th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_건물단가_총단가조정지수" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle text-center">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th rowspan="4" class="w-150px">잔가율</th>
                                            <th class="w-150px">건축년도</th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_건물단가_잔가율_건축년도" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>경과년수</th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_건물단가_잔가율_경과년수" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>내용연수</th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_건물단가_잔가율_내용년수" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>잔가율</th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_건물단가_잔가율_잔가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle text-center">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th rowspan="2" class="w-150px">건물단가</th>
                                            <th class="w-150px">산정단가</th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_건물단가_건물단가_산정단가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>적용단가</th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_건물단가_건물단가_적용단가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="my-5"></div>
                    <h5 class="mt-6">
                        <span class="svg-icon svg-icon-primary svg-icon-2hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                            </svg>
                        </span>
                        건물평가액의 집계표
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive table-loading">
                            <div id="DBGrid_건물평가액_집계표"></div>
                        </div>
                    </div>
                    <div class="my-5"></div>
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
                        <div class="table-responsive table-loading">
                            <div id="DBGrid_담보_건물_Group"></div>
                            <div id="DBGrid_담보_건물"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_7" role="tabpane7">
                    <div class="border rounded p-5 pb-1">
                        <div class="row d-flex">
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="2">감정대상 부동산의 기준 낙찰가율</td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="w-150px">당해지역의 낙찰가율</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100"  id="Edit_보정표_당해지역낙찰가율">
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-1">%</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>유사부동산 낙찰가율</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100"  id="Edit_보정표_유사부동산낙찰가율">
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-1">%</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>기준 낙찰가율</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100"  id="Edit_보정표_기준낙찰가율">
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-1">%</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>0. 주거용 부동산의 점유자 형태</td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="bg-white">
                                                <div id="Combo_보정표_점유자형태"></div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100"  id="Edit_보정표_점유자형태_적용률" />
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td colspan="2">1.법정지상권의 성립사유 및 적용률</td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="w-150px">법정지상권 성립사유</td>
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_보정표_법정지상권성립사유"/>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                                            <td rowspan="2">법정지성권 적용률</td>
                                            <td class="bg-white">
                                                <div id="Combo_보정표_법정지상권"></div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="bg-white">
                                                <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100"  id="Edit_보정표_법정지상권_적용률" />
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center" id="법정지상권 존속기간_tr" style="display: none">
                                            <td>법정지상권 존속기간</td>
                                            <td class="bg-white">
                                                <div id="Combo_보정표_법정지상권_존속기간"></div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td class="w-150px">1.평가가격</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100"  id="Edit_보정표_평가가격">
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-1">원</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>2.제1차예상입찰가<br>(최종평가가격)</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_보정표_제1차예상최저입찰가">
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-1">원</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>3.적용할 낙찰가율</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_보정표_적용할낙찰가율">
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-1">%</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800">
                                            <td>4.예상낙찰가율</td>
                                            <td class="bg-white">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <input type="text" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100" id="Edit_보정표_예상낙찰가">
                                                    </div>
                                                    <div class="col-3">
                                                        <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-1">원</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5">
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td colspan="2">현재의 이용현황, 향후 3년 이내의 이용 가능성</td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td>현재의 주된 이용</td>
                                            <td>장래의 이용 가능성</td>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <td class="bg-white">
                                                <div id="Combo_보정표_현재의주된"></div>
                                            </td>
                                            <td class="bg-white">
                                                <div id="Combo_보정표_장래의이용"></div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle">
                                        <tr class="fw-bolder fs-7 text-gray-800r">
                                            <th colspan="3">2. 단독주택 (다가구주택 포함)</th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th>접한 도로의 폭</th>
                                            <th>대지의 면적</th>
                                            <th>건축물의 경과년도</th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th class="bg-white">
                                                <div id="Combo_보정표_단독주택_접한도로폭"></div>
                                            </th>
                                            <th class="bg-white">
                                                <div id="Combo_보정표_단독주택_대지의면적"></div>
                                            </th>
                                            <th class="bg-white">
                                                <div id="Combo_보정표_단독주택_경과년도"></div>
                                            </th>
                                        </tr>
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                            <th class="bg-white">
                                                <input type="text" id="Edit_보정표_단독주택_접한도로폭_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled">
                                            </th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_보정표_단독주택_대지의면적_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled">
                                            </th>
                                            <th class="bg-white">
                                                <input type="text" id="Edit_보정표_단독주택_경과년도_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled">
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle">
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th colspan="4">3. 상업용 부동산</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>접한 도로의 폭</th>
                                        <th>토지의 형상</th>
                                        <th>주변상권의 발달정도</th>
                                        <th>건축물의 경과년도</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th class="bg-white">
                                            <div id="Combo_보정표_상업용_접한도로폭"></div>
                                        </th>
                                        <th class="bg-white">
                                            <div id="Combo_보정표_상업용_토지의형상"></div>
                                        </th>
                                        <th class="bg-white">
                                            <div id="Combo_보정표_상업용_주변상권"></div>
                                        </th>
                                        <th class="bg-white">
                                            <div id="Combo_보정표_상업용_경과년도"></div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_상업용_접한도로폭_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_상업용_토지의형상_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_상업용_주변상권_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_상업용_경과년도_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                                <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                    <thead class="bg-secondary align-middle">
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th colspan="4">4. 주거용 및 상업용 외의 일반용 부동산</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th>접한 도로의 폭</th>
                                        <th>토지의 면적</th>
                                        <th>담보물의 입지 조건</th>
                                        <th>건축물의 경과년도</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th class="bg-white">
                                            <div id="Combo_보정표_주거용_접한도로의폭"></div>
                                        </th>
                                        <th class="bg-white">
                                            <div id="Combo_보정표_주거용_토지의면적"></div>
                                        </th>
                                        <th class="bg-white">
                                            <div id="Combo_보정표_주거용_입지조건"></div>
                                        </th>
                                        <th class="bg-white">
                                            <div id="Combo_보정표_주거용_경과년도"></div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_주거용_접한도로의폭_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_주거용_토지의면적_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_주거용_입지조건_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                        <th class="bg-white">
                                            <input type="text" id="Edit_보정표_주거용_경과년도_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                                <div class="row d-flex">
                                    <div class="col-3">
                                        <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                            <thead class="bg-secondary align-middle">
                                            <tr class="fw-bolder fs-7 text-gray-800">
                                                <th colspan="4">공유지분 해당여부</th>
                                            </tr>
                                            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                                <th class="bg-white">
                                                    <div id="Combo_보정표_공유지분"></div>
                                                </th>
                                            </tr>
                                            <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                                <th class="bg-white">
                                                    <input type="text" id="Edit_보정표_공유지분_적용률" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                                </th>
                                            </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-5"></div>
                    <h5 class="mt-6">
                        <span class="svg-icon svg-icon-primary svg-icon-2hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                            </svg>
                        </span>
                        감정가격산출내역
                    </h5>
                    <div class="border rounded p-5 pb-1">
                        <div class="row d-flex">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
                                    <tbody>
                                        <div id="DBGrid_감정가액산출내역"></div>
                                    </tbody>    
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                                            <td class="w-250px">합계</td>
                                            <th class="bg-white w-150px">
                                                <input type="text" id="Edit_보정표_감정가격산출내역_평가액" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100 ">
                                            </th>
                                            <th class="bg-white w-150px">
                                                <input type="text" id="Edit_보정표_감정가격산출내역_예상낙찰가" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100 ">
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
                                    <tbody>
                                        <div id="DBGrid_감정가액산출내역_건물"></div>
                                    </tbody>
                                    <thead class="bg-secondary">
                                        <tr class="fw-bolder fs-7 text-gray-800 text-center align-middle">
                                            <td class="w-150px">합계</td>
                                            <th class="bg-white w-150px">
                                                <input type="text" id="Edit_보정표_감정가격산출내역_평가액_건물" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100">
                                            </th>
                                            <th class="bg-white w-150px">
                                                <input type="text" id="Edit_보정표_감정가격산출내역_예상낙찰가_건물" class="form-control form-control-transparent py-0 px-2 text-end fs-7 min-w-100">
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_8" role="tabpane7">
                    <input type="hidden" class="hide" id="응찰_변수_숫자1"/>
                    <input type="hidden" class="hide" id="응찰_변수_숫자2"/>
                    <input type="hidden" class="hide" id="응찰_경매_Formula_기일내역_Row"/>
                    <input type="hidden" class="hide" id="응찰_경매_Formula_기일내역_TNUM"/>
                    <input class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" type="button" id="Command_응찰_11_내용"/>
                    <input class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" type="button" id="Command_응찰_00_탭활성여부"/>
                    <input type="hidden" class="hide" id="응찰_입력표활성여부"/>
                    <input type="hidden" class="hide" id="Command_전감정_지점_예상낙찰가계산"/>
                    <input type="hidden" class="hide" id="Command_전감정_본사_예상낙찰가계산"/>
                    <input type="hidden" class="hide" id="응찰_변수_숫자_부담비용합계"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_12_부담비용합계"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_13_추정예상매각대금"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_14_취득비용"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_15_보유수익"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_16_보유비용"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_17_처분비용"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_18_항목별합계"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_00_메인"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_01_쿼리"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_02_이벤트"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_03_초기화"/>
                    <input type="button" class="btn btn-sm btn-outline btn-outline-dashed me-2 mb-2 hide" id="Command_응찰_91_저장"/>

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
                        <div class="border rounded p-5 pb-1">
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
                        <div class="border rounded p-5 pb-1">
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
                        <div class="border rounded p-5 pb-1">
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
                        <div class="border rounded p-5 pb-1">
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
                        <div class="border rounded p-5 pb-1">
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
                        <div class="border rounded p-5 pb-1">
                            <div class="border border-primary rounded p-5">
                                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm">
                                    <input class="form-check-input" type="checkbox" value="Y" id="응찰_수지_응찰여부"/>
                                    <span class="ms-3">응찰하고자 하는 경우에는 체크하세요</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_9" role="tabpane8">

                    <input type="hidden" class="hide" id="Edit_배당표_상가_임대차보호법">
                    <input type="hidden" class="hide" id="Edit_배당표_상가_가임대보증금_적용범위">

                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive">
                            <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                                <thead class="bg-secondary">
                                <tr class="fw-bolder fs-7 text-gray-800">
                                    <th>경매비용의 槪算</th>
                                    <th>채권자 중 최고 채권액</th>
                                    <th class="fw-normal bg-white">
                                        <div class ="row">
                                            <div class="col-11">
                                                <input type="text" id="Edit_배당표_최고채권액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="">
                                            </div>
                                            <div class="col-1">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="fw-normal bg-white">
                                        <div id="Combo_배당표_최고채권액"></div>
                                    </th>
                                    <th class="fw-normal bg-white">
                                        <div class ="row">
                                            <div class="col-11">
                                                <input type="text" id="Edit_배당표_경매비용" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100">
                                            </div>
                                            <div class="col-1">
                                                <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
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
                                주택임차보증금의 계산
                            </h5>
                        </div>
                        <div class="mt-2">
                            <a href="javascript:void(0)" id="Picture50">
                                <i class="fas fa-plus-circle"></i>
                            </a>
                            <a href="javascript:void(0)" id="Picture47">
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
                                                        <input type="text" id="Edit_배당표_적용할주택가임대보증금액" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled">
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
                                                            <th class="w-300px">합계</th>
                                                            <th class="bg-white w-150px">
                                                                <input type="text" id="Edit_배당표_합계_총방의개수" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value=""/>
                                                            </th>
                                                            <th class="w-100px"></th>
                                                            <th class="bg-white w-150px">
                                                                <input type="text" id="Edit_배당표_합계_적용한방의개수" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value=""/>
                                                            </th>
                                                            <th class="bg-white w-150px">
                                                                <input type="text" id="Edit_배당표_합계_실제임대차보증금" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value=""/>
                                                            </th>
                                                            <th class="bg-white w-150px">
                                                                <input type="text" id="Edit_배당표_합계_최종적용가임대보증금" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value=""/>
                                                            </th>
                                                            <th class="bg-white w-150px">
                                                                <input type="text" id="Edit_배당표_합계_주택임대차보증금_확정" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value=""/>
                                                            </th>
                                                            <th class="bg-white w-150px">
                                                                <input type="text" id="Edit_배당표_합계_주택임대차보증금_확정없는" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value=""/>
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
                                상가건물 임대차보증금의 계산
                            </h5>
                        </div>
                        <div class="mt-2">
                            <a href="javascript:void(0)" id="Picture52">
                                <i class="fas fa-plus-circle"></i>
                            </a>
                            <a href="javascript:void(0)" id="Picture53">
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
                                        <th colspan="3" class="col-md-10">0. 상가건물임대차보호법의 假임대 보증금의 최고한도액 산출을 위한 담보부동산 전부의 예상낙찰가</th>
                                        <th class="col-md-2 fw-normal bg-white">
                                            <div class="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_배당표_상가_예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="">
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800">
                                        <th colspan="3" class="col-md-10">1. 상가건물임대차보호법의 假임대 보증금의 최고한도액 : 담보 부동산 경락가액 (예상낙찰가-경매비용)의 1/2까지</th>
                                        <th class="col-md-2 fw-normal bg-white">
                                            <div class="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_배당표_상가_경락가액" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="">
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 text-nowrap">
                                        <th>2. 가임대 보증금 적용대상</th>
                                        <th>2-1. 상가임대차보호법 적용범위</th>
                                        <th>2-2. 상가 가임대보증금 적용 범위</th>
                                        <th>2-2. 적용할 주택가임대보증금액 (최우선변제 소액임대차보증금) 한도액</th>
                                    </tr>
                                    <tr class="fw-bolder fs-7 text-gray-800 bg-white">
                                        <th colspan="3" class="fw-normal">
                                            <div id="Combo_배당표_상가_가임대보증금_적용범위"></div>
                                        </th>
                                        <th class="fw-normal">
                                            <div class="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_배당표_적용할상가가임대보증금액" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="">
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colspan="9" class="bg-white">
                                            <table class="table table-row-bordered border table-hover gs-5 gy-3 gx-5">
                                                <tbody>
                                                    <div id="DBGrid_배당표_상가건물_임대차보증금_계산"></div>
                                                </tbody>
                                                <tfoot class="text-center bg-secondary">
                                                    <tr>
                                                        <th class="w-500px">합계</th>
                                                        <th class="bg-white w-150px">
                                                            <input type="text" id="Edit_배당표_상가_합계_보증금" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value="" />
                                                        </th>
                                                        <th class="bg-white w-250px">
                                                            <input type="text" id="Edit_배당표_상가_합계_월세" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value="" />
                                                        </th>
                                                        <th class="bg-white w-150px">
                                                            <input type="text" id="Edit_배당표_상가_합계_실제임대차보증금" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value="" />
                                                        </th>
                                                        <th class="bg-white w-150px">
                                                            <input type="text" id="Edit_배당표_상가_합계_최우선변제보증금" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value="" />
                                                        </th>
                                                        <th class="bg-white w-150px">
                                                            <input type="text" id="Edit_배당표_상가_합계_상가임대차보증금_확정" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value="" />
                                                        </th>
                                                        <th class="bg-white w-150px">
                                                            <input type="text" id="Edit_배당표_상가_합계_상가임대차보증금_확정없는" class="form-control form-control-transparent fs-7 py-0 px-2  text-end" value="" />
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
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_10" role="tabpane9">
                    <div class="d-flex justify-content-end">
                        <div class="border rounded p-4 pb-1 bg-secondary">
                            <div>
                                <h6>총 예상낙찰가</h6>
                            </div>
                        </div>
                        <div class="border rounded p-3 pb-1">
                            <div class="row">
                                <div class="col-10">
                                    <input type="text" id="Edit_배당표_총예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2 text-end min-w-100" value="">
                                </div>
                                <div class="col-2">
                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-5"></div>
                    <div class="d-flex justify-content-between">
                        <h5 class="mt-1">
                        <span class="svg-icon svg-icon-primary svg-icon-2hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                            </svg>
                        </span>
                            토지배상금의 계산
                        </h5>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <a href="javascript:void(0)" id="Picture62"  class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">공통</a>
                                    <a href="javascript:void(0)" id="Picture56">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Picture57">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded p-5 pb-1">
                        <div class="row d-flex">
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div id="DBGrid_배당금_계산M"></div>
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div id="DBGrid_배당금_계산D"></div>
                            </div>
                        </div>
                    </div>
                    <div class="my-5"></div>
                    <div class="d-flex justify-content-between">
                        <h5 class="mt-1">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            건물 배당금의 계산
                        </h5>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <a href="javascript:void(0)" id="Picture58">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Picture59">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded p-5 pb-1">
                        <div class="row d-flex">
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div id="DBGrid_배당금건물_계산M"></div>
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div id="DBGrid_배당금건물_계산D"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_11" role="tabpane8">

                    <input type="hidden" class="hide" id="Edit_FileName">
                    <input type="hidden" class="hide" id="Edit_FileName_Tmp">
                    <a href="javascript:void(0)" class="hide" id="Command_SetGridData"></a>

                    <div class="d-flex justify-content-between">
                        <h5 class="mt-1">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            사진 및 도면
                        </h5>
                        <div class="mt-2">
                            <div class="d-flex justify-content-between">
                                <div class="mx-5">
                                    <span class="fs-9 text-danger">저장 또는 실행은 파일명을 <strong>[더블클릭]</strong> 하세요.</span>
                                </div>
                                <div>
                                    <a href="javascript:void(0)" id="Command_사진_추가">
                                        <i class="fas fa-plus-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" id="Command_사진_삭제">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="kt_content_container">
                        <div class="border rounded p-5 pb-1">
                            <div class="table-responsive table-loading">
                                <div id="DBGrid_사진관리"></div>
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
                        <div class="border rounded p-5 pb-1">
                            <div class="table-responsive table-loading">
                                <div id="DBGrid_문서"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="kt_tab_pane_12" role="tabpane9">
                    <div class="d-flex justify-content-between">
                        <h5 class="mt-1">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            지점감정 및 본사 검증감정 결과
                        </h5>
                        <div class="mt-2">
                            <span class="fs-9 text-danger">현재 작업 중인 내용은 반영되지 않습니다.</span>
                        </div>
                    </div>
                    <div id="kt_content_container">
                        <div class="border rounded p-5 pb-1">
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
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_최저가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value=""/>
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_최저가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bolder">최고가</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_최고가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_최고가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="fw-bolder">예상 제1차 입찰가(평가가격) 토지</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_평가가격" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_평가가격" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="fw-bolder">예상 제1차 입찰가(평가가격) 건물</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_평가가격_건물" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_평가가격_건물" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="fw-bolder">예상 낙찰가율</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_예상낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_예상낙찰가율" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">%</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="fw-bolder">예상 낙찰가</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_예상낙찰가" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="fw-bolder">당사 설정액</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_당사설정액" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_당사설정액" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="fw-bolder">초과 또는 부족 설정액</td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_지점_초과부족설정분" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="bg-white">
                                            <div class ="row">
                                                <div class="col-11">
                                                    <input type="text" id="Edit_공통보고서_본사_초과부족설정분" class="form-control form-control-transparent fs-7 py-0 px-2  text-end min-w-100" value="" disabled="disabled" />
                                                </div>
                                                <div class="col-1">
                                                    <span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0 py-1">원</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
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
                        <h5 class="mt-1">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                            감정의견
                        </h5>
                        <div class="mb-2">
                            <a id="Picture37_공통보고서_감정의견_의견보기" href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2">의견보기</a>
                        </div>
                    </div>
                    <div class="card bg-gray-200" id="TreeView1"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
