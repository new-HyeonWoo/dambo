<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>
<script defer src="../../../resources/js/custom/grid/template.js"></script>

<script id="DBGrid_배당근거내역_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5">
        <thead class="align-top bg-secondary text-nowrap text-center align-middle">
        <tr class="fw-bolder fs-7 text-gray-800">
            <th class="hide">배당표구분</th>
            <th class="hide">순위</th>
            <th class="hide">배당순위코드</th>
            <th class="hide">배당순서</th>
            <th class="hide">PK_YYYY</th>
            <th class="hide">PK_SEQ</th>
            <th class="hide">PK_배당순위코드의첫자리</th>
            <th class="hide">PK_처리발생일자</th>
            <th class="hide">PK_처리일련번호</th>
            <th class="hide">PK_권리발생일자</th>
            <th class="hide">PK_배당표구분</th>
            <th class="hide">PK_발생순번</th>
            <th class="hide">PK_순위</th>
            <th class="hide">발생순번</th>
            <th class="w-100px">배당표구분명</th>
            <th class="w-100px">일단지구분</th>
            <th class="w-100px">권리발생일자</th>
            <th class="w-100px">배당순위명</th>
            <th class="w-100px">권리자</th>
            <th class="w-100px">단독담보</th>
            <th class="w-100px">공용담보</th>
            <th class="w-100px">배당액</th>
            <th class="w-100px">안분 비율</th>
            <th class="w-100px">안분 금액</th>
            <th class="w-100px">공동담보 비율</th>
            <th class="w-100px">공동담보 금액</th>
        </tr>
        </thead>
        <tbody>
        {{#each .}}
            {{>DBGrid_배당근거내역_템플릿_ROW index=@index}}
        {{/each}}
        </tbody>
    </table>
</script>

<script id="DBGrid_배당근거내역_템플릿_ROW" type="text/x-handlebars-template">
    <tr>
        <td class="hide">{{ noneField name="배당표구분" value=배당표구분 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="순위" value=순위 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="배당순위코드" value=배당순위코드 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="배당순서" value=배당순서 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_YYYY" value=PK_YYYY index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_SEQ" value=PK_SEQ index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_배당순위코드의첫자리" value=PK_배당순위코드의첫자리 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_처리발생일자" value=PK_처리발생일자 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_처리일련번호" value=PK_처리일련번호 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_권리발생일자" value=PK_권리발생일자 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_배당표구분" value=PK_배당표구분 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_발생순번" value=PK_발생순번 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="PK_순위" value=PK_순위 index=index options='{}' }} </td>
        <td class="hide">{{ noneField name="발생순번" value=발생순번 index=index options='{}' }} </td>
        <td class="w-100px">{{ noneField name="배당표구분명" value=배당표구분명 index=index options='{}' }} </td>
        <td class="w-100px">{{ noneField name="일단지구분" value=일단지구분 index=index options='{}' }} </td>
        <td class="w-100px">{{ noneField name="권리발생일자" value=권리발생일자 index=index options='{}' }} </td>
        <td class="w-100px">{{ noneField name="배당순위명" value=배당순위명 index=index options='{}' }} </td>
        <td class="w-100px">{{ noneField name="권리자" value=권리자 index=index options='{}' }} </td>
        <td class="w-100px">{{ noneField name="채권금액_단독담보" value=채권금액_단독담보 index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-100px">{{ noneField name="채권금액_공용담보" value=채권금액_공용담보 index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-100px">{{ maskField name="배당액" value=배당액 index=index options='{"mask": "-;8;#,###1", "maskType": "숫자", "textType": "text-end"}' }}</td>
        <td class="w-100px">{{ noneField name="안분된비율" value=안분된비율 index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-100px">{{ noneField name="안분된금액" value=안분된금액 index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-100px">{{ noneField name="공동담보_비율" value=공동담보_비율 index=index options='{"mask": "-;12;#,###1.00", "maskType": "숫자", "textType": "text-end"}' }} </td>
        <td class="w-100px">{{ noneField name="공동담보_금액" value=공동담보_금액 index=index options='{"mask": "-;12;#,###1", "maskType": "숫자", "textType": "text-end"}' }} </td>
    </tr>
</script>
<script id="Q_크로스탭_템플릿" type="text/x-handlebars-template">
    <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
        <thead class="bg-lighten">
        <tr class="fw-bolder fs-7 text-gray-800 text-center">
            {{#each .}}
            <th>{{name}}</th>
            {{/each}}
        </tr>
        </thead>
        <tbody class="text-center" id="Q_크로스탭_리스트">
        </tbody>
    </table>
</script>

<script type="text/javascript">
    componentsMap.set('page', 1);
    componentsMap.set('es', EsType.ES01_POPUP);

    $(document).ready(function(){
        const groupBy = (data, predicate) => {
            return data.reduce((result, value) => {
                let group = value[predicate];

                if ("function" === typeof predicate) {
                    group = predicate(value);
                }

                if (result[group] === undefined) {
                    result[group] = [];
                }

                result[group].push(value);
                return result;
            }, {});
        };

        function makeCrossTab() {
            let Q_크로스 = RunAndReturnQuery('Q_크로스', {
                '년도': GetValue('년도'),
                '일련번호': GetValue('일련번호')
            }, 'GET');
            let Q_Group = groupBy(Q_크로스, (_value) => {
                return _value['SEC_NAME'] + '_' + _value['LOT_NUM'] + '_' + _value['LN_SEQ'];
            });

            let list = makeJsonArray(Q_Group);
            let cols = makeColNames(Q_Group)
            list = makeSummary(list);

            _render($('#Q_크로스탭'), $('#Q_크로스탭_템플릿').html(), cols);
            let _td = '{{#each .}}';
            _td += '<tr>';
            for (let _name in list[0]) {
                _td += '<td class="w-100px">{{' + escapeRegex(_name).trim().replaceAll('\r', '').replaceAll(' ', '') + '}}</td>';
            }
            _td += '</tr>';
            _td += '{{/each}}';
            _render($('#Q_크로스탭_리스트'), _td, list);
        }

        function escapeRegex(string) {
            return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        }

        function makeSummary(list) {
            let _json = {
                '구분': '합계',
                'No': '',
                '지번': '',
            };

            for (let i = 0; i < list.length; i++) {
                let col = list[i];
                for (let _name in col) {
                    if (_name != '구분' && _name != 'No' && _name != '지번') {
                        if (_name in _json) {
                            _json[_name] += Number(uncomma(col[_name]));
                        } else {
                            _json[_name] = Number(uncomma(col[_name]));
                        }
                    }
                }
            }
            for (let _name in _json) {
                if (_name != '구분' && _name != 'No' && _name != '지번') {
                        _json[_name] = comma(_json[_name]);
                }
            }

            list.push(_json);

            return list;
        }

        function makeColNames(_Q) {
            let cols = [];
            for (let _groupName in _Q) {
                for (let i = 0; i < _Q[_groupName].length; i++) {
                    let _col = _Q[_groupName][i];

                    if (i == 0) {
                        cols.push({
                            'name': '구분'
                        });
                        cols.push({
                            'name': 'No'
                        });
                        cols.push({
                            'name': '지번'
                        });
                    }

                    cols.push({
                        'name': _col['RIGHT_PERSON']
                    });
                }

                break;
            }

            return cols;
        }

        function makeJsonArray(_Q) {
            let cols = [];
            let list = [];
            for (let _groupName in _Q) {
                for (let i = 0; i < _Q[_groupName].length; i++) {
                    let _col = _Q[_groupName][i];

                    if (i == 0) {
                        cols.push({
                            'colName': '구분',
                            'colValue': _col['SEC_NAME']
                        });
                        cols.push({
                            'colName': 'No',
                            'colValue': _col['LN_SEQ']
                        });
                        cols.push({
                            'colName': '지번',
                            'colValue': _col['LOT_NUM']
                        });
                    }

                    cols.push({
                        'colName': _col['RIGHT_PERSON'],
                        'colValue': comma(_col['DIVIDE_AMT'])
                    });
                }

                let _json = {};
                for (let i = 0; i < cols.length; i++) {
                    let _col = cols[i];
                    _json[escapeRegex(_col.colName).trim().replaceAll('\r','').replaceAll(' ','')] = _col.colValue;
                }
                list.push(_json);
            }
            return list;
        }

        function convert(_type, _value) {
            if (_type == 'price') {
                return _value.toLocaleString('ko-KR');;
            } else if (_type == 'date') {
                return _value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
            } else if (_type == 'float') {
                return _value.toFixed(2);
            } else if (_type == 'rank') {
                return _value + ' ' + '순위';
            } else {
                return _value;
            }
        }

        function RunAndRender(id, params) {
            let _Query = RunAndReturnQuery(id, params, 'GET');

            for (let _name in _Query.at()) {
                let _target = $('#' + _name);
                let _value = convert(_target.data('type'), _Query.at()[_name]);
                _target.html(_value);
            }
        }

        makeCrossTab();

        const DBGrid_배당근거내역 = new DBGrid('DBGrid_배당근거내역', new JsonZoonData('Q_배당금집계_근거내역', {}), {
            isShow: true,
            isEnable: true
        }).on('OnSelectChange', function () {
            EmptyArray('배당금합계');

            GetComponent('DBGrid_배당근거내역').GetRows("", [
                {key: '배당금합계', value: '배당액'}
            ]);

            SetValue('Formula1',Sum('배당금합계'));
        });

        const Formula1 = new CalcEdit('Formula1', [], new JsonZoonData('Q_Formula1', {}), {
            isShow: true, isEnable: true, mask: ';12;#,###1', maskType: '숫자'
        });

        RunQuery('Q_배당금집계_근거내역', {
            '년도': GetValue('년도'),
            '일련번호': GetValue('일련번호')
        }, 'GET');

        GetComponent('DBGrid_배당근거내역').GetRows("", [
            {key: '배당금합계', value: '배당액'}
        ]);

        SetValue('Formula1',Sum('배당금합계'));

        const Picture3 = new Picture('Picture3', new JsonZoonData('Picture3', {}), {
            isShow : true,
            isEnable : true
        }).on({
            click : function() {
                if (!MsgBox('저장하시겠습니까?', '알림', false)) {
                    return false;
                }

                SetValue('00_저장여부', 'Y');

                GetComponent('DBGrid_배당근거내역').GetModifyData([
                    {key: '수정_0_년도', value: 'PK_YYYY', isDelRowInclude: true},
                    {key: '수정_0_일련번호', value: 'PK_SEQ', isDelRowInclude: true},
                    {key: '수정_1_배당순위코드첫자리', value: 'PK_배당순위코드의첫자리', isDelRowInclude: true},
                    {key: '수정_2_처리발생일자', value: 'PK_처리발생일자', isDelRowInclude: true},
                    {key: '수정_3_처리일련번호', value: 'PK_처리일련번호', isDelRowInclude: true},
                    {key: '수정_4_권리발생일자', value: 'PK_권리발생일자', isDelRowInclude: true},
                    {key: '수정_5_배당표구분', value: 'PK_배당표구분', isDelRowInclude: true},
                    {key: '수정_6_발생순번', value: 'PK_발생순번', isDelRowInclude: true},
                    {key: '수정_7_순위', value: 'PK_순위', isDelRowInclude: true},
                    {key: '수정_8_배당금', value: '배당액', isDelRowInclude: true}
                ]);

                RunQuery('00_수정_배당금_ES3402', {
                    '수정_0_년도': GetValue('수정_0_년도'),
                    '수정_0_일련번호': GetValue('수정_0_일련번호'),
                    '수정_1_배당순위코드첫자리': GetValue('수정_1_배당순위코드첫자리'),
                    '수정_2_처리발생일자': GetValue('수정_2_처리발생일자'),
                    '수정_3_처리일련번호': GetValue('수정_3_처리일련번호'),
                    '수정_4_권리발생일자': GetValue('수정_4_권리발생일자'),
                    '수정_5_배당표구분': GetValue('수정_5_배당표구분'),
                    '수정_6_발생순번': GetValue('수정_6_발생순번'),
                    '수정_7_순위': GetValue('수정_7_순위'),
                    '수정_8_배당금': GetValue('수정_8_배당금')
                }, 'POST');

                RunQuery('00_수정_배당금_ES3405', {
                    '수정_0_년도': GetValue('수정_0_년도'),
                    '수정_0_일련번호': GetValue('수정_0_일련번호'),
                    '수정_1_배당순위코드첫자리': GetValue('수정_1_배당순위코드첫자리'),
                    '수정_2_처리발생일자': GetValue('수정_2_처리발생일자'),
                    '수정_3_처리일련번호': GetValue('수정_3_처리일련번호'),
                    '수정_4_권리발생일자': GetValue('수정_4_권리발생일자'),
                    '수정_5_배당표구분': GetValue('수정_5_배당표구분'),
                    '수정_6_발생순번': GetValue('수정_6_발생순번'),
                    '수정_7_순위': GetValue('수정_7_순위'),
                    '수정_8_배당금': GetValue('수정_8_배당금')
                }, 'POST');

                RunQuery('저장_담보마스타_담보여력등', {
                    '년도': GetValue('년도'),
                    '일련번호': GetValue('일련번호')
                }, 'POST');

                RunQuery('Q_배당금집계_근거내역', {
                    '년도': GetValue('년도'),
                    '일련번호': GetValue('일련번호')
                }, 'GET');
                GetComponent('DBGrid_배당근거내역').GetRows("", [
                    {key: '배당금합계', value: '배당액'}
                ]);
                SetValue('Formula1',Sum('배당금합계'));

                MsgBox('정상적으로 저장되었습니다', '알림', true);
            }
        });

    });
</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>배당집계표</title>
</head>

<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed">
<div class="card">
    <div class="card-body">
        <ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6" id="TabControl1">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_1">배당집계표</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">배당금 계산 근거내역</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                <div class="d-flex flex-column flex-root">
                    <div class="page d-flex flex-row flex-column-fluid">
                        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                            <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <div class="d-flex flex-column-fluid">
                                    <div id="kt_content_container" class="container-fluid">
                                        <div class="row gy-5">
                                            <div class="col-xxl-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5>
													<span class="svg-icon svg-icon-primary svg-icon-2hx">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
															<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
														</svg>
													</span>
                                                            토지/건물 배당집계표
                                                        </h5>
                                                        <div id="kt_content_container">
                                                            <h6>설정전 총액 배당표</h6>
                                                            <div id="Q_크로스탭" class="table-responsive">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                <div id="kt_content_container">
                    <h5 class="mt-6">
                            <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="currentColor"/>
                                    <path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="currentColor"/>
                                </svg>
                            </span>
                        배당금 계산 근거내역
                    </h5>
                    <div class="mt-2">
                        <a href="javascript:void(0)" id="Picture3" class="btn btn-sm btn-flex btn-white btn-active-primary fw-bolder">
                            <i class="fas fa-file-alt"></i>저장
                        </a>
                    </div>
                    <div class="border rounded p-5 pb-1">
                        <div class="table-responsive table-loading">
                            <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 text-nowrap">
                                <tbody>
                                <div id="DBGrid_배당근거내역"></div>
                                </tbody>
                            </table>
                            배당액 합계
                            <input type="text" id="Formula1" class="form-control form-control-transparent fs-7 py-0 px-2  text-start min-w-100" value="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>
</html>
