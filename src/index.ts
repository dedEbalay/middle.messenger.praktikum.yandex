import { loginTpl } from "./pages/login/login";
import { registrationTpl } from "./pages/registration/registration";
import { chatTpl } from "./pages/chat/chat";
import render from './utils/renderDOM';
import { messageTpl } from "./components/ChatMessage/ChatMessage";
import Registration from "./pages/registration/registration";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import ChatMessage from "./components/ChatMessage";
import Input from "./components/Input";

const registration = new Registration({
            tpl: registrationTpl,
            data: {
                  classList: ['registration'],
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
                  classList: ['login'],
                  title: 'Welcome back, товарищ!',
                  mailPlaceholder: 'любительгулага@ссылка.рф',
                  passwordPlaceholder: '************'
            }
      }),
      chatMessage = new ChatMessage({
            tpl: messageTpl,
            data: {
                  fullMessageText: 'Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?'
            }
      }),
      chat = new Chat({
            tpl: chatTpl,
            data: {
                  classList: ['chats'],
                  userName: 'Любимый',
                  lastMessageDate: '4:20',
                  messageText: 'Все твои друзья уже присоединилсь к ГУЛАГ..',
                  ChatMessage: chatMessage.render()
            }
      }),
      firstNameInput = new Input({
            data: {
                  id: 'first_name',
                  classList: ['registration-modal-input__input'],
                  placeholder: 'Александр'
            }
      }),
      secondNameInput = new Input({
            data: {
                  id: 'second_name',
                  classList: ['registration-modal-input__input'],
                  placeholder: 'Солженицын'
            }
      }),
      loginInput = new Input({
            data: {
                  id: 'login',
                  classList: ['registration-modal-input__input'],
                  placeholder: 'uZniKGuLAgA'
            }
      }),
      emailInput = new Input({
            data: {
                  id: 'email',
                  classList: ['registration-modal-input__input'],
                  placeholder: 'uznikgulaga@ссылка.рф'
            }
      }),
      passwordInput = new Input({
            data: {
                  id: 'password',
                  classList: ['registration-modal-input__input'],
                  placeholder: '*******'
            }
      }),
      phoneInput = new Input({
            data: {
                  id: 'phone',
                  classList: ['registration-modal-input__input'],
                  placeholder: '+78005553535'
            }
      }),
      messageInput = new Input({
            data: {
                  id: 'message',
                  classList: ['chats-text-field__input', 'message'],
                  placeholder: 'Отправить донос...'
            }
      })

const root: HTMLElement = document.querySelector('#root')!;

render('#root', login)

const logBtn: HTMLElement = document.querySelector('.login-modal__buttons-signup')!

logBtn.addEventListener('click', () => {
      root.innerHTML = ''
      render('#root',  registration)
      render('#first_name_div', firstNameInput)
      render('#second_name_div', secondNameInput)
      render('#login_div', loginInput)
      render('#email_div', emailInput)
      render('#password_div', passwordInput)
      render('#phone_div', phoneInput)
      const regBtn: HTMLElement = document.querySelector('.registration-modal__button')!

      regBtn.addEventListener('click', () =>  {
            root.innerHTML = ''
            render('#root', chat)
            render('#message_div', messageInput)
      })
})
