let productores = [
    {
        id: 1,
        nombre: "Productor Ejemplo",
        emprendimiento: "AgroJáchal",
        producto: "Productos regionales",
        localidad: "Jáchal",
        telefono: "2640000000"
    }
];

// GET - Obtener todos los productores
const obtenerProductores = (req, res) => {
    res.json(productores);
};

// GET - Obtener un productor por ID
const obtenerProductorPorId = (req, res) => {
    const id = parseInt(req.params.id);

    const productor = productores.find(p => p.id === id);

    if (!productor) {
        return res.status(404).json({
            mensaje: "Productor no encontrado"
        });
    }

    res.json(productor);
};

// POST - Crear un productor
const crearProductor = (req, res) => {
    const nuevoProductor = {
        id: productores.length + 1,
        nombre: req.body.nombre,
        emprendimiento: req.body.emprendimiento,
        producto: req.body.producto,
        localidad: req.body.localidad,
        telefono: req.body.telefono
    };

    productores.push(nuevoProductor);

    res.status(201).json(nuevoProductor);
};

// PUT - Modificar un productor
const modificarProductor = (req, res) => {
    const id = parseInt(req.params.id);

    const productor = productores.find(p => p.id === id);

    if (!productor) {
        return res.status(404).json({
            mensaje: "Productor no encontrado"
        });
    }

    productor.nombre = req.body.nombre;
    productor.emprendimiento = req.body.emprendimiento;
    productor.producto = req.body.producto;
    productor.localidad = req.body.localidad;
    productor.telefono = req.body.telefono;

    res.json(productor);
};

// DELETE - Eliminar un productor
const eliminarProductor = (req, res) => {
    const id = parseInt(req.params.id);

    const posicion = productores.findIndex(p => p.id === id);

    if (posicion === -1) {
        return res.status(404).json({
            mensaje: "Productor no encontrado"
        });
    }

    productores.splice(posicion, 1);

    res.json({
        mensaje: "Productor eliminado correctamente"
    });
};

module.exports = {
    obtenerProductores,
    obtenerProductorPorId,
    crearProductor,
    modificarProductor,
    eliminarProductor
};