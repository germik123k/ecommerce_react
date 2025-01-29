import React from 'react';
import { collection, getDocs, getFirestore, snapshotEqual } from 'firebase/firestore';
import { useEffect,useState } from "react";
import Producto from './Producto';
import "./styles.css"


const ProductosPlatosVasos = () => {
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
