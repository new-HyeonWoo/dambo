<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>거래처조회</title>
    <script type="text/javascript">
        $(document).ready(function () {
            opener.GetComponent('Edit_거래처명').rebind($('#Edit_거래처명'));
            opener.GetComponent('Command_조회').rebind($('#Command_조회'));
            opener.GetComponent('Command_선택_거래처').rebind($('#Command_선택_거래처'));
            opener.GetComponent('DBGrid_거래처').rebind($('#DBGrid_거래처'));
        });
    </script>
</head>
<body>
<div class="modal-content py-3">
    <div class="card card-flush shadow-sm">
        <div class="card-header">
            <h3 class="card-title">거래처조회</h3>
            <div class="card-toolbar align-items-center gap-2 gap-lg-3">
                <button type="button" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default" id="Command_조회">조회</button>
                <button type="button" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default" id="Command_선택_거래처">선택</button>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="row gy-5">
                <div class="col-xxl-12 mb-1">
                    <div class="card card-jinro card-rounded-custom">
                        <div class="card-body py-3">
                            <div class="d-flex flex-stack flex-wrap gap-4">
                                <div class="row">
                                    <div class="col-3">
                                        <div class="text-primary fs-7 text-nowrap">거래처명</div>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" class="form-control text-white form-control-transparent fs-7 py-0 ps-0 mx-2 text-end size-min-width-80 w-auto" id="Edit_거래처명">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-12">
                    <div id="DBGrid_거래처" class="table-responsive table-scroll"></div>
                </div>
            </div>
        </div>
    </div>	
</div>		
</body>
</html>
