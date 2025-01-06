import productosCubiertosData from "./productos_cubiertos"
import productosPlatosVasosData from "./productos_platos_vasos"

import { useParams } from "react-router-dom"
function DetalleProducto() {
    const {id} = useParams();
    const {categoria} = useParams();

    console.log(id);
    console.log(categoria);
    var  producto;
    if(categoria == 'cubiertos'){
          producto=productosCubiertosData.find(prod=>prod.id===parseInt(id))
    }
    if(categoria == 'platos_vasos'){
          producto=productosPlatosVasosData.find(prod=>prod.id===parseInt(id))
    }

    if(!producto){
        return <h2>El producto no existe!</h2>
    }
  return (
    <div>
        <img src={`../../${producto.imagen}`} alt=""/> 
        <h3>{producto.nombre}</h3>
        <h4><u>Detalle del producto</u></h4>
        <p>{producto.descripcion}</p>
        <h4>{producto.precio}</h4>
    </div>
  )
}

export default DetalleProducto