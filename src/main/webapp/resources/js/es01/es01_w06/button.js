function fn_dataTable_detail(id ,yyyy, seq){
	const iconId = document.getElementById('iconId'+id).classList;
	var dataType = false;
	for(var i = 0; i < iconId.length; i++){
		if(iconId[i].indexOf('check') != -1){
			if(iconId[i].indexOf('fill') == -1){
				document.getElementById('iconId'+id).classList.remove('bi-file-check');
				document.getElementById('iconId'+id).className += ' bi-file-check-fill';
				dataType = true;
				break;
			}else{
				document.getElementById('iconId'+id).classList.remove('bi-file-check-fill');
				document.getElementById('iconId'+id).className += ' bi-file-check';
				dataType = false;
				break;
			}
		}
	}

	var dataTable_master = document.getElementById('dataInfo_tobody');
	var dataTableArr = new Array();
	
	// 디테일 정보
	var collateralListDetail = collateralListDetailAjax(yyyy, seq);
	
	// 헤더의 개수
	var widthCnt = 16;
	
	var dataTableNode = document.getElementById('dataInfo'+(Number(id)+1));
	for(var i = 0; i < dataTable_master.childNodes.length; i++){
		if(dataTable_master.childNodes[i].id == 'dataInfo'+id){
			if(dataType == true){
				for(var y = 0; y < collateralListDetail.selectCollateralListDetail.length; y++){
					var new_tr  = document.createElement('tr');
					var dataObj  = collateralListDetail.selectCollateralListDetail[y];
					for(var z = 0; z < widthCnt; z++){
						var new_td = document.createElement('td');
						if(z == '8'){
							new_td.innerHTML = dataObj.attr03;
						}else if(z == '9'){
							new_td.innerHTML = dataObj.name;
						}else if(z == '10'){
							new_td.innerHTML = dateYyyyMmDdHhNnSs(dataObj.apprDatetime);
						}
						new_tr.appendChild(new_td);
					}
					new_tr.setAttribute('class','detailDataInfo'+id);
					dataTable_master.insertBefore(new_tr, dataTableNode);
				}
			}else{
				var deleteTrCnt = document.getElementsByClassName('detailDataInfo'+id).length;
				var deleteTr = document.getElementsByClassName('detailDataInfo'+id);

				for(var w = deleteTrCnt -1 ; w >= 0; w--){
					deleteTr[w].remove();
				}
			}
		}
	}
}	

// 담보 목록 Detail
function collateralListDetailAjax(yyyy, seq) {
	var dataObj = new Object();
	let param ={
		"yyyy": yyyy,
		"seq": seq
	};
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es01/es01_w06_collateralListDetail.do",
		async: false,
		success: function(json) {
			if(json.response == true){
				dataObj = json;
			}else{
				alert('데이터 호출에 실패했습니다.');
			}
		}
	});
	return dataObj
}

//담보목록  DrillDown
function fn_dataTable_drillDown(yyyy, seq){
	var dataObj = new Object();
	let param ={
			"yyyy": yyyy,
			"seq": seq
	};
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es01/es01_w06_collateralListDrillDown.do",
		async: false,
		success: function(json) {
			if(json.response == true){
				dataObj =  json.selectCollateralListDrillDow;
			}else{
				alert('데이터 호출에 실패했습니다.');
			}
		}
	});
	
	if(dataObj.length == 1){
		document.getElementById('businessRequestPaymentDate').value = dateYyyyMmDd(dataObj[0].businessRequestPaymentDate);
		document.getElementById('businessPartReceiptClosing').value = dateYyyyMmDd(dataObj[0].businessPartReceiptClosing);
		document.getElementById('businessPartEmotionalClosing').value = dateYyyyMmDd(dataObj[0].businessPartEmotionalClosing);
		document.getElementById('managerPartPaymentDate').value = dateYyyyMmDd(dataObj[0].managerPartPaymentDate);
		document.getElementById('managingPartReceiptClosing').value = dateYyyyMmDd(dataObj[0].managingPartReceiptClosing);
		document.getElementById('managingPartEmotionalClosing').value = dateYyyyMmDd(dataObj[0].managingPartEmotionalClosing);
	}else{
		document.getElementById('businessRequestPaymentDate').value = '0000-00-00';
		document.getElementById('businessPartReceiptClosing').value = '0000-00-00';
		document.getElementById('businessPartEmotionalClosing').value = '0000-00-00';
		document.getElementById('managerPartPaymentDate').value = '0000-00-00';
		document.getElementById('managingPartReceiptClosing').value = '0000-00-00';
		document.getElementById('managingPartEmotionalClosing').value = '0000-00-00';
	}
}