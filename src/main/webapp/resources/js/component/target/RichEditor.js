class RichEditor extends TargetComponent {
    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
        this.#load();
        this.#updateOptions();
    }

    #load () {
        let toolbar;
        if (this.options.isEnable) {
            toolbar = [
                ['fontname', ['fontname']],
                ['fontsize', ['fontsize']],
                ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
                ['color', ['forecolor','color']],
                ['table', ['table']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['insert',['table','hr', 'picture','link']],
            ]
        } else {
            toolbar = false;
        }

        this.target.summernote({
            height: this.options.height || 200,
            minHeight: null,
            maxHeight: null,
            focus: true,
            lang: "ko-KR",
            toolbar: toolbar,
            fontNames: ['맑은 고딕','굴림','돋움','바탕','궁서','NotoSansKR','Arial','Courier New','Verdana','Tahoma','Times New Roamn'],
            fontSizes: ['8','9','10','11','12','14','18','24','36'],
        });
    }

    rebind (target) {
        this.target = target;
        this.#load();
        this.#updateOptions();
    }

    #updateOptions () {
        this.options.isEnable ? this.target.summernote('enable') : this.target.summernote('disable');
    }

    getValue () {
        return this.target.summernote('code');
    }

    setValue (value) {
        // this.target.summernote('insertText', value.replace(/<[^>]*>?/g, ''));
        this.target.summernote('code', this.getValue() + value);
    }

    SetFontSize (size) {
        this.target.summernote('fontSize', size);
    }

    SetRichEditorRTF (rtfText) {
        this.target.summernote('code', rtfText);
    }

    GetRichEditorRTF (id) {
        SetValue(id, this.target.summernote('code'));
    }
}