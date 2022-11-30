export function blurValidation(e: Event): void {
	const element: EventTarget = e.target!;
	if (element instanceof HTMLInputElement) {
		let refValue: string = element.value;
		const errorClass: string = "error",
			errorClassOnTop: string = "error--top";
		const checkClass: boolean = element.classList.contains(errorClass);
		const checkErrorAndAddErrorClass = (errorMessage: string): void => {
			if (document.querySelector(`#${element.id}`)?.nextElementSibling) {
				if (
					document
						.querySelector(`#${element.id}`)
						?.nextElementSibling?.classList.contains("error__message")
				) {
					document
						.querySelector(`#${element.id}`)
						?.nextElementSibling?.remove();
				}
			}
			const errorElement = document.createElement("div");
			errorElement.innerText = errorMessage;
			errorElement.classList.add("error__message");
			if (element.id === "message") {
				if (
					document.querySelector(`#${element.id}`)?.previousElementSibling
				) {
					if (
						document
							.querySelector(`#${element.id}`)
							?.previousElementSibling?.classList.contains(
								"error__message"
							)
					) {
						document
							.querySelector(`#${element.id}`)
							?.previousElementSibling?.remove();
					}
				}
				errorElement.classList.add(errorClassOnTop);
				element.before(errorElement);
			} else {
				element.after(errorElement);
			}
			if (!checkClass) {
				element.classList.add(errorClass);
			}
		};
		const checkErrorAndRemoveErrorClass = (): void => {
			if (element.id === "message") {
				if (
					document.querySelector(`#${element.id}`)?.previousElementSibling
				) {
					if (
						document
							.querySelector(`#${element.id}`)
							?.previousElementSibling?.classList.contains(
								"error_message"
							)
					) {
						document
							.querySelector(`#${element.id}`)
							?.previousElementSibling?.remove();
					}
				}
			} else {
				if (document.querySelector(`#${element.id}`)?.nextElementSibling) {
					if (
						document
							.querySelector(`#${element.id}`)
							?.nextElementSibling?.classList.contains("error__message")
					) {
						document
							.querySelector(`#${element.id}`)
							?.nextElementSibling?.remove();
					}
				}
			}
			if (checkClass) {
				element.classList.remove(errorClass);
			}
		};
		switch (element.id) {
			case "first_name": // валидация на поля 'first_name' и 'second_name', условия: отсутствие цифр, спецсимволов, пробелов; допустимо наличие дефиса, должны начинаться с заглавной буквы
			case "second_name":
				refValue = refValue.replace(/[a-zа-яё\-]/gi, ""); //  regex проверки 'first_name' & 'second_name'
				function startsWithCapital(str: string) {
					//  функция проверки на заглавную букву в начале строки. При начале на букву в нижнем регистре, возвращает false
					return str.charAt(0) === str.charAt(0).toUpperCase();
				}
				if (refValue.length > 0) {
					checkErrorAndAddErrorClass("Обнаружены недопустимые символы");
					break;
				} else if (!startsWithCapital(element.value)) {
					checkErrorAndAddErrorClass(
						"Имя должно начинаться с заглавной буквы"
					);
					break;
				} else {
					checkErrorAndRemoveErrorClass();
					break;
				}
			case "login":
				refValue = refValue.replace(/[\d]/gi, "");
				if (refValue.length == 0 && element.value.length != 0) {
					checkErrorAndAddErrorClass(
						"Логин не может состоять из одних цифр"
					);
					break;
				} else {
					refValue = element.value;
					refValue = refValue.replace(/[a-z\-\d\_]/gi, ""); //  regex проверки 'login'
					if (element.value.length < 3 || element.value.length > 20) {
						checkErrorAndAddErrorClass(
							"Длина логина не может быть короче 3 или длинее 20 символов"
						);
						break;
					} else if (refValue.length > 0) {
						checkErrorAndAddErrorClass("Обнаружены недопустимые символы");
						break;
					} else {
						checkErrorAndRemoveErrorClass();
						break;
					}
				}
			case "email":
				refValue = refValue.replace(/[a-z\d\-\_\@\.]/gi, "");
				if (refValue.length > 0) {
					checkErrorAndAddErrorClass("Обнаружены недопустимые символы");
					break;
				} else {
					refValue = element.value;
					refValue = refValue.replace(/[^@\.]/gi, "");
					if (!refValue.includes("@.")) {
						checkErrorAndAddErrorClass("Почта должна содержать @ и .");
						break;
					} else {
						checkErrorAndRemoveErrorClass();
						break;
					}
				}
			case "password":
			case "new_password":
				function checkCapitalLetter(str: string): boolean {
					const stringWithoutDigitals = str.replace(/[^a-z]/gi, "");
					for (let char of stringWithoutDigitals) {
						let capitalChar = char.toUpperCase();
						if (char === capitalChar) {
							return true;
						}
					}
					return false;
				}
				const additiveValue = refValue.replace(/[^\d]/gi, "");
				if (refValue.length < 8 || refValue.length > 40) {
					checkErrorAndAddErrorClass(
						"Пароль не может быть короче 8 или длинее 40 символов"
					);
					break;
				} else if (
					additiveValue.length == 0 ||
					!checkCapitalLetter(refValue)
				) {
					checkErrorAndAddErrorClass(
						"Пароль должен содержать, по меньшей мере, 1 цифру и заглавную букву"
					);
					break;
				} else {
					checkErrorAndRemoveErrorClass();
					break;
				}
			case "phone":
				const additiveValue2 = refValue.replace(/[^+]/gi, "");
				refValue = refValue.replace(/[\d\+]/gi, "");
				if (refValue.length > 0 || additiveValue2.length > 1) {
					checkErrorAndAddErrorClass(
						'Телефон должен состоять только из цифр(может содержать "+" в начале)'
					);
					break;
				} else if (
					additiveValue2.length == 1 &&
					!element.value.startsWith("+")
				) {
					checkErrorAndAddErrorClass(
						'"+" должен стоять в начале номера телефона'
					);
					break;
				} else {
					checkErrorAndRemoveErrorClass();
					break;
				}
			case "message":
				if (element.value.length < 1) {
					checkErrorAndAddErrorClass("Сообщение не может быть пустым");
					break;
				} else {
					checkErrorAndRemoveErrorClass();
					break;
				}
		}
	}
}

export function submitValidation(e: Event) {
	e.preventDefault();
	let errors = 0;
	const inputs = document.querySelectorAll("input"),
		arrayFromInputs: any[] = Array.from(inputs);
	arrayFromInputs.forEach((item: HTMLInputElement) => {
		const event = new Event("blur");
		item.dispatchEvent(event);
	});
	arrayFromInputs.forEach((item: HTMLInputElement) => {
		if (item.classList.contains("error")) {
			errors++;
		}
	});
	if (errors > 0) {
		console.log("Ошибки в инпутах");
	} else {
		arrayFromInputs.forEach((item: HTMLInputElement) => {
			console.log(item.value);
		});
	}
}

export function closeModal(e: Event) {
	const target: EventTarget = e.target!;
	if (target instanceof HTMLElement) {
		if (target.classList.contains("profile-info-block__button")) {
			document.querySelector(".profile")?.remove();
		}
	}
}
