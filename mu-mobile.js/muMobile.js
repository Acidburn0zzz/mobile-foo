var muMobile = {};

var muMobile.HashState = function(onChange){
	function push(newState){
		window.location.hash = newState;
	};

	function pop(){
		window.history.back();
	};

	function onHashChange(){
		var hash = window.location.hash.split('#'),
			state = null;

		if (hash.length > 1){
			state = hash[1];
		}

		onChange(state);
	};

	window.addEventListener("hashchange", onHashChange);

	return {
		Push: push,
		Pop: pop
	};
};