// @require /js/lib/require.js

/* header js 调用 */

require(['jquery'], function(){
	console.log('header init');
	$('.nav li').hover(function(){
			if($(this).children('ul').length >0 ){
				$(this).children('ul').show();
			}
	},function(){
		$(this).children('ul').hide();
	}).trigger('mouseLeave');
});
