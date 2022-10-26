const pageZoon = {

    OnInitialize: function () {

        const Cmd_감정현황_건수 = new Picture('Cmd_감정현황_건수', new JsonZoonData('Cmd_감정현황_건수', {}), {
            isShow: false, 
            isEnable: true,
        }).on('OnClick', function () {
            RunQuery('Q_01_감정현황_건수', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');

            RunQuery('Q_01_감정현황_건수_차트', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');
        });

        const Cmd_감정현황_평가금액 = new Picture('Cmd_감정현황_평가금액', new JsonZoonData('Cmd_감정현황_평가금액', {}), {
            isShow: false, 
            isEnable: true,
        }).on('OnClick', function () {
            RunQuery('Q_01_감정현황_평가금액', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');

            RunQuery('Q_01_감정현황_평가금액_차트', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');
        });

        const Q_담보종류 = new JsonZoonData('Q_담보종류', {});
        const Combo_담보종류 = new Combo('Combo_담보종류', Q_담보종류,{
            isShow : false,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Command_조회 = new Picture('Command_조회', new JsonZoonData('Command_조회', {}), {
            isShow: true, 
            isEnable: true,
        }).on('OnClick', function () {

            RunQuery('Q_01_감정현황_건수', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');

            RunQuery('Q_01_감정현황_건수_차트', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');

            RunQuery('Q_01_감정현황_평가금액', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');

            RunQuery('Q_01_감정현황_평가금액_차트', {
                '감정년도': GetValue('조회_Combo_담보감정년도')
            }, 'GET');
        });

        const Label1 = new Label('Label1', new JsonZoonData('Label1', {}),{
            isShow : true,
            isEnable : true
        });

        const Label2 = new Label('Label2', new JsonZoonData('Label2', {}),{
            isShow : false,
            isEnable : true
        });

        const Label3 = new Label('Label3', new JsonZoonData('Label3', {}),{
            isShow : true,
            isEnable : true
        });
        
        const Label35 = new Label('Label35', new JsonZoonData('Label35', {}),{
            isShow : true,
            isEnable : true
        });

        const Label4 = new Label('Label4', new JsonZoonData('Label4', {}),{
            isShow : true,
            isEnable : true
        });

        const Q_01_감정현황_건수_차트 = new JsonZoonData('Q_01_감정현황_건수_차트', {});
        const 감정현황_Chart_건수 = new Charts('감정현황_Chart_건수', Q_01_감정현황_건수_차트,{
            isShow : true,
            isEnable : true,
            chartType : 'bar',
            chartName : '감정현황 (단위: 건)',
            chartwidth : '700',
            chartheight : '350',
            format : {
                text : '년도',
                value : '건수',
                index : '',
            }
        });

        const Q_01_감정현황_평가금액_차트 = new JsonZoonData('Q_01_감정현황_평가금액_차트', {});
        const 감정현황_Chart_평가금액 = new Charts('감정현황_Chart_평가금액', Q_01_감정현황_평가금액_차트, {
            isShow : true,
            isEnable : true,
            chartType : 'line',
            chartName : '감정평가 금액 (단위: 백만원)',
            chartwidth : '700',
            chartheight : '350',
            format : {
                text : '년도',
                value : '건수',
                index : '',
            }
        });

        const Q_01_감정현황_건수 = new JsonZoonData('Q_01_감정현황_건수', {});
        const 감정현황_CrossTab_건수 = new DBGrid('감정현황_CrossTab_건수', Q_01_감정현황_건수, '감정현황_CrossTab_건수_템플릿',{
            isShow : true,
            isEnable : true
        });

        const Q_01_감정현황_평가금액 = new JsonZoonData('Q_01_감정현황_평가금액', {});
        const 감정현황_CrossTab_평가금액 = new DBGrid('감정현황_CrossTab_평가금액', Q_01_감정현황_평가금액, '감정현황_CrossTab_평가금액_템플릿',{
            isShow : true,
            isEnable : true
        });

        //하드코딩
        const dateArr=[];
        let startYy = 2007;
        let nowdateYy = new Date().getFullYear();
        for(var i = startYy; i <= nowdateYy; i++){
            const dateObj = new Object();
            dateObj['년도'] = i;
            dateArr.push(dateObj);
        }
        const 담보감정년도 = new JsonZoonData('담보감정년도', dateArr);
        const 조회_Combo_담보감정년도 = new Combo('조회_Combo_담보감정년도', 담보감정년도,{
            isShow : true,
            isEnable : true,
            format : {
                text : '년도',
                value : '년도',
                index : '',
            }
        });

    }

}        