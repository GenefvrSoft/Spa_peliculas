const bcrypt = require('bcrypt');


const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const comparePassword = async (receivedPassword, passwordSaved) => {
    return await bcrypt.compare(receivedPassword, passwordSaved);
}



module.exports = {
    encryptPassword,
    comparePassword,
}