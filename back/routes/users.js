var express = require('express');
var router = express.Router();

const addUser = require('../controllers/users');

router.post('/adduser', addUser);

module.exports = router;
