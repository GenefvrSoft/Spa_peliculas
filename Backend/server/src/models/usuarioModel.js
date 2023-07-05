const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbconfig");


const modeloUsuario = sequelize.define('Usuario', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
    genero: DataTypes.STRING,
    rol: DataTypes.STRING, // admin, usuario
});


module.exports = { modeloUsuario };