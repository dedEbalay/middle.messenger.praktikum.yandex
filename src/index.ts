import render from "./utils/renderDOM";
import { loginTpl } from "./pages/Login";
import Login from "./pages/Login";
import { registrationTpl } from "./pages/Registration";
import Registration from "./pages/Registration";
import { chatTpl } from "./pages/Chat";
import Chat from "./pages/Chat";
import { messageTpl } from "./components/ChatMessage/ChatMessage";
import ChatMessage from "./components/ChatMessage";
import Input from "./components/Input";
import Button from "./components/Button";
import ErrorPage from "./pages/ErrorPage";
import { errorTpl } from "./pages/ErrorPage/";
import Form from "./components/Form";
import {
	blurValidation,
	closeModal,
	submitValidation,
} from "./utils/eventListeners";
import Profile, { profileFormTpl, profileTpl } from "./pages/Profile";

const login = new Form({
		tpl: loginTpl,
		data: {
			classList: ["login"],
			title: "Welcome back, товарищ!",
		},
		events: [
			{
				submit: submitValidation,
			},
		],
	}),
	loginInput = new Input({
		data: {
			id: "email",
			classList: ["login-modal__mail-input", "login-modal__input"],
			placeholder: "gulag_enjoyer@gulagu.da",
		},
		events: [
			{
				blur: blurValidation,
			},
		],
	}),
	passwordInput = new Input({
		data: {
			id: "password",
			classList: ["login-modal__password-input", "login-modal__input"],
			placeholder: "************",
		},
		events: [
			{
				blur: blurValidation,
			},
		],
	}),
	loginButton = new Button({
		data: {
			inputs: [loginInput, passwordInput],
			title: "Sign Up",
			classList: ["login-modal__buttons-signup", "login-modal__button"],
		},
	});

const root: HTMLElement = document.querySelector("#root")!;

const toRegistration = document.createElement("li"),
	toChats = document.createElement("li"),
	toError404 = document.createElement("li"),
	toError500 = document.createElement("li");

toRegistration.addEventListener("click", () => {
	const firstNameInput = new Input({
			data: {
				id: "first_name",
				classList: ["registration-modal-input__input"],
				placeholder: "Александр",
			},
			events: [
				{
					blur: blurValidation,
				},
			],
		}),
		secondNameInput = new Input({
			data: {
				id: "second_name",
				classList: ["registration-modal-input__input"],
				placeholder: "Солженицын",
			},
			events: [
				{
					blur: blurValidation,
				},
			],
		}),
		loginInput = new Input({
			data: {
				id: "login",
				classList: ["registration-modal-input__input"],
				placeholder: "uZniKGuLAgA",
			},
			events: [
				{
					blur: blurValidation,
				},
			],
		}),
		emailInput = new Input({
			data: {
				id: "email",
				classList: ["registration-modal-input__input"],
				placeholder: "gulag_enjoyer@gulagu.da",
			},
			events: [
				{
					blur: blurValidation,
				},
			],
		}),
		passwordInput = new Input({
			data: {
				id: "password",
				classList: ["registration-modal-input__input"],
				placeholder: "*******",
			},
			events: [
				{
					blur: blurValidation,
				},
			],
		}),
		phoneInput = new Input({
			data: {
				id: "phone",
				classList: ["registration-modal-input__input"],
				placeholder: "+78005553535",
			},
			events: [
				{
					blur: blurValidation,
				},
			],
		}),
		registration = new Form({
			tpl: registrationTpl,
			data: {
				classList: ["registration"],
				title: "We are glad that you decided to join us, товарищ!",
			},
			events: [{ submit: submitValidation }],
		}),
		registrationbutton = new Button({
			data: {
				inputs: [
					firstNameInput,
					secondNameInput,
					loginInput,
					emailInput,
					passwordInput,
					phoneInput,
				],
				title: "Create user",
				classList: ["registration-modal__button"],
			},
		});
	root.innerHTML = "";
	render("#root", registration);
	render("#first_name_div", firstNameInput);
	render("#second_name_div", secondNameInput);
	render("#login_div", loginInput);
	render("#email_div", emailInput);
	render("#password_div", passwordInput);
	render("#phone_div", phoneInput);
	render("#registration_button", registrationbutton);
	// const form = document.querySelector('.registration-modal')
	// form?.addEventListener('submit', (e:any) => {
	//       e.preventDefault()
	//       let errors = 0;
	//       const inputs = document.querySelectorAll('input'),
	//             arrayFromInputs: any[] = Array.from(inputs)
	//       arrayFromInputs.forEach((item: HTMLInputElement) => {
	//             const event = new Event('blur')
	//             item.dispatchEvent(event)
	//       })
	//       arrayFromInputs.forEach((item: HTMLInputElement) => {
	//             if (item.classList.contains('error')) {
	//                   errors++
	//             }
	//       })
	//       if (errors > 0) {
	//             console.log('Ошибки в инпутах');
	//       } else {
	//             arrayFromInputs.forEach((item: HTMLInputElement) => {
	//                   console.log(item.value);
	//             })
	//       }

	// })
});
toChats.addEventListener("click", () => {
	const chatMessage = new ChatMessage({
			tpl: messageTpl,
			data: {
				fullMessageText:
					"Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?",
			},
		}),
		chat = new Chat({
			tpl: chatTpl,
			data: {
				classList: ["chats"],
				userName: "Любимый",
				lastMessageDate: "4:20",
				messageText: "Все твои друзья уже присоединилсь к ГУЛАГ..",
				ChatMessage: chatMessage.render(),
			},
		}),
		messageInput = new Input({
			data: {
				id: "message",
				classList: ["chats-text-field__input", "message"],
				placeholder: "Отправить донос...",
			},
			events: [
				{
					blur: blurValidation,
				},
			],
		}),
		messageForm = new Form({
			tpl: `<div></div>`,
			data: {
				classList: ["chats-text-field__form"],
				title: null,
			},
			events: [
				{
					submit: submitValidation,
				},
			],
		});
	root.innerHTML = "";
	render("#root", chat);
	render("#message_div", messageForm);
	render(".chats-text-field__form", messageInput);
	const toProfile = document.querySelector(".chats-field-user__settings");
	toProfile?.addEventListener("click", () => {
		const profile = new Profile({
				tpl: profileTpl,
				data: {
					imgLink: "123",
					classList: ["profile"],
				},
				events: [
					{
						click: closeModal,
					},
				],
			}),
			profileForm = new Form({
				tpl: profileFormTpl,
				data: {
					classList: ["profile-info-block"],
					title: null,
				},
				events: [
					{
						submit: submitValidation,
					},
				],
			}),
			profileFirstNameInput = new Input({
				data: {
					id: "first_name",
					classList: ["profile-info-block-item__input"],
					placeholder: "Александр",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			}),
			profileSecondNameInput = new Input({
				data: {
					id: "second_name",
					classList: ["profile-info-block-item__input"],
					placeholder: "Солженицын",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			}),
			profileDisplayedNameInput = new Input({
				data: {
					id: "displayed_name",
					classList: ["profile-info-block-item__input"],
					placeholder: "uZniKGuLAgA",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			}),
			profileLoginInput = new Input({
				data: {
					id: "login",
					classList: ["profile-info-block-item__input"],
					placeholder: "uZniKGuLAgA",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			}),
			profileEmailInput = new Input({
				data: {
					id: "email",
					classList: ["profile-info-block-item__input"],
					placeholder: "gulag_enjoyer@gulagu.da",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			}),
			profilePhoneInput = new Input({
				data: {
					id: "phone",
					classList: ["profile-info-block-item__input"],
					placeholder: "+78005553535",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			}),
			profileOldPasswordInput = new Input({
				data: {
					id: "password",
					classList: ["profile-info-block-item__input"],
					placeholder: "*********",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			}),
			profileNewPasswordInput = new Input({
				data: {
					id: "new_password",
					classList: ["profile-info-block-item__input"],
					placeholder: "*********",
				},
				events: [
					{
						blur: blurValidation,
					},
				],
			});
		render("#root", profile);
		render(".profile-container", profileForm);
		render("#profile_first_name_div", profileFirstNameInput);
		render("#profile_second_name_div", profileSecondNameInput);
		render("#profile_displayed_name_div", profileDisplayedNameInput);
		render("#profile_login_div", profileLoginInput);
		render("#profile_email_div", profileEmailInput);
		render("#profile_phone_div", profilePhoneInput);
		render("#profile_old_password_div", profileOldPasswordInput);
		render("#profile_new_password_div", profileNewPasswordInput);
	});
});
toError404.addEventListener("click", () => {
	const error404 = new ErrorPage({
		tpl: errorTpl,
		data: {
			errorCode: 404,
			errorMessage:
				"Этого не может найти даже товарищ Берия! Измените донос и попытайтесь снова",
			classList: ["error-page"],
		},
	});
	root.innerHTML = "";
	render("#root", error404);
});
toError500.addEventListener("click", () => {
	const error500 = new ErrorPage({
		tpl: errorTpl,
		data: {
			errorCode: 500,
			errorMessage: "Похоже что сервер не отвечает, повторите запрос позже",
			classList: ["error-page"],
		},
	});
	root.innerHTML = "";
	render("#root", error500);
});

toRegistration.innerText = "К регистрации";
toChats.innerText = "К чатам";
toError404.innerText = "К ошибке 404";
toError500.innerText = "К ошибке 500";

toRegistration.classList.add("header-nav__link");
toChats.classList.add("header-nav__link");
toError404.classList.add("header-nav__link");
toError500.classList.add("header-nav__link");

const header = document.createElement("header"),
	nav = document.createElement("nav"),
	ul = document.createElement("ul");

ul.classList.add("header-nav__ul");
header.classList.add("header");
nav.classList.add("header-nav");

root.append(header);
header.append(nav);
nav.append(ul);

ul.append(toRegistration);
ul.append(toChats);
ul.append(toError404);
ul.append(toError500);

render("#root", login);
render("#login_div", loginInput);
render("#login_div", passwordInput);
render("#login_buttons", loginButton);

// const logBtn: HTMLElement = document.querySelector('.login-modal__buttons-signup')!

// logBtn.addEventListener('click', () => {                 // пока задокументированно
//       if(loginButton.getContinue())  {
//             const firstNameInput = new Input({
//                   data: {
//                         id: 'first_name',
//                         classList: ['registration-modal-input__input'],
//                         placeholder: 'Александр'
//                   }
//             }),
//             secondNameInput = new Input({
//                   data: {
//                         id: 'second_name',
//                         classList: ['registration-modal-input__input'],
//                         placeholder: 'Солженицын'
//                   }
//             }),
//             loginInput = new Input({
//                   data: {
//                         id: 'login',
//                         classList: ['registration-modal-input__input'],
//                         placeholder: 'uZniKGuLAgA'
//                   }
//             }),
//             emailInput = new Input({
//                   data: {
//                         id: 'email',
//                         classList: ['registration-modal-input__input'],
//                         placeholder: 'gulag_enjoyer@gulagu.da'
//                   }
//             }),
//             passwordInput = new Input({
//                   data: {
//                         id: 'password',
//                         classList: ['registration-modal-input__input'],
//                         placeholder: '*******'
//                   }
//             }),
//             phoneInput = new Input({
//                   data: {
//                         id: 'phone',
//                         classList: ['registration-modal-input__input'],
//                         placeholder: '+78005553535'
//                   }
//             }),
//             registration = new Registration({
//                   tpl: registrationTpl,
//                   data: {
//                         classList: ['registration'],
//                         title: 'We are glad that you decided to join us, товарищ!',
//                         nameTitle: 'First name of товарищ',
//                         secondNameTitle: 'Second name of товарищ',
//                         loginTitle: 'Login of товарищ',
//                         mailTitle: 'Email of товарищ',
//                         passwordTitle: 'Password of товарищ',
//                         phoneTitle: 'Phone of товарищ'
//                   }
//             }),
//             registrationbutton = new Button({
//                   data: {
//                         inputs: [firstNameInput, secondNameInput, loginInput, emailInput, passwordInput, phoneInput],
//                         title: 'Create user',
//                         classList: ['registration-modal__button']
//                   }
//             })
//             root.innerHTML = ''
//             render('#root',  registration)
//             render('#first_name_div', firstNameInput)
//             render('#second_name_div', secondNameInput)
//             render('#login_div', loginInput)
//             render('#email_div', emailInput)
//             render('#password_div', passwordInput)
//             render('#phone_div', phoneInput)
//             render('#registration_button', registrationbutton)
//             const regBtn: HTMLElement = document.querySelector('.registration-modal__button')!

//             regBtn.addEventListener('click', () =>  {
//                   if (registrationbutton.getContinue()) {
//                         const chatMessage = new ChatMessage({
//                               tpl: messageTpl,
//                               data: {
//                                     fullMessageText: 'Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?'
//                               }
//                         }),
//                         chat = new Chat({
//                               tpl: chatTpl,
//                               data: {
//                                     classList: ['chats'],
//                                     userName: 'Любимый',
//                                     lastMessageDate: '4:20',
//                                     messageText: 'Все твои друзья уже присоединилсь к ГУЛАГ..',
//                                     ChatMessage: chatMessage.render()
//                               }
//                         }),
//                         messageInput = new Input({
//                               data: {
//                                     id: 'message',
//                                     classList: ['chats-text-field__input', 'message'],
//                                     placeholder: 'Отправить донос...'
//                               }
//                         })
//                         root.innerHTML = ''
//                         render('#root', chat)
//                         render('#message_div', messageInput)
//                   }
//             })
//       }
// })
