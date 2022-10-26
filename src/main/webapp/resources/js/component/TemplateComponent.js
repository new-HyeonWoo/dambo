class TemplateComponent extends Component {
    events;

    constructor (id, target, data, options) {
        super(id, target, data, options);

        this.updateOptions(options);
        this.render();

        this.events = [];
    }

    getValue () {}
    setValue () {}
    template () { return ''; }
    before() {}
    after () {}

    render () {
        if (!isEmpty(this.template())) {
            this.before();

            _render(this.target, this.template(), this.data.getData());

            this.after();
        }
        return this;
    }

    update (newState) {
        this.render();
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