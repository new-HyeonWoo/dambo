const pageEvent = {

    init : async function() {
        await pageEvent.OnInitWindow();
        await pageEvent.OnBefore();
        await pageEvent.OnInitialize();
        await pageEvent.OnAfter();
    },

    OnInitWindow : function() {

    },

    OnInitialize : function() {
        // RunQuery('Q_도로명주소_시도', {}, 'GET');
        //
        // GetComponent('Combo_도로주소_시도').SetCurSel(0);
        //
        // RunQuery('Q_도로명주소_시군구', {
        //     'CITY' : GetValue('Combo_도로주소_시도'),
        // }, 'GET');
        //
        // GetComponent('Combo_도로주소_시군구').SetCurSel(0);

        RunQuery('Q_관리부서확인', {
            '_부서코드' : GetValue('_부서코드')
        }, 'GET');

        MC_재감정여부();

        RunButton('Command_응찰_00_탭활성여부');
        RunButton('Command_버튼_활성화여부');

        // GetComponent('SubForm1').ShowSubForm();

        MC_Query_초기화();

        SetValue('현재날짜', DateToStr(Now()));

        if (isEmpty(GetValue('년도'))) {
            SetValue('년도', Left(DateToStr(Now()),4));
            SetValue('Edit_년도', Left(DateToStr(Now()),4));
        } else {
            SetValue('Edit_년도', GetValue('년도'))
        }

        if (isEmpty(GetValue('담보종류'))) {
            SetValue('담보종류',  "101");
        }

        if (!isEmpty(GetValue('감정순번'))) {
            SetValue('Edit_감정순번', GetValue('감정순번'));
        }

        // 권한설정
        // W - 저장 가능
        // R - 읽기 가능
        // O - 모두 불가
        if (GetString('_권한') == "W" ) {
            SetValue('isReadOnly', "N");
        } else if ( GetString('_권한') == "O" ) {
            SetValue('isReadOnly', "O");
        } else {
            SetValue('isReadOnly', "Y");
        }

        if (GetString('_권한') == "I" ) {
            SetValue('isReadOnly', "N");
            SetValue('Edit_감정자사번', GetString('_사원번호'));
            SetValue('Edit_감정자', GetString('_부서명') + "  " + GetString('_직위') + "  " + GetString('_사원명'));
        }

        //배당자료수정여부 체크
        if ((GetString('isReadOnly') == "N") && (GetString('_관리부서') == "Y") ) {
            SetValue('01_배당자료수정가능여부', "Y")
        }

        for(let i = 0; i < 6; i+=1){
            MC_배당금_Flag변경();
        }

        if (isEmpty(GetValue('Edit_채무자와담보제공자의관계'))) {
            SetValue('Edit_채무자와담보제공자의관계','채무자본인')
        }

        MC_Combo_초기화();

        // SetMultiValue
        SetValue('Combo_집합건물종류', GetValue('담보종류'));
        SetValue('Combo_사업부문', GetValue('사업부문'));
        SetValue('Combo_아파트단지규모', '00');
        SetValue('Combo_전유부분의면적', '00');
        SetValue('Combo_전유부분의위치', '000000');
        SetValue('Combo_건축물경과년도', '00');
        SetValue('Combo_점유자의권리형태', 11);
        SetValue('MkEdit_보정표_당해지역낙찰가율', 100);
        SetValue('MkEdit_보정표_유사부동산낙찰가율', 100);
        SetValue('MkEdit_보정표_기준낙찰가율', 100);
        SetValue('MkEdit_보정표_적용할낙찰가율', 100);

        if (isEmpty(GetValue('MkEdit_감정일')) || (GetString('MkEdit_감정일')) == "00000000") {
            SetValue('MkEdit_감정일', Now());
        }

        RunButton('Command_응찰_00_메인');

        if (GetString('Combo_입력표_업소구분') == "0") {
            GetComponent('Edit_업소명').SetReadOnly(1);
            SetValue('Edit_업소명', '자체');
            GetComponent('Edit_업소대표자').SetReadOnly(1);
            SetValue('Edit_업소대표자', GetValue('Edit_입력표_대표자'));
            SetFocus('Edit_채무자');
        } else if (GetString('Combo_입력표_업소구분') == "1") {
            GetComponent('Edit_업소명').SetReadOnly(0);
            GetComponent('Edit_업소대표자').SetReadOnly(0);
            SetValue('Edit_업소명', '');
            SetValue('Edit_업소대표자', '');
            SetFocus('Edit_업소명');
        } else if(isEmpty(GetString('Combo_입력표_업소구분'))) {
            GetComponent('Edit_업소명').SetReadOnly(0);
            GetComponent('Edit_업소대표자').SetReadOnly(0);
            GetComponent('Combo_입력표_업소구분').SetCurSel(0);
            SetValue('Edit_업소명', '');
            SetValue('Edit_업소대표자', '');
            SetFocus('Edit_업소명');
        }

        if (isEmpty(GetValue('감정순번'))) {
            MC_탭_상태변경();
        }

        MC_공통보고서_조회();

        RunQuery('Q_공통보고서_트리', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        RunQuery('Q_배당표M', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        GetZoonData ('Q_배당표M').GetRow(0, [
            {key: 'Combo_배당표_최고채권액', value: 'AUCTION_CODE'},
            {key: 'Edit_배당표_경매비용', value: 'AUCTION_AMT'},
            {key: 'Edit_배당표_예상낙찰가', value: 'H_PL_BID_AMT'},
            {key: 'Combo_배당표_가임대보증금적용범위', value: 'H_POSS_A_AREA'},
            {key: 'Edit_배당표_적용할주택가임대보증금액', value: 'H_POSS_A_AMT'},
            {key: 'Edit_배당표_경락가액', value: 'H_POSS_AMT'},
            {key: 'Edit_배당표_최고채권액', value: 'CRED_MAX_AMT'},
        ]);

        RunQuery('Q_배당표_주택임차보증금_계산', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        for(let i = 0; i < 6; i+=1){
            MC_배당금_Flag변경();
        }

        MC_배당표_주택임대차보증금_계산();

        if (isEmpty(GetValue('감정순번'))) {
            return;
        }

        if (GetString('_재감정여부') == 'Y') {
            return;
        }

        RunQuery('Q_담보마스타', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        GetZoonData('Q_담보마스타').GetRow(0, [
            {key: 'MkEdit_감정일', value: 'ESTI_DATE'},
            {key: 'Edit_거래처', value: 'SANGHO'},
            {key: 'Edit_대표자', value: 'DAEPYO_NAME'},
            {key: 'Edit_업소명', value: 'MARKET_NAME'},
            {key: 'Edit_업소대표자', value: 'MARKET_CEO'},
            {key: 'Edit_채무자', value: 'DEBTOR'},
            {key: 'Edit_담보제공자', value: 'GUARANTOR'},
            {key: 'Edit_채무자와담보제공자의관계', value: 'DEBTOR_RELATION'},
            {key: 'Edit_거래처코드', value: 'GEO_CODE'},
            {key: 'Combo_입력표_업소구분', value: 'MARKET_DIV'},
            {key: 'Edit_감정자사번', value: 'JUM_SABUN'},
            {key: 'Edit_감정자', value: 'JUM_SABUN_NAME'},
            {key: 'Edit_Doc_Key', value: 'DOC_KEY'},
            {key: 'Edit_Doc_Name', value: 'DOC_NAME'},
            {key: 'Combo_보고서_평가구분', value: 'APPRAISE_GU'},
            {key: '02_배당표수정여부', value: 'SHARE_YN'},

        ]);

        RunQuery('Q_입력표', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        GetZoonData('Q_입력표').GetRow(0, [
            {key: 'Edit_소재지', value: 'JUSO1'},
            {key: 'Edit_지번', value: 'LOT_NUM'},
            {key: 'Edit_집합건물의명칭', value: 'CB_NAME'},
            {key: 'Edit_동수', value: 'DONG'},
            {key: 'Edit_호수', value: 'HO'},
            {key: 'Combo_지목', value: 'LCATEGORY'},
            {key: 'Edit_소재지_상세', value: 'JUSO2'},
            {key: 'MkEdit_토지권의목적인', value: 'LG_SIZE'},
            {key: 'Edit_대지권소유권', value: 'LG_OWNER'},
            {key: 'Combo_가임대보증금적용지역', value: 'POSS_A_AREA'},
            {key: 'Combo_구조', value: 'CB_STRUC'},
            {key: 'Combo_지붕', value: 'CB_ROOF'},
            {key: 'Edit_지상', value: 'CB_UPFLOOR'},
            {key: 'Edit_지하', value: 'CB_DNFLOOR'},
            {key: 'Edit_해당층', value: 'CB_FLOOR'},
            {key: 'MkEdit_건축일자', value: 'CB_YYYY'},
            {key: 'MkEdit_세대수', value: 'NUM_HOUSEHOLD'},
            {key: 'MkEdit_건축년도_경과', value: 'ELAP_YEAR'},
            {key: 'MkEdit_전유면적', value: 'CB_EXM_SIZE'},
            {key: 'MkEdit_전유면적_평', value: 'CB_EXM_SIZE_PY'},
            {key: 'MkEdit_공유면적', value: 'CB_PUB_SIZE'},
            {key: 'MkEdit_공유면적_평', value: 'CB_PUB_SIZE_PY'},
            {key: 'MkEdit_면적합계', value: 'CB_TOT_SIZE'},
            {key: 'MkEdit_면적합계_평', value: 'CB_TOT_SIZE_PY'},
            {key: 'MkEdit_등기부등본상의시세_총액', value: 'REGI_AMT'},
            {key: 'MkEdit_등기부등본상의시세_단가', value: 'REGI_DAN'},
            {key: 'MkEdit_등기부등본상의시세_평당단가', value: 'REGI_DAN_PY'},
            {key: 'MkEdit_기준시가_총액', value: 'BASE_AMT'},
            {key: 'MkEdit_기준시가_단가', value: 'BASE_DAN'},
            {key: 'MkEdit_기준시가_평당단가', value: 'BASE_DAN_PY'},
            {key: 'MkEdit_보정표_아파트단지규모', value: 'NUM_HOUSEHOLD'},
            {key: 'MkEdit_보정표_전유부분면적', value: 'CB_EXM_SIZE'},
            {key: 'MkEdit_보정표_건축물의경과년도', value: 'ELAP_YEAR'},
            {key: 'MkEdit_감정가액산출_건축일자', value: 'CB_YYYY'},
            {key: 'MkEdit_감정가액산출_세대수', value: 'NUM_HOUSEHOLD'},
            {key: 'MkEdit_등기부상전용면적', value: 'SEC_REGI_SIZE'},
            {key: 'MkEdit_감정가_등기부상전용면적', value: 'SEC_REGI_SIZE'},
            {key: 'MkEdit_감정가_분자', value: 'SEC_NUME'},
            {key: 'MkEdit_분자', value: 'SEC_NUME'},
            {key: 'MkEdit_분모', value: 'SEC_DENO'},
            {key: 'MkEdit_감정가_분모', value: 'SEC_DENO'},
            {key: 'MkEdit_감정가_비율', value: 'SEC_RATE'},
            {key: 'MkEdit_비율', value: 'SEC_RATE'},
            {key: 'MkEdit_담보제공면적', value: 'SEC_OFFER_SIZE'},
            {key: 'MkEdit_감정가_담보제공면적', value: 'SEC_OFFER_SIZE'},
            {key: 'Edit_사유', value: 'SEC_DESC'},
            {key: 'Combo_배당표_가임대보증금적용대상', value: 'POSS_A_AREA'},
        ]);

        MC_사유_상태변경();

        if (isEmpty(GetValue('MkEdit_등기부등본상의시세_총액'))) {
            SetValue('MkEdit_등기부등본상의시세_총액', 0);
            SetValue('MkEdit_등기부등본상의시세_단가', 0);
            SetValue('MkEdit_등기부등본상의시세_평당단가', 0);
        }

        if (isEmpty(GetValue('MkEdit_기준시가_총액'))) {
            SetValue('MkEdit_기준시가_총액', 0);
            SetValue('MkEdit_기준시가_단가', 0);
            SetValue('MkEdit_기준시가_평당단가', 0);
        }

        RunQuery('Q_규제의표시', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        GetZoonData('Q_규제의표시').GetRow(0, [
            {key: 'Edit_국토의계획', value: 'REST_PL_USE'},
            {key: 'Edit_다른법률등', value: 'REST_OT_LAW'},
            {key: 'Edit_시행령부칙', value: 'REST_EN_RULE'},
            {key: 'Edit_토지이용규제', value: 'REST_FU_LAW'},
        ]);

        RunQuery('Q_감정가_감정M', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        GetZoonData('Q_감정가_감정M').GetRow(0, [
            {key: 'MkEdit_본건_최고가격', value: 'MA_MAX_AMT'},
            {key: 'MkEdit_본건_최저가격', value: 'MA_MIN_AMT'},
            {key: 'MkEdit_본건_비율', value: 'MA_RATE'},
            {key: 'MkEdit_인근_최고가격', value: 'PR_MAX_AMT'},
            {key: 'MkEdit_인근_최저가격', value: 'PR_MIN_AMT'},
            {key: 'MkEdit_인근_비율', value: 'PR_RATE'},
            {key: 'MkEdit_경매_최고가격', value: 'AU_MAX_AMT'},
            {key: 'MkEdit_경매_최저가격', value: 'AU_MIN_AMT'},
            {key: 'MkEdit_경매_비율', value: 'AU_RATE'},
            {key: 'MkEdit_결정가격', value: 'APPL_AMT'},
            {key: 'MkEdit_보수금액', value: 'INT_REP_AMT'},
            {key: 'MkEdit_보수단가', value: 'INT_REP_DAN'},
            {key: 'MkEdit_보수평형', value: 'INT_REP_SIZE'},
            {key: 'MkEdit_보수평형_평', value: 'INT_REP_SIZE_PY'},
            {key: 'MkEdit_평가가격', value: 'INCREASE_AMT'},
            {key: 'MkEdit_감정가_평가가격', value: 'INCREASE_AMT'},
            {key: 'MkEdit_감정가_최종평가가격', value: 'LAST_INCREASE_AMT'},
            {key: 'MkEdit_보정표_최저입찰가', value: 'LAST_INCREASE_AMT'},
            {key: 'Combo_평가_인테리어단가', value: 'INT_REP_DAN_CODE'},
        ]);

        RunQuery('Q_감정가_본건', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        RunQuery('Q_감정가_경매사례', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        RunQuery('Q_낙찰가율보정표', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        GetZoonData('Q_낙찰가율보정표').GetRow(0, [
            {key: 'MkEdit_보정표_당해지역낙찰가율', value: 'P_BID_RATE'},
            {key: 'MkEdit_보정표_유사부동산낙찰가율', value: 'K_BID_RATE'},
            {key: 'MkEdit_보정표_기준낙찰가율', value: 'B_BID_RATE'},
            {key: 'MkEdit_보정표_적용할낙찰가율', value: 'APPL_RATE'},
            {key: 'Combo_점유자의권리형태', value: 'RIGHTS_CODE'},
            {key: 'MkEdit_보정표_점유자의권리형태', value: 'RIGHTS_RATE'},
            {key: 'MkEdit_보정표_평가가격', value: 'INCREASE_AMT'},
            {key: 'Combo_아파트단지규모', value: 'APT_SCALE'},
            {key: 'MkEdit_보정표_아파트단지규모_적용율', value: 'APT_SCALE_RATE'},
            {key: 'Combo_전유부분의면적', value: 'APT_EXM_SIZE'},
            {key: 'MkEdit_보정표_전유부분면적_적용율', value: 'APT_EXM_RATE'},
            {key: 'Combo_전유부분의위치', value: 'APT_FLOOR_CODE'},
            {key: 'MkEdit_보정표_전유부분위치_적용율', value: 'APT_FLOOR_RATE'},
            {key: 'Combo_건축물경과년도', value: 'APT_ELAP_CODE'},
            {key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'APT_ELAP_RATE'},
            {key: 'MkEdit_보정표_예상낙찰가', value: 'PL_BID_AMT'},
        ]);

        RunQuery('Q_문서관리_사진', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        RunQuery('Q_문서관리_관련문서', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        MC_탁상감정_조회();

        GetComponent('DBGrid_가격사례_M').GetRow(-1,[
            {key: '가격사례_M_사례번호', value: 'LN_SEQ'},
        ]);

        GetComponent('DBGrid_가격사례_D').GetRowCount('가격사례_D_RowCount');

        if(GetNumber('가격사례_D_RowCount') > -1000){
            for(let i = 0; i < GetNumber('가격사례_D_RowCount'); i+=1){
                MC_가격사례_SYNC();
            }
            // GetZoonData('가격사례_D_RowCount').ReplaceQuery();
        }

        SetValue('Edit_보정표_전유부분위치', "전체 "+GetValue('Edit_지상')+"층중 지상 "+GetValue('Edit_해당층')+"층에 위치");

        if(GetString('권한') == 'W' && isEmpty(GetValue('Edit_감정자사번'))){
            SetValue('Edit_감정자사번', GetValue('_사원번호'));
            SetValue('Edit_감정자', GetString('_부서명') + "  " + GetString('_직위') + "  " + GetString('_사원명'));
        }
    },

    OnBefore : function() {
        RunQuery('Q_사업부문', {}, 'GET');
        RunQuery('Q_링크사이트', {}, 'GET');
    },

    OnAfter : function () {
        GetComponent('Command_저장').updateOptions({ isShow : GetString('isReadOnly') == 'N'});
        GetComponent('Command_배당처리').updateOptions({ isShow : GetString('isReadOnly') == 'N'});
    },

    OnClose : function() {

    },

    OnRMouseDown : function() {

    },

    OnError : function() {

    }
}