import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorized = () => {

    const { counter, increment } = useCounter();

    const [show, setShow] = useState(true);

    return (
        <div className="container">
            <h1>Memo counter: <Small value={ counter }  /></h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                 + 1
            </button>

            <button 
                className="btn btn-outline-info ml-3"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide: { JSON.stringify( show ) }
            </button>

        </div>
    )
}
