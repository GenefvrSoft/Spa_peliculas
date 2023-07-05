import style from '../Registros/Pelicula/pelicula.module.css'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login} from '../../Redux/reducers/loginReducer'
import { alertErrors } from '../../helpers/alerts'
import { useForm } from '../../helpers/useForm'
import { loginUsuarioApi } from '../../api/api'


function InicioSesion() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

   const {values, handleInputChange, reset} = useForm({ correo: '', password: '' });

   const handleSubmit = async(e) => {
      e.preventDefault()
      for (const value of Object.values(values) ) if(!value) return alertErrors('Todos los campos son obligatorios');  // validar que los campos no esten vacios.
      const {data} = await loginUsuarioApi(values);
      if (data.error) return alertErrors(data.msg);
      
      dispatch(login(data.sesion));
      reset();
      navigate('/')
   }

  return (
    <div className={style.Formulario}>
        <h2 className={style.tituloRegistro}>Iniciar Sesion</h2>
        <form className={style.formulario_user} style={{height: 150}} onSubmit={handleSubmit}>            
            <div className={style.group}>
                <div className={style.group_child}>
                    <label>Correo</label> 
                    <input type="email" onChange={handleInputChange} placeholder='example@gmail.com' name="correo" value={values.correo}/>
                </div>
                <div className={style.group_child}>
                    <label>Contraseña</label> 
                    <input type="password" onChange={handleInputChange} name="password" value={values.password} />
                </div>
            </div>        
           
            <button>Ingresar</button>
        </form>
    </div>
  )
}

export default InicioSesion;