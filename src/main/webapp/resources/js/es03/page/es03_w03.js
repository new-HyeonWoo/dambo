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
        GetComponent('조회_Combo_담보감정년도').SetCurSel(7);
    },

    OnBefore : function() {

    },

    OnAfter : function () {

    },

    OnClose : function() {

    },

    OnRMouseDown : function() {

    },

    OnError : function() {

    }
}