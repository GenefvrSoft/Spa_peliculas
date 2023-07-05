import style from './Posters.module.css';
import { useNavigate } from 'react-router-dom';



function Posters({ movie }) {
  let navigate = useNavigate();
    
  return (
    <div className={style.contenedor} onClick={() => navigate(`/detalles?id=${movie.id}`)}>
        <section className={style.marco_poster}>
            <img 
                src={`${movie.imagen}`}
                alt="miniatura de la pelicula" 
                className={style.Poster} 
            />
        </section>
        <h2 className={style.tituloPelicula}>{movie.titulo}</h2>
        <p className={style.sinopsis}>{movie.sipnosis}</p>
    </div>
  )
}

export default Posters;