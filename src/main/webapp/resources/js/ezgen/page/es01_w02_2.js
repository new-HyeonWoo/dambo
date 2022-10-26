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
        //
        // GetComponent('Combo_도로주소_시도').SetCurSel(0.0);
        //
        //
        // RunQuery('Q_도로명주소_시군구', {
        //     'CITY': GetValue('Combo_도로주소_시도')
        // }, 'GET');
        //
        //
        // GetComponent('Combo_도로주소_시군구').SetCurSel(0.0);


        RunQuery('Q_관리부서확인', {
            '_부서코드': GetValue('_부서코드')
        }, 'GET');


        GetComponent('SubForm1').HideSubForm();


        RunButton('Command_응찰_00_탭활성여부');


        RunButton('Command_버튼_활성화여부');


        if (isEmpty(GetValue('감정순번'))) {
            MC_탭_상태변경();
        }


        SetValue('현재날짜', DateToStr(Now()))

        if ( (isEmpty(GetValue('년도'))) || (GetValue('년도') == "null")) {
            SetValue('년도', Left(DateToStr(Now()),4))
            SetValue('Edit_KEY_년도', Left(DateToStr(Now()),4))
        } else {
            SetValue('Edit_KEY_년도', GetValue('년도'))
        }

        if ( (isEmpty(GetValue('감정순번')) || (GetValue('감정순번') == "null"))) {
            SetValue('감정순번',  "")
            SetValue('Edit_KEY_감정순번', GetValue('감정순번'))
        } else {
            SetValue('Edit_KEY_감정순번', GetValue('감정순번'))
        }

        if (isEmpty(GetValue('담보종류'))) {
            SetValue('담보종류',  "102")
        }

        if (isEmpty(GetValue('userDeptCd'))) {
            SetValue('userDeptCd',  "0000")
        }

        // 권한설정
        // W - 저장 가능
        // R - 읽기 가능
        // O - 모두 불가
        if ( GetValue('_권한') == "W") {
            SetValue('isReadOnly', "N")
        } else if ( GetValue('_권한') == "O") {
            SetValue('isReadOnly', "O")
        } else {
            SetValue('isReadOnly', "Y")
        }

        if ( GetValue('_권한') == "I") {
            SetValue('isReadOnly', "N")
            SetValue('Edit_감정자사번', GetValue('_사원번호'))
            SetValue('Edit_감정자', GetValue('_부서명')+" "+GetValue('_직위')+" "+GetValue('_사원명'))
        }

        //배당자료수정여부 체크
        if ( (GetValue('isReadOnly') == "N") && (GetValue('_관리부서') == "Y")) {
            SetValue('01_배당자료수정가능여부', "Y")
        }

        MC_000_초기화_공통코드Query();


        SetValue('Combo_집합건물종류', GetValue('담보종류'));

        SetValue('Combo_사업부문', GetValue('사업부문'));


        MC_001_초기화_Combo_입력표();


        MC_001_초기화_Combo_보정표();


        MC_200_초기화_Combo_감정가1();


        MC_200_초기화_가격사례_항목();


        MC_200_초기화_감정가1_Query();


        MC_300_초기화__비준가격_항목();


        MC_300_초기화_감정가2_Query();


        MC_400_초기화_평가액();


        MC_공통보고서_조회();


        MC_001_초기화_재감정여부();


        MC_999_배당();


        RunButton('Command_응찰_00_메인');

        if ((GetValue('_재감정여부') == 'Y')) {
            return false;
        }


        MC_002_초기화_Query_Loading();

        MC_탁상감정_조회();
    },

    OnBefore : function() {
        RunQuery('Q_사업부문', {}, 'GET');
        RunQuery('Q_00_담보종류', {}, 'GET');
        RunQuery('Q_링크사이트', {}, 'GET');
        RunQuery('Q_00_구조', {}, 'GET');
        RunQuery('Q_00_본건과의거리', {}, 'GET');
    },

    OnAfter : function () {
        GetComponent('Command_저장').updateOptions({ isShow : GetString('isReadOnly') == 'N'});
        GetComponent('Command_배당처리').updateOptions({ isShow : GetString('isReadOnly') == 'N'});

        RunQuery('Q_공통보고서_트리', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');

        if (isEmpty(GetValue('감정순번'))) {
            SetValue('MkEdit_입력표_건축일자', Now());
        }
    },

    OnClose : function() {

    },

    OnRMouseDown : function() {

    },

    OnError : function() {

    }
}