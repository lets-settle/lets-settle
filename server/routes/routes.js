let controllers = require('../controllers/suggestionsController.js')
var router = require('express').Router();


router.post('/signup', controllers.signupHandler);

router.post('/solo', controllers.soloHandler);

router.post('/newgroup', controllers.addNewGroup);

router.post('/login', controllers.loginHandler);

router.post('/group', controllers.groupHandler);

router.post('/selection', controllers.selectionHandler);

router.post('/selectGrouo', controllers.selectGroup);





module.exports = router;





















// something like this?:
// var controller = require('./controllers');
// var router = require('express').Router();

// //Connect controller methods to their corresponding routes
// router.get('/messages', controller.messages.get);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);


// module.exports = router;
