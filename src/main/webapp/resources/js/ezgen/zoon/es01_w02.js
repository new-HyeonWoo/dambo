

const pageZoon = {

    OnInitialize : function() {

        const Check_전체선택 = new Check('Check_전체선택', new JsonZoonData('Check_전체선택', { value: 'A' }), {
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('전체선택여부', GetValue('Check_전체선택'));
                    RunQuery('Q_영업감정요청자료', {
                        '전체선택여부': GetValue('전체선택여부')
                    }, 'GET');
                }
            });

        // Combo ---------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        const Q_도로명주소_시군구 = new JsonZoonData('Q_도로명주소_시군구', {});
        const Combo_도로주소_시군구 = new Combo('Combo_도로주소_시군구', Q_도로명주소_시군구, {
            isShow : true,
            isEnable : true,
            format : {
                text : 'TEXT',
                value : 'CODE',
                index : '',
            }
        });

        const Q_도로명주소_시도 = new JsonZoonData('Q_도로명주소_시도', {});
        const Combo_도로주소_시도 = new Combo('Combo_도로주소_시도', Q_도로명주소_시도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'TEXT',
                value : 'CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    // RunQuery('Q_도로명주소_시군구', {
                    //     'CITY': GetValue('CITY')
                    // }, 'GET');
                    // GetComponent('Combo_도로주소_시군구').SetCurSel(0);
                }
            });

        const Q_링크사이트 = new JsonZoonData('Q_링크사이트', {});
        const Combo_링크사이트 = new Combo('Combo_링크사이트', Q_링크사이트,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'ATTR_01',
                index : '',
            }
        })
            .on({
                change : function() {
                    Hyperlink(GetString('Combo_링크사이트'), '링크사이트');
                }
            });

        const Q_코드_가임대보증금적용지역 = new JsonZoonData('Q_코드_가임대보증금적용지역', {});
        const Combo_배당표_가임대보증금적용범위 = new Combo("Combo_배당표_가임대보증금적용범위", Q_코드_가임대보증금적용지역,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_배당표_가임대보증금적용범위');
                    });
                    GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetNumber('배당표_주택임대차보증금_RowPosition'), [
                        { key: 'Edit_배당표_적용할주택가임대보증금액', value: 'ATTR_02'}
                    ]);

                    MC_999_배당표_주택임대차보증금_계산_전체();
                    MC_999_배당표_배당금_기본항목자동설정();
                }
            });

        const Combo_가임대보증금적용지역 = new Combo('Combo_가임대보증금적용지역', Q_코드_가임대보증금적용지역,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function() {
                    SetValue('Combo_배당표_가임대보증금적용범위',GetValue('Combo_가임대보증금적용지역'));

                    GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_배당표_가임대보증금적용범위');
                    });
                    GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetNumber('배당표_주택임대차보증금_RowPosition'), [
                        { key: 'Edit_배당표_적용할주택가임대보증금액', value: 'ATTR_02'}
                    ]);

                    MC_배당표_주택임대차보증금_계산_전체();
                    MC_배당표_배당금_기본항목자동설정();
                }
            });


        const Q_코드_가임대보증금적용범위_상가 = new JsonZoonData('Q_코드_가임대보증금적용범위_상가', {});
        const Combo_배당표_상가_가임대보증금_적용범위 = new Combo('Combo_배당표_상가_가임대보증금_적용범위', Q_코드_가임대보증금적용범위_상가,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function() {
                    if (GetValue('Combo_배당표_가임대보증금적용범위') == GetValue('Combo_배당표_상가_가임대보증금_적용범위')) {
                        SetValue('Edit_배당표_적용할상가가임대보증금액', GetValue('Combo_배당표_가임대보증금적용범위'))
                    }

                    GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_배당표_상가_가임대보증금_적용범위');
                    });

                    GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetNumber('배당표_상가_RowPosition'), [
                        { key: 'Edit_배당표_적용할상가가임대보증금액', value: 'ATTR_02'},
                        { key: 'Edit_배당표_상가_가임대보증금_적용범위', value: 'ATTR_04'}
                    ]);

                    MC_배당표_상가임대차보증금_계산_전체();

                    if (match(PageType.집합_상업용)) {
                        MC_999_배당표_배당금_기본항목자동설정();
                    } else if (match(PageType.집합_오피스텔)) {
                        MC_배당표_배당금_기본항목자동설정();
                    }
                }
            });

        const Q_코드_최고채권액 = new JsonZoonData('Q_코드_최고채권액', {});
        const Combo_배당표_최고채권액 = new Combo('Combo_배당표_최고채권액', Q_코드_최고채권액,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function() {
                    GetZoonData('Q_코드_최고채권액').FindIndex('Combo_Idx', (row) => {
                        return row['CD_CODE'] == GetString('Combo_배당표_최고채권액');
                    });
                    GetZoonData('Q_코드_최고채권액').GetRow(GetNumber('Combo_Idx'), [
                        { key: 'Edit_배당표_경매비용', value: 'ATTR_02'}
                    ]);

                    if (match(PageType.집합_상업용)) {
                        SetValue('Edit_건물단가_총단가조정지수',GetNumber('Edit_건물단가_중개축여부_적용지수') * GetNumber('Edit_건물단가_관리상태_적용지수'));
                        MC_배당표_상가임대차보증금_계산_전체();
                        MC_999_배당표_배당금_기본항목자동설정();
                    } else if (match(PageType.집합_오피스텔)) {
                        SetValue('Edit_배당표_경락가액', 0);
                        SetValue('Edit_배당표_예상낙찰가', 0);
                        SetValue('Edit_배당표_예상낙찰가', 0);
                        SetValue('Edit_배당표_상가_경락가액', 0);
                        SetValue('Edit_배당표_상가_예상낙찰가', 0);

                        // IfMacro
                        if (GetValue('Combo_입력표_용도') == 1) {
                            MC_999_배당표_주택임대차보증금_계산_전체();
                        } else if (GetValue('Combo_입력표_용도') == 2) {
                            MC_배당표_상가임대차보증금_계산_전체();
                        }
                        MC_999_배당표_배당금_기본항목자동설정();
                        // BreakMacro
                        // SetValue('Edit_건물단가_총단가조정지수', GetNumber('Edit_건물단가_중개축여부_적용지수') * GetNumber('Edit_건물단가_관리상태_적용지수'));
                    } else if (match(PageType.집합_아파트)) {
                        SetValue('Edit_건물단가_총단가조정지수',GetNumber('Edit_건물단가_중개축여부_적용지수') * GetNumber('Edit_건물단가_관리상태_적용지수'));
                        MC_배당표_주택임대차보증금_계산_전체();
                        MC_배당표_배당금_기본항목자동설정();

                    }
                }
            });

        const Q_99_평가구분 = new JsonZoonData('Q_99_평가구분', {});
        const Combo_보고서_평가구분 = new Combo('Combo_보고서_평가구분', Q_99_평가구분,{
            isShow : true,
            isEnable : GetString('_관리부서') == 'Y',
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_00_건축물의경과년도 = new JsonZoonData('Q_00_건축물의경과년도', {});
        const Combo_보정표_건축물경과년도 = new Combo('Combo_보정표_건축물경과년도', Q_00_건축물의경과년도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function () {
                    GetZoonData('Q_00_건축물의경과년도').FindIndex('IDX_보정표_건축물의경과년도', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_건축물경과년도');
                    });
                    GetZoonData('Q_00_건축물의경과년도').GetRow(GetNumber('IDX_보정표_건축물의경과년도'), [
                        { key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'IDX'}
                    ]);

                    RunButton('Command_적용할낙찰가율');
                }
            });

        const 보정표_Combo_건축물의경과년도 = new Combo('보정표_Combo_건축물의경과년도', Q_00_건축물의경과년도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function () {
                    GetZoonData('Q_00_건축물의경과년도').FindIndex('IDX_보정표_건축물의경과년도', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_건축물경과년도');
                    });
                    GetZoonData('Q_00_건축물의경과년도').GetRow(GetNumber('IDX_보정표_건축물의경과년도'), [
                        { key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'IDX'}
                    ]);

                    RunButton('Command_적용할낙찰가율');
                }
            });

        // -- 재확인 필요
        const Q_00_입지조건 = new JsonZoonData('Q_00_입지조건', {});
        const Combo_보정표_입지조건 = new Combo('Combo_보정표_입지조건', Q_00_입지조건,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    MC_501_Combo_OnChange_입지조건();
                }
            });
        const 보정표_Combo_전유부분의면적 = new Combo('보정표_Combo_전유부분의면적', Q_00_입지조건,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    MC_501_Combo_OnChange_입지조건();
                }
            });

        const Q_00_전유부분의면적 = new JsonZoonData('Q_00_전유부분의면적', {});
        const Combo_보정표_전유부분의면적 = new Combo('Combo_보정표_전유부분의면적', Q_00_전유부분의면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    MC_501_Combo_OnChange_전유부분면적();
                }
            });

        const Q_00_전유부분의위치 = new JsonZoonData('Q_00_전유부분의위치', {});
        const Combo_보정표_전유부분의위치 = new Combo('Combo_보정표_전유부분의위치', Q_00_전유부분의위치,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    MC_501_Combo_OnChange_전유부분위치();
                }
            });
        const 보정표_Combo_총층수중전유부분의위치 = new Combo('보정표_Combo_총층수중전유부분의위치', Q_00_전유부분의위치,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    MC_501_Combo_OnChange_전유부분위치();
                }
            });

        const 보정표_Combo_접한도로의폭 = new Combo('보정표_Combo_접한도로의폭', Q_00_전유부분의위치,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    MC_501_Combo_OnChange_전유부분위치();
                }
            });

        const Q_00_상가의접근성 = new JsonZoonData('Q_00_상가의접근성', {});
        const Combo_보정표_상가의접근성 = new Combo('Combo_보정표_상가의접근성', Q_00_상가의접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function () {
                    MC_501_Combo_OnChange_상가의접근성();
                }
            });

        const Q_00_상가의층별위치 = new JsonZoonData('Q_00_상가의층별위치', {});
        const Combo_보정표_상가의층별위치 = new Combo('Combo_보정표_상가의층별위치', Q_00_상가의층별위치,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function () {
                    MC_501_Combo_OnChange_상가의층별위치();
                }
            });

        const Q_00_상권의발달정도 = new JsonZoonData('Q_00_상권의발달정도', {});
        const Combo_보정표_상권의발달정도 = new Combo('Combo_보정표_상권의발달정도', Q_00_상권의발달정도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function () {
                    MC_501_Combo_OnChange_상권의발달정도();
                }
            });

        const Q_00_점유자의형태 = new JsonZoonData('Q_00_점유자의형태', {});
        const Combo_보정표_점유자의권리형태 = new Combo('Combo_보정표_점유자의권리형태', Q_00_점유자의형태,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function () {
                    GetZoonData('Q_00_점유자의형태').FindIndex('IDX_보정표_점유자의형태', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_점유자의권리형태');
                    });
                    GetZoonData('Q_00_점유자의형태').GetRow(GetNumber('IDX_보정표_점유자의형태'), [
                        { key: 'MkEdit_보정표_점유자의권리형태_적용율', value: 'IDX'}
                    ]);

                    RunButton('Command_적용할낙찰가율');
                }
            });

        const 보정표_Combo_점유자의권리형태 = new Combo('보정표_Combo_점유자의권리형태', Q_00_점유자의형태,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function () {
                    GetZoonData('Q_00_점유자의형태').FindIndex('IDX_보정표_점유자의형태', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_점유자의권리형태');
                    });
                    GetZoonData('Q_00_점유자의형태').GetRow(GetNumber('IDX_보정표_점유자의형태'), [
                        { key: 'MkEdit_보정표_점유자의권리형태_적용율', value: 'IDX'}
                    ]);

                    RunButton('Command_적용할낙찰가율');
                }
            });

        const Q_점유자의형태 = new JsonZoonData('Q_점유자의형태', {});
        const Combo_점유자의권리형태 = new Combo('Combo_점유자의권리형태', Q_점유자의형태,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
        .on({
            change: function() {
                GetZoonData('Q_점유자의형태').FindIndex('점유자의권리형태_Idx', (row) => {
                    return row['CD_CODE'] == GetValue('Combo_점유자의권리형태');
                });
                GetZoonData('Q_점유자의형태').GetRow(GetNumber('점유자의권리형태_Idx'), [
                    { key: 'MkEdit_보정표_점유자의권리형태', value: 'IDX' },
                ]);

                RunButton('Command_적용할낙찰가율');

                MC_배당표_주택임대차보증금_계산_전체();
            }
        });

        const Q_00_도로조건 = new JsonZoonData('Q_00_도로조건', {});
        const Combo_비준_도로조건_본건 = new Combo('Combo_비준_도로조건_본건', Q_00_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function () {
                    if (match(PageType.집합_오피스텔)) {
                        SetValue('Combo_입지특성_도로조건', GetValue('Combo_입력표_도로조건'));
                    }
                }
            });

        const Combo_비준_도로조건_사례 = new Combo('Combo_비준_도로조건_사례', Q_00_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_DUAL_비준_사례구분 = new JsonZoonData('Q_DUAL_비준_사례구분', {});
        const Combo_비준_사례구분 = new Combo('Combo_비준_사례구분', Q_DUAL_비준_사례구분,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    RunButton('Command_비준_사례번호생성');
                }
            });

        const 비준_Combo_사례구분 = new Combo('비준_Combo_사례구분', Q_DUAL_비준_사례구분,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    RunButton('Command_비준_사례번호생성');
                }
            });

        // TODO: 사용자 정의 콤보. 확인필요
        const Combo_비준_사례번호 = new Combo('Combo_비준_사례번호', new JsonZoonData('Combo_비준_사례번호', {}),{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    MC_302_비준가격_Change_1_본건();
                    GetComponent('Combo_비준_사례번호').GetWindowText('감정가_비준_사례번호명');
                }
            });

        // TODO: 사용자 정의 콤보. 확인필요
        const 비준_Combo_사례번호 = new Combo('비준_Combo_사례번호', new JsonZoonData('비준_Combo_사례번호', {}),{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('비준_Combo_사례구분').GetWindowText('감정가_비준_사례번호명');

                }
            });

        const Q_00_위치별 = new JsonZoonData('Q_00_위치별', {});
        const Combo_비준_위치_본건 = new Combo('Combo_비준_위치_본건', Q_00_위치별,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Combo_비준_위치_사례 = new Combo('Combo_비준_위치_사례', Q_00_위치별,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_00_접근조건 = new JsonZoonData('Q_00_접근조건', {});
        const Combo_비준_접근조건_본건 = new Combo('Combo_비준_접근조건_본건', Q_00_접근조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Combo_비준_접근조건_사례 = new Combo('Combo_비준_접근조건_사례', Q_00_접근조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_00_층별비교 = new JsonZoonData('Q_00_층별비교', {});
        const Combo_비준_층별_본건 = new Combo('Combo_비준_층별_본건', Q_00_층별비교,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_층별비교').FindIndex('IDX_TEMP', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준_층별_본건');
                    });
                    GetZoonData('Q_00_층별비교').GetRow(GetNumber('IDX_TEMP'), [
                        { key: 'MkEdit_비준_층별지수_본건', value: 'IDX'}
                    ]);

                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const 비준_Combo_층별비교_본건 = new Combo('비준_Combo_층별비교_본건', Q_00_층별비교,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_층별비교').FindIndex('IDX_TEMP', (row) => {
                        return row['CD_CODE'] == GetString('비준_Combo_층별비교_본건');
                    });
                    GetZoonData('Q_00_층별비교').GetRow(GetNumber('IDX_TEMP'), [
                        { key: 'MkEdit_비준_층별지수_본건', value: 'IDX'}
                    ]);

                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const Combo_비준_층별_사례 = new Combo('Combo_비준_층별_사례',
            match(PageType.집합_상업용) ? Q_00_층별비교 :
                match(PageType.집합_오피스텔) ? Q_00_전유부분의위치 : new JsonZoonData('Combo_비준_층별_사례', {}),{
                isShow : true,
                isEnable : false,
                format : {
                    text : 'CD_DESC',
                    value : 'CD_CODE',
                    index : '',
                }
            })
            .on({
                change: function() {
                    // BreakMacro [#PrintYesNo]

                    GetZoonData('Q_00_층별비교').FindIndex('IDX_TEMP', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준_층별_사례');
                    });
                    GetZoonData('Q_00_층별비교').GetRow(GetNumber('IDX_TEMP'), [
                        { key: 'MkEdit_비준_층별지수_사례', value: 'IDX'}
                    ]);

                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const 비준_Combo_층별비교_사례 = new Combo('비준_Combo_층별비교_사례',
            match(PageType.집합_상업용) ? Q_00_층별비교 :
                match(PageType.집합_오피스텔) ? Q_00_전유부분의위치 : new JsonZoonData('비준_Combo_층별비교_사례', {}),{
                isShow : true,
                isEnable : false,
                format : {
                    text : 'CD_DESC',
                    value : 'CD_CODE',
                    index : '',
                }
            })
            .on({
                change: function() {
                    // BreakMacro [#PrintYesNo]

                    GetZoonData('Q_00_층별비교').FindIndex('IDX_TEMP', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준_층별_사례');
                    });
                    GetZoonData('Q_00_층별비교').GetRow(GetNumber('IDX_TEMP'), [
                        { key: 'MkEdit_비준_층별지수_사례', value: 'IDX'}
                    ]);

                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const Q_사업부문 = new JsonZoonData('Q_사업부문', {});
        const Combo_사업부문 = new Combo('Combo_사업부문', Q_사업부문,{
            isShow : true,
            isEnable : false,
            format : {
                text : '사업부문명',
                value : '사업부문',
                index : '',
            }
        });

        const Q_00_가임대보증금적용지역 = new JsonZoonData('Q_00_가임대보증금적용지역', {});
        const Combo_입력표_가임대보증금적용지역 = new Combo('Combo_입력표_가임대보증금적용지역', Q_00_가임대보증금적용지역,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    if (match(PageType.집합_상업용)) {
                        SetValue('Combo_배당표_상가_가임대보증금_적용범위','Combo_입력표_가임대보증금적용지역');

                        GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {
                            return row['CD_CODE'] == GetString('Combo_배당표_상가_가임대보증금_적용범위');
                        });
                        GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetNumber('배당표_주택임대차보증금_RowPosition'), [
                            { key: 'Edit_배당표_적용할상가가임대보증금액', value: 'ATTR_02'}
                        ]);

                        MC_배당표_상가임대차보증금_계산_전체();
                        MC_999_배당표_배당금_기본항목자동설정();

                    } else if (match(PageType.집합_오피스텔)) {
                        GetZoonData('Q_00_가임대보증금적용지역').FindIndex('00_NUMBER', (row) => {
                            return row['CD_CODE'] == GetString('Combo_입력표_가임대보증금적용지역');
                        });
                        GetZoonData('Q_00_가임대보증금적용지역').GetRow(GetNumber('00_NUMBER'), [
                            { key: 'Combo_입력표_용도', value: '이용상황'}
                        ]);

                        GetComponent('Combo_배당표_가임대보증금적용범위').SetCurSel(-1);
                        GetComponent('Combo_배당표_상가_가임대보증금_적용범위').SetCurSel(-1);
                        // SetMultiValue
                        SetValue('Edit_배당표_적용할상가가임대보증금액', 0);
                        SetValue('Edit_배당표_적용할주택가임대보증금액', 0);
                        SetValue('Edit_배당표_경락가액', 0);
                        SetValue('Edit_배당표_예상낙찰가', 0);
                        SetValue('Edit_배당표_상가_경락가액', 0);
                        SetValue('Edit_배당표_상가_예상낙찰가', 0);

                        // IfMacro
                        if (GetValue('Combo_입력표_용도') == 1) {
                            SetValue('Combo_배당표_가임대보증금적용범위', GetValue('배당표_주택임대차보증금_RowPosition'));

                            GetZoonData('Q_코드_가임대보증금적용지역').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {
                                return row['CD_CODE'] == GetString('Combo_배당표_가임대보증금적용범위');
                            });
                            GetZoonData('Q_코드_가임대보증금적용지역').GetRow(GetNumber('배당표_주택임대차보증금_RowPosition'), [
                                { key: 'Edit_배당표_적용할주택가임대보증금액', value: 'ATTR_02'}
                            ]);

                            MC_999_배당표_주택임대차보증금_계산_전체();
                        } else if (GetValue('Combo_입력표_용도') == 2) {
                            SetValue('Combo_배당표_상가_가임대보증금_적용범위', GetValue('Combo_입력표_가임대보증금적용지역'));

                            GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_주택임대차보증금_RowPosition', (row) => {
                                return row['CD_CODE'] == GetString('Combo_배당표_상가_가임대보증금_적용범위');
                            });
                            GetZoonData('Q_코드_가임대보증금적용범위_상가').GetRow(GetNumber('배당표_주택임대차보증금_RowPosition'), [
                                { key: 'Edit_배당표_적용할상가가임대보증금액', value: 'ATTR_02'}
                            ]);

                            MC_배당표_상가임대차보증금_계산_전체();
                        }
                        MC_999_배당표_배당금_기본항목자동설정();
                        // BreakMacro
                    }
                }
            });

        const Q_00_구조 = new JsonZoonData('Q_00_구조', {});
        const Combo_입력표_구조 = new Combo('Combo_입력표_구조', Q_00_구조,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_구조').FindIndex('00_NUMBER', (row) => {
                        return row['CD_CODE'] == GetString('Combo_입력표_구조');
                    });
                    GetZoonData('Q_00_구조').GetRow(GetNumber('00_NUMBER'), [
                        { key: 'MkEdit_입력표_내용연수', value: 'NUM_YEAR'}
                    ]);

                    SetValue('02_잔가율구분', '입력표');
                    MC_003_계산_잔가율();
                }
            });
        const Q_구조 = new JsonZoonData('Q_구조', {});
        const Combo_구조 = new Combo('Combo_구조', Q_구조,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })


        const Combo_입력표_도로조건 = new Combo('Combo_입력표_도로조건', Q_00_도로조건,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    SetValue('Combo_입지특성_도로조건', GetValue('Combo_입력표_도로조건'));

                    GetZoonData('Q_00_도로조건').FindIndex('IDX_입력표_도로조건', (row) => {
                        return row['CD_CODE'] == GetString('Combo_입력표_도로조건');
                    });
                    GetZoonData('Q_00_도로조건').GetRow(GetNumber('IDX_입력표_도로조건'), [
                        { key: 'MkEdit_입력표_도로조건지수', value: 'IDX'}
                    ]);

                    if (match(PageType.집합_오피스텔)) {
                        SetValue('본건_Combo_도로조건', GetValue('Combo_입력표_도로조건'));
                    }
                }
            });

        const Q_DUAL_여부 = new JsonZoonData('Q_DUAL_여부', {});
        const Combo_입력표_바닥난방 = new Combo('Combo_입력표_바닥난방', Q_DUAL_여부,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const 입력표_업소구분 = new JsonZoonData('입력표_업소구분', [
            {'CD_CODE': '1', 'CD_DESC':'업소'},
            {'CD_CODE': '0', 'CD_DESC':'자체'}
        ]);
        const Combo_입력표_업소구분 = new Combo('Combo_입력표_업소구분', 입력표_업소구분,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    console.log('sadsadsad');
                    if(match(PageType.집합_아파트)){
                        if (GetString('Combo_입력표_업소구분') == "0") {
                            GetComponent('Edit_업소명').SetReadOnly(1);
                            SetValue('Edit_업소명', '자체');
                            GetComponent('Edit_업소대표자').SetReadOnly(1);
                            SetValue('Edit_업소대표자', GetValue('Edit_대표자'));
                            SetFocus('Edit_채무자');
                        } else if (GetString('Combo_입력표_업소구분') == "1") {
                            GetComponent('Edit_업소명').SetReadOnly(0);
                            GetComponent('Edit_업소대표자').SetReadOnly(0);
                            SetValue('Edit_업소명', '');
                            SetValue('Edit_업소대표자', '');
                            SetFocus('Edit_업소명');
                        } else if (isEmpty(GetString('Combo_입력표_업소구분'))) {
                            GetComponent('Edit_업소명').SetReadOnly(0);
                            GetComponent('Edit_업소대표자').SetReadOnly(0);
                            GetComponent('Combo_입력표_업소구분').SetCurSel(0);
                            SetValue('Edit_업소명', '');
                            SetValue('Edit_업소대표자', '');
                            SetFocus('Edit_업소명');
                        }
                    }else if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
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
                    }
                }
            });

        const Q_DUAL_이용상황 = new JsonZoonData('Q_DUAL_이용상황', {});
        const Combo_입력표_용도 = new Combo('Combo_입력표_용도', Q_DUAL_이용상황,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Combo_입력표_위치 = new Combo('Combo_입력표_위치', Q_00_위치별,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_위치별').FindIndex('IDX_입력표_위치', (row) => {
                        return row['CD_CODE'] == GetString('Combo_입력표_위치');
                    });
                    GetZoonData('Q_00_위치별').GetRow(GetNumber('IDX_입력표_위치'), [
                        { key: 'MkEdit_입력표_위치지수', value: 'IDX'}
                    ]);

                    SetValue('본건_Combo_위치', GetValue('Combo_입력표_위치'));
                }
            });

        const Combo_입력표_접근조건 = new Combo('Combo_입력표_접근조건', Q_00_접근조건,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_접근조건').FindIndex('IDX_입력표_접근조건', (row) => {
                        return row['CD_CODE'] == GetString('Combo_입력표_접근조건');
                    });
                    GetZoonData('Q_00_접근조건').GetRow(GetNumber('IDX_입력표_접근조건'), [
                        { key: 'MkEdit_입력표_접근조건지수', value: 'IDX'}
                    ]);

                    SetValue('본건_Combo_접근조건', GetValue('Combo_입력표_접근조건'));
                }
            });

        const Q_00_지목 = new JsonZoonData('Q_00_지목', {});
        const Combo_입력표_지목 = new Combo('Combo_입력표_지목', Q_00_지목,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'BUHO',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_00_지붕 = new JsonZoonData('Q_00_지붕', {});
        const Combo_입력표_지붕 = new Combo('Combo_입력표_지붕', Q_00_지붕,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_00_전유부분의위치_총층수만 = new JsonZoonData('Q_00_전유부분의위치_총층수만', {});
        const Combo_입력표_총층수 = new Combo('Combo_입력표_총층수', Q_00_전유부분의위치_총층수만,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    RunQuery('Q_00_전유부분의위치_총층수중해당층', {
                        '총층수' : GetValue('Combo_입력표_총층수')
                    }, 'GET');

                    SetValue('MkEdit_입력표_층별코드', '');
                    SetValue('MkEdit_입력표_층별지수', 0);
                    SetValue('MkEdit_보정표_전유부분위치_등급', '');
                    SetValue('MkEdit_보정표_전유부분위치_적용율', 1);
                    SetValue('Edit_보정표_전유부분위치', '');
                    SetValue('Combo_보정표_전유부분의위치', "000000");
                    SetValue('Edit_입력표_지상', GetValue('Combo_입력표_총층수'));
                }
            });


        const Q_00_전유부분의위치_총층수중해당층 = new JsonZoonData('Q_00_전유부분의위치_총층수중해당층', {});
        const Combo_입력표_해당층 = new Combo('Combo_입력표_해당층', Q_00_전유부분의위치_총층수중해당층,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        }).on({
                change: function() {
                    if (match(PageType.집합_상업용)) {
                        GetZoonData('Q_00_전유부분의위치_총층수중해당층').FindIndex('IDX_입력표_해당층', (row) => {
                            return row['CD_CODE'] == GetString('Combo_입력표_해당층');
                        });

                        GetZoonData('Q_00_전유부분의위치_총층수중해당층').GetRow(GetNumber('IDX_입력표_해당층'), [
                            { key: 'MkEdit_입력표_층별코드', value: 'CD_CODE'},
                            { key: 'MkEdit_입력표_층별지수', value: 'IDX'}
                        ]);

                        SetValue('00_TEMP', Right(GetString('MkEdit_입력표_층별코드'),3));

                        if (Left(GetString('00_TEMP'), 1) == "B") {
                            SetValue('00_NUMBER', Right(GetString('00_TEMP'), 2));
                            SetValue('00_NUMBER',GetValue('00_NUMBER') * (-1));
                        } else {
                            SetValue('00_NUMBER', StrToNum(GetValue('00_TEMP')));
                        }

                        SetValue('Edit_입력표_해당층', GetValue('00_NUMBER'));

                        RunQuery('Q_00_상가의층별위치_코드찾기', {
                            '해당층': GetValue('Edit_입력표_해당층')
                        }, 'GET');

                        GetZoonData('Q_00_상가의층별위치_코드찾기').FindIndex('IDX_TEMP', (row) => {
                            return row['CD_CODE'] == GetString('00_TEMP');
                        });
                        GetZoonData('Q_00_상가의층별위치_코드찾기').GetRow(GetNumber('IDX_TEMP'), [
                            { key: 'Combo_보정표_상가의층별위치', value: 'CD_CODE'},
                            { key: 'MkEdit_보정표_상가의층별위치_적용율', value: 'IDX'}
                        ]);

                        //BreakMacro [#PrintYesNo]
                    } else if (match(PageType.집합_오피스텔)) {
                        GetZoonData('Q_00_전유부분의위치_총층수중해당층').FindIndex('IDX_입력표_해당층', (row) => {
                            return row['CD_CODE'] == GetString('Combo_입력표_해당층');
                        });

                        GetZoonData('Q_00_전유부분의위치_총층수중해당층').GetRow(GetNumber('IDX_입력표_해당층'), [
                            { key: 'MkEdit_입력표_층별코드', value: 'CD_CODE'},
                            { key: 'MkEdit_입력표_층별지수', value: 'IDX'},
                            { key: 'Edit_보정표_전유부분위치', value: 'CD_DESC1'},
                        ]);
                        // NumToStr(StrToNum(Right([MkEdit_입력표_층별코드],3)))
                        // SetValue('Edit_입력표_해당층', GetValue('MkEdit_입력표_층별코드').substr(-1));
                        SetValue('Edit_입력표_해당층', Right(GetString('MkEdit_입력표_층별코드'), 3));
                    }
                }
            });

        const Q_00_가격동향 = new JsonZoonData('Q_00_가격동향', {});
        const Combo_입지특성_가격동향 = new Combo('Combo_입지특성_가격동향', Q_00_가격동향,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });


        const Q_00_공공시설접근성 = new JsonZoonData('Q_00_공공시설접근성', {});
        const Combo_입지특성_공공시설접근성 = new Combo('Combo_입지특성_공공시설접근성', Q_00_공공시설접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_00_도로계통성 = new JsonZoonData('Q_00_도로계통성', {});
        const Combo_입지특성_도로계통성 = new Combo('Combo_입지특성_도로계통성', Q_00_도로계통성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Combo_입지특성_도로조건 = new Combo('Combo_입지특성_도로조건', Q_00_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    MC_501_Combo_OnChange_상가의접근성();
                }
            });

        const Q_00_상업시설접근성 = new JsonZoonData('Q_00_상업시설접근성', {});
        const Combo_입지특성_상업시설접근성 = new Combo('Combo_입지특성_상업시설접근성', Q_00_상업시설접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_00_담보종류 = new JsonZoonData('Q_00_담보종류', {});
        const Q_집합건물종류 = new JsonZoonData('Q_집합건물종류', {});
        const Combo_집합건물종류 = new Combo('Combo_집합건물종류', match(PageType.집합_아파트) ? Q_집합건물종류 : Q_00_담보종류
            ,{
                isShow : true,
                isEnable : false,
                format : {
                    text : 'CD_DESC',
                    value : 'CD_CODE',
                    index : '',
                }
            })
            .on({
                change: function() {
                    // TODO: 확인필요 오타
                    if (GetString('단위당연간임대료뀺종류') == "101" || GetString('Combo_집합건물종류') == "101") {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계')/1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평')/1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계')/1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평')/1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계')/1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평')/1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계')/1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평')/1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetValue('MkEdit_시가_최저_단가')*1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetValue('MkEdit_시가_최저_평당단가')*1000);
                        SetValue('MkEdit_시가_최고_단가',GetValue('MkEdit_시가_최고_단가')*1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetValue('MkEdit_시가_최고_평당단가')*1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetValue('MkEdit_등기부등본상의시세_단가')*1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetValue('MkEdit_등기부등본상의시세_평당단가')*1000);
                        SetValue('MkEdit_기준시가_단가',GetValue('MkEdit_기준시가_단가')*1000);
                        SetValue('MkEdit_기준시가_평당단가',GetValue('MkEdit_기준시가_평당단가')*1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') /1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평')/1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적')/1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평')/1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적')/1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평')/1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적')/1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평')/1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetValue('MkEdit_시가_최저_단가')*1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetValue('MkEdit_시가_최저_평당단가')*1000);
                        SetValue('MkEdit_시가_최고_단가',GetValue('MkEdit_시가_최고_단가')*1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetValue('MkEdit_시가_최고_평당단가')*1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetValue('MkEdit_등기부등본상의시세_단가')*1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetValue('MkEdit_등기부등본상의시세_평당단가')*1000);
                        SetValue('MkEdit_기준시가_단가',GetValue('MkEdit_기준시가_단가')*1000);
                        SetValue('MkEdit_기준시가_평당단가',GetValue('MkEdit_기준시가_평당단가')*1000);
                    }
                }
            });

        const Q_00_인테리어비용 = new JsonZoonData('Q_00_인테리어비용', {});
        const Combo_평가_인테리어단가 = new Combo('Combo_평가_인테리어단가', Q_00_인테리어비용,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_인테리어비용').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_평가_인테리어단가');
                    });

                    if (match(PageType.집합_아파트)) {
                        GetZoonData('Q_00_인테리어비용').GetRow(GetNumber('00_RowIndex'), [
                            { key: 'MkEdit_보수단가', value: 'AMT'},
                            { key: '01_TNUM', value: 'RATE'}
                        ]);

                        SetValue('MkEdit_보수평형', Round(GetNumber('MkEdit_면적합계')*(GetNumber('01_TNUM')/100), 2));
                        SetValue('MkEdit_보수평형_평', Round(GetNumber('MkEdit_면적합계_평')*(GetNumber('01_TNUM')/100),2));
                        SetValue('MkEdit_보수금액',GetNumber('MkEdit_보수단가')*GetNumber('MkEdit_보수평형_평'));
                        SetValue('MkEdit_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                        SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                        SetValue('MkEdit_감정가_최종평가가격',Round((GetNumber('MkEdit_감정가_평가가격')*(GetNumber('MkEdit_감정가_비율')/100))/1000,0)*1000);
                        SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                        SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                        SetValue('MkEdit_보정표_예상낙찰가', Round((GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)/1000,0)*1000);

                    MC_배당표_주택임대차보증금_계산_전체();
                    }else{
                        GetZoonData('Q_00_인테리어비용').GetRow(GetNumber('00_RowIndex'), [
                            { key: 'MkEdit_평가_인테리어_보수단가', value: 'AMT'},
                            { key: '01_TNUM', value: 'RATE'}
                        ]);

                        SetValue('MkEdit_평가_인테리어_평형_M2', Round(GetValue('MkEdit_입력표_전유면적')*(GetNumber('01_TNUM') / 100), 2) );
                        SetValue('MkEdit_평가_인테리어_평형_평', Round(GetValue('MkEdit_입력표_전유면적_평')*(GetNumber('01_TNUM') / 100),2) );

                        MC_402_평가액_평가액산정();
                    }

                }
            });

        const 평가_Combo_인테리어단가 = new Combo('평가_Combo_인테리어단가', Q_00_인테리어비용,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_인테리어비용').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_평가_인테리어단가');
                    });
                    GetZoonData('Q_00_인테리어비용').GetRow(GetNumber('00_RowIndex'), [
                        { key: 'MkEdit_평가_인테리어_보수단가', value: 'AMT'},
                        { key: '01_TNUM', value: 'RATE'}
                    ]);

                    if (match(PageType.집합_아파트)) {
                        SetValue('MkEdit_보수평형', Round(GetValue('MkEdit_면적합계')*(GetValue('01_TNUM')/100), 2));
                        SetValue('MkEdit_보수평형_평', Round(GetValue('MkEdit_면적합계_평')*(GetValue('01_TNUM')/100),2));
                        SetValue('MkEdit_보수금액',GetNumber('MkEdit_보수단가') * GetNumber('MkEdit_보수평형_평'));
                        SetValue('MkEdit_평가가격',GetNumber('MkEdit_결정가격') + GetNumber('MkEdit_보수금액'));
                        SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격') + GetNumber('MkEdit_보수금액'));
                        SetValue('MkEdit_감정가_최종평가가격',Round((GetValue('MkEdit_감정가_평가가격')*(GetValue('MkEdit_감정가_비율')/100))/1000,0)*1000);
                        SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                        SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                        SetValue('MkEdit_보정표_예상낙찰가', Round((GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율')/100)/1000,0)*1000);

                        MC_배당표_주택임대차보증금_계산_전체();
                    }else{
                        SetValue('MkEdit_평가_인테리어_평형_M2', Round(GetValue('MkEdit_입력표_전유면적')*(GetNumber('01_TNUM') / 100), 2) );
                        SetValue('MkEdit_평가_인테리어_평형_평', Round(GetValue('MkEdit_입력표_전유면적_평')*(GetNumber('01_TNUM') / 100),2) );

                        MC_402_평가액_평가액산정();
                    }

                }
            });

        const Q_코드_상가_가임대보증금 = new JsonZoonData('Q_코드_상가_가임대보증금', {});
        const Combo_가임대보증금_상가 = new Combo('Combo_가임대보증금_상가', Q_코드_상가_가임대보증금,{
            isShow : GetNumber('담보종류') == 201,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    SetValue('Combo_배당표_상가_가임대보증금_적용범위',GetValue('Combo_가임대보증금_상가'));

                    GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_배당표_상가_가임대보증금_적용범위');
                    });

                    GetZoonData('Q_DUAL_경과일수구하기').GetRow(GetNumber('배당표_상가_RowPosition'), [
                        { key: 'Edit_배당표_적용할상가가임대보증금액', value: 'ATTR_02'},
                        { key: 'Edit_배당표_상가_가임대보증금_적용범위', value: 'ATTR_04'},
                    ]);

                    MC_배당표_상가임대차보증금_계산_전체();
                    MC_배당표_배당금_기본항목자동설정();
                }
            });

        const Q_코드_주택_가임대보증금 = new JsonZoonData('Q_코드_주택_가임대보증금', {});
        const Combo_가임대보증금_주택 = new Combo('Combo_가임대보증금_주택', Q_코드_주택_가임대보증금,{
            isShow : GetNumber('담보종류') == 301,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    SetValue('Combo_배당표_상가_가임대보증금_적용범위',GetValue('Combo_가임대보증금_상가'));

                    GetZoonData('Q_코드_가임대보증금적용범위_상가').FindIndex('배당표_상가_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_배당표_상가_가임대보증금_적용범위');
                    });

                    GetZoonData('Q_DUAL_경과일수구하기').GetRow(GetNumber('배당표_상가_RowPosition'), [
                        { key: 'Edit_배당표_적용할주택가임대보증금액', value: 'ATTR_02'},
                    ]);

                    MC_배당표_상가임대차보증금_계산_전체();
                    MC_배당표_배당금_기본항목자동설정();
                }
            });

        const Q_코드_관리상태 = new JsonZoonData('Q_코드_관리상태', {});
        const Combo_건물단가_관리상태_상중하 = new Combo('Combo_건물단가_관리상태_상중하', Q_코드_관리상태,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_관리상태').FindIndex('건물단가_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_건물단가_관리상태_상중하');
                    });

                    GetZoonData('Q_코드_관리상태').GetRow(GetNumber('건물단가_RowPosition'), [
                        { key: 'Edit_건물단가_관리상태_적용지수', value: 'ATTR_08'},
                    ]);

                    SetValue('Edit_건물단가_총단가조정지수',GetNumber('Edit_건물단가_중개축여부_적용지수') * GetNumber('Edit_건물단가_관리상태_적용지수')*GetValue('Edit_건물단가_적용보정률'));

                    MC_건물단가_참조값();
                }
            });


        const 건물단가_부대설비_기타 = new JsonZoonData('YN', [
            { CD_CODE : 'Y', CD_DESC : 'Y'},
            { CD_CODE : 'N', CD_DESC : 'N'},
        ]);
        const Combo_건물단가_부대설비_기타 = new Combo('Combo_건물단가_부대설비_기타', 건물단가_부대설비_기타,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    MC_건물단가_참조값();
                }
            });

        const Q_건축물의경과년도 = new JsonZoonData('Q_건축물의경과년도', {});
        const Combo_건축물경과년도 = new Combo('Combo_건축물경과년도', Q_건축물의경과년도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
        .on({
            change: function() {
                GetZoonData('Q_건축물의경과년도').FindIndex('건축물의경과년도_Idx', (row) => {
                    return row['CD_CODE'] == GetValue('Combo_건축물경과년도');
                });
                GetZoonData('Q_건축물의경과년도').GetRow(GetNumber('건축물의경과년도_Idx'), [
                    { key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'ATTR_08' },
                ]);

                RunButton('Command_적용할낙찰가율');
            }
        });



        const Q_아파트단지규모 = new JsonZoonData('Q_아파트단지규모', {});
        const Combo_아파트단지규모 = new Combo('Combo_아파트단지규모', Q_아파트단지규모,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_아파트단지규모').FindIndex('단지전체규모_Idx', (row) => {
                        return row['CD_CODE'] == GetValue('Combo_아파트단지규모');
                    });
                    GetZoonData('Q_아파트단지규모').GetRow(GetNumber('단지전체규모_Idx'), [
                        { key: 'MkEdit_보정표_아파트단지규모_적용율', value: 'ATTR_08' },
                    ]);

                    RunButton('Command_적용할낙찰가율');
                }
            });

        const Q_전유부분의면적 = new JsonZoonData('Q_전유부분의면적', {});
        const Combo_전유부분의면적 = new Combo('Combo_전유부분의면적', Q_전유부분의면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
        .on({
            change: function() {
                GetZoonData('Q_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                    return row['CD_CODE'] == GetValue('Combo_전유부분의면적');
                });
                GetZoonData('Q_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08' },
                ]);

                RunButton('Command_적용할낙찰가율');
            }
        });

        const Q_전유부분의위치 = new JsonZoonData('Q_전유부분의위치', {});
        const Combo_전유부분의위치 = new Combo('Combo_전유부분의위치', Q_전유부분의위치,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
        .on({
            change: function() {
                GetZoonData('Q_전유부분의위치').FindIndex('전유부분위치_Idx', (row) => {
                    return row['CD_CODE'] == GetValue('Combo_전유부분의위치');
                });
                GetZoonData('Q_전유부분의위치').GetRow(GetNumber('전유부분위치_Idx'), [
                    { key: 'MkEdit_보정표_전유부분위치_적용율', value: 'ATTR_08' },
                ]);

                RunButton('Command_적용할낙찰가율');
            }
        });

        const Q_지목 = new JsonZoonData('Q_지목', {});
        const Combo_지목 = new Combo('Combo_지목', Q_지목,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })

        const Q_지붕 = new JsonZoonData('Q_지붕', {});
        const Combo_지붕 = new Combo('Combo_지붕', Q_지붕,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })

        const Q_코드_고저 = new JsonZoonData('Q_코드_고저', {});
        const Combo_기준가격_본건요인_고저 = new Combo('Combo_기준가격_본건요인_고저', Q_코드_고저,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_UNDUR_CODE_M', value: GetValue('Combo_기준가격_본건요인_고저')}
                    ]);
                }
            });

        const Q_코드_관공서접근성 = new JsonZoonData('Q_코드_관공서접근성', {});
        const Combo_기준가격_본건요인_관공서접근성 = new Combo('Combo_기준가격_본건요인_관공서접근성', Q_코드_관공서접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_M', value: GetValue('Combo_기준가격_본건요인_관공서접근성')}
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_본건요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_관공서_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_표준지요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_관공서_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_기준가격_비교치_관공서접근성', 1 + ( GetNumber('기준가격_관공서_본건')-GetNumber('기준가격_관공서_표준지') ));
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_C', value: GetValue('Edit_기준가격_비교치_관공서접근성')}
                    ]);
                    MC_기준가격_요인합계();
                }
            });


        const Q_코드_도로거리 = new JsonZoonData('Q_코드_도로거리', {});
        const Combo_기준가격_본건요인_도로거리 = new Combo('Combo_기준가격_본건요인_도로거리', Q_코드_관공서접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'ROAD_DIST_M', value: GetValue('Combo_기준가격_본건요인_도로거리')}
                    ]);
                }
            });

        const Q_코드_도로조건 = new JsonZoonData('Q_코드_도로조건', {});
        const Combo_기준가격_본건요인_도로조건 = new Combo('Combo_기준가격_본건요인_도로조건', Q_코드_도로조건,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'ROAD_SIDE_M', value: GetValue('Combo_기준가격_본건요인_도로조건')}
                    ]);
                }
            });

        const Q_코드_도시계획 = new JsonZoonData('Q_코드_도시계획', {});
        const Combo_기준가격_본건요인_도시계획 = new Combo('Combo_기준가격_본건요인_도시계획', Q_코드_도시계획,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'CITY_INFR_M', value: GetValue('Combo_기준가격_본건요인_도시계획')}
                    ]);
                    MC_기준가격_저촉률();
                    MC_기준가격_요인합계();
                }
            });

        const Q_코드_면적 = new JsonZoonData('Q_코드_면적', {});
        const Combo_기준가격_본건요인_면적 = new Combo('Combo_기준가격_본건요인_면적', Q_코드_면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_SIZE_CODE_M', value: GetValue('Combo_기준가격_본건요인_면적')}
                    ]);
                }
            });

        const Q_코드_방위 = new JsonZoonData('Q_코드_방위', {});
        const Combo_기준가격_본건요인_방위 = new Combo('Combo_기준가격_본건요인_방위', Q_코드_방위,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_AZIM_CODE_M', value: GetValue('Combo_기준가격_본건요인_방위')}
                    ]);
                }
            });

        const Q_코드_용도지구 = new JsonZoonData('Q_코드_용도지구', {});
        const Combo_기준가격_본건요인_용도지구 = new Combo('Combo_기준가격_본건요인_용도지구', Q_코드_용도지구,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'USE_DSCT_M', value: GetValue('Combo_기준가격_본건요인_용도지구')}
                    ]);
                }
            });

        const Q_코드_용도지역 = new JsonZoonData('Q_코드_용도지역', {});
        const Combo_기준가격_본건요인_용도지역 = new Combo('Combo_기준가격_본건요인_용도지역', Q_코드_용도지역,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'USE_AREA_M', value: GetValue('Combo_기준가격_본건요인_용도지역')}
                    ]);
                }
            });

        const Q_코드_저촉률 = new JsonZoonData('Q_코드_저촉률', {});
        const Combo_기준가격_본건요인_저촉률 = new Combo('Combo_기준가격_본건요인_저촉률', Q_코드_저촉률,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'LIMIT_AREA_M', value: GetValue('Combo_기준가격_본건요인_저촉률')}
                    ]);
                    MC_기준가격_저촉률();
                    MC_기준가격_요인합계();
                }
            });

        const Q_코드_중심지역접근성 = new JsonZoonData('Q_코드_중심지역접근성', {});
        const Combo_기준가격_본건요인_중심지역접근성 = new Combo('Combo_기준가격_본건요인_중심지역접근성', Q_코드_중심지역접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'CNTR_ACSS_M', value: GetValue('Combo_기준가격_본건요인_중심지역접근성')}
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_본건요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_중심지역_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_표준지요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_중심지역_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_기준가격_비교치_중심지역접근성', 1 + (GetNumber('기준가격_중심지역_본건')-GetNumber('기준가격_중심지역_표준지')));
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'CNTR_ACSS_C', value: GetValue('Edit_기준가격_비교치_중심지역접근성')}
                    ]);
                    MC_기준가격_요인합계();
                }
            });

        const Q_코드_철도 = new JsonZoonData('Q_코드_철도', {});
        const Combo_기준가격_본건요인_철도접근성 = new Combo('Combo_기준가격_본건요인_철도접근성', Q_코드_철도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'RAIL_ACSS_M', value: GetValue('Combo_기준가격_본건요인_철도접근성')}
                    ]);
                }
            });

        const Q_코드_이용현황 = new JsonZoonData('Q_코드_이용현황', {});
        const Combo_기준가격_본건요인_토지이용상황 = new Combo('Combo_기준가격_본건요인_토지이용상황', Q_코드_이용현황,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_OF_GU_M', value: GetValue('Combo_기준가격_본건요인_토지이용상황')}
                    ]);
                }
            });

        const Q_코드_폐기물 = new JsonZoonData('Q_코드_폐기물', {});
        const Combo_기준가격_본건요인_폐기물접근성 = new Combo('Combo_기준가격_본건요인_폐기물접근성', Q_코드_폐기물,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'POLL_ACSS_M', value: GetValue('Combo_기준가격_본건요인_폐기물접근성')}
                    ]);
                }
            });

        const Q_코드_형상 = new JsonZoonData('Q_코드_형상', {});
        const Combo_기준가격_본건요인_형상 = new Combo('Combo_기준가격_본건요인_형상', Q_코드_형상,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_SHAPE_CODE_M', value: GetValue('Combo_기준가격_본건요인_형상')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_고저 = new Combo('Combo_기준가격_표준지요인_고저', Q_코드_고저,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_UNDUR_CODE_S', value: GetValue('Combo_기준가격_표준지요인_고저')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_관공서접근성 = new Combo('Combo_기준가격_표준지요인_관공서접근성', Q_코드_관공서접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_S', value: GetValue('Combo_기준가격_표준지요인_관공서접근성')}
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_본건요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_관공서_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_표준지요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_관공서_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_기준가격_비교치_관공서접근성', 1 + (GetNumber('기준가격_관공서_본건')-GetNumber('기준가격_관공서_표준지')));
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_C', value: GetValue('Edit_기준가격_비교치_관공서접근성')}
                    ]);
                    MC_기준가격_요인합계();
                }
            });

        const Combo_기준가격_표준지요인_도로거리 = new Combo('Combo_기준가격_표준지요인_도로거리', Q_코드_도로거리,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'ROAD_DIST_S', value: GetValue('Combo_기준가격_표준지요인_도로거리')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_도로조건 = new Combo('Combo_기준가격_표준지요인_도로조건', Q_코드_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'ROAD_SIDE_S', value: GetValue('Combo_기준가격_표준지요인_도로조건')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_도시계획 = new Combo('Combo_기준가격_표준지요인_도시계획', Q_코드_도시계획,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'CITY_INFR_S', value: GetValue('Combo_기준가격_표준지요인_도시계획')}
                    ]);
                    MC_기준가격_저촉률();
                    MC_기준가격_요인합계();
                }
            });

        const Combo_기준가격_표준지요인_면적 = new Combo('Combo_기준가격_표준지요인_면적', Q_코드_면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_SIZE_CODE_S', value: GetValue('Combo_기준가격_표준지요인_면적')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_방위 = new Combo('Combo_기준가격_표준지요인_방위', Q_코드_방위,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_AZIM_CODE_S', value: GetValue('Combo_기준가격_표준지요인_방위')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_용도지구 = new Combo('Combo_기준가격_표준지요인_용도지구', Q_코드_용도지구,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'USE_DSCT_S', value: GetValue('Combo_기준가격_표준지요인_용도지구')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_용도지역 = new Combo('Combo_기준가격_표준지요인_용도지역', Q_코드_용도지역,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'USE_AREA_S', value: GetValue('Combo_기준가격_표준지요인_용도지역')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_저촉률 = new Combo('Combo_기준가격_표준지요인_저촉률', Q_코드_저촉률,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'USE_AREA_S', value: GetValue('Combo_기준가격_표준지요인_용도지역')}
                    ]);
                    MC_기준가격_저촉률();
                    MC_기준가격_요인합계();
                }
            });

        const Combo_기준가격_표준지요인_중심지역접근성 = new Combo('Combo_기준가격_표준지요인_중심지역접근성', Q_코드_중심지역접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'USE_AREA_S', value: GetValue('Combo_기준가격_표준지요인_용도지역')}
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_본건요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_중심지역_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_기준가격_표준지요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '기준가격_중심지역_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_기준가격_비교치_중심지역접근성', 1 + (GetNumber('기준가격_중심지역_본건')-GetNumber('기준가격_중심지역_표준지')));
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'CNTR_ACSS_C', value: GetValue('Edit_기준가격_비교치_중심지역접근성')}
                    ]);
                    MC_기준가격_요인합계();
                }
            });

        const Combo_기준가격_표준지요인_철도접근성 = new Combo('Combo_기준가격_표준지요인_철도접근성', Q_코드_철도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'RAIL_ACSS_S', value: GetValue('Combo_기준가격_표준지요인_철도접근성')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_토지이용상황 = new Combo('Combo_기준가격_표준지요인_토지이용상황', Q_코드_이용현황,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_OF_GU_S', value: GetValue('Combo_기준가격_표준지요인_토지이용상황')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_폐기물접근성 = new Combo('Combo_기준가격_표준지요인_폐기물접근성', Q_코드_폐기물,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'POLL_ACSS_S', value: GetValue('Combo_기준가격_표준지요인_폐기물접근성')}
                    ]);
                }
            });

        const Combo_기준가격_표준지요인_형상 = new Combo('Combo_기준가격_표준지요인_형상', Q_코드_폐기물,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_기준가격').SetRow(-1, [
                        { key: 'L_SHAPE_CODE_S', value: GetValue('Combo_기준가격_표준지요인_형상')}
                    ]);
                }
            });

        const 건물단가_부대설비_냉난방 = new JsonZoonData('YN', [
            { CD_CODE : 'Y', CD_DESC : 'Y'},
            { CD_CODE : 'N', CD_DESC : 'N'},
        ]);
        const Combo_건물단가_부대설비_냉난방 = new Combo('Combo_건물단가_부대설비_냉난방', 건물단가_부대설비_냉난방,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    if ( GetString('Combo_건물단가_부대설비_냉난방') == "Y" ) {
                        SetValue('Edit_건물단가_부대설비_냉난방',30000);
                    } else {
                        SetValue('Edit_건물단가_부대설비_냉난방',0);
                    }
                    MC_건물단가_참조값();
                }
            });

        const 건물단가_부대설비_엘리베이터 = new JsonZoonData('YN', [
            { CD_CODE : 'Y', CD_DESC : 'Y'},
            { CD_CODE : 'N', CD_DESC : 'N'},
        ]);
        const Combo_건물단가_부대설비_엘리베이터 = new Combo('Combo_건물단가_부대설비_엘리베이터', 건물단가_부대설비_엘리베이터,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    if ( GetString('Combo_건물단가_부대설비_엘리베이터') == "Y" ) {
                        SetValue('Edit_건물단가_부대설비_엘리베이터',30000);
                    } else {
                        SetValue('Edit_건물단가_부대설비_엘리베이터',0);
                    }
                    MC_건물단가_참조값();
                }
            });

        const 건물단가_부대설비_위생설비 = new JsonZoonData('YN', [
            { CD_CODE : 'Y', CD_DESC : 'Y'},
            { CD_CODE : 'N', CD_DESC : 'N'},
        ]);
        const Combo_건물단가_부대설비_위생설비 = new Combo('Combo_건물단가_부대설비_위생설비', 건물단가_부대설비_위생설비,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    if ( GetString('Combo_건물단가_부대설비_위생설비') == "Y" ) {
                        SetValue('Edit_건물단가_부대설비_위생설비',30000);
                    } else {
                        SetValue('Edit_건물단가_부대설비_위생설비',0);
                    }
                    MC_건물단가_참조값();
                }
            });

        const 건물단가_부대설비_화재탐지 = new JsonZoonData('YN', [
            { CD_CODE : 'Y', CD_DESC : 'Y'},
            { CD_CODE : 'N', CD_DESC : 'N'},
        ]);
        const Combo_건물단가_부대설비_화재탐지 = new Combo('Combo_건물단가_부대설비_화재탐지', 건물단가_부대설비_화재탐지,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    if ( GetString('Combo_건물단가_부대설비_화재탐지') == "Y" ) {
                        SetValue('Edit_건물단가_부대설비_화재탐지',30000);
                    } else {
                        SetValue('Edit_건물단가_부대설비_화재탐지',0);
                    }
                    MC_건물단가_참조값();
                }
            });

        const Q_코드_증개축횟수 = new JsonZoonData('Q_코드_증개축횟수', {});
        const Combo_건물단가_중개축여부_횟수 = new Combo('Combo_건물단가_중개축여부_횟수', Q_코드_증개축횟수,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_증개축횟수').FindIndex('건물단가_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_건물단가_중개축여부_횟수');
                    });
                    GetZoonData('Q_코드_증개축횟수').GetRow(GetNumber('건물단가_RowPosition'), [
                        { key: 'Edit_건물단가_중개축여부_적용지수', value: 'ATTR_08'},
                    ]);
                    SetValue('Edit_건물단가_총단가조정지수',GetNumber('Edit_건물단가_중개축여부_적용지수')*GetNumber('Edit_건물단가_관리상태_적용지수')*GetNumber('Edit_건물단가_적용보정률'));
                    MC_건물단가_참조값();
                }
            });

        const Q_코드_표준단가_구조 = new JsonZoonData('Q_코드_표준단가_구조', {});
        const Combo_건물단가_표준단가_구조 = new Combo('Combo_건물단가_표준단가_구조', Q_코드_표준단가_구조,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('건물단가_표준단가_구조',GetValue('Combo_건물단가_표준단가_구조'));
                    GetComponent('Edit_건물단가_표준단가_적용단가', null);
                    RunQuery('Q_코드_표준단가_급수', {});
                    MC_건물단가_참조값();
                }
            });

        const Q_코드_표준단가_급수 = new JsonZoonData('Q_코드_표준단가_급수', {});
        const Combo_건물단가_표준단가_급수 = new Combo('Combo_건물단가_표준단가_급수', Q_코드_표준단가_급수,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_표준단가_급수').FindIndex('건물단가_RowPosition', (row) => {
                        return row['CD_CODE'] == GetString('Combo_건물단가_표준단가_급수');
                    });
                    GetZoonData('Q_코드_표준단가_급수').GetRow(GetNumber('건물단가_RowPosition'), [
                        { key: 'Edit_건물단가_표준단가_적용단가', value: 'ATTR_01'},
                        { key: 'Edit_건물단가_잔가율_내용년수', value: 'ATTR_02'},
                    ]);
                    MC_건물단가_참조값();
                }
            });

        const Q_코드_표준단가_용도 = new JsonZoonData('Q_코드_표준단가_용도', {});
        const Combo_건물단가_표준단가_용도 = new Combo('Combo_건물단가_표준단가_용도', Q_코드_표준단가_용도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    SetValue('건물단가_표준단가_용도', GetValue('Combo_건물단가_표준단가_용도'));
                    SetValue('Edit_건물단가_표준단가_적용단가', null);
                    RunQuery('Q_코드_표준단가_구조', {});
                    SetValue('건물단가_표준단가_구조', GetValue('Combo_건물단가_표준단가_구조'));
                    RunQuery('Q_코드_표준단가_급수', {});
                    MC_건물단가_참조값();
                }
            });

        const Q_코드_공유지분 = new JsonZoonData('Q_코드_공유지분', {});
        const Combo_보정표_공유지분 = new Combo('Combo_보정표_공유지분', Q_코드_공유지분,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_공유지분').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_공유지분');
                    });
                    GetZoonData('Q_코드_공유지분').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_공유지분_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Q_코드_경과년도 = new JsonZoonData('Q_코드_경과년도', {});
        const Combo_보정표_단독주택_경과년도 = new Combo('Combo_보정표_단독주택_경과년도', Q_코드_경과년도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_경과년도').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_단독주택_경과년도');
                    });
                    GetZoonData('Q_코드_경과년도').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_단독주택_경과년도_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Q_코드_대지면적 = new JsonZoonData('Q_코드_대지면적', {});
        const Combo_보정표_단독주택_대지의면적 = new Combo('Combo_보정표_단독주택_대지의면적', Q_코드_대지면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_대지면적').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_단독주택_대지의면적');
                    });
                    GetZoonData('Q_코드_대지면적').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_단독주택_대지의면적_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Q_코드_접한도로의폭 = new JsonZoonData('Q_코드_접한도로의폭', {});
        const Combo_보정표_단독주택_접한도로폭 = new Combo('Combo_보정표_단독주택_접한도로폭', Q_코드_접한도로의폭,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_접한도로의폭').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_단독주택_접한도로폭');
                    });
                    GetZoonData('Q_코드_접한도로의폭').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_단독주택_접한도로폭_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Q_코드_법정지상권 = new JsonZoonData('Q_코드_법정지상권', {});
        const Combo_보정표_법정지상권 = new Combo('Combo_보정표_법정지상권', Q_코드_법정지상권,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_법정지상권').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_법정지상권');
                    });
                    GetZoonData('Q_코드_법정지상권').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_법정지상권_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Q_코드_법정지상권_존속기간 = new JsonZoonData('Q_코드_법정지상권_존속기간', {});
        const Combo_보정표_법정지상권_존속기간 = new Combo('Combo_보정표_법정지상권_존속기간', Q_코드_법정지상권_존속기간,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_법정지상권').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_법정지상권');
                    });
                    GetZoonData('Q_코드_법정지상권').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_법정지상권_적용률', value: 'ATTR_08'},
                    ]);
                    // Formula
                }
            });

        const Combo_보정표_상업용_경과년도 = new Combo('Combo_보정표_상업용_경과년도', Q_코드_경과년도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_경과년도').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_단독주택_경과년도');
                    });
                    GetZoonData('Q_코드_경과년도').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_단독주택_경과년도_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Combo_보정표_상업용_접한도로폭 = new Combo('Combo_보정표_상업용_접한도로폭', Q_코드_접한도로의폭,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_접한도로의폭').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_단독주택_접한도로폭');
                    });
                    GetZoonData('Q_코드_접한도로의폭').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_단독주택_접한도로폭_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });


        const Q_코드_주변상권 = new JsonZoonData('Q_코드_주변상권', {});
        const Combo_보정표_상업용_주변상권 = new Combo('Combo_보정표_상업용_주변상권', Q_코드_주변상권,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_주변상권').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_상업용_주변상권');
                    });
                    GetZoonData('Q_코드_주변상권').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_상업용_주변상권_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });


        const Q_코드_토지의형상 = new JsonZoonData('Q_코드_토지의형상', {});
        const Combo_보정표_상업용_토지의형상 = new Combo('Combo_보정표_상업용_토지의형상', Q_코드_토지의형상,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {``
                    GetZoonData('Q_코드_토지의형상').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_상업용_토지의형상');
                    });
                    GetZoonData('Q_코드_토지의형상').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_상업용_토지의형상_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });


        const Combo_보정표_장래의이용 = new Combo('Combo_보정표_장래의이용', Q_코드_이용현황,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    // GetZoonData('Q_점유자의형태').FindIndex('콤보_IDX', (row) => {
                    //     return row['CD_CODE'] == GetString('Combo_보정표_상업용_토지의형상');
                    // });
                    // GetZoonData('Q_점유자의형태').GetRow(GetNumber('콤보_IDX'), [
                    //     { key: 'Edit_보정표_상업용_토지의형상_적용률', value: 'ATTR_08'},
                    // ]);
                    SetValue('MkEdit_보정표_적용할낙찰가율',GetNumber('MkEdit_보정표_기준낙찰가율')*GetNumber('MkEdit_보정표_아파트단지규모_적용율')*GetNumber('MkEdit_보정표_전유부분면적_적용율')*GetNumber('MkEdit_보정표_전유부분위치_적용율')*GetNumber('MkEdit_보정표_건축물의경과년도_적용율')*GetNumber('MkEdit_보정표_점유자의권리형태'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);
                }
            });

        const Q_코드_점유자형태 = new JsonZoonData('Q_코드_점유자형태', {});
        const Combo_보정표_점유자형태 = new Combo('Combo_보정표_점유자형태', Q_코드_점유자형태,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_점유자형태').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_점유자형태');
                    });
                    GetZoonData('Q_코드_점유자형태').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_점유자형태_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Combo_보정표_주거용_경과년도 = new Combo('Combo_보정표_주거용_경과년도', Q_코드_경과년도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_경과년도').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_주거용_경과년도');
                    });
                    GetZoonData('Q_코드_경과년도').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_주거용_경과년도_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Q_코드_담보물의입지조건 = new JsonZoonData('Q_코드_담보물의입지조건', {});
        const Combo_보정표_주거용_입지조건 = new Combo('Combo_보정표_주거용_입지조건', Q_코드_담보물의입지조건,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_담보물의입지조건').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_주거용_입지조건');
                    });
                    GetZoonData('Q_코드_담보물의입지조건').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_주거용_입지조건_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Combo_보정표_주거용_접한도로의폭 = new Combo('Combo_보정표_주거용_접한도로의폭', Q_코드_접한도로의폭,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_접한도로의폭').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_주거용_접한도로의폭');
                    });
                    GetZoonData('Q_코드_접한도로의폭').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_주거용_접한도로의폭_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Q_코드_토지의면적 = new JsonZoonData('Q_코드_토지의면적', {});
        const Combo_보정표_주거용_토지의면적 = new Combo('Combo_보정표_주거용_토지의면적', Q_코드_토지의면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_코드_토지의면적').FindIndex('콤보_IDX', (row) => {
                        return row['CD_CODE'] == GetString('Combo_보정표_주거용_토지의면적');
                    });
                    GetZoonData('Q_코드_토지의면적').GetRow(GetNumber('콤보_IDX'), [
                        { key: 'Edit_보정표_주거용_토지의면적_적용률', value: 'ATTR_08'},
                    ]);
                    MC_보정표_예상낙찰가();
                }
            });

        const Combo_보정표_현재의주된 = new Combo('Combo_보정표_현재의주된', Q_코드_이용현황,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    SetValue('MkEdit_보정표_적용할낙찰가율', GetNumber('MkEdit_보정표_기준낙찰가율')*GetNumber('MkEdit_보정표_아파트단지규모_적용율')*GetNumber('MkEdit_보정표_전유부분면적_적용율')*GetNumber('MkEdit_보정표_전유부분위치_적용율')*GetValue('MkEdit_보정표_건축물의경과년도_적용율') * GetNumber('MkEdit_보정표_점유자의권리형태'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);
                }
            });

        const Combo_비준가격_본건요인_고저 = new Combo('Combo_비준가격_본건요인_고저', Q_코드_고저,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_UNDUR_CODE_M', value: GetValue('Combo_비준가격_본건요인_고저') },
                    ]);
                }
            });

        const Combo_비준가격_본건요인_관공서접근성 = new Combo('Combo_비준가격_본건요인_관공서접근성', Q_코드_관공서접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_M', value: GetValue('Combo_비준가격_본건요인_관공서접근성')}
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_본건요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_관공서_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_표준지요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_관공서_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_비준가격_비교치_관공서접근성', 1 + ( GetNumber('비준가격_관공서_본건')-GetNumber('비준가격_관공서_표준지') ));
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_C', value: GetValue('Edit_비준가격_비교치_관공서접근성')}
                    ]);
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_본건요인_도로거리 = new Combo('Combo_비준가격_본건요인_도로거리', Q_코드_관공서접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'ROAD_DIST_M', value: GetValue('Combo_비준가격_본건요인_도로거리')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_도로조건 = new Combo('Combo_비준가격_본건요인_도로조건', Q_코드_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'ROAD_SIDE_M', value: GetValue('Combo_비준가격_본건요인_도로조건')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_도시계획 = new Combo('Combo_비준가격_본건요인_도시계획', Q_코드_도시계획,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'CITY_INFR_M', value: GetValue('Combo_비준가격_본건요인_도시계획')}
                    ]);
                    MC_비준가격_저촉률();
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_본건요인_면적 = new Combo('Combo_비준가격_본건요인_면적', Q_코드_면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_SIZE_CODE_M', value: GetValue('Combo_비준가격_본건요인_면적')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_방위 = new Combo('Combo_비준가격_본건요인_방위', Q_코드_방위,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_AZIM_CODE_M', value: GetValue('Combo_비준가격_본건요인_방위')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_용도지구 = new Combo('Combo_비준가격_본건요인_용도지구', Q_코드_용도지구,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'USE_DSCT_M', value: GetValue('Combo_비준가격_본건요인_용도지구')}
                    ]);
                }
            });


        const Combo_비준가격_본건요인_용도지역 = new Combo('Combo_비준가격_본건요인_용도지역', Q_코드_용도지역,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'USE_AREA_M', value: GetValue('Combo_비준가격_본건요인_용도지역')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_저촉률 = new Combo('Combo_비준가격_본건요인_저촉률', Q_코드_저촉률,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'LIMIT_AREA_M', value: GetValue('Combo_비준가격_본건요인_저촉률')}
                    ]);
                    MC_비준가격_저촉률();
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_본건요인_중심지역접근성 = new Combo('Combo_비준가격_본건요인_중심지역접근성', Q_코드_중심지역접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'CNTR_ACSS_M', value: GetValue('Combo_비준가격_본건요인_중심지역접근성')}
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_본건요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_중심지역_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_표준지요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_중심지역_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_비준가격_비교치_중심지역접근성', 1 + (GetNumber('비준가격_중심지역_본건')-GetNumber('비준가격_중심지역_표준지')));
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'CNTR_ACSS_C', value: GetValue('Edit_비준가격_비교치_중심지역접근성')}
                    ]);
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_본건요인_철도접근성 = new Combo('Combo_비준가격_본건요인_철도접근성', Q_코드_철도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'RAIL_ACSS_M', value: GetValue('Combo_비준가격_본건요인_철도접근성')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_토지이용상황 = new Combo('Combo_비준가격_본건요인_토지이용상황', Q_코드_이용현황,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_OF_GU_M', value: GetValue('Combo_비준가격_본건요인_토지이용상황')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_폐기물접근성 = new Combo('Combo_비준가격_본건요인_폐기물접근성', Q_코드_폐기물,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'POLL_ACSS_M', value: GetValue('Combo_비준가격_본건요인_폐기물접근성')}
                    ]);
                }
            });

        const Combo_비준가격_본건요인_형상 = new Combo('Combo_비준가격_본건요인_형상', Q_코드_형상,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_SHAPE_CODE_M', value: GetValue('Combo_비준가격_본건요인_형상')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_고저 = new Combo('Combo_비준가격_표준지요인_고저', Q_코드_고저,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_UNDUR_CODE_S', value: GetValue('Combo_비준가격_표준지요인_고저')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_관공서접근성 = new Combo('Combo_비준가격_표준지요인_관공서접근성', Q_코드_관공서접근성,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_M', value: GetValue('Combo_비준가격_본건요인_관공서접근성')}
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_본건요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_관공서_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_관공서접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_표준지요인_관공서접근성');
                    });
                    GetZoonData('Q_코드_관공서접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_관공서_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_비준가격_비교치_관공서접근성', 1 + ( GetNumber('비준가격_관공서_본건')-GetNumber('비준가격_관공서_표준지') ));
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'GOV_ACSS_C', value: GetValue('Edit_비준가격_비교치_관공서접근성')}
                    ]);
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_표준지요인_도로거리 = new Combo('Combo_비준가격_표준지요인_도로거리', Q_코드_도로거리,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'ROAD_DIST_S', value: GetValue('Combo_비준가격_표준지요인_도로거리')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_도로조건 = new Combo('Combo_비준가격_표준지요인_도로조건', Q_코드_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'ROAD_SIDE_S', value: GetValue('Combo_비준가격_표준지요인_도로조건')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_도시계획 = new Combo('Combo_비준가격_표준지요인_도시계획', Q_코드_도시계획,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'CITY_INFR_S', value: GetValue('Combo_비준가격_표준지요인_도시계획')}
                    ]);
                    MC_비준가격_저촉률();
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_표준지요인_면적 = new Combo('Combo_비준가격_표준지요인_면적', Q_코드_면적,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_SIZE_CODE_S', value: GetValue('Combo_비준가격_표준지요인_면적')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_방위 = new Combo('Combo_비준가격_표준지요인_방위', Q_코드_방위,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_AZIM_CODE_S', value: GetValue('Combo_비준가격_표준지요인_방위')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_용도지구 = new Combo('Combo_비준가격_표준지요인_용도지구', Q_코드_용도지구,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'USE_DSCT_S', value: GetValue('Combo_비준가격_표준지요인_용도지구')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_용도지역 = new Combo('Combo_비준가격_표준지요인_용도지역', Q_코드_용도지역,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'USE_AREA_S', value: GetValue('Combo_비준가격_표준지요인_용도지역')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_저촉률 = new Combo('Combo_비준가격_표준지요인_저촉률', Q_코드_저촉률,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'USE_AREA_S', value: GetValue('Combo_비준가격_표준지요인_용도지역')}
                    ]);
                    MC_비준가격_저촉률();
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_표준지요인_중심지역접근성 = new Combo('Combo_비준가격_표준지요인_중심지역접근성', Q_코드_중심지역접근성,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'USE_AREA_S', value: GetValue('Combo_비준가격_표준지요인_용도지역')}
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_본건요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_중심지역_본건', value: 'ATTR_08' },
                    ]);
                    GetZoonData('Q_코드_중심지역접근성').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('Combo_비준가격_표준지요인_중심지역접근성');
                    });
                    GetZoonData('Q_코드_중심지역접근성').GetRow(GetNumber('00_RowIndex'), [
                        { key: '비준가격_중심지역_표준지', value: 'ATTR_08' },
                    ]);
                    SetValue('Edit_비준가격_비교치_중심지역접근성', 1 + (GetNumber('비준가격_중심지역_본건')-GetNumber('비준가격_중심지역_표준지')));
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'CNTR_ACSS_C', value: GetValue('Edit_비준가격_비교치_중심지역접근성')}
                    ]);
                    MC_비준가격_요인합계();
                }
            });

        const Combo_비준가격_표준지요인_철도접근성 = new Combo('Combo_비준가격_표준지요인_철도접근성', Q_코드_철도,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'RAIL_ACSS_S', value: GetValue('Combo_비준가격_표준지요인_철도접근성')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_토지이용상황 = new Combo('Combo_비준가격_표준지요인_토지이용상황', Q_코드_이용현황,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_OF_GU_S', value: GetValue('Combo_비준가격_표준지요인_토지이용상황')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_폐기물접근성 = new Combo('Combo_비준가격_표준지요인_폐기물접근성', Q_코드_폐기물,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'POLL_ACSS_S', value: GetValue('Combo_비준가격_표준지요인_폐기물접근성')}
                    ]);
                }
            });

        const Combo_비준가격_표준지요인_형상 = new Combo('Combo_비준가격_표준지요인_형상', Q_코드_형상,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_비준가격').SetRow(-1, [
                        { key: 'L_SHAPE_CODE_S', value: GetValue('Combo_비준가격_표준지요인_형상')}
                    ]);
                }
            });


        // Command ---------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        const Command_SetGridData = new Command('Command_SetGridData', new JsonZoonData('Command_SetGridData', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_사진관리').SetRow(-1, [
                        {key: 'FILE_NAME', value: GetValue('Edit_FileName')}
                    ]);
                }
            });

        const Command_가격사례_삭제 = new Command('Command_가격사례_삭제', new JsonZoonData('Command_가격사례_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_가격사례').GetCurSel('감정가_가격_현재행');
                    GetComponent('DBGrid_가격사례').DeleteRow(GetNumber('감정가_가격_현재행'));
                }
            });

        const Command_가격사례_추가 = new Command('Command_가격사례_추가', new JsonZoonData('Command_가격사례_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function(e) {
                    GetComponent('DBGrid_가격사례').GetRowCount('감정가_가격_RowCount');

                    EmptyArray('감정가_가격_사례번호_배열');
                    GetComponent('DBGrid_가격사례').GetRows('', [
                        { key: '감정가_가격_사례번호_배열', value: '사례번호'}
                    ]);

                    if (isEmpty(GetValue('감정가_가격_사례번호_배열'))) {
                        SetArray('감정가_가격_사례번호_배열',0,0);
                    }

                    SetValue('감정가_가격_사례번호_MAX', Max('감정가_가격_사례번호_배열')+1);
                    SetValue('감정가_가격_현재행', GetValue('감정가_가격_사례번호_MAX'));

                    GetComponent('DBGrid_가격사례').AddRow({
                        '년도' : GetValue('년도'),
                        '일련번호' : GetValue('감정순번'),
                    });
                    GetComponent('DBGrid_가격사례').SetCurSel(GetNumber('감정가_가격_RowCount'));
                    GetComponent('DBGrid_가격사례').SetEditFocus(GetNumber('감정가_가격_RowCount') - 1, '소재지');
                    GetComponent('DBGrid_가격사례').SetRow(GetNumber('감정가_가격_RowCount'), [
                        { key: '사례번호', value: GetValue('감정가_가격_현재행') }
                    ]);

                    // BreakMacro...
                    // Function('DBGrid_가격사례.GetRowCount');
                    // SetValue('감정가_가격_현재행', GetValue('감정가_가격_RowCount') + 1);
                    // Function('DBGrid_경매사례.SetRow');
                }
            });

        const Command_경과일수 = new Command('Command_경과일수', new JsonZoonData('Command_경과일수', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function(e) {
                    if (isEmpty(GetValue('10_경과년도_변수일자'))) {
                        return;
                    }
                    if (GetString('10_경과년도_변수일자') == '00000000') {
                        return;
                    }

                    SetValue('10_경과일수_쿼리리턴값', '');
                    SetValue('10_경과년도_감정일자', GetValue('MkEdit_감정일'));

                    RunQuery('Q_DUAL_경과일수구하기', {
                        '10_경과년도_감정일자' : GetValue('10_경과년도_감정일자'),
                        '10_경과년도_변수일자' : GetValue('10_경과년도_변수일자'),
                    }, 'GET');

                    GetZoonData('Q_DUAL_경과일수구하기').GetRow(0, [
                        { key: '10_경과일수_쿼리리턴값', value: 'ELAP_YYMM'}
                    ]);

                    SetValue('10_경과년도_변수일자', '');
                }
            });

        const Command_경매사례_삭제 = new Command('Command_경매사례_삭제', new JsonZoonData('Command_경매사례_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_경매사례').GetCurSel('감정가_가격_현재행');
                    GetComponent('DBGrid_경매사례').DeleteRow(GetNumber('감정가_가격_현재행'));

                    if (match(PageType.집합_아파트)) {
                        MC_경매_금액();
                    }
                }
            });


        const Command_경매사례_추가 = new Command('Command_경매사례_추가', new JsonZoonData('Command_경매사례_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_경매사례').GetRowCount('감정가_경매_RowCount');
                    //Formula
                    EmptyArray('감정가_경매_사례번호_배열');
                    GetComponent('DBGrid_경매사례').GetRows('', [
                        { key: '감정가_경매_사례번호_배열', value: '사례번호'}
                    ]);

                    if (isEmpty(GetValue('감정가_경매_사례번호_배열'))) {
                        SetArray('감정가_경매_사례번호_배열', 0, 0);
                    }
                    SetValue('감정가_경매_사례번호_MAX', Max('감정가_경매_사례번호_배열')+1);

                    SetValue('감정가_경매_현재행', GetValue('감정가_경매_사례번호_MAX'))
                    SetValue('감정가_경매_사례번호명', Hex(GetNumber('감정가_경매_현재행') + 64))

                    GetComponent('DBGrid_경매사례').AddRow({
                        '년도' : GetValue('년도'),
                        '일련번호' : GetValue('감정순번'),
                    });
                    GetComponent('DBGrid_경매사례').SetCurSel(GetNumber('감정가_경매_RowCount'));
                    GetComponent('DBGrid_경매사례').SetEditFocus(GetNumber('감정가_경매_RowCount')-1, '경매사건번호');
                    GetComponent('DBGrid_경매사례').SetRow(GetNumber('감정가_경매_RowCount'), [
                        { key: '사례번호', value: GetValue('감정가_경매_현재행') },
                        { key: '사례번호명', value: GetValue('감정가_경매_사례번호명') }
                    ]);

                    // BreakMacro...
                    // Function(() => componentsMap.get('DBGrid_경매사례').AddRow());
                    // Function(() => componentsMap.get('DBGrid_경매사례').GetRowCount());
                    //
                    // SetValue('감정가_경매_RowCount', GetValue('감정가_경매_RowCount') - 1);
                    // SetValue('감정가_경매_현재행', NumToStr(GetValue('감정가_경매_RowCount') + 1));
                    //
                    // Function(() => componentsMap.get('DBGrid_경매사례').SetCurSel());
                    // Function(() => componentsMap.get('DBGrid_경매사례').SetRow());
                    // Function(() => componentsMap.get('DBGrid_경매사례').SetCurSelCol());
                    // Function(() => componentsMap.get('DBGrid_경매사례').SetEditFocus());
                }
            });

        const Command_도로주소_선택 = new Command('Command_도로주소_선택', new JsonZoonData('Command_도로주소_선택', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    MC_도로주소반환();
                }
            });

        const Command_도로주소_조회 = new Command('Command_도로주소_조회', new JsonZoonData('Command_도로주소_조회', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    if (StrLength(GetValue('Edit_도로주소_도로명')) <= 2) {
                        SetValue('TEMP_MSG', '도로명을 2자 이상 입력해 주세요.');
                    } else {
                        SetValue('TEMP_MSG', '');
                    }

                    if (!isEmpty(GetValue('TEMP_MSG'))) {
                        MsgBox(GetValue('TEMP_MSG'), '확인', true);
                        return;
                    }
                    RunQuery('Q_도로명주소목록', {
                        'CITY' : GetValue('Combo_도로주소_시도'),
                        'CITYGU' : GetValue('Combo_도로주소_시군구'),
                        'ROAD_NM' : GetValue('Edit_도로주소_도로명')
                    }, 'GET');
                }
            });

        const Command_문서_삭제 = new Command('Command_문서_삭제', new JsonZoonData('Command_문서_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_문서').GetCurlSel('사진관리_RowPosition');
                    GetComponent('DBGrid_문서').DeleteRow(GetNumber('사진관리_RowPosition'));
                }
            });

        const Command_문서_추가 = new Command('Command_문서_추가', new JsonZoonData('Command_문서_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_문서').GetRows('', [
                        { key: '사진관리_Seq_Arr', value: 'LN_SEQ'}
                    ]);

                    SetValue('사진관리_Seq', Max('사진관리_Seq_Arr') + 1);
                    // TODO: 사진관리_키값_임시 확인필요
                    SetValue('사진관리_키값_임시', GetString('년도') + GetString('감정순번') + GetString('사진관리_Seq'));

                    GetComponent('DBGrid_문서').AddRow({
                        'FILE_NAME_TMP' : GetValue('사진관리_키값_임시'),
                        'LN_SEQ' : GetValue('사진관리_Seq'),
                        'PHOTO_DIV' : 4,
                        'YYYY' : GetValue('년도'),
                        'SEQ' : GetValue('감정순번'),
                    });
                    GetComponent('DBGrid_문서').GetRowCount('사진관리_RowCount');

                    SetValue('사진관리_RowCount', GetNumber('사진관리_RowCount') - 1);

                    GetComponent('DBGrid_문서').SetCurSel(GetNumber('사진관리_RowCount'));
                    GetComponent('DBGrid_문서').SetEditFocus(GetNumber('사진관리_RowCount') - 1, 'b_size');
                }
            });

        /** TODO: 확인필요 */
        const Command_배당처리 = new Command('Command_배당처리', new JsonZoonData('Command_배당처리', {}),{
            isShow : GetString('isReadOnly') == 'N' ,
            isEnable : true,
        })
            .on({
                click : function() {
                    if(match(PageType.집합_아파트)){
                        MC_저장_배당();

                        if (GetNumber('Edit_배당표_예상낙찰가') == 0) {
                            MsgBox('예상낙찰가가 ZEROS(0)인 자료는 [배당처리]를 할 수 없습니다.');
                            return;
                        }
                    }else{
                        MC_999_저장_배당();

                        if (GetNumber('MkEdit_보정표_예상낙찰가') == 0) {
                            MsgBox('예상낙찰가가 ZEROS(0)인 자료는 [배당처리]를 할 수 없습니다.');
                            return;
                        }
                    }
                    if (GetString('02_배당표수정여부') == 'Y') {
                        if(!MsgBox("배당처리 후 자료가 수정되어 있습니다"+ Hex(10) +"다시 배당처리를 하면 수정된 자료는 무시됩니다."+ Hex(10) +"배당처리할까요?", '[알림]', false)) {
                            return;
                        }
                    }

                    if (MsgBox('배당처리하시겠습니까?', '', false)) {
                        CallProcedure('SPESU_SINGLE_COMPUTE', {
                            'IN_SEQ': GetValue('감정순번'),
                            'IN_YYYY': GetValue('년도'),
                            'OUT_YN': '',
                        }, (res) => {
                            SetValue('저장_Error_Message', Trim(res.result.OUT_YN));
                        });

                        if (GetValue('저장_Error_Message') == 'Y') {
                            MsgBox('"배당처리가 정상적으로 진행되지 않았습니다."+HEX(10)+"권리자의 내용을 초기화합니다."+HEX(10)+"권리관계를 다시 입력하십시요."', true);
                            MC_999_배당표_배당처리시권리자자료_CLEAR();
                            return;
                        }
                        SetValue('02_배당표수정여부', 'N');
                        RunQuery('저장_담보마스타_담보여력등', {
                            '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                            'YYYY': GetValue('년도'),
                            'SEQ': GetValue('감정순번'),
                        }, 'POST');
                        MsgBox('정상적으로 처리되었습니다.', '', true);
                        // BreakMacro...
                    }

                }
            });

        const Command_배당처리시_자료CLEAR = new Command('Command_배당처리시_자료CLEAR', new JsonZoonData('Command_배당처리시_자료CLEAR', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('저장_Error_Message', 'Command_배당처리시_자료CLEAR ERROR');
                    CallProcedure('SPESU_RIGHT_PERSON_CLEAR_00', {
                        'I_SEQ' : GetValue('감정순번'),
                        'I_YYYY' : GetValue('년도')
                    }, (result) => {
                        SetValue('저장_Error_Message', '');
                    });

                    SetValue('02_배당표수정여부', '');
                    RunQuery('저장_담보마스타_담보여력등', {
                        '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                        'YYYY': GetValue('년도'),
                        'SEQ': GetValue('감정순번'),
                    }, 'POST');
                    RunQuery('Q_배당표_배당금_계산', {
                        '년도' : GetValue('년도'),
                        '감정순번' : GetValue('감정순번'),
                    }, 'GET');
                }
            });

        const Command_버튼_활성화여부 = new Command('Command_버튼_활성화여부', new JsonZoonData('Command_버튼_활성화여부', {}),{
            isShow : match(PageType.집합_상업용),
            isEnable : true
        })
            .on({
                click : function() {
                    if (isEmpty(GetValue('감정순번'))) {
                        SetValue('버튼_전감정사항비교표',"N");
                    } else if (Mid(GetString('감정순번'), 4, 2) == "00") {
                        SetValue('버튼_전감정사항비교표',"N");
                    } else {
                        SetValue('버튼_전감정사항비교표',"Y");
                    }
                }
            });

        const Command_비준_사례번호생성 = new Command('Command_비준_사례번호생성', new JsonZoonData('Command_비준_사례번호생성', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    if (GetNumber('Combo_비준_사례구분') == 1) {
                        MC_301_Combo_사례번호_자료생성_0_가격사례();
                    } else if (GetNumber('Combo_비준_사례구분') == 2) {
                        MC_301_Combo_사례번호_자료생성_0_경매사례();
                    }

                    MC_301_Combo_사례번호_자료생성_1();

                    GetComponent('Combo_비준_사례번호').InitialData();
                    GetComponent('Combo_비준_사례번호').AddData(GetNumber('감정가_비준_사례번호_생성문자') , GetNumber('감정가_비준_사례번호_생성'), '');
                    GetComponent('Combo_비준_사례구분').GetWindowText('감정가_비준_사례구분명');
                }
            });


        const Command_비준가격_삭제 = new Command('Command_비준가격_삭제', new JsonZoonData('Command_비준가격_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_비준가격').GetCurSel('감정가_비준_현재행');
                    GetComponent('DBGrid_비준가격').DeleteRow(GetNumber('감정가_비준_현재행'));
                    GetComponent('DBGrid_비준가격집계표').DeleteRow(GetNumber('감정가_비준_현재행'));
                    MC_300_초기화_비준가격_항목();
                }
            });

        const Command_비준가격_추가 = new Command('Command_비준가격_추가', new JsonZoonData('Command_비준가격_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    if (isEmpty(GetValue('Combo_비준_사례구분'))) {
                        MsgBox('사례구분를 선택하세요', '[확인]사례구분', true);
                        return;
                    }
                    if (isEmpty(GetValue('Combo_비준_사례번호'))) {
                        MsgBox('사례번호를 선택하세요', '[확인]사례번호', true);
                        return;
                    }
                    if (GetValue('MkEdit_비준_소재지_비교') <= 0) {
                        MsgBox('소재지 비교치를 입력하세요', '[확인]소재지', true);
                        return;
                    }
                    if (GetValue('MkEdit_비준_가격_사례_적용율') <= 0) {
                        MsgBox('시점수정 사례요인 [적용율]을 입력하세요', '[확인]가격 사례요인', true);
                        return;
                    }
                    if (GetValue('MkEdit_비준_도로조건지수_비교') <= 0) {
                        MsgBox('도로조건 [비교치]를 입력하세요', '[확인]도로조건', true);
                        return;
                    }
                    if (isEmpty(GetValue('MkEdit_비준_기타조건지수_사례'))) {
                        MsgBox('기타조건 [사례 적용율]를 입력하세요', '[확인]기타조건', true);
                        return;
                    }

                    if (match(PageType.집합_상업용)) {
                        SetValue('00_TEMP', GetValue('Combo_비준_사례구분'));
                    }

                    MC_303_비준가격_추가시_Grid();
                    MC_300_초기화_비준가격_항목();
                }
            });

        const Command_사진_삭제 = new Command('Command_사진_삭제', new JsonZoonData('Command_사진_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_사진관리').GetCurSel('사진관리_RowPosition');
                    GetComponent('DBGrid_사진관리').DeleteRow(GetNumber('사진관리_RowPosition'));
                }
            });

        const Command_사진_추가 = new Command('Command_사진_추가', new JsonZoonData('Command_사진_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_사진관리').GetRows('', [
                        { key: '사진관리_Seq_Arr', value: 'LN_SEQ'}
                    ]);


                    SetValue('사진관리_Seq', Max('사진관리_Seq_Arr') + 1);
                    SetValue('사진관리_키값_임시', GetString('년도') + GetString('감정순번') + GetString('사진관리_Seq'));

                    GetComponent('DBGrid_사진관리').AddRow({
                        'FILE_NAME_TMP' : GetValue('사진관리_키값_임시'),
                        'LN_SEQ' : GetValue('사진관리_Seq'),
                        'YYYY' : GetValue('년도'),
                        'SEQ' : GetValue('감정순번'),
                    });
                    GetComponent('DBGrid_사진관리').GetRowCount('사진관리_RowCount');

                    SetValue('사진관리_RowCount', GetNumber('사진관리_RowCount') - 1);

                    GetComponent('DBGrid_사진관리').SetCurSel(GetNumber('사진관리_RowCount'));
                    GetComponent('DBGrid_사진관리').SetEditFocus(GetNumber('사진관리_RowCount') - 1, 'b_size');
                    // BreakMacro.......
                }
            });

        const Command_선택_거래처 = new Command('Command_선택_거래처', new JsonZoonData('Command_선택_거래처', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_거래처').GetRow(-1, [
                        { key: '팝업_거래처명', value: 'SANGHO'},
                        { key: '팝업_거래처코드', value: 'GEO_CODE'},
                        { key: '팝업_대표자', value: 'DAEPYO_NAME'},
                    ]);

                    if(match(PageType.집합_아파트)){
                        SetValue('Edit_거래처', GetValue('팝업_거래처명'));
                        SetValue('Edit_거래처코드', GetValue('팝업_거래처코드'));
                        SetValue('Edit_대표자', GetValue('팝업_대표자'));
                    }else{
                        SetValue('Edit_입력표_거래처', GetValue('팝업_거래처명'));
                        SetValue('Edit_입력표_거래처코드', GetValue('팝업_거래처코드'));
                        SetValue('Edit_입력표_대표자', GetValue('팝업_대표자'));
                    }

                    GetComponent('SubForm_거래처조회').HideSubForm();
                }
            });

        const Command_선택_주소조회 = new Command('Command_선택_주소조회', new JsonZoonData('Command_선택_주소조회', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_주소').GetRow(-1, [
                        { key: '팝업_전체주소', value: 'JUSO_FULL1'}
                    ]);


                    if (GetString('팝업_주소창호출위치') == "입력표") {
                        SetValue('Edit_입력표_소재지1', GetString('팝업_전체주소'));
                    } else if (GetString('팝업_주소창호출위치') == "감정가_가격사례") {
                        SetValue('감정가_가격_소재지', GetString('팝업_전체주소') + " ");
                    } else if (GetString('팝업_주소창호출위치') == "감정가_경매사례") {
                        SetValue('감정가_경매_소재지', GetString('팝업_전체주소') + " ");
                    } else if (GetString('팝업_주소창호출위치') == "감정가_임대사례") {
                        // TODO : 집합 상업용에서 사용
                        SetValue('감정가_임대_소재지', GetString('팝업_전체주소') + " ");
                    }

                    GetComponent('SubForm_주소조회').HideSubForm();

                    if (match(PageType.집합_상업용)) {
                        SetValue('팝업_주소창호출위치', '');
                        SetValue('팝업_전체주소', '');
                    }
                }
            });

        const Command_수익_사례번호생성 = new Command('Command_수익_사례번호생성', new JsonZoonData('Command_수익_사례번호생성', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    if (GetNumber('수익_Combo_사례구분') == 3) {
                        MC_321_Combo_사례번호_자료생성_0_본건사례();
                    } else if (GetNumber('수익_Combo_사례구분') == 4) {
                        MC_321_Combo_사례번호_자료생성_0_임대사례();
                    }

                    MC_321_Combo_사례번호_자료생성_1();

                    GetComponent('수익_Combo_사례번호').InitialData();
                    GetComponent('수익_Combo_사례번호').AddData(
                        GetString('감정가_수익_사례번호_생성문자'),
                        GetString('감정가_수익_사례번호_생성'),
                        ''
                    );
                    GetComponent('수익_Combo_사례번호').GetWindowText('감정가_수익_사례구분명');
                }
            });

        const Command_수익_합계계산 = new Command('Command_수익_합계계산', new JsonZoonData('Command_수익_합계계산', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('수익_MkEdit_시점_비교', GetValue('수익_MkEdit_시점_사례_적용율'))
                    SetValue('수익_MKEdit_기타_비교지수', Round((GetNumber('수익_MKEdit_기타_본건지수') / GetNumber('수익_MKEdit_기타_사례지수')), 2));

                    SetValue('수익_MKEdit_요인합계', GetNumber('수익_MKEdit_소재지_비교')
                        * GetNumber('수익_MkEdit_시점_비교')
                        * GetNumber('수익_MKEdit_층별_비교지수')
                        * GetNumber('수익_MKEdit_위치_비교지수')
                        * GetNumber('수익_MKEdit_잔가율_비교')
                        * GetNumber('수익_MKEdit_도로_비교지수')
                        * GetNumber('수익_MKEdit_접근_비교지수')
                        * GetNumber('수익_MKEdit_기타_비교지수')
                    )

                    SetValue('수익_MKEdit_적용단위당임료',Round((GetNumber('수익_MKEdit_단위당연간임대료_사례') * GetNumber('수익_MKEdit_요인합계')) / 1000,0) * 1000)
                    SetValue('수익_MKEdit_수익단가',Round((GetNumber('수익_MKEdit_적용단위당임료') / (GetNumber('수익_MKEdit_환원이율') / 100)) / 1000, 0) * 1000)
                    SetValue('수익_MKEdit_환산금액', Round((GetNumber('수익_MKEdit_수익단가') * GetNumber('MkEdit_입력표_전유면적')) / 1000, 0) * 1000);
                }
            });

        const Command_수익가격_삭제 = new Command('Command_수익가격_삭제', new JsonZoonData('Command_수익가격_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_수익가격').GetCurlSel('감정가_수익_현재행');
                    GetComponent('DBGrid_수익가격').DeleteRow(GetNumber('감정가_수익_현재행'));
                    GetComponent('DBGrid_수익가격집계표').DeleteRow(GetNumber('감정가_수익_현재행'));

                    MC_320_수익가격_초기화_1_항목();
                }
            });

        const Command_수익가격_추가 = new Command('Command_수익가격_추가', new JsonZoonData('Command_수익가격_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    if (isEmpty(GetValue('수익_Combo_사례번호'))) {
                        MsgBox('임대사례번호를 선택하세요', '[확인]사례번호', true);
                        return;
                    }

                    MC_323_수익가격_추가시_Grid();
                    MC_320_수익가격_초기화_1_항목();
                }
            });

        const Command_응찰_00_메인 = new Command('Command_응찰_00_메인', new JsonZoonData('Command_응찰_00_메인', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    RunButton('Command_응찰_03_초기화');
                    RunButton('Command_응찰_01_쿼리');
                    // BreakMacro...

                    if(match(PageType.집합_아파트)){
                        RunButton('Command_응찰_02_이벤트');
                    }
                }
            });

        const Command_응찰_00_탭활성여부 = new Command('Command_응찰_00_탭활성여부', new JsonZoonData('Command_응찰_00_탭활성여부', {}),{
            isShow : false,
            isEnable : true
        })
        .on({
            click : function() {
                if(match(PageType.집합_아파트)){
                    // TODO : AS-IS 로직이 이상함
                    if (GetString('응찰_입력표활성여부') == 'Y') {
                        GetComponent('TabControl1').EnableTab(3, 1);
                    } else if (GetString('응찰_입력표활성여부') == 'Y') {
                        GetComponent('TabControl1').EnableTab(3, 0);
                    }
                }else if (match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                    // TODO : AS-IS 로직이 이상함
                    if (GetString('응찰_입력표활성여부') == 'Y') {
                        GetComponent('TabControl1').EnableTab(5, 1);
                    } else if (GetString('응찰_입력표활성여부') == 'Y') {
                        GetComponent('TabControl1').EnableTab(5, 0);
                    }
                }
            }
        });

        const Command_응찰_01_쿼리 = new Command('Command_응찰_01_쿼리', new JsonZoonData('Command_응찰_01_쿼리', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    RunQuery('Q_49_DUAL_종합부동산세', {
                        담보종류 : GetValue('담보종류'),
                    });
                    RunQuery('Q_49_DUAL_처분비용', {});
                    RunQuery('Q_49_DUAL_취득세', {});
                    RunQuery('Q_49_DUAL_등록세', {});
                    GetComponent('응찰_수지_취득_취득세_Combo').SetCurSel(0);
                    GetComponent('응찰_수지_취득_등록세_Combo').SetCurSel(0);
                    GetComponent('응찰_수지_처분_비용_Combo').SetCurSel(0);
                    GetComponent('응찰_수지_보유비용_종부세_Combo').SetCurSel(0);

                    if (isEmpty(GetValue('감정순번'))) {
                        return;
                    }

                    RunQuery('Q_40_응찰입력표_마스타', {
                        '년도' : GetValue('년도'),
                        '감정순번' : GetValue('감정순번'),
                    });

                    GetZoonData('Q_40_응찰입력표_마스타').GetRow(0, [
                        { key: '응찰_사항_사건번호' , value: '사항_사건번호'},
                        { key: '응찰_사항_관할법원' , value: '사항_관할법원'},
                        { key: '응찰_사항_경매구분' , value: '사항_경매구분'},
                        { key: '응찰_사항_경매계' , value: '사항_경매계'},
                        { key: '응찰_사항_전화번호' , value: '사항_전화번호'},
                        { key: '응찰_사항_경매신청채권자' , value: '사항_경매신청채권자'},
                        { key: '응찰_사항_청구금액' , value: '사항_청구금액'},
                        { key: '응찰_사항_경매개시등기일' , value: '사항_경매개시등기일'},
                        { key: '응찰_사항_유입시특이사항' , value: '사항_유입시특이사항'},
                        { key: '응찰_내용_토지_금액' , value: '내용_법원감정가_토지_가격총액'},
                        { key: '응찰_내용_토지_단가' , value: '내용_법원감정가_토지_단가'},
                        { key: '응찰_내용_토지_단가_평당' , value: '내용_법원감정가_토지_평당가격'},
                        { key: '응찰_내용_건물_금액' , value: '내용_법원감정가_건물_가격총액'},
                        { key: '응찰_내용_건물_단가' , value: '내용_법원감정가_건물_단가'},
                        { key: '응찰_내용_건물_단가_평당' , value: '내용_법원감정가_건물_평당가격'},
                        { key: '응찰_내용_법원감정가합계' , value: '내용_법원감정가_합계_가격총액'},
                        { key: '응찰_내용_입찰예정가_금액' , value: '내용_입찰예정가_금액'},
                        { key: '응찰_내용_입찰예정가_낙찰가율' , value: '내용_낙찰가율'},
                        { key: '응찰_집계표_최고채권액' , value: '집계표_경매비용개산_채권액'},
                        { key: '응찰_집계표_최고채권액Combo' , value: '집계표_경매비용개산_적용대상'},
                        { key: '응찰_집계표_최고채권액Combo_Value' , value: '집계표_경매비용개산_적용금액'},
                        { key: '응찰_집계표_선순위자채권최고액' , value: '집계표_선순위자채권최고액합계'},
                        { key: '응찰_집계표_선순위자배당금' , value: '집계표_선순위자배당금합계'},
                        { key: '응찰_집계표_당사채권최고액' , value: '집계표_당사채권최고액합계'},
                        { key: '응찰_집계표_당사배당금' , value: '집계표_당사배당금합계'},
                        { key: '응찰_집계표_당사미회수채권액' , value: '집계표_당사의미회수채권액'},
                        { key: '응찰_수지_부담비용합계' , value: '수지1_경락후_부담비용합계'},
                        { key: '응찰_수지_입찰예정가' , value: '내용_입찰예정가_금액'},
                        { key: '응찰_수지_실제취득가' , value: '수지2_실제취득가'},
                        { key: '응찰_수지_예상공시지가상승률' , value: '수지3_기준시가상승률'},
                        { key: '응찰_수지_예정_낙찰후매각가능' , value: '수지3_예정보유기간'},
                        { key: '응찰_수지_예상매각금액' , value: '수지3_추정예상매각금액'},
                        { key: '응찰_수지_예상매각확신금액' , value: '수지3_매각확신금액'},
                        { key: '응찰_수지_예상매각확신사유' , value: '수지3_매각확신금액을적용한사유'},
                        { key: '응찰_수지_취득_취득세' , value: '수지4_취득비용_취득세'},
                        { key: '응찰_수지_취득_취득세_Combo' , value: '수지4_취득비용_취득세율'},
                        { key: '응찰_수지_취득_등록세' , value: '수지4_취득비용_등록세'},
                        { key: '응찰_수지_취득_등록세_Combo' , value: '수지4_취득비용_등록세율'},
                        { key: '응찰_수지_취득_강제집행' , value: '수지4_취득비용_강제집행비용'},
                        { key: '응찰_수지_취득_채권매입' , value: '수지4_취득비용_손실액'},
                        { key: '응찰_수지_취득_기타취득' , value: '수지4_취득비용_기타부대비용'},
                        { key: '응찰_수지_취득_합계' , value: '수지4_취득비용합계'},
                        { key: '응찰_수지_취득_원가합계' , value: '수지4_취득원가합계'},
                        { key: '응찰_수지_취득_총원가합계' , value: '수지4_총취득원가합계'},
                        { key: '응찰_수지_보유수익_임대수익' , value: '수지5_보유수익_임대수익'},
                        { key: '응찰_수지_보유수익_임대보증금' , value: '수지5_보유수익_임대보증금'},
                        { key: '응찰_수지_보유수익_월임대수입' , value: '수지5_보유수익_월임대수입'},
                        { key: '응찰_수지_보유수익_기타수익' , value: '수지5_보유수익_기타의수익'},
                        { key: '응찰_수지_보유수익_합계' , value: '수지5_보유수익합계'},
                        { key: '응찰_수지_보유비용_기회비용' , value: '수지6_보유비용_기회비용'},
                        { key: '응찰_수지_보유비용_부가세' , value: '수지6_보유비용_부가세'},
                        { key: '응찰_수지_보유비용_법인세' , value: '수지6_보유비용_법인세'},
                        { key: '응찰_수지_보유비용_재산세' , value: '수지6_보유비용_재산세'},
                        { key: '응찰_수지_보유비용_종부세' , value: '수지6_보유비용_종부세금액'},
                        { key: '응찰_수지_보유비용_종부세_Combo' , value: '수지6_보유비용_종부세구분'},
                        { key: '응찰_수지_보유비용_기타유지보수비용' , value: '수지6_보유비용_기타유지보수비'},
                        { key: '응찰_수지_보유비용_합계' , value: '수지6_보유비용합계'},
                        { key: '응찰_수지_처분_비용' , value: '수지7_처분비용_금액'},
                        { key: '응찰_수지_처분_비용_Combo' , value: '수지7_처분비용_구분'},
                        { key: '응찰_수지_처분_기타비용' , value: '수지7_처분비용_기타처분비용'},
                        { key: '응찰_수지_처분_합계' , value: '수지7_처분비용합계'},
                        { key: '응찰_수지_항목별_비용합계' , value: '수지8_각항목별합계_비용합계'},
                        { key: '응찰_수지_항목별_수익합계' , value: '수지8_각항목별합계_수익합계'},
                        { key: '응찰_수지_항목별_예상손익' , value: '수지8_각항목별합계_예상손익'},
                        { key: '응찰_수지_전체손익' , value: '수지8_최종적인전체손익'},
                        { key: '응찰_수지_응찰여부_Group', value: '수지8_응찰여부결정'}
                    ]);

                    RunQuery('Q_41_응찰입력표_경매기일내역', {
                        '년도' : GetValue('년도'),
                        '감정순번' : GetValue('감정순번'),
                    });

                    RunQuery('Q_42_응찰입력표_전감정개요', {
                        '년도' : GetValue('년도'),
                        '감정순번' : GetValue('감정순번'),
                    });

                    GetZoonData('Q_42_응찰입력표_전감정개요').GetRow(0, [
                        { key: '응찰_사항_사건번호', value: '사항_사건번호' },
                        { key: '응찰_사항_관할법원', value: '사항_관할법원' },
                        { key: '응찰_사항_경매구분', value: '사항_경매구분' },
                        { key: '응찰_사항_경매계', value: '사항_경매계' },
                        { key: '응찰_사항_전화번호', value: '사항_전화번호' },
                        { key: '응찰_사항_경매신청채권자', value: '사항_경매신청채권자' },
                        { key: '응찰_사항_청구금액', value: '사항_청구금액' },
                        { key: '응찰_사항_경매개시등기일', value: '사항_경매개시등기일' },
                        { key: '응찰_사항_유입시특이사항', value: '사항_유입시특이사항' },
                        { key: '응찰_내용_토지_금액', value: '내용_법원감정가_토지_가격총액' },
                        { key: '응찰_내용_토지_단가', value: '내용_법원감정가_토지_단가' },
                        { key: '응찰_내용_토지_단가_평당', value: '내용_법원감정가_토지_평당가격' },
                        { key: '응찰_내용_건물_금액', value: '내용_법원감정가_건물_가격총액' },
                        { key: '응찰_내용_건물_단가', value: '내용_법원감정가_건물_단가' },
                        { key: '응찰_내용_건물_단가_평당', value: '내용_법원감정가_건물_평당가격' },
                        { key: '응찰_내용_법원감정가합계', value: '내용_법원감정가_합계_가격총액' },
                        { key: '응찰_내용_입찰예정가_금액', value: '내용_입찰예정가_금액' },
                        { key: '응찰_내용_입찰예정가_낙찰가율', value: '내용_낙찰가율' },
                        { key: '응찰_집계표_최고채권액', value: '집계표_경매비용개산_채권액' },
                        { key: '응찰_집계표_최고채권액Combo', value: '집계표_경매비용개산_적용대상' },
                        { key: '응찰_집계표_최고채권액Combo_Value', value: '집계표_경매비용개산_적용금액' },
                        { key: '응찰_집계표_선순위자채권최고액', value: '집계표_선순위자채권최고액합계' },
                        { key: '응찰_집계표_선순위자배당금', value: '집계표_선순위자배당금합계' },
                        { key: '응찰_집계표_당사채권최고액', value: '집계표_당사채권최고액합계' },
                        { key: '응찰_집계표_당사배당금', value: '집계표_당사배당금합계' },
                        { key: '응찰_집계표_당사미회수채권액', value: '집계표_당사의미회수채권액' },
                        { key: '응찰_수지_부담비용합계', value: '수지1_경락후_부담비용합계' },
                        { key: '응찰_수지_입찰예정가', value: '내용_입찰예정가_금액' },
                        { key: '응찰_수지_실제취득가', value: '수지2_실제취득가' },
                        { key: '응찰_수지_예상공시지가상승률', value: '수지3_기준시가상승률' },
                        { key: '응찰_수지_예정_낙찰후매각가능', value: '수지3_예정보유기간' },
                        { key: '응찰_수지_예상매각금액', value: '수지3_추정예상매각금액' },
                        { key: '응찰_수지_예상매각확신금액', value: '수지3_매각확신금액' },
                        { key: '응찰_수지_예상매각확신사유', value: '수지3_매각확신금액을적용한사유' },
                        { key: '응찰_수지_취득_취득세', value: '수지4_취득비용_취득세' },
                        { key: '응찰_수지_취득_취득세_Combo', value: '수지4_취득비용_취득세율' },
                        { key: '응찰_수지_취득_등록세', value: '수지4_취득비용_등록세' },
                        { key: '응찰_수지_취득_등록세_Combo', value: '수지4_취득비용_등록세율' },
                        { key: '응찰_수지_취득_강제집행', value: '수지4_취득비용_강제집행비용' },
                        { key: '응찰_수지_취득_채권매입', value: '수지4_취득비용_손실액' },
                        { key: '응찰_수지_취득_기타취득', value: '수지4_취득비용_기타부대비용' },
                        { key: '응찰_수지_취득_합계', value: '수지4_취득비용합계' },
                        { key: '응찰_수지_취득_원가합계', value: '수지4_취득원가합계' },
                        { key: '응찰_수지_취득_총원가합계', value: '수지4_총취득원가합계' },
                        { key: '응찰_수지_보유수익_임대수익', value: '수지5_보유수익_임대수익' },
                        { key: '응찰_수지_보유수익_임대보증금', value: '수지5_보유수익_임대보증금' },
                        { key: '응찰_수지_보유수익_월임대수입', value: '수지5_보유수익_월임대수입' },
                        { key: '응찰_수지_보유수익_기타수익', value: '수지5_보유수익_기타의수익' },
                        { key: '응찰_수지_보유수익_합계', value: '수지5_보유수익합계' },
                        { key: '응찰_수지_보유비용_기회비용', value: '수지6_보유비용_기회비용' },
                        { key: '응찰_수지_보유비용_부가세', value: '수지6_보유비용_부가세' },
                        { key: '응찰_수지_보유비용_법인세', value: '수지6_보유비용_법인세' },
                        { key: '응찰_수지_보유비용_재산세', value: '수지6_보유비용_재산세' },
                        { key: '응찰_수지_보유비용_종부세', value: '수지6_보유비용_종부세금액' },
                        { key: '응찰_수지_보유비용_종부세_Combo', value: '수지6_보유비용_종부세구분' },
                        { key: '응찰_수지_보유비용_기타유지보수비용', value: '수지6_보유비용_기타유지보수비' },
                        { key: '응찰_수지_보유비용_합계', value: '수지6_보유비용합계' },
                        { key: '응찰_수지_처분_비용', value: '수지7_처분비용_금액' },
                        { key: '응찰_수지_처분_비용_Combo', value: '수지7_처분비용_구분' },
                        { key: '응찰_수지_처분_기타비용', value: '수지7_처분비용_기타처분비용' },
                        { key: '응찰_수지_처분_합계', value: '수지7_처분비용합계' },
                        { key: '응찰_수지_항목별_비용합계', value: '수지8_각항목별합계_비용합계' },
                        { key: '응찰_수지_항목별_수익합계', value: '수지8_각항목별합계_수익합계' },
                        { key: '응찰_수지_항목별_예상손익', value: '수지8_각항목별합계_예상손익' },
                        { key: '응찰_수지_전체손익', value: '수지8_최종적인전체손익' },
                        { key: '응찰_수지_응찰여부_Group', value: '수지8_응찰여부결정' }
                    ]);

                    RunQuery('Q_43_응찰입력표_선순위권리내역', {
                        '년도' : GetValue('년도'),
                        '감정순번' : GetValue('감정순번'),
                    });
                    RunQuery('Q_44_응찰입력표_선순위부담금액', {
                        '년도' : GetValue('년도'),
                        '감정순번' : GetValue('감정순번'),
                    });
                }
            });

        const Command_응찰_02_이벤트 = new Command('Command_응찰_02_이벤트', new JsonZoonData('Command_응찰_02_이벤트', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    RunButton('Command_응찰_11_내용');

                    // TODO: 집합 오피스텔엔 공란로 되어
                    if (match(PageType.집합_상업용) || match(PageType.집합_아파트) || match(PageType.토건_주거)) {
                        RunButton('Command_응찰_12_부담비용합계');
                    }

                    RunButton('Command_응찰_13_추정예상매각대금');
                    RunButton('Command_응찰_14_취득비용');
                    RunButton('Command_응찰_15_보유수익');
                    RunButton('Command_응찰_16_보유비용');
                    RunButton('Command_응찰_17_처분비용');
                    RunButton('Command_응찰_18_항목별합계');
                }
            });

        const Command_응찰_03_초기화 = new Command('Command_응찰_03_초기화', new JsonZoonData('Command_응찰_03_초기화', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_수지_예정_낙찰후매각가능', 3);
                }
            });

        const Command_응찰_11_내용 = new Command('Command_응찰_11_내용', new JsonZoonData('Command_응찰_11_내용', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_내용_법원감정가합계', GetNumber('응찰_내용_토지_금액')+GetNumber('응찰_내용_건물_금액'));
                    SetValue('응찰_내용_입찰예정가_금액', Round(Round(GetNumber('응찰_내용_법원감정가합계')*(GetNumber('MkEdit_보정표_적용할낙찰가율')/100),0)/1000,0)*1000);
                    SetValue('응찰_내용_입찰예정가_낙찰가율', Round((GetNumber('응찰_내용_입찰예정가_금액')/GetNumber('응찰_내용_법원감정가합계'))*100,2));
                    SetValue('응찰_수지_입찰예정가', GetValue('응찰_내용_입찰예정가_금액'));
                    SetValue('응찰_수지_실제취득가', GetNumber('응찰_수지_부담비용합계')+GetNumber('응찰_내용_입찰예정가_금액'));

                    if (match(PageType.토건_주거)) {
                        SetValue('응찰_내용_토지_단가', Round(Round(GetNumber('응찰_내용_토지_금액') / GetNumber('Edit_토지의표시_합계_면적'), 0) / 1000, 0) * 1000);
                        SetValue('응찰_내용_토지_단가_평당', Round(Round(GetNumber('응찰_내용_토지_금액') / (GetNumber('Edit_토지의표시_합계_면적') * 0.3025),0) / 1000, 0) * 1000);
                        EmptyArray('01_응찰_숫자배열변수1');
                        EmptyArray('01_응찰_숫자배열변수2');
                        GetComponent('DBGrid_건물의표시').GetRows('', [
                            { key: '01_응찰_숫자배열변수1', value: 'CB_SIZE'},
                            { key: '01_응찰_숫자배열변수2', value: 'CB_SIZE_PY'},
                        ]);
                        SetValue('응찰_내용_건물_단가', Round(Round(GetNumber('응찰_내용_건물_금액') / Sum('01_응찰_숫자배열변수1'),0) / 1000, 0) * 1000);
                        SetValue('응찰_내용_건물_단가_평당', Round(Round(GetNumber('응찰_내용_건물_금액') / (Sum('01_응찰_숫자배열변수2')*0.3025),0) / 1000, 0) * 1000);
                        EmptyArray('01_응찰_숫자배열변수1');
                        EmptyArray('01_응찰_숫자배열변수2');
                    }
                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_12_부담비용합계 = new Command('Command_응찰_12_부담비용합계', new JsonZoonData('Command_응찰_12_부담비용합계', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_응찰_권리내역').GetRows('', [
                        { key: '01_응찰_숫자배열변수1', value: '금액'}
                    ]);

                    GetComponent('DBGrid_응찰_부담내역').GetRows('', [
                        { key: '01_응찰_숫자배열변수2', value: '금액'}
                    ]);

                    SetValue('응찰_수지_부담비용합계', Sum('01_응찰_숫자배열변수1') + Sum('01_응찰_숫자배열변수2'));
                    SetValue('응찰_수지_실제취득가', GetNumber('응찰_수지_부담비용합계') + GetNumber('응찰_내용_입찰예정가_금액'));
                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_13_추정예상매각대금 = new Command('Command_응찰_13_추정예상매각대금', new JsonZoonData('Command_응찰_13_추정예상매각대금', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_수지_예상매각금액', Round(GetNumber('응찰_내용_입찰예정가_금액')*(GetNumber('응찰_수지_예상공시지가상승률')/100)/1000, 0)*1000);
                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_14_취득비용 = new Command('Command_응찰_14_취득비용', new JsonZoonData('Command_응찰_14_취득비용', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_수지_취득_취득세', Round((GetNumber('응찰_내용_입찰예정가_금액') * (GetNumber('응찰_수지_취득_취득세_Combo') / 100)) / 1000, 0) * 1000);
                    SetValue('응찰_수지_취득_등록세', Round((GetNumber('응찰_내용_입찰예정가_금액') * (GetNumber('응찰_수지_취득_등록세_Combo') / 100)) / 1000, 0) * 1000);
                    SetValue('응찰_수지_취득_채권매입', Round((GetNumber('응찰_내용_입찰예정가_금액') * 0.004) / 1000, 0) * 1000);
                    SetValue('응찰_수지_취득_기타취득', Round((GetNumber('응찰_내용_입찰예정가_금액') * 0.002) / 1000, 0) * 1000);
                    SetValue('응찰_수지_취득_합계',
                        GetNumber('응찰_수지_취득_취득세')
                        + GetNumber('응찰_수지_취득_등록세')
                        + GetNumber('응찰_수지_취득_강제집행')
                        + GetNumber('응찰_수지_취득_채권매입')
                        + GetNumber('응찰_수지_취득_기타취득'));
                    SetValue('응찰_수지_취득_원가합계', GetNumber('응찰_수지_취득_합계') + GetNumber('응찰_내용_입찰예정가_금액'));
                    SetValue('응찰_수지_취득_총원가합계', GetNumber('응찰_수지_취득_원가합계') + GetNumber('응찰_수지_부담비용합계'));

                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_15_보유수익 = new Command('Command_응찰_15_보유수익', new JsonZoonData('Command_응찰_15_보유수익', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_수지_보유수익_임대수익', Round(((GetNumber('응찰_수지_보유수익_임대보증금')*0.05*3)+(GetNumber('응찰_수지_보유수익_월임대수입')*36))/1000,0)*1000);
                    SetValue('응찰_수지_보유수익_합계',   GetNumber('응찰_수지_보유수익_임대수익')+GetNumber('응찰_수지_보유수익_기타수익'));
                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_16_보유비용 = new Command('Command_응찰_16_보유비용', new JsonZoonData('Command_응찰_16_보유비용', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    if (match(PageType.토건_주거)) {
                        SetValue('응찰_수지_보유비용_종부세적용면적', GetValue('Edit_토지의표시_합계_면적'));
                    }
                    SetValue('응찰_수지_보유비용_주택기준시가', GetValue('MkEdit_입력표_기준시가_총액'));
                    SetValue('응찰_수지_보유비용_기회비용', Round(((GetNumber('응찰_수지_취득_원가합계')*0.05*3)-(GetNumber('응찰_수지_취득_원가합계')*0.05*3*0.165))/1000,0)*1000);
                    SetValue('응찰_수지_보유비용_부가세', Round(((GetNumber('응찰_수지_보유수익_임대보증금')*0.05*0.1*3)+(GetNumber('응찰_수지_보유수익_월임대수입')*36*0.1))/1000,0)*1000);
                    SetValue('응찰_수지_보유비용_법인세', Round((GetNumber('응찰_수지_보유수익_합계')*0.25)/1000,0)*1000);

                    if (Left(GetString('담보종류'), 1) == '1') {
                        SetValue('응찰_수지_보유비용_재산세', Round((GetValue('응찰_수지_보유비용_주택기준시가')*0.5*0.004)/1000,0)*1000);
                    } else {
                        SetValue('응찰_수지_보유비용_재산세', Round((GetValue('응찰_수지_보유비용_종부세적용면적')*610)/1000,0)*1000);
                    }

                    GetZoonData('Q_49_DUAL_종합부동산세').FindIndex('01_응찰_숫자변수1', (row) => {
                        return row['GU_CODE'] == GetString('응찰_수지_보유비용_종부세_Combo');
                    });
                    GetZoonData('Q_49_DUAL_종합부동산세').GetRow(GetNumber('01_응찰_숫자변수1'), [
                        { key: '응찰_수지_보유비용_종부세_적용값', value: 'GU_VAL'}
                    ]);

                    if (Left(GetString('담보종류')) == '1') {
                        SetValue('응찰_수지_보유비용_종부세', Round((GetNumber('응찰_수지_보유비용_주택기준시가')*(GetNumber('응찰_수지_보유비용_종부세_적용값')/100))/1000,0)*1000);
                    } else {
                        SetValue('응찰_수지_보유비용_종부세', Round((GetNumber('응찰_수지_보유비용_종부세적용면적')*GetNumber('응찰_수지_보유비용_종부세_적용값'))/1000,0)*1000);
                    }

                    SetValue('응찰_수지_보유비용_합계',
                        GetNumber('응찰_수지_보유비용_기회비용')
                        + GetNumber('응찰_수지_보유비용_부가세')
                        + GetNumber('응찰_수지_보유비용_법인세')
                        + GetNumber('응찰_수지_보유비용_재산세')
                        + GetNumber('응찰_수지_보유비용_종부세')
                        + GetNumber('응찰_수지_보유비용_기타유지보수비용'));

                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_17_처분비용 = new Command('Command_응찰_17_처분비용', new JsonZoonData('Command_응찰_17_처분비용', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    GetZoonData('Q_49_DUAL_처분비용').FindIndex('01_응찰_숫자변수1', (row) => {
                        return row['처분구분'] == GetString('응찰_수지_처분_비용_Combo');
                    });
                    GetZoonData('Q_49_DUAL_처분비용').GetRow(GetNumber('01_응찰_숫자변수1'), [
                        { key: '응찰_수지_처분_비용_적용값', value: '처분비율'}
                    ]);

                    if (GetNumber('응찰_수지_예상매각확신금액') > 0) {
                        SetValue('응찰_수지_처분_비용', Round(((GetNumber('응찰_수지_예상매각확신금액') - GetNumber('응찰_수지_취득_원가합계')) * (GetNumber('응찰_수지_처분_비용_적용값') / 100)) / 1000, 0) * 1000);
                    } else {
                        SetValue('응찰_수지_처분_비용', Round(((GetNumber('응찰_수지_예상매각금액') - GetNumber('응찰_수지_취득_원가합계')) * (GetNumber('응찰_수지_처분_비용_적용값') / 100)) / 1000, 0) * 1000);
                    }

                    SetValue('응찰_수지_처분_합계',  GetNumber('응찰_수지_처분_비용') + GetNumber('응찰_수지_처분_기타비용'));
                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_18_항목별합계 = new Command('Command_응찰_18_항목별합계', new JsonZoonData('Command_응찰_18_항목별합계', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_수지_항목별_비용합계',
                        GetNumber('응찰_수지_취득_총원가합계')
                        +GetNumber('응찰_수지_보유비용_합계')
                        +GetNumber('응찰_수지_처분_합계'));
                    if (GetNumber('응찰_수지_예상매각확신금액') > 0) {
                        SetValue('응찰_수지_항목별_수익합계', GetNumber('응찰_수지_보유수익_합계') + GetNumber('응찰_수지_예상매각확신금액'));
                    } else {
                        SetValue('응찰_수지_항목별_수익합계', GetNumber('응찰_수지_보유수익_합계') + GetNumber('응찰_수지_예상매각금액'));
                    }
                    SetValue('응찰_수지_항목별_예상손익',  GetNumber('응찰_수지_항목별_수익합계')-GetNumber('응찰_수지_항목별_비용합계'));
                    SetValue('응찰_수지_전체손익', GetNumber('응찰_수지_항목별_예상손익')-GetNumber('응찰_집계표_당사미회수채권액'));
                    // RunButton('Command_응찰_항목별합계');
                }
            });

        const Command_응찰_91_저장 = new Command('Command_응찰_91_저장', new JsonZoonData('Command_응찰_91_저장', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    if (GetString('응찰_입력표활성여부') == 'Y') {
                        return;
                    }
                    RunQuery('저장_40_응찰마스타', {
                        'YYYY' : GetValue('년도'),
                        'SEQ' : GetValue('감정순번'),
                        'AUC_NO' : GetValue('응찰_사항_사건번호'),
                        'COMPETENT_COURT' : GetValue('응찰_사항_관할법원'),
                        'AUC_GU' : GetValue('응찰_사항_경매구분'),
                        'AUC_DEPT' : GetValue('응찰_사항_경매계'),
                        'AUC_TELNO' : GetValue('응찰_사항_전화번호'),
                        'AUC_DEMUR' : GetValue('응찰_사항_경매신청채권자'),
                        'AUC_CHARGE_AMT' : GetValue('응찰_사항_청구금액'),
                        'AUC_START_DATE' : GetValue('응찰_사항_경매개시등기일'),
                        'AUC_DESC' : GetValue('응찰_사항_유입시특이사항'),
                        'BID_L_AMT' : GetValue('응찰_내용_토지_금액'),
                        'BID_L_DAN' : GetValue('응찰_내용_토지_단가'),
                        'BID_L_PY_DAN' : GetValue('응찰_내용_토지_단가_평당'),
                        'BID_B_AMT' : GetValue('응찰_내용_건물_금액'),
                        'BID_B_DAN' : GetValue('응찰_내용_건물_단가'),
                        'BID_B_PY_AMT' : GetValue('응찰_내용_건물_단가_평당'),
                        'BID_TOT_AMT' : GetValue('응찰_내용_법원감정가합계'),
                        'BID_PL_AMT' : GetValue('응찰_내용_입찰예정가_금액'),
                        'BID_APPL_RATE' : GetValue('응찰_내용_입찰예정가_낙찰가율'),
                        'DIV_CRED_MAX_AMT' : GetValue('응찰_집계표_최고채권액'),
                        'DIV_POSS_A_CASE' : GetValue('응찰_집계표_최고채권액Combo'),
                        'DIV_POSS_A_AMT' : GetValue('응찰_집계표_최고채권액Combo_Value'),
                        'DIV_PRIOR_MAX_AMT' : GetValue('응찰_집계표_선순위자채권최고액'),
                        'DIV_PRIOR_SHARE_AMT' : GetValue('응찰_집계표_선순위자배당금'),
                        'DIV_COMP_MAX_AMT' : GetValue('응찰_집계표_당사채권최고액'),
                        'DIV_COMP_SHARE_AMT' : GetValue('응찰_집계표_당사배당금'),
                        'DIV_COMP_UNR_AMT' : GetValue('응찰_집계표_당사미회수채권액'),
                        'RIGHT_ALLOT_AMT' : GetValue('응찰_수지_부담비용합계'),
                        'OBT_AMT' : GetValue('응찰_수지_실제취득가'),
                        'TENURE_YEAR' : GetValue('응찰_수지_예정_낙찰후매각가능'),
                        'STD_PRICE_RATE' : GetValue('응찰_수지_예상공시지가상승률'),
                        'PLAN_SALE_AMT' : GetValue('응찰_수지_예상매각금액'),
                        'SALE_AMT' : GetValue('응찰_수지_예상매각확신금액'),
                        'SALE_DESC' : GetValue('응찰_수지_예상매각확신사유'),
                        'IN_OBT_TAX_RATE' : GetValue('응찰_수지_취득_취득세_Combo'),
                        'IN_OBT_TAX' : GetValue('응찰_수지_취득_취득세'),
                        'IN_OBT_REG_TAX_RATE' : GetValue('응찰_수지_취득_등록세_Combo'),
                        'IN_OBT_REG_TAX' : GetValue('응찰_수지_취득_등록세'),
                        'IN_OBT_EXEU_AMT' : GetValue('응찰_수지_취득_강제집행'),
                        'IN_OBT_LOSS_AMT' : GetValue('응찰_수지_취득_채권매입'),
                        'IN_OBT_ETC_AMT' : GetValue('응찰_수지_취득_기타취득'),
                        'IN_OBT_EXEU_TOT' : GetValue('응찰_수지_취득_합계'),
                        'IN_OBT_WONGA_TOT' : GetValue('응찰_수지_취득_원가합계'),
                        'IN_OBT_TOTAL_AMT' : GetValue('응찰_수지_취득_총원가합계'),
                        'IN_EAR_RENT_AMT' : GetValue('응찰_수지_보유수익_임대수익'),
                        'IN_EAR_RENT_SEC_AMT' : GetValue('응찰_수지_보유수익_임대보증금'),
                        'IN_EAR_RENT_MON_AMT' : GetValue('응찰_수지_보유수익_월임대수입'),
                        'IN_EAR_RENT_ETC_AMT' : GetValue('응찰_수지_보유수익_기타수익'),
                        'IN_EAR_TOT_AMT' : GetValue('응찰_수지_보유수익_합계'),
                        'IN_EXP_OPP_AMT' : GetValue('응찰_수지_보유비용_기회비용'),
                        'IN_EXP_VAT_AMT' : GetValue('응찰_수지_보유비용_부가세'),
                        'IN_EXP_CORP_TAX' : GetValue('응찰_수지_보유비용_법인세'),
                        'IN_EXP_PROP_TAX' : GetValue('응찰_수지_보유비용_재산세'),
                        'IN_EXP_ESTA_GU' : GetValue('응찰_수지_보유비용_종부세_Combo'),
                        'IN_EXP_ESTA_AMT' : GetValue('응찰_수지_보유비용_종부세'),
                        'IN_EXP_ETC_AMT' : GetValue('응찰_수지_보유비용_기타유지보수비용'),
                        'IN_EXP_TOT_AMT' : GetValue('응찰_수지_보유비용_합계'),
                        'IN_DIS_GU' : GetValue('응찰_수지_처분_비용_Combo'),
                        'IN_DIS_AMT' : GetValue('응찰_수지_처분_비용'),
                        'IN_DIS_ETC_AMT' : GetValue('응찰_수지_처분_기타비용'),
                        'IN_DIS_TOT_AMT' : GetValue('응찰_수지_처분_합계'),
                        'ITOT_EXPENSE_AMT' : GetValue('응찰_수지_항목별_비용합계'),
                        'ITOT_EARNING_AMT' : GetValue('응찰_수지_항목별_수익합계'),
                        'ITOT_PROFIT_AMT' : GetValue('응찰_수지_항목별_예상손익'),
                        'FNL_PROFIT_AMT' : GetValue('응찰_수지_전체손익'),
                        'BID_YN' : GetValue('응찰_수지_응찰여부_Group'),
                    }, 'POST');
                    RunQuery('저장_42_응찰_전감정개요', {
                        'YYYY' : GetValue('년도'),
                        'SEQ' : GetValue('감정순번'),
                        'JUM_ESTI_DATE' : GetValue('응찰_개요_지점_감정일'),
                        'JUM_SABUN1' : GetValue('응찰_개요_지점_담당자'),
                        'JUM_SABUN2' : GetValue('응찰_개요_지점_파트장'),
                        'JUM_SABUN3' : GetValue('응찰_개요_지점_팀장'),
                        'JUM_SABUN4' : GetValue('응찰_개요_지점_지점장'),
                        'JUM_PL_MIN_BID_AMT' : GetValue('응찰_개요_지점_제1차예상낙찰가'),
                        'JUM_PL_BID_AMT' : GetValue('응찰_개요_지점_예상낙찰가'),
                        'JUM_PL_BID_RATE' : GetValue('응찰_개요_지점_예상낙찰가율'),
                        'JUM_SEC_AMT' : GetValue('응찰_개요_지점_담보여력'),
                        'JUM_COMP_AMT' : GetValue('응찰_개요_지점_당사채권금액'),
                        'JUM_COMP_RIGHT' : GetValue('응찰_개요_지점_당사순위및등기'),
                        'ESTI_DATE' : GetValue('응찰_개요_본사_감정일'),
                        'SABUN1' : GetValue('응찰_개요_본사_1차결재'),
                        'SABUN2' : GetValue('응찰_개요_본사_2차결재'),
                        'SABUN3' : GetValue('응찰_개요_본사_3차결재'),
                        'SABUN4' : GetValue('응찰_개요_본사_관재파트장'),
                        'SABUN5' : GetValue('응찰_개요_본사_팀장'),
                        'PL_MIN_BID_AMT' : GetValue('응찰_개요_본사_제1차예상낙찰가'),
                        'PL_BID_AMT' : GetValue('응찰_개요_본사_예상낙찰가'),
                        'PL_BID_RATE' : GetValue('응찰_개요_본사_예상낙찰가율'),
                        'SEC_AMT' : GetValue('응찰_개요_본사_담보여력'),
                        'COMP_AMT' : GetValue('응찰_개요_본사_당사채권금액'),
                        'COMP_RIGHT' : GetValue('응찰_개요_본사_당사순위및등기'),
                    }, 'POST');

                    GetComponent('DBGrid_응찰_기일내역').GetModifyData([
                        { key: '01_응찰_저장_11_년도', value: '년도', isDelRowInclude: true },
                        { key: '01_응찰_저장_11_일련번호', value: '일련번호', isDelRowInclude: true },
                        { key: '01_응찰_저장_11_회차', value: '회차', isDelRowInclude: true },
                        { key: '01_응찰_저장_11_일자', value: '일자', isDelRowInclude: true },
                        { key: '01_응찰_저장_11_금액', value: '금액', isDelRowInclude: true },
                        { key: '01_응찰_저장_11_유찰여부', value: '유찰여부', isDelRowInclude: true }
                    ]);
                    RunQuery('저장_41_응찰_기일내역', {
                        '01_응찰_저장_11_년도' : GetValue('01_응찰_저장_11_년도'),
                        '01_응찰_저장_11_일련번호' : GetValue('01_응찰_저장_11_일련번호'),
                        '01_응찰_저장_11_회차' : GetValue('01_응찰_저장_11_회차'),
                        '01_응찰_저장_11_일자' : GetValue('01_응찰_저장_11_일자'),
                        '01_응찰_저장_11_금액' : GetValue('01_응찰_저장_11_금액'),
                        '01_응찰_저장_11_유찰여부' : GetValue('01_응찰_저장_11_유찰여부')
                    }, 'POST');

                    GetComponent('DBGrid_응찰_권리내역').GetModifyData([
                        { key : '응찰_저장_13_년도', value : '년도', isDelRowInclude : true },
                        { key : '응찰_저장_13_일련번호', value : '일련번호', isDelRowInclude : true },
                        { key : '응찰_저장_13_순번', value : '순번', isDelRowInclude : true },
                        { key : '응찰_저장_13_금액', value : '금액', isDelRowInclude : true },
                        { key : '응찰_저장_13_권리자', value : '권리자', isDelRowInclude : true },
                        { key : '응찰_저장_13_권리내역', value : '권리내역', isDelRowInclude : true },
                    ]);
                    RunQuery('저장_43_응찰_선순위권리내역', {
                        '01_응찰_저장_13_년도': GetValue('01_응찰_저장_13_년도'),
                        '01_응찰_저장_13_일련번호': GetValue('01_응찰_저장_13_일련번호'),
                        '01_응찰_저장_13_순번': GetValue('01_응찰_저장_13_순번'),
                        '01_응찰_저장_13_금액': GetValue('01_응찰_저장_13_금액'),
                        '01_응찰_저장_13_권리자': GetValue('01_응찰_저장_13_권리자'),
                        '01_응찰_저장_13_권리내역': GetValue('01_응찰_저장_13_권리내역')
                    }, 'POST');

                    GetComponent('DBGrid_응찰_부담내역').GetModifyData([
                        { key : '01_응찰_저장_14_년도', value : '년도', isDelRowInclude : true },
                        { key : '01_응찰_저장_14_일련번호', value : '일련번호', isDelRowInclude : true },
                        { key : '01_응찰_저장_14_순번', value : '순번', isDelRowInclude : true },
                        { key : '01_응찰_저장_14_금액', value : '금액', isDelRowInclude : true },
                        { key : '01_응찰_저장_14_권리자', value : '권리자', isDelRowInclude : true },
                        { key : '01_응찰_저장_14_권리내역', value : '권리내역', isDelRowInclude : true },
                    ]);
                    RunQuery('저장_44_응찰_선순위부담금액', {
                        '01_응찰_저장_14_년도' : GetValue('01_응찰_저장_14_년도'),
                        '01_응찰_저장_14_일련번호' : GetValue('01_응찰_저장_14_일련번호'),
                        '01_응찰_저장_14_순번' : GetValue('01_응찰_저장_14_순번'),
                        '01_응찰_저장_14_금액' : GetValue('01_응찰_저장_14_금액'),
                        '01_응찰_저장_14_권리자' : GetValue('01_응찰_저장_14_권리자'),
                        '01_응찰_저장_14_권리내역' : GetValue('01_응찰_저장_14_권리내역')
                    }, 'POST');
                    RunButton('Command_응찰_00_메인');
                }
            });

        const Command_임대사례_삭제 = new Command('Command_임대사례_삭제', new JsonZoonData('Command_임대사례_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_임대사례').GetCurlSel('감정가_임대_현재행');
                    GetComponent('DBGrid_임대사례').DeleteRow(GetNumber('감정가_임대_현재행'));
                }
            });

        const Command_임대사례_추가 = new Command('Command_임대사례_추가', new JsonZoonData('Command_임대사례_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_임대사례').GetRowCount('감정가_임대_RowCount');

                    EmptyArray('감정가_임대_사례번호_배열');

                    GetComponent('DBGrid_임대사례').GetRows('', [
                        { key: '감정가_임대_사례번호_배열', value: '사례번호'}
                    ]);

                    if (isEmpty(GetValue('감정가_임대_사례번호_배열'))) {
                        SetArray('감정가_임대_사례번호_배열', 0, 0);
                    }
                    SetValue('감정가_임대_사례번호_MAX', Max('감정가_임대_사례번호_배열') + 1);
                    SetValue('감정가_임대_현재행', GetValue('감정가_임대_사례번호_MAX'));

                    GetComponent('DBGrid_임대사례').AddRow({
                        '년도' : GetValue('년도'),
                        '일련번호' : GetValue('감정순번'),
                    });

                    GetComponent('DBGrid_임대사례').SetRow(GetNumber('감정가_임대_RowCount'), [
                        { key: '사례번호', value: GetValue('감정가_임대_현재행')},
                        { key: '임대_운용이율', value: '5'},
                    ]);

                    GetComponent('DBGrid_임대사례').SetCurSelCol();
                    GetComponent('DBGrid_임대사례').SetEditFocus(GetNumber('감정가_임대_RowCount')-1, '소재지');
                    // BreakMacro...
                }
            });

        const Command_저장 = new Command('Command_저장', new JsonZoonData('Command_저장', {}),{
            isShow : GetString('isReadOnly') == 'N',
            isEnable : true
        })
            .on({
                click : function() {
                    if(match(PageType.집합_오피스텔) || match(PageType.집합_상업용)) {
                        if (isEmpty(GetValue('Edit_입력표_거래처'))) {
                            MsgBox("[제1차 거래처]" + "를 입력하세요.", "확인", true);
                            return;
                        }

                        // TODO: 해당조건 확인필요
                        if (GetString('is배당처리') == 'Y') {
                            if (!MsgBox("저장하시겠습니까?", "알림", false)) {
                                return;
                            }
                        }

                        if (isEmpty(GetValue('감정순번'))) {
                            MC_900_저장_Key만들기();
                        }
                        MC_990_저장_ValidationCheck();

                        if (isNotEmpty(GetValue('저장_Error_Message'))) {
                            MsgBox(GetValue('저장_Error_Message'), '', true);
                            return;
                        }

                        if (isEmpty(GetValue('Edit_Doc_Key'))) {
                            RunQuery('Q_영업감정요청자료', {
                                '전체선택여부': GetValue('전체선택여부')
                            });
                            alert('[감정요청자료 문서]가 선택되지 않았습니다.');
                            // GetComponent('SubForm_감정요청자료_영업').ShowSubForm();
                            return;
                        }

                        MC_901_저장_그리드_키값();
                        MC_910_저장_입력표();
                        if (match(PageType.집합_오피스텔)) {
                            MC_911_저장_감정가1();
                        }
                        MC_912_저장_문서관리();

                        RunQuery('저장_배당금_배당표M', {
                            'YYYY' : GetValue('Edit_KEY_년도'),
                            'SEQ' : GetValue('Edit_KEY_감정순번'),
                            'AUCTION_CODE' : GetValue('Combo_배당표_최고채권액'),
                            'AUCTION_AMT' : GetNumber('Edit_배당표_경매비용'),
                            'H_PL_BID_AMT' : GetNumber('Edit_배당표_예상낙찰가'),
                            'H_POSS_AMT' : GetValue('Edit_배당표_경락가액'),
                            'H_POSS_A_AREA' : GetValue('Combo_배당표_가임대보증금적용범위'),
                            'H_POSS_A_AMT' : GetValue('Edit_배당표_적용할주택가임대보증금액'),
                            'CRED_MAX_AMT' : GetValue('Edit_배당표_최고채권액'),
                            'B_PL_BID_AMT' : GetValue('Edit_배당표_상가_예상낙찰가'),
                            'B_POSS_AMT' : GetValue('Edit_배당표_상가_경락가액'),
                            'B_POSS_A_AREA' : GetValue('Combo_배당표_상가_가임대보증금_적용범위'),
                            'B_POSS_A_AMT' : GetValue('Edit_배당표_적용할상가가임대보증금액'),
                        }, 'POST');

                        if (match(PageType.집합_오피스텔)) {
                            MC_999_저장_주택임차보증금();
                        } else if (match(PageType.집합_상업용)) {
                            MC_저장_상가임차보증금();
                        }

                        MC_999_저장_배당금();

                        RunQuery('Q_담보마스터', {
                            '년도' : GetValue('년도'),
                            '감정순번' : GetValue('감정순번'),
                        });

                        GetZoonData('Q_담보마스터').GetRow(0, [
                            { key: '02_배당표수정여부', value: 'SHARE_YN'}
                        ]);

                        RunQuery('저장_담보마스타_담보여력등', {
                            '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                            'YYYY': GetValue('년도'),
                            'SEQ': GetValue('감정순번'),
                        }, 'POST');
                        RunButton('Command_응찰_91_저장')

                        MC_002_초기화_Query_Loading();

                        if (match(PageType.집합_오피스텔)) {
                            MC_999_배당();
                        }

                        GetComponent('TabControl1').EnableTab(5, 1);
                        GetComponent('TabControl1').EnableTab(6, 1);

                        MC_공통보고서_조회();
                        SetValue('is배당처리',"");
                    } else if(match(PageType.집합_아파트)) {
                        if (GetValue('is배당처리') == 'Y') {
                            if (!MsgBox("저장하시겠습니까?", "알림", false)) {
                                return;
                            }
                        }

                        if (isEmpty(GetValue('감정순번'))) {
                            MC_저장_Key만들기();
                        }

                        GetComponent('DBGrid_본건').FindIndexArray('m_index',(row) => {
                            return row['YYYY'] != 1111;
                        });

                        GetComponent('DBGrid_본건').SetRows(GetValue('m_index'),[
                            { key : 'YYYY' , value: GetValue('년도')},
                            { key : 'SEQ' , value: GetValue('감정순번')}
                        ]);

                        GetComponent('DBGrid_경매사례').FindIndexArray('m_index',(row) => {
                            return row['YYYY'] != 1111;
                        });

                        GetComponent('DBGrid_경매사례').SetRows(GetValue('m_index'),[
                            { key : 'YYYY' , value: GetValue('년도')},
                            { key : 'SEQ' , value: GetValue('감정순번')}
                        ]);

                        GetComponent('DBGrid_가격사례_M').FindIndexArray('m_index',(row) => {
                            return row['YYYY'] != 1111;
                        });

                        GetComponent('DBGrid_가격사례_M').SetRows(GetValue('m_index'),[
                            { key : 'YYYY' , value: GetValue('년도')},
                            { key : 'SEQ' , value: GetValue('감정순번')}
                        ]);

                        GetComponent('DBGrid_배당표_주택임대차보증금_계산').FindIndexArray('m_index',(row) => {
                            return row['YYYY'] != 1111;
                        });

                        GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRows(GetValue('m_index'),[
                            { key : 'YYYY' , value: GetValue('년도')},
                            { key : 'SEQ' , value: GetValue('감정순번')}
                        ]);

                        GetComponent('DBGrid_배당금_계산').FindIndexArray('m_index',(row) => {
                            return row['YYYY'] != 1111;
                        });

                        GetComponent('DBGrid_배당금_계산').SetRows(GetValue('m_index'),[
                            { key : 'YYYY' , value: GetValue('년도')},
                            { key : 'SEQ' , value: GetValue('감정순번')}
                        ]);

                        //RunMacro
                        MC_저장_ValidationCheck();

                        if (isNotEmpty(GetValue('저장_Error_Message'))) {
                            MsgBox(GetValue('저장_Error_Message'), '', true);
                            return;
                        }

                        if (isEmpty(GetValue('Edit_Doc_Key'))) {
                            RunQuery('Q_영업감정요청자료', {
                                '전체선택여부' : GetValue('전체선택여부'),
                                '부서코드' : GetValue('부서코드'),
                            }, 'GET');
                            alert('[감정요청자료 문서]가 선택되지 않았습니다.');
                            return;
                            // GetComponent('SubForm_감정요청자료_영업').ShowSubForm();
                        }

                        MC_저장_입력표();

                        MC_저장_감정가();

                        RunQuery('저장_낙찰가율보정표', {
                            'YYYY' : GetValue('년도'),
                            'SEQ' : GetValue('감정순번'),
                            'P_BID_RATE' : GetValue('MkEdit_보정표_당해지역낙찰가율'),
                            'K_BID_RATE' : GetValue('MkEdit_보정표_유사부동산낙찰가율'),
                            'B_BID_RATE' : GetValue('MkEdit_보정표_기준낙찰가율'),
                            'APPL_RATE' : GetValue('MkEdit_보정표_적용할낙찰가율'),
                            'RIGHTS_CODE' : GetValue('Combo_점유자의권리형태'),
                            'RIGHTS_RATE' : GetValue('MkEdit_보정표_점유자의권리형태'),
                            'INCREASE_AMT' : GetValue('MkEdit_보정표_평가가격'),
                            'PL_MIN_BID_AMT' : GetValue('MkEdit_보정표_최저입찰가'),
                            'PL_BID_AMT' : GetValue('MkEdit_보정표_예상낙찰가'),
                            'APT_SCALE' : GetValue('Combo_아파트단지규모'),
                            'APT_SCALE_RATE' : GetValue('MkEdit_보정표_아파트단지규모_적용율'),
                            'APT_EXM_SIZE' : GetValue('Combo_전유부분의면적'),
                            'APT_EXM_RATE' : GetValue('MkEdit_보정표_전유부분면적_적용율'),
                            'APT_FLOOR_CODE' : GetValue('Combo_전유부분의위치'),
                            'APT_FLOOR_RATE' : GetValue('MkEdit_보정표_전유부분위치_적용율'),
                            'APT_ELAP_SIZE' : GetValue('Combo_건축물경과년도'),
                            'APT_ELAP_RATE' : GetValue('MkEdit_보정표_건축물의경과년도_적용율'),
                        }, 'POST');

                        RunQuery('저장_배당금_배당표M', {
                            'YYYY' : GetValue('년도'),
                            'SEQ' : GetValue('감정순번'),
                            'AUCTION_CODE' : GetValue('Combo_배당표_최고채권액'),
                            'AUCTION_AMT' : GetNumber('Edit_배당표_경매비용'),
                            'H_PL_BID_AMT' : GetNumber('Edit_배당표_예상낙찰가'),
                            'H_POSS_AMT' : GetValue('Edit_배당표_경락가액'),
                            'H_POSS_A_AREA' : GetValue('Combo_배당표_가임대보증금적용범위'),
                            'H_POSS_A_AMT' : GetValue('Edit_배당표_적용할주택가임대보증금액'),
                            'CRED_MAX_AMT' : GetValue('Edit_배당표_최고채권액'),
                        }, 'POST');

                        MC_저장_주택임대차보증금();
                        MC_저장_배당금();
                        MC_저장_문서관리();

                        RunQuery('Q_담보마스타', {
                            '년도' : GetValue('년도'),
                            '감정순번' : GetValue('감정순번'),
                        }, 'GET');

                        GetZoonData('Q_담보마스타').GetRow(0,[
                            {key : '02_배당표수정여부' , value : 'SHARE_YN'}
                        ]);

                        RunQuery('Q_담보마스타_담보여력등', {
                            'YYYY' : GetValue('년도'),
                            'SEQ' : GetValue('감정순번'),
                        });

                        RunButton('Command_응찰_91_저장');

                        if (GetValue('is배당처리') != 'Y') {
                            if(!MsgBox("정상적으로 저장되었습니다", '[알림]', true)) {
                                return;
                            }
                        }

                        GetComponent('TabControl1').EnableTab(5, 1);
                        GetComponent('TabControl1').EnableTab(6, 1);

                        MC_공통보고서_조회();
                        SetValue('is배당처리',"");

                    } else if (match(PageType.토건_주거)) {
                        if (GetString('is배당처리') == 'Y') {
                            if (!MsgBox("저장하시겠습니까?", "알림", false)) {
                                return;
                            }
                        }

                        if (isEmpty(GetValue('감정순번'))) {
                            MC_900_저장_Key만들기();
                        }

                        MC_저장_키설정();
                        MC_990_저장_ValidationCheck();

                        if (isNotEmpty(GetValue('저장_Error_Message'))) {
                            MsgBox(GetValue('저장_Error_Message'), '', true);
                            return;
                        }

                        if (isNotEmpty(GetValue('저장_Error_Message'))) {
                            MsgBox(GetValue('저장_Error_Message'), '', true);
                            return;
                        }

                        GetComponent('TabControl1').SetCurSel(GetNumber('탭_Idx'));

                        if (isEmpty(GetValue('Edit_Doc_Key'))) {
                            RunQuery('Q_영업감정요청자료', {});
                            alert('[감정요청자료 문서]가 선택되지 않았습니다.');
                            return;
                        }

                        MC_저장_쿼리호출();
                        MC_저장_배당금_권리자_CLEAR();

                        RunQuery('Q_담보마스타', {
                            'YYYY': GetValue('년도'),
                            'SEQ': GetValue('감정순번'),
                        });

                        GetZoonData('Q_담보마스타').GetRow(0, [
                            {key: '02_배당표수정여부', value: 'SHARE_YN'}
                        ]);

                        RunQuery('저장_담보마스타_담보여력등', {
                            '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                            'YYYY': GetValue('년도'),
                            'SEQ': GetValue('감정순번'),
                        }, 'POST');

                        RunButton('Command_응찰_91_저장');

                        if (GetValue('is배당처리') == 'Y') {
                            if(!MsgBox("정상적으로 저장되었습니다", '[알림]', false)) {
                                return;
                            }
                        }

                        GetComponent('TabControl1').EnableTab(5, 1);
                        GetComponent('TabControl1').EnableTab(6, 1);

                        MC_공통보고서_조회();
                        SetValue('is배당처리', "");
                    }
                }
            });

        const Command_적용할낙찰가율 = new Command('Command_적용할낙찰가율', new JsonZoonData('Command_적용할낙찰가율', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    if(match(PageType.집합_오피스텔) || match(PageType.집합_상업용)){
                        SetValue('MkEdit_보정표_평가가격', GetNumber('MkEdit_평가_담보_평가가격'));
                        SetValue('MkEdit_보정표_최저입찰가', GetNumber('MkEdit_평가_담보_최종평가가격'));

                        //Formula
                        SetValue('MkEdit_보정표_기준낙찰가율',(GetNumber('MkEdit_보정표_당해지역낙찰가율')
                            +GetNumber('MkEdit_보정표_유사부동산낙찰가율'))/2);

                        SetValue('MkEdit_보정표_적용할낙찰가율', GetNumber('MkEdit_보정표_기준낙찰가율')
                            *GetNumber('MkEdit_보정표_전유부분면적_적용율')
                            *GetNumber('MkEdit_보정표_입지조건_적용율')
                            *GetNumber('MkEdit_보정표_전유부분위치_적용율')
                            *GetNumber('MkEdit_보정표_건축물의경과년도_적용율')
                            *GetNumber('MkEdit_보정표_점유자의권리형태_적용율'));

                        SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                        //SetMultiValue
                        SetValue('Edit_배당표_적용할상가가임대보증금액', 0);
                        SetValue('Edit_배당표_적용할주택가임대보증금액', 0);
                        SetValue('Edit_배당표_경락가액', 0);
                        SetValue('Edit_배당표_예상낙찰가', 0);
                        SetValue('Edit_배당표_상가_경락가액', 0);
                        SetValue('Edit_배당표_상가_예상낙찰가', 0);

                        // IfMacro
                        if (GetNumber('Combo_입력표_용도') == 1) {
                            MC_999_배당표_주택임대차보증금_계산_전체();
                        } else if (GetNumber('Combo_입력표_용도') == 2) {
                            MC_배당표_상가임대차보증금_계산_전체();
                        }
                    }else if(match(PageType.집합_아파트)){
                        SetValue('MkEdit_보정표_적용할낙찰가율',GetNumber('MkEdit_보정표_기준낙찰가율')
                            *GetNumber('MkEdit_보정표_아파트단지규모_적용율')
                            *GetNumber('MkEdit_보정표_전유부분면적_적용율')
                            *GetNumber('MkEdit_보정표_전유부분위치_적용율')
                            *GetNumber('MkEdit_보정표_건축물의경과년도_적용율')
                            *GetNumber('MkEdit_보정표_점유자의권리형태'));


                        SetValue('MkEdit_보정표_예상낙찰가', Round((GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)/1000,0)*1000);

                    }
                    RunButton('Command_응찰_02_이벤트');
                }
            });

        const Command_전감정_본사_예상낙찰가계산 = new Command('Command_전감정_본사_예상낙찰가계산', new JsonZoonData('Command_전감정_본사_예상낙찰가계산', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_개요_본사_예상낙찰가', Round(Round(GetNumber('응찰_개요_본사_제1차예상낙찰가')*(GetNumber('응찰_개요_본사_예상낙찰가율')/100),0)/1000,0)*1000);
                }
            });

        const Command_전감정_지점_예상낙찰가계산 = new Command('Command_전감정_지점_예상낙찰가계산', new JsonZoonData('Command_전감정_지점_예상낙찰가계산', {}),{
            isShow : false,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('응찰_개요_지점_예상낙찰가', Round(Round(GetNumber('응찰_개요_지점_제1차예상낙찰가')*(GetNumber('응찰_개요_지점_예상낙찰가율')/100),0)/1000,0)*1000);
                }
            });

        const Command_조회 = new Command('Command_조회', new JsonZoonData('Command_조회', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('거래처명', GetValue('Edit_거래처명'));

                    if (match(PageType.집합_오피스텔) || match(PageType.집합_상업용)) {
                        RunQuery('Q_POPUP_거래처목록', {
                            '거래처명' : GetValue('거래처명'),
                        });
                    } else if (match(PageType.집합_아파트) || match(PageType.토건_주거)) {
                        RunQuery('Q_거래처목록', {
                            '거래처명' : GetValue('거래처명'),
                        });
                    }
                }
            });

        const Command_조회1 = new Command('Command_조회1', new JsonZoonData('Command_조회1', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('읍면동', GetValue('Edit_읍면동'));

                    if (match(PageType.집합_오피스텔) || match(PageType.집합_상업용)) {
                        RunQuery('Q_POPUP_주소목록', {
                            '읍면동' : GetValue('읍면동'),
                        });
                    } else if (match(PageType.집합_아파트) || match(PageType.토건_주거)){
                        RunQuery('Q_주소목록', {
                            '읍면동' : GetValue('읍면동'),
                        });
                    }
                }
            });

        const Command1 = new Command('Command1', new JsonZoonData('Command1', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');
                    EmptyArray('건물의표시_등기구분_Arr');
                    EmptyArray('건물의표시_지번_Arr');
                    for (let i=0; i<GetNumber('건물의표시_RowCount'); i++) {
                        SetValue('i', i);
                        MC_담보제공비율_건물_등기구분();
                    }

                    for (let i=GetNumber('건물의표시_RowCount')-1; i>=0; i--) {
                        SetValue('i', i);
                        MC_담보제공비율_건물_등기구분_DeleteRow();
                    }

                    SetValue('건물의표시_RowCount', GetArrayCnt('건물의표시_등기구분_Arr'));

                    for (let i=0; i<GetNumber('건물의표시_RowCount'); i++) {
                        SetValue('i', i);
                        MC_담보제공비율_건물_등기구분_AddRow();
                    }

                    MC_담보제공비율_건물_비율();
                }
            });

        const Command_가격사례_D_삭제 = new Command('Command_가격사례_D_삭제', new JsonZoonData('Command_가격사례_D_삭제', {}),{
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                GetComponent('DBGrid_가격사례_D').GetCurSel('가격사례_D_RowPosition');
                GetComponent('DBGrid_가격사례_D').GetRow(-1,[
                    {key : '가격사례_사례번호' , value : 'LN_SEQ'},
                    {key : '가격사례_생성번호' , value : 'RNO'},
                ]);

                GetZoonData('Q_가격사례_D').FindIndex('i', (row) => {
                    return row['LN_SEQ'] == GetValue('가격사례_사례번호') && row['RNO'] == GetValue('가격사례_생성번호');
                });

                if(GetNumber('i') >=0 ){
                    GetZoonData('Q_가격사례_D').DeleteRow(GetNumber('i'));
                }
                GetZoonData('Q_가격사례_D').ReplaceQuery();

                MC_가격사례_금액();
            }
        });

        const Command_가격사례_D_추가 = new Command('Command_가격사례_D_추가', new JsonZoonData('Command_가격사례_D_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_가격사례_M').GetRow(-1,[
                        {key : '가격사례_사례번호', value : 'LN_SEQ'}
                    ]);

                    if (isEmpty(GetValue('가격사례_사례번호'))) {
                        MsgBox('사례번호가 입력되지 않았습니다.');
                        return;
                    }

                    GetComponent('DBGrid_가격사례_D').GetRows('',[
                        {key : '가격사례_생성번호_Arr', value : 'RNO'}
                    ]);

                    SetValue('가격사례_D_생성번호',Max('가격사례_생성번호_Arr')+1);

                    GetComponent('DBGrid_가격사례_D').AddRow({
                        'CHECK_YN': 0,
                        'LN_SEQ': GetValue('가격사례_사례번호'),
                        'RNO': GetValue('가격사례_D_생성번호'),
                    });

                    GetComponent('DBGrid_가격사례_D').GetRowCount('가격사례_D_RowCount');

                    SetValue('가격사례_D_RowCount', GetNumber('가격사례_D_RowCount')-1);

                    GetComponent('DBGrid_가격사례_D').SetCurSel(GetNumber('가격사례_D_RowCount'));

                    GetComponent('DBGrid_가격사례_D').SetEditFocus(GetNumber('가격사례_D_RowCount') -1, 'b_size');

                    GetComponent('DBGrid_가격사례_D').SetRow(-1, [
                        { key: 'SAMPLE_NO', value: GetValue('가격사례_M_사례번호') }
                    ]);
                }
            });

        const Command_가격사례_M_삭제 = new Command('Command_가격사례_M_삭제', new JsonZoonData('Command_가격사례_M_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_가격사례_M').GetCurSel('가격사례_M_RowPosition');

                    GetComponent('DBGrid_가격사례_M').DeleteRow(GetNumber('가격사례_M_RowPosition'));

                    GetComponent('DBGrid_가격사례_D').GetRow(-1,[
                        {key : '가격사례_사례번호' , value : 'LN_SEQ'},
                        {key : '가격사례_생성번호' , value : 'RNO'},
                    ]);

                    // 확인 필요 -- 이지용
                    GetZoonData('Q_가격사례_D').FindIndexArray('i_Arr', (row) => {
                        return row['LN_SEQ'] == GetValue('가격사례_사례번호');
                    });

                    SetValue('가격사례_D_삭제건수',GetArrayCnt('i_Arr'));

                    if(GetNumber('가격사례_D_삭제건수') < 0){
                        return;
                    }

                    for(let i = 0; i < GetNumber('가격사례_D_삭제건수') ; i+=1){
                        SetValue('i', i);

                        MC_가격사례_D_삭제();
                    }
                }
            });

        const Command_가격사례_M_추가 = new Command('Command_가격사례_M_추가', new JsonZoonData('Command_가격사례_M_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {

                    GetComponent('DBGrid_가격사례_M').GetRows('', [
                        {key : '가격사례_M_사례번호_Arr' , value : 'LN_SEQ'}
                    ]);

                    SetValue('가격사례_M_사례번호',Max('가격사례_M_사례번호_Arr')+1);

                    GetComponent('DBGrid_가격사례_M').AddRow({
                        'YYYY' : GetValue('년도'),
                        'SEQ' : GetValue('감정순번'),
                        'LN_SEQ' : GetValue('가격사례_M_사례번호'),
                    });

                    GetComponent('DBGrid_가격사례_M').GetRowCount('가격사례_M_RowCount');

                    SetValue('가격사례_M_RowCount', GetNumber('가격사례_M_RowCount')-1);

                    GetComponent('DBGrid_가격사례_M').SetCurSel(GetNumber('가격사례_M_RowCount'));

                    GetComponent('DBGrid_가격사례_M').SetEditFocus(GetNumber('가격사례_M_RowCount') -1, 'b_size');
                }
            });

        const Command_본건_삭제 =  new Command('Command_본건_삭제', new JsonZoonData('Command_본건_삭제', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    if (match(PageType.토건_주거)) {

                    } else {
                    GetComponent('DBGrid_본건').GetRow(-1,[
                            {key : '본건_Checkbox' , value : 'CHECK_YN'}
                        ]);

                        if ( GetValue('본건_Checkbox') == "1" ) {
                            SetValue('MkEdit_본건_최저가격',0);
                            SetValue('MkEdit_본건_최고가격',0);
                            SetValue('MkEdit_본건_비율',0);
                        }

                    GetComponent('DBGrid_본건').GetCurSel('본건_RowPosition');

                    GetComponent('DBGrid_본건').DeleteRow(GetNumber('본건_RowPosition'));
                    }
                }
            });

        const Command_본건_추가 = new Command('Command_본건_추가', new JsonZoonData('Command_본건_추가', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    if (match(PageType.토건_주거)) {

                    } else {
                        GetComponent('DBGrid_본건').AddRow({
                            'CHECK_YN' : 0,
                            'YYYY' : GetValue('년도'),
                            'SEQ' : GetValue('감정순번'),
                        });

                        GetComponent('DBGrid_본건').GetRowCount('본건_RowCount');

                        SetValue('본건_RowCount',GetNumber('본건_RowCount')-1);

                        GetComponent('DBGrid_본건').SetCurSel(GetNumber('본건_RowCount'));

                        GetComponent('DBGrid_본건').SetEditFocus(GetNumber('본건_RowCount') - 1, 'b_size');
                    }
                }
            });

        const Command_선택 = new Command('Command_선택', new JsonZoonData('Command_선택', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_거래처').GetRow(-1, [
                        { key: '팝업_거래처명', value: 'SANGHO'},
                        { key: '팝업_거래처코드', value: 'GEO_CODE'},
                        { key: '팝업_대표자', value: 'DAEPYO_NAME'},
                    ]);

                    SetValue('Edit_입력표_거래처', GetValue('팝업_거래처명'));
                    SetValue('Edit_입력표_거래처코드', GetValue('팝업_거래처코드'));
                    SetValue('Edit_입력표_대표자', GetValue('팝업_대표자'));
                    GetComponent('SubForm_거래처조회').HideSubForm();
                }
            });

        const Command_선택_1 = new Command('Command_선택_1', new JsonZoonData('Command_선택', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    MC_주소반환();
                }
            });

        // DBGrid ----------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        const Q_감정가_01_가격사례 = new JsonZoonData('Q_감정가_01_가격사례', {});
        const DBGrid_가격사례 = new DBGrid('DBGrid_가격사례', Q_감정가_01_가격사례,{
            isShow : true,
            isEnable : true
        })
            .on('OnButtonClick', function() {
                SetValue('팝업_주소창호출위치', '감정가_가격사례');
                GetComponent('SubForm_주소조회').ShowSubForm((data) => {
                    GetComponent('DBGrid_가격사례').SetRow(-1, [
                        { key: '소재지', value: GetValue('감정가_가격_소재지') }
                    ]);
                });
            })
            .on('OnEditChanged', function() {
                GetComponent('DBGrid_가격사례').GetCurColName('감정가_가격_GridColName');

                if (GetString('감정가_가격_GridColName') == '층수_코드') {
                    MC_201_DBGrid_가격사례_EVENT_해당층();
                } else if (GetString('감정가_가격_GridColName') == '구조') {
                    MC_201_DBGrid_가격사례_EVENT_구조();
                }
            })
            .on('OnValidate', function() {
                MC_201_DBGrid_가격사례_EVENT_경과년도();
                MC_201_DBGrid_가격사례_EVENT_사례가격();
            });

        const Q_영업감정요청자료 = new JsonZoonData('Q_영업감정요청자료', {});
        const DBGrid_감정요청자료_영업 = new DBGrid('DBGrid_감정요청자료_영업', Q_영업감정요청자료,{
            isShow : true,
            isEnable : true
        })
            .on('dblclick', function() {
                GetComponent('DBGrid_감정요청자료_영업').GetRow(-1, [
                    { key: 'Edit_Doc_Key', value: 'DOC_KEY'},
                    { key: 'Edit_Doc_Name', value: 'DOC_NAME'}
                ]);
                GetComponent('SubForm_감정요청자료_영업').HideSubForm();
            });

        const Q_POPUP_거래처목록 = new JsonZoonData('Q_POPUP_거래처목록', {});
        const Q_거래처목록 = new JsonZoonData('Q_거래처목록', {});
        const DBGrid_거래처 = new DBGrid('DBGrid_거래처', match(PageType.집합_아파트) ? Q_거래처목록 : Q_POPUP_거래처목록,{
            isShow : true,
            isEnable : true
        })
            .on('dblclick', function() {
                if(match(PageType.집합_아파트)){
                    GetComponent('DBGrid_거래처').GetRow(-1,[
                        {key : '팝업_거래처명', value : 'SANGHO'},
                        {key : '팝업_거래처코드', value : 'GEO_CODE'},
                        {key : '팝업_대표자', value : 'DAEPYO_NAME'},
                    ]);

                    SetValue('Edit_거래처코드',GetValue('팝업_거래처코드'));
                    SetValue('Edit_거래처',GetValue('팝업_거래처명'));
                    SetValue('Edit_대표자',GetValue('팝업_대표자'));

                    GetComponent('SubForm_거래처조회').HideSubForm();
                }else if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                    RunButton('Command_선택_거래처');
                }
            });

        const Q_감정가_02_경매사례 = new JsonZoonData('Q_감정가_02_경매사례', {});
        const Q_감정가_경매사례 = new DBGridZoonData('Q_감정가_경매사례', {}, [
            'LN_SEQ',
            'YYYY',
            'SEQ',
            'B_SIZE',
            'CHECK_YN',
            'B_NAME',
            'JUSO',
            '주소팝업',
            'TOT_FLOOR',
            'FLOOR',
            'B_SIZE_PY',
            'LAW_AMT',
            'CURR_PY_DAN',
            'BID_AMT',
            'BID_RATE',
            'AU_NO',
        ]);
        const DBGrid_경매사례 = new DBGrid('DBGrid_경매사례', match(PageType.집합_아파트) ? Q_감정가_경매사례 : Q_감정가_02_경매사례,{
            isShow : true,
            isEnable : true
        })
            .on('OnButtonClick', function() {
                if (match(PageType.집합_아파트)) {
                    SetValue('팝업_주소창호출위치', '감정가_경매사례');
                    GetComponent('SubForm_주소조회').ShowSubForm((data) => {
                        GetComponent('DBGrid_경매사례').SetRow(-1, [
                            { key: 'JUSO', value: GetValue('감정가_경매_소재지')}
                        ]);
                    });
                }else if (match(PageType.집합_상업용) || match(PageType.집합_오피스텔)) {
                    SetValue('팝업_주소창호출위치', '감정가_경매사례');

                    GetComponent('SubForm_주소조회').ShowSubForm((data) => {
                        GetComponent('DBGrid_경매사례').SetRow(-1, [
                            { key: '소재지', value: GetValue('감정가_경매_소재지')}
                        ]);
                    });
                }
            })
            .on('OnEditChanged', function() {
                // OnEditChanged
                if (match(PageType.집합_상업용) || match(PageType.집합_오피스텔)) {
                    GetComponent('DBGrid_경매사례').GetCurColName('감정가_경매_GridColName');

                    if (GetString('감정가_경매_GridColName') == '층수_코드') {
                        MC_202_DBGrid_경매사례_EVENT_해당층();
                    } else if (GetString('감정가_경매_GridColName') == '구조') {
                        MC_202_DBGrid_경매사례_EVENT_구조();
                    }

                } else if (match(PageType.집합_아파트)) {
                    GetComponent('DBGrid_경매사례').GetRow(-1, [
                        {key : '경매_낙찰가격' , value : 'BID_AMT'},
                        {key : '경매_법사가격' , value : 'LAW_AMT'},
                        {key : '경매_평형' , value : 'B_SIZE_PY'},
                    ]);

                    SetValue('경매_낙찰가율',(GetNumber('경매_낙찰가격') / GetNumber('경매_법사가격'))*100);
                    SetValue('경매_평당단가', Round(Round(GetNumber('경매_법사가격')/GetNumber('경매_평형'),0)/1000,0)*1000 );


                    GetComponent('DBGrid_경매사례').SetRow(-1, [
                        {key : 'BID_RATE' , value: GetValue('경매_낙찰가율')},
                        {key : 'CURR_PY_DAN' , value: GetValue('경매_평당단가')},
                    ]);

                    GetComponent('DBGrid_경매사례').GetRows('', [
                        {key : '경매_낙찰가격_Arr' , value : 'BID_AMT'},
                    ]);

                    MC_경매_금액();

                }
            })
            .on('OnValidate', function() {
                if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                    MC_202_DBGrid_경매사례_EVENT_경과년도();
                    MC_202_DBGrid_경매사례_EVENT_사례가격();
                }
            });

        const Q_도로명주소목록 = new JsonZoonData('Q_도로명주소목록', {});
        const DBGrid_도로주소_목록 = new DBGrid('DBGrid_도로주소_목록', Q_도로명주소목록,{
            isShow : true,
            isEnable : true
        })
            .on('dblclick', '.button', function() {
                MC_도로주소반환();
            });


        const Q_문서관리_관련문서 = new DBGridZoonData('Q_문서관리_관련문서', {}, [
            'UPLOAD_FILE',
            'YYYY',
            'SEQ',
            'PHOTO_DIV',
            'LN_SEQ',
            'FILE_NAME_TMP',
            'PHOTO_NAME',
            'FILE_NAME',
            'BTN',
            'REMARK',
        ]);

        const DBGrid_문서 = new DBGrid('DBGrid_문서', Q_문서관리_관련문서,{
            isShow : true,
            isEnable : true
        })
            .on('OnButtonClick', function() {
                if (GetString('_권한') == 'O') {
                    SetValue('문서_다운로드할파일명', '');
                    SetValue('문서_선택한파일명', '');
                    SetValue('문서_전송받은파일명', '');
                    SetValue('문서_전송할파일명', '');
                    SetValue('문서_전송할파일크기', '');

                    // if ($(this).attr('type') == 'file') {
                    //     UploadFile($(this), '문서_전송할파일명', '문서_전송받은파일명')
                    // }
                    GetComponent('SubForm_파일업로드').ShowSubForm((data) => {
                        SetValue('문서_전송할파일명', data.name);
                        SetValue('문서_전송받은파일명', data.name);

                        GetComponent("DBGrid_문서").SetRow(-1, [
                            { key: 'FILE_NAME', value: GetValue('문서_전송할파일명') },
                            { key: 'UPLOAD_FILE', value: GetValue('문서_전송받은파일명') }
                        ]);
                    });

                }
            })
            .on('OnDblClick', function() {
                GetComponent("DBGrid_문서").GetRow(-1, [
                    { key: '문서_다운로드할파일명', value: 'UPLOAD_FILE' }
                ]);

                // if ($(this).attr('type') == 'file') {
                //     DownloadFile(GetString('문서_전송받은파일명'));
                // }
                //
                // Navigate('http://192.168.250.11:8080/jsp/common/download2.jsp',{
                //
                //
                // }, 'left=0,top=0,width=860,height=700');

                window.open(`/ezgen/files/download?kindCode=${GetValue('담보종류')}&FileName=${encodeURIComponent(GetString('문서_다운로드할파일명'))}`);
            });

        const Q_배당표_배당금_계산 = new DBGridZoonData('Q_배당표_배당금_계산', {}, [
            'PRO_RATE_GU',
            'PRO_RATE_DIV',
            'PRO_RATE_STEP',
            'PRO_RATE_CYCLE',
            'FLAG',
            'CRED_SELF_AMT_ORG',
            'CRED_COMB_AMT_ORG',
            'YYYY',
            'SEQ',
            'SHA_GU',
            'LN_SEQ',
            'IS_ENABLE',
            'RANK',
            'PRO_RATE_CODE',
            'DISP_RANK',
            'RIGHT_DATE',
            'HITE_YN',
            'RIGHT_PERSON',
            'RIGHT_CODE',
            'ERA_YN',
            'CRED_SELF_AMT',
            'CRED_COMB_AMT',
        ]);
        const DBGrid_배당금_계산 = new DBGrid('DBGrid_배당금_계산', Q_배당표_배당금_계산,{
            isShow : true,
            isEnable : true
        })
            .on('OnClick', function() {
                GetComponent('DBGrid_배당금_계산').GetRowCount('배당표_배당금계산_RowCount');

                if (GetNumber('배당표_배당금계산_RowCount') > 6) {
                    SetValue('배당표_배당금_순위설정', '1');
                } else {
                    SetValue('배당표_배당금_순위설정', '0');
                }
            })
            .on('OnEditChanged', function() {
                GetComponent('DBGrid_배당금_계산').GetRow(-1, [
                    { key: '배당표_배당금계산_권리의내용', value: 'RIGHT_CODE'}
                ]);

                GetZoonData('Q_코드_권리의내용').FindIndex('배당표_배당금계산_RowPosition', (row) => {
                    return row['CD_CODE'] == GetString('배당표_배당금계산_권리의내용');
                });
                GetZoonData('Q_코드_권리의내용').GetRow(GetNumber('배당표_배당금계산_RowPosition'), [
                    { key: '배당표_배당금계산_배당순위', value: 'ATTR_08'}
                ]);

                GetComponent('DBGrid_배당금_계산').SetRow(-1, [
                    { key: 'PRO_RATE_CODE', value: GetValue('배당표_배당금계산_배당순위')}
                ]);
            })
            .on('OnValidate', function() {
                GetComponent('DBGrid_배당금_계산').GetCurColName('배당표_배당금계산_ColName');
                if(match(PageType.집합_아파트)){
                    MC_배당표_배당금_계산();
                }else{
                    MC_999_배당표_배당금_계산();
                }
            });

        const Q_배당표_상가임차보증금_계산 = new JsonZoonData('Q_배당표_상가임차보증금_계산', {});
        const DBGrid_배당표_상가건물_임대차보증금_계산 = new DBGrid('DBGrid_배당표_상가건물_임대차보증금_계산', Q_배당표_상가임차보증금_계산,{
            isShow : true,
            isEnable : true
        })
            .on('OnClick', function() {
                GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRowCount('배당표_상가_ColName');
            })
            .on('OnEditChanged', function() {
                if (GetString('배당표_상가_ColName') == 'RNO') {
                    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').SortField('RNO', 1);
                }

                GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetCurSel('i');

                MC_배당표_상가임대차보증금_계산();
                MC_999_배당표_배당금_기본항목자동설정();
            });

        const Q_배당표_주택임차보증금_계산 = new DBGridZoonData('Q_배당표_주택임차보증금_계산', {}, [
            'YYYY',
            'SEQ',
            'REP_AF_SEC_AMT',
            'FXDATE_YN_ORG',
            'POSS_A_RM_CNT_ORG',
            'LEASE_AMT_ORG',
            'RNO',
            'RESI_NAME',
            'RESI_RM_CNT',
            'FXDATE_YN',
            'POSS_A_RM_CNT',
            'LEASE_AMT',
            'REP_BE_SEC_AMT',
            'FXLEA_AMT',
            'FXLEA_NO_AMT',
        ]);
        const DBGrid_배당표_주택임대차보증금_계산 = new DBGrid('DBGrid_배당표_주택임대차보증금_계산', Q_배당표_주택임차보증금_계산,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                    MC_999_배당표_배당금_기본항목자동설정();
                }else if(match(PageType.집합_아파트)){
                    MC_배당표_배당금_기본항목자동설정();
                }
            })
            .on('OnValidate', function() {
                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(-1, [
                    { key: '배당표_실제임대차보증금_변경전', value: 'LEASE_AMT_ORG' },
                    { key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT' },
                    { key: '배당표_방의총수_변경전', value: 'POSS_A_RM_CNT_ORG' },
                    { key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT' },
                    { key: '배당표_확정일자_변경전', value: 'FXDATE_YN_ORG' },
                    { key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN' }
                ]);

                if (GetValue('배당표_주택임대차보증금_실제임대차보증금') == GetValue('배당표_실제임대차보증금_변경전') &&
                    GetValue('배당표_주택임대차보증금_적용한방의총수') == GetValue('배당표_방의총수_변경전') &&
                    GetValue('배당표_주택임대차보증금_확정일자_보유여부') == GetValue('배당표_확정일자_변경전')) {
                    SetValue('배당표_변경여부',"N");
                } else {
                    SetValue('배당표_변경여부',"Y");
                }

                if (GetString('배당표_변경여부') == 'Y') {
                    return;
                }

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurColName('배당표_주택임대차보증금_ColName');

                if (GetString('배당표_주택임대차보증금_ColName') == 'RNO') {
                    GetComponent('DBGrid_배당표_주택임대차보증금_계산').SortField('RNO', 1);
                }

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurSel('i');

                if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                    MC_999_배당표_주택임대차보증금_계산();
                }else if(match(PageType.집합_아파트)){
                    MC_배당표_주택임대차보증금_계산();
                }

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRow(-1, [
                    { key: '배당표_주택임대차보증금_확정일자_보유여부', value: 'FXDATE_YN' },
                    { key: '배당표_주택임대차보증금_적용한방의총수', value: 'POSS_A_RM_CNT' },
                    { key: '배당표_주택임대차보증금_실제임대차보증금', value: 'LEASE_AMT' }
                ]);

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRow(-1, [
                    { key: 'FXDATE_YN_ORG', value: GetValue('배당표_주택임대차보증금_확정일자_보유여부') },
                    { key: 'POSS_A_RM_CNT_ORG', value: GetValue('배당표_주택임대차보증금_적용한방의총수') },
                    { key: 'LEASE_AMT_ORG', value: GetValue('배당표_주택임대차보증금_실제임대차보증금') }
                ]);

                SetValue('배당표_변경여부',"N");

                if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                    MC_999_배당표_배당금_기본항목자동설정();
                }else if(match(PageType.집합_아파트)){
                    MC_배당표_배당금_기본항목자동설정();
                }
            });

        const Q_감정가_00_본건 = new JsonZoonData('Q_감정가_00_본건', {});
        const DBGrid_본건사례 = new DBGrid('DBGrid_본건사례', Q_감정가_00_본건,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function(e) {
                // OnChange
                GetComponent('DBGrid_본건사례').GetCurColName('감정가_본건_GridColName');

                if (GetValue('감정가_본건_GridColName') == '선택여부') {
                    MC_200_DBGrid_본건사례_EVENT_선택여부();
                }
                if (GetValue('감정가_본건_GridColName') == '층수') {
                    MC_200_DBGrid_본건사례_EVENT_해당층();
                }
            })
            .on('OnValidate', function(e) {
                GetComponent('DBGrid_본건사례').GetRow(-1, [
                    { key: '감정가_본건_전용면적', value: '전용면적' },
                    { key: '감정가_본건_최저가', value: '최저가' },
                    { key: '감정가_본건_최고가', value: '최고가' },
                    { key: '감정가_본건_운용이율', value: '운용이율' },
                    { key: '감정가_본건_월임대료', value: '월임대료' },
                    { key: '감정가_본건_보증금', value: '보증금' },
                ]);

                SetValue('감정가_본건_평균가격', Round(Round((GetNumber('감정가_본건_최저가') + GetNumber('감정가_본건_최고가')) / 2, 0) / 1000, 0) * 1000);

                if (GetNumber('감정가_본건_전용면적') > 0) {
                    SetValue('감정가_본건_M2당가격', Round(Round((GetNumber('감정가_본건_평균가격') / GetNumber('감정가_본건_전용면적')) / 1000, 0) * 1000, 0));
                } else {
                    SetValue('감정가_본건_M2당가격', 0);
                }

                SetValue('감정가_본건_총연간임대료', (GetNumber('감정가_본건_보증금') * (GetNumber('감정가_본건_운용이율') / 100)) + (GetNumber('감정가_본건_월임대료') * 12));

                if (GetNumber('감정가_본건_전용면적') > 0) {
                    SetValue('감정가_본건_단위당연간임대료', Round(GetNumber('감정가_본건_총연간임대료') / GetNumber('감정가_본건_전용면적'), 0));
                } else {
                    SetValue('감정가_본건_단위당연간임대료', 0);
                }

                GetComponent('DBGrid_본건사례').SetRow(-1, [
                    { key: 'M2당단가', value: GetValue('감정가_본건_M2당가격') },
                    { key: '평균가격', value: GetValue('감정가_본건_평균가격') },
                    { key: '총연간임대료', value: GetValue('감정가_본건_총연간임대료') },
                    { key: '단위당연간임대료', value: GetValue('감정가_본건_단위당연간임대료') },
                ]);
            });

        const Q_감정가_03_비준가격 = new JsonZoonData('Q_감정가_03_비준가격', {});
        const DBGrid_비준가격 = new DBGrid('DBGrid_비준가격', Q_감정가_03_비준가격,{
            isShow : true,
            isEnable : true
        })
            .on('OnDblClick', function() {
                GetComponent('DBGrid_비준가격').GetRow(-1, [
                    { key: 'Combo_비준_사례구분', value: '사례구분' }
                ]);
                RunButton('Command_비준_사례번호생성');

                GetComponent('DBGrid_비준가격').GetRow(-1, [
                    { key: 'Combo_비준_사례구분', value: '사례구분' },
                    { key: 'Combo_비준_사례번호', value: '사례번호' },
                    { key: 'MkEdit_비준_소재지_비교', value: '소재지_비교치' },
                    { key: 'MkEdit_비준_전용면적', value: '전용면적' },
                    { key: 'Combo_비준_층별_본건', value: '층별비교_본건' },
                    { key: 'Combo_비준_층별_사례', value: '층별비교_사례' },
                    { key: 'MkEdit_비준_층별지수_본건', value: '층별비교_본건_적용율' },
                    { key: 'MkEdit_비준_층별지수_사례', value: '층별비교_사례_적용율' },
                    { key: 'MkEdit_비준_층별지수_비교', value: '층별비교_비교치' },
                    { key: 'MkEdit_비준_위치별지수_비교', value: '위치별비교_비교치' },
                    { key: 'MkEdit_비준_잔가율_비교', value: '잔가율비교_비교치' },
                    { key: 'MkEdit_비준_도로조건지수_비교', value: '도로조건_비교치' },
                    { key: 'MkEdit_비준_접근조건지수_비교', value: '접근조건_비교치' },
                    { key: 'MkEdit_비준_기타조건지수_비교', value: '기타조건_비교치' },
                    { key: 'MkEdit_비준_요인합계', value: '요인합계' },
                    { key: 'MkEdit_비준_산정단가', value: '산정단가' },
                    { key: 'MkEdit_비준_적용단가', value: '적용단가' },
                    { key: 'MkEdit_비준_가격_본건_일자', value: '가격_본건_일자' },
                    { key: 'MkEdit_비준_가격_본건_적용율', value: '가격_본건_적용율' },
                    { key: 'MkEdit_비준_가격_비교', value: '가격_비교치' },
                    { key: 'MkEdit_비준_가격_사례_일자', value: '가격_사례_일자' },
                    { key: 'MkEdit_비준_가격_사례_적용율', value: '가격_사례_적용율' },
                    { key: 'Edit_비준_기타조건_사례', value: '기타조건_사례_내용' },
                    { key: 'MkEdit_비준_사례가격', value: '사례가격' },
                    { key: 'MkEdit_비준_기타조건지수_사례', value: '기타조건_사례_적용율' },
                    { key: '감정가_비준_사례번호명', value: '사례번호명' },
                    { key: 'MkEdit_비준_환산금액', value: '환산금액' }
                ]);

                SetValue('Edit_비준_소재지_본건', GetValue('Edit_입력표_소재지1'));
                SetValue('Combo_비준_위치_본건', GetValue('Combo_입력표_위치'));
                SetValue('Combo_비준_도로조건_본건', GetValue('Combo_입력표_도로조건'));
                SetValue('Combo_비준_접근조건_본건', GetValue('Combo_입력표_접근조건'));
                SetValue('MkEdit_비준_위치별지수_본건', GetValue('MkEdit_입력표_위치지수'));
                SetValue('MkEdit_비준_접근조건지수_본건', GetValue('MkEdit_입력표_접근조건지수'));
                SetValue('MkEdit_비준_잔가율_본건', GetValue('MkEdit_입력표_잔가율'));
                SetValue('Edit_비준_기타조건_본건', GetValue('Edit_입력표_기타조건'));
                SetValue('MkEdit_비준_기타조건지수_본건', GetValue('MkEdit_입력표_기타조건_지수'));

                if (GetNumber('Combo_비준_사례구분') == 1) {
                    MC_302_비준가격_Change_2_사례_가격();
                } else if (GetNumber('Combo_비준_사례구분') == 2) {
                    MC_302_비준가격_Change_3_사례_경매();
                }

                MC_302_비준가격_Change_4_사례_지수값셋팅();
                SetValue('02_잔가율구분', '비준_사례');
                MC_003_계산_잔가율();
                SetValue('10_경과년도_변수일자', GetValue('MkEdit_비준_가격_본건_일자'));
                RunButton('Command_경과일수');
                SetValue('비준_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));
                SetValue('10_경과년도_변수일자', GetValue('MkEdit_비준_가격_사례_일자'));
                RunButton('Command_경과일수');
                SetValue('비준_Label_시점_사례_경과일', GetValue('10_경과일수_쿼리리턴값'));
                SetValue('10_경과일수_쿼리리턴값', '');
                MC_302_비준가격_Change_5_비교치_계산();
            });

        const Q_감정가_03_비준가격_집계표 = new JsonZoonData('Q_감정가_03_비준가격_집계표', {});
        const DBGrid_비준가격집계표 = new DBGrid('DBGrid_비준가격집계표', Q_감정가_03_비준가격_집계표,{
            isShow : true,
            isEnable : true
        });


        const Q_문서관리_사진 = new DBGridZoonData('Q_문서관리_사진', {}, [
            'UPLOAD_FILE',
            'YYYY',
            'SEQ',
            'LN_SEQ',
            'FILE_NAME_TMP',
            'PHOTO_DIV',
            'PHOTO_NAME',
            'FILE_NAME',
            'BTN',
            'REMARK',
        ]);
        const DBGrid_사진관리 = new DBGrid('DBGrid_사진관리', Q_문서관리_사진,{
            isShow : true,
            isEnable : true
        })
            .on('OnButtonClick', function() {
                GetComponent('DBGrid_사진관리').GetRow([
                    { key: '사진관리_키값', value: 'FILE_NAME' },
                    { key: '사진관리_키값_임시', value: 'FILE_NAME_TMP' },
                    { key: '00_TEMP', value: 'PHOTO_DIV' }
                ]);

                if (isEmpty(GetValue('00_TEMP'))) {
                    MsgBox('[구분]을 먼저 선택하세요', '[알림]', true);
                    return;
                }

                SetValue('Edit_FileName', GetValue('사진관리_키값'));
                SetValue('Edit_FileName_Tmp', GetValue('사진관리_키값_임시'));
                SetValue('사진_URL', "es00_p01.jsp?userRole=" + GetString('_권한'));

                Navigate('http://192.168.250.11:8080/jsp/es00/',
                    { }, 'left=0,top=0,width=860,height=700');

            })
            .on('OnDblClick', function() {
                GetComponent('DBGrid_사진관리').GetRow([
                    { key: '사진관리_키값', value: 'FILE_NAME' },
                    { key: '사진관리_키값_임시', value: 'FILE_NAME_TMP' },
                    { key: '00_TEMP', value: 'PHOTO_DIV' }
                ]);

                if (isEmpty(GetValue('00_TEMP'))) {
                    MsgBox('[구분]을 먼저 선택하세요', '[알림]', true);
                    return;
                }

                SetValue('Edit_FileName', GetValue('사진관리_키값'));
                SetValue('Edit_FileName_Tmp', GetValue('사진관리_키값_임시'));
                SetValue('사진_URL', "es00_p01.jsp?userRole=" + GetString('_권한'));

                Navigate('http://192.168.250.11:8080/jsp/es00/',
                    { }, 'left=0,top=0,width=860,height=700');
            });

        const Q_감정가_04_수익가격 = new JsonZoonData('Q_감정가_04_수익가격', {});
        const DBGrid_수익가격 = new DBGrid('DBGrid_수익가격', Q_감정가_04_수익가격,{
            isShow : true,
            isEnable : true
        })
            .on('OnDblClick', function() {
                GetComponent('DBGrid_수익가격').GetRow(-1, [
                    { key: '수익_Combo_사례구분', value: '사례구분' }
                ]);
                RunButton('Command_수익_사례번호생성');

                SetValue('수익_Combo_위치_본건', GetValue('Combo_입력표_위치'));
                SetValue('수익_Combo_도로_본건', GetValue('Combo_입력표_도로조건'));
                SetValue('수익_Combo_접근_본건', GetValue('Combo_입력표_접근조건'));
                SetValue('수익_Edit_기타_본건', GetValue('Edit_입력표_기타조건'));
                SetValue('수익_MKEdit_위치_본건지수', GetValue('MkEdit_입력표_위치지수'));
                SetValue('수익_MKEdit_접근_본건지수', GetValue('MkEdit_입력표_접근조건지수'));
                SetValue('수익_MKEdit_기타_본건지수', GetValue('MkEdit_입력표_기타조건_지수'));
                SetValue('수익_MKEdit_잔가율_본건', GetValue('MkEdit_입력표_잔가율'));

                SetValue('수익_Edit_소재지_본건', GetString('Edit_입력표_소재지1') + " " + GetString('Edit_입력표_지번'));

                if (GetNumber('수익_Combo_사례구분') == 3) {
                    MC_322_수익가격_Change_2_사례_본건();
                } else if (GetNumber('수익_Combo_사례구분') == 4) {
                    MC_322_수익가격_Change_2_사례_임대();
                    MC_322_수익가격_Change_3_사례_지수값셋팅();
                }

                SetValue('10_경과년도_변수일자', GetValue('수익_MkEdit_시점_본건_일자'));
                RunButton('Command_경과일수');
                SetLabelValue('수익_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));
                SetValue('10_경과년도_변수일자', GetValue('수익_MkEdit_시점_사례_일자'));
                RunButton('Command_경과일수');
                SetLabelValue('수익_Label_시점_사례_경과일', GetValue('10_경과일수_쿼리리턴값'));
                SetValue('10_경과일수_쿼리리턴값', '');

                GetComponent('DBGrid_수익가격').GetRow(-1, [
                    { key: '수익_Combo_사례번호', value: '사례번호' },
                    { key: '수익_MKEdit_소재지_비교', value: '소재지_비교치' },
                    { key: '수익_MKEdit_연간임대료', value: '단위당연간임대료' },
                    { key: '수익_Combo_층별_본건', value: '층별비교_본건' },
                    { key: '수익_Combo_층별_사례', value: '층별비교_사례' },
                    { key: '수익_MKEdit_층별_본건지수', value: '층별비교_본건_적용율' },
                    { key: '수익_MKEdit_층별_사례지수', value: '층별비교_사례_적용율' },
                    { key: '수익_MKEdit_층별_비교지수', value: '층별비교_비교치' },
                    { key: '수익_MKEdit_위치_본건지수', value: '위치별비교_본건_적용율' },
                    { key: '수익_MKEdit_위치_사례지수', value: '위치별비교_사례_적용율' },
                    { key: '수익_MKEdit_위치_비교지수', value: '위치별비교_비교치' },
                    { key: '수익_MKEdit_잔가율_비교', value: '잔가율비교_비교치' },
                    { key: '수익_MKEdit_도로_비교지수', value: '도로조건_비교치' },
                    { key: '수익_MKEdit_접근_본건지수', value: '접근조건_본건_적용율' },
                    { key: '수익_MKEdit_접근_사례지수', value: '접근조건_사례_적용율' },
                    { key: '수익_MKEdit_접근_비교지수', value: '접근조건_비교치' },
                    { key: '수익_MKEdit_기타_본건지수', value: '기타조건_본건_적용율' },
                    { key: '수익_MKEdit_기타_사례지수', value: '기타조건_사례_적용율' },
                    { key: '수익_MKEdit_기타_비교지수', value: '기타조건_비교치' },
                    { key: '수익_MKEdit_요인합계', value: '요인합계' },
                    { key: '수익_MKEdit_적용단위당임료', value: '적용단위당임료' },
                    { key: '수익_MKEdit_환원이율', value: '환원이율' },
                    { key: '수익_MKEdit_수익단가', value: '수익단가_평' },
                    { key: '수익_MKEdit_전용면적', value: '전용면적' },
                    { key: '수익_Combo_사례구분', value: '사례구분' },
                    { key: '감정가_비준_사례구분명', value: '사례구분명' },
                    { key: '감정가_비준_사례번호명', value: '사례번호명' },
                    { key: '수익_MKEdit_환산금액', value: '환산금액' },
                    { key: '수익_MkEdit_시점_본건_일자', value: '시점_본건_일자' },
                    { key: '수익_MkEdit_시점_본건_적용율', value: '시점_본건_적용율' },
                    { key: '수익_MkEdit_시점_비교', value: '시점_비교치' },
                    { key: '수익_MkEdit_시점_사례_일자', value: '시점_사례_일자' },
                    { key: '수익_MkEdit_시점_사례_적용율', value: '시점_사례_적용율' },
                    { key: '수익_Edit_기타_사례', value: '기타조건_사례' }
                ]);
            });

        const Q_감정가_04_수익가격_집계표 = new JsonZoonData('Q_감정가_04_수익가격_집계표', {});
        const DBGrid_수익가격집계표 = new DBGrid('DBGrid_수익가격집계표', Q_감정가_04_수익가격_집계표,{
            isShow : true,
            isEnable : true
        });

        const Q_43_응찰입력표_선순위권리내역 = new DBGridZoonData('Q_43_응찰입력표_선순위권리내역', {}, [
            '년도',
            '일련번호',
            '순번',
            '금액',
            '권리자',
            '권리내역',
        ]);
        const DBGrid_응찰_권리내역 = new DBGrid('DBGrid_응찰_권리내역', Q_43_응찰입력표_선순위권리내역,{
            isShow : true,
            isEnable : true
        })
            .on('OnValidate', function() {
                RunButton('Command_응찰_02_이벤트');
            });

        const Q_41_응찰입력표_경매기일내역 = new DBGridZoonData('Q_41_응찰입력표_경매기일내역', {}, [
            '년도',
            '일련번호',
            '회차',
            '일자',
            '금액',
            '유찰여부',
        ]);
        const DBGrid_응찰_기일내역 = new DBGrid('DBGrid_응찰_기일내역', Q_41_응찰입력표_경매기일내역,{
            isShow : true,
            isEnable : true
        });

        const Q_44_응찰입력표_선순위부담금액 = new DBGridZoonData('Q_44_응찰입력표_선순위부담금액', {}, [
            '년도',
            '일련번호',
            '순번',
            '금액',
            '권리자',
            '권리내역',
        ]);
        const DBGrid_응찰_부담내역 = new DBGrid('DBGrid_응찰_부담내역', Q_44_응찰입력표_선순위부담금액,{
            isShow : true,
            isEnable : true
        })
            .on('OnValidate', function() {
                RunButton('Command_응찰_02_이벤트');
            });

        const Q_감정가_02_임대사례 = new JsonZoonData('Q_감정가_02_임대사례', {});
        const DBGrid_임대사례 = new DBGrid('DBGrid_임대사례', Q_감정가_02_임대사례,{
            isShow : true,
            isEnable : true
        })
            .on('OnButtonClick', function() {
                SetValue('팝업_주소창호출위치', '감정가_임대사례');
                GetComponent('SubForm_주소조회').ShowSubForm((data) => {
                    GetComponent('DBGrid_임대사례').SetRow(-1, [
                        { key: '소재지', value: GetValue('감정가_임대_소재지') }
                    ]);
                });
            })
            .on('OnEditChanged', function() {
                GetComponent('DBGrid_임대사례').GetCurColName('감정가_임대_GridColName');

                if (GetValue('감정가_임대_GridColName') == '층수_코드') {
                    MC_203_DBGrid_임대사례_EVENT_해당층();
                } else if (GetValue('감정가_임대_GridColName') == '구조') {
                    MC_203_DBGrid_임대사례_EVENT_구조();
                }
            })
            .on('OnValidate', function() {
                MC_203_DBGrid_임대사례_EVENT_경과년도();
                MC_203_DBGrid_임대사례_EVENT_임대내역계산();
            });



        const Q_POPUP_주소목록 = new JsonZoonData('Q_POPUP_주소목록', {});
        const Q_주소목록 = new JsonZoonData('Q_주소목록', {});
        const DBGrid_주소 = new DBGrid('DBGrid_주소', match(PageType.집합_아파트) ? Q_주소목록 : Q_POPUP_주소목록,{
            isShow : true,
            isEnable : true
        })
            .on('OnDblClick', '.button', function() {
                if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                    RunButton('Command_선택_주소조회');
                }else if (match(PageType.집합_아파트)){
                    MC_주소반환();
                }
            });

        const Q_가격사례_D = new DBGridZoonData('Q_가격사례_D', {}, [
            'YYYY',
            'SEQ',
            'LN_SEQ',
            'RNO',
            'B_SIZE',
            'CHECK_YN',
            'B_SIZE_PY',
            'CURR_MIN_AMT',
            'CURR_MAX_AMT',
            'CURR_AVG_AMT',
            'CURR_PY_DAN',
            'LEASE_AMT',
            'LEASE_RATE',
            'FLAG',
        ], [
            { key: 'LN_SEQ', value: '가격사례_M_사례번호', condition: '=='}
        ]);
        const DBGrid_가격사례_D = new DBGrid('DBGrid_가격사례_D', Q_가격사례_D,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                MC_가격사례_Checkbox();

                GetComponent('DBGrid_가격사례_D').GetRow(-1,[
                    {key : '가격사례_최저가',value : 'CURR_MIN_AMT'},
                    {key : '가격사례_최고가',value : 'CURR_MAX_AMT'},
                    {key : '가격사례_전세가',value : 'LEASE_AMT'},
                    {key : '가격사례_면적',value : 'B_SIZE_PY'},
                ]);

                SetValue('가격사례_면적_평',GetNumber('가격사례_면적')*0.3025);
                SetValue('가격사례_평균가격',(GetNumber('가격사례_최저가') + GetNumber('가격사례_최고가'))/2);
                SetValue('가격사례_평당단가',Round(Round(GetNumber('가격사례_평균가격')/GetNumber('가격사례_면적'),0)/1000,0)*1000 );
                SetValue('가격사례_전세가비율',Truncate((GetNumber('가격사례_전세가')/GetNumber('가격사례_평균가격'))*100, 0));

                GetComponent('DBGrid_가격사례_D').SetRow(-1,[
                    {key : 'CURR_AVG_AMT' , value: GetValue('가격사례_평균가격')},
                    {key : 'CURR_PY_DAN' , value: GetValue('가격사례_평당단가')},
                    {key : 'LEASE_RATE' , value: GetValue('가격사례_전세가비율')},
                ]);

                GetComponent('DBGrid_가격사례_D').GetRow(-1,[
                    {key : '가격사례_M_사례번호',value : 'LN_SEQ'},
                ]);

                GetComponent('DBGrid_가격사례_D').GetRowCount('가격사례_D_RowCount');

                if(GetNumber('가격사례_D_RowCount') > -1000){
                    for(let i = 0; i < GetNumber('가격사례_D_RowCount'); i+=1){
                        SetValue('i', i);

                        MC_가격사례_SYNC();
                    }
                    
                    GetZoonData('Q_가격사례_D').ReplaceQuery();
                }

                MC_가격사례_금액();
            });

        const Q_가격사례_M = new DBGridZoonData('Q_가격사례_M', {}, [
            'YYYY',
            'SEQ',
            'LN_SEQ',
            'B_NAME',
            'JUSO',
            'BTN',
            'B_YEAR',
            'HOUSE_CNT',
        ]);
        const DBGrid_가격사례_M = new DBGrid('DBGrid_가격사례_M', Q_가격사례_M,{
            isShow : true,
            isEnable : true
        })
        .on('OnButtonClick', function() {
            // SetValue('팝업_주소창호출위치', '감정가_경매사례');
            SetValue('주소구분',"2")
            GetComponent('SubForm_주소조회').ShowSubForm((data) => {
                GetComponent('DBGrid_가격사례_M').SetRow(-1, [
                    { key: 'JUSO', value: GetValue('감정가_경매_소재지')}
                ]);
            });
        })
        .on('OnSelectChange', function() {
            GetComponent('DBGrid_가격사례_M').GetRow(-1, [
                {key : '가격사례_M_사례번호', value : 'LN_SEQ'}
            ]);

            GetComponent('DBGrid_가격사례_D').GetRowCount('가격사례_D_RowCount');

            if(GetNumber('가격사례_D_RowCount') > -1000){
                for(let i = 0; i < GetNumber('가격사례_D_RowCount'); i+=1){
                    SetValue('i', i);

                    MC_가격사례_SYNC();
                }
                GetZoonData('Q_가격사례_D').ReplaceQuery();
            }
        });

        const Q_감정가_본건 = new DBGridZoonData('Q_감정가_본건', {}, [
            'CHECK_FLAG',
            'LN_SEQ',
            'YYYY',
            'SEQ',
            'B_SIZE',
            'CHECK_YN',
            'B_SIZE_PY',
            'CURR_MIN_AMT',
            'CURR_MAX_AMT',
            'CURR_AVG_AMT',
            'CURR_PY_DAN',
            'LEASE_AMT',
            'LEASE_RATE',
        ]);
        const DBGrid_본건 = new DBGrid('DBGrid_본건', Q_감정가_본건, {
            isShow: true,
            isEnable: true
        })
            .on('OnEditChanged', function() {
                //onEditChanged
                GetComponent('DBGrid_본건').GetRow(-1, [
                    {key : '본건_평균가격' , value : 'CURR_AVG_AMT'},
                    {key : '본건_전세가' , value : 'LEASE_AMT'},
                    {key : '본건_최저가격' , value : 'CURR_MIN_AMT'},
                    {key : '본건_최고가격' , value : 'CURR_MAX_AMT'},
                    {key : '본건_평형' , value : 'B_SIZE_PY'},
                ]);

                SetValue('본건_평균가격', (GetNumber('본건_최고가격')+GetNumber('본건_최저가격'))/2);
                SetValue('본건_평당단가', Round(Round(GetNumber('본건_평균가격')/GetNumber('본건_평형'),0)/1000,0)*1000 );
                SetValue('본건_전세가비율', Truncate((GetNumber('본건_전세가')/GetNumber('본건_평균가격'))*100, 0));

                GetComponent('DBGrid_본건').SetRow(-1, [
                    {key : 'LEASE_RATE' , value: GetValue('본건_전세가비율')},
                    {key : 'CURR_AVG_AMT' , value: GetValue('본건_평균가격')},
                    {key : 'CURR_PY_DAN' , value: GetValue('본건_평당단가')},
                ]);

                MC_본건_Checkbox();
            });

        const Q_배당표_배당금_계산M = new JsonZoonData('Q_배당표_배당금_계산M', {});
        const DBGrid_감정가액산출내역 = new DBGrid('DBGrid_감정가액산출내역', Q_배당표_배당금_계산M,{
            isShow : true,
            isEnable : true
        })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_가격사례_M').GetRow(-1,[
                    { key: '배당표_배당금계산M_순번', value: 'LN_SEQ'}
                ]);
                GetComponent('DBGrid_가격사례_M').GetRowCount('배당표_배당금계산_RowCount');

                if (GetNumber('배당표_배당금계산_RowCount') > -1000) {
                    for (let i=0; i<GetNumber('배당표_배당금계산_RowCount'); i++) {
                        SetValue('i', i);
                        MC_토지배당금계산_SYNC();
                    }
                    GetZoonData('Q_배당표_배당금_계산').ReplaceQuery();
                }
                GetComponent('DBGrid_가격사례_M').GetCurSel('그리드_IDX');
                MC_그리드_인덱스_Sync();
            });

        const Q_배당표_배당금건물_계산M = new JsonZoonData('Q_배당표_배당금건물_계산M', {});
        const DBGrid_감정가액산출내역_건물 = new DBGrid('DBGrid_감정가액산출내역_건물', Q_배당표_배당금건물_계산M,{
            isShow : true,
            isEnable : true
        })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_배당금건물_계산_M').GetRow(-1,[
                    { key: '배당표_배당금계산건물M_순번', value: 'REGI_GU'}
                ]);
                GetComponent('DBGrid_배당금건물_계산_M').GetRowCount('배당표_배당금계산건물_RowCount');

                if (GetNumber('배당표_배당금계산건물_RowCount') > -1000) {
                    for (let i=0; i<GetNumber('배당표_배당금계산건물_RowCount'); i++) {
                        SetValue('i', i);
                        MC_건물배당금계산_SYNC();
                    }
                    GetZoonData('Q_배당표_배당금건물_계산M').ReplaceQuery();
                }
            });

        const Q_건물단가 = new JsonZoonData('Q_건물단가', {});
        const DBGrid_건물단가 = new DBGrid('DBGrid_건물단가', Q_건물단가,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                GetComponent('DBGrid_기준가격').GetCurColName('기준가격_ColName');

                if (GetString('기준가격_ColName') == 'POT_GU') {
                    MC_기준가격_참조값_본건();
                } else if (GetString('기준가격_ColName') == 'STD_GU') {
                    MC_기준가격_참조값_표준지();
                }
                MC_기준가격_집계표();
                MC_건물평가액_집계표();
            })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_건물단가').GetCurSel('건물_그리드_IDX');
                MC_건물_그리도_인덱스_Sync();
                MC_건물단가_항목변경();
            });

        const Q_건물의표시 = new JsonZoonData('Q_건물의표시', {});
        const DBGrid_건물의표시 = new DBGrid('DBGrid_건물의표시', Q_건물의표시,{
            isShow : true,
            isEnable : true
        })
            .on('OnButtonClick', function() {
                SetValue('주소구분', "2");
                GetComponent('SubForm_주소조회').ShowSubForm();
            })
            .on('OnEditChanged', function() {
                GetComponent('DBGrid_건물의표시').GetCurSel('건물의표시_RowPosition');
                GetComponent('DBGrid_건물의표시').GetRow(GetNumber('건물의표시_RowPosition'), [
                    { key: '건물의표시_등기구분', value: 'REGI_GU'},
                    { key: '건물의표시_지번', value: 'LOT_NUM'},
                    { key: '건물의표시_면적', value: 'CB_SIZE'},
                ]);
                GetComponent('DBGrid_건물의표시').GetRowCount('건물의표시_RowCount');
                MC_건물의표시_자동연산();
                MC_건물단가_참조값();
                // BreakMacro..
            })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_건물의표시').GetCurSel('건물_그리드_IDX');
                MC_건물_그리드_인덱스_Sync();
            });

        const Q_건물평가액_집계표 = new JsonZoonData('Q_건물평가액_집계표', {});
        const DBGrid_건물평가액_집계표 = new DBGrid('DBGrid_건물평가액_집계표', Q_건물의표시,{
            isShow : true,
            isEnable : true
        })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_건물평가액_집계표').GetCurSel('건물_그리드_IDX');
                MC_건물_그리드_인덱스_Sync();
            });

        const Q_기준가격 = new JsonZoonData('Q_기준가격', {});
        const DBGrid_기준가격 = new DBGrid('DBGrid_기준가격', Q_기준가격,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                GetComponent('DBGrid_기준가격').GetCurColName('기준가격_ColName');

                if (GetString('기준가격_ColName') == 'POT_GU') {
                    MC_기준가격_참조값_본건();
                } else if (GetString('기준가격_ColName') == 'STD_GU') {
                    MC_기준가격_참조값_표준지();
                }
                MC_기준가격_집계표();
            })
            .on('OnSelectChange', function() {
                MC_기준가격_항목변경();
            });

        const Q_기준가격집계표 = new JsonZoonData('Q_기준가격집계표', {});
        const DBGrid_기준가격집계표 = new DBGrid('DBGrid_기준가격집계표', Q_기준가격집계표,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                MC_기타요인_참조값_전체();
            });

        const Q_기타요인 = new JsonZoonData('Q_기타요인', {});
        const DBGrid_기타요인 = new DBGrid('DBGrid_기타요인', Q_기타요인,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                GetComponent('DBGrid_기타요인').GetCurColName('00_TEMP_FIELD');

                if (GetString('00_TEMP_FIELD') == 'ASSESS_DESC') {
                    return false;
                }
                MC_기타요인_참조값_전체();
                MC_기타요인_최저최고();
                MC_기타요인_산정보정률();
                MC_평가액_참조값_전체();
            });

        const Q_토지의표시 = new JsonZoonData('Q_토지의표시', {});
        const DBGrid_담보 = new DBGrid('DBGrid_담보', Q_토지의표시,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                MC_보정표_예상낙찰가();
            })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_담보').GetCurSel('그리드_IDX');
                MC_그리드_인덱스_Sync();
            });

        const Q_담보_건축 = new JsonZoonData('Q_담보_건축', {});
        const DBGrid_담보_건물 = new DBGrid('DBGrid_담보_건물', Q_담보_건축,{
            isShow : false,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                MC_담보_건물_Group();
                MC_보정표_예상낙찰가();
            })
            .on('OnSelectChange', function() {
                GetZoonData('Q_담보_건축').GetCurSel('건물_그리드_IDX');
                MC_그리드_인덱스_Sync();
            });

        const Q_담보_건축_Group = new JsonZoonData('Q_담보_건축_Group', {});
        const DBGrid_담보_건물_Group = new DBGrid('DBGrid_담보_건물_Group', Q_담보_건축_Group,{
            isShow : true,
            isEnable : true
        });

        const Q_담보제공비율 = new JsonZoonData('Q_담보제공비율', {});
        const DBGrid_담보제공비율 = new DBGrid('DBGrid_담보제공비율', Q_담보제공비율,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                MC_담보제공비율_비율();
            })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_담보제공비율').GetCurSel('그리드_IDX');
                MC_그리드_인덱스_Sync();
            });

        const Q_담보제공비율_건물 = new JsonZoonData('Q_담보제공비율_건물', {});
        const DBGrid_담보제공비율_건물 = new DBGrid('DBGrid_담보제공비율_건물', Q_담보제공비율_건물,{
            isShow : true,
            isEnable : true
        })
            .on('OnEditChanged', function() {
                MC_담보제공비율_건물_비율();
                MC_보정표_예상낙찰가();
            });

        const Q_배당표_배당금_계산D = new JsonZoonData('Q_배당표_배당금_계산D', {});
        const DBGrid_배당금_계산D = new DBGrid('DBGrid_배당금_계산D', Q_배당표_배당금_계산D,{
            isShow : true,
            isEnable : true
        })
            .on('OnClick', function() {
                GetComponent('DBGrid_배당금_계산D').GetRowCount('배당표_배당금계산_RowCount');
                if ( GetNumber('배당표_배당금계산_RowCount') > 6 ) {
                    SetValue('배당표_배당금_순위설정',"1");
                } else {
                    SetValue('배당표_배당금_순위설정',"0");
                }
            })
            .on('OnEditChanged', function() {
                MC_배당표_배당금_계산_EditChange();
            })
            .on('OnEnterKey', function() {
                GetComponent('DBGrid_배당금_계산D').GetCurColName('기준가격_ColName');
                MC_배당표_배당금계산();
            })
            .on('OnValidate', function() {
                GetComponent('DBGrid_배당금_계산D').GetCurColName('기준가격_ColName');
                MC_배당표_배당금계산();
            });

        const DBGrid_배당금_계산M = new DBGrid('DBGrid_배당금_계산M', Q_배당표_배당금_계산M,{
            isShow : true,
            isEnable : true
        })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_배당금_계산M').GetRow(-1 [{
                    key: '배당표_배당금계산M_순번', value: 'LN_SEQ'
                }]);
                GetComponent('DBGrid_배당금_계산M').GetRowCount('배당표_배당금계산_RowCount');

                if (GetNumber('배당표_배당금계산_RowCount') > -1000) {
                    for(let i = 0; i < GetNumber('배당표_배당금계산_RowCount'); i+=1){
                        SetValue('i', i);
                        MC_토지배당금계산_SYNC();
                    }
                    GetZoonData('Q_배당표_배당금_계산D').ReplaceQuery();
                }
                GetComponent('DBGrid_배당금_계산M').GetCurSel('그리드_IDX');
                MC_그리드_인덱스_Sync();
            });

        const Q_배당표_배당금건물_계산D = new JsonZoonData('Q_배당표_배당금건물_계산D', {});
        const DBGrid_배당금건물_계산D = new DBGrid('DBGrid_배당금건물_계산D', Q_배당표_배당금건물_계산D,{
            isShow : true,
            isEnable : true
        })
            .on('OnClick', function() {
                GetComponent('DBGrid_배당금건물_계산D').GetRowCount('배당표_배당금계산건물_RowCount');
                if ( GetNumber('배당표_배당금계산건물_RowCount') > 6 ) {
                    SetValue('배당표_배당금_순위설정',"1");
                } else {
                    SetValue('배당표_배당금_순위설정',"0");
                }
            })
            .on('OnEditChanged', function() {
                MC_배당표_배당금건물_계산_EditChange();
            })
            .on('OnEnterKey', function() {
                GetComponent('DBGrid_배당금건물_계산D').GetCurColName('배당표_배당금계산건물_ColName');
                MC_배당표_배당금건물_계산();
            })
            .on('OnValidate', function() {
                GetComponent('DBGrid_배당금건물_계산D').GetCurColName('배당표_배당금계산건물_ColName');
                MC_배당표_배당금건물_계산();
            });

        const DBGrid_배당금건물_계산M = new DBGrid('DBGrid_배당금건물_계산M', Q_배당표_배당금건물_계산M,{
            isShow : true,
            isEnable : true
        })
            .on('OnSelectChange', function() {
                GetComponent('DBGrid_배당금건물_계산M').GetRow(-1 [{
                    key: '배당표_배당금계산건물M_순번', value: 'REGI_GU'
                }]);
                GetComponent('DBGrid_배당금건물_계산M').GetRowCount('배당표_배당금계산건물_RowCount');

                if (GetNumber('배당표_배당금계산건물_RowCount') > -1000) {
                    for(let i = 0; i < GetNumber('배당표_배당금계산건물_RowCount'); i+=1){
                        SetValue('i', i);
                        MC_건물배당금계산_SYNC();
                    }
                    GetZoonData('Q_배당표_배당금건물_계산D').ReplaceQuery();
                }
                // BreakMacro...
            });


        const DBGrid_본건토지 = new DBGrid('DBGrid_본건토지', Q_토지의표시,{
            isShow : true,
            isEnable : true
        })
            .on({
                OnEditChanged : function() {
                    MC_기준가격_참조값_본건();
                    MC_기준가격_참조값_본건_일괄적용();
                    MC_비준가격_참조값_본건();
                    MC_비준가격_참조값_본건_일괄적용();
                },
                OnSelectChange : function() {
                    GetComponent('DBGrid_본건토지').GetCurSel('그리드_IDX');
                    MC_그리드_인덱스_Sync();
                }
            });

        // Edit ---------------------------------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------------------------------
        const Edit_Doc_Key = new Edit('Edit_Doc_Key', new JsonZoonData('Edit_Doc_Key', {}),{
            isShow : false,
            isEnable : true,
        });

        const Edit_Doc_Name = new Edit('Edit_Doc_Name', new JsonZoonData('Edit_Doc_Name', {}),{
            isShow : true,
            isEnable : false,
        });

        const Edit_FileName = new Edit('Edit_FileName', new JsonZoonData('Edit_FileName', {}),{
            isShow : false,
            isEnable : false,
        });

        const Edit_FileName_Tmp = new Edit('Edit_FileName_Tmp', new JsonZoonData('Edit_FileName_Tmp', {}),{
            isShow : false,
            isEnable : false,
        });

        const Edit_KEY_감정순번 = new Edit('Edit_KEY_감정순번', new JsonZoonData('Edit_KEY_감정순번', {}),{
            isShow : false,
            isEnable : !match(PageType.집합_오피스텔),
        });

        const Edit_감정순번 = new Edit('Edit_감정순번', new JsonZoonData('Edit_감정순번', {}),{
            isShow : false,
            isEnable : false,
        });

        const Edit_KEY_년도 = new Edit('Edit_KEY_년도', new JsonZoonData('Edit_KEY_년도', {}),{
            isShow : false,
            isEnable : !match(PageType.집합_오피스텔),
        });

        const Edit_년도 = new Edit('Edit_년도', new JsonZoonData('Edit_년도', {}),{
            isShow : false,
            isEnable : false,
        });

        const Edit_감정자 = new Edit('Edit_감정자', new JsonZoonData('Edit_감정자', {}),{
            isShow : true,
            isEnable : false,

        });

        const Edit_감정자사번 = new Edit('Edit_감정자사번', new JsonZoonData('Edit_감정자사번', {}),{
            isShow : false,
            isEnable : !match(PageType.집합_오피스텔),
        });

        const Edit_거래처명 = new Edit('Edit_거래처명', new JsonZoonData('Edit_거래처명', {}),{
            isShow : true,
            isEnable : true,
        })
            .on('keyup',function(e) {
                if (e.keyCode == 13) {
                    RunButton('Command_조회');
                }
            });

        const Edit_공통보고서_본사_당사설정액 = new MaskEdit('Edit_공통보고서_본사_당사설정액', new JsonZoonData('Edit_공통보고서_본사_당사설정액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_본사_예상낙찰가 = new MaskEdit('Edit_공통보고서_본사_예상낙찰가', new JsonZoonData('Edit_공통보고서_본사_예상낙찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_본사_예상낙찰가율 = new MaskEdit('Edit_공통보고서_본사_예상낙찰가율', new JsonZoonData('Edit_공통보고서_본사_예상낙찰가율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const Edit_공통보고서_본사_초과부족설정분 = new Edit('Edit_공통보고서_본사_초과부족설정분', new JsonZoonData('Edit_공통보고서_본사_초과부족설정분', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_공통보고서_본사_최고가 = new MaskEdit('Edit_공통보고서_본사_최고가', new JsonZoonData('Edit_공통보고서_본사_최고가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_본사_최저가 = new MaskEdit('Edit_공통보고서_본사_최저가', new JsonZoonData('Edit_공통보고서_본사_최저가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_본사_평가가격 = new MaskEdit('Edit_공통보고서_본사_평가가격', new JsonZoonData('Edit_공통보고서_본사_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_지점_당사설정액 = new MaskEdit('Edit_공통보고서_지점_당사설정액', new JsonZoonData('Edit_공통보고서_지점_당사설정액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_지점_예상낙찰가 = new MaskEdit('Edit_공통보고서_지점_예상낙찰가', new JsonZoonData('Edit_공통보고서_지점_예상낙찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_지점_예상낙찰가율 = new MaskEdit('Edit_공통보고서_지점_예상낙찰가율', new JsonZoonData('Edit_공통보고서_지점_예상낙찰가율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const Edit_공통보고서_지점_초과부족설정분 = new Edit('Edit_공통보고서_지점_초과부족설정분', new JsonZoonData('Edit_공통보고서_지점_초과부족설정분', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_공통보고서_지점_최고가 = new MaskEdit('Edit_공통보고서_지점_최고가', new JsonZoonData('Edit_공통보고서_지점_최고가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_지점_최저가 = new MaskEdit('Edit_공통보고서_지점_최저가', new JsonZoonData('Edit_공통보고서_지점_최저가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_공통보고서_지점_평가가격 = new MaskEdit('Edit_공통보고서_지점_평가가격', new JsonZoonData('Edit_공통보고서_지점_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_도로주소_도로명 = new Edit('Edit_도로주소_도로명', new JsonZoonData('Edit_도로주소_도로명', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                keyup: function(e) {
                    if (e.keyCode == 13) {
                        RunButton('Command_도로주소_조회');
                    }
                }
            });

        const Edit_배당표_경매비용 = new MaskEdit('Edit_배당표_경매비용', new JsonZoonData('Edit_배당표_경매비용', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_가임대보증금_적용범위 = new Edit('Edit_배당표_상가_가임대보증금_적용범위', new JsonZoonData('Edit_배당표_상가_가임대보증금_적용범위', {}),{
            isShow : false,
            isEnable : false,
        });

        const Edit_배당표_상가_경락가액 = new MaskEdit('Edit_배당표_상가_경락가액', new JsonZoonData('Edit_배당표_상가_경락가액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_예상낙찰가 = new MaskEdit('Edit_배당표_상가_예상낙찰가', new JsonZoonData('Edit_배당표_상가_예상낙찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_임대차보호법 = new MaskEdit('Edit_배당표_상가_임대차보호법', new JsonZoonData('Edit_배당표_상가_임대차보호법', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_합계_보증금 = new MaskEdit('Edit_배당표_상가_합계_보증금', new JsonZoonData('Edit_배당표_상가_합계_보증금', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_합계_상가임대차보증금_확정 = new MaskEdit('Edit_배당표_상가_합계_상가임대차보증금_확정', new JsonZoonData('Edit_배당표_상가_합계_상가임대차보증금_확정', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_합계_상가임대차보증금_확정없는 = new MaskEdit('Edit_배당표_상가_합계_상가임대차보증금_확정없는', new JsonZoonData('Edit_배당표_상가_합계_상가임대차보증금_확정없는', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_합계_실제임대차보증금 = new MaskEdit('Edit_배당표_상가_합계_실제임대차보증금', new JsonZoonData('Edit_배당표_상가_합계_실제임대차보증금', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_합계_월세 = new MaskEdit('Edit_배당표_상가_합계_월세', new JsonZoonData('Edit_배당표_상가_합계_월세', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_상가_합계_최우선변제보증금 = new MaskEdit('Edit_배당표_상가_합계_최우선변제보증금', new JsonZoonData('Edit_배당표_상가_합계_최우선변제보증금', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_예상낙찰가 = new MaskEdit('Edit_배당표_예상낙찰가', new JsonZoonData('Edit_배당표_예상낙찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_적용할상가가임대보증금액 = new MaskEdit('Edit_배당표_적용할상가가임대보증금액', new JsonZoonData('Edit_배당표_적용할상가가임대보증금액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_적용할주택가임대보증금액 = new MaskEdit('Edit_배당표_적용할주택가임대보증금액', new JsonZoonData('Edit_배당표_적용할주택가임대보증금액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_최고채권액 = new MaskEdit('Edit_배당표_최고채권액', new JsonZoonData('Edit_배당표_최고채권액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_합계_실제임대차보증금 = new MaskEdit('Edit_배당표_합계_실제임대차보증금', new JsonZoonData('Edit_배당표_합계_실제임대차보증금', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_합계_적용한방의개수 = new MaskEdit('Edit_배당표_합계_적용한방의개수', new JsonZoonData('Edit_배당표_합계_적용한방의개수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_합계_주택임대차보증금_확정 = new MaskEdit('Edit_배당표_합계_주택임대차보증금_확정', new JsonZoonData('Edit_배당표_합계_주택임대차보증금_확정', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_합계_주택임대차보증금_확정없는 = new MaskEdit('Edit_배당표_합계_주택임대차보증금_확정없는', new JsonZoonData('Edit_배당표_합계_주택임대차보증금_확정없는', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_합계_총방의개수 = new MaskEdit('Edit_배당표_합계_총방의개수', new JsonZoonData('Edit_배당표_합계_총방의개수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_배당표_합계_최종적용가임대보증금 = new MaskEdit('Edit_배당표_합계_최종적용가임대보증금', new JsonZoonData('Edit_배당표_합계_최종적용가임대보증금', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_보정표_전유부분위치 = new Edit('Edit_보정표_전유부분위치', new JsonZoonData('Edit_보정표_전유부분위치', {}),{
            isShow : true,
            isEnable : false
        });
        const 보정표_Edit_전유부분위치 = new Edit('Edit_보정표_전유부분위치', new JsonZoonData('Edit_보정표_전유부분위치', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_비준_기타조건_본건 = new Edit('Edit_비준_기타조건_본건', new JsonZoonData('Edit_비준_기타조건_본건', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_비준_기타조건_사례 = new Edit('Edit_비준_기타조건_사례', new JsonZoonData('Edit_비준_기타조건_사례', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_비준_소재지_본건 = new Edit('Edit_비준_소재지_본건', new JsonZoonData('Edit_비준_소재지_본건', {}),{
            isShow : true,
            isEnable : false
        });

        const 비준_MkEdit_소재지_본건 = new Edit('비준_MkEdit_소재지_본건', new JsonZoonData('비준_MkEdit_소재지_본건', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_비준_소재지_사례 = new Edit('Edit_비준_소재지_사례', new JsonZoonData('Edit_비준_소재지_사례', {}),{
            isShow : true,
            isEnable : false
        });

        const 비준_MkEdit_소재지_사례 = new Edit('비준_MkEdit_소재지_사례', new JsonZoonData('비준_MkEdit_소재지_사례', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_읍면동 = new Edit('Edit_읍면동', new JsonZoonData('Edit_읍면동', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                keyup: function(e) {
                    if (e.keyCode == 13) {
                        RunButton('Command_조회');
                    }
                }
            });

        const Edit_입력표_거래처 = new Edit('Edit_입력표_거래처', new JsonZoonData('Edit_입력표_거래처', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_입력표_거래처코드 = new Edit('Edit_입력표_거래처코드', new JsonZoonData('Edit_입력표_거래처코드', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_거래처코드 = new Edit('Edit_거래처코드', new JsonZoonData('Edit_거래처코드', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_입력표_국토의계획 = new Edit('Edit_입력표_국토의계획', new JsonZoonData('Edit_입력표_국토의계획', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_기타조건 = new Edit('Edit_입력표_기타조건', new JsonZoonData('Edit_입력표_기타조건', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_다른법률등 = new Edit('Edit_입력표_다른법률등', new JsonZoonData('Edit_입력표_다른법률등', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_담보제공자 = new Edit('Edit_입력표_담보제공자', new JsonZoonData('Edit_입력표_담보제공자', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_담보제공자 = new Edit('Edit_담보제공자', new JsonZoonData('Edit_담보제공자', {}),{
            isShow : true,
            isEnable : true
        });


        const Edit_입력표_대지권소유권 = new MaskEdit('Edit_입력표_대지권소유권', new JsonZoonData('Edit_입력표_대지권소유권', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    if (GetNumber('Edit_입력표_대지권소유권') > 0) {
                        SetValue('Edit_입력표_대지권소유권여부', "Y");
                    } else {
                        SetValue('Edit_입력표_대지권소유권여부', "N");
                    }

                    SetValue('Edit_입력표_대지권소유권_평', GetNumber('Edit_입력표_대지권소유권')*0.3025);
                }
            });

        const Edit_입력표_대지권소유권_평 = new CalcEdit('Edit_입력표_대지권소유권_평', ['Edit_입력표_대지권소유권'], new FunctionZoonData('Edit_입력표_대지권소유권_평', () => {
            return { value: GetNumber('Edit_입력표_대지권소유권')*0.3025 };
        }), {
            isShow : true,
            isEnable : false,
            mask: ';14;#,###1.00',
            maskType: '숫자'
        });

        const Edit_입력표_대지권소유권여부 = new Edit('Edit_입력표_대지권소유권여부', new JsonZoonData('Edit_입력표_대지권소유권여부', {}),{
            isShow : false,
            isEnable : true,
            mask : 'a'
        });

        const Edit_입력표_대표자 = new Edit('Edit_입력표_대표자', new JsonZoonData('Edit_입력표_대표자', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_대표자 = new Edit('Edit_대표자', new JsonZoonData('Edit_대표자', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_입력표_동수 = new Edit('Edit_입력표_동수', new JsonZoonData('Edit_입력표_동수', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_소재지1 = new Edit('Edit_입력표_소재지1', new JsonZoonData('Edit_입력표_소재지1', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_시행령부칙 = new Edit('Edit_입력표_시행령부칙', new JsonZoonData('Edit_입력표_시행령부칙', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_업소대표자 = new Edit('Edit_입력표_업소대표자', new JsonZoonData('Edit_입력표_업소대표자', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_업소대표자 = new Edit('Edit_업소대표자', new JsonZoonData('Edit_업소대표자', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_업소명 = new Edit('Edit_입력표_업소명', new JsonZoonData('Edit_입력표_업소명', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_업소명 = new Edit('Edit_업소명', new JsonZoonData('Edit_업소명', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_이담보물에대한재감정 = new Edit('Edit_입력표_이담보물에대한재감정', new JsonZoonData('Edit_입력표_이담보물에대한재감정', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_재감정여부 = new Edit('Edit_재감정여부', new JsonZoonData('Edit_재감정여부', {}),{
            isShow : true,
            isEnable : false
        });

        const Edit_입력표_지번 = new Edit('Edit_입력표_지번', new JsonZoonData('Edit_입력표_지번', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_지상 = new Edit('Edit_입력표_지상', new JsonZoonData('Edit_입력표_지상', {}),{
            isShow : true,
            isEnable : !match(PageType.집합_오피스텔),
            mask: '000',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('Edit_보정표_전유부분위치', "전체 "+GetValue('Edit_지상')+"층중 지상 "+GetValue('Edit_해당층')+"층에 위치");
                    if (GetNumber('Edit_지상') >= 31) {
                        SetValue('Combo_전유부분의위치', "031999")
                    } else {
                        SetValue('Combo_전유부분의위치', LPad(GetString('Edit_지상'),3,"0")+LPad(GetString('Edit_해당층'),3,"0"));
                    }
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                    GetZoonData('Q_00_전유부분의위치').FindIndex('전유부분의위치_Idx', (row) => {
                        return row['CD_CODE'] == GetString('Combo_전유부분의위치');
                    });
                    GetZoonData('Q_00_전유부분의위치').GetRow(GetNumber('전유부분의위치_Idx'), [
                        { key: 'MkEdit_보정표_전유부분위치_적용율', value: 'ATTR_08'}
                    ]);
                }
            });

        const Edit_입력표_지하 = new Edit('Edit_입력표_지하', new JsonZoonData('Edit_입력표_지하', {}),{
            isShow : true,
            isEnable : true,
            mask: '000',
            maskType: '숫자'
        });

        const Edit_입력표_집합건물의명칭 = new Edit('Edit_입력표_집합건물의명칭', new JsonZoonData('Edit_입력표_집합건물의명칭', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_채무자 = new Edit('Edit_입력표_채무자', new JsonZoonData('Edit_입력표_채무자', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_채무자 = new Edit('Edit_채무자', new JsonZoonData('Edit_채무자', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_채무자와담보제공자의관계 = new Edit('Edit_입력표_채무자와담보제공자의관계', new JsonZoonData('Edit_입력표_채무자와담보제공자의관계', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_채무자와담보제공자의관계 = new Edit('Edit_채무자와담보제공자의관계', new JsonZoonData('Edit_채무자와담보제공자의관계', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_토지이용규제 = new Edit('Edit_입력표_토지이용규제', new JsonZoonData('Edit_입력표_토지이용규제', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입력표_해당층 = new Edit('Edit_입력표_해당층', new JsonZoonData('Edit_입력표_해당층', {}),{
            isShow : true,
            isEnable : !match(PageType.집합_오피스텔),
            mask: '000',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    if (match(PageType.집합_오피스텔)) {
                        SetValue('Edit_보정표_전유부분위치', "전체 "+GetValue('Edit_지상')+"층중 지상 "+GetValue('Edit_해당층')+"층에 위치");
                    }
                }
            });

        const Edit_입력표_호수 = new Edit('Edit_입력표_호수', new JsonZoonData('Edit_입력표_호수', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_입지특성_인근개발계획 = new Edit('Edit_입지특성_인근개발계획', new JsonZoonData('Edit_입지특성_인근개발계획', {}),{
            isShow : true,
            isEnable : true
        });

        const Edit_탁상감정_탁상감정가 = new MaskEdit('Edit_탁상감정_탁상감정가', new JsonZoonData('Edit_탁상감정_탁상감정가', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_입지특성_주요혐오시설 = new Edit('Edit_입지특성_주요혐오시설', new JsonZoonData('Edit_입지특성_주요혐오시설', {}),{
            isShow : true,
            isEnable : true
        });
        const Edit_배당표_경락가액 = new MaskEdit('Edit_배당표_경락가액', new JsonZoonData('Edit_배당표_경락가액', {}),{
            isShow : true,
            isEnable : false,
            mask : ';12;#,###1',
            maskType: '숫자'
        });

        const Edit_지상 = new Edit('Edit_지상', new JsonZoonData('Edit_지상', {}),{
            isShow : true,
            isEnable : true,
            mask : '000',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    if (match(PageType.집합_아파트)) {
                        SetValue('Edit_보정표_전유부분위치', "전체 "+GetString('Edit_지상')+"층중 지상 "+GetString('Edit_해당층')+"층에 위치");
                        SetValue('MkEdit_보정표_예상낙찰가',GetNumber('MkEdit_보정표_최저입찰가')*GetNumber(MkEdit_보정표_적용할낙찰가율)/100);

                        GetZoonData('Q_전유부분의위치').FindIndex('전유부분의위치_Idx', (row) =>{
                            return row['CD_CODE'] == GetString('Combo_전유부분의위치');
                        })
                        GetZoonData('Q_전유부분의위치').GetRow(GetNumber('전유부분의위치_Idx'), [
                            { key: 'MkEdit_보정표_전유부분위치_적용율', value: 'ATTR_08'}
                        ]);
                    }
                }
            });

        const Edit_해당층 = new Edit('Edit_해당층', new JsonZoonData('Edit_해당층', {}),{
            isShow : true,
            isEnable : true,
            mask : '000',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    if (match(PageType.집합_아파트)) {
                        SetValue('Edit_보정표_전유부분위치', "전체 "+GetString('Edit_지상')+"층중 지상 "+GetString('Edit_해당층')+"층에 위치");
                        SetValue('MkEdit_보정표_예상낙찰가',GetNumber('MkEdit_보정표_최저입찰가')*GetNumber(MkEdit_보정표_적용할낙찰가율)/100);

                        GetZoonData('Q_전유부분의위치').FindIndex('전유부분의위치_Idx', (row) =>{
                            return row['CD_CODE'] == GetString('Combo_전유부분의위치');
                        })
                        GetZoonData('Q_전유부분의위치').GetRow(GetNumber('전유부분의위치_Idx'), [
                            { key: 'MkEdit_보정표_전유부분위치_적용율', value: 'ATTR_08'}
                        ]);
                    }
                }
            });

        const Edit_지하 = new Edit('Edit_지하', new JsonZoonData('Edit_지하', {}),{
            isShow : true,
            isEnable : true,
            mask : '000',
            maskType: '숫자'
        })

        const Edit_소재지 = new Edit('Edit_소재지', new JsonZoonData('Edit_소재지', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_지번 = new Edit('Edit_지번', new JsonZoonData('Edit_지번', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_집합건물의명칭 = new Edit('Edit_집합건물의명칭', new JsonZoonData('Edit_집합건물의명칭', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_동수 = new Edit('Edit_동수', new JsonZoonData('Edit_동수', {}),{
            isShow : true,
            isEnable : true
        })

        const Edit_호수 = new Edit('Edit_호수', new JsonZoonData('Edit_호수', {}),{
            isShow : true,
            isEnable : true,
        });            

        const Edit_대지권소유권 = new MaskEdit('Edit_대지권소유권', new JsonZoonData('Edit_대지권소유권', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('Formula1', Math.floor(GetNumber('MkEdit_토지권의목적인')/GetNumber('Edit_대지권소유권')));
                    SetValue('Edit_대지권소유권_평', (GetNumber('Edit_대지권소유권')*0.3025).toFixed(2));
                }
            });

        const Edit_대지권소유권_평 = new CalcEdit('Edit_대지권소유권_평', ['Edit_대지권소유권'], new FunctionZoonData('Edit_대지권소유권_평', () => {
            return { value: GetNumber('Edit_대지권소유권')*0.3025 };
        }), {
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        });

        const Edit_국토의계획 = new Edit('Edit_국토의계획', new JsonZoonData('Edit_국토의계획', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_다른법률등 = new Edit('Edit_다른법률등', new JsonZoonData('Edit_다른법률등', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_시행령부칙 = new Edit('Edit_시행령부칙', new JsonZoonData('Edit_시행령부칙', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_토지이용규제 = new Edit('Edit_토지이용규제', new JsonZoonData('Edit_토지이용규제', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_사유 = new Edit('Edit_사유', new JsonZoonData('Edit_사유', {}),{
            isShow : true,
            isEnable : true,
        });

        const Edit_거래처 = new Edit('Edit_거래처', new JsonZoonData('Edit_거래처', {}),{
            isShow : true,
            isEnable : false,
        });

        const Formula1 = new CalcEdit('Formula1', ['Edit_대지권소유권', 'MkEdit_토지권의목적인', 'Edit_대지권소유권'], new FunctionZoonData('Formula1', () => {
            if (GetNumber('Edit_대지권소유권') == 0) {
                return { value: 0 };
            } else {
                return { value: Truncate(GetNumber('MkEdit_토지권의목적인')/GetNumber('Edit_대지권소유권'),0) };
            }
        }), {
            isShow : true,
            isEnable : false,
            mask: ';;#,###',
            maskType: '숫자'
        });

        // Edit ---------------------------------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------------------------------
        const MkEdit_감정일 = new MaskEdit('MkEdit_감정일', new JsonZoonData('MkEdit_감정일', {}),{
            isShow : true,
            isEnable : false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_건축년도_경과', StrToNum(Left(GetString('MkEdit_감정일'),4)) - StrToNum(Left(GetString('MkEdit_건축일자'),4)));
                }
            });

        const MkEdit_보정표_건축물의경과년도 = new MaskEdit('MkEdit_보정표_건축물의경과년도', new JsonZoonData('MkEdit_보정표_건축물의경과년도', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1',
            maskType: '숫자'
        });
        const 보정표_MkEdit_건축물의경과년도 = new MaskEdit('보정표_MkEdit_건축물의경과년도', new JsonZoonData('보정표_MkEdit_건축물의경과년도', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1',
            maskType: '숫자'
        });

        const MkEdit_보정표_건축물의경과년도_적용율 = new MaskEdit('MkEdit_보정표_건축물의경과년도_적용율', new JsonZoonData('MkEdit_보정표_건축물의경과년도_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
            })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        MC_보정표_예상낙찰가();
                    }
                }
        });
        const 보정표_MkEdit_건축물의경과년도_적용율 = new MaskEdit('보정표_MkEdit_건축물의경과년도_적용율', new JsonZoonData('보정표_MkEdit_건축물의경과년도_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_기준낙찰가율 = new MaskEdit('MkEdit_보정표_기준낙찰가율', new JsonZoonData('MkEdit_보정표_기준낙찰가율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });
        const 보정표_MkEdit_기준낙찰가율 = new MaskEdit('보정표_MkEdit_기준낙찰가율', new JsonZoonData('보정표_MkEdit_기준낙찰가율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_당해지역낙찰가율 = new MaskEdit('MkEdit_보정표_당해지역낙찰가율', new JsonZoonData('MkEdit_보정표_당해지역낙찰가율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        SetValue('MkEdit_보정표_기준낙찰가율',(GetNumber('MkEdit_보정표_당해지역낙찰가율')+GetNumber('MkEdit_보정표_유사부동산낙찰가율'))/2)
                        RunButton('Command_적용할낙찰가율');
                        MC_배당표_주택임대차보증금_계산_전체();

                        // Break Marco 확인필요

                        SetValue('MkEdit_보정표_적용할낙찰가율',GetNumber('MkEdit_보정표_기준낙찰가율')*GetNumber('MkEdit_보정표_아파트단지규모_적용율')*GetNumber('MkEdit_보정표_전유부분면적_적용율')*GetNumber('MkEdit_보정표_전유부분위치_적용율')*GetNumber('MkEdit_보정표_건축물의경과년도_적용율')*GetNumber('MkEdit_보정표_점유자의권리형태'));
                        SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);
                    }else if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                        RunButton('Command_적용할낙찰가율');
                    }
                }
            });
        const 보정표_MkEdit_당해지역낙찰가율 = new MaskEdit('보정표_MkEdit_당해지역낙찰가율', new JsonZoonData('보정표_MkEdit_당해지역낙찰가율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    RunButton('Command_적용할낙찰가율');
                }
            });

        const MkEdit_보정표_상가의접근성_적용율 = new MaskEdit('MkEdit_보정표_상가의접근성_적용율', new JsonZoonData('MkEdit_보정표_상가의접근성_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_상가의층별위치_적용율 = new MaskEdit('MkEdit_보정표_상가의층별위치_적용율', new JsonZoonData('MkEdit_보정표_상가의층별위치_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_상권의발달정도_적용율 = new MaskEdit('MkEdit_보정표_상권의발달정도_적용율', new JsonZoonData('MkEdit_보정표_상권의발달정도_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_예상낙찰가 = new MaskEdit('MkEdit_보정표_예상낙찰가', new JsonZoonData('MkEdit_보정표_예상낙찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 보정표_MkEdit_예상낙찰가 = new MaskEdit('보정표_MkEdit_예상낙찰가', new JsonZoonData('보정표_MkEdit_예상낙찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_보정표_유사부동산낙찰가율 = new MaskEdit('MkEdit_보정표_유사부동산낙찰가율', new JsonZoonData('MkEdit_보정표_유사부동산낙찰가율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        SetValue('MkEdit_보정표_기준낙찰가율',(GetNumber('MkEdit_보정표_당해지역낙찰가율')+GetNumber('MkEdit_보정표_유사부동산낙찰가율'))/2)
                        RunButton('Command_적용할낙찰가율');
                        MC_배당표_주택임대차보증금_계산_전체();

                        SetValue('MkEdit_보정표_적용할낙찰가율',GetNumber('MkEdit_보정표_기준낙찰가율')*GetNumber('MkEdit_보정표_아파트단지규모_적용율')*GetNumber('MkEdit_보정표_전유부분면적_적용율')*GetNumber('MkEdit_보정표_전유부분위치_적용율')*GetNumber('MkEdit_보정표_건축물의경과년도_적용율')*GetNumber('MkEdit_보정표_점유자의권리형태'))
                        SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)
                    }else if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                        RunButton('Command_적용할낙찰가율');
                    }
                }
            });
        const 보정표_MkEdit_유사부동산낙찰가율 = new MaskEdit('보정표_MkEdit_유사부동산낙찰가율', new JsonZoonData('보정표_MkEdit_유사부동산낙찰가율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    RunButton('Command_적용할낙찰가율');
                }
            });

        const MkEdit_보정표_입지조건_적용율 = new MaskEdit('MkEdit_보정표_입지조건_적용율', new JsonZoonData('MkEdit_보정표_입지조건_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;1;#,###1.00',
            maskType: '숫자'
        });
        const 보정표_MkEdit_전유부분의면적_적용율 = new MaskEdit('보정표_MkEdit_전유부분의면적_적용율', new JsonZoonData('보정표_MkEdit_전유부분의면적_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_적용할낙찰가율 = new MaskEdit('MkEdit_보정표_적용할낙찰가율', new JsonZoonData('MkEdit_보정표_적용할낙찰가율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });
        const 보정표_MkEdit_적용할낙찰가율 = new MaskEdit('보정표_MkEdit_적용할낙찰가율', new JsonZoonData('보정표_MkEdit_적용할낙찰가율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_전유부분면적 = new MaskEdit('MkEdit_보정표_전유부분면적', new JsonZoonData('MkEdit_보정표_전유부분면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });
        const 보정표_MkEdit_전유부분의면적 = new MaskEdit('보정표_MkEdit_전유부분의면적', new JsonZoonData('보정표_MkEdit_전유부분의면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_전유부분면적_적용율 = new MaskEdit('MkEdit_보정표_전유부분면적_적용율', new JsonZoonData('MkEdit_보정표_전유부분면적_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
            })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        MC_보정표_예상낙찰가();
                    }
                }
        });
        const 보정표_MkEdit_접한도로의폭_적용율 = new MaskEdit('보정표_MkEdit_접한도로의폭_적용율', new JsonZoonData('보정표_MkEdit_접한도로의폭_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_전유부분위치_등급 = new Edit('MkEdit_보정표_전유부분위치_등급', new JsonZoonData('MkEdit_보정표_전유부분위치_등급', {}),{
            isShow : true,
            isEnable : false,
        });
        const 보정표_MkEdit_전유부분위치_등급 = new Edit('보정표_MkEdit_전유부분위치_등급', new JsonZoonData('보정표_MkEdit_전유부분위치_등급', {}),{
            isShow : true,
            isEnable : false,
        });

        const MkEdit_보정표_전유부분위치_적용율 = new MaskEdit('MkEdit_보정표_전유부분위치_적용율', new JsonZoonData('MkEdit_보정표_전유부분위치_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
            })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        MC_보정표_예상낙찰가();
                    }
                }
        });
        const 보정표_MkEdit_총층수중전유부분_적용율 = new MaskEdit('보정표_MkEdit_총층수중전유부분_적용율', new JsonZoonData('보정표_MkEdit_총층수중전유부분_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_점유자의권리형태_적용율 = new MaskEdit('MkEdit_보정표_점유자의권리형태_적용율', new JsonZoonData('MkEdit_보정표_점유자의권리형태_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;1;#,###1.00',
            maskType: '숫자'
        })

        const MkEdit_보정표_점유자의권리형태 = new MaskEdit('MkEdit_보정표_점유자의권리형태', new JsonZoonData('MkEdit_보정표_점유자의권리형태', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;1;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        MC_보정표_예상낙찰가();
                    }
                }
            });
        const 보정표_MkEdit_점유자의권리형태_적용율 = new MaskEdit('보정표_MkEdit_점유자의권리형태_적용율', new JsonZoonData('보정표_MkEdit_점유자의권리형태_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;1;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보정표_최저입찰가 = new MaskEdit('MkEdit_보정표_최저입찰가', new JsonZoonData('MkEdit_보정표_최저입찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 보정표_MkEdit_최저입찰가 = new MaskEdit('보정표_MkEdit_최저입찰가', new JsonZoonData('보정표_MkEdit_최저입찰가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_보정표_평가가격 = new MaskEdit('MkEdit_보정표_평가가격', new JsonZoonData('MkEdit_보정표_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 보정표_MkEdit_평가가격 = new MaskEdit('보정표_MkEdit_평가가격', new JsonZoonData('보정표_MkEdit_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_비준_가격_본건_일자 = new MaskEdit('MkEdit_비준_가격_본건_일자', new JsonZoonData('MkEdit_비준_가격_본건_일자', {}),{
            isShow : true,
            isEnable : false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                focusout: function() {
                    if (GetString('MkEdit_비준_가격_본건_일자') == '00000000') {
                        SetValue('비준_Label_시점_본건_경과일', '');
                    } else {
                        SetValue('10_경과년도_변수일자', GetValue('MkEdit_비준_가격_본건_일자'));
                        RunButton('Command_경과일수');
                        SetValue('비준_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));
                        SetValue('10_경과일수_쿼리리턴값', GetValue(''));
                    }
                }
            });
        const 비준_MkEdit_시점_본건_일자 = new MaskEdit('비준_MkEdit_시점_본건_일자', new JsonZoonData('비준_MkEdit_시점_본건_일자', {}),{
            isShow : true,
            isEnable : false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                focusout: function() {
                    if (GetString('비준_MkEdit_시점_본건_일자') == '00000000') {
                        SetValue('비준_Label_시점_본건_경과일', '');
                    } else {
                        SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_시점_본건_일자'));
                        RunButton('Command_경과일수');
                        SetValue('비준_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));
                        SetValue('10_경과일수_쿼리리턴값', GetValue(''));
                    }
                }
            });

        const MkEdit_비준_가격_본건_적용율 = new MaskEdit('MkEdit_비준_가격_본건_적용율', new JsonZoonData('MkEdit_비준_가격_본건_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();

                    if (match(PageType.집합_상업용)) {
                        SetValue('MkEdit_비준_가격_사례_적용율', GetValue('MkEdit_비준_가격_본건_적용율'));
                    }
                }
            });

        const 비준_MkEdit_시점_본건_적용율 = new MaskEdit('비준_MkEdit_시점_본건_적용율', new JsonZoonData('비준_MkEdit_시점_본건_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        let MkEdit_비준_가격_비교_data = 0;
        if (match(PageType.집합_상업용)) {
            MkEdit_비준_가격_비교_data = GetValue('MkEdit_비준_가격_사례_적용율');
        } else {
            MkEdit_비준_가격_비교_data = Round(GetNumber('MkEdit_비준_가격_본건_적용율') / GetNumber('MkEdit_비준_가격_사례_적용율'), 2);
        }
        const MkEdit_비준_가격_비교 = new Edit('MkEdit_비준_가격_비교', new JsonZoonData('MkEdit_비준_가격_비교', { value: MkEdit_비준_가격_비교_data }),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: false,
                소수점_이하값_표시: false,
                소수점_자리: '1.000',
                천자리_기호_표시: true
            }
        });

        const 비준_MkEdit_시점_비교 = new Edit('비준_MkEdit_시점_비교', new JsonZoonData('비준_MkEdit_시점_비교', { value: MkEdit_비준_가격_비교_data }),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: false,
                소수점_이하값_표시: false,
                소수점_자리: '1.000',
                천자리_기호_표시: true
            }
        });

        const MkEdit_비준_가격_사례_일자 = new MaskEdit('MkEdit_비준_가격_사례_일자', new JsonZoonData('MkEdit_비준_가격_사례_일자', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                change: function() {
                    if (GetString('MkEdit_비준_가격_사례_일자') == "00000000") {
                        SetValue('비준_Label_시점_사례_경과일', '');
                    } else {
                        SetValue('10_경과년도_변수일자', GetValue('MkEdit_비준_가격_사례_일자'));
                        RunButton('Command_경과일수');
                        SetValue('비준_Label_시점_사례_경과일', GetValue('10_경과일수_쿼리리턴값'));
                        SetValue('10_경과일수_쿼리리턴값', '');
                    }
                }
            });

        const 비준_MkEdit_시점_사례_일자 = new MaskEdit('비준_MkEdit_시점_사례_일자', new JsonZoonData('비준_MkEdit_시점_사례_일자', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                change: function() {
                    if (GetString('비준_MkEdit_가격_사례_일자') == "00000000") {
                        SetValue('비준_Label_시점_사례_경과일', '');
                    } else {
                        SetValue('10_경과년도_변수일자', GetValue('비준_MkEdit_가격_사례_일자'));
                        RunButton('Command_경과일수');
                        SetValue('비준_Label_시점_사례_경과일', GetValue('10_경과일수_쿼리리턴값'));
                        SetValue('10_경과일수_쿼리리턴값', '');
                    }
                }
            });

        const MkEdit_비준_가격_사례_적용율 = new MaskEdit('MkEdit_비준_가격_사례_적용율', new JsonZoonData('MkEdit_비준_가격_사례_적용율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';1;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const 비준_MkEdit_시점_사례_적용율 = new MaskEdit('비준_MkEdit_시점_사례_적용율', new JsonZoonData('비준_MkEdit_시점_사례_적용율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';1;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const MkEdit_비준_기타조건지수_본건 = new MaskEdit('MkEdit_비준_기타조건지수_본건', new JsonZoonData('MkEdit_비준_기타조건지수_본건', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_전유면적_평',GetNumber('MkEdit_전유면적') * 0.3025);
                    SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적') + GetNumber('MkEdit_공유면적'));
                    SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평') + GetNumber('MkEdit_공유면적_평'));
                    SetValue('MkEdit_보정표_전유부분면적',GetNumber('MkEdit_전유면적'));

                    if (GetNumber('MkEdit_전유면적') > 0 && GetNumber('MkEdit_전유면적') < 55) {
                        SetValue('Combo_전유부분의면적',"01");
                    } else if (GetNumber('MkEdit_전유면적') >= 55 && GetNumber('MkEdit_전유면적') < 80) {
                        SetValue('Combo_전유부분의면적',"02");
                    } else if (GetNumber('MkEdit_전유면적') >= 80 && GetNumber('MkEdit_전유면적') < 101) {
                        SetValue('Combo_전유부분의면적',"03");
                    } else if (GetNumber('MkEdit_전유면적') >= 101 && GetNumber('MkEdit_전유면적') < 131) {
                        SetValue('Combo_전유부분의면적',"04");
                    } else if (GetNumber('MkEdit_전유면적') >= 131 && GetNumber('MkEdit_전유면적') <= 165) {
                        SetValue('Combo_전유부분의면적',"05");
                    } else if (GetNumber('MkEdit_전유면적') > 165) {
                        SetValue('Combo_전유부분의면적', "06");
                    }

                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100);

                    if (GetString('Combo_집합건물종류') == "101") {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    }

                    GetZoonData('Q_00_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                        return row['CD_CODE'] == GetString('Combo_전유부분의면적');
                    });
                    GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                        { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08'}
                    ]);
                }
            });

        const MkEdit_비준_기타조건지수_비교 = new MaskEdit('MkEdit_비준_기타조건지수_비교', new JsonZoonData('MkEdit_비준_기타조건지수_비교', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_기타조건지수_사례 = new MaskEdit('MkEdit_비준_기타조건지수_사례', new JsonZoonData('MkEdit_비준_기타조건지수_사례', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const MkEdit_비준_도로조건지수_비교 = new MaskEdit('MkEdit_비준_도로조건지수_비교', new JsonZoonData('MkEdit_비준_도로조건지수_비교', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const MkEdit_비준_사례가격 = new MaskEdit('MkEdit_비준_사례가격', new JsonZoonData('MkEdit_비준_사례가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 비준_MkEdit_전용면적단가 = new MaskEdit('비준_MkEdit_전용면적단가', new JsonZoonData('비준_MkEdit_전용면적단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_비준_산정단가 = new MaskEdit('MkEdit_비준_산정단가', new JsonZoonData('MkEdit_비준_산정단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1',
            maskType: '숫자'
        });
        const 비준_MkEdit_산정단가 = new MaskEdit('비준_MkEdit_산정단가', new JsonZoonData('비준_MkEdit_산정단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1',
            maskType: '숫자'
        });

        const MkEdit_비준_소재지_비교 = new MaskEdit('MkEdit_비준_소재지_비교', new JsonZoonData('MkEdit_비준_소재지_비교', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const 비준_MkEdit_소재지_비교 = new MaskEdit('비준_MkEdit_소재지_비교', new JsonZoonData('비준_MkEdit_소재지_비교', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_302_비준가격_Change_5_비교치_계산();
                }
            });

        const MkEdit_비준_요인합계 = new MaskEdit('MkEdit_비준_요인합계', new JsonZoonData('MkEdit_비준_요인합계', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 비준_MkEdit_요인합계 = new MaskEdit('비준_MkEdit_요인합계', new JsonZoonData('비준_MkEdit_요인합계', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_위치별지수_본건 = new MaskEdit('MkEdit_비준_위치별지수_본건', new JsonZoonData('MkEdit_비준_위치별지수_본건', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_전유면적_평',GetNumber('MkEdit_전유면적') * 0.3025);
                    SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적') + GetNumber('MkEdit_공유면적'));
                    SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평') + GetNumber('MkEdit_공유면적_평'));
                    SetValue('MkEdit_보정표_전유부분면적',GetNumber('MkEdit_전유면적'));

                    if (GetNumber('MkEdit_전유면적') > 0 && GetNumber('MkEdit_전유면적') < 55) {
                        SetValue('Combo_전유부분의면적',"01");
                    } else if (GetNumber('MkEdit_전유면적') >= 55 && GetNumber('MkEdit_전유면적') < 80) {
                        SetValue('Combo_전유부분의면적',"02");
                    } else if (GetNumber('MkEdit_전유면적') >= 80 && GetNumber('MkEdit_전유면적') < 101) {
                        SetValue('Combo_전유부분의면적',"03");
                    } else if (GetNumber('MkEdit_전유면적') >= 101 && GetNumber('MkEdit_전유면적') < 131) {
                        SetValue('Combo_전유부분의면적',"04");
                    } else if (GetNumber('MkEdit_전유면적') >= 131 && GetNumber('MkEdit_전유면적') <= 165) {
                        SetValue('Combo_전유부분의면적',"05");
                    } else if (GetNumber('MkEdit_전유면적') > 165) {
                        SetValue('Combo_전유부분의면적', "06");
                    }

                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100);

                    if (GetString('Combo_집합건물종류') == "101") {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    }

                    GetZoonData('Q_00_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                        return row['CD_CODE'] == GetString('Combo_전유부분의면적');
                    });
                    GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                        { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08'}
                    ]);
                }
            });

        const MkEdit_비준_위치별지수_비교 = new MaskEdit('MkEdit_비준_위치별지수_비교', new JsonZoonData('MkEdit_비준_위치별지수_비교', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_위치별지수_사례 = new MaskEdit('MkEdit_비준_위치별지수_사례', new JsonZoonData('MkEdit_비준_위치별지수_사례', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_잔가율_본건 = new MaskEdit('MkEdit_비준_잔가율_본건', new JsonZoonData('MkEdit_비준_잔가율_본건', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (match(PageType.집합_오피스텔)) {
                        SetValue('MkEdit_전유면적_평',GetNumber('MkEdit_전유면적') * 0.3025);
                        SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적') + GetNumber('MkEdit_공유면적'));
                        SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평') + GetNumber('MkEdit_공유면적_평'));
                        SetValue('MkEdit_보정표_전유부분면적',GetNumber('MkEdit_전유면적'));

                        if (GetNumber('MkEdit_전유면적') > 0 && GetNumber('MkEdit_전유면적') < 55) {
                            SetValue('Combo_전유부분의면적',"01");
                        } else if (GetNumber('MkEdit_전유면적') >= 55 && GetNumber('MkEdit_전유면적') < 80) {
                            SetValue('Combo_전유부분의면적',"02");
                        } else if (GetNumber('MkEdit_전유면적') >= 80 && GetNumber('MkEdit_전유면적') < 101) {
                            SetValue('Combo_전유부분의면적',"03");
                        } else if (GetNumber('MkEdit_전유면적') >= 101 && GetNumber('MkEdit_전유면적') < 131) {
                            SetValue('Combo_전유부분의면적',"04");
                        } else if (GetNumber('MkEdit_전유면적') >= 131 && GetNumber('MkEdit_전유면적') <= 165) {
                            SetValue('Combo_전유부분의면적',"05");
                        } else if (GetNumber('MkEdit_전유면적') > 165) {
                            SetValue('Combo_전유부분의면적', "06");
                        }

                        SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100);

                        if (GetString('Combo_집합건물종류') == "101") {
                            SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                            SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                            SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                            SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                            SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                            SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                        } else {
                            SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                            SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                            SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                            SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                            SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                            SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                        }

                        GetZoonData('Q_00_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                            return row['CD_CODE'] == GetString('Combo_전유부분의면적');
                        });
                        GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                            { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08'}
                        ]);
                    }
                }
            });

        const 비준_MkEdit_잔가율_본건 = new MaskEdit('비준_MkEdit_잔가율_본건', new JsonZoonData('비준_MkEdit_잔가율_본건', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                }
            });

        const MkEdit_비준_잔가율_비교 = new MaskEdit('MkEdit_비준_잔가율_비교', new JsonZoonData('MkEdit_비준_잔가율_비교', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 비준_MkEdit_잔가율_비교 = new MaskEdit('비준_MkEdit_잔가율_비교', new JsonZoonData('비준_MkEdit_잔가율_비교', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_잔가율_사례 = new MaskEdit('MkEdit_비준_잔가율_사례', new JsonZoonData('MkEdit_비준_잔가율_사례', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (match(PageType.집합_오피스텔)) {
                        SetValue('MkEdit_전유면적_평',GetNumber('MkEdit_전유면적') * 0.3025);
                        SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적') + GetNumber('MkEdit_공유면적'));
                        SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평') + GetNumber('MkEdit_공유면적_평'));
                        SetValue('MkEdit_보정표_전유부분면적',GetNumber('MkEdit_전유면적'));

                        if (GetNumber('MkEdit_전유면적') > 0 && GetNumber('MkEdit_전유면적') < 55) {
                            SetValue('Combo_전유부분의면적',"01");
                        } else if (GetNumber('MkEdit_전유면적') >= 55 && GetNumber('MkEdit_전유면적') < 80) {
                            SetValue('Combo_전유부분의면적',"02");
                        } else if (GetNumber('MkEdit_전유면적') >= 80 && GetNumber('MkEdit_전유면적') < 101) {
                            SetValue('Combo_전유부분의면적',"03");
                        } else if (GetNumber('MkEdit_전유면적') >= 101 && GetNumber('MkEdit_전유면적') < 131) {
                            SetValue('Combo_전유부분의면적',"04");
                        } else if (GetNumber('MkEdit_전유면적') >= 131 && GetNumber('MkEdit_전유면적') <= 165) {
                            SetValue('Combo_전유부분의면적',"05");
                        } else if (GetNumber('MkEdit_전유면적') > 165) {
                            SetValue('Combo_전유부분의면적', "06");
                        }

                        SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100);

                        if (GetString('Combo_집합건물종류') == "101") {
                            SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                            SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                            SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                            SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                            SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                            SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                            SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                            SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                        } else {
                            SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                            SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                            SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                            SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                            SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                            SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                            SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                            SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                            SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                        }

                        GetZoonData('Q_00_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                            return row['CD_CODE'] == GetString('Combo_전유부분의면적');
                        });
                        GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                            { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08'}
                        ]);
                    }
                }
            });

        const 비준_MkEdit_잔가율_사례 = new MaskEdit('비준_MkEdit_잔가율_사례', new JsonZoonData('비준_MkEdit_잔가율_사례', {}),{
            isShow : true,
            isEnable : false
        })
            .on({
                focusout: function() {
                }
            });

        const MkEdit_비준_적용단가 = new MaskEdit('MkEdit_비준_적용단가', new JsonZoonData('MkEdit_비준_적용단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1',
            maskType: '숫자'
        });

        const MkEdit_비준_전용면적 = new MaskEdit('MkEdit_비준_전용면적', new JsonZoonData('MkEdit_비준_전용면적', {}),{
            isShow : false,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 비준_MkEdit_전용면적 = new MaskEdit('비준_MkEdit_전용면적', new JsonZoonData('비준_MkEdit_전용면적', {}),{
            isShow : false,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_접근조건지수_본건 = new MaskEdit('MkEdit_비준_접근조건지수_본건', new JsonZoonData('MkEdit_비준_접근조건지수_본건', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        }).on({
            focusout: function() {
                SetValue('MkEdit_전유면적_평',GetNumber('MkEdit_전유면적') * 0.3025);
                SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적') + GetNumber('MkEdit_공유면적'));
                SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평') + GetNumber('MkEdit_공유면적_평'));
                SetValue('MkEdit_보정표_전유부분면적',GetNumber('MkEdit_전유면적'));

                if (GetNumber('MkEdit_전유면적') > 0 && GetNumber('MkEdit_전유면적') < 55) {
                    SetValue('Combo_전유부분의면적',"01");
                } else if (GetNumber('MkEdit_전유면적') >= 55 && GetNumber('MkEdit_전유면적') < 80) {
                    SetValue('Combo_전유부분의면적',"02");
                } else if (GetNumber('MkEdit_전유면적') >= 80 && GetNumber('MkEdit_전유면적') < 101) {
                    SetValue('Combo_전유부분의면적',"03");
                } else if (GetNumber('MkEdit_전유면적') >= 101 && GetNumber('MkEdit_전유면적') < 131) {
                    SetValue('Combo_전유부분의면적',"04");
                } else if (GetNumber('MkEdit_전유면적') >= 131 && GetNumber('MkEdit_전유면적') <= 165) {
                    SetValue('Combo_전유부분의면적',"05");
                } else if (GetNumber('MkEdit_전유면적') > 165) {
                    SetValue('Combo_전유부분의면적', "06");
                }

                SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100);

                if (GetString('Combo_집합건물종류') == "101") {
                    SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                    SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                    SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                    SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                    SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                    SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                    SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                    SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                    SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                    SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                    SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                    SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                    SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                    SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                } else {
                    SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                    SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                    SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                    SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                    SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                    SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                    SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                    SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                    SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                    SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                    SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                    SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                    SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                    SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                }

                GetZoonData('Q_00_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                    return row['CD_CODE'] == GetString('Combo_전유부분의면적');
                });
                GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                    { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08'}
                ]);
            }
        });

        const MkEdit_비준_접근조건지수_비교 = new MaskEdit('MkEdit_비준_접근조건지수_비교', new JsonZoonData('MkEdit_비준_접근조건지수_비교', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_접근조건지수_사례 = new MaskEdit('MkEdit_비준_접근조건지수_사례', new JsonZoonData('MkEdit_비준_접근조건지수_사례', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_층별지수_본건 = new MaskEdit('MkEdit_비준_층별지수_본건', new JsonZoonData('MkEdit_비준_층별지수_본건', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_전유면적_평',GetNumber('MkEdit_전유면적') * 0.3025);
                    SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적') + GetNumber('MkEdit_공유면적'));
                    SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평') + GetNumber('MkEdit_공유면적_평'));
                    SetValue('MkEdit_보정표_전유부분면적',GetNumber('MkEdit_전유면적'));

                    if (GetNumber('MkEdit_전유면적') > 0 && GetNumber('MkEdit_전유면적') < 55) {
                        SetValue('Combo_전유부분의면적',"01");
                    } else if (GetNumber('MkEdit_전유면적') >= 55 && GetNumber('MkEdit_전유면적') < 80) {
                        SetValue('Combo_전유부분의면적',"02");
                    } else if (GetNumber('MkEdit_전유면적') >= 80 && GetNumber('MkEdit_전유면적') < 101) {
                        SetValue('Combo_전유부분의면적',"03");
                    } else if (GetNumber('MkEdit_전유면적') >= 101 && GetNumber('MkEdit_전유면적') < 131) {
                        SetValue('Combo_전유부분의면적',"04");
                    } else if (GetNumber('MkEdit_전유면적') >= 131 && GetNumber('MkEdit_전유면적') <= 165) {
                        SetValue('Combo_전유부분의면적',"05");
                    } else if (GetNumber('MkEdit_전유면적') > 165) {
                        SetValue('Combo_전유부분의면적', "06");
                    }

                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100);

                    if (GetString('Combo_집합건물종류') == "101") {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    }

                    GetZoonData('Q_00_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                        return row['CD_CODE'] == GetString('Combo_전유부분의면적');
                    });
                    GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                        { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08'}
                    ]);
                }
            });

        const MkEdit_비준_층별지수_비교 = new MaskEdit('MkEdit_비준_층별지수_비교', new JsonZoonData('MkEdit_비준_층별지수_비교', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_층별지수_사례 = new MaskEdit('MkEdit_비준_층별지수_사례', new JsonZoonData('MkEdit_비준_층별지수_사례', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 비준_MkEdit_층별_사례 = new MaskEdit('비준_MkEdit_층별_사례', new JsonZoonData('비준_MkEdit_층별_사례', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_비준_환산금액 = new MaskEdit('MkEdit_비준_환산금액', new JsonZoonData('MkEdit_비준_환산금액', {}),{
            isShow : false,
            isEnable : true,
            mask: match(PageType.집합_오피스텔) ? ';7;#,###1.00' : ';12;#,###1',
            maskType: '숫자'
        });
        const 비준_MkEdit_환산금액 = new MaskEdit('비준_MkEdit_환산금액', new JsonZoonData('비준_MkEdit_환산금액', {}),{
            isShow : false,
            isEnable : true,
            mask: match(PageType.집합_오피스텔) ? ';7;#,###1.00' : ';12;#,###1',
            maskType: '숫자'
        });

        const 비준_MkEdit_최저금액 = new MaskEdit('비준_MkEdit_최저금액', new JsonZoonData('비준_MkEdit_최저금액', {}),{
            isShow : false,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 비준_MkEdit_최고금액 = new MaskEdit('비준_MkEdit_최고금액', new JsonZoonData('비준_MkEdit_최고금액', {}),{
            isShow : false,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_건축년도_경과 = new MaskEdit('MkEdit_입력표_건축년도_경과', new JsonZoonData('MkEdit_입력표_건축년도_경과', {}),{
            isShow : true,
            isEnable : false,
            mask: ';;#,###1',
            maskType: '숫자'
        });


        const MkEdit_입력표_건축일자 = new MaskEdit('MkEdit_입력표_건축일자', new JsonZoonData('MkEdit_입력표_건축일자', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                change: function() {
                    SetValue('MkEdit_입력표_건축년도_경과', Math.floor((Days(GetDate('MkEdit_감정일')) - Days(GetDate('MkEdit_입력표_건축일자'))) / 365) );
                    SetValue('MkEdit_보정표_건축물의경과년도', Math.floor((Days(GetDate('MkEdit_감정일')) - Days(GetDate('MkEdit_입력표_건축일자'))) / 365));
                    SetValue('본건_Formula_경과년도', GetValue('MkEdit_입력표_건축년도_경과'));
                    SetValue('02_잔가율구분', '입력표');
                    MC_003_계산_잔가율();
                }
            });

        const MkEdit_입력표_공유면적 = new MaskEdit('MkEdit_입력표_공유면적', new JsonZoonData('MkEdit_입력표_공유면적', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_입력표_공유면적_평', GetNumber('MkEdit_입력표_공유면적') * 0.3025);
                    SetValue('MkEdit_입력표_면적합계'   , GetNumber('MkEdit_입력표_전유면적') + GetNumber('MkEdit_입력표_공유면적'));
                    SetValue('MkEdit_입력표_면적합계_평', GetNumber('MkEdit_입력표_전유면적_평') + GetNumber('MkEdit_입력표_공유면적_평'));

                }
            });

        const MkEdit_입력표_공유면적_평 = new MaskEdit('MkEdit_입력표_공유면적_평', new JsonZoonData('MkEdit_입력표_공유면적_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_기준시가_단가_M2 = new MaskEdit('MkEdit_입력표_기준시가_단가_M2', new JsonZoonData('MkEdit_입력표_기준시가_단가_M2', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_101_감정에관한사항_계산_기준시가();
                    RunButton('Command_응찰_02_이벤트');
                }
            });

        const MkEdit_입력표_기준시가_단가_평 = new MaskEdit('MkEdit_입력표_기준시가_단가_평', new JsonZoonData('MkEdit_입력표_기준시가_단가_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_입력표_기준시가_총액 = new MaskEdit('MkEdit_입력표_기준시가_총액', new JsonZoonData('MkEdit_입력표_기준시가_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (GetString('Combo_집합건물종류') == '101') {
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    } else {
                        SetValue('MkEdit_기준시가_단가', Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_기준시가_단가', GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가', Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가', GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    }

                    SetValue('MkEdit_기준시가',GetNumber('MkEdit_기준시가_총액'));
                }
            });

        const MkEdit_입력표_기타조건_지수 = new MaskEdit('MkEdit_입력표_기타조건_지수', new JsonZoonData('MkEdit_입력표_기타조건_지수', {}),{
            isShow : true,
            isEnable : true,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        })
            .on({
                change: function () {
                    // BreakMacro..
                },
                focusout: function() {
                    SetValue('MkEdit_전유면적_평',GetNumber('MkEdit_전유면적') * 0.3025);
                    SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적') + GetNumber('MkEdit_공유면적'));
                    SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평') + GetNumber('MkEdit_공유면적_평'));
                    SetValue('MkEdit_보정표_전유부분면적',GetNumber('MkEdit_전유면적'));
                    SetValue('MkEdit_등기부상전용면적', GetValue('MkEdit_전유면적'));
                    SetValue('MkEdit_분모', GetValue('MkEdit_전유면적'));
                    SetValue('MkEdit_분자', GetValue('MkEdit_전유면적'));
                    SetValue('MkEdit_비율', GetNumber('MkEdit_분자') / GetNumber('MkEdit_분모') * 100 );

                    if (GetNumber('MkEdit_전유면적') > 0 && GetNumber('MkEdit_전유면적') < 55) {
                        SetValue('Combo_전유부분의면적',"01");
                    } else if (GetNumber('MkEdit_전유면적') >= 55 && GetNumber('MkEdit_전유면적') < 80) {
                        SetValue('Combo_전유부분의면적',"02");
                    } else if (GetNumber('MkEdit_전유면적') >= 80 && GetNumber('MkEdit_전유면적') < 101) {
                        SetValue('Combo_전유부분의면적',"03");
                    } else if (GetNumber('MkEdit_전유면적') >= 101 && GetNumber('MkEdit_전유면적') < 131) {
                        SetValue('Combo_전유부분의면적',"04");
                    } else if (GetNumber('MkEdit_전유면적') >= 131 && GetNumber('MkEdit_전유면적') <= 165) {
                        SetValue('Combo_전유부분의면적',"05");
                    } else if (GetNumber('MkEdit_전유면적') > 165) {
                        SetValue('Combo_전유부분의면적', "06");
                    }

                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가') * GetNumber('MkEdit_보정표_적용할낙찰가율') / 100);


                    if (GetString('Combo_집합건물종류') == "101") {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_면적합계_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적') / 1000,0));
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액') / GetNumber('MkEdit_전유면적_평') / 1000,0));
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가') * 1000);
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가') * 1000);
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가') * 1000);
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가') * 1000);
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가') * 1000);
                    }

                    GetZoonData('Q_00_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                        return row['CD_CODE'] == GetString('Combo_전유부분의면적');
                    });
                    GetZoonData('Q_00_전유부분의면적').GetRow(GetNumber('전유부분면적_Idx'), [
                        { key: 'MkEdit_보정표_전유부분면적_적용율', value: 'ATTR_08'}
                    ]);
                }
            });

        const MkEdit_입력표_내용연수 = new MaskEdit('MkEdit_입력표_내용연수', new JsonZoonData('MkEdit_입력표_내용연수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';;#,###1',
            maskType: '숫자'
        });

        const MkEdit_입력표_담보제공_분모 = new MaskEdit('MkEdit_입력표_담보제공_분모', new JsonZoonData('MkEdit_입력표_담보제공_분모', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_102_담보제공비율부분_계산및셋팅();
                    MC_사유_상태변경();
                }
            });

        const MkEdit_입력표_담보제공_분자 = new MaskEdit('MkEdit_입력표_담보제공_분자', new JsonZoonData('MkEdit_입력표_담보제공_분자', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_102_담보제공비율부분_계산및셋팅();
                    MC_사유_상태변경();
                }
            });

        const MkEdit_입력표_담보제공_비율 = new MaskEdit('MkEdit_입력표_담보제공_비율', new JsonZoonData('MkEdit_입력표_담보제공_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_감정가_비율',GetNumber('MkEdit_비율'));
                    SetValue('MkEdit_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_최종평가가격',GetNumber('MkEdit_감정가_평가가격')*GetNumber('MkEdit_감정가_비율'));
                    SetValue('MkEdit_보정표_평가가격',GetNumber('MkEdit_감정가_평가가격'));
                    SetValue('MkEdit_보정표_최저입찰가',GetNumber('MkEdit_감정가_최종평가가격'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);
                }
            });

        const MkEdit_입력표_담보제공_사유 = new Edit('MkEdit_입력표_담보제공_사유', new JsonZoonData('MkEdit_입력표_담보제공_사유', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                focusin: function() {
                    if (match(PageType.집합_상업용)) {
                        MC_사유_상태변경();
                    }
                }
            });


        const MkEdit_입력표_담보제공_전용면적 = new MaskEdit('MkEdit_입력표_담보제공_전용면적', new JsonZoonData('MkEdit_입력표_담보제공_전용면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_비율',GetNumber('MkEdit_분자') / GetNumber('MkEdit_분모') * 100);
                    SetValue('MkEdit_감정가_등기부상전용면적',GetNumber('MkEdit_등기부상전용면적'));
                    SetValue('MkEdit_담보제공면적',GetNumber('MkEdit_등기부상전용면적') * (GetNumber('MkEdit_비율') / 100));
                    SetValue('MkEdit_감정가_비율',GetNumber('MkEdit_비율'));
                    SetValue('MkEdit_감정가_담보제공면적',GetNumber('MkEdit_담보제공면적'));
                }
            });

        const MkEdit_입력표_담보제공_제공면적 = new MaskEdit('MkEdit_입력표_담보제공_제공면적', new JsonZoonData('MkEdit_입력표_담보제공_제공면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_감정가_담보제공면적',GetValue('MkEdit_담보제공면적'));
                }
            });

        const MkEdit_입력표_도로조건지수 = new MaskEdit('MkEdit_입력표_도로조건지수', new JsonZoonData('MkEdit_입력표_도로조건지수', {}),{
            isShow : false,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_면적합계 = new MaskEdit('MkEdit_입력표_면적합계', new JsonZoonData('MkEdit_입력표_면적합계', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_면적합계_평 = new MaskEdit('MkEdit_입력표_면적합계_평', new JsonZoonData('MkEdit_입력표_면적합계_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_실거래가_단가_M2 = new MaskEdit('MkEdit_입력표_실거래가_단가_M2', new JsonZoonData('MkEdit_입력표_실거래가_단가_M2', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_입력표_실거래가_단가_평 = new MaskEdit('MkEdit_입력표_실거래가_단가_평', new JsonZoonData('MkEdit_입력표_실거래가_단가_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_입력표_실거래가_총액 = new MaskEdit('MkEdit_입력표_실거래가_총액', new JsonZoonData('MkEdit_입력표_실거래가_총액', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    MC_101_감정에관한사항_계산_실거래가격();
                }
            });

        const MkEdit_입력표_위치지수 = new MaskEdit('MkEdit_입력표_위치지수', new JsonZoonData('MkEdit_입력표_위치지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_잔가율 = new Edit('MkEdit_입력표_잔가율', new JsonZoonData('MkEdit_입력표_잔가율', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: false,
                소수점_이하값_표시: false,
                소수점_자리: '1.00',
                천자리_기호_표시: true
            }
        });

        const MkEdit_입력표_전유면적 = new MaskEdit('MkEdit_입력표_전유면적', new JsonZoonData('MkEdit_입력표_전유면적', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_입력표_전유면적_평', GetNumber('MkEdit_입력표_전유면적') * 0.3025);
                    SetValue('MkEdit_입력표_면적합계', GetNumber('MkEdit_입력표_전유면적') + GetNumber('MkEdit_입력표_공유면적'));
                    SetValue('MkEdit_입력표_면적합계_평', GetNumber('MkEdit_입력표_전유면적_평') + GetNumber('MkEdit_입력표_공유면적_평'));

                    SetValue('MkEdit_입력표_담보제공_전용면적', GetValue('MkEdit_입력표_전유면적'));
                    SetValue('MkEdit_입력표_담보제공_분모', GetValue('MkEdit_입력표_전유면적'));
                    SetValue('MkEdit_입력표_담보제공_분자', GetValue('MkEdit_입력표_전유면적'));

                    MC_101_감정에관한사항_계산_실거래가격();
                    MC_101_감정에관한사항_계산_기준시가();
                    MC_102_담보제공비율부분_계산및셋팅();
                }
            });

        const MkEdit_입력표_전유면적_평 = new MaskEdit('MkEdit_입력표_전유면적_평', new JsonZoonData('MkEdit_입력표_전유면적_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_접근조건지수 = new MaskEdit('MkEdit_입력표_접근조건지수', new JsonZoonData('MkEdit_입력표_접근조건지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_층별지수 = new MaskEdit('MkEdit_입력표_층별지수', new JsonZoonData('MkEdit_입력표_층별지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';3;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_입력표_층별코드 = new Edit('MkEdit_입력표_층별코드', new JsonZoonData('MkEdit_입력표_층별코드', {}),{
            isShow : false,
            isEnable : false
        });

        const MkEdit_입력표_토지권의목적인 = new MaskEdit('MkEdit_입력표_토지권의목적인', new JsonZoonData('MkEdit_입력표_토지권의목적인', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_격차율_최고 = new MaskEdit('MkEdit_평가_격차율_최고', new JsonZoonData('MkEdit_평가_격차율_최고', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_격차율_최저 = new MaskEdit('MkEdit_평가_격차율_최저', new JsonZoonData('MkEdit_평가_격차율_최저', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_결정가격_단가 = new MaskEdit('MkEdit_평가_결정가격_단가', new JsonZoonData('MkEdit_평가_결정가격_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_결정가격_단가 = new MaskEdit('평가_MkEdit_결정가격_단가', new JsonZoonData('평가_MkEdit_결정가격_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_결정가격_총액 = new MaskEdit('MkEdit_평가_결정가격_총액', new JsonZoonData('MkEdit_평가_결정가격_총액', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_평가_결정가격_단가', Round((GetNumber('MkEdit_평가_결정가격_총액') / GetNumber('MkEdit_입력표_전유면적') ) / 1000, 0) * 1000);
                    MC_402_평가액_평가액산정();
                }
            });

        const 평가_MkEdit_결정가격 = new MaskEdit('MkEdit_평가_결정가격_총액', new JsonZoonData('MkEdit_평가_결정가격_총액', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    SetValue('MkEdit_평가_결정가격_단가', Round((GetNumber('MkEdit_평가_결정가격_총액') / GetNumber('MkEdit_입력표_전유면적') ) / 1000, 0) * 1000);
                    MC_402_평가액_평가액산정();
                }
            });

        const MkEdit_평가_가격_비율 = new MaskEdit('MkEdit_평가_가격_비율', new JsonZoonData('MkEdit_평가_가격_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_가격_비율 = new MaskEdit('평가_MkEdit_가격_비율', new JsonZoonData('평가_MkEdit_가격_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_가격_최고_단가 = new MaskEdit('MkEdit_평가_가격_최고_단가', new JsonZoonData('MkEdit_평가_가격_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_가격_최고_단가 = new MaskEdit('평가_MkEdit_가격_최고_단가', new JsonZoonData('평가_MkEdit_가격_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_가격_최고_총액 = new MaskEdit('MkEdit_평가_가격_최고_총액', new JsonZoonData('MkEdit_평가_가격_최고_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_가격_최고 = new MaskEdit('평가_MkEdit_가격_최고', new JsonZoonData('평가_MkEdit_가격_최고', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_가격_최저_단가 = new MaskEdit('MkEdit_평가_가격_최저_단가', new JsonZoonData('MkEdit_평가_가격_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_가격_최저_단가 = new MaskEdit('평가_MkEdit_가격_최저_단가', new JsonZoonData('평가_MkEdit_가격_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_가격_최저_총액 = new MaskEdit('MkEdit_평가_가격_최저_총액', new JsonZoonData('MkEdit_평가_가격_최저_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_가격_최저 = new MaskEdit('평가_MkEdit_가격_최저', new JsonZoonData('평가_MkEdit_가격_최저', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_경매_비율 = new MaskEdit('MkEdit_평가_경매_비율', new JsonZoonData('MkEdit_평가_경매_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_경매_비율 = new MaskEdit('평가_MkEdit_경매_비율', new JsonZoonData('평가_MkEdit_경매_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_경매_최고_단가 = new MaskEdit('MkEdit_평가_경매_최고_단가', new JsonZoonData('MkEdit_평가_경매_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_경매_최고_단가 = new MaskEdit('평가_MkEdit_경매_최고_단가', new JsonZoonData('평가_MkEdit_경매_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_경매_최고_총액 = new MaskEdit('MkEdit_평가_경매_최고_총액', new JsonZoonData('MkEdit_평가_경매_최고_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_경매_최고 = new MaskEdit('평가_MkEdit_경매_최고', new JsonZoonData('평가_MkEdit_경매_최고', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_경매_최저_단가 = new MaskEdit('MkEdit_평가_경매_최저_단가', new JsonZoonData('MkEdit_평가_경매_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_경매_최저_단가 = new MaskEdit('평가_MkEdit_경매_최저_단가', new JsonZoonData('평가_MkEdit_경매_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_경매_최저_총액 = new MaskEdit('MkEdit_평가_경매_최저_총액', new JsonZoonData('MkEdit_평가_경매_최저_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_경매_최저 = new MaskEdit('평가_MkEdit_경매_최저', new JsonZoonData('평가_MkEdit_경매_최저', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_담보_분모 = new MaskEdit('MkEdit_평가_담보_분모', new JsonZoonData('MkEdit_평가_담보_분모', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_담보_분모 = new MaskEdit('평가_MkEdit_담보_분모', new JsonZoonData('평가_MkEdit_담보_분모', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_담보_분자 = new MaskEdit('MkEdit_평가_담보_분자', new JsonZoonData('MkEdit_평가_담보_분자', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_담보_분자 = new MaskEdit('평가_MkEdit_담보_분자', new JsonZoonData('평가_MkEdit_담보_분자', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_담보_비율 = new MaskEdit('MkEdit_평가_담보_비율', new JsonZoonData('MkEdit_평가_담보_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_담보_비율 = new MaskEdit('평가_MkEdit_담보_비율', new JsonZoonData('평가_MkEdit_담보_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_담보_전용면적 = new MaskEdit('MkEdit_평가_담보_전용면적', new JsonZoonData('MkEdit_평가_담보_전용면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_담보_등기전용면적 = new MaskEdit('평가_MkEdit_담보_등기전용면적', new JsonZoonData('평가_MkEdit_담보_등기전용면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 평가_MkEdit_담보_제공면적 = new MaskEdit('평가_MkEdit_담보_제공면적', new JsonZoonData('평가_MkEdit_담보_제공면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_담보_제공면적 = new MaskEdit('MkEdit_평가_담보_제공면적', new JsonZoonData('MkEdit_평가_담보_제공면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_담보_최종평가가격 = new MaskEdit('MkEdit_평가_담보_최종평가가격', new JsonZoonData('MkEdit_평가_담보_최종평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_담보_최종평가가격 = new MaskEdit('평가_MkEdit_담보_최종평가가격', new JsonZoonData('평가_MkEdit_담보_최종평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_담보_평가가격 = new MaskEdit('MkEdit_평가_담보_평가가격', new JsonZoonData('MkEdit_평가_담보_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_담보_평가가격 = new MaskEdit('평가_MkEdit_담보_평가가격', new JsonZoonData('평가_MkEdit_담보_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_본건_비율 = new MaskEdit('MkEdit_평가_본건_비율', new JsonZoonData('MkEdit_평가_본건_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_본건_비율 = new MaskEdit('평가_MkEdit_본건_비율', new JsonZoonData('평가_MkEdit_본건_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_본건_최고_단가 = new MaskEdit('MkEdit_평가_본건_최고_단가', new JsonZoonData('MkEdit_평가_본건_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_본건_최고_단가 = new MaskEdit('평가_MkEdit_본건_최고_단가', new JsonZoonData('평가_MkEdit_본건_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_본건_최고_총액 = new MaskEdit('MkEdit_평가_본건_최고_총액', new JsonZoonData('MkEdit_평가_본건_최고_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_본건_최고 = new MaskEdit('평가_MkEdit_본건_최고', new JsonZoonData('평가_MkEdit_본건_최고', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_본건_최저_단가 = new MaskEdit('MkEdit_평가_본건_최저_단가', new JsonZoonData('MkEdit_평가_본건_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_본건_최저_단가 = new MaskEdit('평가_MkEdit_본건_최저_단가', new JsonZoonData('평가_MkEdit_본건_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_본건_최저_총액 = new MaskEdit('MkEdit_평가_본건_최저_총액', new JsonZoonData('MkEdit_평가_본건_최저_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_본건_최저 = new MaskEdit('평가_MkEdit_본건_최저', new JsonZoonData('평가_MkEdit_본건_최저', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_비준_비율 = new MaskEdit('MkEdit_평가_비준_비율', new JsonZoonData('MkEdit_평가_비준_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_비준_최고_단가 = new MaskEdit('MkEdit_평가_비준_최고_단가', new JsonZoonData('MkEdit_평가_비준_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_비준_최고_총액 = new MaskEdit('MkEdit_평가_비준_최고_총액', new JsonZoonData('MkEdit_평가_비준_최고_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_비준_최저_단가 = new MaskEdit('MkEdit_평가_비준_최저_단가', new JsonZoonData('MkEdit_평가_비준_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_비준_최저_총액 = new MaskEdit('MkEdit_평가_비준_최저_총액', new JsonZoonData('MkEdit_평가_비준_최저_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_수익_비율 = new MaskEdit('MkEdit_평가_수익_비율', new JsonZoonData('MkEdit_평가_수익_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_수익_최고_단가 = new MaskEdit('MkEdit_평가_수익_최고_단가', new JsonZoonData('MkEdit_평가_수익_최고_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_수익_최고_총액 = new MaskEdit('MkEdit_평가_수익_최고_총액', new JsonZoonData('MkEdit_평가_수익_최고_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_수익_최저_단가 = new MaskEdit('MkEdit_평가_수익_최저_단가', new JsonZoonData('MkEdit_평가_수익_최저_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_수익_최저_총액 = new MaskEdit('MkEdit_평가_수익_최저_총액', new JsonZoonData('MkEdit_평가_수익_최저_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_인테리어_보수금액 = new MaskEdit('MkEdit_평가_인테리어_보수금액', new JsonZoonData('MkEdit_평가_인테리어_보수금액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });
        const 평가_MkEdit_인테리어_금액 = new MaskEdit('평가_MkEdit_인테리어_금액', new JsonZoonData('평가_MkEdit_인테리어_금액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_인테리어_보수단가 = new MaskEdit('MkEdit_평가_인테리어_보수단가', new JsonZoonData('MkEdit_평가_인테리어_보수단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 평가_MkEdit_인테리어_단가 = new MaskEdit('평가_MkEdit_인테리어_단가', new JsonZoonData('평가_MkEdit_인테리어_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가_인테리어_평형_M2 = new MaskEdit('MkEdit_평가_인테리어_평형_M2', new JsonZoonData('MkEdit_평가_인테리어_평형_M2', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });
        const 평가_MkEdit_인테리어_면적_M2 = new MaskEdit('평가_MkEdit_인테리어_면적_M2', new JsonZoonData('평가_MkEdit_인테리어_면적_M2', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_평가_인테리어_평형_평 = new MaskEdit('MkEdit_평가_인테리어_평형_평', new JsonZoonData('MkEdit_평가_인테리어_평형_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (match(PageType.집합_상업용)) {
                        SetValue('MkEdit_평가_인테리어_평형_M2', Round(GetValue('MkEdit_평가_인테리어_평형_평') / 0.3025, 2));
                        MC_402_평가액_평가액산정();
                    }
                }
            });
        const 평가_MkEdit_인테리어_면적_평 = new MaskEdit('평가_MkEdit_인테리어_면적_평', new JsonZoonData('평가_MkEdit_인테리어_면적_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (match(PageType.집합_상업용)) {
                        SetValue('MkEdit_평가_인테리어_평형_M2', Round(GetValue('MkEdit_평가_인테리어_평형_평') / 0.3025, 2));
                        MC_402_평가액_평가액산정();
                    }
                }
            });

        const MkEdit_평가_평가가격_단가 = new MaskEdit('MkEdit_평가_평가가격_단가', new JsonZoonData('MkEdit_평가_평가가격_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (GetString('Combo_집합건물종류') == '101') {
                        SetValue('MkEdit_시가_최저_단가', Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계'))/1000),0);
                        SetValue('MkEdit_시가_최저_단가', GetNumber('MkEdit_시가_최저_단가')*1000);
                        SetValue('MkEdit_시가_최저_평당단가', Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계_평'))/1000),0);
                        SetValue('MkEdit_시가_최저_평당단가', GetNumber('MkEdit_시가_최저_평당단가')*1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적'))/1000),0);
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                        SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적_평'))/1000),0);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                    }
                }
            });
        const 평가_MkEdit_평가가격_단가 = new MaskEdit('평가_MkEdit_평가가격_단가', new JsonZoonData('평가_MkEdit_평가가격_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (GetString('Combo_집합건물종류') == '101') {
                        SetValue('MkEdit_시가_최저_단가', Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계'))/1000),0);
                        SetValue('MkEdit_시가_최저_단가', GetNumber('MkEdit_시가_최저_단가')*1000);
                        SetValue('MkEdit_시가_최저_평당단가', Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계_평'))/1000),0);
                        SetValue('MkEdit_시가_최저_평당단가', GetNumber('MkEdit_시가_최저_평당단가')*1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적'))/1000),0);
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                        SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적_평'))/1000),0);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                    }
                }
            });

        const MkEdit_평가_평가가격_총액 = new MaskEdit('MkEdit_평가_평가가격_총액', new JsonZoonData('MkEdit_평가_평가가격_총액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (GetString('Combo_집합건물종류') == '101') {
                        SetValue('MkEdit_시가_최저_단가', Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계')) / 1000),0);
                        SetValue('MkEdit_시가_최저_단가', GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가', Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평')) / 1000),0);
                        SetValue('MkEdit_시가_최저_평당단가', GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적')) / 1000),0);
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평')) / 1000),0);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                    }
                }
            });
        const 평가_MkEdit_평가가격 = new MaskEdit('평가_MkEdit_평가가격', new JsonZoonData('평가_MkEdit_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (GetString('Combo_집합건물종류') == '101') {
                        SetValue('MkEdit_시가_최저_단가', Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계')) / 1000),0);
                        SetValue('MkEdit_시가_최저_단가', GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가', Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_면적합계_평')) / 1000),0);
                        SetValue('MkEdit_시가_최저_평당단가', GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                    } else {
                        SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적')) / 1000),0);
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가') * 1000);
                        SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액') / GetNumber('MkEdit_전유면적_평')) / 1000),0);
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가') * 1000);
                    }
                }
            });



        const MkEdit_등기부등본상의시세_총액 =  new MaskEdit('MkEdit_등기부등본상의시세_총액', new JsonZoonData('MkEdit_등기부등본상의시세_총액', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        if(GetValue('Combo_집합건물종류') == "101") {
                            SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계')/1000,0));
                            SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000);
                            SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계_평')/1000,0));
                            SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000);
                        }else{
                            SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적')/1000,0));
                            SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000);
                            SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적_평')/1000,0));
                            SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000);
                        }
                        SetValue('MkEdit_시가','MkEdit_등기부등본상의시세_총액');
                    }
                }
            });

        const MkEdit_등기부등본상의시세_단가 =  new MaskEdit('MkEdit_등기부등본상의시세_단가', new JsonZoonData('MkEdit_등기부등본상의시세_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_등기부등본상의시세_평당단가 =  new MaskEdit('MkEdit_등기부등본상의시세_평당단가', new JsonZoonData('MkEdit_등기부등본상의시세_평당단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_기준시가_총액 =  new MaskEdit('MkEdit_기준시가_총액', new JsonZoonData('MkEdit_기준시가_총액', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if(match(PageType.집합_아파트)){
                        if ( GetString('Combo_집합건물종류') == "101" ) {
                            SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_면적합계')/1000,0));
                            SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가')*1000);
                            SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_면적합계_평')/1000,0));
                            SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가')*1000);
                        } else {
                            SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_전유면적')/1000,0));
                            SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가')*1000);
                            SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_전유면적_평')/1000,0));
                            SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가')*1000);
                        }
                        SetValue('MkEdit_기준시가',GetValue('MkEdit_기준시가_총액'));

                        RunButton('Command_응찰_02_이벤트');
                    }
                }
            });

        const MkEdit_기준시가_단가 =  new MaskEdit('MkEdit_기준시가_단가', new JsonZoonData('MkEdit_기준시가_단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_기준시가_평당단가 =  new MaskEdit('MkEdit_기준시가_평당단가', new JsonZoonData('MkEdit_기준시가_평당단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_토지권의목적인 =  new MaskEdit('MkEdit_토지권의목적인', new JsonZoonData('MkEdit_토지권의목적인', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    if(match(PageType.집합_상업용) || match(PageType.집합_오피스텔)){
                        SetValue('Formula1', Math.floor(GetNumber('MkEdit_토지권의목적인')/GetNumber('Edit_대지권소유권')));
                        SetValue('Edit_대지권소유권_평', (GetNumber('Edit_대지권소유권')*0.3025).toFixed(2));
                    }
                }
            });

        const MkEdit_건축일자 = new MaskEdit('MkEdit_건축일자', new JsonZoonData('MkEdit_건축일자', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
        .on({
            change: function() {
                SetValue('MkEdit_건축년도_경과', Math.floor((Days(GetDate('MkEdit_감정일')) - Days(GetDate('MkEdit_건축일자'))) / 365) );
                SetValue('MkEdit_보정표_건축물의경과년도', Math.floor((Days(GetDate('MkEdit_감정일')) - Days(GetDate('MkEdit_건축일자'))) / 365));
                SetValue('MkEdit_감정가액산출_건축일자',Left(GetValue('MkEdit_건축일자'),4))
                SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)

                GetZoonData('Q_건축물의경과년도').FindIndex('건축물의경과년도_Idx', (row) =>{
                    return row['CD_CODE'] == GetString('Combo_건축물경과년도');
                })
                GetZoonData('Q_전유부분의위치').GetRow(GetNumber('건축물의경과년도_Idx'), [
                    { key: 'MkEdit_보정표_건축물의경과년도_적용율', value: 'ATTR_08'}
                ]);
            }
        });

        const MkEdit_세대수  = new MaskEdit('MkEdit_세대수', new JsonZoonData('MkEdit_세대수', {}),{
            isShow : true,
            isEnable : true,
            mask: ';4;#,###1',
            maskType: '숫자'
        })
        .on({
            focusout : function() {
                SetValue('MkEdit_감정가액산출_세대수', GetValue('MkEdit_세대수'));
                if(match(PageType.집합_아파트)){
                    SetValue('MkEdit_보정표_아파트단지규모', GetValue('MkEdit_세대수'));

                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                    GetZoonData('Q_아파트단지규모').FindIndex('단지전체규모_Idx', (row) =>{
                        return row['CD_CODE'] == GetString('Combo_아파트단지규모');
                    })

                    GetZoonData('Q_아파트단지규모').GetRow('단지전체규모_Idx', [
                        {key : 'MkEdit_보정표_아파트단지규모_적용율', value :'ATTR_08'}
                    ])
                }

            }
        });
        const MkEdit_건축년도_경과 = new MaskEdit('MkEdit_건축년도_경과', new JsonZoonData('MkEdit_건축년도_경과', {}),{
            isShow : true,
            isEnable : false,
            mask: ';;#,###1',
            maskType: '숫자'
        });

        const MkEdit_전유면적 = new MaskEdit('MkEdit_전유면적', new JsonZoonData('MkEdit_전유면적', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_전유면적_평', GetNumber('MkEdit_전유면적')*0.3025);
                    SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적')+GetNumber('MkEdit_공유면적'));
                    SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평')+GetNumber('MkEdit_공유면적_평'));
                    SetValue('MkEdit_보정표_전유부분면적',GetValue('MkEdit_전유면적'));
                    SetValue('MkEdit_등기부상전용면적',GetValue('MkEdit_전유면적'));
                    SetValue('MkEdit_분자',GetValue('MkEdit_전유면적'));
                    SetValue('MkEdit_분모',GetValue('MkEdit_전유면적'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                    SetValue('MkEdit_비율',GetNumber('MkEdit_분자')/GetNumber('MkEdit_분모')*100);
                    SetValue('MkEdit_감정가_등기부상전용면적',GetValue('MkEdit_등기부상전용면적'));
                    SetValue('MkEdit_감정가_분자',GetValue('MkEdit_분자'));
                    SetValue('MkEdit_감정가_분모',GetValue('MkEdit_분모'));
                    SetValue('MkEdit_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));

                    SetValue('MkEdit_담보제공면적',GetNumber('MkEdit_등기부상전용면적')*GetNumber('MkEdit_비율')/100);
                    SetValue('MkEdit_감정가_비율',GetValue('MkEdit_비율'));
                    SetValue('MkEdit_감정가_담보제공면적',GetValue('MkEdit_담보제공면적'));
                    SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_최종평가가격',GetNumber('MkEdit_감정가_평가가격')*GetNumber('MkEdit_감정가_비율')/100);
                    SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                    SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                    SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                    SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                    SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                    SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))	
                    SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                    SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                    SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                    SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))	
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000)
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000)
                    SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가')*1000)
                    SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가')*1000)
                    SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                    SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
                    SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가')*1000)
                    SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가')*1000)

                    GetZoonData('Q_전유부분의면적').FindIndex('전유부분면적_Idx', (row) => {
                        return row['CD_CODE'] == GetValue('Combo_전유부분의면적');
                    });

                    GetZoonData('Q_전유부분의면적').GetRow('전유부분면적_Idx',[
                        {key : 'MkEdit_보정표_전유부분면적_적용율' , value:'ATTR_08'}
                    ]);

                    MC_배당표_주택임대차보증금_계산_전체();

                    RunButton('Command_응찰_02_이벤트');
                }
            });

        const MkEdit_전유면적_평 = new MaskEdit('MkEdit_전유면적_평', new JsonZoonData('MkEdit_전유면적_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_공유면적 = new MaskEdit('MkEdit_공유면적', new JsonZoonData('MkEdit_공유면적', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_공유면적_평',GetNumber('MkEdit_공유면적')*0.3025);
                    SetValue('MkEdit_면적합계',GetNumber('MkEdit_전유면적')+GetNumber('MkEdit_공유면적'));
                    SetValue('MkEdit_면적합계_평',GetNumber('MkEdit_전유면적_평')+GetNumber('MkEdit_공유면적_평'));

                    if(GetString('Combo_집합건물종류') == "101"){
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계')/1000,0));
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계_평')/1000,0));
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액')/GetNumber('MkEdit_면적합계')/1000,0));
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_면적합계')/1000,0))
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_면적합계_평')/1000,0))
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000)
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000)
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가')*1000)
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가')*1000)
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가')*1000)
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가')*1000)
                    }else{
                        SetValue('MkEdit_시가_최저_단가',Round(GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적')/1000,0))
                        SetValue('MkEdit_시가_최저_평당단가',Round(GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적_평')/1000,0))
                        SetValue('MkEdit_시가_최고_단가',Round(GetNumber('MkEdit_시가_최고_총액')/GetNumber('MkEdit_전유면적')/1000,0))
                        SetValue('MkEdit_시가_최고_평당단가',Round(GetNumber('MkEdit_시가_최고_총액')/GetNumber('MkEdit_전유면적_평')/1000,0))
                        SetValue('MkEdit_등기부등본상의시세_단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적')/1000,0))
                        SetValue('MkEdit_등기부등본상의시세_평당단가',Round(GetNumber('MkEdit_등기부등본상의시세_총액')/GetNumber('MkEdit_전유면적_평')/1000,0))
                        SetValue('MkEdit_기준시가_단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_전유면적')/1000,0))
                        SetValue('MkEdit_기준시가_평당단가',Round(GetNumber('MkEdit_기준시가_총액')/GetNumber('MkEdit_전유면적_평')/1000,0))
                        SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000)
                        SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000)
                        SetValue('MkEdit_시가_최고_단가',GetNumber('MkEdit_시가_최고_단가')*1000)
                        SetValue('MkEdit_시가_최고_평당단가',GetNumber('MkEdit_시가_최고_평당단가')*1000)
                        SetValue('MkEdit_등기부등본상의시세_단가',GetNumber('MkEdit_등기부등본상의시세_단가')*1000)
                        SetValue('MkEdit_등기부등본상의시세_평당단가',GetNumber('MkEdit_등기부등본상의시세_평당단가')*1000)
                        SetValue('MkEdit_기준시가_단가',GetNumber('MkEdit_기준시가_단가')*1000)
                        SetValue('MkEdit_기준시가_평당단가',GetNumber('MkEdit_기준시가_평당단가')*1000)
                    }
                }
            });

        const MkEdit_공유면적_평 = new MaskEdit('MkEdit_공유면적_평', new JsonZoonData('MkEdit_공유면적_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_면적합계 = new MaskEdit('MkEdit_면적합계', new JsonZoonData('MkEdit_면적합계', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_면적합계_평 = new MaskEdit('MkEdit_면적합계_평', new JsonZoonData('MkEdit_면적합계_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';9;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_등기부상전용면적 = new MaskEdit('MkEdit_등기부상전용면적', new JsonZoonData('MkEdit_등기부상전용면적', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_비율',GetNumber('MkEdit_분자')/GetNumber('MkEdit_분모')*100);
                    SetValue('MkEdit_감정가_등기부상전용면적',GetValue('MkEdit_등기부상전용면적'));

                    SetValue('MkEdit_담보제공면적',GetNumber('MkEdit_등기부상전용면적')*(GetNumber('MkEdit_비율')/100));
                    SetValue('MkEdit_감정가_비율',GetValue('MkEdit_비율'));
                    SetValue('MkEdit_감정가_담보제공면적',GetValue('MkEdit_담보제공면적'));
                    SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_최종평가가격',GetNumber('MkEdit_감정가_평가가격')*(GetNumber('MkEdit_감정가_비율')/100));
                    SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                    SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                    MC_배당표_주택임대차보증금_계산_전체();
                }
            });

        const MkEdit_분자 = new MaskEdit('MkEdit_분자', new JsonZoonData('MkEdit_분자', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_비율',GetNumber('MkEdit_분자')/GetNumber('MkEdit_분모')*100);
                    SetValue('MkEdit_감정가_분자',GetValue('MkEdit_분자'));

                    SetValue('MkEdit_담보제공면적',GetNumber('MkEdit_등기부상전용면적')*(GetNumber('MkEdit_비율')/100));
                    SetValue('MkEdit_감정가_비율',GetValue('MkEdit_비율'));
                    SetValue('MkEdit_감정가_담보제공면적',GetValue('MkEdit_담보제공면적'));
                    SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_최종평가가격',GetNumber('MkEdit_감정가_평가가격')*(GetNumber('MkEdit_감정가_비율')/100));
                    SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                    SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                    MC_배당표_주택임대차보증금_계산_전체();
                    MC_사유_상태변경();
                }
            });

        const MkEdit_분모 = new MaskEdit('MkEdit_분모', new JsonZoonData('MkEdit_분모', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_비율',GetNumber('MkEdit_분자')/GetNumber('MkEdit_분모')*100);
                    SetValue('MkEdit_감정가_분모',GetValue('MkEdit_분모'));

                    SetValue('MkEdit_담보제공면적',GetNumber('MkEdit_등기부상전용면적')*(GetNumber('MkEdit_비율')/100));
                    SetValue('MkEdit_감정가_비율',GetValue('MkEdit_비율'));
                    SetValue('MkEdit_감정가_담보제공면적',GetValue('MkEdit_담보제공면적'));
                    SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_최종평가가격',GetNumber('MkEdit_감정가_평가가격')*(GetNumber('MkEdit_감정가_비율')/100));
                    SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                    SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);

                    MC_배당표_주택임대차보증금_계산_전체();
                    MC_사유_상태변경();
                }
            });

        const MkEdit_비율 = new MaskEdit('MkEdit_비율', new JsonZoonData('MkEdit_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_감정가_비율',GetValue('MkEdit_비율'))
                    SetValue('MkEdit_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_최종평가가격',GetNumber('MkEdit_감정가_평가가격')*GetNumber('MkEdit_감정가_비율'));
                    SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                    SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                    SetValue('MkEdit_보정표_예상낙찰가', GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100);
                }
            });

        const MkEdit_담보제공면적 = new MaskEdit('MkEdit_담보제공면적', new JsonZoonData('MkEdit_담보제공면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_감정가_담보제공면적',GetValue('MkEdit_담보제공면적'));
                }
            });

        const MkEdit_감정가액산출_건축일자 = new Edit('MkEdit_감정가액산출_건축일자', new JsonZoonData('MkEdit_감정가액산출_건축일자', {}),{
            isShow : true,
            isEnable : false,
        });

        const MkEdit_감정가액산출_세대수 = new MaskEdit('MkEdit_감정가액산출_세대수', new JsonZoonData('MkEdit_감정가액산출_세대수', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;;#,###1',
            maskType: '숫자'
        });

        const MkEdit_본건_최저가격 = new MaskEdit('MkEdit_본건_최저가격', new JsonZoonData('MkEdit_본건_최저가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_본건_최고가격 = new MaskEdit('MkEdit_본건_최고가격', new JsonZoonData('MkEdit_본건_최고가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_본건_비율 = new MaskEdit('MkEdit_본건_비율', new JsonZoonData('MkEdit_본건_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_인근_최저가격 = new MaskEdit('MkEdit_인근_최저가격', new JsonZoonData('MkEdit_인근_최저가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_인근_최고가격 = new MaskEdit('MkEdit_인근_최고가격', new JsonZoonData('MkEdit_인근_최고가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_인근_비율 = new MaskEdit('MkEdit_인근_비율', new JsonZoonData('MkEdit_인근_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_경매_최저가격 = new MaskEdit('MkEdit_경매_최저가격', new JsonZoonData('MkEdit_경매_최저가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_경매_최고가격 = new MaskEdit('MkEdit_경매_최고가격', new JsonZoonData('MkEdit_경매_최고가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_경매_비율 = new MaskEdit('MkEdit_경매_비율', new JsonZoonData('MkEdit_경매_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_결정가격 = new MaskEdit('MkEdit_결정가격', new JsonZoonData('MkEdit_결정가격', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout : function() {
                    SetValue('MkEdit_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_평가가격',GetNumber('MkEdit_결정가격')+GetNumber('MkEdit_보수금액'));
                    SetValue('MkEdit_감정가_최종평가가격',Round((GetNumber('MkEdit_감정가_평가가격')*(GetNumber('MkEdit_감정가_비율')/100))/1000,0)*1000);
                    SetValue('MkEdit_보정표_평가가격',GetValue('MkEdit_감정가_평가가격'));
                    SetValue('MkEdit_보정표_최저입찰가',GetValue('MkEdit_감정가_최종평가가격'));
                    SetValue('MkEdit_보정표_예상낙찰가', Round((GetNumber('MkEdit_보정표_최저입찰가')*GetNumber('MkEdit_보정표_적용할낙찰가율')/100)/1000,0)*1000);
                    MC_배당표_주택임대차보증금_계산_전체();
                }
            });

        const MkEdit_보수평형_평 = new MaskEdit('MkEdit_보수평형_평', new JsonZoonData('MkEdit_보수평형_평', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보수평형 = new MaskEdit('MkEdit_보수평형', new JsonZoonData('MkEdit_보수평형', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_보수단가 = new MaskEdit('MkEdit_보수단가', new JsonZoonData('MkEdit_보수단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_보수금액 = new MaskEdit('MkEdit_보수금액', new JsonZoonData('MkEdit_보수금액', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const MkEdit_평가가격 = new MaskEdit('MkEdit_평가가격', new JsonZoonData('MkEdit_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
        .on({
            focusout : function() {
                if(GetString('Combo_집합건물종류') == '101'){
                    SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계'))/1000),0);
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                    SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계_평'))/1000),0);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                }else{
                    SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적'))/1000),0);
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                    SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적_평'))/1000),0);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                }
            }    
        });

        const MkEdit_감정가_등기부상전용면적 = new MaskEdit('MkEdit_감정가_등기부상전용면적', new JsonZoonData('MkEdit_감정가_등기부상전용면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_감정가_분자 = new MaskEdit('MkEdit_감정가_분자', new JsonZoonData('MkEdit_감정가_분자', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_감정가_분모 = new MaskEdit('MkEdit_감정가_분모', new JsonZoonData('MkEdit_감정가_분모', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_감정가_비율 = new MaskEdit('MkEdit_감정가_비율', new JsonZoonData('MkEdit_감정가_비율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_감정가_담보제공면적 = new MaskEdit('MkEdit_감정가_담보제공면적', new JsonZoonData('MkEdit_감정가_담보제공면적', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const MkEdit_감정가_평가가격 = new MaskEdit('MkEdit_감정가_평가가격', new JsonZoonData('MkEdit_감정가_평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
        .on({
            focusout : function() {
                if(GetString('Combo_집합건물종류') == '101'){
                    SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계'))/1000),0);
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                    SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계_평'))/1000),0);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                }else{
                    SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적'))/1000),0);
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                    SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적_평'))/1000),0);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                }
            }
        });

        const MkEdit_감정가_최종평가가격 = new MaskEdit('MkEdit_감정가_최종평가가격', new JsonZoonData('MkEdit_감정가_최종평가가격', {}),{
            isShow : true,
            isEnable : false,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
        .on({
            focusout : function() {
                if(GetString('Combo_집합건물종류') == '101'){
                    SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계'))/1000),0);
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                    SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_면적합계_평'))/1000),0);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                }else{
                    SetValue('MkEdit_시가_최저_단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적'))/1000),0);
                    SetValue('MkEdit_시가_최저_단가',GetNumber('MkEdit_시가_최저_단가')*1000);
                    SetValue('MkEdit_시가_최저_평당단가',Round((GetNumber('MkEdit_시가_최저_총액')/GetNumber('MkEdit_전유면적_평'))/1000),0);
                    SetValue('MkEdit_시가_최저_평당단가',GetNumber('MkEdit_시가_최저_평당단가')*1000);
                }
            }
        });

        const MkEdit_보정표_아파트단지규모 = new MaskEdit('MkEdit_보정표_아파트단지규모', new JsonZoonData('MkEdit_보정표_아파트단지규모', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;5;#,###1',
            maskType: '숫자'
        });

        const MkEdit_보정표_아파트단지규모_적용율 = new MaskEdit('MkEdit_보정표_아파트단지규모_적용율', new JsonZoonData('MkEdit_보정표_아파트단지규모_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: '-;1;#,###1.00',
            maskType: '숫자'
        });

        const Edit20 = new MaskEdit('Edit20', new JsonZoonData('Edit20', {}),{
            isShow : true,
            isEnable : false,
        });

        // Picture ---------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        const Picture6 = new Picture('Picture32', new JsonZoonData('Picture32', {}),{
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                showModalDialog('http://192.168.250.11:8080/jsp/es01/hnw/es01_w02_p02.hnw', {
                    년도: GetValue('년도'),
                    일련번호: GetValue('감정순번'),
                    isReadOnly: GetValue('isReadOnly'),
                }, 'width=800,height=550');
            }
        });

        const Picture32 = new Picture('Picture32', new JsonZoonData('Picture32', {}),{
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                Navigate('http://192.168.250.11:8080/jsp/es81/es81_w02.jsp',
                    {
                        yyyy: GetValue('년도'),
                        seq: GetValue('감정순번'),
                        zoom: GetValue('Y'),
                    }, 'left=0,top=0,width=790,height=750');
            }
        });

        const Picture31 = new Picture('Picture31', new JsonZoonData('Picture31', {}),{
            isShow : !(GetString('_관리부서') == 'Y'),
            isEnable : true
        })
        .on({
            click : function() {
                RunQuery('Q_탁상감정진행상황', {});
                GetZoonData('Q_탁상감정진행상황').GetRow(0, [
                    { key: 'i', value: 'STAT' },
                ]);
                // TODO: 이벤트 개발 필요
            },
        });

        const Picture58 = new Picture('Picture58', new JsonZoonData('Picture58', {}),{
            isShow : GetString('응찰_입력표활성여부') == "Y",
            isEnable : true
        })
        .on({
            click : function() {
                SetValue('팝업_주소창호출위치', '입력표')
                Navigate('http://192.168.250.11:8080/jsp/es83/es83_w02.jsp', {
                    yyyy: GetValue('년도'),
                    seq: GetValue('감정순번'),
                    zoom: 'Y',
                }, 'left=0,top=0,width=790,height=750');
            },
        });

        const Picture92 = new Picture('Picture92', new JsonZoonData('Picture92', {}),{
            isShow : GetValue('01_배당자료수정가능여부') == 'Y',
            isEnable : true
        })
        .on({
            click : function() {
                showModalDialog('http://192.168.250.11:8080/jsp/es01/hnw/es01_w02_p02.hnw', {
                    년도: GetValue('년도'),
                    일련번호: GetValue('감정순번'),
                    isReadOnly: GetValue('isReadOnly'),
                }, 'width=800,height=550');
            },
        });

        const Picture72 = new Picture('Picture72', new JsonZoonData('Picture72', {}),{
            isShow : GetValue('_사원번호') == '106790',
            isEnable : true
        })
        .on({
            click : function() {
                RunButton('Picture92');
            },
        });

        const Picture61 = new Picture('Picture61', new JsonZoonData('Picture61', {}),{
            isShow : GetString('응찰_입력표활성여부') == "Y",
            isEnable : true
        })
        .on({
            click : function() {
                RunButton('Picture92');
            },
        });

        const Picture60 = new Picture('Picture60', new JsonZoonData('Picture60', {}),{
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                if (isEmpty(GetValue('감정순번'))) {
                    MC_저장_Key만들기();
                }

                GetComponent('DBGrid_본건').FindIndexArray('m_index', (row) => {
                    return row['YYYY'] != 1111;
                });

                GetComponent('DBGrid_본건').SetRows(GetValue('m_index'), [
                    {key :'YYYY' , value: GetValue('년도')},
                    {key :'SEQ' , value: GetValue('감정순번')}
                ]);

                GetComponent('DBGrid_경매사례').FindIndexArray('m_index', (row) => {
                    return row['YYYY'] != 1111;
                });

                GetComponent('DBGrid_경매사례').SetRows(GetValue('m_index'), [
                    {key :'YYYY' , value: GetValue('년도')},
                    {key :'SEQ' , value: GetValue('감정순번')}
                ]);

                GetComponent('DBGrid_가격사례_M').FindIndexArray('m_index', (row) => {
                    return row['YYYY'] != 1111;
                });

                GetComponent('DBGrid_가격사례_M').SetRows(GetValue('m_index'), [
                    {key :'YYYY' , value: GetValue('년도')},
                    {key :'SEQ' , value: GetValue('감정순번')}
                ]);

                GetComponent('DBGrid_가격사례_D').FindIndexArray('m_index', (row) => {
                    return row['YYYY'] != 1111;
                });

                GetComponent('DBGrid_가격사례_D').SetRows(GetValue('m_index'), [
                    {key :'YYYY' , value: GetValue('년도')},
                    {key :'SEQ' , value: GetValue('감정순번')},
                    { key: 'FLAG', value: 'I'}
                ]);

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').FindIndexArray('m_index', (row) => {
                    return row['YYYY'] != 1111;
                });

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').SetRows(GetValue('m_index'), [
                    {key :'YYYY' , value: GetValue('년도')},
                    {key :'SEQ' , value: GetValue('감정순번')}
                ]);

                GetComponent('DBGrid_배당금_계산').FindIndexArray('m_index', (row) => {
                    return row['YYYY'] != 1111;
                });

                GetComponent('DBGrid_배당금_계산').SetRows(GetValue('m_index'), [
                    {key :'YYYY' , value: GetValue('년도')},
                    {key :'SEQ' , value: GetValue('감정순번')}
                ]);

                MC_저장_ValidationCheck();

                if (isNotEmpty(GetValue('저장_Error_Message'))) {
                    MsgBox(GetValue('저장_Error_Message'), "", true);
                }

                if (isEmpty(GetValue('Edit_Doc_Key'))) {
                    RunQuery('Q_영업감정요청자료', {});
                    alert('[감정요청자료 문서]가 선택되지 않았습니다.');
                    return;
                }

                if (GetString('is배당처리') == 'Y') {
                    if (!MsgBox('저장하시겠습니까?', '알림', false)) {
                        return;
                    }
                }

                MC_저장_입력표();
                MC_저장_감정가();
                MC_저장_낙찰가율보정표();

                RunQuery('저장_배당금_배당표M', {
                    'YYYY' : GetValue('Edit_KEY_년도'),
                    'SEQ' : GetValue('Edit_KEY_감정순번'),
                    'AUCTION_CODE' : GetValue('Combo_배당표_최고채권액'),
                    'AUCTION_AMT' : GetNumber('Edit_배당표_경매비용'),
                    'H_PL_BID_AMT' : GetNumber('Edit_배당표_예상낙찰가'),
                    'H_POSS_AMT' : GetValue('Edit_배당표_경락가액'),
                    'H_POSS_A_AREA' : GetValue('Combo_배당표_가임대보증금적용범위'),
                    'H_POSS_A_AMT' : GetValue('Edit_배당표_적용할주택가임대보증금액'),
                    'CRED_MAX_AMT' : GetValue('Edit_배당표_최고채권액'),
                }, 'POST');

                MC_저장_주택임대차보증금();
                MC_저장_배당금();
                MC_저장_문서관리();

                RunQuery('저장_담보마스타_담보여력등', {
                    '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                    'YYYY': GetValue('년도'),
                    'SEQ': GetValue('감정순번'),
                }, 'POST');

                RunButton('Command_응찰_91_저장');

                if (GetString('is배당처리') == 'Y') {
                    if (!MsgBox('정상적으로 저장되었습니다', '알림', false)) {
                        return;
                    }
                }    

                GetComponent('TabControl1').EnableTab(5, 1);
                GetComponent('TabControl1').EnableTab(6, 1);

                MC_공통보고서_조회();

                SetValue('is배당처리', '')
            },
        });

        const Picture4_거래처조회 = new Picture('Picture4_거래처조회', new JsonZoonData('Picture4_거래처조회', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('SubForm_거래처조회').ShowSubForm();
                },
            });

        const Picture6_탁상감정 = new Picture('Picture6_탁상감정', new JsonZoonData('Picture6_탁상감정', {}),{
            isShow : !(GetString('_관리부서') == 'Y'),
            isEnable : true
        })
            .on({
                click : function() {
                    RunQuery('Q_탁상감정진행상황', {});
                    GetZoonData('Q_탁상감정진행상황').GetRow(0, [
                        { key: 'i', value: 'STAT' },
                    ]);
                    // TODO: 이벤트 개발 필요
                },
            });

        const Picture_전감정사항비교표 = new Picture('Picture_전감정사항비교표', new JsonZoonData('Picture_전감정사항비교표', {}),{
            isShow : GetString('버튼_전감정사항비교표') == 'Y',
            isEnable : true
        })
            .on({
                click : function() {
                    Navigate('http://192.168.250.11:8080/jsp/es82/es82_w01.jsp',
                        {
                            yyyy: GetValue('년도'),
                            seq: GetValue('감정순번'),
                            zoom: GetValue('Y'),
                            pre_yyyy: GetValue('_이전년도'),
                            pre_seq: GetValue('_이전담보순번')
                        }, 'left=0,top=0,width=790,height=750');
                },
            });

        const Picture63_전감정사항비교표 = new Picture('Picture63_전감정사항비교표', new JsonZoonData('Picture63_전감정사항비교표', {}),{
            isShow : GetString('버튼_전감정사항비교표') == 'Y',
            isEnable : true
        })
            .on({
                click : function() {
                    Navigate('http://192.168.250.11:8080/jsp/es82/es82_w01.jsp',
                        {
                            yyyy: GetValue('년도'),
                            seq: GetValue('감정순번'),
                            zoom: GetValue('Y'),
                            pre_yyyy: GetValue('_이전년도'),
                            pre_seq: GetValue('_이전담보순번')
                        }, 'left=0,top=0,width=790,height=750');
                },
            });

        const Picture37_공통보고서_감정의견_의견보기 = new Picture('Picture37_공통보고서_감정의견_의견보기', new JsonZoonData('Picture37_공통보고서_감정의견_의견보기', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('URL', "es01_w02_p03.jsp?yyyy=" + GetString('년도') + "&seq=" + GetString('감정순번'));
                    showModalDialog('http://192.168.250.11:8080/jsp/es01/', GetValue('URL'), '');
                }
            });

        const Picture38_감정요청자료_영업_조회 = new Picture('Picture38_감정요청자료_영업_조회', new JsonZoonData('Picture38_감정요청자료_영업_조회', {}),{
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                console.log('te');
                RunQuery('Q_영업감정요청자료', {
                    '전체선택여부': GetValue('전체선택여부')
                }, 'GET');
                GetComponent('SubForm_감정요청자료_영업').ShowSubForm();
            }
        });

        const Picture25_배당표_주택임차보증금의계산_추가 =new Picture('Picture25_배당표_주택임차보증금의계산_추가', new JsonZoonData('Picture25_배당표_주택임차보증금의계산_추가', {}),{   
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                console.log('???????')
                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows('', [
                    { key: '배당표_주택임대차보증금_각구의일련번호_Arr', value: 'RNO' }
                ]);

                SetValue('배당표_주택임대차보증금_각구의일련번호', String(Max('배당표_주택임대차보증금_각구의일련번호_Arr') + 1));
                SetValue('배당표_주택임대차보증금_각구의위치', GetString('Edit_동수') + "-" + GetString('Edit_호수'));

                GetComponent('DBGrid_배당표_주택임대차보증금_계산').AddRow({
                    'CHECK_YN': 0,
                    'YYYY': GetValue('년도'),
                    'SEQ': GetValue('감정순번'),
                    'RNO': GetValue('배당표_주택임대차보증금_각구의일련번호'),
                    'RESI_NAME': GetValue('배당표_주택임대차보증금_각구의위치')
                });

                GetComponent('DBGrid_본건').GetRowCount('본건_RowCount');

                SetValue('본건_RowCount', GetNumber('본건_RowCount') -1);

                GetComponent('DBGrid_본건').SetCurSel(GetNumber('본건_RowCount'));

                GetComponent('DBGrid_본건').SetEditFocus(GetNumber('본건_RowCount') -1, 'b_size');
            }
        });

        const Picture26_배당표_주택임차보증금의계산_삭제 =new Picture('Picture26_배당표_주택임차보증금의계산_삭제', new JsonZoonData('Picture26_배당표_주택임차보증금의계산_삭제', {}),{   
            isShow : true,
            isEnable : true
        })
        .on({
            click : function() {
                GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurSel('배당표_주택임대차보증금_RowPosition');
                GetComponent('DBGrid_배당표_주택임대차보증금_계산').DeleteRow(GetNumber('배당표_주택임대차보증금_RowPosition'));
                MC_배당표_주택임대차보증금_계산();
            }
        });

        const Picture27_배당표_주택임차보증금의계산_플러스 = new Picture('Picture27_배당표_주택임차보증금의계산_플러스', new JsonZoonData('Picture27_배당표_주택임차보증금의계산_플러스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    if (GetString('Combo_입력표_용도') == '1') {
                        MsgBox('주택임차보증금을 추가할 수 없습니다.', '확인', true);
                        return false;
                    }

                    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetRows('', [
                        { key: '배당표_주택임대차보증금_각구의일련번호_Arr', value: 'RNO' }
                    ]);

                    SetValue('배당표_주택임대차보증금_각구의일련번호', String(Max('배당표_주택임대차보증금_각구의일련번호_Arr') + 1));
                    SetValue('배당표_주택임대차보증금_각구의위치', GetString('Edit_입력표_동수') + "-" + GetString('Edit_입력표_호수'));

                    GetComponent('DBGrid_배당표_주택임대차보증금_계산').AddRow({
                        'CHECK_YN': 0,
                        'YYYY': GetValue('년도'),
                        'SEQ': GetValue('감정순번'),
                        'RNO': GetValue('배당표_주택임대차보증금_각구의일련번호'),
                        'RESI_NAME': GetValue('배당표_주택임대차보증금_각구의위치')
                    });
                },
            });

        const Picture29_배당표_주택임차보증금의계산_마이너스 = new Picture('Picture29_배당표_주택임차보증금의계산_마이너스', new JsonZoonData('Picture29_배당표_주택임차보증금의계산_마이너스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_배당표_주택임대차보증금_계산').GetCurSel('배당표_주택임대차보증금_RowPosition');
                    GetComponent('DBGrid_배당표_주택임대차보증금_계산').DeleteRow(GetNumber('배당표_주택임대차보증금_RowPosition'));
                    MC_999_배당표_주택임대차보증금_계산();
                },
            });


        const Picture62_배당표_상가건물_임대차보증금의계산_플러스 = new Picture('Picture62_배당표_상가건물_임대차보증금의계산_플러스', new JsonZoonData('Picture62_배당표_상가건물_임대차보증금의계산_플러스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    if (GetValue('Combo_입력표_용도') != 2) {
                        MsgBox('상가건물임대차보증금을 추가할 수 없습니다.', '확인', true);
                        return false;
                    }

                    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetRows('', [
                        { key: '배당표_상가임대차보증금_각구의일련번호_Arr', value: 'RNO' }
                    ]);

                    SetValue('배당표_상가임대차보증금_각구의일련번호', String(Max('배당표_상가임대차보증금_각구의일련번호_Arr') + 1));

                    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').AddRow({
                        'CHECK_YN': 0,
                        'YYYY': GetValue('년도'),
                        'SEQ': GetValue('감정순번'),
                        'RNO': GetValue('배당표_주택임대차보증금_각구의일련번호')
                    });
                },
            });

        const Picture64_배당표_상가건물_임대차보증금의계산_마이나스 = new Picture('Picture64_배당표_상가건물_임대차보증금의계산_마이나스', new JsonZoonData('Picture62_배당표_상가건물_임대차보증금의계산_마이나스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').GetCurSel('배당표_상가_RowPosition');
                    GetComponent('DBGrid_배당표_상가건물_임대차보증금_계산').DeleteRow(GetNumber('배당표_상가_RowPosition'));
                    MC_배당표_상가건물_임대차보증금_계산();
                },
            });

        const Picture32_배당표_배당금의계산_플러스 = new Picture('Picture32_배당표_배당금의계산_플러스', new JsonZoonData('Picture32_배당표_배당금의계산_플러스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_배당금_계산').GetRows('', [
                        { key: '배당표_배당금계산_배당순위_Arr', value: 'RANK' },
                        { key: '배당표_배당금계산_표시순위_Arr', value: 'DISP_RANK' }
                    ]);

                    SetValue('배당표_배당금계산_배당순위', Max('배당표_배당금계산_배당순위_Arr') + 1);
                    SetValue('배당표_배당금계산_표시순위', Max('배당표_배당금계산_표시순위_Arr'));

                    if (GetNumber('배당표_배당금계산_표시순위') < 100) {
                        SetValue('배당표_배당금계산_표시순위', "101");
                    } else {
                        SetValue('배당표_배당금계산_표시순위', String(GetNumber('배당표_배당금계산_표시순위') + 1));
                    }

                    GetComponent('DBGrid_배당금_계산').AddRow({
                        'ERA_YN': 'N',
                        'YYYY': GetValue('년도'),
                        'SEQ': GetValue('감정순번'),
                        'DISP_RANK': GetValue('배당표_배당금계산_표시순위'),
                        'IS_ENABLE': 1
                    });
                    GetComponent('DBGrid_배당금_계산').GetRowCount('배당표_배당금계산_RowCount');

                    SetValue('배당표_배당금계산_RowCount', GetNumber('배당표_배당금계산_RowCount') - 1);

                    GetComponent('DBGrid_배당금_계산').SetCurSel(GetNumber('배당표_배당금계산_RowCount'));
                },
            });

        const Picture33_배당표_배당금의계산_마이나스 = new Picture('Picture33_배당표_배당금의계산_마이나스', new JsonZoonData('Picture33_배당표_배당금의계산_마이나스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_배당금_계산').GetRow(-1, [
                        { key: '배당표_배당금계산_표시순위', value: 'DISP_RANK' }
                    ]);

                    if (GetNumber('배당표_배당금계산_표시순위') < 100) {
                        SetValue('저장_Error_Message', "고정된 항목은 삭제하실 수 없습니다.");
                    } else {
                        SetValue('저장_Error_Message', "");
                    }

                    if (isNotEmpty(GetValue('저장_Error_Message'))) {
                        MsgBox(GetValue('저장_Error_Message'), '확인', false);
                        return false;
                    }

                    GetComponent('DBGrid_배당금_계산').GetCurSel('배당표_배당금계산_RowPosition');
                    GetComponent('DBGrid_배당금_계산').DeleteRow(GetNumber('배당표_배당금계산_RowPosition'));
                },
            });

        const Picture39_감정요청자료_영업_선택 = new Picture('Picture39_감정요청자료_영업_선택', new JsonZoonData('Picture39_감정요청자료_영업_선택', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_감정요청자료_영업').GetRow(-1, [
                        {key: 'Edit_Doc_Key', value: 'DOC_KEY'},
                        {key: 'Edit_Doc_Name', value: 'DOC_NAME'}
                    ]);

                    GetComponent('SubForm_감정요청자료_영업').HideSubForm();
                },
            });

        const Picture21_입력표_부동산의표시_소재지_검색 = new Picture('Picture21_입력표_부동산의표시_소재지_검색', new JsonZoonData('Picture21_입력표_부동산의표시_소재지_검색', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('팝업_주소창호출위치', '입력표');

                    GetComponent('SubForm_주소조회').ShowSubForm((data) => {
                    });
                },
            });

        const Picture60_유입검토보고서 = new Picture('Picture60_유입검토보고서', new JsonZoonData('Picture60_유입검토보고서', {}),{
            isShow : GetString('응찰_입력표활성여부') == "Y",
            isEnable : true
        })
            .on({
                click : function() {
                    SetValue('팝업_주소창호출위치', '입력표')
                    Navigate('http://192.168.250.11:8080/jsp/es83/es83_w02.jsp', {
                        yyyy: GetValue('년도'),
                        seq: GetValue('감정순번'),
                        zoom: 'Y',
                    }, 'left=0,top=0,width=790,height=750');
                },
            });

        const Picture65_저장 = new Picture('Picture65_저장', new JsonZoonData('Picture65_저장', {}),{
            isShow : GetValue('_사원번호') == '106790',
            isEnable : true
        })
            .on({
                click : function() {
                    if (isEmpty(GetValue('Edit_입력표_거래처'))) {
                        MsgBox("[제1차 거래처]"+"를 입력하세요.", "확인", true);
                        return;
                    }

                    if (isEmpty(GetValue('감정순번'))) {
                        MC_900_저장_Key만들기();
                    }

                    MC_990_저장_ValidationCheck();

                    if (isNotEmpty(GetValue('저장_Error_Message'))) {
                        MsgBox(GetValue('저장_Error_Message'), "", true);
                        return;
                    }

                    if (isEmpty(GetValue('Edit_Doc_Key'))) {
                        RunQuery('Q_영업감정요청자료', {});
                        alert('[감정요청자료 문서]가 선택되지 않았습니다.');
                        return;
                    }

                    if (GetString('Edit_Doc_Key') == 'Y') {
                        if (!MsgBox('저장하시겠습니까?', '알림', false)) {
                            return;
                        }
                    }

                    MC_901_저장_그리드_키값();
                    MC_910_저장_입력표();
                    MC_912_저장_문서관리();

                    RunQuery('저장_배당금_배당표M', {
                        'YYYY' : GetValue('Edit_KEY_년도'),
                        'SEQ' : GetValue('Edit_KEY_감정순번'),
                        'AUCTION_CODE' : GetValue('Combo_배당표_최고채권액'),
                        'AUCTION_AMT' : GetNumber('Edit_배당표_경매비용'),
                        'H_PL_BID_AMT' : GetNumber('Edit_배당표_예상낙찰가'),
                        'H_POSS_AMT' : GetValue('Edit_배당표_경락가액'),
                        'H_POSS_A_AREA' : GetValue('Combo_배당표_가임대보증금적용범위'),
                        'H_POSS_A_AMT' : GetValue('Edit_배당표_적용할주택가임대보증금액'),
                        'CRED_MAX_AMT' : GetValue('Edit_배당표_최고채권액'),
                        'B_PL_BID_AMT' : GetValue('Edit_배당표_상가_예상낙찰가'),
                        'B_POSS_AMT' : GetValue('Edit_배당표_상가_경락가액'),
                        'B_POSS_A_AREA' : GetValue('Combo_배당표_상가_가임대보증금_적용범위'),
                        'B_POSS_A_AMT' : GetValue('Edit_배당표_적용할상가가임대보증금액'),
                    }, 'POST');

                    MC_저장_상가임차보증금();
                    MC_999_저장_배당금();

                    RunQuery('저장_담보마스타_담보여력등', {
                        '02_배당표수정여부' : GetValue('02_배당표수정여부'),
                        'YYYY': GetValue('년도'),
                        'SEQ': GetValue('감정순번'),
                    }, 'POST');
                    RunButton('Command_응찰_91_저장');
                    MC_002_초기화_Query_Loading();

                    GetComponent('TabControl1').EnableTab(8, 1);
                    GetComponent('TabControl1').EnableTab(9, 1);

                    MC_공통보고서_조회();

                    SetValue('is배당처리', '')
                }
            });

        const Picture66_배당처리 = new Picture('Picture66_배당처리', new JsonZoonData('Picture66_배당처리', {}),{
            isShow : GetValue('_사원번호') == '106790',
            isEnable : true
        })
            .on({
                click : function() {
                    RunButton('Command_배당처리');
                }
            });

        const Picture35_배당집계표 = new Picture('Picture35_배당집계표', new JsonZoonData('Picture35_배당집계표', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    // TODO: 이벤트 추가 필요
                }
            });

        const Picture7_출력 = new Picture('Picture7_출력', new JsonZoonData('Picture7_출력', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    Navigate('http://192.168.250.11:8080/jsp/es81/es81_w02.jsp',
                        {
                            yyyy: GetValue('년도'),
                            seq: GetValue('감정순번'),
                            zoom: GetValue('Y'),
                        }, 'left=0,top=0,width=790,height=750');
                }
            });

        const Picture72_배당자료수정 = new Picture('Picture72_배당자료수정', new JsonZoonData('Picture72_배당자료수정', {}),{
            isShow : GetValue('_사원번호') == '106790',
            isEnable : true
        })
            .on({
                click : function() {
                    RunButton('Picture92_배당자료수정');
                }
            });

        const Picture92_배당자료수정 = new Picture('Picture92_배당자료수정', new JsonZoonData('Picture92_배당자료수정', {}),{
            isShow : GetValue('01_배당자료수정가능여부') == 'Y',
            isEnable : true
        })
            .on({
                click : function() {
                    showModalDialog('http://192.168.250.11:8080/jsp/es01/hnw/es01_w02_p02.hnw', {
                        년도: GetValue('년도'),
                        일련번호: GetValue('감정순번'),
                        isReadOnly: GetValue('isReadOnly'),
                    }, 'width=800,height=550');
                }
            });

        const Picture52_응찰입력표_선순위권리내역_플러스 = new Picture('Picture52_응찰입력표_선순위권리내역_플러스', new JsonZoonData('Picture52_응찰입력표_선순위권리내역_플러스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    EmptyArray('01_응찰_숫자배열변수3');

                    GetComponent('DBGrid_응찰_권리내역').GetRows('', [
                        { key: '01_응찰_숫자배열변수3', value: '순번'},
                    ])

                    if (isEmpty(GetValue('01_응찰_숫자배열변수3'))) {
                        SetArray('01_응찰_숫자배열변수3',0,0);
                    }

                    SetValue('응찰_변수_숫자1', Max('01_응찰_숫자배열변수3')+1);

                    GetComponent('DBGrid_응찰_권리내역').AddRow({
                        '년도' : GetValue('년도'),
                        '일련번호' : GetValue('감정순번'),
                        '순번' : GetValue('응찰_변수_숫자1')
                    });

                    GetComponent('DBGrid_응찰_권리내역').GetRowCount('응찰_변수_숫자1');

                    SetValue('응찰_변수_숫자1', GetNumber('응찰_변수_숫자1')-1);

                    GetComponent('DBGrid_응찰_권리내역').SetCurSel(GetNumber('응찰_변수_숫자1'));
                    GetComponent('DBGrid_응찰_권리내역').SetEditFocus(GetNumber('응찰_변수_숫자1')-1, '금액');
                },
            });

        const Picture53_응찰입력표_선순위권리내역_마이너스 = new Picture('Picture53_응찰입력표_선순위권리내역_마이너스', new JsonZoonData('Picture53_응찰입력표_선순위권리내역_마이너스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_응찰_권리내역').GetCurSel('응찰_변수_숫자2');
                    GetComponent('DBGrid_응찰_권리내역').DeleteRow(GetNumber('응찰_변수_숫자2'));
                },
            });

        const Picture55_응찰입력표_선순위부담금액_플러스 = new Picture('Picture55_응찰입력표_선순위부담금액_플러스', new JsonZoonData('Picture55_응찰입력표_선순위부담금액_플러스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    EmptyArray('01_응찰_숫자배열변수3');

                    GetComponent('DBGrid_응찰_부담내역').GetRows('', [
                        { key: '01_응찰_숫자배열변수3', value: '순번'},
                    ])

                    if (isEmpty(GetValue('01_응찰_숫자배열변수3'))) {
                        SetArray('01_응찰_숫자배열변수3',0,0);
                    }

                    SetValue('응찰_변수_숫자1', Max('01_응찰_숫자배열변수3')+1);

                    GetComponent('DBGrid_응찰_부담내역').AddRow({
                        '년도' : GetValue('년도'),
                        '일련번호' : GetValue('감정순번'),
                        '순번' : GetValue('응찰_변수_숫자1')
                    });

                    GetComponent('DBGrid_응찰_부담내역').GetRowCount('응찰_변수_숫자1');

                    SetValue('응찰_변수_숫자1', GetNumber('응찰_변수_숫자1')-1);

                    GetComponent('DBGrid_응찰_부담내역').SetCurSel(GetNumber('응찰_변수_숫자1'));
                    GetComponent('DBGrid_응찰_부담내역').SetEditFocus(GetNumber('응찰_변수_숫자1')-1, '금액');

                },
            });

        const Picture54_응찰입력표_선순위부담금액_마이너스 = new Picture('Picture54_응찰입력표_선순위부담금액_마이너스', new JsonZoonData('Picture54_응찰입력표_선순위부담금액_마이너스', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    GetComponent('DBGrid_응찰_부담내역').GetCurSel('응찰_변수_숫자2');
                    GetComponent('DBGrid_응찰_부담내역').DeleteRow(GetNumber('응찰_변수_숫자2'));
                },
            });

        const RichEditor_탁상감정 = new RichEditor('RichEditor_탁상감정', new JsonZoonData('RichEditor_탁상감정', {}),{
            isShow : true,
            isEnable : true
        });

        // SubForm ---------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------

        const SubForm1 = new SubForm('SubForm1', new JsonZoonData('SubForm1', {}), '', {
            isShow : false,
            isEnable : true
        });


        let SubForm_감정요청자료_영업_URL;
        switch(componentsMap.get('page')) {
            case PageType.집합_아파트:
                SubForm_감정요청자료_영업_URL = '/view/es01/w02/appraisal';
                break;
            case PageType.집합_상업용:
                SubForm_감정요청자료_영업_URL = '/view/es01/w02/3/appraisal';
                break;
            case PageType.집합_오피스텔:
                SubForm_감정요청자료_영업_URL = '/view/es01/w02/4/appraisal';
                break;
            default:
                SubForm_감정요청자료_영업_URL = '/view/es01/w02/4/appraisal';
        }
        const SubForm_감정요청자료_영업 = new SubForm('SubForm_감정요청자료_영업', new JsonZoonData('SubForm_감정요청자료_영업', {}),
            SubForm_감정요청자료_영업_URL,{
                isShow : true,
                isEnable : true
            });


        let SubForm_거래처조회_URL;
        switch(componentsMap.get('page')) {
            case PageType.집합_아파트:
                SubForm_거래처조회_URL = '/view/es01/w02/account';
                break;
            case PageType.집합_상업용:
                SubForm_거래처조회_URL = '/view/es01/w02/3/account';
                break;
            case PageType.집합_오피스텔:
                SubForm_거래처조회_URL = '/view/es01/w02/4/account';
                break;
            default:
                SubForm_거래처조회_URL = '/view/es01/w02/4/account';
        }
        const SubForm_거래처조회 = new SubForm('SubForm_거래처조회', new JsonZoonData('SubForm_거래처조회', {}),
            SubForm_거래처조회_URL
            , {
                isShow : true,
                isEnable : true
            });

        const SubForm_주소조회 = new KaKaoSubForm('SubForm_주소조회', new JsonZoonData('SubForm_주소조회', {}), {
            oncomplete: function(data) {
                SetValue('팝업_전체주소', data.address);

                if (GetString('팝업_주소창호출위치') == "입력표") {
                    if(match(PageType.집합_아파트)){
                        SetValue('Edit_읍면동', GetString('팝업_전체주소'));
                        SetValue('Edit_소재지', GetString('팝업_전체주소'));
                    }else{
                        SetValue('Edit_입력표_소재지1', GetString('팝업_전체주소'));
                    }
                } else if (GetString('팝업_주소창호출위치') == "감정가_가격사례") {
                    SetValue('감정가_가격_소재지', GetString('팝업_전체주소') + " ");
                } else if (GetString('팝업_주소창호출위치') == "감정가_경매사례") {
                    SetValue('감정가_경매_소재지', GetString('팝업_전체주소') + " ");
                } else if (GetString('팝업_주소창호출위치') == "감정가_임대사례") {
                    // TODO : 집합 상업용에서 사용
                    SetValue('감정가_임대_소재지', GetString('팝업_전체주소') + " ");
                } else if (GetString('팝업_주소창호출위치') == "가격사례_M") {
                    SetValue('감정가_임대_소재지', GetString('팝업_전체주소') + " ");
                }

                GetComponent('SubForm_주소조회').HideSubForm();

                if (match(PageType.집합_상업용)) {
                    SetValue('팝업_주소창호출위치', '');
                    SetValue('팝업_전체주소', '');
                }
            }
        });

        const SubForm_파일업로드 = new FileUploadSubForm('SubForm_파일업로드', new JsonZoonData('SubForm_파일업로드', {}), {});
        const SubForm1_버튼활성화여부 = new SubForm('SubForm1_버튼활성화여부', new JsonZoonData('SubForm1_버튼활성화여부', {}),
            '', {
                isShow : false,
                isEnable : true
            });

        // Tab ----------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        // new Tab('IDX_TabControl', new ZoonData('IDX_TabControl', {}),{
        //         isShow : true,
        //         isEnable : true
        //     })
        //     .on({
        //         change : function() {
        //             GetComponent('TabControl1').GetCurSel();

        //         }
        //     })

        const TabControl1 = new Tab('TabControl1', new JsonZoonData('TabControl1', {}),{
            isShow : true,
            isEnable : true
        })
            .on('click', '.nav-item a.nav-link', function(e) {
                if ($(e.target).attr('disabled') == 'disabled') {
                    return false;
                }

                GetComponent('TabControl1').GetCurSel('IDX_TabControl');
                // TODO : 페이지별 확인필요
                if (match(PageType.집합_상업용)) {
                    switch (GetNumber('IDX_TabControl')) {
                        case 1:
                            MC_203_감정가액산출1_페이지호출();
                            MC_204_DBGrid_본건사례_기본값셋팅();
                            break;
                        case 2:
                            MC_300_초기화_비준가격_항목();
                            break;
                        case 3:
                            MC_320_수익가격_초기화_0();
                            break;
                        case 4:
                            MC_401_평가액_최고최저_0();
                            break;
                        default:
                            console.log('Error');
                    }
                } else if (match(PageType.집합_오피스텔)) {
                    switch (GetNumber('IDX_TabControl')) {
                        case 0:
                            MC_203_감정가액산출1_페이지호출();
                            break;
                        case 1:
                            MC_203_감정가액산출1_페이지호출();
                            break;
                        case 2:
                            MC_300_초기화_비준가격_항목();
                            break;
                        case 3:
                            MC_401_평가액_최고최저_0();
                            break;
                        default:
                            console.log('Error');
                    }
                }
            });

        const Picture38_담보건물명 = new Picture('Picture38_담보건물명', new JsonZoonData('Picture38_담보건물명', {}),{
            isShow : true,
            isEnable : true
        })
            .on({
                click : function() {
                    RunQuery('Q_영업감정요청자료', {
                        '전체선택여부': GetValue('전체선택여부')
                    }, 'GET');

                    GetComponent('SubForm_감정요청자료_영업').ShowSubForm();
                }
            });

        // Tree ----------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        const Q_공통보고서_트리 = new JsonZoonData('Q_공통보고서_트리', {});
        const TreeView1_공통보고서_감정의견 = new TreeView('TreeView1_공통보고서_감정의견', Q_공통보고서_트리,{
            isShow : true,
            isEnable : true,
            bind: [
                { value: 'LEVEL1', key: 'CD_LEVEL1' },
                { value: 'LEVEL2', key: 'CD_LEVEL2' },
                { value: 'LEVEL3', key: 'CD_LEVEL3' },
                { value: 'LEVEL4', key: 'CD_LEVEL4' },
                { value: 'LEVEL5', key: 'CD_LEVEL5' }
            ]
        })
            .on({
                click: function() {
                    return;
                    // BreakMacro
                },
                dblclick: function() {
                    GetZoonData('Q_공통보고서_트리').FindIndex('Combo_Idx', (row) => {
                        return row['CD_CODE'] == GetString('TreeView1');
                    });
                    GetZoonData('Q_공통보고서_트리').GetRow(GetNumber('Combo_Idx'), [
                        { key: '공통보고서_제목', value: 'CD_DESC'}
                    ]);

                    SetValue('URL',
                        "es01_w02_p00.jsp?yyyy=" + GetString('년도') +
                        "&seq=" + GetString('감정순번') +
                        "&repo_div=" + GetString('TreeView1') +
                        "&repo_title=" + GetString('공통보고서_제목'));


                    GetComponent('TreeView1_공통보고서_감정의견').HasChildren('공통보고서_트리');

                    if (GetNumber('공통보고서_트리') == 1) {
                        return;
                    }

                    showModalDialog('http://192.168.250.11:8080/jsp/es01/', {},
                        'width=850,height=523');
                }
            });

        // Etc ----------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        const 버튼_전감정사항비교표 = new Edit('버튼_전감정사항비교표', new JsonZoonData('버튼_전감정사항비교표', {}),{
            isShow : match(PageType.집합_상업용),
            isEnable : true
        });

        const 본건_Combo_도로조건 = new Combo('본건_Combo_도로조건', Q_00_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    SetValue('Combo_입지특성_도로조건', GetValue('Combo_입력표_도로조건'));

                    GetZoonData('Q_00_도로조건').FindIndex('IDX_입력표_도로조건', (row) => {
                        return row['CD_CODE'] == GetString('Combo_입력표_도로조건');
                    });
                    GetZoonData('Q_00_도로조건').GetRow(GetNumber('IDX_입력표_도로조건'), [
                        { key: 'MkEdit_입력표_도로조건지수', value: 'IDX'}
                    ]);
                }
            });

        let Q_00_용도지역 = new JsonZoonData('Q_00_용도지역', {})
        const 본건_Combo_용도지역 = new Combo('본건_Combo_용도지역', Q_00_용도지역,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetComponent('DBGrid_본건사례').SetRows(GetValue('00_본건사례배열변수'), [
                        { key: '용도지역', value: GetValue('본건_Combo_용도지역') }
                    ]);
                }
            });

        const 본건_Combo_위치 = new Combo('본건_Combo_위치', Q_00_위치별,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_위치별').FindIndex('IDX_입력표_위치', (row) => {
                        return row['CD_CODE'] == GetString('Combo_입력표_위치');
                    });
                    GetZoonData('Q_00_위치별').GetRow(GetNumber('IDX_입력표_위치'), [
                        { key: 'MkEdit_입력표_위치지수', value: 'IDX'}
                    ]);
                }
            });

        const 본건_Combo_접근조건 = new Combo('본건_Combo_접근조건', Q_00_접근조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_접근조건').FindIndex('IDX_입력표_접근조건', (row) => {
                        return row['CD_CODE'] == GetString('Combo_입력표_접근조건');
                    });
                    GetZoonData('Q_00_접근조건').GetRow(GetNumber('IDX_입력표_접근조건'), [
                        { key: 'MkEdit_입력표_접근조건지수', value: 'IDX'}
                    ]);
                }
            });

        const 본건_Formula_건축년도 = new CalcEdit('본건_Formula_건축년도', ['MkEdit_입력표_건축일자'], new FunctionZoonData('본건_Formula_건축년도', () => {
            return { value: Left(GetString('MkEdit_입력표_건축일자'), 4) };
        }),{
            isShow : true,
            isEnable : false
        });

        const 본건_Formula_경과년도 =
            new CalcEdit('본건_Formula_경과년도'
                , ['MkEdit_입력표_건축년도_경과']
                , new FunctionZoonData('본건_Formula_경과년도'
                    , () => {
                        return { value: GetNumber('MkEdit_입력표_건축년도_경과') };
                    }),{
                    isShow : true,
                    isEnable : false,
                    format : {
                        접두_기호 : '',
                        접미_기호 : '',
                        양수_기호 : '',
                        음수_기호 : '-',
                        제로_기호 : '',
                        Null_기호 : '',
                        제로값은_제로_기호로: false,
                        소수점_앞자리_제로값: true,
                        소수점_이하값_표시: true,
                        소수점_자리: '1',
                        천자리_기호_표시: false
                    }
                });

        const 본건_Formula_내용년수 = new CalcEdit('본건_Formula_내용년수', ['MkEdit_입력표_내용연수'], new FunctionZoonData('본건_Formula_내용년수'
            , () => {
                return { value: GetString('MkEdit_입력표_내용연수') };
            }),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: false
            }
        });

        const 수익_Combo_도로_본건 = new Combo('수익_Combo_도로_본건', Q_00_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const 수익_Combo_도로_사례 = new Combo('수익_Combo_도로_사례', Q_00_도로조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const Q_DUAL_수익_사례구분 = new JsonZoonData('Q_DUAL_수익_사례구분', {});
        const 수익_Combo_사례구분 = new Combo('수익_Combo_사례구분', Q_DUAL_수익_사례구분,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    RunButton('Command_수익_사례번호생성');
                }
            });

        // TODO: 사용자 정의 콤보. 확인필요
        const 수익_Combo_사례번호 = new Combo('수익_Combo_사례번호', new JsonZoonData('수익_Combo_사례번호', {}),{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    MC_322_수익가격_Change_1_본건();

                    GetComponent('수익_Combo_사례번호').GetWindowText('감정가_수익_사례번호명');
                }
            });

        const 수익_Combo_위치_본건 = new Combo('수익_Combo_위치_본건', Q_00_위치별,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const 수익_Combo_위치_사례 = new Combo('수익_Combo_위치_사례', Q_00_위치별,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const 수익_Combo_접근_본건 = new Combo('수익_Combo_접근_본건', Q_00_접근조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const 수익_Combo_접근_사례 = new Combo('수익_Combo_접근_사례', Q_00_접근조건,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        });

        const 수익_Combo_층별_본건 = new Combo('수익_Combo_층별_본건', Q_00_층별비교,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_층별비교').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('수익_Combo_층별_본건');
                    });
                    GetZoonData('Q_00_층별비교').GetRow(GetNumber('00_RowIndex'), [
                        { key: '수익_MKEdit_층별_본건지수', value: 'IDX'}
                    ]);

                    if ((GetNumber('수익_MKEdit_층별_본건지수') == 0)
                        || (GetNumber('수익_MKEdit_층별_사례지수') == 0)) {
                        SetValue('수익_MKEdit_층별_비교지수', 1);
                    } else {
                        SetValue('수익_MKEdit_층별_비교지수', Round(GetNumber('수익_MKEdit_층별_본건지수') / GetNumber('수익_MKEdit_층별_사례지수'), 2))
                    }

                    RunButton('Command_수익_합계계산');
                }
            });

        const 수익_Combo_층별_사례 = new Combo('수익_Combo_층별_사례', Q_00_층별비교,{
            isShow : true,
            isEnable : false,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change: function() {
                    GetZoonData('Q_00_층별비교').FindIndex('00_RowIndex', (row) => {
                        return row['CD_CODE'] == GetString('수익_Combo_층별_사례');
                    });
                    GetZoonData('Q_00_층별비교').GetRow(GetNumber('00_RowIndex'), [
                        { key: '수익_MKEdit_층별_사례지수', value: 'IDX'}
                    ]);

                    if ((GetNumber('수익_MKEdit_층별_본건지수') == 0)
                        || (GetNumber('수익_MKEdit_층별_사례지수') == 0)) {
                        SetValue('수익_MKEdit_층별_비교지수', 1);
                    } else {
                        SetValue('수익_MKEdit_층별_비교지수', Round(GetNumber('수익_MKEdit_층별_본건지수') / GetNumber('수익_MKEdit_층별_사례지수'), 2));
                    }

                    RunButton('Command_수익_합계계산');
                }
            });

        const 수익_Edit_기타_본건 = new Edit('수익_Edit_기타_본건', new JsonZoonData('수익_Edit_기타_본건', {}),{
            isShow : true,
            isEnable : false
        });

        const 수익_Edit_기타_사례 = new Edit('수익_Edit_기타_사례', new JsonZoonData('수익_Edit_기타_사례', {}),{
            isShow : true,
            isEnable : true
        });

        const 수익_Edit_소재지_본건 = new Edit('수익_Edit_소재지_본건', new JsonZoonData('수익_Edit_소재지_본건', {}),{
            isShow : true,
            isEnable : false
        });

        const 수익_Edit_소재지_사례 = new Edit('수익_Edit_소재지_사례', new JsonZoonData('수익_Edit_소재지_사례', {}),{
            isShow : true,
            isEnable : false
        });

        const 수익_MKEdit_기타_본건지수 = new MaskEdit('수익_MKEdit_기타_본건지수', new JsonZoonData('수익_MKEdit_기타_본건지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_기타_비교지수 = new MaskEdit('수익_MKEdit_기타_비교지수', new JsonZoonData('수익_MKEdit_기타_비교지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_기타_사례지수 = new MaskEdit('수익_MKEdit_기타_사례지수', new JsonZoonData('수익_MKEdit_기타_사례지수', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    RunButton('Command_수익_합계계산');
                }
            });

        const 수익_MKEdit_단위당연간임대료_사례 = new MaskEdit('수익_MKEdit_단위당연간임대료_사례', new JsonZoonData('수익_MKEdit_단위당연간임대료_사례', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1',
            maskType: '숫자'
        });

        const 수익_MKEdit_도로_비교지수 = new MaskEdit('수익_MKEdit_도로_비교지수', new JsonZoonData('수익_MKEdit_도로_비교지수', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function () {
                    RunButton('Command_수입_합계계산');
                }
            });

        const 수익_MKEdit_소재지_비교 = new MaskEdit('수익_MKEdit_소재지_비교', new JsonZoonData('수익_MKEdit_소재지_비교', {}),{
            isShow : true,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function () {
                    RunButton('Command_수입_합계계산');
                }
            });

        const 수익_MKEdit_수익단가 = new MaskEdit('수익_MKEdit_수익단가', new JsonZoonData('수익_MKEdit_수익단가', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function () {
                    RunButton('Command_수입_합계계산');
                }
            });

        const 수익_MkEdit_시점_본건_일자 = new MaskEdit('수익_MkEdit_시점_본건_일자', new JsonZoonData('수익_MkEdit_시점_본건_일자', {}),{
            isShow : true,
            isEnable : false,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                focusout: function () {
                    if (GetString('수익_MkEdit_시점_본건_일자') == '00000000') {
                        SetValue('수익_Label_시점_본건_경과일', '');
                    } else {
                        SetValue('10_경과년도_변수일자', GetValue('수익_MkEdit_시점_본건_일자'));
                        RunButton('Command_경과일수');
                        SetValue('수익_Label_시점_본건_경과일', GetValue('10_경과일수_쿼리리턴값'));
                        SetValue('10_경과일수_쿼리리턴값', '');
                    }
                }
            });

        const 수익_MkEdit_시점_본건_적용율 = new MaskEdit('수익_MkEdit_시점_본건_적용율', new JsonZoonData('수익_MkEdit_시점_본건_적용율', {}),{
            isShow : true,
            isEnable : false,
            mask: ';1;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout: function () {
                    RunButton('Command_수익_합계계산');
                }
            });

        const 수익_MkEdit_시점_비교 = new Edit('수익_MkEdit_시점_비교', new JsonZoonData('수익_MkEdit_시점_비교', { value: GetValue('MkEdit_비준_가격_사례_적용율') }),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: false,
                소수점_이하값_표시: false,
                소수점_자리: '1.000',
                천자리_기호_표시: true
            }
        })
            .on({
                focusout: function () {
                    RunButton('Command_수익_합계계산');
                }
            });

        const 수익_MkEdit_시점_사례_일자 = new MaskEdit('수익_MkEdit_시점_사례_일자', new JsonZoonData('수익_MkEdit_시점_사례_일자', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        })
            .on({
                focusout: function () {
                    if (GetString('수익_MkEdit_시점_사례_일자') == '00000000') {
                        SetValue('수익_Label_시점_사례_경과일', '');
                    } else {
                        SetValue('10_경과년도_변수일자', GetValue('수익_MkEdit_시점_사례_일자'));
                        RunButton('Command_경과일수');
                        SetValue('수익_Label_시점_사례_경과일', GetValue('10_경과일수_쿼리리턴값'));
                        SetValue('10_경과일수_쿼리리턴값', '');
                    }
                }
            });

        const 수익_MkEdit_시점_사례_적용율 = new MaskEdit('수익_MkEdit_시점_사례_적용율', new JsonZoonData('수익_MkEdit_시점_사례_적용율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';1;#,###1.000',
            maskType: '숫자'
        })
            .on({
                focusout: function () {
                    RunButton('Command_수익_합계계산');
                }
            });

        const 수익_MKEdit_연간임대료 = new MaskEdit('수익_MKEdit_연간임대료', new JsonZoonData('수익_MKEdit_연간임대료', {}),{
            isShow : false,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function () {
                    RunButton('Command_수익_합계계산');
                }
            });

        const 수익_MKEdit_요인합계 = new MaskEdit('수익_MKEdit_요인합계', new JsonZoonData('수익_MKEdit_요인합계', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_위치_본건지수 = new MaskEdit('수익_MKEdit_위치_본건지수', new JsonZoonData('수익_MKEdit_위치_본건지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_위치_비교지수 = new MaskEdit('수익_MKEdit_위치_비교지수', new JsonZoonData('수익_MKEdit_위치_비교지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_위치_사례지수 = new MaskEdit('수익_MKEdit_위치_사례지수', new JsonZoonData('수익_MKEdit_위치_사례지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_잔가율_본건 = new MaskEdit('수익_MKEdit_잔가율_본건', new JsonZoonData('수익_MKEdit_잔가율_본건', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_잔가율_비교 = new MaskEdit('수익_MKEdit_잔가율_비교', new JsonZoonData('수익_MKEdit_잔가율_비교', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_잔가율_사례 = new MaskEdit('수익_MKEdit_잔가율_사례', new JsonZoonData('수익_MKEdit_잔가율_사례', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_적용단위당임료 = new MaskEdit('수익_MKEdit_적용단위당임료', new JsonZoonData('수익_MKEdit_적용단위당임료', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1',
            maskType: '숫자'
        });

        const 수익_MKEdit_전용면적 = new MaskEdit('수익_MKEdit_전용면적', new JsonZoonData('수익_MKEdit_전용면적', {}),{
            isShow : false,
            isEnable : true,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_접근_본건지수 = new MaskEdit('수익_MKEdit_접근_본건지수', new JsonZoonData('수익_MKEdit_접근_본건지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_접근_비교지수 = new MaskEdit('수익_MKEdit_접근_비교지수', new JsonZoonData('수익_MKEdit_접근_비교지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_접근_사례지수 = new MaskEdit('수익_MKEdit_접근_사례지수', new JsonZoonData('수익_MKEdit_접근_사례지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_층별_본건지수 = new MaskEdit('수익_MKEdit_층별_본건지수', new JsonZoonData('수익_MKEdit_층별_본건지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_층별_비교지수 = new MaskEdit('수익_MKEdit_층별_비교지수', new JsonZoonData('수익_MKEdit_층별_비교지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_층별_사례지수 = new MaskEdit('수익_MKEdit_층별_사례지수', new JsonZoonData('수익_MKEdit_층별_사례지수', {}),{
            isShow : true,
            isEnable : false,
            mask: ';7;#,###1.00',
            maskType: '숫자'
        });

        const 수익_MKEdit_환산금액 = new MaskEdit('수익_MKEdit_환산금액', new JsonZoonData('수익_MKEdit_환산금액', {}),{
            isShow : false,
            isEnable : false,
            mask: ';7;#,###1',
            maskType: '숫자'
        });

        const 수익_MKEdit_환원이율 = new Edit('수익_MKEdit_환원이율', new JsonZoonData('수익_MKEdit_환원이율', { value: 8 }),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '%',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_개요_본사_1차결재 = new Edit('응찰_개요_본사_1차결재', new JsonZoonData('응찰_개요_본사_1차결재', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_본사_2차결재 = new Edit('응찰_개요_본사_2차결재', new JsonZoonData('응찰_개요_본사_2차결재', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_본사_3차결재 = new Edit('응찰_개요_본사_3차결재', new JsonZoonData('응찰_개요_본사_3차결재', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_본사_감정일 = new MaskEdit('응찰_개요_본사_감정일', new JsonZoonData('응찰_개요_본사_감정일', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        });

        const 응찰_개요_본사_관재파트장 = new Edit('응찰_개요_본사_관재파트장', new JsonZoonData('응찰_개요_본사_관재파트장', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_본사_담보여력 = new MaskEdit('응찰_개요_본사_담보여력', new JsonZoonData('응찰_개요_본사_담보여력', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 응찰_개요_본사_당사순위및등기 = new Edit('응찰_개요_본사_당사순위및등기', new JsonZoonData('응찰_개요_본사_당사순위및등기', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_본사_당사채권금액 = new MaskEdit('응찰_개요_본사_당사채권금액', new JsonZoonData('응찰_개요_본사_당사채권금액', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 응찰_개요_본사_예상낙찰가 = new MaskEdit('응찰_개요_본사_예상낙찰가', new JsonZoonData('응찰_개요_본사_예상낙찰가', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    if (match(PageType.집합_상업용)) {
                        MC_101_감정에관한사항_계산_실거래가격();
                    }
                }
            });

        const 응찰_개요_본사_예상낙찰가율 = new MaskEdit('응찰_개요_본사_예상낙찰가율', new JsonZoonData('응찰_개요_본사_예상낙찰가율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    RunButton('Command_전감정_본사_예상낙찰가계산');
                }
            });

        const 응찰_개요_본사_제1차예상낙찰가 = new MaskEdit('응찰_개요_본사_제1차예상낙찰가', new JsonZoonData('응찰_개요_본사_제1차예상낙찰가', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    RunButton('Command_전감정_본사_예상낙찰가계산');
                }
            });

        const 응찰_개요_본사_팀장 = new Edit('응찰_개요_본사_팀장', new JsonZoonData('응찰_개요_본사_팀장', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_지점_감정일 = new MaskEdit('응찰_개요_지점_감정일', new JsonZoonData('응찰_개요_지점_감정일', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        });

        const 응찰_개요_지점_담당자 = new MaskEdit('응찰_개요_지점_담당자', new JsonZoonData('응찰_개요_지점_담당자', {}),{
            isShow : true,
            isEnable : true,
            mask: 'yyyy-mm-dd',
            maskType: '날짜'
        });

        const 응찰_개요_지점_담보여력 = new MaskEdit('응찰_개요_지점_담보여력', new JsonZoonData('응찰_개요_지점_담보여력', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 응찰_개요_지점_당사순위및등기 = new Edit('응찰_개요_지점_당사순위및등기', new JsonZoonData('응찰_개요_지점_당사순위및등기', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_지점_당사채권금액 = new MaskEdit('응찰_개요_지점_당사채권금액', new JsonZoonData('응찰_개요_지점_당사채권금액', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 응찰_개요_지점_예상낙찰가 = new MaskEdit('응찰_개요_지점_예상낙찰가', new JsonZoonData('응찰_개요_지점_예상낙찰가', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        });

        const 응찰_개요_지점_예상낙찰가율 = new MaskEdit('응찰_개요_지점_예상낙찰가율', new JsonZoonData('응찰_개요_지점_예상낙찰가율', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1.00',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    RunButton('Command_전감정_지점_예상낙찰가계산');
                }
            });

        const 응찰_개요_지점_제1차예상낙찰가 = new MaskEdit('응찰_개요_지점_제1차예상낙찰가', new JsonZoonData('응찰_개요_지점_제1차예상낙찰가', {}),{
            isShow : true,
            isEnable : true,
            mask: ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                focusout: function() {
                    RunButton('Command_전감정_지점_예상낙찰가계산');
                }
            });

        const 응찰_개요_지점_지점장 = new Edit('응찰_개요_지점_지점장', new JsonZoonData('응찰_개요_지점_지점장', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_지점_팀장 = new Edit('응찰_개요_지점_팀장', new JsonZoonData('응찰_개요_지점_팀장', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_개요_지점_파트장 = new Edit('응찰_개요_지점_파트장', new JsonZoonData('응찰_개요_지점_파트장', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_경매_Formula_기일내역_Row = new CalcEdit('응찰_경매_Formula_기일내역_Row', [], new JsonZoonData('응찰_경매_Formula_기일내역_Row', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: false
            }
        });


        const 응찰_경매_Formula_기일내역_TNUM = new CalcEdit('응찰_경매_Formula_기일내역_TNUM', [], new JsonZoonData('응찰_경매_Formula_기일내역_TNUM', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_내용_건물_금액 = new MaskEdit('응찰_내용_건물_금액', new JsonZoonData('응찰_내용_건물_금액', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1',
            maskType: '숫자'
        })
            .on({
                change : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_내용_건물_단가 = new CalcEdit('응찰_내용_건물_단가', ['응찰_내용_건물_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_건물_단가'
            , () => {
                return { value: Round(Round(GetNumber('응찰_내용_건물_금액') / GetNumber('MkEdit_입력표_전유면적'),0) / 1000, 0) * 1000 };
            }),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_내용_건물_단가_평당 = new CalcEdit('응찰_내용_건물_단가_평당', ['응찰_내용_건물_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_건물_단가_평당'
            , () => {
                return { value: Round(Round(GetNumber('응찰_내용_건물_금액') / (GetNumber('MkEdit_입력표_전유면적') * 0.3025),0) / 1000, 0) * 1000 };
            }),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_내용_법원감정가합계 = new CalcEdit('응찰_내용_법원감정가합계', [], new JsonZoonData('응찰_내용_법원감정가합계', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_내용_입찰예정가_금액 = new CalcEdit('응찰_내용_입찰예정가_금액', [], new JsonZoonData('응찰_내용_입찰예정가_금액', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_내용_입찰예정가_낙찰가율 = new CalcEdit('응찰_내용_입찰예정가_낙찰가율', [], new JsonZoonData('응찰_내용_입찰예정가_낙찰가율', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: false,
                소수점_이하값_표시: false,
                소수점_자리: '1.00',
                천자리_기호_표시: true
            }
        });

        const 응찰_내용_토지_금액 = new Edit('응찰_내용_토지_금액', new JsonZoonData('응찰_내용_토지_금액', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                change : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });

        const 응찰_내용_토지_단가 = new CalcEdit('응찰_내용_토지_단가', ['응찰_내용_토지_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_토지_단가', () => {
            return {
                value: (Round(Round(GetNumber('응찰_내용_토지_금액')/GetNumber('MkEdit_입력표_전유면적'),0) / 1000, 0) * 1000)
            }
        }),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_내용_토지_단가_평당 = new CalcEdit('응찰_내용_토지_단가_평당', ['응찰_내용_토지_금액', 'MkEdit_입력표_전유면적'], new FunctionZoonData('응찰_내용_토지_단가_평당',
            () => {
                return { value: Round(Round(GetNumber('응찰_내용_토지_금액') / (GetNumber('MkEdit_입력표_전유면적') * 0.3025),0) / 1000, 0) * 1000 };
            }),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_변수_숫자_부담비용합계 = new CalcEdit('응찰_변수_숫자_부담비용합계', [], new JsonZoonData('응찰_변수_숫자_부담비용합계', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: false
            }
        });


        const 응찰_변수_숫자1 = new CalcEdit('응찰_변수_숫자1', [], new JsonZoonData('응찰_변수_숫자1', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: false
            }
        });


        const 응찰_변수_숫자2 = new CalcEdit('응찰_변수_숫자2', [], new JsonZoonData('응찰_변수_숫자2', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '',
                Null_기호 : '',
                제로값은_제로_기호로: false,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: false
            }
        });

        const 응찰_사항_경매개시등기일 = new Edit('응찰_사항_경매개시등기일', new JsonZoonData('응찰_사항_경매개시등기일', {}),{
            isShow : true,
            isEnable : true,
            mask : 'yyyy-mm-dd'
        })
            .on({
                change : function() {
                    SetValue( 'MkEdit_입력표_건축년도_경과', (Days(GetDate('MkEdit_감정일'))-Days(GetDate('MkEdit_입력표_건축일자'))) / 365 );
                    SetValue( '본건_MkEdit_건축년도', Left(GetString('MkEdit_입력표_건축일자'),4));
                    SetValue( '본건_MkEdit_경과년수', GetValue('MkEdit_입력표_건축년도_경과'));
                    SetValue( '보정표_MkEdit_건축물의경과년도', GetValue('MkEdit_입력표_건축년도_경과'));

                    SetValue('02_잔가율구분', '입력표');

                    MC_003_계산_잔가율();
                }
            });

        const 응찰_사항_경매계 = new Edit('응찰_사항_경매계', new JsonZoonData('응찰_사항_경매계', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_사항_경매구분 = new Edit('응찰_사항_경매구분', new JsonZoonData('응찰_사항_경매구분', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_사항_경매신청채권자 = new Edit('응찰_사항_경매신청채권자', new JsonZoonData('응찰_사항_경매신청채권자', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_사항_관할법원 = new Edit('응찰_사항_관할법원', new JsonZoonData('응찰_사항_관할법원', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_사항_사건번호 = new Edit('응찰_사항_사건번호', new JsonZoonData('응찰_사항_사건번호', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_사항_유입시특이사항 = new Edit('응찰_사항_유입시특이사항', new JsonZoonData('응찰_사항_유입시특이사항', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_사항_전화번호 = new Edit('응찰_사항_전화번호', new JsonZoonData('응찰_사항_전화번호', {}),{
            isShow : true,
            isEnable : true
        });

        const 응찰_사항_청구금액 = new Edit('응찰_사항_청구금액', new JsonZoonData('응찰_사항_청구금액', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    MC_101_감정에관한사항_계산_실거래가격();
                }
            });

        const 응찰_수지_보유비용_기타유지보수비용 = new Edit('응찰_수지_보유비용_기타유지보수비용', new JsonZoonData('응찰_수지_보유비용_기타유지보수비용', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_보유비용_기회비용 = new CalcEdit('응찰_수지_보유비용_기회비용', [], new JsonZoonData('응찰_수지_보유비용_기회비용', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유비용_법인세 = new CalcEdit('응찰_수지_보유비용_법인세', [], new JsonZoonData('응찰_수지_보유비용_법인세', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유비용_부가세 = new CalcEdit('응찰_수지_보유비용_부가세', [], new JsonZoonData('응찰_수지_보유비용_부가세', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유비용_재산세 = new CalcEdit('응찰_수지_보유비용_재산세', [], new JsonZoonData('응찰_수지_보유비용_재산세', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유비용_종부세 = new CalcEdit('응찰_수지_보유비용_종부세', [], new JsonZoonData('응찰_수지_보유비용_종부세', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const Q_49_DUAL_종합부동산세 = new JsonZoonData('Q_49_DUAL_종합부동산세', {});
        const 응찰_수지_보유비용_종부세_Combo = new Combo('응찰_수지_보유비용_종부세_Combo', Q_49_DUAL_종합부동산세,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'GU_DESC',
                value : 'GU_CODE',
                index : '',
            }
        })
            .on({
                change : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_보유비용_종부세_적용값 = new CalcEdit('응찰_수지_보유비용_종부세_적용값', [], new JsonZoonData('응찰_수지_보유비용_종부세_적용값', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유비용_종부세적용면적 = new CalcEdit('응찰_수지_보유비용_종부세적용면적', [], new JsonZoonData('응찰_수지_보유비용_종부세적용면적', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유비용_주택기준시가 = new CalcEdit('응찰_수지_보유비용_주택기준시가', [], new JsonZoonData('응찰_수지_보유비용_주택기준시가', {}),{
            isShow : false,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유비용_합계 = new CalcEdit('응찰_수지_보유비용_합계', [], new JsonZoonData('응찰_수지_보유비용_합계', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_수지_보유수익_기타수익 = new Edit('응찰_수지_보유수익_기타수익', new JsonZoonData('응찰_수지_보유수익_기타수익', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });

        const 응찰_수지_보유수익_월임대수입 = new Edit('응찰_수지_보유수익_월임대수입', new JsonZoonData('응찰_수지_보유수익_월임대수입', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });

        const 응찰_수지_보유수익_임대보증금 = new Edit('응찰_수지_보유수익_임대보증금', new JsonZoonData('응찰_수지_보유수익_임대보증금', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_보유수익_임대수익 = new CalcEdit('응찰_수지_보유수익_임대수익', [], new JsonZoonData('응찰_수지_보유수익_임대수익', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_보유수익_합계 = new CalcEdit('응찰_수지_보유수익_합계', [], new JsonZoonData('응찰_수지_보유수익_합계', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_부담비용합계 = new CalcEdit('응찰_수지_부담비용합계', [], new JsonZoonData('응찰_수지_부담비용합계', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_실제취득가 = new CalcEdit('응찰_수지_실제취득가', [], new JsonZoonData('응찰_수지_실제취득가', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_수지_예상공시지가상승률 = new Edit('응찰_수지_예상공시지가상승률', new JsonZoonData('응찰_수지_예상공시지가상승률', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1.00'
        })
            .on({
                focusout: function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_예상매각금액 = new CalcEdit('응찰_수지_예상매각금액', [], new JsonZoonData('응찰_수지_예상매각금액', {}),{
            isShow : true,
            isEnable : false,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_수지_예상매각확신금액 = new Edit('응찰_수지_예상매각확신금액', new JsonZoonData('응찰_수지_예상매각확신금액', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout: function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });

        const 응찰_수지_예상매각확신사유 = new Edit('응찰_수지_예상매각확신사유', new JsonZoonData('응찰_수지_예상매각확신사유', {}),{
            isShow : true,
            isEnable : true
        });


        const 응찰_수지_예정_낙찰후매각가능 = new CalcEdit('응찰_수지_예정_낙찰후매각가능', [], new JsonZoonData('응찰_수지_예정_낙찰후매각가능', { value: 3 }),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_수지_응찰여부 = new Check('응찰_수지_응찰여부', new JsonZoonData('응찰_수지_응찰여부', { value: 'Y'}),{
            isShow : true,
            isEnable : true,
            value : 'Y',
        });

        const 응찰_수지_응찰여부_Group = new Group('응찰_수지_응찰여부_Group', new JsonZoonData('응찰_수지_응찰여부_Group', {}),{
            isShow : true,
            isEnable : true
        });


        const 응찰_수지_입찰예정가 = new CalcEdit('응찰_수지_입찰예정가', [], new JsonZoonData('응찰_수지_입찰예정가', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_전체손익 = new CalcEdit('응찰_수지_전체손익', [], new JsonZoonData('응찰_수지_전체손익', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_수지_처분_기타비용 = new Edit('응찰_수지_처분_기타비용', new JsonZoonData('응찰_수지_처분_기타비용', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_처분_비용 = new CalcEdit('응찰_수지_처분_비용', [], new JsonZoonData('응찰_수지_처분_비용', {}),{
            isShow : false,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const Q_49_DUAL_처분비용 = new JsonZoonData('Q_49_DUAL_처분비용', {});
        const 응찰_수지_처분_비용_Combo = new Combo('응찰_수지_처분_비용_Combo', Q_49_DUAL_처분비용,{
            isShow : true,
            isEnable : true,
            format : {
                text : '처분비용',
                value : '처분구분',
                index : '',
            }
        })
            .on({
                change : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_처분_비용_적용값 = new CalcEdit('응찰_수지_처분_비용_적용값', [], new JsonZoonData('응찰_수지_처분_비용_적용값', {}),{
            isShow : false,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_처분_합계 = new CalcEdit('응찰_수지_처분_합계', [], new JsonZoonData('응찰_수지_처분_합계', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_수지_취득_강제집행 = new Edit('응찰_수지_취득_강제집행', new JsonZoonData('응찰_수지_취득_강제집행', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_취득_기타취득 = new CalcEdit('응찰_수지_취득_기타취득', [], new JsonZoonData('응찰_수지_취득_기타취득', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_취득_등록세 = new CalcEdit('응찰_수지_취득_등록세', [], new JsonZoonData('응찰_수지_취득_등록세', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const Q_49_DUAL_등록세 = new JsonZoonData('Q_49_DUAL_등록세', {});
        const 응찰_수지_취득_등록세_Combo = new Combo('응찰_수지_취득_등록세_Combo', Q_49_DUAL_등록세,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_취득_원가합계 = new CalcEdit('응찰_수지_취득_원가합계', [], new JsonZoonData('응찰_수지_취득_원가합계', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_취득_채권매입 = new CalcEdit('응찰_수지_취득_채권매입', [], new JsonZoonData('응찰_수지_취득_채권매입', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_취득_총원가합계 = new CalcEdit('응찰_수지_취득_총원가합계', [], new JsonZoonData('응찰_수지_취득_총원가합계', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_취득_취득세 = new CalcEdit('응찰_수지_취득_취득세', [], new JsonZoonData('응찰_수지_취득_취득세', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const Q_49_DUAL_취득세 = new JsonZoonData('Q_49_DUAL_취득세', {});
        const 응찰_수지_취득_취득세_Combo = new Combo('응찰_수지_취득_취득세_Combo', Q_49_DUAL_취득세,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function() {
                    RunButton('Command_응찰_02_이벤트');
                }
            });


        const 응찰_수지_취득_합계 = new CalcEdit('응찰_수지_취득_합계', [], new JsonZoonData('응찰_수지_취득_합계', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_항목별_비용합계 = new CalcEdit('응찰_수지_항목별_비용합계', [], new JsonZoonData('응찰_수지_항목별_비용합계', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_항목별_수익합계 = new CalcEdit('응찰_수지_항목별_수익합계', [], new JsonZoonData('응찰_수지_항목별_수익합계', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });


        const 응찰_수지_항목별_예상손익 = new CalcEdit('응찰_수지_항목별_예상손익', [], new JsonZoonData('응찰_수지_항목별_예상손익', {}),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });



        const 응찰_집계표_당사미회수채권액 = new CalcEdit('응찰_집계표_당사미회수채권액', ['응찰_집계표_당사채권최고액', '응찰_집계표_당사배당금'], new FunctionZoonData('응찰_집계표_당사미회수채권액', () => {
            return {
                value: GetNumber('응찰_집계표_당사채권최고액') - GetNumber('응찰_집계표_당사배당금')
            }
        }),{
            isShow : true,
            isEnable : true,
            format : {
                접두_기호 : '',
                접미_기호 : '',
                양수_기호 : '',
                음수_기호 : '-',
                제로_기호 : '0',
                Null_기호 : '',
                제로값은_제로_기호로: true,
                소수점_앞자리_제로값: true,
                소수점_이하값_표시: true,
                소수점_자리: '1',
                천자리_기호_표시: true
            }
        });

        const 응찰_집계표_당사배당금 = new Edit('응찰_집계표_당사배당금', new JsonZoonData('응찰_집계표_당사배당금', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    MC_101_감정에관한사항_계산_실거래가격();
                }
            });

        const 응찰_집계표_당사채권최고액 = new Edit('응찰_집계표_당사채권최고액', new JsonZoonData('응찰_집계표_당사채권최고액', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    MC_101_감정에관한사항_계산_실거래가격();
                }
            });

        const 응찰_집계표_선순위자배당금 = new Edit('응찰_집계표_선순위자배당금', new JsonZoonData('응찰_집계표_선순위자배당금', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    MC_101_감정에관한사항_계산_실거래가격();
                }
            });

        const 응찰_집계표_최고채권액 = new Edit('응찰_집계표_최고채권액', new JsonZoonData('응찰_집계표_최고채권액', {}),{
            isShow : true,
            isEnable : true,
            mask : ';12;#,###1'
        })
            .on({
                focusout : function() {
                    MC_101_감정에관한사항_계산_실거래가격();
                }
            });

        const 응찰_집계표_최고채권액Combo = new Combo('응찰_집계표_최고채권액Combo', Q_코드_최고채권액,{
            isShow : true,
            isEnable : true,
            format : {
                text : 'CD_DESC',
                value : 'CD_CODE',
                index : '',
            }
        })
            .on({
                change : function() {
                    GetZoonData('Q_코드_최고채권액').FindIndex('응찰_변수_숫자1', (row) => {
                        return row['CD_CODE'] == GetString('응찰_집계표_최고채권액Combo');
                    });
                    GetZoonData('Q_코드_최고채권액').GetRow(GetNumber('응찰_변수_숫자1'), [
                        { key: '응찰_집계표_최고채권액Combo_Value', value: 'ATTR_02'}
                    ]);
                    SetValue('Edit_건물단가_총단가조정지수', GetNumber('Edit_건물단가_중개축여부_적용지수') * GetNumber('Edit_건물단가_관리상태_적용지수'));
                    MC_999_배당표_주택임대차보증금_계산_전체();
                    MC_999_배당표_배당금_기본항목자동설정();
                }
            });


        const 응찰_집계표_최고채권액Combo_Value = new CalcEdit('응찰_집계표_최고채권액Combo_Value', [], new JsonZoonData('응찰_집계표_최고채권액Combo_Value', {}),{
            isShow : true,
            isEnable : true
        });

        // Label ----------------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------
        const 수익_Label_시점_본건_경과일 = new Label('수익_Label_시점_본건_경과일', new JsonZoonData('수익_Label_시점_본건_경과일', {}),{
            isShow : true,
            isEnable : true
        });

        const 수익_Label_시점_사례_경과일 = new Label('수익_Label_시점_사례_경과일', new JsonZoonData('수익_Label_시점_사례_경과일', {}),{
            isShow : true,
            isEnable : true
        });

        const 비준_Label_시점_본건_경과일 = new Label('비준_Label_시점_본건_경과일', new JsonZoonData('비준_Label_시점_본건_경과일', {}),{
            isShow : true,
            isEnable : false
        });

        const 비준_Label_시점_사례_경과일 = new Label('비준_Label_시점_사례_경과일', new JsonZoonData('비준_Label_시점_사례_경과일', {}),{
            isShow : true,
            isEnable : false
        });

        const Label_ReadOnly = new Label('Label_ReadOnly', new JsonZoonData('Label_ReadOnly', {}),{
            isShow : GetString('isReadOnly') == 'Y',
            isEnable : false
        });
    }

}
