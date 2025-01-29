// src/components/ItemListContainer.jsx
import React from 'react';
import { collection, addDoc, deleteDoc, getDocs, getFirestore } from 'firebase/firestore';
import productosPlatosVasosData from './productos_platos_vasos'; // Importa los datos del producto

const Home = () => {
    const db = getFirestore(); // Conexión a Firestore

    const addProductsToFirestore = async () => {
        const collectionRef = collection(db, 'platos_vasos'); // Referencia a la colección
        try {
            for (const producto of productosPlatosVasosData) {
                await addDoc(collectionRef, producto); // Agrega cada producto a la colección
            }
            console.log('Datos agregados exitosamente');
        } catch (e) {
            console.error('Error al agregar productos: ', e);
        }
    };

    const clearCollection = async () => {
        const collectionRef = collection(db, 'platos_vasos');
        const snapshot = await getDocs(collectionRef);
        try {
            for (const docu of snapshot.docs) {
                await deleteDoc(docu.ref);
            }
            console.log('Colección vaciada exitosamente');
        } catch (e) {
            console.error('Error al vaciar la colección: ', e);
        }
    };

    return (
        <div style={styles.container}>
            <div>Home, Bienvenidos a productos de vagilla para su hogar, cubiertos, platos y vasos.</div>
            {/*<button onClick={addProductsToFirestore} style={styles.button}>Agregar datos a Firestore</button>
            <button onClick={clearCollection} style={styles.button}>Eliminar todos los datos</button>*/}
        </div>
    );
}

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        height: 'calc(100vh - 3rem)',
        position: 'fixed',
        top: '80px',
        left: '0px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }
};

export default Home;
