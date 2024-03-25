import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';


//Inicializar express()
const app = express();
dotenv.config();

//Mensinar que las respuestas seran en tipo Json
app.use(express.json());

app.use("/api/users", userRoutes)

//Levantar el server
app.listen(process.env.PORT, process.env.IP_ADDRESS,() => {
    console.log(`Servidor Corriendo en http://${process.env.IP_ADDRESS}:${process.env.PORT}`)
})