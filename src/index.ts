/*eslint-env es6*/
import Handlebars from "handlebars";
import loginTpl from "./pages/login/";
import registrationTpl from "./pages/registration/";
import chatTpl from "./pages/chat/"

type LoginType = {
      title: string,
      mailPlaceholder: string,
      passwordPlaceholder: string
};

type ChatType = {
      userName: string,
      lastMessageDate: string,
      messageText: string,
      fullMessageText: string,
};

type RegistrationType = {
      title: string,
      nameTitle: string,
      secondNameTitle: string,
      loginTitle: string,
      mailTitle: string,
      passwordTitle: string,
      phoneTitle: string
};

const loginData: LoginType = {
      title: 'Welcome back, товарищ!',
      mailPlaceholder: 'любительгулага@ссылка.рф',
      passwordPlaceholder: '************'
},
      chatData: ChatType = {
            userName: 'Любимый',
            lastMessageDate: '4:20',
            messageText: 'Все твои друзья уже присоединилсь к ГУЛАГ..',
            fullMessageText: 'Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?',
      },
      registrationData: RegistrationType = {
            title: 'We are glad that you decided to join us, товарищ!',
            nameTitle: 'First name of товарищ',
            secondNameTitle: 'Second name of товарищ',
            loginTitle: 'Login of товарищ',
            mailTitle: 'Email of товарищ',
            passwordTitle: 'Password of товарищ',
            phoneTitle: 'Phone of товарищ'
      };

const root: HTMLElement = document.querySelector('#root')!,
      login: string =  Handlebars.compile(loginTpl)(loginData),
      chat: string =  Handlebars.compile(chatTpl)(chatData),
      registration: string =  Handlebars.compile(registrationTpl)(registrationData);



root.innerHTML = login

const logBtn: HTMLElement = document.querySelector('.login-modal__buttons-signup')!

logBtn.addEventListener('click', () =>  {
    root.innerHTML = registration;

    const regBtn: HTMLElement = document.querySelector('.registration-modal__button')!

    regBtn.addEventListener('click', () =>  {
        root.innerHTML = chat
    })
})
