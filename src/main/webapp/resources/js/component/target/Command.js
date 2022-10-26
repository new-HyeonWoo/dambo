class Command extends TargetComponent {

    constructor(id, zoonData, options) {
        super(id, $('#' + id), zoonData, options);
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
                ComponentTrigger(this.id,'OnDblClick');
            },
        });
    }

    rebind(target) {
        this.target = target;

        for (let i = 0 ; i < this.events.length; i++) {
            let _event = this.events[i];
            _event();
        }
    }
}