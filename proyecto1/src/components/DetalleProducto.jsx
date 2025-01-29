import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalleProducto() {
    const {id, categoria} = useParams();
    const [loading, setLoading] = useState(true);
    const [dataProducto, setData] = useState({});
    const [cantidad, setCantidad] = useState(1);
    const [error, setError] = useState("");

    const db = getFirestore();

    useEffect(() => {
        const itemRef = doc(db, categoria, id);
        getDoc(itemRef).then(snapshot => {
            console.log('snapshot', snapshot.data());
            setData(snapshot.data());
            setLoading(false);
        });
    }, [categoria, id]);

    const handleAgregarCarrito = () => {
        if (cantidad > dataProducto.stock) {
            setError("Se excedió la cantidad de productos solicitados.");
        } else if (cantidad <= 0) {
            setError("Debe agregar al menos un producto.");
        } else {
            setError("");
            console.log("Producto añadido al carrito");
            // Lógica para añadir el producto al carrito
        }
    };

    return (
        <div>
            {loading ? (
                <div className='loading-message'>API: Trayendo datos de cubiertos...</div>
            ) : (
                dataProducto && Object.keys(dataProducto).length > 0 ? (
                    <div className='producto-detalle'>
                        <img src={`../../${dataProducto.imagen}`} alt="imagen" />
                        <h3>{dataProducto.nombre}</h3>
                        <h4><u>Detalle del producto</u></h4>
                        <p>{dataProducto.descripcion}</p>
                        <h4>Precio: ${dataProducto.precio}</h4>
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
                        </div>
                        {error && <div style={styles.error}>{error}</div>}
                    </div>
                ) : (
                    <div className='without-product'>No existe producto.</div>
                )
            )}
        </div>
    );
}

const styles = {
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
    container: {}, 
    imagen1: {},
};

export default DetalleProducto;
