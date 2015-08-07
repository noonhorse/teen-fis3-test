'use strict';

var path = require('path'),
	version = require('../package.json').version;

var config ={
	version:version,
	debug: process.env.NODE_ENV !== 'production',
  	port: process.env.PORT || 7001,
  	root: path.resolve(__dirname,'..')
};


module.exports = config;