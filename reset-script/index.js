var async = require('async');
var app = require('../server/server');
var createCustomers = require('./create-customers.js');

module.exports = function(app) {
  //data sources
  var mongodb = app.datasources.mongodb; 
  //create all models
  async.parallel({
    coffeeShops: async.apply(createCustomers)
  }, function(err, results) {
    if (err) throw err;
      console.log('> models created sucessfully');
      process.exit(code=0);
    });
}