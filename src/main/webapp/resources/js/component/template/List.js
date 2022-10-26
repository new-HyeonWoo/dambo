
class List extends TemplateComponent {
    selectedValue;

    constructor (id, zoonData, options) {
        super(id, $('#' + id), zoonData, options);
    }

    template () {
        return `<select class="form-select fs-7" size="4" aria-label="size 3" multiple aria-label="multiple
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
        const textData = [];
        for(let i = 0; i <  this.target.find('select option:selected').length; i++){
            textData.push(this.target.find('select option:selected')[i].value);
        }
        return textData;
    }

    getText() {
        const textData = [];
        for(let i = 0; i <  this.target.find('select option:selected').length; i++){
            textData.push(this.target.find('select option:selected')[i].text);
        }
        return textData;
    }

    setValue (value) {
        if (isEmpty(value)) {
            return false;
        }
        this.target.find('select').val(value);
        this.target.find(`select option`).attr('selected', false);
        this.target.find(`select option[value="${value}"]`).attr('selected', true);

        this.target.find(`select option`).attr('data-selected', false);
        this.target.find(`select option[value="${value}"]`).attr('data-selected', true);

        this.selectedValue = value;
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

        this.target.find('select').val([]);
    }

    /** select box index 로 선택, index가 -1이면 미선택 */
    SetCurSel (index=-1) {
        index < 0 ? this.target.find('select').val([]) : this.target.find('option').eq(0).prop('selected', true);
    }

    SetSels(index, flag){
        if(flag == '-1'){
            this.target.find('select').val([]);
        }else if(flag == '0'){
            for(let i = 0; i < index.length; i++){
                this.target.find('option').eq(i).prop('selected', true);
            }
        }
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

}