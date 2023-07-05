import {Link} from 'react-router-dom'
import style from './navbar.module.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/reducers/loginReducer'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {isLogged, rol} = useSelector(state => state.login)
 
  const cerrarSesion = () => {
    dispatch(logout());
    navigate('/')
  }

  return (
    <div className={style.navbar}>
        <h2 className={style.titulopagina}>Peliculas Top</h2>

        <ul className={style.listanav}>
            <li><Link to='/'>Inicio</Link></li>
            { isLogged && rol === 'admin'&& <li><Link to='/agregar-pelicula'>Agregar Pelicula</Link></li>}            
            {
              isLogged 
                ? <li onClick={cerrarSesion} style={{cursor: 'pointer'}}>Cerrar sesion</li>
                : <li><Link to="/iniciar-sesion">Iniciar sesion</Link></li>

            }
            {
              !isLogged && <li><Link to='/crear-cuenta'>Registrarse</Link></li>
            }
        </ul>
    </div>
  )
}

export default Navbar