import { createStore } from 'redux';
import reducer from './reducer';

// this createStore is a higher-order function, it takes in a function as an argument
const store = createStore(reducer);

export default store;
