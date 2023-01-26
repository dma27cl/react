import { useState} from 'react';
import MiApi from "./Components/MiApi.jsx";
import NavBar from "./Components/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');
  return (
    <div className="App">
  
    <NavBar setValorBusqueda={setValorBusqueda} ></NavBar>
    <MiApi valorBusqueda={valorBusqueda}></MiApi>
    </div>
  );
}

export default App;
