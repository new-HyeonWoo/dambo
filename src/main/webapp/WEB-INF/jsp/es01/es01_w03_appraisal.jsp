<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>감정요청자료 영업</title>
    <script type="text/javascript">
        $(document).ready(function () {
            opener.GetComponent('Check_전체선택').rebind($('#Check_전체선택'));
            opener.GetComponent('Picture66').rebind($('#Picture66'));
            opener.GetComponent('DBGrid_감정요청자료_영업').rebind($('#DBGrid_감정요청자료_영업'));
        });
    </script>
</head>
<body>
    <div class="modal-content py-3">
        <div class="card card-flush shadow-sm">
            <div class="card-header">
                <h3 class="card-title">감정요청자료 영업</h3>
                <div class="card-toolbar align-items-center gap-2 gap-lg-3">
                    <button type="button" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default" id="Picture66">선택</button>
                </div>
            </div>
            <div class="card-body pt-0">
                <div class="row gy-5">
                    <div class="col-xxl-12 mb-1">
                        <div class="card card-jinro card-rounded-custom">
                            <div class="card-body py-3">
                                <div class="d-flex flex-stack flex-wrap gap-4">
                                    <div class="row">
                                        <div class="col-9">
                                            <div class="text-primary fs-7 text-nowrap">감정 지정된 요청자료 포함</div>
                                        </div>
                                        <div class="col-3">
                                            <input type="checkbox" class="form-check-input" id="Check_전체선택">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-12">
                        <div id="DBGrid_감정요청자료_영업" class="table-responsive table-scroll"></div>
                    </div>
                </div>
            </div>
        </div>	
    </div>	
</body>
</html>
