const pageZoon = {

    OnInitialize: function () {
        const Cmd_해당년월일자까지 = new Command('Cmd_해당년월일자까지', new JsonZoonData('Cmd_해당년월일자까지', {}),{
            isShow : false,
            isEnable : true
        }).on('OnClick', function() {

            SetValue('00_TNUM', StrLength(GetValue('Formula_감정일자_까지')));

            if ((GetValue('00_TNUM') < 6)) {
                return false;
            }
            RunQuery('Q_DUAL_해당월일자_까지', {
                '해당년월': GetValue('Formula_감정일자_까지')
            }, 'GET');

        });

        const Cmd_해당년월일자부터 = new Command('Cmd_해당년월일자부터', new JsonZoonData('Cmd_해당년월일자부터', {}),{
            isShow : false,
            isEnable : true
        }).on('OnClick', function() {

            SetValue('00_TNUM', StrLength(GetValue('Formula_감정일자_부터')));

            if (GetValue('00_TNUM') < 6) {
                return false;
            }

            RunQuery('Q_DUAL_해당월일자_까지', {
                '해당년월': GetValue('Formula_감정일자_부터')
            }, 'GET');

        });

        const Command1 = new Command('Command1', new JsonZoonData('Command1', {}),{
            isShow : false,
            isEnable : true
        }).on('OnClick', function() {

            // Navigate('None',
            //     { }, 'left=0,top=0,width=860,height=700');

        });

        const Label35 = new Label('Label35', new JsonZoonData('Label35', {}),{
            isShow : true,
            isEnable : true
        });

        const Picture27 = new Picture('Picture27', new JsonZoonData('Picture27', {}),{
            isShow : true,
            isEnable : false
        });

        let SubForm_거래처조회_URL = 'account.do';
        const SubForm_거래처조회 = new SubForm('SubForm_거래처조회', new JsonZoonData('SubForm_거래처조회', {}), SubForm_거래처조회_URL,{
            isShow : true,
            isEnable : true
        });

        const Command_선택 = new Command('Command_선택', new JsonZoonData('Command_선택', {}),{
            isShow : true,
            isEnable : true
        }).on({
            click : function() {
                GetComponent('DBGrid_거래처').GetRow(-1, [
                    { key: '팝업_거래처명', value: 'SANGHO' },
                    { key: '팝업_거래처코드', value: 'GEO_CODE' },
                    { key: '팝업_대표자', value: 'DAEPYO_NAME' }
                ]);

                if (!isEmpty(GetValue('Edit_거래처코드'))) {
                    SetValue('Edit_거래처코드', GetString('Edit_거래처코드')+","+GetString('팝업_거래처코드'))
                    SetValue('Edit_거래처', GetString('Edit_거래처')+","+GetString('팝업_거래처명'))
                } else {
                    SetValue('Edit_거래처코드', GetString('팝업_거래처코드'))
                    SetValue('Edit_거래처', GetString('팝업_거래처명'))
                }
            }
        });

        const Q_거래처목록 = new JsonZoonData('Q_거래처목록', {});
        const DBGrid_거래처 = new DBGrid('DBGrid_거래처', Q_거래처목록,'DBGrid_거래처_템플릿',{
            isShow : true,
            isEnable : true
        }).on('OnDblClick', function() {

            GetComponent('DBGrid_거래처').GetRow(-1, [
                { key: '팝업_거래처명', value: 'SANGHO' },
                { key: '팝업_거래처코드', value: 'GEO_CODE' },
                { key: '팝업_대표자', value: 'DAEPYO_NAME' }
            ]);

            if (!isEmpty(GetValue('Edit_거래처코드'))) {
                SetValue('Edit_거래처코드', GetValue('Edit_거래처코드')+","+GetValue('팝업_거래처코드'))
                SetValue('Edit_거래처', GetValue('Edit_거래처')+","+GetValue('팝업_거래처명'))
            } else {
                SetValue('Edit_거래처코드', GetValue('Edit_거래처코드')+GetValue('팝업_거래처코드'))
                SetValue('Edit_거래처', GetValue('Edit_거래처')+GetValue('팝업_거래처명'))
            }

        })

        const Edit_거래처명 = new Edit('Edit_거래처명', new JsonZoonData('Edit_거래처명', {}),{
            isShow : true,
            isEnable : true
        }).on('keyup',function(e) {
            if (e.keyCode == 13) {
                RunButton('Command_조회');
            }
        });

        const Label22 = new Label('Label22', new JsonZoonData('Label22', {}),{
            isShow : true,
            isEnable : true
        })

        const Label23 = new Label('Label23', new JsonZoonData('Label23', {}),{
            isShow : true,
            isEnable : true
        })

        const Picture1 = new Picture('Picture1', new JsonZoonData('Picture1', {}), {
            isShow : true,
            isEnable : true
        }).on({
            click : function() {
                SetValue('거래처명', GetValue('Edit_거래처명') == null ? '' : GetValue('Edit_거래처명'));

                RunQuery('Q_거래처목록', {
                    '거래처명': GetValue('거래처명')
                }, 'GET');
            }
        });

        const Picture10 = new Picture('Picture10', new JsonZoonData('Picture10', {}),{
            isShow : true,
            isEnable : false
        })

        const Picture11 = new Picture('Picture11', new JsonZoonData('Picture11', {}),{
            isShow : true,
            isEnable : true
        })

        const Picture14 = new Picture('Picture14', new JsonZoonData('Picture14', {}),{
            isShow : true,
            isEnable : false
        })

        const Picture5 = new Picture('Picture5', new JsonZoonData('Picture5', {}),{
            isShow : true,
            isEnable : true
        })

        const Picture8 = new Picture('Picture8', new JsonZoonData('Picture8', {}),{
            isShow : true,
            isEnable : false
        })

        const Picture9 = new Picture('Picture9', new JsonZoonData('Picture9', {}),{
            isShow : true,
            isEnable : false
        })

        const Table5 = new Edit('Table5', new JsonZoonData('Q_코드_가임대보증금적용지역', {}),{
            isShow : true,
            isEnable : true
        })

        const TabControl1 = new Tab('TabControl1', new JsonZoonData('TabControl1', {}),{
            isShow : true,
            isEnable : true
        })

        const 조회내용 = new Edit('조회내용', new JsonZoonData('조회내용', {}),{
            isShow : true,
            isEnable : true
        })

        const DBGrid1 = new DBGrid('DBGrid1', new JsonZoonData('Q_담보목록', {}),{
            isShow : true,
            isEnable : true
        }).on('OnDblClick', function() {

            GetComponent('DBGrid1').GetCurSel('00_TNUM');


            if ((GetValue('00_TNUM') == 0)) {
                return false;
            }

            GetComponent('DBGrid1').GetRow(-1, [
                { key: '담보순번', value: 'SEQ' },
                { key: '년도', value: 'YYYY' },
                { key: '담보종류', value: 'SEC_CODE' },
                { key: '결재진행현황', value: 'PROC_DIV' },
                { key: '부서', value: 'JUM_CODE' }
            ]);

            if (GetValue('_부서코드') == GetValue('부서') && (GetValue('결재진행현황') == "11" || GetValue('결재진행현황') == "21") ) {
                SetValue('_권한', "W")
            } else {
                SetValue('_권한', "R")
            }

            if (GetValue('담보종류') == "101" ) {
                SetValue('LinkURL', 'es01/w02');
            } else if (GetValue('담보종류') == "102" ) {
                SetValue('LinkURL', 'es01/w02/2');
            } else if (GetValue('담보종류') == "103" ) {
                SetValue('LinkURL', 'es01/w02/2');
            } else if (GetValue('담보종류') == "104" ) {
                SetValue('LinkURL', 'es01/w02/3');
            } else if (GetValue('담보종류')== "105" ) {
                SetValue('LinkURL', 'es01/w02/4');
            } else if (GetValue('담보종류') == "501" ) {
                SetValue('LinkURL', 'es01/w02/5');
            } else if (GetValue('담보종류') == "402" ) {
                SetValue('LinkURL', 'es01/w03/1');
            } else {
                SetValue('LinkURL', 'es01/w03');
            }

            Navigate('http://localhost:8080/view/'+GetValue('LinkURL'),
                { 
                    yyyy : GetValue('년도'),
                    seq : GetValue('담보순번'),
                    sec_code : GetValue('담보종류'),
                    proc_div : GetValue('결재진행현황'),
                    auth : GetValue('_권한'),
                    sec_yn : 'N'
                }, 'left=0,top=0,width=860,height=700');

        })
        .on('OnTitleBarClick', function() {

            GetComponent('DBGrid1').SetCurSel(0);

        });

        const Label17 = new Label('Label17', new JsonZoonData('Label17', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_조회건수 = new Edit('Edit_조회건수', new JsonZoonData('Edit_조회건수', {}),{
            isShow : true,
            isEnable : false
        });
        
        const Picture7 = new Picture('Picture7', new JsonZoonData('Picture7', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {
            GetComponent('DBGrid1').excel('조건별검색');
        });

        const 조회조건 = new Edit('조회조건', new JsonZoonData('조회조건', {}),{
            isShow : true,
            isEnable : true
        });

        const Table14 = new Edit('Table14', new JsonZoonData('Q_결재진행현황', {}),{
            isShow : true,
            isEnable : true
        });

        const Label6 = new Label('Label6', new JsonZoonData('Label6', {}),{
            isShow : true,
            isEnable : true
        });

        const Combo_부터_일자 = new Combo('Combo_부터_일자', new JsonZoonData('Q_DUAL_해당월일자_부터', {}),{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Label5 = new Label('Label5', new JsonZoonData('Label5', {}),{
            isShow : true,
            isEnable : true
        });

        //하드코딩
        const dateMmArr=[];
        let startMm = 1;
        for(var i = startMm; i <= 12; i++){
            const dateObj = new Object();
            dateObj['CD_DESC'] = i;
            if(i < 10){
                i = '0' + i;
            }
            dateObj['CD_CODE'] = i;
            dateMmArr.push(dateObj);
        };

        const Combo_월_Data = new JsonZoonData('Combo_월_Data', dateMmArr);
        const Combo_부터_월 = new Combo('Combo_부터_월', Combo_월_Data,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on('OnChange', function() {
            RunButton('Cmd_해당년월일자부터');
        });

        const Combo_까지_월 = new Combo('Combo_까지_월', Combo_월_Data,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on('OnChange', function() {
            RunButton('Cmd_해당년월일자까지');
        });

        //하드코딩
        const dateYyArr=[];
        let startYy = 2000;
        let nowdateYy = new Date().getFullYear();
        for(var i = startYy; i <= nowdateYy; i++){
            const dateObj = new Object();
            dateObj['CD_DESC'] = i;
            dateObj['CD_CODE'] = i;
            dateYyArr.push(dateObj);
        }

        const Combo_년도_Data = new JsonZoonData('Combo_년도_Data', dateYyArr);
        const Combo_부터_년도 = new Combo('Combo_부터_년도', Combo_년도_Data,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on('OnChange', function() {
            RunButton('Cmd_해당년월일자부터');
        });

        const Combo_까지_년도 = new Combo('Combo_까지_년도', Combo_년도_Data,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on('OnChange', function() {
            RunButton('Cmd_해당년월일자까지');
        });

        const Label1 = new Label('Label1', new JsonZoonData('Label1', {}),{
            isShow : true,
            isEnable : true
        });

        const Label7 = new Label('Label7', new JsonZoonData('Label7', {}),{
            isShow : true,
            isEnable : true
        });

        const Combo_까지_일자 = new Combo('Combo_까지_일자', new JsonZoonData('Q_DUAL_해당월일자_까지', {}),{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Label8 = new Label('Label8', new JsonZoonData('Label8', {}),{
            isShow : true,
            isEnable : true
        });

        const Label9 = new Label('Label9', new JsonZoonData('Label9', {}),{
            isShow : true,
            isEnable : true
        });

        const Q_우편번호_시도 = new JsonZoonData('Q_우편번호_시도', {});
        const Combo_우편번호_시도 = new Combo('Combo_우편번호_시도', Q_우편번호_시도,{
            isShow : true,
            isEnable : true,
            format : {
                text : '시도명칭',
                value : '시도',
                index : '',
            }
        }).on('OnChange', function() {

            RunQuery('Q_우편번호_구군', {
                '00_우편번호_시도': GetValue('Combo_우편번호_시도')
            }, 'GET');

            RunQuery('Q_우편번호_동', {
                '00_우편번호_시도': GetValue('Combo_우편번호_시도'),
                '00_우편번호_구군': GetValue('Combo_우편번호_구군')
            }, 'GET');

            GetComponent('Combo_우편번호_구군').SetCurSel(0);

            GetComponent('Combo_우편번호_동').SetCurSel(0);

        });

        const Q_우편번호_동 = new JsonZoonData('Q_우편번호_동', {});
        const Combo_우편번호_동 = new Combo('Combo_우편번호_동', Q_우편번호_동,{
            isShow : true,
            isEnable : true,
            format : {
                text : '동명칭',
                value : '동',
                index : '',
            }
        }).on('OnChange', function() {
            RunButton('Cmd_해당년월일자부터');
        });

        const Q_우편번호_구군 = new JsonZoonData('Q_우편번호_구군', {});
        const Combo_우편번호_구군 = new Combo('Combo_우편번호_구군', Q_우편번호_구군,{
            isShow : true,
            isEnable : true,
            format : {
                text : '구군명',
                value : '구군',
                index : '',
            }
        }).on('OnChange', function() {
            RunQuery('Q_우편번호_동', {
                '00_우편번호_시도': GetValue('Combo_우편번호_시도'),
                '00_우편번호_구군': GetValue('Combo_우편번호_구군')
            }, 'GET');

            GetComponent('Combo_우편번호_동').SetCurSel(0);
        });

        //하드코딩
        const dateExpectedBidPriceLowestArr=[
            { "CD_DESC" : "0원", "CD_CODE" : "0"},
            { "CD_DESC" : "3천만원", "CD_CODE" : "30000000"},
            { "CD_DESC" : "5천만원", "CD_CODE" : "50000000"},
            { "CD_DESC" : "1억원", "CD_CODE" : "100000000"},
            { "CD_DESC" : "2억원", "CD_CODE" : "200000000"},
            { "CD_DESC" : "3억원", "CD_CODE" : "300000000"},
            { "CD_DESC" : "5억원", "CD_CODE" : "500000000"},
            { "CD_DESC" : "10억원", "CD_CODE" : "1000000000"},
            { "CD_DESC" : "15억원", "CD_CODE" : "1500000000"},
            { "CD_DESC" : "20억원", "CD_CODE" : "2000000000"},
            { "CD_DESC" : "50억원", "CD_CODE" : "5000000000"}
        ];
        const Combo_예상낙찰가_최저_date = new JsonZoonData('Combo_예상낙찰가_최저_date', dateExpectedBidPriceLowestArr);
        const Combo_예상낙찰가_최저 = new Combo('Combo_예상낙찰가_최저',Combo_예상낙찰가_최저_date ,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        //하드코딩
        const dateExpectedBidPriceBestArr=[
            { "CD_DESC" : "0원", "CD_CODE" : "0"},
            { "CD_DESC" : "3천만원", "CD_CODE" : "30000000"},
            { "CD_DESC" : "5천만원", "CD_CODE" : "50000000"},
            { "CD_DESC" : "1억원", "CD_CODE" : "100000000"},
            { "CD_DESC" : "2억원", "CD_CODE" : "200000000"},
            { "CD_DESC" : "3억원", "CD_CODE" : "300000000"},
            { "CD_DESC" : "5억원", "CD_CODE" : "500000000"},
            { "CD_DESC" : "10억원", "CD_CODE" : "1000000000"},
            { "CD_DESC" : "15억원", "CD_CODE" : "1500000000"},
            { "CD_DESC" : "20억원", "CD_CODE" : "2000000000"},
            { "CD_DESC" : "50억원", "CD_CODE" : "5000000000"},
            { "CD_DESC" : "50억원 이상", "CD_CODE" : "9000000000000"}
        ];
        const Combo_예상낙찰가_최고_date = new JsonZoonData('Combo_예상낙찰가_최고_date', dateExpectedBidPriceBestArr);
        const Combo_예상낙찰가_최고 = new Combo('Combo_예상낙찰가_최고', Combo_예상낙찰가_최고_date, {
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Label10 = new Label('Label10', new JsonZoonData('Label10', {}),{
            isShow : true,
            isEnable : true
        });


        const Formula_감정일자_부터 = new Edit('Formula_감정일자_부터', new JsonZoonData('Formula_감정일자_부터', {}),{
            isShow : false,
            isEnable : true
        });

        const Formula_감정일자_까지 = new Edit('Formula_감정일자_까지', new JsonZoonData('Formula_감정일자_까지', {}),{
            isShow : false,
            isEnable : true
        });

        const Formula_소재지 = new Edit('Formula_소재지', new JsonZoonData('Formula_소재지', {}),{
            isShow : false,
            isEnable : true
        });

        const Command_조회 = new Picture('Command_조회', new JsonZoonData('Command_조회', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {
            SetValue('Formula_소재지', GetValue('Combo_우편번호_시도') +'%'+ GetValue('Combo_우편번호_구군') + '%'+ GetValue('Combo_우편번호_동'));
            
            RunQuery('Q_담보목록', {
                '00_감정일자_부터': GetValue('Formula_감정일자_부터'),
                '01_감정일자_까지': GetValue('Formula_감정일자_까지'),
                '02_주소': GetValue('Formula_소재지'),
                '03_예상낙찰가_최저': GetValue('Combo_예상낙찰가_최저'),
                '04_예상낙찰가_최고': GetValue('Combo_예상낙찰가_최고'),
                '05_담보종류': GetValue('Label_담보종류코드'),
                '06_지점': GetValue('Label_소재지코드'),
                '07_최종평가가격_최저': GetValue('Edit_최종평가가격_최저'),
                '08_최종평가가격_최고': GetValue('Edit_최종평가가격_최고'),
                '09_면적_토지_최저': GetValue('Edit_면적_토지_최저'),
                '10_면적_토지_최고': GetValue('Edit_면적_토지_최고'),
                '11_면적_건물_최저': GetValue('Edit_면적_건물_최저'),
                '12_면적_건물_최고': GetValue('Edit_면적_건물_최고'),
                '13_지목': GetValue('Label_지목별코드'),
                '14_1차거래처': isEmpty(GetValue('Edit_거래처코드')) ? '' : GetValue('Edit_거래처코드'),
                '15_자체및업소': GetValue('Group_자체및업소'),
            }, 'GET');


            GetComponent('TabControl1').SetCurSelChange(1);

            GetZoonData('Q_담보목록').GetRowCount('Edit_조회건수');

            SetValue('Edit_조회건수', GetValue('Edit_조회건수'));

            if(GetNumber('Edit_조회건수') != 0){
                document.getElementById('Edit_합계_토지').value = GetZoonData('Q_담보목록').TotalIndexArray('Edit_합계_토지', 'L_SIZE_PY');

                document.getElementById('Edit_합계_건물').value = GetZoonData('Q_담보목록').TotalIndexArray('Edit_합계_건물', 'B_SIZE_PY');
    
                document.getElementById('Edit_합계_평가가격').value = GetZoonData('Q_담보목록').TotalIndexArray('Edit_합계_평가가격', 'INCREASE_AMT');
    
                document.getElementById('Edit_합계_예상1차최저입찰가').value = GetZoonData('Q_담보목록').TotalIndexArray('Edit_합계_예상1차최저입찰가', 'PLMIN_BID_AMT');
    
                document.getElementById('Edit_합계_예상낙찰가').value = GetZoonData('Q_담보목록').TotalIndexArray('Edit_합계_예상낙찰가','PL_BID_AMT');
                
                GetComponent('DBGrid1').hiddenfooter('-1');
            }else{
                GetComponent('DBGrid1').hiddenfooter('0');
            }    

            if (GetValue('Edit_조회건수') > 999 && GetValue('Edit_조회건수') < 99998 ) {
                SetValue('Edit_조회건수', Left(GetValue('Edit_조회건수'),StrLength(GetValue('Edit_조회건수'))-3)+","+Right(GetValue('Edit_조회건수'),3));
            } else {
                SetValue('Edit_조회건수', GetValue('Edit_조회건수'));
            }

        });

        const Q_부서목록 = new JsonZoonData('Q_부서목록', {});
        const List_지점 = new List('List_지점', Q_부서목록,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'BUSEO_NAME',
                value : 'BUSEO',
                index : '',
            }
        }).on('OnChange', function() {
            MC_소재지_선택항목();
        });
        
        const Q_담보종류 = new JsonZoonData('Q_담보종류', {});
        const List_담보종류 = new List('List_담보종류', Q_담보종류,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on('OnChange', function() {
            MC_소재지_담보종류();
        });

        const Q_지목 = new JsonZoonData('Q_지목', {});
        const List_지목 = new List('List_지목', Q_지목,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on('OnChange', function() {
            MC_소재지_지목별();
        });

        const Check_소재지 = new Check('Check_소재지', new JsonZoonData('A', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {

            GetZoonData('Q_부서목록').FindIndexArray('Idx_Arr', (row) => {
                return row['BUSEO'] != 9999;
            });
            
            SetValue('Check_소재지', document.getElementById('Check_소재지').checked == true ? 'A' : '' )
           
            if (isEmpty(GetValue('Check_소재지'))) {
                GetComponent('List_지점').SetSels(GetValue('Idx_Arr'),'-1');
            }

            if (GetValue('Check_소재지') == 'A') {
                GetComponent('List_지점').SetSels(GetValue('Idx_Arr'),'0');
            }

            MC_소재지_선택항목();
        });

        const Check_담보종류 = new Check('Check_담보종류', new JsonZoonData('A', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {

            GetZoonData('Q_담보종류').FindIndexArray('Idx_Arr', (row) => {
                return row['CD_CODE'] != 9999;
            });

            SetValue('Check_담보종류', document.getElementById('Check_담보종류').checked == true ? 'A' : '' )

            if (isEmpty(GetValue('Check_담보종류'))) {
                GetComponent('List_담보종류').SetSels(GetValue('Idx_Arr'),'-1');
            }

            if (GetValue('Check_담보종류') == 'A') {
                GetComponent('List_담보종류').SetSels(GetValue('Idx_Arr'),'0');
            }

            MC_소재지_담보종류();

        });

        const Check_지목별 = new Check('Check_지목별', new JsonZoonData('A', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {

            GetZoonData('Q_지목').FindIndexArray('Idx_Arr', (row) => {
                return row['CD_CODE'] != 9999;
            });

            SetValue('Check_지목별', document.getElementById('Check_지목별').checked == true ? 'A' : '' )

            if (isEmpty(GetValue('Check_지목별'))) {
                GetComponent('List_지목').SetSels(GetValue('Idx_Arr'),'-1');
            }

            if (GetValue('Check_지목별') == 'A') {
                GetComponent('List_지목').SetSels(GetValue('Idx_Arr'),'0');
            }

            MC_소재지_지목별();

        });

        const Group_자체및업소 = new Radio('Group_자체및업소', new JsonZoonData('Group_자체및업소', {}),{
            isShow : true,
            isEnable : true
        });

        const Option_업소 = new Edit('Option_업소', new JsonZoonData('1', {}),{
            isShow : true,
            isEnable : true
        });

        const Option_자체 = new Edit('Option_자체', new JsonZoonData('0', {}),{
            isShow : true,
            isEnable : true
        });

        const Option_전체 = new Edit('Option_전체', new JsonZoonData('A', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_거래처 = new Edit('Edit_거래처', new JsonZoonData('Edit_거래처', {}),{
            isShow : true,
            isEnable : false
        });

        const Picture4 = new Picture('Picture4', new JsonZoonData('Picture4', {}),{
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                GetComponent('SubForm_거래처조회').ShowSubForm();
            },
        });

        const Picture2 = new Picture('Picture2', new JsonZoonData('Picture2', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {
            SetValue('Edit_거래처', "")
            SetValue('Edit_거래처코드', "")
        });

        const Edit_최종평가가격_최저 = new MaskEdit('Edit_최종평가가격_최저', new JsonZoonData('Edit_최종평가가격_최저', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1',
            maskType : '숫자',
        }).on('OnLostFocus', function() {
            if (GetValue('Combo_집합건물종류') == "101" ) {
                SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            } else {
                SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_전유면적')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_전유면적_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            }
            SetValue('MkEdit_시가', GetValue('MkEdit_등기부등본상의시세_총액'))
        });

        const Edit_합계_토지 = new MaskEdit('Edit_합계_토지', new JsonZoonData('Edit_합계_토지', {}),{
            isShow : true,
            isEnable : true,
            mask : '-;12;#,###1.00',
            maskType : '숫자',
        });

        const Edit_합계_건물 = new MaskEdit('Edit_합계_건물', new JsonZoonData('Edit_합계_건물', {}),{
            isShow : true,
            isEnable : true,
            mask : '-;12;#,###1.00',
            maskType : '숫자',
        });

        const Edit_합계_평가가격 = new MaskEdit('Edit_합계_평가가격', new JsonZoonData('Edit_합계_평가가격', {}),{
            isShow : true,
            isEnable : true,
            mask : '-;12;#,###1',
            maskType : '숫자',
        });

        const Edit_합계_예상1차최저입찰가 = new MaskEdit('Edit_합계_예상1차최저입찰가', new JsonZoonData('Edit_합계_예상1차최저입찰가', {}),{
            isShow : true,
            isEnable : true,
            mask : '-;12;#,###1',
            maskType : '숫자',
        });

        const Edit_합계_예상낙찰가 = new MaskEdit('Edit_합계_예상낙찰가', new JsonZoonData('Edit_합계_예상낙찰가', {}),{
            isShow : true,
            isEnable : true,
            mask : '-;12;#,###1',
            maskType : '숫자',
        });

        const Label2 = new Label('Label2', new JsonZoonData('Label2', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_낙찰가율_최저 = new MaskEdit('Edit_낙찰가율_최저', new JsonZoonData('Edit_낙찰가율_최저', {}),{
            isShow : true,
            isEnable : true,
            mask : ';3;#,###1.00',
            maskType : '숫자',
        }).on('OnLostFocus', function() {

            SetValue('MkEdit_보정표_기준낙찰가율', (GetValue('MkEdit_보정표_당해지역낙찰가율')+GetValue('MkEdit_보정표_유사부동산낙찰가율'))/2)

            SetValue('MkEdit_보정표_적용할낙찰가율', GetValue('MkEdit_보정표_기준낙찰가율')*GetValue('MkEdit_보정표_아파트단지규모_적용율')*GetValue('MkEdit_보정표_전유부분면적_적용율')*GetValue('MkEdit_보정표_전유부분위치_적용율')*GetValue('MkEdit_보정표_건축물의경과년도_적용율')*GetValue('MkEdit_보정표_점유자의권리형태'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)

            MC_배당표_주택임대차보증금_계산_전체();

        });

        const Label29 = new Label('Label29', new JsonZoonData('Label29', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_낙찰가율_최고 = new MaskEdit('Edit_낙찰가율_최고', new JsonZoonData('Edit_낙찰가율_최고', {}),{
            isShow : true,
            isEnable : true,
            mask : ';3;#,###1.00',
            maskType : '숫자',
        }).on('OnLostFocus', function() {

            SetValue('MkEdit_보정표_기준낙찰가율', (GetValue('MkEdit_보정표_당해지역낙찰가율')+GetValue('MkEdit_보정표_유사부동산낙찰가율'))/2)


            SetValue('MkEdit_보정표_적용할낙찰가율', GetValue('MkEdit_보정표_기준낙찰가율')*GetValue('MkEdit_보정표_아파트단지규모_적용율')*GetValue('MkEdit_보정표_전유부분면적_적용율')*GetValue('MkEdit_보정표_전유부분위치_적용율')*GetValue('MkEdit_보정표_건축물의경과년도_적용율')*GetValue('MkEdit_보정표_점유자의권리형태'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            MC_배당표_주택임대차보증금_계산_전체();

        });

        const Label3 = new Label('Label3', new JsonZoonData('Label3', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_면적_토지_최저 = new MaskEdit('Edit_면적_토지_최저', new JsonZoonData('Edit_면적_토지_최저', {}),{
            isShow : true,
            isEnable : true,
            mask : ';7;#,###1.00',
            maskType : '숫자',
        }).on('OnLostFocus', function() {

            SetValue('MkEdit_전유면적_평', GetValue('MkEdit_전유면적')*0.3025)
            SetValue('MkEdit_면적합계', GetValue('MkEdit_전유면적')+GetValue('MkEdit_공유면적'))
            SetValue('MkEdit_면적합계_평', GetValue('MkEdit_전유면적_평')+GetValue('MkEdit_공유면적_평'))
            SetValue('MkEdit_보정표_전유부분면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_등기부상전용면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분자', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분모', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_비율', GetValue('MkEdit_분자')/GetValue('MkEdit_분모')*100)
            SetValue('MkEdit_감정가_등기부상전용면적', GetValue('MkEdit_등기부상전용면적'))
            SetValue('MkEdit_감정가_분자', GetValue('MkEdit_분자'))
            SetValue('MkEdit_감정가_분모', GetValue('MkEdit_분모'))
            SetValue('MkEdit_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))

            SetValue('MkEdit_담보제공면적', GetValue('MkEdit_등기부상전용면적')*(GetValue('MkEdit_비율')/100))
            SetValue('MkEdit_감정가_비율', GetValue('MkEdit_비율'))
            SetValue('MkEdit_감정가_담보제공면적', GetValue('MkEdit_담보제공면적'))
            SetValue('MkEdit_감정가_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))
            SetValue('MkEdit_감정가_최종평가가격', GetValue('MkEdit_감정가_평가가격')*(GetValue('MkEdit_감정가_비율')/100))
            SetValue('MkEdit_보정표_평가가격', GetValue('MkEdit_감정가_평가가격'))
            SetValue('MkEdit_보정표_최저입찰가', GetValue('MkEdit_감정가_최종평가가격'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_시가_최저_단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최저_평당단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최고_단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최고_평당단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_기준시가_단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_기준시가_평당단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가')*1000)
            SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가')*1000)
            SetValue('MkEdit_시가_최고_단가', GetValue('MkEdit_시가_최고_단가')*1000)
            SetValue('MkEdit_시가_최고_평당단가', GetValue('MkEdit_시가_최고_평당단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            SetValue('MkEdit_기준시가_단가', GetValue('MkEdit_기준시가_단가')*1000)
            SetValue('MkEdit_기준시가_평당단가', GetValue('MkEdit_기준시가_평당단가')*1000)


            GetZoonData('Q_전유부분의면적').FindIndex('_권한', (row) => {

                if ((row['CD_CODE'] == GetValue('_권한'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_전유부분의면적').GetRow(None, 0.0);


            MC_배당표_주택임대차보증금_계산_전체();


            RunButton('Command_응찰_02_이벤트');

        });

        const Label4 = new Label('Label4', new JsonZoonData('Label4', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_면적_토지_최고 = new MaskEdit('Edit_면적_토지_최고', new JsonZoonData('Edit_면적_토지_최고', {}),{
            isShow : true,
            isEnable : true,
            mask : ';7;#,###1.00',
            maskType : '숫자',
        }).on('OnLostFocus', function() {

            SetValue('MkEdit_전유면적_평', GetValue('MkEdit_전유면적')*0.3025)
            SetValue('MkEdit_면적합계', GetValue('MkEdit_전유면적')+GetValue('MkEdit_공유면적'))
            SetValue('MkEdit_면적합계_평', GetValue('MkEdit_전유면적_평')+GetValue('MkEdit_공유면적_평'))
            SetValue('MkEdit_보정표_전유부분면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_등기부상전용면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분자', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분모', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_비율', GetValue('MkEdit_분자')/GetValue('MkEdit_분모')*100)
            SetValue('MkEdit_감정가_등기부상전용면적', GetValue('MkEdit_등기부상전용면적'))
            SetValue('MkEdit_감정가_분자', GetValue('MkEdit_분자'))
            SetValue('MkEdit_감정가_분모', GetValue('MkEdit_분모'))
            SetValue('MkEdit_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))

            SetValue('MkEdit_담보제공면적', GetValue('MkEdit_등기부상전용면적')*(GetValue('MkEdit_비율')/100))
            SetValue('MkEdit_감정가_비율', GetValue('MkEdit_비율'))
            SetValue('MkEdit_감정가_담보제공면적', GetValue('MkEdit_담보제공면적'))
            SetValue('MkEdit_감정가_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))
            SetValue('MkEdit_감정가_최종평가가격', GetValue('MkEdit_감정가_평가가격')*(GetValue('MkEdit_감정가_비율')/100))
            SetValue('MkEdit_보정표_평가가격', GetValue('MkEdit_감정가_평가가격'))
            SetValue('MkEdit_보정표_최저입찰가', GetValue('MkEdit_감정가_최종평가가격'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_시가_최저_단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최저_평당단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최고_단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최고_평당단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_기준시가_단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_기준시가_평당단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가')*1000)
            SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가')*1000)
            SetValue('MkEdit_시가_최고_단가', GetValue('MkEdit_시가_최고_단가')*1000)
            SetValue('MkEdit_시가_최고_평당단가', GetValue('MkEdit_시가_최고_평당단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            SetValue('MkEdit_기준시가_단가', GetValue('MkEdit_기준시가_단가')*1000)
            SetValue('MkEdit_기준시가_평당단가', GetValue('MkEdit_기준시가_평당단가')*1000)


            GetZoonData('Q_전유부분의면적').FindIndex('_권한', (row) => {

                if ((row['CD_CODE'] == GetValue('_권한'))) {
                    return true;
                }

                return false;
            });

            MC_배당표_주택임대차보증금_계산_전체();

            RunButton('Command_응찰_02_이벤트');

        });

        const Label11 = new Label('Label11', new JsonZoonData('Label11', {}),{
            isShow : true,
            isEnable : true
        });

        const Label13 = new Label('Label13', new JsonZoonData('Label13', {}),{
            isShow : true,
            isEnable : true
        });
        
        const Label14 = new Label('Label14', new JsonZoonData('Label14', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_면적_건물_최저 = new MaskEdit('Edit_면적_건물_최저', new JsonZoonData('Edit_면적_건물_최저', {}),{
            isShow : true,
            isEnable : true,
            mask : ';7;#,###1.00',
            maskType : '숫자',
        }).on('OnLostFocus', function() {

            SetValue('MkEdit_전유면적_평', GetValue('MkEdit_전유면적')*0.3025)
            SetValue('MkEdit_면적합계', GetValue('MkEdit_전유면적')+GetValue('MkEdit_공유면적'))
            SetValue('MkEdit_면적합계_평', GetValue('MkEdit_전유면적_평')+GetValue('MkEdit_공유면적_평'))
            SetValue('MkEdit_보정표_전유부분면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_등기부상전용면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분자', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분모', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_비율', GetValue('MkEdit_분자')/GetValue('MkEdit_분모')*100)
            SetValue('MkEdit_감정가_등기부상전용면적', GetValue('MkEdit_등기부상전용면적'))
            SetValue('MkEdit_감정가_분자', GetValue('MkEdit_분자'))
            SetValue('MkEdit_감정가_분모', GetValue('MkEdit_분모'))
            SetValue('MkEdit_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))

            SetValue('MkEdit_담보제공면적', GetValue('MkEdit_등기부상전용면적')*(GetValue('MkEdit_비율')/100))
            SetValue('MkEdit_감정가_비율', GetValue('MkEdit_비율'))
            SetValue('MkEdit_감정가_담보제공면적', GetValue('MkEdit_담보제공면적'))
            SetValue('MkEdit_감정가_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))
            SetValue('MkEdit_감정가_최종평가가격', GetValue('MkEdit_감정가_평가가격')*(GetValue('MkEdit_감정가_비율')/100))
            SetValue('MkEdit_보정표_평가가격', GetValue('MkEdit_감정가_평가가격'))
            SetValue('MkEdit_보정표_최저입찰가', GetValue('MkEdit_감정가_최종평가가격'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_시가_최저_단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최저_평당단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최고_단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최고_평당단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_기준시가_단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_기준시가_평당단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가')*1000)
            SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가')*1000)
            SetValue('MkEdit_시가_최고_단가', GetValue('MkEdit_시가_최고_단가')*1000)
            SetValue('MkEdit_시가_최고_평당단가', GetValue('MkEdit_시가_최고_평당단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            SetValue('MkEdit_기준시가_단가', GetValue('MkEdit_기준시가_단가')*1000)
            SetValue('MkEdit_기준시가_평당단가', GetValue('MkEdit_기준시가_평당단가')*1000)


            GetZoonData('Q_전유부분의면적').FindIndex('_권한', (row) => {

                if ((row['CD_CODE'] == GetValue('_권한'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_전유부분의면적').GetRow(None, 0.0);


            MC_배당표_주택임대차보증금_계산_전체();


            RunButton('Command_응찰_02_이벤트');

        });

        const Label15 = new Label('Label15', new JsonZoonData('Label15', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_면적_건물_최고 = new MaskEdit('Edit_면적_건물_최고', new JsonZoonData('Edit_면적_건물_최고', {}),{
            isShow : true,
            isEnable : true,
            mask : ';7;#,###1.00',
            maskType : '숫자',
        }).on('OnLostFocus', function() {

            SetValue('MkEdit_전유면적_평', GetValue('MkEdit_전유면적')*0.3025)
            SetValue('MkEdit_면적합계', GetValue('MkEdit_전유면적')+GetValue('MkEdit_공유면적'))
            SetValue('MkEdit_면적합계_평', GetValue('MkEdit_전유면적_평')+GetValue('MkEdit_공유면적_평'))
            SetValue('MkEdit_보정표_전유부분면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_등기부상전용면적', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분자', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_분모', GetValue('MkEdit_전유면적'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_비율', GetValue('MkEdit_분자')/GetValue('MkEdit_분모')*100)
            SetValue('MkEdit_감정가_등기부상전용면적', GetValue('MkEdit_등기부상전용면적'))
            SetValue('MkEdit_감정가_분자', GetValue('MkEdit_분자'))
            SetValue('MkEdit_감정가_분모', GetValue('MkEdit_분모'))
            SetValue('MkEdit_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))

            SetValue('MkEdit_담보제공면적', GetValue('MkEdit_등기부상전용면적')*(GetValue('MkEdit_비율')/100))
            SetValue('MkEdit_감정가_비율', GetValue('MkEdit_비율'))
            SetValue('MkEdit_감정가_담보제공면적', GetValue('MkEdit_담보제공면적'))
            SetValue('MkEdit_감정가_평가가격', GetValue('MkEdit_결정가격')+GetValue('MkEdit_보수금액'))
            SetValue('MkEdit_감정가_최종평가가격', GetValue('MkEdit_감정가_평가가격')*(GetValue('MkEdit_감정가_비율')/100))
            SetValue('MkEdit_보정표_평가가격', GetValue('MkEdit_감정가_평가가격'))
            SetValue('MkEdit_보정표_최저입찰가', GetValue('MkEdit_감정가_최종평가가격'))
            SetValue('MkEdit_보정표_예상낙찰가',  GetValue('MkEdit_보정표_최저입찰가')*GetValue('MkEdit_보정표_적용할낙찰가율')/100)


            SetValue('MkEdit_시가_최저_단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최저_평당단가', Round(GetValue('MkEdit_시가_최저_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최고_단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_시가_최고_평당단가', Round(GetValue('MkEdit_시가_최고_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_기준시가_단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계')/1000,0))
            SetValue('MkEdit_기준시가_평당단가', Round(GetValue('MkEdit_기준시가_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
            SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가')*1000)
            SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가')*1000)
            SetValue('MkEdit_시가_최고_단가', GetValue('MkEdit_시가_최고_단가')*1000)
            SetValue('MkEdit_시가_최고_평당단가', GetValue('MkEdit_시가_최고_평당단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
            SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            SetValue('MkEdit_기준시가_단가', GetValue('MkEdit_기준시가_단가')*1000)
            SetValue('MkEdit_기준시가_평당단가', GetValue('MkEdit_기준시가_평당단가')*1000)


            GetZoonData('Q_전유부분의면적').FindIndex('_권한', (row) => {

                if ((row['CD_CODE'] == GetValue('_권한'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_전유부분의면적').GetRow(None, 0.0);


            MC_배당표_주택임대차보증금_계산_전체();


            RunButton('Command_응찰_02_이벤트');

        })

        const Label16 = new Label('Label16', new JsonZoonData('Label16', {}),{
            isShow : true,
            isEnable : true
        });

        const Label_소재지 = new Label('Label_소재지', new JsonZoonData('Label_소재지', {}),{
            isShow : true,
            isEnable : false
        });

        const Label_담보종류 = new Label('Label_담보종류', new JsonZoonData('Label_담보종류', {}),{
            isShow : true,
            isEnable : false
        });

        const Label_지목별 = new Label('Label_지목별', new JsonZoonData('Label_지목별', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_거래처코드 = new Edit('Edit_거래처코드', new JsonZoonData('Edit_거래처코드', {}),{
            isShow : false,
            isEnable : false
        });

        const Label_담보종류코드 = new Label('Label_담보종류코드', new JsonZoonData('Label_담보종류코드', {}),{
            isShow : false,
            isEnable : false
        });

        const Label_지목별코드 = new Label('Label_지목별코드', new JsonZoonData('Label_지목별코드', {}),{
            isShow : false,
            isEnable : false
        });

        const Edit_최종평가가격_최고 = new MaskEdit('Edit_최종평가가격_최고', new JsonZoonData('Edit_최종평가가격_최고', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1',
            maskType : '숫자',
        }).on('OnLostFocus', function() {


            if (GetValue('Combo_집합건물종류') == "101" ) {
                SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_면적합계_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            } else {

                SetValue('MkEdit_등기부등본상의시세_단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_전유면적')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetValue('MkEdit_등기부등본상의시세_총액')/GetValue('MkEdit_전유면적_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가')*1000)
            }

            SetValue('MkEdit_시가', GetValue('MkEdit_등기부등본상의시세_총액'))

        })

        const Label12 = new Label('Label12', new JsonZoonData('Label12', {}),{
            isShow : true,
            isEnable : true
        });

        const Label_소재지코드 = new Label('Label_소재지코드', new JsonZoonData('Label_소재지코드', {}),{
            isShow : false,
            isEnable : false
        });

        const Command_엑셀다운 = new Command('Command_엑셀다운', new JsonZoonData('Command_엑셀다운', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {
            // ExcelExport	C:\THE HITE LIST\조건별검색.xls
            //
            // None

        });

        const Table1 = new Edit('Table1', new JsonZoonData('Q_담보목록', {}),{
            isShow : true,
            isEnable : true
        })
    }
}
