class Group extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }

    child() {
        return this.target.children('input[type=checkbox]');
    }

    getValue () {
        let childId = this.child().attr('id');
        return GetValue(childId);
    }

    setValue (value) {
        if (isEmpty(value)) {
            this.child().prop('checked', false);
        } else {
            this.child().prop('checked', true);
        }
    }

    after() {
        this.customEventBind();
    }

    customEventBind () {
        this.target.on({
            click : function(e) {
                $(this).trigger('OnClick');
            }
        });
    }

    GetClickValue (name) {
        SetValue(name, this.child().val());
    }
}

