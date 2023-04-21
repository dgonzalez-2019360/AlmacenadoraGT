'use strict'

const express = require("express");
const app = express();
const {connection} = require("./src/database/connection");
const port = process.env.PORT;
const routes = require("./src/routes/tarea.routes");

connection();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});