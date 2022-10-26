class ZoonData {
    id;
    data;

    constructor(id, data) {
        this.id = id;
        this.data = data;

        componentsZoonDataMap.set(id, this);
    }

    getId() {
        return this.id
    }

    getData() {
        return this.data;
    }

    getDataByType() {
        if (this.data instanceof Function) {
            return this.data();
        } else {
            return this.data;
        }
    }

    FindIndex (indexName, fn) {
        if (this.hasData()) {
            for (let i = 0; i < this.getDataByType().length; i++) {
                if (fn(this.getDataByType()[i])) {
                    SetValue(indexName, i);
                    return false;
                }
            }
        }

        SetValue(indexName, -1);
    }

    /** index를 저장한다 */
    FindIndexArray (indexName, fn) {
        let arr = [];
        if (this.hasData()) {
            for (let i = 0; i < this.getDataByType().length; i++) {
                if (fn(this.getDataByType()[i])) {
                    arr.push(i);
                }
            }
        }

        SetValue(indexName, arr || '');
    }

    GetRow (index, jsonArray) {
        if (isEmpty(index)) index = 0;
        if (index == -1) index = 0;

        if (!this.hasData() || !this.hasDataByIndex(index)) {
            console.log("[GetRow]" + this.id + " 데이터가 존재하지 않아 Non Data로 설정");
            return;
        }

        if (isEmpty(jsonArray)) {
            console.log("[GetRow]" + this.id + " jsonArray 존재하지 않습니다.");
            return;
        }

        for (let i in jsonArray) {
            SetValue(jsonArray[i].key, this.getDataByType()[index][jsonArray[i].value]);
        }
    }

    GetRows (indexs, fieldArray) {
        let rowIndexs = indexs;

        if (isEmpty(rowIndexs)) {
            rowIndexs = Object.keys(this.getDataByType());
        }

        if (!this.hasData()) {
            console.log("[GetRows]" + this.id + " 데이터가 존재하지 않음");
            return;
        }

        for (let i = 0; i < fieldArray.length; i++) {
            let _field = fieldArray[i];

            let values = [];
            for (let j = 0; j < rowIndexs.length; j++) {
                const rowIndex = rowIndexs[j];

                values.push(this.getDataByType()[rowIndex][_field.value]);
            }

            SetValue(_field.key, values);
        }
    }

    AddRow(type, array) {
        if (isEmpty(array)) {
            console.log("[AddRow]" + this.id + " array 데이터가 존재하지 않음");
            return;
        }

        if (isEmpty(this.columnArr)) {
            console.log("[AddRow]" + this.id + " columnArr 데이터가 존재하지 않음");
            return;
        }

        let object = {};
        for (let i=0; i<array.length; i++) {
            const columName = this.columnArr[i]
            object[columName] = array[i];
        }

        if (!this.hasData()) {
            this.data = [];
        }
        this.data.push(object);
    }

    DeleteRow(index) {
        if (!this.hasData() && !this.hasDataByIndex(index)) {
            console.log("[DeleteRow]" + this.id + " 데이터가 존재하지 않음");
            return;
        }
        this.data.splice(index, 1);
    }

    GetRowCount (name) {
        SetValue(name, Object.keys(this.getDataByType()).length);
    }

    SetRows (rowArray, fieldArray) {
        for (let rowIndex=0; rowIndex<rowArray.length; rowIndex++) {
            this.SetRow(rowArray[rowIndex], fieldArray);
        }
    }

    SetRow (rowIndex, fieldArray) {
        if (isEmpty(rowIndex)) rowIndex = 0;
        for (let i = 0; i < fieldArray.length; i++) {
            const field = fieldArray[i];

            if (isNotEmpty(this.getDataByType()[rowIndex])) {
                this.getDataByType()[rowIndex][field.key.toUpperCase()] = field.value;
            }
        }
    }

    ReplaceQuery() {
        UpdateZoonStateForDBGrid(this.id, this.getDataByType());
    }

    GetWindowText () {

    }

    AddData () {

    }

    hasData() {
        return Object.keys(this.getDataByType()).length > 0;
    }

    hasDataByIndex(index) {
        return !isEmpty(this.getDataByType()[index]);
    }

    setData(data, isChangeUpdate=false) {
        this.data = data;

        if (isChangeUpdate) {
            UpdateZoonState(this.id, this.data);
        }
    }

    EmptyQuery() {
        this.data = [];
    }

    // 합계
    TotalIndexArray (indexName, fn) {
        let total = 0;
        if (this.hasData()) {
            for (let i = 0; i < this.getDataByType().length; i++) {
                if (this.getDataByType()[i][fn]) {
                    total += Number(this.getDataByType()[i][fn]);
                }
            }
        }

        let formatter = componentsMap.get(indexName).formatter;

        SetValue(indexName, total);

        if(formatter.mask != undefined && formatter.maskType != undefined){
            total = dateCommaMasked(formatter.maskType,formatter.mask, total);
        }

        return total;
    }
}