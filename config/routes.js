/**
 *  routes.js
 */
'use strict';

/*Module dependencies*/

var admin = require('../controller/admin'),
	login = require('../controller/login');

module.exports = function routes(app){
	app.get('/login', login);

	app.post('/login', login.loginin)

}