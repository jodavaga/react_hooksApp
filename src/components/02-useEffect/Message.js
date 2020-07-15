import React, { useEffect } from 'react'

export const Message = () => {

    // will triggered unmounted when component unmount
    useEffect(() => {
        console.log("<Message /> mount!!")

        return () => {
            console.warn("<Message /> unmounted");
        }
    }, [])

    return (
        <div>
            <h1>Hola Jose!!</h1>
        </div>
    )
}
