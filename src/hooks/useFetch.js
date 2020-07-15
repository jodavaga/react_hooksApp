import { useState, useEffect } from 'react'

export const useFetch = ( url ) => {

    const [ state, setState ] = useState({ data: null, loading: true, error: null });

    if (!url) {
        throw new Error('Url required!');
    }

    useEffect(() => {

        setState({
            ...state,
            loading: true
        })
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    data,
                    loading: false,
                    errors: null
                });
            })
            .catch( error => {
                setState({
                    data: null,
                    loading: false,
                    error
                })
            })
    }, [ url ]);

    return state;

}