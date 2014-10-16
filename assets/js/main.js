require(["config"], function() {

	require(["vendor/jquery"], function($) {
		console.log($);

		$(function(){
			console.log("$ loaded", icon.greet("yonas"));

		});
	});

});
