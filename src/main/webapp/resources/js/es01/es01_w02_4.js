function fn_group_Row_DataInfo(evt){
	var group_tr = document.getElementById(evt).classList;
	if(group_tr.length == 0){
		document.getElementById(evt).className += 'table-active';
	}else{
		document.getElementById(evt).classList.remove('table-active');
	}	
}

function fn_Group_Type_Insert(){
	var group_type = document.getElementById('group_type').value;
	
	if(group_type == null || group_type == '' || group_type == undefined){
		return alert('추가할 그룹의 명칭이 비어있습니다.');
	}
	
	var group_type_user_r = document.getElementById('group_type_user_r');
	var new_option = document.createElement('option');
	new_option.setAttribute('value',group_type);
	new_option.setAttribute('selected','selected');
	new_option.appendChild(document.createTextNode(group_type));
	group_type_user_r.appendChild(new_option);
	return fn_Search_Button('kt_tab_pane_3');
}

function fn_Group_Insert_Button(){
	var header = ['user_r','menuId','useYn','initYn'];
	
	var group_master = document.getElementById('group_dataTable_body').childNodes;
	var groupArr = new Array();
	
	for(var i = 0; i < group_master.length; i++){
		if(group_master[i].className == 'table-active'){
			groupArr.push(group_master[i].id);
		}
	}

	if(groupArr.length == 0){
		return alert('지정된 데이터가 없습니다.');
	}
	
	var margeDataArr= new Array();
	if(groupArr.length != 0){
		for(var y = 0; y < groupArr.length; y++){
			var margeDataObj = new Object();
			var cnt = 0;
			for(var z = 0; z < header.length; z++){
				var dataObj = '';
				if(header[z] == 'useYn' || header[z] == 'initYn'){
					dataObj = document.getElementById(groupArr[y]+header[z]).checked == true ? 'Y' : 'N';
				}else{
					dataObj = document.getElementById(groupArr[y]+header[z]).value;					
				}
				
				if(dataObj == null || dataObj == undefined || dataObj == ""){
					continue;
				}
				
				margeDataObj[header[z]] = dataObj;
				cnt++;
			}
			if(cnt == header.length){
				margeDataObj.menu_id = margeDataObj.menuId;
				margeDataObj.use_yn = margeDataObj.useYn;
				margeDataObj.init_yn = margeDataObj.initYn;
				margeDataArr.push(margeDataObj);
			}
		}
	}
	
	if(margeDataArr.length == 0){
		return alert('변경 된 데이터가 없습니다.');
	}

	let param ={ "margeData": margeDataArr };
	
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es00/es00_a01_group_marge.do",
		success: function(json) {
			alert('데이터 변경에 성공하였습니다.');
			return fn_Search_Button('kt_tab_pane_3');
		}
	});
	
}
