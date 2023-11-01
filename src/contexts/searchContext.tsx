import { createContext, useState } from "react";

export const SearchContexts = createContext({} as any);

export const SearchStore = ({children}: any) => {

    const [search, setSearch] = useState('')

    return (
        <SearchContexts.Provider value={{search, setSearch}}>
            {children}
        </SearchContexts.Provider>
    )
}
