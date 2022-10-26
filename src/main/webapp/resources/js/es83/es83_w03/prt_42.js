var PRT_42_응찰_전감정의개요 = new JsonZoonData('PRT_42_응찰_전감정의개요', {});
$(document).ready(function(){  
    RunQuery('PRT_42_응찰_전감정의개요', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);

    for(var i = 0; i < PRT_42_응찰_전감정의개요.getData().length; i++){
    	var PRT_42_응찰_전감정의개요_obj = PRT_42_응찰_전감정의개요.getData()[i];
    	PRT_42_응찰_전감정의개요_obj.지점_감정일 = dateYyyyMmDd(PRT_42_응찰_전감정의개요_obj.지점_감정일);
    	PRT_42_응찰_전감정의개요_obj.본사_감정일 = dateYyyyMmDd(PRT_42_응찰_전감정의개요_obj.본사_감정일);
    	
    	PRT_42_응찰_전감정의개요_obj.기준시가_총액 = fn_input_number(PRT_42_응찰_전감정의개요_obj.지점_제1차예상입찰가);
    	PRT_42_응찰_전감정의개요_obj.본사_제1차예상입찰가 = fn_input_number(PRT_42_응찰_전감정의개요_obj.본사_제1차예상입찰가);
    	
    	PRT_42_응찰_전감정의개요_obj.지점_당사채권금액 = fn_input_number(PRT_42_응찰_전감정의개요_obj.지점_당사채권금액);
    	PRT_42_응찰_전감정의개요_obj.본사_당사채권금액 = fn_input_number(PRT_42_응찰_전감정의개요_obj.본사_당사채권금액);
    }
    
	$('#prt_42_appraisal_summary').html(
			Mustache.render($('#prt_42_appraisal_summary_template').html(), {'list': PRT_42_응찰_전감정의개요.getData()})
	);
    
});