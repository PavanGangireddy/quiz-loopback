var app = require('../server/server');
var mongodb = app.datasources.mongodb;

var sampleData = [  
      {  
         "name":"Shafeeq",
         "age":24,
         "gender":"male"
      },
      {  
         "name":"Amita",
         "age":28,
         "gender":"female"
      }
   ]

module.exports = function createCoffeeShops(cb) {
    mongodb.automigrate('Customer', function(err) {
      if (err) return cb(err);
      var Customer = app.models.Customer;
      Customer.create(sampleData, cb);
    });
}
