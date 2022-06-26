import store from './store';
import { addBug, removeBug } from './actions';

store.dispatch(addBug('This is our updated Bug.'));
console.log(store.getState());
store.dispatch(removeBug(1));
console.log(store.getState());
