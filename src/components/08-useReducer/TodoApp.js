import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Estudiar React',
    done: false
}];

export const TodoApp = () => {

    const [ todos ] = useReducer(todoReducer, initialState);

    return (
        <div className="container">
            <h1>Todo APP</h1>
            <hr />

            <ul>
                {
                    todos.map( ({id, desc}) => {
                        return (
                            <li key={ id }> { desc} </li>
                        )
                    })    
                }
            </ul>
        </div>
    )
}
