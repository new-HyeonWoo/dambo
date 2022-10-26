
class Combo extends TemplateComponent {
    selectedValue;

    constructor (id, zoonData, options) {
        super(id, $('#' + id), zoonData, options);
    }

    template () {
        return `<select class="form-select form-select-transparent text-dark fs-7 py-0 min-w-100" data-hide-search="true" data-control="select2" data-dropdown-css-class="w-250px" data-placeholder="옵션을 선택하세요"
                     {{#unless ${this.options.isShow} }} style="display: none" {{/unless}}
                     {{#unless ${this.options.isEnable} }} disabled {{/unless}}
                       id="${this.id}_SELECT" name="${this.id}_SELECT">
                    {{#each .}}                               
                        <option value="{{ ${this.options.format.value} }}">{{ ${this.options.format.text} }}</option>
                    {{/each}}
                </select>`;
            }

    after () {
        if (this.getIndex() === -1) {
            this.target.find('select').val([]);
        }

        if (!isEmpty(this.selectedValue)) {
            this.target.find(`#${this.id}_SELECT`).val(this.selectedValue);
        }

        this.customEventBind();
    }

    customEventBind () {
        this.target.find('select').on({
            change : function (e) {
                $(this).trigger('OnChange');
            },
            keyup : function (e) {
                if (e.keyCode === 13) {
                    $(this).trigger('OnEnterKey');
                }
            }
        })
    }

    getIndex() {
        return this.target.find('select option[data-selected=true]').index();
    }

    getValue () {
        return this.target.find('select option:selected').val();
    }

    getText() {
        return this.target.find('select option:selected').text();
    }

    setValue (value, trigger) {
        if (isEmpty(value)) {
            value = [];
        }
        if (!this.#hasValue(value)) {
            value = $.trim(value);
        }
        if (!this.#hasValue(value)) {
            value = [];
        }

        let source = this.getValue();

        this.target.find('select').val(value);
        this.target.find(`select option`).attr('selected', false);
        this.target.find(`select option[value="${value}"]`).attr('selected', true);

        this.target.find(`select option`).attr('data-selected', false);
        this.target.find(`select option[value="${value}"]`).attr('data-selected', true);

        this.selectedValue = value;

        // TODO: 이지젠에선 Combo SetValue할때 OnChange 이벤트 동작을 안한다. 단, DBGrid SetRow에서는 OnEditChanged 이벤트가 동작한다.
        // if (trigger && source != value) {
        //     this.target.find('select').trigger('change');
        // }
    }

    /** 목록/목록란 상자의 참조 추가 사용 시에 기본 참조로 Setting. */
    InitialData () {
        this.render();
    }

    /** select box 표시문자를 변수에 저장 */
    GetWindowText (id) {
        SetValue(id, this.getText());
    }

    /** 목록/목록란 상자에 option 추가 (문자열/값 목록 추가).  */
    AddData (arrKey, arrVal, indexs) {
        let arrKeys = arrKey.split(';');
        let arrVals = arrVal.split(';');

        for (let i = 0; i < arrKeys.length; i++) {
            if (isNotEmpty(arrVals[i])) {
                this.target.find('select').append($('<option>', {
                    text: arrKeys[i],
                    value: arrVals[i]
                }));
            }
        }

        this.after();
    }

    /** select box index 로 선택, index가 -1이면 미선택 */
    SetCurSel (index=-1) {
        index < 0 ? SetValue(this.id, '') : SetValue(this.id, this.target.find('option').eq(index).val());
    }

    GetRowCount () {
        throw `Combo GetRowCount 정의되지 않은 메서드 입니다. (${this.id})`;
    }
    InsertData () {
        throw `Combo InsertData 정의되지 않은 메서드 입니다. (${this.id})`;
    }
    SetBkColor() {
        throw `Combo SetBkColor 정의되지 않은 메서드 입니다. (${this.id})`;
    }
    SetFont() {
        throw `Combo SetFont 정의되지 않은 메서드 입니다. (${this.id})`;
    }
    SetSelBkColor() {
        throw `Combo SetSelBkColor 정의되지 않은 메서드 입니다. (${this.id})`;
    }
    SetSelTextColor() {
        throw `Combo SetSelTextColor 정의되지 않은 메서드 입니다. (${this.id})`;
    }
    UpdateCurRef () {
        throw `Combo UpdateCurRef 정의되지 않은 메서드 입니다. (${this.id})`;
    }
    /** 격자목록상자/표준도표의 새로운 Row를 추가. 참조된 필드별로 변수나 개체로 지정합니다. */
    AddRow () {
        throw `Combo AddRow 정의되지 않은 메서드 입니다. (${this.id})`;
    }

    #hasValue(value) {
        return this.target.find(`select option[value="${value}"]`).length != 0;
    }
}