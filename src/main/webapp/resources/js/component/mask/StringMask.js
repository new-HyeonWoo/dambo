class StringMask {
    #decimal;

    constructor(targetId, mask, maskType, rounds=false) {
        this.targetId = targetId;
        this.mask = mask;
        this.maskType = maskType;
        this.rounds = rounds;
        this.$target = $('#' + this.targetId);

        this.#mask();
    }

    #mask() {
        if (this.maskType === "날짜") {
            this.$target.datepicker({
                dateFormat: 'yy-mm-dd',
                changeYear: true,
                changeMonth: true,
                language: 'kr',
                autoclose: true,
                todayHighlight: true,
                monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                showButtonPanel: true,
                currentText: '오늘 날짜',
                closeText: '닫기',
                // showAnim: "slide",
                showMonthAfterYear: true,
                onSelect: function(dataText, inst) {
                    $(this).trigger('change');
                    $(this).trigger('focusout');

                    $(this).trigger('OnChange');
                    $(this).trigger('OnLostFocus');
                }
            }).inputmask('yyyy-mm-dd', {
                autoUnmask: true,
                showMaskOnHover: false,
                showMaskOnFocus: false,
            });
        } else if (this.maskType === "문자") {
            this.$target.attr('maxlength', this.mask.length);
        } else if (this.maskType === "숫자") {
            if (this.mask.includes(';')) {
                const [minus, maxLength, mask] = this.mask.split(";");
                const [comma, decimal] = mask.split('.');

                this.#decimal = decimal;

                if (this.#isIntegerMask()) {
                    this.$target.inputmask('numeric', {
                        // integerDigits: Number(maxLength),\
                        // allowMinus: isNotEmpty(minus),
                        digits: 0,
                        groupSeparator: ",",
                        autoGroup: true,
                        autoUnmask: true,
                        digitsOptional: true,
                        // placeholder: '0',
                        showMaskOnHover: false,
                        showMaskOnFocus: false,
                        greedy: false
                    });
                } else {
                    this.$target.inputmask('decimal', {
                        // integerDigits: Number(maxLength),
                        // allowMinus: isNotEmpty(minus),
                        digits: decimal.length,
                        groupSeparator: ',',
                        autoGroup: true,
                        digitsOptional: false,
                        autoUnmask: true,
                        // placeholder: '0',
                        showMaskOnHover: false,
                        showMaskOnFocus: false,
                    });
                }
            } else {
                this.$target.inputmask("numeric", {
                    integerDigits: this.mask.length,
                    autoUnmask: true,
                    showMaskOnHover: false,
                    showMaskOnFocus: false,
                });
            }

        }
    }

    #isIntegerMask () {
        const [minus, maxLength, mask] = this.mask.split(";");
        const [comma, decimal] = mask.split('.');
        if (isEmpty(decimal)) {
            return true;
        } else {
            return false;
        }
    }

    apply (value) {
        if (isEmpty(value)) {
            return value;
        }
        if (this.maskType === "날짜") {
            return value;
        } else if (this.maskType === "문자") {
            return value;
        } else if (this.maskType === "숫자") {
            let numDigits = isEmpty(this.#decimal) ? 0 : this.#decimal.length;
            if (this.rounds) {
                return Round(Number(value), numDigits);
            } else {
                return Truncate(Number(value), numDigits);
            }
        } else {
            return value;
        }
    }

    unapply (value) {
        if (isEmpty(value)) {
            return value;
        }

        if (this.maskType === "날짜") {
            return value;
        } else if (this.maskType === "문자") {
            return value;
        } else if (this.maskType === "숫자") {
            return value;
        } else {
            return value;
        }
    }


}