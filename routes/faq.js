var express = require('express')
var router = express.Router();
var content = require('../models/contentstack')

router.get('/', function (req, res) {
    content.model('faq', function (result) {
        res.render('faq', { 
            entry: result[0]
        })
})
})


module.exports = router