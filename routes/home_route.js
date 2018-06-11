var express = require('express')
var router = express.Router();

var promise = require('../models/contentstack')
var config = require('../configuration/constants')

//home route
router.get('/', function(req, res){
    
    var getHeader = promise.promiseFunction(config.headerUrl())
    var getBody = promise.promiseFunction(config.homeUrl())
    var getFooter = promise.promiseFunction(config.footerUrl())
    var urlArray = [getHeader, getBody, getFooter]
    promise.promiseAll(urlArray, 'home', res)
    
}
)



module.exports = router