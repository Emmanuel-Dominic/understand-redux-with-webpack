// []
let lastId = 0;

// reducer, pure function using if statement
const reducer1 = (state = [], action) => {
    if(action.type === 'ADD_BUG'){
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    }else if(action.type === 'REMOVE_BUG'){
        return state.filter(bug => bug.id !== action.payload.id);
    }else{
        return state;
    }
}

// reducer, pure function using switch case
const reducer2 = (state = [], action) => {
    switch(action.type){
        case 'ADD_BUG':
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case 'REMOVE_BUG':
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
}
