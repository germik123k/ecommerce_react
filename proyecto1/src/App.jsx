import './App.css'
import './Navbar.css'

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  const links = ['Inicio', 'Cubiertos', 'Platos y Vasos'];
  return (
  <>
    <Navbar links={links}/>
    <ItemListContainer />
  </>
  );
}

export default App
