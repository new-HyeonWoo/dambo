class TreeViewTest extends TemplateComponent {
    constructor(id, data, options) {
        var arr = [];
        for (let j = 0; j < data.getData().length; j++) {
            let node = data.getData()[j];

            var level = 0;
            for (let i = 0; i < options.bind.length; i++) {
                let bind = options.bind[i];
                
                if (isEmpty(node[bind.key])) {
                    break;
                }

                level++;
            }
            
            var curItem = options.bind[level - 1];
            var parentItem = options.bind[level - 2];
            arr.push({ "id" : node[curItem.key], "parent" : isEmpty(parentItem) ? '#' : node[parentItem.key], "text" : node[curItem.value]});
        }

        console.log(arr);
        data.setData(arr, false);

        super(id, $('#' + id), data, options);
    }

    template () {
        return `<div id="sample-tree">
                </div>`;
    }


    after() {
        console.log('after');
        
        $('#sample-tree').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                },
                'data' : this.data.getData()
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
        
        // // handle link clicks in tree nodes(support target="_blank" as well)
        // $('#kt_docs_jstree_customicons').on('select_node.jstree', function(e,data) {
        //     var link = $('#' + data.selected).find('a');
        //     if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
        //         if (link.attr("target") == "_blank") {
        //             link.attr("href").target = "_blank";
        //         }
        //         document.location.href = link.attr("href");
        //         return false;
        //     }
        // });
    }

    getValue () {
        return this.target.val();
    }

    setValue (value) {
        this.target.val(value);
    }

    /**
     * 현재 선택된 아이템의 자식 유무 (1: true, 0: false)
     * @param name 
     */
    HasChildren (name) {
        SetValue(name, 0)
    }
}

