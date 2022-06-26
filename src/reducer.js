import * as actions from './actionTypes';
// []
let lastId = 0;

// reducer, pure function using if statement
const reducer1 = (state = [], action) => {
    if(action.type === actions.ADD_BUG){
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    }else if(action.type === actions.REMOVE_BUG){
        return state.filter(bug => bug.id !== action.payload.id);
    }else{
        return state;
    }
}

// reducer, pure function using switch case
const reducer = (state = [], action) => {
    switch(action.type){
        case actions.ADD_BUG:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.REMOVE_BUG:
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
}
export default reducer;
