import { createContext, ReactNode, useContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

//create context
const ShoppingCartContext = createContext({})

//custom hook
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


//The Context API in React is used to share data or state across multiple components without having to pass props down manually at every level of the component tree.