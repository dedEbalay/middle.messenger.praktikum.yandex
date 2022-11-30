export default class EventBus {
	listeners: any; //  заглушка listeners: any

	constructor() {
		this.listeners = {};
	}

	on(event: string, callback: () => void): void {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);
	}

	off(event: string, callback: () => void): void {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event] = this.listeners[event].filter(
			(listener: () => void) => listener !== callback //  заглушка от VSCode 'listener =>' в '(listener: () => void) =>'
		);
	}

	emit(event: string, ...args: any): void {
		//  заглушка ...args: any
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event].forEach(function (listener: () => void) {
			listener.apply(null, args);
		});
	}
}
