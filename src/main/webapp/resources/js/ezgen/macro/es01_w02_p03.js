function MC_0_의견() {
    SetValue('idx',GetArray('i_Arr',GetNumber('i')));

    GetZoonData("조회_의견").GetRow(GetValue("idx"), [
        { key: '0_현재_의견', value: 'MENT_ITEM' },
        { key: '0_제목', value: 'CD_DESC' }
    ]);

    SetValue('0_현재_의견',StrReplace(GetString('0_현재_의견'),"&qt","'"));
    SetValue('시작',StrReplace(GetString('시작'),"&qt","'"));
    SetValue('0_현재_의견',StrReplace(GetString('0_현재_의견'),"\par }","\par "))
    //SetValue([:0_현재_의견],[:0_현재_의견]+"\par")

    // SetValue(GetString('0_제목'),"\viewkind4\uc1\pard\lang1042\b\fs18\cf0"+GetString('0_제목')+"\par\plain");

    if (GetNumber('i') == 0) {
        SetValue('0_의견',GetString('시작')+GetString('0_제목')+ GetString('0_현재_의견'));
    } else {
        SetValue('0_의견',GetString('0_의견') +GetString('0_제목')+ GetString('0_현재_의견'));
    }
}
function MC_0_의견_Single() {
    GetZoonData("조회_의견").GetRow(GetValue("idx"), [
        { key: '0_현재_의견', value: 'MENT_ITEM' },
        { key: '0_제목', value: 'CD_DESC' }
    ]);

    SetValue('0_현재_의견',StrReplace((GetValue('0_현재_의견') || ''),"&qt","'"));
    SetValue('시작',StrReplace((GetValue('시작') || ''),"&qt","'"));
    SetValue('0_의견',GetValue('시작') + GetValue('0_현재_의견'));
}
function MC_출력() {
    RunQuery("조회_의견", {
        '년도' : GetValue('년도'),
        '일련번호' : GetValue('일련번호'),
    });

    GetZoonData("조회_의견").GetRows("", [
        { key: "0_의견_Arr", value: "MENT_ITEMS" }
    ]);

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
        return row['CD_CODE'] == '0001';
    });
    MC_0_의견_Single();
    SetValue('Edit1', "감정평가액 산출자료 및 그 결정에 관한 의견" + Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ Hex(13)+Hex(10)+
        "0. 본사 검증 감정 의견" + Hex(13)+Hex(10)+  Hex(13)+Hex(10) +Hex(13)+Hex(10) + " ①시가에 관한 의견");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('시작') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '0002';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10) + Hex(13)+Hex(10)+" ② 토지, 건물가액 산출에 관한 의견")
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '0003';
        });
    MC_0_의견_Single();
    SetValue('Edit1',Hex(13)+Hex(10) + Hex(13)+Hex(10)+ " ③ 낙찰가율 보정표 및 낙찰가 선장에 대한 의견");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '0004';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10) + Hex(13)+Hex(10)+" ④ 배당표에 관한 의견");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '0005';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10) +" ⑤ 기타");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '1001';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ Hex(13)+Hex(10)+"1. 담보취득 및 담보물에 관한 사항, 설정시 조건 및 재감정 필요시점, 공부상의 차이 등"+
        Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ Hex(13)+Hex(10)+" ① 담보취득에 관한 감정자의 의견 (담보물의 위치, 담보취득이 목적 등)");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '1002';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+" ② 설정시 조건 (당사 설정 순위 및 예정액 등)");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '1003';
        });
    MC_0_의견_Single();
    SetValue('Edit1',  Hex(13)+Hex(10)+ Hex(13)+Hex(10)+" ③ 공부상의 차이");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '1004';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ④ 기타");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2111';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ "2. 담보취득 및 담보물에 관한 사항, 설정시 조건 및 재감정 필요시점, 공부상의 차이 등"+
        Hex(13)+Hex(10)+Hex(13)+Hex(10)+ "(1) 시가의 산출 근거" + Hex(13)+Hex(10)+ Hex(13)+Hex(10)+
        " 1) 시가 (비준가격) 산출 자료 수집 내용" + Hex(13)+Hex(10)+Hex(13)+Hex(10)+
        " ① 대상지에 대한 일반적인 부동산 시가 조사내용");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2112';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ② 대상지 인근 경매사례");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2113';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ③ 대상지 인근 매매사례");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2114';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ④ 실거래가");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2115';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ⑤ 인터넷 및 생활정보지 조사내용");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2116';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ⑥ 기타");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2120';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " 2) 비교 표준지 선정 이유");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndex("idx",
        (row) => {
            return row['CD_CODE'] == '2130';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " 3) 적정 시가 산출에 대한 감정자의 의견");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2200';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ "(3) 예상낙찰가 산출 근거"+Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ① 당해지역 낙찰가율");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2302';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ② 유사부동산 낙찰가율");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2303';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " ③ 낙찰가율 임의 산출시 그 사유");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2410';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ "(4) 감정대상 부동산 점검표"+ Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " 1) 임대차 현황 또는 거주자 현황-방의 수, 사용자, 보증금, 계약기간, 사용면적 또는 방의 수");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2420';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " 2) 토지의 상태 및 설비 현황, 기타의 법정지상권을 성립시키는 건축물 등 특이사항");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2430';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " 3) 위치 및 주변환경");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2440';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " 4) 인접 도로상태 및 교통상황");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    GetZoonData("조회_의견").FindIndexArray("idx",
        (row) => {
            return row['CD_CODE'] == '2450';
        });
    MC_0_의견_Single();
    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ " 5) 부동산 거래 및 가격동향, 향후 가격 변화 예상");
    SetValue('RichEditor2', GetString('Edit1'));
    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목') + GetString('0_의견'));

    RunQuery('조회_조세_출력', {
        '년도' : GetValue('년도'),
        '일련번호' : GetValue('일련번호'),
    });
    GetZoonData('조회_조세_출력').GetRow(0, [
        { key: '0_국세_부과일자', value: 'NTAX_LEVY_CAUSE' },
        { key: '0_국세_체납금액', value: 'NTAX_ARRE_AMT' },
        { key: '0_국세_가산금', value: 'NTAX_ADD_AMT' },
        { key: '0_국세_부과원인', value: 'NTAX_LEVY_CAUSE' },
        { key: '0_국세완납_부과일자', value: 'NTAX_ISSUE_DATE' },
        { key: '0_지방세_부과일자', value: 'LRATE_LEVY_DATE' },
        { key: '0_지방세_체납금액', value: 'LRATE_ARRE_AMT' },
        { key: '0_지방세_가산금', value: 'LRATE_ADD_AMT' },
        { key: '0_지방세_부과원인', value: 'LRATE_LEVY_CAUSE' },
        { key: '0_지방세완납_부과일자', value: 'LRATE_ISSU_DATE' }
    ]);

    SetValue('Edit1', Hex(13)+Hex(10)+ Hex(13)+Hex(10)+ "(5) 감정물건에 대한 조세 납부 확인"
        + Hex(13)+Hex(10)+ RPad("구분",30," ")+ RPad("부과일자",12," ")+LPad("체납금액",13," ")+
        LPad("가산금",13," ")+ "  " + RPad("부과원인",30," "));
    SetValue('RichEditor2', GetString('Edit1'));

    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목'));
    SetValue('Edit1',  RPad("국세",30," ")+ RPad(GetString('0_국세_부과일자'),12," ")+LPad(GetString('0_국세_체납금액'),13," ")+
        LPad(GetString('0_국세_가산금'),13," ")+ "  " + RPad(GetString('0_국세_부과원인'),30," "));
    SetValue('RichEditor2', GetString('Edit1'));

    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목'));
    SetValue('0_의견_1',  RPad("지방세",30," ")+ RPad(GetString('0_지방세_부과일자'),12," ")+LPad(GetString('0_지방세_체납금액'),13," ")+
        LPad(GetString('0_지방세_가산금'),13," ")+ "  " + RPad(GetString('0_지방세_부과원인'),30," "));
    SetValue('RichEditor2', GetString('Edit1'));

    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목'));
    SetValue('Edit1',  RPad("국세완납증명확인",30," ")+ RPad('0_국세완납_부과일자',12," "));
    SetValue('RichEditor2', GetString('Edit1'));

    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목'));
    SetValue('Edit1',  RPad(GetString('지방세완납증명확인'),30," ")+ RPad(GetString('0_지방세완납_부과일자'),12," "));
    SetValue('RichEditor2', GetString('Edit1'));

    GetComponent('RichEditor2').GetRichEditorRTF('0_출력용제목');
    SetValue('0_의견_1',GetString('0_의견_1') + GetString('0_출력용제목'));

    GetComponent('RichEditor1').SetRichEditorRTF(GetValue('0_의견_1'));
}

// TODO
function MC_미리보기() {
    SetValue('RichEditor1', '감정평가액 산출자료 및 그 결정에 관한 의견<br><br><br>');

    let zoonData = GetZoonData('조회_의견');

    for (let i=0; i<zoonData.data.length; i++) {
        let data = zoonData.data[i];
        if (isNotEmpty(data['CD_DESC'])) {
            SetValue('RichEditor1', '<br>' + data['CD_DESC'] + '<br>');
        }
        if (isNotEmpty(data['MENT_ITEM'])) {
            SetValue('RichEditor1', data['MENT_ITEM']);
        }
    }
}
