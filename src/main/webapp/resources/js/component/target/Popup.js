export default class TargetPopup {
    constructor(url, options) {
        this.popup = window.open(url, options);
    }

    getPopup() {
        this.popup;
    }

    getValue() {
        this.popup.val();
    }

    setValue(value) {
        this.popup.val(value);
    }
}