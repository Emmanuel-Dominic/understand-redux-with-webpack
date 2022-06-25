import './styles/style.scss';
// import dImage from './assets/dImage.png';

const createTextItem = (value) => {
    let element = document.createElement('h1');
    element.textContent = value;
    return element;
}

const welcome = (str) => {
    return () => {
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(str);
        return body;
    };
}

const displayMessage = welcome(createTextItem('understand-redux-with-webpack'));
displayMessage()
