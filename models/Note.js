import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
