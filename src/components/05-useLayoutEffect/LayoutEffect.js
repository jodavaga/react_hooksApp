import React, { useRef, useLayoutEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter( 1 );
    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    const { data } = state;
    
    // destructured data object. Evaluate, if not null, return data[0]
    const { author, quote } = !!data && data[0];
    
    // Using layoutEffect hook
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState();

    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [ quote ])
    
    return (
        <div className="container">
            <h1>Layout Effect</h1>
            <hr />

            <div className="card">
                <div className="card-body">
                    <blockquote className="blockquote text-right">
                        <p
                            className="mb-0"
                            ref={ pTag }
                        >{ quote }</p>
                    </blockquote>
                </div>
            </div>

            <button
                className="btn btn-primary mt-3"
                onClick={ () => increment() }
            >Next</button>

            <pre className="mt-3"> { JSON.stringify( boxSize, null, 3 ) } </pre>

        </div>
    )
}