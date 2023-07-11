import express from 'express';
import dotenv from "dotenv"
import conectarDB from './config/config.js';
import categoriasRouter from './routes/categoria.routes.js';

const app = express();

app.use(express.json());

dotenv.config();

app.use("/categorias", categoriasRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} `);
})