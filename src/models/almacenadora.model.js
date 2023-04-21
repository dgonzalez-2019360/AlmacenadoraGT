'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const almacenadoraSchema = Schema({
    code:{
        type: String,
        require: true
    },

    homeworkName:{
        type: String,
        require: true
    }

});

module.exports = mongoose.model('Nombre Tarea', almacenadoraSchema);