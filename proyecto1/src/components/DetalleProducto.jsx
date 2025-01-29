import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'; // Importa el contexto

function DetalleProducto() {
    const { id, categoria } = useParams();
    const [loading, setLoading] = useState(true);
    const [dataProducto, setData] = useState({});
    const [cantidad, setCantidad] = useState(1);
    const [error, setError] = useState("");
    const [productInCart, setProductInCart] = useState(false);
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext); // incluye cartItems y removeFromCart

    const db = getFirestore();

    useEffect(() => {
        const itemRef = doc(db, categoria, id);
        getDoc(itemRef).then(snapshot => {
            console.log('snapshot', snapshot.data());
            setData(snapshot.data());
            setLoading(false);
        });

        // Check if the product is already in the cart to update quantity and state
        const product = cartItems.find(item => item.id === id);
        if (product) {
            setCantidad(product.cantidad);
            setProductInCart(true);
        } else {
            setProductInCart(false);
        }

    }, [categoria, id, cartItems]);

    const handleAgregarCarrito = () => {
        if (cantidad > dataProducto.stock) {
            setError("Se excedió la cantidad de productos solicitados.");
        } else if (cantidad <= 0) {
            setError("Debe agregar al menos un producto.");
        } else {
            setError("");
            addToCart({...dataProducto, id: id}, cantidad); // Agrega el producto al carrito con la cantidad
            console.log("Producto añadido al carrito");
            setProductInCart(true); // Actualiza el estado para indicar que el producto está en el carrito
        }
    };

    const handleQuitarDelCarrito = () => {
        removeFromCart(id); // Lógica para quitar el producto del carrito
        console.log("Producto quitado del carrito");
        setProductInCart(false); // Actualiza el estado para indicar que el producto no está en el carrito
    };

    return (
        <div>
            {/* Botón Volver siempre visible */}
            <div style={styles.volverCont}>
            <Link to={`/productos/${categoria}`}>
                <button style={styles.volverButton}>Volver</button>
            </Link>
            </div>
            {loading ? (
                <div className='loading-message'>API: Trayendo datos de cubiertos...</div>
            ) : (
                dataProducto && Object.keys(dataProducto).length > 0 ? (
                    <div className='producto-detalle' style={styles.productoDetalle}>
                        <img src={`../../${dataProducto.imagen}`} alt="imagen" />
                        <h3>{dataProducto.nombre}</h3>
                        <h4><u>Detalle del producto</u></h4>
                        <p>{dataProducto.descripcion}</p>
                        <div style={styles.priceDetails}>
                            <span style={styles.price}>Precio: ${dataProducto.precio}</span>
                            <span style={styles.totalPrice}>Total: ${(dataProducto.precio * cantidad).toFixed(2)}</span>
                        </div>
                        <p>Stock disponible: {dataProducto.stock}</p>
                        <div className='input-cantidad'>
                            <label htmlFor="cantidad">Cantidad:</label>
                            <input
                                type="number"
                                id="cantidad"
                                min="1"
                                max={dataProducto.stock}
                                value={cantidad}
                                onChange={(e) => setCantidad(parseInt(e.target.value))}
                                style={styles.input}
                            />
                            <button onClick={handleAgregarCarrito} style={styles.button}>Agregar al carrito</button>
                            {productInCart && (
                                <button onClick={handleQuitarDelCarrito} style={styles.button}>Quitar del carrito</button>
                            )}
                        </div>
                        {error && <div style={styles.error}>{error}</div>}
                        <div style={productInCart ? styles.productInCart : styles.productNotInCart}>
                            {productInCart ? "Este producto se encuentra en el carrito" : "Este producto no está en el carrito"}
                        </div>
                    </div>
                ) : (
                    <div className='without-product'>No existe producto.</div>
                ) /* punto clave donde estan los datos */
            )}
        </div>
    );
}

const styles = {
    volverCont:{
      width:'100%',
      position: 'fixed', // Mantiene el navbar fijo en la parte superior
      top:'100px',
      left:'0px',
      display: 'inline-block',
    },
    volverButton: {
        backgroundColor: '#007BFF', // Color azul del botón
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        marginBottom: '15px', // Espacio entre el botón y el contenido
        marginRight: '10px',
        float:'right',
        display:'inline-block'
    },
    productoDetalle: {
        display:'block',
        marginTop: '80px', // Agrega espacio arriba del detalle del producto
    },
    input: {
        display: 'inline-block',
        width: '60px',
        height: '30px',
        margin: '0 10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        padding: '5px',
        fontSize: '16px',
        textAlign: 'center',
    },
    button: {
        display: 'inline-block',
        padding: '5px 10px',
        margin: '0 10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: '10px',
    },
    priceDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px 0'
    },
    price: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    totalPrice: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '10px'
    },
    productInCart: {
        color: 'green',
        fontWeight: 'bold',
        marginTop: '10px',
    },
    productNotInCart: {
        color: '#00BFFF', // Celeste turquesa
        marginTop: '10px',
    },
    container: {}, 
    imagen1: {},
};

export default DetalleProducto;
