var topMenu_cnt = 0;

function fn_Row_DataInfo(evt){
	var classList = document.getElementById(evt).classList;

	if(classList.value.indexOf('table-active') == -1){
		document.getElementById(evt).className += ' table-active';
	}else{
		document.getElementById(evt).classList.remove('table-active');
	}	
}

function fn_DataTable_Insert_Button(){
	
	var header = ['userR','userId','useYn'];
	
	var dataTable_master = document.getElementById('dataTable_body').childNodes;
	var dataTableArr = new Array();
	
	for(var i = 0; i < dataTable_master.length; i++){
		if(dataTable_master[i].className == ' table-active'){
			dataTableArr.push(dataTable_master[i].id);
		}
	}

	if(dataTableArr.length == 0){
		return alert('지정된 데이터가 없습니다.');
	}
	
	var margeDataArr = new Array();
	if(dataTableArr.length != 0){
		for(var y = 0; y < dataTableArr.length; y++){
			var margeDataObj = new Object();
			var cnt = 0;
			for(var z = 0; z < header.length; z++){
				var dataObj = '';
				if(header[z] == 'useYn'){
					dataObj = document.getElementById(dataTableArr[y]+header[z]).checked == true ? 'Y' : 'N';
				}else{
					dataObj = document.getElementById(dataTableArr[y]+header[z]).value;					
				}
				
				if(dataObj == null || dataObj == undefined || dataObj == "" || dataObj == " "){
					continue;
				}
				
				margeDataObj[header[z]] = dataObj;
				cnt++;
			}
			
			if(cnt == header.length){
				margeDataObj.ent_user = '';
				margeDataObj.user_id =  margeDataObj.userId;
				margeDataObj.user_r =  margeDataObj.userR;
				margeDataObj.use_yn =  margeDataObj.useYn;
				
				margeDataArr.push(margeDataObj);
			}
		}
	}

	console.log(margeDataArr);
	
	if(margeDataArr.length == 0){
		return alert('변경 된 데이터가 없습니다.');
	}
	
	let param ={
				"margeData": margeDataArr,
			};
	
	$.ajax({
		type: "POST",
		contentType:'application/json',
		data: JSON.stringify(param),
		url: "/es00/es00_a02_save.do",
		success: function(json) {
			if(json.response == true){
				alert('데이터 변경에 성공하였습니다.');
			}else{
				alert('데이터 변경에 실패하였습니다.');
			}
			
			return fn_Search_Button();
		}
	});

}
