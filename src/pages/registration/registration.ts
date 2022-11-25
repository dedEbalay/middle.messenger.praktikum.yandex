import Block from "../../components/Block";

export const registrationTpl: string = `
    <div class="registration-modal">
        <div class="registration-modal__title">{{ title }}</div>
        <div id="first_name_div" class="registration-modal-input">
            <div class="registration-modal-input__title">{{ nameTitle }}</div>
        </div>
        <div id="second_name_div" class="registration-modal-input">
            <div class="registration-modal-input__title">{{ secondNameTitle }}</div>
        </div>
        <div id="login_div" class="registration-modal-input">
            <div class="registration-modal-input__title">{{ loginTitle }}</div>
        </div>
        <div id="email_div" class="registration-modal-input">
            <div class="registration-modal-input__title">{{ mailTitle }}</div>
        </div>
        <div id="password_div" class="registration-modal-input">
            <div class="registration-modal-input__title">{{ passwordTitle }}</div>
        </div>
        <div id="phone_div" class="registration-modal-input">
            <div class="registration-modal-input__title">{{ phoneTitle }}</div>
        </div>
        <div class="registration-modal__button">
            Create user
        </div>
    </div>
`

type RegistrationType = {
    tpl: string,
    data: {
        classList: string[],
        title: string,
        nameTitle: string,
        secondNameTitle: string,
        loginTitle: string,
        mailTitle: string,
        passwordTitle: string,
        phoneTitle: string
    }
};

export default class Registration extends Block {
    constructor(props: RegistrationType) {
        super('div', props)
    }
}
