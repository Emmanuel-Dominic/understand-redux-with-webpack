import store from './store';

console.log(store);

const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

console.log(store.getState(), 'initialState');

store.dispatch({
    type: 'ADD_BUG',
    payload: {
        description: 'This is our first Bug.'
    }
});

unsubscribe();

store.dispatch({
    type: 'REMOVE_BUG',
    payload: {
        id: 1
    }
});

console.log(store.getState());
