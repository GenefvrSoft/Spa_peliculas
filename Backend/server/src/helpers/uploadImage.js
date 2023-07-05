const multer  = require('multer');
const fs = require('fs');
const path = require('path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {        
        const folder = `${path.join(__dirname)}/../uploads`
        fs.mkdirSync(folder, { recursive: true })
        return cb(null, folder)
      },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${uniqueSuffix}-${file.originalname}`);
    }
  })
  
const upload = multer({ storage: storage });
exports.upload = upload.single('imagen')