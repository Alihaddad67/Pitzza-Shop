import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null)



export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems]);


    const quantity = (itemId) => {
        const item = cartItems.find((item) => item.id === itemId);
        const count = item?.count;

        if (count === undefined) {
            return 0;
        } else {
            return count;
        }
    };
    const addToCart = (itemId) => {
        if (!cartItems.find((item) => item.id === itemId))
            setCartItems([...cartItems, { id: itemId, count: 1 }])
        else
            setCartItems(cartItems.map((item) => {
                if (item.id === itemId)
                    return { ...item, count: item.count + 1 }
                else return item
            }))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.map((i) => {
            if (i.id === itemId)
                return { ...i, count: i.count === 0 ? 0 : i.count - 1 }
            else return i
        }))
    }

        const deletFromCart = (itemId) => {
            setCartItems(cartItems.filter((item)=> {
    return item.id !==itemId
}))
      }

const contextValue = { cartItems, addToCart, removeFromCart, quantity }
return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>


}