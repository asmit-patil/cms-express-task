var Contentstack = require('contentstack')
var config = require('../config/constants')
const Stack = Contentstack.Stack(config.apikey, config.accesstoken, config.enviournment);



module.exports.Stack = Stack