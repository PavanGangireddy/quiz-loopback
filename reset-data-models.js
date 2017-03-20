
'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
var config = require('./reset-script/reset-config.json');

boot(app, config, function(err) {
  if (err) throw err;
});
