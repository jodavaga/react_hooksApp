import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAddForm = ( { handleAddTodo } ) => {

    // custom hook to manage form, input changes
    const [ {description}, handleInputChange, reset] = useForm({
        description: ''
    });


    const handleSubmit = (e) => {
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

        // call function from parent that dispatch action
        handleAddTodo( newTodo );

        // reset input form, using customHook function
        reset();
    }

    return (
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
    )
}
