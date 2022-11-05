// import Handlebars from 'handlebars';
import tpl from './registration.hbs';
import './registration.css'

// const data = {
//     title: 'We are glad that you decided to join us, товарищ!',
//     nameTitle: 'First name of товарищ',
//     secondNameTitle: 'Second name of товарищ',
//     loginTitle: 'Login of товарищ',
//     mailTitle: 'Email of товарищ',
//     passwordTitle: 'Password of товарищ',
//     phoneTitle: 'Phone of товарищ'
// }

// Handlebars.registerPartial('registration', tpl);

export default (props = {}) =>  {
    return tpl(props);
}