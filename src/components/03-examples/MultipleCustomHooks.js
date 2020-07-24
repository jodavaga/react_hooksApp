import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter( 1 );
    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );


    // console.log(state);

    const { data, loading, error } = state;

    // destructured data object. Evaluate, if not null, return data[0]
    const { author, quote } = !!data && data[0];

    return (
        <div className="container">
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                error && <div className="alert alert-danger"> Algo salio mal </div>
            }

            { loading 
                ? 
                    (
                        <div className="alert alert-info">Loading...</div>
                    )  
                :   
                    (
                        <div className="card">
                            <div className="card-body">
                                <blockquote className="blockquote text-right">
                                    <p>{ quote }</p>
                                    <footer className="blockquote-footer">{ author }</footer>
                                </blockquote>
                            </div>
                        </div>
                    )       
            }

            <button
                className="btn btn-primary mt-3"
                onClick={ () => increment() }
            >Next</button>

        </div>
    )
}