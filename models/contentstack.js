var Contentstack = require('contentstack')
var config = require('../config/constants')
exports.Stack = Contentstack.Stack(config.apikey, config.accesstoken, config.enviournment)



