class Component {
    id;
    target;
    data;
    options;

    constructor (id, target, data, options) {
        this.id = id;
        this.target = target;
        this.options = options;
        this.data = data;

        componentsMap.set(this.id, this);
        componentsDataMap.set(this.data.getId()
            , $.extend([], [this.id].concat(componentsDataMap.get(this.data.getId()))));
    }

    destroy () {
        this.#removeComponentsMap();
    }

    #removeComponentsMap() {
        componentsMap.delete(this.id);

        let i = 0
        for (const key in componentsDataMap.keys()) {
            if (key === id) {
                componentsDataMap.splice(i, 1)
            }
            i++;
        }
    }
}

