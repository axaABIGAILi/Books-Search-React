/* COMPONENT INTEGRATION */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* MODEL DECLARATION */

const BookSchema = new Schema ({
    authors: String,
    description: String,
    image: String,
    link: String,
    title: String
});

// build Book model
var Book = mongoose.model('Book', BookSchema);
// export Book schema
module.exports = Book;