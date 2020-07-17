// Initialstate as array
const initialState = [{
    id: 1,
    todo: 'Estudiar React',
    done: false
}]

const todoReducer = ( state = initialState, action ) => {

    // if action is agregar, then modify state with new payload
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Seguir estudiando React',
    done: false
}

// action to add newTodo
const todoAddAction = {
    type: 'agregar',
    payload: newTodo
}

// if run this will add new todo to state through reducer function.
todos = todoReducer(todos, todoAddAction);

console.log(todos);
