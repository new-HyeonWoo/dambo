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
        // GetComponent('Combo_도로주소_시도').SetCurSel(0);
        // RunQuery('Q_도로명주소_시군구', {
        //     'CITY' : GetValue('Combo_도로주소_시도'),
        // }, 'GET');
        //
        // GetComponent('Combo_도로주소_시군구').SetCurSel(0);
        RunQuery('Q_관리부서확인', {
            '_부서코드' : GetValue('_부서코드')
        }, 'GET');
        GetComponent('SubForm1').HideSubForm();

        RunButton('Command_응찰_00_탭활성여부');
        RunButton('Command_버튼_활성화여부');

        if (isEmpty(GetValue('감정순번'))) {
            MC_탭_상태변경();
        }

        SetValue('현재날짜', DateToStr(Now()));

        if (isEmpty(GetValue('년도'))) {
            SetValue('년도', Left(DateToStr(Now()),4));
            SetValue('Edit_KEY_년도', Left(DateToStr(Now()),4));
        } else {
            SetValue('Edit_KEY_년도', GetValue('년도'))
        }

        if (isEmpty(GetValue('감정순번'))) {
            SetValue('감정순번',  null)
            SetValue('Edit_KEY_감정순번', GetValue('감정순번'));
        } else {
            SetValue('Edit_KEY_감정순번', GetValue('감정순번'));
        }

        if (isEmpty(GetValue('담보종류'))) {
            SetValue('담보종류',  "104");
        }

        if (isEmpty(GetValue('userDeptCd'))) {
            SetValue('userDeptCd',  "0000");
        }

        // 권한설정Q_43_응찰입력표_선순위권리내
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

        SetValue('Combo_집합건물종류', GetValue('담보종류'));
        SetValue('MkEdit_입력표_기타조건_지수', 1);

        SetValue('Combo_사업부문', GetValue('사업부문'));

        MC_000_초기화_공통코드Query();
        MC_001_초기화_Combo_입력표();
        MC_200_초기화_Combo_감정가1();
        MC_300_초기화_비준가격_항목();
        MC_400_초기화_평가액();
        MC_001_초기화_Combo_보정표();
        MC_001_초기화_재감정여부();
        MC_999_배당();
        RunButton('Command_응찰_00_메인');
        if (GetString('_재감정여부') == 'Y') {
            return;
        }


        MC_002_초기화_Query_Loading();
        MC_공통보고서_조회();
        MC_탁상감정_조회();

        EmptyArray('00_본건사례배열변수');
        AddArray('00_본건사례배열변수', 0);
        AddArray('00_본건사례배열변수', 1);
        AddArray('00_본건사례배열변수', 2);

        GetComponent('DBGrid_본건사례').EnableEditing([
            { key : '용도지역', value: 0}
        ]);
        GetComponent('DBGrid_경매사례').EnableEditing([
            { key : '사례번호', value: 0}
        ]);
        GetComponent('DBGrid_비준가격').EnableEditing([
            { key : '사례번호', value: 0}
        ]);
        GetComponent('DBGrid_비준가격집계표').EnableEditing([
            { key : '사례번호', value: 0}
        ]);
    },

    OnBefore : function() {
        RunQuery('Q_사업부문', {}, 'GET');
        RunQuery('Q_링크사이트', {}, 'GET');

        if (match(PageType.집합_오피스텔) || match(PageType.집합_상업용)) {
            RunQuery('Q_00_담보종류', {}, 'GET');
            RunQuery('Q_00_가격동향', {}, 'GET');
            RunQuery('Q_DUAL_수익_사례구분', {}, 'GET');
        }
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