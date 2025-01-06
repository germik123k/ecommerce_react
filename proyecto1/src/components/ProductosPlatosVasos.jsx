
// src/components/ProductosPlatosVasos.jsx
import React from 'react';
import ProductosPlatosVasosData from "./productos_platos_vasos"
import Producto from './Producto';
import "./styles.css"
const ProductosPlatosVasos = () => {
    return (
        <div className='contenedor1'>
            <div id="container" >
                {ProductosPlatosVasosData.map(prod=>(
                    <Producto key={prod.id} {...prod} /> 
                ))}
            </div>
        </div>
    );
}


export default ProductosPlatosVasos;
