import store from './store';
import * as actions from './actionTypes';

console.log(store);

const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

console.log(store.getState(), 'initialState');

store.dispatch({
    type: actions.ADD_BUG,
    payload: {
        description: 'This is our first Bug.'
    }
});

unsubscribe();

store.dispatch({
    type: actions.REMOVE_BUG,
    payload: {
        id: 1
    }
});

console.log(store.getState());
