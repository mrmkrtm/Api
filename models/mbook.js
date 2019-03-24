var mongoose = require('mongoose');


// Setup schema
var bookSchema = mongoose.Schema({
    genre: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },

    author: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});





// Export Contact model
var Book = module.exports = mongoose.model('book', bookSchema);
module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}