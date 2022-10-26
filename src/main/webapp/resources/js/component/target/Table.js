class Table extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }
}

