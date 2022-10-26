<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>

<script src="/resources/js/ezgen/variable/es01_w02_p00.js"></script>
<script src="/resources/js/ezgen/macro/es01_w02_p00.js"></script>
<script src="/resources/js/ezgen/page/es01_w02_p00.js"></script>
<script src="/resources/js/ezgen/zoon/es01_w02_p00.js"></script>

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
<body>
<div class="modal-content py-3">
    <div class="card card-flush shadow-sm">
        <div class="card-header">
            <h3 class="card-title">공통보고서 입력</h3>
            <div class="card-toolbar align-items-center gap-2 gap-lg-3">
                <a href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" id="Picture1">저장</a>
            </div>
        </div>

        <div id="content1" style="display: none">
            <div class="card-body pt-0">
                <div class="row gy-5">
                    <textarea class="form-control" data-kt-autosize="true" id="RichEditor1"></textarea>
                </div>
            </div>
        </div>

        <div id="content2" style="display: none">
            <input type="hidden" id="Edit_지방세_부과원인" class="form-control py-1 ps-2">

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
                        <td></td>
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

        <div id="content3" style="display: none">
            <div class="card-body pt-0">
                <div class="row gy-5">
                    <textarea class="form-control" data-kt-autosize="true" id="Edit1"></textarea>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
