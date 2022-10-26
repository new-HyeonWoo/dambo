const pageZoon = {

    OnInitialize: function () {
        pageZoon.page1();
        pageZoon.page2();
        pageZoon.page3();
        pageZoon.page4();
        pageZoon.page5();
        pageZoon.common();
    },

    page1 : function () {
        const Edit_0_1 = new RichEditor('Edit_0_1', new JsonZoonData('Edit_0_1', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_0_2 = new RichEditor('Edit_0_2', new JsonZoonData('Edit_0_2', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_0_3 = new RichEditor('Edit_0_3', new JsonZoonData('Edit_0_3', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_0_4 = new RichEditor('Edit_0_4', new JsonZoonData('Edit_0_4', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_0_5 = new RichEditor('Edit_0_5', new JsonZoonData('Edit_0_5', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit1 = new Edit('Edit1', new JsonZoonData('Edit1', {}), {
            isShow : true,
            isEnable : true
        });

        const Label_Title = new Label('Label_Title', new JsonZoonData('Label_Title', {}), {
            isShow : true,
            isEnable : true
        });

        const Label1 = new Label('Label1', new JsonZoonData('Label1', {}), {
            isShow : true,
            isEnable : true
        });

        const Label2 = new Label('Label2', new JsonZoonData('Label2', {}), {
            isShow : true,
            isEnable : true
        });

        const Label3 = new Label('Label3', new JsonZoonData('Label3', {}), {
            isShow : true,
            isEnable : true
        });

        const Label4 = new Label('Label4', new JsonZoonData('Label4', {}), {
            isShow : true,
            isEnable : true
        });

        const Label5 = new Label('Label5', new JsonZoonData('Label5', {}), {
            isShow : true,
            isEnable : true
        });

        const Label6 = new Label('Label6', new JsonZoonData('Label6', {}), {
            isShow : true,
            isEnable : true
        });

        const RichEditor1 = new RichEditor('RichEditor1', new JsonZoonData('RichEditor1', {}), {
            isShow : true,
            isEnable : true,
            height : 500,
        }).on({
        });

        const RichEditor2 = new RichEditor('RichEditor2', new JsonZoonData('RichEditor2', {}), {
            isShow : true,
            isEnable : true
        }).on({
        });

        const SubForm_출력용_URL = '/view/es01/w02/p03/preview';
        const SubForm_출력용 = new SubForm('SubForm_출력용', new JsonZoonData('SubForm_출력용', {}),
            SubForm_출력용_URL, { isShow : true, isEnable : true});
    },

    page2 : function () {
        const Edit_1_1_2 = new RichEditor('Edit_1_1_2', new JsonZoonData('Edit_1_1_2', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_1_3 = new RichEditor('Edit_1_1_3', new JsonZoonData('Edit_1_1_3', {}), {
            isShow : true,
            isEnable : false
        });

        // const Edit_1_2 = new RichEditor('Edit_1_2', new JsonZoonData('Edit_1_2', {}), {
        //     isShow : true,
        //     isEnable : false
        // });

        const Edit_1_3_1 = new RichEditor('Edit_1_3_1', new JsonZoonData('Edit_1_3_1', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_3_2 = new RichEditor('Edit_1_3_2', new JsonZoonData('Edit_1_3_2', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_3_3 = new RichEditor('Edit_1_3_3', new JsonZoonData('Edit_1_3_3', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_4_1 = new RichEditor('Edit_1_4_1', new JsonZoonData('Edit_1_4_1', {}), {
            isShow : true,
            isEnable : false
        });
    },

    page3 : function () {
        const Edit_1_4_2 = new RichEditor('Edit_1_4_2', new JsonZoonData('Edit_1_4_2', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_4_3 = new RichEditor('Edit_1_4_3', new JsonZoonData('Edit_1_4_3', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_4_4 = new RichEditor('Edit_1_4_4', new JsonZoonData('Edit_1_4_4', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_4_5 = new RichEditor('Edit_1_4_5', new JsonZoonData('Edit_1_4_5', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_국세_가산금 = new MaskEdit('Edit_국세_가산금', new JsonZoonData('Edit_국세_가산금', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            if ( GetValue('Combo_집합건물종류') == "101" ) {
                SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
            } else {
                SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
            }

            SetValue('MkEdit_시가',GetValue('MkEdit_등기부등본상의시세_총액'));
        });

        const Edit_국세_부과원인 = new Edit('Edit_국세_부과원인', new JsonZoonData('Edit_국세_부과원인', {}), {
            isShow: true,
            isEnable: false
        });

        const Edit_국세_부과일자 = new MaskEdit('Edit_국세_부과일자', new JsonZoonData('Edit_국세_부과일자', {}), {
            isShow: true,
            isEnable: false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        });

        const Edit_국세_체납금액 = new MaskEdit('Edit_국세_체납금액', new JsonZoonData('Edit_국세_체납금액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {
            if ( GetValue('Combo_집합건물종류') == "101" ) {
                SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
            } else {
                SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
            }

            SetValue('MkEdit_시가',GetValue('MkEdit_등기부등본상의시세_총액'))
        })

        const Edit_국세완납_부과일자 = new MaskEdit('Edit_국세완납_부과일자', new JsonZoonData('Edit_국세완납_부과일자', {}), {
            isShow: true,
            isEnable: false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        })

        const Edit_지방세_가산금 = new MaskEdit('Edit_지방세_가산금', new JsonZoonData('Edit_지방세_가산금', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {
            if ( GetValue('Combo_집합건물종류') == "101" ) {
                SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
            } else {
                SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적_평')/1000,0))
                SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
            }

            SetValue('MkEdit_시가',GetValue('MkEdit_등기부등본상의시세_총액'))
        })

        const Edit_지방세_부과원인 = new Edit('Edit_지방세_부과원인', new JsonZoonData('Edit_지방세_부과원인', {}), {
            isShow: true,
            isEnable: false
        });

        const Edit_지방세_부과일자 = new MaskEdit('Edit_지방세_부과일자', new JsonZoonData('Edit_지방세_부과일자', {}), {
            isShow: true,
            isEnable: false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        });

        const Edit_지방세_체납금액 = new MaskEdit('Edit_지방세_체납금액', new JsonZoonData('Edit_지방세_체납금액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        })

        const Edit_지방세완납_부과일자 = new MaskEdit('Edit_지방세완납_부과일자', new JsonZoonData('Edit_지방세완납_부과일자', {}), {
            isShow: true,
            isEnable: false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        });
    },

    page4 : function () {
        const Edit_1_1 = new RichEditor('Edit_1_1', new JsonZoonData('Edit_1_1', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_2 = new RichEditor('Edit_1_2', new JsonZoonData('Edit_1_2', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_3 = new RichEditor('Edit_1_3', new JsonZoonData('Edit_1_3', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_1_4 = new RichEditor('Edit_1_4', new JsonZoonData('Edit_1_4', {}), {
            isShow : true,
            isEnable : false
        });
    },

    page5 : function () {
        const Edit_2_1_1_1 = new RichEditor('Edit_2_1_1_1', new JsonZoonData('Edit_2_1_1_1', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_2_1_1_2 = new RichEditor('Edit_2_1_1_2', new JsonZoonData('Edit_2_1_1_2', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_2_1_1_3 = new RichEditor('Edit_2_1_1_3', new JsonZoonData('Edit_2_1_1_3', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_2_1_1_4 = new RichEditor('Edit_2_1_1_4', new JsonZoonData('Edit_2_1_1_4', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_2_1_1_5 = new RichEditor('Edit_2_1_1_5', new JsonZoonData('Edit_2_1_1_5', {}), {
            isShow : true,
            isEnable : false
        });

        const Edit_2_1_1_6 = new RichEditor('Edit_2_1_1_6', new JsonZoonData('Edit_2_1_1_6', {}), {
            isShow : true,
            isEnable : false
        });
    },

    common : function () {
        const Picture1_출력 = new Picture('Picture1_출력', new JsonZoonData('Picture1_출력', {}), {
            isShow : true,
            isEnable : true
        }).on({
            click: function() {
                GetComponent('RichEditor1').PrintRichEdit();
            }
        });

        const Picture6_다음 = new Picture('Picture6_다음', new JsonZoonData('Picture6_다음', {}), {
            isShow : true,
            isEnable : true
        }).on({
            click: function() {
                GotoPage(4)
            }
        });

        const Picture7_출력 = new Picture('Picture7_출력', new JsonZoonData('Picture7_출력', {}), {
            isShow : true,
            isEnable : true
        }).on({
            click: function() {
                MC_출력();

                GetComponent("SubForm_출력용").ShowSubForm();
            }
        });

        const Picture1_이전 = new Picture('Picture1_이전', new JsonZoonData('Picture1_이전', {}), {
            isShow : true,
            isEnable : true
        }).on({
            click: function() {
                GotoPage();
            }
        });
    }
}