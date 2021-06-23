const express = require("express");
const app = express();

const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

dotenv.config();

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.listen(8800,()=> {
    console.log("Shomi rules!")
})
