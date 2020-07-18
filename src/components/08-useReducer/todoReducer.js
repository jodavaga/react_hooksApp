export const todoReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            // return and array of todos, different to deleted one
            return state.filter( todo => todo.id !== action.payload); // 1595032094606

        case 'toggle':
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo    
            );
            
        // same as above
        case 'toggle-old':
            return state.map( todo => {
                if ( todo.id === action.payload ) {
                    // update only one prop on the todo obj
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
    
        default:
            return state;
            break;
    }
}