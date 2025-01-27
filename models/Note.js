// Importar mongoose
import mongoose from 'mongoose';

// Definir el esquema de la nota
const noteSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Campo nombre, requerido
    category: { type: String, required: true }, // Campo categoría, requerido
    content: { type: String, required: true } // Campo contenido, requerido
});

// Crear el modelo de nota
const Note = mongoose.model('Note', noteSchema);

// Exportar el modelo de nota
export default Note;
