define(['jquery'], function($){
	return function(foo){
		return $(foo)
			.append("Home")
			.on('click', function(){
				$(this).trigger('go', [ 'AboutView' ]);
			});
	}
});