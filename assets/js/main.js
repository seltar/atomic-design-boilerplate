require(["config"], function() {

	require(["jquery", "atom/icon/icon"], function($) {
		console.log($);

		$(function(){
			console.log("$ loaded");
		});
	});

});
