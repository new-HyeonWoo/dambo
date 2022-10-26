var PRT_41_응찰_기일내역 = new JsonZoonData('PRT_41_응찰_기일내역', {});
$(document).ready(function(){  
    RunQuery('PRT_41_응찰_기일내역', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    
    for(var i = 0; i < PRT_41_응찰_기일내역.getData().length; i++){
    	var PRT_41_응찰_기일내역_obj = PRT_41_응찰_기일내역.getData()[i];
    	PRT_41_응찰_기일내역_obj.금액 = fn_input_number(PRT_41_응찰_기일내역_obj.금액);
    	PRT_41_응찰_기일내역_obj.일자 = dateYyyyMmDd(PRT_41_응찰_기일내역_obj.일자);
    }
    
});