const express = require("express");
const router = express.Router();

const {
    obtenerProductores,
    obtenerProductorPorId,
    crearProductor,
    modificarProductor,
    eliminarProductor
} = require("../controllers/productor.controller");

// GET - Obtener todos
router.get("/", obtenerProductores);

// GET - Obtener por ID
router.get("/:id", obtenerProductorPorId);

// POST - Crear
router.post("/", crearProductor);

// PUT - Modificar
router.put("/:id", modificarProductor);

// DELETE - Eliminar
router.delete("/:id", eliminarProductor);

module.exports = router;