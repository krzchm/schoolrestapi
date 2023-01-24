const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv/config")

const app = express();

app.use(bodyParser.json());
app.use(cors());

const studentsRoute = require("./routes/students");

app.use("/students", studentsRoute);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Successfully created db connection")
);

app.get('/', (req, res) => {
    res.send("działa");
});

app.listen(5000);