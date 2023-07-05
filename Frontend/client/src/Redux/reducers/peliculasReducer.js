import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    peliculas: []
};

const peliculaReducer = createSlice({
    name: 'pelicula',
    initialState,
    reducers: {
        agregarMovie: (state, action) => {
            state.peliculas = [action.payload, ...state.peliculas]

        },
        setAllMovies: (state, action) => {
            state.peliculas = action.payload
        },
        // actualizarMovie: (state, action) => {
        //     state.correo = '',
        //     state.isLogged = false,
        //     state.rol = '',
        //     state.token = '',
        //     state.id = ''
        // },
        // deleteMovie: (state, action) => {
        //     state.correo = '',
        //     state.isLogged = false,
        //     state.rol = '',
        //     state.token = '',
        //     state.id = ''
        // },
    }
})

export const {agregarMovie, setAllMovies} = peliculaReducer.actions;
export default peliculaReducer.reducer;