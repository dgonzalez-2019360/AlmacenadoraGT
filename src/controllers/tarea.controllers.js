'use strict'

const Almacenadora = require('../models/almacenadora.model');

const createTarea = async (req, res) => {
    const {code} = req.body;
    try{
        let almacenadora = await Almacenadora.findOne({code: code});
        if(almacenadora){
            return res.status(400).send({
                message: "Ya existe una Tarea con este Código",
                ok: false,
                almacenadora: almacenadora
            });
        }

        almacenadora = new Almacenadora(req.body);

        almacenadora = await almacenadora.save();

        return res.status(200).send({
            message: "¡Tarea creada correctamente!",
            almacenadora
        });
    }catch(err){
        throw new Error(err);
    }
}

const readTarea = async (req, res) =>{
    try{
        const almacenadoras = await Almacenadora.find();
        if(!almacenadoras){
            res.status(400).send({
                message: "No hay Tareas todavía...."
            });
        }else{
            res.status(200).send({
                "Tareas encontradas": almacenadoras
            });
        }

    }catch(err){
        throw new Error(err);
    }
}

const updateTarea = async (req, res) => {
    const id = req.params.id;
    
    try{
        
    }catch(err){
        throw new Error(err);
    }
}


module.exports = {
    createTarea,
    readTarea
}