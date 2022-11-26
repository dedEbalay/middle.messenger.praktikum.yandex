import Block from "../Block";

type inputType = {
    data: {
        id: string,
        classList: string[],
        placeholder: string
    }
}

export default class Input extends Block {
    elemValue: string;
    errorStatus: boolean;

    constructor(props: inputType) {
        super('input', props);
        this.elemValue = ''
        this.errorStatus = false
    }

    protected setValue(prop:string):void {
        this.elemValue = prop
    }

    protected setErrorStatus(prop: boolean): void {
        this.errorStatus = prop
    }

    public getValue():string {
        return this.elemValue
    }

    _createDocumentElement(): HTMLInputElement {
        const newElement: HTMLInputElement = document.createElement('input'),
              classes:string[] = this.props.data.classList,
              id: string = this.props.data.id,
              placehold: string = this.props.data.placeholder;
        classes.forEach((item:string) => {
            newElement.classList.add(item)
        })
        newElement.id = id
        newElement.placeholder = placehold
        newElement.name = id
        return newElement
    }

    _render(): void {
        this._addEvent()
        const block = this.render()
    }

    render(): string {
        const classes = this.props.data.classList.join(' ')
        return  `<input id=${this.props.data.id} class=${classes} placeholder=${this.props.data.placeholder} type="text"></input>`
    }

    getStatus():boolean {
        return this.errorStatus
    }

    _addEvent(): void {
        this.getContent().addEventListener('change', (e:any) =>  {
            this.setValue(e.target.value)        
        });
        this.getContent().addEventListener('blur', (e:any) => {         //  добавление валидации на 'blur'
            let refValue: string =  this.getValue()
            const errorClass: string = 'error',
                  errorClassOnTop: string = 'error--top'
            const checkClass: boolean = this.element.classList.contains(errorClass)
            const checkErrorAndAddErrorClass = (errorMessage:string): void => {
                if (document.querySelector(`#${this.props.data.id}`)?.nextElementSibling) {
                    if (document.querySelector(`#${this.props.data.id}`)?.nextElementSibling?.classList.contains('error__message')) {
                        document.querySelector(`#${this.props.data.id}`)?.nextElementSibling?.remove()
                    }
                }
                
                this.setErrorStatus(true)
                const errorElement = document.createElement('div')
                errorElement.innerText = errorMessage
                errorElement.classList.add('error_message')
                if (this.props.data.id === 'message') {
                    if (document.querySelector(`#${this.props.data.id}`)?.previousElementSibling) {
                        if (document.querySelector(`#${this.props.data.id}`)?.previousElementSibling?.classList.contains('error_message')) {
                            document.querySelector(`#${this.props.data.id}`)?.previousElementSibling?.remove()
                        }
                    }
                    errorElement.classList.add(errorClassOnTop)
                    this.element.before(errorElement)
                } else {
                    this.element.after(errorElement)
                }
                if (!checkClass) {
                    this.element.classList.add(errorClass)
                }
            }
            const checkErrorAndRemoveErrorClass = ():void => {
                if (this.props.data.id === 'message') {
                    if (document.querySelector(`#${this.props.data.id}`)?.previousElementSibling) {
                        if (document.querySelector(`#${this.props.data.id}`)?.previousElementSibling?.classList.contains('error_message')) {
                            document.querySelector(`#${this.props.data.id}`)?.previousElementSibling?.remove()
                        }
                    }
                } else {
                    if (document.querySelector(`#${this.props.data.id}`)?.nextElementSibling) {
                        if (document.querySelector(`#${this.props.data.id}`)?.nextElementSibling?.classList.contains('error_message')) {
                            document.querySelector(`#${this.props.data.id}`)?.nextElementSibling?.remove()
                        }
                    }
                }
                if (checkClass) {
                    this.setErrorStatus(false)
                    this.element.classList.remove(errorClass)
                }
            }
            switch (this.props.data.id) {
                case 'first_name':          // валидация на поля 'first_name' и 'second_name', условия: отсутствие цифр, спецсимволов, пробелов; допустимо наличие дефиса, должны начинаться с заглавной буквы
                case 'second_name':
                    refValue = refValue.replace(/[a-zа-яё\-]/gi, '')            //  regex проверки 'first_name' & 'second_name'
                    function startsWithCapital(str: string){            //  функция проверки на заглавную букву в начале строки. При начале на букву в нижнем регистре, возвращает false
                        return str.charAt(0) === str.charAt(0).toUpperCase()
                    }
                    if (refValue.length > 0) {
                        checkErrorAndAddErrorClass('Обнаружены недопустимые символы')
                        break
                    } else if (!startsWithCapital(this.getValue())) {
                        checkErrorAndAddErrorClass('Имя должно начинаться с заглавной буквы')
                        break
                    } else {
                        checkErrorAndRemoveErrorClass()
                        break
                    }
                case 'login':
                    refValue = refValue.replace(/[\d]/gi, '')
                    if (refValue.length == 0 && this.getValue().length != 0) {
                        checkErrorAndAddErrorClass('Логин не может состоять из одних цифр')
                        break
                    } else {
                        refValue = this.getValue()
                        refValue = refValue.replace(/[a-z\-\d\_]/gi, '')            //  regex проверки 'login'
                        if (this.getValue().length < 3 || this.getValue().length > 20) {
                            checkErrorAndAddErrorClass('Длина логина не может быть короче 3 или длинее 20 символов')
                            break
                        } else if (refValue.length > 0) {
                            checkErrorAndAddErrorClass('Обнаружены недопустимые символы')
                            break
                        } else {
                            checkErrorAndRemoveErrorClass()
                            break
                        }
                    }
                case 'email':
                    refValue = refValue.replace(/[a-z\d\-\_\@\.]/gi, '')
                    if (refValue.length > 0) {
                        checkErrorAndAddErrorClass('Обнаружены недопустимые символы')
                        break
                    } else {
                        refValue = this.getValue()
                        refValue = refValue.replace(/[^@\.]/gi, '')
                        if (!refValue.includes('@.')) {
                            checkErrorAndAddErrorClass('Почта должна содержать @ и .')
                            break
                        } else {
                            checkErrorAndRemoveErrorClass()
                            break
                        }
                    }
                case 'password':
                    function checkCapitalLetter(str: string): boolean {
                        const stringWithoutDigitals = str.replace(/[^a-z]/gi, '')
                        for (let char of stringWithoutDigitals) {
                            let capitalChar = char.toUpperCase()
                            if (char === capitalChar) {         
                                return true
                            }
                        }
                        return false
                    }
                    const additiveValue = refValue.replace(/[^\d]/gi, '')
                    if (refValue.length < 8 || refValue.length > 40) {
                        checkErrorAndAddErrorClass('Пароль не может быть короче 8 или длинее 40 символов')
                        break
                    } else if (additiveValue.length == 0 || !checkCapitalLetter(refValue)) {
                        checkErrorAndAddErrorClass('Пароль должен содержать, по меньшей мере, 1 цифру и заглавную букву')
                        break
                    } else {
                        checkErrorAndRemoveErrorClass()
                        break
                    }
                case 'phone':
                    const additiveValue2 = refValue.replace(/[^+]/gi, '')
                    refValue = refValue.replace(/[\d\+]/gi, '')
                    if (refValue.length > 0 || additiveValue2.length > 1) {
                        checkErrorAndAddErrorClass('Телефон должен состоять только из цифр(может содержать "+" в начале)')
                        break
                    } else if (additiveValue2.length == 1  && !this.getValue().startsWith('+')) {
                        checkErrorAndAddErrorClass('"+" должен стоять в начале номера телефона')
                        break
                    } else {
                        checkErrorAndRemoveErrorClass()
                        break
                    }
                case 'message':
                    if (this.getValue().length < 1) {
                        checkErrorAndAddErrorClass('Сообщение не может быть пустым')
                        break
                    } else {
                        checkErrorAndRemoveErrorClass()
                        break
                    }
            }
        })
    }
}
