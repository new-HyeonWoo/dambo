class Tab extends TargetComponent {
    constructor(id, zoonData, options) {
        super(id, $('#' + id), zoonData, options);
    }

    #curIndex() {
        return this.target.find('.nav-item .nav-link.active').closest('li').index();
    }

    #items() {
        return this.target.find('.nav-item');
    }
    #item(index) {
        if (index === -1) {
            index = this.#curIndex();
        }

        return this.#items().eq(index);
    }

    #links() {
        return this.target.find('a.nav-link');
    }
    #link(index) {
        if (index === -1) {
            index = this.#curIndex();
        }

        return this.#links().eq(index);
    }

    after() {
        this.customEventBind();
    }

    customEventBind () {
        this.target.on({
            change : function () {
                $(this).trigger('OnChange');
            },
            click : function () {
                $(this).trigger('OnChange');
            }
        });
    }

    /** 현재 선택된 탭의 인덱스를 변수에 저장 */
    GetCurSel (variable) {
        SetValue(variable, this.#curIndex());
    }

    /** TODO: 탭 선택 */
    SetCurSel (index) {
        this.#link(index).trigger('click');
    }

    /** 탭 이동 */
    SetCurSelChange (index) {
        var changeArr =[];
        $("#"+this.id+" li").each(function( index, element ) {
            changeArr.push(element);
        });
        for(let i = 0; i < changeArr.length; i++){
            if(i == index){
                changeArr[i].childNodes[1].classList.add('active');
                let tabChildId = changeArr[i].childNodes[1].href.substr(changeArr[1].childNodes[1].href.indexOf('#')+1);
                document.getElementById(tabChildId).classList.add('show');
                document.getElementById(tabChildId).classList.add('active');
            }else{
                changeArr[i].childNodes[1].classList.remove('active');
                let tabChildId = changeArr[i].childNodes[1].href.substr(changeArr[1].childNodes[1].href.indexOf('#')+1);
                document.getElementById(tabChildId).classList.remove('show');
                document.getElementById(tabChildId).classList.remove('active');
            }
        }
    }

    /** TODO: 탭 활성화 여부 */
    EnableTab (index, isEnable) {
        let $link;
        if (index < 0) {
            $link = this.#links();
        } else {
            $link = this.#link(index);
        }

        $link.attr('disabled', isEnable === 0);
    }

    SetItemText (index, str) {
        SetValue(str, index);
    }
}

