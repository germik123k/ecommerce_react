// src/components/CartWidget.jsx
import '../Navbar.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import { CartContext } from '../context/CartContext'; // Importa el contexto

const CartWidget = () => {
    const { cartItems } = useContext(CartContext); // Usa el contexto
    const itemCount = cartItems.length; // Cuenta el número de tipos de productos

    return (
        <div style={styles.cartContainer}>
            <Link to="/carrito">
                <i className="fa fa-shopping-cart" title="Carrito de compras" style={styles.cartIcon}></i>
                {itemCount > 0 && (
                    <div style={styles.cartBubble}>
                        {itemCount}
                    </div>
                )}
            </Link>
        </div>
    );
}

const styles = {
    cartContainer: {
        position: 'relative'
    },
    cartIcon: {
        color: '#fff',
        fontSize: '2rem', // Tamaño intermedio para el icono del carrito
        cursor: 'pointer' // Cambia el cursor a tipo 'pointer' cuando está sobre el icono
    },
    cartBubble: {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8rem'
    }
};

export default CartWidget;
