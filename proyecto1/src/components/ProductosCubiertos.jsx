// src/components/ProductosCubiertos.jsx
import React from 'react';
import productosCubiertosData from "./productos_cubiertos"
import Producto from './Producto';
import "./styles.css"
const ProductosCubiertos = () => {
    return (
        <div className='contenedor1'>
            <div id="container" >
                {productosCubiertosData.map(prod=>(
                    <Producto key={prod.id} {...prod} /> 
                ))}
            </div>
        </div>
    );
}


export default ProductosCubiertos;
