var express = require('express');
var router = express.Router();
var getClass = require('./../controller/overview/getClass');
var getArtList = require('./../controller/overview/getArtList');

router.get('/getClass', getClass);
router.get('/getArtList', getArtList);

module.exports =  router;