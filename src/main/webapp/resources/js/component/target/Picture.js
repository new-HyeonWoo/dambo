class Picture extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
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
            click : () => {
                ComponentTrigger(this.id, 'OnClick');
            },
            dblclick : () => {
                ComponentTrigger(this.id, 'OnDblClick');
            },
        });
    }

    PrintRichEdit() {

    }
}

