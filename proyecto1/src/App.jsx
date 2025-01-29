import './App.css'
import './Navbar.css'

import { useState } from 'react'
import { useEffect } from 'react'
import {getFirestore, doc, getDoc} from "firebase/firestore"
import {BrowserRouter, Routes, Route} from  "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductosCubiertos from './components/ProductosCubiertos'
import ProductosPlatosVasos from './components/ProductosPlatosVasos'
import Error from './components/Error'
import DetalleProducto from './components/DetalleProducto'
function App() {
/*  
  const [dataTest, setData] = useState({});

  const db = getFirestore();

  useEffect(() => {
    const itemRef = doc(db, "cubiertos", "xm2zFdsQZk3I8QHTIxDo")

    getDoc(itemRef).then(snapshot=>{

      console.log(snapshot);
      console.log(snapshot.data());
      setData(snapshot.data());

    })

  },[])
*/
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
