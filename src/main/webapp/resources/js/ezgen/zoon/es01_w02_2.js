const pageZoon = {

    OnInitialize: function () {
        const Combo_링크사이트 = new Combo('Combo_링크사이트', new JsonZoonData('Q_링크사이트', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {
            Hyperlink(GetString('Combo_링크사이트'), '링크사이트');
        })

        const Combo_사업부문 = new Combo('Combo_사업부문', new JsonZoonData('Q_사업부문', {}), {
            isShow: true, isEnable: false, format : {
                text : '사업부문명',
                value : '사업부문',
                index : '',
            }
        })
        const Combo_집합건물종류 = new Combo('Combo_집합건물종류', new JsonZoonData('Q_00_담보종류', {}), {
            isShow: true, isEnable: false, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
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
            isShow: (GetValue('isReadOnly') == 'N'), isEnable: true
        }).on('OnClick', function () {

            MC_999_저장_배당();


            if (GetNumber('Edit_배당표_예상낙찰가') == 0) {

                if (!MsgBox("예상낙찰가가 ZEROS(0)인 자료는 [배당처리]를 할 수 없습니다.", '[자료확인]', true)) {
                    return false;
                }

            }


            if (GetValue('02_배당표수정여부') == 'Y') {

                if (!MsgBox("배당처리 후 자료가 수정되어 있습니다" + hex(10) + "다시 배당처리를 하면 수정된 자료는 무시됩니다." + hex(10) + "배당처리할까요?", '[알림]', true)) {
                    return false;
                }

            }


            if (!MsgBox('배당처리하시겠습니까?', '', true)) {
                return false;
            }

            CallProcedure('SPESU_SINGLE_COMPUTE', {
                'IN_SEQ': GetValue('감정순번'),
                'IN_YYYY': GetValue('년도'),
                'OUT_YN': '',
            }, (res) => {
                SetValue('저장_Error_Message', Trim(res.result.OUT_YN));
            });


            if (GetValue('저장_Error_Message') != 'Y') {

                if (!MsgBox("배당처리가 정상적으로 진행되지 않았습니다." + HEX(10) + "권리자의 내용을 초기화합니다." + HEX(10) + "권리관계를 다시 입력하십시요.", '[배당처리 확인 필요]', true)) {
                    return false;
                }

            }


            SetValue('02_배당표수정여부', 'N');


            RunQuery('저장_담보마스타_담보여력등', {
                '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            }, 'POST');


            if (!MsgBox('정상적으로처리되었습니다', '', true)) {
                return false;
            }

//     BreakMacro
//     #ERROR
//     !
//         BreakMacro    [
// :
//     저장_Error_Message
// ] !=
//     ""
        })

        const Command_저장 = new Picture('Command_저장', new JsonZoonData('Command_저장', {}), {
            isShow: (GetValue('isReadOnly') == 'N'), isEnable: true
        }).on('OnClick', function () {

            if (isEmpty(GetValue('Edit_입력표_거래처'))) {

                if (!MsgBox("[제1차 거래처]" + "를 입력하세요.", '확인', true)) {
                    return false;
                }

            }


            if (GetValue('is배당처리') != 'Y') {

                if (!MsgBox('저장하시겠습니까?', '알림', false)) {
                    return false;
                }

            }


            if (isEmpty(GetValue('감정순번'))) {
                MC_900_저장_Key만들기();
            }


            MC_990_저장_ValidationCheck();


            if (isNotEmpty(GetValue('저장_Error_Message'))) {

                if (!MsgBox(GetValue('저장_Error_Message'), '', true)) {
                    return false;
                }

            }

            if (isEmpty(GetValue('Edit_Doc_Key'))) {

                RunQuery('Q_영업감정요청자료', {
                    '전체선택여부': GetValue('전체선택여부')
                }, 'GET');


                alert('[감정요청자료 문서]가 선택되지 않았습니다.');
                return;

            }


            MC_901_저장_그리드_키값();


            MC_910_저장_입력표();


            MC_912_저장_문서관리();


            RunQuery('저장_배당금_배당표M', {
                'YYYY': GetValue('Edit_KEY_년도'),
                'SEQ': GetValue('Edit_KEY_감정순번'),
                'AUCTION_CODE': GetValue('Combo_배당표_최고채권액'),
                'AUCTION_AMT': GetNumber('Edit_배당표_경매비용'),
                'H_PL_BID_AMT': GetNumber('Edit_배당표_예상낙찰가'),
                'H_POSS_AMT': GetValue('Edit_배당표_경락가액'),
                'H_POSS_A_AREA': GetValue('Combo_배당표_가임대보증금적용범위'),
                'H_POSS_A_AMT': GetValue('Edit_배당표_적용할주택가임대보증금액'),
                'CRED_MAX_AMT': GetValue('Edit_배당표_최고채권액')
            }, 'POST');


            MC_999_저장_주택임차보증금();


            MC_999_저장_배당금();


            RunQuery('Q_담보마스터', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_담보마스터').GetRow(0, [{key: '02_배당표수정여부', value: 'SHARE_YN'},]);


            RunQuery('저장_담보마스타_담보여력등', {
                '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            }, 'POST');


            RunButton('Command_응찰_91_저장');


            MC_002_초기화_Query_Loading();


            GetComponent('TabControl1').EnableTab(7, 1);


            GetComponent('TabControl1').EnableTab(8, 1);


            MC_공통보고서_조회();


            SetValue('is배당처리', "")

        })

        const Edit_Doc_Key = new Edit('Edit_Doc_Key', new JsonZoonData('Edit_Doc_Key', {}), {
            isShow: false, isEnable: true
        })
        const Edit_Doc_Name = new Edit('Edit_Doc_Name', new JsonZoonData('Edit_Doc_Name', {}), {
            isShow: true, isEnable: false
        })
        const Edit_KEY_감정순번 = new Edit('Edit_KEY_감정순번', new JsonZoonData('Edit_KEY_감정순번', {}), {
            isShow: false, isEnable: true
        })
        const Edit_KEY_년도 = new Edit('Edit_KEY_년도', new JsonZoonData('Edit_KEY_년도', {}), {
            isShow: false, isEnable: true
        })
        const Edit_감정자 = new Edit('Edit_감정자', new JsonZoonData('Edit_감정자', {}), {
            isShow: true, isEnable: false
        })
        const Edit_감정자사번 = new Edit('Edit_감정자사번', new JsonZoonData('Edit_감정자사번', {}), {
            isShow: false, isEnable: true
        })
        const Label_ReadOnly = new Label('Label_ReadOnly', new JsonZoonData('Label_ReadOnly', {}), {
            isShow: false, isEnable: false
        })
        const MkEdit_감정일 = new MaskEdit('MkEdit_감정일', new JsonZoonData('MkEdit_감정일', {}), {
            isShow: true, isEnable: false, mask: 'yyyy-mm-dd', maskType: '날짜',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_건축년도_경과', StrToNum(Left(GetValue('MkEdit_감정일'), 4)) - StrToNum(Left(GetValue('MkEdit_건축일자'), 4)))

        })

        const Picture25 = new Picture('Picture25', new JsonZoonData('Picture25', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            Navigate('None', {}, 'left=0,top=0,width=860,height=700');

        })

        const Picture35 = new Picture('Picture35', new JsonZoonData('Picture35', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            showModalDialog('None', GetValue('None'), '');

        })

        const Picture57 = new Picture('Picture57', new JsonZoonData('Picture57', {}), {
            isShow: !(GetValue('_관리부서') != 'Y'), isEnable: true
        }).on('OnClick', function () {

            RunQuery('Q_탁상감정진행상황', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_탁상감정진행상황').GetRow(0, [{key: 'i', value: 'STAT'},]);


            if (GetValue('i') == 1) {

                if (!MsgBox("완료된 탁상감정 내용이 존재합니다." + Hex(10) + "요청하실 경우 기존 자료는 삭제됩니다." + Hex(10) + "탁상감정을 요청하시겠습니까?", '', true)) {
                    return false;
                }

            }


            if (!MsgBox("탁상감정을 의뢰하시겠습니까?" + hex(10) + "탁상감정된 내용은 [탁상감정현황]에서 확인하실 수 있습니다.", '', true)) {
                return false;
            }


            RunQuery('Q_담당자메일조회', {
                '_사원번호': GetValue('_사원번호')
            }, 'GET');


            GetZoonData('Q_담당자메일조회').GetRow(0, [{key: '탁상감정_보낸사람', value: 'EMAIL'},

                {key: '탁상감정_성명', value: 'NAME'},

                {key: '탁상감정_전화번호', value: 'PHONE'},

            ]);


            RunQuery('Q_탁상감정파일명', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_탁상감정파일명').GetRow(0, [{key: '탁상감정_파일명', value: 'FILE_NAME'},]);


            RunQuery('Q_탁상감정EMail주소조회', {}, 'GET');


            GetZoonData('Q_탁상감정EMail주소조회').GetRow(0, [{key: '탁상감정_받는사람', value: 'ATTR_01'},]);


//     // 탁상감정 제목
//     SetValue('탁상감정_제목', "탁상감정의뢰 " + GetValue('탁상감정_파일명'))
//
// // 탁상감정 본문
//     SetValue('탁상감정_본문', "안녕하십니까?
//         < br > "+GetValue('탁상감정_파일명')+"
//     본건의
//     탁상감정을
//     의뢰합니다.
//     <br><a href==
//            http://203.234.236.9:8080/jsp/es00/es00_w03.jsp?yyyy=="+GetValue('년도')+"&seq=="+GetValue('감정순번')+"&sec_code=="+GetValue('Combo_집합건물종류')+"&conExt==Y target==_blank>감정내용보기</a>
//     <br> 하이트맥주 "+GetValue('탁상감정_성명'))


            if (GetValue('i') == 2) {

                if (!MsgBox("진행 중인 탁상감정이 있습니다." + Hex(10) + "재전송하시겠습니까?", '', true)) {
                    return false;
                }

            }


            SetValue('탁상감정_요청일자', DateToStr(Now()))


            RunQuery('저장_탁상감정', {
                'YYYY': GetValue('년도'), 'SEQ': GetValue('감정순번'), 'REQ_DATE': GetValue('탁상감정_요청일자'),
            }, 'POST');

            // SendMail None

            if (!MsgBox('정상적으로 발송되었습니다', '', true)) {
                return false;
            }

        })

        const Picture6 = new Picture('Picture6', new JsonZoonData('Picture6', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            RunQuery('Q_영업감정요청자료', {
                '전체선택여부': GetValue('전체선택여부')
            }, 'GET');


            GetComponent('SubForm_감정요청자료_영업').ShowSubForm(() => {
            });

        })

        const Picture61 = new Picture('Picture61', new JsonZoonData('Picture61', {}), {
            isShow: (GetValue('응찰_입력표활성여부') == 'Y'), isEnable: true
        }).on('OnClick', function () {

            Navigate('None', {}, 'left=0,top=0,width=860,height=700');

        })

        const Picture63 = new Picture('Picture63', new JsonZoonData('Picture63', {}), {
            isShow: (GetValue('_사원번호') == '106790'), isEnable: true
        }).on('OnClick', function () {

            RunButton('Command_배당처리');

        })

        const Picture64 = new Picture('Picture64', new JsonZoonData('Picture64', {}), {
            isShow: (GetValue('_사원번호') == '106790'), isEnable: true
        }).on('OnClick', function () {

            if (isEmpty(GetValue('Edit_입력표_거래처'))) {

                if (!MsgBox("[제1차 거래처]" + "를 입력하세요.", '확인', true)) {
                    return false;
                }

            }


            if (isEmpty(GetValue('감정순번'))) {
                MC_900_저장_Key만들기();
            }


            MC_990_저장_ValidationCheck();


            if (isNotEmpty(GetValue('저장_Error_Message'))) {

                if (!MsgBox(GetValue('저장_Error_Message'), '', true)) {
                    return false;
                }

            }

            if (isEmpty(GetValue('Edit_Doc_Key'))) {

                RunQuery('Q_영업감정요청자료', {
                    '전체선택여부': GetValue('전체선택여부')
                }, 'GET');


                alert('[감정요청자료 문서]가 선택되지 않았습니다.');
                return;

            }


            if (GetValue('is배당처리') != 'Y') {

                if (!MsgBox('저장하시겠습니까?', '알림', true)) {
                    return false;
                }

            }


            MC_901_저장_그리드_키값();


            MC_910_저장_입력표();


            MC_912_저장_문서관리();


            RunQuery('저장_배당금_배당표M', {
                'YYYY': GetValue('Edit_KEY_년도'),
                'SEQ': GetValue('Edit_KEY_감정순번'),
                'AUCTION_CODE': GetValue('Combo_배당표_최고채권액'),
                'AUCTION_AMT': GetNumber('Edit_배당표_경매비용'),
                'H_PL_BID_AMT': GetNumber('Edit_배당표_예상낙찰가'),
                'H_POSS_AMT': GetValue('Edit_배당표_경락가액'),
                'H_POSS_A_AREA': GetValue('Combo_배당표_가임대보증금적용범위'),
                'H_POSS_A_AMT': GetValue('Edit_배당표_적용할주택가임대보증금액'),
                'CRED_MAX_AMT': GetValue('Edit_배당표_최고채권액')
            }, 'POST');


            MC_999_저장_주택임차보증금();


            MC_999_저장_배당금();


            RunQuery('저장_담보마스타_담보여력등', {
                '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            }, 'POST');


            RunButton('Command_응찰_91_저장');


            MC_002_초기화_Query_Loading();


            GetComponent('TabControl1').EnableTab(7, 1);


            GetComponent('TabControl1').EnableTab(8, 1);


            MC_공통보고서_조회();


            SetValue('is배당처리', "")

        })

        const Picture72 = new Picture('Picture72', new JsonZoonData('Picture72', {}), {
            isShow: (GetValue('_사원번호') == '106790'), isEnable: true
        }).on('OnClick', function () {

            RunButton('Picture92');

        })

        const Picture92 = new Picture('Picture92', new JsonZoonData('Picture92', {}), {
            isShow: (GetValue('01_배당자료수정가능여부') == 'N'), isEnable: true
        }).on('OnClick', function () {

            showModalDialog('None', GetValue('None'), '');

        })

        const Picture_전감정사항비교표 = new Picture('Picture_전감정사항비교표', new JsonZoonData('Picture_전감정사항비교표', {}), {
            isShow: (GetValue('버튼_전감정사항비교표') == 'Y'), isEnable: true
        }).on('OnClick', function () {

            Navigate('None', {}, 'left=0,top=0,width=860,height=700');

        })

        const SubForm1 = new SubForm('SubForm1', new JsonZoonData('SubForm1', {}), {
            isShow: false, isEnable: true
        })
        const Command_배당처리시_자료CLEAR = new Command('Command_배당처리시_자료CLEAR', new JsonZoonData('Command_배당처리시_자료CLEAR', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            CallProcedure('SPESU_RIGHT_PERSON_CLEAR_00', {
                'I_YYYY': GetValue('년도'), 'I_SEQ': GetValue('감정순번')
            }, (result) => {
            });


            SetValue('02_배당표수정여부', "");


            RunQuery('저장_담보마스타_담보여력등', {
                '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            }, 'POST');


            RunQuery('Q_배당표_배당금_계산', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');

        })

        const Command_버튼_활성화여부 = new Command('Command_버튼_활성화여부', new JsonZoonData('Command_버튼_활성화여부', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            if (GetValue('감정순번') == "null") {
                SetValue('버튼_전감정사항비교표', "N")
            } else if (Mid(GetValue('감정순번'), 4, 2) == "00") {
                SetValue('버튼_전감정사항비교표', "N")
            } else {
                SetValue('버튼_전감정사항비교표', "Y")
            }
        })

        const 버튼_전감정사항비교표 = new Edit('버튼_전감정사항비교표', new JsonZoonData('버튼_전감정사항비교표', {}), {
            isShow: true, isEnable: true
        })
        const SubForm_감정요청자료_영업_URL = '/view/es01/w02/2/appraisal';
        const SubForm_감정요청자료_영업 = new SubForm('SubForm_감정요청자료_영업', new JsonZoonData('SubForm_감정요청자료_영업', {}),
            SubForm_감정요청자료_영업_URL, { isShow: true, isEnable: true });

        const Check_전체선택 = new Check('Check_전체선택', new JsonZoonData('Check_전체선택', { value: 'A' }), {
            isShow: true, isEnable: true
        }).on('click', function () {

            SetValue('전체선택여부', GetValue('Check_전체선택'))


            RunQuery('Q_영업감정요청자료', {
                '전체선택여부': GetValue('전체선택여부')
            }, 'GET');

        })

        const DBGrid_감정요청자료_영업 = new DBGrid('DBGrid_감정요청자료_영업', new JsonZoonData('Q_영업감정요청자료', {}), {
            isShow: true, isEnable: true
        }).on('dblclick', function () {

            GetComponent('DBGrid_감정요청자료_영업').GetRow(-1, [{key: 'Edit_Doc_Key', value: 'DOC_KEY'},

                {key: 'Edit_Doc_Name', value: 'DOC_NAME'},]);


            GetComponent('SubForm_감정요청자료_영업').HideSubForm();

        })

        const Label68 = new Label('Label68', new JsonZoonData('Label68', {}), {
            isShow: true, isEnable: true
        })
        const Picture39 = new Picture('Picture39', new JsonZoonData('Picture39', {}), {
            isShow: true, isEnable: true
        }).on('click', function () {

            GetComponent('DBGrid_감정요청자료_영업').GetRow(-1, [{key: 'Edit_Doc_Key', value: 'DOC_KEY'},

                {key: 'Edit_Doc_Name', value: 'DOC_NAME'},]);


            GetComponent('SubForm_감정요청자료_영업').HideSubForm();

        })

        const Picture40 = new Picture('Picture40', new JsonZoonData('Picture40', {}), {
            isShow: true, isEnable: false
        })
        const Picture41 = new Picture('Picture41', new JsonZoonData('Picture41', {}), {
            isShow: true, isEnable: false
        })
        const Picture42 = new Picture('Picture42', new JsonZoonData('Picture42', {}), {
            isShow: true, isEnable: false
        })
        const Picture43 = new Picture('Picture43', new JsonZoonData('Picture43', {}), {
            isShow: true, isEnable: false
        })
        const Picture44 = new Picture('Picture44', new JsonZoonData('Picture44', {}), {
            isShow: true, isEnable: true
        })
        let SubForm_거래처조회_URL = '/view/es01/w02/2/account';
        const SubForm_거래처조회 = new SubForm('SubForm_거래처조회', new JsonZoonData('SubForm_거래처조회', {}),
            SubForm_거래처조회_URL, { isShow: true, isEnable: true});

        const Command_선택_거래처 = new Picture('Command_선택_거래처', new JsonZoonData('Command_선택_거래처', {}), {
            isShow: true, isEnable: true
        }).on('click', function () {

            GetComponent('DBGrid_거래처').GetRow(-1, [{key: '팝업_거래처명', value: 'SANGHO'},

                {key: '팝업_거래처코드', value: 'GEO_CODE'},

                {key: '팝업_대표자', value: 'DAEPYO_NAME'},

            ]);


            SetValue('Edit_입력표_거래처', GetValue('팝업_거래처명'));

            SetValue('Edit_입력표_거래처코드', GetValue('팝업_거래처코드'));

            SetValue('Edit_입력표_대표자', GetValue('팝업_대표자'));


            GetComponent('SubForm_거래처조회').HideSubForm();

        })

        const Command_조회 = new Picture('Command_조회', new JsonZoonData('Command_조회', {}), {
            isShow: true, isEnable: true
        }).on('click', function () {

            SetValue('거래처명', GetValue('Edit_거래처명'));


            RunQuery('Q_POPUP_거래처목록', {
                '거래처명': GetValue('거래처명')
            }, 'GET');

        })

        const DBGrid_거래처 = new DBGrid('DBGrid_거래처', new JsonZoonData('Q_POPUP_거래처목록', {}), {
            isShow: true, isEnable: true
        }).on('click', function () {

            RunButton('Command_선택_거래처');

        })

        const Edit_거래처명 = new Edit('Edit_거래처명', new JsonZoonData('Edit_거래처명', {}), {
            isShow: true, isEnable: true
        }).on('keyup',function(e) {
            if (e.keyCode == 13) {
                RunButton('Command_조회');
            }
        });

        const Label22 = new Label('Label22', new JsonZoonData('Label22', {}), {
            isShow: true, isEnable: true
        })
        const Label23 = new Label('Label23', new JsonZoonData('Label23', {}), {
            isShow: true, isEnable: true
        })
        const Picture10 = new Picture('Picture10', new JsonZoonData('Picture10', {}), {
            isShow: true, isEnable: false
        })
        const Picture11 = new Picture('Picture11', new JsonZoonData('Picture11', {}), {
            isShow: true, isEnable: true
        })
        const Picture14 = new Picture('Picture14', new JsonZoonData('Picture14', {}), {
            isShow: true, isEnable: false
        })
        const Picture5 = new Picture('Picture5', new JsonZoonData('Picture5', {}), {
            isShow: true, isEnable: true
        })
        const Picture8 = new Picture('Picture8', new JsonZoonData('Picture8', {}), {
            isShow: true, isEnable: false
        })
        const Picture9 = new Picture('Picture9', new JsonZoonData('Picture9', {}), {
            isShow: true, isEnable: false
        })
        const Table5 = new Edit('Table5', new JsonZoonData('Q_00_가임대보증금적용지역', {}), {
            isShow: true, isEnable: true
        })
        const SubForm_주소조회 = new KaKaoSubForm('SubForm_주소조회', new JsonZoonData('SubForm_주소조회', {}), {
            oncomplete: function(data) {
                SetValue('팝업_전체주소', data.address);

                if (GetValue('팝업_주소창호출위치') == "입력표") {
                    SetValue('Edit_입력표_소재지1', GetValue('팝업_전체주소'))
                } else if (GetValue('팝업_주소창호출위치') == "감정가_가격사례") {
                    SetValue('가격_Edit_소재지', GetValue('팝업_전체주소') + " ")
                } else if (GetValue('팝업_주소창호출위치') == "감정가_경매사례") {
                    SetValue('감정가_경매_소재지', GetValue('팝업_전체주소') + " ")
                } else if (GetValue('팝업_주소창호출위치') == "감정가_임대사례") {
                    SetValue('감정가_임대_소재지', GetValue('팝업_전체주소') + " ")
                }


                GetComponent('SubForm_주소조회').HideSubForm();


                SetValue('팝업_주소창호출위치', "");

                SetValue('팝업_전체주소', "");
            }
        });

        const Label26 = new Label('Label26', new JsonZoonData('Label26', {}), {
            isShow: true, isEnable: true
        })
        const Picture16 = new Picture('Picture16', new JsonZoonData('Picture16', {}), {
            isShow: true, isEnable: false
        })
        const Picture17 = new Picture('Picture17', new JsonZoonData('Picture17', {}), {
            isShow: true, isEnable: false
        })
        const Picture18 = new Picture('Picture18', new JsonZoonData('Picture18', {}), {
            isShow: true, isEnable: false
        })
        const Picture19 = new Picture('Picture19', new JsonZoonData('Picture19', {}), {
            isShow: true, isEnable: false
        })
        const Picture20 = new Picture('Picture20', new JsonZoonData('Picture20', {}), {
            isShow: true, isEnable: true
        })
        const Tab_주소조회 = new Check('Tab_주소조회', new JsonZoonData('Tab_주소조회', {}), {
            isShow: true, isEnable: true
        })
        const 지번주소 = new Edit('지번주소', new JsonZoonData('지번주소', {}), {
            isShow: true, isEnable: true
        })
        const Table6 = new Table('Table6', new JsonZoonData('Q_00_가임대보증금적용지역', {}), {
            isShow: true, isEnable: false
        })
        const DBGrid_주소 = new DBGrid('DBGrid_주소', new JsonZoonData('Q_POPUP_주소목록', {}), {
            isShow: true, isEnable: true
        }).on('OnDblClick', function () {

            RunButton('Command_선택_주소조회');

        })

        const Edit_읍면동 = new Edit('Edit_읍면동', new JsonZoonData('Edit_읍면동', {}), {
            isShow: true, isEnable: true
        }).on('OnEnterKey', function () {

            RunButton('Command_조회1');

        })

        const Label25 = new Label('Label25', new JsonZoonData('Label25', {}), {
            isShow: true, isEnable: true
        })
        const Picture12 = new Picture('Picture12', new JsonZoonData('Picture12', {}), {
            isShow: true, isEnable: true
        })
        const Command_조회1 = new Picture('Command_조회1', new JsonZoonData('Command_조회1', {}), {
            isShow: true, isEnable: true
        }).on('click', function () {

            SetValue('읍면동', GetValue('Edit_읍면동'));


            RunQuery('Q_POPUP_주소목록', {
                '읍면동': GetValue('읍면동')
            }, 'GET');

        })

        const Command_선택_주소조회 = new Picture('Command_선택_주소조회', new JsonZoonData('Command_선택_주소조회', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_주소').GetRow(-1, [{key: '팝업_전체주소', value: 'JUSO_FULL1'},]);


            if (GetValue('팝업_주소창호출위치') == "입력표") {
                SetValue('Edit_입력표_소재지1', GetValue('팝업_전체주소'))
            } else if (GetValue('팝업_주소창호출위치') == "감정가_가격사례") {
                SetValue('가격_Edit_소재지', GetValue('팝업_전체주소') + " ")
            } else if (GetValue('팝업_주소창호출위치') == "감정가_경매사례") {
                SetValue('감정가_경매_소재지', GetValue('팝업_전체주소') + " ")
            } else if (GetValue('팝업_주소창호출위치') == "감정가_임대사례") {
                SetValue('감정가_임대_소재지', GetValue('팝업_전체주소') + " ")
            }


            GetComponent('SubForm_주소조회').HideSubForm();


            SetValue('팝업_주소창호출위치', "");

            SetValue('팝업_전체주소', "");

        })

        const 도로명주소 = new Edit('도로명주소', new JsonZoonData('도로명주소', {}), {
            isShow: true, isEnable: true
        })
        const Table34 = new Edit('Table34', new JsonZoonData('Table34', {}), {
            isShow: true, isEnable: true
        })
        const Command_도로주소_조회 = new Picture('Command_도로주소_조회', new JsonZoonData('Command_도로주소_조회', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            if (StrLength(GetValue('Edit_도로주소_도로명')) <= 2) {
                SetValue('TEMP_MSG', '도로명을 2자 이상 입력해 주세요.');
            } else {
                SetValue('TEMP_MSG', '');
            }

            if (isNotEmpty(GetValue('TEMP_MSG'))) {
                if (!MsgBox(GetValue('TEMP_MSG'), '확인', true)) {
                    return false;
                }
            }

            RunQuery('Q_도로명주소목록', {
                'CITY': GetValue('CITY'), 'CITYGU': GetValue('CITYGU'), 'ROAD_NM': GetValue('ROAD_NM')
            }, 'GET');

        })

        const Command_도로주소_선택 = new Picture('Command_도로주소_선택', new JsonZoonData('Command_도로주소_선택', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            MC_도로주소반환();

        })

        const Picture67 = new Picture('Picture67', new JsonZoonData('Picture67', {}), {
            isShow: true, isEnable: true
        })
        const Label80 = new Label('Label80', new JsonZoonData('Label80', {}), {
            isShow: true, isEnable: true
        })
        const DBGrid_도로주소_목록 = new DBGrid('DBGrid_도로주소_목록', new JsonZoonData('Q_도로명주소목록', {}), {
            isShow: true, isEnable: true
        }).on('OnDblClick', function () {

            MC_도로주소반환();

        })

        const Edit_도로주소_도로명 = new Edit('Edit_도로주소_도로명', new JsonZoonData('Edit_도로주소_도로명', {}), {
            isShow: true, isEnable: true
        }).on('OnEnterKey', function () {

            RunButton('Command_도로주소_조회');

        })

        const Label81 = new Label('Label81', new JsonZoonData('Label81', {}), {
            isShow: true, isEnable: true
        })
        const Picture68 = new Picture('Picture68', new JsonZoonData('Picture68', {}), {
            isShow: true, isEnable: true
        })
        const Combo_도로주소_시도 = new Combo('Combo_도로주소_시도', new JsonZoonData('Combo_도로주소_시도', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            // RunQuery('Q_도로명주소_시군구', {
            //     'CITY': GetValue('Combo_도로주소_시도')
            // }, 'GET');
            //
            //
            // GetComponent('Combo_도로주소_시군구').SetCurSel(0.0);

        })

        const Label82 = new Label('Label82', new JsonZoonData('Label82', {}), {
            isShow: true, isEnable: true
        })
        const Picture69 = new Picture('Picture69', new JsonZoonData('Picture69', {}), {
            isShow: true, isEnable: true
        })
        const Combo_도로주소_시군구 = new Combo('Combo_도로주소_시군구', new JsonZoonData('Q_도로명주소_시군구', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        })
        const Label83 = new Label('Label83', new JsonZoonData('Label83', {}), {
            isShow: true, isEnable: true
        })
        const TabControl1 = new Tab('TabControl1', new JsonZoonData('TabControl1', {}), {
            isShow: true, isEnable: true
        }).on('OnChange', function () {

            GetComponent('TabControl1').GetCurSel('IDX_TabControl');


            if (GetValue('IDX_TabControl') == 2) {
                MC_300_초기화__비준가격_항목();
            }


            if (GetValue('IDX_TabControl') == 3) {
                MC_401_평가액_최고최저_계산_0();
            }

        })

        const 응찰입력표 = new Edit('응찰입력표', new JsonZoonData('응찰입력표', {}), {
            isShow: true, isEnable: true
        })
        const Table26 = new Edit('Table26', new JsonZoonData('Table26', {}), {
            isShow: true, isEnable: true
        })
        const Table29 = new Edit('Table29', new JsonZoonData('Table29', {}), {
            isShow: true, isEnable: true
        })
        const Table30 = new Edit('Table30', new JsonZoonData('Table30', {}), {
            isShow: true, isEnable: true
        })
        const Table31 = new Edit('Table31', new JsonZoonData('Table31', {}), {
            isShow: true, isEnable: true
        })
        const Table32 = new Edit('Table32', new JsonZoonData('Table32', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_사항_사건번호 = new Edit('응찰_사항_사건번호', new JsonZoonData('응찰_사항_사건번호', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_사항_관할법원 = new Edit('응찰_사항_관할법원', new JsonZoonData('응찰_사항_관할법원', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_사항_경매구분 = new Edit('응찰_사항_경매구분', new JsonZoonData('응찰_사항_경매구분', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_사항_경매계 = new Edit('응찰_사항_경매계', new JsonZoonData('응찰_사항_경매계', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_사항_전화번호 = new Edit('응찰_사항_전화번호', new JsonZoonData('응찰_사항_전화번호', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_사항_경매신청채권자 = new Edit('응찰_사항_경매신청채권자', new JsonZoonData('응찰_사항_경매신청채권자', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_사항_청구금액 = new MaskEdit('응찰_사항_청구금액', new JsonZoonData('응찰_사항_청구금액', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_사항_경매개시등기일 = new MaskEdit('응찰_사항_경매개시등기일', new JsonZoonData('응찰_사항_경매개시등기일', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일'))) - Days(StrToDate(GetValue('MkEdit_입력표_건축일자')))) / 365)
            SetValue('본건_MkEdit_건축년도', Left(GetValue('MkEdit_입력표_건축일자'), 4))
            SetValue('본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'))
            SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'))


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const 응찰_사항_유입시특이사항 = new Edit('응찰_사항_유입시특이사항', new JsonZoonData('응찰_사항_유입시특이사항', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_내용_토지_금액 = new MaskEdit('응찰_내용_토지_금액', new JsonZoonData('응찰_내용_토지_금액', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_내용_건물_금액 = new MaskEdit('응찰_내용_건물_금액', new JsonZoonData('응찰_내용_건물_금액', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_집계표_최고채권액 = new MaskEdit('응찰_집계표_최고채권액', new JsonZoonData('응찰_집계표_최고채권액', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_선순위자채권최고액 = new MaskEdit('응찰_집계표_선순위자채권최고액', new JsonZoonData('응찰_집계표_선순위자채권최고액', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_선순위자배당금 = new MaskEdit('응찰_집계표_선순위자배당금', new JsonZoonData('응찰_집계표_선순위자배당금', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_당사채권최고액 = new MaskEdit('응찰_집계표_당사채권최고액', new JsonZoonData('응찰_집계표_당사채권최고액', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_집계표_당사배당금 = new MaskEdit('응찰_집계표_당사배당금', new JsonZoonData('응찰_집계표_당사배당금', {}), {
            isShow: true, isEnable: true, mask: '', maskType: '',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_감정일 = new MaskEdit('응찰_개요_지점_감정일', new JsonZoonData('응찰_개요_지점_감정일', {}), {
            isShow: true, isEnable: true, mask: 'yyyy-mm-dd', maskType: '날짜',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일'))) - Days(StrToDate(GetValue('MkEdit_입력표_건축일자')))) / 365)
            SetValue('본건_MkEdit_건축년도', Left(GetValue('MkEdit_입력표_건축일자'), 4))
            SetValue('본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'))
            SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'))


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const 응찰_개요_지점_담당자 = new Edit('응찰_개요_지점_담당자', new JsonZoonData('응찰_개요_지점_담당자', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_지점_파트장 = new Edit('응찰_개요_지점_파트장', new JsonZoonData('응찰_개요_지점_파트장', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_지점_팀장 = new Edit('응찰_개요_지점_팀장', new JsonZoonData('응찰_개요_지점_팀장', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_지점_지점장 = new Edit('응찰_개요_지점_지점장', new JsonZoonData('응찰_개요_지점_지점장', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_지점_제1차예상낙찰가 = new MaskEdit('응찰_개요_지점_제1차예상낙찰가', new JsonZoonData('응찰_개요_지점_제1차예상낙찰가', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_예상낙찰가율 = new MaskEdit('응찰_개요_지점_예상낙찰가율', new JsonZoonData('응찰_개요_지점_예상낙찰가율', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_예상낙찰가 = new MaskEdit('응찰_개요_지점_예상낙찰가', new JsonZoonData('응찰_개요_지점_예상낙찰가', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_담보여력 = new MaskEdit('응찰_개요_지점_담보여력', new JsonZoonData('응찰_개요_지점_담보여력', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_당사채권금액 = new MaskEdit('응찰_개요_지점_당사채권금액', new JsonZoonData('응찰_개요_지점_당사채권금액', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_지점_당사순위및등기 = new Edit('응찰_개요_지점_당사순위및등기', new JsonZoonData('응찰_개요_지점_당사순위및등기', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_본사_감정일 = new MaskEdit('응찰_개요_본사_감정일', new JsonZoonData('응찰_개요_본사_감정일', {}), {
            isShow: true, isEnable: true, mask: 'yyyy-mm-dd', maskType: '날짜',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일'))) - Days(StrToDate(GetValue('MkEdit_입력표_건축일자')))) / 365)
            SetValue('본건_MkEdit_건축년도', Left(GetValue('MkEdit_입력표_건축일자'), 4))
            SetValue('본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'))
            SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'))


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const 응찰_개요_본사_1차결재 = new Edit('응찰_개요_본사_1차결재', new JsonZoonData('응찰_개요_본사_1차결재', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_본사_2차결재 = new Edit('응찰_개요_본사_2차결재', new JsonZoonData('응찰_개요_본사_2차결재', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_본사_3차결재 = new Edit('응찰_개요_본사_3차결재', new JsonZoonData('응찰_개요_본사_3차결재', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_본사_관재파트장 = new Edit('응찰_개요_본사_관재파트장', new JsonZoonData('응찰_개요_본사_관재파트장', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_본사_팀장 = new Edit('응찰_개요_본사_팀장', new JsonZoonData('응찰_개요_본사_팀장', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_개요_본사_제1차예상낙찰가 = new MaskEdit('응찰_개요_본사_제1차예상낙찰가', new JsonZoonData('응찰_개요_본사_제1차예상낙찰가', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_예상낙찰가율 = new MaskEdit('응찰_개요_본사_예상낙찰가율', new JsonZoonData('응찰_개요_본사_예상낙찰가율', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_예상낙찰가 = new MaskEdit('응찰_개요_본사_예상낙찰가', new JsonZoonData('응찰_개요_본사_예상낙찰가', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_담보여력 = new MaskEdit('응찰_개요_본사_담보여력', new JsonZoonData('응찰_개요_본사_담보여력', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_당사채권금액 = new MaskEdit('응찰_개요_본사_당사채권금액', new JsonZoonData('응찰_개요_본사_당사채권금액', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const 응찰_개요_본사_당사순위및등기 = new Edit('응찰_개요_본사_당사순위및등기', new JsonZoonData('응찰_개요_본사_당사순위및등기', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_수지_예상공시지가상승률 = new MaskEdit('응찰_수지_예상공시지가상승률', new JsonZoonData('응찰_수지_예상공시지가상승률', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_예상매각확신금액 = new MaskEdit('응찰_수지_예상매각확신금액', new JsonZoonData('응찰_수지_예상매각확신금액', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_예상매각확신사유 = new Edit('응찰_수지_예상매각확신사유', new JsonZoonData('응찰_수지_예상매각확신사유', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_수지_취득_강제집행 = new MaskEdit('응찰_수지_취득_강제집행', new JsonZoonData('응찰_수지_취득_강제집행', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유수익_임대보증금 = new MaskEdit('응찰_수지_보유수익_임대보증금', new JsonZoonData('응찰_수지_보유수익_임대보증금', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유수익_월임대수입 = new MaskEdit('응찰_수지_보유수익_월임대수입', new JsonZoonData('응찰_수지_보유수익_월임대수입', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유수익_기타수익 = new MaskEdit('응찰_수지_보유수익_기타수익', new JsonZoonData('응찰_수지_보유수익_기타수익', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_기타유지보수비용 = new MaskEdit('응찰_수지_보유비용_기타유지보수비용', new JsonZoonData('응찰_수지_보유비용_기타유지보수비용', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_처분_기타비용 = new MaskEdit('응찰_수지_처분_기타비용', new JsonZoonData('응찰_수지_처분_기타비용', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_응찰여부_Group = new Group('응찰_수지_응찰여부_Group', new JsonZoonData('응찰_수지_응찰여부_Group', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_수지_응찰여부 = new Tab('응찰_수지_응찰여부', new JsonZoonData('Y', {}), {
            isShow: true, isEnable: true
        })
        const DBGrid_응찰_기일내역 = new DBGrid('DBGrid_응찰_기일내역', new JsonZoonData('Q_41_응찰입력표_경매기일내역', {}), {
            isShow: true, isEnable: true
        }).on('OnEnterKey', function () {

            GetComponent('DBGrid_응찰_기일내역').NextTab();

        })

        const Picture56 = new Picture('Picture56', new JsonZoonData('Picture56', {}), {
            isShow: true, isEnable: false
        })
        const Picture50 = new Picture('Picture50', new JsonZoonData('Picture50', {}), {
            isShow: true, isEnable: false
        })
        const Label39 = new Label('Label39', new JsonZoonData('Label39', {}), {
            isShow: true, isEnable: true
        })
        const Picture45 = new Picture('Picture45', new JsonZoonData('Picture45', {}), {
            isShow: true, isEnable: false
        })
        const Picture46 = new Picture('Picture46', new JsonZoonData('Picture46', {}), {
            isShow: true, isEnable: false
        }).on('OnClick', function () {

            EmptyArray('01_응찰_숫자배열변수3')


            GetComponent('DBGrid_응찰_기일내역').GetRows("", [{key: '01_응찰_숫자배열변수3', value: '회차'},]);

            if (isEmpty(GetValue('01_응찰_숫자배열변수3')))
            {
                SetArray('01_응찰_숫자배열변수3', 0, 0)

            }


            SetValue('응찰_변수_숫자1', Max('01_응찰_숫자배열변수3') + 1);


            GetComponent('DBGrid_응찰_기일내역').AddRow({
                '년도': GetValue('년도'), '일련번호': GetValue('감정순번'), '회차': GetValue('응찰_변수_숫자1')
            });


            GetComponent('DBGrid_응찰_기일내역').GetRowCount('응찰_경매_Formula_기일내역_Row');


            SetValue('응찰_경매_Formula_기일내역_Row', GetValue('응찰_경매_Formula_기일내역_Row') - 1);


            GetComponent('DBGrid_응찰_기일내역').SetCurSel(GetNumber('응찰_경매_Formula_기일내역_Row'));


            GetComponent('DBGrid_응찰_기일내역').SetEditFocus(GetNumber('응찰_경매_Formula_기일내역_Row') - 1, '회차');

        })

        const 응찰_경매_Formula_기일내역_Row = new Edit('응찰_경매_Formula_기일내역_Row', new JsonZoonData('응찰_경매_Formula_기일내역_Row', {}), {
            isShow: false, isEnable: true
        });
        const 응찰_경매_Formula_기일내역_TNUM = new Edit('응찰_경매_Formula_기일내역_TNUM', new JsonZoonData('응찰_경매_Formula_기일내역_TNUM', {}), {
            isShow: false, isEnable: true
        });
        const Label40 = new Label('Label40', new JsonZoonData('Label40', {}), {
            isShow: true, isEnable: true
        })
        const Picture48 = new Picture('Picture48', new JsonZoonData('Picture48', {}), {
            isShow: true, isEnable: false
        })
        const 응찰_내용_토지_단가 = new CalcEdit('응찰_내용_토지_단가', ['응찰_내용_토지_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_토지_단가', () => {
            return {
                value: (Round(Round(GetNumber('응찰_내용_토지_금액')/GetNumber('MkEdit_입력표_전유면적'),0) / 1000, 0) * 1000)
            }
        }), {
            isShow: true, isEnable: true
        });
        const 응찰_내용_건물_단가 = new CalcEdit('응찰_내용_건물_단가', ['응찰_내용_건물_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_건물_단가', () => {
            return {
                value: (Round(Round(GetNumber('응찰_내용_건물_금액')/GetNumber('MkEdit_입력표_전유면적'),0) / 1000, 0) * 1000)
            }
        }), {
            isShow: true, isEnable: true
        });
        const 응찰_내용_토지_단가_평당 = new CalcEdit('응찰_내용_토지_단가_평당', ['응찰_내용_토지_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_토지_단가_평당', () => {
            return {
                value: Round(Round(GetNumber('응찰_내용_토지_금액')/(GetNumber('MkEdit_입력표_전유면적')*0.3025),0) / 1000, 0) * 1000
            }
        }), {
            isShow: true, isEnable: true
        });
        const 응찰_내용_건물_단가_평당 = new CalcEdit('응찰_내용_건물_단가_평당', ['응찰_내용_건물_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_건물_단가_평당', () => {
            return {
                value: Round(Round(GetNumber('응찰_내용_건물_금액')/(GetNumber('MkEdit_입력표_전유면적')*0.3025),0) / 1000, 0) * 1000
            }
        }), {
            isShow: true, isEnable: true
        });
        const 응찰_내용_법원감정가합계 = new CalcEdit('응찰_내용_법원감정가합계', [], new JsonZoonData('응찰_내용_법원감정가합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_내용_입찰예정가_낙찰가율 = new CalcEdit('응찰_내용_입찰예정가_낙찰가율', [], new JsonZoonData('응찰_내용_입찰예정가_낙찰가율', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_내용_입찰예정가_금액 = new CalcEdit('응찰_내용_입찰예정가_금액', [], new JsonZoonData('응찰_내용_입찰예정가_금액', {}), {
            isShow: true, isEnable: true
        });
        const Label41 = new Label('Label41', new JsonZoonData('Label41', {}), {
            isShow: true, isEnable: true
        })
        const Picture49 = new Picture('Picture49', new JsonZoonData('Picture49', {}), {
            isShow: true, isEnable: false
        })
        const 응찰_집계표_최고채권액Combo_Value = new CalcEdit('응찰_집계표_최고채권액Combo_Value', [], new JsonZoonData('응찰_집계표_최고채권액Combo_Value', {}), {
            isShow: false, isEnable: true
        });
        const 응찰_집계표_최고채권액Combo = new Combo('응찰_집계표_최고채권액Combo', new JsonZoonData('Q_코드_최고채권액', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_최고채권액').FindIndex('응찰_변수_숫자1', (row) => {

                if ((row['CD_CODE'] == GetValue('응찰_집계표_최고채권액Combo'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_최고채권액').GetRow(GetValue('응찰_변수_숫자1'), [{key: '응찰_집계표_최고채권액Combo_Value', value: 'ATTR_02'},]);


            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수'))


            MC_999_배당표_주택임대차보증금_계산_전체();


            MC_999_배당표_배당금_기본항목자동설정();

        })

        const Label42 = new Label('Label42', new JsonZoonData('Label42', {}), {
            isShow: true, isEnable: true
        })
        const Label67 = new Label('Label67', new JsonZoonData('Label67', {}), {
            isShow: true, isEnable: true
        })
        const Label69 = new Label('Label69', new JsonZoonData('Label69', {}), {
            isShow: true, isEnable: true
        })
        const Label70 = new Label('Label70', new JsonZoonData('Label70', {}), {
            isShow: true, isEnable: true
        })
        const Picture51 = new Picture('Picture51', new JsonZoonData('Picture51', {}), {
            isShow: true, isEnable: false
        })
        const DBGrid_응찰_권리내역 = new DBGrid('DBGrid_응찰_권리내역', new JsonZoonData('Q_43_응찰입력표_선순위권리내역', {}), {
            isShow: true, isEnable: true
        }).on('OnValidate', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const DBGrid_응찰_부담내역 = new DBGrid('DBGrid_응찰_부담내역', new JsonZoonData('Q_44_응찰입력표_선순위부담금액', {}), {
            isShow: true, isEnable: true
        }).on('OnValidate', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const Picture52 = new Picture('Picture52', new JsonZoonData('Picture52', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            EmptyArray('01_응찰_숫자배열변수3')


            GetComponent('DBGrid_응찰_권리내역').GetRows("", [{key: '01_응찰_숫자배열변수3', value: '순번'},]);

            if (isEmpty(GetValue('01_응찰_숫자배열변수3')))
            {

                SetArray('01_응찰_숫자배열변수3', 0, 0)

            }


            SetValue('응찰_변수_숫자1', Max('01_응찰_숫자배열변수3') + 1);


            GetComponent('DBGrid_응찰_권리내역').AddRow({
                '년도': GetValue('년도'), '일련번호': GetValue('감정순번'), '순번': GetValue('응찰_변수_숫자1')
            });


            GetComponent('DBGrid_응찰_권리내역').GetRowCount('응찰_변수_숫자1');


            SetValue('응찰_변수_숫자1', GetValue('응찰_변수_숫자1') - 1);


            GetComponent('DBGrid_응찰_권리내역').SetCurSel(GetNumber('응찰_변수_숫자1'));


            GetComponent('DBGrid_응찰_권리내역').SetEditFocus(GetNumber('응찰_변수_숫자1') - 1, '금액');

        })

        const Picture53 = new Picture('Picture53', new JsonZoonData('Picture53', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_권리내역').GetCurSel('응찰_변수_숫자2');


            GetComponent('DBGrid_응찰_권리내역').DeleteRow(GetNumber('응찰_변수_숫자2'));

        })

        const Picture54 = new Picture('Picture54', new JsonZoonData('Picture54', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_부담내역').GetCurSel('응찰_변수_숫자2');


            GetComponent('DBGrid_응찰_부담내역').DeleteRow(GetNumber('응찰_변수_숫자2'));

        })

        const Picture55 = new Picture('Picture55', new JsonZoonData('Picture55', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            EmptyArray('01_응찰_숫자배열변수3')


            GetComponent('DBGrid_응찰_부담내역').GetRows("", [{key: '01_응찰_숫자배열변수3', value: '순번'},]);

            if (isEmpty(GetValue('01_응찰_숫자배열변수3')))
            {

                SetArray('01_응찰_숫자배열변수3', 0, 0)

            }


            SetValue('응찰_변수_숫자1', Max('01_응찰_숫자배열변수3') + 1);


            GetComponent('DBGrid_응찰_부담내역').AddRow({
                '년도': GetValue('년도'), '일련번호': GetValue('감정순번'), '순번': GetValue('응찰_변수_숫자1')
            });


            GetComponent('DBGrid_응찰_부담내역').GetRowCount('응찰_변수_숫자1');


            SetValue('응찰_변수_숫자1', GetValue('응찰_변수_숫자1') - 1);


            GetComponent('DBGrid_응찰_부담내역').SetCurSel(GetNumber('응찰_변수_숫자1'));


            GetComponent('DBGrid_응찰_부담내역').SetEditFocus(GetNumber('응찰_변수_숫자1') - 1, '금액');

        })

        const Label71 = new Label('Label71', new JsonZoonData('Label71', {}), {
            isShow: true, isEnable: true
        })
        const 응찰_수지_부담비용합계 = new CalcEdit('응찰_수지_부담비용합계', [], new JsonZoonData('응찰_수지_부담비용합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_입찰예정가 = new CalcEdit('응찰_수지_입찰예정가', [], new JsonZoonData('응찰_수지_입찰예정가', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_예정_낙찰후매각가능 = new CalcEdit('응찰_수지_예정_낙찰후매각가능', [], new JsonZoonData('응찰_수지_예정_낙찰후매각가능', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_예상매각금액 = new CalcEdit('응찰_수지_예상매각금액', [], new JsonZoonData('응찰_수지_예상매각금액', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_취득_취득세 = new CalcEdit('응찰_수지_취득_취득세', [], new JsonZoonData('응찰_수지_취득_취득세', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_취득_등록세 = new CalcEdit('응찰_수지_취득_등록세', [], new JsonZoonData('응찰_수지_취득_등록세', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_취득_채권매입 = new CalcEdit('응찰_수지_취득_채권매입', [], new JsonZoonData('응찰_수지_취득_채권매입', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_취득_기타취득 = new CalcEdit('응찰_수지_취득_기타취득', [], new JsonZoonData('응찰_수지_취득_기타취득', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유수익_임대수익 = new CalcEdit('응찰_수지_보유수익_임대수익', [], new JsonZoonData('응찰_수지_보유수익_임대수익', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유비용_기회비용 = new CalcEdit('응찰_수지_보유비용_기회비용', [], new JsonZoonData('응찰_수지_보유비용_기회비용', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유비용_부가세 = new CalcEdit('응찰_수지_보유비용_부가세', [], new JsonZoonData('응찰_수지_보유비용_부가세', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유비용_재산세 = new CalcEdit('응찰_수지_보유비용_재산세', [], new JsonZoonData('응찰_수지_보유비용_재산세', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유비용_종부세 = new CalcEdit('응찰_수지_보유비용_종부세', [], new JsonZoonData('응찰_수지_보유비용_종부세', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유비용_법인세 = new CalcEdit('응찰_수지_보유비용_법인세', [], new JsonZoonData('응찰_수지_보유비용_법인세', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_처분_비용 = new CalcEdit('응찰_수지_처분_비용', [], new JsonZoonData('응찰_수지_처분_비용', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_항목별_비용합계 = new CalcEdit('응찰_수지_항목별_비용합계', [], new JsonZoonData('응찰_수지_항목별_비용합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_항목별_수익합계 = new CalcEdit('응찰_수지_항목별_수익합계', [], new JsonZoonData('응찰_수지_항목별_수익합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_항목별_예상손익 = new CalcEdit('응찰_수지_항목별_예상손익', [], new JsonZoonData('응찰_수지_항목별_예상손익', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_전체손익 = new CalcEdit('응찰_수지_전체손익', [], new JsonZoonData('응찰_수지_전체손익', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_취득_합계 = new CalcEdit('응찰_수지_취득_합계', [], new JsonZoonData('응찰_수지_취득_합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_취득_원가합계 = new CalcEdit('응찰_수지_취득_원가합계', [], new JsonZoonData('응찰_수지_취득_원가합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_취득_총원가합계 = new CalcEdit('응찰_수지_취득_총원가합계', [], new JsonZoonData('응찰_수지_취득_총원가합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유수익_합계 = new CalcEdit('응찰_수지_보유수익_합계', [], new JsonZoonData('응찰_수지_보유수익_합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_보유비용_합계 = new CalcEdit('응찰_수지_보유비용_합계', [], new JsonZoonData('응찰_수지_보유비용_합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_처분_합계 = new CalcEdit('응찰_수지_처분_합계', [], new JsonZoonData('응찰_수지_처분_합계', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_집계표_당사미회수채권액 = new CalcEdit('응찰_집계표_당사미회수채권액', ['응찰_집계표_당사채권최고액', '응찰_집계표_당사배당금'], new FunctionZoonData('응찰_집계표_당사미회수채권액', () => {
            return {
                value: GetNumber('응찰_집계표_당사채권최고액') - GetNumber('응찰_집계표_당사배당금')
            }
        }), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_실제취득가 = new CalcEdit('응찰_수지_실제취득가', [], new JsonZoonData('응찰_수지_실제취득가', {}), {
            isShow: true, isEnable: true
        });
        const 응찰_수지_처분_비용_Combo = new Combo('응찰_수지_처분_비용_Combo', new JsonZoonData('Q_49_DUAL_처분비용', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_종부세_Combo = new Combo('응찰_수지_보유비용_종부세_Combo', new JsonZoonData('Q_49_DUAL_종합부동산세', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const Command_응찰_02_이벤트 = new Command('Command_응찰_02_이벤트', new JsonZoonData('Command_응찰_02_이벤트', {}), {
            isShow: false, isEnable: true
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
            isShow: false, isEnable: true
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


            if (isEmpty(GetValue('감정순번'))) {
                return false;
            }


            if (isEmpty(GetValue('감정순번'))) {
                return false;
            }


            RunQuery('Q_40_응찰입력표_마스타', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_40_응찰입력표_마스타').GetRow(0, [{key: '응찰_사항_사건번호', value: '사항_사건번호'},

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
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');


            RunQuery('Q_42_응찰입력표_전감정의개요', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');


            GetZoonData('Q_42_응찰입력표_전감정의개요').GetRow(0, [{key: '응찰_개요_지점_감정일', value: '지점_감정일'},

                {key: '응찰_개요_지점_담당자', value: '지점_감정자_담당자'},

                {key: '응찰_개요_지점_파트장', value: '지점_감정자_파트장'},

                {key: '응찰_개요_지점_팀장', value: '지점_감정자_팀장'},

                {key: '응찰_개요_지점_지점장', value: '지점_감정자_지점장'},

                {key: '응찰_개요_지점_제1차예상낙찰가', value: '지점_제1차예상입찰가'},

                {key: '응찰_개요_지점_예상낙찰가', value: '지점_예상낙찰가'},

                {key: '응찰_개요_지점_예상낙찰가율', value: '지점_예상낙찰가율'},

                {key: '응찰_개요_지점_담보여력', value: '지점_담보여력'},

                {key: '응찰_개요_지점_당사채권금액', value: '지점_당사채권금액'},

                {key: '응찰_개요_지점_당사순위및등기', value: '지점_당사순위및등기권리'},

                {key: '응찰_개요_본사_감정일', value: '본사_감정일'},

                {key: '응찰_개요_본사_1차결재', value: '본사_감정자_1차결재'},

                {key: '응찰_개요_본사_2차결재', value: '본사_감정자_2차결재'},

                {key: '응찰_개요_본사_3차결재', value: '본사_감정자_3차결재'},

                {key: '응찰_개요_본사_관재파트장', value: '본사_감정자_관재파트장'},

                {key: '응찰_개요_본사_팀장', value: '본사_감정자_팀장'},

                {key: '응찰_개요_본사_제1차예상낙찰가', value: '본사_제1차예상입찰가'},

                {key: '응찰_개요_본사_예상낙찰가', value: '본사_예상낙찰가'},

                {key: '응찰_개요_본사_예상낙찰가율', value: '본사_예상낙찰가율'},

                {key: '응찰_개요_본사_담보여력', value: '본사_담보여력'},

                {key: '응찰_개요_본사_당사채권금액', value: '본사_당사채권금액'},

                {key: '응찰_개요_본사_당사순위및등기', value: '본사_당사순위및등기권리'},]);


            RunQuery('Q_43_응찰입력표_선순위권리내역', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');


            RunQuery('Q_44_응찰입력표_선순위부담금액', {
                '년도': GetValue('년도'), '감정순번': GetValue('감정순번')
            }, 'GET');

        })

        const Command_응찰_00_메인 = new Command('Command_응찰_00_메인', new JsonZoonData('Command_응찰_00_메인', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            RunButton('Command_응찰_03_초기화');


            RunButton('Command_응찰_01_쿼리');

            // BreakMacro
            // #ERROR
            // !
            //
            //     RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_종부세_적용값 = new CalcEdit('응찰_수지_보유비용_종부세_적용값', [], new JsonZoonData('응찰_수지_보유비용_종부세_적용값', {}), {
            isShow: false, isEnable: true
        });
        const 응찰_수지_처분_비용_적용값 = new CalcEdit('응찰_수지_처분_비용_적용값', [], new JsonZoonData('응찰_수지_처분_비용_적용값', {}), {
            isShow: false, isEnable: true
        });
        const 응찰_변수_숫자1 = new Edit('응찰_변수_숫자1', new JsonZoonData('응찰_변수_숫자1', {}), {
            isShow: false, isEnable: true
        });
        const 응찰_변수_숫자2 = new Edit('응찰_변수_숫자2', new JsonZoonData('응찰_변수_숫자2', {}), {
            isShow: false, isEnable: true
        });
        const Command_응찰_11_내용 = new Command('Command_응찰_11_내용', new JsonZoonData('Command_응찰_11_내용', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_내용_법원감정가합계', GetNumber('응찰_내용_토지_금액') + GetNumber('응찰_내용_건물_금액'));


            SetValue('응찰_내용_입찰예정가_금액', Round(Round(GetNumber('응찰_내용_법원감정가합계') * (GetNumber('보정표_MkEdit_적용할낙찰가율') / 100), 0) / 1000, 0) * 1000);


            SetValue('응찰_내용_입찰예정가_낙찰가율', Round((GetNumber('응찰_내용_입찰예정가_금액') / GetNumber('응찰_내용_법원감정가합계')) * 100, 2));


            SetValue('응찰_수지_입찰예정가', GetValue('응찰_내용_입찰예정가_금액'));


            SetValue('응찰_수지_실제취득가', GetNumber('응찰_수지_부담비용합계') + GetNumber('응찰_내용_입찰예정가_금액'));


            // RunButton('Command_응찰_항목별합계');

        })

        const 응찰_변수_숫자_부담비용합계 = new CalcEdit('응찰_변수_숫자_부담비용합계', [], new JsonZoonData('응찰_변수_숫자_부담비용합계', {}), {
            isShow: false, isEnable: true
        });
        const Command_응찰_12_부담비용합계 = new Command('Command_응찰_12_부담비용합계', new JsonZoonData('Command_응찰_12_부담비용합계', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_권리내역').GetRows("", [{key: '01_응찰_숫자배열변수1', value: '금액'},]);


            GetComponent('DBGrid_응찰_부담내역').GetRows("", [{key: '01_응찰_숫자배열변수2', value: '금액'},]);


            SetValue('응찰_수지_부담비용합계', Sum('01_응찰_숫자배열변수1') + Sum('01_응찰_숫자배열변수2'));


            SetValue('응찰_수지_실제취득가', GetNumber('응찰_수지_부담비용합계') + GetNumber('응찰_내용_입찰예정가_금액'));


            // RunButton('Command_응찰_항목별합계');

        })

        const Command_응찰_03_초기화 = new Command('Command_응찰_03_초기화', new JsonZoonData('Command_응찰_03_초기화', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_예정_낙찰후매각가능', 3);

        })

        const Command_응찰_13_추정예상매각대금 = new Command('Command_응찰_13_추정예상매각대금', new JsonZoonData('Command_응찰_13_추정예상매각대금', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_예상매각금액', Round(GetValue('응찰_내용_입찰예정가_금액') * (GetValue('응찰_수지_예상공시지가상승률') / 100) / 1000, 0) * 1000);


            // RunButton('Command_응찰_항목별합계');

        })

        const Command_응찰_14_취득비용 = new Command('Command_응찰_14_취득비용', new JsonZoonData('Command_응찰_14_취득비용', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_취득_취득세', Round((GetNumber('응찰_내용_입찰예정가_금액') * (StrToNum(GetValue('응찰_수지_취득_취득세_Combo')) / 100)) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_등록세', Round((GetNumber('응찰_내용_입찰예정가_금액') * (StrToNum(GetValue('응찰_수지_취득_등록세_Combo')) / 100)) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_채권매입', Round((GetNumber('응찰_내용_입찰예정가_금액') * 0.004) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_기타취득', Round((GetNumber('응찰_내용_입찰예정가_금액') * 0.002) / 1000, 0) * 1000);


            SetValue('응찰_수지_취득_합계', GetNumber('응찰_수지_취득_취득세') + GetNumber('응찰_수지_취득_등록세') + GetNumber('응찰_수지_취득_강제집행') + GetNumber('응찰_수지_취득_채권매입') + GetNumber('응찰_수지_취득_기타취득'));


            SetValue('응찰_수지_취득_원가합계', GetNumber('응찰_수지_취득_합계') + GetNumber('응찰_내용_입찰예정가_금액'));


            SetValue('응찰_수지_취득_총원가합계', GetNumber('응찰_수지_취득_원가합계') + GetNumber('응찰_수지_부담비용합계'));


            // RunButton('Command_응찰_항목별합계');

        })

        const Command_응찰_15_보유수익 = new Command('Command_응찰_15_보유수익', new JsonZoonData('Command_응찰_15_보유수익', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_보유수익_임대수익', //임대수익= (임대보증금*5%*3)+(월임대수입*36)
                Round(((GetNumber('응찰_수지_보유수익_임대보증금') * 0.05 * 3) + (GetNumber('응찰_수지_보유수익_월임대수입') * 36)) / 1000, 0) * 1000);


            SetValue('응찰_수지_보유수익_합계', GetNumber('응찰_수지_보유수익_임대수익') + GetNumber('응찰_수지_보유수익_기타수익'));


            // RunButton('Command_응찰_항목별합계');

        })

        const Command_응찰_16_보유비용 = new Command('Command_응찰_16_보유비용', new JsonZoonData('Command_응찰_16_보유비용', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_보유비용_주택기준시가', GetValue('MkEdit_입력표_기준시가_총액'));


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


            GetZoonData('Q_49_DUAL_종합부동산세').GetRow(GetValue('01_응찰_숫자변수1'), [{key: '응찰_수지_보유비용_종부세_적용값', value: 'GU_VAL'},]);


            if (Left(GetValue('담보종류'), 1) == "1") {
                SetValue('응찰_수지_보유비용_종부세', Round((GetNumber('응찰_수지_보유비용_주택기준시가') * (GetNumber('응찰_수지_보유비용_종부세_적용값') / 100)) / 1000, 0) * 1000);
            } else {
                SetValue('응찰_수지_보유비용_종부세', Round((GetNumber('응찰_수지_보유비용_종부세적용면적') * GetNumber('응찰_수지_보유비용_종부세_적용값')) / 1000, 0) * 1000);
            }


            SetValue('응찰_수지_보유비용_합계', GetNumber('응찰_수지_보유비용_기회비용') + GetNumber('응찰_수지_보유비용_부가세') + GetNumber('응찰_수지_보유비용_법인세') + GetNumber('응찰_수지_보유비용_재산세') + GetNumber('응찰_수지_보유비용_종부세') + GetNumber('응찰_수지_보유비용_기타유지보수비용'));


            // RunButton('Command_응찰_항목별합계');

        })

        const 응찰_수지_취득_취득세_Combo = new Combo('응찰_수지_취득_취득세_Combo', new JsonZoonData('Q_49_DUAL_취득세', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_취득_등록세_Combo = new Combo('응찰_수지_취득_등록세_Combo', new JsonZoonData('Q_49_DUAL_취득세', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_응찰_02_이벤트');

        })

        const 응찰_수지_보유비용_주택기준시가 = new CalcEdit('응찰_수지_보유비용_주택기준시가', [], new JsonZoonData('응찰_수지_보유비용_주택기준시가', {}), {
            isShow: false, isEnable: true
        });
        const 응찰_수지_보유비용_종부세적용면적 = new CalcEdit('응찰_수지_보유비용_종부세적용면적', [], new JsonZoonData('응찰_수지_보유비용_종부세적용면적', {}), {
            isShow: false, isEnable: true
        });
        const Command_응찰_17_처분비용 = new Command('Command_응찰_17_처분비용', new JsonZoonData('Command_응찰_17_처분비용', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            GetZoonData('Q_49_DUAL_처분비용').FindIndex('01_응찰_숫자변수1', (row) => {

                if ((row['처리구분'] == GetValue('응찰_수지_처분_비용_Combo'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_49_DUAL_처분비용').GetRow(GetValue('01_응찰_숫자변수1'), [{key: '응찰_수지_처분_비용_적용값', value: '처분비율'},]);


            if (GetValue('응찰_수지_예상매각확신금액') > 0) {
                SetValue('응찰_수지_처분_비용', Round(((GetValue('응찰_수지_예상매각확신금액') - GetValue('응찰_수지_취득_원가합계')) * (GetValue('응찰_수지_처분_비용_적용값') / 100)) / 1000, 0) * 1000);
            } else {
                SetValue('응찰_수지_처분_비용', Round(((GetValue('응찰_수지_예상매각금액') - GetValue('응찰_수지_취득_원가합계')) * (GetValue('응찰_수지_처분_비용_적용값') / 100)) / 1000, 0) * 1000);
            }


            SetValue('응찰_수지_처분_합계', GetNumber('응찰_수지_처분_비용') + GetNumber('응찰_수지_처분_기타비용'));


            // RunButton('Command_응찰_항목별합계');

        })

        const Command_응찰_18_항목별합계 = new Command('Command_응찰_18_항목별합계', new JsonZoonData('Command_응찰_18_항목별합계', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('응찰_수지_항목별_비용합계', GetNumber('응찰_수지_취득_총원가합계') + GetNumber('응찰_수지_보유비용_합계') + GetNumber('응찰_수지_처분_합계'));


            if (GetValue('응찰_수지_예상매각확신금액') > 0) {
                SetValue('응찰_수지_항목별_수익합계', GetNumber('응찰_수지_보유수익_합계') + GetNumber('응찰_수지_예상매각확신금액'));
            } else {
                SetValue('응찰_수지_항목별_수익합계', GetNumber('응찰_수지_보유수익_합계') + GetNumber('응찰_수지_예상매각금액'));
            }


            SetValue('응찰_수지_항목별_예상손익', GetNumber('응찰_수지_항목별_수익합계') - GetNumber('응찰_수지_항목별_비용합계'));


            SetValue('응찰_수지_전체손익', GetNumber('응찰_수지_항목별_예상손익') - GetNumber('응찰_집계표_당사미회수채권액'));


            // RunButton('Command_응찰_항목별합계');

        })

        const Picture47 = new Picture('Picture47', new JsonZoonData('Picture47', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_응찰_기일내역').GetCurSel('응찰_경매_Formula_기일내역_TNUM');


            GetComponent('DBGrid_응찰_기일내역').DeleteRow(GetNumber('응찰_경매_Formula_기일내역_TNUM'));

        })

        const Command_응찰_91_저장 = new Command('Command_응찰_91_저장', new JsonZoonData('Command_응찰_91_저장', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            if ((GetValue('응찰_입력표활성여부') != 'Y')) {
                return false;
            }


            RunQuery('저장_40_응찰마스타', {
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'AUC_NO': GetValue('응찰_사항_사건번호'),
                'COMPETENT_COURT': GetValue('응찰_사항_관할법원'),
                'AUC_GU': GetValue('응찰_사항_경매구분'),
                'AUC_DEPT': GetValue('응찰_사항_경매계'),
                'AUC_TELNO': GetValue('응찰_사항_전화번호'),
                'AUC_DEMUR': GetValue('응찰_사항_경매신청채권자'),
                'AUC_CHARGE_AMT': GetValue('응찰_사항_청구금액'),
                'AUC_START_DATE': GetValue('응찰_사항_경매개시등기일'),
                'AUC_DESC': GetValue('응찰_사항_유입시특이사항'),
                'BID_L_AMT': GetValue('응찰_내용_토지_금액'),
                'BID_L_DAN': GetValue('응찰_내용_토지_단가'),
                'BID_L_PY_DAN': GetValue('응찰_내용_토지_단가_평당'),
                'BID_B_AMT': GetValue('응찰_내용_건물_금액'),
                'BID_B_DAN': GetValue('응찰_내용_건물_단가'),
                'BID_B_PY_AMT': GetValue('응찰_내용_건물_단가_평당'),
                'BID_TOT_AMT': GetValue('응찰_내용_법원감정가합계'),
                'BID_PL_AMT': GetValue('응찰_내용_입찰예정가_금액'),
                'BID_APPL_RATE': GetValue('응찰_내용_입찰예정가_낙찰가율'),
                'DIV_CRED_MAX_AMT': GetValue('응찰_집계표_최고채권액'),
                'DIV_POSS_A_CASE': GetValue('응찰_집계표_최고채권액Combo'),
                'DIV_POSS_A_AMT': GetValue('응찰_집계표_최고채권액Combo_Value'),
                'DIV_PRIOR_MAX_AMT': GetValue('응찰_집계표_선순위자채권최고액'),
                'DIV_PRIOR_SHARE_AMT': GetValue('응찰_집계표_선순위자배당금'),
                'DIV_COMP_MAX_AMT': GetValue('응찰_집계표_당사채권최고액'),
                'DIV_COMP_SHARE_AMT': GetValue('응찰_집계표_당사배당금'),
                'DIV_COMP_UNR_AMT': GetValue('응찰_집계표_당사미회수채권액'),
                'RIGHT_ALLOT_AMT': GetValue('응찰_수지_부담비용합계'),
                'OBT_AMT': GetValue('응찰_수지_실제취득가'),
                'TENURE_YEAR': GetValue('응찰_수지_예정_낙찰후매각가능'),
                'STD_PRICE_RATE': GetValue('응찰_수지_예상공시지가상승률'),
                'PLAN_SALE_AMT': GetValue('응찰_수지_예상매각금액'),
                'SALE_AMT': GetValue('응찰_수지_예상매각확신금액'),
                'SALE_DESC': GetValue('응찰_수지_예상매각확신사유'),
                'IN_OBT_TAX_RATE': GetValue('응찰_수지_취득_취득세_Combo'),
                'IN_OBT_TAX': GetValue('응찰_수지_취득_취득세'),
                'IN_OBT_REG_TAX_RATE': GetValue('응찰_수지_취득_등록세_Combo'),
                'IN_OBT_REG_TAX': GetValue('응찰_수지_취득_등록세'),
                'IN_OBT_EXEU_AMT': GetValue('응찰_수지_취득_강제집행'),
                'IN_OBT_LOSS_AMT': GetValue('응찰_수지_취득_채권매입'),
                'IN_OBT_ETC_AMT': GetValue('응찰_수지_취득_기타취득'),
                'IN_OBT_EXEU_TOT': GetValue('응찰_수지_취득_합계'),
                'IN_OBT_WONGA_TOT': GetValue('응찰_수지_취득_원가합계'),
                'IN_OBT_TOTAL_AMT': GetValue('응찰_수지_취득_총원가합계'),
                'IN_EAR_RENT_AMT': GetValue('응찰_수지_보유수익_임대수익'),
                'IN_EAR_RENT_SEC_AMT': GetValue('응찰_수지_보유수익_임대보증금'),
                'IN_EAR_RENT_MON_AMT': GetValue('응찰_수지_보유수익_월임대수입'),
                'IN_EAR_RENT_ETC_AMT': GetValue('응찰_수지_보유수익_기타수익'),
                'IN_EAR_TOT_AMT': GetValue('응찰_수지_보유수익_합계'),
                'IN_EXP_OPP_AMT': GetValue('응찰_수지_보유비용_기회비용'),
                'IN_EXP_VAT_AMT': GetValue('응찰_수지_보유비용_부가세'),
                'IN_EXP_CORP_TAX': GetValue('응찰_수지_보유비용_법인세'),
                'IN_EXP_PROP_TAX': GetValue('응찰_수지_보유비용_재산세'),
                'IN_EXP_ESTA_GU': GetValue('응찰_수지_보유비용_종부세_Combo'),
                'IN_EXP_ESTA_AMT': GetValue('응찰_수지_보유비용_종부세'),
                'IN_EXP_ETC_AMT': GetValue('응찰_수지_보유비용_기타유지보수비용'),
                'IN_EXP_TOT_AMT': GetValue('응찰_수지_보유비용_합계'),
                'IN_DIS_GU': GetValue('응찰_수지_처분_비용_Combo'),
                'IN_DIS_AMT': GetValue('응찰_수지_처분_비용'),
                'IN_DIS_ETC_AMT': GetValue('응찰_수지_처분_기타비용'),
                'IN_DIS_TOT_AMT': GetValue('응찰_수지_처분_합계'),
                'ITOT_EXPENSE_AMT': GetValue('응찰_수지_항목별_비용합계'),
                'ITOT_EARNING_AMT': GetValue('응찰_수지_항목별_수익합계'),
                'ITOT_PROFIT_AMT': GetValue('응찰_수지_항목별_예상손익'),
                'FNL_PROFIT_AMT': GetValue('응찰_수지_전체손익'),
                'BID_YN': GetValue('응찰_수지_응찰여부_Group')
            }, 'POST');


            RunQuery('저장_42_응찰_전감정개요', {
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
                'COMP_RIGHT': GetValue('응찰_개요_본사_당사순위및등기'),
            }, 'POST');


            GetComponent('DBGrid_응찰_기일내역').GetModifyData([{key: '01_응찰_저장_11_년도', value: '년도', isDelRowInclude: true},

                {key: '01_응찰_저장_11_일련번호', value: '일련번호', isDelRowInclude: true},

                {key: '01_응찰_저장_11_회차', value: '회차', isDelRowInclude: true},

                {key: '01_응찰_저장_11_일자', value: '일자', isDelRowInclude: true},

                {key: '01_응찰_저장_11_금액', value: '금액', isDelRowInclude: true},

                {key: '01_응찰_저장_11_유찰여부', value: '유찰여부', isDelRowInclude: true},

            ]);


            RunQuery('저장_41_응찰_기일내역', {
                '01_응찰_저장_11_년도': GetValue('01_응찰_저장_11_년도'),
                '01_응찰_저장_11_일련번호': GetValue('01_응찰_저장_11_일련번호'),
                '01_응찰_저장_11_회차': GetValue('01_응찰_저장_11_회차'),
                '01_응찰_저장_11_일자': GetValue('01_응찰_저장_11_일자'),
                '01_응찰_저장_11_금액': GetValue('01_응찰_저장_11_금액'),
                '01_응찰_저장_11_유찰여부': GetValue('01_응찰_저장_11_유찰여부')
            }, 'POST');


            GetComponent('DBGrid_응찰_권리내역').GetModifyData([{key: '01_응찰_저장_13_년도', value: '년도', isDelRowInclude: true},

                {key: '01_응찰_저장_13_일련번호', value: '일련번호', isDelRowInclude: true},

                {key: '01_응찰_저장_13_순번', value: '순번', isDelRowInclude: true},

                {key: '01_응찰_저장_13_금액', value: '금액', isDelRowInclude: true},

                {key: '01_응찰_저장_13_권리자', value: '권리자', isDelRowInclude: true},

                {key: '01_응찰_저장_13_권리내역', value: '권리내역', isDelRowInclude: true}]);


            RunQuery('저장_43_응찰_선순위권리내역', {
                '01_응찰_저장_13_년도': GetValue('01_응찰_저장_13_년도'),
                '01_응찰_저장_13_일련번호': GetValue('01_응찰_저장_13_일련번호'),
                '01_응찰_저장_13_순번': GetValue('01_응찰_저장_13_순번'),
                '01_응찰_저장_13_금액': GetValue('01_응찰_저장_13_금액'),
                '01_응찰_저장_13_권리자': GetValue('01_응찰_저장_13_권리자'),
                '01_응찰_저장_13_권리내역': GetValue('01_응찰_저장_13_권리내역')
            }, 'POST');


            GetComponent('DBGrid_응찰_부담내역').GetModifyData([{key: '01_응찰_저장_14_년도', value: '년도', isDelRowInclude: true},

                {key: '01_응찰_저장_14_일련번호', value: '일련번호', isDelRowInclude: true},

                {key: '01_응찰_저장_14_순번', value: '순번', isDelRowInclude: true},

                {key: '01_응찰_저장_14_금액', value: '금액', isDelRowInclude: true},

                {key: '01_응찰_저장_14_권리자', value: '권리자', isDelRowInclude: true},

                {key: '01_응찰_저장_14_권리내역', value: '권리내역', isDelRowInclude: true},

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

        const Command_응찰_00_탭활성여부 = new Command('Command_응찰_00_탭활성여부', new JsonZoonData('Command_응찰_00_탭활성여부', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {
            if (GetValue('응찰_입력표활성여부') == 'Y') {

                GetComponent('TabControl1').EnableTab(5, 1);

            }

            if (GetValue('응찰_입력표활성여부') != 'Y') {

                GetComponent('TabControl1').EnableTab(5, 0);

            }

        })

        const 감정가액산출Ⅰ = new Edit('감정가액산출Ⅰ', new JsonZoonData('감정가액산출Ⅰ', {}), {
            isShow: true, isEnable: true
        })
        const Group3 = new Group('Group3', new JsonZoonData('Group3', {}), {
            isShow: true, isEnable: true
        })
        const Table20 = new Edit('Table20', new JsonZoonData('Table20', {}), {
            isShow: true, isEnable: true
        })
        const Table18 = new Edit('Table18', new JsonZoonData('Table18', {}), {
            isShow: true, isEnable: true
        })
        const Group5 = new Group('Group5', new JsonZoonData('Group5', {}), {
            isShow: true, isEnable: true
        })
        const DBGrid_가격사례 = new DBGrid('DBGrid_가격사례', new JsonZoonData('Q_감정가_01_가격사례', {}), {
            isShow: true, isEnable: true
        }).on('OnDblClick', function () {
            MC_200_초기화_가격사례_항목();
            MC_200_DBGrid_가격사례_DblClick_Event();
        }).on('OnButtonClick', function () {
            SetValue('팝업_주소창호출위치', '감정가_경매사례');

            GetComponent('SubForm_주소조회').ShowSubForm(() => {
                GetComponent('DBGrid_경매사례').SetRow("", [
                    {key: 'JUSO', value: GetValue('소재지_12_경매사례')},
                ]);
            });
        })

        const Table7 = new Edit('Table7', new JsonZoonData('Table7', {}), {
            isShow: true, isEnable: true
        })
        const Table16 = new Edit('Table16', new JsonZoonData('Table16', {}), {
            isShow: true, isEnable: true
        })
        const Group6 = new Group('Group6', new JsonZoonData('Group6', {}), {
            isShow: true, isEnable: true
        })
        const DBGrid_경매사례 = new DBGrid('DBGrid_경매사례', new JsonZoonData('Q_감정가_02_경매사례', {}), {
            isShow: true, isEnable: true
        }).on('OnButtonClick', function () {
            SetValue('팝업_주소창호출위치', '감정가_경매사례');
            GetComponent('SubForm_주소조회').ShowSubForm(() => {
                GetComponent('DBGrid_경매사례').SetRow(-1, [
                    { key:'소재지', value: GetValue('감정가_경매_소재지') }
                ]);
            });
        }).on('OnEditChanged', function () {
            MC_202_DBGrid_경매사례_EVENT_해당층();
            MC_202_DBGrid_경매사례_EVENT_구조();
        }).on('OnValidate', function () {

            GetComponent('DBGrid_경매사례').GetRow(-1, [
                {key: '감정가_경매_전용면적', value: '전용면적'},

                {key: '감정가_경매_법원감정가', value: '법원감정가'},

                {key: '감정가_경매_낙찰가격', value: '낙찰가격'},

                {key: '감정가_경매_건축년도', value: '건축년도'},

            ]);

            if (isEmpty(Trim(GetValue('감정가_경매_건축년도')))) {
                SetValue('감정가_경매_경과년도', 0);
            } else {
                SetValue('감정가_경매_경과년도', StrToNum(Left(GetValue('MkEdit_감정일'), 4)) - StrToNum(GetValue('감정가_경매_건축년도')));
            }


            //-- 전용면적단가(법원감정가/전용면적)
            if ((GetValue('감정가_경매_법원감정가') == 0) || (GetValue('감정가_경매_전용면적') == 0)) {
                SetValue('감정가_경매_전용면적단가', 0);
            } else {
                SetValue('감정가_경매_전용면적단가', Round(GetNumber('감정가_경매_법원감정가') / GetNumber('감정가_경매_전용면적'), 0));
            }


            //-- 낙찰가율(낙찰가/법원감정가*100)
            if ((GetValue('감정가_경매_법원감정가') == 0) || (GetValue('감정가_경매_낙찰가격') == 0)) {
                SetValue('감정가_경매_낙찰가율', 0);
            } else {
                SetValue('감정가_경매_낙찰가율', Round((GetNumber('감정가_경매_낙찰가격') / GetNumber('감정가_경매_법원감정가')) * 100, 2));
            }


            GetComponent('DBGrid_경매사례').SetRow(-1, [{key: '경과년도', value: GetValue('감정가_경매_경과년도')},

                {key: '전용면적단가', value: GetValue('감정가_경매_전용면적단가')},

                {key: '낙찰가율', value: GetValue('감정가_경매_낙찰가율')},]);

        }).on('OnEnterKey', function () {
            GetComponent('DBGrid_경매사례').NextTab();
        });

        const 본건_MkEdit_세대수 = new MaskEdit('본건_MkEdit_세대수', new JsonZoonData('본건_MkEdit_세대수', {}), {
            isShow: true, isEnable: true, mask: ';4;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_감정가액산출_세대수', GetValue('MkEdit_세대수'));

            SetValue('MkEdit_보정표_아파트단지규모', GetValue('MkEdit_세대수'));


            if (GetValue('MkEdit_세대수') > 0 && GetValue('MkEdit_세대수') <= 50) {
                SetValue('Combo_아파트단지규모', "01")
            } else if (GetValue('MkEdit_세대수') >= 50 && GetValue('MkEdit_세대수') <= 100) {
                SetValue('Combo_아파트단지규모', "02")
            } else if (GetValue('MkEdit_세대수') >= 101 && GetValue('MkEdit_세대수') <= 300) {
                SetValue('Combo_아파트단지규모', "03")
            } else if (GetValue('MkEdit_세대수') >= 301 && GetValue('MkEdit_세대수') <= 600) {
                SetValue('Combo_아파트단지규모', "04")
            } else if (GetValue('MkEdit_세대수') >= 601 && GetValue('MkEdit_세대수') <= 1000) {
                SetValue('Combo_아파트단지규모', "05")
            } else if (GetValue('MkEdit_세대수') > 1000) {
                SetValue('Combo_아파트단지규모', "06")
            }

            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100)


            GetZoonData('Q_00_접한도로의폭').FindIndex('단지전체규모_Idx', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_아파트단지규모'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_00_접한도로의폭').GetRow(GetValue('단지전체규모_Idx'), [{key: 'MkEdit_보정표_아파트단지규모_적용율', value: 'ATTR_08'},]);

        })

        const 본건_MkEdit_전용면적1 = new MaskEdit('본건_MkEdit_전용면적1', new JsonZoonData('본건_MkEdit_전용면적1', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_전용면적1') == 0) || (GetValue('본건_MkEdit_평균가격1') == 0)) {
                SetValue('본건_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가1', Round(Round((GetNumber('본건_MkEdit_평균가격1') / GetNumber('본건_MkEdit_전용면적1')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격1') == 0) || (GetValue('본건_MkEdit_전세금1') == 0)) {
                SetValue('본건_MkEdit_전세_비율1', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율1', Truncate((GetNumber('본건_MkEdit_전세금1') / GetNumber('본건_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 본건_MkEdit_최저가격1 = new MaskEdit('본건_MkEdit_최저가격1', new JsonZoonData('본건_MkEdit_최저가격1', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('본건_MkEdit_평균가격1', Round((GetNumber('본건_MkEdit_최저가격1') + GetNumber('본건_MkEdit_최고가격1')) / 2, 0));


            if ((GetValue('본건_MkEdit_전용면적1') == 0) || (GetValue('본건_MkEdit_평균가격1') == 0)) {
                SetValue('본건_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가1', Round(Round((GetNumber('본건_MkEdit_평균가격1') / GetNumber('본건_MkEdit_전용면적1')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격1') == 0) || (GetValue('본건_MkEdit_전세금1') == 0)) {
                SetValue('본건_MkEdit_전세_비율1', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율1', Truncate((GetNumber('본건_MkEdit_전세금1') / GetNumber('본건_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 본건_MkEdit_최고가격1 = new MaskEdit('본건_MkEdit_최고가격1', new JsonZoonData('본건_MkEdit_최고가격1', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('본건_MkEdit_평균가격1', Round((GetNumber('본건_MkEdit_최저가격1') + GetNumber('본건_MkEdit_최고가격1')) / 2, 0));


            if ((GetValue('본건_MkEdit_전용면적1') == 0) || (GetValue('본건_MkEdit_평균가격1') == 0)) {
                SetValue('본건_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가1', Round(Round((GetNumber('본건_MkEdit_평균가격1') / GetNumber('본건_MkEdit_전용면적1')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격1') == 0) || (GetValue('본건_MkEdit_전세금1') == 0)) {
                SetValue('본건_MkEdit_전세_비율1', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율1', Truncate((GetNumber('본건_MkEdit_전세금1') / GetNumber('본건_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 본건_MkEdit_전세금1 = new MaskEdit('본건_MkEdit_전세금1', new JsonZoonData('본건_MkEdit_전세금1', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_평균가격1') == 0) || (GetValue('본건_MkEdit_전세금1') == 0)) {
                SetValue('본건_MkEdit_전세_비율1', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율1', Truncate((GetNumber('본건_MkEdit_전세금1') / GetNumber('본건_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 본건_MkEdit_전용면적2 = new MaskEdit('본건_MkEdit_전용면적2', new JsonZoonData('본건_MkEdit_전용면적2', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_전용면적2') == 0) || (GetValue('본건_MkEdit_평균가격2') == 0)) {
                SetValue('본건_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가2', Round(Round((GetNumber('본건_MkEdit_평균가격2') / GetNumber('본건_MkEdit_전용면적2')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격2') == 0) || (GetValue('본건_MkEdit_전세금2') == 0)) {
                SetValue('본건_MkEdit_전세_비율2', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율2', Truncate((GetNumber('본건_MkEdit_전세금2') / GetNumber('본건_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 본건_MkEdit_최저가격2 = new MaskEdit('본건_MkEdit_최저가격2', new JsonZoonData('본건_MkEdit_최저가격2', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('본건_MkEdit_평균가격2', Round((GetNumber('본건_MkEdit_최저가격2') + GetNumber('본건_MkEdit_최고가격2')) / 2, 0));


            if ((GetValue('본건_MkEdit_전용면적2') == 0) || (GetValue('본건_MkEdit_평균가격2') == 0)) {
                SetValue('본건_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가2', Round(Round((GetNumber('본건_MkEdit_평균가격2') / GetNumber('본건_MkEdit_전용면적2')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격2') == 0) || (GetValue('본건_MkEdit_전세금2') == 0)) {
                SetValue('본건_MkEdit_전세_비율2', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율2', Truncate((GetNumber('본건_MkEdit_전세금2') / GetNumber('본건_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 본건_MkEdit_최고가격2 = new MaskEdit('본건_MkEdit_최고가격2', new JsonZoonData('본건_MkEdit_최고가격2', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('본건_MkEdit_평균가격2', Round((GetNumber('본건_MkEdit_최저가격2') + GetNumber('본건_MkEdit_최고가격2')) / 2, 0));


            if ((GetValue('본건_MkEdit_전용면적2') == 0) || (GetValue('본건_MkEdit_평균가격2') == 0)) {
                SetValue('본건_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가2', Round(Round((GetNumber('본건_MkEdit_평균가격2') / GetNumber('본건_MkEdit_전용면적2')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격2') == 0) || (GetValue('본건_MkEdit_전세금2') == 0)) {
                SetValue('본건_MkEdit_전세_비율2', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율2', Truncate((GetNumber('본건_MkEdit_전세금2') / GetNumber('본건_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 본건_MkEdit_전세금2 = new MaskEdit('본건_MkEdit_전세금2', new JsonZoonData('본건_MkEdit_전세금2', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_평균가격2') == 0) || (GetValue('본건_MkEdit_전세금2') == 0)) {
                SetValue('본건_MkEdit_전세_비율2', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율2', Truncate((GetNumber('본건_MkEdit_전세금2') / GetNumber('본건_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 본건_MkEdit_전용면적3 = new MaskEdit('본건_MkEdit_전용면적3', new JsonZoonData('본건_MkEdit_전용면적3', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_전용면적3') == 0) || (GetValue('본건_MkEdit_평균가격3') == 0)) {
                SetValue('본건_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가3', Round(Round((GetNumber('본건_MkEdit_평균가격3') / GetNumber('본건_MkEdit_전용면적3')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격3') == 0) || (GetValue('본건_MkEdit_전세금3') == 0)) {
                SetValue('본건_MkEdit_전세_비율3', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율3', Truncate((GetNumber('본건_MkEdit_전세금3') / GetNumber('본건_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 본건_MkEdit_최저가격3 = new MaskEdit('본건_MkEdit_최저가격3', new JsonZoonData('본건_MkEdit_최저가격3', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('본건_MkEdit_평균가격3', Round((GetNumber('본건_MkEdit_최저가격3') + GetNumber('본건_MkEdit_최고가격3')) / 2, 0));


            if ((GetValue('본건_MkEdit_전용면적3') == 0) || (GetValue('본건_MkEdit_평균가격3') == 0)) {
                SetValue('본건_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가3', Round(Round((GetNumber('본건_MkEdit_평균가격3') / GetNumber('본건_MkEdit_전용면적3')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격3') == 0) || (GetValue('본건_MkEdit_전세금3') == 0)) {
                SetValue('본건_MkEdit_전세_비율3', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율3', Truncate((GetNumber('본건_MkEdit_전세금3') / GetNumber('본건_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 본건_MkEdit_최고가격3 = new MaskEdit('본건_MkEdit_최고가격3', new JsonZoonData('본건_MkEdit_최고가격3', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('본건_MkEdit_평균가격3', Round((GetNumber('본건_MkEdit_최저가격3') + GetNumber('본건_MkEdit_최고가격3')) / 2, 0));


            if ((GetValue('본건_MkEdit_전용면적3') == 0) || (GetValue('본건_MkEdit_평균가격3') == 0)) {
                SetValue('본건_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가3', Round(Round((GetNumber('본건_MkEdit_평균가격3') / GetNumber('본건_MkEdit_전용면적3')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('본건_MkEdit_평균가격3') == 0) || (GetValue('본건_MkEdit_전세금3') == 0)) {
                SetValue('본건_MkEdit_전세_비율3', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율3', Truncate((GetNumber('본건_MkEdit_전세금3') / GetNumber('본건_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 본건_MkEdit_전세금3 = new MaskEdit('본건_MkEdit_전세금3', new JsonZoonData('본건_MkEdit_전세금3', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_평균가격3') == 0) || (GetValue('본건_MkEdit_전세금3') == 0)) {
                SetValue('본건_MkEdit_전세_비율3', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율3', Truncate((GetNumber('본건_MkEdit_전세금3') / GetNumber('본건_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 가격_Edit_소재지 = new Edit('가격_Edit_소재지', new JsonZoonData('가격_Edit_소재지', {}), {
            isShow: true, isEnable: true
        })
        const 가격_Edit_지번 = new Edit('가격_Edit_지번', new JsonZoonData('가격_Edit_지번', {}), {
            isShow: true, isEnable: true
        })
        const 가격_MkEdit_세대수 = new MaskEdit('가격_MkEdit_세대수', new JsonZoonData('가격_MkEdit_세대수', {}), {
            isShow: true, isEnable: true, mask: ';4;#,###1', maskType: '숫자',
        })
        const 가격_MkEdit_건축년도 = new MaskEdit('가격_MkEdit_건축년도', new JsonZoonData('가격_MkEdit_건축년도', {}), {
            isShow: true, isEnable: true, mask: '####', maskType: '문자',
        }).on('OnLostFocus', function () {


            if (StrToNum(GetValue('가격_MkEdit_건축년도')) == 0) {
                SetValue('가격_MkEdit_경과년도', 0);
            } else {
                SetValue('가격_MkEdit_경과년도', StrToNum(Left(GetValue('MkEdit_감정일'), 4)) - StrToNum(GetValue('가격_MkEdit_건축년도')));
            }

        })

        const 가격_MkEdit_전용면적1 = new MaskEdit('가격_MkEdit_전용면적1', new JsonZoonData('가격_MkEdit_전용면적1', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_전용면적1') == 0) || (GetValue('가격_MkEdit_평균가격1') == 0)) {
                SetValue('가격_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가1', Round(Round((GetNumber('가격_MkEdit_평균가격1') / GetNumber('가격_MkEdit_전용면적1')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격1') == 0) || (GetValue('가격_MkEdit_전세_전세금1') == 0)) {
                SetValue('가격_MkEdit_전세_비율1', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율1', Truncate((GetNumber('가격_MkEdit_전세_전세금1') / GetNumber('가격_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 가격_MkEdit_최저가격1 = new MaskEdit('가격_MkEdit_최저가격1', new JsonZoonData('가격_MkEdit_최저가격1', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnGotFocus', function () {

            SetValue('가격_MkEdit_평균가격1', Round((GetNumber('가격_MkEdit_최저가격1') + GetNumber('가격_MkEdit_최고가격1')) / 2, 0));


            if ((GetValue('가격_MkEdit_전용면적1') == 0) || (GetValue('가격_MkEdit_평균가격1') == 0)) {
                SetValue('가격_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가1', Round(Round((GetNumber('가격_MkEdit_평균가격1') / GetNumber('가격_MkEdit_전용면적1')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격1') == 0) || (GetValue('가격_MkEdit_전세_전세금1') == 0)) {
                SetValue('가격_MkEdit_전세_비율1', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율1', Truncate((GetNumber('가격_MkEdit_전세_전세금1') / GetNumber('가격_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 가격_MkEdit_최고가격1 = new MaskEdit('가격_MkEdit_최고가격1', new JsonZoonData('가격_MkEdit_최고가격1', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('가격_MkEdit_평균가격1', Round((GetNumber('가격_MkEdit_최저가격1') + GetNumber('가격_MkEdit_최고가격1')) / 2, 0));


            if ((GetValue('가격_MkEdit_전용면적1') == 0) || (GetValue('가격_MkEdit_평균가격1') == 0)) {
                SetValue('가격_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가1', Round(Round((GetNumber('가격_MkEdit_평균가격1') / GetNumber('가격_MkEdit_전용면적1')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격1') == 0) || (GetValue('가격_MkEdit_전세_전세금1') == 0)) {
                SetValue('가격_MkEdit_전세_비율1', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율1', Truncate((GetNumber('가격_MkEdit_전세_전세금1') / GetNumber('가격_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 가격_MkEdit_전세_전세금1 = new MaskEdit('가격_MkEdit_전세_전세금1', new JsonZoonData('가격_MkEdit_전세_전세금1', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_평균가격1') == 0) || (GetValue('가격_MkEdit_전세_전세금1') == 0)) {
                SetValue('가격_MkEdit_전세_비율1', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율1', Truncate((GetNumber('가격_MkEdit_전세_전세금1') / GetNumber('가격_MkEdit_평균가격1')) * 100, 0));
            }

        })

        const 가격_MkEdit_전용면적2 = new MaskEdit('가격_MkEdit_전용면적2', new JsonZoonData('가격_MkEdit_전용면적2', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_전용면적2') == 0) || (GetValue('가격_MkEdit_평균가격2') == 0)) {
                SetValue('가격_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가2', Round(Round((GetNumber('가격_MkEdit_평균가격2') / GetNumber('가격_MkEdit_전용면적2')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격2') == 0) || (GetValue('가격_MkEdit_전세_전세금2') == 0)) {
                SetValue('가격_MkEdit_전세_비율2', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율2', Truncate((GetNumber('가격_MkEdit_전세_전세금2') / GetNumber('가격_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 가격_MkEdit_최저가격2 = new MaskEdit('가격_MkEdit_최저가격2', new JsonZoonData('가격_MkEdit_최저가격2', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('가격_MkEdit_평균가격2', Round((GetNumber('가격_MkEdit_최저가격2') + GetNumber('가격_MkEdit_최고가격2')) / 2, 0));


            if ((GetValue('가격_MkEdit_전용면적2') == 0) || (GetValue('가격_MkEdit_평균가격2') == 0)) {
                SetValue('가격_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가2', Round(Round((GetNumber('가격_MkEdit_평균가격2') / GetNumber('가격_MkEdit_전용면적2')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격2') == 0) || (GetValue('가격_MkEdit_전세_전세금2') == 0)) {
                SetValue('가격_MkEdit_전세_비율2', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율2', Truncate((GetNumber('가격_MkEdit_전세_전세금2') / GetNumber('가격_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 가격_MkEdit_최고가격2 = new MaskEdit('가격_MkEdit_최고가격2', new JsonZoonData('가격_MkEdit_최고가격2', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('가격_MkEdit_평균가격2', Round((GetNumber('가격_MkEdit_최저가격2') + GetNumber('가격_MkEdit_최고가격2')) / 2, 0));


            if ((GetValue('가격_MkEdit_전용면적2') == 0) || (GetValue('가격_MkEdit_평균가격2') == 0)) {
                SetValue('가격_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가2', Round(Round((GetNumber('가격_MkEdit_평균가격2') / GetNumber('가격_MkEdit_전용면적2')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격2') == 0) || (GetValue('가격_MkEdit_전세_전세금2') == 0)) {
                SetValue('가격_MkEdit_전세_비율2', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율2', Truncate((GetNumber('가격_MkEdit_전세_전세금2') / GetNumber('가격_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 가격_MkEdit_전세_전세금2 = new MaskEdit('가격_MkEdit_전세_전세금2', new JsonZoonData('가격_MkEdit_전세_전세금2', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_평균가격2') == 0) || (GetValue('가격_MkEdit_전세_전세금2') == 0)) {
                SetValue('가격_MkEdit_전세_비율2', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율2', Truncate((GetNumber('가격_MkEdit_전세_전세금2') / GetNumber('가격_MkEdit_평균가격2')) * 100, 0));
            }

        })

        const 가격_MkEdit_전용면적3 = new MaskEdit('가격_MkEdit_전용면적3', new JsonZoonData('가격_MkEdit_전용면적3', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_전용면적3') == 0) || (GetValue('가격_MkEdit_평균가격3') == 0)) {
                SetValue('가격_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가3', Round(Round((GetNumber('가격_MkEdit_평균가격3') / GetNumber('가격_MkEdit_전용면적3')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격3') == 0) || (GetValue('가격_MkEdit_전세_전세금3') == 0)) {
                SetValue('가격_MkEdit_전세_비율3', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율3', Truncate((GetNumber('가격_MkEdit_전세_전세금3') / GetNumber('가격_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 가격_MkEdit_최저가격3 = new MaskEdit('가격_MkEdit_최저가격3', new JsonZoonData('가격_MkEdit_최저가격3', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('가격_MkEdit_평균가격3', Round((GetNumber('가격_MkEdit_최저가격3') + GetNumber('가격_MkEdit_최고가격3')) / 2, 0));


            if ((GetValue('가격_MkEdit_전용면적3') == 0) || (GetValue('가격_MkEdit_평균가격3') == 0)) {
                SetValue('가격_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가3', Round(Round((GetNumber('가격_MkEdit_평균가격3') / GetNumber('가격_MkEdit_전용면적3')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격3') == 0) || (GetValue('가격_MkEdit_전세_전세금3') == 0)) {
                SetValue('가격_MkEdit_전세_비율3', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율3', Truncate((GetNumber('가격_MkEdit_전세_전세금3') / GetNumber('가격_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 가격_MkEdit_최고가격3 = new MaskEdit('가격_MkEdit_최고가격3', new JsonZoonData('가격_MkEdit_최고가격3', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('가격_MkEdit_평균가격3', Round((GetNumber('가격_MkEdit_최저가격3') + GetNumber('가격_MkEdit_최고가격3')) / 2, 0));


            if ((GetValue('가격_MkEdit_전용면적3') == 0) || (GetValue('가격_MkEdit_평균가격3') == 0)) {
                SetValue('가격_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가3', Round(Round((GetNumber('가격_MkEdit_평균가격3') / GetNumber('가격_MkEdit_전용면적3')) / 1000, 0) * 1000, 0));
            }


            if ((GetValue('가격_MkEdit_평균가격3') == 0) || (GetValue('가격_MkEdit_전세_전세금3') == 0)) {
                SetValue('가격_MkEdit_전세_비율3', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율3', Truncate((GetNumber('가격_MkEdit_전세_전세금3') / GetNumber('가격_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 가격_MkEdit_전세_전세금3 = new MaskEdit('가격_MkEdit_전세_전세금3', new JsonZoonData('가격_MkEdit_전세_전세금3', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_평균가격3') == 0) || (GetValue('가격_MkEdit_전세_전세금3') == 0)) {
                SetValue('가격_MkEdit_전세_비율3', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율3', Truncate((GetNumber('가격_MkEdit_전세_전세금3') / GetNumber('가격_MkEdit_평균가격3')) * 100, 0));
            }

        })

        const 본건_MkEdit_평균가격2 = new MaskEdit('본건_MkEdit_평균가격2', new JsonZoonData('본건_MkEdit_평균가격2', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_전용면적2') == 0) || (GetValue('본건_MkEdit_평균가격2') == 0)) {
                SetValue('본건_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가2', Round(GetValue('본건_MkEdit_평균가격2') / GetValue('본건_MkEdit_전용면적2'), 0));
            }


            if ((GetValue('본건_MkEdit_평균가격2') == 0) || (GetValue('본건_MkEdit_전세금2') == 0)) {
                SetValue('본건_MkEdit_전세_비율2', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율2', Round((GetNumber('본건_MkEdit_전세금2') / GetNumber('본건_MkEdit_평균가격2')) * 100, 2));
            }

        })

        const Picture27 = new Picture('Picture27', new JsonZoonData('Picture27', {}), {
            isShow: true, isEnable: false
        })
        const 본건_MkEdit_평균가격1 = new MaskEdit('본건_MkEdit_평균가격1', new JsonZoonData('본건_MkEdit_평균가격1', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_전용면적1') == 0) || (GetValue('본건_MkEdit_평균가격1') == 0)) {
                SetValue('본건_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가1', Round(GetNumber('본건_MkEdit_평균가격1') / GetNumber('본건_MkEdit_전용면적1'), 0));
            }


            if ((GetValue('본건_MkEdit_평균가격1') == 0) || (GetValue('본건_MkEdit_전세금1') == 0)) {
                SetValue('본건_MkEdit_전세_비율1', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율1', Round((GetNumber('본건_MkEdit_전세금1') / GetNumber('본건_MkEdit_평균가격1')) * 100, 2));
            }

        })

        const 본건_MkEdit_전세_비율1 = new MaskEdit('본건_MkEdit_전세_비율1', new JsonZoonData('본건_MkEdit_전세_비율1', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const 본건_MkEdit_전세_비율2 = new MaskEdit('본건_MkEdit_전세_비율2', new JsonZoonData('본건_MkEdit_전세_비율2', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const 본건_MkEdit_평균가격3 = new MaskEdit('본건_MkEdit_평균가격3', new JsonZoonData('본건_MkEdit_평균가격3', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('본건_MkEdit_전용면적3') == 0) || (GetValue('본건_MkEdit_평균가격3') == 0)) {
                SetValue('본건_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('본건_MkEdit_전용면적단가3', Round(GetNumber('본건_MkEdit_평균가격3') / GetNumber('본건_MkEdit_전용면적3'), 0));
            }


            if ((GetValue('본건_MkEdit_평균가격3') == 0) || (GetValue('본건_MkEdit_전세금3') == 0)) {
                SetValue('본건_MkEdit_전세_비율3', 0);
            } else {
                SetValue('본건_MkEdit_전세_비율3', Round((GetNumber('본건_MkEdit_전세금3') / GetNumber('본건_MkEdit_평균가격3')) * 100, 2));
            }

        })

        const 본건_MkEdit_전세_비율3 = new MaskEdit('본건_MkEdit_전세_비율3', new JsonZoonData('본건_MkEdit_전세_비율3', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const 가격_MkEdit_내용년수 = new MaskEdit('가격_MkEdit_내용년수', new JsonZoonData('가격_MkEdit_내용년수', {}), {
            isShow: true, isEnable: false, mask: ';;#,###1', maskType: '숫자',
        })
        const 가격_MkEdit_평균가격1 = new MaskEdit('가격_MkEdit_평균가격1', new JsonZoonData('가격_MkEdit_평균가격1', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_전용면적1') == 0) || (GetValue('가격_MkEdit_평균가격1') == 0)) {
                SetValue('가격_MkEdit_전용면적단가1', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가1', Round(GetNumber('가격_MkEdit_평균가격1') / GetNumber('가격_MkEdit_전용면적1'), 0));
            }


            if ((GetValue('가격_MkEdit_평균가격1') == 0) || (GetValue('가격_MkEdit_전세_전세금1') == 0)) {
                SetValue('가격_MkEdit_전세_비율1', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율1', Round((GetNumber('가격_MkEdit_전세_전세금1') / GetNumber('가격_MkEdit_평균가격1')) * 100, 2));
            }

        })

        const 가격_MkEdit_평균가격2 = new MaskEdit('가격_MkEdit_평균가격2', new JsonZoonData('가격_MkEdit_평균가격2', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_전용면적2') == 0) || (GetValue('가격_MkEdit_평균가격2') == 0)) {
                SetValue('가격_MkEdit_전용면적단가2', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가2', Round(GetNumber('가격_MkEdit_평균가격2') / GetNumber('가격_MkEdit_전용면적2'), 0));
            }


            if ((GetValue('가격_MkEdit_평균가격2') == 0) || (GetValue('가격_MkEdit_전세_전세금2') == 0)) {
                SetValue('가격_MkEdit_전세_비율2', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율2', Round((GetNumber('가격_MkEdit_전세_전세금2') / GetNumber('가격_MkEdit_평균가격2')) * 100, 2));
            }

        })

        const 가격_MkEdit_평균가격3 = new MaskEdit('가격_MkEdit_평균가격3', new JsonZoonData('가격_MkEdit_평균가격3', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if ((GetValue('가격_MkEdit_전용면적3') == 0) || (GetValue('가격_MkEdit_평균가격3') == 0)) {
                SetValue('가격_MkEdit_전용면적단가3', 0);
            } else {
                SetValue('가격_MkEdit_전용면적단가3', Round(GetNumber('가격_MkEdit_평균가격3') / GetNumber('가격_MkEdit_전용면적3'), 0));
            }


            if ((GetValue('가격_MkEdit_평균가격3') == 0) || (GetValue('가격_MkEdit_전세_전세금3') == 0)) {
                SetValue('가격_MkEdit_전세_비율3', 0);
            } else {
                SetValue('가격_MkEdit_전세_비율3', Round((GetNumber('가격_MkEdit_전세_전세금3') / GetNumber('가격_MkEdit_평균가격3')) * 100, 2));
            }

        })

        const 본건_MkEdit_전용면적단가2 = new MaskEdit('본건_MkEdit_전용면적단가2', new JsonZoonData('본건_MkEdit_전용면적단가2', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 본건_MkEdit_전용면적단가3 = new MaskEdit('본건_MkEdit_전용면적단가3', new JsonZoonData('본건_MkEdit_전용면적단가3', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 가격_MkEdit_전용면적단가1 = new MaskEdit('가격_MkEdit_전용면적단가1', new JsonZoonData('가격_MkEdit_전용면적단가1', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 가격_Combo_본건과거리 = new Combo('가격_Combo_본건과거리', new JsonZoonData('Q_00_본건과의거리', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        })
        const 본건_MkEdit_건축년도 = new MaskEdit('본건_MkEdit_건축년도', new JsonZoonData('본건_MkEdit_건축년도', {}), {
            isShow: true, isEnable: false, mask: '####', maskType: '문자',
        })
        const 본건_MkEdit_경과년수 = new MaskEdit('본건_MkEdit_경과년수', new JsonZoonData('본건_MkEdit_경과년수', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1', maskType: '숫자',
        })
        const 본건_MkEdit_내용연수 = new MaskEdit('본건_MkEdit_내용연수', new JsonZoonData('본건_MkEdit_내용연수', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1', maskType: '숫자',
        })
        const 가격_MkEdit_사례번호 = new Edit('가격_MkEdit_사례번호', new JsonZoonData('가격_MkEdit_사례번호', {}), {
            isShow: true, isEnable: false
        })

        const Picture7 = new Picture('Picture7', new JsonZoonData('Picture7', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            SetValue('팝업_주소창호출위치', '감정가_가격사례');
            GetComponent('SubForm_주소조회').ShowSubForm(() => {
            });
        })

        const 가격_MkEdit_경과년도 = new MaskEdit('가격_MkEdit_경과년도', new JsonZoonData('가격_MkEdit_경과년도', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1', maskType: '숫자',
        })
        const 가격_MkEdit_전세_비율1 = new MaskEdit('가격_MkEdit_전세_비율1', new JsonZoonData('가격_MkEdit_전세_비율1', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const 가격_Edit_선택2 = new Edit('가격_Edit_선택2', new JsonZoonData('가격_Edit_선택2', {}), {
            isShow: false, isEnable: true
        })
        const 가격_MkEdit_전용면적단가2 = new MaskEdit('가격_MkEdit_전용면적단가2', new JsonZoonData('가격_MkEdit_전용면적단가2', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 가격_MkEdit_전세_비율2 = new MaskEdit('가격_MkEdit_전세_비율2', new JsonZoonData('가격_MkEdit_전세_비율2', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const 가격_Group_선택3 = new Group('가격_Group_선택3', new JsonZoonData('가격_Group_선택3', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            GetComponent('가격_Group_선택3').GetClickValue('가격_Edit_선택3');

            SetValue('가격_Group_선택1', "");


            SetValue('가격_Group_선택2', "");


            SetValue('가격_Edit_선택1', "");


            SetValue('가격_Edit_선택2', "");

        })

        const 가격_Check_선택3 = new Check('가격_Check_선택3', new JsonZoonData('가격_Check_선택3', { value: 'Y'}), {
            isShow: true, isEnable: true
        })
        const 가격_MkEdit_전용면적단가3 = new MaskEdit('가격_MkEdit_전용면적단가3', new JsonZoonData('가격_MkEdit_전용면적단가3', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 가격_MkEdit_전세_비율3 = new MaskEdit('가격_MkEdit_전세_비율3', new JsonZoonData('가격_MkEdit_전세_비율3', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const Label35 = new Label('Label35', new JsonZoonData('Label35', {}), {
            isShow: true, isEnable: true
        })
        const Command_가격사례_삭제 = new Picture('Command_가격사례_삭제', new JsonZoonData('Command_가격사례_삭제', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_가격사례').GetCurSel('01_TNUM');


            GetComponent('DBGrid_가격사례').DeleteRow(GetNumber('01_TNUM'));

        })

        const Command_가격사례_추가 = new Picture('Command_가격사례_추가', new JsonZoonData('Command_가격사례_추가', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            SetValue('00_TEMP', GetValue('가격_Edit_소재지'));

            SetValue('00_TEMP', Trim(GetValue('00_TEMP')));

            if (isEmpty(GetValue('00_TEMP'))) {

                if (!MsgBox(`해당 자료를 입력한 후 추가버튼(+) 을 클릭합니다.`, '', true))
                {
                    return false;
                }
            }


            if (isEmpty(GetValue('가격_Combo_본건과거리'))) {
                if (!MsgBox("[본건과의 거리]를 선택하세요.", '[확인] 가격사례', true)) {
                    return false;
                }
            }


            if (GetValue('가격_MkEdit_세대수') <= 0) {

                if (!MsgBox("[세대수]를 입력하세요.", '[확인] 가격사례', true)) {
                    return false;
                }

            }


            if (GetValue('가격_MkEdit_경과년도') <= 0) {

                if (!MsgBox("[건축년도]를 입력하세요.", '[확인] 가격사례', true)) {
                    return false;
                }

            }


            if (isEmpty(GetValue('가격_Combo_본건과거리'))) {

                if (!MsgBox("[구조]를 선택하세요.", '[확인] 가격사례', true)) {
                    return false;
                }

            }

            MC_201_가격사례_추가시_Grid();
        })

        const Command_경매사례_삭제 = new Picture('Command_경매사례_삭제', new JsonZoonData('Command_경매사례_삭제', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_경매사례').GetCurSel('01_TNUM');
            GetComponent('DBGrid_경매사례').DeleteRow(GetNumber('01_TNUM'));

        })

        const Command_경매사례_추가 = new Picture('Command_경매사례_추가', new JsonZoonData('Command_경매사례_추가', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_경매사례').GetRowCount('감정가_경매_RowCount');


            EmptyArray('감정가_경매_사례번호_배열')


            GetComponent('DBGrid_경매사례').GetRows("", [{key: '감정가_경매_사례번호_배열', value: '사례번호'},]);

            if (isEmpty(GetValue('감정가_경매_사례번호_배열')))
            {

                SetArray('감정가_경매_사례번호_배열', 0, 0)

            }


            SetValue('감정가_경매_사례번호_MAX', Max('감정가_경매_사례번호_배열') + 1);


            SetValue('감정가_경매_현재행', GetValue('감정가_경매_사례번호_MAX'))
            SetValue('감정가_경매_사례번호명', Hex(GetValue('감정가_경매_현재행') + 64))


            GetComponent('DBGrid_경매사례').AddRow({
                '년도': GetValue('년도'), '일련번호': GetValue('감정순번'),
            });


            GetComponent('DBGrid_경매사례').SetCurSel(GetNumber('감정가_경매_RowCount'));


            GetComponent('DBGrid_경매사례').SetEditFocus(GetNumber('감정가_경매_RowCount'), '경매사건번호');


            GetComponent('DBGrid_경매사례').SetRow(GetValue('감정가_경매_RowCount'), [{key: '사례번호', value: GetValue('감정가_경매_현재행')},

                {key: '사례번호명', value: GetValue('감정가_경매_사례번호명')},]);

            // BreakMacro
            // #ERROR
            // !
            //
            //     GetComponent('DBGrid_경매사례').AddRow({
            //         '년도': GetValue('년도'), '일련번호': GetValue('감정순번')
            //     });
            //
            //
            // GetComponent('DBGrid_경매사례').GetRowCount('[:00_NUMBER]');
            //
            //
            // SetValue('00_NUMBER', GetValue('00_NUMBER') - 1);
            //
            //
            // GetComponent('DBGrid_경매사례').SetCurSel(GetNumber('00_NUMBER'));
            //
            //
            // SetValue('01_TNUM', GetValue('00_NUMBER') + 1)
            //
            //
            // GetComponent('DBGrid_경매사례').SetRow(GetValue('00_NUMBER'), [{key: '사례번호', value: '01_TNUM'},]);
            //
            //
            // GetComponent('DBGrid_경매사례').SetCurSelCol('사례번호');
            //
            //
            // GetComponent('DBGrid_경매사례').SetEditFocus(GetNumber('00_NUMBER') - 1, '경매사건번호');

        })

        const 가격_Edit_선택1 = new Edit('가격_Edit_선택1', new JsonZoonData('가격_Edit_선택1', {}), {
            isShow: false, isEnable: true
        });
        const 가격_Edit_선택3 = new Edit('가격_Edit_선택3', new JsonZoonData('가격_Edit_선택3', {}), {
            isShow: false, isEnable: true
        });
        const 가격_Group_선택2 = new Group('가격_Group_선택2', new JsonZoonData('가격_Group_선택2', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            GetComponent('가격_Group_선택2').GetClickValue('가격_Edit_선택2');

            SetValue('가격_Group_선택1', "");


            SetValue('가격_Group_선택3', "");


            SetValue('가격_Edit_선택1', "");


            SetValue('가격_Edit_선택3', "");

        })

        const 가격_Check_선택2 = new Check('가격_Check_선택2', new JsonZoonData('가격_Check_선택2', { value: 'Y'}), {
            isShow: true, isEnable: true
        })
        const 가격_Group_선택1 = new Group('가격_Group_선택1', new JsonZoonData('가격_Group_선택1', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            GetComponent('가격_Group_선택1').GetClickValue('가격_Edit_선택1');

            SetValue('가격_Group_선택2', "");


            SetValue('가격_Group_선택3', "");


            SetValue('가격_Edit_선택2', "");


            SetValue('가격_Edit_선택3', "");

        })

        const 가격_Check_선택1 = new Check('가격_Check_선택1', new JsonZoonData('가격_Check_선택1', { value: 'Y'}), {
            isShow: true, isEnable: true
        })
        const 본건_MkEdit_전용면적단가1 = new MaskEdit('본건_MkEdit_전용면적단가1', new JsonZoonData('본건_MkEdit_전용면적단가1', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 본건_Edit_선택2 = new Edit('본건_Edit_선택2', new JsonZoonData('본건_Edit_선택2', {}), {
            isShow: false, isEnable: true
        })
        const 본건_Edit_선택1 = new Edit('본건_Edit_선택1', new JsonZoonData('본건_Edit_선택1', {}), {
            isShow: false, isEnable: true
        })
        const 본건_Edit_선택3 = new Edit('본건_Edit_선택3', new JsonZoonData('본건_Edit_선택3', {}), {
            isShow: false, isEnable: true
        })
        const 본건_Group_선택1 = new Group('본건_Group_선택1', new JsonZoonData('본건_Group_선택1', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            GetComponent('본건_Group_선택1').GetClickValue('본건_Edit_선택1');

            SetValue('본건_Group_선택2', "");
            SetValue('본건_Group_선택3', "");

            SetValue('본건_Edit_선택2', "");
            SetValue('본건_Edit_선택3', "");

        })

        const 본건_Check_선택1 = new Check('본건_Check_선택1', new JsonZoonData('본건_Check_선택1', { value: 'Y' }), {
            isShow: true, isEnable: true
        })
        const 본건_Group_선택2 = new Group('본건_Group_선택2', new JsonZoonData('본건_Group_선택2', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            GetComponent('본건_Group_선택2').GetClickValue('본건_Edit_선택2');

            SetValue('본건_Group_선택1', "");


            SetValue('본건_Group_선택3', "");


            SetValue('본건_Edit_선택1', "");


            SetValue('본건_Edit_선택3', "");

        })

        const 본건_Check_선택2 = new Check('본건_Check_선택2', new JsonZoonData('본건_Check_선택2', { value: 'Y' }), {
            isShow: true, isEnable: true
        })
        const 본건_Group_선택3 = new Group('본건_Group_선택3', new JsonZoonData('본건_Group_선택3', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            GetComponent('본건_Group_선택3').GetClickValue('본건_Edit_선택3');

            SetValue('본건_Group_선택1', "");


            SetValue('본건_Group_선택2', "");


            SetValue('본건_Edit_선택1', "");


            SetValue('본건_Edit_선택2', "");

        })

        const 본건_Check_선택3 = new Check('본건_Check_선택3', new JsonZoonData('본건_Check_선택3', { value: 'Y' }), {
            isShow: true, isEnable: true
        })
        const 가격_Combo_구조 = new Combo('가격_Combo_구조', new JsonZoonData('Q_00_구조', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function (e) {

            GetZoonData('Q_00_구조').FindIndex('IDX_TEMP', (row) => {

                if ((row['CD_CODE'] == GetValue('가격_Combo_구조'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_00_구조').GetRow(GetValue('IDX_TEMP'), [{key: '가격_MkEdit_내용년수', value: 'NUM_YEAR'},]);

        })

        const 감정가액산출Ⅱ = new Edit('감정가액산출Ⅱ', new JsonZoonData('감정가액산출Ⅱ', {}), {
            isShow: true, isEnable: true
        })
        const Table17 = new Edit('Table17', new JsonZoonData('Table17', {}), {
            isShow: true, isEnable: true
        })
        const Table15 = new Edit('Table15', new JsonZoonData('Table15', {}), {
            isShow: true, isEnable: true
        })
        const DBGrid_비준가격 = new DBGrid('DBGrid_비준가격', new JsonZoonData('Q_감정가_03_비준가격', {}), {
            isShow: true, isEnable: true
        }).on('OnDblClick', function () {

            GetComponent('DBGrid_비준가격').GetRow(-1, [{key: '비준_Combo_사례구분', value: '사례구분'},]);


            RunButton('Command_비준_사례번호생성');


            GetComponent('DBGrid_비준가격').GetRow(-1, [{key: '비준_Combo_사례구분', value: '사례구분'},

                {key: '비준_Combo_사례번호', value: '사례번호'},

                {key: '비준_MkEdit_소재지_비교', value: '소재지_비교치'},

                {key: '비준_MkEdit_전용면적단가', value: '전용면적단가'},

                {key: '비준_Combo_층별비교_본건', value: '층별비교_본건'},

                {key: '비준_MkEdit_층별_본건', value: '층별비교_본건_적용율'},

                {key: '비준_Combo_층별비교_사례', value: '층별비교_사례'},

                {key: '비준_MkEdit_층별_사례', value: '층별비교_사례_적용율'},

                {key: '비준_MkEdit_층별_비교', value: '층별비교_비교치'},

                {key: '비준_MkEdit_잔가율_본건', value: '잔가율비교_본건'},

                {key: '비준_MkEdit_잔가율_사례', value: '잔가율비교_사례'},

                {key: '비준_MkEdit_잔가율_비교', value: '잔가율비교_비교치'},

                {key: '비준_MkEdit_요인합계', value: '요인합계'},

                {key: '비준_MkEdit_산정단가', value: '산정단가'},

                {key: '비준_MkEdit_적용단가', value: '적용단가'},

                {key: '비준_MkEdit_전용면적', value: '전용면적'},

                {key: '비준_MkEdit_시점_본건_일자', value: '시점_본건_일자'},

                {key: '비준_MkEdit_시점_본건_적용율', value: '시점_본건_적용율'},

                {key: '비준_MkEdit_시점_사례_일자', value: '시점_사례_일자'},

                {key: '비준_MkEdit_시점_사례_적용율', value: '시점_사례_적용율'},

                {key: '비준_MkEdit_시점_비교', value: '시점_비교치'},

                {key: '감정가_비준_사례번호명', value: '사례번호명'},

                {key: '비준_MkEdit_환산금액', value: '환산금액'},]);


            SetValue('비준_MkEdit_소재지_본건', GetValue('Edit_입력표_소재지1') + " " + GetValue('Edit_입력표_지번'))
            SetValue('비준_MkEdit_잔가율_본건', GetValue('MkEdit_입력표_잔가율'))
            SetValue('비준_MkEdit_잔가율_비교', GetValue('비준_MkEdit_잔가율_비교') * 1)


            SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_시점_본건_일자'));


            RunButton('Command_경과일수');


            SetValue('비준_Label_시점_본건_경과일', GetValue('비준_Label_시점_본건_경과일'));


            SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_시점_사례_일자'));


            RunButton('Command_경과일수');


            SetValue('비준_Label_시점_사례_경과일', GetValue('10_경과일수_쿼리리턴값'));


            SetValue('10_경과일수_쿼리리턴값', "");


            if (GetValue('비준_Combo_사례구분') == 1) {
                MC_302_비준가격_Change_0_사례_가격();
            }


            if (GetValue('비준_Combo_사례구분') == 2) {
                MC_302_비준가격_Change_0_사례_경매();
            }

        })

        const DBGrid_비준가격집계표 = new DBGrid('DBGrid_비준가격집계표', new JsonZoonData('Q_감정가_03_비준가격_집계표', {}), {
            isShow: true, isEnable: true
        })
        const 비준_MkEdit_소재지_비교 = new MaskEdit('비준_MkEdit_소재지_비교', new JsonZoonData('비준_MkEdit_소재지_비교', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_302_비준가격_Change_1_비교_계산();

        })

        const 비준_Combo_층별비교_본건 = new Combo('비준_Combo_층별비교_본건', new JsonZoonData('Q_00_층별비교', {}), {
            isShow: true, isEnable: false, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_00_층별비교').FindIndex('00_NUMBER', (row) => {

                if ((row['CD_CODE'] == GetValue('비준_Combo_층별비교_본건'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_00_층별비교').GetRow(GetValue('00_NUMBER'), [{key: '비준_MkEdit_층별_본건', value: 'IDX'},]);


            MC_302_비준가격_Change_1_비교_계산();

        })

        const 비준_Combo_층별비교_사례 = new Combo('비준_Combo_층별비교_사례', new JsonZoonData('Q_00_층별비교', {}), {
            isShow: true, isEnable: false, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_00_층별비교').FindIndex('00_NUMBER', (row) => {

                if ((row['CD_CODE'] == GetValue('비준_Combo_층별비교_사례'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_00_층별비교').GetRow(GetValue('00_NUMBER'), [{key: '비준_MkEdit_층별_사례', value: 'IDX'},]);


            MC_302_비준가격_Change_1_비교_계산();

        })

        const Label43 = new Label('Label43', new JsonZoonData('Label43', {}), {
            isShow: true, isEnable: true
        })
        const Picture24 = new Picture('Picture24', new JsonZoonData('Picture24', {}), {
            isShow: true, isEnable: false
        })
        const 비준_MkEdit_산정단가 = new MaskEdit('비준_MkEdit_산정단가', new JsonZoonData('비준_MkEdit_산정단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 비준_MkEdit_적용단가 = new MaskEdit('비준_MkEdit_적용단가', new JsonZoonData('비준_MkEdit_적용단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label44 = new Label('Label44', new JsonZoonData('Label44', {}), {
            isShow: true, isEnable: true
        })
        const Picture30 = new Picture('Picture30', new JsonZoonData('Picture30', {}), {
            isShow: true, isEnable: false
        })
        const 비준_MkEdit_전용면적단가 = new MaskEdit('비준_MkEdit_전용면적단가', new JsonZoonData('비준_MkEdit_전용면적단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Command_비준가격_삭제 = new Picture('Command_비준가격_삭제', new JsonZoonData('Command_비준가격_삭제', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_비준가격').GetCurSel('감정가_비준_현재행');


            GetComponent('DBGrid_비준가격').DeleteRow(GetNumber('감정가_비준_현재행'));


            GetComponent('DBGrid_비준가격집계표').DeleteRow(GetNumber('감정가_비준_현재행'));


            MC_300_초기화__비준가격_항목();

        })

        const Command_비준가격_추가 = new Picture('Command_비준가격_추가', new JsonZoonData('Command_비준가격_추가', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            if (isEmpty(GetValue('비준_Combo_사례구분'))) {

                if (!MsgBox('사례구분을 선택하세요', '[확인]사례구분', true)) {
                    return false;
                }

            }


            if (isEmpty(GetValue('비준_Combo_사례번호'))) {

                if (!MsgBox('사례번호를 선택하세요', '[확인]사례번호', true)) {
                    return false;
                }

            }


            if (GetValue('비준_MkEdit_소재지_비교') == 0) {

                if (!MsgBox("[소재지 비교치]를 입력하세요.", '[확인]비준가격산정', true)) {
                    return false;
                }

            }


            if (GetValue('비준_MkEdit_소재지_비교') == 0) {

                if (!MsgBox("[시점수정 사례 적용율]을 입력하세요.", '[확인]비준가격산정', true)) {
                    return false;
                }

            }


            MC_303_비준가격_추가시_Grid();


            MC_300_초기화__비준가격_항목();

        })

        const 비준_Combo_사례번호 = new Combo('비준_Combo_사례번호', new JsonZoonData('비준_Combo_사례번호', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetComponent('비준_Combo_사례번호').GetWindowText('감정가_비준_사례번호명');


            MC_300_초기화__비준가격_항목_1();


            MC_302_비준가격_Change_0_본건();

        })

        const 비준_Combo_사례구분 = new Combo('비준_Combo_사례구분', new JsonZoonData('Q_DUAL_비준_사례구분', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            RunButton('Command_비준_사례번호생성');

        })

        const 비준_MkEdit_소재지_사례 = new Edit('비준_MkEdit_소재지_사례', new JsonZoonData('비준_MkEdit_소재지_사례', {}), {
            isShow: true, isEnable: false
        })
        const 비준_MkEdit_소재지_본건 = new Edit('비준_MkEdit_소재지_본건', new JsonZoonData('비준_MkEdit_소재지_본건', {}), {
            isShow: true, isEnable: false
        })
        const 비준_MkEdit_전용면적 = new MaskEdit('비준_MkEdit_전용면적', new JsonZoonData('비준_MkEdit_전용면적', {}), {
            isShow: false, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const Command_비준_사례번호생성 = new Command('Command_비준_사례번호생성', new JsonZoonData('Command_비준_사례번호생성', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            if (GetValue('비준_Combo_사례구분') == 1) {
                MC_301_Combo_사례번호_자료생성_0_가격사례();
            }


            if (GetValue('비준_Combo_사례구분') == 2) {
                MC_301_Combo_사례번호_자료생성_0_경매사례();
            }


            MC_301_Combo_사례번호_자료생성_1();

            GetComponent('비준_Combo_사례번호').InitialData();
            GetComponent('비준_Combo_사례번호').AddData(GetString('감정가_비준_사례번호_생성문자'), GetString('감정가_비준_사례번호_생성'), '');

            GetComponent('비준_Combo_사례구분').GetWindowText('감정가_비준_사례구분명');

        })

        const 비준_MkEdit_최저금액 = new MaskEdit('비준_MkEdit_최저금액', new JsonZoonData('비준_MkEdit_최저금액', {}), {
            isShow: false, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 비준_MkEdit_최고금액 = new MaskEdit('비준_MkEdit_최고금액', new JsonZoonData('비준_MkEdit_최고금액', {}), {
            isShow: false, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 비준_MkEdit_잔가율_본건 = new Edit('비준_MkEdit_잔가율_본건', new JsonZoonData('비준_MkEdit_잔가율_본건', {}), {
            isShow: true, isEnable: false
        });
        const 비준_MkEdit_잔가율_사례 = new Edit('비준_MkEdit_잔가율_사례', new JsonZoonData('비준_MkEdit_잔가율_사례', {}), {
            isShow: true, isEnable: false
        });
        const 비준_MkEdit_층별_본건 = new Edit('비준_MkEdit_층별_본건', new JsonZoonData('비준_MkEdit_층별_본건', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        });
        const 비준_MkEdit_층별_사례 = new Edit('비준_MkEdit_층별_사례', new JsonZoonData('비준_MkEdit_층별_사례', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        });
        const 비준_MkEdit_층별_비교 = new Edit('비준_MkEdit_층별_비교', new JsonZoonData('비준_MkEdit_층별_비교', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        });
        const 비준_MkEdit_잔가율_비교_입력가능한것으로대체함 = new Edit('비준_MkEdit_잔가율_비교_입력가능한것으로대체함', new JsonZoonData('비준_MkEdit_잔가율_비교_입력가능한것으로대체함', {}), {
            isShow: false, isEnable: false
        });
        const 비준_MkEdit_요인합계 = new Edit('비준_MkEdit_요인합계', new JsonZoonData('비준_MkEdit_요인합계', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        });
        const 비준_MkEdit_시점_본건_일자 = new MaskEdit('비준_MkEdit_시점_본건_일자', new JsonZoonData('비준_MkEdit_시점_본건_일자', {}), {
            isShow: true, isEnable: false, mask: 'yyyy-mm-dd', maskType: '날짜',
        }).on('OnLostFocus', function () {
            if (GetValue('비준_MkEdit_시점_본건_일자') == '00000000') {

                SetValue('비준_Label_시점_본건_경과일', "");

            }

            if (GetValue('비준_MkEdit_시점_본건_일자') != '00000000') {

                SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_시점_본건_일자'));


                RunButton('Command_경과일수');


                SetValue('비준_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));


                SetValue('10_경과일수_쿼리리턴값', "");

            }

        })

        const Label36 = new Label('Label36', new JsonZoonData('Label36', {}), {
            isShow: true, isEnable: true
        })
        const 비준_MkEdit_시점_본건_적용율 = new MaskEdit('비준_MkEdit_시점_본건_적용율', new JsonZoonData('비준_MkEdit_시점_본건_적용율', {}), {
            isShow: true, isEnable: false, mask: ';1;#,###1.000', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_302_비준가격_Change_1_비교_계산();

        })

        const 비준_MkEdit_시점_사례_일자 = new MaskEdit('비준_MkEdit_시점_사례_일자', new JsonZoonData('비준_MkEdit_시점_사례_일자', {}), {
            isShow: true, isEnable: true, mask: 'yyyy-mm-dd', maskType: '날짜',
        }).on('OnLostFocus', function () {
            if (GetValue('비준_MkEdit_시점_사례_일자') == '00000000') {

                SetValue('비준_Label_시점_사례_경과일', "");

            }

            if (GetValue('비준_MkEdit_시점_사례_일자') != '00000000') {

                SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_시점_사례_일자'));


                RunButton('Command_경과일수');


                SetValue('비준_Label_시점_사례_경과일', GetValue('10_경과일수_쿼리리턴값'));


                SetValue('10_경과일수_쿼리리턴값', "");

            }

        })

        const Label38 = new Label('Label38', new JsonZoonData('Label38', {}), {
            isShow: true, isEnable: true
        })
        const 비준_MkEdit_시점_사례_적용율 = new MaskEdit('비준_MkEdit_시점_사례_적용율', new JsonZoonData('비준_MkEdit_시점_사례_적용율', {}), {
            isShow: true, isEnable: true, mask: ';1;#,###1.000', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_302_비준가격_Change_1_비교_계산();

        })

        const 비준_MkEdit_시점_비교 = new Edit('비준_MkEdit_시점_비교', new JsonZoonData('비준_MkEdit_시점_비교', {}), {
            isShow: true, isEnable: false
        });
        const Command_경과일수 = new Command('Command_경과일수', new JsonZoonData('Command_경과일수', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            if (isEmpty(GetValue('10_경과년도_변수일자'))) {
                return false;
            }


            if (GetValue('10_경과년도_변수일자') == '00000000') {
                return false;
            }


            SetValue('10_경과일수_쿼리리턴값', "");


            SetValue('10_경과년도_감정일자', GetValue('MkEdit_감정일'));


            RunQuery('Q_DUAL_경과일수구하기', {
                '10_경과년도_감정일자': GetValue('10_경과년도_감정일자'), '10_경과년도_변수일자': GetValue('10_경과년도_변수일자')
            }, 'GET');


            GetZoonData('Q_DUAL_경과일수구하기').GetRow(0, [{key: '10_경과일수_쿼리리턴값', value: 'ELAP_YYMM'},]);


            SetValue('10_경과년도_변수일자', "");

        })

        const 비준_Label_시점_본건_경과일 = new Label('비준_Label_시점_본건_경과일', new JsonZoonData('비준_Label_시점_본건_경과일', {}), {
            isShow: true, isEnable: false
        })
        const 비준_Label_시점_사례_경과일 = new Label('비준_Label_시점_사례_경과일', new JsonZoonData('비준_Label_시점_사례_경과일', {}), {
            isShow: true, isEnable: false
        })
        const 비준_MkEdit_환산금액 = new MaskEdit('비준_MkEdit_환산금액', new JsonZoonData('비준_MkEdit_환산금액', {}), {
            isShow: false, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 비준_MkEdit_잔가율_비교 = new MaskEdit('비준_MkEdit_잔가율_비교', new JsonZoonData('비준_MkEdit_잔가율_비교', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_302_비준가격_Change_1_비교_계산();

        })

        const 감정가액산출Ⅲ = new Edit('감정가액산출Ⅲ', new JsonZoonData('감정가액산출Ⅲ', {}), {
            isShow: true, isEnable: true
        })
        const Table8 = new Edit('Table8', new JsonZoonData('Table8', {}), {
            isShow: true, isEnable: true
        })
        const Table14 = new Edit('Table14', new JsonZoonData('Table14', {}), {
            isShow: true, isEnable: true
        })
        const 평가_MkEdit_결정가격 = new MaskEdit('평가_MkEdit_결정가격', new JsonZoonData('평가_MkEdit_결정가격', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('평가_MkEdit_결정가격_단가', Round((GetValue('평가_MkEdit_결정가격') / GetValue('MkEdit_입력표_전유면적')) / 1000, 0) * 1000);


            MC_402_평가액_평가액산정();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const 평가_MkEdit_인테리어_면적_평 = new MaskEdit('평가_MkEdit_인테리어_면적_평', new JsonZoonData('평가_MkEdit_인테리어_면적_평', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('평가_MkEdit_인테리어_면적_M2', Round(GetValue('평가_MkEdit_인테리어_면적_평') / 0.3025, 2));


            MC_402_평가액_평가액산정();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const 평가_MkEdit_인테리어_단가 = new MaskEdit('평가_MkEdit_인테리어_단가', new JsonZoonData('평가_MkEdit_인테리어_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_402_평가액_평가액산정();

        })

        const Label28 = new Label('Label28', new JsonZoonData('Label28', {}), {
            isShow: true, isEnable: true
        })
        const 평가_MkEdit_본건_최저 = new MaskEdit('평가_MkEdit_본건_최저', new JsonZoonData('평가_MkEdit_본건_최저', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_본건_비율 = new MaskEdit('평가_MkEdit_본건_비율', new JsonZoonData('평가_MkEdit_본건_비율', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_가격_비율 = new MaskEdit('평가_MkEdit_가격_비율', new JsonZoonData('평가_MkEdit_가격_비율', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_경매_비율 = new MaskEdit('평가_MkEdit_경매_비율', new JsonZoonData('평가_MkEdit_경매_비율', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_경매_최고 = new MaskEdit('평가_MkEdit_경매_최고', new JsonZoonData('평가_MkEdit_경매_최고', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_경매_최저 = new MaskEdit('평가_MkEdit_경매_최저', new JsonZoonData('평가_MkEdit_경매_최저', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_가격_최고 = new MaskEdit('평가_MkEdit_가격_최고', new JsonZoonData('평가_MkEdit_가격_최고', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_가격_최저 = new MaskEdit('평가_MkEdit_가격_최저', new JsonZoonData('평가_MkEdit_가격_최저', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_본건_최고 = new MaskEdit('평가_MkEdit_본건_최고', new JsonZoonData('평가_MkEdit_본건_최고', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_인테리어_면적_M2 = new MaskEdit('평가_MkEdit_인테리어_면적_M2', new JsonZoonData('평가_MkEdit_인테리어_면적_M2', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_인테리어_금액 = new MaskEdit('평가_MkEdit_인테리어_금액', new JsonZoonData('평가_MkEdit_인테리어_금액', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_평가가격 = new MaskEdit('평가_MkEdit_평가가격', new JsonZoonData('평가_MkEdit_평가가격', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if (GetValue('Combo_집합건물종류') == "101") {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            } else {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            }

        })

        const Picture23 = new Picture('Picture23', new JsonZoonData('Picture23', {}), {
            isShow: true, isEnable: false
        })
        const Label15 = new Label('Label15', new JsonZoonData('Label15', {}), {
            isShow: true, isEnable: true
        })
        const 평가_MkEdit_담보_등기전용면적 = new MaskEdit('평가_MkEdit_담보_등기전용면적', new JsonZoonData('평가_MkEdit_담보_등기전용면적', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_담보_분자 = new MaskEdit('평가_MkEdit_담보_분자', new JsonZoonData('평가_MkEdit_담보_분자', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_담보_분모 = new MaskEdit('평가_MkEdit_담보_분모', new JsonZoonData('평가_MkEdit_담보_분모', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_담보_비율 = new MaskEdit('평가_MkEdit_담보_비율', new JsonZoonData('평가_MkEdit_담보_비율', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_담보_제공면적 = new MaskEdit('평가_MkEdit_담보_제공면적', new JsonZoonData('평가_MkEdit_담보_제공면적', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const 평가_MkEdit_담보_평가가격 = new MaskEdit('평가_MkEdit_담보_평가가격', new JsonZoonData('평가_MkEdit_담보_평가가격', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if (GetValue('Combo_집합건물종류') == "101") {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            } else {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            }

        })

        const 평가_MkEdit_담보_최종평가가격 = new MaskEdit('평가_MkEdit_담보_최종평가가격', new JsonZoonData('평가_MkEdit_담보_최종평가가격', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if (GetValue('Combo_집합건물종류') == "101") {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            } else {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            }

        })

        const 평가_MkEdit_결정가격_단가 = new MaskEdit('평가_MkEdit_결정가격_단가', new JsonZoonData('평가_MkEdit_결정가격_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_경매_최고_단가 = new MaskEdit('평가_MkEdit_경매_최고_단가', new JsonZoonData('평가_MkEdit_경매_최고_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_경매_최저_단가 = new MaskEdit('평가_MkEdit_경매_최저_단가', new JsonZoonData('평가_MkEdit_경매_최저_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_가격_최고_단가 = new MaskEdit('평가_MkEdit_가격_최고_단가', new JsonZoonData('평가_MkEdit_가격_최고_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_가격_최저_단가 = new MaskEdit('평가_MkEdit_가격_최저_단가', new JsonZoonData('평가_MkEdit_가격_최저_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_본건_최고_단가 = new MaskEdit('평가_MkEdit_본건_최고_단가', new JsonZoonData('평가_MkEdit_본건_최고_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 평가_MkEdit_본건_최저_단가 = new MaskEdit('평가_MkEdit_본건_최저_단가', new JsonZoonData('평가_MkEdit_본건_최저_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Picture28 = new Picture('Picture28', new JsonZoonData('Picture28', {}), {
            isShow: true, isEnable: false
        })
        const 평가_MkEdit_평가가격_단가 = new MaskEdit('평가_MkEdit_평가가격_단가', new JsonZoonData('평가_MkEdit_평가가격_단가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if (GetValue('Combo_집합건물종류') == "101") {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_면적합계_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            } else {
                SetValue('MkEdit_시가_최저_단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적')) / 1000), 0)
                SetValue('MkEdit_시가_최저_단가', GetValue('MkEdit_시가_최저_단가') * 1000)
                SetValue('MkEdit_시가_최저_평당단가', Round((GetValue('MkEdit_시가_최저_총액') / GetValue('MkEdit_전유면적_평')) / 1000), 0)
                SetValue('MkEdit_시가_최저_평당단가', GetValue('MkEdit_시가_최저_평당단가') * 1000)
            }

        })

        const 평가_Combo_인테리어단가 = new Combo('평가_Combo_인테리어단가', new JsonZoonData('Q_00_인테리어비용', {}), {
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_00_인테리어비용').FindIndex('00_NUMBER', (row) => {

                if ((row['CD_CODE'] == GetValue('평가_Combo_인테리어단가'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_00_인테리어비용').GetRow(GetValue('00_NUMBER'), [{key: '평가_MkEdit_인테리어_단가', value: 'AMT'},

                {key: '01_TNUM', value: 'RATE'},]);


            SetValue('평가_MkEdit_인테리어_면적_M2', Round(GetValue('MkEdit_입력표_면적합계') * (GetValue('01_TNUM') / 100), 2))
            SetValue('평가_MkEdit_인테리어_면적_평', Round(GetValue('MkEdit_입력표_면적합계_평') * (GetValue('01_TNUM') / 100), 2))


            MC_402_평가액_평가액산정();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const 낙찰가율보정표 = new Edit('낙찰가율보정표', new JsonZoonData('낙찰가율보정표', {}), {
            isShow: true, isEnable: true
        })
        const Table9 = new Edit('Table9', new JsonZoonData('Table9', {}), {
            isShow: true, isEnable: true
        })
        const Table10 = new Edit('Table10', new JsonZoonData('Table10', {}), {
            isShow: true, isEnable: true
        })
        const Table11 = new Edit('Table11', new JsonZoonData('Table11', {}), {
            isShow: true, isEnable: true
        })
        const 보정표_MkEdit_당해지역낙찰가율 = new MaskEdit('보정표_MkEdit_당해지역낙찰가율', new JsonZoonData('보정표_MkEdit_당해지역낙찰가율', {}), {
            isShow: true, isEnable: true, mask: ';3;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_999_배당표_주택임대차보증금_계산_전체();


            RunButton('Command_적용할낙찰가율');

        })

        const 보정표_MkEdit_유사부동산낙찰가율 = new MaskEdit('보정표_MkEdit_유사부동산낙찰가율', new JsonZoonData('보정표_MkEdit_유사부동산낙찰가율', {}), {
            isShow: true, isEnable: true, mask: ';3;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_999_배당표_주택임대차보증금_계산_전체();


            RunButton('Command_적용할낙찰가율');

        })

        const 보정표_Combo_접한도로의폭 = new Combo('보정표_Combo_접한도로의폭', new JsonZoonData('Q_00_접한도로의폭', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            MC_501_Combo_OnChange_접한도로의폭();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const 보정표_Combo_전유부분의면적 = new Combo('보정표_Combo_전유부분의면적', new JsonZoonData('Q_00_전유부분의면적', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            MC_501_Combo_OnChange_전유부분면적();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const 보정표_Combo_총층수중전유부분의위치 = new Combo('보정표_Combo_총층수중전유부분의위치', new JsonZoonData('Q_00_층별비교', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            MC_501_Combo_OnChange_층별비교();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const 보정표_Combo_건축물의경과년도 = new Combo('보정표_Combo_건축물의경과년도', new JsonZoonData('Q_00_건축물의경과년도', {

        }), {
            isShow: true, isEnable: true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : ''
            }
        }).on('OnChange', function () {

            MC_501_Combo_OnChange_건축물의경과년도();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const 보정표_Combo_점유자의권리형태 = new Combo('보정표_Combo_점유자의권리형태', new JsonZoonData('Q_00_점유자의형태', {

        }), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_00_점유자의형태').FindIndex('IDX_보정표_점유자의형태', (row) => {

                if ((row['CD_CODE'] == GetValue('보정표_Combo_점유자의권리형태'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_00_점유자의형태').GetRow(GetValue('IDX_보정표_점유자의형태'), [{key: '보정표_MkEdit_점유자의권리형태_적용율', value: 'IDX'},]);


            RunButton('Command_적용할낙찰가율');


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const Label29 = new Label('Label29', new JsonZoonData('Label29', {}), {
            isShow: true, isEnable: true
        })
        const Label30 = new Label('Label30', new JsonZoonData('Label30', {}), {
            isShow: true, isEnable: true
        })
        const 보정표_MkEdit_기준낙찰가율 = new MaskEdit('보정표_MkEdit_기준낙찰가율', new JsonZoonData('보정표_MkEdit_기준낙찰가율', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const Label31 = new Label('Label31', new JsonZoonData('Label31', {}), {
            isShow: true, isEnable: true
        })
        const 보정표_MkEdit_적용할낙찰가율 = new MaskEdit('보정표_MkEdit_적용할낙찰가율', new JsonZoonData('보정표_MkEdit_적용할낙찰가율', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1.00', maskType: '숫자',
        })
        const Label32 = new Label('Label32', new JsonZoonData('Label32', {}), {
            isShow: true, isEnable: true
        })
        const 보정표_MkEdit_전유부분의면적_적용율 = new MaskEdit('보정표_MkEdit_전유부분의면적_적용율', new JsonZoonData('보정표_MkEdit_전유부분의면적_적용율', {}), {
            isShow: true, isEnable: false, mask: '-;1;#,###1.00', maskType: '숫자',
        })
        const 보정표_MkEdit_접한도로의폭_적용율 = new MaskEdit('보정표_MkEdit_접한도로의폭_적용율', new JsonZoonData('보정표_MkEdit_접한도로의폭_적용율', {}), {
            isShow: true, isEnable: false, mask: '-;1;#,###1.00', maskType: '숫자',
        })
        const 보정표_MkEdit_총층수중전유부분_적용율 = new MaskEdit('보정표_MkEdit_총층수중전유부분_적용율', new JsonZoonData('보정표_MkEdit_총층수중전유부분_적용율', {}), {
            isShow: true, isEnable: false, mask: '-;1;#,###1.00', maskType: '숫자',
        })
        const 보정표_MkEdit_건축물의경과년도_적용율 = new MaskEdit('보정표_MkEdit_건축물의경과년도_적용율', new JsonZoonData('보정표_MkEdit_건축물의경과년도_적용율', {}), {
            isShow: true, isEnable: false, mask: '-;1;#,###1.00', maskType: '숫자',
        })
        const 보정표_MkEdit_점유자의권리형태_적용율 = new MaskEdit('보정표_MkEdit_점유자의권리형태_적용율', new JsonZoonData('보정표_MkEdit_점유자의권리형태_적용율', {}), {
            isShow: true, isEnable: false, mask: '-;1;#,###1.00', maskType: '숫자',
        })
        const Table12 = new Edit('Table12', new JsonZoonData('Table12', {}), {
            isShow: true, isEnable: true
        })
        const 보정표_MkEdit_평가가격 = new MaskEdit('보정표_MkEdit_평가가격', new JsonZoonData('보정표_MkEdit_평가가격', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 보정표_MkEdit_최저입찰가 = new MaskEdit('보정표_MkEdit_최저입찰가', new JsonZoonData('보정표_MkEdit_최저입찰가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 보정표_MkEdit_예상낙찰가 = new MaskEdit('보정표_MkEdit_예상낙찰가', new JsonZoonData('보정표_MkEdit_예상낙찰가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const 보정표_MkEdit_건축물의경과년도 = new MaskEdit('보정표_MkEdit_건축물의경과년도', new JsonZoonData('보정표_MkEdit_건축물의경과년도', {}), {
            isShow: true, isEnable: false, mask: ';3;#,###1', maskType: '숫자',
        })
        const Command_적용할낙찰가율 = new Command('Command_적용할낙찰가율', new JsonZoonData('Command_적용할낙찰가율', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            SetValue('보정표_MkEdit_평가가격', GetValue('평가_MkEdit_담보_평가가격'));

            SetValue('보정표_MkEdit_최저입찰가', GetValue('평가_MkEdit_담보_최종평가가격'));


            SetValue('보정표_MkEdit_기준낙찰가율', (GetNumber('보정표_MkEdit_당해지역낙찰가율') + GetNumber('보정표_MkEdit_유사부동산낙찰가율')) / 2)

            SetValue('보정표_MkEdit_적용할낙찰가율', GetNumber('보정표_MkEdit_기준낙찰가율')
                * GetNumber('보정표_MkEdit_접한도로의폭_적용율')
                * GetNumber('보정표_MkEdit_전유부분의면적_적용율')
                * GetValue('보정표_MkEdit_총층수중전유부분_적용율')
                * GetNumber('보정표_MkEdit_건축물의경과년도_적용율')
                * GetNumber('보정표_MkEdit_점유자의권리형태_적용율'))

            SetValue('보정표_MkEdit_예상낙찰가', Round(GetNumber('보정표_MkEdit_최저입찰가') * (GetNumber('보정표_MkEdit_적용할낙찰가율') / 100), 0))


            RunButton('Command_응찰_02_이벤트');

        })

        const 보정표_Edit_전유부분위치 = new Edit('보정표_Edit_전유부분위치', new JsonZoonData('보정표_Edit_전유부분위치', {}), {
            isShow: true, isEnable: false
        })
        const 보정표_MkEdit_전유부분의면적 = new MaskEdit('보정표_MkEdit_전유부분의면적', new JsonZoonData('보정표_MkEdit_전유부분의면적', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const 보정표_MkEdit_전유부분위치_등급 = new MaskEdit('보정표_MkEdit_전유부분위치_등급', new JsonZoonData('보정표_MkEdit_전유부분위치_등급', {}), {
            isShow: false, isEnable: false, mask: 'xxxxxxxxxx', maskType: '문자',
        })
        const 입력표 = new Edit('입력표', new JsonZoonData('입력표', {}), {
            isShow: true, isEnable: true
        })
        const Table1 = new Edit('Table1', new JsonZoonData('Table1', {}), {
            isShow: true, isEnable: true
        })
        const Table24 = new Edit('Table24', new JsonZoonData('Table24', {}), {
            isShow: true, isEnable: true
        })
        const Table25 = new Edit('Table25', new JsonZoonData('Table25', {}), {
            isShow: true, isEnable: true
        })
        const Table2 = new Edit('Table2', new JsonZoonData('Table2', {}), {
            isShow: true, isEnable: true
        })
        const Table4 = new Edit('Table4', new JsonZoonData('Table4', {}), {
            isShow: true, isEnable: true
        })
        const Table13 = new Edit('Table13', new JsonZoonData('Table13', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_업소명 = new Edit('Edit_입력표_업소명', new JsonZoonData('Edit_입력표_업소명', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_업소대표자 = new Edit('Edit_입력표_업소대표자', new JsonZoonData('Edit_입력표_업소대표자', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_채무자 = new Edit('Edit_입력표_채무자', new JsonZoonData('Edit_입력표_채무자', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_담보제공자 = new Edit('Edit_입력표_담보제공자', new JsonZoonData('Edit_입력표_담보제공자', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_채무자와담보제공자의관계 = new Edit('Edit_입력표_채무자와담보제공자의관계', new JsonZoonData('Edit_입력표_채무자와담보제공자의관계', {}), {
            isShow: true, isEnable: true
        })
        SetValue('Edit_입력표_채무자와담보제공자의관계', '채무자 본인');
        const Edit_입력표_지번 = new Edit('Edit_입력표_지번', new JsonZoonData('Edit_입력표_지번', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_집합건물의명칭 = new Edit('Edit_입력표_집합건물의명칭', new JsonZoonData('Edit_입력표_집합건물의명칭', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_동수 = new Edit('Edit_입력표_동수', new JsonZoonData('Edit_입력표_동수', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_호수 = new Edit('Edit_입력표_호수', new JsonZoonData('Edit_입력표_호수', {}), {
            isShow: true, isEnable: true
        })
        const MkEdit_입력표_토지권의목적인 = new MaskEdit('MkEdit_입력표_토지권의목적인', new JsonZoonData('MkEdit_입력표_토지권의목적인', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const Edit_입력표_대지권소유권 = new MaskEdit('Edit_입력표_대지권소유권', new JsonZoonData('Edit_입력표_대지권소유권', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.000', maskType: '숫자',
        }).on('OnLostFocus', function () {


            if (GetValue('Edit_입력표_대지권소유권') > 0) {
                SetValue('Edit_입력표_대지권소유권여부', "Y")
            } else {
                SetValue('Edit_입력표_대지권소유권여부', "N")
            }

        })

        const Edit_입력표_지상 = new Edit('Edit_입력표_지상', new JsonZoonData('Edit_입력표_지상', {}), {
            isShow: true, isEnable: true
        }).on('OnLostFocus', function () {

            MC_102_전유부분의위치찾기();

        })

        const Edit_입력표_지하 = new Edit('Edit_입력표_지하', new JsonZoonData('Edit_입력표_지하', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_해당층 = new Edit('Edit_입력표_해당층', new JsonZoonData('Edit_입력표_해당층', {}), {
            isShow: true, isEnable: true
        }).on('OnLostFocus', function () {

            MC_102_전유부분의위치찾기();

        })

        const MkEdit_입력표_건축일자 = new MaskEdit('MkEdit_입력표_건축일자', new JsonZoonData('MkEdit_입력표_건축일자', {}), {
            isShow: true, isEnable: true, mask: 'yyyy-mm-dd', maskType: '날짜',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_건축년도_경과', (Days(StrToDate(GetValue('MkEdit_감정일'))) - Days(StrToDate(GetValue('MkEdit_입력표_건축일자')))) / 365)
            SetValue('본건_MkEdit_건축년도', Left(GetValue('MkEdit_입력표_건축일자'), 4))
            SetValue('본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'))
            SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'))


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const MkEdit_입력표_전유면적 = new MaskEdit('MkEdit_입력표_전유면적', new JsonZoonData('MkEdit_입력표_전유면적', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_전유면적_평', GetNumber('MkEdit_입력표_전유면적') * 0.3025)
            SetValue('MkEdit_입력표_면적합계', GetNumber('MkEdit_입력표_전유면적') + GetNumber('MkEdit_입력표_공유면적'))
            SetValue('MkEdit_입력표_면적합계_평', GetNumber('MkEdit_입력표_전유면적_평') + GetNumber('MkEdit_입력표_공유면적_평'))

            SetValue('MkEdit_입력표_담보제공_전용면적', GetValue('MkEdit_입력표_전유면적'))
            SetValue('MkEdit_입력표_담보제공_분모', GetValue('MkEdit_입력표_전유면적'))
            SetValue('MkEdit_입력표_담보제공_분자', GetValue('MkEdit_입력표_전유면적'))

            SetValue('보정표_MkEdit_전유부분의면적', GetValue('MkEdit_입력표_전유면적'))


            MC_102_담보제공비율부분_계산및셋팅();


            MC_101_감정에관한사항_계산_실거래가격();


            MC_101_감정에관한사항_계산_기준시가();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const MkEdit_입력표_공유면적 = new MaskEdit('MkEdit_입력표_공유면적', new JsonZoonData('MkEdit_입력표_공유면적', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_입력표_공유면적_평', GetNumber('MkEdit_입력표_공유면적') * 0.3025)
            SetValue('MkEdit_입력표_면적합계', GetNumber('MkEdit_입력표_전유면적') + GetNumber('MkEdit_입력표_공유면적'))
            SetValue('MkEdit_입력표_면적합계_평', GetNumber('MkEdit_입력표_전유면적_평') + GetNumber('MkEdit_입력표_공유면적_평'))

        })

        const Edit_입력표_국토의계획 = new Edit('Edit_입력표_국토의계획', new JsonZoonData('Edit_입력표_국토의계획', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_다른법률등 = new Edit('Edit_입력표_다른법률등', new JsonZoonData('Edit_입력표_다른법률등', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_시행령부칙 = new Edit('Edit_입력표_시행령부칙', new JsonZoonData('Edit_입력표_시행령부칙', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_토지이용규제 = new Edit('Edit_입력표_토지이용규제', new JsonZoonData('Edit_입력표_토지이용규제', {}), {
            isShow: true, isEnable: true
        })
        const MkEdit_입력표_실거래가_총액 = new MaskEdit('MkEdit_입력표_실거래가_총액', new JsonZoonData('MkEdit_입력표_실거래가_총액', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_실거래가격();

        })

        const MkEdit_입력표_기준시가_총액 = new MaskEdit('MkEdit_입력표_기준시가_총액', new JsonZoonData('MkEdit_입력표_기준시가_총액', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_기준시가();


            RunButton('Command_응찰_02_이벤트');

        })

        const MkEdit_입력표_담보제공_분자 = new MaskEdit('MkEdit_입력표_담보제공_분자', new JsonZoonData('MkEdit_입력표_담보제공_분자', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_102_담보제공비율부분_계산및셋팅();


            MC_사유_상태변경();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const MkEdit_입력표_담보제공_분모 = new MaskEdit('MkEdit_입력표_담보제공_분모', new JsonZoonData('MkEdit_입력표_담보제공_분모', {}), {
            isShow: true, isEnable: true, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_102_담보제공비율부분_계산및셋팅();


            MC_사유_상태변경();


            MC_999_배당표_주택임대차보증금_계산_전체();

        })

        const MkEdit_입력표_담보제공_사유 = new Edit('MkEdit_입력표_담보제공_사유', new JsonZoonData('MkEdit_입력표_담보제공_사유', {}), {
            isShow: true, isEnable: false
        }).on('OnGotFocus', function () {

            MC_사유_상태변경();

        })

        const 입력표_업소구분 = new JsonZoonData('입력표_업소구분', [
            {'CD_CODE': '1', 'CD_DESC':'업소'},
            {'CD_CODE': '0', 'CD_DESC':'자체'}
        ]);
        const Combo_입력표_업소구분 = new Combo('Combo_입력표_업소구분', 입력표_업소구분, {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {
            if (GetValue('Combo_입력표_업소구분') == "0") {

                GetComponent('Edit_입력표_업소명').SetReadOnly(1.0);


                SetValue('Edit_입력표_업소명', '자체');


                GetComponent('Edit_입력표_업소대표자').SetReadOnly(1.0);


                SetValue('Edit_입력표_업소대표자', GetValue('Edit_입력표_대표자'));


                SetFocus('Edit_입력표_채무자');

            }

            if (GetValue('Combo_입력표_업소구분') == "1") {

                GetComponent('Edit_입력표_업소명').SetReadOnly(0.0);


                GetComponent('Edit_입력표_업소대표자').SetReadOnly(0.0);


                SetValue('Edit_입력표_업소명', "");


                SetValue('Edit_입력표_업소대표자', "");


                SetFocus('Edit_입력표_업소명');

            }

            if (isEmpty(GetValue('Combo_입력표_업소구분')))
            {

                GetComponent('Edit_입력표_업소명').SetReadOnly(1.0);


                GetComponent('Combo_입력표_업소구분').SetCurSel(1.0);


                SetValue('Edit_입력표_업소명', '자체');


                GetComponent('Edit_입력표_업소대표자').SetReadOnly(1.0);


                SetValue('Edit_입력표_업소대표자', GetValue('Edit_입력표_대표자'));


                SetFocus('Edit_입력표_채무자');

            }

        })

        const Picture3 = new Picture('Picture3', new JsonZoonData('Picture3', {}), {
            isShow: true, isEnable: false
        })
        const Picture1 = new Picture('Picture1', new JsonZoonData('Picture1', {}), {
            isShow: true, isEnable: false
        })
        const Picture2 = new Picture('Picture2', new JsonZoonData('Picture2', {}), {
            isShow: true, isEnable: false
        })
        const MkEdit_입력표_기준시가_단가_M2 = new MaskEdit('MkEdit_입력표_기준시가_단가_M2', new JsonZoonData('MkEdit_입력표_기준시가_단가_M2', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        }).on('OnLostFocus', function () {

            MC_101_감정에관한사항_계산_기준시가();

        })

        const MkEdit_입력표_담보제공_전용면적 = new MaskEdit('MkEdit_입력표_담보제공_전용면적', new JsonZoonData('MkEdit_입력표_담보제공_전용면적', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_비율', GetValue('MkEdit_분자') / GetValue('MkEdit_분모') * 100)
            SetValue('MkEdit_감정가_등기부상전용면적', GetValue('MkEdit_등기부상전용면적'))


            SetValue('MkEdit_담보제공면적', GetValue('MkEdit_등기부상전용면적') * (GetValue('MkEdit_비율') / 100))
            SetValue('MkEdit_감정가_비율', GetValue('MkEdit_비율'))
            SetValue('MkEdit_감정가_담보제공면적', GetValue('MkEdit_담보제공면적'))

        })

        const Combo_입력표_구조 = new Combo('Combo_입력표_구조', new JsonZoonData('Q_00_구조', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_00_구조').FindIndex('IDX_입력표_내용연수', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_입력표_구조'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_00_구조').GetRow(GetValue('IDX_입력표_내용연수'), [
                {key: 'MkEdit_입력표_내용연수', value: 'NUM_YEAR'},
                {key: '본건_MkEdit_내용연수', value: 'NUM_YEAR'},]
            );


            SetValue('02_잔가율구분', '입력표');


            MC_003_계산_잔가율();

        })

        const Combo_입력표_지붕 = new Combo('Combo_입력표_지붕', new JsonZoonData('Q_00_지붕', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        })
        const Label1 = new Label('Label1', new JsonZoonData('Label1', {}), {
            isShow: true, isEnable: true
        })
        const Label2 = new Label('Label2', new JsonZoonData('Label2', {}), {
            isShow: true, isEnable: true
        })
        const Label3 = new Label('Label3', new JsonZoonData('Label3', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_대표자 = new Edit('Edit_입력표_대표자', new JsonZoonData('Edit_입력표_대표자', {}), {
            isShow: true, isEnable: false
        })
        const Edit_입력표_거래처 = new Edit('Edit_입력표_거래처', new JsonZoonData('Edit_입력표_거래처', {}), {
            isShow: true, isEnable: false
        })
        const Picture4 = new Picture('Picture4', new JsonZoonData('Picture4', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('SubForm_거래처조회').ShowSubForm(() => {
            });

        })

        const Label4 = new Label('Label4', new JsonZoonData('Label4', {}), {
            isShow: true, isEnable: true
        })
        const Label5 = new Label('Label5', new JsonZoonData('Label5', {}), {
            isShow: true, isEnable: true
        })
        const Label6 = new Label('Label6', new JsonZoonData('Label6', {}), {
            isShow: true, isEnable: true
        })
        const Label7 = new Label('Label7', new JsonZoonData('Label7', {}), {
            isShow: true, isEnable: true
        })
        const Label8 = new Label('Label8', new JsonZoonData('Label8', {}), {
            isShow: true, isEnable: true
        })
        const Label9 = new Label('Label9', new JsonZoonData('Label9', {}), {
            isShow: true, isEnable: true
        })
        const Label12 = new Label('Label12', new JsonZoonData('Label12', {}), {
            isShow: true, isEnable: true
        })
        const Label13 = new Label('Label13', new JsonZoonData('Label13', {}), {
            isShow: true, isEnable: true
        })
        const Label16 = new Label('Label16', new JsonZoonData('Label16', {}), {
            isShow: true, isEnable: true
        })
        const Label17 = new Label('Label17', new JsonZoonData('Label17', {}), {
            isShow: true, isEnable: true
        })
        const Label20 = new Label('Label20', new JsonZoonData('Label20', {}), {
            isShow: true, isEnable: true
        })
        const Label21 = new Label('Label21', new JsonZoonData('Label21', {}), {
            isShow: true, isEnable: true
        })
        const MkEdit_입력표_면적합계 = new MaskEdit('MkEdit_입력표_면적합계', new JsonZoonData('MkEdit_입력표_면적합계', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const MkEdit_입력표_전유면적_평 = new MaskEdit('MkEdit_입력표_전유면적_평', new JsonZoonData('MkEdit_입력표_전유면적_평', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const MkEdit_입력표_공유면적_평 = new MaskEdit('MkEdit_입력표_공유면적_평', new JsonZoonData('MkEdit_입력표_공유면적_평', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const MkEdit_입력표_면적합계_평 = new MaskEdit('MkEdit_입력표_면적합계_평', new JsonZoonData('MkEdit_입력표_면적합계_평', {}), {
            isShow: true, isEnable: false, mask: ';9;#,###1.00', maskType: '숫자',
        })
        const MkEdit_입력표_실거래가_단가_M2 = new MaskEdit('MkEdit_입력표_실거래가_단가_M2', new JsonZoonData('MkEdit_입력표_실거래가_단가_M2', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const MkEdit_입력표_실거래가_단가_평 = new MaskEdit('MkEdit_입력표_실거래가_단가_평', new JsonZoonData('MkEdit_입력표_실거래가_단가_평', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const MkEdit_입력표_기준시가_단가_평 = new MaskEdit('MkEdit_입력표_기준시가_단가_평', new JsonZoonData('MkEdit_입력표_기준시가_단가_평', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const MkEdit_입력표_건축년도_경과 = new MaskEdit('MkEdit_입력표_건축년도_경과', new JsonZoonData('MkEdit_입력표_건축년도_경과', {}), {
            isShow: true, isEnable: false, mask: ';;#,###1', maskType: '숫자',
        })
        const Label24 = new Label('Label24', new JsonZoonData('Label24', {}), {
            isShow: true, isEnable: true
        })
        const Picture13 = new Picture('Picture13', new JsonZoonData('Picture13', {}), {
            isShow: true, isEnable: false
        })
        const Label10 = new Label('Label10', new JsonZoonData('Label10', {}), {
            isShow: true, isEnable: true
        })
        const MkEdit_입력표_담보제공_비율 = new MaskEdit('MkEdit_입력표_담보제공_비율', new JsonZoonData('MkEdit_입력표_담보제공_비율', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_감정가_비율', GetValue('MkEdit_비율'))
            SetValue('MkEdit_평가가격', GetNumber('MkEdit_결정가격') + GetNumber('MkEdit_보수금액'))
            SetValue('MkEdit_감정가_평가가격', GetNumber('MkEdit_결정가격') + GetNumber('MkEdit_보수금액'))
            SetValue('MkEdit_감정가_최종평가가격', GetNumber('MkEdit_감정가_평가가격') * GetNumber('MkEdit_감정가_비율'))
            SetValue('MkEdit_보정표_평가가격', GetValue('MkEdit_감정가_평가가격'))
            SetValue('MkEdit_보정표_최저입찰가', GetValue('MkEdit_감정가_최종평가가격'))
            SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100)

        })

        const MkEdit_입력표_담보제공_제공면적 = new MaskEdit('MkEdit_입력표_담보제공_제공면적', new JsonZoonData('MkEdit_입력표_담보제공_제공면적', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        }).on('OnLostFocus', function () {

            SetValue('MkEdit_감정가_담보제공면적', GetValue('MkEdit_담보제공면적'))

        })

        const Label18 = new Label('Label18', new JsonZoonData('Label18', {}), {
            isShow: true, isEnable: true
        })
        const Label19 = new Label('Label19', new JsonZoonData('Label19', {}), {
            isShow: true, isEnable: true
        })
        const MkEdit_입력표_내용연수 = new MaskEdit('MkEdit_입력표_내용연수', new JsonZoonData('MkEdit_입력표_내용연수', {}), {
            isShow: true, isEnable: false, mask: ';;#,###1', maskType: '숫자',
        })
        const Label37 = new Label('Label37', new JsonZoonData('Label37', {}), {
            isShow: true, isEnable: true
        })
        const Edit_입력표_거래처코드 = new Edit('Edit_입력표_거래처코드', new JsonZoonData('Edit_입력표_거래처코드', {}), {
            isShow: true, isEnable: false
        })
        const Edit_입력표_대지권소유권여부 = new MaskEdit('Edit_입력표_대지권소유권여부', new JsonZoonData('Edit_입력표_대지권소유권여부', {}), {
            isShow: false, isEnable: true, mask: 'a', maskType: '문자',
        })
        const Edit_입력표_이담보물에대한재감정 = new Edit('Edit_입력표_이담보물에대한재감정', new JsonZoonData('Edit_입력표_이담보물에대한재감정', {}), {
            isShow: true, isEnable: false
        })
        const MkEdit_입력표_잔가율 = new MaskEdit('MkEdit_입력표_잔가율', new JsonZoonData('MkEdit_입력표_잔가율', {}), {
            isShow: true, isEnable: false, mask: ';;#,###1.00', maskType: '숫자',
        })
        const Combo_입력표_가임대보증금적용지역 = new Combo('Combo_입력표_가임대보증금적용지역', new JsonZoonData('Q_00_가임대보증금적용지역', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            SetValue('Combo_배당표_가임대보증금적용범위', GetValue('Combo_입력표_가임대보증금적용지역'))


            GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_가임대보증금적용범위'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetValue('배당표_주택임대차보증금_RowPosition'), [{
                key: 'Edit_배당표_적용할주택가임대보증금액',
                value: 'ATTR_02'
            },]);


            MC_999_배당표_주택임대차보증금_계산_전체();


            MC_999_배당표_배당금_기본항목자동설정();

        })

        const Combo_입력표_지목 = new Combo('Combo_입력표_지목', new JsonZoonData('Q_00_지목', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        })
        const Picture21 = new Picture('Picture21', new JsonZoonData('Picture21', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {
            SetValue('팝업_주소창호출위치', '입력표');
            GetComponent('SubForm_주소조회').ShowSubForm(() => {
            });
        })

        const Edit_입력표_소재지1 = new Edit('Edit_입력표_소재지1', new JsonZoonData('Edit_입력표_소재지1', {}), {
            isShow: true, isEnable: true
        })
        const Formula1 = new CalcEdit('Formula1', ['Edit_입력표_대지권소유권', 'MkEdit_입력표_토지권의목적인', 'Edit_입력표_대지권소유권'], new FunctionZoonData('Formula1', () => {
            if (GetNumber('Edit_입력표_대지권소유권') == 0) {
                return { value: 0 };
            } else {
                return { value: Truncate(GetNumber('MkEdit_입력표_토지권의목적인')/GetNumber('Edit_입력표_대지권소유권'),0) };
            }
        }), {
            isShow : true,
            isEnable : false,
            mask: ';;#,###',
            maskType: '숫자'
        });
        const Edit_입력표_대지권소유권_평 = new CalcEdit('Edit_입력표_대지권소유권_평', ['Edit_입력표_대지권소유권'], new FunctionZoonData('Edit_입력표_대지권소유권_평', () => {
            return { value: GetNumber('Edit_입력표_대지권소유권')*0.3025 };
        }), {
            isShow : true,
            isEnable : false,
            mask: ';14;#,###1.00',
            maskType: '숫자'
        });
        const 배당표 = new Edit('배당표', new JsonZoonData('배당표', {}), {
            isShow: true, isEnable: true
        })
        const Table19 = new Edit('Table19', new JsonZoonData('Table19', {}), {
            isShow: true, isEnable: true
        })
        const Combo_배당표_최고채권액 = new Combo('Combo_배당표_최고채권액', new JsonZoonData('Q_코드_최고채권액', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_최고채권액').FindIndex('Combo_Idx', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_최고채권액'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_최고채권액').GetRow(GetValue('Combo_Idx'), [{key: 'Edit_배당표_경매비용', value: 'ATTR_02'},]);


            SetValue('Edit_건물단가_총단가조정지수', GetValue('Edit_건물단가_중개축여부_적용지수') * GetValue('Edit_건물단가_관리상태_적용지수'))


            MC_999_배당표_주택임대차보증금_계산_전체();


            MC_999_배당표_배당금_기본항목자동설정();

        })

        const Edit_배당표_경매비용 = new MaskEdit('Edit_배당표_경매비용', new JsonZoonData('Edit_배당표_경매비용', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label47 = new Label('Label47', new JsonZoonData('Label47', {}), {
            isShow: true, isEnable: true
        })
        const Edit_배당표_최고채권액 = new MaskEdit('Edit_배당표_최고채권액', new JsonZoonData('Edit_배당표_최고채권액', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label49 = new Label('Label49', new JsonZoonData('Label49', {}), {
            isShow: true, isEnable: true
        })
        const Table21 = new Edit('Table21', new JsonZoonData('Table21', {}), {
            isShow: true, isEnable: true
        })
        const Label33 = new Label('Label33', new JsonZoonData('Label33', {}), {
            isShow: true, isEnable: true
        })
        const Picture26 = new Picture('Picture26', new JsonZoonData('Picture26', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows("", [{key: '배당표_주택임대차보증금_각구의일련번호_Arr', value: 'RNO'},]);


            SetValue('배당표_주택임대차보증금_각구의일련번호', NumToStr(Max('배당표_주택임대차보증금_각구의일련번호_Arr') + 1))
            SetValue('배당표_주택임대차보증금_각구의위치', GetValue('Edit_입력표_동수') + "-" + GetValue('Edit_입력표_호수'))


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').AddRow({
                'CHECK_YN': 0,
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'RNO': GetValue('배당표_주택임대차보증금_각구의일련번호'),
                'RESI_NAME': GetValue('배당표_주택임대차보증금_각구의위치')
            });


            GetComponent('DBGrid_본건').GetRowCount('None');


            SetValue('본건_RowCount', GetValue('본건_RowCount') - 1);


            GetComponent('DBGrid_본건').SetCurSel(None);


            GetComponent('DBGrid_본건').SetEditFocus(None, 'None');

        })

        const Picture29 = new Picture('Picture29', new JsonZoonData('Picture29', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurSel('배당표_주택임대차보증금_RowPosition');


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').DeleteRow(GetNumber('배당표_주택임대차보증금_RowPosition'));


            MC_999_배당표_주택임대차보증금_계산();

        })

        const Table22 = new Edit('Table22', new JsonZoonData('Table22', {}), {
            isShow: true, isEnable: true
        })
        const Edit_배당표_예상낙찰가 = new MaskEdit('Edit_배당표_예상낙찰가', new JsonZoonData('Edit_배당표_예상낙찰가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Edit_배당표_경락가액 = new MaskEdit('Edit_배당표_경락가액', new JsonZoonData('Edit_배당표_경락가액', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label34 = new Label('Label34', new JsonZoonData('Label34', {}), {
            isShow: true, isEnable: true
        })
        const Combo_배당표_가임대보증금적용범위 = new Combo('Combo_배당표_가임대보증금적용범위', new JsonZoonData('Q_코드_가임대보증금적용지역', {}), {
            isShow: true, isEnable: false, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        }).on('OnChange', function () {

            GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {

                if ((row['CD_CODE'] == GetValue('Combo_배당표_가임대보증금적용범위'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetValue('배당표_주택임대차보증금_RowPosition'), [{
                key: 'Edit_배당표_적용할주택가임대보증금액',
                value: 'ATTR_02'
            },]);


            MC_999_배당표_주택임대차보증금_계산_전체();


            MC_999_배당표_배당금_기본항목자동설정();

        })

        const Edit_배당표_적용할주택가임대보증금액 = new MaskEdit('Edit_배당표_적용할주택가임대보증금액', new JsonZoonData('Edit_배당표_적용할주택가임대보증금액', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label45 = new Label('Label45', new JsonZoonData('Label45', {}), {
            isShow: true, isEnable: true
        })
        const Edit_배당표_합계_총방의개수 = new MaskEdit('Edit_배당표_합계_총방의개수', new JsonZoonData('Edit_배당표_합계_총방의개수', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Edit_배당표_합계_적용한방의개수 = new MaskEdit('Edit_배당표_합계_적용한방의개수', new JsonZoonData('Edit_배당표_합계_적용한방의개수', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Edit_배당표_합계_실제임대차보증금 = new MaskEdit('Edit_배당표_합계_실제임대차보증금', new JsonZoonData('Edit_배당표_합계_실제임대차보증금', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Edit_배당표_합계_최종적용가임대보증금 = new MaskEdit('Edit_배당표_합계_최종적용가임대보증금', new JsonZoonData('Edit_배당표_합계_최종적용가임대보증금', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Edit_배당표_합계_주택임대차보증금_확정 = new MaskEdit('Edit_배당표_합계_주택임대차보증금_확정', new JsonZoonData('Edit_배당표_합계_주택임대차보증금_확정', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Edit_배당표_합계_주택임대차보증금_확정없는 = new MaskEdit('Edit_배당표_합계_주택임대차보증금_확정없는', new JsonZoonData('Edit_배당표_합계_주택임대차보증금_확정없는', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const DBGrid_배당금_계산 = new DBGrid('DBGrid_배당금_계산', new JsonZoonData('Q_배당표_배당금_계산', {}), {
            isShow: true, isEnable: true
        }).on('OnValidate', function () {

            GetComponent('DBGrid_배당금_계산').GetCurColName('배당표_배당금계산_ColName');


            MC_999_배당표_배당금_계산1();

        }).on('OnClick', function () {

            GetComponent('DBGrid_배당금_계산').GetRowCount('배당표_배당금계산_RowCount');


            if (GetValue('배당표_배당금계산_RowCount') > 6) {
                SetValue('배당표_배당금_순위설정', "1")
            } else {
                SetValue('배당표_배당금_순위설정', "0")
            }

        }).on('OnEditChanged', function () {
            GetComponent('DBGrid_배당금_계산').GetRow(-1, [
                {key: '배당표_배당금계산_권리의내용', value: 'RIGHT_CODE'},
            ]);

            GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산_RowPosition', (row) => {
                if ((row['CD_CODE'] == GetValue('배당표_배당금계산_권리의내용'))) {
                    return true;
                }

                return false;
            });

            GetZoonData('Q_코드_권리의내용').GetRow(GetValue('배당표_배당금계산_RowPosition'), [
                {key: '배당표_배당금계산_배당순위', value: 'ATTR_08'},
            ]);


            GetComponent('DBGrid_배당금_계산').SetRow(-1, [
                {key: 'PRO_RATE_CODE', value: GetValue('배당표_배당금계산_배당순위')},
            ]);

            GetComponent('DBGrid_배당금_계산').NextTab();

        }).on('OnEnterKey', function () {
            GetComponent('DBGrid_배당금_계산').NextTab();
        })

        const Picture31 = new Picture('Picture31', new JsonZoonData('Picture31', {}), {
            isShow: true, isEnable: true
        })
        const Label46 = new Label('Label46', new JsonZoonData('Label46', {}), {
            isShow: true, isEnable: true
        })
        const Picture32 = new Picture('Picture32', new JsonZoonData('Picture32', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당금_계산').GetRows("", [{key: '배당표_배당금계산_배당순위_Arr', value: 'RANK'},

                {key: '배당표_배당금계산_표시순위_Arr', value: 'DISP_RANK'},]);


            SetValue('배당표_배당금계산_배당순위', Max('배당표_배당금계산_배당순위_Arr') + 1)

            SetValue('배당표_배당금계산_표시순위', Max('배당표_배당금계산_표시순위_Arr'))

            if (StrToNum(GetValue('배당표_배당금계산_표시순위')) < 100) {
                SetValue('배당표_배당금계산_표시순위', "101")
            } else {
                SetValue('배당표_배당금계산_표시순위', NumToStr(StrToNum(GetValue('배당표_배당금계산_표시순위')) + 1))
            }


            GetComponent('DBGrid_배당금_계산').AddRow({
                'ERA_YN': 'N',
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'DISP_RANK': GetValue('배당표_배당금계산_표시순위'),
                'IS_ENABLE': 1,
                'HITE_YN': 'N',
                'RIGHT_DATE': ''
            });


            GetComponent('DBGrid_배당금_계산').GetRowCount('배당표_배당금계산_RowCount');


            SetValue('배당표_배당금계산_RowCount', GetValue('배당표_배당금계산_RowCount') - 1);


            GetComponent('DBGrid_배당금_계산').SetCurSel(GetNumber('배당표_배당금계산_RowCount'));

        })

        const Picture33 = new Picture('Picture33', new JsonZoonData('Picture33', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_배당금_계산').GetRow(-1, [{key: '배당표_배당금계산_표시순위', value: 'DISP_RANK'},]);


            if (StrToNum(GetValue('배당표_배당금계산_표시순위')) < 100) {
                SetValue('저장_Error_Message', "고정된 항목은 삭제하실 수 없습니다.")
            } else {
                SetValue('저장_Error_Message', "")
            }


            if (isNotEmpty(GetValue('저장_Error_Message'))) {

                if (!MsgBox(GetValue('저장_Error_Message'), '', true)) {
                    return false;
                }

            }


            GetComponent('DBGrid_배당금_계산').GetCurSel('배당표_배당금계산_RowPosition');


            GetComponent('DBGrid_배당금_계산').DeleteRow(GetNumber('배당표_배당금계산_RowPosition'));

        })

        const DBGrid_배당표_주택임대차보증금_계산 = new DBGrid('DBGrid_배당표_주택임대차보증금_계산', new JsonZoonData('Q_배당표_주택임차보증금_계산', {}), {
            isShow: true, isEnable: true
        }).on('OnValidate', function () {

            GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(-1, [{key: '배당표_실제임대차보증금_변경전', value: 'LEASE_AMT_ORG'},

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

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').SortField('None', None);

            }


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurSel('i');


            MC_999_배당표_주택임대차보증금_계산();


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(-1, [{key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN'},

                {key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT'},

                {key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT'},]);


            GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRow(-1, [{key: 'FXDATE_YN_ORG', value: GetValue('배당표_주택임대차보증금_확정일자_보유여부')},

                {key: 'POSS_A_RM_CNT_ORG', value: GetValue('배당표_주택임대차보증금_적용한방의총수')},

                {key: 'LEASE_AMT_ORG', value: GetValue('배당표_주택임대차보증금_실제임대차보증금')},]);


            SetValue('배당표_변경여부', "N")


            MC_999_배당표_배당금_기본항목자동설정();

        })

        const Picture34 = new Picture('Picture34', new JsonZoonData('Picture34', {}), {
            isShow: true, isEnable: false
        })
        const Label48 = new Label('Label48', new JsonZoonData('Label48', {}), {
            isShow: true, isEnable: true
        })
        const 문서관리 = new Edit('문서관리', new JsonZoonData('문서관리', {}), {
            isShow: true, isEnable: true
        })
        const Command_사진_추가 = new Picture('Command_사진_추가', new JsonZoonData('Command_사진_추가', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_사진관리').GetRows("", [{key: '사진관리_Seq_Arr', value: 'LN_SEQ'},]);


            SetValue('사진관리_Seq', Max('사진관리_Seq_Arr') + 1)


            SetValue('사진관리_키값_임시', GetValue('년도') + GetValue('감정순번') + NumToStr(GetValue('사진관리_Seq')))


            GetComponent('DBGrid_사진관리').AddRow({
                'FILE_NAME_TMP': GetValue('사진관리_키값_임시'),
                'LN_SEQ': GetValue('사진관리_Seq'),
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번')
            });


            GetComponent('DBGrid_사진관리').GetRowCount('사진관리_RowCount');


            SetValue('사진관리_RowCount', GetValue('사진관리_RowCount') - 1);


            GetComponent('DBGrid_사진관리').SetCurSel(GetNumber('사진관리_RowCount'));


            GetComponent('DBGrid_사진관리').SetEditFocus(GetNumber('사진관리_RowCount') - 1, 'b_size');

        })

        const Command_사진_삭제 = new Picture('Command_사진_삭제', new JsonZoonData('Command_사진_삭제', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_사진관리').GetCurSel('사진관리_RowPosition');


            GetComponent('DBGrid_사진관리').DeleteRow(GetNumber('사진관리_RowPosition'));

        })

        const Command_SetGridData = new Command('Command_SetGridData', new JsonZoonData('Command_SetGridData', {}), {
            isShow: false, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_사진관리').SetRow(-1, [{key: 'FILE_NAME', value: GetValue('Edit_FileName')},

            ]);

        })

        const Edit_FileName_Tmp = new Edit('Edit_FileName_Tmp', new JsonZoonData('Edit_FileName_Tmp', {}), {
            isShow: false, isEnable: false
        })
        const Edit_FileName = new Edit('Edit_FileName', new JsonZoonData('Edit_FileName', {}), {
            isShow: false, isEnable: false
        })
        const Picture15 = new Picture('Picture15', new JsonZoonData('Picture15', {}), {
            isShow: true, isEnable: false
        })
        const Label11 = new Label('Label11', new JsonZoonData('Label11', {}), {
            isShow: true, isEnable: true
        })
        const Label14 = new Label('Label14', new JsonZoonData('Label14', {}), {
            isShow: true, isEnable: true
        })
        const Picture22 = new Picture('Picture22', new JsonZoonData('Picture22', {}), {
            isShow: true, isEnable: false
        })
        const Label66 = new Label('Label66', new JsonZoonData('Label66', {}), {
            isShow: true, isEnable: false
        })
        const Command_문서_추가 = new Picture('Command_문서_추가', new JsonZoonData('Command_문서_추가', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_문서').GetRows("", [{key: '사진관리_Seq_Arr', value: 'LN_SEQ'},]);


            SetValue('사진관리_Seq', Max('사진관리_Seq_Arr') + 1)


            SetValue('사진관리_키값_임시', GetValue('년도') + GetValue('감정순번') + NumToStr(GetValue('사진관리_Seq')))


            GetComponent('DBGrid_문서').AddRow({
                'FILE_NAME_TMP': GetValue('사진관리_키값_임시'),
                'LN_SEQ': GetValue('사진관리_Seq'),
                'PHOTO_DIV': 4,
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
            });


            GetComponent('DBGrid_문서').GetRowCount('사진관리_RowCount');


            SetValue('사진관리_RowCount', GetValue('사진관리_RowCount') - 1);


            GetComponent('DBGrid_문서').SetCurSel(GetNumber('사진관리_RowCount'));


            GetComponent('DBGrid_문서').SetEditFocus(GetNumber('사진관리_RowCount') - 1, 'b_size');

        })

        const Command_문서_삭제 = new Picture('Command_문서_삭제', new JsonZoonData('Command_문서_삭제', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            GetComponent('DBGrid_문서').GetCurSel('사진관리_RowPosition');


            GetComponent('DBGrid_문서').DeleteRow(GetNumber('사진관리_RowPosition'));

        })

        const Label78 = new Label('Label78', new JsonZoonData('Label78', {}), {
            isShow: true, isEnable: false
        })
        const DBGrid_사진관리 = new DBGrid('DBGrid_사진관리', new JsonZoonData('Q_문서관리_사진', {}), {
            isShow: true, isEnable: true
        }).on('OnDblClick', function () {

            GetComponent('DBGrid_사진관리').GetRow(-1, [{key: '사진관리_키값', value: 'FILE_NAME'},

                {key: '사진관리_키값_임시', value: 'FILE_NAME_TMP'},

                {key: '00_TEMP', value: 'PHOTO_DIV'},]);


            if (isEmpty(GetValue('00_TEMP'))) {

                if (!MsgBox("[구분]을 먼저 선택하세요.", '[알림]', true)) {
                    return false;
                }

            }


            SetValue('Edit_FileName', GetValue('사진관리_키값'))
            SetValue('Edit_FileName_Tmp', GetValue('사진관리_키값_임시'))
            SetValue('사진_URL', "es00_p01.jsp?userRole==" + GetValue('_권한'))


            Navigate('None', {}, 'left=0,top=0,width=860,height=700');

        })

        const SubForm_파일업로드 = new FileUploadSubForm('SubForm_파일업로드', new JsonZoonData('SubForm_파일업로드', {}), {});
        const DBGrid_문서 = new DBGrid('DBGrid_문서', new JsonZoonData('Q_문서관리_관련문서', {}), {
            isShow: true, isEnable: true
        }).on('OnButtonClick', function() {
            if (GetString('_권한') !== 'O') {
                SetValue('문서_다운로드할파일명', '');
                SetValue('문서_선택한파일명', '');
                SetValue('문서_전송받은파일명', '');
                SetValue('문서_전송할파일명', '');
                SetValue('문서_전송할파일크기', '');

                // if ($(this).attr('type') === 'file') {
                //     UploadFile($(this), '문서_전송할파일명', '문서_전송받은파일명')
                // }
                GetComponent('SubForm_파일업로드').ShowSubForm((data) => {
                    SetValue('문서_전송할파일명', data.name);
                    SetValue('문서_전송받은파일명', data.name);

                    GetComponent("DBGrid_문서").SetRow(-1, [
                        { key: 'FILE_NAME', value: GetValue('문서_전송할파일명') },
                        { key: 'UPLOAD_FILE', value: GetValue('문서_전송받은파일명') }
                    ]);
                });

            }
        }).on('OnDblClick', function () {

            GetComponent("DBGrid_문서").GetRow(-1, [
                { key: '문서_다운로드할파일명', value: 'UPLOAD_FILE' }
            ]);

            window.open(`/ezgen/files/download?kindCode=${GetValue('담보종류')}&FileName=${encodeURIComponent(GetString('문서_다운로드할파일명'))}`);

        })

        const 공통보고서 = new Edit('공통보고서', new JsonZoonData('공통보고서', {}), {
            isShow: true, isEnable: true
        })
        const Picture36 = new Picture('Picture36', new JsonZoonData('Picture36', {}), {
            isShow: true, isEnable: false
        })
        const Label27 = new Label('Label27', new JsonZoonData('Label27', {}), {
            isShow: true, isEnable: true
        })
        const Table23 = new Edit('Table23', new JsonZoonData('Table23', {}), {
            isShow: true, isEnable: true
        })
        const Picture37 = new Picture('Picture37', new JsonZoonData('Picture37', {}), {
            isShow: true, isEnable: false
        })
        const Label50 = new Label('Label50', new JsonZoonData('Label50', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_지점_최저가 = new MaskEdit('Edit_공통보고서_지점_최저가', new JsonZoonData('Edit_공통보고서_지점_최저가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label51 = new Label('Label51', new JsonZoonData('Label51', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_본사_최저가 = new MaskEdit('Edit_공통보고서_본사_최저가', new JsonZoonData('Edit_공통보고서_본사_최저가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label52 = new Label('Label52', new JsonZoonData('Label52', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_지점_최고가 = new MaskEdit('Edit_공통보고서_지점_최고가', new JsonZoonData('Edit_공통보고서_지점_최고가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label53 = new Label('Label53', new JsonZoonData('Label53', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_본사_최고가 = new MaskEdit('Edit_공통보고서_본사_최고가', new JsonZoonData('Edit_공통보고서_본사_최고가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label54 = new Label('Label54', new JsonZoonData('Label54', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_지점_평가가격 = new MaskEdit('Edit_공통보고서_지점_평가가격', new JsonZoonData('Edit_공통보고서_지점_평가가격', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label55 = new Label('Label55', new JsonZoonData('Label55', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_본사_평가가격 = new MaskEdit('Edit_공통보고서_본사_평가가격', new JsonZoonData('Edit_공통보고서_본사_평가가격', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label56 = new Label('Label56', new JsonZoonData('Label56', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_지점_예상낙찰가율 = new MaskEdit('Edit_공통보고서_지점_예상낙찰가율', new JsonZoonData('Edit_공통보고서_지점_예상낙찰가율', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const Label57 = new Label('Label57', new JsonZoonData('Label57', {}), {
            isShow: true, isEnable: true
        })
        const Label58 = new Label('Label58', new JsonZoonData('Label58', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_지점_예상낙찰가 = new MaskEdit('Edit_공통보고서_지점_예상낙찰가', new JsonZoonData('Edit_공통보고서_지점_예상낙찰가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label59 = new Label('Label59', new JsonZoonData('Label59', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_본사_예상낙찰가 = new MaskEdit('Edit_공통보고서_본사_예상낙찰가', new JsonZoonData('Edit_공통보고서_본사_예상낙찰가', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label60 = new Label('Label60', new JsonZoonData('Label60', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_지점_당사설정액 = new MaskEdit('Edit_공통보고서_지점_당사설정액', new JsonZoonData('Edit_공통보고서_지점_당사설정액', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label61 = new Label('Label61', new JsonZoonData('Label61', {}), {
            isShow: true, isEnable: true
        })
        const Edit_공통보고서_본사_당사설정액 = new MaskEdit('Edit_공통보고서_본사_당사설정액', new JsonZoonData('Edit_공통보고서_본사_당사설정액', {}), {
            isShow: true, isEnable: false, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label62 = new Label('Label62', new JsonZoonData('Label62', {}), {
            isShow: true, isEnable: true
        })
        const Label63 = new Label('Label63', new JsonZoonData('Label63', {}), {
            isShow: true, isEnable: true
        })
        const Label64 = new Label('Label64', new JsonZoonData('Label64', {}), {
            isShow: true, isEnable: true
        })
        const Label65 = new Label('Label65', new JsonZoonData('Label65', {}), {
            isShow: true, isEnable: false
        })
        const Edit_공통보고서_지점_초과부족설정분 = new Edit('Edit_공통보고서_지점_초과부족설정분', new JsonZoonData('Edit_공통보고서_지점_초과부족설정분', {}), {
            isShow: true, isEnable: false
        })
        const Picture38 = new Picture('Picture38', new JsonZoonData('Picture38', {}), {
            isShow: true, isEnable: true
        }).on('OnClick', function () {

            SetValue('URL', "es01_w02_p03.jsp?yyyy==" + GetValue('년도') + "&seq==" + GetValue('감정순번'))


            showModalDialog('None', GetValue('None'), '');

        })

        const Q_공통보고서_트리 = new JsonZoonData('Q_공통보고서_트리', {});
        const TreeView1 = new TreeView('TreeView1', Q_공통보고서_트리, {
            isShow: true,
            isEnable: true,
            bind: [
                { value: 'LEVEL1', key: 'CD_LEVEL1' },
                { value: 'LEVEL2', key: 'CD_LEVEL2' },
                { value: 'LEVEL3', key: 'CD_LEVEL3' },
                { value: 'LEVEL4', key: 'CD_LEVEL4' },
                { value: 'LEVEL5', key: 'CD_LEVEL5' }
            ]
        }).on('OnDblClick', function () {

            GetZoonData('Q_공통보고서_트리').FindIndex('Combo_Idx', (row) => {

                if ((row['CD_CODE'] == GetValue('TreeView1'))) {
                    return true;
                }

                return false;
            });


            GetZoonData('Q_공통보고서_트리').GetRow(GetValue('Combo_Idx'), [{key: '공통보고서_제목', value: 'CD_DESC'},]);


            SetValue('URL', "es01_w02_p00.jsp?yyyy==" + GetValue('년도') + "&seq==" + GetValue('감정순번') + "&repo_div==" + GetValue('TreeView1') + "&repo_title==" + GetValue('공통보고서_제목'))


            GetComponent('TreeView1').HasChildren('None');


            if ((GetValue('공통보고서_트리') == 1)) {
                return false;
            }

            showModalDialog('None', GetValue('None'), '');
        })

        const Edit_공통보고서_본사_초과부족설정분 = new Edit('Edit_공통보고서_본사_초과부족설정분', new JsonZoonData('Edit_공통보고서_본사_초과부족설정분', {}), {
            isShow: true, isEnable: false
        })
        const Edit_공통보고서_본사_예상낙찰가율 = new MaskEdit('Edit_공통보고서_본사_예상낙찰가율', new JsonZoonData('Edit_공통보고서_본사_예상낙찰가율', {}), {
            isShow: true, isEnable: false, mask: ';7;#,###1.00', maskType: '숫자',
        })
        const Label79 = new Label('Label79', new JsonZoonData('Label79', {}), {
            isShow: true, isEnable: true
        })
        const Picture62 = new Picture('Picture62', new JsonZoonData('Picture62', {}), {
            isShow: true, isEnable: false
        })
        const Table28 = new Edit('Table28', new JsonZoonData('Table28', {}), {
            isShow: true, isEnable: true
        })
        const Combo_보고서_평가구분 = new Combo('Combo_보고서_평가구분', new JsonZoonData('Q_99_평가구분', {}), {
            isShow: true, isEnable: true, format: {
                text: 'CD_DESC', value: 'CD_CODE', index: '',
            }
        })
        const 탁상감정 = new Edit('탁상감정', new JsonZoonData('탁상감정', {}), {
            isShow: true, isEnable: true
        })
        const RichEditor_탁상감정 = new RichEditor('RichEditor_탁상감정', new JsonZoonData('RichEditor_탁상감정', {}), {
            isShow: true, isEnable: true
        })
        const Picture58 = new Picture('Picture58', new JsonZoonData('Picture58', {}), {
            isShow: (GetValue('isReadOnly') == 'O'), isEnable: true
        }).on('OnClick', function () {

            if (isEmpty(GetValue('Edit_탁상감정_탁상감정가'))) {
                if (!MsgBox('탁상감정가를 입력하여 주십시오.', '', true)) {
                    return false;
                }
            }


            if (!MsgBox("해당 담당자가 확인 가능하게 됩니다." + Hex(10) + "저장하시겠습니까?", '알림', true)) {
                return false;
            }


            GetComponent('RichEditor_탁상감정').GetRichEditorRTF('None');


            SetValue('탁상감정_내용', StrReplace(GetValue('탁상감정_내용'), "'", "&qt"))
            SetValue('탁상감정_회신일자', DateToStr(Now()))


            RunQuery('저장_탁상감정', {
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'ESTI_OPI': GetValue('탁상감정_내용'),
                'RES_DATE': GetValue('탁상감정_회신일자'),
                'REQ_DATE': GetValue('탁상감정_요청일자'),
                'RES_PL_BID_AMT': GetValue('Edit_탁상감정_탁상감정가')
            }, 'GET');


            RunQuery('저장_탁상감정_담보감정M변경', {
                'YYYY': GetValue('년도'),
                'SEQ': GetValue('감정순번'),
                'RES_PL_BID_AMT': GetValue('Edit_탁상감정_탁상감정가'),
            }, 'GET');


            if (!MsgBox('정상적으로 저장되었습니다', '알림', true)) {
                return false;
            }

        })

        const Picture59 = new Picture('Picture59', new JsonZoonData('Picture59', {}), {
            isShow: (GetValue('isReadOnly') == 'O'), isEnable: true
        }).on('OnClick', function () {

            SetValue('URL', "es01_w02_p03.jsp?yyyy==" + GetValue('년도') + "&seq==" + GetValue('감정순번'))


            showModalDialog('None', GetValue('None'), '');

        })

        const Picture60 = new Picture('Picture60', new JsonZoonData('Picture60', {}), {
            isShow: true, isEnable: false
        })
        const Label76 = new Label('Label76', new JsonZoonData('Label76', {}), {
            isShow: true, isEnable: true
        })
        const Table27 = new Edit('Table27', new JsonZoonData('Table27', {}), {
            isShow: true, isEnable: true
        })
        const Edit_탁상감정_탁상감정가 = new MaskEdit('Edit_탁상감정_탁상감정가', new JsonZoonData('Edit_탁상감정_탁상감정가', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자',
        })
        const Label77 = new Label('Label77', new JsonZoonData('Label77', {}), {
            isShow: true, isEnable: true
        })
        const Table3 = new Edit('Table3', new JsonZoonData('Table3', {}), {
            isShow: true, isEnable: true
        })
        // const Label1 = new Label('Label1', new JsonZoonData('Label1', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Label2 = new Label('Label2', new JsonZoonData('Label2', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Label3 = new Label('Label3', new JsonZoonData('Label3', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Label4 = new Label('Label4', new JsonZoonData('Label4', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Label5 = new Label('Label5', new JsonZoonData('Label5', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Label6 = new Label('Label6', new JsonZoonData('Label6', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Label7 = new Label('Label7', new JsonZoonData('Label7', {}), {
        //     isShow: true, isEnable: true
        // })
        const QField1 = new Edit('QField1', new JsonZoonData('QField1', {}), {
            isShow: true, isEnable: true
        })
        const QField10 = new Edit('QField10', new JsonZoonData('QField10', {}), {
            isShow: true, isEnable: true
        })
        const QField11 = new Edit('QField11', new JsonZoonData('QField11', {}), {
            isShow: true, isEnable: true
        })
        const QField12 = new Edit('QField12', new JsonZoonData('QField12', {}), {
            isShow: true, isEnable: true
        })
        const QField13 = new Edit('QField13', new JsonZoonData('QField13', {}), {
            isShow: true, isEnable: true
        })
        const QField14 = new Edit('QField14', new JsonZoonData('QField14', {}), {
            isShow: true, isEnable: true
        })
        const QField15 = new Edit('QField15', new JsonZoonData('QField15', {}), {
            isShow: true, isEnable: true
        })
        const QField16 = new Edit('QField16', new JsonZoonData('QField16', {}), {
            isShow: true, isEnable: true
        })
        const QField17 = new Edit('QField17', new JsonZoonData('QField17', {}), {
            isShow: true, isEnable: true
        })
        const QField18 = new Edit('QField18', new JsonZoonData('QField18', {}), {
            isShow: true, isEnable: true
        })
        const QField19 = new Edit('QField19', new JsonZoonData('QField19', {}), {
            isShow: true, isEnable: true
        })
        const QField2 = new Edit('QField2', new JsonZoonData('QField2', {}), {
            isShow: true, isEnable: true
        })
        const QField20 = new Edit('QField20', new JsonZoonData('QField20', {}), {
            isShow: true, isEnable: true
        })
        const QField21 = new Edit('QField21', new JsonZoonData('QField21', {}), {
            isShow: true, isEnable: true
        })
        const QField22 = new Edit('QField22', new JsonZoonData('QField22', {}), {
            isShow: true, isEnable: true
        })
        const QField23 = new Edit('QField23', new JsonZoonData('QField23', {}), {
            isShow: true, isEnable: true
        })
        const QField24 = new Edit('QField24', new JsonZoonData('QField24', {}), {
            isShow: true, isEnable: true
        })
        const QField25 = new Edit('QField25', new JsonZoonData('QField25', {}), {
            isShow: true, isEnable: true
        })
        const QField26 = new Edit('QField26', new JsonZoonData('QField26', {}), {
            isShow: true, isEnable: true
        })
        const QField27 = new Edit('QField27', new JsonZoonData('QField27', {}), {
            isShow: true, isEnable: true
        })
        const QField28 = new Edit('QField28', new JsonZoonData('QField28', {}), {
            isShow: true, isEnable: true
        })
        const QField29 = new Edit('QField29', new JsonZoonData('QField29', {}), {
            isShow: true, isEnable: true
        })
        const QField3 = new Edit('QField3', new JsonZoonData('QField3', {}), {
            isShow: true, isEnable: true
        })
        const QField30 = new Edit('QField30', new JsonZoonData('QField30', {}), {
            isShow: true, isEnable: true
        })
        const QField31 = new Edit('QField31', new JsonZoonData('QField31', {}), {
            isShow: true, isEnable: true
        })
        const QField32 = new Edit('QField32', new JsonZoonData('QField32', {}), {
            isShow: true, isEnable: true
        })
        const QField4 = new Edit('QField4', new JsonZoonData('QField4', {}), {
            isShow: true, isEnable: true
        })
        const QField5 = new Edit('QField5', new JsonZoonData('QField5', {}), {
            isShow: true, isEnable: true
        })
        const QField6 = new Edit('QField6', new JsonZoonData('QField6', {}), {
            isShow: true, isEnable: true
        })
        const QField7 = new Edit('QField7', new JsonZoonData('QField7', {}), {
            isShow: true, isEnable: true
        })
        const QField8 = new Edit('QField8', new JsonZoonData('QField8', {}), {
            isShow: true, isEnable: true
        })
        const QField9 = new Edit('QField9', new JsonZoonData('QField9', {}), {
            isShow: true, isEnable: true
        })
        // const Table1 = new Edit('Table1', new JsonZoonData('Table1', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Table2 = new Edit('Table2', new JsonZoonData('Table2', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Table3 = new Edit('Table3', new JsonZoonData('Table3', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Table4 = new Edit('Table4', new JsonZoonData('Table4', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Table5 = new Edit('Table5', new JsonZoonData('Table5', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Table6 = new Edit('Table6', new JsonZoonData('Table6', {}), {
        //     isShow: true, isEnable: true
        // })
        // const Table7 = new Edit('Table7', new JsonZoonData('Table7', {}), {
        //     isShow: true, isEnable: true
        // })
    }
}