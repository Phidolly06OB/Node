import express from "express";

const router = express.Router();

import { obtenerCategorias, agregarCategorias, borrarCategoria, actualizarCategoria } from "../controllers/categoria.controllers.js";

router.get("/all", obtenerCategorias);

router.post("/agregar", agregarCategorias);

router.delete("/del/:id", borrarCategoria);

router.patch("/upd/:id", actualizarCategoria)

export default router;