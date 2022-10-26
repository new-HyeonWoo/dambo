var PRT_11_감정가격_시가_최저최고 = new JsonZoonData('PRT_11_감정가격_시가_최저최고', {});
var PRT_11_입력표_토지 = new JsonZoonData('PRT_11_입력표_토지', {});
var PRT_11_입력표_토지_D = new JsonZoonData('PRT_11_입력표_토지_D', {});
var PRT_11_입력표_토지_d_tot_obj = new Object();
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
    	PRT_11_감정가격_시가_최저최고_obj.MAX_DAN = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MAX_DAN);
    	PRT_11_감정가격_시가_최저최고_obj.MAX_DAN_PY = fn_input_number(PRT_11_감정가격_시가_최저최고_obj.MAX_DAN_PY);
    }

    RunQuery('PRT_11_입력표_토지', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    for(var i = 0; i <  PRT_11_입력표_토지.getData().length; i++){
		var PRT_11_입력표_토지_obj =  PRT_11_입력표_토지.getData()[i];
		PRT_11_입력표_토지_obj.실거래가_총액 = fn_input_number(PRT_11_입력표_토지_obj.실거래가_총액);
		PRT_11_입력표_토지_obj.실거래가_단가 = fn_input_number(PRT_11_입력표_토지_obj.실거래가_단가);
		PRT_11_입력표_토지_obj.실거래가_단가_평 = fn_input_number(PRT_11_입력표_토지_obj.실거래가_단가_평);
	}
    
    RunQuery('PRT_11_입력표_토지_D', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    PRT_11_입력표_토지_d_tot_obj.토지_면적 = 0;
    PRT_11_입력표_토지_d_tot_obj.토지_면적_평 = 0;
    PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가 = 0; 
    PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가_평 = 0;
    PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가 = 0;
    
    PRT_11_입력표_토지_d_tot_obj.담보제공비율_전체면적 = 0;
    PRT_11_입력표_토지_d_tot_obj.담보제공비율_분자 = 0;
    PRT_11_입력표_토지_d_tot_obj.담보제공비율_분모 = 0; 
    PRT_11_입력표_토지_d_tot_obj.담보제공비율_비율 = 0;
    PRT_11_입력표_토지_d_tot_obj.담보제공비율_담보제공면적 = 0;
    
    if(PRT_11_입력표_토지_D.getData() != null ){
    	for(var i = 0; i <  PRT_11_입력표_토지_D.getData().length; i++){
    		var PRT_11_입력표_토지_D_obj =  PRT_11_입력표_토지_D.getData()[i];
    		PRT_11_입력표_토지_d_tot_obj.토지_면적 += Number(PRT_11_입력표_토지_D_obj.토지_면적);
    		PRT_11_입력표_토지_d_tot_obj.토지_면적_평 += Number(PRT_11_입력표_토지_D_obj.토지_면적_평);
    		PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가 += Number(PRT_11_입력표_토지_D_obj.토지_개별공시지가_단가);
    		PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가_평 += Number(PRT_11_입력표_토지_D_obj.토지_개별공시지가_단가_평);
    		PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가 += Number(PRT_11_입력표_토지_D_obj.토지_개별공시지가);
    		
    		PRT_11_입력표_토지_d_tot_obj.담보제공비율_전체면적 += Number(PRT_11_입력표_토지_D_obj.담보제공비율_전체면적);
    		PRT_11_입력표_토지_d_tot_obj.담보제공비율_분자 += Number(PRT_11_입력표_토지_D_obj.담보제공비율_분자);
    		PRT_11_입력표_토지_d_tot_obj.담보제공비율_분모 += Number(PRT_11_입력표_토지_D_obj.담보제공비율_분모);
    		PRT_11_입력표_토지_d_tot_obj.담보제공비율_비율 += Number(PRT_11_입력표_토지_D_obj.담보제공비율_비율);
    		PRT_11_입력표_토지_d_tot_obj.담보제공비율_담보제공면적 += Number(PRT_11_입력표_토지_D_obj.담보제공비율_담보제공면적);

    		
    		PRT_11_입력표_토지_D_obj.토지_개별공시지가_단가 = fn_input_number(PRT_11_입력표_토지_D_obj.토지_개별공시지가_단가);
    		PRT_11_입력표_토지_D_obj.토지_개별공시지가_단가_평 = fn_input_number(PRT_11_입력표_토지_D_obj.토지_개별공시지가_단가_평);
    		PRT_11_입력표_토지_D_obj.토지_개별공시지가 = fn_input_number(PRT_11_입력표_토지_D_obj.토지_개별공시지가);
    		
    		PRT_11_입력표_토지_D_obj.담보제공비율_전체면적 = fn_input_number_toFixed(PRT_11_입력표_토지_D_obj.담보제공비율_전체면적);
    		PRT_11_입력표_토지_D_obj.담보제공비율_분자 = fn_input_number_toFixed(PRT_11_입력표_토지_D_obj.담보제공비율_분자);
    		PRT_11_입력표_토지_D_obj.담보제공비율_분모 = fn_input_number_toFixed(PRT_11_입력표_토지_D_obj.담보제공비율_분모);
    		PRT_11_입력표_토지_D_obj.담보제공비율_비율 = fn_input_number_toFixed(PRT_11_입력표_토지_D_obj.담보제공비율_비율);
    		PRT_11_입력표_토지_D_obj.담보제공비율_담보제공면적 = fn_input_number_toFixed(PRT_11_입력표_토지_D_obj.담보제공비율_담보제공면적);

    		PRT_11_입력표_토지_D_obj.토지_면적 = fn_input_number_toFixed(PRT_11_입력표_토지_D_obj.토지_면적);
    		PRT_11_입력표_토지_D_obj.토지_면적_평 = fn_input_number_toFixed(PRT_11_입력표_토지_D_obj.토지_면적_평);
    	}
    }
    
	PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가 = fn_input_number(PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가);
	PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가_평 = fn_input_number(PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가_단가_평);
	PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가 = fn_input_number(PRT_11_입력표_토지_d_tot_obj.토지_개별공시지가);
	PRT_11_입력표_토지_d_tot_obj.담보제공비율_전체면적 = fn_input_number_toFixed(PRT_11_입력표_토지_d_tot_obj.담보제공비율_전체면적);
	PRT_11_입력표_토지_d_tot_obj.담보제공비율_분자 = fn_input_number_toFixed(PRT_11_입력표_토지_d_tot_obj.담보제공비율_분자);
	PRT_11_입력표_토지_d_tot_obj.담보제공비율_분모 = fn_input_number_toFixed(PRT_11_입력표_토지_d_tot_obj.담보제공비율_분모);
	PRT_11_입력표_토지_d_tot_obj.담보제공비율_비율 = fn_input_number_toFixed(PRT_11_입력표_토지_d_tot_obj.담보제공비율_비율);
	PRT_11_입력표_토지_d_tot_obj.담보제공비율_담보제공면적 = fn_input_number_toFixed(PRT_11_입력표_토지_d_tot_obj.담보제공비율_담보제공면적);
	PRT_11_입력표_토지_d_tot_obj.토지_면적 = fn_input_number_toFixed(PRT_11_입력표_토지_d_tot_obj.토지_면적);
	PRT_11_입력표_토지_d_tot_obj.토지_면적_평 = fn_input_number_toFixed(PRT_11_입력표_토지_d_tot_obj.토지_면적_평);

  
	$('#prt_11_immovables').html(
		Mustache.render($('#prt_11_immovables_template').html(), {'prt11': PRT_11_입력표_토지.getData() ,'prt11_d': PRT_11_입력표_토지_D.getData(), 'prt11_d_tot': PRT_11_입력표_토지_d_tot_obj ,'prt02' : PRT_02_보정표.getData()} )
	);
    
	
});