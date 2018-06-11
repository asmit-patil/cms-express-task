var express = require('express')
var router = express.Router();

var promise = require('../models/contentstack')
var config = require('../configuration/constants')

//contactus route
router.get('/', function(req, res, next){
    
    var getHeader = promise.promiseFunction(config.headerUrl())
    var getBody = promise.promiseFunction(config.contactUsUrl())
    var getFooter = promise.promiseFunction(config.footerUrl())
    var urlArray = [getHeader, getBody, getFooter]
    promise.promiseAll(urlArray, 'contactus', res)
})

module.exports = router