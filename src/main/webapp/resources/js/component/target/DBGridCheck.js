class DBGridCheck extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }

    rebind(target) {
        this.target = target;

        for (let i = 0 ; i < this.events.length; i++) {
            let _event = this.events[i];
            _event();
        }

        this.after();
    }

    after() {
        this.setValue(this.data.getData().value);
        this.customEventBind();
    }

    customEventBind () {
        this.target.on({
            click : (e) => {
                if (this.data.getData().isGroup) {
                    this.#doOpenCheck();
                }
                this.target.trigger('OnClick');
            }
        });
    }

    getValue () {
        return this.target.is(':checked') ? this.data.getData().on :this.data.getData().off;
    }

    setValue (value) {
        this.target.prop("checked", value == this.data.getData().on);
    }

    #doOpenCheck() {
        const name = this.target.attr('fieldName');
        const $targetTable = this.target.closest('tbody');
        $targetTable.find('input[fieldName="'+ name +'"]:checkbox').not(this.target).prop('checked',false);
    }
}