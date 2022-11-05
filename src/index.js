import loginTpl from "./pages/login";
import registratonTpl from "./pages/registration";
import chatTpl from './pages/chat'

const root = document.querySelector('#root');

root.innerHTML = loginTpl({
    title: 'Welcome back, товарищ!',
    mailPlaceholder: 'любительгулага@ссылка.рф',
    passwordPlaceholder: '************',
})

const logBtn = document.querySelector('.login-modal__buttons-signup')

logBtn.addEventListener('click', () =>  {
    root.innerHTML = registratonTpl({
        title: 'We are glad that you decided to join us, товарищ!',
        nameTitle: 'First name of товарищ',
        secondNameTitle: 'Second name of товарищ',
        loginTitle: 'Login of товарищ',
        mailTitle: 'Email of товарищ',
        passwordTitle: 'Password of товарищ',
        phoneTitle: 'Phone of товарищ'
    })

    const regBtn = document.querySelector('.registration-modal__button')

    regBtn.addEventListener('click', () =>  {
        root.innerHTML = chatTpl({
            userName: 'Любимый',
            lastMessageDate: '4:20',
            messageText: 'Все твои друзья уже присоединилсь к ГУЛАГ..',
            fullMessageText: 'Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?',
        })
    })
})



