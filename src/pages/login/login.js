// import Handlebars from 'handlebars';
import tpl from './login.hbs';
import './login.css';

// export default function LoginPage() {
//     const data = {
//         title: 'Welcome back, товарищ!',
//         mailPlaceholder: 'любительгулага@ссылка.рф',
//         passwordPlaceholder: '************',
//     }

//     const template = Handlebars.compile(tpl(data))(data);
//         //   render = template(data);
//     document.querySelector('#root').innerHTML  =  template
// }

// Handlebars.registerPartial('login', tpl);

export default (props = {}) =>  {
    return tpl(props);
}