import Block from "../../components/Block";

export const profileTpl = `
   <div class="profile-container">
      <div class="profile-img-block">
         <img class="profile-img-block__img" src="https://i.ibb.co/tD72j7q/solzh.jpg" alt="Иконка пользователя :3"></img>
         <button class="profile-img-block__btn">Изменить аватар...</button>
      </div>
   </div>
`;

export const profileFormTpl = `
   <div id="profile_first_name_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">First Name</div>
   </div>
   <div id="profile_second_name_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">Second Name</div>
   </div>
   <div id="profile_displayed_name_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">Display Name</div>
   </div>
   <div id="profile_login_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">Login</div>
   </div>
   <div id="profile_email_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">Email</div>
   </div>
   <div id="profile_phone_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">Phone</div>
   </div>
   <div id="profile_old_password_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">Old Password</div>
   </div>
   <div id="profile_new_password_div" class="profile-info-block__item">
      <div class="profile-info-block-item__title">New Password</div>
   </div>
   <button class="profile-info-block__button">Сохранить изменения</button>
`;

type ProfileType = {
	tpl: string;
	data: {
		imgLink: string;
		classList: string[];
	};
	events: [
		{
			[key: string]: (e: Event, element: HTMLInputElement) => void;
		}
	];
};

export default class Profile extends Block<ProfileType> {
	constructor(props: ProfileType) {
		super("div", props);
	}
}
