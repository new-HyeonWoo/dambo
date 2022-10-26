var menu_cnt = 0;

// top menu 추가
function fn_menu_dataTable_adit_button(){
	
	var topMenuArr = new Array();

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
				topMenuArr.push(dataObj);
			}
			return topMenuArr;
		}
	});
	
	var dataTable_tobody = document.getElementById("menu_dataTable_body");
	var new_tr = document.createElement('tr');
	var header = ['rowCnt','grpId','menuId','menuName','srcPath','useYn'];
	
	for(var i = 0; i < header.length; i++){
		var new_td = document.createElement('td');
		
		if(header[i] == "menuName" || header[i] == "srcPath" || header[i] == "menuId"){
			var new_input = document.createElement('input');
			new_td.setAttribute('class', 'listtd');
			new_input.setAttribute('class', 'form-control input-block ps-5');
			new_input.setAttribute('style', 'height: 10px');
			new_input.setAttribute('id', 'menuInsert'+menu_cnt+header[i]);	
			new_td.appendChild(new_input);
		}else if(header[i] == "useYn"){
			new_td.setAttribute('class', 'listtd');
			var new_div = document.createElement('div');
			var new_input = document.createElement('input');
			new_input.setAttribute('class', 'form-check-input');
			new_input.setAttribute('type', 'checkbox');
			new_input.setAttribute('id', 'menuInsert'+menu_cnt+header[i]);
			new_div.setAttribute('class', 'form-check form-check-custom form-check-warning form-check-solid form-check-sm');
			new_div.appendChild(new_input);
			new_td.appendChild(new_div);
		}else if(header[i] =='grpId'){
			new_td.setAttribute('class', 'listtd');
			var new_select = document.createElement('select');
			new_select.setAttribute('class', 'form-select fs-7 lh-1 fw-bolder py-1');
			new_select.setAttribute('id', 'menuInsert'+menu_cnt+header[i]);

			for(var x = 0; x < topMenuArr.length; x++){
				console.log(topMenuArr[x]);
				var new_option = document.createElement('option');
				new_option.setAttribute('label' ,topMenuArr[x].grpName);
				new_option.setAttribute('value' ,topMenuArr[x].menuId);
				new_select.appendChild(new_option);
			}
			new_td.appendChild(new_select);
		}
		new_tr.appendChild(new_td);
	}
	new_tr.setAttribute('id', 'menuInsert'+menu_cnt);
	new_tr.setAttribute('onclick', 'fn_menu_Row_DataInfo("menuInsert'+menu_cnt+'")');
	dataTable_tobody.appendChild(new_tr);
	menu_cnt++;
	
}


function fn_menu_Row_DataInfo(evt){
	var menu_tr = document.getElementById(evt).classList;
	if(menu_tr.length == 0){
		document.getElementById(evt).className += 'table-active';
	}else{
		document.getElementById(evt).classList.remove('table-active');
	}	
}

function fn_menu_Insert_Button(){
	
	var headerArr = new Array();
	$.ajax({
		type: "POST",
		contentType:'application/json',
		url: "/es00/es00_a01_menu_list.do",
		async: false,
		success: function(json) {
			for(var i = 0; i < json.selectMenuList.length; i++){
				var jsonObj = json.selectMenuList[i];
				var dataObj = new Object();
				dataObj.grpId = jsonObj.grpId;
				dataObj.menuId = jsonObj.menuId;
				dataObj.grpName = jsonObj.grpName;
				headerArr.push(dataObj);
			}
			return headerArr;
		}
	});
	
	var header = ['grpId','menuId','menuName','srcPath','useYn'];
	var menu_master = document.getElementById('menu_dataTable_body').childNodes;
	var menuArr = new Array();
	
	for(var i = 0; i < menu_master.length; i++){
		if(menu_master[i].className == 'table-active'){
			menuArr.push(menu_master[i].id);
		}
	}

	if(menuArr.length == 0){
		return alert('지정된 데이터가 없습니다.');
	}
	
	var insertIdArr= new Array();
	var updateIdArr= new Array();
	
	for(var x = 0; x < menuArr.length; x++){
		var menuArr_id = menuArr[x].toString();
		if(menuArr_id.indexOf('menuInsert') == -1){
			updateIdArr.push(menuArr_id);
		}else{
			insertIdArr.push(menuArr_id);
		}
	}

	var insertDataArr= new Array();
	
	if(insertIdArr.length != 0){
		for(var y = 0; y < insertIdArr.length; y++){
			var insertDataObj = new Object();
			var cnt = 0;
			for(var z = 0; z < header.length; z++){
				console.log(header[z]);
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
				insertDataObj.cd_div = insertDataObj.grpId;
				insertDataObj.cd_code = insertDataObj.menuId;
				insertDataObj.cd_desc = insertDataObj.menuName;
				insertDataObj.attr_01 = insertDataObj.srcPath;
				insertDataObj.use_yn = insertDataObj.useYn;
				
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
					console.log(updateIdArr[y]+header[z]);
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
				updateDataObj.cd_div = updateDataObj.grpId;
				updateDataObj.cd_code = updateDataObj.menuId;
				updateDataObj.cd_desc = updateDataObj.menuName;
				updateDataObj.attr_01 = updateDataObj.srcPath;
				updateDataObj.use_yn = updateDataObj.useYn;
				console.log(updateDataObj);
				updateDataArr.push(updateDataObj);
			}
		}
	}

	if(insertDataArr.length == 0 && updateDataArr.length == 0){
		return alert('변경 된 데이터가 없습니다.');
	}
	console.log(updateDataArr);
	let param ={
			"insertData": insertDataArr,
			"updateData": updateDataArr
			};
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es00/es00_a01_menu_marge.do",
		success: function(json) {
			if(json.response == true){
				alert('데이터 변경에 성공하였습니다.');
			}else{
				alert('데이터 변경에 실패하였습니다.');
			}

			return fn_Search_Button('kt_tab_pane_2');
		}
	});
	
}

function fn_menu_delete_Button(){
	var menu_master = document.getElementById('menu_dataTable_body').childNodes;
	var menuArr = new Array();
	
	for(var i = 0; i < menu_master.length; i++){
		if(menu_master[i].className == 'table-active'){
			menuArr.push(menu_master[i].id);
		}
	}
	
	if(menuArr.length == 0){
		return alert('지정된 데이터가 없습니다.');
	}
	
	var deleteDataArr = new Array();
	
	for(var x = 0; x < menuArr.length; x++){
		var menuArr_id = menuArr[x].toString();
		if(menuArr_id.indexOf('menuInsert') == -1){
			var deleteDataObj = new Object();
			deleteDataObj.cd_div = document.getElementById(menuArr_id + 'grpId').value;
			deleteDataObj.cd_code = menuArr_id.toString().substr(4);
			
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
		url: "/es00/es00_a01_menu_delete.do",
		success: function(json) {
			if(json.response == true){
				alert('데이터 삭제에 성공하였습니다.');
			}else{
				alert('데이터 삭제에 실패하였습니다.');
			}

			return fn_Search_Button('kt_tab_pane_2');
		}
	});	
	
}