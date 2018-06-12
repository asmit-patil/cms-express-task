var Contentstack = require('contentstack')
var config = require('../config/constants')
const Stack = Contentstack.Stack(config.apikey, config.accesstoken, config.enviournment);


module.exports.model = function (contentype, callback) {
var Query = Stack.ContentType(contentype).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            console.log(result[0])
            callback(result)
        }, function error(error) {
            next(error)
        })
}