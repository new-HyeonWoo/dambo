<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<%--    <script src="https://unpkg.com/imask"></script>--%>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <script src="/editor/mustache/mustache.min.js"></script>
    <script src="/editor/handlebars/handlebars.min.js"></script>
    <script src="/editor/jquery.mask.js"></script>

    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>


    <script type="application/javascript">
        const componentsMap = new Map();
        const componentsDataMap = new Map();
        const componentsZoonDataMap = new Map();

        const PageType = {
            집합_아파트: 0,
            집합_연립: 1,
            집합_상업용: 2,
            집합_오피스텔: 3,
            토건_주거: 4,
            토건_상업용: 5,
            토지: 6
        };
        const EsType = {
            ES01 : 'es01',
            ES81 : 'es81',
            ES83 : 'es83'
        };

    </script>
    <%@ include file="/WEB-INF/jsp/template/es01_w02_4.jsp" %>
    <script src="/resources/js/common.js"></script>
    <script src="/resources/js/model/JsonZoonData.js"></script>
    <script src="/resources/js/component/Component.js"></script>
    <script src="/resources/js/component/TargetComponent.js"></script>
    <script src="/resources/js/component/TemplateComponent.js"></script>
    <script src="/resources/js/component/template/DBGrid.js"></script>
    <script src="/resources/js/component/template/Combo.js"></script>
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

    <script src="/resources/js/component/popup/SubForm.js"></script>
    <script src="/resources/js/component/popup/KaKaoSubForm.js"></script>

    <script src="/resources/js/page/variable.js"></script>

    
    <script type="text/javascript">
        componentsMap.set('page', PageType.집합_상업용);
        componentsMap.set('es', EsType.ES01);

        $(document).ready(function(){
            // pageZoon.OnInitialize();
            
            // pageEvent.OnBefore();
            // pageEvent.OnInitialize();

            // new TreeViewTest('TEST', new ZoonData('TEST', [
            //         { 'LEVEL1' : '감정의견', 'CD_LEVEL1': '감정의견', 'LEVEL2': '',                 'CD_LEVEL2': '', 'LEVEL3': '', 'CD_LEVEL3': '' },
            //         { 'LEVEL1' : '감정의견', 'CD_LEVEL1': '감정의견', 'LEVEL2': '본사 검증감정 의견', 'CD_LEVEL2': '0000', 'LEVEL3': '', 'CD_LEVEL3': '' },
            //         { 'LEVEL1' : '감정의견', 'CD_LEVEL1': '감정의견', 'LEVEL2': '본사 검증감정 의견1', 'CD_LEVEL2': '0010', 'LEVEL3': '', 'CD_LEVEL3': '' },
            //         { 'LEVEL1' : '감정의견', 'CD_LEVEL1': '감정의견', 'LEVEL2': '본사 검증감정 의견2', 'CD_LEVEL2': '0020', 'LEVEL3': '', 'CD_LEVEL3': '' },
            //         { 'LEVEL1' : '감정의견', 'CD_LEVEL1': '감정의견', 'LEVEL2': '본사 검증감정 의견', 'CD_LEVEL2': '0000', 'LEVEL3': '①시가에 관한 의견', 'CD_LEVEL3': '0001' }
            //     ]), {
            //     bind: [
            //         { value: 'LEVEL1', key: 'CD_LEVEL1' },
            //         { value: 'LEVEL2', key: 'CD_LEVEL2' },
            //         { value: 'LEVEL3', key: 'CD_LEVEL3' }
            //     ]
            // });

            new MaskEdit('TEST', new JsonZoonData('TEST', { value: 0.9 }),{
                isShow : true,
                isEnable : true,
                mask: ';3;#,###1.00',
                maskType: '숫자'
            });
           
        });
        // debugger;
        // new CalcEdit('Edit_입력표_대지권소유권_평', GetZoonData('Edit_입력표_대지권소유권'), 
        // (value) => {
        //     return value * 10;
        // }, {
        //         isShow : true,
        //         isEnable : true,
        //         format : {
        //             접두_기호 : '',
        //             접미_기호 : '평',
        //             양수_기호 : '',
        //             음수_기호 : '-',
        //             제로_기호 : '0',
        //             Null_기호 : ''
        //         }
        //     });
        // });
        
        
    </script>
</head>
<body>
<input type="text" id="TEST" />
</body>
</html>
