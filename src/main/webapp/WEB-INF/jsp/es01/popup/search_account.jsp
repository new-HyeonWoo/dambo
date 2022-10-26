<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>거래처조회</title>

    <%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
    <%@ include file="/WEB-INF/jsp/template/es01_w02_4.jsp" %>

    <script type="text/javascript">
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
                    opener.SetValue('거래처명', opener.GetValue('Edit_거래처명'));

                    // if(match(PageType.집합_오피스텔) || match(PageType.집합_상업용)){
                    //     RunQuery('Q_POPUP_거래처목록', {
                    //         '거래처명' : GetValue('거래처명'),
                    //     });
                    // }else if(match(PageType.집합_아파트)){
                    //     RunQuery('Q_거래처목록', {
                    //         '거래처명' : GetValue('거래처명'),
                    //     });
                    // }
                }
            });
        });

    </script>
</head>
<body>

<button id="Command_조회">조회</button>
<button id="Command_선택_거래처">선택</button>
<div id="DBGrid_거래처">
</div>
</body>
</html>
