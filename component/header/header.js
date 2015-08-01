// @require /js/lib/require.js

/* header js */
//define(function (require, exports, module) {

	var $ = require('jquery');

	$('.nav li').hover(function(){
			if($(this).children('ul').length >0 ){
				$(this).children('ul').show();
			}
	},function(){
		$(this).children('ul').hide();
	}).trigger('mouseLeave');

	console.log('true');
// });