var PRT_12_입력표_건물 = new JsonZoonData('PRT_12_입력표_건물', {});
var PRT_12_입력표_건물_D = new JsonZoonData('PRT_12_입력표_건물_D', {});

$(document).ready(function(){  
    RunQuery('PRT_12_입력표_건물', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);

	for(var i = 0; i <  PRT_12_입력표_건물.getData().length; i++){
		var PRT_12_입력표_건물_obj =  PRT_12_입력표_건물.getData()[i];

		PRT_12_입력표_건물_obj.등기부등본상의시세_총액 = fn_input_number(PRT_12_입력표_건물_obj.등기부등본상의시세_총액);
		PRT_12_입력표_건물_obj.등기부등본상의시세 = fn_input_number(PRT_12_입력표_건물_obj.등기부등본상의시세);
		PRT_12_입력표_건물_obj.등기부등본상의시세_단가 = fn_input_number(PRT_12_입력표_건물_obj.등기부등본상의시세_단가);
		
		PRT_12_입력표_건물_obj.개별주택가격_총액 = fn_input_number(PRT_12_입력표_건물_obj.개별주택가격_총액);
		PRT_12_입력표_건물_obj.개별주택가격_단가 = fn_input_number(PRT_12_입력표_건물_obj.개별주택가격_단가);
		PRT_12_입력표_건물_obj.개별주택가격_단가_평 = fn_input_number(PRT_12_입력표_건물_obj.개별주택가격_단가_평);
	}
    
    RunQuery('PRT_12_입력표_건물_D', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);

    var PRT_12_입력표_건물_d_tot_obj = new Object();
    PRT_12_입력표_건물_d_tot_obj.건물의면적 = 0;
    PRT_12_입력표_건물_d_tot_obj.건물의면적_평 = 0;
    
	for(var i = 0; i <  PRT_12_입력표_건물_D.getData().length; i++){
		var PRT_12_입력표_건물_D_obj =  PRT_12_입력표_건물_D.getData()[i];
		PRT_12_입력표_건물_d_tot_obj.건물의면적  += Number(PRT_12_입력표_건물_D_obj.건물의면적);
		PRT_12_입력표_건물_d_tot_obj.건물의면적_평  += Number(PRT_12_입력표_건물_D_obj.건물의면적_평);
		
		PRT_12_입력표_건물_D_obj.건축년도 = dateYyyyMmDd(PRT_12_입력표_건물_D_obj.건축년도);
		PRT_12_입력표_건물_D_obj.건물의면적 = fn_input_number_toFixed(PRT_12_입력표_건물_D_obj.건물의면적);
		PRT_12_입력표_건물_D_obj.건물의면적_평 = fn_input_number_toFixed(PRT_12_입력표_건물_D_obj.건물의면적_평);
	}

	PRT_12_입력표_건물_d_tot_obj.건물의면적 = fn_input_number_toFixed(PRT_12_입력표_건물_d_tot_obj.건물의면적);
	PRT_12_입력표_건물_d_tot_obj.건물의면적_평 = fn_input_number_toFixed(PRT_12_입력표_건물_d_tot_obj.건물의면적_평);
	 
	
	$('#prt_12_d_immovables').html(
		Mustache.render($('#prt_12_d_immovables_template').html(), {'list': PRT_12_입력표_건물_D.getData() , 'prt12': PRT_12_입력표_건물.getData(), 'prt12_d_tot':PRT_12_입력표_건물_d_tot_obj } )
	);
	
	$('#prt_12_immovables').html(
		Mustache.render($('#prt_12_immovables_template').html(), {'list': PRT_12_입력표_건물.getData()} )
	);

});