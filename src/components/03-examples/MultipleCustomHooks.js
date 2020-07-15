import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/1` );

    console.log(state);

    const { data, loading, error } = state;

    // destructured data object. Evaluate, if not null, return data[0]
    const { author, quote } = !!data && data[0];

    //// similar to: 
    // let author, quote;
    // if (data !== null) {
    //      author = data[0].author;
    //      quote = data[0].quote;
    // }

    return (
        <div className="container">
            <h1>Multiple Custom Hooks!!</h1>
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

        </div>
    )
}