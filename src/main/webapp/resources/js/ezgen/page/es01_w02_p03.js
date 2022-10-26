const pageEvent = {
    init : async function() {
        await pageEvent.OnInitWindow();
        await pageEvent.OnBefore();
        await pageEvent.OnInitialize();
        await pageEvent.OnAfter();
    },

    OnInitialize : function() {
        pageEvent.OnInitializeByPage();
    },

    OnInitializeByPage : function (page = "1") {
        switch (page) {
            case '1':
                pageEvent.page1();
                break;
            case '2':
                pageEvent.page2();
                break;
            case '3':
                pageEvent.page3();
                break;
            case '4':
                pageEvent.page4();
                break;
            case '5':
                pageEvent.page5();
                break;
            default :
                return false;
        }
    },

    page1 : function () {
        RunQuery('조회_의견', {
            '년도' : GetValue('년도'),
            '일련번호' : GetValue('일련번호'),
        }, 'GET');

        GetZoonData('조회_의견').GetRows('', [
            { key: '0_의견_Arr', value: 'MENT_ITEMS' }]);
        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '0001';
        });

        MC_0_의견_Single();

        SetValue('0_의견_1', GetValue('0_의견'));

        GetComponent('Edit_0_1').SetRichEditorRTF(GetValue('0_의견'));

        GetZoonData("조회_의견").FindIndex("idx",
            (row) => {
                return row['CD_CODE'] == '0002';
            });
        MC_0_의견_Single();
        GetComponent('RichEditor1').SetRichEditorRTF(GetValue('0_의견_1'));
        GetComponent('Edit_0_2').SetRichEditorRTF(GetValue('0_의견'));

        GetZoonData("조회_의견").FindIndex("idx",
            (row) => {
                return row['CD_CODE'] == '0003';
            });
        MC_0_의견_Single();
        GetComponent('Edit_0_3').SetRichEditorRTF(GetValue('0_의견'));

        GetZoonData("조회_의견").FindIndex("idx",
            (row) => {
                return row['CD_CODE'] == '0004';
            });
        MC_0_의견_Single();
        GetComponent('Edit_0_4').SetRichEditorRTF(GetValue('0_의견'));

        GetZoonData("조회_의견").FindIndex("idx",
            (row) => {
                return row['CD_CODE'] == '0005';
            });
        MC_0_의견_Single();
        GetComponent('Edit_0_5').SetRichEditorRTF(GetValue('0_의견'));
    },

    page2 : function () {
        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2120';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_1_2').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2130';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_1_3').SetRichEditorRTF(GetValue('0_의견'));

        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2200';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_2').SetRichEditorRTF(GetValue('0_의견'));

        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2410';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_4_1').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2301';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_3_1').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2302';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_3_2').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2303';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_3_3').SetRichEditorRTF(GetValue('0_의견'));
    },

    page3 : function () {
        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2420';
        });
        MC_0_의견_Single();
        // SetValue('Edit_1_4_2',GetValue('0_의견'));
        GetComponent('Edit_1_4_2').SetRichEditorRTF(GetValue('0_의견'));
        SetValue('0_의견_1', GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2430';
        });
        MC_0_의견_Single();
        // SetValue('Edit_1_4_3',GetValue('0_의견'));
        GetComponent('Edit_1_4_3').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2440';
        });
        MC_0_의견_Single();
        // SetValue('Edit_1_4_4',GetValue('0_의견'));
        GetComponent('Edit_1_4_4').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndexArray('idx', (row) => {
            return row['CD_CODE'] == '2450';
        });
        MC_0_의견_Single();
        // SetValue('Edit_1_4_5',GetValue('0_의견'));
        GetComponent('Edit_1_4_5').SetRichEditorRTF(GetValue('0_의견'));

        SetValue('0_의견_1',GetValue('0_의견') + '테스트' + GetValue('0_의견_1'));

        RunQuery('조회_조세', {
            '년도' : GetValue('년도'),
            '일련번호' : GetValue('일련번호'),
        }, 'GET');

        GetZoonData('조회_조세').GetRows('0', [
            {key: 'Edit_국세_가산금', value: 'NTAX_ADD_AMT'},
            {key: 'Edit_국세_부과원인', value: 'NTAX_LEVY_CAUSE'},
            {key: 'Edit_국세_부과일자', value: 'NTAX_LEVY_DATE'},
            {key: 'Edit_국세_체납금액', value: 'NTAX_ARRE_AMT'},
            {key: 'Edit_지방세_가산금', value: 'LRATE_ADD_AMT'},
            {key: 'Edit_지방세_부과원인', value: 'LRATE_LEVY_CAUSE'},
            {key: 'Edit_지방세_부과일자', value: 'LRATE_LEVY_DATE'},
            {key: 'Edit_지방세_체납금액', value: 'LRATE_ARRE_AMT'},
            {key: 'Edit_국세완납_부과일자', value: 'NTAX_ISSUE_DATE'},
            {key: 'Edit_지방세완납_부과일자', value: 'LRATE_ISSU_DATE'},
        ]);

    },

    page4 : function () {
        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '1001';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_1').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '1002';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_2').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '1003';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_3').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '1004';
        });
        MC_0_의견_Single();
        GetComponent('Edit_1_4').SetRichEditorRTF(GetValue('0_의견'));
    },

    page5 : function () {
        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2111';
        });
        MC_0_의견_Single();
        GetComponent('Edit_2_1_1_1').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2112';
        });
        MC_0_의견_Single();
        GetComponent('Edit_2_1_1_2').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2113';
        });
        MC_0_의견_Single();
        GetComponent('Edit_2_1_1_3').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2114';
        });
        MC_0_의견_Single();
        GetComponent('Edit_2_1_1_4').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2115';
        });
        MC_0_의견_Single();
        GetComponent('Edit_2_1_1_5').SetRichEditorRTF(GetValue('0_의견'));


        GetZoonData('조회_의견').FindIndex('idx', (row) => {
            return row['CD_CODE'] == '2116';
        });
        MC_0_의견_Single();
        GetComponent('Edit_2_1_1_6').SetRichEditorRTF(GetValue('0_의견'));
    },

    OnInitWindow : function() {},
    OnBefore : function() {},
    OnClose : function() {},
    OnRMouseDown : function() {},
    OnError : function() {},
    OnAfter : function () {},
}