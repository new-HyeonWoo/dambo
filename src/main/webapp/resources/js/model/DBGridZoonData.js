class DBGridZoonData extends ZoonData {
    constructor(id, data, columnArr, conditionArr = []) {
        if (isNotEmpty(GetZoonData(id))) {
            return GetZoonData(id);
        }
        
        super(id, data);
        this.columnArr = columnArr;
        this.conditionArr = conditionArr;
    }

    getData() {
        if (isNotEmpty(this.conditionArr) && this.conditionArr.length > 0) {
            let isCondition = false;
            let arr = [];
            for(let i=0; i<this.data.length; i++) {
                let obj = this.data[i];
                for (let j=0; j<this.conditionArr.length; j++) {
                    let condition = this.conditionArr[j];
                    let condition1 = '\"\"';
                    let condition2 = '\"\"';

                    if (isNotEmpty(obj[condition.key])) {
                        condition1 = obj[condition.key]
                    }
                    if (isNotEmpty(GetValue(condition.value))) {
                        condition2 = GetValue(condition.value)
                    }

                    isCondition = eval(condition1 + condition.condition + condition2);
                }

                if (isCondition) {
                    arr.push(obj);
                }
            }
            return arr;
        } else {
            return this.data;
        }
    }
}