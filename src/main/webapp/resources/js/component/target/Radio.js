class Radio extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }

    child() {
        return document.getElementsByName(this.id);
    }

    getValue () {
        let childId = '';
        for(let i = 0; i < this.child().length; i++){
            if( this.child()[i].checked == true){
                childId = this.child()[i].value;
            }
        }           
        return childId;
    }

    setValue (value) {
        for(let i = 0; i < this.child().length; i++){
            if(value == ''){
                this.child()[0].checked = true;
            }else if(value == this.child()[i].value){
                this.child()[i].checked = true;
            }
        }
    }

    after() {

    }
}

