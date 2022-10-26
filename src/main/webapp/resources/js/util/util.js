function checkNumber(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) { 
		return true;    
	} else {        
		event.returnValue = false;   
	}
}

function dateYyyyMmDdHhNnSs(event){
	var date = '';
	try{
		date = event.toString().substr(0,4) + '-' + event.toString().substr(4,2) + '-' + event.toString().substr(6,2) +' ' + event.toString().substr(8,2) +':'+event.toString().substr(10,2)+':'+event.toString().substr(12,2);		
	}catch (e) {
		date = '';
	}
	return date;
}

function dateYyyyMmDd(event){
	var date = '';
	try{
		date = event.toString().substr(0,4) + '-' + event.toString().substr(4,2) + '-' + event.toString().substr(6,2);		
	}catch (e) {
		date = '';
	}
	return date;
}

function inputNumberAndHotPointFormat(obj){
	var strObj = obj.value.toString();
	var numberStr = '';
	var hotPointStr = '';
	if(strObj.indexOf('.') != -1){
		hotPoint = strObj.substr(strObj.indexOf('.'));
		numberStr = strObj.substr(0,strObj.indexOf('.'));
		return obj.value = comma(uncomma(numberStr))+hotPoint; 
	}else{
		numberStr = strObj
		return obj.value = comma(uncomma(numberStr));  
	}
}


function comma(obj) {
	obj = String(obj);
    return obj.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function uncomma(obj) {
	obj = String(obj);
    return obj.replace(/[^\d]+/g, '');
} 

function dateCommaMasked(type, maskType, value) {
    if (type === '날짜') {
        return dateFormat(maskType, value);
    } else if (type === '숫자') {
        return numberFormat(maskType, value);
    }else{
		return;
	}
}

function dateFormat(maskType, value){
	if(!value) return "";
	let formatNum = "";
	value = value.replace(/\s/gi, "");
	try{
		if(maskType='yyyy-mm-dd') {
			formatNum = value.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
		}else if(maskType='yyyy-mm-dd hh:mm:ss'){
			formatNum = value.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:&6');
		}else{
			formatNum = value.toString();
		}
	} catch(e) {
		formatNum = value;
		console.log(e);
	}
	return formatNum;
}

function numberFormat(maskType, value){
	if(isEmpty(value)){
		value = '0';
	}else{
		value = value.toString();
	} 
		
	let formatNum = "";
	try{
		let negative = maskType.substring(0 ,maskType.indexOf(';'+1));
		let length = maskType.substring(maskType.indexOf(';'+1)+1, maskType.indexOf(';', maskType.indexOf(';') + 1));
		let regData = maskType.substring(maskType.indexOf(';', maskType.indexOf(';') + 1)+1);
		let regType = regData.substring(0, regData.lastIndexOf('#')+1);
		let decimal = regData.substring(regData.lastIndexOf('#')+1);
		let regdata = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

		value = value.substr(0,length);

		if(decimal.indexOf('.') != -1){
			let decimalPosition = decimal.substr(decimal.indexOf('.')+1).length;
			if(value.indexOf('.') == -1){
				for(let i = 0; i < decimalPosition; i++){
					value = value + '0';
				}
				value = value.substr(0,Number(value.length) - Number(decimalPosition)) +'.'+ value.slice('-'+decimalPosition);
			}

			value = Number(value).toFixed(decimalPosition);
		}

		if(regType == '#,###'){
			value = value.toString().replace(regdata, ",");
		}

		formatNum = value.toString();
	} catch(e) {
		formatNum = value;
		console.log(e);
	}
	return formatNum;
}


// 숫자 절대 값 => 데이터 호출시 
function fn_never_number(obj){
	obj = String(obj);
	var num = 0;
	if(obj || !isNaN(obj)){
		num = uncomma(obj) == '' ? 0 : uncomma(obj);
	}
	return num;
}

// isNan checked => 소수점 계산시 
function isNanChecked(obj){
	obj = String(obj);
	var num = 0;
	if(!isNaN(obj)){
		num = obj;
	}

	if(obj == Infinity){
		num = 0;
	}else{
		num = obj;
	}
	
	return num;
}

function fun_input_number_hatComma(){
	
}

//toFixed(2);
function fn_input_number_toFixed(data){
	return data == 0 || data == '' ? '' :  Number(data).toFixed(2);
}

// 데이터 화면에 넘길때
function fn_input_number(data){
    const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
    return data == null || data == 0 || data == '' ? '' : reg.exec(data) !== null ? data : data.toString().length > 3 ? data.toString().slice(0,1) == '-' ? '-' + data.toString().replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",") : data.toString().replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",") : data;
}

function fn_input_number_decrypt(data){
	const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
	return data == null || data == 0 || data == '' ? '' : reg.exec(data) !== null ? data : data.toString().length <= 3 ? data : data.toString().slice(0, 1) == "-" ? "-" + data.replace(/[^0-9]/g, "") : data.toString().includes(",") == true ? data.replace(/[^0-9]/g, "") : data;
}

// onbkey 전체 콤마 및 숫자 체크
function fn_onkeyup_number_comma(obj){
	return obj.value = comma(uncomma(obj.value));
}

function fn_decimal_point_checked(obj){

	var num = 0;
	if(obj == ''){
		num = 0;
	}else{
		num = obj.replace(/[^.\d]+/g, '');
	}
	return num;
}

// 0.00
function fn_dot_two(obj){
	var strObj = String(obj);
	var numberStr = '';
	var hotPoint = '00';
	
	if(strObj.indexOf('.') != -1){
		hotPoint = strObj.substr((strObj.indexOf('.') + 1), 2);
		if(hotPoint.length == 1){
			hotPoint =  hotPoint+'0';
		}
		numberStr = strObj.substr(0,strObj.indexOf('.'));
	}else{
		numberStr = strObj
	}
	
	return comma(uncomma(numberStr))+'.'+hotPoint;
}