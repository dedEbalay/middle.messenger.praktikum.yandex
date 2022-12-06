import EventBus from "../EventBus";
import Handlebars from "handlebars";

export default class Block<T extends Record<string, any>> {
	static EVENTS = {
		INIT: "init",
		FLOW_CDM: "flow:component-did-mount",
		FLOW_RENDER: "flow:render",
		FLOW_CDU: "flow:component-did-update",
	};

	eventBus: EventBus;
	tagName: string;
	_element: HTMLElement;
	listeners: {
		eventName: string;
		element: HTMLElement;
		callback: EventListenerOrEventListenerObject;
	}[];
	props: T;

	constructor(tagName: string, props: T) {
		const eventBus = new EventBus();
		this.tagName = tagName;
		this._element = document.createElement("div");
		this.eventBus = eventBus;
		this.listeners = [];
		this.props = this._makePropsProxy(props);
		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}

	private _makePropsProxy(props: T): T {
		const self = this;

		// lolkekcheburek техническая переменная
		const lolkekcheburek = new Proxy(props, {
			deleteProperty() {
				throw new Error("нет доступа");
			},
			set(target, property, value) {
				// @ts-expect-error
				target[property] = value;
				self.setProps(props);
				return true;
			},
		});

		return lolkekcheburek;
	}

	setProps = (nextProps: T): void => {
		if (!nextProps) {
			return;
		}
		if (this.props == nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
		this.eventBus.emit(Block.EVENTS.FLOW_CDU, this.props, nextProps);
	};

	private _registerEvents(eventBus: EventBus): void {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
	}

	init(): void {
		this._createResourses();
		this.dispatchComponentDidMount();
		this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
	}

	private _createResourses(): void {
		this._element = this._createDocumentElement(this.tagName);
	}

	_createDocumentElement(tagName: string): HTMLElement {
		const newElement: HTMLElement = document.createElement(tagName),
			classes: string[] = this.props.data.classList,
			id: string = this.props.data.id;

		if (classes) {
			if (classes.length != 0)
				classes.forEach((item: string) => {
					newElement.classList.add(item);
				});
		}
		if (id) {
			newElement.id = id;
		}
		return newElement;
	}

	private _componentDidMount(): void {
		this.componentDidMount();
	}

	componentDidMount(): void {}

	dispatchComponentDidMount(): void {
		// this.eventBus.emit(Block.EVENTS.FLOW_CDU);
		this.eventBus.emit(Block.EVENTS.FLOW_CDM);
	}

	_render(): void {
		const block = this.render();
		this._removeEvents();
		this._element.innerHTML = block;
		if (this.props.events) {
			this.props.events.forEach((item: { [key: string]: any }) => {
				const key = Object.keys(item)[0],
					value = Object.values(item)[0];
				this._addEvents(key, this._element, value);
			});
		}
	}

	render(): string {
		return Handlebars.compile(this.props.tpl)(this.props.data);
	}

	private _componentDidUpdate() {
		this.componentDidUpdate();
	}

	componentDidUpdate(): boolean {
		this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
		return true;
	}

	get element() {
		return this._element;
	}

	getContent(): HTMLElement {
		return this.element;
	}

	_addEvents(
		eventName: string,
		element: HTMLElement,
		callback: EventListenerOrEventListenerObject
	) {
		element.addEventListener(eventName, callback);
		this.listeners.push({ callback, element, eventName });
		return this;
	}

	_removeEvents() {
		this.listeners.forEach(
			(item: {
				eventName: string;
				element: HTMLElement;
				callback: EventListenerOrEventListenerObject;
			}) => {
				item.element.removeEventListener(item.eventName, item.callback);
			}
		);
	}
}
