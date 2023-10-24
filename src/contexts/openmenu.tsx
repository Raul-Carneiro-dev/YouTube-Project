import { createContext, useState } from 'react';


export const UserContexts = createContext({} as any)

export const UserStore = ({children}: any) => {
    const [openMenu, setOpenMenu] = useState(true)
    const [color, setColor] = useState(false)

    return (
        <UserContexts.Provider value={{openMenu, setOpenMenu, color, setColor}}>
            {children}
        </UserContexts.Provider>
    )

}