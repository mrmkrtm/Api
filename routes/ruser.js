// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'OK',
    });
});
// Import contact controller
var contactController = require('../controllers/cuser');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.newContact);
router.route('/contacts/:contact_id')
    .get(contactController.read)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.deleteContact);

    
// Export API routes
module.exports = router;