import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);

    // will call function only if dependency (counter) change
    const memorizeCounter = useMemo(() => procesoPesado( counter ), [ counter ]);

    return (
        <div className="container">
            <h1>Memo Hook</h1>
            <h3> Counter: { counter } </h3>
            <hr />

            {/* will be triggered each time component render */}
            {/* will NOT using useMemo */}
            
            <p> { memorizeCounter } </p>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                 + 1
            </button>

            {/* clicking on button will render component again */}
            <button 
                className="btn btn-outline-info ml-3"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide: { JSON.stringify( show ) }
            </button>

        </div>
    )
}
