import React from 'react';
import PropTypes from 'prop-types';

import { TodoListItem } from './TodoListItem';

export const TodoList = ( {todos, handleComplete, handleDelete} ) => {
    return (
        <>
            { todos.length > 0 &&
                <ul className="todo-list">
                    {
                        todos.map( (item, i) => {
                            return (
                                <TodoListItem 
                                    key={ item.id }
                                    todo={ item }
                                    index={ i }
                                    handleComplete={ handleComplete }                                                                                
                                    handleDelete={ handleDelete }                                    
                                />
                            )
                        })    
                    }
                </ul>
            }
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}
