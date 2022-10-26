var PRT_31_담보사항_선순위내역 = new JsonZoonData('PRT_31_담보사항_선순위내역', {});
var PRT_31_담보사항_당사설정 = new JsonZoonData('PRT_31_담보사항_당사설정', {});
var PRT_31_담보사항_선순위말소예정내역 = new JsonZoonData('PRT_31_담보사항_선순위말소예정내역', {});
var PRT_31_담보사항_담보여력및초과부족설정 = new JsonZoonData('PRT_31_담보사항_담보여력및초과부족설정', {});
$(document).ready(function(){
    RunQuery('PRT_31_담보사항_선순위내역', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    var PRT_31_담보사항_선순위내역_단독담보_tot = 0;
    var PRT_31_담보사항_선순위내역_공동담보_tot = 0;
    for(var i = 0; i <  PRT_31_담보사항_선순위내역.getData().length; i++){
    	var PRT_31_담보사항_선순위내역_obj =  PRT_31_담보사항_선순위내역.getData()[i];
    	PRT_31_담보사항_선순위내역_단독담보_tot += Number(PRT_31_담보사항_선순위내역_obj.채권금액_단독담보);
    	PRT_31_담보사항_선순위내역_공동담보_tot += Number(PRT_31_담보사항_선순위내역_obj.채권금액_공동담보);
    	PRT_31_담보사항_선순위내역_obj.권리발생일자 =  dateYyyyMmDd(PRT_31_담보사항_선순위내역_obj.권리발생일자);
    	PRT_31_담보사항_선순위내역_obj.채권금액_단독담보 = fn_input_number(PRT_31_담보사항_선순위내역_obj.채권금액_단독담보);
    	PRT_31_담보사항_선순위내역_obj.채권금액_공동담보 = fn_input_number(PRT_31_담보사항_선순위내역_obj.채권금액_공동담보);
    	
    }
    var PRT_31_담보사항_선순위내역_tot = [{'PRT_31_담보사항_선순위내역_단독담보_tot' : fn_input_number(PRT_31_담보사항_선순위내역_단독담보_tot) , 'PRT_31_담보사항_선순위내역_공동담보_tot' : fn_input_number(PRT_31_담보사항_선순위내역_공동담보_tot)}];

    RunQuery('PRT_31_담보사항_선순위말소예정내역', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    var PRT_31_담보사항_선순위말소예정내역_단독담보_tot = 0;
    var PRT_31_담보사항_선순위말소예정내역_공동담보_tot = 0;
    for(var i = 0; i <  PRT_31_담보사항_선순위말소예정내역.getData().length; i++){
    	var PRT_31_담보사항_선순위말소예정내역_obj =  PRT_31_담보사항_선순위말소예정내역.getData()[i];
    	PRT_31_담보사항_선순위말소예정내역_단독담보_tot += Number(PRT_31_담보사항_선순위말소예정내역_obj.채권금액_단독담보);
    	PRT_31_담보사항_선순위말소예정내역_공동담보_tot += Number(PRT_31_담보사항_선순위말소예정내역_obj.채권금액_공동담보);
    	PRT_31_담보사항_선순위말소예정내역_obj.권리발생일자 =  dateYyyyMmDd(PRT_31_담보사항_선순위말소예정내역_obj.권리발생일자);
    	PRT_31_담보사항_선순위말소예정내역_obj.채권금액_단독담보 = fn_input_number(PRT_31_담보사항_선순위말소예정내역_obj.채권금액_단독담보);
    	PRT_31_담보사항_선순위말소예정내역_obj.채권금액_공동담보 = fn_input_number(PRT_31_담보사항_선순위말소예정내역_obj.채권금액_공동담보);
    }
    var PRT_31_담보사항_선순위말소예정내역_tot = [{'PRT_31_담보사항_선순위말소예정내역_단독담보_tot' : fn_input_number(PRT_31_담보사항_선순위말소예정내역_단독담보_tot) , 'PRT_31_담보사항_선순위말소예정내역_공동담보_tot' : fn_input_number(PRT_31_담보사항_선순위말소예정내역_공동담보_tot)}];

    RunQuery('PRT_31_담보사항_담보여력및초과부족설정', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    for(var i = 0; i <  PRT_31_담보사항_담보여력및초과부족설정.getData().length; i++){
    	var PRT_31_담보사항_담보여력및초과부족설정_obj =  PRT_31_담보사항_담보여력및초과부족설정.getData()[i];
    	PRT_31_담보사항_담보여력및초과부족설정_obj.채권금액 = fn_input_number(PRT_31_담보사항_담보여력및초과부족설정_obj.채권금액);
    	PRT_31_담보사항_담보여력및초과부족설정_obj.담보여력 = fn_input_number(PRT_31_담보사항_담보여력및초과부족설정_obj.담보여력);
    }
    
    RunQuery('PRT_31_담보사항_당사설정', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    for(var i = 0; i <  PRT_31_담보사항_당사설정.getData().length; i++){
    	var PRT_31_담보사항_당사설정_obj =  PRT_31_담보사항_당사설정.getData()[i];
    	PRT_31_담보사항_당사설정_obj.최종순위 = fn_input_number(PRT_31_담보사항_당사설정_obj.최종순위);
    	PRT_31_담보사항_당사설정_obj.채권금액 = fn_input_number(PRT_31_담보사항_당사설정_obj.채권금액);
    }

	$('#prt_31_rank_history').html(
		Mustache.render($('#prt_31_rank_history_template').html(), {'list': PRT_31_담보사항_선순위내역.getData(), 'list_tot': PRT_31_담보사항_선순위내역_tot} )
	);
    
	$('#prt_31_rank_history_delete').html(
		Mustache.render($('#prt_31_rank_history_delete_template').html(), {'list': PRT_31_담보사항_선순위말소예정내역.getData() ,'list_tot' : PRT_31_담보사항_선순위말소예정내역_tot} )
	);
    
	$('#prt_31_our_settings').html(
		Mustache.render($('#prt_31_our_settings_template').html(), {'list': PRT_31_담보사항_당사설정.getData(), 'prt31' : PRT_31_담보사항_담보여력및초과부족설정.getData()} )
	);
	
	$('#prt_31_lack_of_excess').html(
		Mustache.render($('#prt_31_lack_of_excess_template').html(), {'list': PRT_31_담보사항_담보여력및초과부족설정.getData()} )
	);
});