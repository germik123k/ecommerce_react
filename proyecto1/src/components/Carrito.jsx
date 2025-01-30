import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Importa el contexto

const Carrito = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext); // Usa el contexto
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0); // Calcula el total

    const handlePurchase = () => {
        if (nombre && apellido && email) {
            clearCart();
            setMensaje('La transacción se realizó exitosamente!');
            // Aquí puedes agregar la lógica para procesar la compra
        } else {
            setMensaje('Falta completar datos para la transacción');
        }
    };

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
                {cartItems.length > 0 && (
                    <button onClick={clearCart} style={styles.vaciarButton}>Vaciar carrito</button>
                )}
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
            <div style={styles.checkoutContainer}>

 
            {cartItems.length > 0 ? (
                <>
                {mensaje && (
                    <div style={mensaje.includes('exitosamente') ? styles.successMessage : styles.errorMessage}>
                        {mensaje}
                    </div>
                )}
                <form style={styles.form}>
                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                                type="text"
                                id="apellido"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                style={styles.input}
                            />
                        </div>
                    </div>
                    <button type="button" onClick={handlePurchase} style={styles.comprarButton}>Efectuar compra</button>
                </form>
                </>
            ) : (
                <>

                {mensaje ? (
                    <div style={mensaje.includes('exitosamente') ? styles.successMessage : styles.errorMessage}>
                        {mensaje}
                    </div>
                ) : (
                    <div style={styles.messageContainer}>
                        <p style={{ color: 'black', fontWeight: 'bold' }}>No posee productos en el carrito</p>
                    </div>
                )}

                 </>
            )}


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
    vaciarButton: {
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    },
    comprarButton: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '1rem',
        maxWidth: '230px', // Ajuste de ancho máximo para el botón
    },
    checkoutContainer: {
        width: '100%',
        marginTop: '2rem',
        padding: '1rem',
        borderTop: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' // Centrado del contenido del formulario
    },
    row: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between', // Separación horizontal de los elementos
        marginBottom: '1rem'
    },
    formGroup: {
        flex: '0 0 48%' // Ancho de cada elemento del formulario en 48% para espacio entre ellos
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    successMessage: {
        backgroundColor:'#d0ffd0',
        width: '100%',
        color: 'green',
        fontWeight: 'bold',
        marginTop: '1rem',
        border: '2px solid green',
        textAlign: 'center'
    },
    errorMessage: {
        backgroundColor:'#ffd0d0',
        width: '100%',
        color: 'red',
        fontWeight: 'bold',
        marginTop: '1rem',
        border: '2px solid red',
        textAlign: 'center'
    },
    messageContainer: {
        width: '100%',
        border: '2px solid black',
        padding: '1rem',
        textAlign: 'center'
    }
};

export default Carrito;
