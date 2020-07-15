import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange, handleSubmit ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambio')
    }, [ email ])

    return (
        <div className="container">
            <h1>Form With Custom Hook</h1>
            <hr />
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                        value={ name }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    ></input>   
                </div>
                
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={ email }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    ></input>   
                </div>
    
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="***"
                        value={ password }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    ></input>   
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary">
                    Guardar
                </button>
            </form>
        </div>
    )
}
