// src/components/ProductosPlatosVasos.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Producto from './Producto';
import './styles.css';

const ProductosPlatosVasos = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const db = getFirestore();
        const itemsCubiertos = collection(db, 'platos_vasos');
        getDocs(itemsCubiertos).then(snapshot => {
            setItems(snapshot.docs);
            setLoading(false);
        });
    }, []);

    const filteredItems = items.filter(prod => 
        prod.data().nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='contenedor1'>

            {loading ? (
                <div className='loading-message'>API: Trayendo datos de cubiertos...</div>
            ) : (

                <div id="container">

                    <div style={styles.searchContainer}>
                        <label htmlFor="buscar">Buscar:</label>
                        <input
                            type="text"
                            id="buscar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={styles.searchInput}
                        />
                    </div>

                    {filteredItems.map(prod => (
                        <Producto key={prod.id} id={prod.id} {...prod.data()} />
                    ))}
                </div>
            )}
        </div>
    );
}

const styles = {
    searchContainer: {
        width: '100%',
        padding: '1rem',
        boxSizing: 'border-box',
        backgroundColor: '#f0f0f0', // Fondo del cuadro de búsqueda
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    searchInput: {
        marginLeft: '1rem',
        padding: '0.5rem',
        width: '50%',
        borderRadius: '5px',
        border: '1px solid #ccc'
    }
};

export default ProductosPlatosVasos;
