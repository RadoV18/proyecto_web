const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citaMedicaSchema = new Schema({
    nombre: String,
    email: String,
    fecha: Date,
    asunto: String,
    mensaje: String
}, { collection: 'citas-medicas' });

citaMedicaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('citaMedica', citaMedicaSchema);