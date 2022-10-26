var PRT_02_입력표_보정표 = new JsonZoonData('PRT_02_입력표_보정표', {});
$(document).ready(function(){
    RunQuery('PRT_02_입력표_보정표', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    for(var i = 0; i <  PRT_02_입력표_보정표.getData().length; i++){
    	var PRT_02_입력표_보정표_obj =  PRT_02_입력표_보정표.getData()[i];
    	PRT_02_입력표_보정표_obj.평가가격 = fn_input_number(PRT_02_입력표_보정표_obj.평가가격);
    	PRT_02_입력표_보정표_obj.평가가격_단가 = fn_input_number(PRT_02_입력표_보정표_obj.평가가격_단가);
    	PRT_02_입력표_보정표_obj.평가가격_단가_평 = fn_input_number(PRT_02_입력표_보정표_obj.평가가격_단가_평);	
    	
    	PRT_02_입력표_보정표_obj.제1차예상최저입찰가 = fn_input_number(PRT_02_입력표_보정표_obj.제1차예상최저입찰가);
    	PRT_02_입력표_보정표_obj.제1차예상최저입찰가_단가 = fn_input_number(PRT_02_입력표_보정표_obj.제1차예상최저입찰가_단가);
    	PRT_02_입력표_보정표_obj.제1차예상최저입찰가_단가_평 = fn_input_number(PRT_02_입력표_보정표_obj.제1차예상최저입찰가_단가_평);	
    	
    	PRT_02_입력표_보정표_obj.예상낙찰가 = fn_input_number(PRT_02_입력표_보정표_obj.예상낙찰가);
    	PRT_02_입력표_보정표_obj.예상낙찰가_단가 = fn_input_number(PRT_02_입력표_보정표_obj.예상낙찰가_단가);
    	PRT_02_입력표_보정표_obj.예상낙찰가_단가_평 = fn_input_number(PRT_02_입력표_보정표_obj.예상낙찰가_단가_평);	
    }
    
	$('#prt_02_lowest').html(
		Mustache.render($('#prt_02_lowest_template').html(), {'list': PRT_02_입력표_보정표.getData()})
	);
	
});