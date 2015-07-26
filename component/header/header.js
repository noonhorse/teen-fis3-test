/* header js */

var $ = require('jQuery');

$('.nav li').hover(function(){
		if($(this).children('ul').length >0 ){
			$(this).children('ul').show();
		}
},function(){
	$(this).children('ul').hide();
}).trigger('mouseLeave');