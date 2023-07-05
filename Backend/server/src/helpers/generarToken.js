const jwt = require('jsonwebtoken')

const SIGN_TOKEN = process.env.SIGN_TOKEN;

const generateToken = (id, rol) => {
    const oneDay = 604800;
    return jwt.sign({ id, rol }, SIGN_TOKEN || 'secretKey', { expiresIn: oneDay }); 
}

module.exports = {generateToken}