const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
require('./database/conexionDB');


const rutasPeliculas = require('./routes/peliculasRoutes');
const rutasUsuario = require('./routes/usuariosRoutes');



const PORT = process.env.PORT;
app.use(cors())
app.use(express.json());
app.use('/api', rutasPeliculas);
app.use('/api', rutasUsuario);


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));