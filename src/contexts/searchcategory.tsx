import { createContext, useState } from 'react';


export const CategoryContexts = createContext({} as any)

export const CategoryStore = ({children}: any) => {
    const [categoryId, setCategoryId] = useState('0')

    return (
        <CategoryContexts.Provider value={{ categoryId, setCategoryId}}>
            {children}
        </CategoryContexts.Provider>
    )

}