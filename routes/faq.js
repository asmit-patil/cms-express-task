var express = require('express')
var router = express.Router();
var content = require('../models/contentstack')

router.get('/', function (req, res) {
    var Query = content.Stack.ContentType('faq').Query()
            .toJSON()
            .find()
            .spread(function success(result) {
                res.render('faq', {
                    entry: result[0],
                });
            }, function error(error) {
                next(error);
    });
    })


module.exports = router