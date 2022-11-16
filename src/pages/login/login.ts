import Block from "../../components/Block";

export const loginTpl: string = `
    <div class="login">
        <div class="login-modal">
            <div class="login-modal__title">{{ title }}</div>
            <input class="login-modal__mail-input login-modal__input" placeholder="{{ mailPlaceholder }}"></input>
            <input class="login-modal__password-input login-modal__input" placeholder="{{ passwordPlaceholder }}"></input>
            <div class="login-modal__buttons">
                <button class="login-modal__buttons-signup login-modal__button">Sign Up</button>
                <button class="login-modal__buttons-signin login-modal__button">Sign In</button>
            </div>
        </div>
    </div>
`
type LoginType = {
    tpl: string,
    data: {
        title: string,
        mailPlaceholder: string,
        passwordPlaceholder: string
    }
};

export default class Login extends Block {
    constructor(props: LoginType) {
        super('div', props)
    }
}
