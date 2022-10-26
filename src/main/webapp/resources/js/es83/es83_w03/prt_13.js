var PRT_13_입력표_건물담보제공비율 = new JsonZoonData('PRT_13_입력표_건물담보제공비율', {});
$(document).ready(function(){  
    RunQuery('PRT_13_입력표_건물담보제공비율', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);

    var PRT_13_입력표_건물담보제공비율_tot_obj = new Object();
    PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_전체면적 = 0;
    PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분자 = 0;
    PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분모 = 0; 
    PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_비율 = 0;
    PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_담보제공면적 = 0;
    
	for(var i = 0; i <  PRT_13_입력표_건물담보제공비율.getData().length; i++){
		var PRT_13_입력표_건물담보제공비율_obj =  PRT_13_입력표_건물담보제공비율.getData()[i];
		PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_전체면적 += Number(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_전체면적);
		PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분자 += Number(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_분자);
		PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분모 += Number(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_분모);
		PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_비율 += Number(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_비율);
		PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_담보제공면적 += Number(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_담보제공면적);
		
		PRT_13_입력표_건물담보제공비율_obj.담보제공비율_전체면적 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_전체면적);
		PRT_13_입력표_건물담보제공비율_obj.담보제공비율_분자 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_분자);
		PRT_13_입력표_건물담보제공비율_obj.담보제공비율_분모 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_분모);
		PRT_13_입력표_건물담보제공비율_obj.담보제공비율_비율 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_비율);
		PRT_13_입력표_건물담보제공비율_obj.담보제공비율_담보제공면적 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_obj.담보제공비율_담보제공면적);
	}
	
	PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_전체면적 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_전체면적);
	PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분자 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분자);
	PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분모 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_분모);
	PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_비율 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_비율);
	PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_담보제공면적 = fn_input_number_toFixed(PRT_13_입력표_건물담보제공비율_tot_obj.담보제공비율_담보제공면적);

});