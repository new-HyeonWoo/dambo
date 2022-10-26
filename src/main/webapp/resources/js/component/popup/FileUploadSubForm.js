class FileUploadSubForm extends Component {
    subform;

    constructor(id, data, options) {
        super(id, $('#' + id), data, options);

        this.func = (row) => { console.log(row) };
    }

    /** TODO: 팝업창 닫기 */
    HideSubForm() {
        if (!isEmpty(this.subform)) {
            this.subform.close();
        }
    }

    /** TODO: 팝업창 보여주기 */
    ShowSubForm (func) {
        this.subform = window.open('/view/files/upload?kindCode=' + GetValue('담보종류'), '_blank',
            'toolbar=no,location=no,status=yes,resizable=no,scrollbars=yes,width=400,height=300');
        this.subform.oncompleate = (data) => {
            func(data);
        };
    }
}