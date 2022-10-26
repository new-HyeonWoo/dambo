var PRT_01_입력표 = new JsonZoonData('PRT_01_입력표_집합건물', {});
$(document).ready(function(){
    RunQuery('PRT_01_입력표_집합건물', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    for(var i = 0; i <  PRT_01_입력표.getData().length; i++){
    	var PRT_01_입력표_obj =  PRT_01_입력표.getData()[i];
    	PRT_01_입력표_obj.실거래가격_총액 = fn_input_number(PRT_01_입력표_obj.실거래가격_총액);
    	PRT_01_입력표_obj.실거래가격_단가 = fn_input_number(PRT_01_입력표_obj.실거래가격_단가);
    	PRT_01_입력표_obj.실거래가격_단가_평 = fn_input_number(PRT_01_입력표_obj.실거래가격_단가_평);
    	
    	PRT_01_입력표_obj.기준시가_총액 = fn_input_number(PRT_01_입력표_obj.기준시가_총액);
    	PRT_01_입력표_obj.기준시가_단가 = fn_input_number(PRT_01_입력표_obj.기준시가_단가);
    	PRT_01_입력표_obj.기준시가_단가_평 = fn_input_number(PRT_01_입력표_obj.기준시가_단가_평);
    }
    
	$('#prt_01_immovables').html(
		Mustache.render($('#prt_01_immovables_template').html(), {'list': PRT_01_입력표.getData()})
	);
	
	$('#prt_01_immovables_deposit').html(
		Mustache.render($('#prt_01_immovables_deposit_template').html(), {'list': PRT_01_입력표.getData()})
	);
	
});