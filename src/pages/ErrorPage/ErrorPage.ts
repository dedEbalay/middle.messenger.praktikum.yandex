import Block from "../../components/Block";

export const errorTpl: string = `
    <div class="error-page-container container">
        <div class="error-page__img"></div>
        <div class="error-page-description">
            <h2 class="error-page-description__title">Ошибка {{ errorCode }}</h2>
            <div class="error-page-description__text">{{ errorMessage }}</div>
        </div>
    </div>
`;

type ErrorType = {
	tpl: string;
	data: {
		errorCode: number;
		errorMessage: string;
		classList: string[];
	};
};

export default class ErrorPage extends Block<ErrorType> {
	constructor(props: ErrorType) {
		super("div", props);
	}

	_render(): void {
		const block = this.render();
		this._element.innerHTML = block;
		setTimeout(() => {
			const errorElement = document.querySelector(".error-page__img")!;
			switch (this.props.data.errorCode) {
				case 404:
					errorElement.classList.add("error404");
					break;
				case 500:
					errorElement.classList.add("error500");
					break;
			}
		}, 0);
	}
}
