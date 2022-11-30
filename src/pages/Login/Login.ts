import Block from "../../components/Block";

export const loginTpl: string = `
    <div class="login-modal">
        <div class="login-modal__title">{{ title }}</div>
        <div id="login_div" class="login-modal-input__wrapper"></div>
        <div id="login_buttons" class="login-modal__buttons">
            <button class="login-modal__buttons-signin login-modal__button">Sign In</button>
        </div>
    </div>
`;
type LoginType = {
	tpl: string;
	data: {
		classList: string[];
		title: string;
	};
};

export default class Login extends Block<LoginType> {
	constructor(props: LoginType) {
		super("div", props);
	}
}
