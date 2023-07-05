import { useEffect, useState } from 'react'
import style from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { getMoviesAPI } from '../api/api'
import { setAllMovies } from '../Redux/reducers/peliculasReducer'
import Posters from '../componentes/Posters'


function Home() {
  const dispatch = useDispatch();
  const peliculas = useSelector(state => state.pelicula.peliculas)

  const [loading, setLoading] = useState(false)
  const [queryMovie, setQueryMovie] = useState('');


  const getPeliculas = async () => {
    try {
      setLoading(true);
      const {data} = await getMoviesAPI();
      setLoading(false);
      
      if( data.peliculas.length ) {
        dispatch(setAllMovies(data.peliculas))
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // const getQueryMovie = async () => {
  //   const response = await fetch(URL_QUERY_PELICULA(queryMovie));
  //   const data = await response.json();

  //   if ( data.results.length ) {
  //     const top_12_peliculas = data.results.slice(0,12);
  //     setPeliculasDelMomento(top_12_peliculas);
  //   }
  // }

  useEffect(() => {
    getPeliculas();
  }, [])
  
  // useEffect(() => {
  //   if( queryMovie.length > 3 ) {
  //     getQueryMovie()
  //   }

  //   if ( queryMovie.length <= 3 ) {
  //     const firstMovies = JSON.parse( localStorage.getItem('movies') );
  //     setPeliculasDelMomento(firstMovies);
  //   }
  // }, [queryMovie])
  

  return (
    <div className={style.contenedor}>

      <div className={style.searchBox}> 
        <label htmlFor="busqueda">Buscar película</label>
        <input type="search" onChange={({target}) =>{}} placeholder='Spiderman, Titanic...' id='busqueda'/>
      </div>

      <div className={style.posters}>        
        { peliculas.length > 0 ?
            peliculas.map( movie => (
              <Posters 
                movie={movie} 
                key={movie.id}
              />
            ))
          : <p >Aun no se han registrado peliculas</p>
        }         
      </div>
      { loading && <p className={style.loading}>Cargando peliculas....</p> }
    </div>
  )
}

export default Home;