import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleUseRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="container">
            <h1>RealExampleUseRef</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button
                className="btn btn-outline-primary mt-3"
                onClick={ () => setShow( !show ) }
            >Show/Hide</button>
        </div>
    )
}
