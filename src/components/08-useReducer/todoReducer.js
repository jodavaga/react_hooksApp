export const todoReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            // return and array of todos, different to deleted one
            return state.filter( todo => todo.id !== action.payload); // 1595032094606
    
        default:
            return state;
            break;
    }
}