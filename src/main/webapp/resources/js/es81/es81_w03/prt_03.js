var PRT_03_입력표_규제사항개관 = new JsonZoonData('PRT_03_입력표_규제사항개관', {});
$(document).ready(function(){  
    RunQuery('PRT_03_입력표_규제사항개관', {
        'YYYY' : yyyy,
        'SEQ': seq
    }, 'GET', false);
    
	$('#prt_03_immovables').html(
		Mustache.render($('#prt_03_immovables_template').html(), {'list': PRT_03_입력표_규제사항개관.getData()})
	);
});