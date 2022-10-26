var PRT_02_보정표 = new JsonZoonData('PRT_02_보정표', {});
$(document).ready(function(){
    RunQuery('PRT_02_보정표', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    

});