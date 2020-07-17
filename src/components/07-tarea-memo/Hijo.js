import React from 'react'

export const Hijo = React.memo(({ valor, incrementar }) => {

    console.error('Me volvi a ejecutar!');

    return (
        <button
            className="btn btn-primary ml-3"
            onClick={ () => incrementar(valor) }
        >
            { valor }
        </button>
    )
})
