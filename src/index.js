import './styles/style.scss';
import dImage from './assets/dImage.png';

const createTextItem = (type, value) => {
    let element = document.createElement(`${type}`);
    element.textContent = value;
    return element;
}

const createGalleryItem = (type, value) => {
    let element = document.createElement(`${type}`);
    element.src = value;
    return element;
}

const welcome = () => {
    return () => {
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(createTextItem('h1', 'understand-redux-with-webpack'));
        body.appendChild(createGalleryItem('img', dImage));
        return body;
    };
}

let displayMessage = welcome();
displayMessage()
