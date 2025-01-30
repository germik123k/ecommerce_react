// src/components/Navbar.jsx
import React from 'react';
import '../Navbar.css'
import CartWidget from './CartWidget'; // Importa el componente CartWidget
import { Link, Outlet} from 'react-router-dom';

const Navbar = () => {
    const links = ['Inicio', 'cubiertos', 'platos_vasos'];

    return (
        <>
        <nav style={styles.navbar}>
            <div style={styles.leftSection}>
                <img src="/logo.png" alt="Logo" style={styles.logo} /> 
                <div style={styles.links}>
                        <Link  style={styles.link} className="nav-link"  to={'/'}>Inicio</Link>
                        <Link  style={styles.link} className="nav-link"  to={'productos/cubiertos'}>cubiertos</Link>
                        <Link  style={styles.link} className="nav-link"  to={'productos/platos_vasos'}>Platos y Vasos</Link>
                        </div>
            </div>
            <CartWidget /> 
            
        </nav>
        <Outlet/>

        </>

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
        marginBottom: "40px",
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
