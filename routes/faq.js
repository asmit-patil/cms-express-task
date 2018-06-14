var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')

router.get('/', function (req, res) {
    Stack.ContentType('faq').Query()
            .toJSON()
            .find()
            .spread(function success(result) {
                console.log(result[0])
                res.render('faq', {
                    entry: result[0],
                })
            }, function error(error) {
                next(error)
    })
    })


module.exports = router