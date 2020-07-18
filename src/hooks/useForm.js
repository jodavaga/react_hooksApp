import { useState } from 'react';


// Manage forms using target names as a input form ref and it's values.

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value 
        })
    }

    const reset = () => {
        setValues( initialState );
    }

    return [ values, handleInputChange, reset ];
}