import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './CounterApp.css';

export const CounterCustomHook = () => {

    const { state: counter, increment, decrement, reset } = useCounter( 100 );

    return(
        <div className="container">
            <h1>Counter: { counter }</h1>
            <hr />

            <button 
                onClick={ () => increment(2) }
                className="btn btn-primary"> Add </button>
            <button 
                onClick={ () => reset() }
                className="btn btn-secondary"> Reset </button>
            <button 
                onClick={ () => decrement() }
                className="btn btn-primary"> Substract </button>
        </div>
    )
}