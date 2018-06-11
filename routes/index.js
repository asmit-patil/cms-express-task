
module.exports = function(app) {

  app.use('/', require('./home_route'))
  app.use('/faq', require('./faq_route'));
  app.use('/contactus', require('./contactus_route'))
 
}