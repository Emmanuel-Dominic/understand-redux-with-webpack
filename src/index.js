import { compose, pipe } from 'lodash/fp';
import './styles/style.scss';
// import dImage from './assets/dImage.png';


const welcome = (value) => (type) => {
        let body = document.getElementsByTagName('body')[0];
        let element = document.createElement(`${type}`);
        element.textContent = value;
        body.appendChild(element);
        return body;
}

welcome('understand-redux-with-webpack')('h1');
// welcome('understand-redux-with-webpack');
// welcome('h1');
