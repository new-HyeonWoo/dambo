class CalcEdit extends TargetComponent {
    constructor(id, refs, data, options) {
        super(id, $('#' + id), data, {
            isShow: options.isShow,
            isEnable: false,
            mask: options.mask,
            maskType: options.maskType
        });
        this.mask();

        if (!Array.isArray(refs)) {
            throw `CalcEdit refs값이 Array가 아님`;
        }

        for (let i = 0; i < refs.length; i++) {
            let refId = refs[i];
            componentsDataMap.set(refId
                , $.extend([], [id].concat(componentsDataMap.get(refId))));
        }
    }

    mask() {
        this.formatter = new StringMask(this.id, this.options.mask, this.options.maskType, true);
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
            this.target.trigger('OnChange');
        }
    }

    SetReadOnly (isReadOnly) {
        isReadOnly = isReadOnly === 0 ? false : true;
        this.target.attr('disabled', isReadOnly);
    }

    SetCurSel () {
        throw `CalcEdit SetCurSel 정의되지 않은 메서드 입니다. (${this.id})`;
    }

    SetFocus () {
        this.target.focus();
    }
}