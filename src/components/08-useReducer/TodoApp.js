import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAddForm } from './TodoAddForm';

import './styles.css';

const init = () => {
    const initialState = [{
        id: 0,
        desc: 'Estudiar React',
        done: false
    }];

    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const TodoApp = () => {

    const [ todos, dispacth ] = useReducer(todoReducer, [], init);

    // effect to save on localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ]);

    const handleAddTodo = ( newTodo ) => {
        dispacth({
            type: 'add',
            payload: newTodo
        });
    }

    // delete todo using reducer
    const handleDelete = ( todoId ) => {

        // action to delete
        const deleteAction = {
            type: 'delete',
            payload: todoId
        }

        dispacth( deleteAction );
    }

    const handleComplete = (todoId) => {
        // dispatch
        dispacth({ 
            type: 'toggle',
            payload: todoId 
        });
    }

    return (
        <div className="container">
            <h1>Todo APP - ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleComplete={ handleComplete }
                        handleDelete={ handleDelete }
                    />
                </div>

                <div className="col-5">
                    <TodoAddForm handleAddTodo={ handleAddTodo } />
                </div>

            </div>


        </div>
    )
}
