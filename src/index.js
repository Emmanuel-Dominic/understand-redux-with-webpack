import store from './store';

console.log(store);

store.dispatch({
    type: 'ADD_BUG',
    payload: {
        description: 'This is our first Bug.'
    }
});

console.log(store.getState());


store.dispatch({
    type: 'REMOVE_BUG',
    payload: {
        id: 1
    }
});

console.log(store.getState());
