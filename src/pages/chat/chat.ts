import Block from "../../components/Block";

export const chatTpl: string = `
    <div class="chats">
        <div class="chats-field">
            <div class="chats-field-user">
                <div class="chats-field-user__avatar chats-avatar"></div>
                <div class="chats-field-user__settings"></div>
            </div>
            <div class="chats-field-item">
                <div class="chats-field-item__avatar chats-avatar"></div>
                <div class="chats-field-item__title">{{ userName }}</div>
                <div class="chats-field-item__date">{{ lastMessageDate }}</div>
                <div class="chats-field-item__text">{{ messageText }}</div>
            </div>
        </div>
        <div class="chats-message-field">
            <div class="chats-message-field__message">{{ fullMessageText }}</div>
        </div>
        <div class="chats-text-field">
            <input type="text" placeholder="Отправить донос..." class="chats-text-field__input message">
        </div>
    </div>
`

type ChatType = {
    tpl: string,
    data: {
        userName: string,
        lastMessageDate: string,
        messageText: string,
        fullMessageText: string,
    }
};

export default class Chat extends Block {
    constructor(props: ChatType) {
        super('div', props)
    }
}