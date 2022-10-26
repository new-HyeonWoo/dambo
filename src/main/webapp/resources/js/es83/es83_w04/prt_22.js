var PRT_22_토지평가가격등계산  = new JsonZoonData('PRT_22_토지평가가격등계산', {});
$(document).ready(function(){  
    RunQuery('PRT_22_토지평가가격등계산', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);

    if(PRT_22_토지평가가격등계산.getData() != null){
    	for(var i = 0; i <  PRT_22_토지평가가격등계산.getData().length; i++){
    		var PRT_22_토지평가가격등계산_obj =  PRT_22_토지평가가격등계산.getData()[i];
    		PRT_22_토지평가가격등계산_obj.평가가격 = fn_input_number(PRT_22_토지평가가격등계산_obj.평가가격);
    		PRT_22_토지평가가격등계산_obj.평가가격_단가 = fn_input_number(PRT_22_토지평가가격등계산_obj.평가가격_단가);
    		PRT_22_토지평가가격등계산_obj.평가가격_단가_평 = fn_input_number(PRT_22_토지평가가격등계산_obj.평가가격_단가_평);

    		PRT_22_토지평가가격등계산_obj.최종평가_금액 = fn_input_number(PRT_22_토지평가가격등계산_obj.최종평가_금액);
    		PRT_22_토지평가가격등계산_obj.최종평가_단가 = fn_input_number(PRT_22_토지평가가격등계산_obj.최종평가_단가);
    		PRT_22_토지평가가격등계산_obj.최종평가_단가_평 = fn_input_number(PRT_22_토지평가가격등계산_obj.최종평가_단가_평);

    		PRT_22_토지평가가격등계산_obj.예상낙찰가_금액 = fn_input_number(PRT_22_토지평가가격등계산_obj.예상낙찰가_금액);
    		PRT_22_토지평가가격등계산_obj.예상낙찰가_단가 = fn_input_number(PRT_22_토지평가가격등계산_obj.예상낙찰가_단가);
    		PRT_22_토지평가가격등계산_obj.예상낙찰가_단가_평 = fn_input_number(PRT_22_토지평가가격등계산_obj.예상낙찰가_단가_평);
    	}
    }


	$('#prt_22_appraised_price').html(
		Mustache.render($('#prt_22_appraised_price_template').html(), {'list': PRT_11_감정가격_시가_최저최고.getData(), 'prt11' : PRT_11_입력표_토지.getData(), 'prt22':PRT_22_토지평가가격등계산.getData() ,'prt11_d_tot' : PRT_11_입력표_토지_d_tot_obj} )
	);
	
});