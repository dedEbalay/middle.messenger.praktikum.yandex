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

    constructor(props: inputType) {
        super('input', props);
        this.elemValue = ''
    }

    protected setValue(prop:string):void {
        this.elemValue = prop
    }

    public getValue():string {
        return this.elemValue
    }

    _render(): void {
        this._addEvent()
        const block = this.render()
    }

    render() {
        const classes = this.props.data.classList.join(' ')
        return  `<input id=${this.props.data.id} class=${classes} placeholder=${this.props.data.placeholder} type="text"></input>`
    }

    _addEvent(): void {
        this.getContent().addEventListener('change', (e:any) =>  {
            this.setValue(e.target.value)        
        });
        this.getContent().addEventListener('blur', (e:any) => {         //  добавление валидации на 'blur'
            let refValue: string =  this.getValue()
            const errorClass: string = 'input_error'
            const checkClass: boolean = this.element.classList.contains(errorClass)
            function checkErrorAndAddErrorClass(elem: any): void{
                if (!checkClass)  {
                    elem.classList.add(errorClass)
                }
            }
            function checkErrorAndRemoveErrorClass(elem: any) {
                if (checkClass) {
                    elem.classList.remove(errorClass)
                }
            }
            switch (this.props.data.id) {
                case 'first_name':          // валидация на поля 'first_name' и 'second_name', условия: отсутствие цифр, спецсимволов, пробелов; допустимо наличие дефиса, должны начинаться с заглавной буквы
                case 'second_name':
                    refValue = refValue.replace(/[a-zа-яё\-]/gi, '')            //  regex проверки 'first_name' & 'second_name'
                    function startsWithCapital(str: string){            //  функция проверки на заглавную букву в начале строки. При начале на букву в нижнем регистре, возвращает false
                        return str.charAt(0) === str.charAt(0).toUpperCase()
                    }
                    if (refValue.length > 0 || !startsWithCapital(this.getValue())) {
                        checkErrorAndAddErrorClass(this.element)
                        break
                    } else {
                        checkErrorAndRemoveErrorClass(this.element)
                        break
                    }
                    // В связи со сменой логики работы код пока задокументирован
                    // const indexOfClass: number = this.props.data.classList.indexOf('input_error')
                    // if (refValue.length > 0 || !startsWithCapital(this.getValue())) {           //  проверка на наличие запрещенных символов или начало на букву в нижнем регистре
                    //     if (indexOfClass == -1) {           // проверка на наличие класса, чтобы не дублировать
                    //         this.props.data.classList.push('input_error')
                    //         this.eventBus.emit(Input.EVENTS.FLOW_CDU)
                    //         e.target.value =  this.elemValue
                    //         break
                    //     } else {
                    //         break
                    //     }
                    // } else {            // если проверка пройдена, при наличии класса ошибки, он удаляется и вызывается обновление компонента, если класса нет, ничего не происходит
                    //     if (indexOfClass != -1) {           
                    //         const prevArr: string[] = this.props.data.classList.slice(0, indexOfClass),
                    //               afterArr: string[] = this.props.data.classList.slice(indexOfClass+1);
                    //         if (afterArr.length != 0) {
                    //             this.props.data.classList = [...prevArr, afterArr]
                    //         } else {
                    //             this.props.data.classList = [...prevArr]
                    //         }
                    //         this.eventBus.emit(Input.EVENTS.FLOW_CDU)
                    //         break
                    //     } else {
                    //         break
                    //     }
                    // }
                case 'login':
                    refValue = refValue.replace(/[\d]/gi, '')
                    if (refValue.length == 0) {
                        checkErrorAndAddErrorClass(this.element)
                        break
                    } else {
                        refValue = this.getValue()
                        refValue = refValue.replace(/[a-z\-\d\_]/gi, '')            //  regex проверки 'login'
                        if (this.getValue().length < 3 || this.getValue().length > 20) {
                            checkErrorAndAddErrorClass(this.element)
                            break
                        } else if (refValue.length > 0) {
                            checkErrorAndAddErrorClass(this.element)
                            break
                        } else {
                            checkErrorAndRemoveErrorClass(this.element)
                            break
                        }
                    }
                case 'email':
                    refValue = refValue.replace(/[a-z\d\-\_\@\.]/gi, '')
                    if (refValue.length > 0) {
                        checkErrorAndAddErrorClass(this.element)
                        break
                    } else {
                        refValue = this.getValue()
                        refValue = refValue.replace(/[^@\.]/gi, '')
                        if (!refValue.includes('@.')) {
                            checkErrorAndAddErrorClass(this.element)
                            break
                        } else {
                            checkErrorAndRemoveErrorClass(this.element)
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
                    if (refValue.length > 8 && refValue.length < 40 && additiveValue.length > 0 && checkCapitalLetter(refValue)) {
                        checkErrorAndRemoveErrorClass(this.element)
                        break
                    } else {
                        checkErrorAndAddErrorClass(this.element)
                        break
                    }
                case 'phone':
                    const additiveValue2 = refValue.replace(/[^+]/gi, '')
                    refValue = refValue.replace(/[\d\+]/gi, '')
                    if ((refValue.length > 0 || additiveValue2.length > 1) || (additiveValue2.length == 1  && this.getValue().startsWith('+'))) {
                        checkErrorAndAddErrorClass(this.element)
                        break
                    } else {
                        checkErrorAndRemoveErrorClass(this.element)
                        break
                    }
                case 'message':
                    if (this.getValue().length < 1) {
                        checkErrorAndAddErrorClass(this.element)
                        break
                    } else {
                        checkErrorAndRemoveErrorClass(this.element)
                        break
                    }
            }
        })
    }
}
