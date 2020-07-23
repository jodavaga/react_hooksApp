import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {

    const { user, setUser } = useContext( UserContext );

    const handleLogout = () => {
        setUser({});
    }

    return (
        <div className="container">
            <h1>HomePage</h1>
            <hr />
            <div className="d-flex justify-content-end">
                <button
                    className="btn btn-outline-danger"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    )
}
