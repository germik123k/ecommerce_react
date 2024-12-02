// src/components/CartWidget.jsx
import '../Navbar.css'
import React from 'react';

const CartWidget = () => {
    return (
        <i className="fa fa-shopping-cart" title="Carrito de compras" style={styles.cartIcon}></i>
    );
}

const styles = {
    cartIcon: {
        color: '#fff',
        fontSize: '2rem', // Tamaño intermedio para el icono del carrito
        cursor: 'pointer' // Cambia el cursor a tipo 'pointer' cuando está sobre el icono
    }
};

export default CartWidget;
