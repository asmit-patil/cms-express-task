var express = require('express')
var router = express.Router()
var content = require('../models/contentstack')


router.get('/', function (req, res) {
content.Stack.ContentType('home').Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('home', {
                entry: result[0],
            })
        }, function error(error) {
            next(error)
})
})

module.exports = router