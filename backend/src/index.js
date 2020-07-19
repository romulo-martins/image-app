const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Database connection
mongoose.connect('mongodb://localhost:27017/imagedb', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3000);
