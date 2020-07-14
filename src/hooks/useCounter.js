import { useState } from "react";

export const useCounter = ( initialState = 10) => {

    const [state, setState] = useState(initialState);

    const increment = ( num = 1) => {
        setState( state + num );
    }

    const decrement = ( num = 1 ) => {
        setState( state - num );
    }

    const reset = () => {
        setState( initialState );
    } 

    return {
        state,
        increment,
        decrement,
        reset
    }
}