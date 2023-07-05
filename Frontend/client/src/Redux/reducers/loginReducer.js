import {createSlice} from '@reduxjs/toolkit'

const initialState = { 
    isLogged: false,
    correo: '',
    rol: 'usuario',
    id: 0,
    token: ''
 };

const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.correo = action.payload.correo,
            state.isLogged = true,
            state.rol = action.payload.rol,
            state.token = action.payload.token,
            state.id = action.payload.id
        },
        logout: (state, action) => {
            state.correo = '',
            state.isLogged = false,
            state.rol = '',
            state.token = '',
            state.id = ''
        },
    }
})

export const {login, logout} = loginReducer.actions;
export default loginReducer.reducer;