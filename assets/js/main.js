require(["config"], function() {
	require(["jquery"], function($) {

		console.log($);

		$(function(){
			console.log("$ loaded");
		});
	});
});