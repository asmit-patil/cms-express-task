var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')
var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')

router.get('/', function (req, res) {
    Stack.ContentType('blogs').Query()
    .toJSON()
    .find()
    .spread(function success(result) {
        console.log(result)
        res.render('blogslist', { entry: result })
    })
})



router.get('/:title', function (req, res) {
    console.log(req.params.title)
    Stack.ContentType('blogs').Query()
    .where('title', req.params.title)
    .toJSON()
    .find()
    .spread(function success(result) {
        console.log(result[0])
        res.render('blog', { entry: result[0] })
    })
})

module.exports = router

