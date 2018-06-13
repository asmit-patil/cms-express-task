var express = require('express')
var router = express.Router()
var content = require('../models/contentstack')

router.get('/', function (req, res) {
    var Query = content.Stack.ContentType('contact_us').Query()
            .toJSON()
            .find()
            .spread(function success(result) {
                res.render('contactus', {
                    entry: result[0],
                })
            }, function error(error) {
                next(error)
    })
    })

module.exports = router