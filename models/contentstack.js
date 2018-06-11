var Contentstack = require('contentstack')
var config = require('../configuration/constants')
const Stack = Contentstack.Stack(config.apikey, config.accesstoken, config.enviournment);

var promise =
{

    promiseFunction: function (ct){
    
        return new Promise(function(resolve, reject) {
        var Query = Stack.ContentType(ct).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            return resolve(result[0])
        }, function error(error) {
            next(error)
        })
    
    })
    },

    promiseAll : function(csArray, viewName, res){
        Promise.all(csArray)
            .then(function(values) 
            {   
                var data
                res.render(viewName, {
                    data : values
                })
            })
            .catch(function(err){
                console.log(err)
            })   
        }
        

}
module.exports = promise