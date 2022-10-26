const pageZoon = {

    OnInitialize: function () {
        const Combo_링크사이트 = new Combo('Combo_링크사이트', new JsonZoonData('Q_링크사이트', {}), {
            isShow: true,
            isEnable: true,
            format : {
                text : 'CD_DESC',
                value : 'ATTR_01',
                index : '',
            }
        }).on('OnChange', function () {
            Hyperlink(GetString('Combo_링크사이트'), '링크사이트');
        })

        const Combo_사업부문 = new Combo('Combo_사업부문', new JsonZoonData('Q_사업부문', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: '사업부문명',
                value: '사업부문',
                index: '',
            }
        });
        const Combo_집합건물종류 = new Combo('Combo_집합건물종류', new JsonZoonData('Q_코드_담보종류', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {


            if (GetValue('Combo_집합건물종류') == "101") {
                SetValue('MkEdit_시가_최저_단가', Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000, 0))
                SetValue('MkEdit_시가_최저_평당단가', Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000, 0))
                SetValue('MkEdit_시가_최고_단가', Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000, 0))
                SetValue('MkEdit_시가_최고_평당단가', Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000, 0))
                SetValue('MkEdit_등기부등본상의시세_단가', Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000, 0))
                SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000, 0))
                SetValue('MkEdit_기준시가_단가', Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000, 0))
                SetValue('MkEdit_기준시가_평당단가', Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000, 0))
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
                SetValue('MkEdit_시가_최고_단가', GetValue('MkEdit_시가_최고_단가') * 1000)
                SetValue('MkEdit_시가_최고_평당단가', GetValue('MkEdit_시가_최고_평당단가') * 1000)
                SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가') * 1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가') * 1000)
                SetValue('MkEdit_기준시가_단가', GetValue('MkEdit_기준시가_단가') * 1000)
                SetValue('MkEdit_기준시가_평당단가', GetValue('MkEdit_기준시가_평당단가') * 1000)
            } else {
                SetValue('MkEdit_시가_최저_단가', Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000, 0))
                SetValue('MkEdit_시가_최저_평당단가', Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000, 0))
                SetValue('MkEdit_시가_최고_단가', Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000, 0))
                SetValue('MkEdit_시가_최고_평당단가', Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000, 0))
                SetValue('MkEdit_등기부등본상의시세_단가', Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000, 0))
                SetValue('MkEdit_등기부등본상의시세_평당단가', Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000, 0))
                SetValue('MkEdit_기준시가_단가', Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000, 0))
                SetValue('MkEdit_기준시가_평당단가', Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000, 0))
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
                SetValue('MkEdit_시가_최고_단가', GetValue('MkEdit_시가_최고_단가') * 1000)
                SetValue('MkEdit_시가_최고_평당단가', GetValue('MkEdit_시가_최고_평당단가') * 1000)
                SetValue('MkEdit_등기부등본상의시세_단가', GetValue('MkEdit_등기부등본상의시세_단가') * 1000)
                SetValue('MkEdit_등기부등본상의시세_평당단가', GetValue('MkEdit_등기부등본상의시세_평당단가') * 1000)
                SetValue('MkEdit_기준시가_단가', GetValue('MkEdit_기준시가_단가') * 1000)
                SetValue('MkEdit_기준시가_평당단가', GetValue('MkEdit_기준시가_평당단가') * 1000)
            }

        })

        const Command_배당처리 = new Picture('Command_배당처리', new JsonZoonData('Command_배당처리', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            MC_저장_배당();


            if (GetValue('Edit_배당표_총예상낙찰가') == 0) {

                if (!MsgBox("총 예상낙찰가가 ZEROS(0)인 자료는 [배당처리]를 할 수 없습니다.", '[자료확인]', true)) {
                    return false;
                }

            }


            if (isNotEmpty((GetValue('저장_Error_Message')))) {
                return false;
            }


            if (GetValue('02_배당표수정여부') == 'Y') {

                if (!MsgBox("배당처리 후 자료가 수정되어 있습니다" + Hex(10) + "다시 배당처리를 하면 수정된 자료는 무시됩니다." + Hex(10) + "배당처리할까요?", '[알림]', true)) {
                    return false;
                }

            }


            if (GetValue('02_배당표수정여부') != 'Y') {

                if (!MsgBox('배당처리하시겠습니까?', '', false)) {
                    return false;
                }

            }


            RunQuery('Q_배당표_배당금_배당건수', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_배당표_배당금_배당건수').GetRow(0, [
                {key: '배당표_배당금계산_RowCount', value: 'CNT'},
            ]);


            if (GetValue('배당표_배당금계산_RowCount') <= 0) {

                if (!MsgBox('처리할 배당이 없습니다.', '', true)) {
                    return false;
                }

            }

            if (GetValue('배당표_배당금계산_RowCount') > 1) {
                CallProcedure('SPESU_MULTI_COMPUTE', {
                    'IN_SEQ': GetValue('감정순번'),
                    'IN_YYYY': GetValue('년도'),
                    'OUT_YN': '',
                }, (res) => {
                    SetValue('저장_Error_Message', Trim(res.result.OUT_YN));
                });

            }

            if (GetValue('배당표_배당금계산_RowCount') <= 1) {
                CallProcedure('SPESU_MULTI_COMPUTE', {
                    'IN_SEQ': GetValue('감정순번'),
                    'IN_YYYY': GetValue('년도'),
                    'OUT_YN': '',
                }, (res) => {
                    SetValue('저장_Error_Message', Trim(res.result.OUT_YN));
                });

            }


            if (GetValue('저장_Error_Message') != 'Y') {

                if (!MsgBox("배당처리가 정상적으로 진행되지 않았습니다." + Hex(10) + "권리자의 내용을 초기화합니다." + Hex(10) + "권리관계를 다시 입력하십시요.", '[배당처리 확인 필요]', true)) {
                    return false;
                }

            }


            SetValue('02_배당표수정여부', 'N');


            RunQuery('저장_담보마스타_담보여력등', {
                '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            }, 'POST');


            if (!MsgBox('정상적으로 처리되었습니다.', '정상적으로 처리되었습니다.', true)) {
                return false;
            }


            if (true) {
                return false;
            }


        })

        const Command_배당처리시_자료CLEAR = new Command('Command_배당처리시_자료CLEAR', new JsonZoonData('Command_배당처리시_자료CLEAR', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {
            CallProcedure('SPESU_RIGT_PERSON_CLEAR_00', {
                'I_YYYY': GetValue('년도'),
                'I_SEQ': GetValue('감정순번')
            }, (result) => {
            });


            SetValue('02_배당표수정여부', "");


            RunQuery('저장_담보마스타_담보여력등', {
                '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            }, 'POST');


            RunQuery('Q_배당표_배당금_계산M', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            RunQuery('Q_배당표_배당금_계산D', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            MC_배당표_배당금_RowChange();


            RunQuery('Q_배당표_배당금건물_계산M', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            RunQuery('Q_배당표_배당금건물_계산D', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            MC_배당표_배당금건물_RowChange();

        })

        const Command_저장 = new Picture('Command_저장', new JsonZoonData('Command_저장', {}), {
            isShow: (GetValue('isReadOnly') == 'N'),
            isEnable: true
        }).on('OnClick', function () {

            if (GetValue('is배당처리') != 'Y') {

                if (!MsgBox('저장하시겠습니까?', '알림', false)) {
                    return false;
                }

            }


            if (isEmpty(GetValue('감정순번'))) {
                MC_저장_Key만들기();
            }


            MC_저장_키설정();


            MC_저장_ValidationCheck();


            if (isNotEmpty(GetValue('저장_Error_Message'))) {
                MsgBox(GetValue('저장_Error_Message'), '', true);
                return;
            }


            GetComponent('TabControl1').SetCurSel(GetNumber('탭_Idx'));

            if (GetValue('Edit_Doc_Key') == "") {

                RunQuery('Q_영업감정요청자료', {
                    '전체선택여부': GetValue('전체선택여부')
                }, 'GET');


                GetComponent('SubForm_감정요청자료_영업').ShowSubForm(() => {
                });

            }

            MC_저장_쿼리호출();


            RunQuery('저장_배당금_권리자_CLEAR', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'POST');


            RunQuery('Q_담보마스타', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_담보마스타').GetRow(0, [
                {key: '02_배당표수정여부', value: 'SHARE_YN'},
            ]);


            RunQuery('저장_담보마스타_담보여력등', {
                '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            }, 'POST');


            RunButton('Command_응찰_91_저장');


            if (GetValue('is배당처리') != 'Y') {

                if (!MsgBox('정상적으로 저장되었습니다', '알림', true)) {
                    return false;
                }

            }


            GetComponent('TabControl1').EnableTab(10, 1);


            GetComponent('TabControl1').EnableTab(11, 1);


            MC_공통보고서_조회();


            SetValue('is배당처리', "")


            if (true) {
                return false;
            }


        })

        const Edit_Doc_Key = new Edit('Edit_Doc_Key', new JsonZoonData('Edit_Doc_Key', {}), {
            isShow: false,
            isEnable: true
        })
        const Edit_Doc_Name = new Edit('Edit_Doc_Name', new JsonZoonData('Edit_Doc_Name', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_감정순번 = new Edit('Edit_감정순번', new JsonZoonData('Edit_감정순번', {}), {
            isShow: false,
            isEnable: true
        })
        const Edit_감정자 = new Edit('Edit_감정자', new JsonZoonData('Edit_감정자', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_감정자사번 = new Edit('Edit_감정자사번', new JsonZoonData('Edit_감정자사번', {}), {
            isShow: false,
            isEnable: true
        })
        const Edit_년도 = new Edit('Edit_년도', new JsonZoonData('Edit_년도', {}), {
            isShow: false,
            isEnable: true
        })
        const Label_ReadOnly = new Label('Label_ReadOnly', new JsonZoonData('Label_ReadOnly', {}), {
            isShow: (GetValue('_관리부서') == ""),
            isEnable: false
        })
        const MkEdit_감정일 = new MaskEdit('MkEdit_감정일', new JsonZoonData('MkEdit_감정일', {}), {
            isShow: true,
            isEnable: false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        }).on('OnLostFocus', function () {
            SetValue('MkEdit_건축년도_경과', StrToNum(Left(GetString('MkEdit_감정일'),4)) - StrToNum(Left(GetString('MkEdit_건축일자'),4)));
        })
        SetValue('MkEdit_감정일', Now());

        const Picture6 = new Picture('Picture6', new JsonZoonData('Picture6', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            RunQuery('Q_영업감정요청자료', {
                '전체선택여부': GetValue('전체선택여부')
            }, 'GET');


            GetComponent('SubForm_감정요청자료_영업').ShowSubForm(() => {
            });

        })

        const Picture60 = new Picture('Picture60', new JsonZoonData('Picture60', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {
            // showModalDialog('None');
        })

        const Picture61 = new Picture('Picture61', new JsonZoonData('Picture61', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {
            // Navigate('None')
        })

        const Picture84 = new Picture('Picture84', new JsonZoonData('Picture84', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            RunQuery('Q_탁상감정진행상황', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_탁상감정진행상황').GetRow(0, [
                {key: 'i', value: 'STAT'},
            ]);


            if (GetValue('i') == 1) {

                if (!MsgBox("완료된 탁상감정 내용이 존재합니다." + Hex(10) + "요청하실 경우 기존 자료는 삭제됩니다." + Hex(10) + "탁상감정을 요청하시겠습니까?", '', true)) {
                    return false;
                }

            }


            if (isEmpty(GetValue('i'))) {

                if (!MsgBox("탁상감정을 의뢰하시겠습니까?" + Hex(10) + "탁상감정된 내용은 [탁상감정현황]에서 확인하실 수 있습니다.", '', true)) {
                    return false;
                }

            }


            RunQuery('Q_담당자메일조회', {
                '_사원번호': GetValue('_사원번호')
            }, 'GET');


            GetZoonData('Q_담당자메일조회').GetRow(0, [
                {key: '탁상감정_보낸사람', value: 'EMAIL'},

                {key: '탁상감정_성명', value: 'NAME'},

                {key: '탁상감정_전화번호', value: 'PHONE'},
            ]);


            RunQuery('Q_탁상감정파일명', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_탁상감정파일명').GetRow(0, [
                {key: '탁상감정_파일명', value: 'FILE_NAME'},
            ]);


            RunQuery('Q_탁상감정EMail주소조회', {}, 'GET');


            GetZoonData('Q_탁상감정EMail주소조회').GetRow(0, [
                {key: '탁상감정_받는사람', value: 'ATTR_01'},
            ]);


            // // 탁상감정 제목
            //     SetValue('탁상감정_제목', "탁상감정의뢰 " + GetValue('탁상감정_파일명'))
            //
            //     // 탁상감정 본문
            //     SetValue('탁상감정_본문', "안녕하십니까?
            //     < br > "+GetValue('탁상감정_파일명')+"
            //         본건의
            //         탁상감정을
            //         의뢰합니다.
            //         <br><a href==
            //                http://203.234.236.9:8080/jsp/es00/es00_w03.jsp?yyyy=="+GetValue('년도')+"&seq=="+GetValue('감정순번')+"&sec_code=="+GetValue('Combo_집합건물종류')+"&conExt==Y target==_blank>감정내용보기</a>
            //         <br> 하이트맥주 "+GetValue('탁상감정_성명'))


            if (GetValue('i') == 2) {

                if (!MsgBox("진행 중인 탁상감정이 있습니다." + Hex(10) + "재전송하시겠습니까?", '', true)) {
                    return false;
                }

            }


            SetValue('탁상감정_요청일자', DateToStr(Now()))


            RunQuery('저장_탁상감정', {
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'REQ_DATE': GetValue('탁상감정_요청일자')
            }, 'POST');

            // SendMail 탁상감정_제목

            if (!MsgBox('정상적으로 발송되었습니다.', '정상적으로 발송되었습니다.', true)) {
                return false;
            }
        })

        const Picture88 = new Picture('Picture88', new JsonZoonData('Picture88', {}), {
            isShow: (GetValue('응찰_입력표활성여부') == 'Y'),
            isEnable: true
        }).on('OnClick', function () {

            Navigate('None',
                {}, 'left=0,top=0,width=860,height=700');

        })

        const Picture90_IT = new Picture('Picture90_IT', new JsonZoonData('Picture90_IT', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            RunButton('Command_저장');


            if (true) {
                return false;
            }


        })

        const Picture91_IT = new Picture('Picture91_IT', new JsonZoonData('Picture91_IT', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            RunButton('Command_배당처리');

        })

        const Picture92 = new Picture('Picture92', new JsonZoonData('Picture92', {}), {
            isShow: (GetValue('01_배당자료수정가능여부') == 'Y'),
            isEnable: true
        }).on('OnClick', function () {

            // showModalDialog('None', GetValue('None'), '');

        })

        const Picture93 = new Picture('Picture93', new JsonZoonData('Picture93', {}), {
            isShow: (GetValue('_사원번호') == 106790),
            isEnable: true
        }).on('OnClick', function () {

            RunButton('Picture92');

        })

        const Picture_전감정사항비교표 = new Picture('Picture_전감정사항비교표', new JsonZoonData('Picture_전감정사항비교표', {}), {
            isShow: (GetValue('버튼_전감정사항비교표') == 'Y'),
            isEnable: true
        }).on('OnClick', function () {

            Navigate('None',
                {}, 'left=0,top=0,width=860,height=700');

        })

        const SubForm1 = new SubForm('SubForm1', new JsonZoonData('SubForm1', {}), {
            isShow: false,
            isEnable: true
        })
        const Command_버튼_활성화여부 = new Command('Command_버튼_활성화여부', new JsonZoonData('Command_버튼_활성화여부', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {


            if (isEmpty(GetValue('감정순번'))) {
                SetValue('버튼_전감정사항비교표', "N")
            } else if (Mid(GetValue('감정순번'), 4, 2) == "00") {
                SetValue('버튼_전감정사항비교표', "N")
            } else {
                SetValue('버튼_전감정사항비교표', "Y")
            }

        })

        const 버튼_전감정사항비교표 = new Edit('버튼_전감정사항비교표', new JsonZoonData('버튼_전감정사항비교표', {}), {
            isShow: false,
            isEnable: true
        })
        const SubForm_감정요청자료_영업_URL = '/view/es01/w03/appraisal';
        const SubForm_감정요청자료_영업 = new SubForm('SubForm_감정요청자료_영업', new JsonZoonData('SubForm_감정요청자료_영업', {}),
            SubForm_감정요청자료_영업_URL, { isShow: true, isEnable: true });

        const Check_전체선택 = new Check('Check_전체선택', new JsonZoonData('Check_전체선택', { value: 'A' }), {
            isShow: true,
            isEnable: true
        }).on('click', function () {

            SetValue('전체선택여부', GetValue('Check_전체선택'))


            RunQuery('Q_영업감정요청자료', {
                '전체선택여부': GetValue('전체선택여부')
            }, 'GET');

        })

        const DBGrid_감정요청자료_영업 = new DBGrid('DBGrid_감정요청자료_영업', new JsonZoonData('Q_영업감정요청자료', {}), {
            isShow: true,
            isEnable: true
        }).on('dblclick', function () {
            GetComponent('DBGrid_감정요청자료_영업').GetRow(-1, [
                {key: 'Edit_Doc_Key', value: 'DOC_KEY'},

                {key: 'Edit_Doc_Name', value: 'DOC_NAME'},
            ]);
            GetComponent('SubForm_감정요청자료_영업').HideSubForm();

        })

        const Label76 = new Label('Label76', new JsonZoonData('Label76', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture66 = new Picture('Picture66', new JsonZoonData('Picture66', {}), {
            isShow: true,
            isEnable: true
        }).on('click', function () {

            GetComponent('DBGrid_감정요청자료_영업').GetRow(-1, [
                {key: 'Edit_Doc_Key', value: 'DOC_KEY'},

                {key: 'Edit_Doc_Name', value: 'DOC_NAME'},
            ]);


            GetComponent('SubForm_감정요청자료_영업').HideSubForm();

        })

        const Picture67 = new Picture('Picture67', new JsonZoonData('Picture67', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture68 = new Picture('Picture68', new JsonZoonData('Picture68', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture69 = new Picture('Picture69', new JsonZoonData('Picture69', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture70 = new Picture('Picture70', new JsonZoonData('Picture70', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture71 = new Picture('Picture71', new JsonZoonData('Picture71', {}), {
            isShow: true,
            isEnable: true
        })

        let SubForm_거래처조회_URL = '/view/es01/w03/account';
        const SubForm_거래처조회 = new SubForm('SubForm_거래처조회', new JsonZoonData('SubForm_거래처조회', {}),
            SubForm_거래처조회_URL, { isShow: true, isEnable: true});

        const Command_선택 = new Picture('Command_선택', new JsonZoonData('Command_선택', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_거래처').GetRow(-1, [
                {key: '팝업_거래처명', value: 'SANGHO'},

                {key: '팝업_거래처코드', value: 'GEO_CODE'},

                {key: '팝업_대표자', value: 'DAEPYO_NAME'},
            ]);


            SetValue('Edit_거래처코드', GetValue('팝업_거래처코드'))
            SetValue('Edit_거래처', GetValue('팝업_거래처명'))
            SetValue('Edit_대표자', GetValue('팝업_대표자'))


            GetComponent('SubForm_거래처조회').HideSubForm();

        })

        const Command_조회 = new Picture('Command_조회', new JsonZoonData('Command_조회', {}), {
            isShow: true,
            isEnable: true
        }).on('click', function () {

            SetValue('거래처명', GetValue('Edit_거래처명'));


            RunQuery('Q_거래처목록', {
                '거래처명': GetValue('거래처명')
            }, 'GET');

        })

        const DBGrid_거래처 = new DBGrid('DBGrid_거래처', new JsonZoonData('Q_거래처목록', {}), {
            isShow: true,
            isEnable: true
        }).on('dblclick', function () {

            GetComponent('DBGrid_거래처').GetRow(-1, [
                {key: '팝업_거래처명', value: 'SANGHO'},

                {key: '팝업_거래처코드', value: 'GEO_CODE'},

                {key: '팝업_대표자', value: 'DAEPYO_NAME'},
            ]);


            SetValue('Edit_거래처코드', GetValue('팝업_거래처코드'));
            SetValue('Edit_거래처', GetValue('팝업_거래처명'));
            SetValue('Edit_대표자', GetValue('팝업_대표자'));


            GetComponent('SubForm_거래처조회').HideSubForm();

        })

        const Edit_거래처명 = new Edit('Edit_거래처명', new JsonZoonData('Edit_거래처명', {}), {
            isShow: true,
            isEnable: true
        }).on('keyup', function (e) {
            if (e.keyCode == 13) {
                RunButton('Command_조회');
            }
        })

        const Label22 = new Label('Label22', new JsonZoonData('Label22', {}), {
            isShow: true,
            isEnable: true
        })
        const Label23 = new Label('Label23', new JsonZoonData('Label23', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture10 = new Picture('Picture10', new JsonZoonData('Picture10', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture11 = new Picture('Picture11', new JsonZoonData('Picture11', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture14 = new Picture('Picture14', new JsonZoonData('Picture14', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture5 = new Picture('Picture5', new JsonZoonData('Picture5', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture8 = new Picture('Picture8', new JsonZoonData('Picture8', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture9 = new Picture('Picture9', new JsonZoonData('Picture9', {}), {
            isShow: true,
            isEnable: false
        })
        const Table5 = new Edit('Table5', new JsonZoonData('Q_가임대보증금적용지역', {}), {
            isShow: true,
            isEnable: true
        })
        const SubForm_주소조회 = new KaKaoSubForm('SubForm_주소조회', new JsonZoonData('SubForm_주소조회', {}), {
            oncomplete: function(data) {
                SetValue('팝업_전체주소', data.address);

                if (GetValue('주소구분') == '1') {
                    SetValue('Edit_소재지', GetValue('팝업_전체주소'))
                }

                if (GetValue('주소구분') == '2') {
                    GetComponent('DBGrid_토지의표시').SetRow(-1, [
                        {key: 'MIN_BOUND', value: GetValue('팝업_전체주소')}
                    ]);
                }

                if (GetValue('주소구분') == '3') {
                    GetComponent('DBGrid_표준지공시지가').SetRow(-1, [
                        {key: 'JUSO1', value: GetValue('팝업_전체주소')}
                    ]);
                }

                if (GetValue('주소구분') == '4') {
                    GetComponent('DBGrid_비준가격_산정사례').SetRow(-1, [
                        {key: 'JUSO1', value: GetValue('팝업_전체주소')}
                    ]);
                }

                GetComponent('SubForm_주소조회').HideSubForm();
            }
        });

        const Label26 = new Label('Label26', new JsonZoonData('Label26', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture16 = new Picture('Picture16', new JsonZoonData('Picture16', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture17 = new Picture('Picture17', new JsonZoonData('Picture17', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture18 = new Picture('Picture18', new JsonZoonData('Picture18', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture19 = new Picture('Picture19', new JsonZoonData('Picture19', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture20 = new Picture('Picture20', new JsonZoonData('Picture20', {}), {
            isShow: true,
            isEnable: true
        })
        const Tab_주소조회 = new Check('Tab_주소조회', new JsonZoonData('Tab_주소조회', {}), {
            isShow: true,
            isEnable: true
        })
        const Command_조회1 = new Picture('Command_조회1', new JsonZoonData('Command_조회1', {}), {
            isShow: true,
            isEnable: true
        }).on('click', function () {

            SetValue('읍면동', GetValue('Edit_읍면동'));


            RunQuery('Q_주소목록', {
                '읍면동': GetValue('읍면동')
            }, 'GET');

        })

        const Command_선택1 = new Picture('Command_선택1', new JsonZoonData('Command_선택1', {}), {
            isShow: true,
            isEnable: true
        }).on('click', function () {

            MC_주소반환();

        })

        const Table6 = new Edit('Table6', new JsonZoonData('Table6', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_읍면동 = new Edit('Edit_읍면동', new JsonZoonData('Edit_읍면동', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEnterKey', function () {

            RunButton('Command_조회1');

        })

        const Label25 = new Label('Label25', new JsonZoonData('Label25', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture12 = new Picture('Picture12', new JsonZoonData('Picture12', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_주소 = new DBGrid('DBGrid_주소', new JsonZoonData('Q_주소목록', {}),{
            isShow: true,
            isEnable: true
        }).on('OnDblClick', function () {

            MC_주소반환();

        })
        const Table49 = new Edit('Table49', new JsonZoonData('Q_가임대보증금적용지역', {}), {
            isShow: true,
            isEnable: true
        })
        const Command_도로주소_조회 = new Picture('Command_도로주소_조회', new JsonZoonData('Command_도로주소_조회', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            if (StrLength(GetValue('Edit_도로주소_도로명')) <= 2) {
                SetValue('TEMP_MSG', '도로명을 2자 이상 입력해 주세요.')
            } else {
                SetValue('TEMP_MSG', '')
            }


            if (isEmpty(GetValue('TEMP_MSG'))) {

                if (!MsgBox(GetValue('TEMP_MSG'), '확인', true)) {
                    return false;
                }

            }


            RunQuery('Q_도로명주소목록', {
                'CITY': GetValue('Combo_도로주소_시도'),
                'CITYGU': GetValue('Combo_도로주소_시군구'),
                'ROAD_NM': GetValue('Edit_도로주소_도로명')
            }, 'GET');

        })

        const Command_도로주소_선택 = new Picture('Command_도로주소_선택', new JsonZoonData('Command_도로주소_선택', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            MC_도로주소반환();

        })

        const Picture97 = new Picture('Picture97', new JsonZoonData('Picture97', {}), {
            isShow: true,
            isEnable: true
        })
        const Label94 = new Label('Label94', new JsonZoonData('Label94', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_도로주소_목록 = new DBGrid('DBGrid_도로주소_목록', new JsonZoonData('Q_도로명주소목록', {}), {
            isShow: true,
            isEnable: true
        }).on('OnDblClick', function () {

            MC_도로주소반환();

        })

        const Edit_도로주소_도로명 = new Edit('Edit_도로주소_도로명', new JsonZoonData('Edit_도로주소_도로명', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEnterKey', function () {

            RunButton('Command_도로주소_조회');

        })

        const Label95 = new Label('Label95', new JsonZoonData('Label95', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture98 = new Picture('Picture98', new JsonZoonData('Picture98', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_도로주소_시도 = new Combo('Combo_도로주소_시도', new JsonZoonData('Q_도로명주소_시도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            RunQuery('Q_도로명주소_시군구', {
                'CITY': GetValue('Combo_도로주소_시도')
            }, 'GET');


            GetComponent('Combo_도로주소_시군구').SetCurSel(0.0);

        })

        const Label96 = new Label('Label96', new JsonZoonData('Label96', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture99 = new Picture('Picture99', new JsonZoonData('Picture99', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_도로주소_시군구 = new Combo('Combo_도로주소_시군구', new JsonZoonData('Q_도로명주소_시군구', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        })
        const Label97 = new Label('Label97', new JsonZoonData('Label97', {}), {
            isShow: true,
            isEnable: true
        })
        const TabControl1 = new Tab('TabControl1', new JsonZoonData('TabControl1', {}), {
            isShow: true,
            isEnable: true
        })
        const 낙찰가율보정표 = new Edit('낙찰가율보정표', new JsonZoonData('낙찰가율보정표', {}), {
            isShow: true,
            isEnable: true
        })
        const Table9 = new Edit('Table9', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table31 = new Edit('Table31', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table11 = new Edit('Table11', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table12 = new Edit('Table12', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table14 = new Edit('Table14', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table10 = new Edit('Table10', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table16 = new Edit('Table16', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table17 = new Edit('Table17', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table18 = new Edit('Table18', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_보정표_당해지역낙찰가율 = new MaskEdit('Edit_보정표_당해지역낙찰가율', new JsonZoonData('Edit_보정표_당해지역낙찰가율', {}), {
            isShow: true,
            isEnable: true,
            mask: ';3;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_유사부동산낙찰가율 = new MaskEdit('Edit_보정표_유사부동산낙찰가율', new JsonZoonData('Edit_보정표_유사부동산낙찰가율', {}), {
            isShow: true,
            isEnable: true,
            mask: ';3;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_법정지상권성립사유 = new Edit('Edit_보정표_법정지상권성립사유', new JsonZoonData('Edit_보정표_법정지상권성립사유', {}), {
            isShow: true,
            isEnable: true
        })
        const Table19 = new Edit('Table19', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_보정표_단독주택_접한도로폭_적용률 = new MaskEdit('Edit_보정표_단독주택_접한도로폭_적용률', new
        JsonZoonData('Edit_보정표_단독주택_접한도로폭_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_단독주택_대지의면적_적용률 = new MaskEdit('Edit_보정표_단독주택_대지의면적_적용률', new
        JsonZoonData('Edit_보정표_단독주택_대지의면적_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_단독주택_경과년도_적용률 = new MaskEdit('Edit_보정표_단독주택_경과년도_적용률', new
        JsonZoonData('Edit_보정표_단독주택_경과년도_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_상업용_접한도로폭_적용률 = new MaskEdit('Edit_보정표_상업용_접한도로폭_적용률', new
        JsonZoonData('Edit_보정표_상업용_접한도로폭_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_상업용_토지의형상_적용률 = new MaskEdit('Edit_보정표_상업용_토지의형상_적용률', new
        JsonZoonData('Edit_보정표_상업용_토지의형상_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_상업용_주변상권_적용률 = new MaskEdit('Edit_보정표_상업용_주변상권_적용률', new JsonZoonData('Edit_보정표_상업용_주변상권_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_상업용_경과년도_적용률 = new MaskEdit('Edit_보정표_상업용_경과년도_적용률', new JsonZoonData('Edit_보정표_상업용_경과년도_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_주거용_접한도로의폭_적용률 = new MaskEdit('Edit_보정표_주거용_접한도로의폭_적용률', new
        JsonZoonData('Edit_보정표_주거용_접한도로의폭_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_주거용_토지의면적_적용률 = new MaskEdit('Edit_보정표_주거용_토지의면적_적용률', new
        JsonZoonData('Edit_보정표_주거용_토지의면적_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_주거용_입지조건_적용률 = new MaskEdit('Edit_보정표_주거용_입지조건_적용률', new JsonZoonData('Edit_보정표_주거용_입지조건_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_주거용_경과년도_적용률 = new MaskEdit('Edit_보정표_주거용_경과년도_적용률', new JsonZoonData('Edit_보정표_주거용_경과년도_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_공유지분_적용률 = new MaskEdit('Edit_보정표_공유지분_적용률', new JsonZoonData('Edit_보정표_공유지분_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_적용할낙찰가율 = new MaskEdit('Edit_보정표_적용할낙찰가율', new JsonZoonData('Edit_보정표_적용할낙찰가율', {}), {
            isShow: true,
            isEnable: false,
            mask: ';3;#,###1.00',
            maskType: '숫자',
        })
        const Label29 = new Label('Label29', new JsonZoonData('Label29', {}), {
            isShow: true,
            isEnable: true
        })
        const Label30 = new Label('Label30', new JsonZoonData('Label30', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_보정표_기준낙찰가율 = new MaskEdit('Edit_보정표_기준낙찰가율', new JsonZoonData('Edit_보정표_기준낙찰가율', {}), {
            isShow: true,
            isEnable: false,
            mask: ';3;#,###1.00',
            maskType: '숫자',
        })
        const Label31 = new Label('Label31', new JsonZoonData('Label31', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_보정표_단독주택_접한도로폭 = new Combo('Combo_보정표_단독주택_접한도로폭', new JsonZoonData('Q_코드_접한도로의폭', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_접한도로의폭').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_단독주택_접한도로폭'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_접한도로의폭').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_단독주택_접한도로폭_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_단독주택_대지의면적 = new Combo('Combo_보정표_단독주택_대지의면적', new JsonZoonData('Q_코드_대지면적', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_대지면적').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_단독주택_대지의면적'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_대지면적').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_단독주택_대지의면적_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_법정지상권 = new Combo('Combo_보정표_법정지상권', new JsonZoonData('Q_코드_법정지상권', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_법정지상권').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_법적지상권'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_법정지상권').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_법정지상권_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_단독주택_경과년도 = new Combo('Combo_보정표_단독주택_경과년도', new JsonZoonData('Q_코드_경과년도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_경과년도').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_단독주택_경과년도'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_경과년도').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_단독주택_경과년도_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_예상낙찰가 = new MaskEdit('Edit_보정표_예상낙찰가', new JsonZoonData('Edit_보정표_예상낙찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label15 = new Label('Label15', new JsonZoonData('Label15', {}), {
            isShow: true,
            isEnable: true
        })
        const Label28 = new Label('Label28', new JsonZoonData('Label28', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_보정표_현재의주된 = new Combo('Combo_보정표_현재의주된', new JsonZoonData('Q_코드_이용현황', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            // GetZoonData('Q_점유자의형태').FindIndex('OR', (row) => {
            //
            //     if () {
            //         return true;
            //     }
            //
            //     return false;
            // });


            // GetZoonData('Q_점유자의형태').GetRow(0, []);


            SetValue('MkEdit_보정표_적용할낙찰가율', GetNumber('MkEdit_보정표_기준낙찰가율') * GetNumber('MkEdit_보정표_아파트단지규모_적용율') * GetNumber('MkEdit_보정표_전유부분면적_적용율') * GetNumber('MkEdit_보정표_전유부분위치_적용율') * GetNumber('MkEdit_보정표_건축물의경과년도_적용율') * GetNumber('MkEdit_보정표_점유자의권리형태'))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100)

        })

        const Combo_보정표_장래의이용 = new Combo('Combo_보정표_장래의이용', new JsonZoonData('Q_코드_이용현황', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            // GetZoonData('Q_점유자의형태').FindIndex('OR', (row) => {
            //
            //     if () {
            //         return true;
            //     }
            //
            //     return false;
            // });


            // GetZoonData('Q_점유자의형태').GetRow(0, []);


            SetValue('MkEdit_보정표_적용할낙찰가율', GetNumber('MkEdit_보정표_기준낙찰가율') * GetNumber('MkEdit_보정표_아파트단지규모_적용율') * GetValue('MkEdit_보정표_전유부분면적_적용율') * GetValue('MkEdit_보정표_전유부분위치_적용율') * GetValue('MkEdit_보정표_건축물의경과년도_적용율') * GetValue('MkEdit_보정표_점유자의권리형태'))
            SetValue('MkEdit_보정표_예상낙찰가', GetValue('MkEdit_보정표_최저입찰가') * GetValue('MkEdit_보정표_적용할낙찰가율') / 100)

        })

        const Combo_보정표_점유자형태 = new Combo('Combo_보정표_점유자형태', new JsonZoonData('Q_코드_점유자형태', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_점유자형태').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_점유자형태'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_점유자형태').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_점유자형태_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_상업용_접한도로폭 = new Combo('Combo_보정표_상업용_접한도로폭', new JsonZoonData('Q_코드_접한도로의폭', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_접한도로의폭').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_상업용_접한도로폭'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_접한도로의폭').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_상업용_접한도로폭_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_상업용_토지의형상 = new Combo('Combo_보정표_상업용_토지의형상', new JsonZoonData('Q_코드_토지의형상', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_토지의형상').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_상업용_토지의형상'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_토지의형상').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_상업용_토지의형상_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_상업용_주변상권 = new Combo('Combo_보정표_상업용_주변상권', new JsonZoonData('Q_코드_주변상권', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_주변상권').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_상업용_주변상권'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_주변상권').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_상업용_주변상권_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_상업용_경과년도 = new Combo('Combo_보정표_상업용_경과년도', new JsonZoonData('Q_코드_경과년도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_경과년도').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_상업용_경과년도'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_경과년도').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_상업용_경과년도_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_주거용_접한도로의폭 = new Combo('Combo_보정표_주거용_접한도로의폭', new JsonZoonData('Q_코드_접한도로의폭', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_접한도로의폭').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_주거용_접한도로의폭'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_접한도로의폭').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_주거용_접한도로의폭_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_주거용_토지의면적 = new Combo('Combo_보정표_주거용_토지의면적', new JsonZoonData('Q_코드_토지의면적', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_토지의면적').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_주거용_토지의면적'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_토지의면적').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_주거용_토지의면적_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_주거용_입지조건 = new Combo('Combo_보정표_주거용_입지조건', new JsonZoonData('Q_코드_담보물의입지조건', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_담보물의입지조건').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_주거용_입지조건'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_담보물의입지조건').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_주거용_입지조건_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_주거용_경과년도 = new Combo('Combo_보정표_주거용_경과년도', new JsonZoonData('Q_코드_경과년도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_경과년도').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_주거용_경과년도'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_경과년도').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_주거용_경과년도_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_공유지분 = new Combo('Combo_보정표_공유지분', new JsonZoonData('Q_코드_공유지분', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_공유지분').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_공유지분'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_공유지분').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_공유지분_적용률', value: 'ATTR_08'},
            ]);


            MC_보정표_예상낙찰가();

        })

        const Edit_보정표_법정지상권_적용률 = new MaskEdit('Edit_보정표_법정지상권_적용률', new JsonZoonData('Edit_보정표_법정지상권_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Combo_보정표_법정지상권_존속기간 = new Combo('Combo_보정표_법정지상권_존속기간', new JsonZoonData('Q_코드_법정지상권_존속기간', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_법정지상권').FindIndex('콤보_IDX', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_보정표_법정지상권'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_법정지상권').GetRow(GetValue('콤보_IDX'), [
                {key: 'Edit_보정표_법정지상권_적용률', value: 'ATTR_08'},
            ]);


            SetValue('MkEdit_보정표_적용할낙찰가율', GetValue('MkEdit_보정표_기준낙찰가율') * GetValue('MkEdit_보정표_아파트단지규모_적용율') * GetValue('MkEdit_보정표_전유부분면적_적용율') * GetValue('MkEdit_보정표_전유부분위치_적용율') * GetValue('MkEdit_보정표_건축물의경과년도_적용율') * GetValue('MkEdit_보정표_점유자의권리형태'))
            SetValue('MkEdit_보정표_예상낙찰가', GetValue('MkEdit_보정표_최저입찰가') * GetValue('MkEdit_보정표_적용할낙찰가율') / 100)

        })

        const Edit_보정표_점유자형태_적용률 = new MaskEdit('Edit_보정표_점유자형태_적용률', new JsonZoonData('Edit_보정표_점유자형태_적용률', {}), {
            isShow: true,
            isEnable: false,
            mask: '-;1;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_보정표_예상낙찰가();

        })

        const Label72 = new Label('Label72', new JsonZoonData('Label72', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_보정표_제1차예상최저입찰가 = new MaskEdit('Edit_보정표_제1차예상최저입찰가', new JsonZoonData('Edit_보정표_제1차예상최저입찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_보정표_평가가격 = new MaskEdit('Edit_보정표_평가가격', new JsonZoonData('Edit_보정표_평가가격', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label73 = new Label('Label73', new JsonZoonData('Label73', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_감정가액산출내역 = new DBGrid('DBGrid_감정가액산출내역', new JsonZoonData('Q_배당표_배당금_계산M', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {

            if (true) {
                return false;
            }



            // GetComponent('DBGrid_배당금_계산').GetCurColName('None');

        })
            .on('OnEditChanged', function() {

                if (true) {
                    return false;
                }



                MC_배당표_배당금_계산();


                // GetComponent('DBGrid_배당금_계산').GetRow(None, None);


                GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산_RowPosition', (row) => {

                    if ((row['CD_CODE'] == GetValue('배당표_배당금계산_권리의내용'))) {
                        return true;
                    }

                    return false;
                });


                GetZoonData('Q_코드_권리의내용').GetRow(GetValue('배당표_배당금계산_RowPosition'), [
                    { key: '배당표_배당금계산_배당순위', value: 'ATTR_08' },
                ]);


                // GetComponent('DBGrid_배당금_계산').SetRow("", [
                //     Non
                // ]);

            })
            .on('OnSelectChange', function() {

                GetComponent('DBGrid_배당금_계산M').GetRow(-1, [
                    { key: '배당표_배당금계산M_순번', value: 'LN_SEQ' },
                ]);


                GetComponent('DBGrid_배당금_계산D').GetRowCount('배당표_배당금계산_RowCount');

                if (GetValue('배당표_배당금계산_RowCount') > -1000) {

                    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산_RowCount'); SetValue('i', GetValue('i') + 1)) {
                        MC_토지배당금계산_SYNC();
                    }


                    GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();

                }


                GetComponent('DBGrid_배당금_계산M').GetCurSel('그리드_IDX');


                MC_그리드_인덱스_Sync();

            })

        const DBGrid_감정가액산출내역_건물 = new DBGrid('DBGrid_감정가액산출내역_건물', new JsonZoonData('Q_배당표_배당금건물_계산M', {}),{
            isShow : true,
            isEnable : true
        }).on('OnClick', function() {

            if (true) {
                return false;
            }



            // GetComponent('DBGrid_배당금_계산').GetCurColName('None');

        })
            .on('OnEditChanged', function() {

                if (true) {
                    return false;
                }



                MC_배당표_배당금_계산();


                // GetComponent('DBGrid_배당금_계산').GetRow(None, None);


                GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산_RowPosition', (row) => {

                    if ((row['CD_CODE'] == GetValue('배당표_배당금계산_권리의내용'))) {
                        return true;
                    }

                    return false;
                });


                GetZoonData('Q_코드_권리의내용').GetRow(GetValue('배당표_배당금계산_RowPosition'), [
                    { key: '배당표_배당금계산_배당순위', value: 'ATTR_08' },
                ]);


                GetComponent('DBGrid_배당금_계산').SetRow("", [
                    Non
                ]);

            })
            .on('OnSelectChange', function() {

                GetComponent('DBGrid_배당금건물_계산M').GetRow(-1, [
                    { key: '배당표_배당금계산건물M_순번', value: 'REGI_GU' },
                ]);


                GetComponent('DBGrid_배당금건물_계산D').GetRowCount('배당표_배당금계산건물_RowCount');

                if (GetValue('배당표_배당금계산건물_RowCount') > -1000) {

                    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산건물_RowCount'); SetValue('i', GetValue('i') + 1)) {
                        MC_건물배당금계산_SYNC();
                    }


                    GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();

                }


                if (true) {
                    return false;
                }



                GetComponent('DBGrid_배당금건물_계산M').GetCurSel('건물_그리드_IDX');

                MC_건물_그리드_인덱스_Sync();

            })

        const Group2 = new Group('Group2', new JsonZoonData('Group2', {}), {
            isShow: true,
            isEnable: true
        })
        const Table39 = new Edit('Table39', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_보정표_감정가격산출내역_평가액 = new MaskEdit('Edit_보정표_감정가격산출내역_평가액', new JsonZoonData('Edit_보정표_감정가격산출내역_평가액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_보정표_감정가격산출내역_예상낙찰가 = new MaskEdit('Edit_보정표_감정가격산출내역_예상낙찰가', new
        JsonZoonData('Edit_보정표_감정가격산출내역_예상낙찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Table40 = new Edit('Table40', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_보정표_감정가격산출내역_평가액_건물 = new MaskEdit('Edit_보정표_감정가격산출내역_평가액_건물', new
        JsonZoonData('Edit_보정표_감정가격산출내역_평가액_건물', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_보정표_감정가격산출내역_예상낙찰가_건물 = new MaskEdit('Edit_보정표_감정가격산출내역_예상낙찰가_건물', new
        JsonZoonData('Edit_보정표_감정가격산출내역_예상낙찰가_건물', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const 감정가액산출地Ⅰ = new Edit('감정가액산출地Ⅰ', new JsonZoonData('감정가액산출地Ⅰ', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_본건토지 = new DBGrid('DBGrid_본건토지', new JsonZoonData('Q_토지의표시', {}),{
            isShow : true,
            isEnable : true
        }).on('OnEditChanged', function() {

            MC_기준가격_참조값_본건();


            MC_기준가격_참조값_본건_일괄적용();


            MC_비준가격_참조값_본건();


            MC_비준가격_참조값_본건_일괄적용();

        })
            .on('OnEnterKey', function() {

                GetComponent('DBGrid_본건토지').NextTab();

            })
            .on('OnSelectChange', function() {

                GetComponent('DBGrid_본건토지').GetCurSel('그리드_IDX');


                MC_그리드_인덱스_Sync();

            })

        const DBGrid_표준지공시지가 = new DBGrid('DBGrid_표준지공시지가', new JsonZoonData('Q_표준지공시지가선정', {}),{
            isShow : true,
            isEnable : true
        }).on('OnButtonClick', function() {

            SetValue('주소구분', "3")


            GetComponent('SubForm_주소조회').ShowSubForm(() => {});

        })
            .on('OnEditChanged', function() {

                MC_Combo_표준지();


                MC_기준가격_참조값_표준지();

            })
            .on('OnEnterKey', function() {

                GetComponent('DBGrid_표준지공시지가').NextTab();

            })
            .on('OnSelectChange', function() {

                MC_Combo_표준지();


                MC_기준가격_참조값_표준지();

            })

        const Table7 = new Edit('Table7', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_본건인근지역_상업용_최저가_평 = new MaskEdit('Edit_본건인근지역_상업용_최저가_평', new JsonZoonData('Edit_본건인근지역_상업용_최저가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_상업용_최저가', GetValue('Edit_본건인근지역_상업용_최저가_평') * 0.3025)

        })

        const Edit_본건인근지역_상업용_최고가_평 = new MaskEdit('Edit_본건인근지역_상업용_최고가_평', new JsonZoonData('Edit_본건인근지역_상업용_최고가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_상업용_최고가', GetValue('Edit_본건인근지역_상업용_최고가_평') * 0.3025)

        })

        const Edit_본건인근지역_주거용_최저가_평 = new MaskEdit('Edit_본건인근지역_주거용_최저가_평', new JsonZoonData('Edit_본건인근지역_주거용_최저가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_주거용_최저가', GetValue('Edit_본건인근지역_주거용_최저가_평') * 0.3025)

        })

        const Edit_본건인근지역_주거용_최고가_평 = new MaskEdit('Edit_본건인근지역_주거용_최고가_평', new JsonZoonData('Edit_본건인근지역_주거용_최고가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_주거용_최고가', GetValue('Edit_본건인근지역_주거용_최고가_평') * 0.3025)

        })

        const Edit_본건인근지역_일반용_최저가_평 = new MaskEdit('Edit_본건인근지역_일반용_최저가_평', new JsonZoonData('Edit_본건인근지역_일반용_최저가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_일반용_최저가', GetValue('Edit_본건인근지역_일반용_최저가_평') * 0.3025)

        })

        const Edit_본건인근지역_일반용_최고가_평 = new MaskEdit('Edit_본건인근지역_일반용_최고가_평', new JsonZoonData('Edit_본건인근지역_일반용_최고가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_일반용_최고가', GetValue('Edit_본건인근지역_일반용_최고가_평') * 0.3025)

        })

        const Edit_본건인근지역_전_최저가_평 = new MaskEdit('Edit_본건인근지역_전_최저가_평', new JsonZoonData('Edit_본건인근지역_전_최저가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_전_최저가', GetValue('Edit_본건인근지역_전_최저가_평') * 0.3025)

        })

        const Edit_본건인근지역_전_최고가_평 = new MaskEdit('Edit_본건인근지역_전_최고가_평', new JsonZoonData('Edit_본건인근지역_전_최고가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_전_최고가', GetValue('Edit_본건인근지역_전_최고가_평') * 0.3025)

        })

        const Edit_본건인근지역_답_최저가_평 = new MaskEdit('Edit_본건인근지역_답_최저가_평', new JsonZoonData('Edit_본건인근지역_답_최저가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_답_최저가', GetValue('Edit_본건인근지역_답_최저가_평') * 0.3025)

        })

        const Edit_본건인근지역_답_최고가_평 = new MaskEdit('Edit_본건인근지역_답_최고가_평', new JsonZoonData('Edit_본건인근지역_답_최고가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_답_최고가', GetValue('Edit_본건인근지역_답_최고가_평') * 0.3025)

        })

        const Edit_본건인근지역_임야_최저가_평 = new Edit('Edit_본건인근지역_임야_최저가_평', new JsonZoonData('Edit_본건인근지역_임야_최저가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_임야_최저가', GetValue('Edit_본건인근지역_임야_최저가_평') * 0.3025)

        })

        const Edit_본건인근지역_임야_최고가_평 = new Edit('Edit_본건인근지역_임야_최고가_평', new JsonZoonData('Edit_본건인근지역_임야_최고가_평', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_임야_최고가', GetValue('Edit_본건인근지역_임야_최고가_평') * 0.3025)

        })

        const Label27 = new Label('Label27', new JsonZoonData('Label27', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture7 = new Picture('Picture7', new JsonZoonData('Picture7', {}), {
            isShow: true,
            isEnable: false
        })
        const Label4 = new Label('Label4', new JsonZoonData('Label4', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture24 = new Picture('Picture24', new JsonZoonData('Picture24', {}), {
            isShow: true,
            isEnable: false
        })
        const Label5 = new Label('Label5', new JsonZoonData('Label5', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture25 = new Picture('Picture25', new JsonZoonData('Picture25', {}), {
            isShow: true,
            isEnable: false
        })
        const Label9 = new Label('Label9', new JsonZoonData('Label9', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture28 = new Picture('Picture28', new JsonZoonData('Picture28', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture35 = new Picture('Picture35', new JsonZoonData('Picture35', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_비준가격_산정사례').GetRows("", [
                {key: '비준가격산정사례_사례순번_Arr', value: 'EX_NO'},
            ]);


            SetValue('비준가격산정사례_사례순번', Max('비준가격산정사례_사례순번_Arr') + 1)


            GetComponent('DBGrid_비준가격_산정사례').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'EX_NO': GetValue('비준가격산정사례_사례순번')
            });


            GetComponent('DBGrid_비준가격_산정사례').GetRowCount('비준가격산정사례_RowCount');


            SetValue('비준가격산정사례_RowCount', GetValue('비준가격산정사례_RowCount') - 1)


            GetComponent('DBGrid_비준가격_산정사례').SetCurSel(GetNumber('비준가격산정사례_RowCount'));


            GetComponent('DBGrid_비준가격_산정사례').SetEditFocus(GetNumber('비준가격산정사례_RowCount') - 1, 'b_size');

        })

        const Picture36 = new Picture('Picture36', new JsonZoonData('Picture36', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_비준가격_산정사례').GetCurSel('비준가격산정사례_RowPosition');


            GetComponent('DBGrid_비준가격_산정사례').DeleteRow(GetNumber('비준가격산정사례_RowPosition'));


            MC_Combo_사례번호();

        })

        const Picture23 = new Picture('Picture23', new JsonZoonData('Picture23', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_표준지공시지가').GetRows("", [
                {key: '표준지공시지가_표준지구분_Arr', value: 'S_G'},
            ]);


            SetValue('표준지공시지가_표준지구분', NumToStr(Max('표준지공시지가_표준지구분_Arr') + 1))


            GetComponent('DBGrid_표준지공시지가').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'COMBO_STAT': 0,
                'S_GU': GetValue('표준지공시지가_표준지구분')
            });


            GetComponent('DBGrid_표준지공시지가').GetRowCount('표준지공시지가_RowCount');


            SetValue('표준지공시지가_RowCount', GetValue('표준지공시지가_RowCount') - 1)


            GetComponent('DBGrid_표준지공시지가').SetCurSel(GetNumber('표준지공시지가_RowCount'));


            GetComponent('DBGrid_표준지공시지가').SetEditFocus(GetNumber('표준지공시지가_RowCount') - 1, 'b_size');

        })

        const Picture34 = new Picture('Picture34', new JsonZoonData('Picture34', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_표준지공시지가').GetCurSel('표준지공시지가_RowPosition');


            GetComponent('DBGrid_표준지공시지가').DeleteRow(GetNumber('표준지공시지가_RowPosition'));

        })

        const Edit_본건인근지역_상업용_최저가 = new MaskEdit('Edit_본건인근지역_상업용_최저가', new JsonZoonData('Edit_본건인근지역_상업용_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_상업용_최저가_평', GetValue('Edit_본건인근지역_상업용_최저가') * 3.3058)

        })

        const Edit_본건인근지역_상업용_최고가 = new MaskEdit('Edit_본건인근지역_상업용_최고가', new JsonZoonData('Edit_본건인근지역_상업용_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_상업용_최고가_평', GetValue('Edit_본건인근지역_상업용_최고가') * 3.3058)

        })

        const Edit_본건인근지역_주거용_최고가 = new MaskEdit('Edit_본건인근지역_주거용_최고가', new JsonZoonData('Edit_본건인근지역_주거용_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_주거용_최고가_평', GetValue('Edit_본건인근지역_주거용_최고가') * 3.3058)

        })

        const Edit_본건인근지역_주거용_최저가 = new MaskEdit('Edit_본건인근지역_주거용_최저가', new JsonZoonData('Edit_본건인근지역_주거용_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_주거용_최저가_평', GetValue('Edit_본건인근지역_주거용_최저가') * 3.3058)

        })

        const Edit_본건인근지역_일반용_최저가 = new MaskEdit('Edit_본건인근지역_일반용_최저가', new JsonZoonData('Edit_본건인근지역_일반용_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_일반용_최저가_평', GetValue('Edit_본건인근지역_일반용_최저가') * 3.3058)

        })

        const Edit_본건인근지역_일반용_최고가 = new MaskEdit('Edit_본건인근지역_일반용_최고가', new JsonZoonData('Edit_본건인근지역_일반용_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_일반용_최고가_평', GetValue('Edit_본건인근지역_일반용_최고가') * 3.3058)

        })

        const Edit_본건인근지역_전_최저가 = new MaskEdit('Edit_본건인근지역_전_최저가', new JsonZoonData('Edit_본건인근지역_전_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_전_최저가_평', GetValue('Edit_본건인근지역_전_최저가') * 3.3058)

        })

        const Edit_본건인근지역_전_최고가 = new MaskEdit('Edit_본건인근지역_전_최고가', new JsonZoonData('Edit_본건인근지역_전_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_전_최고가_평', GetValue('Edit_본건인근지역_전_최고가') * 3.3058)

        })

        const Edit_본건인근지역_답_최저가 = new MaskEdit('Edit_본건인근지역_답_최저가', new JsonZoonData('Edit_본건인근지역_답_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_답_최저가_평', GetValue('Edit_본건인근지역_답_최저가') * 3.3058)

        })

        const Edit_본건인근지역_답_최고가 = new MaskEdit('Edit_본건인근지역_답_최고가', new JsonZoonData('Edit_본건인근지역_답_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_답_최고가_평', GetValue('Edit_본건인근지역_답_최고가') * 3.3058)

        })

        const Edit_본건인근지역_임야_최저가 = new MaskEdit('Edit_본건인근지역_임야_최저가', new JsonZoonData('Edit_본건인근지역_임야_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_임야_최저가_평', GetValue('Edit_본건인근지역_임야_최저가') * 3.3058)

        })

        const Edit_본건인근지역_임야_최고가 = new MaskEdit('Edit_본건인근지역_임야_최고가', new JsonZoonData('Edit_본건인근지역_임야_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_본건인근지역_임야_최고가_평', GetValue('Edit_본건인근지역_임야_최고가') * 3.3058)

        })

        const DBGrid_비준가격_산정사례 = new DBGrid('DBGrid_비준가격_산정사례', new JsonZoonData('Q_비준가격산정', {}), {
            isShow: true,
            isEnable: true
        }).on('OnButtonClick', function () {

            SetValue('주소구분', "4")


            GetComponent('SubForm_주소조회').ShowSubForm(() => {
            });

        })
            .on('OnEditChanged', function () {

                GetComponent('DBGrid_비준가격_산정사례').GetRow(-1, [
                    {key: '비준가격_사례번호', value: 'EX_NO'},

                    {key: '비준가격_소재지', value: 'JUSO1'},

                    {key: '비준가격_조사금액', value: 'SURVEY_AMT'},

                    {key: '비준가격_면적', value: 'L_SIZE'},

                    {key: '비준가격_면적_평', value: 'L_SIZE_PY'},

                    {key: '비준가격_용도지역', value: 'USE_AREA'},

                    {key: '비준가격_지목', value: 'LCATEGORY'},

                    {key: '비준가격_이용현황', value: 'L_USE_CODE'},

                    {key: '비준가격_도로조건', value: 'OF_ROAD_CODE'},

                    {key: '비준가격_형상', value: 'L_SHAPE_CODE'},

                    {key: '비준가격_고저', value: 'L_UNDUR_CODE'},

                    {key: '비준가격_사례가격', value: 'EXAMPLE_PRICE'},

                    {key: '비준가격산정사례_사례구분', value: 'EX_DIV'},
                ]);


                GetComponent('DBGrid_비준가격').FindIndexArray('m_index', (row) => {

                    if ((row['EX_NO'] == GetValue('비준가격_사례번호'))) {
                        return true;
                    }

                    return false;
                });


                GetComponent('DBGrid_비준가격').SetRows(GetValue('m_index'), [
                    {key: 'EX_DIV', value: GetValue('비준가격산정사례_사례구분')},
                ], true);

                if (GetValue('비준가격산정사례_사례구분') == 0) {

                    GetComponent('DBGrid_비준가격_산정사례').SetRow(-1, [
                        {key: 'AU_NO', value: ''},
                    ], true);

                }


                SetValue('비준가격_사례가격', GetValue('비준가격_조사금액') / GetValue('비준가격_면적'))


                GetComponent('DBGrid_비준가격_산정사례').SetRow(-1, [
                    {key: 'EXAMPLE_PRICE', value: GetValue('비준가격_사례가격')},
                ], true);


                MC_Combo_사례번호();


                MC_비준가격_참조값_표준지();

            })
            .on('OnEnterKey', function () {

                GetComponent('DBGrid_비준가격_산정사례').NextTab();

            })

        const 감정가액산출地Ⅱ = new Edit('감정가액산출地Ⅱ', new JsonZoonData('감정가액산출地Ⅱ', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture27 = new Picture('Picture27', new JsonZoonData('Picture27', {}), {
            isShow: true,
            isEnable: false
        })
        const Label8 = new Label('Label8', new JsonZoonData('Label8', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_기준가격집계표 = new DBGrid('DBGrid_기준가격집계표', new JsonZoonData('Q_기준가격집계표', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {

            MC_기타요인_참조값_전체();

        })

        const Table8 = new Edit('Table8', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture26 = new Picture('Picture26', new JsonZoonData('Picture26', {}), {
            isShow: true,
            isEnable: false
        })
        const Label6 = new Label('Label6', new JsonZoonData('Label6', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture37 = new Picture('Picture37', new JsonZoonData('Picture37', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_기준가격').GetRows("", [
                {key: '기준가격_발생순번_Arr', value: 'RNO'},
            ]);


            SetValue('기준가격_발생순번', Max('기준가격_발생순번_Arr') + 1)


            GetComponent('DBGrid_기준가격').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'RNO': GetValue('기준가격_발생순번'),
                'ROAD_SIDE_C': 1,
                'ROAD_DIST_C': 1,
                'GOV_ACSS_C': 1,
                'CNTR_ACSS_C': 1,
                'CITY_INFR_C': 1,
                'E_ETC_C': 1,
                'E_TREND_C': 1,
                'EDIT_C': 1,
                'ETC_ACSS_C': 1,
                'ETC_ENVI_C': 1,
                'L_AZIM_CODE_C': 1,
                'L_ETC_C': 1,
                'L_OF_GU_C': 1,
                'L_SHAPE_CODE_C': 1,
                'L_SIZE_CODE_C': 1,
                'L_UNDUR_CODE_C': 1,
                'LIMIT_AREA_C': 1,
                'POLL_ACSS_C': 1,
                'RAIL_ACSS_C': 1,
                'USE_AREA_C': 1,
                'USE_DSCT_C': 1,
                'LIMIT_AREA_M': '00',
                'LIMIT_AREA_S': '00',
                'EDIT_M': 1,
                'EDIT_S': 1,
                'EDIT_M_DATE': GetValue('MkEdit_감정일'),
                'EDIT_S_DATE': GetValue('MkEdit_감정일'),
                'EDIT_C': 1,
                'JUSO_C': 1
            });


            GetComponent('DBGrid_기준가격집계표').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번')
            });


            GetComponent('DBGrid_기준가격').GetRowCount('기준가격_RowCount');


            SetValue('기준가격_RowCount', GetValue('기준가격_RowCount') - 1)


            GetComponent('DBGrid_기준가격').SetCurSel(GetNumber('기준가격_RowCount'));


            GetComponent('DBGrid_기준가격').SetEditFocus(GetNumber('기준가격_RowCount') - 1, 'b_size');

        })

        const Picture38 = new Picture('Picture38', new JsonZoonData('Picture38', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_기준가격').GetCurSel('기준가격_RowPosition');


            GetComponent('DBGrid_기준가격').DeleteRow(GetNumber('기준가격_RowPosition'));


            GetComponent('DBGrid_기준가격집계표').DeleteRow(GetNumber('기준가격_RowPosition'));

        })

        const DBGrid_기준가격 = new DBGrid('DBGrid_기준가격', new JsonZoonData('Q_기준가격', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {

            GetComponent('DBGrid_기준가격').GetCurColName('기준가격_ColName');

            if (GetValue('기준가격_ColName') == 'POT_GU') {
                MC_기준가격_참조값_본건();
            }

            if (GetValue('기준가격_ColName') == 'STD_GU') {
                MC_기준가격_참조값_표준지();
            }

            MC_기준가격_집계표();

        })
            .on('OnSelectChange', function () {

                MC_기준가격_항목변경();

            })

        const Edit_기준가격_비교치_도로조건 = new MaskEdit('Edit_기준가격_비교치_도로조건', new JsonZoonData('Edit_기준가격_비교치_도로조건', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ROAD_SIDE_C', value: GetValue('Edit_기준가격_비교치_도로조건')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_도로거리 = new MaskEdit('Edit_기준가격_비교치_도로거리', new JsonZoonData('Edit_기준가격_비교치_도로거리', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ROAD_DIST_C', value: GetValue('Edit_기준가격_비교치_도로거리')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_관공서접근성 = new MaskEdit('Edit_기준가격_비교치_관공서접근성', new JsonZoonData('Edit_기준가격_비교치_관공서접근성', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'GOV_ACSS_C', value: GetValue('Edit_기준가격_비교치_관공서접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_중심지역접근성 = new MaskEdit('Edit_기준가격_비교치_중심지역접근성', new JsonZoonData('Edit_기준가격_비교치_중심지역접근성', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_C', value: GetValue('Edit_기준가격_비교치_중심지역접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_기타접근성 = new MaskEdit('Edit_기준가격_비교치_기타접근성', new JsonZoonData('Edit_기준가격_비교치_기타접근성', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ETC_ACSS_C', value: GetValue('Edit_기준가격_비교치_기타접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_철도접근성 = new MaskEdit('Edit_기준가격_비교치_철도접근성', new JsonZoonData('Edit_기준가격_비교치_철도접근성', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'RAIL_ACSS_C', value: GetValue('Edit_기준가격_비교치_철도접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_폐기물접근성 = new MaskEdit('Edit_기준가격_비교치_폐기물접근성', new JsonZoonData('Edit_기준가격_비교치_폐기물접근성', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'POLL_ACSS_C', value: GetValue('Edit_기준가격_비교치_폐기물접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_기타환경조건 = new MaskEdit('Edit_기준가격_비교치_기타환경조건', new JsonZoonData('Edit_기준가격_비교치_기타환경조건', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ETC_ENVI_C', value: GetValue('Edit_기준가격_비교치_기타환경조건')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_용도지역 = new MaskEdit('Edit_기준가격_비교치_용도지역', new JsonZoonData('Edit_기준가격_비교치_용도지역', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'USE_AREA_C', value: GetValue('Edit_기준가격_비교치_용도지역')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_용도지구 = new MaskEdit('Edit_기준가격_비교치_용도지구', new JsonZoonData('Edit_기준가격_비교치_용도지구', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'USE_DSCT_C', value: GetValue('Edit_기준가격_비교치_용도지구')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_도시계획 = new MaskEdit('Edit_기준가격_비교치_도시계획', new JsonZoonData('Edit_기준가격_비교치_도시계획', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CITY_INFR_C', value: GetValue('Edit_기준가격_비교치_도시계획')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_저촉률 = new MaskEdit('Edit_기준가격_비교치_저촉률', new JsonZoonData('Edit_기준가격_비교치_저촉률', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'LIMIT_AREA_C', value: GetValue('Edit_기준가격_비교치_저촉률')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_고저 = new MaskEdit('Edit_기준가격_비교치_고저', new JsonZoonData('Edit_기준가격_비교치_고저', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_UNDUR_CODE_C', value: GetValue('Edit_기준가격_비교치_고저')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_형상 = new MaskEdit('Edit_기준가격_비교치_형상', new JsonZoonData('Edit_기준가격_비교치_형상', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_SHAPE_CODE_C', value: GetValue('Edit_기준가격_비교치_형상')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_방위 = new MaskEdit('Edit_기준가격_비교치_방위', new JsonZoonData('Edit_기준가격_비교치_방위', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_AZIM_CODE_C', value: GetValue('Edit_기준가격_비교치_방위')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_면적 = new MaskEdit('Edit_기준가격_비교치_면적', new JsonZoonData('Edit_기준가격_비교치_면적', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_SIZE_CODE_C', value: GetValue('Edit_기준가격_비교치_면적')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_토지이용상황 = new MaskEdit('Edit_기준가격_비교치_토지이용상황', new JsonZoonData('Edit_기준가격_비교치_토지이용상황', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_OF_GU_C', value: GetValue('Edit_기준가격_비교치_토지이용상황')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_기타 = new MaskEdit('Edit_기준가격_비교치_기타', new JsonZoonData('Edit_기준가격_비교치_기타', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_ETC_C', value: GetValue('Edit_기준가격_비교치_기타')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_장래의동향 = new MaskEdit('Edit_기준가격_비교치_장래의동향', new JsonZoonData('Edit_기준가격_비교치_장래의동향', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'E_TREND_C', value: GetValue('Edit_기준가격_비교치_장래의동향')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_기타조건 = new MaskEdit('Edit_기준가격_비교치_기타조건', new JsonZoonData('Edit_기준가격_비교치_기타조건', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'E_ETC_C', value: GetValue('Edit_기준가격_비교치_기타조건')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_본건요인_도로조건 = new Combo('Combo_기준가격_본건요인_도로조건', new JsonZoonData('Q_코드_도로조건', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ROAD_SIDE_M', value: GetValue('Combo_기준가격_본건요인_도로조건')},
            ], true);

        })

        const Combo_기준가격_표준지요인_도로조건 = new Combo('Combo_기준가격_표준지요인_도로조건', new JsonZoonData('Q_코드_도로조건', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ROAD_SIDE_S', value: GetValue('Combo_기준가격_표준지요인_도로조건')},
            ], true);

        })

        const Combo_기준가격_본건요인_도로거리 = new Combo('Combo_기준가격_본건요인_도로거리', new JsonZoonData('Q_코드_도로거리', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ROAD_DIST_M', value: GetValue('Combo_기준가격_본건요인_도로거리')},
            ], true);

        })

        const Combo_기준가격_표준지요인_도로거리 = new Combo('Combo_기준가격_표준지요인_도로거리', new JsonZoonData('Q_코드_도로거리', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ROAD_DIST_S', value: GetValue('Combo_기준가격_표준지요인_도로거리')},
            ], true);

        })

        const Combo_기준가격_본건요인_관공서접근성 = new Combo('Combo_기준가격_본건요인_관공서접근성', new JsonZoonData('Q_코드_관공서접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'GOV_ACSS_M', value: GetValue('Combo_기준가격_본건요인_관공서접근성')},
            ], true);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_관공서_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_관공서_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_기준가격_비교치_관공서접근성', 1 + (StrToNum(GetValue('기준가격_관공서_본건')) - StrToNum(GetValue('기준가격_관공서_표준지'))))


            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'GOV_ACSS_C', value: GetValue('Edit_기준가격_비교치_관공서접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_표준지요인_관공서접근성 = new Combo('Combo_기준가격_표준지요인_관공서접근성', new JsonZoonData('Q_코드_관공서접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'GOV_ACSS_S', value: GetValue('Combo_기준가격_표준지요인_관공서접근성')},
            ], true);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_관공서_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_관공서_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_기준가격_비교치_관공서접근성', 1 + (StrToNum(GetValue('기준가격_관공서_본건')) - StrToNum(GetValue('기준가격_관공서_표준지'))))


            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'GOV_ACSS_C', value: GetValue('Edit_기준가격_비교치_관공서접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_본건요인_중심지역접근성 = new Combo('Combo_기준가격_본건요인_중심지역접근성', new JsonZoonData('Q_코드_중심지역접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_M', value: GetValue('Combo_기준가격_본건요인_중심지역접근성')},
            ], true);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_중심지역_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_중심지역_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_기준가격_비교치_중심지역접근성', 1 + (StrToNum(GetValue('기준가격_중심지역_본건')) - StrToNum(GetValue('기준가격_중심지역_표준지'))))


            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_C', value: GetValue('Edit_기준가격_비교치_중심지역접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_표준지요인_중심지역접근성 = new Combo('Combo_기준가격_표준지요인_중심지역접근성', new JsonZoonData('Q_코드_중심지역접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_S', value: GetValue('Combo_기준가격_표준지요인_중심지역접근성')},
            ], true);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_중심지역_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_기준가격_표준지요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '기준가격_중심지역_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_기준가격_비교치_중심지역접근성', 1 + (StrToNum(GetValue('기준가격_중심지역_본건')) - StrToNum(GetValue('기준가격_중심지역_표준지'))))


            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_C', value: GetValue('Edit_기준가격_비교치_중심지역접근성')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_본건요인_철도접근성 = new Combo('Combo_기준가격_본건요인_철도접근성', new JsonZoonData('Q_코드_철도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'RAIL_ACSS_M', value: GetValue('Combo_기준가격_본건요인_철도접근성')},
            ], true);

        })

        const Combo_기준가격_표준지요인_철도접근성 = new Combo('Combo_기준가격_표준지요인_철도접근성', new JsonZoonData('Q_코드_철도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'RAIL_ACSS_S', value: GetValue('Combo_기준가격_표준지요인_철도접근성')},
            ], true);

        })

        const Combo_기준가격_본건요인_폐기물접근성 = new Combo('Combo_기준가격_본건요인_폐기물접근성', new JsonZoonData('Q_코드_폐기물', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'POLL_ACSS_M', value: GetValue('Combo_기준가격_본건요인_폐기물접근성')},
            ], true);

        })

        const Combo_기준가격_표준지요인_폐기물접근성 = new Combo('Combo_기준가격_표준지요인_폐기물접근성', new JsonZoonData('Q_코드_폐기물', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'POLL_ACSS_S', value: GetValue('Combo_기준가격_표준지요인_폐기물접근성')},
            ], true);

        })

        const Combo_기준가격_본건요인_용도지역 = new Combo('Combo_기준가격_본건요인_용도지역', new JsonZoonData('Q_코드_용도지역', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'USE_AREA_M', value: GetValue('Combo_기준가격_본건요인_용도지역')},
            ], true);

        })

        const Combo_기준가격_표준지요인_용도지역 = new Combo('Combo_기준가격_표준지요인_용도지역', new JsonZoonData('Q_코드_용도지역', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'USE_AREA_S', value: GetValue('Combo_기준가격_표준지요인_용도지역')},
            ], true);

        })

        const Combo_기준가격_본건요인_용도지구 = new Combo('Combo_기준가격_본건요인_용도지구', new JsonZoonData('Q_코드_용도지구', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'USE_DSCT_M', value: GetValue('Combo_기준가격_본건요인_용도지구')},
            ], true);

        })

        const Combo_기준가격_표준지요인_용도지구 = new Combo('Combo_기준가격_표준지요인_용도지구', new JsonZoonData('Q_코드_용도지구', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'USE_DSCT_S', value: GetValue('Combo_기준가격_표준지요인_용도지구')},
            ], true);

        })

        const Combo_기준가격_본건요인_도시계획 = new Combo('Combo_기준가격_본건요인_도시계획', new JsonZoonData('Q_코드_도시계획', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CITY_INFR_M', value: GetValue('Combo_기준가격_본건요인_도시계획')},
            ], true);


            MC_기준가격_저촉률();


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_표준지요인_도시계획 = new Combo('Combo_기준가격_표준지요인_도시계획', new JsonZoonData('Q_코드_도시계획', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'CITY_INFR_S', value: GetValue('Combo_기준가격_표준지요인_도시계획')},
            ], true);


            MC_기준가격_저촉률();


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_본건요인_저촉률 = new Combo('Combo_기준가격_본건요인_저촉률', new JsonZoonData('Q_코드_저촉률', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'LIMIT_AREA_M', value: GetValue('Combo_기준가격_본건요인_저촉률')},
            ], true);


            MC_기준가격_저촉률();


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_표준지요인_저촉률 = new Combo('Combo_기준가격_표준지요인_저촉률', new JsonZoonData('Q_코드_저촉률', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'LIMIT_AREA_S', value: GetValue('Combo_기준가격_표준지요인_저촉률')},
            ], true);


            MC_기준가격_저촉률();


            MC_기준가격_요인합계();

        })

        const Combo_기준가격_본건요인_고저 = new Combo('Combo_기준가격_본건요인_고저', new JsonZoonData('Q_코드_고저', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_UNDUR_CODE_M', value: GetValue('Combo_기준가격_본건요인_고저')},
            ], true);

        })

        const Combo_기준가격_표준지요인_고저 = new Combo('Combo_기준가격_표준지요인_고저', new JsonZoonData('Q_코드_고저', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_UNDUR_CODE_S', value: GetValue('Combo_기준가격_표준지요인_고저')},
            ], true);

        })

        const Combo_기준가격_본건요인_형상 = new Combo('Combo_기준가격_본건요인_형상', new JsonZoonData('Q_코드_형상', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_SHAPE_CODE_M', value: GetValue('Combo_기준가격_본건요인_형상')},
            ], true);

        })

        const Combo_기준가격_표준지요인_형상 = new Combo('Combo_기준가격_표준지요인_형상', new JsonZoonData('Q_코드_형상', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_SHAPE_CODE_S', value: GetValue('Combo_기준가격_표준지요인_형상')},
            ], true);

        })

        const Combo_기준가격_본건요인_방위 = new Combo('Combo_기준가격_본건요인_방위', new JsonZoonData('Q_코드_방위', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_AZIM_CODE_M', value: GetValue('Combo_기준가격_본건요인_방위')},
            ], true);

        })

        const Combo_기준가격_표준지요인_방위 = new Combo('Combo_기준가격_표준지요인_방위', new JsonZoonData('Q_코드_방위', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_AZIM_CODE_S', value: GetValue('Combo_기준가격_표준지요인_방위')},
            ], true);

        })

        const Combo_기준가격_본건요인_면적 = new Combo('Combo_기준가격_본건요인_면적', new JsonZoonData('Q_코드_면적', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_SIZE_CODE_M', value: GetValue('Combo_기준가격_본건요인_면적')},
            ], true);

        })

        const Combo_기준가격_표준지요인_면적 = new Combo('Combo_기준가격_표준지요인_면적', new JsonZoonData('Q_코드_면적', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_SIZE_CODE_S', value: GetValue('Combo_기준가격_표준지요인_면적')},
            ], true);

        })

        const Combo_기준가격_본건요인_토지이용상황 = new Combo('Combo_기준가격_본건요인_토지이용상황', new JsonZoonData('Q_코드_이용현황', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_OF_GU_M', value: GetValue('Combo_기준가격_본건요인_토지이용상황')},
            ], true);

        })

        const Combo_기준가격_표준지요인_토지이용상황 = new Combo('Combo_기준가격_표준지요인_토지이용상황', new JsonZoonData('Q_코드_이용현황', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_OF_GU_S', value: GetValue('Combo_기준가격_표준지요인_토지이용상황')},
            ], true);

        })

        const Edit_기준가격_비교치_적용단가 = new MaskEdit('Edit_기준가격_비교치_적용단가', new JsonZoonData('Edit_기준가격_비교치_적용단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_기준가격_비교치_산정단가 = new MaskEdit('Edit_기준가격_비교치_산정단가', new JsonZoonData('Edit_기준가격_비교치_산정단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_기준가격_비교치_요인합계 = new MaskEdit('Edit_기준가격_비교치_요인합계', new JsonZoonData('Edit_기준가격_비교치_요인합계', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_기준가격_비교치_감가율 = new MaskEdit('Edit_기준가격_비교치_감가율', new JsonZoonData('Edit_기준가격_비교치_감가율', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_기준가격_표준지요인_공시지가 = new MaskEdit('Edit_기준가격_표준지요인_공시지가', new JsonZoonData('Edit_기준가격_표준지요인_공시지가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'STD_ANNO_AMT', value: GetValue('Edit_기준가격_표준지요인_공시지가')},
            ], true);

        })

        const Label7 = new Label('Label7', new JsonZoonData('Label7', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_기준가격_본건요인_소재지 = new Edit('Edit_기준가격_본건요인_소재지', new JsonZoonData('Edit_기준가격_본건요인_소재지', {}), {
            isShow: true,
            isEnable: false
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'JUSO_M', value: GetValue('Edit_기준가격_본건요인_소재지')},
            ], true);

        })

        const Edit_기준가격_표준지요인_소재지 = new Edit('Edit_기준가격_표준지요인_소재지', new JsonZoonData('Edit_기준가격_표준지요인_소재지', {}), {
            isShow: true,
            isEnable: false
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'JUSO_S', value: GetValue('Edit_기준가격_표준지요인_소재지')},
            ], true);

        })

        const Edit_기준가격_본건요인_기타접근성 = new Edit('Edit_기준가격_본건요인_기타접근성', new JsonZoonData('Edit_기준가격_본건요인_기타접근성', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ETC_ACSS_M', value: GetValue('Edit_기준가격_본건요인_기타접근성')},
            ], true);

        })

        const Edit_기준가격_표준지요인_기타접근성 = new Edit('Edit_기준가격_표준지요인_기타접근성', new JsonZoonData('Edit_기준가격_표준지요인_기타접근성', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ETC_ACSS_S', value: GetValue('Edit_기준가격_표준지요인_기타접근성')},
            ], true);

        })

        const Edit_기준가격_본건요인_기타환경조건 = new Edit('Edit_기준가격_본건요인_기타환경조건', new JsonZoonData('Edit_기준가격_본건요인_기타환경조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ETC_ENVI_M', value: GetValue('Edit_기준가격_본건요인_기타환경조건')},
            ], true);

        })

        const Edit_기준가격_표준지요인_기타환경조건 = new Edit('Edit_기준가격_표준지요인_기타환경조건', new JsonZoonData('Edit_기준가격_표준지요인_기타환경조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'ETC_ENVI_S', value: GetValue('Edit_기준가격_표준지요인_기타환경조건')},
            ], true);

        })

        const Edit_기준가격_본건요인_기타조건 = new Edit('Edit_기준가격_본건요인_기타조건', new JsonZoonData('Edit_기준가격_본건요인_기타조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'E_ETC_M', value: GetValue('Edit_기준가격_본건요인_기타조건')},
            ], true);

        })

        const Edit_기준가격_표준지요인_기타조건 = new Edit('Edit_기준가격_표준지요인_기타조건', new JsonZoonData('Edit_기준가격_표준지요인_기타조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'E_ETC_S', value: GetValue('Edit_기준가격_표준지요인_기타조건')},
            ], true);

        })

        const Edit_기준가격_비교치_적용요인합계 = new MaskEdit('Edit_기준가격_비교치_적용요인합계', new JsonZoonData('Edit_기준가격_비교치_적용요인합계', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_기준가격_본건요인_시점수정_날짜 = new MaskEdit('Edit_기준가격_본건요인_시점수정_날짜', new
        JsonZoonData('Edit_기준가격_본건요인_시점수정_날짜', {}), {
            isShow: true,
            isEnable: false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            if (GetValue('비준_MkEdit_시점_본건_일자') == '00000000') {

                SetValue('비준_Label_시점_본건_경과일', "");

            }

            if (GetValue('비준_MkEdit_시점_본건_일자') != '00000000') {

                SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_시점_본건_일자'));


                // RunButton('Command_경과일수');


                SetValue('비준_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));


                SetValue('10_경과일수_쿼리리턴값', "");

            }

        })

        const Label83 = new Label('Label83', new JsonZoonData('Label83', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_기준가격_본건요인_시점수정 = new MaskEdit('Edit_기준가격_본건요인_시점수정', new JsonZoonData('Edit_기준가격_본건요인_시점수정', {}), {
            isShow: true,
            isEnable: false,
            mask: ';1;#,###1.000',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_302_비준가격_Change_1_비교_계산();

        })

        const Edit_기준가격_표준지요인_시점수정_날짜 = new MaskEdit('Edit_기준가격_표준지요인_시점수정_날짜', new
        JsonZoonData('Edit_기준가격_표준지요인_시점수정_날짜', {}), {
            isShow: true,
            isEnable: true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'EDIT_S_DATE', value: GetValue('Edit_기준가격_표준지요인_시점수정_날짜')},
            ], true);


            MC_기준가격_요인합계();


            MC_기준가격_경과일();

        })

        const Label84 = new Label('Label84', new JsonZoonData('Label84', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_기준가격_표준지요인_시점수정 = new MaskEdit('Edit_기준가격_표준지요인_시점수정', new JsonZoonData('Edit_기준가격_표준지요인_시점수정', {}), {
            isShow: true,
            isEnable: true,
            mask: ';1;#,###1.000',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_기준가격_비교치_시점수정', GetValue('Edit_기준가격_표준지요인_시점수정'))


            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'EDIT_S', value: GetValue('Edit_기준가격_표준지요인_시점수정')},

                {key: 'EDIT_C', value: GetValue('Edit_기준가격_비교치_시점수정')},
            ], true);


            MC_기준가격_요인합계();

        })

        const Edit_기준가격_비교치_시점수정 = new MaskEdit('Edit_기준가격_비교치_시점수정', new JsonZoonData('Edit_기준가격_비교치_시점수정', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.000',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'EDIT_S', value: GetValue('Edit_기준가격_표준지요인_시점수정')},

                {key: 'EDIT_C', value: GetValue('Edit_기준가격_비교치_시점수정')},
            ], true);


            MC_기준가격_요인합계();

        })

        const 기준_Label_시점_본건_경과일 = new Edit('기준_Label_시점_본건_경과일', new JsonZoonData('기준_Label_시점_본건_경과일', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_기준가격_표준지요인_시점수정_날짜_경과일 = new Label('Edit_기준가격_표준지요인_시점수정_날짜_경과일', new
        JsonZoonData('Edit_기준가격_표준지요인_시점수정_날짜_경과일', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_기준가격_본건요인_장래의동향 = new Edit('Combo_기준가격_본건요인_장래의동향', new JsonZoonData('Combo_기준가격_본건요인_장래의동향', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'E_TREND_M', value: GetValue('Combo_기준가격_본건요인_장래의동향')},
            ], true);

        })

        const Combo_기준가격_표준지요인_장래의동향 = new Edit('Combo_기준가격_표준지요인_장래의동향', new JsonZoonData('Combo_기준가격_표준지요인_장래의동향', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'E_TREND_S', value: GetValue('Combo_기준가격_표준지요인_장래의동향')},
            ], true);

        })

        const Combo_기준가격_본건요인_기타 = new Edit('Combo_기준가격_본건요인_기타', new JsonZoonData('Combo_기준가격_본건요인_기타', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_ETC_M', value: GetValue('Combo_기준가격_본건요인_기타')},
            ], true);

        })

        const Combo_기준가격_표준지요인_기타 = new Edit('Combo_기준가격_표준지요인_기타', new JsonZoonData('Combo_기준가격_표준지요인_기타', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'L_ETC_S', value: GetValue('Combo_기준가격_표준지요인_기타')},
            ], true);

        })

        const Edit_기준가격_비교치_소재지 = new MaskEdit('Edit_기준가격_비교치_소재지', new JsonZoonData('Edit_기준가격_비교치_소재지', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_기준가격').SetRow(-1, [
                {key: 'JUSO_C', value: GetValue('Edit_기준가격_비교치_소재지')},
            ], true);


            MC_기준가격_요인합계();

        })

        const 감정가액산출地Ⅲ = new Edit('감정가액산출地Ⅲ', new JsonZoonData('감정가액산출地Ⅲ', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture30 = new Picture('Picture30', new JsonZoonData('Picture30', {}), {
            isShow: true,
            isEnable: true
        })
        const Label17 = new Label('Label17', new JsonZoonData('Label17', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_비준가격집계표 = new DBGrid('DBGrid_비준가격집계표', new JsonZoonData('Q_비준가격집계표', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {

            MC_기타요인_참조값_전체();

        })

        const DBGrid_비준가격 = new DBGrid('DBGrid_비준가격', new JsonZoonData('Q_비준가격', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {
            GetComponent('DBGrid_비준가격').GetCurColName('비준가격_ColName');

            if (GetValue('비준가격_ColName') == 'POT_GU') {
                MC_비준가격_참조값_본건();
            }

            if (GetValue('비준가격_ColName') == 'EX_NO') {
                MC_비준가격_참조값_표준지();
            }

            MC_비준가격_집계표();

        })
            .on('OnSelectChange', function () {

                MC_비준가격_항목변경();

            })

        const Table13 = new Edit('Table13', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Label13 = new Label('Label13', new JsonZoonData('Label13', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture29 = new Picture('Picture29', new JsonZoonData('Picture29', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture40 = new Picture('Picture40', new JsonZoonData('Picture40', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_비준가격').GetCurSel('비준가격_RowPosition');


            GetComponent('DBGrid_비준가격').DeleteRow(GetNumber('비준가격_RowPosition'));


            GetComponent('DBGrid_비준가격집계표').DeleteRow(GetNumber('비준가격_RowPosition'));

        })

        const Edit_비준가격_비교치_도로조건 = new MaskEdit('Edit_비준가격_비교치_도로조건', new JsonZoonData('Edit_비준가격_비교치_도로조건', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ROAD_SIDE_C', value: GetValue('Edit_비준가격_비교치_도로조건')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_도로거리 = new MaskEdit('Edit_비준가격_비교치_도로거리', new JsonZoonData('Edit_비준가격_비교치_도로거리', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ROAD_DIST_C', value: GetValue('Edit_비준가격_비교치_도로거리')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_관공서접근성 = new MaskEdit('Edit_비준가격_비교치_관공서접근성', new JsonZoonData('Edit_비준가격_비교치_관공서접근성', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'GOV_ACSS_C', value: GetValue('Edit_비준가격_비교치_관공서접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_중심지역접근성 = new MaskEdit('Edit_비준가격_비교치_중심지역접근성', new JsonZoonData('Edit_비준가격_비교치_중심지역접근성', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_C', value: GetValue('Edit_비준가격_비교치_중심지역접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_기타접근성 = new MaskEdit('Edit_비준가격_비교치_기타접근성', new JsonZoonData('Edit_비준가격_비교치_기타접근성', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ETC_ACSS_C', value: GetValue('Edit_비준가격_비교치_기타접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_철도접근성 = new MaskEdit('Edit_비준가격_비교치_철도접근성', new JsonZoonData('Edit_비준가격_비교치_철도접근성', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'RAIL_ACSS_C', value: GetValue('Edit_비준가격_비교치_철도접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_폐기물접근성 = new MaskEdit('Edit_비준가격_비교치_폐기물접근성', new JsonZoonData('Edit_비준가격_비교치_폐기물접근성', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'POLL_ACSS_C', value: GetValue('Edit_비준가격_비교치_폐기물접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_기타환경조건 = new Edit('Edit_비준가격_비교치_기타환경조건', new JsonZoonData('Edit_비준가격_비교치_기타환경조건', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ETC_ENVI_C', value: GetValue('Edit_비준가격_비교치_기타환경조건')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_용도지역 = new MaskEdit('Edit_비준가격_비교치_용도지역', new JsonZoonData('Edit_비준가격_비교치_용도지역', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'USE_AREA_C', value: GetValue('Edit_비준가격_비교치_용도지역')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_용도지구 = new MaskEdit('Edit_비준가격_비교치_용도지구', new JsonZoonData('Edit_비준가격_비교치_용도지구', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'USE_DSCT_C', value: GetValue('Edit_비준가격_비교치_용도지구')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_도시계획 = new MaskEdit('Edit_비준가격_비교치_도시계획', new JsonZoonData('Edit_비준가격_비교치_도시계획', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CITY_INFR_C', value: GetValue('Edit_비준가격_비교치_도시계획')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_고저 = new MaskEdit('Edit_비준가격_비교치_고저', new JsonZoonData('Edit_비준가격_비교치_고저', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_UNDUR_CODE_C', value: GetValue('Edit_비준가격_비교치_고저')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_형상 = new MaskEdit('Edit_비준가격_비교치_형상', new JsonZoonData('Edit_비준가격_비교치_형상', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_SHAPE_CODE_C', value: GetValue('Edit_비준가격_비교치_형상')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_방위 = new MaskEdit('Edit_비준가격_비교치_방위', new JsonZoonData('Edit_비준가격_비교치_방위', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_AZIM_CODE_C', value: GetValue('Edit_비준가격_비교치_방위')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_면적 = new MaskEdit('Edit_비준가격_비교치_면적', new JsonZoonData('Edit_비준가격_비교치_면적', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_SIZE_CODE_C', value: GetValue('Edit_비준가격_비교치_면적')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_토지이용상황 = new MaskEdit('Edit_비준가격_비교치_토지이용상황', new JsonZoonData('Edit_비준가격_비교치_토지이용상황', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_OF_GU_C', value: GetValue('Edit_비준가격_비교치_토지이용상황')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_기타 = new MaskEdit('Edit_비준가격_비교치_기타', new JsonZoonData('Edit_비준가격_비교치_기타', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_ETC_C', value: GetValue('Edit_비준가격_비교치_기타')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_장래의동향 = new MaskEdit('Edit_비준가격_비교치_장래의동향', new JsonZoonData('Edit_비준가격_비교치_장래의동향', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'E_TREND_C', value: GetValue('Edit_비준가격_비교치_장래의동향')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_기타조건 = new MaskEdit('Edit_비준가격_비교치_기타조건', new JsonZoonData('Edit_비준가격_비교치_기타조건', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'E_ETC_C', value: GetValue('Edit_비준가격_비교치_기타조건')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Label18 = new Label('Label18', new JsonZoonData('Label18', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_비준가격_표준지요인_가격사례 = new Edit('Edit_비준가격_표준지요인_가격사례', new JsonZoonData('Edit_비준가격_표준지요인_가격사례', {}), {
            isShow: true,
            isEnable: false
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'STD_ANNO_AMT', value: GetValue('Edit_비준가격_표준지요인_가격사례')},
            ], true);

        })

        const Edit_비준가격_본건요인_소재지 = new Edit('Edit_비준가격_본건요인_소재지', new JsonZoonData('Edit_비준가격_본건요인_소재지', {}), {
            isShow: true,
            isEnable: false
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'JUSO_M', value: GetValue('Edit_비준가격_본건요인_소재지')},
            ], true);

        })

        const Edit_비준가격_표준지요인_소재지 = new Edit('Edit_비준가격_표준지요인_소재지', new JsonZoonData('Edit_비준가격_표준지요인_소재지', {}), {
            isShow: true,
            isEnable: false
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'JUSO_S', value: GetValue('Edit_비준가격_표준지요인_소재지')},
            ], true);

        })

        const Combo_비준가격_본건요인_도로조건 = new Combo('Combo_비준가격_본건요인_도로조건', new JsonZoonData('Q_코드_도로조건', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ROAD_SIDE_M', value: GetValue('Combo_비준가격_본건요인_도로조건')},
            ], true);

        })

        const Combo_비준가격_표준지요인_도로조건 = new Combo('Combo_비준가격_표준지요인_도로조건', new JsonZoonData('Q_코드_도로조건', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ROAD_SIDE_S', value: GetValue('Combo_비준가격_표준지요인_도로조건')},
            ], true);

        })

        const Combo_비준가격_본건요인_도로거리 = new Combo('Combo_비준가격_본건요인_도로거리', new JsonZoonData('Q_코드_도로거리', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ROAD_DIST_M', value: GetValue('Combo_비준가격_본건요인_도로거리')},
            ], true);

        })

        const Combo_비준가격_표준지요인_도로거리 = new Combo('Combo_비준가격_표준지요인_도로거리', new JsonZoonData('Q_코드_도로거리', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ROAD_DIST_S', value: GetValue('Combo_비준가격_표준지요인_도로거리')},
            ], true);

        })

        const Combo_비준가격_본건요인_관공서접근성 = new Combo('Combo_비준가격_본건요인_관공서접근성', new JsonZoonData('Q_코드_관공서접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'GOV_ACSS_M', value: GetValue('Combo_비준가격_본건요인_관공서접근성')},
            ], true);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_본건요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_관공서_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_표준지요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_관공서_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_비준가격_비교치_관공서접근성', 1 + (StrToNum(GetValue('비준가격_관공서_본건')) - StrToNum(GetValue('비준가격_관공서_표준지'))))


            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'GOV_ACSS_C', value: GetValue('Edit_비준가격_비교치_관공서접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_표준지요인_관공서접근성 = new Combo('Combo_비준가격_표준지요인_관공서접근성', new JsonZoonData('Q_코드_관공서접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'GOV_ACSS_S', value: GetValue('Combo_비준가격_표준지요인_관공서접근성')},
            ], true);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_본건요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_관공서_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_표준지요인_관공서접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관공서접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_관공서_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_비준가격_비교치_관공서접근성', 1 + (StrToNum(GetValue('비준가격_관공서_본건')) - StrToNum(GetValue('비준가격_관공서_표준지'))))


            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'GOV_ACSS_C', value: GetValue('Edit_비준가격_비교치_관공서접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_본건요인_중심지역접근성 = new Combo('Combo_비준가격_본건요인_중심지역접근성', new JsonZoonData('Q_코드_중심지역접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_M', value: GetValue('Combo_비준가격_본건요인_중심지역접근성')},
            ], true);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_본건요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_중심지역_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_표준지요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_중심지역_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_비준가격_비교치_중심지역접근성', 1 + (StrToNum(GetValue('비준가격_중심지역_본건')) - StrToNum(GetValue('비준가격_중심지역_표준지'))))


            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_C', value: GetValue('Edit_비준가격_비교치_중심지역접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_표준지요인_중심지역접근성 = new Combo('Combo_비준가격_표준지요인_중심지역접근성', new JsonZoonData('Q_코드_중심지역접근성', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_S', value: GetValue('Combo_비준가격_표준지요인_중심지역접근성')},
            ], true);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_본건요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_중심지역_본건', value: 'ATTR_08'},
            ]);


            GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_비준가격_표준지요인_중심지역접근성'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_중심지역접근성').GetRow(GetValue('00_RowIndex'), [
                {key: '비준가격_중심지역_표준지', value: 'ATTR_08'},
            ]);


            SetValue('Edit_비준가격_비교치_중심지역접근성', 1 + (StrToNum(GetValue('비준가격_중심지역_본건')) - StrToNum(GetValue('비준가격_중심지역_표준지'))))


            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CNTR_ACSS_C', value: GetValue('Edit_비준가격_비교치_중심지역접근성')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_본건요인_철도접근성 = new Combo('Combo_비준가격_본건요인_철도접근성', new JsonZoonData('Q_코드_철도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'RAIL_ACSS_M', value: GetValue('Combo_비준가격_본건요인_철도접근성')},
            ], true);

        })

        const Combo_비준가격_표준지요인_철도접근성 = new Combo('Combo_비준가격_표준지요인_철도접근성', new JsonZoonData('Q_코드_철도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'RAIL_ACSS_S', value: GetValue('Combo_비준가격_표준지요인_철도접근성')},
            ], true);

        })

        const Combo_비준가격_본건요인_폐기물접근성 = new Combo('Combo_비준가격_본건요인_폐기물접근성', new JsonZoonData('Q_코드_폐기물', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'POLL_ACSS_M', value: GetValue('Combo_비준가격_본건요인_폐기물접근성')},
            ], true);

        })

        const Combo_비준가격_표준지요인_폐기물접근성 = new Combo('Combo_비준가격_표준지요인_폐기물접근성', new JsonZoonData('Q_코드_폐기물', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'POLL_ACSS_S', value: GetValue('Combo_비준가격_표준지요인_폐기물접근성')},
            ], true);

        })

        const Combo_비준가격_본건요인_용도지역 = new Combo('Combo_비준가격_본건요인_용도지역', new JsonZoonData('Q_코드_용도지역', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'USE_AREA_M', value: GetValue('Combo_비준가격_본건요인_용도지역')},
            ], true);

        })

        const Combo_비준가격_표준지요인_용도지역 = new Combo('Combo_비준가격_표준지요인_용도지역', new JsonZoonData('Q_코드_용도지역', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'USE_AREA_S', value: GetValue('Combo_비준가격_표준지요인_용도지역')},
            ], true);

        })

        const Combo_비준가격_본건요인_용도지구 = new Combo('Combo_비준가격_본건요인_용도지구', new JsonZoonData('Q_코드_용도지구', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'USE_DSCT_M', value: GetValue('Combo_비준가격_본건요인_용도지구')},
            ], true);

        })

        const Combo_비준가격_표준지요인_용도지구 = new Combo('Combo_비준가격_표준지요인_용도지구', new JsonZoonData('Q_코드_용도지구', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'USE_DSCT_S', value: GetValue('Combo_비준가격_표준지요인_용도지구')},
            ], true);

        })

        const Combo_비준가격_본건요인_고저 = new Combo('Combo_비준가격_본건요인_고저', new JsonZoonData('Q_코드_고저', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_UNDUR_CODE_M', value: GetValue('Combo_비준가격_본건요인_고저')},
            ], true);

        })

        const Combo_비준가격_표준지요인_고저 = new Combo('Combo_비준가격_표준지요인_고저', new JsonZoonData('Q_코드_고저', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_UNDUR_CODE_S', value: GetValue('Combo_비준가격_표준지요인_고저')},
            ], true);

        })

        const Combo_비준가격_본건요인_형상 = new Combo('Combo_비준가격_본건요인_형상', new JsonZoonData('Q_코드_형상', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_SHAPE_CODE_M', value: GetValue('Combo_비준가격_본건요인_형상')},
            ], true);

        })

        const Combo_비준가격_표준지요인_형상 = new Combo('Combo_비준가격_표준지요인_형상', new JsonZoonData('Q_코드_형상', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_SHAPE_CODE_S', value: GetValue('Combo_비준가격_표준지요인_형상')},
            ], true);

        })

        const Combo_비준가격_본건요인_방위 = new Combo('Combo_비준가격_본건요인_방위', new JsonZoonData('Q_코드_방위', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_AZIM_CODE_M', value: GetValue('Combo_비준가격_본건요인_방위')},
            ], true);

        })

        const Combo_비준가격_표준지요인_방위 = new Combo('Combo_비준가격_표준지요인_방위', new JsonZoonData('Q_코드_방위', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_AZIM_CODE_S', value: GetValue('Combo_비준가격_표준지요인_방위')},
            ], true);

        })

        const Combo_비준가격_본건요인_면적 = new Combo('Combo_비준가격_본건요인_면적', new JsonZoonData('Q_코드_면적', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_SIZE_CODE_M', value: GetValue('Combo_비준가격_본건요인_면적')},
            ], true);

        })

        const Combo_비준가격_표준지요인_면적 = new Combo('Combo_비준가격_표준지요인_면적', new JsonZoonData('Q_코드_면적', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_SIZE_CODE_S', value: GetValue('Combo_비준가격_표준지요인_면적')},
            ], true);

        })

        const Combo_비준가격_본건요인_토지이용상황 = new Combo('Combo_비준가격_본건요인_토지이용상황', new JsonZoonData('Q_코드_이용현황', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_OF_GU_M', value: GetValue('Combo_비준가격_본건요인_토지이용상황')},
            ], true);

        })

        const Combo_비준가격_표준지요인_토지이용상황 = new Combo('Combo_비준가격_표준지요인_토지이용상황', new JsonZoonData('Q_코드_이용현황', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_OF_GU_S', value: GetValue('Combo_비준가격_표준지요인_토지이용상황')},
            ], true);

        })

        const Edit_비준가격_비교치_요인합계 = new MaskEdit('Edit_비준가격_비교치_요인합계', new JsonZoonData('Edit_비준가격_비교치_요인합계', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_비준가격_비교치_산정단가 = new MaskEdit('Edit_비준가격_비교치_산정단가', new JsonZoonData('Edit_비준가격_비교치_산정단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_비준가격_비교치_적용단가 = new MaskEdit('Edit_비준가격_비교치_적용단가', new JsonZoonData('Edit_비준가격_비교치_적용단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_비준가격_본건요인_도시계획 = new Combo('Combo_비준가격_본건요인_도시계획', new JsonZoonData('Q_코드_도시계획', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CITY_INFR_M', value: GetValue('Combo_비준가격_본건요인_도시계획')},
            ], true);


            MC_비준가격_저촉률();


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_표준지요인_도시계획 = new Combo('Combo_비준가격_표준지요인_도시계획', new JsonZoonData('Q_코드_도시계획', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'CITY_INFR_S', value: GetValue('Combo_비준가격_표준지요인_도시계획')},
            ], true);


            MC_비준가격_저촉률();


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_본건요인_저촉률 = new Combo('Combo_비준가격_본건요인_저촉률', new JsonZoonData('Q_코드_저촉률', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'LIMIT_AREA_M', value: GetValue('Combo_비준가격_본건요인_저촉률')},
            ], true);


            MC_비준가격_저촉률();


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_표준지요인_저촉률 = new Combo('Combo_비준가격_표준지요인_저촉률', new JsonZoonData('Q_코드_저촉률', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'LIMIT_AREA_S', value: GetValue('Combo_비준가격_표준지요인_저촉률')},
            ], true);


            MC_비준가격_저촉률();


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_비교치_저촉률 = new MaskEdit('Edit_비준가격_비교치_저촉률', new JsonZoonData('Edit_비준가격_비교치_저촉률', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'LIMIT_AREA_C', value: GetValue('Edit_비준가격_비교치_저촉률')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Edit_비준가격_본건요인_기타접근성 = new Edit('Edit_비준가격_본건요인_기타접근성', new JsonZoonData('Edit_비준가격_본건요인_기타접근성', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ETC_ACSS_M', value: GetValue('Edit_비준가격_본건요인_기타접근성')},
            ], true);

        })

        const Edit_비준가격_표준지요인_기타접근성 = new Edit('Edit_비준가격_표준지요인_기타접근성', new JsonZoonData('Edit_비준가격_표준지요인_기타접근성', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ETC_ACSS_S', value: GetValue('Edit_비준가격_표준지요인_기타접근성')},
            ], true);

        })

        const Edit_비준가격_본건요인_기타환경조건 = new Edit('Edit_비준가격_본건요인_기타환경조건', new JsonZoonData('Edit_비준가격_본건요인_기타환경조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ETC_ENVI_M', value: GetValue('Edit_비준가격_본건요인_기타환경조건')},
            ], true);

        })

        const Edit_비준가격_표준지요인_기타환경조건 = new Edit('Edit_비준가격_표준지요인_기타환경조건', new JsonZoonData('Edit_비준가격_표준지요인_기타환경조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'ETC_ENVI_S', value: GetValue('Edit_비준가격_표준지요인_기타환경조건')},
            ], true);

        })

        const Edit_비준가격_본건요인_기타조건 = new Edit('Edit_비준가격_본건요인_기타조건', new JsonZoonData('Edit_비준가격_본건요인_기타조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'E_ETC_M', value: GetValue('Edit_비준가격_본건요인_기타조건')},
            ], true);

        })

        const Edit_비준가격_표준지요인_기타조건 = new Edit('Edit_비준가격_표준지요인_기타조건', new JsonZoonData('Edit_비준가격_표준지요인_기타조건', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'E_ETC_S', value: GetValue('Edit_비준가격_표준지요인_기타조건')},
            ], true);

        })

        const Edit_비준가격_본건요인_시점수정_날짜 = new MaskEdit('Edit_비준가격_본건요인_시점수정_날짜', new JsonZoonData('Edit_비준가격_본건요인_시점수정_날짜', {}), {
            isShow: true,
            isEnable: false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {
            if (GetValue('비준_MkEdit_시점_본건_일자') == '00000000') {

                SetValue('비준_Label_시점_본건_경과일', "");

            }

            if (GetValue('비준_MkEdit_시점_본건_일자') != '00000000') {

                SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_시점_본건_일자'));


                // RunButton('Command_경과일수');


                SetValue('비준_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));


                SetValue('10_경과일수_쿼리리턴값', "");

            }

        })

        const Label80 = new Label('Label80', new JsonZoonData('Label80', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_비준가격_본건요인_시점수정 = new MaskEdit('Edit_비준가격_본건요인_시점수정', new JsonZoonData('Edit_비준가격_본건요인_시점수정', {}), {
            isShow: true,
            isEnable: false,
            mask: ';1;#,###1.000',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_302_비준가격_Change_1_비교_계산();

        })

        const Edit_비준가격_표준지요인_시점수정_날짜 = new MaskEdit('Edit_비준가격_표준지요인_시점수정_날짜', new
        JsonZoonData('Edit_비준가격_표준지요인_시점수정_날짜', {}), {
            isShow: true,
            isEnable: true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'EDIT_S_DATE', value: GetValue('Edit_비준가격_표준지요인_시점수정_날짜')},
            ], true);


            MC_비준가격_요인합계();


            MC_비준가격_경과일();

        })

        const Label81 = new Label('Label81', new JsonZoonData('Label81', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_비준가격_표준지요인_시점수정 = new MaskEdit('Edit_비준가격_표준지요인_시점수정', new JsonZoonData('Edit_비준가격_표준지요인_시점수정', {}), {
            isShow: true,
            isEnable: true,
            mask: ';1;#,###1.000',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_비준가격_비교치_시점수정', GetValue('Edit_비준가격_표준지요인_시점수정'))


            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'EDIT_S', value: GetValue('Edit_비준가격_표준지요인_시점수정')},

                {key: 'EDIT_C', value: GetValue('Edit_비준가격_비교치_시점수정')},
            ], true);


            MC_비준가격_요인합계();

        })

        const 비준_Label_시점_본건_경과일 = new Edit('비준_Label_시점_본건_경과일', new JsonZoonData('비준_Label_시점_본건_경과일', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_비준가격_표준지요인_시점수정_날짜_경과일 = new Label('Edit_비준가격_표준지요인_시점수정_날짜_경과일', new
        JsonZoonData('Edit_비준가격_표준지요인_시점수정_날짜_경과일', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_비준가격_비교치_시점수정 = new MaskEdit('Edit_비준가격_비교치_시점수정', new JsonZoonData('Edit_비준가격_비교치_시점수정', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.000',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'EDIT_C', value: GetValue('Edit_비준가격_비교치_시점수정')},
            ], true);


            MC_비준가격_요인합계();

        })

        const Combo_비준가격_본건요인_장래의동향 = new Edit('Combo_비준가격_본건요인_장래의동향', new JsonZoonData('Combo_비준가격_본건요인_장래의동향', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'E_TREND_M', value: GetValue('Combo_비준가격_본건요인_장래의동향')},
            ], true);

        })

        const Combo_비준가격_표준지요인_장래의동향 = new Edit('Combo_비준가격_표준지요인_장래의동향', new JsonZoonData('Combo_비준가격_표준지요인_장래의동향', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'E_TREND_S', value: GetValue('Combo_비준가격_표준지요인_장래의동향')},
            ], true);

        })

        const Picture39 = new Picture('Picture39', new JsonZoonData('Picture39', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_비준가격').GetRows("", [
                {key: '비준가격_입력순번_Arr', value: 'RNO'},
            ]);


            SetValue('비준가격_입력순번', Max('비준가격_입력순번_Arr') + 1)


            GetComponent('DBGrid_비준가격').GetRowCount('비준가격_RowCount');

            if (GetValue('비준가격_RowCount') >= 1) {

                SetValue('비준가격_RowCount', GetValue('비준가격_RowCount') - 1)


                GetComponent('DBGrid_비준가격').GetRow(GetNumber('비준가격_RowCount'), [
                    {key: '비준가격_일단지구분', value: 'POT_GU'},

                    {key: '비준가격_사례번호', value: 'EX_NO'},

                    {key: '비준가격_사례가격', value: 'STD_ANNO_AMT'},

                    {key: '비준가격_시점수정_본건', value: 'EDIT_M'},

                    {key: '비준가격_도로접면_본건', value: 'ROAD_SIDE_M'},

                    {key: '비준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},

                    {key: '비준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},

                    {key: '비준가격_도로거리_본건', value: 'ROAD_DIST_M'},

                    {key: '비준가격_도로거리_비교치', value: 'ROAD_DIST_C'},

                    {key: '비준가격_도로거리_표준지', value: 'ROAD_DIST_S'},

                    {key: '비준가격_관공서_본건', value: 'GOV_ACSS_M'},

                    {key: '비준가격_관공서_비교치', value: 'GOV_ACSS_C'},

                    {key: '비준가격_관공서_표준지', value: 'GOV_ACSS_S'},

                    {key: '비준가격_중심지역_본건', value: 'CNTR_ACSS_M'},

                    {key: '비준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},

                    {key: '비준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},

                    {key: '비준가격_기타접근성_본건', value: 'ETC_ACSS_M'},

                    {key: '비준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},

                    {key: '비준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},

                    {key: '비준가격_철도_본건', value: 'RAIL_ACSS_M'},

                    {key: '비준가격_철도_비교치', value: 'RAIL_ACSS_C'},

                    {key: '비준가격_철도_표준지', value: 'RAIL_ACSS_S'},

                    {key: '비준가격_폐기물_본건', value: 'POLL_ACSS_M'},

                    {key: '비준가격_폐기물_비교치', value: 'POLL_ACSS_C'},

                    {key: '비준가격_폐기물_표준지', value: 'POLL_ACSS_S'},

                    {key: '비준가격_기타환경_본건', value: 'ETC_ENVI_M'},

                    {key: '비준가격_기타환경_비교치', value: 'ETC_ENVI_C'},

                    {key: '비준가격_기타환경_표준지', value: 'ETC_ENVI_S'},

                    {key: '비준가격_용도지역_본건', value: 'USE_AREA_M'},

                    {key: '비준가격_용도지역_비교치', value: 'USE_AREA_C'},

                    {key: '비준가격_용도지역_표준지', value: 'USE_AREA_S'},

                    {key: '비준가격_용도지구_본건', value: 'USE_DSCT_M'},

                    {key: '비준가격_용도지구_비교치', value: 'USE_DSCT_C'},

                    {key: '비준가격_용도지구_표준지', value: 'USE_DSCT_S'},

                    {key: '비준가격_도시계획_본건', value: 'CITY_INFR_M'},

                    {key: '비준가격_도시계획_비교치', value: 'CITY_INFR_C'},

                    {key: '비준가격_도시계획_표준지', value: 'CITY_INFR_S'},

                    {key: '비준가격_기타제한_본건', value: 'LIMIT_AREA_M'},

                    {key: '비준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},

                    {key: '비준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},

                    {key: '비준가격_고저_본건', value: 'L_UNDUR_CODE_M'},

                    {key: '비준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},

                    {key: '비준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},

                    {key: '비준가격_형상_본건', value: 'L_SHAPE_CODE_M'},

                    {key: '비준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},

                    {key: '비준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},

                    {key: '비준가격_방위_본건', value: 'L_AZIM_CODE_M'},

                    {key: '비준가격_방위_비교치', value: 'L_AZIM_CODE_C'},

                    {key: '비준가격_방위_표준지', value: 'L_AZIM_CODE_S'},

                    {key: '비준가격_면적_본건', value: 'L_SIZE_CODE_M'},

                    {key: '비준가격_면적_비교치', value: 'L_SIZE_CODE_C'},

                    {key: '비준가격_면적_표준지', value: 'L_SIZE_CODE_S'},

                    {key: '비준가격_토지이용_본건', value: 'L_OF_GU_M'},

                    {key: '비준가격_토지이용_비교치', value: 'L_OF_GU_C'},

                    {key: '비준가격_토지이용_표준지', value: 'L_OF_GU_S'},

                    {key: '비준가격_기타_본건', value: 'L_ETC_M'},

                    {key: '비준가격_기타_비교치', value: 'L_ETC_C'},

                    {key: '비준가격_기타_표준지', value: 'L_ETC_S'},

                    {key: '비준가격_장래_본건', value: 'E_TREND_M'},

                    {key: '비준가격_장래_비교치', value: 'E_TREND_C'},

                    {key: '비준가격_장래_표준지', value: 'E_TREND_S'},

                    {key: '비준가격_기타조건_본건', value: 'E_ETC_M'},

                    {key: '비준가격_기타조건_비교치', value: 'E_ETC_C'},

                    {key: '비준가격_기타조건_표준지', value: 'E_ETC_S'},

                    {key: '비준가격_감가율', value: 'DEPRE_RATE'},

                    {key: '비준가격_요인합계', value: 'FACTOR_TOT'},

                    {key: '비준가격_산정단가', value: 'APAS_DAN'},

                    {key: '비준가격_적용단가', value: 'APPL_DAN'},

                    {key: '비준가격_소재지_본건', value: 'JUSO_M'},

                    {key: '비준가격_소재지_사례', value: 'JUSO_S'},

                    {key: '비준가격_조사시점', value: 'SURVEY_TIME'},

                    {key: '비준가격_시점수정_사례', value: 'EDIT_S'},

                    {key: '비준가격_시점수정_비교치', value: 'EDIT_C'},

                    {key: '비준가격_시점수정_본건_날짜', value: 'EDIT_M_DATE'},

                    {key: '비준가격_시점수정_사례_날짜', value: 'EDIT_S_DATE'},

                ]);


                GetComponent('DBGrid_비준가격').AddRow({
                    'YYYY': GetValue('년도'),
                    'SEQ': GetValue('감정순번'),
                    'RNO': GetValue('비준가격_입력순번'),
                    'CITY_INFR_C': 1,
                    'CNTR_ACSS_C': 1,
                    'E_ETC_C': 1,
                    'E_TREND_C': 1,
                    'EDIT_C': 1,
                    'ETC_ACSS_C': 1,
                    'ETC_ENVI_C': 1,
                    'GOV_ACSS_C': 1,
                    'L_AZIM_CODE_C': 1,
                    'L_ETC_C': 1,
                    'L_OF_GU_C': 1,
                    'L_SHAPE_CODE_C': 1,
                    'L_SIZE_CODE_C': 1,
                    'L_UNDUR_CODE_C': 1,
                    'LIMIT_AREA_C': 1,
                    'POLL_ACSS_C': 1,
                    'RAIL_ACSS_C': 1,
                    'ROAD_DIST_C': 1,
                    'ROAD_SIDE_C': 1,
                    'USE_AREA_C': 1,
                    'USE_DSCT_C': 1,
                    'LIMIT_AREA_S': '00',
                    'EDIT_S': 1,
                    'EDIT_S_DATE': GetValue('MkEdit_감정일'),
                    'EDIT_C': 1,
                    'POT_GU': GetValue('비준가격_일단지구분'),
                    'EDIT_M': GetValue('비준가격_시점수정_본건'),
                    'ROAD_SIDE_M': GetValue('비준가격_도로접면_본건'),
                    'ROAD_DIST_M': GetValue('비준가격_도로거리_본건'),
                    'GOV_ACSS_M': GetValue('비준가격_관공서_본건'),
                    'CNTR_ACSS_M': GetValue('비준가격_중심지역_본건'),
                    'ETC_ACSS_M': GetValue('비준가격_기타접근성_본건'),
                    'RAIL_ACSS_M': GetValue('비준가격_철도_본건'),
                    'POLL_ACSS_M': GetValue('비준가격_폐기물_본건'),
                    'ETC_ENVI_M': GetValue('비준가격_기타환경_본건'),
                    'USE_AREA_M': GetValue('비준가격_용도지역_본건'),
                    'USE_DSCT_M': GetValue('비준가격_용도지구_본건'),
                    'CITY_INFR_M': GetValue('비준가격_도시계획_본건'),
                    'LIMIT_AREA_M': GetValue('비준가격_기타제한_본건'),
                    'L_UNDUR_CODE_M': GetValue('비준가격_고저_본건'),
                    'L_SHAPE_CODE_M': GetValue('비준가격_형상_본건'),
                    'L_AZIM_CODE_M': GetValue('비준가격_방위_본건'),
                    'L_SIZE_CODE_M': GetValue('비준가격_면적_본건'),
                    'L_OF_GU_M': GetValue('비준가격_토지이용_본건'),
                    'L_ETC_M': GetValue('비준가격_기타_본건'),
                    'E_TREND_M': GetValue('비준가격_장래_본건'),
                    'E_ETC_M': GetValue('비준가격_기타조건_본건'),
                    'JUSO_M': GetValue('비준가격_소재지_본건'),
                    'EDIT_M_DATE': GetValue('비준가격_시점수정_본건_날짜'),
                    'JUSO_C': 1,
                });

            } else if (GetValue('비준가격_RowCount') < 1) {

                GetComponent('DBGrid_비준가격').AddRow({
                    'YYYY': GetValue('년도'),
                    'SEQ': GetValue('감정순번'),
                    'RNO': GetValue('비준가격_입력순번'),
                    'CITY_INFR_C': 1,
                    'CNTR_ACSS_C': 1,
                    'E_ETC_C': 1,
                    'E_TREND_C': 1,
                    'EDIT_C': 1,
                    'ETC_ACSS_C': 1,
                    'ETC_ENVI_C': 1,
                    'GOV_ACSS_C': 1,
                    'L_AZIM_CODE_C': 1,
                    'L_ETC_C': 1,
                    'L_OF_GU_C': 1,
                    'L_SHAPE_CODE_C': 1,
                    'L_SIZE_CODE_C': 1,
                    'L_UNDUR_CODE_C': 1,
                    'LIMIT_AREA_C': 1,
                    'POLL_ACSS_C': 1,
                    'RAIL_ACSS_C': 1,
                    'ROAD_DIST_C': 1,
                    'ROAD_SIDE_C': 1,
                    'USE_AREA_C': 1,
                    'USE_DSCT_C': 1,
                    'LIMIT_AREA_M': '00',
                    'LIMIT_AREA_S': '00',
                    'EDIT_M': 1,
                    'EDIT_S': 1,
                    'EDIT_M_DATE': GetValue('MkEdit_감정일'),
                    'EDIT_S_DATE': GetValue('MkEdit_감정일'),
                    'EDIT_C': 1,
                    'JUSO_C': 1,
                });

            }


            GetComponent('DBGrid_비준가격집계표').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번')
            });


            GetComponent('DBGrid_비준가격').GetRowCount('비준가격_RowCount');


            SetValue('비준가격_RowCount', GetValue('비준가격_RowCount') - 1)


            GetComponent('DBGrid_비준가격').SetCurSel(GetNumber('비준가격_RowCount'));


            GetComponent('DBGrid_비준가격').SetEditFocus(GetNumber('비준가격_RowCount') - 1, 'b_size');


            if (true) {
                return false;
            }


        })

        const Combo_비준가격_본건요인_기타 = new Edit('Combo_비준가격_본건요인_기타', new JsonZoonData('Combo_비준가격_본건요인_기타', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_ETC_M', value: GetValue('Combo_비준가격_본건요인_기타')},
            ]);

        })

        const Combo_비준가격_표준지요인_기타 = new Edit('Combo_비준가격_표준지요인_기타', new JsonZoonData('Combo_비준가격_표준지요인_기타', {}), {
            isShow: true,
            isEnable: true
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'L_ETC_S', value: GetValue('Combo_비준가격_표준지요인_기타')},
            ]);

        })

        const Edit_비준가격_비교치_소재지 = new MaskEdit('Edit_비준가격_비교치_소재지', new JsonZoonData('Edit_비준가격_비교치_소재지', {}), {
            isShow: true,
            isEnable: true,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_비준가격').SetRow(-1, [
                {key: 'JUSO_C', value: GetValue('Edit_비준가격_비교치_소재지')},
            ]);


            MC_비준가격_요인합계();

        })

        const 감정가액산출地Ⅳ = new Edit('감정가액산출地Ⅳ', new JsonZoonData('감정가액산출地Ⅳ', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture31 = new Picture('Picture31', new JsonZoonData('Picture31', {}), {
            isShow: true,
            isEnable: false
        })
        const Label19 = new Label('Label19', new JsonZoonData('Label19', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_기타요인 = new DBGrid('DBGrid_기타요인', new JsonZoonData('Q_기타요인', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {

            GetComponent('DBGrid_기타요인').GetCurColName('00_TEMP_FIELD');


            if ((GetValue('00_TEMP_FIELD') == 'ASSESS_DESC')) {
                return false;
            }


            MC_기타요인_참조값_전체();


            MC_기타요인_최저최고();


            MC_기타요인_산정보정률();


            MC_평가액_참조값_전체();

        })
            .on('OnEnterKey', function () {

                GetComponent('DBGrid_기타요인').NextTab();

            })

        const Picture32 = new Picture('Picture32', new JsonZoonData('Picture32', {}), {
            isShow: true,
            isEnable: false
        })
        const Label21 = new Label('Label21', new JsonZoonData('Label21', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture33 = new Picture('Picture33', new JsonZoonData('Picture33', {}), {
            isShow: true,
            isEnable: false
        })
        const Label24 = new Label('Label24', new JsonZoonData('Label24', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_담보 = new DBGrid('DBGrid_담보', new JsonZoonData('Q_토지의표시', {}), {
            isShow: true,
            isEnable: true
        }).on('OnSelectChange', function () {

            GetComponent('DBGrid_담보').GetCurSel('그리드_IDX');


            MC_그리드_인덱스_Sync();

        })

        const Picture41 = new Picture('Picture41', new JsonZoonData('Picture41', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_기타요인').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'ASSESSRATE': 1
            });


            GetComponent('DBGrid_표준지공시지가').GetRowCount('표준지공시지가_RowCount');


            SetValue('표준지공시지가_RowCount', GetValue('표준지공시지가_RowCount') - 1)


            GetComponent('DBGrid_표준지공시지가').SetCurSel(GetNumber('표준지공시지가_RowCount'));


            GetComponent('DBGrid_표준지공시지가').SetEditFocus(GetNumber('표준지공시지가_RowCount') - 1, 'b_size');

        })

        const Picture42 = new Picture('Picture42', new JsonZoonData('Picture42', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_기타요인').GetCurSel('기타요인_RowPosition');


            GetComponent('DBGrid_기타요인').DeleteRow(GetNumber('기타요인_RowPosition'));

        })

        const DBGrid_평가액 = new DBGrid('DBGrid_평가액', new JsonZoonData('Q_토지의표시', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {

            GetComponent('DBGrid_평가액').GetRowCount('평가액_RowCount');


            for (SetValue('i', 0); GetValue('i') < GetNumber('평가액_RowCount'); SetValue('i', GetValue('i') + 1)) {
                MC_담보_참조값();
            }

        })
            .on('OnSelectChange', function () {

                GetComponent('DBGrid_평가액').GetCurSel('그리드_IDX');


                MC_그리드_인덱스_Sync();

            })

        const 감정가액산출建 = new Edit('감정가액산출建', new JsonZoonData('감정가액산출建', {}), {
            isShow: true,
            isEnable: true
        })
        const Table27 = new Edit('Table27', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table26 = new Edit('Table26', new JsonZoonData('Q_40_응찰입력표_마스타', {}), {
            isShow: true,
            isEnable: true
        })
        const Table28 = new Edit('Table28', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table29 = new Edit('Table29', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table25 = new Edit('Table25', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_건물단가_표준단가_용도 = new Combo('Combo_건물단가_표준단가_용도', new JsonZoonData('Q_코드_표준단가_용도', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            SetValue('건물단가_표준단가_용도', GetValue('Combo_건물단가_표준단가_용도'))
            SetValue('Edit_건물단가_표준단가_적용단가', null);


            RunQuery('Q_코드_표준단가_구조', {
                '건물단가_표준단가_용도': GetValue('건물단가_표준단가_용도')
            }, 'GET');


            SetValue('건물단가_표준단가_구조', GetValue('Combo_건물단가_표준단가_구조'))


            RunQuery('Q_코드_표준단가_급수', {
                '건물단가_표준단가_구조': GetValue('건물단가_표준단가_구조')
            }, 'GET');


            MC_건물단가_참조값();

        })

        const Combo_건물단가_표준단가_구조 = new Combo('Combo_건물단가_표준단가_구조', new JsonZoonData('Q_코드_표준단가_구조', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            SetValue('건물단가_표준단가_구조', GetValue('Combo_건물단가_표준단가_구조'))
            SetValue('Edit_건물단가_표준단가_적용단가', null)


            RunQuery('Q_코드_표준단가_급수', {
                '건물단가_표준단가_구조': GetValue('건물단가_표준단가_구조')
            }, 'GET');


            MC_건물단가_참조값();

        })

        const Combo_건물단가_표준단가_급수 = new Combo('Combo_건물단가_표준단가_급수', new JsonZoonData('Q_코드_표준단가_급수', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_표준단가_급수').FindIndex('건물단가_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_건물단가_표준단가_급수'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_표준단가_급수').GetRow(GetValue('건물단가_RowPosition'), [
                {key: 'Edit_건물단가_표준단가_적용단가', value: 'ATTR_01'},

                {key: 'Edit_건물단가_잔가율_내용년수', value: 'ATTR_02'},
            ]);


            MC_건물단가_참조값();

        })

        const Edit_건물단가_표준단가_적용단가 = new MaskEdit('Edit_건물단가_표준단가_적용단가', new JsonZoonData('Edit_건물단가_표준단가_적용단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_건물단가_부대설비_냉난방 = new Combo('Combo_건물단가_부대설비_냉난방', new JsonZoonData('Combo_건물단가_부대설비_냉난방', [
            { 'CD_DESC': 'Y',  'CD_CODE': 'Y' },
            { 'CD_DESC': 'N',  'CD_CODE': 'N' }
        ]), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {


            if (GetValue('Combo_건물단가_부대설비_냉난방') == "Y") {
                SetValue('Edit_건물단가_부대설비_냉난방', 30000)
            } else {
                SetValue('Edit_건물단가_부대설비_냉난방', 0)
            }


            MC_건물단가_참조값();

        })

        const Edit_건물단가_부대설비_냉난방 = new MaskEdit('Edit_건물단가_부대설비_냉난방', new JsonZoonData('Edit_건물단가_부대설비_냉난방', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_건물단가_부대설비_엘리베이터 = new Combo('Combo_건물단가_부대설비_엘리베이터', new JsonZoonData('Combo_건물단가_부대설비_엘리베이터', [
            { 'CD_DESC': 'Y',  'CD_CODE': 'Y' },
            { 'CD_DESC': 'N',  'CD_CODE': 'N' }
        ]), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {


            if (GetValue('Combo_건물단가_부대설비_엘리베이터') == "Y") {
                SetValue('Edit_건물단가_부대설비_엘리베이터', 50000)
            } else {
                SetValue('Edit_건물단가_부대설비_엘리베이터', 0)
            }


            MC_건물단가_참조값();

        })

        const Edit_건물단가_부대설비_엘리베이터 = new MaskEdit('Edit_건물단가_부대설비_엘리베이터', new JsonZoonData('Edit_건물단가_부대설비_엘리베이터', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_건물단가_부대설비_위생설비 = new Combo('Combo_건물단가_부대설비_위생설비', new JsonZoonData('Combo_건물단가_부대설비_위생설비', [
            { 'CD_DESC': 'Y',  'CD_CODE': 'Y' },
            { 'CD_DESC': 'N',  'CD_CODE': 'N' }
        ]), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {


            if (GetValue('Combo_건물단가_부대설비_위생설비') == "Y") {
                SetValue('Edit_건물단가_부대설비_위생설비', 30000)
            } else {
                SetValue('Edit_건물단가_부대설비_위생설비', 0)
            }


            MC_건물단가_참조값();

        })

        const Edit_건물단가_부대설비_위생설비 = new MaskEdit('Edit_건물단가_부대설비_위생설비', new JsonZoonData('Edit_건물단가_부대설비_위생설비', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_건물단가_부대설비_화재탐지 = new Combo('Combo_건물단가_부대설비_화재탐지', new JsonZoonData('Combo_건물단가_부대설비_화재탐지', [
            { 'CD_DESC': 'Y',  'CD_CODE': 'Y' },
            { 'CD_DESC': 'N',  'CD_CODE': 'N' }
        ]), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {


            if (GetValue('Combo_건물단가_부대설비_화재탐지') == "Y") {
                SetValue('Edit_건물단가_부대설비_화재탐지', 30000)
            } else {
                SetValue('Edit_건물단가_부대설비_화재탐지', 0)
            }


            MC_건물단가_참조값();

        })

        const Edit_건물단가_부대설비_화재탐지 = new MaskEdit('Edit_건물단가_부대설비_화재탐지', new JsonZoonData('Edit_건물단가_부대설비_화재탐지', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_건물단가_부대설비_기타 = new Combo('Combo_건물단가_부대설비_기타', new JsonZoonData('Combo_건물단가_부대설비_기타', [
            { 'CD_DESC': 'Y',  'CD_CODE': 'Y' },
            { 'CD_DESC': 'N',  'CD_CODE': 'N' }
        ]), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            MC_건물단가_참조값();

            // TODO: 참조값에 상태에 따른 옵션 동적업데이트 처리
            GetComponent('Edit_건물단가_부대설비_기타').updateOptions({
                isShow: true,
                isEnable : GetValue('Combo_건물단가_부대설비_기타') == 'Y'
            });
        })

        const Edit_건물단가_부대설비_기타 = new MaskEdit('Edit_건물단가_부대설비_기타', new JsonZoonData('Edit_건물단가_부대설비_기타', {}), {
            isShow: true,
            isEnable: (GetValue('Combo_건물단가_부대설비_기타') == 'Y'),
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_건물단가_참조값();

        })

        const Edit_건물단가_부대설비_총보정단가 = new MaskEdit('Edit_건물단가_부대설비_총보정단가', new JsonZoonData('Edit_건물단가_부대설비_총보정단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_건물단가_중개축여부_횟수 = new Combo('Combo_건물단가_중개축여부_횟수', new JsonZoonData('Q_코드_증개축횟수', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_증개축횟수').FindIndex('건물단가_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_건물단가_중개축여부_횟수'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_증개축횟수').GetRow(GetValue('건물단가_RowPosition'), [
                {key: 'Edit_건물단가_중개축여부_적용지수', value: 'ATTR_08'},
            ]);


            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수') * GetValue('Edit_건물단가_적용보정률'))


            MC_건물단가_참조값();

        })

        const Edit_건물단가_중개축여부_적용지수 = new MaskEdit('Edit_건물단가_중개축여부_적용지수', new JsonZoonData('Edit_건물단가_중개축여부_적용지수', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Combo_건물단가_관리상태_상중하 = new Combo('Combo_건물단가_관리상태_상중하', new JsonZoonData('Q_코드_관리상태', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_관리상태').FindIndex('건물단가_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_건물단가_관리상태_상중하'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관리상태').GetRow(GetValue('건물단가_RowPosition'), [
                {key: 'Edit_건물단가_관리상태_적용지수', value: 'ATTR_08'},
            ]);


            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수') * GetValue('Edit_건물단가_적용보정률'))
//SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수')*GetValue('Edit_건물단가_관리상태_적용지수'))


            MC_건물단가_참조값();

        })

        const Edit_건물단가_관리상태_적용지수 = new MaskEdit('Edit_건물단가_관리상태_적용지수', new JsonZoonData('Edit_건물단가_관리상태_적용지수', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_건물단가_적용보정률 = new MaskEdit('Edit_건물단가_적용보정률', new JsonZoonData('Edit_건물단가_적용보정률', {}),{
            isShow : true,
            isEnable : true,
            mask : ';7;#,###1.00',
            maskType : '숫자',
        }).on('OnChange', function() {

            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수')*GetValue('Edit_건물단가_관리상태_적용지수')*GetValue('Edit_건물단가_적용보정률'))
//SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수')*GetValue('Edit_건물단가_관리상태_적용지수'))


            MC_건물단가_참조값();

            if (GetValue('Edit_건물단가_적용보정률') == 1.00) {

                // GetComponent('Edit_건물단가_적용보정_사유').SetReadOnly(None);



                SetValue('Edit_건물단가_적용보정_사유', "")

            }

            if (GetValue('Edit_건물단가_적용보정률') != 1.00) {

                // GetComponent('Edit_건물단가_적용보정_사유').SetReadOnly(None);



            }

        })
            .on('OnLostFocus', function() {

                SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수')*GetValue('Edit_건물단가_관리상태_적용지수')*GetValue('Edit_건물단가_적용보정률'))
//SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수')*GetValue('Edit_건물단가_관리상태_적용지수'))


                MC_건물단가_참조값();

                if (GetValue('Edit_건물단가_적용보정률') == 1.00) {

                    GetComponent('Edit_건물단가_적용보정률_사유').SetReadOnly(1.0);



                    SetValue('Edit_건물단가_적용보정률_사유', "")

                }

                if (GetValue('Edit_건물단가_적용보정률') != 1.00) {

                    GetComponent('Edit_건물단가_적용보정률_사유').SetReadOnly(0.0);



                }

            })

        const Edit_건물단가_적용보정률_사유 = new Edit('Edit_건물단가_적용보정률_사유', new JsonZoonData('Edit_건물단가_적용보정률_사유', {}), {
            isShow: true,
            isEnable: false
        }).on('OnLostFocus', function () {

            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수') * GetValue('Edit_건물단가_적용보정률'))
//SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수')*GetValue('Edit_건물단가_관리상태_적용지수'))


            MC_건물단가_참조값();

        })

        const Edit_건물단가_총단가조정지수 = new MaskEdit('Edit_건물단가_총단가조정지수', new JsonZoonData('Edit_건물단가_총단가조정지수', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_건물단가_잔가율_건축년도 = new MaskEdit('Edit_건물단가_잔가율_건축년도', new JsonZoonData('Edit_건물단가_잔가율_건축년도', {}), {
            isShow: true,
            isEnable: false,
            mask: 'xxxxxxxx',
            maskType: '문자',
        })
        const Edit_건물단가_잔가율_경과년수 = new MaskEdit('Edit_건물단가_잔가율_경과년수', new JsonZoonData('Edit_건물단가_잔가율_경과년수', {}), {
            isShow: true,
            isEnable: false,
            mask: ';3;#,###1',
            maskType: '숫자',
        })
        const Edit_건물단가_잔가율_내용년수 = new MaskEdit('Edit_건물단가_잔가율_내용년수', new JsonZoonData('Edit_건물단가_잔가율_내용년수', {}), {
            isShow: true,
            isEnable: false,
            mask: ';3;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_건물단가_참조값();

        })

        const Edit_건물단가_잔가율_잔가율 = new MaskEdit('Edit_건물단가_잔가율_잔가율', new JsonZoonData('Edit_건물단가_잔가율_잔가율', {}), {
            isShow: true,
            isEnable: false,
            mask: ';3;#,###1.00',
            maskType: '숫자',
        })
        const Edit_건물단가_건물단가_산정단가 = new MaskEdit('Edit_건물단가_건물단가_산정단가', new JsonZoonData('Edit_건물단가_건물단가_산정단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_건물단가_건물단가_적용단가 = new MaskEdit('Edit_건물단가_건물단가_적용단가', new JsonZoonData('Edit_건물단가_건물단가_적용단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label35 = new Label('Label35', new JsonZoonData('Label35', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture45 = new Picture('Picture45', new JsonZoonData('Picture45', {}), {
            isShow: true,
            isEnable: false
        })
        const Label36 = new Label('Label36', new JsonZoonData('Label36', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture48 = new Picture('Picture48', new JsonZoonData('Picture48', {}), {
            isShow: true,
            isEnable: false
        })
        const DBGrid_건물평가액_집계표 = new DBGrid('DBGrid_건물평가액_집계표', new JsonZoonData('Q_건물평가액_집계표', {}), {
            isShow: true,
            isEnable: true
        }).on('OnSelectChange', function () {

            GetComponent('DBGrid_건물평가액_집계표').GetCurSel('건물_그리드_IDX');


            MC_건물_그리드_인덱스_Sync();

        })

        const Label37 = new Label('Label37', new JsonZoonData('Label37', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture49 = new Picture('Picture49', new JsonZoonData('Picture49', {}), {
            isShow: true,
            isEnable: false
        })
        const DBGrid_담보_건물 = new DBGrid('DBGrid_담보_건물', new JsonZoonData('Q_담보_건축', {}),{
            isShow : false,
            isEnable : true
        }).on('OnEditChanged', function() {

            MC_담보_건물_Group();


            MC_보정표_예상낙찰가();

        })
            .on('OnSelectChange', function() {

                GetComponent('DBGrid_담보_건물').GetCurSel('건물_그리드_IDX');


                MC_건물_그리드_인덱스_Sync();

            })

        const Table30 = new Edit('Table30', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_담보_건물_Group = new DBGrid('DBGrid_담보_건물_Group', new JsonZoonData('Q_담보_건축_Group', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_건물단가 = new DBGrid('DBGrid_건물단가', new JsonZoonData('Q_건물단가', {}),{
            isShow : true,
            isEnable : true
        }).on('OnEditChanged', function() {

            GetComponent('DBGrid_기준가격').GetCurColName('기준가격_ColName');

            // None

            MC_기준가격_집계표();


            MC_건물평가액_집계표();

        })
            .on('OnSelectChange', function() {

                GetComponent('DBGrid_건물단가').GetCurSel('건물_그리드_IDX');


                MC_건물_그리드_인덱스_Sync();


                MC_건물단가_항목변경();

            })

        const 입력표 = new Edit('입력표', new JsonZoonData('입력표', {}), {
            isShow: true,
            isEnable: true
        })
        const Table1 = new Edit('Table1', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table2 = new Edit('Table2', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_토지의표시 = new DBGrid('DBGrid_토지의표시', new JsonZoonData('Q_토지의표시', {}), {
            isShow: true,
            isEnable: true
        }).on('OnButtonClick', function () {

            SetValue('주소구분', "2")


            GetComponent('SubForm_주소조회').ShowSubForm(() => {
            });

        })
            .on('OnEditChanged', function () {

                GetComponent('DBGrid_토지의표시').GetCurSel('토지의표시_RowPosition');


                GetComponent('DBGrid_토지의표시').GetCurSel('i');


                GetComponent('DBGrid_토지의표시').GetRow(GetNumber('토지의표시_RowPosition'), [
                    {key: '토지의표시_순번', value: 'LN_SEQ'},

                    {key: '토지의표시_일단지구분', value: 'POT_GU'},

                    {key: '토지의표시_최소행정구역', value: 'MIN_BOUND'},

                    {key: '토지의표시_지번', value: 'LOT_NUM'},

                    {key: '토지의표시_지목', value: 'LCATEGORY'},

                    {key: '토지의표시_면적', value: 'L_SIZE'},

                    {key: '토지의표시_면적_평', value: 'L_SIZE_PY'},

                    {key: '토지의표시_개별공시지가', value: 'ANNO_DAN'},

                    {key: '토지의표시_개별공시지가_평', value: 'ANNO_DAN_PY'},

                    {key: '토지의표시_개별공시지가_총', value: 'ANNO_AMT'},
                ]);


                GetComponent('DBGrid_토지의표시').GetRowCount('토지의표시_RowCount');


                MC_본건토지_자동추가();


                MC_담보제공비율_전체면적();


                MC_토지의표시_자동연산();


                MC_Combo_일단지구분();


                MC_기준가격_참조값_본건();


                MC_비준가격_참조값_본건();


                MC_평가액_참조값();


                MC_토지의표시_전체합계();


                MC_토지배당금M_참조값();


                SetValue('응찰_수지_보유비용_종부세적용면적', GetValue('Edit_토지의표시_합계_면적'));


                RunButton('Command_응찰_02_이벤트');

            })
            .on('OnEnterKey', function () {

                GetComponent('DBGrid_토지의표시').NextTab();

            })
            .on('OnSelectChange', function () {

                GetComponent('DBGrid_토지의표시').GetCurSel('그리드_IDX');


                MC_그리드_인덱스_Sync();

            })

        const Table20 = new Edit('Table20', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table15 = new Edit('Table15', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table24 = new Edit('Table24', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_건물의표시 = new DBGrid('DBGrid_건물의표시', new JsonZoonData('Q_건물의표시', {}),{
            isShow : true,
            isEnable : true
        }).on('OnButtonClick', function() {

            SetValue('주소구분', "2")


            GetComponent('SubForm_주소조회').ShowSubForm(() => {});

        })
            .on('OnEditChanged', function() {

                GetComponent('DBGrid_건물의표시').GetCurSel('건물의표시_RowPosition');


                GetComponent('DBGrid_건물의표시').GetRow(GetNumber('건물의표시_RowPosition'), [
                    { key: '건물의표시_등기구분', value: 'REGI_GU' },

                    { key: '건물의표시_지번', value: 'LOT_NUM' },

                    { key: '건물의표시_면적', value: 'CB_SIZE' },
                ]);


                GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');


                MC_건물의표시_자동연산();


                MC_건물단가_참조값();


                GetComponent('DBGrid_건물의표시').GetRows("", [
                    { key: '00_TNUM', value: 'CB_SIZE' },
                    { key: '01_TNUM', value: 'CB_SIZE_PY' },
                ]);


                SetValue('00_NUMBER', Sum('00_TNUM'))
                SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_총액')/GetValue('00_NUMBER'))
                SetValue('Edit_개별주택가격_단가', Round(GetValue('Edit_개별주택가격_단가')/1000,0))
                SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_단가')*1000)
                SetValue('00_NUMBER', Sum('01_TNUM'))
                SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_총액')/GetValue('00_NUMBER'))
                SetValue('Edit_개별주택가격_평당단가', Round(GetValue('Edit_개별주택가격_평당단가')/1000,0))
                SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_평당단가')*1000)

                SetValue('Edit_건물의표시_합계_면적', Sum('00_TNUM'))
                SetValue('Edit_건물의표시_합계_면적_평', Sum('01_TNUM'))


                MC_건물배당금M_참조값();


                if (true) {
                    return false;
                }



                MC_담보제공비율_건물_전체면적();


                MC_건물평가액_집계표();


                MC_담보제공비율_건물_비율();

            })
            .on('OnEnterKey', function() {

                GetComponent('DBGrid_건물의표시').NextTab();

            })
            .on('OnSelectChange', function() {

                GetComponent('DBGrid_건물의표시').GetCurSel('건물_그리드_IDX');


                MC_건물_그리드_인덱스_Sync();

            })

        const Table22 = new Edit('Table22', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table4 = new Edit('Table4', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const Table21 = new Edit('Table21', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_담보제공비율 = new DBGrid('DBGrid_담보제공비율', new JsonZoonData('Q_담보제공비율', {}),{
            isShow : true,
            isEnable : true
        }).on('OnEditChanged', function() {

            MC_담보제공비율_비율();

        })
            .on('OnEnterKey', function() {

                GetComponent('DBGrid_담보제공비율').NextTab();

            })
            .on('OnSelectChange', function() {

                GetComponent('DBGrid_담보제공비율').GetCurSel('그리드_IDX');


                MC_그리드_인덱스_Sync();

            })

        const Table23 = new Edit('Table23', new JsonZoonData('Q_결재진행현황', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_담보제공비율_건물 = new DBGrid('DBGrid_담보제공비율_건물', new JsonZoonData('Q_담보제공비율_건물', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {

            MC_담보제공비율_건물_비율();


            MC_보정표_예상낙찰가();

        })
            .on('OnEnterKey', function () {

                GetComponent('DBGrid_담보제공비율_건물').NextTab();

            })

        const 입력표_업소구분 = new JsonZoonData('입력표_업소구분', [
            {'CD_CODE': '1', 'CD_DESC':'업소'},
            {'CD_CODE': '0', 'CD_DESC':'자체'}
        ]);
        const Combo_입력표_업소구분 = new Combo('Combo_입력표_업소구분', 입력표_업소구분, {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {
            if (GetValue('Combo_입력표_업소구분') == "0") {

                GetComponent('Edit_업소명').SetReadOnly(1.0);


                SetValue('Edit_업소명', '자체');


                GetComponent('Edit_업소대표자').SetReadOnly(1.0);


                SetValue('Edit_업소대표자', GetValue('Edit_대표자'));


                SetFocus('Edit_업소명');

            }

            if (GetValue('Combo_입력표_업소구분') == "1") {

                GetComponent('Edit_업소명').SetReadOnly(0.0);


                GetComponent('Edit_업소대표자').SetReadOnly(0.0);


                SetValue('Edit_업소명', "");


                SetValue('Edit_업소대표자', "");


                SetFocus('Edit_업소명');

            }

            if (isEmpty(GetValue('Combo_입력표_업소구분'))) {

                GetComponent('Edit_업소명').SetReadOnly(1.0);


                SetValue('Edit_업소명', '자체');


                GetComponent('Edit_업소대표자').SetReadOnly(1.0);


                SetValue('Edit_업소대표자', GetValue('Edit_대표자'));


                SetFocus('Edit_업소명');

            }

        })

        const Edit_업소명 = new Edit('Edit_업소명', new JsonZoonData('Edit_업소명', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_업소대표자 = new Edit('Edit_업소대표자', new JsonZoonData('Edit_업소대표자', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_채무자 = new Edit('Edit_채무자', new JsonZoonData('Edit_채무자', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_담보제공자 = new Edit('Edit_담보제공자', new JsonZoonData('Edit_담보제공자', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_채무자와담보제공자의관계 = new Edit('Edit_채무자와담보제공자의관계', new JsonZoonData('Edit_채무자와담보제공자의관계', {}), {
            isShow: true,
            isEnable: true
        })
        SetValue('Edit_채무자와담보제공자의관계', '채무자 본인');
        const Edit_국토의계획 = new Edit('Edit_국토의계획', new JsonZoonData('Edit_국토의계획', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_다른법률등 = new Edit('Edit_다른법률등', new JsonZoonData('Edit_다른법률등', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_시행령부칙 = new Edit('Edit_시행령부칙', new JsonZoonData('Edit_시행령부칙', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_토지이용규제 = new Edit('Edit_토지이용규제', new JsonZoonData('Edit_토지이용규제', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_주변토지의주된 = new Edit('Edit_주변토지의주된', new JsonZoonData('Edit_주변토지의주된', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_건물의주된용도 = new Edit('Edit_건물의주된용도', new JsonZoonData('Edit_건물의주된용도', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_실거래가격_총액 = new MaskEdit('Edit_실거래가격_총액', new JsonZoonData('Edit_실거래가격_총액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('Edit_실거래가격_단가', GetValue('Edit_실거래가격_총액') / GetValue('Edit_토지의표시_합계_면적'))
            SetValue('Edit_실거래가격_단가', Round(GetValue('Edit_실거래가격_단가') / 1000, 0))
            SetValue('Edit_실거래가격_단가', GetValue('Edit_실거래가격_단가') * 1000)
            SetValue('Edit_실거래가격_평당단가', GetValue('Edit_실거래가격_총액') / GetValue('Edit_토지의표시_합계_면적_평'))
            SetValue('Edit_실거래가격_평당단가', Round(GetValue('Edit_실거래가격_평당단가') / 1000, 0))
            SetValue('Edit_실거래가격_평당단가', GetValue('Edit_실거래가격_평당단가') * 1000)

        })

        const Edit_개별주택가격_총액 = new MaskEdit('Edit_개별주택가격_총액', new JsonZoonData('Edit_개별주택가격_총액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            GetComponent('DBGrid_건물의표시').GetRows("", [
                {key: '00_TNUM', value: 'CB_SIZE'},

                {key: '01_TNUM', value: 'CB_SIZE_PY'},
            ]);


            SetValue('00_NUMBER', Sum('00_TNUM'))
            SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_총액') / GetValue('00_NUMBER'))
            SetValue('Edit_개별주택가격_단가', Round(GetValue('Edit_개별주택가격_단가') / 1000, 0))
            SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_단가') * 1000)
            SetValue('00_NUMBER', Sum('01_TNUM'))
            SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_총액') / GetValue('00_NUMBER'))
            SetValue('Edit_개별주택가격_평당단가', Round(GetValue('Edit_개별주택가격_평당단가') / 1000, 0))
            SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_평당단가') * 1000)

        })

        const Picture1 = new Picture('Picture1', new JsonZoonData('Picture1', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_거래처 = new Edit('Edit_거래처', new JsonZoonData('Edit_거래처', {}), {
            isShow: true,
            isEnable: false
        })
        const Combo_가임대보증금_주택 = new Combo('Combo_가임대보증금_주택', new JsonZoonData('Q_코드_주택_가임대보증금', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            SetValue('Combo_배당표_가임대보증금적용범위', GetValue('Combo_가임대보증금_주택'))


            GetZoonData('Q_코드_가임대보증금적용범위').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_가임대보증금적용범위'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_가임대보증금적용범위').GetRow(GetValue('배당표_주택임대차보증금_RowPosition'), [
                {key: 'Edit_배당표_적용할주택가임대보증금액', value: 'ATTR_02'},
            ]);


            MC_배당표_주택임대차보증금_계산_전체();


            MC_배당표_배당금_기본항목자동설정();

        })

        const Label1 = new Label('Label1', new JsonZoonData('Label1', {}), {
            isShow: true,
            isEnable: true
        })
        const Label2 = new Label('Label2', new JsonZoonData('Label2', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture2 = new Picture('Picture2', new JsonZoonData('Picture2', {}), {
            isShow: true,
            isEnable: false
        })
        const Label3 = new Label('Label3', new JsonZoonData('Label3', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture3 = new Picture('Picture3', new JsonZoonData('Picture3', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_대표자 = new Edit('Edit_대표자', new JsonZoonData('Edit_대표자', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture4 = new Picture('Picture4', new JsonZoonData('Picture4', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('SubForm_거래처조회').ShowSubForm(() => {
            });

        })

        const Edit_소재지 = new Edit('Edit_소재지', new JsonZoonData('Edit_소재지', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_실거래가격_단가 = new MaskEdit('Edit_실거래가격_단가', new JsonZoonData('Edit_실거래가격_단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_실거래가격_평당단가 = new MaskEdit('Edit_실거래가격_평당단가', new JsonZoonData('Edit_실거래가격_평당단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Picture21 = new Picture('Picture21', new JsonZoonData('Picture21', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {
            SetValue('주소구분', "1")
            GetComponent('SubForm_주소조회').ShowSubForm(() => {
            });
        })

        const Picture13 = new Picture('Picture13', new JsonZoonData('Picture13', {}), {
            isShow: true,
            isEnable: false
        })
        const Label10 = new Label('Label10', new JsonZoonData('Label10', {}), {
            isShow: true,
            isEnable: true
        })
        const Label12 = new Label('Label12', new JsonZoonData('Label12', {}), {
            isShow: true,
            isEnable: true
        })
        const Label16 = new Label('Label16', new JsonZoonData('Label16', {}), {
            isShow: true,
            isEnable: true
        })
        const Label20 = new Label('Label20', new JsonZoonData('Label20', {}), {
            isShow: true,
            isEnable: true
        })
        const Command_본건_삭제 = new Picture('Command_본건_삭제', new JsonZoonData('Command_본건_삭제', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_토지의표시').GetCurSel('토지의표시_RowPosition');


            MC_배당표_배당금_삭제M_전체();


            GetComponent('DBGrid_토지의표시').DeleteRow(GetNumber('토지의표시_RowPosition'));


            GetComponent('DBGrid_담보제공비율').DeleteRow(GetNumber('토지의표시_RowPosition'));


            GetComponent('DBGrid_본건토지').DeleteRow(GetNumber('토지의표시_RowPosition'));


            GetComponent('DBGrid_평가액').DeleteRow(GetNumber('토지의표시_RowPosition'));


            GetComponent('DBGrid_담보').DeleteRow(GetNumber('토지의표시_RowPosition'));


            GetComponent('DBGrid_배당금_계산M').DeleteRow(GetNumber('토지의표시_RowPosition'));


            GetComponent('DBGrid_감정가액산출내역').DeleteRow(GetNumber('토지의표시_RowPosition'));


            GetComponent('DBGrid_토지의표시').GetCurSel('토지의표시_RowPosition');


            GetComponent('DBGrid_토지의표시').GetRow(GetNumber('토지의표시_RowPosition'), [
                {key: '토지의표시_순번', value: 'LN_SEQ'},

                {key: '토지의표시_일단지구분', value: 'POT_GU'},

                {key: '토지의표시_최소행정구역', value: 'MIN_BOUND'},

                {key: '토지의표시_지번', value: 'LOT_NUM'},

                {key: '토지의표시_지목', value: 'LCATEGORY'},

                {key: '토지의표시_면적', value: 'L_SIZE'},

                {key: '토지의표시_면적_평', value: 'L_SIZE_PY'},

                {key: '토지의표시_개별공시지가', value: 'ANNO_DAN'},

                {key: '토지의표시_개별공시지가_평', value: 'ANNO_DAN_PY'},

                {key: '토지의표시_개별공시지가_총', value: 'ANNO_AMT'},
            ]);


            GetComponent('DBGrid_토지의표시').GetRowCount('토지의표시_RowCount');


            MC_본건토지_자동추가();


            MC_담보제공비율_전체면적();


            MC_토지의표시_자동연산();


            MC_Combo_일단지구분();


            MC_기준가격_참조값_본건();


            MC_비준가격_참조값_본건();


            MC_평가액_참조값();


            MC_토지의표시_전체합계();


            MC_토지배당금M_참조값();


            MC_Combo_일단지구분();


            MC_토지의표시_전체합계();


            if (true) {
                return false;
            }


            MC_담보제공비율_전체면적();

        })

        const Edit_토지의표시_합계_면적_평 = new MaskEdit('Edit_토지의표시_합계_면적_평', new JsonZoonData('Edit_토지의표시_합계_면적_평', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_토지의표시_합계_개별공시지가_면적 = new MaskEdit('Edit_토지의표시_합계_개별공시지가_면적', new
        JsonZoonData('Edit_토지의표시_합계_개별공시지가_면적', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_토지의표시_합계_개별공시지가 = new MaskEdit('Edit_토지의표시_합계_개별공시지가', new JsonZoonData('Edit_토지의표시_합계_개별공시지가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_토지의표시_합계_개별공시지가_면적_평 = new MaskEdit('Edit_토지의표시_합계_개별공시지가_면적_평', new
        JsonZoonData('Edit_토지의표시_합계_개별공시지가_면적_평', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_토지의표시_합계_면적 = new MaskEdit('Edit_토지의표시_합계_면적', new JsonZoonData('Edit_토지의표시_합계_면적', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Picture43 = new Picture('Picture43', new JsonZoonData('Picture43', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_건물의표시').GetRows("", [
                {key: '건물의표시_건물의표시순번_Arr', value: 'LN_SEQ'},
            ]);


            SetValue('건물의표시_건물의표시순번', Max('건물의표시_건물의표시순번_Arr') + 1)


            GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');

            if (GetValue('건물의표시_RowCount') <= 0) {

                GetComponent('DBGrid_토지의표시').GetRow(0, [
                    {key: '건물의표시_지번', value: 'LOT_NUM'},
                ]);


                GetComponent('DBGrid_건물의표시').AddRow({
                    'YYYY': GetValue('년도'),
                    'SEQ': GetValue('감정순번'),
                    'LN_SEQ': GetValue('건물의표시_건물의표시순번'),
                    'LOT_NUM': GetValue('건물의표시_지번')
                });

            }else if (GetValue('건물의표시_RowCount') > 0) {

                GetComponent('DBGrid_건물의표시').GetRow(-1, [
                    {key: '건물의표시_등기구분', value: 'REGI_GU'},

                    {key: '건물의표시_지번', value: 'LOT_NUM'},

                    {key: '건물의표시_건축년도', value: 'CB_DATE'},

                    {key: '건물의표시_구조', value: 'CB_STRUC'},

                    {key: '건물의표시_지붕', value: 'CB_ROOF'},
                ]);


                GetComponent('DBGrid_건물의표시').AddRow({
                    'YYYY': GetValue('년도'),
                    'SEQ': GetValue('감정순번'),
                    'LN_SEQ': GetValue('건물의표시_건물의표시순번'),
                    'CB_USE_MAIN': GetValue('Edit_건물의주된용도'),
                    'REGI_GU': GetValue('건물의표시_등기구분'),
                    'LOT_NUM': GetValue('건물의표시_지번'),
                    'CB_DATE': GetValue('건물의표시_건축년도'),
                    'CB_STRUC': GetValue('건물의표시_구조'),
                    'CB_ROOF': GetValue('건물의표시_지붕')
                });

            }


            GetComponent('DBGrid_담보_건물').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('건물의표시_건물의표시순번')
            });


            GetComponent('DBGrid_건물단가').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('건물의표시_건물의표시순번'),
                'DAN_REBUIL_YN': 0,
                'DAN_MANAGE_YN': 2,
                'SUB_AIRCON_YN': 'N',
                'SUB_ELEVAT_YN': 'N',
                'SUB_ETC_YN': 'N',
                'SUB_HYDRAN_YN': 'N',
                'SUB_SANITA_YN': 'N'
            });


            GetComponent('DBGrid_건물평가액_집계표').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('건물의표시_건물의표시순번')
            });


            GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');


            SetValue('건물의표시_RowCount', GetValue('건물의표시_RowCount') - 1)


            GetComponent('DBGrid_건물의표시').SetCurSel(GetNumber('건물의표시_RowCount'));


            GetComponent('DBGrid_건물의표시').SetEditFocus(GetNumber('건물의표시_RowCount') - 1, 'b_size');


            GetComponent('DBGrid_건물의표시').GetCurSel('건물의표시_RowPosition');


            GetComponent('DBGrid_건물의표시').GetRow(GetNumber('건물의표시_RowPosition'), [
                {key: '건물의표시_등기구분', value: 'REGI_GU'},

                {key: '건물의표시_지번', value: 'LOT_NUM'},

                {key: '건물의표시_면적', value: 'CB_SIZE'},
            ]);


            GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');


            MC_건물의표시_자동연산();


            MC_건물단가_참조값();


            MC_건물평가액_집계표();


            GetComponent('DBGrid_건물의표시').GetRows("", [
                {key: '00_TNUM', value: 'CB_SIZE'},

                {key: '01_TNUM', value: 'CB_SIZE_PY'},
            ]);


            SetValue('00_NUMBER', Sum('00_TNUM'))
            SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_총액') / GetValue('00_NUMBER'))
            SetValue('Edit_개별주택가격_단가', Round(GetValue('Edit_개별주택가격_단가') / 1000, 0))
            SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_단가') * 1000)
            SetValue('00_NUMBER', Sum('01_TNUM'))
            SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_총액') / GetValue('00_NUMBER'))
            SetValue('Edit_개별주택가격_평당단가', Round(GetValue('Edit_개별주택가격_평당단가') / 1000, 0))
            SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_평당단가') * 1000)


            GetZoonData('Q_코드_증개축횟수').FindIndex('건물단가_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_건물단가_중개축여부_횟수'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_증개축횟수').GetRow(GetValue('건물단가_RowPosition'), [
                {key: 'Edit_건물단가_중개축여부_적용지수', value: 'ATTR_08'},
            ]);


            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수'))


            GetZoonData('Q_코드_관리상태').FindIndex('건물단가_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_건물단가_관리상태_상중하'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_관리상태').GetRow(GetValue('건물단가_RowPosition'), [
                {key: 'Edit_건물단가_관리상태_적용지수', value: 'ATTR_08'},
            ]);


            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수'))


            MC_건물단가_참조값();


            GetComponent('DBGrid_배당금건물_계산M').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('건물의표시_건물의표시순번')
            });


            MC_건물배당금M_참조값();


            if (true) {
                return false;
            }


            MC_배당표_배당금건물_계산_기초데이터();


            GetComponent('DBGrid_담보제공비율_건물').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('건물의표시_건물의표시순번')
            });


            MC_담보제공비율_건물_비율();


            MC_담보제공비율_건물_전체면적();

        })

        const Picture44 = new Picture('Picture44', new JsonZoonData('Picture44', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_건물의표시').GetCurSel('건물의표시_RowPosition');


            MC_배당표_배당금건물_삭제M_전체();


            GetComponent('DBGrid_건물의표시').DeleteRow(GetNumber('건물의표시_RowPosition'));


            GetComponent('DBGrid_건물단가').DeleteRow(GetNumber('건물의표시_RowPosition'));


            GetComponent('DBGrid_건물평가액_집계표').DeleteRow(GetNumber('건물의표시_RowPosition'));


            GetComponent('DBGrid_담보_건물').DeleteRow(GetNumber('건물의표시_RowPosition'));


            GetComponent('DBGrid_건물의표시').GetCurSel('건물의표시_RowPosition');


            GetComponent('DBGrid_건물의표시').GetRow(GetNumber('건물의표시_RowPosition'), [
                {key: '건물의표시_등기구분', value: 'REGI_GU'},

                {key: '건물의표시_지번', value: 'LOT_NUM'},

                {key: '건물의표시_면적', value: 'CB_SIZE'},
            ]);


            GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');


            MC_건물의표시_자동연산();


            MC_건물평가액_집계표();


            GetComponent('DBGrid_건물의표시').GetRows("", [
                {key: '00_TNUM', value: 'CB_SIZE'},

                {key: '01_TNUM', value: 'CB_SIZE_PY'},
            ]);


            SetValue('00_NUMBER', Sum('00_TNUM'))
            SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_총액') / GetValue('00_NUMBER'))
            SetValue('Edit_개별주택가격_단가', Round(GetValue('Edit_개별주택가격_단가') / 1000, 0))
            SetValue('Edit_개별주택가격_단가', GetValue('Edit_개별주택가격_단가') * 1000)
            SetValue('00_NUMBER', Sum('01_TNUM'))
            SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_총액') / GetValue('00_NUMBER'))
            SetValue('Edit_개별주택가격_평당단가', Round(GetValue('Edit_개별주택가격_평당단가') / 1000, 0))
            SetValue('Edit_개별주택가격_평당단가', GetValue('Edit_개별주택가격_평당단가') * 1000)


            GetComponent('DBGrid_담보_건물').GetRowCount('00_RowIndex');

            if (GetValue('00_RowIndex') <= 0) {

                MC_담보_건물_Group();

            }


            if (true) {
                return false;
            }


            MC_건물단가_참조값();


            MC_건물배당금M_참조값();


            GetComponent('DBGrid_배당금건물_계산M').DeleteRow(GetNumber('건물의표시_RowPosition'));


            GetComponent('DBGrid_담보제공비율_건물').DeleteRow(GetNumber('건물의표시_RowPosition'));


            MC_담보제공비율_건물_전체면적();


            MC_담보제공비율_건물_비율();

        })

        const Label32 = new Label('Label32', new JsonZoonData('Label32', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_개별주택가격_단가 = new MaskEdit('Edit_개별주택가격_단가', new JsonZoonData('Edit_개별주택가격_단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label33 = new Label('Label33', new JsonZoonData('Label33', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_개별주택가격_평당단가 = new MaskEdit('Edit_개별주택가격_평당단가', new JsonZoonData('Edit_개별주택가격_평당단가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label34 = new Label('Label34', new JsonZoonData('Label34', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_가임대보증금_상가 = new Combo('Combo_가임대보증금_상가', new JsonZoonData('Q_코드_상가_가임대보증금', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            SetValue('Combo_배당표_상가_가임대보증금_적용범위', GetValue('Combo_가임대보증금_상가'))


            GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_상가_가임대보증금_적용범위'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetValue('배당표_상가_RowPosition'), [
                {key: 'Edit_배당표_적용할상가가임대보증금액', value: 'ATTR_02'},

                {key: 'Edit_배당표_상가_가임대보증금_적용범위', value: 'ATTR_04'},
            ]);


            MC_배당표_상가임대차보증금_계산_전체();


            MC_배당표_배당금_기본항목자동설정();

        })

        const Edit_재감정여부 = new Edit('Edit_재감정여부', new JsonZoonData('Edit_재감정여부', {}), {
            isShow: true,
            isEnable: false
        })
        const Command_본건_추가 = new Picture('Command_본건_추가', new JsonZoonData('Command_본건_추가', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_토지의표시').GetRows("", [
                {key: '토지의표시_순번_Arr', value: 'LN_SEQ'},
            ]);


            SetValue('토지의표시_순번', Max('토지의표시_순번_Arr') + 1)


            GetComponent('DBGrid_토지의표시').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('토지의표시_순번'),
                'MIN_BOUND': GetValue('Edit_소재지')
            });


            GetComponent('DBGrid_담보제공비율').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('토지의표시_순번')
            });


            GetComponent('DBGrid_본건토지').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('토지의표시_순번'),
                'MIN_BOUND': GetValue('Edit_소재지')
            });


            GetComponent('DBGrid_평가액').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('토지의표시_순번')
            });


            GetComponent('DBGrid_담보').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('토지의표시_순번')
            });


            GetComponent('DBGrid_배당금_계산M').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('토지의표시_순번')
            });


            GetComponent('DBGrid_감정가액산출내역').AddRow({
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'LN_SEQ': GetValue('토지의표시_순번'),
                'NAME': '토지'
            });


            GetComponent('DBGrid_토지의표시').GetRowCount('토지의표시_RowCount');


            SetValue('토지의표시_RowCount', GetValue('토지의표시_RowCount') - 1)


            GetComponent('DBGrid_토지의표시').SetCurSel(GetNumber('토지의표시_RowCount'));


            GetComponent('DBGrid_토지의표시').SetEditFocus(GetNumber('토지의표시_RowCount') - 1, 'b_size');


            MC_배당표_배당금_계산_기초데이터();

        })

        const Edit_거래처코드 = new Edit('Edit_거래처코드', new JsonZoonData('Edit_거래처코드', {}), {
            isShow: true,
            isEnable: false
        })
        const Label50 = new Label('Label50', new JsonZoonData('Label50', {}), {
            isShow: (GetValue('담보종류') != 301),
            isEnable: true
        })
        const Label51 = new Label('Label51', new JsonZoonData('Label51', {}), {
            isShow: (GetValue('담보종류') != 201),
            isEnable: true
        })
        const Command1 = new Command('Command1', new JsonZoonData('Command1', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');


            EmptyArray('건물의표시_등기구분_Arr')
            EmptyArray('건물의표시_지번_Arr')


            for (SetValue('i', 0); GetValue('i') < GetNumber('건물의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
                MC_담보제공비율_건물_등기구분();
            }


            for (SetValue('i', GetNumber('건물의표시_RowCount') - 1); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
                MC_담보제공비율_건물_등기구분_DeleteRow();
            }


            SetValue('건물의표시_RowCount', GetArrayCnt('건물의표시_등기구분_Arr'))


            for (SetValue('i', 0); GetValue('i') < GetNumber('건물의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
                MC_담보제공비율_건물_등기구분_AddRow();
            }


            MC_담보제공비율_건물_비율();

        })

        const Label74 = new Label('Label74', new JsonZoonData('Label74', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_건물의표시_합계_면적_평 = new MaskEdit('Edit_건물의표시_합계_면적_평', new JsonZoonData('Edit_건물의표시_합계_면적_평', {}), {
            isShow: false,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Edit_건물의표시_합계_면적 = new MaskEdit('Edit_건물의표시_합계_면적', new JsonZoonData('Edit_건물의표시_합계_면적', {}), {
            isShow: false,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const 응찰입력표 = new Edit('응찰입력표', new JsonZoonData('응찰입력표', {}), {
            isShow: true,
            isEnable: true
        })
        const Table41 = new Edit('Table41', new JsonZoonData('Table41', {}), {
            isShow: true,
            isEnable: true
        })
        const Table42 = new Edit('Table42', new JsonZoonData('Table42', {}), {
            isShow: true,
            isEnable: true
        })
        const Table43 = new Edit('Table43', new JsonZoonData('Table43', {}), {
            isShow: true,
            isEnable: true
        })
        const Table44 = new Edit('Table44', new JsonZoonData('Table44', {}), {
            isShow: true,
            isEnable: true
        })
        const Table45 = new Edit('Table45', new JsonZoonData('Table45', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_사항_사건번호 = new Edit('응찰_사항_사건번호', new JsonZoonData('응찰_사항_사건번호', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_사항_관할법원 = new Edit('응찰_사항_관할법원', new JsonZoonData('응찰_사항_관할법원', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_사항_경매구분 = new Edit('응찰_사항_경매구분', new JsonZoonData('응찰_사항_경매구분', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_사항_경매계 = new Edit('응찰_사항_경매계', new JsonZoonData('응찰_사항_경매계', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_사항_전화번호 = new Edit('응찰_사항_전화번호', new JsonZoonData('응찰_사항_전화번호', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_사항_경매신청채권자 = new Edit('응찰_사항_경매신청채권자', new JsonZoonData('응찰_사항_경매신청채권자', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_사항_청구금액 = new MaskEdit('응찰_사항_청구금액', new JsonZoonData('응찰_사항_청구금액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_사항_경매개시등기일 = new MaskEdit('응찰_사항_경매개시등기일', new JsonZoonData('응찰_사항_경매개시등기일', {}), {
            isShow: true,
            isEnable: true,
            mask: '',
            maskType: '',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일'))) - Days(StrToDate(GetValue('MkEdit_입력표_건축일자')))) / 365)
            SetValue('본건_MkEdit_건축년도', Left(GetValue('MkEdit_입력표_건축일자'), 4))
            SetValue('본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'))
            SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'))


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const 응찰_사항_유입시특이사항 = new Edit('응찰_사항_유입시특이사항', new JsonZoonData('응찰_사항_유입시특이사항', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_내용_토지_금액 = new MaskEdit('응찰_내용_토지_금액', new JsonZoonData('응찰_내용_토지_금액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_내용_건물_금액 = new MaskEdit('응찰_내용_건물_금액', new JsonZoonData('응찰_내용_건물_금액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_집계표_최고채권액 = new MaskEdit('응찰_집계표_최고채권액', new JsonZoonData('응찰_집계표_최고채권액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_선순위자채권최고액 = new MaskEdit('응찰_집계표_선순위자채권최고액', new JsonZoonData('응찰_집계표_선순위자채권최고액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_선순위자배당금 = new MaskEdit('응찰_집계표_선순위자배당금', new JsonZoonData('응찰_집계표_선순위자배당금', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_당사채권최고액 = new MaskEdit('응찰_집계표_당사채권최고액', new JsonZoonData('응찰_집계표_당사채권최고액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_당사배당금 = new MaskEdit('응찰_집계표_당사배당금', new JsonZoonData('응찰_집계표_당사배당금', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_감정일 = new MaskEdit('응찰_개요_지점_감정일', new JsonZoonData('응찰_개요_지점_감정일', {}), {
            isShow: true,
            isEnable: true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일'))) - Days(StrToDate(GetValue('MkEdit_입력표_건축일자')))) / 365)
            SetValue('본건_MkEdit_건축년도', Left(GetValue('MkEdit_입력표_건축일자'), 4))
            SetValue('본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'))
            SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'))


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const 응찰_개요_지점_담당자 = new Edit('응찰_개요_지점_담당자', new JsonZoonData('응찰_개요_지점_담당자', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_지점_파트장 = new Edit('응찰_개요_지점_파트장', new JsonZoonData('응찰_개요_지점_파트장', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_지점_팀장 = new Edit('응찰_개요_지점_팀장', new JsonZoonData('응찰_개요_지점_팀장', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_지점_지점장 = new Edit('응찰_개요_지점_지점장', new JsonZoonData('응찰_개요_지점_지점장', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_지점_제1차예상낙찰가 = new MaskEdit('응찰_개요_지점_제1차예상낙찰가', new JsonZoonData('응찰_개요_지점_제1차예상낙찰가', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_예상낙찰가율 = new MaskEdit('응찰_개요_지점_예상낙찰가율', new JsonZoonData('응찰_개요_지점_예상낙찰가율', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_예상낙찰가 = new MaskEdit('응찰_개요_지점_예상낙찰가', new JsonZoonData('응찰_개요_지점_예상낙찰가', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_담보여력 = new MaskEdit('응찰_개요_지점_담보여력', new JsonZoonData('응찰_개요_지점_담보여력', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_당사채권금액 = new MaskEdit('응찰_개요_지점_당사채권금액', new JsonZoonData('응찰_개요_지점_당사채권금액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_당사순위및등기 = new Edit('응찰_개요_지점_당사순위및등기', new JsonZoonData('응찰_개요_지점_당사순위및등기', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_본사_감정일 = new MaskEdit('응찰_개요_본사_감정일', new JsonZoonData('응찰_개요_본사_감정일', {}), {
            isShow: true,
            isEnable: true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일'))) - Days(StrToDate(GetValue('MkEdit_입력표_건축일자')))) / 365)
            SetValue('본건_MkEdit_건축년도', Left(GetValue('MkEdit_입력표_건축일자'), 4))
            SetValue('본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'))
            SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'))


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const 응찰_개요_본사_1차결재 = new Edit('응찰_개요_본사_1차결재', new JsonZoonData('응찰_개요_본사_1차결재', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_본사_2차결재 = new Edit('응찰_개요_본사_2차결재', new JsonZoonData('응찰_개요_본사_2차결재', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_본사_3차결재 = new Edit('응찰_개요_본사_3차결재', new JsonZoonData('응찰_개요_본사_3차결재', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_본사_관재파트장 = new Edit('응찰_개요_본사_관재파트장', new JsonZoonData('응찰_개요_본사_관재파트장', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_본사_팀장 = new Edit('응찰_개요_본사_팀장', new JsonZoonData('응찰_개요_본사_팀장', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_개요_본사_제1차예상낙찰가 = new MaskEdit('응찰_개요_본사_제1차예상낙찰가', new JsonZoonData('응찰_개요_본사_제1차예상낙찰가', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_예상낙찰가율 = new MaskEdit('응찰_개요_본사_예상낙찰가율', new JsonZoonData('응찰_개요_본사_예상낙찰가율', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_예상낙찰가 = new MaskEdit('응찰_개요_본사_예상낙찰가', new JsonZoonData('응찰_개요_본사_예상낙찰가', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_담보여력 = new MaskEdit('응찰_개요_본사_담보여력', new JsonZoonData('응찰_개요_본사_담보여력', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_당사채권금액 = new MaskEdit('응찰_개요_본사_당사채권금액', new JsonZoonData('응찰_개요_본사_당사채권금액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_당사순위및등기 = new Edit('응찰_개요_본사_당사순위및등기', new JsonZoonData('응찰_개요_본사_당사순위및등기', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_수지_예상공시지가상승률 = new MaskEdit('응찰_수지_예상공시지가상승률', new JsonZoonData('응찰_수지_예상공시지가상승률', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1.00',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_예상매각확신금액 = new MaskEdit('응찰_수지_예상매각확신금액', new JsonZoonData('응찰_수지_예상매각확신금액', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_예상매각확신사유 = new Edit('응찰_수지_예상매각확신사유', new JsonZoonData('응찰_수지_예상매각확신사유', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_수지_취득_강제집행 = new MaskEdit('응찰_수지_취득_강제집행', new JsonZoonData('응찰_수지_취득_강제집행', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유수익_임대보증금 = new MaskEdit('응찰_수지_보유수익_임대보증금', new JsonZoonData('응찰_수지_보유수익_임대보증금', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유수익_월임대수입 = new MaskEdit('응찰_수지_보유수익_월임대수입', new JsonZoonData('응찰_수지_보유수익_월임대수입', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유수익_기타수익 = new MaskEdit('응찰_수지_보유수익_기타수익', new JsonZoonData('응찰_수지_보유수익_기타수익', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_기타유지보수비용 = new MaskEdit('응찰_수지_보유비용_기타유지보수비용', new JsonZoonData('응찰_수지_보유비용_기타유지보수비용', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_처분_기타비용 = new MaskEdit('응찰_수지_처분_기타비용', new JsonZoonData('응찰_수지_처분_기타비용', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_응찰여부_Group = new Group('응찰_수지_응찰여부_Group', new JsonZoonData('응찰_수지_응찰여부_Group', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_수지_응찰여부 = new Tab('응찰_수지_응찰여부', new JsonZoonData('Y', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_응찰_기일내역 = new DBGrid('DBGrid_응찰_기일내역', new JsonZoonData('Q_41_응찰입력표_경매기일내역', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEnterKey', function () {

            GetComponent('DBGrid_응찰_기일내역').NextTab();

        })

        const Picture72 = new Picture('Picture72', new JsonZoonData('Picture72', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture73 = new Picture('Picture73', new JsonZoonData('Picture73', {}), {
            isShow: true,
            isEnable: false
        })
        const Label77 = new Label('Label77', new JsonZoonData('Label77', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture74 = new Picture('Picture74', new JsonZoonData('Picture74', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture75 = new Picture('Picture75', new JsonZoonData('Picture75', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            EmptyArray('01_응찰_숫자배열변수3')


            GetComponent('DBGrid_응찰_기일내역').GetRows("", [
                {key: '01_응찰_숫자배열변수3', value: '회차'},
            ]);

            if (isEmpty(GetValue('01_응찰_숫자배열변수3'))) {

                SetArray('01_응찰_숫자배열변수3', 0, 0)

            }


            SetValue('응찰_변수_숫자1', Max('01_응찰_숫자배열변수3') + 1);


            GetComponent('DBGrid_응찰_기일내역').AddRow({
                '년도': GetValue('년도'),
                '일련번호': GetValue('감정순번'),
                '회차': GetValue('응찰_변수_숫자1')
            });


            GetComponent('DBGrid_응찰_기일내역').GetRowCount('응찰_경매_Formula_기일내역_Row');


            SetValue('응찰_경매_Formula_기일내역_Row', GetValue('응찰_경매_Formula_기일내역_Row') - 1);


            GetComponent('DBGrid_응찰_기일내역').SetCurSel(GetNumber('응찰_경매_Formula_기일내역_Row'));


            GetComponent('DBGrid_응찰_기일내역').SetEditFocus(GetNumber('응찰_경매_Formula_기일내역_Row') - 1, '회차');

        })

        const 응찰_경매_Formula_기일내역_Row = new Edit('응찰_경매_Formula_기일내역_Row', new JsonZoonData('응찰_경매_Formula_기일내역_Row', {}), {
            isShow: false,
            isEnable: true
        });
        const 응찰_경매_Formula_기일내역_TNUM = new Edit('응찰_경매_Formula_기일내역_TNUM', new
        JsonZoonData('응찰_경매_Formula_기일내역_TNUM', {}), {
            isShow: false,
            isEnable: true
        });
        const Label78 = new Label('Label78', new JsonZoonData('Label78', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture76 = new Picture('Picture76', new JsonZoonData('Picture76', {}), {
            isShow: true,
            isEnable: false
        })
        const 응찰_내용_토지_단가 = new CalcEdit('응찰_내용_토지_단가', ['응찰_내용_토지_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_토지_단가', () => {
            return {
                value: (Round(Round(GetNumber('응찰_내용_토지_금액')/GetNumber('MkEdit_입력표_전유면적'),0) / 1000, 0) * 1000)
            }
        }), {
            isShow: true,
            isEnable: true
        });
        const 응찰_내용_건물_단가 = new CalcEdit('응찰_내용_건물_단가', ['응찰_내용_건물_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_건물_단가', () => {
            return {
                value: (Round(Round(GetNumber('응찰_내용_건물_금액')/GetNumber('MkEdit_입력표_전유면적'),0) / 1000, 0) * 1000)
            }
        }), {
            isShow: true,
            isEnable: true
        });
        const 응찰_내용_토지_단가_평당 = new CalcEdit('응찰_내용_토지_단가_평당', ['응찰_내용_토지_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_토지_단가_평당', () => {
            return {
                value: Round(Round(GetNumber('응찰_내용_토지_금액')/(GetNumber('MkEdit_입력표_전유면적')*0.3025),0) / 1000, 0) * 1000
            }
        }), {
            isShow: true,
            isEnable: true
        });
        const 응찰_내용_건물_단가_평당 = new CalcEdit('응찰_내용_건물_단가_평당', ['응찰_내용_건물_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_건물_단가_평당', () => {
            return {
                value: Round(Round(GetNumber('응찰_내용_건물_금액')/(GetNumber('MkEdit_입력표_전유면적')*0.3025),0) / 1000, 0) * 1000
            }
        }), {
            isShow: true,
            isEnable: true
        });
        const 응찰_내용_법원감정가합계 = new CalcEdit('응찰_내용_법원감정가합계', [], new JsonZoonData('응찰_내용_법원감정가합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_내용_입찰예정가_낙찰가율 = new CalcEdit('응찰_내용_입찰예정가_낙찰가율', [], new JsonZoonData('응찰_내용_입찰예정가_낙찰가율', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_내용_입찰예정가_금액 = new CalcEdit('응찰_내용_입찰예정가_금액', [], new JsonZoonData('응찰_내용_입찰예정가_금액', {}), {
            isShow: true,
            isEnable: true
        });
        const Label79 = new Label('Label79', new JsonZoonData('Label79', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture77 = new Picture('Picture77', new JsonZoonData('Picture77', {}), {
            isShow: true,
            isEnable: false
        })
        const 응찰_집계표_최고채권액Combo_Value = new CalcEdit('응찰_집계표_최고채권액Combo_Value', [], new
        JsonZoonData('응찰_집계표_최고채권액Combo_Value', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_집계표_최고채권액Combo = new Combo('응찰_집계표_최고채권액Combo', new JsonZoonData('Q_코드_최고채권액', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_최고채권액').FindIndex('응찰_변수_숫자1', (row) => {

                if ((row['CD_CODE'] == GetValue('응찰_집계표_최고채권액Combo'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_최고채권액').GetRow(GetValue('응찰_변수_숫자1'), [
                {key: '응찰_집계표_최고채권액Combo_Value', value: 'ATTR_02'},
            ]);


            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수'))


            // MC_999_배당표_주택임대차보증금_계산_전체();


            // MC_999_배당표_배당금_기본항목자동설정();

        })

        const Label82 = new Label('Label82', new JsonZoonData('Label82', {}), {
            isShow: true,
            isEnable: true
        })
        const Label85 = new Label('Label85', new JsonZoonData('Label85', {}), {
            isShow: true,
            isEnable: true
        })
        const Label86 = new Label('Label86', new JsonZoonData('Label86', {}), {
            isShow: true,
            isEnable: true
        })
        const Label87 = new Label('Label87', new JsonZoonData('Label87', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture78 = new Picture('Picture78', new JsonZoonData('Picture78', {}), {
            isShow: true,
            isEnable: false
        })
        const DBGrid_응찰_권리내역 = new DBGrid('DBGrid_응찰_권리내역', new JsonZoonData('Q_43_응찰입력표_선순위권리내역', {}),{
            isShow : true,
            isEnable : true
        }).on('OnEnterKey', function() {

            GetComponent('DBGrid_응찰_권리내역').NextTab();

        })
            .on('OnValidate', function() {

                RunButton('Command_응찰_02_이벤트');

            })

        const DBGrid_응찰_부담내역 = new DBGrid('DBGrid_응찰_부담내역', new JsonZoonData('Q_44_응찰입력표_선순위부담금액', {}),{
            isShow : true,
            isEnable : true
        }).on('OnEnterKey', function() {

            GetComponent('DBGrid_응찰_부담내역').NextTab();

        })
            .on('OnValidate', function() {

                RunButton('Command_응찰_02_이벤트');

            })

        const Picture79 = new Picture('Picture79', new JsonZoonData('Picture79', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            EmptyArray('01_응찰_숫자배열변수3')


            GetComponent('DBGrid_응찰_권리내역').GetRows("", [
                {key: '01_응찰_숫자배열변수3', value: '순번'},
            ]);

            if (isEmpty(GetValue('01_응찰_숫자배열변수3'))) {

                SetArray('01_응찰_숫자배열변수3', 0, 0)

            }


            Max('01_응찰_숫자배열변수3') + 1


            GetComponent('DBGrid_응찰_권리내역').AddRow({
                '년도': GetValue('년도'),
                '일련번호': GetValue('감정순번'),
                '순번': GetValue('응찰_변수_숫자1')
            });


            GetComponent('DBGrid_응찰_권리내역').GetRowCount('응찰_변수_숫자1');


            GetValue('응찰_변수_숫자1') - 1


            GetComponent('DBGrid_응찰_권리내역').SetCurSel(GetNumber('응찰_변수_숫자1'));


            GetComponent('DBGrid_응찰_권리내역').SetEditFocus(GetNumber('응찰_변수_숫자1') - 1, '금액');

        })

        const Picture80 = new Picture('Picture80', new JsonZoonData('Picture80', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_권리내역').GetCurSel('응찰_변수_숫자2');


            GetComponent('DBGrid_응찰_권리내역').DeleteRow(GetNumber('응찰_변수_숫자2'));

        })

        const Picture81 = new Picture('Picture81', new JsonZoonData('Picture81', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_부담내역').GetCurSel('응찰_변수_숫자2');


            GetComponent('DBGrid_응찰_부담내역').DeleteRow(GetNumber('응찰_변수_숫자2'));

        })

        const Picture82 = new Picture('Picture82', new JsonZoonData('Picture82', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            EmptyArray('01_응찰_숫자배열변수3')


            GetComponent('DBGrid_응찰_부담내역').GetRows("", [
                {key: '01_응찰_숫자배열변수3', value: '순번'},
            ]);

            if (isEmpty(GetValue('01_응찰_숫자배열변수3'))) {

                SetArray('01_응찰_숫자배열변수3', 0, 0)

            }


            Max('01_응찰_숫자배열변수3') + 1


            GetComponent('DBGrid_응찰_부담내역').AddRow({
                '년도': GetValue('년도'),
                '일련번호': GetValue('감정순번'),
                '순번': GetValue('응찰_변수_숫자1')
            });


            GetComponent('DBGrid_응찰_부담내역').GetRowCount('응찰_변수_숫자1');


            GetValue('응찰_변수_숫자1') - 1


            GetComponent('DBGrid_응찰_부담내역').SetCurSel(GetNumber('응찰_변수_숫자1'));


            GetComponent('DBGrid_응찰_부담내역').SetEditFocus(GetNumber('응찰_변수_숫자1') - 1, '금액');

        })

        const Label88 = new Label('Label88', new JsonZoonData('Label88', {}), {
            isShow: true,
            isEnable: true
        })
        const 응찰_수지_부담비용합계 = new CalcEdit('응찰_수지_부담비용합계', [], new JsonZoonData('응찰_수지_부담비용합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_입찰예정가 = new CalcEdit('응찰_수지_입찰예정가', [], new JsonZoonData('응찰_수지_입찰예정가', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_예정_낙찰후매각가능 = new CalcEdit('응찰_수지_예정_낙찰후매각가능', [], new JsonZoonData('응찰_수지_예정_낙찰후매각가능', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_예상매각금액 = new CalcEdit('응찰_수지_예상매각금액', [], new JsonZoonData('응찰_수지_예상매각금액', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_취득_취득세 = new CalcEdit('응찰_수지_취득_취득세', [], new JsonZoonData('응찰_수지_취득_취득세', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_취득_등록세 = new CalcEdit('응찰_수지_취득_등록세', [], new JsonZoonData('응찰_수지_취득_등록세', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_취득_채권매입 = new CalcEdit('응찰_수지_취득_채권매입', [], new JsonZoonData('응찰_수지_취득_채권매입', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_취득_기타취득 = new CalcEdit('응찰_수지_취득_기타취득', [], new JsonZoonData('응찰_수지_취득_기타취득', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유수익_임대수익 = new CalcEdit('응찰_수지_보유수익_임대수익', [], new JsonZoonData('응찰_수지_보유수익_임대수익', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유비용_기회비용 = new CalcEdit('응찰_수지_보유비용_기회비용', [], new JsonZoonData('응찰_수지_보유비용_기회비용', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유비용_부가세 = new CalcEdit('응찰_수지_보유비용_부가세', [], new JsonZoonData('응찰_수지_보유비용_부가세', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유비용_재산세 = new CalcEdit('응찰_수지_보유비용_재산세', [], new JsonZoonData('응찰_수지_보유비용_재산세', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유비용_종부세 = new CalcEdit('응찰_수지_보유비용_종부세', [], new JsonZoonData('응찰_수지_보유비용_종부세', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유비용_법인세 = new CalcEdit('응찰_수지_보유비용_법인세', [], new JsonZoonData('응찰_수지_보유비용_법인세', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_처분_비용 = new CalcEdit('응찰_수지_처분_비용', [], new JsonZoonData('응찰_수지_처분_비용', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_항목별_비용합계 = new CalcEdit('응찰_수지_항목별_비용합계', [], new JsonZoonData('응찰_수지_항목별_비용합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_항목별_수익합계 = new CalcEdit('응찰_수지_항목별_수익합계', [], new JsonZoonData('응찰_수지_항목별_수익합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_항목별_예상손익 = new CalcEdit('응찰_수지_항목별_예상손익', [], new JsonZoonData('응찰_수지_항목별_예상손익', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_전체손익 = new CalcEdit('응찰_수지_전체손익', [], new JsonZoonData('응찰_수지_전체손익', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_취득_합계 = new CalcEdit('응찰_수지_취득_합계', [], new JsonZoonData('응찰_수지_취득_합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_취득_원가합계 = new CalcEdit('응찰_수지_취득_원가합계', [], new JsonZoonData('응찰_수지_취득_원가합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_취득_총원가합계 = new CalcEdit('응찰_수지_취득_총원가합계', [], new JsonZoonData('응찰_수지_취득_총원가합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유수익_합계 = new CalcEdit('응찰_수지_보유수익_합계', [], new JsonZoonData('응찰_수지_보유수익_합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_보유비용_합계 = new CalcEdit('응찰_수지_보유비용_합계', [], new JsonZoonData('응찰_수지_보유비용_합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_처분_합계 = new CalcEdit('응찰_수지_처분_합계', [], new JsonZoonData('응찰_수지_처분_합계', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_집계표_당사미회수채권액 = new CalcEdit('응찰_집계표_당사미회수채권액', ['응찰_집계표_당사채권최고액', '응찰_집계표_당사배당금'], new FunctionZoonData('응찰_집계표_당사미회수채권액', () => {
            return {
                value: GetNumber('응찰_집계표_당사채권최고액') - GetNumber('응찰_집계표_당사배당금')
            }
        }), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_실제취득가 = new CalcEdit('응찰_수지_실제취득가', [], new JsonZoonData('응찰_수지_실제취득가', {}), {
            isShow: true,
            isEnable: true
        });
        const 응찰_수지_처분_비용_Combo = new Combo('응찰_수지_처분_비용_Combo', new JsonZoonData('Q_49_DUAL_처분비용', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_종부세_Combo = new Combo('응찰_수지_보유비용_종부세_Combo', new JsonZoonData('Q_49_DUAL_종합부동산세', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const Command_응찰_02_이벤트 = new Command('Command_응찰_02_이벤트', new JsonZoonData('Command_응찰_02_이벤트', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            RunButton('Command_응찰_11_내용');


            RunButton('Command_응찰_12_부담비용합계');


            RunButton('Command_응찰_13_추정예상매각대금');


            RunButton('Command_응찰_14_취득비용');


            RunButton('Command_응찰_15_보유수익');


            RunButton('Command_응찰_16_보유비용');


            RunButton('Command_응찰_17_처분비용');


            RunButton('Command_응찰_18_항목별합계');

        })

        const Command_응찰_01_쿼리 = new Command('Command_응찰_01_쿼리', new JsonZoonData('Command_응찰_01_쿼리', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            RunQuery('Q_49_DUAL_종합부동산세', {
                '담보종류': GetValue('담보종류')
            }, 'GET');


            RunQuery('Q_49_DUAL_처분비용', {}, 'GET');


            RunQuery('Q_49_DUAL_취득세', {}, 'GET');


            RunQuery('Q_49_DUAL_등록세', {}, 'GET');


            GetComponent('응찰_수지_취득_취득세_Combo').SetCurSel(0.0);


            GetComponent('응찰_수지_취득_등록세_Combo').SetCurSel(0.0);


            GetComponent('응찰_수지_처분_비용_Combo').SetCurSel(0.0);


            GetComponent('응찰_수지_보유비용_종부세_Combo').SetCurSel(0.0);


            if (isEmpty((GetValue('감정순번')))) {
                return false;
            }


            if ((isEmpty(GetValue('감정순번')))) {
                return false;
            }


            RunQuery('Q_40_응찰입력표_마스타', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_40_응찰입력표_마스타').GetRow(0, [
                {key: '응찰_사항_사건번호', value: '사항_사건번호'},

                {key: '응찰_사항_관할법원', value: '사항_관할법원'},

                {key: '응찰_사항_경매구분', value: '사항_경매구분'},

                {key: '응찰_사항_경매계', value: '사항_경매계'},

                {key: '응찰_사항_전화번호', value: '사항_전화번호'},

                {key: '응찰_사항_경매신청채권자', value: '사항_경매신청채권자'},

                {key: '응찰_사항_청구금액', value: '사항_청구금액'},

                {key: '응찰_사항_경매개시등기일', value: '사항_경매개시등기일'},

                {key: '응찰_사항_유입시특이사항', value: '사항_유입시특이사항'},

                {key: '응찰_내용_토지_금액', value: '내용_법원감정가_토지_가격총액'},

                {key: '응찰_내용_토지_단가', value: '내용_법원감정가_토지_단가'},

                {key: '응찰_내용_토지_단가_평당', value: '내용_법원감정가_토지_평당가격'},

                {key: '응찰_내용_건물_금액', value: '내용_법원감정가_건물_가격총액'},

                {key: '응찰_내용_건물_단가', value: '내용_법원감정가_건물_단가'},

                {key: '응찰_내용_건물_단가_평당', value: '내용_법원감정가_건물_평당가격'},

                {key: '응찰_내용_법원감정가합계', value: '내용_법원감정가_합계_가격총액'},

                {key: '응찰_내용_입찰예정가_금액', value: '내용_입찰예정가_금액'},

                {key: '응찰_내용_입찰예정가_낙찰가율', value: '내용_낙찰가율'},

                {key: '응찰_집계표_최고채권액', value: '집계표_경매비용개산_채권액'},

                {key: '응찰_집계표_최고채권액Combo', value: '집계표_경매비용개산_적용대상'},

                {key: '응찰_집계표_최고채권액Combo_Value', value: '집계표_경매비용개산_적용금액'},

                {key: '응찰_집계표_선순위자채권최고액', value: '집계표_선순위자채권최고액합계'},

                {key: '응찰_집계표_선순위자배당금', value: '집계표_선순위자배당금합계'},

                {key: '응찰_집계표_당사채권최고액', value: '집계표_당사채권최고액합계'},

                {key: '응찰_집계표_당사배당금', value: '집계표_당사배당금합계'},

                {key: '응찰_집계표_당사미회수채권액', value: '집계표_당사의미회수채권액'},

                {key: '응찰_수지_부담비용합계', value: '수지1_경락후_부담비용합계'},

                {key: '응찰_수지_입찰예정가', value: '내용_입찰예정가_금액'},

                {key: '응찰_수지_실제취득가', value: '수지2_실제취득가'},

                {key: '응찰_수지_예상공시지가상승률', value: '수지3_기준시가상승률'},

                {key: '응찰_수지_예정_낙찰후매각가능', value: '수지3_예정보유기간'},

                {key: '응찰_수지_예상매각금액', value: '수지3_추정예상매각금액'},

                {key: '응찰_수지_예상매각확신금액', value: '수지3_매각확신금액'},

                {key: '응찰_수지_예상매각확신사유', value: '수지3_매각확신금액을적용한사유'},

                {key: '응찰_수지_취득_취득세', value: '수지4_취득비용_취득세'},

                {key: '응찰_수지_취득_취득세_Combo', value: '수지4_취득비용_취득세율'},

                {key: '응찰_수지_취득_등록세', value: '수지4_취득비용_등록세'},

                {key: '응찰_수지_취득_등록세_Combo', value: '수지4_취득비용_등록세율'},

                {key: '응찰_수지_취득_강제집행', value: '수지4_취득비용_강제집행비용'},

                {key: '응찰_수지_취득_채권매입', value: '수지4_취득비용_손실액'},

                {key: '응찰_수지_취득_기타취득', value: '수지4_취득비용_기타부대비용'},

                {key: '응찰_수지_취득_합계', value: '수지4_취득비용합계'},

                {key: '응찰_수지_취득_원가합계', value: '수지4_취득원가합계'},

                {key: '응찰_수지_취득_총원가합계', value: '수지4_총취득원가합계'},

                {key: '응찰_수지_보유수익_임대수익', value: '수지5_보유수익_임대수익'},

                {key: '응찰_수지_보유수익_임대보증금', value: '수지5_보유수익_임대보증금'},

                {key: '응찰_수지_보유수익_월임대수입', value: '수지5_보유수익_월임대수입'},

                {key: '응찰_수지_보유수익_기타수익', value: '수지5_보유수익_기타의수익'},

                {key: '응찰_수지_보유수익_합계', value: '수지5_보유수익합계'},

                {key: '응찰_수지_보유비용_기회비용', value: '수지6_보유비용_기회비용'},

                {key: '응찰_수지_보유비용_부가세', value: '수지6_보유비용_부가세'},

                {key: '응찰_수지_보유비용_법인세', value: '수지6_보유비용_법인세'},

                {key: '응찰_수지_보유비용_재산세', value: '수지6_보유비용_재산세'},

                {key: '응찰_수지_보유비용_종부세', value: '수지6_보유비용_종부세금액'},

                {key: '응찰_수지_보유비용_종부세_Combo', value: '수지6_보유비용_종부세구분'},

                {key: '응찰_수지_보유비용_기타유지보수비용', value: '수지6_보유비용_기타유지보수비'},

                {key: '응찰_수지_보유비용_합계', value: '수지6_보유비용합계'},

                {key: '응찰_수지_처분_비용', value: '수지7_처분비용_금액'},

                {key: '응찰_수지_처분_비용_Combo', value: '수지7_처분비용_구분'},

                {key: '응찰_수지_처분_기타비용', value: '수지7_처분비용_기타처분비용'},

                {key: '응찰_수지_처분_합계', value: '수지7_처분비용합계'},

                {key: '응찰_수지_항목별_비용합계', value: '수지8_각항목별합계_비용합계'},

                {key: '응찰_수지_항목별_수익합계', value: '수지8_각항목별합계_수익합계'},

                {key: '응찰_수지_항목별_예상손익', value: '수지8_각항목별합계_예상손익'},

                {key: '응찰_수지_전체손익', value: '수지8_최종적인전체손익'},

                {key: '응찰_수지_응찰여부_Group', value: '수지8_응찰여부결정'},
            ]);


            RunQuery('Q_41_응찰입력표_경매기일내역', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            RunQuery('Q_42_응찰입력표_전감정개요', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_42_응찰입력표_전감정개요').GetRow(0, []);


            RunQuery('Q_43_응찰입력표_선순위권리내역', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');


            RunQuery('Q_44_응찰입력표_선순위부담금액', {
                '년도': GetValue('년도'),
                '감정순번': GetValue('감정순번')
            }, 'GET');

        })

        const Command_응찰_00_메인 = new Command('Command_응찰_00_메인', new JsonZoonData('Command_응찰_00_메인', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            RunButton('Command_응찰_03_초기화');


            RunButton('Command_응찰_01_쿼리');


            if (true) {
                return false;
            }


            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_종부세_적용값 = new CalcEdit('응찰_수지_보유비용_종부세_적용값', [], new JsonZoonData('응찰_수지_보유비용_종부세_적용값', {}), {
            isShow: false,
            isEnable: true
        });
        const 응찰_수지_처분_비용_적용값 = new CalcEdit('응찰_수지_처분_비용_적용값', [], new JsonZoonData('응찰_수지_처분_비용_적용값', {}), {
            isShow: false,
            isEnable: true
        });
        const 응찰_변수_숫자1 = new Edit('응찰_변수_숫자1', new JsonZoonData('응찰_변수_숫자1', {}), {
            isShow: false,
            isEnable: true
        });
        const 응찰_변수_숫자2 = new Edit('응찰_변수_숫자2', new JsonZoonData('응찰_변수_숫자2', {}), {
            isShow: false,
            isEnable: true
        });
        const Command_응찰_11_내용 = new Command('Command_응찰_11_내용', new JsonZoonData('Command_응찰_11_내용', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_내용_법원감정가합계', GetNumber('응찰_내용_토지_금액') + GetNumber('응찰_내용_건물_금액'));


            SetValue('응찰_내용_입찰예정가_금액', Round(Round(GetNumber('응찰_내용_법원감정가합계') * (GetNumber('Edit_보정표_적용할낙찰가율') / 100), 0) / 1000, 0) * 1000);


            SetValue('응찰_내용_입찰예정가_낙찰가율', Round((GetNumber('응찰_내용_입찰예정가_금액') / GetNumber('응찰_내용_법원감정가합계')) * 100, 2));


            SetValue('응찰_수지_입찰예정가', GetValue('응찰_내용_입찰예정가_금액'));


            SetValue('응찰_수지_실제취득가', GetNumber('응찰_수지_부담비용합계') + GetNumber('응찰_내용_입찰예정가_금액'));


            SetValue('응찰_내용_토지_단가', Round(Round(GetNumber('응찰_내용_토지_금액') / GetNumber('Edit_토지의표시_합계_면적'), 0) / 1000, 0) * 1000);


            SetValue('응찰_내용_토지_단가_평당', Round(Round(GetNumber('응찰_내용_토지_금액') / (GetNumber('Edit_토지의표시_합계_면적') * 0.3025), 0) / 1000, 0) * 1000);


            EmptyArray('01_응찰_숫자배열변수1')
            EmptyArray('01_응찰_숫자배열변수2')


            GetComponent('DBGrid_건물의표시').GetRows("", [
                {key: '01_응찰_숫자배열변수1', value: 'CB_SIZE'},

                {key: '01_응찰_숫자배열변수2', value: 'CB_SIZE_PY'},
            ]);


            SetValue('응찰_내용_건물_단가', Round(Round(GetValue('응찰_내용_건물_금액') / Sum('01_응찰_숫자배열변수1'), 0) / 1000, 0) * 1000);


            SetValue('응찰_내용_건물_단가_평당', Round(Round(GetValue('응찰_내용_건물_금액') / (Sum('01_응찰_숫자배열변수2') * 0.3025), 0) / 1000, 0) * 1000);


            EmptyArray('01_응찰_숫자배열변수1')
            EmptyArray('01_응찰_숫자배열변수2')


            RunButton('Command_응찰_18_항목별합계');

        })

        const 응찰_변수_숫자_부담비용합계 = new CalcEdit('응찰_변수_숫자_부담비용합계', [], new JsonZoonData('응찰_변수_숫자_부담비용합계', {}), {
            isShow: false,
            isEnable: true
        });
        const Command_응찰_12_부담비용합계 = new Command('Command_응찰_12_부담비용합계', new JsonZoonData('Command_응찰_12_부담비용합계', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_권리내역').GetRows("", [
                {key: '01_응찰_숫자배열변수1', value: '금액'},
            ]);


            GetComponent('DBGrid_응찰_부담내역').GetRows("", [
                {key: '01_응찰_숫자배열변수2', value: '금액'},
            ]);


            SetValue('응찰_수지_부담비용합계', Sum('01_응찰_숫자배열변수1') + Sum('01_응찰_숫자배열변수2'));


            SetValue('응찰_수지_실제취득가', GetNumber('응찰_수지_부담비용합계') + GetNumber('응찰_내용_입찰예정가_금액'));


            RunButton('Command_응찰_18_항목별합계');

        })

        const Command_응찰_03_초기화 = new Command('Command_응찰_03_초기화', new JsonZoonData('Command_응찰_03_초기화', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_예정_낙찰후매각가능', 3);

        })

        const Command_응찰_13_추정예상매각대금 = new Command('Command_응찰_13_추정예상매각대금', new
        JsonZoonData('Command_응찰_13_추정예상매각대금', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_예상매각금액', Round(GetValue('응찰_내용_입찰예정가_금액') * (GetValue('응찰_수지_예상공시지가상승률') / 100) / 1000, 0) * 1000);


            RunButton('Command_응찰_18_항목별합계');

        })

        const Command_응찰_14_취득비용 = new Command('Command_응찰_14_취득비용', new JsonZoonData('Command_응찰_14_취득비용', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_취득_취득세', // 101:(집합)아파트
// 102:(집합)연립,다세대
// 104:(집합)상업용
// 105:(집합)오피스텔
// 401:(토건)주거,일반,복합용
// 402:(토건)상업용
// 501:토지
                Round((GetValue('응찰_내용_입찰예정가_금액') * (StrToNum(GetValue('응찰_수지_취득_취득세_Combo')) / 100)) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_등록세', // 101:(집합)아파트
// 102:(집합)연립,다세대
// 104:(집합)상업용
// 105:(집합)오피스텔
// 401:(토건)주거,일반,복합용
// 402:(토건)상업용
// 501:토지
                Round((GetValue('응찰_내용_입찰예정가_금액') * (StrToNum(GetValue('응찰_수지_취득_등록세_Combo')) / 100)) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_채권매입', Round((GetValue('응찰_내용_입찰예정가_금액') * 0.004) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_기타취득', Round((GetValue('응찰_내용_입찰예정가_금액') * 0.002) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_합계', GetNumber('응찰_수지_취득_취득세')
                + GetNumber('응찰_수지_취득_등록세')
                + GetNumber('응찰_수지_취득_강제집행')
                + GetNumber('응찰_수지_취득_채권매입')
                + GetNumber('응찰_수지_취득_기타취득'));


            SetValue('응찰_수지_취득_원가합계', GetNumber('응찰_수지_취득_합계')
                + GetNumber('응찰_내용_입찰예정가_금액'));


            SetValue('응찰_수지_취득_총원가합계', GetNumber('응찰_수지_취득_원가합계')
                + GetNumber('응찰_수지_부담비용합계'));


            RunButton('Command_응찰_18_항목별합계');

        })

        const Command_응찰_15_보유수익 = new Command('Command_응찰_15_보유수익', new JsonZoonData('Command_응찰_15_보유수익', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_보유수익_임대수익', //임대수익= (임대보증금*5%*3)+(월임대수입*36)
                Round(((GetValue('응찰_수지_보유수익_임대보증금') * 0.05 * 3) + (GetValue('응찰_수지_보유수익_월임대수입') * 36)) / 1000, 0) * 1000);


            SetValue('응찰_수지_보유수익_합계', GetNumber('응찰_수지_보유수익_임대수익')
                + GetNumber('응찰_수지_보유수익_기타수익'));


            RunButton('Command_응찰_18_항목별합계');

        })

        const Command_응찰_16_보유비용 = new Command('Command_응찰_16_보유비용', new JsonZoonData('Command_응찰_16_보유비용', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_보유비용_주택기준시가', 0);


            SetValue('응찰_수지_보유비용_종부세적용면적', GetValue('Edit_토지의표시_합계_면적'));


            SetValue('응찰_수지_보유비용_기회비용', //기회비용산출=(취득원가합계*5%*3)-(취득원가합계*5%*3*0.165)
                Round(((GetValue('응찰_수지_취득_원가합계') * 0.05 * 3) - (GetValue('응찰_수지_취득_원가합계') * 0.05 * 3 * 0.165)) / 1000, 0) * 1000);


            SetValue('응찰_수지_보유비용_부가세', //임대수익= (임대보증금*5%*3)+(월임대수입*36)
                Round(((GetValue('응찰_수지_보유수익_임대보증금') * 0.05 * 0.1 * 3) + (GetValue('응찰_수지_보유수익_월임대수입') * 36 * 0.1)) / 1000, 0) * 1000);


            SetValue('응찰_수지_보유비용_법인세', //임대수익= (임대보증금*5%*3)+(월임대수입*36)
                Round((GetValue('응찰_수지_보유수익_합계') * 0.25) / 1000, 0) * 1000);


            if (Left(GetValue('담보종류'), 1) == "1") {
                SetValue('응찰_수지_보유비용_재산세', Round((GetValue('응찰_수지_보유비용_주택기준시가') * 0.5 * 0.004) / 1000, 0) * 1000);
            } else {
                SetValue('응찰_수지_보유비용_재산세', Round((GetValue('응찰_수지_보유비용_종부세적용면적') * 610) / 1000, 0) * 1000);
            }


            GetZoonData('Q_49_DUAL_종합부동산세').FindIndex('01_응찰_숫자변수1', (row) => {

                if ((row['GU_CODE'] == GetValue('응찰_수지_보유비용_종부세_Combo'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_49_DUAL_종합부동산세').GetRow(GetValue('01_응찰_숫자변수1'), [
                {key: '응찰_수지_보유비용_종부세_적용값', value: 'GU_VAL'},
            ]);


            if (Left(GetValue('담보종류'), 1) == "1") {
                SetValue('응찰_수지_보유비용_종부세', Round((GetValue('응찰_수지_보유비용_주택기준시가') * (GetValue('응찰_수지_보유비용_종부세_적용값') / 100)) / 1000, 0) * 1000);
            } else {
                SetValue('응찰_수지_보유비용_종부세', Round((GetValue('응찰_수지_보유비용_종부세적용면적') * GetValue('응찰_수지_보유비용_종부세_적용값')) / 1000, 0) * 1000);
            }


            SetValue('응찰_수지_보유비용_합계', GetNumber('응찰_수지_보유비용_기회비용')
                + GetNumber('응찰_수지_보유비용_부가세')
                + GetNumber('응찰_수지_보유비용_법인세')
                + GetNumber('응찰_수지_보유비용_재산세')
                + GetNumber('응찰_수지_보유비용_종부세')
                + GetNumber('응찰_수지_보유비용_기타유지보수비용'));


            RunButton('Command_응찰_18_항목별합계');

        })

        const 응찰_수지_취득_취득세_Combo = new Combo('응찰_수지_취득_취득세_Combo', new JsonZoonData('Q_49_DUAL_취득세', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_취득_등록세_Combo = new Combo('응찰_수지_취득_등록세_Combo', new JsonZoonData('Q_49_DUAL_등록세', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_주택기준시가 = new CalcEdit('응찰_수지_보유비용_주택기준시가', [], new JsonZoonData('응찰_수지_보유비용_주택기준시가', {}), {
            isShow: false,
            isEnable: true
        });
        const 응찰_수지_보유비용_종부세적용면적 = new CalcEdit('응찰_수지_보유비용_종부세적용면적', [], new JsonZoonData('응찰_수지_보유비용_종부세적용면적', {}), {
            isShow: false,
            isEnable: true
        });
        const Command_응찰_17_처분비용 = new Command('Command_응찰_17_처분비용', new JsonZoonData('Command_응찰_17_처분비용', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            GetZoonData('Q_49_DUAL_처분비용').FindIndex('01_응찰_숫자변수1', (row) => {

                if ((row['처분구분'] == GetValue('응찰_수지_처분_비용_Combo'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_49_DUAL_처분비용').GetRow(GetValue('01_응찰_숫자변수1'), [
                {key: '응찰_수지_처분_비용_적용값', value: '처분비율'},
            ]);


            if (GetValue('응찰_수지_예상매각확신금액') > 0) {
                SetValue('응찰_수지_처분_비용', Round((GetNumber('응찰_수지_예상매각확신금액') - (GetNumber('응찰_수지_취득_원가합계') * (GetNumber('응찰_수지_처분_비용_적용값') / 100))) / 1000, 0) * 1000);
            } else {
                SetValue('응찰_수지_처분_비용', Round((GetNumber('응찰_수지_예상매각금액') - (GetNumber('응찰_수지_취득_원가합계') * (GetNumber('응찰_수지_처분_비용_적용값') / 100))) / 1000, 0) * 1000);
            }


            SetValue('응찰_수지_처분_합계', GetNumber('응찰_수지_처분_비용')
                + GetNumber('응찰_수지_처분_기타비용'));


            RunButton('Command_응찰_18_항목별합계');

        })

        const Command_응찰_18_항목별합계 = new Command('Command_응찰_18_항목별합계', new JsonZoonData('Command_응찰_18_항목별합계', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_항목별_비용합계', GetNumber('응찰_수지_취득_총원가합계') + GetNumber('응찰_수지_보유비용_합계') + GetNumber('응찰_수지_처분_합계'));


            if (GetValue('응찰_수지_예상매각확신금액') > 0) {
                SetValue('응찰_수지_항목별_수익합계', GetNumber('응찰_수지_보유수익_합계') + GetNumber('응찰_수지_예상매각확신금액'));
            } else {
                SetValue('응찰_수지_항목별_수익합계', GetNumber('응찰_수지_보유수익_합계') + GetNumber('응찰_수지_예상매각금액'));
            }


            SetValue('응찰_수지_항목별_예상손익', GetNumber('응찰_수지_항목별_수익합계') - GetNumber('응찰_수지_항목별_비용합계'));


            SetValue('응찰_수지_전체손익', GetNumber('응찰_수지_항목별_예상손익') - GetNumber('응찰_집계표_당사미회수채권액'));


            RunButton('Command_응찰_18_항목별합계');

        })

        const Command_응찰_91_저장 = new Command('Command_응찰_91_저장', new JsonZoonData('Command_응찰_91_저장', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            RunQuery('저장_40_응찰마스타', {
                'YYYY': GetValue('YYYY'),
                'SEQ': GetValue('SEQ')
            }, 'POST');


            RunQuery('저장_42_전감정개요', {
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'JUM_ESTI_DATE': GetValue('응찰_개요_지점_감정일'),
                'JUM_SABUN1': GetValue('응찰_개요_지점_담당자'),
                'JUM_SABUN2': GetValue('응찰_개요_지점_파트장'),
                'JUM_SABUN3': GetValue('응찰_개요_지점_팀장'),
                'JUM_SABUN4': GetValue('응찰_개요_지점_지점장'),
                'JUM_PL_MIN_BID_AMT': GetValue('응찰_개요_지점_제1차예상낙찰가'),
                'JUM_PL_BID_AMT': GetValue('응찰_개요_지점_예상낙찰가'),
                'JUM_PL_BID_RATE': GetValue('응찰_개요_지점_예상낙찰가율'),
                'JUM_SEC_AMT': GetValue('응찰_개요_지점_담보여력'),
                'JUM_COMP_AMT': GetValue('응찰_개요_지점_당사채권금액'),
                'JUM_COMP_RIGHT': GetValue('응찰_개요_지점_당사순위및등기'),
                'ESTI_DATE': GetValue('응찰_개요_본사_감정일'),
                'SABUN1': GetValue('응찰_개요_본사_1차결재'),
                'SABUN2': GetValue('응찰_개요_본사_2차결재'),
                'SABUN3': GetValue('응찰_개요_본사_3차결재'),
                'SABUN4': GetValue('응찰_개요_본사_관재파트장'),
                'SABUN5': GetValue('응찰_개요_본사_팀장'),
                'PL_MIN_BID_AMT': GetValue('응찰_개요_본사_제1차예상낙찰가'),
                'PL_BID_AMT': GetValue('응찰_개요_본사_예상낙찰가'),
                'PL_BID_RATE': GetValue('응찰_개요_본사_예상낙찰가율'),
                'SEC_AMT': GetValue('응찰_개요_본사_담보여력'),
                'COMP_AMT': GetValue('응찰_개요_본사_당사채권금액'),
                'COMP_RIGHT': GetValue('응찰_개요_본사_당사순위및등기')
            }, 'POST');


            GetComponent('DBGrid_응찰_기일내역').GetModifyData([
                {key: '01_응찰_저장_11_년도', value: '년도', isDelRowInclude: true},

                {key: '01_응찰_저장_11_일련번호', value: '일련번호', isDelRowInclude: true},

                {key: '01_응찰_저장_11_회차', value: '회차', isDelRowInclude: true},

                {key: '01_응찰_저장_11_일자', value: '일자', isDelRowInclude: true},

                {key: '01_응찰_저장_11_금액', value: '금액', isDelRowInclude: true},

                {key: '01_응찰_저장_11_유찰여부', value: '유찰여부', isDelRowInclude: true}
            ]);


            RunQuery('저장_41_응찰_기일내역', {
                '01_응찰_저장_11_년도': GetValue('01_응찰_저장_11_년도'),
                '01_응찰_저장_11_일련번호': GetValue('01_응찰_저장_11_일련번호'),
                '01_응찰_저장_11_회차': GetValue('01_응찰_저장_11_회차'),
                '01_응찰_저장_11_일자': GetValue('01_응찰_저장_11_일자'),
                '01_응찰_저장_11_금액': GetValue('01_응찰_저장_11_금액'),
                '01_응찰_저장_11_유찰여부': GetValue('01_응찰_저장_11_유찰여부')
            }, 'POST');


            GetComponent('DBGrid_응찰_권리내역').GetModifyData([
                {key: '01_응찰_저장_13_년도', value: '년도', isDelRowInclude: true},

                {key: '01_응찰_저장_13_일련번호', value: '일련번호', isDelRowInclude: true},

                {key: '01_응찰_저장_13_순번', value: '순번', isDelRowInclude: true},

                {key: '01_응찰_저장_13_금액', value: '금액', isDelRowInclude: true},

                {key: '01_응찰_저장_13_권리자', value: '권리자', isDelRowInclude: true},

                {key: '01_응찰_저장_13_권리내역', value: '권리내역', isDelRowInclude: true}
            ]);


            RunQuery('저장_43_응찰_선순위권리내역', {
                '01_응찰_저장_13_년도': GetValue('01_응찰_저장_13_년도'),
                '01_응찰_저장_13_일련번호': GetValue('01_응찰_저장_13_일련번호'),
                '01_응찰_저장_13_순번': GetValue('01_응찰_저장_13_순번'),
                '01_응찰_저장_13_금액': GetValue('01_응찰_저장_13_금액'),
                '01_응찰_저장_13_권리자': GetValue('01_응찰_저장_13_권리자'),
                '01_응찰_저장_13_권리내역': GetValue('01_응찰_저장_13_권리내역')
            }, 'POST');


            GetComponent('DBGrid_응찰_부담내역').GetModifyData([
                {key: '01_응찰_저장_14_년도', value: '년도', isDelRowInclude: true},

                {key: '01_응찰_저장_14_일련번호', value: '일련번호', isDelRowInclude: true},

                {key: '01_응찰_저장_14_순번', value: '순번', isDelRowInclude: true},

                {key: '01_응찰_저장_14_금액', value: '금액', isDelRowInclude: true},

                {key: '01_응찰_저장_14_권리자', value: '권리자', isDelRowInclude: true},

                {key: '01_응찰_저장_14_권리내역', value: '권리내역', isDelRowInclude: true}
            ]);


            RunQuery('저장_44_응찰_선순위부담금액', {
                '01_응찰_저장_14_년도': GetValue('01_응찰_저장_14_년도'),
                '01_응찰_저장_14_일련번호': GetValue('01_응찰_저장_14_일련번호'),
                '01_응찰_저장_14_순번': GetValue('01_응찰_저장_14_순번'),
                '01_응찰_저장_14_금액': GetValue('01_응찰_저장_14_금액'),
                '01_응찰_저장_14_권리자': GetValue('01_응찰_저장_14_권리자'),
                '01_응찰_저장_14_권리내역': GetValue('01_응찰_저장_14_권리내역')
            }, 'POST');


            RunButton('Command_응찰_00_메인');

        })

        const Picture83 = new Picture('Picture83', new JsonZoonData('Picture83', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_기일내역').GetCurSel('응찰_경매_Formula_기일내역_TNUM');


            GetComponent('DBGrid_응찰_기일내역').DeleteRow(GetNumber('응찰_경매_Formula_기일내역_TNUM'));

        })

        const Command_응찰_00_탭활성여부 = new Command('Command_응찰_00_탭활성여부', new JsonZoonData('Command_응찰_00_탭활성여부', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {
            if (GetValue('응찰_입력표활성여부') == 'Y') {
                GetComponent('TabControl1').EnableTab(7, 1);
            }

            if (GetValue('응찰_입력표활성여부') != 'Y') {
                GetComponent('TabControl1').EnableTab(7, 0);
            }

        })

        const 배당표Ⅰ = new Edit('배당표Ⅰ', new JsonZoonData('배당표Ⅰ', {}), {
            isShow: true,
            isEnable: true
        })
        const Table32 = new Edit('Table32', new JsonZoonData('Table32', {}), {
            isShow: true,
            isEnable: true
        })
        const Table33 = new Edit('Table33', new JsonZoonData('Table33', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_배당표_주택임대차보증금_계산 = new DBGrid('DBGrid_배당표_주택임대차보증금_계산', new JsonZoonData('Q_배당표_주택임차보증금_계산', {}), {
            isShow: true,
            isEnable: true
        }).on('OnEditChanged', function () {

            MC_배당표_배당금_기본항목자동설정();


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').NextTab();

        })
            .on('OnEnterKey', function () {

                MC_배당표_배당금_기본항목자동설정();


                GetComponent('DBGrid_배당표_주택임대차보증금_계산').NextTab();

            })
            .on('OnValidate', function () {

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(-1, [
                    {key: '배당표_실제임대차보증금_변경전', value: 'LEASE_AMT_ORG'},

                    {key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT'},

                    {key: '배당표_방의총수_변경전', value: 'POSS_A_RM_CNT_ORG'},

                    {key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT'},

                    {key: '배당표_확정일자_변경전', value: 'FXDATE_YN_ORG'},

                    {key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN'},
                ]);

                if (GetValue('배당표_주택임대차보증금_실제임대차보증금') == GetValue('배당표_실제임대차보증금_변경전')
                    && GetValue('배당표_주택임대차보증금_적용한방의총수') == GetValue('배당표_방의총수_변경전')
                    && GetValue('배당표_주택임대차보증금_확정일자_보유여부') == GetValue('배당표_확정일자_변경전')) {
                    SetValue('배당표_변경여부', "N")

                } else {
                    SetValue('배당표_변경여부', "Y")
                }


                if ((GetValue('배당표_변경여부') != 'Y')) {
                    return false;
                }


                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurColName('배당표_주택임대차보증금_ColName');

                if (GetValue('배당표_주택임대차보증금_ColName') == 'RNO') {

                    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SortField('RNO', 1);

                }


                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurSel('i');


                MC_배당표_주택임대차보증금_계산();


                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(-1, [
                    {key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN'},

                    {key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT'},

                    {key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT'},
                ]);


                GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRow(-1, [
                    {key: 'FXDATE_YN_ORG', value: GetValue('배당표_주택임대차보증금_확정일자_보유여부')},

                    {key: 'POSS_A_RM_CNT_ORG', value: GetValue('배당표_주택임대차보증금_적용한방의총수')},

                    {key: 'LEASE_AMT_ORG', value: GetValue('배당표_주택임대차보증금_실제임대차보증금')},
                ]);


                SetValue('배당표_변경여부', "N")


                MC_배당표_배당금_기본항목자동설정();

            })

        const Table34 = new Edit('Table34', new JsonZoonData('Table34', {}), {
            isShow: true,
            isEnable: true
        })
        const Table35 = new Edit('Table35', new JsonZoonData('Table35', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_배당표_상가건물_임대차보증금_계산 = new DBGrid('DBGrid_배당표_상가건물_임대차보증금_계산', new JsonZoonData('Q_배당표_상가임차보증금_계산', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetCurColName('배당표_상가_ColName');

        })
            .on('OnEditChanged', function () {
                if (GetValue('배당표_상가_ColName') == 'RNO') {

                    // GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').SortField('None', None);

                }


                GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetCurSel('i');


                MC_배당표_상가임대차보증금_계산();


                MC_배당표_배당금_기본항목자동설정();

            })
            .on('OnEnterKey', function () {

                GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').NextTab();

            })

        const Table36 = new Edit('Table36', new JsonZoonData('Table36', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_배당표_경매비용 = new MaskEdit('Edit_배당표_경매비용', new JsonZoonData('Edit_배당표_경매비용', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Combo_배당표_최고채권액 = new Combo('Combo_배당표_최고채권액', new JsonZoonData('Q_코드_최고채권액', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_최고채권액').FindIndex('Combo_Idx', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_최고채권액'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_최고채권액').GetRow(GetValue('Combo_Idx'), [
                {key: 'Edit_배당표_경매비용', value: 'ATTR_02'},
            ]);


            MC_배당표_주택임대차보증금_계산_전체();


            MC_배당표_상가임대차보증금_계산_전체();


            MC_배당표_배당금_기본항목자동설정();

        })

        const Label46 = new Label('Label46', new JsonZoonData('Label46', {}), {
            isShow: true,
            isEnable: true
        })
        const Label38 = new Label('Label38', new JsonZoonData('Label38', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture46 = new Picture('Picture46', new JsonZoonData('Picture46', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture47 = new Picture('Picture47', new JsonZoonData('Picture47', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurSel('배당표_주택임대차보증금_RowPosition');


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').DeleteRow(GetNumber('배당표_주택임대차보증금_RowPosition'));


            MC_배당표_주택임대차보증금_계산();

        })

        const Picture50 = new Picture('Picture50', new JsonZoonData('Picture50', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows("", [
                {key: '배당표_주택임대차보증금_각구의일련번호_Arr', value: 'RNO'},
            ]);


            SetValue('배당표_주택임대차보증금_각구의일련번호', NumToStr(Max('배당표_주택임대차보증금_각구의일련번호_Arr') + 1))


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').AddRow({
                'CHECK_YN': 0,
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'RNO': GetValue('배당표_주택임대차보증금_각구의일련번호')
            });


            // GetComponent('DBGrid_본건').GetRowCount('None');


            SetValue('본건_RowCount', GetValue('본건_RowCount') - 1);


            // GetComponent('DBGrid_본건').SetCurSel(None);


            // GetComponent('DBGrid_본건').SetEditFocus(None, 'None');

        })

        const Edit_배당표_예상낙찰가 = new MaskEdit('Edit_배당표_예상낙찰가', new JsonZoonData('Edit_배당표_예상낙찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_경락가액 = new MaskEdit('Edit_배당표_경락가액', new JsonZoonData('Edit_배당표_경락가액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label44 = new Label('Label44', new JsonZoonData('Label44', {}), {
            isShow: true,
            isEnable: true
        })
        const Label43 = new Label('Label43', new JsonZoonData('Label43', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_배당표_가임대보증금적용범위 = new Combo('Combo_배당표_가임대보증금적용범위', new JsonZoonData('Q_코드_가임대보증금적용범위', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_가임대보증금적용범위').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_가임대보증금적용범위'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_가임대보증금적용범위').GetRow(GetValue('배당표_주택임대차보증금_RowPosition'), [
                {key: 'Edit_배당표_적용할주택가임대보증금액', value: 'ATTR_02'},
            ]);


            MC_배당표_주택임대차보증금_계산_전체();


            MC_배당표_배당금_기본항목자동설정();

        })

        const Edit_배당표_적용할주택가임대보증금액 = new MaskEdit('Edit_배당표_적용할주택가임대보증금액', new JsonZoonData('Edit_배당표_적용할주택가임대보증금액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label45 = new Edit('Label45', new JsonZoonData('Label45', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_배당표_합계_총방의개수 = new MaskEdit('Edit_배당표_합계_총방의개수', new JsonZoonData('Edit_배당표_합계_총방의개수', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_합계_적용한방의개수 = new MaskEdit('Edit_배당표_합계_적용한방의개수', new JsonZoonData('Edit_배당표_합계_적용한방의개수', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_합계_실제임대차보증금 = new MaskEdit('Edit_배당표_합계_실제임대차보증금', new JsonZoonData('Edit_배당표_합계_실제임대차보증금', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_합계_최종적용가임대보증금 = new MaskEdit('Edit_배당표_합계_최종적용가임대보증금', new
        JsonZoonData('Edit_배당표_합계_최종적용가임대보증금', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_합계_주택임대차보증금_확정 = new MaskEdit('Edit_배당표_합계_주택임대차보증금_확정', new
        JsonZoonData('Edit_배당표_합계_주택임대차보증금_확정', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_합계_주택임대차보증금_확정없는 = new MaskEdit('Edit_배당표_합계_주택임대차보증금_확정없는', new
        JsonZoonData('Edit_배당표_합계_주택임대차보증금_확정없는', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Picture51 = new Picture('Picture51', new JsonZoonData('Picture51', {}), {
            isShow: true,
            isEnable: false
        })
        const Label47 = new Label('Label47', new JsonZoonData('Label47', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_배당표_상가_임대차보호법 = new Edit('Edit_배당표_상가_임대차보호법', new JsonZoonData('Edit_배당표_상가_임대차보호법', {}), {
            isShow: false,
            isEnable: false
        })
        const Edit_배당표_상가_가임대보증금_적용범위 = new Edit('Edit_배당표_상가_가임대보증금_적용범위', new
        JsonZoonData('Edit_배당표_상가_가임대보증금_적용범위', {}), {
            isShow: false,
            isEnable: false
        })
        const Picture52 = new Picture('Picture52', new JsonZoonData('Picture52', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRows("", [
                {key: '배당표_상가임대차보증금_각구의일련번호_Arr', value: 'RNO'},
            ]);


            SetValue('배당표_상가임대차보증금_각구의일련번호', NumToStr(Max('배당표_상가임대차보증금_각구의일련번호_Arr') + 1))


            GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').AddRow({
                'CHECK_YN': 0,
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'RNO': GetValue('배당표_상가임대차보증금_각구의일련번호')
            });


            // GetComponent('DBGrid_본건').GetRowCount('None');


            SetValue('본건_RowCount', GetValue('본건_RowCount') - 1);


            // GetComponent('DBGrid_본건').SetCurSel(None);


            // GetComponent('DBGrid_본건').SetEditFocus(None, 'None');

        })

        const Picture53 = new Picture('Picture53', new JsonZoonData('Picture53', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetCurSel('배당표_상가_RowPosition');


            GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').DeleteRow(GetNumber('배당표_상가_RowPosition'));


            MC_배당표_상가임대차보증금_계산();

        })

        const Combo_배당표_상가_가임대보증금_적용범위 = new Combo('Combo_배당표_상가_가임대보증금_적용범위', new JsonZoonData('Q_코드_가임대보증금적용범위_상가', {}), {
            isShow: true,
            isEnable: false,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_상가_가임대보증금_적용범위'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetValue('배당표_상가_RowPosition'), [
                {key: 'Edit_배당표_적용할상가가임대보증금액', value: 'ATTR_02'},

                {key: 'Edit_배당표_상가_가임대보증금_적용범위', value: 'ATTR_04'},
            ]);


            MC_배당표_상가임대차보증금_계산_전체();


            MC_배당표_배당금_기본항목자동설정();

        })

        const Edit_배당표_적용할상가가임대보증금액 = new MaskEdit('Edit_배당표_적용할상가가임대보증금액', new JsonZoonData('Edit_배당표_적용할상가가임대보증금액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label39 = new Label('Label39', new JsonZoonData('Label39', {}), {
            isShow: true,
            isEnable: true
        })
        const Label40 = new Label('Label40', new JsonZoonData('Label40', {}), {
            isShow: true,
            isEnable: true
        })
        const Label41 = new Label('Label41', new JsonZoonData('Label41', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_배당표_상가_합계_보증금 = new MaskEdit('Edit_배당표_상가_합계_보증금', new JsonZoonData('Edit_배당표_상가_합계_보증금', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_상가_합계_월세 = new MaskEdit('Edit_배당표_상가_합계_월세', new JsonZoonData('Edit_배당표_상가_합계_월세', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_상가_합계_실제임대차보증금 = new MaskEdit('Edit_배당표_상가_합계_실제임대차보증금', new
        JsonZoonData('Edit_배당표_상가_합계_실제임대차보증금', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_상가_합계_최우선변제보증금 = new MaskEdit('Edit_배당표_상가_합계_최우선변제보증금', new
        JsonZoonData('Edit_배당표_상가_합계_최우선변제보증금', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_상가_합계_상가임대차보증금_확정 = new MaskEdit('Edit_배당표_상가_합계_상가임대차보증금_확정', new
        JsonZoonData('Edit_배당표_상가_합계_상가임대차보증금_확정', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_상가_예상낙찰가 = new MaskEdit('Edit_배당표_상가_예상낙찰가', new JsonZoonData('Edit_배당표_상가_예상낙찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_상가_경락가액 = new MaskEdit('Edit_배당표_상가_경락가액', new JsonZoonData('Edit_배당표_상가_경락가액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_상가_합계_상가임대차보증금_확정없는 = new MaskEdit('Edit_배당표_상가_합계_상가임대차보증금_확정없는', new
        JsonZoonData('Edit_배당표_상가_합계_상가임대차보증금_확정없는', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Edit_배당표_최고채권액 = new MaskEdit('Edit_배당표_최고채권액', new JsonZoonData('Edit_배당표_최고채권액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label49 = new Label('Label49', new JsonZoonData('Label49', {}), {
            isShow: true,
            isEnable: true
        })
        const 배당표Ⅱ = new Edit('배당표Ⅱ', new JsonZoonData('배당표Ⅱ', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture54 = new Picture('Picture54', new JsonZoonData('Picture54', {}), {
            isShow: true,
            isEnable: false
        })
        const Label42 = new Label('Label42', new JsonZoonData('Label42', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_배당금건물_계산M = new DBGrid('DBGrid_배당금건물_계산M', new JsonZoonData('Q_배당표_배당금건물_계산M', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            if (true) {
                return false;
            }


            // GetComponent('DBGrid_배당금_계산').GetCurColName('None');

        })
            .on('OnEditChanged', function () {

                if (true) {
                    return false;
                }


                MC_배당표_배당금_계산();


                // GetComponent('DBGrid_배당금_계산').GetRow(None, None);


                GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산_RowPosition', (row) => {

                    if ((row['CD_CODE'] == GetValue('Combo_배당표_배당금계산_권리의내용'))) {
                        return true;
                    }

                    return false;
                });


                GetZoonData('Q_코드_권리의내용').GetRow(GetValue('배당표_배당금계산_RowPosition'), [
                    {key: '배당표_배당금계산_배당순위', value: 'ATTR_08'},
                ]);


                GetComponent('DBGrid_배당금_계산').SetRow("", [
                    Non
                ]);

            })
            .on('OnSelectChange', function () {

                GetComponent('DBGrid_배당금건물_계산M').GetRow(-1, [
                    {key: '배당표_배당금계산건물M_순번', value: 'REGI_GU'},
                ]);


                GetComponent('DBGrid_배당금건물_계산D').GetRowCount('배당표_배당금계산건물_RowCount');

                if (GetValue('배당표_배당금계산건물_RowCount') > -1000) {

                    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산건물_RowCount'); SetValue('i', GetValue('i') + 1)) {
                        MC_건물배당금계산_SYNC();
                    }


                    GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();

                }


                if (true) {
                    return false;
                }


                GetComponent('DBGrid_배당금건물_계산M').GetCurSel('건물_그리드_IDX');


                MC_건물_그리드_인덱스_Sync();

            })

        const Label48 = new Label('Label48', new JsonZoonData('Label48', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture55 = new Picture('Picture55', new JsonZoonData('Picture55', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture58 = new Picture('Picture58', new JsonZoonData('Picture58', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('배당표_배당금계산_당사설정', "");

            SetValue('배당표_배당금계산_발생일자', "");


            GetComponent('DBGrid_배당금건물_계산M').GetRow(-1, [
                {key: '배당표_배당금계산건물M_순번', value: 'REGI_GU'},
            ]);


            if (isEmpty(GetValue('배당표_배당금계산건물M_순번'))) {

                if (!MsgBox('입력 대상 건물 선택하여 주십시오.', '', true)) {
                    return false;
                }

            }


            GetComponent('DBGrid_배당금건물_계산D').GetRows("", [
                {key: '배당표_배당금계산건물_배당순위_Arr', value: 'RANK'},

                {key: '배당표_배당금계산건물_표시순위_Arr', value: 'DISP_RANK'},
            ]);


            SetValue('배당표_배당금계산건물_배당순위', Max('배당표_배당금계산건물_배당순위_Arr') + 1)

            SetValue('배당표_배당금계산건물_표시순위', Max('배당표_배당금계산건물_표시순위_Arr'))

            if (StrToNum(GetValue('배당표_배당금계산건물_표시순위')) < 100) {
                SetValue('배당표_배당금계산건물_표시순위', "101")
            } else {
                SetValue('배당표_배당금계산건물_표시순위', NumToStr(StrToNum(GetValue('배당표_배당금계산건물_표시순위')) + 1))
            }


            GetComponent('DBGrid_배당금건물_계산D').AddRow({
                'ERA_YN': 'N',
                'LN_SEQ': GetValue('배당표_배당금계산건물M_순번'),
                'RANK': GetValue('배당표_배당금계산건물_배당순위'),
                'SHA_GU': 3,
                'DISP_RANK': GetValue('배당표_배당금계산건물_표시순위'),
                'IS_ENABLE': 1
            });


            if (true) {
                return false;
            }


            // GetComponent('DBGrid_가격사례_D').GetRowCount('None');


            SetValue('가격사례_D_RowCount', GetValue('가격사례_D_RowCount') - 1);


            // GetComponent('DBGrid_가격사례_D').SetCurSel(None);


            // GetComponent('DBGrid_가격사례_D').SetEditFocus(None, 'None');

        })

        const Picture59 = new Edit('Picture59', new JsonZoonData('Picture59', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당금건물_계산D').GetCurSel('배당표_배당금계산건물_RowPosition');


            if (GetValue('배당표_배당금계산건물_RowPosition') <= 5) {

                if (!MsgBox('고정된 항목은 삭제하실 수 없습니다.', '', true)) {
                    return false;
                }

            }


            GetComponent('DBGrid_배당금건물_계산D').GetRow(-1, [
                {key: '배당표_배당금계산건물_순번', value: 'LN_SEQ'},

                {key: '배당표_배당금계산건물_배당순위', value: 'RANK'},
            ]);


            GetZoonData('Q_배당표_배당금건물_계산D').FindIndex('i', (row) => {

                if ((row['RANK'] == GetValue('배당표_배당금계산건물_배당순위')) && (row['LN_SEQ'] == GetValue('배당표_배당금계산건물_순번'))) {
                    return true;
                }

                return false;
            });

            if (GetValue('i') >= 0) {

                GetZoonData('Q_배당표_배당금건물_계산D').DeleteRow(GetNumber('i'));

            }


            GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();


            MC_배당표_배당금건물_계산_EditChange();


            if (true) {
                return false;
            }


            MC_건물배당금계산_SYNC();

        })

        const DBGrid_배당금_계산M = new DBGrid('DBGrid_배당금_계산M', new JsonZoonData('Q_배당표_배당금_계산M', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            if (true) {
                return false;
            }


            // GetComponent('DBGrid_배당금_계산').GetCurColName('None');

        })
            .on('OnEditChanged', function () {

                if (true) {
                    return false;
                }


                MC_배당표_배당금_계산();


                // GetComponent('DBGrid_배당금_계산').GetRow(None, None);


                GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산_RowPosition', (row) => {

                    if ((row['CD_CODE'] == GetValue('배당표_배당금계산_권리의내용'))) {
                        return true;
                    }

                    return false;
                });


                GetZoonData('Q_코드_권리의내용').GetRow(GetValue('배당표_배당금계산_RowPosition'), [
                    {key: '배당표_배당금계산_배당순위', value: 'ATTR_08'},
                ]);


                // GetComponent('DBGrid_배당금_계산').SetRow("", [
                //     Non
                // ]);

            })
            .on('OnSelectChange', function () {

                GetComponent('DBGrid_배당금_계산M').GetRow(-1, [
                    {key: '배당표_배당금계산M_순번', value: 'LN_SEQ'},
                ]);


                GetComponent('DBGrid_배당금_계산D').GetRowCount('배당표_배당금계산_RowCount');

                if (GetValue('배당표_배당금계산_RowCount') > -1000) {

                    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산_RowCount'); SetValue('i', GetValue('i') + 1)) {
                        MC_토지배당금계산_SYNC();
                    }


                    GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();

                }


                GetComponent('DBGrid_배당금_계산M').GetCurSel('그리드_IDX');


                MC_그리드_인덱스_Sync();

            })

        const Picture56 = new Picture('Picture56', new JsonZoonData('Picture56', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('배당표_배당금계산_당사설정', "");

            SetValue('배당표_배당금계산_발생일자', "");


            GetComponent('DBGrid_배당금_계산M').GetRow(-1, [
                {key: '배당표_배당금계산M_순번', value: 'LN_SEQ'},
            ]);


            if (isEmpty(GetValue('배당표_배당금계산M_순번'))) {

                if (!MsgBox('입력 대상 토지를 선택하여 주십시오.', '', true)) {
                    return false;
                }

            }


            GetComponent('DBGrid_배당금_계산D').GetRows("", [
                {key: '배당표_배당금계산_배당순위_Arr', value: 'RANK'},

                {key: '배당표_배당금계산_표시순위_Arr', value: 'DISP_RANK'},
            ]);


            SetValue('배당표_배당금계산_배당순위', Max('배당표_배당금계산_배당순위_Arr') + 1)

            SetValue('배당표_배당금계산_표시순위', Max('배당표_배당금계산_표시순위_Arr'))

            if (StrToNum(GetValue('배당표_배당금계산_표시순위')) < 100) {
                SetValue('배당표_배당금계산_표시순위', "101")
            } else {
                SetValue('배당표_배당금계산_표시순위', NumToStr(StrToNum(GetValue('배당표_배당금계산_표시순위')) + 1))
            }


            GetComponent('DBGrid_배당금_계산D').AddRow({
                'ERA_YN': 'N',
                'LN_SEQ': GetValue('배당표_배당금계산M_순번'),
                'RANK': GetValue('배당표_배당금계산_배당순위'),
                'SHA_GU': 2,
                'DISP_RANK': GetValue('배당표_배당금계산_표시순위'),
                'IS_ENABLE': 1,
                'CRED_COMB_AMT_ORG': 0,
                'CRED_SELF_AMT_ORG': 0,
                'CRED_COMB_AMT': 0,
                'CRED_SELF_AMT': 0
            });


            if (true) {
                return false;
            }


            // GetComponent('DBGrid_가격사례_D').GetRowCount('None');


            SetValue('가격사례_D_RowCount', GetValue('가격사례_D_RowCount') - 1);


            // GetComponent('DBGrid_가격사례_D').SetCurSel(None);


            // GetComponent('DBGrid_가격사례_D').SetEditFocus(None, 'None');

        })

        const Picture57 = new Picture('Picture57', new JsonZoonData('Picture57', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당금_계산D').GetCurSel('배당표_배당금계산_RowPosition');


            if (GetValue('배당표_배당금계산_RowPosition') <= 5) {

                if (!MsgBox('고정된 항목은 삭제하실 수 없습니다.', '', true)) {
                    return false;
                }

            }


            GetComponent('DBGrid_배당금_계산D').GetRow(-1, [
                {key: '배당표_배당금계산_순번', value: 'LN_SEQ'},

                {key: '배당표_배당금계산_배당순위', value: 'RANK'},
            ]);


            GetZoonData('Q_배당표_배당금_계산D').FindIndex('i', (row) => {
                if ((row['RANK'] == GetValue('배당표_배당금계산_배당순위')) && (row['LN_SEQ'] == GetValue('배당표_배당금계산_순번'))) {
                    return true;
                }

                return false;
            });

            if (GetValue('i') >= 0) {

                GetZoonData('Q_배당표_배당금_계산D').DeleteRow(GetNumber('i'));

            }


            GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();


            MC_배당표_배당금_계산_EditChange();


            if (true) {
                return false;
            }


            MC_토지배당금계산_SYNC();

        })

        const DBGrid_배당금_계산D = new DBGrid('DBGrid_배당금_계산D', new DBGridZoonData('Q_배당표_배당금_계산D', {}, [
            'YYYY',
            'SEQ',
            'SHA_GU',
            'LN_SEQ',
            'RANK',
            'DISP_RANK',
            'RIGHT_DATE',
            'RIGHT_PERSON',
            'RIGHT_CODE',
            'ERA_YN',
            'CRED_SELF_AMT',
            'CRED_COMB_AMT',
            'IS_ENABLE',
            'CRED_SELF_AMT_ORG',
            'CRED_COMB_AMT_ORG',
            'PRO_RATE_CODE',
            'HITE_YN',
            'PRO_RATE_GU',
            'PRO_RATE_DIV',
            'PRO_RATE_STEP',
            'PRO_RATE_CYCLE',
            'FLAG',
        ], [
            { key: 'LN_SEQ', value: '배당표_배당금계산M_순번', condition: '=='}
        ]), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function() {

            GetComponent('DBGrid_배당금_계산D').GetRowCount('배당표_배당금계산_RowCount');



            if ( GetValue('배당표_배당금계산_RowCount') > 6 ) {
                SetValue('배당표_배당금_순위설정', "1")
            } else {
                SetValue('배당표_배당금_순위설정', "0")
            }

        })
            .on('OnEditChanged', function() {

                MC_배당표_배당금_계산_EditChange();

            })
            .on('OnEnterKey', function() {

                GetComponent('DBGrid_배당금_계산D').GetCurColName('배당표_배당금계산_ColName');


                MC_배당표_배당금_계산();


                GetComponent('DBGrid_배당금_계산D').NextTab();

            })
            .on('OnValidate', function() {

                GetComponent('DBGrid_배당금_계산D').GetCurColName('배당표_배당금계산_ColName');


                MC_배당표_배당금_계산();

            })

        const Picture62 = new Picture('Picture62', new JsonZoonData('Picture62', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            if (!MsgBox('현재 배당 항목을 모든 배당자료에 적용합니다. 진행하시겠습니까?', '',false)) {
                return false;
            }


            GetComponent('DBGrid_배당금_계산M').GetRow(-1, [
                {key: '배당표_배당금계산_순번', value: 'LN_SEQ'},
            ]);


            GetZoonData('Q_배당표_배당금_계산D').FindIndexArray('m_index', (row) => {

                if (row['LN_SEQ'] == GetValue('배당표_배당금계산_순번')) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_배당표_배당금_계산D').GetRows(GetValue('m_index'), [
                {key: '배당표_배당금계산_순번_Arr', value: 'SEQ'},

                {key: '배당표_배당금계산_배당순위_Arr', value: 'RANK'},

                {key: '배당표_배당금계산_표시순위_Arr', value: 'DISP_RANK'},

                {key: '배당표_배당금계산_발생일자_Arr', value: 'RIGHT_DATE'},

                {key: '배당표_배당금계산_당사설정_Arr', value: 'HITE_YN'},

                {key: '배당표_배당금계산_권리자_Arr', value: 'RIGHT_PERSON'},

                {key: '배당표_배당금계산_권리의내용_Arr', value: 'RIGHT_CODE'},

                {key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN'},

                {key: '배당표_배당금계산_단독담보_Arr', value: 'CRED_SELF_AMT'},

                {key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT'},

                {key: '배당표_배당금계산_단독담보_ORG_Arr', value: 'CRED_SELF_AMT_ORG'},

                {key: '배당표_배당금계산_공동담보_ORG_Arr', value: 'CRED_COMB_AMT_ORG'},

                {key: '배당표_배당금계산_배당순위_Proc_Arr', value: 'PRO_RATE_CODE'},
            ]);


            SetValue('배당표_배당금계산TMP_RowCount', GetArrayCnt('배당표_배당금계산_순번_Arr'))


            GetZoonData('Q_배당표_배당금_계산D').EmptyQuery();


            GetComponent('DBGrid_배당금_계산M').GetRowCount('배당표_배당금계산_RowCount');


            for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산_RowCount'); SetValue('i', GetValue('i') + 1)) {
                MC_배당표_배당금_공통();
            }


            GetZoonData('Q_배당표_배당금건물_계산D').EmptyQuery();


            GetComponent('DBGrid_배당금건물_계산M').GetRowCount('배당표_배당금계산건물_RowCount');


            for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산건물_RowCount'); SetValue('i', GetValue('i') + 1)) {
                MC_배당표_배당금건물_공통();
            }


            GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();


            GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();

        })


        const Table37 = new Edit('Table37', new JsonZoonData('Table37', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_배당표_총예상낙찰가 = new MaskEdit('Edit_배당표_총예상낙찰가', new JsonZoonData('Edit_배당표_총예상낙찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label52 = new Label('Label52', new JsonZoonData('Label52', {}), {
            isShow: true,
            isEnable: true
        })
        const DBGrid_배당금건물_계산D = new DBGrid('DBGrid_배당금건물_계산D', new DBGridZoonData('Q_배당표_배당금건물_계산D', {}, [
            'YYYY',
            'SEQ',
            'SHA_GU',
            'LN_SEQ',
            'RANK',
            'DISP_RANK',
            'RIGHT_DATE',
            'RIGHT_PERSON',
            'RIGHT_CODE',
            'ERA_YN',
            'CRED_SELF_AMT',
            'CRED_COMB_AMT',
            'IS_ENABLE',
            'CRED_SELF_AMT_ORG',
            'CRED_COMB_AMT_ORG',
            'PRO_RATE_CODE',
            'HITE_YN',
            'PRO_RATE_GU',
            'PRO_RATE_DIV',
            'PRO_RATE_STEP',
            'PRO_RATE_CYCLE',
            'FLAG'
        ], [
            {key: 'LN_SEQ', value: '배당표_배당금계산건물M_순번', condition: '=='}
        ]), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당금_계산D').GetRowCount('배당표_배당금계산_RowCount');


            if (GetValue('배당표_배당금계산_RowCount') > 6) {
                SetValue('배당표_배당금_순위설정', "1")
            } else {
                SetValue('배당표_배당금_순위설정', "0")
            }

        })
            .on('OnEditChanged', function () {

                MC_배당표_배당금건물_계산_EditChange();

            })
            .on('OnEnterKey', function () {

                GetComponent('DBGrid_배당금건물_계산D').GetCurColName('배당표_배당금계산건물_ColName');


                MC_배당표_배당금건물_계산();


                GetComponent('DBGrid_배당금건물_계산D').NextTab();

            })
            .on('OnValidate', function () {

                GetComponent('DBGrid_배당금건물_계산D').GetCurColName('배당표_배당금계산건물_ColName');


                MC_배당표_배당금건물_계산();

            })


        const 문서관리 = new Edit('문서관리', new JsonZoonData('문서관리', {}), {
            isShow: true,
            isEnable: true
        })
        const Command_사진_추가 = new Picture('Command_사진_추가', new JsonZoonData('Command_사진_추가', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_사진관리').GetRows("", [
                {key: '사진관리_Seq_Arr', value: 'LN_SEQ'},
            ]);


            SetValue('사진관리_Seq', Max('사진관리_Seq_Arr') + 1)


            SetValue('사진관리_키값_임시', GetNumber('년도') + GetNumber('감정순번') + NumToStr(GetNumber('사진관리_Seq')))


            GetComponent('DBGrid_사진관리').AddRow({
                'FILE_NAME_TMP': GetValue('사진관리_키값_임시'),
                'LN_SEQ': GetValue('사진관리_Seq'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번')
            });


            GetComponent('DBGrid_사진관리').GetRowCount('사진관리_RowCount');


            GetValue('사진관리_RowCount')


            GetComponent('DBGrid_사진관리').SetCurSel(GetNumber('사진관리_RowCount'));


            GetComponent('DBGrid_사진관리').SetEditFocus(GetNumber('사진관리_RowCount') - 1, 'b_size');

        })

        const Command_사진_삭제 = new Picture('Command_사진_삭제', new JsonZoonData('Command_사진_삭제', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_사진관리').GetCurSel('사진관리_RowPosition');


            GetComponent('DBGrid_사진관리').DeleteRow(GetNumber('사진관리_RowPosition'));

        })

        const Command_SetGridData = new Command('Command_SetGridData', new JsonZoonData('Command_SetGridData', {}), {
            isShow: false,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_사진관리').SetRow(-1, [
                {key: 'FILE_NAME', value: GetValue('Edit_FileName')},
            ]);

        })

        const Edit_FileName_Tmp = new Edit('Edit_FileName_Tmp', new JsonZoonData('Edit_FileName_Tmp', {}), {
            isShow: false,
            isEnable: false
        })
        const Edit_FileName = new Edit('Edit_FileName', new JsonZoonData('Edit_FileName', {}), {
            isShow: false,
            isEnable: false
        })
        const Picture15 = new Picture('Picture15', new JsonZoonData('Picture15', {}), {
            isShow: true,
            isEnable: false
        })
        const Label11 = new Label('Label11', new JsonZoonData('Label11', {}), {
            isShow: true,
            isEnable: true
        })
        const Label14 = new Label('Label14', new JsonZoonData('Label14', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture22 = new Picture('Picture22', new JsonZoonData('Picture22', {}), {
            isShow: true,
            isEnable: false
        })
        const Label75 = new Label('Label75', new JsonZoonData('Label75', {}), {
            isShow: true,
            isEnable: false
        })
        const Command_문서_추가 = new Picture('Command_문서_추가', new JsonZoonData('Command_문서_추가', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_문서').GetRows("", [
                {key: '사진관리_Seq_Arr', value: 'LN_SEQ'},
            ]);


            SetValue('사진관리_Seq', Max('사진관리_Seq_Arr') + 1)


            SetValue('사진관리_키값_임시', GetValue('년도') + GetValue('감정순번') + NumToStr(GetValue('사진관리_Seq')))


            GetComponent('DBGrid_문서').AddRow({
                'FILE_NAME_TMP': GetValue('사진관리_키값_임시'),
                'LN_SEQ': GetValue('사진관리_Seq'),
                'PHOTO_DIV': 4,
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번')
            });


            GetComponent('DBGrid_문서').GetRowCount('사진관리_RowCount');


            SetValue('사진관리_RowCount', GetValue('사진관리_RowCount') - 1);


            GetComponent('DBGrid_문서').SetCurSel(GetNumber('사진관리_RowCount'));


            GetComponent('DBGrid_문서').SetEditFocus(GetNumber('사진관리_RowCount') - 1, 'b_size');

        })

        const Command_문서_삭제 = new Picture('Command_문서_삭제', new JsonZoonData('Command_문서_삭제', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_문서').GetCurSel('사진관리_RowPosition');


            GetComponent('DBGrid_문서').DeleteRow(GetNumber('사진관리_RowPosition'));

        })

        const Label91 = new Label('Label91', new JsonZoonData('Label91', {}), {
            isShow: true,
            isEnable: false
        })
        const DBGrid_사진관리 = new DBGrid('DBGrid_사진관리', new JsonZoonData('Q_문서관리_사진', {}), {
            isShow: true,
            isEnable: true
        }).on('OnButtonClick', function () {

            GetComponent('DBGrid_사진관리').GetRow(-1, [
                {key: '사진관리_키값', value: 'FILE_NAME'},

                {key: '사진관리_키값_임시', value: 'FILE_NAME_TMP'},

                {key: '00_TEMP', value: 'PHOTO_DIV'},
            ]);


            if (isEmpty(GetValue('00_TEMP'))) {

                if (!MsgBox("[구분]을 먼저 선택하세요.", '[알림]', true)) {
                    return false;
                }

            }


            SetValue('Edit_FileName', GetValue('사진관리_키값'))
            SetValue('Edit_FileName_Tmp', GetValue('사진관리_키값_임시'))
            SetValue('사진_URL', "es00_p01.jsp?userRole==" + GetValue('_권한'))


            Navigate('None',
                {}, 'left=0,top=0,width=860,height=700');

        })
            .on('OnDblClick', function () {

                GetComponent('DBGrid_사진관리').GetRow(-1, [
                    {key: '사진관리_키값', value: 'FILE_NAME'},

                    {key: '사진관리_키값_임시', value: 'FILE_NAME_TMP'},

                    {key: '00_TEMP', value: 'PHOTO_DIV'},
                ]);


                if (isEmpty(GetValue('00_TEMP'))) {

                    if (!MsgBox("[구분]을 먼저 선택하세요.", '[알림]', true)) {
                        return false;
                    }

                }


                SetValue('Edit_FileName', GetValue('사진관리_키값'))
                SetValue('Edit_FileName_Tmp', GetValue('사진관리_키값_임시'))
                SetValue('사진_URL', "es00_p01.jsp?userRole==" + GetValue('_권한'))


                Navigate('None',
                    {}, 'left=0,top=0,width=860,height=700');

            })

        const DBGrid_문서 = new DBGrid('DBGrid_문서', new JsonZoonData('Q_문서관리_관련문서', {}), {
            isShow: true,
            isEnable: true
        }).on('OnButtonClick', function () {

            // if ((GetValue('_권한') == 'O')) {
            //     return false;
            // }
            //
            //
            // SetValue('문서_다운로드할파일명', "");
            //
            // SetValue('문서_선택한파일명', "");
            //
            // SetValue('문서_전송받은파일명', "");
            //
            // SetValue('문서_전송할파일명', "");
            //
            // SetValue('문서_전송할파일크기', "");
            //
            // // GetFindFile	None
            //
            // if (isEmpty((GetValue('문서_선택한파일명'))) {
            //     return false;
            // }
            //
            //
            // SetValue('문서_전송할파일명', (Right(GetValue('문서_선택한파일명'), (StrLength(GetValue('문서_선택한파일명')) - InStrRev(GetValue('문서_선택한파일명'), '\')-1)) ) )
            //
            // SetValue('문서_전송할파일크기', GetFileSize(GetValue('문서_전송할파일명')))
            //
            // // UploadFile	None
            //
            // GetComponent('DBGrid_문서').SetRow(-1, [
            //     {key: 'FILE_NAME', value: '문서_전송할파일명'},
            //
            //     {key: 'UPLOAD_FILE', value: '문서_전송받은파일명'},
            // ]);
            //
            //
            // SetValue('is파일존재', "http://es.hite.com:8080/upload/doc/" + GetValue('문서_전송받은파일명'))
            //
            // // FileMng	isFile
            //
            // if (true) {
            //     return false;
            // }


        })
            .on('OnDblClick', function () {

                // GetComponent('DBGrid_문서').GetRow(-1, [
                //     {key: '문서_다운로드할파일명', value: 'UPLOAD_FILE'},
                // ]);
                //
                //
                // if (isEmpty(GetValue('문서_다운로드할파일명'))) {
                //
                //     if (!MsgBox('파일이 선택되지 않았습니다.', '', true)) {
                //         return false;
                //     }
                //
                // }
                //
                //
                // Navigate('None',
                //     {}, 'left=0,top=0,width=860,height=700');

            })

        const 공통보고서 = new Edit('공통보고서', new JsonZoonData('공통보고서', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture63 = new Picture('Picture63', new JsonZoonData('Picture63', {}), {
            isShow: true,
            isEnable: false
        })
        const Label53 = new Label('Label53', new JsonZoonData('Label53', {}), {
            isShow: true,
            isEnable: true
        })
        const Table38 = new Edit('Table38', new JsonZoonData('Table38', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture64 = new Picture('Picture64', new JsonZoonData('Picture64', {}), {
            isShow: true,
            isEnable: false
        })
        const Label54 = new Label('Label54', new JsonZoonData('Label54', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_지점_최저가 = new MaskEdit('Edit_공통보고서_지점_최저가', new JsonZoonData('Edit_공통보고서_지점_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label55 = new Label('Label55', new JsonZoonData('Label55', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_본사_최저가 = new MaskEdit('Edit_공통보고서_본사_최저가', new JsonZoonData('Edit_공통보고서_본사_최저가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label56 = new Label('Label56', new JsonZoonData('Label56', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_지점_최고가 = new MaskEdit('Edit_공통보고서_지점_최고가', new JsonZoonData('Edit_공통보고서_지점_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label57 = new Label('Label57', new JsonZoonData('Label57', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_본사_최고가 = new MaskEdit('Edit_공통보고서_본사_최고가', new JsonZoonData('Edit_공통보고서_본사_최고가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label58 = new Label('Label58', new JsonZoonData('Label58', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_지점_평가가격 = new MaskEdit('Edit_공통보고서_지점_평가가격', new JsonZoonData('Edit_공통보고서_지점_평가가격', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label59 = new Label('Label59', new JsonZoonData('Label59', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_본사_평가가격 = new MaskEdit('Edit_공통보고서_본사_평가가격', new JsonZoonData('Edit_공통보고서_본사_평가가격', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label60 = new Label('Label60', new JsonZoonData('Label60', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_지점_예상낙찰가율 = new MaskEdit('Edit_공통보고서_지점_예상낙찰가율', new JsonZoonData('Edit_공통보고서_지점_예상낙찰가율', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Label61 = new Label('Label61', new JsonZoonData('Label61', {}), {
            isShow: true,
            isEnable: true
        })
        const Label62 = new Label('Label62', new JsonZoonData('Label62', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_지점_예상낙찰가 = new MaskEdit('Edit_공통보고서_지점_예상낙찰가', new JsonZoonData('Edit_공통보고서_지점_예상낙찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label63 = new Label('Label63', new JsonZoonData('Label63', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_본사_예상낙찰가 = new MaskEdit('Edit_공통보고서_본사_예상낙찰가', new JsonZoonData('Edit_공통보고서_본사_예상낙찰가', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label64 = new Label('Label64', new JsonZoonData('Label64', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_지점_당사설정액 = new MaskEdit('Edit_공통보고서_지점_당사설정액', new JsonZoonData('Edit_공통보고서_지점_당사설정액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label65 = new Label('Label65', new JsonZoonData('Label65', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_본사_당사설정액 = new MaskEdit('Edit_공통보고서_본사_당사설정액', new JsonZoonData('Edit_공통보고서_본사_당사설정액', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label66 = new Label('Label66', new JsonZoonData('Label66', {}), {
            isShow: true,
            isEnable: true
        })
        const Label67 = new Label('Label67', new JsonZoonData('Label67', {}), {
            isShow: true,
            isEnable: true
        })
        const Label68 = new Label('Label68', new JsonZoonData('Label68', {}), {
            isShow: true,
            isEnable: true
        })
        const Label69 = new Label('Label69', new JsonZoonData('Label69', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_공통보고서_지점_초과부족설정분 = new Edit('Edit_공통보고서_지점_초과부족설정분', new JsonZoonData('Edit_공통보고서_지점_초과부족설정분', {}), {
            isShow: true,
            isEnable: false
        })
        const Picture65 = new Picture('Picture65', new JsonZoonData('Picture65', {}), {
            isShow: true,
            isEnable: true
        }).on('OnClick', function () {

            SetValue('URL', "es01_w02_p03.jsp?yyyy==" + GetValue('년도') + "&seq==" + GetValue('감정순번'))


            // showModalDialog('None', GetValue('None'), '');

        })

        const Q_공통보고서_트리 = new JsonZoonData('Q_공통보고서_트리', {});
        const TreeView1 = new TreeView('TreeView1', Q_공통보고서_트리, {
            isShow: true,
            isEnable: true,
            bind: [
                {value: 'LEVEL1', key: 'CD_LEVEL1'},
                {value: 'LEVEL2', key: 'CD_LEVEL2'},
                {value: 'LEVEL3', key: 'CD_LEVEL3'},
                {value: 'LEVEL4', key: 'CD_LEVEL4'},
                {value: 'LEVEL5', key: 'CD_LEVEL5'}
            ]
        }).on('OnClick', function () {

            if (true) {
                return false;
            }


            if (InStr(GetValue('TreeView1'), "/", 1, 1) > 0) {
                SetValue('ImgField1', GetValue('TreeView1'))
            } else {
                SetValue('ImgField1', "blank.gif")
            }

        })
        .on('OnDblClick', function () {

            GetZoonData('Q_공통보고서_트리').FindIndex('Combo_Idx', (row) => {

                if ((row['CD_CODE'] == GetValue('TreeView'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_공통보고서_트리').GetRow(GetValue('Combo_Idx'), [
                {key: '공통보고서_제목', value: 'CD_DESC'},
            ]);


            SetValue('URL', "es01_w02_p00.jsp?yyyy==" + GetValue('년도') + "&seq==" + GetValue('감정순번') + "&repo_div==" + GetValue('TreeView1') + "&repo_title==" + GetValue('공통보고서_제목'))


            GetComponent('TreeView1').HasChildren('None');


            if ((GetValue('공통보고서_트리') == 1)) {
                return false;
            }


            // showModalDialog('None', GetValue('None'), '');

        })

        const Edit_공통보고서_지점_평가가격_건물 = new MaskEdit('Edit_공통보고서_지점_평가가격_건물', new JsonZoonData('Edit_공통보고서_지점_평가가격_건물', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label70 = new Label('Label70', new JsonZoonData('Label70', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_본사_평가가격_건물 = new MaskEdit('Edit_공통보고서_본사_평가가격_건물', new JsonZoonData('Edit_공통보고서_본사_평가가격_건물', {}), {
            isShow: true,
            isEnable: false,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label71 = new Label('Label71', new JsonZoonData('Label71', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_공통보고서_본사_초과부족설정분 = new Edit('Edit_공통보고서_본사_초과부족설정분', new JsonZoonData('Edit_공통보고서_본사_초과부족설정분', {}), {
            isShow: true,
            isEnable: false
        })
        const Edit_공통보고서_본사_예상낙찰가율 = new MaskEdit('Edit_공통보고서_본사_예상낙찰가율', new JsonZoonData('Edit_공통보고서_본사_예상낙찰가율', {}), {
            isShow: true,
            isEnable: false,
            mask: ';7;#,###1.00',
            maskType: '숫자',
        })
        const Label92 = new Label('Label92', new JsonZoonData('Label92', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture89 = new Picture('Picture89', new JsonZoonData('Picture89', {}), {
            isShow: true,
            isEnable: false
        })
        const Table47 = new Edit('Table47', new JsonZoonData('Table47', {}), {
            isShow: true,
            isEnable: true
        })
        const Combo_보고서_평가구분 = new Combo('Combo_보고서_평가구분', new JsonZoonData('Q_99_평가구분', {}), {
            isShow: true,
            isEnable: true,
            format: {
                text: 'CD_DESC',
                value: 'CD_CODE',
                index: '',
            }
        })
        const 탁상감정 = new Edit('탁상감정', new JsonZoonData('탁상감정', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture87 = new Picture('Picture87', new JsonZoonData('Picture87', {}), {
            isShow: true,
            isEnable: false
        })
        const Label89 = new Label('Label89', new JsonZoonData('Label89', {}), {
            isShow: true,
            isEnable: true
        })
        const Table46 = new Edit('Table46', new JsonZoonData('Table46', {}), {
            isShow: true,
            isEnable: true
        })
        const Edit_탁상감정_탁상감정가 = new MaskEdit('Edit_탁상감정_탁상감정가', new JsonZoonData('Edit_탁상감정_탁상감정가', {}), {
            isShow: true,
            isEnable: true,
            mask: ';12;#,###1',
            maskType: '숫자',
        })
        const Label90 = new Label('Label90', new JsonZoonData('Label90', {}), {
            isShow: true,
            isEnable: true
        })
        const RichEditor_탁상감정 = new RichEditor('RichEditor_탁상감정', new JsonZoonData('RichEditor_탁상감정', {}), {
            isShow: true,
            isEnable: true
        })
        const Picture86 = new Picture('Picture86', new JsonZoonData('Picture86', {}), {
            isShow: (GetValue('isReadOnly') == 'O'),
            isEnable: true
        }).on('OnClick', function () {

            SetValue('URL', "es01_w02_p03.jsp?yyyy==" + GetValue('년도') + "&seq==" + GetValue('감정순번'))


            // showModalDialog('None', GetValue('None'), '');

        })

        const Picture85 = new Picture('Picture85', new JsonZoonData('Picture85', {}), {
            isShow: (GetValue('isReadOnly') == 'O'),
            isEnable: true
        }).on('OnClick', function () {

            if (isEmpty(GetValue('Edit_탁상감정_탁상감정가'))) {

                if (!MsgBox('탁상감정가를 입력하여 주십시오.', '', true)) {
                    return false;
                }

            }


            if (!MsgBox("해당 담당자가 확인 가능하게 됩니다."+Hex(10)+"저장하시겠습니까?", '', true)) {
                return false;
            }


            GetComponent('RichEditor_탁상감정').GetRichEditorRTF('탁상감정_내용');


            SetValue('탁상감정_내용', StrReplace(GetValue('탁상감정_내용'), "'", "&qt"))
            SetValue('탁상감정_회신일자', DateToStr(Now()))


            RunQuery('저장_탁상감정', {
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'ESTI_OPI': GetValue('탁상감정_내용'),
                'RES_DATE': GetValue('탁상감정_회신일자'),
                'REQ_DATE': GetValue('탁상감정_요청일자'),
                'RES_PL_BID_AMT': GetValue('Edit_탁상감정_탁상감정가')
            }, 'POST');


            RunQuery('저장_탁상감정_담보감정_M변경', {
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'RES_PL_BID_AMT': GetValue('Edit_탁상감정_탁상감정가')
            }, 'POST');


            MsgBox('정상적으로 저장되었습니다', '정상적으로 저장되었습니다', false)

        })

        const Table3 = new Edit('Table3', new JsonZoonData('Table3', {}), {
            isShow: true,
            isEnable: true
        })
    }
}