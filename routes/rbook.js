let router = require('express').Router();

var bookController = require('../controllers/cbook');

router.route('/library')
    .post(bookController.create)
    .get(bookController.index);
router.route('/library/:book_id')
    .get(bookController.read)
    .put(bookController.update)
    .delete(bookController.deleteBook);
router.route('/library/title/:title')
    .get(bookController.findTitle);
router.route('/library/genre/:genre')
    .get(bookController.findGenre);
router.route('/library/author/:author')
    .get(bookController.findAuthor);

    module.exports = router;