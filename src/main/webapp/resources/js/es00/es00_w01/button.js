
function fn_Row_DataInfo(evt){
	var classList = document.getElementById(evt).classList;

	if(classList.value.indexOf('table-active') == -1){
		document.getElementById(evt).className += ' table-active';
	}else{
		document.getElementById(evt).classList.remove('table-active');
	}	
}

// 인설트 체크
var row_cnt = 0;
function fn_DataTable_Adit_Button(){
	var dataTable_tobody = document.getElementById("dataTable_tobody");
	var new_tr = document.createElement('tr');
	var header = ['cdcode','cddesc','orderseq','useyn','attr01','attr02','attr03','attr04','attr05','attr06','attr07','attr08','attr10'];
	for(var i = 0; i < header.length; i++){
		var new_td = document.createElement('td');
		if(i != 3){
			var new_input = document.createElement('input');
			new_td.setAttribute('class', 'listtd');
			new_input.setAttribute('class', 'form-control input-block ps-5');
			new_input.setAttribute('style', 'height: 10px');
			new_input.setAttribute('id', 'insert'+row_cnt+header[i]);	
			if(i == 0 || i == 2){
				new_input.setAttribute('onkeypress', 'return checkNumber(event)');
			}
			new_td.appendChild(new_input);
		}else{
			var new_select = document.createElement('select');
			new_select.setAttribute('class', 'form-select fs-7 lh-1 fw-bolder py-1');
			new_select.setAttribute('id', 'insert'+row_cnt+header[i]);	
			for(var y = 0; y < 2; y++){
				var new_option = document.createElement('option');
				if(y == 0){
					new_option.value = "Y";
					new_option.text = "Y";
					new_option.setAttribute('selected', 'selected');
				}else{
					new_option.value = "N";
					new_option.text = "N";
				}
				new_select.appendChild(new_option);
			}
			new_td.appendChild(new_select);
		}
		new_tr.appendChild(new_td);
	}
	new_tr.setAttribute('id', 'insert'+row_cnt);
	new_tr.setAttribute('onclick', 'fn_Row_DataInfo("insert'+row_cnt+'")');
	dataTable_tobody.appendChild(new_tr);
	row_cnt++;
}

function fn_DataTable_Insert_Button(){
	var header = ['cdcode','cddesc','orderseq','useyn','attr01','attr02','attr03','attr04','attr05','attr06','attr07','attr08','attr10'];
	
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

	var insertIdArr = new Array();
	var updateIdArr = new Array();	
	
	for(var i = 0; i < dataTableArr.length; i++){
		var row_change_id = dataTableArr[i].toString();
		if(row_change_id.indexOf('insert') == -1){
			updateIdArr.push(row_change_id);
		}else{
			insertIdArr.push(row_change_id);
		}
	}
	
	var insertDataArr = new Array();
	if(insertIdArr.length != 0){
		for(var y = 0; y < insertIdArr.length; y++){
			var insertDataObj = new Object();
			var cnt = 0;
			for(var x = 0; x < header.length; x++){
				var dataObj = document.getElementById(insertIdArr[y]+header[x]).value;
				if(x < 4){
					if(dataObj == null || dataObj == ''){
						continue;
					}	
				}
				insertDataObj[header[x]] = dataObj;
				cnt++;
			}
			
			if(cnt == header.length){
				var arrtData = document.getElementById('attr00').value;
				insertDataObj.cddiv = arrtData.split('DIV')[1];
				insertDataObj.attr00 = arrtData;
				insertDataObj.attr09 = 'DIV'+insertDataObj.cdcode;
				
				insertDataArr.push(insertDataObj);				
			}
		}
	}
	
	var updateDataArr = new Array();
	if(updateIdArr.length != 0){
		for(var y = 0; y < updateIdArr.length; y++){
			var updateDataObj = new Object();
			var cnt = 0;
			for(var x = 0; x < header.length; x++){
				var dataObj = document.getElementById(header[x]+updateIdArr[y]).value;
				if(x < 4){
					if(dataObj == null || dataObj == ''){
						continue;
					}	
				}
				updateDataObj[header[x]] = dataObj;
				cnt++;
			}

			if(cnt == header.length){
				var arrtData = document.getElementById('attr00').value;
				updateDataObj.cddiv = arrtData.split('DIV')[1];
				updateDataObj.attr00 = arrtData;
				updateDataObj.attr09 = 'DIV'+updateDataObj.cdcode;
				updateDataArr.push(updateDataObj);				
			}
		}
	}
	if(insertDataArr.length == 0 && updateDataArr.length == 0){
		return alert('변경 된 데이터가 없습니다.');
	}
	
	let param ={
			"insertData": insertDataArr,
			"updataData": updateDataArr
			};
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es00/es00_w01_save.do",
		success: function(json) {
			alert('데이터 변경에 성공하였습니다.');
			return fn_Search_Button();
		}
	});
}




