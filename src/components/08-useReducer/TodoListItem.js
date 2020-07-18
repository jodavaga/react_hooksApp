import React from 'react';
import { upperCaseFirstLetter } from '../../helpers/uppercaseFirstLetter';

export const TodoListItem = ( {todo, index, handleComplete, handleDelete} ) => {
    return (
        <div 
            className="todo-item"
        >
            <p  
                className={ `${ todo.done && 'complete' }` }
                onClick={ () => handleComplete( todo.id ) }
            >
                {index+1}. { upperCaseFirstLetter(todo.desc) }
            </p>
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </div>
    )
}
