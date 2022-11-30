import Block from "../Block";

type ButtonType = {
	data: {
		inputs: any[];
		title: string;
		classList: string[];
	};
};

export default class Button extends Block<ButtonType> {
	continue: boolean;

	constructor(props: ButtonType) {
		super("button", props);
		this.continue = false;
	}

	protected setContinue(props: boolean): void {
		this.continue = props;
	}

	public getContinue(): boolean {
		return this.continue;
	}

	_createDocumentElement(): HTMLElement {
		const newElem: HTMLElement = document.createElement("button"),
			classes: string[] = this.props.data.classList;
		classes.forEach((item: string) => {
			newElem.classList.add(item);
		});
		newElem.innerText = this.props.data.title;
		return newElem;
	}

	_render(): void {}

	render(): string {
		const classes = this.props.data.classList.join(" ");
		return `<button class=${classes}>${this.props.data.title}</button>`;
	}
}
