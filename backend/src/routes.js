const routes = require("express").Router();

routes.get("/", (req, res) => {
    const response = {
        message: "Welcome to image app",
    }
    res.send(response);
});

module.exports = routes
