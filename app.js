import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, URL, DB_HOST, DB_DATABASE, DB_PORT } from './config.js';
import User from './models/User.js';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Agregar esta línea
app.use(express.static('public'));

app.post('/insert', async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newUser = new User({ name, email, phone });
        await newUser.save();
        res.status(201).send('User inserted');
    } catch (error) {
        console.error('Error inserting user:', error); // Agregar registro de error detallado
        res.status(500).send('Error inserting user');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});