const express = require("express");
const router = express.Router();
const { registroUser, iniciarSesion } = require("../controllers/usuarioControllers")


router.post('/registro-user', registroUser);
router.post('/iniciar-sesion', iniciarSesion)






module.exports = router;