<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
    String userEmpNo;
    String userName;
    String userDeptCd;
    String userDept;
    String jikWi;
    String jikName;

    // 외부(대한감정평가)에서 접속 시 임시 세션정보 setting
    String sConExt = (String) request.getParameter("conExt");
    if(sConExt != null && sConExt.equals("Y")){
        userEmpNo	= "0000";
        userName	= "대한감정평가";
        userDeptCd	= "0000";
        userDept	= "대한감정평가";
        jikWi		= "";
        jikName		= "";
    }else{
        userEmpNo	= (String)session.getAttribute("userEmpNo");
        userName	= (String)session.getAttribute("userName");
        userDeptCd	= (String)session.getAttribute("userDeptCd");
        userDept	= (String)session.getAttribute("userDept");
        jikWi		= (String)session.getAttribute("userJikWi");
        jikName		= (String)session.getAttribute("userJikName");
    }

    String sYyyy = request.getParameter("yyyy");
    String sSeq = request.getParameter("seq");
    String sZoom = request.getParameter("zoom");
    String sStat = request.getParameter("stat");

    String sEmpNo = request.getParameter("cur_empno");
    String sName  = request.getParameter("cur_KorName");
    String sDept  = request.getParameter("cur_DeptName");
    String sDeptCd = request.getParameter("cur_DeptCode");
    String sJikWi = "";
    String sJikName = request.getParameter("cur_Post");

    if((userName == null ||userDept == null||userDeptCd==null)){
        userEmpNo = sEmpNo;
        userName  = sName;
        userDept  = sDept;
        userDeptCd = sDeptCd;
        jikWi      = sJikWi;
        jikName    = sJikName;
    }
%>

<!DOCTYPE html>
<html>
<head><meta charset="UTF-8">
    <style>
        .input-disabled{background-color:#EBEBE4;border:1px solid #ABADB3;padding:2px 1px;}
    </style>

    <script src="/editor/jquery.min.js"></script>
    <script src="/editor/mustache/mustache.min.js"></script>

</head>

<script type="application/javascript">
    const componentsMap = new Map();
    const componentsDataMap = new Map();
    const componentsZoonDataMap = new Map();

    const PageType = {
        집합건물 : 0,
        토지건물 : 1,
        토지 : 2
    }
    const EsType = {
        ES81 : 'es81',
        ES83 : 'es83'
    }

    const requestYYYY = '<%=sYyyy %>';
    const requestSEQ = '<%=sSeq %>';
</script>

<script src="/resources/js/common.js"></script>
<script src="/resources/js/model/ZoonData.js"></script>
<script src="/resources/js/model/JsonZoonData.js"></script>
<script src="/resources/js/model/FunctionZoonData.js"></script>
<script src="/resources/js/component/Component.js"></script>

<script type="text/javascript">
    $(document).ready(function() {
        SetValue('YYYY', '<%=sYyyy%>');
        SetValue('SEQ', '<%=sSeq%>');
        SetValue('비율', '<%=sZoom%>');
        SetValue('상태', '<%=String.valueOf(sStat).toUpperCase()%>');
        SetValue('_사원번호', '<%=userEmpNo%>');
        SetValue('_사원명', '<%=userName%>');
        SetValue('_부서코드', '<%=userDeptCd%>');
        SetValue('_부서명', '<%=userDept%>');
        SetValue('_직위', '<%=jikWi%>');
        SetValue('_직급', '<%=jikName%>');

        $('#search').hide();
        $('#update').hide();

        // 상태값은 그룹에서에서 넘겨받은 값
        if ((GetValue('상태') === "W") || (GetValue('상태') === "E")) {
            $('#update').show();
        } else if ((GetValue('상태') === "E") || (GetValue('상태') === "C")) {
            $('#update').hide();
            if ((GetValue('상태') === "C")) {
                $('#search').show();
                $('#update').show();
            }
        } else {
            //--프로그램에서 직접Call한 경우
            if ((GetValue('비율') === "Y")) {
                $('#update').hide();
            }
        }
    });
</script>
<%--<script src="/resources/js/component/TargetComponent.js"></script>--%>
<%--<script src="/resources/js/component/TemplateComponent.js"></script>--%>
<%--<script src="/resources/js/component/template/DBGrid.js"></script>--%>
<%--<script src="/resources/js/component/template/Combo.js"></script>--%>
<%--<script src="/resources/js/component/target/Picture.js"></script>--%>
<%--<script src="/resources/js/component/target/Check.js"></script>--%>
<%--<script src="/resources/js/component/target/Command.js"></script>--%>
<%--<script src="/resources/js/component/target/SubForm.js"></script>--%>
<%--<script src="/resources/js/component/target/Edit.js"></script>--%>
<%--<script src="/resources/js/component/target/RichEditor.js"></script>--%>
<%--<script src="/resources/js/component/target/MkEdit.js"></script>--%>
<%--<script src="/resources/js/component/target/Tab.js"></script>--%>
<%--<script src="/resources/js/component/target/TreeView.js"></script>--%>
<%--<script src="/resources/js/component/target/Label.js"></script>--%>
<%--<script src="/resources/js/component/target/Group.js"></script>--%>
<%--<script src="/resources/js/page/zoon.js"></script>--%>

<style>
    .hide { display:none; }
</style>
<body>
</body>
</html>