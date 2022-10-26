class DBGridCombo extends TemplateComponent {
    selectedValue;

    constructor (id, zoonData, options) {
        super(id, $('#' + id), zoonData, options);
    }

    template () {
        return `
            <select class="form-select form-select-sm form-select-transparent text-dark py-0 field" aria-label="Select"
                {{#unless ${this.options.isShow} }} style="display: none" {{/unless}}
                 {{#unless ${this.options.isEnable} }} disabled {{/unless}}
                id="${this.id}_SELECT" name="${this.id}_SELECT">
                {{#each .}}
                    <option value="{{ ${this.options.format.value} }}">{{ ${this.options.format.text} }}</option>
                {{/each}}
            </select>`;
    }

    before() {
        if (isNotEmpty(this.getValue())) {
            this.selectedValue = this.getValue();
        }
    }

    customEventBind () {
        this.target.find('select').on({
            change : () => {
                ComponentTrigger(this.id, 'OnChange');
            }
        });
    }

    after () {
        if (this.getIndex() === -1) {
            this.target.find('select').val([]);
        }

        this.customEventBind();
        this.setValue(this.selectedValue);
    }

    updateOptions (options) {
        options.isShow ? this.target.find('select').show() : this.target.find('select').hide();
        options.isEnable ? this.target.find('select').attr('disabled', false) : this.target.find('select').attr('disabled', true);

        return this;
    }

    getIndex() {
        return this.target.find('select option[data-selected=true]').index();
    }

    getValue() {
        return this.target.find('select option:selected').val();
    }

    setValue(value, trigger) {
        if (isEmpty(value)) {
            return false;
        }
        if (!this.#hasValue(value)) {
            value = $.trim(value);
        }

        this.selectedValue = value;

        if (!this.#hasValue(value)) {
            return false;
        }

        let source = this.getValue();

        this.target.find('select').val(value);
        this.target.find(`select option`).attr('selected', false);
        this.target.find(`select option[value="${value}"]`).attr('selected', true);

        this.target.find(`select option`).attr('data-selected', false);
        this.target.find(`select option[value="${value}"]`).attr('data-selected', true);

        if (trigger && source != value) {
            this.target.find('select').trigger('change');
        }
    }

    getHtml() {
        return this.target[0].outerHTML;
    }

    #hasValue(value) {
        return this.target.find(`select option[value="${value}"]`).length != 0;
    }
}
