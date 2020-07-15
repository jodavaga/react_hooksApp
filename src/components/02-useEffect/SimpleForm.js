import React, { useState, useEffect } from 'react';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    
    const { name, email } = formState;
    
    // Only executed one time (on loaded component)
    useEffect(() => {
        console.log("First time loaded");
    }, []);
    
    // Executed every time something change on form
    useEffect(() => {
        console.log("FormState updated");
    }, [ formState ]);


    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <div className="container">
            <h1>useEffect - simple form</h1>
            <hr />
            <div className="row">
                <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={ name }
                    onChange={ handleInputChange }
                    autoComplete="off"
                ></input>   
            </div>
            
            <div className="row">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"
                ></input>   
            </div>
        </div>
    )
}
