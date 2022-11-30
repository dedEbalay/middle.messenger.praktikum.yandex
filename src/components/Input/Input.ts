import Block from "../Block";

type InputType = {
	data: {
		id: string;
		classList: string[];
		placeholder: string;
	};
	events: {
		[key: string]: (e: Event, element: HTMLInputElement) => void;
	}[];
};

export default class Input extends Block<InputType> {
	constructor(props: InputType) {
		super("input", props);
	}

	_createDocumentElement(): HTMLInputElement {
		const newElement: HTMLInputElement = document.createElement("input"),
			classes: string[] = this.props.data.classList,
			id: string = this.props.data.id,
			placehold: string = this.props.data.placeholder;
		classes.forEach((item: string) => {
			newElement.classList.add(item);
		});
		newElement.id = id;
		newElement.placeholder = placehold;
		newElement.name = id;

		return newElement;
	}

	render(): string {
		const classes = this.props.data.classList.join(" ");
		return `<input id=${this.props.data.id} class=${classes} placeholder=${this.props.data.placeholder} type="text"></input>`;
	}
}
