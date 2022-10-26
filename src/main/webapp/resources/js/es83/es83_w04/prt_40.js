var PRT_40_응찰_마스타 = new JsonZoonData('PRT_40_응찰_마스타', {});
$(document).ready(function(){  
    RunQuery('PRT_40_응찰_마스타', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    

    for(var i = 0; i < PRT_40_응찰_마스타.getData().length; i++){
    	var PRT_40_응찰_마스타_obj = PRT_40_응찰_마스타.getData()[i];
    	PRT_40_응찰_마스타_obj.사항_청구금액 = fn_input_number(PRT_40_응찰_마스타_obj.사항_청구금액);
    	PRT_40_응찰_마스타_obj.사항_경매개시등기일 = dateYyyyMmDd(PRT_40_응찰_마스타_obj.사항_경매개시등기일);

    	PRT_40_응찰_마스타_obj.내용_법원감정가_토지_가격총액 = fn_input_number(PRT_40_응찰_마스타_obj.내용_법원감정가_토지_가격총액);
    	PRT_40_응찰_마스타_obj.내용_법원감정가_토지_단가 = fn_input_number(PRT_40_응찰_마스타_obj.내용_법원감정가_토지_단가);
    	PRT_40_응찰_마스타_obj.내용_법원감정가_토지_평당가격 = fn_input_number(PRT_40_응찰_마스타_obj.내용_법원감정가_토지_평당가격);
    	PRT_40_응찰_마스타_obj.내용_법원감정가_건물_가격총액 = fn_input_number(PRT_40_응찰_마스타_obj.내용_법원감정가_건물_가격총액);
    	PRT_40_응찰_마스타_obj.내용_법원감정가_건물_단가 = fn_input_number(PRT_40_응찰_마스타_obj.내용_법원감정가_건물_단가);
    	PRT_40_응찰_마스타_obj.내용_법원감정가_건물_평당가격 = fn_input_number(PRT_40_응찰_마스타_obj.내용_법원감정가_건물_평당가격);
    	PRT_40_응찰_마스타_obj.내용_법원감정가_합계_가격총액 = fn_input_number(PRT_40_응찰_마스타_obj.내용_법원감정가_합계_가격총액);
    	PRT_40_응찰_마스타_obj.내용_입찰예정가_금액 = fn_input_number(PRT_40_응찰_마스타_obj.내용_입찰예정가_금액);

    	PRT_40_응찰_마스타_obj.집계표_경매비용개산_적용금액 = fn_input_number(PRT_40_응찰_마스타_obj.집계표_경매비용개산_적용금액);
    	PRT_40_응찰_마스타_obj.집계표_선순위자배당금합계 = fn_input_number(PRT_40_응찰_마스타_obj.집계표_선순위자배당금합계);
    	PRT_40_응찰_마스타_obj.집계표_당사채권최고액합계 = fn_input_number(PRT_40_응찰_마스타_obj.집계표_당사채권최고액합계);
    	PRT_40_응찰_마스타_obj.집계표_당사배당금합계 = fn_input_number(PRT_40_응찰_마스타_obj.집계표_당사배당금합계);
    	PRT_40_응찰_마스타_obj.집계표_당사의미회수채권액 = fn_input_number(PRT_40_응찰_마스타_obj.집계표_당사의미회수채권액);

    	PRT_40_응찰_마스타_obj.수지4_총취득원가합계 = fn_input_number(PRT_40_응찰_마스타_obj.수지4_총취득원가합계);
    	PRT_40_응찰_마스타_obj.내용_입찰예정가_금액 = fn_input_number(PRT_40_응찰_마스타_obj.내용_입찰예정가_금액);
    	PRT_40_응찰_마스타_obj.수지4_제세금 = fn_input_number(PRT_40_응찰_마스타_obj.수지4_제세금);
    	PRT_40_응찰_마스타_obj.수지4_기타비용 = fn_input_number(PRT_40_응찰_마스타_obj.수지4_기타비용);
    	PRT_40_응찰_마스타_obj.수지5_보유수익합계 = fn_input_number(PRT_40_응찰_마스타_obj.수지5_보유수익합계);
    	PRT_40_응찰_마스타_obj.수지6_보유비용합계 = fn_input_number(PRT_40_응찰_마스타_obj.수지6_보유비용합계);
    	PRT_40_응찰_마스타_obj.수지3_추정예상매각금액 = fn_input_number(PRT_40_응찰_마스타_obj.수지3_추정예상매각금액);
    	PRT_40_응찰_마스타_obj.수지3_매각확신금액 = fn_input_number(PRT_40_응찰_마스타_obj.수지3_매각확신금액);
    	PRT_40_응찰_마스타_obj.수지7_처분비용합계 = fn_input_number(PRT_40_응찰_마스타_obj.수지7_처분비용합계);
    	PRT_40_응찰_마스타_obj.수지8_각항목별합계_비용합계 = fn_input_number(PRT_40_응찰_마스타_obj.수지8_각항목별합계_비용합계);
    	PRT_40_응찰_마스타_obj.수지8_각항목별합계_수익합계 = fn_input_number(PRT_40_응찰_마스타_obj.수지8_각항목별합계_수익합계);
    	PRT_40_응찰_마스타_obj.수지8_각항목별합계_예상손익 = fn_input_number(PRT_40_응찰_마스타_obj.수지8_각항목별합계_예상손익);
    	PRT_40_응찰_마스타_obj.수지8_최종적인전체손익 = fn_input_number(PRT_40_응찰_마스타_obj.수지8_최종적인전체손익);
    }
    
	$('#prt_40_auction').html(
		Mustache.render($('#prt_40_auction_template').html(), {'list': PRT_40_응찰_마스타.getData(),'prt41' : PRT_41_응찰_기일내역.getData()})
	);
	
	$('#prt_40_auction_scheduled').html(
		Mustache.render($('#prt_40_auction_scheduled_template').html(), {'list': PRT_40_응찰_마스타.getData()})
	);
	
	$('#prt_40_expected_dividend').html(
		Mustache.render($('#prt_40_expected_dividend_template').html(), {'list': PRT_40_응찰_마스타.getData()})
	);
	
	$('#prt_40_expected_balance').html(
		Mustache.render($('#prt_40_expected_balance_template').html(), {'list': PRT_40_응찰_마스타.getData()})
	);
		
	$('#prt_40_final_inflow').html(
		Mustache.render($('#prt_40_final_inflow_template').html(), {'list': PRT_40_응찰_마스타.getData()})
	);
    
});