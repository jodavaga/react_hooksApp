import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCords] = useState({x: 0, y: 0});

    const {x, y} = cords;

    // will triggered unmounted when component unmount
    useEffect(() => {
        // console.log("<Message /> mount!!");

        const mouseMove = (e) => {
            const cordenadas = { x: e.x, y: e.y };
            // console.log( cordenadas );
            console.log(" :D ")
            setCords( cordenadas );
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            // console.warn("<Message /> unmounted");

            // It's important to remove events listeners on cleanup
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h1>Hola Jose!!</h1>
            <pre>X: { x } - Y: { y }</pre>
        </div>
    )
}
