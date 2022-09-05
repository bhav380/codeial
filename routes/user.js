const express = require("express");

const router = express.Router();

const profileController = require('../controllers/profile_controller');

router.get('/profile', profileController.profile);

router.get('/contact', profileController.contact);

module.exports = router;