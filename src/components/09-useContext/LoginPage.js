import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {

    const [ {username, password}, handleInputChange ]  = useForm({
        username: '',
        password: ''
    });

    // useContext (use of UserContext)
    const { user, setUser } = useContext( UserContext );

    // router navigation
    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // setValues on context
        setUser({
            ...user,
            username,
            password
        });

        // navigate to HomePage after submit
        // history.push('/');

    }

    return (
        <div className="container">
            <h1>LoginPage</h1>
            <hr />
            
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="username"
                        name='username'
                        value={ username }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        name='password'
                        value={ password }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                </div>

                <button
                    className="btn btn-primary mt-3"
                    type="submit"
                >
                    Guardar
                </button>
            </form>

            <br/>
            <pre>   
                {/* get values from context */}
                { user.username && `usuario registrado: ${ JSON.stringify(user, null, 3) }` }
            </pre>



        </div>
    )
}
