define(['jquery'], function($){
	return function(foo){
		return $(foo)
			.append("About")
			.on('click', function(){
				$(this).trigger('go', [ 'HomeView' ]);
			});
	}
});