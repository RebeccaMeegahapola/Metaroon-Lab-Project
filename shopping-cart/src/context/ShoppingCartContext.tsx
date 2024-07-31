import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

//create context
const ShoppingCartContext = createContext({} as ShoppingCartContext)

//custom hook
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>({})

    //checks if the id of the current item in the array matches the id provided to the getItemQuantity function. If a match is found, .find() returns the item object. If no match is found, .find() returns undefined.
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            //This line checks if the item with the specified id is already in the cart. If no such item is found (find returns null or undefined)
            if (currItems.find(item => item.id === id) == null) {
                //If the item is not in the cart, returns a new array that includes all the current items in the cart and adds a new item with the specified id and quantity of 1.
                return [...currItems, { id, quantity: 1 }]
            } else { //If the item is already in the cart
                return currItems.map(item => {   
                    //This checks if the current item's id matches the id of the item we're trying to increase.             
                    if (item.id === id) {
                        //If the item matches, quantity increased by 1 [...item - spread operator - copies of properties]
                        return { ...item, quantity: item.quantity + 1 }
                    } else { //If the item does not match, return item
                        return item
                    }
                })
            }
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


//The Context API in React is used to share data or state across multiple components without having to pass props down manually at every level of the component tree.