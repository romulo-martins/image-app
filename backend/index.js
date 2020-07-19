const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    const response = {
        message: "Hello World",
    }
    res.send(response);
});

app.listen(3000);
