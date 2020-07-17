import React, { useReducer, useRef } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Estudiar React',
    done: false
}];

export const TodoApp = () => {

    const [ todos, dispacth ] = useReducer(todoReducer, initialState);
    const inputRef = useRef('');

    // add new todo
    const handleSubmit = ( e ) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: `${ inputRef.current.value }`,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispacth( action );

        // cleanup input 
        inputRef.current.value = '';
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
                                        <p>{i+1}. { item.desc } </p>
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
                            className="form-control"
                            ref={ inputRef }
                            onClick={ ({target}) => target.select()  }
                            placeholder="Add todo..."
                            name="description"
                            autoComplete="off"
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
