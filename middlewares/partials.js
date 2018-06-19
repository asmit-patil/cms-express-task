var async = require('async')
var Contentstack = require('contentstack')
var config = require('config')
const Stack = Contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.get('enviournment'))

module.exports = function (req, res, next) {
		var contentTypes = ["header", "footer", "home"]
		async.map(
			contentTypes,
			function (contentType, callback) {
						Stack.ContentType(contentType).Query()
						.toJSON()
						.find()
						.spread(function (result){
							
							callback(null, result[0])
							
						}
						
					)
						
						
			},
			function (err, success) {
				if (err) console.error(err)
				res.locals.partials = {}
				contentTypes.forEach((key,result)=> res.locals.partials[key] = success[result])
				next()
			}
		)	
}