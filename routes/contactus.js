var express = require('express')
var router = express.Router();
var content = require('../models/contentstack')

router.get('/', function (req, res) {
    content.model('contact_us', function (result) {
        res.render('contactus', { 
            entry: result[0]
        })
})
})


module.exports = router