<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsp/include/collateral/kindtype/component.jsp" %>

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

        RunAndRender('Q_당사설정시담보여력', {
            '년도': GetValue('년도'),
            '일련번호': GetValue('일련번호')
        });
        RunAndRender('Q_말소되지않는권리자의존재여부', {
            '년도': GetValue('년도'),
            '일련번호': GetValue('일련번호')
        });

        makeCrossTab();
    });
</script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>배당집계표</title>
</head>

<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed">
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
                                            <h6 class="mt-4">당사 설정시 담보여력</h6>
                                            <div class="table-responsive">
                                                <table class="table table-row-bordered table-rounded border table-hover gs-5 gy-3 gx-5 mt-3">
                                                    <thead class="align-middle bg-lighten">
                                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                                        <th colspan="3">구분</th>
                                                        <th colspan="6">금액</th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th colspan="3">가. 설정전 담보여력</th>
                                                        <th>합계</th>
                                                        <th class="bg-white text-end" data-type="price" id="담보여력_설정전">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                        <th>토지</th>
                                                        <th class="bg-white text-end" data-type="price" id="토지_담보여력_설정전">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                        <th>건물</th>
                                                        <th class="bg-white text-end" data-type="price" id="건물_담보여력_설정전">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th rowspan="4">나. 당사의 설정 예정액</th>
                                                        <th rowspan="2">공동담보</th>
                                                        <th>토지</th>
                                                        <th rowspan="2">순위</th>
                                                        <th rowspan="2" class="bg-white text-end" data-type="rank" id="당사순위"></th>
                                                        <th rowspan="2">예정액</th>
                                                        <th rowspan="2" colspan="3" class="bg-white text-end" data-type="price" id="당사설정금액">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th>건물</th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th rowspan="2">단독담보</th>
                                                        <th>토지</th>
                                                        <th rowspan="2">순위</th>
                                                        <th rowspan="2" class="bg-white text-end"></th>
                                                        <th>예정액</th>
                                                        <th colspan="3" class="bg-white text-end">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th>건물</th>
                                                        <th>예정액</th>
                                                        <th colspan="3" class="bg-white text-end">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th rowspan="3">다. 당사 설정금액 담보여력</th>
                                                        <th colspan="2">공동담보</th>
                                                        <th colspan="6" class="bg-white text-end" data-type="price" id="담보여력_설정후">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th rowspan="3">단독담보</th>
                                                        <th>토지</th>
                                                        <th colspan="6" class="bg-white text-end" data-type="price" id="단독담보">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th>건물</th>
                                                        <th colspan="6" class="bg-white text-end" data-type="price" id="단독담보">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th rowspan="3">라. 당사 설정 후 담보여력</th>
                                                        <th>공동담보</th>
                                                        <th colspan="6" class="bg-white text-end">
                                                            <div class="d-flex justify-content-between">
                                                                <div id="초과_부족설정액_문자">
<%--                                                                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                                </div>
<%--                                                                <div>--%>
<%--                                                                    <span>부족설정</span>--%>
<%--                                                                </div>--%>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th rowspan="3">단독담보</th>
                                                        <th>토지</th>
                                                        <th colspan="6" class="bg-white text-end" data-type="price" id="단독담보">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    <tr class="fw-bolder fs-7 text-gray-800">
                                                        <th>건물</th>
                                                        <th colspan="6" class="bg-white text-end" data-type="price" id="단독담보">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tfoot class="align-middle bg-lighten">
                                                    <tr class="fw-bolder fs-7 text-gray-800 text-center">
                                                        <th colspan="3">말소되지 않는 선순위 권리자의 존재여부</th>
                                                        <th colspan="6" class="bg-white" id="말소되지않는권리자존재여부">
<%--                                                            <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 text-start min-w-100 border rounded-0" id="#">--%>
                                                        </th>
                                                    </tr>
                                                    </tfoot>
                                                </table>
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
</body>
</html>
