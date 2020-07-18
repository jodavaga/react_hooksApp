import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import { upperCaseFirstLetter } from '../../helpers/uppercaseFirstLetter';

import './styles.css';

const init = () => {
    const initialState = [{
        id: new Date().getTime(),
        desc: 'Estudiar React',
        done: false
    }];

    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const TodoApp = () => {

    const [ todos, dispacth ] = useReducer(todoReducer, [], init);

    // custom hook to manage form, input changes
    const [ {description}, handleInputChange, reset] = useForm({
        description: ''
    });

    // effect to save on localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ]);

    // add new todo
    const handleSubmit = ( e ) => {
        e.preventDefault();

        // prevent add empty todo
        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: `${ description }`,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispacth( action );

        // reset input form, using customHook function
        reset();
    }

    return (
        <div className="container">
            <h1>Todo APP</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="todo-list">
                        {
                            todos.map( (item, i) => {
                                return (
                                    <div 
                                        key={ item.id }
                                        className="todo-item"
                                    >
                                        <p>{i+1}. { upperCaseFirstLetter(item.desc) } </p>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            Borrar
                                        </button>
                                    </div>
                                )
                            })    
                        }
                    </ul>
                </div>

                <div className="col-5">

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            onClick={ ({target}) => target.select()  }
                            placeholder="Add todo..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-block mt-2"
                        >
                            Agregar
                        </button>
                    </form>
                </div>

            </div>


        </div>
    )
}
