import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, URL, DB_HOST, DB_DATABASE, DB_PORT } from './config.js';
//import User from './models/User.js';
import Note from './models/Note.js';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 

/*
app.post('/insert', async (req, res) => {
    const { name, email, phone, matricula } = req.body;
    try {
        const newUser = new User({ name, email, phone, matricula });
        await newUser.save();
        res.status(201).send('User inserted');
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).send('Error inserting user');
    }
});
*/

app.post('/notes', async (req, res) => {
    const { name, category, content } = req.body;
    try {
        const newNote = new Note({ name, category, content });
        await newNote.save();
        res.status(201).send('Nota guardada');
    } catch (error) {
        console.error('Error al guardar la nota:', error);
        res.status(500).send('Error saving note');
    }
});

app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).send('Error fetching notes');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});