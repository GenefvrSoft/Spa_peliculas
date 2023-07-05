const express = require("express");
const router = express.Router();
const { registroPelicula, obtenerPeliculas, actualizarPelicula, eliminarPelicula } = require("../controllers/peliculasControllers")
const { upload } = require("../helpers/uploadImage")
const { verifyToken } = require("../middlewares/authToken")


router.post('/registro-pelicula', [verifyToken, upload], registroPelicula);
router.get('/obtener-peliculas',verifyToken, obtenerPeliculas);
router.put('/actualizar-pelicula', verifyToken, actualizarPelicula);
router.delete('/eliminar-pelicula/:id', verifyToken, eliminarPelicula)






module.exports = router;