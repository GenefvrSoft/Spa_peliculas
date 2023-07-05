import { configureStore} from '@reduxjs/toolkit';

// Reducers
import loginReducer from '../reducers/loginReducer';
import peliculasReducer from '../reducers/peliculasReducer'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        pelicula: peliculasReducer
    }
});