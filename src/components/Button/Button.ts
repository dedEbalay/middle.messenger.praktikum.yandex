import Block from "../Block";

type buttonType =  {
    data: {
        inputs: any[],
        title: string,
        classList:  string[]
    } 
}

export default class Button extends Block {

    continue: boolean

    constructor(props: buttonType) {
        super('button', props)
        this.continue = false
    }

    protected setContinue(props: boolean): void {
        this.continue = props
    }

    public getContinue():boolean {
        return this.continue
    }

    _createDocumentElement(): HTMLElement {
        const newElem: HTMLElement = document.createElement('button'),
              classes:string[] = this.props.data.classList
        classes.forEach((item:string) => {
            newElem.classList.add(item)
        })
        newElem.innerText = this.props.data.title
        return newElem
    }

    _render(): void {
        this._addEvent()
        const block = this.render()
    }

    render(): string {
        const classes = this.props.data.classList.join(' ')
        return `<button class=${classes}>${this.props.data.title}</button>`
    }

    _addEvent(): void {
        this.getContent().addEventListener('click', (e:any) => {
            let errors = 0;
            this.props.data.inputs.forEach((item:any) => {
                const event = new Event('blur')
                item.getContent().dispatchEvent(event)
                if (item.getStatus())  {
                    errors++
                }
            })
            if (errors > 0) {
                this.setContinue(false)
                e.preventDefault()
                console.log('В инпутах ошибки');
            } else {
                this.setContinue(true)
                this.props.data.inputs.forEach((item:any) => {
                    console.log(item.getValue());
                })
            }
        })
    }

}
