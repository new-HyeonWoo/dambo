const pageEvent = {
    init : function() {
        pageEvent.OnInitWindow();
        pageEvent.OnBefore();
        pageEvent.OnInitialize();
        pageEvent.OnAfter();
    },

    OnInitWindow : function() {
    },

    OnInitialize : function() {
        // RunQuery('Q_도로명주소_시도', {}, 'GET');
        //
        //
        // GetComponent('Combo_도로주소_시도').SetCurSel(0.0);
        //
        //
        // RunQuery('Q_도로명주소_시군구', {
        //     'CITY': GetValue('Combo_도로주소_시도')
        // }, 'GET');
        //
        //
        // GetComponent('Combo_도로주소_시군구').SetCurSel(0.0);


        RunQuery('Q_관리부서확인', {
            '_부서코드': GetValue('_부서코드')
        }, 'GET');


        MC_재감정여부();


        RunButton('Command_응찰_00_탭활성여부');

        RunButton('Command_버튼_활성화여부');


        GetComponent('SubForm1').HideSubForm();


        MC_Combo_초기화();


        MC_Combo_그리드_사용불가();


        MC_Combo_보정표_기본값셋팅();


        SetValue('현재날짜', DateToStr(Now()))
        SetValue('Combo_집합건물종류', GetValue('담보종류'))
        SetValue('Combo_사업부문', GetValue('사업부문'))

        SetValue('Edit_수익_수익가격_운용이율', 5)
        SetValue('Edit_수익_수익가격_환원이율', 8)

        if (isNotEmpty(GetValue('년도'))) {
            SetValue('Edit_년도', GetValue('년도'))
        } else {

            SetValue('년도', Left(DateToStr(Now()),4))
            SetValue('Edit_년도', Left(DateToStr(Now()),4))
        }

        if (isNotEmpty(GetValue('감정순번'))) {
            SetValue('Edit_감정순번', GetValue('감정순번'))
        }

// 권한설정
// W - 저장 가능
// R - 읽기 가능
// O - 모두 불가
        if (GetValue('_권한') == "W" ) {
            SetValue('isReadOnly', "N")
        } else if (GetValue('_권한') == "O" ) {
            SetValue('isReadOnly', "O")
        } else {

            SetValue('isReadOnly', "Y")
        }

        if (GetValue('_권한') == "I" ) {
            SetValue('isReadOnly', "N")
            SetValue('Edit_감정자사번', GetValue('_사원번호'))
            SetValue('Edit_감정자', GetValue('_부서명')+"  "+GetValue('_직위')+"  "+GetValue('_사원명'))
        }

//배당자료수정여부 체크
        if ((GetValue('isReadOnly') == "N") && (GetValue('_관리부서') == "Y") ) {
            SetValue('01_배당자료수정가능여부', "Y")
        }


        RunQuery('Q_코드_사진구분', {}, 'GET');


        RunQuery('Q_배당표_배당금_계산M', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금_계산D', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금_계산D_Temp', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금건물_계산M', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금건물_계산D', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금건물_계산D_Temp', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번'),
            '담보_건물_등기구분': GetValue('담보_건물_등기구분')
        }, 'GET');


        MC_담보제공비율_전체면적();


        RunQuery('Q_공통보고서_트리', {}, 'GET');


        RunQuery('Q_99_평가구분', {}, 'GET');


        GetComponent('Combo_보고서_평가구분').SetCurSel(0.0);


        RunButton('Command_응찰_00_메인');

        if (GetValue('Combo_입력표_업소구분') == "0") {

            GetComponent('Edit_업소명').SetReadOnly(1.0);




            SetValue('Edit_업소명', '자체');


            GetComponent('Edit_업소대표자').SetReadOnly(1.0);




            SetValue('Edit_업소대표자', GetValue('Edit_대표자'));


            SetFocus('Edit_채무자');

        }

        if (GetValue('Combo_입력표_업소구분') == "1") {

            GetComponent('Edit_업소명').SetReadOnly(0.0);




            GetComponent('Edit_업소대표자').SetReadOnly(0.0);




            SetValue('Edit_업소명', "");


            SetValue('Edit_업소대표자', "");


            SetFocus('Edit_채무자');

        }

        if (isEmpty(GetValue('Combo_입력표_업소구분'))) {

            GetComponent('Edit_업소명').SetReadOnly(0.0);




            GetComponent('Edit_업소대표자').SetReadOnly(0.0);




            SetValue('Combo_입력표_업소구분', 1);


            SetValue('Edit_업소명', "");


            SetValue('Edit_업소대표자', "");


            SetFocus('Edit_업소명');

        }


        if (isEmpty(GetValue('감정순번'))) {
            MC_탭_상태변경();
        }


        if (isEmpty(GetValue('감정순번'))) {
            return false;
        }



        if ((GetValue('_재감정여부') == 'Y')) {
            return false;
        }



        RunQuery('Q_담보마스타', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        GetZoonData('Q_담보마스타').GetRow(0, [
            { key: 'MkEdit_감정일', value: 'ESTI_DATE' },
            { key: 'Edit_거래처', value: 'SANGHO' },
            { key: 'Edit_대표자', value: 'DAEPYO_NAME' },
            { key: 'Edit_업소명', value: 'MARKET_NAME' },
            { key: 'Edit_업소대표자', value: 'MARKET_CEO' },
            { key: 'Edit_채무자', value: 'DEBTOR' },
            { key: 'Edit_담보제공자', value: 'GUARANTOR' },
            { key: 'Edit_채무자와담보제공자의관계', value: 'DEBTOR_RELATION' },
            { key: 'Edit_거래처코드', value: 'GEO_CODE' },
            { key: 'Combo_입력표_업소구분', value: 'MARKET_DIV' },
            { key: 'Edit_감정자사번', value: 'JUM_SABUN' },
            { key: 'Edit_감정자', value: 'JUM_SABUN_NAME' },
            { key: 'Edit_Doc_Key', value: 'DOC_KEY' },
            { key: 'Edit_Doc_Name', value: 'DOC_NAME' },
            { key: 'Combo_보고서_평가구분', value: 'APPRAISE_GU' },
            { key: '02_배당표수정여부', value: 'SHARE_YN' }
        ]);


        RunQuery('Q_입력표', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        GetZoonData('Q_입력표').GetRow(0, [
            { key: 'Edit_소재지', value: 'JUSO1' },
            { key: 'Edit_소재지_상세', value: 'JUSO2' },
            { key: 'Edit_실거래가격_총액', value: 'REGI_AMT' },
            { key: 'Edit_실거래가격_단가', value: 'REGI_DAN' },
            { key: 'Edit_실거래가격_평당단가', value: 'REGI_DAN_PY' }
        ]);


        RunQuery('Q_입력표_건물', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        GetZoonData('Q_입력표_건물').GetRow(0, [
            { key: 'Edit_건물의주된용도', value: 'B_USE_CODE' },
            { key: 'Combo_가임대보증금_주택', value: 'H_POSS_A_AREA' },
            { key: 'Combo_가임대보증금_상가', value: 'M_POSS_A_AREA' },
            { key: 'Edit_실거래가격_총액', value: 'REGI_AMT' },
            { key: 'Edit_실거래가격_단가', value: 'REGI_DAN' },
            { key: 'Edit_실거래가격_평당단가', value: 'REGI_DAN_PY' },
            { key: 'Edit_개별주택가격_총액', value: 'HOUS_AMT' },
            { key: 'Edit_개별주택가격_단가', value: 'HOUS_DAN' },
            { key: 'Edit_개별주택가격_평당단가', value: 'HOUS_DAN_PY' }
        ]);


        RunQuery('Q_토지의표시', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_규제의표시', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        GetZoonData('Q_규제의표시').GetRow(0, [
            { key: 'Edit_국토의계획', value: 'REST_PL_USE' },
            { key: 'Edit_다른법률등', value: 'REST_OT_LAW' },
            { key: 'Edit_시행령부칙', value: 'REST_EN_RULE' },
            { key: 'Edit_토지이용규제', value: 'REST_FU_LAW' },
            { key: 'Edit_주변토지의주된', value: 'REST_MAIN_USE' }
        ]);


        RunQuery('Q_건물의표시', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_담보제공비율', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_담보제공비율_건물', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_표준지공시지가선정', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_본건인근지역의가격수준', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        GetZoonData('Q_본건인근지역의가격수준').GetRow(0, [
            { key: 'Edit_본건인근지역_상업용_최고가', value: 'BU_MAX_M2_AMT' },
            { key: 'Edit_본건인근지역_상업용_최고가_평', value: 'BU_MAX_PY_AMT' },
            { key: 'Edit_본건인근지역_상업용_최저가', value: 'BU_MIN_M2_AMT' },
            { key: 'Edit_본건인근지역_상업용_최저가_평', value: 'BU_MIN_PY_AMT' },
            { key: 'Edit_본건인근지역_답_최고가', value: 'FA_MAX_M2_AMT' },
            { key: 'Edit_본건인근지역_답_최고가_평', value: 'FA_MAX_PY_AMT' },
            { key: 'Edit_본건인근지역_답_최저가', value: 'FA_MIN_M2_AMT' },
            { key: 'Edit_본건인근지역_답_최저가_평', value: 'FA_MIN_PY_AMT' },
            { key: 'Edit_본건인근지역_전_최고가', value: 'FI_MAX_M2_AMT' },
            { key: 'Edit_본건인근지역_전_최고가_평', value: 'FI_MAX_PY_AMT' },
            { key: 'Edit_본건인근지역_전_최저가', value: 'FI_MIN_M2_AMT' },
            { key: 'Edit_본건인근지역_전_최저가_평', value: 'FI_MIN_PY_AMT' },
            { key: 'Edit_본건인근지역_일반용_최고가', value: 'GE_MAX_M2_AMT' },
            { key: 'Edit_본건인근지역_일반용_최고가_평', value: 'GE_MAX_PY_AMT' },
            { key: 'Edit_본건인근지역_일반용_최저가', value: 'GE_MIN_M2_AMT' },
            { key: 'Edit_본건인근지역_일반용_최저가_평', value: 'GE_MIN_PY_AMT' },
            { key: 'Edit_본건인근지역_주거용_최고가', value: 'HO_MAX_M2_AMT' },
            { key: 'Edit_본건인근지역_주거용_최고가_평', value: 'HO_MAX_PY_AMT' },
            { key: 'Edit_본건인근지역_주거용_최저가', value: 'HO_MIN_M2_AMT' },
            { key: 'Edit_본건인근지역_주거용_최저가_평', value: 'HO_MIN_PY_AMT' },
            { key: 'Edit_본건인근지역_임야_최고가', value: 'WO_MAX_M2_AMT' },
            { key: 'Edit_본건인근지역_임야_최고가_평', value: 'WO_MAX_PY_AMT' },
            { key: 'Edit_본건인근지역_임야_최저가', value: 'WO_MIN_M2_AMT' },
            { key: 'Edit_본건인근지역_임야_최저가_평', value: 'WO_MIN_PY_AMT' }
        ]);


        RunQuery('Q_비준가격산정', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_기준가격', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        MC_기준가격_항목변경();


        RunQuery('Q_기준가격집계표', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_비준가격', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        MC_비준가격_항목변경();


        RunQuery('Q_비준가격집계표', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_기타요인', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_건물단가', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_건물평가액_집계표', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_담보_건축', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_담보_건축_Group', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_보정표', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        GetZoonData('Q_보정표').GetRow(0, [
            { key: 'Edit_보정표_당해지역낙찰가율', value: 'P_BID_RATE' },
            { key: 'Edit_보정표_유사부동산낙찰가율', value: 'K_BID_RATE' },
            { key: 'Edit_보정표_기준낙찰가율', value: 'B_BID_RATE' },
            { key: 'Combo_보정표_점유자형태', value: 'RIGHTS_CODE' },
            { key: 'Edit_보정표_법정지상권성립사유', value: 'DOMAIN_DESC' },
            { key: 'Combo_보정표_법정지상권', value: 'DOMAIN_CODE' },
            { key: 'Edit_보정표_법정지상권_적용률', value: 'DOMAIN_RATE' },
            { key: 'Edit_보정표_적용할낙찰가율', value: 'APPL_RATE' },
            { key: 'Edit_보정표_예상낙찰가', value: 'PL_BID_AMT' },
            { key: 'Combo_보정표_현재의주된', value: 'CURR_USE_CODE' },
            { key: 'Combo_보정표_장래의이용', value: 'FUTU_USE_CODE' },
            { key: 'Combo_보정표_단독주택_접한도로폭', value: 'DET_ADJ_ROAD' },
            { key: 'Combo_보정표_단독주택_대지의면적', value: 'DET_PLOT_CODE' },
            { key: 'Combo_보정표_단독주택_경과년도', value: 'DET_ELAP_CODE' },
            { key: 'Combo_보정표_상업용_접한도로폭', value: 'BUS_ADJ_ROAD' },
            { key: 'Combo_보정표_상업용_토지의형상', value: 'BUS_SHAPE_CODE' },
            { key: 'Combo_보정표_상업용_주변상권', value: 'BUS_COMM_DEV' },
            { key: 'Combo_보정표_상업용_경과년도', value: 'BUS_ELAP_CODE' },
            { key: 'Combo_보정표_주거용_접한도로의폭', value: 'GEN_ADJ_ROAD' },
            { key: 'Combo_보정표_주거용_입지조건', value: 'GEN_CONV_LOCATED' },
            { key: 'Combo_보정표_주거용_경과년도', value: 'GEN_ELAP_CODE' },
            { key: 'Combo_보정표_주거용_토지의면적', value: 'GEN_LAND_CODE' },
            { key: 'Combo_보정표_공유지분', value: 'GEN_PUBL_CODE' },
            { key: 'Edit_보정표_단독주택_접한도로폭_적용률', value: 'DET_ADJ_RATE' },
            { key: 'Edit_보정표_단독주택_경과년도_적용률', value: 'DET_ELAP_RATE' },
            { key: 'Edit_보정표_단독주택_대지의면적_적용률', value: 'DET_PLOT_RATE' },
            { key: 'Edit_보정표_상업용_접한도로폭_적용률', value: 'BUS_ADJ_RATE' },
            { key: 'Edit_보정표_상업용_주변상권_적용률', value: 'BUS_COMM_RATE' },
            { key: 'Edit_보정표_상업용_경과년도_적용률', value: 'BUS_ELAP_RATE' },
            { key: 'Edit_보정표_상업용_토지의형상_적용률', value: 'BUS_SHAPE_RATE' },
            { key: 'Edit_보정표_주거용_접한도로의폭_적용률', value: 'GEN_ADJ_RATE' },
            { key: 'Edit_보정표_주거용_입지조건_적용률', value: 'GEN_CONV_RATE' },
            { key: 'Edit_보정표_주거용_경과년도_적용률', value: 'GEN_ELAP_RATE' },
            { key: 'Edit_보정표_주거용_토지의면적_적용률', value: 'GEN_LAND_RATE' },
            { key: 'Edit_보정표_공유지분_적용률', value: 'GEN_PUBL_RATE' },
            { key: 'Edit_보정표_점유자형태_적용률', value: 'RIGHTS_RATE' },
            { key: 'Combo_보정표_법정지상권_존속기간', value: 'DOMAIN_DAYS' },
            { key: 'Edit_배당표_총예상낙찰가', value: 'PL_BID_AMT' }
        ]);


        MC_수익_조회();


        RunQuery('Q_배당표M', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        GetZoonData('Q_배당표M').GetRow(0, [
            { key: 'Combo_배당표_최고채권액', value: 'AUCTION_CODE' },
            { key: 'Edit_배당표_경매비용', value: 'AUCTION_AMT' },
            { key: 'Edit_배당표_예상낙찰가', value: 'H_PL_BID_AMT' },
            { key: 'Combo_배당표_가임대보증금적용범위', value: 'H_POSS_A_AREA' },
            { key: 'Edit_배당표_적용할주택가임대보증금액', value: 'H_POSS_A_AMT' },
            { key: 'Edit_배당표_경락가액', value: 'H_POSS_AMT' },
            { key: 'Edit_배당표_상가_예상낙찰가', value: 'B_PL_BID_AMT' },
            { key: 'Edit_배당표_상가_경락가액', value: 'B_POSS_AMT' },
            { key: 'Edit_배당표_적용할상가가임대보증금액', value: 'B_POSS_A_AMT' },
            { key: 'Combo_배당표_상가_가임대보증금적용대상', value: 'B_LEASE_CASE' },
            { key: 'Combo_배당표_상가_임대차보호법', value: 'B_LEASE_AREA' },
            { key: 'Combo_배당표_상가_가임대보증금_적용범위', value: 'B_POSS_A_AREA' },
            { key: 'Combo_배당표_가임대보증금적용대상', value: 'H_POSS_A_CASE' },
            { key: 'Edit_배당표_최고채권액', value: 'CRED_MAX_AMT' }
        ]);


        RunQuery('Q_배당표_주택임차보증금_계산', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_상가임차보증금_계산', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금_계산M', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금_계산D', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        MC_배당표_배당금_RowChange();


        RunQuery('Q_배당표_배당금건물_계산M', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_배당표_배당금건물_계산D', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        MC_배당표_배당금건물_RowChange();


        RunQuery('Q_문서관리_사진', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        RunQuery('Q_문서관리_관련문서', {
            '년도': GetValue('년도'),
            '감정순번': GetValue('감정순번')
        }, 'GET');


        MC_공통보고서_조회();


        MC_Combo_사례번호();


        MC_Combo_일단지구분();


        MC_Combo_표준지();


        MC_토지의표시_전체합계();


        SetValue('00_TNUM', 0);

        SetValue('01_TNUM', 0);


        GetComponent('DBGrid_건물의표시').GetRows("", [
            { key: '00_TNUM', value: 'CB_SIZE' },
            { key: '01_TNUM', value: 'CB_SIZE_PY' }
        ]);


        SetValue('Edit_건물의표시_합계_면적', Sum('00_TNUM'));


        SetValue('Edit_건물의표시_합계_면적_평', Sum('01_TNUM'));


        EmptyArray('00_TNUM')
        EmptyArray('01_TNUM')


        MC_건물단가_항목변경();


        MC_보정표_감정가격산출내역_합계();


        MC_보정표_평가가격();


        MC_탁상감정_조회();


        if (true) {
            return false;
        }
        
        if (GetValue('_권한') == "W" && isEmpty(GetValue('Edit_감정자사번'))) {
            SetValue('Edit_감정자사번', GetValue('_사원번호'))
            SetValue('Edit_감정자', RPad(GetValue('_부서명'),20," ")+RPad(GetValue('_직위'),20," ")+GetValue('_사원명'))
        }
    },

    OnBefore : function() {
        RunQuery('Q_사업부문', {}, 'GET');
        RunQuery('Q_코드_담보종류', {}, 'GET');
        RunQuery('Q_링크사이트', {}, 'GET');
        RunQuery('Q_00_도로조건', {}, 'GET');
        RunQuery('Q_00_도로계통성', {}, 'GET');
        RunQuery('Q_00_공공시설접근성', {}, 'GET');
        RunQuery('Q_00_상업시설접근성', {}, 'GET');
        RunQuery('Q_00_가격동향', {}, 'GET');
    },

    OnAfter : function () {
        GetComponent('Command_저장').updateOptions({ isShow : GetString('isReadOnly') == 'N'});
        GetComponent('Command_배당처리').updateOptions({ isShow : GetString('isReadOnly') == 'N'});
        GetComponent('Edit_건물단가_적용보정률_사유').updateOptions({ isShow: true, isEnable: !(GetValue('Edit_건물단가_적용보정률') == '1.00')});
        GetComponent('Picture_전감정사항비교표').updateOptions({ isShow: (GetValue('버튼_전감정사항비교표') == 'Y'), isEnable: true});
        GetComponent('Picture95').updateOptions({ isShow: (GetValue('01_배당자료수정가능여부') == 'Y'), isEnable: true});
        GetComponent('Picture91').updateOptions({ isShow: (GetValue('응찰_입력표활성여부') == 'Y'), isEnable: true});


        if (GetNumber('Edit_보정표_법정지상권_적용률') < 1) {
            $('#table19').show();
        } else {
            $('#table19').hide();
        }

        MC_보정표_예상낙찰가();

        MC_Combo_그리드_사용불가();

        if (isEmpty(GetValue('감정순번'))) {
            SetValue('Edit_채무자와담보제공자의관계', '채무자 본인')
        }
    },

    OnClose : function() {

    },

    OnRMouseDown : function() {

    },

    OnError : function() {

    }
}
