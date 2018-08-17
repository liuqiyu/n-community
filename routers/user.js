var express = require('express');
var router = express.Router();
var login = require('./../controller/user/login');
var logout = require('./../controller/user/logout');
var register = require('./../controller/user/register');
var index = require('./../controller/user/index');

router.get('/login', login);
router.post('/login', login);
router.get('/register', register);
router.post('/register', register);
router.get('/logout', logout);
router.get('/index', index);

module.exports =  router;