const pageEvent = {
    init : async function() {
        await pageEvent.OnInitWindow();
        await pageEvent.OnBefore();
        await pageEvent.OnInitialize();
        await pageEvent.OnAfter();
    },

    OnInitialize : function() {
        GetComponent('RichEditor1').SetFontSize(8);

        if ( StrLength(GetValue('제목')) > 80 ) {
            SetValue('Label_Title',Left(GetValue('제목'),80)+"...")
        } else {
            SetValue('Label_Title',GetValue('제목'))
        }

        if ( GetValue('보고서구분') == "2500" ) {
            SetValue('화면선택',"2500")
        } else if ( GetValue('보고서구분') == "3000" ) {
            SetValue('화면선택',"3000")
        } else {
            SetValue('화면선택',"9999")
        }

        if (GetValue('화면선택') == '2500') {
            RunQuery('조회_조세', {
                '년도' : GetValue('년도'),
                '일련번호' : GetValue('일련번호'),
            }, 'GET');

            GetZoonData('조회_조세').GetRow(0, [
                { key: 'Edit_국세_가산금', value: 'NTAX_ADD_AMT' },
                { key: 'Edit_국세_부과원인', value: 'NTAX_LEVY_CAUSE' },
                { key: 'Edit_국세_부과일자', value: 'NTAX_LEVY_DATE' },
                { key: 'Edit_국세_체납금액', value: 'NTAX_ARRE_AMT' },
                { key: 'Edit_지방세_가산금', value: 'LRATE_ADD_AMT' },
                { key: 'Edit_지방세_부과원인', value: 'LRATE_LEVY_CAUSE' },
                { key: 'Edit_지방세_부과일자', value: 'LRATE_LEVY_DATE' },
                { key: 'Edit_지방세_체납금액', value: 'LRATE_ARRE_AMT' },
                { key: 'Edit_국세완납_부과일자', value: 'NTAX_ISSUE_DATE' },
                { key: 'Edit_지방세완납_부과일자', value: 'LRATE_ISSU_DATE' },
            ]);
        }

        if (GetValue('화면선택') == '3000') {
            RunQuery('조회', {
                '년도' : GetValue('년도'),
                '일련번호' : GetValue('일련번호'),
                '보고서구분' : GetValue('보고서구분'),
            }, 'GET');

            GetZoonData('조회').GetRow(0, [
                { key: 'Edit1', value: 'MENT_ITEMS' },
            ]);
        }

        if (GetValue('화면선택') == '9999') {
            RunQuery('조회', {
                '년도' : GetValue('년도'),
                '일련번호' : GetValue('일련번호'),
                '보고서구분' : GetValue('보고서구분'),
            }, 'GET');

            GetZoonData('조회').GetRow(0, [
                { key: '내용', value: 'MENT_ITEMS' },
            ]);

            SetValue('내용', StrReplace(GetValue('내용'),"&qt","'"));

            GetComponent('RichEditor1').SetRichEditorRTF(GetValue('내용'));
        }
    },

    OnInitWindow : function() {},
    OnBefore : function() {},
    OnClose : function() {},
    OnRMouseDown : function() {},
    OnError : function() {},
    OnAfter : function () {
        if (GetValue('화면선택') == '2500') {
            $('#content2').show();
        }

        if (GetValue('화면선택') == '3000') {
            $('#content3').show();
        }

        if (GetValue('화면선택') == '9999') {
            $('#content1').show();
        }
    },
}