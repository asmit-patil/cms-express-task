var Contentstack = require('contentstack')
var config = require('config')

exports.Stack = Contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.get('enviournment'))



