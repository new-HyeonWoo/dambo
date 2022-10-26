<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script src="/resources/plugins/custom/summernote/summernote-lite.min.js"></script>
    <script src="/resources/plugins/custom/summernote/lang/summernote-ko-KR.min.js"></script>
    <link rel="stylesheet" href="/resources/plugins/custom/summernote/summernote-lite.min.css">

    <title>감정요청자료 영업</title>
    <script type="text/javascript">
        $(document).ready(function () {
            opener.GetComponent('RichEditor1').rebind($('#RichEditor1'));
            opener.MC_미리보기();
        });

        var body;
        function _print() {
            window.print();
        }

        function befortPrint() {
            body = document.body.innerHTML
            document.body.innerHTML = opener.GetValue('RichEditor1');
        }

        function  afterPrint() {
            document.body.innerHTML = body;
        }

        window.onbeforeprint = befortPrint;
        window.onafterprint = afterPrint;

    </script>
</head>
<body>
    <div class="modal-content py-3">
        <div class="card card-flush shadow-sm">
            <div class="card-header">
                <h3 class="card-title">공통보고서</h3>
                <div class="card-toolbar align-items-center gap-2 gap-lg-3">
                    <a href="javascript:void(0)" class="btn btn-sm btn-outline btn-outline-dashed btn-outline-default me-2 mb-2" id="print" onclick="_print();">출력</a>
                </div>
            </div>
            <div class="card-body pt-0">
                <div class="row gy-5">
                    <textarea class="form-control" data-kt-autosize="true" id="RichEditor1"></textarea>
                </div>
            </div>
        </div>	
    </div>	
</body>
</html>
