const express = require('express');
const morgan = require ('morgan');
const { pokeResearch } = require('./controllers/poke.controllers');
const cors = require('cors')
const app = express();




//setting
app.set("name", "Server");
app.set("port", process.env.PORT || 3000);




//midelware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));




//ROUTES


app.use("/api", pokeResearch)

module.exports = app;