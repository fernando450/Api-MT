import express  from "express";

import {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
} from "../controllers/userController.js";

const userRoutes = express.Router();

//Definir las rutas y llamar las funciones

    userRoutes.get("/id" , async(req , res)=>{
        try {
            const{nombre = 'Null',apellidos = 'Null',edad = 'Null'} = req.body;
            const usuario = await usuariosGet(nombre,apellidos,edad);
            res.status(200).send(usuario);
        } catch (error) {
            console.error('Error al obtener usuario:', error);
            res.status(500).send('Ocurrió un problema al obtener el usuario');
        }
    });

    userRoutes.post("/create", async(req,res)=>{
        try {
            const{nombre = 'Null',apellidos = 'Null',edad = 'Null'} = req.body;
            const usuario = await usuariosPost(nombre,apellidos,edad);
            res.status(201).send(usuario);
        } catch (error) {
            console.log('Error al crear el usuario');
            res.status(500).send('Ocurrio un problema al crear el usuario');
        }
    });

    userRoutes.put("/edit/:id" , async(req,res)=>{
        try {
            const {id} = req.params;
            console.log(id);
            const usuario = await usuariosPut(id);

            res.status(200).send(usuario);
        } catch (error) {
            console.log('Error al editar el usuario');
            res.status(500).send('Ocurrio un problema al editar el usuario');
        }
    });

    userRoutes.patch("/update/:id", async(req,res)=>{
        try {
            const {id} = req.params;
            const usuario = await usuariosPatch(id);
            res.status(200).send(usuario);
        } catch (error) {
            console.log("Error al actualizar el usuario");
            res.status(500).send('Ocurrio un problema al actualizar el usuario');
        }
    });

    userRoutes.delete("/delete/:id" , async(req,res)=>{
        try {
            const {id} = req.params;
            const usuario = await usuariosDelete(id);
            res.status(200).send(usuario);
        } catch (error) {
            console.log('Error al eliminar el usuario');
            res.status(500).send('Ocurrio un problema al eliminar el usuario');
        }
    })

export default userRoutes;
