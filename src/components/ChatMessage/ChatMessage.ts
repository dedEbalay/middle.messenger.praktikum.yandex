import Block from "../Block";

export const messageTpl = `
    <div class="chats-message-field__message">{{ fullMessageText }}</div>
`;

type MessageType = {
	tpl: string;
	data: {
		fullMessageText: string;
	};
};

export default class ChatMessage extends Block<MessageType> {
	constructor(props: MessageType) {
		super("div", props);
	}
}
