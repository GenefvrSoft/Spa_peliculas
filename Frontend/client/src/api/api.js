import axios from 'axios';

const API_URL = 'http://localhost:4000/api/';


/*Peticiones a la Api usuarios*/
export const registerUsuario = (cuenta) => axios.post(`${API_URL}registro-user`, cuenta);
export const loginUsuarioApi = (credenciales) => axios.post(`${API_URL}iniciar-sesion`, credenciales);

/*Peticiones a la Api peliculas*/
export const agregarPeliculaAPI = (datos, token) => axios.post(`${API_URL}registro-pelicula`, datos, {headers: { "Content-Type": "multipart/form-data", "Authorization": token }});
export const getMoviesAPI = () => axios.get(`${API_URL}obtener-peliculas`);

