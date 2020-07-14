import React, { useState } from 'react';
import './CounterApp.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState(10)

    return (
        <div className="container">
            <h1>Counter: { counter }</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => setCounter( counter + 1 ) }
            > +1 </button>

            <button
                className="btn btn-secondary"
                onClick={ () => setCounter( 0 ) }
            > Reset </button>
        </div>
    )
}
