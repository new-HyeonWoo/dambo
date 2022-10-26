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
        RunQuery('Q_우편번호_시도', {}, 'GET');

        GetComponent('Combo_부터_년도').SetCurSel(-1);
        GetComponent('Combo_부터_월').SetCurSel(-1);
        GetComponent('Combo_부터_일자').SetCurSel(-1);
        GetComponent('Combo_까지_년도').SetCurSel(-1);
        GetComponent('Combo_까지_월').SetCurSel(-1);
        GetComponent('Combo_까지_일자').SetCurSel(-1);
        GetComponent('Combo_우편번호_시도').SetCurSel(-1);
        GetComponent('Combo_우편번호_구군').SetCurSel(-1);
        GetComponent('Combo_우편번호_동').SetCurSel(-1);

        RunQuery('Q_부서목록', {}, 'GET');
        RunQuery('Q_담보종류', {}, 'GET');
        RunQuery('Q_지목', {}, 'GET');

        MC_담보감정일자_초기화();

        SetValue('Edit_최종평가가격_최저', 0);
        SetValue('Edit_최종평가가격_최고', 10000000000);
        SetValue('Edit_낙찰가율_최저', 0);
        SetValue('Edit_낙찰가율_최고', 100);
        SetValue('Edit_면적_토지_최저', 0);
        SetValue('Edit_면적_토지_최고', 100000);
        SetValue('Edit_면적_건물_최고', 100000);
        SetValue('Edit_면적_건물_최저', 0);
        SetValue('Group_자체및업소', '%');
        SetValue('Group_합산_기간', 0);
        SetValue('Group_합산_지점', 0);
        SetValue('Group_합산_담보종류', 0);
        SetValue('Group_합산_업소구분', 0);
        SetValue('Check_소재지', 'A');
        SetValue('Check_담보종류', 'A');
        SetValue('Check_지목별', 'A');

        RunButton('Command_지점_이벤트');
        RunButton('Command_담보_이벤트');
        RunButton('Command_지목_이벤트');
    },

    OnBefore : function() {},

    OnAfter : function () {
    },

    OnClose : function() {

    },

    OnRMouseDown : function() {

    },

    OnError : function() {

    }
}
