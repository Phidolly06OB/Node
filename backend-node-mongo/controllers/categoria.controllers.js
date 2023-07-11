import Categorias from "../models/categorias.js";

const obtenerCategorias = async (req, res) =>{
    
    const categorias = await Categorias.find();
    
    res.json(categorias);
} 

const agregarCategorias = async (req, res) =>{

    const categoria = new Categorias(req.body);

    try {
        const nuevaCategoria = await categoria.save();

        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
}

const borrarCategoria = async (req, res) => {

    try {
        await Categorias.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(500)
        res.send({error: "Categoria no existe"})
    }

}

const actualizarCategoria = async (req, res) => {
    try {
        const categoria = await Categorias.findOne({_id: req.params.id})

        if (req.body.iamgen){
            categoria.imagen = req.body.iamgen;
        }

        if(req.body.nombre){
            categoria.nombre = req.body.nombre;
        }

        if(req.body.descripcion){
            categoria.descripcion = req.body.descripcion;
        }

        await categoria.save();
        res.send(categoria)

    } catch (error) {
        res.status(404)
        res.send({errror: "NO exists"})
    }
}

export {obtenerCategorias, agregarCategorias, borrarCategoria, actualizarCategoria};