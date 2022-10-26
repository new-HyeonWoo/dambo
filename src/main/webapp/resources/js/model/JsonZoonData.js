class JsonZoonData extends ZoonData {
    constructor(id, data) {
        if (isNotEmpty(GetZoonData(id))) {
            return GetZoonData(id);
        }

        super(id, data);
    }

    getId() {
        return this.id;
    }

    getData() {
        return this.data;
    }

    setData(data, isChangeUpdate=false) {
        this.data = data;

        if (isChangeUpdate) {
            UpdateZoonState(this.getId(), this.getData());
        }
    }
}