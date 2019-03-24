Book = require('../models/mbook');

    //CREAR (funciona)
function create(req,res){
    var book = new Book();
    book.title = req.body.title? req.body.title : contact.title;
    book.author = req.body.author;
    book.genre = req.body.genre;

    book.save(function (err) {
    
    res.json({
            message: 'Book added!',
            data: book
        });
    });
}

    //VER (funciona)
    function index(req, res) {
        Book.get(function (err, books) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            res.json({
                status: "success",
                message: "Contacts retrieved successfully",
                data: books
            });
        });
    };

    //LEER (funciona)
function read(req, res) {
        Book.findById( req.params.book_id, function (err, book) {
            if (err)
                res.send(err);
            res.json({
                message: 'Info',
                data: book
            });
        });
    };

        //BÚSQUEDA POR ATRIBUTOS (funciona)
function findTitle(req, res){

    Book.findOne({ title : req.params.title},
        function (err, book){
        if (err)
        res.send(err);
    res.json({
        message: 'Info',
        data: book
    });
    });
};
function findGenre(req, res){

    Book.findOne({  genre : req.params.genre },
        function (err, book){
        if (err)
        res.send(err);
    res.json({
        message: 'Info',
        data: book
    });
    });
};
function findAuthor(req, res){

    Book.findOne({ author : req.params.author},
        function (err, book){
        if (err)
        res.send(err);
    res.json({
        message: 'Info',
        data: book
    });
    });
};

    //MODIFICAR (funciona)
function update(req, res) {
    Book.findById(req.params.book_id, function (err, book) {
            if (err)
                res.send(err);
            book.title = req.body.title ? req.body.title : book.title;
            book.genre = req.body.genre;
            book.author = req.body.author;
    
            book.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Book updated!',
                    data: book
                });
            });
        });
    };
    

    // BORRAR (funciona)
function deleteBook(req, res) {
        Book.remove({
            _id: req.params.book_id
        }, function (err, book) {
            if (err)
                res.send(err);
    res.json({
                status: "success",
                message: 'Book deleted!'
            });
        });
    };

module.exports = {
    index,
    create,
    read,
    update,
    deleteBook,
    findTitle,
    findGenre,
    findAuthor
}



