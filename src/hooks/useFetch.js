import { useState, useEffect } from 'react'

export const useFetch = ( url ) => {

    const [ state, setState ] = useState({ data: null, loading: true, errors: null });

    if (!url) {
        throw new Error('Url required!');
    }

    useEffect(() => {
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    data,
                    loading: false,
                    errors: null
                });
            })
            .catch( errors => {
                setState({
                    data: null,
                    loading: false,
                    errors
                })
            })
    }, [ url ]);

    return state;

}