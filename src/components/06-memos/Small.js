// import React, { memo } from 'react';
import React from 'react';

export const Small = React.memo( ({ value }) => {

    // without memo, will be rendered each time
    console.log('Small redered :( ');

    return (
        <small>
            { value }
        </small>
    )
})
