import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
    imagen:{
        type: String,
        require:true,
        trim:true,
    },
    nombre:{
        type: String,
        require:true,
        trim:true,
    },
    descripcion:{
        type: String,
        require:true,
        trim:true,
    }
},
{
    timestamps:true,
}

);

const Categorias = mongoose.model("Categoria", categoriaSchema);

export default Categorias;