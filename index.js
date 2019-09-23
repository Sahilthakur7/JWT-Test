const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const keys = require('./config/keys');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect("mongodb+srv://jwt:jwt000@cluster0-u9xsu.mongodb.net/test?retryWrites=true&w=majority",() => console.log("connected to db"));

app.use(bodyParser.json());

app.use("/api/user", authRoute);


app.listen(5000 , () => console.log("server started"));
