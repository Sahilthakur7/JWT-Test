const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const keys = require('./config/keys');
const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT,() => console.log("connected to db"));

app.use("/api/user", authRoute);

app.use(express.json());

app.listen(5000 , () => console.log("server started"));
