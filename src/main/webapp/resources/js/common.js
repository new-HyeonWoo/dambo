function UpdateZoonState(id, data) {
    let keys = componentsDataMap.get(id);
    if (isEmpty(keys)) {
        // console.log("[updateZoonState]" + id + " 데이터가 존재하지 않아 데이터 전파 수행못함 ");
        return false;
    }

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (key == id) {
            continue;
        }
        componentsMap.get(key).update(data);
    }
}

function UpdateZoonStateForDBGrid(id, data) {
    let keys = componentsDataMap.get(id);
    if (isEmpty(keys)) {
        // console.log("[updateZoonState]" + id + " 데이터가 존재하지 않아 데이터 전파 수행못함 ");
        return false;
    }

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (componentsMap.get(key) instanceof DBGrid) {
            componentsMap.get(key).update(data);
        }
    }
}

function SetValue(variable, value, trigger=true) {
    if ($('#debugName').val() === variable && isNotEmpty($('#debugName').val())) {
        console.log(`${variable} 디버깅 시작`)
        debugger;
    }

    // if (variable == 'Edit_비준가격_비교치_산정단가') debugger;

    if (componentsMap.get(variable) instanceof Component ) {
        let component = componentsMap.get(variable);
        component.setValue(value, trigger);

        if ( component instanceof Combo
            || component instanceof Edit
            || component instanceof CalcEdit
            || component instanceof MaskEdit ) {
            UpdateZoonState(variable, value);
        }
    } else {
        componentsMap.set(variable, value);
    }

    // console.log(`SetValue: ${variable}`, value);
}

function SetFocus(variable) {
    componentsMap.get(variable).SetFocus();
}

function GetValue(variable) {
    if ($('#debugName').val() === variable && isNotEmpty($('#debugName').val())) {
        console.log(`${variable} 디버깅 시작`)
        debugger;
    }

    let _componentValue;
    if (componentsMap.get(variable) instanceof Component) {
        _componentValue = componentsMap.get(variable).getValue();
    } else {
        _componentValue = componentsMap.get(variable);
    }

    // console.log(`GetValue: ${variable}`, _componentValue);
    return _componentValue;
}

// EZgen 구 Function
function GetComponent(variable) {
    if (componentsMap.get(variable) instanceof Component) {
        return componentsMap.get(variable);
    } else {
        throw `존재하지 않은 Component 이름입니다. ( ${variable} )`;
    }
}

function GetZoonData(id) {
    if (isEmpty(id)) {
        console.log(`GetZoonData id 값이 공백입니다.`);
        return false;
    }

    return componentsZoonDataMap.get(id);
}

function SetLabelValue(variable, value) {
    // $('#' + variable).text(value);
    SetValue(variable, value);
}

function GetLabelValue(variable) {
    $('#' + variable).text();
}

function GetDate(variable) {
    let dateStr = GetString(variable);

    if (dateStr.length < 8) {
        throw `GetDate 오류 발생. ${variable}`;
    }

    return new Date(dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8));
}

function Now() {
    const date = new Date();
    return date.getFullYear() + 
    '-' + LPad(String(date.getMonth() + 1), 2, '0') + 
    '-' + LPad(String(date.getDate()), 2, '0');
}

function Hex(value) {
    return String.fromCharCode(value);
}

function MsgBox(message, title, isAlert) {
    if (isAlert) {
        alert(message);
        return null;
    } else {
        return confirm(message);
    }
}

function Round(number, numDigits) {
    if (isNaN(number)) {
        return 0;
    }
    if (number === Infinity) {
        return 0;
    }
    if (number == 0) {
        return 0;
    }

    number = Number(number);
    number = number + 0.00001;
    if (Number.isInteger(number)) {
        return number;
    } else {
        return Number(number.toFixed(numDigits));
    }
}

function Fixed(number, numDigits) {
    if (isNaN(number)) {
        return 0;
    }
    if (number === Infinity) {
        return 0;
    }


    number = number + 0.00001;
    return Number.parseFloat(number).toFixed(numDigits);
}

function IfMacro(_function) {
    _function();
}

function GotoPage(page) {
    pageEvent.OnInitializeByPage(page);
}

// 하이퍼링크 기능
function Hyperlink(url, title, options) {
    window.open("http://" + url, title, options);
}

// 특정 Button을 Click(실행) 합니다.
function RunButton(id) {
    GetComponent(id).target.trigger('click');
}

function initializeArray(name) {
    let _array = GetValue(name);
    if (isEmpty(_array)) {
        console.log(`${name} Array 초기화 처리.`);
        SetValue(name, []);
    } else if (!Array.isArray(_array)) {
        console.log(`${name} Array 타입이지 않아 Array변환.`);

        if (isEmpty(_array)) {
            SetValue(name, []);
        } else {
            SetValue(name, [_array]);
        }
    }
}

function Sum(name) {
    initializeArray(name);

    let _array = GetValue(name);
    return _array.reduce((pv,cv)=>{
        return pv + (parseFloat(cv)||0);
    },0);
}

function SetArray(name, index, value) {
    initializeArray(name);

    let _array = GetValue(name);
    _array[index] = value;
    SetValue(name, _array);
}

function GetArray(name, index) {
    initializeArray(name);

    let _array = GetValue(name);
    return _array[index];
}

function RemoveArray(name, index) {
    initializeArray(name);

    let _array = GetValue(name);
    _array.splice(index,1);
}

function AddArray(name, value) {
    initializeArray(name);

    let _array = GetValue(name);
    _array.push(value);
}

function GetArrayCnt(name) {
    initializeArray(name);

    let _array = GetValue(name);
    return _array.length;
}

function EmptyArray(name) {
    initializeArray(name);

    SetValue(name, []);
}

function Max(name) {
    initializeArray(name);

    let _array = GetValue(name);
    if (_array === 0 || _array.length <= 0) {
        return 0;
    }

    return Math.max.apply(null, _array);
}

function FindIndexArray(name, value) {
    initializeArray(name);

    let _array = GetValue(name);
    return _array.findIndex((element) => element == value);
}

function Min(name) {
    initializeArray(name);

    let _array = GetValue(name);
    if (_array === 0 || _array.length <= 0) {
        return 0;
    }

    return Math.min.apply(null, _array);
}

function UploadFile(file, clientFileName, serverFileName) {
    const formData = new FormData();
    formData.append('file', file);

    $.ajax({
        type:"POST",
        async: false,
        url: "/temp/api/upload/image/v1",
        processData: false,
        contentType: false,
        data: formData,
        success: function(res){
            SetValue(clientFileName, file.name);
            SetValue(serverFileName, res.file.name);
        },
        error: function(err){
        }
    })
}


function DownloadFile(fileName) {
    $.ajax({
        type:"GET",
        async: false,
        url: "/temp/api/upload/image/v1",
        processData: false,
        contentType: false,
        data: {
            'fileName': fileName
        },
        success: function(res){
        },
        error: function(err){
        }
    })
}

function RunQuery(id, data, method='GET', isChangeUpdate=true) {
    if ($('#debugName').val() === id && isNotEmpty($('#debugName').val())) {
        console.log(`${id} 디버깅 시작`)
        debugger;
    }

    if (isEmpty(GetZoonData(id))) {
        new JsonZoonData(id, {});
    }

    if (method === 'GET') {
        RunQueryWithGet(id, data, isChangeUpdate);
    } else if (method === 'POST') {
        RunQueryWithPost(id, data, isChangeUpdate);
    } else {
        throw 'RunQuery (method 유형이 올바르지 않습니다)'
    }

    // console.log(`RunQuery: ${id}`, data);
}

function RunAndReturnQuery(id, data) {
    let pageType = GetValue('page');
    let esType = GetValue('es');

    let result = {}
    $.ajax({
        type: 'GET',
        url : '/ezgen/' + esType
            + '/query' + GetQueryStringFrom($.extend(data, {'name': id, 'type': String(pageType)}), false),
        async: false,
        error : function(response) {

        },
        success : function(response) {
            result = response.result
        }
    });

    return result;
}

function RunAndReturnNsdiQuery(id, data) {
    let pageType = GetValue('page');
    let esType = GetValue('es');

    let result = {}
    $.ajax({
        type: 'GET',
        url : '/external/nsdi/query' + GetQueryStringFrom($.extend(data, {'name': id, 'type': String(pageType)}), false),
        async: false,
        error : function(response) {

        },
        success : function(response) {
            result = response.result
        }
    });

    return result;
}

function RunQueryWithGet(id, data, isChangeUpdate=true) {
    let pageType = GetValue('page');
    let esType = GetValue('es');

    $.ajax({
        type: 'GET',
        url : '/ezgen/' + esType
            + '/query' + GetQueryStringFrom($.extend(data, {'name': id, 'type': String(pageType)}), false),
        async: false,
        error : function(response) {

        },
        success : function(response) {
            // if (id == 'Q_코드_가임대보증금적용범위_상가') debugger;
            if (!isEmpty(GetZoonData(id))) {
                GetZoonData(id).setData(response.result, isChangeUpdate);
            }
        }
    });
}
function RunQueryWithPost(id, data, isChangeUpdate=true) {
    let pageType = GetValue('page');
    let esType = GetValue('es');

    const params = {
        'params': $.extend(data, {
            '저장_RowCount' : getRowCount(data) || 0,
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        })
    }

    $.ajax({
        type: 'POST',
        url : '/ezgen/' + esType
            + '/query' + GetQueryStringFrom({'name': id, 'type': String(pageType)}, false),
        contentType : "application/json",
        data : JSON.stringify(params),
        async: false,
        error : function(response) {

        },
        success : function(response) {

        }
    });
}

function getRowCount(object) {
    let maxLength = 0;
    Object.entries(object).forEach(entry => {
        const [key, value] = entry;
        if (Array.isArray(value)) {
            maxLength = maxLength < Object.values(value).length ? Object.values(value).length : maxLength;
        }
    });
    return maxLength;
}

function NumToStr(str) {
    if (isEmpty(str)) {
        return "";
    }

    return String(str);
}

function DateToStr(date) {
    if (isEmpty(date)) {
        return "";
    }

    return date.toString();
}

function Right(str, cnt) {
    if (isEmpty(str)) {
        return "";
    }

    return str.slice(str.length - cnt);
}

function Mid(str, start, cnt) {
    // throw `Mid Function 미정의.`;
}

function Left(str, cnt) {
    if (isEmpty(str)) {
        return "";
    }

    return str.substring(0, cnt);
}

function StrToNum(str) {
    return Number(str);
}

function Days(date) {
    if (!date instanceof Date) {
        throw `Days 데이터타입이 올바르지 않음. ${date}`;
    }

    return date.getTime() / (1000 * 3600 * 24);
}

function StrLength(str) {
    str += '';
    return str.length;
}

function StrToDate(str) {
    if (isEmpty(str)) {
        throw '날짜데이터가 존재하지 않습니다.'
    }

    let strDate = str.replace(/-/g, '');

    return new Date(
        strDate.substring(0, 4) + '-' +
        strDate.substring(4, 6) + '-' +
        strDate.substring(6, 8)
    );
}

function Year(_date) {
    if (isEmpty(_date)) {
        throw '날짜 데이터가 존재하지 않습니다.'
    }

    return _date.substring(0, 4)
}

function Month(_date) {
    if (isEmpty(_date)) {
        throw '날짜 데이터가 존재하지 않습니다.'
    }

    return _date.substring(5, 7)
}

function Day(_date) {
    if (isEmpty(_date)) {
        throw '날짜 데이터가 존재하지 않습니다.'
    }

    return _date.substring(8, 10)
}

function Average(arr) {
    if (isEmpty(arr)) {
        return 0;
    }

    return arr.reduce((a, b) => Number(a) + Number(b), 0) / arr.length;
}

function CallProcedure(id, data, callback) {
    let pageType = GetValue('page');

    const params = {
        'params': $.extend(data, {
            '저장_RowCount' : getRowCount(data) || 0,
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        })
    }

    $.ajax({
        type: 'POST',
        url : '/ezgen/procedure'
            + '/call' + GetQueryStringFrom({'name': id, 'type': String(pageType)}, false),
        contentType : "application/json",
        data : JSON.stringify(params),
        async: false,
        error : function(response) {

        },
        success : function(response) {
            callback(response);
        }
    });
}


function isEmpty(value) {
    return value === "" || value == null || value == undefined
        || typeof value == 'undefined' || value == 'undefined';
}

function isNotEmpty(value) {
    return !isEmpty(value);
}


function match(type) {
    return componentsMap.get('page') === type;
}



function GetNumber(variable) {
    return Number(GetValue(variable));
}

function GetString(variable) {
    return String(GetValue(variable));
}

function RPad(str, len, padString) {
    while(str.length < len){
        str = str + padString;
    }
    return str;
}

function LPad(str, len, padString) {
    while(str.length < len){
        str = padString + str;
    }
    return str;
}

function Navigate(url, params, windowFeatures) {
    window.open(url + GetQueryStringFrom(params, false), windowFeatures)
}

function Truncate(number, numDigits) {
    if (isNaN(number)) {
        return 0;
    }
    if (number === Infinity) {
        return 0;
    }

    if (!String(number).includes('.')) {
        return number;
    } else {
        number = number + 0.00001;
        number = number.toFixed(numDigits + 3);
        let [natural, decimal] = String(number).split('.');
        decimal = decimal.substring(0, numDigits);
        return Number(natural + '.' + decimal);
    }
}

function showModalDialog(url, params, windowFeatures) {
    window.open(url, '_blank',
        'toolbar=no,location=no,status=yes,resizable=no,scrollbars=yes,width=800,height=800');
}

function Trim(str) {
    if (isEmpty(str)) {
        return ""
    }

    str += '';
    return $.trim(str);
}

function StrReplace(sourceStr, replaceStr, changeStr) {
    sourceStr += '';
    changeStr += '';
    return sourceStr.replaceAll(replaceStr, changeStr);
}

function NewArray(variable, cnt) {
    // throw `NewArray Function 미정의.`;
}

function GetQueryStringFrom(json, isContinue=false) {
    let queryString =  Object.entries(json)
        .map(([key,value]) => (key + '=' + value))
        .filter(v => v)
        .join('&');

    if (isContinue) {
        return queryString === '' ? '' : '&' + queryString;
    } else {
        return queryString === '' ? '' : '?' + queryString;
    }
}

function inputNumberFormat(obj) {
    obj.value = comma(obj.value);
}

function comma(str) {
    str = String(str);
    return str.replace( /\,/g, '' ).replace( /(\d)(?=(?:\d{3})+(?!\d))/g, '$1,' );
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

function _전감정사항비교표() {
    window.open('/view/es82/w01?'
        + 'yyyy=' + GetValue('년도')
        + '&seq=' + GetValue('감정순번')
        + '&pre_yyyy=' + GetValue('_이전년도')
        + '&pre_seq=' + GetValue('_이전담보순번')
    );
}

function _배당집계표() {
    window.open('/view/es01/' + getWType() + '/p01?'
        + '년도=' + GetValue('년도')
        + '&일련번호=' + GetValue('감정순번')
    );
}

function _배당집계표수정() {
    window.open('/view/es01/' + getWType() + '/p02?'
        + '년도=' + GetValue('년도')
        + '&일련번호=' + GetValue('감정순번')
        + '&isReadOnly=' + GetValue('isReadOnly')
    );
}

function _출력() {
    window.open('/view/es81/' + getWType() + '.do?'
        + 'yyyy=' + GetValue('년도')
        + '&seq=' + GetValue('감정순번')
        + '&zoom=' + 'Y'
    );
}

function _유입검토보고서() {
    window.open('/view/es83/' + getWType() + '.do?'
        + 'yyyy=' + GetValue('년도')
        + '&seq=' + GetValue('감정순번')
        + '&zoom=' + 'Y'
    );
}

function _수정() {
    let data = GetZoonData("PRT_00_담보마스타").getData();
    SetValue('년도', data[0]['년도']);
    SetValue('담보순번', data[0]['일련번호']);
    SetValue('담보종류', data[0]['담보종류']);
    SetValue('응찰여부', data[0]['응찰여부']);
    SetValue('_이전년도', data[0]['이전년도']);
    SetValue('_이전담보순번', data[0]['이전담보순번']);

    setLinkUrl();
    window.open('http://es.hite.com:8080/jsp/es01/' + GetValue('LinkURL'));
}
function _내용보기() {
	let data = GetZoonData("PRT_00_담보마스타").getData();
    SetValue('년도', data[0]['년도']);
    SetValue('담보순번', data[0]['일련번호']);
    SetValue('담보종류', data[0]['담보종류']);
    SetValue('응찰여부', data[0]['응찰여부']);
    SetValue('_이전년도', data[0]['이전년도']);
    SetValue('_이전담보순번', data[0]['이전담보순번']);

    setLinkUrl();
    window.open('http://es.hite.com:8080/jsp/es01/' + GetValue('LinkURL'));
}

function setLinkUrl() {
    let page;
    if (GetValue('담보종류') === "101") {
        page = "es01_w02.jsp";
    } else if (GetValue('담보종류') === "102") {
        page = "es01_w02_2.jsp";
    } else if (GetValue('담보종류') === "103") {
        page = "es01_w02_2.jsp";
    } else if (GetValue('담보종류') === "104") {
        page = "es01_w02_3.jsp";
    } else if (GetValue('담보종류') === "105") {
        page = "es01_w02_4.jsp";
    } else if (GetValue('담보종류') === "501") {
        page = "es01_w04.jsp";
    } else if (GetValue('담보종류') === "401") {
        page = "es01_w03.jsp";
    } else if (GetValue('담보종류') === "402") {
        page = "es01_w03_1.jsp";
    } else {
        new DOMException('알수없는 담보종류입니다.');
    }

    SetValue('LinkURL',
        page + "?yyyy=" + GetValue('년도') +
        "&seq=" + GetValue('담보순번') +
        "&sec_code=" + GetValue('담보종류') +
        "&proc_div=" + GetValue('QField_작업진행상태') +
        "&auth=W&bid_use=" + GetValue('응찰여부') +
        "&uDept=" + GetValue('_부서명') +
        "&uDeptCd=" + GetValue('_부서코드') +
        "&uName=" + GetValue('_사원명') +
        "&uEmpNo=" + GetValue('_사원번호') +
        "&uJikWi=" + GetValue('_직위') +
        "&uJikName=" + GetValue('_직급') +
        "&pre_yyyy=" + GetValue('_이전년도') +
        "&pre_seq=" + GetValue('_이전담보순번'));
}

function _render(target, html, data) {
    target.html(Handlebars.compile(html)(data));
}

function indexBy(e) {
    return $(e.target.closest('tr')).index();
}

function doOpenCheck(target){
    const name = $(target).attr('fieldName');
    const $targetTable = $(target.closest('tbody'));
    $targetTable.find('input[fieldName="'+ name +'"]:checkbox').not($(target)).prop('checked',false);
}

function mask($el, condition, type) {
    if ($el.length < 1) {
        console.log(`mask 엘리먼트가 존재하지 않음.`);

        return false;
    }

    if (type === '날짜') {
        $el.datepicker({
            dateFormat: condition.replace('yyyy', 'yy') || 'yy-mm-dd'
        });
    } /*else if (type === '숫자') {
        let split = condition.split(';');

        if (split.length < 3) {
            throw `Mask 데이터에 이상이 있음. ${split}`;
        }

        let prefix = split[0];
        let maxLength = Number(split[1]) || 1000;
        let subfix = split[2].replace('1', '');

        $el.mask(subfix, { reverse: true });
    } else if (type === '문자') {
    }*/
}

function masked($el, value) {
    if (type === '날짜') {
        return $el.val().replace(/-/g, '');
    } else if (type === '숫자') {
        return $el.masked(value);
    } else if (type === '문자') {
        return $el.masked(value);
    }
}

function unmask($el, condition, type) {
    if ($el.length < 1) {
        console.log(`unmask 엘리먼트가 존재하지 않음.`);
        return false;
    }

    if (type === '날짜') {
        return $el.val().replace(/-/g, '');
    } else if (type === '숫자') {
        return $el.val();
        // return $el.cleanVal();
    } else if (type === '문자') {
        return $el.val();
        // return $el.cleanVal();
    }
}

function AppendArray(array1, array2){
    if (isEmpty(array1)) {
        return false;
    }

    array1.concat(array2);
}

function getRandomKey(name, index) {
    return `${name}_${index}_${Math.random().toString(36).substr(2, 9)}`;
}

function getWType() {
    if (match(PageType.집합_오피스텔)) {
        return "w02";
    } else if (match(PageType.집합_상업용)) {
        return "w02";
    } else if (match(PageType.집합_연립)) {
        return "w02";
    } else if (match(PageType.집합_아파트)) {
        return "w02";
    } else if (match(PageType.토건_주거)) {
        return "w03";
    } else if (match(PageType.토건_상업용)) {
        return "w03";
    } else if (match(PageType.토지)) {
        return "w04";
    } else {
        throw `존재하지 않은 Page입니다.`;
    }
}

function documentRequest() {
    const date = new Date();
    let strDate = date.getFullYear() +
            LPad(String(date.getMonth() + 1), 2, '0') +
            LPad(String(date.getDate()), 2, '0') +
            LPad(String(date.getHours()), 2, '0') +
            LPad(String(date.getMinutes()), 2, '0') +
            LPad(String(date.getSeconds()), 2, '0');

    // `/view/es81/${getWType()}.do` +

    let redirectParams = `wType=${getWType()}` +
        "&yyyy=" + GetValue('년도') +
        "&seq=" + GetValue('감정순번') +
        "&sec_code=" + GetValue('담보종류') +
        "&proc_div=" + GetValue('결재진행현황') +
        "&auth=W&bid_use=" + GetValue('응찰_입력표활성여부') +
        "&pre_yyyy=" + GetValue('_이전년도') +
        "&pre_seq=" + GetValue('_이전담보순번');

    console.log(document.location.origin + `/view/external/eap?${redirectParams}&uEmpNo=108231`);

    $.ajax({
        type:"POST",
        async: false,
        url: "/external/eap/popup",
        contentType : "application/json",
        data : JSON.stringify({
            "apprslYear": GetValue('년도'),
            "apprslSn": GetValue('감정순번'),
            "hqBhfSeCd": "1",
            "sanctnSn": "4",
            "header": {
                "txID": "tx" + date.getTime(),
                "reqID": 'req' + date.getTime(),
                "userID": "HJ-ESH",
                "systemID": "HJ04-GW",
                "formKey": "sf_APP$realestate_v2",
                "reqDt": strDate
            },
            "parameter": {
                "subject": encodeURIComponent("제목"),
                "reqEmpNo": GetValue('_사원번호'),
                "reqDeptCode": "",
                "chgEmpNo": "",
                "chgDeptCode": "",
            },
            "preDatas": {
                "html": document.location.origin + `/view/external/eap?${redirectParams}`
            }
        }),
        success: function(res){
            window.open(res.result.parameter.url);
        },
        error: function(err){
        }
    })
}

function toDateFormat(date_str, gubun) {
    let yyyyMMdd = String(date_str);
    let sYear = yyyyMMdd.substring(0,4);
    let sMonth = yyyyMMdd.substring(4,6);
    let sDate = yyyyMMdd.substring(6,8);
    return sYear + gubun + sMonth + gubun + sDate;
}

function checkMaximumCallStackBySec(beforeSeconds, fn) {
    const date = new Date();
    let afterSeconds = date.getSeconds();

    if (beforeSeconds == afterSeconds) {
        console.log('Maximum call stack size error 방어 코드');
        return;
    }
    fn(afterSeconds);
}

function isEnable(value) {
    return value != '0';
}


function getEventStatus(id) {
    if (componentsEventStatus.has(id)) {
        return componentsEventStatus.get(id);
    } else {
        return false;
    }
}

function setEventStatus(id, value) {
    componentsEventStatus.set(id, value)
}

function isolation(id, _function) {
    if (getEventStatus(id)) {
        return false;
    }

    setEventStatus(id, true);
    _function(GetComponent(id));
    setEventStatus(id, false);
}

function ComponentTrigger(id, eventName) {
    isolation(id, (_component) => {
        if (_component instanceof Combo
            || _component instanceof DBGridCombo) {
            _component.target.find('select').trigger(eventName);
        } else if (_component instanceof Component) {
            _component.target.trigger(eventName);
        } else {
            console.log('트리거 발생할 컴포넌트가 올바르지않음.')
        }
    });
}