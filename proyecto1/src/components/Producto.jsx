// src/components/ItemListContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Producto = ({nombre, precio, id, categoria, imagen}) => {
    return (
        <Link to={`/productos/${categoria}/${id}`} className='card'>
            <img src={`../../${imagen}`} alt="" style={styles.imagen1}/> 
            <p>{nombre}</p>
            <h4>{precio}</h4>

        </Link>
    );
}





const styles = {
    container: {
        width: '100%', // Asegura que el contenedor abarque el 100% del ancho
        backgroundColor: '#ff5891', // Color casi blanco, ligeramente amarillento para chequear cuanto ocupa
        height: 'calc(100vh - 3rem)', // Calcula la altura restante teniendo en cuenta el tamaño del navbar
        //marginTop: '3rem', // Compensa el espacio del navbar
        position: 'fixed', // Mantiene el navbar fijo en la parte superior
        top:'80px',
        left:'0px',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box' // Asegura que el padding se incluya dentro del ancho y alto del elemento    
        },

        imagen1: {
            width: '60px' // Ancho especificado por defecto en 120px
        }, 
};

export default Producto;
