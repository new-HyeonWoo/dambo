class Check extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }

    rebind(target) {
        this.target = target;

        for (let i = 0 ; i < this.events.length; i++) {
            let _event = this.events[i];
            _event();
        }

        this.setValue(this.data.getData().value);
    }

    after() {
        this.setValue(this.data.getData().value);
        this.customEventBind();
    }

    customEventBind () {
        this.target.on({
            click : function (e) {
                $(this).trigger('OnClick');
            }
        });
    }

    getValue () {
        const checked = this.target.is(':checked');
        return checked ? this.target.val() : '';
    }

    setValue (value) {
        this.target.val(value);
    }

    GetWindowText () {}
    SetCheckColor () {}
    SetFont () {}
    SetTextColor () {}
    SetWindowText() {}
}