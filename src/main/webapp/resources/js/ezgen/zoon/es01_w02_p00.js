const pageZoon = {

    OnInitialize: function () {
        const Label_Title = new Label('Label_Title', new JsonZoonData('Label_Title', {}),{
            isShow : true,
            isEnable : true
        });

        const RichEditor1 = new RichEditor('RichEditor1', new JsonZoonData('RichEditor1', {}), {
            isShow : true,
            isEnable : true,
            height : 500,
        });

        const Edit_국세_가산금 = new MaskEdit('Edit_국세_가산금', new JsonZoonData('Edit_국세_가산금', {}), {
            isShow: true,
            isEnable: true,
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
            isEnable: true
        });

        const Edit_국세_부과일자 = new MaskEdit('Edit_국세_부과일자', new JsonZoonData('Edit_국세_부과일자', {}), {
            isShow: true,
            isEnable: true,
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
            isEnable: true,
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
        });

        const Edit_국세완납_가산금 = new MaskEdit('Edit_국세완납_가산금', new JsonZoonData('Edit_국세완납_가산금', {}), {
            isShow: true,
            isEnable: true,
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

        const Edit_국세완납_부과원인 = new Edit('Edit_국세완납_부과원인', new JsonZoonData('Edit_국세완납_부과원인', {}), {
            isShow: true,
            isEnable: true
        });

        const Edit_국세완납_부과일자 = new MaskEdit('Edit_국세완납_부과일자', new JsonZoonData('Edit_국세완납_부과일자', {}), {
            isShow: true,
            isEnable: true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        });

        const Edit_국세완납_체납금액 = new MaskEdit('Edit_국세완납_체납금액', new JsonZoonData('Edit_국세완납_체납금액', {}), {
            isShow: true,
            isEnable: true,
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

        const Edit_지방세_가산금 = new MaskEdit('Edit_지방세_가산금', new JsonZoonData('Edit_지방세_가산금', {}), {
            isShow: true,
            isEnable: true,
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

        const Edit_지방세_부과일자 = new MaskEdit('Edit_지방세_부과일자', new JsonZoonData('Edit_지방세_부과일자', {}), {
            isShow: true,
            isEnable: true,
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
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        })

        const Edit_지방세완납_가산금 = new MaskEdit('Edit_지방세완납_가산금', new JsonZoonData('Edit_지방세완납_가산금', {}), {
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

        const Edit_지방세완납_부과원인 = new Edit('Edit_지방세완납_부과원인', new JsonZoonData('Edit_지방세완납_부과원인', {}), {
            isShow: true,
            isEnable: true
        });

        const Edit_지방세완납_부과일자 = new MaskEdit('Edit_지방세완납_부과일자', new JsonZoonData('Edit_지방세완납_부과일자', {}), {
            isShow: true,
            isEnable: true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            SetValue( 'MkEdit_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365 )
            SetValue( 'MkEdit_보정표_건축물의경과년도', (Days(StrToDate(GetValue('MkEdit_감정일')))-Days(StrToDate(GetValue('MkEdit_건축일자'))))/365)
            SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
        });

        const Edit_지방세완납_체납금액 = new MaskEdit('Edit_지방세완납_체납금액', new JsonZoonData('Edit_지방세완납_체납금액', {}), {
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

        const Edit1 = new RichEditor('Edit1', new JsonZoonData('Edit1', {}), {
            isShow : true,
            isEnable : true,
            height : 500,
        });

        const Edit9 = new Edit('Edit9', new JsonZoonData('Edit9', {}), {
            isShow: true,
            isEnable: true
        });

        const MkEdit1 = new MaskEdit('MkEdit1', new JsonZoonData('MkEdit1', {}), {
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

        const MkEdit2 = new MaskEdit('MkEdit2', new JsonZoonData('MkEdit2', {}), {
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

        const MkEdit3 = new MaskEdit('MkEdit3', new JsonZoonData('MkEdit3', {}), {
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

        const MkEdit4 = new MaskEdit('MkEdit4', new JsonZoonData('MkEdit4', {}), {
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

        const MkEdit5 = new MaskEdit('MkEdit5', new JsonZoonData('MkEdit5', {}), {
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
        })

        const MkEdit6 = new MaskEdit('MkEdit6', new JsonZoonData('MkEdit6', {}), {
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
        })

        const MkEdit7 = new MaskEdit('MkEdit7', new JsonZoonData('MkEdit7', {}), {
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
        })

        const MkEdit8 = new MaskEdit('MkEdit8', new JsonZoonData('MkEdit8', {}), {
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
        })

        const Picture1 = new Picture('Picture1', new JsonZoonData('Picture1', {}), {
            isShow : true,
            isEnable : true
        }).on({
            OnClick: function() {
                debugger;
                if (!MsgBox('저장하시겠습니까?', '알림', false)) {
                    return false;
                }

                SetValue('저장여부', '');

                if (GetValue('화면선택') == '2500') {
                    RunQuery('저장_조세', {
                        'YYYY' : GetValue('년도'),
                        'SEQ' : GetValue('일련번호'),
                        'NTAX_LEVY_DATE' : GetValue('Edit_국세_부과일자'),
                        'NTAX_ARRE_AMT' : GetValue('Edit_국세_체납금액'),
                        'NTAX_ADD_AMT' : GetValue('Edit_국세_가산금'),
                        'NTAX_LEVY_CAUSE' : GetValue('Edit_국세_부과원인'),
                        'NTAX_ISSUE_DATE' : GetValue('Edit_국세완납_부과일자'),
                        'LRATE_LEVY_DATE' : GetValue('Edit_지방세_부과일자'),
                        'LRATE_ARRE_AMT' : GetValue('Edit_지방세_체납금액'),
                        'LRATE_ADD_AMT' : GetValue('Edit_지방세_가산금'),
                        'LRATE_LEVY_CAUSE' : GetValue('Edit_지방세_부과원인'),
                        'LRATE_ISSU_DATE' : GetValue('Edit_지방세완납_부과일자'),
                    }, 'POST');

                    SetValue('저장여부', 'OK');
                }

                if (GetValue('화면선택') == '3000') {
                    SetValue('내용', GetValue('Edit1'));

                    CallProcedure('SPESU_CLOB_MERGE', {
                        'IN_MENT_ITEMS': GetValue('내용'),
                        'IN_REPO_DIV': GetValue('보고서구분'),
                        'IN_SEQ': GetValue('일련번호'),
                        'IN_YYYY': GetValue('년도'),
                    }, (res) => {
                        SetValue('저장여부', Trim(res.result.O_RESULTMSG));
                    });
                }

                if (GetValue('화면선택') == '9999') {
                    GetComponent('RichEditor1').GetRichEditorRTF('내용');

                    CallProcedure('SPESU_CLOB_MERGE', {
                        'IN_MENT_ITEMS': GetValue('내용'),
                        'IN_REPO_DIV': GetValue('보고서구분'),
                        'IN_SEQ': GetValue('일련번호'),
                        'IN_YYYY': GetValue('년도'),
                    }, (res) => {
                        SetValue('저장여부', Trim(res.result.O_RESULTMSG));
                    });
                }

                if (GetValue('저장여부') != 'OK') {
                    MsgBox('저장에 실패하였씁니다.', '알림', true);
                    return false;
                } else {
                    MsgBox('정상적으로 저장되었습니다.', '알림', true);
                }
            }
        });

    }
}