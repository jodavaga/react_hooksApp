import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {

    const userContext = useContext( UserContext );

    console.log(userContext);

    return (
        <div className="container">
            <h1>HomePage</h1>
            <hr />
        </div>
    )
}
