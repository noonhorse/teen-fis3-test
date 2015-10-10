/**
 * module dependencies
 */
var express = require('express'),
	logger = require('morgan'),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

var app = module.exports = express();
//admin 访问路径
app.set('views', __dirname + '/admin/views');
//admin 访问路径
app.use('/assets',express.static(__dirname + '/admin/assets'));
