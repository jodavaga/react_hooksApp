import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const user = {
        id: 1,
        name: "Jose D. Vasquez",
        email: "email@email.com"
    }

    return (
        <UserContext.Provider value={ user }>
            <AppRouter />

        </UserContext.Provider>

    )
}
