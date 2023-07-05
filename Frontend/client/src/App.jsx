// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./paginas/Home"
import Detalles from "./paginas/Detalles"
import style from './App.module.css';
import { useState } from "react"
import Navbar from "./componentes/Navbar/Navbar"
import Pelicula from "./paginas/Registros/Pelicula/Pelicula"
import RegistroUsuario from "./paginas/Registros/Usuario/Usuario"
import InicioSesion from "./paginas/Sesion/InicioSesion"
import { useSelector } from "react-redux"


function App() {
  const loginState = useSelector(state => state.login);
  

  const [tema, setTema] = useState('Oscuro');
  
  
  return (
    <Router>
      <Navbar />
      <div className={`${style.mainStyle} ${tema === 'Claro' ? style.oscuro : style.claro}`}>
        {/* <p 
          onClick={() => setTema(tema === 'Claro' ? 'Oscuro' : 'Claro')} 
          className={`${tema === 'Claro' ? style.oscuro : style.claro} ${style.tema}`}
        >
          Cambiar el tema a {tema === 'Claro' ? 'Claro' : 'Oscuro'}
        </p> */}
        <Routes>
          <Route path="/" element={ <Home /> } />  
          <Route path="/detalles" element={ <Detalles /> } /> 
          <Route path="/agregar-pelicula" element={ <Pelicula /> } />  
          <Route path="/crear-cuenta" element={ <RegistroUsuario /> } />    
          <Route path="/iniciar-sesion" element={ <InicioSesion /> } />          
        </Routes>
      </div>
    </Router>
  )
}

export default App;
