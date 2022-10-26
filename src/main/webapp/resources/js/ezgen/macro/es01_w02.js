function MC_000_초기화_공통코드Query() {
    RunQuery('Q_DUAL_여부', {}, 'GET');
    RunQuery('Q_DUAL_유무', {}, 'GET');
    RunQuery('Q_DUAL_이용상황', {}, 'GET');
    RunQuery('Q_DUAL_비준_사례구분', {}, 'GET');
    RunQuery('Q_00_가임대보증금적용지역', {}, 'GET');
    RunQuery('Q_00_건축물의경과년도', {}, 'GET');
    RunQuery('Q_00_결재진행현황', {}, 'GET');
    RunQuery('Q_00_공공시설접근성', {}, 'GET');
    RunQuery('Q_00_구조', {}, 'GET');
    RunQuery('Q_00_내용년수', {
        '담보종류': GetValue('담보종류')
    }, 'GET');
    RunQuery('Q_00_담보종류', {}, 'GET');
    RunQuery('Q_00_도로계통성', {}, 'GET');
    RunQuery('Q_00_도로조건', {}, 'GET');
    RunQuery('Q_00_사진구분', {}, 'GET');
    RunQuery('Q_00_상업시설접근성', {}, 'GET');
    RunQuery('Q_00_용도지역', {}, 'GET');
    RunQuery('Q_00_위치별', {}, 'GET');
    RunQuery('Q_00_입지조건', {}, 'GET');
    RunQuery('Q_00_전유부분의면적', {}, 'GET');
    RunQuery('Q_00_전유부분의위치', {}, 'GET');
    RunQuery('Q_00_전유부분의위치_총층수만', {}, 'GET');
    RunQuery('Q_00_점유자의형태', {}, 'GET');
    RunQuery('Q_00_접근조건', {}, 'GET');
    RunQuery('Q_00_접한도로의폭', {}, 'GET');
    RunQuery('Q_00_지목', {}, 'GET');
    RunQuery('Q_00_지붕', {}, 'GET');
    RunQuery('Q_00_집합건물종류', {}, 'GET');
    RunQuery('Q_00_층별비교', {}, 'GET');
    RunQuery('Q_01_부서목록', {}, 'GET');
    RunQuery('Q_00_인테리어비용', {}, 'GET');
    RunQuery('Q_00_일련번호', {}, 'GET');

    RunQuery('Q_공통보고서_트리', {}, 'GET');
    RunQuery('Q_99_평가구분', {}, 'GET');

    if (match(PageType.집합_상업용)) {
        RunQuery('Q_00_상가의접근성', {}, 'GET');
        RunQuery('Q_00_상가의층별위치', {}, 'GET');
        RunQuery('Q_00_상권의발달정도', {}, 'GET');
        RunQuery('Q_코드_가임대보증금적용범위_상가', {}, 'GET');
    }

    GetComponent('Combo_보고서_평가구분').SetCurSel();
}

function MC_Query_초기화(){
    RunQuery('Q_크로스', {}, 'GET');
    RunQuery('Q_사진구분', {}, 'GET');
    RunQuery('Q_지목', {}, 'GET');
    RunQuery('Q_구조', {}, 'GET');
    RunQuery('Q_지붕', {}, 'GET');
    RunQuery('Q_집합건물종류', {}, 'GET');
    RunQuery('Q_코드_가임대보증금적용지역', {}, 'GET');
    RunQuery('Q_코드_최고채권액', {}, 'GET');
    RunQuery('Q_코드_순위', {}, 'GET');
    RunQuery('Q_코드_권리의내용', {}, 'GET');
    RunQuery('Q_코드_각구의일련번호', {}, 'GET');
    RunQuery('Q_전유부분의위치', {}, 'GET');
    RunQuery('Q_아파트단지규모', {}, 'GET');
    RunQuery('Q_전유부분의면적', {}, 'GET');
    RunQuery('Q_건축물의경과년도', {}, 'GET');
    RunQuery('Q_점유자의형태', {}, 'GET');
    RunQuery('Q_00_인테리어비용', {}, 'GET');
    RunQuery('Q_가격사례_M', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_가격사례_D', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_배당표_배당금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_99_평가구분', {}, 'GET');
}

function MC_001_초기화_Combo_보정표() {
    GetComponent('Combo_보정표_상가의접근성').SetCurSel(0);
    GetComponent('Combo_보정표_상가의층별위치').SetCurSel(0);
    GetComponent('Combo_보정표_상권의발달정도').SetCurSel(0);
    GetComponent('Combo_보정표_건축물경과년도').SetCurSel(0);
    GetComponent('Combo_보정표_점유자의권리형태').SetCurSel(0);

    if (match(PageType.집합_상업용)) {
        SetValue('MkEdit_보정표_건축물의경과년도', 0);
        SetValue('MkEdit_보정표_기준낙찰가율', 100);
        SetValue('MkEdit_보정표_당해지역낙찰가율', 100);
        SetValue('MkEdit_보정표_예상낙찰가', 0);
        SetValue('MkEdit_보정표_유사부동산낙찰가율', 100);
        SetValue('MkEdit_보정표_적용할낙찰가율', 100);
        SetValue('MkEdit_보정표_최저입찰가', 0);
        SetValue('MkEdit_보정표_평가가격', 0);

        GetZoonData('Q_00_상가의접근성').GetRow(0, [
            { key: 'MkEdit_보정표_상가의접근성_적용율', value: 'IDX' },
        ]);
        GetZoonData('Q_00_상가의층별위치').GetRow(0, [
            { key: 'MkEdit_보정표_상가의층별위치_적용율', value: 'IDX' },
        ]);
        GetZoonData('Q_00_상권의발달정도').GetRow(0, [
            { key: 'MkEdit_보정표_상권의발달정도_적용율', value: 'IDX' },
        ]);
        GetZoonData('Q_00_건축물의경과년도').GetRow(0, [
            { key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'IDX' },
        ]);
        GetZoonData('Q_00_점유자의형태').GetRow(0, [
            { key: 'MkEdit_보정표_점유자의권리형태_적용율', value: 'IDX' },
        ]);
    } else if (match(PageType.집합_오피스텔)) {
        SetValue('IDX_보정표_전유부분의면적',0);
        SetValue('MkEdit_보정표_건축물의경과년도',0);
        SetValue('MkEdit_보정표_건축물의경과년도_적용율',1);
        SetValue('MkEdit_보정표_기준낙찰가율',100);
        SetValue('MkEdit_보정표_당해지역낙찰가율',100);
        SetValue('MkEdit_보정표_예상낙찰가',0);
        SetValue('MkEdit_보정표_유사부동산낙찰가율',100);
        SetValue('MkEdit_보정표_입지조건_적용율',1);
        SetValue('MkEdit_보정표_적용할낙찰가율',100);
        SetValue('MkEdit_보정표_전유부분면적',0);
        SetValue('MkEdit_보정표_전유부분면적_적용율',1);
        SetValue('MkEdit_보정표_전유부분위치_등급', '');
        SetValue('MkEdit_보정표_전유부분위치_적용율',1);
        SetValue('MkEdit_보정표_점유자의권리형태_적용율',1);
        SetValue('MkEdit_보정표_최저입찰가',0);
        SetValue('MkEdit_보정표_평가가격',0);
    }
}

function MC_001_초기화_Combo_입력표() {
    GetComponent('Combo_입력표_가임대보증금적용지역').SetCurSel(-1);
    GetComponent('Combo_입력표_구조').SetCurSel(-1);
    // GetComponent('Combo_입력표_내용연수').SetCurSel(-1);
    GetComponent('Combo_입력표_도로조건').SetCurSel(-1);
    GetComponent('Combo_입력표_위치').SetCurSel(-1);
    GetComponent('Combo_입력표_접근조건').SetCurSel(-1);
    GetComponent('Combo_입력표_지목').SetCurSel(-1);
    GetComponent('Combo_입력표_지붕').SetCurSel(-1);
    GetComponent('Combo_입력표_총층수').SetCurSel(-1);
    GetComponent('Combo_입력표_해당층').SetCurSel(-1);
    GetComponent('Combo_입력표_바닥난방').SetCurSel(-1);
    GetComponent('Combo_입력표_용도').SetCurSel(-1);
    GetComponent('Combo_입력표_업소구분').SetCurSel(-1);
}

function MC_Combo_초기화() {
    GetZoonData('Q_전유부분의위치').FindIndex('전유부분의위치_Idx', (row) => {
        return row['CD_CODE'] == GetValue('Combo_전유부분의위치');
    });
    GetZoonData('Q_전유부분의위치').GetRow(GetNumber('전유부분의위치_Idx'), [
        { key: 'MkEdit_보정표_전유부분위치_적용율', value: 'ATTR_08' },
    ]);
    GetZoonData('Q_아파트단지규모').FindIndex('단지전체규모_Idx', (row) => {
        return row['CD_CODE'] == GetValue('Combo_아파트단지규모');
    });
    GetZoonData('Q_아파트단지규모').GetRow(GetNumber('단지전체규모_Idx'), [
        { key: 'MkEdit_보정표_아파트단지규모_적용율', value: 'ATTR_08' },
    ]);
    GetZoonData('Q_전유부분의면적').FindIndex('전유부분의면적_Idx', (row) => {
        return row['CD_CODE'] == GetValue('Combo_전유부분의면적');
    });
    GetZoonData('Q_전유부분의면적').GetRow(GetNumber('전유부분의면적_Idx'), [
        { key: 'MkEdit_보정표_전유부분의면적_적용율', value: 'ATTR_08' },
    ]);
    GetZoonData('Q_건축물의경과년도').FindIndex('건축물의경과년도_Idx', (row) => {
        return row['CD_CODE'] == GetValue('Combo_건축물의경과년도');
    });
    GetZoonData('Q_건축물의경과년도').GetRow(GetNumber('건축물의경과년도_Idx'), [
        { key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'ATTR_08' },
    ]);
    GetZoonData('Q_점유자의형태').FindIndex('점유자의권리형태_Idx', (row) => {
        return row['CD_CODE'] == GetValue('Combo_점유자의권리형태');
    });
    GetZoonData('Q_점유자의형태').GetRow(GetNumber('점유자의권리형태_Idx'), [
        { key: 'MkEdit_보정표_점유자의권리형태_적용율', value: 'ATTR_08' },
    ]);
    GetComponent('Combo_입력표_업소구분').SetCurSel(-1);

    RunQuery('Q_배당표_배당금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');

    GetComponent('Combo_보고서_평가구분').SetCurSel(-1);
}

function MC_001_초기화_재감정여부() {
    if (isEmpty(GetValue('Edit_KEY_감정순번')) ||
        isEmpty(GetValue('Edit_KEY_감정순번')) ||
        (Right(GetString('Edit_KEY_감정순번'), 2) == "00")) {
        SetValue('Edit_입력표_이담보물에대한재감정', "최초감정");
    } else {
        SetValue('Edit_입력표_이담보물에대한재감정', "재감정");
    }
}

function MC_002_DBGrid_본건_SetModifyFlag() {
    GetComponent('DBGrid_본건사례').SetModifyFlag('00_TEMP', 'i');
}

function MC_002_DBGrid_본건_로딩시EditFlag값변경() {
    SetValue('00_TEMP', '');
    if (match(PageType.집합_오피스텔)) {
        SetValue('감정가_본건_일련번호', '');
    }
    SetValue('00_NUMBER', -1);
    GetComponent('DBGrid_본건사례').GetRowCount('00_NUMBER');
    GetComponent('DBGrid_본건사례').GetRow(0, [
        { key: '감정가_본건_일련번호', value: '일련번호'}
    ]);

    if (isEmpty(GetValue('감정가_본건_일련번호')) || (isEmpty(GetValue('감정가_본건_일련번호')))) {
        SetValue('00_TEMP', "I")
    }

    // LoopMacro
    for(let i = 0; i < GetNumber('00_NUMBER'); i++) {
        SetValue('i', i);

        MC_002_DBGrid_본건_SetModifyFlag();
    }
}
function MC_002_초기화_Query_Loading() {
    RunQuery('Q_10_입력표_담보마스타', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_11_입력표_집합건물', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_12_입력표_규제의표시', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_20_입력표_낙찰가율보정표', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_감정가_00_본건_입지특성', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_감정가_00_본건', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_감정가_02_경매사례', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_감정가_01_가격사례', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_감정가_03_비준가격', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_감정가_03_비준가격_집계표', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
    RunQuery('Q_감정가_09_감정평가', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');

    if (match(PageType.집합_상업용)) {
        RunQuery('Q_감정가_02_임대사례', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');
        RunQuery('Q_감정가_04_수익가격', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');
        RunQuery('Q_감정가_04_수익가격_집계표', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        }, 'GET');
    } else if (match(PageType.집합_오피스텔)) {
        SetValue('Edit_입력표_채무자와담보제공자의관계', '채무자 본인');
        SetValue('MkEdit_입력표_기타조건_지수', 1);
    }

    if (GetString('Combo_입력표_업소구분') == "0") {
        GetComponent('Edit_입력표_업소명').SetReadOnly(1);
        SetValue('Edit_입력표_업소명', '자체');
        GetComponent('Edit_입력표_업소대표자').SetReadOnly(1);
        SetValue('Edit_입력표_업소대표자', GetValue('Edit_입력표_대표자'));
        SetFocus('Edit_입력표_채무자');
    } else if (GetString('Combo_입력표_업소구분') == "1") {
        GetComponent('Edit_입력표_업소명').SetReadOnly(0);
        GetComponent('Edit_입력표_업소대표자').SetReadOnly(0);
        SetValue('Edit_입력표_업소명', '');
        SetValue('Edit_입력표_업소대표자', '');
        SetFocus('Edit_입력표_업소명');
    } else if (isEmpty(GetString('Combo_입력표_업소구분'))) {
        GetComponent('Edit_입력표_업소명').SetReadOnly(0);
        GetComponent('Edit_입력표_업소대표자').SetReadOnly(0);
        GetComponent('Combo_입력표_업소구분').SetCurSel(0);
        SetValue('Edit_입력표_업소명', '');
        SetValue('Edit_입력표_업소대표자', '');
        SetFocus('Edit_입력표_업소명');
    }


    if (!isEmpty(GetValue('감정순번'))) {
        GetZoonData('Q_10_입력표_담보마스타').GetRow(0, [
            {key: 'Edit_입력표_거래처코드', value: '거래처코드'},
            {key: 'Edit_입력표_거래처', value: '거래처명'},
            {key: 'Edit_입력표_대표자', value: '거래처대표자'},
            {key: 'Edit_입력표_업소명', value: '업소명'},
            {key: 'Edit_입력표_업소대표자', value: '업소대표자'},
            {key: 'Edit_입력표_채무자', value: '채무자'},
            {key: 'Edit_입력표_채무자와담보제공자의관계', value: '채무자와담보제공자와의관계'},
            {key: 'Edit_입력표_담보제공자', value: '담보제공자'},
            {key: 'MkEdit_감정일', value: '담보감정일자'},
            {key: 'Combo_입력표_업소구분', value: '업소구분'},
            {key: 'Edit_Doc_Key', value: 'DOC_KEY'},
            {key: 'Edit_Doc_Name', value: 'DOC_NAME'},
            {key: 'Combo_보고서_평가구분', value: '평가구분'},
            {key: 'Edit_감정자', value: '지점_감정자명'},
            {key: 'Edit_감정자사번', value: '지점_감정자'},
            {key: '02_배당표수정여부', value: 'SHARE_YN'},
        ]);

        GetZoonData('Q_11_입력표_집합건물').GetRow(0, [
            {key: 'Edit_입력표_소재지1', value: '부동산표시_주소1'},
            {key: 'Edit_입력표_소재지2', value: '부동산표시_주소2'},
            {key: 'Edit_입력표_지번', value: '지번'},
            {key: 'Edit_입력표_집합건물의명칭', value: '집합건물의명칭'},
            {key: 'Edit_입력표_동수', value: '동수'},
            {key: 'Edit_입력표_호수', value: '호수'},
            {key: 'MkEdit_입력표_토지권의목적인', value: '대지권의목적'},
            {key: 'Edit_입력표_대지권소유권여부', value: '대지권소유권보유여부'},
            {key: 'Edit_입력표_대지권소유권', value: '대지권소유권'},
            {key: 'Combo_입력표_지목', value: '지목'},
            {key: 'Combo_입력표_가임대보증금적용지역', value: '가임대보증금적용지역'},
            {key: 'Combo_입력표_구조', value: '집합건물_구조'},
            {key: 'Combo_입력표_지붕', value: '집합건물_지붕'},
            {key: 'Edit_입력표_지상', value: '집합건물_지상'},
            {key: 'Edit_입력표_지하', value: '집합건물_지하'},
            {key: 'Edit_입력표_해당층', value: '집합건물_해당층'},
            {key: 'MkEdit_입력표_건축일자', value: '집합건물_건축년도'},
            {key: 'MkEdit_입력표_건축년도_경과', value: '집합건물_경과년도'},
            {key: 'MkEdit_입력표_내용연수', value: '집합건물_내용년수'},
            {key: 'MkEdit_입력표_전유면적', value: '집합건물_전유면적_M2'},
            {key: 'MkEdit_입력표_전유면적_평', value: '집합건물_전유면적_평'},
            {key: 'MkEdit_입력표_공유면적', value: '집합건물_공유면적_M2'},
            {key: 'MkEdit_입력표_공유면적_평', value: '집합건물_공유면적_평'},
            {key: 'MkEdit_입력표_면적합계', value: '집합건물_면적합계_M2'},
            {key: 'MkEdit_입력표_면적합계_평', value: '집합건물_면적합계_평'},
            {key: 'Combo_입력표_총층수', value: '오피스텔_상가_총층수'},
            {key: 'Combo_입력표_해당층', value: '오피스텔_상가_층수'},
            {key: 'MkEdit_입력표_층별코드', value: '오피스텔_상가_층수'},
            {key: 'MkEdit_입력표_층별지수', value: '오피스텔_상가_층별지수'},
            {key: 'Combo_입력표_위치', value: '오피스텔_상가_위치'},
            {key: 'MkEdit_입력표_위치지수', value: '오피스텔_상가_위치지수'},
            {key: 'MkEdit_입력표_잔가율', value: '오피스텔_상가_잔가율'},
            {key: 'Combo_입력표_도로조건', value: '오피스텔_상가_도로조건'},
            {key: 'MkEdit_입력표_도로조건지수', value: '오피스텔_상가_도로조건지수'},
            {key: 'Combo_입력표_접근조건', value: '오피스텔_상가_접근조건'},
            {key: 'MkEdit_입력표_접근조건지수', value: '오피스텔_상가_접근조건지수'},
            {key: 'Edit_입력표_기타조건', value: '오피스텔_상가_기타조건'},
            {key: 'MkEdit_입력표_기타조건_지수', value: '오피스텔_상가_기타조건지수'},
            {key: 'MkEdit_입력표_실거래가_총액', value: '실거래가격_총액'},
            {key: 'MkEdit_입력표_실거래가_단가_M2', value: '실거래가격_단가_M2'},
            {key: 'MkEdit_입력표_실거래가_단가_평', value: '실거래가격_단가_평'},
            {key: 'MkEdit_입력표_기준시가_총액', value: '기준시가_총액'},
            {key: 'MkEdit_입력표_기준시가_단가_M2', value: '기준시가_단가_M2'},
            {key: 'MkEdit_입력표_기준시가_단가_평', value: '기준시가_단가_평'},
            {key: 'MkEdit_입력표_담보제공_전용면적', value: '담보제공비율_등기부상전용면적'},
            {key: 'MkEdit_입력표_담보제공_분자', value: '담보제공비율_분자'},
            {key: 'MkEdit_입력표_담보제공_분모', value: '담보제공비율_분모'},
            {key: 'MkEdit_입력표_담보제공_비율', value: '담보제공비율_비율'},
            {key: 'MkEdit_입력표_담보제공_제공면적', value: '담보제공비율_담보제공면적'},
            {key: 'MkEdit_입력표_담보제공_사유', value: '담보제공비율_사유'},
            {key: 'Combo_입지특성_도로조건', value: '오피스텔_상가_도로조건'},
            {key: 'Combo_입력표_바닥난방', value: '오피스텔_바닥난방'},
            {key: 'Combo_입력표_용도', value: '오피스텔_용도'},
            // {key: 'Combo_배당표_가임대보증금적용대상', value: '가임대보증금적용지역'},
        ]);
        GetZoonData('Q_11_입력표_집합건물').GetRow(0, [
            {key: 'MkEdit_평가_담보_전용면적', value: '담보제공비율_등기부상전용면적'},
            {key: 'MkEdit_평가_담보_분자', value: '담보제공비율_분자'},
            {key: 'MkEdit_평가_담보_분모', value: '담보제공비율_분모'},
            {key: 'MkEdit_평가_담보_비율', value: '담보제공비율_비율'},
            {key: 'MkEdit_평가_담보_제공면적', value: '담보제공비율_담보제공면적'},
            {key: 'MkEdit_보정표_전유부분면적', value: '집합건물_전유면적_M2'},
            {key: 'MkEdit_보정표_건축물의경과년도', value: '집합건물_경과년도'},
        ]);
        GetZoonData('Q_12_입력표_규제의표시').GetRow(0, [
            {key: 'Edit_입력표_국토의계획', value: '국토계획'},
            {key: 'Edit_입력표_다른법률등', value: '다른법률'},
            {key: 'Edit_입력표_시행령부칙', value: '시행령부칙'},
            {key: 'Edit_입력표_토지이용규제', value: '토지이용규제'},
        ]);
        GetZoonData('Q_감정가_00_본건_입지특성').GetRow(0, [
            {key: 'Combo_입지특성_도로계통성', value: 'LOC_ROAD_SYSTEM'},
            {key: 'Combo_입지특성_상업시설접근성', value: 'LOC_BUSI_ACCESS'},
            {key: 'Combo_입지특성_공공시설접근성', value: 'LOC_PUB_ACCESS'},
            {key: 'Combo_입지특성_가격동향', value: 'MARKETABLE_PRICE'},
            {key: 'Edit_입지특성_주요혐오시설', value: 'LOC_HATE_FACILITY_YN'},
            {key: 'Edit_입지특성_인근개발계획', value: 'LOC_DEVELOP'},
        ]);

        GetZoonData('Q_20_입력표_낙찰가율보정표').GetRow(0, [
            {key: 'Combo_보정표_전유부분의면적', value: '오피스텔_면적'},
            {key: 'Combo_보정표_입지조건', value: '오피스텔_입지조건'},
            {key: 'Combo_보정표_전유부분의위치', value: '오피스텔_위치'},
            {key: 'Combo_보정표_건축물경과년도', value: '오피스텔_경과년도'},
            {key: 'Combo_보정표_점유자의권리형태', value: '점유자의권리형태'},
            {key: 'MkEdit_보정표_전유부분면적_적용율', value: '오피스텔_면적_적용률'},
            {key: 'MkEdit_보정표_입지조건_적용율', value: '오피스텔_입지조건_적용률'},
            {key: 'MkEdit_보정표_전유부분위치_적용율', value: '오피스텔_위치_적용률'},
            {key: 'MkEdit_보정표_건축물의경과년도_적용율', value: '오피스텔_경과년도_적용률'},
            {key: 'MkEdit_보정표_점유자의권리형태_적용율', value: '점유자의권리형태_적용률'},
            {key: 'MkEdit_보정표_당해지역낙찰가율', value: '당해지역낙찰가율'},
            {key: 'MkEdit_보정표_유사부동산낙찰가율', value: '유사부동산낙찰가율'},
            {key: 'MkEdit_보정표_기준낙찰가율', value: '기준낙찰가율'},
            {key: 'MkEdit_보정표_적용할낙찰가율', value: '적용할낙찰가율'},
            {key: 'MkEdit_보정표_평가가격', value: '평가가격'},
            {key: 'MkEdit_보정표_최저입찰가', value: '제1차예상최저입찰가'},
            {key: 'MkEdit_보정표_예상낙찰가', value: '예상낙찰가'},
        ]);
        GetZoonData('Q_감정가_09_감정평가').GetRow(0, [
            {key: 'MkEdit_평가_가격_최저_총액', value: '가격_최저가격'},
            {key: 'MkEdit_평가_가격_최저_단가', value: '가격_최저가격_단가'},
            {key: 'MkEdit_평가_가격_최고_총액', value: '가격_최고가격'},
            {key: 'MkEdit_평가_가격_최고_단가', value: '가격_최고가격_단가'},
            {key: 'MkEdit_평가_가격_비율', value: '가격_비율'},
            {key: 'MkEdit_평가_경매_최저_총액', value: '경매_최저가격'},
            {key: 'MkEdit_평가_경매_최저_단가', value: '경매_최저가격_단가'},
            {key: 'MkEdit_평가_경매_최고_총액', value: '경매_최고가격'},
            {key: 'MkEdit_평가_경매_최고_단가', value: '경매_최고가격_단가'},
            {key: 'MkEdit_평가_경매_비율', value: '경매_비율'},
            {key: 'MkEdit_평가_결정가격_총액', value: '결정가격'},
            {key: 'MkEdit_평가_결정가격_단가', value: '결정가격_단가'},
            {key: 'MkEdit_평가_인테리어_평형_평', value: '인테리어_면적_평'},
            {key: 'MkEdit_평가_인테리어_평형_M2', value: '인테리어_면적'},
            {key: 'MkEdit_평가_인테리어_보수단가', value: '인테리어_단가'},
            {key: 'MkEdit_평가_인테리어_보수금액', value: '인테리어_금액'},
            {key: 'MkEdit_평가_평가가격_총액', value: '평가가격'},
            {key: 'MkEdit_평가_평가가격_단가', value: '평가가격_단가'},
            {key: 'MkEdit_평가_담보_평가가격', value: '평가가격'},
            {key: 'MkEdit_평가_담보_최종평가가격', value: '최종평가가격'},
            {key: 'MkEdit_평가_본건_최저_총액', value: '본건_최저가격'},
            {key: 'MkEdit_평가_본건_최저_단가', value: '본건_최저가격_단가'},
            {key: 'MkEdit_평가_본건_최고_총액', value: '본건_최고가격'},
            {key: 'MkEdit_평가_본건_최고_단가', value: '본건_최고가격_단가'},
            {key: 'MkEdit_평가_본건_비율', value: '본건_비율'},
            {key: 'Combo_평가_인테리어단가', value: '인테리어_단가_코드'},
        ]);
    }

    if (GetString('_권한') == "I") {
        SetValue('Edit_감정자사번', GetValue('_사원번호'));
        SetValue('Edit_감정자', GetString('_부서명') + "  " + GetString('_직위') + "  " + GetString('_사원명'));
    }

    if (isEmpty(GetValue('MkEdit_감정일')) || (GetString('MkEdit_감정일')) == "00000000") {
        SetValue('MkEdit_감정일', Now());
    }

    if (match(PageType.집합_오피스텔)) {
        MC_102_전유부분의위치찾기();
    }

    MC_002_DBGrid_본건_로딩시EditFlag값변경();
    RunQuery('Q_문서관리_사진', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_문서관리_관련문서', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });

    if (match(PageType.집합_오피스텔)) {
        RunQuery('Q_공통보고서_트리', {});
        // BreakMacro...
    }
}

function MC_003_계산_잔가율() {
    //-- 변수 Clear
    SetValue('02_총내용년수', 0);
    SetValue('02_경과년수', 0);
    SetValue('02_잔존내용년수', 0);
    SetValue('02_잔가율', 0);


    if (GetString('02_잔가율구분') == "입력표") {
        SetValue('02_총내용년수', GetValue('MkEdit_입력표_내용연수'));
        SetValue('02_경과년수', GetValue('MkEdit_입력표_건축년도_경과'));
    } else if (GetString('02_잔가율구분') == "비준_사례") {
        SetValue('02_총내용년수', GetValue('감정가_비준_내용년수'));
        SetValue('02_경과년수', GetValue('감정가_비준_경과년수'));
    } else if (GetString('02_잔가율구분') == "수익_사례") {
        SetValue('02_총내용년수', GetValue('감정가_수익_내용년수'));
        SetValue('02_경과년수', GetValue('감정가_수익_경과년수'));
    }

    //-- 잔가율 = 잔존내용년수/총내용연수
    if (GetNumber('02_총내용년수') == 0 || GetNumber('02_경과년수') == 0) {
        SetValue('02_잔가율', 0);
    } else {
        SetValue('02_잔존내용년수', GetNumber('02_총내용년수') - GetNumber('02_경과년수'));

        // 잔존내용년수가 - 이면 0.02
        if (GetNumber('02_잔존내용년수') < 0) {
            SetValue('02_잔가율', 0.02);
        } else {
            SetValue('02_잔가율', Round(GetNumber('02_잔존내용년수') / GetNumber('02_총내용년수'), 2));
        }
        SetValue('02_잔가율', Round(GetNumber('02_잔존내용년수') / GetNumber('02_총내용년수'), 2));
    }

    //-- 해당항목에 Move
    if (GetString('02_잔가율구분') == "입력표") {
        SetValue('MkEdit_입력표_잔가율', GetValue('02_잔가율'));
    } else if (GetString('02_잔가율구분') == "비준_사례") {
        SetValue('MkEdit_비준_잔가율_사례', GetValue('02_잔가율'));
    } else if (GetString('02_잔가율구분') == "수익_사례") {
        SetValue('수익_MKEdit_잔가율_사례', GetValue('02_잔가율'));
    }
}

function MC_101_감정에관한사항_계산_기준시가() {
    if ( GetNumber('MkEdit_입력표_면적합계') > 0 ) {
        SetValue('MkEdit_입력표_기준시가_총액',
            Round(Round(GetNumber('MkEdit_입력표_기준시가_단가_M2') * GetNumber('MkEdit_입력표_면적합계'),0) /1000, 0) * 1000 );
        SetValue('MkEdit_입력표_기준시가_단가_평', Truncate(Truncate(GetNumber('MkEdit_입력표_기준시가_단가_M2')*3.3058,0) /1000, 0) * 1000 );
    } else {
        SetValue('MkEdit_입력표_기준시가_총액',0 );
        SetValue('MkEdit_입력표_기준시가_단가_평', 0);
    }
}

function MC_101_감정에관한사항_계산_실거래가격() {
    if ( GetNumber('MkEdit_입력표_전유면적') > 0 ) {
        SetValue('MkEdit_입력표_실거래가_단가_M2',
            Round(Round(GetNumber('MkEdit_입력표_실거래가_총액') / GetNumber('MkEdit_입력표_전유면적'),0) /1000, 0) * 1000 );
        SetValue('MkEdit_입력표_실거래가_단가_평', GetNumber('MkEdit_입력표_실거래가_단가_M2')*3.3058 );
    } else {
        SetValue('MkEdit_입력표_실거래가_단가_M2', 0);
        SetValue('MkEdit_입력표_실거래가_단가_평', 0);
    }
}

function MC_102_담보제공비율부분_계산및셋팅() {
    SetValue('MkEdit_입력표_담보제공_비율', Round((GetNumber('MkEdit_입력표_담보제공_분자')
        / GetNumber('MkEdit_입력표_담보제공_분모')) * 100,2));
    SetValue('MkEdit_입력표_담보제공_제공면적',  GetNumber('MkEdit_입력표_담보제공_전용면적')
        * (GetNumber('MkEdit_입력표_담보제공_비율') / 100));

    SetValue('MkEdit_평가_담보_전용면적', GetValue('MkEdit_입력표_담보제공_전용면적'));
    SetValue('MkEdit_평가_담보_분자', GetValue('MkEdit_입력표_담보제공_분자'));
    SetValue('MkEdit_평가_담보_분모', GetValue('MkEdit_입력표_담보제공_분모'));
    SetValue('MkEdit_평가_담보_비율', GetValue('MkEdit_입력표_담보제공_비율'));
    SetValue('MkEdit_평가_담보_제공면적', GetValue('MkEdit_입력표_담보제공_제공면적'));

    MC_402_평가액_평가액산정();

    if (match(PageType.집합_오피스텔)) {
        RunButton('Command_적용할낙찰가율');
    }
}
function MC_102_전유부분의위치찾기() {
    SetValue('00_TEMP','000000');
    SetValue('00_TEMP',LPad(GetString('Edit_입력표_지상'),3,"0") + LPad(GetString('Edit_입력표_해당층'),3,"0"));
    RunQuery('Q_00_전유부분의위치_총층수중해당층', {
        '총층수' : GetValue('Edit_입력표_지상'),
    });
    GetZoonData('Q_00_전유부분의위치_총층수중해당층').FindIndex('IDX_입력표_해당층', (row) => {
        return row['CD_CODE'] == GetValue('00_TEMP');
    });
    GetZoonData('Q_00_전유부분의위치_총층수중해당층').GetRow(GetNumber('IDX_입력표_해당층'), [
        { key: 'Edit_보정표_전유부분위치', value: 'CD_DESC1' },
    ]);
}

function MC_200_DBGrid_본건사례_EVENT_선택여부() {
    SetValue('00_TEMP', '');
    GetComponent('DBGrid_본건사례').GetRow(-1, [
        { key: '00_TEMP', value: '선택여부'}
    ]);

    if (GetString('00_TEMP') == 'Y') {
        GetComponent('DBGrid_본건사례').SetRow(0, [
            { key: '선택여부', value: ''}
        ]);
        GetComponent('DBGrid_본건사례').SetRow(1, [
            { key: '선택여부', value: ''}
        ]);
        GetComponent('DBGrid_본건사례').SetRow(2, [
            { key: '선택여부', value: ''}
        ]);
    }

    GetComponent('DBGrid_본건사례').SetRow(-1, [
        { key: '선택여부', value: GetValue('00_TEMP')}
    ]);

}
function MC_200_DBGrid_본건사례_EVENT_해당층() {
    GetComponent('DBGrid_본건사례').GetRow(-1, [
        { key: '감정가_본건_해당층_코드', value: '층수'}
    ]);
    GetZoonData('Q_00_전유부분의위치').FindIndex('감정가_본건_해당층_IDX', (row) => {
        return row['CD_CODE'] == GetString('감정가_본건_해당층_코드');
    });
    GetZoonData('Q_00_전유부분의위치').GetRow(GetNumber('감정가_본건_해당층_IDX'), [
        { key: '감정가_본건_해당층_비준율', value: 'IDX' },
    ]);
    GetComponent('DBGrid_본건사례').SetRow(-1, [
        { key: '층수_비준율', value: GetValue('감정가_본건_해당층_비준율')}
    ]);
}

function MC_200_초기화_Combo_감정가1() {
    GetComponent('Combo_입지특성_도로조건').SetCurSel(-1);
    GetComponent('Combo_입지특성_도로계통성').SetCurSel(-1);
    GetComponent('Combo_입지특성_상업시설접근성').SetCurSel(-1);
    GetComponent('Combo_입지특성_공공시설접근성').SetCurSel(-1);
}

function MC_200_초기화_감정가1_Query() {
    RunQuery('Q_감정가_00_본건_입지특성', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_감정가_01_가격사례', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_감정가_02_경매사례', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });

    if (match(PageType.집합_상업용)) {
        RunQuery('Q_감정가_02_임대사례', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        });
    }
}

function MC_201_DBGrid_가격사례_EVENT_경과년도() {
    GetComponent('DBGrid_가격사례').GetRow(-1, [
        { key: '감정가_가격_건축년도', value: '건축년도'}
    ]);

    if (GetNumber('감정가_가격_건축년도') == 0 || isEmpty(GetValue('감정가_가격_건축년도'))) {
        SetValue('감정가_가격_경과년도', 0);
    } else {
        SetValue('감정가_가격_경과년도', StrToNum(Left(GetString('MkEdit_감정일'), 4)) - GetNumber('감정가_가격_건축년도'));
    }

    GetComponent('DBGrid_가격사례').SetRow(-1, [
        { key: '경과년도', value: GetValue('감정가_가격_경과년도')}
    ]);
}

function MC_201_DBGrid_가격사례_EVENT_구조() {
    GetComponent('DBGrid_가격사례').GetRow(-1, [
        { key: '00_TEMP', value: '구조'}
    ]);

    GetZoonData('Q_00_구조').FindIndex('00_RowIndex', (row) => {
        return row['CD_CODE'] == GetString('00_TEMP');
    });
    GetZoonData('Q_00_구조').GetRow(GetNumber('00_RowIndex'), [
        { key: '00_NUMBER', value: 'NUM_YEAR'}
    ]);

    GetComponent('DBGrid_가격사례').SetRow(-1, [
        { key: '내용년수', value: GetValue('00_NUMBER')}
    ]);
}

function MC_201_DBGrid_가격사례_EVENT_사례가격() {
    GetComponent('DBGrid_가격사례').GetRow(-1, [
        { key: '감정가_가격_전용면적', value: '전용면적'},
        { key: '감정가_가격_조사금액', value: '조사금액'},
    ]);

    if (GetNumber('감정가_가격_전용면적') > 0 ) {
        SetValue('감정가_가격_사례가격',  Round(GetNumber('감정가_가격_조사금액')/GetNumber('감정가_가격_전용면적'), 0) );
    } else {
        SetValue('감정가_가격_사례가격',  0);
    }

    GetComponent('DBGrid_가격사례').SetRow(-1, [
        { key: '사례가격', value: GetValue('감정가_가격_사례가격')}
    ]);
}

function MC_201_DBGrid_가격사례_EVENT_총층수() {
    GetComponent('DBGrid_가격사례').GetRow(-1, [
        { key: '감정가_가격_총층수', value: '총층수'}
    ]);

    SetValue('감정가_가격_해당층_비준율', 0);
    SetValue('감정가_가격_해당층_IDX', -1);
    SetValue('감정가_가격_해당층_코드', '');

    RunQuery('Q_00_전유부분의위치_총층수중해당층', {
        '총층수' : GetValue(''),
    });

    GetComponent('DBGrid_가격사례').SetRow(-1, [
        { key: '층수_비준율', value: GetValue('0')},
        { key: '층수_코드', value: ''},
    ]);
}

function MC_201_DBGrid_가격사례_EVENT_해당층() {
    GetComponent('DBGrid_가격사례').GetRow(-1, [
        { key: '감정가_가격_해당층_코드', value: '층수_코드'}
    ]);
    GetZoonData('Q_00_전유부분의위치').FindIndex('감정가_가격_해당층_IDX', (row) => {
        return row['CD_CODE'] == GetString('감정가_가격_해당층_코드');
    });
    GetZoonData('Q_00_전유부분의위치').GetRow(GetNumber('감정가_가격_해당층_IDX'), [
        { key: '감정가_가격_해당층_비준율', value: 'IDX' },
    ]);
    GetComponent('DBGrid_가격사례').SetRow(-1, [
        { key: '층수_비준율', value: GetValue('감정가_가격_해당층_비준율')}
    ]);
}

function MC_202_DBGrid_경매사례_EVENT_경과년도() {
    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_건축년도', value: '건축년도'}
    ]);

    if (GetNumber('감정가_경매_건축년도') == 0 || isEmpty(GetValue('감정가_경매_건축년도'))) {
        SetValue('감정가_경매_경과년도', 0);
    } else {
        SetValue('감정가_경매_경과년도', StrToNum(Left(GetString('MkEdit_감정일'), 4)) - GetNumber('감정가_경매_건축년도'));
    }

    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '경과년도', value: GetValue('감정가_경매_경과년도')}
    ]);
}

function MC_202_DBGrid_경매사례_EVENT_구조() {
    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '00_TEMP', value: '구조'}
    ]);

    GetZoonData('Q_00_구조').FindIndex('00_RowIndex', (row) => {
        return row['CD_CODE'] == GetString('00_TEMP');
    });
    GetZoonData('Q_00_구조').GetRow(GetNumber('00_RowIndex'), [
        { key: '00_NUMBER', value: 'NUM_YEAR'}
    ]);

    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '내용년수', value: GetValue('00_NUMBER')}
    ]);
}

function MC_202_DBGrid_경매사례_EVENT_사례가격() {
    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_전용면적', value: '전용면적'},
        { key: '감정가_경매_법원감정가', value: '법원감정가'},
        { key: '감정가_경매_낙찰가격', value: '낙찰가격'},
    ]);

    if (GetNumber('감정가_경매_전용면적') > 0) {
        SetValue('감정가_경매_사례가격',  Round(GetNumber('감정가_경매_법원감정가') / GetNumber('감정가_경매_전용면적'), 0));
    } else {
        SetValue('감정가_경매_사례가격',  0);
    }

    if (GetNumber('감정가_경매_낙찰가격') > 0) {
        SetValue('감정가_경매_낙찰가율',  Round((GetNumber('감정가_경매_낙찰가격') / GetNumber('감정가_경매_법원감정가')) * 100, 2));
    } else {
        SetValue('감정가_경매_낙찰가율',  0);
    }

    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '사례가격', value: GetValue('감정가_경매_사례가격')},
        { key: '낙찰가율', value: GetValue('감정가_경매_낙찰가율')},
    ]);
}

function MC_202_DBGrid_경매사례_EVENT_총층수() {
    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_총층수', value: '총층수'}
    ]);

    SetValue('감정가_경매_해당층_비준율', 0);
    SetValue('감정가_경매_해당층_IDX', -1);
    SetValue('감정가_경매_해당층_코드', '');

    RunQuery('Q_00_전유부분의위치_총층수중해당층', {
        '총층수' : GetValue('감정가_경매_총층수'),
    });

    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '층수_비준율', value: GetValue('0')},
        { key: '층수_코드', value: ''}
    ]);
}

function MC_202_DBGrid_경매사례_EVENT_해당층() {
    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_해당층_코드', value: '층수_코드'}
    ]);
    GetZoonData('Q_00_전유부분의위치').FindIndex('감정가_경매_해당층_IDX', (row) => {
        return row['CD_CODE'] == GetString('감정가_경매_해당층_코드');
    });
    GetZoonData('Q_00_전유부분의위치').GetRow(GetNumber('감정가_경매_해당층_IDX'), [
        { key: '감정가_경매_해당층_비준율', value: 'IDX' },
    ]);
    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '층수_비준율', value: GetValue('감정가_경매_해당층_비준율')}
    ]);
}

function MC_203_DBGrid_임대사례_EVENT_경과년도() {
    GetComponent('DBGrid_임대사례').GetRow(-1, [
        { key: '감정가_임대_건축년도', value: '건축년도'}
    ]);

    if (isEmpty(GetValue('감정가_임대_건축년도')) || GetNumber('감정가_임대_건축년도') == 0) {
        SetValue('감정가_임대_경과년도', 0);
    } else {
        SetValue('감정가_임대_경과년도', StrToNum(Left(GetString('MkEdit_감정일'), 4)) - GetNumber('감정가_임대_건축년도'));
    }

    GetComponent('DBGrid_임대사례').SetRow(-1, [
        { key: '경과년도', value: GetValue('감정가_임대_경과년도')}
    ]);
}

function MC_203_DBGrid_임대사례_EVENT_구조() {
    GetComponent('DBGrid_임대사례').GetRow(-1, [
        { key: '00_TEMP', value: '구조'}
    ]);

    GetZoonData('Q_00_구조').FindIndex('00_RowIndex', (row) => {
        return row['CD_CODE'] == GetString('00_TEMP');
    });
    GetZoonData('Q_00_구조').GetRow(GetNumber('00_RowIndex'), [
        { key: '00_NUMBER', value: 'NUM_YEAR'}
    ]);

    GetComponent('DBGrid_임대사례').SetRow(-1, [
        { key: '내용년수', value: GetValue('00_NUMBER')}
    ]);
}

function MC_203_DBGrid_임대사례_EVENT_임대내역계산() {
    GetComponent('DBGrid_임대사례').GetRow(-1, [
        { key: '감정가_임대_전용면적', value: '전용면적'},
        { key: '감정가_임대_보증금', value: '임대_보증금'},
        { key: '감정가_임대_월임대료', value: '임대_월임대료'},
        { key: '감정가_임대_운용이율', value: '임대_운용이율'},
        { key: '감정가_임대_총연간임대료', value: '임대_총연간임대료'},
    ]);

    SetValue('감정가_임대_총연간임대료', (GetNumber('감정가_임대_보증금') * (GetNumber('감정가_임대_운용이율') / 100)) + (GetNumber('감정가_임대_월임대료') * 12));

    if (GetValue('감정가_임대_전용면적') > 0) {
        SetValue('감정가_임대_단위당연간임대료',  Round(GetNumber('감정가_임대_총연간임대료') / GetNumber('감정가_임대_전용면적'), 0));
    } else {
        SetValue('감정가_임대_단위당연간임대료',  0);
    }

    GetComponent('DBGrid_임대사례').SetRow(-1, [
        { key: '임대_총연간임대료', value: GetValue('감정가_임대_총연간임대료')},
        { key: '단위당연간임대료', value: GetValue('감정가_임대_단위당연간임대료')},
    ]);
}

function MC_203_DBGrid_임대사례_EVENT_총층수() {
    GetComponent('DBGrid_임대사례').GetRow(-1, [
        { key: '감정가_임대_총층수', value: '총층수'}
    ]);

    SetValue('감정가_임대_해당층_비준율', 0);
    SetValue('감정가_임대_해당층_IDX', -1);
    SetValue('감정가_임대_해당층_코드', '');

    RunQuery('Q_00_전유부분의위치_총층수중해당층', {
        '총층수' : GetValue('감정가_임대_총층수'),
    });

    GetComponent('DBGrid_임대사례').SetRow(-1, [
        { key: '층수_비준율', value: '0'},
        { key: '층수_코드', value: ''}
    ]);
}

function MC_203_DBGrid_임대사례_EVENT_해당층() {
    GetComponent('DBGrid_임대사례').GetRow(-1, [
        { key: '감정가_임대_해당층_코드', value: '층수_코드'}
    ]);
    GetZoonData('Q_00_전유부분의위치').FindIndex('감정가_경매_해당층_IDX', (row) => {
        return row['CD_CODE'] == GetString('감정가_경매_해당층_코드');
    });
    GetZoonData('Q_00_전유부분의위치').GetRow(GetNumber('감정가_경매_해당층_IDX'), [
        { key: '감정가_임대_해당층_비준율', value: 'IDX' },
    ]);
    GetComponent('DBGrid_임대사례').SetRow(-1, [
        { key: '층수_비준율', value: GetValue('감정가_임대_해당층_비준율')}
    ]);
}

function MC_203_감정가액산출1_페이지호출() {
    if (match(PageType.집합_상업용)) {
        MC_204_감정가액산출1_본건_용도지역_Change();
        GetComponent('DBGrid_본건사례').GetRow(0, [
            { key: '본건_Combo_용도지역', value: '용도지역'}
        ]);
    } else if (match(PageType.집합_오피스텔)) {
        GetComponent('DBGrid_본건사례').GetRow(0, [
            { key: '본건_Combo_용도지역', value: '용도지역'}
        ]);
        SetValue('본건_Combo_도로조건',GetValue('Combo_입력표_도로조건'));
        SetValue('본건_Combo_접근조건',GetValue('Combo_입력표_접근조건'));
        SetValue('본건_Combo_위치',GetValue('Combo_입력표_위치'));
    }
}

function MC_204_DBGrid_본건사례_기본값셋팅() {
    if (GetString('MkEdit_입력표_건축일자') != "00000000") {
        SetValue('01_TEMP', Left(GetString('MkEdit_입력표_건축일자'), 4));
    }

    GetComponent('DBGrid_본건사례').FindIndexArray('00_RowIndex', (target) => {
        return Number(target['사례번호']) < 4;
    });
    GetComponent('DBGrid_본건사례').SetRow(GetNumber('00_RowIndex'), [
        { key: '전용면적', value: GetValue('MkEdit_입력표_전유면적')},
        { key: '위치', value: GetValue('Combo_입력표_위치')},
        { key: '용도지역', value: GetValue('Combo_입력표_용도')},
        { key: '건축년도', value: GetValue('01_TEMP')},
        { key: '경과년도', value: GetValue('MkEdit_입력표_건축년도_경과')},
        { key: '내용년수', value: GetValue('MkEdit_입력표_내용연수')},
        { key: '도로조건', value: GetValue('Combo_입력표_도로조건')},
        { key: '접근조건', value: GetValue('Combo_입력표_접근조건')},
    ]);
}

function MC_204_감정가액산출1_본건_용도지역_Change() {
    SetValue('본건_Combo_도로조건', GetValue('Combo_입력표_도로조건'));
    SetValue('본건_Combo_접근조건', GetValue('Combo_입력표_접근조건'));
    SetValue('본건_Combo_위치', GetValue('Combo_입력표_위치'));

    if (match(PageType.집합_상업용)) {
        SetValue('본건_Formula_경과년도', GetValue('MkEdit_입력표_건축년도_경과'));
    }
}
function MC_300_초기화_감정가2_Query() {
    RunQuery('Q_감정가_03_비준가격', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_감정가_03_비준가격_집계표', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });

    if (match(PageType.집합_상업용)) {
        RunQuery('Q_감정가_04_수익가격', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        });
        RunQuery('Q_감정가_04_수익가격_집계표', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        });
    }
}

function MC_300_초기화_비준가격_항목() {
    GetComponent('Combo_비준_사례구분').SetCurSel(-1);
    GetComponent('Combo_비준_사례번호').SetCurSel(-1);
    GetComponent('Combo_비준_층별_본건').SetCurSel(-1);
    GetComponent('Combo_비준_층별_사례').SetCurSel(-1);
    GetComponent('Combo_비준_위치_본건').SetCurSel(-1);
    GetComponent('Combo_비준_위치_사례').SetCurSel(-1);
    GetComponent('Combo_비준_도로조건_본건').SetCurSel(-1);
    GetComponent('Combo_비준_도로조건_사례').SetCurSel(-1);
    GetComponent('Combo_비준_접근조건_본건').SetCurSel(-1);
    GetComponent('Combo_비준_접근조건_사례').SetCurSel(-1);

    SetValue('Edit_비준_소재지_본건', '');
    SetValue('Edit_비준_소재지_사례', '');
    SetValue('Edit_비준_기타조건_본건', '');
    SetValue('Edit_비준_기타조건_사례', '');

    SetValue('MkEdit_비준_소재지_비교',1);
    SetValue('MkEdit_비준_층별지수_본건',0);
    SetValue('MkEdit_비준_층별지수_사례',0);
    SetValue('MkEdit_비준_층별지수_비교',1);
    SetValue('MkEdit_비준_위치별지수_본건',0);
    SetValue('MkEdit_비준_위치별지수_사례',0);
    SetValue('MkEdit_비준_위치별지수_비교',1);
    SetValue('MkEdit_비준_잔가율_본건',0);
    SetValue('MkEdit_비준_잔가율_사례',0);
    SetValue('MkEdit_비준_잔가율_비교',1);
    SetValue('MkEdit_비준_도로조건지수_비교',1);
    SetValue('MkEdit_비준_접근조건지수_본건',0);
    SetValue('MkEdit_비준_접근조건지수_사례',0);
    SetValue('MkEdit_비준_접근조건지수_비교',1);
    SetValue('MkEdit_비준_기타조건지수_본건',1);
    SetValue('MkEdit_비준_기타조건지수_사례',1);
    SetValue('MkEdit_비준_기타조건지수_비교',1);
    SetValue('MkEdit_비준_요인합계',1);
    SetValue('MkEdit_비준_산정단가',0);
    SetValue('MkEdit_비준_적용단가',0);
    SetValue('MkEdit_비준_가격_본건_일자',GetValue('MkEdit_감정일'));
    SetValue('MkEdit_비준_가격_본건_적용율',1);
    SetValue('MkEdit_비준_가격_사례_적용율',1);
    SetValue('MkEdit_비준_가격_비교',1);
    SetValue('비준_Label_시점_본건_경과일', '');
    SetValue('비준_Label_시점_사례_경과일', '');
    SetValue('MkEdit_비준_사례가격',0);

    if (match(PageType.집합_상업용)) {
        SetValue('MkEdit_비준_가격_사례',0);
        SetValue('MkEdit_비준_가격_사례_일자','00000000');
        SetValue('MkEdit_비준_전용면적',0);
    } else if (match(PageType.집합_오피스텔)) {
        SetValue('MkEdit_비준_가격_사례_일자', '');
    }
}

function MC_301_Combo_사례번호_자료생성_0_가격사례() {
    GetComponent('DBGrid_가격사례').GetRows('', [
        { key: '감정가_비준_사례번호_생성전', value: '사례번호'},
        { key: '감정가_비준_사례번호_생성문자전', value: '사례번호'},
    ]);
    GetComponent('DBGrid_가격사례').GetRowCount('감정가_가격_RowCount');

    SetValue('감정가_가격_RowCount', GetNumber('감정가_가격_RowCount') - 1);
    SetValue('감정가_비준_사례번호_CNT', GetValue('감정가_가격_RowCount'));
}

function MC_301_Combo_사례번호_자료생성_0_경매사례() {
    GetComponent('DBGrid_경매사례').GetRows('', [
        { key: '감정가_비준_사례번호_생성전', value: '사례번호'},
        { key: '감정가_비준_사례번호_생성문자전', value: '사례번호명'},
    ]);
    GetComponent('DBGrid_경매사례').GetRowCount('감정가_경매_RowCount');

    SetValue('감정가_경매_RowCount', GetNumber('감정가_경매_RowCount') - 1);
    SetValue('감정가_비준_사례번호_CNT', GetValue('감정가_경매_RowCount'));
}

function MC_301_Combo_사례번호_자료생성_1() {
    SetValue('감정가_비준_사례번호_생성', '');
    SetValue('감정가_비준_사례번호_생성문자', '');

    for (let i = 0; i <= GetNumber('감정가_비준_사례번호_CNT'); i++) {
        SetValue('i', i);

        MC_301_Combo_사례번호_자료생성_2();
    }
}

function MC_301_Combo_사례번호_자료생성_2() {
    SetValue('감정가_비준_사례번호_생성',  GetValue('감정가_비준_사례번호_생성')
        + NumToStr(GetArray('감정가_비준_사례번호_생성전', GetNumber('i'))) + ';' );

    if (GetString('Combo_비준_사례구분') == "1" ) {
        SetValue('감정가_비준_사례번호_생성문자',  GetValue('감정가_비준_사례번호_생성문자')
            + NumToStr(GetArray('감정가_비준_사례번호_생성전', GetNumber('i'))) + ';' );
    } else {
        SetValue('감정가_비준_사례번호_생성문자',  GetValue('감정가_비준_사례번호_생성문자')
            + GetArray('감정가_비준_사례번호_생성문자전', GetNumber('i')) + ';' );
    }
}

function MC_302_비준가격_Change_1_본건() {
    SetValue('MkEdit_비준_소재지_비교', 1);
    SetValue('MkEdit_비준_층별지수_비교', 1);
    SetValue('MkEdit_비준_위치별지수_비교', 1);
    SetValue('MkEdit_비준_잔가율_비교', 1);
    SetValue('MkEdit_비준_도로조건지수_비교', 1);
    SetValue('MkEdit_비준_접근조건지수_비교', 1);
    SetValue('MkEdit_비준_기타조건지수_비교', 1);
    SetValue('MkEdit_비준_가격_비교', 1);

    SetValue('Combo_비준_층별_본건', GetValue('MkEdit_입력표_층별코드'));
    SetValue('Combo_비준_위치_본건', GetValue('Combo_입력표_위치'));
    SetValue('Combo_비준_도로조건_본건', GetValue('Combo_입력표_도로조건'));
    SetValue('Combo_비준_접근조건_본건', GetValue('Combo_입력표_접근조건'));
    SetValue('Edit_비준_기타조건_본건', GetValue('Edit_입력표_기타조건'));
    SetValue('MkEdit_비준_위치별지수_본건', GetValue('MkEdit_입력표_위치지수'));
    SetValue('MkEdit_비준_접근조건지수_본건', GetValue('MkEdit_입력표_접근조건지수'));
    SetValue('MkEdit_비준_기타조건지수_본건', GetValue('MkEdit_입력표_기타조건_지수'));
    SetValue('MkEdit_비준_잔가율_본건', GetValue('MkEdit_입력표_잔가율'));

    if (match(PageType.집합_상업용)) {
        SetValue('Edit_비준_소재지_본건', GetString('Edit_입력표_소재지1') + " " + GetString('Edit_입력표_지번'));

        GetComponent('DBGrid_본건사례').FindIndex('00_RowIndex', (row) => {
            return row['선택여부'] == 'Y';
        });
        GetComponent('DBGrid_본건사례').GetRow(GetNumber('00_RowIndex'), [
            { key: '00_TEMP', value: '층수'}
        ]);

        SetValue('00_TEMP', Right(GetString('00_TEMP'), 3));

        if (GetString('00_TEMP') == "B02") {
        } else if ( GetString('00_TEMP') == "B01") {
        } else if ( GetNumber('00_TEMP') > 4) {
            SetValue('00_TEMP', "004");
        }

        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {
            return row['층수'] == GetString('00_TEMP');
        });
        GetZoonData('Q_00_층별비교').GetRow(GetNumber('01_TNUM'), [
            { key: 'MkEdit_비준_층별지수_본건', value: 'IDX' },
            { key: 'Combo_비준_층별_본건', value: 'CD_CODE'},
        ]);

    } else if (match(PageType.집합_오피스텔)) {
        SetValue('MkEdit_비준_가격_사례_적용율',1);
        SetValue('MkEdit_비준_가격_본건_일자',GetValue('MkEdit_감정일'));
        SetValue('MkEdit_비준_가격_본건_적용율',1);
        SetValue('Edit_비준_소재지_본건',GetValue('Edit_입력표_소재지1'));
        SetValue('MkEdit_비준_층별지수_본건',GetValue('MkEdit_입력표_층별지수'));
    }

    if (GetNumber('Combo_비준_사례구분') == 1) {
        MC_302_비준가격_Change_2_사례_가격();
    } else if (GetNumber('Combo_비준_사례구분') == 2) {
        MC_302_비준가격_Change_3_사례_경매();
    }

    MC_302_비준가격_Change_4_사례_지수값셋팅();

    SetValue('02_잔가율구분', '비준_사례');

    MC_003_계산_잔가율();
    MC_302_비준가격_Change_5_비교치_계산();
}

function MC_302_비준가격_Change_2_사례_가격() {
    GetComponent('DBGrid_가격사례').FindIndex('감정가_비준_가격사례_IDX', (row) => {
        return row['사례번호'] == GetValue('Combo_비준_사례번호');
    });
    GetComponent('DBGrid_가격사례').GetRow(GetNumber('감정가_비준_가격사례_IDX'), [
        { key: 'Edit_비준_소재지_사례', value: '소재지'},
        { key: 'MkEdit_비준_가격_사례', value: '사례가격'},
        { key: 'Combo_비준_위치_사례', value: '위치'},
        { key: 'Combo_비준_도로조건_사례', value: '도로조건'},
        { key: 'Combo_비준_접근조건_사례', value: '접근조건'},
        { key: 'MkEdit_비준_전용면적', value: '전용면적'},
        { key: '감정가_비준_경과년수', value: '경과년도'},
        { key: '감정가_비준_내용년수', value: '내용년수'},
        { key: '감정가_비준_가격', value: '사례가격'},
        { key: '감정가_비준_층수_비준율', value: '층수_비준율'},
        { key: 'MkEdit_비준_사례가격', value: '사례가격'},
        { key: '00_TEMP', value: '층수_코드'},
        { key: 'MkEdit_비준_층별지수_사례', value: '층수_비준율'},
    ]);

    if (match(PageType.집합_상업용)) {
        SetValue('00_TEMP', Right(GetString('00_TEMP'), 3));

        if (GetString('00_TEMP') == "B02") {
        } else if ( GetString('00_TEMP') == "B01") {
        } else if ( GetNumber('00_TEMP') > 4) {
            SetValue('00_TEMP', "004");
        }

        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {
            return row['층수'] == GetString('00_TEMP');
        });
        GetZoonData('Q_00_층별비교').GetRow(GetNumber('01_TNUM'), [
            { key: 'MkEdit_비준_층별지수_사례', value: 'IDX' },
            { key: 'Combo_비준_층별_사례', value: 'CD_CODE' },
        ]);
    }
}

function MC_302_비준가격_Change_3_사례_경매() {
    GetComponent('DBGrid_경매사례').FindIndex('감정가_비준_경매사례_IDX', (row) => {
        return row['사례번호'] == GetValue('Combo_비준_사례번호');
    });
    GetComponent('DBGrid_경매사례').GetRow(GetNumber('감정가_비준_경매사례_IDX'), [
        { key: 'Edit_비준_소재지_사례', value: '소재지'},
        { key: 'MkEdit_비준_가격_사례', value: '사례가격'},
        { key: 'Combo_비준_위치_사례', value: '위치'},
        { key: 'Combo_비준_도로조건_사례', value: '도로조건'},
        { key: 'Combo_비준_접근조건_사례', value: '접근조건'},
        { key: 'MkEdit_비준_전용면적', value: '전용면적'},
        { key: '감정가_비준_경과년수', value: '경과년도'},
        { key: '감정가_비준_내용년수', value: '내용년수'},
        { key: '감정가_비준_가격', value: '사례가격'},
        { key: '감정가_비준_층수_비준율', value: '층수_비준율'},
        { key: 'MkEdit_비준_사례가격', value: '사례가격'},
        { key: '00_TEMP', value: '층수_코드'},
    ]);

    if (match(PageType.집합_상업용)) {
        SetValue('00_TEMP', Right(GetString('00_TEMP'), 3));

        if (GetString('00_TEMP') == "B02") {
        } else if ( GetString('00_TEMP') == "B01") {
        } else if ( GetNumber('00_TEMP') > 4) {
            SetValue('00_TEMP', "004");
        }

        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {
            return row['층수'] == GetString('00_TEMP');
        });
        GetZoonData('Q_00_층별비교').GetRow(GetNumber('01_TNUM'), [
            { key: 'MkEdit_비준_층별지수_사례', value: 'IDX' },
            { key: 'Combo_비준_층별_사례', value: 'CD_CODE' },
        ]);
    }
}

function MC_302_비준가격_Change_4_사례_지수값셋팅() {
    GetZoonData('Q_00_위치별').FindIndex('감정가_비준_위치별_IDX', (row) => {
        return row['CD_CODE'] == GetString('Combo_비준_위치_사례');
    });
    GetZoonData('Q_00_위치별').GetRow(GetNumber('감정가_비준_위치별_IDX'), [
        { key: 'MkEdit_비준_위치별지수_사례', value: 'IDX' },
    ]);
    GetZoonData('Q_00_접근조건').FindIndex('감정가_비준_접근조건_IDX', (row) => {
        return row['CD_CODE'] == GetString('Combo_비준_접근조건_사례');
    });
    GetZoonData('Q_00_접근조건').GetRow(GetNumber('감정가_비준_접근조건_IDX'), [
        { key: 'MkEdit_비준_접근조건지수_사례', value: 'IDX' },
    ]);

    if (GetNumber('MkEdit_비준_전용면적') == 0) {
        SetValue('MkEdit_비준_가격_사례', 0);
    } else {
        SetValue('MkEdit_비준_가격_사례', GetValue('감정가_비준_가격'));
    }
}

function MC_302_비준가격_Change_5_비교치_계산() {
    SetValue('MkEdit_비준_층별지수_비교', Round(GetNumber('MkEdit_비준_층별지수_본건') / GetNumber('MkEdit_비준_층별지수_사례'), 2));
    SetValue('MkEdit_비준_위치별지수_비교', Round(GetNumber('MkEdit_비준_위치별지수_본건') / GetNumber('MkEdit_비준_위치별지수_사례'), 2));
    SetValue('MkEdit_비준_잔가율_비교', Round(GetNumber('MkEdit_비준_잔가율_본건') / GetNumber('MkEdit_비준_잔가율_사례'), 2));
    SetValue('MkEdit_비준_접근조건지수_비교',  1 + (GetNumber('MkEdit_비준_접근조건지수_본건') - GetNumber('MkEdit_비준_접근조건지수_사례')));
    SetValue('MkEdit_비준_기타조건지수_비교',  Round(GetNumber('MkEdit_비준_기타조건지수_본건') / GetNumber('MkEdit_비준_기타조건지수_사례'), 2));
    SetValue('MkEdit_비준_가격_비교',  GetValue('MkEdit_비준_가격_사례_적용율'));

    if ( GetNumber('MkEdit_비준_가격_비교') == 0 ) {
        SetValue('MkEdit_비준_가격_비교', 1);
    }
    if ( GetNumber('MkEdit_비준_층별지수_비교') == 0 ) {
        SetValue('MkEdit_비준_층별지수_비교', 1);
    }
    if ( GetNumber('MkEdit_비준_위치별지수_비교') == 0 ) {
        SetValue('MkEdit_비준_위치별지수_비교', 1);
    }
    if ( GetNumber('MkEdit_비준_잔가율_비교') == 0 ) {
        SetValue('MkEdit_비준_잔가율_비교', 1);
    }
    if ( GetNumber('MkEdit_비준_도로조건지수_비교') == 0 ) {
        SetValue('MkEdit_비준_도로조건지수_비교',  1);
    }
    if ( GetNumber('MkEdit_비준_접근조건지수_비교')== 0 ) {
        SetValue('MkEdit_비준_접근조건지수_비교',  1);
    }
    if ( GetNumber('MkEdit_비준_기타조건지수_비교') == 0 ) {
        SetValue('MkEdit_비준_기타조건지수_비교',  1);
    }

    SetValue('MkEdit_비준_요인합계',  GetNumber('MkEdit_비준_소재지_비교')
        * GetNumber('MkEdit_비준_가격_비교')
        * GetNumber('MkEdit_비준_층별지수_비교')
        * GetNumber('MkEdit_비준_위치별지수_비교')
        * GetNumber('MkEdit_비준_잔가율_비교')
        * GetNumber('MkEdit_비준_도로조건지수_비교')
        * GetNumber('MkEdit_비준_접근조건지수_비교')
        * GetNumber('MkEdit_비준_기타조건지수_비교'));

    SetValue('MkEdit_비준_산정단가',  Round(GetNumber('MkEdit_비준_요인합계') * GetNumber('MkEdit_비준_사례가격'), 0));
    SetValue('MkEdit_비준_적용단가',  Round(GetNumber('MkEdit_비준_산정단가') / 1000, 0) * 1000 );
    SetValue('MkEdit_비준_환산금액',  Round((GetNumber('MkEdit_비준_적용단가') * GetNumber('MkEdit_입력표_전유면적')) /1000, 0) * 1000 );
}

function MC_303_비준가격_추가시_Grid() {
    GetComponent('DBGrid_비준가격').FindIndex('감정가_비준_현재행', (row) => {

        if ((row['사례구분'] == GetValue('비준_Combo_사례구분')) && (row['사례번호'] == GetValue('비준_Combo_사례번호'))) {
            return true;
        }

        return false;
    });

    GetComponent('DBGrid_비준가격').SetCurSel(GetNumber('감정가_비준_현재행'));

    if (GetValue('감정가_비준_현재행') < 0) {
        MC_303_비준가격_추가시_Grid_Add();
    }
    if (GetValue('감정가_비준_현재행') >= 0) {
        MC_303_비준가격_추가시_Grid_Edit();
    }
}

function MC_303_비준가격_추가시_Grid_Add() {
    GetComponent('DBGrid_비준가격').AddRow({
        '년도' : GetValue('년도'),
        '일련번호' : GetValue('감정순번'),
    });
    GetComponent('DBGrid_비준가격').GetRowCount('감정가_비준_RowCount');

    SetValue('감정가_비준_RowCount', GetNumber('감정가_비준_RowCount') - 1);

    GetComponent('DBGrid_비준가격').SetRow(GetNumber('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('Combo_비준_사례구분')},
        { key: '사례번호', value: GetValue('Combo_비준_사례번호')},
        { key: '전용면적', value: GetValue('MkEdit_비준_전용면적')},
        { key: '소재지_비교치', value: GetValue('MkEdit_비준_소재지_비교')},
        { key: '위치별비교_본건_적용율', value: GetValue('MkEdit_비준_위치별지수_본건')},
        { key: '위치별비교_사례_적용율', value: GetValue('MkEdit_비준_위치별지수_사례')},
        { key: '위치별비교_비교치', value: GetValue('MkEdit_비준_위치별지수_비교')},
        { key: '도로조건_비교치', value: GetValue('MkEdit_비준_도로조건지수_비교')},
        { key: '접근조건_본건_적용율', value: GetValue('MkEdit_비준_접근조건지수_본건')},
        { key: '접근조건_사례_적용율', value: GetValue('MkEdit_비준_접근조건지수_사례')},
        { key: '접근조건_비교치', value: GetValue('MkEdit_비준_접근조건지수_비교')},
        { key: '기타조건_본건_적용율', value: GetValue('MkEdit_비준_기타조건지수_본건')},
        { key: '기타조건_사례_적용율', value: GetValue('MkEdit_비준_기타조건지수_사례')},
        { key: '기타조건_비교치', value: GetValue('MkEdit_비준_기타조건지수_비교')},
        { key: '요인합계', value: GetValue('MkEdit_비준_요인합계')},
        { key: '산정단가', value: GetValue('MkEdit_비준_산정단가')},
        { key: '적용단가', value: GetValue('MkEdit_비준_적용단가')},
        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명')},
        { key: '잔가율비교_비교치', value: GetValue('MkEdit_비준_잔가율_비교')},
        { key: '층별비교_본건', value: GetValue('Combo_비준_층별_본건')},
        { key: '층별비교_사례', value: GetValue('Combo_비준_층별_사례')},
        { key: '층별비교_본건_적용율', value: GetValue('MkEdit_비준_층별지수_본건')},
        { key: '층별비교_사례_적용율', value: GetValue('MkEdit_비준_층별지수_사례')},
        { key: '층별비교_비교치', value: GetValue('MkEdit_비준_층별지수_비교')},
        { key: '사례가격', value: GetValue('MkEdit_비준_사례가격')},
        { key: '가격_본건_일자', value: GetValue('MkEdit_비준_가격_본건_일자')},
        { key: '가격_본건_적용율', value: GetValue('MkEdit_비준_가격_본건_적용율')},
        { key: '가격_사례_일자', value: GetValue('MkEdit_비준_가격_사례_일자')},
        { key: '가격_사례_적용율', value: GetValue('MkEdit_비준_가격_사례_적용율')},
        { key: '가격_비교치', value: GetValue('MkEdit_비준_가격_비교')},
        { key: '기타조건_사례_내용', value: GetValue('Edit_비준_기타조건_사례')},
        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명')},
        { key: '환산금액', value: GetValue('MkEdit_비준_환산금액')},
    ]);

    GetComponent('DBGrid_비준가격집계표').AddRow({
        '년도' : GetValue('년도'),
        '일련번호' : GetValue('감정순번'),
    });

    GetComponent('DBGrid_비준가격집계표').SetRow(GetNumber('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('Combo_비준_사례구분')},
        { key: '사례번호', value: GetValue('Combo_비준_사례번호')},
        { key: '소재지_비교치', value: GetValue('MkEdit_비준_소재지_비교')},
        { key: '층별비교_비교치', value: GetValue('MkEdit_비준_층별지수_비교')},
        { key: '위치별비교_비교치', value: GetValue('MkEdit_비준_위치별지수_비교')},
        { key: '잔가율비교_비교치', value: GetValue('MkEdit_비준_잔가율_비교')},
        { key: '도로조건_비교치', value: GetValue('MkEdit_비준_도로조건지수_비교')},
        { key: '접근조건_비교치', value: GetValue('MkEdit_비준_접근조건지수_비교')},
        { key: '기타조건_비교치', value: GetValue('MkEdit_비준_기타조건지수_비교')},
        { key: '요인합계', value: GetValue('MkEdit_비준_요인합계')},
        { key: '산정단가', value: GetValue('MkEdit_비준_산정단가')},
        { key: '적용단가', value: GetValue('MkEdit_비준_적용단가')},
        { key: '전용면적', value: GetValue('MkEdit_비준_전용면적')},
        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명')},
        { key: '소재지', value: GetValue('Edit_비준_소재지_사례')},
        { key: '가격_비교치', value: GetValue('MkEdit_비준_가격_비교')},
        { key: '사례가격', value: GetValue('MkEdit_비준_사례가격')},
        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명')},
        { key: '환산금액', value: GetValue('MkEdit_비준_환산금액')},
    ]);

    GetComponent('DBGrid_비준가격').SetCurSel(GetNumber('감정가_비준_RowCount'))
    GetComponent('DBGrid_비준가격').SetEditFocus(GetNumber('감정가_비준_RowCount')-1, '사례번호');
}

function MC_303_비준가격_추가시_Grid_Edit() {
    GetComponent('DBGrid_비준가격').GetRowCount('감정가_비준_RowCount');

    SetValue('감정가_비준_RowCount', GetValue('감정가_비준_현재행'));

    GetComponent('DBGrid_비준가격').SetRow(GetNumber('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('Combo_비준_사례구분')},
        { key: '사례번호', value: GetValue('Combo_비준_사례번호')},
        { key: '전용면적', value: GetValue('MkEdit_비준_전용면적')},
        { key: '소재지_비교치', value: GetValue('MkEdit_비준_소재지_비교')},
        { key: '위치별비교_본건_적용율', value: GetValue('MkEdit_비준_위치별지수_본건')},
        { key: '위치별비교_사례_적용율', value: GetValue('MkEdit_비준_위치별지수_사례')},
        { key: '위치별비교_비교치', value: GetValue('MkEdit_비준_위치별지수_비교')},
        { key: '도로조건_비교치', value: GetValue('MkEdit_비준_도로조건지수_비교')},
        { key: '접근조건_본건_적용율', value: GetValue('MkEdit_비준_접근조건지수_본건')},
        { key: '접근조건_사례_적용율', value: GetValue('MkEdit_비준_접근조건지수_사례')},
        { key: '접근조건_비교치', value: GetValue('MkEdit_비준_접근조건지수_비교')},
        { key: '기타조건_본건_적용율', value: GetValue('MkEdit_비준_기타조건지수_본건')},
        { key: '기타조건_사례_적용율', value: GetValue('MkEdit_비준_기타조건지수_사례')},
        { key: '기타조건_비교치', value: GetValue('MkEdit_비준_기타조건지수_비교')},
        { key: '요인합계', value: GetValue('MkEdit_비준_요인합계')},
        { key: '산정단가', value: GetValue('MkEdit_비준_산정단가')},
        { key: '적용단가', value: GetValue('MkEdit_비준_적용단가')},
        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명')},
        { key: '잔가율비교_비교치', value: GetValue('MkEdit_비준_잔가율_비교')},
        { key: '층별비교_본건', value: GetValue('Combo_비준_층별_본건')},
        { key: '층별비교_사례', value: GetValue('Combo_비준_층별_사례')},
        { key: '층별비교_본건_적용율', value: GetValue('MkEdit_비준_층별지수_본건')},
        { key: '층별비교_사례_적용율', value: GetValue('MkEdit_비준_층별지수_사례')},
        { key: '층별비교_비교치', value: GetValue('MkEdit_비준_층별지수_비교')},
        { key: '사례가격', value: GetValue('MkEdit_비준_사례가격')},
        { key: '가격_본건_일자', value: GetValue('MkEdit_비준_가격_본건_일자')},
        { key: '가격_본건_적용율', value: GetValue('MkEdit_비준_가격_본건_적용율')},
        { key: '가격_사례_일자', value: GetValue('MkEdit_비준_가격_사례_일자')},
        { key: '가격_사례_적용율', value: GetValue('MkEdit_비준_가격_사례_적용율')},
        { key: '가격_비교치', value: GetValue('MkEdit_비준_가격_비교')},
        { key: '기타조건_사례_내용', value: GetValue('Edit_비준_기타조건_사례')},
        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명')},
        { key: '환산금액', value: GetValue('MkEdit_비준_환산금액')},
    ]);

    GetComponent('DBGrid_비준가격집계표').SetRow(GetNumber('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('Combo_비준_사례구분')},
        { key: '사례번호', value: GetValue('Combo_비준_사례번호')},
        { key: '소재지_비교치', value: GetValue('MkEdit_비준_소재지_비교')},
        { key: '층별비교_비교치', value: GetValue('MkEdit_비준_층별지수_비교')},
        { key: '위치별비교_비교치', value: GetValue('MkEdit_비준_위치별지수_비교')},
        { key: '잔가율비교_비교치', value: GetValue('MkEdit_비준_잔가율_비교')},
        { key: '도로조건_비교치', value: GetValue('MkEdit_비준_도로조건지수_비교')},
        { key: '접근조건_비교치', value: GetValue('MkEdit_비준_접근조건지수_비교')},
        { key: '기타조건_비교치', value: GetValue('MkEdit_비준_기타조건지수_비교')},
        { key: '요인합계', value: GetValue('MkEdit_비준_요인합계')},
        { key: '산정단가', value: GetValue('MkEdit_비준_산정단가')},
        { key: '적용단가', value: GetValue('MkEdit_비준_적용단가')},
        { key: '전용면적', value: GetValue('MkEdit_비준_전용면적')},
        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명')},
        { key: '소재지', value: GetValue('Edit_비준_소재지_사례')},
        { key: '가격_비교치', value: GetValue('MkEdit_비준_가격_비교')},
        { key: '사례가격', value: GetValue('MkEdit_비준_사례가격')},
        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명')},
        { key: '환산금액', value: GetValue('MkEdit_비준_환산금액')},
    ]);

    GetComponent('DBGrid_비준가격').SetCurSel(GetNumber('감정가_비준_RowCount'));
    GetComponent('DBGrid_비준가격').SetEditFocus(GetNumber('감정가_비준_RowCount')-1, '사례번호');
}

function MC_320_수익가격_초기화_0() {
    GetComponent('수익_Combo_사례구분').SetCurSel(-1);
    MC_320_수익가격_초기화_1_항목();
}

function MC_320_수익가격_초기화_1_항목() {
    GetComponent('수익_Combo_사례번호').SetCurSel(-1);
    GetComponent('수익_Combo_층별_본건').SetCurSel(-1);
    GetComponent('수익_Combo_층별_사례').SetCurSel(-1);
    GetComponent('수익_Combo_위치_본건').SetCurSel(-1);
    GetComponent('수익_Combo_위치_사례').SetCurSel(-1);
    GetComponent('수익_Combo_도로_본건').SetCurSel(-1);
    GetComponent('수익_Combo_도로_사례').SetCurSel(-1);
    GetComponent('수익_Combo_접근_본건').SetCurSel(-1);
    GetComponent('수익_Combo_접근_사례').SetCurSel(-1);
    SetValue('수익_Edit_소재지_본건', '');
    SetValue('수익_Edit_소재지_사례', '');
    SetValue('수익_MKEdit_소재지_비교', 1);
    SetValue('수익_MKEdit_연간임대료', 0);
    SetValue('수익_MKEdit_시점수정_본건', 0);
    SetValue('수익_MKEdit_시점수정_사례', 0);
    SetValue('수익_MKEdit_시점수정_비교', 1);
    SetValue('수익_MKEdit_층별_본건지수', 0);
    SetValue('수익_MKEdit_층별_사례지수', 0);
    SetValue('수익_MKEdit_층별_비교지수', 1);
    SetValue('수익_MKEdit_위치_본건지수', 0);
    SetValue('수익_MKEdit_위치_사례지수', 0);
    SetValue('수익_MKEdit_위치_비교지수', 1);
    SetValue('수익_MKEdit_잔가율_본건', 0);
    SetValue('수익_MKEdit_잔가율_사례', 0);
    SetValue('수익_MKEdit_잔가율_비교', 1);
    SetValue('수익_MKEdit_도로_비교지수', 1);
    SetValue('수익_MKEdit_접근_본건지수', 0);
    SetValue('수익_MKEdit_접근_사례지수', 0);
    SetValue('수익_MKEdit_접근_비교지수', 1);
    SetValue('수익_Edit_기타_본건', '');
    SetValue('수익_Edit_기타_사례', '');
    SetValue('수익_MKEdit_기타_본건지수', 1);
    SetValue('수익_MKEdit_기타_사례지수', 1);
    SetValue('수익_MKEdit_기타_비교지수', 1);
    SetValue('수익_MKEdit_요인합계', 1);
    SetValue('수익_MKEdit_적용단위당임료', 0);
    SetValue('수익_MkEdit_시점_사례_일자', '');
    SetValue('수익_MKEdit_수익단가', 0);
    SetValue('수익_Label_시점_본건_경과일', '');
    SetValue('수익_Label_시점_사례_경과일', '');
    SetValue('수익_MkEdit_시점_본건_일자', GetValue('MkEdit_감정일'));
    SetValue('수익_MkEdit_시점_본건_적용율', 1);
    SetValue('수익_MkEdit_시점_비교', 1);
    SetValue('수익_MkEdit_시점_사례_일자', '00000000');
    SetValue('수익_MkEdit_시점_사례_적용율', 1);
    SetValue('수익_MKEdit_환원이율', 8);
    SetValue('수익_MKEdit_단위당연간임대료_사례', 0);
    SetValue('수익_MKEdit_환산금액', 0);
}

function MC_321_Combo_사례번호_자료생성_0_본건사례() {
    GetComponent('DBGrid_본건사례').GetRows('', [
        { key: '감정가_수익_사례번호_생성전', value: '사례번호'},
        { key: '감정가_수익_사례번호_생성문자전', value: '해당층'},
    ]);
    GetComponent('DBGrid_본건사례').GetRowCount('00_NUMBER');

    SetValue('00_NUMBER', GetNumber('00_NUMBER') - 1);
    SetValue('감정가_수익_사례번호_CNT', GetNumber('00_NUMBER'));
}

function MC_321_Combo_사례번호_자료생성_0_임대사례() {
    GetComponent('DBGrid_임대사례').GetRows('', [
        { key: '감정가_수익_사례번호_생성전', value: '사례번호'},
        { key: '감정가_수익_사례번호_생성문자전', value: '사례번호'},
    ]);
    GetComponent('DBGrid_임대사례').GetRowCount('00_NUMBER');

    SetValue('00_NUMBER', GetNumber('00_NUMBER') - 1);
    SetValue('감정가_수익_사례번호_CNT', GetNumber('00_NUMBER'));
}

function MC_321_Combo_사례번호_자료생성_1() {
    SetValue('감정가_수익_사례번호_생성', '');
    SetValue('감정가_수익_사례번호_생성문자', '');

    for (let i = 0; i <= GetNumber('감정가_수익_사례번호_CNT'); i++) {
        SetValue('i', i);

        MC_321_Combo_사례번호_자료생성_2();
    }
}

function MC_321_Combo_사례번호_자료생성_2() {
    SetValue('감정가_수익_사례번호_생성',  GetValue('감정가_수익_사례번호_생성')
        + NumToStr(GetArray('감정가_수익_사례번호_생성전',GetNumber('i'))) + ';' );
    if ( GetString('수익_Combo_사례구분') == "3" ) {
        SetValue('감정가_수익_사례번호_생성문자',  GetValue('감정가_수익_사례번호_생성문자')
            + GetArray('감정가_수익_사례번호_생성문자전',GetNumber('i')) + ';' );
    } else {
        SetValue('감정가_수익_사례번호_생성문자',  GetValue('감정가_수익_사례번호_생성문자')
            + NumToStr(GetArray('감정가_수익_사례번호_생성전',GetNumber('i'))) + ';' );
    }
}

function MC_322_수익가격_Change_1_본건() {
    SetValue('수익_MKEdit_소재지_비교', 1);
    SetValue('수익_MKEdit_시점수정_비교', 1);
    SetValue('수익_MKEdit_층별_비교지수', 1);
    SetValue('수익_MKEdit_위치_비교지수', 1);
    SetValue('수익_MKEdit_잔가율_비교', 1);
    SetValue('수익_MKEdit_도로_비교지수', 1);
    SetValue('수익_MKEdit_접근_비교지수', 1);
    SetValue('수익_MKEdit_기타_비교지수', 1);
    SetValue('수익_MKEdit_요인합계', 1);

    SetValue('수익_Combo_위치_본건', GetValue('Combo_입력표_위치'));
    SetValue('수익_Combo_도로_본건', GetValue('Combo_입력표_도로조건'));
    SetValue('수익_Combo_접근_본건', GetValue('Combo_입력표_접근조건'));
    SetValue('수익_Edit_기타_본건', GetValue('Edit_입력표_기타조건'));
    SetValue('수익_MKEdit_위치_본건지수', GetValue('MkEdit_입력표_위치지수'));
    SetValue('수익_MKEdit_접근_본건지수', GetValue('MkEdit_입력표_접근조건지수'));
    SetValue('수익_MKEdit_기타_본건지수', GetValue('MkEdit_입력표_기타조건_지수'));
    SetValue('수익_MKEdit_잔가율_본건', GetValue('MkEdit_입력표_잔가율'));

    SetValue('수익_Edit_소재지_본건', GetString('Edit_입력표_소재지1') + " " + GetString('Edit_입력표_지번'));

    GetComponent('DBGrid_본건사례').FindIndex('00_RowIndex', (row) => {
        return row['선택여부'] == 'Y';
    });
    GetComponent('DBGrid_본건사례').GetRow(GetNumber('00_RowIndex'), [
        { key: '00_TEMP', value: '층수'}
    ]);

    SetValue('00_TEMP', Right(GetString('00_TEMP'), 3));

    if (GetString('00_TEMP') == "B02") {
    } else if ( GetString('00_TEMP') == "B01") {
    } else if ( GetNumber('00_TEMP') > 4) {
        SetValue('00_TEMP', "004");
    }

    GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {
        return row['층수'] == GetString('00_TEMP');
    });
    GetZoonData('Q_00_층별비교').GetRow(GetNumber('01_TNUM'), [
        { key: '수익_MKEdit_층별_본건지수', value: 'IDX'},
        { key: '수익_Combo_층별_본건', value: 'CD_CODE'}
    ]);

    if (GetNumber('수익_Combo_사례구분') == 3) {
        MC_322_수익가격_Change_2_사례_본건();
    } else if (GetNumber('수익_Combo_사례구분') == 4) {
        MC_322_수익가격_Change_2_사례_임대();
    }

    if (GetNumber('수익_Combo_사례구분') == 4) {
        MC_322_수익가격_Change_3_사례_지수값셋팅();
    }

    MC_322_수익가격_Change_4_비교치_항목별();

    RunButton('Command_수익_합계계산');
}

function MC_322_수익가격_Change_2_사례_본건() {
    GetComponent('DBGrid_본건사례').FindIndex('감정가_수익_임대사례_IDX', (row) => {
        return row['사례번호'] == GetValue('수익_Combo_사례번호');
    });
    GetComponent('DBGrid_본건사례').GetRow(GetNumber('감정가_수익_임대사례_IDX'), [
        { key: '수익_Combo_층별_사례', value: '층수'},
        { key: '수익_MKEdit_전용면적', value: '전용면적'},
        { key: '수익_MKEdit_단위당연간임대료_사례', value: '단위당연간임대료'},
        { key: '감정가_수익_가격', value: '단위당연간임대료'},
        { key: '감정가_수익_층별_지수', value: '층수_비준율'},
        { key: '00_TEMP', value: '층수'},
    ]);

    SetValue('00_TEMP', Right(GetString('00_TEMP'), 3));

    if (GetString('00_TEMP') == "B02") {
    } else if ( GetString('00_TEMP') == "B01") {
    } else if ( GetNumber('00_TEMP') > 4) {
        SetValue('00_TEMP', "004");
    }

    GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {
        return row['층수'] == GetString('00_TEMP');
    });
    GetZoonData('Q_00_층별비교').GetRow(GetNumber('01_TNUM'), [
        { key: '수익_MKEdit_층별_사례지수', value: 'IDX'},
        { key: '수익_Combo_층별_사례', value: 'CD_CODE'}
    ]);

    SetValue('수익_MKEdit_기타_사례지수', GetValue('수익_MKEdit_기타_본건지수'));
    SetValue('수익_Edit_소재지_사례', GetValue('수익_Edit_소재지_본건'));
    SetValue('수익_Combo_위치_사례', GetValue('수익_Combo_위치_본건'));
    SetValue('수익_Combo_접근_사례', GetValue('수익_Combo_접근_본건'));
    SetValue('수익_Combo_도로_사례', GetValue('수익_Combo_도로_본건'));
    SetValue('수익_MKEdit_위치_사례지수', GetValue('수익_MKEdit_위치_본건지수'));
    SetValue('수익_MKEdit_잔가율_사례', GetValue('수익_MKEdit_잔가율_본건'));
    SetValue('수익_MKEdit_접근_사례지수', GetValue('수익_MKEdit_접근_본건지수'));
    SetValue('수익_MKEdit_위치_비교지수', 1);
    SetValue('수익_MKEdit_접근_비교지수', 1);
    SetValue('수익_MKEdit_기타_비교지수', 1);

}
function MC_322_수익가격_Change_2_사례_임대() {
    GetComponent('DBGrid_임대사례').FindIndex('감정가_수익_임대사례_IDX', (row) => {
        return row['사례번호'] == GetValue('수익_Combo_사례번호');
    });

    GetComponent('DBGrid_임대사례').GetRow(GetNumber('감정가_수익_임대사례_IDX'), [
        { key: '수익_Edit_소재지_사례', value: '소재지'},
        { key: '수익_Combo_층별_사례', value: '층수_코드'},
        { key: '수익_Combo_위치_사례', value: '위치'},
        { key: '수익_Combo_도로_사례', value: '도로조건'},
        { key: '수익_Combo_접근_사례', value: '접근조건'},
        { key: '수익_MKEdit_전용면적', value: '전용면적'},
        { key: '수익_MKEdit_단위당연간임대료_사례', value: '단위당연간임대료'},
        { key: '감정가_수익_경과년수', value: '경과년도'},
        { key: '감정가_수익_내용년수', value: '내용년수'},
        { key: '감정가_수익_가격', value: '단위당연간임대료'},
        { key: '감정가_수익_층별_지수', value: '층수_비준율'},
        { key: '00_TEMP', value: '층수_코드'},
    ]);

    SetValue('00_TEMP', Right(GetString('00_TEMP'), 3));
    if (GetString('00_TEMP') == "B02") {
    } else if ( GetString('00_TEMP') == "B01") {
    } else if ( GetNumber('00_TEMP') > 4) {
        SetValue('00_TEMP', "004");
    }

    GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {
        return row['층수'] == GetString('00_TEMP');
    });
    GetZoonData('Q_00_층별비교').GetRow(GetNumber('01_TNUM'), [
        { key: '수익_MKEdit_층별_사례지수', value: 'IDX'},
        { key: '수익_Combo_층별_사례', value: 'CD_CODE'}
    ]);
}
function MC_322_수익가격_Change_3_사례_지수값셋팅() {
    GetZoonData('Q_00_위치별.FindIndex').FindIndex('감정가_수익_위치별_IDX', (row) => {
        return row['CD_CODE'] == GetString('수익_Combo_위치_사례');
    });
    GetZoonData('Q_00_위치별').GetRow(GetNumber('감정가_수익_위치별_IDX'), [
        { key: '수익_MKEdit_위치_사례지수', value: 'IDX' },
    ]);
    GetZoonData('Q_00_접근조건.FindIndex').FindIndex('감정가_수익_접근조건_IDX', (row) => {
        return row['CD_CODE'] == GetString('수익_Combo_접근_사례');
    });
    GetZoonData('Q_00_접근조건').GetRow();

    SetValue('02_잔가율구분', '수익_사례');

    MC_003_계산_잔가율();
}

function MC_322_수익가격_Change_4_비교치_항목별() {

    if ((GetNumber('수익_MKEdit_층별_본건지수') == 0)
        || (GetNumber('수익_MKEdit_층별_사례지수') == 0)) {
        SetValue('수익_MKEdit_층별_비교지수',  1);
    } else {
        SetValue('수익_MKEdit_층별_비교지수',  Round(GetNumber('수익_MKEdit_층별_본건지수') / GetNumber('수익_MKEdit_층별_사례지수'), 2));
    }

    if ((GetNumber('수익_MKEdit_위치_본건지수') == 0) || (GetNumber('수익_MKEdit_위치_사례지수') == 0)) {
        SetValue('수익_MKEdit_위치_비교지수',  1);
    } else {
        SetValue('수익_MKEdit_위치_비교지수',  Round(GetNumber('수익_MKEdit_위치_본건지수') / GetNumber('수익_MKEdit_위치_사례지수'), 2));
    }

    if ((GetNumber('수익_MKEdit_잔가율_본건') == 0) || (GetNumber('수익_MKEdit_잔가율_사례') == 0)) {
        SetValue('수익_MKEdit_잔가율_비교',  1)
    } else {
        SetValue('수익_MKEdit_잔가율_비교'  , Round(GetNumber('수익_MKEdit_잔가율_본건') / GetNumber('수익_MKEdit_잔가율_사례')  , 2));
    }

    if (GetNumber('수익_MKEdit_도로_비교지수') == 0) {
        SetValue('수익_MKEdit_도로_비교지수',  1);
    }

    if ((GetNumber('수익_MKEdit_접근_본건지수') == 0) || (GetNumber('수익_MKEdit_접근_사례지수') == 0)) {
        SetValue('수익_MKEdit_접근_비교지수',  1);
    } else {
        SetValue('수익_MKEdit_접근_비교지수',  1+(GetNumber('수익_MKEdit_접근_본건지수') - GetNumber('수익_MKEdit_접근_사례지수')));
    }

    if ((GetNumber('수익_MKEdit_기타_본건지수') == 0) || (GetNumber('수익_MKEdit_기타_사례지수') == 0)) {
        SetValue('수익_MKEdit_기타_비교지수',  1);
    } else {
        SetValue('수익_MKEdit_기타_비교지수',  Round(GetNumber('수익_MKEdit_기타_본건지수') / GetNumber('수익_MKEdit_기타_사례지수'), 2));
    }
}

function MC_323_수익가격_추가시_Grid() {
    SetValue('감정가_수익_현재행', 0);

    GetComponent('DBGrid_수익가격').FindIndex('감정가_수익_현재행', (row) => {
        return row["사례구분"] == GetValue('수익_Combo_사례구분')
            || row["사례번호"] == GetValue('수익_Combo_사례번호');
    });

    GetComponent('DBGrid_수익가격').SetCurSel(GetNumber('감정가_수익_현재행'));

    if (GetNumber('감정가_수익_현재행') < 0) {
        MC_323_수익가격_추가시_Grid_Add();
    } else {
        MC_323_수익가격_추가시_Grid_Edit();
    }

    GetComponent('DBGrid_수익가격').SetCurSel(GetNumber('감정가_수익_RowCount'));
    GetComponent('DBGrid_수익가격').SetEditFocus(GetNumber('감정가_수익_RowCount')-1, '사례번호');
    GetComponent('DBGrid_수익가격집계표').SetCurSel(GetNumber('감정가_수익_RowCount'));
    GetComponent('DBGrid_수익가격집계표').SetEditFocus(GetNumber('감정가_수익_RowCount')-1, '사례번호');

}
function MC_323_수익가격_추가시_Grid_Add() {
    GetComponent('DBGrid_수익가격').AddRow({
        '년도' : GetValue('년도'),
        '일련번호' : GetValue('감정순번'),
    });

    GetComponent('DBGrid_수익가격').GetRowCount('감정가_수익_RowCount');

    SetValue('감정가_수익_RowCount', GetNumber('감정가_수익_RowCount') - 1);

    GetComponent('DBGrid_수익가격').SetRow(GetNumber('감정가_수익_RowCount'), [
        { key: '사례번호', value: GetValue('수익_Combo_사례번호')},
        { key: '단위당연간임대료', value: GetValue('수익_MKEdit_단위당연간임대료_사례')},
        { key: '전용면적', value: GetValue('수익_MKEdit_전용면적')},
        { key: '소재지_비교치', value: GetValue('수익_MKEdit_소재지_비교')},
        { key: '위치별비교_본건_적용율', value: GetValue('수익_MKEdit_위치_본건지수')},
        { key: '위치별비교_사례_적용율', value: GetValue('수익_MKEdit_위치_사례지수')},
        { key: '위치별비교_비교치', value: GetValue('수익_MKEdit_위치_비교지수')},
        { key: '도로조건_본건_적용율', value: GetValue('수익_MKEdit_도로_본건지수')},
        { key: '도로조건_사례_적용율', value: GetValue('수익_MKEdit_도로_사례지수')},
        { key: '도로조건_비교치', value: GetValue('수익_MKEdit_도로_비교지수')},
        { key: '접근조건_본건_적용율', value: GetValue('수익_MKEdit_접근_본건지수')},
        { key: '접근조건_사례_적용율', value: GetValue('수익_MKEdit_접근_사례지수')},
        { key: '접근조건_비교치', value: GetValue('수익_MKEdit_접근_비교지수')},
        { key: '기타조건_본건_적용율', value: GetValue('수익_MKEdit_기타_본건지수')},
        { key: '기타조건_사례_적용율', value: GetValue('수익_MKEdit_기타_사례지수')},
        { key: '기타조건_비교치', value: GetValue('수익_MKEdit_기타_비교지수')},
        { key: '요인합계', value: GetValue('수익_MKEdit_요인합계')},
        { key: '적용단위당임료', value: GetValue('수익_MKEdit_적용단위당임료')},
        { key: '환원이율', value: GetValue('수익_MKEdit_환원이율')},
        { key: '수익단가_평', value: GetValue('수익_MKEdit_수익단가')},
        { key: '층별비교_본건', value: GetValue('수익_Combo_층별_본건')},
        { key: '층별비교_사례', value: GetValue('수익_Combo_층별_사례')},
        { key: '층별비교_본건_적용율', value: GetValue('수익_MKEdit_층별_본건지수')},
        { key: '층별비교_사례_적용율', value: GetValue('수익_MKEdit_층별_사례지수')},
        { key: '층별비교_비교치', value: GetValue('수익_MKEdit_층별_비교지수')},
        { key: '잔가율비교_비교치', value: GetValue('수익_MKEdit_잔가율_비교')},
        { key: '시점_본건_일자', value: GetValue('수익_MkEdit_시점_본건_일자')},
        { key: '시점_본건_적용율', value: GetValue('수익_MkEdit_시점_본건_적용율')},
        { key: '시점_사례_일자', value: GetValue('수익_MkEdit_시점_사례_일자')},
        { key: '시점_사례_적용율', value: GetValue('수익_MkEdit_시점_사례_적용율')},
        { key: '시점_비교치', value: GetValue('수익_MkEdit_시점_비교')},
        { key: '사례구분', value: GetValue('수익_Combo_사례구분')},
        { key: '사례구분명', value: GetValue('감정가_수익_사례구분명')},
        { key: '사례번호명', value: GetValue('감정가_수익_사례번호명')},
        { key: '환산금액', value: GetValue('수익_MKEdit_환산금액')},
        { key: '기타조건_사례', value: GetValue('수익_Edit_기타_사례')},
    ]);

    GetComponent('DBGrid_수익가격집계표').AddRow({
        '년도' : GetValue('년도'),
        '일련번호' : GetValue('감정순번'),
    });
    GetComponent('DBGrid_수익가격집계표').SetRow(GetNumber('감정가_수익_RowCount'), [
        { key: '사례번호', value: GetValue('수익_Combo_사례번호')},
        { key: '소재지_비교치', value: GetValue('수익_MKEdit_소재지_비교')},
        { key: '단위당연간임대료_사례', value: GetValue('수익_MKEdit_단위당연간임대료_사례')},
        { key: '시점수정_비교치', value: GetValue('수익_MkEdit_시점_비교')},
        { key: '층별비교_비교치', value: GetValue('수익_MKEdit_층별_비교지수')},
        { key: '위치별비교_비교치', value: GetValue('수익_MKEdit_위치_비교지수')},
        { key: '잔가율비교_비교치', value: GetValue('수익_MKEdit_잔가율_비교')},
        { key: '도로조건_비교치', value: GetValue('수익_MKEdit_도로_비교지수')},
        { key: '접근조건_비교치', value: GetValue('수익_MKEdit_접근_비교지수')},
        { key: '기타조건_비교치', value: GetValue('수익_MKEdit_기타_비교지수')},
        { key: '요인합계', value: GetValue('수익_MKEdit_요인합계')},
        { key: '적용단위당임료', value: GetValue('수익_MKEdit_적용단위당임료')},
        { key: '환원이율', value: GetValue('수익_MKEdit_환원이율')},
        { key: '수익단가', value: GetValue('수익_MKEdit_수익단가')},
        { key: '소재지', value: GetValue('수익_Edit_소재지_사례')},
        { key: '사례구분', value: GetValue('수익_Combo_사례구분')},
        { key: '사례구분명', value: GetValue('감정가_수익_사례구분명')},
        { key: '사례번호명', value: GetValue('감정가_수익_사례번호명')},
        { key: '환산금액', value: GetValue('수익_MKEdit_환산금액')},
    ]);
}

function MC_323_수익가격_추가시_Grid_Edit() {
    GetComponent('DBGrid_수익가격').GetRowCount('감정가_수익_RowCount');
    SetValue('감정가_수익_RowCount', GetValue('감정가_수익_현재행'));
    GetComponent('DBGrid_수익가격').SetRow(GetNumber('감정가_수익_RowCount'), [
        { key: '사례번호', value: GetValue('수익_Combo_사례번호')},
        { key: '단위당연간임대료', value: GetValue('수익_MKEdit_단위당연간임대료_사례')},
        { key: '전용면적', value: GetValue('수익_MKEdit_전용면적')},
        { key: '소재지_비교치', value: GetValue('수익_MKEdit_소재지_비교')},
        { key: '위치별비교_본건_적용율', value: GetValue('수익_MKEdit_위치_본건지수')},
        { key: '위치별비교_사례_적용율', value: GetValue('수익_MKEdit_위치_사례지수')},
        { key: '위치별비교_비교치', value: GetValue('수익_MKEdit_위치_비교지수')},
        { key: '도로조건_본건_적용율', value: GetValue('수익_MKEdit_도로_본건지수')},
        { key: '도로조건_사례_적용율', value: GetValue('수익_MKEdit_도로_사례지수')},
        { key: '도로조건_비교치', value: GetValue('수익_MKEdit_도로_비교지수')},
        { key: '접근조건_본건_적용율', value: GetValue('수익_MKEdit_접근_본건지수')},
        { key: '접근조건_사례_적용율', value: GetValue('수익_MKEdit_접근_사례지수')},
        { key: '접근조건_비교치', value: GetValue('수익_MKEdit_접근_비교지수')},
        { key: '기타조건_본건_적용율', value: GetValue('수익_MKEdit_기타_본건지수')},
        { key: '기타조건_사례_적용율', value: GetValue('수익_MKEdit_기타_사례지수')},
        { key: '기타조건_비교치', value: GetValue('수익_MKEdit_기타_비교지수')},
        { key: '요인합계', value: GetValue('수익_MKEdit_요인합계')},
        { key: '적용단위당임료', value: GetValue('수익_MKEdit_적용단위당임료')},
        { key: '환원이율', value: GetValue('수익_MKEdit_환원이율')},
        { key: '수익단가_평', value: GetValue('수익_MKEdit_수익단가')},
        { key: '층별비교_본건', value: GetValue('수익_Combo_층별_본건')},
        { key: '층별비교_사례', value: GetValue('수익_Combo_층별_사례')},
        { key: '층별비교_본건_적용율', value: GetValue('수익_MKEdit_층별_본건지수')},
        { key: '층별비교_사례_적용율', value: GetValue('수익_MKEdit_층별_사례지수')},
        { key: '층별비교_비교치', value: GetValue('수익_MKEdit_층별_비교지수')},
        { key: '잔가율비교_비교치', value: GetValue('수익_MKEdit_잔가율_비교')},
        { key: '시점_본건_일자', value: GetValue('수익_MkEdit_시점_본건_일자')},
        { key: '시점_본건_적용율', value: GetValue('수익_MkEdit_시점_본건_적용율')},
        { key: '시점_사례_일자', value: GetValue('수익_MkEdit_시점_사례_일자')},
        { key: '시점_사례_적용율', value: GetValue('수익_MkEdit_시점_사례_적용율')},
        { key: '시점_비교치', value: GetValue('수익_MkEdit_시점_비교')},
        { key: '사례구분', value: GetValue('수익_Combo_사례구분')},
        { key: '사례구분명', value: GetValue('감정가_수익_사례구분명')},
        { key: '사례번호명', value: GetValue('감정가_수익_사례번호명')},
        { key: '환산금액', value: GetValue('수익_MKEdit_환산금액')},
        { key: '기타조건_사례', value: GetValue('수익_Edit_기타_사례')},
    ]);

    GetComponent('DBGrid_수익가격집계표').SetRow(GetNumber('감정가_수익_RowCount'), [
        { key: '사례번호', value: GetValue('수익_Combo_사례번호')},
        { key: '소재지_비교치', value: GetValue('수익_MKEdit_소재지_비교')},
        { key: '단위당연간임대료_사례', value: GetValue('수익_MKEdit_단위당연간임대료_사례')},
        { key: '시점수정_비교치', value: GetValue('수익_MkEdit_시점_비교')},
        { key: '층별비교_비교치', value: GetValue('수익_MKEdit_층별_비교지수')},
        { key: '위치별비교_비교치', value: GetValue('수익_MKEdit_위치_비교지수')},
        { key: '잔가율비교_비교치', value: GetValue('수익_MKEdit_잔가율_비교')},
        { key: '도로조건_비교치', value: GetValue('수익_MKEdit_도로_비교지수')},
        { key: '접근조건_비교치', value: GetValue('수익_MKEdit_접근_비교지수')},
        { key: '기타조건_비교치', value: GetValue('수익_MKEdit_기타_비교지수')},
        { key: '요인합계', value: GetValue('수익_MKEdit_요인합계')},
        { key: '적용단위당임료', value: GetValue('수익_MKEdit_적용단위당임료')},
        { key: '환원이율', value: GetValue('수익_MKEdit_환원이율')},
        { key: '수익단가', value: GetValue('수익_MKEdit_수익단가')},
        { key: '소재지', value: GetValue('수익_Edit_소재지_사례')},
        { key: '사례구분', value: GetValue('수익_Combo_사례구분')},
        { key: '사례구분명', value: GetValue('감정가_수익_사례구분명')},
        { key: '사례번호명', value: GetValue('감정가_수익_사례번호명')},
        { key: '환산금액', value: GetValue('수익_MKEdit_환산금액')},
    ]);
}

function MC_400_초기화_평가액() {
    SetValue('MkEdit_평가_가격_최저_총액',0);
    SetValue('MkEdit_평가_가격_최저_단가',0);
    SetValue('MkEdit_평가_가격_최고_총액',0);
    SetValue('MkEdit_평가_가격_최고_단가',0);
    SetValue('MkEdit_평가_가격_비율',0);
    SetValue('MkEdit_평가_경매_최저_총액',0);
    SetValue('MkEdit_평가_경매_최저_단가',0);
    SetValue('MkEdit_평가_경매_최고_총액',0);
    SetValue('MkEdit_평가_경매_최고_단가',0);
    SetValue('MkEdit_평가_경매_비율',0);
    SetValue('MkEdit_평가_결정가격_총액',0);
    SetValue('MkEdit_평가_결정가격_단가',0);
    SetValue('MkEdit_평가_인테리어_평형_평',0);
    SetValue('MkEdit_평가_인테리어_평형_M2',0);
    SetValue('MkEdit_평가_인테리어_보수단가',0);
    SetValue('MkEdit_평가_인테리어_보수금액',0);
    SetValue('MkEdit_평가_평가가격_총액',0);
    SetValue('MkEdit_평가_평가가격_단가',0);
    SetValue('MkEdit_평가_담보_전용면적',0);
    SetValue('MkEdit_평가_담보_분자',0);
    SetValue('MkEdit_평가_담보_분모',0);
    SetValue('MkEdit_평가_담보_비율',0);
    SetValue('MkEdit_평가_담보_제공면적',0);
    SetValue('MkEdit_평가_담보_평가가격',0);
    SetValue('MkEdit_평가_담보_최종평가가격',0);
    GetComponent('Combo_평가_인테리어단가').SetCurSel(-1);
}

function MC_401_평가액_최고최저_0() {
    SetValue('MkEdit_평가_본건_비율', 0);
    SetValue('MkEdit_평가_본건_최고_단가', 0);
    SetValue('MkEdit_평가_본건_최고_총액', 0);
    SetValue('MkEdit_평가_본건_최저_단가', 0);
    SetValue('MkEdit_평가_본건_최저_총액', 0);
    SetValue('00_RowIndex', -1);

    GetComponent('DBGrid_본건사례').FindIndex('00_RowIndex', (row) => {
        return row["선택여부"] == 'Y';
    });

    if (GetNumber('00_RowIndex') < 0) {
        SetValue('MkEdit_평가_본건_비율', 0);
        SetValue('MkEdit_평가_본건_최고_단가', 0);
        SetValue('MkEdit_평가_본건_최고_총액', 0);
        SetValue('MkEdit_평가_본건_최저_단가', 0);
        SetValue('MkEdit_평가_본건_최저_총액', 0);
    } else if (GetNumber('00_RowIndex') >= 0) {
        GetComponent('DBGrid_본건사례').GetRow(GetNumber('00_RowIndex'), [
            { key: 'MkEdit_평가_본건_최저_총액', value: '최저가'},
            { key: 'MkEdit_평가_본건_최고_총액', value: '최고가'},
            { key: match(PageType.집합_상업용) ? '01_TNUM' : '00_NUMBER', value: '전용면적'},
        ]);
        SetValue('MkEdit_평가_본건_최저_단가', Round((GetNumber('MkEdit_평가_본건_최저_총액')/GetNumber('00_NUMBER'))/1000, 0)*1000);
        SetValue('MkEdit_평가_본건_최고_단가', Round((GetNumber('MkEdit_평가_본건_최고_총액')/GetNumber('00_NUMBER'))/1000, 0)*1000);

        if ( (GetNumber('MkEdit_평가_본건_최저_총액') == 0) || (GetNumber('MkEdit_평가_본건_최고_총액') == 0) ) {
            SetValue('MkEdit_평가_본건_비율', 0);
        } else {
            SetValue('MkEdit_평가_본건_비율', Round((GetNumber('MkEdit_평가_본건_최저_총액')/GetNumber('MkEdit_평가_본건_최고_총액'))*100,0));
        }
    }

    if (match(PageType.집합_상업용)) {
        SetValue('감정가_평가_LoopCnt', GetArrayCnt('감정가_평가_임시배열11'));
        for(let i=0; i<GetNumber('감정가_평가_LoopCnt'); i+=1) {
            SetValue('i', i);

            MC_401_평가액_최고최저_계산_21_초기화();
        }

        GetComponent('DBGrid_비준가격집계표').GetRows('', [
            { key: '감정가_평가_임시배열11', value: '적용단가'},
        ]);

        SetValue('MkEdit_평가_비준_최저_단가', Min('감정가_평가_임시배열11'));
        SetValue('MkEdit_평가_비준_최고_단가', Max('감정가_평가_임시배열11'));
        SetValue('MkEdit_평가_비준_최저_총액', Round(GetNumber('MkEdit_평가_비준_최저_단가') * GetNumber('MkEdit_입력표_전유면적'),0) );
        SetValue('MkEdit_평가_비준_최고_총액', Round(GetNumber('MkEdit_평가_비준_최고_단가') * GetNumber('MkEdit_입력표_전유면적'),0) );
        SetValue('MkEdit_평가_비준_비율', Round((GetNumber('MkEdit_평가_비준_최저_총액') / GetNumber('MkEdit_평가_비준_최고_총액')) * 100,0));

        SetValue('감정가_평가_LoopCnt', GetArrayCnt('감정가_평가_임시배열11'));
        for (let i = 0; i < GetNumber('감정가_평가_LoopCnt'); i+=1) {
            SetValue('i', i);

            MC_401_평가액_최고최저_계산_21_초기화();
        }

        GetComponent('DBGrid_수익가격집계표').GetRows('', [
            { key: '감정가_평가_임시배열11', value: '수익단가'},
        ]);

        SetValue('MkEdit_평가_수익_최저_단가', Min('감정가_평가_임시배열11'));
        SetValue('MkEdit_평가_수익_최고_단가', Max('감정가_평가_임시배열11'));
        SetValue('MkEdit_평가_수익_최저_총액', Round(GetNumber('MkEdit_평가_수익_최저_단가') * GetNumber('MkEdit_입력표_전유면적'), 0));
        SetValue('MkEdit_평가_수익_최고_총액', Round(GetNumber('MkEdit_평가_수익_최고_단가') * GetNumber('MkEdit_입력표_전유면적'), 0));
        SetValue('MkEdit_평가_수익_비율', Round((GetNumber('MkEdit_평가_수익_최저_총액') / GetNumber('MkEdit_평가_수익_최고_총액')) * 100,0));


    } else if (match(PageType.집합_오피스텔)) {
        EmptyArray('감정가_평가_임시배열31');
        EmptyArray('감정가_평가_임시배열32');
        EmptyArray('감정가_평가_임시배열33');
        EmptyArray('감정가_평가_임시배열21');
        EmptyArray('감정가_평가_임시배열22');
        EmptyArray('감정가_평가_임시배열23');
        EmptyArray('감정가_평가_임시배열11');
        EmptyArray('감정가_평가_임시배열12');
        EmptyArray('감정가_평가_임시배열13');

        GetComponent('DBGrid_비준가격집계표').GetRows('', [
            { key: '감정가_평가_임시배열31', value: '적용단가'},
            { key: '감정가_평가_임시배열32', value: '사례구분'},
            { key: '감정가_평가_임시배열33', value: '환산금액'},
        ]);

        SetValue('감정가_평가_LoopCnt', GetArrayCnt('감정가_평가_임시배열31'));

        for(let i=0; i<GetNumber('감정가_평가_LoopCnt'); i+=1) {
            SetValue('i', i);

            MC_01_평가액_최고최저_0_가격_경매_분리작업();
        }

        SetValue('MkEdit_평가_가격_최저_단가', Min('감정가_평가_임시배열11'));
        SetValue('MkEdit_평가_가격_최고_단가', Max('감정가_평가_임시배열11'));
        SetValue('MkEdit_평가_가격_최저_총액', Min('감정가_평가_임시배열13'));
        SetValue('MkEdit_평가_가격_최고_총액', Max('감정가_평가_임시배열13'));

        SetValue('MkEdit_평가_가격_비율', Round((GetNumber('MkEdit_평가_가격_최저_총액')/GetNumber('MkEdit_평가_가격_최고_총액'))*100,0));



        SetValue('MkEdit_평가_경매_최저_단가', Min('감정가_평가_임시배열21'));
        SetValue('MkEdit_평가_경매_최고_단가', Max('감정가_평가_임시배열21'));
        SetValue('MkEdit_평가_경매_최저_총액', Min('감정가_평가_임시배열23'));
        SetValue('MkEdit_평가_경매_최고_총액', Max('감정가_평가_임시배열23'));

        SetValue('MkEdit_평가_경매_비율', Round((GetNumber('MkEdit_평가_경매_최저_총액')/GetNumber('MkEdit_평가_경매_최고_총액'))*100,0));
    }
    // BreakMacro
}

function MC_01_평가액_최고최저_0_가격_경매_분리작업() {
    if ( GetArray('감정가_평가_임시배열32', GetNumber('i')) == '1') {
        AddArray('감정가_평가_임시배열11', GetArray('감정가_평가_임시배열31',GetNumber('i')) );
        AddArray('감정가_평가_임시배열12', GetArray('감정가_평가_임시배열32',GetNumber('i')) );
        AddArray('감정가_평가_임시배열13', GetArray('감정가_평가_임시배열33',GetNumber('i')) );
    } else {
        AddArray('감정가_평가_임시배열21', GetArray('감정가_평가_임시배열31',GetNumber('i')) );
        AddArray('감정가_평가_임시배열22', GetArray('감정가_평가_임시배열32',GetNumber('i')) );
        AddArray('감정가_평가_임시배열23', GetArray('감정가_평가_임시배열33',GetNumber('i')) );
    }
}

function MC_401_평가액_최고최저_1_본건() {
    GetComponent('DBGrid_본건사례').GetRows('', [
        { key: '감정가_평가_본건_사례금액_배열', value: 'M2당가격'},
        { key: '감정가_평가_본건_전용면적_배열', value: '전용면적'},
        { key: '감정가_평가_본건_조사금액_배열', value: '조사금액'},
    ]);

    GetComponent('DBGrid_본건사례').GetRowCount('00_NUMBER');
    SetValue('감정가_평가_LoopCnt', GetNumber('00_NUMBER') - 1);

    SetValue('감정가_평가_TMP_본건_최고_면적', 0);
    SetValue('감정가_평가_TMP_본건_최고_사례금액', 0);
    SetValue('감정가_평가_TMP_본건_최고_조사금액', 0);
    SetValue('감정가_평가_TMP_본건_최저_면적', 0);
    SetValue('감정가_평가_TMP_본건_최저_사례금액', 0);
    SetValue('감정가_평가_TMP_본건_최저_조사금액', 999999999999);

    for (let i=0; i<=GetNumber('감정가_평가_LoopCnt'); i+=1) {
        SetValue('i', i);

        MC_401_평가액_최고최저_2_본건();
    }

    if ( GetNumber('감정가_평가_TMP_본건_최저_조사금액') == 999999999999 ) {
        SetValue('감정가_평가_TMP_본건_최저_조사금액', 0);
    }

    SetValue('MkEdit_평가_본건_최저_단가', GetValue('감정가_평가_TMP_본건_최저_사례금액'));
    SetValue('MkEdit_평가_본건_최저_총액', GetValue('감정가_평가_TMP_본건_최저_조사금액'));
    SetValue('MkEdit_평가_본건_최고_단가', GetValue('감정가_평가_TMP_본건_최고_사례금액'));
    SetValue('MkEdit_평가_본건_최고_총액', GetValue('감정가_평가_TMP_본건_최고_조사금액'));
// SetValue('MkEdit_평가_본건_최고_총액'), GetValue('감정가_평가_TMP_본건_최고_사례금액')
//                                      *GetValue('감정가_평가_TMP_본건_최고_면적'))
    if ( GetValue('MkEdit_평가_본건_최고_총액') > 0 ) {
        SetValue('MkEdit_평가_본건_비율',
            Round((GetNumber('MkEdit_평가_본건_최저_총액') / GetNumber('MkEdit_평가_본건_최고_총액'))*100, 2) );
    } else {
        SetValue('MkEdit_평가_본건_비율', 0);
    }
}

function MC_401_평가액_최고최저_2_본건() {
    // 본건은 총 3건의 자료인데 입력하지 않은 조사금액이 있다면 최저금액은 ZEROS(0)가 된다
    // 입력하지 않은 조사금액을 포함할지 여부를 결정해야 한다.
    if ( GetArray('감정가_평가_본건_조사금액_배열',GetNumber('i')) >= 0 ) {
        if ( GetValue('감정가_평가_TMP_본건_최고_조사금액') < GetArray('감정가_평가_본건_조사금액_배열',GetNumber('i')) ) {
            SetValue('감정가_평가_TMP_본건_최고_조사금액', GetArray('감정가_평가_본건_조사금액_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_본건_최고_사례금액', GetArray('감정가_평가_본건_사례금액_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_본건_최고_면적', GetArray('감정가_평가_본건_전용면적_배열',GetNumber('i')) );
        }

        if ( GetValue('감정가_평가_TMP_본건_최저_조사금액') > GetArray('감정가_평가_본건_조사금액_배열',GetNumber('i')) ) {
            SetValue('감정가_평가_TMP_본건_최저_조사금액', GetArray('감정가_평가_본건_조사금액_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_본건_최저_사례금액', GetArray('감정가_평가_본건_사례금액_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_본건_최저_면적', GetArray('감정가_평가_본건_전용면적_배열',GetNumber('i')) );
        }
    }
}

function MC_401_평가액_최고최저_3_가격_경매사례() {
    GetComponent('DBGrid_비준가격집계표').GetRows('', [
        { key: '감정가_평가_사례구분_배열', value: '사례구분'},
        { key: '감정가_평가_사례번호_배열', value: '사례번호'},
        { key: '감정가_평가_가격_배열', value: '가격_사례'},
        { key: '감정가_평가_전용면적_배열', value: '전용면적'},
        { key: '감정가_평가_적용단가_배열', value: '적용단가'}
    ]);

    GetComponent('DBGrid_본건사례').GetRowCount('00_NUMBER');

    SetValue('감정가_평가_LoopCnt', GetNumber('00_NUMBER') - 1);
    SetValue('감정가_평가_LoopCnt', GetValue('감정가_비준_RowCount'));

    SetValue('감정가_평가_TMP_가격_최고_단가', 0);
    SetValue('감정가_평가_TMP_가격_최고_면적', 0);
    SetValue('감정가_평가_TMP_가격_최저_단가', 999999999999);
    SetValue('감정가_평가_TMP_가격_최저_면적', 0);
    SetValue('감정가_평가_TMP_경매_최고_단가', 0);
    SetValue('감정가_평가_TMP_경매_최고_면적', 0);
    SetValue('감정가_평가_TMP_경매_최저_단가', 999999999999);
    SetValue('감정가_평가_TMP_경매_최저_면적', 0);

    for (let i=0; i<=GetNumber('감정가_평가_LoopCnt'); i+=1) {
        SetValue('i', i);

        MC_401_평가액_최고최저_4_가격_경매사례();
    }

    if ( GetNumber('감정가_평가_TMP_가격_최저_단가') == 999999999999 ) {
        SetValue('감정가_평가_TMP_가격_최저_단가', 0);
    }
    if ( GetNumber('감정가_평가_TMP_경매_최저_단가') == 999999999999 ) {
        SetValue('감정가_평가_TMP_경매_최저_단가', 0);
    }

    SetValue('MkEdit_평가_가격_최저_단가', GetValue('감정가_평가_TMP_가격_최저_단가'));
    SetValue('MkEdit_평가_가격_최저_총액', GetNumber('감정가_평가_TMP_가격_최저_단가') * GetNumber('감정가_평가_TMP_가격_최저_면적'));
    SetValue('MkEdit_평가_가격_최고_단가', GetValue('감정가_평가_TMP_가격_최고_단가'));
    SetValue('MkEdit_평가_가격_최고_총액',
        GetNumber('감정가_평가_TMP_가격_최고_단가') * GetNumber('감정가_평가_TMP_가격_최고_면적'));
    if ( GetValue('MkEdit_평가_가격_최고_총액') > 0 ) {
        SetValue('MkEdit_평가_가격_비율',
            Round((GetNumber('MkEdit_평가_가격_최저_총액') / GetNumber('MkEdit_평가_가격_최고_총액'))*100, 2));
    } else {
        SetValue('MkEdit_평가_가격_비율', 0);
    }

    SetValue('MkEdit_평가_경매_최저_단가', GetValue('감정가_평가_TMP_경매_최저_단가'));
    SetValue('MkEdit_평가_경매_최저_총액',
        GetNumber('감정가_평가_TMP_경매_최저_단가') * GetNumber('감정가_평가_TMP_경매_최저_면적'));
    SetValue('MkEdit_평가_경매_최고_단가', GetValue('감정가_평가_TMP_경매_최고_단가'));
    SetValue('MkEdit_평가_경매_최고_총액',
        GetNumber('감정가_평가_TMP_경매_최고_단가') * GetNumber('감정가_평가_TMP_경매_최고_면적'));

    if ( GetValue('MkEdit_평가_경매_최고_총액')> 0 ) {
        SetValue('MkEdit_평가_경매_비율',
            Round((GetNumber('MkEdit_평가_경매_최저_총액') / GetNumber('MkEdit_평가_경매_최고_총액'))*100, 2) )
    } else {
        SetValue('MkEdit_평가_경매_비율', 0);
    }

    SetValue('MkEdit_평가_결정가격_단가', GetValue('MkEdit_입력표_실거래가_단가_M2'));

    SetValue('MkEdit_평가_담보_전용면적', GetValue('MkEdit_입력표_담보제공_전용면적'));
    SetValue('MkEdit_평가_담보_분자', GetValue('MkEdit_입력표_담보제공_분자'));
    SetValue('MkEdit_평가_담보_분모', GetValue('MkEdit_입력표_담보제공_분모'));
    SetValue('MkEdit_평가_담보_비율', GetValue('MkEdit_입력표_담보제공_비율'));
    SetValue('MkEdit_평가_담보_제공면적', GetValue('MkEdit_입력표_담보제공_제공면적'));
}

function MC_401_평가액_최고최저_4_가격_경매사례() {
    if ( GetArray('감정가_평가_사례구분_배열',GetString('i')) == "1" ) {
        if ( GetValue('감정가_평가_TMP_가격_최고_단가') < GetArray('감정가_평가_적용단가_배열',GetNumber('i')) ) {
            SetValue('감정가_평가_TMP_가격_최고_단가', GetArray('감정가_평가_적용단가_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_가격_최고_면적', GetArray('감정가_평가_전용면적_배열',GetNumber('i')) );
        }

        if ( GetValue('감정가_평가_TMP_가격_최저_단가') > GetArray('감정가_평가_적용단가_배열',GetNumber('i')) ) {
            SetValue('감정가_평가_TMP_가격_최저_단가', GetArray('감정가_평가_적용단가_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_가격_최저_면적', GetArray('감정가_평가_전용면적_배열',GetNumber('i')) );
        }
    } else if ( GetArray('감정가_평가_사례구분_배열',GetString('i')) == "2" ) {
        if ( GetValue('감정가_평가_TMP_경매_최고_단가') < GetArray('감정가_평가_적용단가_배열',GetNumber('i')) ) {
            SetValue('감정가_평가_TMP_경매_최고_단가', GetArray('감정가_평가_적용단가_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_경매_최고_면적', GetArray('감정가_평가_전용면적_배열',GetNumber('i')) );
        }

        if ( GetValue('감정가_평가_TMP_경매_최저_단가') > GetArray('감정가_평가_적용단가_배열',GetNumber('i')) ) {
            SetValue('감정가_평가_TMP_경매_최저_단가', GetArray('감정가_평가_적용단가_배열',GetNumber('i')) );
            SetValue('감정가_평가_TMP_경매_최저_면적', GetArray('감정가_평가_전용면적_배열',GetNumber('i')) );
        }
    }
}

function MC_401_평가액_최고최저_3_계산() {
    SetValue('감정가_평가_TMP_최고_단가', 0);
    SetValue('감정가_평가_TMP_최고_면적', 0);
    SetValue('감정가_평가_TMP_최저_단가', 999999999999);
    SetValue('감정가_평가_TMP_최저_면적', 0);

    GetComponent('DBGrid_비준가격집계표').GetRows('', [
        { key: '감정가_평가_사례구분_배열', value: '사례구분'},
        { key: '감정가_평가_사례번호_배열', value: '사례번호'},
        { key: '감정가_평가_가격_배열', value: '가격_사례'},
        { key: '감정가_평가_전용면적_배열', value: '전용면적'},
        { key: '감정가_평가_적용단가_배열', value: '적용단가'},
    ]);

    SetValue('감정가_평가_LoopCnt', GetValue('감정가_비준_RowCount'));

    for (let i = 0; i <= GetNumber('감정가_평가_LoopCnt'); i++) {
        SetValue('i', i);

        MC_401_평가액_최고최저_4_계산();
    }

    if (GetNumber('감정가_평가_TMP_최저_단가') == 999999999999) {
        SetValue('감정가_평가_TMP_최저_단가', 0);
    }

    SetValue('MkEdit_평가_비준_최저_단가', GetNumber('감정가_평가_TMP_최저_단가'))
    SetValue('MkEdit_평가_비준_최저_총액', GetNumber('감정가_평가_TMP_최저_단가') * GetNumber('감정가_평가_TMP_최저_면적'));
    SetValue('MkEdit_평가_비준_최고_단가', GetNumber('감정가_평가_TMP_최고_단가'));
    SetValue('MkEdit_평가_비준_최고_총액', GetNumber('감정가_평가_TMP_최고_단가') * GetNumber('감정가_평가_TMP_최고_면적'));

    if (GetNumber('MkEdit_평가_비준_최고_총액') > 0) {
        SetValue('MkEdit_평가_비준_비율', Round((GetNumber('MkEdit_평가_비준_최저_총액') / GetNumber('MkEdit_평가_비준_최고_총액')) * 100, 2));
    } else {
        SetValue('MkEdit_평가_비준_비율', 0);
    }

    SetValue('감정가_평가_TMP_최고_단가', 0);
    SetValue('감정가_평가_TMP_최고_면적', 0);
    SetValue('감정가_평가_TMP_최저_단가', 999999999999);
    SetValue('감정가_평가_TMP_최저_면적', 0);

    GetComponent('DBGrid_수익가격집계표').GetRows('', [
        { key: '감정가_평가_사례번호_배열', value: '사례번호'},
        { key: '감정가_평가_가격_배열', value: '단위당연간임대료_사례'},
        { key: '감정가_평가_전용면적_배열', value: '임대전용면적'},
        { key: '감정가_평가_적용단가_배열', value: '수익단가'},
    ]);

    SetValue('감정가_평가_LoopCnt', GetValue('감정가_수익_RowCount'));

    for (let i = 0; i <= GetNumber('감정가_평가_LoopCnt'); i++) {
        SetValue('i', i);

        MC_401_평가액_최고최저_4_계산();
    }

    if (GetNumber('감정가_평가_TMP_최저_단가') == 999999999999) {
        SetValue('감정가_평가_TMP_최저_단가',  0);
    }

    SetValue('MkEdit_평가_수익_최저_단가',  GetValue('감정가_평가_TMP_최저_단가'));
    SetValue('MkEdit_평가_수익_최저_총액',  GetNumber('감정가_평가_TMP_최저_단가') * GetNumber('감정가_평가_TMP_최저_면적'));
    SetValue('MkEdit_평가_수익_최고_단가',  GetValue('감정가_평가_TMP_최고_단가'));
    SetValue('MkEdit_평가_수익_최고_총액',  GetNumber('감정가_평가_TMP_최고_단가') * GetNumber('감정가_평가_TMP_최고_면적'));

    if (GetNumber('MkEdit_평가_수익_최고_총액') > 0 ) {
        SetValue('MkEdit_평가_수익_비율',  Round((GetNumber('MkEdit_평가_수익_최저_총액') / GetNumber('MkEdit_평가_수익_최고_총액')) * 100, 2) );
    } else {
        SetValue('MkEdit_평가_수익_비율',  0);
    }

    SetValue('MkEdit_평가_결정가격_단가',  GetValue('MkEdit_입력표_실거래가_단가_M2'));
    SetValue('MkEdit_평가_담보_전용면적', GetValue('MkEdit_입력표_담보제공_전용면적'));
    SetValue('MkEdit_평가_담보_분자', GetValue('MkEdit_입력표_담보제공_분자'));
    SetValue('MkEdit_평가_담보_분모', GetValue('MkEdit_입력표_담보제공_분모'));
    SetValue('MkEdit_평가_담보_비율', GetValue('MkEdit_입력표_담보제공_비율'));
    SetValue('MkEdit_평가_담보_제공면적', GetValue('MkEdit_입력표_담보제공_제공면적'));

}

function MC_401_평가액_최고최저_4_계산() {
    if (GetValue('감정가_평가_TMP_최고_단가') < GetArray('감정가_평가_적용단가_배열', GetNumber('i'))) {
        SetValue('감정가_평가_TMP_최고_단가', GetArray('감정가_평가_적용단가_배열', GetNumber('i')) );
        SetValue('감정가_평가_TMP_최고_면적', GetArray('감정가_평가_전용면적_배열', GetNumber('i')) );
    }

    if (GetValue('감정가_평가_TMP_최저_단가') > GetArray('감정가_평가_적용단가_배열', GetNumber('i'))) {
        SetValue('감정가_평가_TMP_최저_단가', GetArray('감정가_평가_적용단가_배열', GetNumber('i')));
        SetValue('감정가_평가_TMP_최저_면적', GetArray('감정가_평가_전용면적_배열', GetNumber('i')));
    }
}

function MC_401_평가액_최고최저_계산_20_초기화() {
    SetValue('감정가_평가_LoopCnt', GetArrayCnt('감정가_평가_임시배열11'));
    for (let i = 0; i < GetNumber('감정가_평가_LoopCnt'); i++) {
        SetValue('i', i);

        MC_401_평가액_최고최저_계산_21_초기화();
    }

    SetValue('감정가_평가_LoopCnt', GetArrayCnt('감정가_평가_임시배열21'));
    for (let i = 0; i < GetNumber('감정가_평가_LoopCnt'); i++) {
        SetValue('i', i);

        MC_401_평가액_최고최저_계산_22_초기화();
    }
}

function MC_401_평가액_최고최저_계산_21_초기화() {
    RemoveArray('감정가_평가_임시배열11',GetNumber('i'));
    RemoveArray('감정가_평가_임시배열12',GetNumber('i'));
    RemoveArray('감정가_평가_임시배열13',GetNumber('i'));
}

function MC_401_평가액_최고최저_계산_22_초기화() {
    RemoveArray('감정가_평가_임시배열21', GetNumber('i'));
    RemoveArray('감정가_평가_임시배열22', GetNumber('i'));
    RemoveArray('감정가_평가_임시배열23', GetNumber('i'));
}

function MC_402_평가액_평가액산정() {
    SetValue('MkEdit_평가_인테리어_보수금액',
        Round((GetNumber('MkEdit_평가_인테리어_보수단가') * GetNumber('MkEdit_평가_인테리어_평형_평'))/1000, 0)*1000);
    SetValue('MkEdit_평가_평가가격_총액',
        Round(GetNumber('MkEdit_평가_결정가격_총액') + GetNumber('MkEdit_평가_인테리어_보수금액'), 0));

    // TODO: 계산방식이 다름
    if (match(PageType.집합_상업용)) {
        SetValue('MkEdit_평가_평가가격_단가', Round((GetNumber('MkEdit_평가_평가가격_총액') / GetNumber('MkEdit_입력표_전유면적')) / 1000, 0) * 1000);
    } else if (match(PageType.집합_오피스텔)) {
        SetValue('MkEdit_평가_평가가격_단가', Round(GetNumber('MkEdit_평가_평가가격_총액') / GetNumber('MkEdit_입력표_전유면적'), 0));
    }

    SetValue('MkEdit_평가_담보_평가가격', GetValue('MkEdit_평가_평가가격_총액'));
    SetValue('MkEdit_평가_담보_최종평가가격',
        Round(GetNumber('MkEdit_평가_담보_평가가격')*(GetValue('MkEdit_평가_담보_비율') / 100), 0));

    SetValue('MkEdit_보정표_평가가격', GetValue('MkEdit_평가_평가가격_총액'));
    SetValue('MkEdit_보정표_최저입찰가', GetValue('MkEdit_평가_담보_최종평가가격'));
    RunButton('Command_적용할낙찰가율');
}

function MC_501_Combo_OnChange_건축물의경과년도() {
    GetZoonData('Q_00_건축물의경과년도').FindIndex('IDX_보정표_건축물의경과년도', (row) => {
        return row['CD_CODE'] == GetString('Combo_보정표_건축물경과년도');
    });
    GetZoonData('Q_00_건축물의경과년도').GetRow(GetNumber('IDX_보정표_건축물의경과년도'), [
        { key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'IDX' },
    ]);
    RunButton('Command_적용할낙찰가율');
}

function MC_501_Combo_OnChange_입지조건() {
    GetZoonData('Q_00_입지조건').FindIndex('IDX_보정표_입지조건', (row) => {
        return row['CD_CODE'] == GetString('Combo_보정표_입지조건');
    });
    GetZoonData('Q_00_입지조건').GetRow(GetNumber('IDX_보정표_입지조건'), [
        { key: 'MkEdit_보정표_입지조건_적용율', value: 'IDX' },
    ]);
    RunButton('Command_적용할낙찰가율');
}

function MC_501_Combo_OnChange_전유부분면적() {
    GetZoonData('Q_00_전유부분의면적').FindIndex('IDX_보정표_전유부분의면적', (row) => {
        return row['CD_CODE'] == GetString('Combo_보정표_전유부분의면적');
    });

    GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('IDX_보정표_전유부분의면적'), [
        { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'IDX' },
    ]);
    RunButton('Command_적용할낙찰가율');
}

function MC_501_Combo_OnChange_전유부분위치() {
    GetZoonData('Q_00_전유부분의위치').FindIndex('IDX_보정표_전유부분의위치', (row) => {
        return row['CD_CODE'] == GetString('Combo_보정표_전유부분의위치');
    });
    GetZoonData('Q_00_전유부분의위치').GetRow(GetNumber('IDX_보정표_전유부분의위치'), [
        { key: 'MkEdit_보정표_전유부분위치_적용율', value: 'IDX' },
        { key: 'MkEdit_보정표_전유부분위치_등급', value: 'GRADE' },
    ]);
    RunButton('Command_적용할낙찰가율');
}

function MC_501_Combo_OnChange_상가의접근성() {
    GetZoonData('Q_00_상가의접근성').FindIndex('IDX_보정표_상가의접근성', (row) => {
        return row['CD_CODE'] == GetString('Combo_보정표_상가의접근성');
    });
    GetZoonData('Q_00_상가의접근성').GetRow(GetNumber('IDX_보정표_상가의접근성'), [
        { key: 'MkEdit_보정표_상가의접근성_적용율', value: 'IDX' },
    ]);
    RunButton('Command_적용할낙찰가율');
}

function MC_501_Combo_OnChange_상가의층별위치() {
    GetZoonData('Q_00_상가의층별위치').FindIndex('IDX_보정표_상가의층별위치', (row) => {
        return row['CD_CODE'] == GetString('Combo_보정표_상가의층별위치');
    });
    GetZoonData('Q_00_상가의층별위치').GetRow(GetNumber('IDX_보정표_상가의층별위치'), [
        { key: 'MkEdit_보정표_상가의층별위치_적용율', value: 'IDX' },
    ]);
    RunButton('Command_적용할낙찰가율');
}

function MC_501_Combo_OnChange_상권의발달정도() {
    GetZoonData('Q_00_상권의발달정도').FindIndex('IDX_보정표_상권의발달정도', (row) => {
        return row['CD_CODE'] == GetString('Combo_보정표_상권의발달정도');
    });
    GetZoonData('Q_00_상권의발달정도').GetRow(GetNumber('IDX_보정표_상권의발달정도'), [
        { key: 'MkEdit_보정표_상권의발달정도_적용율', value: 'IDX' },
    ]);
    RunButton('Command_적용할낙찰가율');
}

function MC_900_저장_Key만들기() {
    RunQuery('Q_09_감정순번생성', {});
    GetZoonData('Q_09_감정순번생성').GetRow(0, [
        { key: 'Edit_KEY_감정순번', value: 'SEQ' },
        { key: '감정순번', value: 'SEQ' },
    ]);
}

function MC_901_저장_그리드_키값() {
    SetValue('00_NUMBER', -1);
    // EmptyArray('00_NUMBER');
    GetComponent('DBGrid_본건사례').FindIndexArray('00_NUMBER', (target) => {
        return Number(target['사례번호']) < 999;
    });

    GetComponent('DBGrid_본건사례').SetRows(GetValue('00_NUMBER'), [
        { key: '년도', value: GetValue('Edit_KEY_년도')},
        { key: '일련번호', value: GetValue('Edit_KEY_감정순번')},
    ]);

    GetComponent('DBGrid_가격사례').FindIndexArray('00_NUMBER', (target) => {
        return Number(target['사례번호']) < 999;
    });

    GetComponent('DBGrid_가격사례').SetRows(GetValue('00_NUMBER'), [
        { key: '년도', value: GetValue('Edit_KEY_년도')},
        { key: '일련번호', value: GetValue('Edit_KEY_감정순번')},
    ]);

    GetComponent('DBGrid_경매사례').FindIndexArray('00_NUMBER', (target) => {
        return Number(target['사례번호']) < 999;
    });

    GetComponent('DBGrid_경매사례').SetRows(GetValue('00_NUMBER'), [
        { key: '년도', value: GetValue('Edit_KEY_년도')},
        { key: '일련번호', value: GetValue('Edit_KEY_감정순번')},
    ]);

    GetComponent('DBGrid_비준가격').FindIndexArray('00_NUMBER', (target) => {
        return Number(target['사례번호']) < 999;
    });

    GetComponent('DBGrid_비준가격').SetRows(GetValue('00_NUMBER'), [
        { key: '년도', value: GetValue('Edit_KEY_년도')},
        { key: '일련번호', value: GetValue('Edit_KEY_감정순번')},
    ]);

    if (match(PageType.집합_상업용)) {
        GetComponent('DBGrid_임대사례').FindIndexArray('00_NUMBER', (target) => {
            return Number(target['사례번호']) < 999;
        });

        GetComponent('DBGrid_임대사례').SetRows(GetValue('00_NUMBER'), [
            { key: '년도', value: GetValue('Edit_KEY_년도')},
            { key: '일련번호', value: GetValue('Edit_KEY_감정순번')},
        ]);

        GetComponent('DBGrid_수익가격').FindIndexArray('00_NUMBER', (target) => {
            return Number(target['사례번호']) < 999;
        });

        GetComponent('DBGrid_수익가격').SetRows(GetValue('00_NUMBER'), [
            { key: '년도', value: GetValue('Edit_KEY_년도')},
            { key: '일련번호', value: GetValue('Edit_KEY_감정순번')},
        ]);

    } else if (match(PageType.집합_오피스텔)) {
        GetComponent('DBGrid_배당표_주택임대차보증금_계산').FindIndexArray('m_index', (target) => {
            return Number(target['YYYY']) != 1111;
        });

        GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRows(GetValue('m_index'), [
            { key: 'YYYY', value: GetValue('Edit_KEY_년도')},
            { key: 'SEQ', value: GetValue('Edit_KEY_감정순번')},
        ]);

    }

    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').FindIndexArray('m_index', (target) => {
        return Number(target['YYYY']) != 1111;
    });


    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').SetRows(GetValue('m_index'), [
        { key: 'YYYY', value: GetValue('Edit_KEY_년도')},
        { key: 'SEQ', value: GetValue('Edit_KEY_감정순번')},
    ]);

    GetComponent('DBGrid_배당금_계산').FindIndexArray('m_index', (target) => {
        return Number(target['YYYY']) != 1111;
    });

    GetComponent('DBGrid_배당금_계산').SetRows(GetValue('m_index'), [
        { key: 'YYYY', value: GetValue('Edit_KEY_년도')},
        { key: 'SEQ', value: GetValue('Edit_KEY_감정순번')},
    ]);
}

function MC_910_저장_입력표() {
    SetValue('01_TEMP', '');
    SetValue('00_TEMP', '');

    if ( StrLength(Trim(GetValue('Edit_입력표_지번'))) > 0 ) {
        SetValue('01_TEMP', Trim(GetValue('Edit_입력표_지번')));
    }


    if ( StrLength(Trim(GetValue('Edit_입력표_집합건물의명칭'))) > 0 ) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0 ) {
            SetValue('01_TEMP', GetValue('01_TEMP') + " " +  Trim(GetValue('Edit_입력표_집합건물의명칭')));
        } else {
            SetValue('01_TEMP', Trim(GetValue('Edit_입력표_집합건물의명칭')));
        }
    }

    if ( StrLength(Trim(GetValue('Edit_입력표_동수'))) > 0 ) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0 ) {
            SetValue('01_TEMP', GetValue('01_TEMP') + " " +  Trim(GetValue('Edit_입력표_동수')));
        } else {
            SetValue('01_TEMP', Trim(GetValue('Edit_입력표_동수')));
        }
    }

    if ( StrLength(Trim(GetValue('Edit_입력표_호수'))) > 0 ) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0 ) {
            SetValue('01_TEMP', GetValue('01_TEMP') + " " +  Trim(GetValue('Edit_입력표_호수')));
        } else {
            SetValue('01_TEMP', Trim(GetValue('Edit_입력표_호수')));
        }
    }

    RunQuery('저장_담보마스터', {
        'YYYY' : GetValue('Edit_KEY_년도'),
        'SEQ' : GetValue('Edit_KEY_감정순번'),
        'SEC_CODE' : GetValue('Combo_집합건물종류'),
        'ESTI_DATE' : GetValue('MkEdit_감정일'),
        'GEO_CODE' : GetValue('Edit_입력표_거래처코드'),
        'SANGHO' : GetValue('Edit_입력표_거래처'),
        'DAEPYO_NAME' : GetValue('Edit_입력표_대표자'),
        'MARKET_NAME' : GetValue('Edit_입력표_업소명'),
        'MARKET_CEO' : GetValue('Edit_입력표_업소대표자'),
        'DEBTOR' : GetValue('Edit_입력표_채무자'),
        'GUARANTOR' : GetValue('Edit_입력표_담보제공자'),
        'DEBTOR_RELATION' : GetValue('Edit_입력표_채무자와담보제공자의관계'),
        'JUM_CODE' : GetValue('_부서코드'),
        'REQ_JUM' : GetValue('_부서코드'),
        'PROC_DIV' : GetValue('결재진행현황'),
        'MARKET_DIV' : GetValue('Combo_입력표_업소구분'),
        'B_SIZE' : GetValue('MkEdit_입력표_면적합계'),
        'B_SIZE_PY' : GetValue('MkEdit_입력표_면적합계_평'),
        'CURR_AMT' : GetValue('MkEdit_입력표_실거래가_총액'),
        'PLMIN_BID_AMT' : GetValue('MkEdit_보정표_최저입찰가'),
        'PL_BID_AMT' : GetValue('MkEdit_보정표_예상낙찰가'),
        'JUSO1' : GetValue('Edit_입력표_소재지1'),
        'B_NAME' : GetValue('01_TEMP'),
        'JUM_SABUN' : GetValue('Edit_감정자사번'),
        'DOC_KEY' : GetValue('Edit_Doc_Key'),
        'INCREASE_AMT' : GetValue('MkEdit_보정표_평가가격'),
        'APPL_RATE' : GetValue('MkEdit_보정표_적용할낙찰가율'),
        'PRE_BOND_AMT' : 0,
        'SPARE_SEC_AMT' : 0,
        'EXCEED_YN' : '',
        'EXCEED_AMT' : 0,
        'RES_PL_BID_AMT' : 0,
        'BID_USE_YN' : GetValue('응찰_입력표활성여부'),
        'L_SIZE' : GetValue('Edit_입력표_대지권소유권'),
        'L_SIZE_PY' : GetValue('Edit_입력표_대지권소유권_평'),
        'APPRAISE_GU' : GetValue('Combo_보고서_평가구분'),
        'PRE_YYYY' : GetValue('_이전년도'),
        'PRE_SEQ' : GetValue('_이전담보순번'),
        'LIQUOR_TYPE' : GetValue('Combo_사업부문')
    }, 'POST');

    if (isEmpty(GetValue('Edit_Doc_Key'))) {
        RunQuery('저장_결재자현황_영업_Clear', {
            'YYYY' : GetValue('년도'),
            'SEQ' : GetValue('감정순번'),
        }, 'POST');
        RunQuery('저장_결재자현황_영업', {
            'DOC_KEY' : GetValue('Edit_Doc_Key'),
            'YYYY' : GetValue('년도'),
            'SEQ' : GetValue('감정순번'),
        }, 'POST');
    }

    RunQuery('저장_01_규제의표시', {
        'YYYY' : GetValue('Edit_KEY_년도'),
        'SEQ' : GetValue('Edit_KEY_감정순번'),
        'REST_PL_USE' : GetValue('Edit_입력표_국토의계획'),
        'REST_OT_LAW' : GetValue('Edit_입력표_다른법률등'),
        'REST_EN_RULE' : GetValue('Edit_입력표_시행령부칙'),
        'REST_FU_LAW' : GetValue('Edit_입력표_토지이용규제'),
    }, 'POST');
    RunQuery('저장_02_입력표', {
        'YYYY' : GetValue('Edit_KEY_년도'),
        'SEQ' : GetValue('Edit_KEY_감정순번'),
        'JUSO1' : GetValue('Edit_입력표_소재지1'),
        'JUSO2' : GetValue('00_TEMP'),
        'LOT_NUM' : GetValue('Edit_입력표_지번'),
        'CB_NAME' : GetValue('Edit_입력표_집합건물의명칭'),
        'DONG' : GetValue('Edit_입력표_동수'),
        'HO' : GetValue('Edit_입력표_호수'),
        'LCATEGORY' : GetValue('Combo_입력표_지목'),
        'LG_OWNER_YN' : GetValue('Edit_입력표_대지권소유권여부'),
        'LG_OWNER' : GetValue('Edit_입력표_대지권소유권'),
        'LG_SIZE' : GetValue('MkEdit_입력표_토지권의목적인'),
        'POSS_A_AREA' : GetValue('Combo_입력표_가임대보증금적용지역'),
        'CB_STRUC' : GetValue('Combo_입력표_구조'),
        'CB_ROOF' : GetValue('Combo_입력표_지붕'),
        'CB_UPFLOOR' : GetValue('Edit_입력표_지상'),
        'CB_DNFLOOR' : GetValue('Edit_입력표_지하'),
        'CB_FLOOR' : GetValue('Edit_입력표_해당층'),
        'CB_YYYY' : GetValue('MkEdit_입력표_건축일자'),
        'ELAP_YEAR' : GetValue('MkEdit_입력표_건축년도_경과'),
        'NUM_HOUSEHOLD' : 0,
        'NUM_YEAR' : GetValue('MkEdit_입력표_내용연수'),
        'CB_EXM_SIZE' : GetValue('MkEdit_입력표_전유면적'),
        'CB_EXM_SIZE_PY' : GetValue('MkEdit_입력표_전유면적_평'),
        'CB_PUB_SIZE' : GetValue('MkEdit_입력표_공유면적'),
        'CB_PUB_SIZE_PY' : GetValue('MkEdit_입력표_공유면적_평'),
        'CB_TOT_SIZE' : GetValue('MkEdit_입력표_면적합계'),
        'CB_TOT_SIZE_PY' : GetValue('MkEdit_입력표_면적합계_평'),
        'OF_GU' : GetValue('Combo_입력표_용도'),
        'OF_HEATER_YN' : GetValue('Combo_입력표_바닥난방'),
        'OF_FLOOR' : GetValue('MkEdit_입력표_층별코드'),
        'OF_FLOOR_IDX' : GetValue('MkEdit_입력표_층별지수'),
        'OF_PLACE' : GetValue('Combo_입력표_위치'),
        'OF_PLACE_IDX' : GetValue('MkEdit_입력표_위치지수'),
        'OF_JANGA_RATE' : GetValue('MkEdit_입력표_잔가율'),
        'OF_ROAD_CODE' : GetValue('Combo_입력표_도로조건'),
        'OF_ACCESS_CODE' : GetValue('Combo_입력표_접근조건'),
        'OF_ETC' : GetValue('Edit_입력표_기타조건'),
        'OF_ETC_IDX' : GetValue('MkEdit_입력표_기타조건_지수'),
        'REGI_AMT' : GetValue('MkEdit_입력표_실거래가_총액'),
        'REGI_DAN' : GetValue('MkEdit_입력표_실거래가_단가_M2'),
        'REGI_DAN_PY' : GetValue('MkEdit_입력표_실거래가_단가_평'),
        'BASE_AMT' : GetValue('MkEdit_입력표_기준시가_총액'),
        'BASE_DAN' : GetValue('MkEdit_입력표_기준시가_단가_M2'),
        'BASE_DAN_PY' : GetValue('MkEdit_입력표_기준시가_단가_평'),
        'SEC_REGI_SIZE' : GetValue('MkEdit_입력표_담보제공_전용면적'),
        'SEC_NUME' : GetValue('MkEdit_입력표_담보제공_분자'),
        'SEC_DENO' : GetValue('MkEdit_입력표_담보제공_분모'),
        'SEC_RATE' : GetValue('MkEdit_입력표_담보제공_비율'),
        'SEC_OFFER_SIZE' : GetValue('MkEdit_입력표_담보제공_제공면적'),
        'SEC_DESC' : GetValue('MkEdit_입력표_담보제공_사유'),
        'OF_ROAD_IDX' : 0,
        'OF_ACCESS_IDX' : GetValue('MkEdit_입력표_접근조건지수'),
        'INC_AMT' : GetValue('MkEdit_평가_담보_평가가격'),
        'FNL_INC_AMT' : GetValue('MkEdit_평가_담보_최종평가가격'),
    }, 'POST');
    RunQuery('저장_20_낙찰가율보정표', {
        'YYYY' : GetValue('Edit_KEY_년도'),
        'SEQ' : GetValue('Edit_KEY_감정순번'),
        'P_BID_RATE' : GetValue('MkEdit_보정표_당해지역낙찰가율'),
        'K_BID_RATE' : GetValue('MkEdit_보정표_유사부동산낙찰가율'),
        'B_BID_RATE' : GetValue('MkEdit_보정표_기준낙찰가율'),
        'APPL_RATE' : GetValue('MkEdit_보정표_적용할낙찰가율'),
        'RIGHTS_CODE' : GetValue('Combo_보정표_점유자의권리형태'),
        'RIGHTS_RATE' : GetValue('MkEdit_보정표_점유자의권리형태_적용율'),
        'INCREASE_AMT' : GetValue('MkEdit_보정표_평가가격'),
        'PL_MIN_BID_AMT' : GetValue('MkEdit_보정표_최저입찰가'),
        'PL_BID_AMT' : GetValue('MkEdit_보정표_예상낙찰가'),
        'OFF_EXM_SIZE' : GetValue('Combo_보정표_전유부분의면적'),
        'OFF_EXM_RATE' : GetValue('MkEdit_보정표_전유부분면적_적용율'),
        'OFF_CONV_LOCATED' : GetValue('Combo_보정표_입지조건'),
        'OFF_CONV_RATE' : GetValue('MkEdit_보정표_입지조건_적용율'),
        'OFF_FLOOR_CODE' : GetValue('Combo_보정표_전유부분의위치'),
        'OFF_FLOOR_RATE' : GetValue('MkEdit_보정표_전유부분위치_적용율'),
        'OFF_ELAP_CODE' : GetValue('Combo_보정표_건축물경과년도'),
        'OFF_ELAP_RATE' : GetValue('MkEdit_보정표_건축물의경과년도_적용율'),
    }, 'POST');

    if (match(PageType.집합_상업용)) {
        RunQuery('저장_10_감정가_본건_입지특성', {
            'YYYY' : GetValue('Edit_KEY_년도'),
            'SEQ' : GetValue('Edit_KEY_감정순번'),
            'LOC_ROAD_SYSTEM' : GetValue('Combo_입지특성_도로계통성'),
            'LOC_BUSI_ACCESS' : GetValue('Combo_입지특성_상업시설접근성'),
            'LOC_PUB_ACCESS' : GetValue('Combo_입지특성_공공시설접근성'),
            'LOC_HATE_FACILITY_YN' : GetValue('Edit_입지특성_주요혐오시설'),
            'LOC_DEVELOP' : GetValue('Edit_입지특성_인근개발계획'),
            'MARKETABLE_PRICE' : GetValue('Combo_입지특성_가격동향'),
        }, 'POST');

        GetComponent('DBGrid_본건사례').GetModifyData([
            { key : '저장_본건_년도', value : '년도', isDelRowInclude : true },
            { key : '저장_본건_일련번호', value : '일련번호', isDelRowInclude : true },
            { key : '저장_본건_사례번호', value : '사례번호', isDelRowInclude : true },
            { key : '저장_본건_선택여부', value : '선택여부', isDelRowInclude : true },
            { key : '저장_본건_전용면적', value : '전용면적', isDelRowInclude : true },
            { key : '저장_본건_층수', value : '층수', isDelRowInclude : true },
            { key : '저장_본건_층수_비준율', value : '층수_비준율', isDelRowInclude : true },
            { key : '저장_본건_용도지역', value : '용도지역', isDelRowInclude : true },
            { key : '저장_본건_최저가', value : '최저가', isDelRowInclude : true },
            { key : '저장_본건_최고가', value : '최고가', isDelRowInclude : true },
            { key : '저장_본건_평균가격', value : '평균가격', isDelRowInclude : true },
            { key : '저장_본건_M2당가격', value : 'M2당단가', isDelRowInclude : true },
            { key : '저장_본건_보증금', value : '보증금', isDelRowInclude : true },
            { key : '저장_본건_임대료', value : '월임대료', isDelRowInclude : true },
            { key : '저장_본건_위치', value : '위치', isDelRowInclude : true },
            { key : '저장_본건_운용이율', value : '운용이율', isDelRowInclude : true },
            { key : '저장_본건_총연간임대료', value : '총연간임대료', isDelRowInclude : true },
            { key : '저장_본건_단위당연간임대료', value : '단위당연간임대료', isDelRowInclude : true },
        ]);
        RunQuery('저장_10_감정가_본건', {
            '저장_본건_년도' : GetValue('저장_본건_년도'),
            '저장_본건_일련번호' : GetValue('저장_본건_일련번호'),
            '저장_본건_사례번호' : GetValue('저장_본건_사례번호'),
            '저장_본건_선택여부' : GetValue('저장_본건_선택여부'),
            '저장_본건_전용면적' : GetValue('저장_본건_전용면적'),
            '저장_본건_층수' : GetValue('저장_본건_층수'),
            '저장_본건_층수_비준율' : GetValue('저장_본건_층수_비준율'),
            '저장_본건_위치' : GetValue('저장_본건_위치'),
            '저장_본건_용도지역' : GetValue('저장_본건_용도지역'),
            '저장_본건_최저가' : GetValue('저장_본건_최저가'),
            '저장_본건_최고가' : GetValue('저장_본건_최고가'),
            '저장_본건_평균가격' : GetValue('저장_본건_평균가격'),
            '저장_본건_M2당가격' : GetValue('저장_본건_M2당가격'),
            '저장_본건_보증금' : GetValue('저장_본건_보증금'),
            '저장_본건_임대료' : GetValue('저장_본건_임대료')
        }, 'POST');

        GetComponent('DBGrid_가격사례').GetModifyData([
            { key : '저장_가격_사례번호', value : '사례번호', isDelRowInclude : true },
            { key : '저장_가격_소재지', value : '소재지', isDelRowInclude : true },
            { key : '저장_가격_조사금액', value : '조사금액', isDelRowInclude : true },
            { key : '저장_가격_이용상황', value : '이용상황', isDelRowInclude : true },
            { key : '저장_가격_전용면적', value : '전용면적', isDelRowInclude : true },
            { key : '저장_가격_층수', value : '층수_코드', isDelRowInclude : true },
            { key : '저장_가격_층수_비준율', value : '층수_비준율', isDelRowInclude : true },
            { key : '저장_가격_위치', value : '위치', isDelRowInclude : true },
            { key : '저장_가격_용도지역', value : '용도지역', isDelRowInclude : true },
            { key : '저장_가격_건축년도', value : '건축년도', isDelRowInclude : true },
            { key : '저장_가격_경과년도', value : '경과년도', isDelRowInclude : true },
            { key : '저장_가격_내용년수', value : '내용년수', isDelRowInclude : true },
            { key : '저장_가격_도로조건', value : '도로조건', isDelRowInclude : true },
            { key : '저장_가격_접근조건', value : '접근조건', isDelRowInclude : true },
            { key : '저장_가격_사례가격', value : '사례가격', isDelRowInclude : true },
            { key : '저장_가격_년도', value : '년도', isDelRowInclude : true },
            { key : '저장_가격_일련번호', value : '일련번호', isDelRowInclude : true },
            { key : '저장_가격_구조', value : '구조', isDelRowInclude : true },
        ]);
        RunQuery('저장_11_감정가_가격사례', {
            '저장_가격_년도' : GetValue('저장_가격_년도'),
            '저장_가격_일련번호' : GetValue('저장_가격_일련번호'),
            '저장_가격_사례번호' : GetValue('저장_가격_사례번호'),
            '저장_가격_소재지' : GetValue('저장_가격_소재지'),
            '저장_가격_조사금액' : GetValue('저장_가격_조사금액'),
            '저장_가격_업무용여부' : GetValue('저장_가격_업무용여부'),
            '저장_가격_이용상황' : GetValue('저장_가격_이용상황'),
            '저장_가격_전용면적' : GetValue('저장_가격_전용면적'),
            '저장_가격_층수' : GetValue('저장_가격_층수'),
            '저장_가격_층수_비준율' : GetValue('저장_가격_층수_비준율'),
            '저장_가격_위치' : GetValue('저장_가격_위치'),
            '저장_가격_용도지역' : GetValue('저장_가격_용도지역'),
            '저장_가격_건축년도' : GetValue('저장_가격_건축년도'),
            '저장_가격_경과년도' : GetValue('저장_가격_경과년도'),
            '저장_가격_구조' : GetValue('저장_가격_구조'),
            '저장_가격_내용년수' : GetValue('저장_가격_내용년수'),
            '저장_가격_도로조건' : GetValue('저장_가격_도로조건'),
            '저장_가격_접근조건' : GetValue('저장_가격_접근조건'),
            '저장_가격_월관리비' : GetValue('저장_가격_월관리비'),
            '저장_가격_월임대료' : GetValue('저장_가격_월임대료'),
            '저장_가격_보증금' : GetValue('저장_가격_보증금'),
            '저장_가격_사례가격' : GetValue('저장_가격_사례가격')
        }, 'POST');

        GetComponent('DBGrid_경매사례').GetModifyData([
            { key : '저장_경매_사례번호', value : '사례번호', isDelRowInclude : true },
            { key : '저장_경매_소재지', value : '소재지', isDelRowInclude : true },
            { key : '저장_경매_법원감정가', value : '법원감정가', isDelRowInclude : true },
            { key : '저장_경매_이용상황', value : '이용상황', isDelRowInclude : true },
            { key : '저장_경매_전용면적', value : '전용면적', isDelRowInclude : true },
            { key : '저장_경매_층수', value : '층수_코드', isDelRowInclude : true },
            { key : '저장_경매_층수_비준율', value : '층수_비준율', isDelRowInclude : true },
            { key : '저장_경매_위치', value : '위치', isDelRowInclude : true },
            { key : '저장_경매_용도지역', value : '용도지역', isDelRowInclude : true },
            { key : '저장_경매_건축년도', value : '건축년도', isDelRowInclude : true },
            { key : '저장_경매_경과년도', value : '경과년도', isDelRowInclude : true },
            { key : '저장_경매_내용년수', value : '내용년수', isDelRowInclude : true },
            { key : '저장_경매_도로조건', value : '도로조건', isDelRowInclude : true },
            { key : '저장_경매_접근조건', value : '접근조건', isDelRowInclude : true },
            { key : '저장_경매_사례가격', value : '사례가격', isDelRowInclude : true },
            { key : '저장_경매_경매사건번호', value : '경매사건번호', isDelRowInclude : true },
            { key : '저장_경매_년도', value : '년도', isDelRowInclude : true },
            { key : '저장_경매_일련번호', value : '일련번호', isDelRowInclude : true },
            { key : '저장_경매_구조', value : '구조', isDelRowInclude : true },
            { key : '저장_경매_낙찰가격', value : '낙찰가격', isDelRowInclude : true },
            { key : '저장_경매_낙찰가율', value : '낙찰가율', isDelRowInclude : true },
        ]);
        RunQuery('저장_12_감정가_경매사례', {
            '저장_경매_년도' : GetValue('저장_경매_년도'),
            '저장_경매_일련번호' : GetValue('저장_경매_일련번호'),
            '저장_경매_사례번호' : GetValue('저장_경매_사례번호'),
            '저장_경매_경매사건번호' : GetValue('저장_경매_경매사건번호'),
            '저장_경매_소재지' : GetValue('저장_경매_소재지'),
            '저장_경매_업무용여부' : GetValue('저장_경매_업무용여부'),
            '저장_경매_이용상황' : GetValue('저장_경매_이용상황'),
            '저장_경매_전용면적' : GetValue('저장_경매_전용면적'),
            '저장_경매_층수' : GetValue('저장_경매_층수'),
            '저장_경매_층수_비준율' : GetValue('저장_경매_층수_비준율'),
            '저장_경매_위치' : GetValue('저장_경매_위치'),
            '저장_경매_용도지역' : GetValue('저장_경매_용도지역'),
            '저장_경매_건축년도' : GetValue('저장_경매_건축년도'),
            '저장_경매_경과년도' : GetValue('저장_경매_경과년도'),
            '저장_경매_구조' : GetValue('저장_경매_구조'),
            '저장_경매_내용년수' : GetValue('저장_경매_내용년수'),
            '저장_경매_도로조건' : GetValue('저장_경매_도로조건'),
            '저장_경매_접근조건' : GetValue('저장_경매_접근조건'),
            '저장_경매_법원감정가' : GetValue('저장_경매_법원감정가'),
            '저장_경매_사례가격' : GetValue('저장_경매_사례가격'),
            '저장_경매_낙찰가격' : GetValue('저장_경매_낙찰가격'),
            '저장_경매_낙찰가율' : GetValue('저장_경매_낙찰가율')
        }, 'POST');

        GetComponent('DBGrid_임대사례').GetModifyData([
            { key : '저장_임대_사례번호', value : '사례번호', isDelRowInclude : true },
            { key : '저장_임대_소재지', value : '소재지', isDelRowInclude : true },
            { key : '저장_임대_전용면적', value : '전용면적', isDelRowInclude : true },
            { key : '저장_임대_이용상황', value : '이용상황', isDelRowInclude : true },
            { key : '저장_임대_층수', value : '층수_코드', isDelRowInclude : true },
            { key : '저장_임대_층수_비준율', value : '층수_비준율', isDelRowInclude : true },
            { key : '저장_임대_위치', value : '위치', isDelRowInclude : true },
            { key : '저장_임대_용도지역', value : '용도지역', isDelRowInclude : true },
            { key : '저장_임대_건축년도', value : '건축년도', isDelRowInclude : true },
            { key : '저장_임대_경과년도', value : '경과년도', isDelRowInclude : true },
            { key : '저장_임대_내용년수', value : '내용년수', isDelRowInclude : true },
            { key : '저장_임대_도로조건', value : '도로조건', isDelRowInclude : true },
            { key : '저장_임대_접근조건', value : '접근조건', isDelRowInclude : true },
            { key : '저장_임대_보증금', value : '임대_보증금', isDelRowInclude : true },
            { key : '저장_임대_월임대료', value : '임대_월임대료', isDelRowInclude : true },
            { key : '저장_임대_운용이율', value : '임대_운용이율', isDelRowInclude : true },
            { key : '저장_임대_총연간임대료', value : '임대_총연간임대료', isDelRowInclude : true },
            { key : '저장_임대_단위당연간임대료', value : '단위당연간임대료', isDelRowInclude : true },
            { key : '저장_임대_년도', value : '년도', isDelRowInclude : true },
            { key : '저장_임대_일련번호', value : '일련번호', isDelRowInclude : true },
            { key : '저장_임대_구조', value : '구조', isDelRowInclude : true },
        ]);
        RunQuery('저장_14_감정가_임대사례', {
            '저장_임대_소재지' : GetValue('저장_임대_소재지'),
            '저장_임대_전용면적' : GetValue('저장_임대_전용면적'),
            '저장_임대_이용상황' : GetValue('저장_임대_이용상황'),
            '저장_임대_층수' : GetValue('저장_임대_층수'),
            '저장_임대_층수_비준율' : GetValue('저장_임대_층수_비준율'),
            '저장_임대_위치' : GetValue('저장_임대_위치'),
            '저장_임대_용도지역' : GetValue('저장_임대_용도지역'),
            '저장_임대_건축년도' : GetValue('저장_임대_건축년도'),
            '저장_임대_경과년도' : GetValue('저장_임대_경과년도'),
            '저장_임대_구조' : GetValue('저장_임대_구조'),
            '저장_임대_내용년수' : GetValue('저장_임대_내용년수'),
            '저장_임대_도로조건' : GetValue('저장_임대_도로조건'),
            '저장_임대_접근조건' : GetValue('저장_임대_접근조건'),
            '저장_임대_보증금' : GetValue('저장_임대_보증금'),
            '저장_임대_월임대료' : GetValue('저장_임대_월임대료'),
            '저장_임대_운용이율' : GetValue('저장_임대_운용이율'),
            '저장_임대_총연간임대료' : GetValue('저장_임대_총연간임대료'),
            '저장_임대_단위당연간임대료' : GetValue('저장_임대_단위당연간임대료'),
            '저장_임대_년도' : GetValue('저장_임대_년도'),
            '저장_임대_일련번호' : GetValue('저장_임대_일련번호'),
            '저장_임대_사례번호' : GetValue('저장_임대_사례번호')
        }, 'POST');

        GetComponent('DBGrid_비준가격').GetModifyData([
            { key : '저장_비준_사례구분', value : '사례구분', isDelRowInclude : true },
            { key : '저장_비준_사례번호', value : '사례번호', isDelRowInclude : true },
            { key : '저장_비준_소재지_비교치', value : '소재지_비교치', isDelRowInclude : true },
            { key : '저장_비준_위치별비교_본건_적용율', value : '위치별비교_본건_적용율', isDelRowInclude : true },
            { key : '저장_비준_위치별비교_사례_적용율', value : '위치별비교_사례_적용율', isDelRowInclude : true },
            { key : '저장_비준_위치별비교_비교치', value : '위치별비교_비교치', isDelRowInclude : true },
            { key : '저장_비준_잔가율비교_비교치', value : '잔가율비교_비교치', isDelRowInclude : true },
            { key : '저장_비준_도로조건_비교치', value : '도로조건_비교치', isDelRowInclude : true },
            { key : '저장_비준_접근조건_본건_적용율', value : '접근조건_본건_적용율', isDelRowInclude : true },
            { key : '저장_비준_접근조건_사례_적용율', value : '접근조건_사례_적용율', isDelRowInclude : true },
            { key : '저장_비준_접근조건_비교치', value : '접근조건_비교치', isDelRowInclude : true },
            { key : '저장_비준_기타조건_본건_적용율', value : '기타조건_본건_적용율', isDelRowInclude : true },
            { key : '저장_비준_기타조건_사례_적용율', value : '기타조건_사례_적용율', isDelRowInclude : true },
            { key : '저장_비준_기타조건_비교치', value : '기타조건_비교치', isDelRowInclude : true },
            { key : '저장_비준_요인합계', value : '요인합계', isDelRowInclude : true },
            { key : '저장_비준_산정단가', value : '산정단가', isDelRowInclude : true },
            { key : '저장_비준_적용단가', value : '적용단가', isDelRowInclude : true },
            { key : '저장_비준_전용면적_사례', value : '전용면적', isDelRowInclude : true },
            { key : '저장_비준_년도', value : '년도', isDelRowInclude : true },
            { key : '저장_비준_일련번호', value : '일련번호', isDelRowInclude : true },
            { key : '저장_비준_층별비교_본건', value : '층별비교_본건', isDelRowInclude : true },
            { key : '저장_비준_층별비교_사례', value : '층별비교_사례', isDelRowInclude : true },
            { key : '저장_비준_층별비교_본건_적용율', value : '층별비교_본건_적용율', isDelRowInclude : true },
            { key : '저장_비준_층별비교_사례_적용율', value : '층별비교_사례_적용율', isDelRowInclude : true },
            { key : '저장_비준_층별비교_비교치', value : '층별비교_비교치', isDelRowInclude : true },
            { key : '저장_비준_가격_본건_일자', value : '가격_본건_일자', isDelRowInclude : true },
            { key : '저장_비준_가격_본건_적용율', value : '가격_본건_적용율', isDelRowInclude : true },
            { key : '저장_비준_가격_사례_일자', value : '가격_사례_일자', isDelRowInclude : true },
            { key : '저장_비준_가격_사례_적용율', value : '가격_사례_적용율', isDelRowInclude : true },
            { key : '저장_비준_가격_비교치', value : '가격_비교치', isDelRowInclude : true },
            { key : '저장_비준_사례가격', value : '사례가격', isDelRowInclude : true },
            { key : '저장_비준_기타조건_사례_내용', value : '기타조건_사례_내용', isDelRowInclude : true },
            { key : '저장_비준_환산금액', value : '환산금액', isDelRowInclude : true },
        ]);
        RunQuery('저장_17_감정가_비준가격', {
            '저장_비준_년도' : GetValue('저장_비준_년도'),
            '저장_비준_일련번호' : GetValue('저장_비준_일련번호'),
            '저장_비준_사례구분' : GetValue('저장_비준_사례구분'),
            '저장_비준_사례번호' : GetValue('저장_비준_사례번호'),
            '저장_비준_가격_본건_일자' : GetValue('저장_비준_가격_본건_일자'),
            '저장_비준_가격_본건_적용율' : GetValue('저장_비준_가격_본건_적용율'),
            '저장_비준_가격_사례_일자' : GetValue('저장_비준_가격_사례_일자'),
            '저장_비준_가격_사례_적용율' : GetValue('저장_비준_가격_사례_적용율'),
            '저장_비준_가격_비교치' : GetValue('저장_비준_가격_비교치'),
            '저장_비준_전용면적_사례' : GetValue('저장_비준_전용면적_사례'),
            '저장_비준_사례가격' : GetValue('저장_비준_사례가격'),
            '저장_비준_소재지_비교치' : GetValue('저장_비준_소재지_비교치'),
            '저장_비준_층별비교_본건' : GetValue('저장_비준_층별비교_본건'),
            '저장_비준_층별비교_본건_적용율' : GetValue('저장_비준_층별비교_본건_적용율'),
            '저장_비준_층별비교_사례' : GetValue('저장_비준_층별비교_사례'),
            '저장_비준_층별비교_사례_적용율' : GetValue('저장_비준_층별비교_사례_적용율'),
            '저장_비준_층별비교_비교치' : GetValue('저장_비준_층별비교_비교치'),
            '저장_비준_위치별비교_본건_적용율' : GetValue('저장_비준_위치별비교_본건_적용율'),
            '저장_비준_위치별비교_사례_적용율' : GetValue('저장_비준_위치별비교_사례_적용율'),
            '저장_비준_위치별비교_비교치' : GetValue('저장_비준_위치별비교_비교치'),
            '저장_비준_잔가율비교_비교치' : GetValue('저장_비준_잔가율비교_비교치'),
            '저장_비준_도로조건_비교치' : GetValue('저장_비준_도로조건_비교치'),
            '저장_비준_접근조건_본건_적용율' : GetValue('저장_비준_접근조건_본건_적용율'),
            '저장_비준_접근조건_사례_적용율' : GetValue('저장_비준_접근조건_사례_적용율'),
            '저장_비준_접근조건_비교치' : GetValue('저장_비준_접근조건_비교치'),
            '저장_비준_기타조건_본건_적용율' : GetValue('저장_비준_기타조건_본건_적용율'),
            '저장_비준_기타조건_사례_내용' : GetValue('저장_비준_기타조건_사례_내용'),
            '저장_비준_기타조건_사례_적용율' : GetValue('저장_비준_기타조건_사례_적용율'),
            '저장_비준_기타조건_비교치' : GetValue('저장_비준_기타조건_비교치'),
            '저장_비준_요인합계' : GetValue('저장_비준_요인합계'),
            '저장_비준_산정단가' : GetValue('저장_비준_산정단가'),
            '저장_비준_적용단가' : GetValue('저장_비준_적용단가'),
            '저장_비준_환산금액' : GetValue('저장_비준_환산금액')
        }, 'POST');

        GetComponent('DBGrid_수익가격').GetModifyData([
            { key : '저장_수익_사례번호', value : '사례번호', isDelRowInclude : true },
            { key : '저장_수익_소재지_비교치', value : '소재지_비교치', isDelRowInclude : true },
            { key : '저장_수익_위치별비교_본건_적용율', value : '위치별비교_본건_적용율', isDelRowInclude : true },
            { key : '저장_수익_위치별비교_사례_적용율', value : '위치별비교_사례_적용율', isDelRowInclude : true },
            { key : '저장_수익_위치별비교_비교치', value : '위치별비교_비교치', isDelRowInclude : true },
            { key : '저장_수익_잔가율비교_비교치', value : '잔가율비교_비교치', isDelRowInclude : true },
            { key : '저장_수익_도로조건_본건_적용율', value : '도로조건_본건_적용율', isDelRowInclude : true },
            { key : '저장_수익_도로조건_사례_적용율', value : '도로조건_사례_적용율', isDelRowInclude : true },
            { key : '저장_수익_도로조건_비교치', value : '도로조건_비교치', isDelRowInclude : true },
            { key : '저장_수익_접근조건_본건_적용율', value : '접근조건_본건_적용율', isDelRowInclude : true },
            { key : '저장_수익_접근조건_사례_적용율', value : '접근조건_사례_적용율', isDelRowInclude : true },
            { key : '저장_수익_접근조건_비교치', value : '접근조건_비교치', isDelRowInclude : true },
            { key : '저장_수익_기타조건_본건_적용율', value : '기타조건_본건_적용율', isDelRowInclude : true },
            { key : '저장_수익_기타조건_사례_적용율', value : '기타조건_사례_적용율', isDelRowInclude : true },
            { key : '저장_수익_기타조건_비교치', value : '기타조건_비교치', isDelRowInclude : true },
            { key : '저장_수익_임대전용면적', value : '전용면적', isDelRowInclude : true },
            { key : '저장_수익_단위당연간임대료', value : '단위당연간임대료', isDelRowInclude : true },
            { key : '저장_수익_요인합계', value : '요인합계', isDelRowInclude : true },
            { key : '저장_수익_적용단위당임료', value : '적용단위당임료', isDelRowInclude : true },
            { key : '저장_수익_환원이율', value : '환원이율', isDelRowInclude : true },
            { key : '저장_수익_수익단가', value : '수익단가_평', isDelRowInclude : true },
            { key : '저장_수익_년도', value : '년도', isDelRowInclude : true },
            { key : '저장_수익_일련번호', value : '일련번호', isDelRowInclude : true },
            { key : '저장_수익_층별비교_본건', value : '층별비교_본건', isDelRowInclude : true },
            { key : '저장_수익_층별비교_사례', value : '층별비교_사례', isDelRowInclude : true },
            { key : '저장_수익_층별비교_본건_적용율', value : '층별비교_본건_적용율', isDelRowInclude : true },
            { key : '저장_수익_층별비교_사례_적용율', value : '층별비교_사례_적용율', isDelRowInclude : true },
            { key : '저장_수익_층별비교_비교치', value : '층별비교_비교치', isDelRowInclude : true },
            { key : '저장_수익_시점수정_본건_일자', value : '시점_본건_일자', isDelRowInclude : true },
            { key : '저장_수익_시점수정_본건_적용율', value : '시점_본건_적용율', isDelRowInclude : true },
            { key : '저장_수익_시점수정_사례_일자', value : '시점_사례_일자', isDelRowInclude : true },
            { key : '저장_수익_시점수정_사례_적용율', value : '시점_사례_적용율', isDelRowInclude : true },
            { key : '저장_수익_시점수정_비교', value : '시점_비교치', isDelRowInclude : true },
            { key : '저장_수익_사례구분', value : '사례구분', isDelRowInclude : true },
            { key : '저장_수익_기타조건_사례', value : '기타조건_사례', isDelRowInclude : true },
            { key : '저장_수익_환산금액', value : '환산금액', isDelRowInclude : true },
        ]);
        RunQuery('저장_18_감정가_수익가격', {
            '저장_수익_년도' : GetValue('저장_수익_년도'),
            '저장_수익_일련번호' : GetValue('저장_수익_일련번호'),
            '저장_수익_사례구분' : GetValue('저장_수익_사례구분'),
            '저장_수익_사례번호' : GetValue('저장_수익_사례번호'),
            '저장_수익_소재지_비교치' : GetValue('저장_수익_소재지_비교치'),
            '저장_수익_임대전용면적' : GetValue('저장_수익_임대전용면적'),
            '저장_수익_단위당연간임대료' : GetValue('저장_수익_단위당연간임대료'),
            '저장_수익_시점수정_본건_일자' : GetValue('저장_수익_시점수정_본건_일자'),
            '저장_수익_시점수정_본건_적용율' : GetValue('저장_수익_시점수정_본건_적용율'),
            '저장_수익_시점수정_사례_일자' : GetValue('저장_수익_시점수정_사례_일자'),
            '저장_수익_시점수정_사례_적용율' : GetValue('저장_수익_시점수정_사례_적용율'),
            '저장_수익_시점수정_비교' : GetValue('저장_수익_시점수정_비교'),
            '저장_수익_층별비교_본건' : GetValue('저장_수익_층별비교_본건'),
            '저장_수익_층별비교_본건_적용율' : GetValue('저장_수익_층별비교_본건_적용율'),
            '저장_수익_층별비교_사례' : GetValue('저장_수익_층별비교_사례'),
            '저장_수익_층별비교_사례_적용율' : GetValue('저장_수익_층별비교_사례_적용율'),
            '저장_수익_층별비교_비교치' : GetValue('저장_수익_층별비교_비교치'),
            '저장_수익_위치별비교_본건_적용율' : GetValue('저장_수익_위치별비교_본건_적용율'),
            '저장_수익_위치별비교_사례_적용율' : GetValue('저장_수익_위치별비교_사례_적용율'),
            '저장_수익_위치별비교_비교치' : GetValue('저장_수익_위치별비교_비교치'),
            '저장_수익_잔가율비교_비교치' : GetValue('저장_수익_잔가율비교_비교치'),
            '저장_수익_도로조건_비교치' : GetValue('저장_수익_도로조건_비교치'),
            '저장_수익_접근조건_본건_적용율' : GetValue('저장_수익_접근조건_본건_적용율'),
            '저장_수익_접근조건_사례_적용율' : GetValue('저장_수익_접근조건_사례_적용율'),
            '저장_수익_접근조건_비교치' : GetValue('저장_수익_접근조건_비교치'),
            '저장_수익_기타조건_본건_적용율' : GetValue('저장_수익_기타조건_본건_적용율'),
            '저장_수익_기타조건_사례' : GetValue('저장_수익_기타조건_사례'),
            '저장_수익_기타조건_사례_적용율' : GetValue('저장_수익_기타조건_사례_적용율'),
            '저장_수익_기타조건_비교치' : GetValue('저장_수익_기타조건_비교치'),
            '저장_수익_요인합계' : GetValue('저장_수익_요인합계'),
            '저장_수익_적용단위당임료' : GetValue('저장_수익_적용단위당임료'),
            '저장_수익_환원이율' : GetValue('저장_수익_환원이율'),
            '저장_수익_수익단가' : GetValue('저장_수익_수익단가'),
            '저장_수익_환산금액' : GetValue('저장_수익_환산금액')
        }, 'POST');
        RunQuery('저장_19_감정가_평가액산정', {
            'YYYY' : GetValue('Edit_KEY_년도'),
            'SEQ' : GetValue('Edit_KEY_감정순번'),
            'CO_MIN_AMT' : GetValue('MkEdit_평가_비준_최저_총액'),
            'CO_MIN_SIZE_DAN' : GetValue('MkEdit_평가_비준_최저_단가'),
            'CO_MAX_AMT' : GetValue('MkEdit_평가_비준_최고_총액'),
            'CO_MAX_SIZE_DAN' : GetValue('MkEdit_평가_비준_최고_단가'),
            'CO_RATE' : GetValue('MkEdit_평가_비준_비율'),
            'EA_MIN_AMT' : GetValue('MkEdit_평가_수익_최저_총액'),
            'EA_MIN_SIZE_DAN' : GetValue('MkEdit_평가_수익_최저_단가'),
            'EA_MAX_AMT' : GetValue('MkEdit_평가_수익_최고_총액'),
            'EA_MAX_SIZE_DAN' : GetValue('MkEdit_평가_수익_최고_단가'),
            'EA_RATE' : GetValue('MkEdit_평가_수익_비율'),
            'APPL_AMT' : GetValue('MkEdit_평가_결정가격_총액'),
            'APPL_SIZE_DAN' : GetValue('MkEdit_평가_결정가격_단가'),
            'INT_REP_SIZE' : GetValue('MkEdit_평가_인테리어_평형_M2'),
            'INT_REP_SIZE_PY' : GetValue('MkEdit_평가_인테리어_평형_평'),
            'INT_REP_DAN' : GetValue('MkEdit_평가_인테리어_보수단가'),
            'INT_REP_AMT' : GetValue('MkEdit_평가_인테리어_보수금액'),
            'INC_AMT' : GetValue('MkEdit_평가_평가가격_총액'),
            'INC_SIZE_DAN' : GetValue('MkEdit_평가_평가가격_단가'),
            'FNL_INC_AMT' : GetValue('MkEdit_평가_담보_최종평가가격'),
            'APPL_ES_MIN_RATE' : GetValue('MkEdit_평가_격차율_최저'),
            'APPL_ES_MAX_RATE' : GetValue('MkEdit_평가_격차율_최고'),
            'INT_REP_DAN_CODE' : GetValue('Combo_평가_인테리어단가'),
        }, 'POST');

        GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetModifyData([
            { key : '저장_배당표_상가_년도', value : 'YYYY', isDelRowInclude : true },
            { key : '저장_배당표_상가_일련번호', value : 'SEQ', isDelRowInclude : true },
            { key : '저장_배당표_상가_순번', value : 'RNO', isDelRowInclude : true },
            { key : '저장_배당표_상가_위치면적', value : 'C_DESC', isDelRowInclude : true },
            { key : '저장_배당표_상가_가임대적용여부', value : 'POSS_YN', isDelRowInclude : true },
            { key : '저장_배당표_상가_상호성명', value : 'HIR_NAME', isDelRowInclude : true },
            { key : '저장_배당표_상가_임대차보증금', value : 'STO_LSEC_AMT', isDelRowInclude : true },
            { key : '저장_배당표_상가_확정일자', value : 'FXDATE_YN', isDelRowInclude : true },
            { key : '저장_배당표_상가_월세', value : 'MRENT_AMT', isDelRowInclude : true },
            { key : '저장_배당표_상가_실제임대차보증금', value : 'LEASE_AMT', isDelRowInclude : true },
            { key : '저장_배당표_상가_최우선변제보증금', value : 'REP_BE_SEC_AMT', isDelRowInclude : true },
            { key : '저장_배당표_상가_상가임대차_확정', value : 'FXLEA_AMT', isDelRowInclude : true },
            { key : '저장_배당표_상가_상가임대차_확정없는', value : 'FXLEA_NO_AMT', isDelRowInclude : true },
        ]);

        GetComponent('DBGrid_배당금_계산').GetModifyData([
            { key : '저장_배당표_배당금_년도', value : 'YYYY', isDelRowInclude : true },
            { key : '저장_배당표_배당금_일련번호', value : 'SEQ', isDelRowInclude : true },
            { key : '저장_배당표_배당금_순번', value : 'LN_SEQ', isDelRowInclude : true },
            { key : '저장_배당표_배당금_배당표구분', value : 'SHA_GU', isDelRowInclude : true },
            { key : '저장_배당표_배당금_순위', value : 'RANK', isDelRowInclude : true },
            { key : '저장_배당표_배당금_발생일자', value : 'RIGHT_DATE', isDelRowInclude : true },
            { key : '저장_배당표_배당금_권리자', value : 'RIGHT_PERSON', isDelRowInclude : true },
            { key : '저장_배당표_배당금_권리의내용', value : 'RIGHT_CODE', isDelRowInclude : true },
            { key : '저장_배당표_배당금_말소여부', value : 'ERA_YN', isDelRowInclude : true },
            { key : '저장_배당표_배당금_단독담보', value : 'CRED_SELF_AMT', isDelRowInclude : true },
            { key : '저장_배당표_배당금_공동담보', value : 'CRED_COMB_AMT', isDelRowInclude : true },
            { key : '저장_배당표_배당금_표시순위', value : 'DISP_RANK', isDelRowInclude : true },
            { key : '저장_배당표_배당금_배당순위', value : 'PRO_RATE_CODE', isDelRowInclude : true },
            { key : '저장_배당표_배당금_당사설정', value : 'HITE_YN', isDelRowInclude : true },
        ]);
    }
}

function MC_911_저장_감정가1() {
    RunQuery('저장_10_감정가_본건_입지특성', {
        'YYYY' : GetValue('Edit_KEY_년도'),
        'SEQ' : GetValue('Edit_KEY_감정순번'),
        'LOC_ROAD_SYSTEM' : GetValue('Combo_입지특성_도로계통성'),
        'LOC_BUSI_ACCESS' : GetValue('Combo_입지특성_상업시설접근성'),
        'LOC_PUB_ACCESS' : GetValue('Combo_입지특성_공공시설접근성'),
        'LOC_HATE_FACILITY_YN' : GetValue('Edit_입지특성_주요혐오시설'),
        'LOC_DEVELOP' : GetValue('Edit_입지특성_인근개발계획'),
        'MARKETABLE_PRICE' : GetValue('Combo_입지특성_가격동향'),
    }, 'POST');
    GetComponent('DBGrid_본건사례').GetModifyData([
        { key : '저장_본건_년도', value : '년도', isDelRowInclude : true },
        { key : '저장_본건_일련번호', value : '일련번호', isDelRowInclude : true },
        { key : '저장_본건_사례번호', value : '사례번호', isDelRowInclude : true },
        { key : '저장_본건_선택여부', value : '선택여부', isDelRowInclude : true },
        { key : '저장_본건_전용면적', value : '전용면적', isDelRowInclude : true },
        { key : '저장_본건_용도지역', value : '용도지역', isDelRowInclude : true },
        { key : '저장_본건_층수', value : '층수', isDelRowInclude : true },
        { key : '저장_본건_층수_비준율', value : '층수_비준율', isDelRowInclude : true },
        { key : '저장_본건_최저가', value : '최저가', isDelRowInclude : true },
        { key : '저장_본건_최고가', value : '최고가', isDelRowInclude : true },
        { key : '저장_본건_평균가격', value : '평균가격', isDelRowInclude : true },
        { key : '저장_본건_M2당가격', value : 'M2당단가', isDelRowInclude : true },
        { key : '저장_본건_임대료', value : '월임대료', isDelRowInclude : true },
        { key : '저장_본건_보증금', value : '보증금', isDelRowInclude : true },
        { key : '저장_본건_위치', value : '위치', isDelRowInclude : true },
    ]);
    RunQuery('저장_10_감정가_본건', {
        '저장_본건_년도' : GetValue('저장_본건_년도'),
        '저장_본건_일련번호' : GetValue('저장_본건_일련번호'),
        '저장_본건_사례번호' : GetValue('저장_본건_사례번호'),
        '저장_본건_선택여부' : GetValue('저장_본건_선택여부'),
        '저장_본건_전용면적' : GetValue('저장_본건_전용면적'),
        '저장_본건_층수' : GetValue('저장_본건_층수'),
        '저장_본건_층수_비준율' : GetValue('저장_본건_층수_비준율'),
        '저장_본건_위치' : GetValue('저장_본건_위치'),
        '저장_본건_용도지역' : GetValue('저장_본건_용도지역'),
        '저장_본건_최저가' : GetValue('저장_본건_최저가'),
        '저장_본건_최고가' : GetValue('저장_본건_최고가'),
        '저장_본건_평균가격' : GetValue('저장_본건_평균가격'),
        '저장_본건_M2당가격' : GetValue('저장_본건_M2당가격'),
        '저장_본건_보증금' : GetValue('저장_본건_보증금'),
        '저장_본건_임대료' : GetValue('저장_본건_임대료'),
    }, 'POST');

    GetComponent('DBGrid_가격사례').GetModifyData([
        { key : '저장_가격_사례번호', value : '사례번호', isDelRowInclude : true },
        { key : '저장_가격_소재지', value : '소재지', isDelRowInclude : true },
        { key : '저장_가격_조사금액', value : '조사금액', isDelRowInclude : true },
        { key : '저장_가격_업무용여부', value : '업무용여부', isDelRowInclude : true },
        { key : '저장_가격_이용상황', value : '이용상황', isDelRowInclude : true },
        { key : '저장_가격_전용면적', value : '전용면적', isDelRowInclude : true },
        { key : '저장_가격_층수', value : '층수_코드', isDelRowInclude : true },
        { key : '저장_가격_층수_비준율', value : '층수_비준율', isDelRowInclude : true },
        { key : '저장_가격_위치', value : '위치', isDelRowInclude : true },
        { key : '저장_가격_용도지역', value : '용도지역', isDelRowInclude : true },
        { key : '저장_가격_건축년도', value : '건축년도', isDelRowInclude : true },
        { key : '저장_가격_경과년도', value : '경과년도', isDelRowInclude : true },
        { key : '저장_가격_내용년수', value : '내용년수', isDelRowInclude : true },
        { key : '저장_가격_도로조건', value : '도로조건', isDelRowInclude : true },
        { key : '저장_가격_접근조건', value : '접근조건', isDelRowInclude : true },
        { key : '저장_가격_월관리비', value : '월관리비', isDelRowInclude : true },
        { key : '저장_가격_월임대료', value : '월임대료', isDelRowInclude : true },
        { key : '저장_가격_보증금', value : '보증금', isDelRowInclude : true },
        { key : '저장_가격_사례가격', value : '사례가격', isDelRowInclude : true },
        { key : '저장_가격_년도', value : '년도', isDelRowInclude : true },
        { key : '저장_가격_일련번호', value : '일련번호', isDelRowInclude : true },
        { key : '저장_가격_구조', value : '구조', isDelRowInclude : true },
    ]);
    RunQuery('저장_11_감정가_가격사례', {
        '저장_가격_년도' : GetValue('저장_가격_년도'),
        '저장_가격_일련번호' : GetValue('저장_가격_일련번호'),
        '저장_가격_사례번호' : GetValue('저장_가격_사례번호'),
        '저장_가격_소재지' : GetValue('저장_가격_소재지'),
        '저장_가격_조사금액' : GetValue('저장_가격_조사금액'),
        '저장_가격_업무용여부' : GetValue('저장_가격_업무용여부'),
        '저장_가격_이용상황' : GetValue('저장_가격_이용상황'),
        '저장_가격_전용면적' : GetValue('저장_가격_전용면적'),
        '저장_가격_층수' : GetValue('저장_가격_층수'),
        '저장_가격_층수_비준율' : GetValue('저장_가격_층수_비준율'),
        '저장_가격_위치' : GetValue('저장_가격_위치'),
        '저장_가격_용도지역' : GetValue('저장_가격_용도지역'),
        '저장_가격_건축년도' : GetValue('저장_가격_건축년도'),
        '저장_가격_경과년도' : GetValue('저장_가격_경과년도'),
        '저장_가격_구조' : GetValue('저장_가격_구조'),
        '저장_가격_내용년수' : GetValue('저장_가격_내용년수'),
        '저장_가격_도로조건' : GetValue('저장_가격_도로조건'),
        '저장_가격_접근조건' : GetValue('저장_가격_접근조건'),
        '저장_가격_월관리비' : GetValue('저장_가격_월관리비'),
        '저장_가격_월임대료' : GetValue('저장_가격_월임대료'),
        '저장_가격_보증금' : GetValue('저장_가격_보증금'),
        '저장_가격_사례가격' : GetValue('저장_가격_사례가격')
    }, 'POST');

    GetComponent('DBGrid_경매사례').GetModifyData([
        { key : '저장_경매_사례번호', value : '사례번호', isDelRowInclude : true },
        { key : '저장_경매_소재지', value : '소재지', isDelRowInclude : true },
        { key : '저장_경매_법원감정가', value : '법원감정가', isDelRowInclude : true },
        { key : '저장_경매_업무용여부', value : '업무용여부', isDelRowInclude : true },
        { key : '저장_경매_이용상황', value : '이용상황', isDelRowInclude : true },
        { key : '저장_경매_전용면적', value : '전용면적', isDelRowInclude : true },
        { key : '저장_경매_층수', value : '층수_코드', isDelRowInclude : true },
        { key : '저장_경매_층수_비준율', value : '층수_비준율', isDelRowInclude : true },
        { key : '저장_경매_위치', value : '위치', isDelRowInclude : true },
        { key : '저장_경매_용도지역', value : '용도지역', isDelRowInclude : true },
        { key : '저장_경매_건축년도', value : '건축년도', isDelRowInclude : true },
        { key : '저장_경매_경과년도', value : '경과년도', isDelRowInclude : true },
        { key : '저장_경매_내용년수', value : '내용년수', isDelRowInclude : true },
        { key : '저장_경매_도로조건', value : '도로조건', isDelRowInclude : true },
        { key : '저장_경매_접근조건', value : '접근조건', isDelRowInclude : true },
        { key : '저장_경매_사례가격', value : '사례가격', isDelRowInclude : true },
        { key : '저장_경매_경매사건번호', value : '경매사건번호', isDelRowInclude : true },
        { key : '저장_경매_년도', value : '년도', isDelRowInclude : true },
        { key : '저장_경매_일련번호', value : '일련번호', isDelRowInclude : true },
        { key : '저장_경매_구조', value : '구조', isDelRowInclude : true },
        { key : '저장_경매_낙찰가격', value : '낙찰가격', isDelRowInclude : true },
        { key : '저장_경매_낙찰가율', value : '낙찰가율', isDelRowInclude : true },
    ]);
    RunQuery('저장_12_감정가_경매사례', {
        '저장_경매_년도' : GetValue('저장_경매_년도'),
        '저장_경매_일련번호' : GetValue('저장_경매_일련번호'),
        '저장_경매_사례번호' : GetValue('저장_경매_사례번호'),
        '저장_경매_경매사건번호' : GetValue('저장_경매_경매사건번호'),
        '저장_경매_소재지' : GetValue('저장_경매_소재지'),
        '저장_경매_업무용여부' : GetValue('저장_경매_업무용여부'),
        '저장_경매_이용상황' : GetValue('저장_경매_이용상황'),
        '저장_경매_전용면적' : GetValue('저장_경매_전용면적'),
        '저장_경매_층수' : GetValue('저장_경매_층수'),
        '저장_경매_층수_비준율' : GetValue('저장_경매_층수_비준율'),
        '저장_경매_위치' : GetValue('저장_경매_위치'),
        '저장_경매_용도지역' : GetValue('저장_경매_용도지역'),
        '저장_경매_건축년도' : GetValue('저장_경매_건축년도'),
        '저장_경매_경과년도' : GetValue('저장_경매_경과년도'),
        '저장_경매_구조' : GetValue('저장_경매_구조'),
        '저장_경매_내용년수' : GetValue('저장_경매_내용년수'),
        '저장_경매_도로조건' : GetValue('저장_경매_도로조건'),
        '저장_경매_접근조건' : GetValue('저장_경매_접근조건'),
        '저장_경매_법원감정가' : GetValue('저장_경매_법원감정가'),
        '저장_경매_사례가격' : GetValue('저장_경매_사례가격'),
        '저장_경매_낙찰가격' : GetValue('저장_경매_낙찰가격'),
        '저장_경매_낙찰가율' : GetValue('저장_경매_낙찰가율')
    }, 'POST');

    GetComponent('DBGrid_비준가격').GetModifyData([
        { key : '저장_비준_사례구분', value : '사례구분', isDelRowInclude : true },
        { key : '저장_비준_사례번호', value : '사례번호', isDelRowInclude : true },
        { key : '저장_비준_소재지_비교치', value : '소재지_비교치', isDelRowInclude : true },
        { key : '저장_비준_위치별비교_본건_적용율', value : '위치별비교_본건_적용율', isDelRowInclude : true },
        { key : '저장_비준_위치별비교_사례_적용율', value : '위치별비교_사례_적용율', isDelRowInclude : true },
        { key : '저장_비준_위치별비교_비교치', value : '위치별비교_비교치', isDelRowInclude : true },
        { key : '저장_비준_잔가율비교_비교치', value : '잔가율비교_비교치', isDelRowInclude : true },
        { key : '저장_비준_도로조건_비교치', value : '도로조건_비교치', isDelRowInclude : true },
        { key : '저장_비준_접근조건_본건_적용율', value : '접근조건_본건_적용율', isDelRowInclude : true },
        { key : '저장_비준_접근조건_사례_적용율', value : '접근조건_사례_적용율', isDelRowInclude : true },
        { key : '저장_비준_접근조건_비교치', value : '접근조건_비교치', isDelRowInclude : true },
        { key : '저장_비준_기타조건_본건_적용율', value : '기타조건_본건_적용율', isDelRowInclude : true },
        { key : '저장_비준_기타조건_사례_적용율', value : '기타조건_사례_적용율', isDelRowInclude : true },
        { key : '저장_비준_기타조건_비교치', value : '기타조건_비교치', isDelRowInclude : true },
        { key : '저장_비준_요인합계', value : '요인합계', isDelRowInclude : true },
        { key : '저장_비준_산정단가', value : '산정단가', isDelRowInclude : true },
        { key : '저장_비준_적용단가', value : '적용단가', isDelRowInclude : true },
        { key : '저장_비준_전용면적_사례', value : '전용면적', isDelRowInclude : true },
        { key : '저장_비준_년도', value : '년도', isDelRowInclude : true },
        { key : '저장_비준_일련번호', value : '일련번호', isDelRowInclude : true },
        { key : '저장_비준_층별비교_본건', value : '층별비교_본건', isDelRowInclude : true },
        { key : '저장_비준_층별비교_사례', value : '층별비교_사례', isDelRowInclude : true },
        { key : '저장_비준_층별비교_본건_적용율', value : '층별비교_본건_적용율', isDelRowInclude : true },
        { key : '저장_비준_층별비교_사례_적용율', value : '층별비교_사례_적용율', isDelRowInclude : true },
        { key : '저장_비준_층별비교_비교치', value : '층별비교_비교치', isDelRowInclude : true },
        { key : '저장_비준_가격_본건_일자', value : '가격_본건_일자', isDelRowInclude : true },
        { key : '저장_비준_가격_본건_적용율', value : '가격_본건_적용율', isDelRowInclude : true },
        { key : '저장_비준_가격_사례_일자', value : '가격_사례_일자', isDelRowInclude : true },
        { key : '저장_비준_가격_사례_적용율', value : '가격_사례_적용율', isDelRowInclude : true },
        { key : '저장_비준_기타조건_사례_내용', value : '기타조건_사례_내용', isDelRowInclude : true },
        { key : '저장_비준_사례가격', value : '사례가격', isDelRowInclude : true },
        { key : '저장_비준_환산금액', value : '환산금액', isDelRowInclude : true },
        { key : '저장_비준_가격_비교치', value : '가격_비교치', isDelRowInclude : true },
    ]);
    RunQuery('저장_13_감정가_비준가격', {
        '저장_비준_년도' : GetValue('저장_비준_년도'),
        '저장_비준_일련번호' : GetValue('저장_비준_일련번호'),
        '저장_비준_사례구분' : GetValue('저장_비준_사례구분'),
        '저장_비준_사례번호' : GetValue('저장_비준_사례번호'),
        '저장_비준_가격_본건_일자' : GetValue('저장_비준_가격_본건_일자'),
        '저장_비준_가격_본건_적용율' : GetValue('저장_비준_가격_본건_적용율'),
        '저장_비준_가격_사례_일자' : GetValue('저장_비준_가격_사례_일자'),
        '저장_비준_가격_사례_적용율' : GetValue('저장_비준_가격_사례_적용율'),
        '저장_비준_가격_비교치' : GetValue('저장_비준_가격_비교치'),
        '저장_비준_전용면적_사례' : GetValue('저장_비준_전용면적_사례'),
        '저장_비준_사례가격' : GetValue('저장_비준_사례가격'),
        '저장_비준_소재지_비교치' : GetValue('저장_비준_소재지_비교치'),
        '저장_비준_층별비교_본건' : GetValue('저장_비준_층별비교_본건'),
        '저장_비준_층별비교_본건_적용율' : GetValue('저장_비준_층별비교_본건_적용율'),
        '저장_비준_층별비교_사례' : GetValue('저장_비준_층별비교_사례'),
        '저장_비준_층별비교_사례_적용율' : GetValue('저장_비준_층별비교_사례_적용율'),
        '저장_비준_층별비교_비교치' : GetValue('저장_비준_층별비교_비교치'),
        '저장_비준_위치별비교_본건_적용율' : GetValue('저장_비준_위치별비교_본건_적용율'),
        '저장_비준_위치별비교_사례_적용율' : GetValue('저장_비준_위치별비교_사례_적용율'),
        '저장_비준_위치별비교_비교치' : GetValue('저장_비준_위치별비교_비교치'),
        '저장_비준_잔가율비교_비교치' : GetValue('저장_비준_잔가율비교_비교치'),
        '저장_비준_도로조건_비교치' : GetValue('저장_비준_도로조건_비교치'),
        '저장_비준_접근조건_본건_적용율' : GetValue('저장_비준_접근조건_본건_적용율'),
        '저장_비준_접근조건_사례_적용율' : GetValue('저장_비준_접근조건_사례_적용율'),
        '저장_비준_접근조건_비교치' : GetValue('저장_비준_접근조건_비교치'),
        '저장_비준_기타조건_본건_적용율' : GetValue('저장_비준_기타조건_본건_적용율'),
        '저장_비준_기타조건_사례_내용' : GetValue('저장_비준_기타조건_사례_내용'),
        '저장_비준_기타조건_사례_적용율' : GetValue('저장_비준_기타조건_사례_적용율'),
        '저장_비준_기타조건_비교치' : GetValue('저장_비준_기타조건_비교치'),
        '저장_비준_요인합계' : GetValue('저장_비준_요인합계'),
        '저장_비준_산정단가' : GetValue('저장_비준_산정단가'),
        '저장_비준_적용단가' : GetValue('저장_비준_적용단가'),
        '저장_비준_환산금액' : GetValue('저장_비준_환산금액')
    }, 'POST');
    RunQuery('저장_19_감정가_평가액산정', {
        'YYYY' : GetValue('Edit_KEY_년도'),
        'SEQ' : GetValue('Edit_KEY_감정순번'),
        'PR_MIN_AMT' : GetValue('MkEdit_평가_가격_최저_총액'),
        'PR_MIN_SIZE_DAN' : GetValue('MkEdit_평가_가격_최저_단가'),
        'PR_MAX_AMT' : GetValue('MkEdit_평가_가격_최고_총액'),
        'PR_MAX_SIZE_DAN' : GetValue('MkEdit_평가_가격_최고_단가'),
        'PR_RATE' : GetValue('MkEdit_평가_가격_비율'),
        'AU_MIN_AMT' : GetValue('MkEdit_평가_경매_최저_총액'),
        'AU_MIN_SIZE_DAN' : GetValue('MkEdit_평가_경매_최저_단가'),
        'AU_MAX_AMT' : GetValue('MkEdit_평가_경매_최고_총액'),
        'AU_MAX_SIZE_DAN' : GetValue('MkEdit_평가_경매_최고_단가'),
        'AU_RATE' : GetValue('MkEdit_평가_경매_비율'),
        'APPL_AMT' : GetValue('MkEdit_평가_결정가격_총액'),
        'APPL_SIZE_DAN' : GetValue('MkEdit_평가_결정가격_단가'),
        'INT_REP_SIZE' : GetValue('MkEdit_평가_인테리어_평형_M2'),
        'INT_REP_SIZE_PY' : GetValue('MkEdit_평가_인테리어_평형_평'),
        'INT_REP_DAN' : GetValue('MkEdit_평가_인테리어_보수단가'),
        'INT_REP_AMT' : GetValue('MkEdit_평가_인테리어_보수금액'),
        'INC_AMT' : GetValue('MkEdit_평가_평가가격_총액'),
        'INC_SIZE_DAN' : GetValue('MkEdit_평가_평가가격_단가'),
        'FNL_INC_AMT' : GetValue('MkEdit_평가_담보_최종평가가격'),
        'MA_MIN_AMT' : GetValue('MkEdit_평가_본건_최저_총액'),
        'MA_MIN_SIZE_DAN' : GetValue('MkEdit_평가_본건_최저_단가'),
        'MA_MAX_AMT' : GetValue('MkEdit_평가_본건_최고_총액'),
        'MA_MAX_SIZE_DAN' : GetValue('MkEdit_평가_본건_최고_단가'),
        'MA_RATE' : GetValue('MkEdit_평가_본건_비율'),
        'INT_REP_DAN_CODE' : GetValue('Combo_평가_인테리어단가'),
    }, 'POST');

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetModifyData([
        { key : '저장_배당표_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_배당표_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_배당표_각구의일련번호', value : 'RNO', isDelRowInclude : true },
        { key : '저장_배당표_각구의위치', value : 'RESI_NAME', isDelRowInclude : true },
        { key : '저장_배당표_주거용방의총수', value : 'RESI_RM_CNT', isDelRowInclude : true },
        { key : '저장_배당표_확정일자보유여부', value : 'FXDATE_YN', isDelRowInclude : true },
        { key : '저장_배당표_적용한방의총수', value : 'POSS_A_RM_CNT', isDelRowInclude : true },
        { key : '저장_배당표_실제임대차보증금', value : 'LEASE_AMT', isDelRowInclude : true },
        { key : '저장_배당표_최종적용임대차보증금', value : 'REP_BE_SEC_AMT', isDelRowInclude : true },
        { key : '저장_배당표_확정_임대차보증금', value : 'FXLEA_AMT', isDelRowInclude : true },
        { key : '저장_배당표_확정없는_임대차보증금', value : 'FXLEA_NO_AMT', isDelRowInclude : true },
    ]);

    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetModifyData([
        { key : '저장_배당표_상가_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_배당표_상가_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_배당표_상가_순번', value : 'RNO', isDelRowInclude : true },
        { key : '저장_배당표_상가_위치면적', value : 'C_DESC', isDelRowInclude : true },
        { key : '저장_배당표_상가_가임대적용여부', value : 'POSS_YN', isDelRowInclude : true },
        { key : '저장_배당표_상가_상호성명', value : 'HIR_NAME', isDelRowInclude : true },
        { key : '저장_배당표_상가_임대차보증금', value : 'STO_LSEC_AMT', isDelRowInclude : true },
        { key : '저장_배당표_상가_확정일자', value : 'FXDATE_YN', isDelRowInclude : true },
        { key : '저장_배당표_상가_월세', value : 'MRENT_AMT', isDelRowInclude : true },
        { key : '저장_배당표_상가_실제임대차보증금', value : 'LEASE_AMT', isDelRowInclude : true },
        { key : '저장_배당표_상가_최우선변제보증금', value : 'REP_BE_SEC_AMT', isDelRowInclude : true },
        { key : '저장_배당표_상가_상가임대차_확정', value : 'FXLEA_AMT', isDelRowInclude : true },
        { key : '저장_배당표_상가_상가임대차_확정없는', value : 'FXLEA_NO_AMT', isDelRowInclude : true },
    ]);

    GetComponent('DBGrid_배당금_계산').GetModifyData([
        { key : '저장_배당표_배당금_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_배당표_배당금_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순번', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당표구분', value : 'SHA_GU', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순위', value : 'RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_발생일자', value : 'RIGHT_DATE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리자', value : 'RIGHT_PERSON', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리의내용', value : 'RIGHT_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_말소여부', value : 'ERA_YN', isDelRowInclude : true },
        { key : '저장_배당표_배당금_단독담보', value : 'CRED_SELF_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_공동담보', value : 'CRED_COMB_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_표시순위', value : 'DISP_RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당순위', value : 'PRO_RATE_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_당사설정', value : 'HITE_YN', isDelRowInclude : true },
    ]);
}

function MC_912_저장_문서관리() {
    GetComponent('DBGrid_사진관리').GetModifyData([
        { key : '저장_배당표_배당금_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_배당표_배당금_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순번', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당표구분', value : 'SHA_GU', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순위', value : 'RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_발생일자', value : 'RIGHT_DATE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리자', value : 'RIGHT_PERSON', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리의내용', value : 'RIGHT_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_말소여부', value : 'ERA_YN', isDelRowInclude : true },
        { key : '저장_배당표_배당금_단독담보', value : 'CRED_SELF_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_공동담보', value : 'CRED_COMB_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_표시순위', value : 'DISP_RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당순위', value : 'PRO_RATE_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_당사설정', value : 'HITE_YN', isDelRowInclude : true },
    ]);

    GetComponent('DBGrid_문서').GetModifyData([
        { key : '저장_문서관리_문서_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_문서관리_문서_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_문서관리_문서_사진구분', value : 'PHOTO_DIV', isDelRowInclude : true },
        { key : '저장_문서관리_문서_순번', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_문서관리_문서_사진명', value : 'PHOTO_NAME', isDelRowInclude : true },
        { key : '저장_문서관리_문서_경로및파일명', value : 'FILE_NAME', isDelRowInclude : true },
        { key : '저장_문서관리_문서_비고', value : 'REMARK', isDelRowInclude : true },
        { key : '저장_문서관리_문서_전송된파일명', value : 'UPLOAD_FILE', isDelRowInclude : true },
    ]);

    RunQuery('저장_문서관리', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_문서관리_년도' : GetValue('저장_문서관리_년도'),
        '저장_문서관리_일련번호' : GetValue('저장_문서관리_일련번호'),
        '저장_문서관리_사진구분' : GetValue('저장_문서관리_사진구분'),
        '저장_문서관리_순번' : GetValue('저장_문서관리_순번'),
        '저장_문서관리_사진명' : GetValue('저장_문서관리_사진명'),
        '저장_문서관리_경로및파일명' : GetValue('저장_문서관리_경로및파일명'),
        '저장_문서관리_비고' : GetValue('저장_문서관리_비고'),
        '저장_문서관리_전송된사진명' : GetValue('저장_문서관리_전송된사진명')
    }, 'POST');
    RunQuery('Q_문서관리_사진', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('저장_문서관리_문서', {
        '저장_문서관리_문서_년도' : GetValue('저장_문서관리_문서_년도'),
        '저장_문서관리_문서_일련번호' : GetValue('저장_문서관리_문서_일련번호'),
        '저장_문서관리_문서_사진구분' : GetValue('저장_문서관리_문서_사진구분'),
        '저장_문서관리_문서_순번' : GetValue('저장_문서관리_문서_순번'),
        '저장_문서관리_문서_사진명' : GetValue('저장_문서관리_문서_사진명'),
        '저장_문서관리_문서_경로및파일명' : GetValue('저장_문서관리_문서_경로및파일명'),
        '저장_문서관리_문서_비고' : GetValue('저장_문서관리_문서_비고'),
        '저장_문서관리_문서_전송된파일명' : GetValue('저장_문서관리_문서_전송된파일명')
    }, 'POST');
    RunQuery('Q_문서관리_관련문서', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
}

function MC_990_저장_ValidationCheck() {
    GetComponent('TabControl1').GetCurSel('탭_Idx');

    SetValue('저장_Error_Message', '');

    GetComponent('DBGrid_배당금_계산').GetModifyData([
        { key : '저장_배당표_배당금_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_배당표_배당금_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순번', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당표구분', value : 'SHA_GU', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순위', value : 'RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_발생일자', value : 'RIGHT_DATE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리자', value : 'RIGHT_PERSON', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리의내용', value : 'RIGHT_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_말소여부', value : 'ERA_YN', isDelRowInclude : true },
        { key : '저장_배당표_배당금_단독담보', value : 'CRED_SELF_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_공동담보', value : 'CRED_COMB_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_표시순위', value : 'DISP_RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당순위', value : 'PRO_RATE_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_당사설정', value : 'HITE_YN', isDelRowInclude : true },
    ]);

    SetValue('저장_배당표_배당금_RowCount',GetArrayCnt('저장_배당표_배당금_일련번호'));

    for (let i = 0; i<GetNumber('저장_배당표_배당금_RowCount'); i+=1) {
        SetValue('i', i);

        MC_990_저장_ValidationCheck_배당표_배당금();
    }

    if (GetString('저장_Error_Message') != "") {
        return;
    }

    GetComponent('TabControl1').SetCurSel(4);
}

function MC_990_저장_ValidationCheck_배당표_배당금() {
    if (GetString('저장_Error_Message') != "") {
        return false;
    }

    SetValue('배당표_배당금계산_표시순위',StrToNum(GetArray('저장_배당표_배당금_표시순위', GetNumber('i'))));

    if ( GetNumber('배당표_배당금계산_표시순위') < 10 ) {
        return false;
    }

    if ( GetArray('저장_배당표_배당금_공동담보',GetValue('i')) <= 0 ) {
        SetValue('저장_Error_Message',"배당금의계산_채권최고액을 입력하여 주십시오.");
    }

    if ( GetArray('저장_배당표_배당금_권리의내용',GetValue('i')) == "" ) {
        SetValue('저장_Error_Message',"배당금의계산_권리의내용을 선택하여 주십시오.");
    }

    if ( GetArray('저장_배당표_배당금_권리자',GetValue('i')) == "" ) {
        SetValue('저장_Error_Message',"배당금의계산_권리자를 입력하여 주십시오.");
    }

    if ( GetArray('저장_배당표_배당금_발생일자',GetValue('i')) == "" || GetArray('저장_배당표_배당금_발생일자',GetNumber('i')) == "00000000" ) {
        SetValue('저장_Error_Message',"배당금의계산_권리발생일자를 입력하여 주십시오.");
    }

    if ( GetArray('저장_배당표_배당금_표시순위',GetNumber('i')) == "" ) {
        SetValue('저장_Error_Message',"배당금의계산_순위를 선택하여 주십시오.");
    }
}

function MC_999_배당() {
    RunQuery('Q_코드_최고채권액', {});
    RunQuery('Q_코드_가임대보증금적용지역', {});
    RunQuery('Q_코드_가임대보증금적용범위_상가', {});
    RunQuery('Q_코드_각구의일련번호', {});
    RunQuery('Q_코드_순위', {});
    RunQuery('Q_코드_권리의내용', {});
    // RunQuery('Q_배당표M', {
    //     '년도' : GetValue('년도'),
    //     '감정순번' : GetValue('감정순번'),
    // });
    // GetZoonData('Q_배당표M').GetRow(0, [
    //     { key: 'Combo_배당표_최고채권액', value: 'AUCTION_CODE' },
    //     { key: 'Edit_배당표_경매비용', value: 'AUCTION_AMT' },
    //     { key: 'Edit_배당표_최고채권액', value: 'CRED_MAX_AMT' },
    //     { key: 'Combo_배당표_가임대보증금적용범위', value: 'H_POSS_A_AREA' },
    //     { key: 'Edit_배당표_적용할주택가임대보증금액', value: 'H_POSS_A_AMT' },
    //     { key: 'Edit_배당표_예상낙찰가', value: 'H_PL_BID_AMT' },
    //     { key: 'Edit_배당표_경락가액', value: 'H_POSS_AMT' },
    //     { key: 'Combo_배당표_상가_가임대보증금_적용범위', value: 'B_POSS_A_AREA' },
    //     { key: 'Edit_배당표_적용할상가가임대보증금액', value: 'B_POSS_A_AMT' },
    //     { key: 'Edit_배당표_상가_예상낙찰가', value: 'B_PL_BID_AMT' },
    //     { key: 'Edit_배당표_상가_경락가액', value: 'B_POSS_AMT' },
    // ]);
    if (match(PageType.집합_오피스텔)) {
        RunQuery('Q_배당표_주택임차보증금_계산', {
            '년도' : GetValue('년도'),
            '감정순번' : GetValue('감정순번'),
        });
    }

    RunQuery('Q_배당표_상가임차보증금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_배당표_배당금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });

    MC_999_배당표_주택임대차보증금_계산();
    MC_배당표_상가임대차보증금_계산();

    for (let i = 0; i<6; i+=1) {
        SetValue('i', i);

        MC_999_배당금_Flag변경();
    }
}

function MC_999_배당금_Flag변경() {
    GetComponent('DBGrid_배당금_계산').GetRow(GetNumber('i'), [
        { key: '배당표_배당금_flag', value: 'FLAG'}
    ]);

    GetComponent('DBGrid_배당금_계산').SetModifyFlag('배당표_배당금_flag', GetValue('i'));
}

function MC_999_배당표_배당금_계산() {
    if (GetString('배당표_배당금계산_ColName') == 'RANK') {
        GetComponent('DBGrid_배당금_계산').SortField('RANK', 1);
    }
    GetComponent('DBGrid_배당금_계산').GetRow(-1, [
        { key: '배당표_배당금계산_공동담보', value: 'CRED_COMB_AMT'},
        { key: '배당표_배당금계산_단독담보', value: 'CRED_SELF_AMT'},
        { key: '배당표_배당금계산_공동담보_ORG', value: 'CRED_COMB_AMT_ORG'},
        { key: '배당표_배당금계산_단독담보_ORG', value: 'CRED_SELF_AMT_ORG'},
        { key: '배당표_배당금계산_당사설정', value: 'HITE_YN'},
        { key: '배당표_배당금계산_발생일자', value: 'RIGHT_DATE'},
    ]);

    GetComponent('DBGrid_배당금_계산').GetRows('', [
        { key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT'},
        { key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN'},
    ]);

    if ( GetValue('배당표_배당금계산_공동담보') == GetValue('배당표_배당금계산_공동담보_ORG')
        && GetValue('배당표_배당금계산_단독담보') == GetValue('배당표_배당금계산_단독담보_ORG') ) {
    } else {
        if ( GetString('배당표_배당금계산_ColName') == "CRED_SELF_AMT" ) {
            SetValue('배당표_배당금계산_공동담보', 0);
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'));
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'));
        } else if ( GetString('배당표_배당금계산_ColName') == "CRED_COMB_AMT"  ) {
            SetValue('배당표_배당금계산_단독담보', 0);
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'));
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'));
        }
    }

    SetValue('배당표_배당금계산_RowCount', GetArrayCnt(GetNumber('배당표_배당금계산_공동담보_Arr'))-1);

    if ( GetString('배당표_배당금계산_ColName') == "HITE_YN" ) {
        if ( GetString('배당표_배당금계산_당사설정') == "Y" ) {
            SetValue('배당표_배당금계산_발생일자',GetValue('MkEdit_감정일'));
        }
    }

    for (let i = GetNumber('배당표_배당금계산_RowCount'); i>=0; i+=-1) {
        SetValue('i', i);

        MC_999_배당표_배당금_최고채권액();
    }

    GetComponent('DBGrid_배당금_계산').SetRow(-1, [
        { key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산_단독담보')},
        { key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산_공동담보')},
        { key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산_공동담보_ORG')},
        { key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산_단독담보_ORG')},
        { key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산_발생일자')},
    ]);

    SetValue('Edit_배당표_최고채권액', Max('배당표_배당금계산_공동담보_Arr'));
    SetValue('배당표_배당금계산_당사설정', '');
    SetValue('배당표_배당금계산_발생일자', '');
}

function MC_999_배당표_배당금_기본항목자동설정() {
    GetComponent('DBGrid_배당금_계산').FindIndex('i', (row) => {
        return String(row["RIGHT_CODE"]) == '001';
    });

    if (GetNumber('i') >= 0) {
        GetComponent('DBGrid_배당금_계산').SetRow(GetNumber('i'), [
            { key: 'CRED_COMB_AMT', value: GetNumber('Edit_배당표_경매비용')}
        ]);
    }

    GetComponent('DBGrid_배당금_계산').FindIndex('i', (row) => {
        return String(row["RIGHT_CODE"]) == '003';
    });

    if (GetNumber('i') >= 0) {
        GetComponent('DBGrid_배당금_계산').SetRow(GetNumber('i'), [
            { key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_합계_최종적용가임대보증금')}
        ]);
    }

    GetComponent('DBGrid_배당금_계산').FindIndex('i', (row) => {
        return String(row["RIGHT_CODE"]) == '004';
    });

    if (GetNumber('i') >= 0) {
        GetComponent('DBGrid_배당금_계산').SetRow(GetNumber('i'), [
            { key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_상가_합계_최우선변제보증금')}
        ]);
    }

}

function MC_999_배당표_배당금_최고채권액() {
    if ( GetArray('배당표_배당금계산_말소여부_Arr',GetNumber('i')) == "Y" ) {
        RemoveArray('배당표_배당금계산_공동담보_Arr',GetNumber('i'));
    }
}

function MC_999_배당표_배당처리시권리자자료_CLEAR() {
    RunButton('Command_배당처리시_자료CLEAR');
}

function MC_999_배당표_주택임대차보증금_계산() {

    GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {
        return row['CD_CODE'] == GetString('Combo_배당표_가임대보증금적용범위');
    });

    GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetNumber('배당표_주택임대차보증금_RowPosition'), [
        { key: '배당표_가임대보증금적용범위', value: 'ATTR_03' },
    ]);

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(GetNumber('i'), [
        { key: '배당표_주택임대차보증금_방의총수', value: 'RESI_RM_CNT'},
        { key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT'},
        { key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT'},
        { key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN'},
    ]);

    SetValue('배당표_주택임대차보증금_확정_주택임대차보증금',0);
    SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금',0);

    if (GetString('배당표_주택임대차보증금_ColName') == "POSS_A_RM_CNT") {
        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetNumber('배당표_주택임대차보증금_적용한방의총수') * GetNumber('Edit_배당표_적용할주택가임대보증금액'));
        SetValue('배당표_주택임대차보증금_실제임대차보증금', 0);
    } else if (GetString('배당표_주택임대차보증금_ColName') == "LEASE_AMT") {
        SetValue('배당표_주택임대차보증금_적용한방의총수', 0);

        if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') > GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));

            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            } else {
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            }
        } else if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));
        } else {
            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            } else {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            }
        }
    } else {
        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetNumber('배당표_주택임대차보증금_적용한방의총수') * GetNumber('Edit_배당표_적용할주택가임대보증금액'));

        if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') > GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));

            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            } else {
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            }
        } else if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));
        } else {
            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            } else {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            }
        }
    }

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRow(GetNumber('i'), [
        { key: 'REP_BE_SEC_AMT', value: GetValue('배당표_주택임대차보증금_최종가임대보증금')},
        { key: 'FXLEA_AMT', value: GetValue('배당표_주택임대차보증금_확정_주택임대차보증금')},
        { key: 'FXLEA_NO_AMT', value: GetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금')},
        { key: 'POSS_A_RM_CNT', value: GetValue('배당표_주택임대차보증금_적용한방의총수')},
        { key: 'LEASE_AMT', value: GetValue('배당표_주택임대차보증금_실제임대차보증금')},
    ]);

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows('', [
        { key: '배당표_주택임대차보증금_방의총수Arr', value: 'RESI_RM_CNT'},
        { key: '배당표_주택임대차보증금_적용한방의총수Arr', value: 'POSS_A_RM_CNT'},
        { key: '배당표_주택임대차보증금_실제임대차보증금Arr', value: 'LEASE_AMT'},
        { key: '배당표_주택임대차보증금_최종가임대보증금Arr', value: 'REP_BE_SEC_AMT'},
        { key: '배당표_주택임대차보증금_확정_주택임대차보증금Arr', value: 'FXLEA_AMT'},
        { key: '배당표_주택임대차보증금_확정없는_주택임대차보증금Arr', value: 'FXLEA_NO_AMT'},
    ]);

    SetValue('Edit_배당표_합계_총방의개수', Sum('배당표_주택임대차보증금_방의총수Arr'));
    SetValue('Edit_배당표_합계_적용한방의개수', Sum('배당표_주택임대차보증금_적용한방의총수Arr'));
    SetValue('Edit_배당표_합계_실제임대차보증금', Sum('배당표_주택임대차보증금_실제임대차보증금Arr'));
    SetValue('Edit_배당표_합계_최종적용가임대보증금', Sum('배당표_주택임대차보증금_최종가임대보증금Arr'));
    SetValue('Edit_배당표_합계_주택임대차보증금_확정', Sum('배당표_주택임대차보증금_확정_주택임대차보증금Arr'));
    SetValue('Edit_배당표_합계_주택임대차보증금_확정없는', Sum('배당표_주택임대차보증금_확정없는_주택임대차보증금Arr'));
}

function MC_999_배당표_주택임대차보증금_계산_전체() {
    SetValue('Edit_배당표_예상낙찰가', GetValue('MkEdit_보정표_예상낙찰가'));
    SetValue('Combo_배당표_가임대보증금적용대상', GetValue('Combo_가임대보증금적용지역'));
    SetValue('Edit_배당표_경락가액',(GetNumber('Edit_배당표_예상낙찰가') - GetNumber('Edit_배당표_경매비용')) / 2);

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRowCount('배당표_주택임대차보증금_RowCount');

    for (let i = 0; i < GetNumber('배당표_주택임대차보증금_RowCount'); i+=1) {
        SetValue('i', i);

        MC_999_배당표_주택임대차보증금_계산();
    }
}

function MC_999_저장_배당() {
    SetValue('is배당처리',"Y");
    RunButton('Command_저장');
}

function MC_999_저장_배당금() {
    RunQuery('저장_배당금_배당금', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
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
        '저장_배당표_배당금_배당순위': GetValue('저장_배당표_배당금_배당순위'),
        '저장_배당표_배당금_당사설정': GetValue('저장_배당표_배당금_당사설정')
    }, 'POST');

    RunQuery('Q_배당표_배당금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
}

function MC_999_저장_주택임차보증금() {
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

    if (match(PageType.집합_오피스텔)) {
        RunQuery('저장_상가임차보증금', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번'),
            '저장_배당표_상가_년도' : GetValue('저장_배당표_상가_년도'),
            '저장_배당표_상가_일련번호' : GetValue('저장_배당표_상가_일련번호'),
            '저장_배당표_상가_순번' : GetValue('저장_배당표_상가_순번'),
            '저장_배당표_상가_위치면적' : GetValue('저장_배당표_상가_위치면적'),
            '저장_배당표_상가_가임대적용여부' : GetValue('저장_배당표_상가_가임대적용여부'),
            '저장_배당표_상가_상호성명' : GetValue('저장_배당표_상가_상호성명'),
            '저장_배당표_상가_임대차보증금' : GetValue('저장_배당표_상가_임대차보증금'),
            '저장_배당표_상가_확정일자' : GetValue('저장_배당표_상가_확정일자'),
            '저장_배당표_상가_월세' : GetValue('저장_배당표_상가_월세'),
            '저장_배당표_상가_실제임대차보증금' : GetValue('저장_배당표_상가_실제임대차보증금'),
            '저장_배당표_상가_최우선변제보증금' : GetValue('저장_배당표_상가_최우선변제보증금'),
            '저장_배당표_상가_상가임대차_확정' : GetValue('저장_배당표_상가_상가임대차_확정'),
            '저장_배당표_상가_상가임대차_확정없는' : GetValue('저장_배당표_상가_상가임대차_확정없는')
        }, 'POST');
    }

    RunQuery('Q_배당표_주택임차보증금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
}

function MC_공통보고서_조회() {
    RunQuery('Q_공통보고서_최고최저', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_공통보고서_보정표', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_공통보고서_당사설정액', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_공통보고서_초과부족설정액', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_공통보고서_최고최저JB', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_공통보고서_보정표JB', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_공통보고서_당사설정액JB', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('Q_공통보고서_초과부족설정액JB', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });

    SetValue('00_NUMBER',StrToNum(Left(GetString('결재진행현황'),1)));

    if (GetNumber('00_NUMBER') == 2) {
        GetZoonData('Q_공통보고서_최고최저').GetRow(0, [
            { key: 'Edit_공통보고서_본사_최저가', value: 'MIN_AMT' },
            { key: 'Edit_공통보고서_본사_최고가', value: 'MAX_AMT' },
        ]);
        GetZoonData('Q_공통보고서_보정표').GetRow(0, [
            { key: 'Edit_공통보고서_본사_평가가격', value: '평가가격' },
            { key: 'Edit_공통보고서_본사_예상낙찰가율', value: '예상낙찰가율' },
            { key: 'Edit_공통보고서_본사_예상낙찰가', value: '예상낙찰가' },
        ]);
        GetZoonData('Q_공통보고서_당사설정액').GetRow(0, [
            { key: 'Edit_공통보고서_본사_당사설정액', value: '채권금액' },
        ]);
        GetZoonData('Q_공통보고서_초과부족설정액').GetRow(0, [
            { key: 'Edit_공통보고서_본사_초과부족설정분', value: '초과_부족설정액' },
        ]);

        GetZoonData('Q_공통보고서_최고최저JB').GetRow(0, [
            { key: 'Edit_공통보고서_지점_최저가', value: 'MIN_AMT' },
            { key: 'Edit_공통보고서_지점_최고가', value: 'MAX_AMT' },
        ]);
        GetZoonData('Q_공통보고서_보정표JB').GetRow(0, [
            { key: 'Edit_공통보고서_지점_평가가격', value: '평가가격' },
            { key: 'Edit_공통보고서_지점_예상낙찰가율', value: '예상낙찰가율' },
            { key: 'Edit_공통보고서_지점_예상낙찰가', value: '예상낙찰가' },
        ]);
        GetZoonData('Q_공통보고서_당사설정액JB').GetRow(0, [
            { key: 'Edit_공통보고서_지점_당사설정액', value: '채권금액' },
        ]);
        GetZoonData('Q_공통보고서_초과부족설정액JB').GetRow(0, [
            { key: 'Edit_공통보고서_지점_초과부족설정분', value: '초과_부족설정액' },
        ]);
    } else if (GetNumber('00_NUMBER') != 2) {
        GetZoonData('Q_공통보고서_최고최저').GetRow(0, [
            { key: 'Edit_공통보고서_지점_최저가', value: 'MIN_AMT' },
            { key: 'Edit_공통보고서_지점_최고가', value: 'MAX_AMT' },
        ]);
        GetZoonData('Q_공통보고서_보정표').GetRow(0, [
            { key: 'Edit_공통보고서_지점_평가가격', value: '평가가격' },
            { key: 'Edit_공통보고서_지점_예상낙찰가율', value: '예상낙찰가율' },
            { key: 'Edit_공통보고서_지점_예상낙찰가', value: '예상낙찰가' },
        ]);
        GetZoonData('Q_공통보고서_당사설정액').GetRow(0, [
            { key: 'Edit_공통보고서_지점_당사설정액', value: '채권금액' },
        ]);
        GetZoonData('Q_공통보고서_초과부족설정액').GetRow(0, [
            { key: 'Edit_공통보고서_지점_초과부족설정분', value: '초과_부족설정액' },
        ]);
    }

}

function MC_도로주소반환() {
    GetComponent('DBGrid_도로주소_목록').GetRow(-1, [
        { key: '팝업_전체주소', value: '@ADDR'}
    ]);

    if (GetString('팝업_주소창호출위치') == '입력표') {
        SetValue('Edit_입력표_소재지1', GetValue('팝업_전체주소'));
    } else if (GetString('팝업_주소창호출위치') == '감정가_가격사례') {
        SetValue('감정가_가격_소재지',GetValue('팝업_전체주소') + " ");
    } else if (GetString('팝업_주소창호출위치') == '감정가_경매사례') {
        SetValue('감정가_경매_소재지', GetValue('팝업_전체주소') + " ");
    } else if (GetString('팝업_주소창호출위치') == '감정가_임대사례') {
        SetValue('감정가_임대_소재지', GetValue('팝업_전체주소') + " ");
    }

    GetComponent('SubForm_주소조회').HideSubForm();

    SetValue('팝업_주소창호출위치', '');
    SetValue('팝업_전체주소', '');
}

// function MC_배당표_배당금_기본항목자동설정() {
// QueryFunction(DB.Q_배당표_배당금_계산D.FindIndexArray());
// SetValue('i', Sum(GetNumber('m_index')));
// if (GetNumber('i') >= 0) {
//     QueryFunction(DB.Q_배당표_배당금_계산D.SetRows());
// }
//
// QueryFunction(DB.Q_배당표_배당금_계산D.FindIndexArray());
// SetValue('i', Sum(GetNumber('m_index')));
// if (GetNumber('i') >= 0) {
//     QueryFunction(DB.Q_배당표_배당금_계산D.SetRows());
// }
//
// QueryFunction(DB.Q_배당표_배당금_계산D.FindIndexArray());
// SetValue('i', Sum(GetNumber('m_index')));
// if (GetNumber('i') >= 0) {
//     QueryFunction(DB.Q_배당표_배당금_계산D.SetRows());
// }
//
// QueryFunction(DB.Q_배당표_배당금_계산D.ReplaceQuery());
// QueryFunction(DB.Q_배당표_배당금건물_계산D.FindIndexArray());
// SetValue('i', Sum(GetNumber('m_index')));
// if (GetNumber('i') >= 0) {
//     QueryFunction(DB.Q_배당표_배당금_계산D.SetRows());
// }
//
// QueryFunction(DB.Q_배당표_배당금건물_계산D.FindIndexArray());
// SetValue('i', Sum(GetNumber('m_index')));
// if (GetNumber('i') >= 0) {
//     QueryFunction(DB.Q_배당표_배당금_계산D.SetRows());
// }
//
// QueryFunction(DB.Q_배당표_배당금건물_계산D.FindIndexArray());
// SetValue('i', Sum(GetNumber('m_index')));
// if (GetNumber('i') >= 0) {
//     QueryFunction(DB.Q_배당표_배당금_계산D.SetRows());
// }
//
// QueryFunction(DB.Q_배당표_배당금건물_계산D.ReplaceQuery());

// TODO: 정의되어 있지 않은 매크로임
// 배당표_배당금_계산_EditChange
// 배당표_배당금건물_계산_EditChange
// }

function MC_배당표_상가건물_임대차보증금_계산() {
    GetZoonData('Q_코드_가임대보증금적용범위_상가').FindInMC_배당표_상가임대차보증금_계산dex('배당표_상가_RowPosition', (row) => {
        return row['CD_CODE'] == GetString('Combo_배당표_상가_가임대보증금_적용범위');
    });

    GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetNumber('배당표_상가_RowPosition'), [
        { key: '배당표_상가_최우선변제보증금', value: 'ATTR_02' },
        { key: '배당표_상가_가임대보증금_적용범위', value: 'ATTR_04' },
        { key: '배당표_상가_임대차보호법_적용범위', value: 'ATTR_03' }
    ]);

    MC_배당표_상가임대차보증금_계산();
}

function MC_배당표_상가임대차보증금_계산() {
    if (match(PageType.집합_상업용)) {
        GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {
            return row['CD_CODE'] == GetString('Combo_배당표_상가_임대차보호법');
        });
        GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetNumber('배당표_상가_RowPosition'), {
            key: '배당표_상가_임대차보호법_적용범위', value: 'ATTR_03',
        });
    }

    GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {
        return row['CD_CODE'] == GetString('Combo_배당표_상가_가임대보증금_적용범위');
    });
    GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetNumber('배당표_상가_RowPosition'), [
        { key: '배당표_상가_최우선변제보증금', value: 'ATTR_02' },
        { key: '배당표_상가_가임대보증금_적용범위', value: 'ATTR_04' },
        { key: '배당표_상가_임대차보호법_적용범위', value: 'ATTR_03' },
    ]);
    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRow(GetNumber('i'), [
        { key: '배당표_상가_임대차보증금', value: 'STO_LSEC_AMT'},
        { key: '배당표_상가_가임대여부', value: 'POSS_YN'},
        { key: '배당표_상가_확정일자여부', value: 'FXDATE_YN'},
        { key: '배당표_상가_실제임대차보증금', value: 'LEASE_AMT'},
        { key: '배당표_상가_월세', value: 'MRENT_AMT'},
    ]);

    SetValue('배당표_상가_임대차보증금_확정',0);
    SetValue('배당표_상가_임대차보증금_확정없는',0);
    SetValue('배당표_상가_실제임대차보증금',0);
    SetValue('배당표_상가_실제임대차보증금',GetNumber('배당표_상가_임대차보증금') + (GetNumber('배당표_상가_월세') * 100));

    // 가임대의 경우
    if (GetString('배당표_상가_가임대여부') == 'Y') {
        SetValue('배당표_상가_최우선변제보증금',GetValue('배당표_상가_최우선변제보증금'));
    } else {
        // 보증금이 한도액 내이면
        if (GetNumber('배당표_상가_실제임대차보증금') <= GetNumber('배당표_상가_가임대보증금_적용범위')) {
            if (GetNumber('배당표_상가_임대차보증금') > 0) {
                if (GetNumber('배당표_상가_임대차보증금') <= GetNumber('배당표_상가_최우선변제보증금')) {
                    SetValue('배당표_상가_최우선변제보증금', GetValue('배당표_상가_최우선변제보증금'));
                } else if (GetNumber('배당표_상가_임대차보증금') > GetNumber('배당표_상가_최우선변제보증금')) {
                    if (GetString('배당표_상가_확정일자여부') == 'Y') {
                        SetValue('배당표_상가_최우선변제보증금', GetValue('배당표_상가_최우선변제보증금'));
                        SetValue('배당표_상가_임대차보증금_확정', GetNumber('배당표_상가_임대차보증금') - GetNumber('배당표_상가_최우선변제보증금'));
                        SetValue('배당표_상가_임대차보증금_확정없는', 0);
                    } else {
                        SetValue('배당표_상가_최우선변제보증금', GetValue('배당표_상가_최우선변제보증금'));
                        SetValue('배당표_상가_임대차보증금_확정',0);
                        SetValue('배당표_상가_임대차보증금_확정없는',GetNumber('배당표_상가_임대차보증금') - GetNumber('배당표_상가_최우선변제보증금'));
                    }
                }
            } else {
                SetValue('배당표_상가_최우선변제보증금',0);
            }
        } else {
            if (GetString('배당표_상가_확정일자여부') == 'Y') {
                SetValue('배당표_상가_최우선변제보증금', 0);
                SetValue('배당표_상가_임대차보증금_확정', GetValue('배당표_상가_임대차보증금'));
                SetValue('배당표_상가_임대차보증금_확정없는', 0);
            } else {
                SetValue('배당표_상가_최우선변제보증금',0);
                SetValue('배당표_상가_임대차보증금_확정',0);
                SetValue('배당표_상가_임대차보증금_확정없는',GetValue('배당표_상가_임대차보증금'));
            }
        }
    }

    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').SetRow(GetNumber('i'), [
        { key: 'REP_BE_SEC_AMT', value: GetValue('배당표_상가_최우선변제보증금')},
        { key: 'FXLEA_AMT', value: GetValue('배당표_상가_임대차보증금_확정')},
        { key: 'FXLEA_NO_AMT', value: GetValue('배당표_상가_임대차보증금_확정없는')},
        { key: 'LEASE_AMT', value: GetValue('배당표_상가_실제임대차보증금')},
    ]);

    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRows('', [
        { key: '배당표_상가_임대차보증금_Arr', value: 'STO_LSEC_AMT'},
        { key: '배당표_상가_월세_Arr', value: 'MRENT_AMT'},
        { key: '배당표_상가_실제임대차보증금_Arr', value: 'LEASE_AMT'},
        { key: '배당표_상가_최우선변제보증금_Arr', value: 'REP_BE_SEC_AMT'},
        { key: '배당표_상가_임대차보증금_확정_Arr', value: 'FXLEA_AMT'},
        { key: '배당표_상가_임대차보증금_확정없는_Arr', value: 'FXLEA_NO_AMT'},
    ]);

    SetValue('Edit_배당표_상가_합계_보증금', Sum('배당표_상가_임대차보증금_Arr'));
    SetValue('Edit_배당표_상가_합계_월세', Sum('배당표_상가_월세_Arr'));
    SetValue('Edit_배당표_상가_합계_실제임대차보증금', Sum('배당표_상가_실제임대차보증금_Arr'));
    SetValue('Edit_배당표_상가_합계_최우선변제보증금', Sum('배당표_상가_최우선변제보증금_Arr'));
    SetValue('Edit_배당표_상가_합계_상가임대차보증금_확정', Sum('배당표_상가_임대차보증금_확정_Arr'));
    SetValue('Edit_배당표_상가_합계_상가임대차보증금_확정없는', Sum('배당표_상가_임대차보증금_확정없는_Arr'));
}

function MC_배당표_상가임대차보증금_계산_전체() {
    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRowCount('배당표_상가_RowCount');

    SetValue('Edit_배당표_상가_예상낙찰가',GetValue('MkEdit_보정표_예상낙찰가'));
    SetValue('Edit_배당표_상가_경락가액',(GetNumber('Edit_배당표_상가_예상낙찰가') - GetNumber('Edit_배당표_경매비용')) / 3);

    if (match(PageType.집합_상업용)) {
        for (let i = 0; i < GetNumber('배당표_상가_RowCount'); i+=1) {
            SetValue('i', i);

            MC_배당표_상가임대차보증금_계산();
        }
    }
}
function MC_사유_상태변경() {
    if (GetNumber('MkEdit_입력표_담보제공_비율') != 100) {
        SetValue('사유_상태', "활성");
    } else {
        SetValue('사유_상태', "비활성");
    }

    if (GetString('사유_상태') == '활성') {
        GetComponent('MkEdit_입력표_담보제공_사유').SetReadOnly(0);
    } else if (GetString('사유_상태') == '비활성') {
        GetComponent('MkEdit_입력표_담보제공_사유').SetReadOnly(1);
    }
}

function MC_저장_상가임차보증금() {
    RunQuery('저장_상가임차보증금', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_배당표_상가_년도' : GetValue('저장_배당표_상가_년도'),
        '저장_배당표_상가_일련번호' : GetValue('저장_배당표_상가_일련번호'),
        '저장_배당표_상가_순번' : GetValue('저장_배당표_상가_순번'),
        '저장_배당표_상가_위치면적' : GetValue('저장_배당표_상가_위치면적'),
        '저장_배당표_상가_가임대적용여부' : GetValue('저장_배당표_상가_가임대적용여부'),
        '저장_배당표_상가_상호성명' : GetValue('저장_배당표_상가_상호성명'),
        '저장_배당표_상가_임대차보증금' : GetValue('저장_배당표_상가_임대차보증금'),
        '저장_배당표_상가_확정일자' : GetValue('저장_배당표_상가_확정일자'),
        '저장_배당표_상가_월세' : GetValue('저장_배당표_상가_월세'),
        '저장_배당표_상가_실제임대차보증금' : GetValue('저장_배당표_상가_실제임대차보증금'),
        '저장_배당표_상가_최우선변제보증금' : GetValue('저장_배당표_상가_최우선변제보증금'),
        '저장_배당표_상가_상가임대차_확정' : GetValue('저장_배당표_상가_상가임대차_확정'),
        '저장_배당표_상가_상가임대차_확정없는' : GetValue('저장_배당표_상가_상가임대차_확정없는')
    }, 'POST');
    RunQuery('Q_배당표_상가임차보증금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
}

function MC_탁상감정_조회() {
    GetComponent('RichEditor_탁상감정').SetFontSize(8);
    RunQuery('Q_탁상감정', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    GetZoonData('Q_탁상감정').GetRow(0, [
        { key: '탁상감정_내용', value: 'ESTI_OPI' },
        { key: '탁상감정_요청일자', value: 'REQ_DATE' },
        { key: '탁상감정_회신일자', value: 'RES_DATE' },
        { key: 'Edit_탁상감정_탁상감정가', value: 'RES_PL_BID_AMT' },
    ]);
    SetValue('탁상감정_내용', StrReplace(GetString('탁상감정_내용'), "&qt","'"));
    GetComponent('RichEditor_탁상감정').SetRichEditorRTF('탁상감정_내용');

    if (GetNumber('isReadOnly') == 0) {
        GetComponent('TabControl1').EnableTab(-1, 0);
        GetComponent('TabControl1').EnableTab(0, 1);
        GetComponent('TabControl1').EnableTab(5, 1);
        GetComponent('TabControl1').EnableTab(7, 1);
        GetComponent('TabControl1').SetItemText(1, '');
        GetComponent('TabControl1').SetItemText(2, '');
        GetComponent('TabControl1').SetItemText(3, '');
        GetComponent('TabControl1').SetItemText(4, '');
        GetComponent('TabControl1').SetItemText(6, '');
    }
}

function MC_탭_상태변경() {
    GetComponent('TabControl1').EnableTab(5, 0);
    GetComponent('TabControl1').EnableTab(6, 0);
}

function MC_가격사례_Checkbox(){
    GetComponent('DBGrid_가격사례').GetRow(-1, [
        { key: '가격사례_Checkbox', value: 'CHECK_YN'},
        { key: '가격사례_사례번호', value: 'LN_SEQ'},
        { key: '가격사례_생성번호', value: 'RNO'}
    ]);

    if(GetString('가격사례_Checkbox') == "0"){
        return
    }

    GetComponent('DBGrid_가격사례').FindIndexArray('m_index', (target) => {
        return Number(target['RNO']) != Number(target['가격사례_생성번호']);
    });

    GetComponent('DBGrid_가격사례').SetRow(GetNumber('m_index'), [
        { key: 'CHECK_YN', value: '0'},
    ]);
}

function MC_가격사례_D_삭제(){
    SetValue('가격사례_D_삭제RowPosition'),GetArray('i_Arr',GetNumber('i'));
    GetZoonData('Q_가격사례_D').DeleteRow(GetNumber('가격사례_D_삭제RowPosition'));
    GetZoonData('Q_가격사례_D').ReplaceQuery();
    // GetComponent('DBGrid_가격사례_D').DeleteRow();
}

function MC_가격사례_MinMax(){
    GetZoonData('Q_가격사례_D').GetRow(GetNumber('i'), [
        { key: '가격사례_Checkbox', value: 'CHECK_YN' },
    ]);

    if (GetString('가격사례_Checkbox') == "0") {
        RemoveArray('가격사례_최저가_Arr',GetNumber('i'));
        RemoveArray('가격사례_최고가_Arr',GetNumber('i'));
        RemoveArray('가격사례_평당단가_Arr',GetNumber('i'));
    }
}

function MC_가격사례_SYNC(){
    GetComponent('DBGrid_가격사례_D').GetRow(GetNumber('i'), [
        { key: '가격사례_사례번호', value: 'LN_SEQ'},
        { key: '가격사례_생성번호', value: 'RNO'},
        { key: '가격사례_선택여부', value: 'CHECK_YN'},
        { key: '가격사례_면적', value: 'B_SIZE'},
        { key: '가격사례_면적_평', value: 'B_SIZE_PY'},
        { key: '가격사례_최저가', value: 'CURR_MIN_AMT'},
        { key: '가격사례_최고가', value: 'CURR_MAX_AMT'},
        { key: '가격사례_평균가격', value: 'CURR_AVG_AMT'},
        { key: '가격사례_평당단가', value: 'CURR_PY_DAN'},
        { key: '가격사례_전세가', value: 'LEASE_AMT'},
        { key: '가격사례_전세가비율', value: 'LEASE_RATE'},
    ]);

    GetZoonData('Q_가격사례_D').FindIndex('가격사례_위치Idx', (row) => {
        return row['LN_SEQ'] == GetString('가격사례_사례번호') &&  row['RNO'] == GetString('가격사례_생성번호')
    });

    if(GetNumber('가격사례_위치Idx') < 0){
        GetZoonData('Q_가격사례_D').AddRow(0, [
            GetValue('가격사례_위치Idx'),
            GetValue('가격사례_위치Idx'),
            GetValue('가격사례_사례번호'),
            GetValue('가격사례_생성번호'),
            GetValue('가격사례_선택여부'),
            GetValue('가격사례_면적'),
            GetValue('가격사례_면적_평'),
            GetValue('가격사례_최저가'),
            GetValue('가격사례_최고가'),
            GetValue('가격사례_평균가격'),
            GetValue('가격사례_평당단가'),
            GetValue('가격사례_전세가'),
            GetValue('가격사례_전세가비율'),
        ]);

    }else if(GetNumber('가격사례_위치Idx') >= 0){
        GetZoonData('Q_가격사례_D').SetRow(GetNumber('가격사례_위치Idx'),[
            { key: 'LN_SEQ', value: GetValue('가격사례_사례번호')},
            { key: 'RNO', value: GetValue('가격사례_생성번호')},
            { key: 'CHECK_YN', value: GetValue('가격사례_선택여부')},
            { key: 'B_SIZE', value: GetValue('가격사례_면적')},
            { key: 'B_SIZE_PY', value: GetValue('가격사례_면적_평')},
            { key: 'CURR_MIN_AMT', value: GetValue('가격사례_최저가')},
            { key: 'CURR_MAX_AMT', value: GetValue('가격사례_최고가')},
            { key: 'CURR_AVG_AMT', value: GetValue('가격사례_평균가격')},
            { key: 'CURR_PY_DAN', value: GetValue('가격사례_평당단가')},
            { key: 'LEASE_AMT', value: GetValue('가격사례_전세가')},
            { key: 'LEASE_RATE', value: GetValue('가격사례_전세가비율')},
        ])
    }

}

function MC_가격사례_금액(){
    GetZoonData('Q_가격사례_D').GetRowCount('가격사례_D_RowCount');

    GetZoonData('Q_가격사례_D').GetRows('',[
        { key: '가격사례_최고가_Arr', value: 'CURR_MAX_AMT'},
        { key: '가격사례_최저가_Arr', value: 'CURR_MIN_AMT'},
        { key: '가격사례_평당단가_Arr', value: 'CURR_PY_DAN'},
    ]);

    // LoopMacro
    for(let i = GetNumber('가격사례_D_RowCount') - 1 ; i >= 0; i+=-1){
        SetValue('i', i);

        MC_가격사례_MinMax();
    }

    GetComponent('DBGrid_본건').FindIndex('00_TEMP', (row) => {
        return row["CHECK_YN"] == 1 ;
    });    

    GetComponent('DBGrid_본건').GetRow(GetNumber('00_TEMP'),[
        { key: '본건_평형', value: 'B_SIZE_PY'},
    ])

    SetValue('MkEdit_인근_최저가격', Min('가격사례_평당단가_Arr') * GetNumber('본건_평형'));

    SetValue('MkEdit_인근_최저가격', GetNumber('MkEdit_인근_최저가격') / 1000000);
    SetValue('MkEdit_인근_최저가격', Round(GetNumber('MkEdit_인근_최저가격'),6));
    SetValue('MkEdit_인근_최저가격', GetNumber('MkEdit_인근_최저가격')*1000000);

    SetValue('MkEdit_인근_최고가격', Max('가격사례_평당단가_Arr') * GetNumber('본건_평형'));
    SetValue('MkEdit_인근_최고가격', GetNumber('MkEdit_인근_최고가격')/1000000);
    SetValue('MkEdit_인근_최고가격', Round(GetNumber('MkEdit_인근_최고가격'),6));
    SetValue('MkEdit_인근_최고가격', GetNumber('MkEdit_인근_최고가격')*1000000);

    SetValue('MkEdit_인근_비율',(GetNumber('MkEdit_인근_최저가격')/GetNumber('MkEdit_인근_최고가격'))*100);

    
    // SetValue('MkEdit_인근_최저가격', Min('가격사례_최저가_Arr'));

    // SetValue('MkEdit_인근_최저가격', GetNumber('MkEdit_인근_최저가격') / 1000000);
    // SetValue('MkEdit_인근_최저가격', Round(GetNumber('MkEdit_인근_최저가격'),6));
    // SetValue('MkEdit_인근_최저가격', GetNumber('MkEdit_인근_최저가격')*1000000);

    // SetValue('MkEdit_인근_최고가격', Max('가격사례_최고가_Arr'));
    // SetValue('MkEdit_인근_최고가격', GetNumber('MkEdit_인근_최고가격')/1000000);
    // SetValue('MkEdit_인근_최고가격', Round(GetNumber('MkEdit_인근_최고가격'),6));
    // SetValue('MkEdit_인근_최고가격', GetNumber('MkEdit_인근_최고가격')*1000000);

    // SetValue('MkEdit_인근_비율',(GetNumber('MkEdit_인근_최저가격')/GetNumber('MkEdit_인근_최고가격'))*100);

}

function MC_경매_MinMax(){
    GetComponent('DBGrid_경매사례').GetRow(GetNumber('i'),[
        { key: '경매_Checkbox', value: 'CHECK_YN'},
    ]);

    if ( GetString('경매_Checkbox') == "0" ) {
        RemoveArray('경매_법사가격_Arr',GetNumber('i'));
        RemoveArray('경매_평당단가_Arr',GetNumber('i'));
    }
}

function MC_경매_금액(){
    GetComponent('DBGrid_경매사례').GetRowCount('경매사례_RowCount');

    GetComponent('DBGrid_경매사례').GetCurSel('경매사례_RowPosition');

    GetComponent('DBGrid_경매사례').GetRows('',[
        { key: '경매_낙찰가격_Arr', value: 'BID_AMT'},
        { key: '경매_법사가격_Arr', value: 'LAW_AMT'},
        { key: '경매_평당단가_Arr', value: 'CURR_PY_DAN'},
    ]);

    for(let i = GetNumber('경매사례_RowCount')-1; i >= 0; i+=-1 ){
        SetValue('i', i);

        MC_경매_MinMax();
    }

    GetComponent('DBGrid_본건').FindIndex('경매사례_RowPosition', (row) => {
        return row["CHECK_YN"] == 1;
    });

    GetComponent('DBGrid_본건').GetRow(GetNumber('00_TEMP'), [
        { key: '본건_평형', value: 'B_SIZE_PY'}
    ]);

    SetValue('MkEdit_경매_최저가격',Min('경매_평당단가_Arr')*GetNumber('본건_평형'))
    SetValue('MkEdit_경매_최저가격',GetNumber('MkEdit_경매_최저가격')/1000000)
    SetValue('MkEdit_경매_최저가격',Round(GetNumber('MkEdit_경매_최저가격'),6))
    SetValue('MkEdit_경매_최저가격',GetNumber('MkEdit_경매_최저가격')*1000000)
    SetValue('MkEdit_경매_최고가격',Max('경매_평당단가_Arr')*GetNumber('본건_평형'))
    SetValue('MkEdit_경매_최고가격',GetNumber('MkEdit_경매_최고가격')/1000000)
    SetValue('MkEdit_경매_최고가격',Round(GetNumber('MkEdit_경매_최고가격'),6))
    SetValue('MkEdit_경매_최고가격',GetNumber('MkEdit_경매_최고가격')*1000000)
    SetValue('MkEdit_경매_비율',(GetNumber('MkEdit_경매_최저가격')/GetNumber('MkEdit_경매_최고가격'))*100) 
}

function MC_배당금_Flag변경() {
    GetComponent('DBGrid_배당금_계산').GetRow(GetNumber('i'), [
        { key: '배당표_배당금_flag', value: 'FLAG'}
    ]);

    GetComponent('DBGrid_배당금_계산').SetModifyFlag('배당표_배당금_flag', GetValue('i'));
}

function MC_배당표_배당금_계산() {
    if (GetString('배당표_배당금계산_ColName') == 'RANK') {
        GetComponent('DBGrid_배당금_계산').SortField('RANK', 1);
    }
    GetComponent('DBGrid_배당금_계산').GetRow(-1, [
        { key: '배당표_배당금계산_공동담보', value: 'CRED_COMB_AMT'},
        { key: '배당표_배당금계산_단독담보', value: 'CRED_SELF_AMT'},
        { key: '배당표_배당금계산_공동담보_ORG', value: 'CRED_COMB_AMT_ORG'},
        { key: '배당표_배당금계산_단독담보_ORG', value: 'CRED_SELF_AMT_ORG'},
        { key: '배당표_배당금계산_당사설정', value: 'HITE_YN'},
        { key: '배당표_배당금계산_발생일자', value: 'RIGHT_DATE'},
    ]);

    GetComponent('DBGrid_배당금_계산').GetRows('', [
        { key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT'},
        { key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN'},
    ]);

    if ( GetValue('배당표_배당금계산_공동담보') == GetValue('배당표_배당금계산_공동담보_ORG')
        && GetValue('배당표_배당금계산_단독담보') == GetValue('배당표_배당금계산_단독담보_ORG') ) {
    } else {
        if ( GetValue('배당표_배당금계산_ColName') == "CRED_SELF_AMT" ) {
            SetValue('배당표_배당금계산_공동담보', 0);
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'));
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'));
        } else if ( GetValue('배당표_배당금계산_ColName') == "CRED_COMB_AMT"  ) {
            SetValue('배당표_배당금계산_단독담보', 0);
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'));
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'));
        }
    }

    
    if ( GetValue('배당표_배당금계산_ColName') == "HITE_YN" ) {
        if ( GetValue('배당표_배당금계산_당사설정') == "Y" ) {
            SetValue('배당표_배당금계산_발생일자',GetValue('MkEdit_감정일'));
        }
    }

    SetValue('배당표_배당금계산_RowCount', GetArrayCnt(GetNumber('배당표_배당금계산_공동담보_Arr'))-1);
    
    for (let i = GetNumber('배당표_배당금계산_RowCount'); i>=0; i+=-1) {
        SetValue('i', i);

        MC_배당표_배당금_최고채권액();
    }

    GetComponent('DBGrid_배당금_계산').SetRow(-1, [
        { key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산_단독담보')},
        { key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산_공동담보')},
        { key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산_공동담보_ORG')},
        { key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산_단독담보_ORG')},
        { key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산_발생일자')},
    ]);

    SetValue('Edit_배당표_최고채권액', Max('배당표_배당금계산_공동담보_Arr'));
    SetValue('배당표_배당금계산_당사설정', '');
    SetValue('배당표_배당금계산_발생일자', '');
}

function MC_배당표_배당금_기본항목자동설정() {
    GetComponent('DBGrid_배당금_계산').FindIndex('i', (row) => {
        return String(row["RIGHT_CODE"]) == '001';
    });

    if (GetNumber('i') >= 0) {
        GetComponent('DBGrid_배당금_계산').SetRow(GetNumber('i'), [
            { key: 'CRED_COMB_AMT', value: GetNumber('Edit_배당표_경매비용')}
        ]);
    }

    GetComponent('DBGrid_배당금_계산').FindIndex('i', (row) => {
        return String(row["RIGHT_CODE"]) == '003';
    });

    if (GetNumber('i') >= 0) {
        GetComponent('DBGrid_배당금_계산').SetRow(GetNumber('i'), [
            { key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_합계_최종적용가임대보증금')}
        ]);
    }

    // GetComponent('DBGrid_배당금_계산').FindIndex('i', (target) => {
    //     return String(target['RIGHT_CODE']) == '004';
    // });

    // if (GetNumber('i') >= 0) {
    //     GetComponent('DBGrid_배당금_계산').SetRow(GetNumber('i'), [
    //         { key: 'CRED_COMB_AMT', value: 'Edit_배당표_상가_합계_최우선변제보증금'}
    //     ]);
    // }
}


function MC_배당표_배당금_최고채권액() {
    if ( GetArray('배당표_배당금계산_말소여부_Arr',GetNumber('i')) == "Y" ) {
        RemoveArray('배당표_배당금계산_공동담보_Arr',GetNumber('i'));
    }
}

function MC_배당표_배당처리시권리자자료_CLEAR() {
    RunButton('Command_배당처리시_자료CLEAR');
}

function MC_배당표_주택임대차보증금_계산() {
    GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {
        return row['CD_CODE'] == GetString('Combo_배당표_가임대보증금적용범위');
    });

    GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetNumber('배당표_주택임대차보증금_RowPosition'), [
        { key: '배당표_가임대보증금적용범위', value: 'ATTR_03' },
    ]);

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(GetNumber('i'), [
        { key: '배당표_주택임대차보증금_방의총수', value: 'RESI_RM_CNT'},
        { key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT'},
        { key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT'},
        { key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN'},
    ]);

    SetValue('배당표_주택임대차보증금_확정_주택임대차보증금',0);
    SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금',0);

    if (GetString('배당표_주택임대차보증금_ColName') == "POSS_A_RM_CNT") {
        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetNumber('배당표_주택임대차보증금_적용한방의총수') * GetNumber('Edit_배당표_적용할주택가임대보증금액'));
        SetValue('배당표_주택임대차보증금_실제임대차보증금', 0);
    } else if (GetString('배당표_주택임대차보증금_ColName') == "LEASE_AMT") {
        SetValue('배당표_주택임대차보증금_적용한방의총수', 0);

        if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') > GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));

            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            } else {
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            }
        } else if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));
        } else {
            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            } else {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            }
        }
    } else {
        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetNumber('배당표_주택임대차보증금_적용한방의총수') * GetNumber('Edit_배당표_적용할주택가임대보증금액'));

        if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') > GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));

            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            } else {
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'));
            }
        } else if (GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('배당표_가임대보증금적용범위')
            && GetNumber('배당표_주택임대차보증금_실제임대차보증금') <= GetNumber('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'));
        } else {
            if (GetString('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            } else {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0);
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'));
            }
        }
    }

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRow(GetNumber('i'), [
        { key: 'REP_BE_SEC_AMT', value: GetValue('배당표_주택임대차보증금_최종가임대보증금')},
        { key: 'FXLEA_AMT', value: GetValue('배당표_주택임대차보증금_확정_주택임대차보증금')},
        { key: 'FXLEA_NO_AMT', value: GetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금')},
        { key: 'POSS_A_RM_CNT', value: GetValue('배당표_주택임대차보증금_적용한방의총수')},
        { key: 'LEASE_AMT', value: GetValue('배당표_주택임대차보증금_실제임대차보증금')},
    ]);

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows('', [
        { key: '배당표_주택임대차보증금_방의총수Arr', value: 'RESI_RM_CNT'},
        { key: '배당표_주택임대차보증금_적용한방의총수Arr', value: 'POSS_A_RM_CNT'},
        { key: '배당표_주택임대차보증금_실제임대차보증금Arr', value: 'LEASE_AMT'},
        { key: '배당표_주택임대차보증금_최종가임대보증금Arr', value: 'REP_BE_SEC_AMT'},
        { key: '배당표_주택임대차보증금_확정_주택임대차보증금Arr', value: 'FXLEA_AMT'},
        { key: '배당표_주택임대차보증금_확정없는_주택임대차보증금Arr', value: 'FXLEA_NO_AMT'},
    ]);

    SetValue('Edit_배당표_합계_총방의개수', Sum('배당표_주택임대차보증금_방의총수Arr'));
    SetValue('Edit_배당표_합계_적용한방의개수', Sum('배당표_주택임대차보증금_적용한방의총수Arr'));
    SetValue('Edit_배당표_합계_실제임대차보증금', Sum('배당표_주택임대차보증금_실제임대차보증금Arr'));
    SetValue('Edit_배당표_합계_최종적용가임대보증금', Sum('배당표_주택임대차보증금_최종가임대보증금Arr'));
    SetValue('Edit_배당표_합계_주택임대차보증금_확정', Sum('배당표_주택임대차보증금_확정_주택임대차보증금Arr'));
    SetValue('Edit_배당표_합계_주택임대차보증금_확정없는', Sum('배당표_주택임대차보증금_확정없는_주택임대차보증금Arr'));
}

function MC_배당표_주택임대차보증금_계산_전체() {
    SetValue('Edit_배당표_예상낙찰가', GetValue('MkEdit_보정표_예상낙찰가'));
    SetValue('Combo_배당표_가임대보증금적용대상', GetValue('Combo_가임대보증금적용지역'));
    SetValue('Edit_배당표_경락가액',(GetNumber('Edit_배당표_예상낙찰가') - GetNumber('Edit_배당표_경매비용')) / 2);

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRowCount('배당표_주택임대차보증금_RowCount');

    for (let i = 0; i < GetNumber('배당표_주택임대차보증금_RowCount'); i+=1) {
        SetValue('i', i);

        MC_배당표_주택임대차보증금_계산();
    }

}

function MC_보정표_예상낙찰가(){
    SetValue('MkEdit_보정표_적용할낙찰가율',
            GetNumber('MkEdit_보정표_기준낙찰가율')*
            GetNumber('MkEdit_보정표_아파트단지규모_적용율')*
            GetNumber('MkEdit_보정표_전유부분면적_적용율')*
            GetNumber('MkEdit_보정표_전유부분위치_적용율')*
            GetNumber('MkEdit_보정표_건축물의경과년도_적용율')*
            GetNumber('MkEdit_보정표_점유자의권리형태')
        );

    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);
}

function MC_본건_Checkbox(){
    GetComponent('DBGrid_본건').GetRow(-1, [
        { key: '본건_Checkbox', value: 'CHECK_YN'}
    ]);

    GetComponent('DBGrid_본건').GetRowCount('본건_RowCount');

    GetComponent('DBGrid_본건').GetCurSel('본건_RowPosition');

    GetComponent('DBGrid_본건').GetCurColName('본건_컬럼명');

    if ( GetString('본건_Checkbox') == "0" && GetString('본건_컬럼명') == "CHECK_YN" ) {
        SetValue('MkEdit_본건_최저가격',0);
        SetValue('MkEdit_본건_최고가격',0);
        SetValue('MkEdit_본건_비율',0);
        SetValue('MkEdit_인근_최저가격',0);
        SetValue('MkEdit_인근_최고가격',0);
        SetValue('MkEdit_인근_비율',0);
        SetValue('MkEdit_경매_최저가격',0);
        SetValue('MkEdit_경매_최고가격',0);
        SetValue('MkEdit_경매_비율',0);
    } else if ( GetString('본건_Checkbox') == "1" ) {
        SetValue('MkEdit_본건_최저가격',GetNumber('본건_최저가격')/1000000);
        SetValue('MkEdit_본건_최저가격',Round(GetNumber('MkEdit_본건_최저가격'),6));
        SetValue('MkEdit_본건_최저가격',GetNumber('MkEdit_본건_최저가격')*1000000);
        SetValue('MkEdit_본건_최고가격',GetNumber('본건_최고가격')/1000000);
        SetValue('MkEdit_본건_최가격',Round(GetNumber('MkEdit_본건_최고가격'),6));
        SetValue('MkEdit_본건_최고가격',GetNumber('MkEdit_본건_최고가격')*1000000);
        SetValue('MkEdit_본건_비율',(GetNumber('MkEdit_본건_최저가격')/GetNumber('MkEdit_본건_최고가격'))*100);
    }

    // BreakMacro
    if ( GetValue('본건_Checkbox') == "0") {
        return
    }

    for(let i = 0; i < GetNumber('본건_RowCount'); i+=1){
        SetValue('i', i);

        MC_본건_Checkbox_설정();
    }

    //RunMacro
    MC_가격사례_금액();

    MC_경매_금액();
}

function MC_본건_Checkbox_설정(){
    if(GetString('본건_RowPosition') == "0"){
        return
    }
    GetComponent('DBGrid_본건').SetRow(GetNumber('i'), [
        { key: 'CHECK_YN', value: 0}
    ]);
}

function MC_재감정여부() {
    if ( Right(GetString('감정순번'),2) == "00" || isEmpty(GetValue('감정순번'))) {
        SetValue('Edit_재감정여부',"최초감정")
    } else {
        SetValue('Edit_재감정여부',"재감정")
    }
}

function MC_저장_Key만들기() {
    RunQuery('Q_감정순번', {});

    GetZoonData('Q_감정순번').GetRow(0, [
        { key: 'Edit_감정순번', value: 'SEQ' },
        { key: '감정순번', value: 'SEQ' },
    ]);
}

function MC_저장_ValidationCheck() {
    GetComponent('TabControl1').GetCurSel(GetValue('탭_Idx'));

    SetValue('저장_Error_Message', '');

    GetComponent('TabControl1').SetCurSel(0);

    if ( GetValue('Edit_업소명') == "" ) {
        SetValue('저장_Error_Message',"업소명을 입력하여 주십시오." )
    }

    if ( GetValue('Edit_거래처') == "" ) {
        SetValue('저장_Error_Message',"제 1차 거래처를 선택하여 주십시오." )
    }

    if (GetString('저장_Error_Message') != "") {
        return;
    }

    GetComponent('TabControl1').SetCurSel(1);

    GetComponent('DBGrid_본건').GetModifyData([
        { key : '저장_본건_사례번호', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_본건_선택여부', value : 'CHECK_YN', isDelRowInclude : true },
        { key : '저장_본건_면적', value : 'B_SIZE', isDelRowInclude : true },
        { key : '저장_본건_최저가', value : 'CURR_MIN_AMT', isDelRowInclude : true },
        { key : '저장_본건_최고가', value : 'CURR_MAX_AMT', isDelRowInclude : true },
        { key : '저장_본건_평균가격', value : 'CURR_AVG_AMT', isDelRowInclude : true },
        { key : '저장_본건_전세금', value : 'LEASE_AMT', isDelRowInclude : true },
        { key : '저장_본건_전세금비율', value : 'LEASE_RATE', isDelRowInclude : true },
        { key : '저장_본건_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_본건_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_본건_평', value : 'B_SIZE_PY', isDelRowInclude : true },
        { key : '저장_본건_평당단가', value : 'CURR_PY_DAN', isDelRowInclude : true },
    ]);

    SetValue('저장_본건_RowCount',GetArrayCnt('저장_본건_일련번호'));

    for(let i = 0; i < GetNumber('저장_본건_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_본건();
    }

    GetComponent('DBGrid_가격사례_M').GetModifyData([
        { key : '저장_가격사례_M_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_가격사례_M_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_가격사례_M_사례번호', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_가격사례_M_세대수', value : 'HOUSE_CNT', isDelRowInclude : true },
        { key : '저장_가격사례_M_건축년도', value : 'B_YEAR', isDelRowInclude : true },
        { key : '저장_가격사례_M_아파트명', value : 'B_NAME', isDelRowInclude : true },
        { key : '저장_가격사례_M_소재지', value : 'JUSO', isDelRowInclude : true },
    ]);

    SetValue('저장_가격사례_M_RowCount',GetArrayCnt('저장_가격사례_M_일련번호'));

    //LoopMacro
    for(let i = 0; i < GetNumber('저장_가격사례_M_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_가격사례M();
    }

    //RunMacro
    MC_저장_ValidationCheck_감정가M();

    GetComponent('DBGrid_가격사례_M').GetRow(-1, [
        { key: '가격사례_M_사례번호', value: 'LN_SEQ' },
    ]);

    GetComponent('DBGrid_가격사례_D').GetRowCount('가격사례_D_RowCount');

    if(GetNumber('가격사례_D_RowCount') > -1000){
        //LoopMacro
        for(let i = 0; i < GetNumber('가격사례_D_RowCount'); i+=1){
            SetValue('i', i);

            MC_가격사례_SYNC();
        }

        GetZoonData('Q_가격사례_D').ReplaceQuery();
    }

    GetZoonData('Q_가격사례_D').FindIndexArray('m_index', (target) => {
        return Number(target['YYYY']) != 999;
    });

    GetZoonData('Q_가격사례_D').SetRows(GetValue('m_index'), [
        { key: 'YYYY', value: GetValue('년도')},
        { key: 'SEQ', value: GetValue('감정순번')},
        { key: 'FLAG', value: 'I'}
    ]);

    GetZoonData('Q_가격사례_D').GetRows('', [
        { key: '저장_가격사례_D_년도', value: 'YYYY'},
        { key: '저장_가격사례_D_일련번호', value: 'SEQ'},
        { key: '저장_가격사례_D_사례번호', value: 'LN_SEQ'},
        { key: '저장_가격사례_D_생성번호', value: 'RNO'},
        { key: '저장_가격사례_D_Flag', value: 'FLAG'},
        { key: '저장_가격사례_D_면적', value: 'B_SIZE'},
        { key: '저장_가격사례_D_면적_평', value: 'B_SIZE_PY'},
        { key: '저장_가격사례_D_최저가', value: 'CURR_MIN_AMT'},
        { key: '저장_가격사례_D_최고가', value: 'CURR_MAX_AMT'},
        { key: '저장_가격사례_D_평균가격', value: 'CURR_AVG_AMT'},
        { key: '저장_가격사례_D_평당단가', value: 'CURR_PY_DAN'},
        { key: '저장_가격사례_D_전세가', value: 'LEASE_AMT'},
        { key: '저장_가격사례_D_전세가_비율', value: 'LEASE_RATE'},
        { key: '저장_가격사례_D_선택여부', vIalue: 'CHECK_YN'},
    ]);

    GetZoonData('Q_가격사례_D').GetRowCount('저장_가격사례_D_RowCount');

    for(let i = 0; i < GetNumber('저장_가격사례_D_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_가격사례D();
    }

    GetComponent('DBGrid_경매사례').GetModifyData([
        { key : '저장_경매사례_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_경매사례_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_경매사례_사례번호', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_경매사례_선택여부', value : 'CHECK_YN', isDelRowInclude : true },
        { key : '저장_경매사례_아파트명', value : 'B_NAME', isDelRowInclude : true },
        { key : '저장_경매사례_층수', value : 'FLOOR', isDelRowInclude : true },
        { key : '저장_경매사례_면적', value : 'B_SIZE', isDelRowInclude : true },
        { key : '저장_경매사례_면적_평', value : 'B_SIZE_PY', isDelRowInclude : true },
        { key : '저장_경매사례_법원감정가', value : 'LAW_AMT', isDelRowInclude : true },
        { key : '저장_경매사례_낙찰가격', value : 'BID_AMT', isDelRowInclude : true },
        { key : '저장_경매사례_낙찰가율', value : 'BD_RATE', isDelRowInclude : true },
        { key : '저장_경매사례_경매사건번호', value : 'AU_NO', isDelRowInclude : true },
        { key : '저장_경매사례_평당단가', value : 'CURR_PY_DAN', isDelRowInclude : true },
        { key : '저장_경매사례_총층수', value : 'TOT_FLOOR', isDelRowInclude : true },
        { key : '저장_경매사례_소재지', value : 'JUSO', isDelRowInclude : true },
    ]);

    SetValue('저장_경매사례_RowCount',GetArrayCnt('저장_경매사례_일련번호'));

    for(let i = 0; i < GetNumber('저장_경매사례_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_경매사례();
    }

    if (GetString('저장_Error_Message') != "") {
        return;
    }

    GetComponent('TabControl1').SetCurSel(2);

    MC_저장_ValidationCheck_낙찰가율보정표();

    if (GetString('저장_Error_Message') != "") {
        return;
    }

    GetComponent('TabControl1').SetCurSel(4);

    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetModifyData([
        { key : '저장_배당표_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_배당표_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_배당표_각구의일련번호', value : 'RNO', isDelRowInclude : true },
        { key : '저장_배당표_각구의위치', value : 'RESI_NAME', isDelRowInclude : true },
        { key : '저장_배당표_주거용방의총수', value : 'RESI_RM_CNT', isDelRowInclude : true },
        { key : '저장_배당표_확정일자보유여부', value : 'FXDATE_YN', isDelRowInclude : true },
        { key : '저장_배당표_적용한방의총수', value : 'POSS_A_RM_CNT', isDelRowInclude : true },
        { key : '저장_배당표_실제임대차보증금', value : 'LEASE_AMT', isDelRowInclude : true },
        { key : '저장_배당표_최종적용임대차보증금', value : 'REP_BE_SEC_AMT', isDelRowInclude : true },
        { key : '저장_배당표_확정_임대차보증금', value : 'FXLEA_AMT', isDelRowInclude : true },
        { key : '저장_배당표_확정없는_임대차보증금', value : 'FXLEA_NO_AMT', isDelRowInclude : true },
    ]);

    SetValue('저장_배당표_RowCount',GetArrayCnt('저장_배당표_일련번호'));

    //LoopMacro
    for(let i = 0; i < GetNumber('저장_배당표_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_배당표_주택임대차보증금();
    }

    GetComponent('DBGrid_배당금_계산').GetModifyData([
        { key : '저장_배당표_배당금_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_배당표_배당금_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순번', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당표구분', value : 'SHA_GU', isDelRowInclude : true },
        { key : '저장_배당표_배당금_순위', value : 'RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_발생일자', value : 'RIGHT_DATE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리자', value : 'RIGHT_PERSON', isDelRowInclude : true },
        { key : '저장_배당표_배당금_권리의내용', value : 'RIGHT_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_말소여부', value : 'ERA_YN', isDelRowInclude : true },
        { key : '저장_배당표_배당금_단독담보', value : 'CRED_SELF_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_공동담보', value : 'CRED_COMB_AMT', isDelRowInclude : true },
        { key : '저장_배당표_배당금_표시순위', value : 'DISP_RANK', isDelRowInclude : true },
        { key : '저장_배당표_배당금_배당순위', value : 'PRO_RATE_CODE', isDelRowInclude : true },
        { key : '저장_배당표_배당금_당사설정', value : 'HITE_YN', isDelRowInclude : true },
    ]);

    SetValue('저장_배당표_배당금_RowCount',GetArrayCnt('저장_배당표_배당금_일련번호'));

    //LoopMacro
    for(let i = 6; i < GetNumber('저장_배당표_배당금_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_배당표_배당금();
    }

    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

    GetComponent('TabControl1').SetCurSel(4);

    GetComponent('DBGrid_사진관리').GetModifyData([
        { key : '저장_문서관리_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_문서관리_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_문서관리_사진구분', value : 'PHOTO_DIV', isDelRowInclude : true },
        { key : '저장_문서관리_순번', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_문서관리_사진명', value : 'PHOTO_NAME', isDelRowInclude : true },
        { key : '저장_문서관리_경로및파일명', value : 'FILE_NAME', isDelRowInclude : true },
        { key : '저장_문서관리_비고', value : 'REMARK', isDelRowInclude : true },
        { key : '저장_문서관리_전송된파일명', value : 'UPLOAD_FILE', isDelRowInclude : true },
    ]);

    SetValue('저장_문서관리_RowCount',GetArrayCnt('저장_문서관리_일련번호'));

    //LoopMacro
    for(let i = 0; i < GetNumber('저장_문서관리_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_사진();
    }

    GetComponent('DBGrid_문서').GetModifyData([
        { key : '저장_문서관리_문서_년도', value : 'YYYY', isDelRowInclude : true },
        { key : '저장_문서관리_문서_일련번호', value : 'SEQ', isDelRowInclude : true },
        { key : '저장_문서관리_문서_사진구분', value : 'PHOTO_DIV', isDelRowInclude : true },
        { key : '저장_문서관리_문서_순번', value : 'LN_SEQ', isDelRowInclude : true },
        { key : '저장_문서관리_문서_사진명', value : 'PHOTO_NAME', isDelRowInclude : true },
        { key : '저장_문서관리_문서_경로및파일명', value : 'FILE_NAME', isDelRowInclude : true },
        { key : '저장_문서관리_문서_비고', value : 'REMARK', isDelRowInclude : true },
        { key : '저장_문서관리_문서_전송된파일명', value : 'UPLOAD_FILE', isDelRowInclude : true },
    ]);

    SetValue('저장_문서관리_문서_RowCount',GetArrayCnt('저장_문서관리_문서_일련번호'));

    //LoopMacro
    for(let i = 0; i < GetNumber('저장_문서관리_문서_RowCount'); i+=1){
        SetValue('i', i);

        MC_저장_ValidationCheck_문서();
    }

    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

    GetComponent('TabControl1').SetCurSel(GetNumber('탭_Idx'));

    if ( GetString('Combo_배당표_가임대보증금적용범위') == "" ) {
        SetValue('저장_Error_Message',"가임대보증금적용범위를 선택하여 주십시오.")
    }

    if ( GetString('Combo_배당표_가임대보증금적용대상') == "" ) {
        SetValue('저장_Error_Message',"가임대보증금적용대상을 선택하여 주십시오.")
    }

    if ( GetString('Combo_배당표_최고채권액') == "" ) {
        SetValue('저장_Error_Message',"최고채권액을 선택하여 주십시오.")
    }
}

function MC_저장_ValidationCheck_문서(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

	if ( GetArray(GetValue('저장_문서관리_문서_경로및파일명',GetNumber('i')) <= 0 )) {
		SetValue('저장_Error_Message',"관련문서_파일을 선택하여 주십시오.")
	}

	if ( GetArray(GetValue('저장_문서관리_문서_사진명',GetNumber('i')) <= 0 )) {
		SetValue('저장_Error_Message',"관련문서_내용을 입력하여 주십시오.")
	}
}

function MC_저장_ValidationCheck_가격사례D(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

    /*	if ( GetArray(GetValue('저장_가격사례_D_전세가',GetValue('i')) <= 0 ) {
            SetValue('저장_Error_Message'),"가격사례_전세가를 입력하여 주십시오.")
        }

        if ( GetArray(GetValue('저장_가격사례_D_최고가',GetValue('i')) <= 0 ) {
            SetValue('저장_Error_Message'),"가격사례_최고가를 입력하여 주십시오.")
        }

        if ( GetArray(GetValue('저장_가격사례_D_최저가',GetValue('i')) <= 0 ) {
            SetValue('저장_Error_Message'),"가격사례_최저가를 입력하여 주십시오.")
        }

        if ( GetArray(GetValue('저장_가격사례_D_면적_평',GetValue('i')) <= 0 ) {
            SetValue('저장_Error_Message'),"가격사례_평형을 입력하여 주십시오.")
        }
    */
}

function MC_저장_ValidationCheck_가격사례M(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

    /*	if ( GetArray('저장_가격사례_M_세대수',GetValue('i')) <= 0 ) {
            SetValue('저장_Error_Message'),"가격사례_세대수를 입력하여 주십시오.")
        }

        if ( GetArray('저장_가격사례_M_건축년도',GetValue('i')) <= 0 ) {
            SetValue('저장_Error_Message'),"가격사례_건축년도를 입력하여 주십시오.")
        }

        if ( GetArray('저장_가격사례_M_아파트명',GetValue('i')) = "" ) {
            SetValue('저장_Error_Message'),"가격사례_아파트명을 입력하여 주십시오.")
        }
    */
    if ( GetArray(GetValue('저장_가격사례_M_사례번호',GetNumber('i')) == "" )) {
        SetValue('저장_Error_Message',"가격사례_사례번호를 입력하여 주십시오.");
    }
}

function MC_저장_ValidationCheck_감정가M(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

	if ( GetString('MkEdit_결정가격') == "" ) {
		SetValue('저장_Error_Message',"감정에 관한 사항_결정가격을 입력하여 주십시오.");
	}
}

function MC_저장_ValidationCheck_경매사례(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

	if ( GetArray(GetValue('저장_경매사례_낙찰가격',GetNumber('i')) <= 0 )) {
		SetValue('저장_Error_Message',"경매사례 낙찰가격을 입력하여 주십시오.")
	}

	if ( GetArray(GetValue('저장_경매사례_법원감정가',GetNumber('i')) <= 0 )) {
		SetValue('저장_Error_Message',"경매사례 법사가격을 입력하여 주십시오.")
	}

	if ( GetArray(GetValue('저장_경매사례_면적_평',GetNumber('i')) <= 0 )) {
		SetValue('저장_Error_Message',"경매사례 평형을 입력하여 주십시오.")
	}

	if ( GetArray(GetValue('저장_경매사례_층수',GetNumber('i')) <= 0 )) {
		SetValue('저장_Error_Message',"경매사례 층수를 입력하여 주십시오.")
	}

	if ( GetArray(GetValue('저장_경매사례_아파트명',GetNumber('i')) == "" )) {
		SetValue('저장_Error_Message',"경매사례 아파트명을 입력하여 주십시오.")
	}

	if ( GetArray(GetValue('저장_경매사례_경매사건번호',GetNumber('i')) == "" )) {
		SetValue('저장_Error_Message',"경매사례 경매사건번호를 입력하여 주십시오.")
	}
}

function MC_저장_ValidationCheck_낙찰가율보정표(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

    if ( GetString('Combo_점유자의권리형태') == "" ) {
		SetValue('저장_Error_Message',"점유자의 권리 형태를 선택하여 주십시오.")
	}

	if ( GetNumber('MkEdit_보정표_유사부동산낙찰가율') <= 0 ) {
		SetValue('저장_Error_Message',"낙찰가율보정표 유사부동산 낙찰가율을 입력하여 주십시오.")
	}

	if ( GetNumber('MkEdit_보정표_당해지역낙찰가율')<= 0 ) {
		SetValue('저장_Error_Message',"낙찰가율보정표 당해지역의 낙찰가율을 입력하여 주십시오.")
	}
}

function MC_저장_ValidationCheck_낙찰가율보정표(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

	if ( GetValue('Combo_점유자의권리형태') == "" ) {
		SetValue('저장_Error_Message',"점유자의 권리 형태를 선택하여 주십시오.")
	}

	if ( GetValue('MkEdit_보정표_유사부동산낙찰가율') <= 0 ) {
		SetValue('저장_Error_Message',"낙찰가율보정표 유사부동산 낙찰가율을 입력하여 주십시오.")
	}

	if ( GetValue('MkEdit_보정표_당해지역낙찰가율') <= 0 ) {
		SetValue('저장_Error_Message',"낙찰가율보정표 당해지역의 낙찰가율을 입력하여 주십시오.")
	}
}

function MC_저장_ValidationCheck_배당표_배당금(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }
    SetValue('배당표_배당금계산_표시순위',StrToNum(GetArray('저장_배당표_배당금_표시순위',GetNumber('i'))));

    if(GetNumber('배당표_배당금계산_표시순위') < 10){
        return;
    }

	if ( GetArray('저장_배당표_배당금_공동담보',GetNumber('i')) <= 0 ) {
		SetValue('저장_Error_Message',"배당금의계산_채권최고액을 입력하여 주십시오.")
	}

	if ( GetArray('저장_배당표_배당금_권리의내용',GetNumber('i')) == "" ) {
		SetValue('저장_Error_Message',"배당금의계산_권리의내용을 선택하여 주십시오.")
	}

	if ( GetArray('저장_배당표_배당금_권리자',GetNumber('i')) == "" ) {
		SetValue('저장_Error_Message',"배당금의계산_권리자를 입력하여 주십시오.")
	}

	if ( GetArray('저장_배당표_배당금_발생일자',GetNumber('i')) == "" ||  GetArray('저장_배당표_배당금_발생일자',GetNumber('i')) == "00000000" ) {
		SetValue('저장_Error_Message',"배당금의계산_권리발생일자를 입력하여 주십시오.")
	}

	if ( GetArray('저장_배당표_배당금_표시순위',GetNumber('i')) == "" ) {
		SetValue('저장_Error_Message',"배당금의계산_순위를 선택하여 주십시오.")
	}
}

function MC_저장_ValidationCheck_배당표_주택임대차보증금(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

	if ( GetArray('저장_배당표_주거용방의총수',GetNumber('i')) == "" ) {
		SetValue('저장_Error_Message',"주택임차보증금의계산_1구의건물내에있는주거용방의총수를 입력하여 주십시오.")
	}

	if ( GetArray('저장_배당표_각구의위치',GetNumber('i')) == "" ) {
		SetValue('저장_Error_Message',"주택임차보증금의계산_1동의건물내에서의주거용부분인각구의위치를 입력하여 주십시오.")
	}

	if ( GetArray('저장_배당표_각구의일련번호',GetNumber('i')) == "" ) {
		SetValue('저장_Error_Message',"주택임차보증금의계산_각구의일련번호를 선택하여 주십시오.")
	}
}


function MC_저장_ValidationCheck_본건(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }
   
	if ( GetArray('저장_본건_전세금',GetNumber('i')) <= 0 ) {
		SetValue('저장_Error_Message',"본건 전세가를 입력하여 주십시오.")
	}

	if ( GetArray('저장_본건_최고가',GetNumber('i')) <= 0 ) {
		SetValue('저장_Error_Message',"본건 최고가를 입력하여 주십시오.")
	}

	if ( GetArray('저장_본건_최저가',GetNumber('i')) <= 0 ) {
		SetValue('저장_Error_Message',"본건 최저가를 입력하여 주십시오.")
	}

	if ( GetArray('저장_본건_평',GetNumber('i')) <= 0 ) {
		SetValue('저장_Error_Message',"본건 평형을 입력하여 주십시오.")
	}
}

function MC_저장_ValidationCheck_사진(){
    //BreakMacro
    if (GetString('저장_Error_Message') != "") {
        return;
    }

    /*	if ( GetArray('저장_문서관리_경로및파일명',GetValue('i')) = "" ) {
            SetValue('저장_Error_Message',"사진및도면_파일을 선택하여 주십시오.")
        }

        if ( GetArray('저장_문서관리_사진명',GetValue('i')) = "" ) {
            SetValue('저장_Error_Message',"사진및도면_내용을 입력하여 주십시오.")
        }
    */
    if ( GetArray('저장_문서관리_사진구분',GetNumber('i')) == "" ) {
        SetValue('저장_Error_Message',"사진및도면_구분을 선택하여 주십시오.")
    }
}

function MC_저장_감정가(){

    RunQuery('저장_감정가_감정_M', {
        'YYYY' : GetValue('년도'),
        'SEQ' : GetValue('감정순번'),
        'MA_MIN_AMT' : GetValue('MkEdit_본건_최저가격'),
        'MA_MAX_AMT' : GetValue('MkEdit_본건_최고가격'),
        'MA_RATE' : GetValue('MkEdit_본건_비율'),
        'PR_MIN_AMT' : GetValue('MkEdit_인근_최저가격'),
        'PR_MAX_AMT' : GetValue('MkEdit_인근_최고가격'),
        'PR_RATE' : GetValue('MkEdit_인근_비율'),
        'AU_MIN_AMT' : GetValue('MkEdit_경매_최저가격'),
        'AU_MAX_AMT' : GetValue('MkEdit_경매_최고가격'),
        'AU_RATE' : GetValue('MkEdit_경매_비율'),
        'APPL_AMT' : GetValue('MkEdit_결정가격'),
        'INT_REP_SIZE' : GetValue('MkEdit_보수평형'),
        'INT_REP_SIZE_PY' : GetValue('MkEdit_보수평형_평'),
        'INT_REP_DAN' : GetValue('MkEdit_보수단가'),
        'INT_REP_AMT' : GetValue('MkEdit_보수금액'),
        'INCREASE_AMT' : GetValue('MkEdit_평가가격'),
        'LAST_INCREASE_AMT' : GetValue('MkEdit_감정가_최종평가가격'),
        'INT_REP_DAN_CODE' : GetValue('Combo_평가_인테리어단가')
    }, 'POST');

    RunQuery('저장_감정가_본건', {
        '저장_본건_사례번호': GetValue('저장_본건_사례번호'),
        '저장_본건_선택여부': GetValue('저장_본건_선택여부'),
        '저장_본건_면적': GetValue('저장_본건_면적'),
        '저장_본건_최저가': GetValue('저장_본건_최저가'),
        '저장_본건_최고가': GetValue('저장_본건_최고가'),
        '저장_본건_평균가격': GetValue('저장_본건_평균가격'),
        '저장_본건_전세금': GetValue('저장_본건_전세금'),
        '저장_본건_전세금비율': GetValue('저장_본건_전세금비율'),
        '저장_본건_년도': GetValue('저장_본건_년도'),
        '저장_본건_일련번호': GetValue('저장_본건_일련번호'),
        '저장_본건_평': GetValue('저장_본건_평'),
        '저장_본건_평당단가': GetValue('저장_본건_평당단가'),
    }, 'POST');

    RunQuery('Q_감정가_본건', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');

    RunQuery('저장_감정가_가격사례M', {
        '저장_가격사례_M_년도': GetValue('저장_가격사례_M_년도'),
        '저장_가격사례_M_일련번호': GetValue('저장_가격사례_M_일련번호'),
        '저장_가격사례_M_사례번호': GetValue('저장_가격사례_M_사례번호'),
        '저장_가격사례_M_세대수': GetValue('저장_가격사례_M_세대수'),
        '저장_가격사례_M_건축년도': GetValue('저장_가격사례_M_건축년도'),
        '저장_가격사례_M_아파트명': GetValue('저장_가격사례_M_아파트명'),
        '저장_가격사례_M_소재지': GetValue('저장_가격사례_M_소재지'),
    }, 'POST');

    RunQuery('Q_가격사례_M', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');

    //RunMacro
    MC_저장_감정가_가격사례D();

    RunQuery('저장_감정가_경매사례', {
        '저장_경매사례_년도' : GetValue('저장_경매사례_년도'),
        '저장_경매사례_일련번호' : GetValue('저장_경매사례_일련번호'),
        '저장_경매사례_사례번호' : GetValue('저장_경매사례_사례번호'),
        '저장_경매사례_경매사건번호' : GetValue('저장_경매사례_경매사건번호'),
        '저장_경매사례_선택여부' : GetValue('저장_경매사례_선택여부'),
        '저장_경매사례_아파트명' : GetValue('저장_경매사례_아파트명'),
        '저장_경매사례_소재지' : GetValue('저장_경매사례_소재지'),
        '저장_경매사례_총층수' : GetValue('저장_경매사례_총층수'),
        '저장_경매사례_층수' : GetValue('저장_경매사례_층수'),
        '저장_경매사례_면적' : GetValue('저장_경매사례_면적'),
        '저장_경매사례_면적_평' : GetValue('저장_경매사례_면적_평'),
        '저장_경매사례_법원감정가' : GetValue('저장_경매사례_법원감정가'),
        '저장_경매사례_평당단가' : GetValue('저장_경매사례_평당단가'),
        '저장_경매사례_낙찰가격' : GetValue('저장_경매사례_낙찰가격'),
        '저장_경매사례_낙찰가율' : GetValue('저장_경매사례_낙찰가율'),
    }, 'POST');

    RunQuery('Q_감정가_경매사례', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');
}

function MC_저장_감정가_가격사례D(){
    GetComponent('DBGrid_가격사례_M').GetRow(-1,[
        { key: '가격사례_M_사례번호', value: 'LN_SEQ'}
    ]);

    GetComponent('DBGrid_가격사례_D').GetRowCount('DBGrid_가격사례_D_RowCount');

    if(GetNumber('DBGrid_가격사례_D_RowCount') > -1000 ){
        // LoopMacro
        for(let i = 0; i < GetNumber('DBGrid_가격사례_D_RowCount'); i+=1){
            SetValue('i', i);

            MC_가격사례_SYNC();
        }

        GetZoonData('Q_가격사례_D').ReplaceQuery();
    }

    GetZoonData('Q_가격사례_D').FindIndexArray('m_index', (target) => {
        return Number(target['YYYY']) != 999;
    });

    GetZoonData('Q_가격사례_D').SetRows(GetValue('m_index'), [
        { key: 'YYYY', value: GetValue('년도')},
        { key: 'SEQ', value: GetValue('감정순번')},
        { key: 'FLAG', value: 'I'}
    ]);

    GetZoonData('Q_가격사례_D').GetRows('', [
        { key: '저장_가격사례_D_년도', value: 'YYYY'},
        { key: '저장_가격사례_D_일련번호', value: 'SEQ'},
        { key: '저장_가격사례_D_사례번호', value: 'LN_SEQ'},
        { key: '저장_가격사례_D_생성번호', value: 'RNO'},
        { key: '저장_가격사례_D_Flag', value: 'FLAG'},
        { key: '저장_가격사례_D_면적', value: 'B_SIZE'},
        { key: '저장_가격사례_D_면적_평', value: 'B_SIZE_PY'},
        { key: '저장_가격사례_D_최저가', value: 'CURR_MIN_AMT'},
        { key: '저장_가격사례_D_최고가', value: 'CURR_MAX_AMT'},
        { key: '저장_가격사례_D_평균가격', value: 'CURR_AVG_AMT'},
        { key: '저장_가격사례_D_평당단가', value: 'CURR_PY_DAN'},
        { key: '저장_가격사례_D_전세가', value: 'LEASE_AMT'},
        { key: '저장_가격사례_D_전세가_비율', value: 'LEASE_RATE'},
        { key: '저장_가격사례_D_선택여부', value: 'CHECK_YN'},
    ]);

    // GetZoonData('Q_가격사례_D').SetRows(GetValue('m_index'), [
    //     { key: 'FLAG', value: 'D'}
    // ]);
    //
    // GetZoonData('Q_가격사례_D').GetRows('', [
    //     { key: '저장_가격사례삭제_D_년도', value: 'YYYY'},
    //     { key: '저장_가격사례삭제_D_일련번호', value: 'SEQ'},
    //     { key: '저장_가격사례삭제_D_사례번호', value: 'LN_SEQ'},
    //     { key: '저장_가격사례삭제_D_생성번호', value: 'RNO'},
    //     { key: '저장_가격사례삭제_D_Flag', value: 'FLAG'},
    //     { key: '저장_가격사례삭제_D_면적', value: 'B_SIZE'},
    //     { key: '저장_가격사례삭제_D_면적_평', value: 'B_SIZE_PY'},
    //     { key: '저장_가격사례삭제_D_최저가', value: 'CURR_MIN_AMT'},
    //     { key: '저장_가격사례삭제_D_최고가', value: 'CURR_MAX_AMT'},
    //     { key: '저장_가격사례삭제_D_평균가격', value: 'CURR_AVG_AMT'},
    //     { key: '저장_가격사례삭제_D_평당단가', value: 'CURR_PY_DAN'},
    //     { key: '저장_가격사례삭제_D_전세가', value: 'LEASE_AMT'},
    //     { key: '저장_가격사례삭제_D_전세가_비율', value: 'LEASE_RATE'},
    //     { key: '저장_가격사례삭제_D_선택여부', value: 'CHECK_YN'},
    // ]);
    //
    // AppendArray(GetValue('저장_가격사례_D_년도'),GetValue('저장_가격사례삭제_D_년도'));
    // AppendArray(GetValue('저장_가격사례_D_면적'),GetValue('저장_가격사례삭제_D_면적'));
    // AppendArray(GetValue('저장_가격사례_D_면적_평'),GetValue( '저장_가격사례삭제_D_면적_평'));
    // AppendArray(GetValue('저장_가격사례_D_사례번호'),GetValue( '저장_가격사례삭제_D_사례번호'));
    // AppendArray(GetValue('저장_가격사례_D_생성번호'),GetValue( '저장_가격사례삭제_D_생성번호'));
    // AppendArray(GetValue('저장_가격사례_D_선택여부'),GetValue( '저장_가격사례삭제_D_선택여부'));
    // AppendArray(GetValue('저장_가격사례_D_일련번호'),GetValue( '저장_가격사례삭제_D_일련번호'));
    // AppendArray(GetValue('저장_가격사례_D_전세가'),GetValue( '저장_가격사례삭제_D_전세가'));
    // AppendArray(GetValue('저장_가격사례_D_전세가_비율'),GetValue( '저장_가격사례삭제_D_전세가_비율'));
    // AppendArray(GetValue('저장_가격사례_D_최고가'),GetValue( '저장_가격사례삭제_D_최고가'));
    // AppendArray(GetValue('저장_가격사례_D_최저가'),GetValue( '저장_가격사례삭제_D_최저가'));
    // AppendArray(GetValue('저장_가격사례_D_평균가격'),GetValue( '저장_가격사례삭제_D_평균가격'));
    // AppendArray(GetValue('저장_가격사례_D_평당단가'),GetValue( '저장_가격사례삭제_D_평당단가'));
    // AppendArray(GetValue('저장_가격사례_D_Flag'),GetValue( '저장_가격사례삭제_D_Flag'));

    RunQuery('저장_감정가_가격사례D', {
        '저장_가격사례_D_년도' :  GetValue('저장_가격사례_D_년도'),
        '저장_가격사례_D_일련번호' :  GetValue('저장_가격사례_D_일련번호'),
        '저장_가격사례_D_사례번호' : GetValue('저장_가격사례_D_사례번호'),
        '저장_가격사례_D_생성번호' :  GetValue('저장_가격사례_D_생성번호'),
        '저장_가격사례_D_Flag' : GetValue('저장_가격사례_D_Flag'),
        '저장_가격사례_D_면적' :   GetValue('저장_가격사례_D_면적'),
        '저장_가격사례_D_면적_평' : GetValue('저장_가격사례_D_면적_평'),
        '저장_가격사례_D_최저가' :  GetValue('저장_가격사례_D_최저가'),
        '저장_가격사례_D_최고가' : GetValue('저장_가격사례_D_최고가'),
        '저장_가격사례_D_평균가격' :  GetValue('저장_가격사례_D_평균가격'),
        '저장_가격사례_D_평당단가' : GetValue('저장_가격사례_D_평당단가'),
        '저장_가격사례_D_전세가' : GetValue('저장_가격사례_D_전세가'),
        '저장_가격사례_D_전세가_비율' :  GetValue('저장_가격사례_D_전세가_비율'),
        '저장_가격사례_D_선택여부' :  GetValue('저장_가격사례_D_선택여부'),
    }, 'POST');  

    RunQuery('Q_가격사례_D', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'POST');  
}

function MC_저장_문서관리(){
    RunQuery('저장_문서관리', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_문서관리_년도' : GetValue('저장_문서관리_년도'),
        '저장_문서관리_일련번호' : GetValue('저장_문서관리_일련번호'),
        '저장_문서관리_사진구분' : GetValue('저장_문서관리_사진구분'),
        '저장_문서관리_순번' : GetValue('저장_문서관리_순번'),
        '저장_문서관리_사진명' : GetValue('저장_문서관리_사진명'),
        '저장_문서관리_경로및파일명' : GetValue('저장_문서관리_경로및파일명'),
        '저장_문서관리_비고' : GetValue('저장_문서관리_비고'),
        '저장_문서관리_전송된사진명' : GetValue('저장_문서관리_전송된사진명')
    }, 'POST');
    RunQuery('Q_문서관리_사진', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
    RunQuery('저장_문서관리_문서', {
        '저장_문서관리_문서_년도' : GetValue('저장_문서관리_문서_년도'),
        '저장_문서관리_문서_일련번호' : GetValue('저장_문서관리_문서_일련번호'),
        '저장_문서관리_문서_사진구분' : GetValue('저장_문서관리_문서_사진구분'),
        '저장_문서관리_문서_순번' : GetValue('저장_문서관리_문서_순번'),
        '저장_문서관리_문서_사진명' : GetValue('저장_문서관리_문서_사진명'),
        '저장_문서관리_문서_경로및파일명' : GetValue('저장_문서관리_문서_경로및파일명'),
        '저장_문서관리_문서_비고' : GetValue('저장_문서관리_문서_비고'),
        '저장_문서관리_문서_전송된파일명' : GetValue('저장_문서관리_문서_전송된파일명')
    }, 'POST');
    RunQuery('Q_문서관리_관련문서', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
}

function MC_저장_배당() {
    SetValue('is배당처리',"Y");
    RunButton('Command_저장');
}

function MC_저장_배당금() {
    RunQuery('저장_배당금_배당금', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
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
        '저장_배당표_배당금_배당순위': GetValue('저장_배당표_배당금_배당순위'),
        '저장_배당표_배당금_당사설정': GetValue('저장_배당표_배당금_당사설정')
    }, 'POST');

    RunQuery('Q_배당표_배당금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
}

function MC_저장_입력표() {
    SetValue('01_TEMP', '');

    if ( StrLength(Trim(GetValue('Edit_지번'))) > 0 ) {
        SetValue('01_TEMP', Trim(GetValue('Edit_지번')))
    }


    if ( StrLength(Trim(GetValue('Edit_집합건물의명칭'))) > 0 ) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0 ) {
           SetValue('01_TEMP', GetValue('01_TEMP') + " " +  Trim(GetValue('Edit_집합건물의명칭')))
        } else {
           SetValue('01_TEMP', Trim(GetValue('Edit_집합건물의명칭')))
        }
    }

    if ( StrLength(Trim(GetValue('Edit_동수'))) > 0 ) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0 ) {
           SetValue('01_TEMP', GetValue('01_TEMP') + " " +  Trim(GetValue('Edit_동수')))
        } else {
           SetValue('01_TEMP', Trim(GetValue('Edit_동수')))
        }
    }

    if ( StrLength(Trim(GetValue('Edit_입력표_호수'))) > 0 ) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0 ) {
           SetValue('01_TEMP', GetValue('01_TEMP') + " " +  Trim(GetValue('Edit_호수')))
        } else {
           SetValue('01_TEMP', Trim(GetValue('Edit_호수')))
        }
    }

    SetValue('00_TEMP', '');

    RunQuery('저장_담보마스터', {
        'YYYY' : GetValue('년도'),
        'SEQ' : GetValue('감정순번'),
        'SEC_CODE' : GetValue('Combo_집합건물종류'),
        'ESTI_DATE' : GetValue('MkEdit_감정일'),
        'GEO_CODE' : GetValue('Edit_거래처코드'),
        'SANGHO' : GetValue('Edit_거래처'),
        'DAEPYO_NAME' : GetValue('Edit_대표자'),
        'MARKET_NAME' : GetValue('Edit_업소명'),
        'MARKET_CEO' : GetValue('Edit_업소대표자'),
        'DEBTOR' : GetValue('Edit_채무자'),
        'GUARANTOR' : GetValue('Edit_담보제공자'),
        'DEBTOR_RELATION' : GetValue('Edit_채무자와담보제공자의관계'),
        'JUM_CODE' : GetValue('_부서코드'),
        'REQ_JUM' : GetValue('_부서코드'),
        'PROC_DIV' : GetValue('결재진행현황'),
        'MARKET_DIV' : GetValue('Combo_입력표_업소구분'),
        'CURR_AMT' : GetValue('MkEdit_등기부등본상의시세_총액'),
        'PLMIN_BID_AMT' : GetValue('MkEdit_보정표_최저입찰가'),
        'PL_BID_AMT' : GetValue('MkEdit_보정표_예상낙찰가'),
        'JUSO1' : GetValue('Edit_소재지'),
        'B_NAME' : GetValue('01_TEMP'),
        'B_SIZE' : GetValue('MkEdit_면적합계'),
        'B_SIZE_PY' : GetValue('MkEdit_면적합계_평'),
        'JUM_SABUN' : GetValue('Edit_감정자사번'),
        'DOC_KEY' : GetValue('Edit_Doc_Key'),
        'INCREASE_AMT' : GetValue('MkEdit_보정표_평가가격'),
        'APPL_RATE' : GetValue('MkEdit_보정표_적용할낙찰가율'),
        'PRE_BOND_AMT' : 0,
        'SPARE_SEC_AMT' : 0,
        'EXCEED_YN' : '',
        'EXCEED_AMT' : 0,
        'RES_PL_BID_AMT' : 0,
        'BID_USE_YN' : GetValue('응찰_입력표활성여부'),
        'L_SIZE' : GetValue('Edit_대지권소유권'),
        'L_SIZE_PY' : GetValue('Edit_대지권소유권_평'),
        'APPRAISE_GU' : GetValue('Combo_보고서_평가구분'),
        'PRE_YYYY' : GetValue('_이전년도'),
        'PRE_SEQ' : GetValue('_이전담보순번'),
        'LIQUOR_TYPE' : GetValue('Combo_사업부문')
    }, 'POST');

    if (isEmpty(GetValue('Edit_Doc_Key'))) {
        RunQuery('저장_결재자현황_영업_Clear', {
            'YYYY' : GetValue('년도'),
            'SEQ' : GetValue('감정순번'),
        }, 'POST');
        RunQuery('저장_결재자현황_영업', {
            'DOC_KEY' : GetValue('Edit_Doc_Key'),
            'YYYY' : GetValue('년도'),
            'SEQ' : GetValue('감정순번'),
        }, 'POST');
    }

    RunQuery('저장_입력표', {
        'YYYY' : GetValue('년도'),
        'SEQ' : GetValue('감정순번'),
        'JUSO1' : GetValue('Edit_소재지'),
        'LOT_NUM' : GetValue('Edit_지번'),
        'JUSO2' : GetValue('Edit_소재지_상세'),
        'CB_NAME' : GetValue('Edit_집합건물의명칭'),
        'DONG' : GetValue('Edit_동수'),
        'HO' : GetValue('Edit_호수'),
        'LCATEGORY' : GetValue('Combo_지목'),
        'LG_SIZE' : GetValue('MkEdit_토지권의목적인'),
        'LG_OWNER' : GetValue('Edit_대지권소유권'),
        'POSS_A_AREA' : GetValue('Combo_가임대보증금적용지역'),
        'CB_STRUC' : GetValue('Combo_구조'),
        'CB_ROOF' : GetValue('Combo_지붕'),
        'CB_UPFLOOR' : GetValue('Edit_지상'),
        'CB_DNFLOOR' : GetValue('Edit_지하'),
        'CB_FLOOR' : GetValue('Edit_해당층'),
        'CB_YYYY' : GetValue('MkEdit_건축일자'),
        'ELAP_YEAR' : GetValue('MkEdit_건축년도_경과'),
        'NUM_HOUSEHOLD' : GetValue('MkEdit_세대수'),
        'CB_EXM_SIZE' : GetValue('MkEdit_전유면적'),
        'CB_EXM_SIZE_PY' : GetValue('MkEdit_전유면적_평'),
        'CB_PUB_SIZE' : GetValue('MkEdit_공유면적'),
        'CB_PUB_SIZE_PY' : GetValue('MkEdit_공유면적_평'),
        'CB_TOT_SIZE' : GetValue('MkEdit_면적합계'),
        'CB_TOT_SIZE_PY' : GetValue('MkEdit_면적합계_평'),
        'REGI_AMT' : GetValue('MkEdit_등기부등본상의시세_총액'),
        'REGI_DAN' : GetValue('MkEdit_등기부등본상의시세_단가'),
        'REGI_DAN_PY' : GetValue('MkEdit_등기부등본상의시세_평당단가'),
        'BASE_AMT' : GetValue('MkEdit_기준시가_총액'),
        'BASE_DAN' : GetValue('MkEdit_기준시가_단가'),
        'BASE_DAN_PY' : GetValue('MkEdit_기준시가_평당단가'),
        'SEC_REGI_SIZE' : GetValue('MkEdit_등기부상전용면적'),
        'SEC_NUME' : GetValue('MkEdit_분자'),
        'SEC_DENO' : GetValue('MkEdit_분모'),
        'SEC_RATE' : GetValue('MkEdit_비율'),
        'SEC_OFFER_SIZE' : GetValue('MkEdit_담보제공면적'),
        'SEC_DESC' : GetValue('MkEdit_사유'),
        'INC_AMT' : GetValue('MkEdit_보정표_최저입찰가'),
        'FNL_INC_AMT' : GetValue('MkEdit_보정표_예상낙찰가'),
    }, 'POST');
    

    RunQuery('저장_규제의표시', {
        'YYYY' : GetValue('년도'),
        'SEQ' : GetValue('감정순번'),
        'REST_PL_USE' : GetValue('Edit_국토의계획'),
        'REST_OT_LAW' : GetValue('Edit_다른법률등'),
        'REST_EN_RULE' : GetValue('Edit_시행령부칙'),
        'REST_FU_LAW' : GetValue('Edit_토지이용규제'),
    }, 'POST');

}

function  MC_저장_주택임대차보증금(){
    RunQuery('저장_배당금_주택임차보증금', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번'),
        '저장_배당표_년도' : GetValue('저장_배당표_년도'),
        '저장_배당표_일련번호' : GetValue('저장_배당표_일련번호'),
        '저장_배당표_각구의일련번호' : GetValue('저장_배당표_각구의일련번호'),
        '저장_배당표_각구의위치' : GetValue('저장_배당표_각구의위치'),
        '저장_배당표_주거용방의총수' : GetValue('저장_배당표_주거용방의총수'),
        '저장_배당표_확정일자보유여부' : GetValue('저장_배당표_확정일자보유여부'),
        '저장_배당표_적용한방의총수' : GetValue('저장_배당표_적용한방의총수'),
        '저장_배당표_실제임대차보증금' : GetValue('저장_배당표_실제임대차보증금'),
        '저장_배당표_최종적용임대차보증금' : GetValue('저장_배당표_최종적용임대차보증금'),
        '저장_배당표_확정_임대차보증금' : GetValue('저장_배당표_확정_임대차보증금'),
        '저장_배당표_확정없는_임대차보증금' : GetValue('저장_배당표_확정없는_임대차보증금')
    }, 'POST');

    RunQuery('Q_배당표_주택임차보증금_계산', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    });
}

function MC_주소반환() {
    GetComponent('DBGrid_주소').GetRow(-1, [
        { key: '팝업_전체주소', value: 'JUSO_FULL'}
    ]);

    if (GetString('주소구분') == '1') {
        SetValue('Edit_소재지',GetValue('팝업_전체주소'));
    } else if (GetString('주소구분') == '2') {
        GetComponent('DBGrid_가격사례_M').SetRow(-1, [
            { key : 'JUSO' , value : '팝업_전체주소' }
        ], true)
    } else if (GetString('주소구분') == '3') {
        GetComponent('DBGrid_경매사례').SetRow(-1, [
            { key : 'JUSO' , value : '팝업_전체주소' }
        ], true)
    }

    GetComponent('SubForm_주소조회').HideSubForm();

    SetValue('팝업_주소창호출위치', '');
    SetValue('팝업_전체주소', '');
}

function MC_저장_낙찰가율보정표() {

}