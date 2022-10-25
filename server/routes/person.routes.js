const PersonController = require('../controllers/person.controller');
// this code imports the controller so we can express our message in a route
module.exports = (app) => {
    app.get('/api', PersonController.index);
}