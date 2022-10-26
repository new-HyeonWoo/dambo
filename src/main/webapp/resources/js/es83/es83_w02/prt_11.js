var PRT_11_감정가격_시가_최저최고 = new JsonZoonData('PRT_11_감정가격_시가_최저최고', {});
$(document).ready(function(){  
    RunQuery('PRT_11_감정가격_시가_최저최고', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);

    for(var i = 0; i <  PRT_11_감정가격_시가_최저최고.getData().length; i++){
    	var PRT_11_감정가격_시가_최저최고_obj =  PRT_11_감정가격_시가_최저최고.getData()[i];
    	PRT_11_감정가격_시가_최저최고_obj.MIN_AMT = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MIN_AMT);
    	PRT_11_감정가격_시가_최저최고_obj.MIN_DAN = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MIN_DAN);
    	PRT_11_감정가격_시가_최저최고_obj.MIN_DAN_PY = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MIN_DAN_PY);
    	
    	PRT_11_감정가격_시가_최저최고_obj.MAX_AMT = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MAX_AMT);
    	PRT_11_감정가격_시가_최저최고_obj.MAN_DAN = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MAN_DAN);
    	PRT_11_감정가격_시가_최저최고_obj.MAN_DAN_PY = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MAN_DAN_PY);
    }
    
	$('#prt_11_appraised_price').html(
		Mustache.render($('#prt_11_appraised_price_template').html(), {'list': PRT_11_감정가격_시가_최저최고.getData() ,'prt01' : PRT_01_입력표.getData(),'prt02' : PRT_02_입력표_보정표.getData()  } )
	);
});