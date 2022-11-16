import Block from "../../components/Block";

export const registrationTpl: string = `
    <div class="registration">
        <div class="registration-modal">
            <div class="registration-modal__title">{{ title }}</div>
            <div class="registration-modal-input">
                <div class="registration-modal-input__title">{{ nameTitle }}</div>
                <input placeholder="Александр" type="text" class="registration-modal-input__input">
            </div>
            <div class="registration-modal-input">
                <div class="registration-modal-input__title">{{ secondNameTitle }}</div>
                <input placeholder="Солженицын" type="text" class="registration-modal-input__input">
            </div>
            <div class="registration-modal-input">
                <div class="registration-modal-input__title">{{ loginTitle }}</div>
                <input placeholder="uZniKGuLAgA" type="text" class="registration-modal-input__input">
            </div>
            <div class="registration-modal-input">
                <div class="registration-modal-input__title">{{ mailTitle }}</div>
                <input placeholder="uznikgulaga@ссылка.рф" type="text" class="registration-modal-input__input">
            </div>
            <div class="registration-modal-input">
                <div class="registration-modal-input__title">{{ passwordTitle }}</div>
                <input placeholder="***********" type="text" class="registration-modal-input__input">
            </div>
            <div class="registration-modal-input">
                <div class="registration-modal-input__title">{{ phoneTitle }}</div>
                <input placeholder="+7(800)555-35-35" type="text" class="registration-modal-input__input">
            </div>
            <div class="registration-modal__button">
                Create user
            </div>
        </div>
    </div>
`

type RegistrationType = {
    tpl: string,
    data: {
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
