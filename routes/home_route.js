var express = require('express')
var router = express.Router();

var promise = require('../models/contentstack')
var config = require('../configuration/constants')

//home route
router.get('/', function(req, res){
    
    var getHeader = promise.promiseFunction('header')
    var getBody = promise.promiseFunction('home')
    var getFooter = promise.promiseFunction('footer')
    var csArray = [getHeader, getBody, getFooter]
    promise.promiseAll(csArray, 'home', res)

    
}
)



module.exports = router