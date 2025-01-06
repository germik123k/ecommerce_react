// src/components/ProductosCubiertos.jsx
import React from 'react';
import { useEffect,useState } from "react";
import productosCubiertosData from "./productos_cubiertos"
import Producto from './Producto';
import "./styles.css"

const ProductosCubiertos = () => {
    const [items,setItems]=useState([]);
    const [loading, setLoading] = useState(true);


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

    
    return (
        <div className='contenedor1'>
            {loading ? ( <div className='loading-message'>API: Trayendo datos de cubiertos... </div> ) :
             ( <div id="container"> {
                items.map(prod => ( <Producto key={prod.id} {...prod} /> ))
                } 
                </div> )}
        </div>
    );
}


export default ProductosCubiertos;
