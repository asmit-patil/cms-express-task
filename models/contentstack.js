// var request = require('request')
// var promise = 
// {
//     promiseFunction : function (url){
//         return new Promise(function(resolve, reject) {
//                 request.get( options = {  
//                         url: url  
//         }, function(err, resp, body) {
//         console.log(resp.statusCode,"______________status code")
//         if (err) {
//             return reject(err)
//         }else if (resp.statusCode >= 200 && resp.statusCode < 300) {
//              console.log(typeof JSON.parse(body),"_____________body type")
//              //body="string"
//              return resolve(JSON.parse(body))
//         } else {
//             if((typeof (JSON.parse(body))) != "object"){
//                 res.render('error')
//             }
//         }
//         })     
//     })
//     },
//     promiseAll : function(urlArray, viewName, res){
//         Promise.all(urlArray)
//             .then(function(values) 
//             {   
//                 var data
//                 console.log( values, "______________result")
//                 res.render(viewName, {
//                         data : values
//                 })
//             })
//             .catch(function(err){
//                 console.log(err)
//             })   
//     }

// }
// module.exports = promise

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
            // res.render('pages/home/index.html', {
            //     entry: result[0],
            // })
          console.log(result,"-------------result")
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
                console.log( values[0].header ,"______________result")
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