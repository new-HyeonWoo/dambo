<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>거래처조회</title>
    <meta charset="utf-8" />
    <meta name="description" content="설명 자리" />
    <meta name="keywords" content="키워드 자리" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="ko-KR" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="하이트진로 담보감정 시스템" />
    <meta property="og:url" content="https://@@@.com" />
    <meta property="og:site_name" content="하이트진로" />
    <link rel="canonical" href="https://@@@.com" />
    <link rel="shortcut icon" href="<c:url value="/resources/media/logos/favicon.ico"/>" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />

    <link href="<c:url value="/resources/plugins/custom/prismjs/prismjs.bundle.css"/>" rel="stylesheet" type="text/css" />
    <link href="<c:url value="/resources/plugins/custom/datatables/datatables.bundle.css"/>" rel="stylesheet" type="text/css" />

    <link href="<c:url value="/resources/plugins/global/plugins.bundle.css"/>" rel="stylesheet" type="text/css"/>
    <link href="<c:url value="/resources/css/style.bundle.css"/>" rel="stylesheet" type="text/css"/>
    <link href="<c:url value="/resources/css/style.custom.css"/>" rel="stylesheet" type="text/css"/>
    <link href="<c:url value="/resources/plugins/custom/jstree/jstree.bundle.css"/>" rel="stylesheet" type="text/css" />

    <!-- 임시 CSS 파일 -->
    <link href="<c:url value="/resources/css/tmpr.css"/>" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://unpkg.com/imask"></script>

    <script src="/editor/mustache/mustache.min.js"></script>
    <script src="/editor/handlebars/handlebars.min.js"></script>
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

    <script type="text/javascript" src="<c:url value='/resources/js/util/dataTable.js'/>"></script>
    <script type="text/javascript" src="<c:url value='/resources/js/util/util.js'/>"></script>
    <!--begin::Javascript-->
    <script src="<c:url value="/resources/plugins/global/plugins.bundle.js"/>"></script>
    <script src="<c:url value="/resources/js/scripts.bundle.js"/>/"></script>
    <script src="<c:url value="/resources/plugins/custom/datatables/datatables.bundle.js"/>"></script>
    <script src="<c:url value="/resources/js/custom/documentation/general/datatables/advanced.js"/>"></script>

    <script src="/resources/plugins/custom/jstree/jstree.bundle.js"></script>
    <script src="//code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script src="/editor/jquery.mask.js"></script>

    <%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
    <%@ include file="/WEB-INF/jsp/template/es01_w02_4.jsp" %>

    <script type="text/javascript">
        componentsMap.set('page', PageType.집합_오피스텔);
        componentsMap.set('es', EsType.ES01);

        $(document).ready(function () {
            const Q_POPUP_거래처목록 = new JsonZoonData('Q_POPUP_거래처목록', {});
            const Q_거래처목록 = new JsonZoonData('Q_거래처목록', {});
            const DBGrid_거래처 = new DBGrid('DBGrid_거래처', match(PageType.집합_아파트) ? Q_거래처목록 : Q_POPUP_거래처목록, 'DBGrid_거래처_템플릿',{
                isShow : true,
                isEnable : true
            })
            .on('dblclick', 'button', function() {
                opener.RunButton('Command_선택_거래처');
            });

            const Command_조회 = new Command('Command_조회', new JsonZoonData('Command_조회', {}),{
                isShow : true,
                isEnable : true
            })
            .on({
                click : function() {
                    SetValue('거래처명', GetValue('Edit_거래처명'));

                    RunQuery('Q_POPUP_거래처목록', {
                        '거래처명' : GetValue('거래처명'),
                    });
                }
            });

            const Edit_거래처명 = new Edit('Edit_거래처명', new JsonZoonData('Edit_거래처명', {}),{
                isShow : true,
                isEnable : true,
            })
            .on({
                keyup: function(e) {
                    if (e.keyCode === 13) {
                        RunButton('Command_조회');
                    }
                }
            });
        });

    </script>
</head>
<body>

<input id="Edit_거래처명" type="text">
<button id="Command_조회">조회</button>
<button id="Command_선택_거래처">선택</button>
<div id="DBGrid_거래처">
</div>
</body>
</html>
