var PRT_21_건물평가가격등계산 = new JsonZoonData('PRT_21_건물평가가격등계산', {});

$(document).ready(function(){  
    RunQuery('PRT_21_건물평가가격등계산', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);

	for(var i = 0; i <  PRT_21_건물평가가격등계산.getData().length; i++){
		var PRT_21_건물평가가격등계산_obj =  PRT_21_건물평가가격등계산.getData()[i];

		PRT_21_건물평가가격등계산_obj.평가가격 = fn_input_number(PRT_21_건물평가가격등계산_obj.평가가격);
		PRT_21_건물평가가격등계산_obj.평가가격_단가 = fn_input_number(PRT_21_건물평가가격등계산_obj.평가가격_단가);
		PRT_21_건물평가가격등계산_obj.평가가격_단가_평 = fn_input_number(PRT_21_건물평가가격등계산_obj.평가가격_단가_평);
		
		PRT_21_건물평가가격등계산_obj.최종평가_금액 = fn_input_number(PRT_21_건물평가가격등계산_obj.최종평가_금액);
		PRT_21_건물평가가격등계산_obj.최종평가_단가 = fn_input_number(PRT_21_건물평가가격등계산_obj.최종평가_단가);
		PRT_21_건물평가가격등계산_obj.최종평가_단가_평 = fn_input_number(PRT_21_건물평가가격등계산_obj.최종평가_단가_평);
	
		PRT_21_건물평가가격등계산_obj.예상낙찰가_단가 = fn_input_number(PRT_21_건물평가가격등계산_obj.예상낙찰가_단가);
		PRT_21_건물평가가격등계산_obj.예상낙찰가_금액 = fn_input_number(PRT_21_건물평가가격등계산_obj.예상낙찰가_금액);
		PRT_21_건물평가가격등계산_obj.예상낙찰가_단가_평 = fn_input_number(PRT_21_건물평가가격등계산_obj.예상낙찰가_단가_평);
	}

});