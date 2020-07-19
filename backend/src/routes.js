const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require('../config/multer');

const upload = multer(multerConfig);

routes.get("/", (req, res) => {
    const response = {
        message: "Welcome to image app",
    }
    return res.json(response);
});

routes.get("/images", (req, res) => {
    const images = [
        {     
            name: "test 1",
            size: "1mb",
            key: "test1.jpg",
            url: "" 
        },
    ]
    return res.json(images);
 });

routes.post("/images", upload.single("file"), (req, res) => {
    return res.json(req.file);
});

module.exports = routes
