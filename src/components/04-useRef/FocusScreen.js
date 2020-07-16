import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputElement = useRef(null);

    const handleFocus = () => {
        inputElement.current.select();
    }

    return (
        <div className="container">
            <h1>Focus useRef</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Full Name"
                ref={ inputElement }
            />

            <button
                className="btn btn-outline-primary mt-3"
                onClick={ handleFocus }
            >Focus</button>
        </div>
    )
}
