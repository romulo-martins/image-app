const multer = require("multer");

const destPath = "../tmp/uploads";

const multerConfig = {
    dest: destPath,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destPath);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })
};

module.exports = multerConfig
