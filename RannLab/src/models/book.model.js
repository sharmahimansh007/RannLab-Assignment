const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    document: { type: String, required: true },
    summary: { type: String, required: true },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    remark: { type: String, required: true },
    review : { type: String, required: false },
    comments: { type: String, required: false },
}, { timestamps: true });


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;