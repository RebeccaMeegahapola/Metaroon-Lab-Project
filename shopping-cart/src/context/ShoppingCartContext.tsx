import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

//create context
const ShoppingCartContext = createContext({} as ShoppingCartContext)

//custom hook
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    //total quantity of items in a shopping cart
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

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

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            //This line checks if the item with the specified id is already in the cart and check if the item has a quantity of 1
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                //This removes the item from the cart and returns a new array that includes all items except the one with the specified id.
                return currItems.filter(item => item.id !== id)
            } else { //If the item is already in the cart/ The .map() function creates a new array by iterating over each item in currItems.
                return currItems.map(item => {   
                    //This checks if the current item's id matches the id of the item we're trying to decrease.             
                    if (item.id === id) {
                        //If the item matches, quantity increased by 1 [...item - spread operator - copies of properties]
                        return { ...item, quantity: item.quantity - 1 }
                    } else { //If the item does not match, return item unchanged
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}


//The Context API in React is used to share data or state across multiple components without having to pass props down manually at every level of the component tree.