function fn_DataTable_Insert_Button(){
	var header = ['buseo','fullname','sabun'];
	
	var dataTable_master = document.getElementById('dataTable_tobody').children;
	var dataTableArr = new Array();
	
	for(var i = 0; i < dataTable_master.length; i++){
		if(dataTable_master[i].classList.contains('table-active') == true){
			dataTableArr.push(dataTable_master[i].id);
		}
	}
	
	if(dataTableArr.length == 0){
		return alert('지정된 데이터가 없습니다.');
	}

	var updateIdArr = dataTableArr;

	var updateDataArr = new Array();
	if(updateIdArr.length != 0){
		for(var y = 0; y < updateIdArr.length; y++){
			var updateDataObj = new Object();
			var cnt = 0;
			for(var x = 0; x < header.length; x++){
				var dataObj = document.getElementById(header[x]+updateIdArr[y]).value;
				
				if(header[x] == 'sabun'){
					var dataObjCnt = document.getElementById(header[x]+updateIdArr[y]).options.length;
					if(dataObjCnt < 2){
						if(dataObj == null || dataObj == ''){
							continue;
						}
					}
				}
				updateDataObj[header[x]] = dataObj;
				cnt++;
			}

			if(cnt == header.length){
				updateDataObj.jum_code = updateDataObj.buseo
				updateDataArr.push(updateDataObj);				
			}
		}
	}
	
	if(updateDataArr.length == 0){
		return alert('변경 된 데이터가 없습니다.');
	}
	
	let param ={ "updataData": updateDataArr };
	
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es00/es00_w02_save.do",
		success: function(json) {
			alert('데이터 변경에 성공하였습니다.');
			return fn_Search_Button();
		}
	});
}


function fn_Row_DataInfo(evt){
	var classList = document.getElementById(evt).classList;

	if(classList.value.indexOf('table-active') == -1){
		document.getElementById(evt).className += ' table-active';
	}else{
		document.getElementById(evt).classList.remove('table-active');
	}	
}



