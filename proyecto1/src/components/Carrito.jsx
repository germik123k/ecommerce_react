// src/components/Carrito.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Importa el contexto

const Carrito = () => {
    const { cartItems, removeFromCart } = useContext(CartContext); // Usa el contexto

    const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0); // Calcula el total

    return (
        <div style={styles.container}>
            <h1>Carrito <i className="fa fa-shopping-cart" title="Carrito de compras" style={styles.cartIcon}></i></h1>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Detalle</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td><img src={`../../${item.imagen}`} alt={item.nombre} style={styles.imagen} /></td>
                            <td>{item.nombre}</td>
                            <td>
                                <Link to={`/productos/${item.categoria}/${item.id}`} style={styles.detalleLink}>Detalle</Link>
                            </td>
                            <td>${item.precio}</td>
                            <td>{item.cantidad}</td>
                            <td>${(item.precio * item.cantidad).toFixed(2)}</td>
                            <td>
                                <button onClick={() => removeFromCart(item.id)} style={styles.button}>Quitar del carrito</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={styles.total}>
                <button style={styles.comprarButton}>Efectuar compra</button>
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '100%', // Asegura que el contenedor abarque el 100% del ancho
        backgroundColor: '#ffffff', // Color casi blanco, ligeramente amarillento para chequear cuanto ocupa
        height: 'calc(100vh - 3rem)', // Calcula la altura restante teniendo en cuenta el tamaño del navbar
        position: 'fixed', // Mantiene el navbar fijo en la parte superior
        top: '80px',
        left: '0px',
        padding: '1rem',
        boxSizing: 'border-box', // Asegura que el padding se incluya dentro del ancho y alto del elemento    
        overflowY: 'auto' // Habilita el scroll vertical si el contenido es mayor que la altura del contenedor
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '2rem'
    },
    imagen: {
        width: '50px',
        height: 'auto'
    },
    detalleLink: {
        color: '#007BFF',
        textDecoration: 'none'
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#FF5733',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    },
    total: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderTop: '1px solid #ccc',
        marginTop: '2rem'
    },
    comprarButton: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
};

export default Carrito;
