var topMenu_cnt = 0;

// top menu 추가
function fn_topMenu_dataTable_adit_button(){
	var dataTable_tobody = document.getElementById("topMenu_dataTable_body");
	var new_tr = document.createElement('tr');
	var header = ['rowCnt','menuId','grpName','useYn'];
	
	for(var i = 0; i < header.length; i++){
		var new_td = document.createElement('td');
		
		if(header[i] == "menuId" || header[i] == "grpName"){
			var new_input = document.createElement('input');
			new_td.setAttribute('class', 'listtd');
			new_input.setAttribute('class', 'form-control input-block ps-5');
			new_input.setAttribute('style', 'height: 10px');
			new_input.setAttribute('id', 'topMenuInsert'+topMenu_cnt+header[i]);	
			if(header[i] == "menuId"){
				new_input.setAttribute('onkeypress', 'return checkNumber(event)');
			}
			new_td.appendChild(new_input);
		}else if(header[i] == "useYn"){
			new_td.setAttribute('class', 'listtd');
			var new_div = document.createElement('div');
			var new_input = document.createElement('input');
			new_input.setAttribute('class', 'form-check-input');
			new_input.setAttribute('type', 'checkbox');
			new_input.setAttribute('id', 'topMenuInsert'+topMenu_cnt+header[i]);
			new_div.setAttribute('class', 'form-check form-check-custom form-check-warning form-check-solid form-check-sm');
			new_div.appendChild(new_input);
			new_td.appendChild(new_div);
		}
		new_tr.appendChild(new_td);
	}
	new_tr.setAttribute('id', 'topMenuInsert'+topMenu_cnt);
	new_tr.setAttribute('onclick', 'fn_topMenu_Row_DataInfo("topMenuInsert'+topMenu_cnt+'")');
	dataTable_tobody.appendChild(new_tr);
	topMenu_cnt++;
}


function fn_topMenu_Row_DataInfo(evt){
	var topMenu_tr = document.getElementById(evt).classList;
	if(topMenu_tr.length == 0){
		document.getElementById(evt).className += 'table-active';
	}else{
		document.getElementById(evt).classList.remove('table-active');
	}	
}

function fn_topMenu_Insert_Button(){
	var headerArr = new Array();
	$.ajax({
		type: "POST",
		contentType:'application/json',
		url: "/es00/es00_a01_topMenu_list.do",
		async: false,
		success: function(json) {
			for(var i = 0; i < json.selectTopMenuList.length; i++){
				var jsonObj = json.selectTopMenuList[i];
				var dataObj = new Object();
				dataObj.grpId = jsonObj.grpId;
				dataObj.menuId = jsonObj.menuId;
				dataObj.grpName = jsonObj.grpName;
				headerArr.push(dataObj);
			}
			return headerArr;
		}
	});
	
	var header = ['menuId','grpName','useYn'];
	
	var topMenu_master = document.getElementById('topMenu_dataTable_body').childNodes;
	var topMenuArr = new Array();
	
	for(var i = 0; i < topMenu_master.length; i++){
		if(topMenu_master[i].className == 'table-active'){
			topMenuArr.push(topMenu_master[i].id);
		}
	}

	if(topMenuArr.length == 0){
		return alert('지정된 데이터가 없습니다.');
	}
	
	var insertIdArr= new Array();
	var updateIdArr= new Array();
	
	for(var x = 0; x < topMenuArr.length; x++){
		var topMenuArr_id = topMenuArr[x].toString();
		if(topMenuArr_id.indexOf('topMenuInsert') == -1){
			updateIdArr.push(topMenuArr_id);
		}else{
			insertIdArr.push(topMenuArr_id);
		}
	}
	
	var insertDataArr= new Array();
	if(insertIdArr.length != 0){
		for(var y = 0; y < insertIdArr.length; y++){
			var insertDataObj = new Object();
			var cnt = 0;
			for(var z = 0; z < header.length; z++){
				var dataObj = '';
				if(header[z] == 'useYn'){
					dataObj = document.getElementById(insertIdArr[y]+header[z]).checked == true ? 'Y' : 'N';
				}else{
					dataObj = document.getElementById(insertIdArr[y]+header[z]).value;					
				}
				
				if(dataObj == null || dataObj == undefined || dataObj == ""){
					continue;
				}
				
				insertDataObj[header[z]] = dataObj;
				cnt++;
			}
			
			if(cnt == header.length){
				insertDataObj.cd_div =  '900';
				insertDataObj.cd_code =  insertDataObj.menuId;
				insertDataObj.cd_desc =  insertDataObj.grpName;
				insertDataObj.use_yn =  insertDataObj.useYn;
				
				var flag = true;
				for(var x  = 0; x< headerArr.length; x++){
					var headerData = headerArr[x].menuId;
					if(headerData == insertDataObj.cd_code){
						flag = false;
						break;
					}
				}
				if(flag == true){
					insertDataArr.push(insertDataObj);					
				}
			}
		}
	}

	var updateDataArr = new Array();
	if(updateIdArr.length != 0){
		for(var y = 0; y < updateIdArr.length; y++){
			var updateDataObj = new Object();
			var cnt = 0;
			for(var z = 0; z < header.length; z++){
				var dataObj = '';
				if(header[z] == 'useYn'){
					dataObj = document.getElementById(updateIdArr[y]+header[z]).checked == true ? 'Y' : 'N';
				}else{
					dataObj = document.getElementById(updateIdArr[y]+header[z]).value;					
				}
				
				if(dataObj == null || dataObj == undefined || dataObj == ""){
					continue;
				}
				
				updateDataObj[header[z]] = dataObj;
				cnt++;
			}
			
			if(cnt == header.length){
				updateDataObj.cd_div =  '900';
				updateDataObj.cd_code =  updateDataObj.menuId;
				updateDataObj.cd_desc =  updateDataObj.grpName;
				updateDataObj.use_yn =  updateDataObj.useYn;
				
				updateDataArr.push(updateDataObj);
			}
		}
	}

	
	if(insertDataArr.length == 0 && updateDataArr.length == 0){
		return alert('변경 된 데이터가 없습니다.');
	}
	
	let param ={
				"insertData": insertDataArr,
				"updateData": updateDataArr
			};
	
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es00/es00_a01_toeMenu_save.do",
		success: function(json) {
			if(json.response == true){
				alert('데이터 변경에 성공하였습니다.');
			}else{
				alert('데이터 변경에 실패하였습니다.');
			}

			return fn_Search_Button('kt_tab_pane_1');
		}
	});
	
}

function fn_topMenu_delete_Button(){
	var header = ['rowCnt','grpId','grpName','useYn'];
	
	var topMenu_master = document.getElementById('topMenu_dataTable_body').childNodes;
	var topMenuArr = new Array();
	
	for(var i = 0; i < topMenu_master.length; i++){
		if(topMenu_master[i].className == 'table-active'){
			topMenuArr.push(topMenu_master[i].id);
		}
	}
	
	if(topMenuArr.length == 0){
		return alert('지정된 데이터가 없습니다.');
	}
	
	var deleteDataArr = new Array();
	
	for(var x = 0; x < topMenuArr.length; x++){
		var topMenuArr_id = topMenuArr[x].toString();
		if(topMenuArr_id.indexOf('menuInsert') == -1){
			var deleteDataObj = new Object();
			deleteDataObj.cd_div = '900';
			deleteDataObj.cd_code = topMenuArr_id.toString().substr(7);
			
			deleteDataArr.push(deleteDataObj);
		}
	}
	
	let param ={
		"deleteData": deleteDataArr
	};
	
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es00/es00_a01_topMenu_delete.do",
		success: function(json) {
			if(json.response == true){
				alert('데이터 삭제에 성공하였습니다.');
			}else{
				alert('데이터 삭제에 실패하였습니다.');
			}

			return fn_Search_Button('kt_tab_pane_1');
		}
	});	
}