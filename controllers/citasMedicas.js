const citasMedicasRouter = require('express').Router();

const CitasMedicas = require('../models/citaMedica');

citasMedicasRouter.get('/', async (req, res) => {
    const citasMedicas = await CitasMedicas.find({});
    res.json(citasMedicas);
});

citasMedicasRouter.get('/:id', async (req, res) => {
    const citaMedica = await CitasMedicas.findById(req.params.id);
    if(!citaMedica) {
        res.status(404).end();
    }

    res.json(citaMedica);
});

citasMedicasRouter.post('/', (req, res) => {
    const data = req.body;

    const newCitaMedica = new CitasMedicas({
        nombre: data.nombre,
        email: data.email,
        fecha: data.fecha,
        asunto: data.asunto,
        mensaje: data.mensaje
    });

    newCitaMedica.save();
    res.status(201).end();
});

module.exports = citasMedicasRouter;