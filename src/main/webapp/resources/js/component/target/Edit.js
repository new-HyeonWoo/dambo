class Edit extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
        this.mask();
    }

    mask() {
        this.formatter = new StringMask(this.id, this.options.mask, this.options.maskType, this.options.rounds || false);
    }

    rebind(target) {
        this.target = target;

        for (let i = 0 ; i < this.events.length; i++) {
            let _event = this.events[i];
            _event();
        }
    }

    after() {
        this.customEventBind();
    }

    customEventBind () {
        this.target.on({
           change : function(e) {
               $(this).trigger('OnChange');
           },
            dblclick : function (e) {
                $(this).trigger('OnDblClick');
            },
            keyup : function (e) {
                if (e.keyCode === 13) {
                    $(this).trigger('OnEnterKey');
                } else {
                    $(this).trigger('OnValidate');
                }
            },
            focus : function (e) {
                $(this).trigger('OnGotFocus');
            },
            focusout : () => {
               // SetValue(this.id, this.getValue());
               this.target.trigger('OnLostFocus');
            }
        });
    }

    getValue() {
        return this.formatter.unapply(this.target.val());
    }

    setValue(value, trigger) {
        const source = this.getValue();
        this.target.val(this.formatter.apply(value));

        if (trigger && source != value) {
            ComponentTrigger(this.id, 'OnChange');
        }
    }

    SetReadOnly (isReadOnly) {
        isReadOnly = isReadOnly !== 0;
        this.target.attr('disabled', isReadOnly);
    }

    SetCurSel () {
        throw `Edit SetCurSel 정의되지 않은 메서드 입니다. (${this.id})`;
    }

    SetFocus () {
        this.target.focus();
    }
    
}