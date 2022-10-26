class TreeView extends TemplateComponent {
    #selected;
    #children;
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }

    template () {
        return `<div id="sample-tree">
                </div>`;
    }


    after() {
        var arr = [];
        for (let j in this.data.getData()) {
            let node = this.data.getData()[j];

            var level = 0;
            for (let i = 0; i < this.options.bind.length; i++) {
                let bind = this.options.bind[i];
                
                if (isEmpty(node[bind.key])) {
                    break;
                }

                level++;
            }
            
            var curItem = this.options.bind[level - 1];
            var parentItem = this.options.bind[level - 2];
            
            arr.push({ "id" : node[curItem.key], "parent" : isEmpty(parentItem) ? '#' : node[parentItem.key], "text" : node[curItem.value]});
        }
        
        $('#sample-tree').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                },
                'data' : arr
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder text-warning"
                },
                "file" : {
                    "icon" : "fa fa-file  text-warning"
                }
            },
            "plugins": ["types"]
        });

        $('#sample-tree').on("changed.jstree", (e, data) => {
            this.#selected = data.selected;
            this.#children = data.instance.get_node(data.selected[0]).children;
            this.target.trigger('OnDblClick');
        });
    }

    getValue () {
        return this.#selected;
    }

    setValue (value) {
        // this.target.val(value);
    }

    HasChildren (name) {;
        SetValue(name, Object.keys(this.#children).length > 0 ? 1 : 0);
    }
}

