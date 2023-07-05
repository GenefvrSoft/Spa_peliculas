const { modeloPeliculas } = require("../models/peliculasModel")



const registroPelicula = async (req, res) => {
    try {
        const data = req.body;
        data.imagen = req.file.path;
        const registro = await modeloPeliculas.create(data);
        res.json({msg: 'Registro exitoso', registro});
    } catch (error) {
        console.log(error.message)
    }
}

const obtenerPeliculas = async (req, res) => {
    try {
        const peliculas = await modeloPeliculas.findAll({});
        res.json({peliculas});
    } catch (error) {
        console.log(error.message)
    }
}

const actualizarPelicula = async(req, res) => {
    try {
        const {id, ...data} = req.body;
        await modeloPeliculas.update(data,  {where: {id}})
        res.json({mensaje: 'El registro ha sido actualizado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}

const eliminarPelicula = async(req, res) => {
    try {
        const { id } = req.params;
        await modeloPeliculas.destroy({where: {id}})
        res.json({mensaje: 'El registro ha sido eliminado exitosamente'});
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = {
  registroPelicula,
  actualizarPelicula,
  obtenerPeliculas,
  eliminarPelicula
}