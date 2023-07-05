import style from './pelicula.module.css'
import { alertErrors } from '../../../helpers/alerts'
import { agregarPeliculaAPI } from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useForm } from '../../../helpers/useForm'
import { useState } from 'react'
import { agregarMovie } from '../../../Redux/reducers/peliculasReducer'

function Pelicula() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const loginState = useSelector(state => state.login)
    const {values, handleInputChange, reset} = useForm({titulo: '', genero: '', sipnosis: '', review: '',  fecha_publicacion: '', directores: '', actores_principales: '', franquicia: ''});
    const [imageMovie, setImageMovie] = useState({})
  
   const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData();
        for (const value of Object.values(values) ) if(!value) return alertErrors('Todos los campos son obligatorios');  // validar que los campos no esten vacios.

        formData.append('titulo', values.titulo);
        formData.append('genero', values.genero);
        formData.append('sipnosis', values.sipnosis);
        formData.append('review', values.review);
        formData.append('fecha_publicacion', values.fecha_publicacion);
        formData.append('directores', values.directores);
        formData.append('actores_principales', values.actores_principales);
        formData.append('franquicia', values.franquicia);
        formData.append('imagen', imageMovie)
       

        const {data} = await agregarPeliculaAPI(formData, loginState.token);
        if (data.error) return alertErrors(data.msg);
        console.log(data)
        dispatch(agregarMovie(data.registro));
        reset();
        navigate('/')
   }

  return (
    <div className={style.Formulario}>
        <h2 className={style.tituloRegistro}>Agregar Pelicula</h2>
        <form className={style.formulario} onSubmit={handleSubmit}>            
           <div className={style.group}>  
                <div className={style.group_child}>
                    <label>Titulo</label> 
                    <input placeholder='Titanic' type="text" onChange={handleInputChange} name="titulo" value={values.titulo} />
                </div>
                <div className={style.group_child}>
                    <label>Genero</label> 
                    <input type="text" placeholder='Romantica' onChange={handleInputChange} name="genero" value={values.genero} />
                </div>
            </div>
            <div className={style.group}>
                <div className={style.group_child}>
                    <label>Sipnosis</label> 
                    <input type="text" onChange={handleInputChange} name="sipnosis" value={values.sipnosis}/>
                </div>
                <div className={style.group_child}>
                    <label>Review</label> 
                    <input type="text" onChange={handleInputChange} name="review" value={values.review} />
                </div>
            </div>
            <div className={style.group}>
                <div className={style.group_child}>
                    <label>Fecha publicación</label> 
                    <input type="date" onChange={handleInputChange} name="fecha_publicacion" value={values.fecha_publicacion} />
                </div>
                <div className={style.group_child}>
                    <label>Actores Principales</label> 
                    <input type="text" onChange={handleInputChange} placeholder='Separados por (,)' name="actores_principales" value={values.actores_principales} />
                </div>
            </div>
           <div className={style.group}>
                <div className={style.group_child}>
                    <label>Directores</label> 
                    <input type="text" onChange={handleInputChange} placeholder='Separados por (,)' name="directores" value={values.directores} />
                </div>
                <div className={style.group_child}>
                    <label>Franquicia</label> 
                    <input type="text" onChange={handleInputChange} placeholder='Separados por (,)' name="franquicia" value={values.franquicia} />
                </div>
           </div>
           <div className={style.group}>
                <div className={style.group_child}>
                    <label>Imagen</label> 
                    <input type="file"  accept='.jpg, .png' onChange={(e) => setImageMovie(e.target.files[0])} name="imagen" />
                </div>                
            </div>

            <button>Guardar</button>
        </form>
    </div>
  )
}

export default Pelicula;