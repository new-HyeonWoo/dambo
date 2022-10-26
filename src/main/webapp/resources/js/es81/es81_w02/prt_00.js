var PRT_00_담보마스타 = new JsonZoonData('PRT_00_담보마스타', {});
$(document).ready(function(){
    RunQuery('PRT_00_담보마스타', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
    for(var i = 0; i < PRT_00_담보마스타.getData().length; i++){
    	var PRT_00_담보마스타_obj = PRT_00_담보마스타.getData()[i];
    	PRT_00_담보마스타_obj.담보감정일자 = dateYyyyMmDd(PRT_00_담보마스타_obj.담보감정일자);
    }
    
	$('#prt_00_title').html(
		Mustache.render($('#prt_00_title_template').html(), {'list': PRT_00_담보마스타.getData()})
	);
	
	$('#prt_00_emotional_state').html(
		Mustache.render($('#prt_00_emotional_state_template').html(), {'list': PRT_00_담보마스타.getData()})
	);
	
	$('#prt_00_sentiment').html(
		Mustache.render($('#prt_00_sentiment_template').html(), {'list': PRT_00_담보마스타.getData()})
	);
	
	$('#prt_00_correspondent').html(
		Mustache.render($('#prt_00_correspondent_template').html(), {'list': PRT_00_담보마스타.getData()})
	);
	
});