var async = require('async')
var Contentstack = require('contentstack')
var config = require('../config/constants')
const Stack = Contentstack.Stack(config.apikey, config.accesstoken, config.enviournment)

module.exports = function (req, res, next) {

	async.parallel([
		function (callback) {
			// Get Header data
			var Query = Stack.ContentType('header').Query()
				.toJSON()
				.find()
				.spread(function success(result) {
					callback(null, result[0])
				}, function error(error) {
					callback(error)
				})
		},
		function (callback) {
			// Get Footer data
			var Query = Stack.ContentType('footer').Query()
				.toJSON()
				.find()
				.spread(function success(result) {
					callback(null, result[0])
				}, function error(error) {
					callback(error)
				})
		}], function (error, success) {
			if (error) return next(error)
			// res.locals.header = success[0]
			// res.locals.footer = success[1]
			res.locals({
				partials: {
					header : success[0],
					footer : success[1]
				}
			})
			next()
		})
};