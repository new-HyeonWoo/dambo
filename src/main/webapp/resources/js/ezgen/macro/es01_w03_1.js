function MC_토지의표시_전체면적() {


    if (GetArray('토지의표시_일단지구분_Arr', GetValue('i')) == "1") {
        SetValue('토지의표시_면적_1', GetValue('토지의표시_면적_1') + GetArray('토지의표시_면적_Arr', GetValue('i')))
    } else if (GetArray('토지의표시_일단지구분_Arr', GetValue('i')) == "2") {
        SetValue('토지의표시_면적_2', GetValue('토지의표시_면적_2') + GetArray('토지의표시_면적_Arr', GetValue('i')))
    } else if (GetArray('토지의표시_일단지구분_Arr', GetValue('i')) == "3") {
        SetValue('토지의표시_면적_3', GetValue('토지의표시_면적_3') + GetArray('토지의표시_면적_Arr', GetValue('i')))
    } else if (GetArray('토지의표시_일단지구분_Arr', GetValue('i')) == "4") {
        SetValue('토지의표시_면적_4', GetValue('토지의표시_면적_4') + GetArray('토지의표시_면적_Arr', GetValue('i')))
    }

}

function MC_토지의표시_전체면적_수정() {

    GetComponent('DBGrid_담보제공비율').GetRow(GetNumber('i'), [
        {key: '담보제공비율_전체면적', value: 'SEC_REGI_SIZE'},
        {key: '담보제공비율_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_분모', value: 'SEC_DENO'},
        {key: '토지의표시_일단지구분', value: 'POT_GU'},
        {key: '담보제공비율_지번', value: 'LOT_NUM'}
    ]);


    if (GetValue('토지의표시_일단지구분') == "1") {
        SetValue('토지의표시_전체면적', GetValue('토지의표시_면적_1'))
    } else if (GetValue('토지의표시_일단지구분') == "2") {
        SetValue('토지의표시_전체면적', GetValue('토지의표시_면적_2'))
    } else if (GetValue('토지의표시_일단지구분') == "3") {
        SetValue('토지의표시_전체면적', GetValue('토지의표시_면적_3'))
    } else if (GetValue('토지의표시_일단지구분') == "4") {
        SetValue('토지의표시_전체면적', GetValue('토지의표시_면적_4'))
    }


    GetComponent('DBGrid_담보제공비율').SetRow(GetValue('i'), [
        {key: 'SEC_REGI_SIZE', value: GetValue('토지의표시_전체면적')},
        {key: 'SEC_DENO', value: GetValue('토지의표시_전체면적')}
    ]);


    GetComponent('DBGrid_담보제공비율').GetRow(GetNumber('i'), [
        {key: '담보제공비율_전체면적', value: 'SEC_REGI_SIZE'},
        {key: '담보제공비율_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_분모', value: 'SEC_DENO'},
        {key: '토지의표시_일단지구분', value: 'POT_GU'},
        {key: '담보제공비율_지번', value: 'LOT_NUM'}
    ]);


    SetValue('담보제공비율_비율', GetValue('담보제공비율_분자') / GetValue('담보제공비율_분모'))
    SetValue('담보제공비율_담보제공면적', GetValue('담보제공비율_전체면적') * GetValue('담보제공비율_비율'))


    GetComponent('DBGrid_담보제공비율').SetRow(GetValue('i'), [
        {key: 'SEC_RATE', value: GetValue('담보제공비율_비율')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('담보제공비율_담보제공면적')}
    ], true);


    GetComponent('DBGrid_담보제공비율').GetRow(GetNumber('i'), [
        {key: '담보제공비율_전체면적', value: 'SEC_REGI_SIZE'},
        {key: '담보제공비율_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_분모', value: 'SEC_DENO'},
        {key: '담보제공비율_일단지구분', value: 'POT_GU'},
        {key: '담보제공비율_지번', value: 'LOT_NUM'}
    ]);


    GetComponent('DBGrid_평가액').GetRow(GetNumber('i'), [
        {key: '평가액_평가가액', value: 'INC_AMT'}
    ]);


    SetValue('담보제공비율_비율', GetValue('담보제공비율_분자') / GetValue('담보제공비율_분모'))
    SetValue('담보제공비율_담보제공면적', GetValue('담보제공비율_전체면적') * GetValue('담보제공비율_비율'))
    SetValue('담보제공비율_최종평가가액', GetNumber('평가액_평가가액') * GetValue('담보제공비율_비율'))


    GetComponent('DBGrid_담보').SetRow(GetValue('i'), [
        {key: 'SEC_NUME', value: GetValue('담보제공비율_분자')},
        {key: 'SEC_DENO', value: GetValue('담보제공비율_분모')},
        {key: 'SEC_RATE', value: GetValue('담보제공비율_비율')},
        {key: 'POT_GU', value: GetValue('담보제공비율_일단지구분')},
        {key: 'LOT_NUM', value: GetValue('담보제공비율_지번')},
        {key: 'FNL_INC_AMT', value: GetValue('담보제공비율_최종평가가액')}
    ], true);


    GetComponent('DBGrid_담보제공비율').SetRow(GetValue('i'), [
        {key: 'SEC_RATE', value: GetValue('담보제공비율_비율')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('담보제공비율_담보제공면적')}
    ], true);

}

function MC_토지의표시_자동연산() {

    SetValue('토지의표시_면적_평', GetValue('토지의표시_면적') * 0.3025)
    SetValue('토지의표시_개별공시지가_평', GetValue('토지의표시_개별공시지가') * 3.3058)
    SetValue('토지의표시_개별공시지가_총', GetValue('토지의표시_개별공시지가') * GetValue('토지의표시_면적'))


    GetComponent('DBGrid_토지의표시').SetRow(-1, [
        {key: 'L_SIZE_PY', value: GetValue('토지의표시_면적_평')},
        {key: 'ANNO_DAN_PY', value: GetValue('토지의표시_개별공시지가_평')},
        {key: 'ANNO_AMT', value: GetValue('토지의표시_개별공시지가_총')}
    ]);

}

function MC_본건토지_자동추가() {

    GetComponent('DBGrid_본건토지').SetRow(GetValue('토지의표시_RowPosition'), [
        {key: 'LN_SEQ', value: GetValue('토지의표시_순번')},
        {key: 'POT_GU', value: GetValue('토지의표시_일단지구분')},
        {key: 'LOT_NUM', value: GetValue('토지의표시_지번')},
        {key: 'LCATEGORY', value: GetValue('토지의표시_지목')},
        {key: 'L_SIZE', value: GetValue('토지의표시_면적')},
        {key: 'L_SIZE_PY', value: GetValue('토지의표시_면적_평')},
        {key: 'MIN_BOUND', value: GetValue('토지의표시_최소행정구역')}
    ]);

}

function MC_Combo_초기화() {

    RunQuery('Q_코드_고저', {}, 'GET');


    RunQuery('Q_코드_도로조건', {}, 'GET');


    RunQuery('Q_코드_용도지역', {}, 'GET');


    RunQuery('Q_코드_이용현황', {}, 'GET');


    RunQuery('Q_코드_지목', {}, 'GET');


    RunQuery('Q_코드_형상', {}, 'GET');


    RunQuery('Q_코드_도로거리', {}, 'GET');


    RunQuery('Q_코드_철도', {}, 'GET');


    RunQuery('Q_코드_폐기물', {}, 'GET');


    RunQuery('Q_코드_용도지구', {}, 'GET');


    RunQuery('Q_코드_도시계획', {}, 'GET');


    RunQuery('Q_코드_기타제한구역', {}, 'GET');


    RunQuery('Q_코드_방위', {}, 'GET');


    RunQuery('Q_코드_면적', {}, 'GET');


    RunQuery('Q_코드_인근지역', {}, 'GET');


    RunQuery('Q_코드_토지의종류', {}, 'GET');


    RunQuery('Q_코드_표준단가_용도', {}, 'GET');


    RunQuery('Q_코드_표준단가_구조', {}, 'GET');


    RunQuery('Q_코드_표준단가_급수', {}, 'GET');


    RunQuery('Q_코드_증개축횟수', {}, 'GET');


    RunQuery('Q_코드_관리상태', {}, 'GET');


    RunQuery('Q_코드_구조', {}, 'GET');


    RunQuery('Q_코드_지붕', {}, 'GET');


    RunQuery('Q_코드_주용도', {}, 'GET');


    RunQuery('Q_코드_주택_가임대보증금', {}, 'GET');


    RunQuery('Q_코드_상가_가임대보증금', {}, 'GET');


    RunQuery('Q_코드_법정지상권', {}, 'GET');


    RunQuery('Q_코드_접한도로의폭', {}, 'GET');


    RunQuery('Q_코드_토지의형상', {}, 'GET');


    RunQuery('Q_코드_담보물의입지조건', {}, 'GET');


    RunQuery('Q_코드_점유자형태', {}, 'GET');


    RunQuery('Q_코드_대지면적', {}, 'GET');


    RunQuery('Q_코드_경과년도', {}, 'GET');


    RunQuery('Q_코드_주변상권', {}, 'GET');


    RunQuery('Q_코드_토지의면적', {}, 'GET');


    RunQuery('Q_코드_공유지분', {}, 'GET');


    RunQuery('Q_코드_법정지상권_존속기간', {}, 'GET');


    RunQuery('Q_코드_관공서접근성', {}, 'GET');


    RunQuery('Q_코드_중심지역접근성', {}, 'GET');


    RunQuery('Q_코드_기타접근성', {}, 'GET');


    RunQuery('Q_코드_기타환경조건', {}, 'GET');


    RunQuery('Q_코드_가임대보증금적용범위', {}, 'GET');


    RunQuery('Q_코드_최고채권액', {}, 'GET');


    RunQuery('Q_코드_순위', {}, 'GET');


    RunQuery('Q_코드_권리의내용', {}, 'GET');


    RunQuery('Q_코드_각구의일련번호', {}, 'GET');


    RunQuery('Q_코드_가임대보증금적용범위_상가', {}, 'GET');


    RunQuery('Q_코드_일단지구분', {}, 'GET');


    RunQuery('Q_코드_표준지구분', {}, 'GET');


    RunQuery('Q_코드_저촉률', {}, 'GET');


    RunQuery('Q_00_인테리어비용', {}, 'GET');


    GetComponent('Combo_입력표_업소구분').SetCurSel(-1.0);

}

function MC_Combo_일단지구분_SQL() {


    if (GetValue('i') == 0) {
        SetValue('Combo_일단지구분_SQL1', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 1) {
        SetValue('Combo_일단지구분_SQL2', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 2) {
        SetValue('Combo_일단지구분_SQL3', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 3) {
        SetValue('Combo_일단지구분_SQL4', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 4) {
        SetValue('Combo_일단지구분_SQL5', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 5) {
        SetValue('Combo_일단지구분_SQL6', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 6) {
        SetValue('Combo_일단지구분_SQL7', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 7) {
        SetValue('Combo_일단지구분_SQL8', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 8) {
        SetValue('Combo_일단지구분_SQL9', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 9) {
        SetValue('Combo_일단지구분_SQL10', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 10) {
        SetValue('Combo_일단지구분_SQL11', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 11) {
        SetValue('Combo_일단지구분_SQL12', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 12) {
        SetValue('Combo_일단지구분_SQL13', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 13) {
        SetValue('Combo_일단지구분_SQL14', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 14) {
        SetValue('Combo_일단지구분_SQL15', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 15) {
        SetValue('Combo_일단지구분_SQL16', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 16) {
        SetValue('Combo_일단지구분_SQL17', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 17) {
        SetValue('Combo_일단지구분_SQL18', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == 18) {
        SetValue('Combo_일단지구분_SQL19', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    } else if (GetValue('i') == '19') {
        SetValue('Combo_일단지구분_SQL20', GetArray('Combo_일단지구분_Arr', GetValue('i')))
    }

}

function MC_주소반환() {
    if (GetValue('주소구분') == '1') {

        SetValue('Edit_소재지', GetValue('팝업_전체주소'))

    }

    if (GetValue('주소구분') == '2') {

        GetComponent('DBGrid_토지의표시').SetRow(-1, [
            {key: 'MIN_BOUND', value: GetValue('팝업_전체주소')}
        ], true);

    }

    if (GetValue('주소구분') == '3') {

        GetComponent('DBGrid_표준지공시지가').SetRow(-1, [
            {key: 'JUSO1', value: GetValue('팝업_전체주소')}
        ], true);

    }

    if (GetValue('주소구분') == '4') {

        GetComponent('DBGrid_비준가격_산정사례').SetRow(-1, [
            {key: 'JUSO1', value: GetValue('팝업_전체주소')}
        ], true);

    }


    GetComponent('SubForm_주소조회').HideSubForm();

}

function MC_Combo_일단지구분() {

    GetComponent('DBGrid_토지의표시').GetRows("", [
        {key: 'Combo_일단지구분_Arr', value: 'POT_GU'}
    ]);


    SetValue('Combo_일단지구분_Count', GetArrayCnt('Combo_일단지구분_Arr'))


    SetValue('Combo_일단지구분_SQL', "")


    for (SetValue('i', 0); GetValue('i') < GetNumber('Combo_일단지구분_Count'); SetValue('i', GetValue('i') + 1)) {
        MC_Combo_일단지구분_SQL();
    }


    RunQuery('Q_일단지구분갱신', {
        'Combo_일단지구분_Count': GetValue('Combo_일단지구분_Count'),
        'Combo_일단지구분_SQL1': GetValue('Combo_일단지구분_SQL1'),
        'Combo_일단지구분_SQL2': GetValue('Combo_일단지구분_SQL2'),
        'Combo_일단지구분_SQL3': GetValue('Combo_일단지구분_SQL3'),
        'Combo_일단지구분_SQL4': GetValue('Combo_일단지구분_SQL4'),
        'Combo_일단지구분_SQL5': GetValue('Combo_일단지구분_SQL5'),
        'Combo_일단지구분_SQL6': GetValue('Combo_일단지구분_SQL6'),
        'Combo_일단지구분_SQL7': GetValue('Combo_일단지구분_SQL7'),
        'Combo_일단지구분_SQL8': GetValue('Combo_일단지구분_SQL8'),
        'Combo_일단지구분_SQL9': GetValue('Combo_일단지구분_SQL9'),
        'Combo_일단지구분_SQL10': GetValue('Combo_일단지구분_SQL10'),
        'Combo_일단지구분_SQL11': GetValue('Combo_일단지구분_SQL11'),
        'Combo_일단지구분_SQL12': GetValue('Combo_일단지구분_SQL12'),
        'Combo_일단지구분_SQL13': GetValue('Combo_일단지구분_SQL13'),
        'Combo_일단지구분_SQL14': GetValue('Combo_일단지구분_SQL14'),
        'Combo_일단지구분_SQL15': GetValue('Combo_일단지구분_SQL15'),
        'Combo_일단지구분_SQL16': GetValue('Combo_일단지구분_SQL16'),
        'Combo_일단지구분_SQL17': GetValue('Combo_일단지구분_SQL17'),
        'Combo_일단지구분_SQL18': GetValue('Combo_일단지구분_SQL18'),
        'Combo_일단지구분_SQL19': GetValue('Combo_일단지구분_SQL19'),
        'Combo_일단지구분_SQL20': GetValue('Combo_일단지구분_SQL20')
    }, 'GET');

}

function MC_비준가격_저촉률() {

    GetZoonData('Q_코드_도시계획').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_비준가격_본건요인_도시계획'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_도시계획').GetRow(GetValue('00_RowIndex'), [
        {key: '비준가격_도시계획_본건', value: 'ATTR_08'}
    ]);


    GetZoonData('Q_코드_도시계획').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_비준가격_표준지요인_도시계획'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_도시계획').GetRow(GetValue('00_RowIndex'), [
        {key: '비준가격_도시계획_표준지', value: 'ATTR_08'}
    ]);


    GetZoonData('Q_코드_저촉률').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_비준가격_본건요인_저촉률'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_저촉률').GetRow(GetValue('00_RowIndex'), [
        {key: '비준가격_저촉률_본건', value: 'ATTR_08'}
    ]);


    GetZoonData('Q_코드_저촉률').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_비준가격_표준지요인_저촉률'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_저촉률').GetRow(GetValue('00_RowIndex'), [
        {key: '비준가격_저촉률_표준지', value: 'ATTR_08'}
    ]);


    SetValue('비준가격_저촉률_본건_값', StrToNum(GetValue('비준가격_저촉률_본건')) * StrToNum(GetValue('비준가격_도시계획_본건')) + (1 - StrToNum(GetValue('비준가격_저촉률_본건'))))
    SetValue('비준가격_저촉률_표준지_값', StrToNum(GetValue('비준가격_저촉률_표준지')) * StrToNum(GetValue('비준가격_도시계획_표준지')) + (1 - StrToNum(GetValue('비준가격_저촉률_표준지'))))
    SetValue('Edit_비준가격_비교치_저촉률', GetValue('비준가격_저촉률_본건_값') / GetValue('비준가격_저촉률_표준지_값'))


    GetComponent('DBGrid_비준가격').SetRow(-1, [
        {key: 'LIMIT_AREA_C', value: GetValue('Edit_비준가격_비교치_저촉률')}
    ], true);

}

function MC_Combo_표준지() {

    GetComponent('DBGrid_표준지공시지가').GetRows("", [
        {key: 'Combo_표준지_Arr', value: 'S_GU'}
    ]);


    SetValue('Combo_표준지_Count', GetArrayCnt('Combo_표준지_Arr'))


    SetValue('Combo_표준지_SQL', "")


    for (SetValue('i', 0); GetValue('i') < GetNumber('Combo_표준지_Count'); SetValue('i', GetValue('i') + 1)) {
        MC_Combo_표준지_SQL();
    }


    RunQuery('Q_표준지갱신', {
        'Combo_표준지_Count': GetValue('Combo_표준지_Count'),
        'Combo_표준지_SQL1': GetValue('Combo_표준지_SQL1'),
        'Combo_표준지_SQL2': GetValue('Combo_표준지_SQL2'),
        'Combo_표준지_SQL3': GetValue('Combo_표준지_SQL3'),
        'Combo_표준지_SQL4': GetValue('Combo_표준지_SQL4'),
        'Combo_표준지_SQL5': GetValue('Combo_표준지_SQL5'),
        'Combo_표준지_SQL6': GetValue('Combo_표준지_SQL6'),
        'Combo_표준지_SQL7': GetValue('Combo_표준지_SQL7'),
        'Combo_표준지_SQL8': GetValue('Combo_표준지_SQL8'),
        'Combo_표준지_SQL9': GetValue('Combo_표준지_SQL9'),
        'Combo_표준지_SQL10': GetValue('Combo_표준지_SQL10'),
    }, 'GET');

}

function MC_Combo_표준지_SQL() {


    if (GetValue('i') == 0) {
        SetValue('Combo_표준지_SQL1', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 1) {
        SetValue('Combo_표준지_SQL2', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 2) {
        SetValue('Combo_표준지_SQL3', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 3) {
        SetValue('Combo_표준지_SQL4', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 4) {
        SetValue('Combo_표준지_SQL5', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 5) {
        SetValue('Combo_표준지_SQL6', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 6) {
        SetValue('Combo_표준지_SQL7', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 7) {
        SetValue('Combo_표준지_SQL8', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 8) {
        SetValue('Combo_표준지_SQL9', GetArray('Combo_표준지_Arr', GetValue('i')))
    } else if (GetValue('i') == 9) {
        SetValue('Combo_표준지_SQL10', GetArray('Combo_표준지_Arr', GetValue('i')))
    }

}

function MC_비준가격_요인합계() {

    GetComponent('DBGrid_비준가격').GetRow(-1, [
        {key: '비준가격_일단지구분', value: 'POT_GU'},
        {key: '비준가격_사례번호', value: 'EX_NO'},
        {key: '비준가격_사례가격', value: 'STD_ANNO_AMT'},
        {key: '비준가격_시점수정_본건', value: 'EDIT_M'},
        {key: '비준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '비준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '비준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '비준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '비준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '비준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '비준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '비준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '비준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '비준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '비준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '비준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '비준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '비준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '비준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '비준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '비준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '비준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '비준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '비준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '비준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '비준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '비준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '비준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '비준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '비준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '비준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '비준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '비준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '비준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '비준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '비준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '비준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '비준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '비준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '비준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '비준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '비준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '비준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '비준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '비준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '비준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '비준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '비준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '비준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '비준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '비준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '비준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '비준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '비준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '비준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '비준가격_기타_본건', value: 'L_ETC_M'},
        {key: '비준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '비준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '비준가격_장래_본건', value: 'E_TREND_M'},
        {key: '비준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '비준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '비준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '비준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '비준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '비준가격_감가율', value: 'DEPRE_RATE'},
        {key: '비준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '비준가격_산정단가', value: 'APAS_DAN'},
        {key: '비준가격_적용단가', value: 'APPL_DAN'},
        {key: '비준가격_소재지_본건', value: 'JUSO_M'},
        {key: '비준가격_소재지_사례', value: 'JUSO_S'},
        {key: '비준가격_조사시점', value: 'SURVEY_TIME'},
        {key: '비준가격_시점수정_사례', value: 'EDIT_S'},
        {key: '비준가격_시점수정_비교치', value: 'EDIT_C'},
        {key: '비준가격_소재지_비교치', value: 'JUSO_C'}
    ]);


    MC_비준가격_집계표_곱();


    SetValue('Edit_비준가격_비교치_요인합계', Round(GetValue('비준가격_요인합계'), 2))
    SetValue('Edit_비준가격_비교치_산정단가', GetValue('Edit_비준가격_비교치_요인합계') * GetValue('비준가격_사례가격'))
    SetValue('Edit_비준가격_비교치_적용단가', Round((GetValue('Edit_비준가격_비교치_산정단가') / 1000), 0))
    SetValue('Edit_비준가격_비교치_적용단가', GetValue('Edit_비준가격_비교치_적용단가') * 1000)


    GetComponent('DBGrid_비준가격').SetRow(-1, [
        {key: 'FACTOR_TOT', value: GetValue('Edit_비준가격_비교치_요인합계')},
        {key: 'APAS_DAN', value: GetValue('Edit_비준가격_비교치_산정단가')},
        {key: 'APPL_DAN', value: GetValue('Edit_비준가격_비교치_적용단가')}
    ], true);

}

function MC_비준가격_집계표() {

    GetComponent('DBGrid_비준가격').GetCurSel('비준가격_RowPosition');


    GetComponent('DBGrid_비준가격').GetRow(-1, [
        {key: '비준가격_일단지구분', value: 'POT_GU'},
        {key: '비준가격_사례번호', value: 'EX_NO'},
        {key: '비준가격_사례가격', value: 'STD_ANNO_AMT'},
        {key: '비준가격_시점수정_본건', value: 'EDIT_M'},
        {key: '비준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '비준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '비준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '비준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '비준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '비준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '비준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '비준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '비준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '비준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '비준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '비준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '비준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '비준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '비준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '비준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '비준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '비준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '비준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '비준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '비준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '비준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '비준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '비준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '비준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '비준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '비준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '비준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '비준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '비준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '비준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '비준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '비준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '비준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '비준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '비준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '비준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '비준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '비준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '비준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '비준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '비준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '비준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '비준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '비준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '비준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '비준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '비준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '비준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '비준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '비준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '비준가격_기타_본건', value: 'L_ETC_M'},
        {key: '비준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '비준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '비준가격_장래_본건', value: 'E_TREND_M'},
        {key: '비준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '비준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '비준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '비준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '비준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '비준가격_감가율', value: 'DEPRE_RATE'},
        {key: '비준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '비준가격_산정단가', value: 'APAS_DAN'},
        {key: '비준가격_적용단가', value: 'APPL_DAN'},
        {key: '비준가격_소재지_본건', value: 'JUSO_M'},
        {key: '비준가격_소재지_사례', value: 'JUSO_S'},
        {key: '비준가격_조사시점', value: 'SURVEY_TIME'},
        {key: '비준가격_시점수정_비교치', value: 'EDIT_C'},
        {key: '비준가격_시점수정_사례', value: 'EDIT_S'}
    ]);


    MC_비준가격_집계표_곱();


    GetComponent('DBGrid_비준가격집계표').SetRow(GetValue('비준가격_RowPosition'), [
        {key: 'POT_GU', value: GetValue('비준가격_일단지구분')},
        {key: 'EX_NO', value: GetValue('비준가격_사례번호')},
        {key: 'STD_ANNO_AMT', value: GetValue('비준가격_사례가격')},
        {key: 'EDIT_M', value: GetValue('비준가격_시점수정_비교치')},
        {key: 'JUSO_M', value: GetValue('비준가격_소재지_본건')},
        {key: 'ROAD_C', value: GetValue('비준가격집계표_가로')},
        {key: 'APPRO_C', value: GetValue('비준가격집계표_접근')},
        {key: 'ENVI_C', value: GetValue('비준가격집계표_환경')},
        {key: 'OFFIC_C', value: GetValue('비준가격집계표_행정')},
        {key: 'LAND_C', value: GetValue('비준가격집계표_획지')},
        {key: 'ETC_C', value: GetValue('비준가격집계표_기타')},
        {key: 'DEPRE_RATE', value: GetValue('비준가격_감가율')},
        {key: 'FACTOR_TOT', value: GetValue('비준가격_요인합계')},
        {key: 'APAS_DAN', value: GetValue('비준가격_산정단가')},
        {key: 'APPL_DAN', value: GetValue('비준가격_적용단가')}
    ], true);

}

function MC_저장_비준가격() {

    RunQuery('저장_비준가격', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_비준가격_년도': GetValue('저장_비준가격_년도'),
        '저장_비준가격_일련번호': GetValue('저장_비준가격_일련번호'),
        '저장_비준가격_입력순번': GetValue('저장_비준가격_입력순번'),
        '저장_비준가격_일단지구분': GetValue('저장_비준가격_일단지구분'),
        '저장_비준가격_사례번호': GetValue('저장_비준가격_사례번호'),
        '저장_비준가격_조사시점': GetValue('저장_비준가격_조사시점'),
        '저장_비준가격_사례가격': GetValue('저장_비준가격_사례가격'),
        '저장_비준가격_시점수정_본건_날짜': GetValue('저장_비준가격_시점수정_본건_날짜'),
        '저장_비준가격_시점수정_사례_날짜': GetValue('저장_비준가격_시점수정_사례_날짜'),
        '저장_비준가격_시점수정_본건': GetValue('저장_비준가격_시점수정_본건'),
        '저장_비준가격_시점수정_사례': GetValue('저장_비준가격_시점수정_사례'),
        '저장_비준가격_시점수정_비교치': GetValue('저장_비준가격_시점수정_비교치'),
        '저장_비준가격_소재지_본건': GetValue('저장_비준가격_소재지_본건'),
        '저장_비준가격_소재지_사례': GetValue('저장_비준가격_소재지_사례'),
        '저장_비준가격_소재지_비교치': GetValue('저장_비준가격_소재지_비교치'),
        '저장_비준가격_도로접면_본건': GetValue('저장_비준가격_도로접면_본건'),
        '저장_비준가격_도로접면_표준지': GetValue('저장_비준가격_도로접면_표준지'),
        '저장_비준가격_도로접면_비교치': GetValue('저장_비준가격_도로접면_비교치'),
        '저장_비준가격_도로거리_본건': GetValue('저장_비준가격_도로거리_본건'),
        '저장_비준가격_도로거리_표준지': GetValue('저장_비준가격_도로거리_표준지'),
        '저장_비준가격_도로거리_비교치': GetValue('저장_비준가격_도로거리_비교치'),
        '저장_비준가격_관공서_본건': GetValue('저장_비준가격_관공서_본건'),
        '저장_비준가격_관공서_표준지': GetValue('저장_비준가격_관공서_표준지'),
        '저장_비준가격_관공서_비교치': GetValue('저장_비준가격_관공서_비교치'),
        '저장_비준가격_중심지역_본건': GetValue('저장_비준가격_중심지역_본건'),
        '저장_비준가격_중심지역_표준지': GetValue('저장_비준가격_중심지역_표준지'),
        '저장_비준가격_중심지역_비교치': GetValue('저장_비준가격_중심지역_비교치'),
        '저장_비준가격_기타접근성_본건': GetValue('저장_비준가격_기타접근성_본건'),
        '저장_비준가격_기타접근성_표준지': GetValue('저장_비준가격_기타접근성_표준지'),
        '저장_비준가격_기타접근성_비교치': GetValue('저장_비준가격_기타접근성_비교치'),
        '저장_비준가격_철도_본건': GetValue('저장_비준가격_철도_본건'),
        '저장_비준가격_철도_표준지': GetValue('저장_비준가격_철도_표준지'),
        '저장_비준가격_철도_비교치': GetValue('저장_비준가격_철도_비교치'),
        '저장_비준가격_폐기물_본건': GetValue('저장_비준가격_폐기물_본건'),
        '저장_비준가격_폐기물_표준지': GetValue('저장_비준가격_폐기물_표준지'),
        '저장_비준가격_폐기물_비교치': GetValue('저장_비준가격_폐기물_비교치'),
        '저장_비준가격_기타환경_본건': GetValue('저장_비준가격_기타환경_본건'),
        '저장_비준가격_기타환경_표준지': GetValue('저장_비준가격_기타환경_표준지'),
        '저장_비준가격_기타환경_비교치': GetValue('저장_비준가격_기타환경_비교치'),
        '저장_비준가격_용도지역_본건': GetValue('저장_비준가격_용도지역_본건'),
        '저장_비준가격_용도지역_표준지': GetValue('저장_비준가격_용도지역_표준지'),
        '저장_비준가격_용도지역_비교치': GetValue('저장_비준가격_용도지역_비교치'),
        '저장_비준가격_용도지구_본건': GetValue('저장_비준가격_용도지구_본건'),
        '저장_비준가격_용도지구_표준지': GetValue('저장_비준가격_용도지구_표준지'),
        '저장_비준가격_용도지구_비교치': GetValue('저장_비준가격_용도지구_비교치'),
        '저장_비준가격_도시계획_본건': GetValue('저장_비준가격_도시계획_본건'),
        '저장_비준가격_도시계획_표준지': GetValue('저장_비준가격_도시계획_표준지'),
        '저장_비준가격_도시계획_비교치': GetValue('저장_비준가격_도시계획_비교치'),
        '저장_비준가격_기타제한_본건': GetValue('저장_비준가격_기타제한_본건'),
        '저장_비준가격_기타제한_표준지': GetValue('저장_비준가격_기타제한_표준지'),
        '저장_비준가격_기타제한_비교치': GetValue('저장_비준가격_기타제한_비교치'),
        '저장_비준가격_고저_본건': GetValue('저장_비준가격_고저_본건'),
        '저장_비준가격_고저_표준지': GetValue('저장_비준가격_고저_표준지'),
        '저장_비준가격_고저_비교치': GetValue('저장_비준가격_고저_비교치'),
        '저장_비준가격_형상_본건': GetValue('저장_비준가격_형상_본건'),
        '저장_비준가격_형상_표준지': GetValue('저장_비준가격_형상_표준지'),
        '저장_비준가격_형상_비교치': GetValue('저장_비준가격_형상_비교치'),
        '저장_비준가격_방위_본건': GetValue('저장_비준가격_방위_본건'),
        '저장_비준가격_방위_표준지': GetValue('저장_비준가격_방위_표준지'),
        '저장_비준가격_방위_비교치': GetValue('저장_비준가격_방위_비교치'),
        '저장_비준가격_면적_본건': GetValue('저장_비준가격_면적_본건'),
        '저장_비준가격_면적_표준지': GetValue('저장_비준가격_면적_표준지'),
        '저장_비준가격_면적_비교치': GetValue('저장_비준가격_면적_비교치'),
        '저장_비준가격_토지이용_본건': GetValue('저장_비준가격_토지이용_본건'),
        '저장_비준가격_토지이용_표준지': GetValue('저장_비준가격_토지이용_표준지'),
        '저장_비준가격_토지이용_비교치': GetValue('저장_비준가격_토지이용_비교치'),
        '저장_비준가격_기타_본건': GetValue('저장_비준가격_기타_본건'),
        '저장_비준가격_기타_표준지': GetValue('저장_비준가격_기타_표준지'),
        '저장_비준가격_기타_비교치': GetValue('저장_비준가격_기타_비교치'),
        '저장_비준가격_장래_본건': GetValue('저장_비준가격_장래_본건'),
        '저장_비준가격_장래_표준지': GetValue('저장_비준가격_장래_표준지'),
        '저장_비준가격_장래_비교치': GetValue('저장_비준가격_장래_비교치'),
        '저장_비준가격_기타조건_본건': GetValue('저장_비준가격_기타조건_본건'),
        '저장_비준가격_기타조건_표준지': GetValue('저장_비준가격_기타조건_표준지'),
        '저장_비준가격_기타조건_비교치': GetValue('저장_비준가격_기타조건_비교치'),
        '저장_비준가격_요인합계': GetValue('저장_비준가격_요인합계'),
        '저장_비준가격_산정단가': GetValue('저장_비준가격_산정단가'),
        '저장_비준가격_적용단가': GetValue('저장_비준가격_적용단가')
    }, 'POST');


    RunQuery('Q_비준가격', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_담보() {

    RunQuery('저장_담보', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_담보_년도': GetValue('저장_담보_년도'),
        '저장_담보_일련번호': GetValue('저장_담보_일련번호'),
        '저장_담보_순번': GetValue('저장_담보_순번'),
        '저장_담보_최종평가가격': GetValue('저장_담보_최종평가가격')
    }, 'POST');


    RunQuery('Q_토지의표시', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_평가액() {

    RunQuery('저장_평가액', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_평가액_평가가격': GetValue('저장_평가액_평가가격'),
        '저장_평가액_표준지공시지가': GetValue('저장_평가액_표준지공시지가'),
        '저장_평가액_적용보정률': GetValue('저장_평가액_적용보정률'),
        '저장_평가액_산정가격': GetValue('저장_평가액_산정가격'),
        '저장_평가액_적용가격': GetValue('저장_평가액_적용가격'),
        '저장_평가액_년도': GetValue('저장_평가액_년도'),
        '저장_평가액_일련번호': GetValue('저장_평가액_일련번호'),
        '저장_평가액_순번': GetValue('저장_평가액_순번'),
    }, 'POST');

}

function MC_비준가격_집계표_곱() {

    SetValue('비준가격집계표_가로', GetValue('비준가격_도로접면_비교치') * GetValue('비준가격_도로거리_비교치'))
    SetValue('비준가격집계표_접근', GetValue('비준가격_관공서_비교치') * GetValue('비준가격_중심지역_비교치') * GetValue('비준가격_기타접근성_비교치'))
    SetValue('비준가격집계표_환경', GetValue('비준가격_철도_비교치') * GetValue('비준가격_폐기물_비교치') * GetValue('비준가격_기타환경_비교치'))
    SetValue('비준가격집계표_행정', GetValue('비준가격_용도지역_비교치') * GetValue('비준가격_용도지구_비교치') * GetValue('비준가격_도시계획_비교치') * GetValue('비준가격_기타제한_비교치'))
    SetValue('비준가격집계표_획지', GetValue('비준가격_고저_비교치') * GetValue('비준가격_형상_비교치') * GetValue('비준가격_방위_비교치') * GetValue('비준가격_면적_비교치') * GetValue('비준가격_토지이용_비교치') * GetValue('비준가격_기타_비교치'))
    SetValue('비준가격집계표_기타', GetValue('비준가격_장래_비교치') * GetValue('비준가격_기타조건_비교치'))
    SetValue('비준가격_요인합계', GetValue('비준가격_소재지_비교치') * GetValue('비준가격_시점수정_비교치') * GetValue('비준가격집계표_가로') * GetValue('비준가격집계표_접근') * GetValue('비준가격집계표_환경') * GetValue('비준가격집계표_행정') * GetValue('비준가격집계표_획지') * GetValue('비준가격집계표_기타'))

}

function MC_저장_문서관리_문서() {
    RunQuery('저장_문서관리_문서', {
        '저장_문서관리_문서_년도': GetValue('저장_문서관리_문서_년도'),
        '저장_문서관리_문서_일련번호': GetValue('저장_문서관리_문서_일련번호'),
        '저장_문서관리_문서_사진구분': GetValue('저장_문서관리_문서_사진구분'),
        '저장_문서관리_문서_순번': GetValue('저장_문서관리_문서_순번'),
        '저장_문서관리_문서_사진명': GetValue('저장_문서관리_문서_사진명'),
        '저장_문서관리_문서_경로및파일명': GetValue('저장_문서관리_문서_경로및파일명'),
        '저장_문서관리_문서_비고': GetValue('저장_문서관리_문서_비고'),
        '저장_문서관리_문서_전송된파일명': GetValue('저장_문서관리_문서_전송된파일명')
    }, 'POST');


    RunQuery('Q_문서관리_관련문서', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_비준가격_참조값_본건() {

    GetComponent('DBGrid_비준가격').GetRow(-1, [
        {key: '토지의표시_순번', value: 'POT_GU'}
    ]);


    if (isEmpty((GetValue('토지의표시_순번')))) {
        return false;
    }


    GetComponent('DBGrid_토지의표시').FindIndex('토지의표시_RowPosition', (row) => {

        if ((row['POT_GU'] == GetValue('토지의표시_순번'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_토지의표시').GetRow(GetNumber('토지의표시_RowPosition'), [
        {key: '토지의표시_최소행정구역', value: 'MIN_BOUND'},
        {key: '표준지공시지가_면적', value: 'L_SIZE'}
    ]);


    GetComponent('DBGrid_본건토지').GetRow(GetNumber('토지의표시_RowPosition'), [
        {key: '토지의표시_도로조건', value: 'OF_ROAD_CODE'},
        {key: '토지의표시_용도지역', value: 'USE_AREA'},
        {key: '토지의표시_지형지세', value: 'L_UNDUR_CODE'},
        {key: '토지의표시_형상', value: 'L_SHAPE_CODE'},
        {key: '토지의표시_이용현황', value: 'L_USE_CODE'}
    ]);


    SetValue('Edit_비준가격_본건요인_소재지', GetValue('토지의표시_최소행정구역'))
    SetValue('Combo_비준가격_본건요인_도로조건', GetValue('토지의표시_도로조건'))
    SetValue('Combo_비준가격_본건요인_용도지역', GetValue('토지의표시_용도지역'))
    SetValue('Combo_비준가격_본건요인_고저', GetValue('토지의표시_지형지세'))
    SetValue('Combo_비준가격_본건요인_형상', GetValue('토지의표시_형상'))
    SetValue('Combo_비준가격_본건요인_토지이용상황', GetValue('토지의표시_이용현황'))


    GetComponent('DBGrid_비준가격').SetRow(-1, [
        {key: 'JUSO_M', value: GetValue('토지의표시_최소행정구역')},
        {key: 'USE_AREA_M', value: GetValue('토지의표시_용도지역')},
        {key: 'L_UNDUR_CODE_M', value: GetValue('토지의표시_지형지세')},
        {key: 'L_SHAPE_CODE_M', value: GetValue('토지의표시_형상')},
        {key: 'L_OF_GU_M', value: GetValue('토지의표시_이용현황')},
        {key: 'ROAD_SIDE_M', value: GetValue('토지의표시_도로조건')}
    ], true);


    MC_비준가격_요인합계();

}

function MC_배당표_배당금건물_RowChange() {

    GetComponent('DBGrid_배당금건물_계산M').GetRow(-1, [
        {key: '배당표_배당금계산건물M_순번', value: 'REGI_GU'}
    ]);


    GetComponent('DBGrid_배당금건물_계산D').GetRowCount('배당표_배당금계산건물_RowCount');

    if (GetValue('배당표_배당금계산건물_RowCount') > -1000) {

        for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산건물_RowCount'); SetValue('i', GetValue('i') + 1)) {
            MC_건물배당금계산_SYNC();
        }


        GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();

    }


    if (true) {
        return false;
    }


    GetComponent('DBGrid_배당금건물_계산M').GetCurSel('건물_그리드_IDX');


    MC_건물_그리드_인덱스_Sync();

}

function MC_저장_건물의표시() {


    RunQuery('저장_건물의표시', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_건물의표시_년도': GetValue('저장_건물의표시_년도'),
        '저장_건물의표시_일련번호': GetValue('저장_건물의표시_일련번호'),
        '저장_건물의표시_순번': GetValue('저장_건물의표시_순번'),
        '저장_건물의표시_등기구분': GetValue('저장_건물의표시_등기구분'),
        '저장_건물의표시_지번': GetValue('저장_건물의표시_지번'),
        '저장_건물의표시_건축일자': GetValue('저장_건물의표시_건축일자'),
        '저장_건물의표시_구조': GetValue('저장_건물의표시_구조'),
        '저장_건물의표시_지붕': GetValue('저장_건물의표시_지붕'),
        '저장_건물의표시_층별': GetValue('저장_건물의표시_층별'),
        '저장_건물의표시_주용도': GetValue('저장_건물의표시_주용도'),
        '저장_건물의표시_건물의면적': GetValue('저장_건물의표시_건물의면적'),
        '저장_건물의표시_건물의면적_평': GetValue('저장_건물의표시_건물의면적_평'),
        '저장_담보제공비율_건물_전체면적': GetValue('저장_담보제공비율_건물_전체면적'),
        '저장_담보제공비율_건물_분자': GetValue('저장_담보제공비율_건물_분자'),
        '저장_담보제공비율_건물_분모': GetValue('저장_담보제공비율_건물_분모'),
        '저장_담보제공비율_건물_비율': GetValue('저장_담보제공비율_건물_비율'),
        '저장_담보제공비율_건물_담보제공면적': GetValue('저장_담보제공비율_건물_담보제공면적'),
        '저장_담보제공비율_건물_사유': GetValue('저장_담보제공비율_건물_사유')
    }, 'POST');


    RunQuery('Q_건물의표시', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_담보제공비율() {

    RunQuery('저장_담보제공비율', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_담보제공비율_전체면적': GetValue('저장_담보제공비율_전체면적'),
        '저장_담보제공비율_분자': GetValue('저장_담보제공비율_분자'),
        '저장_담보제공비율_분모': GetValue('저장_담보제공비율_분모'),
        '저장_담보제공비율_비율': GetValue('저장_담보제공비율_비율'),
        '저장_담보제공비율_담보제공면적': GetValue('저장_담보제공비율_담보제공면적'),
        '저장_담보제공비율_사유': GetValue('저장_담보제공비율_사유'),
        '저장_담보제공비율_년도': GetValue('저장_담보제공비율_년도'),
        '저장_담보제공비율_일련번호': GetValue('저장_담보제공비율_일련번호'),
        '저장_담보제공비율_순번': GetValue('저장_담보제공비율_순번')
    }, 'POST');


    RunQuery('Q_담보제공비율', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_본건인근의가격수준() {

    RunQuery('저장_본건인근지역의가격수준', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'BU_MIN_PY_AMT': GetValue('Edit_본건인근지역_상업용_최저가_평'),
        'BU_MIN_M2_AMT': GetValue('Edit_본건인근지역_상업용_최저가'),
        'BU_MAX_PY_AMT': GetValue('Edit_본건인근지역_상업용_최고가_평'),
        'BU_MAX_M2_AMT': GetValue('Edit_본건인근지역_상업용_최고가'),
        'HO_MIN_PY_AMT': GetValue('Edit_본건인근지역_주거용_최저가_평'),
        'HO_MIN_M2_AMT': GetValue('Edit_본건인근지역_주거용_최저가'),
        'HO_MAX_PY_AMT': GetValue('Edit_본건인근지역_주거용_최고가_평'),
        'HO_MAX_M2_AMT': GetValue('Edit_본건인근지역_주거용_최고가'),
        'GE_MIN_PY_AMT': GetValue('Edit_본건인근지역_일반용_최저가_평'),
        'GE_MIN_M2_AMT': GetValue('Edit_본건인근지역_일반용_최저가'),
        'GE_MAX_PY_AMT': GetValue('Edit_본건인근지역_일반용_최고가_평'),
        'GE_MAX_M2_AMT': GetValue('Edit_본건인근지역_일반용_최고가'),
        'FI_MIN_PY_AMT': GetValue('Edit_본건인근지역_전_최저가_평'),
        'FI_MIN_M2_AMT': GetValue('Edit_본건인근지역_전_최저가'),
        'FI_MAX_PY_AMT': GetValue('Edit_본건인근지역_전_최고가_평'),
        'FI_MAX_M2_AMT': GetValue('Edit_본건인근지역_전_최고가'),
        'FA_MIN_PY_AMT': GetValue('Edit_본건인근지역_답_최저가_평'),
        'FA_MIN_M2_AMT': GetValue('Edit_본건인근지역_답_최저가'),
        'FA_MAX_PY_AMT': GetValue('Edit_본건인근지역_답_최고가_평'),
        'FA_MAX_M2_AMT': GetValue('Edit_본건인근지역_답_최고가'),
        'WO_MIN_PY_AMT': GetValue('Edit_본건인근지역_임야_최저가_평'),
        'WO_MIN_M2_AMT': GetValue('Edit_본건인근지역_임야_최저가'),
        'WO_MAX_PY_AMT': GetValue('Edit_본건인근지역_임야_최고가_평'),
        'WO_MAX_M2_AMT': GetValue('Edit_본건인근지역_임야_최고가'),
    }, 'POST');

}

function MC_저장_기타요인() {

    RunQuery('저장_기타요인', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_기타요인_년도': GetValue('저장_기타요인_년도'),
        '저장_기타요인_일련번호': GetValue('저장_기타요인_일련번호'),
        '저장_기타요인_일단지구분': GetValue('저장_기타요인_일단지구분'),
        '저장_기타요인_표준지공시지가': GetValue('저장_기타요인_표준지공시지가'),
        '저장_기타요인_가격수준': GetValue('저장_기타요인_가격수준'),
        '저장_기타요인_최저': GetValue('저장_기타요인_최저'),
        '저장_기타요인_최고': GetValue('저장_기타요인_최고'),
        '저장_기타요인_비준가격': GetValue('저장_기타요인_비준가격'),
        '저장_기타요인_산정보정률': GetValue('저장_기타요인_산정보정률'),
        '저장_기타요인_사정보정률': GetValue('저장_기타요인_사정보정률'),
        '저장_기타요인_적용보정률': GetValue('저장_기타요인_적용보정률'),
        '저장_기타요인_사유': GetValue('저장_기타요인_사유')
    }, 'POST');


    RunQuery('Q_기타요인', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_담보_건물() {

    RunQuery('저장_담보_건물', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_담보_건물_평가가격': GetValue('저장_담보_건물_평가가격'),
        '저장_담보_건물_최종평가가격': GetValue('저장_담보_건물_최종평가가격'),
        '저장_담보_건물_년도': GetValue('저장_담보_건물_년도'),
        '저장_담보_건물_일련번호': GetValue('저장_담보_건물_일련번호'),
        '저장_담보_건물_순번': GetValue('저장_담보_건물_순번')
    }, 'POST');

    // RunQuery('Q_담보_건축', {
    //     '년도': GetValue('년도'),
    //     '감정순번': GetValue('감정순번')
    // }, 'GET');

}

function MC_저장_건물단가() {

    RunQuery('저장_건물단가', {
        '저장_건물단가_년도': GetValue('저장_건물단가_년도'),
        '저장_건물단가_일련번호': GetValue('저장_건물단가_일련번호'),
        '저장_건물단가_순번': GetValue('저장_건물단가_순번'),
        '저장_건물단가_등기구분': GetValue('저장_건물단가_등기구분'),
        '저장_건물단가_층별': GetValue('저장_건물단가_층별'),
        '저장_건물단가_표준단가_급수': GetValue('저장_건물단가_표준단가_급수'),
        '저장_건물단가_표준단가_적용단가': GetValue('저장_건물단가_표준단가_적용단가'),
        '저장_건물단가_증개축여부_횟수': GetValue('저장_건물단가_증개축여부_횟수'),
        '저장_건물단가_증개축여부_적용지수': GetValue('저장_건물단가_증개축여부_적용지수'),
        '저장_건물단가_관리상태_상중하': GetValue('저장_건물단가_관리상태_상중하'),
        '저장_건물단가_관리상태_적용지수': GetValue('저장_건물단가_관리상태_적용지수'),
        '저장_건물단가_부대설비_냉난방': GetValue('저장_건물단가_부대설비_냉난방'),
        '저장_건물단가_부대설비_냉난방_적용단가': GetValue('저장_건물단가_부대설비_냉난방_적용단가'),
        '저장_건물단가_부대설비_엘리베이터': GetValue('저장_건물단가_부대설비_엘리베이터'),
        '저장_건물단가_부대설비_엘리베이터_적용단가': GetValue('저장_건물단가_부대설비_엘리베이터_적용단가'),
        '저장_건물단가_부대설비_위생설비': GetValue('저장_건물단가_부대설비_위생설비'),
        '저장_건물단가_부대설비_위생설비_적용단가': GetValue('저장_건물단가_부대설비_위생설비_적용단가'),
        '저장_건물단가_부대설비_화재탐지': GetValue('저장_건물단가_부대설비_화재탐지'),
        '저장_건물단가_부대설비_화재탐지_적용단가': GetValue('저장_건물단가_부대설비_화재탐지_적용단가'),
        '저장_건물단가_부대설비_기타': GetValue('저장_건물단가_부대설비_기타'),
        '저장_건물단가_부대설비_기타_적용단가': GetValue('저장_건물단가_부대설비_기타_적용단가'),
        '저장_건물단가_부대설비_총보정단가': GetValue('저장_건물단가_부대설비_총보정단가'),
        '저장_건물단가_잔가율_건축년도': GetValue('저장_건물단가_잔가율_건축년도'),
        '저장_건물단가_잔가율_경과년수': GetValue('저장_건물단가_잔가율_경과년수'),
        '저장_건물단가_잔가율_내용년수': GetValue('저장_건물단가_잔가율_내용년수'),
        '저장_건물단가_잔가율_잔가율': GetValue('저장_건물단가_잔가율_잔가율'),
        '저장_건물단가_건물단가_산정단가': GetValue('저장_건물단가_건물단가_산정단가'),
        '저장_건물단가_건물단가_적용단가': GetValue('저장_건물단가_건물단가_적용단가'),
        '저장_건물단가_총단가조정지수': GetValue('저장_건물단가_총단가조정지수'),
        '저장_건물단가_적용보정률': GetValue('저장_건물단가_적용보정률'),
        '저장_건물단가_적용보정률_사유': GetValue('저장_건물단가_적용보정률_사유'),
    }, 'POST');

    RunQuery('Q_건물단가', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_담보제공비율_건물() {

    RunQuery('저장_담보제공비율_건물', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_담보제공비율_년도': GetValue('저장_담보제공비율_년도'),
        '저장_담보제공비율_일련번호': GetValue('저장_담보제공비율_일련번호'),
        '저장_담보제공비율_순번': GetValue('저장_담보제공비율_순번')
    }, 'POST');


    RunQuery('Q_담보제공비율_건물', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_본건토지() {

    RunQuery('저장_본건토지', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_본건토지_용도지역': GetValue('저장_본건토지_용도지역'),
        '저장_본건토지_이용현황': GetValue('저장_본건토지_이용현황'),
        '저장_본건토지_도로조건': GetValue('저장_본건토지_도로조건'),
        '저장_본건토지_형상': GetValue('저장_본건토지_형상'),
        '저장_본건토지_지형지세': GetValue('저장_본건토지_지형지세'),
        '저장_본건토지_년도': GetValue('저장_본건토지_년도'),
        '저장_본건토지_일련번호': GetValue('저장_본건토지_일련번호'),
        '저장_본건토지_순번': GetValue('저장_본건토지_순번')
    }, 'POST');

}

function MC_배당표_배당금건물_삭제M() {

    SetValue('배당표_배당금계산건물_IDX', GetArray('m_index', GetValue('i')))


    GetZoonData('Q_배당표_배당금건물_계산D').DeleteRow(GetNumber('배당표_배당금계산건물_IDX'));

}

function MC_배당표_배당금건물_삭제M_전체() {

    GetComponent('DBGrid_건물의표시').GetRow(-1, [
        {key: '건물의표시_건물의표시순번', value: 'LN_SEQ'}
    ]);


    GetZoonData('Q_배당표_배당금건물_계산D').FindIndexArray('m_index', (row) => {

        if ((row['LN_SEQ'] == GetValue('건물의표시_건물의표시순번'))) {
            return true;
        }

        return false;
    });


    SetValue('배당표_배당금계산건물_RowCount', GetArrayCnt('m_index') - 1)


    for (SetValue('i', GetNumber('배당표_배당금계산건물_RowCount')); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_배당표_배당금건물_삭제M();
    }


    GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();

}

function MC_배당표_배당금_채권최고액건물_계산() {


    if (GetArray('배당표_배당금계산건물_말소여부_Arr', GetValue('i')) == "Y") {
        RemoveArray('배당표_배당금계산건물_단독담보_Arr', GetValue('i'))
        RemoveArray('배당표_배당금계산건물_공동담보_Arr', GetValue('i'))
    }

}

function MC_저장_비준가격산정사례() {

    RunQuery('저장_비준가격산정사례', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_비준가격산정사례_년도': GetValue('저장_비준가격산정사례_년도'),
        '저장_비준가격산정사례_일련번호': GetValue('저장_비준가격산정사례_일련번호'),
        '저장_비준가격산정사례_사례순번': GetValue('저장_비준가격산정사례_사례순번'),
        '저장_비준가격산정사례_사례구분': GetValue('저장_비준가격산정사례_사례구분'),
        '저장_비준가격산정사례_경매사건번호': GetValue('저장_비준가격산정사례_경매사건번호'),
        '저장_비준가격산정사례_소재지': GetValue('저장_비준가격산정사례_소재지'),
        '저장_비준가격산정사례_조사금액': GetValue('저장_비준가격산정사례_조사금액'),
        '저장_비준가격산정사례_면적': GetValue('저장_비준가격산정사례_면적'),
        '저장_비준가격산정사례_면적_평': GetValue('저장_비준가격산정사례_면적_평'),
        '저장_비준가격산정사례_용도지역': GetValue('저장_비준가격산정사례_용도지역'),
        '저장_비준가격산정사례_지목': GetValue('저장_비준가격산정사례_지목'),
        '저장_비준가격산정사례_이용현황': GetValue('저장_비준가격산정사례_이용현황'),
        '저장_비준가격산정사례_도로조건': GetValue('저장_비준가격산정사례_도로조건'),
        '저장_비준가격산정사례_형상': GetValue('저장_비준가격산정사례_형상'),
        '저장_비준가격산정사례_지형지세': GetValue('저장_비준가격산정사례_지형지세'),
        '저장_비준가격산정사례_사례가격': GetValue('저장_비준가격산정사례_사례가격')
    }, 'POST');


    RunQuery('Q_비준가격산정', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_기준가격() {

    RunQuery('저장_기준가격', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_기준가격_년도': GetValue('저장_기준가격_년도'),
        '저장_기준가격_일련번호': GetValue('저장_기준가격_일련번호'),
        '저장_기준가격_발생순번': GetValue('저장_기준가격_발생순번'),
        '저장_기준가격_일단지구분': GetValue('저장_기준가격_일단지구분'),
        '저장_기준가격_표준지구분': GetValue('저장_기준가격_표준지구분'),
        '저장_기준가격_표준지공시지가': GetValue('저장_기준가격_표준지공시지가'),
        '저장_기준가격_시점수정_본건_날짜': GetValue('저장_기준가격_시점수정_본건_날짜'),
        '저장_기준가격_시점수정_사례_날짜': GetValue('저장_기준가격_시점수정_사례_날짜'),
        '저장_기준가격_시점수정_본건': GetValue('저장_기준가격_시점수정_본건'),
        '저장_기준가격_시점수정_사례': GetValue('저장_기준가격_시점수정_사례'),
        '저장_기준가격_시점수정_비교치': GetValue('저장_기준가격_시점수정_비교치'),
        '저장_기준가격_소재지_본건': GetValue('저장_기준가격_소재지_본건'),
        '저장_기준가격_소재지_사례': GetValue('저장_기준가격_소재지_사례'),
        '저장_기준가격_소재지_비교치': GetValue('저장_기준가격_소재지_비교치'),
        '저장_기준가격_도로접면_본건': GetValue('저장_기준가격_도로접면_본건'),
        '저장_기준가격_도로접면_표준지': GetValue('저장_기준가격_도로접면_표준지'),
        '저장_기준가격_도로접면_비교치': GetValue('저장_기준가격_도로접면_비교치'),
        '저장_기준가격_도로거리_본건': GetValue('저장_기준가격_도로거리_본건'),
        '저장_기준가격_도로거리_표준지': GetValue('저장_기준가격_도로거리_표준지'),
        '저장_기준가격_도로거리_비교치': GetValue('저장_기준가격_도로거리_비교치'),
        '저장_기준가격_관공서_본건': GetValue('저장_기준가격_관공서_본건'),
        '저장_기준가격_관공서_표준지': GetValue('저장_기준가격_관공서_표준지'),
        '저장_기준가격_관공서_비교치': GetValue('저장_기준가격_관공서_비교치'),
        '저장_기준가격_중심지역_본건': GetValue('저장_기준가격_중심지역_본건'),
        '저장_기준가격_중심지역_표준지': GetValue('저장_기준가격_중심지역_표준지'),
        '저장_기준가격_중심지역_비교치': GetValue('저장_기준가격_중심지역_비교치'),
        '저장_기준가격_기타접근성_본건': GetValue('저장_기준가격_기타접근성_본건'),
        '저장_기준가격_기타접근성_표준지': GetValue('저장_기준가격_기타접근성_표준지'),
        '저장_기준가격_기타접근성_비교치': GetValue('저장_기준가격_기타접근성_비교치'),
        '저장_기준가격_철도_본건': GetValue('저장_기준가격_철도_본건'),
        '저장_기준가격_철도_표준지': GetValue('저장_기준가격_철도_표준지'),
        '저장_기준가격_철도_비교치': GetValue('저장_기준가격_철도_비교치'),
        '저장_기준가격_폐기물_본건': GetValue('저장_기준가격_폐기물_본건'),
        '저장_기준가격_폐기물_표준지': GetValue('저장_기준가격_폐기물_표준지'),
        '저장_기준가격_폐기물_비교치': GetValue('저장_기준가격_폐기물_비교치'),
        '저장_기준가격_기타환경_본건': GetValue('저장_기준가격_기타환경_본건'),
        '저장_기준가격_기타환경_표준지': GetValue('저장_기준가격_기타환경_표준지'),
        '저장_기준가격_기타환경_비교치': GetValue('저장_기준가격_기타환경_비교치'),
        '저장_기준가격_용도지역_본건': GetValue('저장_기준가격_용도지역_본건'),
        '저장_기준가격_용도지역_표준지': GetValue('저장_기준가격_용도지역_표준지'),
        '저장_기준가격_용도지역_비교치': GetValue('저장_기준가격_용도지역_비교치'),
        '저장_기준가격_용도지구_본건': GetValue('저장_기준가격_용도지구_본건'),
        '저장_기준가격_용도지구_표준지': GetValue('저장_기준가격_용도지구_표준지'),
        '저장_기준가격_용도지구_비교치': GetValue('저장_기준가격_용도지구_비교치'),
        '저장_기준가격_도시계획_본건': GetValue('저장_기준가격_도시계획_본건'),
        '저장_기준가격_도시계획_표준지': GetValue('저장_기준가격_도시계획_표준지'),
        '저장_기준가격_도시계획_비교치': GetValue('저장_기준가격_도시계획_비교치'),
        '저장_기준가격_기타제한_본건': GetValue('저장_기준가격_기타제한_본건'),
        '저장_기준가격_기타제한_표준지': GetValue('저장_기준가격_기타제한_표준지'),
        '저장_기준가격_기타제한_비교치': GetValue('저장_기준가격_기타제한_비교치'),
        '저장_기준가격_고저_본건': GetValue('저장_기준가격_고저_본건'),
        '저장_기준가격_고저_표준지': GetValue('저장_기준가격_고저_표준지'),
        '저장_기준가격_고저_비교치': GetValue('저장_기준가격_고저_비교치'),
        '저장_기준가격_형상_본건': GetValue('저장_기준가격_형상_본건'),
        '저장_기준가격_형상_표준지': GetValue('저장_기준가격_형상_표준지'),
        '저장_기준가격_형상_비교치': GetValue('저장_기준가격_형상_비교치'),
        '저장_기준가격_방위_본건': GetValue('저장_기준가격_방위_본건'),
        '저장_기준가격_방위_표준지': GetValue('저장_기준가격_방위_표준지'),
        '저장_기준가격_방위_비교치': GetValue('저장_기준가격_방위_비교치'),
        '저장_기준가격_면적_본건': GetValue('저장_기준가격_면적_본건'),
        '저장_기준가격_면적_표준지': GetValue('저장_기준가격_면적_표준지'),
        '저장_기준가격_면적_비교치': GetValue('저장_기준가격_면적_비교치'),
        '저장_기준가격_토지이용_본건': GetValue('저장_기준가격_토지이용_본건'),
        '저장_기준가격_토지이용_표준지': GetValue('저장_기준가격_토지이용_표준지'),
        '저장_기준가격_토지이용_비교치': GetValue('저장_기준가격_토지이용_비교치'),
        '저장_기준가격_기타_본건': GetValue('저장_기준가격_기타_본건'),
        '저장_기준가격_기타_표준지': GetValue('저장_기준가격_기타_표준지'),
        '저장_기준가격_기타_비교치': GetValue('저장_기준가격_기타_비교치'),
        '저장_기준가격_장래_본건': GetValue('저장_기준가격_장래_본건'),
        '저장_기준가격_장래_표준지': GetValue('저장_기준가격_장래_표준지'),
        '저장_기준가격_장래_비교치': GetValue('저장_기준가격_장래_비교치'),
        '저장_기준가격_기타조건_본건': GetValue('저장_기준가격_기타조건_본건'),
        '저장_기준가격_기타조건_표준지': GetValue('저장_기준가격_기타조건_표준지'),
        '저장_기준가격_기타조건_비교치': GetValue('저장_기준가격_기타조건_비교치'),
        '저장_기준가격_감가율': GetValue('저장_기준가격_감가율'),
        '저장_기준가격_요인합계': GetValue('저장_기준가격_요인합계'),
        '저장_기준가격_적용요인합계': GetValue('저장_기준가격_적용요인합계'),
        '저장_기준가격_산정단가': GetValue('저장_기준가격_산정단가'),
        '저장_기준가격_적용단가': GetValue('저장_기준가격_적용단가')
    }, 'POST');


    RunQuery('Q_기준가격', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_비준가격_참조값_표준지() {

    GetComponent('DBGrid_비준가격').GetRow(-1, [
        {key: '비준가격_사례번호', value: 'EX_NO'}
    ]);


    if (isEmpty((GetValue('비준가격_사례번호')))) {
        return false;
    }


    GetComponent('DBGrid_비준가격_산정사례').FindIndex('비준가격산정사례_RowPosition', (row) => {

        if ((row['EX_NO'] == GetValue('비준가격_사례번호'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_비준가격_산정사례').GetRow(GetNumber('비준가격산정사례_RowPosition'), [
        {key: '비준가격산정사례_사례가격', value: 'EXAMPLE_PRICE'},
        {key: '비준가격산정사례_소재지', value: 'JUSO1'},
        {key: '비준가격산정사례_도로조건', value: 'OF_ROAD_CODE'},
        {key: '비준가격산정사례_용도지역', value: 'USE_AREA'},
        {key: '비준가격산정사례_지형지세', value: 'L_UNDUR_CODE'},
        {key: '비준가격산정사례_형상', value: 'L_SHAPE_CODE'},
        {key: '비준가격산정사례_이용현황', value: 'L_USE_CODE'},
        {key: '비준가격산정사례_사례구분', value: 'EX_DIV'}
    ]);


    SetValue('Edit_비준가격_표준지요인_가격사례', GetValue('비준가격산정사례_사례가격'))
    SetValue('Edit_비준가격_표준지요인_소재지', GetValue('비준가격산정사례_소재지'))
    SetValue('Combo_비준가격_표준지요인_도로조건', GetValue('비준가격산정사례_도로조건'))
    SetValue('Combo_비준가격_표준지요인_용도지역', GetValue('비준가격산정사례_용도지역'))
    SetValue('Combo_비준가격_표준지요인_고저', GetValue('비준가격산정사례_지형지세'))
    SetValue('Combo_비준가격_표준지요인_형상', GetValue('비준가격산정사례_형상'))
    SetValue('Combo_비준가격_표준지요인_토지이용상황', GetValue('비준가격산정사례_이용현황'))


    GetComponent('DBGrid_비준가격').SetRow(-1, [
        {key: 'JUSO_S', value: GetValue('비준가격산정사례_소재지')},
        {key: 'USE_AREA_S', value: GetValue('비준가격산정사례_용도지역')},
        {key: 'L_UNDUR_CODE_S', value: GetValue('비준가격산정사례_지형지세')},
        {key: 'L_SHAPE_CODE_S', value: GetValue('비준가격산정사례_형상')},
        {key: 'L_OF_GU_S', value: GetValue('비준가격산정사례_이용현황')},
        {key: 'STD_ANNO_AMT', value: GetValue('비준가격산정사례_사례가격')},
        {key: 'ROAD_SIDE_S', value: GetValue('비준가격산정사례_도로조건')},
        {key: 'EX_DIV', value: GetValue('비준가격산정사례_사례구분')}
    ]);


    MC_비준가격_요인합계();

}

function MC_저장_ValidationCheck_담보제공비율() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (GetArray('저장_담보제공비율_분모', GetValue('i')) <= 0) {
        SetValue('저장_Error_Message', "담보제공비율_분모를 입력하여 주십시오.")

    }


    if (GetArray('저장_담보제공비율_분자', GetValue('i')) <= 0) {
        SetValue('저장_Error_Message', "담보제공비율_분자를 입력하여 주십시오.")

    }

}

function MC_저장_입력표_건물() {

    RunQuery('저장_입력표_건물', {
            'YYYY': GetValue('년도'),
            'SEQ': GetValue('감정순번'),
            'B_USE_CODE': GetValue('Edit_건물의주된용도'),
            'H_POSS_A_AREA': GetValue('Combo_가임대보증금_주택'),
            'M_POSS_A_AREA': GetValue('Combo_가임대보증금_상가'),
            'REGI_AMT': GetValue('Edit_실거래가격_총액'),
            'REGI_DAN': GetValue('Edit_실거래가격_단가'),
            'REGI_DAN_PY': GetValue('Edit_실거래가격_평당단가'),
            'HOUS_AMT': GetValue('Edit_개별주택가격_총액'),
            'HOUS_DAN': GetValue('Edit_개별주택가격_단가'),
            'HOUS_DAN_PY': GetValue('Edit_개별주택가격_평당단가')
    }, 'POST');

}

function MC_저장_ValidationCheck_비준가격() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_비준가격_일단지구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정_일단지구분을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격_사례번호', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정_사례번호를 선택하여 주십시오.")

    }

}

function MC_저장_ValidationCheck_표준지공시지가() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_표준지공시지가_표준지공시지가', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_표준지공시지가를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_형상', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_형상을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_도로조건', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_도로조건을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_이용현황', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_이용현황을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_용도지역', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_용도지역을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_면적', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_면적을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_지번', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_지번을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_소재지', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_소재지를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_표준지공시지가_표준지구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가의선정_구분을 입력하여 주십시오.")

    }

}

function MC_저장_ValidationCheck_본건토지() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_본건토지_형상', GetValue('i')))) {
        SetValue('저장_Error_Message', "본건토지_형상을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_본건토지_도로조건', GetValue('i')))) {
        SetValue('저장_Error_Message', "본건토지_도로조건을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_본건토지_이용현황', GetValue('i')))) {
        SetValue('저장_Error_Message', "본건토지_이용현황을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_본건토지_용도지역', GetValue('i')))) {
        SetValue('저장_Error_Message', "본건토지_용도지역을 선택하여 주십시오.")

    }

}

function MC_Combo_사례번호() {

    GetComponent('DBGrid_비준가격_산정사례').GetRows("", [
        {key: 'Combo_사례번호_Arr', value: 'EX_NO'}
    ]);


    SetValue('Combo_사례번호_Count', GetArrayCnt('Combo_사례번호_Arr'))


    SetValue('Combo_사례번호_SQL', "")


    for (SetValue('i', 0); GetValue('i') < GetNumber('Combo_사례번호_Count'); SetValue('i', GetValue('i') + 1)) {
        MC_Combo_사례번호_SQL();
    }


    RunQuery('Q_사례번호갱신', {
        'Combo_사례번호_Count': GetValue('Combo_사례번호_Count'),
        'Combo_사례번호_SQL1': GetValue('Combo_사례번호_SQL1'),
        'Combo_사례번호_SQL2': GetValue('Combo_사례번호_SQL2'),
        'Combo_사례번호_SQL3': GetValue('Combo_사례번호_SQL3'),
        'Combo_사례번호_SQL4': GetValue('Combo_사례번호_SQL4'),
        'Combo_사례번호_SQL5': GetValue('Combo_사례번호_SQL5'),
        'Combo_사례번호_SQL6': GetValue('Combo_사례번호_SQL6'),
        'Combo_사례번호_SQL7': GetValue('Combo_사례번호_SQL7'),
        'Combo_사례번호_SQL8': GetValue('Combo_사례번호_SQL8'),
        'Combo_사례번호_SQL9': GetValue('Combo_사례번호_SQL9'),
        'Combo_사례번호_SQL10': GetValue('Combo_사례번호_SQL10'),
        'Combo_사례번호_SQL11': GetValue('Combo_사례번호_SQL11')
    }, 'GET');

}

function MC_보정표_예상낙찰가_건물_계산() {

    SetValue('보정표_예상낙찰가_건물', GetValue('보정표_예상낙찰가_건물') + (GetArray('담보_건물_최종평가가액_Arr', GetValue('i')) * GetValue('Edit_보정표_적용할낙찰가율')))

}

function MC_저장_ValidationCheck_비준가격산정사례() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_비준가격산정사례_사례가격', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "비준가격산정사례_사례가격을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_형상', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정사례_형상을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_도로조건', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정사례_도로조건을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_이용현황', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정사례_이용현황을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_지목', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정사례_지목을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_용도지역', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정사례_용도지역을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_면적', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "비준가격산정사례_면적을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_조사금액', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "비준가격산정사례_조사금액을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_소재지', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정사례_소재지를 입력하여 주십시오.")

    }


    if (GetArray('저장_비준가격산정사례_사례구분', GetValue('i')) == "1"
        && isEmpty(GetArray('저장_비준가격산정사례_경매사건번호', GetValue('i'))))
    {
        SetValue('저장_Error_Message', "비준가격산정사례_경매사건번호를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_사례구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "비준가격산정사례_사례구분을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_비준가격산정사례_사례순번', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "비준가격산정사례_사례번호를 입력하여 주십시오.")

    }

}

function MC_Combo_사례번호_SQL() {


    if (GetValue('i') == 0) {
        SetValue('Combo_사례번호_SQL1', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 1) {
        SetValue('Combo_사례번호_SQL2', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 2) {
        SetValue('Combo_사례번호_SQL3', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 3) {
        SetValue('Combo_사례번호_SQL4', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 4) {
        SetValue('Combo_사례번호_SQL5', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 5) {
        SetValue('Combo_사례번호_SQL6', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 6) {
        SetValue('Combo_사례번호_SQL7', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 7) {
        SetValue('Combo_사례번호_SQL8', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 8) {
        SetValue('Combo_사례번호_SQL9', GetArray('Combo_사례번호_Arr', GetValue('i')))
    } else if (GetValue('i') == 9) {
        SetValue('Combo_사례번호_SQL10', GetArray('Combo_사례번호_Arr', GetValue('i')))
    }

}

function MC_저장_ValidationCheck_기타요인() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_기타요인_사정보정률', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "기타요인_사정보정률을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_기타요인_가격수준', GetValue('i')))) {
        SetValue('저장_Error_Message', "기타요인_가격수준을 선택하여 주십시오.")

    }

}

function MC_저장_문서관리() {

    RunQuery('저장_문서관리', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_문서관리_년도': GetValue('저장_문서관리_년도'),
        '저장_문서관리_일련번호': GetValue('저장_문서관리_일련번호'),
        '저장_문서관리_사진구분': GetValue('저장_문서관리_사진구분'),
        '저장_문서관리_순번': GetValue('저장_문서관리_순번'),
        '저장_문서관리_사진명': GetValue('저장_문서관리_사진명'),
        '저장_문서관리_경로및파일명': GetValue('저장_문서관리_경로및파일명'),
        '저장_문서관리_비고': GetValue('저장_문서관리_비고'),
        '저장_문서관리_전송된사진명': GetValue('저장_문서관리_전송된사진명')
    }, 'POST');


    RunQuery('Q_문서관리_사진', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_Key만들기() {

    RunQuery('Q_감정순번', {}, 'GET');


    GetZoonData('Q_감정순번').GetRow(0, [
        {key: 'Edit_감정순번', value: 'SEQ'},
        {key: '감정순번', value: 'SEQ'}
    ]);

}

function MC_보정표_예상낙찰가_건물_계산_예상낙찰가() {

    SetValue('담보_건물_최종평가가액', GetArray('담보_건물_최종평가가액_Arr', GetValue('i')) * GetValue('Edit_보정표_적용할낙찰가율'))
    SetValue('배당표_배당금계산_순번', GetArray('배당표_배당금계산_순번_Arr', GetValue('i')))
    SetValue('담보_건물_최종평가가액', GetValue('담보_건물_최종평가가액') / 100)


    GetComponent('DBGrid_배당금건물_계산M').FindIndex('00_RowIndex', (row) => {

        if ((row['REGI_GU'] == GetValue('배당표_배당금계산_순번'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_배당금건물_계산M').SetRow(GetValue('00_RowIndex'), [
        {key: 'FNL_INC_AMT', value: GetValue('담보_건물_최종평가가액')}
    ], true);


    GetComponent('DBGrid_감정가액산출내역_건물').FindIndex('00_RowIndex', (row) => {

        if ((row['REGI_GU'] == GetValue('배당표_배당금계산_순번'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_감정가액산출내역_건물').SetRow(GetValue('00_RowIndex'), [
        {key: 'FNL_INC_AMT', value: GetValue('담보_건물_최종평가가액')}
    ], true);


    MC_보정표_감정가격산출내역_합계();

}

function MC_저장_입력표() {

    GetComponent('DBGrid_담보').GetRows("", [
        {key: '담보_최종평가가액_Arr', value: 'FNL_INC_AMT'}
    ]);


    GetComponent('DBGrid_담보_건물').GetRows("", [
        {key: '담보_건물_최종평가가액_Arr', value: 'FNL_INC_AMT'}
    ]);


    SetValue('담보_최종평가가액', Sum('담보_최종평가가액_Arr') + Sum('담보_건물_최종평가가액_Arr'))


    RunQuery('저장_담보마스터', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'SEC_CODE': GetValue('Combo_집합건물종류'),
        'ESTI_DATE': GetValue('MkEdit_감정일'),
        'GEO_CODE': GetValue('Edit_거래처코드'),
        'SANGHO': GetValue('Edit_거래처'),
        'DAEPYO_NAME': GetValue('Edit_대표자'),
        'MARKET_NAME': GetValue('Edit_업소명'),
        'MARKET_CEO': GetValue('Edit_업소대표자'),
        'DEBTOR': GetValue('Edit_채무자'),
        'GUARANTOR': GetValue('Edit_담보제공자'),
        'DEBTOR_RELATION': GetValue('Edit_채무자와담보제공자의관계'),
        'JUM_CODE': GetValue('_부서코드'),
        'REQ_JUM': GetValue('_부서코드'),
        'PROC_DIV': GetValue('결재진행현황'),
        'JUM_SABUN': GetValue('Edit_감정자사번'),
        'MARKET_DIV': GetValue('Combo_입력표_업소구분'),
        'JUSO1': GetValue('Edit_소재지'),
        'L_SIZE': GetValue('Edit_토지의표시_합계_면적'),
        'L_SIZE_PY': GetValue('Edit_토지의표시_합계_면적_평'),
        'B_SIZE': GetValue('Edit_건물의표시_합계_면적'),
        'B_SIZE_PY': GetValue('Edit_건물의표시_합계_면적_평'),
        'CURR_AMT': 0,
        'PLMIN_BID_AMT': GetValue('담보_최종평가가액'),
        'PL_BID_AMT': GetNumber('Edit_보정표_예상낙찰가'),
        'C_CL_AMT': 0,
        'L_CL_AMT': 0,
        'B_CL_AMT': 0,
        'C_PL_RANK': 0,
        'C_PL_AMT': 0,
        'L_PL_RANK': 0,
        'L_PL_AMT': 0,
        'B_PL_RANK': 0,
        'B_PL_AMT': 0,
        'DOC_KEY': GetValue('Edit_Doc_Key'),
        'INCREASE_AMT': GetValue('Edit_보정표_평가가격'),
        'APPL_RATE': GetValue('Edit_보정표_적용할낙찰가율'),
        'PRE_BOND_AMT': 0,
        'SPARE_SEC_AMT': 0,
        'EXCEED_YN': '',
        'EXCEED_AMT': 0,
        'RES_PL_BID_AMT': 0,
        'BID_USE_YN': GetValue('응찰_입력표활성여부'),
        'APPRAISE_GU': GetValue('Combo_보고서_평가구분'),
        'PRE_YYYY': GetValue('_이전년도'),
        'PRE_SEQ': GetValue('_이전담보순번'),
        'LIQUOR_TYPE': GetValue('Combo_사업부문'),
    }, 'POST');

    if (isNotEmpty(GetValue('Edit_Doc_Key'))) {

        RunQuery('저장_결재자현황_영업_Clear', {
            'YYYY': GetValue('년도'),
            'SEQ': GetValue('감정순번')
        }, 'POST');


        RunQuery('저장_결재자현황_영업', {
            'DOC_KEY': GetValue('Edit_Doc_Key'),
            'YYYY': GetValue('년도'),
            'SEQ': GetValue('감정순번')
        }, 'POST');

    }


    RunQuery('저장_입력표', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'JUSO1': GetValue('Edit_소재지'),
        'JUSO2': GetValue('Edit_소재지_상세'),
        'REGI_AMT': GetValue('Edit_실거래가격_총액'),
        'REGI_DAN': GetValue('Edit_실거래가격_단가'),
        'REGI_DAN_PY': GetValue('Edit_실거래가격_평당단가'),
    }, 'POST');


    RunQuery('저장_규제의표시', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'REST_PL_USE': GetValue('Edit_국토의계획'),
        'REST_OT_LAW': GetValue('Edit_다른법률등'),
        'REST_EN_RULE': GetValue('Edit_시행령부칙'),
        'REST_FU_LAW': GetValue('Edit_토지이용규제'),
        'REST_MAIN_USE': GetValue('Edit_주변토지의주된'),
    }, 'POST');

}

function MC_저장_ValidationCheck() {

    GetComponent('TabControl1').GetCurSel('탭_Idx');


    SetValue('저장_Error_Message', "");


    GetComponent('TabControl1').SetCurSel(0.0);


    if (isEmpty(GetValue('Edit_업소명'))) {
        SetValue('저장_Error_Message', "업소명을 입력하여 주십시오.")
    }

    if (isEmpty(GetValue('Edit_거래처'))) {
        SetValue('저장_Error_Message', "제 1차 거래처를 선택하여 주십시오.")
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_토지의표시').GetModifyData([
        {key: '저장_토지의표시_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_토지의표시_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_토지의표시_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_토지의표시_일단지구분', value: 'POT_GU', isDelRowInclude: true},

        {key: '저장_토지의표시_최소행정구역', value: 'MIN_BOUND', isDelRowInclude: true},

        {key: '저장_토지의표시_지번', value: 'LOT_NUM', isDelRowInclude: true},

        {key: '저장_토지의표시_지목', value: 'LCATEGORY', isDelRowInclude: true},

        {key: '저장_토지의표시_면적', value: 'L_SIZE', isDelRowInclude: true},

        {key: '저장_토지의표시_면적_평', value: 'L_SIZE_PY', isDelRowInclude: true},

        {key: '저장_토지의표시_개별공시지가', value: 'ANNO_DAN', isDelRowInclude: true},

        {key: '저장_토지의표시_개별공시지가_평', value: 'ANNO_DAN_PY', isDelRowInclude: true},

        {key: '저장_토지의표시_개별공시지가_총', value: 'ANNO_AMT', isDelRowInclude: true},
    ]);


    SetValue('저장_토지의표시_RowCount', GetArrayCnt('저장_토지의표시_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_토지의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_토지의표시();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }

    GetComponent('DBGrid_담보제공비율_건물').GetModifyData([
        {key: '저장_담보제공비율_건물_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_등기구분', value: 'REGI_GU', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_분자', value: 'SEC_NUME', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_분모', value: 'SEC_DENO', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_전체면적', value: 'SEC_REGI_SIZE', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_비율', value: 'SEC_RATE', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_담보제공면적', value: 'SEC_OFFER_SIZE', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_사유', value: 'SEC_DESC', isDelRowInclude: true},
    ]);


    SetValue('저장_담보제공비율_건물_RowCount', GetArrayCnt('저장_담보제공비율_건물_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_담보제공비율_건물_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_담보제공비율_건물();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_건물의표시').GetModifyData([
        {key: '저장_건물의표시_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_건물의표시_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_건물의표시_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_건물의표시_등기구분', value: 'REGI_GU', isDelRowInclude: true},

        {key: '저장_건물의표시_지번', value: 'LOT_NUM', isDelRowInclude: true},

        {key: '저장_건물의표시_건축일자', value: 'CB_DATE', isDelRowInclude: true},

        {key: '저장_건물의표시_구조', value: 'CB_STRUC', isDelRowInclude: true},

        {key: '저장_건물의표시_지붕', value: 'CB_ROOF', isDelRowInclude: true},

        {key: '저장_건물의표시_층별', value: 'CB_FLOOR', isDelRowInclude: true},

        {key: '저장_건물의표시_주용도', value: 'CB_USE_MAIN', isDelRowInclude: true},

        {key: '저장_건물의표시_건물의면적', value: 'CB_SIZE', isDelRowInclude: true},

        {key: '저장_건물의표시_건물의면적_평', value: 'CB_SIZE_PY', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_분자', value: 'SEC_NUME', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_분모', value: 'SEC_DENO', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_비율', value: 'SEC_RATE', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_전체면적', value: 'SEC_REGI_SIZE', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_담보제공면적', value: 'SEC_OFFER_SIZE', isDelRowInclude: true},

        {key: '저장_담보제공비율_건물_사유', value: 'SEC_DESC', isDelRowInclude: true},
    ]);


    SetValue('저장_건물의표시_RowCount', GetArrayCnt('저장_건물의표시_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_건물의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_건물의표시();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }

    GetComponent('DBGrid_담보제공비율').GetModifyData([
        {key: '저장_담보제공비율_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_담보제공비율_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_담보제공비율_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_담보제공비율_일단지구분', value: 'POT_GU', isDelRowInclude: true},

        {key: '저장_담보제공비율_분자', value: 'SEC_NUME', isDelRowInclude: true},

        {key: '저장_담보제공비율_분모', value: 'SEC_DENO', isDelRowInclude: true},

        {key: '저장_담보제공비율_전체면적', value: 'SEC_REGI_SIZE', isDelRowInclude: true},

        {key: '저장_담보제공비율_비율', value: 'SEC_RATE', isDelRowInclude: true},

        {key: '저장_담보제공비율_담보제공면적', value: 'SEC_OFFER_SIZE', isDelRowInclude: true},

        {key: '저장_담보제공비율_사유', value: 'SEC_DESC', isDelRowInclude: true},
    ]);


    SetValue('저장_담보제공비율_RowCount', GetArrayCnt('저장_담보제공비율_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_담보제공비율_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_담보제공비율();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(1.0);


    GetComponent('DBGrid_본건토지').GetModifyData([
        {key: '저장_본건토지_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_본건토지_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_본건토지_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_본건토지_용도지역', value: 'USE_AREA', isDelRowInclude: true},

        {key: '저장_본건토지_이용현황', value: 'L_USE_CODE', isDelRowInclude: true},

        {key: '저장_본건토지_도로조건', value: 'OF_ROAD_CODE', isDelRowInclude: true},

        {key: '저장_본건토지_형상', value: 'L_SHAPE_CODE', isDelRowInclude: true},

        {key: '저장_본건토지_지형지세', value: 'L_UNDUR_CODE', isDelRowInclude: true},
    ]);


    SetValue('저장_본건토지_RowCount', GetArrayCnt('저장_본건토지_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_본건토지_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_본건토지();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_표준지공시지가').GetModifyData([
        {key: '저장_표준지공시지가_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_표준지공시지가_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_표준지공시지가_표준지구분', value: 'S_GU', isDelRowInclude: true},

        {key: '저장_표준지공시지가_소재지', value: 'JUSO1', isDelRowInclude: true},

        {key: '저장_표준지공시지가_지번', value: 'LOT_NUM', isDelRowInclude: true},

        {key: '저장_표준지공시지가_면적', value: 'L_SIZE', isDelRowInclude: true},

        {key: '저장_표준지공시지가_면적_평', value: 'L_SIZE_PY', isDelRowInclude: true},

        {key: '저장_표준지공시지가_용도지역', value: 'USE_AREA', isDelRowInclude: true},

        {key: '저장_표준지공시지가_지목', value: 'LCATEGORY', isDelRowInclude: true},

        {key: '저장_표준지공시지가_이용현황', value: 'L_USE_CODE', isDelRowInclude: true},

        {key: '저장_표준지공시지가_도로조건', value: 'OF_ROAD_CODE', isDelRowInclude: true},

        {key: '저장_표준지공시지가_형상', value: 'L_SHAPE_CODE', isDelRowInclude: true},

        {key: '저장_표준지공시지가_지형지세', value: 'L_UNDUR_CODE', isDelRowInclude: true},

        {key: '저장_표준지공시지가_표준지공시지가', value: 'STD_ANNO_AMT', isDelRowInclude: true},
    ]);


    SetValue('저장_표준지공시지가_RowCount', GetArrayCnt('저장_표준지공시지가_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_표준지공시지가_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_표준지공시지가();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_비준가격_산정사례').GetModifyData([
        {key: '저장_비준가격산정사례_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_사례순번', value: 'EX_NO', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_소재지', value: 'JUSO1', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_조사금액', value: 'SURVEY_AMT', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_면적', value: 'L_SIZE', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_면적_평', value: 'L_SIZE_PY', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_용도지역', value: 'USE_AREA', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_지목', value: 'LCATEGORY', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_이용현황', value: 'L_USE_CODE', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_도로조건', value: 'OF_ROAD_CODE', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_형상', value: 'L_SHAPE_CODE', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_지형지세', value: 'L_UNDUR_CODE', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_사례가격', value: 'EXAMPLE_PRICE', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_사례구분', value: 'EX_DIV', isDelRowInclude: true},

        {key: '저장_비준가격산정사례_경매사건번호', value: 'AU_NO', isDelRowInclude: true},
    ]);


    SetValue('저장_비준가격산정사례_RowCount', GetArrayCnt('저장_비준가격산정사례_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_비준가격산정사례_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_비준가격산정사례();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(2.0);

    GetComponent('DBGrid_기준가격').GetModifyData([
        {key: '저장_기준가격_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_기준가격_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_기준가격_발생순번', value: 'RNO', isDelRowInclude: true},

        {key: '저장_기준가격_일단지구분', value: 'POT_GU', isDelRowInclude: true},

        {key: '저장_기준가격_표준지구분', value: 'STD_GU', isDelRowInclude: true},

        {key: '저장_기준가격_표준지공시지가', value: 'STD_ANNO_AMT', isDelRowInclude: true},

        {key: '저장_기준가격_시점수정_본건', value: 'EDIT_M', isDelRowInclude: true},

        {key: '저장_기준가격_시점수정_사례', value: 'EDIT_S', isDelRowInclude: true},

        {key: '저장_기준가격_시점수정_비교치', value: 'EDIT_C', isDelRowInclude: true},

        {key: '저장_기준가격_소재지_본건', value: 'JUSO_M', isDelRowInclude: true},

        {key: '저장_기준가격_소재지_사례', value: 'JUSO_S', isDelRowInclude: true},

        {key: '저장_기준가격_소재지_비교치', value: 'JUSO_C', isDelRowInclude: true},

        {key: '저장_기준가격_도로접면_본건', value: 'ROAD_SIDE_M', isDelRowInclude: true},

        {key: '저장_기준가격_도로접면_비교치', value: 'ROAD_SIDE_C', isDelRowInclude: true},

        {key: '저장_기준가격_도로접면_표준지', value: 'ROAD_SIDE_S', isDelRowInclude: true},

        {key: '저장_기준가격_도로거리_본건', value: 'ROAD_DIST_M', isDelRowInclude: true},

        {key: '저장_기준가격_도로거리_비교치', value: 'ROAD_DIST_C', isDelRowInclude: true},

        {key: '저장_기준가격_도로거리_표준지', value: 'ROAD_DIST_S', isDelRowInclude: true},

        {key: '저장_기준가격_관공서_본건', value: 'GOV_ACSS_M', isDelRowInclude: true},

        {key: '저장_기준가격_관공서_비교치', value: 'GOV_ACSS_C', isDelRowInclude: true},

        {key: '저장_기준가격_관공서_표준지', value: 'GOV_ACSS_S', isDelRowInclude: true},

        {key: '저장_기준가격_중심지역_본건', value: 'CNTR_ACSS_M', isDelRowInclude: true},

        {key: '저장_기준가격_중심지역_비교치', value: 'CNTR_ACSS_C', isDelRowInclude: true},

        {key: '저장_기준가격_중심지역_표준지', value: 'CNTR_ACSS_S', isDelRowInclude: true},

        {key: '저장_기준가격_기타접근성_본건', value: 'ETC_ACSS_M', isDelRowInclude: true},

        {key: '저장_기준가격_기타접근성_비교치', value: 'ETC_ACSS_C', isDelRowInclude: true},

        {key: '저장_기준가격_기타접근성_표준지', value: 'ETC_ACSS_S', isDelRowInclude: true},

        {key: '저장_기준가격_철도_본건', value: 'RAIL_ACSS_M', isDelRowInclude: true},

        {key: '저장_기준가격_철도_비교치', value: 'RAIL_ACSS_C', isDelRowInclude: true},

        {key: '저장_기준가격_철도_표준지', value: 'RAIL_ACSS_S', isDelRowInclude: true},

        {key: '저장_기준가격_폐기물_본건', value: 'POLL_ACSS_M', isDelRowInclude: true},

        {key: '저장_기준가격_폐기물_비교치', value: 'POLL_ACSS_C', isDelRowInclude: true},

        {key: '저장_기준가격_폐기물_표준지', value: 'POLL_ACSS_S', isDelRowInclude: true},

        {key: '저장_기준가격_기타환경_본건', value: 'ETC_ENVI_M', isDelRowInclude: true},

        {key: '저장_기준가격_기타환경_비교치', value: 'ETC_ENVI_C', isDelRowInclude: true},

        {key: '저장_기준가격_기타환경_표준지', value: 'ETC_ENVI_S', isDelRowInclude: true},

        {key: '저장_기준가격_용도지역_본건', value: 'USE_AREA_M', isDelRowInclude: true},

        {key: '저장_기준가격_용도지역_비교치', value: 'USE_AREA_C', isDelRowInclude: true},

        {key: '저장_기준가격_용도지역_표준지', value: 'USE_AREA_S', isDelRowInclude: true},

        {key: '저장_기준가격_용도지구_본건', value: 'USE_DSCT_M', isDelRowInclude: true},

        {key: '저장_기준가격_용도지구_비교치', value: 'USE_DSCT_C', isDelRowInclude: true},

        {key: '저장_기준가격_용도지구_표준지', value: 'USE_DSCT_S', isDelRowInclude: true},

        {key: '저장_기준가격_도시계획_본건', value: 'CITY_INFR_M', isDelRowInclude: true},

        {key: '저장_기준가격_도시계획_비교치', value: 'CITY_INFR_C', isDelRowInclude: true},

        {key: '저장_기준가격_도시계획_표준지', value: 'CITY_INFR_S', isDelRowInclude: true},

        {key: '저장_기준가격_기타제한_본건', value: 'LIMIT_AREA_M', isDelRowInclude: true},

        {key: '저장_기준가격_기타제한_비교치', value: 'LIMIT_AREA_C', isDelRowInclude: true},

        {key: '저장_기준가격_기타제한_표준지', value: 'LIMIT_AREA_S', isDelRowInclude: true},

        {key: '저장_기준가격_고저_본건', value: 'L_UNDUR_CODE_M', isDelRowInclude: true},

        {key: '저장_기준가격_고저_비교치', value: 'L_UNDUR_CODE_C', isDelRowInclude: true},

        {key: '저장_기준가격_고저_표준지', value: 'L_UNDUR_CODE_S', isDelRowInclude: true},

        {key: '저장_기준가격_형상_본건', value: 'L_SHAPE_CODE_M', isDelRowInclude: true},

        {key: '저장_기준가격_형상_비교치', value: 'L_SHAPE_CODE_C', isDelRowInclude: true},

        {key: '저장_기준가격_형상_표준지', value: 'L_SHAPE_CODE_S', isDelRowInclude: true},

        {key: '저장_기준가격_방위_본건', value: 'L_AZIM_CODE_M', isDelRowInclude: true},

        {key: '저장_기준가격_방위_비교치', value: 'L_AZIM_CODE_C', isDelRowInclude: true},

        {key: '저장_기준가격_방위_표준지', value: 'L_AZIM_CODE_S', isDelRowInclude: true},

        {key: '저장_기준가격_면적_본건', value: 'L_SIZE_CODE_M', isDelRowInclude: true},

        {key: '저장_기준가격_면적_비교치', value: 'L_SIZE_CODE_C', isDelRowInclude: true},

        {key: '저장_기준가격_면적_표준지', value: 'L_SIZE_CODE_S', isDelRowInclude: true},

        {key: '저장_기준가격_토지이용_본건', value: 'L_OF_GU_M', isDelRowInclude: true},

        {key: '저장_기준가격_토지이용_비교치', value: 'L_OF_GU_C', isDelRowInclude: true},

        {key: '저장_기준가격_토지이용_표준지', value: 'L_OF_GU_S', isDelRowInclude: true},

        {key: '저장_기준가격_기타_본건', value: 'L_ETC_M', isDelRowInclude: true},

        {key: '저장_기준가격_기타_비교치', value: 'L_ETC_C', isDelRowInclude: true},

        {key: '저장_기준가격_기타_표준지', value: 'L_ETC_S', isDelRowInclude: true},

        {key: '저장_기준가격_장래_본건', value: 'E_TREND_M', isDelRowInclude: true},

        {key: '저장_기준가격_장래_비교치', value: 'E_TREND_C', isDelRowInclude: true},

        {key: '저장_기준가격_장래_표준지', value: 'E_TREND_S', isDelRowInclude: true},

        {key: '저장_기준가격_기타조건_본건', value: 'E_ETC_M', isDelRowInclude: true},

        {key: '저장_기준가격_기타조건_비교치', value: 'E_ETC_C', isDelRowInclude: true},

        {key: '저장_기준가격_기타조건_표준지', value: 'E_ETC_S', isDelRowInclude: true},

        {key: '저장_기준가격_감가율', value: 'DEPRE_RATE', isDelRowInclude: true},

        {key: '저장_기준가격_요인합계', value: 'FACTOR_TOT', isDelRowInclude: true},

        {key: '저장_기준가격_산정단가', value: 'APAS_DAN', isDelRowInclude: true},

        {key: '저장_기준가격_적용단가', value: 'APPL_DAN', isDelRowInclude: true},

        {key: '저장_기준가격_적용요인합계', value: 'APPL_FACTOR_TOT', isDelRowInclude: true},

        {key: '저장_기준가격_시점수정_본건_날짜', value: 'EDIT_M_DATE', isDelRowInclude: true},

        {key: '저장_기준가격_시점수정_사례_날짜', value: 'EDIT_S_DATE', isDelRowInclude: true},
    ]);


    SetValue('저장_기준가격_RowCount', GetArrayCnt('저장_기준가격_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_기준가격_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_기준가격();
    }


    MC_저장_ValidationCheck_일단지중복();


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(3.0);


    GetComponent('DBGrid_비준가격').GetModifyData([
        {key: '저장_비준가격_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_비준가격_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_비준가격_입력순번', value: 'RNO', isDelRowInclude: true},

        {key: '저장_비준가격_일단지구분', value: 'POT_GU', isDelRowInclude: true},

        {key: '저장_비준가격_사례번호', value: 'EX_NO', isDelRowInclude: true},

        {key: '저장_비준가격_사례가격', value: 'STD_ANNO_AMT', isDelRowInclude: true},

        {key: '저장_비준가격_시점수정_본건', value: 'EDIT_M', isDelRowInclude: true},

        {key: '저장_비준가격_시점수정_사례', value: 'EDIT_S', isDelRowInclude: true},

        {key: '저장_비준가격_시점수정_비교치', value: 'EDIT_C', isDelRowInclude: true},

        {key: '저장_비준가격_소재지_본건', value: 'JUSO_M', isDelRowInclude: true},

        {key: '저장_비준가격_소재지_사례', value: 'JUSO_S', isDelRowInclude: true},

        {key: '저장_비준가격_소재지_비교치', value: 'JUSO_C', isDelRowInclude: true},

        {key: '저장_비준가격_도로접면_본건', value: 'ROAD_SIDE_M', isDelRowInclude: true},

        {key: '저장_비준가격_도로접면_비교치', value: 'ROAD_SIDE_C', isDelRowInclude: true},

        {key: '저장_비준가격_도로접면_표준지', value: 'ROAD_SIDE_S', isDelRowInclude: true},

        {key: '저장_비준가격_도로거리_본건', value: 'ROAD_DIST_M', isDelRowInclude: true},

        {key: '저장_비준가격_도로거리_비교치', value: 'ROAD_DIST_C', isDelRowInclude: true},

        {key: '저장_비준가격_도로거리_표준지', value: 'ROAD_DIST_S', isDelRowInclude: true},

        {key: '저장_비준가격_관공서_본건', value: 'GOV_ACSS_M', isDelRowInclude: true},

        {key: '저장_비준가격_관공서_비교치', value: 'GOV_ACSS_C', isDelRowInclude: true},

        {key: '저장_비준가격_관공서_표준지', value: 'GOV_ACSS_S', isDelRowInclude: true},

        {key: '저장_비준가격_중심지역_본건', value: 'CNTR_ACSS_M', isDelRowInclude: true},

        {key: '저장_비준가격_중심지역_비교치', value: 'CNTR_ACSS_C', isDelRowInclude: true},

        {key: '저장_비준가격_중심지역_표준지', value: 'CNTR_ACSS_S', isDelRowInclude: true},

        {key: '저장_비준가격_기타접근성_본건', value: 'ETC_ACSS_M', isDelRowInclude: true},

        {key: '저장_비준가격_기타접근성_비교치', value: 'ETC_ACSS_C', isDelRowInclude: true},

        {key: '저장_비준가격_기타접근성_표준지', value: 'ETC_ACSS_S', isDelRowInclude: true},

        {key: '저장_비준가격_철도_본건', value: 'RAIL_ACSS_M', isDelRowInclude: true},

        {key: '저장_비준가격_철도_비교치', value: 'RAIL_ACSS_C', isDelRowInclude: true},

        {key: '저장_비준가격_철도_표준지', value: 'RAIL_ACSS_S', isDelRowInclude: true},

        {key: '저장_비준가격_폐기물_본건', value: 'POLL_ACSS_M', isDelRowInclude: true},

        {key: '저장_비준가격_폐기물_비교치', value: 'POLL_ACSS_C', isDelRowInclude: true},

        {key: '저장_비준가격_폐기물_표준지', value: 'POLL_ACSS_S', isDelRowInclude: true},

        {key: '저장_비준가격_기타환경_본건', value: 'ETC_ENVI_M', isDelRowInclude: true},

        {key: '저장_비준가격_기타환경_비교치', value: 'ETC_ENVI_C', isDelRowInclude: true},

        {key: '저장_비준가격_기타환경_표준지', value: 'ETC_ENVI_S', isDelRowInclude: true},

        {key: '저장_비준가격_용도지역_본건', value: 'USE_AREA_M', isDelRowInclude: true},

        {key: '저장_비준가격_용도지역_비교치', value: 'USE_AREA_C', isDelRowInclude: true},

        {key: '저장_비준가격_용도지역_표준지', value: 'USE_AREA_S', isDelRowInclude: true},

        {key: '저장_비준가격_용도지구_본건', value: 'USE_DSCT_M', isDelRowInclude: true},

        {key: '저장_비준가격_용도지구_비교치', value: 'USE_DSCT_C', isDelRowInclude: true},

        {key: '저장_비준가격_용도지구_표준지', value: 'USE_DSCT_S', isDelRowInclude: true},

        {key: '저장_비준가격_도시계획_본건', value: 'CITY_INFR_M', isDelRowInclude: true},

        {key: '저장_비준가격_도시계획_비교치', value: 'CITY_INFR_C', isDelRowInclude: true},

        {key: '저장_비준가격_도시계획_표준지', value: 'CITY_INFR_S', isDelRowInclude: true},

        {key: '저장_비준가격_기타제한_본건', value: 'LIMIT_AREA_M', isDelRowInclude: true},

        {key: '저장_비준가격_기타제한_비교치', value: 'LIMIT_AREA_C', isDelRowInclude: true},

        {key: '저장_비준가격_기타제한_표준지', value: 'LIMIT_AREA_S', isDelRowInclude: true},

        {key: '저장_비준가격_고저_본건', value: 'L_UNDUR_CODE_M', isDelRowInclude: true},

        {key: '저장_비준가격_고저_비교치', value: 'L_UNDUR_CODE_C', isDelRowInclude: true},

        {key: '저장_비준가격_고저_표준지', value: 'L_UNDUR_CODE_S', isDelRowInclude: true},

        {key: '저장_비준가격_형상_본건', value: 'L_SHAPE_CODE_M', isDelRowInclude: true},

        {key: '저장_비준가격_형상_비교치', value: 'L_SHAPE_CODE_C', isDelRowInclude: true},

        {key: '저장_비준가격_형상_표준지', value: 'L_SHAPE_CODE_S', isDelRowInclude: true},

        {key: '저장_비준가격_방위_본건', value: 'L_AZIM_CODE_M', isDelRowInclude: true},

        {key: '저장_비준가격_방위_비교치', value: 'L_AZIM_CODE_C', isDelRowInclude: true},

        {key: '저장_비준가격_방위_표준지', value: 'L_AZIM_CODE_S', isDelRowInclude: true},

        {key: '저장_비준가격_면적_본건', value: 'L_SIZE_CODE_M', isDelRowInclude: true},

        {key: '저장_비준가격_면적_비교치', value: 'L_SIZE_CODE_C', isDelRowInclude: true},

        {key: '저장_비준가격_면적_표준지', value: 'L_SIZE_CODE_S', isDelRowInclude: true},

        {key: '저장_비준가격_토지이용_본건', value: 'L_OF_GU_M', isDelRowInclude: true},

        {key: '저장_비준가격_토지이용_비교치', value: 'L_OF_GU_C', isDelRowInclude: true},

        {key: '저장_비준가격_토지이용_표준지', value: 'L_OF_GU_S', isDelRowInclude: true},

        {key: '저장_비준가격_기타_본건', value: 'L_ETC_M', isDelRowInclude: true},

        {key: '저장_비준가격_기타_비교치', value: 'L_ETC_C', isDelRowInclude: true},

        {key: '저장_비준가격_기타_표준지', value: 'L_ETC_S', isDelRowInclude: true},

        {key: '저장_비준가격_장래_본건', value: 'E_TREND_M', isDelRowInclude: true},

        {key: '저장_비준가격_장래_비교치', value: 'E_TREND_C', isDelRowInclude: true},

        {key: '저장_비준가격_장래_표준지', value: 'E_TREND_S', isDelRowInclude: true},

        {key: '저장_비준가격_기타조건_본건', value: 'E_ETC_M', isDelRowInclude: true},

        {key: '저장_비준가격_기타조건_비교치', value: 'E_ETC_C', isDelRowInclude: true},

        {key: '저장_비준가격_기타조건_표준지', value: 'E_ETC_S', isDelRowInclude: true},

        {key: '저장_비준가격_요인합계', value: 'FACTOR_TOT', isDelRowInclude: true},

        {key: '저장_비준가격_산정단가', value: 'APAS_DAN', isDelRowInclude: true},

        {key: '저장_비준가격_적용단가', value: 'APPL_DAN', isDelRowInclude: true},

        {key: '저장_비준가격_조사시점', value: 'SURVEY_TIME', isDelRowInclude: true},

        {key: '저장_비준가격_시점수정_본건_날짜', value: 'EDIT_M_DATE', isDelRowInclude: true},

        {key: '저장_비준가격_시점수정_사례_날짜', value: 'EDIT_S_DATE', isDelRowInclude: true},
    ]);


    SetValue('저장_비준가격_RowCount', GetArrayCnt('저장_비준가격_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_비준가격_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_비준가격();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(4.0);


    GetComponent('DBGrid_기타요인').GetModifyData([
        {key: '저장_기타요인_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_기타요인_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_기타요인_일단지구분', value: 'POT_GU', isDelRowInclude: true},

        {key: '저장_기타요인_표준지공시지가', value: 'STD_APPL_DAN', isDelRowInclude: true},

        {key: '저장_기타요인_가격수준', value: 'MA_NR_AREA_CODE', isDelRowInclude: true},

        {key: '저장_기타요인_최저', value: 'MA_NR_MIN_AMT', isDelRowInclude: true},

        {key: '저장_기타요인_최고', value: 'MA_NR_MAX_AMT', isDelRowInclude: true},

        {key: '저장_기타요인_비준가격', value: 'CO_AMT', isDelRowInclude: true},

        {key: '저장_기타요인_산정보정률', value: 'APAS_RATE', isDelRowInclude: true},

        {key: '저장_기타요인_사정보정률', value: 'ASSESS_RATE', isDelRowInclude: true},

        {key: '저장_기타요인_적용보정률', value: 'APPL_RATE', isDelRowInclude: true},

        {key: '저장_기타요인_사유', value: 'ASSESS_DESC', isDelRowInclude: true},
    ]);


    SetValue('저장_기타요인_RowCount', GetArrayCnt('저장_기타요인_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_기타요인_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_기타요인();
    }


    GetComponent('DBGrid_평가액').GetModifyData([
        {key: '저장_평가액_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_평가액_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_평가액_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_평가액_평가가격', value: 'INC_AMT', isDelRowInclude: true},

        {key: '저장_평가액_표준지공시지가', value: 'STD_APPL_DAN', isDelRowInclude: true},

        {key: '저장_평가액_적용보정률', value: 'APPL_RATE', isDelRowInclude: true},

        {key: '저장_평가액_산정가격', value: 'APAS_AMT', isDelRowInclude: true},

        {key: '저장_평가액_적용가격', value: 'APPL_AMT', isDelRowInclude: true},
    ]);


    SetValue('저장_평가액_RowCount', GetArrayCnt('저장_평가액_일련번호'))


    GetComponent('DBGrid_담보').GetModifyData([
        {key: '저장_담보_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_담보_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_담보_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_담보_최종평가가격', value: 'FNL_INC_AMT', isDelRowInclude: true},
    ]);


    SetValue('저장_담보_RowCount', GetArrayCnt('저장_담보_일련번호'))


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(5.0);


    GetComponent('DBGrid_건물단가').GetModifyData([
        {key: '저장_건물단가_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_건물단가_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_건물단가_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_건물단가_등기구분', value: 'REGI_GU', isDelRowInclude: true},

        {key: '저장_건물단가_층별', value: 'CB_FLOOR', isDelRowInclude: true},

        {key: '저장_건물단가_표준단가_급수', value: 'CB_BUILD_CODE', isDelRowInclude: true},

        {key: '저장_건물단가_표준단가_적용단가', value: 'CB_BUILD_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_증개축여부_횟수', value: 'DAN_REBUIL_YN', isDelRowInclude: true},

        {key: '저장_건물단가_증개축여부_적용지수', value: 'DAN_REBUIL_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_관리상태_상중하', value: 'DAN_MANAGE_YN', isDelRowInclude: true},

        {key: '저장_건물단가_관리상태_적용지수', value: 'DAN_MANAGE_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_냉난방', value: 'SUB_AIRCON_YN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_냉난방_적용단가', value: 'SUB_AIRCON_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_엘리베이터', value: 'SUB_ELEVAT_YN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_엘리베이터_적용단가', value: 'SUB_ELEVAT_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_위생설비', value: 'SUB_SANITA_YN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_위생설비_적용단가', value: 'SUB_SANITA_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_화재탐지', value: 'SUB_HYDRAN_YN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_화재탐지_적용단가', value: 'SUB_HYDRAN_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_기타', value: 'SUB_ETC_YN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_기타_적용단가', value: 'SUB_ETC_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_부대설비_총보정단가', value: 'SUB_REVISE_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_잔가율_건축년도', value: 'CB_YYYY', isDelRowInclude: true},

        {key: '저장_건물단가_잔가율_경과년수', value: 'ELAP_YEAR', isDelRowInclude: true},

        {key: '저장_건물단가_잔가율_내용년수', value: 'NUM_YEAR', isDelRowInclude: true},

        {key: '저장_건물단가_잔가율_잔가율', value: 'OF_JANGA_RATE', isDelRowInclude: true},

        {key: '저장_건물단가_건물단가_산정단가', value: 'APAS_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_건물단가_적용단가', value: 'APPL_DAN', isDelRowInclude: true},

        {key: '저장_건물단가_총단가조정지수', value: 'DAN_REVISE_IDX', isDelRowInclude: true},

        {key: '저장_건물단가_적용보정률', value: 'DAN_APPLY_IDX', isDelRowInclude: true},

        {key: '저장_건물단가_적용보정률_사유', value: 'DAN_APPLY_DESC', isDelRowInclude: true},
    ]);


    SetValue('저장_건물단가_RowCount', GetArrayCnt('저장_건물단가_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_건물단가_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_건물단가();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_담보_건물').GetModifyData([
        {key: '저장_담보_건물_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_담보_건물_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_담보_건물_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_담보_건물_평가가격', value: 'INC_AMT', isDelRowInclude: true},

        {key: '저장_담보_건물_최종평가가격', value: 'FNL_INC_AMT', isDelRowInclude: true},
    ]);


    SetValue('저장_담보_건물_RowCount', GetArrayCnt('저장_담보_건물_일련번호'))


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(7.0);


    /*
if (isEmpty(GetValue('Combo_보정표_공유지분')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_공유지분해당여부를 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_주거용_경과년도')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_주거용_건축물의경과년도를 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_주거용_입지조건')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_주거용_담보물의입지조건을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_주거용_토지의면적')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_주거용_토지의면적을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_주거용_접한도로의폭')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_주거용_접한도로의폭을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_상업용_경과년도')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_상업용_건축물의경과년도를 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_상업용_주변상권')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_상업용_주변상권의발달정도를 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_상업용_토지의형상')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_상업용_토지의형상을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_상업용_접한도로폭')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_상업용_접한도로의폭을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_단독주택_경과년도')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_단독주택_건축물의경과년도를 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_단독주택_대지의면적')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_단독주택_대지의면적을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_단독주택_접한도로폭')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_단독주택_접한도로의폭을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_법정지상권')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_법정지상권적용률을 선택하여 주십시오." )
}

if (isEmpty(GetValue('Edit_보정표_법정지상권성립사유')   && GetValue('Combo_보정표_법정지상권') != "00" )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_법정지상권성립사유를 입력하여 주십시오." )
}

if (isEmpty(GetValue('Combo_보정표_점유자형태')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_주거용부동산의점유자형태를 선택하여 주십시오." )
}

if (isEmpty(GetValue('Edit_보정표_유사부동산낙찰가율')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_유사부동산낙찰가율을 입력하여 주십시오." )
}

if (isEmpty(GetValue('Edit_보정표_당해지역낙찰가율')   )) {
	SetValue('저장_Error_Message', "낙찰가율보정표_당해지역의낙찰가율을 입력하여 주십시오." )
}
*/


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(9.0);


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetModifyData([
        {key: '저장_배당표_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_배당표_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_배당표_각구의일련번호', value: 'RNO', isDelRowInclude: true},

        {key: '저장_배당표_각구의위치', value: 'RESI_NAME', isDelRowInclude: true},

        {key: '저장_배당표_주거용방의총수', value: 'RESI_RM_CNT', isDelRowInclude: true},

        {key: '저장_배당표_확정일자보유여부', value: 'FXDATE_YN', isDelRowInclude: true},

        {key: '저장_배당표_적용한방의총수', value: 'POSS_A_RM_CNT', isDelRowInclude: true},

        {key: '저장_배당표_실제임대차보증금', value: 'LEASE_AMT', isDelRowInclude: true},

        {key: '저장_배당표_최종적용임대차보증금', value: 'REP_BE_SEC_AMT', isDelRowInclude: true},

        {key: '저장_배당표_확정_임대차보증금', value: 'FXLEA_AMT', isDelRowInclude: true},

        {key: '저장_배당표_확정없는_임대차보증금', value: 'FXLEA_NO_AMT', isDelRowInclude: true},
    ]);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRowCount('저장_배당표_배당금_RowCount');


    SetValue('저장_배당표_RowCount', GetArrayCnt('저장_배당표_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_배당표_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_배당표_주택임차보증금();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetModifyData([
        {key: '저장_배당표_상가_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_배당표_상가_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_배당표_상가_순번', value: 'RNO', isDelRowInclude: true},

        {key: '저장_배당표_상가_위치면적', value: 'C_DESC', isDelRowInclude: true},

        {key: '저장_배당표_상가_가임대적용여부', value: 'POSS_YN', isDelRowInclude: true},

        {key: '저장_배당표_상가_상호성명', value: 'HIR_NAME', isDelRowInclude: true},

        {key: '저장_배당표_상가_임대차보증금', value: 'STO_LSEC_AMT', isDelRowInclude: true},

        {key: '저장_배당표_상가_확정일자', value: 'FXDATE_YN', isDelRowInclude: true},

        {key: '저장_배당표_상가_월세', value: 'MRENT_AMT', isDelRowInclude: true},

        {key: '저장_배당표_상가_실제임대차보증금', value: 'LEASE_AMT', isDelRowInclude: true},

        {key: '저장_배당표_상가_최우선변제보증금', value: 'REP_BE_SEC_AMT', isDelRowInclude: true},

        {key: '저장_배당표_상가_상가임대차_확정', value: 'FXLEA_AMT', isDelRowInclude: true},

        {key: '저장_배당표_상가_상가임대차_확정없는', value: 'FXLEA_NO_AMT', isDelRowInclude: true},
    ]);


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRowCount('저장_배당표_상가_RowCount');


    SetValue('저장_배당표_상가_RowCount', GetArrayCnt('저장_배당표_상가_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_배당표_상가_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_배당표_상가임차보증금();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(10.0);


    GetComponent('DBGrid_배당금_계산D').GetModifyData([
        {key: '저장_배당표_배당금_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_배당표_배당금_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_배당표_배당금_배당표구분', value: 'SHA_GU', isDelRowInclude: true},

        {key: '저장_배당표_배당금_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_배당표_배당금_순위', value: 'RANK', isDelRowInclude: true},

        {key: '저장_배당표_배당금_표시순위', value: 'DISP_RANK', isDelRowInclude: true},

        {key: '저장_배당표_배당금_발생일자', value: 'RIGHT_DATE', isDelRowInclude: true},

        {key: '저장_배당표_배당금_권리자', value: 'RIGHT_PERSON', isDelRowInclude: true},

        {key: '저장_배당표_배당금_권리의내용', value: 'RIGHT_CODE', isDelRowInclude: true},

        {key: '저장_배당표_배당금_말소여부', value: 'ERA_YN', isDelRowInclude: true},

        {key: '저장_배당표_배당금_단독담보', value: 'CRED_SELF_AMT', isDelRowInclude: true},

        {key: '저장_배당표_배당금_공동담보', value: 'CRED_COMB_AMT', isDelRowInclude: true},

        {key: '저장_배당표_배당금_Flag', value: 'FLAG', isDelRowInclude: true},

        {key: '저장_배당표_배당금_당사설정', value: 'HITE_YN', isDelRowInclude: true},

        {key: '저장_배당표_배당금_배당순위', value: 'PRO_RATE_CODE', isDelRowInclude: true},
    ]);


    GetComponent('DBGrid_배당금_계산D').GetRowCount('저장_배당표_배당금D_RowCount');


    SetValue('00_NUMBER', GetArrayCnt('저장_배당표_배당금D_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_배당표_배당금D_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_배당표_배당금();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('DBGrid_배당금건물_계산D').GetModifyData([
        {key: '저장_배당표_배당금_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_배당표_배당금_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_배당표_배당금_배당표구분', value: 'SHA_GU', isDelRowInclude: true},

        {key: '저장_배당표_배당금_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_배당표_배당금_순위', value: 'RANK', isDelRowInclude: true},

        {key: '저장_배당표_배당금_표시순위', value: 'DISP_RANK', isDelRowInclude: true},

        {key: '저장_배당표_배당금_발생일자', value: 'RIGHT_DATE', isDelRowInclude: true},

        {key: '저장_배당표_배당금_권리자', value: 'RIGHT_PERSON', isDelRowInclude: true},

        {key: '저장_배당표_배당금_권리의내용', value: 'RIGHT_CODE', isDelRowInclude: true},

        {key: '저장_배당표_배당금_말소여부', value: 'ERA_YN', isDelRowInclude: true},

        {key: '저장_배당표_배당금_단독담보', value: 'CRED_SELF_AMT', isDelRowInclude: true},

        {key: '저장_배당표_배당금_공동담보', value: 'CRED_COMB_AMT', isDelRowInclude: true},

        {key: '저장_배당표_배당금_Flag', value: 'FLAG', isDelRowInclude: true},

        {key: '저장_배당표_배당금_당사설정', value: 'HITE_YN', isDelRowInclude: true},

        {key: '저장_배당표_배당금_배당순위', value: 'PRO_RATE_CODE', isDelRowInclude: true},
    ]);


    GetComponent('DBGrid_배당금건물_계산D').GetRowCount('저장_배당표_배당금D_RowCount');


    SetValue('저장_배당표_상가_RowCount', GetArrayCnt('저장_배당표_상가_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_배당표_배당금D_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_배당표_상가임차보증금();
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    GetComponent('TabControl1').SetCurSel(10.0);


    GetComponent('DBGrid_사진관리').GetModifyData([
        {key: '저장_배당표_배당금_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_배당표_배당금_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_배당표_배당금_배당표구분', value: 'SHA_GU', isDelRowInclude: true},

        {key: '저장_배당표_배당금_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_배당표_배당금_순위', value: 'RANK', isDelRowInclude: true},

        {key: '저장_배당표_배당금_표시순위', value: 'DISP_RANK', isDelRowInclude: true},

        {key: '저장_배당표_배당금_발생일자', value: 'RIGHT_DATE', isDelRowInclude: true},

        {key: '저장_배당표_배당금_권리자', value: 'RIGHT_PERSON', isDelRowInclude: true},

        {key: '저장_배당표_배당금_권리의내용', value: 'RIGHT_CODE', isDelRowInclude: true},

        {key: '저장_배당표_배당금_말소여부', value: 'ERA_YN', isDelRowInclude: true},

        {key: '저장_배당표_배당금_단독담보', value: 'CRED_SELF_AMT', isDelRowInclude: true},

        {key: '저장_배당표_배당금_공동담보', value: 'CRED_COMB_AMT', isDelRowInclude: true},

        {key: '저장_배당표_배당금_Flag', value: 'FLAG', isDelRowInclude: true},

        {key: '저장_배당표_배당금_당사설정', value: 'HITE_YN', isDelRowInclude: true},

        {key: '저장_배당표_배당금_배당순위', value: 'PRO_RATE_CODE', isDelRowInclude: true},
    ]);


    SetValue('저장_문서관리_RowCount', GetArrayCnt('저장_문서관리_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_문서관리_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_사진();
    }


    GetComponent('DBGrid_문서').GetModifyData([
        {key: '저장_문서관리_문서_년도', value: 'YYYY', isDelRowInclude: true},

        {key: '저장_문서관리_문서_일련번호', value: 'SEQ', isDelRowInclude: true},

        {key: '저장_문서관리_문서_사진구분', value: 'PHOTO_DIV', isDelRowInclude: true},

        {key: '저장_문서관리_문서_순번', value: 'LN_SEQ', isDelRowInclude: true},

        {key: '저장_문서관리_문서_사진명', value: 'PHOTO_NAME', isDelRowInclude: true},

        {key: '저장_문서관리_문서_경로및파일명', value: 'FILE_NAME', isDelRowInclude: true},

        {key: '저장_문서관리_문서_비고', value: 'REMARK', isDelRowInclude: true},

        {key: '저장_문서관리_문서_전송된파일명', value: 'UPLOAD_FILE', isDelRowInclude: true},
    ]);


    SetValue('저장_문서관리_문서_RowCount', GetArrayCnt('저장_문서관리_문서_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('저장_문서관리_문서_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_문서();
    }


    if (true) {
        return false;
    }


    if (isEmpty(GetValue('Combo_배당표_가임대보증금적용범위'))) {
        SetValue('저장_Error_Message', "가임대보증금적용범위를 선택하여 주십시오.")
    }

    if (isEmpty(GetValue('Combo_배당표_가임대보증금적용대상'))) {
        SetValue('저장_Error_Message', "가임대보증금적용대상을 선택하여 주십시오.")
    }

    if (isEmpty(GetValue('Combo_배당표_최고채권액'))) {
        SetValue('저장_Error_Message', "최고채권액을 선택하여 주십시오.")
    }


    if (isEmpty(GetValue('Edit_실거래가격_총액'))) {
        SetValue('저장_Error_Message', "감정의표시_가격총액을 입력하여 주십시오.")
    }

    if (isEmpty(GetValue('Edit_건물의주된용도'))) {
        SetValue('저장_Error_Message', "건물의표시_건물의 주된 용도를 입력하여 주십시오.")
    }

}

function MC_저장_ValidationCheck_토지의표시() {

    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    /*
if (isEmpty(GetArray('저장_토지의표시_개별공시지가',GetValue('i')) <= 0 )) {
		SetValue('저장_Error_Message', "토지의표시_개별공시지가를 입력하여 주십시오.")

}


if (isEmpty(GetArray('저장_토지의표시_면적',GetValue('i')) <= 0 )) {
		SetValue('저장_Error_Message', "토지의표시_면적를 입력하여 주십시오.")

}


if (isEmpty(GetArray('저장_토지의표시_지목',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "토지의표시_지목을 입력하여 주십시오.")

}


if (isEmpty(GetArray('저장_토지의표시_지번',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "토지의표시_지번를 입력하여 주십시오.")

}


if (isEmpty(GetArray('저장_토지의표시_최소행정구역',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "토지의표시_최소행정구역을 입력하여 주십시오.")

}
*/

    if (isEmpty(GetArray('저장_토지의표시_일단지구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "토지의표시_일단지구분을 선택하여 주십시오.")

    }

}

function MC_저장_토지의표시() {

    RunQuery('저장_토지의표시', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_토지의표시_년도': GetValue('저장_토지의표시_년도'),
        '저장_토지의표시_일련번호': GetValue('저장_토지의표시_일련번호'),
        '저장_토지의표시_순번': GetValue('저장_토지의표시_순번'),
        '저장_토지의표시_일단지구분': GetValue('저장_토지의표시_일단지구분'),
        '저장_토지의표시_최소행정구역': GetValue('저장_토지의표시_최소행정구역'),
        '저장_토지의표시_지번': GetValue('저장_토지의표시_지번'),
        '저장_토지의표시_지목': GetValue('저장_토지의표시_지목'),
        '저장_토지의표시_면적': GetValue('저장_토지의표시_면적'),
        '저장_토지의표시_면적_평': GetValue('저장_토지의표시_면적_평'),
        '저장_토지의표시_개별공시지가': GetValue('저장_토지의표시_개별공시지가'),
        '저장_토지의표시_개별공시지가_평': GetValue('저장_토지의표시_개별공시지가_평'),
        '저장_토지의표시_개별공시지가_총': GetValue('저장_토지의표시_개별공시지가_총')
    }, 'POST');

}

function MC_탭_상태변경() {

    GetComponent('TabControl1').EnableTab(11, 0);


    GetComponent('TabControl1').EnableTab(12, 0);

}

function MC_저장_표준지공시지가() {

    RunQuery('저장_표준지공시지가', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_표준지공시지가_년도': GetValue('저장_표준지공시지가_년도'),
        '저장_표준지공시지가_일련번호': GetValue('저장_표준지공시지가_일련번호'),
        '저장_표준지공시지가_표준지구분': GetValue('저장_표준지공시지가_표준지구분'),
        '저장_표준지공시지가_소재지': GetValue('저장_표준지공시지가_소재지'),
        '저장_표준지공시지가_지번': GetValue('저장_표준지공시지가_지번'),
        '저장_표준지공시지가_면적': GetValue('저장_표준지공시지가_면적'),
        '저장_표준지공시지가_면적_평': GetValue('저장_표준지공시지가_면적_평'),
        '저장_표준지공시지가_용도지역': GetValue('저장_표준지공시지가_용도지역'),
        '저장_표준지공시지가_지목': GetValue('저장_표준지공시지가_지목'),
        '저장_표준지공시지가_이용현황': GetValue('저장_표준지공시지가_이용현황'),
        '저장_표준지공시지가_도로조건': GetValue('저장_표준지공시지가_도로조건'),
        '저장_표준지공시지가_형상': GetValue('저장_표준지공시지가_형상'),
        '저장_표준지공시지가_지형지세': GetValue('저장_표준지공시지가_지형지세'),
        '저장_표준지공시지가_표준지공시지가': GetValue('저장_표준지공시지가_표준지공시지가')
    }, 'POST');


    RunQuery('Q_표준지공시지가선정', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_ValidationCheck_기준가격() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_기준가격_일단지구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가기준가격_일단지구분을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_기준가격_표준지구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "표준지공시지가기준가격_표준지구분을 선택하여 주십시오.")

    }

}

function MC_저장_ValidationCheck_문서() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_문서관리_문서_경로및파일명', GetValue('i')))) {
        SetValue('저장_Error_Message', "관련문서_파일을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_문서관리_문서_사진명', GetValue('i')))) {
        SetValue('저장_Error_Message', "관련문서_내용을 입력하여 주십시오.")

    }

}

function MC_저장_ValidationCheck_사진() {

    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    /*
if (isEmpty(GetArray('저장_문서관리_경로및파일명',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "사진및도면_파일을 선택하여 주십시오.")

}


if (isEmpty(GetArray('저장_문서관리_사진명',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "사진및도면_내용을 입력하여 주십시오.")

}
*/

    if (isEmpty(GetArray('저장_문서관리_사진구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "사진및도면_구분을 선택하여 주십시오.")

    }

}

function MC_그리드_인덱스_Sync() {

    GetComponent('DBGrid_토지의표시').SetCurSel(GetNumber('그리드_IDX'));


    GetComponent('DBGrid_담보제공비율').SetCurSel(GetNumber('그리드_IDX'));


    GetComponent('DBGrid_본건토지').SetCurSel(GetNumber('그리드_IDX'));


    GetComponent('DBGrid_평가액').SetCurSel(GetNumber('그리드_IDX'));


    GetComponent('DBGrid_담보').SetCurSel(GetNumber('그리드_IDX'));


    GetComponent('DBGrid_배당금_계산M').SetCurSel(GetNumber('그리드_IDX'));

}

function MC_토지의표시_전체합계() {

    GetComponent('DBGrid_토지의표시').GetRows("", [
        {key: '토지의표시_면적_Arr', value: 'L_SIZE'},
        {key: '토지의표시_면적_평_Arr', value: 'L_SIZE_PY'},
        {key: '토지의표시_개별공시지가_면적_Arr', value: 'ANNO_DAN'},
        {key: '토지의표시_개별공시지가_평_Arr', value: 'ANNO_DAN_PY'},
        {key: '토지의표시_개별공시지가_Arr', value: 'ANNO_AMT'}
    ]);


    SetValue('Edit_토지의표시_합계_면적', Round(Sum('토지의표시_면적_Arr'), 2))
    SetValue('Edit_토지의표시_합계_면적_평', Round(Sum('토지의표시_면적_평_Arr'), 2))
    SetValue('Edit_토지의표시_합계_개별공시지가_면적', Sum('토지의표시_개별공시지가_면적_Arr'))
    SetValue('Edit_토지의표시_합계_개별공시지가_면적_평', Sum('토지의표시_개별공시지가_평_Arr'))
    SetValue('Edit_토지의표시_합계_개별공시지가', Sum('토지의표시_개별공시지가_Arr'))
    SetValue('Edit_실거래가격_단가', GetValue('Edit_실거래가격_총액') / Sum('토지의표시_면적_Arr'))
    SetValue('Edit_실거래가격_단가', Round(GetValue('Edit_실거래가격_단가') / 1000, 0))
    SetValue('Edit_실거래가격_단가', GetValue('Edit_실거래가격_단가') * 1000)
    SetValue('Edit_실거래가격_평당단가', GetValue('Edit_실거래가격_총액') / Sum('토지의표시_면적_평_Arr'))
    SetValue('Edit_실거래가격_평당단가', Round(GetValue('Edit_실거래가격_평당단가') / 1000, 0))
    SetValue('Edit_실거래가격_평당단가', GetValue('Edit_실거래가격_평당단가') * 1000)

}

function MC_저장_ValidationCheck_건물단가() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_건물단가_잔가율_내용년수', GetValue('i')) <= 0)) {
        SetValue('저장_Error_Message', "건물단가_내용년수를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_부대설비_기타', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_부대설비보정_기타를 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_부대설비_화재탐지', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_부대설비보정_화재탐지/소화전을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_부대설비_위생설비', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_부대설비보정_위생설비를 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_부대설비_엘리베이터', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_부대설비보정_엘리베이터를 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_부대설비_냉난방', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_부대설비보정_냉난방을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_관리상태_상중하', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_단가조정_관리상태를 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_증개축여부_횟수', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_단가조정_증개축여부를 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_건물단가_표준단가_급수', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물단가_표준단가의선정_급수를 선택하여 주십시오.")

    }

}

function MC_저장_키설정() {

    GetComponent('DBGrid_본건토지').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_토지의표시').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_담보제공비율').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_담보제공비율').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_본건토지').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_본건토지').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_표준지공시지가').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_표준지공시지가').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_비준가격_산정사례').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_비준가격_산정사례').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_기준가격').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_기준가격').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_비준가격').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_비준가격').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_기타요인').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_기타요인').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_평가액').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_평가액').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_담보').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_담보').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_건물의표시').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_건물의표시').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_담보제공비율_건물').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_담보제공비율_건물').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_건물단가').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_건물단가').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_평가액').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_평가액').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_담보_건물').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_담보_건물').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ], false);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetComponent('DBGrid_배당금_계산D').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_배당금_계산D').SetRows(GetValue('m_index'), [
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);

}

function MC_저장_쿼리호출() {

    MC_저장_입력표();


    MC_저장_입력표_건물();


    if (GetValue('저장_토지의표시_RowCount') > 0) {
        MC_저장_토지의표시();
    }


    if (GetValue('저장_건물의표시_RowCount') > 0) {
        MC_저장_건물의표시();
    }


    if (GetValue('저장_담보제공비율_RowCount') > 0) {
        MC_저장_담보제공비율();
    }


    if (GetValue('저장_본건토지_RowCount') > 0) {
        MC_저장_본건토지();
    }


    if (GetValue('저장_표준지공시지가_RowCount') > 0) {
        MC_저장_표준지공시지가();
    }


    MC_저장_본건인근의가격수준();


    if (GetValue('저장_비준가격산정사례_RowCount') > 0) {
        MC_저장_비준가격산정사례();
    }


    if (GetValue('저장_기준가격_RowCount') > 0) {
        MC_저장_기준가격();
    }


    if (GetValue('저장_비준가격_RowCount') > 0) {
        MC_저장_비준가격();
    }


    if (GetValue('저장_기타요인_RowCount') > 0) {
        MC_저장_기타요인();
    }


    if (GetValue('저장_평가액_RowCount') > 0) {
        MC_저장_평가액();
    }


    if (GetValue('저장_담보_RowCount') > 0) {
        MC_저장_담보();
    }


    if (GetValue('저장_건물단가_RowCount') > 0) {
        MC_저장_건물단가();
    }


    if (GetValue('저장_담보_건물_RowCount') > 0) {
        MC_저장_담보_건물();
    }


    MC_저장_수익();


    MC_저장_보정표();


    RunQuery('저장_배당금_배당표M', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'AUCTION_CODE': GetValue('Combo_배당표_최고채권액'),
        'AUCTION_AMT': GetNumber('Edit_배당표_경매비용'),
        'H_PL_BID_AMT': GetNumber('Edit_배당표_예상낙찰가'),
        'H_POSS_AMT': GetValue('Edit_배당표_경락가액'),
        'H_POSS_A_AREA': GetValue('Combo_배당표_가임대보증금적용범위'),
        'H_POSS_A_AMT': GetValue('Edit_배당표_적용할주택가임대보증금액'),
        'B_PL_BID_AMT': GetValue('Edit_배당표_상가_예상낙찰가'),
        'B_POSS_AMT': GetValue('Edit_배당표_상가_경락가액'),
        'B_LEASE_AREA': GetValue('Combo_배당표_상가_임대차보호법'),
        'B_POSS_A_AREA': GetValue('Combo_배당표_상가_가임대보증금_적용범위'),
        'B_POSS_A_AMT': GetValue('Edit_배당표_적용할상가가임대보증금액'),
        'B_LEASE_CASE': GetValue('Combo_배당표_상가_가임대보증금적용대상'),
        'H_POSS_A_CASE': GetValue('Combo_배당표_가임대보증금적용대상'),
        'CRED_MAX_AMT': GetValue('Edit_배당표_최고채권액'),
    }, 'POST');


    MC_저장_주택임차보증금();


    MC_저장_상가임차보증금();


    MC_저장_배당표_배당금D();


    MC_저장_배당표건물_배당금D();


    if (GetValue('저장_문서관리_RowCount') > 0) {
        MC_저장_문서관리();
    }


    if (GetValue('저장_문서관리_문서_RowCount') > 0) {
        MC_저장_문서관리_문서();
    }


    if (true) {
        return false;
    }


    if (GetValue('저장_담보제공비율_건물_RowCount') > 0) {
        MC_저장_담보제공비율_건물();
    }

}

function MC_저장_보정표() {

    if (isEmpty(GetValue('Combo_보정표_법정지상권_존속기간'))) {
        SetValue('보정표_법정지상권_존속기간', "")
    } else {

        SetValue('보정표_법정지상권_존속기간', GetValue('Combo_보정표_법정지상권_존속기간'))
    }


    RunQuery('저장_보정표', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'P_BID_RATE': GetValue('Edit_보정표_당해지역낙찰가율'),
        'K_BID_RATE': GetValue('Edit_보정표_유사부동산낙찰가율'),
        'B_BID_RATE': GetValue('Edit_보정표_기준낙찰가율'),
        'RIGHTS_CODE': GetValue('Combo_보정표_점유자형태'),
        'DOMAIN_DESC': GetValue('Edit_보정표_법정지상권성립사유'),
        'DOMAIN_CODE': GetValue('Combo_보정표_법정지상권'),
        'DOMAIN_RATE': GetValue('Edit_보정표_법정지상권_적용률'),
        'DOMAIN_DAYS': GetValue('보정표_법정지상권_존속기간'),
        'APPL_RATE': GetValue('Edit_보정표_적용할낙찰가율'),
        'PL_BID_AMT': GetNumber('Edit_보정표_예상낙찰가'),
        'CURR_USE_CODE': GetValue('Combo_보정표_현재의주된'),
        'FUTU_USE_CODE': GetValue('Combo_보정표_장래의이용'),
        'DET_ADJ_ROAD': GetValue('Combo_보정표_단독주택_접한도로폭'),
        'DET_PLOT_CODE': GetValue('Combo_보정표_단독주택_대지의면적'),
        'DET_ELAP_CODE': GetValue('Combo_보정표_단독주택_경과년도'),
        'BUS_ADJ_ROAD': GetValue('Combo_보정표_상업용_접한도로폭'),
        'BUS_SHAPE_CODE': GetValue('Combo_보정표_상업용_토지의형상'),
        'BUS_COMM_DEV': GetValue('Combo_보정표_상업용_주변상권'),
        'BUS_ELAP_CODE': GetValue('Combo_보정표_상업용_경과년도'),
        'GEN_ADJ_ROAD': GetValue('Combo_보정표_주거용_접한도로의폭'),
        'GEN_LAND_CODE': GetValue('Combo_보정표_주거용_토지의면적'),
        'GEN_CONV_LOCATED': GetValue('Combo_보정표_주거용_입지조건'),
        'GEN_ELAP_CODE': GetValue('Combo_보정표_주거용_경과년도'),
        'GEN_PUBL_CODE': GetValue('Combo_보정표_공유지분'),
        'DET_ADJ_RATE': GetValue('Edit_보정표_단독주택_접한도로폭_적용률'),
        'DET_PLOT_RATE': GetValue('Edit_보정표_단독주택_대지의면적_적용률'),
        'DET_ELAP_RATE': GetValue('Edit_보정표_단독주택_경과년도_적용률'),
        'BUS_ADJ_RATE': GetValue('Edit_보정표_상업용_접한도로폭_적용률'),
        'BUS_SHAPE_RATE': GetValue('Edit_보정표_상업용_토지의형상_적용률'),
        'BUS_COMM_RATE': GetValue('Edit_보정표_상업용_주변상권_적용률'),
        'BUS_ELAP_RATE': GetValue('Edit_보정표_상업용_경과년도_적용률'),
        'GEN_ADJ_RATE': GetValue('Edit_보정표_주거용_접한도로의폭_적용률'),
        'GEN_LAND_RATE': GetValue('Edit_보정표_주거용_토지의면적_적용률'),
        'GEN_CONV_RATE': GetValue('Edit_보정표_주거용_입지조건_적용률'),
        'GEN_ELAP_RATE': GetValue('Edit_보정표_주거용_경과년도_적용률'),
        'GEN_PUBL_RATE': GetValue('Edit_보정표_공유지분_적용률'),
        'RIGHTS_RATE': GetValue('Edit_보정표_점유자형태_적용률'),
    }, 'POST');

}

function MC_재감정여부() {
    if (Right(GetValue('감정순번'), 2) == "00" || isEmpty(GetValue('감정순번')))
    {
        SetValue('Edit_재감정여부', "최초감정")
    }
else
    {

        SetValue('Edit_재감정여부', "재감정")
    }

}

function MC_배당금_Flag변경() {

}

function MC_배당표_배당금_계산_기초데이터() {

    GetZoonData('Q_배당표_배당금_계산D_Temp').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '9999')) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_배당표_배당금_계산D_Temp').SetRows(GetValue('m_index'), [
        {key: 'SHA_GU', value: 2},
        {key: 'LN_SEQ', value: GetValue('토지의표시_순번')}
    ]);


    GetZoonData('Q_배당표_배당금_계산D_Temp').GetRows("", [
        {key: '배당표_배당금계산TMP_배당순위', value: 'RANK'},
        {key: '배당표_배당금계산TMP_표시순위', value: 'DISP_RANK'},
        {key: '배당표_배당금계산TMP_권리자', value: 'RIGHT_PERSON'},
        {key: '배당표_배당금계산TMP_권리의내용', value: 'RIGHT_CODE'},
        {key: '배당표_배당금계산TMP_말소여부', value: 'ERA_YN'},
        {key: '배당표_배당금계산TMP_순번', value: 'LN_SEQ'},
        {key: '배당표_배당금계산TMP_배당표구분', value: 'SHA_GU'},
        {key: '배당표_배당금계산TMP_배당순위_Proc', value: 'PRO_RATE_CODE'}
    ]);


    SetValue('배당표_배당금계산TMP_RowCount', GetArrayCnt('배당표_배당금계산TMP_배당순위'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산TMP_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_배당표_배당금_계산_기초데이터_입력();
    }


    SetValue('배당표_배당금계산M_순번', GetValue('토지의표시_순번'))


    GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();

}

function MC_배당표_배당금_계산_기초데이터_입력() {

    SetValue('배당표_배당금계산_배당표구분', GetArray('배당표_배당금계산TMP_배당표구분', GetValue('i')))
    SetValue('배당표_배당금계산_순번', GetArray('배당표_배당금계산TMP_순번', GetValue('i')))
    SetValue('배당표_배당금계산_배당순위', GetArray('배당표_배당금계산TMP_배당순위', GetValue('i')))
    SetValue('배당표_배당금계산_표시순위', GetArray('배당표_배당금계산TMP_표시순위', GetValue('i')))
    SetValue('배당표_배당금계산_권리자', GetArray('배당표_배당금계산TMP_권리자', GetValue('i')))
    SetValue('배당표_배당금계산_권리의내용', GetArray('배당표_배당금계산TMP_권리의내용', GetValue('i')))
    SetValue('배당표_배당금계산_말소여부', GetArray('배당표_배당금계산TMP_말소여부', GetValue('i')))
    SetValue('배당표_배당금계산_배당순위_Proc', GetArray('배당표_배당금계산TMP_배당순위_Proc', GetValue('i')))
    SetValue('배당표_배당금계산_Enable', "0")
    SetValue('배당표_배당금계산_단독담보', 0)
    SetValue('배당표_배당금계산_단독담보_ORG', 0)
    SetValue('배당표_배당금계산_공동담보', 0)
    SetValue('배당표_배당금계산_공동담보_ORG', 0)


    GetZoonData('Q_배당표_배당금_계산D').AddRow(0, [
        GetValue('년도'),

        GetValue('감정순번'),

        GetValue('배당표_배당금계산_배당표구분'),

        GetValue('배당표_배당금계산_순번'),

        GetValue('배당표_배당금계산_배당순위'),

        GetValue('배당표_배당금계산_표시순위'),

        GetValue('배당표_배당금계산_발생일자'),

        GetValue('배당표_배당금계산_권리자'),

        GetValue('배당표_배당금계산_권리의내용'),

        GetValue('배당표_배당금계산_말소여부'),

        GetValue('배당표_배당금계산_단독담보'),

        GetValue('배당표_배당금계산_공동담보'),

        GetValue('배당표_배당금계산_Enable'),

        GetValue('배당표_배당금계산건물_단독담보_ORG'),

        GetValue('배당표_배당금계산건물_공동담보_ORG'),

        GetValue('배당표_배당금계산_배당순위_Proc'),

    ]);

}

function MC_배당표_배당금건물_계산() {
    if (GetValue('배당표_배당금계산건물_ColName') == 'DISP_RANK') {

        GetComponent('DBGrid_배당금건물_계산D').SortField('DISP_RANK', 1);

    }


    GetComponent('DBGrid_배당금건물_계산D').GetRow(-1, [
        {key: '배당표_배당금계산건물_공동담보', value: 'CRED_COMB_AMT'},
        {key: '배당표_배당금계산건물_단독담보', value: 'CRED_SELF_AMT'},
        {key: '배당표_배당금계산건물_공동담보_ORG', value: 'CRED_COMB_AMT_ORG'},
        {key: '배당표_배당금계산건물_단독담보_ORG', value: 'CRED_SELF_AMT_ORG'},
        {key: '배당표_배당금계산건물_당사설정', value: 'HITE_YN'},
        {key: '배당표_배당금계산건물_발생일자', value: 'RIGHT_DATE'}
    ]);


    if (GetValue('배당표_배당금계산건물_공동담보') == GetValue('배당표_배당금계산건물_공동담보_ORG') && GetValue('배당표_배당금계산건물_단독담보') == GetValue('배당표_배당금계산건물_단독담보_ORG')) {
    } else {


        if (GetValue('배당표_배당금계산건물_ColName') == "CRED_SELF_AMT") {
            SetValue('배당표_배당금계산건물_공동담보', 0)
            SetValue('배당표_배당금계산건물_단독담보_ORG', GetValue('배당표_배당금계산건물_단독담보'))
            SetValue('배당표_배당금계산건물_공동담보_ORG', GetValue('배당표_배당금계산건물_공동담보'))

        } else if (GetValue('배당표_배당금계산건물_ColName') == "CRED_COMB_AMT") {
            SetValue('배당표_배당금계산건물_단독담보', 0)
            SetValue('배당표_배당금계산건물_단독담보_ORG', GetValue('배당표_배당금계산건물_단독담보'))
            SetValue('배당표_배당금계산건물_공동담보_ORG', GetValue('배당표_배당금계산건물_공동담보'))

        }
    }

    if (GetValue('배당표_배당금계산건물_ColName') == "HITE_YN") {

        if (GetValue('배당표_배당금계산건물_당사설정') == "Y") {
            SetValue('배당표_배당금계산건물_발생일자', GetValue('MkEdit_감정일'))

        }
    }


    GetComponent('DBGrid_배당금건물_계산D').SetRow(-1, [
        {key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산건물_단독담보')},
        {key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산건물_공동담보')},
        {key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산건물_공동담보_ORG')},
        {key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산건물_단독담보_ORG')},
        {key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산건물_발생일자')}
    ], true);

}

function MC_배당표_배당처리시권리자자료_CLEAR() {

    RunButton('Command_배당처리시_자료CLEAR');

}

function MC_배당표_상가임대차보증금_계산() {

    GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_배당표_상가_가임대보증금_적용범위'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetValue('배당표_상가_RowPosition'), [
        {key: '배당표_상가_최우선변제보증금', value: 'ATTR_02'},
        {key: '배당표_상가_가임대보증금_적용범위', value: 'ATTR_04'},
        {key: '배당표_상가_임대차보호법_적용범위', value: 'ATTR_03'}
    ]);


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRow(GetNumber('i'), [
        {key: '배당표_상가_임대차보증금', value: 'STO_LSEC_AMT'},
        {key: '배당표_상가_가임대여부', value: 'POSS_YN'},
        {key: '배당표_상가_확정일자여부', value: 'FXDATE_YN'},
        {key: '배당표_상가_실제임대차보증금', value: 'LEASE_AMT'},
        {key: '배당표_상가_월세', value: 'MRENT_AMT'}
    ]);


    SetValue('배당표_상가_임대차보증금_확정', 0)
    SetValue('배당표_상가_임대차보증금_확정없는', 0)
    SetValue('배당표_상가_실제임대차보증금', 0)

    SetValue('배당표_상가_실제임대차보증금', GetNumber('배당표_상가_임대차보증금') + (GetNumber('배당표_상가_월세') * 100))

// 가임대의 경우
    if (GetValue('배당표_상가_가임대여부') == "Y") {
        SetValue('배당표_상가_최우선변제보증금', GetValue('배당표_상가_최우선변제보증금'))
    } else {

        // 보증금이 한도액 내이면

        if (GetValue('배당표_상가_실제임대차보증금') <= GetValue('배당표_상가_가임대보증금_적용범위')) {

            if (GetValue('배당표_상가_임대차보증금') > 0) {

                if (GetValue('배당표_상가_임대차보증금') <= GetValue('배당표_상가_최우선변제보증금')) {
                    SetValue('배당표_상가_최우선변제보증금', GetValue('배당표_상가_최우선변제보증금'))

                } else if (GetValue('배당표_상가_임대차보증금') > GetValue('배당표_상가_최우선변제보증금')) {

                    if (GetValue('배당표_상가_확정일자여부') == "Y") {
                        SetValue('배당표_상가_최우선변제보증금', GetValue('배당표_상가_최우선변제보증금'))
                        SetValue('배당표_상가_임대차보증금_확정', GetNumber('배당표_상가_임대차보증금') - GetNumber('배당표_상가_최우선변제보증금'))
                        SetValue('배당표_상가_임대차보증금_확정없는', 0)

                    } else {
                        SetValue('배당표_상가_최우선변제보증금', GetValue('배당표_상가_최우선변제보증금'))
                        SetValue('배당표_상가_임대차보증금_확정', 0)
                        SetValue('배당표_상가_임대차보증금_확정없는', GetNumber('배당표_상가_임대차보증금') - GetNumber('배당표_상가_최우선변제보증금'))

                    }

                }

            } else {

                SetValue('배당표_상가_최우선변제보증금', 0)

            }

        } else {


            if (GetValue('배당표_상가_확정일자여부') == "Y") {
                SetValue('배당표_상가_최우선변제보증금', 0)
                SetValue('배당표_상가_임대차보증금_확정', GetValue('배당표_상가_임대차보증금'))
                SetValue('배당표_상가_임대차보증금_확정없는', 0)

            } else {
                SetValue('배당표_상가_최우선변제보증금', 0)
                SetValue('배당표_상가_임대차보증금_확정', 0)
                SetValue('배당표_상가_임대차보증금_확정없는', GetValue('배당표_상가_임대차보증금'))

            }

        }
    }


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').SetRow(GetValue('i'), [
        {key: 'REP_BE_SEC_AMT', value: GetValue('배당표_상가_최우선변제보증금')},
        {key: 'FXLEA_AMT', value: GetValue('배당표_상가_임대차보증금_확정')},
        {key: 'FXLEA_NO_AMT', value: GetValue('배당표_상가_임대차보증금_확정없는')},
        {key: 'LEASE_AMT', value: GetValue('배당표_상가_실제임대차보증금')}
    ]);


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRows("", [
        {key: '배당표_상가_임대차보증금_Arr', value: 'STO_LSEC_AMT'},
        {key: '배당표_상가_월세_Arr', value: 'MRENT_AMT'},
        {key: '배당표_상가_실제임대차보증금_Arr', value: 'LEASE_AMT'},
        {key: '배당표_상가_최우선변제보증금_Arr', value: 'REP_BE_SEC_AMT'},
        {key: '배당표_상가_임대차보증금_확정_Arr', value: 'FXLEA_AMT'},
        {key: '배당표_상가_임대차보증금_확정없는_Arr', value: 'FXLEA_NO_AMT'}
    ]);


    SetValue('Edit_배당표_상가_합계_보증금', Sum('배당표_상가_임대차보증금_Arr'))
    SetValue('Edit_배당표_상가_합계_월세', Sum('배당표_상가_월세_Arr'))
    SetValue('Edit_배당표_상가_합계_실제임대차보증금', Sum('배당표_상가_실제임대차보증금_Arr'))
    SetValue('Edit_배당표_상가_합계_최우선변제보증금', Sum('배당표_상가_최우선변제보증금_Arr'))
    SetValue('Edit_배당표_상가_합계_상가임대차보증금_확정', Sum('배당표_상가_임대차보증금_확정_Arr'))
    SetValue('Edit_배당표_상가_합계_상가임대차보증금_확정없는', Sum('배당표_상가_임대차보증금_확정없는_Arr'))

}

function MC_배당표_상가임대차보증금_계산_전체() {

    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRowCount('배당표_상가_RowCount');


    SetValue('Edit_배당표_상가_예상낙찰가', GetNumber('Edit_보정표_예상낙찰가'))
    SetValue('Edit_배당표_상가_경락가액', (GetNumber('Edit_배당표_예상낙찰가') - GetNumber('Edit_배당표_경매비용')) / 3)


    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_상가_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_배당표_상가임대차보증금_계산();
    }

}

function MC_배당표_주택임대차보증금_계산_전체() {

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRowCount('배당표_주택임대차보증금_RowCount');


    SetValue('Edit_배당표_예상낙찰가', GetNumber('Edit_보정표_예상낙찰가'))
    SetValue('Edit_배당표_경락가액', (GetNumber('Edit_배당표_예상낙찰가') - GetNumber('Edit_배당표_경매비용')) / 2)


    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_주택임대차보증금_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_배당표_주택임대차보증금_계산();
    }

}

function MC_저장_배당() {

    SetValue('is배당처리', "Y")


    RunButton('Command_저장');

}

function MC_저장_배당금() {

    RunQuery('저장_배당금_배당금', {
        '저장_배당표_배당금_년도': GetValue('저장_배당표_배당금_년도'),
        '저장_배당표_배당금_일련번호': GetValue('저장_배당표_배당금_일련번호'),
        '저장_배당표_배당금_배당표구분': GetValue('저장_배당표_배당금_배당표구분'),
        '저장_배당표_배당금_순번': GetValue('저장_배당표_배당금_순번'),
        '저장_배당표_배당금_순위': GetValue('저장_배당표_배당금_순위'),
        '저장_배당표_배당금_표시순위': GetValue('저장_배당표_배당금_표시순위'),
        '저장_배당표_배당금_발생일자': GetValue('저장_배당표_배당금_발생일자'),
        '저장_배당표_배당금_권리자': GetValue('저장_배당표_배당금_권리자'),
        '저장_배당표_배당금_권리의내용': GetValue('저장_배당표_배당금_권리의내용'),
        '저장_배당표_배당금_말소여부': GetValue('저장_배당표_배당금_말소여부'),
        '저장_배당표_배당금_단독담보': GetValue('저장_배당표_배당금_단독담보'),
        '저장_배당표_배당금_공동담보': GetValue('저장_배당표_배당금_공동담보'),
        '저장_배당표_배당금_Flag': GetValue('저장_배당표_배당금_Flag'),
        '저장_배당표_배당금_당사설정': GetValue('저장_배당표_배당금_당사설정'),
        '저장_배당표_배당금_배당순위': GetValue('저장_배당표_배당금_배당순위'),
    }, 'POST');


    RunQuery('Q_배당표_배당금_계산D', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_배당금건물() {
    RunQuery('저장_배당금_배당금', {
        '저장_배당표_배당금_년도': GetValue('저장_배당표_배당금_년도'),
        '저장_배당표_배당금_일련번호': GetValue('저장_배당표_배당금_일련번호'),
        '저장_배당표_배당금_배당표구분': GetValue('저장_배당표_배당금_배당표구분'),
        '저장_배당표_배당금_순번': GetValue('저장_배당표_배당금_순번'),
        '저장_배당표_배당금_순위': GetValue('저장_배당표_배당금_순위'),
        '저장_배당표_배당금_표시순위': GetValue('저장_배당표_배당금_표시순위'),
        '저장_배당표_배당금_발생일자': GetValue('저장_배당표_배당금_발생일자'),
        '저장_배당표_배당금_권리자': GetValue('저장_배당표_배당금_권리자'),
        '저장_배당표_배당금_권리의내용': GetValue('저장_배당표_배당금_권리의내용'),
        '저장_배당표_배당금_말소여부': GetValue('저장_배당표_배당금_말소여부'),
        '저장_배당표_배당금_단독담보': GetValue('저장_배당표_배당금_단독담보'),
        '저장_배당표_배당금_공동담보': GetValue('저장_배당표_배당금_공동담보'),
        '저장_배당표_배당금_Flag': GetValue('저장_배당표_배당금_Flag'),
        '저장_배당표_배당금_당사설정': GetValue('저장_배당표_배당금_당사설정'),
        '저장_배당표_배당금_배당순위': GetValue('저장_배당표_배당금_배당순위'),
    }, 'POST');


    RunQuery('Q_배당표_배당금_계산D', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_배당표_배당금D() {

    GetZoonData('Q_배당표_배당금_계산D').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '9999')) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_배당표_배당금_계산D').SetRows(GetValue('m_index'), [
        {key: 'FLAG', value: 'I'},
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetZoonData('Q_배당표_배당금_계산D').GetRows("", [
        {key: '저장_배당표_배당금_년도', value: 'YYYY'},
        {key: '저장_배당표_배당금_일련번호', value: 'SEQ'},
        {key: '저장_배당표_배당금_배당표구분', value: 'SHA_GU'},
        {key: '저장_배당표_배당금_순번', value: 'LN_SEQ'},
        {key: '저장_배당표_배당금_순위', value: 'RANK'},
        {key: '저장_배당표_배당금_표시순위', value: 'DISP_RANK'},
        {key: '저장_배당표_배당금_발생일자', value: 'RIGHT_DATE'},
        {key: '저장_배당표_배당금_권리자', value: 'RIGHT_PERSON'},
        {key: '저장_배당표_배당금_권리의내용', value: 'RIGHT_CODE'},
        {key: '저장_배당표_배당금_말소여부', value: 'ERA_YN'},
        {key: '저장_배당표_배당금_단독담보', value: 'CRED_SELF_AMT'},
        {key: '저장_배당표_배당금_공동담보', value: 'CRED_COMB_AMT'},
        {key: '저장_배당표_배당금_Flag', value: 'FLAG'},
        {key: '저장_배당표_배당금_당사설정', value: 'HITE_YN'},
        {key: '저장_배당표_배당금_배당순위', value: 'PRO_RATE_CODE'}
    ]);


    // GetZoonData('Q_배당표_배당금_계산D').SetRows(GetValue('m_index'), [
    //     {key: 'FLAG', value: 'D'}
    // ]);
    //
    //
    // GetZoonData('Q_배당표_배당금_계산D').GetRows("", [
    //     {key: '저장_배당표_배당금D_년도', value: 'YYYY'},
    //     {key: '저장_배당표_배당금D_일련번호', value: 'SEQ'},
    //     {key: '저장_배당표_배당금D_배당표구분', value: 'SHA_GU'},
    //     {key: '저장_배당표_배당금D_순번', value: 'LN_SEQ'},
    //     {key: '저장_배당표_배당금D_순위', value: 'RANK'},
    //     {key: '저장_배당표_배당금D_표시순위', value: 'DISP_RANK'},
    //     {key: '저장_배당표_배당금D_발생일자', value: 'RIGHT_DATE'},
    //     {key: '저장_배당표_배당금D_권리자', value: 'RIGHT_PERSON'},
    //     {key: '저장_배당표_배당금D_권리의내용', value: 'RIGHT_CODE'},
    //     {key: '저장_배당표_배당금D_말소여부', value: 'ERA_YN'},
    //     {key: '저장_배당표_배당금D_단독담보', value: 'CRED_SELF_AMT'},
    //     {key: '저장_배당표_배당금D_공동담보', value: 'CRED_COMB_AMT'},
    //     {key: '저장_배당표_배당금D_Flag', value: 'FLAG'},
    //     {key: '저장_배당표_배당금D_당사설정', value: 'HITE_YN'},
    //     {key: '저장_배당표_배당금D_배당순위', value: 'PRO_RATE_CODE'}
    // ]);
    //
    //
    // AppendArray(GetValue('저장_배당표_배당금_년도'), GetValue('저장_배당표_배당금D_년도'))
    // AppendArray(GetValue('저장_배당표_배당금_일련번호'), GetValue('저장_배당표_배당금D_일련번호'))
    // AppendArray(GetValue('저장_배당표_배당금_배당표구분'), GetValue('저장_배당표_배당금D_배당표구분'))
    // AppendArray(GetValue('저장_배당표_배당금_순번'), GetValue('저장_배당표_배당금D_순번'))
    // AppendArray(GetValue('저장_배당표_배당금_순위'), GetValue('저장_배당표_배당금D_순위'))
    // AppendArray(GetValue('저장_배당표_배당금_표시순위'), GetValue('저장_배당표_배당금D_표시순위'))
    // AppendArray(GetValue('저장_배당표_배당금_발생일자'), GetValue('저장_배당표_배당금D_발생일자'))
    // AppendArray(GetValue('저장_배당표_배당금_권리자'), GetValue('저장_배당표_배당금D_권리자'))
    // AppendArray(GetValue('저장_배당표_배당금_권리의내용'), GetValue('저장_배당표_배당금D_권리의내용'))
    // AppendArray(GetValue('저장_배당표_배당금_말소여부'), GetValue('저장_배당표_배당금D_말소여부'))
    // AppendArray(GetValue('저장_배당표_배당금_단독담보'), GetValue('저장_배당표_배당금D_단독담보'))
    // AppendArray(GetValue('저장_배당표_배당금_공동담보'), GetValue('저장_배당표_배당금D_공동담보'))
    // AppendArray(GetValue('저장_배당표_배당금_Flag'), GetValue('저장_배당표_배당금D_Flag'))
    // AppendArray(GetValue('저장_배당표_배당금_당사설정'), GetValue('저장_배당표_배당금D_당사설정'))
    // AppendArray(GetValue('저장_배당표_배당금_배당순위'), GetValue('저장_배당표_배당금D_배당순위'))


    RunQuery('저장_배당금_배당금', {
        '저장_배당표_배당금_년도': GetValue('저장_배당표_배당금_년도'),
        '저장_배당표_배당금_일련번호': GetValue('저장_배당표_배당금_일련번호'),
        '저장_배당표_배당금_배당표구분': GetValue('저장_배당표_배당금_배당표구분'),
        '저장_배당표_배당금_순번': GetValue('저장_배당표_배당금_순번'),
        '저장_배당표_배당금_순위': GetValue('저장_배당표_배당금_순위'),
        '저장_배당표_배당금_표시순위': GetValue('저장_배당표_배당금_표시순위'),
        '저장_배당표_배당금_발생일자': GetValue('저장_배당표_배당금_발생일자'),
        '저장_배당표_배당금_권리자': GetValue('저장_배당표_배당금_권리자'),
        '저장_배당표_배당금_권리의내용': GetValue('저장_배당표_배당금_권리의내용'),
        '저장_배당표_배당금_말소여부': GetValue('저장_배당표_배당금_말소여부'),
        '저장_배당표_배당금_단독담보': GetValue('저장_배당표_배당금_단독담보'),
        '저장_배당표_배당금_공동담보': GetValue('저장_배당표_배당금_공동담보'),
        '저장_배당표_배당금_Flag': GetValue('저장_배당표_배당금_Flag'),
        '저장_배당표_배당금_당사설정': GetValue('저장_배당표_배당금_당사설정'),
        '저장_배당표_배당금_배당순위': GetValue('저장_배당표_배당금_배당순위'),
    }, 'POST');

    RunQuery('Q_배당표_배당금_계산M', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_배당표_배당금_계산D', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_배당표건물_배당금D() {

    GetZoonData('Q_배당표_배당금건물_계산D').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '9999')) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_배당표_배당금건물_계산D').SetRows(GetValue('m_index'), [
        {key: 'FLAG', value: 'I'},
        {key: 'YYYY', value: GetValue('년도')},
        {key: 'SEQ', value: GetValue('감정순번')}
    ]);


    GetZoonData('Q_배당표_배당금건물_계산D').GetRows("", [
        {key: '저장_배당표_배당금건물_년도', value: 'YYYY'},
        {key: '저장_배당표_배당금건물_일련번호', value: 'SEQ'},
        {key: '저장_배당표_배당금건물_배당표구분', value: 'SHA_GU'},
        {key: '저장_배당표_배당금건물_순번', value: 'LN_SEQ'},
        {key: '저장_배당표_배당금건물_순위', value: 'RANK'},
        {key: '저장_배당표_배당금건물_표시순위', value: 'DISP_RANK'},
        {key: '저장_배당표_배당금건물_발생일자', value: 'RIGHT_DATE'},
        {key: '저장_배당표_배당금건물_권리자', value: 'RIGHT_PERSON'},
        {key: '저장_배당표_배당금건물_권리의내용', value: 'RIGHT_CODE'},
        {key: '저장_배당표_배당금건물_말소여부', value: 'ERA_YN'},
        {key: '저장_배당표_배당금건물_단독담보', value: 'CRED_SELF_AMT'},
        {key: '저장_배당표_배당금건물_공동담보', value: 'CRED_COMB_AMT'},
        {key: '저장_배당표_배당금건물_Flag', value: 'FLAG'},
        {key: '저장_배당표_배당금건물_당사설정', value: 'HITE_YN'},
        {key: '저장_배당표_배당금건물_배당순위', value: 'PRO_RATE_CODE'}
    ]);


    // GetZoonData('Q_배당표_배당금건물_계산D').SetRows(GetValue('m_index'), [
    //     {key: 'FLAG', value: 'D'}
    // ]);
    //
    //
    // GetZoonData('Q_배당표_배당금건물_계산D').GetRows("", [
    //     {key: '저장_배당표_배당금건물D_년도', value: 'YYYY'},
    //     {key: '저장_배당표_배당금건물D_일련번호', value: 'SEQ'},
    //     {key: '저장_배당표_배당금건물D_배당표구분', value: 'SHA_GU'},
    //     {key: '저장_배당표_배당금건물D_순번', value: 'LN_SEQ'},
    //     {key: '저장_배당표_배당금건물D_순위', value: 'RANK'},
    //     {key: '저장_배당표_배당금건물D_표시순위', value: 'DISP_RANK'},
    //     {key: '저장_배당표_배당금건물D_발생일자', value: 'RIGHT_DATE'},
    //     {key: '저장_배당표_배당금건물D_권리자', value: 'RIGHT_PERSON'},
    //     {key: '저장_배당표_배당금건물D_권리의내용', value: 'RIGHT_CODE'},
    //     {key: '저장_배당표_배당금건물D_말소여부', value: 'ERA_YN'},
    //     {key: '저장_배당표_배당금건물D_단독담보', value: 'CRED_SELF_AMT'},
    //     {key: '저장_배당표_배당금건물D_공동담보', value: 'CRED_COMB_AMT'},
    //     {key: '저장_배당표_배당금건물D_Flag', value: 'FLAG'},
    //     {key: '저장_배당표_배당금건물D_당사설정', value: 'HITE_YN'},
    //     {key: '저장_배당표_배당금건물D_배당순위', value: 'PRO_RATE_CODE'}
    // ]);
    //
    //
    // AppendArray(GetValue('저장_배당표_배당금건물_년도'), GetValue('저장_배당표_배당금건물D_년도'))
    // AppendArray(GetValue('저장_배당표_배당금건물_일련번호'), GetValue('저장_배당표_배당금건물D_일련번호'))
    // AppendArray(GetValue('저장_배당표_배당금건물_배당표구분'), GetValue('저장_배당표_배당금건물D_배당표구분'))
    // AppendArray(GetValue('저장_배당표_배당금건물_순번'), GetValue('저장_배당표_배당금건물D_순번'))
    // AppendArray(GetValue('저장_배당표_배당금건물_순위'), GetValue('저장_배당표_배당금건물D_순위'))
    // AppendArray(GetValue('저장_배당표_배당금건물_표시순위'), GetValue('저장_배당표_배당금건물D_표시순위'))
    // AppendArray(GetValue('저장_배당표_배당금건물_발생일자'), GetValue('저장_배당표_배당금건물D_발생일자'))
    // AppendArray(GetValue('저장_배당표_배당금건물_권리자'), GetValue('저장_배당표_배당금건물D_권리자'))
    // AppendArray(GetValue('저장_배당표_배당금건물_권리의내용'), GetValue('저장_배당표_배당금건물D_권리의내용'))
    // AppendArray(GetValue('저장_배당표_배당금건물_말소여부'), GetValue('저장_배당표_배당금건물D_말소여부'))
    // AppendArray(GetValue('저장_배당표_배당금건물_단독담보'), GetValue('저장_배당표_배당금건물D_단독담보'))
    // AppendArray(GetValue('저장_배당표_배당금건물_공동담보'), GetValue('저장_배당표_배당금건물D_공동담보'))
    // AppendArray(GetValue('저장_배당표_배당금건물_Flag'), GetValue('저장_배당표_배당금건물D_Flag'))
    // AppendArray(GetValue('저장_배당표_배당금건물_당사설정'), GetValue('저장_배당표_배당금건물D_당사설정'))


    RunQuery('저장_배당금_배당금건물', {
        '저장_배당표_배당금건물_년도': GetValue('저장_배당표_배당금건물_년도'),
        '저장_배당표_배당금건물_일련번호': GetValue('저장_배당표_배당금건물_일련번호'),
        '저장_배당표_배당금건물_배당표구분': GetValue('저장_배당표_배당금건물_배당표구분'),
        '저장_배당표_배당금건물_순번': GetValue('저장_배당표_배당금건물_순번'),
        '저장_배당표_배당금건물_순위': GetValue('저장_배당표_배당금건물_순위'),
        '저장_배당표_배당금건물_표시순위': GetValue('저장_배당표_배당금건물_표시순위'),
        '저장_배당표_배당금건물_발생일자': GetValue('저장_배당표_배당금건물_발생일자'),
        '저장_배당표_배당금건물_권리자': GetValue('저장_배당표_배당금건물_권리자'),
        '저장_배당표_배당금건물_권리의내용': GetValue('저장_배당표_배당금건물_권리의내용'),
        '저장_배당표_배당금건물_말소여부': GetValue('저장_배당표_배당금건물_말소여부'),
        '저장_배당표_배당금건물_단독담보': GetValue('저장_배당표_배당금건물_단독담보'),
        '저장_배당표_배당금건물_공동담보': GetValue('저장_배당표_배당금건물_공동담보'),
        '저장_배당표_배당금건물_Flag': GetValue('저장_배당표_배당금건물_Flag'),
        '저장_배당표_배당금건물_당사설정': GetValue('저장_배당표_배당금건물_당사설정'),
        '저장_배당표_배당금건물_배당순위': GetValue('저장_배당표_배당금건물_배당순위'),
    }, 'POST');


    RunQuery('Q_배당표_배당금건물_계산M', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_배당표_배당금건물_계산D', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_ValidationCheck_배당표_배당금() {

    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    SetValue('00_RowIndex', StrToNum(GetArray('저장_배당표_배당금_표시순위', GetValue('i'))))


    if ((GetValue('00_RowIndex') < 10)) {
        return false;
    }


    if (isEmpty(GetArray('저장_배당표_배당금_단독담보', GetValue('i')) <= 0 && GetValue('저장_배당표_배당금_공동담보') <= 0)) {
        SetValue('저장_Error_Message', "배당금의계산_채권최고액을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_배당금_권리의내용', GetValue('i')))) {
        SetValue('저장_Error_Message', "배당금의계산_권리의내용을 선택하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_배당금_권리자', GetValue('i')))) {
        SetValue('저장_Error_Message', "배당금의계산_권리자를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_배당금_발생일자', GetValue('i')))
        || GetArray('저장_배당표_배당금_발생일자', GetValue('i')) == "00000000")
    {
        SetValue('저장_Error_Message', "배당금의계산_권리발생일자를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_배당금_표시순위', GetValue('i')))) {
        SetValue('저장_Error_Message', "배당금의계산_순위를 선택하여 주십시오.")

    }

}

function MC_저장_ValidationCheck_배당표_상가임차보증금() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_배당표_상가_월세', GetValue('i')))) {
        SetValue('저장_Error_Message', "상가건물임차보증금의계산_월세를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_상가_임대차보증금', GetValue('i')))) {
        SetValue('저장_Error_Message', "상가건물임차보증금의계산_상가임대차보증금을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray(GetValue('저장_배당표_상가_가임대적용여부') != "Y" && GetValue('저장_배당표_상가_상호성명'), GetValue('i')))) {
        SetValue('저장_Error_Message', "상가건물임차보증금의계산_임차인의상호와성명을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_상가_위치면적', GetValue('i')))) {
        SetValue('저장_Error_Message', "상가건물임차보증금의계산_상업용부분의위치및면적을 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_상가_순번', GetValue('i')))) {
        SetValue('저장_Error_Message', "상가건물임차보증금의계산_각구의일련번호를 선택하여 주십시오.")

    }

}

function MC_저장_ValidationCheck_배당표_주택임차보증금() {

    if (true) {
        return false;
    }


    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    if (isEmpty(GetArray('저장_배당표_주거용방의총수', GetValue('i')))) {
        SetValue('저장_Error_Message', "주택임차보증금의계산_1구의건물내에있는주거용방의총수를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_각구의위치', GetValue('i')))) {
        SetValue('저장_Error_Message', "주택임차보증금의계산_1동의건물내에서의주거용부분인각구의위치를 입력하여 주십시오.")

    }


    if (isEmpty(GetArray('저장_배당표_각구의일련번호', GetValue('i')))) {
        SetValue('저장_Error_Message', "주택임차보증금의계산_각구의일련번호를 선택하여 주십시오.")

    }

}

function MC_토지배당금M_참조값() {

    GetComponent('DBGrid_토지의표시').GetCurSel('토지의표시_RowPosition');


    GetComponent('DBGrid_토지의표시').GetRow(GetNumber('토지의표시_RowPosition'), [
        {key: '토지의표시_일단지구분', value: 'POT_GU'},
        {key: '토지의표시_지번', value: 'LOT_NUM'},
        {key: '토지의표시_개별공시지가', value: 'ANNO_AMT'},
        {key: '토지의표시_최소행정구역', value: 'MIN_BOUND'}
    ]);


    GetComponent('DBGrid_배당금_계산M').SetRow(GetValue('토지의표시_RowPosition'), [
        {key: 'POT_GU', value: GetValue('토지의표시_일단지구분')},
        {key: 'LOT_NUM', value: GetValue('토지의표시_지번')},
        {key: 'MIN_BOUND', value: GetValue('토지의표시_최소행정구역')}
    ], true);


    GetComponent('DBGrid_감정가액산출내역').SetRow(GetValue('토지의표시_RowPosition'), [
        {key: 'POT_GU', value: GetValue('토지의표시_일단지구분')},
        {key: 'LOT_NUM', value: GetValue('토지의표시_지번')},
        {key: 'MIN_BOUND', value: GetValue('토지의표시_최소행정구역')},
        {key: 'NAME', value: '토지'}
    ], true);

}

function MC_저장_상가임차보증금() {

    RunQuery('저장_상가임차보증금', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_배당표_상가_년도': GetValue('저장_배당표_상가_년도'),
        '저장_배당표_상가_일련번호': GetValue('저장_배당표_상가_일련번호'),
        '저장_배당표_상가_순번': GetValue('저장_배당표_상가_순번'),
        '저장_배당표_상가_위치면적': GetValue('저장_배당표_상가_위치면적'),
        '저장_배당표_상가_가임대적용여부': GetValue('저장_배당표_상가_가임대적용여부'),
        '저장_배당표_상가_상호성명': GetValue('저장_배당표_상가_상호성명'),
        '저장_배당표_상가_임대차보증금': GetValue('저장_배당표_상가_임대차보증금'),
        '저장_배당표_상가_확정일자': GetValue('저장_배당표_상가_확정일자'),
        '저장_배당표_상가_월세': GetValue('저장_배당표_상가_월세'),
        '저장_배당표_상가_실제임대차보증금': GetValue('저장_배당표_상가_실제임대차보증금'),
        '저장_배당표_상가_최우선변제보증금': GetValue('저장_배당표_상가_최우선변제보증금'),
        '저장_배당표_상가_상가임대차_확정': GetValue('저장_배당표_상가_상가임대차_확정'),
        '저장_배당표_상가_상가임대차_확정없는': GetValue('저장_배당표_상가_상가임대차_확정없는')
    }, 'POST');


    RunQuery('Q_배당표_상가임차보증금_계산', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_저장_주택임차보증금() {

    RunQuery('저장_배당금_주택임차보증금', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_배당표_년도': GetValue('저장_배당표_년도'),
        '저장_배당표_일련번호': GetValue('저장_배당표_일련번호'),
        '저장_배당표_각구의일련번호': GetValue('저장_배당표_각구의일련번호'),
        '저장_배당표_각구의위치': GetValue('저장_배당표_각구의위치'),
        '저장_배당표_주거용방의총수': GetValue('저장_배당표_주거용방의총수'),
        '저장_배당표_확정일자보유여부': GetValue('저장_배당표_확정일자보유여부'),
        '저장_배당표_적용한방의총수': GetValue('저장_배당표_적용한방의총수'),
        '저장_배당표_실제임대차보증금': GetValue('저장_배당표_실제임대차보증금'),
        '저장_배당표_최종적용임대차보증금': GetValue('저장_배당표_최종적용임대차보증금'),
        '저장_배당표_확정_임대차보증금': GetValue('저장_배당표_확정_임대차보증금'),
        '저장_배당표_확정없는_임대차보증금': GetValue('저장_배당표_확정없는_임대차보증금')
    }, 'POST');


    RunQuery('Q_배당표_주택임차보증금_계산', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_배당표_배당금_RowChange() {

    GetComponent('DBGrid_배당금_계산M').GetRow(-1, [
        {key: '배당표_배당금계산M_순번', value: 'LN_SEQ'}
    ]);


    GetComponent('DBGrid_배당금_계산D').GetRowCount('배당표_배당금계산_RowCount');

    if (GetValue('배당표_배당금계산_RowCount') > -1000) {

        for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산_RowCount'); SetValue('i', GetValue('i') + 1)) {
            MC_토지배당금계산_SYNC();
        }


        GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();

    }


    GetComponent('DBGrid_배당금_계산M').GetCurSel('그리드_IDX');


    MC_그리드_인덱스_Sync();

}

function MC_기준가격_감가율() {

    GetComponent('DBGrid_토지의표시').GetRows("", [
        {key: '토지의표시_일단지구분_Arr', value: 'POT_GU'},
        {key: '토지의표시_개별공시지가_Arr', value: 'ANNO_DAN'},
        {key: '토지의표시_총개별공시지가_Arr', value: 'ANNO_AMT'},
        {key: '토지의표시_면적_Arr', value: 'L_SIZE'}
    ]);


    GetComponent('DBGrid_기준가격').GetRow(-1, [
        {key: '기준가격_일단지구분', value: 'POT_GU'}
    ]);


    SetValue('토지의표시_RowCount', GetArrayCnt('토지의표시_일단지구분_Arr'))


    for (SetValue('i', GetNumber('토지의표시_RowCount') - 1); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_기준가격_감가율_계산();
    }


    SetValue('토지의표시_개별공시지가_총', Sum('토지의표시_총개별공시지가_Arr'))
    SetValue('토지의표시_개별공시지가', Max('토지의표시_개별공시지가_Arr'))
    SetValue('토지의표시_면적', Sum('토지의표시_면적_Arr'))


    SetValue('Edit_기준가격_비교치_감가율', GetNumber('토지의표시_개별공시지가_총') / (GetNumber('토지의표시_개별공시지가') * GetNumber('토지의표시_면적')))

}

function MC_기준가격_감가율_계산() {


    if (GetArray('토지의표시_일단지구분_Arr', GetNumber('i')) != GetValue('기준가격_일단지구분')) {
        RemoveArray('토지의표시_일단지구분_Arr', GetNumber('i'))
        RemoveArray('토지의표시_개별공시지가_Arr', GetNumber('i'))
        RemoveArray('토지의표시_총개별공시지가_Arr', GetNumber('i'))
        RemoveArray('토지의표시_면적_Arr', GetNumber('i'))
    }

}

function MC_기준가격_요인합계() {

    GetComponent('DBGrid_기준가격').GetRow(-1, [
        {key: '기준가격_일단지구분', value: 'POT_GU'},
        {key: '기준가격_표준지구분', value: 'STD_GU'},
        {key: '기준가격_표준지공시지가', value: 'STD_ANNO_AMT'},
        {key: '기준가격_시점수정_비교치', value: 'EDIT_C'},
        {key: '기준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '기준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '기준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '기준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '기준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '기준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '기준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '기준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '기준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '기준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '기준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '기준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '기준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '기준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '기준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '기준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '기준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '기준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '기준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '기준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '기준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '기준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '기준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '기준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '기준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '기준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '기준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '기준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '기준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '기준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '기준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '기준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '기준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '기준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '기준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '기준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '기준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '기준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '기준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '기준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '기준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '기준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '기준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '기준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '기준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '기준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '기준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '기준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '기준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '기준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '기준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '기준가격_기타_본건', value: 'L_ETC_M'},
        {key: '기준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '기준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '기준가격_장래_본건', value: 'E_TREND_M'},
        {key: '기준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '기준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '기준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '기준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '기준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '기준가격_감가율', value: 'DEPRE_RATE'},
        {key: '기준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '기준가격_산정단가', value: 'APAS_DAN'},
        {key: '기준가격_적용단가', value: 'APPL_DAN'},
        {key: '기준가격_소재지_본건', value: 'JUSO_M'},
        {key: '기준가격_소재지_사례', value: 'JUSO_S'},
        {key: '기준가격_적용요인합계', value: 'APPL_FACTOR_TOT'},
        {key: '기준가격_소재지_비교치', value: 'JUSO_C'}
    ]);


    MC_기준가격_집계표_곱();


    MC_기준가격_감가율();


    SetValue('Edit_기준가격_비교치_요인합계', Round(GetValue('기준가격_요인합계'), 2))
    SetValue('Edit_기준가격_비교치_적용요인합계', GetValue('Edit_기준가격_비교치_요인합계') * GetValue('Edit_기준가격_비교치_감가율'))
    SetValue('Edit_기준가격_비교치_산정단가', GetValue('Edit_기준가격_비교치_적용요인합계') * GetValue('기준가격_표준지공시지가'))
    SetValue('Edit_기준가격_비교치_적용단가', Round((GetValue('Edit_기준가격_비교치_산정단가') / 1000), 0))
    SetValue('Edit_기준가격_비교치_적용단가', GetValue('Edit_기준가격_비교치_적용단가') * 1000)


    GetComponent('DBGrid_기준가격').SetRow(-1, [
        {key: 'DEPRE_RATE', value: GetValue('Edit_기준가격_비교치_감가율')},
        {key: 'FACTOR_TOT', value: GetValue('Edit_기준가격_비교치_요인합계')},
        {key: 'APAS_DAN', value: GetValue('Edit_기준가격_비교치_산정단가')},
        {key: 'APPL_DAN', value: GetValue('Edit_기준가격_비교치_적용단가')},
        {key: 'APPL_FACTOR_TOT', value: GetValue('Edit_기준가격_비교치_적용요인합계')}
    ]);

}

function MC_기준가격_집계표() {

    GetComponent('DBGrid_기준가격').GetCurSel('기준가격_RowPosition');


    GetComponent('DBGrid_기준가격').GetRow(GetNumber('기준가격_RowPosition'), [
        {key: '기준가격_일단지구분', value: 'POT_GU'},
        {key: '기준가격_표준지구분', value: 'STD_GU'},
        {key: '기준가격_표준지공시지가', value: 'STD_ANNO_AMT'},
        {key: '기준가격_시점수정_비교치', value: 'EDIT_M'},
        {key: '기준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '기준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '기준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '기준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '기준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '기준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '기준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '기준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '기준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '기준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '기준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '기준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '기준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '기준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '기준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '기준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '기준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '기준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '기준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '기준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '기준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '기준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '기준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '기준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '기준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '기준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '기준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '기준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '기준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '기준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '기준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '기준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '기준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '기준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '기준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '기준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '기준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '기준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '기준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '기준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '기준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '기준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '기준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '기준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '기준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '기준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '기준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '기준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '기준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '기준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '기준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '기준가격_기타_본건', value: 'L_ETC_M'},
        {key: '기준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '기준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '기준가격_장래_본건', value: 'E_TREND_M'},
        {key: '기준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '기준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '기준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '기준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '기준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '기준가격_감가율', value: 'DEPRE_RATE'},
        {key: '기준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '기준가격_산정단가', value: 'APAS_DAN'},
        {key: '기준가격_적용단가', value: 'APPL_DAN'},
        {key: '기준가격_소재지_본건', value: 'JUSO_M'},
        {key: '기준가격_소재지_사례', value: 'JUSO_S'},
        {key: '기준가격_시점수정_비교치', value: 'EDIT_C'}
    ]);


    MC_기준가격_집계표_곱();


    GetComponent('DBGrid_기준가격집계표').SetRow(GetValue('기준가격_RowPosition'), [
        {key: 'POT_GU', value: GetValue('기준가격_일단지구분')},
        {key: 'STD_GU', value: GetValue('기준가격_표준지구분')},
        {key: 'STD_ANNO_AMT', value: GetValue('기준가격_표준지공시지가')},
        {key: 'EDIT_C', value: GetValue('기준가격_시점수정_비교치')},
        {key: 'JUSO_M', value: GetValue('기준가격_소재지_본건')},
        {key: 'ROAD_C', value: GetValue('기준가격집계표_가로')},
        {key: 'APPRO_C', value: GetValue('기준가격집계표_접근')},
        {key: 'ENVI_C', value: GetValue('기준가격집계표_환경')},
        {key: 'OFFIC_C', value: GetValue('기준가격집계표_행정')},
        {key: 'LAND_C', value: GetValue('기준가격집계표_획지')},
        {key: 'ETC_C', value: GetValue('기준가격집계표_기타')},
        {key: 'DEPRE_RATE', value: GetValue('기준가격_감가율')},
        {key: 'FACTOR_TOT', value: GetValue('기준가격_요인합계')},
        {key: 'APAS_DAN', value: GetValue('기준가격_산정단가')},
        {key: 'APPL_DAN', value: GetValue('기준가격_적용단가')}
    ], true);

}

function MC_기준가격_집계표_곱() {

    SetValue('기준가격집계표_가로', GetValue('기준가격_도로접면_비교치') * GetValue('기준가격_도로거리_비교치'))
    SetValue('기준가격집계표_접근', GetValue('기준가격_관공서_비교치') * GetValue('기준가격_중심지역_비교치') * GetValue('기준가격_기타접근성_비교치'))
    SetValue('기준가격집계표_환경', GetValue('기준가격_철도_비교치') * GetValue('기준가격_폐기물_비교치') * GetValue('기준가격_기타환경_비교치'))
    SetValue('기준가격집계표_행정', GetValue('기준가격_용도지역_비교치') * GetValue('기준가격_용도지구_비교치') * GetValue('기준가격_도시계획_비교치') * GetValue('기준가격_기타제한_비교치'))
    SetValue('기준가격집계표_획지', GetValue('기준가격_고저_비교치') * GetValue('기준가격_형상_비교치') * GetValue('기준가격_방위_비교치') * GetValue('기준가격_면적_비교치') * GetValue('기준가격_토지이용_비교치') * GetValue('기준가격_기타_비교치'))
    SetValue('기준가격집계표_기타', GetValue('기준가격_장래_비교치') * GetValue('기준가격_기타조건_비교치'))
    SetValue('기준가격_요인합계', GetValue('기준가격_소재지_비교치') * GetValue('기준가격_시점수정_비교치') * GetValue('기준가격집계표_가로') * GetValue('기준가격집계표_접근') * GetValue('기준가격집계표_환경') * GetValue('기준가격집계표_행정') * GetValue('기준가격집계표_획지') * GetValue('기준가격집계표_기타'))

}

function MC_기준가격_참조값_본건() {

    GetComponent('DBGrid_기준가격').GetRow(-1, [
        {key: '토지의표시_순번', value: 'POT_GU'}
    ]);


    if (isEmpty((GetValue('토지의표시_순번')))) {
        return false;
    }


    GetComponent('DBGrid_토지의표시').FindIndex('토지의표시_RowPosition', (row) => {

        if ((row['POT_GU'] == GetValue('토지의표시_순번'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_토지의표시').GetRow(GetNumber('토지의표시_RowPosition'), [
        {key: '토지의표시_최소행정구역', value: 'MIN_BOUND'},
        {key: '표준지공시지가_면적', value: 'L_SIZE'}
    ]);


    GetComponent('DBGrid_본건토지').GetRow(GetNumber('토지의표시_RowPosition'), [
        {key: '토지의표시_도로조건', value: 'OF_ROAD_CODE'},
        {key: '토지의표시_용도지역', value: 'USE_AREA'},
        {key: '토지의표시_지형지세', value: 'L_UNDUR_CODE'},
        {key: '토지의표시_형상', value: 'L_SHAPE_CODE'},
        {key: '토지의표시_이용현황', value: 'L_USE_CODE'}
    ]);


    SetValue('Edit_기준가격_본건요인_소재지', GetValue('토지의표시_최소행정구역'))
    SetValue('Combo_기준가격_본건요인_도로조건', GetValue('토지의표시_도로조건'))
    SetValue('Combo_기준가격_본건요인_용도지역', GetValue('토지의표시_용도지역'))
    SetValue('Combo_기준가격_본건요인_고저', GetValue('토지의표시_지형지세'))
    SetValue('Combo_기준가격_본건요인_형상', GetValue('토지의표시_형상'))
    SetValue('Combo_기준가격_본건요인_토지이용상황', GetValue('토지의표시_이용현황'))


    GetComponent('DBGrid_기준가격').SetRow(-1, [
        {key: 'JUSO_M', value: GetValue('토지의표시_최소행정구역')},
        {key: 'USE_AREA_M', value: GetValue('토지의표시_용도지역')},
        {key: 'L_UNDUR_CODE_M', value: GetValue('토지의표시_지형지세')},
        {key: 'L_SHAPE_CODE_M', value: GetValue('토지의표시_형상')},
        {key: 'L_OF_GU_M', value: GetValue('토지의표시_이용현황')},
        {key: 'ROAD_SIDE_M', value: GetValue('토지의표시_도로조건')}
    ], true);


    MC_기준가격_요인합계();

}

function MC_기준가격_참조값_표준지() {

    GetComponent('DBGrid_기준가격').GetRow(-1, [
        {key: '표준지공시지가_표준지구분', value: 'STD_GU'}
    ]);


    if (isEmpty((GetValue('표준지공시지가_표준지구분')))) {
        return false;
    }


    GetComponent('DBGrid_표준지공시지가').FindIndex('표준지공시지가_RowPosition', (row) => {

        if ((row['S_GU'] == GetValue('표준지공시지가_표준지구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_표준지공시지가').GetRow(GetNumber('표준지공시지가_RowPosition'), [
        {key: '표준지공시지가_표준지공시지가', value: 'STD_ANNO_AMT'},
        {key: '표준지공시지가_소재지', value: 'JUSO1'},
        {key: '표준지공시지가_도로조건', value: 'OF_ROAD_CODE'},
        {key: '표준지공시지가_용도지역', value: 'USE_AREA'},
        {key: '표준지공시지가_지형지세', value: 'L_UNDUR_CODE'},
        {key: '표준지공시지가_형상', value: 'L_SHAPE_CODE'},
        {key: '표준지공시지가_이용현황', value: 'L_USE_CODE'}
    ]);


    SetValue('Edit_기준가격_표준지요인_공시지가', GetValue('표준지공시지가_표준지공시지가'))
    SetValue('Edit_기준가격_표준지요인_소재지', GetValue('표준지공시지가_소재지'))
    SetValue('Combo_기준가격_표준지요인_도로조건', GetValue('표준지공시지가_도로조건'))
    SetValue('Combo_기준가격_표준지요인_용도지역', GetValue('표준지공시지가_용도지역'))
    SetValue('Combo_기준가격_표준지요인_고저', GetValue('표준지공시지가_지형지세'))
    SetValue('Combo_기준가격_표준지요인_형상', GetValue('표준지공시지가_형상'))
    SetValue('Combo_기준가격_표준지요인_토지이용상황', GetValue('표준지공시지가_이용현황'))


    GetComponent('DBGrid_기준가격').SetRow(-1, [
        {key: 'JUSO_S', value: GetValue('표준지공시지가_소재지')},
        {key: 'USE_AREA_S', value: GetValue('표준지공시지가_용도지역')},
        {key: 'L_UNDUR_CODE_S', value: GetValue('표준지공시지가_지형지세')},
        {key: 'L_SHAPE_CODE_S', value: GetValue('표준지공시지가_형상')},
        {key: 'L_OF_GU_S', value: GetValue('표준지공시지가_이용현황')},
        {key: 'STD_ANNO_AMT', value: GetValue('토지의표시_표준지공시지가')},
        {key: 'ROAD_SIDE_S', value: GetValue('표준지공시지가_도로조건')},
        {key: 'STD_ANNO_AMT', value: GetValue('표준지공시지가_표준지공시지가')}
    ]);


    MC_기준가격_요인합계();

}

function MC_기타요인_산정보정률() {

    GetComponent('DBGrid_기타요인').GetCurSel('기타요인_RowPosition');


    GetComponent('DBGrid_기타요인').GetRow(GetNumber('기타요인_RowPosition'), [
        {key: '기타요인_표준지공시지가', value: 'STD_APPL_DAN'},
        {key: '기타요인_최저', value: 'MA_NR_MIN_AMT'},
        {key: '기타요인_최고', value: 'MA_NR_MAX_AMT'},
        {key: '기타요인_비준가격', value: 'CO_AMT'},
        {key: '기타요인_사정보정률', value: 'ASSESS_RATE'}
    ]);


    if (GetNumber('기타요인_최저') > GetNumber('기타요인_비준가격')) {
        SetValue('기타요인_산정보정률', GetNumber('기타요인_최저') / GetNumber('기타요인_표준지공시지가'))
    } else if (GetNumber('기타요인_최저') < GetNumber('기타요인_비준가격') && GetNumber('기타요인_비준가격') < GetNumber('기타요인_최고')) {
        SetValue('기타요인_산정보정률', GetNumber('기타요인_비준가격') / GetNumber('기타요인_표준지공시지가'))
    } else if (GetNumber('기타요인_최고') < GetNumber('기타요인_비준가격')) {
        SetValue('기타요인_산정보정률', GetNumber('기타요인_최고') / GetNumber('기타요인_표준지공시지가'))
    } else {
        SetValue('기타요인_산정보정률', 0)
    }

    SetValue('기타요인_적용보정률', Round(GetNumber('기타요인_산정보정률') * GetNumber('기타요인_사정보정률'), 2))

    if (GetValue('기타요인_사정보정률') == 1) {
        SetValue('00_NUMBER', 0, 1)
    } else {
        SetValue('00_NUMBER', 1, 1)
    }


    GetComponent('DBGrid_기타요인').SetRow(GetValue('기타요인_RowPosition'), [
        {key: 'APAS_RATE', value: GetValue('기타요인_산정보정률')},
        {key: 'APPL_RATE', value: GetValue('기타요인_적용보정률')},
        {key: 'ASSESS_DESC_ENABLE', value: GetValue('00_NUMBER')}
    ], true);

    if (GetValue('00_NUMBER') == 0) {

        GetComponent('DBGrid_기타요인').SetRow(GetValue('기타요인_RowPosition'), [
            {key: 'ASSESS_DESC', value: ""}
        ], true);

    }

}

function MC_기타요인_참조값() {

    GetComponent('DBGrid_기타요인').GetRow(GetNumber('i'), [
        {key: '기타요인_일단지구분', value: 'POT_GU'}
    ]);


    GetComponent('DBGrid_기준가격').FindIndex('기준가격_RowPosition', (row) => {

        if ((row['POT_GU'] == GetValue('기타요인_일단지구분'))) {
            return true;
        }

        return false;
    });

    if (GetValue('기준가격_RowPosition') >= 0) {

        GetComponent('DBGrid_기준가격').GetRow(GetNumber('기준가격_RowPosition'), [
            {key: '기타요인_표준지공시지가', value: 'APPL_DAN'}
        ]);


        GetComponent('DBGrid_기타요인').SetRow(GetValue('i'), [
            {key: 'STD_APPL_DAN', value: GetValue('기타요인_표준지공시지가')}
        ], true);

    }


    GetComponent('DBGrid_비준가격집계표').FindIndex('비준가격_RowPosition', (row) => {

        if ((row['POT_GU'] == GetValue('기타요인_일단지구분'))) {
            return true;
        }

        return false;
    });

    if (GetValue('비준가격_RowPosition') >= 0) {

        GetComponent('DBGrid_비준가격집계표').FindIndexArray('m_index', (row) => {

            if ((row['POT_GU'] == GetValue('기타요인_일단지구분'))) {
                return true;
            }

            return false;
        });


        GetComponent('DBGrid_비준가격집계표').GetRows(GetValue('m_index'), [
            {key: '기타요인_비준가격_Arr', value: 'APPL_DAN'}
        ]);


        SetValue('기타요인_비준가격', 0)
        SetValue('기타요인_비준가격', Average(GetValue('기타요인_비준가격_Arr')))


        GetComponent('DBGrid_기타요인').SetRow(GetValue('i'), [
            {key: 'CO_AMT', value: GetValue('기타요인_비준가격')}
        ], true);

    }

}

function MC_기타요인_참조값_전체() {

    GetComponent('DBGrid_기타요인').GetRowCount('기타요인_RowCount');


    for (SetValue('i', 0); GetValue('i') < GetNumber('기타요인_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_기타요인_참조값();
    }

}

function MC_기타요인_최저최고() {

    GetComponent('DBGrid_기타요인').GetCurSel('기타요인_RowPosition');


    GetComponent('DBGrid_기타요인').GetRow(GetNumber('기타요인_RowPosition'), [
        {key: '기타요인_가격수준', value: 'MA_NR_AREA_CODE'}
    ]);


    if (isEmpty((GetValue('기타요인_가격수준')))) {
        return false;
    }


    if (GetValue('기타요인_가격수준') == "01") {
        SetValue('기타요인_최저', GetValue('Edit_본건인근지역_상업용_최저가'))
        SetValue('기타요인_최고', GetValue('Edit_본건인근지역_상업용_최고가'))
    } else if (GetValue('기타요인_가격수준') == "02") {
        SetValue('기타요인_최저', GetValue('Edit_본건인근지역_주거용_최저가'))
        SetValue('기타요인_최고', GetValue('Edit_본건인근지역_주거용_최고가'))
    } else if (GetValue('기타요인_가격수준') == "03") {
        SetValue('기타요인_최저', GetValue('Edit_본건인근지역_일반용_최저가'))
        SetValue('기타요인_최고', GetValue('Edit_본건인근지역_일반용_최고가'))
    } else if (GetValue('기타요인_가격수준') == "04") {
        SetValue('기타요인_최저', GetValue('Edit_본건인근지역_전_최저가'))
        SetValue('기타요인_최고', GetValue('Edit_본건인근지역_전_최고가'))
    } else if (GetValue('기타요인_가격수준') == "05") {
        SetValue('기타요인_최저', GetValue('Edit_본건인근지역_답_최저가'))
        SetValue('기타요인_최고', GetValue('Edit_본건인근지역_답_최고가'))
    } else if (GetValue('기타요인_가격수준') == "06") {
        SetValue('기타요인_최저', GetValue('Edit_본건인근지역_임야_최저가'))
        SetValue('기타요인_최고', GetValue('Edit_본건인근지역_임야_최고가'))
    }


    GetComponent('DBGrid_기타요인').SetRow(GetValue('기타요인_RowPosition'), [
        {key: 'MA_NR_MIN_AMT', value: GetValue('기타요인_최저')},
        {key: 'MA_NR_MAX_AMT', value: GetValue('기타요인_최고')}
    ], true);

}

function MC_배당표_배당금_삭제M() {

    SetValue('배당표_배당금계산_IDX', GetArray('m_index', GetValue('i')))


    GetZoonData('Q_배당표_배당금_계산D').DeleteRow(GetNumber('배당표_배당금계산_IDX'));

}

function MC_배당표_배당금_삭제M_전체() {

    GetComponent('DBGrid_토지의표시').GetRow(-1, [
        {key: '토지의표시_순번', value: 'LN_SEQ'}
    ]);


    GetZoonData('Q_배당표_배당금_계산D').FindIndexArray('m_index', (row) => {

        if ((row['LN_SEQ'] == GetValue('토지의표시_순번'))) {
            return true;
        }

        return false;
    });


    SetValue('배당표_배당금계산_RowCount', GetArrayCnt('m_index') - 1)


    for (SetValue('i', GetNumber('배당표_배당금계산_RowCount')); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_배당표_배당금_삭제M();
    }


    GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();

}

function MC_보정표_예상낙찰가() {

    SetValue('Edit_보정표_기준낙찰가율', (GetNumber('Edit_보정표_당해지역낙찰가율') + GetNumber('Edit_보정표_유사부동산낙찰가율')) / 2)


    GetComponent('DBGrid_담보').GetRows("", [
        {key: '담보_최종평가가액_Arr', value: 'FNL_INC_AMT'},
        {key: '배당표_배당금계산_순번_Arr', value: 'LN_SEQ'},
        {key: '평가액_평가가액_Arr', value: 'INC_AMT'}
    ]);


    GetComponent('DBGrid_담보_건물').GetRows("", [
        {key: '담보_건물_최종평가가액_Arr', value: 'FNL_INC_AMT'}
    ]);


    SetValue('Edit_보정표_적용할낙찰가율', GetNumber('Edit_보정표_기준낙찰가율') * GetNumber('Edit_보정표_단독주택_접한도로폭_적용률') * GetNumber('Edit_보정표_단독주택_대지의면적_적용률') * GetNumber('Edit_보정표_단독주택_경과년도_적용률') * GetNumber('Edit_보정표_상업용_접한도로폭_적용률') * GetNumber('Edit_보정표_상업용_토지의형상_적용률') * GetNumber('Edit_보정표_상업용_주변상권_적용률') * GetNumber('Edit_보정표_상업용_경과년도_적용률') * GetNumber('Edit_보정표_주거용_접한도로의폭_적용률') * GetNumber('Edit_보정표_주거용_토지의면적_적용률') * GetNumber('Edit_보정표_주거용_입지조건_적용률') * GetNumber('Edit_보정표_주거용_경과년도_적용률') * GetValue('Edit_보정표_공유지분_적용률') * GetNumber('Edit_보정표_법정지상권_적용률') * GetNumber('Edit_보정표_점유자형태_적용률'))
    SetValue('보정표_예상낙찰가', 0)
    SetValue('보정표_예상낙찰가_건물', 0)
    SetValue('담보_RowCount', GetArrayCnt('담보_최종평가가액_Arr'))
    SetValue('담보_건물_RowCount', GetArrayCnt('담보_건물_최종평가가액_Arr'))


    for (SetValue('i', 0); GetNumber('i') < GetNumber('담보_RowCount'); SetValue('i', GetNumber('i') + 1)) {
        MC_보정표_예상낙찰가_계산();
    }


    for (SetValue('i', 0); GetNumber('i') < GetNumber('담보_건물_RowCount'); SetValue('i', GetNumber('i') + 1)) {
        MC_보정표_예상낙찰가_건물_계산();
    }


    SetValue('Edit_보정표_예상낙찰가', (GetNumber('보정표_예상낙찰가') + GetNumber('보정표_예상낙찰가_건물')) / 100)
    SetValue('Edit_배당표_총예상낙찰가', (GetNumber('보정표_예상낙찰가') + GetNumber('보정표_예상낙찰가_건물')) / 100)


    GetComponent('DBGrid_담보_건물_Group').GetRows("", [
        {key: '담보_건물_최종평가가액_Arr', value: 'FNL_INC_AMT'},
        {key: '배당표_배당금계산_순번_Arr', value: 'REGI_GU'}
    ]);


    SetValue('담보_건물_RowCount', GetArrayCnt('담보_건물_최종평가가액_Arr'))


    for (SetValue('i', 0); GetNumber('i') < GetNumber('담보_건물_RowCount'); SetValue('i', GetNumber('i') + 1)) {
        MC_보정표_예상낙찰가_건물_계산_예상낙찰가();
    }


    MC_배당표_주택임대차보증금_계산_전체();


    MC_배당표_상가임대차보증금_계산_전체();


    MC_보정표_평가가격();


    RunButton('Command_응찰_02_이벤트');

}

function MC_보정표_예상낙찰가_계산() {
    SetValue('담보_최종평가가액', GetArray('담보_최종평가가액_Arr', GetNumber('i')) * GetNumber('Edit_보정표_적용할낙찰가율'))
    SetValue('배당표_배당금계산_순번', GetArray('배당표_배당금계산_순번_Arr', GetNumber('i')))
    SetValue('보정표_예상낙찰가', GetNumber('보정표_예상낙찰가') + GetNumber('담보_최종평가가액'))
    SetValue('담보_최종평가가액', GetNumber('담보_최종평가가액') / 100)
    SetValue('평가액_평가가액', GetArray('평가액_평가가액_Arr', GetNumber('i')))


    GetComponent('DBGrid_배당금_계산M').FindIndex('00_RowIndex', (row) => {

        if ((row['LN_SEQ'] == GetValue('배당표_배당금계산_순번'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_배당금_계산M').SetRow(GetValue('00_RowIndex'), [
        {key: 'FNL_INC_AMT', value: GetNumber('담보_최종평가가액')}
    ], true);


    GetComponent('DBGrid_감정가액산출내역').FindIndex('00_RowIndex', (row) => {

        if ((row['LN_SEQ'] == GetValue('배당표_배당금계산_순번'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_감정가액산출내역').SetRow(GetValue('00_RowIndex'), [
        {key: 'FNL_INC_AMT', value: GetNumber('담보_최종평가가액')},
        {key: 'FNL_INC_AMT_A', value: GetNumber('평가액_평가가액')}
    ], true);


    MC_보정표_감정가격산출내역_합계();

}

function MC_배당표_배당금_계산() {
    if (GetValue('배당표_배당금계산_ColName') == 'DISP_RANK') {

        GetComponent('DBGrid_배당금_계산D').SortField('DISP_RANK', 1);

    }


    GetComponent('DBGrid_배당금_계산D').GetRow(-1, [
        {key: '배당표_배당금계산_공동담보', value: 'CRED_COMB_AMT'},
        {key: '배당표_배당금계산_단독담보', value: 'CRED_SELF_AMT'},
        {key: '배당표_배당금계산_공동담보_ORG', value: 'CRED_COMB_AMT_ORG'},
        {key: '배당표_배당금계산_단독담보_ORG', value: 'CRED_SELF_AMT_ORG'},
        {key: '배당표_배당금계산_당사설정', value: 'HITE_YN'},
        {key: '배당표_배당금계산_발생일자', value: 'RIGHT_DATE'}
    ]);


    if (GetValue('배당표_배당금계산_공동담보') == GetValue('배당표_배당금계산_공동담보_ORG') && GetValue('배당표_배당금계산_단독담보') == GetValue('배당표_배당금계산_단독담보_ORG')) {
    } else {


        if (GetValue('배당표_배당금계산_ColName') == "CRED_SELF_AMT") {
            SetValue('배당표_배당금계산_공동담보', 0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))

        } else if (GetValue('배당표_배당금계산_ColName') == "CRED_COMB_AMT") {
            SetValue('배당표_배당금계산_단독담보', 0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))

        }
    }

    if (GetValue('배당표_배당금계산_ColName') == "HITE_YN") {

        if (GetValue('배당표_배당금계산_당사설정') == "Y") {
            SetValue('배당표_배당금계산_발생일자', GetValue('MkEdit_감정일'))

        }
    }


    GetComponent('DBGrid_배당금_계산D').SetRow(-1, [
        {key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산_단독담보')},
        {key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산_공동담보')},
        {key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산_공동담보_ORG')},
        {key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산_단독담보_ORG')},
        {key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산_발생일자')}
    ], true);


    SetValue('배당표_배당금계산_발생일자', "");

    SetValue('배당표_배당금계산_당사설정', "");

}

function MC_토지배당금계산_SYNC() {

    GetComponent('DBGrid_배당금_계산D').GetRow(GetNumber('i'), [
        {key: '배당표_배당금계산_배당순위', value: 'RANK'},
        {key: '배당표_배당금계산_발생일자', value: 'RIGHT_DATE'},
        {key: '배당표_배당금계산_권리자', value: 'RIGHT_PERSON'},
        {key: '배당표_배당금계산_권리의내용', value: 'RIGHT_CODE'},
        {key: '배당표_배당금계산_말소여부', value: 'ERA_YN'},
        {key: '배당표_배당금계산_단독담보', value: 'CRED_SELF_AMT'},
        {key: '배당표_배당금계산_공동담보', value: 'CRED_COMB_AMT'},
        {key: '배당표_배당금계산_순번', value: 'LN_SEQ'},
        {key: '배당표_배당금계산_표시순위', value: 'DISP_RANK'},
        {key: '배당표_배당금계산_배당표구분', value: 'SHA_GU'},
        {key: '배당표_배당금계산_Enable', value: 'IS_ENABLE'},
        {key: '배당표_배당금계산_공동담보_ORG', value: 'CRED_COMB_AMT_ORG'},
        {key: '배당표_배당금계산_단독담보_ORG', value: 'CRED_SELF_AMT_ORG'},
        {key: '배당표_배당금계산_배당순위_Proc', value: 'PRO_RATE_CODE'},
        {key: '배당표_배당금계산_당사설정', value: 'HITE_YN'}
    ]);


    GetZoonData('Q_배당표_배당금_계산D').FindIndex('배당표_배당금계산_IDX', (row) => {
        if ((row['LN_SEQ'] == GetValue('배당표_배당금계산_순번')) && (row['RANK'] == GetValue('배당표_배당금계산_배당순위'))) {
            return true;
        }

        return false;
    });

    if (GetNumber('배당표_배당금계산_IDX') < 0) {

        GetZoonData('Q_배당표_배당금_계산D').AddRow(0, [
            GetValue('년도'),

            GetValue('감정순번'),

            GetValue('배당표_배당금계산_배당표구분'),

            GetValue('배당표_배당금계산_순번'),

            GetValue('배당표_배당금계산_배당순위'),

            GetValue('배당표_배당금계산_표시순위'),

            GetValue('배당표_배당금계산_발생일자'),

            GetValue('배당표_배당금계산_권리자'),

            GetValue('배당표_배당금계산_권리의내용'),

            GetValue('배당표_배당금계산_말소여부'),

            GetValue('배당표_배당금계산_단독담보'),

            GetValue('배당표_배당금계산_공동담보'),

            GetValue('배당표_배당금계산_Enable'),

            GetValue('배당표_배당금계산_단독담보_ORG'),

            GetValue('배당표_배당금계산_공동담보_ORG'),

            GetValue('배당표_배당금계산_배당순위_Proc'),

            GetValue('배당표_배당금계산_당사설정'),

        ]);

    }

    if (GetNumber('배당표_배당금계산_IDX') >= 0) {

        GetZoonData('Q_배당표_배당금_계산D').SetRow(GetNumber('배당표_배당금계산_IDX'), [
            {key: 'DISP_RANK', value: GetValue('배당표_배당금계산_표시순위')},
            {key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산_발생일자')},
            {key: 'RIGHT_PERSON', value: GetValue('배당표_배당금계산_권리자')},
            {key: 'RIGHT_CODE', value: GetValue('배당표_배당금계산_권리의내용')},
            {key: 'ERA_YN', value: GetValue('배당표_배당금계산_말소여부')},
            {key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산_단독담보')},
            {key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산_공동담보')},
            {key: 'IS_ENABLE', value: GetValue('배당표_배당금계산_Enable')},
            {key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산_공동담보_ORG')},
            {key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산_단독담보_ORG')},
            {key: 'PRO_RATE_CODE', value: GetValue('배당표_배당금계산_배당순위_Proc')},
            {key: 'HITE_YN', value: GetValue('배당표_배당금계산_당사설정')}
        ]);

    }

}

function MC_배당표_배당금_채권최고액() {

    GetZoonData('Q_배당표_배당금_계산D').GetRows("", [
        {key: '배당표_배당금계산_단독담보_Arr', value: 'CRED_SELF_AMT'},
        {key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT'},
        {key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN'}
    ]);


    GetZoonData('Q_배당표_배당금건물_계산D').GetRows("", [
        {key: '배당표_배당금계산건물_공동담보_Arr', value: 'CRED_COMB_AMT'},
        {key: '배당표_배당금계산건물_단독담보_Arr', value: 'CRED_SELF_AMT'},
        {key: '배당표_배당금계산건물_말소여부_Arr', value: 'ERA_YN'}
    ]);


    SetValue('배당표_배당금계산_RowCount', GetArrayCnt('배당표_배당금계산_단독담보_Arr') - 1)
    SetValue('배당표_배당금계산건물_RowCount', GetArrayCnt('배당표_배당금계산건물_단독담보_Arr') - 1)


    for (SetValue('i', GetNumber('배당표_배당금계산_RowCount')); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_배당표_배당금_채권최고액_계산();
    }


    for (SetValue('i', GetNumber('배당표_배당금계산건물_RowCount')); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_배당표_배당금_채권최고액건물_계산();
    }


    if (Max('배당표_배당금계산_단독담보_Arr') > Max('배당표_배당금계산_공동담보_Arr')) {
        SetValue('배당표_배당금계산_최고채권액', Max('배당표_배당금계산_단독담보_Arr'))
    } else {

        SetValue('배당표_배당금계산_최고채권액', Max('배당표_배당금계산_공동담보_Arr'))
    }

    if (Max('배당표_배당금계산건물_단독담보_Arr') > Max('배당표_배당금계산건물_공동담보_Arr')) {
        SetValue('배당표_배당금계산건물_최고채권액', Max('배당표_배당금계산건물_단독담보_Arr'))
    } else {

        SetValue('배당표_배당금계산건물_최고채권액', Max('배당표_배당금계산건물_공동담보_Arr'))
    }

    if (GetValue('배당표_배당금계산_최고채권액') > GetValue('배당표_배당금계산건물_최고채권액')) {
        SetValue('배당표_배당금계산_최고채권액', GetValue('배당표_배당금계산_최고채권액'))
    } else {

        SetValue('배당표_배당금계산_최고채권액', GetValue('배당표_배당금계산건물_최고채권액'))
    }

    SetValue('Edit_배당표_최고채권액', GetValue('배당표_배당금계산_최고채권액'))

}

function MC_배당표_배당금_채권최고액_계산() {


    if (GetArray('배당표_배당금계산_말소여부_Arr', GetValue('i')) == "Y") {
        RemoveArray('배당표_배당금계산_단독담보_Arr', GetValue('i'))
        RemoveArray('배당표_배당금계산_공동담보_Arr', GetValue('i'))
    }

}

function MC_Combo_보정표_기본값셋팅() {

    GetComponent('Combo_보정표_공유지분').SetCurSel(0.0);


    GetComponent('Combo_보정표_단독주택_경과년도').SetCurSel(0.0);


    GetComponent('Combo_보정표_단독주택_대지의면적').SetCurSel(0.0);


    GetComponent('Combo_보정표_단독주택_접한도로폭').SetCurSel(0.0);


    GetComponent('Combo_보정표_법정지상권').SetCurSel(0.0);


    GetComponent('Combo_보정표_법정지상권_존속기간').SetCurSel(-1.0);


    GetComponent('Combo_보정표_상업용_경과년도').SetCurSel(0.0);


    GetComponent('Combo_보정표_상업용_접한도로폭').SetCurSel(0.0);


    GetComponent('Combo_보정표_상업용_주변상권').SetCurSel(0.0);


    GetComponent('Combo_보정표_상업용_토지의형상').SetCurSel(0.0);


    GetComponent('Combo_보정표_장래의이용').SetCurSel(0.0);


    GetComponent('Combo_보정표_점유자형태').SetCurSel(0.0);


    GetComponent('Combo_보정표_주거용_경과년도').SetCurSel(0.0);


    GetComponent('Combo_보정표_주거용_입지조건').SetCurSel(0.0);


    GetComponent('Combo_보정표_주거용_접한도로의폭').SetCurSel(0.0);


    GetComponent('Combo_보정표_주거용_토지의면적').SetCurSel(0.0);


    GetComponent('Combo_보정표_현재의주된').SetCurSel(0.0);


    SetValue('Edit_보정표_공유지분_적용률', 1);

    SetValue('Edit_보정표_기준낙찰가율', 100);

    SetValue('Edit_보정표_단독주택_경과년도_적용률', 1);

    SetValue('Edit_보정표_단독주택_대지의면적_적용률', 1);

    SetValue('Edit_보정표_단독주택_접한도로폭_적용률', 1);

    SetValue('Edit_보정표_당해지역낙찰가율', 100);

    SetValue('Edit_보정표_법정지상권_적용률', 1);

    SetValue('Edit_보정표_법정지상권성립사유', "");

    SetValue('Edit_보정표_상업용_경과년도_적용률', 1);

    SetValue('Edit_보정표_상업용_접한도로폭_적용률', 1);

    SetValue('Edit_보정표_상업용_주변상권_적용률', 1);

    SetValue('Edit_보정표_상업용_토지의형상_적용률', 1);

    SetValue('Edit_보정표_예상낙찰가', 0);

    SetValue('Edit_보정표_유사부동산낙찰가율', 100);

    SetValue('Edit_보정표_적용할낙찰가율', 100);

    SetValue('Edit_보정표_점유자형태_적용률', 1);

    SetValue('Edit_보정표_주거용_경과년도_적용률', 1);

    SetValue('Edit_보정표_주거용_입지조건_적용률', 1);

    SetValue('Edit_보정표_주거용_접한도로의폭_적용률', 1);

    SetValue('Edit_보정표_주거용_토지의면적_적용률', 1);

}

function MC_배당표_배당금_기본항목자동설정() {

    GetZoonData('Q_배당표_배당금_계산D').FindIndexArray('m_index', (row) => {

        if ((row['RIGHT_CODE'] == "001")) {
            return true;
        }

        return false;
    });


    SetValue('i', Sum('m_index'))

    if (GetValue('i') >= 0) {

        GetZoonData('Q_배당표_배당금_계산D').SetRows(GetValue('m_index'), [
            {key: 'CRED_COMB_AMT', value: GetNumber('Edit_배당표_경매비용')},
            {key: 'CRED_COMB_AMT_ORG', value: GetNumber('Edit_배당표_경매비용')}
        ]);

    }


    GetZoonData('Q_배당표_배당금_계산D').FindIndexArray('m_index', (row) => {

        if ((row['RIGHT_CODE'] == "003")) {
            return true;
        }

        return false;
    });


    SetValue('i', Sum('m_index'))

    if (GetValue('i') >= 0) {


        if (StrToNum(GetValue('Edit_배당표_합계_최종적용가임대보증금')) > StrToNum(GetValue('Edit_배당표_경락가액'))) {
            SetValue('00_가임대보증금초과여부', 'Y')
        } else {
            SetValue('00_가임대보증금초과여부', 'N')
        }

        if (GetValue('00_가임대보증금초과여부') == 'Y') {

            GetZoonData('Q_배당표_배당금_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_경락가액')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_경락가액')}
            ]);

        }


        if (GetValue('00_가임대보증금초과여부') == 'N') {

            GetZoonData('Q_배당표_배당금_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_합계_최종적용가임대보증금')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_합계_최종적용가임대보증금')}
            ]);

        }

    }

    GetZoonData('Q_배당표_배당금_계산D').FindIndexArray('m_index', (row) => {

        if ((row['RIGHT_CODE'] == "004")) {
            return true;
        }

        return false;
    });


    SetValue('i', Sum('m_index'))

    if (GetValue('i') >= 0) {


        if (StrToNum(GetValue('Edit_배당표_상가_합계_최우선변제보증금')) > StrToNum(GetValue('Edit_배당표_상가_경락가액'))) {
            SetValue('00_가임대보증금초과여부', 'Y')
        } else {
            SetValue('00_가임대보증금초과여부', 'N')
        }

        if (GetValue('00_가임대보증금초과여부') == 'Y') {

            GetZoonData('Q_배당표_배당금_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_상가_경락가액')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_상가_경락가액')}
            ]);

        }


        if (GetValue('00_가임대보증금초과여부') == 'N') {

            GetZoonData('Q_배당표_배당금_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_상가_합계_최우선변제보증금')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_상가_합계_최우선변제보증금')}
            ]);

        }

    }

    GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();


    GetZoonData('Q_배당표_배당금건물_계산D').FindIndexArray('m_index', (row) => {

        if ((row['RIGHT_CODE'] == "001")) {
            return true;
        }

        return false;
    });


    SetValue('i', Sum('m_index'))

    if (GetValue('i') >= 0) {

        GetZoonData('Q_배당표_배당금건물_계산D').SetRows(GetValue('m_index'), [
            {key: 'CRED_COMB_AMT', value: GetNumber('Edit_배당표_경매비용')},
            {key: 'CRED_COMB_AMT_ORG', value: GetNumber('Edit_배당표_경매비용')}
        ]);

    }


    GetZoonData('Q_배당표_배당금건물_계산D').FindIndexArray('m_index', (row) => {

        if ((row['RIGHT_CODE'] == "003")) {
            return true;
        }

        return false;
    });


    SetValue('i', Sum('m_index'))

    if (GetValue('i') >= 0) {


        if (StrToNum(GetValue('Edit_배당표_합계_최종적용가임대보증금')) > StrToNum(GetValue('Edit_배당표_경락가액'))) {
            SetValue('00_가임대보증금초과여부', 'Y')
        } else {
            SetValue('00_가임대보증금초과여부', 'N')
        }

        if (GetValue('00_가임대보증금초과여부') == 'Y') {

            GetZoonData('Q_배당표_배당금건물_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_경락가액')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_경락가액')}
            ]);

        }


        if (GetValue('00_가임대보증금초과여부') == 'N') {

            GetZoonData('Q_배당표_배당금건물_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_합계_최종적용가임대보증금')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_합계_최종적용가임대보증금')}
            ]);

        }

    }

    GetZoonData('Q_배당표_배당금건물_계산D').FindIndexArray('m_index', (row) => {

        if ((row['RIGHT_CODE'] == "004")) {
            return true;
        }

        return false;
    });


    SetValue('i', Sum('m_index'))

    if (GetValue('i') >= 0) {


        if (StrToNum(GetValue('Edit_배당표_상가_합계_최우선변제보증금')) > StrToNum(GetValue('Edit_배당표_상가_경락가액'))) {
            SetValue('00_가임대보증금초과여부', 'Y')
        } else {
            SetValue('00_가임대보증금초과여부', 'N')
        }

        if (GetValue('00_가임대보증금초과여부') == 'Y') {

            GetZoonData('Q_배당표_배당금건물_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_상가_경락가액')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_상가_경락가액')}
            ]);

        }


        if (GetValue('00_가임대보증금초과여부') == 'N') {

            GetZoonData('Q_배당표_배당금건물_계산D').SetRows(GetValue('m_index'), [
                {key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_상가_합계_최우선변제보증금')},
                {key: 'CRED_COMB_AMT_ORG', value: GetValue('Edit_배당표_상가_합계_최우선변제보증금')}
            ]);

        }

    }

    GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();


    MC_배당표_배당금_계산_EditChange();


    MC_배당표_배당금건물_계산_EditChange();

}

function MC_배당표_배당금_계산_EditChange() {

    GetComponent('DBGrid_배당금_계산D').GetRow(-1, [
        {key: '배당표_배당금계산_권리의내용', value: 'RIGHT_CODE'}
    ]);


    GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산_RowPosition', (row) => {

        if ((row['CD_CODE'] == GetValue('배당표_배당금계산_권리의내용'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_권리의내용').GetRow(GetValue('배당표_배당금계산_RowPosition'), [
        {key: '배당표_배당금계산_배당순위', value: 'ATTR_08'}
    ]);


    GetComponent('DBGrid_배당금_계산D').SetRow(-1, [
        {key: 'PRO_RATE_CODE', value: GetValue('배당표_배당금계산_배당순위')}
    ]);


    GetComponent('DBGrid_배당금_계산D').GetRowCount('배당표_배당금계산_RowCount');

    IfMacro(() => {
        if (GetValue('배당표_배당금계산_RowCount') > -1000) {

            for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산_RowCount'); SetValue('i', GetValue('i') + 1)) {
                MC_토지배당금계산_SYNC();
            }


            if (true) {
                return false;
            }


            GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();

        }
    })

    MC_배당표_배당금_채권최고액();

}

function MC_배당표_배당금건물_계산_EditChange() {

    GetComponent('DBGrid_배당금건물_계산D').GetRow(-1, [
        {key: '배당표_배당금계산건물_권리의내용', value: 'RIGHT_CODE'}
    ]);


    GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산건물_RowPosition', (row) => {

        if ((row['CD_CODE'] == GetValue('배당표_배당금계산건물_권리의내용'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_권리의내용').GetRow(GetValue('배당표_배당금계산건물_RowPosition'), [
        {key: '배당표_배당금계산건물_배당순위', value: 'ATTR_08'}
    ]);


    GetComponent('DBGrid_배당금건물_계산D').SetRow(-1, [
        {key: 'PRO_RATE_CODE', value: GetValue('배당표_배당금계산건물_배당순위')}
    ]);


    GetComponent('DBGrid_배당금건물_계산D').GetRowCount('배당표_배당금계산건물_RowCount');

    if (GetValue('배당표_배당금계산건물_RowCount') > -1000) {

        for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산건물_RowCount'); SetValue('i', GetValue('i') + 1)) {
            MC_건물배당금계산_SYNC();
        }


        if (true) {
            return false;
        }


        GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();

    }


    MC_배당표_배당금_채권최고액();

}

function MC_기준가격_저촉률() {

    GetZoonData('Q_코드_도시계획').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_도시계획'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_도시계획').GetRow(GetValue('00_RowIndex'), [
        {key: '기준가격_도시계획_본건', value: 'ATTR_08'}
    ]);


    GetZoonData('Q_코드_도시계획').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_기준가격_표준지요인_도시계획'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_도시계획').GetRow(GetValue('00_RowIndex'), [
        {key: '기준가격_도시계획_표준지', value: 'ATTR_08'}
    ]);


    GetZoonData('Q_코드_저촉률').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_기준가격_본건요인_저촉률'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_저촉률').GetRow(GetValue('00_RowIndex'), [
        {key: '기준가격_저촉률_본건', value: 'ATTR_08'}
    ]);


    GetZoonData('Q_코드_저촉률').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_기준가격_표준지요인_저촉률'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_저촉률').GetRow(GetValue('00_RowIndex'), [
        {key: '기준가격_저촉률_표준지', value: 'ATTR_08'}
    ]);


    SetValue('기준가격_저촉률_본건_값', StrToNum(GetValue('기준가격_저촉률_본건')) * StrToNum(GetValue('기준가격_도시계획_본건')) + (1 - StrToNum(GetValue('기준가격_저촉률_본건'))))
    SetValue('기준가격_저촉률_표준지_값', StrToNum(GetValue('기준가격_저촉률_표준지')) * StrToNum(GetValue('기준가격_도시계획_표준지')) + (1 - StrToNum(GetValue('기준가격_저촉률_표준지'))))
    SetValue('Edit_기준가격_비교치_저촉률', GetValue('기준가격_저촉률_본건_값') / GetValue('기준가격_저촉률_표준지_값'))


    GetComponent('DBGrid_기준가격').SetRow(-1, [
        {key: 'LIMIT_AREA_C', value: GetValue('Edit_기준가격_비교치_저촉률')}
    ], true);

}

function MC_저장_ValidationCheck_일단지중복() {

    GetComponent('DBGrid_기준가격').GetRowCount('기준가격_RowCount');


    for (SetValue('i', 0); GetValue('i') < GetNumber('기준가격_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_저장_ValidationCheck_일단지중복_Loop();
    }

}

function MC_저장_ValidationCheck_일단지중복_Loop() {

    GetComponent('DBGrid_기준가격').GetRows("", [
        {key: '토지의표시_일단지구분_Arr', value: 'POT_GU'}
    ]);


    SetValue('토지의표시_일단지구분', GetArray('토지의표시_일단지구분_Arr', GetValue('i')))

    RemoveArray('토지의표시_일단지구분_Arr', GetValue('i'))

    if (FindIndexArray('토지의표시_일단지구분_Arr', GetValue('토지의표시_일단지구분')) >= 0) {
        SetValue('저장_Error_Message', "일단지 구분이 중복되었습니다.")
    }

}

function MC_Combo_그리드_사용불가() {

    GetComponent('DBGrid_배당금건물_계산M').EnableEditing([
        { key : 'REGI_GU', value: 0}
    ]);


    GetComponent('DBGrid_건물단가').EnableEditing([
        { key : 'REGI_GU', value: 0}
    ]);


    GetComponent('DBGrid_건물평가액_집계표').EnableEditing([
        { key : 'REGI_GU', value: 0}
    ]);


    GetComponent('DBGrid_담보_건물').EnableEditing([
        { key : 'REGI_GU', value: 0}
    ]);


    GetComponent('DBGrid_비준가격').EnableEditing([
        { key : 'EX_DIV', value: 0}
    ]);


    GetComponent('DBGrid_기준가격집계표').EnableEditing([
        { key : 'STD_GU', value: 0}
    ]);


    GetComponent('DBGrid_담보제공비율_건물').EnableEditing([
        { key : 'REGI_GU', value: 0}
    ]);


    GetComponent('DBGrid_감정가액산출내역_건물').EnableEditing([
        { key : 'REGI_GU', value: 0}
    ]);

}

function MC_배당표_주택임대차보증금_계산() {

    GetZoonData('Q_코드_가임대보증금적용범위').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_배당표_가임대보증금적용범위'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_가임대보증금적용범위').GetRow(GetValue('배당표_주택임대차보증금_RowPosition'), [
        {key: '배당표_가임대보증금적용범위', value: 'ATTR_03'}
    ]);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(GetNumber('i'), [
        {key: '배당표_주택임대차보증금_방의총수', value: 'RESI_RM_CNT'},
        {key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT'},
        {key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT'},
        {key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN'}
    ]);


    SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', 0)
    SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', 0)

    if (GetValue('배당표_주택임대차보증금_ColName') == "POSS_A_RM_CNT") {
        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('배당표_주택임대차보증금_적용한방의총수') * GetValue('Edit_배당표_적용할주택가임대보증금액'))
        SetValue('배당표_주택임대차보증금_실제임대차보증금', 0)
    } else if (GetValue('배당표_주택임대차보증금_ColName') == "LEASE_AMT") {
        SetValue('배당표_주택임대차보증금_적용한방의총수', 0)


        if (GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') > GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))


            if (GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금') - GetValue('Edit_배당표_적용할주택가임대보증금액'))

            } else {

                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금') - GetValue('Edit_배당표_적용할주택가임대보증금액'))

            }

        } else if (GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))

        } else {


            if (GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))

            } else {

                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))

            }

        }
    } else {

        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('배당표_주택임대차보증금_적용한방의총수') * GetValue('Edit_배당표_적용할주택가임대보증금액'))


        if (GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') > GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))


            if (GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금') - GetValue('Edit_배당표_적용할주택가임대보증금액'))

            } else {

                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금') - GetValue('Edit_배당표_적용할주택가임대보증금액'))

            }

        } else if (GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))

        } else {


            if (GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))

            } else {

                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))

            }

        }
    }


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRow(GetValue('i'), [
        {key: 'REP_BE_SEC_AMT', value: GetValue('배당표_주택임대차보증금_최종가임대보증금')},
        {key: 'FXLEA_AMT', value: GetValue('배당표_주택임대차보증금_확정_주택임대차보증금')},
        {key: 'FXLEA_NO_AMT', value: GetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금')},
        {key: 'POSS_A_RM_CNT', value: GetValue('배당표_주택임대차보증금_적용한방의총수')},
        {key: 'LEASE_AMT', value: GetValue('배당표_주택임대차보증금_실제임대차보증금')}
    ]);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows("", [
        {key: '배당표_주택임대차보증금_방의총수Arr', value: 'RESI_RM_CNT'},
        {key: '배당표_주택임대차보증금_적용한방의총수Arr', value: 'POSS_A_RM_CNT'},
        {key: '배당표_주택임대차보증금_실제임대차보증금Arr', value: 'LEASE_AMT'},
        {key: '배당표_주택임대차보증금_최종가임대보증금Arr', value: 'REP_BE_SEC_AMT'},
        {key: '배당표_주택임대차보증금_확정_주택임대차보증금Arr', value: 'FXLEA_AMT'},
        {key: '배당표_주택임대차보증금_확정없는_주택임대차보증금Arr', value: 'FXLEA_NO_AMT'}
    ]);


    SetValue('Edit_배당표_합계_총방의개수', Sum('배당표_주택임대차보증금_방의총수Arr'))
    SetValue('Edit_배당표_합계_적용한방의개수', Sum('배당표_주택임대차보증금_적용한방의총수Arr'))
    SetValue('Edit_배당표_합계_실제임대차보증금', Sum('배당표_주택임대차보증금_실제임대차보증금Arr'))
    SetValue('Edit_배당표_합계_최종적용가임대보증금', Sum('배당표_주택임대차보증금_최종가임대보증금Arr'))
    SetValue('Edit_배당표_합계_주택임대차보증금_확정', Sum('배당표_주택임대차보증금_확정_주택임대차보증금Arr'))
    SetValue('Edit_배당표_합계_주택임대차보증금_확정없는', Sum('배당표_주택임대차보증금_확정없는_주택임대차보증금Arr'))

}

function MC_기준가격_항목변경() {

    GetComponent('DBGrid_기준가격').GetCurSel('기준가격_RowPosition');


    GetComponent('DBGrid_기준가격').GetRow(GetNumber('기준가격_RowPosition'), [
        {key: '기준가격_일단지구분', value: 'POT_GU'},
        {key: '기준가격_표준지구분', value: 'STD_GU'},
        {key: '기준가격_표준지공시지가', value: 'STD_ANNO_AMT'},
        {key: '기준가격_시점수정_본건', value: 'EDIT_M'},
        {key: '기준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '기준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '기준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '기준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '기준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '기준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '기준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '기준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '기준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '기준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '기준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '기준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '기준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '기준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '기준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '기준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '기준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '기준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '기준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '기준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '기준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '기준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '기준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '기준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '기준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '기준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '기준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '기준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '기준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '기준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '기준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '기준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '기준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '기준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '기준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '기준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '기준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '기준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '기준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '기준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '기준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '기준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '기준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '기준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '기준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '기준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '기준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '기준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '기준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '기준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '기준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '기준가격_기타_본건', value: 'L_ETC_M'},
        {key: '기준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '기준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '기준가격_장래_본건', value: 'E_TREND_M'},
        {key: '기준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '기준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '기준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '기준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '기준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '기준가격_감가율', value: 'DEPRE_RATE'},
        {key: '기준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '기준가격_산정단가', value: 'APAS_DAN'},
        {key: '기준가격_적용단가', value: 'APPL_DAN'},
        {key: '기준가격_소재지_본건', value: 'JUSO_M'},
        {key: '기준가격_소재지_사례', value: 'JUSO_S'},
        {key: '기준가격_시점수정_비교치', value: 'EDIT_C'},
        {key: '기준가격_시점수정_사례', value: 'EDIT_S'},
        {key: '기준가격_시점수정_본건_날짜', value: 'EDIT_M_DATE'},
        {key: '기준가격_시점수정_사례_날짜', value: 'EDIT_S_DATE'},
        {key: '기준가격_소재지_비교치', value: 'JUSO_C'}
    ]);


    SetValue('Edit_기준가격_본건요인_시점수정_날짜', GetValue('기준가격_시점수정_본건_날짜'))
    SetValue('Edit_기준가격_본건요인_시점수정', GetValue('기준가격_시점수정_본건'))
    SetValue('Edit_기준가격_본건요인_소재지', GetValue('기준가격_소재지_본건'))
    SetValue('Combo_기준가격_본건요인_도로조건', GetValue('기준가격_도로접면_본건'))
    SetValue('Combo_기준가격_본건요인_도로거리', GetValue('기준가격_도로거리_본건'))
    SetValue('Combo_기준가격_본건요인_관공서접근성', GetValue('기준가격_관공서_본건'))
    SetValue('Combo_기준가격_본건요인_중심지역접근성', GetValue('기준가격_중심지역_본건'))
    SetValue('Edit_기준가격_본건요인_기타접근성', GetValue('기준가격_기타접근성_본건'))
    SetValue('Combo_기준가격_본건요인_철도접근성', GetValue('기준가격_철도_본건'))
    SetValue('Combo_기준가격_본건요인_폐기물접근성', GetValue('기준가격_폐기물_본건'))
    SetValue('Edit_기준가격_본건요인_기타환경조건', GetValue('기준가격_기타환경_본건'))
    SetValue('Combo_기준가격_본건요인_용도지역', GetValue('기준가격_용도지역_본건'))
    SetValue('Combo_기준가격_본건요인_용도지구', GetValue('기준가격_용도지구_본건'))
    SetValue('Combo_기준가격_본건요인_도시계획', GetValue('기준가격_도시계획_본건'))
    SetValue('Combo_기준가격_본건요인_저촉률', GetValue('기준가격_기타제한_본건'))
    SetValue('Combo_기준가격_본건요인_고저', GetValue('기준가격_고저_본건'))
    SetValue('Combo_기준가격_본건요인_형상', GetValue('기준가격_형상_본건'))
    SetValue('Combo_기준가격_본건요인_방위', GetValue('기준가격_방위_본건'))
    SetValue('Combo_기준가격_본건요인_면적', GetValue('기준가격_면적_본건'))
    SetValue('Combo_기준가격_본건요인_토지이용상황', GetValue('기준가격_토지이용_본건'))
    SetValue('Combo_기준가격_본건요인_기타', GetValue('기준가격_기타_본건'))
    SetValue('Combo_기준가격_본건요인_장래의동향', GetValue('기준가격_장래_본건'))
    SetValue('Edit_기준가격_본건요인_기타조건', GetValue('기준가격_기타조건_본건'))

    SetValue('Edit_기준가격_표준지요인_공시지가', GetValue('기준가격_표준지공시지가'))
    SetValue('Edit_기준가격_표준지요인_시점수정_날짜', GetValue('기준가격_시점수정_사례_날짜'))
    SetValue('Edit_기준가격_표준지요인_시점수정', GetValue('기준가격_시점수정_사례'))
    SetValue('Edit_기준가격_표준지요인_소재지', GetValue('기준가격_소재지_사례'))
    SetValue('Combo_기준가격_표준지요인_도로조건', GetValue('기준가격_도로접면_표준지'))
    SetValue('Combo_기준가격_표준지요인_도로거리', GetValue('기준가격_도로거리_표준지'))
    SetValue('Combo_기준가격_표준지요인_관공서접근성', GetValue('기준가격_관공서_표준지'))
    SetValue('Combo_기준가격_표준지요인_중심지역접근성', GetValue('기준가격_중심지역_표준지'))
    SetValue('Edit_기준가격_표준지요인_기타접근성', GetValue('기준가격_기타접근성_표준지'))
    SetValue('Combo_기준가격_표준지요인_철도접근성', GetValue('기준가격_철도_표준지'))
    SetValue('Combo_기준가격_표준지요인_폐기물접근성', GetValue('기준가격_폐기물_표준지'))
    SetValue('Edit_기준가격_표준지요인_기타환경조건', GetValue('기준가격_기타환경_표준지'))
    SetValue('Combo_기준가격_표준지요인_용도지역', GetValue('기준가격_용도지역_표준지'))
    SetValue('Combo_기준가격_표준지요인_용도지구', GetValue('기준가격_용도지구_표준지'))
    SetValue('Combo_기준가격_표준지요인_도시계획', GetValue('기준가격_도시계획_표준지'))
    SetValue('Combo_기준가격_표준지요인_저촉률', GetValue('기준가격_기타제한_표준지'))
    SetValue('Combo_기준가격_표준지요인_고저', GetValue('기준가격_고저_표준지'))
    SetValue('Combo_기준가격_표준지요인_형상', GetValue('기준가격_형상_표준지'))
    SetValue('Combo_기준가격_표준지요인_방위', GetValue('기준가격_방위_표준지'))
    SetValue('Combo_기준가격_표준지요인_면적', GetValue('기준가격_면적_표준지'))
    SetValue('Combo_기준가격_표준지요인_토지이용상황', GetValue('기준가격_토지이용_표준지'))
    SetValue('Combo_기준가격_표준지요인_기타', GetValue('기준가격_기타_표준지'))
    SetValue('Combo_기준가격_표준지요인_장래의동향', GetValue('기준가격_장래_표준지'))
    SetValue('Edit_기준가격_표준지요인_기타조건', GetValue('기준가격_기타조건_표준지'))

    SetValue('Edit_기준가격_비교치_시점수정', GetValue('기준가격_시점수정_비교치'))
    SetValue('Edit_기준가격_비교치_소재지', GetValue('기준가격_소재지_비교치'))
    SetValue('Edit_기준가격_비교치_도로조건', GetValue('기준가격_도로접면_비교치'))
    SetValue('Edit_기준가격_비교치_도로거리', GetValue('기준가격_도로거리_비교치'))
    SetValue('Edit_기준가격_비교치_관공서접근성', GetValue('기준가격_관공서_비교치'))
    SetValue('Edit_기준가격_비교치_중심지역접근성', GetValue('기준가격_중심지역_비교치'))
    SetValue('Edit_기준가격_비교치_기타접근성', 1)
    SetValue('Edit_기준가격_비교치_철도접근성', GetValue('기준가격_철도_비교치'))
    SetValue('Edit_기준가격_비교치_폐기물접근성', GetValue('기준가격_폐기물_비교치'))
    SetValue('Edit_기준가격_비교치_기타환경조건', 1)
    SetValue('Edit_기준가격_비교치_용도지역', GetValue('기준가격_용도지역_비교치'))
    SetValue('Edit_기준가격_비교치_용도지구', GetValue('기준가격_용도지구_비교치'))
    SetValue('Edit_기준가격_비교치_도시계획', GetValue('기준가격_도시계획_비교치'))
    SetValue('Edit_기준가격_비교치_저촉률', GetValue('기준가격_기타제한_비교치'))
    SetValue('Edit_기준가격_비교치_고저', GetValue('기준가격_고저_비교치'))
    SetValue('Edit_기준가격_비교치_형상', GetValue('기준가격_형상_비교치'))
    SetValue('Edit_기준가격_비교치_방위', GetValue('기준가격_방위_비교치'))
    SetValue('Edit_기준가격_비교치_면적', GetValue('기준가격_면적_비교치'))
    SetValue('Edit_기준가격_비교치_토지이용상황', GetValue('기준가격_토지이용_비교치'))
    SetValue('Edit_기준가격_비교치_기타', 1)
    SetValue('Edit_기준가격_비교치_장래의동향', GetValue('기준가격_장래_비교치'))
    SetValue('Edit_기준가격_비교치_기타조건', GetValue('기준가격_기타조건_비교치'))


    MC_기준가격_경과일();


    MC_기준가격_요인합계();

}

function MC_비준가격_항목변경() {

    GetComponent('DBGrid_비준가격').GetCurSel('비준가격_RowPosition');


    GetComponent('DBGrid_비준가격').GetRow(-1, [
        {key: '비준가격_일단지구분', value: 'POT_GU'},
        {key: '비준가격_사례번호', value: 'EX_NO'},
        {key: '비준가격_사례가격', value: 'STD_ANNO_AMT'},
        {key: '비준가격_시점수정_본건', value: 'EDIT_M'},
        {key: '비준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '비준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '비준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '비준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '비준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '비준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '비준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '비준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '비준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '비준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '비준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '비준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '비준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '비준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '비준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '비준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '비준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '비준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '비준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '비준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '비준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '비준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '비준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '비준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '비준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '비준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '비준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '비준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '비준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '비준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '비준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '비준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '비준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '비준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '비준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '비준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '비준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '비준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '비준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '비준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '비준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '비준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '비준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '비준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '비준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '비준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '비준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '비준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '비준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '비준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '비준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '비준가격_기타_본건', value: 'L_ETC_M'},
        {key: '비준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '비준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '비준가격_장래_본건', value: 'E_TREND_M'},
        {key: '비준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '비준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '비준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '비준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '비준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '비준가격_감가율', value: 'DEPRE_RATE'},
        {key: '비준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '비준가격_산정단가', value: 'APAS_DAN'},
        {key: '비준가격_적용단가', value: 'APPL_DAN'},
        {key: '비준가격_소재지_본건', value: 'JUSO_M'},
        {key: '비준가격_소재지_사례', value: 'JUSO_S'},
        {key: '비준가격_조사시점', value: 'SURVEY_TIME'},
        {key: '비준가격_시점수정_사례', value: 'EDIT_S'},
        {key: '비준가격_시점수정_비교치', value: 'EDIT_C'},
        {key: '비준가격_시점수정_본건_날짜', value: 'EDIT_M_DATE'},
        {key: '비준가격_시점수정_사례_날짜', value: 'EDIT_S_DATE'},
        {key: '비준가격_소재지_비교치', value: 'JUSO_C'}
    ]);


    SetValue('Edit_비준가격_본건요인_시점수정', GetValue('비준가격_시점수정_본건'))
    SetValue('Edit_비준가격_본건요인_시점수정_날짜', GetValue('비준가격_시점수정_본건_날짜'))
    SetValue('Edit_비준가격_본건요인_소재지', GetValue('비준가격_소재지_본건'))
    SetValue('Combo_비준가격_본건요인_도로조건', GetValue('비준가격_도로접면_본건'))
    SetValue('Combo_비준가격_본건요인_도로거리', GetValue('비준가격_도로거리_본건'))
    SetValue('Combo_비준가격_본건요인_관공서접근성', GetValue('비준가격_관공서_본건'))
    SetValue('Combo_비준가격_본건요인_중심지역접근성', GetValue('비준가격_중심지역_본건'))
    SetValue('Edit_비준가격_본건요인_기타접근성', GetValue('비준가격_기타접근성_본건'))
    SetValue('Combo_비준가격_본건요인_철도접근성', GetValue('비준가격_철도_본건'))
    SetValue('Combo_비준가격_본건요인_폐기물접근성', GetValue('비준가격_폐기물_본건'))
    SetValue('Edit_비준가격_본건요인_기타환경조건', GetValue('비준가격_기타환경_본건'))
    SetValue('Combo_비준가격_본건요인_용도지역', GetValue('비준가격_용도지역_본건'))
    SetValue('Combo_비준가격_본건요인_용도지구', GetValue('비준가격_용도지구_본건'))
    SetValue('Combo_비준가격_본건요인_도시계획', GetValue('비준가격_도시계획_본건'))
    SetValue('Combo_비준가격_본건요인_저촉률', GetValue('비준가격_기타제한_본건'))
    SetValue('Combo_비준가격_본건요인_고저', GetValue('비준가격_고저_본건'))
    SetValue('Combo_비준가격_본건요인_형상', GetValue('비준가격_형상_본건'))
    SetValue('Combo_비준가격_본건요인_방위', GetValue('비준가격_방위_본건'))
    SetValue('Combo_비준가격_본건요인_면적', GetValue('비준가격_면적_본건'))
    SetValue('Combo_비준가격_본건요인_토지이용상황', GetValue('비준가격_토지이용_본건'))
    SetValue('Combo_비준가격_본건요인_기타', GetValue('비준가격_기타_본건'))
    SetValue('Combo_비준가격_본건요인_장래의동향', GetValue('비준가격_장래_본건'))
    SetValue('Edit_비준가격_본건요인_기타조건', GetValue('비준가격_기타조건_본건'))

    SetValue('Edit_비준가격_표준지요인_가격사례', GetValue('비준가격_사례가격'))
    SetValue('Edit_비준가격_표준지요인_시점수정', GetValue('비준가격_시점수정_사례'))
    SetValue('Edit_비준가격_표준지요인_시점수정_날짜', GetValue('비준가격_시점수정_사례_날짜'))
    SetValue('Edit_비준가격_표준지요인_소재지', GetValue('비준가격_소재지_사례'))
    SetValue('Combo_비준가격_표준지요인_도로조건', GetValue('비준가격_도로접면_표준지'))
    SetValue('Combo_비준가격_표준지요인_도로거리', GetValue('비준가격_도로거리_표준지'))
    SetValue('Combo_비준가격_표준지요인_관공서접근성', GetValue('비준가격_관공서_표준지'))
    SetValue('Combo_비준가격_표준지요인_중심지역접근성', GetValue('비준가격_중심지역_표준지'))
    SetValue('Edit_비준가격_표준지요인_기타접근성', GetValue('비준가격_기타접근성_표준지'))
    SetValue('Combo_비준가격_표준지요인_철도접근성', GetValue('비준가격_철도_표준지'))
    SetValue('Combo_비준가격_표준지요인_폐기물접근성', GetValue('비준가격_폐기물_표준지'))
    SetValue('Edit_비준가격_표준지요인_기타환경조건', GetValue('비준가격_기타환경_표준지'))
    SetValue('Combo_비준가격_표준지요인_용도지역', GetValue('비준가격_용도지역_표준지'))
    SetValue('Combo_비준가격_표준지요인_용도지구', GetValue('비준가격_용도지구_표준지'))
    SetValue('Combo_비준가격_표준지요인_도시계획', GetValue('비준가격_도시계획_표준지'))
    SetValue('Combo_비준가격_표준지요인_저촉률', GetValue('비준가격_기타제한_표준지'))
    SetValue('Combo_비준가격_표준지요인_고저', GetValue('비준가격_고저_표준지'))
    SetValue('Combo_비준가격_표준지요인_형상', GetValue('비준가격_형상_표준지'))
    SetValue('Combo_비준가격_표준지요인_방위', GetValue('비준가격_방위_표준지'))
    SetValue('Combo_비준가격_표준지요인_면적', GetValue('비준가격_면적_표준지'))
    SetValue('Combo_비준가격_표준지요인_토지이용상황', GetValue('비준가격_토지이용_표준지'))
    SetValue('Combo_비준가격_표준지요인_기타', GetValue('비준가격_기타_표준지'))
    SetValue('Combo_비준가격_표준지요인_장래의동향', GetValue('비준가격_장래_표준지'))
    SetValue('Edit_비준가격_표준지요인_기타조건', GetValue('비준가격_기타조건_표준지'))

    SetValue('Edit_비준가격_비교치_소재지', GetValue('비준가격_소재지_비교치'))
    SetValue('Edit_비준가격_비교치_시점수정', GetValue('비준가격_시점수정_비교치'))
    SetValue('Edit_비준가격_비교치_도로조건', GetValue('비준가격_도로접면_비교치'))
    SetValue('Edit_비준가격_비교치_도로거리', GetValue('비준가격_도로거리_비교치'))
    SetValue('Edit_비준가격_비교치_관공서접근성', GetValue('비준가격_관공서_비교치'))
    SetValue('Edit_비준가격_비교치_중심지역접근성', GetValue('비준가격_중심지역_비교치'))
    SetValue('Edit_비준가격_비교치_기타접근성', 1)
    SetValue('Edit_비준가격_비교치_철도접근성', GetValue('비준가격_철도_비교치'))
    SetValue('Edit_비준가격_비교치_폐기물접근성', GetValue('비준가격_폐기물_비교치'))
    SetValue('Edit_비준가격_비교치_기타환경조건', 1)
    SetValue('Edit_비준가격_비교치_용도지역', GetValue('비준가격_용도지역_비교치'))
    SetValue('Edit_비준가격_비교치_용도지구', GetValue('비준가격_용도지구_비교치'))
    SetValue('Edit_비준가격_비교치_도시계획', GetValue('비준가격_도시계획_비교치'))
    SetValue('Edit_비준가격_비교치_저촉률', 1)
    SetValue('Edit_비준가격_비교치_고저', GetValue('비준가격_고저_비교치'))
    SetValue('Edit_비준가격_비교치_형상', GetValue('비준가격_형상_비교치'))
    SetValue('Edit_비준가격_비교치_방위', GetValue('비준가격_방위_비교치'))
    SetValue('Edit_비준가격_비교치_면적', GetValue('비준가격_면적_비교치'))
    SetValue('Edit_비준가격_비교치_토지이용상황', GetValue('비준가격_토지이용_비교치'))
    SetValue('Edit_비준가격_비교치_기타', 1)
    SetValue('Edit_비준가격_비교치_장래의동향', GetValue('비준가격_장래_비교치'))
    SetValue('Edit_비준가격_비교치_기타조건', GetValue('비준가격_기타조건_비교치'))


    MC_비준가격_경과일();


    MC_비준가격_요인합계();

}

function MC_배당표_배당금_예상낙찰가() {

}

function MC_배당표_배당금_공통() {

    GetComponent('DBGrid_배당금_계산M').GetRow(GetNumber('i'), [
        {key: '배당표_배당금계산_순번', value: 'LN_SEQ'}
    ]);


    for (SetValue('j', 0); GetValue('j') < GetNumber('배당표_배당금계산TMP_RowCount'); SetValue('j', GetValue('j') + 1)) {
        MC_배당표_배당금_공통_Loop();
    }

}

function MC_배당표_배당금건물_공통() {

    GetComponent('DBGrid_배당금건물_계산M').GetRow(GetNumber('i'), [
        {key: '배당표_배당금계산건물_순번', value: 'REGI_GU'}
    ]);


    for (SetValue('j', 0); GetValue('j') < GetNumber('배당표_배당금계산TMP_RowCount'); SetValue('j', GetValue('j') + 1)) {
        MC_배당표_배당금건물_공통_Loop();
    }

}

function MC_공통보고서_조회() {

    RunQuery('Q_공통보고서_최고최저', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_보정표', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_당사설정액', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_초과부족설정액', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_건물', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_토지', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_최고최저JB', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_보정표JB', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_당사설정액JB', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_초과부족설정액JB', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_건물JB', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_토지JB', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    SetValue('00_NUMBER', StrToNum(Left(GetValue('결재진행현황'), 1)))

    if (GetValue('00_NUMBER') == 2) {

        GetZoonData('Q_공통보고서_최고최저').GetRow(0, [
            {key: 'Edit_공통보고서_본사_최저가', value: 'MIN_AMT'},
            {key: 'Edit_공통보고서_본사_최고가', value: 'MAX_AMT'}
        ]);


        GetZoonData('Q_공통보고서_보정표').GetRow(0, [
            {key: 'Edit_공통보고서_본사_예상낙찰가율', value: '적용할낙찰가율'},
            {key: 'Edit_공통보고서_본사_예상낙찰가', value: '예상낙찰가'}
        ]);


        GetZoonData('Q_공통보고서_당사설정액').GetRow(0, [
            {key: 'Edit_공통보고서_본사_당사설정액', value: '채권금액'}
        ]);


        GetZoonData('Q_공통보고서_초과부족설정액').GetRow(0, [
            {key: 'Edit_공통보고서_본사_초과부족설정분', value: '초과_부족설정액'}
        ]);


        GetZoonData('Q_공통보고서_토지').GetRow(0, [
            {key: 'Edit_공통보고서_본사_평가가격', value: '최종평가_금액'}
        ]);


        GetZoonData('Q_공통보고서_건물').GetRow(0, [
            {key: 'Edit_공통보고서_본사_평가가격_건물', value: '최종평가_금액'}
        ]);


        GetZoonData('Q_공통보고서_최고최저JB').GetRow(0, [
            {key: 'Edit_공통보고서_지점_최저가', value: 'MIN_AMT'},
            {key: 'Edit_공통보고서_지점_최고가', value: 'MAX_AMT'}
        ]);


        GetZoonData('Q_공통보고서_보정표JB').GetRow(0, [
            {key: 'Edit_공통보고서_지점_예상낙찰가', value: '예상낙찰가'},
            {key: 'Edit_공통보고서_지점_예상낙찰가율', value: '적용할낙찰가율'}
        ]);


        GetZoonData('Q_공통보고서_당사설정액JB').GetRow(0, [
            {key: 'Edit_공통보고서_지점_당사설정액', value: '채권금액'}
        ]);


        GetZoonData('Q_공통보고서_초과부족설정액JB').GetRow(0, [
            {key: 'Edit_공통보고서_지점_초과부족설정분', value: '초과_부족설정액'}
        ]);


        GetZoonData('Q_공통보고서_토지JB').GetRow(0, [
            {key: 'Edit_공통보고서_지점_평가가격', value: '최종평가_금액'}
        ]);


        GetZoonData('Q_공통보고서_건물JB').GetRow(0, [
            {key: 'Edit_공통보고서_지점_평가가격_건물', value: '최종평가_금액'}
        ]);

    }

    if (GetValue('00_NUMBER') != 2) {

        GetZoonData('Q_공통보고서_최고최저').GetRow(0, [
            {key: 'Edit_공통보고서_지점_최저가', value: 'MIN_AMT'},
            {key: 'Edit_공통보고서_지점_최고가', value: 'MAX_AMT'}
        ]);


        GetZoonData('Q_공통보고서_보정표').GetRow(0, [
            {key: 'Edit_공통보고서_지점_예상낙찰가율', value: '적용할낙찰가율'},
            {key: 'Edit_공통보고서_지점_예상낙찰가', value: '예상낙찰가'}
        ]);


        GetZoonData('Q_공통보고서_당사설정액').GetRow(0, [
            {key: 'Edit_공통보고서_지점_당사설정액', value: '채권금액'}
        ]);


        GetZoonData('Q_공통보고서_초과부족설정액').GetRow(0, [
            {key: 'Edit_공통보고서_지점_초과부족설정분', value: '초과_부족설정액'}
        ]);


        GetZoonData('Q_공통보고서_토지').GetRow(0, [
            {key: 'Edit_공통보고서_지점_평가가격', value: '최종평가_금액'}
        ]);


        GetZoonData('Q_공통보고서_건물').GetRow(0, [
            {key: 'Edit_공통보고서_지점_평가가격_건물', value: '최종평가_금액'}
        ]);

    }

}

function MC_저장_수익() {

    RunQuery('저장_수익_입지특성', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'LOC_ADJ_ROAD': GetValue('Combo_입지특성_도로조건'),
        'LOC_ROAD_SYSTEM': GetValue('Combo_입지특성_도로계통성'),
        'LOC_BUSI_ACCESS': GetValue('Combo_입지특성_상업시설접근성'),
        'LOC_PUB_ACCESS': GetValue('Combo_입지특성_공공시설접근성'),
        'LOC_HATE_FACILITY_YN': GetValue('Edit_입지특성_주요혐오시설'),
        'LOC_DEVELOP': GetValue('Edit_입지특성_인근개발계획'),
        'MARKETABLE_PRICE': GetValue('Combo_입지특성_가격동향'),
    }, 'POST');


    RunQuery('저장_수익_수익가격', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'EDIT_SURVEY_TIME': GetValue('Edit_수익_수익가격_임대료조사시점'),
        'EDIT_GO_RATE': GetValue('Edit_수익_수익가격_지가상승률'),
        'PGI_RENT_SEC_AMT': GetValue('Edit_수익_수익가격_보증금'),
        'PGI_RENT_MOM_AMT': GetValue('Edit_수익_수익가격_월임료'),
        'PGI_RENT_APPL_RATE': GetValue('Edit_수익_수익가격_운용이율'),
        'PGI_RENT_YEAR_AMT': GetValue('Edit_수익_수익가격_연간임대수익'),
        'PGI_ETC_AMT': GetValue('Edit_수익_수익가격_기타수익'),
        'PGI_EARN_AMT': GetValue('Edit_수익_수익가격_가능총수익합계'),
        'EGI_EMTY_RATE': GetValue('Edit_수익_수익가격_공실률'),
        'EGI_EARN_AMT': GetValue('Edit_수익_수익가격_유효총수익'),
        'OE_EXPN_RATE': GetValue('Edit_수익_수익가격_운영경비비율'),
        'OE_EXPN_AMT': GetValue('Edit_수익_수익가격_운영경비'),
        'NOI_AMT': GetValue('Edit_수익_수익가격_순영업소득'),
        'BACK_RATE': GetValue('Edit_수익_수익가격_환원이율'),
        'EARN_AMT': GetValue('Edit_수익_평가액_수익가격'),
    }, 'POST');


    RunQuery('저장_수익_평가액', {
        'YYYY': GetValue('년도'),
        'SEQ': GetValue('감정순번'),
        'EARN_AMT': GetValue('Edit_수익_평가액_수익가격'),
        'APPL_AMT': GetValue('Edit_수익_평가액_결정가격'),
        'APPL_EARN_RATE': GetValue('Edit_수익_평가액_격차율'),
        'INT_REP_SIZE': GetValue('Edit_수익_평가액_보수평형'),
        'INT_REP_SIZE_PY': GetValue('Edit_수익_평가액_보수평형_평'),
        'INT_REP_AMT': GetValue('Edit_수익_평가액_금액'),
        'INCREASE_AMT': GetValue('Edit_수익_평가액_평가가격'),
        'INT_REP_DAN': GetValue('Edit_수익_평가액_보수단가'),
        'INC_REP_DAN_CODE': GetValue('Combo_평가_인테리어단가'),
    }, 'POST');

}

function MC_수익_조회() {

    RunQuery('Q_수익_입지특성', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_수익_수익가격', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_수익_평가액', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    GetZoonData('Q_수익_입지특성').GetRow(0, [
        {key: 'Combo_입지특성_도로조건', value: 'LOC_ADJ_ROAD'},
        {key: 'Combo_입지특성_도로계통성', value: 'LOC_ROAD_SYSTEM'},
        {key: 'Combo_입지특성_상업시설접근성', value: 'LOC_BUSI_ACCESS'},
        {key: 'Combo_입지특성_공공시설접근성', value: 'LOC_PUB_ACCESS'},
        {key: 'Edit_입지특성_주요혐오시설', value: 'LOC_HATE_FACILITY_YN'},
        {key: 'Edit_입지특성_인근개발계획', value: 'LOC_DEVELOP'},
        {key: 'Combo_입지특성_가격동향', value: 'MARKETABLE_PRICE'}
    ]);


    GetZoonData('Q_수익_수익가격').GetRow(0, [
        {key: 'Edit_수익_수익가격_임대료조사시점', value: 'EDIT_SURVEY_TIME'},
        {key: 'Edit_수익_수익가격_지가상승률', value: 'EDIT_GO_RATE'},
        {key: 'Edit_수익_수익가격_보증금', value: 'PGI_RENT_SEC_AMT'},
        {key: 'Edit_수익_수익가격_월임료', value: 'PGI_RENT_MOM_AMT'},
        {key: 'Edit_수익_수익가격_운용이율', value: 'PGI_RENT_APPL_RATE'},
        {key: 'Edit_수익_수익가격_연간임대수익', value: 'PGI_RENT_YEAR_AMT'},
        {key: 'Edit_수익_수익가격_기타수익', value: 'PGI_ETC_AMT'},
        {key: 'Edit_수익_수익가격_가능총수익합계', value: 'PGI_EARN_AMT'},
        {key: 'Edit_수익_수익가격_공실률', value: 'EGI_EMTY_RATE'},
        {key: 'Edit_수익_수익가격_유효총수익', value: 'EGI_EARN_AMT'},
        {key: 'Edit_수익_수익가격_운영경비비율', value: 'OE_EXPN_RATE'},
        {key: 'Edit_수익_수익가격_운영경비', value: 'OE_EXPN_AMT'},
        {key: 'Edit_수익_수익가격_순영업소득', value: 'NOI_AMT'},
        {key: 'Edit_수익_수익가격_환원이율', value: 'BACK_RATE'},
        {key: 'Edit_수익_수익가격_수익가격', value: 'EARN_AMT'}
    ]);


    GetZoonData('Q_수익_평가액').GetRow(0, [
        {key: 'Edit_수익_평가액_수익가격', value: 'EARN_AMT'},
        {key: 'Edit_수익_평가액_결정가격', value: 'APPL_AMT'},
        {key: 'Edit_수익_평가액_격차율', value: 'APPL_EARN_RATE'},
        {key: 'Edit_수익_평가액_보수평형', value: 'INT_REP_SIZE'},
        {key: 'Edit_수익_평가액_보수평형_평', value: 'INT_REP_SIZE_PY'},
        {key: 'Edit_수익_평가액_보수단가', value: 'INT_REP_DAN'},
        {key: 'Edit_수익_평가액_금액', value: 'INT_REP_AMT'},
        {key: 'Edit_수익_평가액_평가가격', value: 'INCREASE_AMT'},
        {key: 'Combo_평가_인테리어단가', value: 'INC_REP_DAN_CODE'}
    ]);

}

function MC_수익_계산() {

    GetZoonData('Q_00_인테리어비용').FindIndex('00_RowIndex', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_평가_인테리어단가'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_인테리어비용').GetRow(GetValue('00_RowIndex'), [
        {key: 'Edit_수익_평가액_보수단가', value: 'AMT'},
        {key: '01_TNUM', value: 'RATE'}
    ]);


    GetComponent('DBGrid_건물의표시').GetRows("", [
        {key: '건물의표시_면적_Arr', value: 'CB_SIZE_PY'}
    ]);


    SetValue('건물의표시_면적_평', Sum('건물의표시_면적_Arr'))
    SetValue('건물의표시_면적', GetValue('건물의표시_면적_평') * 3.3058)
    SetValue('Edit_수익_평가액_보수평형', Round(GetValue('건물의표시_면적') * (GetValue('01_TNUM') / 100), 2))
    SetValue('Edit_수익_평가액_보수평형_평', Round(GetValue('건물의표시_면적_평') * (GetValue('01_TNUM') / 100), 2))


    // 연간임대수익
    SetValue('Edit_수익_수익가격_연간임대수익', (StrToNum(GetValue('Edit_수익_수익가격_보증금')) * (StrToNum(GetValue('Edit_수익_수익가격_운용이율')) / 100)) + (StrToNum(GetValue('Edit_수익_수익가격_월임료')) * 12))

// 가능총수익합계
    SetValue('Edit_수익_수익가격_가능총수익합계', GetNumber('Edit_수익_수익가격_연간임대수익') + GetNumber('Edit_수익_수익가격_기타수익'))

// 유효총수익
    SetValue('Edit_수익_수익가격_유효총수익', GetNumber('Edit_수익_수익가격_가능총수익합계') * (1 - (GetNumber('Edit_수익_수익가격_공실률') / 100)))

// 운영경비
    SetValue('Edit_수익_수익가격_운영경비', GetNumber('Edit_수익_수익가격_유효총수익') * (GetNumber('Edit_수익_수익가격_운영경비비율') / 100))

// 순영업소득
    SetValue('Edit_수익_수익가격_순영업소득', GetNumber('Edit_수익_수익가격_유효총수익') - GetNumber('Edit_수익_수익가격_운영경비'))

// 수익가격
    SetValue('Edit_수익_수익가격_수익가격', GetNumber('Edit_수익_수익가격_순영업소득') / (GetNumber('Edit_수익_수익가격_환원이율') / 100))
    SetValue('Edit_수익_평가액_수익가격', GetNumber('Edit_수익_수익가격_순영업소득') / (GetNumber('Edit_수익_수익가격_환원이율') / 100))

// 인테리어금액
    SetValue('Edit_수익_평가액_금액', GetNumber('Edit_수익_평가액_보수평형_평') * GetNumber('Edit_수익_평가액_보수단가'))

// 결정가격과 수익가격 격차율
    SetValue('Edit_수익_평가액_격차율', (GetNumber('Edit_수익_평가액_결정가격') / GetNumber('Edit_수익_수익가격_수익가격')) * 100)

// 평가가격
    SetValue('Edit_수익_평가액_평가가격', GetNumber('Edit_수익_평가액_결정가격') + GetNumber('Edit_수익_평가액_금액'))

}

function MC_비준가격_경과일() {

    SetValue('Edit_비준가격_표준지요인_시점수정_날짜_경과일', "")
    SetValue('비준가격_시점수정_사례_날짜', GetValue('Edit_비준가격_표준지요인_시점수정_날짜'))
    SetValue('감정일자', GetValue('MkEdit_감정일'))


    if (isEmpty((GetValue('비준가격_시점수정_사례_날짜')))) {
        return false;
    }


    RunQuery('Q_경과일자', {
        '감정일자': GetValue('감정일자'),
        '비준가격_시점수정_사례_날짜': GetValue('비준가격_시점수정_사례_날짜')
    }, 'GET');


    GetZoonData('Q_경과일자').GetRow(0, [
        {key: 'Edit_비준가격_표준지요인_시점수정_날짜_경과일', value: 'ELAP_YYMM'}
    ]);

}

function MC_배당표_배당금_공통_Loop() {

    SetValue('배당표_배당금계산_배당표구분', "2")
    SetValue('배당표_배당금계산_배당순위', GetArray('배당표_배당금계산_배당순위_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_표시순위', GetArray('배당표_배당금계산_표시순위_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_발생일자', GetArray('배당표_배당금계산_발생일자_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_당사설정', GetArray('배당표_배당금계산_당사설정_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_권리자', GetArray('배당표_배당금계산_권리자_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_권리의내용', GetArray('배당표_배당금계산_권리의내용_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_말소여부', GetArray('배당표_배당금계산_말소여부_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_단독담보', GetArray('배당표_배당금계산_단독담보_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_단독담보_ORG', GetArray('배당표_배당금계산_단독담보_ORG_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_공동담보', GetArray('배당표_배당금계산_공동담보_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_공동담보_ORG', GetArray('배당표_배당금계산_공동담보_ORG_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_배당순위_Proc', GetArray('배당표_배당금계산_배당순위_Proc_Arr', GetValue('j')))


    GetZoonData('Q_배당표_배당금_계산D').AddRow(0, [
        GetValue('년도'),

        GetValue('감정순번'),

        GetValue('배당표_배당금계산_배당표구분'),

        GetValue('배당표_배당금계산_순번'),

        GetValue('배당표_배당금계산_배당순위'),

        GetValue('배당표_배당금계산_표시순위'),

        GetValue('배당표_배당금계산_발생일자'),

        GetValue('배당표_배당금계산_권리자'),

        GetValue('배당표_배당금계산_권리의내용'),

        GetValue('배당표_배당금계산_말소여부'),

        GetValue('배당표_배당금계산_단독담보'),

        GetValue('배당표_배당금계산_공동담보'),

        GetValue('배당표_배당금계산_Enable'),

        GetValue('배당표_배당금계산_단독담보_ORG'),

        GetValue('배당표_배당금계산_공동담보_ORG'),

        GetValue('배당표_배당금계산_배당순위_Proc'),

        GetValue('배당표_배당금계산_당사설정'),

    ]);

}

function MC_배당표_배당금건물_공통_Loop() {

    SetValue('배당표_배당금계산_배당표구분', "2")
    SetValue('배당표_배당금계산_배당순위', GetArray('배당표_배당금계산_배당순위_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_표시순위', GetArray('배당표_배당금계산_표시순위_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_발생일자', GetArray('배당표_배당금계산_발생일자_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_당사설정', GetArray('배당표_배당금계산_당사설정_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_권리자', GetArray('배당표_배당금계산_권리자_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_권리의내용', GetArray('배당표_배당금계산_권리의내용_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_말소여부', GetArray('배당표_배당금계산_말소여부_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_단독담보', GetArray('배당표_배당금계산_단독담보_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_단독담보_ORG', GetArray('배당표_배당금계산_단독담보_ORG_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_공동담보', GetArray('배당표_배당금계산_공동담보_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_공동담보_ORG', GetArray('배당표_배당금계산_공동담보_ORG_Arr', GetValue('j')))
    SetValue('배당표_배당금계산_배당순위_Proc', GetArray('배당표_배당금계산_배당순위_Proc_Arr', GetValue('j')))


    GetZoonData('Q_배당표_배당금건물_계산D').AddRow(0, [
        GetValue('년도'),

        GetValue('감정순번'),

        GetValue('배당표_배당금계산_배당표구분'),

        GetValue('배당표_배당금계산_순번'),

        GetValue('배당표_배당금계산_배당순위'),

        GetValue('배당표_배당금계산_표시순위'),

        GetValue('배당표_배당금계산_발생일자'),

        GetValue('배당표_배당금계산_권리자'),

        GetValue('배당표_배당금계산_권리의내용'),

        GetValue('배당표_배당금계산_말소여부'),

        GetValue('배당표_배당금계산_단독담보'),

        GetValue('배당표_배당금계산_공동담보'),

        GetValue('배당표_배당금계산_Enable'),

        GetValue('배당표_배당금계산_단독담보_ORG'),

        GetValue('배당표_배당금계산_공동담보_ORG'),

        GetValue('배당표_배당금계산_배당순위_Proc'),

        GetValue('배당표_배당금계산_당사설정'),

    ]);

}

function MC_저장_ValidationCheck_건물의표시() {

    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    /*
if (isEmpty(GetArray('저장_건물의표시_건물의면적',GetValue('i')) <= 0 )) {
		SetValue('저장_Error_Message', "건물의표시_건물의면적을 입력하여 주십시오.")

}


if (isEmpty(GetArray('저장_건물의표시_주용도',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "건물의표시_주용도를 선택하여 주십시오.")

}


if (isEmpty(GetArray('저장_건물의표시_층별',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "건물의표시_층별을 입력하여 주십시오.")

}


if (isEmpty(GetArray('저장_건물의표시_지붕',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "건물의표시_지붕을 선택하여 주십시오.")

}


if (isEmpty(GetArray('저장_건물의표시_구조',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "건물의표시_구조를 선택하여 주십시오.")

}
*/

    if (isEmpty(GetArray('저장_건물의표시_건축일자', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물의표시_건축년월일을 입력하여 주십시오.")

    }
    /*

if (isEmpty(GetArray('저장_건물의표시_지번',GetValue('i'))   )) {
		SetValue('저장_Error_Message', "건물의표시_소재지번을 입력하여 주십시오.")

}
*/

    if (isEmpty(GetArray('저장_건물의표시_등기구분', GetValue('i')))) {
        SetValue('저장_Error_Message', "건물의표시_등기구분을 선택하여 주십시오.")

    }

}

function MC_저장_ValidationCheck_담보제공비율_건물() {

    if (isNotEmpty((GetValue('저장_Error_Message')))) {
        return false;
    }


    SetValue('담보제공비율_건물_등기구분', GetArray('저장_담보제공비율_건물_등기구분', GetValue('i')))
    SetValue('담보제공비율_건물_분자', GetArray('저장_담보제공비율_건물_분자', GetValue('i')))
    SetValue('담보제공비율_건물_분모', GetArray('저장_담보제공비율_건물_분모', GetValue('i')))
    SetValue('담보제공비율_건물_비율', GetArray('저장_담보제공비율_건물_비율', GetValue('i')))
    SetValue('담보제공비율_건물_전체면적', GetArray('저장_담보제공비율_건물_전체면적', GetValue('i')))
    SetValue('담보제공비율_건물_담보제공면적', GetArray('저장_담보제공비율_건물_담보제공면적', GetValue('i')))
    SetValue('담보제공비율_건물_사유', GetArray('저장_담보제공비율_건물_사유', GetValue('i')))

    /*

if (GetArray('저장_담보제공비율_건물_분모',GetValue('i')) <= 0 ) {
		SetValue('저장_Error_Message', "담보제공비율_분모를 입력하여 주십시오.")

}


if (GetArray('저장_담보제공비율_건물_분자',GetValue('i')) <= 0 ) {
		SetValue('저장_Error_Message', "담보제공비율_분자를 입력하여 주십시오.")

}
*/


    GetComponent('DBGrid_건물의표시').FindIndexArray('m_index', (row) => {

        if ((row['REGI_GU'] == GetValue('담보제공비율_건물_등기구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_건물의표시').SetRows(GetValue('m_index'), [
        {key: 'SEC_NUME', value: GetValue('담보제공비율_건물_분자')},
        {key: 'SEC_DENO', value: GetValue('담보제공비율_건물_분모')},
        {key: 'SEC_RATE', value: GetValue('담보제공비율_건물_비율')},
        {key: 'SEC_REGI_SIZE', value: GetValue('담보제공비율_건물_전체면적')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('담보제공비율_건물_담보제공면적')},
        {key: 'SEC_DESC', value: GetValue('담보제공비율_건물_사유')}
    ], true);

}

function MC_건물_그리드_인덱스_Sync() {

    GetComponent('DBGrid_건물의표시').SetCurSel(GetNumber('건물_그리드_IDX'));


    GetComponent('DBGrid_건물단가').SetCurSel(GetNumber('건물_그리드_IDX'));


    GetComponent('DBGrid_건물평가액_집계표').SetCurSel(GetNumber('건물_그리드_IDX'));


    GetComponent('DBGrid_담보_건물').SetCurSel(GetNumber('건물_그리드_IDX'));


    if (true) {
        return false;
    }


    GetComponent('DBGrid_배당금건물_계산M').SetCurSel(GetNumber('건물_그리드_IDX'));


    GetComponent('DBGrid_담보제공비율_건물').SetCurSel(GetNumber('건물_그리드_IDX'));

}

function MC_건물단가_참조값() {

    GetComponent('DBGrid_건물의표시').GetRow(-1, [
        {key: '건물의표시_등기구분', value: 'REGI_GU'},
        {key: '건물의표시_층별', value: 'CB_FLOOR'},
        {key: '건물의표시_건축년도', value: 'CB_DATE'}
    ]);


    SetValue('Edit_건물단가_잔가율_건축년도', Left(GetValue('건물의표시_건축년도'), 4))
    SetValue('Edit_건물단가_잔가율_경과년수', StrToNum(Left(GetValue('MkEdit_감정일'), 4)) - StrToNum(Left(GetValue('건물의표시_건축년도'), 4)))
    SetValue('Edit_건물단가_잔가율_잔가율', (GetValue('Edit_건물단가_잔가율_내용년수') - GetValue('Edit_건물단가_잔가율_경과년수')) / GetValue('Edit_건물단가_잔가율_내용년수'))

// 잔가율이 - 이면 0.02
    if (GetValue('Edit_건물단가_잔가율_잔가율') < 0) {
        SetValue('Edit_건물단가_잔가율_잔가율', 0.02)
    }

    SetValue('Edit_건물단가_부대설비_총보정단가', GetNumber('Edit_건물단가_부대설비_냉난방') + GetNumber('Edit_건물단가_부대설비_엘리베이터') + GetNumber('Edit_건물단가_부대설비_위생설비') + GetNumber('Edit_건물단가_부대설비_화재탐지') + GetNumber('Edit_건물단가_부대설비_기타'))
    SetValue('Edit_건물단가_건물단가_산정단가', (GetNumber('Edit_건물단가_표준단가_적용단가') * GetNumber('Edit_건물단가_총단가조정지수') + GetNumber('Edit_건물단가_부대설비_총보정단가')) * GetNumber('Edit_건물단가_잔가율_잔가율'))
    SetValue('Edit_건물단가_건물단가_적용단가', Round(GetNumber('Edit_건물단가_건물단가_산정단가') / 1000, 3))
    SetValue('Edit_건물단가_건물단가_적용단가', GetNumber('Edit_건물단가_건물단가_적용단가') * 1000)


    GetComponent('DBGrid_건물단가').SetRow(-1, [
        {key: 'REGI_GU', value: GetValue('건물의표시_등기구분')},
        {key: 'CB_FLOOR', value: GetValue('건물의표시_층별')},
        {key: 'CB_YYYY', value: GetValue('건물의표시_건축년도')},
        {key: 'CB_BUILD_CODE', value: GetValue('Combo_건물단가_표준단가_급수')},
        {key: 'CB_BUILD_DAN', value: GetValue('Edit_건물단가_표준단가_적용단가')},
        {key: 'DAN_REBUIL_YN', value: GetValue('Combo_건물단가_중개축여부_횟수')},
        {key: 'DAN_REBUIL_DAN', value: GetValue('Edit_건물단가_중개축여부_적용지수')},
        {key: 'DAN_MANAGE_YN', value: GetValue('Combo_건물단가_관리상태_상중하')},
        {key: 'DAN_MANAGE_DAN', value: GetValue('Edit_건물단가_관리상태_적용지수')},
        {key: 'DAN_REVISE_IDX', value: GetValue('Edit_건물단가_총단가조정지수')},
        {key: 'SUB_AIRCON_YN', value: GetValue('Combo_건물단가_부대설비_냉난방')},
        {key: 'SUB_ELEVAT_YN', value: GetValue('Combo_건물단가_부대설비_엘리베이터')},
        {key: 'SUB_SANITA_YN', value: GetValue('Combo_건물단가_부대설비_위생설비')},
        {key: 'SUB_HYDRAN_YN', value: GetValue('Combo_건물단가_부대설비_화재탐지')},
        {key: 'SUB_ETC_YN', value: GetValue('Combo_건물단가_부대설비_기타')},
        {key: 'SUB_AIRCON_DAN', value: GetValue('Edit_건물단가_부대설비_냉난방')},
        {key: 'SUB_ELEVAT_DAN', value: GetValue('Edit_건물단가_부대설비_엘리베이터')},
        {key: 'SUB_ETC_DAN', value: GetValue('Edit_건물단가_부대설비_기타')},
        {key: 'SUB_HYDRAN_DAN', value: GetValue('Edit_건물단가_부대설비_화재탐지')},
        {key: 'SUB_SANITA_DAN', value: GetValue('Edit_건물단가_부대설비_위생설비')},
        {key: 'SUB_REVISE_DAN', value: GetValue('Edit_건물단가_부대설비_총보정단가')},
        {key: 'CB_YYYY', value: GetValue('Edit_건물단가_잔가율_건축년도')},
        {key: 'ELAP_YEAR', value: GetValue('Edit_건물단가_잔가율_경과년수')},
        {key: 'NUM_YEAR', value: GetValue('Edit_건물단가_잔가율_내용년수')},
        {key: 'OF_JANGA_RATE', value: GetValue('Edit_건물단가_잔가율_잔가율')},
        {key: 'APAS_DAN', value: GetValue('Edit_건물단가_건물단가_산정단가')},
        {key: 'APPL_DAN', value: GetValue('Edit_건물단가_건물단가_적용단가')},
        {key: 'DAN_APPLY_IDX', value: GetValue('Edit_건물단가_적용보정률')},
        {key: 'DAN_APPLY_DESC', value: GetValue('Edit_건물단가_적용보정률_사유')}
    ], true);

}

function MC_건물단가_항목변경() {

    GetComponent('DBGrid_건물단가').GetCurSel('건물단가_RowPosition');


    GetComponent('DBGrid_건물단가').GetRow(GetNumber('건물단가_RowPosition'), [
        {key: '건물단가_표준단가_급수', value: 'CB_BUILD_CODE'},
        {key: '건물단가_표준단가_적용단가', value: 'CB_BUILD_DAN'},
        {key: '건물단가_증개축여부_횟수', value: 'DAN_REBUIL_YN'},
        {key: '건물단가_증개축여부_적용지수', value: 'DAN_REBUIL_DAN'},
        {key: '건물단가_관리상태_상중하', value: 'DAN_MANAGE_YN'},
        {key: '건물단가_관리상태_적용지수', value: 'DAN_MANAGE_DAN'},
        {key: '건물단가_총단가조정지수', value: 'DAN_REVISE_IDX'},
        {key: '건물단가_부대설비_냉난방', value: 'SUB_AIRCON_YN'},
        {key: '건물단가_부대설비_냉난방_적용단가', value: 'SUB_AIRCON_DAN'},
        {key: '건물단가_부대설비_엘리베이터', value: 'SUB_ELEVAT_YN'},
        {key: '건물단가_부대설비_엘리베이터_적용단가', value: 'SUB_ELEVAT_DAN'},
        {key: '건물단가_부대설비_위생설비', value: 'SUB_SANITA_YN'},
        {key: '건물단가_부대설비_위생설비_적용단가', value: 'SUB_SANITA_DAN'},
        {key: '건물단가_부대설비_화재탐지', value: 'SUB_HYDRAN_YN'},
        {key: '건물단가_부대설비_화재탐지_적용단가', value: 'SUB_HYDRAN_DAN'},
        {key: '건물단가_부대설비_기타', value: 'SUB_ETC_YN'},
        {key: '건물단가_부대설비_기타_적용단가', value: 'SUB_ETC_DAN'},
        {key: '건물단가_부대설비_총보정단가', value: 'SUB_REVISE_DAN'},
        {key: '건물단가_잔가율_건축년도', value: 'CB_YYYY'},
        {key: '건물단가_잔가율_경과년수', value: 'ELAP_YEAR'},
        {key: '건물단가_잔가율_내용년수', value: 'NUM_YEAR'},
        {key: '건물단가_잔가율_잔가율', value: 'OF_JANGA_RATE'},
        {key: '건물단가_건물단가_산정단가', value: 'APAS_DAN'},
        {key: '건물단가_건물단가_적용단가', value: 'APPL_DAN'},
        {key: '건물단가_적용보정률', value: 'DAN_APPLY_IDX'},
        {key: '건물단가_적용보정률_사유', value: 'DAN_APPLY_DESC'}
    ]);


    SetValue('건물단가_표준단가_용도', Left(GetValue('건물단가_표준단가_급수'), 2))
    SetValue('건물단가_표준단가_구조', Left(GetValue('건물단가_표준단가_급수'), 4))


    RunQuery('Q_코드_표준단가_구조', {
        '건물단가_표준단가_용도': GetValue('건물단가_표준단가_용도')
    }, 'GET');


    RunQuery('Q_코드_표준단가_급수', {
        '건물단가_표준단가_구조': GetValue('건물단가_표준단가_구조')
    }, 'GET');


    SetValue('Edit_건물단가_표준단가_적용단가', GetValue('건물단가_표준단가_적용단가'))
    SetValue('Edit_건물단가_부대설비_냉난방', GetValue('건물단가_부대설비_냉난방_적용단가'))
    SetValue('Edit_건물단가_부대설비_엘리베이터', GetValue('건물단가_부대설비_엘리베이터_적용단가'))
    SetValue('Edit_건물단가_부대설비_위생설비', GetValue('건물단가_부대설비_위생설비_적용단가'))
    SetValue('Edit_건물단가_부대설비_적용단가', GetValue('건물단가_부대설비_적용단가_적용단가'))
    SetValue('Edit_건물단가_부대설비_화재탐지', GetValue('건물단가_부대설비_화재탐지_적용단가'))
    SetValue('Edit_건물단가_부대설비_기타', GetValue('건물단가_부대설비_기타_적용단가'))
    SetValue('Edit_건물단가_부대설비_총보정단가', GetValue('건물단가_부대설비_총보정단가'))
    SetValue('Edit_건물단가_중개축여부_적용지수', GetValue('건물단가_증개축여부_적용지수'))
    SetValue('Edit_건물단가_관리상태_적용지수', GetValue('건물단가_관리상태_적용지수'))
    if (GetValue('건물단가_적용보정률') == 0) {
        SetValue('Edit_건물단가_적용보정률', 1, false)
    } else {

        SetValue('Edit_건물단가_적용보정률', GetValue('건물단가_적용보정률'), false)
    }
    SetValue('Edit_건물단가_적용보정률_사유', GetValue('건물단가_적용보정률_사유'))
    SetValue('Edit_건물단가_총단가조정지수', GetValue('건물단가_총단가조정지수'))
    SetValue('Edit_건물단가_잔가율_건축년도', GetValue('건물단가_잔가율_건축년도'))
    SetValue('Edit_건물단가_잔가율_경과년수', GetValue('건물단가_잔가율_경과년수'))
    SetValue('Edit_건물단가_잔가율_내용년수', GetValue('건물단가_잔가율_내용년수'))
    SetValue('Edit_건물단가_잔가율_잔가율', GetValue('건물단가_잔가율_잔가율'))
    SetValue('Edit_건물단가_건물단가_산정단가', GetValue('건물단가_건물단가_산정단가'))
    SetValue('Edit_건물단가_건물단가_적용단가', GetValue('건물단가_건물단가_적용단가'))

    SetValue('Combo_건물단가_표준단가_용도', GetValue('건물단가_표준단가_용도'))
    SetValue('Combo_건물단가_표준단가_구조', GetValue('건물단가_표준단가_구조'))
    SetValue('Combo_건물단가_표준단가_급수', GetValue('건물단가_표준단가_급수'))
    SetValue('Combo_건물단가_부대설비_냉난방', GetValue('건물단가_부대설비_냉난방'))
    SetValue('Combo_건물단가_부대설비_엘리베이터', GetValue('건물단가_부대설비_엘리베이터'))
    SetValue('Combo_건물단가_부대설비_위생설비', GetValue('건물단가_부대설비_위생설비'))
    SetValue('Combo_건물단가_부대설비_적용단가', GetValue('건물단가_부대설비_적용단가'))
    SetValue('Combo_건물단가_부대설비_화재탐지', GetValue('건물단가_부대설비_화재탐지'))
    SetValue('Combo_건물단가_부대설비_기타', GetValue('건물단가_부대설비_기타'))
    SetValue('Combo_건물단가_중개축여부_횟수', GetValue('건물단가_증개축여부_횟수'))
    SetValue('Combo_건물단가_관리상태_상중하', GetValue('건물단가_관리상태_상중하'))

    // TODO SetValue 순서 이슈로인해서 추가.
    SetValue('Edit_건물단가_적용보정률', GetValue('Edit_건물단가_적용보정률'))
}

function MC_건물배당금계산_SYNC() {

    GetComponent('DBGrid_배당금건물_계산D').GetRow(GetNumber('i'), [
        {key: '배당표_배당금계산건물_배당순위', value: 'RANK'},
        {key: '배당표_배당금계산건물_발생일자', value: 'RIGHT_DATE'},
        {key: '배당표_배당금계산건물_권리자', value: 'RIGHT_PERSON'},
        {key: '배당표_배당금계산건물_권리의내용', value: 'RIGHT_CODE'},
        {key: '배당표_배당금계산건물_말소여부', value: 'ERA_YN'},
        {key: '배당표_배당금계산건물_단독담보', value: 'CRED_SELF_AMT'},
        {key: '배당표_배당금계산건물_공동담보', value: 'CRED_COMB_AMT'},
        {key: '배당표_배당금계산건물_순번', value: 'LN_SEQ'},
        {key: '배당표_배당금계산건물_표시순위', value: 'DISP_RANK'},
        {key: '배당표_배당금계산건물_배당표구분', value: 'SHA_GU'},
        {key: '배당표_배당금계산건물_Enable', value: 'IS_ENABLE'},
        {key: '배당표_배당금계산건물_공동담보_ORG', value: 'CRED_COMB_AMT_ORG'},
        {key: '배당표_배당금계산건물_단독담보_ORG', value: 'CRED_SELF_AMT_ORG'},
        {key: '배당표_배당금계산건물_배당순위_Proc', value: 'PRO_RATE_CODE'},
        {key: '배당표_배당금계산건물_당사설정', value: 'HITE_YN'}
    ]);


    GetZoonData('Q_배당표_배당금건물_계산D').FindIndex('배당표_배당금계산건물_IDX', (row) => {

        if ((row['LN_SEQ'] == GetValue('배당표_배당금계산건물_순번')) && (row['RANK'] == GetValue('배당표_배당금계산건물_배당순위'))) {
            return true;
        }

        return false;
    });

    if (GetValue('배당표_배당금계산건물_IDX') < 0) {

        GetZoonData('Q_배당표_배당금건물_계산D').AddRow(0, [
            GetValue('년도'),

            GetValue('감정순번'),

            GetValue('배당표_배당금계산건물_배당표구분'),

            GetValue('배당표_배당금계산건물_순번'),

            GetValue('배당표_배당금계산건물_배당순위'),

            GetValue('배당표_배당금계산건물_표시순위'),

            GetValue('배당표_배당금계산건물_발생일자'),

            GetValue('배당표_배당금계산건물_권리자'),

            GetValue('배당표_배당금계산건물_권리의내용'),

            GetValue('배당표_배당금계산건물_말소여부'),

            GetValue('배당표_배당금계산건물_단독담보'),

            GetValue('배당표_배당금계산건물_공동담보'),

            GetValue('배당표_배당금계산건물_Enable'),

            GetValue('배당표_배당금계산건물_단독담보_ORG'),

            GetValue('배당표_배당금계산건물_공동담보_ORG'),

            GetValue('배당표_배당금계산건물_배당순위_Proc'),

            GetValue('배당표_배당금계산건물_당사설정'),

        ]);

    } else if (GetValue('배당표_배당금계산건물_IDX') >= 0) {

        GetZoonData('Q_배당표_배당금건물_계산D').SetRow(GetValue('배당표_배당금계산건물_IDX'), [
            {key: 'DISP_RANK', value: GetValue('배당표_배당금계산건물_표시순위')},
            {key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산건물_발생일자')},
            {key: 'RIGHT_PERSON', value: GetValue('배당표_배당금계산건물_권리자')},
            {key: 'RIGHT_CODE', value: GetValue('배당표_배당금계산건물_권리의내용')},
            {key: 'ERA_YN', value: GetValue('배당표_배당금계산건물_말소여부')},
            {key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산건물_단독담보')},
            {key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산건물_공동담보')},
            {key: 'IS_ENABLE', value: GetValue('배당표_배당금계산건물_Enable')},
            {key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산건물_공동담보_ORG')},
            {key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산건물_단독담보_ORG')},
            {key: 'PRO_RATE_CODE', value: GetValue('배당표_배당금계산건물_배당순위_Proc')},
            {key: 'HITE_YN', value: GetValue('배당표_배당금계산건물_당사설정')}
        ]);

    }


    if (true) {
        return false;
    }


    RunQuery('Q_배당표_배당금건물_계산D', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_건물배당금M_참조값() {

    GetComponent('DBGrid_건물의표시').GetCurSel('건물의표시_RowPosition');


    GetComponent('DBGrid_건물의표시').GetRow(GetNumber('건물의표시_RowPosition'), [
        {key: '건물의표시_등기구분', value: 'REGI_GU'},
        {key: '건물의표시_지번', value: 'LOT_NUM'},
        {key: '건물의표시_건축년도', value: 'CB_DATE'}
    ]);


    GetComponent('DBGrid_배당금건물_계산M').SetRow(GetValue('건물의표시_RowPosition'), [
        {key: 'REGI_GU', value: GetValue('건물의표시_등기구분')},
        {key: 'LOT_NUM', value: GetValue('건물의표시_지번')},
        {key: 'CB_DATE', value: GetValue('건물의표시_건축년도')}
    ], true);

}

function MC_건물의표시_자동연산() {

    SetValue('건물의표시_면적_평', GetValue('건물의표시_면적') * 0.3025)


    GetComponent('DBGrid_건물의표시').SetRow(-1, [
        {key: 'CB_SIZE_PY', value: GetValue('건물의표시_면적_평')}
    ]);

}

function MC_건물의표시_전체면적() {


    if (GetArray('건물의표시_등기구분_Arr', GetValue('i')) == "1") {
        SetValue('건물의표시_면적_1', GetValue('건물의표시_면적_1') + GetArray('건물의표시_면적_Arr', GetValue('i')))
    } else if (GetArray('건물의표시_등기구분_Arr', GetValue('i')) == "2") {
        SetValue('건물의표시_면적_2', GetValue('건물의표시_면적_2') + GetArray('건물의표시_면적_Arr', GetValue('i')))
    } else if (GetArray('건물의표시_등기구분_Arr', GetValue('i')) == "3") {
        SetValue('건물의표시_면적_3', GetValue('건물의표시_면적_3') + GetArray('건물의표시_면적_Arr', GetValue('i')))
    } else if (GetArray('건물의표시_등기구분_Arr', GetValue('i')) == "4") {
        SetValue('건물의표시_면적_4', GetValue('건물의표시_면적_4') + GetArray('건물의표시_면적_Arr', GetValue('i')))
    }

}

function MC_건물의표시_전체면적_수정() {

    GetComponent('DBGrid_담보제공비율_건물').GetRow(GetNumber('i'), [
        {key: '건물의표시_등기구분', value: 'REGI_GU'}
    ]);


    if (GetValue('건물의표시_등기구분') == "1") {
        SetValue('건물의표시_전체면적', GetValue('건물의표시_면적_1'))
    } else if (GetValue('건물의표시_등기구분') == "2") {
        SetValue('건물의표시_전체면적', GetValue('건물의표시_면적_2'))
    } else if (GetValue('건물의표시_등기구분') == "3") {
        SetValue('건물의표시_전체면적', GetValue('건물의표시_면적_3'))
    } else if (GetValue('건물의표시_등기구분') == "4") {
        SetValue('건물의표시_전체면적', GetValue('건물의표시_면적_4'))
    }


    GetComponent('DBGrid_담보제공비율_건물').SetRow(GetValue('i'), [
        {key: 'SEC_REGI_SIZE', value: GetValue('건물의표시_전체면적')},
        {key: 'SEC_DENO', value: GetValue('건물의표시_전체면적')}
    ]);


    GetComponent('DBGrid_담보제공비율_건물').GetRow(GetNumber('i'), [
        {key: '담보제공비율_건물_전체면적', value: 'SEC_REGI_SIZE'},
        {key: '담보제공비율_건물_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_건물_분모', value: 'SEC_DENO'},
        {key: '토지의표시_일단지구분', value: 'POT_GU'},
        {key: '담보제공비율_지번', value: 'LOT_NUM'}
    ]);


    SetValue('담보제공비율_비율', GetValue('담보제공비율_분자') / GetValue('담보제공비율_분모'))
    SetValue('담보제공비율_담보제공면적', GetValue('담보제공비율_전체면적') * GetValue('담보제공비율_비율'))


    GetComponent('DBGrid_담보제공비율_건물').SetRow(GetValue('i'), [
        {key: 'SEC_RATE', value: GetValue('담보제공비율_건물_비율')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('담보제공비율_건물_담보제공면적')}
    ], true);


    GetComponent('DBGrid_담보제공비율_건물').GetRow(GetNumber('i'), [
        {key: '담보제공비율_건물_전체면적', value: 'SEC_REGI_SIZE'},
        {key: '담보제공비율_건물_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_건물_분모', value: 'SEC_DENO'},
        {key: '담보제공비율_건물_등기구분', value: 'REGI_GU'}
    ]);


    SetValue('담보제공비율_건물_비율', GetValue('담보제공비율_건물_분자') / GetValue('담보제공비율_건물_분모'))
    SetValue('담보제공비율_건물_담보제공면적', GetValue('담보제공비율_건물_전체면적') * GetValue('담보제공비율_건물_비율'))


    GetComponent('DBGrid_담보_건물').SetRow(GetValue('i'), [
        {key: 'SEC_NUME', value: GetValue('담보제공비율_건물_분자')},
        {key: 'SEC_DENO', value: GetValue('담보제공비율_건물_분모')},
        {key: 'SEC_RATE', value: GetValue('담보제공비율_건물_비율')},
        {key: 'REGI_GU', value: GetValue('담보제공비율_건물_등기구분')}
    ], true);


    GetComponent('DBGrid_담보제공비율_건물').SetRow(GetValue('i'), [
        {key: 'SEC_RATE', value: GetValue('담보제공비율_건물_비율')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('담보제공비율_건물_담보제공면적')}
    ], true);

}

function MC_건물평가액_집계표() {

    GetComponent('DBGrid_건물의표시').GetRow(-1, [
        {key: '건물의표시_등기구분', value: 'REGI_GU'},
        {key: '건물의표시_층별', value: 'CB_FLOOR'},
        {key: '건물의표시_건축년도', value: 'CB_DATE'},
        {key: '건물의표시_면적', value: 'CB_SIZE'}
    ]);

    GetComponent('DBGrid_건물단가').GetRow(-1, [
        {key: '건물단가_건물단가_산정단가', value: 'APAS_DAN'},
        {key: '건물단가_건물단가_적용단가', value: 'APPL_DAN'},
        {key: '건물단가_표준단가_적용단가', value: 'CB_BUILD_DAN'},
        {key: '건물의표시_층별', value: 'CB_FLOOR'}
    ]);


    GetComponent('DBGrid_담보_건물').GetRow(-1, [
        {key: '담보제공비율_건물_비율', value: 'SEC_RATE'}
    ]);


    SetValue('건물평가액_집계표_평가가액', GetNumber('건물단가_건물단가_적용단가') * GetNumber('건물의표시_면적'))
    SetValue('담보_최종평가가액', GetNumber('건물평가액_집계표_평가가액') * (GetNumber('담보제공비율_건물_비율') / 100))

    if (GetValue('건물의표시_층별') < 0) {
        SetValue('건물단가_잔가율_잔가율', "0.80")
    } else {

        SetValue('건물단가_잔가율_잔가율', "1.00")
    }


    GetComponent('DBGrid_건물평가액_집계표').SetRow(-1, [
        {key: 'CB_FLOOR', value: GetValue('건물의표시_층별')},
        {key: 'APAS_DAN', value: GetValue('건물단가_건물단가_산정단가')},
        {key: 'APPL_DAN', value: GetValue('건물단가_건물단가_적용단가')},
        {key: 'CB_BUILD_DAN', value: GetValue('건물단가_표준단가_적용단가')},
        {key: 'OF_JANGA_RATE', value: GetValue('건물단가_잔가율_잔가율')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('건물의표시_면적')},
        {key: 'INC_AMT', value: GetValue('건물평가액_집계표_평가가액')},
        {key: 'REGI_GU', value: GetValue('건물의표시_등기구분')}
    ], true);

    GetComponent('DBGrid_담보_건물').SetRow(-1, [
        {key: 'INC_AMT', value: GetValue('건물평가액_집계표_평가가액')},
        {key: 'FNL_INC_AMT', value: GetValue('담보_최종평가가액')},
        {key: 'REGI_GU', value: GetValue('건물의표시_등기구분')}
    ], true);


    if (true) {
        return false;
    }


    GetComponent('DBGrid_담보제공비율_건물').GetRow(-1, [
        {key: '담보제공비율_건물_담보제공면적', value: 'SEC_OFFER_SIZE'},
        {key: '담보제공비율_건물_비율', value: 'SEC_RATE'}
    ]);

}

function MC_담보_건물_최종평가가액() {

    GetComponent('DBGrid_담보_건물').GetRow(GetNumber('i'), [
        {key: '담보_건물_평가가격', value: 'INC_AMT'},
        {key: '담보_건물_비율', value: 'SEC_RATE'}
    ]);


    SetValue('담보_건물_최종평가가액', GetValue('담보_건물_평가가격') * (GetValue('담보_건물_비율') / 100))


    GetComponent('DBGrid_담보_건물').SetRow(GetValue('i'), [
        {key: 'FNL_INC_AMT', value: GetValue('담보_건물_최종평가가액')}
    ], true);


    MC_보정표_감정가격산출내역_합계();

}

function MC_담보_참조값() {

    GetComponent('DBGrid_평가액').GetRow(GetNumber('i'), [
        {key: '평가액_평가가액', value: 'INC_AMT'}
    ]);


    GetComponent('DBGrid_담보').GetRow(GetNumber('i'), [
        {key: '평가액_비율', value: 'SEC_RATE'}
    ]);


    SetValue('평가액_최종평가가액', GetNumber('평가액_평가가액') * (GetNumber('평가액_비율') / 100))


    GetComponent('DBGrid_담보').SetRow(GetValue('i'), [
        {key: 'INC_AMT', value: GetNumber('평가액_평가가액')},
        {key: 'FNL_INC_AMT', value: GetNumber('평가액_최종평가가액')}
    ], true);

}

function MC_담보제공비율_건물_등기구분() {

    GetComponent('DBGrid_건물의표시').GetRow(GetNumber('i'), [
        {key: '건물의표시_등기구분', value: 'REGI_GU'},
        {key: '건물의표시_지번', value: 'LOT_NUM'}
    ]);


    if (FindIndexArray('건물의표시_등기구분_Arr', GetValue('건물의표시_등기구분')) < 0) {
        AddArray('건물의표시_등기구분_Arr', GetValue('건물의표시_등기구분'))
        AddArray('건물의표시_지번_Arr', GetValue('건물의표시_지번'))
    }

}

function MC_담보제공비율_건물_등기구분_AddRow() {

    SetValue('건물의표시_등기구분', GetArray('건물의표시_등기구분_Arr', GetValue('i')))
    SetValue('건물의표시_지번', GetArray('건물의표시_지번_Arr', GetValue('i')))


    GetComponent('DBGrid_건물의표시').FindIndexArray('m_index', (row) => {

        if ((row['REGI_GU'] == GetValue('건물의표시_등기구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_건물의표시').GetRows(GetValue('m_index'), [
        {key: '건물의표시_면적_Arr', value: 'CB_SIZE'}
    ]);


    SetValue('건물의표시_면적', Sum('건물의표시_면적_Arr'))


    GetComponent('DBGrid_담보제공비율_건물').AddRow({
        'REGI_GU': GetValue('건물의표시_등기구분'),
        'SEC_REGI_SIZE': GetValue('건물의표시_면적'),
        'SEC_DENO': GetValue('건물의표시_면적'),
        'SEC_NUME': GetValue('건물의표시_면적'),
        'SEC_OFFER_SIZE': GetValue('건물의표시_면적'),
        'SEC_RATE': 100,
        'LOT_NUM': GetValue('건물의표시_지번'),
    });

}

function MC_담보제공비율_건물_등기구분_DeleteRow() {

    GetComponent('DBGrid_담보제공비율_건물').DeleteRow(GetNumber('i'));

}

function MC_담보제공비율_건물_비율() {

    GetComponent('DBGrid_담보제공비율_건물').GetCurSel('담보제공비율_건물_RowPosition');


    GetComponent('DBGrid_담보제공비율_건물').GetRow(GetNumber('담보제공비율_건물_RowPosition'), [
        {key: '담보제공비율_건물_전체면적', value: 'SEC_REGI_SIZE'},
        {key: '담보제공비율_건물_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_건물_분모', value: 'SEC_DENO'},
        {key: '담보제공비율_건물_등기구분', value: 'REGI_GU'}
    ]);


    SetValue('담보제공비율_건물_비율', GetNumber('담보제공비율_건물_분자') / GetNumber('담보제공비율_건물_분모') * 100)
    SetValue('담보제공비율_건물_담보제공면적', GetNumber('담보제공비율_건물_전체면적') * (GetNumber('담보제공비율_건물_비율') / 100))

    if (GetNumber('담보제공비율_건물_비율') == 100) {
        SetValue('00_NUMBER', 0)
    } else {
        SetValue('00_NUMBER', 1)
    }


    GetComponent('DBGrid_담보제공비율_건물').SetRow(GetValue('담보제공비율_건물_RowPosition'), [
        {key: 'SEC_RATE', value: GetValue('담보제공비율_건물_비율')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('담보제공비율_건물_담보제공면적')},
        {key: 'SEC_DESC_ENABLE', value: GetValue('00_NUMBER')}
    ], true);


    GetComponent('DBGrid_담보제공비율_건물').GetRowCount('담보제공비율_건물_RowCount');

    for (let i=0; i < GetNumber('담보제공비율_건물_RowCount'); i++) {
        SetValue('i', i);
        MC_담보제공비율_건물_비율_Loop();
    }


    GetComponent('DBGrid_담보_건물').GetRowCount('담보_건물_RowCount');

    for (let i=0; i < GetNumber('담보_건물_RowCount'); i++) {
        SetValue('i', i);
        MC_담보_건물_최종평가가액();
    }


    if (true) {
        return false;
    }


    MC_건물단가_참조값();


    if (true) {
        return false;
    }


}

function MC_담보제공비율_건물_비율_Loop() {

    GetComponent('DBGrid_담보제공비율_건물').GetRow(GetNumber('i'), [
        {key: '담보제공비율_건물_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_건물_분모', value: 'SEC_DENO'},
        {key: '담보제공비율_건물_비율', value: 'SEC_RATE'},
        {key: '담보제공비율_건물_등기구분', value: 'REGI_GU'}
    ]);


    GetComponent('DBGrid_담보_건물').FindIndexArray('m_index', (row) => {

        if ((row['REGI_GU'] == GetValue('담보제공비율_건물_등기구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_담보_건물').SetRows(GetValue('m_index'), [
        {key: 'SEC_NUME', value: GetValue('담보제공비율_건물_분자')},
        {key: 'SEC_DENO', value: GetValue('담보제공비율_건물_분모')},
        {key: 'SEC_RATE', value: GetValue('담보제공비율_건물_비율')}
    ], true);


    MC_건물단가_참조값();

}

function MC_담보제공비율_건물_전체면적() {

    GetComponent('DBGrid_건물의표시').GetRows("", [
        {key: '건물의표시_등기구분_Arr', value: 'REGI_GU'},
        {key: '건물의표시_면적_Arr', value: 'CB_SIZE'}
    ]);


    GetComponent('DBGrid_담보제공비율_건물').SetRow(GetValue('건물의표시_RowPosition'), [
        {key: 'REGI_GU', value: GetValue('건물의표시_등기구분')},
        {key: 'LOT_NUM', value: GetValue('건물의표시_지번')},
        {key: 'SEC_NUME', value: GetValue('건물의표시_면적')},
        {key: 'SEC_DENO', value: GetValue('건물의표시_면적')},
        {key: 'SEC_REGI_SIZE', value: GetValue('건물의표시_면적')}
    ], true);


    SetValue('건물의표시_면적_1', 0)
    SetValue('건물의표시_면적_2', 0)
    SetValue('건물의표시_면적_3', 0)
    SetValue('건물의표시_면적_4', 0)


    for (SetValue('i', 0); GetValue('i') < GetNumber('건물의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_건물의표시_전체면적();
    }


    for (SetValue('i', 0); GetValue('i') < GetNumber('건물의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_건물의표시_전체면적_수정();
    }


    if (true) {
        return false;
    }


}

function MC_담보제공비율_비율() {

    GetComponent('DBGrid_담보제공비율').GetCurSel('담보제공비율_RowPosition');


    GetComponent('DBGrid_담보제공비율').GetRow(GetNumber('담보제공비율_RowPosition'), [
        {key: '담보제공비율_전체면적', value: 'SEC_REGI_SIZE'},
        {key: '담보제공비율_분자', value: 'SEC_NUME'},
        {key: '담보제공비율_분모', value: 'SEC_DENO'},
        {key: '담보제공비율_일단지구분', value: 'POT_GU'},
        {key: '담보제공비율_지번', value: 'LOT_NUM'}
    ]);


    GetComponent('DBGrid_평가액').GetRow(-1, [
        {key: '평가액_평가가액', value: 'INC_AMT'}
    ]);


    SetValue('담보제공비율_비율', GetValue('담보제공비율_분자') / GetValue('담보제공비율_분모') * 100)
    SetValue('담보제공비율_담보제공면적', GetValue('담보제공비율_전체면적') * (GetValue('담보제공비율_비율') / 100))
    SetValue('담보제공비율_최종평가가액', GetNumber('평가액_평가가액') * (GetValue('담보제공비율_비율') / 100))

    if (GetValue('담보제공비율_비율') == 100) {
        SetValue('00_NUMBER', 0)
    } else {
        SetValue('00_NUMBER', 1)
    }


    GetComponent('DBGrid_담보').SetRow(GetValue('담보제공비율_RowPosition'), [
        {key: 'SEC_NUME', value: GetValue('담보제공비율_분자')},
        {key: 'SEC_DENO', value: GetValue('담보제공비율_분모')},
        {key: 'SEC_RATE', value: GetValue('담보제공비율_비율')},
        {key: 'POT_GU', value: GetValue('담보제공비율_일단지구분')},
        {key: 'LOT_NUM', value: GetValue('담보제공비율_지번')},
        {key: 'FNL_INC_AMT', value: GetValue('담보제공비율_최종평가가액')}
    ], true);


    GetComponent('DBGrid_담보제공비율').SetRow(-1, [
        {key: 'SEC_RATE', value: GetValue('담보제공비율_비율')},
        {key: 'SEC_OFFER_SIZE', value: GetValue('담보제공비율_담보제공면적')},
        {key: 'SEC_DESC_ENABLE', value: GetValue('00_NUMBER')}
    ], true);

}

function MC_담보제공비율_전체면적() {

    GetComponent('DBGrid_토지의표시').GetRows("", [
        {key: '토지의표시_일단지구분_Arr', value: 'POT_GU'},
        {key: '토지의표시_면적_Arr', value: 'L_SIZE'}
    ]);


    GetComponent('DBGrid_담보제공비율').SetRow(GetValue('토지의표시_RowPosition'), [
        {key: 'LN_SEQ', value: GetValue('토지의표시_순번')},
        {key: 'POT_GU', value: GetValue('토지의표시_일단지구분')},
        {key: 'LOT_NUM', value: GetValue('토지의표시_지번')},
        {key: 'SEC_NUME', value: GetValue('토지의표시_면적')},
        {key: 'SEC_DENO', value: GetValue('토지의표시_면적')},
        {key: 'SEC_REGI_SIZE', value: GetValue('토지의표시_면적')}
    ], true);


    if (true) {
        return false;
    }


    SetValue('토지의표시_면적_1', 0)
    SetValue('토지의표시_면적_2', 0)
    SetValue('토지의표시_면적_3', 0)
    SetValue('토지의표시_면적_4', 0)


    for (SetValue('i', 0); GetValue('i') < GetNumber('토지의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_토지의표시_전체면적();
    }


    for (SetValue('i', 0); GetValue('i') < GetNumber('토지의표시_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_토지의표시_전체면적_수정();
    }

}

function MC_담보제공비율_참조값() {

    GetComponent('DBGrid_토지의표시').GetCurSel('토지의표시_RowPosition');


    GetComponent('DBGrid_토지의표시').GetRow(-1, [
        {key: '토지의표시_일단지구분', value: 'POT_GU'},
        {key: '토지의표시_지번', value: 'LOT_NUM'},
        {key: '토지의표시_개별공시지가', value: 'ANNO_DAN'}
    ]);


    GetComponent('DBGrid_담보제공비율').GetRow(-1, [
        {key: '토지의표시_면적', value: 'SEC_OFFER_SIZE'}
    ]);


    GetComponent('DBGrid_기타요인').FindIndex('기타요인_RowPosition', (row) => {

        if ((row['POT_GU'] = GetValue('토지의표시_일단지구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_기타요인').GetRow(GetNumber('표준지공시지가_RowPosition'), [
        {key: '기타요인_표준지공시지가', value: 'STD_APPL_DAN'},
        {key: '기타요인_적용보정률', value: 'APPL_RATE'}
    ]);


    GetComponent('DBGrid_비준가격집계표').FindIndex('기타요인_RowPosition', (row) => {

        if ((row['POT_GU'] = GetValue('토지의표시_일단지구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_비준가격집계표').GetRow(GetNumber('표준지공시지가_RowPosition'), [
        {key: '비준가격_산정단가', value: 'APAS_DAN'},
        {key: '비준가격_적용단가', value: 'APPL_DAN'}
    ]);


    SetValue('비준가격_산정단가', GetNumber('비준가격_산정단가') * GetNumber('기타요인_적용보정률'))
    SetValue('비준가격_적용단가', GetNumber('비준가격_적용단가') * GetNumber('기타요인_적용보정률'))
    SetValue('평가액_평가가액', GetNumber('비준가격_적용단가') * GetNumber('토지의표시_면적'))


    GetComponent('DBGrid_평가액').SetRow(GetValue('토지의표시_RowPosition'), [
        {key: 'ANNO_DAN', value: GetValue('토지의표시_개별공시지가')},
        {key: 'POT_GU', value: GetValue('토지의표시_일단지구분')},
        {key: 'LOT_NUM', value: GetValue('토지의표시_지번')},
        {key: 'STD_APPL_DAN', value: GetValue('기타요인_표준지공시지가')},
        {key: 'APPL_RATE', value: GetValue('기타요인_적용보정률')},
        {key: 'APAS_AMT', value: GetValue('비준가격_산정단가')},
        {key: 'APPL_AMT', value: GetValue('비준가격_적용단가')},
        {key: 'L_SIZE', value: GetValue('토지의표시_면적')},
        {key: 'INC_AMT', value: GetNumber('평가액_평가가액')}
    ], true);

}

function MC_평가액_참조값() {

    GetComponent('DBGrid_토지의표시').GetRow(GetNumber('i'), [
        {key: '토지의표시_일단지구분', value: 'POT_GU'},
        {key: '토지의표시_지번', value: 'LOT_NUM'},
        {key: '토지의표시_개별공시지가', value: 'ANNO_AMT'},
        {key: '토지의표시_면적', value: 'L_SIZE'}
    ]);


    GetComponent('DBGrid_기타요인').FindIndex('기타요인_RowPosition', (row) => {

        if ((row['POT_GU'] == GetValue('토지의표시_일단지구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_기타요인').GetRow(GetNumber('기타요인_RowPosition'), [
        {key: '기타요인_표준지공시지가', value: 'STD_APPL_DAN'},
        {key: '기타요인_적용보정률', value: 'APPL_RATE'}
    ]);

    if (GetValue('기타요인_RowPosition') >= 0) {

        GetComponent('DBGrid_비준가격집계표').FindIndex('비준가격산정사례_RowPosition', (row) => {

            if ((row['POT_GU'] == GetValue('토지의표시_일단지구분'))) {
                return true;
            }

            return false;
        });


        GetComponent('DBGrid_비준가격집계표').GetRow(GetNumber('비준가격산정사례_RowPosition'), [
            {key: '비준가격_산정단가', value: 'APAS_DAN'},
            {key: '비준가격_적용단가', value: 'APPL_DAN'}
        ]);


        SetValue('비준가격_산정단가', GetNumber('기타요인_표준지공시지가') * (Round(GetNumber('기타요인_적용보정률'), 2)))
        SetValue('비준가격_적용단가', Round(GetNumber('비준가격_산정단가') / 1000, 0) * 1000)
        SetValue('평가액_평가가액', GetNumber('비준가격_적용단가') * GetNumber('토지의표시_면적'))


        GetComponent('DBGrid_평가액').SetRow(GetValue('i'), [
            {key: 'ANNO_AMT', value: GetValue('토지의표시_개별공시지가')},
            {key: 'POT_GU', value: GetValue('토지의표시_일단지구분')},
            {key: 'LOT_NUM', value: GetValue('토지의표시_지번')},
            {key: 'STD_APPL_DAN', value: GetValue('기타요인_표준지공시지가')},
            {key: 'APPL_RATE', value: GetValue('기타요인_적용보정률')},
            {key: 'APAS_AMT', value: GetValue('비준가격_산정단가')},
            {key: 'APPL_AMT', value: GetValue('비준가격_적용단가')},
            {key: 'SEC_OFFER_SIZE', value: GetValue('토지의표시_면적')},
            {key: 'INC_AMT', value: GetNumber('평가액_평가가액')}
        ], true);

    }

}

function MC_평가액_참조값_전체() {

    GetComponent('DBGrid_평가액').GetRowCount('평가액_RowCount');


    for (SetValue('i', 0); GetValue('i') < GetNumber('평가액_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_평가액_참조값();
    }

}

function MC_기준가격_경과일() {

    SetValue('Edit_기준가격_표준지요인_시점수정_날짜_경과일', "")
    SetValue('비준가격_시점수정_사례_날짜', GetValue('Edit_기준가격_표준지요인_시점수정_날짜'))
    SetValue('감정일자', GetValue('MkEdit_감정일'))


    if (isEmpty((GetValue('비준가격_시점수정_사례_날짜')))) {
        return false;
    }


    RunQuery('Q_경과일자', {
        '감정일자': GetValue('감정일자'),
        '비준가격_시점수정_사례_날짜': GetValue('비준가격_시점수정_사례_날짜')
    }, 'GET');


    GetZoonData('Q_경과일자').GetRow(0, [
        {key: 'Edit_기준가격_표준지요인_시점수정_날짜_경과일', value: 'ELAP_YYMM'}
    ]);

}

function MC_보정표_감정가격산출내역_합계() {

    GetComponent('DBGrid_담보').GetRows("", [
        {key: '담보_최종평가가액_Arr', value: 'FNL_INC_AMT'}
    ]);


    SetValue('Edit_보정표_감정가격산출내역_평가액', Sum('담보_최종평가가액_Arr'))
    SetValue('Edit_보정표_감정가격산출내역_예상낙찰가', GetValue('Edit_보정표_감정가격산출내역_평가액') * (GetValue('Edit_보정표_적용할낙찰가율') / 100))


    GetComponent('DBGrid_담보_건물').GetRows("", [
        {key: '담보_건물_최종평가가액_Arr', value: 'FNL_INC_AMT'}
    ]);


    SetValue('Edit_보정표_감정가격산출내역_평가액_건물', Sum('담보_건물_최종평가가액_Arr'))
    SetValue('Edit_보정표_감정가격산출내역_예상낙찰가_건물', GetValue('Edit_보정표_감정가격산출내역_평가액_건물') * (GetValue('Edit_보정표_적용할낙찰가율') / 100))

}

function MC_보정표_평가가격() {

    GetComponent('DBGrid_평가액').GetRows("", [
        {key: '평가액_평가가액_Arr', value: 'INC_AMT'}
    ]);


    GetComponent('DBGrid_건물평가액_집계표').GetRows("", [
        {key: '건물평가액_집계표_평가가액_Arr', value: 'INC_AMT'}
    ]);


    SetValue('Edit_보정표_평가가격', Sum('평가액_평가가액_Arr') + Sum('건물평가액_집계표_평가가액_Arr'))
    SetValue('Edit_보정표_제1차예상최저입찰가', Sum('담보_최종평가가액_Arr') + Sum('담보_건물_최종평가가액_Arr'))

}

function MC_탁상감정_조회() {
    // Function    [RichEditor_탁상감정].SetFontSize

    // RunQuery('Q_탁상감정', {}, 'GET');
    //
    //
    // GetZoonData('Q_탁상감정').GetRow(0, [
    //     {key: '탁상감정_내용', value: 'ESTI_OPI'},
    //     {key: '탁상감정_요청일자', value: 'REQ_DATE'},
    //     {key: '탁상감정_회신일자', value: 'RES_DATE'},
    //     {key: 'Edit_탁상감정_탁상감정가', value: 'RES_PL_BID_AMT'}
    // ]);
    //
    //
    // SetValue('탁상감정_내용', StrReplace(GetValue('탁상감정_내용'), "&qt", "'"))


    // GetComponent('RichEditor_탁상감정').SetRichEditorRTF('탁상감정_내용');

    if (GetValue('isReadOnly') == 'O') {

        GetComponent('TabControl1').EnableTab(-1, 0);


        GetComponent('TabControl1').EnableTab(0, 1);


        GetComponent('TabControl1').EnableTab(11, 1);


        GetComponent('TabControl1').EnableTab(13, 1);


        GetComponent('TabControl1').SetItemText(1, '');


        GetComponent('TabControl1').SetItemText(2, '');


        GetComponent('TabControl1').SetItemText(3, '');


        GetComponent('TabControl1').SetItemText(4, '');


        GetComponent('TabControl1').SetItemText(5, '');


        GetComponent('TabControl1').SetItemText(6, '');


        GetComponent('TabControl1').SetItemText(7, '');


        GetComponent('TabControl1').SetItemText(8, '');


        GetComponent('TabControl1').SetItemText(9, '');


        GetComponent('TabControl1').SetItemText(10, '');


        GetComponent('TabControl1').SetItemText(12, '');

    }

}

function MC_담보_건물_Group() {

    GetComponent('DBGrid_담보_건물').GetRows("", [
        {key: '담보_건물_등기구분_Arr', value: 'REGI_GU'},
        {key: '담보_건물_평가가격_Arr', value: 'INC_AMT'},
        {key: '담보_건물_분자_Arr', value: 'SEC_NUME'},
        {key: '담보_건물_분모_Arr', value: 'SEC_DENO'},
        {key: '담보_건물_비율_Arr', value: 'SEC_RATE'},
        {key: '담보_건물_최종평가가액_Arr', value: 'FNL_INC_AMT'}
    ]);


    SetValue('담보_건물_RowCount', GetArrayCnt('담보_건물_등기구분_Arr'))
    EmptyArray('담보_건물_등기구분목록')

    for (let i = GetNumber('담보_건물_RowCount'); i >= 0; i--) {
        SetValue('i', i);

        MC_담보_건물_Group_등기구분();
    }


    SetValue('담보_건물_RowCount', GetArrayCnt('담보_건물_등기구분목록'))


    GetZoonData('Q_배당표_배당금건물_계산M').EmptyQuery();


    GetZoonData('Q_배당표_배당금건물_계산D').EmptyQuery();

    for (let i=0; i < GetNumber('담보_건물_RowCount'); i++) {
        SetValue('i', i);
        MC_담보_건물_Group_AddRow();
    }


    GetComponent('DBGrid_담보_건물_Group').SortField('REGI_GU', 1);
    GetComponent('DBGrid_배당금건물_계산M').SortField('REGI_GU', 1);


    GetComponent('DBGrid_배당금건물_계산M').GetRowCount('배당표_배당금계산건물_RowCount');


    // for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산건물_RowCount'); SetValue('i', GetValue('i') + 1)) {
    //     MC_담보_건물배당금D_삭제();
    // }


    MC_배당표_배당금건물_RowChange();


    MC_보정표_감정가격산출내역_합계();


    if (true) {
        return false;
    }


    if (GetValue('00_NUMBER') > 0) {

        RunQuery('Q_배당표_배당금_계산D', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');

    }

    MsgBox("1==>" + GetValue('00_NUMBER'), '', false);
}

function MC_담보_건물_Group_등기구분() {

    GetComponent('DBGrid_담보_건물_Group').DeleteRow(GetNumber('i'));


    GetComponent('DBGrid_배당금건물_계산M').DeleteRow(GetNumber('i'));


    GetComponent('DBGrid_감정가액산출내역_건물').DeleteRow(GetNumber('i'));


    if (isNotEmpty(GetArray('담보_건물_등기구분_Arr', GetValue('i')))) {

        if (FindIndexArray('담보_건물_등기구분목록', GetArray('담보_건물_등기구분_Arr', GetValue('i'))) < 0) {
            AddArray('담보_건물_등기구분목록', GetArray('담보_건물_등기구분_Arr', GetValue('i')))
        }
    }

}

function MC_담보_건물_Group_AddRow() {

    SetValue('담보_건물_등기구분', GetArray('담보_건물_등기구분목록', GetValue('i')))


    GetComponent('DBGrid_담보_건물').FindIndexArray('m_index', (row) => {

        if ((row['REGI_GU'] == GetValue('담보_건물_등기구분'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_담보_건물').GetRows(GetValue('m_index'), [
        {key: '담보_건물_등기구분_Arr', value: 'REGI_GU'},
        {key: '담보_건물_평가가격_Arr', value: 'INC_AMT'},
        {key: '담보_건물_분자_Arr', value: 'SEC_NUME'},
        {key: '담보_건물_분모_Arr', value: 'SEC_DENO'},
        {key: '담보_건물_비율_Arr', value: 'SEC_RATE'},
        {key: '담보_건물_최종평가가액_Arr', value: 'FNL_INC_AMT'}
    ]);


    SetValue('담보_건물_평가가격', Sum('담보_건물_평가가격_Arr'))
    SetValue('담보_건물_분자', Min('담보_건물_분자_Arr'))
    SetValue('담보_건물_분모', Min('담보_건물_분모_Arr'))
    SetValue('담보_건물_비율', GetValue('담보_건물_분자') / GetValue('담보_건물_분모') * 100)
    SetValue('담보_건물_최종평가가액', Sum('담보_건물_최종평가가액_Arr'))
    SetValue('보정표_예상낙찰가_건물', GetValue('담보_건물_최종평가가액') * (GetValue('Edit_보정표_적용할낙찰가율') / 100))


    GetComponent('DBGrid_담보_건물_Group').AddRow({
        'REGI_GU': GetValue('담보_건물_등기구분'),
        'INC_AMT': GetValue('담보_건물_평가가격'),
        'SEC_NUME': GetValue('담보_건물_분자'),
        'SEC_DENO': GetValue('담보_건물_분모'),
        'SEC_RATE': GetValue('담보_건물_비율'),
        'FNL_INC_AMT': GetValue('담보_건물_최종평가가액'),
    });


    GetComponent('DBGrid_배당금건물_계산M').AddRow({
        'REGI_GU': GetValue('담보_건물_등기구분'),
        'FNL_INC_AMT': GetValue('담보_건물_최종평가가액'),
    });


    GetComponent('DBGrid_감정가액산출내역_건물').AddRow({
        'REGI_GU': GetValue('담보_건물_등기구분'),
        'FNL_INC_AMT': GetValue('담보_건물_최종평가가액'),
        'FNL_INC_AMT_A': GetValue('담보_건물_최종평가가액'),
        'NAME': '건물',
    });


    MC_배당표_배당금건물_계산_기초데이터();


    if (true) {
        return false;
    }


    MsgBox("1==>" + GetValue('00_NUMBER'), '', false);
    if (GetValue('00_NUMBER') <= 0) {

        MC_배당표_배당금건물_계산_기초데이터();

    }

    if (GetValue('00_NUMBER') > 0) {

        if (true) {
            return false;
        }


        RunQuery('Q_배당표_배당금_계산D', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        MC_배당표_배당금건물_RowChange();

    }

}

function MC_배당표_배당금건물_계산_기초데이터() {
    RunQuery('Q_배당표_배당금건물_계산D_Temp', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '담보_건물_등기구분': GetValue('담보_건물_등기구분')
    }, 'GET');


    GetZoonData('Q_배당표_배당금건물_계산D_Temp').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '9999')) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_배당표_배당금건물_계산D_Temp').SetRows(GetValue('m_index'), [
        {key: 'SHA_GU', value: 3},
        {key: 'LN_SEQ', value: GetValue('담보_건물_등기구분')}
    ]);


    GetZoonData('Q_배당표_배당금건물_계산D_Temp').GetRows("", [
        {key: '배당표_배당금계산건물TMP_배당순위', value: 'RANK'},
        {key: '배당표_배당금계산건물TMP_표시순위', value: 'DISP_RANK'},
        {key: '배당표_배당금계산건물TMP_권리자', value: 'RIGHT_PERSON'},
        {key: '배당표_배당금계산건물TMP_권리의내용', value: 'RIGHT_CODE'},
        {key: '배당표_배당금계산건물TMP_말소여부', value: 'ERA_YN'},
        {key: '배당표_배당금계산건물TMP_순번', value: 'LN_SEQ'},
        {key: '배당표_배당금계산건물TMP_배당표구분', value: 'SHA_GU'},
        {key: '배당표_배당금계산건물TMP_배당순위_Proc', value: 'PRO_RATE_CODE'},
        {key: '배당표_배당금계산건물TMP_발생일자', value: 'RIGHT_DATE'},
        {key: '배당표_배당금계산건물TMP_공동담보', value: 'CRED_COMB_AMT'},
        {key: '배당표_배당금계산건물TMP_공동담보_ORG', value: 'CRED_COMB_AMT_ORG'},
        {key: '배당표_배당금계산건물TMP_단독담보', value: 'CRED_SELF_AMT'},
        {key: '배당표_배당금계산건물TMP_단독담보_ORG', value: 'CRED_SELF_AMT_ORG'},
        {key: '배당표_배당금계산건물TMP_Enable', value: 'IS_ENABLE'},
        {key: '배당표_배당금계산건물TMP_당사설정', value: 'HITE_YN'}
    ]);


    SetValue('배당표_배당금계산건물TMP_RowCount', GetArrayCnt('배당표_배당금계산건물TMP_배당순위'))

    for (SetValue('j', 0); GetValue('j') < GetNumber('배당표_배당금계산건물TMP_RowCount'); SetValue('j', GetValue('j') + 1)) {
        MC_배당표_배당금건물_계산_기초데이터_입력();
    }


    SetValue('배당표_배당금계산건물M_순번', GetValue('건물의표시_건물의표시순번'))


    GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();

}

function MC_배당표_배당금건물_계산_기초데이터_입력() {

    SetValue('배당표_배당금계산건물_배당표구분', GetArray('배당표_배당금계산건물TMP_배당표구분', GetValue('j')))
    SetValue('배당표_배당금계산건물_순번', GetArray('배당표_배당금계산건물TMP_순번', GetValue('j')))
    SetValue('배당표_배당금계산건물_배당순위', GetArray('배당표_배당금계산건물TMP_배당순위', GetValue('j')))
    SetValue('배당표_배당금계산건물_표시순위', GetArray('배당표_배당금계산건물TMP_표시순위', GetValue('j')))
    SetValue('배당표_배당금계산건물_권리자', GetArray('배당표_배당금계산건물TMP_권리자', GetValue('j')))
    SetValue('배당표_배당금계산건물_권리의내용', GetArray('배당표_배당금계산건물TMP_권리의내용', GetValue('j')))
    SetValue('배당표_배당금계산건물_말소여부', GetArray('배당표_배당금계산건물TMP_말소여부', GetValue('j')))
    SetValue('배당표_배당금계산건물_배당순위_Proc', GetArray('배당표_배당금계산건물TMP_배당순위_Proc', GetValue('j')))
    SetValue('배당표_배당금계산건물_발생일자', GetArray('배당표_배당금계산건물TMP_발생일자', GetValue('j')))
    SetValue('배당표_배당금계산건물_Enable', GetArray('배당표_배당금계산건물TMP_Enable', GetValue('j')))
    SetValue('배당표_배당금계산건물_당사설정', GetArray('배당표_배당금계산건물TMP_당사설정', GetValue('j')))
    SetValue('배당표_배당금계산건물_단독담보', GetArray('배당표_배당금계산건물TMP_단독담보', GetValue('j')))
    SetValue('배당표_배당금계산건물_단독담보_ORG', GetArray('배당표_배당금계산건물TMP_단독담보_ORG', GetValue('j')))
    SetValue('배당표_배당금계산건물_공동담보', GetArray('배당표_배당금계산건물TMP_공동담보', GetValue('j')))
    SetValue('배당표_배당금계산건물_공동담보_ORG', GetArray('배당표_배당금계산건물TMP_공동담보_ORG', GetValue('j')))


    GetZoonData('Q_배당표_배당금건물_계산D').AddRow(0, [
        GetValue('년도'),

        GetValue('감정순번'),

        GetValue('배당표_배당금계산건물_배당표구분'),

        GetValue('배당표_배당금계산건물_순번'),

        GetValue('배당표_배당금계산건물_배당순위'),

        GetValue('배당표_배당금계산건물_표시순위'),

        GetValue('배당표_배당금계산건물_발생일자'),

        GetValue('배당표_배당금계산건물_권리자'),

        GetValue('배당표_배당금계산건물_권리의내용'),

        GetValue('배당표_배당금계산건물_말소여부'),

        GetValue('배당표_배당금계산건물_단독담보'),

        GetValue('배당표_배당금계산건물_공동담보'),

        GetValue('배당표_배당금계산건물_Enable'),

        GetValue('배당표_배당금계산건물_단독담보_ORG'),

        GetValue('배당표_배당금계산건물_공동담보_ORG'),

        GetValue('배당표_배당금계산건물_배당순위_Proc'),

        GetValue('배당표_배당금계산건물_당사설정'),

    ]);

}

function MC_기준가격_참조값_본건_일괄적용() {

    GetComponent('DBGrid_본건토지').GetRow(-1, [
        {key: '본건토지_POT_GU', value: 'POT_GU'}
    ]);


    GetComponent('DBGrid_본건토지').FindIndex('본건토지_I', (row) => {

        if ((row['POT_GU'] == GetValue('본건토지_POT_GU'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_본건토지').GetRow(GetNumber('본건토지_I'), [
        {key: '토지의표시_도로조건', value: 'OF_ROAD_CODE'},
        {key: '토지의표시_용도지역', value: 'USE_AREA'},
        {key: '토지의표시_지형지세', value: 'L_UNDUR_CODE'},
        {key: '토지의표시_형상', value: 'L_SHAPE_CODE'},
        {key: '토지의표시_이용현황', value: 'L_USE_CODE'}
    ]);


    GetComponent('DBGrid_기준가격').FindIndexArray('본건토지_INDEX_ARR', (row) => {

        if ((row['POT_GU'] == GetValue('본건토지_POT_GU'))) {
            return true;
        }

        return false;
    });


    SetValue('본건토지_CNT', GetArrayCnt('본건토지_INDEX_ARR') - 1)


    for (SetValue('본건토지_I', 0); GetValue('본건토지_I') <= GetNumber('본건토지_CNT'); SetValue('본건토지_I', GetValue('본건토지_I') + 1)) {
        MC_기준가격_참조값_본건_LOOP();
    }

}

function MC_기준가격_참조값_본건_LOOP() {

    SetValue('본건토지_INDEX', GetArray('본건토지_INDEX_ARR', GetValue('본건토지_I')))


    GetComponent('DBGrid_기준가격').SetRow(GetValue('본건토지_INDEX'), [
        {key: 'JUSO_M', value: GetValue('토지의표시_최소행정구역')},
        {key: 'USE_AREA_M', value: GetValue('토지의표시_용도지역')},
        {key: 'L_UNDUR_CODE_M', value: GetValue('토지의표시_지형지세')},
        {key: 'L_SHAPE_CODE_M', value: GetValue('토지의표시_형상')},
        {key: 'L_OF_GU_M', value: GetValue('토지의표시_이용현황')},
        {key: 'ROAD_SIDE_M', value: GetValue('토지의표시_도로조건')}
    ], true);


    GetComponent('DBGrid_기준가격').GetRow(GetNumber('본건토지_INDEX'), [
        {key: '기준가격_일단지구분', value: 'POT_GU'},
        {key: '기준가격_표준지구분', value: 'STD_GU'},
        {key: '기준가격_표준지공시지가', value: 'STD_ANNO_AMT'},
        {key: '기준가격_시점수정_비교치', value: 'EDIT_C'},
        {key: '기준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '기준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '기준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '기준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '기준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '기준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '기준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '기준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '기준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '기준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '기준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '기준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '기준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '기준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '기준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '기준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '기준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '기준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '기준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '기준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '기준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '기준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '기준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '기준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '기준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '기준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '기준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '기준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '기준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '기준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '기준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '기준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '기준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '기준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '기준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '기준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '기준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '기준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '기준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '기준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '기준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '기준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '기준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '기준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '기준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '기준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '기준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '기준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '기준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '기준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '기준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '기준가격_기타_본건', value: 'L_ETC_M'},
        {key: '기준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '기준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '기준가격_장래_본건', value: 'E_TREND_M'},
        {key: '기준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '기준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '기준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '기준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '기준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '기준가격_감가율', value: 'DEPRE_RATE'},
        {key: '기준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '기준가격_산정단가', value: 'APAS_DAN'},
        {key: '기준가격_적용단가', value: 'APPL_DAN'},
        {key: '기준가격_소재지_본건', value: 'JUSO_M'},
        {key: '기준가격_소재지_사례', value: 'JUSO_S'},
        {key: '기준가격_적용요인합계', value: 'APPL_FACTOR_TOT'},
        {key: '기준가격_소재지_비교치', value: 'JUSO_C'}
    ]);


    SetValue('기준가격집계표_가로', GetValue('기준가격_도로접면_비교치') * GetValue('기준가격_도로거리_비교치'))
    SetValue('기준가격집계표_접근', GetValue('기준가격_관공서_비교치') * GetValue('기준가격_중심지역_비교치') * GetValue('기준가격_기타접근성_비교치'))
    SetValue('기준가격집계표_환경', GetValue('기준가격_철도_비교치') * GetValue('기준가격_폐기물_비교치') * GetValue('기준가격_기타환경_비교치'))
    SetValue('기준가격집계표_행정', GetValue('기준가격_용도지역_비교치') * GetValue('기준가격_용도지구_비교치') * GetValue('기준가격_도시계획_비교치') * GetValue('기준가격_기타제한_비교치'))
    SetValue('기준가격집계표_획지', GetValue('기준가격_고저_비교치') * GetValue('기준가격_형상_비교치') * GetValue('기준가격_방위_비교치') * GetValue('기준가격_면적_비교치') * GetValue('기준가격_토지이용_비교치') * GetValue('기준가격_기타_비교치'))
    SetValue('기준가격집계표_기타', GetValue('기준가격_장래_비교치') * GetValue('기준가격_기타조건_비교치'))
    SetValue('기준가격_요인합계', GetValue('기준가격_소재지_비교치') * GetValue('기준가격_시점수정_비교치') * GetValue('기준가격집계표_가로') * GetValue('기준가격집계표_접근') * GetValue('기준가격집계표_환경') * GetValue('기준가격집계표_행정') * GetValue('기준가격집계표_획지') * GetValue('기준가격집계표_기타'))


    GetComponent('DBGrid_토지의표시').GetRows("", [
        {key: '토지의표시_일단지구분_Arr', value: 'POT_GU'},
        {key: '토지의표시_개별공시지가_Arr', value: 'ANNO_DAN'},
        {key: '토지의표시_총개별공시지가_Arr', value: 'ANNO_AMT'},
        {key: '토지의표시_면적_Arr', value: 'L_SIZE'}
    ]);


    GetComponent('DBGrid_기준가격').GetRow(GetNumber('본건토지_INDEX'), [
        {key: '기준가격_일단지구분', value: 'POT_GU'}
    ]);


    SetValue('토지의표시_RowCount', GetArrayCnt('토지의표시_일단지구분_Arr'))


    for (SetValue('i', GetNumber('토지의표시_RowCount') - 1); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_기준가격_감가율_계산();
    }


    SetValue('토지의표시_개별공시지가_총', Sum('토지의표시_총개별공시지가_Arr'))
    SetValue('토지의표시_개별공시지가', Max('토지의표시_개별공시지가_Arr'))
    SetValue('토지의표시_면적', Sum('토지의표시_면적_Arr'))


    SetValue('기준가격_비교치_감가율', GetValue('토지의표시_개별공시지가_총') / (GetValue('토지의표시_개별공시지가') * GetValue('토지의표시_면적')))


    SetValue('기준가격_비교치_요인합계', Round(GetValue('기준가격_요인합계'), 2))
    SetValue('기준가격_비교치_적용요인합계', GetValue('기준가격_비교치_요인합계') * GetValue('기준가격_비교치_감가율'))
    SetValue('기준가격_비교치_산정단가', GetValue('기준가격_비교치_적용요인합계') * GetValue('기준가격_표준지공시지가'))
    SetValue('기준가격_비교치_적용단가', Round((GetValue('기준가격_비교치_산정단가') / 1000), 0))
    SetValue('기준가격_비교치_적용단가', GetValue('기준가격_비교치_적용단가') * 1000)


    GetComponent('DBGrid_기준가격').SetRow(GetValue('본건토지_INDEX'), [
        {key: 'DEPRE_RATE', value: GetValue('기준가격_비교치_감가율')},
        {key: 'FACTOR_TOT', value: GetValue('기준가격_비교치_요인합계')},
        {key: 'APAS_DAN', value: GetValue('기준가격_비교치_산정단가')},
        {key: 'APPL_DAN', value: GetValue('Edit_기준가격_비교치_적용단가')},
        {key: 'APPL_FACTOR_TOT', value: GetValue('기준가격_비교치_적용요인합계')}
    ], true);

}

function MC_비준가격_참조값_본건_일괄적용() {

    GetComponent('DBGrid_본건토지').GetRow(-1, [
        {key: '본건토지_POT_GU', value: 'POT_GU'}
    ]);


    GetComponent('DBGrid_본건토지').FindIndex('본건토지_I', (row) => {

        if ((row['POT_GU'] == GetValue('본건토지_POT_GU'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_본건토지').GetRow(GetNumber('본건토지_I'), [
        {key: '토지의표시_도로조건', value: 'OF_ROAD_CODE'},
        {key: '토지의표시_용도지역', value: 'USE_AREA'},
        {key: '토지의표시_지형지세', value: 'L_UNDUR_CODE'},
        {key: '토지의표시_형상', value: 'L_SHAPE_CODE'},
        {key: '토지의표시_이용현황', value: 'L_USE_CODE'}
    ]);


    GetComponent('DBGrid_비준가격').FindIndexArray('본건토지_INDEX_ARR', (row) => {

        if ((row['POT_GU'] == GetValue('본건토지_POT_GU'))) {
            return true;
        }

        return false;
    });


    SetValue('본건토지_CNT', GetArrayCnt('본건토지_INDEX_ARR') - 1)


    for (SetValue('본건토지_I', 0); GetValue('본건토지_I') <= GetNumber('본건토지_CNT'); SetValue('본건토지_I', GetValue('본건토지_I') + 1)) {
        MC_비준가격_참조값_본건_LOOP();
    }

}

function MC_비준가격_참조값_본건_LOOP() {

    SetValue('본건토지_INDEX', GetArray('본건토지_INDEX_ARR', GetValue('본건토지_I')))


    GetComponent('DBGrid_비준가격').SetRow(GetValue('본건토지_INDEX'), [
        {key: 'JUSO_M', value: GetValue('토지의표시_최소행정구역')},
        {key: 'USE_AREA_M', value: GetValue('토지의표시_용도지역')},
        {key: 'L_UNDUR_CODE_M', value: GetValue('토지의표시_지형지세')},
        {key: 'L_SHAPE_CODE_M', value: GetValue('토지의표시_형상')},
        {key: 'L_OF_GU_M', value: GetValue('토지의표시_이용현황')},
        {key: 'ROAD_SIDE_M', value: GetValue('토지의표시_도로조건')}
    ], true);


    GetComponent('DBGrid_비준가격').GetRow(GetNumber('본건토지_INDEX'), [
        {key: '비준가격_일단지구분', value: 'POT_GU'},
        {key: '비준가격_사례번호', value: 'EX_NO'},
        {key: '비준가격_사례가격', value: 'STD_ANNO_AMT'},
        {key: '비준가격_시점수정_본건', value: 'EDIT_M'},
        {key: '비준가격_도로접면_본건', value: 'ROAD_SIDE_M'},
        {key: '비준가격_도로접면_비교치', value: 'ROAD_SIDE_C'},
        {key: '비준가격_도로접면_표준지', value: 'ROAD_SIDE_S'},
        {key: '비준가격_도로거리_본건', value: 'ROAD_DIST_M'},
        {key: '비준가격_도로거리_비교치', value: 'ROAD_DIST_C'},
        {key: '비준가격_도로거리_표준지', value: 'ROAD_DIST_S'},
        {key: '비준가격_관공서_본건', value: 'GOV_ACSS_M'},
        {key: '비준가격_관공서_비교치', value: 'GOV_ACSS_C'},
        {key: '비준가격_관공서_표준지', value: 'GOV_ACSS_S'},
        {key: '비준가격_중심지역_본건', value: 'CNTR_ACSS_M'},
        {key: '비준가격_중심지역_비교치', value: 'CNTR_ACSS_C'},
        {key: '비준가격_중심지역_표준지', value: 'CNTR_ACSS_S'},
        {key: '비준가격_기타접근성_본건', value: 'ETC_ACSS_M'},
        {key: '비준가격_기타접근성_비교치', value: 'ETC_ACSS_C'},
        {key: '비준가격_기타접근성_표준지', value: 'ETC_ACSS_S'},
        {key: '비준가격_철도_본건', value: 'RAIL_ACSS_M'},
        {key: '비준가격_철도_비교치', value: 'RAIL_ACSS_C'},
        {key: '비준가격_철도_표준지', value: 'RAIL_ACSS_S'},
        {key: '비준가격_폐기물_본건', value: 'POLL_ACSS_M'},
        {key: '비준가격_폐기물_비교치', value: 'POLL_ACSS_C'},
        {key: '비준가격_폐기물_표준지', value: 'POLL_ACSS_S'},
        {key: '비준가격_기타환경_본건', value: 'ETC_ENVI_M'},
        {key: '비준가격_기타환경_비교치', value: 'ETC_ENVI_C'},
        {key: '비준가격_기타환경_표준지', value: 'ETC_ENVI_S'},
        {key: '비준가격_용도지역_본건', value: 'USE_AREA_M'},
        {key: '비준가격_용도지역_비교치', value: 'USE_AREA_C'},
        {key: '비준가격_용도지역_표준지', value: 'USE_AREA_S'},
        {key: '비준가격_용도지구_본건', value: 'USE_DSCT_M'},
        {key: '비준가격_용도지구_비교치', value: 'USE_DSCT_C'},
        {key: '비준가격_용도지구_표준지', value: 'USE_DSCT_S'},
        {key: '비준가격_도시계획_본건', value: 'CITY_INFR_M'},
        {key: '비준가격_도시계획_비교치', value: 'CITY_INFR_C'},
        {key: '비준가격_도시계획_표준지', value: 'CITY_INFR_S'},
        {key: '비준가격_기타제한_본건', value: 'LIMIT_AREA_M'},
        {key: '비준가격_기타제한_비교치', value: 'LIMIT_AREA_C'},
        {key: '비준가격_기타제한_표준지', value: 'LIMIT_AREA_S'},
        {key: '비준가격_고저_본건', value: 'L_UNDUR_CODE_M'},
        {key: '비준가격_고저_비교치', value: 'L_UNDUR_CODE_C'},
        {key: '비준가격_고저_표준지', value: 'L_UNDUR_CODE_S'},
        {key: '비준가격_형상_본건', value: 'L_SHAPE_CODE_M'},
        {key: '비준가격_형상_비교치', value: 'L_SHAPE_CODE_C'},
        {key: '비준가격_형상_표준지', value: 'L_SHAPE_CODE_S'},
        {key: '비준가격_방위_본건', value: 'L_AZIM_CODE_M'},
        {key: '비준가격_방위_비교치', value: 'L_AZIM_CODE_C'},
        {key: '비준가격_방위_표준지', value: 'L_AZIM_CODE_S'},
        {key: '비준가격_면적_본건', value: 'L_SIZE_CODE_M'},
        {key: '비준가격_면적_비교치', value: 'L_SIZE_CODE_C'},
        {key: '비준가격_면적_표준지', value: 'L_SIZE_CODE_S'},
        {key: '비준가격_토지이용_본건', value: 'L_OF_GU_M'},
        {key: '비준가격_토지이용_비교치', value: 'L_OF_GU_C'},
        {key: '비준가격_토지이용_표준지', value: 'L_OF_GU_S'},
        {key: '비준가격_기타_본건', value: 'L_ETC_M'},
        {key: '비준가격_기타_비교치', value: 'L_ETC_C'},
        {key: '비준가격_기타_표준지', value: 'L_ETC_S'},
        {key: '비준가격_장래_본건', value: 'E_TREND_M'},
        {key: '비준가격_장래_비교치', value: 'E_TREND_C'},
        {key: '비준가격_장래_표준지', value: 'E_TREND_S'},
        {key: '비준가격_기타조건_본건', value: 'E_ETC_M'},
        {key: '비준가격_기타조건_비교치', value: 'E_ETC_C'},
        {key: '비준가격_기타조건_표준지', value: 'E_ETC_S'},
        {key: '비준가격_감가율', value: 'DEPRE_RATE'},
        {key: '비준가격_요인합계', value: 'FACTOR_TOT'},
        {key: '비준가격_산정단가', value: 'APAS_DAN'},
        {key: '비준가격_적용단가', value: 'APPL_DAN'},
        {key: '비준가격_소재지_본건', value: 'JUSO_M'},
        {key: '비준가격_소재지_사례', value: 'JUSO_S'},
        {key: '비준가격_조사시점', value: 'SURVEY_TIME'},
        {key: '비준가격_시점수정_사례', value: 'EDIT_S'},
        {key: '비준가격_시점수정_비교치', value: 'EDIT_C'},
        {key: '비준가격_소재지_비교치', value: 'JUSO_C'}
    ]);


    SetValue('비준가격집계표_가로', GetValue('비준가격_도로접면_비교치') * GetValue('비준가격_도로거리_비교치'))
    SetValue('비준가격집계표_접근', GetValue('비준가격_관공서_비교치') * GetValue('비준가격_중심지역_비교치') * GetValue('비준가격_기타접근성_비교치'))
    SetValue('비준가격집계표_환경', GetValue('비준가격_철도_비교치') * GetValue('비준가격_폐기물_비교치') * GetValue('비준가격_기타환경_비교치'))
    SetValue('비준가격집계표_행정', GetValue('비준가격_용도지역_비교치') * GetValue('비준가격_용도지구_비교치') * GetValue('비준가격_도시계획_비교치') * GetValue('비준가격_기타제한_비교치'))
    SetValue('비준가격집계표_획지', GetValue('비준가격_고저_비교치') * GetValue('비준가격_형상_비교치') * GetValue('비준가격_방위_비교치') * GetValue('비준가격_면적_비교치') * GetValue('비준가격_토지이용_비교치') * GetValue('비준가격_기타_비교치'))
    SetValue('비준가격집계표_기타', GetValue('비준가격_장래_비교치') * GetValue('비준가격_기타조건_비교치'))
    SetValue('비준가격_요인합계', GetValue('비준가격_소재지_비교치') * GetValue('비준가격_시점수정_비교치') * GetValue('비준가격집계표_가로') * GetValue('비준가격집계표_접근') * GetValue('비준가격집계표_환경') * GetValue('비준가격집계표_행정') * GetValue('비준가격집계표_획지') * GetValue('비준가격집계표_기타'))


    SetValue('비준가격_비교치_요인합계', Round(GetValue('비준가격_요인합계'), 2))
    SetValue('비준가격_비교치_산정단가', GetValue('비준가격_비교치_요인합계') * GetValue('비준가격_사례가격'))
    SetValue('비준가격_비교치_적용단가', Round((GetValue('비준가격_비교치_산정단가') / 1000), 0))
    SetValue('비준가격_비교치_적용단가', GetValue('비준가격_비교치_적용단가') * 1000)


    GetComponent('DBGrid_비준가격').SetRow(GetValue('본건토지_INDEX'), [
        {key: 'FACTOR_TOT', value: GetValue('비준가격_비교치_요인합계')},
        {key: 'APAS_DAN', value: GetValue('비준가격_비교치_산정단가')},
        {key: 'APPL_DAN', value: GetValue('비준가격_비교치_적용단가')}
    ], true);

}

function MC_도로주소반환() {

    // GetComponent('DBGrid_도로주소_목록').GetRow(ADDR, [
    //     {key: '팝업_전체주소', value: ""}
    // ]);

    if (GetValue('주소구분') == 1) {

        SetValue('Edit_소재지', GetValue('팝업_전체주소'))

    }

    if (GetValue('주소구분') == 2) {

        GetComponent('DBGrid_토지의표시').SetRow(-1, [
            {key: 'MIN_BOUND', value: GetValue('팝업_전체주소')}
        ], true);

    }

    if (GetValue('주소구분') == 3) {

        GetComponent('DBGrid_표준지공시지가').SetRow(-1, [
            {key: 'JUSO1', value: GetValue('팝업_전체주소')}
        ], true);

    }

    if (GetValue('주소구분') == 4) {

        GetComponent('DBGrid_비준가격_산정사례').SetRow(-1, [
            {key: 'JUSO1', value: GetValue('팝업_전체주소')}
        ], true);

    }


    GetComponent('SubForm_주소조회').HideSubForm();

}