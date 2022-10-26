function MC_소재지_지목별() {
    GetComponent('List_지목').GetWindowText('Label_지목별');

    SetValue('Label_지목별코드', "'"+StrReplace(GetValue('List_지목'),",","','")+"'");

}

function MC_소재지_담보종류() {
    GetComponent('List_담보종류').GetWindowText('Label_담보종류');

    SetValue('Label_담보종류코드', "'"+StrReplace(GetValue('List_담보종류'),",","','")+"'");
}

function MC_소재지_선택항목() {
    GetComponent('List_지점').GetWindowText('Label_소재지');

    SetValue('Label_소재지코드', "'"+StrReplace(GetValue('List_지점'),",","','")+"'");
}

function MC_담보감정일자_초기화() {

    RunQuery('Q_DUAL_해당일자_부터', {}, 'GET');


    GetZoonData('Q_DUAL_해당일자_부터').GetRow(0, [
        { key: 'Combo_부터_월', value: 'START_MONTH' },
        { key: 'Combo_부터_년도', value: 'START_YEAR' }
    ]);

    SetValue('Combo_까지_년도', NumToStr(Year(Now())));

    SetValue('Combo_까지_월', NumToStr(Month(Now())));

    SetValue('00_TEMP', uncomma(DateToStr(Now())));

    RunQuery('Q_DUAL_해당월일자_부터', {
        '해당년월': GetValue('00_TEMP')
    }, 'GET');

    RunQuery('Q_DUAL_해당월일자_까지', {
        '해당년월': GetValue('00_TEMP')
    }, 'GET');

    SetValue('Combo_부터_일자', NumToStr(Day(Now())));
    SetValue('Combo_까지_일자', NumToStr(Day(Now())));

    SetValue('Formula_감정일자_부터', Trim(GetValue('Combo_부터_년도'))+Trim(GetValue('Combo_부터_월'))+Trim(GetValue('Combo_부터_일자')));
    SetValue('Formula_감정일자_까지', Trim(GetValue('Combo_까지_년도'))+Trim(GetValue('Combo_까지_월'))+Trim(GetValue('Combo_까지_일자')));

    SetValue('Edit_낙찰가율_최저', '0.00');
    SetValue('Edit_낙찰가율_최고', 100);

    SetValue('Edit_면적_토지_최저', '0.00');
    SetValue('Edit_면적_토지_최고', 0)
    SetValue('Edit_면적_건물_최저', '0.00');
    SetValue('Edit_면적_건물_최고', 0)

    SetValue('Combo_예상낙찰가_최저', '0');
    SetValue('Combo_예상낙찰가_최고', "9000000000000");
    SetValue('Group_자체및업소', "A");

    GetComponent('Combo_우편번호_시도').SetCurSel(0);

    RunQuery('Q_우편번호_구군', {
        '00_우편번호_시도': GetValue('Combo_우편번호_시도')
    }, 'GET');

    GetComponent('Combo_우편번호_구군').SetCurSel(0);

    RunQuery('Q_우편번호_동', {
        '00_우편번호_시도': GetValue('Combo_우편번호_시도'),
        '00_우편번호_구군': GetValue('Combo_우편번호_구군'),
    }, 'GET');

    GetComponent('Combo_우편번호_동').SetCurSel(0);
}