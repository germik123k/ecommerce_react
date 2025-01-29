// src/components/CartWidget.jsx
import '../Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const CartWidget = () => {
    return (
        <Link to="/carrito">
            <i className="fa fa-shopping-cart" title="Carrito de compras" style={styles.cartIcon}></i>
        </Link>
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
