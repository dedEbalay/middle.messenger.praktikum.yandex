import Block from "../Block";

type inputType = {
    tpl: string,
    data: {
        classList: string[],
        title: string | null
    }
}

export default class Form extends Block {
    constructor(props: inputType) {
        super('form', props)
    }

    _render(): void {
        const block = this.render();      
        this._element.innerHTML = block;
        this._addEvent()
    }

    _addEvent() {
        this.getContent().addEventListener('submit', (e:any) => {
            e.preventDefault()
            let errors = 0;
            const inputs = document.querySelectorAll('input'),
                  arrayFromInputs: any[] = Array.from(inputs)
            arrayFromInputs.forEach((item: HTMLInputElement) => {
                const event = new Event('blur')
                item.dispatchEvent(event)
            })
            arrayFromInputs.forEach((item: HTMLInputElement) => {
                if (item.classList.contains('error')) {
                        errors++
                }
            })
            if (errors > 0) {
                console.log('Ошибки в инпутах');
            } else {
                arrayFromInputs.forEach((item: HTMLInputElement) => {
                        console.log(item.value);
                })
            }
        })
    }

}
