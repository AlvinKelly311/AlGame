import { useState, createContext } from "react"; //step one create Context. 

export const ShopCart = createContext(); //step two, create the provider.

//step three, pass in data and consume with the provider
export const ShopCartprovider = ({ children }) => {
    const [cart, setCart] = useState([]); // Initialize cart state

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem('cartitems', JSON.stringify(updatedCart)); // Store in local storage
            return updatedCart;
        });
        console.log('Cart:', cart); // For debugging purposes
    };

    return (
        <ShopCart.Provider value={{ handleAddToCart, cart }}>  
            {children}
        </ShopCart.Provider>
    );
};