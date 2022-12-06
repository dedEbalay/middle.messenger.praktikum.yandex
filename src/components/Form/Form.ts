import Block from "../Block";

type FormType = {
	tpl: string;
	data: {
		classList: string[];
		title: string | null;
	};
	events: {
		[key: string]: (e: Event, element: HTMLInputElement) => void;
	}[];
};

export default class Form extends Block<FormType> {
	constructor(props: FormType) {
		super("form", props);
	}
}
