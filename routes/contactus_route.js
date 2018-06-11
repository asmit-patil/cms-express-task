var express = require('express')
var router = express.Router();

var promise = require('../models/contentstack')
var config = require('../configuration/constants')

//contactus route
router.get('/', function(req, res, next){
    
    var getHeader = promise.promiseFunction('header')
    var getBody = promise.promiseFunction('contact_us')
    var getFooter = promise.promiseFunction('footer')
    var csArray = [getHeader, getBody, getFooter]
    promise.promiseAll(csArray, 'contactus', res)
})

module.exports = router