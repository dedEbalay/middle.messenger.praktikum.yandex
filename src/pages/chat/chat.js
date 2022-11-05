import tpl from './chat.hbs';
import './chats.css'

const data = {
    userName: 'Любимый',
    lastMessageDate: '4:20',
    messageText: 'Все твои друзья уже присоединилсь к ГУЛАГ..',
    fullMessageText: 'Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?',
}

export default (props = {}) =>  {
    return tpl(props);
}