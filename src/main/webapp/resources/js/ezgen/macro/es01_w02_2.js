function MC_200_초기화_감정가1_Query() {

    RunQuery('Q_감정가_00_본건사례', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_01_가격사례', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_02_경매사례', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_200_초기화_Combo_감정가1() {

    // GetComponent('Combo_입지특성_도로조건').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입지특성_도로계통성').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입지특성_상업시설접근성').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입지특성_공공시설접근성').SetCurSel(None);

}

function MC_300_초기화_감정가2_Query() {

    RunQuery('Q_감정가_03_비준가격', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_03_비준가격_집계표', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_300_초기화__비준가격_항목() {

    GetComponent('비준_Combo_사례구분').SetCurSel(-1.0);


    GetComponent('비준_Combo_사례번호').SetCurSel(-1.0);


    MC_300_초기화__비준가격_항목_1();

}

function MC_202_DBGrid_경매사례_EVENT_경과년도() {

    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_건축년도', value: '건축년도' },
    ]);


    SetValue('감정가_경매_경과년도',  StrToNum(Left(GetValue('MkEdit_감정일'),4)) - StrToNum(GetValue('감정가_경매_건축년도')) )


    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '경과년도', value: GetValue('감정가_경매_경과년도') },
    ]);

}

function MC_탭_상태변경() {

    GetComponent('TabControl1').EnableTab(7, 0);


    GetComponent('TabControl1').EnableTab(8, 0);


    GetComponent('TabControl1').SetCurSel(0.0);

}

function MC_202_DBGrid_경매사례_EVENT_사례가격() {

    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_전용면적', value: '전용면적' },

        { key: '감정가_경매_법원감정가', value: '법원감정가' },

    ]);



    if ( GetValue('감정가_경매_전용면적') > 0) {
        SetValue('감정가_경매_사례가격',  Round(GetNumber('감정가_경매_법원감정가') / GetNumber('감정가_경매_전용면적'), 0) )
    } else {
        SetValue('감정가_경매_사례가격',  0)
    }


    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '사례가격', value: GetValue('감정가_경매_사례가격') },
    ]);

}

function MC_910_저장_입력표() {

    SetValue('01_TEMP', "");



    if ( StrLength(Trim(GetValue('Edit_입력표_지번'))) > 0) {
        SetValue('01_TEMP',  Trim(GetValue('Edit_입력표_지번')))
    }


    if ( StrLength(Trim(GetValue('Edit_입력표_집합건물의명칭'))) > 0) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0) {
            SetValue('01_TEMP',  GetValue('01_TEMP') + " " + Trim(GetValue('Edit_입력표_집합건물의명칭')))
        } else {
            SetValue('01_TEMP',  Trim(GetValue('Edit_입력표_집합건물의명칭')))
        }
    }

    if ( StrLength(Trim(GetValue('Edit_입력표_동수'))) > 0) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0) {
            SetValue('01_TEMP',  GetValue('01_TEMP') + " " + Trim(GetValue('Edit_입력표_동수')))
        } else {
            SetValue('01_TEMP',  Trim(GetValue('Edit_입력표_동수')))
        }
    }

    if ( StrLength(Trim(GetValue('Edit_입력표_호수'))) > 0) {
        if ( StrLength(Trim(GetValue('01_TEMP'))) > 0) {
            SetValue('01_TEMP',  GetValue('01_TEMP') + " " + Trim(GetValue('Edit_입력표_호수')))
        } else {
            SetValue('01_TEMP',  Trim(GetValue('Edit_입력표_호수')))
        }
    }


    SetValue('00_TEMP', "");


    RunQuery('저장_00_담보마스터', {
        'YYYY': GetValue('Edit_KEY_년도'),
        'SEQ': GetValue('Edit_KEY_감정순번'),
        'SEC_CODE': GetValue('Combo_집합건물종류'),
        'ESTI_DATE': GetValue('MkEdit_감정일'),
        'GEO_CODE': GetValue('Edit_입력표_거래처코드'),
        'SANGHO': GetValue('Edit_입력표_거래처'),
        'DAEPYO_NAME': GetValue('Edit_입력표_대표자'),
        'MARKET_NAME': GetValue('Edit_입력표_업소명'),
        'MARKET_CEO': GetValue('Edit_입력표_업소대표자'),
        'DEBTOR': GetValue('Edit_입력표_채무자'),
        'GUARANTOR': GetValue('Edit_입력표_담보제공자'),
        'DEBTOR_RELATION': GetValue('Edit_입력표_채무자와담보제공자의관계'),
        'JUM_CODE': GetValue('_부서코드'),
        'REQ_JUM': GetValue('_부서코드'),
        'PROC_DIV': GetValue('결재진행현황'),
        'MARKET_DIV': GetValue('Combo_입력표_업소구분'),
        'B_SIZE': GetValue('MkEdit_입력표_면적합계'),
        'B_SIZE_PY': GetValue('MkEdit_입력표_면적합계_평'),
        'CURR_AMT': GetValue('MkEdit_입력표_실거래가_총액'),
        'PLMIN_BID_AMT': GetValue('보정표_MkEdit_최저입찰가'),
        'PL_BID_AMT': GetValue('보정표_MkEdit_예상낙찰가'),
        'JUSO1': GetValue('Edit_입력표_소재지1'),
        'B_NAME': GetValue('01_TEMP'),
        'JUM_SABUN': GetValue('Edit_감정자사번'),
        'DOC_KEY': GetValue('Edit_Doc_Key'),
        'INCREASE_AMT': GetValue('보정표_MkEdit_평가가격'),
        'APPL_RATE': GetValue('보정표_MkEdit_적용할낙찰가율'),
        'PRE_BOND_AMT': 0,
        'SPARE_SEC_AMT': 0,
        'EXCEED_YN': '',
        'EXCEED_AMT': 0,
        'RES_PL_BID_AMT': 0,
        'BID_USE_YN': GetValue('응찰_입력표활성여부'),
        'L_SIZE': GetValue('Edit_입력표_대지권소유권'),
        'L_SIZE_PY': GetValue('Edit_입력표_대지권소유권_평'),
        'APPRAISE_GU': GetValue('Combo_보고서_평가구분'),
        'PRE_YYYY': GetValue('_이전년도'),
        'PRE_SEQ': GetValue('_이전담보순번'),
        'LIQUOR_TYPE': GetValue('Combo_사업부문'),
    }, 'POST');

    if (!isEmpty(GetValue('Edit_Doc_Key'))) {

        RunQuery('저장_결재자현황_영업_Clear', {
            'YYYY': GetValue('년도'),
            'SEQ': GetValue('감정순번'),
        }, 'POST');


        RunQuery('저장_결재자현황_영업', {
            'DOC_KEY': GetValue('Edit_Doc_Key'),
            'YYYY': GetValue('년도'),
            'SEQ': GetValue('감정순번'),
        }, 'POST');

    }


    RunQuery('저장_01_규제의표시', {
        'YYYY': GetValue('Edit_KEY_년도'),
        'SEQ': GetValue('Edit_KEY_감정순번'),
        'REST_PL_USE': GetValue('Edit_입력표_국토의계획'),
        'REST_OT_LAW': GetValue('Edit_입력표_다른법률등'),
        'REST_EN_RULE': GetValue('Edit_입력표_시행령부칙'),
        'REST_FU_LAW': GetValue('Edit_입력표_토지이용규제'),
    }, 'POST');


    RunQuery('저장_02_입력표', {
        'YYYY': GetValue('Edit_KEY_년도'),
        'SEQ': GetValue('Edit_KEY_감정순번'),
        'JUSO1': GetValue('Edit_입력표_소재지1'),
        'JUSO2': GetValue('00_TEMP'),
        'LOT_NUM': GetValue('Edit_입력표_지번'),
        'CB_NAME': GetValue('Edit_입력표_집합건물의명칭'),
        'DONG': GetValue('Edit_입력표_동수'),
        'HO': GetValue('Edit_입력표_호수'),
        'LCATEGORY': GetValue('Combo_입력표_지목'),
        'LG_OWNER_YN': GetValue('Edit_입력표_대지권소유권여부'),
        'LG_OWNER': GetValue('Edit_입력표_대지권소유권'),
        'LG_SIZE': GetValue('MkEdit_입력표_토지권의목적인'),
        'POSS_A_AREA': GetValue('Combo_입력표_가임대보증금적용지역'),
        'CB_STRUC': GetValue('Combo_입력표_구조'),
        'CB_ROOF': GetValue('Combo_입력표_지붕'),
        'CB_UPFLOOR': GetValue('Edit_입력표_지상'),
        'CB_DNFLOOR': GetValue('Edit_입력표_지하'),
        'CB_FLOOR': GetValue('Edit_입력표_해당층'),
        'CB_YYYY': GetValue('MkEdit_입력표_건축일자'),
        'ELAP_YEAR': GetValue('MkEdit_입력표_건축년도_경과'),
        'NUM_HOUSEHOLD': GetValue('본건_MkEdit_세대수'),
        'NUM_YEAR': GetValue('MkEdit_입력표_내용연수'),
        'CB_EXM_SIZE': GetValue('MkEdit_입력표_전유면적'),
        'CB_EXM_SIZE_PY': GetValue('MkEdit_입력표_전유면적_평'),
        'CB_PUB_SIZE': GetValue('MkEdit_입력표_공유면적'),
        'CB_PUB_SIZE_PY': GetValue('MkEdit_입력표_공유면적_평'),
        'CB_TOT_SIZE': GetValue('MkEdit_입력표_면적합계'),
        'CB_TOT_SIZE_PY': GetValue('MkEdit_입력표_면적합계_평'),
        'OF_GU': GetValue('00_TEMP'),
        'OF_HEATER_YN': GetValue('00_TEMP'),
        'OF_FLOOR': GetValue('00_TEMP'),
        'OF_FLOOR_IDX': 0,
        'OF_PLACE': GetValue('00_TEMP'),
        'OF_PLACE_IDX': 0,
        'OF_JANGA_RATE': GetValue('MkEdit_입력표_잔가율'),
        'OF_ROAD_CODE': GetValue('00_TEMP'),
        'OF_ACCESS_CODE': GetValue('00_TEMP'),
        'OF_ETC': GetValue('00_TEMP'),
        'OF_ETC_IDX': 0,
        'REGI_AMT': GetValue('MkEdit_입력표_실거래가_총액'),
        'REGI_DAN': GetValue('MkEdit_입력표_실거래가_단가_M2'),
        'REGI_DAN_PY': GetValue('MkEdit_입력표_실거래가_단가_평'),
        'BASE_AMT': GetValue('MkEdit_입력표_기준시가_총액'),
        'BASE_DAN': GetValue('MkEdit_입력표_기준시가_단가_M2'),
        'BASE_DAN_PY': GetValue('MkEdit_입력표_기준시가_단가_평'),
        'SEC_REGI_SIZE': GetValue('MkEdit_입력표_담보제공_전용면적'),
        'SEC_NUME': GetValue('MkEdit_입력표_담보제공_분자'),
        'SEC_DENO': GetValue('MkEdit_입력표_담보제공_분모'),
        'SEC_RATE': GetValue('MkEdit_입력표_담보제공_비율'),
        'SEC_OFFER_SIZE': GetValue('MkEdit_입력표_담보제공_제공면적'),
        'SEC_DESC': GetValue('MkEdit_입력표_담보제공_사유'),
        'OF_ROAD_IDX': 0,
        'OF_ACCESS_IDX': 0,
        'INC_AMT': GetValue('평가_MkEdit_담보_평가가격'),
        'FNL_INC_AMT': GetValue('평가_MkEdit_담보_최종평가가격'),
    }, 'POST');


    RunQuery('저장_20_낙찰가율보정표', {
        'YYYY': GetValue('Edit_KEY_년도'),
        'SEQ': GetValue('Edit_KEY_감정순번'),
        'P_BID_RATE': GetValue('보정표_MkEdit_당해지역낙찰가율'),
        'K_BID_RATE': GetValue('보정표_MkEdit_유사부동산낙찰가율'),
        'B_BID_RATE': GetValue('보정표_MkEdit_기준낙찰가율'),
        'APPL_RATE': GetValue('보정표_MkEdit_적용할낙찰가율'),
        'RIGHTS_CODE': GetValue('보정표_Combo_점유자의권리형태'),
        'RIGHTS_RATE': GetValue('보정표_MkEdit_점유자의권리형태_적용율'),
        'INCREASE_AMT': GetValue('보정표_MkEdit_평가가격'),
        'PL_MIN_BID_AMT': GetValue('보정표_MkEdit_최저입찰가'),
        'PL_BID_AMT': GetValue('보정표_MkEdit_예상낙찰가'),
        'MUL_ADJ_ROAD': GetValue('보정표_Combo_접한도로의폭'),
        'MUL_ADJ_RATE': GetValue('보정표_MkEdit_접한도로의폭_적용율'),
        'MUL_EXM_SIZE': GetValue('보정표_Combo_전유부분의면적'),
        'MUL_EXM_RATE': GetValue('보정표_MkEdit_전유부분의면적_적용율'),
        'MUL_FLOOR_CODE': GetValue('보정표_Combo_총층수중전유부분의위치'),
        'MUL_FLOOR_RATE': GetValue('보정표_MkEdit_총층수중전유부분_적용율'),
        'MUL_ELAP_CODE': GetValue('보정표_Combo_건축물의경과년도'),
        'MUL_ELAP_RATE': GetValue('보정표_MkEdit_건축물의경과년도_적용율'),
    }, 'POST');


    RunQuery('저장_10_감정가_본건', {
        'YYYY': GetValue('Edit_KEY_년도'),
        'SEQ': GetValue('Edit_KEY_감정순번'),
        'CHECK_YN_1': GetValue('본건_Edit_선택1'),
        'ONLY_SIZE_1': GetValue('본건_MkEdit_전용면적1'),
        'CURR_MIN_AMT_1': GetValue('본건_MkEdit_최저가격1'),
        'CURR_MAX_AMT_1': GetValue('본건_MkEdit_최고가격1'),
        'CURR_AVG_AMT_1': GetValue('본건_MkEdit_평균가격1'),
        'CURR_SIZE_DAN_1': GetValue('본건_MkEdit_전용면적단가1'),
        'LEASE_AMT_1': GetValue('본건_MkEdit_전세금1'),
        'LEASE_RATE_1': GetValue('본건_MkEdit_전세_비율1'),
        'CHECK_YN_2': GetValue('본건_Edit_선택2'),
        'ONLY_SIZE_2': GetValue('본건_MkEdit_전용면적2'),
        'CURR_MIN_AMT_2': GetValue('본건_MkEdit_최저가격2'),
        'CURR_MAX_AMT_2': GetValue('본건_MkEdit_최고가격2'),
        'CURR_AVG_AMT_2': GetValue('본건_MkEdit_평균가격2'),
        'CURR_SIZE_DAN_2': GetValue('본건_MkEdit_전용면적단가2'),
        'LEASE_AMT_2': GetValue('본건_MkEdit_전세금2'),
        'LEASE_RATE_2': GetValue('본건_MkEdit_전세_비율2'),
        'CHECK_YN_3': GetValue('본건_Edit_선택3'),
        'ONLY_SIZE_3': GetValue('본건_MkEdit_전용면적3'),
        'CURR_MIN_AMT_3': GetValue('본건_MkEdit_최저가격3'),
        'CURR_MAX_AMT_3': GetValue('본건_MkEdit_최고가격3'),
        'CURR_AVG_AMT_3': GetValue('본건_MkEdit_평균가격3'),
        'CURR_SIZE_DAN_3': GetValue('본건_MkEdit_전용면적단가3'),
        'LEASE_AMT_3': GetValue('본건_MkEdit_전세금3'),
        'LEASE_RATE_3': GetValue('본건_MkEdit_전세_비율3'),
    }, 'POST');


    GetComponent('DBGrid_가격사례').GetModifyData([
        { key: '저장_가격_0_년도', value: '년도', isDelRowInclude: true },

        { key: '저장_가격_0_일련번호', value: '일련번호', isDelRowInclude: true },

        { key: '저장_가격_0_사례번호', value: '사례번호', isDelRowInclude: true },

        { key: '저장_가격_0_소재지', value: '소재지', isDelRowInclude: true },

        { key: '저장_가격_0_본건과의거리', value: '본건과의거리', isDelRowInclude: true },

        { key: '저장_가격_0_세대수', value: '세대수', isDelRowInclude: true },

        { key: '저장_가격_0_건축년도', value: '건축년도', isDelRowInclude: true },

        { key: '저장_가격_0_경과년수', value: '경과년수', isDelRowInclude: true },

        { key: '저장_가격_0_내용년수', value: '내용년수', isDelRowInclude: true },

        { key: '저장_가격_1_선택여부', value: '지하층_선택여부', isDelRowInclude: true },

        { key: '저장_가격_1_전용면적', value: '지하층_전용면적', isDelRowInclude: true },

        { key: '저장_가격_1_시세_최저가', value: '지하층_시세조사_최저가', isDelRowInclude: true },

        { key: '저장_가격_1_시세_최고가', value: '지하층_시세조사_최고가', isDelRowInclude: true },

        { key: '저장_가격_1_시세_평균가격', value: '지하층_시세조사_평균가격', isDelRowInclude: true },

        { key: '저장_가격_1_시세_전용면적단가', value: '지하층_시세조사_전용면적단가', isDelRowInclude: true },

        { key: '저장_가격_1_전세_전세가', value: '지하층_전세수준_전세가', isDelRowInclude: true },

        { key: '저장_가격_1_전세_비율', value: '지하층_전세수준_비율', isDelRowInclude: true },

        { key: '저장_가격_2_선택여부', value: '기준층_선택여부', isDelRowInclude: true },

        { key: '저장_가격_2_전용면적', value: '기준층_전용면적', isDelRowInclude: true },

        { key: '저장_가격_2_시세_최저가', value: '기준층_시세조사_최저가', isDelRowInclude: true },

        { key: '저장_가격_2_시세_최고가', value: '기준층_시세조사_최고가', isDelRowInclude: true },

        { key: '저장_가격_2_시세_평균가격', value: '기준층_시세조사_평균가격', isDelRowInclude: true },

        { key: '저장_가격_2_시세_전용면적단가', value: '기준층_시세조사_전용면적단가', isDelRowInclude: true },

        { key: '저장_가격_2_전세_전세가', value: '기준층_전세수준_전세가', isDelRowInclude: true },

        { key: '저장_가격_2_전세_비율', value: '기준층_전세수준_비율', isDelRowInclude: true },

        { key: '저장_가격_3_선택여부', value: '최고층_선택여부', isDelRowInclude: true },

        { key: '저장_가격_3_전용면적', value: '최고층_전용면적', isDelRowInclude: true },

        { key: '저장_가격_3_시세_최저가', value: '최고층_시세조사_최저가', isDelRowInclude: true },

        { key: '저장_가격_3_시세_최고가', value: '최고층_시세조사_최고가', isDelRowInclude: true },

        { key: '저장_가격_3_시세_평균가격', value: '최고층_시세조사_평균가격', isDelRowInclude: true },

        { key: '저장_가격_3_시세_전용면적단가', value: '최고층_시세조사_전용면적단가', isDelRowInclude: true },

        { key: '저장_가격_3_전세_전세가', value: '최고층_전세수준_전세가', isDelRowInclude: true },

        { key: '저장_가격_3_전세_비율', value: '최고층_전세수준_비율', isDelRowInclude: true },

        { key: '저장_가격_0_구조', value: '구조', isDelRowInclude: true },

        { key: '저장_가격_0_지번', value: '지번', isDelRowInclude: true },
    ]);


    RunQuery('저장_11_감정가_가격사례', {
        '저장_가격_0_소재지': GetValue('저장_가격_0_소재지'),
        '저장_가격_0_지번': GetValue('저장_가격_0_지번'),
        '저장_가격_0_본건과의거리': GetValue('저장_가격_0_본건과의거리'),
        '저장_가격_0_세대수': GetValue('저장_가격_0_세대수'),
        '저장_가격_0_건축년도': GetValue('저장_가격_0_건축년도'),
        '저장_가격_0_경과년수': GetValue('저장_가격_0_경과년수'),
        '저장_가격_0_내용년수': GetValue('저장_가격_0_내용년수'),
        '저장_가격_0_구조': GetValue('저장_가격_0_구조'),
        '저장_가격_1_선택여부': GetValue('저장_가격_1_선택여부'),
        '저장_가격_1_전용면적': GetValue('저장_가격_1_전용면적'),
        '저장_가격_1_시세_최저가': GetValue('저장_가격_1_시세_최저가'),
        '저장_가격_1_시세_최고가': GetValue('저장_가격_1_시세_최고가'),
        '저장_가격_1_시세_평균가격': GetValue('저장_가격_1_시세_평균가격'),
        '저장_가격_1_시세_전용면적단가': GetValue('저장_가격_1_시세_전용면적단가'),
        '저장_가격_1_전세_전세가': GetValue('저장_가격_1_전세_전세가'),
        '저장_가격_1_전세_비율': GetValue('저장_가격_1_전세_비율'),
        '저장_가격_2_선택여부': GetValue('저장_가격_2_선택여부'),
        '저장_가격_2_전용면적': GetValue('저장_가격_2_전용면적'),
        '저장_가격_2_시세_최저가': GetValue('저장_가격_2_시세_최저가'),
        '저장_가격_2_시세_최고가': GetValue('저장_가격_2_시세_최고가'),
        '저장_가격_2_시세_평균가격': GetValue('저장_가격_2_시세_평균가격'),
        '저장_가격_2_시세_전용면적단가': GetValue('저장_가격_2_시세_전용면적단가'),
        '저장_가격_2_전세_전세가': GetValue('저장_가격_2_전세_전세가'),
        '저장_가격_2_전세_비율': GetValue('저장_가격_2_전세_비율'),
        '저장_가격_3_선택여부': GetValue('저장_가격_3_선택여부'),
        '저장_가격_3_전용면적': GetValue('저장_가격_3_전용면적'),
        '저장_가격_3_시세_최저가': GetValue('저장_가격_3_시세_최저가'),
        '저장_가격_3_시세_최고가': GetValue('저장_가격_3_시세_최고가'),
        '저장_가격_3_시세_평균가격': GetValue('저장_가격_3_시세_평균가격'),
        '저장_가격_3_시세_전용면적단가': GetValue('저장_가격_3_시세_전용면적단가'),
        '저장_가격_3_전세_전세가': GetValue('저장_가격_3_전세_전세가'),
        '저장_가격_3_전세_비율': GetValue('저장_가격_3_전세_비율'),
        '저장_가격_0_년도': GetValue('저장_가격_0_년도'),
        '저장_가격_0_일련번호': GetValue('저장_가격_0_일련번호'),
        '저장_가격_0_사례번호': GetValue('저장_가격_0_사례번호'),
    }, 'POST');


    GetComponent('DBGrid_경매사례').GetModifyData([
        { key: '저장_경매_년도', value: '년도', isDelRowInclude: true },

        { key: '저장_경매_일련번호', value: '일련번호', isDelRowInclude: true },

        { key: '저장_경매_사례번호', value: '사례번호', isDelRowInclude: true },

        { key: '저장_경매_경매사건번호', value: '경매사건번호', isDelRowInclude: true },

        { key: '저장_경매_소재지', value: '소재지', isDelRowInclude: true },

        { key: '저장_경매_층수_코드', value: '층수_코드', isDelRowInclude: true },

        { key: '저장_경매_층수_비준율', value: '층수_비준율', isDelRowInclude: true },

        { key: '저장_경매_전용면적', value: '전용면적', isDelRowInclude: true },

        { key: '저장_경매_건축년도', value: '건축년도', isDelRowInclude: true },

        { key: '저장_경매_경과년도', value: '경과년도', isDelRowInclude: true },

        { key: '저장_경매_내용년수', value: '내용년수', isDelRowInclude: true },

        { key: '저장_경매_법원감정가', value: '법원감정가', isDelRowInclude: true },

        { key: '저장_경매_전용면적단가', value: '전용면적단가', isDelRowInclude: true },

        { key: '저장_경매_낙찰가격', value: '낙찰가격', isDelRowInclude: true },

        { key: '저장_경매_낙찰가율', value: '낙찰가율', isDelRowInclude: true },

        { key: '저장_경매_구조', value: '구조', isDelRowInclude: true },
    ]);


    RunQuery('저장_12_감정가_경매사례', {
        '저장_경매_년도': GetValue('저장_경매_년도'),
        '저장_경매_일련번호': GetValue('저장_경매_일련번호'),
        '저장_경매_사례번호': GetValue('저장_경매_사례번호'),
        '저장_경매_경매사건번호': GetValue('저장_경매_경매사건번호'),
        '저장_경매_소재지': GetValue('저장_경매_소재지'),
        '저장_경매_층수_코드': GetValue('저장_경매_층수_코드'),
        '저장_경매_층수_비준율': GetValue('저장_경매_층수_비준율'),
        '저장_경매_전용면적': GetValue('저장_경매_전용면적'),
        '저장_경매_건축년도': GetValue('저장_경매_건축년도'),
        '저장_경매_경과년도': GetValue('저장_경매_경과년도'),
        '저장_경매_구조': GetValue('저장_경매_구조'),
        '저장_경매_내용년수': GetValue('저장_경매_내용년수'),
        '저장_경매_법원감정가': GetValue('저장_경매_법원감정가'),
        '저장_경매_전용면적단가': GetValue('저장_경매_전용면적단가'),
        '저장_경매_낙찰가격': GetValue('저장_경매_낙찰가격'),
        '저장_경매_낙찰가율': GetValue('저장_경매_낙찰가율')
    }, 'POST');


    GetComponent('DBGrid_비준가격').GetModifyData([
        { key: '저장_비준_년도', value: '년도', isDelRowInclude: true },

        { key: '저장_비준_일련번호', value: '일련번호', isDelRowInclude: true },

        { key: '저장_비준_사례구분', value: '사례구분', isDelRowInclude: true },

        { key: '저장_비준_사례번호', value: '사례번호', isDelRowInclude: true },

        { key: '저장_비준_소재지_비교치', value: '소재지_비교치', isDelRowInclude: true },

        { key: '저장_비준_전용면적단가', value: '전용면적단가', isDelRowInclude: true },

        { key: '저장_비준_층별비교_본건', value: '층별비교_본건', isDelRowInclude: true },

        { key: '저장_비준_층별비교_본건_적용율', value: '층별비교_본건_적용율', isDelRowInclude: true },

        { key: '저장_비준_층별비교_사례', value: '층별비교_사례', isDelRowInclude: true },

        { key: '저장_비준_층별비교_사례_적용율', value: '층별비교_사례_적용율', isDelRowInclude: true },

        { key: '저장_비준_층별비교_비교치', value: '층별비교_비교치', isDelRowInclude: true },

        { key: '저장_비준_잔가율비교_본건', value: '잔가율비교_본건', isDelRowInclude: true },

        { key: '저장_비준_잔가율비교_사례', value: '잔가율비교_사례', isDelRowInclude: true },

        { key: '저장_비준_잔가율비교_비교치', value: '잔가율비교_비교치', isDelRowInclude: true },

        { key: '저장_비준_요인합계', value: '요인합계', isDelRowInclude: true },

        { key: '저장_비준_산정단가', value: '산정단가', isDelRowInclude: true },

        { key: '저장_비준_적용단가', value: '적용단가', isDelRowInclude: true },

        { key: '저장_비준_전용면적', value: '전용면적', isDelRowInclude: true },

        { key: '저장_비준_최고금액', value: '최고금액', isDelRowInclude: true },

        { key: '저장_비준_최저금액', value: '최저금액', isDelRowInclude: true },

        { key: '저장_비준_시점_본건_일자', value: '시점_본건_일자', isDelRowInclude: true },

        { key: '저장_비준_시점_본건_적용율', value: '시점_본건_적용율', isDelRowInclude: true },

        { key: '저장_비준_시점_사례_일자', value: '시점_사례_일자', isDelRowInclude: true },

        { key: '저장_비준_시점_사례_적용율', value: '시점_사례_적용율', isDelRowInclude: true },

        { key: '저장_비준_시점_비교_적용율', value: '시점_비교치', isDelRowInclude: true },

        { key: '저장_비준_환산금액', value: '환산금액', isDelRowInclude: true },
    ]);


    RunQuery('저장_17_감정가_비준가격', {
        '저장_비준_년도': GetValue('저장_비준_년도'),
        '저장_비준_일련번호': GetValue('저장_비준_일련번호'),
        '저장_비준_사례구분': GetValue('저장_비준_사례구분'),
        '저장_비준_사례번호': GetValue('저장_비준_사례번호'),
        '저장_비준_소재지_비교치': GetValue('저장_비준_소재지_비교치'),
        '저장_비준_전용면적': GetValue('저장_비준_전용면적'),
        '저장_비준_전용면적단가': GetValue('저장_비준_전용면적단가'),
        '저장_비준_시점_본건_일자': GetValue('저장_비준_시점_본건_일자'),
        '저장_비준_시점_본건_적용율': GetValue('저장_비준_시점_본건_적용율'),
        '저장_비준_시점_사례_일자': GetValue('저장_비준_시점_사례_일자'),
        '저장_비준_시점_사례_적용율': GetValue('저장_비준_시점_사례_적용율'),
        '저장_비준_시점_비교_적용율': GetValue('저장_비준_시점_비교_적용율'),
        '저장_비준_최저금액': GetValue('저장_비준_최저금액'),
        '저장_비준_최고금액': GetValue('저장_비준_최고금액'),
        '저장_비준_층별비교_본건': GetValue('저장_비준_층별비교_본건'),
        '저장_비준_층별비교_본건_적용율': GetValue('저장_비준_층별비교_본건_적용율'),
        '저장_비준_층별비교_사례': GetValue('저장_비준_층별비교_사례'),
        '저장_비준_층별비교_사례_적용율': GetValue('저장_비준_층별비교_사례_적용율'),
        '저장_비준_층별비교_비교치': GetValue('저장_비준_층별비교_비교치'),
        '저장_비준_잔가율비교_본건': GetValue('저장_비준_잔가율비교_본건'),
        '저장_비준_잔가율비교_사례': GetValue('저장_비준_잔가율비교_사례'),
        '저장_비준_잔가율비교_비교치': GetValue('저장_비준_잔가율비교_비교치'),
        '저장_비준_요인합계': GetValue('저장_비준_요인합계'),
        '저장_비준_산정단가': GetValue('저장_비준_산정단가'),
        '저장_비준_적용단가': GetValue('저장_비준_적용단가'),
        '저장_비준_환산금액': GetValue('저장_비준_환산금액')
    }, 'POST');


    RunQuery('저장_19_감정가_평가액산정', {
        'YYYY': GetValue('Edit_KEY_년도'),
        'SEQ': GetValue('Edit_KEY_감정순번'),
        'MA_MIN_AMT': GetValue('평가_MkEdit_본건_최저'),
        'MA_MIN_SIZE_DAN': GetValue('평가_MkEdit_본건_최저_단가'),
        'MA_MAX_AMT': GetValue('평가_MkEdit_본건_최고'),
        'MA_MAX_SIZE_DAN': GetValue('평가_MkEdit_본건_최고_단가'),
        'MA_RATE': GetValue('평가_MkEdit_본건_비율'),
        'PR_MIN_AMT': GetValue('평가_MkEdit_가격_최저'),
        'PR_MIN_SIZE_DAN': GetValue('평가_MkEdit_가격_최저_단가'),
        'PR_MAX_AMT': GetValue('평가_MkEdit_가격_최고'),
        'PR_MAX_SIZE_DAN': GetValue('평가_MkEdit_가격_최고_단가'),
        'PR_RATE': GetValue('평가_MkEdit_가격_비율'),
        'AU_MIN_AMT': GetValue('평가_MkEdit_경매_최저'),
        'AU_MIN_SIZE_DAN': GetValue('평가_MkEdit_경매_최저_단가'),
        'AU_MAX_AMT': GetValue('평가_MkEdit_경매_최고'),
        'AU_MAX_SIZE_DAN': GetValue('평가_MkEdit_경매_최고_단가'),
        'AU_RATE': GetValue('평가_MkEdit_경매_비율'),
        'APPL_AMT': GetValue('평가_MkEdit_결정가격'),
        'APPL_SIZE_DAN': GetValue('평가_MkEdit_결정가격_단가'),
        'INT_REP_SIZE': GetValue('평가_MkEdit_인테리어_면적_M2'),
        'INT_REP_SIZE_PY': GetValue('평가_MkEdit_인테리어_면적_평'),
        'INT_REP_DAN': GetValue('평가_MkEdit_인테리어_단가'),
        'INT_REP_AMT': GetValue('평가_MkEdit_인테리어_금액'),
        'INC_AMT': GetValue('평가_MkEdit_평가가격'),
        'INC_SIZE_DAN': GetValue('평가_MkEdit_평가가격_단가'),
        'FNL_INC_AMT': GetValue('평가_MkEdit_담보_최종평가가격'),
        'INT_REP_DAN_CODE': GetValue('평가_Combo_인테리어단가')
    }, 'POST');


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetModifyData([
        { key: '저장_배당표_년도', value: 'YYYY', isDelRowInclude: true },

        { key: '저장_배당표_일련번호', value: 'SEQ', isDelRowInclude: true },

        { key: '저장_배당표_각구의일련번호', value: 'RNO', isDelRowInclude: true },

        { key: '저장_배당표_각구의위치', value: 'RESI_NAME', isDelRowInclude: true },

        { key: '저장_배당표_주거용방의총수', value: 'RESI_RM_CNT', isDelRowInclude: true },

        { key: '저장_배당표_확정일자보유여부', value: 'FXDATE_YN', isDelRowInclude: true },

        { key: '저장_배당표_적용한방의총수', value: 'POSS_A_RM_CNT', isDelRowInclude: true },

        { key: '저장_배당표_실제임대차보증금', value: 'LEASE_AMT', isDelRowInclude: true },

        { key: '저장_배당표_최종적용임대차보증금', value: 'REP_BE_SEC_AMT', isDelRowInclude: true },

        { key: '저장_배당표_확정_임대차보증금', value: 'FXLEA_AMT', isDelRowInclude: true },

        { key: '저장_배당표_확정없는_임대차보증금', value: 'FXLEA_NO_AMT', isDelRowInclude: true },
    ]);


    GetComponent('DBGrid_배당금_계산').GetModifyData([
        { key: '저장_배당표_배당금_년도', value: 'YYYY', isDelRowInclude: true },

        { key: '저장_배당표_배당금_일련번호', value: 'SEQ', isDelRowInclude: true },

        { key: '저장_배당표_배당금_순번', value: 'LN_SEQ', isDelRowInclude: true },

        { key: '저장_배당표_배당금_배당표구분', value: 'SHA_GU', isDelRowInclude: true },

        { key: '저장_배당표_배당금_순위', value: 'RANK', isDelRowInclude: true },

        { key: '저장_배당표_배당금_발생일자', value: 'RIGHT_DATE', isDelRowInclude: true },

        { key: '저장_배당표_배당금_권리자', value: 'RIGHT_PERSON', isDelRowInclude: true },

        { key: '저장_배당표_배당금_권리의내용', value: 'RIGHT_CODE', isDelRowInclude: true },

        { key: '저장_배당표_배당금_말소여부', value: 'ERA_YN', isDelRowInclude: true },

        { key: '저장_배당표_배당금_단독담보', value: 'CRED_SELF_AMT', isDelRowInclude: true },

        { key: '저장_배당표_배당금_공동담보', value: 'CRED_COMB_AMT', isDelRowInclude: true },

        { key: '저장_배당표_배당금_표시순위', value: 'DISP_RANK', isDelRowInclude: true },

        { key: '저장_배당표_배당금_배당순위', value: 'PRO_RATE_CODE', isDelRowInclude: true },

        { key: '저장_배당표_배당금_당사설정', value: 'HITE_YN', isDelRowInclude: true },
    ]);

}

function MC_102_담보제공비율부분_계산및셋팅() {

    SetValue('MkEdit_입력표_담보제공_비율', Round(GetNumber('MkEdit_입력표_담보제공_분자') / GetNumber('MkEdit_입력표_담보제공_분모')*100,2))

    SetValue('MkEdit_입력표_담보제공_제공면적',  GetValue('MkEdit_입력표_담보제공_전용면적')
        *(GetValue('MkEdit_입력표_담보제공_비율')/100) )


    SetValue('평가_MkEdit_담보_등기전용면적', GetValue('MkEdit_입력표_담보제공_전용면적'));

    SetValue('평가_MkEdit_담보_분자', GetValue('MkEdit_입력표_담보제공_분자'));

    SetValue('평가_MkEdit_담보_분모', GetValue('MkEdit_입력표_담보제공_분모'));

    SetValue('평가_MkEdit_담보_비율', GetValue('MkEdit_입력표_담보제공_비율'));

    SetValue('평가_MkEdit_담보_제공면적', GetValue('MkEdit_입력표_담보제공_제공면적'));


    MC_402_평가액_평가액산정();


    RunButton('Command_적용할낙찰가율');

}

function MC_202_DBGrid_경매사례_EVENT_총층수() {

    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_총층수', value: '총층수' },
    ]);


    SetValue('감정가_경매_해당층_비준율', 0);

    SetValue('감정가_경매_해당층_IDX', -1);

    SetValue('감정가_경매_해당층_코드', "");


    RunQuery('Q_00_전유부분의위치_총층수중해당층', {
        '총층수': GetValue('감정가_경매_총층수'),
    }, 'GET');


    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '층수_비준율', value: '0' },

        { key: '층수_코드', value: '' },

    ]);

}

function MC_202_DBGrid_경매사례_EVENT_해당층() {

    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_해당층_코드', value: '층수_코드' },
    ]);


    GetZoonData('Q_00_연립다세대_전유부분의위치').FindIndex('감정가_경매_해당층_IDX', (row) => {
        if ((row['CD_CODE'] == GetValue('감정가_경매_해당층_코드'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_연립다세대_전유부분의위치').GetRow(GetValue('감정가_경매_해당층_IDX'), [
        { key: '감정가_경매_해당층_비준율', value: 'IDX' },
    ]);


    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '층수_비준율', value: GetValue('감정가_경매_해당층_비준율') },
    ]);


    SetValue('감정가_경매_해당층_코드', "");

    SetValue('감정가_경매_해당층_IDX', -1);

    SetValue('감정가_경매_구조', "");

    SetValue('00_NUMBER', -1);

}

function MC_301_Combo_사례번호_자료생성_0_경매사례() {

    GetComponent('DBGrid_경매사례').GetRows("", [
        { key: '감정가_비준_사례번호_생성전', value: '사례번호' },

        { key: '감정가_비준_사례번호_생성문자전', value: '사례번호명' },
    ]
    );


    GetComponent('DBGrid_경매사례').GetRowCount('감정가_비준_사례번호_CNT');


    SetValue('감정가_비준_사례번호_CNT', GetValue('감정가_비준_사례번호_CNT')-1);

}

function MC_301_Combo_사례번호_자료생성_0_가격사례() {

    GetComponent('DBGrid_가격사례').GetRows("", [
        { key: '감정가_비준_사례번호_생성전', value: '사례번호' },

        { key: '감정가_비준_사례번호_생성문자전', value: '사례번호' },
    ]
    );


    GetComponent('DBGrid_가격사례').GetRowCount('감정가_비준_사례번호_CNT');


    SetValue('감정가_비준_사례번호_CNT', GetValue('감정가_비준_사례번호_CNT')-1);

}

function MC_912_저장_문서관리() {

    GetComponent('DBGrid_사진관리').GetModifyData([
        { key: '저장_문서관리_년도', value: 'YYYY', isDelRowInclude: true },

        { key: '저장_문서관리_일련번호', value: 'SEQ', isDelRowInclude: true },

        { key: '저장_문서관리_사진구분', value: 'PHOTO_DIV', isDelRowInclude: true },

        { key: '저장_문서관리_순번', value: 'LN_SEQ', isDelRowInclude: true },

        { key: '저장_문서관리_사진명', value: 'PHOTO_NAME', isDelRowInclude: true },

        { key: '저장_문서관리_경로및파일명', value: 'FILE_NAME', isDelRowInclude: true },

        { key: '저장_문서관리_비고', value: 'REMARK', isDelRowInclude: true },

        { key: '저장_문서관리_전송된사진명', value: 'UPLOAD_FILE', isDelRowInclude: true },
    ]);


    GetComponent('DBGrid_문서').GetModifyData([
        { key: '저장_문서관리_문서_년도', value: 'YYYY', isDelRowInclude: true },

        { key: '저장_문서관리_문서_일련번호', value: 'SEQ', isDelRowInclude: true },

        { key: '저장_문서관리_문서_사진구분', value: 'PHOTO_DIV', isDelRowInclude: true },

        { key: '저장_문서관리_문서_순번', value: 'LN_SEQ', isDelRowInclude: true },

        { key: '저장_문서관리_문서_사진명', value: 'PHOTO_NAME', isDelRowInclude: true },

        { key: '저장_문서관리_문서_경로및파일명', value: 'FILE_NAME', isDelRowInclude: true },

        { key: '저장_문서관리_문서_비고', value: 'REMARK', isDelRowInclude: true },

        { key: '저장_문서관리_문서_전송된파일명', value: 'UPLOAD_FILE', isDelRowInclude: true },
    ]);


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


    RunQuery('저장_문서관리_문서', {
        '저장_문서관리_문서_년도': GetValue('저장_문서관리_문서_년도'),
        '저장_문서관리_문서_일련번호': GetValue('저장_문서관리_문서_일련번호'),
        '저장_문서관리_문서_사진구분': GetValue('저장_문서관리_문서_사진구분'),
        '저장_문서관리_문서_순번': GetValue('저장_문서관리_문서_순번')
    }, 'POST');


    RunQuery('Q_문서관리_관련문서', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_900_저장_Key만들기() {

    RunQuery('Q_09_감정순번생성', {}, 'GET');


    GetZoonData('Q_09_감정순번생성').GetRow(0, [
        { key: 'Edit_KEY_감정순번', value: 'SEQ' },

        { key: '감정순번', value: 'SEQ' },

    ]);

}

function MC_303_비준가격_추가시_Grid_Edit() {

    GetComponent('DBGrid_비준가격').GetRowCount('감정가_비준_RowCount');


    SetValue('감정가_비준_RowCount', GetValue('감정가_비준_현재행'));


    GetComponent('DBGrid_비준가격').SetRow(GetValue('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('비준_Combo_사례구분') },

        { key: '사례번호', value: GetValue('비준_Combo_사례번호') },

        { key: '소재지_비교치', value: GetValue('비준_MkEdit_소재지_비교') },

        { key: '전용면적단가', value: GetValue('비준_MkEdit_전용면적단가') },

        { key: '층별비교_본건', value: GetValue('비준_Combo_층별비교_본건') },

        { key: '층별비교_본건_적용율', value: GetValue('비준_MkEdit_층별_본건') },

        { key: '층별비교_사례', value: GetValue('비준_Combo_층별비교_사례') },

        { key: '층별비교_사례_적용율', value: GetValue('비준_MkEdit_층별_사례') },

        { key: '층별비교_비교치', value: GetValue('비준_MkEdit_층별_비교') },

        { key: '잔가율비교_본건', value: GetValue('비준_MkEdit_잔가율_본건') },

        { key: '잔가율비교_사례', value: GetValue('비준_MkEdit_잔가율_사례') },

        { key: '잔가율비교_비교치', value: GetValue('비준_MkEdit_잔가율_비교') },

        { key: '요인합계', value: GetValue('비준_MkEdit_요인합계') },

        { key: '적용단가', value: GetValue('비준_MkEdit_적용단가') },

        { key: '산정단가', value: GetValue('비준_MkEdit_산정단가') },

        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명') },

        { key: '전용면적', value: GetValue('비준_MkEdit_전용면적') },

        { key: '최고금액', value: GetValue('비준_MkEdit_최고금액') },

        { key: '최저금액', value: GetValue('비준_MkEdit_최저금액') },

        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명') },

        { key: '시점_본건_일자', value: GetValue('비준_MkEdit_시점_본건_일자') },

        { key: '시점_본건_적용율', value: GetValue('비준_MkEdit_시점_본건_적용율') },

        { key: '시점_사례_일자', value: GetValue('비준_MkEdit_시점_사례_일자') },

        { key: '시점_사례_적용율', value: GetValue('비준_MkEdit_시점_사례_적용율') },

        { key: '시점_비교치', value: GetValue('비준_MkEdit_시점_비교') },

        { key: '환산금액', value: GetValue('비준_MkEdit_환산금액') },

    ]);


    GetComponent('DBGrid_비준가격집계표').SetRow(GetValue('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('비준_Combo_사례구분') },

        { key: '사례번호', value: GetValue('비준_Combo_사례번호') },

        { key: '소재지_비교치', value: GetValue('비준_MkEdit_소재지_비교') },

        { key: '전용면적단가', value: GetValue('비준_MkEdit_전용면적단가') },

        { key: '층별비교_비교치', value: GetValue('비준_MkEdit_층별_비교') },

        { key: '잔가율비교_비교치', value: GetValue('비준_MkEdit_잔가율_비교') },

        { key: '요인합계', value: GetValue('비준_MkEdit_요인합계') },

        { key: '적용단가', value: GetValue('비준_MkEdit_적용단가') },

        { key: '산정단가', value: GetValue('비준_MkEdit_산정단가') },

        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명') },

        { key: '전용면적', value: GetValue('비준_MkEdit_전용면적') },

        { key: '소재지', value: GetValue('비준_MkEdit_소재지_사례') },

        { key: '최고금액', value: GetValue('비준_MkEdit_최고금액') },

        { key: '최저금액', value: GetValue('비준_MkEdit_최저금액') },

        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명') },

        { key: '시점_비교치', value: GetValue('비준_MkEdit_시점_비교') },

        { key: '시점_사례_일자', value: GetValue('비준_MkEdit_시점_사례_일자') },

        { key: '환산금액', value: GetValue('비준_MkEdit_환산금액') },

    ]);


    GetComponent('DBGrid_비준가격').SetCurSel(GetNumber('감정가_비준_RowCount'));


    GetComponent('DBGrid_비준가격').SetEditFocus(GetNumber('감정가_비준_RowCount')-1, '사례번호');

}

function MC_001_초기화_Combo_보정표() {

    GetComponent('보정표_Combo_접한도로의폭').SetCurSel(0.0);


    GetComponent('보정표_Combo_전유부분의면적').SetCurSel(0.0);


    GetComponent('보정표_Combo_총층수중전유부분의위치').SetCurSel(0.0);


    GetComponent('보정표_Combo_건축물의경과년도').SetCurSel(0.0);


    GetComponent('보정표_Combo_점유자의권리형태').SetCurSel(0.0);


    SetValue('보정표_Edit_전유부분위치', "");

    SetValue('보정표_MkEdit_건축물의경과년도', 0);

    SetValue('보정표_MkEdit_건축물의경과년도_적용율', 1);

    SetValue('보정표_MkEdit_기준낙찰가율', 100);

    SetValue('보정표_MkEdit_당해지역낙찰가율', 100);

    SetValue('보정표_MkEdit_예상낙찰가', 0);

    SetValue('보정표_MkEdit_유사부동산낙찰가율', 100);

    SetValue('보정표_MkEdit_적용할낙찰가율', 100);

    SetValue('보정표_MkEdit_전유부분위치_등급', "");

    SetValue('보정표_MkEdit_전유부분의면적', 0);

    SetValue('보정표_MkEdit_전유부분의면적_적용율', 1);

    SetValue('보정표_MkEdit_점유자의권리형태_적용율', 1);

    SetValue('보정표_MkEdit_접한도로의폭_적용율', 1);

    SetValue('보정표_MkEdit_총층수중전유부분_적용율', 1);

    SetValue('보정표_MkEdit_최저입찰가', 0);

    SetValue('보정표_MkEdit_평가가격', 0);

}

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


    RunQuery('Q_00_상가의접근성', {}, 'GET');


    RunQuery('Q_00_상가의층별위치', {}, 'GET');


    RunQuery('Q_00_상권의발달정도', {}, 'GET');


    RunQuery('Q_00_인테리어비용', {}, 'GET');


    RunQuery('Q_00_연립다세대_전유부분의위치', {}, 'GET');


    RunQuery('Q_99_평가구분', {}, 'GET');


    GetComponent('Combo_보고서_평가구분').SetCurSel(0.0);

}

function MC_501_Combo_OnChange_접한도로의폭() {

    GetZoonData('Q_00_접한도로의폭').FindIndex('00_NUMBER', (row) => {

        if ((row['CD_CODE'] == GetValue('보정표_Combo_접한도로의폭'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_접한도로의폭').GetRow(GetValue('00_NUMBER'), [
        { key: '보정표_MkEdit_접한도로의폭_적용율', value: 'IDX_C' },
    ]);


    RunButton('Command_적용할낙찰가율');


    if (true) {
        return false;
    }



    GetZoonData('Q_00_접한도로의폭').GetRow(GetValue('00_NUMBER'), [
        { key: '01_TNUM', value: 'IDX' },
    ]);


    SetValue('보정표_MkEdit_접한도로의폭_적용율', '1.00');


    SetValue('보정표_MkEdit_접한도로의폭_적용율', GetValue('01_TNUM'));

}

function MC_501_Combo_OnChange_건축물의경과년도() {

    SetValue('보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'));


    GetZoonData('Q_00_건축물의경과년도').FindIndex('None', (row) => {

        if ((row['CD_CODE'] == GetValue('보정표_Combo_건축물의경과년도'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_건축물의경과년도').GetRow(GetValue('IDX_보정표_건축물의경과년도'), [
        { key: '보정표_MkEdit_건축물의경과년도_적용율', value: 'IDX' },
    ]);


    RunButton('Command_적용할낙찰가율');

}

function MC_202_DBGrid_경매사례_EVENT_구조() {

    GetComponent('DBGrid_경매사례').GetRow(-1, [
        { key: '감정가_경매_구조', value: '구조' },
    ]);


    GetZoonData('Q_00_구조').FindIndex('00_NUMBER', (row) => {

        if ((row['CD_CODE'] == GetValue('감정가_경매_구조'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_구조').GetRow(GetValue('00_NUMBER'), [
        { key: '01_TNUM', value: 'NUM_YEAR' },

    ]);


    GetComponent('DBGrid_경매사례').SetRow(-1, [
        { key: '내용년수', value: GetValue('01_TNUM') },
    ]);

}

function MC_101_감정에관한사항_계산_실거래가격() {


    if ( GetValue('MkEdit_입력표_전유면적') > 0) {
        SetValue('MkEdit_입력표_실거래가_단가_M2',
            Round(Round(GetNumber('MkEdit_입력표_실거래가_총액') / GetNumber('MkEdit_입력표_전유면적'),0) /1000, 0) * 1000 )
        SetValue('MkEdit_입력표_실거래가_단가_평',
            Round(Round(GetNumber('MkEdit_입력표_실거래가_총액') / GetNumber('MkEdit_입력표_전유면적_평'),0) /1000, 0) * 1000 )
    } else {
        SetValue('MkEdit_입력표_실거래가_단가_M2',  0)
        SetValue('MkEdit_입력표_실거래가_단가_평',  0)
    }

}

function MC_300_초기화__비준가격_항목_1() {

    GetComponent('비준_Combo_층별비교_본건').SetCurSel(-1.0);


    GetComponent('비준_Combo_층별비교_사례').SetCurSel(-1.0);


    SetValue('비준_MkEdit_경과년도_사례', 0);

    SetValue('비준_MkEdit_내용년수_사례', 0);

    SetValue('비준_MkEdit_산정단가', 0);

    SetValue('비준_MkEdit_소재지_본건', "");

    SetValue('비준_MkEdit_층별_사례', 0);

    SetValue('비준_MkEdit_소재지_사례', "");

    SetValue('비준_MkEdit_소재지_비교', 1);

    SetValue('비준_MkEdit_요인합계', 1);

    SetValue('비준_MkEdit_잔가율_본건', 0);

    SetValue('비준_MkEdit_잔가율_사례', 0);

    SetValue('비준_MkEdit_적용단가', 0);

    SetValue('비준_MkEdit_전용면적단가', 0);

    SetValue('비준_MkEdit_층별_본건', 0);

    SetValue('비준_MkEdit_층별_비교', 1);

    SetValue('비준_MkEdit_층별_사례', 0);

    SetValue('비준_Label_시점_본건_경과일', "");

    SetValue('비준_Label_시점_사례_경과일', "");

    SetValue('비준_MkEdit_시점_본건_일자', GetValue('MkEdit_감정일'));

    SetValue('비준_MkEdit_시점_본건_적용율', 1);

    SetValue('비준_MkEdit_시점_사례_일자', "");

    SetValue('비준_MkEdit_시점_사례_적용율', 1);

    SetValue('비준_MkEdit_시점_비교', 1);

    SetValue('비준_MkEdit_잔가율_비교', 0);

}

function MC_101_감정에관한사항_계산_기준시가() {


    if ( (GetValue('MkEdit_입력표_전유면적') > 0) && (GetValue('MkEdit_입력표_기준시가_총액') > 0)) {
        SetValue('MkEdit_입력표_기준시가_단가_M2',
            Round(Round(GetNumber('MkEdit_입력표_기준시가_총액') / GetNumber('MkEdit_입력표_전유면적'),0) /1000, 0) * 1000 )
        SetValue('MkEdit_입력표_기준시가_단가_평',
            Round(Round(GetNumber('MkEdit_입력표_기준시가_총액') / GetNumber('MkEdit_입력표_전유면적_평'),0) /1000, 0) * 1000 )
    } else {
        SetValue('MkEdit_입력표_기준시가_단가_M2',  0)
        SetValue('MkEdit_입력표_기준시가_단가_평',  0)
    }

}

function MC_201_가격사례_추가시_Grid() {

    SetValue('01_TNUM', 0);


    GetComponent('DBGrid_가격사례').FindIndex('01_TNUM', (row) => {

        if ((row['사례번호'] == GetValue('가격_MkEdit_사례번호'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_가격사례').SetCurSel(GetNumber('01_TNUM'));


    if (GetValue('01_TNUM') < 0) {
        MC_201_가격사례_추가시_Grid_Add();
    }


    if (GetValue('01_TNUM') >= 0) {
        MC_201_가격사례_추가시_Grid_Edit();
    }


    MC_200_초기화_가격사례_항목();

}

function MC_001_초기화_Combo_입력표() {

    GetComponent('Combo_입력표_가임대보증금적용지역').SetCurSel(-1.0);


    GetComponent('Combo_입력표_구조').SetCurSel(-1.0);

    //
    // GetComponent('Combo_입력표_내용연수').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입력표_도로조건').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입력표_위치').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입력표_접근조건').SetCurSel(None);


    GetComponent('Combo_입력표_지목').SetCurSel(-1.0);


    GetComponent('Combo_입력표_지붕').SetCurSel(-1.0);


    // GetComponent('Combo_입력표_총층수').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입력표_해당층').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입력표_바닥난방').SetCurSel(None);
    //
    //
    // GetComponent('Combo_입력표_용도').SetCurSel(None);


    GetComponent('Combo_입력표_업소구분').SetCurSel(0.0);

}

function MC_201_가격사례_추가시_Grid_Add() {

    GetComponent('DBGrid_가격사례').GetRowCount('감정가_가격_RowCount');


    EmptyArray('감정가_가격_사례번호_배열')


    GetComponent('DBGrid_가격사례').GetRows("", [
        { key: '감정가_가격_사례번호_배열', value: '사례번호' },
    ]
    );

    if (isEmpty(GetValue('감정가_가격_사례번호_배열'))) {

        SetArray('감정가_가격_사례번호_배열',0,0)

    }


    SetValue('감정가_가격_사례번호_MAX', Max('감정가_가격_사례번호_배열')+1);


    SetValue('감정가_가격_현재행',  GetValue('감정가_가격_사례번호_MAX'))


    GetComponent('DBGrid_가격사례').AddRow({
        '년도': GetValue('년도'),
        '일련번호': GetValue('감정순번')
    });


    GetComponent('DBGrid_가격사례').SetCurSel(GetNumber('감정가_가격_RowCount'));


    GetComponent('DBGrid_가격사례').SetEditFocus(GetNumber('감정가_가격_RowCount')-1, '소재지');


    GetComponent('DBGrid_가격사례').SetRow(GetValue('감정가_가격_RowCount'), [
        { key: '사례번호', value: GetValue('감정가_가격_현재행') },

        { key: '소재지', value: GetValue('가격_Edit_소재지') },

        { key: '본건과의거리', value: GetValue('가격_Combo_본건과거리') },

        { key: '세대수', value: GetValue('가격_MkEdit_세대수') },

        { key: '건축년도', value: GetValue('가격_MkEdit_건축년도') },

        { key: '경과년수', value: GetValue('가격_MkEdit_경과년도') },

        { key: '내용년수', value: GetValue('가격_MkEdit_내용년수') },

        { key: '지하층_선택여부', value: GetValue('가격_Edit_선택1') },

        { key: '지하층_전용면적', value: GetValue('가격_MkEdit_전용면적1') },

        { key: '지하층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격1') },

        { key: '지하층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격1') },

        { key: '지하층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격1') },

        { key: '지하층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가1') },

        { key: '지하층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금1') },

        { key: '지하층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율1') },

        { key: '기준층_선택여부', value: GetValue('가격_Edit_선택2') },

        { key: '기준층_전용면적', value: GetValue('가격_MkEdit_전용면적2') },

        { key: '기준층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격2') },

        { key: '기준층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격2') },

        { key: '기준층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격2') },

        { key: '기준층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가2') },

        { key: '기준층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금2') },

        { key: '기준층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율2') },

        { key: '최고층_선택여부', value: GetValue('가격_Group_선택3') },

        { key: '최고층_전용면적', value: GetValue('가격_MkEdit_전용면적3') },

        { key: '최고층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격3') },

        { key: '최고층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격3') },

        { key: '최고층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격3') },

        { key: '최고층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가3') },

        { key: '최고층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금3') },

        { key: '최고층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율3') },

        { key: '구조', value: GetValue('가격_Combo_구조') },

        { key: '지번', value: GetValue('가격_Edit_지번') },

    ]);

    if (true) {
        return false;
    }

        GetComponent('DBGrid_가격사례').AddRow({
            '년도': GetValue('년도'),
            '일련번호': GetValue('감정순번')
        });


    GetComponent('DBGrid_가격사례').GetRowCount('00_NUMBER');


    SetValue('00_NUMBER', GetValue('00_NUMBER')-1);


    GetComponent('DBGrid_가격사례').SetCurSel(GetNumber('00_NUMBER'));


    SetValue('01_TNUM', GetValue('00_NUMBER')+1);

    GetComponent('DBGrid_가격사례').SetRow(GetValue('00_NUMBER'), [
        { key: '사례번호', value: GetValue('01_TNUM') },

        { key: '소재지', value: GetValue('가격_Edit_소재지') },

        { key: '본건과의거리', value: GetValue('가격_Combo_본건과거리') },

        { key: '세대수', value: GetValue('가격_MkEdit_세대수') },

        { key: '건축년도', value: GetValue('가격_MkEdit_건축년도') },

        { key: '경과년수', value: GetValue('가격_MkEdit_경과년도') },

        { key: '내용년수', value: GetValue('가격_MkEdit_내용년수') },

        { key: '지하층_선택여부', value: GetValue('가격_Edit_선택1') },

        { key: '지하층_전용면적', value: GetValue('가격_MkEdit_전용면적1') },

        { key: '지하층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격1') },

        { key: '지하층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격1') },

        { key: '지하층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격1') },

        { key: '지하층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가1') },

        { key: '지하층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금1') },

        { key: '지하층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율1') },

        { key: '기준층_선택여부', value: GetValue('가격_Edit_선택2') },

        { key: '기준층_전용면적', value: GetValue('가격_MkEdit_전용면적2') },

        { key: '기준층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격2') },

        { key: '기준층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격2') },

        { key: '기준층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격2') },

        { key: '기준층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가2') },

        { key: '기준층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금2') },

        { key: '기준층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율2') },

        { key: '최고층_선택여부', value: GetValue('가격_Group_선택3') },

        { key: '최고층_전용면적', value: GetValue('가격_MkEdit_전용면적3') },

        { key: '최고층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격3') },

        { key: '최고층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격3') },

        { key: '최고층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격3') },

        { key: '최고층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가3') },

        { key: '최고층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금3') },

        { key: '최고층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율3') },

        { key: '구조', value: GetValue('가격_Combo_구조') },

    ]);


    GetComponent('DBGrid_가격사례').SetCurSelCol('사례번호');


    GetComponent('DBGrid_가격사례').SetEditFocus(GetNumber('00_NUMBER')-1, '사례번호');

}

function MC_201_가격사례_추가시_Grid_Edit() {

    GetComponent('DBGrid_가격사례').GetRowCount('00_NUMBER');


    SetValue('00_NUMBER', GetValue('01_TNUM'));

    GetComponent('DBGrid_가격사례').SetRow(GetValue('00_NUMBER'), [
        { key: '사례번호', value: GetValue('가격_MkEdit_사례번호') },

        { key: '소재지', value: GetValue('가격_Edit_소재지') },

        { key: '본건과의거리', value: GetValue('가격_Combo_본건과거리') },

        { key: '세대수', value: GetValue('가격_MkEdit_세대수') },

        { key: '건축년도', value: GetValue('가격_MkEdit_건축년도') },

        { key: '경과년수', value: GetValue('가격_MkEdit_경과년도') },

        { key: '내용년수', value: GetValue('가격_MkEdit_내용년수') },

        { key: '지하층_선택여부', value: GetValue('가격_Edit_선택1') },

        { key: '지하층_전용면적', value: GetValue('가격_MkEdit_전용면적1') },

        { key: '지하층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격1') },

        { key: '지하층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격1') },

        { key: '지하층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격1') },

        { key: '지하층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가1') },

        { key: '지하층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금1') },

        { key: '지하층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율1') },

        { key: '기준층_선택여부', value: GetValue('가격_Edit_선택2') },

        { key: '기준층_전용면적', value: GetValue('가격_MkEdit_전용면적2') },

        { key: '기준층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격2') },

        { key: '기준층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격2') },

        { key: '기준층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격2') },

        { key: '기준층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가2') },

        { key: '기준층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금2') },

        { key: '기준층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율2') },

        { key: '최고층_선택여부', value: GetValue('가격_Group_선택3') },

        { key: '최고층_전용면적', value: GetValue('가격_MkEdit_전용면적3') },

        { key: '최고층_시세조사_최저가', value: GetValue('가격_MkEdit_최저가격3') },

        { key: '최고층_시세조사_최고가', value: GetValue('가격_MkEdit_최고가격3') },

        { key: '최고층_시세조사_평균가격', value: GetValue('가격_MkEdit_평균가격3') },

        { key: '최고층_시세조사_전용면적단가', value: GetValue('가격_MkEdit_전용면적단가3') },

        { key: '최고층_전세수준_전세가', value: GetValue('가격_MkEdit_전세_전세금3') },

        { key: '최고층_전세수준_비율', value: GetValue('가격_MkEdit_전세_비율3') },

        { key: '구조', value: GetValue('가격_Combo_구조') },

        { key: '지번', value: GetValue('가격_Edit_지번') },

    ]);


    GetComponent('DBGrid_가격사례').SetCurSel(GetNumber('00_NUMBER'));


    GetComponent('DBGrid_가격사례').SetEditFocus(GetNumber('00_NUMBER')-1, '사례번호');

}

function MC_301_Combo_사례번호_자료생성_2() {

    SetValue('감정가_비준_사례번호_생성',  GetValue('감정가_비준_사례번호_생성')
        + NumToStr(GetArray('감정가_비준_사례번호_생성전',GetValue('i'))) + ';' )
    if ( GetValue('비준_Combo_사례구분') == "1") {
        SetValue('감정가_비준_사례번호_생성문자',  GetValue('감정가_비준_사례번호_생성문자')
            + NumToStr(GetArray('감정가_비준_사례번호_생성전',GetValue('i'))) + ';' )
    } else {
        SetValue('감정가_비준_사례번호_생성문자',  GetValue('감정가_비준_사례번호_생성문자')
            + GetArray('감정가_비준_사례번호_생성문자전',GetValue('i')) + ';' )
    }

}

function MC_301_Combo_사례번호_자료생성_1() {

    SetValue('감정가_비준_사례번호_생성', "");


    SetValue('감정가_비준_사례번호_생성문자', "");


    for (SetValue('i', 0); GetValue('i') <= GetNumber('감정가_비준_사례번호_CNT'); SetValue('i', GetValue('i') + 1)) {
        MC_301_Combo_사례번호_자료생성_2();
    }

}

function MC_302_비준가격_Change_0_본건() {

    SetValue('비준_MkEdit_소재지_본건',  GetValue('Edit_입력표_소재지1')+" "+GetValue('Edit_입력표_지번'))
    SetValue('비준_MkEdit_잔가율_본건',  GetValue('MkEdit_입력표_잔가율'))

    if (GetValue('본건_Edit_선택1') == 'Y') {

        GetComponent('비준_Combo_층별비교_본건').SetCurSel(0.0);


        GetComponent('비준_Combo_층별비교_본건').GetWindowText('00_TEMP');


        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {

            if ((row['CD_DESC'] == GetValue('00_TEMP'))) {
                return true;
            }

            return false;
        });


        GetZoonData('Q_00_층별비교').GetRow(GetValue('01_TNUM'), [
            { key: '비준_MkEdit_층별_본건', value: 'IDX' },
        ]);

    }

    if (GetValue('본건_Edit_선택2') == 'Y') {

        GetComponent('비준_Combo_층별비교_본건').SetCurSel(1.0);


        GetComponent('비준_Combo_층별비교_본건').GetWindowText('00_TEMP');


        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {

            if ((row['CD_DESC'] == GetValue('00_TEMP'))) {
                return true;
            }

            return false;
        });


        GetZoonData('Q_00_층별비교').GetRow(GetValue('01_TNUM'), [
            { key: '비준_MkEdit_층별_본건', value: 'IDX' },
        ]);

    }

    if (GetValue('본건_Edit_선택3') == 'Y') {

        GetComponent('비준_Combo_층별비교_본건').SetCurSel(2.0);


        GetComponent('비준_Combo_층별비교_본건').GetWindowText('00_TEMP');


        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {

            if ((row['CD_DESC'] == GetValue('00_TEMP'))) {
                return true;
            }

            return false;
        });


        GetZoonData('Q_00_층별비교').GetRow(GetValue('01_TNUM'), [
            { key: '비준_MkEdit_층별_본건', value: 'IDX' },
        ]);

    }


    if (GetValue('비준_Combo_사례구분') == 1) {
        MC_302_비준가격_Change_0_사례_가격();
    }


    if (GetValue('비준_Combo_사례구분') == 2) {
        MC_302_비준가격_Change_0_사례_경매();
    }


    SetValue('02_잔가율구분', '비준_사례');


    MC_003_계산_잔가율();


    MC_302_비준가격_Change_1_비교_계산();

}

function MC_401_평가액_최고최저_계산_1() {


    if ( GetArray('감정가_평가_사례구분_배열',GetValue('i')) == "1") {
        AddArray('감정가_평가_임시배열11', GetArray('감정가_평가_가격_최저',GetValue('i')))
        AddArray('감정가_평가_임시배열12', GetArray('감정가_평가_가격_최고',GetValue('i')))
        AddArray('감정가_평가_임시배열13', GetArray('감정가_평가_적용단가_배열',GetValue('i')))
    } else if ( GetArray('감정가_평가_사례구분_배열',GetValue('i')) == "2") {
        AddArray('감정가_평가_임시배열21', GetArray('감정가_평가_가격_최저',GetValue('i')))
        AddArray('감정가_평가_임시배열22', GetArray('감정가_평가_가격_최고',GetValue('i')))
        AddArray('감정가_평가_임시배열23', GetArray('감정가_평가_적용단가_배열',GetValue('i')))
    }

}

function MC_302_비준가격_Change_0_사례_가격() {

    GetComponent('DBGrid_가격사례').FindIndex('감정가_비준_가격사례_IDX', (row) => {

        if ((row['사례번호'] == GetValue('비준_Combo_사례번호'))) {
            return true;
        }

        return false;
    });

    GetComponent('DBGrid_가격사례').GetRow(GetNumber('감정가_비준_가격사례_IDX'), [
        { key: '비준_MkEdit_소재지_사례', value: '소재지' },

        { key: '감정가_비준_선택1', value: '지하층_선택여부' },

        { key: '감정가_비준_선택2', value: '기준층_선택여부' },

        { key: '감정가_비준_선택3', value: '최고층_선택여부' },

        { key: '감정가_비준_경과년수', value: '경과년수' },

        { key: '감정가_비준_내용년수', value: '내용년수' },

        { key: '감정가_비준_전용면적단가1', value: '지하층_시세조사_전용면적단가' },

        { key: '감정가_비준_전용면적단가2', value: '기준층_시세조사_전용면적단가' },

        { key: '감정가_비준_전용면적단가3', value: '최고층_시세조사_전용면적단가' },

        { key: '감정가_비준_전용면적1', value: '지하층_전용면적' },

        { key: '감정가_비준_전용면적2', value: '기준층_전용면적' },

        { key: '감정가_비준_전용면적3', value: '최고층_전용면적' },

        { key: '감정가_비준_최저금액1', value: '지하층_시세조사_최저가' },

        { key: '감정가_비준_최저금액2', value: '기준층_시세조사_최저가' },

        { key: '감정가_비준_최저금액3', value: '최고층_시세조사_최저가' },

        { key: '감정가_비준_최고금액1', value: '지하층_시세조사_최고가' },

        { key: '감정가_비준_최고금액2', value: '기준층_시세조사_최고가' },

        { key: '감정가_비준_최고금액3', value: '최고층_시세조사_최고가' },

    ]);

    if (GetValue('감정가_비준_선택1') =="Y") {
        SetValue('비준_MkEdit_전용면적단가', GetValue('감정가_비준_전용면적단가1'));
    } else if (GetValue('감정가_비준_선택2') == "Y") {
        SetValue('비준_MkEdit_전용면적단가', GetValue('감정가_비준_전용면적단가2'));
    } else if (GetValue('감정가_비준_선택3') == "Y") {
        SetValue('비준_MkEdit_전용면적단가', GetValue('감정가_비준_전용면적단가3'));
    } else {
        SetValue('비준_MkEdit_전용면적단가', 0);
    }

    if (GetValue('감정가_비준_선택1') =="Y") {
        SetValue('비준_MkEdit_전용면적', GetValue('감정가_비준_전용면적1'));
    } else if (GetValue('감정가_비준_선택2') == "Y") {
        SetValue('비준_MkEdit_전용면적', GetValue('감정가_비준_전용면적2'));
    } else if (GetValue('감정가_비준_선택3') == "Y") {
        SetValue('비준_MkEdit_전용면적', GetValue('감정가_비준_전용면적3'));
    } else {
        SetValue('비준_MkEdit_전용면적', 0);
    }

    if (GetValue('감정가_비준_선택1') =="Y") {
        SetValue('비준_MkEdit_최저금액', GetValue('감정가_비준_최저금액1'));
    } else if (GetValue('감정가_비준_선택2') == "Y") {
        SetValue('비준_MkEdit_최저금액', GetValue('감정가_비준_최저금액2'));
    } else if (GetValue('감정가_비준_선택3') == "Y") {
        SetValue('비준_MkEdit_최저금액', GetValue('감정가_비준_최저금액3'));
    } else {
        SetValue('비준_MkEdit_최저금액', 0);
    }

    if (GetValue('감정가_비준_선택1') =="Y") {
        SetValue('비준_MkEdit_최고금액', GetValue('감정가_비준_최고금액1'));
    } else if (GetValue('감정가_비준_선택2') == "Y") {
        SetValue('비준_MkEdit_최고금액', GetValue('감정가_비준_최고금액2'));
    } else if (GetValue('감정가_비준_선택3') == "Y") {
        SetValue('비준_MkEdit_최고금액', GetValue('감정가_비준_최고금액3'));
    } else {
        SetValue('비준_MkEdit_최고금액', 0);
    }


    if (GetValue('감정가_비준_선택1') == 'Y') {

        GetComponent('비준_Combo_층별비교_사례').SetCurSel(0.0);


        GetComponent('비준_Combo_층별비교_사례').GetWindowText('00_TEMP');


        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {

            if ((row['CD_DESC'] == GetValue('00_TEMP'))) {
                return true;
            }

            return false;
        });


        GetZoonData('Q_00_층별비교').GetRow(GetValue('01_TNUM'), [
            { key: '비준_MkEdit_층별_사례', value: 'IDX' },
        ]);

    }

    if (GetValue('감정가_비준_선택2') == 'Y') {

        GetComponent('비준_Combo_층별비교_사례').SetCurSel(1.0);


        GetComponent('비준_Combo_층별비교_사례').GetWindowText('00_TEMP');


        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {

            if ((row['CD_DESC'] == GetValue('00_TEMP'))) {
                return true;
            }

            return false;
        });


        GetZoonData('Q_00_층별비교').GetRow(GetValue('01_TNUM'), [
            { key: '비준_MkEdit_층별_사례', value: 'IDX' },
        ]);

    }

    if (GetValue('감정가_비준_선택3') == 'Y') {

        GetComponent('비준_Combo_층별비교_사례').SetCurSel(2.0);


        GetComponent('비준_Combo_층별비교_사례').GetWindowText('00_TEMP');


        GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {

            if ((row['CD_DESC'] == GetValue('00_TEMP'))) {
                return true;
            }

            return false;
        });


        GetZoonData('Q_00_층별비교').GetRow(GetValue('01_TNUM'), [
            { key: '비준_MkEdit_층별_사례', value: 'IDX' },
        ]);

    }

}

function MC_302_비준가격_Change_0_사례_경매() {

    GetComponent('DBGrid_경매사례').FindIndex('감정가_비준_경매사례_IDX', (row) => {

        if ((row['사례번호'] == GetValue('비준_Combo_사례번호'))) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_경매사례').GetRow(GetNumber('감정가_비준_경매사례_IDX'), [
        { key: '비준_MkEdit_소재지_사례', value: '소재지' },

        { key: '비준_MkEdit_전용면적단가', value: '전용면적단가' },

        { key: '감정가_비준_경과년수', value: '경과년도' },

        { key: '감정가_비준_내용년수', value: '내용년수' },

        { key: '비준_MkEdit_전용면적', value: '전용면적' },

        { key: '비준_MkEdit_최저금액', value: '전용면적단가' },

        { key: '비준_MkEdit_최고금액', value: '전용면적단가' },

        { key: '감정가_비준_비준율', value: '층수_비준율' },

    ]);


    GetZoonData('Q_00_층별비교').FindIndex('01_TNUM', (row) => {

        if ((row['IDX'] == GetValue('감정가_비준_비준율'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_층별비교').GetRow(GetValue('01_TNUM'), [
        { key: '비준_MkEdit_층별_사례', value: 'IDX' },

        { key: '비준_Combo_층별비교_사례', value: 'CD_CODE' },

    ]);

}

function MC_302_비준가격_Change_1_비교_계산() {


    if ( (GetValue('비준_MkEdit_시점_본건_적용율') == 0) || (GetValue('비준_MkEdit_시점_사례_적용율') == 0)) {
        SetValue('비준_MkEdit_시점_비교',  1)
    } else {
        SetValue('비준_MkEdit_시점_비교',  GetValue('비준_MkEdit_시점_사례_적용율'))
    }

    if ( (GetValue('비준_MkEdit_층별_본건') == 0) || (GetValue('비준_MkEdit_층별_사례') == 0)) {
        SetValue('비준_MkEdit_층별_비교',  1)
    } else {
        SetValue('비준_MkEdit_층별_비교',  Round(GetNumber('비준_MkEdit_층별_본건') / GetNumber('비준_MkEdit_층별_사례') , 2))
    }

    if ( (GetValue('비준_MkEdit_잔가율_본건') == 0) || (GetValue('비준_MkEdit_잔가율_사례') == 0)) {
        SetValue('비준_MkEdit_잔가율_비교',  1)
    } else {
        if ( GetValue('비준_MkEdit_잔가율_비교') == 0) {
            SetValue('비준_MkEdit_잔가율_비교',  Round(GetNumber('비준_MkEdit_잔가율_본건') / GetNumber('비준_MkEdit_잔가율_사례') , 2))
        }
    }

    SetValue('비준_MkEdit_요인합계',  GetNumber('비준_MkEdit_소재지_비교') * GetNumber('비준_MkEdit_시점_비교')
        *GetNumber('비준_MkEdit_층별_비교') * GetNumber('비준_MkEdit_잔가율_비교'))

    SetValue('비준_MkEdit_산정단가',  Round(GetNumber('비준_MkEdit_요인합계') * GetNumber('비준_MkEdit_전용면적단가'), 0) )
    SetValue('비준_MkEdit_적용단가',  Round(GetValue('비준_MkEdit_산정단가')/1000, 0) * 1000 )
    SetValue('비준_MkEdit_환산금액',  Round(GetNumber('비준_MkEdit_적용단가') * GetNumber('MkEdit_입력표_전유면적'), 0))

}

function MC_402_평가액_평가액산정() {

    SetValue('평가_MkEdit_인테리어_금액', Round((GetNumber('평가_MkEdit_인테리어_단가') * GetNumber('평가_MkEdit_인테리어_면적_평'))/1000, 0)*1000);


    SetValue('평가_MkEdit_평가가격', Round((GetNumber('평가_MkEdit_결정가격') + GetNumber('평가_MkEdit_인테리어_금액'))/1000, 0)*1000);


    SetValue('평가_MkEdit_평가가격_단가', Round((GetNumber('평가_MkEdit_평가가격') / GetNumber('MkEdit_입력표_전유면적'))/1000, 0)*1000);


    SetValue('평가_MkEdit_담보_평가가격', GetValue('평가_MkEdit_평가가격'));


    SetValue('평가_MkEdit_담보_최종평가가격', Round(GetValue('평가_MkEdit_평가가격')*(GetValue('평가_MkEdit_담보_비율')/100), 0));


    SetValue('보정표_MkEdit_평가가격', GetValue('평가_MkEdit_평가가격'));


    SetValue('보정표_MkEdit_최저입찰가', GetValue('평가_MkEdit_담보_최종평가가격'));


    RunButton('Command_적용할낙찰가율');

}

function MC_400_초기화_평가액() {

    SetValue('평가_MkEdit_가격_비율', 0);

    SetValue('평가_MkEdit_가격_최고', 0);

    SetValue('평가_MkEdit_가격_최고_단가', 0);

    SetValue('평가_MkEdit_가격_최저', 0);

    SetValue('평가_MkEdit_가격_최저_단가', 0);

    SetValue('평가_MkEdit_결정가격', 0);

    SetValue('평가_MkEdit_결정가격_단가', 0);

    SetValue('평가_MkEdit_경매_비율', 0);

    SetValue('평가_MkEdit_경매_최고', 0);

    SetValue('평가_MkEdit_경매_최고_단가', 0);

    SetValue('평가_MkEdit_경매_최저', 0);

    SetValue('평가_MkEdit_경매_최저_단가', 0);

    SetValue('평가_MkEdit_담보_등기전용면적', 0);

    SetValue('평가_MkEdit_담보_분모', 0);

    SetValue('평가_MkEdit_담보_분자', 0);

    SetValue('평가_MkEdit_담보_비율', 0);

    SetValue('평가_MkEdit_담보_제공면적', 0);

    SetValue('평가_MkEdit_담보_최종평가가격', 0);

    SetValue('평가_MkEdit_담보_평가가격', 0);

    SetValue('평가_MkEdit_본건_비율', 0);

    SetValue('평가_MkEdit_본건_최고', 0);

    SetValue('평가_MkEdit_본건_최고_단가', 0);

    SetValue('평가_MkEdit_본건_최저', 0);

    SetValue('평가_MkEdit_본건_최저_단가', 0);

    SetValue('평가_MkEdit_인테리어_금액', 0);

    SetValue('평가_MkEdit_인테리어_단가', 0);

    SetValue('평가_MkEdit_인테리어_면적_평', 0);

    SetValue('평가_MkEdit_인테리어_면적_M2', 0);

    SetValue('평가_MkEdit_평가가격', 0);

    SetValue('평가_MkEdit_평가가격_단가', 0);


    GetComponent('평가_Combo_인테리어단가').SetCurSel(-1.0);

}

function MC_401_평가액_최고최저_계산_20_초기화() {

    SetValue('감정가_평가_LoopCnt', GetArrayCnt('감정가_평가_임시배열11'));


    for (SetValue('i', 0); GetValue('i') < GetNumber('감정가_평가_LoopCnt'); SetValue('i', GetValue('i') + 1)) {
        MC_401_평가액_최고최저_계산_21_초기화();
    }


    SetValue('감정가_평가_LoopCnt', GetArrayCnt('감정가_평가_임시배열21'));


    for (SetValue('i', 0); GetValue('i') < GetNumber('감정가_평가_LoopCnt'); SetValue('i', GetValue('i') + 1)) {
        MC_401_평가액_최고최저_계산_22_초기화();
    }

}

function MC_002_초기화_Query_Loading() {

    RunQuery('Q_10_입력표_담보마스타', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_11_입력표_집합건물', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_12_입력표_규제의표시', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_20_입력표_낙찰가율보정표', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_00_본건사례', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_02_경매사례', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_01_가격사례', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_03_비준가격', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_03_비준가격_집계표', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_감정가_09_감정평가', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

    if (GetValue('Combo_입력표_업소구분') == "0") {

        GetComponent('Edit_입력표_업소명').SetReadOnly(1.0);




        SetValue('Edit_입력표_업소명', '자체');


        GetComponent('Edit_입력표_업소대표자').SetReadOnly(1.0);




        SetValue('Edit_입력표_업소대표자', GetValue('Edit_입력표_대표자'));


        SetFocus('Edit_입력표_채무자');

    }

    if (GetValue('Combo_입력표_업소구분') == "1") {

        GetComponent('Edit_입력표_업소명').SetReadOnly(0.0);




        GetComponent('Edit_입력표_업소대표자').SetReadOnly(0.0);




        SetValue('Edit_입력표_업소명', "");


        SetValue('Edit_입력표_업소대표자', "");


        SetFocus('Edit_입력표_업소명');

    }

    if (!isEmpty(GetValue('Combo_입력표_업소구분'))) {

        GetComponent('Edit_입력표_업소명').SetReadOnly(0.0);




        GetComponent('Edit_입력표_업소대표자').SetReadOnly(0.0);




        GetComponent('Combo_입력표_업소구분').SetCurSel(0.0);


        SetValue('Edit_입력표_업소명', "");


        SetValue('Edit_입력표_업소대표자', "");


        SetFocus('Edit_입력표_업소명');

    }

    if (isNotEmpty(GetValue('감정순번'))) {

        GetZoonData('Q_10_입력표_담보마스타').GetRow(0, [
            { key: 'Edit_입력표_거래처코드', value: '거래처코드' },

            { key: 'Edit_입력표_거래처', value: '거래처명' },

            { key: 'Edit_입력표_대표자', value: '거래처대표자' },

            { key: 'Edit_입력표_업소명', value: '업소명' },

            { key: 'Edit_입력표_업소대표자', value: '업소대표자' },

            { key: 'Edit_입력표_채무자', value: '채무자' },

            { key: 'Edit_입력표_채무자와담보제공자의관계', value: '채무자와담보제공자와의관계' },

            { key: 'Edit_입력표_담보제공자', value: '담보제공자' },

            { key: 'MkEdit_감정일', value: '담보감정일자' },

            { key: 'Combo_입력표_업소구분', value: '업소구분' },

            { key: 'Edit_감정자', value: '지점_감정자명' },

            { key: 'Edit_감정자사번', value: '지점_감정자' },

            { key: 'Edit_Doc_Key', value: 'DOC_KEY' },

            { key: 'Edit_Doc_Name', value: 'DOC_NAME' },

            { key: 'Combo_보고서_평가구분', value: '평가구분' },

            { key: '02_배당표수정여부', value: 'SHARE_YN' },

        ]);


        GetZoonData('Q_11_입력표_집합건물').GetRow(0, [
            { key: 'Edit_입력표_소재지1', value: '부동산표시_주소1' },

            { key: 'Edit_입력표_소재지2', value: '부동산표시_주소2' },

            { key: 'Edit_입력표_지번', value: '지번' },

            { key: 'Edit_입력표_집합건물의명칭', value: '집합건물의명칭' },

            { key: 'Edit_입력표_동수', value: '동수' },

            { key: 'Edit_입력표_호수', value: '호수' },

            { key: 'MkEdit_입력표_토지권의목적인', value: '대지권의목적' },

            { key: 'Edit_입력표_대지권소유권여부', value: '대지권소유권보유여부' },

            { key: 'Edit_입력표_대지권소유권', value: '대지권소유권' },

            { key: 'Combo_입력표_지목', value: '지목' },

            { key: 'Combo_입력표_가임대보증금적용지역', value: '가임대보증금적용지역' },

            { key: 'Combo_입력표_구조', value: '집합건물_구조' },

            { key: 'Combo_입력표_지붕', value: '집합건물_지붕' },

            { key: 'Edit_입력표_지상', value: '집합건물_지상' },

            { key: 'Edit_입력표_지하', value: '집합건물_지하' },

            { key: 'Edit_입력표_해당층', value: '집합건물_해당층' },

            { key: 'MkEdit_입력표_건축일자', value: '집합건물_건축년도' },

            { key: 'MkEdit_입력표_건축년도_경과', value: '집합건물_경과년도' },

            { key: 'MkEdit_입력표_내용연수', value: '집합건물_내용년수' },

            { key: 'MkEdit_입력표_전유면적', value: '집합건물_전유면적_M2' },

            { key: 'MkEdit_입력표_전유면적_평', value: '집합건물_전유면적_평' },

            { key: 'MkEdit_입력표_공유면적', value: '집합건물_공유면적_M2' },

            { key: 'MkEdit_입력표_공유면적_평', value: '집합건물_공유면적_평' },

            { key: 'MkEdit_입력표_면적합계', value: '집합건물_면적합계_M2' },

            { key: 'MkEdit_입력표_면적합계_평', value: '집합건물_면적합계_평' },

            { key: 'MkEdit_입력표_잔가율', value: '오피스텔_상가_잔가율' },

            { key: 'MkEdit_입력표_실거래가_총액', value: '실거래가격_총액' },

            { key: 'MkEdit_입력표_실거래가_단가_M2', value: '실거래가격_단가_M2' },

            { key: 'MkEdit_입력표_실거래가_단가_평', value: '실거래가격_단가_평' },

            { key: 'MkEdit_입력표_기준시가_총액', value: '기준시가_총액' },

            { key: 'MkEdit_입력표_기준시가_단가_M2', value: '기준시가_단가_M2' },

            { key: 'MkEdit_입력표_기준시가_단가_평', value: '기준시가_단가_평' },

            { key: 'MkEdit_입력표_담보제공_전용면적', value: '담보제공비율_등기부상전용면적' },

            { key: 'MkEdit_입력표_담보제공_분자', value: '담보제공비율_분자' },

            { key: 'MkEdit_입력표_담보제공_분모', value: '담보제공비율_분모' },

            { key: 'MkEdit_입력표_담보제공_비율', value: '담보제공비율_비율' },

            { key: 'MkEdit_입력표_담보제공_제공면적', value: '담보제공비율_담보제공면적' },

            { key: 'MkEdit_입력표_담보제공_사유', value: '담보제공비율_사유' },

            { key: '본건_MkEdit_세대수', value: '집합건물_세대수' },

            { key: '본건_MkEdit_경과년수', value: '집합건물_경과년도' },

            { key: '본건_MkEdit_내용연수', value: '집합건물_내용년수' },

            { key: '00_TEMP', value: '집합건물_건축년도' },

            { key: '보정표_MkEdit_전유부분의면적', value: '집합건물_전유면적_M2' },

            { key: 'Combo_배당표_가임대보증금적용대상', value: '가임대보증금적용지역' },

        ]);


        GetZoonData('Q_12_입력표_규제의표시').GetRow(0, [
            { key: 'Edit_입력표_국토의계획', value: '국토계획' },

            { key: 'Edit_입력표_다른법률등', value: '다른법률' },

            { key: 'Edit_입력표_시행령부칙', value: '시행령부칙' },

            { key: 'Edit_입력표_토지이용규제', value: '토지이용규제' },

        ]);


        GetZoonData('Q_20_입력표_낙찰가율보정표').GetRow(0, [
            { key: '보정표_Combo_건축물의경과년도', value: '다세대연립_경과년도' },

            { key: '보정표_Combo_전유부분의면적', value: '다세대연립_면적' },

            { key: '보정표_Combo_점유자의권리형태', value: '점유자의권리형태' },

            { key: '보정표_Combo_접한도로의폭', value: '다세대연립_폭' },

            { key: '보정표_Combo_총층수중전유부분의위치', value: '다세대연립_위치' },

            { key: '보정표_MkEdit_건축물의경과년도_적용율', value: '다세대연립_경과년도_적용률' },

            { key: '보정표_MkEdit_기준낙찰가율', value: '기준낙찰가율' },

            { key: '보정표_MkEdit_당해지역낙찰가율', value: '당해지역낙찰가율' },

            { key: '보정표_MkEdit_예상낙찰가', value: '예상낙찰가' },

            { key: '보정표_MkEdit_유사부동산낙찰가율', value: '유사부동산낙찰가율' },

            { key: '보정표_MkEdit_적용할낙찰가율', value: '적용할낙찰가율' },

            { key: '보정표_MkEdit_전유부분의면적_적용율', value: '다세대연립_면적_적용률' },

            { key: '보정표_MkEdit_점유자의권리형태_적용율', value: '점유자의권리형태_적용률' },

            { key: '보정표_MkEdit_접한도로의폭_적용율', value: '다세대연립_폭_적용률' },

            { key: '보정표_MkEdit_총층수중전유부분_적용율', value: '다세대연립_위치_적용률' },

            { key: '보정표_MkEdit_최저입찰가', value: '제1차예상최저입찰가' },

            { key: '보정표_MkEdit_평가가격', value: '평가가격' },

        ]);


        GetZoonData('Q_11_입력표_집합건물').GetRow(0, [
            { key: '평가_MkEdit_담보_등기전용면적', value: '담보제공비율_등기부상전용면적' },

            { key: '평가_MkEdit_담보_분자', value: '담보제공비율_분자' },

            { key: '평가_MkEdit_담보_분모', value: '담보제공비율_분모' },

            { key: '평가_MkEdit_담보_비율', value: '담보제공비율_비율' },

            { key: '평가_MkEdit_담보_제공면적', value: '담보제공비율_담보제공면적' },

            { key: '보정표_MkEdit_건축물의경과년도', value: '집합건물_경과년도' },

        ]);

        GetZoonData('Q_감정가_00_본건사례').GetRow(0, [
            { key: '본건_Edit_선택1', value: '지하층_선택여부' },

            { key: '본건_Group_선택1', value: '지하층_선택여부' },

            { key: '본건_MkEdit_전용면적1', value: '지하층_전용면적' },

            { key: '본건_MkEdit_최저가격1', value: '지하층_시세조사_최저가' },

            { key: '본건_MkEdit_최고가격1', value: '지하층_시세조사_최고가' },

            { key: '본건_MkEdit_평균가격1', value: '지하층_시세조사_평균가격' },

            { key: '본건_MkEdit_전용면적단가1', value: '지하층_시세조사_전용면적단가' },

            { key: '본건_MkEdit_전세금1', value: '지하층_전세수준_전세가' },

            { key: '본건_MkEdit_전세_비율1', value: '지하층_전세수준_비율' },

            { key: '본건_Edit_선택2', value: '기준층_선택여부' },

            { key: '본건_Group_선택2', value: '기준층_선택여부' },

            { key: '본건_MkEdit_전용면적2', value: '기준층_전용면적' },

            { key: '본건_MkEdit_최저가격2', value: '기준층_시세조사_최저가' },

            { key: '본건_MkEdit_최고가격2', value: '기준층_시세조사_최고가' },

            { key: '본건_MkEdit_평균가격2', value: '기준층_시세조사_평균가격' },

            { key: '본건_MkEdit_전용면적단가2', value: '기준층_시세조사_전용면적단가' },

            { key: '본건_MkEdit_전세금2', value: '기준층_전세수준_전세가' },

            { key: '본건_MkEdit_전세_비율2', value: '기준층_전세수준_비율' },

            { key: '본건_Edit_선택3', value: '최고층_선택여부' },

            { key: '본건_Group_선택3', value: '최고층_선택여부' },

            { key: '본건_MkEdit_전용면적3', value: '최고층_전용면적' },

            { key: '본건_MkEdit_최저가격3', value: '최고층_시세조사_최저가' },

            { key: '본건_MkEdit_최고가격3', value: '최고층_시세조사_최고가' },

            { key: '본건_MkEdit_평균가격3', value: '최고층_시세조사_평균가격' },

            { key: '본건_MkEdit_전용면적단가3', value: '최고층_시세조사_전용면적단가' },

            { key: '본건_MkEdit_전세금3', value: '최고층_전세수준_전세가' },

            { key: '본건_MkEdit_전세_비율3', value: '최고층_전세수준_비율' },

        ]);

        GetZoonData('Q_감정가_09_감정평가').GetRow(0, [
            { key: '평가_MkEdit_본건_최저', value: '본건_최저가격' },

            { key: '평가_MkEdit_본건_최저_단가', value: '본건_최저가격_단가' },

            { key: '평가_MkEdit_본건_최고', value: '본건_최고가격' },

            { key: '평가_MkEdit_본건_최고_단가', value: '본건_최고가격_단가' },

            { key: '평가_MkEdit_본건_비율', value: '본건_비율' },

            { key: '평가_MkEdit_가격_최저', value: '가격_최저가격' },

            { key: '평가_MkEdit_가격_최저_단가', value: '가격_최저가격_단가' },

            { key: '평가_MkEdit_가격_최고', value: '가격_최고가격' },

            { key: '평가_MkEdit_가격_최고_단가', value: '가격_최고가격_단가' },

            { key: '평가_MkEdit_가격_비율', value: '가격_비율' },

            { key: '평가_MkEdit_경매_최저', value: '경매_최저가격' },

            { key: '평가_MkEdit_경매_최저_단가', value: '경매_최저가격_단가' },

            { key: '평가_MkEdit_경매_최고', value: '경매_최고가격' },

            { key: '평가_MkEdit_경매_최고_단가', value: '경매_최고가격_단가' },

            { key: '평가_MkEdit_경매_비율', value: '경매_비율' },

            { key: '평가_MkEdit_결정가격', value: '결정가격' },

            { key: '평가_MkEdit_결정가격_단가', value: '결정가격_단가' },

            { key: '평가_MkEdit_인테리어_면적_평', value: '인테리어_면적_평' },

            { key: '평가_MkEdit_인테리어_면적_M2', value: '인테리어_면적' },

            { key: '평가_MkEdit_인테리어_단가', value: '인테리어_단가' },

            { key: '평가_MkEdit_인테리어_금액', value: '인테리어_금액' },

            { key: '평가_MkEdit_평가가격', value: '평가가격' },

            { key: '평가_MkEdit_평가가격_단가', value: '평가가격_단가' },

            { key: '평가_MkEdit_담보_평가가격', value: '평가가격' },

            { key: '평가_MkEdit_담보_최종평가가격', value: '최종평가가격' },

            { key: '평가_Combo_인테리어단가', value: '인테리어_단가_코드' },

        ]);

    }



    if ( GetValue('_권한') == "I") {
        SetValue('Edit_감정자사번', GetValue('_사원번호'))
        SetValue('Edit_감정자', GetValue('_부서명')+" "+GetValue('_직위')+" "+GetValue('_사원명'))
    }



    if ( (Trim(GetValue('MkEdit_감정일')) == "")) {
        SetValue('MkEdit_감정일',  Now())
    }


    SetValue('본건_MkEdit_건축년도', Left(GetValue('00_TEMP'),4));


    MC_102_전유부분의위치찾기();


    RunQuery('Q_문서관리_사진', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_문서관리_관련문서', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_공통보고서_트리', {}, 'GET');

}

function MC_401_평가액_최고최저_계산_21_초기화() {

    RemoveArray('감정가_평가_임시배열11',GetValue('i'))
    RemoveArray('감정가_평가_임시배열12',GetValue('i'))
    RemoveArray('감정가_평가_임시배열13',GetValue('i'))

}

function MC_401_평가액_최고최저_계산_22_초기화() {

    RemoveArray('감정가_평가_임시배열21',GetValue('i'))
    RemoveArray('감정가_평가_임시배열22',GetValue('i'))
    RemoveArray('감정가_평가_임시배열23',GetValue('i'))

}

function MC_303_비준가격_추가시_Grid() {

    SetValue('감정가_비준_현재행', 0);


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
        '년도': GetValue('년도'),
        '일련번호': GetValue('감정순번'),
    });


    GetComponent('DBGrid_비준가격').GetRowCount('감정가_비준_RowCount');


    SetValue('감정가_비준_RowCount', GetValue('감정가_비준_RowCount')-1);


    GetComponent('DBGrid_비준가격').SetRow(GetValue('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('비준_Combo_사례구분') },

        { key: '사례번호', value: GetValue('비준_Combo_사례번호') },

        { key: '소재지_비교치', value: GetValue('비준_MkEdit_소재지_비교') },

        { key: '전용면적단가', value: GetValue('비준_MkEdit_전용면적단가') },

        { key: '층별비교_본건', value: GetValue('비준_Combo_층별비교_본건') },

        { key: '층별비교_본건_적용율', value: GetValue('비준_MkEdit_층별_본건') },

        { key: '층별비교_사례', value: GetValue('비준_Combo_층별비교_사례') },

        { key: '층별비교_사례_적용율', value: GetValue('비준_MkEdit_층별_사례') },

        { key: '층별비교_비교치', value: GetValue('비준_MkEdit_층별_비교') },

        { key: '잔가율비교_본건', value: GetValue('비준_MkEdit_잔가율_본건') },

        { key: '잔가율비교_사례', value: GetValue('비준_MkEdit_잔가율_사례') },

        { key: '잔가율비교_비교치', value: GetValue('비준_MkEdit_잔가율_비교') },

        { key: '요인합계', value: GetValue('비준_MkEdit_요인합계') },

        { key: '적용단가', value: GetValue('비준_MkEdit_적용단가') },

        { key: '산정단가', value: GetValue('비준_MkEdit_산정단가') },

        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명') },

        { key: '전용면적', value: GetValue('비준_MkEdit_전용면적') },

        { key: '최고금액', value: GetValue('비준_MkEdit_최고금액') },

        { key: '최저금액', value: GetValue('비준_MkEdit_최저금액') },

        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명') },

        { key: '시점_본건_일자', value: GetValue('비준_MkEdit_시점_본건_일자') },

        { key: '시점_본건_적용율', value: GetValue('비준_MkEdit_시점_본건_적용율') },

        { key: '시점_사례_일자', value: GetValue('비준_MkEdit_시점_사례_일자') },

        { key: '시점_사례_적용율', value: GetValue('비준_MkEdit_시점_사례_적용율') },

        { key: '시점_비교치', value: GetValue('비준_MkEdit_시점_비교') },

        { key: '환산금액', value: GetValue('비준_MkEdit_환산금액') },

    ]);


    GetComponent('DBGrid_비준가격집계표').AddRow({
        '년도': GetValue('년도'),
        '일련번호': GetValue('감정순번'),
    });


    GetComponent('DBGrid_비준가격집계표').SetRow(GetValue('감정가_비준_RowCount'), [
        { key: '사례구분', value: GetValue('비준_Combo_사례구분') },

        { key: '사례번호', value: GetValue('비준_Combo_사례번호') },

        { key: '소재지_비교치', value: GetValue('비준_MkEdit_소재지_비교') },

        { key: '전용면적단가', value: GetValue('비준_MkEdit_전용면적단가') },

        { key: '층별비교_비교치', value: GetValue('비준_MkEdit_층별_비교') },

        { key: '잔가율비교_비교치', value: GetValue('비준_MkEdit_잔가율_비교') },

        { key: '요인합계', value: GetValue('비준_MkEdit_요인합계') },

        { key: '적용단가', value: GetValue('비준_MkEdit_적용단가') },

        { key: '산정단가', value: GetValue('비준_MkEdit_산정단가') },

        { key: '사례구분명', value: GetValue('감정가_비준_사례구분명') },

        { key: '전용면적', value: GetValue('비준_MkEdit_전용면적') },

        { key: '소재지', value: GetValue('비준_MkEdit_소재지_사례') },

        { key: '최고금액', value: GetValue('비준_MkEdit_최고금액') },

        { key: '최저금액', value: GetValue('비준_MkEdit_최저금액') },

        { key: '사례번호명', value: GetValue('감정가_비준_사례번호명') },

        { key: '시점_비교치', value: GetValue('비준_MkEdit_시점_비교') },

        { key: '시점_사례_일자', value: GetValue('비준_MkEdit_시점_사례_일자') },

        { key: '환산금액', value: GetValue('비준_MkEdit_환산금액') },

    ]);


    GetComponent('DBGrid_비준가격').SetCurSel(GetNumber('감정가_비준_RowCount'));


    GetComponent('DBGrid_비준가격').SetEditFocus(GetNumber('감정가_비준_RowCount')-1, '사례번호');

}

function MC_401_평가액_최고최저_계산_0() {

    //-- 본건_서택자료 중 최고/최저가격
    if ( GetValue('본건_Edit_선택1') == "Y") {
        SetValue('평가_MkEdit_본건_최저',  GetValue('본건_MkEdit_최저가격1'))
        SetValue('평가_MkEdit_본건_최고',  GetValue('본건_MkEdit_최고가격1'))
        SetValue('평가_MkEdit_본건_최저_단가',  Round(GetNumber('평가_MkEdit_본건_최저') / GetNumber('본건_MkEdit_전용면적1'), 0))
        SetValue('평가_MkEdit_본건_최고_단가',  Round(GetNumber('평가_MkEdit_본건_최고') / GetNumber('본건_MkEdit_전용면적1'), 0))
    } else if ( GetValue('본건_Edit_선택2') == "Y") {
        SetValue('평가_MkEdit_본건_최저',  GetValue('본건_MkEdit_최저가격2'))
        SetValue('평가_MkEdit_본건_최고',  GetValue('본건_MkEdit_최고가격2'))
        SetValue('평가_MkEdit_본건_최저_단가',  Round(GetNumber('평가_MkEdit_본건_최저') / GetNumber('본건_MkEdit_전용면적2'), 0))
        SetValue('평가_MkEdit_본건_최고_단가',  Round(GetNumber('평가_MkEdit_본건_최고') / GetNumber('본건_MkEdit_전용면적2'), 0))
    } else if ( GetValue('본건_Edit_선택3') == "Y") {
        SetValue('평가_MkEdit_본건_최저',  GetValue('본건_MkEdit_최저가격3'))
        SetValue('평가_MkEdit_본건_최고',  GetValue('본건_MkEdit_최고가격3'))
        SetValue('평가_MkEdit_본건_최저_단가',  Round(GetNumber('평가_MkEdit_본건_최저') / GetNumber('본건_MkEdit_전용면적3'), 0))
        SetValue('평가_MkEdit_본건_최고_단가',  Round(GetNumber('평가_MkEdit_본건_최고') / GetNumber('본건_MkEdit_전용면적3'), 0))
    }

    SetValue('평가_MkEdit_본건_최저_단가',  Round(GetValue('평가_MkEdit_본건_최저_단가')/1000, 0)*1000)
    SetValue('평가_MkEdit_본건_최고_단가',  Round(GetValue('평가_MkEdit_본건_최고_단가')/1000, 0)*1000)

//-- 본건 최고/최저비율
    SetValue('평가_MkEdit_본건_비율',  Round((GetNumber('평가_MkEdit_본건_최저') / GetNumber('평가_MkEdit_본건_최고'))*100, 2) )


    SetValue('감정가_평가_임시배열11', 0);

    SetValue('감정가_평가_임시배열12', 0);

    SetValue('감정가_평가_임시배열13', 0);

    SetValue('감정가_평가_임시배열21', 0);

    SetValue('감정가_평가_임시배열22', 0);

    SetValue('감정가_평가_임시배열23', 0);


    MC_401_평가액_최고최저_계산_20_초기화();


    GetComponent('DBGrid_비준가격집계표').GetRows("", [
        { key: '감정가_평가_사례구분_배열', value: '사례구분' },

        { key: '감정가_평가_사례번호_배열', value: '사례번호' },

        { key: '감정가_평가_전용면적_배열', value: '전용면적' },

        { key: '감정가_평가_적용단가_배열', value: '적용단가' },

        { key: '감정가_평가_가격_최고', value: '환산금액' },

        { key: '감정가_평가_가격_최저', value: '환산금액' },
    ]
    );


    GetComponent('DBGrid_비준가격집계표').GetRowCount('감정가_비준_RowCount');


    SetValue('감정가_비준_RowCount', GetValue('감정가_비준_RowCount')-1);


    SetValue('감정가_평가_LoopCnt', GetValue('감정가_비준_RowCount'));


    for (SetValue('i', 0); GetValue('i') <= GetNumber('감정가_평가_LoopCnt'); SetValue('i', GetValue('i') + 1)) {
        MC_401_평가액_최고최저_계산_1();
    }


    SetValue('평가_MkEdit_가격_최고', Round(Max('감정가_평가_임시배열12'),0));
    SetValue('평가_MkEdit_가격_최고_단가', Round(Max('감정가_평가_임시배열13'),0));
    SetValue('평가_MkEdit_가격_최저', Round(Min('감정가_평가_임시배열11'),0));
    SetValue('평가_MkEdit_가격_최저_단가', Round(Min('감정가_평가_임시배열13'),0));
    SetValue('평가_MkEdit_가격_비율', Round((GetNumber('평가_MkEdit_가격_최저') / GetNumber('평가_MkEdit_가격_최고'))*100,2));


    SetValue('평가_MkEdit_경매_최고_단가',  Round(Max('감정가_평가_임시배열23'),0))
    SetValue('평가_MkEdit_경매_최고', Round(Max('감정가_평가_임시배열21'),0))
    SetValue('평가_MkEdit_경매_최저_단가',  Round(Min('감정가_평가_임시배열23'),0))
    SetValue('평가_MkEdit_경매_최저', Round(Min('감정가_평가_임시배열22'),0))


    SetValue('평가_MkEdit_경매_비율', Round((GetNumber('평가_MkEdit_가격_최저') / GetNumber('평가_MkEdit_가격_최고'))*100,2));


    SetValue('평가_MkEdit_담보_등기전용면적', GetValue('MkEdit_입력표_담보제공_전용면적'));

    SetValue('평가_MkEdit_담보_분자', GetValue('MkEdit_입력표_담보제공_분자'));

    SetValue('평가_MkEdit_담보_분모', GetValue('MkEdit_입력표_담보제공_분모'));

    SetValue('평가_MkEdit_담보_비율', GetValue('MkEdit_입력표_담보제공_비율'));

    SetValue('평가_MkEdit_담보_제공면적', GetValue('MkEdit_입력표_담보제공_제공면적'));


    MC_402_평가액_평가액산정();

}

function MC_901_저장_그리드_키값() {

    SetValue('00_NUMBER', -1);


    GetComponent('DBGrid_가격사례').FindIndexArray('00_NUMBER', (row) => {

        if ((row['사례번호'] < 999)) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_가격사례').SetRows(GetValue('00_NUMBER'), [
        { key: '년도', value: GetValue('Edit_KEY_년도') },

        { key: '일련번호', value: GetValue('Edit_KEY_감정순번') },
    ]);


    GetComponent('DBGrid_경매사례').FindIndexArray('00_NUMBER', (row) => {

        if ((row['사례번호'] < 999)) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_경매사례').SetRows(GetValue('00_NUMBER'), [
        { key: '년도', value: GetValue('Edit_KEY_년도') },

        { key: '일련번호', value: GetValue('Edit_KEY_감정순번') },
    ]);


    GetComponent('DBGrid_비준가격').FindIndexArray('00_NUMBER', (row) => {

        if ((row['사례번호'] < 999)) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_비준가격').SetRows(GetValue('00_NUMBER'), [
        { key: '년도', value: GetValue('Edit_KEY_년도') },

        { key: '일련번호', value: GetValue('Edit_KEY_감정순번') },
    ]);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRows(GetValue('m_index'), [
        { key: 'YYYY', value: GetValue('Edit_KEY_년도') },

        { key: 'SEQ', value: GetValue('Edit_KEY_감정순번') },

    ]);


    GetComponent('DBGrid_배당금_계산').FindIndexArray('m_index', (row) => {

        if ((row['YYYY'] != '1111')) {
            return true;
        }

        return false;
    });


    GetComponent('DBGrid_배당금_계산').SetRows(GetValue('m_index'), [
        { key: 'YYYY', value: GetValue('Edit_KEY_년도') },

        { key: 'SEQ', value: GetValue('Edit_KEY_감정순번') },

    ]);

}

function MC_501_Combo_OnChange_층별비교() {

    GetZoonData('Q_00_층별비교').FindIndex('00_NUMBER', (row) => {

        if ((row['CD_CODE'] == GetValue('보정표_Combo_총층수중전유부분의위치'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_층별비교').GetRow(GetValue('00_NUMBER'), [
        { key: '보정표_MkEdit_총층수중전유부분_적용율', value: 'IDX' },
    ]);


    RunButton('Command_적용할낙찰가율');

}

function MC_001_초기화_재감정여부() {
    if ((isEmpty(GetValue('Edit_KEY_감정순번'))) || (isEmpty(GetValue('Edit_KEY_감정순번'))) || (Right(GetValue('Edit_KEY_감정순번'),2) == "00")) {
        SetValue('Edit_입력표_이담보물에대한재감정', "최초감정")
    } else {
        SetValue('Edit_입력표_이담보물에대한재감정',  "재감정")
    }
}

function MC_501_Combo_OnChange_전유부분면적() {

    SetValue('보정표_MkEdit_전유부분의면적', GetValue('MkEdit_입력표_전유면적'));


    GetZoonData('Q_00_전유부분의면적').FindIndex('00_NUMBER', (row) => {

        if ((row['CD_CODE'] == GetValue('보정표_Combo_전유부분의면적'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_전유부분의면적').GetRow(GetValue('00_NUMBER'), [
        { key: '보정표_MkEdit_전유부분의면적_적용율', value: 'IDX' },
    ]);


    RunButton('Command_적용할낙찰가율');

}

function MC_501_Combo_OnChange_전유부분위치() {

    GetZoonData('Q_00_전유부분의위치').FindIndex('00_NUMBER', (row) => {

        if ((row['CD_CODE'] == GetValue('보정표_Combo_총층수중전유부분의위치'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_전유부분의위치').GetRow(GetValue('00_NUMBER'), [
        { key: '보정표_MkEdit_총층수중전유부분_적용율', value: 'IDX' },

        { key: '보정표_MkEdit_전유부분위치_등급', value: 'GRADE' },
    ]);


    RunButton('Command_적용할낙찰가율');

}

function MC_102_전유부분의위치찾기() {

    SetValue('00_TEMP', '000000');


    SetValue('00_TEMP', //--총층수코드는 지상+해당층이기떄문에
        LPad(GetString('Edit_입력표_지상'),3,"0") + LPad(GetString('Edit_입력표_해당층'),3,"0"));


    RunQuery('Q_00_전유부분의위치_총층수중해당층', {
        '총층수': GetValue('Edit_입력표_지상')
    }, 'GET');


    GetZoonData('Q_00_전유부분의위치_총층수중해당층').FindIndex('IDX_입력표_해당층', (row) => {

        if ((row['CD_CODE'] == GetValue('00_TEMP'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_00_전유부분의위치_총층수중해당층').GetRow(GetValue('IDX_입력표_해당층'), [
        { key: '보정표_Edit_전유부분위치', value: 'CD_DESC1' },
    ]);

}

function MC_200_초기화_가격사례_항목() {

    SetValue('가격_MkEdit_사례번호', "");

    SetValue('가격_Edit_소재지', "");

    SetValue('가격_Combo_본건과거리', "");

    SetValue('가격_MkEdit_세대수', 0);

    SetValue('가격_MkEdit_건축년도', "");

    SetValue('가격_MkEdit_경과년도', 0);

    SetValue('가격_MkEdit_내용년수', 0);

    SetValue('가격_Edit_선택1', "");

    SetValue('가격_Edit_선택2', "");

    SetValue('가격_Edit_선택3', "");

    SetValue('가격_Group_선택1', "");

    SetValue('가격_Group_선택2', "");

    SetValue('가격_Group_선택3', "");

    SetValue('가격_MkEdit_전세_비율1', 0);

    SetValue('가격_MkEdit_전세_비율2', 0);

    SetValue('가격_MkEdit_전세_비율3', 0);

    SetValue('가격_MkEdit_전세_전세금1', 0);

    SetValue('가격_MkEdit_전세_전세금2', 0);

    SetValue('가격_MkEdit_전세_전세금3', 0);

    SetValue('가격_MkEdit_전용면적1', 0);

    SetValue('가격_MkEdit_전용면적2', 0);

    SetValue('가격_MkEdit_전용면적3', 0);

    SetValue('가격_MkEdit_전용면적단가1', 0);

    SetValue('가격_MkEdit_전용면적단가2', 0);

    SetValue('가격_MkEdit_전용면적단가3', 0);

    SetValue('가격_MkEdit_최고가격1', 0);

    SetValue('가격_MkEdit_최고가격2', 0);

    SetValue('가격_MkEdit_최고가격3', 0);

    SetValue('가격_MkEdit_최저가격1', 0);

    SetValue('가격_MkEdit_최저가격2', 0);

    SetValue('가격_MkEdit_최저가격3', 0);

    SetValue('가격_MkEdit_평균가격1', 0);

    SetValue('가격_MkEdit_평균가격2', 0);

    SetValue('가격_MkEdit_평균가격3', 0);

    SetValue('가격_Combo_구조', "");

    SetValue('가격_Edit_지번', "");

}

function MC_200_DBGrid_가격사례_DblClick_Event() {

    GetComponent('DBGrid_가격사례').GetRow(-1, [
        { key: '가격_MkEdit_사례번호', value: '사례번호' },

        { key: '가격_Edit_소재지', value: '소재지' },

        { key: '가격_Combo_본건과거리', value: '본건과의거리' },

        { key: '가격_MkEdit_세대수', value: '세대수' },

        { key: '가격_MkEdit_건축년도', value: '건축년도' },

        { key: '가격_MkEdit_경과년도', value: '경과년수' },

        { key: '가격_MkEdit_내용년수', value: '내용년수' },

        { key: '가격_Edit_선택1', value: '지하층_선택여부' },

        { key: '가격_Group_선택1', value: '지하층_선택여부' },

        { key: '가격_MkEdit_전용면적1', value: '지하층_전용면적' },

        { key: '가격_MkEdit_최저가격1', value: '지하층_시세조사_최저가' },

        { key: '가격_MkEdit_최고가격1', value: '지하층_시세조사_최고가' },

        { key: '가격_MkEdit_평균가격1', value: '지하층_시세조사_평균가격' },

        { key: '가격_MkEdit_전용면적단가1', value: '지하층_시세조사_전용면적단가' },

        { key: '가격_MkEdit_전세_전세금1', value: '지하층_전세수준_전세가' },

        { key: '가격_MkEdit_전세_비율1', value: '지하층_전세수준_비율' },

        { key: '가격_Edit_선택2', value: '기준층_선택여부' },

        { key: '가격_Group_선택2', value: '기준층_선택여부' },

        { key: '가격_MkEdit_전용면적2', value: '기준층_전용면적' },

        { key: '가격_MkEdit_최저가격2', value: '기준층_시세조사_최저가' },

        { key: '가격_MkEdit_최고가격2', value: '기준층_시세조사_최고가' },

        { key: '가격_MkEdit_평균가격2', value: '기준층_시세조사_평균가격' },

        { key: '가격_MkEdit_전용면적단가2', value: '기준층_시세조사_전용면적단가' },

        { key: '가격_MkEdit_전세_전세금2', value: '기준층_전세수준_전세가' },

        { key: '가격_MkEdit_전세_비율2', value: '기준층_전세수준_비율' },

        { key: '가격_Edit_선택3', value: '최고층_선택여부' },

        { key: '가격_Group_선택3', value: '최고층_선택여부' },

        { key: '가격_MkEdit_전용면적3', value: '최고층_전용면적' },

        { key: '가격_MkEdit_최저가격3', value: '최고층_시세조사_최저가' },

        { key: '가격_MkEdit_최고가격3', value: '최고층_시세조사_최고가' },

        { key: '가격_MkEdit_평균가격3', value: '최고층_시세조사_평균가격' },

        { key: '가격_MkEdit_전용면적단가3', value: '최고층_시세조사_전용면적단가' },

        { key: '가격_MkEdit_전세_전세금3', value: '최고층_전세수준_전세가' },

        { key: '가격_MkEdit_전세_비율3', value: '최고층_전세수준_비율' },

        { key: '가격_Combo_구조', value: '구조' },

        { key: '가격_Edit_지번', value: '지번' },

    ]);

}

function MC_003_계산_잔가율() {

    //-- 변수 Clear
    SetValue('02_총내용년수',  0)
    SetValue('02_경과년수',  0)
    SetValue('02_잔존내용년수',  0)
    SetValue('02_잔가율',  0)


    if ( GetValue('02_잔가율구분') == "입력표") {
        SetValue('02_총내용년수',  GetValue('MkEdit_입력표_내용연수'))
        SetValue('02_경과년수',  GetValue('MkEdit_입력표_건축년도_경과'))
    } else if ( GetValue('02_잔가율구분') == "비준_사례") {
        SetValue('02_총내용년수',  GetValue('감정가_비준_내용년수'))
        SetValue('02_경과년수',  GetValue('감정가_비준_경과년수'))
    }

//-- 잔가율 == 잔존내용년수/총내용연수
    if ( (GetValue('02_총내용년수') == 0) || (GetValue('02_경과년수') == 0)) {
        SetValue('02_잔가율',  0 )
    } else {
        SetValue('02_잔존내용년수', GetNumber('02_총내용년수') - GetNumber('02_경과년수'))
// 잔존내용년수가 - 이면 0.2
        if ( GetValue('02_잔존내용년수') < 0) {
            SetValue('02_잔가율', 0.2)
        } else {
            SetValue('02_잔가율', Round(GetNumber('02_잔존내용년수') / GetNumber('02_총내용년수'),2) )
        }
    }

//-- 해당항목에 Move
    if ( GetValue('02_잔가율구분') == "입력표") {
        SetValue('MkEdit_입력표_잔가율',  GetValue('02_잔가율'))
    } else if ( GetValue('02_잔가율구분') == "비준_사례") {
        SetValue('비준_MkEdit_잔가율_사례',  GetValue('02_잔가율'))
    }

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


    RunQuery('Q_배당표_주택임차보증금_계산', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_999_배당() {

    RunQuery('Q_코드_최고채권액', {}, 'GET');


    RunQuery('Q_코드_가임대보증금적용지역', {}, 'GET');


    RunQuery('Q_코드_각구의일련번호', {}, 'GET');


    RunQuery('Q_코드_순위', {}, 'GET');


    RunQuery('Q_코드_권리의내용', {}, 'GET');


    RunQuery('Q_배당표M', {
        '년도' : GetValue('년도'),
        '감정순번' : GetValue('감정순번'),
    }, 'GET');


    GetZoonData('Q_배당표M').GetRow(0, [
        { key: 'Combo_배당표_최고채권액', value: 'AUCTION_CODE' },

        { key: 'Edit_배당표_경매비용', value: 'AUCTION_AMT' },

        { key: 'Edit_배당표_예상낙찰가', value: 'H_PL_BID_AMT' },

        { key: 'Combo_배당표_가임대보증금적용범위', value: 'H_POSS_A_AREA' },

        { key: 'Edit_배당표_적용할주택가임대보증금액', value: 'H_POSS_A_AMT' },

        { key: 'Edit_배당표_경락가액', value: 'H_POSS_AMT' },

        { key: 'Edit_배당표_최고채권액', value: 'CRED_MAX_AMT' },
    ]);


    RunQuery('Q_배당표_주택임차보증금_계산', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    RunQuery('Q_배당표_배당금_계산', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    MC_999_배당표_주택임대차보증금_계산();


    for (SetValue('i', 0); GetValue('i') < 6; SetValue('i', GetValue('i') + 1)) {
        MC_999_배당금_Flag변경();
    }

}

function MC_999_배당금_Flag변경() {

    GetComponent('DBGrid_배당금_계산').GetRow(GetNumber('i'), [
        { key: '배당표_배당금_flag', value: 'FLAG' },
    ]);


    GetComponent('DBGrid_배당금_계산').SetModifyFlag('배당표_배당금_flag', '');

}

function MC_999_배당표_배당금_계산() {
    if (GetValue('배당표_배당금계산_ColName') == 'RANK') {

        GetComponent('DBGrid_배당금_계산').SortField('None', '');

    }


    GetComponent('DBGrid_배당금_계산').GetRow(-1, [
        { key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT' },

        { key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN' },
    ]);


    GetComponent('DBGrid_배당금_계산').GetRows("", [
        { key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT' },

        { key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN' }
    ]
    );



    if ( GetValue('배당표_배당금계산_공동담보') == GetValue('배당표_배당금계산_공동담보_ORG')
        && GetValue('배당표_배당금계산_단독담보') == GetValue('배당표_배당금계산_단독담보_ORG')) {
    } else {
        if ( GetValue('배당표_배당금계산_ColName') == "CRED_SELF_AMT") {
            SetValue('배당표_배당금계산_공동담보',  0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))
        } else if ( GetValue('배당표_배당금계산_ColName') == "CRED_COMB_AMT") {
            SetValue('배당표_배당금계산_단독담보',  0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))
        }
    }

    if ( GetValue('배당표_배당금계산_ColName') == "HITE_YN") {
        if ( GetValue('배당표_배당금계산_당사설정') == "Y") {
            SetValue('배당표_배당금계산_발생일자', GetValue('MkEdit_감정일'))
        }
    }

    SetValue('배당표_배당금계산_RowCount', GetArrayCnt('배당표_배당금계산_공동담보_Arr')-1)


    for (SetValue('i', GetNumber('배당표_배당금계산_RowCount')); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_배당표_배당금_최고채권액();
    }


    GetComponent('DBGrid_배당금_계산').SetRow(-1, [
        { key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산_단독담보') },

        { key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산_공동담보') },

        { key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산_공동담보_ORG') },

        { key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산_단독담보_ORG') },

        { key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산_발생일자') },
    ]);


    SetValue('Edit_배당표_최고채권액', Max('배당표_배당금계산_공동담보_Arr'))


    SetValue('배당표_배당금계산_당사설정', "");

    SetValue('배당표_배당금계산_발생일자', "");


    if (true) {
        return false;
    }



    GetComponent('DBGrid_배당금_계산').GetRow(-1, [
        { key: '배당표_배당금계산_공동담보', value: 'CRED_COMB_AMT' },

        { key: '배당표_배당금계산_단독담보', value: 'CRED_SELF_AMT' },

        { key: '배당표_배당금계산_공동담보_ORG', value: 'CRED_COMB_AMT_ORG' },

        { key: '배당표_배당금계산_단독담보_ORG', value: 'CRED_SELF_AMT_ORG' },

        { key: '배당표_배당금계산_당사설정', value: 'HITE_YN' },

        { key: '배당표_배당금계산_발생일자', value: 'RIGHT_DATE' },

    ]);


    GetComponent('DBGrid_배당금_계산').GetRows("", [
        { key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT' },

        { key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN' }
    ]
    );



    if ( GetValue('배당표_배당금계산_공동담보') == GetValue('배당표_배당금계산_공동담보_ORG')
        && GetValue('배당표_배당금계산_단독담보') == GetValue('배당표_배당금계산_단독담보_ORG')) {
    } else {
        if ( GetValue('배당표_배당금계산_ColName') == "CRED_SELF_AMT") {
            SetValue('배당표_배당금계산_공동담보',  0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))
        } else if ( GetValue('배당표_배당금계산_ColName') == "CRED_COMB_AMT") {
            SetValue('배당표_배당금계산_단독담보',  0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))
        }
    }

    if ( GetValue('배당표_배당금계산_ColName') == "HITE_YN") {
        if ( GetValue('배당표_배당금계산_당사설정') == "Y") {
            SetValue('배당표_배당금계산_발생일자', GetValue('MkEdit_감정일'))
        }
    }

    SetValue('배당표_배당금계산_RowCount', GetArrayCnt('배당표_배당금계산_공동담보_Arr')-1)


    for (SetValue('i', GetNumber('배당표_배당금계산_RowCount')); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_999_배당표_배당금_최고채권액();
    }


    GetComponent('DBGrid_배당금_계산').SetRow(-1, [
        { key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산_단독담보') },

        { key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산_공동담보') },

        { key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산_공동담보_ORG') },

        { key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산_단독담보_ORG') },

        { key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산_발생일자') },

    ]);


    SetValue('Edit_배당표_최고채권액', Max('배당표_배당금계산_공동담보_Arr'))


    SetValue('배당표_배당금계산_당사설정', "");

    SetValue('배당표_배당금계산_발생일자', "");

}

function MC_999_배당표_배당금_기본항목자동설정() {

    GetComponent('DBGrid_배당금_계산').FindIndex('i', (row) => {

        if ((row['RIGHT_CODE'] == "001")) {
            return true;
        }

        return false;
    });

    if (GetValue('i') >= 0) {

        GetComponent('DBGrid_배당금_계산').SetRow(GetValue('i'), [
            { key: 'CRED_COMB_AMT', value: 'Edit_배당표_경매비용' },
        ]);

    }


    GetComponent('DBGrid_배당금_계산').FindIndex('i', (row) => {

        if ((row['RIGHT_CODE'] == "003")) {
            return true;
        }

        return false;
    });

    if (GetValue('i') >= 0) {

        GetComponent('DBGrid_배당금_계산').SetRow(GetValue('i'), [
            { key: 'CRED_COMB_AMT', value: GetValue('Edit_배당표_합계_최종적용가임대보증금') },
        ]);

    }

}

function MC_999_배당표_배당금_최고채권액() {


    if ( GetArray('배당표_배당금계산_말소여부_Arr',GetValue('i')) == "Y") {
        RemoveArray('배당표_배당금계산_공동담보_Arr',GetValue('i'))
    }

}

function MC_999_배당표_주택임대차보증금_계산() {

    GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {

        if ((row['CD_CODE'] == GetValue('Combo_배당표_가임대보증금적용범위'))) {
            return true;
        }

        return false;
    });


    GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetValue('배당표_주택임대차보증금_RowPosition'), [
        { key: '배당표_가임대보증금적용범위', value: 'ATTR_03' },
    ]);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(GetNumber('i'), [
        { key: '배당표_주택임대차보증금_방의총수', value: 'RESI_RM_CNT' },

        { key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT' },

        { key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT' },

        { key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN' },
    ]);


    SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', 0)
    SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', 0)

    if ( GetValue('배당표_주택임대차보증금_ColName') == "POSS_A_RM_CNT") {
        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetNumber('배당표_주택임대차보증금_적용한방의총수') * GetNumber('Edit_배당표_적용할주택가임대보증금액'))
        SetValue('배당표_주택임대차보증금_실제임대차보증금', 0)
    } else if ( GetValue('배당표_주택임대차보증금_ColName') == "LEASE_AMT") {
        SetValue('배당표_주택임대차보증금_적용한방의총수', 0)

        if ( GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') > GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))

            if ( GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'))
            } else {
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'))
            }
        } else if ( GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))
        } else {
            if ( GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))
            } else {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))
            }
        }
    } else {
        SetValue('배당표_주택임대차보증금_최종가임대보증금', GetNumber('배당표_주택임대차보증금_적용한방의총수') * GetNumber('Edit_배당표_적용할주택가임대보증금액'))

        if ( GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') > GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))

            if ( GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'))
            } else {
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetNumber('배당표_주택임대차보증금_실제임대차보증금') - GetNumber('Edit_배당표_적용할주택가임대보증금액'))
            }
        } else if ( GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('배당표_가임대보증금적용범위') && GetValue('배당표_주택임대차보증금_실제임대차보증금') <= GetValue('Edit_배당표_적용할주택가임대보증금액')) {
            SetValue('배당표_주택임대차보증금_최종가임대보증금', GetValue('Edit_배당표_적용할주택가임대보증금액'))
        } else {
            if ( GetValue('배당표_주택임대차보증금_확정일자_보유여부') == "Y") {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))
            } else {
                SetValue('배당표_주택임대차보증금_최종가임대보증금', 0)
                SetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금', GetValue('배당표_주택임대차보증금_실제임대차보증금'))
            }
        }
    }


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRow(GetValue('i'), [
        { key: 'REP_BE_SEC_AMT', value: GetValue('배당표_주택임대차보증금_최종가임대보증금') },

        { key: 'FXLEA_AMT', value: GetValue('배당표_주택임대차보증금_확정_주택임대차보증금') },

        { key: 'FXLEA_NO_AMT', value: GetValue('배당표_주택임대차보증금_확정없는_주택임대차보증금') },

        { key: 'POSS_A_RM_CNT', value: GetValue('배당표_주택임대차보증금_적용한방의총수') },

        { key: 'LEASE_AMT', value: GetValue('배당표_주택임대차보증금_실제임대차보증금') },
    ]);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows("", [
        { key: '배당표_주택임대차보증금_방의총수Arr', value: 'RESI_RM_CNT' },

        { key: '배당표_주택임대차보증금_적용한방의총수Arr', value: 'POSS_A_RM_CNT' },

        { key: '배당표_주택임대차보증금_실제임대차보증금Arr', value: 'LEASE_AMT' },

        { key: '배당표_주택임대차보증금_최종가임대보증금Arr', value: 'REP_BE_SEC_AMT' },

        { key: '배당표_주택임대차보증금_확정_주택임대차보증금Arr', value: 'FXLEA_AMT' },

        { key: '배당표_주택임대차보증금_확정없는_주택임대차보증금Arr', value: 'FXLEA_NO_AMT' }
    ]);


    SetValue('Edit_배당표_합계_총방의개수', Sum('배당표_주택임대차보증금_방의총수Arr'));
    SetValue('Edit_배당표_합계_적용한방의개수', Sum('배당표_주택임대차보증금_적용한방의총수Arr'));
    SetValue('Edit_배당표_합계_실제임대차보증금', Sum('배당표_주택임대차보증금_실제임대차보증금Arr'));
    SetValue('Edit_배당표_합계_최종적용가임대보증금', Sum('배당표_주택임대차보증금_최종가임대보증금Arr'));
    SetValue('Edit_배당표_합계_주택임대차보증금_확정', Sum('배당표_주택임대차보증금_확정_주택임대차보증금Arr'));
    SetValue('Edit_배당표_합계_주택임대차보증금_확정없는', Sum('배당표_주택임대차보증금_확정없는_주택임대차보증금Arr'));

}

function MC_999_배당표_주택임대차보증금_계산_전체() {

    SetValue('Edit_배당표_예상낙찰가', GetValue('보정표_MkEdit_예상낙찰가'));
    SetValue('Combo_배당표_가임대보증금적용대상', GetValue('Combo_가임대보증금적용지역'));
    SetValue('Edit_배당표_경락가액', (GetNumber('Edit_배당표_예상낙찰가') - GetNumber('Edit_배당표_경매비용')) / 2);


    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRowCount('배당표_주택임대차보증금_RowCount');


    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_주택임대차보증금_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_999_배당표_주택임대차보증금_계산();
    }

}

function MC_999_배당표_배당처리시권리자자료_CLEAR() {

    RunButton('Command_배당처리시_자료CLEAR');

}

function MC_999_저장_배당() {

    SetValue('is배당처리', "Y");


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
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');

}

function MC_사유_상태변경() {


    if ( GetValue('MkEdit_입력표_담보제공_비율') != 100) {
        SetValue('사유_상태', "활성")
    } else {
        SetValue('사유_상태', "비활성")
    }

    if (GetValue('사유_상태') == "활성") {

        GetComponent('MkEdit_입력표_담보제공_사유').SetReadOnly(0.0);



    }

    if (GetValue('사유_상태') == "비활성") {

        GetComponent('MkEdit_입력표_담보제공_사유').SetReadOnly(1.0);



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


    SetValue('00_NUMBER', StrToNum(Left(GetValue('결재진행현황'),1)));

    if (GetValue('00_NUMBER') == 2) {

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

    }

    if (GetValue('00_NUMBER') != 2) {

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

function MC_탁상감정_조회() {
    // Function	[RichEditor_탁상감정].SetFontSize

    RunQuery('Q_탁상감정', {
        '년도': GetValue('년도'),
        '감정순번': GetValue('감정순번')
    }, 'GET');


    GetZoonData('Q_탁상감정').GetRow(0, [
        { key: '탁상감정_내용', value: 'ESTI_OPI' },

        { key: '탁상감정_요청일자', value: 'REQ_DATE' },

        { key: '탁상감정_회신일자', value: 'RES_DATE' },

        { key: 'Edit_탁상감정_탁상감정가', value: 'RES_PL_BID_AMT' },
    ]);


    SetValue('탁상감정_내용', StrReplace(GetValue('탁상감정_내용'),"&qt","'"))


    GetComponent('RichEditor_탁상감정').SetRichEditorRTF('탁상감정_내용');

    if (GetValue('isReadOnly') == 'O') {

        GetComponent('TabControl1').EnableTab(-1, 0);


        GetComponent('TabControl1').EnableTab(0, 1);


        GetComponent('TabControl1').EnableTab(7, 1);


        GetComponent('TabControl1').EnableTab(9, 1);


        GetComponent('TabControl1').SetItemText(1, '');


        GetComponent('TabControl1').SetItemText(2, '');


        GetComponent('TabControl1').SetItemText(3, '');


        GetComponent('TabControl1').SetItemText(4, '');


        GetComponent('TabControl1').SetItemText(5, '');


        GetComponent('TabControl1').SetItemText(6, '');


        GetComponent('TabControl1').SetItemText(8, '');

    }

}

function MC_990_저장_ValidationCheck() {

    GetComponent('TabControl1').SetCurSel(6.0);


    SetValue('저장_Error_Message', "");


    GetComponent('DBGrid_배당금_계산').GetModifyData([
        { key: '저장_배당표_배당금_년도', value: 'YYYY', isDelRowInclude: true },

        { key: '저장_배당표_배당금_일련번호', value: 'SEQ', isDelRowInclude: true },

        { key: '저장_배당표_배당금_순번', value: 'LN_SEQ', isDelRowInclude: true },

        { key: '저장_배당표_배당금_배당표구분', value: 'SHA_GU', isDelRowInclude: true },

        { key: '저장_배당표_배당금_순위', value: 'RANK', isDelRowInclude: true },

        { key: '저장_배당표_배당금_발생일자', value: 'RIGHT_DATE', isDelRowInclude: true },

        { key: '저장_배당표_배당금_권리자', value: 'RIGHT_PERSON', isDelRowInclude: true },

        { key: '저장_배당표_배당금_권리의내용', value: 'RIGHT_CODE', isDelRowInclude: true },

        { key: '저장_배당표_배당금_말소여부', value: 'ERA_YN', isDelRowInclude: true },

        { key: '저장_배당표_배당금_단독담보', value: 'CRED_SELF_AMT', isDelRowInclude: true },

        { key: '저장_배당표_배당금_공동담보', value: 'CRED_COMB_AMT', isDelRowInclude: true },

        { key: '저장_배당표_배당금_표시순위', value: 'DISP_RANK', isDelRowInclude: true },

        { key: '저장_배당표_배당금_배당순위', value: 'PRO_RATE_CODE', isDelRowInclude: true },

        { key: '저장_배당표_배당금_당사설정', value: 'HITE_YN', isDelRowInclude: true }
    ]);


    SetValue('저장_배당표_배당금_RowCount', GetArrayCnt('저장_배당표_배당금_일련번호'))


    for (SetValue('i', 0); GetValue('i') < GetNumber('배당표_배당금계산_RowCount'); SetValue('i', GetValue('i') + 1)) {
        MC_990_저장_ValidationCheck_배당표_배당금();
    }


    // BreakMacro	[:저장_Error_Message] != ""
}

function MC_990_저장_ValidationCheck_배당표_배당금() {
    if (GetString('저장_Error_Message') != "") {
        return false;
    }

    SetValue('배당표_배당금계산_표시순위', StrToNum(GetArray('저장_배당표_배당금_표시순위',GetValue('i'))))


    if ((GetValue('배당표_배당금계산_표시순위') < 10)) {
        return false;
    }




    if ( GetArray('저장_배당표_배당금_발생일자',GetValue('i')) == ""
        || GetArray('저장_배당표_배당금_발생일자',GetValue('i')) == "00000000") {
        SetValue('저장_Error_Message', "번쟤 배당금의계산_권리발생일자를 입력하여 주십시오.")
    }

    if (GetArray('저장_배당표_배당금_공동담보',GetValue('i')) <= 0) {
        SetValue('저장_Error_Message', "배당금의계산_채권최고액을 입력하여 주십시오.")
    }

    if ( GetArray('저장_배당표_배당금_권리의내용',GetValue('i')) == "") {
        SetValue('저장_Error_Message', "배당금의계산_권리의내용을 선택하여 주십시오.")
    }

    if ( GetArray('저장_배당표_배당금_권리자',GetValue('i')) == "") {
        SetValue('저장_Error_Message', "배당금의계산_권리자를 입력하여 주십시오.")
    }

    if ( GetArray('저장_배당표_배당금_표시순위',GetValue('i')) == "") {
        SetValue('저장_Error_Message', "배당금의계산_순위를 선택하여 주십시오.")
    }

}

function MC_999_배당표_배당금_계산1() {
    if (GetValue('배당표_배당금계산_ColName') == 'RANK') {

        // GetComponent('DBGrid_배당금_계산').SortField('None', None);

    }


    GetComponent('DBGrid_배당금_계산').GetRow(-1, [
        { key: '배당표_배당금계산_공동담보', value: 'CRED_COMB_AMT' },

        { key: '배당표_배당금계산_단독담보', value: 'CRED_SELF_AMT' },

        { key: '배당표_배당금계산_공동담보_ORG', value: 'CRED_COMB_AMT_ORG' },

        { key: '배당표_배당금계산_단독담보_ORG', value: 'CRED_SELF_AMT_ORG' },

        { key: '배당표_배당금계산_당사설정', value: 'HITE_YN' },

        { key: '배당표_배당금계산_발생일자', value: 'RIGHT_DATE' },

        { key: '00_TEMP', value: 'HITE_YN' },
    ]);


    GetComponent('DBGrid_배당금_계산').GetRows("", [
        { key: '배당표_배당금계산_공동담보_Arr', value: 'CRED_COMB_AMT' },

        { key: '배당표_배당금계산_말소여부_Arr', value: 'ERA_YN' }
    ]
    );



    if ( GetValue('배당표_배당금계산_공동담보') == GetValue('배당표_배당금계산_공동담보_ORG')
        && GetValue('배당표_배당금계산_단독담보') == GetValue('배당표_배당금계산_단독담보_ORG')) {
    } else {
        if ( GetValue('배당표_배당금계산_ColName') == "CRED_SELF_AMT") {
            SetValue('배당표_배당금계산_공동담보',  0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))
        } else if ( GetValue('배당표_배당금계산_ColName') == "CRED_COMB_AMT") {
            SetValue('배당표_배당금계산_단독담보',  0)
            SetValue('배당표_배당금계산_단독담보_ORG', GetValue('배당표_배당금계산_단독담보'))
            SetValue('배당표_배당금계산_공동담보_ORG', GetValue('배당표_배당금계산_공동담보'))
        }
    }

    if ( GetValue('배당표_배당금계산_ColName') == "HITE_YN") {
        if ( GetValue('배당표_배당금계산_당사설정') == "Y") {
            SetValue('배당표_배당금계산_발생일자', GetValue('MkEdit_감정일'))
        }
    }

    SetValue('배당표_배당금계산_RowCount', GetArrayCnt('배당표_배당금계산_공동담보_Arr')-1)


    for (SetValue('i', GetNumber('배당표_배당금계산_RowCount')); GetValue('i') >= 0; SetValue('i', GetValue('i') + -1)) {
        MC_999_배당표_배당금_최고채권액();
    }


    GetComponent('DBGrid_배당금_계산').SetRow(-1, [
        { key: 'CRED_SELF_AMT', value: GetValue('배당표_배당금계산_단독담보') },

        { key: 'CRED_COMB_AMT', value: GetValue('배당표_배당금계산_공동담보') },

        { key: 'CRED_COMB_AMT_ORG', value: GetValue('배당표_배당금계산_공동담보_ORG') },

        { key: 'CRED_SELF_AMT_ORG', value: GetValue('배당표_배당금계산_단독담보_ORG') },

        { key: 'RIGHT_DATE', value: GetValue('배당표_배당금계산_발생일자') },
    ]);


    SetValue('Edit_배당표_최고채권액', Max('배당표_배당금계산_공동담보_Arr'))


    SetValue('배당표_배당금계산_당사설정', "");

    SetValue('배당표_배당금계산_발생일자', "");

}