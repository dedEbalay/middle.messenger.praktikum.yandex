import Block from "../../components/Block";

export const registrationTpl: string = `
    <div class="registration-modal">
        <div class="registration-modal__title">{{ title }}</div>
        <div id="first_name_div" class="registration-modal-input">
            <div class="registration-modal-input__title">First name of товарищ</div>
        </div>
        <div id="second_name_div" class="registration-modal-input">
            <div class="registration-modal-input__title">Second name of товарищ</div>
        </div>
        <div id="login_div" class="registration-modal-input">
            <div class="registration-modal-input__title">Login of товарищ</div>
        </div>
        <div id="email_div" class="registration-modal-input">
            <div class="registration-modal-input__title">Email of товарищ</div>
        </div>
        <div id="password_div" class="registration-modal-input">
            <div class="registration-modal-input__title">Password of товарищ</div>
        </div>
        <div id="phone_div" class="registration-modal-input">
            <div class="registration-modal-input__title">Phone of товарищ</div>
        </div>
        <div id="registration_button" class="registration-button__wrapper"></div>
    </div>
`;

type RegistrationType = {
	tpl: string;
	data: {
		classList: string[];
		title: string;
		nameTitle: string;
		secondNameTitle: string;
		loginTitle: string;
		mailTitle: string;
		passwordTitle: string;
		phoneTitle: string;
	};
};

export default class Registration extends Block<RegistrationType> {
	constructor(props: RegistrationType) {
		super("div", props);
	}
}
