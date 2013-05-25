define(function(){
	var depth = -1,
		handlers = [];

	function route(route){
		if (depth === -1){
			window.location.hash = '';
			window.addEventListener('hashchange', onHashChange);
		}

		var request = {
			route: route,
			depth: depth + 1
		};
	
		window.location.hash = encodeURIComponent(JSON.stringify(request));
	}

	function onHashChange(){
		var hash = window.location.hash.split('#')[1],
			request = JSON.parse(decodeURIComponent(hash)),
			direction = request.depth < depth ? 'back' : 'forward',
			i;

		for (i = 0; i < handlers.length; i++){
			handlers[i](request.route, direction);
		}

		depth = request.depth;
	}

	return {
		route: route,
		back: function(){ window.navigate.back(); },
		onRoute: function(handler){ handlers.push(handler); return this; }
	};
})