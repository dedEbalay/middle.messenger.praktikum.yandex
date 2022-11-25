import Block from "../Block";

export const messageTpl =  `
    <div class="chats-message-field__message">{{ fullMessageText }}</div>
`

type messageType = {
    tpl: string,
    data: {
        fullMessageText: string
    }
}

export default class ChatMessage extends Block {
    constructor(props: messageType) {
        super('div', props)
    }
}