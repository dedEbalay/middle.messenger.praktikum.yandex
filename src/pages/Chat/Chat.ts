import Block from "../../components/Block";

export const chatTpl: string = `
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
        {{{ ChatMessage }}}
    </div>
    <div id="message_div" class="chats-text-field"></div>
`;

type ChatType = {
	tpl: string;
	data: {
		classList: string[];
		userName: string;
		lastMessageDate: string;
		messageText: string;
		ChatMessage: string;
	};
};

export default class Chat extends Block<ChatType> {
	constructor(props: ChatType) {
		super("div", props);
	}
}
