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
import Button from "./components/Button";


const login = new Login({
            tpl: loginTpl,
            data: {
                  classList: ['login'],
                  title: 'Welcome back, товарищ!'
            }
      }),
      loginInput =  new Input({
            data: {
                  id: 'email',
                  classList: ['login-modal__mail-input', 'login-modal__input'],
                  placeholder: 'gulag_enjoyer@gulagu.da'
            }
      }),
      passwordInput = new Input({
            data: {
                  id: 'password',
                  classList: ['login-modal__password-input', 'login-modal__input'],
                  placeholder: '************'
            }
      }),
      loginButton = new Button({
            data: {
                  inputs: [loginInput, passwordInput],
                  title: 'Sign Up',
                  classList: ['login-modal__buttons-signup', 'login-modal__button']
            }
      })

const root: HTMLElement = document.querySelector('#root')!;

render('#root', login)
render('#login_div', loginInput)
render('#login_div', passwordInput)
render('#login_buttons', loginButton)

const logBtn: HTMLElement = document.querySelector('.login-modal__buttons-signup')!

logBtn.addEventListener('click', () => {
      if(loginButton.getContinue())  {
            const firstNameInput = new Input({
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
                        placeholder: 'gulag_enjoyer@gulagu.da'
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
            registration = new Registration({
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
            registrationbutton = new Button({
                  data: {
                        inputs: [firstNameInput, secondNameInput, loginInput, emailInput, passwordInput, phoneInput],
                        title: 'Create user',
                        classList: ['registration-modal__button']
                  }
            })
            root.innerHTML = ''
            render('#root',  registration)
            render('#first_name_div', firstNameInput)
            render('#second_name_div', secondNameInput)
            render('#login_div', loginInput)
            render('#email_div', emailInput)
            render('#password_div', passwordInput)
            render('#phone_div', phoneInput)
            render('#registration_button', registrationbutton)
            const regBtn: HTMLElement = document.querySelector('.registration-modal__button')!
      
            regBtn.addEventListener('click', () =>  {
                  if (registrationbutton.getContinue()) {
                        const chatMessage = new ChatMessage({
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
                        messageInput = new Input({
                              data: {
                                    id: 'message',
                                    classList: ['chats-text-field__input', 'message'],
                                    placeholder: 'Отправить донос...'
                              }
                        })      
                        root.innerHTML = ''
                        render('#root', chat)
                        render('#message_div', messageInput)
                  }
            })
      }
})
