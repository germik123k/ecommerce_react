
// src/components/ProductosPlatosVasos.jsx
import React from 'react';
import { useEffect,useState } from "react";

import ProductosPlatosVasosData from "./productos_platos_vasos"
import Producto from './Producto';
import "./styles.css"
const ProductosPlatosVasos = () => {
    const [items,setItems]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
          setTimeout(() => {
              resolve(ProductosPlatosVasosData)
          },2000)
        })
  
        fetchProductos.then((data) => {
          setItems(data);
          setLoading(false);
        })
      },[]);

    return (



        <div className='contenedor1'>

        {loading ? ( <div className='loading-message'>API: Trayendo datos de Platos y Vasos... </div> ) :
             (

            <div id="container" >
                {ProductosPlatosVasosData.map(prod=>(
                    <Producto key={prod.id} {...prod} /> 
                ))}
            </div>

             )}
        </div>
    );
}


export default ProductosPlatosVasos;
