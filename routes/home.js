var express = require('express')
var router = express.Router();
var content = require('../models/contentstack')

router.get('/', function (req, res) {
    content.model('home', function (result) {
        res.render('home', { 
            entry: result[0]
        })
})
})


module.exports = router