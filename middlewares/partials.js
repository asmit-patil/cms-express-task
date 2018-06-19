var async = require('async')
var Contentstack = require('contentstack')
var config = require('config')
const Stack = Contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.get('enviournment'))

module.exports = function (req, res, next) {
	
		async.map(
			["header", "footer", "home"],
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
				if (err) {
					console.error(err)
				  }
			console.log("in cb function")
			console.log(success[0], "success data")
			console.log(success.length)
			res.locals.partials = {}
			res.locals.partials.header = success[0]
			res.locals.partials.footer = success[1]
		
			next()
			}
		)	
}