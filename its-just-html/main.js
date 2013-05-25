require.config({
	baseUrl: './modules',
    paths: {
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min' //from CDN
    }
});

require(['jquery', '../lib/router'], function($, router){
	router.onRoute(function(route, direction){
		require([route.name], function(view){
			new view($('body').empty());
		});
	});

	$(function(){
		$('body').on('go', function(e, name){
			router.route({ name: name });
		})

		router.route({ name: 'HomeView' });
	})
});