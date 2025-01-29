// src/components/ProductosCubiertos.jsx
import React from 'react';
import { collection, getDocs, getFirestore, snapshotEqual } from 'firebase/firestore';
import { useEffect,useState } from "react";
import productosCubiertosData from "./productos_cubiertos"
import Producto from './Producto';
import "./styles.css"



const ProductosCubiertos = () => {
    const [items,setItems]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const db = getFirestore();
      const itemsCubiertos = collection(db,"cubiertos");
      getDocs(itemsCubiertos).then(snapshot => {
        setItems(snapshot.docs);
        setLoading(false);


      });
    },[]);

/*
    useEffect(() => {
      const fetchProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productosCubiertosData)
        },2000)
      })

      fetchProductos.then((data) => {
        setItems(data);
        setLoading(false);
      })
    },[]);
*/
    
    return (
        <div className='contenedor1'>
            {loading ? ( <div className='loading-message'>API: Trayendo datos de cubiertos... </div> ) :
             ( <div id="container"> {
                items.map(prod => ( <Producto key={prod.id} id={prod.id} {...prod.data()} /> ))
                } 
                </div> )}
        </div>
    );
}


export default ProductosCubiertos;
