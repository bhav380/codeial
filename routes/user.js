const express = require("express");

const app = express();

const router = express.Router();
app.use(express.static('./assets'));

const userController = require('../controllers/user_controller');

router.get('/profile', userController.profile);

router.get('/contact', userController.contact);


router.get('/signUp', userController.signUp);

router.post('/register', userController.register);

router.post('/login', userController.login)

module.exports = router;