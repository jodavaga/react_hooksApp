import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const incrementMemorized = useCallback( () => {
            setCounter( (c) => c + 1 );
        }, [ setCounter ]);

    return (
        <div className="container">
            <h1>Callback Hook</h1>
            <hr />
            <h3>Contador: { counter }</h3>

            <ShowIncrement incrementar={ incrementMemorized }/>
        </div>
    )
}
