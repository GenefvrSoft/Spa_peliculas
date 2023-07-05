const jwt = require('node-jsonwebtoken');
const { modeloUsuario } = require('../models/usuarioModel')

jwt.v
const SIGN_TOKEN = process.env.SIGN_TOKEN;

const verifyToken = async (req, res, next) => {
    try {
        const token = req.body.token;
        if (!token) return res.status(400).json({ error: 'Accesso denegado' });

        const decoded = jwt.verify(token, SIGN_TOKEN || 'secretKey');
        const accountFound = await modeloUsuario.findOne({where: {id: decoded.id}});

        if (!accountFound) return res.status(404).json({ error: 'Cuenta no existente, operacion fallida' });
        if(decoded.rol === 'usuario') return res.status(404).json({ error: 'Operación denegada, los usuarios no están autorizados para realizar esta operación.' });
        next();
    } catch (e) {
        res.status(400).json({ error: 'Token invalido, vuelve a iniciar sesion.' });
        console.log('Error: verifyToken =>', e.message);
    }
}

module.exports = { verifyToken }