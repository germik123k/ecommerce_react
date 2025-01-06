// src/components/ItemListContainer.jsx
import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}> Home, Bienvenidos a productos de vagilla para su hogar, cubiertos, platos y vasos.</div>
    );
}







const styles = {
    container: {
        width: '100%', // Asegura que el contenedor abarque el 100% del ancho
        backgroundColor: '#ffffff', // Color casi blanco, ligeramente amarillento para chequear cuanto ocupa
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
        }
};

export default Home;
