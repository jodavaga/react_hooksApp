import { useState } from "react";

export const useCounter = ( initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = ( num = 1) => {
        setCounter( counter + num );
    }

    const decrement = ( num = 1 ) => {
        setCounter( counter - num );
    }

    const reset = () => {
        setCounter( initialState );
    } 

    return {
        counter,
        increment,
        decrement,
        reset
    }
}