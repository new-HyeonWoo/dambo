class SubForm extends Component {
    url;
    subform;

    constructor(id, zoonData, url, options) {
        super(id, $('#' + id), zoonData, options);

        this.url = url;
    }

    /** TODO: 팝업창 닫기 */
    HideSubForm() {
        if (!isEmpty(this.subform)) {
            this.subform.close();
        }
    }

    /** TODO: 팝업창 보여주기 */
    ShowSubForm () {
        this.subform = window.open(this.url, '_blank',
            'toolbar=no,location=no,status=yes,resizable=no,scrollbars=yes,width=800,height=800');
    }

}

