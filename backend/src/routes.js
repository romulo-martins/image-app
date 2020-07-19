const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require('../config/multer');

const upload = multer(multerConfig);
const Image = require("../models/Image");

routes.get("/", (_, res) => {
    return res.json({ message: "Welcome to image app" });
});

routes.get("/images", async (_, res) => {
    const images = await Image.find();

    return res.json(images);
});

routes.post("/images", upload.single("file"), async (req, res) => {
    const { originalname: name, size, key, path: url } = req.file;

    const image = await Image.create({
        name,
        size,
        key,
        url
    });

    return res.json(image);
});

routes.delete("/images/:id", async (req, res) => {
    const image = await Image.findById(req.params.id);

    await image.remove();

    return res.json({ message: `Delete ${req.params.id} successful!` });
});

module.exports = routes
