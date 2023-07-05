const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbconfig");


const modeloPeliculas = sequelize.define('peliculas', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    genero: DataTypes.STRING,
    titulo: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    review: DataTypes.STRING,
    fecha_publicacion: DataTypes.STRING,
    actores_principales: DataTypes.STRING,
    directores: DataTypes.STRING,
    franquicia: DataTypes.STRING,
    imagen: DataTypes.STRING
});

module.exports = { modeloPeliculas };