import store from './store';
import { addBug, removeBug, resolveBug } from './actions';

store.dispatch(addBug('This is our first Bug.'));
console.log(store.getState());
store.dispatch(addBug('This is our second Bug.'));
console.log(store.getState());
store.dispatch(removeBug(1));
console.log(store.getState());
store.dispatch(resolveBug(2));
console.log(store.getState());
