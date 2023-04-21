'use strict'

const {Router} = require('express');
const { createTarea, readTarea } = require('../controllers/tarea.controllers');
const {check} = require('express-validator');

const api = Router();

api.post('/create_homework',[check("code", "El código de la tarea es obligatorio").not().isEmpty(),
                             check("homeworkName", "El nombre de la tarea es obligatorio").not().isEmpty()], createTarea);

api.get('/read_homework', readTarea);

module.exports = api;