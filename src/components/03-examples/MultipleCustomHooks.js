import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/6` );
    console.log(state);

    const { data, loading, errors } = state;

    return (
        <div className="container">
            <h1>Multiple Custom Hooks!!</h1>
            <hr />

            { loading && <pre>Loading...</pre> }

            { !loading && <div className="card">
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> }

            

        </div>
    )
}