import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutPage = () => {

    const { user, setUser } = useContext( UserContext );

    const { username } = user;

    return (
        <div className="container">
            <h1>AboutPage</h1>
            <hr />

            <h4>Hola!, <strong>{ username ? username : 'Por favor haga login' }</strong>...</h4>
        </div>
    )
}
