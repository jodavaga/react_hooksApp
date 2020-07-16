import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

    const [ state, setState ] = useState({ data: null, loading: true, error: null });

    // useRef to manage mount-unmount
    const isMounted = useRef(true);

    useEffect(() => {

        return () => {
            console.log("unmounted");
            isMounted.current = false;
        }
    }, [])

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

                // Only trigger setState if is mounted.
                if ( isMounted.current ) {
                    setState({
                        data,
                        loading: false,
                        errors: null
                    })
                } else {
                    console.log('setState not triggered')
                }
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