<%@ page import="java.util.Enumeration" %>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<script type="application/javascript">
    const componentsMap = new Map();
    const componentsDataMap = new Map();
    const componentsZoonDataMap = new Map();
    const componentsEventStatus = new Map();

    const PageType = {
        집합_아파트: 0,
        집합_연립: 1,
        집합_상업용: 2,
        집합_오피스텔: 3,
        토건_주거: 4,
        토건_상업용: 5,
        토지: 6,
        기타: 7,
        공통: 999
    }
    const EsType = {
        ES01 : 'es01',
        ES01_POPUP : 'es01/popup',
        ES81 : 'es81',
        ES82 : 'es82',
        ES83 : 'es83',
        ES03W01 : 'es03/w01',
        ES03W02 : 'es03/w02',
        ES03W03 : 'es03/w03'
    }
</script>

<script src="/resources/js/common.js"></script>
<script src="/resources/js/model/ZoonData.js"></script>
<script src="/resources/js/model/JsonZoonData.js"></script>
<script src="/resources/js/model/DBGridZoonData.js"></script>
<script src="/resources/js/model/FunctionZoonData.js"></script>
<script src="/resources/js/component/Component.js"></script>
<script src="/resources/js/component/TargetComponent.js"></script>
<script src="/resources/js/component/TemplateComponent.js"></script>
<script src="/resources/js/component/template/DBGrid.js"></script>
<script src="/resources/js/component/template/List.js"></script>
<script src="/resources/js/component/template/Combo.js"></script>
<script src="/resources/js/component/template/ReactiveCombo.js"></script>
<script src="/resources/js/component/template/Chart.js"></script>
<script src="/resources/js/component/target/Radio.js"></script>
<script src="/resources/js/component/target/Picture.js"></script>
<script src="/resources/js/component/target/Check.js"></script>
<script src="/resources/js/component/target/Command.js"></script>
<script src="/resources/js/component/target/Edit.js"></script>
<script src="/resources/js/component/target/CalcEdit.js"></script>
<script src="/resources/js/component/target/RichEditor.js"></script>
<script src="/resources/js/component/target/MaskEdit.js"></script>
<script src="/resources/js/component/target/Tab.js"></script>
<script src="/resources/js/component/target/TreeView.js"></script>
<script src="/resources/js/component/target/Label.js"></script>
<script src="/resources/js/component/target/Group.js"></script>
<script src="/resources/js/component/target/Table.js"></script>
<script src="/resources/js/component/mask/StringMask.js"></script>
<script src="/resources/js/component/template/DBGridCombo.js"></script>
<script src="/resources/js/component/target/DBGridCheck.js"></script>
<script src="/resources/js/component/popup/SubForm.js"></script>
<script src="/resources/js/component/popup/KaKaoSubForm.js"></script>
<script src="/resources/js/component/popup/FileUploadSubForm.js"></script>
<script src="/resources/js/component/error/CustomError.js"></script>
<script src="/resources/plugins/custom/summernote/summernote-lite.min.js"></script>
<script src="/resources/plugins/custom/summernote/lang/summernote-ko-KR.min.js"></script>
<link rel="stylesheet" href="/resources/plugins/custom/summernote/summernote-lite.min.css">

<script type="text/javascript">
    $(document).ready(function() {
        <%
            Enumeration<String> attributeNames = request.getAttributeNames();
            while (attributeNames.hasMoreElements()) {
                String name = attributeNames.nextElement();
                if (name.contains(".")) {
                    continue;
                }

                out.println(String.format("SetValue('%s', '%s');", name, request.getAttribute(name)));
            }
        %>
    });
</script>