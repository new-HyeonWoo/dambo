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


        GetComponent('Combo_부터_년도').SetCurSel(-1.0);


        GetComponent('Combo_부터_월').SetCurSel(-1.0);


        GetComponent('Combo_부터_일자').SetCurSel(-1.0);


        GetComponent('Combo_까지_년도').SetCurSel(-1.0);


        GetComponent('Combo_까지_월').SetCurSel(-1.0);


        GetComponent('Combo_까지_일자').SetCurSel(-1.0);


        GetComponent('Combo_우편번호_시도').SetCurSel(-1.0);


        GetComponent('Combo_우편번호_구군').SetCurSel(-1.0);


        GetComponent('Combo_우편번호_동').SetCurSel(-1.0);


        RunQuery('Q_부서목록', {}, 'GET');


        RunQuery('Q_담보종류', {}, 'GET');


        RunQuery('Q_지목', {}, 'GET');


        MC_담보감정일자_초기화();
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
