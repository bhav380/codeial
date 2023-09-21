const express = require('express');
const router = express.Router();

const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication, usersController.profile);

router.get('/signup', usersController.signUp);
router.get('/signin', usersController.signIn);


router.post('/create-user', usersController.create);

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/signin'}
),usersController.createSession);

router.get('/destroy-session',usersController.destroySession);
module.exports = router;