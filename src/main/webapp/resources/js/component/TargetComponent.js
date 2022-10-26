class TargetComponent extends Component {
    events;

    constructor (id, target, data, options) {
        super(id, target, data, options);

        this.updateOptions(options);
        if (this.after() instanceof Function) {
            this.after();
        }

        this.events = [];
    }

    getValue () {}
    setValue () {}

    after () {
        // custom event bind
        // this.target.on('click', function() {
        //     $(this).trigger('OnClick');
        // });
        //
        // this.target.on('dblclick', function() {
        //     $(this).trigger('OnDblClick');
        // });
        //
        // this.target.on('change', 'input', function() {
        //     $(this).trigger('OnChange');
        // });
        //
        // this.target.on('keyup', 'input', function(e) {
        //     if (e.keyCode === 13) {
        //         $(this).trigger('OnEnterKey');
        //     }
        // });
        //
        // this.target.on('focus', 'input', function() {
        //     $(this).trigger('OnGotFocus');
        // });
        //
        // this.target.on('focusout', 'input', function() {
        //     $(this).trigger('OnLostFocus');
        // });

    }

    update (newState) {
        if (this.data instanceof JsonZoonData) {
            this.setValue(newState);
        } else if (this.data instanceof FunctionZoonData) {
            this.setValue(this.data.getData().value);
        }
    }

    updateOptions (options) {
        options.isShow ? this.target.show() : this.target.hide();
        options.isEnable ? this.target.attr('disabled', false) : this.target.attr('disabled', true);
        
        return this;
    }

    on (types, selector, data, fn, one) {
        this.events.push(() => {
            this.target.on(types, selector, data, fn, one);
        });

        this.target.on(types, selector, data, fn, one);

        return this;
    }
}

