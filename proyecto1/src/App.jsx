import './App.css';
import './Navbar.css';

import {BrowserRouter, Routes, Route} from  "react-router-dom";

// Importa los componentes que se usarán
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductosCubiertos from './components/ProductosCubiertos';
import ProductosPlatosVasos from './components/ProductosPlatosVasos';
import Error from './components/Error';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito';
import CartProvider from './context/CartContext'; // Importa el CartProvider

function App() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navbar/>}>
                            <Route index element={<Home/>}/>
                            <Route path='productos/cubiertos' element={<ProductosCubiertos/>}/>
                            <Route path='productos/platos_vasos' element={<ProductosPlatosVasos/>}/>
                            <Route path='productos/:categoria/:id' element={<DetalleProducto/>}/>
                            <Route path='carrito' element={<Carrito/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App;
