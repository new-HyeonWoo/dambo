class KaKaoSubForm extends Component {
    popup;
    func;

    constructor(id, data, options) {
        super(id, $('#' + id), data, options);

        try {
            this.func = (row) => { console.log(row) };
            this.popup = new daum.Postcode($.extend({
                theme: {
                    searchBgColor: "#0B65C8",
                    queryTextColor: "#FFFFFF"
                }
            }, {
                oncomplete: (data) => {
                    this.options.oncomplete(data);
                    this.func(data);
                }
            }));
        } catch (err) {
            console.log("KaKaoSubForm err : {}", err);
        }
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

    /** TODO: 팝업창 닫기 */
    HideSubForm() {
        // this.popup.close();
    }

    /** TODO: 팝업창 보여주기 */
    ShowSubForm (func) {
        this.func = func;
        this.popup.open();
    }
}