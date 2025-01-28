// Importar módulos necesarios
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, URL, DB_HOST, DB_DATABASE, DB_PORT } from './config.js';
// Importar el modelo de Note
import Note from './models/Note.js';

// Conectar a la base de datos MongoDB
//useNewUrlParser sirve para para permitir que los usuarios vuelvan al analizador anterior de cadenas de conexión de MongoDB en caso de encontrar un error en el nuevo analizador
//useUnifiedTopology se utiliza para permitir que mongoose.connect() vuelva a intentar la conexión a MongoDB durante un tiempo determinado, antes de generar un error. 
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log('MongoDB connected')) // Mensaje de éxito en la conexión
    .catch(err => console.error(err)); // Manejo de errores en la conexión

// Crear una instancia de la aplicación Express
const app = express();

// Usar middlewares
app.use(cors()); // Habilitar CORS para permitir solicitudes desde otros dominios
app.use(morgan('dev')); // Usar morgan para registrar las solicitudes HTTP en la consola
app.use(express.json()); // Middleware para parsear cuerpos de solicitudes JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear cuerpos de solicitudes URL-encoded
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

// Ruta para insertar una nueva nota
app.post('/notes', async (req, res) => {
    const { name, category, content } = req.body; // Extraer datos del cuerpo de la solicitud
    try {
        const newNote = new Note({ name, category, content }); // Crear una nueva instancia de Note
        await newNote.save(); // Guardar la nueva nota en la base de datos
        res.status(201).send('Nota guardada'); // Enviar respuesta de éxito
    } catch (error) {
        console.error('Error al guardar la nota:', error); // Registrar el error en la consola
        res.status(500).send('Error saving note'); // Enviar respuesta de error
    }
});

// Ruta para obtener todas las notas
app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find(); // Obtener todas las notas de la base de datos
        res.status(200).json(notes); // Enviar las notas en la respuesta
    } catch (error) {
        console.error('Error fetching notes:', error); // Registrar el error en la consola
        res.status(500).send('Error fetching notes'); // Enviar respuesta de error
    }
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Mensaje de éxito al iniciar el servidor
});