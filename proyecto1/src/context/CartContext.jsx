// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, cantidad) => {
        setCartItems((prevItems) => {
            const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                // Si el producto ya existe, actualiza la cantidad
                const updatedItems = [...prevItems];
                updatedItems[existingProductIndex].cantidad = cantidad;
                
                console.log("Carrito actualizado: ", updatedItems); // console.log añadido aquí
                
                return updatedItems;
            } else {
                // Si el producto no existe, agréguelo con la cantidad
                const newItems = [...prevItems, { ...product, cantidad }];
                
                console.log("Producto añadido al carrito: ", newItems); // console.log añadido aquí
                
                return newItems;
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.id !== productId);
            
            console.log("Producto eliminado del carrito: ", updatedItems); // console.log añadido aquí
            
            return updatedItems;
        });
    };
    const clearCart = () => {
        setCartItems([]);
        console.log("Carrito vaciado");
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
