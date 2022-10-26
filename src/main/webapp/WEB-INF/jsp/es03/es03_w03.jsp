<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
<%@ include file="/WEB-INF/jsp/template/es03_w03.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<script type="text/javascript">
    componentsMap.set('page', PageType.공통);
    componentsMap.set('es', EsType.ES03W03);
    
    $(document).ready(function(){
        pageZoon.OnInitialize();
        
        pageEvent.init();

        $('#감정현황_CrossTab_건수').attr('style','display:');
        $('#감정현황_CrossTab_평가금액').attr('style','display:');

    });
</script>

<script src="/resources/js/es03/variable/es03_w03.js"></script>
<script src="/resources/js/es03/macro/es03_w03.js"></script>
<script src="/resources/js/es03/page/es03_w03.js"></script>
<script src="/resources/js/es03/zoon/es03_w03.js"></script>

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
                    <h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">통계DB</h1>
                    <span class="h-20px border-gray-300 border-start mx-4"></span>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <li class="breadcrumb-item text-muted">통계정보</li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-300 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-dark">통계DB</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column-fluid">
            <div id="kt_content_container" class="container-fluid">
                <div class="row gy-5">
                    <div class="col-xxl-12 mb-1">
                        <div class="card card-jinro card-rounded-custom">
                            <div class="card-body py-3"></div>
                        </div>
                    </div>
                    <div class="col-xxl-12">
                        <div class="card">
                            <div class="card-body">
                                <div id="">
                                    <div class="p-5 pb-1">
                                        <div class="table-responsive table-loading">
                                            <table class="table table-row-bordered table-rounded border gs-5 gy-3 gx-5 text-nowrap">
                                                <thead class="bg-secondary">
                                                    <tr class="fw-bolder fs-7 text-gray-800 align-middle">
                                                        <th class="col-1 text-center" id="Label3">담보 감정년도</th>
                                                        <th class="col-2 bg-white">
                                                            <div class="row">
                                                                <div class="col-8"> 
                                                                    <div id="조회_Combo_담보감정년도"></div>
                                                                </div>   
                                                                <div class="col-4">
                                                                    년도 부터 조회
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th class="col-1 text-center" id="Label2">담보종류</th>
                                                        <th class="col-2 bg-white">
                                                            <div id="Combo_담보종류"></div>
                                                        </th>
                                                        <th class="col-9 bg-white">
                                                            <div class="text-end">
                                                                <a id="Command_조회" href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default py-1">조회</a>
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
                                        감정 현황
                                    </h5>
                                    <div class="border rounded p-5 pb-1">
                                        <div class="table-responsive table-loading">
                                            <div id="감정현황_CrossTab_건수"></div>
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
                                        감정 평가 금액
                                    </h5>
                                    <div class="border rounded p-5 pb-1">
                                        <div class="table-responsive table-loading">
                                            <div id="감정현황_CrossTab_평가금액"></div>
                                        </div>
                                    </div>
                                    <div class="mt-2"></div>
                                    <div class="border rounded p-5 pb-1 h-400px">
                                        <div class="row">
                                            <div class="col-6">
                                                <div id="감정현황_Chart_건수"></div>
                                            </div>
                                            <div class="col-6">
                                                <div id="감정현황_Chart_평가금액"></div>
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