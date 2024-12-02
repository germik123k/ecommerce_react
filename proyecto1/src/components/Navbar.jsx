// src/components/Navbar.jsx
import React from 'react';
import '../Navbar.css'
import CartWidget from './CartWidget'; // Importa el componente CartWidget

const Navbar = ({ links }) => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.leftSection}>
                <img src="logo.png" alt="Logo" style={styles.logo} /> 
                <div style={styles.links}>
                    {links.map((link, index) => (
                        <a  key={index} style={styles.link} className="nav-link" href="#">{link}</a>
                    ))}
                        </div>
            </div>
            <CartWidget /> 
        </nav>
    );
}

const styles = {
    navbar: {
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        position: 'fixed', // Mantiene el navbar fijo en la parte superior
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box' // Asegura que el padding se incluya dentro del ancho y alto del elemento
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: '100%', // Máximo alto del logo
        width: '60px' // Ancho especificado por defecto en 120px
    },
    links: {
        display: 'flex',
        gap: '1rem',
        marginLeft: '1rem' // Añade espacio entre el logo y los enlaces
    },
    link: {
        color: '#fff',
        fontSize: '1rem'
    }
    
};

export default Navbar;
