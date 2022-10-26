class Label extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, {
            isShow: options.isShow,
            isEnable: false
        });
    }

    getValue () {
        return this.target.val();
    }

    setValue(value) {
        this.target.val(value);
    }
}

