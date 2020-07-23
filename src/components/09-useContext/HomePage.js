import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { useHistory } from 'react-router-dom';

export const HomePage = () => {

    const { user, setUser } = useContext( UserContext );

    const history = useHistory();

    const handleLogout = () => {
        setUser({});

        alert('Loged out!');
        history.push('/login');
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
