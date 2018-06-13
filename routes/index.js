
module.exports = function(app) {
  app.use('/', require('../middlewares'))
  app.use('/', require('./home'))
  app.use('/faq', require('./faq'))
  app.use('/contactus', require('./contactus'))
 
}