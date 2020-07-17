import React, { useState } from 'react';
import { Hijo } from './Hijo';


export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(10);

    const increment = (num) => {
        setValor( valor + num );
    }

    return (
        <div className="container">
            <h1>Padre</h1>
            <p>Total: { valor }</p>
            <hr />

            {
                numeros.map( n => {
                    return (
                        <Hijo 
                            key={ n }
                            valor={ n }
                            incrementar={ () => increment(n) }
                        />
                    )
                })
            }

        </div>
    )
}
