const mysql = require('mysql2/promise');
const { sequelize } = require('./dbconfig');

//Modelos
const { modeloPeliculas } = require('../models/peliculasModel');
const { modeloUsuario } = require('../models/usuarioModel')


function conexionDb() {
    mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    })
    .then((connection) => {  // Creando la base de datos
        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`).then(() => {
            console.log('Base de datos creada exitosamente');
        })
    })
    .then( () => { // Creando la conexion a la base de datos
        sequelize.authenticate().then( () => {
            console.log('La conexion a la base de datos se ha realizado exitosamente');
        })
    })
    .then( () => { // Se crea la tabla 'usuarios'
        modeloUsuario.sync({ force: false })
        .then(() => console.log('Tabla usuarios creada'))
    })
    .then( () => { // Se crea la tabla 'Peliculas'
        modeloPeliculas.sync({ force: false })
        .then(() => console.log('Tabla peliculas creada'))
    })    
    .catch( (error) => {
        console.log('Incapaz de conectar a la base de datos: ', error.message);
    });
}

conexionDb();



