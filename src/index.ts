import { loginTpl } from "./pages/login/login";
import { registrationTpl } from "./pages/registration/registration";
import { chatTpl } from "./pages/chat/chat";
import render from "./utils/renderDOM";
import { messageTpl } from "./components/ChatMessage/ChatMessage";
import Registration from "./pages/registration/registration";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import ChatMessage from "./components/ChatMessage";
import Input from "./components/Input";
import Button from "./components/Button";
import errorPage from "./pages/errorPage";
import { errorTpl } from "./pages/errorPage/errorPage";
import Form from "./components/Form";
import { blurValidation, setValue } from "./utils/eventListeners";

const login = new Form({
		tpl: loginTpl,
		data: {
			classList: ["login"],
			title: "Welcome back, товарищ!",
		},
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
// render('#root', error)

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
				{
					change: setValue,
				},
			],
		}),
		messageForm = new Form({
			tpl: `<div></div>`,
			data: {
				classList: ["chats-text-field__form"],
				title: null,
			},
		});
	root.innerHTML = "";
	render("#root", chat);
	render("#message_div", messageForm);
	render(".chats-text-field__form", messageInput);
});
toError404.addEventListener("click", () => {
	const error404 = new errorPage({
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
	const error500 = new errorPage({
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
