import './App.css'
import './Navbar.css'
import {BrowserRouter, Routes, Route} from  "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductosCubiertos from './components/ProductosCubiertos'
import ProductosPlatosVasos from './components/ProductosPlatosVasos'
import Error from './components/Error'
import DetalleProducto from './components/DetalleProducto'
function App() {
  
  return (
  <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navbar/>}>
        {/*<Route index element={<ItemListContainer2/>}/>
         <Route path='inicio' element={<Home/>}/>


          <Route path='cubiertos/:id' element={<detalleProducto/>}/>
        */}
          <Route index element={<Home/>}/>        
          <Route path='productos/cubiertos' element={<ProductosCubiertos/>}/>
          <Route path='productos/:categoria/:id' element={<DetalleProducto/>}/>


          <Route path='productos/platos_vasos' element={<ProductosPlatosVasos/>}/>


          <Route path='*' element={<Error/>}/>

                    

        </Route>

      </Routes>
    </BrowserRouter>


  </>
  );
}

export default App
