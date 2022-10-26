class ReactiveCombo extends Combo {
    constructor (id, refs, zoonData, options) {
        super(id, zoonData, options);

        if (!Array.isArray(refs)) {
            throw `ReactiveCombo refs값이 Array가 아님`;
        }

        for (let i = 0; i < refs.length; i++) {
            let refId = refs[i];
            componentsDataMap.set(refId
                , $.extend([], [id].concat(componentsDataMap.get(refId))));
        }
    }
}