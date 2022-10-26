const gridHelper = {

    init : function() {
        this.registerHelper();
        return true;
    },

    registerHelper : function() {
        Handlebars.registerHelper('highlighting', (text) => {
            if (!isEmpty(text)) {
                return new Handlebars.SafeString(`
					<span class="input-group-text bg-transparent fs-10 text-danger fw-bolder border-0 p-0">${text}</span>
				`);
            }
        });

        Handlebars.registerHelper('notField', (options) => {
            const hash = options.hash;
            const jsonOptions = JSON.parse(hash.options);
            const id = getRandomKey(hash.name, hash.index);

            let text = hash.value;

            if(jsonOptions.mask != undefined && jsonOptions.maskType != undefined){
                text = dateCommaMasked(jsonOptions.maskType,jsonOptions.mask, text);
            }

            const source = `
                ${text}
            `;

            const html = Handlebars.compile(source)(options.hash);

            return new Handlebars.SafeString(html);
        });

        Handlebars.registerHelper('noneField', (options) => {
            const hash = options.hash;
            const jsonOptions = JSON.parse(hash.options);
            const id = getRandomKey(hash.name, hash.index);

            const source = `
                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 ${jsonOptions.textType} field input-field none-field"
                        id="${id}" 
                        data-is-enable="{{isEnable}}"
                        fieldName="{{name}}" 
                        value="{{value}}"
                        data-options="{{options}}" 
                    />`;

            const html = Handlebars.compile(source)(options.hash);

            return new Handlebars.SafeString(html);
        });

        Handlebars.registerHelper('maskField', (options) => {
            const hash = options.hash;
            const jsonOptions = JSON.parse(hash.options);
            const id = getRandomKey(hash.name, hash.index);

            const source = `
                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 ${jsonOptions.textType} field input-field mask-field"
                        id="${id}"
                        data-is-enable="{{isEnable}}"
                        fieldName="{{name}}" 
                        value="{{value}}"
                        data-options="{{options}}" 
                    />`;

            const html = Handlebars.compile(source)(options.hash);

            return new Handlebars.SafeString(html);
        });

        Handlebars.registerHelper('inputField', (options) => {
            const hash = options.hash;
            const jsonOptions = JSON.parse(hash.options);
            const id = getRandomKey(hash.name, hash.index);

            const source = `
                    <input type="text" class="form-control form-control-transparent fs-7 py-0 px-2 ${jsonOptions.textType} field input-field"
                        id="${id}"
                        data-is-enable="{{isEnable}}"
                        fieldName="{{name}}" 
                        value="{{value}}"
                        data-options="{{options}}"  
                    />`;

            const html = Handlebars.compile(source)(options.hash);

            return new Handlebars.SafeString(html);
        });

        Handlebars.registerHelper('comboField', (options) => {
            const hash = options.hash;
            let jsonStr = JSON.stringify(JSON.parse(hash.query));
            const id = getRandomKey(hash.name, hash.index);

            const source = `<div class="field combo-field" 
                                id="${id}"
                                fieldName="{{name}}" 
                                data-value="{{value}}"
                                data-format=${jsonStr}
                                data-is-enable="{{isEnable}}"                           
                            ></div>`;

            const html = Handlebars.compile(source)(options.hash);

            return new Handlebars.SafeString(html);
        });
        Handlebars.registerHelper('checkField', (options) => {
            const hash = options.hash;
            const jsonOptions = JSON.parse(hash.options);
            const id = getRandomKey(hash.name, hash.index);

            const source = `
                <div class="form-check form-check-custom form-check-warning form-check-solid form-check-sm justify-content-center">
                    <input class="form-check-input field check-field" type="checkbox"
                        id="${id}"
                        data-is-enable="{{isEnable}}"
                        fieldName="{{name}}"  
                        data-value="{{value}}"
                        data-options="{{options}}"
                    />
                </div>`;

            const html = Handlebars.compile(source)(options.hash);

            return new Handlebars.SafeString(html);
        });

        Handlebars.registerHelper('buttonField', (options) => {
            const hash = options.hash;
            const jsonOptions = JSON.parse(hash.options);
            const iconType = 'search' || jsonOptions.iconType;

            const source = `
                <a href="javascript:void(0)" class="button field button-field">
                        <span class="svg-icon svg-icon-primary svg-icon-2" name="{{name}}_{{index}}">
                        {{#ifEquals '${iconType}' 'search'}}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor"></path>
                            </svg>
                        {{/ifEquals}}

                        {{#ifEquals '${iconType}' 'button'}}
                            <!-- 검색버튼, 파일첨부버튼 타입별 분기 필요 -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor"></path>
                                <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor"></rect>
                                <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor"></rect>
                                <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor"></rect>
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                            </svg>
                        {{/ifEquals}}
                        </span>
                </a>`;

            const html = Handlebars.compile(source)(options.hash);

            return new Handlebars.SafeString(html);
        });

        Handlebars.registerHelper('hasValue', (value, options) => {
            return (!isEmpty(value)) ? options.fn(this) : options.inverse(this);
        });

        Handlebars.registerHelper('ifEquals', (arg1, arg2, options) => {
            return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
        });

        Handlebars.registerHelper('isDisable', (value, options) => {
            if (value === '0' || value === 0) {
                return options.fn(this);
            }
            return options.inverse(this);
        });
    }

}.init();