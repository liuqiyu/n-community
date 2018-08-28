var express = require('express');
var router = express.Router();
var getClass = require('./../controller/overview/getClass');
var getTag = require('./../controller/overview/getTag');
var getArtList = require('./../controller/overview/getArtList');
var createArticle = require('./../controller/overview/createArticle');

router.get('/getClass', getClass);
router.get('/getTag', getTag);
router.get('/getArtList', getArtList);
router.post('/createArticle', createArticle);

module.exports =  router;