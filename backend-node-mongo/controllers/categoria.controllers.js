import Categorias from "../models/categorias.js";

const obtenerCategorias = async (req, res) =>{
    
    const categorias = await Categorias.find();
    
    res.json(categorias);
} 

export {obtenerCategorias};