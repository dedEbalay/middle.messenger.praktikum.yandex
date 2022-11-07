const i=document.querySelector("#root"),t=Handlebars.compile('\n    <div class="login">\n        <div class="login-modal">\n            <div class="login-modal__title">{{ title }}</div>\n            <input class="login-modal__mail-input login-modal__input" placeholder="{{ mailPlaceholder }}"></input>\n            <input class="login-modal__password-input login-modal__input" placeholder="{{ passwordPlaceholder }}"></input>\n            <div class="login-modal__buttons">\n                <button class="login-modal__buttons-signup login-modal__button">Sign Up</button>\n                <button class="login-modal__buttons-signin login-modal__button">Sign In</button>\n            </div>\n        </div>\n    </div>\n')({title:"Welcome back, товарищ!",mailPlaceholder:"любительгулага@ссылка.рф",passwordPlaceholder:"************"}),n=Handlebars.compile('\n    <div class="chats">\n        <div class="chats-field">\n            <div class="chats-field-user">\n                <div class="chats-field-user__avatar chats-avatar"></div>\n                <div class="chats-field-user__settings"></div>\n            </div>\n            <div class="chats-field-item">\n                <div class="chats-field-item__avatar chats-avatar"></div>\n                <div class="chats-field-item__title">{{ userName }}</div>\n                <div class="chats-field-item__date">{{ lastMessageDate }}</div>\n                <div class="chats-field-item__text">{{ messageText }}</div>\n            </div>\n        </div>\n        <div class="chats-message-field">\n            <div class="chats-message-field__message">{{ fullMessageText }}</div>\n        </div>\n        <div class="chats-text-field">\n            <input type="text" placeholder="Отправить донос..." class="chats-text-field__input">\n        </div>\n    </div>\n')({userName:"Любимый",lastMessageDate:"4:20",messageText:"Все твои друзья уже присоединилсь к ГУЛАГ..",fullMessageText:"Все твои друзья уже присоединились к ГУЛАГу, чего же ты еще ждешь!?"}),a=Handlebars.compile('\n    <div class="registration">\n        <div class="registration-modal">\n            <div class="registration-modal__title">{{ title }}</div>\n            <div class="registration-modal-input">\n                <div class="registration-modal-input__title">{{ nameTitle }}</div>\n                <input placeholder="Александр" type="text" class="registration-modal-input__input">\n            </div>\n            <div class="registration-modal-input">\n                <div class="registration-modal-input__title">{{ secondNameTitle }}</div>\n                <input placeholder="Солженицын" type="text" class="registration-modal-input__input">\n            </div>\n            <div class="registration-modal-input">\n                <div class="registration-modal-input__title">{{ loginTitle }}</div>\n                <input placeholder="uZniKGuLAgA" type="text" class="registration-modal-input__input">\n            </div>\n            <div class="registration-modal-input">\n                <div class="registration-modal-input__title">{{ mailTitle }}</div>\n                <input placeholder="uznikgulaga@ссылка.рф" type="text" class="registration-modal-input__input">\n            </div>\n            <div class="registration-modal-input">\n                <div class="registration-modal-input__title">{{ passwordTitle }}</div>\n                <input placeholder="***********" type="text" class="registration-modal-input__input">\n            </div>\n            <div class="registration-modal-input">\n                <div class="registration-modal-input__title">{{ phoneTitle }}</div>\n                <input placeholder="+7(800)555-35-35" type="text" class="registration-modal-input__input">\n            </div>\n            <div class="registration-modal__button">\n                Create user\n            </div>\n        </div>\n    </div>\n')({title:"We are glad that you decided to join us, товарищ!",nameTitle:"First name of товарищ",secondNameTitle:"Second name of товарищ",loginTitle:"Login of товарищ",mailTitle:"Email of товарищ",passwordTitle:"Password of товарищ",phoneTitle:"Phone of товарищ"});i.innerHTML=t;document.querySelector(".login-modal__buttons-signup").addEventListener("click",(()=>{i.innerHTML=a;document.querySelector(".registration-modal__button").addEventListener("click",(()=>{i.innerHTML=n}))}));
//# sourceMappingURL=index.2383bbef.js.map
