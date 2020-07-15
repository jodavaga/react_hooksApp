import React, { useState } from 'react';

export const SimpleForm = () => {

    const [state, setState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = state;

    const handleInputChange = (e) => {
        setState({
            ...state,
            [ e.target.name ]: e.target.value
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
