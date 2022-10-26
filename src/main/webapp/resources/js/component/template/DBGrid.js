class DBGrid extends TemplateComponent {

    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }

    rebind(target) {
        this.target = target;

        if (!isEmpty(this.template())) {
            _render(this.target, this.template(), this.data.getData());

            this.after();
        }

        for (let i = 0 ; i < this.events.length; i++) {
            let _event = this.events[i];
            _event();
        }
    }

    template() {
        return $('#' + this.id + '_템플릿').html();
    }

    before() {
        Handlebars.registerPartial(`${this.id}_템플릿_ROW`, $(`#${this.id}_템플릿_ROW`).html());
    }

    after (trigger = true) {
        this.fieldComponentBind();
        this.customEventBind();
        this.initActiveClass();

        if (trigger) {
            ComponentTrigger(this.id, 'OnEditChanged');
        }
    }

    customEventBind () {
        this.rows().off().on('click focus', (e) => {
            let isActive = !$(e.currentTarget).hasClass('table-active') || isEmpty($(e.currentTarget).attr('class'))

            this.removeActiveClass();
            this.addTableActiveClass($(e.currentTarget));
            this.addFieldActiveClass($(e.target.closest('td')));

            if (isActive) {
                ComponentTrigger(this.id, 'OnSelectChange');
            }
        });

        this.rows().on('click', '.button-field', function() {
            $(this).trigger('OnButtonClick');
        });

        this.rows().on('click', function() {
            $(this).trigger('OnClick');
        });

        this.rows().on('dblclick', function() {
            $(this).trigger('OnDblClick');
        });

        this.rows().on('change', '.field', function() {
            $(this).trigger('OnEditChanged');
        });

        // this.rows().on('focusout', 'input.field', function() {
        //     $(this).trigger('OnEditChanged');
        // });

        this.rows().on('keyup', '.field', function(e) {
            if (e.keyCode === 13) {
                $(this).trigger('OnEnterKey');
            } else if (e.keyCode === 46) {
                $(this).trigger('OnDeleteKey');
            }
        });

        this.rows().on('focus focusout click', '.field', function() {
            $(this).trigger('OnValidate');
        });
    }

    fieldComponentBind () {
        this.rows().find('.check-field').each((index, target) => {
            this.#createCheck(index, target);
        });

        this.rows().find('.input-field').each((index, target) => {
            this.#createEdit(index, target);
        });

        this.rows().find('.combo-field').each((index, target) => {
            this.#createCombo(index, target);
        });
    }

    rows() {
        return this.target.find(`tbody > tr`);
    }

    row(index) {
        if (index == -1) {
            return this.rows().eq(this.curIndex())
        } else {
            return this.rows().eq(index);
        }
    }

    field(index, fieldName) {
        return this.row(index).find(`[fieldName=${fieldName}]`);
    }

    curIndex () {
        let _index = this.target.find('.table-active').index();
        if (_index === -1) {
            return 0;
        }

        return _index;
    }

    curField() {
        return this.target.find('.table-active').find('.field-active');
    }

    AddRow(jsonData) {
        if ($('#debugName').val() === `${this.id}.AddRow` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        let data = {index : this.rows().length};
        const compile = Handlebars.compile($('#' + this.id + '_템플릿_ROW').html());
        this.target.find('tbody').append(compile(data));

        this.fieldComponentBind();

        let jsonArray = [];
        Object.entries(jsonData).forEach(([key, value]) => {
           let obj = {};
           obj['key'] = key;
           obj['value'] = value;
           jsonArray.push(obj);
        });

        this.SetRow(data.index, jsonArray, false);

        this.customEventBind();
        // this.initActiveClass();
    }

    GetCurSel(name) {
        SetValue(name, this.curIndex());
    }

    GetModifyData (jsonArray) {
        if ($('#debugName').val() === `${this.id}.GetModifyData` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        let object = {};
        const row = this.rows();
        for (let i=0; i<row.length; i++) {

            for (let index=0; index<jsonArray.length; index++) {
                if (i == 0) {
                    object[`${jsonArray[index].value}`] = [];
                }
                const $field = this.field(i, jsonArray[index].value);
                object[`${jsonArray[index].value}`].push(this.GetFieldValue($field));
            }
        }

        for (let index=0; index<jsonArray.length; index++) {
            SetValue(jsonArray[index].key, object[`${jsonArray[index].value}`]);
        }
    }

    GetRowCount (name) {
        SetValue(name, this.rows().length || 0);
    }

    GetCurColName (name) {
        SetValue(name, this.curField().find('[fieldName]').attr('fieldName'));
    }

    GetRow (index, fieldArray) {
        if ($('#debugName').val() === `${this.id}.GetRow` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        for (let i = 0; i < fieldArray.length; i++) {
            let _field = fieldArray[i];

            const $field = this.field(index, _field.value);
            SetValue(_field.key, this.GetFieldValue($field) || '');

            // console.log(`${_field.key} => ${this.GetFieldValue($field) || ''}`)
        }
    }

    GetRows (rowArray, fieldArray) {
        if ($('#debugName').val() === `${this.id}.GetRows` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        let rowIndexs = []

        if (isEmpty(rowArray)) {
            this.rows().each(function(i, el){
                rowIndexs.push($(el).index());
            });
        } else {
            let _array = rowArray;
            if (!Array.isArray(_array)) {
                throw new TypeError("해당되는 값의 유형이 Array가 아닙니다.");
            }
    
            rowIndexs = rowIndexs.concat(_array);
        }

        
        for (let i = 0; i < fieldArray.length; i++) {
            let _field = fieldArray[i];

            let values = [];
            for (let j = 0; j < rowIndexs.length; j++) {
                const rowIndex = rowIndexs[j];
                const $field = this.field(rowIndex, _field.value);
                values.push(this.GetFieldValue($field));
            }

            SetValue(_field.key, values);
        }
    }

    /**
     * rowIndex의 개체를 선택합니다.
     * index 값이 -1이면 선택을 해제 합니다.
     */
    SetCurSel(index) {

        if (index == -1) {
            let _trigger = this.rows().find('.table-active').length > 0;
            this.removeActiveClass();

            if (_trigger) {
                ComponentTrigger(this.id, 'OnSelectChange');
            }
        } else {
            let $target = this.row(index);
            let _trigger = !$target.hasClass('table-active');
            this.removeActiveClass();
            this.addTableActiveClass($target);

            if (_trigger) {
                ComponentTrigger(this.id, 'OnSelectChange');
            }
        }
    }

    SetEditFocus(index, name) {
        this.field(index+1, name).focus();
    }

    SetCurSelCol() {

    }

    SetModifyFlag (modifyFlag, rowIndex) {
        SetValue(modifyFlag, rowIndex);
    }

    /** 개체 필드에 값을 셋팅한다. */
    SetRows (rowArray, fieldArray, isOnEditChanged=true) {
        if ($('#debugName').val() === `${this.id}.SetRows` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        for (let rowIndex=0; rowIndex<rowArray.length; rowIndex++) {
            this.SetRow(rowArray[rowIndex], fieldArray, isOnEditChanged);
        }
    }

    /** 개체 필드에 값을 셋팅한다. */
    SetRow (rowIndex, fieldArray, isOnEditChanged=true) {
        if ($('#debugName').val() === `${this.id}.SetRow` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        for (let i=0; i<fieldArray.length; i++) {
            let field = fieldArray[i];
            const $field = this.field(rowIndex, field.key);
            this.SetFieldValue($field, field.value, isOnEditChanged);
        }
    }

    FindIndex (indexName, fn) {
        if ($('#debugName').val() === `${this.id}.FindIndex` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        let $tr = this.rows();
        for (let i=0; i<$tr.length; i++) {
            if (fn(this.getTableToObject()[i])) {
                SetValue(indexName, i);
                return false;
            }
        }

        SetValue(indexName, -1);
    }

    FindIndexArray (indexName, fn) {
        if ($('#debugName').val() === `${this.id}.FindIndexArray` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        let arr = [];
        let $tr = this.rows();
        for (let i=0; i<$tr.length; i++) {
            if (fn(this.getTableToObject()[i])) {
                arr.push(i);
            }
        }

        SetValue(indexName, arr || '');
    }

    SortField (fieldName, sortType) {
        let array = this.getTableToObject();
        array.sort((a, b) => {
            if (sortType == 1) {
                return Number(a[fieldName]) - Number(b[fieldName]);
            } else {
                return Number(b[fieldName]) - Number(a[fieldName]);
            }
        });

        _render(this.target, this.template(), array);

        this.after(false);
    }

    DeleteRow (index) {
        if ($('#debugName').val() === `${this.id}.DeleteRow` && isNotEmpty($('#debugName').val())) {
            console.log(`${this.id} 디버깅 시작`)
            debugger;
        }

        this.row(index).remove();
        this.addTableActiveClass(this.row(this.rows().length - 1));
    }

    EnableEditing (fieldArray) {
        const row = this.rows();
        for (let i=0; i<row.length; i++) {
            for (let j=0; j<fieldArray.length; j++) {
                let field = fieldArray[j];
                const $field = this.field(i, field.key);
                if ($field.hasClass('combo-field')) {
                    field.value == 1 ? $field.find('select').attr('disabled', false) : $field.find('select').attr('disabled', true);
                } else {
                    field.value == 1 ? $field.attr('disabled', false) : $field.attr('disabled', true);
                }
            }
        }
    }

    NextTab () {
        this.target.trigger('OnValidate');
    }

    GetFieldComponent ($field) {
        if ($field.hasClass('check-field')) {
            return GetComponent($field.attr('id'));
        } else if ($field.hasClass('input-field')) {
            return GetComponent($field.attr('id'));
        } else if ($field.hasClass('combo-field')) {
            return GetComponent($field.attr('id'));
        } else {
            return GetComponent($field.attr('id'));
        }
    }

    GetFieldValue ($field) {
        if ($field.hasClass('check-field')) {
            return GetValue($field.attr('id'));
        } else if ($field.hasClass('input-field')) {
            return GetValue($field.attr('id'));
        } else if ($field.hasClass('combo-field')) {
            return GetValue($field.attr('id'));
        } else {
            return $field.val();
        }
    }

    SetFieldValue ($field, value, trigger) {
        if ($field.hasClass('check-field')) {
            SetValue($field.attr('id'), value, trigger);
        } else if ($field.hasClass('input-field')) {
            SetValue($field.attr('id'), value, trigger);
        } else if ($field.hasClass('combo-field')) {
            SetValue($field.attr('id'), value, trigger);
        } else {
            $field.val(value);
        }
    }

    excel(excelName){
        let tableData = document.getElementById(this.id).childNodes[1];

        var wb = XLSX.utils.book_new();

        var ws = XLSX.utils.table_to_sheet(tableData);

        let widthArr = new Array();

        for(let i=0; i < this.target.find('thead th').length; i++){
            let widthObj = new Object();
            let classList = this.target.find('thead th')[i].classList[0];
            let widthData = classList.substring(classList.indexOf('w')+2, classList.indexOf('p')-1);
            widthObj['wch'] = Number(widthData);
            widthArr.push(widthObj);
        }

        ws["!cols"] = widthArr;

        XLSX.utils.book_append_sheet(wb, ws, excelName);

        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
        
        saveAs(new Blob(
            [s2ab(wbout)
        ],{type:"application/octet-stream"}), excelName+'.xlsx');  

        function s2ab(s){
            var buf = new ArrayBuffer(s.length); 
            var view = new Uint8Array(buf); 
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;    
        }

    }

    // DBGrid Footer 히든 유무 -1 히든 0풀림
    hiddenfooter(index){
        if (index == -1) {
            this.target.find('tfoot').attr('style','display:');
        } else {
            this.target.find('tfoot').attr('style','display:none');
        }
    }

    initActiveClass() {
        // let $target = $(this.row(0));
        this.SetCurSel(0);
        // let isActive = !$target.hasClass('table-active') || isEmpty($target.attr('class'))
        //
        // if (isActive) {
        //     this.removeActiveClass();
        //     this.addTableActiveClass($target);
        //     this.target.trigger('OnSelectChange');
        // }
    }

    removeActiveClass () {
        this.rows().removeClass('table-active');
        this.rows().find('td').removeClass('field-active');
    }

    addTableActiveClass ($target) {
        $target.addClass('table-active');
    }

    addFieldActiveClass ($target) {
        $target.addClass('field-active');
    }

    getTableToObject(index) {
        let objArr = [];
        this.rows().each((i, tr) => {
            let obj = {};
            const fields = $(tr).find('.field');
            fields.each((j, field) => {
                let $field = $(field);
                let fieldName = $field.attr('fieldName');
                obj[fieldName] = this.GetFieldValue($field);
            });
            objArr.push(obj);
        });
        return objArr;
    }

    #createCombo (index, target) {
        if (componentsMap.get(target.id) instanceof Component) {
            return;
        }

        const format = JSON.parse(target.dataset.format);
        const value = target.dataset.value;

        let zoonData = '';
        if (format.id == '직접입력') {
            let dataArr = [];
            let keyArr = format.keys.split(';');
            let valueArr = format.values.split(';');
            for(let i=0; i<keyArr.length; i++) {
                let obj = {};
                obj[format.text] = keyArr[i];
                obj[format.value] = valueArr[i];
                dataArr.push(obj);
            }
            zoonData = new JsonZoonData(format.id, dataArr);
        } else {
            zoonData = new JsonZoonData(format.id, {});
        }

        new DBGridCombo(target.id, zoonData, {
            isShow: true,
            isEnable: isEnable(target.dataset.isEnable),
            format: {
                text: format.text,
                value: format.value,
                index: '',
            },
        }).on('OnChange', () => {
            ComponentTrigger(this.id, 'OnEditChanged');
        });

        if (isNotEmpty(value)) {
            SetValue(target.id, value, false);
        }
    }

    #createEdit (index, target) {
        if (componentsMap.get(target.id) instanceof Component) {
            return;
        }

        const options = JSON.parse(target.dataset.options);
        new MaskEdit(target.id, new JsonZoonData(target.id, {}), {
            isShow: true,
            isEnable: !$(target).hasClass('none-field'),
            mask: options.mask || '',
            maskType: options.maskType || '',
            rounds: true,
        }).on('OnChange', (e) => {
            ComponentTrigger(this.id, 'OnEditChanged');
        });

        if (isNotEmpty(target.value)) {
            SetValue(target.id, target.value, false);
        }
    }

    #createCheck (index, target) {
        if (componentsMap.get(target.id) instanceof Component) {
            return;
        }

        const options = JSON.parse(target.dataset.options);
        const zoonData = new JsonZoonData(target.id, {
            on: options.on,
            off: options.off,
            value: target.dataset.value || '',
            isGroup: options.isGroup || ''
        });
        new DBGridCheck(target.id, zoonData, {
            isShow: true,
            isEnable: isEnable(target.dataset.isEnable)
        });
    }
}
