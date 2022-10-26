class FunctionZoonData extends ZoonData {
    constructor(id, data) {
        if (!data instanceof Function) {
            throw `FunctionZoonData fn이 함수타입이 아닙니다.`;
        }
        if (isNotEmpty(GetZoonData(id))) {
            return GetZoonData(id);
        }

        super(id, data);
    }

    getId() {
        return this.id;
    }

    getData() {
        return this.data();
    }

    setData(data, isChangeUpdate=false) {
        if (isChangeUpdate) {
            UpdateZoonState(this.getId(), this.getData());
        }
    }
}