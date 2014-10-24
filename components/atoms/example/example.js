// > define dependencies
define([],  function(){

	// > example
	var example = {
		greet: function(name){
			if(!name){
				name = "world";
			}
			return 'hello, '+name+'!';
		}
	};

	// > return the component
	return example;
});