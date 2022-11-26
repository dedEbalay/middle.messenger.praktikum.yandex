import Block from "../../components/Block";

export const errorTpl: string = `
    <div class="error-page-container container">
        <div class="error-page__img"></div>
        <div class="error-page-description">
            <h2 class="error-page-description__title">Ошибка {{ errorCode }}</h2>
            <div class="error-page-description__text">{{ errorMessage }}</div>
        </div>
    </div>
`

export default class errorPage extends Block {

    constructor(props: any) {
        super('div', props)
    }
    
    _render(): void {
        const block = this.render()
        this._element.innerHTML = block
        const errorElement: HTMLElement = this._element.children.item(0).children.item(0)
        switch (this.props.data.errorCode) {
            case 404:
                errorElement.classList.add('error404')
                break
            case 500:
                errorElement.classList.add('error500')
                break
            }
                
    }
}