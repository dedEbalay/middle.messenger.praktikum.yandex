import {loginTpl} from "./pages/login/login";
import {registrationTpl} from "./pages/registration/registration";
import {chatTpl} from "./pages/chat/chat";
import { render } from './utils/renderDOM';
import Registration from "./pages/registration/registration";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";

const registration = new Registration({
            tpl: registrationTpl,
            data: {
                  title: 'We are glad that you decided to join us, товарищ!',
                  nameTitle: 'First name of товарищ',
                  secondNameTitle: 'Second name of товарищ',
                  loginTitle: 'Login of товарищ',
                  mailTitle: 'Email of товарищ',
                  passwordTitle: 'Password of товарищ',
                  phoneTitle: 'Phone of товарищ'
            }
      }),
      login = new Login({
            tpl: loginTpl,
            data: {
                  title: 'Welcome back, товарищ!',
                  mailPlaceholder: 'любительгулага@ссылка.рф',
                  passwordPlaceholder: '************'
            }
      }),
      chat = new Chat({
            tpl: chatTpl,
            data: {
                  userName: 'Любимый',
            lastMessageDate: '4:20',
            messageText: 'Все твои друзья уже присоединилсь к ГУЛАГ..',
            fullMessageText: 'Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?',
            }
      });

const root: HTMLElement = document.querySelector('#root')!;

render('#root', login)

const logBtn: HTMLElement = document.querySelector('.login-modal__buttons-signup')!

logBtn.addEventListener('click', () => {
      root.innerHTML = ''
      render('#root',  registration)

      const regBtn: HTMLElement = document.querySelector('.registration-modal__button')!

      regBtn.addEventListener('click', () =>  {
            root.innerHTML = ''
            render('#root', chat)
      })
})
