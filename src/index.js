// import Handlebars from "handlebars";
import loginTpl from "./pages/login/login.js";
import registrationTpl from "./pages/registration/registration.js";
import chatTpl from "./pages/chat/chat.js"

const root = document.querySelector('#root'),
      loginData  = {
        title: 'Welcome back, товарищ!',
        mailPlaceholder: 'любительгулага@ссылка.рф',
        passwordPlaceholder: '************',
      },
      login =  Handlebars.compile(loginTpl)(loginData),
      chatData = {
            userName: 'Любимый',
            lastMessageDate: '4:20',
            messageText: 'Все твои друзья уже присоединилсь к ГУЛАГ..',
            fullMessageText: 'Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?',
      },
      chat =  Handlebars.compile(chatTpl)(chatData),
      registrationData = {
            title: 'We are glad that you decided to join us, товарищ!',
            nameTitle: 'First name of товарищ',
            secondNameTitle: 'Second name of товарищ',
            loginTitle: 'Login of товарищ',
            mailTitle: 'Email of товарищ',
            passwordTitle: 'Password of товарищ',
            phoneTitle: 'Phone of товарищ'
      },
      registration =  Handlebars.compile(registrationTpl)(registrationData)

root.innerHTML = login

// root.innerHTML = loginTpl({
//     title: 'Welcome back, товарищ!',
//     mailPlaceholder: 'любительгулага@ссылка.рф',
//     passwordPlaceholder: '************',
// })

const logBtn = document.querySelector('.login-modal__buttons-signup')

logBtn.addEventListener('click', () =>  {
    root.innerHTML = registration;

    const regBtn = document.querySelector('.registration-modal__button')

    regBtn.addEventListener('click', () =>  {
        root.innerHTML = chat
    })
})
