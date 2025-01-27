// Importar mongoose
import mongoose from 'mongoose';

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Campo nombre, requerido
    email: { type: String, required: true }, // Campo email, requerido
    phone: { type: String, required: true }, // Campo teléfono, requerido
    matricula: { type: String, required: true } // Campo matrícula, requerido
});

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

// Exportar el modelo de usuario
export default User;