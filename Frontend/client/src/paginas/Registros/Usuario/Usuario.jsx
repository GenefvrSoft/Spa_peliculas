import { useForm } from "../../../helpers/useForm"
import style from '../Pelicula/pelicula.module.css';
import {login} from '../../../Redux/reducers/loginReducer'
import { useDispatch } from 'react-redux'
import { registerUsuario } from '../../../api/api'
import { alertErrors } from '../../../helpers/alerts'
import {useNavigate} from 'react-router-dom'


function RegistroUsuario() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

   const {values, handleInputChange, reset} = useForm({nombre: '', edad: '', correo: '', password: '', genero: '' });

   const handleSubmit = async(e) => {
      e.preventDefault()
      for (const value of Object.values(values) ) if(!value) return alertErrors('Todos los campos son obligatorios');  // validar que los campos no esten vacios.
      const {data} = await registerUsuario(values);
      if (data.error) return alertErrors(data.msg);
      
      dispatch(login(data.registro));
      reset();
      navigate('/')
   }

  return (
    <div className={style.Formulario}>
        <h2 className={style.tituloRegistro}>Registrarse</h2>
        <form className={style.formulario_user} onSubmit={handleSubmit}>            
           <div className={style.group}>  
                <div className={style.group_child}>
                    <label>Nombre</label> 
                    <input placeholder='Felipe' type="text" onChange={handleInputChange} name="nombre" value={values.nombre} />
                </div>
                <div className={style.group_child}>
                    <label>Edad</label> 
                    <input type="number" min={15} onChange={handleInputChange} name="edad" value={values.edad} />
                </div>
            </div>
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
            <div className={style.group}>
                <div className={style.group_child}>
                    <label>Genero</label> 
                    <input type="text" onChange={handleInputChange} placeholder='Masculino/Femenino' name="genero" value={values.genero} />
                </div>
            </div>
           
            <button>Registrarme</button>
        </form>
    </div>
  )
}

export default RegistroUsuario;