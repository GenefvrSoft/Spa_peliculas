const { generateToken } = require("../helpers/generarToken")
const { encryptPassword } = require("../helpers/passwordSecurity")
const { modeloUsuario } = require("../models/usuarioModel")



const registroUser = async (req, res) => {
    try {
        const data = req.body;
          
        const checkAccount = await modeloUsuario.findOne({where: {correo: data.correo}});
        if ( checkAccount ) return res.json({error: true, msg: 'Ya existe una cuenta registrada con ese correo.'});

        data.rol = 'usuario';
        data.password = await encryptPassword(data.password); // encriptar la clave del usuario
        const registro = await modeloUsuario.create(data); // se crea el registro
        delete registro.dataValues.password;
        const token = generateToken(registro.id, registro.rol); 
        res.json({msg: 'Registro exitoso', token, registro});
    } catch (error) {
        console.log(error.message)
    }
}

const iniciarSesion = async(req, res) => {
    try {
        const credenciales = req.body;

        const resp =await modeloUsuario.findOne({where: {correo: credenciales.correo}});
        if(!resp) return res.json({error: true, msg: 'Correo o cuenta invalida'});
        delete resp.dataValues.password;
        const token = generateToken(resp.id, resp.rol); 
        res.json({msg: 'Registro exitoso', token, cuenta: resp});        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    registroUser,
    iniciarSesion
}