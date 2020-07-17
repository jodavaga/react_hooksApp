import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({ incrementar }) => {

    console.error('Renderizado!');

    return (
        <button
            className="btn btn-primary mt-3"
            onClick={ incrementar }
        >
            Incrementar
        </button>
    )
})

ShowIncrement.propTypes = {
    incrementar: PropTypes.func.isRequired
}


