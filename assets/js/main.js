require(["config"]);

require(["jquery", 'atom/example/example'], function($, Example) {


	var components = [];

    components.push(new Example());

    var init = function(){
        for(var i = 0; i < components.length; i++){
            components[i].init();
        }
    };
    var destroy = function(){
        for(var i = 0; i < components.length; i++){
            components[i].destroy();
        }
    };


	$(function(){
		init();
	});
});